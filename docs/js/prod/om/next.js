// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.log');
goog.require('om.next.cache');
goog.require('om.next.impl.parser');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('om.util');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.api');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$static,null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with(cljs.core.complement(cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq(dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fields,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$protocols,cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__29064 = split_on_static(dt__$1);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29064,(0),null);
var vec__29067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29064,(1),null);
var seq__29068 = cljs.core.seq(vec__29067);
var first__29069 = cljs.core.first(seq__29068);
var seq__29068__$1 = cljs.core.next(seq__29068);
var _ = first__29069;
var first__29069__$1 = cljs.core.first(seq__29068__$1);
var seq__29068__$2 = cljs.core.next(seq__29068__$1);
var sym = first__29069__$1;
var remaining = seq__29068__$2;
var post = vec__29067;
var dt_SINGLEQUOTE___$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(dt_SINGLEQUOTE_,pre);
if(cljs.core.seq(post)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,cljs.core.cst$sym$field)){
var vec__29070 = cljs.core.split_at((2),remaining);
var field_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29070,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29070,(1),null);
var G__29076 = cljs.core.seq(dt__$2);
var G__29077 = dt_SINGLEQUOTE___$1;
var G__29078 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields], null),cljs.core.conj,cljs.core.vec(field_info));
dt__$1 = G__29076;
dt_SINGLEQUOTE_ = G__29077;
statics = G__29078;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__29073 = split_on_symbol(remaining);
var protocol_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(0),null);
var dt__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(1),null);
var G__29079 = cljs.core.seq(dt__$2);
var G__29080 = dt_SINGLEQUOTE___$1;
var G__29081 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols], null),cljs.core.into,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__29079;
dt_SINGLEQUOTE_ = G__29080;
statics = G__29081;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__29082 = null;
var G__29083 = dt_SINGLEQUOTE___$1;
var G__29084 = statics;
dt__$1 = G__29082;
dt_SINGLEQUOTE_ = G__29083;
statics = G__29084;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dt,dt_SINGLEQUOTE_,cljs.core.cst$kw$statics,statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__5459__auto__ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29085_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29085_SHARP_)].join(''),/\//));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__5459__auto__)){
var invalid = temp__5459__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid)," protocol declaration must appear with `static`."].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$initLocalState,cljs.core.cst$sym$componentWillMount,cljs.core.cst$sym$componentDidUpdate,cljs.core.cst$sym$componentWillUnmount,cljs.core.cst$sym$componentWillReceiveProps,cljs.core.cst$sym$shouldComponentUpdate,cljs.core.cst$sym$render,cljs.core.cst$sym$componentWillUpdate,cljs.core.cst$sym$componentDidMount],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$prev_DASH_props,cljs.core.cst$sym$prev_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this,cljs.core.cst$sym$next_DASH_props,cljs.core.cst$sym$next_DASH_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$this], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__29087){
var vec__29089 = p__29087;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(0),null);
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(1),null);
var method = vec__29089;
var sig_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sig_SINGLEQUOTE_),cljs.core.count(sig))){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid signature for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),", need ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),"\n","(= (count sig') (count sig))"].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reshape,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$sym$initLocalState,(function (p__29140){
var vec__29141 = p__29140;
var seq__29142 = cljs.core.seq(vec__29141);
var first__29143 = cljs.core.first(seq__29142);
var seq__29142__$1 = cljs.core.next(seq__29142);
var name = first__29143;
var first__29143__$1 = cljs.core.first(seq__29142__$1);
var seq__29142__$2 = cljs.core.next(seq__29142__$1);
var vec__29144 = first__29143__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29144,(0),null);
var args = vec__29144;
var body = seq__29142__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__29101__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj),cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__29101__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillReceiveProps,(function (p__29163){
var vec__29164 = p__29163;
var seq__29165 = cljs.core.seq(vec__29164);
var first__29166 = cljs.core.first(seq__29165);
var seq__29165__$1 = cljs.core.next(seq__29165);
var name = first__29166;
var first__29166__$1 = cljs.core.first(seq__29165__$1);
var seq__29165__$2 = cljs.core.next(seq__29165__$1);
var vec__29167 = first__29166__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29167,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29167,(1),null);
var args = vec__29167;
var body = seq__29165__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29102__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29103__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29102__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29103__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29102__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUpdate,(function (p__29192){
var vec__29193 = p__29192;
var seq__29194 = cljs.core.seq(vec__29193);
var first__29195 = cljs.core.first(seq__29194);
var seq__29194__$1 = cljs.core.next(seq__29194);
var name = first__29195;
var first__29195__$1 = cljs.core.first(seq__29194__$1);
var seq__29194__$2 = cljs.core.next(seq__29194__$1);
var vec__29196 = first__29195__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(0),null);
var next_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(1),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(2),null);
var args = vec__29196;
var body = seq__29194__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29108__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29109__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29108__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = next_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29109__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$pendingState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29109__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__29110__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29111__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29112__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = next_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29111__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29112__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29113__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29113__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29113__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__29114__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__29114__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29111__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29112__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29107__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__29110__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentDidUpdate,(function (p__32251){
var vec__32252 = p__32251;
var seq__32253 = cljs.core.seq(vec__32252);
var first__32254 = cljs.core.first(seq__32253);
var seq__32253__$1 = cljs.core.next(seq__32253);
var name = first__32254;
var first__32254__$1 = cljs.core.first(seq__32253__$1);
var seq__32253__$2 = cljs.core.next(seq__32253__$1);
var vec__32255 = first__32254__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32255,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32255,(1),null);
var prev_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32255,(2),null);
var args = vec__32255;
var body = seq__32253__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29115__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__29116__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__29117__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29115__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = prev_props;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prev_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__29116__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29115__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = prev_state;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__29117__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$previousState")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29115__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillMount,(function (p__32258){
var vec__32259 = p__32258;
var seq__32260 = cljs.core.seq(vec__32259);
var first__32261 = cljs.core.first(seq__32260);
var seq__32260__$1 = cljs.core.next(seq__32260);
var name = first__32261;
var first__32261__$1 = cljs.core.first(seq__32260__$1);
var seq__32260__$2 = cljs.core.next(seq__32260__$1);
var vec__32262 = first__32261__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32262,(0),null);
var args = vec__32262;
var body = seq__32260__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29118__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29118__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29119__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29118__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29119__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29119__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29118__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$componentWillUnmount,(function (p__32265){
var vec__32266 = p__32265;
var seq__32267 = cljs.core.seq(vec__32266);
var first__32268 = cljs.core.first(seq__32267);
var seq__32267__$1 = cljs.core.next(seq__32267);
var name = first__32268;
var first__32268__$1 = cljs.core.first(seq__32267__$1);
var seq__32267__$2 = cljs.core.next(seq__32267__$1);
var vec__32269 = first__32268__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32269,(0),null);
var args = vec__32269;
var body = seq__32267__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__29121__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29122__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__29121__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29123__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29122__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29124__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29122__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29123__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29123__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29123__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29124__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29124__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29120__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}),cljs.core.cst$sym$render,(function (p__32272){
var vec__32273 = p__32272;
var seq__32274 = cljs.core.seq(vec__32273);
var first__32275 = cljs.core.first(seq__32274);
var seq__32274__$1 = cljs.core.next(seq__32274);
var name = first__32275;
var first__32275__$1 = cljs.core.first(seq__32274__$1);
var seq__32274__$2 = cljs.core.next(seq__32274__$1);
var vec__32276 = first__32275__$1;
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(0),null);
var args = vec__32276;
var body = seq__32274__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_reconciler_STAR_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_depth_STAR_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_inc),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_depth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_shared_STAR_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_shared),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_instrument_STAR_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_instrument),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_parent_STAR_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29125__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
})], null),cljs.core.cst$kw$defaults,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$isMounted),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_boolean),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_getValueByKeys),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj(cljs.core.List.EMPTY,"_renderedComponent")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$shouldComponentUpdate),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29128__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__29129__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$value")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cond_DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_OmProps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_unwrap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_or),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_state)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29128__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"omcljs$state")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_children)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_children__29129__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUpdate),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_state__29128__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_Ident),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29130__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29131__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_ident),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_next_DASH_props),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_props__29127__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29130__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29131__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29132__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29132__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexes),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$idxr__29132__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__29133__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexes__29133__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ident__29130__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_disj),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$next_DASH_ident__29131__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fnil),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_merge_DASH_pending_DASH_state_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentDidUpdate),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_props__29134__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prev_DASH_state__29135__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_clear_DASH_prev_DASH_props_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillMount),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_index_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$componentWillUnmount),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__29137__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_get_DASH_reconciler),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29138__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$config),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$r__29137__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29139__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$indexer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cfg__29138__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_and),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29139__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_in),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_deref),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29139__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_swap_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$st__29139__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_update_DASH_in),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$om$next_SLASH_queries)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next$protocols_SLASH_drop_DASH_component_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$indexer__29136__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__29126__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))))], null);
om.next.reshape = (function om$next$reshape(dt,p__32279){
var map__32280 = p__32279;
var map__32280__$1 = ((((!((map__32280 == null)))?((((map__32280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32280):map__32280);
var reshape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32280__$1,cljs.core.cst$kw$reshape);
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32280__$1,cljs.core.cst$kw$defaults);
var reshape_STAR_ = ((function (map__32280,map__32280__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_(x)) && (cljs.core.contains_QMARK_(reshape,cljs.core.first(x)))){
var reshapef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reshape,cljs.core.first(x));
om.next.validate_sig(x);

return (reshapef.cljs$core$IFn$_invoke$arity$1 ? reshapef.cljs$core$IFn$_invoke$arity$1(x) : reshapef.call(null,x));
} else {
return x;
}
});})(map__32280,map__32280__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__32280,map__32280__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__32292){
var vec__32293 = p__32292;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32293,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32293,(1),null);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([name]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,ret))))){
var vec__32296 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null)),ret);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(0),null);
var vec__32299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32296,(1),null);
var seq__32300 = cljs.core.seq(vec__32299);
var first__32301 = cljs.core.first(seq__32300);
var seq__32300__$1 = cljs.core.next(seq__32300);
var p = first__32301;
var after = seq__32300__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(before),p,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(name,impl)], 0)),after);
} else {
return ret;
}
});})(map__32280,map__32280__$1,reshape,defaults))
;
var add_defaults = ((function (map__32280,map__32280__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_defaults_step,dt__$1,defaults);
});})(map__32280,map__32280__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__32280,map__32280__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$Object,null], null), null),dt__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dt__$1,cljs.core.cst$sym$Object);
} else {
return dt__$1;
}
});})(map__32280,map__32280__$1,reshape,defaults))
;
return add_defaults(add_object_protocol(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var G__32318 = arguments.length;
switch (G__32318) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__32323){
var vec__32324 = p__32323;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32324,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__11366__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = value;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});
var docstring = ((typeof cljs.core.first(forms) === 'string')?cljs.core.first(forms):null);
var forms__$1 = (function (){var G__32328 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest(G__32328);
} else {
return G__32328;
}
})();
var map__32327 = om.next.collect_statics(forms__$1);
var map__32327__$1 = ((((!((map__32327 == null)))?((((map__32327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32327):map__32327);
var dt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32327__$1,cljs.core.cst$kw$dt);
var statics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32327__$1,cljs.core.cst$kw$statics);
var _ = om.next.validate_statics(dt);
var rname = (cljs.core.truth_(env)?cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),name)):name);
var ctor = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_defn),(function (){var x__11366__auto__ = cljs.core.with_meta(name,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$jsdoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta(name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null):null)], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$initLocalState),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_state),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_js_DASH_obj))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32311__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
var set_react_proto_BANG_ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_clone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_React$Component$prototype))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
var ctor__$1 = (cljs.core.truth_(cljs.core.cst$kw$once.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_exists_QMARK_),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11366__auto__ = ctor;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = set_react_proto_BANG_;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0)))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):cljs.core.cst$sym$js_SLASH_undefined);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11366__auto__ = ctor__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.next.reshape(dt,om.next.reshape_map)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_constructor),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_displayName)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = display_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_prototype),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__DASH_om$isComponent)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__32327,map__32327__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__32312_SHARP_){
return field_set_BANG_(name,p1__32312_SHARP_);
});})(docstring,forms__$1,map__32327,map__32327__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (docstring,forms__$1,map__32327,map__32327__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__32313_SHARP_){
var G__32331 = p1__32313_SHARP_;
if((p1__32313_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__32331,cljs.core.assoc,cljs.core.cst$kw$static,true);
} else {
return G__32331;
}
});})(docstring,forms__$1,map__32327,map__32327__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__11366__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(statics)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__11366__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__11366__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__11366__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__32314__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__32315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__32316__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__32315__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

var ret__11737__auto___32337 = (function (){
om.next.defui = (function om$next$defui(var_args){
var args__11698__auto__ = [];
var len__11691__auto___32338 = arguments.length;
var i__11692__auto___32339 = (0);
while(true){
if((i__11692__auto___32339 < len__11691__auto___32338)){
args__11698__auto__.push((arguments[i__11692__auto___32339]));

var G__32340 = (i__11692__auto___32339 + (1));
i__11692__auto___32339 = G__32340;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3(name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq32333){
var G__32334 = cljs.core.first(seq32333);
var seq32333__$1 = cljs.core.next(seq32333);
var G__32335 = cljs.core.first(seq32333__$1);
var seq32333__$2 = cljs.core.next(seq32333__$1);
var G__32336 = cljs.core.first(seq32333__$2);
var seq32333__$3 = cljs.core.next(seq32333__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__32334,G__32335,G__32336,seq32333__$3);
});

return null;
})()
;
om.next.defui.cljs$lang$macro = true;

var ret__11737__auto___32344 = (function (){
om.next.ui = (function om$next$ui(var_args){
var args__11698__auto__ = [];
var len__11691__auto___32345 = arguments.length;
var i__11692__auto___32346 = (0);
while(true){
if((i__11692__auto___32346 < len__11691__auto___32345)){
args__11698__auto__.push((arguments[i__11692__auto___32346]));

var G__32347 = (i__11692__auto___32346 + (1));
i__11692__auto___32346 = G__32347;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("ui_"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH_defui),(function (){var x__11366__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq32341){
var G__32342 = cljs.core.first(seq32341);
var seq32341__$1 = cljs.core.next(seq32341);
var G__32343 = cljs.core.first(seq32341__$1);
var seq32341__$2 = cljs.core.next(seq32341__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__32342,G__32343,seq32341__$2);
});

return null;
})()
;
om.next.ui.cljs$lang$macro = true;

om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var fn_scope = cljs.core.cst$kw$fn_DASH_scope.cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__32349 = fn_scope;
var G__32349__$1 = (((G__32349 == null))?null:cljs.core.first(G__32349));
var G__32349__$2 = (((G__32349__$1 == null))?null:cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__32349__$1));
if((G__32349__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32349__$2)].join('');
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$elide_DASH_asserts.cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_let),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__32348__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$om$next_SLASH__STAR_logger_STAR_)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = condition;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$log_SLASH_error),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__32348__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invariant Violation"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not),(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_),(function (){var x__11366__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY," (in function: `"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"`)")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,": "),(function (){var x__11366__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
}
});
var ret__11737__auto___32350 = om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_(condition,message,_AMPERSAND_env);
} else {
return null;
}
});
om.next.invariant.cljs$lang$macro = true;

if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_(expr)){
var G__32351 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__32351);
} else {
return G__32351;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid query expr ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__32352_SHARP_){
return (cljs.core.vector_QMARK_(p1__32352_SHARP_)) || (cljs.core.map_QMARK_(p1__32352_SHARP_)) || (cljs.core.seq_QMARK_(p1__32352_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__32353 = clojure.zip.right(loc__$1);
loc__$1 = G__32353;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__32362 = clojure.zip.down(loc);
var G__32363 = path__$1;
loc = G__32362;
path__$1 = G__32363;
continue;
} else {
var vec__32358 = path__$1;
var seq__32359 = cljs.core.seq(vec__32358);
var first__32360 = cljs.core.first(seq__32359);
var seq__32359__$1 = cljs.core.next(seq__32359);
var k = first__32360;
var ks = seq__32359__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key((function (){var G__32361 = loc;
if(cljs.core.seq_QMARK_(node)){
return clojure.zip.down(G__32361);
} else {
return G__32361;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__32364 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__32365 = cljs.core.next(ks);
loc = G__32364;
path__$1 = G__32365;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__32366 = loc_SINGLEQUOTE_;
var G__32367 = ks;
loc = G__32366;
path__$1 = G__32367;
continue;
}
} else {
var G__32368 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__32369 = ks;
loc = G__32368;
path__$1 = G__32369;
continue;
}
} else {
var G__32370 = clojure.zip.right(loc);
var G__32371 = path__$1;
loc = G__32370;
path__$1 = G__32371;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?(function (){var join_value = cljs.core.second(cljs.core.first(expr));
var join_value__$1 = (((om.util.recursion_QMARK_(join_value)) && (cljs.core.seq(ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst(expr),(om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(join_value__$1,ks,null) : om.next.focus_query_STAR_.call(null,join_value__$1,ks,null))]);
})():((cljs.core.seq_QMARK_(expr))?(function (){var x__11366__auto__ = (function (){var G__32376 = cljs.core.first(expr);
var G__32377 = ks;
var G__32378 = null;
var G__32379 = null;
return (om.next.focused_join.cljs$core$IFn$_invoke$arity$4 ? om.next.focused_join.cljs$core$IFn$_invoke$arity$4(G__32376,G__32377,G__32378,G__32379) : om.next.focused_join.call(null,G__32376,G__32377,G__32378,G__32379));
})();
return cljs.core._conj((function (){var x__11366__auto____$1 = cljs.core.second(expr);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto____$1);
})(),x__11366__auto__);
})():expr
));
var G__32380 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta(G__32380,expr_meta);
} else {
return G__32380;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__32381 = path;
var seq__32382 = cljs.core.seq(vec__32381);
var first__32383 = cljs.core.first(seq__32382);
var seq__32382__$1 = cljs.core.next(seq__32382);
var k = first__32383;
var ks = seq__32382__$1;
var match = ((function (vec__32381,seq__32382,first__32383,seq__32382__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.util.join_key(x));
});})(vec__32381,seq__32382,first__32383,seq__32382__$1,k,ks))
;
var value = ((function (vec__32381,seq__32382,first__32383,seq__32382__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join(x,ks,query,union_expr);
});})(vec__32381,seq__32382,first__32383,seq__32382__$1,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(function (){var G__32384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k);
var G__32385 = ks;
var G__32386 = query;
return (om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.next.focus_query_STAR_.cljs$core$IFn$_invoke$arity$3(G__32384,G__32385,G__32386) : om.next.focus_query_STAR_.call(null,G__32384,G__32385,G__32386));
})()]);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_(query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__10400__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__10400__auto__){
var and__10400__auto____$1 = cljs.core.some(om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__10400__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
var vec__32389 = om.util.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__32393 = focus_SINGLEQUOTE___$1;
var G__32394 = bound;
var G__32395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__32393;
bound = G__32394;
path = G__32395;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.ident[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__11146__auto__.call(null,this$,props));
} else {
var m__11146__auto____$1 = (om.next.ident["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__11146__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.params[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next.params["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

goog.object.set(om.next.IQueryParams,"_",true);

var G__32396_32399 = om.next.params;
var G__32397_32400 = "_";
var G__32398_32401 = ((function (G__32396_32399,G__32397_32400){
return (function (_){
return null;
});})(G__32396_32399,G__32397_32400))
;
goog.object.set(G__32396_32399,G__32397_32400,G__32398_32401);

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next.query[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next.query["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11146__auto__.call(null,this$,new_state));
} else {
var m__11146__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11146__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next._get_state[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next._get_state["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next._get_rendered_state[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__10400__auto__ = (x instanceof cljs.core.Symbol);
if(and__10400__auto__){
var G__32404 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
var G__32405 = "?";
return goog.string.startsWith(G__32404,G__32405);
} else {
return and__10400__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta(query);
var tr = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (qm){
return (function (p1__32406_SHARP_){
return (om.next.bind_query.cljs$core$IFn$_invoke$arity$2 ? om.next.bind_query.cljs$core$IFn$_invoke$arity$2(p1__32406_SHARP_,params) : om.next.bind_query.call(null,p1__32406_SHARP_,params));
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):om.next.replace_var(query,params)
));
var G__32407 = ret;
if(cljs.core.truth_((function (){var and__10400__auto__ = qm;
if(cljs.core.truth_(and__10400__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
}
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(G__32407,qm);
} else {
return G__32407;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__32409 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__32409__$1 = (((G__32409 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__32409));
var G__32409__$2 = (((G__32409__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__32409__$1));
var G__32409__$3 = (((G__32409__$2 == null))?null:cljs.core.deref(G__32409__$2));
var G__32409__$4 = (((G__32409__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__32409__$3));
if((G__32409__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__32409__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var G__32411 = arguments.length;
switch (G__32411) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(component,om.next.component__GT_query_data(component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(query_data,om.next.query(component));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Query violation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component)," reuses ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_SINGLEQUOTE_)," query"].join('')),"\n","(nil? c')"].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(query_data,om.next.params(component))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,(om.next.react_type.cljs$core$IFn$_invoke$arity$1 ? om.next.react_type.cljs$core$IFn$_invoke$arity$1(component) : om.next.react_type.call(null,component))], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Query violation, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," reuses ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," query"].join('')),"\n","(nil? c)"].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (component,class_path_query_data,data_path){
return (function (p1__32414_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__32414_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_(qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_(qs__$1))){
var q = cljs.core.first(qs__$1);
var node = clojure.zip.node(q);
if(!(om.util.recursion_QMARK_(node))){
return node;
} else {
var G__32415 = component;
var G__32416 = class_path_query_data;
var G__32417 = cljs.core.pop(data_path);
component = G__32415;
class_path_query_data = G__32416;
data_path = G__32417;
continue;
}
} else {
return om.next.get_class_or_instance_query(component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
var temp__5457__auto__ = om.next.component__GT_query_data(x);
if(cljs.core.truth_(temp__5457__auto__)){
var query_data = temp__5457__auto__;
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(x,query_data);
} else {
var cp = (om.next.class_path.cljs$core$IFn$_invoke$arity$1 ? om.next.class_path.cljs$core$IFn$_invoke$arity$1(x) : om.next.class_path.call(null,x));
var r = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(x) : om.next.get_reconciler.call(null,x));
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),(om.next.path.cljs$core$IFn$_invoke$arity$1 ? om.next.path.cljs$core$IFn$_invoke$arity$1(x) : om.next.path.call(null,x)));
var class_path_query_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_path_DASH__GT_query.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((om.next.get_indexer.cljs$core$IFn$_invoke$arity$1 ? om.next.get_indexer.cljs$core$IFn$_invoke$arity$1(r) : om.next.get_indexer.call(null,r)))),cp);
return om.next.get_indexed_query(x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query(x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
});

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__5457__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var rk = temp__5457__auto__;
return rk;
} else {
var temp__5457__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__5457__auto____$1)){
var idx = temp__5457__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var G__32420 = arguments.length;
switch (G__32420) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__32421){
var map__32422 = p__32421;
var map__32422__$1 = ((((!((map__32422 == null)))?((((map__32422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32422):map__32422);
var opts = map__32422__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32422__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32422__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32422__$1,cljs.core.cst$kw$instrument_QMARK_,true);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__32422,map__32422__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__10400__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__10400__auto__)){
return instrument_QMARK_;
} else {
return and__10400__auto__;
}
})())){
var G__32424 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__32424) : om.next._STAR_instrument_STAR_.call(null,G__32424));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__32425 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32425)].join('');
} else {
return G__32425;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__32426 = class$;
var G__32427 = ({"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_});
var G__32428 = om.util.force_children(children);
return React.createElement(G__32426,G__32427,G__32428);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__32430__i = 0, G__32430__a = new Array(arguments.length -  1);
while (G__32430__i < G__32430__a.length) {G__32430__a[G__32430__i] = arguments[G__32430__i + 1]; ++G__32430__i;}
  children = new cljs.core.IndexedSeq(G__32430__a,0,null);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__32431){
var props = cljs.core.first(arglist__32431);
var children = cljs.core.rest(arglist__32431);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__32422,map__32422__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__32432 = c.props;
var G__32433 = k;
return goog.object.get(G__32432,G__32433);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__32434 = c.props;
var G__32435 = k;
var G__32436 = v;
return goog.object.set(G__32434,G__32435,G__32436);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var G__32438 = arguments.length;
switch (G__32438) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var G__32441 = arguments.length;
switch (G__32441) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(component.props),om.next.get_props(next_props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__32443 = c.state;
var G__32444 = "omcljs$prev$value";
return goog.object.remove(G__32443,G__32444);
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop(component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__10412__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var G__32446 = arguments.length;
switch (G__32446) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = (function (){var G__32447 = component.props;
var G__32448 = "omcljs$shared";
return goog.object.get(G__32447,G__32448);
})();
var ks = (function (){var G__32449 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__32449],null));
} else {
return G__32449;
}
})();
var G__32450 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__32450,ks);
} else {
return G__32450;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__32452 = c.state;
var G__32453_32456 = G__32452;
var G__32454_32457 = "omcljs$next$value";
var G__32455_32458 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__32453_32456,G__32454_32457,G__32455_32458);

return G__32452;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__32459 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__32459,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__32459;
}
} else {
var G__32460 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32460,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__32460;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var G__32462 = arguments.length;
switch (G__32462) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__32463 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__32463);
} else {
return G__32463;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__32464 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__32464],null));
} else {
return G__32464;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__32467_32470 = component.state;
var G__32468_32471 = "omcljs$pendingState";
var G__32469_32472 = new_state;
goog.object.set(G__32467_32470,G__32468_32471,G__32469_32472);
}

var temp__5457__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__5457__auto__)){
var r = temp__5457__auto__;
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var G__32474 = arguments.length;
switch (G__32474) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state(component):(function (){var temp__5459__auto__ = component.state;
if(cljs.core.truth_(temp__5459__auto__)){
var state = temp__5459__auto__;
var or__10412__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var G__32485 = arguments.length;
switch (G__32485) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__11714__auto__ = [];
var len__11691__auto___32502 = arguments.length;
var i__11692__auto___32503 = (0);
while(true){
if((i__11692__auto___32503 < len__11691__auto___32502)){
args_arr__11714__auto__.push((arguments[i__11692__auto___32503]));

var G__32504 = (i__11692__auto___32503 + (1));
i__11692__auto___32503 = G__32504;
continue;
} else {
}
break;
}

var argseq__11715__auto__ = (new cljs.core.IndexedSeq(args_arr__11714__auto__.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__11715__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__32486 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32486) : f.call(null,G__32486));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__32487 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__32488 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32487,G__32488) : f.call(null,G__32487,G__32488));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__32489 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__32490 = arg0;
var G__32491 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32489,G__32490,G__32491) : f.call(null,G__32489,G__32490,G__32491));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__32492 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__32493 = arg0;
var G__32494 = arg1;
var G__32495 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__32492,G__32493,G__32494,G__32495) : f.call(null,G__32492,G__32493,G__32494,G__32495));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__32496 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__32497 = arg0;
var G__32498 = arg1;
var G__32499 = arg2;
var G__32500 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__32496,G__32497,G__32498,G__32499,G__32500) : f.call(null,G__32496,G__32497,G__32498,G__32499,G__32500));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq32478){
var G__32479 = cljs.core.first(seq32478);
var seq32478__$1 = cljs.core.next(seq32478);
var G__32480 = cljs.core.first(seq32478__$1);
var seq32478__$2 = cljs.core.next(seq32478__$1);
var G__32481 = cljs.core.first(seq32478__$2);
var seq32478__$3 = cljs.core.next(seq32478__$2);
var G__32482 = cljs.core.first(seq32478__$3);
var seq32478__$4 = cljs.core.next(seq32478__$3);
var G__32483 = cljs.core.first(seq32478__$4);
var seq32478__$5 = cljs.core.next(seq32478__$4);
var G__32484 = cljs.core.first(seq32478__$5);
var seq32478__$6 = cljs.core.next(seq32478__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,seq32478__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var G__32506 = arguments.length;
switch (G__32506) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state(component):(function (){var G__32508 = component;
var G__32508__$1 = (((G__32508 == null))?null:G__32508.state);
if((G__32508__$1 == null)){
return null;
} else {
return goog.object.get(G__32508__$1,"omcljs$state");
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__5459__auto__ = (function (){var G__32511 = c;
var G__32511__$1 = (((G__32511 == null))?null:G__32511.state);
if((G__32511__$1 == null)){
return null;
} else {
return goog.object.get(G__32511__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__5459__auto__)){
var pending = temp__5459__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var G__32513 = arguments.length;
switch (G__32513) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__32516,q,remotes){
var map__32517 = p__32516;
var map__32517__$1 = ((((!((map__32517 == null)))?((((map__32517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32517.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32517):map__32517);
var env = map__32517__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32517__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__32517,map__32517__$1,env,parser){
return (function (p1__32515_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__32515_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__32515_SHARP_) : parser.call(null,env,q,p1__32515_SHARP_))],null));
});})(map__32517,map__32517__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__32517,map__32517__$1,env,parser){
return (function (p__32519){
var vec__32520 = p__32519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32520,(1),null);
return (cljs.core.count(v) > (0));
});})(map__32517,map__32517__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(cljs.core.cst$kw$easy_DASH_reads.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32529 = cljs.core.first(q);
var G__32530 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__32529,G__32530) : om.next.force.call(null,G__32529,G__32530));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = (function (){var G__32531 = c;
var G__32532 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__32531,G__32532) : om.next.full_query.call(null,G__32531,G__32532));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(tx__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(tx__$1)),transformed);
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var tgt = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = (om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key));
var G__32534 = cljs.core.next(exprs);
var G__32535 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__32523_SHARP_,p2__32524_SHARP_){
return add_focused_query(key,tgt,p1__32523_SHARP_,p2__32524_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__32533 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_(cs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32533,expr);
} else {
return G__32533;
}
})(),cs);
exprs = G__32534;
tx_SINGLEQUOTE_ = G__32535;
continue;
} else {
var G__32536 = cljs.core.next(exprs);
var G__32537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__32536;
tx_SINGLEQUOTE_ = G__32537;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var G__32539 = arguments.length;
switch (G__32539) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__32540,reads){
var map__32541 = p__32540;
var map__32541__$1 = ((((!((map__32541 == null)))?((((map__32541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32541):map__32541);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32541__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_((function (){var or__10412__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r)));
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref(st));

var temp__5459__auto___32557 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5459__auto___32557)){
var l_32558 = temp__5459__auto___32557;
var G__32543_32559 = l_32558;
var G__32544_32560 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5459__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__5459__auto____$1)){
var ident = temp__5459__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ident], 0)))," "].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)))].join('');
goog.log.info(G__32543_32559,G__32544_32560);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,(function (){var or__10412__auto__ = c;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_32561 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_32562 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__10412__auto__ = rootq_32561;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_32562)){
} else {
var seq__32546_32563 = cljs.core.seq(sends_32562);
var chunk__32547_32564 = null;
var count__32548_32565 = (0);
var i__32549_32566 = (0);
while(true){
if((i__32549_32566 < count__32548_32565)){
var vec__32550_32567 = chunk__32547_32564.cljs$core$IIndexed$_nth$arity$2(null,i__32549_32566);
var remote_32568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550_32567,(0),null);
var __32569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32550_32567,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_32568);

var G__32570 = seq__32546_32563;
var G__32571 = chunk__32547_32564;
var G__32572 = count__32548_32565;
var G__32573 = (i__32549_32566 + (1));
seq__32546_32563 = G__32570;
chunk__32547_32564 = G__32571;
count__32548_32565 = G__32572;
i__32549_32566 = G__32573;
continue;
} else {
var temp__5459__auto___32574 = cljs.core.seq(seq__32546_32563);
if(temp__5459__auto___32574){
var seq__32546_32575__$1 = temp__5459__auto___32574;
if(cljs.core.chunked_seq_QMARK_(seq__32546_32575__$1)){
var c__11343__auto___32576 = cljs.core.chunk_first(seq__32546_32575__$1);
var G__32577 = cljs.core.chunk_rest(seq__32546_32575__$1);
var G__32578 = c__11343__auto___32576;
var G__32579 = cljs.core.count(c__11343__auto___32576);
var G__32580 = (0);
seq__32546_32563 = G__32577;
chunk__32547_32564 = G__32578;
count__32548_32565 = G__32579;
i__32549_32566 = G__32580;
continue;
} else {
var vec__32553_32581 = cljs.core.first(seq__32546_32575__$1);
var remote_32582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553_32581,(0),null);
var __32583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32553_32581,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_32582);

var G__32584 = cljs.core.next(seq__32546_32575__$1);
var G__32585 = null;
var G__32586 = (0);
var G__32587 = (0);
seq__32546_32563 = G__32584;
chunk__32547_32564 = G__32585;
count__32548_32565 = G__32586;
i__32549_32566 = G__32587;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_(r,sends_32562);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__11714__auto__ = [];
var len__11691__auto___32608 = arguments.length;
var i__11692__auto___32609 = (0);
while(true){
if((i__11692__auto___32609 < len__11691__auto___32608)){
args_arr__11714__auto__.push((arguments[i__11692__auto___32609]));

var G__32610 = (i__11692__auto___32609 + (1));
i__11692__auto___32609 = G__32610;
continue;
} else {
}
break;
}

var argseq__11715__auto__ = (new cljs.core.IndexedSeq(args_arr__11714__auto__.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__11715__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__32597 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32597) : f.call(null,G__32597));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__32598 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__32599 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__32598,G__32599) : f.call(null,G__32598,G__32599));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__32600 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__32601 = arg0;
var G__32602 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__32600,G__32601,G__32602) : f.call(null,G__32600,G__32601,G__32602));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__32603 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__32604 = arg0;
var G__32605 = arg1;
var G__32606 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__32603,G__32604,G__32605,G__32606) : f.call(null,G__32603,G__32604,G__32605,G__32606));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null),arg0,arg1,arg2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg3,arg_rest], 0)));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq32589){
var G__32590 = cljs.core.first(seq32589);
var seq32589__$1 = cljs.core.next(seq32589);
var G__32591 = cljs.core.first(seq32589__$1);
var seq32589__$2 = cljs.core.next(seq32589__$1);
var G__32592 = cljs.core.first(seq32589__$2);
var seq32589__$3 = cljs.core.next(seq32589__$2);
var G__32593 = cljs.core.first(seq32589__$3);
var seq32589__$4 = cljs.core.next(seq32589__$3);
var G__32594 = cljs.core.first(seq32589__$4);
var seq32589__$5 = cljs.core.next(seq32589__$4);
var G__32595 = cljs.core.first(seq32589__$5);
var seq32589__$6 = cljs.core.next(seq32589__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,seq32589__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__32611 = component.refs;
if((G__32611 == null)){
return null;
} else {
return goog.object.get(G__32611,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var G__32613 = arguments.length;
switch (G__32613) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__11366__auto__ = om.next.react_type(c__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})();
while(true){
var temp__5457__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
if(om.next.iquery_QMARK_(p)){
var G__32615 = p;
var G__32616 = cljs.core.cons(om.next.react_type(p),ret);
c__$1 = G__32615;
ret = G__32616;
continue;
} else {
var G__32617 = p;
var G__32618 = ret;
c__$1 = G__32617;
ret = G__32618;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path(c);
var cp = cljs.core.seq(raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first(cp);
if(cljs.core.contains_QMARK_(seen,c__$1)){
var G__32619 = cljs.core.next(cp);
var G__32620 = ret;
var G__32621 = seen;
cp = G__32619;
ret = G__32620;
seen = G__32621;
continue;
} else {
var G__32622 = cljs.core.next(cp);
var G__32623 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c__$1);
var G__32624 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c__$1);
cp = G__32622;
ret = G__32623;
seen = G__32624;
continue;
}
} else {
return cljs.core.seq(ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,om.next.raw_class_path(c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__32625 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32625)].join('');
} else {
return G__32625;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_(x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props(x);
if(!((m == null))){
} else {
throw (new Error(["Assert failed: ","get-ident invoked on component with nil props","\n","(not (nil? m))"].join('')));
}

return om.next.ident(x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
return om.next.queue_render_BANG_((function (){
return om.next.protocols.reconcile_BANG_.cljs$core$IFn$_invoke$arity$1(reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__32626 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__32627 = (0);
return setTimeout(G__32626,G__32627);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var G__32629 = arguments.length;
switch (G__32629) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__5459__auto___32631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.next.roots),target);
if(cljs.core.truth_(temp__5459__auto___32631)){
var old_reconciler_32632 = temp__5459__auto___32631;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_32632,target) : om.next.remove_root_BANG_.call(null,old_reconciler_32632,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__11145__auto__ = (((c == null))?null:c);
var m__11146__auto__ = (om.next.tx_intercept[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__11146__auto__.call(null,c,tx));
} else {
var m__11146__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__11146__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__10400__auto__ = c;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__10400__auto____$1){
return cljs.core.not(ref);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__5459__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5459__auto__)){
var l = temp__5459__auto__;
var G__32635 = l;
var G__32636 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ref__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref__$1], 0)))," "].join(''):null)),"transacted '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)))].join('');
return goog.log.info(G__32635,G__32636);
} else {
return null;
}
})();
var old_state = cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg));
var v = (function (){var fexpr__32637 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg);
return (fexpr__32637.cljs$core$IFn$_invoke$arity$2 ? fexpr__32637.cljs$core$IFn$_invoke$arity$2(env,tx) : fexpr__32637.call(null,env,tx));
})();
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__32638 = cljs.core.PersistentVector.EMPTY;
var G__32638__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32638,c):G__32638);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32638__$1,ref__$1);
} else {
return G__32638__$1;
}
})();
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
} else {
var seq__32639_32651 = cljs.core.seq(snds);
var chunk__32640_32652 = null;
var count__32641_32653 = (0);
var i__32642_32654 = (0);
while(true){
if((i__32642_32654 < count__32641_32653)){
var vec__32643_32655 = chunk__32640_32652.cljs$core$IIndexed$_nth$arity$2(null,i__32642_32654);
var remote_32656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32643_32655,(0),null);
var __32657__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32643_32655,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_32656);

var G__32658 = seq__32639_32651;
var G__32659 = chunk__32640_32652;
var G__32660 = count__32641_32653;
var G__32661 = (i__32642_32654 + (1));
seq__32639_32651 = G__32658;
chunk__32640_32652 = G__32659;
count__32641_32653 = G__32660;
i__32642_32654 = G__32661;
continue;
} else {
var temp__5459__auto___32662 = cljs.core.seq(seq__32639_32651);
if(temp__5459__auto___32662){
var seq__32639_32663__$1 = temp__5459__auto___32662;
if(cljs.core.chunked_seq_QMARK_(seq__32639_32663__$1)){
var c__11343__auto___32664 = cljs.core.chunk_first(seq__32639_32663__$1);
var G__32665 = cljs.core.chunk_rest(seq__32639_32663__$1);
var G__32666 = c__11343__auto___32664;
var G__32667 = cljs.core.count(c__11343__auto___32664);
var G__32668 = (0);
seq__32639_32651 = G__32665;
chunk__32640_32652 = G__32666;
count__32641_32653 = G__32667;
i__32642_32654 = G__32668;
continue;
} else {
var vec__32646_32669 = cljs.core.first(seq__32639_32663__$1);
var remote_32670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32646_32669,(0),null);
var __32671__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32646_32669,(1),null);
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$3(r,xs,remote_32670);

var G__32672 = cljs.core.next(seq__32639_32663__$1);
var G__32673 = null;
var G__32674 = (0);
var G__32675 = (0);
seq__32639_32651 = G__32672;
chunk__32640_32652 = G__32673;
count__32641_32653 = G__32674;
i__32642_32654 = G__32675;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_(r,snds);

om.next.schedule_sends_BANG_(r);
}

var temp__5459__auto___32676 = cljs.core.cst$kw$tx_DASH_listen.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5459__auto___32676)){
var f_32677 = temp__5459__auto___32676;
var tx_data_32678 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg))], null)], 0));
var G__32649_32679 = tx_data_32678;
var G__32650_32680 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$ret,v,cljs.core.cst$kw$sends,snds], null);
(f_32677.cljs$core$IFn$_invoke$arity$2 ? f_32677.cljs$core$IFn$_invoke$arity$2(G__32649_32679,G__32650_32680) : f_32677.call(null,G__32649_32679,G__32650_32680));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__32683 = expr;
if(om.util.mutation_QMARK_(expr)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__32683,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1);
} else {
return G__32683;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__32681_SHARP_){
return annotate(p1__32681_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_(c__$1)){
return true;
} else {
var G__32684 = om.next.parent(c__$1);
c__$1 = G__32684;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var G__32686 = arguments.length;
switch (G__32686) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__10412__auto__ = om.next.component_QMARK_(x);
if(or__10412__auto__){
return or__10412__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__32687 = tx;
if((function (){var and__10400__auto__ = om.next.component_QMARK_(x);
if(and__10400__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
}
} else {
return and__10400__auto__;
}
})()){
return om.next.annotate_mutations(G__32687,om.next.get_ident(x));
} else {
return G__32687;
}
})();
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_(x))){
var l__27118__auto___32697 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_(x))){
} else {
var G__32690_32698 = l__27118__auto___32697;
var G__32691_32699 = ["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["transact! should be called on a component","that implements IQuery or has a parent that","implements IQuery"].join(''))].join('');
goog.log.error(G__32690_32698,G__32691_32699);
}

return om.next.transact_STAR_(om.next.get_reconciler(x),null,null,tx__$1);
} else {
var p = om.next.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$2));
} else {
var vec__32692 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(1),null);
var G__32700 = om.next.parent(p);
var G__32701 = x_SINGLEQUOTE_;
var G__32702 = tx__$3;
p = G__32700;
x__$1 = G__32701;
tx__$2 = G__32702;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__32703){
var map__32704 = p__32703;
var map__32704__$1 = ((((!((map__32704 == null)))?((((map__32704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32704):map__32704);
var opts = map__32704__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32704__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32704__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__32706 = prop;
if((!(om.util.ident_QMARK_(prop))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(prop),cljs.core.cst$sym$_))){
var fexpr__32707 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast);
return (fexpr__32707.cljs$core$IFn$_invoke$arity$1 ? fexpr__32707.cljs$core$IFn$_invoke$arity$1(G__32706) : fexpr__32707.call(null,G__32706));
} else {
return G__32706;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_(cp))){
var rendered_data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(union_keys)),data_path__$1);
var filter_data_path = (function (){var G__32709 = rendered_data_path;
if(!(cljs.core.empty_QMARK_(rendered_data_path))){
return cljs.core.pop(G__32709);
} else {
return G__32709;
}
})();
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__32708_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__32708_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.map_QMARK_(clojure.zip.node(q));
if(or__10412__auto__){
return or__10412__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.peek(data_path__$1)]),union_keys);
}
})())?(function (){var union_key = cljs.core.peek(data_path__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(om.next.query_template(clojure.zip.root(q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template(om.next.focus_query(om.next.replace(om.next.query_template(clojure.zip.root(q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__32710 = cljs.core.pop(cp);
var G__32711 = cljs.core.pop(data_path__$1);
var G__32712 = clojure.zip.node(cljs.core.first(qs_SINGLEQUOTE_));
var G__32713 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cp,qs_SINGLEQUOTE_);
cp = G__32710;
data_path__$1 = G__32711;
new_query__$1 = G__32712;
ret = G__32713;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query(x);
var root_class = (function (){var G__32723 = x;
if(om.next.component_QMARK_(x)){
return om.next.react_type(G__32723);
} else {
return G__32723;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__27118__auto___32804 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_(class$))) || ((om.next.iquery_QMARK_(class$)) && (!(cljs.core.empty_QMARK_(query))))){
} else {
var G__32753_32805 = l__27118__auto___32804;
var G__32754_32806 = ["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((("build-index*" == null))?null:[" (in function: `","build-index*","`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["`IQuery` implementation must return a non-empty query."," Check the `IQuery` implementation of component `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((om.next.component_QMARK_(class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),"`."].join(''))].join('');
goog.log.error(G__32753_32805,G__32754_32806);
}

var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([class$]),classpath);
var classpath__$1 = (function (){var G__32755 = classpath;
if((!((class$ == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__32755,class$);
} else {
return G__32755;
}
})();
var dp__GT_cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components], null));
if(cljs.core.truth_(class$)){
var root_query_32807 = ((cljs.core.empty_QMARK_(path))?rootq:clojure.zip.root(cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.next.query_template(om.next.focus_query(root_query_32807,path),path)], 0));
} else {
}

var recursive_join_QMARK_ = (function (){var and__10400__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = cljs.core.some(((function (and__10400__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__10400__auto____$1 = om.util.join_QMARK_(e);
if(cljs.core.truth_(and__10400__auto____$1)){
return !(om.util.recursion_QMARK_(om.util.join_value(e)));
} else {
return and__10400__auto____$1;
}
});})(and__10400__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__10400__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = union_expr;
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path),path);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.not(recursive_QMARK_);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_(query)){
var map__32756 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__32756__$1 = ((((!((map__32756 == null)))?((((map__32756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32756):map__32756);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32756__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32756__$1,true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__32714_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__32714_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([class$])))], 0));
});})(map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__32758 = cljs.core.seq(joins);
var chunk__32759 = null;
var count__32760 = (0);
var i__32761 = (0);
while(true){
if((i__32761 < count__32760)){
var join = chunk__32759.cljs$core$IIndexed$_nth$arity$2(null,i__32761);
var vec__32762_32808 = om.util.join_entry(join);
var prop_32809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762_32808,(0),null);
var query_SINGLEQUOTE__32810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762_32808,(1),null);
var prop_dispatch_key_32811 = om.next.get_dispatch_key(prop_32809);
var recursion_QMARK__32812 = om.util.recursion_QMARK_(query_SINGLEQUOTE__32810);
var union_recursion_QMARK__32813 = (function (){var and__10400__auto__ = recursion_QMARK__32812;
if(and__10400__auto__){
return union_expr;
} else {
return and__10400__auto__;
}
})();
var query_SINGLEQUOTE__32814__$1 = ((recursion_QMARK__32812)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__32810);
var path_SINGLEQUOTE__32815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_32809);
var rendered_path_SINGLEQUOTE__32816 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__32815));
var cs_32817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__32816);
var cascade_query_QMARK__32818 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_32817),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__32814__$1)),om.next.react_type(cljs.core.first(cs_32817)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__32814__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__32819 = ((cascade_query_QMARK__32818)?om.next.get_query(cljs.core.first(cs_32817)):query_SINGLEQUOTE__32814__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__32758,chunk__32759,count__32760,i__32761,vec__32762_32808,prop_32809,query_SINGLEQUOTE__32810,prop_dispatch_key_32811,recursion_QMARK__32812,union_recursion_QMARK__32813,query_SINGLEQUOTE__32814__$1,path_SINGLEQUOTE__32815,rendered_path_SINGLEQUOTE__32816,cs_32817,cascade_query_QMARK__32818,query_SINGLEQUOTE__SINGLEQUOTE__32819,join,map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__32715_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__32715_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_32811,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])])], 0));
});})(seq__32758,chunk__32759,count__32760,i__32761,vec__32762_32808,prop_32809,query_SINGLEQUOTE__32810,prop_dispatch_key_32811,recursion_QMARK__32812,union_recursion_QMARK__32813,query_SINGLEQUOTE__32814__$1,path_SINGLEQUOTE__32815,rendered_path_SINGLEQUOTE__32816,cs_32817,cascade_query_QMARK__32818,query_SINGLEQUOTE__SINGLEQUOTE__32819,join,map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__32818) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__32814__$1,query_SINGLEQUOTE__SINGLEQUOTE__32819))){
var cp__GT_q_SINGLEQUOTE__32820 = om.next.cascade_query(cljs.core.deref(class_path__GT_query),classpath__$1,path_SINGLEQUOTE__32815,query_SINGLEQUOTE__SINGLEQUOTE__32819,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__32820);
} else {
}

var class_SINGLEQUOTE__32821 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__32819));
if((recursion_QMARK__32812) && ((class_SINGLEQUOTE__32821 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__32821,query_SINGLEQUOTE__SINGLEQUOTE__32819,path_SINGLEQUOTE__32815,classpath__$1,((recursion_QMARK__32812)?union_expr:null),union_keys);
}

var G__32822 = seq__32758;
var G__32823 = chunk__32759;
var G__32824 = count__32760;
var G__32825 = (i__32761 + (1));
seq__32758 = G__32822;
chunk__32759 = G__32823;
count__32760 = G__32824;
i__32761 = G__32825;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__32758);
if(temp__5459__auto__){
var seq__32758__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32758__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__32758__$1);
var G__32826 = cljs.core.chunk_rest(seq__32758__$1);
var G__32827 = c__11343__auto__;
var G__32828 = cljs.core.count(c__11343__auto__);
var G__32829 = (0);
seq__32758 = G__32826;
chunk__32759 = G__32827;
count__32760 = G__32828;
i__32761 = G__32829;
continue;
} else {
var join = cljs.core.first(seq__32758__$1);
var vec__32765_32830 = om.util.join_entry(join);
var prop_32831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765_32830,(0),null);
var query_SINGLEQUOTE__32832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765_32830,(1),null);
var prop_dispatch_key_32833 = om.next.get_dispatch_key(prop_32831);
var recursion_QMARK__32834 = om.util.recursion_QMARK_(query_SINGLEQUOTE__32832);
var union_recursion_QMARK__32835 = (function (){var and__10400__auto__ = recursion_QMARK__32834;
if(and__10400__auto__){
return union_expr;
} else {
return and__10400__auto__;
}
})();
var query_SINGLEQUOTE__32836__$1 = ((recursion_QMARK__32834)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__32832);
var path_SINGLEQUOTE__32837 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_32831);
var rendered_path_SINGLEQUOTE__32838 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__32837));
var cs_32839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__32838);
var cascade_query_QMARK__32840 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_32839),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__32836__$1)),om.next.react_type(cljs.core.first(cs_32839)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__32836__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__32841 = ((cascade_query_QMARK__32840)?om.next.get_query(cljs.core.first(cs_32839)):query_SINGLEQUOTE__32836__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__32758,chunk__32759,count__32760,i__32761,vec__32765_32830,prop_32831,query_SINGLEQUOTE__32832,prop_dispatch_key_32833,recursion_QMARK__32834,union_recursion_QMARK__32835,query_SINGLEQUOTE__32836__$1,path_SINGLEQUOTE__32837,rendered_path_SINGLEQUOTE__32838,cs_32839,cascade_query_QMARK__32840,query_SINGLEQUOTE__SINGLEQUOTE__32841,join,seq__32758__$1,temp__5459__auto__,map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__32715_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__32715_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_32833,cljs.core.PersistentHashSet.createAsIfByAssoc([class$])])], 0));
});})(seq__32758,chunk__32759,count__32760,i__32761,vec__32765_32830,prop_32831,query_SINGLEQUOTE__32832,prop_dispatch_key_32833,recursion_QMARK__32834,union_recursion_QMARK__32835,query_SINGLEQUOTE__32836__$1,path_SINGLEQUOTE__32837,rendered_path_SINGLEQUOTE__32838,cs_32839,cascade_query_QMARK__32840,query_SINGLEQUOTE__SINGLEQUOTE__32841,join,seq__32758__$1,temp__5459__auto__,map__32756,map__32756__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__32840) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__32836__$1,query_SINGLEQUOTE__SINGLEQUOTE__32841))){
var cp__GT_q_SINGLEQUOTE__32842 = om.next.cascade_query(cljs.core.deref(class_path__GT_query),classpath__$1,path_SINGLEQUOTE__32837,query_SINGLEQUOTE__SINGLEQUOTE__32841,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__32842);
} else {
}

var class_SINGLEQUOTE__32843 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__32841));
if((recursion_QMARK__32834) && ((class_SINGLEQUOTE__32843 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__32843,query_SINGLEQUOTE__SINGLEQUOTE__32841,path_SINGLEQUOTE__32837,classpath__$1,((recursion_QMARK__32834)?union_expr:null),union_keys);
}

var G__32844 = cljs.core.next(seq__32758__$1);
var G__32845 = null;
var G__32846 = (0);
var G__32847 = (0);
seq__32758 = G__32844;
chunk__32759 = G__32845;
count__32760 = G__32846;
i__32761 = G__32847;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__32768 = cljs.core.seq(query);
var chunk__32769 = null;
var count__32770 = (0);
var i__32771 = (0);
while(true){
if((i__32771 < count__32770)){
var vec__32772 = chunk__32769.cljs$core$IIndexed$_nth$arity$2(null,i__32771);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772,(1),null);
var path_SINGLEQUOTE__32848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__32849 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_32850 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__32768,chunk__32769,count__32770,i__32771,path_SINGLEQUOTE__32848,class_SINGLEQUOTE__32849,vec__32772,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__32716_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__32849,om.next.react_type(p1__32716_SHARP_));
});})(seq__32768,chunk__32769,count__32770,i__32771,path_SINGLEQUOTE__32848,class_SINGLEQUOTE__32849,vec__32772,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__32851 = (function (){var and__10400__auto__ = class_SINGLEQUOTE__32849;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_32850),(1));
} else {
return and__10400__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__32852 = (cljs.core.truth_(cascade_query_QMARK__32851)?om.next.get_query(cljs.core.first(cs_32850)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__10400__auto__ = cascade_query_QMARK__32851;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__32852);
} else {
return and__10400__auto__;
}
})())){
var qs_32853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(class_path__GT_query),classpath__$1);
var q_32854 = cljs.core.first(qs_32853);
var qnode_32855 = clojure.zip.node((function (){var G__32775 = q_32854;
if((class$ == null)){
return om.next.query_template(G__32775,path);
} else {
return G__32775;
}
})());
var new_query_32856 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_32855,prop,query_SINGLEQUOTE__SINGLEQUOTE__32852);
var q_SINGLEQUOTE__32857 = (function (){var G__32776 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_32854),path),new_query_32856);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__32776),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__32776;
}
})();
var qs_SINGLEQUOTE__32858 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__32857]),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([q_32854])),qs_32853);
var cp__GT_q_SINGLEQUOTE__32859 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__32858]),om.next.cascade_query(cljs.core.deref(class_path__GT_query),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__32857),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__32859);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__32849,query_SINGLEQUOTE__SINGLEQUOTE__32852,path_SINGLEQUOTE__32848,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__32860 = seq__32768;
var G__32861 = chunk__32769;
var G__32862 = count__32770;
var G__32863 = (i__32771 + (1));
seq__32768 = G__32860;
chunk__32769 = G__32861;
count__32770 = G__32862;
i__32771 = G__32863;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__32768);
if(temp__5459__auto__){
var seq__32768__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32768__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__32768__$1);
var G__32864 = cljs.core.chunk_rest(seq__32768__$1);
var G__32865 = c__11343__auto__;
var G__32866 = cljs.core.count(c__11343__auto__);
var G__32867 = (0);
seq__32768 = G__32864;
chunk__32769 = G__32865;
count__32770 = G__32866;
i__32771 = G__32867;
continue;
} else {
var vec__32777 = cljs.core.first(seq__32768__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32777,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32777,(1),null);
var path_SINGLEQUOTE__32868 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__32869 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_32870 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__32768,chunk__32769,count__32770,i__32771,path_SINGLEQUOTE__32868,class_SINGLEQUOTE__32869,vec__32777,prop,query_SINGLEQUOTE_,seq__32768__$1,temp__5459__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__32716_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__32869,om.next.react_type(p1__32716_SHARP_));
});})(seq__32768,chunk__32769,count__32770,i__32771,path_SINGLEQUOTE__32868,class_SINGLEQUOTE__32869,vec__32777,prop,query_SINGLEQUOTE_,seq__32768__$1,temp__5459__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__32871 = (function (){var and__10400__auto__ = class_SINGLEQUOTE__32869;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_32870),(1));
} else {
return and__10400__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__32872 = (cljs.core.truth_(cascade_query_QMARK__32871)?om.next.get_query(cljs.core.first(cs_32870)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__10400__auto__ = cascade_query_QMARK__32871;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__32872);
} else {
return and__10400__auto__;
}
})())){
var qs_32873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(class_path__GT_query),classpath__$1);
var q_32874 = cljs.core.first(qs_32873);
var qnode_32875 = clojure.zip.node((function (){var G__32780 = q_32874;
if((class$ == null)){
return om.next.query_template(G__32780,path);
} else {
return G__32780;
}
})());
var new_query_32876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_32875,prop,query_SINGLEQUOTE__SINGLEQUOTE__32872);
var q_SINGLEQUOTE__32877 = (function (){var G__32781 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_32874),path),new_query_32876);
if((class$ == null)){
return om.next.query_template(om.next.focus_query(clojure.zip.root(G__32781),cljs.core.pop(path)),cljs.core.pop(path));
} else {
return G__32781;
}
})();
var qs_SINGLEQUOTE__32878 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__32877]),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([q_32874])),qs_32873);
var cp__GT_q_SINGLEQUOTE__32879 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__32878]),om.next.cascade_query(cljs.core.deref(class_path__GT_query),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__32877),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__32879);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__32869,query_SINGLEQUOTE__SINGLEQUOTE__32872,path_SINGLEQUOTE__32868,classpath__$1,query,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__32880 = cljs.core.next(seq__32768__$1);
var G__32881 = null;
var G__32882 = (0);
var G__32883 = (0);
seq__32768 = G__32880;
chunk__32769 = G__32881;
count__32770 = G__32882;
i__32771 = G__32883;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_(root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,cljs.core.deref(prop__GT_classes),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cljs.core.deref(class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var fexpr__32782 = cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs);
return (fexpr__32782.cljs$core$IFn$_invoke$arity$2 ? fexpr__32782.cljs$core$IFn$_invoke$arity$2(indexes__$1,c) : fexpr__32782.call(null,indexes__$1,c));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var fexpr__32783 = cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs);
return (fexpr__32783.cljs$core$IFn$_invoke$arity$2 ? fexpr__32783.cljs$core$IFn$_invoke$arity$2(indexes__$2,c) : fexpr__32783.call(null,indexes__$2,c));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident(c,om.next.props(c));
var l__27118__auto___32884 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_(ident)){
} else {
var G__32785_32885 = l__27118__auto___32884;
var G__32786_32886 = ["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["malformed Ident. An ident must be a vector of ","two elements (a keyword and an EDN value). Check ","the Ident implementation of component `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"`."].join(''))].join('');
goog.log.error(G__32785_32885,G__32786_32886);
}

var l__27118__auto___32887 = om.next._STAR_logger_STAR_;
if(!((cljs.core.second(ident) == null))){
} else {
var G__32787_32888 = l__27118__auto___32887;
var G__32788_32889 = ["Invariant Violation",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[" (in function: `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),"`)"].join(''))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),"'s ident (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),") has a `nil` second element."," This warning can be safely ignored if that is intended."].join(''))].join('');
goog.log.error(G__32787_32888,G__32788_32889);
}

return ident;
})():null);
if(!((ident == null))){
var G__32789 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__32789;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var fexpr__32790 = cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs);
return (fexpr__32790.cljs$core$IFn$_invoke$arity$2 ? fexpr__32790.cljs$core$IFn$_invoke$arity$2(indexes__$1,c) : fexpr__32790.call(null,indexes__$1,c));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,om.next.react_type(c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((function (){var fexpr__32791 = cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs);
return (fexpr__32791.cljs$core$IFn$_invoke$arity$2 ? fexpr__32791.cljs$core$IFn$_invoke$arity$2(indexes__$2,c) : fexpr__32791.call(null,indexes__$2,c));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ident == null))){
var G__32793 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__32793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__32793;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref(self__.indexes);
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([k]);
} else {
var temp__5457__auto__ = (function (){var fexpr__32794 = cljs.core.cst$kw$ref_DASH__GT_components.cljs$core$IFn$_invoke$arity$1(self__.extfs);
return (fexpr__32794.cljs$core$IFn$_invoke$arity$2 ? fexpr__32794.cljs$core$IFn$_invoke$arity$2(indexes__$1,k) : fexpr__32794.call(null,indexes__$1,k));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var cs = temp__5457__auto__;
return cs;
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (temp__5457__auto__,indexes__$1,___$1){
return (function (p1__32717_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__32717_SHARP_], null));
});})(temp__5457__auto__,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k32719,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__32795 = k32719;
var G__32795__$1 = (((G__32795 instanceof cljs.core.Keyword))?G__32795.fqn:null);
switch (G__32795__$1) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32719,else__11103__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#om.next.Indexer{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32718){
var self__ = this;
var G__32718__$1 = this;
return (new cljs.core.RecordIter((0),G__32718__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__32796 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-952748745 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__32796(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32720,other32721){
var self__ = this;
var this32720__$1 = this;
return (!((other32721 == null))) && ((this32720__$1.constructor === other32721.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32720__$1.indexes,other32721.indexes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32720__$1.extfs,other32721.extfs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32720__$1.__extmap,other32721.__extmap));
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extfs,null,cljs.core.cst$kw$indexes,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__32718){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__32797 = cljs.core.keyword_identical_QMARK_;
var expr__32798 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__32800 = cljs.core.cst$kw$indexes;
var G__32801 = expr__32798;
return (pred__32797.cljs$core$IFn$_invoke$arity$2 ? pred__32797.cljs$core$IFn$_invoke$arity$2(G__32800,G__32801) : pred__32797.call(null,G__32800,G__32801));
})())){
return (new om.next.Indexer(G__32718,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32802 = cljs.core.cst$kw$extfs;
var G__32803 = expr__32798;
return (pred__32797.cljs$core$IFn$_invoke$arity$2 ? pred__32797.cljs$core$IFn$_invoke$arity$2(G__32802,G__32803) : pred__32797.call(null,G__32802,G__32803));
})())){
return (new om.next.Indexer(self__.indexes,G__32718,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__32718),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__32718){
var self__ = this;
var this__11099__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__32718,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes,cljs.core.cst$sym$extfs], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__32722){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__32722),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__32722),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32722,cljs.core.cst$kw$indexes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$extfs], 0))),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var G__32892 = arguments.length;
switch (G__32892) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$drop_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$ref_DASH__GT_components,(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$data_DASH_path_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.next.get_indexer(om.next.get_reconciler(component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var xf = (function (){var G__32897 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_(component)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),G__32897);
} else {
return G__32897;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.next.get_indexer(om.next.get_reconciler(component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__32894_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(om.next.get_dispatch_key,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__32894_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No queries exist at the intersection of component path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)," and data path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No queries exist for component path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__32903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident));
var G__32904 = data;
var G__32905 = refs;
var G__32906 = union_seen;
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(G__32903,G__32904,G__32905,G__32906) : om.next.normalize_STAR_.call(null,G__32903,G__32904,G__32905,G__32906));
})(),cljs.core.assoc,cljs.core.cst$kw$om_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var vec__32907 = om.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_(sel);
var union_entry = ((om.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_(v))){
var G__32922 = cljs.core.next(q);
var G__32923 = ret;
q = G__32922;
ret = G__32923;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry));
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));

var G__32924 = cljs.core.next(q);
var G__32925 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__32924;
ret = G__32925;
continue;
} else {
var G__32926 = cljs.core.next(q);
var G__32927 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__32926;
ret = G__32927;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__32899_SHARP_){
return (om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? om.next.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(sel__$1,p1__32899_SHARP_,refs,union_entry) : om.next.normalize_STAR_.call(null,sel__$1,p1__32899_SHARP_,refs,union_entry));
});})(q,ret,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__32901_SHARP_){
return om.next.ident(class$,p1__32901_SHARP_);
});})(q,ret,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__32914){
var vec__32915 = p__32914;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32915,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap(is,xs));
});})(q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__32918){
var vec__32919 = p__32918;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32919,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32919,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__32907,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__32928 = cljs.core.next(q);
var G__32929 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__32928;
ret = G__32929;
continue;
} else {
var G__32930 = cljs.core.next(q);
var G__32931 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__32930;
ret = G__32931;
continue;
}
} else {
if((v == null)){
var G__32932 = cljs.core.next(q);
var G__32933 = ret;
q = G__32932;
ret = G__32933;
continue;
} else {
var G__32934 = cljs.core.next(q);
var G__32935 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__32934;
ret = G__32935;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__32936 = cljs.core.next(q);
var G__32937 = ret;
q = G__32936;
ret = G__32937;
continue;
} else {
var G__32938 = cljs.core.next(q);
var G__32939 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__32938;
ret = G__32939;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref(refs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,cljs.core.deref(refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__32944 = cljs.core.group_by((function (p1__32943_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__32943_SHARP_));
}),res);
var map__32944__$1 = ((((!((map__32944 == null)))?((((map__32944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32944):map__32944);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32944__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32944__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(om.next.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__32946 = node;
if(typeof node === 'number'){
return (G__32946 - (1));
} else {
return G__32946;
}
})();
return om.next.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32947){
var vec__32948 = p__32947;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32948,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_(ident)) && (cljs.core.contains_QMARK_(refs,cljs.core.first(ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__10400__auto__ = union_expr;
if(cljs.core.truth_(and__10400__auto__)){
return recurse_key;
} else {
return and__10400__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,data__$1))){
var G__32983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(data__$1) : map_ident.call(null,data__$1)));
data__$1 = G__32983;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not(om.next.mappable_ident_QMARK_(refs,ident))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null))){
return ident;
} else {
var map__32954 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__32954__$1 = ((((!((map__32954 == null)))?((((map__32954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32954):map__32954);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32954__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32954__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__32954,map__32954__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__32951_SHARP_){
var G__32956 = p1__32951_SHARP_;
if(cljs.core.seq_QMARK_(p1__32951_SHARP_)){
return cljs.core.first(G__32956);
} else {
return G__32956;
}
});})(map__32954,map__32954__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__32957 = om.util.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident,key);
var G__32984 = cljs.core.next(joins__$1);
var G__32985 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel,v,refs,map_ident,idents_seen,union_expr,recurse_key) : om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key)));
joins__$1 = G__32984;
ret = G__32985;
continue;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(ident,props__$1),ret], 0));
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var query__$1 = (function (){var G__32960 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__32960,recurse_key);
} else {
return G__32960;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__32961 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__32961,recurse_key);
} else {
return G__32961;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__32962 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__32962,cljs.core.first(ident));
} else {
return G__32962;
}
})();
return (om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null) : om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.map_QMARK_(query);
if(and__10400__auto__){
return union_recur_QMARK_;
} else {
return and__10400__auto__;
}
})())){
var G__32963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(recur_ident));
var G__32964 = data__$1;
var G__32965 = refs;
var G__32966 = map_ident;
var G__32967 = idents_seen;
var G__32968 = union_expr;
var G__32969 = recurse_key;
return (om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(G__32963,G__32964,G__32965,G__32966,G__32967,G__32968,G__32969) : om.next.denormalize_STAR_.call(null,G__32963,G__32964,G__32965,G__32966,G__32967,G__32968,G__32969));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__32970 = cljs.core.group_by(((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__32952_SHARP_){
var or__10412__auto__ = om.util.join_QMARK_(p1__32952_SHARP_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (om.util.ident_QMARK_(p1__32952_SHARP_)) || ((cljs.core.seq_QMARK_(p1__32952_SHARP_)) && (om.util.ident_QMARK_(cljs.core.first(p1__32952_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__32970__$1 = ((((!((map__32970 == null)))?((((map__32970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32970):map__32970);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32970__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32970__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__32970,map__32970__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__32953_SHARP_){
var G__32972 = p1__32953_SHARP_;
if(cljs.core.seq_QMARK_(p1__32953_SHARP_)){
return cljs.core.first(G__32972);
} else {
return G__32972;
}
});})(map__32970,map__32970__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__32976 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__32976);
} else {
return G__32976;
}
})();
var join__$2 = (function (){var G__32977 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__32977],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__32977;
}
})();
var vec__32973 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__32978 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__32978);
} else {
return G__32978;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1)));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_(refs,next))){
var G__32986 = next;
v__$1 = G__32986;
continue;
} else {
return (map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v__$1) : map_ident.call(null,v__$1));
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__10400__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__10400__auto__)){
return om.util.union_QMARK_(join__$2);
} else {
return and__10400__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):(((om.util.ident_QMARK_(key__$1)) && (om.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__10400__auto__ = om.next.mappable_ident_QMARK_(refs,v__$1);
if(cljs.core.truth_(and__10400__auto__)){
return recurse_QMARK_;
} else {
return and__10400__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__32987 = cljs.core.next(joins__$1);
var G__32988 = ret;
joins__$1 = G__32987;
ret = G__32988;
continue;
} else {
if(graph_loop_QMARK_){
var G__32989 = cljs.core.next(joins__$1);
var G__32990 = ret;
joins__$1 = G__32989;
ret = G__32990;
continue;
} else {
if((v__$1 == null)){
var G__32991 = cljs.core.next(joins__$1);
var G__32992 = ret;
joins__$1 = G__32991;
ret = G__32992;
continue;
} else {
var G__32993 = cljs.core.next(joins__$1);
var G__32994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,(om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7 ? om.next.denormalize_STAR_.cljs$core$IFn$_invoke$arity$7(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1) : om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1)));
joins__$1 = G__32993;
ret = G__32994;
continue;

}
}
}
} else {
var temp__5457__auto__ = cljs.core.some(((function (joins__$1,ret,map__32970,map__32970__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__32979){
var vec__32980 = p__32979;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__32970,map__32970__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__5457__auto__)){
var looped_key = temp__5457__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var G__32996 = arguments.length;
switch (G__32996) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__33004){
var vec__33005 = p__33004;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33005,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33005,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__33005,k,orig_paths){
return (function (p1__32998_SHARP_,p2__32999_SHARP_){
return cljs.core.assoc_in(p1__32998_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__32999_SHARP_,k),to_move);
});})(to_move,vec__33005,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value(join);
if(cljs.core.vector_QMARK_(joinvalue)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (joinvalue){
return (function (p1__33008_SHARP_){
var G__33009 = p1__33008_SHARP_;
var G__33010 = result_roots;
var G__33011 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.util.join_key(join));
return (om.next.move_roots.cljs$core$IFn$_invoke$arity$3 ? om.next.move_roots.cljs$core$IFn$_invoke$arity$3(G__33009,G__33010,G__33011) : om.next.move_roots.call(null,G__33009,G__33010,G__33011));
});})(joinvalue))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([joinvalue], 0));
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$elements_DASH_seen.cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__10400__auto__ = om.util.join_QMARK_(expr);
if(cljs.core.truth_(and__10400__auto__)){
return (!(om.util.union_QMARK_(expr))) && (!(cljs.core.list_QMARK_(expr)));
} else {
return and__10400__auto__;
}
})())?(function (){var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var q = (function (){var or__10412__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_(q))?q:((om.util.recursion_QMARK_(jv))?jv:(function (){var G__33013 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv));
return (om.next.merge_joins.cljs$core$IFn$_invoke$arity$1 ? om.next.merge_joins.cljs$core$IFn$_invoke$arity$1(G__33013) : om.next.merge_joins.call(null,G__33013));
})()
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__33014){
var vec__33015 = p__33014;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33015,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([jkey,jsel]);
});})(init,res))
,cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__33022){
var vec__33023 = p__33022;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33023,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query__$1,cljs.core.cst$kw$rewrite,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__33027 = config;
var map__33027__$1 = ((((!((map__33027 == null)))?((((map__33027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33027):map__33027);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33027__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33027__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33027,map__33027__$1,merge_ident,indexer){
return (function (p1__33026_SHARP_){
var and__10400__auto__ = om.util.join_QMARK_(p1__33026_SHARP_);
if(cljs.core.truth_(and__10400__auto__)){
return om.util.ident_QMARK_(om.util.join_key(p1__33026_SHARP_));
} else {
return and__10400__auto__;
}
});})(map__33027,map__33027__$1,merge_ident,indexer))
,query));
var step = ((function (map__33027,map__33027__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__33036){
var vec__33037 = p__33036;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33037,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__10412__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return om.next.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
var G__33041 = (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_));
var G__33042 = refs__$1;
var fexpr__33040 = cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__33040.cljs$core$IFn$_invoke$arity$2 ? fexpr__33040.cljs$core$IFn$_invoke$arity$2(G__33041,G__33042) : fexpr__33040.call(null,G__33041,G__33042));
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__33027,map__33027__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__33043 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33043,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33043,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__10412__auto__ = query;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
var G__33047 = om.next.merge_idents(state,config,idts,query);
var G__33048 = res_SINGLEQUOTE___$1;
var fexpr__33046 = cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__33046.cljs$core$IFn$_invoke$arity$2 ? fexpr__33046.cljs$core$IFn$_invoke$arity$2(G__33047,G__33048) : fexpr__33046.call(null,G__33047,G__33048));
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__33051 = (function (){var G__33052 = reconciler;
var G__33053 = cljs.core.deref(state);
var G__33054 = delta;
var G__33055 = query;
return (merge_STAR_.cljs$core$IFn$_invoke$arity$4 ? merge_STAR_.cljs$core$IFn$_invoke$arity$4(G__33052,G__33053,G__33054,G__33055) : merge_STAR_.call(null,G__33052,G__33053,G__33054,G__33055));
})();
var map__33051__$1 = ((((!((map__33051 == null)))?((((map__33051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33051):map__33051);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33051__$1,cljs.core.cst$kw$tempids);
if((remote == null)){
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,keys);
} else {
}

return cljs.core.reset_BANG_(state,(function (){var temp__5457__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5457__auto__)){
var migrate = temp__5457__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null)),(function (){var G__33057 = next;
var G__33058 = (function (){var or__10412__auto__ = query;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})();
var G__33059 = tempids;
var G__33060 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__33057,G__33058,G__33059,G__33060) : migrate.call(null,G__33057,G__33058,G__33059,G__33060));
})()], 0));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k33067,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__33071 = k33067;
var G__33071__$1 = (((G__33071 instanceof cljs.core.Keyword))?G__33071.fqn:null);
switch (G__33071__$1) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33067,else__11103__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sends], 0));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

var G__33073 = sends;
var G__33074 = ((function (G__33073,sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,cljs.core.keys(resp),remote);
}

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(G__33073,sends,this$__$1))
;
var fexpr__33072 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33072.cljs$core$IFn$_invoke$arity$2 ? fexpr__33072.cljs$core$IFn$_invoke$arity$2(G__33073,G__33074) : fexpr__33072.call(null,G__33073,G__33074));
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref(self__.state);
var q = ((!((remote == null)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null)):cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote_DASH_queue,remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_(q)){
var fexpr__33075 = cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st);
return (fexpr__33075.cljs$core$IFn$_invoke$arity$0 ? fexpr__33075.cljs$core$IFn$_invoke$arity$0() : fexpr__33075.call(null));
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,this$__$1){
return (function (p1__33063_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__33063_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__33064_SHARP_,p2__33065_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__33064_SHARP_,p2__33065_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__33076 = self__.config;
var map__33076__$1 = ((((!((map__33076 == null)))?((((map__33076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33076):map__33076);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33076__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
var seq__33078 = cljs.core.seq((function (){var fexpr__33082 = cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33082.cljs$core$IFn$_invoke$arity$1 ? fexpr__33082.cljs$core$IFn$_invoke$arity$1(cs) : fexpr__33082.call(null,cs));
})());
var chunk__33079 = null;
var count__33080 = (0);
var i__33081 = (0);
while(true){
if((i__33081 < count__33080)){
var c = chunk__33079.cljs$core$IIndexed$_nth$arity$2(null,i__33081);
var props_change_QMARK__33105 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_33106 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_33107 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_33108 = om.next.computed(next_raw_props_33107,computed_33106);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__33105)){
var next_props_33109__$1 = (((next_props_33108 == null))?(function (){var temp__5459__auto__ = om.next.props(c);
if(cljs.core.truth_(temp__5459__auto__)){
var props = temp__5459__auto__;
return props;
} else {
return null;
}
})():next_props_33108);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_33109__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_33108,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_33108 == null))){
om.next.update_component_BANG_(c,next_props_33108);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__33105)){
var temp__5459__auto___33110 = om.next.path(c);
if(cljs.core.truth_(temp__5459__auto___33110)){
var update_path_33111 = temp__5459__auto___33110;
var p_33112 = om.next.parent(c);
while(true){
if(!((p_33112 == null))){
var update_path_SINGLEQUOTE__33113 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_33111,cljs.core.count(om.next.path(p_33112)));
om.next.update_props_BANG_(p_33112,cljs.core.assoc_in(om.next.props(p_33112),update_path_SINGLEQUOTE__33113,next_raw_props_33107));

om.next.merge_pending_props_BANG_(p_33112);

var G__33114 = om.next.parent(p_33112);
p_33112 = G__33114;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__33115 = seq__33078;
var G__33116 = chunk__33079;
var G__33117 = count__33080;
var G__33118 = (i__33081 + (1));
seq__33078 = G__33115;
chunk__33079 = G__33116;
count__33080 = G__33117;
i__33081 = G__33118;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__33078);
if(temp__5459__auto__){
var seq__33078__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33078__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__33078__$1);
var G__33119 = cljs.core.chunk_rest(seq__33078__$1);
var G__33120 = c__11343__auto__;
var G__33121 = cljs.core.count(c__11343__auto__);
var G__33122 = (0);
seq__33078 = G__33119;
chunk__33079 = G__33120;
count__33080 = G__33121;
i__33081 = G__33122;
continue;
} else {
var c = cljs.core.first(seq__33078__$1);
var props_change_QMARK__33123 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t(c));
if(om.next.mounted_QMARK_(c)){
var computed_33124 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_raw_props_33125 = (ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c));
var next_props_33126 = om.next.computed(next_raw_props_33125,computed_33124);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_(root)) && (props_change_QMARK__33123)){
var next_props_33127__$1 = (((next_props_33126 == null))?(function (){var temp__5459__auto____$1 = om.next.props(c);
if(cljs.core.truth_(temp__5459__auto____$1)){
var props = temp__5459__auto____$1;
return props;
} else {
return null;
}
})():next_props_33126);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props(next_props_33127__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_33126,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_33126 == null))){
om.next.update_component_BANG_(c,next_props_33126);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_(root)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)) && (props_change_QMARK__33123)){
var temp__5459__auto___33128__$1 = om.next.path(c);
if(cljs.core.truth_(temp__5459__auto___33128__$1)){
var update_path_33129 = temp__5459__auto___33128__$1;
var p_33130 = om.next.parent(c);
while(true){
if(!((p_33130 == null))){
var update_path_SINGLEQUOTE__33131 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(update_path_33129,cljs.core.count(om.next.path(p_33130)));
om.next.update_props_BANG_(p_33130,cljs.core.assoc_in(om.next.props(p_33130),update_path_SINGLEQUOTE__33131,next_raw_props_33125));

om.next.merge_pending_props_BANG_(p_33130);

var G__33132 = om.next.parent(p_33130);
p_33130 = G__33132;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__33133 = cljs.core.next(seq__33078__$1);
var G__33134 = null;
var G__33135 = (0);
var G__33136 = (0);
seq__33078 = G__33133;
chunk__33079 = G__33134;
count__33080 = G__33135;
i__33081 = G__33136;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$sends_DASH_queued,true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state)));
} else {
return and__10400__auto__;
}
})())){
var new_state_33137 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_33138 = cljs.core.meta(new_state_33137);
cljs.core.reset_BANG_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state_33137,refs_33138], 0)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_33083 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_33084 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33085 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?(function (){var fexpr__33086 = cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33086.cljs$core$IFn$_invoke$arity$1 ? fexpr__33086.cljs$core$IFn$_invoke$arity$1(data) : fexpr__33086.call(null,data));
})():null)], 0));

om.next._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?(function (){var G__33088 = (rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data));
var G__33089 = target;
var fexpr__33087 = cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33087.cljs$core$IFn$_invoke$arity$2 ? fexpr__33087.cljs$core$IFn$_invoke$arity$2(G__33088,G__33089) : fexpr__33087.call(null,G__33088,G__33089));
})():(((cljs.core.deref(ret) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__5459__auto__ = cljs.core.deref(ret);
if(cljs.core.truth_(temp__5459__auto__)){
var c_SINGLEQUOTE_ = temp__5459__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref(ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return cljs.core.reset_BANG_(ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33085;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33084;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33083;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__10412__auto__ = cljs.core.deref(ret);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error(["Assert failed: ","Application root query must be a vector","\n","(or (nil? sel) (vector? sel))"].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = (function (){var fexpr__33090 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33090.cljs$core$IFn$_invoke$arity$2 ? fexpr__33090.cljs$core$IFn$_invoke$arity$2(env,sel) : fexpr__33090.call(null,env,sel));
})();
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__10412__auto__ = target;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__33062_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33062_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
var fexpr__33091 = cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33091.cljs$core$IFn$_invoke$arity$1 ? fexpr__33091.cljs$core$IFn$_invoke$arity$1(target) : fexpr__33091.call(null,target));
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__10412__auto__ = target;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_(root_class))){
return om.next.queue_render_BANG_(parsef);
} else {
return om.next.schedule_render_BANG_(this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__5459__auto___33139 = om.next.get_query((function (){var or__10412__auto__ = (function (){var and__10400__auto__ = target;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.deref(ret);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__5459__auto___33139)){
var sel_33140 = temp__5459__auto___33139;
var env_33141 = om.next.to_env(self__.config);
var snds_33142 = om.next.gather_sends(env_33141,sel_33140,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_33142)){
} else {
var temp__5459__auto___33143__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__5459__auto___33143__$1)){
var send_33144 = temp__5459__auto___33143__$1;
var G__33092_33145 = snds_33142;
var G__33093_33146 = ((function (G__33092_33145,send_33144,temp__5459__auto___33143__$1,env_33141,snds_33142,sel_33140,temp__5459__auto___33139,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,null);

return renderf((function (){var fexpr__33094 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33094.cljs$core$IFn$_invoke$arity$2 ? fexpr__33094.cljs$core$IFn$_invoke$arity$2(env_33141,sel_33140) : fexpr__33094.call(null,env_33141,sel_33140));
})());
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,resp,query);

return renderf((function (){var fexpr__33095 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config);
return (fexpr__33095.cljs$core$IFn$_invoke$arity$2 ? fexpr__33095.cljs$core$IFn$_invoke$arity$2(env_33141,sel_33140) : fexpr__33095.call(null,env_33141,sel_33140));
})());
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,cljs.core.keys(resp),remote);
}

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,resp,query,remote);

return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(G__33092_33145,send_33144,temp__5459__auto___33143__$1,env_33141,snds_33142,sel_33140,temp__5459__auto___33139,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_33144.cljs$core$IFn$_invoke$arity$2 ? send_33144.cljs$core$IFn$_invoke$arity$2(G__33092_33145,G__33093_33146) : send_33144.call(null,G__33092_33145,G__33093_33146));
} else {
}
}
} else {
}

return cljs.core.deref(ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),cljs.core.cst$kw$root);
if(om.next.iquery_QMARK_(root)){
var indexer = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,root], null)));
return om.next.protocols.index_root(indexer,(function (){var or__10412__auto__ = c;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__5459__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state));
if(cljs.core.truth_(temp__5459__auto__)){
var remove = temp__5459__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#om.next.Reconciler{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33066){
var self__ = this;
var G__33066__$1 = this;
return (new cljs.core.RecordIter((0),G__33066__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__33096 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1794519131 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__33096(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33068,other33069){
var self__ = this;
var this33068__$1 = this;
return (!((other33069 == null))) && ((this33068__$1.constructor === other33069.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33068__$1.config,other33069.config)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33068__$1.state,other33069.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33068__$1.__extmap,other33069.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__33066){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__33097 = cljs.core.keyword_identical_QMARK_;
var expr__33098 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__33100 = cljs.core.cst$kw$config;
var G__33101 = expr__33098;
return (pred__33097.cljs$core$IFn$_invoke$arity$2 ? pred__33097.cljs$core$IFn$_invoke$arity$2(G__33100,G__33101) : pred__33097.call(null,G__33100,G__33101));
})())){
return (new om.next.Reconciler(G__33066,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33102 = cljs.core.cst$kw$state;
var G__33103 = expr__33098;
return (pred__33097.cljs$core$IFn$_invoke$arity$2 ? pred__33097.cljs$core$IFn$_invoke$arity$2(G__33102,G__33103) : pred__33097.call(null,G__33102,G__33103));
})())){
return (new om.next.Reconciler(self__.config,G__33066,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__33066),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__33066){
var self__ = this;
var this__11099__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__33066,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__33070){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__33070),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__33070),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33070,cljs.core.cst$kw$config,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$state], 0))),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__33147,c){
var map__33148 = p__33147;
var map__33148__$1 = ((((!((map__33148 == null)))?((((map__33148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33148):map__33148);
var env = map__33148__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33148__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33148__$1,cljs.core.cst$kw$pathopt);
var ui = (((function (){var and__10400__auto__ = pathopt;
if(and__10400__auto__){
var and__10400__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__10400__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33153 = env;
var G__33154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,om.next.get_query(c)])], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__33153,G__33154) : parser.call(null,G__33153,G__33154));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__5459__auto___33157 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5459__auto___33157)){
var l_33158 = temp__5459__auto___33157;
var dt_33159 = (e - s);
var component_name_33160 = c.constructor.displayName;
if(((16) < dt_33159)){
var G__33155_33161 = l_33158;
var G__33156_33162 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name_33160)," query took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_33159)," msecs"].join('');
goog.log.warning(G__33155_33161,G__33156_33162);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var G__33164 = arguments.length;
switch (G__33164) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__33177){
var vec__33178 = p__33177;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33178,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__33181){
var vec__33182 = p__33181;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33182,(0),null);
var vec__33185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33182,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(1),null);
var new$ = vec__33185;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__33188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33188,id_key,id);
} else {
return G__33188;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$om$next_SLASH_error));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_(res__$1)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (class$){
return (function (p1__33190_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__33190_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__33191_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__33191_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var G__33196 = k;
if(om.util.unique_ident_QMARK_(k)){
return cljs.core.first(G__33196);
} else {
return G__33196;
}
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.util.mutation_QMARK_(expr)){
var mk = om.util.mutation_key(expr);
var ret_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,mk);
if(om.next.has_error_QMARK_(ret_SINGLEQUOTE_)){
var x = cljs.core.cst$kw$mutator.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__33192_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__33192_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__33197 = cljs.core.next(exprs);
var G__33198 = ret__$1;
exprs = G__33197;
ret__$1 = G__33198;
continue;
} else {
var G__33199 = cljs.core.next(exprs);
var G__33200 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__33199;
ret__$1 = G__33200;
continue;
}
} else {
if(om.util.union_QMARK_(expr)){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__33201 = cljs.core.next(exprs);
var G__33202 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__33201;
ret__$1 = G__33202;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__33193_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__33193_SHARP_))),p1__33193_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__33203 = cljs.core.next(exprs);
var G__33204 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__33203;
ret__$1 = G__33204;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__33205 = cljs.core.next(exprs);
var G__33206 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__33205;
ret__$1 = G__33206;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__33194_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__33194_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__10412__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__33207 = cljs.core.next(exprs);
var G__33208 = null;
exprs = G__33207;
ret__$1 = G__33208;
continue;
} else {
var G__33209 = cljs.core.next(exprs);
var G__33210 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__33209;
ret__$1 = G__33210;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_(query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,ret,cljs.core.cst$kw$errors,cljs.core.deref(errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__33216){
var map__33217 = p__33216;
var map__33217__$1 = ((((!((map__33217 == null)))?((((map__33217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33217):map__33217);
var config = map__33217__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$root_DASH_render,((function (map__33217,map__33217__$1,config){
return (function (p1__33213_SHARP_,p2__33214_SHARP_){
return ReactDOM.render(p1__33213_SHARP_,p2__33214_SHARP_);
});})(map__33217,map__33217__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$tx_DASH_listen);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__33211_SHARP_,p2__33212_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__33211_SHARP_,p2__33212_SHARP_], 0));
});})(map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var easy_reads = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$easy_DASH_reads,true);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__33215_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__33215_SHARP_);
});})(map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33217__$1,cljs.core.cst$kw$optimize,((function (map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__33217,map__33217__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$easy_DASH_reads,cljs.core.cst$kw$history,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$prune_DASH_tree,cljs.core.cst$kw$tx_DASH_listen],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__10412__auto__ = !(norm_QMARK_);
if(or__10412__auto__){
return or__10412__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remote_DASH_queue,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$protocols$IReconciler$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)),cljs.core.cst$kw$root);
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

var fexpr__33221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)),cljs.core.cst$kw$render);
return (fexpr__33221.cljs$core$IFn$_invoke$arity$0 ? fexpr__33221.cljs$core$IFn$_invoke$arity$0() : fexpr__33221.call(null));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var G__33223 = arguments.length;
switch (G__33223) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_(x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var G__33226 = arguments.length;
switch (G__33226) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var G__33229 = arguments.length;
switch (G__33229) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var G__33232 = arguments.length;
switch (G__33232) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.cst$kw$remote);
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj((function (){var x__11366__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.cst$sym$quote),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


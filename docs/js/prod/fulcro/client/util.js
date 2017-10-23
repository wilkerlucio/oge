// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('om.next');
goog.require('om.dom');
goog.require('om.next.protocols');
goog.require('om.transit');
goog.require('cognitect.transit');
goog.require('om.next.impl.parser');
/**
 * Get the ident of an Om class with props. Works on client/server
 */
fulcro.client.util.get_ident = (function fulcro$client$util$get_ident(class$,props){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false)){
return om.next.ident(class$,props);
} else {
return null;
}
});
/**
 * Get a unique string-based key. Never returns the same value.
 */
fulcro.client.util.unique_key = (function fulcro$client$util$unique_key(){
var s = cljs.core.random_uuid();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
/**
 * Re-render components. If only a reconciler is supplied then it forces a full DOM re-render by updating the :ui/react-key
 *   in app state and forcing Om to re-render the entire DOM, which only works properly if you query
 *   for :ui/react-key in your Root render component and add that as the react :key to your top-level element.
 * 
 *   If you supply an additional vector of keywords and idents then it will ask Om to rerender only those components that mention
 *   those things in their queries.
 */
fulcro.client.util.force_render = (function fulcro$client$util$force_render(var_args){
var G__33252 = arguments.length;
switch (G__33252) {
case 2:
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,keywords){
om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,keywords);

return om.next.protocols.schedule_render_BANG_(reconciler);
});

fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
var app_state = om.next.app_state(reconciler);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.assoc,cljs.core.cst$kw$ui_SLASH_react_DASH_key,fulcro.client.util.unique_key());

return om.next.force_root_render_BANG_(reconciler);
});

fulcro.client.util.force_render.cljs$lang$maxFixedArity = 2;

fulcro.client.util.atom_QMARK_ = (function fulcro$client$util$atom_QMARK_(a){
return (a instanceof cljs.core.Atom);
});
/**
 * Removes parameters from the query, e.g. for PCI compliant logging.
 */
fulcro.client.util.strip_parameters = (function fulcro$client$util$strip_parameters(query){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(clojure.walk.prewalk((function (p1__33265_SHARP_){
if(cljs.core.map_QMARK_(p1__33265_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33265_SHARP_,cljs.core.cst$kw$params);
} else {
return p1__33265_SHARP_;
}
}),om.next.impl.parser.query__GT_ast(query)),true);
});
fulcro.client.util.deep_merge = (function fulcro$client$util$deep_merge(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33274 = arguments.length;
var i__11692__auto___33275 = (0);
while(true){
if((i__11692__auto___33275 < len__11691__auto___33274)){
args__11698__auto__.push((arguments[i__11692__auto___33275]));

var G__33276 = (i__11692__auto___33275 + (1));
i__11692__auto___33275 = G__33276;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,fulcro.client.util.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

fulcro.client.util.deep_merge.cljs$lang$maxFixedArity = (0);

fulcro.client.util.deep_merge.cljs$lang$applyTo = (function (seq33268){
return fulcro.client.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33268));
});

/**
 * Helper for logging the app-state. Pass in an fulcro application atom and either top-level keys, data-paths
 *    (like get-in), or both.
 */
fulcro.client.util.log_app_state = (function fulcro$client$util$log_app_state(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33292 = arguments.length;
var i__11692__auto___33294 = (0);
while(true){
if((i__11692__auto___33294 < len__11691__auto___33292)){
args__11698__auto__.push((arguments[i__11692__auto___33294]));

var G__33296 = (i__11692__auto___33294 + (1));
i__11692__auto___33294 = G__33296;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return fulcro.client.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

fulcro.client.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic = (function (app_atom,keys_and_paths){
try{var app_state = om.next.app_state(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_atom)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((function (){var make_path = ((function (app_state){
return (function fulcro$client$util$make_path(location){
if(cljs.core.sequential_QMARK_(location)){
return location;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [location], null);
}
});})(app_state))
;
var process_location = ((function (app_state){
return (function fulcro$client$util$process_location(acc,location){
var path = make_path(location);
return cljs.core.assoc_in(acc,path,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),path));
});})(app_state))
;
var pred__33288 = cljs.core._EQ_;
var expr__33289 = cljs.core.count(keys_and_paths);
if(cljs.core.truth_((pred__33288.cljs$core$IFn$_invoke$arity$2 ? pred__33288.cljs$core$IFn$_invoke$arity$2((0),expr__33289) : pred__33288.call(null,(0),expr__33289)))){
return cljs.core.deref(app_state);
} else {
if(cljs.core.truth_((pred__33288.cljs$core$IFn$_invoke$arity$2 ? pred__33288.cljs$core$IFn$_invoke$arity$2((1),expr__33289) : pred__33288.call(null,(1),expr__33289)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),make_path(cljs.core.first(keys_and_paths)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_location,cljs.core.PersistentArrayMap.EMPTY,keys_and_paths);
}
}
})());
}catch (e33286){if((e33286 instanceof Error)){
var e = e33286;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("fulcro.client.impl.util/log-app-state expects an atom with an fulcro client",cljs.core.PersistentArrayMap.EMPTY);
} else {
throw e33286;

}
}});

fulcro.client.util.log_app_state.cljs$lang$maxFixedArity = (1);

fulcro.client.util.log_app_state.cljs$lang$applyTo = (function (seq33278){
var G__33279 = cljs.core.first(seq33278);
var seq33278__$1 = cljs.core.next(seq33278);
return fulcro.client.util.log_app_state.cljs$core$IFn$_invoke$arity$variadic(G__33279,seq33278__$1);
});

fulcro.client.util.conform_BANG_ = (function fulcro$client$util$conform_BANG_(spec,x){
var rt = cljs.spec.alpha.conform(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(rt))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_str(spec,x),cljs.spec.alpha.explain_data(spec,x));
} else {
}

return rt;
});
/**
 * Returns the react-instance (which is logically true) iff the given react instance is an instance of the given react class.
 *   Otherwise returns nil.
 */
fulcro.client.util.react_instance_QMARK_ = (function fulcro$client$util$react_instance_QMARK_(react_class,react_instance){
if(cljs.core.truth_(react_class)){
} else {
throw (new Error("Assert failed: react-class"));
}

if(cljs.core.truth_(react_instance)){
} else {
throw (new Error("Assert failed: react-instance"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(om.next.react_type(react_instance),react_class)){
return react_instance;
} else {
return null;
}
});
/**
 * Finds (and returns) the first instance of the given React class (or nil if not found) in a sequence of instances. Useful
 *   for finding a child of the correct type when nesting react components.
 */
fulcro.client.util.first_node = (function fulcro$client$util$first_node(react_class,sequence_of_react_instances){
return cljs.core.some((function (p1__33300_SHARP_){
return fulcro.client.util.react_instance_QMARK_(react_class,p1__33300_SHARP_);
}),sequence_of_react_instances);
});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 */
fulcro.client.util.transit_clj__GT_str = (function fulcro$client$util$transit_clj__GT_str(coll){
return cognitect.transit.write(om.transit.writer.cljs$core$IFn$_invoke$arity$0(),coll);
});
/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state when starting from a server-side rendering.
 */
fulcro.client.util.transit_str__GT_clj = (function fulcro$client$util$transit_str__GT_clj(str){
return cognitect.transit.read(om.next.reader.cljs$core$IFn$_invoke$arity$0(),str);
});

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.transit');
goog.require('fulcro.util');
goog.require('cognitect.transit');
goog.require('fulcro.client.impl.parser');
/**
 * Re-render components. If only a reconciler is supplied then it forces a full React DOM refresh.
 * 
 *   If you supply an additional vector of keywords and idents then it will try to rerender only those components that mention
 *   those things in their queries.
 */
fulcro.client.util.force_render = (function fulcro$client$util$force_render(var_args){
var G__37833 = arguments.length;
switch (G__37833) {
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
fulcro.client.impl.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,keywords);

return fulcro.client.impl.protocols.schedule_render_BANG_(reconciler);
});

fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1 = (function (reconciler){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});

fulcro.client.util.force_render.cljs$lang$maxFixedArity = 2;

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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.react_type(react_instance),react_class)){
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
return cljs.core.some((function (p1__37839_SHARP_){
return fulcro.client.util.react_instance_QMARK_(react_class,p1__37839_SHARP_);
}),sequence_of_react_instances);
});
/**
 * Use transit to encode clj data as a string. Useful for encoding initial app state from server-side rendering.
 */
fulcro.client.util.transit_clj__GT_str = (function fulcro$client$util$transit_clj__GT_str(coll){
return cognitect.transit.write(fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0(),coll);
});
/**
 * Use transit to decode a string into a clj data structure. Useful for decoding initial app state when starting from a server-side rendering.
 */
fulcro.client.util.transit_str__GT_clj = (function fulcro$client$util$transit_str__GT_clj(str){
return cognitect.transit.read(fulcro.client.primitives.reader.cljs$core$IFn$_invoke$arity$0(),str);
});
/**
 * Removes parameters from the query, e.g. for PCI compliant logging.
 */
fulcro.client.util.strip_parameters = (function fulcro$client$util$strip_parameters(query){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(clojure.walk.prewalk((function (p1__37841_SHARP_){
if(cljs.core.map_QMARK_(p1__37841_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37841_SHARP_,cljs.core.cst$kw$params);
} else {
return p1__37841_SHARP_;
}
}),fulcro.client.impl.parser.query__GT_ast(query)),true);
});
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.util.integrate_ident = fulcro.client.primitives.integrate_ident;

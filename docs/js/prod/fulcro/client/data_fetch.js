// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.logging');
goog.require('fulcro.client.dom');
goog.require('fulcro.client');
goog.require('fulcro.util');
goog.require('clojure.set');



fulcro.client.data_fetch.bool_QMARK_ = (function fulcro$client$data_fetch$bool_QMARK_(v){
return cljs.core.boolean_QMARK_(v);
});
/**
 * The name of the table in which fulcro load markers are stored
 */
fulcro.client.data_fetch.marker_table = fulcro.client.impl.data_fetch.marker_table;
fulcro.client.data_fetch.multiple_targets = (function fulcro$client$data_fetch$multiple_targets(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42951 = arguments.length;
var i__12085__auto___42952 = (0);
while(true){
if((i__12085__auto___42952 < len__12084__auto___42951)){
args__12091__auto__.push((arguments[i__12085__auto___42952]));

var G__42953 = (i__12085__auto___42952 + (1));
i__12085__auto___42952 = G__42953;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_targeting.multiple_targets,targets);
});

fulcro.client.data_fetch.multiple_targets.cljs$lang$maxFixedArity = (0);

fulcro.client.data_fetch.multiple_targets.cljs$lang$applyTo = (function (seq42950){
return fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42950));
});

fulcro.client.data_fetch.prepend_to = (function fulcro$client$data_fetch$prepend_to(target){
return fulcro.client.impl.data_targeting.prepend_to(target);
});
fulcro.client.data_fetch.append_to = (function fulcro$client$data_fetch$append_to(target){
return fulcro.client.impl.data_targeting.append_to(target);
});
fulcro.client.data_fetch.replace_at = (function fulcro$client$data_fetch$replace_at(target){
return fulcro.client.impl.data_targeting.replace_at(target);
});
/**
 * Computes the refresh for the load by ensuring the loaded data is on the
 *   list of things to re-render.
 */
fulcro.client.data_fetch.computed_refresh = (function fulcro$client$data_fetch$computed_refresh(explicit_refresh,load_key,target){
return cljs.core.vec((function (){var result = cljs.core.conj.cljs$core$IFn$_invoke$arity$1(cljs.core.set(explicit_refresh));
var result__$1 = ((((target == null)) || (fulcro.util.ident_QMARK_(load_key)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,load_key):result);
var add_target = ((function (result,result__$1){
return (function (r,t){
if((cljs.core.vector_QMARK_(t)) && ((cljs.core.count(t) >= (2)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),t)));
} else {
if(cljs.core.vector_QMARK_(t)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.first(t));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,t);

}
}
});})(result,result__$1))
;
if(cljs.core.truth_(fulcro.client.impl.data_fetch.multiple_targets_QMARK_(target))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (result,result__$1,add_target){
return (function (refresh,t){
return add_target(refresh,t);
});})(result,result__$1,add_target))
,result__$1,target);
} else {
if(cljs.core.truth_(target)){
return add_target(result__$1,target);
} else {
return result__$1;

}
}
})());
});
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
fulcro.client.data_fetch.load_params_STAR_ = (function fulcro$client$data_fetch$load_params_STAR_(server_property_or_ident,SubqueryClass,p__42954){
var map__42955 = p__42954;
var map__42955__$1 = ((((!((map__42955 == null)))?((((map__42955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42955):map__42955);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,cljs.core.cst$kw$target);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$parallel,false);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42955__$1,cljs.core.cst$kw$initialize,false);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(((target == null)) || (cljs.core.vector_QMARK_(target))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if(cljs.core.truth_((function (){var or__10805__auto__ = (marker == null);
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = fulcro.client.data_fetch.bool_QMARK_(marker);
if(cljs.core.truth_(or__10805__auto____$1)){
return or__10805__auto____$1;
} else {
return (marker instanceof cljs.core.Keyword);
}
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? marker) (bool? marker) (keyword? marker))"));
}

if(((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if(((fallback == null)) || ((fallback instanceof cljs.core.Symbol))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if(((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_(refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if(((params == null)) || (cljs.core.map_QMARK_(params))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_(without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((fulcro.util.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

if((function (){var or__10805__auto__ = (SubqueryClass == null);
if(or__10805__auto__){
return or__10805__auto__;
} else {
if(!((SubqueryClass == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === SubqueryClass.fulcro$client$primitives$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
} else {
throw (new Error("Assert failed: (or (nil? SubqueryClass) (implements? prim/IQuery SubqueryClass))"));
}

var query = (cljs.core.truth_((function (){var and__10793__auto__ = SubqueryClass;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__10793__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11759__auto__ = server_property_or_ident;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(SubqueryClass);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),(function (){var x__11759__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())))):(cljs.core.truth_(SubqueryClass)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(SubqueryClass)])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__11759__auto__ = server_property_or_ident;
return cljs.core._conj((function (){var x__11759__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto____$1);
})(),x__11759__auto__);
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$initialize,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$target,cljs.core.cst$kw$query],[remote,fulcro.client.data_fetch.computed_refresh(refresh,server_property_or_ident,target),parallel,fallback,marker,post_mutation,without,(cljs.core.truth_((function (){var and__10793__auto__ = initialize;
if(cljs.core.truth_(and__10793__auto__)){
var and__10793__auto____$1 = SubqueryClass;
if(cljs.core.truth_(and__10793__auto____$1)){
return server_property_or_ident;
} else {
return and__10793__auto____$1;
}
} else {
return and__10793__auto__;
}
})())?cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,((cljs.core.map_QMARK_(initialize))?initialize:(cljs.core.truth_((function (){var and__10793__auto__ = initialize;
if(cljs.core.truth_(and__10793__auto__)){
return fulcro.client.primitives.has_initial_app_state_QMARK_(SubqueryClass);
} else {
return and__10793__auto__;
}
})())?fulcro.client.primitives.get_initial_state(SubqueryClass,cljs.core.PersistentArrayMap.EMPTY):cljs.core.PersistentArrayMap.EMPTY
))]):null),post_mutation_params,target,query]);
});
/**
 * Generates a transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete tx (as a vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
fulcro.client.data_fetch.load_mutation = (function fulcro$client$data_fetch$load_mutation(load_args){
if(((cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_(cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args)))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__10805__auto__ = cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11759__auto__ = load_args;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive a query of the form: [({server-property (prim/get-query SubqueryClass)} params)], which
 *   a Fulcro parser will correctly parse as a join on server-property with the given subquery and params. See the AST and
 *   instructions on parsing queries in the developer's guide.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : A component instance, Fulcro application, or reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `SubqueryClass` : A component that implements IQuery. This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  SubqueryClass can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery (as an edge (normalized) or value (not normalized)).
 *  Can also be special targets (multiple-targets, append-to,
 *  prepend-to, or replace-at). If you are loading by keyword (into root), then this relocates the result (ident or value) after load.
 *  When loading an entity (by ident), then this option will place additional idents at the target path(s) that point to that entity.
 *   - `initialize` - Optional. If `true`, uses `get-initial-state` on SubqueryClass to  get a basis for merge of the result. This allows you
 *  to use initial state to pre-populate loads with things like UI concerns. If `:initialize` is passed a map, then it uses that as
 *  the base target merge value for SubqueryClass instead.
 *   - `remote` - Optional. Keyword name of the remote that this load should come from.
 *   - `params` - Optional parameters to add to the generated query
 *   - `marker` - Boolean to determine if you want a fetch-state marker in your app state. Defaults to true. Add `:ui/fetch-state` to the
 *   target component in order to see this data in your component.
 *   - `refresh` - A vector of keywords that will cause component re-renders after the final load/mutations. Same as follow-on
 *   reads in normal `transact!`
 *   - `parallel` - If true, indicates that this load does not have to go through the sequential network queue. Defaults to false.
 *   - `post-mutation` - A mutation (symbol) to run after the data is merged. Note, if target is supplied be sure your post mutation
 *   should expect the data at the targeted location. The `env` of that mutation will be the env of the load (if available), but will also include `:load-request`.
 *   - `post-mutation-params` - An optional map  that will be passed to the post-mutation when it is called. May only contain raw data, not code!
 *   - `fallback` - A mutation (symbol) to run if there is a server/network error. The `env` of the fallback will be the env of the load (if available), but will also include `:load-request`.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 * 
 *   Notes on UI Refresh:
 *   The refresh list will automatically include what you load (as a non-duplicate):
 *   - When target is set and has 2+ elements: refresh will include an ident of the first two elements
 *   - e.g. `:target [:a 1 :thing]` -> `:refresh [[:a 1]]`
 *   - When target has a single element, refresh will include that element as a keyword
 *   - e.g. `:target [:thing]` -> `:refresh [:thing]`
 *   - When there is no target:
 *   - If prop-or-ident is a kw -> `:refresh [kw]`
 *   - If prop-or-ident is an ident -> `:refresh [ident]`
 *   In all cases, any explicit refresh things you include will not be dropped. The computed refresh list
 *   is essentially a `(-> original-refresh-list set add-computed-bits vec)`.
 *   
 */
fulcro.client.data_fetch.load = (function fulcro$client$data_fetch$load(var_args){
var G__42960 = arguments.length;
switch (G__42960) {
case 3:
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,SubqueryClass,config){
if((function (){var or__10805__auto__ = fulcro.client.primitives.component_QMARK_(app_or_comp_or_reconciler);
if(or__10805__auto__){
return or__10805__auto__;
} else {
var or__10805__auto____$1 = fulcro.client.primitives.reconciler_QMARK_(app_or_comp_or_reconciler);
if(or__10805__auto____$1){
return or__10805__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$))){
return true;
} else {
return false;
}
} else {
return false;
}
}
}
})()){
} else {
throw (new Error("Assert failed: (or (prim/component? app-or-comp-or-reconciler) (prim/reconciler? app-or-comp-or-reconciler) (implements? fc/FulcroApplication app-or-comp-or-reconciler))"));
}

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var component_or_reconciler = ((((!((app_or_comp_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$)))?true:false):false))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_or_comp_or_reconciler,cljs.core.cst$kw$reconciler):app_or_comp_or_reconciler);
var mutation_args = fulcro.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1);
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_reconciler,fulcro.client.data_fetch.load_mutation(mutation_args));
});

fulcro.client.data_fetch.load.cljs$lang$maxFixedArity = 4;

/**
 * 
 *   See `load` for descriptions of parameters and config.
 * 
 *   Queue up a remote load from within an already-running mutation. Similar to `load`, but usable from
 *   within a mutation. IMPORTANT: Make sure you specify the `:remote` parameter to this function, as
 *   well as including a `remote-load` for that remote.
 * 
 *   Note the `:refresh` parameter is supported, and defaults to empty. If you want anything to refresh other than
 *   the targeted component you will want to include the :refresh parameter.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *     ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *     ; You must still name the remote in the `load-action` if it is something other than default.
 *     :action (fn []
 *        (load-action env ...)
 *        ; other optimistic updates/state changes)}
 * 
 *   `env` is the mutation's environment parameter.
 */
fulcro.client.data_fetch.load_action = (function fulcro$client$data_fetch$load_action(var_args){
var G__42967 = arguments.length;
switch (G__42967) {
case 3:
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (env,server_property_or_ident,SubqueryClass){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (env,server_property_or_ident,SubqueryClass,config){
if((cljs.core.map_QMARK_(env)) && (cljs.core.contains_QMARK_(env,cljs.core.cst$kw$state))){
} else {
throw (new Error("Assert failed: (and (map? env) (contains? env :state))"));
}

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1),cljs.core.cst$kw$env,env));
});

fulcro.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `prim/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 *   - `parameters` : A map of: (will also accept as named parameters)
 * 
 *  - `without`: See `load`
 *  - `params`: See `load`
 *  - `post-mutation`: See `load`
 *  - `post-mutation-params`: See `load`
 *  - `parallel`: See `load`
 *  - `fallback`: See `load`
 *  - `marker`: See `load`
 *  - `remote`: See `load`
 *  - `refresh`: See `load`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using a link  query (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because we will not have to run a full root query.
 *   
 */
fulcro.client.data_fetch.load_field = (function fulcro$client$data_fetch$load_field(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42974 = arguments.length;
var i__12085__auto___42975 = (0);
while(true){
if((i__12085__auto___42975 < len__12084__auto___42974)){
args__12091__auto__.push((arguments[i__12085__auto___42975]));

var G__42976 = (i__12085__auto___42975 + (1));
i__12085__auto___42975 = G__42976;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var map__42972 = params__$1;
var map__42972__$1 = ((((!((map__42972 == null)))?((((map__42972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42972):map__42972);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$without);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$params);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42972__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$post_DASH_mutation);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42972__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42972__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42972__$1,cljs.core.cst$kw$marker,true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Fallback must be a mutation symbol.","\n","(symbol? fallback)"].join('')));
}
} else {
}

return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11759__auto__ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params__$2,field,post_mutation,without,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),post_mutation_params,fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,cljs.core.cst$kw$ui$fulcro$client$data_DASH_fetch$load_DASH_markers_SLASH_by_DASH_id,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component)], null),refresh));
});

fulcro.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

fulcro.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq42969){
var G__42970 = cljs.core.first(seq42969);
var seq42969__$1 = cljs.core.next(seq42969);
var G__42971 = cljs.core.first(seq42969__$1);
var seq42969__$2 = cljs.core.next(seq42969__$1);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__42970,G__42971,seq42969__$2);
});

/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
 * 
 *   `params` can be a map or named parameters, just like in `load-field`.
 * 
 *   To use this function make sure your mutation specifies a return value with a remote. The remote
 *   should use the helper function `remote-load` as it's value:
 * 
 *   { :remote (df/remote-load env)
 *  ; NOTE: :remote must be the keyword name of a legal remote in your system; however,
 *  ; You must still name the remote in the `load-action` if it is something other than default.
 *  :action (fn []
 *     (load-field-action ...)
 *     ; other optimistic updates/state changes)}
 * 
 *   It is preferable that you use `env` instead of `app-state` for the first argument, as this allows more details to
 *   be available for post mutations and fallbacks.
 *   
 */
fulcro.client.data_fetch.load_field_action = (function fulcro$client$data_fetch$load_field_action(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42984 = arguments.length;
var i__12085__auto___42985 = (0);
while(true){
if((i__12085__auto___42985 < len__12084__auto___42984)){
args__12091__auto__.push((arguments[i__12085__auto___42985]));

var G__42986 = (i__12085__auto___42985 + (1));
i__12085__auto___42985 = G__42986;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((4) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((4)),(0),null)):null);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12092__auto__);
});

fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (env_or_app_state,component_class,ident,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var map__42982 = params__$1;
var map__42982__$1 = ((((!((map__42982 == null)))?((((map__42982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42982):map__42982);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$without);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$params);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42982__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$post_DASH_mutation);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42982__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42982__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42982__$1,cljs.core.cst$kw$marker,true);
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$env,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params__$2,field,(((cljs.core.map_QMARK_(env_or_app_state)) && (cljs.core.contains_QMARK_(env_or_app_state,cljs.core.cst$kw$state)))?env_or_app_state:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,env_or_app_state], null)),post_mutation,without,ident,post_mutation_params,fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]));
});

fulcro.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

fulcro.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq42977){
var G__42978 = cljs.core.first(seq42977);
var seq42977__$1 = cljs.core.next(seq42977);
var G__42979 = cljs.core.first(seq42977__$1);
var seq42977__$2 = cljs.core.next(seq42977__$1);
var G__42980 = cljs.core.first(seq42977__$2);
var seq42977__$3 = cljs.core.next(seq42977__$2);
var G__42981 = cljs.core.first(seq42977__$3);
var seq42977__$4 = cljs.core.next(seq42977__$3);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__42978,G__42979,G__42980,G__42981,seq42977__$4);
});

/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-action` or
 *   `load-field-action` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
fulcro.client.data_fetch.remote_load = (function fulcro$client$data_fetch$remote_load(parsing_env){
var ast = cljs.core.cst$kw$ast.cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$key,cljs.core.cst$sym$fulcro_SLASH_load,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$dispatch_DASH_key,cljs.core.cst$sym$fulcro_SLASH_load], 0));
});
fulcro.client.data_fetch.data_state_QMARK_ = (function fulcro$client$data_fetch$data_state_QMARK_(state){
return fulcro.client.impl.data_fetch.data_state_QMARK_(state);
});
fulcro.client.data_fetch.ready_QMARK_ = (function fulcro$client$data_fetch$ready_QMARK_(state){
return fulcro.client.impl.data_fetch.ready_QMARK_(state);
});
fulcro.client.data_fetch.loading_QMARK_ = (function fulcro$client$data_fetch$loading_QMARK_(state){
return fulcro.client.impl.data_fetch.loading_QMARK_(state);
});
fulcro.client.data_fetch.failed_QMARK_ = (function fulcro$client$data_fetch$failed_QMARK_(state){
return fulcro.client.impl.data_fetch.failed_QMARK_(state);
});
/**
 * Custom rendering for use while data is being lazily loaded using the data fetch methods
 *   load-collection and load-field.
 * 
 *   `data-render` : the render method to call once the data has been successfully loaded from
 *   the server. Can be a factory method or a React rendering function.
 * 
 *   `props` : the React properties for the element to be loaded.
 * 
 *   Optional:
 * 
 *   `ready-render` : the render method to call when the desired data has been marked as ready
 *   to load, but the server request has not yet been sent.
 * 
 *   `loading-render` : render method once the server request has been sent, and UI is waiting
 *   on the response
 * 
 *   `failed-render` : render method when the server returns a failure state for the requested data
 * 
 *   `not-present-render` : called when props is nil (helpful for differentiating between a nil and
 *   empty response from the server).
 * 
 *   Example Usage:
 * 
 *   ```
 *   (defui Thing
 *  static prim/IQuery
 *  (query [this] [{:thing2 (prim/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (prim/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static prim/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (prim/factory Thing2))
 *   ```
 */
fulcro.client.data_fetch.lazily_loaded = (function fulcro$client$data_fetch$lazily_loaded(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42993 = arguments.length;
var i__12085__auto___42994 = (0);
while(true){
if((i__12085__auto___42994 < len__12084__auto___42993)){
args__12091__auto__.push((arguments[i__12085__auto___42994]));

var G__42995 = (i__12085__auto___42994 + (1));
i__12085__auto___42994 = G__42995;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((2) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12092__auto__);
});

fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__42990){
var map__42991 = p__42990;
var map__42991__$1 = ((((!((map__42991 == null)))?((((map__42991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42991):map__42991);
var ready_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42991__$1,cljs.core.cst$kw$ready_DASH_render,((function (map__42991,map__42991__$1){
return (function (_){
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-ready"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Queued"], 0));
});})(map__42991,map__42991__$1))
);
var loading_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42991__$1,cljs.core.cst$kw$loading_DASH_render,((function (map__42991,map__42991__$1,ready_render){
return (function (_){
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-load"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading..."], 0));
});})(map__42991,map__42991__$1,ready_render))
);
var failed_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42991__$1,cljs.core.cst$kw$failed_DASH_render,((function (map__42991,map__42991__$1,ready_render,loading_render){
return (function (_){
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-failed"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading error!"], 0));
});})(map__42991,map__42991__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42991__$1,cljs.core.cst$kw$not_DASH_present_DASH_render);
var state = cljs.core.cst$kw$ui_SLASH_fetch_DASH_state.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(fulcro.client.data_fetch.ready_QMARK_(state))){
return (ready_render.cljs$core$IFn$_invoke$arity$1 ? ready_render.cljs$core$IFn$_invoke$arity$1(props) : ready_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(state))){
return (loading_render.cljs$core$IFn$_invoke$arity$1 ? loading_render.cljs$core$IFn$_invoke$arity$1(props) : loading_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(state))){
return (failed_render.cljs$core$IFn$_invoke$arity$1 ? failed_render.cljs$core$IFn$_invoke$arity$1(props) : failed_render.call(null,props));
} else {
if(cljs.core.truth_((function (){var and__10793__auto__ = not_present_render;
if(cljs.core.truth_(and__10793__auto__)){
return (props == null);
} else {
return and__10793__auto__;
}
})())){
return (not_present_render.cljs$core$IFn$_invoke$arity$1 ? not_present_render.cljs$core$IFn$_invoke$arity$1(props) : not_present_render.call(null,props));
} else {
return (data_render.cljs$core$IFn$_invoke$arity$1 ? data_render.cljs$core$IFn$_invoke$arity$1(props) : data_render.call(null,props));

}
}
}
}
});

fulcro.client.data_fetch.lazily_loaded.cljs$lang$maxFixedArity = (2);

fulcro.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq42987){
var G__42988 = cljs.core.first(seq42987);
var seq42987__$1 = cljs.core.next(seq42987);
var G__42989 = cljs.core.first(seq42987__$1);
var seq42987__$2 = cljs.core.next(seq42987__$1);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__42988,G__42989,seq42987__$2);
});

fulcro.client.data_fetch.refresh_BANG_ = (function fulcro$client$data_fetch$refresh_BANG_(var_args){
var G__42997 = arguments.length;
switch (G__42997) {
case 2:
return fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,load_options){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(component,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),fulcro.client.primitives.react_type(component),load_options);
});

fulcro.client.data_fetch.refresh_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (component){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3(component,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),fulcro.client.primitives.react_type(component));
});

fulcro.client.data_fetch.refresh_BANG_.cljs$lang$maxFixedArity = 2;

fulcro.client.data_fetch.load_STAR_ = (function fulcro$client$data_fetch$load_STAR_(env,p__42999){
var map__43000 = p__42999;
var map__43000__$1 = ((((!((map__43000 == null)))?((((map__43000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43000):map__43000);
var config = map__43000__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43000__$1,cljs.core.cst$kw$post_DASH_mutation);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43000__$1,cljs.core.cst$kw$remote);
if(cljs.core.truth_((function (){var and__10793__auto__ = post_mutation;
if(cljs.core.truth_(and__10793__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__10793__auto__;
}
})())){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-mutation must be a symbol or nil"], 0));
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:cljs.core.cst$kw$remote),true,cljs.core.cst$kw$action,((function (map__43000,map__43000__$1,config,post_mutation,remote){
return (function (){
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$env,env));
});})(map__43000,map__43000__$1,config,post_mutation,remote))
]);
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro_SLASH_load,(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_load,(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_run_DASH_deferred_DASH_transaction,(function (env43002,_,p__43003){
var map__43004 = p__43003;
var map__43004__$1 = ((((!((map__43004 == null)))?((((map__43004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43004):map__43004);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,cljs.core.cst$kw$tx);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,cljs.core.cst$kw$ref);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,cljs.core.cst$kw$reconciler);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env43002;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env,map__43004,map__43004__$1,tx,ref,reconciler){
return (function (){
var reconciler__$1 = cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(reconciler));
var G__43006 = ((function (reconciler__$1,env,map__43004,map__43004__$1,tx,ref,reconciler){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,ref,tx);
});})(reconciler__$1,env,map__43004,map__43004__$1,tx,ref,reconciler))
;
var G__43007 = (1);
return setTimeout(G__43006,G__43007);
});})(env,map__43004,map__43004__$1,tx,ref,reconciler))
], null);
})(),(function (){var env = env43002;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,false], null);
})()], 0));
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_deferred_DASH_transaction,(function (env43008,_,p__43009){
var map__43010 = p__43009;
var map__43010__$1 = ((((!((map__43010 == null)))?((((map__43010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43010):map__43010);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43010__$1,cljs.core.cst$kw$tx);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43010__$1,cljs.core.cst$kw$remote);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43010__$1,cljs.core.cst$kw$ref);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env43008;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env,map__43010,map__43010__$1,tx,remote,ref){
return (function (){
var map__43012 = env;
var map__43012__$1 = ((((!((map__43012 == null)))?((((map__43012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43012):map__43012);
var env__$1 = map__43012__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43012__$1,cljs.core.cst$kw$reconciler);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43012__$1,cljs.core.cst$kw$component);
var reconciler__$1 = (cljs.core.truth_(reconciler)?reconciler:(cljs.core.truth_(component)?fulcro.client.primitives.get_reconciler(component):null
));
if(cljs.core.truth_(reconciler__$1)){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env__$1,cljs.core.cst$kw$fulcro$client$impl$data_DASH_fetch_SLASH_deferred_DASH_transaction,null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_run_DASH_deferred_DASH_transaction,cljs.core.cst$kw$remote,remote,cljs.core.cst$kw$marker,false,cljs.core.cst$kw$post_DASH_mutation_DASH_params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tx,tx,cljs.core.cst$kw$ref,ref,cljs.core.cst$kw$reconciler,cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reconciler,reconciler__$1], null))], null)], null));
} else {
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Cannot defer transaction. Reconciler was not available. Tx = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx)].join('')], 0));
}
});})(env,map__43010,map__43010__$1,tx,remote,ref))
], null);
})(),(function (){var env = env43008;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,fulcro.client.data_fetch.remote_load(env)], null);
})()], 0));
}));
fulcro.client.data_fetch.fallback_action_STAR_ = (function fulcro$client$data_fetch$fallback_action_STAR_(env,p__43014){
var map__43015 = p__43014;
var map__43015__$1 = ((((!((map__43015 == null)))?((((map__43015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43015):map__43015);
var params = map__43015__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43015__$1,cljs.core.cst$kw$action);
var G__43017 = (function (){var G__43018 = env;
var G__43019 = action;
var G__43020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.cst$kw$action,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$execute], 0));
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__43018,G__43019,G__43020) : fulcro.client.mutations.mutate.call(null,G__43018,G__43019,G__43020));
})();
var G__43017__$1 = (((G__43017 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__43017));
if((G__43017__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__43017__$1,cljs.core.PersistentVector.EMPTY);
}
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$tx_SLASH_fallback,(function (p__43021,_,p__43022){
var map__43023 = p__43021;
var map__43023__$1 = ((((!((map__43023 == null)))?((((map__43023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43023):map__43023);
var env = map__43023__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43023__$1,cljs.core.cst$kw$target);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43023__$1,cljs.core.cst$kw$ast);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43023__$1,cljs.core.cst$kw$ref);
var map__43024 = p__43022;
var map__43024__$1 = ((((!((map__43024 == null)))?((((map__43024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43024):map__43024);
var params = map__43024__$1;
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,cljs.core.cst$kw$execute);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,cljs.core.cst$kw$action);
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__43023,map__43023__$1,env,target,ast,ref,map__43024,map__43024__$1,params,execute,action){
return (function (){
return fulcro.client.data_fetch.fallback_action_STAR_(env,params);
});})(map__43023,map__43023__$1,env,target,ast,ref,map__43024,map__43024__$1,params,execute,action))
], null);
} else {
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([target,(cljs.core.truth_(ref)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,cljs.core.cst$kw$params,cljs.core.assoc,cljs.core.cst$kw$fulcro$client$primitives_SLASH_ref,ref):true)]);
} else {
return null;

}
}
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,(function (env,_,params){
var G__43027 = env;
var G__43028 = cljs.core.cst$sym$tx_SLASH_fallback;
var G__43029 = params;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__43027,G__43028,G__43029) : fulcro.client.mutations.mutate.call(null,G__43027,G__43028,G__43029));
}));
/**
 * Mutation: Add a fallback to the current tx. `action` is the symbol of the mutation to run if this tx fails due to
 *   network or server errors (bad status codes).
 */
fulcro.client.data_fetch.fallback = (function fulcro$client$data_fetch$fallback(p__43030){
var map__43031 = p__43030;
var map__43031__$1 = ((((!((map__43031 == null)))?((((map__43031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43031):map__43031);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43031__$1,cljs.core.cst$kw$action);
return null;
});
/**
 * Returns the remote against which the given mutation will try to execute. Returns nil if it is not a remote mutation.
 *   `legal-remotes` is a set of legal remote names. Defaults to `#{:remote}`.
 * 
 *   Returns a set of the remotes that will be triggered for this mutation, which may be empty.
 *   
 */
fulcro.client.data_fetch.get_remotes = (function fulcro$client$data_fetch$get_remotes(var_args){
var G__43035 = arguments.length;
switch (G__43035) {
case 2:
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$2 = (function (state_map,dispatch_symbol){
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3(state_map,dispatch_symbol,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,null], null), null));
});

fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3 = (function (state_map,dispatch_symbol,legal_remotes){
var run_mutation = (function fulcro$client$data_fetch$run_mutation(remote){
var G__43039 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ast,fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11759__auto__ = dispatch_symbol;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
})()))))),cljs.core.cst$kw$parser,cljs.core.constantly(null),cljs.core.cst$kw$target,remote,cljs.core.cst$kw$state,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map)], null);
var G__43040 = dispatch_symbol;
var G__43041 = cljs.core.PersistentArrayMap.EMPTY;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__43039,G__43040,G__43041) : fulcro.client.mutations.mutate.call(null,G__43039,G__43040,G__43041));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (remotes,r){
try{var mutation_map = run_mutation(r);
var ks = cljs.core.set(cljs.core.keys(mutation_map));
var possible_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$refresh,null,cljs.core.cst$kw$value,null,cljs.core.cst$kw$keys,null,cljs.core.cst$kw$action,null], null), null));
var active_now_QMARK_ = ((function (mutation_map,ks,possible_remotes){
return (function (p1__43033_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mutation_map,p1__43033_SHARP_,false);
});})(mutation_map,ks,possible_remotes))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_now_QMARK_,possible_remotes));
}catch (e43042){var e = e43042;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Attempting to get the remotes for mutation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_symbol)," threw an exception. Make sure that mutation is side-effect free!"].join(''),e], 0));

return cljs.core.reduced(((cljs.core.seq(remotes))?remotes:new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,null], null), null)));
}}),cljs.core.PersistentHashSet.EMPTY,legal_remotes);
});

fulcro.client.data_fetch.get_remotes.cljs$lang$maxFixedArity = 3;


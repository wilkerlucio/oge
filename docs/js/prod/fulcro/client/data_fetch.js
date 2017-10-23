// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.data_fetch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('om.next');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.logging');
goog.require('om.dom');
goog.require('fulcro.client.core');
goog.require('om.util');



/**
 * Computes the refresh for the load by ensuring the loaded data is on the Om
 *   list of things to re-render.
 */
fulcro.client.data_fetch.computed_refresh = (function fulcro$client$data_fetch$computed_refresh(explicit_refresh,load_key,target){
var to_refresh = cljs.core.set(explicit_refresh);
var truncated_target = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),target));
var target_ident = ((om.util.ident_QMARK_(truncated_target))?truncated_target:null);
return cljs.core.vec((((om.util.ident_QMARK_(load_key)) || (((load_key instanceof cljs.core.Keyword)) && ((target == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_refresh,load_key):(cljs.core.truth_(target_ident)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_refresh,target_ident):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(truncated_target)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_refresh,cljs.core.first(target)):to_refresh
))));
});
/**
 * Internal function to validate and process the parameters of `load` and `load-action`.
 */
fulcro.client.data_fetch.load_params_STAR_ = (function fulcro$client$data_fetch$load_params_STAR_(server_property_or_ident,SubqueryClass,p__48886){
var map__48887 = p__48886;
var map__48887__$1 = ((((!((map__48887 == null)))?((((map__48887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48887):map__48887);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,cljs.core.cst$kw$target);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48887__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48887__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48887__$1,cljs.core.cst$kw$parallel,false);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,cljs.core.cst$kw$fallback);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48887__$1,cljs.core.cst$kw$marker,true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,cljs.core.cst$kw$post_DASH_mutation);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48887__$1,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48887__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
if(((target == null)) || (cljs.core.vector_QMARK_(target))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
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

if((om.util.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

if((function (){var or__10412__auto__ = (SubqueryClass == null);
if(or__10412__auto__){
return or__10412__auto__;
} else {
if(!((SubqueryClass == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === SubqueryClass.om$next$IQuery$))){
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
throw (new Error("Assert failed: (or (nil? SubqueryClass) (implements? om/IQuery SubqueryClass))"));
}

var query = (cljs.core.truth_((function (){var and__10400__auto__ = SubqueryClass;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__10400__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__11366__auto__ = server_property_or_ident;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = om.next.get_query(SubqueryClass);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),(function (){var x__11366__auto__ = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})())))):(cljs.core.truth_(SubqueryClass)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,om.next.get_query(SubqueryClass)])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__11366__auto__ = server_property_or_ident;
return cljs.core._conj((function (){var x__11366__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto____$1);
})(),x__11366__auto__);
})()], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$target,cljs.core.cst$kw$query],[remote,fulcro.client.data_fetch.computed_refresh(refresh,server_property_or_ident,target),parallel,fallback,marker,post_mutation,without,post_mutation_params,target,query]);
});
/**
 * Generates an Om transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete Om expression (vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
fulcro.client.data_fetch.load_mutation = (function fulcro$client$data_fetch$load_mutation(load_args){
if(((cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_(cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args)))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__10412__auto__ = cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11366__auto__ = load_args;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
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
 *   The server will receive an Om query of the form: [({server-property (om/get-query SubqueryClass)} params)], which
 *   the Om parser will correctly parse as a Join on server-property with the given subquery and params. See Om AST and
 *   instructions on parsing Om queries.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : An Om component instance, Fulcro application, or Om reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `SubqueryClass` : An Om component that implements IQuery. This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  SubqueryClass can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery. If supplied, the data AND load marker will appear
 *  at this path. If not supplied the data and marker will appear at `server-property` in the top-level of the client app state
 *  database. Ignored if you're loading via ident (the ident is your target).
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
var G__48892 = arguments.length;
switch (G__48892) {
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
if((function (){var or__10412__auto__ = om.next.component_QMARK_(app_or_comp_or_reconciler);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = om.next.reconciler_QMARK_(app_or_comp_or_reconciler);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$core$FulcroApplication$))){
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
throw (new Error("Assert failed: (or (om/component? app-or-comp-or-reconciler) (om/reconciler? app-or-comp-or-reconciler) (implements? fc/FulcroApplication app-or-comp-or-reconciler))"));
}

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var component_or_reconciler = ((((!((app_or_comp_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$core$FulcroApplication$)))?true:false):false))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_or_comp_or_reconciler,cljs.core.cst$kw$reconciler):app_or_comp_or_reconciler);
var mutation_args = fulcro.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1);
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component_or_reconciler,fulcro.client.data_fetch.load_mutation(mutation_args));
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
 *   It is preferable that you use `env` instead of `app-state` for the first argument, as this allows more details to
 *   be available for post mutations and fallbacks.
 */
fulcro.client.data_fetch.load_action = (function fulcro$client$data_fetch$load_action(var_args){
var G__48899 = arguments.length;
switch (G__48899) {
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

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$3 = (function (env_or_state_atom,server_property_or_ident,SubqueryClass){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env_or_state_atom,server_property_or_ident,SubqueryClass,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4 = (function (env_or_state_atom,server_property_or_ident,SubqueryClass,config){
var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$marker,true,cljs.core.cst$kw$parallel,false,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$without,cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var env = (((cljs.core.map_QMARK_(env_or_state_atom)) && (cljs.core.contains_QMARK_(env_or_state_atom,cljs.core.cst$kw$state)))?env_or_state_atom:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,env_or_state_atom], null));
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.data_fetch.load_params_STAR_(server_property_or_ident,SubqueryClass,config__$1),cljs.core.cst$kw$env,env));
});

fulcro.client.data_fetch.load_action.cljs$lang$maxFixedArity = 4;

/**
 * Load a field of the current component. Runs `om/transact!`.
 * 
 *   Parameters
 *   - `component`: The component (**instance**, not class). This component MUST have an Ident.
 *   - `field`: A field on the component's query that you wish to load.
 * 
 *   Named Parameters:
 *   - `without`: See `load`
 *   - `params`: See `load`
 *   - `post-mutation`: See `load`
 *   - `post-mutation-params`: See `load`
 *   - `parallel`: See `load`
 *   - `fallback`: See `load`
 *   - `marker`: See `load`
 *   - `remote`: See `load`
 *   - `refresh`: See `load`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using an Om link (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because Om will not have to run a full root query.
 *   
 */
fulcro.client.data_fetch.load_field = (function fulcro$client$data_fetch$load_field(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48907 = arguments.length;
var i__11692__auto___48908 = (0);
while(true){
if((i__11692__auto___48908 < len__11691__auto___48907)){
args__11698__auto__.push((arguments[i__11692__auto___48908]));

var G__48909 = (i__11692__auto___48908 + (1));
i__11692__auto___48908 = G__48909;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,p__48904){
var map__48905 = p__48904;
var map__48905__$1 = ((((!((map__48905 == null)))?((((map__48905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48905):map__48905);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$without);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$params);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48905__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$post_DASH_mutation);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48905__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48905__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48905__$1,cljs.core.cst$kw$marker,true);
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Fallback must be a mutation symbol.","\n","(symbol? fallback)"].join('')));
}
} else {
}

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__11366__auto__ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,field,post_mutation,without,om.next.get_ident(component),post_mutation_params,om.next.focus_query(om.next.get_query(component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.cst$sym$fulcro_SLASH_load),cljs.core.cst$kw$ui_SLASH_loading_DASH_data,om.next.get_ident(component)], null),refresh));
});

fulcro.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

fulcro.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq48901){
var G__48902 = cljs.core.first(seq48901);
var seq48901__$1 = cljs.core.next(seq48901);
var G__48903 = cljs.core.first(seq48901__$1);
var seq48901__$2 = cljs.core.next(seq48901__$1);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(G__48902,G__48903,seq48901__$2);
});

/**
 * Queue up a remote load of a component's field from within an already-running mutation. Similar to `load-field`
 *   but usable from within a mutation. Note the `:refresh` parameter is supported, and defaults to nothing, even for
 *   fields, in actions. If you want anything to refresh other than the targeted component you will want to use the
 *   :refresh parameter.
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
 */
fulcro.client.data_fetch.load_field_action = (function fulcro$client$data_fetch$load_field_action(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48918 = arguments.length;
var i__11692__auto___48919 = (0);
while(true){
if((i__11692__auto___48919 < len__11691__auto___48918)){
args__11698__auto__.push((arguments[i__11692__auto___48919]));

var G__48920 = (i__11692__auto___48919 + (1));
i__11692__auto___48919 = G__48920;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((4) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((4)),(0),null)):null);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11699__auto__);
});

fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (env_or_app_state,component_class,ident,field,p__48915){
var map__48916 = p__48915;
var map__48916__$1 = ((((!((map__48916 == null)))?((((map__48916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48916):map__48916);
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$without);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48916__$1,cljs.core.cst$kw$remote,cljs.core.cst$kw$remote);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$params);
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$post_DASH_mutation);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$post_DASH_mutation_DASH_params);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$fallback);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48916__$1,cljs.core.cst$kw$parallel);
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48916__$1,cljs.core.cst$kw$refresh,cljs.core.PersistentVector.EMPTY);
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48916__$1,cljs.core.cst$kw$marker,true);
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remote,cljs.core.cst$kw$refresh,cljs.core.cst$kw$parallel,cljs.core.cst$kw$fallback,cljs.core.cst$kw$marker,cljs.core.cst$kw$params,cljs.core.cst$kw$field,cljs.core.cst$kw$env,cljs.core.cst$kw$post_DASH_mutation,cljs.core.cst$kw$without,cljs.core.cst$kw$ident,cljs.core.cst$kw$post_DASH_mutation_DASH_params,cljs.core.cst$kw$query],[remote,refresh,parallel,fallback,marker,params,field,(((cljs.core.map_QMARK_(env_or_app_state)) && (cljs.core.contains_QMARK_(env_or_app_state,cljs.core.cst$kw$state)))?env_or_app_state:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$state,env_or_app_state], null)),post_mutation,without,ident,post_mutation_params,om.next.focus_query(om.next.get_query(component_class),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null))]));
});

fulcro.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

fulcro.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq48910){
var G__48911 = cljs.core.first(seq48910);
var seq48910__$1 = cljs.core.next(seq48910);
var G__48912 = cljs.core.first(seq48910__$1);
var seq48910__$2 = cljs.core.next(seq48910__$1);
var G__48913 = cljs.core.first(seq48910__$2);
var seq48910__$3 = cljs.core.next(seq48910__$2);
var G__48914 = cljs.core.first(seq48910__$3);
var seq48910__$4 = cljs.core.next(seq48910__$3);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic(G__48911,G__48912,G__48913,G__48914,seq48910__$4);
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
 *   the server. Can be an Om factory method or a React rendering function.
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
 *  static om/IQuery
 *  (query [this] [{:thing2 (om/get-query Thing2)}])
 *  Object
 *  (componentDidMount [this]
 *     (load-field this :thing2))
 * 
 *  (render [this]
 *    (let [thing2 (:thing2 (om/props this))]
 *      (lazily-loaded ui-thing2 thing2))))
 * 
 *   (defui Thing2
 *  static om/IQuery
 *  (query [this] [:ui/fetch-state])
 *  Object
 *  (render [this]
 *    (display-thing-2))
 * 
 *   (def ui-thing2 (om/factory Thing2))
 *   ```
 */
fulcro.client.data_fetch.lazily_loaded = (function fulcro$client$data_fetch$lazily_loaded(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48927 = arguments.length;
var i__11692__auto___48928 = (0);
while(true){
if((i__11692__auto___48928 < len__11691__auto___48927)){
args__11698__auto__.push((arguments[i__11692__auto___48928]));

var G__48929 = (i__11692__auto___48928 + (1));
i__11692__auto___48928 = G__48929;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__48924){
var map__48925 = p__48924;
var map__48925__$1 = ((((!((map__48925 == null)))?((((map__48925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48925):map__48925);
var ready_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48925__$1,cljs.core.cst$kw$ready_DASH_render,((function (map__48925,map__48925__$1){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-ready"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Queued"], 0));
});})(map__48925,map__48925__$1))
);
var loading_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48925__$1,cljs.core.cst$kw$loading_DASH_render,((function (map__48925,map__48925__$1,ready_render){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-load"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading..."], 0));
});})(map__48925,map__48925__$1,ready_render))
);
var failed_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48925__$1,cljs.core.cst$kw$failed_DASH_render,((function (map__48925,map__48925__$1,ready_render,loading_render){
return (function (_){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["className","lazy-loading-failed"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading error!"], 0));
});})(map__48925,map__48925__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48925__$1,cljs.core.cst$kw$not_DASH_present_DASH_render);
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
if(cljs.core.truth_((function (){var and__10400__auto__ = not_present_render;
if(cljs.core.truth_(and__10400__auto__)){
return (props == null);
} else {
return and__10400__auto__;
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

fulcro.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq48921){
var G__48922 = cljs.core.first(seq48921);
var seq48921__$1 = cljs.core.next(seq48921);
var G__48923 = cljs.core.first(seq48921__$1);
var seq48921__$2 = cljs.core.next(seq48921__$1);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic(G__48922,G__48923,seq48921__$2);
});

fulcro.client.data_fetch.refresh_BANG_ = (function fulcro$client$data_fetch$refresh_BANG_(component){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3(component,om.next.get_ident(component),om.next.react_type(component));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro_SLASH_load,(function (env,_,p__48930){
var map__48931 = p__48930;
var map__48931__$1 = ((((!((map__48931 == null)))?((((map__48931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48931):map__48931);
var config = map__48931__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$post_DASH_mutation);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48931__$1,cljs.core.cst$kw$remote);
if(cljs.core.truth_((function (){var and__10400__auto__ = post_mutation;
if(cljs.core.truth_(and__10400__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__10400__auto__;
}
})())){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-mutation must be a symbol or nil"], 0));
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:cljs.core.cst$kw$remote),true,cljs.core.cst$kw$action,((function (map__48931,map__48931__$1,config,post_mutation,remote){
return (function (){
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$env,env));
});})(map__48931,map__48931__$1,config,post_mutation,remote))
]);
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_load,(function (env,_,p__48933){
var map__48934 = p__48933;
var map__48934__$1 = ((((!((map__48934 == null)))?((((map__48934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48934):map__48934);
var config = map__48934__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48934__$1,cljs.core.cst$kw$post_DASH_mutation);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48934__$1,cljs.core.cst$kw$remote);
if(cljs.core.truth_((function (){var and__10400__auto__ = post_mutation;
if(cljs.core.truth_(and__10400__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__10400__auto__;
}
})())){
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-mutation must be a symbol or nil"], 0));
} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:cljs.core.cst$kw$remote),true,cljs.core.cst$kw$action,((function (map__48934,map__48934__$1,config,post_mutation,remote){
return (function (){
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$env,env));
});})(map__48934,map__48934__$1,config,post_mutation,remote))
]);
}));
fulcro.client.data_fetch.fallback_action_STAR_ = (function fulcro$client$data_fetch$fallback_action_STAR_(env,p__48936){
var map__48937 = p__48936;
var map__48937__$1 = ((((!((map__48937 == null)))?((((map__48937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48937):map__48937);
var params = map__48937__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,cljs.core.cst$kw$action);
var G__48939 = (function (){var G__48940 = env;
var G__48941 = action;
var G__48942 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.cst$kw$action,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$execute], 0));
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__48940,G__48941,G__48942) : fulcro.client.mutations.mutate.call(null,G__48940,G__48941,G__48942));
})();
var G__48939__$1 = (((G__48939 == null))?null:cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(G__48939));
if((G__48939__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__48939__$1,cljs.core.PersistentVector.EMPTY);
}
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$tx_SLASH_fallback,(function (env,_,p__48943){
var map__48944 = p__48943;
var map__48944__$1 = ((((!((map__48944 == null)))?((((map__48944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48944):map__48944);
var params = map__48944__$1;
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48944__$1,cljs.core.cst$kw$execute);
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__48944,map__48944__$1,params,execute){
return (function (){
return fulcro.client.data_fetch.fallback_action_STAR_(env,params);
});})(map__48944,map__48944__$1,params,execute))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,true], null);
}
}));
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$fulcro$client$data_DASH_fetch_SLASH_fallback,(function (env48946,_,p__48947){
var map__48948 = p__48947;
var map__48948__$1 = ((((!((map__48948 == null)))?((((map__48948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48948):map__48948);
var params = map__48948__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48948__$1,cljs.core.cst$kw$action);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env48946;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (env,map__48948,map__48948__$1,params,action){
return (function (){
if(cljs.core.truth_(cljs.core.cst$kw$execute.cljs$core$IFn$_invoke$arity$1(params))){
return fulcro.client.data_fetch.fallback_action_STAR_(env,params);
} else {
return null;
}
});})(env,map__48948,map__48948__$1,params,action))
], null);
})(),(function (){var env = env48946;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,cljs.core.not(cljs.core.cst$kw$execute.cljs$core$IFn$_invoke$arity$1(params))], null);
})()], 0));
}));

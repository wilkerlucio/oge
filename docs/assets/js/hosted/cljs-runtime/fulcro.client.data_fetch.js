goog.provide('fulcro.client.data_fetch');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.data_fetch');
goog.require('fulcro.client.impl.data_targeting');
goog.require('fulcro.client.mutations');
goog.require('fulcro.logging');
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
var args__4502__auto__ = [];
var len__4499__auto___47021 = arguments.length;
var i__4500__auto___47022 = (0);
while(true){
if((i__4500__auto___47022 < len__4499__auto___47021)){
args__4502__auto__.push((arguments[i__4500__auto___47022]));

var G__47023 = (i__4500__auto___47022 + (1));
i__4500__auto___47022 = G__47023;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.data_fetch.multiple_targets.cljs$core$IFn$_invoke$arity$variadic = (function (targets){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.data_targeting.multiple_targets,targets);
});

fulcro.client.data_fetch.multiple_targets.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.data_fetch.multiple_targets.cljs$lang$applyTo = (function (seq47020){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47020));
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
var result__$1 = (((((target == null)) || (fulcro.util.ident_QMARK_(load_key))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,load_key):result);
var add_target = ((function (result,result__$1){
return (function (r,t){
if(((cljs.core.vector_QMARK_(t)) && ((cljs.core.count(t) >= (2))))){
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
fulcro.client.data_fetch.load_params_STAR_ = (function fulcro$client$data_fetch$load_params_STAR_(state_map,server_property_or_ident,class_or_factory,p__47028){
var map__47029 = p__47028;
var map__47029__$1 = ((((!((map__47029 == null)))?(((((map__47029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47029):map__47029);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"target","target",253001721));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY);
var initialize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47029__$1,new cljs.core.Keyword(null,"initialize","initialize",609952913),false);
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
if((((target == null)) || (cljs.core.vector_QMARK_(target)))){
} else {
throw (new Error("Assert failed: (or (nil? target) (vector? target))"));
}

if(cljs.core.truth_((function (){var or__3922__auto__ = (marker == null);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = fulcro.client.data_fetch.bool_QMARK_(marker);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return (marker instanceof cljs.core.Keyword);
}
}
})())){
} else {
throw (new Error("Assert failed: (or (nil? marker) (bool? marker) (keyword? marker))"));
}

if((((post_mutation == null)) || ((post_mutation instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation) (symbol? post-mutation))"));
}

if((((fallback == null)) || ((fallback instanceof cljs.core.Symbol)))){
} else {
throw (new Error("Assert failed: (or (nil? fallback) (symbol? fallback))"));
}

if((((post_mutation_params == null)) || (cljs.core.map_QMARK_(post_mutation_params)))){
} else {
throw (new Error("Assert failed: (or (nil? post-mutation-params) (map? post-mutation-params))"));
}

if(cljs.core.vector_QMARK_(refresh)){
} else {
throw (new Error("Assert failed: (vector? refresh)"));
}

if((((params == null)) || (cljs.core.map_QMARK_(params)))){
} else {
throw (new Error("Assert failed: (or (nil? params) (map? params))"));
}

if(cljs.core.set_QMARK_(without)){
} else {
throw (new Error("Assert failed: (set? without)"));
}

if((((focus == null)) || (cljs.core.vector_QMARK_(focus)))){
} else {
throw (new Error("Assert failed: (or (nil? focus) (vector? focus))"));
}

if(((fulcro.util.ident_QMARK_(server_property_or_ident)) || ((server_property_or_ident instanceof cljs.core.Keyword)))){
} else {
throw (new Error("Assert failed: (or (util/ident? server-property-or-ident) (keyword? server-property-or-ident))"));
}

var query_SINGLEQUOTE_ = (cljs.core.truth_(class_or_factory)?(function (){var G__47032 = fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(class_or_factory,state_map);
if(cljs.core.truth_(focus)){
return fulcro.client.primitives.focus_subquery(G__47032,focus);
} else {
return G__47032;
}
})():null);
var query = (cljs.core.truth_((function (){var and__3911__auto__ = class_or_factory;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.map_QMARK_(params);
} else {
return and__3911__auto__;
}
})())?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,server_property_or_ident,null,(1),null)),(new cljs.core.List(null,query_SINGLEQUOTE_,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,params,null,(1),null))))),null,(1),null)))))):(cljs.core.truth_(class_or_factory)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,query_SINGLEQUOTE_])], null):((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,server_property_or_ident,(new cljs.core.List(null,params,null,(1),null)),(2),null))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_property_or_ident], null)
)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,fulcro.client.data_fetch.computed_refresh(refresh,server_property_or_ident,target),parallel,fallback,marker,post_mutation,without,(cljs.core.truth_((function (){var and__3911__auto__ = initialize;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = class_or_factory;
if(cljs.core.truth_(and__3911__auto____$1)){
return server_property_or_ident;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?(function (){var class$ = (function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(class_or_factory));
if(cljs.core.truth_(temp__5455__auto__)){
var c = temp__5455__auto__;
return c;
} else {
return class_or_factory;
}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([server_property_or_ident,((cljs.core.map_QMARK_(initialize))?initialize:(cljs.core.truth_((function (){var and__3911__auto__ = initialize;
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.client.primitives.has_initial_app_state_QMARK_(class$);
} else {
return and__3911__auto__;
}
})())?fulcro.client.primitives.get_initial_state(class$,cljs.core.PersistentArrayMap.EMPTY):cljs.core.PersistentArrayMap.EMPTY
))]);
})():null),post_mutation_params,focus,target,query,abort_id]);
});
/**
 * Generates a transaction expression for a load mutation. It includes a follow-on read for :ui/loading-data. The args
 *   must be a map of the parameters usable from `load`. Returns a complete tx (as a vector), not just the mutation
 *   since follow-on reads are part of the mutation. You may use `concat` to join this with additional expressions.
 */
fulcro.client.data_fetch.load_mutation = (function fulcro$client$data_fetch$load_mutation(load_args){
if((((new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args) == null)) || (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args))))){
} else {
throw (new Error("Assert failed: (or (nil? (:refresh load-args)) (vector? (:refresh load-args)))"));
}

var refresh = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(load_args);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,load_args,null,(1),null)),(2),null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143)], null),refresh);
});
/**
 * Load data from the server.
 * 
 *   This function triggers a server interaction and normalizes the server response into your app state database. During
 *   operation it also adds (by default) fetch markers into the app state so you can show busy indicators on the UI
 *   components that are waiting for data. The `:target` parameter can be used to place the data somewhere besides app
 *   state root (which is the default).
 * 
 *   The server will receive a query of the form: [({server-property (prim/get-query class-or-factory)} params)], which
 *   a Fulcro parser will correctly parse as a join on server-property with the given subquery and params. See the AST and
 *   instructions on parsing queries in the developer's guide.
 * 
 *   Parameters:
 *   - `app-or-comp-or-reconciler` : A component instance, Fulcro application, or reconciler
 *   - `server-property-or-ident` : A keyword or ident that represents the root of the query to send to the server. If this is an ident
 *   you are loading a specific entity from the database into a local app db table. A custom target will be ignored.
 *   - `class-or-factory` : A component that implements IQuery, or a factory for it (if using dynamic queries). This will be combined with `server-property` into a join for the server query. Needed to normalize results.
 *  class-or-factory can be nil, in which case the resulting server query will not be a join.
 *   - `config` : A map of load configuration parameters.
 * 
 *   Config (all optional):
 *   - `target` - An assoc-in path at which to put the result of the Subquery (as an edge (normalized) or value (not normalized)).
 *  Can also be special targets (multiple-targets, append-to,
 *  prepend-to, or replace-at). If you are loading by keyword (into root), then this relocates the result (ident or value) after load.
 *  When loading an entity (by ident), then this option will place additional idents at the target path(s) that point to that entity.
 *   - `initialize` - Optional. If `true`, uses `get-initial-state` on class-or-factory to  get a basis for merge of the result. This allows you
 *  to use initial state to pre-populate loads with things like UI concerns. If `:initialize` is passed a map, then it uses that as
 *  the base target merge value for class-or-factory instead.
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
 *   - `focus` - An optional subquery to focus on some parts of the original query.
 *   - `without` - An optional set of keywords that should (recursively) be removed from the query.
 *   - `abort-id` - An ID (typically a keyword) that you can use to cancel the load via `fulcro.client/abort`.
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
var G__47096 = arguments.length;
switch (G__47096) {
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

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$3 = (function (app_or_comp_or_reconciler,server_property_or_ident,class_or_factory){
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(app_or_comp_or_reconciler,server_property_or_ident,class_or_factory,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4 = (function (app_or_comp_or_reconciler,server_property_or_ident,class_or_factory,config){
if((function (){var or__3922__auto__ = fulcro.client.primitives.component_QMARK_(app_or_comp_or_reconciler);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = fulcro.client.primitives.reconciler_QMARK_(app_or_comp_or_reconciler);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
if(!((app_or_comp_or_reconciler == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$)))){
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

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var component_or_reconciler = ((((!((app_or_comp_or_reconciler == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_comp_or_reconciler.fulcro$client$FulcroApplication$))))?true:false):false))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_or_comp_or_reconciler,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966)):app_or_comp_or_reconciler);
var reconciler = ((fulcro.client.primitives.reconciler_QMARK_(component_or_reconciler))?component_or_reconciler:fulcro.client.primitives.get_reconciler(component_or_reconciler));
var state = fulcro.client.primitives.app_state(reconciler);
var mutation_args = fulcro.client.data_fetch.load_params_STAR_(cljs.core.deref(state),server_property_or_ident,class_or_factory,config__$1);
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
var G__47127 = arguments.length;
switch (G__47127) {
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
if(((cljs.core.map_QMARK_(env)) && (cljs.core.contains_QMARK_(env,new cljs.core.Keyword(null,"state","state",-1988618099))))){
} else {
throw (new Error("Assert failed: (and (map? env) (contains? env :state))"));
}

var config__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"marker","marker",865118313),true,new cljs.core.Keyword(null,"parallel","parallel",-1863607128),false,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"without","without",1107036688),cljs.core.PersistentHashSet.EMPTY], null),config], 0));
var state_map = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(env));
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.data_fetch.load_params_STAR_(state_map,server_property_or_ident,SubqueryClass,config__$1),new cljs.core.Keyword(null,"env","env",-1815813235),env));
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
 *  - `abort-id`: See `load`
 * 
 *   NOTE: The :ui/loading-data attribute is always included in refresh. This means you probably don't want to
 *   query for that attribute near the root of your UI. Instead, create some leaf component with an ident that queries for :ui/loading-data
 *   using a link  query (e.g. `[:ui/loading-data '_]`). The presence of the ident on components will enable query optimization, which can
 *   improve your frame rate because we will not have to run a full root query.
 * 
 *   WARNING: If you're using dynamic queries, you won't really know what factory your parent is using,
 *   nor can you pass it as a parameter to this function. Therefore, it is not recommended to use load-field from within
 *   a component that has a dynamic query unless you can base it on the original static query (which
 *   is what this function will use).
 *   
 */
fulcro.client.data_fetch.load_field = (function fulcro$client$data_fetch$load_field(var_args){
var args__4502__auto__ = [];
var len__4499__auto___47153 = arguments.length;
var i__4500__auto___47154 = (0);
while(true){
if((i__4500__auto___47154 < len__4499__auto___47153)){
args__4502__auto__.push((arguments[i__4500__auto___47154]));

var G__47155 = (i__4500__auto___47154 + (1));
i__4500__auto___47154 = G__47155;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic = (function (component,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var map__47147 = params__$1;
var map__47147__$1 = ((((!((map__47147 == null)))?(((((map__47147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47147):map__47147);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47147__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47147__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47147__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47147__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var state_map = (function (){var G__47150 = component;
var G__47150__$1 = (((G__47150 == null))?null:fulcro.client.primitives.get_reconciler(G__47150));
var G__47150__$2 = (((G__47150__$1 == null))?null:fulcro.client.primitives.app_state(G__47150__$1));
if((G__47150__$2 == null)){
return null;
} else {
return cljs.core.deref(G__47150__$2);
}
})();
if(cljs.core.truth_(fallback)){
if((fallback instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Fallback must be a mutation symbol.","\n","(symbol? fallback)"].join('')));
}
} else {
}

return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(new cljs.core.List(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,refresh,parallel,fallback,marker,params__$2,field,post_mutation,without,fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component),post_mutation_params,fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component,state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null)),abort_id]),null,(1),null)),(2),null)),new cljs.core.Keyword("ui","loading-data","ui/loading-data",-1566515143),new cljs.core.Keyword("ui.fulcro.client.data-fetch.load-markers","by-id","ui.fulcro.client.data-fetch.load-markers/by-id",763321486),fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(component)], null),refresh));
});

fulcro.client.data_fetch.load_field.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fulcro.client.data_fetch.load_field.cljs$lang$applyTo = (function (seq47141){
var G__47142 = cljs.core.first(seq47141);
var seq47141__$1 = cljs.core.next(seq47141);
var G__47143 = cljs.core.first(seq47141__$1);
var seq47141__$2 = cljs.core.next(seq47141__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47142,G__47143,seq47141__$2);
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
var args__4502__auto__ = [];
var len__4499__auto___47224 = arguments.length;
var i__4500__auto___47226 = (0);
while(true){
if((i__4500__auto___47226 < len__4499__auto___47224)){
args__4502__auto__.push((arguments[i__4500__auto___47226]));

var G__47227 = (i__4500__auto___47226 + (1));
i__4500__auto___47226 = G__47227;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((4) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((4)),(0),null)):null);
return fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4503__auto__);
});

fulcro.client.data_fetch.load_field_action.cljs$core$IFn$_invoke$arity$variadic = (function (env_or_app_state,component_class,ident,field,params){
var params__$1 = ((cljs.core.map_QMARK_(cljs.core.first(params)))?cljs.core.first(params):params);
var map__47214 = params__$1;
var map__47214__$1 = ((((!((map__47214 == null)))?(((((map__47214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47214):map__47214);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"abort-id","abort-id",1559937819));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47214__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"remote","remote",-1593576576));
var refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47214__$1,new cljs.core.Keyword(null,"refresh","refresh",1947415525),cljs.core.PersistentVector.EMPTY);
var parallel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47214__$1,new cljs.core.Keyword(null,"marker","marker",865118313),true);
var params__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"params","params",710516235));
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var without = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"without","without",1107036688));
var post_mutation_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47214__$1,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897));
var env = ((((cljs.core.map_QMARK_(env_or_app_state)) && (cljs.core.contains_QMARK_(env_or_app_state,new cljs.core.Keyword(null,"state","state",-1988618099)))))?env_or_app_state:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),env_or_app_state], null));
var state_map = (function (){var G__47219 = env;
var G__47219__$1 = (((G__47219 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__47219));
if((G__47219__$1 == null)){
return null;
} else {
return cljs.core.deref(G__47219__$1);
}
})();
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"fallback","fallback",761637929),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Keyword(null,"without","without",1107036688),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"abort-id","abort-id",1559937819)],[remote,refresh,parallel,fallback,marker,params__$2,field,env,post_mutation,without,ident,post_mutation_params,fulcro.client.primitives.focus_query(fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$2(component_class,state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null)),abort_id]));
});

fulcro.client.data_fetch.load_field_action.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
fulcro.client.data_fetch.load_field_action.cljs$lang$applyTo = (function (seq47205){
var G__47206 = cljs.core.first(seq47205);
var seq47205__$1 = cljs.core.next(seq47205);
var G__47207 = cljs.core.first(seq47205__$1);
var seq47205__$2 = cljs.core.next(seq47205__$1);
var G__47208 = cljs.core.first(seq47205__$2);
var seq47205__$3 = cljs.core.next(seq47205__$2);
var G__47209 = cljs.core.first(seq47205__$3);
var seq47205__$4 = cljs.core.next(seq47205__$3);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47206,G__47207,G__47208,G__47209,seq47205__$4);
});

/**
 * Returns the correct value for the `:remote` side of a mutation that should act as a
 *   trigger for remote loads. Must be used in conjunction with running `load-action` or
 *   `load-field-action` in the `:action` side of the mutation (which queues the exact things to
 *   load).
 */
fulcro.client.data_fetch.remote_load = (function fulcro$client$data_fetch$remote_load(parsing_env){
var ast = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(parsing_env);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null)], 0));
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
var args__4502__auto__ = [];
var len__4499__auto___47266 = arguments.length;
var i__4500__auto___47267 = (0);
while(true){
if((i__4500__auto___47267 < len__4499__auto___47266)){
args__4502__auto__.push((arguments[i__4500__auto___47267]));

var G__47268 = (i__4500__auto___47267 + (1));
i__4500__auto___47267 = G__47268;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fulcro.client.data_fetch.lazily_loaded.cljs$core$IFn$_invoke$arity$variadic = (function (data_render,props,p__47259){
var map__47260 = p__47259;
var map__47260__$1 = ((((!((map__47260 == null)))?(((((map__47260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47260):map__47260);
var ready_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47260__$1,new cljs.core.Keyword(null,"ready-render","ready-render",-1421004936),((function (map__47260,map__47260__$1){
return (function (_){
return "Queued";
});})(map__47260,map__47260__$1))
);
var loading_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47260__$1,new cljs.core.Keyword(null,"loading-render","loading-render",-1821208169),((function (map__47260,map__47260__$1,ready_render){
return (function (_){
return "Loading...";
});})(map__47260,map__47260__$1,ready_render))
);
var failed_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47260__$1,new cljs.core.Keyword(null,"failed-render","failed-render",-433071277),((function (map__47260,map__47260__$1,ready_render,loading_render){
return (function (_){
return "Loading error!";
});})(map__47260,map__47260__$1,ready_render,loading_render))
);
var not_present_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47260__$1,new cljs.core.Keyword(null,"not-present-render","not-present-render",-946766938));
var state = new cljs.core.Keyword("ui","fetch-state","ui/fetch-state",1030289927).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(fulcro.client.data_fetch.ready_QMARK_(state))){
return (ready_render.cljs$core$IFn$_invoke$arity$1 ? ready_render.cljs$core$IFn$_invoke$arity$1(props) : ready_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(state))){
return (loading_render.cljs$core$IFn$_invoke$arity$1 ? loading_render.cljs$core$IFn$_invoke$arity$1(props) : loading_render.call(null,props));
} else {
if(cljs.core.truth_(fulcro.client.data_fetch.failed_QMARK_(state))){
return (failed_render.cljs$core$IFn$_invoke$arity$1 ? failed_render.cljs$core$IFn$_invoke$arity$1(props) : failed_render.call(null,props));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = not_present_render;
if(cljs.core.truth_(and__3911__auto__)){
return (props == null);
} else {
return and__3911__auto__;
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

/** @this {Function} */
fulcro.client.data_fetch.lazily_loaded.cljs$lang$applyTo = (function (seq47251){
var G__47252 = cljs.core.first(seq47251);
var seq47251__$1 = cljs.core.next(seq47251);
var G__47253 = cljs.core.first(seq47251__$1);
var seq47251__$2 = cljs.core.next(seq47251__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47252,G__47253,seq47251__$2);
});

fulcro.client.data_fetch.refresh_BANG_ = (function fulcro$client$data_fetch$refresh_BANG_(var_args){
var G__47276 = arguments.length;
switch (G__47276) {
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

fulcro.client.data_fetch.load_STAR_ = (function fulcro$client$data_fetch$load_STAR_(env,p__47280){
var map__47281 = p__47280;
var map__47281__$1 = ((((!((map__47281 == null)))?(((((map__47281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47281):map__47281);
var config = map__47281__$1;
var post_mutation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47281__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
if(cljs.core.truth_((function (){var and__3911__auto__ = post_mutation;
if(cljs.core.truth_(and__3911__auto__)){
return !((post_mutation instanceof cljs.core.Symbol));
} else {
return and__3911__auto__;
}
})())){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),386], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["post-mutation must be a symbol or nil"], 0));
}catch (e47283){if((e47283 instanceof Error)){
var e__33343__auto___47287 = e47283;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),386], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___47287], 0));
} else {
throw e47283;

}
}} else {
}

return cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(remote)?remote:new cljs.core.Keyword(null,"remote","remote",-1593576576)),true,new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47281,map__47281__$1,config,post_mutation,remote){
return (function (){
return fulcro.client.impl.data_fetch.mark_ready(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"env","env",-1815813235),env));
});})(map__47281,map__47281__$1,config,post_mutation,remote))
]);
});
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro","load","fulcro/load",-1361504416,null),(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.data-fetch","load","fulcro.client.data-fetch/load",-1506599212,null),(function (env,_,params){
return fulcro.client.data_fetch.load_STAR_(env,params);
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.data-fetch","run-deferred-transaction","fulcro.client.data-fetch/run-deferred-transaction",934105139,null),(function (env47298,_,p__47300){
var map__47303 = p__47300;
var map__47303__$1 = ((((!((map__47303 == null)))?(((((map__47303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47303):map__47303);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env47298;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__47303,map__47303__$1,tx,ref,reconciler){
return (function (){
var reconciler__$1 = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(reconciler));
return setTimeout(((function (reconciler__$1,env,map__47303,map__47303__$1,tx,ref,reconciler){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler__$1,ref,tx);
});})(reconciler__$1,env,map__47303,map__47303__$1,tx,ref,reconciler))
,(1));
});})(env,map__47303,map__47303__$1,tx,ref,reconciler))
], null);
})(),(function (){var env = env47298;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.data-fetch","deferred-transaction","fulcro.client.data-fetch/deferred-transaction",574929731,null),(function (env47308,_,p__47309){
var map__47311 = p__47309;
var map__47311__$1 = ((((!((map__47311 == null)))?(((((map__47311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47311):map__47311);
var tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47311__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47311__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47311__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env47308;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__47311,map__47311__$1,tx,remote,ref){
return (function (){
var map__47324 = env;
var map__47324__$1 = ((((!((map__47324 == null)))?(((((map__47324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47324):map__47324);
var env__$1 = map__47324__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47324__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47324__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var reconciler__$1 = (cljs.core.truth_(reconciler)?reconciler:(cljs.core.truth_(component)?fulcro.client.primitives.get_reconciler(component):null
));
if(cljs.core.truth_(reconciler__$1)){
return fulcro.client.data_fetch.load_action.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("fulcro.client.impl.data-fetch","deferred-transaction","fulcro.client.impl.data-fetch/deferred-transaction",1662063962),null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"post-mutation","post-mutation",-1076606705),new cljs.core.Symbol("fulcro.client.data-fetch","run-deferred-transaction","fulcro.client.data-fetch/run-deferred-transaction",934105139,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),remote,new cljs.core.Keyword(null,"marker","marker",865118313),false,new cljs.core.Keyword(null,"post-mutation-params","post-mutation-params",-849425897),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__$1], null))], null)], null));
} else {
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),413], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot defer transaction. Reconciler was not available. Tx = ",tx], 0));
}catch (e47326){if((e47326 instanceof Error)){
var e__33343__auto__ = e47326;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),413], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e47326;

}
}}
});})(env,map__47311,map__47311__$1,tx,remote,ref))
], null);
})(),(function (){var env = env47308;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),fulcro.client.data_fetch.remote_load(env)], null);
})()], 0));
}));
fulcro.client.data_fetch.fallback_action_STAR_ = (function fulcro$client$data_fetch$fallback_action_STAR_(env,p__47349){
var map__47350 = p__47349;
var map__47350__$1 = ((((!((map__47350 == null)))?(((((map__47350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47350):map__47350);
var params = map__47350__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47350__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var G__47352 = (function (){var G__47353 = env;
var G__47354 = action;
var G__47355 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"execute","execute",-129499188)], 0));
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__47353,G__47354,G__47355) : fulcro.client.mutations.mutate.call(null,G__47353,G__47354,G__47355));
})();
var G__47352__$1 = (((G__47352 == null))?null:new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(G__47352));
if((G__47352__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__47352__$1,cljs.core.PersistentVector.EMPTY);
}
});
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null),(function (p__47366,_,p__47367){
var map__47370 = p__47366;
var map__47370__$1 = ((((!((map__47370 == null)))?(((((map__47370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47370):map__47370);
var env = map__47370__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"target","target",253001721));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47370__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__47371 = p__47367;
var map__47371__$1 = ((((!((map__47371 == null)))?(((((map__47371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47371):map__47371);
var params = map__47371__$1;
var execute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"execute","execute",-129499188));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47371__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(execute)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__47370,map__47370__$1,env,target,ast,ref,map__47371,map__47371__$1,params,execute,action){
return (function (){
return fulcro.client.data_fetch.fallback_action_STAR_(env,params);
});})(map__47370,map__47370__$1,env,target,ast,ref,map__47371,map__47371__$1,params,execute,action))
], null);
} else {
if(cljs.core.truth_(target)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([target,(cljs.core.truth_(ref)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(ast,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword("fulcro.client.primitives","ref","fulcro.client.primitives/ref",-1451073405),ref):true)]);
} else {
return null;

}
}
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.client.data-fetch","fallback","fulcro.client.data-fetch/fallback",1556791555,null),(function (env,_,params){
var G__47378 = env;
var G__47379 = new cljs.core.Symbol("tx","fallback","tx/fallback",-1892802308,null);
var G__47380 = params;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__47378,G__47379,G__47380) : fulcro.client.mutations.mutate.call(null,G__47378,G__47379,G__47380));
}));
/**
 * Mutation: Add a fallback to the current tx. `action` is the symbol of the mutation to run if this tx fails due to
 *   network or server errors (bad status codes).
 */
fulcro.client.data_fetch.fallback = (function fulcro$client$data_fetch$fallback(p__47393){
var map__47394 = p__47393;
var map__47394__$1 = ((((!((map__47394 == null)))?(((((map__47394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47394):map__47394);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47394__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__47423 = arguments.length;
switch (G__47423) {
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
return fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3(state_map,dispatch_symbol,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null));
});

fulcro.client.data_fetch.get_remotes.cljs$core$IFn$_invoke$arity$3 = (function (state_map,dispatch_symbol,legal_remotes){
var run_mutation = (function fulcro$client$data_fetch$run_mutation(remote){
var G__47431 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),fulcro.client.primitives.query__GT_ast1(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,dispatch_symbol,null,(1),null))))),null,(1),null))))))),new cljs.core.Keyword(null,"parser","parser",-1543495310),cljs.core.constantly(null),new cljs.core.Keyword(null,"target","target",253001721),remote,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map)], null);
var G__47432 = dispatch_symbol;
var G__47433 = cljs.core.PersistentArrayMap.EMPTY;
return (fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3 ? fulcro.client.mutations.mutate.cljs$core$IFn$_invoke$arity$3(G__47431,G__47432,G__47433) : fulcro.client.mutations.mutate.call(null,G__47431,G__47432,G__47433));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (remotes,r){
try{var mutation_map = run_mutation(r);
var ks = cljs.core.set(cljs.core.keys(mutation_map));
var possible_remotes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"keys","keys",1068423698),null,new cljs.core.Keyword(null,"action","action",-811238024),null], null), null));
var active_now_QMARK_ = ((function (mutation_map,ks,possible_remotes){
return (function (p1__47409_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(mutation_map,p1__47409_SHARP_,false);
});})(mutation_map,ks,possible_remotes))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(remotes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(active_now_QMARK_,possible_remotes));
}catch (e47435){var e = e47435;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),462], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempting to get the remotes for mutation ",dispatch_symbol," threw an exception. Make sure that mutation is side-effect free!",e], 0));
}catch (e47436){if((e47436 instanceof Error)){
var e__33343__auto___47441 = e47436;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.data-fetch",new cljs.core.Keyword(null,"line","line",212345235),462], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___47441], 0));
} else {
throw e47436;

}
}
return cljs.core.reduced(((cljs.core.seq(remotes))?remotes:new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null], null), null)));
}}),cljs.core.PersistentHashSet.EMPTY,legal_remotes);
});

fulcro.client.data_fetch.get_remotes.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=fulcro.client.data_fetch.js.map

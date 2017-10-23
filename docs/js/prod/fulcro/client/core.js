// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
goog.require('fulcro.client.impl.application');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.network');
goog.require('fulcro.client.logging');
goog.require('cljs.core.async');
goog.require('om.next.protocols');
goog.require('fulcro.client.util');
goog.require('fulcro.client.impl.om_plumbing');
goog.require('clojure.set');
goog.require('om.next.cache');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('goog.Uri');





/**
 * Returns true if the class has the static InitialAppState protocol.
 */
fulcro.client.core.iinitial_app_state_QMARK_ = (function fulcro$client$core$iinitial_app_state_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro$client$core$InitialAppState$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Returns true if the class has the stati Ident protocol.
 */
fulcro.client.core.iident_QMARK_ = (function fulcro$client$core$iident_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Entrypoint for creating a new fulcro client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   If you supply a `:request-transform` it must be a function:
 * 
 *   ```
 *  (fn [{:keys [body headers]}] {:body body' :headers headers'})
 *   ```
 * 
 *   it can replace the outgoing EDN of body or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map. IMPORTANT: Only supported
 *   when using the default built-in single-remote networking.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Fulcro databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:started-callback` is an optional function that will receive the intiailized fulcro application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The Om reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.)
 * 
 *   `:network-error-callback` is a function of two arguments, the app state atom and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found), should you choose to use the default built-in
 *   networking.
 * 
 *   `:migrate` is optional. It is a (fn [state tid->rid] ... state') that should return a new state where all tempids
 *   (the keys of `tid->rid`) are rewritten to real ids (the values of tid->rid). This defaults to a full recursive
 *   algorithm against all data in the app-state, which is correct but possibly slow).  Note that tempids will have an Om tempid data type.
 *   See Om reconciler documentation for further information.
 * 
 *   `:transit-handlers` (optional). A map with keys for `:read` and `:write`, which contain maps to be used for the read
 *   and write side of transit to extend the supported data types. See `make-fulcro-network` in network.cljs. Only used
 *   when you default to the built-in networking.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (om/shared this)
 * 
 *   `:read-local` (optional). An Om read function for the Om Parser. (fn [env k params] ...). If supplied,
 *   it will be called once for each root-level query key. If it returns `nil` or `false` for that key then the built-in Fulcro read will handle that
 *   branch of the root query. If it returns a map with the shape `{:value ...}`, then that will be used for the response. This is *not*
 *   recursive. If you begin handling a *branch* (e.g. a join), you must finish doing so (though if using recursion, you can technically handle just
 *   the properties that need your custom handling). At any time you can use `om/db->tree` to get raw graph data from the database for a branch.
 *   NOTE: *it will be allowed* to trigger remote reads. This is not recommended, as you will probably have to augment the networking layer to
 *   get it to do what you mean. Use `load` instead. You have been warned. Triggering remote reads is allowed, but discouraged and unsupported.
 * 
 *   `:networking` (optional). An instance of FulcroNetwork that will act as the default remote (named :remote). If
 *   you want to support multiple remotes, then this should be a map whose keys are the keyword names of the remotes
 *   and whose values are FulcroNetwork instances.
 * 
 *   `:mutation-merge (optional). A function `(fn [state mutation-symbol return-value])` that receives the app state as a
 *   map (NOT an atom) and should return the new state as a map. This function is run when network results are being merged,
 *   and is called once for each mutation that had a return value on the server. Returning nil from this function is safe, and will be ignored
 *   with a console message for debugging. If you need information about the original mutation arguments then you must reflect
 *   them back from the server in your return value. By default such values are discarded.
 *   
 *   `:reconciler-options (optional). A map that will be merged into the reconciler options for Om.next. Currently it's mostly
 *   useful to override things like :root-render and :root-unmount for React Native Apps.`
 * 
 *   There is currently no way to circumvent the encoding of the body into transit. If you want to talk to other endpoints
 *   via alternate protocols you must currently implement that outside of the framework (e.g. global functions/state).
 *   
 */
fulcro.client.core.new_fulcro_client = (function fulcro$client$core$new_fulcro_client(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48620 = arguments.length;
var i__11692__auto___48621 = (0);
while(true){
if((i__11692__auto___48621 < len__11691__auto___48620)){
args__11698__auto__.push((arguments[i__11692__auto___48621]));

var G__48622 = (i__11692__auto___48621 + (1));
i__11692__auto___48621 = G__48622;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.core.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.core.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__48610){
var map__48611 = p__48610;
var map__48611__$1 = ((((!((map__48611 == null)))?((((map__48611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48611):map__48611);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$started_DASH_callback,cljs.core.constantly(null));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48611__$1,cljs.core.cst$kw$reconciler_DASH_options);
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$read_DASH_local,cljs.core.constantly(false));
var network_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$network_DASH_error_DASH_callback,cljs.core.constantly(null));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48611__$1,cljs.core.cst$kw$networking);
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48611__$1,cljs.core.cst$kw$mutation_DASH_merge);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48611__$1,cljs.core.cst$kw$transit_DASH_handlers);
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$migrate,null);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48611__$1,cljs.core.cst$kw$request_DASH_transform);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48611__$1,cljs.core.cst$kw$shared,null);
var G__48615 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$read_DASH_local,read_local,cljs.core.cst$kw$mutation_DASH_merge,mutation_merge,cljs.core.cst$kw$started_DASH_callback,started_callback,cljs.core.cst$kw$reconciler_DASH_options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48616 = cljs.core.PersistentArrayMap.EMPTY;
var G__48616__$1 = (cljs.core.truth_(migrate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48616,cljs.core.cst$kw$migrate,migrate):G__48616);
if(cljs.core.truth_(shared)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48616__$1,cljs.core.cst$kw$shared,shared);
} else {
return G__48616__$1;
}
})(),reconciler_options], 0)),cljs.core.cst$kw$networking,(function (){var or__10412__auto__ = networking;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic("/api",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$global_DASH_error_DASH_callback,network_error_callback], 0));
}
})()], null);
return (fulcro.client.core.map__GT_Application.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.core.map__GT_Application.cljs$core$IFn$_invoke$arity$1(G__48615) : fulcro.client.core.map__GT_Application.call(null,G__48615));
});

fulcro.client.core.new_fulcro_client.cljs$lang$maxFixedArity = (0);

fulcro.client.core.new_fulcro_client.cljs$lang$applyTo = (function (seq48609){
return fulcro.client.core.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48609));
});


/**
 * @interface
 */
fulcro.client.core.InitialAppState = function(){};

/**
 * Get the initial state to be used for this component in app state. You are responsible for composing these together.
 */
fulcro.client.core.initial_state = (function fulcro$client$core$initial_state(clz,params){
if((!((clz == null))) && (!((clz.fulcro$client$core$InitialAppState$initial_state$arity$2 == null)))){
return clz.fulcro$client$core$InitialAppState$initial_state$arity$2(clz,params);
} else {
var x__11145__auto__ = (((clz == null))?null:clz);
var m__11146__auto__ = (fulcro.client.core.initial_state[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(clz,params) : m__11146__auto__.call(null,clz,params));
} else {
var m__11146__auto____$1 = (fulcro.client.core.initial_state["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(clz,params) : m__11146__auto____$1.call(null,clz,params));
} else {
throw cljs.core.missing_protocol("InitialAppState.initial-state",clz);
}
}
}
});

/**
 * Get the initial state of a component. Needed because calling the protocol method from a defui component in clj will not work as expected.
 */
fulcro.client.core.get_initial_state = (function fulcro$client$core$get_initial_state(class$,params){
if(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.fulcro$client$core$InitialAppState$)))?true:false):false)){
return fulcro.client.core.initial_state(class$,params);
} else {
return null;
}
});

/**
 * @interface
 */
fulcro.client.core.FulcroApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
fulcro.client.core.mount = (function fulcro$client$core$mount(this$,root_component,target_dom_id){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$mount$arity$3 == null)))){
return this$.fulcro$client$core$FulcroApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.mount[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__11146__auto__.call(null,this$,root_component,target_dom_id));
} else {
var m__11146__auto____$1 = (fulcro.client.core.mount["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__11146__auto____$1.call(null,this$,root_component,target_dom_id));
} else {
throw cljs.core.missing_protocol("FulcroApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
fulcro.client.core.reset_state_BANG_ = (function fulcro$client$core$reset_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$reset_state_BANG_$arity$2 == null)))){
return this$.fulcro$client$core$FulcroApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.reset_state_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11146__auto__.call(null,this$,new_state));
} else {
var m__11146__auto____$1 = (fulcro.client.core.reset_state_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__11146__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
fulcro.client.core.reset_app_BANG_ = (function fulcro$client$core$reset_app_BANG_(this$,root_component,callback){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$reset_app_BANG_$arity$3 == null)))){
return this$.fulcro$client$core$FulcroApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.reset_app_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__11146__auto__.call(null,this$,root_component,callback));
} else {
var m__11146__auto____$1 = (fulcro.client.core.reset_app_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__11146__auto____$1.call(null,this$,root_component,callback));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests on the given remote(s). Useful on failures to eliminate cascading failures. Remote can be a keyword, set, or nil. `nil` means all remotes.
 */
fulcro.client.core.clear_pending_remote_requests_BANG_ = (function fulcro$client$core$clear_pending_remote_requests_BANG_(this$,remotes){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 == null)))){
return this$.fulcro$client$core$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(this$,remotes);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.clear_pending_remote_requests_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__11146__auto__.call(null,this$,remotes));
} else {
var m__11146__auto____$1 = (fulcro.client.core.clear_pending_remote_requests_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__11146__auto____$1.call(null,this$,remotes));
} else {
throw cljs.core.missing_protocol("FulcroApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render). NOTE: You MUST support :key on your root DOM element with the :ui/react-key value from app state for this to work.
 */
fulcro.client.core.refresh = (function fulcro$client$core$refresh(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$refresh$arity$1 == null)))){
return this$.fulcro$client$core$FulcroApplication$refresh$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.refresh[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro.client.core.refresh["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.refresh",this$);
}
}
}
});

/**
 * Return a serialized version of the current history of the application, suitable for network transfer
 */
fulcro.client.core.history = (function fulcro$client$core$history(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$history$arity$1 == null)))){
return this$.fulcro$client$core$FulcroApplication$history$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.history[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro.client.core.history["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.history",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
fulcro.client.core.reset_history_BANG_ = (function fulcro$client$core$reset_history_BANG_(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$core$FulcroApplication$reset_history_BANG_$arity$1 == null)))){
return this$.fulcro$client$core$FulcroApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.core.reset_history_BANG_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro.client.core.reset_history_BANG_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-history!",this$);
}
}
}
});

/**
 * Given a state map of the application database, a component, and a tree of component-data: normalizes
 * the tree of data and merges the component table entries into the state, returning a new state map.
 * Since there is not an implied root, the component itself won't be linked into your graph (though it will
 * remain correctly linked for its own consistency).
 * Therefore, this function is just for dropping normalized things into tables
 * when they themselves have a recursive nature. This function is useful when you want to create a new component instance
 * and put it in the database, but the component instance has recursive normalized state. This is a basically a
 * thin wrapper around `om/tree->db`.
 */
fulcro.client.core.merge_component = (function fulcro$client$core$merge_component(state_map,component,component_data){
var temp__5457__auto__ = fulcro.client.util.get_ident(component,component_data);
if(cljs.core.truth_(temp__5457__auto__)){
var top_ident = temp__5457__auto__;
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,om.next.get_query(component)])], null);
var state_to_merge = cljs.core.PersistentArrayMap.createAsIfByAssoc([top_ident,component_data]);
var table_entries = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,state_to_merge,true),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_ident], 0));
return fulcro.client.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state_map,table_entries], 0));
} else {
return state_map;
}
});
/**
 * Walks the given query and calls (merge-fn parent-union-component union-child-initial-state) for each non-default element of a union that has initial app state.
 *   You probably want to use merge-alternate-union-elements[!] on a state map or app.
 */
fulcro.client.core.merge_alternate_unions = (function fulcro$client$core$merge_alternate_unions(merge_fn,root_component){
var walk_ast = (function() {
var fulcro$client$core$merge_alternate_unions_$_walk_ast = null;
var fulcro$client$core$merge_alternate_unions_$_walk_ast__2 = (function (ast,visitor){
return fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
});
var fulcro$client$core$merge_alternate_unions_$_walk_ast__3 = (function (p__48644,visitor,parent_union){
var map__48645 = p__48644;
var map__48645__$1 = ((((!((map__48645 == null)))?((((map__48645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48645):map__48645);
var parent_ast = map__48645__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$children);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$component);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$type);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$dispatch_DASH_key);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$union_DASH_key);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,cljs.core.cst$kw$key);
if(cljs.core.truth_((function (){var and__10400__auto__ = component;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = parent_union;
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union_DASH_entry,type);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
(visitor.cljs$core$IFn$_invoke$arity$2 ? visitor.cljs$core$IFn$_invoke$arity$2(component,parent_union) : visitor.call(null,component,parent_union));
} else {
}

if(cljs.core.truth_(children)){
var seq__48648 = cljs.core.seq(children);
var chunk__48649 = null;
var count__48650 = (0);
var i__48651 = (0);
while(true){
if((i__48651 < count__48650)){
var ast = chunk__48649.cljs$core$IIndexed$_nth$arity$2(null,i__48651);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__48660 = seq__48648;
var G__48661 = chunk__48649;
var G__48662 = count__48650;
var G__48663 = (i__48651 + (1));
seq__48648 = G__48660;
chunk__48649 = G__48661;
count__48650 = G__48662;
i__48651 = G__48663;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__48648);
if(temp__5459__auto__){
var seq__48648__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48648__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__48648__$1);
var G__48664 = cljs.core.chunk_rest(seq__48648__$1);
var G__48665 = c__11343__auto__;
var G__48666 = cljs.core.count(c__11343__auto__);
var G__48667 = (0);
seq__48648 = G__48664;
chunk__48649 = G__48665;
count__48650 = G__48666;
i__48651 = G__48667;
continue;
} else {
var ast = cljs.core.first(seq__48648__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,component);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$union_DASH_entry)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,parent_union);
} else {
if(cljs.core.truth_(ast)){
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3(ast,visitor,null);
} else {
}
}
}

var G__48668 = cljs.core.next(seq__48648__$1);
var G__48669 = null;
var G__48670 = (0);
var G__48671 = (0);
seq__48648 = G__48668;
chunk__48649 = G__48669;
count__48650 = G__48670;
i__48651 = G__48671;
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
});
fulcro$client$core$merge_alternate_unions_$_walk_ast = function(p__48644,visitor,parent_union){
switch(arguments.length){
case 2:
return fulcro$client$core$merge_alternate_unions_$_walk_ast__2.call(this,p__48644,visitor);
case 3:
return fulcro$client$core$merge_alternate_unions_$_walk_ast__3.call(this,p__48644,visitor,parent_union);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$2 = fulcro$client$core$merge_alternate_unions_$_walk_ast__2;
fulcro$client$core$merge_alternate_unions_$_walk_ast.cljs$core$IFn$_invoke$arity$3 = fulcro$client$core$merge_alternate_unions_$_walk_ast__3;
return fulcro$client$core$merge_alternate_unions_$_walk_ast;
})()
;
var merge_union = (function fulcro$client$core$merge_alternate_unions_$_merge_union(component,parent_union){
var default_initial_state = (function (){var and__10400__auto__ = parent_union;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = fulcro.client.core.iinitial_app_state_QMARK_(parent_union);
if(and__10400__auto____$1){
return fulcro.client.core.get_initial_state(parent_union,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
var to_many_QMARK_ = cljs.core.vector_QMARK_(default_initial_state);
var component_initial_state = (function (){var and__10400__auto__ = component;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = fulcro.client.core.iinitial_app_state_QMARK_(component);
if(and__10400__auto____$1){
return fulcro.client.core.get_initial_state(component,cljs.core.PersistentArrayMap.EMPTY);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(default_initial_state)){
} else {
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subelements of union ",parent_union.displayName," have initial state, but the union itself has no initial state. Your app state may suffer."], 0));
}

if(cljs.core.truth_((function (){var and__10400__auto__ = component;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = component_initial_state;
if(cljs.core.truth_(and__10400__auto____$1)){
var and__10400__auto____$2 = parent_union;
if(cljs.core.truth_(and__10400__auto____$2)){
return (!(to_many_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(default_initial_state,component_initial_state));
} else {
return and__10400__auto____$2;
}
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(parent_union,component_initial_state) : merge_fn.call(null,parent_union,component_initial_state));
} else {
return null;
}
});
return walk_ast.cljs$core$IFn$_invoke$arity$2(om.next.query__GT_ast(om.next.get_query(root_component)),merge_union);
});
/**
 * Walks the query and initial state of root-component and merges the alternate sides of unions with initial state into
 *   the application state database. See also `merge-alternate-union-elements`, which can be used on a state map and
 *   is handy for server-side rendering. This function side-effects on your app, and returns nothing.
 */
fulcro.client.core.merge_alternate_union_elements_BANG_ = (function fulcro$client$core$merge_alternate_union_elements_BANG_(app,root_component){
return fulcro.client.core.merge_alternate_unions(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.core.merge_state_BANG_,app),root_component);
});
/**
 * Just like merge-alternate-union-elements!, but usable from within mutations and on server-side rendering. Ensures
 *   that when a component has initial state it will end up in the state map, even if it isn't currently in the
 *   initial state of the union component (which can only point to one at a time).
 */
fulcro.client.core.merge_alternate_union_elements = (function fulcro$client$core$merge_alternate_union_elements(state_map,root_component){
var initial_state = fulcro.client.core.get_initial_state(root_component,null);
var state_map_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state_map);
var merge_to_state = ((function (initial_state,state_map_atom){
return (function (comp,tree){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map_atom,fulcro.client.core.merge_component,comp,tree);
});})(initial_state,state_map_atom))
;
var _ = fulcro.client.core.merge_alternate_unions(merge_to_state,root_component);
var new_state = cljs.core.deref(state_map_atom);
return new_state;
});
/**
 * Starts all remotes in a map. If a remote's `start` returns something that implements `FulcroNetwork`,
 *   update the network map with this value. Returns possibly updated `network-map`.
 */
fulcro.client.core.start_networking = (function fulcro$client$core$start_networking(network_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11294__auto__ = (function fulcro$client$core$start_networking_$_iter__48676(s__48677){
return (new cljs.core.LazySeq(null,(function (){
var s__48677__$1 = s__48677;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__48677__$1);
if(temp__5459__auto__){
var s__48677__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48677__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__48677__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__48679 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__48678 = (0);
while(true){
if((i__48678 < size__11293__auto__)){
var vec__48680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__48678);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48680,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48680,(1),null);
var started = fulcro.client.network.start(remote);
var valid = ((((!((started == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$)))?true:false):false))?started:remote);
cljs.core.chunk_append(b__48679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null));

var G__48688 = (i__48678 + (1));
i__48678 = G__48688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48679),fulcro$client$core$start_networking_$_iter__48676(cljs.core.chunk_rest(s__48677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48679),null);
}
} else {
var vec__48684 = cljs.core.first(s__48677__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48684,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48684,(1),null);
var started = fulcro.client.network.start(remote);
var valid = ((((!((started == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$)))?true:false):false))?started:remote);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null),fulcro$client$core$start_networking_$_iter__48676(cljs.core.rest(s__48677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(network_map);
})());
});
/**
 * Initialize the fulcro Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
fulcro.client.core.initialize = (function fulcro$client$core$initialize(p__48689,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__48690 = p__48689;
var map__48690__$1 = ((((!((map__48690 == null)))?((((map__48690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48690):map__48690);
var app = map__48690__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,cljs.core.cst$kw$networking);
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,cljs.core.cst$kw$read_DASH_local);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,cljs.core.cst$kw$started_DASH_callback);
var network_map = ((((!((networking == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === networking.fulcro$client$network$FulcroNetwork$)))?true:false):false))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$remote,networking], null):networking);
var remotes = cljs.core.keys(network_map);
var send_queues = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,remotes,map__48690,map__48690__$1,app,networking,read_local,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1024));
});})(network_map,remotes,map__48690,map__48690__$1,app,networking,read_local,started_callback))
,remotes));
var response_channels = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,remotes,send_queues,map__48690,map__48690__$1,app,networking,read_local,started_callback){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});})(network_map,remotes,send_queues,map__48690,map__48690__$1,app,networking,read_local,started_callback))
,remotes));
var parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.om_plumbing.read_local,read_local),cljs.core.cst$kw$mutate,fulcro.client.impl.om_plumbing.write_entry_point], null));
var initial_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.cst$kw$send_DASH_queues,send_queues,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response_DASH_channels,response_channels,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$mounted_QMARK_,true], 0));
var app_with_networking = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_app,cljs.core.cst$kw$networking,fulcro.client.core.start_networking(network_map));
var rec = fulcro.client.impl.application.generate_reconciler(app_with_networking,initial_state,parser,reconciler_options);
var completed_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_with_networking,cljs.core.cst$kw$reconciler,rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
fulcro.client.impl.application.initialize_internationalization(rec);

fulcro.client.impl.application.initialize_global_error_callbacks(completed_app);

fulcro.client.impl.application.start_network_sequential_processing(completed_app);

fulcro.client.core.merge_alternate_union_elements_BANG_(completed_app,root_component);

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(rec,root_component,node);

if(cljs.core.truth_(started_callback)){
(started_callback.cljs$core$IFn$_invoke$arity$1 ? started_callback.cljs$core$IFn$_invoke$arity$1(completed_app) : started_callback.call(null,completed_app));
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use FulcroApplication protocol methods instead.
 */
fulcro.client.core.clear_queue = (function fulcro$client$core$clear_queue(queue){
var element = cljs.core.async.poll_BANG_(queue);
while(true){
if(cljs.core.truth_(element)){
var G__48706 = cljs.core.async.poll_BANG_(queue);
element = G__48706;
continue;
} else {
return null;
}
break;
}
});
/**
 * Needed for mocking in tests. Use FulcroApplication protocol methods instead.
 */
fulcro.client.core.reset_history_impl = (function fulcro$client$core$reset_history_impl(app){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$reconciler,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$history], null),(function (p1__48707_SHARP_){
return om.next.cache.cache(p1__48707_SHARP_.size);
})));
});
fulcro.client.core.refresh_STAR_ = (function fulcro$client$core$refresh_STAR_(p__48713,root,target){
var map__48714 = p__48713;
var map__48714__$1 = ((((!((map__48714 == null)))?((((map__48714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48714):map__48714);
var app = map__48714__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48714__$1,cljs.core.cst$kw$reconciler);
var old_target_48718 = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler)));
var target_48719__$1 = ((typeof target === 'string')?goog.dom.getElement(target):target);
if(cljs.core.truth_((function (){var and__10400__auto__ = old_target_48718;
if(cljs.core.truth_(and__10400__auto__)){
return !((old_target_48718 === target_48719__$1));
} else {
return and__10400__auto__;
}
})())){
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mounting on newly supplied target."], 0));

om.next.remove_root_BANG_(reconciler,old_target_48718);

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,root,target_48719__$1);
} else {
}

fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element"], 0));

return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
});
fulcro.client.core.mount_STAR_ = (function fulcro$client$core$mount_STAR_(p__48724,root_component,dom_id_or_node){
var map__48725 = p__48724;
var map__48725__$1 = ((((!((map__48725 == null)))?((((map__48725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48725):map__48725);
var app = map__48725__$1;
var mounted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,cljs.core.cst$kw$mounted_QMARK_);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,cljs.core.cst$kw$initial_DASH_state);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48725__$1,cljs.core.cst$kw$reconciler_DASH_options);
if(cljs.core.truth_(mounted_QMARK_)){
fulcro.client.core.refresh_STAR_(app,root_component,dom_id_or_node);

return app;
} else {
var uses_initial_app_state_QMARK_ = fulcro.client.core.iinitial_app_state_QMARK_(root_component);
var ui_declared_state = (function (){var and__10400__auto__ = uses_initial_app_state_QMARK_;
if(and__10400__auto__){
return fulcro.client.core.initial_state(root_component,null);
} else {
return and__10400__auto__;
}
})();
var explicit_state_QMARK_ = (function (){var or__10412__auto__ = fulcro.client.util.atom_QMARK_(initial_state);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (cljs.core.seq(initial_state)) && (cljs.core.map_QMARK_(initial_state));
}
})();
var init_conflict_QMARK_ = (function (){var and__10400__auto__ = explicit_state_QMARK_;
if(cljs.core.truth_(and__10400__auto__)){
return fulcro.client.core.iinitial_app_state_QMARK_(root_component);
} else {
return and__10400__auto__;
}
})();
var state = (cljs.core.truth_(explicit_state_QMARK_)?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(ui_declared_state)?ui_declared_state:cljs.core.PersistentArrayMap.EMPTY
));
if(cljs.core.truth_(init_conflict_QMARK_)){
fulcro.client.logging.debug.cljs$core$IFn$_invoke$arity$1("NOTE: You supplied an initial state AND a root component with initial state. Using explicit state over InitialAppState!");
} else {
}

return fulcro.client.core.initialize(app,state,root_component,dom_id_or_node,reconciler_options);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {fulcro.client.core.FulcroApplication}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.core.Application = (function (initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.remotes = remotes;
this.networking = networking;
this.send_queues = send_queues;
this.response_channels = response_channels;
this.reconciler = reconciler;
this.read_local = read_local;
this.parser = parser;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

fulcro.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


fulcro.client.core.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k48728,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__48733 = k48728;
var G__48733__$1 = (((G__48733 instanceof cljs.core.Keyword))?G__48733.fqn:null);
switch (G__48733__$1) {
case "initial-state":
return self__.initial_state;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "started-callback":
return self__.started_callback;

break;
case "remotes":
return self__.remotes;

break;
case "networking":
return self__.networking;

break;
case "send-queues":
return self__.send_queues;

break;
case "response-channels":
return self__.response_channels;

break;
case "reconciler":
return self__.reconciler;

break;
case "read-local":
return self__.read_local;

break;
case "parser":
return self__.parser;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48728,else__11103__auto__);

}
});


fulcro.client.core.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#fulcro.client.core.Application{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read_DASH_local,self__.read_local],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});


fulcro.client.core.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48727){
var self__ = this;
var G__48727__$1 = this;
return (new cljs.core.RecordIter((0),G__48727__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initial_DASH_state,cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$read_DASH_local,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


fulcro.client.core.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


fulcro.client.core.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});


fulcro.client.core.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});


fulcro.client.core.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__48739 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1262984183 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__48739(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


fulcro.client.core.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48729,other48730){
var self__ = this;
var this48729__$1 = this;
return (!((other48730 == null))) && ((this48729__$1.constructor === other48730.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.initial_state,other48730.initial_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.mutation_merge,other48730.mutation_merge)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.started_callback,other48730.started_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.remotes,other48730.remotes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.networking,other48730.networking)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.send_queues,other48730.send_queues)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.response_channels,other48730.response_channels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.reconciler,other48730.reconciler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.read_local,other48730.read_local)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.parser,other48730.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.mounted_QMARK_,other48730.mounted_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.reconciler_options,other48730.reconciler_options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48729__$1.__extmap,other48730.__extmap));
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$ = cljs.core.PROTOCOL_SENTINEL;


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return fulcro.client.core.mount_STAR_(this$__$1,root_component,dom_id_or_node);
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(om.next.app_state(self__.reconciler),new_state);
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if(!(fulcro.client.core.iinitial_app_state_QMARK_(root_component))){
return fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The specified root component does not implement InitialAppState!"], 0));
} else {
var base_state = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root_component,fulcro.client.core.initial_state(root_component,null),true);
this$__$1.fulcro$client$core$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(null,null);

cljs.core.reset_BANG_(om.next.app_state(self__.reconciler),base_state);

this$__$1.fulcro$client$core$FulcroApplication$reset_history_BANG_$arity$1(null);

fulcro.client.core.merge_alternate_union_elements_BANG_(this$__$1,root_component);

fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["updated app state to original ",om.next.app_state(self__.reconciler)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback,cljs.core.cst$kw$original)){
(self__.started_callback.cljs$core$IFn$_invoke$arity$1 ? self__.started_callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.started_callback.call(null,this$__$1));
} else {
if(cljs.core.truth_(callback)){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : callback.call(null,this$__$1));
} else {
}
}

return this$__$1.fulcro$client$core$FulcroApplication$refresh$arity$1(null);
}
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 = (function (this$,remotes__$1){
var self__ = this;
var this$__$1 = this;
var remotes__$2 = (((remotes__$1 == null))?cljs.core.keys(self__.send_queues):(((remotes__$1 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remotes__$1], null):remotes__$1
));
var seq__48752 = cljs.core.seq(remotes__$2);
var chunk__48753 = null;
var count__48754 = (0);
var i__48755 = (0);
while(true){
if((i__48755 < count__48754)){
var r = chunk__48753.cljs$core$IIndexed$_nth$arity$2(null,i__48755);
fulcro.client.core.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__48814 = seq__48752;
var G__48815 = chunk__48753;
var G__48816 = count__48754;
var G__48817 = (i__48755 + (1));
seq__48752 = G__48814;
chunk__48753 = G__48815;
count__48754 = G__48816;
i__48755 = G__48817;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__48752);
if(temp__5459__auto__){
var seq__48752__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48752__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__48752__$1);
var G__48818 = cljs.core.chunk_rest(seq__48752__$1);
var G__48819 = c__11343__auto__;
var G__48820 = cljs.core.count(c__11343__auto__);
var G__48821 = (0);
seq__48752 = G__48818;
chunk__48753 = G__48819;
count__48754 = G__48820;
i__48755 = G__48821;
continue;
} else {
var r = cljs.core.first(seq__48752__$1);
fulcro.client.core.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));

var G__48822 = cljs.core.next(seq__48752__$1);
var G__48823 = null;
var G__48824 = (0);
var G__48825 = (0);
seq__48752 = G__48822;
chunk__48753 = G__48823;
count__48754 = G__48824;
i__48755 = G__48825;
continue;
}
} else {
return null;
}
}
break;
}
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history_steps = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(self__.reconciler)).arr;
var history_map = cljs.core.deref(cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(self__.reconciler)).index);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$steps,history_steps,cljs.core.cst$kw$history,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (history_steps,history_map,this$__$1){
return (function (p__48758){
var vec__48759 = p__48758;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48759,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48759,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$fulcro_SLASH_meta,cljs.core.meta(v))], null);
});})(history_steps,history_map,this$__$1))
,history_map))], null);
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.core.reset_history_impl(this$__$1);
});


fulcro.client.core.Application.prototype.fulcro$client$core$FulcroApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["RERENDER: NOTE: If your UI doesn't change, make sure you query for :ui/react-key on your Root and embed that as :key in your top-level DOM element"], 0));

return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(self__.reconciler);
});


fulcro.client.core.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$read_DASH_local,null,cljs.core.cst$kw$networking,null,cljs.core.cst$kw$mutation_DASH_merge,null,cljs.core.cst$kw$remotes,null,cljs.core.cst$kw$mounted_QMARK_,null,cljs.core.cst$kw$response_DASH_channels,null,cljs.core.cst$kw$reconciler,null,cljs.core.cst$kw$parser,null,cljs.core.cst$kw$send_DASH_queues,null,cljs.core.cst$kw$started_DASH_callback,null,cljs.core.cst$kw$initial_DASH_state,null,cljs.core.cst$kw$reconciler_DASH_options,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


fulcro.client.core.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__48727){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__48764 = cljs.core.keyword_identical_QMARK_;
var expr__48765 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__48767 = cljs.core.cst$kw$initial_DASH_state;
var G__48768 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48767,G__48768) : pred__48764.call(null,G__48767,G__48768));
})())){
return (new fulcro.client.core.Application(G__48727,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48769 = cljs.core.cst$kw$mutation_DASH_merge;
var G__48770 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48769,G__48770) : pred__48764.call(null,G__48769,G__48770));
})())){
return (new fulcro.client.core.Application(self__.initial_state,G__48727,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48773 = cljs.core.cst$kw$started_DASH_callback;
var G__48774 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48773,G__48774) : pred__48764.call(null,G__48773,G__48774));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,G__48727,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48775 = cljs.core.cst$kw$remotes;
var G__48776 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48775,G__48776) : pred__48764.call(null,G__48775,G__48776));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__48727,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48777 = cljs.core.cst$kw$networking;
var G__48779 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48777,G__48779) : pred__48764.call(null,G__48777,G__48779));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,G__48727,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48780 = cljs.core.cst$kw$send_DASH_queues;
var G__48781 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48780,G__48781) : pred__48764.call(null,G__48780,G__48781));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,G__48727,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48782 = cljs.core.cst$kw$response_DASH_channels;
var G__48783 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48782,G__48783) : pred__48764.call(null,G__48782,G__48783));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,G__48727,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48784 = cljs.core.cst$kw$reconciler;
var G__48785 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48784,G__48785) : pred__48764.call(null,G__48784,G__48785));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,G__48727,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48786 = cljs.core.cst$kw$read_DASH_local;
var G__48787 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48786,G__48787) : pred__48764.call(null,G__48786,G__48787));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,G__48727,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48788 = cljs.core.cst$kw$parser;
var G__48789 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48788,G__48789) : pred__48764.call(null,G__48788,G__48789));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,G__48727,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48790 = cljs.core.cst$kw$mounted_QMARK_;
var G__48791 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48790,G__48791) : pred__48764.call(null,G__48790,G__48791));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,G__48727,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48792 = cljs.core.cst$kw$reconciler_DASH_options;
var G__48793 = expr__48765;
return (pred__48764.cljs$core$IFn$_invoke$arity$2 ? pred__48764.cljs$core$IFn$_invoke$arity$2(G__48792,G__48793) : pred__48764.call(null,G__48792,G__48793));
})())){
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,G__48727,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__48727),null));
}
}
}
}
}
}
}
}
}
}
}
}
});


fulcro.client.core.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$initial_DASH_state,self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mutation_DASH_merge,self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$started_DASH_callback,self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$remotes,self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$networking,self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$send_DASH_queues,self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_channels,self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler,self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read_DASH_local,self__.read_local],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parser,self__.parser],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$mounted_QMARK_,self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$reconciler_DASH_options,self__.reconciler_options],null))], null),self__.__extmap));
});


fulcro.client.core.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__48727){
var self__ = this;
var this__11099__auto____$1 = this;
return (new fulcro.client.core.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.parser,self__.mounted_QMARK_,self__.reconciler_options,G__48727,self__.__extmap,self__.__hash));
});


fulcro.client.core.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

fulcro.client.core.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$initial_DASH_state,cljs.core.cst$sym$mutation_DASH_merge,cljs.core.cst$sym$started_DASH_callback,cljs.core.cst$sym$remotes,cljs.core.cst$sym$networking,cljs.core.cst$sym$send_DASH_queues,cljs.core.cst$sym$response_DASH_channels,cljs.core.cst$sym$reconciler,cljs.core.cst$sym$read_DASH_local,cljs.core.cst$sym$parser,cljs.core.cst$sym$mounted_QMARK_,cljs.core.cst$sym$reconciler_DASH_options], null);
});

fulcro.client.core.Application.cljs$lang$type = true;

fulcro.client.core.Application.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.core/Application");
});

fulcro.client.core.Application.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"fulcro.client.core/Application");
});

fulcro.client.core.__GT_Application = (function fulcro$client$core$__GT_Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options){
return (new fulcro.client.core.Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,parser,mounted_QMARK_,reconciler_options,null,null,null));
});

fulcro.client.core.map__GT_Application = (function fulcro$client$core$map__GT_Application(G__48731){
return (new fulcro.client.core.Application(cljs.core.cst$kw$initial_DASH_state.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$mutation_DASH_merge.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$started_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$networking.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$send_DASH_queues.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$response_DASH_channels.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$read_DASH_local.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(G__48731),cljs.core.cst$kw$reconciler_DASH_options.cljs$core$IFn$_invoke$arity$1(G__48731),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48731,cljs.core.cst$kw$initial_DASH_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mutation_DASH_merge,cljs.core.cst$kw$started_DASH_callback,cljs.core.cst$kw$remotes,cljs.core.cst$kw$networking,cljs.core.cst$kw$send_DASH_queues,cljs.core.cst$kw$response_DASH_channels,cljs.core.cst$kw$reconciler,cljs.core.cst$kw$read_DASH_local,cljs.core.cst$kw$parser,cljs.core.cst$kw$mounted_QMARK_,cljs.core.cst$kw$reconciler_DASH_options], 0))),null));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Fulcro app container.
 */
fulcro.client.core.new_fulcro_test_client = (function fulcro$client$core$new_fulcro_test_client(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48832 = arguments.length;
var i__11692__auto___48833 = (0);
while(true){
if((i__11692__auto___48833 < len__11691__auto___48832)){
args__11698__auto__.push((arguments[i__11692__auto___48833]));

var G__48834 = (i__11692__auto___48833 + (1));
i__11692__auto___48833 = G__48834;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return fulcro.client.core.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

fulcro.client.core.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__48829){
var map__48830 = p__48829;
var map__48830__$1 = ((((!((map__48830 == null)))?((((map__48830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48830):map__48830);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48830__$1,cljs.core.cst$kw$initial_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48830__$1,cljs.core.cst$kw$started_DASH_callback,null);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48830__$1,cljs.core.cst$kw$reconciler_DASH_options);
return fulcro.client.core.map__GT_Application(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$initial_DASH_state,initial_state,cljs.core.cst$kw$started_DASH_callback,started_callback,cljs.core.cst$kw$reconciler_DASH_options,reconciler_options,cljs.core.cst$kw$networking,fulcro.client.network.mock_network()], null));
});

fulcro.client.core.new_fulcro_test_client.cljs$lang$maxFixedArity = (0);

fulcro.client.core.new_fulcro_test_client.cljs$lang$applyTo = (function (seq48828){
return fulcro.client.core.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48828));
});

/**
 * Get the current window location from the browser
 */
fulcro.client.core.get_url = (function fulcro$client$core$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
fulcro.client.core.uri_params = (function fulcro$client$core$uri_params(var_args){
var G__48836 = arguments.length;
switch (G__48836) {
case 0:
return fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$1(fulcro.client.core.get_url());
});

fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11294__auto__ = ((function (query_data){
return (function fulcro$client$core$iter__48837(s__48838){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__48838__$1 = s__48838;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__48838__$1);
if(temp__5459__auto__){
var s__48838__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48838__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__48838__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__48840 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__48839 = (0);
while(true){
if((i__48839 < size__11293__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__48839);
cljs.core.chunk_append(b__48840,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__48842 = (i__48839 + (1));
i__48839 = G__48842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48840),fulcro$client$core$iter__48837(cljs.core.chunk_rest(s__48838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48840),null);
}
} else {
var k = cljs.core.first(s__48838__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),fulcro$client$core$iter__48837(cljs.core.rest(s__48838__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__11294__auto__(query_data.getKeys());
})());
});

fulcro.client.core.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
fulcro.client.core.get_url_param = (function fulcro$client$core$get_url_param(var_args){
var G__48844 = arguments.length;
switch (G__48844) {
case 1:
return fulcro.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.core.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return fulcro.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2(fulcro.client.core.get_url(),param_name);
});

fulcro.client.core.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.core.uri_params.cljs$core$IFn$_invoke$arity$1(url),param_name);
});

fulcro.client.core.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * Calculates the query that can be used to pull (or merge) a component with an ident
 *   to/from a normalized app database. Requires a tree of data that represents the instance of
 *   the component in question (e.g. ident will work on it)
 */
fulcro.client.core.component_merge_query = (function fulcro$client$core$component_merge_query(component,object_data){
var ident = om.next.ident(component,object_data);
var object_query = om.next.get_query(component);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,object_query])], null);
});
/**
 * Does the steps necessary to honor the data merge technique defined by Fulcro with respect
 *   to data overwrites in the app database.
 */
fulcro.client.core.preprocess_merge = (function fulcro$client$core$preprocess_merge(state_atom,component,object_data){
var ident = fulcro.client.util.get_ident(component,object_data);
var object_query = om.next.get_query(component);
var object_query__$1 = ((cljs.core.map_QMARK_(object_query))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [object_query], null):object_query);
var base_query = fulcro.client.core.component_merge_query(component,object_data);
var merge_query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_merge,base_query], null)], null);
var existing_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3(base_query,cljs.core.deref(state_atom),cljs.core.deref(state_atom)),ident,cljs.core.PersistentArrayMap.EMPTY);
var marked_data = fulcro.client.impl.om_plumbing.mark_missing(object_data,object_query__$1);
var merge_data = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro_SLASH_merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,fulcro.client.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([existing_data,marked_data], 0))])], null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge_DASH_query,merge_query,cljs.core.cst$kw$merge_DASH_data,merge_data], null);
});
/**
 * Returns TRUE when x is an atom.
 */
fulcro.client.core.is_atom_QMARK_ = (function fulcro$client$core$is_atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 */
fulcro.client.core.integrate_ident = (function fulcro$client$core$integrate_ident(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48856 = arguments.length;
var i__11692__auto___48857 = (0);
while(true){
if((i__11692__auto___48857 < len__11691__auto___48856)){
args__11698__auto__.push((arguments[i__11692__auto___48857]));

var G__48858 = (i__11692__auto___48857 + (1));
i__11692__auto___48857 = G__48858;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.map_QMARK_(state)){
} else {
throw (new Error("Assert failed: (map? state)"));
}

var actions = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (actions){
return (function (state__$1,p__48851){
var vec__48852 = p__48851;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48852,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48852,(1),null);
var already_has_ident_at_path_QMARK_ = ((function (vec__48852,command,data_path,actions){
return (function (data_path__$1){
return cljs.core.some(((function (vec__48852,command,data_path,actions){
return (function (p1__48846_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48846_SHARP_,ident);
});})(vec__48852,command,data_path,actions))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path__$1));
});})(vec__48852,command,data_path,actions))
;
var G__48855 = command;
var G__48855__$1 = (((G__48855 instanceof cljs.core.Keyword))?G__48855.fqn:null);
switch (G__48855__$1) {
case "prepend":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for prepend must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,data_path,((function (G__48855,G__48855__$1,already_has_ident_at_path_QMARK_,vec__48852,command,data_path,actions){
return (function (p1__48847_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident], null),p1__48847_SHARP_);
});})(G__48855,G__48855__$1,already_has_ident_at_path_QMARK_,vec__48852,command,data_path,actions))
);
}

break;
case "append":
if(cljs.core.truth_(already_has_ident_at_path_QMARK_(data_path))){
return state__$1;
} else {
if(cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,data_path))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)," for append must target an app-state vector."].join('')),"\n","(vector? (get-in state data-path))"].join('')));
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,data_path,cljs.core.conj,ident);
}

break;
case "replace":
var path_to_vector = cljs.core.butlast(data_path);
var to_many_QMARK_ = (cljs.core.seq(path_to_vector)) && (cljs.core.vector_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector)));
var index = cljs.core.last(data_path);
var vector = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,path_to_vector);
if(cljs.core.vector_QMARK_(data_path)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Replacement path must be a vector. You passed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_path)].join('')),"\n","(vector? data-path)"].join('')));
}

if(to_many_QMARK_){
if(cljs.core.vector_QMARK_(vector)){
} else {
throw (new Error(["Assert failed: ","Path for replacement must be a vector","\n","(vector? vector)"].join('')));
}

if(typeof index === 'number'){
} else {
throw (new Error(["Assert failed: ","Path for replacement must end in a vector index","\n","(number? index)"].join('')));
}

if(cljs.core.contains_QMARK_(vector,index)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Target vector for replacement does not have an item at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),"\n","(contains? vector index)"].join('')));
}
} else {
}

return cljs.core.assoc_in(state__$1,data_path,ident);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown post-op to merge-state!: ",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$command,command,cljs.core.cst$kw$arg,data_path], null));

}
});})(actions))
,state,actions);
});

fulcro.client.core.integrate_ident.cljs$lang$maxFixedArity = (2);

fulcro.client.core.integrate_ident.cljs$lang$applyTo = (function (seq48848){
var G__48849 = cljs.core.first(seq48848);
var seq48848__$1 = cljs.core.next(seq48848);
var G__48850 = cljs.core.first(seq48848__$1);
var seq48848__$2 = cljs.core.next(seq48848__$1);
return fulcro.client.core.integrate_ident.cljs$core$IFn$_invoke$arity$variadic(G__48849,G__48850,seq48848__$2);
});

/**
 * Integrate an ident into any number of places in the app state. This function is safe to use within mutation
 *   implementations as a general helper function.
 * 
 *   The named parameters can be specified any number of times. They are:
 * 
 *   - append:  A vector (path) to a list in your app state where this new object's ident should be appended. Will not append
 *   the ident if that ident is already in the list.
 *   - prepend: A vector (path) to a list in your app state where this new object's ident should be prepended. Will not append
 *   the ident if that ident is already in the list.
 *   - replace: A vector (path) to a specific location in app-state where this object's ident should be placed. Can target a to-one or to-many.
 * If the target is a vector element then that element must already exist in the vector.
 *   
 */
fulcro.client.core.integrate_ident_BANG_ = (function fulcro$client$core$integrate_ident_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48863 = arguments.length;
var i__11692__auto___48864 = (0);
while(true){
if((i__11692__auto___48864 < len__11691__auto___48863)){
args__11698__auto__.push((arguments[i__11692__auto___48864]));

var G__48865 = (i__11692__auto___48864 + (1));
i__11692__auto___48864 = G__48865;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return fulcro.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

fulcro.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,ident,named_parameters){
if(cljs.core.truth_(fulcro.client.core.is_atom_QMARK_(state))){
} else {
throw (new Error(["Assert failed: ","The state has to be an atom. Use 'integrate-ident' instead.","\n","(is-atom? state)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,state,fulcro.client.core.integrate_ident,ident,named_parameters);
});

fulcro.client.core.integrate_ident_BANG_.cljs$lang$maxFixedArity = (2);

fulcro.client.core.integrate_ident_BANG_.cljs$lang$applyTo = (function (seq48860){
var G__48861 = cljs.core.first(seq48860);
var seq48860__$1 = cljs.core.next(seq48860);
var G__48862 = cljs.core.first(seq48860__$1);
var seq48860__$2 = cljs.core.next(seq48860__$1);
return fulcro.client.core.integrate_ident_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48861,G__48862,seq48860__$2);
});

/**
 * Normalize and merge a (sub)tree of application state into the application using a known UI component's query and ident.
 * 
 *   This utility function obtains the ident of the incoming object-data using the UI component's ident function. Once obtained,
 *   it uses the component's query and ident to normalize the data and place the resulting objects in the correct tables.
 *   It is also quite common to want those new objects to be linked into lists in other spot in app state, so this function
 *   supports optional named parameters for doing this. These named parameters can be repeated as many times as you like in order
 *   to place the ident of the new object into other data structures of app state.
 * 
 *   This function honors the data merge story for Fulcro: attributes that are queried for but do not appear in the
 *   data will be removed from the application. This function also uses the initial state for the component as a base
 *   for merge if there was no state for the object already in the database.
 * 
 *   This function will also trigger re-renders of components that directly render object merged, as well as any components
 *   into which you integrate that data via the named-parameters.
 * 
 *   This function is primarily meant to be used from things like server push and setTimeout/setInterval, where you're outside
 *   of the normal mutation story. Do not use this function within abstract mutations.
 * 
 *   - app-or-reconciler: The Fulcro application or Om reconciler
 *   - component: The class of the component that corresponsds to the data. Must have an ident.
 *   - object-data: A map (tree) of data to merge. Will be normalized for you.
 *   - named-parameter: Post-processing ident integration steps. see integrate-ident!
 * 
 *   Any keywords that appear in ident integration steps will be added to the re-render queue.
 *   
 */
fulcro.client.core.merge_state_BANG_ = (function fulcro$client$core$merge_state_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___48873 = arguments.length;
var i__11692__auto___48874 = (0);
while(true){
if((i__11692__auto___48874 < len__11691__auto___48873)){
args__11698__auto__.push((arguments[i__11692__auto___48874]));

var G__48875 = (i__11692__auto___48874 + (1));
i__11692__auto___48874 = G__48875;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return fulcro.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

fulcro.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_parameters){
if(fulcro.client.core.iident_QMARK_(component)){
} else {
fulcro.client.logging.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["merge-state!: component must implement Ident"], 0));
}

var ident = fulcro.client.util.get_ident(component,object_data);
var reconciler = ((((!((app_or_reconciler == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_reconciler.fulcro$client$core$FulcroApplication$)))?true:false):false))?cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
var state = om.next.app_state(reconciler);
var data_path_keys = cljs.core.vec(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),named_parameters))))));
var map__48870 = fulcro.client.core.preprocess_merge(state,component,object_data);
var map__48870__$1 = ((((!((map__48870 == null)))?((((map__48870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48870):map__48870);
var merge_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48870__$1,cljs.core.cst$kw$merge_DASH_data);
var merge_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48870__$1,cljs.core.cst$kw$merge_DASH_query);
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,merge_data,merge_query);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$fulcro_SLASH_merge);

cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.client.core.integrate_ident_BANG_,state,ident,named_parameters);

om.next.protocols.queue_BANG_.cljs$core$IFn$_invoke$arity$2(reconciler,data_path_keys);

return cljs.core.deref(state);
});

fulcro.client.core.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

fulcro.client.core.merge_state_BANG_.cljs$lang$applyTo = (function (seq48866){
var G__48867 = cljs.core.first(seq48866);
var seq48866__$1 = cljs.core.next(seq48866);
var G__48868 = cljs.core.first(seq48866__$1);
var seq48866__$2 = cljs.core.next(seq48866__$1);
var G__48869 = cljs.core.first(seq48866__$2);
var seq48866__$3 = cljs.core.next(seq48866__$2);
return fulcro.client.core.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48867,G__48868,G__48869,seq48866__$3);
});

/**
 * Build a component's initial state using the defsc initial-state-data from
 *   options, the children from options, and the params from the invocation of get-initial-state.
 */
fulcro.client.core.make_state_map = (function fulcro$client$core$make_state_map(initial_state,children,params){
var join_keys = cljs.core.set(cljs.core.keys(children));
var init_keys = cljs.core.set(cljs.core.keys(initial_state));
var is_child_QMARK_ = ((function (join_keys,init_keys){
return (function (k){
return cljs.core.contains_QMARK_(join_keys,k);
});})(join_keys,init_keys))
;
var value_of = ((function (join_keys,init_keys,is_child_QMARK_){
return (function fulcro$client$core$make_state_map_$_value_of_STAR_(p__48878){
var vec__48879 = p__48878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48879,(1),null);
var param_name = ((function (vec__48879,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (v__$1){
var and__10400__auto__ = (v__$1 instanceof cljs.core.Keyword);
if(and__10400__auto__){
var and__10400__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param",cljs.core.namespace(v__$1));
if(and__10400__auto____$1){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(v__$1));
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
});})(vec__48879,k,v,join_keys,init_keys,is_child_QMARK_))
;
var substitute = ((function (param_name,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
var temp__5457__auto__ = param_name(ele);
if(cljs.core.truth_(temp__5457__auto__)){
var k__$1 = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,k__$1);
} else {
return ele;
}
});})(param_name,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_))
;
var param_key = param_name(v);
var param_exists_QMARK_ = cljs.core.contains_QMARK_(params,param_key);
var param_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,param_key);
var child_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(children,k);
if(cljs.core.truth_((function (){var and__10400__auto__ = param_key;
if(cljs.core.truth_(and__10400__auto__)){
return !(param_exists_QMARK_);
} else {
return and__10400__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.map_QMARK_(v);
if(and__10400__auto__){
return is_child_QMARK_(k);
} else {
return and__10400__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.core.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$core$make_state_map_$_value_of_STAR_,v)))], null);
} else {
if(cljs.core.map_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$core$make_state_map_$_value_of_STAR_,v))], null);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.vector_QMARK_(v);
if(and__10400__auto__){
return is_child_QMARK_(k);
} else {
return and__10400__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (m){
return fulcro.client.core.get_initial_state(child_class,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro$client$core$make_state_map_$_value_of_STAR_,m)));
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_))
,v)], null);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.vector_QMARK_(param_value);
if(and__10400__auto__){
return is_child_QMARK_(k);
} else {
return and__10400__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (params__$1){
return fulcro.client.core.get_initial_state(child_class,params__$1);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_))
,param_value)], null);
} else {
if(cljs.core.vector_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_){
return (function (ele){
return substitute(ele);
});})(param_name,substitute,param_key,param_exists_QMARK_,param_value,child_class,vec__48879,k,v,join_keys,init_keys,is_child_QMARK_))
,v)], null);
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = param_key;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = is_child_QMARK_(k);
if(cljs.core.truth_(and__10400__auto____$1)){
return param_exists_QMARK_;
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fulcro.client.core.get_initial_state(child_class,param_value)], null);
} else {
if(cljs.core.truth_(param_key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,param_value], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);

}
}
}
}
}
}
}
}
});})(join_keys,init_keys,is_child_QMARK_))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(value_of,initial_state));
});

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.network');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.logging');
goog.require('cljs.spec.alpha');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('fulcro.transit');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
fulcro.client.network.xhrio_error_states = cljs.core.PersistentHashMap.fromArrays([goog.net.ErrorCode.FILE_NOT_FOUND,goog.net.ErrorCode.NO_ERROR,goog.net.ErrorCode.HTTP_ERROR,goog.net.ErrorCode.EXCEPTION,goog.net.ErrorCode.TIMEOUT,goog.net.ErrorCode.CUSTOM_ERROR,goog.net.ErrorCode.ACCESS_DENIED,goog.net.ErrorCode.OFFLINE,goog.net.ErrorCode.ABORT,goog.net.ErrorCode.FF_SILENT_ERROR],[cljs.core.cst$kw$not_DASH_found,cljs.core.cst$kw$none,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout,cljs.core.cst$kw$custom,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$offline,cljs.core.cst$kw$abort,cljs.core.cst$kw$silent]);
fulcro.client.network.make_xhrio = (function fulcro$client$network$make_xhrio(){
return (new goog.net.XhrIo());
});
fulcro.client.network.xhrio_dispose = (function fulcro$client$network$xhrio_dispose(xhrio){
return xhrio.dispose();
});
fulcro.client.network.xhrio_enable_progress_events = (function fulcro$client$network$xhrio_enable_progress_events(xhrio){
return xhrio.setProgressEventsEnabled(true);
});
fulcro.client.network.xhrio_abort = (function fulcro$client$network$xhrio_abort(xhrio){
return xhrio.abort();
});
fulcro.client.network.xhrio_send = (function fulcro$client$network$xhrio_send(xhrio,url,verb,body,headers){
return xhrio.send(url,verb,body,(function (){var G__21561 = headers;
if((G__21561 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__21561);
}
})());
});
fulcro.client.network.xhrio_status_code = (function fulcro$client$network$xhrio_status_code(xhrio){
return xhrio.getStatus();
});
fulcro.client.network.xhrio_status_text = (function fulcro$client$network$xhrio_status_text(xhrio){
return xhrio.getStatusText();
});
fulcro.client.network.xhrio_raw_error = (function fulcro$client$network$xhrio_raw_error(xhrio){
return xhrio.getLastErrorCode();
});
fulcro.client.network.xhrio_error_code = (function fulcro$client$network$xhrio_error_code(xhrio){
var status = fulcro.client.network.xhrio_status_code(xhrio);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.client.network.xhrio_error_states,fulcro.client.network.xhrio_raw_error(xhrio),cljs.core.cst$kw$unknown);
var error__$1 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,cljs.core.cst$kw$http_DASH_error)))?cljs.core.cst$kw$network_DASH_error:error);
return error__$1;
});
fulcro.client.network.xhrio_error_text = (function fulcro$client$network$xhrio_error_text(xhrio){
return xhrio.getLastError();
});
fulcro.client.network.xhrio_response_text = (function fulcro$client$network$xhrio_response_text(xhrio){
return xhrio.getResponseText();
});
/**
 * Given an xhrio progress event, returns a map with keys :loaded and :total, where loaded is the
 *   number of bytes transferred in the given phase (upload/download) and total is the total number
 *   of bytes to transfer (if known). 
 */
fulcro.client.network.xhrio_progress = (function fulcro$client$network$xhrio_progress(event){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$loaded,event.loaded,cljs.core.cst$kw$total,event.total], null);
});
/**
 * Takes a map containing :fulcro.client.network/progress (the params map from a progress report mutation)
 *   and returns a number between 0 and 100. `phase` can be `:overall`, `:sending`, or `:receiving`. When
 *   set to `:overall` then the send phase will count for progress points between 0 and 49, and receiving phase
 *   will account for 50 to 100. When set to :sending or :receiving the entire range will count for that phase only
 *   (i.e. once sending is complete this function would return 100 throughout the receiving phase.)
 * 
 *   If total is unknown, then this function returns 0.
 */
fulcro.client.network.progress_PERCENT_ = (function fulcro$client$network$progress_PERCENT_(var_args){
var G__21571 = arguments.length;
switch (G__21571) {
case 1:
return fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$1 = (function (progress){
return fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.cst$kw$overall);
});

fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2 = (function (progress,phase){
var current_phase = (function (){var G__21577 = progress;
var G__21577__$1 = (((G__21577 == null))?null:cljs.core.cst$kw$fulcro$client$network_SLASH_progress.cljs$core$IFn$_invoke$arity$1(G__21577));
if((G__21577__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$progress_DASH_phase.cljs$core$IFn$_invoke$arity$1(G__21577__$1);
}
})();
var map__21573 = (function (){var G__21579 = progress;
var G__21579__$1 = (((G__21579 == null))?null:cljs.core.cst$kw$fulcro$client$network_SLASH_progress.cljs$core$IFn$_invoke$arity$1(G__21579));
var G__21579__$2 = (((G__21579__$1 == null))?null:cljs.core.cst$kw$progress_DASH_event.cljs$core$IFn$_invoke$arity$1(G__21579__$1));
if((G__21579__$2 == null)){
return null;
} else {
return fulcro.client.network.xhrio_progress(G__21579__$2);
}
})();
var map__21573__$1 = ((((!((map__21573 == null)))?((((map__21573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21573):map__21573);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21573__$1,cljs.core.cst$kw$loaded,(0));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21573__$1,cljs.core.cst$kw$total,(0));
var vec__21574 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$complete))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$failed))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$sending)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$overall,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(49)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$receiving)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$overall,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$sending)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sending,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$receiving)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sending,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$sending)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$receiving,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,cljs.core.cst$kw$receiving)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$receiving,phase)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):null))))))));
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574,(0),null);
var max_pct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21574,(1),null);
var slope = (max_pct - base);
var x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),total))?(1):(loaded / total));
var G__21590 = (base + (x * slope));
return Math.floor(G__21590);
});

fulcro.client.network.progress_PERCENT_.cljs$lang$maxFixedArity = 2;

/**
 * Generate a response map from the status of the given xhrio object, which could be in a complete or error state.
 */
fulcro.client.network.extract_response = (function fulcro$client$network$extract_response(tx,request,xhrio){
try{return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transaction,tx,cljs.core.cst$kw$outgoing_DASH_request,request,cljs.core.cst$kw$body,fulcro.client.network.xhrio_response_text(xhrio),cljs.core.cst$kw$status_DASH_code,fulcro.client.network.xhrio_status_code(xhrio),cljs.core.cst$kw$status_DASH_text,fulcro.client.network.xhrio_status_text(xhrio),cljs.core.cst$kw$error,fulcro.client.network.xhrio_error_code(xhrio),cljs.core.cst$kw$error_DASH_text,fulcro.client.network.xhrio_error_text(xhrio)], null);
}catch (e21608){var e = e21608;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$transaction,tx,cljs.core.cst$kw$outgoing_DASH_request,request,cljs.core.cst$kw$body,"",cljs.core.cst$kw$status_DASH_code,(0),cljs.core.cst$kw$status_DASH_text,"Internal Exception",cljs.core.cst$kw$error,cljs.core.cst$kw$exception,cljs.core.cst$kw$error_DASH_text,"Internal Exception from XHRIO"], null);
}});

/**
 * @interface
 */
fulcro.client.network.FulcroRemoteI = function(){};

/**
 * Send the given `request`, which will contain:
 *   - `:fulcro.client.network/edn` : The actual API tx to send.
 *   - `:fulcro.client.network/ok-handler` : complete-fn
 *   - `:fulcro.client.network/error-handler` : error-fn
 *   - `:fulcro.client.network/progress-handler` : update-fn
 * 
 *   It may also optionally include:
 *   - `:fulcro.client.network/abort-id` : An ID to remember the network request by, to enable user-level API abort
 * 
 *   When you implement this protocol, you MUST call the `ok-handler` or `error-handler` exactly once. You *may*
 *   call the `progress-handler` any number of times (including none).
 * 
 *   ok-hander - A (fn [{:keys [transaction body]}] ...) that will merge the edn result using the given transaction (query)
 *   error-handler - A (fn [{:keys [body]}] ...) that will report an error to Fulcro. The body is EDN that will be placed into the state as the error.
 *   progress-handler - A (fn [progress] ...) that will run all registered progress mutations, and will include `progress` in the parameters of each progress mutation.
 *   
 */
fulcro.client.network.transmit = (function fulcro$client$network$transmit(this$,request){
if((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroRemoteI$transmit$arity$2 == null)))){
return this$.fulcro$client$network$FulcroRemoteI$transmit$arity$2(this$,request);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.transmit[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__11539__auto__.call(null,this$,request));
} else {
var m__11539__auto____$1 = (fulcro.client.network.transmit["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,request) : m__11539__auto____$1.call(null,this$,request));
} else {
throw cljs.core.missing_protocol("FulcroRemoteI.transmit",this$);
}
}
}
});

/**
 * Cancel the network activity for the given request id, supplied during submission.
 */
fulcro.client.network.abort = (function fulcro$client$network$abort(this$,abort_id){
if((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroRemoteI$abort$arity$2 == null)))){
return this$.fulcro$client$network$FulcroRemoteI$abort$arity$2(this$,abort_id);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.abort[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__11539__auto__.call(null,this$,abort_id));
} else {
var m__11539__auto____$1 = (fulcro.client.network.abort["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__11539__auto____$1.call(null,this$,abort_id));
} else {
throw cljs.core.missing_protocol("FulcroRemoteI.abort",this$);
}
}
}
});

/**
 * Client Remote Middleware to add transit encoding for normal Fulcro requests. Sets the content type and transforms an EDN
 *   body to a transit+json encoded body. addl-transit-handlers is a map from data type to transit handler (like
 *   you would pass using the `:handlers` option of transit). The
 *   additional handlers are used to encode new data types into transit. See transit documentation for more details.
 */
fulcro.client.network.wrap_fulcro_request = (function fulcro$client$network$wrap_fulcro_request(var_args){
var G__21643 = arguments.length;
switch (G__21643) {
case 2:
return fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2 = (function (handler,addl_transit_handlers){
var writer = fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(addl_transit_handlers)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,addl_transit_handlers], null):cljs.core.PersistentArrayMap.EMPTY));
return ((function (writer){
return (function (p__21646){
var map__21647 = p__21646;
var map__21647__$1 = ((((!((map__21647 == null)))?((((map__21647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21647):map__21647);
var request = map__21647__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21647__$1,cljs.core.cst$kw$body);
var body__$1 = cognitect.transit.write(writer,body);
var headers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","application/transit+json");
var G__21656 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,body__$1,cljs.core.cst$kw$headers,headers__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$post], null)], 0));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21656) : handler.call(null,G__21656));
});
;})(writer))
});

fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2(handler,null);
});

fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,null);
});

fulcro.client.network.wrap_fulcro_request.cljs$lang$maxFixedArity = 2;

/**
 * Client remote middleware to transform a network response to a standard Fulcro form.
 * 
 *   This returns a function that will decode a transit response iff the resulting status code is 200 and the
 *   body is not empty. For errant status codes and empty body: the response body will become an empty map.
 * 
 *   No arguments: Returns a function that can process responses, that is not further chained.
 *   handler: If supplied, the result of this transformation will be passed through the `handler`.
 *   addl-transit-handlers is equivalent to the :handlers option in transit: a map from data type to handler.
 *   
 */
fulcro.client.network.wrap_fulcro_response = (function fulcro$client$network$wrap_fulcro_response(var_args){
var G__21668 = arguments.length;
switch (G__21668) {
case 0:
return fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
});

fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2(handler,null);
});

fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$2 = (function (handler,addl_transit_handlers){
var base_handlers = new cljs.core.PersistentArrayMap(null, 2, ["f",(function (v){
return parseFloat(v);
}),"u",cljs.core.uuid], null);
var handlers = ((cljs.core.map_QMARK_(addl_transit_handlers))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_handlers,addl_transit_handlers], 0)):base_handlers);
var reader = fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null));
return ((function (base_handlers,handlers,reader){
return (function (p__21677){
var map__21678 = p__21677;
var map__21678__$1 = ((((!((map__21678 == null)))?((((map__21678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21678):map__21678);
var response = map__21678__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21678__$1,cljs.core.cst$kw$body);
var G__21682 = (function (){try{var new_body = ((clojure.string.blank_QMARK_(body))?cljs.core.PersistentArrayMap.EMPTY:cognitect.transit.read(reader,body));
var response__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,cljs.core.cst$kw$body,new_body);
return response__$1;
}catch (e21683){if((e21683 instanceof Object)){
var e = e21683;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,161], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transit decode failed!",e], 0));
}catch (e21684){if((e21684 instanceof Error)){
var e__18456__auto___21700 = e21684;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,161], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___21700], 0));
} else {
throw e21684;

}
}
return response;
} else {
throw e21683;

}
}})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__21682) : handler.call(null,G__21682));
});
;})(base_handlers,handlers,reader))
});

fulcro.client.network.wrap_fulcro_response.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_method,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$patch,null,cljs.core.cst$kw$trace,null,cljs.core.cst$kw$connect,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$head,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$options,null,cljs.core.cst$kw$put,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$patch,null,cljs.core.cst$kw$trace,null,cljs.core.cst$kw$connect,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$head,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$options,null,cljs.core.cst$kw$put,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_url,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_headers,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$string_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.string_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21710){
return cljs.core.map_QMARK_(G__21710);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_method,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_url,cljs.core.cst$kw$fulcro$client$network_SLASH_headers], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_method,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_url,cljs.core.cst$kw$fulcro$client$network_SLASH_headers], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21720){
return cljs.core.map_QMARK_(G__21720);
}),(function (G__21720){
return cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$method);
}),(function (G__21720){
return cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$body);
}),(function (G__21720){
return cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$url);
}),(function (G__21720){
return cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$headers);
})], null),(function (G__21720){
return (cljs.core.map_QMARK_(G__21720)) && (cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$method)) && (cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$body)) && (cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$url)) && (cljs.core.contains_QMARK_(G__21720,cljs.core.cst$kw$headers));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_method,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_url,cljs.core.cst$kw$fulcro$client$network_SLASH_headers], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$method,cljs.core.cst$kw$body,cljs.core.cst$kw$url,cljs.core.cst$kw$headers], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$method)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$body)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$url)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$headers))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_error,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$offline,null,cljs.core.cst$kw$silent,null,cljs.core.cst$kw$custom,null,cljs.core.cst$kw$abort,null,cljs.core.cst$kw$http_DASH_error,null,cljs.core.cst$kw$network_DASH_error,null,cljs.core.cst$kw$not_DASH_found,null,cljs.core.cst$kw$exception,null,cljs.core.cst$kw$timeout,null,cljs.core.cst$kw$middleware_DASH_failure,null,cljs.core.cst$kw$access_DASH_denied,null,cljs.core.cst$kw$none,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [cljs.core.cst$kw$offline,null,cljs.core.cst$kw$silent,null,cljs.core.cst$kw$custom,null,cljs.core.cst$kw$abort,null,cljs.core.cst$kw$http_DASH_error,null,cljs.core.cst$kw$network_DASH_error,null,cljs.core.cst$kw$not_DASH_found,null,cljs.core.cst$kw$exception,null,cljs.core.cst$kw$timeout,null,cljs.core.cst$kw$middleware_DASH_failure,null,cljs.core.cst$kw$access_DASH_denied,null,cljs.core.cst$kw$none,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_text,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_code,cljs.core.cst$sym$cljs$core_SLASH_pos_DASH_int_QMARK_,cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_text,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_outgoing_DASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_request);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_phase,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sending,null,cljs.core.cst$kw$receiving,null,cljs.core.cst$kw$complete,null,cljs.core.cst$kw$failed,null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sending,null,cljs.core.cst$kw$receiving,null,cljs.core.cst$kw$complete,null,cljs.core.cst$kw$failed,null], null), null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_event,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_response,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req_DASH_un,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$fulcro$client$network_SLASH_outgoing_DASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_code,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_text,cljs.core.cst$kw$fulcro$client$network_SLASH_error,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_text], null),cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_phase,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_event], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$fulcro$client$network_SLASH_outgoing_DASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_code,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_text,cljs.core.cst$kw$fulcro$client$network_SLASH_error,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_phase,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_event], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__21752){
return cljs.core.map_QMARK_(G__21752);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$transaction);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$outgoing_DASH_request);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$body);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$status_DASH_code);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$status_DASH_text);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$error);
}),(function (G__21752){
return cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$error_DASH_text);
})], null),(function (G__21752){
return (cljs.core.map_QMARK_(G__21752)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$transaction)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$outgoing_DASH_request)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$body)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$status_DASH_code)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$status_DASH_text)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$error)) && (cljs.core.contains_QMARK_(G__21752,cljs.core.cst$kw$error_DASH_text));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress_DASH_phase,cljs.core.cst$kw$progress_DASH_event], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$fulcro$client$network_SLASH_outgoing_DASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_body,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_code,cljs.core.cst$kw$fulcro$client$network_SLASH_status_DASH_text,cljs.core.cst$kw$fulcro$client$network_SLASH_error,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_text], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$transaction,cljs.core.cst$kw$outgoing_DASH_request,cljs.core.cst$kw$body,cljs.core.cst$kw$status_DASH_code,cljs.core.cst$kw$status_DASH_text,cljs.core.cst$kw$error,cljs.core.cst$kw$error_DASH_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_phase,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_event], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$transaction)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$outgoing_DASH_request)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$body)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$status_DASH_code)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$status_DASH_text)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$error)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$error_DASH_text))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio_DASH_event,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$network_SLASH_response,cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null),cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_request_DASH_middleware,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_request),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_request),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_request),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_request], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_request], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_request),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_request,null,null),cljs.core.cst$kw$fulcro$client$network_SLASH_request,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$any_QMARK_,cljs.core.cst$sym$set_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21768){
return cljs.core.map_QMARK_(G__21768);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_extract_DASH_response,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx,cljs.core.cst$kw$req,cljs.core.cst$kw$xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$tx,cljs.core.cst$kw$fulcro$client$network_SLASH_transaction,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$network_SLASH_response,cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null),cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null,null));
/**
 * Returns true if the given response looks like a low-level network error.
 */
fulcro.client.network.was_network_error_QMARK_ = (function fulcro$client$network$was_network_error_QMARK_(p__21782){
var map__21783 = p__21782;
var map__21783__$1 = ((((!((map__21783 == null)))?((((map__21783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21783):map__21783);
var status_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21783__$1,cljs.core.cst$kw$status_DASH_code);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21783__$1,cljs.core.cst$kw$error);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$http_DASH_error,error));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_was_DASH_network_DASH_error_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$r,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,cljs.core.boolean_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_boolean_QMARK_,null,null,null));
fulcro.client.network.clear_request_STAR_ = (function fulcro$client$network$clear_request_STAR_(active_requests,id,xhrio){
if(cljs.core.every_QMARK_((function (p1__21803_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio,p1__21803_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_requests,id))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(active_requests,id);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(active_requests,id,cljs.core.disj,xhrio);
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_clear_DASH_request_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$id,cljs.core.cst$kw$xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,cljs.core.cst$sym$any_QMARK_,cljs.core.cst$sym$set_QMARK_),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,(function (G__21836){
return cljs.core.map_QMARK_(G__21836);
}),cljs.core.cst$kw$kind,cljs.core.map_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,(function (i__17969__auto__,v__17970__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__17970__auto__,(0));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_)], null),null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_),null,null,null));
fulcro.client.network.response_extractor_STAR_ = (function fulcro$client$network$response_extractor_STAR_(response_middleware,edn,real_request,xhrio){
return (function (){
var r = fulcro.client.network.extract_response(edn,real_request,xhrio);
try{return (response_middleware.cljs$core$IFn$_invoke$arity$1 ? response_middleware.cljs$core$IFn$_invoke$arity$1(r) : response_middleware.call(null,r));
}catch (e21852){var e = e21852;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,222], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Client response middleware threw an exception. ",e,". Defaulting to raw response."], 0));
}catch (e21853){if((e21853 instanceof Error)){
var e__18456__auto___21861 = e21853;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,222], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___21861], 0));
} else {
throw e21853;

}
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,cljs.core.cst$kw$none,null], null), null),cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(r)))?cljs.core.cst$kw$middleware_DASH_failure:cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(r)),cljs.core.cst$kw$middleware_DASH_exception,e], null)], 0));
}});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_response_DASH_extractor_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mw,cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.core.cst$kw$ret,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_response)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mw,cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mw,cljs.core.cst$kw$tx,cljs.core.cst$kw$req,cljs.core.cst$kw$xhrio], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$mw,cljs.core.cst$kw$fulcro$client$network_SLASH_response_DASH_middleware,cljs.core.cst$kw$tx,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$req,cljs.core.cst$kw$fulcro$client$network_SLASH_request,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_response),cljs.spec.alpha.fspec_impl(null,null,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$fulcro$client$network_SLASH_response,cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null),cljs.core.cst$kw$fulcro$client$network_SLASH_response,null,null,null),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$ret,cljs.core.cst$kw$fulcro$client$network_SLASH_response),null,null,null));
fulcro.client.network.cleanup_routine_STAR_ = (function fulcro$client$network$cleanup_routine_STAR_(abort_id,active_requests,xhrio){
return (function (){
if(cljs.core.truth_(abort_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(active_requests,fulcro.client.network.clear_request_STAR_,abort_id,xhrio);
} else {
}

return fulcro.client.network.xhrio_dispose(xhrio);
});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_cleanup_DASH_routine_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$id,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$fulcro$client$network_SLASH_active_DASH_requests,cljs.core.cst$kw$xhrio,cljs.core.cst$kw$fulcro$client$network_SLASH_xhrio),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.fn_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,null,null,null));
/**
 * Returns a (fn [evt] ) that pulls the response, runs it through middleware, and reports
 * the appropriate results to the raw-ok-handler, and progress-routine. If the middleware fails,
 * it will instaed report to the error-routine (which in turn will report to the raw error handler)
 */
fulcro.client.network.ok_routine_STAR_ = (function fulcro$client$network$ok_routine_STAR_(progress_routine,get_response_fn,raw_ok_handler,error_routine){
return (function (evt){
var map__21897 = (get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null));
var map__21897__$1 = ((((!((map__21897 == null)))?((((map__21897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21897):map__21897);
var r = map__21897__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,cljs.core.cst$kw$error);
var middleware_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,cljs.core.cst$kw$middleware_DASH_exception);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,cljs.core.cst$kw$middleware_DASH_failure)){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,251], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Client middleware threw an exception",middleware_exception], 0));
}catch (e21902){if((e21902 instanceof Error)){
var e__18456__auto___21915 = e21902;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,251], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___21915], 0));
} else {
throw e21902;

}
}
var G__21904_21917 = cljs.core.cst$kw$failed;
var G__21905_21918 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__21904_21917,G__21905_21918) : progress_routine.call(null,G__21904_21917,G__21905_21918));

return (error_routine.cljs$core$IFn$_invoke$arity$1 ? error_routine.cljs$core$IFn$_invoke$arity$1(r) : error_routine.call(null,r));
} else {
var G__21906_21921 = cljs.core.cst$kw$complete;
var G__21907_21922 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__21906_21921,G__21907_21922) : progress_routine.call(null,G__21906_21921,G__21907_21922));

return (raw_ok_handler.cljs$core$IFn$_invoke$arity$1 ? raw_ok_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_ok_handler.call(null,r));
}
});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_ok_DASH_routine_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$get_DASH_response,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$complete_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error_DASH_fn,cljs.core.cst$kw$fn_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$get_DASH_response,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$complete_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error_DASH_fn,cljs.core.cst$kw$fn_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress,cljs.core.cst$kw$get_DASH_response,cljs.core.cst$kw$complete_DASH_fn,cljs.core.cst$kw$error_DASH_fn], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.cst$kw$fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$fn_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$get_DASH_response,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$complete_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error_DASH_fn,cljs.core.cst$kw$fn_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Return a (fn [phase progress-event]) that calls the raw update function with progress and response data merged
 *   together as a response.
 */
fulcro.client.network.progress_routine_STAR_ = (function fulcro$client$network$progress_routine_STAR_(get_response_fn,raw_update_fn){
return (function (phase,evt){
if(cljs.core.truth_(raw_update_fn)){
var G__21934 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$progress_DASH_phase,phase,cljs.core.cst$kw$progress_DASH_event,evt], null),(get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null))], 0));
return (raw_update_fn.cljs$core$IFn$_invoke$arity$1 ? raw_update_fn.cljs$core$IFn$_invoke$arity$1(G__21934) : raw_update_fn.call(null,G__21934));
} else {
return null;
}
});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_progress_DASH_routine_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$response_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$update,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$response_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$update,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response_DASH_fn,cljs.core.cst$kw$update], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$response_DASH_fn,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$update,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Returns a (fn [xhrio-evt]) that pulls the progress and reports it to the progress routine and the raw
 *   error handler.
 */
fulcro.client.network.error_routine_STAR_ = (function fulcro$client$network$error_routine_STAR_(get_response,ok_routine,progress_routine,raw_error_handler){
return (function (evt){
var r = (get_response.cljs$core$IFn$_invoke$arity$0 ? get_response.cljs$core$IFn$_invoke$arity$0() : get_response.call(null));
var G__21952_21959 = cljs.core.cst$kw$failed;
var G__21953_21960 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__21952_21959,G__21953_21960) : progress_routine.call(null,G__21952_21959,G__21953_21960));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),cljs.core.cst$kw$status_DASH_code.cljs$core$IFn$_invoke$arity$1(r))){
return (ok_routine.cljs$core$IFn$_invoke$arity$1 ? ok_routine.cljs$core$IFn$_invoke$arity$1(evt) : ok_routine.call(null,evt));
} else {
return (raw_error_handler.cljs$core$IFn$_invoke$arity$1 ? raw_error_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_error_handler.call(null,r));
}
});
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_error_DASH_routine_STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$get,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$ok,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$get,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$ok,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get,cljs.core.cst$kw$ok,cljs.core.cst$kw$progress,cljs.core.cst$kw$error], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$get,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$ok,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$progress,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_,cljs.core.cst$kw$error,cljs.core.cst$sym$cljs$core_SLASH_fn_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fulcro.client.network.FulcroRemoteI}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.network.FulcroHTTPRemote = (function (url,request_middleware,response_middleware,active_requests,serial_QMARK_,__meta,__extmap,__hash){
this.url = url;
this.request_middleware = request_middleware;
this.response_middleware = response_middleware;
this.active_requests = active_requests;
this.serial_QMARK_ = serial_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k21981,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__21989 = k21981;
var G__21989__$1 = (((G__21989 instanceof cljs.core.Keyword))?G__21989.fqn:null);
switch (G__21989__$1) {
case "url":
return self__.url;

break;
case "request-middleware":
return self__.request_middleware;

break;
case "response-middleware":
return self__.response_middleware;

break;
case "active-requests":
return self__.active_requests;

break;
case "serial?":
return self__.serial_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21981,else__11496__auto__);

}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.network.FulcroHTTPRemote{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_middleware,self__.request_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_middleware,self__.response_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_requests,self__.active_requests],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$serial_QMARK_,self__.serial_QMARK_],null))], null),self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21980){
var self__ = this;
var G__21980__$1 = this;
return (new cljs.core.RecordIter((0),G__21980__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,cljs.core.cst$kw$request_DASH_middleware,cljs.core.cst$kw$response_DASH_middleware,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$serial_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__22005 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (244823968 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__22005(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21982,other21983){
var self__ = this;
var this21982__$1 = this;
return (!((other21983 == null))) && ((this21982__$1.constructor === other21983.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.url,other21983.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.request_middleware,other21983.request_middleware)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.response_middleware,other21983.response_middleware)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.active_requests,other21983.active_requests)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.serial_QMARK_,other21983.serial_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21982__$1.__extmap,other21983.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__22032){
var self__ = this;
var map__22033 = p__22032;
var map__22033__$1 = ((((!((map__22033 == null)))?((((map__22033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22033):map__22033);
var raw_request = map__22033__$1;
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_edn);
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id);
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler);
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22033__$1,cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler);
var this$__$1 = this;
var temp__5455__auto__ = (function (){try{var G__22047 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$headers,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$body,edn,cljs.core.cst$kw$url,self__.url,cljs.core.cst$kw$method,cljs.core.cst$kw$post], null);
return (self__.request_middleware.cljs$core$IFn$_invoke$arity$1 ? self__.request_middleware.cljs$core$IFn$_invoke$arity$1(G__22047) : self__.request_middleware.call(null,G__22047));
}catch (e22041){var e = e22041;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,289], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send aborted due to middleware failure ",e], 0));
}catch (e22044){if((e22044 instanceof Error)){
var e__18456__auto___22202 = e22044;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,289], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___22202], 0));
} else {
throw e22044;

}
}
return null;
}})();
if(cljs.core.truth_(temp__5455__auto__)){
var real_request = temp__5455__auto__;
var xhrio = fulcro.client.network.make_xhrio();
var map__22052 = real_request;
var map__22052__$1 = ((((!((map__22052 == null)))?((((map__22052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22052):map__22052);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052__$1,cljs.core.cst$kw$headers);
var url__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052__$1,cljs.core.cst$kw$url);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22052__$1,cljs.core.cst$kw$method);
var http_verb = clojure.string.upper_case(cljs.core.name((function (){var or__10805__auto__ = method;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$post;
}
})()));
var extract_response = ((function (xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (){
return fulcro.client.network.extract_response(body,real_request,xhrio);
});})(xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
var extract_response_mw = fulcro.client.network.response_extractor_STAR_(self__.response_middleware,edn,real_request,xhrio);
var gc_network_resources = fulcro.client.network.cleanup_routine_STAR_(abort_id,self__.active_requests,xhrio);
var progress_routine = fulcro.client.network.progress_routine_STAR_(extract_response,progress_handler);
var ok_routine = fulcro.client.network.ok_routine_STAR_(progress_routine,extract_response_mw,ok_handler,error_handler);
var error_routine = fulcro.client.network.error_routine_STAR_(extract_response_mw,ok_routine,progress_routine,error_handler);
var with_cleanup = ((function (xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (f){
return ((function (xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (evt){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(evt) : f.call(null,evt));
}finally {(gc_network_resources.cljs$core$IFn$_invoke$arity$0 ? gc_network_resources.cljs$core$IFn$_invoke$arity$0() : gc_network_resources.call(null));
}});
;})(xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
});})(xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
if(cljs.core.truth_(abort_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.active_requests,cljs.core.update,abort_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xhrio], 0));
} else {
}

if(cljs.core.truth_(progress_handler)){
fulcro.client.network.xhrio_enable_progress_events(xhrio);

var G__22067_22238 = xhrio;
var G__22068_22239 = goog.net.EventType.DOWNLOAD_PROGRESS;
var G__22069_22240 = ((function (G__22067_22238,G__22068_22239,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (p1__21978_SHARP_){
var G__22070 = cljs.core.cst$kw$receiving;
var G__22071 = p1__21978_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__22070,G__22071) : progress_routine.call(null,G__22070,G__22071));
});})(G__22067_22238,G__22068_22239,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
goog.events.listen(G__22067_22238,G__22068_22239,G__22069_22240);

var G__22072_22251 = xhrio;
var G__22073_22253 = goog.net.EventType.UPLOAD_PROGRESS;
var G__22074_22254 = ((function (G__22072_22251,G__22073_22253,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (p1__21979_SHARP_){
var G__22075 = cljs.core.cst$kw$sending;
var G__22076 = p1__21979_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__22075,G__22076) : progress_routine.call(null,G__22075,G__22076));
});})(G__22072_22251,G__22073_22253,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
goog.events.listen(G__22072_22251,G__22073_22253,G__22074_22254);
} else {
}

var G__22077_22259 = xhrio;
var G__22078_22260 = goog.net.EventType.SUCCESS;
var G__22079_22261 = with_cleanup(ok_routine);
goog.events.listen(G__22077_22259,G__22078_22260,G__22079_22261);

var G__22080_22263 = xhrio;
var G__22081_22264 = goog.net.EventType.ABORT;
var G__22082_22265 = with_cleanup(((function (G__22080_22263,G__22081_22264,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (){
var G__22083 = cljs.core.PersistentArrayMap.EMPTY;
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__22083) : ok_handler.call(null,G__22083));
});})(G__22080_22263,G__22081_22264,xhrio,map__22052,map__22052__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__22033,map__22033__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
);
goog.events.listen(G__22080_22263,G__22081_22264,G__22082_22265);

var G__22085_22273 = xhrio;
var G__22086_22274 = goog.net.EventType.ERROR;
var G__22087_22275 = with_cleanup(error_routine);
goog.events.listen(G__22085_22273,G__22086_22274,G__22087_22275);

return fulcro.client.network.xhrio_send(xhrio,url__$1,http_verb,body,headers);
} else {
var G__22089 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$abort,cljs.core.cst$kw$error_DASH_text,"Transmission was aborted because the request middleware threw an exception"], null);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__22089) : error_handler.call(null,G__22089));
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$abort$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.active_requests),id);
if(cljs.core.truth_(temp__5457__auto__)){
var xhrios = temp__5457__auto__;
var seq__22090 = cljs.core.seq(xhrios);
var chunk__22091 = null;
var count__22092 = (0);
var i__22093 = (0);
while(true){
if((i__22093 < count__22092)){
var xhrio = chunk__22091.cljs$core$IIndexed$_nth$arity$2(null,i__22093);
fulcro.client.network.xhrio_abort(xhrio);

var G__22296 = seq__22090;
var G__22297 = chunk__22091;
var G__22298 = count__22092;
var G__22299 = (i__22093 + (1));
seq__22090 = G__22296;
chunk__22091 = G__22297;
count__22092 = G__22298;
i__22093 = G__22299;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__22090);
if(temp__5457__auto____$1){
var seq__22090__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__22090__$1)){
var c__11736__auto__ = cljs.core.chunk_first(seq__22090__$1);
var G__22300 = cljs.core.chunk_rest(seq__22090__$1);
var G__22301 = c__11736__auto__;
var G__22302 = cljs.core.count(c__11736__auto__);
var G__22303 = (0);
seq__22090 = G__22300;
chunk__22091 = G__22301;
count__22092 = G__22302;
i__22093 = G__22303;
continue;
} else {
var xhrio = cljs.core.first(seq__22090__$1);
fulcro.client.network.xhrio_abort(xhrio);

var G__22308 = cljs.core.next(seq__22090__$1);
var G__22309 = null;
var G__22310 = (0);
var G__22311 = (0);
seq__22090 = G__22308;
chunk__22091 = G__22309;
count__22092 = G__22310;
i__22093 = G__22311;
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

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$serial_QMARK_,null,cljs.core.cst$kw$active_DASH_requests,null,cljs.core.cst$kw$request_DASH_middleware,null,cljs.core.cst$kw$response_DASH_middleware,null,cljs.core.cst$kw$url,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__21980){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__22104 = cljs.core.keyword_identical_QMARK_;
var expr__22105 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__22107 = cljs.core.cst$kw$url;
var G__22109 = expr__22105;
return (pred__22104.cljs$core$IFn$_invoke$arity$2 ? pred__22104.cljs$core$IFn$_invoke$arity$2(G__22107,G__22109) : pred__22104.call(null,G__22107,G__22109));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(G__21980,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22115 = cljs.core.cst$kw$request_DASH_middleware;
var G__22116 = expr__22105;
return (pred__22104.cljs$core$IFn$_invoke$arity$2 ? pred__22104.cljs$core$IFn$_invoke$arity$2(G__22115,G__22116) : pred__22104.call(null,G__22115,G__22116));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,G__21980,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22120 = cljs.core.cst$kw$response_DASH_middleware;
var G__22121 = expr__22105;
return (pred__22104.cljs$core$IFn$_invoke$arity$2 ? pred__22104.cljs$core$IFn$_invoke$arity$2(G__22120,G__22121) : pred__22104.call(null,G__22120,G__22121));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,G__21980,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22124 = cljs.core.cst$kw$active_DASH_requests;
var G__22125 = expr__22105;
return (pred__22104.cljs$core$IFn$_invoke$arity$2 ? pred__22104.cljs$core$IFn$_invoke$arity$2(G__22124,G__22125) : pred__22104.call(null,G__22124,G__22125));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,G__21980,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22127 = cljs.core.cst$kw$serial_QMARK_;
var G__22128 = expr__22105;
return (pred__22104.cljs$core$IFn$_invoke$arity$2 ? pred__22104.cljs$core$IFn$_invoke$arity$2(G__22127,G__22128) : pred__22104.call(null,G__22127,G__22128));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,G__21980,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__21980),null));
}
}
}
}
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_middleware,self__.request_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response_DASH_middleware,self__.response_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active_DASH_requests,self__.active_requests],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$serial_QMARK_,self__.serial_QMARK_],null))], null),self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__21980){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,G__21980,self__.__extmap,self__.__hash));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.network.FulcroHTTPRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$url,cljs.core.cst$sym$request_DASH_middleware,cljs.core.cst$sym$response_DASH_middleware,cljs.core.cst$sym$active_DASH_requests,cljs.core.cst$sym$serial_QMARK_], null);
});

fulcro.client.network.FulcroHTTPRemote.cljs$lang$type = true;

fulcro.client.network.FulcroHTTPRemote.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.network/FulcroHTTPRemote");
});

fulcro.client.network.FulcroHTTPRemote.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client.network/FulcroHTTPRemote");
});

fulcro.client.network.__GT_FulcroHTTPRemote = (function fulcro$client$network$__GT_FulcroHTTPRemote(url,request_middleware,response_middleware,active_requests,serial_QMARK_){
return (new fulcro.client.network.FulcroHTTPRemote(url,request_middleware,response_middleware,active_requests,serial_QMARK_,null,null,null));
});

fulcro.client.network.map__GT_FulcroHTTPRemote = (function fulcro$client$network$map__GT_FulcroHTTPRemote(G__21985){
return (new fulcro.client.network.FulcroHTTPRemote(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__21985),cljs.core.cst$kw$request_DASH_middleware.cljs$core$IFn$_invoke$arity$1(G__21985),cljs.core.cst$kw$response_DASH_middleware.cljs$core$IFn$_invoke$arity$1(G__21985),cljs.core.cst$kw$active_DASH_requests.cljs$core$IFn$_invoke$arity$1(G__21985),cljs.core.cst$kw$serial_QMARK_.cljs$core$IFn$_invoke$arity$1(G__21985),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21985,cljs.core.cst$kw$url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_middleware,cljs.core.cst$kw$response_DASH_middleware,cljs.core.cst$kw$active_DASH_requests,cljs.core.cst$kw$serial_QMARK_], 0))),null));
});

cljs.spec.alpha.def_impl(cljs.core.cst$sym$fulcro$client$network_SLASH_transmit,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$raw_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$raw_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote,cljs.core.cst$kw$raw_DASH_request], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__22350){
return cljs.core.map_QMARK_(G__22350);
}),(function (G__22350){
return cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_edn);
}),(function (G__22350){
return cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler);
}),(function (G__22350){
return cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler);
})], null),(function (G__22350){
return (cljs.core.map_QMARK_(G__22350)) && (cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_edn)) && (cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler)) && (cljs.core.contains_QMARK_(G__22350,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$network_SLASH_edn)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler)),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,cljs.core.cst$sym$_PERCENT_,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null))], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$remote,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$raw_DASH_request,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_edn,cljs.core.cst$kw$fulcro$client$network_SLASH_ok_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_error_DASH_handler], null),cljs.core.cst$kw$opt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fulcro$client$network_SLASH_progress_DASH_handler,cljs.core.cst$kw$fulcro$client$network_SLASH_abort_DASH_id], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
/**
 * Create a remote that (by default) communicates with the given url.
 * 
 *   The request middleware is a `(fn [request] modified-request)`. The `request` will have `:url`, `:body`, `:method`, and `:headers`. The
 *   request middleware defaults to `wrap-fulcro-request` (which encodes the request in transit+json). The result of this
 *   middleware chain on the outgoing request becomes the real outgoing request. It is allowed to modify the `url`.
 *   If the the request middleware returns a corrupt request or throws an exception then the remote code
 *   will immediately abort the request. The return value of the middleware will be used to generate a request to `:url`,
 *   with `:method` (e.g. :post), and the given headers. The body will be sent as-is without further translation.
 * 
 *   `response-middleware` is a function that returns a function `(fn [response] mod-response)` and
 *   defaults to `wrap-fulcro-response` which decodes the raw response and transforms it back to a response that Fulcro can merge.
 *   The response will be a map containing the `:transaction`, which is the
 *   original Fulcro EDN request; `:outgoing-request` which is the exact request sent on the network; `:body`, which
 *   is the raw data of the response. Additionally, there will be one or more of the following to indicate low-level
 *   details of the result: `:status-code`, `:status-text`, `:error-code` (one of :none, :exception, :http-error, :abort, or :timeout),
 *   and `:error-text`.  Middleware is allowed to morph any of this to suit its needs.
 * 
 *   A result with a 200 status code will result in a merge using the resulting response's `:transaction` as the query,
 *   and the `:body` as the EDN to merge. If the status code is anything else then the details of the response will be
 *   used when triggering the built-in error handling (e.g. fallbacks, global error handler, etc.).
 */
fulcro.client.network.fulcro_http_remote = (function fulcro$client$network$fulcro_http_remote(p__22399){
var map__22400 = p__22399;
var map__22400__$1 = ((((!((map__22400 == null)))?((((map__22400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22400):map__22400);
var options = map__22400__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22400__$1,cljs.core.cst$kw$url,"/api");
var request_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22400__$1,cljs.core.cst$kw$request_DASH_middleware,fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0());
var response_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22400__$1,cljs.core.cst$kw$response_DASH_middleware,fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0());
return fulcro.client.network.map__GT_FulcroHTTPRemote(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request_DASH_middleware,request_middleware,cljs.core.cst$kw$response_DASH_middleware,response_middleware,cljs.core.cst$kw$active_DASH_requests,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0)));
});

/**
 * @interface
 */
fulcro.client.network.NetworkBehavior = function(){};

/**
 * DEPRECATED. Returns true if the network is configured to desire one request at a time.
 */
fulcro.client.network.serialize_requests_QMARK_ = (function fulcro$client$network$serialize_requests_QMARK_(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 == null)))){
return this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.serialize_requests_QMARK_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.network.serialize_requests_QMARK_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("NetworkBehavior.serialize-requests?",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.network.ProgressiveTransfer = function(){};

/**
 * DEPRECATED. Send EDN. The update-callback will merge the state
 *   given to it. The done-callback will merge the state given to it, and indicates completion. See
 *   `fulcro.client.ui.file-upload/FileUploadNetwork` for an example.
 */
fulcro.client.network.updating_send = (function fulcro$client$network$updating_send(this$,edn,done_callback,error_callback,update_callback){
if((!((this$ == null))) && (!((this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5 == null)))){
return this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5(this$,edn,done_callback,error_callback,update_callback);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.updating_send[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$5 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__11539__auto__.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
var m__11539__auto____$1 = (fulcro.client.network.updating_send["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__11539__auto____$1.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
throw cljs.core.missing_protocol("ProgressiveTransfer.updating-send",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.network.FulcroNetwork = function(){};

/**
 * DEPRECATED. Send EDN. Calls either the done or error callback when the send is done. You must call one of those only once.
 *   Implement ProgressiveTransfer if you want to do progress updates during network transmission.
 */
fulcro.client.network.send = (function fulcro$client$network$send(this$,edn,done_callback,error_callback){
if((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroNetwork$send$arity$4 == null)))){
return this$.fulcro$client$network$FulcroNetwork$send$arity$4(this$,edn,done_callback,error_callback);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.send[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__11539__auto__.call(null,this$,edn,done_callback,error_callback));
} else {
var m__11539__auto____$1 = (fulcro.client.network.send["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__11539__auto____$1.call(null,this$,edn,done_callback,error_callback));
} else {
throw cljs.core.missing_protocol("FulcroNetwork.send",this$);
}
}
}
});

/**
 * Starts the network.
 */
fulcro.client.network.start = (function fulcro$client$network$start(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroNetwork$start$arity$1 == null)))){
return this$.fulcro$client$network$FulcroNetwork$start$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.start[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro.client.network.start["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroNetwork.start",this$);
}
}
}
});


/**
 * @interface
 */
fulcro.client.network.IXhrIOCallbacks = function(){};

/**
 * Called by XhrIo on OK
 */
fulcro.client.network.response_ok = (function fulcro$client$network$response_ok(this$,xhrio,ok_cb){
if((!((this$ == null))) && (!((this$.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3 == null)))){
return this$.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.response_ok[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__11539__auto__.call(null,this$,xhrio,ok_cb));
} else {
var m__11539__auto____$1 = (fulcro.client.network.response_ok["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__11539__auto____$1.call(null,this$,xhrio,ok_cb));
} else {
throw cljs.core.missing_protocol("IXhrIOCallbacks.response-ok",this$);
}
}
}
});

/**
 * Called by XhrIo on ERROR
 */
fulcro.client.network.response_error = (function fulcro$client$network$response_error(this$,xhrio,err_cb){
if((!((this$ == null))) && (!((this$.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3 == null)))){
return this$.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro.client.network.response_error[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__11539__auto__.call(null,this$,xhrio,err_cb));
} else {
var m__11539__auto____$1 = (fulcro.client.network.response_error["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__11539__auto____$1.call(null,this$,xhrio,err_cb));
} else {
throw cljs.core.missing_protocol("IXhrIOCallbacks.response-error",this$);
}
}
}
});

/**
 * DEPRECATED. An XhrIo-specific implementation method for interpreting the server response.
 */
fulcro.client.network.parse_response = (function fulcro$client$network$parse_response(var_args){
var G__22535 = arguments.length;
switch (G__22535) {
case 1:
return fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$1 = (function (xhr_io){
return fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,null);
});

fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2 = (function (xhr_io,read_handlers){
try{var text = xhr_io.getResponseText();
var base_handlers = new cljs.core.PersistentArrayMap(null, 2, ["f",((function (text){
return (function (v){
return parseFloat(v);
});})(text))
,"u",cljs.core.uuid], null);
var handlers = ((cljs.core.map_QMARK_(read_handlers))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_handlers,read_handlers], 0)):base_handlers);
if(clojure.string.blank_QMARK_(text)){
return xhr_io.getStatus();
} else {
return cognitect.transit.read(fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),xhr_io.getResponseText());
}
}catch (e22537){if((e22537 instanceof Object)){
var e = e22537;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,(404),cljs.core.cst$kw$message,"Server down"], null);
} else {
throw e22537;

}
}});

fulcro.client.network.parse_response.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {fulcro.client.network.IXhrIOCallbacks}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.network.Network = (function (url,request_transform,global_error_callback,complete_app,transit_handlers,__meta,__extmap,__hash){
this.url = url;
this.request_transform = request_transform;
this.global_error_callback = global_error_callback;
this.complete_app = complete_app;
this.transit_handlers = transit_handlers;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k22563,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__22588 = k22563;
var G__22588__$1 = (((G__22588 instanceof cljs.core.Keyword))?G__22588.fqn:null);
switch (G__22588__$1) {
case "url":
return self__.url;

break;
case "request-transform":
return self__.request_transform;

break;
case "global-error-callback":
return self__.global_error_callback;

break;
case "complete-app":
return self__.complete_app;

break;
case "transit-handlers":
return self__.transit_handlers;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22563,else__11496__auto__);

}
});

fulcro.client.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.network.Network{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22562){
var self__ = this;
var G__22562__$1 = this;
return (new cljs.core.RecordIter((0),G__22562__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,read_handlers);
if(cljs.core.truth_(valid_data_callback)){
var G__22608 = (function (){var or__10805__auto__ = query_response;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (valid_data_callback.cljs$core$IFn$_invoke$arity$1 ? valid_data_callback.cljs$core$IFn$_invoke$arity$1(G__22608) : valid_data_callback.call(null,G__22608));
} else {
return null;
}
}finally {xhr_io.dispose();
}});

fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3 = (function (this$,xhr_io,error_callback){
var self__ = this;
var this$__$1 = this;
try{var status = xhr_io.getStatus();
var log_and_dispatch_error = ((function (status,this$__$1){
return (function (str,error){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,421], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([str], 0));
}catch (e22613){if((e22613 instanceof Error)){
var e__18456__auto___22787 = e22613;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,421], null),cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto___22787], 0));
} else {
throw e22613;

}
}
(error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1(error) : error_callback.call(null,error));

if(cljs.core.truth_(cljs.core.deref(self__.global_error_callback))){
var fexpr__22615 = cljs.core.deref(self__.global_error_callback);
return (fexpr__22615.cljs$core$IFn$_invoke$arity$2 ? fexpr__22615.cljs$core$IFn$_invoke$arity$2(status,error) : fexpr__22615.call(null,status,error));
} else {
return null;
}
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error(["NETWORK ERROR: No connection established."].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$network], null));
} else {
return log_and_dispatch_error(["SERVER ERROR CODE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,self__.transit_handlers));
}
}finally {xhr_io.dispose();
}});

fulcro.client.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__22631 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (-917723374 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__22631(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22564,other22565){
var self__ = this;
var this22564__$1 = this;
return (!((other22565 == null))) && ((this22564__$1.constructor === other22565.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.url,other22565.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.request_transform,other22565.request_transform)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.global_error_callback,other22565.global_error_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.complete_app,other22565.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.transit_handlers,other22565.transit_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22564__$1.__extmap,other22565.__extmap));
});

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
var xhrio = fulcro.client.network.make_xhrio();
var handlers = (function (){var or__10805__auto__ = cljs.core.cst$kw$write.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__22644 = (function (){var G__22647 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,edn,cljs.core.cst$kw$headers,headers], null);
if(cljs.core.truth_(self__.request_transform)){
return (self__.request_transform.cljs$core$IFn$_invoke$arity$1 ? self__.request_transform.cljs$core$IFn$_invoke$arity$1(G__22647) : self__.request_transform.call(null,G__22647));
} else {
return G__22647;
}
})();
var map__22644__$1 = ((((!((map__22644 == null)))?((((map__22644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22644):map__22644);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,cljs.core.cst$kw$body);
var headers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,cljs.core.cst$kw$headers);
var post_data = cognitect.transit.write(fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js(headers__$1);
var G__22651_22826 = xhrio;
var G__22652_22827 = goog.net.EventType.SUCCESS;
var G__22653_22828 = ((function (G__22651_22826,G__22652_22827,xhrio,handlers,headers,map__22644,map__22644__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3(null,xhrio,ok);
});})(G__22651_22826,G__22652_22827,xhrio,handlers,headers,map__22644,map__22644__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__22651_22826,G__22652_22827,G__22653_22828);

var G__22664_22832 = xhrio;
var G__22665_22833 = goog.net.EventType.ERROR;
var G__22666_22834 = ((function (G__22664_22832,G__22665_22833,xhrio,handlers,headers,map__22644,map__22644__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3(null,xhrio,error);
});})(G__22664_22832,G__22665_22833,xhrio,handlers,headers,map__22644,map__22644__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__22664_22832,G__22665_22833,G__22666_22834);

return xhrio.send(self__.url,"POST",post_data,headers__$2);
});

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

fulcro.client.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$transit_DASH_handlers,null,cljs.core.cst$kw$global_DASH_error_DASH_callback,null,cljs.core.cst$kw$request_DASH_transform,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$complete_DASH_app,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__22562){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__22685 = cljs.core.keyword_identical_QMARK_;
var expr__22686 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__22688 = cljs.core.cst$kw$url;
var G__22689 = expr__22686;
return (pred__22685.cljs$core$IFn$_invoke$arity$2 ? pred__22685.cljs$core$IFn$_invoke$arity$2(G__22688,G__22689) : pred__22685.call(null,G__22688,G__22689));
})())){
return (new fulcro.client.network.Network(G__22562,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22692 = cljs.core.cst$kw$request_DASH_transform;
var G__22693 = expr__22686;
return (pred__22685.cljs$core$IFn$_invoke$arity$2 ? pred__22685.cljs$core$IFn$_invoke$arity$2(G__22692,G__22693) : pred__22685.call(null,G__22692,G__22693));
})())){
return (new fulcro.client.network.Network(self__.url,G__22562,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22695 = cljs.core.cst$kw$global_DASH_error_DASH_callback;
var G__22696 = expr__22686;
return (pred__22685.cljs$core$IFn$_invoke$arity$2 ? pred__22685.cljs$core$IFn$_invoke$arity$2(G__22695,G__22696) : pred__22685.call(null,G__22695,G__22696));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,G__22562,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22698 = cljs.core.cst$kw$complete_DASH_app;
var G__22699 = expr__22686;
return (pred__22685.cljs$core$IFn$_invoke$arity$2 ? pred__22685.cljs$core$IFn$_invoke$arity$2(G__22698,G__22699) : pred__22685.call(null,G__22698,G__22699));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__22562,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22700 = cljs.core.cst$kw$transit_DASH_handlers;
var G__22701 = expr__22686;
return (pred__22685.cljs$core$IFn$_invoke$arity$2 ? pred__22685.cljs$core$IFn$_invoke$arity$2(G__22700,G__22701) : pred__22685.call(null,G__22700,G__22701));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__22562,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__22562),null));
}
}
}
}
}
});

fulcro.client.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__22562){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__22562,self__.__extmap,self__.__hash));
});

fulcro.client.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.network.Network.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

fulcro.client.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$url,cljs.core.cst$sym$request_DASH_transform,cljs.core.cst$sym$global_DASH_error_DASH_callback,cljs.core.cst$sym$complete_DASH_app,cljs.core.cst$sym$transit_DASH_handlers], null);
});

fulcro.client.network.Network.cljs$lang$type = true;

fulcro.client.network.Network.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.network/Network");
});

fulcro.client.network.Network.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client.network/Network");
});

fulcro.client.network.__GT_Network = (function fulcro$client$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new fulcro.client.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

fulcro.client.network.map__GT_Network = (function fulcro$client$network$map__GT_Network(G__22573){
return (new fulcro.client.network.Network(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__22573),cljs.core.cst$kw$request_DASH_transform.cljs$core$IFn$_invoke$arity$1(G__22573),cljs.core.cst$kw$global_DASH_error_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__22573),cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__22573),cljs.core.cst$kw$transit_DASH_handlers.cljs$core$IFn$_invoke$arity$1(G__22573),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22573,cljs.core.cst$kw$url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], 0))),null));
});

/**
 * DERECATED: Use `fulcro-http-remote` instead.
 * 
 *   Build a Fulcro Network object using the default implementation.
 * 
 *   Features:
 * 
 *   - `:url` is the target URL suffix (URI) on the server for network requests. defaults to /api.
 *   - `:request-transform` is a (fn [{:keys [body headers] :as req}] req') to transform arbitrary requests (e.g. to add things like auth headers)
 *   - `:global-error-callback` is a global error callback (fn [app-state-map status-code error] ) that is notified when a 400+ status code or hard network error occurs
 *   - `transit-handlers` is a map of transit handlers to install on the reader, such as
 * 
 * `{ :read { "thing" (fn [wire-value] (convert wire-value))) }
 *    :write { Thing (ThingHandler.) } }`
 * 
 * where:
 * 
 * (defrecord Thing [foo])
 * 
 * (deftype ThingHandler []
 *   Object
 *   (tag [_ _] "thing")
 *   (rep [_ thing] (make-raw thing))
 *   (stringRep [_ _] nil)))
 *   
 */
fulcro.client.network.make_fulcro_network = (function fulcro$client$network$make_fulcro_network(var_args){
var args__12091__auto__ = [];
var len__12084__auto___22890 = arguments.length;
var i__12085__auto___22891 = (0);
while(true){
if((i__12085__auto___22891 < len__12084__auto___22890)){
args__12091__auto__.push((arguments[i__12085__auto___22891]));

var G__22892 = (i__12085__auto___22891 + (1));
i__12085__auto___22891 = G__22892;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22880){
var map__22881 = p__22880;
var map__22881__$1 = ((((!((map__22881 == null)))?((((map__22881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22881):map__22881);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.cst$kw$request_DASH_transform);
var global_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.cst$kw$global_DASH_error_DASH_callback);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.cst$kw$transit_DASH_handlers);
return fulcro.client.network.map__GT_Network(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(global_error_callback)], null));
});

fulcro.client.network.make_fulcro_network.cljs$lang$maxFixedArity = (1);

fulcro.client.network.make_fulcro_network.cljs$lang$applyTo = (function (seq22874){
var G__22875 = cljs.core.first(seq22874);
var seq22874__$1 = cljs.core.next(seq22874);
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic(G__22875,seq22874__$1);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
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
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.network.MockNetwork = (function (complete_app,__meta,__extmap,__hash){
this.complete_app = complete_app;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11493__auto__,k__11494__auto__){
var self__ = this;
var this__11493__auto____$1 = this;
return this__11493__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11494__auto__,null);
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11495__auto__,k22916,else__11496__auto__){
var self__ = this;
var this__11495__auto____$1 = this;
var G__22928 = k22916;
var G__22928__$1 = (((G__22928 instanceof cljs.core.Keyword))?G__22928.fqn:null);
switch (G__22928__$1) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22916,else__11496__auto__);

}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11507__auto__,writer__11508__auto__,opts__11509__auto__){
var self__ = this;
var this__11507__auto____$1 = this;
var pr_pair__11510__auto__ = ((function (this__11507__auto____$1){
return (function (keyval__11511__auto__){
return cljs.core.pr_sequential_writer(writer__11508__auto__,cljs.core.pr_writer,""," ","",opts__11509__auto__,keyval__11511__auto__);
});})(this__11507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11508__auto__,pr_pair__11510__auto__,"#fulcro.client.network.MockNetwork{",", ","}",opts__11509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22915){
var self__ = this;
var G__22915__$1 = this;
return (new cljs.core.RecordIter((0),G__22915__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_app], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11491__auto__){
var self__ = this;
var this__11491__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11488__auto__){
var self__ = this;
var this__11488__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11497__auto__){
var self__ = this;
var this__11497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11489__auto__){
var self__ = this;
var this__11489__auto____$1 = this;
var h__11261__auto__ = self__.__hash;
if(!((h__11261__auto__ == null))){
return h__11261__auto__;
} else {
var h__11261__auto____$1 = (function (){var fexpr__22941 = ((function (h__11261__auto__,this__11489__auto____$1){
return (function (coll__11490__auto__){
return (374155305 ^ cljs.core.hash_unordered_coll(coll__11490__auto__));
});})(h__11261__auto__,this__11489__auto____$1))
;
return fexpr__22941(this__11489__auto____$1);
})();
self__.__hash = h__11261__auto____$1;

return h__11261__auto____$1;
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22918,other22919){
var self__ = this;
var this22918__$1 = this;
return (!((other22919 == null))) && ((this22918__$1.constructor === other22919.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22918__$1.complete_app,other22919.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22918__$1.__extmap,other22919.__extmap));
});

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,482], null),cljs.core.cst$kw$info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ignored (mock) Network request ",edn], 0));
}catch (e22955){if((e22955 instanceof Error)){
var e__18456__auto__ = e22955;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"fulcro.client.network",cljs.core.cst$kw$line,482], null),cljs.core.cst$kw$info,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__18456__auto__], 0));
} else {
throw e22955;

}
}});

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11502__auto__,k__11503__auto__){
var self__ = this;
var this__11502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$complete_DASH_app,null], null), null),k__11503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11502__auto____$1),self__.__meta),k__11503__auto__);
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11503__auto__)),null));
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11500__auto__,k__11501__auto__,G__22915){
var self__ = this;
var this__11500__auto____$1 = this;
var pred__22961 = cljs.core.keyword_identical_QMARK_;
var expr__22962 = k__11501__auto__;
if(cljs.core.truth_((function (){var G__22964 = cljs.core.cst$kw$complete_DASH_app;
var G__22965 = expr__22962;
return (pred__22961.cljs$core$IFn$_invoke$arity$2 ? pred__22961.cljs$core$IFn$_invoke$arity$2(G__22964,G__22965) : pred__22961.call(null,G__22964,G__22965));
})())){
return (new fulcro.client.network.MockNetwork(G__22915,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11501__auto__,G__22915),null));
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11505__auto__){
var self__ = this;
var this__11505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11492__auto__,G__22915){
var self__ = this;
var this__11492__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,G__22915,self__.__extmap,self__.__hash));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11498__auto__,entry__11499__auto__){
var self__ = this;
var this__11498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11499__auto__)){
return this__11498__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11498__auto____$1,entry__11499__auto__);
}
});

fulcro.client.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$complete_DASH_app], null);
});

fulcro.client.network.MockNetwork.cljs$lang$type = true;

fulcro.client.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__11531__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.network/MockNetwork");
});

fulcro.client.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__11531__auto__,writer__11532__auto__){
return cljs.core._write(writer__11532__auto__,"fulcro.client.network/MockNetwork");
});

fulcro.client.network.__GT_MockNetwork = (function fulcro$client$network$__GT_MockNetwork(complete_app){
return (new fulcro.client.network.MockNetwork(complete_app,null,null,null));
});

fulcro.client.network.map__GT_MockNetwork = (function fulcro$client$network$map__GT_MockNetwork(G__22921){
return (new fulcro.client.network.MockNetwork(cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__22921),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__22921,cljs.core.cst$kw$complete_DASH_app)),null));
});

fulcro.client.network.mock_network = (function fulcro$client$network$mock_network(){
return fulcro.client.network.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY);
});

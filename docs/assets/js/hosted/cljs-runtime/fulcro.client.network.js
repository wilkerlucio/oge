goog.provide('fulcro.client.network');
goog.require('cljs.core');
goog.require('fulcro.logging');
goog.require('cljs.spec.alpha');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('fulcro.transit');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
fulcro.client.network.xhrio_error_states = cljs.core.PersistentHashMap.fromArrays([goog.net.ErrorCode.FILE_NOT_FOUND,goog.net.ErrorCode.NO_ERROR,goog.net.ErrorCode.HTTP_ERROR,goog.net.ErrorCode.EXCEPTION,goog.net.ErrorCode.TIMEOUT,goog.net.ErrorCode.CUSTOM_ERROR,goog.net.ErrorCode.ACCESS_DENIED,goog.net.ErrorCode.OFFLINE,goog.net.ErrorCode.ABORT,goog.net.ErrorCode.FF_SILENT_ERROR],[new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"custom","custom",340151948),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"silent","silent",-1142977785)]);
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
return xhrio.send(url,verb,body,(function (){var G__36750 = headers;
if((G__36750 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__36750);
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
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fulcro.client.network.xhrio_error_states,fulcro.client.network.xhrio_raw_error(xhrio),new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var error__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"http-error","http-error",-1040049553)))))?new cljs.core.Keyword(null,"network-error","network-error",-1095989517):error);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),event.loaded,new cljs.core.Keyword(null,"total","total",1916810418),event.total], null);
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
var G__36772 = arguments.length;
switch (G__36772) {
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
return fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2(progress,new cljs.core.Keyword(null,"overall","overall",-704031008));
});

fulcro.client.network.progress_PERCENT_.cljs$core$IFn$_invoke$arity$2 = (function (progress,phase){
var current_phase = (function (){var G__36778 = progress;
var G__36778__$1 = (((G__36778 == null))?null:new cljs.core.Keyword("fulcro.client.network","progress","fulcro.client.network/progress",2047285121).cljs$core$IFn$_invoke$arity$1(G__36778));
if((G__36778__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618).cljs$core$IFn$_invoke$arity$1(G__36778__$1);
}
})();
var map__36773 = (function (){var G__36782 = progress;
var G__36782__$1 = (((G__36782 == null))?null:new cljs.core.Keyword("fulcro.client.network","progress","fulcro.client.network/progress",2047285121).cljs$core$IFn$_invoke$arity$1(G__36782));
var G__36782__$2 = (((G__36782__$1 == null))?null:new cljs.core.Keyword(null,"progress-event","progress-event",1690048087).cljs$core$IFn$_invoke$arity$1(G__36782__$1));
if((G__36782__$2 == null)){
return null;
} else {
return fulcro.client.network.xhrio_progress(G__36782__$2);
}
})();
var map__36773__$1 = ((((!((map__36773 == null)))?(((((map__36773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36773):map__36773);
var loaded = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36773__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(0));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36773__$1,new cljs.core.Keyword(null,"total","total",1916810418),(0));
var vec__36774 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"complete","complete",-500388775)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"failed","failed",-1397425762)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overall","overall",-704031008),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(49)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overall","overall",-704031008),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sending","sending",-1806704862),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sending","sending",-1806704862),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"sending","sending",-1806704862))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receiving","receiving",829203724),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_phase,new cljs.core.Keyword(null,"receiving","receiving",829203724))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"receiving","receiving",829203724),phase))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100)], null):null))))))));
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36774,(0),null);
var max_pct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36774,(1),null);
var slope = (max_pct - base);
var x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),total))?(1):(loaded / total));
return Math.floor((base + (x * slope)));
});

fulcro.client.network.progress_PERCENT_.cljs$lang$maxFixedArity = 2;

/**
 * Generate a response map from the status of the given xhrio object, which could be in a complete or error state.
 */
fulcro.client.network.extract_response = (function fulcro$client$network$extract_response(tx,request,xhrio){
try{return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),tx,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368),request,new cljs.core.Keyword(null,"body","body",-2049205669),fulcro.client.network.xhrio_response_text(xhrio),new cljs.core.Keyword(null,"status-code","status-code",-1060410130),fulcro.client.network.xhrio_status_code(xhrio),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),fulcro.client.network.xhrio_status_text(xhrio),new cljs.core.Keyword(null,"error","error",-978969032),fulcro.client.network.xhrio_error_code(xhrio),new cljs.core.Keyword(null,"error-text","error-text",2021893718),fulcro.client.network.xhrio_error_text(xhrio)], null);
}catch (e36797){var e = e36797;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),tx,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368),request,new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(0),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),"Internal Exception",new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"error-text","error-text",2021893718),"Internal Exception from XHRIO"], null);
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroRemoteI$transmit$arity$2 == null))))){
return this$.fulcro$client$network$FulcroRemoteI$transmit$arity$2(this$,request);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.transmit[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__4212__auto__.call(null,this$,request));
} else {
var m__4212__auto____$1 = (fulcro.client.network.transmit["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,request) : m__4212__auto____$1.call(null,this$,request));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroRemoteI$abort$arity$2 == null))))){
return this$.fulcro$client$network$FulcroRemoteI$abort$arity$2(this$,abort_id);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.abort[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__4212__auto__.call(null,this$,abort_id));
} else {
var m__4212__auto____$1 = (fulcro.client.network.abort["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__4212__auto____$1.call(null,this$,abort_id));
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
var G__36823 = arguments.length;
switch (G__36823) {
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
var writer = fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(addl_transit_handlers)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),addl_transit_handlers], null):cljs.core.PersistentArrayMap.EMPTY));
return ((function (writer){
return (function (p__36825){
var map__36826 = p__36825;
var map__36826__$1 = ((((!((map__36826 == null)))?(((((map__36826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36826):map__36826);
var request = map__36826__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36826__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = cognitect.transit.write(writer,body);
var headers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers,"Content-Type","application/transit+json");
var G__36828 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([request,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null)], 0));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__36828) : handler.call(null,G__36828));
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
var G__36831 = arguments.length;
switch (G__36831) {
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
var reader = fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null));
return ((function (base_handlers,handlers,reader){
return (function (p__36832){
var map__36833 = p__36832;
var map__36833__$1 = ((((!((map__36833 == null)))?(((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36833):map__36833);
var response = map__36833__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36833__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__36835 = (function (){try{var new_body = ((clojure.string.blank_QMARK_(body))?cljs.core.PersistentArrayMap.EMPTY:cognitect.transit.read(reader,body));
var response__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),new_body);
return response__$1;
}catch (e36836){if((e36836 instanceof Object)){
var e = e36836;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),161], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Transit decode failed!",e], 0));
}catch (e36837){if((e36837 instanceof Error)){
var e__33343__auto___36845 = e36837;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),161], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___36845], 0));
} else {
throw e36837;

}
}
return response;
} else {
throw e36836;

}
}})();
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__36835) : handler.call(null,G__36835));
});
;})(base_handlers,handlers,reader))
});

fulcro.client.network.wrap_fulcro_response.cljs$lang$maxFixedArity = 2;

cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","method","fulcro.client.network/method",-1461521198),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,new cljs.core.Keyword(null,"connect","connect",1232828233),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"trace","trace",-1082747415),null,new cljs.core.Keyword(null,"connect","connect",1232828233),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"head","head",-771383919),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","url","fulcro.client.network/url",992537196),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","headers","fulcro.client.network/headers",952974949),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.string_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__36848){
return cljs.core.map_QMARK_(G__36848);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14798__auto__,v__14799__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14799__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","method","fulcro.client.network/method",-1461521198),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","url","fulcro.client.network/url",992537196),new cljs.core.Keyword("fulcro.client.network","headers","fulcro.client.network/headers",952974949)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","method","fulcro.client.network/method",-1461521198),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","url","fulcro.client.network/url",992537196),new cljs.core.Keyword("fulcro.client.network","headers","fulcro.client.network/headers",952974949)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36861){
return cljs.core.map_QMARK_(G__36861);
}),(function (G__36861){
return cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"method","method",55703592));
}),(function (G__36861){
return cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"body","body",-2049205669));
}),(function (G__36861){
return cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"url","url",276297046));
}),(function (G__36861){
return cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"headers","headers",-835030129));
})], null),(function (G__36861){
return ((cljs.core.map_QMARK_(G__36861)) && (cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"method","method",55703592))) && (cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"body","body",-2049205669))) && (cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"url","url",276297046))) && (cljs.core.contains_QMARK_(G__36861,new cljs.core.Keyword(null,"headers","headers",-835030129))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","method","fulcro.client.network/method",-1461521198),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","url","fulcro.client.network/url",992537196),new cljs.core.Keyword("fulcro.client.network","headers","fulcro.client.network/headers",952974949)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"headers","headers",-835030129)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"method","method",55703592))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"body","body",-2049205669))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"url","url",276297046))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"headers","headers",-835030129)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","error","fulcro.client.network/error",-1674240822),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"offline","offline",-107631935),null,new cljs.core.Keyword(null,"silent","silent",-1142977785),null,new cljs.core.Keyword(null,"custom","custom",340151948),null,new cljs.core.Keyword(null,"abort","abort",521193198),null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),null,new cljs.core.Keyword(null,"network-error","network-error",-1095989517),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null,new cljs.core.Keyword(null,"exception","exception",-335277064),null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),null,new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973),null,new cljs.core.Keyword(null,"access-denied","access-denied",959449406),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"offline","offline",-107631935),null,new cljs.core.Keyword(null,"silent","silent",-1142977785),null,new cljs.core.Keyword(null,"custom","custom",340151948),null,new cljs.core.Keyword(null,"abort","abort",521193198),null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),null,new cljs.core.Keyword(null,"network-error","network-error",-1095989517),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null,new cljs.core.Keyword(null,"exception","exception",-335277064),null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),null,new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973),null,new cljs.core.Keyword(null,"access-denied","access-denied",959449406),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","error-text","fulcro.client.network/error-text",292985712),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","status-code","fulcro.client.network/status-code",2073720728),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","status-text","fulcro.client.network/status-text",-323175296),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","outgoing-request","fulcro.client.network/outgoing-request",1237007322),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","progress-phase","fulcro.client.network/progress-phase",1622192464),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sending","sending",-1806704862),null,new cljs.core.Keyword(null,"receiving","receiving",829203724),null,new cljs.core.Keyword(null,"complete","complete",-500388775),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sending","sending",-1806704862),null,new cljs.core.Keyword(null,"receiving","receiving",829203724),null,new cljs.core.Keyword(null,"complete","complete",-500388775),null,new cljs.core.Keyword(null,"failed","failed",-1397425762),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","progress-event","fulcro.client.network/progress-event",1567427949),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword("fulcro.client.network","outgoing-request","fulcro.client.network/outgoing-request",1237007322),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","status-code","fulcro.client.network/status-code",2073720728),new cljs.core.Keyword("fulcro.client.network","status-text","fulcro.client.network/status-text",-323175296),new cljs.core.Keyword("fulcro.client.network","error","fulcro.client.network/error",-1674240822),new cljs.core.Keyword("fulcro.client.network","error-text","fulcro.client.network/error-text",292985712)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-phase","fulcro.client.network/progress-phase",1622192464),new cljs.core.Keyword("fulcro.client.network","progress-event","fulcro.client.network/progress-event",1567427949)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword("fulcro.client.network","outgoing-request","fulcro.client.network/outgoing-request",1237007322),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","status-code","fulcro.client.network/status-code",2073720728),new cljs.core.Keyword("fulcro.client.network","status-text","fulcro.client.network/status-text",-323175296),new cljs.core.Keyword("fulcro.client.network","error","fulcro.client.network/error",-1674240822),new cljs.core.Keyword("fulcro.client.network","error-text","fulcro.client.network/error-text",292985712)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-phase","fulcro.client.network/progress-phase",1622192464),new cljs.core.Keyword("fulcro.client.network","progress-event","fulcro.client.network/progress-event",1567427949)], null),null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36869){
return cljs.core.map_QMARK_(G__36869);
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"body","body",-2049205669));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"error","error",-978969032));
}),(function (G__36869){
return cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
})], null),(function (G__36869){
return ((cljs.core.map_QMARK_(G__36869)) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"transaction","transaction",1777321997))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"body","body",-2049205669))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"status-code","status-code",-1060410130))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"error","error",-978969032))) && (cljs.core.contains_QMARK_(G__36869,new cljs.core.Keyword(null,"error-text","error-text",2021893718))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618),new cljs.core.Keyword(null,"progress-event","progress-event",1690048087)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword("fulcro.client.network","outgoing-request","fulcro.client.network/outgoing-request",1237007322),new cljs.core.Keyword("fulcro.client.network","body","fulcro.client.network/body",-596470011),new cljs.core.Keyword("fulcro.client.network","status-code","fulcro.client.network/status-code",2073720728),new cljs.core.Keyword("fulcro.client.network","status-text","fulcro.client.network/status-text",-323175296),new cljs.core.Keyword("fulcro.client.network","error","fulcro.client.network/error",-1674240822),new cljs.core.Keyword("fulcro.client.network","error-text","fulcro.client.network/error-text",292985712)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-code","status-code",-1060410130),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-text","error-text",2021893718)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-phase","fulcro.client.network/progress-phase",1622192464),new cljs.core.Keyword("fulcro.client.network","progress-event","fulcro.client.network/progress-event",1567427949)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"transaction","transaction",1777321997))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"outgoing-request","outgoing-request",256391368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"body","body",-2049205669))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status-code","status-code",-1060410130))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status-text","status-text",-1834235478))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"error","error",-978969032))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"error-text","error-text",2021893718)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","xhrio-event","fulcro.client.network/xhrio-event",-369584394),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","request-middleware","fulcro.client.network/request-middleware",-55753217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),null,null),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__36911){
return cljs.core.map_QMARK_(G__36911);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14798__auto__,v__14799__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14799__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","extract-response","fulcro.client.network/extract-response",711013897,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("fulcro.client.network","transaction","fulcro.client.network/transaction",258027239),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null,null));
/**
 * Returns true if the given response looks like a low-level network error.
 */
fulcro.client.network.was_network_error_QMARK_ = (function fulcro$client$network$was_network_error_QMARK_(p__36913){
var map__36914 = p__36913;
var map__36914__$1 = ((((!((map__36914 == null)))?(((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36914):map__36914);
var status_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"status-code","status-code",-1060410130));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36914__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),status_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","was-network-error?","fulcro.client.network/was-network-error?",-1758496050,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
fulcro.client.network.clear_request_STAR_ = (function fulcro$client$network$clear_request_STAR_(active_requests,id,xhrio){
if(cljs.core.every_QMARK_((function (p1__36917_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio,p1__36917_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_requests,id))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(active_requests,id);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(active_requests,id,cljs.core.disj,xhrio);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","clear-request*","fulcro.client.network/clear-request*",1385138749,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.set_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__36919){
return cljs.core.map_QMARK_(G__36919);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14798__auto__,v__14799__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14799__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),null,null,null));
fulcro.client.network.response_extractor_STAR_ = (function fulcro$client$network$response_extractor_STAR_(response_middleware,edn,real_request,xhrio){
return (function (){
var r = fulcro.client.network.extract_response(edn,real_request,xhrio);
try{return (response_middleware.cljs$core$IFn$_invoke$arity$1 ? response_middleware.cljs$core$IFn$_invoke$arity$1(r) : response_middleware.call(null,r));
}catch (e36927){var e = e36927;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),222], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Client response middleware threw an exception. ",e,". Defaulting to raw response."], 0));
}catch (e36928){if((e36928 instanceof Error)){
var e__33343__auto___36929 = e36928;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),222], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___36929], 0));
} else {
throw e36928;

}
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(r)))?new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973):new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"middleware-exception","middleware-exception",1033843204),e], null)], 0));
}});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","response-extractor*","fulcro.client.network/response-extractor*",542875730,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mw","mw",-1960245141),new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mw","mw",-1960245141),new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mw","mw",-1960245141),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"mw","mw",-1960245141),new cljs.core.Keyword("fulcro.client.network","response-middleware","fulcro.client.network/response-middleware",-267842914),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword("fulcro.client.network","request","fulcro.client.network/request",287058297),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),cljs.spec.alpha.fspec_impl(null,null,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118),null,null,null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client.network","response","fulcro.client.network/response",-371044118)),null,null,null));
fulcro.client.network.cleanup_routine_STAR_ = (function fulcro$client$network$cleanup_routine_STAR_(abort_id,active_requests,xhrio){
return (function (){
if(cljs.core.truth_(abort_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(active_requests,fulcro.client.network.clear_request_STAR_,abort_id,xhrio);
} else {
}

return fulcro.client.network.xhrio_dispose(xhrio);
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","cleanup-routine*","fulcro.client.network/cleanup-routine*",-580745987,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword("fulcro.client.network","active-requests","fulcro.client.network/active-requests",-1155258669),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),new cljs.core.Keyword("fulcro.client.network","xhrio","fulcro.client.network/xhrio",103194672)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_,null,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),null,null,null));
/**
 * Returns a (fn [evt] ) that pulls the response, runs it through middleware, and reports
 * the appropriate results to the raw-ok-handler, and progress-routine. If the middleware fails,
 * it will instaed report to the error-routine (which in turn will report to the raw error handler)
 */
fulcro.client.network.ok_routine_STAR_ = (function fulcro$client$network$ok_routine_STAR_(progress_routine,get_response_fn,raw_ok_handler,error_routine){
return (function (evt){
var map__36932 = (get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null));
var map__36932__$1 = ((((!((map__36932 == null)))?(((((map__36932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36932):map__36932);
var r = map__36932__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var middleware_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36932__$1,new cljs.core.Keyword(null,"middleware-exception","middleware-exception",1033843204));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword(null,"middleware-failure","middleware-failure",-1809927973))){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),251], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Client middleware threw an exception",middleware_exception], 0));
}catch (e36934){if((e36934 instanceof Error)){
var e__33343__auto___36941 = e36934;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),251], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___36941], 0));
} else {
throw e36934;

}
}
var G__36936_36942 = new cljs.core.Keyword(null,"failed","failed",-1397425762);
var G__36937_36943 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__36936_36942,G__36937_36943) : progress_routine.call(null,G__36936_36942,G__36937_36943));

return (error_routine.cljs$core$IFn$_invoke$arity$1 ? error_routine.cljs$core$IFn$_invoke$arity$1(r) : error_routine.call(null,r));
} else {
var G__36939_36945 = new cljs.core.Keyword(null,"complete","complete",-500388775);
var G__36940_36946 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__36939_36945,G__36940_36946) : progress_routine.call(null,G__36939_36945,G__36940_36946));

return (raw_ok_handler.cljs$core$IFn$_invoke$arity$1 ? raw_ok_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_ok_handler.call(null,r));
}
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","ok-routine*","fulcro.client.network/ok-routine*",2039872035,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"get-response","get-response",1182788507),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"complete-fn","complete-fn",699594712),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"fn?","fn?",180459291))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"get-response","get-response",1182788507),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"complete-fn","complete-fn",699594712),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"fn?","fn?",180459291)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"get-response","get-response",1182788507),new cljs.core.Keyword(null,"complete-fn","complete-fn",699594712),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"fn?","fn?",180459291)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"fn?","fn?",180459291)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"get-response","get-response",1182788507),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"complete-fn","complete-fn",699594712),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword(null,"fn?","fn?",180459291)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Return a (fn [phase progress-event]) that calls the raw update function with progress and response data merged
 *   together as a response.
 */
fulcro.client.network.progress_routine_STAR_ = (function fulcro$client$network$progress_routine_STAR_(get_response_fn,raw_update_fn){
return (function (phase,evt){
if(cljs.core.truth_(raw_update_fn)){
var G__36950 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progress-phase","progress-phase",186626618),phase,new cljs.core.Keyword(null,"progress-event","progress-event",1690048087),evt], null),(get_response_fn.cljs$core$IFn$_invoke$arity$0 ? get_response_fn.cljs$core$IFn$_invoke$arity$0() : get_response_fn.call(null))], 0));
return (raw_update_fn.cljs$core$IFn$_invoke$arity$1 ? raw_update_fn.cljs$core$IFn$_invoke$arity$1(G__36950) : raw_update_fn.call(null,G__36950));
} else {
return null;
}
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","progress-routine*","fulcro.client.network/progress-routine*",272127398,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response-fn","response-fn",377411189),new cljs.core.Keyword(null,"update","update",1045576396)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"response-fn","response-fn",377411189),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Returns a (fn [xhrio-evt]) that pulls the progress and reports it to the progress routine and the raw
 *   error handler.
 */
fulcro.client.network.error_routine_STAR_ = (function fulcro$client$network$error_routine_STAR_(get_response,ok_routine,progress_routine,raw_error_handler){
return (function (evt){
var r = (get_response.cljs$core$IFn$_invoke$arity$0 ? get_response.cljs$core$IFn$_invoke$arity$0() : get_response.call(null));
var G__36953_36955 = new cljs.core.Keyword(null,"failed","failed",-1397425762);
var G__36954_36956 = evt;
(progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__36953_36955,G__36954_36956) : progress_routine.call(null,G__36953_36955,G__36954_36956));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),new cljs.core.Keyword(null,"status-code","status-code",-1060410130).cljs$core$IFn$_invoke$arity$1(r))){
return (ok_routine.cljs$core$IFn$_invoke$arity$1 ? ok_routine.cljs$core$IFn$_invoke$arity$1(evt) : ok_routine.call(null,evt));
} else {
return (raw_error_handler.cljs$core$IFn$_invoke$arity$1 ? raw_error_handler.cljs$core$IFn$_invoke$arity$1(r) : raw_error_handler.call(null,r));
}
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","error-routine*","fulcro.client.network/error-routine*",-326031953,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_,cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

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
fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k36960,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__36964 = k36960;
var G__36964__$1 = (((G__36964 instanceof cljs.core.Keyword))?G__36964.fqn:null);
switch (G__36964__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36960,else__12537__auto__);

}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.client.network.FulcroHTTPRemote{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),self__.request_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),self__.response_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),self__.active_requests],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serial?","serial?",1994367781),self__.serial_QMARK_],null))], null),self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36959){
var self__ = this;
var G__36959__$1 = this;
return (new cljs.core.RecordIter((0),G__36959__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword(null,"serial?","serial?",1994367781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__36965 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (244823968 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__36965(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36961,other36962){
var self__ = this;
var this36961__$1 = this;
return ((!((other36962 == null))) && ((this36961__$1.constructor === other36962.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.url,other36962.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.request_middleware,other36962.request_middleware)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.response_middleware,other36962.response_middleware)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.active_requests,other36962.active_requests)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.serial_QMARK_,other36962.serial_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36961__$1.__extmap,other36962.__extmap)));
});

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__36966){
var self__ = this;
var map__36967 = p__36966;
var map__36967__$1 = ((((!((map__36967 == null)))?(((((map__36967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36967):map__36967);
var raw_request = map__36967__$1;
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var abort_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36967__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var temp__5455__auto__ = (function (){try{var G__36971 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),edn,new cljs.core.Keyword(null,"url","url",276297046),self__.url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687)], null);
return (self__.request_middleware.cljs$core$IFn$_invoke$arity$1 ? self__.request_middleware.cljs$core$IFn$_invoke$arity$1(G__36971) : self__.request_middleware.call(null,G__36971));
}catch (e36969){var e = e36969;
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),289], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send aborted due to middleware failure ",e], 0));
}catch (e36970){if((e36970 instanceof Error)){
var e__33343__auto___37013 = e36970;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),289], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___37013], 0));
} else {
throw e36970;

}
}
return null;
}})();
if(cljs.core.truth_(temp__5455__auto__)){
var real_request = temp__5455__auto__;
var xhrio = fulcro.client.network.make_xhrio();
var map__36972 = real_request;
var map__36972__$1 = ((((!((map__36972 == null)))?(((((map__36972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36972):map__36972);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var url__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36972__$1,new cljs.core.Keyword(null,"method","method",55703592));
var http_verb = clojure.string.upper_case(cljs.core.name((function (){var or__3922__auto__ = method;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"post","post",269697687);
}
})()));
var extract_response = ((function (xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (){
return fulcro.client.network.extract_response(body,real_request,xhrio);
});})(xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
var extract_response_mw = fulcro.client.network.response_extractor_STAR_(self__.response_middleware,edn,real_request,xhrio);
var gc_network_resources = fulcro.client.network.cleanup_routine_STAR_(abort_id,self__.active_requests,xhrio);
var progress_routine = fulcro.client.network.progress_routine_STAR_(extract_response,progress_handler);
var ok_routine = fulcro.client.network.ok_routine_STAR_(progress_routine,extract_response_mw,ok_handler,error_handler);
var error_routine = fulcro.client.network.error_routine_STAR_(extract_response_mw,ok_routine,progress_routine,error_handler);
var with_cleanup = ((function (xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (f){
return ((function (xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (evt){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(evt) : f.call(null,evt));
}finally {(gc_network_resources.cljs$core$IFn$_invoke$arity$0 ? gc_network_resources.cljs$core$IFn$_invoke$arity$0() : gc_network_resources.call(null));
}});
;})(xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
});})(xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
if(cljs.core.truth_(abort_id)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.active_requests,cljs.core.update,abort_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xhrio], 0));
} else {
}

if(cljs.core.truth_(progress_handler)){
fulcro.client.network.xhrio_enable_progress_events(xhrio);

var G__36974_37014 = xhrio;
var G__36975_37015 = goog.net.EventType.DOWNLOAD_PROGRESS;
var G__36976_37016 = ((function (G__36974_37014,G__36975_37015,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (p1__36957_SHARP_){
var G__36977 = new cljs.core.Keyword(null,"receiving","receiving",829203724);
var G__36978 = p1__36957_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__36977,G__36978) : progress_routine.call(null,G__36977,G__36978));
});})(G__36974_37014,G__36975_37015,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
goog.events.listen(G__36974_37014,G__36975_37015,G__36976_37016);

var G__36979_37017 = xhrio;
var G__36980_37018 = goog.net.EventType.UPLOAD_PROGRESS;
var G__36981_37019 = ((function (G__36979_37017,G__36980_37018,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (p1__36958_SHARP_){
var G__36982 = new cljs.core.Keyword(null,"sending","sending",-1806704862);
var G__36983 = p1__36958_SHARP_;
return (progress_routine.cljs$core$IFn$_invoke$arity$2 ? progress_routine.cljs$core$IFn$_invoke$arity$2(G__36982,G__36983) : progress_routine.call(null,G__36982,G__36983));
});})(G__36979_37017,G__36980_37018,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
;
goog.events.listen(G__36979_37017,G__36980_37018,G__36981_37019);
} else {
}

var G__36984_37020 = xhrio;
var G__36985_37021 = goog.net.EventType.SUCCESS;
var G__36986_37022 = with_cleanup(ok_routine);
goog.events.listen(G__36984_37020,G__36985_37021,G__36986_37022);

var G__36987_37023 = xhrio;
var G__36988_37024 = goog.net.EventType.ABORT;
var G__36989_37025 = with_cleanup(((function (G__36987_37023,G__36988_37024,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler){
return (function (){
var G__36990 = cljs.core.PersistentArrayMap.EMPTY;
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__36990) : ok_handler.call(null,G__36990));
});})(G__36987_37023,G__36988_37024,xhrio,map__36972,map__36972__$1,body,headers,url__$1,method,http_verb,extract_response,extract_response_mw,gc_network_resources,progress_routine,ok_routine,error_routine,with_cleanup,real_request,temp__5455__auto__,this$__$1,map__36967,map__36967__$1,raw_request,edn,abort_id,ok_handler,error_handler,progress_handler))
);
goog.events.listen(G__36987_37023,G__36988_37024,G__36989_37025);

var G__36991_37026 = xhrio;
var G__36992_37027 = goog.net.EventType.ERROR;
var G__36993_37028 = with_cleanup(error_routine);
goog.events.listen(G__36991_37026,G__36992_37027,G__36993_37028);

return fulcro.client.network.xhrio_send(xhrio,url__$1,http_verb,body,headers);
} else {
var G__36994 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"error-text","error-text",2021893718),"Transmission was aborted because the request middleware threw an exception"], null);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__36994) : error_handler.call(null,G__36994));
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.fulcro$client$network$FulcroRemoteI$abort$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.active_requests),id);
if(cljs.core.truth_(temp__5457__auto__)){
var xhrios = temp__5457__auto__;
var seq__36995 = cljs.core.seq(xhrios);
var chunk__36996 = null;
var count__36997 = (0);
var i__36998 = (0);
while(true){
if((i__36998 < count__36997)){
var xhrio = chunk__36996.cljs$core$IIndexed$_nth$arity$2(null,i__36998);
fulcro.client.network.xhrio_abort(xhrio);


var G__37029 = seq__36995;
var G__37030 = chunk__36996;
var G__37031 = count__36997;
var G__37032 = (i__36998 + (1));
seq__36995 = G__37029;
chunk__36996 = G__37030;
count__36997 = G__37031;
i__36998 = G__37032;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__36995);
if(temp__5457__auto____$1){
var seq__36995__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36995__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36995__$1);
var G__37033 = cljs.core.chunk_rest(seq__36995__$1);
var G__37034 = c__4319__auto__;
var G__37035 = cljs.core.count(c__4319__auto__);
var G__37036 = (0);
seq__36995 = G__37033;
chunk__36996 = G__37034;
count__36997 = G__37035;
i__36998 = G__37036;
continue;
} else {
var xhrio = cljs.core.first(seq__36995__$1);
fulcro.client.network.xhrio_abort(xhrio);


var G__37037 = cljs.core.next(seq__36995__$1);
var G__37038 = null;
var G__37039 = (0);
var G__37040 = (0);
seq__36995 = G__37037;
chunk__36996 = G__37038;
count__36997 = G__37039;
i__36998 = G__37040;
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

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"serial?","serial?",1994367781),null,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),null,new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),null,new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__36959){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__36999 = cljs.core.keyword_identical_QMARK_;
var expr__37000 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__37002 = new cljs.core.Keyword(null,"url","url",276297046);
var G__37003 = expr__37000;
return (pred__36999.cljs$core$IFn$_invoke$arity$2 ? pred__36999.cljs$core$IFn$_invoke$arity$2(G__37002,G__37003) : pred__36999.call(null,G__37002,G__37003));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(G__36959,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37004 = new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817);
var G__37005 = expr__37000;
return (pred__36999.cljs$core$IFn$_invoke$arity$2 ? pred__36999.cljs$core$IFn$_invoke$arity$2(G__37004,G__37005) : pred__36999.call(null,G__37004,G__37005));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,G__36959,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37006 = new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044);
var G__37007 = expr__37000;
return (pred__36999.cljs$core$IFn$_invoke$arity$2 ? pred__36999.cljs$core$IFn$_invoke$arity$2(G__37006,G__37007) : pred__36999.call(null,G__37006,G__37007));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,G__36959,self__.active_requests,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37008 = new cljs.core.Keyword(null,"active-requests","active-requests",1354177961);
var G__37009 = expr__37000;
return (pred__36999.cljs$core$IFn$_invoke$arity$2 ? pred__36999.cljs$core$IFn$_invoke$arity$2(G__37008,G__37009) : pred__36999.call(null,G__37008,G__37009));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,G__36959,self__.serial_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37010 = new cljs.core.Keyword(null,"serial?","serial?",1994367781);
var G__37011 = expr__37000;
return (pred__36999.cljs$core$IFn$_invoke$arity$2 ? pred__36999.cljs$core$IFn$_invoke$arity$2(G__37010,G__37011) : pred__36999.call(null,G__37010,G__37011));
})())){
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,G__36959,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__36959),null));
}
}
}
}
}
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),self__.request_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),self__.response_middleware],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),self__.active_requests],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serial?","serial?",1994367781),self__.serial_QMARK_],null))], null),self__.__extmap));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__36959){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.client.network.FulcroHTTPRemote(self__.url,self__.request_middleware,self__.response_middleware,self__.active_requests,self__.serial_QMARK_,G__36959,self__.__extmap,self__.__hash));
});

fulcro.client.network.FulcroHTTPRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.client.network.FulcroHTTPRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-middleware","request-middleware",-2065378952,null),new cljs.core.Symbol(null,"response-middleware","response-middleware",138451483,null),new cljs.core.Symbol(null,"active-requests","active-requests",-1300257808,null),new cljs.core.Symbol(null,"serial?","serial?",-660067988,null)], null);
});

fulcro.client.network.FulcroHTTPRemote.cljs$lang$type = true;

fulcro.client.network.FulcroHTTPRemote.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.client.network/FulcroHTTPRemote",null,(1),null));
});

fulcro.client.network.FulcroHTTPRemote.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.client.network/FulcroHTTPRemote");
});

/**
 * Positional factory function for fulcro.client.network/FulcroHTTPRemote.
 */
fulcro.client.network.__GT_FulcroHTTPRemote = (function fulcro$client$network$__GT_FulcroHTTPRemote(url,request_middleware,response_middleware,active_requests,serial_QMARK_){
return (new fulcro.client.network.FulcroHTTPRemote(url,request_middleware,response_middleware,active_requests,serial_QMARK_,null,null,null));
});

/**
 * Factory function for fulcro.client.network/FulcroHTTPRemote, taking a map of keywords to field values.
 */
fulcro.client.network.map__GT_FulcroHTTPRemote = (function fulcro$client$network$map__GT_FulcroHTTPRemote(G__36963){
return (new fulcro.client.network.FulcroHTTPRemote(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__36963),new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817).cljs$core$IFn$_invoke$arity$1(G__36963),new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044).cljs$core$IFn$_invoke$arity$1(G__36963),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961).cljs$core$IFn$_invoke$arity$1(G__36963),new cljs.core.Keyword(null,"serial?","serial?",1994367781).cljs$core$IFn$_invoke$arity$1(G__36963),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36963,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),new cljs.core.Keyword(null,"serial?","serial?",1994367781)], 0))),null));
});

cljs.spec.alpha.def_impl(new cljs.core.Symbol("fulcro.client.network","transmit","fulcro.client.network/transmit",1446925585,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"raw-request","raw-request",-253945652),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"raw-request","raw-request",-253945652),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"raw-request","raw-request",-253945652)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__37041){
return cljs.core.map_QMARK_(G__37041);
}),(function (G__37041){
return cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
}),(function (G__37041){
return cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
}),(function (G__37041){
return cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
})], null),(function (G__37041){
return ((cljs.core.map_QMARK_(G__37041)) && (cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957))) && (cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727))) && (cljs.core.contains_QMARK_(G__37041,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"raw-request","raw-request",-253945652),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
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
fulcro.client.network.fulcro_http_remote = (function fulcro$client$network$fulcro_http_remote(p__37042){
var map__37043 = p__37042;
var map__37043__$1 = ((((!((map__37043 == null)))?(((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37043):map__37043);
var options = map__37043__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37043__$1,new cljs.core.Keyword(null,"url","url",276297046),"/api");
var request_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37043__$1,new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),fulcro.client.network.wrap_fulcro_request.cljs$core$IFn$_invoke$arity$0());
var response_middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37043__$1,new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),fulcro.client.network.wrap_fulcro_response.cljs$core$IFn$_invoke$arity$0());
return fulcro.client.network.map__GT_FulcroHTTPRemote(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"request-middleware","request-middleware",589056817),request_middleware,new cljs.core.Keyword(null,"response-middleware","response-middleware",-1502080044),response_middleware,new cljs.core.Keyword(null,"active-requests","active-requests",1354177961),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0)));
});

/**
 * @interface
 */
fulcro.client.network.NetworkBehavior = function(){};

/**
 * DEPRECATED. Returns true if the network is configured to desire one request at a time.
 */
fulcro.client.network.serialize_requests_QMARK_ = (function fulcro$client$network$serialize_requests_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 == null))))){
return this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.serialize_requests_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.network.serialize_requests_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5 == null))))){
return this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5(this$,edn,done_callback,error_callback,update_callback);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.updating_send[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__4212__auto__.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
var m__4212__auto____$1 = (fulcro.client.network.updating_send["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__4212__auto____$1.call(null,this$,edn,done_callback,error_callback,update_callback));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroNetwork$send$arity$4 == null))))){
return this$.fulcro$client$network$FulcroNetwork$send$arity$4(this$,edn,done_callback,error_callback);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.send[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__4212__auto__.call(null,this$,edn,done_callback,error_callback));
} else {
var m__4212__auto____$1 = (fulcro.client.network.send["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__4212__auto____$1.call(null,this$,edn,done_callback,error_callback));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroNetwork$start$arity$1 == null))))){
return this$.fulcro$client$network$FulcroNetwork$start$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.start[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (fulcro.client.network.start["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3 == null))))){
return this$.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3(this$,xhrio,ok_cb);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.response_ok[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__4212__auto__.call(null,this$,xhrio,ok_cb));
} else {
var m__4212__auto____$1 = (fulcro.client.network.response_ok["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__4212__auto____$1.call(null,this$,xhrio,ok_cb));
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
if(((!((this$ == null))) && (!((this$.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3 == null))))){
return this$.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3(this$,xhrio,err_cb);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (fulcro.client.network.response_error[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__4212__auto__.call(null,this$,xhrio,err_cb));
} else {
var m__4212__auto____$1 = (fulcro.client.network.response_error["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__4212__auto____$1.call(null,this$,xhrio,err_cb));
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
var G__37046 = arguments.length;
switch (G__37046) {
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
return cognitect.transit.read(fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),xhr_io.getResponseText());
}
}catch (e37047){if((e37047 instanceof Object)){
var e = e37047;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(404),new cljs.core.Keyword(null,"message","message",-406056002),"Server down"], null);
} else {
throw e37047;

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
fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k37050,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__37054 = k37050;
var G__37054__$1 = (((G__37054 instanceof cljs.core.Keyword))?G__37054.fqn:null);
switch (G__37054__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37050,else__12537__auto__);

}
});

fulcro.client.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.client.network.Network{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37049){
var self__ = this;
var G__37049__$1 = this;
return (new cljs.core.RecordIter((0),G__37049__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,read_handlers);
if(cljs.core.truth_(valid_data_callback)){
var G__37055 = (function (){var or__3922__auto__ = query_response;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (valid_data_callback.cljs$core$IFn$_invoke$arity$1 ? valid_data_callback.cljs$core$IFn$_invoke$arity$1(G__37055) : valid_data_callback.call(null,G__37055));
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
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),421], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([str], 0));
}catch (e37056){if((e37056 instanceof Error)){
var e__33343__auto___37082 = e37056;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),421], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto___37082], 0));
} else {
throw e37056;

}
}
(error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1(error) : error_callback.call(null,error));

if(cljs.core.truth_(cljs.core.deref(self__.global_error_callback))){
var fexpr__37057 = cljs.core.deref(self__.global_error_callback);
return (fexpr__37057.cljs$core$IFn$_invoke$arity$2 ? fexpr__37057.cljs$core$IFn$_invoke$arity$2(status,error) : fexpr__37057.call(null,status,error));
} else {
return null;
}
});})(status,this$__$1))
;
if((status === (0))){
return log_and_dispatch_error(["NETWORK ERROR: No connection established."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"network","network",2050004697)], null));
} else {
return log_and_dispatch_error(["SERVER ERROR CODE: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''),fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,self__.transit_handlers));
}
}finally {xhr_io.dispose();
}});

fulcro.client.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__37058 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-917723374 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__37058(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.client.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37051,other37052){
var self__ = this;
var this37051__$1 = this;
return ((!((other37052 == null))) && ((this37051__$1.constructor === other37052.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.url,other37052.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.request_transform,other37052.request_transform)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.global_error_callback,other37052.global_error_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.complete_app,other37052.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.transit_handlers,other37052.transit_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37051__$1.__extmap,other37052.__extmap)));
});

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
var xhrio = fulcro.client.network.make_xhrio();
var handlers = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"write","write",-1857649168).cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__37059 = (function (){var G__37060 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),edn,new cljs.core.Keyword(null,"headers","headers",-835030129),headers], null);
if(cljs.core.truth_(self__.request_transform)){
return (self__.request_transform.cljs$core$IFn$_invoke$arity$1 ? self__.request_transform.cljs$core$IFn$_invoke$arity$1(G__37060) : self__.request_transform.call(null,G__37060));
} else {
return G__37060;
}
})();
var map__37059__$1 = ((((!((map__37059 == null)))?(((((map__37059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37059):map__37059);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var post_data = cognitect.transit.write(fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js(headers__$1);
var G__37062_37083 = xhrio;
var G__37063_37084 = goog.net.EventType.SUCCESS;
var G__37064_37085 = ((function (G__37062_37083,G__37063_37084,xhrio,handlers,headers,map__37059,map__37059__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return fulcro.client.network.response_ok(this$__$1,xhrio,ok);
});})(G__37062_37083,G__37063_37084,xhrio,handlers,headers,map__37059,map__37059__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__37062_37083,G__37063_37084,G__37064_37085);

var G__37065_37086 = xhrio;
var G__37066_37087 = goog.net.EventType.ERROR;
var G__37067_37088 = ((function (G__37065_37086,G__37066_37087,xhrio,handlers,headers,map__37059,map__37059__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return fulcro.client.network.response_error(this$__$1,xhrio,error);
});})(G__37065_37086,G__37066_37087,xhrio,handlers,headers,map__37059,map__37059__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__37065_37086,G__37066_37087,G__37067_37088);

return xhrio.send(self__.url,"POST",post_data,headers__$2);
});

fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

fulcro.client.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),null,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),null,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.client.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__37049){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__37068 = cljs.core.keyword_identical_QMARK_;
var expr__37069 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__37071 = new cljs.core.Keyword(null,"url","url",276297046);
var G__37072 = expr__37069;
return (pred__37068.cljs$core$IFn$_invoke$arity$2 ? pred__37068.cljs$core$IFn$_invoke$arity$2(G__37071,G__37072) : pred__37068.call(null,G__37071,G__37072));
})())){
return (new fulcro.client.network.Network(G__37049,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37073 = new cljs.core.Keyword(null,"request-transform","request-transform",170337297);
var G__37074 = expr__37069;
return (pred__37068.cljs$core$IFn$_invoke$arity$2 ? pred__37068.cljs$core$IFn$_invoke$arity$2(G__37073,G__37074) : pred__37068.call(null,G__37073,G__37074));
})())){
return (new fulcro.client.network.Network(self__.url,G__37049,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37075 = new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631);
var G__37076 = expr__37069;
return (pred__37068.cljs$core$IFn$_invoke$arity$2 ? pred__37068.cljs$core$IFn$_invoke$arity$2(G__37075,G__37076) : pred__37068.call(null,G__37075,G__37076));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,G__37049,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37077 = new cljs.core.Keyword(null,"complete-app","complete-app",1317441339);
var G__37078 = expr__37069;
return (pred__37068.cljs$core$IFn$_invoke$arity$2 ? pred__37068.cljs$core$IFn$_invoke$arity$2(G__37077,G__37078) : pred__37068.call(null,G__37077,G__37078));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__37049,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37079 = new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791);
var G__37080 = expr__37069;
return (pred__37068.cljs$core$IFn$_invoke$arity$2 ? pred__37068.cljs$core$IFn$_invoke$arity$2(G__37079,G__37080) : pred__37068.call(null,G__37079,G__37080));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__37049,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__37049),null));
}
}
}
}
}
});

fulcro.client.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request-transform","request-transform",170337297),self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),self__.transit_handlers],null))], null),self__.__extmap));
});

fulcro.client.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__37049){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__37049,self__.__extmap,self__.__hash));
});

fulcro.client.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.client.network.Network.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.Network.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

fulcro.client.network.Network.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"request-transform","request-transform",1810868824,null),new cljs.core.Symbol(null,"global-error-callback","global-error-callback",-1753008138,null),new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null),new cljs.core.Symbol(null,"transit-handlers","transit-handlers",434450736,null)], null);
});

fulcro.client.network.Network.cljs$lang$type = true;

fulcro.client.network.Network.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.client.network/Network",null,(1),null));
});

fulcro.client.network.Network.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.client.network/Network");
});

/**
 * Positional factory function for fulcro.client.network/Network.
 */
fulcro.client.network.__GT_Network = (function fulcro$client$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new fulcro.client.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

/**
 * Factory function for fulcro.client.network/Network, taking a map of keywords to field values.
 */
fulcro.client.network.map__GT_Network = (function fulcro$client$network$map__GT_Network(G__37053){
return (new fulcro.client.network.Network(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__37053),new cljs.core.Keyword(null,"request-transform","request-transform",170337297).cljs$core$IFn$_invoke$arity$1(G__37053),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631).cljs$core$IFn$_invoke$arity$1(G__37053),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__37053),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791).cljs$core$IFn$_invoke$arity$1(G__37053),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37053,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-transform","request-transform",170337297),new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791)], 0))),null));
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
var args__4502__auto__ = [];
var len__4499__auto___37094 = arguments.length;
var i__4500__auto___37095 = (0);
while(true){
if((i__4500__auto___37095 < len__4499__auto___37094)){
args__4502__auto__.push((arguments[i__4500__auto___37095]));

var G__37096 = (i__4500__auto___37095 + (1));
i__4500__auto___37095 = G__37096;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37091){
var map__37092 = p__37091;
var map__37092__$1 = ((((!((map__37092 == null)))?(((((map__37092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37092):map__37092);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var global_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631));
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
return fulcro.client.network.map__GT_Network(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(global_error_callback)], null));
});

fulcro.client.network.make_fulcro_network.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.client.network.make_fulcro_network.cljs$lang$applyTo = (function (seq37089){
var G__37090 = cljs.core.first(seq37089);
var seq37089__$1 = cljs.core.next(seq37089);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37090,seq37089__$1);
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
fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k37098,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__37102 = k37098;
var G__37102__$1 = (((G__37102 instanceof cljs.core.Keyword))?G__37102.fqn:null);
switch (G__37102__$1) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37098,else__12537__auto__);

}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#fulcro.client.network.MockNetwork{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37097){
var self__ = this;
var G__37097__$1 = this;
return (new cljs.core.RecordIter((0),G__37097__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__37103 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (374155305 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__37103(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37099,other37100){
var self__ = this;
var this37099__$1 = this;
return ((!((other37100 == null))) && ((this37099__$1.constructor === other37100.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37099__$1.complete_app,other37100.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37099__$1.__extmap,other37100.__extmap)));
});

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),482], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ignored (mock) Network request ",edn], 0));
}catch (e37104){if((e37104 instanceof Error)){
var e__33343__auto__ = e37104;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client.network",new cljs.core.Keyword(null,"line","line",212345235),482], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__33343__auto__], 0));
} else {
throw e37104;

}
}});

fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__37097){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__37105 = cljs.core.keyword_identical_QMARK_;
var expr__37106 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__37108 = new cljs.core.Keyword(null,"complete-app","complete-app",1317441339);
var G__37109 = expr__37106;
return (pred__37105.cljs$core$IFn$_invoke$arity$2 ? pred__37105.cljs$core$IFn$_invoke$arity$2(G__37108,G__37109) : pred__37105.call(null,G__37108,G__37109));
})())){
return (new fulcro.client.network.MockNetwork(G__37097,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__37097),null));
}
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"complete-app","complete-app",1317441339),self__.complete_app],null))], null),self__.__extmap));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__37097){
var self__ = this;
var this__12533__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,G__37097,self__.__extmap,self__.__hash));
});

fulcro.client.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

fulcro.client.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"complete-app","complete-app",-1336994430,null)], null);
});

fulcro.client.network.MockNetwork.cljs$lang$type = true;

fulcro.client.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fulcro.client.network/MockNetwork",null,(1),null));
});

fulcro.client.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"fulcro.client.network/MockNetwork");
});

/**
 * Positional factory function for fulcro.client.network/MockNetwork.
 */
fulcro.client.network.__GT_MockNetwork = (function fulcro$client$network$__GT_MockNetwork(complete_app){
return (new fulcro.client.network.MockNetwork(complete_app,null,null,null));
});

/**
 * Factory function for fulcro.client.network/MockNetwork, taking a map of keywords to field values.
 */
fulcro.client.network.map__GT_MockNetwork = (function fulcro$client$network$map__GT_MockNetwork(G__37101){
return (new fulcro.client.network.MockNetwork(new cljs.core.Keyword(null,"complete-app","complete-app",1317441339).cljs$core$IFn$_invoke$arity$1(G__37101),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37101,new cljs.core.Keyword(null,"complete-app","complete-app",1317441339))),null));
});

fulcro.client.network.mock_network = (function fulcro$client$network$mock_network(){
return fulcro.client.network.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=fulcro.client.network.js.map

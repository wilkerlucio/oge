// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.network');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.logging');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
/**
 * This is here (not inlined) to make mocking easier.
 */
fulcro.client.network.make_xhrio = (function fulcro$client$network$make_xhrio(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
fulcro.client.network.NetworkBehavior = function(){};

/**
 * Returns true if the network is configured to desire one request at a time.
 */
fulcro.client.network.serialize_requests_QMARK_ = (function fulcro$client$network$serialize_requests_QMARK_(this$){
if((!((this$ == null))) && (!((this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 == null)))){
return this$.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.serialize_requests_QMARK_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro.client.network.serialize_requests_QMARK_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
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
 * Send EDN. The update-callback will merge the state
 *   given to it. The done-callback will merge the state given to it, and indicates completion. See
 *   `fulcro.client.ui.file-upload/FileUploadNetwork` for an example.
 */
fulcro.client.network.updating_send = (function fulcro$client$network$updating_send(this$,edn,done_callback,error_callback,update_callback){
if((!((this$ == null))) && (!((this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5 == null)))){
return this$.fulcro$client$network$ProgressiveTransfer$updating_send$arity$5(this$,edn,done_callback,error_callback,update_callback);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.updating_send[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$5 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__11146__auto__.call(null,this$,edn,done_callback,error_callback,update_callback));
} else {
var m__11146__auto____$1 = (fulcro.client.network.updating_send["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,edn,done_callback,error_callback,update_callback) : m__11146__auto____$1.call(null,this$,edn,done_callback,error_callback,update_callback));
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
 * Send EDN. Calls either the done or error callback when the send is done. You must call one of those only once.
 *   Implement ProgressiveTransfer if you want to do progress updates during network transmission.
 */
fulcro.client.network.send = (function fulcro$client$network$send(this$,edn,done_callback,error_callback){
if((!((this$ == null))) && (!((this$.fulcro$client$network$FulcroNetwork$send$arity$4 == null)))){
return this$.fulcro$client$network$FulcroNetwork$send$arity$4(this$,edn,done_callback,error_callback);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.send[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__11146__auto__.call(null,this$,edn,done_callback,error_callback));
} else {
var m__11146__auto____$1 = (fulcro.client.network.send["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,edn,done_callback,error_callback) : m__11146__auto____$1.call(null,this$,edn,done_callback,error_callback));
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
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.start[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro.client.network.start["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
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
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.response_ok[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__11146__auto__.call(null,this$,xhrio,ok_cb));
} else {
var m__11146__auto____$1 = (fulcro.client.network.response_ok["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,ok_cb) : m__11146__auto____$1.call(null,this$,xhrio,ok_cb));
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
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro.client.network.response_error[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__11146__auto__.call(null,this$,xhrio,err_cb));
} else {
var m__11146__auto____$1 = (fulcro.client.network.response_error["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,xhrio,err_cb) : m__11146__auto____$1.call(null,this$,xhrio,err_cb));
} else {
throw cljs.core.missing_protocol("IXhrIOCallbacks.response-error",this$);
}
}
}
});

/**
 * An XhrIo-specific implementation method for interpreting the server response.
 */
fulcro.client.network.parse_response = (function fulcro$client$network$parse_response(var_args){
var G__33343 = arguments.length;
switch (G__33343) {
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
return cognitect.transit.read(om.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),xhr_io.getResponseText());
}
}catch (e33349){if((e33349 instanceof Object)){
var e = e33349;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,(404),cljs.core.cst$kw$message,"Server down"], null);
} else {
throw e33349;

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

fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


fulcro.client.network.Network.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k33364,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__33373 = k33364;
var G__33373__$1 = (((G__33373 instanceof cljs.core.Keyword))?G__33373.fqn:null);
switch (G__33373__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33364,else__11103__auto__);

}
});


fulcro.client.network.Network.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#fulcro.client.network.Network{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});


fulcro.client.network.Network.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33363){
var self__ = this;
var G__33363__$1 = this;
return (new cljs.core.RecordIter((0),G__33363__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url,cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


fulcro.client.network.Network.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


fulcro.client.network.Network.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,self__.__hash));
});


fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$ = cljs.core.PROTOCOL_SENTINEL;


fulcro.client.network.Network.prototype.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3 = (function (this$,xhr_io,valid_data_callback){
var self__ = this;
var this$__$1 = this;
try{var read_handlers = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
var query_response = fulcro.client.network.parse_response.cljs$core$IFn$_invoke$arity$2(xhr_io,read_handlers);
if(cljs.core.truth_(valid_data_callback)){
var G__33384 = (function (){var or__10412__auto__ = query_response;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (valid_data_callback.cljs$core$IFn$_invoke$arity$1 ? valid_data_callback.cljs$core$IFn$_invoke$arity$1(G__33384) : valid_data_callback.call(null,G__33384));
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
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([str], 0));

(error_callback.cljs$core$IFn$_invoke$arity$1 ? error_callback.cljs$core$IFn$_invoke$arity$1(error) : error_callback.call(null,error));

if(cljs.core.truth_(cljs.core.deref(self__.global_error_callback))){
var fexpr__33385 = cljs.core.deref(self__.global_error_callback);
return (fexpr__33385.cljs$core$IFn$_invoke$arity$2 ? fexpr__33385.cljs$core$IFn$_invoke$arity$2(status,error) : fexpr__33385.call(null,status,error));
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


fulcro.client.network.Network.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});


fulcro.client.network.Network.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__33388 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-917723374 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__33388(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


fulcro.client.network.Network.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33365,other33366){
var self__ = this;
var this33365__$1 = this;
return (!((other33366 == null))) && ((this33365__$1.constructor === other33366.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.url,other33366.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.request_transform,other33366.request_transform)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.global_error_callback,other33366.global_error_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.complete_app,other33366.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.transit_handlers,other33366.transit_handlers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33365__$1.__extmap,other33366.__extmap));
});


fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;


fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
var xhrio = fulcro.client.network.make_xhrio();
var handlers = (function (){var or__10412__auto__ = cljs.core.cst$kw$write.cljs$core$IFn$_invoke$arity$1(self__.transit_handlers);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var headers = new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/transit+json"], null);
var map__33396 = (function (){var G__33397 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$body,edn,cljs.core.cst$kw$headers,headers], null);
if(cljs.core.truth_(self__.request_transform)){
return (self__.request_transform.cljs$core$IFn$_invoke$arity$1 ? self__.request_transform.cljs$core$IFn$_invoke$arity$1(G__33397) : self__.request_transform.call(null,G__33397));
} else {
return G__33397;
}
})();
var map__33396__$1 = ((((!((map__33396 == null)))?((((map__33396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33396):map__33396);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,cljs.core.cst$kw$body);
var headers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,cljs.core.cst$kw$headers);
var post_data = cognitect.transit.write(om.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,handlers], null)),body);
var headers__$2 = cljs.core.clj__GT_js(headers__$1);
var G__33399_33473 = xhrio;
var G__33400_33474 = goog.net.EventType.SUCCESS;
var G__33401_33475 = ((function (G__33399_33473,G__33400_33474,xhrio,handlers,headers,map__33396,map__33396__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.fulcro$client$network$IXhrIOCallbacks$response_ok$arity$3(null,xhrio,ok);
});})(G__33399_33473,G__33400_33474,xhrio,handlers,headers,map__33396,map__33396__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__33399_33473,G__33400_33474,G__33401_33475);

var G__33402_33477 = xhrio;
var G__33403_33478 = goog.net.EventType.ERROR;
var G__33404_33479 = ((function (G__33402_33477,G__33403_33478,xhrio,handlers,headers,map__33396,map__33396__$1,body,headers__$1,post_data,headers__$2,this$__$1){
return (function (){
return this$__$1.fulcro$client$network$IXhrIOCallbacks$response_error$arity$3(null,xhrio,error);
});})(G__33402_33477,G__33403_33478,xhrio,handlers,headers,map__33396,map__33396__$1,body,headers__$1,post_data,headers__$2,this$__$1))
;
goog.events.listen(G__33402_33477,G__33403_33478,G__33404_33479);

return xhrio.send(self__.url,"POST",post_data,headers__$2);
});


fulcro.client.network.Network.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


fulcro.client.network.Network.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$transit_DASH_handlers,null,cljs.core.cst$kw$global_DASH_error_DASH_callback,null,cljs.core.cst$kw$request_DASH_transform,null,cljs.core.cst$kw$url,null,cljs.core.cst$kw$complete_DASH_app,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


fulcro.client.network.Network.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__33363){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__33408 = cljs.core.keyword_identical_QMARK_;
var expr__33409 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__33412 = cljs.core.cst$kw$url;
var G__33413 = expr__33409;
return (pred__33408.cljs$core$IFn$_invoke$arity$2 ? pred__33408.cljs$core$IFn$_invoke$arity$2(G__33412,G__33413) : pred__33408.call(null,G__33412,G__33413));
})())){
return (new fulcro.client.network.Network(G__33363,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33414 = cljs.core.cst$kw$request_DASH_transform;
var G__33415 = expr__33409;
return (pred__33408.cljs$core$IFn$_invoke$arity$2 ? pred__33408.cljs$core$IFn$_invoke$arity$2(G__33414,G__33415) : pred__33408.call(null,G__33414,G__33415));
})())){
return (new fulcro.client.network.Network(self__.url,G__33363,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33416 = cljs.core.cst$kw$global_DASH_error_DASH_callback;
var G__33417 = expr__33409;
return (pred__33408.cljs$core$IFn$_invoke$arity$2 ? pred__33408.cljs$core$IFn$_invoke$arity$2(G__33416,G__33417) : pred__33408.call(null,G__33416,G__33417));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,G__33363,self__.complete_app,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33420 = cljs.core.cst$kw$complete_DASH_app;
var G__33421 = expr__33409;
return (pred__33408.cljs$core$IFn$_invoke$arity$2 ? pred__33408.cljs$core$IFn$_invoke$arity$2(G__33420,G__33421) : pred__33408.call(null,G__33420,G__33421));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,G__33363,self__.transit_handlers,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33424 = cljs.core.cst$kw$transit_DASH_handlers;
var G__33425 = expr__33409;
return (pred__33408.cljs$core$IFn$_invoke$arity$2 ? pred__33408.cljs$core$IFn$_invoke$arity$2(G__33424,G__33425) : pred__33408.call(null,G__33424,G__33425));
})())){
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,G__33363,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__33363),null));
}
}
}
}
}
});


fulcro.client.network.Network.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url,self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request_DASH_transform,self__.request_transform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$global_DASH_error_DASH_callback,self__.global_error_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$transit_DASH_handlers,self__.transit_handlers],null))], null),self__.__extmap));
});


fulcro.client.network.Network.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__33363){
var self__ = this;
var this__11099__auto____$1 = this;
return (new fulcro.client.network.Network(self__.url,self__.request_transform,self__.global_error_callback,self__.complete_app,self__.transit_handlers,G__33363,self__.__extmap,self__.__hash));
});


fulcro.client.network.Network.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
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

fulcro.client.network.Network.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.network/Network");
});

fulcro.client.network.Network.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"fulcro.client.network/Network");
});

fulcro.client.network.__GT_Network = (function fulcro$client$network$__GT_Network(url,request_transform,global_error_callback,complete_app,transit_handlers){
return (new fulcro.client.network.Network(url,request_transform,global_error_callback,complete_app,transit_handlers,null,null,null));
});

fulcro.client.network.map__GT_Network = (function fulcro$client$network$map__GT_Network(G__33370){
return (new fulcro.client.network.Network(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(G__33370),cljs.core.cst$kw$request_DASH_transform.cljs$core$IFn$_invoke$arity$1(G__33370),cljs.core.cst$kw$global_DASH_error_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__33370),cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__33370),cljs.core.cst$kw$transit_DASH_handlers.cljs$core$IFn$_invoke$arity$1(G__33370),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33370,cljs.core.cst$kw$url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.cst$kw$complete_DASH_app,cljs.core.cst$kw$transit_DASH_handlers], 0))),null));
});

/**
 * Build an Fulcro Network object using the default implementation.
 * 
 *   Features:
 * 
 *   - Can configure the target URL on the server for Om network requests
 *   - Can supply a (fn [{:keys [body headers] :as req}] req') to transform arbitrary requests (e.g. to add things like auth headers)
 *   - Supports a global error callback (fn [status-code error] ) that is notified when a 400+ status code or hard network error occurs
 *   - `transit-handlers`: A map of transit handlers to install on the reader, such as
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
var args__11698__auto__ = [];
var len__11691__auto___33521 = arguments.length;
var i__11692__auto___33522 = (0);
while(true){
if((i__11692__auto___33522 < len__11691__auto___33521)){
args__11698__auto__.push((arguments[i__11692__auto___33522]));

var G__33523 = (i__11692__auto___33522 + (1));
i__11692__auto___33522 = G__33523;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33515){
var map__33516 = p__33515;
var map__33516__$1 = ((((!((map__33516 == null)))?((((map__33516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33516):map__33516);
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33516__$1,cljs.core.cst$kw$request_DASH_transform);
var global_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33516__$1,cljs.core.cst$kw$global_DASH_error_DASH_callback);
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33516__$1,cljs.core.cst$kw$transit_DASH_handlers);
return fulcro.client.network.map__GT_Network(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$transit_DASH_handlers,transit_handlers,cljs.core.cst$kw$request_DASH_transform,request_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(global_error_callback)], null));
});

fulcro.client.network.make_fulcro_network.cljs$lang$maxFixedArity = (1);

fulcro.client.network.make_fulcro_network.cljs$lang$applyTo = (function (seq33512){
var G__33513 = cljs.core.first(seq33512);
var seq33512__$1 = cljs.core.next(seq33512);
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic(G__33513,seq33512__$1);
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

fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


fulcro.client.network.MockNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k33533,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__33542 = k33533;
var G__33542__$1 = (((G__33542 instanceof cljs.core.Keyword))?G__33542.fqn:null);
switch (G__33542__$1) {
case "complete-app":
return self__.complete_app;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33533,else__11103__auto__);

}
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#fulcro.client.network.MockNetwork{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33532){
var self__ = this;
var G__33532__$1 = this;
return (new cljs.core.RecordIter((0),G__33532__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_app], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


fulcro.client.network.MockNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,self__.__extmap,self__.__hash));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__33550 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (374155305 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__33550(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33534,other33535){
var self__ = this;
var this33534__$1 = this;
return (!((other33535 == null))) && ((this33534__$1.constructor === other33535.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33534__$1.complete_app,other33535.complete_app)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33534__$1.__extmap,other33535.__extmap));
});


fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;


fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,err){
var self__ = this;
var this$__$1 = this;
return fulcro.client.logging.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Ignored (mock) Network request ",edn], 0));
});


fulcro.client.network.MockNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$complete_DASH_app,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__33532){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__33566 = cljs.core.keyword_identical_QMARK_;
var expr__33567 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__33572 = cljs.core.cst$kw$complete_DASH_app;
var G__33573 = expr__33567;
return (pred__33566.cljs$core$IFn$_invoke$arity$2 ? pred__33566.cljs$core$IFn$_invoke$arity$2(G__33572,G__33573) : pred__33566.call(null,G__33572,G__33573));
})())){
return (new fulcro.client.network.MockNetwork(G__33532,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.network.MockNetwork(self__.complete_app,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__33532),null));
}
});


fulcro.client.network.MockNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$complete_DASH_app,self__.complete_app],null))], null),self__.__extmap));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__33532){
var self__ = this;
var this__11099__auto____$1 = this;
return (new fulcro.client.network.MockNetwork(self__.complete_app,G__33532,self__.__extmap,self__.__hash));
});


fulcro.client.network.MockNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

fulcro.client.network.MockNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$complete_DASH_app], null);
});

fulcro.client.network.MockNetwork.cljs$lang$type = true;

fulcro.client.network.MockNetwork.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fulcro.client.network/MockNetwork");
});

fulcro.client.network.MockNetwork.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"fulcro.client.network/MockNetwork");
});

fulcro.client.network.__GT_MockNetwork = (function fulcro$client$network$__GT_MockNetwork(complete_app){
return (new fulcro.client.network.MockNetwork(complete_app,null,null,null));
});

fulcro.client.network.map__GT_MockNetwork = (function fulcro$client$network$map__GT_MockNetwork(G__33536){
return (new fulcro.client.network.MockNetwork(cljs.core.cst$kw$complete_DASH_app.cljs$core$IFn$_invoke$arity$1(G__33536),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33536,cljs.core.cst$kw$complete_DASH_app)),null));
});

fulcro.client.network.mock_network = (function fulcro$client$network$mock_network(){
return fulcro.client.network.map__GT_MockNetwork(cljs.core.PersistentArrayMap.EMPTY);
});

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21993 = arguments.length;
switch (G__21993) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21999 = (function (f,blockable,meta22000){
this.f = f;
this.blockable = blockable;
this.meta22000 = meta22000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22001,meta22000__$1){
var self__ = this;
var _22001__$1 = this;
return (new cljs.core.async.t_cljs$core$async21999(self__.f,self__.blockable,meta22000__$1));
});

cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22001){
var self__ = this;
var _22001__$1 = this;
return self__.meta22000;
});

cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta22000], null);
});

cljs.core.async.t_cljs$core$async21999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21999";

cljs.core.async.t_cljs$core$async21999.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async21999");
});

cljs.core.async.__GT_t_cljs$core$async21999 = (function cljs$core$async$__GT_t_cljs$core$async21999(f__$1,blockable__$1,meta22000){
return (new cljs.core.async.t_cljs$core$async21999(f__$1,blockable__$1,meta22000));
});

}

return (new cljs.core.async.t_cljs$core$async21999(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22061 = arguments.length;
switch (G__22061) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22081 = arguments.length;
switch (G__22081) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22096 = arguments.length;
switch (G__22096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_22112 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22112) : fn1.call(null,val_22112));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22112,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22112) : fn1.call(null,val_22112));
});})(val_22112,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22124 = arguments.length;
switch (G__22124) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5457__auto__)){
var ret = temp__5457__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5457__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5457__auto__)){
var retb = temp__5457__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5457__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5457__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__11457__auto___22150 = n;
var x_22151 = (0);
while(true){
if((x_22151 < n__11457__auto___22150)){
(a[x_22151] = (0));

var G__22153 = (x_22151 + (1));
x_22151 = G__22153;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22154 = (i + (1));
i = G__22154;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async22156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22156 = (function (flag,meta22157){
this.flag = flag;
this.meta22157 = meta22157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22158,meta22157__$1){
var self__ = this;
var _22158__$1 = this;
return (new cljs.core.async.t_cljs$core$async22156(self__.flag,meta22157__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22158){
var self__ = this;
var _22158__$1 = this;
return self__.meta22157;
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22157], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22156";

cljs.core.async.t_cljs$core$async22156.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async22156");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22156 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22156(flag__$1,meta22157){
return (new cljs.core.async.t_cljs$core$async22156(flag__$1,meta22157));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22156(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22187 = (function (flag,cb,meta22188){
this.flag = flag;
this.cb = cb;
this.meta22188 = meta22188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22189,meta22188__$1){
var self__ = this;
var _22189__$1 = this;
return (new cljs.core.async.t_cljs$core$async22187(self__.flag,self__.cb,meta22188__$1));
});

cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22189){
var self__ = this;
var _22189__$1 = this;
return self__.meta22188;
});

cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22188], null);
});

cljs.core.async.t_cljs$core$async22187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22187";

cljs.core.async.t_cljs$core$async22187.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async22187");
});

cljs.core.async.__GT_t_cljs$core$async22187 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22187(flag__$1,cb__$1,meta22188){
return (new cljs.core.async.t_cljs$core$async22187(flag__$1,cb__$1,meta22188));
});

}

return (new cljs.core.async.t_cljs$core$async22187(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22212_SHARP_){
var G__22219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22212_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22219) : fret.call(null,G__22219));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22213_SHARP_){
var G__22221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22213_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22221) : fret.call(null,G__22221));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__10412__auto__ = wport;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22231 = (i + (1));
i = G__22231;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10412__auto__ = ret;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5459__auto__ = (function (){var and__10400__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__5459__auto__)){
var got = temp__5459__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___22256 = arguments.length;
var i__11692__auto___22257 = (0);
while(true){
if((i__11692__auto___22257 < len__11691__auto___22256)){
args__11698__auto__.push((arguments[i__11692__auto___22257]));

var G__22258 = (i__11692__auto___22257 + (1));
i__11692__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22242){
var map__22243 = p__22242;
var map__22243__$1 = ((((!((map__22243 == null)))?((((map__22243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22243):map__22243);
var opts = map__22243__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22235){
var G__22236 = cljs.core.first(seq22235);
var seq22235__$1 = cljs.core.next(seq22235);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22236,seq22235__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22281 = arguments.length;
switch (G__22281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21855__auto___22445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___22445){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___22445){
return (function (state_22361){
var state_val_22364 = (state_22361[(1)]);
if((state_val_22364 === (7))){
var inst_22346 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
var statearr_22376_22449 = state_22361__$1;
(statearr_22376_22449[(2)] = inst_22346);

(statearr_22376_22449[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (1))){
var state_22361__$1 = state_22361;
var statearr_22380_22450 = state_22361__$1;
(statearr_22380_22450[(2)] = null);

(statearr_22380_22450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (4))){
var inst_22311 = (state_22361[(7)]);
var inst_22311__$1 = (state_22361[(2)]);
var inst_22322 = (inst_22311__$1 == null);
var state_22361__$1 = (function (){var statearr_22385 = state_22361;
(statearr_22385[(7)] = inst_22311__$1);

return statearr_22385;
})();
if(cljs.core.truth_(inst_22322)){
var statearr_22388_22457 = state_22361__$1;
(statearr_22388_22457[(1)] = (5));

} else {
var statearr_22391_22458 = state_22361__$1;
(statearr_22391_22458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (13))){
var state_22361__$1 = state_22361;
var statearr_22393_22461 = state_22361__$1;
(statearr_22393_22461[(2)] = null);

(statearr_22393_22461[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (6))){
var inst_22311 = (state_22361[(7)]);
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22361__$1,(11),to,inst_22311);
} else {
if((state_val_22364 === (3))){
var inst_22349 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22361__$1,inst_22349);
} else {
if((state_val_22364 === (12))){
var state_22361__$1 = state_22361;
var statearr_22400_22463 = state_22361__$1;
(statearr_22400_22463[(2)] = null);

(statearr_22400_22463[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (2))){
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22361__$1,(4),from);
} else {
if((state_val_22364 === (11))){
var inst_22336 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
if(cljs.core.truth_(inst_22336)){
var statearr_22404_22466 = state_22361__$1;
(statearr_22404_22466[(1)] = (12));

} else {
var statearr_22405_22468 = state_22361__$1;
(statearr_22405_22468[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (9))){
var state_22361__$1 = state_22361;
var statearr_22409_22472 = state_22361__$1;
(statearr_22409_22472[(2)] = null);

(statearr_22409_22472[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (5))){
var state_22361__$1 = state_22361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22412_22474 = state_22361__$1;
(statearr_22412_22474[(1)] = (8));

} else {
var statearr_22413_22475 = state_22361__$1;
(statearr_22413_22475[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (14))){
var inst_22344 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
var statearr_22417_22476 = state_22361__$1;
(statearr_22417_22476[(2)] = inst_22344);

(statearr_22417_22476[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (10))){
var inst_22333 = (state_22361[(2)]);
var state_22361__$1 = state_22361;
var statearr_22418_22480 = state_22361__$1;
(statearr_22418_22480[(2)] = inst_22333);

(statearr_22418_22480[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22364 === (8))){
var inst_22330 = cljs.core.async.close_BANG_(to);
var state_22361__$1 = state_22361;
var statearr_22421_22482 = state_22361__$1;
(statearr_22421_22482[(2)] = inst_22330);

(statearr_22421_22482[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
});})(c__21855__auto___22445))
;
return ((function (switch__21492__auto__,c__21855__auto___22445){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_22423 = [null,null,null,null,null,null,null,null];
(statearr_22423[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_22423[(1)] = (1));

return statearr_22423;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_22361){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22361);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22424){if((e22424 instanceof Object)){
var ex__21496__auto__ = e22424;
var statearr_22425_22488 = state_22361;
(statearr_22425_22488[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22361);

return cljs.core.cst$kw$recur;
} else {
throw e22424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__22492 = state_22361;
state_22361 = G__22492;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_22361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_22361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___22445))
})();
var state__21857__auto__ = (function (){var statearr_22431 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22431[(6)] = c__21855__auto___22445);

return statearr_22431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___22445))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22507){
var vec__22508 = p__22507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(1),null);
var job = vec__22508;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21855__auto___22832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (1))){
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22522__$1,(2),res,v);
} else {
if((state_val_22523 === (2))){
var inst_22519 = (state_22522[(2)]);
var inst_22520 = cljs.core.async.close_BANG_(res);
var state_22522__$1 = (function (){var statearr_22525 = state_22522;
(statearr_22525[(7)] = inst_22519);

return statearr_22525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22522__$1,inst_22520);
} else {
return null;
}
}
});})(c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results))
;
return ((function (switch__21492__auto__,c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_22526 = [null,null,null,null,null,null,null,null];
(statearr_22526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__);

(statearr_22526[(1)] = (1));

return statearr_22526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1 = (function (state_22522){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22522);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22529){if((e22529 instanceof Object)){
var ex__21496__auto__ = e22529;
var statearr_22534_22837 = state_22522;
(statearr_22534_22837[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22522);

return cljs.core.cst$kw$recur;
} else {
throw e22529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__22838 = state_22522;
state_22522 = G__22838;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results))
})();
var state__21857__auto__ = (function (){var statearr_22537 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22537[(6)] = c__21855__auto___22832);

return statearr_22537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___22832,res,vec__22508,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22538){
var vec__22539 = p__22538;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22539,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22539,(1),null);
var job = vec__22539;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__11457__auto___22852 = n;
var __22853 = (0);
while(true){
if((__22853 < n__11457__auto___22852)){
var G__22549_22855 = type;
var G__22549_22856__$1 = (((G__22549_22855 instanceof cljs.core.Keyword))?G__22549_22855.fqn:null);
switch (G__22549_22856__$1) {
case "compute":
var c__21855__auto___22858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22853,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (__22853,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function (state_22565){
var state_val_22566 = (state_22565[(1)]);
if((state_val_22566 === (1))){
var state_22565__$1 = state_22565;
var statearr_22570_22861 = state_22565__$1;
(statearr_22570_22861[(2)] = null);

(statearr_22570_22861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22566 === (2))){
var state_22565__$1 = state_22565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22565__$1,(4),jobs);
} else {
if((state_val_22566 === (3))){
var inst_22563 = (state_22565[(2)]);
var state_22565__$1 = state_22565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22565__$1,inst_22563);
} else {
if((state_val_22566 === (4))){
var inst_22555 = (state_22565[(2)]);
var inst_22556 = process(inst_22555);
var state_22565__$1 = state_22565;
if(cljs.core.truth_(inst_22556)){
var statearr_22575_22865 = state_22565__$1;
(statearr_22575_22865[(1)] = (5));

} else {
var statearr_22576_22867 = state_22565__$1;
(statearr_22576_22867[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22566 === (5))){
var state_22565__$1 = state_22565;
var statearr_22577_22873 = state_22565__$1;
(statearr_22577_22873[(2)] = null);

(statearr_22577_22873[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22566 === (6))){
var state_22565__$1 = state_22565;
var statearr_22578_22874 = state_22565__$1;
(statearr_22578_22874[(2)] = null);

(statearr_22578_22874[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22566 === (7))){
var inst_22561 = (state_22565[(2)]);
var state_22565__$1 = state_22565;
var statearr_22583_22876 = state_22565__$1;
(statearr_22583_22876[(2)] = inst_22561);

(statearr_22583_22876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22853,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
;
return ((function (__22853,switch__21492__auto__,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_22588 = [null,null,null,null,null,null,null];
(statearr_22588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__);

(statearr_22588[(1)] = (1));

return statearr_22588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1 = (function (state_22565){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22565);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22591){if((e22591 instanceof Object)){
var ex__21496__auto__ = e22591;
var statearr_22592_22882 = state_22565;
(statearr_22592_22882[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22565);

return cljs.core.cst$kw$recur;
} else {
throw e22591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__22884 = state_22565;
state_22565 = G__22884;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = function(state_22565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1.call(this,state_22565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__;
})()
;})(__22853,switch__21492__auto__,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_22597 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22597[(6)] = c__21855__auto___22858);

return statearr_22597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(__22853,c__21855__auto___22858,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
);


break;
case "async":
var c__21855__auto___22885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22853,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (__22853,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function (state_22612){
var state_val_22613 = (state_22612[(1)]);
if((state_val_22613 === (1))){
var state_22612__$1 = state_22612;
var statearr_22614_22887 = state_22612__$1;
(statearr_22614_22887[(2)] = null);

(statearr_22614_22887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22613 === (2))){
var state_22612__$1 = state_22612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22612__$1,(4),jobs);
} else {
if((state_val_22613 === (3))){
var inst_22610 = (state_22612[(2)]);
var state_22612__$1 = state_22612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22612__$1,inst_22610);
} else {
if((state_val_22613 === (4))){
var inst_22602 = (state_22612[(2)]);
var inst_22603 = async(inst_22602);
var state_22612__$1 = state_22612;
if(cljs.core.truth_(inst_22603)){
var statearr_22615_22896 = state_22612__$1;
(statearr_22615_22896[(1)] = (5));

} else {
var statearr_22616_22900 = state_22612__$1;
(statearr_22616_22900[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22613 === (5))){
var state_22612__$1 = state_22612;
var statearr_22621_22901 = state_22612__$1;
(statearr_22621_22901[(2)] = null);

(statearr_22621_22901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22613 === (6))){
var state_22612__$1 = state_22612;
var statearr_22622_22906 = state_22612__$1;
(statearr_22622_22906[(2)] = null);

(statearr_22622_22906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22613 === (7))){
var inst_22608 = (state_22612[(2)]);
var state_22612__$1 = state_22612;
var statearr_22627_22910 = state_22612__$1;
(statearr_22627_22910[(2)] = inst_22608);

(statearr_22627_22910[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__22853,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
;
return ((function (__22853,switch__21492__auto__,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_22628 = [null,null,null,null,null,null,null];
(statearr_22628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__);

(statearr_22628[(1)] = (1));

return statearr_22628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1 = (function (state_22612){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22612);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22629){if((e22629 instanceof Object)){
var ex__21496__auto__ = e22629;
var statearr_22630_22914 = state_22612;
(statearr_22630_22914[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22612);

return cljs.core.cst$kw$recur;
} else {
throw e22629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__22919 = state_22612;
state_22612 = G__22919;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = function(state_22612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1.call(this,state_22612);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__;
})()
;})(__22853,switch__21492__auto__,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_22635 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22635[(6)] = c__21855__auto___22885);

return statearr_22635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(__22853,c__21855__auto___22885,G__22549_22855,G__22549_22856__$1,n__11457__auto___22852,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22549_22856__$1)].join('')));

}

var G__22920 = (__22853 + (1));
__22853 = G__22920;
continue;
} else {
}
break;
}

var c__21855__auto___22921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___22921,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___22921,jobs,results,process,async){
return (function (state_22666){
var state_val_22669 = (state_22666[(1)]);
if((state_val_22669 === (1))){
var state_22666__$1 = state_22666;
var statearr_22670_22926 = state_22666__$1;
(statearr_22670_22926[(2)] = null);

(statearr_22670_22926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22669 === (2))){
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22666__$1,(4),from);
} else {
if((state_val_22669 === (3))){
var inst_22664 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22666__$1,inst_22664);
} else {
if((state_val_22669 === (4))){
var inst_22640 = (state_22666[(7)]);
var inst_22640__$1 = (state_22666[(2)]);
var inst_22641 = (inst_22640__$1 == null);
var state_22666__$1 = (function (){var statearr_22677 = state_22666;
(statearr_22677[(7)] = inst_22640__$1);

return statearr_22677;
})();
if(cljs.core.truth_(inst_22641)){
var statearr_22678_22928 = state_22666__$1;
(statearr_22678_22928[(1)] = (5));

} else {
var statearr_22679_22929 = state_22666__$1;
(statearr_22679_22929[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22669 === (5))){
var inst_22643 = cljs.core.async.close_BANG_(jobs);
var state_22666__$1 = state_22666;
var statearr_22680_22930 = state_22666__$1;
(statearr_22680_22930[(2)] = inst_22643);

(statearr_22680_22930[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22669 === (6))){
var inst_22640 = (state_22666[(7)]);
var inst_22645 = (state_22666[(8)]);
var inst_22645__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22651 = [inst_22640,inst_22645__$1];
var inst_22652 = (new cljs.core.PersistentVector(null,2,(5),inst_22646,inst_22651,null));
var state_22666__$1 = (function (){var statearr_22692 = state_22666;
(statearr_22692[(8)] = inst_22645__$1);

return statearr_22692;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22666__$1,(8),jobs,inst_22652);
} else {
if((state_val_22669 === (7))){
var inst_22662 = (state_22666[(2)]);
var state_22666__$1 = state_22666;
var statearr_22694_22935 = state_22666__$1;
(statearr_22694_22935[(2)] = inst_22662);

(statearr_22694_22935[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22669 === (8))){
var inst_22645 = (state_22666[(8)]);
var inst_22654 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22696 = state_22666;
(statearr_22696[(9)] = inst_22654);

return statearr_22696;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22666__$1,(9),results,inst_22645);
} else {
if((state_val_22669 === (9))){
var inst_22659 = (state_22666[(2)]);
var state_22666__$1 = (function (){var statearr_22703 = state_22666;
(statearr_22703[(10)] = inst_22659);

return statearr_22703;
})();
var statearr_22705_22936 = state_22666__$1;
(statearr_22705_22936[(2)] = null);

(statearr_22705_22936[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21855__auto___22921,jobs,results,process,async))
;
return ((function (switch__21492__auto__,c__21855__auto___22921,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_22712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1 = (function (state_22666){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22666);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22716){if((e22716 instanceof Object)){
var ex__21496__auto__ = e22716;
var statearr_22721_22953 = state_22666;
(statearr_22721_22953[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22666);

return cljs.core.cst$kw$recur;
} else {
throw e22716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__22955 = state_22666;
state_22666 = G__22955;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = function(state_22666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1.call(this,state_22666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___22921,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_22722 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22722[(6)] = c__21855__auto___22921);

return statearr_22722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___22921,jobs,results,process,async))
);


var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__,jobs,results,process,async){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__,jobs,results,process,async){
return (function (state_22780){
var state_val_22781 = (state_22780[(1)]);
if((state_val_22781 === (7))){
var inst_22772 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
var statearr_22782_22968 = state_22780__$1;
(statearr_22782_22968[(2)] = inst_22772);

(statearr_22782_22968[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (20))){
var state_22780__$1 = state_22780;
var statearr_22783_22970 = state_22780__$1;
(statearr_22783_22970[(2)] = null);

(statearr_22783_22970[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (1))){
var state_22780__$1 = state_22780;
var statearr_22784_22971 = state_22780__$1;
(statearr_22784_22971[(2)] = null);

(statearr_22784_22971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (4))){
var inst_22732 = (state_22780[(7)]);
var inst_22732__$1 = (state_22780[(2)]);
var inst_22733 = (inst_22732__$1 == null);
var state_22780__$1 = (function (){var statearr_22786 = state_22780;
(statearr_22786[(7)] = inst_22732__$1);

return statearr_22786;
})();
if(cljs.core.truth_(inst_22733)){
var statearr_22787_22974 = state_22780__$1;
(statearr_22787_22974[(1)] = (5));

} else {
var statearr_22788_22975 = state_22780__$1;
(statearr_22788_22975[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (15))){
var inst_22750 = (state_22780[(8)]);
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22780__$1,(18),to,inst_22750);
} else {
if((state_val_22781 === (21))){
var inst_22767 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
var statearr_22789_22976 = state_22780__$1;
(statearr_22789_22976[(2)] = inst_22767);

(statearr_22789_22976[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (13))){
var inst_22769 = (state_22780[(2)]);
var state_22780__$1 = (function (){var statearr_22790 = state_22780;
(statearr_22790[(9)] = inst_22769);

return statearr_22790;
})();
var statearr_22791_22977 = state_22780__$1;
(statearr_22791_22977[(2)] = null);

(statearr_22791_22977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (6))){
var inst_22732 = (state_22780[(7)]);
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22780__$1,(11),inst_22732);
} else {
if((state_val_22781 === (17))){
var inst_22762 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
if(cljs.core.truth_(inst_22762)){
var statearr_22792_22978 = state_22780__$1;
(statearr_22792_22978[(1)] = (19));

} else {
var statearr_22793_22979 = state_22780__$1;
(statearr_22793_22979[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (3))){
var inst_22774 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22780__$1,inst_22774);
} else {
if((state_val_22781 === (12))){
var inst_22745 = (state_22780[(10)]);
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22780__$1,(14),inst_22745);
} else {
if((state_val_22781 === (2))){
var state_22780__$1 = state_22780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22780__$1,(4),results);
} else {
if((state_val_22781 === (19))){
var state_22780__$1 = state_22780;
var statearr_22794_22996 = state_22780__$1;
(statearr_22794_22996[(2)] = null);

(statearr_22794_22996[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (11))){
var inst_22745 = (state_22780[(2)]);
var state_22780__$1 = (function (){var statearr_22795 = state_22780;
(statearr_22795[(10)] = inst_22745);

return statearr_22795;
})();
var statearr_22796_22997 = state_22780__$1;
(statearr_22796_22997[(2)] = null);

(statearr_22796_22997[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (9))){
var state_22780__$1 = state_22780;
var statearr_22797_22999 = state_22780__$1;
(statearr_22797_22999[(2)] = null);

(statearr_22797_22999[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (5))){
var state_22780__$1 = state_22780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22802_23000 = state_22780__$1;
(statearr_22802_23000[(1)] = (8));

} else {
var statearr_22803_23001 = state_22780__$1;
(statearr_22803_23001[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (14))){
var inst_22750 = (state_22780[(8)]);
var inst_22755 = (state_22780[(11)]);
var inst_22750__$1 = (state_22780[(2)]);
var inst_22754 = (inst_22750__$1 == null);
var inst_22755__$1 = cljs.core.not(inst_22754);
var state_22780__$1 = (function (){var statearr_22807 = state_22780;
(statearr_22807[(8)] = inst_22750__$1);

(statearr_22807[(11)] = inst_22755__$1);

return statearr_22807;
})();
if(inst_22755__$1){
var statearr_22808_23003 = state_22780__$1;
(statearr_22808_23003[(1)] = (15));

} else {
var statearr_22809_23004 = state_22780__$1;
(statearr_22809_23004[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (16))){
var inst_22755 = (state_22780[(11)]);
var state_22780__$1 = state_22780;
var statearr_22810_23005 = state_22780__$1;
(statearr_22810_23005[(2)] = inst_22755);

(statearr_22810_23005[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (10))){
var inst_22742 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
var statearr_22811_23006 = state_22780__$1;
(statearr_22811_23006[(2)] = inst_22742);

(statearr_22811_23006[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (18))){
var inst_22759 = (state_22780[(2)]);
var state_22780__$1 = state_22780;
var statearr_22812_23010 = state_22780__$1;
(statearr_22812_23010[(2)] = inst_22759);

(statearr_22812_23010[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22781 === (8))){
var inst_22739 = cljs.core.async.close_BANG_(to);
var state_22780__$1 = state_22780;
var statearr_22813_23013 = state_22780__$1;
(statearr_22813_23013[(2)] = inst_22739);

(statearr_22813_23013[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});})(c__21855__auto__,jobs,results,process,async))
;
return ((function (switch__21492__auto__,c__21855__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_22818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__);

(statearr_22818[(1)] = (1));

return statearr_22818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1 = (function (state_22780){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_22780);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e22819){if((e22819 instanceof Object)){
var ex__21496__auto__ = e22819;
var statearr_22820_23020 = state_22780;
(statearr_22820_23020[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22780);

return cljs.core.cst$kw$recur;
} else {
throw e22819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__23021 = state_22780;
state_22780 = G__23021;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__ = function(state_22780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1.call(this,state_22780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__,jobs,results,process,async))
})();
var state__21857__auto__ = (function (){var statearr_22825 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_22825[(6)] = c__21855__auto__);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__,jobs,results,process,async))
);

return c__21855__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23027 = arguments.length;
switch (G__23027) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23052 = arguments.length;
switch (G__23052) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23097 = arguments.length;
switch (G__23097) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21855__auto___23193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___23193,tc,fc){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___23193,tc,fc){
return (function (state_23130){
var state_val_23131 = (state_23130[(1)]);
if((state_val_23131 === (7))){
var inst_23126 = (state_23130[(2)]);
var state_23130__$1 = state_23130;
var statearr_23136_23195 = state_23130__$1;
(statearr_23136_23195[(2)] = inst_23126);

(statearr_23136_23195[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (1))){
var state_23130__$1 = state_23130;
var statearr_23139_23198 = state_23130__$1;
(statearr_23139_23198[(2)] = null);

(statearr_23139_23198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (4))){
var inst_23106 = (state_23130[(7)]);
var inst_23106__$1 = (state_23130[(2)]);
var inst_23107 = (inst_23106__$1 == null);
var state_23130__$1 = (function (){var statearr_23141 = state_23130;
(statearr_23141[(7)] = inst_23106__$1);

return statearr_23141;
})();
if(cljs.core.truth_(inst_23107)){
var statearr_23142_23205 = state_23130__$1;
(statearr_23142_23205[(1)] = (5));

} else {
var statearr_23144_23206 = state_23130__$1;
(statearr_23144_23206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (13))){
var state_23130__$1 = state_23130;
var statearr_23146_23211 = state_23130__$1;
(statearr_23146_23211[(2)] = null);

(statearr_23146_23211[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (6))){
var inst_23106 = (state_23130[(7)]);
var inst_23112 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23106) : p.call(null,inst_23106));
var state_23130__$1 = state_23130;
if(cljs.core.truth_(inst_23112)){
var statearr_23148_23214 = state_23130__$1;
(statearr_23148_23214[(1)] = (9));

} else {
var statearr_23150_23217 = state_23130__$1;
(statearr_23150_23217[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (3))){
var inst_23128 = (state_23130[(2)]);
var state_23130__$1 = state_23130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23130__$1,inst_23128);
} else {
if((state_val_23131 === (12))){
var state_23130__$1 = state_23130;
var statearr_23154_23218 = state_23130__$1;
(statearr_23154_23218[(2)] = null);

(statearr_23154_23218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (2))){
var state_23130__$1 = state_23130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23130__$1,(4),ch);
} else {
if((state_val_23131 === (11))){
var inst_23106 = (state_23130[(7)]);
var inst_23116 = (state_23130[(2)]);
var state_23130__$1 = state_23130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23130__$1,(8),inst_23116,inst_23106);
} else {
if((state_val_23131 === (9))){
var state_23130__$1 = state_23130;
var statearr_23159_23224 = state_23130__$1;
(statearr_23159_23224[(2)] = tc);

(statearr_23159_23224[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (5))){
var inst_23109 = cljs.core.async.close_BANG_(tc);
var inst_23110 = cljs.core.async.close_BANG_(fc);
var state_23130__$1 = (function (){var statearr_23162 = state_23130;
(statearr_23162[(8)] = inst_23109);

return statearr_23162;
})();
var statearr_23163_23226 = state_23130__$1;
(statearr_23163_23226[(2)] = inst_23110);

(statearr_23163_23226[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (14))){
var inst_23124 = (state_23130[(2)]);
var state_23130__$1 = state_23130;
var statearr_23166_23228 = state_23130__$1;
(statearr_23166_23228[(2)] = inst_23124);

(statearr_23166_23228[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (10))){
var state_23130__$1 = state_23130;
var statearr_23169_23230 = state_23130__$1;
(statearr_23169_23230[(2)] = fc);

(statearr_23169_23230[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23131 === (8))){
var inst_23118 = (state_23130[(2)]);
var state_23130__$1 = state_23130;
if(cljs.core.truth_(inst_23118)){
var statearr_23170_23231 = state_23130__$1;
(statearr_23170_23231[(1)] = (12));

} else {
var statearr_23171_23232 = state_23130__$1;
(statearr_23171_23232[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
});})(c__21855__auto___23193,tc,fc))
;
return ((function (switch__21492__auto__,c__21855__auto___23193,tc,fc){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_23173 = [null,null,null,null,null,null,null,null,null];
(statearr_23173[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_23173[(1)] = (1));

return statearr_23173;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_23130){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_23130);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e23174){if((e23174 instanceof Object)){
var ex__21496__auto__ = e23174;
var statearr_23175_23239 = state_23130;
(statearr_23175_23239[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23130);

return cljs.core.cst$kw$recur;
} else {
throw e23174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__23240 = state_23130;
state_23130 = G__23240;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_23130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_23130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___23193,tc,fc))
})();
var state__21857__auto__ = (function (){var statearr_23176 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_23176[(6)] = c__21855__auto___23193);

return statearr_23176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___23193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__){
return (function (state_23268){
var state_val_23269 = (state_23268[(1)]);
if((state_val_23269 === (7))){
var inst_23264 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23274_23322 = state_23268__$1;
(statearr_23274_23322[(2)] = inst_23264);

(statearr_23274_23322[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (1))){
var inst_23247 = init;
var state_23268__$1 = (function (){var statearr_23275 = state_23268;
(statearr_23275[(7)] = inst_23247);

return statearr_23275;
})();
var statearr_23276_23327 = state_23268__$1;
(statearr_23276_23327[(2)] = null);

(statearr_23276_23327[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (4))){
var inst_23250 = (state_23268[(8)]);
var inst_23250__$1 = (state_23268[(2)]);
var inst_23252 = (inst_23250__$1 == null);
var state_23268__$1 = (function (){var statearr_23277 = state_23268;
(statearr_23277[(8)] = inst_23250__$1);

return statearr_23277;
})();
if(cljs.core.truth_(inst_23252)){
var statearr_23279_23330 = state_23268__$1;
(statearr_23279_23330[(1)] = (5));

} else {
var statearr_23280_23336 = state_23268__$1;
(statearr_23280_23336[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (6))){
var inst_23255 = (state_23268[(9)]);
var inst_23247 = (state_23268[(7)]);
var inst_23250 = (state_23268[(8)]);
var inst_23255__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23247,inst_23250) : f.call(null,inst_23247,inst_23250));
var inst_23256 = cljs.core.reduced_QMARK_(inst_23255__$1);
var state_23268__$1 = (function (){var statearr_23283 = state_23268;
(statearr_23283[(9)] = inst_23255__$1);

return statearr_23283;
})();
if(inst_23256){
var statearr_23286_23340 = state_23268__$1;
(statearr_23286_23340[(1)] = (8));

} else {
var statearr_23287_23341 = state_23268__$1;
(statearr_23287_23341[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (3))){
var inst_23266 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23268__$1,inst_23266);
} else {
if((state_val_23269 === (2))){
var state_23268__$1 = state_23268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23268__$1,(4),ch);
} else {
if((state_val_23269 === (9))){
var inst_23255 = (state_23268[(9)]);
var inst_23247 = inst_23255;
var state_23268__$1 = (function (){var statearr_23293 = state_23268;
(statearr_23293[(7)] = inst_23247);

return statearr_23293;
})();
var statearr_23294_23350 = state_23268__$1;
(statearr_23294_23350[(2)] = null);

(statearr_23294_23350[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (5))){
var inst_23247 = (state_23268[(7)]);
var state_23268__$1 = state_23268;
var statearr_23299_23351 = state_23268__$1;
(statearr_23299_23351[(2)] = inst_23247);

(statearr_23299_23351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (10))){
var inst_23262 = (state_23268[(2)]);
var state_23268__$1 = state_23268;
var statearr_23303_23354 = state_23268__$1;
(statearr_23303_23354[(2)] = inst_23262);

(statearr_23303_23354[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23269 === (8))){
var inst_23255 = (state_23268[(9)]);
var inst_23258 = cljs.core.deref(inst_23255);
var state_23268__$1 = state_23268;
var statearr_23304_23358 = state_23268__$1;
(statearr_23304_23358[(2)] = inst_23258);

(statearr_23304_23358[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21493__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21493__auto____0 = (function (){
var statearr_23309 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23309[(0)] = cljs$core$async$reduce_$_state_machine__21493__auto__);

(statearr_23309[(1)] = (1));

return statearr_23309;
});
var cljs$core$async$reduce_$_state_machine__21493__auto____1 = (function (state_23268){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_23268);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e23310){if((e23310 instanceof Object)){
var ex__21496__auto__ = e23310;
var statearr_23313_23365 = state_23268;
(statearr_23313_23365[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23268);

return cljs.core.cst$kw$recur;
} else {
throw e23310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__23366 = state_23268;
state_23268 = G__23366;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21493__auto__ = function(state_23268){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21493__auto____1.call(this,state_23268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21493__auto____0;
cljs$core$async$reduce_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21493__auto____1;
return cljs$core$async$reduce_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_23316 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_23316[(6)] = c__21855__auto__);

return statearr_23316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__,f__$1){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__,f__$1){
return (function (state_23384){
var state_val_23385 = (state_23384[(1)]);
if((state_val_23385 === (1))){
var inst_23378 = cljs.core.async.reduce(f__$1,init,ch);
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23384__$1,(2),inst_23378);
} else {
if((state_val_23385 === (2))){
var inst_23381 = (state_23384[(2)]);
var inst_23382 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_23381) : f__$1.call(null,inst_23381));
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23384__$1,inst_23382);
} else {
return null;
}
}
});})(c__21855__auto__,f__$1))
;
return ((function (switch__21492__auto__,c__21855__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21493__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21493__auto____0 = (function (){
var statearr_23397 = [null,null,null,null,null,null,null];
(statearr_23397[(0)] = cljs$core$async$transduce_$_state_machine__21493__auto__);

(statearr_23397[(1)] = (1));

return statearr_23397;
});
var cljs$core$async$transduce_$_state_machine__21493__auto____1 = (function (state_23384){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_23384);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e23398){if((e23398 instanceof Object)){
var ex__21496__auto__ = e23398;
var statearr_23399_23432 = state_23384;
(statearr_23399_23432[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23384);

return cljs.core.cst$kw$recur;
} else {
throw e23398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__23437 = state_23384;
state_23384 = G__23437;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21493__auto__ = function(state_23384){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21493__auto____1.call(this,state_23384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21493__auto____0;
cljs$core$async$transduce_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21493__auto____1;
return cljs$core$async$transduce_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__,f__$1))
})();
var state__21857__auto__ = (function (){var statearr_23405 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_23405[(6)] = c__21855__auto__);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__,f__$1))
);

return c__21855__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23445 = arguments.length;
switch (G__23445) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__){
return (function (state_23480){
var state_val_23481 = (state_23480[(1)]);
if((state_val_23481 === (7))){
var inst_23458 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23488_23536 = state_23480__$1;
(statearr_23488_23536[(2)] = inst_23458);

(statearr_23488_23536[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (1))){
var inst_23447 = cljs.core.seq(coll);
var inst_23449 = inst_23447;
var state_23480__$1 = (function (){var statearr_23489 = state_23480;
(statearr_23489[(7)] = inst_23449);

return statearr_23489;
})();
var statearr_23490_23545 = state_23480__$1;
(statearr_23490_23545[(2)] = null);

(statearr_23490_23545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (4))){
var inst_23449 = (state_23480[(7)]);
var inst_23455 = cljs.core.first(inst_23449);
var state_23480__$1 = state_23480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23480__$1,(7),ch,inst_23455);
} else {
if((state_val_23481 === (13))){
var inst_23472 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23492_23548 = state_23480__$1;
(statearr_23492_23548[(2)] = inst_23472);

(statearr_23492_23548[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (6))){
var inst_23461 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
if(cljs.core.truth_(inst_23461)){
var statearr_23495_23549 = state_23480__$1;
(statearr_23495_23549[(1)] = (8));

} else {
var statearr_23496_23551 = state_23480__$1;
(statearr_23496_23551[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (3))){
var inst_23477 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23480__$1,inst_23477);
} else {
if((state_val_23481 === (12))){
var state_23480__$1 = state_23480;
var statearr_23500_23552 = state_23480__$1;
(statearr_23500_23552[(2)] = null);

(statearr_23500_23552[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (2))){
var inst_23449 = (state_23480[(7)]);
var state_23480__$1 = state_23480;
if(cljs.core.truth_(inst_23449)){
var statearr_23501_23554 = state_23480__$1;
(statearr_23501_23554[(1)] = (4));

} else {
var statearr_23502_23555 = state_23480__$1;
(statearr_23502_23555[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (11))){
var inst_23469 = cljs.core.async.close_BANG_(ch);
var state_23480__$1 = state_23480;
var statearr_23504_23559 = state_23480__$1;
(statearr_23504_23559[(2)] = inst_23469);

(statearr_23504_23559[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (9))){
var state_23480__$1 = state_23480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23507_23563 = state_23480__$1;
(statearr_23507_23563[(1)] = (11));

} else {
var statearr_23509_23564 = state_23480__$1;
(statearr_23509_23564[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (5))){
var inst_23449 = (state_23480[(7)]);
var state_23480__$1 = state_23480;
var statearr_23515_23565 = state_23480__$1;
(statearr_23515_23565[(2)] = inst_23449);

(statearr_23515_23565[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (10))){
var inst_23474 = (state_23480[(2)]);
var state_23480__$1 = state_23480;
var statearr_23518_23569 = state_23480__$1;
(statearr_23518_23569[(2)] = inst_23474);

(statearr_23518_23569[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23481 === (8))){
var inst_23449 = (state_23480[(7)]);
var inst_23463 = cljs.core.next(inst_23449);
var inst_23449__$1 = inst_23463;
var state_23480__$1 = (function (){var statearr_23519 = state_23480;
(statearr_23519[(7)] = inst_23449__$1);

return statearr_23519;
})();
var statearr_23520_23574 = state_23480__$1;
(statearr_23520_23574[(2)] = null);

(statearr_23520_23574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});})(c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_23522 = [null,null,null,null,null,null,null,null];
(statearr_23522[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_23522[(1)] = (1));

return statearr_23522;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_23480){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_23480);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e23523){if((e23523 instanceof Object)){
var ex__21496__auto__ = e23523;
var statearr_23524_23579 = state_23480;
(statearr_23524_23579[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23480);

return cljs.core.cst$kw$recur;
} else {
throw e23523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__23581 = state_23480;
state_23480 = G__23581;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_23480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_23480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_23527 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_23527[(6)] = c__21855__auto__);

return statearr_23527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__11145__auto__ = (((_ == null))?null:_);
var m__11146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__11146__auto__.call(null,_));
} else {
var m__11146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__11146__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11146__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__11146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11146__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto__.call(null,m,ch));
} else {
var m__11146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11146__auto__.call(null,m));
} else {
var m__11146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11146__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23632 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23632 = (function (ch,cs,meta23633){
this.ch = ch;
this.cs = cs;
this.meta23633 = meta23633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23634,meta23633__$1){
var self__ = this;
var _23634__$1 = this;
return (new cljs.core.async.t_cljs$core$async23632(self__.ch,self__.cs,meta23633__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23634){
var self__ = this;
var _23634__$1 = this;
return self__.meta23633;
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23633], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23632";

cljs.core.async.t_cljs$core$async23632.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async23632");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23632 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23632(ch__$1,cs__$1,meta23633){
return (new cljs.core.async.t_cljs$core$async23632(ch__$1,cs__$1,meta23633));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23632(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21855__auto___24062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___24062,cs,m,dchan,dctr,done){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___24062,cs,m,dchan,dctr,done){
return (function (state_23848){
var state_val_23849 = (state_23848[(1)]);
if((state_val_23849 === (7))){
var inst_23838 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23855_24063 = state_23848__$1;
(statearr_23855_24063[(2)] = inst_23838);

(statearr_23855_24063[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (20))){
var inst_23712 = (state_23848[(7)]);
var inst_23725 = cljs.core.first(inst_23712);
var inst_23727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23725,(0),null);
var inst_23728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23725,(1),null);
var state_23848__$1 = (function (){var statearr_23861 = state_23848;
(statearr_23861[(8)] = inst_23727);

return statearr_23861;
})();
if(cljs.core.truth_(inst_23728)){
var statearr_23862_24065 = state_23848__$1;
(statearr_23862_24065[(1)] = (22));

} else {
var statearr_23864_24066 = state_23848__$1;
(statearr_23864_24066[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (27))){
var inst_23769 = (state_23848[(9)]);
var inst_23669 = (state_23848[(10)]);
var inst_23767 = (state_23848[(11)]);
var inst_23774 = (state_23848[(12)]);
var inst_23774__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23767,inst_23769);
var inst_23777 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23774__$1,inst_23669,done);
var state_23848__$1 = (function (){var statearr_23875 = state_23848;
(statearr_23875[(12)] = inst_23774__$1);

return statearr_23875;
})();
if(cljs.core.truth_(inst_23777)){
var statearr_23876_24067 = state_23848__$1;
(statearr_23876_24067[(1)] = (30));

} else {
var statearr_23877_24068 = state_23848__$1;
(statearr_23877_24068[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (1))){
var state_23848__$1 = state_23848;
var statearr_23879_24071 = state_23848__$1;
(statearr_23879_24071[(2)] = null);

(statearr_23879_24071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (24))){
var inst_23712 = (state_23848[(7)]);
var inst_23733 = (state_23848[(2)]);
var inst_23734 = cljs.core.next(inst_23712);
var inst_23680 = inst_23734;
var inst_23681 = null;
var inst_23682 = (0);
var inst_23683 = (0);
var state_23848__$1 = (function (){var statearr_23882 = state_23848;
(statearr_23882[(13)] = inst_23733);

(statearr_23882[(14)] = inst_23682);

(statearr_23882[(15)] = inst_23681);

(statearr_23882[(16)] = inst_23680);

(statearr_23882[(17)] = inst_23683);

return statearr_23882;
})();
var statearr_23891_24072 = state_23848__$1;
(statearr_23891_24072[(2)] = null);

(statearr_23891_24072[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (39))){
var state_23848__$1 = state_23848;
var statearr_23901_24073 = state_23848__$1;
(statearr_23901_24073[(2)] = null);

(statearr_23901_24073[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (4))){
var inst_23669 = (state_23848[(10)]);
var inst_23669__$1 = (state_23848[(2)]);
var inst_23670 = (inst_23669__$1 == null);
var state_23848__$1 = (function (){var statearr_23902 = state_23848;
(statearr_23902[(10)] = inst_23669__$1);

return statearr_23902;
})();
if(cljs.core.truth_(inst_23670)){
var statearr_23907_24076 = state_23848__$1;
(statearr_23907_24076[(1)] = (5));

} else {
var statearr_23908_24077 = state_23848__$1;
(statearr_23908_24077[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (15))){
var inst_23682 = (state_23848[(14)]);
var inst_23681 = (state_23848[(15)]);
var inst_23680 = (state_23848[(16)]);
var inst_23683 = (state_23848[(17)]);
var inst_23706 = (state_23848[(2)]);
var inst_23709 = (inst_23683 + (1));
var tmp23894 = inst_23682;
var tmp23895 = inst_23681;
var tmp23896 = inst_23680;
var inst_23680__$1 = tmp23896;
var inst_23681__$1 = tmp23895;
var inst_23682__$1 = tmp23894;
var inst_23683__$1 = inst_23709;
var state_23848__$1 = (function (){var statearr_23916 = state_23848;
(statearr_23916[(18)] = inst_23706);

(statearr_23916[(14)] = inst_23682__$1);

(statearr_23916[(15)] = inst_23681__$1);

(statearr_23916[(16)] = inst_23680__$1);

(statearr_23916[(17)] = inst_23683__$1);

return statearr_23916;
})();
var statearr_23918_24083 = state_23848__$1;
(statearr_23918_24083[(2)] = null);

(statearr_23918_24083[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (21))){
var inst_23738 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23927_24084 = state_23848__$1;
(statearr_23927_24084[(2)] = inst_23738);

(statearr_23927_24084[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (31))){
var inst_23774 = (state_23848[(12)]);
var inst_23780 = done(null);
var inst_23781 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23774);
var state_23848__$1 = (function (){var statearr_23930 = state_23848;
(statearr_23930[(19)] = inst_23780);

return statearr_23930;
})();
var statearr_23931_24085 = state_23848__$1;
(statearr_23931_24085[(2)] = inst_23781);

(statearr_23931_24085[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (32))){
var inst_23769 = (state_23848[(9)]);
var inst_23766 = (state_23848[(20)]);
var inst_23767 = (state_23848[(11)]);
var inst_23768 = (state_23848[(21)]);
var inst_23783 = (state_23848[(2)]);
var inst_23784 = (inst_23769 + (1));
var tmp23923 = inst_23766;
var tmp23924 = inst_23767;
var tmp23925 = inst_23768;
var inst_23766__$1 = tmp23923;
var inst_23767__$1 = tmp23924;
var inst_23768__$1 = tmp23925;
var inst_23769__$1 = inst_23784;
var state_23848__$1 = (function (){var statearr_23937 = state_23848;
(statearr_23937[(9)] = inst_23769__$1);

(statearr_23937[(20)] = inst_23766__$1);

(statearr_23937[(11)] = inst_23767__$1);

(statearr_23937[(22)] = inst_23783);

(statearr_23937[(21)] = inst_23768__$1);

return statearr_23937;
})();
var statearr_23941_24087 = state_23848__$1;
(statearr_23941_24087[(2)] = null);

(statearr_23941_24087[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (40))){
var inst_23802 = (state_23848[(23)]);
var inst_23808 = done(null);
var inst_23813 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23802);
var state_23848__$1 = (function (){var statearr_23949 = state_23848;
(statearr_23949[(24)] = inst_23808);

return statearr_23949;
})();
var statearr_23952_24092 = state_23848__$1;
(statearr_23952_24092[(2)] = inst_23813);

(statearr_23952_24092[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (33))){
var inst_23788 = (state_23848[(25)]);
var inst_23790 = cljs.core.chunked_seq_QMARK_(inst_23788);
var state_23848__$1 = state_23848;
if(inst_23790){
var statearr_23958_24098 = state_23848__$1;
(statearr_23958_24098[(1)] = (36));

} else {
var statearr_23959_24099 = state_23848__$1;
(statearr_23959_24099[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (13))){
var inst_23698 = (state_23848[(26)]);
var inst_23703 = cljs.core.async.close_BANG_(inst_23698);
var state_23848__$1 = state_23848;
var statearr_23963_24100 = state_23848__$1;
(statearr_23963_24100[(2)] = inst_23703);

(statearr_23963_24100[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (22))){
var inst_23727 = (state_23848[(8)]);
var inst_23730 = cljs.core.async.close_BANG_(inst_23727);
var state_23848__$1 = state_23848;
var statearr_23969_24101 = state_23848__$1;
(statearr_23969_24101[(2)] = inst_23730);

(statearr_23969_24101[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (36))){
var inst_23788 = (state_23848[(25)]);
var inst_23793 = cljs.core.chunk_first(inst_23788);
var inst_23794 = cljs.core.chunk_rest(inst_23788);
var inst_23798 = cljs.core.count(inst_23793);
var inst_23766 = inst_23794;
var inst_23767 = inst_23793;
var inst_23768 = inst_23798;
var inst_23769 = (0);
var state_23848__$1 = (function (){var statearr_23977 = state_23848;
(statearr_23977[(9)] = inst_23769);

(statearr_23977[(20)] = inst_23766);

(statearr_23977[(11)] = inst_23767);

(statearr_23977[(21)] = inst_23768);

return statearr_23977;
})();
var statearr_23981_24109 = state_23848__$1;
(statearr_23981_24109[(2)] = null);

(statearr_23981_24109[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (41))){
var inst_23788 = (state_23848[(25)]);
var inst_23815 = (state_23848[(2)]);
var inst_23816 = cljs.core.next(inst_23788);
var inst_23766 = inst_23816;
var inst_23767 = null;
var inst_23768 = (0);
var inst_23769 = (0);
var state_23848__$1 = (function (){var statearr_23983 = state_23848;
(statearr_23983[(9)] = inst_23769);

(statearr_23983[(20)] = inst_23766);

(statearr_23983[(11)] = inst_23767);

(statearr_23983[(27)] = inst_23815);

(statearr_23983[(21)] = inst_23768);

return statearr_23983;
})();
var statearr_23986_24114 = state_23848__$1;
(statearr_23986_24114[(2)] = null);

(statearr_23986_24114[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (43))){
var state_23848__$1 = state_23848;
var statearr_23988_24115 = state_23848__$1;
(statearr_23988_24115[(2)] = null);

(statearr_23988_24115[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (29))){
var inst_23824 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_23992_24116 = state_23848__$1;
(statearr_23992_24116[(2)] = inst_23824);

(statearr_23992_24116[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (44))){
var inst_23835 = (state_23848[(2)]);
var state_23848__$1 = (function (){var statearr_23994 = state_23848;
(statearr_23994[(28)] = inst_23835);

return statearr_23994;
})();
var statearr_23995_24124 = state_23848__$1;
(statearr_23995_24124[(2)] = null);

(statearr_23995_24124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (6))){
var inst_23752 = (state_23848[(29)]);
var inst_23751 = cljs.core.deref(cs);
var inst_23752__$1 = cljs.core.keys(inst_23751);
var inst_23753 = cljs.core.count(inst_23752__$1);
var inst_23754 = cljs.core.reset_BANG_(dctr,inst_23753);
var inst_23765 = cljs.core.seq(inst_23752__$1);
var inst_23766 = inst_23765;
var inst_23767 = null;
var inst_23768 = (0);
var inst_23769 = (0);
var state_23848__$1 = (function (){var statearr_23996 = state_23848;
(statearr_23996[(9)] = inst_23769);

(statearr_23996[(20)] = inst_23766);

(statearr_23996[(11)] = inst_23767);

(statearr_23996[(30)] = inst_23754);

(statearr_23996[(29)] = inst_23752__$1);

(statearr_23996[(21)] = inst_23768);

return statearr_23996;
})();
var statearr_23997_24132 = state_23848__$1;
(statearr_23997_24132[(2)] = null);

(statearr_23997_24132[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (28))){
var inst_23766 = (state_23848[(20)]);
var inst_23788 = (state_23848[(25)]);
var inst_23788__$1 = cljs.core.seq(inst_23766);
var state_23848__$1 = (function (){var statearr_23999 = state_23848;
(statearr_23999[(25)] = inst_23788__$1);

return statearr_23999;
})();
if(inst_23788__$1){
var statearr_24000_24134 = state_23848__$1;
(statearr_24000_24134[(1)] = (33));

} else {
var statearr_24001_24138 = state_23848__$1;
(statearr_24001_24138[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (25))){
var inst_23769 = (state_23848[(9)]);
var inst_23768 = (state_23848[(21)]);
var inst_23771 = (inst_23769 < inst_23768);
var inst_23772 = inst_23771;
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23772)){
var statearr_24002_24146 = state_23848__$1;
(statearr_24002_24146[(1)] = (27));

} else {
var statearr_24003_24147 = state_23848__$1;
(statearr_24003_24147[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (34))){
var state_23848__$1 = state_23848;
var statearr_24004_24148 = state_23848__$1;
(statearr_24004_24148[(2)] = null);

(statearr_24004_24148[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (17))){
var state_23848__$1 = state_23848;
var statearr_24008_24149 = state_23848__$1;
(statearr_24008_24149[(2)] = null);

(statearr_24008_24149[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (3))){
var inst_23840 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23848__$1,inst_23840);
} else {
if((state_val_23849 === (12))){
var inst_23743 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24009_24150 = state_23848__$1;
(statearr_24009_24150[(2)] = inst_23743);

(statearr_24009_24150[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (2))){
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23848__$1,(4),ch);
} else {
if((state_val_23849 === (23))){
var state_23848__$1 = state_23848;
var statearr_24011_24155 = state_23848__$1;
(statearr_24011_24155[(2)] = null);

(statearr_24011_24155[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (35))){
var inst_23822 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24012_24160 = state_23848__$1;
(statearr_24012_24160[(2)] = inst_23822);

(statearr_24012_24160[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (19))){
var inst_23712 = (state_23848[(7)]);
var inst_23717 = cljs.core.chunk_first(inst_23712);
var inst_23718 = cljs.core.chunk_rest(inst_23712);
var inst_23719 = cljs.core.count(inst_23717);
var inst_23680 = inst_23718;
var inst_23681 = inst_23717;
var inst_23682 = inst_23719;
var inst_23683 = (0);
var state_23848__$1 = (function (){var statearr_24015 = state_23848;
(statearr_24015[(14)] = inst_23682);

(statearr_24015[(15)] = inst_23681);

(statearr_24015[(16)] = inst_23680);

(statearr_24015[(17)] = inst_23683);

return statearr_24015;
})();
var statearr_24016_24165 = state_23848__$1;
(statearr_24016_24165[(2)] = null);

(statearr_24016_24165[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (11))){
var inst_23712 = (state_23848[(7)]);
var inst_23680 = (state_23848[(16)]);
var inst_23712__$1 = cljs.core.seq(inst_23680);
var state_23848__$1 = (function (){var statearr_24017 = state_23848;
(statearr_24017[(7)] = inst_23712__$1);

return statearr_24017;
})();
if(inst_23712__$1){
var statearr_24018_24167 = state_23848__$1;
(statearr_24018_24167[(1)] = (16));

} else {
var statearr_24019_24168 = state_23848__$1;
(statearr_24019_24168[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (9))){
var inst_23745 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24020_24169 = state_23848__$1;
(statearr_24020_24169[(2)] = inst_23745);

(statearr_24020_24169[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (5))){
var inst_23678 = cljs.core.deref(cs);
var inst_23679 = cljs.core.seq(inst_23678);
var inst_23680 = inst_23679;
var inst_23681 = null;
var inst_23682 = (0);
var inst_23683 = (0);
var state_23848__$1 = (function (){var statearr_24022 = state_23848;
(statearr_24022[(14)] = inst_23682);

(statearr_24022[(15)] = inst_23681);

(statearr_24022[(16)] = inst_23680);

(statearr_24022[(17)] = inst_23683);

return statearr_24022;
})();
var statearr_24023_24175 = state_23848__$1;
(statearr_24023_24175[(2)] = null);

(statearr_24023_24175[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (14))){
var state_23848__$1 = state_23848;
var statearr_24025_24178 = state_23848__$1;
(statearr_24025_24178[(2)] = null);

(statearr_24025_24178[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (45))){
var inst_23832 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24027_24182 = state_23848__$1;
(statearr_24027_24182[(2)] = inst_23832);

(statearr_24027_24182[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (26))){
var inst_23752 = (state_23848[(29)]);
var inst_23827 = (state_23848[(2)]);
var inst_23829 = cljs.core.seq(inst_23752);
var state_23848__$1 = (function (){var statearr_24028 = state_23848;
(statearr_24028[(31)] = inst_23827);

return statearr_24028;
})();
if(inst_23829){
var statearr_24029_24188 = state_23848__$1;
(statearr_24029_24188[(1)] = (42));

} else {
var statearr_24030_24189 = state_23848__$1;
(statearr_24030_24189[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (16))){
var inst_23712 = (state_23848[(7)]);
var inst_23714 = cljs.core.chunked_seq_QMARK_(inst_23712);
var state_23848__$1 = state_23848;
if(inst_23714){
var statearr_24031_24190 = state_23848__$1;
(statearr_24031_24190[(1)] = (19));

} else {
var statearr_24032_24191 = state_23848__$1;
(statearr_24032_24191[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (38))){
var inst_23819 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24033_24195 = state_23848__$1;
(statearr_24033_24195[(2)] = inst_23819);

(statearr_24033_24195[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (30))){
var state_23848__$1 = state_23848;
var statearr_24034_24199 = state_23848__$1;
(statearr_24034_24199[(2)] = null);

(statearr_24034_24199[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (10))){
var inst_23681 = (state_23848[(15)]);
var inst_23683 = (state_23848[(17)]);
var inst_23697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23681,inst_23683);
var inst_23698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23697,(0),null);
var inst_23699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23697,(1),null);
var state_23848__$1 = (function (){var statearr_24036 = state_23848;
(statearr_24036[(26)] = inst_23698);

return statearr_24036;
})();
if(cljs.core.truth_(inst_23699)){
var statearr_24038_24200 = state_23848__$1;
(statearr_24038_24200[(1)] = (13));

} else {
var statearr_24039_24201 = state_23848__$1;
(statearr_24039_24201[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (18))){
var inst_23741 = (state_23848[(2)]);
var state_23848__$1 = state_23848;
var statearr_24040_24202 = state_23848__$1;
(statearr_24040_24202[(2)] = inst_23741);

(statearr_24040_24202[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (42))){
var state_23848__$1 = state_23848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23848__$1,(45),dchan);
} else {
if((state_val_23849 === (37))){
var inst_23669 = (state_23848[(10)]);
var inst_23802 = (state_23848[(23)]);
var inst_23788 = (state_23848[(25)]);
var inst_23802__$1 = cljs.core.first(inst_23788);
var inst_23805 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23802__$1,inst_23669,done);
var state_23848__$1 = (function (){var statearr_24042 = state_23848;
(statearr_24042[(23)] = inst_23802__$1);

return statearr_24042;
})();
if(cljs.core.truth_(inst_23805)){
var statearr_24043_24203 = state_23848__$1;
(statearr_24043_24203[(1)] = (39));

} else {
var statearr_24044_24204 = state_23848__$1;
(statearr_24044_24204[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23849 === (8))){
var inst_23682 = (state_23848[(14)]);
var inst_23683 = (state_23848[(17)]);
var inst_23691 = (inst_23683 < inst_23682);
var inst_23692 = inst_23691;
var state_23848__$1 = state_23848;
if(cljs.core.truth_(inst_23692)){
var statearr_24045_24205 = state_23848__$1;
(statearr_24045_24205[(1)] = (10));

} else {
var statearr_24046_24206 = state_23848__$1;
(statearr_24046_24206[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});})(c__21855__auto___24062,cs,m,dchan,dctr,done))
;
return ((function (switch__21492__auto__,c__21855__auto___24062,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21493__auto__ = null;
var cljs$core$async$mult_$_state_machine__21493__auto____0 = (function (){
var statearr_24050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24050[(0)] = cljs$core$async$mult_$_state_machine__21493__auto__);

(statearr_24050[(1)] = (1));

return statearr_24050;
});
var cljs$core$async$mult_$_state_machine__21493__auto____1 = (function (state_23848){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_23848);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e24051){if((e24051 instanceof Object)){
var ex__21496__auto__ = e24051;
var statearr_24052_24212 = state_23848;
(statearr_24052_24212[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23848);

return cljs.core.cst$kw$recur;
} else {
throw e24051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__24215 = state_23848;
state_23848 = G__24215;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21493__auto__ = function(state_23848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21493__auto____1.call(this,state_23848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21493__auto____0;
cljs$core$async$mult_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21493__auto____1;
return cljs$core$async$mult_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___24062,cs,m,dchan,dctr,done))
})();
var state__21857__auto__ = (function (){var statearr_24053 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_24053[(6)] = c__21855__auto___24062);

return statearr_24053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___24062,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24219 = arguments.length;
switch (G__24219) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto__.call(null,m,ch));
} else {
var m__11146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto__.call(null,m,ch));
} else {
var m__11146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11146__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11146__auto__.call(null,m));
} else {
var m__11146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11146__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11146__auto__.call(null,m,state_map));
} else {
var m__11146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11146__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__11145__auto__ = (((m == null))?null:m);
var m__11146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11146__auto__.call(null,m,mode));
} else {
var m__11146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11146__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11698__auto__ = [];
var len__11691__auto___24362 = arguments.length;
var i__11692__auto___24363 = (0);
while(true){
if((i__11692__auto___24363 < len__11691__auto___24362)){
args__11698__auto__.push((arguments[i__11692__auto___24363]));

var G__24364 = (i__11692__auto___24363 + (1));
i__11692__auto___24363 = G__24364;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24329){
var map__24330 = p__24329;
var map__24330__$1 = ((((!((map__24330 == null)))?((((map__24330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24330):map__24330);
var opts = map__24330__$1;
var statearr_24343_24367 = state;
(statearr_24343_24367[(1)] = cont_block);


var temp__5459__auto__ = cljs.core.async.do_alts(((function (map__24330,map__24330__$1,opts){
return (function (val){
var statearr_24346_24372 = state;
(statearr_24346_24372[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24330,map__24330__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5459__auto__)){
var cb = temp__5459__auto__;
var statearr_24352_24376 = state;
(statearr_24352_24376[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24322){
var G__24323 = cljs.core.first(seq24322);
var seq24322__$1 = cljs.core.next(seq24322);
var G__24324 = cljs.core.first(seq24322__$1);
var seq24322__$2 = cljs.core.next(seq24322__$1);
var G__24325 = cljs.core.first(seq24322__$2);
var seq24322__$3 = cljs.core.next(seq24322__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24323,G__24324,G__24325,seq24322__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24409 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24410){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24410 = meta24410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24411,meta24410__$1){
var self__ = this;
var _24411__$1 = this;
return (new cljs.core.async.t_cljs$core$async24409(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24410__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24411){
var self__ = this;
var _24411__$1 = this;
return self__.meta24410;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta24410], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24409";

cljs.core.async.t_cljs$core$async24409.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async24409");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24409 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24409(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24410){
return (new cljs.core.async.t_cljs$core$async24409(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24410));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24409(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21855__auto___24689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24559){
var state_val_24560 = (state_24559[(1)]);
if((state_val_24560 === (7))){
var inst_24458 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24563_24694 = state_24559__$1;
(statearr_24563_24694[(2)] = inst_24458);

(statearr_24563_24694[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (20))){
var inst_24470 = (state_24559[(7)]);
var state_24559__$1 = state_24559;
var statearr_24568_24696 = state_24559__$1;
(statearr_24568_24696[(2)] = inst_24470);

(statearr_24568_24696[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (27))){
var state_24559__$1 = state_24559;
var statearr_24569_24697 = state_24559__$1;
(statearr_24569_24697[(2)] = null);

(statearr_24569_24697[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (1))){
var inst_24443 = (state_24559[(8)]);
var inst_24443__$1 = calc_state();
var inst_24447 = (inst_24443__$1 == null);
var inst_24448 = cljs.core.not(inst_24447);
var state_24559__$1 = (function (){var statearr_24570 = state_24559;
(statearr_24570[(8)] = inst_24443__$1);

return statearr_24570;
})();
if(inst_24448){
var statearr_24574_24719 = state_24559__$1;
(statearr_24574_24719[(1)] = (2));

} else {
var statearr_24578_24720 = state_24559__$1;
(statearr_24578_24720[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (24))){
var inst_24507 = (state_24559[(9)]);
var inst_24497 = (state_24559[(10)]);
var inst_24526 = (state_24559[(11)]);
var inst_24526__$1 = (inst_24497.cljs$core$IFn$_invoke$arity$1 ? inst_24497.cljs$core$IFn$_invoke$arity$1(inst_24507) : inst_24497.call(null,inst_24507));
var state_24559__$1 = (function (){var statearr_24579 = state_24559;
(statearr_24579[(11)] = inst_24526__$1);

return statearr_24579;
})();
if(cljs.core.truth_(inst_24526__$1)){
var statearr_24580_24725 = state_24559__$1;
(statearr_24580_24725[(1)] = (29));

} else {
var statearr_24582_24729 = state_24559__$1;
(statearr_24582_24729[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (4))){
var inst_24461 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24461)){
var statearr_24583_24733 = state_24559__$1;
(statearr_24583_24733[(1)] = (8));

} else {
var statearr_24584_24734 = state_24559__$1;
(statearr_24584_24734[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (15))){
var inst_24491 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24491)){
var statearr_24586_24735 = state_24559__$1;
(statearr_24586_24735[(1)] = (19));

} else {
var statearr_24587_24736 = state_24559__$1;
(statearr_24587_24736[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (21))){
var inst_24496 = (state_24559[(12)]);
var inst_24496__$1 = (state_24559[(2)]);
var inst_24497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24496__$1,cljs.core.cst$kw$solos);
var inst_24498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24496__$1,cljs.core.cst$kw$mutes);
var inst_24499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24496__$1,cljs.core.cst$kw$reads);
var state_24559__$1 = (function (){var statearr_24588 = state_24559;
(statearr_24588[(13)] = inst_24498);

(statearr_24588[(10)] = inst_24497);

(statearr_24588[(12)] = inst_24496__$1);

return statearr_24588;
})();
return cljs.core.async.ioc_alts_BANG_(state_24559__$1,(22),inst_24499);
} else {
if((state_val_24560 === (31))){
var inst_24534 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24534)){
var statearr_24589_24742 = state_24559__$1;
(statearr_24589_24742[(1)] = (32));

} else {
var statearr_24590_24743 = state_24559__$1;
(statearr_24590_24743[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (32))){
var inst_24505 = (state_24559[(14)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24559__$1,(35),out,inst_24505);
} else {
if((state_val_24560 === (33))){
var inst_24496 = (state_24559[(12)]);
var inst_24470 = inst_24496;
var state_24559__$1 = (function (){var statearr_24594 = state_24559;
(statearr_24594[(7)] = inst_24470);

return statearr_24594;
})();
var statearr_24595_24744 = state_24559__$1;
(statearr_24595_24744[(2)] = null);

(statearr_24595_24744[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (13))){
var inst_24470 = (state_24559[(7)]);
var inst_24480 = inst_24470.cljs$lang$protocol_mask$partition0$;
var inst_24481 = (inst_24480 & (64));
var inst_24482 = inst_24470.cljs$core$ISeq$;
var inst_24483 = (cljs.core.PROTOCOL_SENTINEL === inst_24482);
var inst_24484 = (inst_24481) || (inst_24483);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24484)){
var statearr_24596_24752 = state_24559__$1;
(statearr_24596_24752[(1)] = (16));

} else {
var statearr_24597_24753 = state_24559__$1;
(statearr_24597_24753[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (22))){
var inst_24507 = (state_24559[(9)]);
var inst_24505 = (state_24559[(14)]);
var inst_24504 = (state_24559[(2)]);
var inst_24505__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24504,(0),null);
var inst_24507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24504,(1),null);
var inst_24509 = (inst_24505__$1 == null);
var inst_24510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24507__$1,change);
var inst_24511 = (inst_24509) || (inst_24510);
var state_24559__$1 = (function (){var statearr_24598 = state_24559;
(statearr_24598[(9)] = inst_24507__$1);

(statearr_24598[(14)] = inst_24505__$1);

return statearr_24598;
})();
if(cljs.core.truth_(inst_24511)){
var statearr_24599_24755 = state_24559__$1;
(statearr_24599_24755[(1)] = (23));

} else {
var statearr_24600_24756 = state_24559__$1;
(statearr_24600_24756[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (36))){
var inst_24496 = (state_24559[(12)]);
var inst_24470 = inst_24496;
var state_24559__$1 = (function (){var statearr_24601 = state_24559;
(statearr_24601[(7)] = inst_24470);

return statearr_24601;
})();
var statearr_24602_24758 = state_24559__$1;
(statearr_24602_24758[(2)] = null);

(statearr_24602_24758[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (29))){
var inst_24526 = (state_24559[(11)]);
var state_24559__$1 = state_24559;
var statearr_24603_24759 = state_24559__$1;
(statearr_24603_24759[(2)] = inst_24526);

(statearr_24603_24759[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (6))){
var state_24559__$1 = state_24559;
var statearr_24604_24760 = state_24559__$1;
(statearr_24604_24760[(2)] = false);

(statearr_24604_24760[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (28))){
var inst_24522 = (state_24559[(2)]);
var inst_24523 = calc_state();
var inst_24470 = inst_24523;
var state_24559__$1 = (function (){var statearr_24605 = state_24559;
(statearr_24605[(7)] = inst_24470);

(statearr_24605[(15)] = inst_24522);

return statearr_24605;
})();
var statearr_24606_24761 = state_24559__$1;
(statearr_24606_24761[(2)] = null);

(statearr_24606_24761[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (25))){
var inst_24555 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24607_24763 = state_24559__$1;
(statearr_24607_24763[(2)] = inst_24555);

(statearr_24607_24763[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (34))){
var inst_24553 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24616_24764 = state_24559__$1;
(statearr_24616_24764[(2)] = inst_24553);

(statearr_24616_24764[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (17))){
var state_24559__$1 = state_24559;
var statearr_24619_24766 = state_24559__$1;
(statearr_24619_24766[(2)] = false);

(statearr_24619_24766[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (3))){
var state_24559__$1 = state_24559;
var statearr_24624_24767 = state_24559__$1;
(statearr_24624_24767[(2)] = false);

(statearr_24624_24767[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (12))){
var inst_24557 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24559__$1,inst_24557);
} else {
if((state_val_24560 === (2))){
var inst_24443 = (state_24559[(8)]);
var inst_24450 = inst_24443.cljs$lang$protocol_mask$partition0$;
var inst_24451 = (inst_24450 & (64));
var inst_24452 = inst_24443.cljs$core$ISeq$;
var inst_24453 = (cljs.core.PROTOCOL_SENTINEL === inst_24452);
var inst_24454 = (inst_24451) || (inst_24453);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24454)){
var statearr_24626_24768 = state_24559__$1;
(statearr_24626_24768[(1)] = (5));

} else {
var statearr_24627_24769 = state_24559__$1;
(statearr_24627_24769[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (23))){
var inst_24505 = (state_24559[(14)]);
var inst_24514 = (inst_24505 == null);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24514)){
var statearr_24630_24770 = state_24559__$1;
(statearr_24630_24770[(1)] = (26));

} else {
var statearr_24632_24771 = state_24559__$1;
(statearr_24632_24771[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (35))){
var inst_24542 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24542)){
var statearr_24633_24772 = state_24559__$1;
(statearr_24633_24772[(1)] = (36));

} else {
var statearr_24636_24776 = state_24559__$1;
(statearr_24636_24776[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (19))){
var inst_24470 = (state_24559[(7)]);
var inst_24493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24470);
var state_24559__$1 = state_24559;
var statearr_24637_24777 = state_24559__$1;
(statearr_24637_24777[(2)] = inst_24493);

(statearr_24637_24777[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (11))){
var inst_24470 = (state_24559[(7)]);
var inst_24477 = (inst_24470 == null);
var inst_24478 = cljs.core.not(inst_24477);
var state_24559__$1 = state_24559;
if(inst_24478){
var statearr_24638_24780 = state_24559__$1;
(statearr_24638_24780[(1)] = (13));

} else {
var statearr_24639_24781 = state_24559__$1;
(statearr_24639_24781[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (9))){
var inst_24443 = (state_24559[(8)]);
var state_24559__$1 = state_24559;
var statearr_24640_24782 = state_24559__$1;
(statearr_24640_24782[(2)] = inst_24443);

(statearr_24640_24782[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (5))){
var state_24559__$1 = state_24559;
var statearr_24641_24783 = state_24559__$1;
(statearr_24641_24783[(2)] = true);

(statearr_24641_24783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (14))){
var state_24559__$1 = state_24559;
var statearr_24642_24784 = state_24559__$1;
(statearr_24642_24784[(2)] = false);

(statearr_24642_24784[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (26))){
var inst_24507 = (state_24559[(9)]);
var inst_24519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24507);
var state_24559__$1 = state_24559;
var statearr_24643_24785 = state_24559__$1;
(statearr_24643_24785[(2)] = inst_24519);

(statearr_24643_24785[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (16))){
var state_24559__$1 = state_24559;
var statearr_24646_24786 = state_24559__$1;
(statearr_24646_24786[(2)] = true);

(statearr_24646_24786[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (38))){
var inst_24549 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24648_24787 = state_24559__$1;
(statearr_24648_24787[(2)] = inst_24549);

(statearr_24648_24787[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (30))){
var inst_24507 = (state_24559[(9)]);
var inst_24498 = (state_24559[(13)]);
var inst_24497 = (state_24559[(10)]);
var inst_24529 = cljs.core.empty_QMARK_(inst_24497);
var inst_24530 = (inst_24498.cljs$core$IFn$_invoke$arity$1 ? inst_24498.cljs$core$IFn$_invoke$arity$1(inst_24507) : inst_24498.call(null,inst_24507));
var inst_24531 = cljs.core.not(inst_24530);
var inst_24532 = (inst_24529) && (inst_24531);
var state_24559__$1 = state_24559;
var statearr_24649_24788 = state_24559__$1;
(statearr_24649_24788[(2)] = inst_24532);

(statearr_24649_24788[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (10))){
var inst_24443 = (state_24559[(8)]);
var inst_24466 = (state_24559[(2)]);
var inst_24467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24466,cljs.core.cst$kw$solos);
var inst_24468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24466,cljs.core.cst$kw$mutes);
var inst_24469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24466,cljs.core.cst$kw$reads);
var inst_24470 = inst_24443;
var state_24559__$1 = (function (){var statearr_24650 = state_24559;
(statearr_24650[(7)] = inst_24470);

(statearr_24650[(16)] = inst_24469);

(statearr_24650[(17)] = inst_24468);

(statearr_24650[(18)] = inst_24467);

return statearr_24650;
})();
var statearr_24651_24794 = state_24559__$1;
(statearr_24651_24794[(2)] = null);

(statearr_24651_24794[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (18))){
var inst_24488 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24654_24795 = state_24559__$1;
(statearr_24654_24795[(2)] = inst_24488);

(statearr_24654_24795[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (37))){
var state_24559__$1 = state_24559;
var statearr_24660_24798 = state_24559__$1;
(statearr_24660_24798[(2)] = null);

(statearr_24660_24798[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24560 === (8))){
var inst_24443 = (state_24559[(8)]);
var inst_24463 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24443);
var state_24559__$1 = state_24559;
var statearr_24665_24802 = state_24559__$1;
(statearr_24665_24802[(2)] = inst_24463);

(statearr_24665_24802[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
});})(c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21492__auto__,c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21493__auto__ = null;
var cljs$core$async$mix_$_state_machine__21493__auto____0 = (function (){
var statearr_24666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24666[(0)] = cljs$core$async$mix_$_state_machine__21493__auto__);

(statearr_24666[(1)] = (1));

return statearr_24666;
});
var cljs$core$async$mix_$_state_machine__21493__auto____1 = (function (state_24559){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_24559);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__21496__auto__ = e24670;
var statearr_24672_24804 = state_24559;
(statearr_24672_24804[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24559);

return cljs.core.cst$kw$recur;
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__24805 = state_24559;
state_24559 = G__24805;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21493__auto__ = function(state_24559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21493__auto____1.call(this,state_24559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21493__auto____0;
cljs$core$async$mix_$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21493__auto____1;
return cljs$core$async$mix_$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21857__auto__ = (function (){var statearr_24674 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_24674[(6)] = c__21855__auto___24689);

return statearr_24674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___24689,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__11145__auto__ = (((p == null))?null:p);
var m__11146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11146__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__11146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11146__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__11145__auto__ = (((p == null))?null:p);
var m__11146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11146__auto__.call(null,p,v,ch));
} else {
var m__11146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11146__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24825 = arguments.length;
switch (G__24825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__11145__auto__ = (((p == null))?null:p);
var m__11146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__11146__auto__.call(null,p));
} else {
var m__11146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__11146__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__11145__auto__ = (((p == null))?null:p);
var m__11146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__11146__auto__.call(null,p,v));
} else {
var m__11146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__11146__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24838 = arguments.length;
switch (G__24838) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10412__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__10412__auto__,mults){
return (function (p1__24836_SHARP_){
if(cljs.core.truth_((p1__24836_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24836_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24836_SHARP_.call(null,topic)))){
return p1__24836_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24836_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10412__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24848 = meta24848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24849,meta24848__$1){
var self__ = this;
var _24849__$1 = this;
return (new cljs.core.async.t_cljs$core$async24847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24848__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24849){
var self__ = this;
var _24849__$1 = this;
return self__.meta24848;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5459__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5459__auto__)){
var m = temp__5459__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24848], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24847";

cljs.core.async.t_cljs$core$async24847.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async24847");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24847 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24848){
return (new cljs.core.async.t_cljs$core$async24847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24848));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21855__auto___25050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___25050,mults,ensure_mult,p){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___25050,mults,ensure_mult,p){
return (function (state_24942){
var state_val_24943 = (state_24942[(1)]);
if((state_val_24943 === (7))){
var inst_24938 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24945_25051 = state_24942__$1;
(statearr_24945_25051[(2)] = inst_24938);

(statearr_24945_25051[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (20))){
var state_24942__$1 = state_24942;
var statearr_24946_25052 = state_24942__$1;
(statearr_24946_25052[(2)] = null);

(statearr_24946_25052[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (1))){
var state_24942__$1 = state_24942;
var statearr_24947_25053 = state_24942__$1;
(statearr_24947_25053[(2)] = null);

(statearr_24947_25053[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (24))){
var inst_24921 = (state_24942[(7)]);
var inst_24930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24921);
var state_24942__$1 = state_24942;
var statearr_24949_25054 = state_24942__$1;
(statearr_24949_25054[(2)] = inst_24930);

(statearr_24949_25054[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (4))){
var inst_24864 = (state_24942[(8)]);
var inst_24864__$1 = (state_24942[(2)]);
var inst_24865 = (inst_24864__$1 == null);
var state_24942__$1 = (function (){var statearr_24950 = state_24942;
(statearr_24950[(8)] = inst_24864__$1);

return statearr_24950;
})();
if(cljs.core.truth_(inst_24865)){
var statearr_24951_25055 = state_24942__$1;
(statearr_24951_25055[(1)] = (5));

} else {
var statearr_24952_25056 = state_24942__$1;
(statearr_24952_25056[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (15))){
var inst_24915 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24954_25058 = state_24942__$1;
(statearr_24954_25058[(2)] = inst_24915);

(statearr_24954_25058[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (21))){
var inst_24935 = (state_24942[(2)]);
var state_24942__$1 = (function (){var statearr_24959 = state_24942;
(statearr_24959[(9)] = inst_24935);

return statearr_24959;
})();
var statearr_24960_25059 = state_24942__$1;
(statearr_24960_25059[(2)] = null);

(statearr_24960_25059[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (13))){
var inst_24896 = (state_24942[(10)]);
var inst_24898 = cljs.core.chunked_seq_QMARK_(inst_24896);
var state_24942__$1 = state_24942;
if(inst_24898){
var statearr_24963_25060 = state_24942__$1;
(statearr_24963_25060[(1)] = (16));

} else {
var statearr_24964_25061 = state_24942__$1;
(statearr_24964_25061[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (22))){
var inst_24927 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
if(cljs.core.truth_(inst_24927)){
var statearr_24965_25062 = state_24942__$1;
(statearr_24965_25062[(1)] = (23));

} else {
var statearr_24966_25063 = state_24942__$1;
(statearr_24966_25063[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (6))){
var inst_24923 = (state_24942[(11)]);
var inst_24864 = (state_24942[(8)]);
var inst_24921 = (state_24942[(7)]);
var inst_24921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24864) : topic_fn.call(null,inst_24864));
var inst_24922 = cljs.core.deref(mults);
var inst_24923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24922,inst_24921__$1);
var state_24942__$1 = (function (){var statearr_24967 = state_24942;
(statearr_24967[(11)] = inst_24923__$1);

(statearr_24967[(7)] = inst_24921__$1);

return statearr_24967;
})();
if(cljs.core.truth_(inst_24923__$1)){
var statearr_24968_25068 = state_24942__$1;
(statearr_24968_25068[(1)] = (19));

} else {
var statearr_24969_25069 = state_24942__$1;
(statearr_24969_25069[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (25))){
var inst_24932 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24970_25071 = state_24942__$1;
(statearr_24970_25071[(2)] = inst_24932);

(statearr_24970_25071[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (17))){
var inst_24896 = (state_24942[(10)]);
var inst_24905 = cljs.core.first(inst_24896);
var inst_24906 = cljs.core.async.muxch_STAR_(inst_24905);
var inst_24907 = cljs.core.async.close_BANG_(inst_24906);
var inst_24909 = cljs.core.next(inst_24896);
var inst_24876 = inst_24909;
var inst_24877 = null;
var inst_24878 = (0);
var inst_24879 = (0);
var state_24942__$1 = (function (){var statearr_24971 = state_24942;
(statearr_24971[(12)] = inst_24876);

(statearr_24971[(13)] = inst_24879);

(statearr_24971[(14)] = inst_24907);

(statearr_24971[(15)] = inst_24878);

(statearr_24971[(16)] = inst_24877);

return statearr_24971;
})();
var statearr_24972_25073 = state_24942__$1;
(statearr_24972_25073[(2)] = null);

(statearr_24972_25073[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (3))){
var inst_24940 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24942__$1,inst_24940);
} else {
if((state_val_24943 === (12))){
var inst_24917 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24973_25074 = state_24942__$1;
(statearr_24973_25074[(2)] = inst_24917);

(statearr_24973_25074[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (2))){
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24942__$1,(4),ch);
} else {
if((state_val_24943 === (23))){
var state_24942__$1 = state_24942;
var statearr_24974_25075 = state_24942__$1;
(statearr_24974_25075[(2)] = null);

(statearr_24974_25075[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (19))){
var inst_24923 = (state_24942[(11)]);
var inst_24864 = (state_24942[(8)]);
var inst_24925 = cljs.core.async.muxch_STAR_(inst_24923);
var state_24942__$1 = state_24942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24942__$1,(22),inst_24925,inst_24864);
} else {
if((state_val_24943 === (11))){
var inst_24876 = (state_24942[(12)]);
var inst_24896 = (state_24942[(10)]);
var inst_24896__$1 = cljs.core.seq(inst_24876);
var state_24942__$1 = (function (){var statearr_24975 = state_24942;
(statearr_24975[(10)] = inst_24896__$1);

return statearr_24975;
})();
if(inst_24896__$1){
var statearr_24976_25079 = state_24942__$1;
(statearr_24976_25079[(1)] = (13));

} else {
var statearr_24977_25080 = state_24942__$1;
(statearr_24977_25080[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (9))){
var inst_24919 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_24978_25081 = state_24942__$1;
(statearr_24978_25081[(2)] = inst_24919);

(statearr_24978_25081[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (5))){
var inst_24873 = cljs.core.deref(mults);
var inst_24874 = cljs.core.vals(inst_24873);
var inst_24875 = cljs.core.seq(inst_24874);
var inst_24876 = inst_24875;
var inst_24877 = null;
var inst_24878 = (0);
var inst_24879 = (0);
var state_24942__$1 = (function (){var statearr_24983 = state_24942;
(statearr_24983[(12)] = inst_24876);

(statearr_24983[(13)] = inst_24879);

(statearr_24983[(15)] = inst_24878);

(statearr_24983[(16)] = inst_24877);

return statearr_24983;
})();
var statearr_24984_25088 = state_24942__$1;
(statearr_24984_25088[(2)] = null);

(statearr_24984_25088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (14))){
var state_24942__$1 = state_24942;
var statearr_24989_25093 = state_24942__$1;
(statearr_24989_25093[(2)] = null);

(statearr_24989_25093[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (16))){
var inst_24896 = (state_24942[(10)]);
var inst_24900 = cljs.core.chunk_first(inst_24896);
var inst_24901 = cljs.core.chunk_rest(inst_24896);
var inst_24902 = cljs.core.count(inst_24900);
var inst_24876 = inst_24901;
var inst_24877 = inst_24900;
var inst_24878 = inst_24902;
var inst_24879 = (0);
var state_24942__$1 = (function (){var statearr_24996 = state_24942;
(statearr_24996[(12)] = inst_24876);

(statearr_24996[(13)] = inst_24879);

(statearr_24996[(15)] = inst_24878);

(statearr_24996[(16)] = inst_24877);

return statearr_24996;
})();
var statearr_24998_25098 = state_24942__$1;
(statearr_24998_25098[(2)] = null);

(statearr_24998_25098[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (10))){
var inst_24876 = (state_24942[(12)]);
var inst_24879 = (state_24942[(13)]);
var inst_24878 = (state_24942[(15)]);
var inst_24877 = (state_24942[(16)]);
var inst_24884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24877,inst_24879);
var inst_24885 = cljs.core.async.muxch_STAR_(inst_24884);
var inst_24886 = cljs.core.async.close_BANG_(inst_24885);
var inst_24890 = (inst_24879 + (1));
var tmp24986 = inst_24876;
var tmp24987 = inst_24878;
var tmp24988 = inst_24877;
var inst_24876__$1 = tmp24986;
var inst_24877__$1 = tmp24988;
var inst_24878__$1 = tmp24987;
var inst_24879__$1 = inst_24890;
var state_24942__$1 = (function (){var statearr_24999 = state_24942;
(statearr_24999[(12)] = inst_24876__$1);

(statearr_24999[(13)] = inst_24879__$1);

(statearr_24999[(15)] = inst_24878__$1);

(statearr_24999[(17)] = inst_24886);

(statearr_24999[(16)] = inst_24877__$1);

return statearr_24999;
})();
var statearr_25002_25103 = state_24942__$1;
(statearr_25002_25103[(2)] = null);

(statearr_25002_25103[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (18))){
var inst_24912 = (state_24942[(2)]);
var state_24942__$1 = state_24942;
var statearr_25004_25104 = state_24942__$1;
(statearr_25004_25104[(2)] = inst_24912);

(statearr_25004_25104[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24943 === (8))){
var inst_24879 = (state_24942[(13)]);
var inst_24878 = (state_24942[(15)]);
var inst_24881 = (inst_24879 < inst_24878);
var inst_24882 = inst_24881;
var state_24942__$1 = state_24942;
if(cljs.core.truth_(inst_24882)){
var statearr_25006_25107 = state_24942__$1;
(statearr_25006_25107[(1)] = (10));

} else {
var statearr_25010_25108 = state_24942__$1;
(statearr_25010_25108[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
}
});})(c__21855__auto___25050,mults,ensure_mult,p))
;
return ((function (switch__21492__auto__,c__21855__auto___25050,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_25013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25013[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_25013[(1)] = (1));

return statearr_25013;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_24942){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_24942);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e25014){if((e25014 instanceof Object)){
var ex__21496__auto__ = e25014;
var statearr_25015_25109 = state_24942;
(statearr_25015_25109[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24942);

return cljs.core.cst$kw$recur;
} else {
throw e25014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__25110 = state_24942;
state_24942 = G__25110;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_24942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_24942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___25050,mults,ensure_mult,p))
})();
var state__21857__auto__ = (function (){var statearr_25016 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_25016[(6)] = c__21855__auto___25050);

return statearr_25016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___25050,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25112 = arguments.length;
switch (G__25112) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25115 = arguments.length;
switch (G__25115) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25121 = arguments.length;
switch (G__25121) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__21855__auto___25232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25175){
var state_val_25176 = (state_25175[(1)]);
if((state_val_25176 === (7))){
var state_25175__$1 = state_25175;
var statearr_25179_25237 = state_25175__$1;
(statearr_25179_25237[(2)] = null);

(statearr_25179_25237[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (1))){
var state_25175__$1 = state_25175;
var statearr_25180_25238 = state_25175__$1;
(statearr_25180_25238[(2)] = null);

(statearr_25180_25238[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (4))){
var inst_25129 = (state_25175[(7)]);
var inst_25131 = (inst_25129 < cnt);
var state_25175__$1 = state_25175;
if(cljs.core.truth_(inst_25131)){
var statearr_25181_25239 = state_25175__$1;
(statearr_25181_25239[(1)] = (6));

} else {
var statearr_25182_25240 = state_25175__$1;
(statearr_25182_25240[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (15))){
var inst_25168 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25183_25241 = state_25175__$1;
(statearr_25183_25241[(2)] = inst_25168);

(statearr_25183_25241[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (13))){
var inst_25161 = cljs.core.async.close_BANG_(out);
var state_25175__$1 = state_25175;
var statearr_25184_25242 = state_25175__$1;
(statearr_25184_25242[(2)] = inst_25161);

(statearr_25184_25242[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (6))){
var state_25175__$1 = state_25175;
var statearr_25186_25243 = state_25175__$1;
(statearr_25186_25243[(2)] = null);

(statearr_25186_25243[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (3))){
var inst_25170 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25175__$1,inst_25170);
} else {
if((state_val_25176 === (12))){
var inst_25158 = (state_25175[(8)]);
var inst_25158__$1 = (state_25175[(2)]);
var inst_25159 = cljs.core.some(cljs.core.nil_QMARK_,inst_25158__$1);
var state_25175__$1 = (function (){var statearr_25189 = state_25175;
(statearr_25189[(8)] = inst_25158__$1);

return statearr_25189;
})();
if(cljs.core.truth_(inst_25159)){
var statearr_25193_25244 = state_25175__$1;
(statearr_25193_25244[(1)] = (13));

} else {
var statearr_25196_25245 = state_25175__$1;
(statearr_25196_25245[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (2))){
var inst_25128 = cljs.core.reset_BANG_(dctr,cnt);
var inst_25129 = (0);
var state_25175__$1 = (function (){var statearr_25201 = state_25175;
(statearr_25201[(9)] = inst_25128);

(statearr_25201[(7)] = inst_25129);

return statearr_25201;
})();
var statearr_25202_25246 = state_25175__$1;
(statearr_25202_25246[(2)] = null);

(statearr_25202_25246[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (11))){
var inst_25129 = (state_25175[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25175,(10),Object,null,(9));
var inst_25145 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25129) : chs__$1.call(null,inst_25129));
var inst_25146 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25129) : done.call(null,inst_25129));
var inst_25147 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25145,inst_25146);
var state_25175__$1 = state_25175;
var statearr_25203_25251 = state_25175__$1;
(statearr_25203_25251[(2)] = inst_25147);


cljs.core.async.impl.ioc_helpers.process_exception(state_25175__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (9))){
var inst_25129 = (state_25175[(7)]);
var inst_25149 = (state_25175[(2)]);
var inst_25150 = (inst_25129 + (1));
var inst_25129__$1 = inst_25150;
var state_25175__$1 = (function (){var statearr_25208 = state_25175;
(statearr_25208[(10)] = inst_25149);

(statearr_25208[(7)] = inst_25129__$1);

return statearr_25208;
})();
var statearr_25210_25254 = state_25175__$1;
(statearr_25210_25254[(2)] = null);

(statearr_25210_25254[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (5))){
var inst_25156 = (state_25175[(2)]);
var state_25175__$1 = (function (){var statearr_25211 = state_25175;
(statearr_25211[(11)] = inst_25156);

return statearr_25211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25175__$1,(12),dchan);
} else {
if((state_val_25176 === (14))){
var inst_25158 = (state_25175[(8)]);
var inst_25163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25158);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25175__$1,(16),out,inst_25163);
} else {
if((state_val_25176 === (16))){
var inst_25165 = (state_25175[(2)]);
var state_25175__$1 = (function (){var statearr_25212 = state_25175;
(statearr_25212[(12)] = inst_25165);

return statearr_25212;
})();
var statearr_25213_25255 = state_25175__$1;
(statearr_25213_25255[(2)] = null);

(statearr_25213_25255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (10))){
var inst_25139 = (state_25175[(2)]);
var inst_25141 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25175__$1 = (function (){var statearr_25215 = state_25175;
(statearr_25215[(13)] = inst_25139);

return statearr_25215;
})();
var statearr_25216_25257 = state_25175__$1;
(statearr_25216_25257[(2)] = inst_25141);


cljs.core.async.impl.ioc_helpers.process_exception(state_25175__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (8))){
var inst_25154 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25218_25259 = state_25175__$1;
(statearr_25218_25259[(2)] = inst_25154);

(statearr_25218_25259[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
}
});})(c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21492__auto__,c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_25219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25219[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_25219[(1)] = (1));

return statearr_25219;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_25175){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_25175);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e25220){if((e25220 instanceof Object)){
var ex__21496__auto__ = e25220;
var statearr_25221_25263 = state_25175;
(statearr_25221_25263[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25175);

return cljs.core.cst$kw$recur;
} else {
throw e25220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__25267 = state_25175;
state_25175 = G__25267;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_25175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_25175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21857__auto__ = (function (){var statearr_25225 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_25225[(6)] = c__21855__auto___25232);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___25232,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25270 = arguments.length;
switch (G__25270) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___25609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___25609,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___25609,out){
return (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (7))){
var inst_25286 = (state_25306[(7)]);
var inst_25285 = (state_25306[(8)]);
var inst_25285__$1 = (state_25306[(2)]);
var inst_25286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25285__$1,(0),null);
var inst_25287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25285__$1,(1),null);
var inst_25288 = (inst_25286__$1 == null);
var state_25306__$1 = (function (){var statearr_25311 = state_25306;
(statearr_25311[(7)] = inst_25286__$1);

(statearr_25311[(8)] = inst_25285__$1);

(statearr_25311[(9)] = inst_25287);

return statearr_25311;
})();
if(cljs.core.truth_(inst_25288)){
var statearr_25312_25612 = state_25306__$1;
(statearr_25312_25612[(1)] = (8));

} else {
var statearr_25313_25613 = state_25306__$1;
(statearr_25313_25613[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (1))){
var inst_25274 = cljs.core.vec(chs);
var inst_25275 = inst_25274;
var state_25306__$1 = (function (){var statearr_25314 = state_25306;
(statearr_25314[(10)] = inst_25275);

return statearr_25314;
})();
var statearr_25315_25615 = state_25306__$1;
(statearr_25315_25615[(2)] = null);

(statearr_25315_25615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (4))){
var inst_25275 = (state_25306[(10)]);
var state_25306__$1 = state_25306;
return cljs.core.async.ioc_alts_BANG_(state_25306__$1,(7),inst_25275);
} else {
if((state_val_25307 === (6))){
var inst_25302 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25316_25617 = state_25306__$1;
(statearr_25316_25617[(2)] = inst_25302);

(statearr_25316_25617[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (3))){
var inst_25304 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25306__$1,inst_25304);
} else {
if((state_val_25307 === (2))){
var inst_25275 = (state_25306[(10)]);
var inst_25278 = cljs.core.count(inst_25275);
var inst_25279 = (inst_25278 > (0));
var state_25306__$1 = state_25306;
if(cljs.core.truth_(inst_25279)){
var statearr_25318_25619 = state_25306__$1;
(statearr_25318_25619[(1)] = (4));

} else {
var statearr_25320_25620 = state_25306__$1;
(statearr_25320_25620[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (11))){
var inst_25275 = (state_25306[(10)]);
var inst_25295 = (state_25306[(2)]);
var tmp25317 = inst_25275;
var inst_25275__$1 = tmp25317;
var state_25306__$1 = (function (){var statearr_25322 = state_25306;
(statearr_25322[(11)] = inst_25295);

(statearr_25322[(10)] = inst_25275__$1);

return statearr_25322;
})();
var statearr_25323_25625 = state_25306__$1;
(statearr_25323_25625[(2)] = null);

(statearr_25323_25625[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (9))){
var inst_25286 = (state_25306[(7)]);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25306__$1,(11),out,inst_25286);
} else {
if((state_val_25307 === (5))){
var inst_25300 = cljs.core.async.close_BANG_(out);
var state_25306__$1 = state_25306;
var statearr_25347_25631 = state_25306__$1;
(statearr_25347_25631[(2)] = inst_25300);

(statearr_25347_25631[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (10))){
var inst_25298 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25348_25632 = state_25306__$1;
(statearr_25348_25632[(2)] = inst_25298);

(statearr_25348_25632[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25307 === (8))){
var inst_25286 = (state_25306[(7)]);
var inst_25285 = (state_25306[(8)]);
var inst_25275 = (state_25306[(10)]);
var inst_25287 = (state_25306[(9)]);
var inst_25290 = (function (){var cs = inst_25275;
var vec__25281 = inst_25285;
var v = inst_25286;
var c = inst_25287;
return ((function (cs,vec__25281,v,c,inst_25286,inst_25285,inst_25275,inst_25287,state_val_25307,c__21855__auto___25609,out){
return (function (p1__25268_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25268_SHARP_);
});
;})(cs,vec__25281,v,c,inst_25286,inst_25285,inst_25275,inst_25287,state_val_25307,c__21855__auto___25609,out))
})();
var inst_25291 = cljs.core.filterv(inst_25290,inst_25275);
var inst_25275__$1 = inst_25291;
var state_25306__$1 = (function (){var statearr_25350 = state_25306;
(statearr_25350[(10)] = inst_25275__$1);

return statearr_25350;
})();
var statearr_25351_25637 = state_25306__$1;
(statearr_25351_25637[(2)] = null);

(statearr_25351_25637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__21855__auto___25609,out))
;
return ((function (switch__21492__auto__,c__21855__auto___25609,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_25352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25352[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_25352[(1)] = (1));

return statearr_25352;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_25306){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_25306);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e25353){if((e25353 instanceof Object)){
var ex__21496__auto__ = e25353;
var statearr_25354_25640 = state_25306;
(statearr_25354_25640[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25306);

return cljs.core.cst$kw$recur;
} else {
throw e25353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__25641 = state_25306;
state_25306 = G__25641;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___25609,out))
})();
var state__21857__auto__ = (function (){var statearr_25358 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_25358[(6)] = c__21855__auto___25609);

return statearr_25358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___25609,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25648 = arguments.length;
switch (G__25648) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___25707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___25707,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___25707,out){
return (function (state_25674){
var state_val_25675 = (state_25674[(1)]);
if((state_val_25675 === (7))){
var inst_25656 = (state_25674[(7)]);
var inst_25656__$1 = (state_25674[(2)]);
var inst_25657 = (inst_25656__$1 == null);
var inst_25658 = cljs.core.not(inst_25657);
var state_25674__$1 = (function (){var statearr_25677 = state_25674;
(statearr_25677[(7)] = inst_25656__$1);

return statearr_25677;
})();
if(inst_25658){
var statearr_25679_25714 = state_25674__$1;
(statearr_25679_25714[(1)] = (8));

} else {
var statearr_25680_25716 = state_25674__$1;
(statearr_25680_25716[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (1))){
var inst_25650 = (0);
var state_25674__$1 = (function (){var statearr_25681 = state_25674;
(statearr_25681[(8)] = inst_25650);

return statearr_25681;
})();
var statearr_25682_25717 = state_25674__$1;
(statearr_25682_25717[(2)] = null);

(statearr_25682_25717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (4))){
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25674__$1,(7),ch);
} else {
if((state_val_25675 === (6))){
var inst_25669 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25686_25718 = state_25674__$1;
(statearr_25686_25718[(2)] = inst_25669);

(statearr_25686_25718[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (3))){
var inst_25671 = (state_25674[(2)]);
var inst_25672 = cljs.core.async.close_BANG_(out);
var state_25674__$1 = (function (){var statearr_25687 = state_25674;
(statearr_25687[(9)] = inst_25671);

return statearr_25687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25674__$1,inst_25672);
} else {
if((state_val_25675 === (2))){
var inst_25650 = (state_25674[(8)]);
var inst_25652 = (inst_25650 < n);
var state_25674__$1 = state_25674;
if(cljs.core.truth_(inst_25652)){
var statearr_25690_25719 = state_25674__$1;
(statearr_25690_25719[(1)] = (4));

} else {
var statearr_25691_25720 = state_25674__$1;
(statearr_25691_25720[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (11))){
var inst_25650 = (state_25674[(8)]);
var inst_25661 = (state_25674[(2)]);
var inst_25662 = (inst_25650 + (1));
var inst_25650__$1 = inst_25662;
var state_25674__$1 = (function (){var statearr_25693 = state_25674;
(statearr_25693[(8)] = inst_25650__$1);

(statearr_25693[(10)] = inst_25661);

return statearr_25693;
})();
var statearr_25694_25721 = state_25674__$1;
(statearr_25694_25721[(2)] = null);

(statearr_25694_25721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (9))){
var state_25674__$1 = state_25674;
var statearr_25695_25722 = state_25674__$1;
(statearr_25695_25722[(2)] = null);

(statearr_25695_25722[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (5))){
var state_25674__$1 = state_25674;
var statearr_25696_25723 = state_25674__$1;
(statearr_25696_25723[(2)] = null);

(statearr_25696_25723[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (10))){
var inst_25666 = (state_25674[(2)]);
var state_25674__$1 = state_25674;
var statearr_25697_25724 = state_25674__$1;
(statearr_25697_25724[(2)] = inst_25666);

(statearr_25697_25724[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25675 === (8))){
var inst_25656 = (state_25674[(7)]);
var state_25674__$1 = state_25674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25674__$1,(11),out,inst_25656);
} else {
return null;
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
});})(c__21855__auto___25707,out))
;
return ((function (switch__21492__auto__,c__21855__auto___25707,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_25699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25699[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_25699[(1)] = (1));

return statearr_25699;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_25674){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_25674);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e25703){if((e25703 instanceof Object)){
var ex__21496__auto__ = e25703;
var statearr_25704_25725 = state_25674;
(statearr_25704_25725[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25674);

return cljs.core.cst$kw$recur;
} else {
throw e25703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__25726 = state_25674;
state_25674 = G__25726;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_25674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_25674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___25707,out))
})();
var state__21857__auto__ = (function (){var statearr_25705 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_25705[(6)] = c__21855__auto___25707);

return statearr_25705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___25707,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25728 = (function (f,ch,meta25729){
this.f = f;
this.ch = ch;
this.meta25729 = meta25729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25730,meta25729__$1){
var self__ = this;
var _25730__$1 = this;
return (new cljs.core.async.t_cljs$core$async25728(self__.f,self__.ch,meta25729__$1));
});

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25730){
var self__ = this;
var _25730__$1 = this;
return self__.meta25729;
});

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25731 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25731 = (function (f,ch,meta25729,_,fn1,meta25732){
this.f = f;
this.ch = ch;
this.meta25729 = meta25729;
this._ = _;
this.fn1 = fn1;
this.meta25732 = meta25732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25733,meta25732__$1){
var self__ = this;
var _25733__$1 = this;
return (new cljs.core.async.t_cljs$core$async25731(self__.f,self__.ch,self__.meta25729,self__._,self__.fn1,meta25732__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25733){
var self__ = this;
var _25733__$1 = this;
return self__.meta25732;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25727_SHARP_){
var G__25734 = (((p1__25727_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25727_SHARP_) : self__.f.call(null,p1__25727_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25734) : f1.call(null,G__25734));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25729,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25728], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25732], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25731";

cljs.core.async.t_cljs$core$async25731.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async25731");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25731 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25731(f__$1,ch__$1,meta25729__$1,___$2,fn1__$1,meta25732){
return (new cljs.core.async.t_cljs$core$async25731(f__$1,ch__$1,meta25729__$1,___$2,fn1__$1,meta25732));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25731(self__.f,self__.ch,self__.meta25729,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10400__auto__ = ret;
if(cljs.core.truth_(and__10400__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__10400__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25746 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25746) : self__.f.call(null,G__25746));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25729], null);
});

cljs.core.async.t_cljs$core$async25728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25728";

cljs.core.async.t_cljs$core$async25728.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async25728");
});

cljs.core.async.__GT_t_cljs$core$async25728 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25728(f__$1,ch__$1,meta25729){
return (new cljs.core.async.t_cljs$core$async25728(f__$1,ch__$1,meta25729));
});

}

return (new cljs.core.async.t_cljs$core$async25728(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25757 = (function (f,ch,meta25758){
this.f = f;
this.ch = ch;
this.meta25758 = meta25758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25759,meta25758__$1){
var self__ = this;
var _25759__$1 = this;
return (new cljs.core.async.t_cljs$core$async25757(self__.f,self__.ch,meta25758__$1));
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25759){
var self__ = this;
var _25759__$1 = this;
return self__.meta25758;
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25758], null);
});

cljs.core.async.t_cljs$core$async25757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25757";

cljs.core.async.t_cljs$core$async25757.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async25757");
});

cljs.core.async.__GT_t_cljs$core$async25757 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25757(f__$1,ch__$1,meta25758){
return (new cljs.core.async.t_cljs$core$async25757(f__$1,ch__$1,meta25758));
});

}

return (new cljs.core.async.t_cljs$core$async25757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25781 = (function (p,ch,meta25782){
this.p = p;
this.ch = ch;
this.meta25782 = meta25782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25783,meta25782__$1){
var self__ = this;
var _25783__$1 = this;
return (new cljs.core.async.t_cljs$core$async25781(self__.p,self__.ch,meta25782__$1));
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25783){
var self__ = this;
var _25783__$1 = this;
return self__.meta25782;
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25782], null);
});

cljs.core.async.t_cljs$core$async25781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25781";

cljs.core.async.t_cljs$core$async25781.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async25781");
});

cljs.core.async.__GT_t_cljs$core$async25781 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25781(p__$1,ch__$1,meta25782){
return (new cljs.core.async.t_cljs$core$async25781(p__$1,ch__$1,meta25782));
});

}

return (new cljs.core.async.t_cljs$core$async25781(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25792 = arguments.length;
switch (G__25792) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___25881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___25881,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___25881,out){
return (function (state_25827){
var state_val_25828 = (state_25827[(1)]);
if((state_val_25828 === (7))){
var inst_25823 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25839_25882 = state_25827__$1;
(statearr_25839_25882[(2)] = inst_25823);

(statearr_25839_25882[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (1))){
var state_25827__$1 = state_25827;
var statearr_25840_25883 = state_25827__$1;
(statearr_25840_25883[(2)] = null);

(statearr_25840_25883[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (4))){
var inst_25809 = (state_25827[(7)]);
var inst_25809__$1 = (state_25827[(2)]);
var inst_25810 = (inst_25809__$1 == null);
var state_25827__$1 = (function (){var statearr_25841 = state_25827;
(statearr_25841[(7)] = inst_25809__$1);

return statearr_25841;
})();
if(cljs.core.truth_(inst_25810)){
var statearr_25842_25885 = state_25827__$1;
(statearr_25842_25885[(1)] = (5));

} else {
var statearr_25846_25886 = state_25827__$1;
(statearr_25846_25886[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (6))){
var inst_25809 = (state_25827[(7)]);
var inst_25814 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25809) : p.call(null,inst_25809));
var state_25827__$1 = state_25827;
if(cljs.core.truth_(inst_25814)){
var statearr_25855_25887 = state_25827__$1;
(statearr_25855_25887[(1)] = (8));

} else {
var statearr_25856_25888 = state_25827__$1;
(statearr_25856_25888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (3))){
var inst_25825 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25827__$1,inst_25825);
} else {
if((state_val_25828 === (2))){
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25827__$1,(4),ch);
} else {
if((state_val_25828 === (11))){
var inst_25817 = (state_25827[(2)]);
var state_25827__$1 = state_25827;
var statearr_25865_25889 = state_25827__$1;
(statearr_25865_25889[(2)] = inst_25817);

(statearr_25865_25889[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (9))){
var state_25827__$1 = state_25827;
var statearr_25866_25890 = state_25827__$1;
(statearr_25866_25890[(2)] = null);

(statearr_25866_25890[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (5))){
var inst_25812 = cljs.core.async.close_BANG_(out);
var state_25827__$1 = state_25827;
var statearr_25869_25892 = state_25827__$1;
(statearr_25869_25892[(2)] = inst_25812);

(statearr_25869_25892[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (10))){
var inst_25820 = (state_25827[(2)]);
var state_25827__$1 = (function (){var statearr_25870 = state_25827;
(statearr_25870[(8)] = inst_25820);

return statearr_25870;
})();
var statearr_25871_25893 = state_25827__$1;
(statearr_25871_25893[(2)] = null);

(statearr_25871_25893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25828 === (8))){
var inst_25809 = (state_25827[(7)]);
var state_25827__$1 = state_25827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25827__$1,(11),out,inst_25809);
} else {
return null;
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
});})(c__21855__auto___25881,out))
;
return ((function (switch__21492__auto__,c__21855__auto___25881,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_25872 = [null,null,null,null,null,null,null,null,null];
(statearr_25872[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_25872[(1)] = (1));

return statearr_25872;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_25827){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_25827);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e25873){if((e25873 instanceof Object)){
var ex__21496__auto__ = e25873;
var statearr_25874_25894 = state_25827;
(statearr_25874_25894[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25827);

return cljs.core.cst$kw$recur;
} else {
throw e25873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__25897 = state_25827;
state_25827 = G__25897;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_25827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_25827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___25881,out))
})();
var state__21857__auto__ = (function (){var statearr_25875 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_25875[(6)] = c__21855__auto___25881);

return statearr_25875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___25881,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25910 = arguments.length;
switch (G__25910) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21855__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto__){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto__){
return (function (state_25982){
var state_val_25984 = (state_25982[(1)]);
if((state_val_25984 === (7))){
var inst_25977 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_25986_26082 = state_25982__$1;
(statearr_25986_26082[(2)] = inst_25977);

(statearr_25986_26082[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (20))){
var inst_25947 = (state_25982[(7)]);
var inst_25958 = (state_25982[(2)]);
var inst_25959 = cljs.core.next(inst_25947);
var inst_25932 = inst_25959;
var inst_25933 = null;
var inst_25934 = (0);
var inst_25935 = (0);
var state_25982__$1 = (function (){var statearr_25993 = state_25982;
(statearr_25993[(8)] = inst_25932);

(statearr_25993[(9)] = inst_25958);

(statearr_25993[(10)] = inst_25934);

(statearr_25993[(11)] = inst_25933);

(statearr_25993[(12)] = inst_25935);

return statearr_25993;
})();
var statearr_25995_26112 = state_25982__$1;
(statearr_25995_26112[(2)] = null);

(statearr_25995_26112[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (1))){
var state_25982__$1 = state_25982;
var statearr_25997_26114 = state_25982__$1;
(statearr_25997_26114[(2)] = null);

(statearr_25997_26114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (4))){
var inst_25919 = (state_25982[(13)]);
var inst_25919__$1 = (state_25982[(2)]);
var inst_25921 = (inst_25919__$1 == null);
var state_25982__$1 = (function (){var statearr_25999 = state_25982;
(statearr_25999[(13)] = inst_25919__$1);

return statearr_25999;
})();
if(cljs.core.truth_(inst_25921)){
var statearr_26000_26116 = state_25982__$1;
(statearr_26000_26116[(1)] = (5));

} else {
var statearr_26002_26117 = state_25982__$1;
(statearr_26002_26117[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (15))){
var state_25982__$1 = state_25982;
var statearr_26007_26118 = state_25982__$1;
(statearr_26007_26118[(2)] = null);

(statearr_26007_26118[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (21))){
var state_25982__$1 = state_25982;
var statearr_26009_26123 = state_25982__$1;
(statearr_26009_26123[(2)] = null);

(statearr_26009_26123[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (13))){
var inst_25932 = (state_25982[(8)]);
var inst_25934 = (state_25982[(10)]);
var inst_25933 = (state_25982[(11)]);
var inst_25935 = (state_25982[(12)]);
var inst_25942 = (state_25982[(2)]);
var inst_25943 = (inst_25935 + (1));
var tmp26004 = inst_25932;
var tmp26005 = inst_25934;
var tmp26006 = inst_25933;
var inst_25932__$1 = tmp26004;
var inst_25933__$1 = tmp26006;
var inst_25934__$1 = tmp26005;
var inst_25935__$1 = inst_25943;
var state_25982__$1 = (function (){var statearr_26017 = state_25982;
(statearr_26017[(8)] = inst_25932__$1);

(statearr_26017[(14)] = inst_25942);

(statearr_26017[(10)] = inst_25934__$1);

(statearr_26017[(11)] = inst_25933__$1);

(statearr_26017[(12)] = inst_25935__$1);

return statearr_26017;
})();
var statearr_26019_26130 = state_25982__$1;
(statearr_26019_26130[(2)] = null);

(statearr_26019_26130[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (22))){
var state_25982__$1 = state_25982;
var statearr_26021_26131 = state_25982__$1;
(statearr_26021_26131[(2)] = null);

(statearr_26021_26131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (6))){
var inst_25919 = (state_25982[(13)]);
var inst_25930 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25919) : f.call(null,inst_25919));
var inst_25931 = cljs.core.seq(inst_25930);
var inst_25932 = inst_25931;
var inst_25933 = null;
var inst_25934 = (0);
var inst_25935 = (0);
var state_25982__$1 = (function (){var statearr_26024 = state_25982;
(statearr_26024[(8)] = inst_25932);

(statearr_26024[(10)] = inst_25934);

(statearr_26024[(11)] = inst_25933);

(statearr_26024[(12)] = inst_25935);

return statearr_26024;
})();
var statearr_26025_26139 = state_25982__$1;
(statearr_26025_26139[(2)] = null);

(statearr_26025_26139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (17))){
var inst_25947 = (state_25982[(7)]);
var inst_25951 = cljs.core.chunk_first(inst_25947);
var inst_25952 = cljs.core.chunk_rest(inst_25947);
var inst_25953 = cljs.core.count(inst_25951);
var inst_25932 = inst_25952;
var inst_25933 = inst_25951;
var inst_25934 = inst_25953;
var inst_25935 = (0);
var state_25982__$1 = (function (){var statearr_26027 = state_25982;
(statearr_26027[(8)] = inst_25932);

(statearr_26027[(10)] = inst_25934);

(statearr_26027[(11)] = inst_25933);

(statearr_26027[(12)] = inst_25935);

return statearr_26027;
})();
var statearr_26028_26152 = state_25982__$1;
(statearr_26028_26152[(2)] = null);

(statearr_26028_26152[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (3))){
var inst_25979 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25982__$1,inst_25979);
} else {
if((state_val_25984 === (12))){
var inst_25967 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_26031_26157 = state_25982__$1;
(statearr_26031_26157[(2)] = inst_25967);

(statearr_26031_26157[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (2))){
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25982__$1,(4),in$);
} else {
if((state_val_25984 === (23))){
var inst_25975 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_26034_26159 = state_25982__$1;
(statearr_26034_26159[(2)] = inst_25975);

(statearr_26034_26159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (19))){
var inst_25962 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_26036_26164 = state_25982__$1;
(statearr_26036_26164[(2)] = inst_25962);

(statearr_26036_26164[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (11))){
var inst_25947 = (state_25982[(7)]);
var inst_25932 = (state_25982[(8)]);
var inst_25947__$1 = cljs.core.seq(inst_25932);
var state_25982__$1 = (function (){var statearr_26039 = state_25982;
(statearr_26039[(7)] = inst_25947__$1);

return statearr_26039;
})();
if(inst_25947__$1){
var statearr_26040_26169 = state_25982__$1;
(statearr_26040_26169[(1)] = (14));

} else {
var statearr_26041_26177 = state_25982__$1;
(statearr_26041_26177[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (9))){
var inst_25969 = (state_25982[(2)]);
var inst_25970 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25982__$1 = (function (){var statearr_26043 = state_25982;
(statearr_26043[(15)] = inst_25969);

return statearr_26043;
})();
if(cljs.core.truth_(inst_25970)){
var statearr_26044_26183 = state_25982__$1;
(statearr_26044_26183[(1)] = (21));

} else {
var statearr_26046_26184 = state_25982__$1;
(statearr_26046_26184[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (5))){
var inst_25923 = cljs.core.async.close_BANG_(out);
var state_25982__$1 = state_25982;
var statearr_26049_26185 = state_25982__$1;
(statearr_26049_26185[(2)] = inst_25923);

(statearr_26049_26185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (14))){
var inst_25947 = (state_25982[(7)]);
var inst_25949 = cljs.core.chunked_seq_QMARK_(inst_25947);
var state_25982__$1 = state_25982;
if(inst_25949){
var statearr_26051_26187 = state_25982__$1;
(statearr_26051_26187[(1)] = (17));

} else {
var statearr_26052_26188 = state_25982__$1;
(statearr_26052_26188[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (16))){
var inst_25965 = (state_25982[(2)]);
var state_25982__$1 = state_25982;
var statearr_26056_26190 = state_25982__$1;
(statearr_26056_26190[(2)] = inst_25965);

(statearr_26056_26190[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25984 === (10))){
var inst_25933 = (state_25982[(11)]);
var inst_25935 = (state_25982[(12)]);
var inst_25940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25933,inst_25935);
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25982__$1,(13),out,inst_25940);
} else {
if((state_val_25984 === (18))){
var inst_25947 = (state_25982[(7)]);
var inst_25956 = cljs.core.first(inst_25947);
var state_25982__$1 = state_25982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25982__$1,(20),out,inst_25956);
} else {
if((state_val_25984 === (8))){
var inst_25934 = (state_25982[(10)]);
var inst_25935 = (state_25982[(12)]);
var inst_25937 = (inst_25935 < inst_25934);
var inst_25938 = inst_25937;
var state_25982__$1 = state_25982;
if(cljs.core.truth_(inst_25938)){
var statearr_26064_26201 = state_25982__$1;
(statearr_26064_26201[(1)] = (10));

} else {
var statearr_26065_26203 = state_25982__$1;
(statearr_26065_26203[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__21855__auto__))
;
return ((function (switch__21492__auto__,c__21855__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____0 = (function (){
var statearr_26067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26067[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__);

(statearr_26067[(1)] = (1));

return statearr_26067;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____1 = (function (state_25982){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_25982);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e26072){if((e26072 instanceof Object)){
var ex__21496__auto__ = e26072;
var statearr_26074_26212 = state_25982;
(statearr_26074_26212[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25982);

return cljs.core.cst$kw$recur;
} else {
throw e26072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__26214 = state_25982;
state_25982 = G__26214;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__ = function(state_25982){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____1.call(this,state_25982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21493__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto__))
})();
var state__21857__auto__ = (function (){var statearr_26076 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_26076[(6)] = c__21855__auto__);

return statearr_26076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto__))
);

return c__21855__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26218 = arguments.length;
switch (G__26218) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26237 = arguments.length;
switch (G__26237) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26254 = arguments.length;
switch (G__26254) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___26356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___26356,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___26356,out){
return (function (state_26304){
var state_val_26305 = (state_26304[(1)]);
if((state_val_26305 === (7))){
var inst_26298 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26307_26358 = state_26304__$1;
(statearr_26307_26358[(2)] = inst_26298);

(statearr_26307_26358[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (1))){
var inst_26277 = null;
var state_26304__$1 = (function (){var statearr_26308 = state_26304;
(statearr_26308[(7)] = inst_26277);

return statearr_26308;
})();
var statearr_26309_26365 = state_26304__$1;
(statearr_26309_26365[(2)] = null);

(statearr_26309_26365[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (4))){
var inst_26283 = (state_26304[(8)]);
var inst_26283__$1 = (state_26304[(2)]);
var inst_26284 = (inst_26283__$1 == null);
var inst_26285 = cljs.core.not(inst_26284);
var state_26304__$1 = (function (){var statearr_26312 = state_26304;
(statearr_26312[(8)] = inst_26283__$1);

return statearr_26312;
})();
if(inst_26285){
var statearr_26314_26368 = state_26304__$1;
(statearr_26314_26368[(1)] = (5));

} else {
var statearr_26316_26369 = state_26304__$1;
(statearr_26316_26369[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (6))){
var state_26304__$1 = state_26304;
var statearr_26318_26371 = state_26304__$1;
(statearr_26318_26371[(2)] = null);

(statearr_26318_26371[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (3))){
var inst_26300 = (state_26304[(2)]);
var inst_26302 = cljs.core.async.close_BANG_(out);
var state_26304__$1 = (function (){var statearr_26321 = state_26304;
(statearr_26321[(9)] = inst_26300);

return statearr_26321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26304__$1,inst_26302);
} else {
if((state_val_26305 === (2))){
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26304__$1,(4),ch);
} else {
if((state_val_26305 === (11))){
var inst_26283 = (state_26304[(8)]);
var inst_26292 = (state_26304[(2)]);
var inst_26277 = inst_26283;
var state_26304__$1 = (function (){var statearr_26322 = state_26304;
(statearr_26322[(10)] = inst_26292);

(statearr_26322[(7)] = inst_26277);

return statearr_26322;
})();
var statearr_26323_26385 = state_26304__$1;
(statearr_26323_26385[(2)] = null);

(statearr_26323_26385[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (9))){
var inst_26283 = (state_26304[(8)]);
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26304__$1,(11),out,inst_26283);
} else {
if((state_val_26305 === (5))){
var inst_26283 = (state_26304[(8)]);
var inst_26277 = (state_26304[(7)]);
var inst_26287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26283,inst_26277);
var state_26304__$1 = state_26304;
if(inst_26287){
var statearr_26330_26388 = state_26304__$1;
(statearr_26330_26388[(1)] = (8));

} else {
var statearr_26331_26390 = state_26304__$1;
(statearr_26331_26390[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (10))){
var inst_26295 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26332_26392 = state_26304__$1;
(statearr_26332_26392[(2)] = inst_26295);

(statearr_26332_26392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26305 === (8))){
var inst_26277 = (state_26304[(7)]);
var tmp26326 = inst_26277;
var inst_26277__$1 = tmp26326;
var state_26304__$1 = (function (){var statearr_26338 = state_26304;
(statearr_26338[(7)] = inst_26277__$1);

return statearr_26338;
})();
var statearr_26341_26394 = state_26304__$1;
(statearr_26341_26394[(2)] = null);

(statearr_26341_26394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
});})(c__21855__auto___26356,out))
;
return ((function (switch__21492__auto__,c__21855__auto___26356,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_26346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26346[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_26346[(1)] = (1));

return statearr_26346;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_26304){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_26304);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object)){
var ex__21496__auto__ = e26349;
var statearr_26350_26399 = state_26304;
(statearr_26350_26399[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26304);

return cljs.core.cst$kw$recur;
} else {
throw e26349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__26401 = state_26304;
state_26304 = G__26401;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_26304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_26304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___26356,out))
})();
var state__21857__auto__ = (function (){var statearr_26354 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_26354[(6)] = c__21855__auto___26356);

return statearr_26354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___26356,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26419 = arguments.length;
switch (G__26419) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___26550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___26550,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___26550,out){
return (function (state_26462){
var state_val_26463 = (state_26462[(1)]);
if((state_val_26463 === (7))){
var inst_26458 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
var statearr_26465_26564 = state_26462__$1;
(statearr_26465_26564[(2)] = inst_26458);

(statearr_26465_26564[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (1))){
var inst_26425 = (new Array(n));
var inst_26426 = inst_26425;
var inst_26427 = (0);
var state_26462__$1 = (function (){var statearr_26469 = state_26462;
(statearr_26469[(7)] = inst_26426);

(statearr_26469[(8)] = inst_26427);

return statearr_26469;
})();
var statearr_26470_26573 = state_26462__$1;
(statearr_26470_26573[(2)] = null);

(statearr_26470_26573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (4))){
var inst_26430 = (state_26462[(9)]);
var inst_26430__$1 = (state_26462[(2)]);
var inst_26431 = (inst_26430__$1 == null);
var inst_26432 = cljs.core.not(inst_26431);
var state_26462__$1 = (function (){var statearr_26485 = state_26462;
(statearr_26485[(9)] = inst_26430__$1);

return statearr_26485;
})();
if(inst_26432){
var statearr_26486_26584 = state_26462__$1;
(statearr_26486_26584[(1)] = (5));

} else {
var statearr_26488_26588 = state_26462__$1;
(statearr_26488_26588[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (15))){
var inst_26452 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
var statearr_26490_26589 = state_26462__$1;
(statearr_26490_26589[(2)] = inst_26452);

(statearr_26490_26589[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (13))){
var state_26462__$1 = state_26462;
var statearr_26494_26590 = state_26462__$1;
(statearr_26494_26590[(2)] = null);

(statearr_26494_26590[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (6))){
var inst_26427 = (state_26462[(8)]);
var inst_26448 = (inst_26427 > (0));
var state_26462__$1 = state_26462;
if(cljs.core.truth_(inst_26448)){
var statearr_26495_26598 = state_26462__$1;
(statearr_26495_26598[(1)] = (12));

} else {
var statearr_26497_26599 = state_26462__$1;
(statearr_26497_26599[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (3))){
var inst_26460 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26462__$1,inst_26460);
} else {
if((state_val_26463 === (12))){
var inst_26426 = (state_26462[(7)]);
var inst_26450 = cljs.core.vec(inst_26426);
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26462__$1,(15),out,inst_26450);
} else {
if((state_val_26463 === (2))){
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26462__$1,(4),ch);
} else {
if((state_val_26463 === (11))){
var inst_26442 = (state_26462[(2)]);
var inst_26443 = (new Array(n));
var inst_26426 = inst_26443;
var inst_26427 = (0);
var state_26462__$1 = (function (){var statearr_26504 = state_26462;
(statearr_26504[(7)] = inst_26426);

(statearr_26504[(10)] = inst_26442);

(statearr_26504[(8)] = inst_26427);

return statearr_26504;
})();
var statearr_26505_26613 = state_26462__$1;
(statearr_26505_26613[(2)] = null);

(statearr_26505_26613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (9))){
var inst_26426 = (state_26462[(7)]);
var inst_26440 = cljs.core.vec(inst_26426);
var state_26462__$1 = state_26462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26462__$1,(11),out,inst_26440);
} else {
if((state_val_26463 === (5))){
var inst_26426 = (state_26462[(7)]);
var inst_26430 = (state_26462[(9)]);
var inst_26427 = (state_26462[(8)]);
var inst_26435 = (state_26462[(11)]);
var inst_26434 = (inst_26426[inst_26427] = inst_26430);
var inst_26435__$1 = (inst_26427 + (1));
var inst_26436 = (inst_26435__$1 < n);
var state_26462__$1 = (function (){var statearr_26510 = state_26462;
(statearr_26510[(12)] = inst_26434);

(statearr_26510[(11)] = inst_26435__$1);

return statearr_26510;
})();
if(cljs.core.truth_(inst_26436)){
var statearr_26511_26626 = state_26462__$1;
(statearr_26511_26626[(1)] = (8));

} else {
var statearr_26512_26628 = state_26462__$1;
(statearr_26512_26628[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (14))){
var inst_26455 = (state_26462[(2)]);
var inst_26456 = cljs.core.async.close_BANG_(out);
var state_26462__$1 = (function (){var statearr_26517 = state_26462;
(statearr_26517[(13)] = inst_26455);

return statearr_26517;
})();
var statearr_26518_26630 = state_26462__$1;
(statearr_26518_26630[(2)] = inst_26456);

(statearr_26518_26630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (10))){
var inst_26446 = (state_26462[(2)]);
var state_26462__$1 = state_26462;
var statearr_26522_26637 = state_26462__$1;
(statearr_26522_26637[(2)] = inst_26446);

(statearr_26522_26637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26463 === (8))){
var inst_26426 = (state_26462[(7)]);
var inst_26435 = (state_26462[(11)]);
var tmp26514 = inst_26426;
var inst_26426__$1 = tmp26514;
var inst_26427 = inst_26435;
var state_26462__$1 = (function (){var statearr_26524 = state_26462;
(statearr_26524[(7)] = inst_26426__$1);

(statearr_26524[(8)] = inst_26427);

return statearr_26524;
})();
var statearr_26525_26638 = state_26462__$1;
(statearr_26525_26638[(2)] = null);

(statearr_26525_26638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});})(c__21855__auto___26550,out))
;
return ((function (switch__21492__auto__,c__21855__auto___26550,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_26529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26529[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_26529[(1)] = (1));

return statearr_26529;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_26462){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_26462);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e26532){if((e26532 instanceof Object)){
var ex__21496__auto__ = e26532;
var statearr_26533_26675 = state_26462;
(statearr_26533_26675[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26462);

return cljs.core.cst$kw$recur;
} else {
throw e26532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__26678 = state_26462;
state_26462 = G__26678;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_26462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_26462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___26550,out))
})();
var state__21857__auto__ = (function (){var statearr_26543 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_26543[(6)] = c__21855__auto___26550);

return statearr_26543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___26550,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26698 = arguments.length;
switch (G__26698) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21855__auto___26878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21855__auto___26878,out){
return (function (){
var f__21856__auto__ = (function (){var switch__21492__auto__ = ((function (c__21855__auto___26878,out){
return (function (state_26768){
var state_val_26769 = (state_26768[(1)]);
if((state_val_26769 === (7))){
var inst_26761 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26776_26879 = state_26768__$1;
(statearr_26776_26879[(2)] = inst_26761);

(statearr_26776_26879[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (1))){
var inst_26707 = [];
var inst_26708 = inst_26707;
var inst_26709 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_26768__$1 = (function (){var statearr_26782 = state_26768;
(statearr_26782[(7)] = inst_26708);

(statearr_26782[(8)] = inst_26709);

return statearr_26782;
})();
var statearr_26783_26881 = state_26768__$1;
(statearr_26783_26881[(2)] = null);

(statearr_26783_26881[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (4))){
var inst_26723 = (state_26768[(9)]);
var inst_26723__$1 = (state_26768[(2)]);
var inst_26724 = (inst_26723__$1 == null);
var inst_26725 = cljs.core.not(inst_26724);
var state_26768__$1 = (function (){var statearr_26786 = state_26768;
(statearr_26786[(9)] = inst_26723__$1);

return statearr_26786;
})();
if(inst_26725){
var statearr_26787_26882 = state_26768__$1;
(statearr_26787_26882[(1)] = (5));

} else {
var statearr_26788_26883 = state_26768__$1;
(statearr_26788_26883[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (15))){
var inst_26755 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26789_26884 = state_26768__$1;
(statearr_26789_26884[(2)] = inst_26755);

(statearr_26789_26884[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (13))){
var state_26768__$1 = state_26768;
var statearr_26792_26885 = state_26768__$1;
(statearr_26792_26885[(2)] = null);

(statearr_26792_26885[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (6))){
var inst_26708 = (state_26768[(7)]);
var inst_26750 = inst_26708.length;
var inst_26751 = (inst_26750 > (0));
var state_26768__$1 = state_26768;
if(cljs.core.truth_(inst_26751)){
var statearr_26799_26886 = state_26768__$1;
(statearr_26799_26886[(1)] = (12));

} else {
var statearr_26800_26887 = state_26768__$1;
(statearr_26800_26887[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (3))){
var inst_26763 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26768__$1,inst_26763);
} else {
if((state_val_26769 === (12))){
var inst_26708 = (state_26768[(7)]);
var inst_26753 = cljs.core.vec(inst_26708);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26768__$1,(15),out,inst_26753);
} else {
if((state_val_26769 === (2))){
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26768__$1,(4),ch);
} else {
if((state_val_26769 === (11))){
var inst_26727 = (state_26768[(10)]);
var inst_26723 = (state_26768[(9)]);
var inst_26743 = (state_26768[(2)]);
var inst_26744 = [];
var inst_26745 = inst_26744.push(inst_26723);
var inst_26708 = inst_26744;
var inst_26709 = inst_26727;
var state_26768__$1 = (function (){var statearr_26804 = state_26768;
(statearr_26804[(11)] = inst_26745);

(statearr_26804[(12)] = inst_26743);

(statearr_26804[(7)] = inst_26708);

(statearr_26804[(8)] = inst_26709);

return statearr_26804;
})();
var statearr_26811_26906 = state_26768__$1;
(statearr_26811_26906[(2)] = null);

(statearr_26811_26906[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (9))){
var inst_26708 = (state_26768[(7)]);
var inst_26741 = cljs.core.vec(inst_26708);
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26768__$1,(11),out,inst_26741);
} else {
if((state_val_26769 === (5))){
var inst_26709 = (state_26768[(8)]);
var inst_26727 = (state_26768[(10)]);
var inst_26723 = (state_26768[(9)]);
var inst_26727__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26723) : f.call(null,inst_26723));
var inst_26734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26727__$1,inst_26709);
var inst_26735 = cljs.core.keyword_identical_QMARK_(inst_26709,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_26736 = (inst_26734) || (inst_26735);
var state_26768__$1 = (function (){var statearr_26829 = state_26768;
(statearr_26829[(10)] = inst_26727__$1);

return statearr_26829;
})();
if(cljs.core.truth_(inst_26736)){
var statearr_26831_26925 = state_26768__$1;
(statearr_26831_26925[(1)] = (8));

} else {
var statearr_26834_26927 = state_26768__$1;
(statearr_26834_26927[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (14))){
var inst_26758 = (state_26768[(2)]);
var inst_26759 = cljs.core.async.close_BANG_(out);
var state_26768__$1 = (function (){var statearr_26842 = state_26768;
(statearr_26842[(13)] = inst_26758);

return statearr_26842;
})();
var statearr_26843_26932 = state_26768__$1;
(statearr_26843_26932[(2)] = inst_26759);

(statearr_26843_26932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (10))){
var inst_26748 = (state_26768[(2)]);
var state_26768__$1 = state_26768;
var statearr_26845_26936 = state_26768__$1;
(statearr_26845_26936[(2)] = inst_26748);

(statearr_26845_26936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26769 === (8))){
var inst_26708 = (state_26768[(7)]);
var inst_26727 = (state_26768[(10)]);
var inst_26723 = (state_26768[(9)]);
var inst_26738 = inst_26708.push(inst_26723);
var tmp26835 = inst_26708;
var inst_26708__$1 = tmp26835;
var inst_26709 = inst_26727;
var state_26768__$1 = (function (){var statearr_26848 = state_26768;
(statearr_26848[(14)] = inst_26738);

(statearr_26848[(7)] = inst_26708__$1);

(statearr_26848[(8)] = inst_26709);

return statearr_26848;
})();
var statearr_26849_26942 = state_26768__$1;
(statearr_26849_26942[(2)] = null);

(statearr_26849_26942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
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
}
}
}
});})(c__21855__auto___26878,out))
;
return ((function (switch__21492__auto__,c__21855__auto___26878,out){
return (function() {
var cljs$core$async$state_machine__21493__auto__ = null;
var cljs$core$async$state_machine__21493__auto____0 = (function (){
var statearr_26857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26857[(0)] = cljs$core$async$state_machine__21493__auto__);

(statearr_26857[(1)] = (1));

return statearr_26857;
});
var cljs$core$async$state_machine__21493__auto____1 = (function (state_26768){
while(true){
var ret_value__21494__auto__ = (function (){try{while(true){
var result__21495__auto__ = switch__21492__auto__(state_26768);
if(cljs.core.keyword_identical_QMARK_(result__21495__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21495__auto__;
}
break;
}
}catch (e26862){if((e26862 instanceof Object)){
var ex__21496__auto__ = e26862;
var statearr_26866_26955 = state_26768;
(statearr_26866_26955[(5)] = ex__21496__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26768);

return cljs.core.cst$kw$recur;
} else {
throw e26862;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21494__auto__,cljs.core.cst$kw$recur)){
var G__26956 = state_26768;
state_26768 = G__26956;
continue;
} else {
return ret_value__21494__auto__;
}
break;
}
});
cljs$core$async$state_machine__21493__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21493__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21493__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21493__auto____0;
cljs$core$async$state_machine__21493__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21493__auto____1;
return cljs$core$async$state_machine__21493__auto__;
})()
;})(switch__21492__auto__,c__21855__auto___26878,out))
})();
var state__21857__auto__ = (function (){var statearr_26876 = (f__21856__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21856__auto__.cljs$core$IFn$_invoke$arity$0() : f__21856__auto__.call(null));
(statearr_26876[(6)] = c__21855__auto___26878);

return statearr_26876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21857__auto__);
});})(c__21855__auto___26878,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


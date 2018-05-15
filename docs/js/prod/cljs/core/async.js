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
var G__21872 = arguments.length;
switch (G__21872) {
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
if(typeof cljs.core.async.t_cljs$core$async21873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21873 = (function (f,blockable,meta21874){
this.f = f;
this.blockable = blockable;
this.meta21874 = meta21874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21875,meta21874__$1){
var self__ = this;
var _21875__$1 = this;
return (new cljs.core.async.t_cljs$core$async21873(self__.f,self__.blockable,meta21874__$1));
});

cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21875){
var self__ = this;
var _21875__$1 = this;
return self__.meta21874;
});

cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta21874], null);
});

cljs.core.async.t_cljs$core$async21873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21873";

cljs.core.async.t_cljs$core$async21873.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async21873");
});

cljs.core.async.__GT_t_cljs$core$async21873 = (function cljs$core$async$__GT_t_cljs$core$async21873(f__$1,blockable__$1,meta21874){
return (new cljs.core.async.t_cljs$core$async21873(f__$1,blockable__$1,meta21874));
});

}

return (new cljs.core.async.t_cljs$core$async21873(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21926 = arguments.length;
switch (G__21926) {
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
var G__21962 = arguments.length;
switch (G__21962) {
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
var G__21988 = arguments.length;
switch (G__21988) {
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
var val_22002 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22002) : fn1.call(null,val_22002));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22002,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22002) : fn1.call(null,val_22002));
});})(val_22002,ret))
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
var G__22017 = arguments.length;
switch (G__22017) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
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
var n__11850__auto___22097 = n;
var x_22098 = (0);
while(true){
if((x_22098 < n__11850__auto___22097)){
(a[x_22098] = (0));

var G__22100 = (x_22098 + (1));
x_22098 = G__22100;
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

var G__22103 = (i + (1));
i = G__22103;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async22117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22117 = (function (flag,meta22118){
this.flag = flag;
this.meta22118 = meta22118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22119,meta22118__$1){
var self__ = this;
var _22119__$1 = this;
return (new cljs.core.async.t_cljs$core$async22117(self__.flag,meta22118__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22119){
var self__ = this;
var _22119__$1 = this;
return self__.meta22118;
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta22118], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22117";

cljs.core.async.t_cljs$core$async22117.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async22117");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22117 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22117(flag__$1,meta22118){
return (new cljs.core.async.t_cljs$core$async22117(flag__$1,meta22118));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22117(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22168 = (function (flag,cb,meta22169){
this.flag = flag;
this.cb = cb;
this.meta22169 = meta22169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22170,meta22169__$1){
var self__ = this;
var _22170__$1 = this;
return (new cljs.core.async.t_cljs$core$async22168(self__.flag,self__.cb,meta22169__$1));
});

cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22170){
var self__ = this;
var _22170__$1 = this;
return self__.meta22169;
});

cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta22169], null);
});

cljs.core.async.t_cljs$core$async22168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22168";

cljs.core.async.t_cljs$core$async22168.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async22168");
});

cljs.core.async.__GT_t_cljs$core$async22168 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22168(flag__$1,cb__$1,meta22169){
return (new cljs.core.async.t_cljs$core$async22168(flag__$1,cb__$1,meta22169));
});

}

return (new cljs.core.async.t_cljs$core$async22168(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22207_SHARP_){
var G__22215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22207_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22215) : fret.call(null,G__22215));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22208_SHARP_){
var G__22218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22208_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22218) : fret.call(null,G__22218));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__10805__auto__ = wport;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22249 = (i + (1));
i = G__22249;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10805__auto__ = ret;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__10793__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__10793__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__12091__auto__ = [];
var len__12084__auto___22289 = arguments.length;
var i__12085__auto___22290 = (0);
while(true){
if((i__12085__auto___22290 < len__12084__auto___22289)){
args__12091__auto__.push((arguments[i__12085__auto___22290]));

var G__22293 = (i__12085__auto___22290 + (1));
i__12085__auto___22290 = G__22293;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22276){
var map__22277 = p__22276;
var map__22277__$1 = ((((!((map__22277 == null)))?((((map__22277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22277):map__22277);
var opts = map__22277__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22257){
var G__22258 = cljs.core.first(seq22257);
var seq22257__$1 = cljs.core.next(seq22257);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22258,seq22257__$1);
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
var G__22322 = arguments.length;
switch (G__22322) {
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
var c__21787__auto___22476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___22476){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___22476){
return (function (state_22406){
var state_val_22408 = (state_22406[(1)]);
if((state_val_22408 === (7))){
var inst_22393 = (state_22406[(2)]);
var state_22406__$1 = state_22406;
var statearr_22417_22479 = state_22406__$1;
(statearr_22417_22479[(2)] = inst_22393);

(statearr_22417_22479[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (1))){
var state_22406__$1 = state_22406;
var statearr_22419_22483 = state_22406__$1;
(statearr_22419_22483[(2)] = null);

(statearr_22419_22483[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (4))){
var inst_22358 = (state_22406[(7)]);
var inst_22358__$1 = (state_22406[(2)]);
var inst_22362 = (inst_22358__$1 == null);
var state_22406__$1 = (function (){var statearr_22422 = state_22406;
(statearr_22422[(7)] = inst_22358__$1);

return statearr_22422;
})();
if(cljs.core.truth_(inst_22362)){
var statearr_22426_22487 = state_22406__$1;
(statearr_22426_22487[(1)] = (5));

} else {
var statearr_22427_22489 = state_22406__$1;
(statearr_22427_22489[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (13))){
var state_22406__$1 = state_22406;
var statearr_22429_22490 = state_22406__$1;
(statearr_22429_22490[(2)] = null);

(statearr_22429_22490[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (6))){
var inst_22358 = (state_22406[(7)]);
var state_22406__$1 = state_22406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22406__$1,(11),to,inst_22358);
} else {
if((state_val_22408 === (3))){
var inst_22397 = (state_22406[(2)]);
var state_22406__$1 = state_22406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22406__$1,inst_22397);
} else {
if((state_val_22408 === (12))){
var state_22406__$1 = state_22406;
var statearr_22438_22495 = state_22406__$1;
(statearr_22438_22495[(2)] = null);

(statearr_22438_22495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (2))){
var state_22406__$1 = state_22406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22406__$1,(4),from);
} else {
if((state_val_22408 === (11))){
var inst_22377 = (state_22406[(2)]);
var state_22406__$1 = state_22406;
if(cljs.core.truth_(inst_22377)){
var statearr_22441_22497 = state_22406__$1;
(statearr_22441_22497[(1)] = (12));

} else {
var statearr_22442_22498 = state_22406__$1;
(statearr_22442_22498[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (9))){
var state_22406__$1 = state_22406;
var statearr_22445_22502 = state_22406__$1;
(statearr_22445_22502[(2)] = null);

(statearr_22445_22502[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (5))){
var state_22406__$1 = state_22406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22449_22504 = state_22406__$1;
(statearr_22449_22504[(1)] = (8));

} else {
var statearr_22450_22508 = state_22406__$1;
(statearr_22450_22508[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (14))){
var inst_22391 = (state_22406[(2)]);
var state_22406__$1 = state_22406;
var statearr_22452_22509 = state_22406__$1;
(statearr_22452_22509[(2)] = inst_22391);

(statearr_22452_22509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (10))){
var inst_22374 = (state_22406[(2)]);
var state_22406__$1 = state_22406;
var statearr_22455_22514 = state_22406__$1;
(statearr_22455_22514[(2)] = inst_22374);

(statearr_22455_22514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22408 === (8))){
var inst_22370 = cljs.core.async.close_BANG_(to);
var state_22406__$1 = state_22406;
var statearr_22459_22516 = state_22406__$1;
(statearr_22459_22516[(2)] = inst_22370);

(statearr_22459_22516[(1)] = (10));


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
});})(c__21787__auto___22476))
;
return ((function (switch__21538__auto__,c__21787__auto___22476){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_22461 = [null,null,null,null,null,null,null,null];
(statearr_22461[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_22461[(1)] = (1));

return statearr_22461;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_22406){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22406);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22462){if((e22462 instanceof Object)){
var ex__21542__auto__ = e22462;
var statearr_22464_22525 = state_22406;
(statearr_22464_22525[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22406);

return cljs.core.cst$kw$recur;
} else {
throw e22462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__22529 = state_22406;
state_22406 = G__22529;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_22406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_22406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___22476))
})();
var state__21789__auto__ = (function (){var statearr_22468 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22468[(6)] = c__21787__auto___22476);

return statearr_22468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___22476))
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
return (function (p__22538){
var vec__22539 = p__22538;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22539,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22539,(1),null);
var job = vec__22539;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21787__auto___22838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results){
return (function (state_22548){
var state_val_22549 = (state_22548[(1)]);
if((state_val_22549 === (1))){
var state_22548__$1 = state_22548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22548__$1,(2),res,v);
} else {
if((state_val_22549 === (2))){
var inst_22545 = (state_22548[(2)]);
var inst_22546 = cljs.core.async.close_BANG_(res);
var state_22548__$1 = (function (){var statearr_22553 = state_22548;
(statearr_22553[(7)] = inst_22545);

return statearr_22553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22548__$1,inst_22546);
} else {
return null;
}
}
});})(c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results))
;
return ((function (switch__21538__auto__,c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_22554 = [null,null,null,null,null,null,null,null];
(statearr_22554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__);

(statearr_22554[(1)] = (1));

return statearr_22554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1 = (function (state_22548){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22548);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22556){if((e22556 instanceof Object)){
var ex__21542__auto__ = e22556;
var statearr_22558_22845 = state_22548;
(statearr_22558_22845[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22548);

return cljs.core.cst$kw$recur;
} else {
throw e22556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__22846 = state_22548;
state_22548 = G__22846;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = function(state_22548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1.call(this,state_22548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results))
})();
var state__21789__auto__ = (function (){var statearr_22561 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22561[(6)] = c__21787__auto___22838);

return statearr_22561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___22838,res,vec__22539,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22566){
var vec__22567 = p__22566;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22567,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22567,(1),null);
var job = vec__22567;
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
var n__11850__auto___22851 = n;
var __22853 = (0);
while(true){
if((__22853 < n__11850__auto___22851)){
var G__22574_22854 = type;
var G__22574_22855__$1 = (((G__22574_22854 instanceof cljs.core.Keyword))?G__22574_22854.fqn:null);
switch (G__22574_22855__$1) {
case "compute":
var c__21787__auto___22857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22853,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (__22853,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function (state_22593){
var state_val_22594 = (state_22593[(1)]);
if((state_val_22594 === (1))){
var state_22593__$1 = state_22593;
var statearr_22595_22861 = state_22593__$1;
(statearr_22595_22861[(2)] = null);

(statearr_22595_22861[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22594 === (2))){
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22593__$1,(4),jobs);
} else {
if((state_val_22594 === (3))){
var inst_22591 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22593__$1,inst_22591);
} else {
if((state_val_22594 === (4))){
var inst_22582 = (state_22593[(2)]);
var inst_22583 = process(inst_22582);
var state_22593__$1 = state_22593;
if(cljs.core.truth_(inst_22583)){
var statearr_22596_22868 = state_22593__$1;
(statearr_22596_22868[(1)] = (5));

} else {
var statearr_22597_22869 = state_22593__$1;
(statearr_22597_22869[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22594 === (5))){
var state_22593__$1 = state_22593;
var statearr_22600_22870 = state_22593__$1;
(statearr_22600_22870[(2)] = null);

(statearr_22600_22870[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22594 === (6))){
var state_22593__$1 = state_22593;
var statearr_22603_22871 = state_22593__$1;
(statearr_22603_22871[(2)] = null);

(statearr_22603_22871[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22594 === (7))){
var inst_22589 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
var statearr_22604_22873 = state_22593__$1;
(statearr_22604_22873[(2)] = inst_22589);

(statearr_22604_22873[(1)] = (3));


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
});})(__22853,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
;
return ((function (__22853,switch__21538__auto__,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_22607 = [null,null,null,null,null,null,null];
(statearr_22607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__);

(statearr_22607[(1)] = (1));

return statearr_22607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1 = (function (state_22593){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22593);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22609){if((e22609 instanceof Object)){
var ex__21542__auto__ = e22609;
var statearr_22611_22883 = state_22593;
(statearr_22611_22883[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22593);

return cljs.core.cst$kw$recur;
} else {
throw e22609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__22884 = state_22593;
state_22593 = G__22884;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__;
})()
;})(__22853,switch__21538__auto__,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_22614 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22614[(6)] = c__21787__auto___22857);

return statearr_22614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(__22853,c__21787__auto___22857,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
);


break;
case "async":
var c__21787__auto___22889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22853,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (__22853,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function (state_22628){
var state_val_22629 = (state_22628[(1)]);
if((state_val_22629 === (1))){
var state_22628__$1 = state_22628;
var statearr_22630_22894 = state_22628__$1;
(statearr_22630_22894[(2)] = null);

(statearr_22630_22894[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22629 === (2))){
var state_22628__$1 = state_22628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22628__$1,(4),jobs);
} else {
if((state_val_22629 === (3))){
var inst_22626 = (state_22628[(2)]);
var state_22628__$1 = state_22628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22628__$1,inst_22626);
} else {
if((state_val_22629 === (4))){
var inst_22618 = (state_22628[(2)]);
var inst_22619 = async(inst_22618);
var state_22628__$1 = state_22628;
if(cljs.core.truth_(inst_22619)){
var statearr_22632_22901 = state_22628__$1;
(statearr_22632_22901[(1)] = (5));

} else {
var statearr_22633_22902 = state_22628__$1;
(statearr_22633_22902[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22629 === (5))){
var state_22628__$1 = state_22628;
var statearr_22636_22905 = state_22628__$1;
(statearr_22636_22905[(2)] = null);

(statearr_22636_22905[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22629 === (6))){
var state_22628__$1 = state_22628;
var statearr_22638_22906 = state_22628__$1;
(statearr_22638_22906[(2)] = null);

(statearr_22638_22906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22629 === (7))){
var inst_22624 = (state_22628[(2)]);
var state_22628__$1 = state_22628;
var statearr_22640_22911 = state_22628__$1;
(statearr_22640_22911[(2)] = inst_22624);

(statearr_22640_22911[(1)] = (3));


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
});})(__22853,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
;
return ((function (__22853,switch__21538__auto__,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_22643 = [null,null,null,null,null,null,null];
(statearr_22643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__);

(statearr_22643[(1)] = (1));

return statearr_22643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1 = (function (state_22628){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22628);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22645){if((e22645 instanceof Object)){
var ex__21542__auto__ = e22645;
var statearr_22646_22925 = state_22628;
(statearr_22646_22925[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22628);

return cljs.core.cst$kw$recur;
} else {
throw e22645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__22927 = state_22628;
state_22628 = G__22927;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = function(state_22628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1.call(this,state_22628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__;
})()
;})(__22853,switch__21538__auto__,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_22649 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22649[(6)] = c__21787__auto___22889);

return statearr_22649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(__22853,c__21787__auto___22889,G__22574_22854,G__22574_22855__$1,n__11850__auto___22851,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22574_22855__$1)].join('')));

}

var G__22936 = (__22853 + (1));
__22853 = G__22936;
continue;
} else {
}
break;
}

var c__21787__auto___22937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___22937,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___22937,jobs,results,process,async){
return (function (state_22683){
var state_val_22684 = (state_22683[(1)]);
if((state_val_22684 === (1))){
var state_22683__$1 = state_22683;
var statearr_22690_22940 = state_22683__$1;
(statearr_22690_22940[(2)] = null);

(statearr_22690_22940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22684 === (2))){
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22683__$1,(4),from);
} else {
if((state_val_22684 === (3))){
var inst_22679 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22683__$1,inst_22679);
} else {
if((state_val_22684 === (4))){
var inst_22658 = (state_22683[(7)]);
var inst_22658__$1 = (state_22683[(2)]);
var inst_22659 = (inst_22658__$1 == null);
var state_22683__$1 = (function (){var statearr_22703 = state_22683;
(statearr_22703[(7)] = inst_22658__$1);

return statearr_22703;
})();
if(cljs.core.truth_(inst_22659)){
var statearr_22704_22943 = state_22683__$1;
(statearr_22704_22943[(1)] = (5));

} else {
var statearr_22705_22944 = state_22683__$1;
(statearr_22705_22944[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22684 === (5))){
var inst_22662 = cljs.core.async.close_BANG_(jobs);
var state_22683__$1 = state_22683;
var statearr_22709_22950 = state_22683__$1;
(statearr_22709_22950[(2)] = inst_22662);

(statearr_22709_22950[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22684 === (6))){
var inst_22667 = (state_22683[(8)]);
var inst_22658 = (state_22683[(7)]);
var inst_22667__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22668 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22669 = [inst_22658,inst_22667__$1];
var inst_22670 = (new cljs.core.PersistentVector(null,2,(5),inst_22668,inst_22669,null));
var state_22683__$1 = (function (){var statearr_22710 = state_22683;
(statearr_22710[(8)] = inst_22667__$1);

return statearr_22710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22683__$1,(8),jobs,inst_22670);
} else {
if((state_val_22684 === (7))){
var inst_22677 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
var statearr_22715_22956 = state_22683__$1;
(statearr_22715_22956[(2)] = inst_22677);

(statearr_22715_22956[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22684 === (8))){
var inst_22667 = (state_22683[(8)]);
var inst_22672 = (state_22683[(2)]);
var state_22683__$1 = (function (){var statearr_22716 = state_22683;
(statearr_22716[(9)] = inst_22672);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22683__$1,(9),results,inst_22667);
} else {
if((state_val_22684 === (9))){
var inst_22674 = (state_22683[(2)]);
var state_22683__$1 = (function (){var statearr_22718 = state_22683;
(statearr_22718[(10)] = inst_22674);

return statearr_22718;
})();
var statearr_22719_22960 = state_22683__$1;
(statearr_22719_22960[(2)] = null);

(statearr_22719_22960[(1)] = (2));


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
});})(c__21787__auto___22937,jobs,results,process,async))
;
return ((function (switch__21538__auto__,c__21787__auto___22937,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_22720 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__);

(statearr_22720[(1)] = (1));

return statearr_22720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1 = (function (state_22683){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22683);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22722){if((e22722 instanceof Object)){
var ex__21542__auto__ = e22722;
var statearr_22723_22966 = state_22683;
(statearr_22723_22966[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22683);

return cljs.core.cst$kw$recur;
} else {
throw e22722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__22969 = state_22683;
state_22683 = G__22969;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = function(state_22683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1.call(this,state_22683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___22937,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_22726 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22726[(6)] = c__21787__auto___22937);

return statearr_22726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___22937,jobs,results,process,async))
);


var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__,jobs,results,process,async){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__,jobs,results,process,async){
return (function (state_22770){
var state_val_22772 = (state_22770[(1)]);
if((state_val_22772 === (7))){
var inst_22765 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
var statearr_22774_22973 = state_22770__$1;
(statearr_22774_22973[(2)] = inst_22765);

(statearr_22774_22973[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (20))){
var state_22770__$1 = state_22770;
var statearr_22776_22974 = state_22770__$1;
(statearr_22776_22974[(2)] = null);

(statearr_22776_22974[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (1))){
var state_22770__$1 = state_22770;
var statearr_22777_22977 = state_22770__$1;
(statearr_22777_22977[(2)] = null);

(statearr_22777_22977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (4))){
var inst_22731 = (state_22770[(7)]);
var inst_22731__$1 = (state_22770[(2)]);
var inst_22732 = (inst_22731__$1 == null);
var state_22770__$1 = (function (){var statearr_22778 = state_22770;
(statearr_22778[(7)] = inst_22731__$1);

return statearr_22778;
})();
if(cljs.core.truth_(inst_22732)){
var statearr_22780_22980 = state_22770__$1;
(statearr_22780_22980[(1)] = (5));

} else {
var statearr_22781_22981 = state_22770__$1;
(statearr_22781_22981[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (15))){
var inst_22745 = (state_22770[(8)]);
var state_22770__$1 = state_22770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22770__$1,(18),to,inst_22745);
} else {
if((state_val_22772 === (21))){
var inst_22760 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
var statearr_22783_22989 = state_22770__$1;
(statearr_22783_22989[(2)] = inst_22760);

(statearr_22783_22989[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (13))){
var inst_22762 = (state_22770[(2)]);
var state_22770__$1 = (function (){var statearr_22784 = state_22770;
(statearr_22784[(9)] = inst_22762);

return statearr_22784;
})();
var statearr_22786_22990 = state_22770__$1;
(statearr_22786_22990[(2)] = null);

(statearr_22786_22990[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (6))){
var inst_22731 = (state_22770[(7)]);
var state_22770__$1 = state_22770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22770__$1,(11),inst_22731);
} else {
if((state_val_22772 === (17))){
var inst_22755 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
if(cljs.core.truth_(inst_22755)){
var statearr_22788_22992 = state_22770__$1;
(statearr_22788_22992[(1)] = (19));

} else {
var statearr_22789_22993 = state_22770__$1;
(statearr_22789_22993[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (3))){
var inst_22767 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22770__$1,inst_22767);
} else {
if((state_val_22772 === (12))){
var inst_22742 = (state_22770[(10)]);
var state_22770__$1 = state_22770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22770__$1,(14),inst_22742);
} else {
if((state_val_22772 === (2))){
var state_22770__$1 = state_22770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22770__$1,(4),results);
} else {
if((state_val_22772 === (19))){
var state_22770__$1 = state_22770;
var statearr_22791_22995 = state_22770__$1;
(statearr_22791_22995[(2)] = null);

(statearr_22791_22995[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (11))){
var inst_22742 = (state_22770[(2)]);
var state_22770__$1 = (function (){var statearr_22793 = state_22770;
(statearr_22793[(10)] = inst_22742);

return statearr_22793;
})();
var statearr_22794_23000 = state_22770__$1;
(statearr_22794_23000[(2)] = null);

(statearr_22794_23000[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (9))){
var state_22770__$1 = state_22770;
var statearr_22795_23001 = state_22770__$1;
(statearr_22795_23001[(2)] = null);

(statearr_22795_23001[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (5))){
var state_22770__$1 = state_22770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22798_23002 = state_22770__$1;
(statearr_22798_23002[(1)] = (8));

} else {
var statearr_22799_23003 = state_22770__$1;
(statearr_22799_23003[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (14))){
var inst_22745 = (state_22770[(8)]);
var inst_22749 = (state_22770[(11)]);
var inst_22745__$1 = (state_22770[(2)]);
var inst_22748 = (inst_22745__$1 == null);
var inst_22749__$1 = cljs.core.not(inst_22748);
var state_22770__$1 = (function (){var statearr_22800 = state_22770;
(statearr_22800[(8)] = inst_22745__$1);

(statearr_22800[(11)] = inst_22749__$1);

return statearr_22800;
})();
if(inst_22749__$1){
var statearr_22806_23010 = state_22770__$1;
(statearr_22806_23010[(1)] = (15));

} else {
var statearr_22807_23011 = state_22770__$1;
(statearr_22807_23011[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (16))){
var inst_22749 = (state_22770[(11)]);
var state_22770__$1 = state_22770;
var statearr_22810_23012 = state_22770__$1;
(statearr_22810_23012[(2)] = inst_22749);

(statearr_22810_23012[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (10))){
var inst_22739 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
var statearr_22814_23015 = state_22770__$1;
(statearr_22814_23015[(2)] = inst_22739);

(statearr_22814_23015[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (18))){
var inst_22752 = (state_22770[(2)]);
var state_22770__$1 = state_22770;
var statearr_22818_23018 = state_22770__$1;
(statearr_22818_23018[(2)] = inst_22752);

(statearr_22818_23018[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22772 === (8))){
var inst_22735 = cljs.core.async.close_BANG_(to);
var state_22770__$1 = state_22770;
var statearr_22821_23021 = state_22770__$1;
(statearr_22821_23021[(2)] = inst_22735);

(statearr_22821_23021[(1)] = (10));


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
});})(c__21787__auto__,jobs,results,process,async))
;
return ((function (switch__21538__auto__,c__21787__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_22822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__);

(statearr_22822[(1)] = (1));

return statearr_22822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1 = (function (state_22770){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_22770);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__21542__auto__ = e22825;
var statearr_22829_23028 = state_22770;
(statearr_22829_23028[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22770);

return cljs.core.cst$kw$recur;
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__23029 = state_22770;
state_22770 = G__23029;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__ = function(state_22770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1.call(this,state_22770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__,jobs,results,process,async))
})();
var state__21789__auto__ = (function (){var statearr_22830 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_22830[(6)] = c__21787__auto__);

return statearr_22830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__,jobs,results,process,async))
);

return c__21787__auto__;
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
var G__23037 = arguments.length;
switch (G__23037) {
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
var G__23056 = arguments.length;
switch (G__23056) {
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
var G__23079 = arguments.length;
switch (G__23079) {
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
var c__21787__auto___23177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___23177,tc,fc){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___23177,tc,fc){
return (function (state_23114){
var state_val_23115 = (state_23114[(1)]);
if((state_val_23115 === (7))){
var inst_23110 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23119_23182 = state_23114__$1;
(statearr_23119_23182[(2)] = inst_23110);

(statearr_23119_23182[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (1))){
var state_23114__$1 = state_23114;
var statearr_23120_23185 = state_23114__$1;
(statearr_23120_23185[(2)] = null);

(statearr_23120_23185[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (4))){
var inst_23088 = (state_23114[(7)]);
var inst_23088__$1 = (state_23114[(2)]);
var inst_23089 = (inst_23088__$1 == null);
var state_23114__$1 = (function (){var statearr_23121 = state_23114;
(statearr_23121[(7)] = inst_23088__$1);

return statearr_23121;
})();
if(cljs.core.truth_(inst_23089)){
var statearr_23124_23189 = state_23114__$1;
(statearr_23124_23189[(1)] = (5));

} else {
var statearr_23125_23191 = state_23114__$1;
(statearr_23125_23191[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (13))){
var state_23114__$1 = state_23114;
var statearr_23128_23195 = state_23114__$1;
(statearr_23128_23195[(2)] = null);

(statearr_23128_23195[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (6))){
var inst_23088 = (state_23114[(7)]);
var inst_23097 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23088) : p.call(null,inst_23088));
var state_23114__$1 = state_23114;
if(cljs.core.truth_(inst_23097)){
var statearr_23129_23196 = state_23114__$1;
(statearr_23129_23196[(1)] = (9));

} else {
var statearr_23130_23197 = state_23114__$1;
(statearr_23130_23197[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (3))){
var inst_23112 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23114__$1,inst_23112);
} else {
if((state_val_23115 === (12))){
var state_23114__$1 = state_23114;
var statearr_23133_23203 = state_23114__$1;
(statearr_23133_23203[(2)] = null);

(statearr_23133_23203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (2))){
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23114__$1,(4),ch);
} else {
if((state_val_23115 === (11))){
var inst_23088 = (state_23114[(7)]);
var inst_23101 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23114__$1,(8),inst_23101,inst_23088);
} else {
if((state_val_23115 === (9))){
var state_23114__$1 = state_23114;
var statearr_23138_23208 = state_23114__$1;
(statearr_23138_23208[(2)] = tc);

(statearr_23138_23208[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (5))){
var inst_23092 = cljs.core.async.close_BANG_(tc);
var inst_23093 = cljs.core.async.close_BANG_(fc);
var state_23114__$1 = (function (){var statearr_23142 = state_23114;
(statearr_23142[(8)] = inst_23092);

return statearr_23142;
})();
var statearr_23143_23220 = state_23114__$1;
(statearr_23143_23220[(2)] = inst_23093);

(statearr_23143_23220[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (14))){
var inst_23108 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
var statearr_23146_23221 = state_23114__$1;
(statearr_23146_23221[(2)] = inst_23108);

(statearr_23146_23221[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (10))){
var state_23114__$1 = state_23114;
var statearr_23149_23222 = state_23114__$1;
(statearr_23149_23222[(2)] = fc);

(statearr_23149_23222[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23115 === (8))){
var inst_23103 = (state_23114[(2)]);
var state_23114__$1 = state_23114;
if(cljs.core.truth_(inst_23103)){
var statearr_23152_23227 = state_23114__$1;
(statearr_23152_23227[(1)] = (12));

} else {
var statearr_23157_23228 = state_23114__$1;
(statearr_23157_23228[(1)] = (13));

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
});})(c__21787__auto___23177,tc,fc))
;
return ((function (switch__21538__auto__,c__21787__auto___23177,tc,fc){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_23161 = [null,null,null,null,null,null,null,null,null];
(statearr_23161[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_23161[(1)] = (1));

return statearr_23161;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_23114){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_23114);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e23164){if((e23164 instanceof Object)){
var ex__21542__auto__ = e23164;
var statearr_23165_23235 = state_23114;
(statearr_23165_23235[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23114);

return cljs.core.cst$kw$recur;
} else {
throw e23164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__23238 = state_23114;
state_23114 = G__23238;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_23114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_23114);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___23177,tc,fc))
})();
var state__21789__auto__ = (function (){var statearr_23168 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_23168[(6)] = c__21787__auto___23177);

return statearr_23168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___23177,tc,fc))
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
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__){
return (function (state_23270){
var state_val_23271 = (state_23270[(1)]);
if((state_val_23271 === (7))){
var inst_23264 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23274_23320 = state_23270__$1;
(statearr_23274_23320[(2)] = inst_23264);

(statearr_23274_23320[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (1))){
var inst_23246 = init;
var state_23270__$1 = (function (){var statearr_23277 = state_23270;
(statearr_23277[(7)] = inst_23246);

return statearr_23277;
})();
var statearr_23278_23323 = state_23270__$1;
(statearr_23278_23323[(2)] = null);

(statearr_23278_23323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (4))){
var inst_23249 = (state_23270[(8)]);
var inst_23249__$1 = (state_23270[(2)]);
var inst_23251 = (inst_23249__$1 == null);
var state_23270__$1 = (function (){var statearr_23283 = state_23270;
(statearr_23283[(8)] = inst_23249__$1);

return statearr_23283;
})();
if(cljs.core.truth_(inst_23251)){
var statearr_23284_23327 = state_23270__$1;
(statearr_23284_23327[(1)] = (5));

} else {
var statearr_23285_23329 = state_23270__$1;
(statearr_23285_23329[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (6))){
var inst_23255 = (state_23270[(9)]);
var inst_23246 = (state_23270[(7)]);
var inst_23249 = (state_23270[(8)]);
var inst_23255__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23246,inst_23249) : f.call(null,inst_23246,inst_23249));
var inst_23256 = cljs.core.reduced_QMARK_(inst_23255__$1);
var state_23270__$1 = (function (){var statearr_23286 = state_23270;
(statearr_23286[(9)] = inst_23255__$1);

return statearr_23286;
})();
if(inst_23256){
var statearr_23289_23334 = state_23270__$1;
(statearr_23289_23334[(1)] = (8));

} else {
var statearr_23290_23335 = state_23270__$1;
(statearr_23290_23335[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (3))){
var inst_23266 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23270__$1,inst_23266);
} else {
if((state_val_23271 === (2))){
var state_23270__$1 = state_23270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23270__$1,(4),ch);
} else {
if((state_val_23271 === (9))){
var inst_23255 = (state_23270[(9)]);
var inst_23246 = inst_23255;
var state_23270__$1 = (function (){var statearr_23295 = state_23270;
(statearr_23295[(7)] = inst_23246);

return statearr_23295;
})();
var statearr_23296_23344 = state_23270__$1;
(statearr_23296_23344[(2)] = null);

(statearr_23296_23344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (5))){
var inst_23246 = (state_23270[(7)]);
var state_23270__$1 = state_23270;
var statearr_23299_23347 = state_23270__$1;
(statearr_23299_23347[(2)] = inst_23246);

(statearr_23299_23347[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (10))){
var inst_23262 = (state_23270[(2)]);
var state_23270__$1 = state_23270;
var statearr_23302_23351 = state_23270__$1;
(statearr_23302_23351[(2)] = inst_23262);

(statearr_23302_23351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23271 === (8))){
var inst_23255 = (state_23270[(9)]);
var inst_23258 = cljs.core.deref(inst_23255);
var state_23270__$1 = state_23270;
var statearr_23305_23355 = state_23270__$1;
(statearr_23305_23355[(2)] = inst_23258);

(statearr_23305_23355[(1)] = (10));


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
});})(c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21539__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21539__auto____0 = (function (){
var statearr_23306 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23306[(0)] = cljs$core$async$reduce_$_state_machine__21539__auto__);

(statearr_23306[(1)] = (1));

return statearr_23306;
});
var cljs$core$async$reduce_$_state_machine__21539__auto____1 = (function (state_23270){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_23270);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e23309){if((e23309 instanceof Object)){
var ex__21542__auto__ = e23309;
var statearr_23311_23361 = state_23270;
(statearr_23311_23361[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23270);

return cljs.core.cst$kw$recur;
} else {
throw e23309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__23364 = state_23270;
state_23270 = G__23364;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21539__auto__ = function(state_23270){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21539__auto____1.call(this,state_23270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21539__auto____0;
cljs$core$async$reduce_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21539__auto____1;
return cljs$core$async$reduce_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_23315 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_23315[(6)] = c__21787__auto__);

return statearr_23315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__,f__$1){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__,f__$1){
return (function (state_23376){
var state_val_23377 = (state_23376[(1)]);
if((state_val_23377 === (1))){
var inst_23369 = cljs.core.async.reduce(f__$1,init,ch);
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23376__$1,(2),inst_23369);
} else {
if((state_val_23377 === (2))){
var inst_23372 = (state_23376[(2)]);
var inst_23374 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_23372) : f__$1.call(null,inst_23372));
var state_23376__$1 = state_23376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23376__$1,inst_23374);
} else {
return null;
}
}
});})(c__21787__auto__,f__$1))
;
return ((function (switch__21538__auto__,c__21787__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21539__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21539__auto____0 = (function (){
var statearr_23382 = [null,null,null,null,null,null,null];
(statearr_23382[(0)] = cljs$core$async$transduce_$_state_machine__21539__auto__);

(statearr_23382[(1)] = (1));

return statearr_23382;
});
var cljs$core$async$transduce_$_state_machine__21539__auto____1 = (function (state_23376){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_23376);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e23383){if((e23383 instanceof Object)){
var ex__21542__auto__ = e23383;
var statearr_23386_23402 = state_23376;
(statearr_23386_23402[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23376);

return cljs.core.cst$kw$recur;
} else {
throw e23383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__23405 = state_23376;
state_23376 = G__23405;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21539__auto__ = function(state_23376){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21539__auto____1.call(this,state_23376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21539__auto____0;
cljs$core$async$transduce_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21539__auto____1;
return cljs$core$async$transduce_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__,f__$1))
})();
var state__21789__auto__ = (function (){var statearr_23389 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_23389[(6)] = c__21787__auto__);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__,f__$1))
);

return c__21787__auto__;
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
var G__23411 = arguments.length;
switch (G__23411) {
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
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__){
return (function (state_23444){
var state_val_23445 = (state_23444[(1)]);
if((state_val_23445 === (7))){
var inst_23424 = (state_23444[(2)]);
var state_23444__$1 = state_23444;
var statearr_23450_23503 = state_23444__$1;
(statearr_23450_23503[(2)] = inst_23424);

(statearr_23450_23503[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (1))){
var inst_23418 = cljs.core.seq(coll);
var inst_23419 = inst_23418;
var state_23444__$1 = (function (){var statearr_23451 = state_23444;
(statearr_23451[(7)] = inst_23419);

return statearr_23451;
})();
var statearr_23452_23508 = state_23444__$1;
(statearr_23452_23508[(2)] = null);

(statearr_23452_23508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (4))){
var inst_23419 = (state_23444[(7)]);
var inst_23422 = cljs.core.first(inst_23419);
var state_23444__$1 = state_23444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23444__$1,(7),ch,inst_23422);
} else {
if((state_val_23445 === (13))){
var inst_23437 = (state_23444[(2)]);
var state_23444__$1 = state_23444;
var statearr_23457_23511 = state_23444__$1;
(statearr_23457_23511[(2)] = inst_23437);

(statearr_23457_23511[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (6))){
var inst_23427 = (state_23444[(2)]);
var state_23444__$1 = state_23444;
if(cljs.core.truth_(inst_23427)){
var statearr_23460_23516 = state_23444__$1;
(statearr_23460_23516[(1)] = (8));

} else {
var statearr_23461_23517 = state_23444__$1;
(statearr_23461_23517[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (3))){
var inst_23442 = (state_23444[(2)]);
var state_23444__$1 = state_23444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23444__$1,inst_23442);
} else {
if((state_val_23445 === (12))){
var state_23444__$1 = state_23444;
var statearr_23464_23520 = state_23444__$1;
(statearr_23464_23520[(2)] = null);

(statearr_23464_23520[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (2))){
var inst_23419 = (state_23444[(7)]);
var state_23444__$1 = state_23444;
if(cljs.core.truth_(inst_23419)){
var statearr_23466_23523 = state_23444__$1;
(statearr_23466_23523[(1)] = (4));

} else {
var statearr_23468_23526 = state_23444__$1;
(statearr_23468_23526[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (11))){
var inst_23434 = cljs.core.async.close_BANG_(ch);
var state_23444__$1 = state_23444;
var statearr_23471_23527 = state_23444__$1;
(statearr_23471_23527[(2)] = inst_23434);

(statearr_23471_23527[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (9))){
var state_23444__$1 = state_23444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23472_23530 = state_23444__$1;
(statearr_23472_23530[(1)] = (11));

} else {
var statearr_23473_23531 = state_23444__$1;
(statearr_23473_23531[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (5))){
var inst_23419 = (state_23444[(7)]);
var state_23444__$1 = state_23444;
var statearr_23476_23534 = state_23444__$1;
(statearr_23476_23534[(2)] = inst_23419);

(statearr_23476_23534[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (10))){
var inst_23440 = (state_23444[(2)]);
var state_23444__$1 = state_23444;
var statearr_23479_23537 = state_23444__$1;
(statearr_23479_23537[(2)] = inst_23440);

(statearr_23479_23537[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23445 === (8))){
var inst_23419 = (state_23444[(7)]);
var inst_23429 = cljs.core.next(inst_23419);
var inst_23419__$1 = inst_23429;
var state_23444__$1 = (function (){var statearr_23482 = state_23444;
(statearr_23482[(7)] = inst_23419__$1);

return statearr_23482;
})();
var statearr_23483_23540 = state_23444__$1;
(statearr_23483_23540[(2)] = null);

(statearr_23483_23540[(1)] = (2));


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
});})(c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_23486 = [null,null,null,null,null,null,null,null];
(statearr_23486[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_23486[(1)] = (1));

return statearr_23486;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_23444){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_23444);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e23487){if((e23487 instanceof Object)){
var ex__21542__auto__ = e23487;
var statearr_23490_23545 = state_23444;
(statearr_23490_23545[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23444);

return cljs.core.cst$kw$recur;
} else {
throw e23487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__23547 = state_23444;
state_23444 = G__23547;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_23444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_23444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_23493 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_23493[(6)] = c__21787__auto__);

return statearr_23493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
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
var x__11538__auto__ = (((_ == null))?null:_);
var m__11539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__11539__auto__.call(null,_));
} else {
var m__11539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__11539__auto____$1.call(null,_));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11539__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__11539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__11539__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto__.call(null,m,ch));
} else {
var m__11539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto____$1.call(null,m,ch));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11539__auto__.call(null,m));
} else {
var m__11539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11539__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async23603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23603 = (function (ch,cs,meta23604){
this.ch = ch;
this.cs = cs;
this.meta23604 = meta23604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23605,meta23604__$1){
var self__ = this;
var _23605__$1 = this;
return (new cljs.core.async.t_cljs$core$async23603(self__.ch,self__.cs,meta23604__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23605){
var self__ = this;
var _23605__$1 = this;
return self__.meta23604;
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta23604], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23603";

cljs.core.async.t_cljs$core$async23603.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async23603");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23603 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23603(ch__$1,cs__$1,meta23604){
return (new cljs.core.async.t_cljs$core$async23603(ch__$1,cs__$1,meta23604));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23603(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21787__auto___23983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___23983,cs,m,dchan,dctr,done){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___23983,cs,m,dchan,dctr,done){
return (function (state_23774){
var state_val_23775 = (state_23774[(1)]);
if((state_val_23775 === (7))){
var inst_23770 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23780_23986 = state_23774__$1;
(statearr_23780_23986[(2)] = inst_23770);

(statearr_23780_23986[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (20))){
var inst_23661 = (state_23774[(7)]);
var inst_23673 = cljs.core.first(inst_23661);
var inst_23674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23673,(0),null);
var inst_23675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23673,(1),null);
var state_23774__$1 = (function (){var statearr_23783 = state_23774;
(statearr_23783[(8)] = inst_23674);

return statearr_23783;
})();
if(cljs.core.truth_(inst_23675)){
var statearr_23784_23993 = state_23774__$1;
(statearr_23784_23993[(1)] = (22));

} else {
var statearr_23785_23994 = state_23774__$1;
(statearr_23785_23994[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (27))){
var inst_23716 = (state_23774[(9)]);
var inst_23709 = (state_23774[(10)]);
var inst_23624 = (state_23774[(11)]);
var inst_23707 = (state_23774[(12)]);
var inst_23716__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23707,inst_23709);
var inst_23717 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23716__$1,inst_23624,done);
var state_23774__$1 = (function (){var statearr_23789 = state_23774;
(statearr_23789[(9)] = inst_23716__$1);

return statearr_23789;
})();
if(cljs.core.truth_(inst_23717)){
var statearr_23791_23999 = state_23774__$1;
(statearr_23791_23999[(1)] = (30));

} else {
var statearr_23792_24002 = state_23774__$1;
(statearr_23792_24002[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (1))){
var state_23774__$1 = state_23774;
var statearr_23795_24003 = state_23774__$1;
(statearr_23795_24003[(2)] = null);

(statearr_23795_24003[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (24))){
var inst_23661 = (state_23774[(7)]);
var inst_23682 = (state_23774[(2)]);
var inst_23683 = cljs.core.next(inst_23661);
var inst_23635 = inst_23683;
var inst_23636 = null;
var inst_23637 = (0);
var inst_23638 = (0);
var state_23774__$1 = (function (){var statearr_23796 = state_23774;
(statearr_23796[(13)] = inst_23638);

(statearr_23796[(14)] = inst_23637);

(statearr_23796[(15)] = inst_23682);

(statearr_23796[(16)] = inst_23636);

(statearr_23796[(17)] = inst_23635);

return statearr_23796;
})();
var statearr_23799_24010 = state_23774__$1;
(statearr_23799_24010[(2)] = null);

(statearr_23799_24010[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (39))){
var state_23774__$1 = state_23774;
var statearr_23807_24011 = state_23774__$1;
(statearr_23807_24011[(2)] = null);

(statearr_23807_24011[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (4))){
var inst_23624 = (state_23774[(11)]);
var inst_23624__$1 = (state_23774[(2)]);
var inst_23625 = (inst_23624__$1 == null);
var state_23774__$1 = (function (){var statearr_23808 = state_23774;
(statearr_23808[(11)] = inst_23624__$1);

return statearr_23808;
})();
if(cljs.core.truth_(inst_23625)){
var statearr_23811_24014 = state_23774__$1;
(statearr_23811_24014[(1)] = (5));

} else {
var statearr_23812_24017 = state_23774__$1;
(statearr_23812_24017[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (15))){
var inst_23638 = (state_23774[(13)]);
var inst_23637 = (state_23774[(14)]);
var inst_23636 = (state_23774[(16)]);
var inst_23635 = (state_23774[(17)]);
var inst_23655 = (state_23774[(2)]);
var inst_23658 = (inst_23638 + (1));
var tmp23802 = inst_23637;
var tmp23803 = inst_23636;
var tmp23804 = inst_23635;
var inst_23635__$1 = tmp23804;
var inst_23636__$1 = tmp23803;
var inst_23637__$1 = tmp23802;
var inst_23638__$1 = inst_23658;
var state_23774__$1 = (function (){var statearr_23817 = state_23774;
(statearr_23817[(13)] = inst_23638__$1);

(statearr_23817[(14)] = inst_23637__$1);

(statearr_23817[(18)] = inst_23655);

(statearr_23817[(16)] = inst_23636__$1);

(statearr_23817[(17)] = inst_23635__$1);

return statearr_23817;
})();
var statearr_23818_24024 = state_23774__$1;
(statearr_23818_24024[(2)] = null);

(statearr_23818_24024[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (21))){
var inst_23686 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23822_24027 = state_23774__$1;
(statearr_23822_24027[(2)] = inst_23686);

(statearr_23822_24027[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (31))){
var inst_23716 = (state_23774[(9)]);
var inst_23720 = done(null);
var inst_23721 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23716);
var state_23774__$1 = (function (){var statearr_23825 = state_23774;
(statearr_23825[(19)] = inst_23720);

return statearr_23825;
})();
var statearr_23828_24030 = state_23774__$1;
(statearr_23828_24030[(2)] = inst_23721);

(statearr_23828_24030[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (32))){
var inst_23708 = (state_23774[(20)]);
var inst_23709 = (state_23774[(10)]);
var inst_23706 = (state_23774[(21)]);
var inst_23707 = (state_23774[(12)]);
var inst_23723 = (state_23774[(2)]);
var inst_23724 = (inst_23709 + (1));
var tmp23819 = inst_23708;
var tmp23820 = inst_23706;
var tmp23821 = inst_23707;
var inst_23706__$1 = tmp23820;
var inst_23707__$1 = tmp23821;
var inst_23708__$1 = tmp23819;
var inst_23709__$1 = inst_23724;
var state_23774__$1 = (function (){var statearr_23831 = state_23774;
(statearr_23831[(20)] = inst_23708__$1);

(statearr_23831[(10)] = inst_23709__$1);

(statearr_23831[(21)] = inst_23706__$1);

(statearr_23831[(22)] = inst_23723);

(statearr_23831[(12)] = inst_23707__$1);

return statearr_23831;
})();
var statearr_23832_24038 = state_23774__$1;
(statearr_23832_24038[(2)] = null);

(statearr_23832_24038[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (40))){
var inst_23738 = (state_23774[(23)]);
var inst_23743 = done(null);
var inst_23745 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23738);
var state_23774__$1 = (function (){var statearr_23835 = state_23774;
(statearr_23835[(24)] = inst_23743);

return statearr_23835;
})();
var statearr_23836_24042 = state_23774__$1;
(statearr_23836_24042[(2)] = inst_23745);

(statearr_23836_24042[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (33))){
var inst_23727 = (state_23774[(25)]);
var inst_23730 = cljs.core.chunked_seq_QMARK_(inst_23727);
var state_23774__$1 = state_23774;
if(inst_23730){
var statearr_23841_24045 = state_23774__$1;
(statearr_23841_24045[(1)] = (36));

} else {
var statearr_23842_24046 = state_23774__$1;
(statearr_23842_24046[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (13))){
var inst_23649 = (state_23774[(26)]);
var inst_23652 = cljs.core.async.close_BANG_(inst_23649);
var state_23774__$1 = state_23774;
var statearr_23843_24051 = state_23774__$1;
(statearr_23843_24051[(2)] = inst_23652);

(statearr_23843_24051[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (22))){
var inst_23674 = (state_23774[(8)]);
var inst_23679 = cljs.core.async.close_BANG_(inst_23674);
var state_23774__$1 = state_23774;
var statearr_23846_24052 = state_23774__$1;
(statearr_23846_24052[(2)] = inst_23679);

(statearr_23846_24052[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (36))){
var inst_23727 = (state_23774[(25)]);
var inst_23733 = cljs.core.chunk_first(inst_23727);
var inst_23734 = cljs.core.chunk_rest(inst_23727);
var inst_23735 = cljs.core.count(inst_23733);
var inst_23706 = inst_23734;
var inst_23707 = inst_23733;
var inst_23708 = inst_23735;
var inst_23709 = (0);
var state_23774__$1 = (function (){var statearr_23849 = state_23774;
(statearr_23849[(20)] = inst_23708);

(statearr_23849[(10)] = inst_23709);

(statearr_23849[(21)] = inst_23706);

(statearr_23849[(12)] = inst_23707);

return statearr_23849;
})();
var statearr_23852_24059 = state_23774__$1;
(statearr_23852_24059[(2)] = null);

(statearr_23852_24059[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (41))){
var inst_23727 = (state_23774[(25)]);
var inst_23747 = (state_23774[(2)]);
var inst_23748 = cljs.core.next(inst_23727);
var inst_23706 = inst_23748;
var inst_23707 = null;
var inst_23708 = (0);
var inst_23709 = (0);
var state_23774__$1 = (function (){var statearr_23853 = state_23774;
(statearr_23853[(20)] = inst_23708);

(statearr_23853[(10)] = inst_23709);

(statearr_23853[(21)] = inst_23706);

(statearr_23853[(27)] = inst_23747);

(statearr_23853[(12)] = inst_23707);

return statearr_23853;
})();
var statearr_23856_24066 = state_23774__$1;
(statearr_23856_24066[(2)] = null);

(statearr_23856_24066[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (43))){
var state_23774__$1 = state_23774;
var statearr_23858_24067 = state_23774__$1;
(statearr_23858_24067[(2)] = null);

(statearr_23858_24067[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (29))){
var inst_23756 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23862_24070 = state_23774__$1;
(statearr_23862_24070[(2)] = inst_23756);

(statearr_23862_24070[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (44))){
var inst_23767 = (state_23774[(2)]);
var state_23774__$1 = (function (){var statearr_23863 = state_23774;
(statearr_23863[(28)] = inst_23767);

return statearr_23863;
})();
var statearr_23864_24075 = state_23774__$1;
(statearr_23864_24075[(2)] = null);

(statearr_23864_24075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (6))){
var inst_23698 = (state_23774[(29)]);
var inst_23697 = cljs.core.deref(cs);
var inst_23698__$1 = cljs.core.keys(inst_23697);
var inst_23699 = cljs.core.count(inst_23698__$1);
var inst_23700 = cljs.core.reset_BANG_(dctr,inst_23699);
var inst_23705 = cljs.core.seq(inst_23698__$1);
var inst_23706 = inst_23705;
var inst_23707 = null;
var inst_23708 = (0);
var inst_23709 = (0);
var state_23774__$1 = (function (){var statearr_23868 = state_23774;
(statearr_23868[(30)] = inst_23700);

(statearr_23868[(20)] = inst_23708);

(statearr_23868[(10)] = inst_23709);

(statearr_23868[(21)] = inst_23706);

(statearr_23868[(29)] = inst_23698__$1);

(statearr_23868[(12)] = inst_23707);

return statearr_23868;
})();
var statearr_23872_24082 = state_23774__$1;
(statearr_23872_24082[(2)] = null);

(statearr_23872_24082[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (28))){
var inst_23706 = (state_23774[(21)]);
var inst_23727 = (state_23774[(25)]);
var inst_23727__$1 = cljs.core.seq(inst_23706);
var state_23774__$1 = (function (){var statearr_23873 = state_23774;
(statearr_23873[(25)] = inst_23727__$1);

return statearr_23873;
})();
if(inst_23727__$1){
var statearr_23874_24087 = state_23774__$1;
(statearr_23874_24087[(1)] = (33));

} else {
var statearr_23875_24090 = state_23774__$1;
(statearr_23875_24090[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (25))){
var inst_23708 = (state_23774[(20)]);
var inst_23709 = (state_23774[(10)]);
var inst_23713 = (inst_23709 < inst_23708);
var inst_23714 = inst_23713;
var state_23774__$1 = state_23774;
if(cljs.core.truth_(inst_23714)){
var statearr_23878_24093 = state_23774__$1;
(statearr_23878_24093[(1)] = (27));

} else {
var statearr_23880_24094 = state_23774__$1;
(statearr_23880_24094[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (34))){
var state_23774__$1 = state_23774;
var statearr_23884_24097 = state_23774__$1;
(statearr_23884_24097[(2)] = null);

(statearr_23884_24097[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (17))){
var state_23774__$1 = state_23774;
var statearr_23885_24100 = state_23774__$1;
(statearr_23885_24100[(2)] = null);

(statearr_23885_24100[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (3))){
var inst_23772 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23774__$1,inst_23772);
} else {
if((state_val_23775 === (12))){
var inst_23691 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23888_24103 = state_23774__$1;
(statearr_23888_24103[(2)] = inst_23691);

(statearr_23888_24103[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (2))){
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23774__$1,(4),ch);
} else {
if((state_val_23775 === (23))){
var state_23774__$1 = state_23774;
var statearr_23893_24108 = state_23774__$1;
(statearr_23893_24108[(2)] = null);

(statearr_23893_24108[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (35))){
var inst_23754 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23894_24109 = state_23774__$1;
(statearr_23894_24109[(2)] = inst_23754);

(statearr_23894_24109[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (19))){
var inst_23661 = (state_23774[(7)]);
var inst_23665 = cljs.core.chunk_first(inst_23661);
var inst_23666 = cljs.core.chunk_rest(inst_23661);
var inst_23667 = cljs.core.count(inst_23665);
var inst_23635 = inst_23666;
var inst_23636 = inst_23665;
var inst_23637 = inst_23667;
var inst_23638 = (0);
var state_23774__$1 = (function (){var statearr_23897 = state_23774;
(statearr_23897[(13)] = inst_23638);

(statearr_23897[(14)] = inst_23637);

(statearr_23897[(16)] = inst_23636);

(statearr_23897[(17)] = inst_23635);

return statearr_23897;
})();
var statearr_23898_24116 = state_23774__$1;
(statearr_23898_24116[(2)] = null);

(statearr_23898_24116[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (11))){
var inst_23661 = (state_23774[(7)]);
var inst_23635 = (state_23774[(17)]);
var inst_23661__$1 = cljs.core.seq(inst_23635);
var state_23774__$1 = (function (){var statearr_23903 = state_23774;
(statearr_23903[(7)] = inst_23661__$1);

return statearr_23903;
})();
if(inst_23661__$1){
var statearr_23904_24119 = state_23774__$1;
(statearr_23904_24119[(1)] = (16));

} else {
var statearr_23905_24120 = state_23774__$1;
(statearr_23905_24120[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (9))){
var inst_23693 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23906_24123 = state_23774__$1;
(statearr_23906_24123[(2)] = inst_23693);

(statearr_23906_24123[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (5))){
var inst_23631 = cljs.core.deref(cs);
var inst_23633 = cljs.core.seq(inst_23631);
var inst_23635 = inst_23633;
var inst_23636 = null;
var inst_23637 = (0);
var inst_23638 = (0);
var state_23774__$1 = (function (){var statearr_23909 = state_23774;
(statearr_23909[(13)] = inst_23638);

(statearr_23909[(14)] = inst_23637);

(statearr_23909[(16)] = inst_23636);

(statearr_23909[(17)] = inst_23635);

return statearr_23909;
})();
var statearr_23912_24128 = state_23774__$1;
(statearr_23912_24128[(2)] = null);

(statearr_23912_24128[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (14))){
var state_23774__$1 = state_23774;
var statearr_23915_24131 = state_23774__$1;
(statearr_23915_24131[(2)] = null);

(statearr_23915_24131[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (45))){
var inst_23764 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23916_24134 = state_23774__$1;
(statearr_23916_24134[(2)] = inst_23764);

(statearr_23916_24134[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (26))){
var inst_23698 = (state_23774[(29)]);
var inst_23758 = (state_23774[(2)]);
var inst_23759 = cljs.core.seq(inst_23698);
var state_23774__$1 = (function (){var statearr_23919 = state_23774;
(statearr_23919[(31)] = inst_23758);

return statearr_23919;
})();
if(inst_23759){
var statearr_23920_24137 = state_23774__$1;
(statearr_23920_24137[(1)] = (42));

} else {
var statearr_23923_24138 = state_23774__$1;
(statearr_23923_24138[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (16))){
var inst_23661 = (state_23774[(7)]);
var inst_23663 = cljs.core.chunked_seq_QMARK_(inst_23661);
var state_23774__$1 = state_23774;
if(inst_23663){
var statearr_23926_24143 = state_23774__$1;
(statearr_23926_24143[(1)] = (19));

} else {
var statearr_23927_24144 = state_23774__$1;
(statearr_23927_24144[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (38))){
var inst_23751 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23928_24145 = state_23774__$1;
(statearr_23928_24145[(2)] = inst_23751);

(statearr_23928_24145[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (30))){
var state_23774__$1 = state_23774;
var statearr_23931_24148 = state_23774__$1;
(statearr_23931_24148[(2)] = null);

(statearr_23931_24148[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (10))){
var inst_23638 = (state_23774[(13)]);
var inst_23636 = (state_23774[(16)]);
var inst_23646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23636,inst_23638);
var inst_23649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23646,(0),null);
var inst_23650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23646,(1),null);
var state_23774__$1 = (function (){var statearr_23934 = state_23774;
(statearr_23934[(26)] = inst_23649);

return statearr_23934;
})();
if(cljs.core.truth_(inst_23650)){
var statearr_23937_24153 = state_23774__$1;
(statearr_23937_24153[(1)] = (13));

} else {
var statearr_23938_24156 = state_23774__$1;
(statearr_23938_24156[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (18))){
var inst_23689 = (state_23774[(2)]);
var state_23774__$1 = state_23774;
var statearr_23939_24158 = state_23774__$1;
(statearr_23939_24158[(2)] = inst_23689);

(statearr_23939_24158[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (42))){
var state_23774__$1 = state_23774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23774__$1,(45),dchan);
} else {
if((state_val_23775 === (37))){
var inst_23738 = (state_23774[(23)]);
var inst_23727 = (state_23774[(25)]);
var inst_23624 = (state_23774[(11)]);
var inst_23738__$1 = cljs.core.first(inst_23727);
var inst_23739 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23738__$1,inst_23624,done);
var state_23774__$1 = (function (){var statearr_23944 = state_23774;
(statearr_23944[(23)] = inst_23738__$1);

return statearr_23944;
})();
if(cljs.core.truth_(inst_23739)){
var statearr_23945_24164 = state_23774__$1;
(statearr_23945_24164[(1)] = (39));

} else {
var statearr_23948_24165 = state_23774__$1;
(statearr_23948_24165[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23775 === (8))){
var inst_23638 = (state_23774[(13)]);
var inst_23637 = (state_23774[(14)]);
var inst_23640 = (inst_23638 < inst_23637);
var inst_23641 = inst_23640;
var state_23774__$1 = state_23774;
if(cljs.core.truth_(inst_23641)){
var statearr_23949_24170 = state_23774__$1;
(statearr_23949_24170[(1)] = (10));

} else {
var statearr_23950_24171 = state_23774__$1;
(statearr_23950_24171[(1)] = (11));

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
});})(c__21787__auto___23983,cs,m,dchan,dctr,done))
;
return ((function (switch__21538__auto__,c__21787__auto___23983,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21539__auto__ = null;
var cljs$core$async$mult_$_state_machine__21539__auto____0 = (function (){
var statearr_23955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23955[(0)] = cljs$core$async$mult_$_state_machine__21539__auto__);

(statearr_23955[(1)] = (1));

return statearr_23955;
});
var cljs$core$async$mult_$_state_machine__21539__auto____1 = (function (state_23774){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_23774);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e23958){if((e23958 instanceof Object)){
var ex__21542__auto__ = e23958;
var statearr_23959_24178 = state_23774;
(statearr_23959_24178[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23774);

return cljs.core.cst$kw$recur;
} else {
throw e23958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__24181 = state_23774;
state_23774 = G__24181;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21539__auto__ = function(state_23774){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21539__auto____1.call(this,state_23774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21539__auto____0;
cljs$core$async$mult_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21539__auto____1;
return cljs$core$async$mult_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___23983,cs,m,dchan,dctr,done))
})();
var state__21789__auto__ = (function (){var statearr_23962 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_23962[(6)] = c__21787__auto___23983);

return statearr_23962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___23983,cs,m,dchan,dctr,done))
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
var G__24187 = arguments.length;
switch (G__24187) {
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto__.call(null,m,ch));
} else {
var m__11539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto____$1.call(null,m,ch));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto__.call(null,m,ch));
} else {
var m__11539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__11539__auto____$1.call(null,m,ch));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__11539__auto__.call(null,m));
} else {
var m__11539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__11539__auto____$1.call(null,m));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11539__auto__.call(null,m,state_map));
} else {
var m__11539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__11539__auto____$1.call(null,m,state_map));
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
var x__11538__auto__ = (((m == null))?null:m);
var m__11539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11539__auto__.call(null,m,mode));
} else {
var m__11539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__11539__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12091__auto__ = [];
var len__12084__auto___24279 = arguments.length;
var i__12085__auto___24280 = (0);
while(true){
if((i__12085__auto___24280 < len__12084__auto___24279)){
args__12091__auto__.push((arguments[i__12085__auto___24280]));

var G__24281 = (i__12085__auto___24280 + (1));
i__12085__auto___24280 = G__24281;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((3) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12092__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24264){
var map__24266 = p__24264;
var map__24266__$1 = ((((!((map__24266 == null)))?((((map__24266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24266):map__24266);
var opts = map__24266__$1;
var statearr_24268_24288 = state;
(statearr_24268_24288[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__24266,map__24266__$1,opts){
return (function (val){
var statearr_24271_24291 = state;
(statearr_24271_24291[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__24266,map__24266__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24274_24294 = state;
(statearr_24274_24294[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24255){
var G__24256 = cljs.core.first(seq24255);
var seq24255__$1 = cljs.core.next(seq24255);
var G__24257 = cljs.core.first(seq24255__$1);
var seq24255__$2 = cljs.core.next(seq24255__$1);
var G__24258 = cljs.core.first(seq24255__$2);
var seq24255__$3 = cljs.core.next(seq24255__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24256,G__24257,G__24258,seq24255__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24308 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24309){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24309 = meta24309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24310,meta24309__$1){
var self__ = this;
var _24310__$1 = this;
return (new cljs.core.async.t_cljs$core$async24308(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24309__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24310){
var self__ = this;
var _24310__$1 = this;
return self__.meta24309;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24308.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta24309], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24308";

cljs.core.async.t_cljs$core$async24308.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async24308");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24308 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24308(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24309){
return (new cljs.core.async.t_cljs$core$async24308(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24309));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24308(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21787__auto___24544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24437){
var state_val_24438 = (state_24437[(1)]);
if((state_val_24438 === (7))){
var inst_24348 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24439_24550 = state_24437__$1;
(statearr_24439_24550[(2)] = inst_24348);

(statearr_24439_24550[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (20))){
var inst_24360 = (state_24437[(7)]);
var state_24437__$1 = state_24437;
var statearr_24440_24551 = state_24437__$1;
(statearr_24440_24551[(2)] = inst_24360);

(statearr_24440_24551[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (27))){
var state_24437__$1 = state_24437;
var statearr_24441_24558 = state_24437__$1;
(statearr_24441_24558[(2)] = null);

(statearr_24441_24558[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (1))){
var inst_24335 = (state_24437[(8)]);
var inst_24335__$1 = calc_state();
var inst_24337 = (inst_24335__$1 == null);
var inst_24338 = cljs.core.not(inst_24337);
var state_24437__$1 = (function (){var statearr_24442 = state_24437;
(statearr_24442[(8)] = inst_24335__$1);

return statearr_24442;
})();
if(inst_24338){
var statearr_24443_24561 = state_24437__$1;
(statearr_24443_24561[(1)] = (2));

} else {
var statearr_24444_24562 = state_24437__$1;
(statearr_24444_24562[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (24))){
var inst_24411 = (state_24437[(9)]);
var inst_24384 = (state_24437[(10)]);
var inst_24393 = (state_24437[(11)]);
var inst_24411__$1 = (inst_24384.cljs$core$IFn$_invoke$arity$1 ? inst_24384.cljs$core$IFn$_invoke$arity$1(inst_24393) : inst_24384.call(null,inst_24393));
var state_24437__$1 = (function (){var statearr_24445 = state_24437;
(statearr_24445[(9)] = inst_24411__$1);

return statearr_24445;
})();
if(cljs.core.truth_(inst_24411__$1)){
var statearr_24446_24567 = state_24437__$1;
(statearr_24446_24567[(1)] = (29));

} else {
var statearr_24447_24568 = state_24437__$1;
(statearr_24447_24568[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (4))){
var inst_24351 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24351)){
var statearr_24448_24569 = state_24437__$1;
(statearr_24448_24569[(1)] = (8));

} else {
var statearr_24449_24570 = state_24437__$1;
(statearr_24449_24570[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (15))){
var inst_24378 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24378)){
var statearr_24453_24571 = state_24437__$1;
(statearr_24453_24571[(1)] = (19));

} else {
var statearr_24454_24575 = state_24437__$1;
(statearr_24454_24575[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (21))){
var inst_24383 = (state_24437[(12)]);
var inst_24383__$1 = (state_24437[(2)]);
var inst_24384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24383__$1,cljs.core.cst$kw$solos);
var inst_24385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24383__$1,cljs.core.cst$kw$mutes);
var inst_24386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24383__$1,cljs.core.cst$kw$reads);
var state_24437__$1 = (function (){var statearr_24456 = state_24437;
(statearr_24456[(10)] = inst_24384);

(statearr_24456[(13)] = inst_24385);

(statearr_24456[(12)] = inst_24383__$1);

return statearr_24456;
})();
return cljs.core.async.ioc_alts_BANG_(state_24437__$1,(22),inst_24386);
} else {
if((state_val_24438 === (31))){
var inst_24419 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24419)){
var statearr_24457_24577 = state_24437__$1;
(statearr_24457_24577[(1)] = (32));

} else {
var statearr_24460_24578 = state_24437__$1;
(statearr_24460_24578[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (32))){
var inst_24392 = (state_24437[(14)]);
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24437__$1,(35),out,inst_24392);
} else {
if((state_val_24438 === (33))){
var inst_24383 = (state_24437[(12)]);
var inst_24360 = inst_24383;
var state_24437__$1 = (function (){var statearr_24461 = state_24437;
(statearr_24461[(7)] = inst_24360);

return statearr_24461;
})();
var statearr_24462_24579 = state_24437__$1;
(statearr_24462_24579[(2)] = null);

(statearr_24462_24579[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (13))){
var inst_24360 = (state_24437[(7)]);
var inst_24367 = inst_24360.cljs$lang$protocol_mask$partition0$;
var inst_24368 = (inst_24367 & (64));
var inst_24369 = inst_24360.cljs$core$ISeq$;
var inst_24370 = (cljs.core.PROTOCOL_SENTINEL === inst_24369);
var inst_24371 = (inst_24368) || (inst_24370);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24371)){
var statearr_24463_24584 = state_24437__$1;
(statearr_24463_24584[(1)] = (16));

} else {
var statearr_24465_24587 = state_24437__$1;
(statearr_24465_24587[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (22))){
var inst_24392 = (state_24437[(14)]);
var inst_24393 = (state_24437[(11)]);
var inst_24391 = (state_24437[(2)]);
var inst_24392__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24391,(0),null);
var inst_24393__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24391,(1),null);
var inst_24394 = (inst_24392__$1 == null);
var inst_24395 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24393__$1,change);
var inst_24396 = (inst_24394) || (inst_24395);
var state_24437__$1 = (function (){var statearr_24468 = state_24437;
(statearr_24468[(14)] = inst_24392__$1);

(statearr_24468[(11)] = inst_24393__$1);

return statearr_24468;
})();
if(cljs.core.truth_(inst_24396)){
var statearr_24473_24590 = state_24437__$1;
(statearr_24473_24590[(1)] = (23));

} else {
var statearr_24474_24591 = state_24437__$1;
(statearr_24474_24591[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (36))){
var inst_24383 = (state_24437[(12)]);
var inst_24360 = inst_24383;
var state_24437__$1 = (function (){var statearr_24475 = state_24437;
(statearr_24475[(7)] = inst_24360);

return statearr_24475;
})();
var statearr_24476_24592 = state_24437__$1;
(statearr_24476_24592[(2)] = null);

(statearr_24476_24592[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (29))){
var inst_24411 = (state_24437[(9)]);
var state_24437__$1 = state_24437;
var statearr_24477_24593 = state_24437__$1;
(statearr_24477_24593[(2)] = inst_24411);

(statearr_24477_24593[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (6))){
var state_24437__$1 = state_24437;
var statearr_24478_24594 = state_24437__$1;
(statearr_24478_24594[(2)] = false);

(statearr_24478_24594[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (28))){
var inst_24407 = (state_24437[(2)]);
var inst_24408 = calc_state();
var inst_24360 = inst_24408;
var state_24437__$1 = (function (){var statearr_24479 = state_24437;
(statearr_24479[(7)] = inst_24360);

(statearr_24479[(15)] = inst_24407);

return statearr_24479;
})();
var statearr_24480_24596 = state_24437__$1;
(statearr_24480_24596[(2)] = null);

(statearr_24480_24596[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (25))){
var inst_24433 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24481_24597 = state_24437__$1;
(statearr_24481_24597[(2)] = inst_24433);

(statearr_24481_24597[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (34))){
var inst_24431 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24482_24599 = state_24437__$1;
(statearr_24482_24599[(2)] = inst_24431);

(statearr_24482_24599[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (17))){
var state_24437__$1 = state_24437;
var statearr_24483_24600 = state_24437__$1;
(statearr_24483_24600[(2)] = false);

(statearr_24483_24600[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (3))){
var state_24437__$1 = state_24437;
var statearr_24484_24605 = state_24437__$1;
(statearr_24484_24605[(2)] = false);

(statearr_24484_24605[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (12))){
var inst_24435 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24437__$1,inst_24435);
} else {
if((state_val_24438 === (2))){
var inst_24335 = (state_24437[(8)]);
var inst_24340 = inst_24335.cljs$lang$protocol_mask$partition0$;
var inst_24341 = (inst_24340 & (64));
var inst_24342 = inst_24335.cljs$core$ISeq$;
var inst_24343 = (cljs.core.PROTOCOL_SENTINEL === inst_24342);
var inst_24344 = (inst_24341) || (inst_24343);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24344)){
var statearr_24487_24611 = state_24437__$1;
(statearr_24487_24611[(1)] = (5));

} else {
var statearr_24489_24612 = state_24437__$1;
(statearr_24489_24612[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (23))){
var inst_24392 = (state_24437[(14)]);
var inst_24402 = (inst_24392 == null);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24402)){
var statearr_24491_24616 = state_24437__$1;
(statearr_24491_24616[(1)] = (26));

} else {
var statearr_24492_24617 = state_24437__$1;
(statearr_24492_24617[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (35))){
var inst_24422 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
if(cljs.core.truth_(inst_24422)){
var statearr_24493_24618 = state_24437__$1;
(statearr_24493_24618[(1)] = (36));

} else {
var statearr_24494_24619 = state_24437__$1;
(statearr_24494_24619[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (19))){
var inst_24360 = (state_24437[(7)]);
var inst_24380 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24360);
var state_24437__$1 = state_24437;
var statearr_24495_24623 = state_24437__$1;
(statearr_24495_24623[(2)] = inst_24380);

(statearr_24495_24623[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (11))){
var inst_24360 = (state_24437[(7)]);
var inst_24364 = (inst_24360 == null);
var inst_24365 = cljs.core.not(inst_24364);
var state_24437__$1 = state_24437;
if(inst_24365){
var statearr_24496_24628 = state_24437__$1;
(statearr_24496_24628[(1)] = (13));

} else {
var statearr_24497_24629 = state_24437__$1;
(statearr_24497_24629[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (9))){
var inst_24335 = (state_24437[(8)]);
var state_24437__$1 = state_24437;
var statearr_24498_24632 = state_24437__$1;
(statearr_24498_24632[(2)] = inst_24335);

(statearr_24498_24632[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (5))){
var state_24437__$1 = state_24437;
var statearr_24499_24635 = state_24437__$1;
(statearr_24499_24635[(2)] = true);

(statearr_24499_24635[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (14))){
var state_24437__$1 = state_24437;
var statearr_24500_24638 = state_24437__$1;
(statearr_24500_24638[(2)] = false);

(statearr_24500_24638[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (26))){
var inst_24393 = (state_24437[(11)]);
var inst_24404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24393);
var state_24437__$1 = state_24437;
var statearr_24501_24640 = state_24437__$1;
(statearr_24501_24640[(2)] = inst_24404);

(statearr_24501_24640[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (16))){
var state_24437__$1 = state_24437;
var statearr_24502_24641 = state_24437__$1;
(statearr_24502_24641[(2)] = true);

(statearr_24502_24641[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (38))){
var inst_24427 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24503_24642 = state_24437__$1;
(statearr_24503_24642[(2)] = inst_24427);

(statearr_24503_24642[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (30))){
var inst_24384 = (state_24437[(10)]);
var inst_24385 = (state_24437[(13)]);
var inst_24393 = (state_24437[(11)]);
var inst_24414 = cljs.core.empty_QMARK_(inst_24384);
var inst_24415 = (inst_24385.cljs$core$IFn$_invoke$arity$1 ? inst_24385.cljs$core$IFn$_invoke$arity$1(inst_24393) : inst_24385.call(null,inst_24393));
var inst_24416 = cljs.core.not(inst_24415);
var inst_24417 = (inst_24414) && (inst_24416);
var state_24437__$1 = state_24437;
var statearr_24504_24646 = state_24437__$1;
(statearr_24504_24646[(2)] = inst_24417);

(statearr_24504_24646[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (10))){
var inst_24335 = (state_24437[(8)]);
var inst_24356 = (state_24437[(2)]);
var inst_24357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24356,cljs.core.cst$kw$solos);
var inst_24358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24356,cljs.core.cst$kw$mutes);
var inst_24359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24356,cljs.core.cst$kw$reads);
var inst_24360 = inst_24335;
var state_24437__$1 = (function (){var statearr_24505 = state_24437;
(statearr_24505[(7)] = inst_24360);

(statearr_24505[(16)] = inst_24357);

(statearr_24505[(17)] = inst_24358);

(statearr_24505[(18)] = inst_24359);

return statearr_24505;
})();
var statearr_24506_24647 = state_24437__$1;
(statearr_24506_24647[(2)] = null);

(statearr_24506_24647[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (18))){
var inst_24375 = (state_24437[(2)]);
var state_24437__$1 = state_24437;
var statearr_24507_24648 = state_24437__$1;
(statearr_24507_24648[(2)] = inst_24375);

(statearr_24507_24648[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (37))){
var state_24437__$1 = state_24437;
var statearr_24508_24649 = state_24437__$1;
(statearr_24508_24649[(2)] = null);

(statearr_24508_24649[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24438 === (8))){
var inst_24335 = (state_24437[(8)]);
var inst_24353 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24335);
var state_24437__$1 = state_24437;
var statearr_24509_24650 = state_24437__$1;
(statearr_24509_24650[(2)] = inst_24353);

(statearr_24509_24650[(1)] = (10));


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
});})(c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21538__auto__,c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21539__auto__ = null;
var cljs$core$async$mix_$_state_machine__21539__auto____0 = (function (){
var statearr_24511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24511[(0)] = cljs$core$async$mix_$_state_machine__21539__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var cljs$core$async$mix_$_state_machine__21539__auto____1 = (function (state_24437){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_24437);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e24512){if((e24512 instanceof Object)){
var ex__21542__auto__ = e24512;
var statearr_24513_24652 = state_24437;
(statearr_24513_24652[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24437);

return cljs.core.cst$kw$recur;
} else {
throw e24512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__24653 = state_24437;
state_24437 = G__24653;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21539__auto__ = function(state_24437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21539__auto____1.call(this,state_24437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21539__auto____0;
cljs$core$async$mix_$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21539__auto____1;
return cljs$core$async$mix_$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21789__auto__ = (function (){var statearr_24516 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_24516[(6)] = c__21787__auto___24544);

return statearr_24516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___24544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__11538__auto__ = (((p == null))?null:p);
var m__11539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$4 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11539__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__11539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__11539__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__11538__auto__ = (((p == null))?null:p);
var m__11539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11539__auto__.call(null,p,v,ch));
} else {
var m__11539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__11539__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24669 = arguments.length;
switch (G__24669) {
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
var x__11538__auto__ = (((p == null))?null:p);
var m__11539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__11539__auto__.call(null,p));
} else {
var m__11539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__11539__auto____$1.call(null,p));
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
var x__11538__auto__ = (((p == null))?null:p);
var m__11539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__11539__auto__.call(null,p,v));
} else {
var m__11539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__11539__auto____$1.call(null,p,v));
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
var G__24689 = arguments.length;
switch (G__24689) {
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
var or__10805__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__10805__auto__,mults){
return (function (p1__24686_SHARP_){
if(cljs.core.truth_((p1__24686_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24686_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24686_SHARP_.call(null,topic)))){
return p1__24686_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24686_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24694 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24695){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24695 = meta24695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24696,meta24695__$1){
var self__ = this;
var _24696__$1 = this;
return (new cljs.core.async.t_cljs$core$async24694(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24695__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24696){
var self__ = this;
var _24696__$1 = this;
return self__.meta24695;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta24695], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24694";

cljs.core.async.t_cljs$core$async24694.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async24694");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24694 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24695){
return (new cljs.core.async.t_cljs$core$async24694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24695));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24694(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21787__auto___24887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___24887,mults,ensure_mult,p){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___24887,mults,ensure_mult,p){
return (function (state_24785){
var state_val_24786 = (state_24785[(1)]);
if((state_val_24786 === (7))){
var inst_24781 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24788_24889 = state_24785__$1;
(statearr_24788_24889[(2)] = inst_24781);

(statearr_24788_24889[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (20))){
var state_24785__$1 = state_24785;
var statearr_24790_24890 = state_24785__$1;
(statearr_24790_24890[(2)] = null);

(statearr_24790_24890[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (1))){
var state_24785__$1 = state_24785;
var statearr_24791_24893 = state_24785__$1;
(statearr_24791_24893[(2)] = null);

(statearr_24791_24893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (24))){
var inst_24762 = (state_24785[(7)]);
var inst_24773 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24762);
var state_24785__$1 = state_24785;
var statearr_24792_24894 = state_24785__$1;
(statearr_24792_24894[(2)] = inst_24773);

(statearr_24792_24894[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (4))){
var inst_24712 = (state_24785[(8)]);
var inst_24712__$1 = (state_24785[(2)]);
var inst_24713 = (inst_24712__$1 == null);
var state_24785__$1 = (function (){var statearr_24795 = state_24785;
(statearr_24795[(8)] = inst_24712__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24713)){
var statearr_24796_24896 = state_24785__$1;
(statearr_24796_24896[(1)] = (5));

} else {
var statearr_24797_24899 = state_24785__$1;
(statearr_24797_24899[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (15))){
var inst_24756 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24798_24900 = state_24785__$1;
(statearr_24798_24900[(2)] = inst_24756);

(statearr_24798_24900[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (21))){
var inst_24778 = (state_24785[(2)]);
var state_24785__$1 = (function (){var statearr_24799 = state_24785;
(statearr_24799[(9)] = inst_24778);

return statearr_24799;
})();
var statearr_24800_24903 = state_24785__$1;
(statearr_24800_24903[(2)] = null);

(statearr_24800_24903[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (13))){
var inst_24738 = (state_24785[(10)]);
var inst_24740 = cljs.core.chunked_seq_QMARK_(inst_24738);
var state_24785__$1 = state_24785;
if(inst_24740){
var statearr_24802_24904 = state_24785__$1;
(statearr_24802_24904[(1)] = (16));

} else {
var statearr_24803_24905 = state_24785__$1;
(statearr_24803_24905[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (22))){
var inst_24770 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
if(cljs.core.truth_(inst_24770)){
var statearr_24804_24906 = state_24785__$1;
(statearr_24804_24906[(1)] = (23));

} else {
var statearr_24805_24908 = state_24785__$1;
(statearr_24805_24908[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (6))){
var inst_24762 = (state_24785[(7)]);
var inst_24712 = (state_24785[(8)]);
var inst_24765 = (state_24785[(11)]);
var inst_24762__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24712) : topic_fn.call(null,inst_24712));
var inst_24763 = cljs.core.deref(mults);
var inst_24765__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24763,inst_24762__$1);
var state_24785__$1 = (function (){var statearr_24812 = state_24785;
(statearr_24812[(7)] = inst_24762__$1);

(statearr_24812[(11)] = inst_24765__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24765__$1)){
var statearr_24813_24913 = state_24785__$1;
(statearr_24813_24913[(1)] = (19));

} else {
var statearr_24814_24914 = state_24785__$1;
(statearr_24814_24914[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (25))){
var inst_24775 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24816_24915 = state_24785__$1;
(statearr_24816_24915[(2)] = inst_24775);

(statearr_24816_24915[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (17))){
var inst_24738 = (state_24785[(10)]);
var inst_24747 = cljs.core.first(inst_24738);
var inst_24748 = cljs.core.async.muxch_STAR_(inst_24747);
var inst_24749 = cljs.core.async.close_BANG_(inst_24748);
var inst_24750 = cljs.core.next(inst_24738);
var inst_24723 = inst_24750;
var inst_24724 = null;
var inst_24725 = (0);
var inst_24726 = (0);
var state_24785__$1 = (function (){var statearr_24817 = state_24785;
(statearr_24817[(12)] = inst_24724);

(statearr_24817[(13)] = inst_24749);

(statearr_24817[(14)] = inst_24726);

(statearr_24817[(15)] = inst_24723);

(statearr_24817[(16)] = inst_24725);

return statearr_24817;
})();
var statearr_24821_24922 = state_24785__$1;
(statearr_24821_24922[(2)] = null);

(statearr_24821_24922[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (3))){
var inst_24783 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24785__$1,inst_24783);
} else {
if((state_val_24786 === (12))){
var inst_24758 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24822_24925 = state_24785__$1;
(statearr_24822_24925[(2)] = inst_24758);

(statearr_24822_24925[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (2))){
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24785__$1,(4),ch);
} else {
if((state_val_24786 === (23))){
var state_24785__$1 = state_24785;
var statearr_24827_24926 = state_24785__$1;
(statearr_24827_24926[(2)] = null);

(statearr_24827_24926[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (19))){
var inst_24712 = (state_24785[(8)]);
var inst_24765 = (state_24785[(11)]);
var inst_24768 = cljs.core.async.muxch_STAR_(inst_24765);
var state_24785__$1 = state_24785;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24785__$1,(22),inst_24768,inst_24712);
} else {
if((state_val_24786 === (11))){
var inst_24738 = (state_24785[(10)]);
var inst_24723 = (state_24785[(15)]);
var inst_24738__$1 = cljs.core.seq(inst_24723);
var state_24785__$1 = (function (){var statearr_24833 = state_24785;
(statearr_24833[(10)] = inst_24738__$1);

return statearr_24833;
})();
if(inst_24738__$1){
var statearr_24834_24928 = state_24785__$1;
(statearr_24834_24928[(1)] = (13));

} else {
var statearr_24835_24930 = state_24785__$1;
(statearr_24835_24930[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (9))){
var inst_24760 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24838_24932 = state_24785__$1;
(statearr_24838_24932[(2)] = inst_24760);

(statearr_24838_24932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (5))){
var inst_24719 = cljs.core.deref(mults);
var inst_24720 = cljs.core.vals(inst_24719);
var inst_24721 = cljs.core.seq(inst_24720);
var inst_24723 = inst_24721;
var inst_24724 = null;
var inst_24725 = (0);
var inst_24726 = (0);
var state_24785__$1 = (function (){var statearr_24839 = state_24785;
(statearr_24839[(12)] = inst_24724);

(statearr_24839[(14)] = inst_24726);

(statearr_24839[(15)] = inst_24723);

(statearr_24839[(16)] = inst_24725);

return statearr_24839;
})();
var statearr_24840_24934 = state_24785__$1;
(statearr_24840_24934[(2)] = null);

(statearr_24840_24934[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (14))){
var state_24785__$1 = state_24785;
var statearr_24844_24935 = state_24785__$1;
(statearr_24844_24935[(2)] = null);

(statearr_24844_24935[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (16))){
var inst_24738 = (state_24785[(10)]);
var inst_24742 = cljs.core.chunk_first(inst_24738);
var inst_24743 = cljs.core.chunk_rest(inst_24738);
var inst_24744 = cljs.core.count(inst_24742);
var inst_24723 = inst_24743;
var inst_24724 = inst_24742;
var inst_24725 = inst_24744;
var inst_24726 = (0);
var state_24785__$1 = (function (){var statearr_24846 = state_24785;
(statearr_24846[(12)] = inst_24724);

(statearr_24846[(14)] = inst_24726);

(statearr_24846[(15)] = inst_24723);

(statearr_24846[(16)] = inst_24725);

return statearr_24846;
})();
var statearr_24847_24941 = state_24785__$1;
(statearr_24847_24941[(2)] = null);

(statearr_24847_24941[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (10))){
var inst_24724 = (state_24785[(12)]);
var inst_24726 = (state_24785[(14)]);
var inst_24723 = (state_24785[(15)]);
var inst_24725 = (state_24785[(16)]);
var inst_24731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24724,inst_24726);
var inst_24733 = cljs.core.async.muxch_STAR_(inst_24731);
var inst_24734 = cljs.core.async.close_BANG_(inst_24733);
var inst_24735 = (inst_24726 + (1));
var tmp24841 = inst_24724;
var tmp24842 = inst_24723;
var tmp24843 = inst_24725;
var inst_24723__$1 = tmp24842;
var inst_24724__$1 = tmp24841;
var inst_24725__$1 = tmp24843;
var inst_24726__$1 = inst_24735;
var state_24785__$1 = (function (){var statearr_24851 = state_24785;
(statearr_24851[(12)] = inst_24724__$1);

(statearr_24851[(14)] = inst_24726__$1);

(statearr_24851[(17)] = inst_24734);

(statearr_24851[(15)] = inst_24723__$1);

(statearr_24851[(16)] = inst_24725__$1);

return statearr_24851;
})();
var statearr_24852_24946 = state_24785__$1;
(statearr_24852_24946[(2)] = null);

(statearr_24852_24946[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (18))){
var inst_24753 = (state_24785[(2)]);
var state_24785__$1 = state_24785;
var statearr_24853_24948 = state_24785__$1;
(statearr_24853_24948[(2)] = inst_24753);

(statearr_24853_24948[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24786 === (8))){
var inst_24726 = (state_24785[(14)]);
var inst_24725 = (state_24785[(16)]);
var inst_24728 = (inst_24726 < inst_24725);
var inst_24729 = inst_24728;
var state_24785__$1 = state_24785;
if(cljs.core.truth_(inst_24729)){
var statearr_24854_24949 = state_24785__$1;
(statearr_24854_24949[(1)] = (10));

} else {
var statearr_24855_24950 = state_24785__$1;
(statearr_24855_24950[(1)] = (11));

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
});})(c__21787__auto___24887,mults,ensure_mult,p))
;
return ((function (switch__21538__auto__,c__21787__auto___24887,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_24857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24857[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_24857[(1)] = (1));

return statearr_24857;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_24785){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_24785);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object)){
var ex__21542__auto__ = e24861;
var statearr_24863_24958 = state_24785;
(statearr_24863_24958[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24785);

return cljs.core.cst$kw$recur;
} else {
throw e24861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__24960 = state_24785;
state_24785 = G__24960;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_24785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_24785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___24887,mults,ensure_mult,p))
})();
var state__21789__auto__ = (function (){var statearr_24865 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_24865[(6)] = c__21787__auto___24887);

return statearr_24865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___24887,mults,ensure_mult,p))
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
var G__24964 = arguments.length;
switch (G__24964) {
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
var G__24972 = arguments.length;
switch (G__24972) {
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
var G__24983 = arguments.length;
switch (G__24983) {
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
var c__21787__auto___25086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25031){
var state_val_25032 = (state_25031[(1)]);
if((state_val_25032 === (7))){
var state_25031__$1 = state_25031;
var statearr_25033_25088 = state_25031__$1;
(statearr_25033_25088[(2)] = null);

(statearr_25033_25088[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (1))){
var state_25031__$1 = state_25031;
var statearr_25034_25090 = state_25031__$1;
(statearr_25034_25090[(2)] = null);

(statearr_25034_25090[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (4))){
var inst_24989 = (state_25031[(7)]);
var inst_24991 = (inst_24989 < cnt);
var state_25031__$1 = state_25031;
if(cljs.core.truth_(inst_24991)){
var statearr_25036_25095 = state_25031__$1;
(statearr_25036_25095[(1)] = (6));

} else {
var statearr_25037_25096 = state_25031__$1;
(statearr_25037_25096[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (15))){
var inst_25026 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
var statearr_25038_25097 = state_25031__$1;
(statearr_25038_25097[(2)] = inst_25026);

(statearr_25038_25097[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (13))){
var inst_25018 = cljs.core.async.close_BANG_(out);
var state_25031__$1 = state_25031;
var statearr_25040_25099 = state_25031__$1;
(statearr_25040_25099[(2)] = inst_25018);

(statearr_25040_25099[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (6))){
var state_25031__$1 = state_25031;
var statearr_25042_25100 = state_25031__$1;
(statearr_25042_25100[(2)] = null);

(statearr_25042_25100[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (3))){
var inst_25028 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25031__$1,inst_25028);
} else {
if((state_val_25032 === (12))){
var inst_25015 = (state_25031[(8)]);
var inst_25015__$1 = (state_25031[(2)]);
var inst_25016 = cljs.core.some(cljs.core.nil_QMARK_,inst_25015__$1);
var state_25031__$1 = (function (){var statearr_25049 = state_25031;
(statearr_25049[(8)] = inst_25015__$1);

return statearr_25049;
})();
if(cljs.core.truth_(inst_25016)){
var statearr_25050_25103 = state_25031__$1;
(statearr_25050_25103[(1)] = (13));

} else {
var statearr_25051_25104 = state_25031__$1;
(statearr_25051_25104[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (2))){
var inst_24988 = cljs.core.reset_BANG_(dctr,cnt);
var inst_24989 = (0);
var state_25031__$1 = (function (){var statearr_25052 = state_25031;
(statearr_25052[(9)] = inst_24988);

(statearr_25052[(7)] = inst_24989);

return statearr_25052;
})();
var statearr_25056_25106 = state_25031__$1;
(statearr_25056_25106[(2)] = null);

(statearr_25056_25106[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (11))){
var inst_24989 = (state_25031[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25031,(10),Object,null,(9));
var inst_25002 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24989) : chs__$1.call(null,inst_24989));
var inst_25003 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24989) : done.call(null,inst_24989));
var inst_25004 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25002,inst_25003);
var state_25031__$1 = state_25031;
var statearr_25058_25109 = state_25031__$1;
(statearr_25058_25109[(2)] = inst_25004);


cljs.core.async.impl.ioc_helpers.process_exception(state_25031__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (9))){
var inst_24989 = (state_25031[(7)]);
var inst_25006 = (state_25031[(2)]);
var inst_25007 = (inst_24989 + (1));
var inst_24989__$1 = inst_25007;
var state_25031__$1 = (function (){var statearr_25059 = state_25031;
(statearr_25059[(10)] = inst_25006);

(statearr_25059[(7)] = inst_24989__$1);

return statearr_25059;
})();
var statearr_25060_25111 = state_25031__$1;
(statearr_25060_25111[(2)] = null);

(statearr_25060_25111[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (5))){
var inst_25013 = (state_25031[(2)]);
var state_25031__$1 = (function (){var statearr_25061 = state_25031;
(statearr_25061[(11)] = inst_25013);

return statearr_25061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25031__$1,(12),dchan);
} else {
if((state_val_25032 === (14))){
var inst_25015 = (state_25031[(8)]);
var inst_25021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25015);
var state_25031__$1 = state_25031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25031__$1,(16),out,inst_25021);
} else {
if((state_val_25032 === (16))){
var inst_25023 = (state_25031[(2)]);
var state_25031__$1 = (function (){var statearr_25064 = state_25031;
(statearr_25064[(12)] = inst_25023);

return statearr_25064;
})();
var statearr_25065_25117 = state_25031__$1;
(statearr_25065_25117[(2)] = null);

(statearr_25065_25117[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (10))){
var inst_24997 = (state_25031[(2)]);
var inst_24998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_25031__$1 = (function (){var statearr_25066 = state_25031;
(statearr_25066[(13)] = inst_24997);

return statearr_25066;
})();
var statearr_25067_25119 = state_25031__$1;
(statearr_25067_25119[(2)] = inst_24998);


cljs.core.async.impl.ioc_helpers.process_exception(state_25031__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_25032 === (8))){
var inst_25011 = (state_25031[(2)]);
var state_25031__$1 = state_25031;
var statearr_25069_25123 = state_25031__$1;
(statearr_25069_25123[(2)] = inst_25011);

(statearr_25069_25123[(1)] = (5));


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
});})(c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21538__auto__,c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25070[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25070[(1)] = (1));

return statearr_25070;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25031){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25031);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25074){if((e25074 instanceof Object)){
var ex__21542__auto__ = e25074;
var statearr_25076_25127 = state_25031;
(statearr_25076_25127[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25031);

return cljs.core.cst$kw$recur;
} else {
throw e25074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25128 = state_25031;
state_25031 = G__25128;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21789__auto__ = (function (){var statearr_25078 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25078[(6)] = c__21787__auto___25086);

return statearr_25078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25086,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25135 = arguments.length;
switch (G__25135) {
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
var c__21787__auto___25215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25215,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25215,out){
return (function (state_25175){
var state_val_25176 = (state_25175[(1)]);
if((state_val_25176 === (7))){
var inst_25150 = (state_25175[(7)]);
var inst_25151 = (state_25175[(8)]);
var inst_25150__$1 = (state_25175[(2)]);
var inst_25151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25150__$1,(0),null);
var inst_25152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25150__$1,(1),null);
var inst_25153 = (inst_25151__$1 == null);
var state_25175__$1 = (function (){var statearr_25182 = state_25175;
(statearr_25182[(9)] = inst_25152);

(statearr_25182[(7)] = inst_25150__$1);

(statearr_25182[(8)] = inst_25151__$1);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25153)){
var statearr_25183_25222 = state_25175__$1;
(statearr_25183_25222[(1)] = (8));

} else {
var statearr_25184_25224 = state_25175__$1;
(statearr_25184_25224[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (1))){
var inst_25140 = cljs.core.vec(chs);
var inst_25141 = inst_25140;
var state_25175__$1 = (function (){var statearr_25186 = state_25175;
(statearr_25186[(10)] = inst_25141);

return statearr_25186;
})();
var statearr_25187_25226 = state_25175__$1;
(statearr_25187_25226[(2)] = null);

(statearr_25187_25226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (4))){
var inst_25141 = (state_25175[(10)]);
var state_25175__$1 = state_25175;
return cljs.core.async.ioc_alts_BANG_(state_25175__$1,(7),inst_25141);
} else {
if((state_val_25176 === (6))){
var inst_25171 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25188_25230 = state_25175__$1;
(statearr_25188_25230[(2)] = inst_25171);

(statearr_25188_25230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (3))){
var inst_25173 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25175__$1,inst_25173);
} else {
if((state_val_25176 === (2))){
var inst_25141 = (state_25175[(10)]);
var inst_25143 = cljs.core.count(inst_25141);
var inst_25144 = (inst_25143 > (0));
var state_25175__$1 = state_25175;
if(cljs.core.truth_(inst_25144)){
var statearr_25192_25236 = state_25175__$1;
(statearr_25192_25236[(1)] = (4));

} else {
var statearr_25193_25237 = state_25175__$1;
(statearr_25193_25237[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (11))){
var inst_25141 = (state_25175[(10)]);
var inst_25164 = (state_25175[(2)]);
var tmp25190 = inst_25141;
var inst_25141__$1 = tmp25190;
var state_25175__$1 = (function (){var statearr_25194 = state_25175;
(statearr_25194[(11)] = inst_25164);

(statearr_25194[(10)] = inst_25141__$1);

return statearr_25194;
})();
var statearr_25195_25240 = state_25175__$1;
(statearr_25195_25240[(2)] = null);

(statearr_25195_25240[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (9))){
var inst_25151 = (state_25175[(8)]);
var state_25175__$1 = state_25175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25175__$1,(11),out,inst_25151);
} else {
if((state_val_25176 === (5))){
var inst_25169 = cljs.core.async.close_BANG_(out);
var state_25175__$1 = state_25175;
var statearr_25199_25245 = state_25175__$1;
(statearr_25199_25245[(2)] = inst_25169);

(statearr_25199_25245[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (10))){
var inst_25167 = (state_25175[(2)]);
var state_25175__$1 = state_25175;
var statearr_25200_25248 = state_25175__$1;
(statearr_25200_25248[(2)] = inst_25167);

(statearr_25200_25248[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25176 === (8))){
var inst_25152 = (state_25175[(9)]);
var inst_25141 = (state_25175[(10)]);
var inst_25150 = (state_25175[(7)]);
var inst_25151 = (state_25175[(8)]);
var inst_25159 = (function (){var cs = inst_25141;
var vec__25146 = inst_25150;
var v = inst_25151;
var c = inst_25152;
return ((function (cs,vec__25146,v,c,inst_25152,inst_25141,inst_25150,inst_25151,state_val_25176,c__21787__auto___25215,out){
return (function (p1__25133_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25133_SHARP_);
});
;})(cs,vec__25146,v,c,inst_25152,inst_25141,inst_25150,inst_25151,state_val_25176,c__21787__auto___25215,out))
})();
var inst_25160 = cljs.core.filterv(inst_25159,inst_25141);
var inst_25141__$1 = inst_25160;
var state_25175__$1 = (function (){var statearr_25201 = state_25175;
(statearr_25201[(10)] = inst_25141__$1);

return statearr_25201;
})();
var statearr_25203_25253 = state_25175__$1;
(statearr_25203_25253[(2)] = null);

(statearr_25203_25253[(1)] = (2));


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
});})(c__21787__auto___25215,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25215,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25204[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25204[(1)] = (1));

return statearr_25204;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25175){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25175);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25205){if((e25205 instanceof Object)){
var ex__21542__auto__ = e25205;
var statearr_25207_25256 = state_25175;
(statearr_25207_25256[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25175);

return cljs.core.cst$kw$recur;
} else {
throw e25205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25257 = state_25175;
state_25175 = G__25257;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25215,out))
})();
var state__21789__auto__ = (function (){var statearr_25210 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25210[(6)] = c__21787__auto___25215);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25215,out))
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
var G__25264 = arguments.length;
switch (G__25264) {
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
var c__21787__auto___25329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25329,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25329,out){
return (function (state_25291){
var state_val_25292 = (state_25291[(1)]);
if((state_val_25292 === (7))){
var inst_25271 = (state_25291[(7)]);
var inst_25271__$1 = (state_25291[(2)]);
var inst_25272 = (inst_25271__$1 == null);
var inst_25273 = cljs.core.not(inst_25272);
var state_25291__$1 = (function (){var statearr_25293 = state_25291;
(statearr_25293[(7)] = inst_25271__$1);

return statearr_25293;
})();
if(inst_25273){
var statearr_25294_25331 = state_25291__$1;
(statearr_25294_25331[(1)] = (8));

} else {
var statearr_25295_25332 = state_25291__$1;
(statearr_25295_25332[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (1))){
var inst_25266 = (0);
var state_25291__$1 = (function (){var statearr_25297 = state_25291;
(statearr_25297[(8)] = inst_25266);

return statearr_25297;
})();
var statearr_25298_25333 = state_25291__$1;
(statearr_25298_25333[(2)] = null);

(statearr_25298_25333[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (4))){
var state_25291__$1 = state_25291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25291__$1,(7),ch);
} else {
if((state_val_25292 === (6))){
var inst_25285 = (state_25291[(2)]);
var state_25291__$1 = state_25291;
var statearr_25299_25336 = state_25291__$1;
(statearr_25299_25336[(2)] = inst_25285);

(statearr_25299_25336[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (3))){
var inst_25287 = (state_25291[(2)]);
var inst_25288 = cljs.core.async.close_BANG_(out);
var state_25291__$1 = (function (){var statearr_25304 = state_25291;
(statearr_25304[(9)] = inst_25287);

return statearr_25304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25291__$1,inst_25288);
} else {
if((state_val_25292 === (2))){
var inst_25266 = (state_25291[(8)]);
var inst_25268 = (inst_25266 < n);
var state_25291__$1 = state_25291;
if(cljs.core.truth_(inst_25268)){
var statearr_25305_25337 = state_25291__$1;
(statearr_25305_25337[(1)] = (4));

} else {
var statearr_25306_25339 = state_25291__$1;
(statearr_25306_25339[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (11))){
var inst_25266 = (state_25291[(8)]);
var inst_25276 = (state_25291[(2)]);
var inst_25278 = (inst_25266 + (1));
var inst_25266__$1 = inst_25278;
var state_25291__$1 = (function (){var statearr_25307 = state_25291;
(statearr_25307[(10)] = inst_25276);

(statearr_25307[(8)] = inst_25266__$1);

return statearr_25307;
})();
var statearr_25309_25340 = state_25291__$1;
(statearr_25309_25340[(2)] = null);

(statearr_25309_25340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (9))){
var state_25291__$1 = state_25291;
var statearr_25311_25343 = state_25291__$1;
(statearr_25311_25343[(2)] = null);

(statearr_25311_25343[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (5))){
var state_25291__$1 = state_25291;
var statearr_25312_25344 = state_25291__$1;
(statearr_25312_25344[(2)] = null);

(statearr_25312_25344[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (10))){
var inst_25282 = (state_25291[(2)]);
var state_25291__$1 = state_25291;
var statearr_25315_25345 = state_25291__$1;
(statearr_25315_25345[(2)] = inst_25282);

(statearr_25315_25345[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25292 === (8))){
var inst_25271 = (state_25291[(7)]);
var state_25291__$1 = state_25291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25291__$1,(11),out,inst_25271);
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
});})(c__21787__auto___25329,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25329,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25318[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25318[(1)] = (1));

return statearr_25318;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25291){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25291);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25319){if((e25319 instanceof Object)){
var ex__21542__auto__ = e25319;
var statearr_25320_25349 = state_25291;
(statearr_25320_25349[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25291);

return cljs.core.cst$kw$recur;
} else {
throw e25319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25350 = state_25291;
state_25291 = G__25350;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25329,out))
})();
var state__21789__auto__ = (function (){var statearr_25324 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25324[(6)] = c__21787__auto___25329);

return statearr_25324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25329,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25357 = (function (f,ch,meta25358){
this.f = f;
this.ch = ch;
this.meta25358 = meta25358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25359,meta25358__$1){
var self__ = this;
var _25359__$1 = this;
return (new cljs.core.async.t_cljs$core$async25357(self__.f,self__.ch,meta25358__$1));
});

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25359){
var self__ = this;
var _25359__$1 = this;
return self__.meta25358;
});

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25361 = (function (f,ch,meta25358,_,fn1,meta25362){
this.f = f;
this.ch = ch;
this.meta25358 = meta25358;
this._ = _;
this.fn1 = fn1;
this.meta25362 = meta25362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25363,meta25362__$1){
var self__ = this;
var _25363__$1 = this;
return (new cljs.core.async.t_cljs$core$async25361(self__.f,self__.ch,self__.meta25358,self__._,self__.fn1,meta25362__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25363){
var self__ = this;
var _25363__$1 = this;
return self__.meta25362;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25354_SHARP_){
var G__25370 = (((p1__25354_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__25354_SHARP_) : self__.f.call(null,p1__25354_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__25370) : f1.call(null,G__25370));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25358,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async25357], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta25362], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25361";

cljs.core.async.t_cljs$core$async25361.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async25361");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25361 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25361(f__$1,ch__$1,meta25358__$1,___$2,fn1__$1,meta25362){
return (new cljs.core.async.t_cljs$core$async25361(f__$1,ch__$1,meta25358__$1,___$2,fn1__$1,meta25362));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25361(self__.f,self__.ch,self__.meta25358,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10793__auto__ = ret;
if(cljs.core.truth_(and__10793__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__25373 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__25373) : self__.f.call(null,G__25373));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25357.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25358], null);
});

cljs.core.async.t_cljs$core$async25357.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25357";

cljs.core.async.t_cljs$core$async25357.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async25357");
});

cljs.core.async.__GT_t_cljs$core$async25357 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25357(f__$1,ch__$1,meta25358){
return (new cljs.core.async.t_cljs$core$async25357(f__$1,ch__$1,meta25358));
});

}

return (new cljs.core.async.t_cljs$core$async25357(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25393 = (function (f,ch,meta25394){
this.f = f;
this.ch = ch;
this.meta25394 = meta25394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25395,meta25394__$1){
var self__ = this;
var _25395__$1 = this;
return (new cljs.core.async.t_cljs$core$async25393(self__.f,self__.ch,meta25394__$1));
});

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25395){
var self__ = this;
var _25395__$1 = this;
return self__.meta25394;
});

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async25393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25394], null);
});

cljs.core.async.t_cljs$core$async25393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25393";

cljs.core.async.t_cljs$core$async25393.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async25393");
});

cljs.core.async.__GT_t_cljs$core$async25393 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25393(f__$1,ch__$1,meta25394){
return (new cljs.core.async.t_cljs$core$async25393(f__$1,ch__$1,meta25394));
});

}

return (new cljs.core.async.t_cljs$core$async25393(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25408 = (function (p,ch,meta25409){
this.p = p;
this.ch = ch;
this.meta25409 = meta25409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25410,meta25409__$1){
var self__ = this;
var _25410__$1 = this;
return (new cljs.core.async.t_cljs$core$async25408(self__.p,self__.ch,meta25409__$1));
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25410){
var self__ = this;
var _25410__$1 = this;
return self__.meta25409;
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta25409], null);
});

cljs.core.async.t_cljs$core$async25408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25408";

cljs.core.async.t_cljs$core$async25408.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async25408");
});

cljs.core.async.__GT_t_cljs$core$async25408 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25408(p__$1,ch__$1,meta25409){
return (new cljs.core.async.t_cljs$core$async25408(p__$1,ch__$1,meta25409));
});

}

return (new cljs.core.async.t_cljs$core$async25408(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25424 = arguments.length;
switch (G__25424) {
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
var c__21787__auto___25476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25476,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25476,out){
return (function (state_25448){
var state_val_25449 = (state_25448[(1)]);
if((state_val_25449 === (7))){
var inst_25444 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25451_25478 = state_25448__$1;
(statearr_25451_25478[(2)] = inst_25444);

(statearr_25451_25478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (1))){
var state_25448__$1 = state_25448;
var statearr_25452_25479 = state_25448__$1;
(statearr_25452_25479[(2)] = null);

(statearr_25452_25479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (4))){
var inst_25430 = (state_25448[(7)]);
var inst_25430__$1 = (state_25448[(2)]);
var inst_25431 = (inst_25430__$1 == null);
var state_25448__$1 = (function (){var statearr_25453 = state_25448;
(statearr_25453[(7)] = inst_25430__$1);

return statearr_25453;
})();
if(cljs.core.truth_(inst_25431)){
var statearr_25454_25482 = state_25448__$1;
(statearr_25454_25482[(1)] = (5));

} else {
var statearr_25455_25483 = state_25448__$1;
(statearr_25455_25483[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (6))){
var inst_25430 = (state_25448[(7)]);
var inst_25435 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25430) : p.call(null,inst_25430));
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25435)){
var statearr_25458_25484 = state_25448__$1;
(statearr_25458_25484[(1)] = (8));

} else {
var statearr_25459_25485 = state_25448__$1;
(statearr_25459_25485[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (3))){
var inst_25446 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25448__$1,inst_25446);
} else {
if((state_val_25449 === (2))){
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25448__$1,(4),ch);
} else {
if((state_val_25449 === (11))){
var inst_25438 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25460_25487 = state_25448__$1;
(statearr_25460_25487[(2)] = inst_25438);

(statearr_25460_25487[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (9))){
var state_25448__$1 = state_25448;
var statearr_25462_25489 = state_25448__$1;
(statearr_25462_25489[(2)] = null);

(statearr_25462_25489[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (5))){
var inst_25433 = cljs.core.async.close_BANG_(out);
var state_25448__$1 = state_25448;
var statearr_25463_25491 = state_25448__$1;
(statearr_25463_25491[(2)] = inst_25433);

(statearr_25463_25491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (10))){
var inst_25441 = (state_25448[(2)]);
var state_25448__$1 = (function (){var statearr_25464 = state_25448;
(statearr_25464[(8)] = inst_25441);

return statearr_25464;
})();
var statearr_25465_25492 = state_25448__$1;
(statearr_25465_25492[(2)] = null);

(statearr_25465_25492[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25449 === (8))){
var inst_25430 = (state_25448[(7)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25448__$1,(11),out,inst_25430);
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
});})(c__21787__auto___25476,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25476,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25468 = [null,null,null,null,null,null,null,null,null];
(statearr_25468[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25468[(1)] = (1));

return statearr_25468;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25448){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25448);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25469){if((e25469 instanceof Object)){
var ex__21542__auto__ = e25469;
var statearr_25470_25496 = state_25448;
(statearr_25470_25496[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25448);

return cljs.core.cst$kw$recur;
} else {
throw e25469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25497 = state_25448;
state_25448 = G__25497;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25448);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25476,out))
})();
var state__21789__auto__ = (function (){var statearr_25472 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25472[(6)] = c__21787__auto___25476);

return statearr_25472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25476,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25500 = arguments.length;
switch (G__25500) {
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
var c__21787__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto__){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto__){
return (function (state_25570){
var state_val_25571 = (state_25570[(1)]);
if((state_val_25571 === (7))){
var inst_25565 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25573_25627 = state_25570__$1;
(statearr_25573_25627[(2)] = inst_25565);

(statearr_25573_25627[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (20))){
var inst_25534 = (state_25570[(7)]);
var inst_25546 = (state_25570[(2)]);
var inst_25547 = cljs.core.next(inst_25534);
var inst_25520 = inst_25547;
var inst_25521 = null;
var inst_25522 = (0);
var inst_25523 = (0);
var state_25570__$1 = (function (){var statearr_25575 = state_25570;
(statearr_25575[(8)] = inst_25546);

(statearr_25575[(9)] = inst_25521);

(statearr_25575[(10)] = inst_25523);

(statearr_25575[(11)] = inst_25520);

(statearr_25575[(12)] = inst_25522);

return statearr_25575;
})();
var statearr_25576_25630 = state_25570__$1;
(statearr_25576_25630[(2)] = null);

(statearr_25576_25630[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (1))){
var state_25570__$1 = state_25570;
var statearr_25577_25631 = state_25570__$1;
(statearr_25577_25631[(2)] = null);

(statearr_25577_25631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (4))){
var inst_25509 = (state_25570[(13)]);
var inst_25509__$1 = (state_25570[(2)]);
var inst_25510 = (inst_25509__$1 == null);
var state_25570__$1 = (function (){var statearr_25580 = state_25570;
(statearr_25580[(13)] = inst_25509__$1);

return statearr_25580;
})();
if(cljs.core.truth_(inst_25510)){
var statearr_25581_25633 = state_25570__$1;
(statearr_25581_25633[(1)] = (5));

} else {
var statearr_25582_25634 = state_25570__$1;
(statearr_25582_25634[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (15))){
var state_25570__$1 = state_25570;
var statearr_25586_25637 = state_25570__$1;
(statearr_25586_25637[(2)] = null);

(statearr_25586_25637[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (21))){
var state_25570__$1 = state_25570;
var statearr_25587_25638 = state_25570__$1;
(statearr_25587_25638[(2)] = null);

(statearr_25587_25638[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (13))){
var inst_25521 = (state_25570[(9)]);
var inst_25523 = (state_25570[(10)]);
var inst_25520 = (state_25570[(11)]);
var inst_25522 = (state_25570[(12)]);
var inst_25530 = (state_25570[(2)]);
var inst_25531 = (inst_25523 + (1));
var tmp25583 = inst_25521;
var tmp25584 = inst_25520;
var tmp25585 = inst_25522;
var inst_25520__$1 = tmp25584;
var inst_25521__$1 = tmp25583;
var inst_25522__$1 = tmp25585;
var inst_25523__$1 = inst_25531;
var state_25570__$1 = (function (){var statearr_25589 = state_25570;
(statearr_25589[(14)] = inst_25530);

(statearr_25589[(9)] = inst_25521__$1);

(statearr_25589[(10)] = inst_25523__$1);

(statearr_25589[(11)] = inst_25520__$1);

(statearr_25589[(12)] = inst_25522__$1);

return statearr_25589;
})();
var statearr_25590_25640 = state_25570__$1;
(statearr_25590_25640[(2)] = null);

(statearr_25590_25640[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (22))){
var state_25570__$1 = state_25570;
var statearr_25591_25643 = state_25570__$1;
(statearr_25591_25643[(2)] = null);

(statearr_25591_25643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (6))){
var inst_25509 = (state_25570[(13)]);
var inst_25518 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25509) : f.call(null,inst_25509));
var inst_25519 = cljs.core.seq(inst_25518);
var inst_25520 = inst_25519;
var inst_25521 = null;
var inst_25522 = (0);
var inst_25523 = (0);
var state_25570__$1 = (function (){var statearr_25594 = state_25570;
(statearr_25594[(9)] = inst_25521);

(statearr_25594[(10)] = inst_25523);

(statearr_25594[(11)] = inst_25520);

(statearr_25594[(12)] = inst_25522);

return statearr_25594;
})();
var statearr_25595_25644 = state_25570__$1;
(statearr_25595_25644[(2)] = null);

(statearr_25595_25644[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (17))){
var inst_25534 = (state_25570[(7)]);
var inst_25538 = cljs.core.chunk_first(inst_25534);
var inst_25539 = cljs.core.chunk_rest(inst_25534);
var inst_25540 = cljs.core.count(inst_25538);
var inst_25520 = inst_25539;
var inst_25521 = inst_25538;
var inst_25522 = inst_25540;
var inst_25523 = (0);
var state_25570__$1 = (function (){var statearr_25596 = state_25570;
(statearr_25596[(9)] = inst_25521);

(statearr_25596[(10)] = inst_25523);

(statearr_25596[(11)] = inst_25520);

(statearr_25596[(12)] = inst_25522);

return statearr_25596;
})();
var statearr_25598_25648 = state_25570__$1;
(statearr_25598_25648[(2)] = null);

(statearr_25598_25648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (3))){
var inst_25567 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25570__$1,inst_25567);
} else {
if((state_val_25571 === (12))){
var inst_25555 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25599_25649 = state_25570__$1;
(statearr_25599_25649[(2)] = inst_25555);

(statearr_25599_25649[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (2))){
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25570__$1,(4),in$);
} else {
if((state_val_25571 === (23))){
var inst_25563 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25602_25651 = state_25570__$1;
(statearr_25602_25651[(2)] = inst_25563);

(statearr_25602_25651[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (19))){
var inst_25550 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25603_25652 = state_25570__$1;
(statearr_25603_25652[(2)] = inst_25550);

(statearr_25603_25652[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (11))){
var inst_25534 = (state_25570[(7)]);
var inst_25520 = (state_25570[(11)]);
var inst_25534__$1 = cljs.core.seq(inst_25520);
var state_25570__$1 = (function (){var statearr_25604 = state_25570;
(statearr_25604[(7)] = inst_25534__$1);

return statearr_25604;
})();
if(inst_25534__$1){
var statearr_25605_25655 = state_25570__$1;
(statearr_25605_25655[(1)] = (14));

} else {
var statearr_25606_25656 = state_25570__$1;
(statearr_25606_25656[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (9))){
var inst_25557 = (state_25570[(2)]);
var inst_25558 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_25570__$1 = (function (){var statearr_25608 = state_25570;
(statearr_25608[(15)] = inst_25557);

return statearr_25608;
})();
if(cljs.core.truth_(inst_25558)){
var statearr_25609_25657 = state_25570__$1;
(statearr_25609_25657[(1)] = (21));

} else {
var statearr_25610_25658 = state_25570__$1;
(statearr_25610_25658[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (5))){
var inst_25512 = cljs.core.async.close_BANG_(out);
var state_25570__$1 = state_25570;
var statearr_25611_25660 = state_25570__$1;
(statearr_25611_25660[(2)] = inst_25512);

(statearr_25611_25660[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (14))){
var inst_25534 = (state_25570[(7)]);
var inst_25536 = cljs.core.chunked_seq_QMARK_(inst_25534);
var state_25570__$1 = state_25570;
if(inst_25536){
var statearr_25613_25661 = state_25570__$1;
(statearr_25613_25661[(1)] = (17));

} else {
var statearr_25615_25663 = state_25570__$1;
(statearr_25615_25663[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (16))){
var inst_25553 = (state_25570[(2)]);
var state_25570__$1 = state_25570;
var statearr_25616_25665 = state_25570__$1;
(statearr_25616_25665[(2)] = inst_25553);

(statearr_25616_25665[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25571 === (10))){
var inst_25521 = (state_25570[(9)]);
var inst_25523 = (state_25570[(10)]);
var inst_25528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25521,inst_25523);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25570__$1,(13),out,inst_25528);
} else {
if((state_val_25571 === (18))){
var inst_25534 = (state_25570[(7)]);
var inst_25544 = cljs.core.first(inst_25534);
var state_25570__$1 = state_25570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25570__$1,(20),out,inst_25544);
} else {
if((state_val_25571 === (8))){
var inst_25523 = (state_25570[(10)]);
var inst_25522 = (state_25570[(12)]);
var inst_25525 = (inst_25523 < inst_25522);
var inst_25526 = inst_25525;
var state_25570__$1 = state_25570;
if(cljs.core.truth_(inst_25526)){
var statearr_25618_25667 = state_25570__$1;
(statearr_25618_25667[(1)] = (10));

} else {
var statearr_25619_25668 = state_25570__$1;
(statearr_25619_25668[(1)] = (11));

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
});})(c__21787__auto__))
;
return ((function (switch__21538__auto__,c__21787__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____0 = (function (){
var statearr_25620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25620[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__);

(statearr_25620[(1)] = (1));

return statearr_25620;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____1 = (function (state_25570){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25570);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25622){if((e25622 instanceof Object)){
var ex__21542__auto__ = e25622;
var statearr_25624_25671 = state_25570;
(statearr_25624_25671[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25570);

return cljs.core.cst$kw$recur;
} else {
throw e25622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25673 = state_25570;
state_25570 = G__25673;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__ = function(state_25570){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____1.call(this,state_25570);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21539__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto__))
})();
var state__21789__auto__ = (function (){var statearr_25625 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25625[(6)] = c__21787__auto__);

return statearr_25625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto__))
);

return c__21787__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25677 = arguments.length;
switch (G__25677) {
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
var G__25683 = arguments.length;
switch (G__25683) {
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
var G__25689 = arguments.length;
switch (G__25689) {
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
var c__21787__auto___25748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25748,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25748,out){
return (function (state_25716){
var state_val_25717 = (state_25716[(1)]);
if((state_val_25717 === (7))){
var inst_25711 = (state_25716[(2)]);
var state_25716__$1 = state_25716;
var statearr_25719_25750 = state_25716__$1;
(statearr_25719_25750[(2)] = inst_25711);

(statearr_25719_25750[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (1))){
var inst_25693 = null;
var state_25716__$1 = (function (){var statearr_25720 = state_25716;
(statearr_25720[(7)] = inst_25693);

return statearr_25720;
})();
var statearr_25721_25753 = state_25716__$1;
(statearr_25721_25753[(2)] = null);

(statearr_25721_25753[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (4))){
var inst_25696 = (state_25716[(8)]);
var inst_25696__$1 = (state_25716[(2)]);
var inst_25697 = (inst_25696__$1 == null);
var inst_25698 = cljs.core.not(inst_25697);
var state_25716__$1 = (function (){var statearr_25723 = state_25716;
(statearr_25723[(8)] = inst_25696__$1);

return statearr_25723;
})();
if(inst_25698){
var statearr_25725_25754 = state_25716__$1;
(statearr_25725_25754[(1)] = (5));

} else {
var statearr_25726_25755 = state_25716__$1;
(statearr_25726_25755[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (6))){
var state_25716__$1 = state_25716;
var statearr_25727_25757 = state_25716__$1;
(statearr_25727_25757[(2)] = null);

(statearr_25727_25757[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (3))){
var inst_25713 = (state_25716[(2)]);
var inst_25714 = cljs.core.async.close_BANG_(out);
var state_25716__$1 = (function (){var statearr_25728 = state_25716;
(statearr_25728[(9)] = inst_25713);

return statearr_25728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25716__$1,inst_25714);
} else {
if((state_val_25717 === (2))){
var state_25716__$1 = state_25716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25716__$1,(4),ch);
} else {
if((state_val_25717 === (11))){
var inst_25696 = (state_25716[(8)]);
var inst_25705 = (state_25716[(2)]);
var inst_25693 = inst_25696;
var state_25716__$1 = (function (){var statearr_25730 = state_25716;
(statearr_25730[(10)] = inst_25705);

(statearr_25730[(7)] = inst_25693);

return statearr_25730;
})();
var statearr_25731_25760 = state_25716__$1;
(statearr_25731_25760[(2)] = null);

(statearr_25731_25760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (9))){
var inst_25696 = (state_25716[(8)]);
var state_25716__$1 = state_25716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25716__$1,(11),out,inst_25696);
} else {
if((state_val_25717 === (5))){
var inst_25693 = (state_25716[(7)]);
var inst_25696 = (state_25716[(8)]);
var inst_25700 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25696,inst_25693);
var state_25716__$1 = state_25716;
if(inst_25700){
var statearr_25734_25762 = state_25716__$1;
(statearr_25734_25762[(1)] = (8));

} else {
var statearr_25736_25763 = state_25716__$1;
(statearr_25736_25763[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (10))){
var inst_25708 = (state_25716[(2)]);
var state_25716__$1 = state_25716;
var statearr_25737_25764 = state_25716__$1;
(statearr_25737_25764[(2)] = inst_25708);

(statearr_25737_25764[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25717 === (8))){
var inst_25693 = (state_25716[(7)]);
var tmp25732 = inst_25693;
var inst_25693__$1 = tmp25732;
var state_25716__$1 = (function (){var statearr_25738 = state_25716;
(statearr_25738[(7)] = inst_25693__$1);

return statearr_25738;
})();
var statearr_25739_25767 = state_25716__$1;
(statearr_25739_25767[(2)] = null);

(statearr_25739_25767[(1)] = (2));


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
});})(c__21787__auto___25748,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25748,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25740[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25740[(1)] = (1));

return statearr_25740;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25716){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25716);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25742){if((e25742 instanceof Object)){
var ex__21542__auto__ = e25742;
var statearr_25743_25769 = state_25716;
(statearr_25743_25769[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25716);

return cljs.core.cst$kw$recur;
} else {
throw e25742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25771 = state_25716;
state_25716 = G__25771;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25748,out))
})();
var state__21789__auto__ = (function (){var statearr_25744 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25744[(6)] = c__21787__auto___25748);

return statearr_25744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25748,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25775 = arguments.length;
switch (G__25775) {
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
var c__21787__auto___25856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25856,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25856,out){
return (function (state_25815){
var state_val_25816 = (state_25815[(1)]);
if((state_val_25816 === (7))){
var inst_25811 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25818_25857 = state_25815__$1;
(statearr_25818_25857[(2)] = inst_25811);

(statearr_25818_25857[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (1))){
var inst_25778 = (new Array(n));
var inst_25779 = inst_25778;
var inst_25780 = (0);
var state_25815__$1 = (function (){var statearr_25819 = state_25815;
(statearr_25819[(7)] = inst_25780);

(statearr_25819[(8)] = inst_25779);

return statearr_25819;
})();
var statearr_25821_25860 = state_25815__$1;
(statearr_25821_25860[(2)] = null);

(statearr_25821_25860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (4))){
var inst_25783 = (state_25815[(9)]);
var inst_25783__$1 = (state_25815[(2)]);
var inst_25784 = (inst_25783__$1 == null);
var inst_25785 = cljs.core.not(inst_25784);
var state_25815__$1 = (function (){var statearr_25823 = state_25815;
(statearr_25823[(9)] = inst_25783__$1);

return statearr_25823;
})();
if(inst_25785){
var statearr_25824_25862 = state_25815__$1;
(statearr_25824_25862[(1)] = (5));

} else {
var statearr_25825_25863 = state_25815__$1;
(statearr_25825_25863[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (15))){
var inst_25805 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25826_25864 = state_25815__$1;
(statearr_25826_25864[(2)] = inst_25805);

(statearr_25826_25864[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (13))){
var state_25815__$1 = state_25815;
var statearr_25827_25866 = state_25815__$1;
(statearr_25827_25866[(2)] = null);

(statearr_25827_25866[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (6))){
var inst_25780 = (state_25815[(7)]);
var inst_25801 = (inst_25780 > (0));
var state_25815__$1 = state_25815;
if(cljs.core.truth_(inst_25801)){
var statearr_25829_25868 = state_25815__$1;
(statearr_25829_25868[(1)] = (12));

} else {
var statearr_25830_25869 = state_25815__$1;
(statearr_25830_25869[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (3))){
var inst_25813 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25815__$1,inst_25813);
} else {
if((state_val_25816 === (12))){
var inst_25779 = (state_25815[(8)]);
var inst_25803 = cljs.core.vec(inst_25779);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25815__$1,(15),out,inst_25803);
} else {
if((state_val_25816 === (2))){
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25815__$1,(4),ch);
} else {
if((state_val_25816 === (11))){
var inst_25795 = (state_25815[(2)]);
var inst_25796 = (new Array(n));
var inst_25779 = inst_25796;
var inst_25780 = (0);
var state_25815__$1 = (function (){var statearr_25833 = state_25815;
(statearr_25833[(7)] = inst_25780);

(statearr_25833[(10)] = inst_25795);

(statearr_25833[(8)] = inst_25779);

return statearr_25833;
})();
var statearr_25834_25872 = state_25815__$1;
(statearr_25834_25872[(2)] = null);

(statearr_25834_25872[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (9))){
var inst_25779 = (state_25815[(8)]);
var inst_25793 = cljs.core.vec(inst_25779);
var state_25815__$1 = state_25815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25815__$1,(11),out,inst_25793);
} else {
if((state_val_25816 === (5))){
var inst_25780 = (state_25815[(7)]);
var inst_25788 = (state_25815[(11)]);
var inst_25783 = (state_25815[(9)]);
var inst_25779 = (state_25815[(8)]);
var inst_25787 = (inst_25779[inst_25780] = inst_25783);
var inst_25788__$1 = (inst_25780 + (1));
var inst_25789 = (inst_25788__$1 < n);
var state_25815__$1 = (function (){var statearr_25836 = state_25815;
(statearr_25836[(11)] = inst_25788__$1);

(statearr_25836[(12)] = inst_25787);

return statearr_25836;
})();
if(cljs.core.truth_(inst_25789)){
var statearr_25837_25875 = state_25815__$1;
(statearr_25837_25875[(1)] = (8));

} else {
var statearr_25838_25876 = state_25815__$1;
(statearr_25838_25876[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (14))){
var inst_25808 = (state_25815[(2)]);
var inst_25809 = cljs.core.async.close_BANG_(out);
var state_25815__$1 = (function (){var statearr_25840 = state_25815;
(statearr_25840[(13)] = inst_25808);

return statearr_25840;
})();
var statearr_25841_25878 = state_25815__$1;
(statearr_25841_25878[(2)] = inst_25809);

(statearr_25841_25878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (10))){
var inst_25799 = (state_25815[(2)]);
var state_25815__$1 = state_25815;
var statearr_25844_25880 = state_25815__$1;
(statearr_25844_25880[(2)] = inst_25799);

(statearr_25844_25880[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25816 === (8))){
var inst_25788 = (state_25815[(11)]);
var inst_25779 = (state_25815[(8)]);
var tmp25839 = inst_25779;
var inst_25779__$1 = tmp25839;
var inst_25780 = inst_25788;
var state_25815__$1 = (function (){var statearr_25845 = state_25815;
(statearr_25845[(7)] = inst_25780);

(statearr_25845[(8)] = inst_25779__$1);

return statearr_25845;
})();
var statearr_25846_25882 = state_25815__$1;
(statearr_25846_25882[(2)] = null);

(statearr_25846_25882[(1)] = (2));


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
});})(c__21787__auto___25856,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25856,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25847[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25847[(1)] = (1));

return statearr_25847;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25815){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25815);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25849){if((e25849 instanceof Object)){
var ex__21542__auto__ = e25849;
var statearr_25850_25885 = state_25815;
(statearr_25850_25885[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25815);

return cljs.core.cst$kw$recur;
} else {
throw e25849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__25886 = state_25815;
state_25815 = G__25886;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25856,out))
})();
var state__21789__auto__ = (function (){var statearr_25851 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25851[(6)] = c__21787__auto___25856);

return statearr_25851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25856,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25890 = arguments.length;
switch (G__25890) {
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
var c__21787__auto___25974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21787__auto___25974,out){
return (function (){
var f__21788__auto__ = (function (){var switch__21538__auto__ = ((function (c__21787__auto___25974,out){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (7))){
var inst_25930 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25938_25977 = state_25936__$1;
(statearr_25938_25977[(2)] = inst_25930);

(statearr_25938_25977[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (1))){
var inst_25892 = [];
var inst_25893 = inst_25892;
var inst_25894 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_25936__$1 = (function (){var statearr_25939 = state_25936;
(statearr_25939[(7)] = inst_25894);

(statearr_25939[(8)] = inst_25893);

return statearr_25939;
})();
var statearr_25940_25978 = state_25936__$1;
(statearr_25940_25978[(2)] = null);

(statearr_25940_25978[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (4))){
var inst_25897 = (state_25936[(9)]);
var inst_25897__$1 = (state_25936[(2)]);
var inst_25899 = (inst_25897__$1 == null);
var inst_25900 = cljs.core.not(inst_25899);
var state_25936__$1 = (function (){var statearr_25942 = state_25936;
(statearr_25942[(9)] = inst_25897__$1);

return statearr_25942;
})();
if(inst_25900){
var statearr_25943_25980 = state_25936__$1;
(statearr_25943_25980[(1)] = (5));

} else {
var statearr_25944_25982 = state_25936__$1;
(statearr_25944_25982[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (15))){
var inst_25924 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25945_25984 = state_25936__$1;
(statearr_25945_25984[(2)] = inst_25924);

(statearr_25945_25984[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (13))){
var state_25936__$1 = state_25936;
var statearr_25947_25985 = state_25936__$1;
(statearr_25947_25985[(2)] = null);

(statearr_25947_25985[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (6))){
var inst_25893 = (state_25936[(8)]);
var inst_25919 = inst_25893.length;
var inst_25920 = (inst_25919 > (0));
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25920)){
var statearr_25949_25986 = state_25936__$1;
(statearr_25949_25986[(1)] = (12));

} else {
var statearr_25950_25988 = state_25936__$1;
(statearr_25950_25988[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (3))){
var inst_25932 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25936__$1,inst_25932);
} else {
if((state_val_25937 === (12))){
var inst_25893 = (state_25936[(8)]);
var inst_25922 = cljs.core.vec(inst_25893);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25936__$1,(15),out,inst_25922);
} else {
if((state_val_25937 === (2))){
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25936__$1,(4),ch);
} else {
if((state_val_25937 === (11))){
var inst_25902 = (state_25936[(10)]);
var inst_25897 = (state_25936[(9)]);
var inst_25912 = (state_25936[(2)]);
var inst_25913 = [];
var inst_25914 = inst_25913.push(inst_25897);
var inst_25893 = inst_25913;
var inst_25894 = inst_25902;
var state_25936__$1 = (function (){var statearr_25952 = state_25936;
(statearr_25952[(11)] = inst_25912);

(statearr_25952[(7)] = inst_25894);

(statearr_25952[(8)] = inst_25893);

(statearr_25952[(12)] = inst_25914);

return statearr_25952;
})();
var statearr_25953_25991 = state_25936__$1;
(statearr_25953_25991[(2)] = null);

(statearr_25953_25991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (9))){
var inst_25893 = (state_25936[(8)]);
var inst_25910 = cljs.core.vec(inst_25893);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25936__$1,(11),out,inst_25910);
} else {
if((state_val_25937 === (5))){
var inst_25902 = (state_25936[(10)]);
var inst_25897 = (state_25936[(9)]);
var inst_25894 = (state_25936[(7)]);
var inst_25902__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25897) : f.call(null,inst_25897));
var inst_25903 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25902__$1,inst_25894);
var inst_25904 = cljs.core.keyword_identical_QMARK_(inst_25894,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_25905 = (inst_25903) || (inst_25904);
var state_25936__$1 = (function (){var statearr_25956 = state_25936;
(statearr_25956[(10)] = inst_25902__$1);

return statearr_25956;
})();
if(cljs.core.truth_(inst_25905)){
var statearr_25957_25995 = state_25936__$1;
(statearr_25957_25995[(1)] = (8));

} else {
var statearr_25958_25996 = state_25936__$1;
(statearr_25958_25996[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (14))){
var inst_25927 = (state_25936[(2)]);
var inst_25928 = cljs.core.async.close_BANG_(out);
var state_25936__$1 = (function (){var statearr_25960 = state_25936;
(statearr_25960[(13)] = inst_25927);

return statearr_25960;
})();
var statearr_25961_25997 = state_25936__$1;
(statearr_25961_25997[(2)] = inst_25928);

(statearr_25961_25997[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (10))){
var inst_25917 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25963_25999 = state_25936__$1;
(statearr_25963_25999[(2)] = inst_25917);

(statearr_25963_25999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25937 === (8))){
var inst_25902 = (state_25936[(10)]);
var inst_25897 = (state_25936[(9)]);
var inst_25893 = (state_25936[(8)]);
var inst_25907 = inst_25893.push(inst_25897);
var tmp25959 = inst_25893;
var inst_25893__$1 = tmp25959;
var inst_25894 = inst_25902;
var state_25936__$1 = (function (){var statearr_25964 = state_25936;
(statearr_25964[(7)] = inst_25894);

(statearr_25964[(8)] = inst_25893__$1);

(statearr_25964[(14)] = inst_25907);

return statearr_25964;
})();
var statearr_25965_26002 = state_25936__$1;
(statearr_25965_26002[(2)] = null);

(statearr_25965_26002[(1)] = (2));


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
});})(c__21787__auto___25974,out))
;
return ((function (switch__21538__auto__,c__21787__auto___25974,out){
return (function() {
var cljs$core$async$state_machine__21539__auto__ = null;
var cljs$core$async$state_machine__21539__auto____0 = (function (){
var statearr_25968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25968[(0)] = cljs$core$async$state_machine__21539__auto__);

(statearr_25968[(1)] = (1));

return statearr_25968;
});
var cljs$core$async$state_machine__21539__auto____1 = (function (state_25936){
while(true){
var ret_value__21540__auto__ = (function (){try{while(true){
var result__21541__auto__ = switch__21538__auto__(state_25936);
if(cljs.core.keyword_identical_QMARK_(result__21541__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21541__auto__;
}
break;
}
}catch (e25969){if((e25969 instanceof Object)){
var ex__21542__auto__ = e25969;
var statearr_25970_26004 = state_25936;
(statearr_25970_26004[(5)] = ex__21542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25936);

return cljs.core.cst$kw$recur;
} else {
throw e25969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21540__auto__,cljs.core.cst$kw$recur)){
var G__26005 = state_25936;
state_25936 = G__26005;
continue;
} else {
return ret_value__21540__auto__;
}
break;
}
});
cljs$core$async$state_machine__21539__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21539__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21539__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21539__auto____0;
cljs$core$async$state_machine__21539__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21539__auto____1;
return cljs$core$async$state_machine__21539__auto__;
})()
;})(switch__21538__auto__,c__21787__auto___25974,out))
})();
var state__21789__auto__ = (function (){var statearr_25971 = (f__21788__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21788__auto__.cljs$core$IFn$_invoke$arity$0() : f__21788__auto__.call(null));
(statearr_25971[(6)] = c__21787__auto___25974);

return statearr_25971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21789__auto__);
});})(c__21787__auto___25974,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


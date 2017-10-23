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
var G__28676 = arguments.length;
switch (G__28676) {
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
if(typeof cljs.core.async.t_cljs$core$async28677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28677 = (function (f,blockable,meta28678){
this.f = f;
this.blockable = blockable;
this.meta28678 = meta28678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28679,meta28678__$1){
var self__ = this;
var _28679__$1 = this;
return (new cljs.core.async.t_cljs$core$async28677(self__.f,self__.blockable,meta28678__$1));
});


cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28679){
var self__ = this;
var _28679__$1 = this;
return self__.meta28678;
});


cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async28677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta28678], null);
});

cljs.core.async.t_cljs$core$async28677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28677";

cljs.core.async.t_cljs$core$async28677.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async28677");
});

cljs.core.async.__GT_t_cljs$core$async28677 = (function cljs$core$async$__GT_t_cljs$core$async28677(f__$1,blockable__$1,meta28678){
return (new cljs.core.async.t_cljs$core$async28677(f__$1,blockable__$1,meta28678));
});

}

return (new cljs.core.async.t_cljs$core$async28677(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28684 = arguments.length;
switch (G__28684) {
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
var G__28690 = arguments.length;
switch (G__28690) {
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
var G__28701 = arguments.length;
switch (G__28701) {
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
var val_28704 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28704) : fn1.call(null,val_28704));
} else {
cljs.core.async.impl.dispatch.run(((function (val_28704,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_28704) : fn1.call(null,val_28704));
});})(val_28704,ret))
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
var G__28710 = arguments.length;
switch (G__28710) {
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
var n__11457__auto___28714 = n;
var x_28715 = (0);
while(true){
if((x_28715 < n__11457__auto___28714)){
(a[x_28715] = (0));

var G__28716 = (x_28715 + (1));
x_28715 = G__28716;
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

var G__28717 = (i + (1));
i = G__28717;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async28718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28718 = (function (flag,meta28719){
this.flag = flag;
this.meta28719 = meta28719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28720,meta28719__$1){
var self__ = this;
var _28720__$1 = this;
return (new cljs.core.async.t_cljs$core$async28718(self__.flag,meta28719__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28720){
var self__ = this;
var _28720__$1 = this;
return self__.meta28719;
});})(flag))
;


cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async28718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28718.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta28719], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28718";

cljs.core.async.t_cljs$core$async28718.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async28718");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28718 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28718(flag__$1,meta28719){
return (new cljs.core.async.t_cljs$core$async28718(flag__$1,meta28719));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28718(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28730 = (function (flag,cb,meta28731){
this.flag = flag;
this.cb = cb;
this.meta28731 = meta28731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28732,meta28731__$1){
var self__ = this;
var _28732__$1 = this;
return (new cljs.core.async.t_cljs$core$async28730(self__.flag,self__.cb,meta28731__$1));
});


cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28732){
var self__ = this;
var _28732__$1 = this;
return self__.meta28731;
});


cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});


cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async28730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta28731], null);
});

cljs.core.async.t_cljs$core$async28730.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28730";

cljs.core.async.t_cljs$core$async28730.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async28730");
});

cljs.core.async.__GT_t_cljs$core$async28730 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28730(flag__$1,cb__$1,meta28731){
return (new cljs.core.async.t_cljs$core$async28730(flag__$1,cb__$1,meta28731));
});

}

return (new cljs.core.async.t_cljs$core$async28730(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28756_SHARP_){
var G__28760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28756_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28760) : fret.call(null,G__28760));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28757_SHARP_){
var G__28761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28757_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28761) : fret.call(null,G__28761));
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
var G__28770 = (i + (1));
i = G__28770;
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
var len__11691__auto___28777 = arguments.length;
var i__11692__auto___28778 = (0);
while(true){
if((i__11692__auto___28778 < len__11691__auto___28777)){
args__11698__auto__.push((arguments[i__11692__auto___28778]));

var G__28780 = (i__11692__auto___28778 + (1));
i__11692__auto___28778 = G__28780;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28773){
var map__28774 = p__28773;
var map__28774__$1 = ((((!((map__28774 == null)))?((((map__28774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28774):map__28774);
var opts = map__28774__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28771){
var G__28772 = cljs.core.first(seq28771);
var seq28771__$1 = cljs.core.next(seq28771);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28772,seq28771__$1);
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
var G__28782 = arguments.length;
switch (G__28782) {
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
var c__28612__auto___28983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___28983){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___28983){
return (function (state_28854){
var state_val_28858 = (state_28854[(1)]);
if((state_val_28858 === (7))){
var inst_28833 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
var statearr_28879_28984 = state_28854__$1;
(statearr_28879_28984[(2)] = inst_28833);

(statearr_28879_28984[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (1))){
var state_28854__$1 = state_28854;
var statearr_28892_28985 = state_28854__$1;
(statearr_28892_28985[(2)] = null);

(statearr_28892_28985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (4))){
var inst_28806 = (state_28854[(7)]);
var inst_28806__$1 = (state_28854[(2)]);
var inst_28809 = (inst_28806__$1 == null);
var state_28854__$1 = (function (){var statearr_28899 = state_28854;
(statearr_28899[(7)] = inst_28806__$1);

return statearr_28899;
})();
if(cljs.core.truth_(inst_28809)){
var statearr_28900_28986 = state_28854__$1;
(statearr_28900_28986[(1)] = (5));

} else {
var statearr_28901_28987 = state_28854__$1;
(statearr_28901_28987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (13))){
var state_28854__$1 = state_28854;
var statearr_28908_28988 = state_28854__$1;
(statearr_28908_28988[(2)] = null);

(statearr_28908_28988[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (6))){
var inst_28806 = (state_28854[(7)]);
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28854__$1,(11),to,inst_28806);
} else {
if((state_val_28858 === (3))){
var inst_28835 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28854__$1,inst_28835);
} else {
if((state_val_28858 === (12))){
var state_28854__$1 = state_28854;
var statearr_28912_28996 = state_28854__$1;
(statearr_28912_28996[(2)] = null);

(statearr_28912_28996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (2))){
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28854__$1,(4),from);
} else {
if((state_val_28858 === (11))){
var inst_28822 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
if(cljs.core.truth_(inst_28822)){
var statearr_28920_28997 = state_28854__$1;
(statearr_28920_28997[(1)] = (12));

} else {
var statearr_28921_29002 = state_28854__$1;
(statearr_28921_29002[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (9))){
var state_28854__$1 = state_28854;
var statearr_28922_29005 = state_28854__$1;
(statearr_28922_29005[(2)] = null);

(statearr_28922_29005[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (5))){
var state_28854__$1 = state_28854;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28923_29011 = state_28854__$1;
(statearr_28923_29011[(1)] = (8));

} else {
var statearr_28924_29012 = state_28854__$1;
(statearr_28924_29012[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (14))){
var inst_28831 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
var statearr_28928_29016 = state_28854__$1;
(statearr_28928_29016[(2)] = inst_28831);

(statearr_28928_29016[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (10))){
var inst_28819 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
var statearr_28933_29017 = state_28854__$1;
(statearr_28933_29017[(2)] = inst_28819);

(statearr_28933_29017[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28858 === (8))){
var inst_28812 = cljs.core.async.close_BANG_(to);
var state_28854__$1 = state_28854;
var statearr_28939_29018 = state_28854__$1;
(statearr_28939_29018[(2)] = inst_28812);

(statearr_28939_29018[(1)] = (10));


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
});})(c__28612__auto___28983))
;
return ((function (switch__24124__auto__,c__28612__auto___28983){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_28951 = [null,null,null,null,null,null,null,null];
(statearr_28951[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_28951[(1)] = (1));

return statearr_28951;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_28854){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_28854);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e28955){if((e28955 instanceof Object)){
var ex__24128__auto__ = e28955;
var statearr_28956_29034 = state_28854;
(statearr_28956_29034[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28854);

return cljs.core.cst$kw$recur;
} else {
throw e28955;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29035 = state_28854;
state_28854 = G__29035;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_28854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_28854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___28983))
})();
var state__28614__auto__ = (function (){var statearr_28961 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_28961[(6)] = c__28612__auto___28983);

return statearr_28961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___28983))
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
return (function (p__29050){
var vec__29051 = p__29050;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29051,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29051,(1),null);
var job = vec__29051;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28612__auto___29324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results){
return (function (state_29062){
var state_val_29063 = (state_29062[(1)]);
if((state_val_29063 === (1))){
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29062__$1,(2),res,v);
} else {
if((state_val_29063 === (2))){
var inst_29059 = (state_29062[(2)]);
var inst_29060 = cljs.core.async.close_BANG_(res);
var state_29062__$1 = (function (){var statearr_29064 = state_29062;
(statearr_29064[(7)] = inst_29059);

return statearr_29064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29062__$1,inst_29060);
} else {
return null;
}
}
});})(c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results))
;
return ((function (switch__24124__auto__,c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_29066 = [null,null,null,null,null,null,null,null];
(statearr_29066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__);

(statearr_29066[(1)] = (1));

return statearr_29066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1 = (function (state_29062){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29062);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29067){if((e29067 instanceof Object)){
var ex__24128__auto__ = e29067;
var statearr_29068_29331 = state_29062;
(statearr_29068_29331[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29062);

return cljs.core.cst$kw$recur;
} else {
throw e29067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29332 = state_29062;
state_29062 = G__29332;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = function(state_29062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1.call(this,state_29062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results))
})();
var state__28614__auto__ = (function (){var statearr_29072 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29072[(6)] = c__28612__auto___29324);

return statearr_29072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___29324,res,vec__29051,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29075){
var vec__29076 = p__29075;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(1),null);
var job = vec__29076;
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
var n__11457__auto___29340 = n;
var __29341 = (0);
while(true){
if((__29341 < n__11457__auto___29340)){
var G__29081_29342 = type;
var G__29081_29343__$1 = (((G__29081_29342 instanceof cljs.core.Keyword))?G__29081_29342.fqn:null);
switch (G__29081_29343__$1) {
case "compute":
var c__28612__auto___29345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29341,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (__29341,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function (state_29094){
var state_val_29095 = (state_29094[(1)]);
if((state_val_29095 === (1))){
var state_29094__$1 = state_29094;
var statearr_29097_29349 = state_29094__$1;
(statearr_29097_29349[(2)] = null);

(statearr_29097_29349[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29095 === (2))){
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29094__$1,(4),jobs);
} else {
if((state_val_29095 === (3))){
var inst_29092 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29094__$1,inst_29092);
} else {
if((state_val_29095 === (4))){
var inst_29084 = (state_29094[(2)]);
var inst_29085 = process(inst_29084);
var state_29094__$1 = state_29094;
if(cljs.core.truth_(inst_29085)){
var statearr_29098_29353 = state_29094__$1;
(statearr_29098_29353[(1)] = (5));

} else {
var statearr_29099_29354 = state_29094__$1;
(statearr_29099_29354[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29095 === (5))){
var state_29094__$1 = state_29094;
var statearr_29100_29355 = state_29094__$1;
(statearr_29100_29355[(2)] = null);

(statearr_29100_29355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29095 === (6))){
var state_29094__$1 = state_29094;
var statearr_29101_29369 = state_29094__$1;
(statearr_29101_29369[(2)] = null);

(statearr_29101_29369[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29095 === (7))){
var inst_29090 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
var statearr_29102_29378 = state_29094__$1;
(statearr_29102_29378[(2)] = inst_29090);

(statearr_29102_29378[(1)] = (3));


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
});})(__29341,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
;
return ((function (__29341,switch__24124__auto__,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_29103 = [null,null,null,null,null,null,null];
(statearr_29103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__);

(statearr_29103[(1)] = (1));

return statearr_29103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1 = (function (state_29094){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29094);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29104){if((e29104 instanceof Object)){
var ex__24128__auto__ = e29104;
var statearr_29105_29386 = state_29094;
(statearr_29105_29386[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29094);

return cljs.core.cst$kw$recur;
} else {
throw e29104;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29390 = state_29094;
state_29094 = G__29390;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = function(state_29094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1.call(this,state_29094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__;
})()
;})(__29341,switch__24124__auto__,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
})();
var state__28614__auto__ = (function (){var statearr_29106 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29106[(6)] = c__28612__auto___29345);

return statearr_29106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(__29341,c__28612__auto___29345,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
);


break;
case "async":
var c__28612__auto___29391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29341,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (__29341,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function (state_29121){
var state_val_29122 = (state_29121[(1)]);
if((state_val_29122 === (1))){
var state_29121__$1 = state_29121;
var statearr_29124_29396 = state_29121__$1;
(statearr_29124_29396[(2)] = null);

(statearr_29124_29396[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29122 === (2))){
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29121__$1,(4),jobs);
} else {
if((state_val_29122 === (3))){
var inst_29119 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29121__$1,inst_29119);
} else {
if((state_val_29122 === (4))){
var inst_29110 = (state_29121[(2)]);
var inst_29111 = async(inst_29110);
var state_29121__$1 = state_29121;
if(cljs.core.truth_(inst_29111)){
var statearr_29126_29400 = state_29121__$1;
(statearr_29126_29400[(1)] = (5));

} else {
var statearr_29127_29401 = state_29121__$1;
(statearr_29127_29401[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29122 === (5))){
var state_29121__$1 = state_29121;
var statearr_29129_29402 = state_29121__$1;
(statearr_29129_29402[(2)] = null);

(statearr_29129_29402[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29122 === (6))){
var state_29121__$1 = state_29121;
var statearr_29130_29403 = state_29121__$1;
(statearr_29130_29403[(2)] = null);

(statearr_29130_29403[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29122 === (7))){
var inst_29117 = (state_29121[(2)]);
var state_29121__$1 = state_29121;
var statearr_29131_29406 = state_29121__$1;
(statearr_29131_29406[(2)] = inst_29117);

(statearr_29131_29406[(1)] = (3));


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
});})(__29341,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
;
return ((function (__29341,switch__24124__auto__,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_29132 = [null,null,null,null,null,null,null];
(statearr_29132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__);

(statearr_29132[(1)] = (1));

return statearr_29132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1 = (function (state_29121){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29121);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29133){if((e29133 instanceof Object)){
var ex__24128__auto__ = e29133;
var statearr_29134_29414 = state_29121;
(statearr_29134_29414[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29121);

return cljs.core.cst$kw$recur;
} else {
throw e29133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29416 = state_29121;
state_29121 = G__29416;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = function(state_29121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1.call(this,state_29121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__;
})()
;})(__29341,switch__24124__auto__,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
})();
var state__28614__auto__ = (function (){var statearr_29135 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29135[(6)] = c__28612__auto___29391);

return statearr_29135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(__29341,c__28612__auto___29391,G__29081_29342,G__29081_29343__$1,n__11457__auto___29340,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29081_29343__$1)].join('')));

}

var G__29417 = (__29341 + (1));
__29341 = G__29417;
continue;
} else {
}
break;
}

var c__28612__auto___29418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___29418,jobs,results,process,async){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___29418,jobs,results,process,async){
return (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (1))){
var state_29164__$1 = state_29164;
var statearr_29167_29419 = state_29164__$1;
(statearr_29167_29419[(2)] = null);

(statearr_29167_29419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29165 === (2))){
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29164__$1,(4),from);
} else {
if((state_val_29165 === (3))){
var inst_29159 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29164__$1,inst_29159);
} else {
if((state_val_29165 === (4))){
var inst_29138 = (state_29164[(7)]);
var inst_29138__$1 = (state_29164[(2)]);
var inst_29139 = (inst_29138__$1 == null);
var state_29164__$1 = (function (){var statearr_29176 = state_29164;
(statearr_29176[(7)] = inst_29138__$1);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29139)){
var statearr_29180_29420 = state_29164__$1;
(statearr_29180_29420[(1)] = (5));

} else {
var statearr_29181_29421 = state_29164__$1;
(statearr_29181_29421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29165 === (5))){
var inst_29141 = cljs.core.async.close_BANG_(jobs);
var state_29164__$1 = state_29164;
var statearr_29185_29426 = state_29164__$1;
(statearr_29185_29426[(2)] = inst_29141);

(statearr_29185_29426[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29165 === (6))){
var inst_29138 = (state_29164[(7)]);
var inst_29143 = (state_29164[(8)]);
var inst_29143__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29144 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29149 = [inst_29138,inst_29143__$1];
var inst_29150 = (new cljs.core.PersistentVector(null,2,(5),inst_29144,inst_29149,null));
var state_29164__$1 = (function (){var statearr_29188 = state_29164;
(statearr_29188[(8)] = inst_29143__$1);

return statearr_29188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29164__$1,(8),jobs,inst_29150);
} else {
if((state_val_29165 === (7))){
var inst_29157 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29189_29428 = state_29164__$1;
(statearr_29189_29428[(2)] = inst_29157);

(statearr_29189_29428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29165 === (8))){
var inst_29143 = (state_29164[(8)]);
var inst_29152 = (state_29164[(2)]);
var state_29164__$1 = (function (){var statearr_29190 = state_29164;
(statearr_29190[(9)] = inst_29152);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29164__$1,(9),results,inst_29143);
} else {
if((state_val_29165 === (9))){
var inst_29154 = (state_29164[(2)]);
var state_29164__$1 = (function (){var statearr_29192 = state_29164;
(statearr_29192[(10)] = inst_29154);

return statearr_29192;
})();
var statearr_29193_29430 = state_29164__$1;
(statearr_29193_29430[(2)] = null);

(statearr_29193_29430[(1)] = (2));


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
});})(c__28612__auto___29418,jobs,results,process,async))
;
return ((function (switch__24124__auto__,c__28612__auto___29418,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_29194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__);

(statearr_29194[(1)] = (1));

return statearr_29194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1 = (function (state_29164){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29164);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29195){if((e29195 instanceof Object)){
var ex__24128__auto__ = e29195;
var statearr_29196_29431 = state_29164;
(statearr_29196_29431[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29164);

return cljs.core.cst$kw$recur;
} else {
throw e29195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29433 = state_29164;
state_29164 = G__29433;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___29418,jobs,results,process,async))
})();
var state__28614__auto__ = (function (){var statearr_29199 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29199[(6)] = c__28612__auto___29418);

return statearr_29199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___29418,jobs,results,process,async))
);


var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__,jobs,results,process,async){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__,jobs,results,process,async){
return (function (state_29243){
var state_val_29244 = (state_29243[(1)]);
if((state_val_29244 === (7))){
var inst_29239 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29245_29439 = state_29243__$1;
(statearr_29245_29439[(2)] = inst_29239);

(statearr_29245_29439[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (20))){
var state_29243__$1 = state_29243;
var statearr_29246_29440 = state_29243__$1;
(statearr_29246_29440[(2)] = null);

(statearr_29246_29440[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (1))){
var state_29243__$1 = state_29243;
var statearr_29250_29441 = state_29243__$1;
(statearr_29250_29441[(2)] = null);

(statearr_29250_29441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (4))){
var inst_29202 = (state_29243[(7)]);
var inst_29202__$1 = (state_29243[(2)]);
var inst_29206 = (inst_29202__$1 == null);
var state_29243__$1 = (function (){var statearr_29253 = state_29243;
(statearr_29253[(7)] = inst_29202__$1);

return statearr_29253;
})();
if(cljs.core.truth_(inst_29206)){
var statearr_29257_29442 = state_29243__$1;
(statearr_29257_29442[(1)] = (5));

} else {
var statearr_29258_29443 = state_29243__$1;
(statearr_29258_29443[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (15))){
var inst_29218 = (state_29243[(8)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29243__$1,(18),to,inst_29218);
} else {
if((state_val_29244 === (21))){
var inst_29231 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29259_29448 = state_29243__$1;
(statearr_29259_29448[(2)] = inst_29231);

(statearr_29259_29448[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (13))){
var inst_29233 = (state_29243[(2)]);
var state_29243__$1 = (function (){var statearr_29260 = state_29243;
(statearr_29260[(9)] = inst_29233);

return statearr_29260;
})();
var statearr_29261_29449 = state_29243__$1;
(statearr_29261_29449[(2)] = null);

(statearr_29261_29449[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (6))){
var inst_29202 = (state_29243[(7)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29243__$1,(11),inst_29202);
} else {
if((state_val_29244 === (17))){
var inst_29226 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
if(cljs.core.truth_(inst_29226)){
var statearr_29263_29451 = state_29243__$1;
(statearr_29263_29451[(1)] = (19));

} else {
var statearr_29264_29452 = state_29243__$1;
(statearr_29264_29452[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (3))){
var inst_29241 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29243__$1,inst_29241);
} else {
if((state_val_29244 === (12))){
var inst_29215 = (state_29243[(10)]);
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29243__$1,(14),inst_29215);
} else {
if((state_val_29244 === (2))){
var state_29243__$1 = state_29243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29243__$1,(4),results);
} else {
if((state_val_29244 === (19))){
var state_29243__$1 = state_29243;
var statearr_29274_29453 = state_29243__$1;
(statearr_29274_29453[(2)] = null);

(statearr_29274_29453[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (11))){
var inst_29215 = (state_29243[(2)]);
var state_29243__$1 = (function (){var statearr_29278 = state_29243;
(statearr_29278[(10)] = inst_29215);

return statearr_29278;
})();
var statearr_29279_29458 = state_29243__$1;
(statearr_29279_29458[(2)] = null);

(statearr_29279_29458[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (9))){
var state_29243__$1 = state_29243;
var statearr_29280_29459 = state_29243__$1;
(statearr_29280_29459[(2)] = null);

(statearr_29280_29459[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (5))){
var state_29243__$1 = state_29243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29286_29460 = state_29243__$1;
(statearr_29286_29460[(1)] = (8));

} else {
var statearr_29287_29461 = state_29243__$1;
(statearr_29287_29461[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (14))){
var inst_29218 = (state_29243[(8)]);
var inst_29220 = (state_29243[(11)]);
var inst_29218__$1 = (state_29243[(2)]);
var inst_29219 = (inst_29218__$1 == null);
var inst_29220__$1 = cljs.core.not(inst_29219);
var state_29243__$1 = (function (){var statearr_29291 = state_29243;
(statearr_29291[(8)] = inst_29218__$1);

(statearr_29291[(11)] = inst_29220__$1);

return statearr_29291;
})();
if(inst_29220__$1){
var statearr_29292_29462 = state_29243__$1;
(statearr_29292_29462[(1)] = (15));

} else {
var statearr_29293_29463 = state_29243__$1;
(statearr_29293_29463[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (16))){
var inst_29220 = (state_29243[(11)]);
var state_29243__$1 = state_29243;
var statearr_29297_29464 = state_29243__$1;
(statearr_29297_29464[(2)] = inst_29220);

(statearr_29297_29464[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (10))){
var inst_29212 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29302_29465 = state_29243__$1;
(statearr_29302_29465[(2)] = inst_29212);

(statearr_29302_29465[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (18))){
var inst_29223 = (state_29243[(2)]);
var state_29243__$1 = state_29243;
var statearr_29303_29466 = state_29243__$1;
(statearr_29303_29466[(2)] = inst_29223);

(statearr_29303_29466[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29244 === (8))){
var inst_29209 = cljs.core.async.close_BANG_(to);
var state_29243__$1 = state_29243;
var statearr_29307_29467 = state_29243__$1;
(statearr_29307_29467[(2)] = inst_29209);

(statearr_29307_29467[(1)] = (10));


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
});})(c__28612__auto__,jobs,results,process,async))
;
return ((function (switch__24124__auto__,c__28612__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_29308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__);

(statearr_29308[(1)] = (1));

return statearr_29308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1 = (function (state_29243){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29243);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29309){if((e29309 instanceof Object)){
var ex__24128__auto__ = e29309;
var statearr_29311_29468 = state_29243;
(statearr_29311_29468[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29243);

return cljs.core.cst$kw$recur;
} else {
throw e29309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29469 = state_29243;
state_29243 = G__29469;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__ = function(state_29243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1.call(this,state_29243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__,jobs,results,process,async))
})();
var state__28614__auto__ = (function (){var statearr_29319 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29319[(6)] = c__28612__auto__);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__,jobs,results,process,async))
);

return c__28612__auto__;
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
var G__29472 = arguments.length;
switch (G__29472) {
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
var G__29475 = arguments.length;
switch (G__29475) {
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
var G__29480 = arguments.length;
switch (G__29480) {
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
var c__28612__auto___29558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___29558,tc,fc){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___29558,tc,fc){
return (function (state_29509){
var state_val_29510 = (state_29509[(1)]);
if((state_val_29510 === (7))){
var inst_29505 = (state_29509[(2)]);
var state_29509__$1 = state_29509;
var statearr_29516_29561 = state_29509__$1;
(statearr_29516_29561[(2)] = inst_29505);

(statearr_29516_29561[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (1))){
var state_29509__$1 = state_29509;
var statearr_29517_29562 = state_29509__$1;
(statearr_29517_29562[(2)] = null);

(statearr_29517_29562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (4))){
var inst_29485 = (state_29509[(7)]);
var inst_29485__$1 = (state_29509[(2)]);
var inst_29487 = (inst_29485__$1 == null);
var state_29509__$1 = (function (){var statearr_29518 = state_29509;
(statearr_29518[(7)] = inst_29485__$1);

return statearr_29518;
})();
if(cljs.core.truth_(inst_29487)){
var statearr_29519_29566 = state_29509__$1;
(statearr_29519_29566[(1)] = (5));

} else {
var statearr_29520_29567 = state_29509__$1;
(statearr_29520_29567[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (13))){
var state_29509__$1 = state_29509;
var statearr_29522_29568 = state_29509__$1;
(statearr_29522_29568[(2)] = null);

(statearr_29522_29568[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (6))){
var inst_29485 = (state_29509[(7)]);
var inst_29492 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29485) : p.call(null,inst_29485));
var state_29509__$1 = state_29509;
if(cljs.core.truth_(inst_29492)){
var statearr_29524_29569 = state_29509__$1;
(statearr_29524_29569[(1)] = (9));

} else {
var statearr_29525_29572 = state_29509__$1;
(statearr_29525_29572[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (3))){
var inst_29507 = (state_29509[(2)]);
var state_29509__$1 = state_29509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29509__$1,inst_29507);
} else {
if((state_val_29510 === (12))){
var state_29509__$1 = state_29509;
var statearr_29527_29573 = state_29509__$1;
(statearr_29527_29573[(2)] = null);

(statearr_29527_29573[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (2))){
var state_29509__$1 = state_29509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29509__$1,(4),ch);
} else {
if((state_val_29510 === (11))){
var inst_29485 = (state_29509[(7)]);
var inst_29496 = (state_29509[(2)]);
var state_29509__$1 = state_29509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29509__$1,(8),inst_29496,inst_29485);
} else {
if((state_val_29510 === (9))){
var state_29509__$1 = state_29509;
var statearr_29532_29576 = state_29509__$1;
(statearr_29532_29576[(2)] = tc);

(statearr_29532_29576[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (5))){
var inst_29489 = cljs.core.async.close_BANG_(tc);
var inst_29490 = cljs.core.async.close_BANG_(fc);
var state_29509__$1 = (function (){var statearr_29535 = state_29509;
(statearr_29535[(8)] = inst_29489);

return statearr_29535;
})();
var statearr_29536_29577 = state_29509__$1;
(statearr_29536_29577[(2)] = inst_29490);

(statearr_29536_29577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (14))){
var inst_29503 = (state_29509[(2)]);
var state_29509__$1 = state_29509;
var statearr_29538_29580 = state_29509__$1;
(statearr_29538_29580[(2)] = inst_29503);

(statearr_29538_29580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (10))){
var state_29509__$1 = state_29509;
var statearr_29539_29581 = state_29509__$1;
(statearr_29539_29581[(2)] = fc);

(statearr_29539_29581[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29510 === (8))){
var inst_29498 = (state_29509[(2)]);
var state_29509__$1 = state_29509;
if(cljs.core.truth_(inst_29498)){
var statearr_29544_29582 = state_29509__$1;
(statearr_29544_29582[(1)] = (12));

} else {
var statearr_29545_29585 = state_29509__$1;
(statearr_29545_29585[(1)] = (13));

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
});})(c__28612__auto___29558,tc,fc))
;
return ((function (switch__24124__auto__,c__28612__auto___29558,tc,fc){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_29509){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29509);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__24128__auto__ = e29550;
var statearr_29551_29588 = state_29509;
(statearr_29551_29588[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29509);

return cljs.core.cst$kw$recur;
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29589 = state_29509;
state_29509 = G__29589;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_29509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_29509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___29558,tc,fc))
})();
var state__28614__auto__ = (function (){var statearr_29553 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29553[(6)] = c__28612__auto___29558);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___29558,tc,fc))
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
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__){
return (function (state_29621){
var state_val_29622 = (state_29621[(1)]);
if((state_val_29622 === (7))){
var inst_29617 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29627_29675 = state_29621__$1;
(statearr_29627_29675[(2)] = inst_29617);

(statearr_29627_29675[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (1))){
var inst_29601 = init;
var state_29621__$1 = (function (){var statearr_29629 = state_29621;
(statearr_29629[(7)] = inst_29601);

return statearr_29629;
})();
var statearr_29630_29676 = state_29621__$1;
(statearr_29630_29676[(2)] = null);

(statearr_29630_29676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (4))){
var inst_29604 = (state_29621[(8)]);
var inst_29604__$1 = (state_29621[(2)]);
var inst_29605 = (inst_29604__$1 == null);
var state_29621__$1 = (function (){var statearr_29634 = state_29621;
(statearr_29634[(8)] = inst_29604__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29605)){
var statearr_29635_29677 = state_29621__$1;
(statearr_29635_29677[(1)] = (5));

} else {
var statearr_29636_29678 = state_29621__$1;
(statearr_29636_29678[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (6))){
var inst_29604 = (state_29621[(8)]);
var inst_29608 = (state_29621[(9)]);
var inst_29601 = (state_29621[(7)]);
var inst_29608__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29601,inst_29604) : f.call(null,inst_29601,inst_29604));
var inst_29609 = cljs.core.reduced_QMARK_(inst_29608__$1);
var state_29621__$1 = (function (){var statearr_29640 = state_29621;
(statearr_29640[(9)] = inst_29608__$1);

return statearr_29640;
})();
if(inst_29609){
var statearr_29641_29680 = state_29621__$1;
(statearr_29641_29680[(1)] = (8));

} else {
var statearr_29642_29682 = state_29621__$1;
(statearr_29642_29682[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (3))){
var inst_29619 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29621__$1,inst_29619);
} else {
if((state_val_29622 === (2))){
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29621__$1,(4),ch);
} else {
if((state_val_29622 === (9))){
var inst_29608 = (state_29621[(9)]);
var inst_29601 = inst_29608;
var state_29621__$1 = (function (){var statearr_29647 = state_29621;
(statearr_29647[(7)] = inst_29601);

return statearr_29647;
})();
var statearr_29648_29685 = state_29621__$1;
(statearr_29648_29685[(2)] = null);

(statearr_29648_29685[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (5))){
var inst_29601 = (state_29621[(7)]);
var state_29621__$1 = state_29621;
var statearr_29649_29686 = state_29621__$1;
(statearr_29649_29686[(2)] = inst_29601);

(statearr_29649_29686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (10))){
var inst_29615 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29653_29690 = state_29621__$1;
(statearr_29653_29690[(2)] = inst_29615);

(statearr_29653_29690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29622 === (8))){
var inst_29608 = (state_29621[(9)]);
var inst_29611 = cljs.core.deref(inst_29608);
var state_29621__$1 = state_29621;
var statearr_29659_29691 = state_29621__$1;
(statearr_29659_29691[(2)] = inst_29611);

(statearr_29659_29691[(1)] = (10));


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
});})(c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24125__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24125__auto____0 = (function (){
var statearr_29660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29660[(0)] = cljs$core$async$reduce_$_state_machine__24125__auto__);

(statearr_29660[(1)] = (1));

return statearr_29660;
});
var cljs$core$async$reduce_$_state_machine__24125__auto____1 = (function (state_29621){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29621);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object)){
var ex__24128__auto__ = e29661;
var statearr_29665_29692 = state_29621;
(statearr_29665_29692[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29621);

return cljs.core.cst$kw$recur;
} else {
throw e29661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29693 = state_29621;
state_29621 = G__29693;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24125__auto__ = function(state_29621){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24125__auto____1.call(this,state_29621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24125__auto____0;
cljs$core$async$reduce_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24125__auto____1;
return cljs$core$async$reduce_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_29670 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29670[(6)] = c__28612__auto__);

return statearr_29670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__))
);

return c__28612__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__,f__$1){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__,f__$1){
return (function (state_29699){
var state_val_29700 = (state_29699[(1)]);
if((state_val_29700 === (1))){
var inst_29694 = cljs.core.async.reduce(f__$1,init,ch);
var state_29699__$1 = state_29699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29699__$1,(2),inst_29694);
} else {
if((state_val_29700 === (2))){
var inst_29696 = (state_29699[(2)]);
var inst_29697 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29696) : f__$1.call(null,inst_29696));
var state_29699__$1 = state_29699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29699__$1,inst_29697);
} else {
return null;
}
}
});})(c__28612__auto__,f__$1))
;
return ((function (switch__24124__auto__,c__28612__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24125__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24125__auto____0 = (function (){
var statearr_29704 = [null,null,null,null,null,null,null];
(statearr_29704[(0)] = cljs$core$async$transduce_$_state_machine__24125__auto__);

(statearr_29704[(1)] = (1));

return statearr_29704;
});
var cljs$core$async$transduce_$_state_machine__24125__auto____1 = (function (state_29699){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29699);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29705){if((e29705 instanceof Object)){
var ex__24128__auto__ = e29705;
var statearr_29706_29708 = state_29699;
(statearr_29706_29708[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29699);

return cljs.core.cst$kw$recur;
} else {
throw e29705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29709 = state_29699;
state_29699 = G__29709;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24125__auto__ = function(state_29699){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24125__auto____1.call(this,state_29699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24125__auto____0;
cljs$core$async$transduce_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24125__auto____1;
return cljs$core$async$transduce_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__,f__$1))
})();
var state__28614__auto__ = (function (){var statearr_29707 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29707[(6)] = c__28612__auto__);

return statearr_29707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__,f__$1))
);

return c__28612__auto__;
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
var G__29712 = arguments.length;
switch (G__29712) {
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
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__){
return (function (state_29740){
var state_val_29741 = (state_29740[(1)]);
if((state_val_29741 === (7))){
var inst_29722 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29743_29771 = state_29740__$1;
(statearr_29743_29771[(2)] = inst_29722);

(statearr_29743_29771[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (1))){
var inst_29716 = cljs.core.seq(coll);
var inst_29717 = inst_29716;
var state_29740__$1 = (function (){var statearr_29745 = state_29740;
(statearr_29745[(7)] = inst_29717);

return statearr_29745;
})();
var statearr_29746_29772 = state_29740__$1;
(statearr_29746_29772[(2)] = null);

(statearr_29746_29772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (4))){
var inst_29717 = (state_29740[(7)]);
var inst_29720 = cljs.core.first(inst_29717);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29740__$1,(7),ch,inst_29720);
} else {
if((state_val_29741 === (13))){
var inst_29734 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29747_29773 = state_29740__$1;
(statearr_29747_29773[(2)] = inst_29734);

(statearr_29747_29773[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (6))){
var inst_29725 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29725)){
var statearr_29751_29774 = state_29740__$1;
(statearr_29751_29774[(1)] = (8));

} else {
var statearr_29752_29775 = state_29740__$1;
(statearr_29752_29775[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (3))){
var inst_29738 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29740__$1,inst_29738);
} else {
if((state_val_29741 === (12))){
var state_29740__$1 = state_29740;
var statearr_29753_29776 = state_29740__$1;
(statearr_29753_29776[(2)] = null);

(statearr_29753_29776[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (2))){
var inst_29717 = (state_29740[(7)]);
var state_29740__$1 = state_29740;
if(cljs.core.truth_(inst_29717)){
var statearr_29754_29778 = state_29740__$1;
(statearr_29754_29778[(1)] = (4));

} else {
var statearr_29755_29779 = state_29740__$1;
(statearr_29755_29779[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (11))){
var inst_29731 = cljs.core.async.close_BANG_(ch);
var state_29740__$1 = state_29740;
var statearr_29756_29780 = state_29740__$1;
(statearr_29756_29780[(2)] = inst_29731);

(statearr_29756_29780[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (9))){
var state_29740__$1 = state_29740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29757_29781 = state_29740__$1;
(statearr_29757_29781[(1)] = (11));

} else {
var statearr_29758_29782 = state_29740__$1;
(statearr_29758_29782[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (5))){
var inst_29717 = (state_29740[(7)]);
var state_29740__$1 = state_29740;
var statearr_29759_29783 = state_29740__$1;
(statearr_29759_29783[(2)] = inst_29717);

(statearr_29759_29783[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (10))){
var inst_29736 = (state_29740[(2)]);
var state_29740__$1 = state_29740;
var statearr_29760_29784 = state_29740__$1;
(statearr_29760_29784[(2)] = inst_29736);

(statearr_29760_29784[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29741 === (8))){
var inst_29717 = (state_29740[(7)]);
var inst_29727 = cljs.core.next(inst_29717);
var inst_29717__$1 = inst_29727;
var state_29740__$1 = (function (){var statearr_29761 = state_29740;
(statearr_29761[(7)] = inst_29717__$1);

return statearr_29761;
})();
var statearr_29762_29788 = state_29740__$1;
(statearr_29762_29788[(2)] = null);

(statearr_29762_29788[(1)] = (2));


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
});})(c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto__){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_29763 = [null,null,null,null,null,null,null,null];
(statearr_29763[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_29763[(1)] = (1));

return statearr_29763;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_29740){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29740);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e29764){if((e29764 instanceof Object)){
var ex__24128__auto__ = e29764;
var statearr_29765_29789 = state_29740;
(statearr_29765_29789[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29740);

return cljs.core.cst$kw$recur;
} else {
throw e29764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__29792 = state_29740;
state_29740 = G__29792;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_29740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_29740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_29769 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_29769[(6)] = c__28612__auto__);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__))
);

return c__28612__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29803 = (function (ch,cs,meta29804){
this.ch = ch;
this.cs = cs;
this.meta29804 = meta29804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29805,meta29804__$1){
var self__ = this;
var _29805__$1 = this;
return (new cljs.core.async.t_cljs$core$async29803(self__.ch,self__.cs,meta29804__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29805){
var self__ = this;
var _29805__$1 = this;
return self__.meta29804;
});})(cs))
;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async29803.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29803.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29804], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29803";

cljs.core.async.t_cljs$core$async29803.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async29803");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29803 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29803(ch__$1,cs__$1,meta29804){
return (new cljs.core.async.t_cljs$core$async29803(ch__$1,cs__$1,meta29804));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29803(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28612__auto___30120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___30120,cs,m,dchan,dctr,done){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___30120,cs,m,dchan,dctr,done){
return (function (state_29959){
var state_val_29960 = (state_29959[(1)]);
if((state_val_29960 === (7))){
var inst_29954 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_29961_30121 = state_29959__$1;
(statearr_29961_30121[(2)] = inst_29954);

(statearr_29961_30121[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (20))){
var inst_29850 = (state_29959[(7)]);
var inst_29862 = cljs.core.first(inst_29850);
var inst_29863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29862,(0),null);
var inst_29864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29862,(1),null);
var state_29959__$1 = (function (){var statearr_29966 = state_29959;
(statearr_29966[(8)] = inst_29863);

return statearr_29966;
})();
if(cljs.core.truth_(inst_29864)){
var statearr_29967_30123 = state_29959__$1;
(statearr_29967_30123[(1)] = (22));

} else {
var statearr_29968_30124 = state_29959__$1;
(statearr_29968_30124[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (27))){
var inst_29899 = (state_29959[(9)]);
var inst_29894 = (state_29959[(10)]);
var inst_29892 = (state_29959[(11)]);
var inst_29819 = (state_29959[(12)]);
var inst_29899__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29892,inst_29894);
var inst_29900 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29899__$1,inst_29819,done);
var state_29959__$1 = (function (){var statearr_29969 = state_29959;
(statearr_29969[(9)] = inst_29899__$1);

return statearr_29969;
})();
if(cljs.core.truth_(inst_29900)){
var statearr_29970_30125 = state_29959__$1;
(statearr_29970_30125[(1)] = (30));

} else {
var statearr_29971_30126 = state_29959__$1;
(statearr_29971_30126[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (1))){
var state_29959__$1 = state_29959;
var statearr_29972_30127 = state_29959__$1;
(statearr_29972_30127[(2)] = null);

(statearr_29972_30127[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (24))){
var inst_29850 = (state_29959[(7)]);
var inst_29869 = (state_29959[(2)]);
var inst_29870 = cljs.core.next(inst_29850);
var inst_29828 = inst_29870;
var inst_29829 = null;
var inst_29830 = (0);
var inst_29831 = (0);
var state_29959__$1 = (function (){var statearr_29973 = state_29959;
(statearr_29973[(13)] = inst_29831);

(statearr_29973[(14)] = inst_29869);

(statearr_29973[(15)] = inst_29829);

(statearr_29973[(16)] = inst_29828);

(statearr_29973[(17)] = inst_29830);

return statearr_29973;
})();
var statearr_29974_30135 = state_29959__$1;
(statearr_29974_30135[(2)] = null);

(statearr_29974_30135[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (39))){
var state_29959__$1 = state_29959;
var statearr_29979_30136 = state_29959__$1;
(statearr_29979_30136[(2)] = null);

(statearr_29979_30136[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (4))){
var inst_29819 = (state_29959[(12)]);
var inst_29819__$1 = (state_29959[(2)]);
var inst_29820 = (inst_29819__$1 == null);
var state_29959__$1 = (function (){var statearr_29980 = state_29959;
(statearr_29980[(12)] = inst_29819__$1);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29820)){
var statearr_29981_30137 = state_29959__$1;
(statearr_29981_30137[(1)] = (5));

} else {
var statearr_29982_30138 = state_29959__$1;
(statearr_29982_30138[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (15))){
var inst_29831 = (state_29959[(13)]);
var inst_29829 = (state_29959[(15)]);
var inst_29828 = (state_29959[(16)]);
var inst_29830 = (state_29959[(17)]);
var inst_29846 = (state_29959[(2)]);
var inst_29847 = (inst_29831 + (1));
var tmp29976 = inst_29829;
var tmp29977 = inst_29828;
var tmp29978 = inst_29830;
var inst_29828__$1 = tmp29977;
var inst_29829__$1 = tmp29976;
var inst_29830__$1 = tmp29978;
var inst_29831__$1 = inst_29847;
var state_29959__$1 = (function (){var statearr_29983 = state_29959;
(statearr_29983[(13)] = inst_29831__$1);

(statearr_29983[(15)] = inst_29829__$1);

(statearr_29983[(18)] = inst_29846);

(statearr_29983[(16)] = inst_29828__$1);

(statearr_29983[(17)] = inst_29830__$1);

return statearr_29983;
})();
var statearr_29984_30139 = state_29959__$1;
(statearr_29984_30139[(2)] = null);

(statearr_29984_30139[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (21))){
var inst_29873 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_29988_30140 = state_29959__$1;
(statearr_29988_30140[(2)] = inst_29873);

(statearr_29988_30140[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (31))){
var inst_29899 = (state_29959[(9)]);
var inst_29903 = done(null);
var inst_29904 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29899);
var state_29959__$1 = (function (){var statearr_29989 = state_29959;
(statearr_29989[(19)] = inst_29903);

return statearr_29989;
})();
var statearr_29990_30141 = state_29959__$1;
(statearr_29990_30141[(2)] = inst_29904);

(statearr_29990_30141[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (32))){
var inst_29891 = (state_29959[(20)]);
var inst_29893 = (state_29959[(21)]);
var inst_29894 = (state_29959[(10)]);
var inst_29892 = (state_29959[(11)]);
var inst_29906 = (state_29959[(2)]);
var inst_29907 = (inst_29894 + (1));
var tmp29985 = inst_29891;
var tmp29986 = inst_29893;
var tmp29987 = inst_29892;
var inst_29891__$1 = tmp29985;
var inst_29892__$1 = tmp29987;
var inst_29893__$1 = tmp29986;
var inst_29894__$1 = inst_29907;
var state_29959__$1 = (function (){var statearr_29991 = state_29959;
(statearr_29991[(20)] = inst_29891__$1);

(statearr_29991[(22)] = inst_29906);

(statearr_29991[(21)] = inst_29893__$1);

(statearr_29991[(10)] = inst_29894__$1);

(statearr_29991[(11)] = inst_29892__$1);

return statearr_29991;
})();
var statearr_29992_30142 = state_29959__$1;
(statearr_29992_30142[(2)] = null);

(statearr_29992_30142[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (40))){
var inst_29926 = (state_29959[(23)]);
var inst_29930 = done(null);
var inst_29931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29926);
var state_29959__$1 = (function (){var statearr_29993 = state_29959;
(statearr_29993[(24)] = inst_29930);

return statearr_29993;
})();
var statearr_29997_30143 = state_29959__$1;
(statearr_29997_30143[(2)] = inst_29931);

(statearr_29997_30143[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (33))){
var inst_29914 = (state_29959[(25)]);
var inst_29916 = cljs.core.chunked_seq_QMARK_(inst_29914);
var state_29959__$1 = state_29959;
if(inst_29916){
var statearr_29998_30144 = state_29959__$1;
(statearr_29998_30144[(1)] = (36));

} else {
var statearr_29999_30145 = state_29959__$1;
(statearr_29999_30145[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (13))){
var inst_29840 = (state_29959[(26)]);
var inst_29843 = cljs.core.async.close_BANG_(inst_29840);
var state_29959__$1 = state_29959;
var statearr_30000_30149 = state_29959__$1;
(statearr_30000_30149[(2)] = inst_29843);

(statearr_30000_30149[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (22))){
var inst_29863 = (state_29959[(8)]);
var inst_29866 = cljs.core.async.close_BANG_(inst_29863);
var state_29959__$1 = state_29959;
var statearr_30001_30150 = state_29959__$1;
(statearr_30001_30150[(2)] = inst_29866);

(statearr_30001_30150[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (36))){
var inst_29914 = (state_29959[(25)]);
var inst_29918 = cljs.core.chunk_first(inst_29914);
var inst_29919 = cljs.core.chunk_rest(inst_29914);
var inst_29923 = cljs.core.count(inst_29918);
var inst_29891 = inst_29919;
var inst_29892 = inst_29918;
var inst_29893 = inst_29923;
var inst_29894 = (0);
var state_29959__$1 = (function (){var statearr_30002 = state_29959;
(statearr_30002[(20)] = inst_29891);

(statearr_30002[(21)] = inst_29893);

(statearr_30002[(10)] = inst_29894);

(statearr_30002[(11)] = inst_29892);

return statearr_30002;
})();
var statearr_30003_30151 = state_29959__$1;
(statearr_30003_30151[(2)] = null);

(statearr_30003_30151[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (41))){
var inst_29914 = (state_29959[(25)]);
var inst_29933 = (state_29959[(2)]);
var inst_29934 = cljs.core.next(inst_29914);
var inst_29891 = inst_29934;
var inst_29892 = null;
var inst_29893 = (0);
var inst_29894 = (0);
var state_29959__$1 = (function (){var statearr_30004 = state_29959;
(statearr_30004[(20)] = inst_29891);

(statearr_30004[(21)] = inst_29893);

(statearr_30004[(10)] = inst_29894);

(statearr_30004[(27)] = inst_29933);

(statearr_30004[(11)] = inst_29892);

return statearr_30004;
})();
var statearr_30005_30152 = state_29959__$1;
(statearr_30005_30152[(2)] = null);

(statearr_30005_30152[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (43))){
var state_29959__$1 = state_29959;
var statearr_30006_30153 = state_29959__$1;
(statearr_30006_30153[(2)] = null);

(statearr_30006_30153[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (29))){
var inst_29942 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30007_30154 = state_29959__$1;
(statearr_30007_30154[(2)] = inst_29942);

(statearr_30007_30154[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (44))){
var inst_29951 = (state_29959[(2)]);
var state_29959__$1 = (function (){var statearr_30008 = state_29959;
(statearr_30008[(28)] = inst_29951);

return statearr_30008;
})();
var statearr_30009_30155 = state_29959__$1;
(statearr_30009_30155[(2)] = null);

(statearr_30009_30155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (6))){
var inst_29883 = (state_29959[(29)]);
var inst_29882 = cljs.core.deref(cs);
var inst_29883__$1 = cljs.core.keys(inst_29882);
var inst_29884 = cljs.core.count(inst_29883__$1);
var inst_29885 = cljs.core.reset_BANG_(dctr,inst_29884);
var inst_29890 = cljs.core.seq(inst_29883__$1);
var inst_29891 = inst_29890;
var inst_29892 = null;
var inst_29893 = (0);
var inst_29894 = (0);
var state_29959__$1 = (function (){var statearr_30010 = state_29959;
(statearr_30010[(20)] = inst_29891);

(statearr_30010[(30)] = inst_29885);

(statearr_30010[(21)] = inst_29893);

(statearr_30010[(10)] = inst_29894);

(statearr_30010[(11)] = inst_29892);

(statearr_30010[(29)] = inst_29883__$1);

return statearr_30010;
})();
var statearr_30011_30156 = state_29959__$1;
(statearr_30011_30156[(2)] = null);

(statearr_30011_30156[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (28))){
var inst_29891 = (state_29959[(20)]);
var inst_29914 = (state_29959[(25)]);
var inst_29914__$1 = cljs.core.seq(inst_29891);
var state_29959__$1 = (function (){var statearr_30012 = state_29959;
(statearr_30012[(25)] = inst_29914__$1);

return statearr_30012;
})();
if(inst_29914__$1){
var statearr_30013_30157 = state_29959__$1;
(statearr_30013_30157[(1)] = (33));

} else {
var statearr_30014_30158 = state_29959__$1;
(statearr_30014_30158[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (25))){
var inst_29893 = (state_29959[(21)]);
var inst_29894 = (state_29959[(10)]);
var inst_29896 = (inst_29894 < inst_29893);
var inst_29897 = inst_29896;
var state_29959__$1 = state_29959;
if(cljs.core.truth_(inst_29897)){
var statearr_30015_30162 = state_29959__$1;
(statearr_30015_30162[(1)] = (27));

} else {
var statearr_30016_30163 = state_29959__$1;
(statearr_30016_30163[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (34))){
var state_29959__$1 = state_29959;
var statearr_30031_30164 = state_29959__$1;
(statearr_30031_30164[(2)] = null);

(statearr_30031_30164[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (17))){
var state_29959__$1 = state_29959;
var statearr_30032_30165 = state_29959__$1;
(statearr_30032_30165[(2)] = null);

(statearr_30032_30165[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (3))){
var inst_29956 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29959__$1,inst_29956);
} else {
if((state_val_29960 === (12))){
var inst_29878 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30039_30166 = state_29959__$1;
(statearr_30039_30166[(2)] = inst_29878);

(statearr_30039_30166[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (2))){
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29959__$1,(4),ch);
} else {
if((state_val_29960 === (23))){
var state_29959__$1 = state_29959;
var statearr_30044_30167 = state_29959__$1;
(statearr_30044_30167[(2)] = null);

(statearr_30044_30167[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (35))){
var inst_29940 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30045_30168 = state_29959__$1;
(statearr_30045_30168[(2)] = inst_29940);

(statearr_30045_30168[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (19))){
var inst_29850 = (state_29959[(7)]);
var inst_29854 = cljs.core.chunk_first(inst_29850);
var inst_29855 = cljs.core.chunk_rest(inst_29850);
var inst_29856 = cljs.core.count(inst_29854);
var inst_29828 = inst_29855;
var inst_29829 = inst_29854;
var inst_29830 = inst_29856;
var inst_29831 = (0);
var state_29959__$1 = (function (){var statearr_30049 = state_29959;
(statearr_30049[(13)] = inst_29831);

(statearr_30049[(15)] = inst_29829);

(statearr_30049[(16)] = inst_29828);

(statearr_30049[(17)] = inst_29830);

return statearr_30049;
})();
var statearr_30050_30169 = state_29959__$1;
(statearr_30050_30169[(2)] = null);

(statearr_30050_30169[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (11))){
var inst_29850 = (state_29959[(7)]);
var inst_29828 = (state_29959[(16)]);
var inst_29850__$1 = cljs.core.seq(inst_29828);
var state_29959__$1 = (function (){var statearr_30051 = state_29959;
(statearr_30051[(7)] = inst_29850__$1);

return statearr_30051;
})();
if(inst_29850__$1){
var statearr_30052_30170 = state_29959__$1;
(statearr_30052_30170[(1)] = (16));

} else {
var statearr_30053_30171 = state_29959__$1;
(statearr_30053_30171[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (9))){
var inst_29880 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30054_30172 = state_29959__$1;
(statearr_30054_30172[(2)] = inst_29880);

(statearr_30054_30172[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (5))){
var inst_29826 = cljs.core.deref(cs);
var inst_29827 = cljs.core.seq(inst_29826);
var inst_29828 = inst_29827;
var inst_29829 = null;
var inst_29830 = (0);
var inst_29831 = (0);
var state_29959__$1 = (function (){var statearr_30062 = state_29959;
(statearr_30062[(13)] = inst_29831);

(statearr_30062[(15)] = inst_29829);

(statearr_30062[(16)] = inst_29828);

(statearr_30062[(17)] = inst_29830);

return statearr_30062;
})();
var statearr_30063_30181 = state_29959__$1;
(statearr_30063_30181[(2)] = null);

(statearr_30063_30181[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (14))){
var state_29959__$1 = state_29959;
var statearr_30078_30185 = state_29959__$1;
(statearr_30078_30185[(2)] = null);

(statearr_30078_30185[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (45))){
var inst_29948 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30079_30189 = state_29959__$1;
(statearr_30079_30189[(2)] = inst_29948);

(statearr_30079_30189[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (26))){
var inst_29883 = (state_29959[(29)]);
var inst_29944 = (state_29959[(2)]);
var inst_29945 = cljs.core.seq(inst_29883);
var state_29959__$1 = (function (){var statearr_30086 = state_29959;
(statearr_30086[(31)] = inst_29944);

return statearr_30086;
})();
if(inst_29945){
var statearr_30087_30190 = state_29959__$1;
(statearr_30087_30190[(1)] = (42));

} else {
var statearr_30088_30191 = state_29959__$1;
(statearr_30088_30191[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (16))){
var inst_29850 = (state_29959[(7)]);
var inst_29852 = cljs.core.chunked_seq_QMARK_(inst_29850);
var state_29959__$1 = state_29959;
if(inst_29852){
var statearr_30089_30192 = state_29959__$1;
(statearr_30089_30192[(1)] = (19));

} else {
var statearr_30090_30193 = state_29959__$1;
(statearr_30090_30193[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (38))){
var inst_29937 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30091_30194 = state_29959__$1;
(statearr_30091_30194[(2)] = inst_29937);

(statearr_30091_30194[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (30))){
var state_29959__$1 = state_29959;
var statearr_30092_30195 = state_29959__$1;
(statearr_30092_30195[(2)] = null);

(statearr_30092_30195[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (10))){
var inst_29831 = (state_29959[(13)]);
var inst_29829 = (state_29959[(15)]);
var inst_29839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29829,inst_29831);
var inst_29840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29839,(0),null);
var inst_29841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29839,(1),null);
var state_29959__$1 = (function (){var statearr_30093 = state_29959;
(statearr_30093[(26)] = inst_29840);

return statearr_30093;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_30094_30196 = state_29959__$1;
(statearr_30094_30196[(1)] = (13));

} else {
var statearr_30095_30197 = state_29959__$1;
(statearr_30095_30197[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (18))){
var inst_29876 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_30096_30198 = state_29959__$1;
(statearr_30096_30198[(2)] = inst_29876);

(statearr_30096_30198[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (42))){
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29959__$1,(45),dchan);
} else {
if((state_val_29960 === (37))){
var inst_29914 = (state_29959[(25)]);
var inst_29926 = (state_29959[(23)]);
var inst_29819 = (state_29959[(12)]);
var inst_29926__$1 = cljs.core.first(inst_29914);
var inst_29927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29926__$1,inst_29819,done);
var state_29959__$1 = (function (){var statearr_30097 = state_29959;
(statearr_30097[(23)] = inst_29926__$1);

return statearr_30097;
})();
if(cljs.core.truth_(inst_29927)){
var statearr_30098_30199 = state_29959__$1;
(statearr_30098_30199[(1)] = (39));

} else {
var statearr_30102_30200 = state_29959__$1;
(statearr_30102_30200[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29960 === (8))){
var inst_29831 = (state_29959[(13)]);
var inst_29830 = (state_29959[(17)]);
var inst_29833 = (inst_29831 < inst_29830);
var inst_29834 = inst_29833;
var state_29959__$1 = state_29959;
if(cljs.core.truth_(inst_29834)){
var statearr_30103_30202 = state_29959__$1;
(statearr_30103_30202[(1)] = (10));

} else {
var statearr_30104_30203 = state_29959__$1;
(statearr_30104_30203[(1)] = (11));

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
});})(c__28612__auto___30120,cs,m,dchan,dctr,done))
;
return ((function (switch__24124__auto__,c__28612__auto___30120,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24125__auto__ = null;
var cljs$core$async$mult_$_state_machine__24125__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$mult_$_state_machine__24125__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$mult_$_state_machine__24125__auto____1 = (function (state_29959){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_29959);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__24128__auto__ = e30109;
var statearr_30110_30207 = state_29959;
(statearr_30110_30207[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29959);

return cljs.core.cst$kw$recur;
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__30208 = state_29959;
state_29959 = G__30208;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24125__auto__ = function(state_29959){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24125__auto____1.call(this,state_29959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24125__auto____0;
cljs$core$async$mult_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24125__auto____1;
return cljs$core$async$mult_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___30120,cs,m,dchan,dctr,done))
})();
var state__28614__auto__ = (function (){var statearr_30111 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_30111[(6)] = c__28612__auto___30120);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___30120,cs,m,dchan,dctr,done))
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
var G__30210 = arguments.length;
switch (G__30210) {
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
var len__11691__auto___30287 = arguments.length;
var i__11692__auto___30288 = (0);
while(true){
if((i__11692__auto___30288 < len__11691__auto___30287)){
args__11698__auto__.push((arguments[i__11692__auto___30288]));

var G__30289 = (i__11692__auto___30288 + (1));
i__11692__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30281){
var map__30282 = p__30281;
var map__30282__$1 = ((((!((map__30282 == null)))?((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30282):map__30282);
var opts = map__30282__$1;
var statearr_30284_30295 = state;
(statearr_30284_30295[(1)] = cont_block);


var temp__5459__auto__ = cljs.core.async.do_alts(((function (map__30282,map__30282__$1,opts){
return (function (val){
var statearr_30285_30296 = state;
(statearr_30285_30296[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__30282,map__30282__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5459__auto__)){
var cb = temp__5459__auto__;
var statearr_30286_30297 = state;
(statearr_30286_30297[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30277){
var G__30278 = cljs.core.first(seq30277);
var seq30277__$1 = cljs.core.next(seq30277);
var G__30279 = cljs.core.first(seq30277__$1);
var seq30277__$2 = cljs.core.next(seq30277__$1);
var G__30280 = cljs.core.first(seq30277__$2);
var seq30277__$3 = cljs.core.next(seq30277__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30278,G__30279,G__30280,seq30277__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30299 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30300){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30300 = meta30300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30301,meta30300__$1){
var self__ = this;
var _30301__$1 = this;
return (new cljs.core.async.t_cljs$core$async30299(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30300__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30301){
var self__ = this;
var _30301__$1 = this;
return self__.meta30300;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async30299.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30299.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta30300], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30299";

cljs.core.async.t_cljs$core$async30299.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async30299");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30299 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30299(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30300){
return (new cljs.core.async.t_cljs$core$async30299(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30300));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30299(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28612__auto___30499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30406){
var state_val_30407 = (state_30406[(1)]);
if((state_val_30407 === (7))){
var inst_30321 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30408_30500 = state_30406__$1;
(statearr_30408_30500[(2)] = inst_30321);

(statearr_30408_30500[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (20))){
var inst_30333 = (state_30406[(7)]);
var state_30406__$1 = state_30406;
var statearr_30412_30502 = state_30406__$1;
(statearr_30412_30502[(2)] = inst_30333);

(statearr_30412_30502[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (27))){
var state_30406__$1 = state_30406;
var statearr_30413_30504 = state_30406__$1;
(statearr_30413_30504[(2)] = null);

(statearr_30413_30504[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (1))){
var inst_30308 = (state_30406[(8)]);
var inst_30308__$1 = calc_state();
var inst_30310 = (inst_30308__$1 == null);
var inst_30311 = cljs.core.not(inst_30310);
var state_30406__$1 = (function (){var statearr_30414 = state_30406;
(statearr_30414[(8)] = inst_30308__$1);

return statearr_30414;
})();
if(inst_30311){
var statearr_30415_30510 = state_30406__$1;
(statearr_30415_30510[(1)] = (2));

} else {
var statearr_30416_30511 = state_30406__$1;
(statearr_30416_30511[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (24))){
var inst_30380 = (state_30406[(9)]);
var inst_30357 = (state_30406[(10)]);
var inst_30366 = (state_30406[(11)]);
var inst_30380__$1 = (inst_30357.cljs$core$IFn$_invoke$arity$1 ? inst_30357.cljs$core$IFn$_invoke$arity$1(inst_30366) : inst_30357.call(null,inst_30366));
var state_30406__$1 = (function (){var statearr_30417 = state_30406;
(statearr_30417[(9)] = inst_30380__$1);

return statearr_30417;
})();
if(cljs.core.truth_(inst_30380__$1)){
var statearr_30418_30512 = state_30406__$1;
(statearr_30418_30512[(1)] = (29));

} else {
var statearr_30419_30513 = state_30406__$1;
(statearr_30419_30513[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (4))){
var inst_30324 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30324)){
var statearr_30422_30514 = state_30406__$1;
(statearr_30422_30514[(1)] = (8));

} else {
var statearr_30423_30515 = state_30406__$1;
(statearr_30423_30515[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (15))){
var inst_30351 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30351)){
var statearr_30426_30516 = state_30406__$1;
(statearr_30426_30516[(1)] = (19));

} else {
var statearr_30427_30518 = state_30406__$1;
(statearr_30427_30518[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (21))){
var inst_30356 = (state_30406[(12)]);
var inst_30356__$1 = (state_30406[(2)]);
var inst_30357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30356__$1,cljs.core.cst$kw$solos);
var inst_30358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30356__$1,cljs.core.cst$kw$mutes);
var inst_30359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30356__$1,cljs.core.cst$kw$reads);
var state_30406__$1 = (function (){var statearr_30428 = state_30406;
(statearr_30428[(12)] = inst_30356__$1);

(statearr_30428[(10)] = inst_30357);

(statearr_30428[(13)] = inst_30358);

return statearr_30428;
})();
return cljs.core.async.ioc_alts_BANG_(state_30406__$1,(22),inst_30359);
} else {
if((state_val_30407 === (31))){
var inst_30388 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30388)){
var statearr_30429_30519 = state_30406__$1;
(statearr_30429_30519[(1)] = (32));

} else {
var statearr_30430_30520 = state_30406__$1;
(statearr_30430_30520[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (32))){
var inst_30365 = (state_30406[(14)]);
var state_30406__$1 = state_30406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30406__$1,(35),out,inst_30365);
} else {
if((state_val_30407 === (33))){
var inst_30356 = (state_30406[(12)]);
var inst_30333 = inst_30356;
var state_30406__$1 = (function (){var statearr_30431 = state_30406;
(statearr_30431[(7)] = inst_30333);

return statearr_30431;
})();
var statearr_30432_30521 = state_30406__$1;
(statearr_30432_30521[(2)] = null);

(statearr_30432_30521[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (13))){
var inst_30333 = (state_30406[(7)]);
var inst_30340 = inst_30333.cljs$lang$protocol_mask$partition0$;
var inst_30341 = (inst_30340 & (64));
var inst_30342 = inst_30333.cljs$core$ISeq$;
var inst_30343 = (cljs.core.PROTOCOL_SENTINEL === inst_30342);
var inst_30344 = (inst_30341) || (inst_30343);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30344)){
var statearr_30433_30522 = state_30406__$1;
(statearr_30433_30522[(1)] = (16));

} else {
var statearr_30434_30525 = state_30406__$1;
(statearr_30434_30525[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (22))){
var inst_30365 = (state_30406[(14)]);
var inst_30366 = (state_30406[(11)]);
var inst_30364 = (state_30406[(2)]);
var inst_30365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30364,(0),null);
var inst_30366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30364,(1),null);
var inst_30367 = (inst_30365__$1 == null);
var inst_30368 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30366__$1,change);
var inst_30369 = (inst_30367) || (inst_30368);
var state_30406__$1 = (function (){var statearr_30435 = state_30406;
(statearr_30435[(14)] = inst_30365__$1);

(statearr_30435[(11)] = inst_30366__$1);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30369)){
var statearr_30436_30534 = state_30406__$1;
(statearr_30436_30534[(1)] = (23));

} else {
var statearr_30437_30535 = state_30406__$1;
(statearr_30437_30535[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (36))){
var inst_30356 = (state_30406[(12)]);
var inst_30333 = inst_30356;
var state_30406__$1 = (function (){var statearr_30438 = state_30406;
(statearr_30438[(7)] = inst_30333);

return statearr_30438;
})();
var statearr_30439_30551 = state_30406__$1;
(statearr_30439_30551[(2)] = null);

(statearr_30439_30551[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (29))){
var inst_30380 = (state_30406[(9)]);
var state_30406__$1 = state_30406;
var statearr_30440_30552 = state_30406__$1;
(statearr_30440_30552[(2)] = inst_30380);

(statearr_30440_30552[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (6))){
var state_30406__$1 = state_30406;
var statearr_30441_30553 = state_30406__$1;
(statearr_30441_30553[(2)] = false);

(statearr_30441_30553[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (28))){
var inst_30376 = (state_30406[(2)]);
var inst_30377 = calc_state();
var inst_30333 = inst_30377;
var state_30406__$1 = (function (){var statearr_30443 = state_30406;
(statearr_30443[(15)] = inst_30376);

(statearr_30443[(7)] = inst_30333);

return statearr_30443;
})();
var statearr_30444_30554 = state_30406__$1;
(statearr_30444_30554[(2)] = null);

(statearr_30444_30554[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (25))){
var inst_30402 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30450_30556 = state_30406__$1;
(statearr_30450_30556[(2)] = inst_30402);

(statearr_30450_30556[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (34))){
var inst_30400 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30451_30557 = state_30406__$1;
(statearr_30451_30557[(2)] = inst_30400);

(statearr_30451_30557[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (17))){
var state_30406__$1 = state_30406;
var statearr_30452_30558 = state_30406__$1;
(statearr_30452_30558[(2)] = false);

(statearr_30452_30558[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (3))){
var state_30406__$1 = state_30406;
var statearr_30453_30559 = state_30406__$1;
(statearr_30453_30559[(2)] = false);

(statearr_30453_30559[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (12))){
var inst_30404 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30406__$1,inst_30404);
} else {
if((state_val_30407 === (2))){
var inst_30308 = (state_30406[(8)]);
var inst_30313 = inst_30308.cljs$lang$protocol_mask$partition0$;
var inst_30314 = (inst_30313 & (64));
var inst_30315 = inst_30308.cljs$core$ISeq$;
var inst_30316 = (cljs.core.PROTOCOL_SENTINEL === inst_30315);
var inst_30317 = (inst_30314) || (inst_30316);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30317)){
var statearr_30454_30560 = state_30406__$1;
(statearr_30454_30560[(1)] = (5));

} else {
var statearr_30456_30561 = state_30406__$1;
(statearr_30456_30561[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (23))){
var inst_30365 = (state_30406[(14)]);
var inst_30371 = (inst_30365 == null);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30371)){
var statearr_30457_30562 = state_30406__$1;
(statearr_30457_30562[(1)] = (26));

} else {
var statearr_30458_30563 = state_30406__$1;
(statearr_30458_30563[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (35))){
var inst_30391 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
if(cljs.core.truth_(inst_30391)){
var statearr_30462_30564 = state_30406__$1;
(statearr_30462_30564[(1)] = (36));

} else {
var statearr_30463_30565 = state_30406__$1;
(statearr_30463_30565[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (19))){
var inst_30333 = (state_30406[(7)]);
var inst_30353 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30333);
var state_30406__$1 = state_30406;
var statearr_30464_30567 = state_30406__$1;
(statearr_30464_30567[(2)] = inst_30353);

(statearr_30464_30567[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (11))){
var inst_30333 = (state_30406[(7)]);
var inst_30337 = (inst_30333 == null);
var inst_30338 = cljs.core.not(inst_30337);
var state_30406__$1 = state_30406;
if(inst_30338){
var statearr_30465_30568 = state_30406__$1;
(statearr_30465_30568[(1)] = (13));

} else {
var statearr_30466_30569 = state_30406__$1;
(statearr_30466_30569[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (9))){
var inst_30308 = (state_30406[(8)]);
var state_30406__$1 = state_30406;
var statearr_30467_30575 = state_30406__$1;
(statearr_30467_30575[(2)] = inst_30308);

(statearr_30467_30575[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (5))){
var state_30406__$1 = state_30406;
var statearr_30469_30577 = state_30406__$1;
(statearr_30469_30577[(2)] = true);

(statearr_30469_30577[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (14))){
var state_30406__$1 = state_30406;
var statearr_30470_30578 = state_30406__$1;
(statearr_30470_30578[(2)] = false);

(statearr_30470_30578[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (26))){
var inst_30366 = (state_30406[(11)]);
var inst_30373 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30366);
var state_30406__$1 = state_30406;
var statearr_30471_30579 = state_30406__$1;
(statearr_30471_30579[(2)] = inst_30373);

(statearr_30471_30579[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (16))){
var state_30406__$1 = state_30406;
var statearr_30472_30580 = state_30406__$1;
(statearr_30472_30580[(2)] = true);

(statearr_30472_30580[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (38))){
var inst_30396 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30473_30581 = state_30406__$1;
(statearr_30473_30581[(2)] = inst_30396);

(statearr_30473_30581[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (30))){
var inst_30357 = (state_30406[(10)]);
var inst_30358 = (state_30406[(13)]);
var inst_30366 = (state_30406[(11)]);
var inst_30383 = cljs.core.empty_QMARK_(inst_30357);
var inst_30384 = (inst_30358.cljs$core$IFn$_invoke$arity$1 ? inst_30358.cljs$core$IFn$_invoke$arity$1(inst_30366) : inst_30358.call(null,inst_30366));
var inst_30385 = cljs.core.not(inst_30384);
var inst_30386 = (inst_30383) && (inst_30385);
var state_30406__$1 = state_30406;
var statearr_30476_30582 = state_30406__$1;
(statearr_30476_30582[(2)] = inst_30386);

(statearr_30476_30582[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (10))){
var inst_30308 = (state_30406[(8)]);
var inst_30329 = (state_30406[(2)]);
var inst_30330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30329,cljs.core.cst$kw$solos);
var inst_30331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30329,cljs.core.cst$kw$mutes);
var inst_30332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30329,cljs.core.cst$kw$reads);
var inst_30333 = inst_30308;
var state_30406__$1 = (function (){var statearr_30477 = state_30406;
(statearr_30477[(16)] = inst_30330);

(statearr_30477[(7)] = inst_30333);

(statearr_30477[(17)] = inst_30332);

(statearr_30477[(18)] = inst_30331);

return statearr_30477;
})();
var statearr_30478_30583 = state_30406__$1;
(statearr_30478_30583[(2)] = null);

(statearr_30478_30583[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (18))){
var inst_30348 = (state_30406[(2)]);
var state_30406__$1 = state_30406;
var statearr_30479_30584 = state_30406__$1;
(statearr_30479_30584[(2)] = inst_30348);

(statearr_30479_30584[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (37))){
var state_30406__$1 = state_30406;
var statearr_30480_30585 = state_30406__$1;
(statearr_30480_30585[(2)] = null);

(statearr_30480_30585[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30407 === (8))){
var inst_30308 = (state_30406[(8)]);
var inst_30326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30308);
var state_30406__$1 = state_30406;
var statearr_30482_30586 = state_30406__$1;
(statearr_30482_30586[(2)] = inst_30326);

(statearr_30482_30586[(1)] = (10));


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
});})(c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24124__auto__,c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24125__auto__ = null;
var cljs$core$async$mix_$_state_machine__24125__auto____0 = (function (){
var statearr_30486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30486[(0)] = cljs$core$async$mix_$_state_machine__24125__auto__);

(statearr_30486[(1)] = (1));

return statearr_30486;
});
var cljs$core$async$mix_$_state_machine__24125__auto____1 = (function (state_30406){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_30406);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e30487){if((e30487 instanceof Object)){
var ex__24128__auto__ = e30487;
var statearr_30488_30589 = state_30406;
(statearr_30488_30589[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30406);

return cljs.core.cst$kw$recur;
} else {
throw e30487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__30590 = state_30406;
state_30406 = G__30590;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24125__auto__ = function(state_30406){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24125__auto____1.call(this,state_30406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24125__auto____0;
cljs$core$async$mix_$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24125__auto____1;
return cljs$core$async$mix_$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28614__auto__ = (function (){var statearr_30492 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_30492[(6)] = c__28612__auto___30499);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___30499,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__30624 = arguments.length;
switch (G__30624) {
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
var G__30650 = arguments.length;
switch (G__30650) {
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
return (function (p1__30641_SHARP_){
if(cljs.core.truth_((p1__30641_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30641_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30641_SHARP_.call(null,topic)))){
return p1__30641_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30641_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10412__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30654 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30655){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30655 = meta30655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30656,meta30655__$1){
var self__ = this;
var _30656__$1 = this;
return (new cljs.core.async.t_cljs$core$async30654(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30655__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30656){
var self__ = this;
var _30656__$1 = this;
return self__.meta30655;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async30654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30654.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta30655], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30654";

cljs.core.async.t_cljs$core$async30654.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async30654");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30654 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30655){
return (new cljs.core.async.t_cljs$core$async30654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30655));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30654(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28612__auto___30836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___30836,mults,ensure_mult,p){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___30836,mults,ensure_mult,p){
return (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30731 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30738_30839 = state_30735__$1;
(statearr_30738_30839[(2)] = inst_30731);

(statearr_30738_30839[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (20))){
var state_30735__$1 = state_30735;
var statearr_30740_30841 = state_30735__$1;
(statearr_30740_30841[(2)] = null);

(statearr_30740_30841[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (1))){
var state_30735__$1 = state_30735;
var statearr_30749_30845 = state_30735__$1;
(statearr_30749_30845[(2)] = null);

(statearr_30749_30845[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (24))){
var inst_30714 = (state_30735[(7)]);
var inst_30723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30714);
var state_30735__$1 = state_30735;
var statearr_30753_30847 = state_30735__$1;
(statearr_30753_30847[(2)] = inst_30723);

(statearr_30753_30847[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (4))){
var inst_30666 = (state_30735[(8)]);
var inst_30666__$1 = (state_30735[(2)]);
var inst_30667 = (inst_30666__$1 == null);
var state_30735__$1 = (function (){var statearr_30754 = state_30735;
(statearr_30754[(8)] = inst_30666__$1);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30667)){
var statearr_30756_30848 = state_30735__$1;
(statearr_30756_30848[(1)] = (5));

} else {
var statearr_30757_30849 = state_30735__$1;
(statearr_30757_30849[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (15))){
var inst_30708 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30758_30850 = state_30735__$1;
(statearr_30758_30850[(2)] = inst_30708);

(statearr_30758_30850[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (21))){
var inst_30728 = (state_30735[(2)]);
var state_30735__$1 = (function (){var statearr_30759 = state_30735;
(statearr_30759[(9)] = inst_30728);

return statearr_30759;
})();
var statearr_30769_30851 = state_30735__$1;
(statearr_30769_30851[(2)] = null);

(statearr_30769_30851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (13))){
var inst_30690 = (state_30735[(10)]);
var inst_30692 = cljs.core.chunked_seq_QMARK_(inst_30690);
var state_30735__$1 = state_30735;
if(inst_30692){
var statearr_30770_30852 = state_30735__$1;
(statearr_30770_30852[(1)] = (16));

} else {
var statearr_30771_30853 = state_30735__$1;
(statearr_30771_30853[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (22))){
var inst_30720 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30720)){
var statearr_30772_30854 = state_30735__$1;
(statearr_30772_30854[(1)] = (23));

} else {
var statearr_30773_30855 = state_30735__$1;
(statearr_30773_30855[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (6))){
var inst_30666 = (state_30735[(8)]);
var inst_30714 = (state_30735[(7)]);
var inst_30716 = (state_30735[(11)]);
var inst_30714__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30666) : topic_fn.call(null,inst_30666));
var inst_30715 = cljs.core.deref(mults);
var inst_30716__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30715,inst_30714__$1);
var state_30735__$1 = (function (){var statearr_30774 = state_30735;
(statearr_30774[(7)] = inst_30714__$1);

(statearr_30774[(11)] = inst_30716__$1);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30716__$1)){
var statearr_30775_30861 = state_30735__$1;
(statearr_30775_30861[(1)] = (19));

} else {
var statearr_30776_30862 = state_30735__$1;
(statearr_30776_30862[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (25))){
var inst_30725 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30777_30863 = state_30735__$1;
(statearr_30777_30863[(2)] = inst_30725);

(statearr_30777_30863[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (17))){
var inst_30690 = (state_30735[(10)]);
var inst_30699 = cljs.core.first(inst_30690);
var inst_30700 = cljs.core.async.muxch_STAR_(inst_30699);
var inst_30701 = cljs.core.async.close_BANG_(inst_30700);
var inst_30702 = cljs.core.next(inst_30690);
var inst_30676 = inst_30702;
var inst_30677 = null;
var inst_30678 = (0);
var inst_30679 = (0);
var state_30735__$1 = (function (){var statearr_30778 = state_30735;
(statearr_30778[(12)] = inst_30677);

(statearr_30778[(13)] = inst_30678);

(statearr_30778[(14)] = inst_30676);

(statearr_30778[(15)] = inst_30701);

(statearr_30778[(16)] = inst_30679);

return statearr_30778;
})();
var statearr_30779_30868 = state_30735__$1;
(statearr_30779_30868[(2)] = null);

(statearr_30779_30868[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (3))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (12))){
var inst_30710 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30780_30879 = state_30735__$1;
(statearr_30780_30879[(2)] = inst_30710);

(statearr_30780_30879[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (2))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30735__$1,(4),ch);
} else {
if((state_val_30736 === (23))){
var state_30735__$1 = state_30735;
var statearr_30781_30881 = state_30735__$1;
(statearr_30781_30881[(2)] = null);

(statearr_30781_30881[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (19))){
var inst_30666 = (state_30735[(8)]);
var inst_30716 = (state_30735[(11)]);
var inst_30718 = cljs.core.async.muxch_STAR_(inst_30716);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30735__$1,(22),inst_30718,inst_30666);
} else {
if((state_val_30736 === (11))){
var inst_30676 = (state_30735[(14)]);
var inst_30690 = (state_30735[(10)]);
var inst_30690__$1 = cljs.core.seq(inst_30676);
var state_30735__$1 = (function (){var statearr_30782 = state_30735;
(statearr_30782[(10)] = inst_30690__$1);

return statearr_30782;
})();
if(inst_30690__$1){
var statearr_30783_30884 = state_30735__$1;
(statearr_30783_30884[(1)] = (13));

} else {
var statearr_30784_30887 = state_30735__$1;
(statearr_30784_30887[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (9))){
var inst_30712 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30785_30888 = state_30735__$1;
(statearr_30785_30888[(2)] = inst_30712);

(statearr_30785_30888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (5))){
var inst_30673 = cljs.core.deref(mults);
var inst_30674 = cljs.core.vals(inst_30673);
var inst_30675 = cljs.core.seq(inst_30674);
var inst_30676 = inst_30675;
var inst_30677 = null;
var inst_30678 = (0);
var inst_30679 = (0);
var state_30735__$1 = (function (){var statearr_30788 = state_30735;
(statearr_30788[(12)] = inst_30677);

(statearr_30788[(13)] = inst_30678);

(statearr_30788[(14)] = inst_30676);

(statearr_30788[(16)] = inst_30679);

return statearr_30788;
})();
var statearr_30791_30891 = state_30735__$1;
(statearr_30791_30891[(2)] = null);

(statearr_30791_30891[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (14))){
var state_30735__$1 = state_30735;
var statearr_30803_30895 = state_30735__$1;
(statearr_30803_30895[(2)] = null);

(statearr_30803_30895[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (16))){
var inst_30690 = (state_30735[(10)]);
var inst_30694 = cljs.core.chunk_first(inst_30690);
var inst_30695 = cljs.core.chunk_rest(inst_30690);
var inst_30696 = cljs.core.count(inst_30694);
var inst_30676 = inst_30695;
var inst_30677 = inst_30694;
var inst_30678 = inst_30696;
var inst_30679 = (0);
var state_30735__$1 = (function (){var statearr_30805 = state_30735;
(statearr_30805[(12)] = inst_30677);

(statearr_30805[(13)] = inst_30678);

(statearr_30805[(14)] = inst_30676);

(statearr_30805[(16)] = inst_30679);

return statearr_30805;
})();
var statearr_30806_30900 = state_30735__$1;
(statearr_30806_30900[(2)] = null);

(statearr_30806_30900[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (10))){
var inst_30677 = (state_30735[(12)]);
var inst_30678 = (state_30735[(13)]);
var inst_30676 = (state_30735[(14)]);
var inst_30679 = (state_30735[(16)]);
var inst_30684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30677,inst_30679);
var inst_30685 = cljs.core.async.muxch_STAR_(inst_30684);
var inst_30686 = cljs.core.async.close_BANG_(inst_30685);
var inst_30687 = (inst_30679 + (1));
var tmp30799 = inst_30677;
var tmp30800 = inst_30678;
var tmp30801 = inst_30676;
var inst_30676__$1 = tmp30801;
var inst_30677__$1 = tmp30799;
var inst_30678__$1 = tmp30800;
var inst_30679__$1 = inst_30687;
var state_30735__$1 = (function (){var statearr_30812 = state_30735;
(statearr_30812[(12)] = inst_30677__$1);

(statearr_30812[(13)] = inst_30678__$1);

(statearr_30812[(14)] = inst_30676__$1);

(statearr_30812[(16)] = inst_30679__$1);

(statearr_30812[(17)] = inst_30686);

return statearr_30812;
})();
var statearr_30813_30901 = state_30735__$1;
(statearr_30813_30901[(2)] = null);

(statearr_30813_30901[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (18))){
var inst_30705 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30814_30902 = state_30735__$1;
(statearr_30814_30902[(2)] = inst_30705);

(statearr_30814_30902[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30736 === (8))){
var inst_30678 = (state_30735[(13)]);
var inst_30679 = (state_30735[(16)]);
var inst_30681 = (inst_30679 < inst_30678);
var inst_30682 = inst_30681;
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30682)){
var statearr_30817_30903 = state_30735__$1;
(statearr_30817_30903[(1)] = (10));

} else {
var statearr_30821_30904 = state_30735__$1;
(statearr_30821_30904[(1)] = (11));

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
});})(c__28612__auto___30836,mults,ensure_mult,p))
;
return ((function (switch__24124__auto__,c__28612__auto___30836,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_30824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30824[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_30824[(1)] = (1));

return statearr_30824;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_30735){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_30735);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e30825){if((e30825 instanceof Object)){
var ex__24128__auto__ = e30825;
var statearr_30826_30908 = state_30735;
(statearr_30826_30908[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30735);

return cljs.core.cst$kw$recur;
} else {
throw e30825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__30912 = state_30735;
state_30735 = G__30912;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___30836,mults,ensure_mult,p))
})();
var state__28614__auto__ = (function (){var statearr_30827 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_30827[(6)] = c__28612__auto___30836);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___30836,mults,ensure_mult,p))
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
var G__30916 = arguments.length;
switch (G__30916) {
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
var G__30920 = arguments.length;
switch (G__30920) {
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
var G__30928 = arguments.length;
switch (G__30928) {
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
var c__28612__auto___31039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30976){
var state_val_30977 = (state_30976[(1)]);
if((state_val_30977 === (7))){
var state_30976__$1 = state_30976;
var statearr_30978_31040 = state_30976__$1;
(statearr_30978_31040[(2)] = null);

(statearr_30978_31040[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (1))){
var state_30976__$1 = state_30976;
var statearr_30980_31041 = state_30976__$1;
(statearr_30980_31041[(2)] = null);

(statearr_30980_31041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (4))){
var inst_30935 = (state_30976[(7)]);
var inst_30937 = (inst_30935 < cnt);
var state_30976__$1 = state_30976;
if(cljs.core.truth_(inst_30937)){
var statearr_30981_31042 = state_30976__$1;
(statearr_30981_31042[(1)] = (6));

} else {
var statearr_30982_31043 = state_30976__$1;
(statearr_30982_31043[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (15))){
var inst_30972 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_30983_31044 = state_30976__$1;
(statearr_30983_31044[(2)] = inst_30972);

(statearr_30983_31044[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (13))){
var inst_30965 = cljs.core.async.close_BANG_(out);
var state_30976__$1 = state_30976;
var statearr_30990_31045 = state_30976__$1;
(statearr_30990_31045[(2)] = inst_30965);

(statearr_30990_31045[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (6))){
var state_30976__$1 = state_30976;
var statearr_30996_31046 = state_30976__$1;
(statearr_30996_31046[(2)] = null);

(statearr_30996_31046[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (3))){
var inst_30974 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30976__$1,inst_30974);
} else {
if((state_val_30977 === (12))){
var inst_30962 = (state_30976[(8)]);
var inst_30962__$1 = (state_30976[(2)]);
var inst_30963 = cljs.core.some(cljs.core.nil_QMARK_,inst_30962__$1);
var state_30976__$1 = (function (){var statearr_31010 = state_30976;
(statearr_31010[(8)] = inst_30962__$1);

return statearr_31010;
})();
if(cljs.core.truth_(inst_30963)){
var statearr_31011_31047 = state_30976__$1;
(statearr_31011_31047[(1)] = (13));

} else {
var statearr_31012_31048 = state_30976__$1;
(statearr_31012_31048[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (2))){
var inst_30932 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30935 = (0);
var state_30976__$1 = (function (){var statearr_31019 = state_30976;
(statearr_31019[(7)] = inst_30935);

(statearr_31019[(9)] = inst_30932);

return statearr_31019;
})();
var statearr_31020_31049 = state_30976__$1;
(statearr_31020_31049[(2)] = null);

(statearr_31020_31049[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (11))){
var inst_30935 = (state_30976[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30976,(10),Object,null,(9));
var inst_30949 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30935) : chs__$1.call(null,inst_30935));
var inst_30950 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30935) : done.call(null,inst_30935));
var inst_30951 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30949,inst_30950);
var state_30976__$1 = state_30976;
var statearr_31021_31050 = state_30976__$1;
(statearr_31021_31050[(2)] = inst_30951);


cljs.core.async.impl.ioc_helpers.process_exception(state_30976__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (9))){
var inst_30935 = (state_30976[(7)]);
var inst_30953 = (state_30976[(2)]);
var inst_30954 = (inst_30935 + (1));
var inst_30935__$1 = inst_30954;
var state_30976__$1 = (function (){var statearr_31022 = state_30976;
(statearr_31022[(7)] = inst_30935__$1);

(statearr_31022[(10)] = inst_30953);

return statearr_31022;
})();
var statearr_31023_31051 = state_30976__$1;
(statearr_31023_31051[(2)] = null);

(statearr_31023_31051[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (5))){
var inst_30960 = (state_30976[(2)]);
var state_30976__$1 = (function (){var statearr_31024 = state_30976;
(statearr_31024[(11)] = inst_30960);

return statearr_31024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30976__$1,(12),dchan);
} else {
if((state_val_30977 === (14))){
var inst_30962 = (state_30976[(8)]);
var inst_30967 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30962);
var state_30976__$1 = state_30976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30976__$1,(16),out,inst_30967);
} else {
if((state_val_30977 === (16))){
var inst_30969 = (state_30976[(2)]);
var state_30976__$1 = (function (){var statearr_31025 = state_30976;
(statearr_31025[(12)] = inst_30969);

return statearr_31025;
})();
var statearr_31026_31055 = state_30976__$1;
(statearr_31026_31055[(2)] = null);

(statearr_31026_31055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (10))){
var inst_30943 = (state_30976[(2)]);
var inst_30944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30976__$1 = (function (){var statearr_31030 = state_30976;
(statearr_31030[(13)] = inst_30943);

return statearr_31030;
})();
var statearr_31031_31056 = state_30976__$1;
(statearr_31031_31056[(2)] = inst_30944);


cljs.core.async.impl.ioc_helpers.process_exception(state_30976__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30977 === (8))){
var inst_30958 = (state_30976[(2)]);
var state_30976__$1 = state_30976;
var statearr_31032_31057 = state_30976__$1;
(statearr_31032_31057[(2)] = inst_30958);

(statearr_31032_31057[(1)] = (5));


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
});})(c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24124__auto__,c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31033[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31033[(1)] = (1));

return statearr_31033;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_30976){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_30976);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31034){if((e31034 instanceof Object)){
var ex__24128__auto__ = e31034;
var statearr_31035_31073 = state_30976;
(statearr_31035_31073[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30976);

return cljs.core.cst$kw$recur;
} else {
throw e31034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31075 = state_30976;
state_30976 = G__31075;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_30976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_30976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28614__auto__ = (function (){var statearr_31036 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31036[(6)] = c__28612__auto___31039);

return statearr_31036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31039,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__31085 = arguments.length;
switch (G__31085) {
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
var c__28612__auto___31154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31154,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31154,out){
return (function (state_31124){
var state_val_31125 = (state_31124[(1)]);
if((state_val_31125 === (7))){
var inst_31102 = (state_31124[(7)]);
var inst_31101 = (state_31124[(8)]);
var inst_31101__$1 = (state_31124[(2)]);
var inst_31102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31101__$1,(0),null);
var inst_31103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31101__$1,(1),null);
var inst_31104 = (inst_31102__$1 == null);
var state_31124__$1 = (function (){var statearr_31128 = state_31124;
(statearr_31128[(9)] = inst_31103);

(statearr_31128[(7)] = inst_31102__$1);

(statearr_31128[(8)] = inst_31101__$1);

return statearr_31128;
})();
if(cljs.core.truth_(inst_31104)){
var statearr_31129_31158 = state_31124__$1;
(statearr_31129_31158[(1)] = (8));

} else {
var statearr_31130_31159 = state_31124__$1;
(statearr_31130_31159[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (1))){
var inst_31091 = cljs.core.vec(chs);
var inst_31092 = inst_31091;
var state_31124__$1 = (function (){var statearr_31131 = state_31124;
(statearr_31131[(10)] = inst_31092);

return statearr_31131;
})();
var statearr_31132_31160 = state_31124__$1;
(statearr_31132_31160[(2)] = null);

(statearr_31132_31160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (4))){
var inst_31092 = (state_31124[(10)]);
var state_31124__$1 = state_31124;
return cljs.core.async.ioc_alts_BANG_(state_31124__$1,(7),inst_31092);
} else {
if((state_val_31125 === (6))){
var inst_31119 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31133_31164 = state_31124__$1;
(statearr_31133_31164[(2)] = inst_31119);

(statearr_31133_31164[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (3))){
var inst_31121 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31124__$1,inst_31121);
} else {
if((state_val_31125 === (2))){
var inst_31092 = (state_31124[(10)]);
var inst_31094 = cljs.core.count(inst_31092);
var inst_31095 = (inst_31094 > (0));
var state_31124__$1 = state_31124;
if(cljs.core.truth_(inst_31095)){
var statearr_31136_31168 = state_31124__$1;
(statearr_31136_31168[(1)] = (4));

} else {
var statearr_31137_31169 = state_31124__$1;
(statearr_31137_31169[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (11))){
var inst_31092 = (state_31124[(10)]);
var inst_31111 = (state_31124[(2)]);
var tmp31135 = inst_31092;
var inst_31092__$1 = tmp31135;
var state_31124__$1 = (function (){var statearr_31138 = state_31124;
(statearr_31138[(10)] = inst_31092__$1);

(statearr_31138[(11)] = inst_31111);

return statearr_31138;
})();
var statearr_31139_31174 = state_31124__$1;
(statearr_31139_31174[(2)] = null);

(statearr_31139_31174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (9))){
var inst_31102 = (state_31124[(7)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31124__$1,(11),out,inst_31102);
} else {
if((state_val_31125 === (5))){
var inst_31116 = cljs.core.async.close_BANG_(out);
var state_31124__$1 = state_31124;
var statearr_31140_31175 = state_31124__$1;
(statearr_31140_31175[(2)] = inst_31116);

(statearr_31140_31175[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (10))){
var inst_31114 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31141_31176 = state_31124__$1;
(statearr_31141_31176[(2)] = inst_31114);

(statearr_31141_31176[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31125 === (8))){
var inst_31092 = (state_31124[(10)]);
var inst_31103 = (state_31124[(9)]);
var inst_31102 = (state_31124[(7)]);
var inst_31101 = (state_31124[(8)]);
var inst_31106 = (function (){var cs = inst_31092;
var vec__31097 = inst_31101;
var v = inst_31102;
var c = inst_31103;
return ((function (cs,vec__31097,v,c,inst_31092,inst_31103,inst_31102,inst_31101,state_val_31125,c__28612__auto___31154,out){
return (function (p1__31080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31080_SHARP_);
});
;})(cs,vec__31097,v,c,inst_31092,inst_31103,inst_31102,inst_31101,state_val_31125,c__28612__auto___31154,out))
})();
var inst_31107 = cljs.core.filterv(inst_31106,inst_31092);
var inst_31092__$1 = inst_31107;
var state_31124__$1 = (function (){var statearr_31142 = state_31124;
(statearr_31142[(10)] = inst_31092__$1);

return statearr_31142;
})();
var statearr_31143_31187 = state_31124__$1;
(statearr_31143_31187[(2)] = null);

(statearr_31143_31187[(1)] = (2));


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
});})(c__28612__auto___31154,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31154,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31144[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31144[(1)] = (1));

return statearr_31144;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31124){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31124);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31145){if((e31145 instanceof Object)){
var ex__24128__auto__ = e31145;
var statearr_31146_31191 = state_31124;
(statearr_31146_31191[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31124);

return cljs.core.cst$kw$recur;
} else {
throw e31145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31192 = state_31124;
state_31124 = G__31192;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31154,out))
})();
var state__28614__auto__ = (function (){var statearr_31148 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31148[(6)] = c__28612__auto___31154);

return statearr_31148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31154,out))
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
var G__31197 = arguments.length;
switch (G__31197) {
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
var c__28612__auto___31249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31249,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31249,out){
return (function (state_31224){
var state_val_31225 = (state_31224[(1)]);
if((state_val_31225 === (7))){
var inst_31203 = (state_31224[(7)]);
var inst_31203__$1 = (state_31224[(2)]);
var inst_31207 = (inst_31203__$1 == null);
var inst_31208 = cljs.core.not(inst_31207);
var state_31224__$1 = (function (){var statearr_31229 = state_31224;
(statearr_31229[(7)] = inst_31203__$1);

return statearr_31229;
})();
if(inst_31208){
var statearr_31230_31250 = state_31224__$1;
(statearr_31230_31250[(1)] = (8));

} else {
var statearr_31231_31251 = state_31224__$1;
(statearr_31231_31251[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (1))){
var inst_31198 = (0);
var state_31224__$1 = (function (){var statearr_31232 = state_31224;
(statearr_31232[(8)] = inst_31198);

return statearr_31232;
})();
var statearr_31233_31252 = state_31224__$1;
(statearr_31233_31252[(2)] = null);

(statearr_31233_31252[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (4))){
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31224__$1,(7),ch);
} else {
if((state_val_31225 === (6))){
var inst_31219 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31234_31253 = state_31224__$1;
(statearr_31234_31253[(2)] = inst_31219);

(statearr_31234_31253[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (3))){
var inst_31221 = (state_31224[(2)]);
var inst_31222 = cljs.core.async.close_BANG_(out);
var state_31224__$1 = (function (){var statearr_31235 = state_31224;
(statearr_31235[(9)] = inst_31221);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31224__$1,inst_31222);
} else {
if((state_val_31225 === (2))){
var inst_31198 = (state_31224[(8)]);
var inst_31200 = (inst_31198 < n);
var state_31224__$1 = state_31224;
if(cljs.core.truth_(inst_31200)){
var statearr_31236_31254 = state_31224__$1;
(statearr_31236_31254[(1)] = (4));

} else {
var statearr_31237_31255 = state_31224__$1;
(statearr_31237_31255[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (11))){
var inst_31198 = (state_31224[(8)]);
var inst_31211 = (state_31224[(2)]);
var inst_31212 = (inst_31198 + (1));
var inst_31198__$1 = inst_31212;
var state_31224__$1 = (function (){var statearr_31239 = state_31224;
(statearr_31239[(8)] = inst_31198__$1);

(statearr_31239[(10)] = inst_31211);

return statearr_31239;
})();
var statearr_31240_31256 = state_31224__$1;
(statearr_31240_31256[(2)] = null);

(statearr_31240_31256[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (9))){
var state_31224__$1 = state_31224;
var statearr_31241_31257 = state_31224__$1;
(statearr_31241_31257[(2)] = null);

(statearr_31241_31257[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (5))){
var state_31224__$1 = state_31224;
var statearr_31242_31258 = state_31224__$1;
(statearr_31242_31258[(2)] = null);

(statearr_31242_31258[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (10))){
var inst_31216 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31243_31259 = state_31224__$1;
(statearr_31243_31259[(2)] = inst_31216);

(statearr_31243_31259[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31225 === (8))){
var inst_31203 = (state_31224[(7)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31224__$1,(11),out,inst_31203);
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
});})(c__28612__auto___31249,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31249,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31244 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31244[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31244[(1)] = (1));

return statearr_31244;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31224){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31224);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31245){if((e31245 instanceof Object)){
var ex__24128__auto__ = e31245;
var statearr_31246_31264 = state_31224;
(statearr_31246_31264[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31224);

return cljs.core.cst$kw$recur;
} else {
throw e31245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31265 = state_31224;
state_31224 = G__31265;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31249,out))
})();
var state__28614__auto__ = (function (){var statearr_31247 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31247[(6)] = c__28612__auto___31249);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31249,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31267 = (function (f,ch,meta31268){
this.f = f;
this.ch = ch;
this.meta31268 = meta31268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31269,meta31268__$1){
var self__ = this;
var _31269__$1 = this;
return (new cljs.core.async.t_cljs$core$async31267(self__.f,self__.ch,meta31268__$1));
});


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31269){
var self__ = this;
var _31269__$1 = this;
return self__.meta31268;
});


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31273 = (function (f,ch,meta31268,_,fn1,meta31274){
this.f = f;
this.ch = ch;
this.meta31268 = meta31268;
this._ = _;
this.fn1 = fn1;
this.meta31274 = meta31274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31275,meta31274__$1){
var self__ = this;
var _31275__$1 = this;
return (new cljs.core.async.t_cljs$core$async31273(self__.f,self__.ch,self__.meta31268,self__._,self__.fn1,meta31274__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31275){
var self__ = this;
var _31275__$1 = this;
return self__.meta31274;
});})(___$1))
;


cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async31273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31266_SHARP_){
var G__31277 = (((p1__31266_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31266_SHARP_) : self__.f.call(null,p1__31266_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31277) : f1.call(null,G__31277));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31273.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31268,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async31267], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta31274], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31273";

cljs.core.async.t_cljs$core$async31273.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async31273");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31273 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31273(f__$1,ch__$1,meta31268__$1,___$2,fn1__$1,meta31274){
return (new cljs.core.async.t_cljs$core$async31273(f__$1,ch__$1,meta31268__$1,___$2,fn1__$1,meta31274));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31273(self__.f,self__.ch,self__.meta31268,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10400__auto__ = ret;
if(cljs.core.truth_(and__10400__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__10400__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31278 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31278) : self__.f.call(null,G__31278));
})());
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31268], null);
});

cljs.core.async.t_cljs$core$async31267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31267";

cljs.core.async.t_cljs$core$async31267.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async31267");
});

cljs.core.async.__GT_t_cljs$core$async31267 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31267(f__$1,ch__$1,meta31268){
return (new cljs.core.async.t_cljs$core$async31267(f__$1,ch__$1,meta31268));
});

}

return (new cljs.core.async.t_cljs$core$async31267(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31281 = (function (f,ch,meta31282){
this.f = f;
this.ch = ch;
this.meta31282 = meta31282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31283,meta31282__$1){
var self__ = this;
var _31283__$1 = this;
return (new cljs.core.async.t_cljs$core$async31281(self__.f,self__.ch,meta31282__$1));
});


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31283){
var self__ = this;
var _31283__$1 = this;
return self__.meta31282;
});


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async31281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31282], null);
});

cljs.core.async.t_cljs$core$async31281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31281";

cljs.core.async.t_cljs$core$async31281.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async31281");
});

cljs.core.async.__GT_t_cljs$core$async31281 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31281(f__$1,ch__$1,meta31282){
return (new cljs.core.async.t_cljs$core$async31281(f__$1,ch__$1,meta31282));
});

}

return (new cljs.core.async.t_cljs$core$async31281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31291 = (function (p,ch,meta31292){
this.p = p;
this.ch = ch;
this.meta31292 = meta31292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31293,meta31292__$1){
var self__ = this;
var _31293__$1 = this;
return (new cljs.core.async.t_cljs$core$async31291(self__.p,self__.ch,meta31292__$1));
});


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31293){
var self__ = this;
var _31293__$1 = this;
return self__.meta31292;
});


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async31291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta31292], null);
});

cljs.core.async.t_cljs$core$async31291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31291";

cljs.core.async.t_cljs$core$async31291.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async/t_cljs$core$async31291");
});

cljs.core.async.__GT_t_cljs$core$async31291 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31291(p__$1,ch__$1,meta31292){
return (new cljs.core.async.t_cljs$core$async31291(p__$1,ch__$1,meta31292));
});

}

return (new cljs.core.async.t_cljs$core$async31291(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31302 = arguments.length;
switch (G__31302) {
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
var c__28612__auto___31343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31343,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31343,out){
return (function (state_31323){
var state_val_31324 = (state_31323[(1)]);
if((state_val_31324 === (7))){
var inst_31319 = (state_31323[(2)]);
var state_31323__$1 = state_31323;
var statearr_31326_31344 = state_31323__$1;
(statearr_31326_31344[(2)] = inst_31319);

(statearr_31326_31344[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (1))){
var state_31323__$1 = state_31323;
var statearr_31327_31345 = state_31323__$1;
(statearr_31327_31345[(2)] = null);

(statearr_31327_31345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (4))){
var inst_31305 = (state_31323[(7)]);
var inst_31305__$1 = (state_31323[(2)]);
var inst_31306 = (inst_31305__$1 == null);
var state_31323__$1 = (function (){var statearr_31328 = state_31323;
(statearr_31328[(7)] = inst_31305__$1);

return statearr_31328;
})();
if(cljs.core.truth_(inst_31306)){
var statearr_31329_31346 = state_31323__$1;
(statearr_31329_31346[(1)] = (5));

} else {
var statearr_31330_31347 = state_31323__$1;
(statearr_31330_31347[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (6))){
var inst_31305 = (state_31323[(7)]);
var inst_31310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31305) : p.call(null,inst_31305));
var state_31323__$1 = state_31323;
if(cljs.core.truth_(inst_31310)){
var statearr_31331_31351 = state_31323__$1;
(statearr_31331_31351[(1)] = (8));

} else {
var statearr_31332_31352 = state_31323__$1;
(statearr_31332_31352[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (3))){
var inst_31321 = (state_31323[(2)]);
var state_31323__$1 = state_31323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31323__$1,inst_31321);
} else {
if((state_val_31324 === (2))){
var state_31323__$1 = state_31323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31323__$1,(4),ch);
} else {
if((state_val_31324 === (11))){
var inst_31313 = (state_31323[(2)]);
var state_31323__$1 = state_31323;
var statearr_31333_31353 = state_31323__$1;
(statearr_31333_31353[(2)] = inst_31313);

(statearr_31333_31353[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (9))){
var state_31323__$1 = state_31323;
var statearr_31334_31354 = state_31323__$1;
(statearr_31334_31354[(2)] = null);

(statearr_31334_31354[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (5))){
var inst_31308 = cljs.core.async.close_BANG_(out);
var state_31323__$1 = state_31323;
var statearr_31335_31355 = state_31323__$1;
(statearr_31335_31355[(2)] = inst_31308);

(statearr_31335_31355[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (10))){
var inst_31316 = (state_31323[(2)]);
var state_31323__$1 = (function (){var statearr_31336 = state_31323;
(statearr_31336[(8)] = inst_31316);

return statearr_31336;
})();
var statearr_31337_31356 = state_31323__$1;
(statearr_31337_31356[(2)] = null);

(statearr_31337_31356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31324 === (8))){
var inst_31305 = (state_31323[(7)]);
var state_31323__$1 = state_31323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31323__$1,(11),out,inst_31305);
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
});})(c__28612__auto___31343,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31343,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31323){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31323);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__24128__auto__ = e31339;
var statearr_31340_31357 = state_31323;
(statearr_31340_31357[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31323);

return cljs.core.cst$kw$recur;
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31358 = state_31323;
state_31323 = G__31358;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31343,out))
})();
var state__28614__auto__ = (function (){var statearr_31341 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31341[(6)] = c__28612__auto___31343);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31343,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31360 = arguments.length;
switch (G__31360) {
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
var c__28612__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto__){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto__){
return (function (state_31423){
var state_val_31424 = (state_31423[(1)]);
if((state_val_31424 === (7))){
var inst_31419 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31425_31467 = state_31423__$1;
(statearr_31425_31467[(2)] = inst_31419);

(statearr_31425_31467[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (20))){
var inst_31389 = (state_31423[(7)]);
var inst_31400 = (state_31423[(2)]);
var inst_31401 = cljs.core.next(inst_31389);
var inst_31375 = inst_31401;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31423__$1 = (function (){var statearr_31426 = state_31423;
(statearr_31426[(8)] = inst_31375);

(statearr_31426[(9)] = inst_31378);

(statearr_31426[(10)] = inst_31376);

(statearr_31426[(11)] = inst_31377);

(statearr_31426[(12)] = inst_31400);

return statearr_31426;
})();
var statearr_31427_31470 = state_31423__$1;
(statearr_31427_31470[(2)] = null);

(statearr_31427_31470[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (1))){
var state_31423__$1 = state_31423;
var statearr_31428_31471 = state_31423__$1;
(statearr_31428_31471[(2)] = null);

(statearr_31428_31471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (4))){
var inst_31364 = (state_31423[(13)]);
var inst_31364__$1 = (state_31423[(2)]);
var inst_31365 = (inst_31364__$1 == null);
var state_31423__$1 = (function (){var statearr_31429 = state_31423;
(statearr_31429[(13)] = inst_31364__$1);

return statearr_31429;
})();
if(cljs.core.truth_(inst_31365)){
var statearr_31430_31472 = state_31423__$1;
(statearr_31430_31472[(1)] = (5));

} else {
var statearr_31431_31475 = state_31423__$1;
(statearr_31431_31475[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (15))){
var state_31423__$1 = state_31423;
var statearr_31435_31476 = state_31423__$1;
(statearr_31435_31476[(2)] = null);

(statearr_31435_31476[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (21))){
var state_31423__$1 = state_31423;
var statearr_31437_31477 = state_31423__$1;
(statearr_31437_31477[(2)] = null);

(statearr_31437_31477[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (13))){
var inst_31375 = (state_31423[(8)]);
var inst_31378 = (state_31423[(9)]);
var inst_31376 = (state_31423[(10)]);
var inst_31377 = (state_31423[(11)]);
var inst_31385 = (state_31423[(2)]);
var inst_31386 = (inst_31378 + (1));
var tmp31432 = inst_31375;
var tmp31433 = inst_31376;
var tmp31434 = inst_31377;
var inst_31375__$1 = tmp31432;
var inst_31376__$1 = tmp31433;
var inst_31377__$1 = tmp31434;
var inst_31378__$1 = inst_31386;
var state_31423__$1 = (function (){var statearr_31440 = state_31423;
(statearr_31440[(8)] = inst_31375__$1);

(statearr_31440[(9)] = inst_31378__$1);

(statearr_31440[(10)] = inst_31376__$1);

(statearr_31440[(11)] = inst_31377__$1);

(statearr_31440[(14)] = inst_31385);

return statearr_31440;
})();
var statearr_31441_31478 = state_31423__$1;
(statearr_31441_31478[(2)] = null);

(statearr_31441_31478[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (22))){
var state_31423__$1 = state_31423;
var statearr_31442_31479 = state_31423__$1;
(statearr_31442_31479[(2)] = null);

(statearr_31442_31479[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (6))){
var inst_31364 = (state_31423[(13)]);
var inst_31373 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31364) : f.call(null,inst_31364));
var inst_31374 = cljs.core.seq(inst_31373);
var inst_31375 = inst_31374;
var inst_31376 = null;
var inst_31377 = (0);
var inst_31378 = (0);
var state_31423__$1 = (function (){var statearr_31443 = state_31423;
(statearr_31443[(8)] = inst_31375);

(statearr_31443[(9)] = inst_31378);

(statearr_31443[(10)] = inst_31376);

(statearr_31443[(11)] = inst_31377);

return statearr_31443;
})();
var statearr_31444_31487 = state_31423__$1;
(statearr_31444_31487[(2)] = null);

(statearr_31444_31487[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (17))){
var inst_31389 = (state_31423[(7)]);
var inst_31393 = cljs.core.chunk_first(inst_31389);
var inst_31394 = cljs.core.chunk_rest(inst_31389);
var inst_31395 = cljs.core.count(inst_31393);
var inst_31375 = inst_31394;
var inst_31376 = inst_31393;
var inst_31377 = inst_31395;
var inst_31378 = (0);
var state_31423__$1 = (function (){var statearr_31446 = state_31423;
(statearr_31446[(8)] = inst_31375);

(statearr_31446[(9)] = inst_31378);

(statearr_31446[(10)] = inst_31376);

(statearr_31446[(11)] = inst_31377);

return statearr_31446;
})();
var statearr_31447_31489 = state_31423__$1;
(statearr_31447_31489[(2)] = null);

(statearr_31447_31489[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (3))){
var inst_31421 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31423__$1,inst_31421);
} else {
if((state_val_31424 === (12))){
var inst_31409 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31448_31490 = state_31423__$1;
(statearr_31448_31490[(2)] = inst_31409);

(statearr_31448_31490[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (2))){
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31423__$1,(4),in$);
} else {
if((state_val_31424 === (23))){
var inst_31417 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31449_31491 = state_31423__$1;
(statearr_31449_31491[(2)] = inst_31417);

(statearr_31449_31491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (19))){
var inst_31404 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31450_31492 = state_31423__$1;
(statearr_31450_31492[(2)] = inst_31404);

(statearr_31450_31492[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (11))){
var inst_31375 = (state_31423[(8)]);
var inst_31389 = (state_31423[(7)]);
var inst_31389__$1 = cljs.core.seq(inst_31375);
var state_31423__$1 = (function (){var statearr_31451 = state_31423;
(statearr_31451[(7)] = inst_31389__$1);

return statearr_31451;
})();
if(inst_31389__$1){
var statearr_31452_31494 = state_31423__$1;
(statearr_31452_31494[(1)] = (14));

} else {
var statearr_31453_31495 = state_31423__$1;
(statearr_31453_31495[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (9))){
var inst_31411 = (state_31423[(2)]);
var inst_31412 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31423__$1 = (function (){var statearr_31454 = state_31423;
(statearr_31454[(15)] = inst_31411);

return statearr_31454;
})();
if(cljs.core.truth_(inst_31412)){
var statearr_31455_31496 = state_31423__$1;
(statearr_31455_31496[(1)] = (21));

} else {
var statearr_31456_31497 = state_31423__$1;
(statearr_31456_31497[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (5))){
var inst_31367 = cljs.core.async.close_BANG_(out);
var state_31423__$1 = state_31423;
var statearr_31457_31498 = state_31423__$1;
(statearr_31457_31498[(2)] = inst_31367);

(statearr_31457_31498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (14))){
var inst_31389 = (state_31423[(7)]);
var inst_31391 = cljs.core.chunked_seq_QMARK_(inst_31389);
var state_31423__$1 = state_31423;
if(inst_31391){
var statearr_31458_31504 = state_31423__$1;
(statearr_31458_31504[(1)] = (17));

} else {
var statearr_31459_31505 = state_31423__$1;
(statearr_31459_31505[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (16))){
var inst_31407 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31460_31508 = state_31423__$1;
(statearr_31460_31508[(2)] = inst_31407);

(statearr_31460_31508[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31424 === (10))){
var inst_31378 = (state_31423[(9)]);
var inst_31376 = (state_31423[(10)]);
var inst_31383 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31376,inst_31378);
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31423__$1,(13),out,inst_31383);
} else {
if((state_val_31424 === (18))){
var inst_31389 = (state_31423[(7)]);
var inst_31398 = cljs.core.first(inst_31389);
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31423__$1,(20),out,inst_31398);
} else {
if((state_val_31424 === (8))){
var inst_31378 = (state_31423[(9)]);
var inst_31377 = (state_31423[(11)]);
var inst_31380 = (inst_31378 < inst_31377);
var inst_31381 = inst_31380;
var state_31423__$1 = state_31423;
if(cljs.core.truth_(inst_31381)){
var statearr_31461_31509 = state_31423__$1;
(statearr_31461_31509[(1)] = (10));

} else {
var statearr_31462_31510 = state_31423__$1;
(statearr_31462_31510[(1)] = (11));

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
});})(c__28612__auto__))
;
return ((function (switch__24124__auto__,c__28612__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____1 = (function (state_31423){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31423);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31464){if((e31464 instanceof Object)){
var ex__24128__auto__ = e31464;
var statearr_31465_31511 = state_31423;
(statearr_31465_31511[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31423);

return cljs.core.cst$kw$recur;
} else {
throw e31464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31512 = state_31423;
state_31423 = G__31512;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__ = function(state_31423){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____1.call(this,state_31423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24125__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto__))
})();
var state__28614__auto__ = (function (){var statearr_31466 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31466[(6)] = c__28612__auto__);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto__))
);

return c__28612__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31515 = arguments.length;
switch (G__31515) {
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
var G__31518 = arguments.length;
switch (G__31518) {
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
var G__31521 = arguments.length;
switch (G__31521) {
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
var c__28612__auto___31575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31575,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31575,out){
return (function (state_31545){
var state_val_31546 = (state_31545[(1)]);
if((state_val_31546 === (7))){
var inst_31540 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31547_31576 = state_31545__$1;
(statearr_31547_31576[(2)] = inst_31540);

(statearr_31547_31576[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (1))){
var inst_31522 = null;
var state_31545__$1 = (function (){var statearr_31548 = state_31545;
(statearr_31548[(7)] = inst_31522);

return statearr_31548;
})();
var statearr_31549_31584 = state_31545__$1;
(statearr_31549_31584[(2)] = null);

(statearr_31549_31584[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (4))){
var inst_31525 = (state_31545[(8)]);
var inst_31525__$1 = (state_31545[(2)]);
var inst_31526 = (inst_31525__$1 == null);
var inst_31527 = cljs.core.not(inst_31526);
var state_31545__$1 = (function (){var statearr_31554 = state_31545;
(statearr_31554[(8)] = inst_31525__$1);

return statearr_31554;
})();
if(inst_31527){
var statearr_31555_31585 = state_31545__$1;
(statearr_31555_31585[(1)] = (5));

} else {
var statearr_31556_31586 = state_31545__$1;
(statearr_31556_31586[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (6))){
var state_31545__$1 = state_31545;
var statearr_31558_31587 = state_31545__$1;
(statearr_31558_31587[(2)] = null);

(statearr_31558_31587[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (3))){
var inst_31542 = (state_31545[(2)]);
var inst_31543 = cljs.core.async.close_BANG_(out);
var state_31545__$1 = (function (){var statearr_31559 = state_31545;
(statearr_31559[(9)] = inst_31542);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31545__$1,inst_31543);
} else {
if((state_val_31546 === (2))){
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31545__$1,(4),ch);
} else {
if((state_val_31546 === (11))){
var inst_31525 = (state_31545[(8)]);
var inst_31534 = (state_31545[(2)]);
var inst_31522 = inst_31525;
var state_31545__$1 = (function (){var statearr_31560 = state_31545;
(statearr_31560[(7)] = inst_31522);

(statearr_31560[(10)] = inst_31534);

return statearr_31560;
})();
var statearr_31562_31588 = state_31545__$1;
(statearr_31562_31588[(2)] = null);

(statearr_31562_31588[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (9))){
var inst_31525 = (state_31545[(8)]);
var state_31545__$1 = state_31545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31545__$1,(11),out,inst_31525);
} else {
if((state_val_31546 === (5))){
var inst_31525 = (state_31545[(8)]);
var inst_31522 = (state_31545[(7)]);
var inst_31529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31525,inst_31522);
var state_31545__$1 = state_31545;
if(inst_31529){
var statearr_31564_31589 = state_31545__$1;
(statearr_31564_31589[(1)] = (8));

} else {
var statearr_31565_31591 = state_31545__$1;
(statearr_31565_31591[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (10))){
var inst_31537 = (state_31545[(2)]);
var state_31545__$1 = state_31545;
var statearr_31566_31592 = state_31545__$1;
(statearr_31566_31592[(2)] = inst_31537);

(statearr_31566_31592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31546 === (8))){
var inst_31522 = (state_31545[(7)]);
var tmp31563 = inst_31522;
var inst_31522__$1 = tmp31563;
var state_31545__$1 = (function (){var statearr_31567 = state_31545;
(statearr_31567[(7)] = inst_31522__$1);

return statearr_31567;
})();
var statearr_31568_31593 = state_31545__$1;
(statearr_31568_31593[(2)] = null);

(statearr_31568_31593[(1)] = (2));


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
});})(c__28612__auto___31575,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31575,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31569[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31569[(1)] = (1));

return statearr_31569;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31545){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31545);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31570){if((e31570 instanceof Object)){
var ex__24128__auto__ = e31570;
var statearr_31571_31594 = state_31545;
(statearr_31571_31594[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31545);

return cljs.core.cst$kw$recur;
} else {
throw e31570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31595 = state_31545;
state_31545 = G__31595;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31575,out))
})();
var state__28614__auto__ = (function (){var statearr_31573 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31573[(6)] = c__28612__auto___31575);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31575,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31597 = arguments.length;
switch (G__31597) {
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
var c__28612__auto___31670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31670,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31670,out){
return (function (state_31635){
var state_val_31636 = (state_31635[(1)]);
if((state_val_31636 === (7))){
var inst_31631 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31637_31678 = state_31635__$1;
(statearr_31637_31678[(2)] = inst_31631);

(statearr_31637_31678[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (1))){
var inst_31598 = (new Array(n));
var inst_31599 = inst_31598;
var inst_31600 = (0);
var state_31635__$1 = (function (){var statearr_31638 = state_31635;
(statearr_31638[(7)] = inst_31599);

(statearr_31638[(8)] = inst_31600);

return statearr_31638;
})();
var statearr_31639_31679 = state_31635__$1;
(statearr_31639_31679[(2)] = null);

(statearr_31639_31679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (4))){
var inst_31603 = (state_31635[(9)]);
var inst_31603__$1 = (state_31635[(2)]);
var inst_31604 = (inst_31603__$1 == null);
var inst_31605 = cljs.core.not(inst_31604);
var state_31635__$1 = (function (){var statearr_31640 = state_31635;
(statearr_31640[(9)] = inst_31603__$1);

return statearr_31640;
})();
if(inst_31605){
var statearr_31641_31680 = state_31635__$1;
(statearr_31641_31680[(1)] = (5));

} else {
var statearr_31642_31681 = state_31635__$1;
(statearr_31642_31681[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (15))){
var inst_31625 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31643_31682 = state_31635__$1;
(statearr_31643_31682[(2)] = inst_31625);

(statearr_31643_31682[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (13))){
var state_31635__$1 = state_31635;
var statearr_31644_31683 = state_31635__$1;
(statearr_31644_31683[(2)] = null);

(statearr_31644_31683[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (6))){
var inst_31600 = (state_31635[(8)]);
var inst_31621 = (inst_31600 > (0));
var state_31635__$1 = state_31635;
if(cljs.core.truth_(inst_31621)){
var statearr_31645_31684 = state_31635__$1;
(statearr_31645_31684[(1)] = (12));

} else {
var statearr_31646_31685 = state_31635__$1;
(statearr_31646_31685[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (3))){
var inst_31633 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31635__$1,inst_31633);
} else {
if((state_val_31636 === (12))){
var inst_31599 = (state_31635[(7)]);
var inst_31623 = cljs.core.vec(inst_31599);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31635__$1,(15),out,inst_31623);
} else {
if((state_val_31636 === (2))){
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31635__$1,(4),ch);
} else {
if((state_val_31636 === (11))){
var inst_31615 = (state_31635[(2)]);
var inst_31616 = (new Array(n));
var inst_31599 = inst_31616;
var inst_31600 = (0);
var state_31635__$1 = (function (){var statearr_31652 = state_31635;
(statearr_31652[(7)] = inst_31599);

(statearr_31652[(10)] = inst_31615);

(statearr_31652[(8)] = inst_31600);

return statearr_31652;
})();
var statearr_31653_31687 = state_31635__$1;
(statearr_31653_31687[(2)] = null);

(statearr_31653_31687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (9))){
var inst_31599 = (state_31635[(7)]);
var inst_31613 = cljs.core.vec(inst_31599);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31635__$1,(11),out,inst_31613);
} else {
if((state_val_31636 === (5))){
var inst_31599 = (state_31635[(7)]);
var inst_31600 = (state_31635[(8)]);
var inst_31603 = (state_31635[(9)]);
var inst_31608 = (state_31635[(11)]);
var inst_31607 = (inst_31599[inst_31600] = inst_31603);
var inst_31608__$1 = (inst_31600 + (1));
var inst_31609 = (inst_31608__$1 < n);
var state_31635__$1 = (function (){var statearr_31655 = state_31635;
(statearr_31655[(12)] = inst_31607);

(statearr_31655[(11)] = inst_31608__$1);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31609)){
var statearr_31656_31688 = state_31635__$1;
(statearr_31656_31688[(1)] = (8));

} else {
var statearr_31657_31689 = state_31635__$1;
(statearr_31657_31689[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (14))){
var inst_31628 = (state_31635[(2)]);
var inst_31629 = cljs.core.async.close_BANG_(out);
var state_31635__$1 = (function (){var statearr_31659 = state_31635;
(statearr_31659[(13)] = inst_31628);

return statearr_31659;
})();
var statearr_31660_31690 = state_31635__$1;
(statearr_31660_31690[(2)] = inst_31629);

(statearr_31660_31690[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (10))){
var inst_31619 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31661_31691 = state_31635__$1;
(statearr_31661_31691[(2)] = inst_31619);

(statearr_31661_31691[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31636 === (8))){
var inst_31599 = (state_31635[(7)]);
var inst_31608 = (state_31635[(11)]);
var tmp31658 = inst_31599;
var inst_31599__$1 = tmp31658;
var inst_31600 = inst_31608;
var state_31635__$1 = (function (){var statearr_31662 = state_31635;
(statearr_31662[(7)] = inst_31599__$1);

(statearr_31662[(8)] = inst_31600);

return statearr_31662;
})();
var statearr_31663_31692 = state_31635__$1;
(statearr_31663_31692[(2)] = null);

(statearr_31663_31692[(1)] = (2));


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
});})(c__28612__auto___31670,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31670,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31635){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31635);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__24128__auto__ = e31665;
var statearr_31666_31693 = state_31635;
(statearr_31666_31693[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31635);

return cljs.core.cst$kw$recur;
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31694 = state_31635;
state_31635 = G__31694;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31670,out))
})();
var state__28614__auto__ = (function (){var statearr_31668 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31668[(6)] = c__28612__auto___31670);

return statearr_31668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31670,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31696 = arguments.length;
switch (G__31696) {
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
var c__28612__auto___31773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__28612__auto___31773,out){
return (function (){
var f__28613__auto__ = (function (){var switch__24124__auto__ = ((function (c__28612__auto___31773,out){
return (function (state_31738){
var state_val_31739 = (state_31738[(1)]);
if((state_val_31739 === (7))){
var inst_31734 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
var statearr_31740_31777 = state_31738__$1;
(statearr_31740_31777[(2)] = inst_31734);

(statearr_31740_31777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (1))){
var inst_31697 = [];
var inst_31698 = inst_31697;
var inst_31699 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_31738__$1 = (function (){var statearr_31741 = state_31738;
(statearr_31741[(7)] = inst_31699);

(statearr_31741[(8)] = inst_31698);

return statearr_31741;
})();
var statearr_31742_31781 = state_31738__$1;
(statearr_31742_31781[(2)] = null);

(statearr_31742_31781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (4))){
var inst_31702 = (state_31738[(9)]);
var inst_31702__$1 = (state_31738[(2)]);
var inst_31703 = (inst_31702__$1 == null);
var inst_31704 = cljs.core.not(inst_31703);
var state_31738__$1 = (function (){var statearr_31743 = state_31738;
(statearr_31743[(9)] = inst_31702__$1);

return statearr_31743;
})();
if(inst_31704){
var statearr_31744_31788 = state_31738__$1;
(statearr_31744_31788[(1)] = (5));

} else {
var statearr_31745_31789 = state_31738__$1;
(statearr_31745_31789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (15))){
var inst_31728 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
var statearr_31746_31791 = state_31738__$1;
(statearr_31746_31791[(2)] = inst_31728);

(statearr_31746_31791[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (13))){
var state_31738__$1 = state_31738;
var statearr_31747_31792 = state_31738__$1;
(statearr_31747_31792[(2)] = null);

(statearr_31747_31792[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (6))){
var inst_31698 = (state_31738[(8)]);
var inst_31723 = inst_31698.length;
var inst_31724 = (inst_31723 > (0));
var state_31738__$1 = state_31738;
if(cljs.core.truth_(inst_31724)){
var statearr_31748_31793 = state_31738__$1;
(statearr_31748_31793[(1)] = (12));

} else {
var statearr_31749_31794 = state_31738__$1;
(statearr_31749_31794[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (3))){
var inst_31736 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31738__$1,inst_31736);
} else {
if((state_val_31739 === (12))){
var inst_31698 = (state_31738[(8)]);
var inst_31726 = cljs.core.vec(inst_31698);
var state_31738__$1 = state_31738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31738__$1,(15),out,inst_31726);
} else {
if((state_val_31739 === (2))){
var state_31738__$1 = state_31738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31738__$1,(4),ch);
} else {
if((state_val_31739 === (11))){
var inst_31702 = (state_31738[(9)]);
var inst_31706 = (state_31738[(10)]);
var inst_31716 = (state_31738[(2)]);
var inst_31717 = [];
var inst_31718 = inst_31717.push(inst_31702);
var inst_31698 = inst_31717;
var inst_31699 = inst_31706;
var state_31738__$1 = (function (){var statearr_31754 = state_31738;
(statearr_31754[(7)] = inst_31699);

(statearr_31754[(11)] = inst_31716);

(statearr_31754[(8)] = inst_31698);

(statearr_31754[(12)] = inst_31718);

return statearr_31754;
})();
var statearr_31755_31800 = state_31738__$1;
(statearr_31755_31800[(2)] = null);

(statearr_31755_31800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (9))){
var inst_31698 = (state_31738[(8)]);
var inst_31714 = cljs.core.vec(inst_31698);
var state_31738__$1 = state_31738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31738__$1,(11),out,inst_31714);
} else {
if((state_val_31739 === (5))){
var inst_31699 = (state_31738[(7)]);
var inst_31702 = (state_31738[(9)]);
var inst_31706 = (state_31738[(10)]);
var inst_31706__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31702) : f.call(null,inst_31702));
var inst_31707 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31706__$1,inst_31699);
var inst_31708 = cljs.core.keyword_identical_QMARK_(inst_31699,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_31709 = (inst_31707) || (inst_31708);
var state_31738__$1 = (function (){var statearr_31758 = state_31738;
(statearr_31758[(10)] = inst_31706__$1);

return statearr_31758;
})();
if(cljs.core.truth_(inst_31709)){
var statearr_31760_31808 = state_31738__$1;
(statearr_31760_31808[(1)] = (8));

} else {
var statearr_31761_31809 = state_31738__$1;
(statearr_31761_31809[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (14))){
var inst_31731 = (state_31738[(2)]);
var inst_31732 = cljs.core.async.close_BANG_(out);
var state_31738__$1 = (function (){var statearr_31763 = state_31738;
(statearr_31763[(13)] = inst_31731);

return statearr_31763;
})();
var statearr_31764_31810 = state_31738__$1;
(statearr_31764_31810[(2)] = inst_31732);

(statearr_31764_31810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (10))){
var inst_31721 = (state_31738[(2)]);
var state_31738__$1 = state_31738;
var statearr_31765_31813 = state_31738__$1;
(statearr_31765_31813[(2)] = inst_31721);

(statearr_31765_31813[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31739 === (8))){
var inst_31702 = (state_31738[(9)]);
var inst_31698 = (state_31738[(8)]);
var inst_31706 = (state_31738[(10)]);
var inst_31711 = inst_31698.push(inst_31702);
var tmp31762 = inst_31698;
var inst_31698__$1 = tmp31762;
var inst_31699 = inst_31706;
var state_31738__$1 = (function (){var statearr_31766 = state_31738;
(statearr_31766[(7)] = inst_31699);

(statearr_31766[(8)] = inst_31698__$1);

(statearr_31766[(14)] = inst_31711);

return statearr_31766;
})();
var statearr_31767_31818 = state_31738__$1;
(statearr_31767_31818[(2)] = null);

(statearr_31767_31818[(1)] = (2));


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
});})(c__28612__auto___31773,out))
;
return ((function (switch__24124__auto__,c__28612__auto___31773,out){
return (function() {
var cljs$core$async$state_machine__24125__auto__ = null;
var cljs$core$async$state_machine__24125__auto____0 = (function (){
var statearr_31768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31768[(0)] = cljs$core$async$state_machine__24125__auto__);

(statearr_31768[(1)] = (1));

return statearr_31768;
});
var cljs$core$async$state_machine__24125__auto____1 = (function (state_31738){
while(true){
var ret_value__24126__auto__ = (function (){try{while(true){
var result__24127__auto__ = switch__24124__auto__(state_31738);
if(cljs.core.keyword_identical_QMARK_(result__24127__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__24127__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object)){
var ex__24128__auto__ = e31769;
var statearr_31770_31822 = state_31738;
(statearr_31770_31822[(5)] = ex__24128__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31738);

return cljs.core.cst$kw$recur;
} else {
throw e31769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__24126__auto__,cljs.core.cst$kw$recur)){
var G__31823 = state_31738;
state_31738 = G__31823;
continue;
} else {
return ret_value__24126__auto__;
}
break;
}
});
cljs$core$async$state_machine__24125__auto__ = function(state_31738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24125__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24125__auto____1.call(this,state_31738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24125__auto____0;
cljs$core$async$state_machine__24125__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24125__auto____1;
return cljs$core$async$state_machine__24125__auto__;
})()
;})(switch__24124__auto__,c__28612__auto___31773,out))
})();
var state__28614__auto__ = (function (){var statearr_31771 = (f__28613__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28613__auto__.cljs$core$IFn$_invoke$arity$0() : f__28613__auto__.call(null));
(statearr_31771[(6)] = c__28612__auto___31773);

return statearr_31771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28614__auto__);
});})(c__28612__auto___31773,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


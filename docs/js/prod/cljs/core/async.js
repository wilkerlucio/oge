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
var G__17464 = arguments.length;
switch (G__17464) {
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
if(typeof cljs.core.async.t_cljs$core$async17466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17466 = (function (f,blockable,meta17467){
this.f = f;
this.blockable = blockable;
this.meta17467 = meta17467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17468,meta17467__$1){
var self__ = this;
var _17468__$1 = this;
return (new cljs.core.async.t_cljs$core$async17466(self__.f,self__.blockable,meta17467__$1));
});

cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17468){
var self__ = this;
var _17468__$1 = this;
return self__.meta17467;
});

cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async17466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta17467], null);
});

cljs.core.async.t_cljs$core$async17466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17466";

cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async17466");
});

cljs.core.async.__GT_t_cljs$core$async17466 = (function cljs$core$async$__GT_t_cljs$core$async17466(f__$1,blockable__$1,meta17467){
return (new cljs.core.async.t_cljs$core$async17466(f__$1,blockable__$1,meta17467));
});

}

return (new cljs.core.async.t_cljs$core$async17466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17474 = arguments.length;
switch (G__17474) {
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
var G__17484 = arguments.length;
switch (G__17484) {
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
var G__17495 = arguments.length;
switch (G__17495) {
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
var val_17509 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17509) : fn1.call(null,val_17509));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17509,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17509) : fn1.call(null,val_17509));
});})(val_17509,ret))
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
var G__17514 = arguments.length;
switch (G__17514) {
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
var n__11850__auto___17530 = n;
var x_17532 = (0);
while(true){
if((x_17532 < n__11850__auto___17530)){
(a[x_17532] = (0));

var G__17533 = (x_17532 + (1));
x_17532 = G__17533;
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

var G__17536 = (i + (1));
i = G__17536;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async17541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17541 = (function (flag,meta17543){
this.flag = flag;
this.meta17543 = meta17543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17544,meta17543__$1){
var self__ = this;
var _17544__$1 = this;
return (new cljs.core.async.t_cljs$core$async17541(self__.flag,meta17543__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17544){
var self__ = this;
var _17544__$1 = this;
return self__.meta17543;
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta17543], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async17541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17541";

cljs.core.async.t_cljs$core$async17541.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async17541");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async17541 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17541(flag__$1,meta17543){
return (new cljs.core.async.t_cljs$core$async17541(flag__$1,meta17543));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async17541(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async17572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17572 = (function (flag,cb,meta17573){
this.flag = flag;
this.cb = cb;
this.meta17573 = meta17573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17574,meta17573__$1){
var self__ = this;
var _17574__$1 = this;
return (new cljs.core.async.t_cljs$core$async17572(self__.flag,self__.cb,meta17573__$1));
});

cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17574){
var self__ = this;
var _17574__$1 = this;
return self__.meta17573;
});

cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async17572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async17572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta17573], null);
});

cljs.core.async.t_cljs$core$async17572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17572";

cljs.core.async.t_cljs$core$async17572.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async17572");
});

cljs.core.async.__GT_t_cljs$core$async17572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17572(flag__$1,cb__$1,meta17573){
return (new cljs.core.async.t_cljs$core$async17572(flag__$1,cb__$1,meta17573));
});

}

return (new cljs.core.async.t_cljs$core$async17572(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17593_SHARP_){
var G__17595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17593_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17595) : fret.call(null,G__17595));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17594_SHARP_){
var G__17596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17594_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17596) : fret.call(null,G__17596));
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
var G__17605 = (i + (1));
i = G__17605;
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
var len__12084__auto___17614 = arguments.length;
var i__12085__auto___17615 = (0);
while(true){
if((i__12085__auto___17615 < len__12084__auto___17614)){
args__12091__auto__.push((arguments[i__12085__auto___17615]));

var G__17616 = (i__12085__auto___17615 + (1));
i__12085__auto___17615 = G__17616;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17610){
var map__17611 = p__17610;
var map__17611__$1 = ((((!((map__17611 == null)))?((((map__17611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17611):map__17611);
var opts = map__17611__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17606){
var G__17607 = cljs.core.first(seq17606);
var seq17606__$1 = cljs.core.next(seq17606);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17607,seq17606__$1);
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
var G__17633 = arguments.length;
switch (G__17633) {
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
var c__17404__auto___17762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___17762){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___17762){
return (function (state_17709){
var state_val_17710 = (state_17709[(1)]);
if((state_val_17710 === (7))){
var inst_17695 = (state_17709[(2)]);
var state_17709__$1 = state_17709;
var statearr_17720_17764 = state_17709__$1;
(statearr_17720_17764[(2)] = inst_17695);

(statearr_17720_17764[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (1))){
var state_17709__$1 = state_17709;
var statearr_17722_17765 = state_17709__$1;
(statearr_17722_17765[(2)] = null);

(statearr_17722_17765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (4))){
var inst_17650 = (state_17709[(7)]);
var inst_17650__$1 = (state_17709[(2)]);
var inst_17656 = (inst_17650__$1 == null);
var state_17709__$1 = (function (){var statearr_17723 = state_17709;
(statearr_17723[(7)] = inst_17650__$1);

return statearr_17723;
})();
if(cljs.core.truth_(inst_17656)){
var statearr_17724_17767 = state_17709__$1;
(statearr_17724_17767[(1)] = (5));

} else {
var statearr_17725_17768 = state_17709__$1;
(statearr_17725_17768[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (13))){
var state_17709__$1 = state_17709;
var statearr_17727_17769 = state_17709__$1;
(statearr_17727_17769[(2)] = null);

(statearr_17727_17769[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (6))){
var inst_17650 = (state_17709[(7)]);
var state_17709__$1 = state_17709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17709__$1,(11),to,inst_17650);
} else {
if((state_val_17710 === (3))){
var inst_17700 = (state_17709[(2)]);
var state_17709__$1 = state_17709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17709__$1,inst_17700);
} else {
if((state_val_17710 === (12))){
var state_17709__$1 = state_17709;
var statearr_17730_17774 = state_17709__$1;
(statearr_17730_17774[(2)] = null);

(statearr_17730_17774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (2))){
var state_17709__$1 = state_17709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17709__$1,(4),from);
} else {
if((state_val_17710 === (11))){
var inst_17688 = (state_17709[(2)]);
var state_17709__$1 = state_17709;
if(cljs.core.truth_(inst_17688)){
var statearr_17731_17777 = state_17709__$1;
(statearr_17731_17777[(1)] = (12));

} else {
var statearr_17732_17779 = state_17709__$1;
(statearr_17732_17779[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (9))){
var state_17709__$1 = state_17709;
var statearr_17733_17780 = state_17709__$1;
(statearr_17733_17780[(2)] = null);

(statearr_17733_17780[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (5))){
var state_17709__$1 = state_17709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17734_17782 = state_17709__$1;
(statearr_17734_17782[(1)] = (8));

} else {
var statearr_17735_17783 = state_17709__$1;
(statearr_17735_17783[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (14))){
var inst_17693 = (state_17709[(2)]);
var state_17709__$1 = state_17709;
var statearr_17737_17784 = state_17709__$1;
(statearr_17737_17784[(2)] = inst_17693);

(statearr_17737_17784[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (10))){
var inst_17685 = (state_17709[(2)]);
var state_17709__$1 = state_17709;
var statearr_17742_17786 = state_17709__$1;
(statearr_17742_17786[(2)] = inst_17685);

(statearr_17742_17786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17710 === (8))){
var inst_17676 = cljs.core.async.close_BANG_(to);
var state_17709__$1 = state_17709;
var statearr_17747_17789 = state_17709__$1;
(statearr_17747_17789[(2)] = inst_17676);

(statearr_17747_17789[(1)] = (10));


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
});})(c__17404__auto___17762))
;
return ((function (switch__16860__auto__,c__17404__auto___17762){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_17748 = [null,null,null,null,null,null,null,null];
(statearr_17748[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_17748[(1)] = (1));

return statearr_17748;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_17709){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17709);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e17750){if((e17750 instanceof Object)){
var ex__16864__auto__ = e17750;
var statearr_17752_17798 = state_17709;
(statearr_17752_17798[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17709);

return cljs.core.cst$kw$recur;
} else {
throw e17750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__17803 = state_17709;
state_17709 = G__17803;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_17709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_17709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___17762))
})();
var state__17406__auto__ = (function (){var statearr_17756 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_17756[(6)] = c__17404__auto___17762);

return statearr_17756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___17762))
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
return (function (p__17804){
var vec__17805 = p__17804;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17805,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17805,(1),null);
var job = vec__17805;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17404__auto___18086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results){
return (function (state_17816){
var state_val_17817 = (state_17816[(1)]);
if((state_val_17817 === (1))){
var state_17816__$1 = state_17816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17816__$1,(2),res,v);
} else {
if((state_val_17817 === (2))){
var inst_17813 = (state_17816[(2)]);
var inst_17814 = cljs.core.async.close_BANG_(res);
var state_17816__$1 = (function (){var statearr_17818 = state_17816;
(statearr_17818[(7)] = inst_17813);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17816__$1,inst_17814);
} else {
return null;
}
}
});})(c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results))
;
return ((function (switch__16860__auto__,c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_17827 = [null,null,null,null,null,null,null,null];
(statearr_17827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__);

(statearr_17827[(1)] = (1));

return statearr_17827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1 = (function (state_17816){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17816);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e17829){if((e17829 instanceof Object)){
var ex__16864__auto__ = e17829;
var statearr_17830_18091 = state_17816;
(statearr_17830_18091[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17816);

return cljs.core.cst$kw$recur;
} else {
throw e17829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18092 = state_17816;
state_17816 = G__18092;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = function(state_17816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1.call(this,state_17816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results))
})();
var state__17406__auto__ = (function (){var statearr_17831 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_17831[(6)] = c__17404__auto___18086);

return statearr_17831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___18086,res,vec__17805,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17833){
var vec__17834 = p__17833;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17834,(1),null);
var job = vec__17834;
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
var n__11850__auto___18094 = n;
var __18095 = (0);
while(true){
if((__18095 < n__11850__auto___18094)){
var G__17837_18096 = type;
var G__17837_18097__$1 = (((G__17837_18096 instanceof cljs.core.Keyword))?G__17837_18096.fqn:null);
switch (G__17837_18097__$1) {
case "compute":
var c__17404__auto___18099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18095,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (__18095,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (1))){
var state_17850__$1 = state_17850;
var statearr_17852_18103 = state_17850__$1;
(statearr_17852_18103[(2)] = null);

(statearr_17852_18103[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (2))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17850__$1,(4),jobs);
} else {
if((state_val_17851 === (3))){
var inst_17848 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (4))){
var inst_17840 = (state_17850[(2)]);
var inst_17841 = process(inst_17840);
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17841)){
var statearr_17856_18108 = state_17850__$1;
(statearr_17856_18108[(1)] = (5));

} else {
var statearr_17857_18109 = state_17850__$1;
(statearr_17857_18109[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (5))){
var state_17850__$1 = state_17850;
var statearr_17858_18110 = state_17850__$1;
(statearr_17858_18110[(2)] = null);

(statearr_17858_18110[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (6))){
var state_17850__$1 = state_17850;
var statearr_17859_18111 = state_17850__$1;
(statearr_17859_18111[(2)] = null);

(statearr_17859_18111[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (7))){
var inst_17846 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17863_18112 = state_17850__$1;
(statearr_17863_18112[(2)] = inst_17846);

(statearr_17863_18112[(1)] = (3));


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
});})(__18095,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
;
return ((function (__18095,switch__16860__auto__,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_17864 = [null,null,null,null,null,null,null];
(statearr_17864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__);

(statearr_17864[(1)] = (1));

return statearr_17864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1 = (function (state_17850){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17850);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e17865){if((e17865 instanceof Object)){
var ex__16864__auto__ = e17865;
var statearr_17866_18113 = state_17850;
(statearr_17866_18113[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17850);

return cljs.core.cst$kw$recur;
} else {
throw e17865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18114 = state_17850;
state_17850 = G__18114;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__;
})()
;})(__18095,switch__16860__auto__,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
})();
var state__17406__auto__ = (function (){var statearr_17872 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_17872[(6)] = c__17404__auto___18099);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(__18095,c__17404__auto___18099,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
);


break;
case "async":
var c__17404__auto___18118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18095,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (__18095,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function (state_17885){
var state_val_17886 = (state_17885[(1)]);
if((state_val_17886 === (1))){
var state_17885__$1 = state_17885;
var statearr_17887_18119 = state_17885__$1;
(statearr_17887_18119[(2)] = null);

(statearr_17887_18119[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17886 === (2))){
var state_17885__$1 = state_17885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17885__$1,(4),jobs);
} else {
if((state_val_17886 === (3))){
var inst_17883 = (state_17885[(2)]);
var state_17885__$1 = state_17885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17885__$1,inst_17883);
} else {
if((state_val_17886 === (4))){
var inst_17875 = (state_17885[(2)]);
var inst_17876 = async(inst_17875);
var state_17885__$1 = state_17885;
if(cljs.core.truth_(inst_17876)){
var statearr_17888_18122 = state_17885__$1;
(statearr_17888_18122[(1)] = (5));

} else {
var statearr_17889_18126 = state_17885__$1;
(statearr_17889_18126[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17886 === (5))){
var state_17885__$1 = state_17885;
var statearr_17894_18130 = state_17885__$1;
(statearr_17894_18130[(2)] = null);

(statearr_17894_18130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17886 === (6))){
var state_17885__$1 = state_17885;
var statearr_17896_18134 = state_17885__$1;
(statearr_17896_18134[(2)] = null);

(statearr_17896_18134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17886 === (7))){
var inst_17881 = (state_17885[(2)]);
var state_17885__$1 = state_17885;
var statearr_17897_18138 = state_17885__$1;
(statearr_17897_18138[(2)] = inst_17881);

(statearr_17897_18138[(1)] = (3));


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
});})(__18095,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
;
return ((function (__18095,switch__16860__auto__,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_17898 = [null,null,null,null,null,null,null];
(statearr_17898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__);

(statearr_17898[(1)] = (1));

return statearr_17898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1 = (function (state_17885){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17885);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e17899){if((e17899 instanceof Object)){
var ex__16864__auto__ = e17899;
var statearr_17901_18139 = state_17885;
(statearr_17901_18139[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17885);

return cljs.core.cst$kw$recur;
} else {
throw e17899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18140 = state_17885;
state_17885 = G__18140;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = function(state_17885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1.call(this,state_17885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__;
})()
;})(__18095,switch__16860__auto__,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
})();
var state__17406__auto__ = (function (){var statearr_17902 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_17902[(6)] = c__17404__auto___18118);

return statearr_17902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(__18095,c__17404__auto___18118,G__17837_18096,G__17837_18097__$1,n__11850__auto___18094,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17837_18097__$1)].join('')));

}

var G__18144 = (__18095 + (1));
__18095 = G__18144;
continue;
} else {
}
break;
}

var c__17404__auto___18145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___18145,jobs,results,process,async){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___18145,jobs,results,process,async){
return (function (state_17924){
var state_val_17925 = (state_17924[(1)]);
if((state_val_17925 === (1))){
var state_17924__$1 = state_17924;
var statearr_17927_18146 = state_17924__$1;
(statearr_17927_18146[(2)] = null);

(statearr_17927_18146[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17925 === (2))){
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17924__$1,(4),from);
} else {
if((state_val_17925 === (3))){
var inst_17922 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17924__$1,inst_17922);
} else {
if((state_val_17925 === (4))){
var inst_17905 = (state_17924[(7)]);
var inst_17905__$1 = (state_17924[(2)]);
var inst_17906 = (inst_17905__$1 == null);
var state_17924__$1 = (function (){var statearr_17929 = state_17924;
(statearr_17929[(7)] = inst_17905__$1);

return statearr_17929;
})();
if(cljs.core.truth_(inst_17906)){
var statearr_17930_18147 = state_17924__$1;
(statearr_17930_18147[(1)] = (5));

} else {
var statearr_17931_18149 = state_17924__$1;
(statearr_17931_18149[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17925 === (5))){
var inst_17908 = cljs.core.async.close_BANG_(jobs);
var state_17924__$1 = state_17924;
var statearr_17932_18150 = state_17924__$1;
(statearr_17932_18150[(2)] = inst_17908);

(statearr_17932_18150[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17925 === (6))){
var inst_17910 = (state_17924[(8)]);
var inst_17905 = (state_17924[(7)]);
var inst_17910__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17912 = [inst_17905,inst_17910__$1];
var inst_17913 = (new cljs.core.PersistentVector(null,2,(5),inst_17911,inst_17912,null));
var state_17924__$1 = (function (){var statearr_17938 = state_17924;
(statearr_17938[(8)] = inst_17910__$1);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17924__$1,(8),jobs,inst_17913);
} else {
if((state_val_17925 === (7))){
var inst_17920 = (state_17924[(2)]);
var state_17924__$1 = state_17924;
var statearr_17939_18172 = state_17924__$1;
(statearr_17939_18172[(2)] = inst_17920);

(statearr_17939_18172[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17925 === (8))){
var inst_17910 = (state_17924[(8)]);
var inst_17915 = (state_17924[(2)]);
var state_17924__$1 = (function (){var statearr_17940 = state_17924;
(statearr_17940[(9)] = inst_17915);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17924__$1,(9),results,inst_17910);
} else {
if((state_val_17925 === (9))){
var inst_17917 = (state_17924[(2)]);
var state_17924__$1 = (function (){var statearr_17942 = state_17924;
(statearr_17942[(10)] = inst_17917);

return statearr_17942;
})();
var statearr_17943_18385 = state_17924__$1;
(statearr_17943_18385[(2)] = null);

(statearr_17943_18385[(1)] = (2));


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
});})(c__17404__auto___18145,jobs,results,process,async))
;
return ((function (switch__16860__auto__,c__17404__auto___18145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1 = (function (state_17924){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17924);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e17945){if((e17945 instanceof Object)){
var ex__16864__auto__ = e17945;
var statearr_17946_18389 = state_17924;
(statearr_17946_18389[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17924);

return cljs.core.cst$kw$recur;
} else {
throw e17945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18390 = state_17924;
state_17924 = G__18390;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = function(state_17924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1.call(this,state_17924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___18145,jobs,results,process,async))
})();
var state__17406__auto__ = (function (){var statearr_17951 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_17951[(6)] = c__17404__auto___18145);

return statearr_17951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___18145,jobs,results,process,async))
);


var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__,jobs,results,process,async){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__,jobs,results,process,async){
return (function (state_17994){
var state_val_17995 = (state_17994[(1)]);
if((state_val_17995 === (7))){
var inst_17990 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_17997_18391 = state_17994__$1;
(statearr_17997_18391[(2)] = inst_17990);

(statearr_17997_18391[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (20))){
var state_17994__$1 = state_17994;
var statearr_18001_18392 = state_17994__$1;
(statearr_18001_18392[(2)] = null);

(statearr_18001_18392[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (1))){
var state_17994__$1 = state_17994;
var statearr_18002_18393 = state_17994__$1;
(statearr_18002_18393[(2)] = null);

(statearr_18002_18393[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (4))){
var inst_17958 = (state_17994[(7)]);
var inst_17958__$1 = (state_17994[(2)]);
var inst_17959 = (inst_17958__$1 == null);
var state_17994__$1 = (function (){var statearr_18003 = state_17994;
(statearr_18003[(7)] = inst_17958__$1);

return statearr_18003;
})();
if(cljs.core.truth_(inst_17959)){
var statearr_18004_18394 = state_17994__$1;
(statearr_18004_18394[(1)] = (5));

} else {
var statearr_18005_18395 = state_17994__$1;
(statearr_18005_18395[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (15))){
var inst_17971 = (state_17994[(8)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17994__$1,(18),to,inst_17971);
} else {
if((state_val_17995 === (21))){
var inst_17985 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_18006_18396 = state_17994__$1;
(statearr_18006_18396[(2)] = inst_17985);

(statearr_18006_18396[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (13))){
var inst_17987 = (state_17994[(2)]);
var state_17994__$1 = (function (){var statearr_18007 = state_17994;
(statearr_18007[(9)] = inst_17987);

return statearr_18007;
})();
var statearr_18009_18397 = state_17994__$1;
(statearr_18009_18397[(2)] = null);

(statearr_18009_18397[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (6))){
var inst_17958 = (state_17994[(7)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17994__$1,(11),inst_17958);
} else {
if((state_val_17995 === (17))){
var inst_17979 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
if(cljs.core.truth_(inst_17979)){
var statearr_18010_18401 = state_17994__$1;
(statearr_18010_18401[(1)] = (19));

} else {
var statearr_18011_18402 = state_17994__$1;
(statearr_18011_18402[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (3))){
var inst_17992 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17994__$1,inst_17992);
} else {
if((state_val_17995 === (12))){
var inst_17968 = (state_17994[(10)]);
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17994__$1,(14),inst_17968);
} else {
if((state_val_17995 === (2))){
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17994__$1,(4),results);
} else {
if((state_val_17995 === (19))){
var state_17994__$1 = state_17994;
var statearr_18012_18403 = state_17994__$1;
(statearr_18012_18403[(2)] = null);

(statearr_18012_18403[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (11))){
var inst_17968 = (state_17994[(2)]);
var state_17994__$1 = (function (){var statearr_18013 = state_17994;
(statearr_18013[(10)] = inst_17968);

return statearr_18013;
})();
var statearr_18014_18404 = state_17994__$1;
(statearr_18014_18404[(2)] = null);

(statearr_18014_18404[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (9))){
var state_17994__$1 = state_17994;
var statearr_18015_18405 = state_17994__$1;
(statearr_18015_18405[(2)] = null);

(statearr_18015_18405[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (5))){
var state_17994__$1 = state_17994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18035_18409 = state_17994__$1;
(statearr_18035_18409[(1)] = (8));

} else {
var statearr_18038_18410 = state_17994__$1;
(statearr_18038_18410[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (14))){
var inst_17973 = (state_17994[(11)]);
var inst_17971 = (state_17994[(8)]);
var inst_17971__$1 = (state_17994[(2)]);
var inst_17972 = (inst_17971__$1 == null);
var inst_17973__$1 = cljs.core.not(inst_17972);
var state_17994__$1 = (function (){var statearr_18047 = state_17994;
(statearr_18047[(11)] = inst_17973__$1);

(statearr_18047[(8)] = inst_17971__$1);

return statearr_18047;
})();
if(inst_17973__$1){
var statearr_18048_18421 = state_17994__$1;
(statearr_18048_18421[(1)] = (15));

} else {
var statearr_18049_18422 = state_17994__$1;
(statearr_18049_18422[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (16))){
var inst_17973 = (state_17994[(11)]);
var state_17994__$1 = state_17994;
var statearr_18050_18423 = state_17994__$1;
(statearr_18050_18423[(2)] = inst_17973);

(statearr_18050_18423[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (10))){
var inst_17965 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_18065_18424 = state_17994__$1;
(statearr_18065_18424[(2)] = inst_17965);

(statearr_18065_18424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (18))){
var inst_17976 = (state_17994[(2)]);
var state_17994__$1 = state_17994;
var statearr_18066_18432 = state_17994__$1;
(statearr_18066_18432[(2)] = inst_17976);

(statearr_18066_18432[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17995 === (8))){
var inst_17962 = cljs.core.async.close_BANG_(to);
var state_17994__$1 = state_17994;
var statearr_18073_18436 = state_17994__$1;
(statearr_18073_18436[(2)] = inst_17962);

(statearr_18073_18436[(1)] = (10));


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
});})(c__17404__auto__,jobs,results,process,async))
;
return ((function (switch__16860__auto__,c__17404__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_18074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__);

(statearr_18074[(1)] = (1));

return statearr_18074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1 = (function (state_17994){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_17994);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e18075){if((e18075 instanceof Object)){
var ex__16864__auto__ = e18075;
var statearr_18076_18450 = state_17994;
(statearr_18076_18450[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17994);

return cljs.core.cst$kw$recur;
} else {
throw e18075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18455 = state_17994;
state_17994 = G__18455;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__ = function(state_17994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1.call(this,state_17994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__,jobs,results,process,async))
})();
var state__17406__auto__ = (function (){var statearr_18079 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_18079[(6)] = c__17404__auto__);

return statearr_18079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__,jobs,results,process,async))
);

return c__17404__auto__;
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
var G__18459 = arguments.length;
switch (G__18459) {
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
var G__18464 = arguments.length;
switch (G__18464) {
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
var G__18478 = arguments.length;
switch (G__18478) {
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
var c__17404__auto___18566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___18566,tc,fc){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___18566,tc,fc){
return (function (state_18523){
var state_val_18525 = (state_18523[(1)]);
if((state_val_18525 === (7))){
var inst_18519 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
var statearr_18527_18567 = state_18523__$1;
(statearr_18527_18567[(2)] = inst_18519);

(statearr_18527_18567[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (1))){
var state_18523__$1 = state_18523;
var statearr_18528_18569 = state_18523__$1;
(statearr_18528_18569[(2)] = null);

(statearr_18528_18569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (4))){
var inst_18500 = (state_18523[(7)]);
var inst_18500__$1 = (state_18523[(2)]);
var inst_18501 = (inst_18500__$1 == null);
var state_18523__$1 = (function (){var statearr_18529 = state_18523;
(statearr_18529[(7)] = inst_18500__$1);

return statearr_18529;
})();
if(cljs.core.truth_(inst_18501)){
var statearr_18530_18570 = state_18523__$1;
(statearr_18530_18570[(1)] = (5));

} else {
var statearr_18531_18571 = state_18523__$1;
(statearr_18531_18571[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (13))){
var state_18523__$1 = state_18523;
var statearr_18532_18572 = state_18523__$1;
(statearr_18532_18572[(2)] = null);

(statearr_18532_18572[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (6))){
var inst_18500 = (state_18523[(7)]);
var inst_18506 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18500) : p.call(null,inst_18500));
var state_18523__$1 = state_18523;
if(cljs.core.truth_(inst_18506)){
var statearr_18533_18573 = state_18523__$1;
(statearr_18533_18573[(1)] = (9));

} else {
var statearr_18534_18576 = state_18523__$1;
(statearr_18534_18576[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (3))){
var inst_18521 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18523__$1,inst_18521);
} else {
if((state_val_18525 === (12))){
var state_18523__$1 = state_18523;
var statearr_18535_18580 = state_18523__$1;
(statearr_18535_18580[(2)] = null);

(statearr_18535_18580[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (2))){
var state_18523__$1 = state_18523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18523__$1,(4),ch);
} else {
if((state_val_18525 === (11))){
var inst_18500 = (state_18523[(7)]);
var inst_18510 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18523__$1,(8),inst_18510,inst_18500);
} else {
if((state_val_18525 === (9))){
var state_18523__$1 = state_18523;
var statearr_18536_18586 = state_18523__$1;
(statearr_18536_18586[(2)] = tc);

(statearr_18536_18586[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (5))){
var inst_18503 = cljs.core.async.close_BANG_(tc);
var inst_18504 = cljs.core.async.close_BANG_(fc);
var state_18523__$1 = (function (){var statearr_18537 = state_18523;
(statearr_18537[(8)] = inst_18503);

return statearr_18537;
})();
var statearr_18538_18589 = state_18523__$1;
(statearr_18538_18589[(2)] = inst_18504);

(statearr_18538_18589[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (14))){
var inst_18517 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
var statearr_18539_18592 = state_18523__$1;
(statearr_18539_18592[(2)] = inst_18517);

(statearr_18539_18592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (10))){
var state_18523__$1 = state_18523;
var statearr_18540_18597 = state_18523__$1;
(statearr_18540_18597[(2)] = fc);

(statearr_18540_18597[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18525 === (8))){
var inst_18512 = (state_18523[(2)]);
var state_18523__$1 = state_18523;
if(cljs.core.truth_(inst_18512)){
var statearr_18541_18598 = state_18523__$1;
(statearr_18541_18598[(1)] = (12));

} else {
var statearr_18542_18599 = state_18523__$1;
(statearr_18542_18599[(1)] = (13));

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
});})(c__17404__auto___18566,tc,fc))
;
return ((function (switch__16860__auto__,c__17404__auto___18566,tc,fc){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_18523){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_18523);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e18546){if((e18546 instanceof Object)){
var ex__16864__auto__ = e18546;
var statearr_18548_18604 = state_18523;
(statearr_18548_18604[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18523);

return cljs.core.cst$kw$recur;
} else {
throw e18546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18605 = state_18523;
state_18523 = G__18605;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_18523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_18523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___18566,tc,fc))
})();
var state__17406__auto__ = (function (){var statearr_18551 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_18551[(6)] = c__17404__auto___18566);

return statearr_18551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___18566,tc,fc))
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
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__){
return (function (state_18639){
var state_val_18640 = (state_18639[(1)]);
if((state_val_18640 === (7))){
var inst_18634 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18641_18698 = state_18639__$1;
(statearr_18641_18698[(2)] = inst_18634);

(statearr_18641_18698[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (1))){
var inst_18609 = init;
var state_18639__$1 = (function (){var statearr_18643 = state_18639;
(statearr_18643[(7)] = inst_18609);

return statearr_18643;
})();
var statearr_18644_18702 = state_18639__$1;
(statearr_18644_18702[(2)] = null);

(statearr_18644_18702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (4))){
var inst_18614 = (state_18639[(8)]);
var inst_18614__$1 = (state_18639[(2)]);
var inst_18615 = (inst_18614__$1 == null);
var state_18639__$1 = (function (){var statearr_18654 = state_18639;
(statearr_18654[(8)] = inst_18614__$1);

return statearr_18654;
})();
if(cljs.core.truth_(inst_18615)){
var statearr_18655_18704 = state_18639__$1;
(statearr_18655_18704[(1)] = (5));

} else {
var statearr_18656_18708 = state_18639__$1;
(statearr_18656_18708[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (6))){
var inst_18618 = (state_18639[(9)]);
var inst_18609 = (state_18639[(7)]);
var inst_18614 = (state_18639[(8)]);
var inst_18618__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18609,inst_18614) : f.call(null,inst_18609,inst_18614));
var inst_18619 = cljs.core.reduced_QMARK_(inst_18618__$1);
var state_18639__$1 = (function (){var statearr_18661 = state_18639;
(statearr_18661[(9)] = inst_18618__$1);

return statearr_18661;
})();
if(inst_18619){
var statearr_18663_18711 = state_18639__$1;
(statearr_18663_18711[(1)] = (8));

} else {
var statearr_18667_18712 = state_18639__$1;
(statearr_18667_18712[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (3))){
var inst_18636 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18639__$1,inst_18636);
} else {
if((state_val_18640 === (2))){
var state_18639__$1 = state_18639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18639__$1,(4),ch);
} else {
if((state_val_18640 === (9))){
var inst_18618 = (state_18639[(9)]);
var inst_18609 = inst_18618;
var state_18639__$1 = (function (){var statearr_18677 = state_18639;
(statearr_18677[(7)] = inst_18609);

return statearr_18677;
})();
var statearr_18679_18722 = state_18639__$1;
(statearr_18679_18722[(2)] = null);

(statearr_18679_18722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (5))){
var inst_18609 = (state_18639[(7)]);
var state_18639__$1 = state_18639;
var statearr_18680_18723 = state_18639__$1;
(statearr_18680_18723[(2)] = inst_18609);

(statearr_18680_18723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (10))){
var inst_18632 = (state_18639[(2)]);
var state_18639__$1 = state_18639;
var statearr_18682_18724 = state_18639__$1;
(statearr_18682_18724[(2)] = inst_18632);

(statearr_18682_18724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18640 === (8))){
var inst_18618 = (state_18639[(9)]);
var inst_18621 = cljs.core.deref(inst_18618);
var state_18639__$1 = state_18639;
var statearr_18683_18726 = state_18639__$1;
(statearr_18683_18726[(2)] = inst_18621);

(statearr_18683_18726[(1)] = (10));


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
});})(c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16861__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16861__auto____0 = (function (){
var statearr_18684 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18684[(0)] = cljs$core$async$reduce_$_state_machine__16861__auto__);

(statearr_18684[(1)] = (1));

return statearr_18684;
});
var cljs$core$async$reduce_$_state_machine__16861__auto____1 = (function (state_18639){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_18639);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e18685){if((e18685 instanceof Object)){
var ex__16864__auto__ = e18685;
var statearr_18688_18753 = state_18639;
(statearr_18688_18753[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18639);

return cljs.core.cst$kw$recur;
} else {
throw e18685;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18755 = state_18639;
state_18639 = G__18755;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16861__auto__ = function(state_18639){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16861__auto____1.call(this,state_18639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16861__auto____0;
cljs$core$async$reduce_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16861__auto____1;
return cljs$core$async$reduce_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_18694 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_18694[(6)] = c__17404__auto__);

return statearr_18694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__))
);

return c__17404__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__,f__$1){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__,f__$1){
return (function (state_18766){
var state_val_18767 = (state_18766[(1)]);
if((state_val_18767 === (1))){
var inst_18760 = cljs.core.async.reduce(f__$1,init,ch);
var state_18766__$1 = state_18766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18766__$1,(2),inst_18760);
} else {
if((state_val_18767 === (2))){
var inst_18762 = (state_18766[(2)]);
var inst_18763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18762) : f__$1.call(null,inst_18762));
var state_18766__$1 = state_18766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18766__$1,inst_18763);
} else {
return null;
}
}
});})(c__17404__auto__,f__$1))
;
return ((function (switch__16860__auto__,c__17404__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16861__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16861__auto____0 = (function (){
var statearr_18770 = [null,null,null,null,null,null,null];
(statearr_18770[(0)] = cljs$core$async$transduce_$_state_machine__16861__auto__);

(statearr_18770[(1)] = (1));

return statearr_18770;
});
var cljs$core$async$transduce_$_state_machine__16861__auto____1 = (function (state_18766){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_18766);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e18771){if((e18771 instanceof Object)){
var ex__16864__auto__ = e18771;
var statearr_18772_18780 = state_18766;
(statearr_18772_18780[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18766);

return cljs.core.cst$kw$recur;
} else {
throw e18771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18781 = state_18766;
state_18766 = G__18781;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16861__auto__ = function(state_18766){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16861__auto____1.call(this,state_18766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16861__auto____0;
cljs$core$async$transduce_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16861__auto____1;
return cljs$core$async$transduce_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__,f__$1))
})();
var state__17406__auto__ = (function (){var statearr_18773 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_18773[(6)] = c__17404__auto__);

return statearr_18773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__,f__$1))
);

return c__17404__auto__;
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
var G__18789 = arguments.length;
switch (G__18789) {
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
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__){
return (function (state_18829){
var state_val_18832 = (state_18829[(1)]);
if((state_val_18832 === (7))){
var inst_18805 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18834_18894 = state_18829__$1;
(statearr_18834_18894[(2)] = inst_18805);

(statearr_18834_18894[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (1))){
var inst_18799 = cljs.core.seq(coll);
var inst_18800 = inst_18799;
var state_18829__$1 = (function (){var statearr_18841 = state_18829;
(statearr_18841[(7)] = inst_18800);

return statearr_18841;
})();
var statearr_18842_18895 = state_18829__$1;
(statearr_18842_18895[(2)] = null);

(statearr_18842_18895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (4))){
var inst_18800 = (state_18829[(7)]);
var inst_18803 = cljs.core.first(inst_18800);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18829__$1,(7),ch,inst_18803);
} else {
if((state_val_18832 === (13))){
var inst_18821 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18844_18901 = state_18829__$1;
(statearr_18844_18901[(2)] = inst_18821);

(statearr_18844_18901[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (6))){
var inst_18808 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
if(cljs.core.truth_(inst_18808)){
var statearr_18851_18902 = state_18829__$1;
(statearr_18851_18902[(1)] = (8));

} else {
var statearr_18852_18903 = state_18829__$1;
(statearr_18852_18903[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (3))){
var inst_18825 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18829__$1,inst_18825);
} else {
if((state_val_18832 === (12))){
var state_18829__$1 = state_18829;
var statearr_18855_18904 = state_18829__$1;
(statearr_18855_18904[(2)] = null);

(statearr_18855_18904[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (2))){
var inst_18800 = (state_18829[(7)]);
var state_18829__$1 = state_18829;
if(cljs.core.truth_(inst_18800)){
var statearr_18856_18909 = state_18829__$1;
(statearr_18856_18909[(1)] = (4));

} else {
var statearr_18857_18910 = state_18829__$1;
(statearr_18857_18910[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (11))){
var inst_18818 = cljs.core.async.close_BANG_(ch);
var state_18829__$1 = state_18829;
var statearr_18861_18915 = state_18829__$1;
(statearr_18861_18915[(2)] = inst_18818);

(statearr_18861_18915[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (9))){
var state_18829__$1 = state_18829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18862_18916 = state_18829__$1;
(statearr_18862_18916[(1)] = (11));

} else {
var statearr_18863_18917 = state_18829__$1;
(statearr_18863_18917[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (5))){
var inst_18800 = (state_18829[(7)]);
var state_18829__$1 = state_18829;
var statearr_18864_18919 = state_18829__$1;
(statearr_18864_18919[(2)] = inst_18800);

(statearr_18864_18919[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (10))){
var inst_18823 = (state_18829[(2)]);
var state_18829__$1 = state_18829;
var statearr_18865_18927 = state_18829__$1;
(statearr_18865_18927[(2)] = inst_18823);

(statearr_18865_18927[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18832 === (8))){
var inst_18800 = (state_18829[(7)]);
var inst_18810 = cljs.core.next(inst_18800);
var inst_18800__$1 = inst_18810;
var state_18829__$1 = (function (){var statearr_18866 = state_18829;
(statearr_18866[(7)] = inst_18800__$1);

return statearr_18866;
})();
var statearr_18867_18932 = state_18829__$1;
(statearr_18867_18932[(2)] = null);

(statearr_18867_18932[(1)] = (2));


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
});})(c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto__){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_18873 = [null,null,null,null,null,null,null,null];
(statearr_18873[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_18873[(1)] = (1));

return statearr_18873;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_18829){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_18829);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e18875){if((e18875 instanceof Object)){
var ex__16864__auto__ = e18875;
var statearr_18881_18936 = state_18829;
(statearr_18881_18936[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18829);

return cljs.core.cst$kw$recur;
} else {
throw e18875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__18937 = state_18829;
state_18829 = G__18937;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_18829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_18829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_18882 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_18882[(6)] = c__17404__auto__);

return statearr_18882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__))
);

return c__17404__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async18969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18969 = (function (ch,cs,meta18970){
this.ch = ch;
this.cs = cs;
this.meta18970 = meta18970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18971,meta18970__$1){
var self__ = this;
var _18971__$1 = this;
return (new cljs.core.async.t_cljs$core$async18969(self__.ch,self__.cs,meta18970__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18971){
var self__ = this;
var _18971__$1 = this;
return self__.meta18970;
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18970], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async18969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18969";

cljs.core.async.t_cljs$core$async18969.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async18969");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async18969 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async18969(ch__$1,cs__$1,meta18970){
return (new cljs.core.async.t_cljs$core$async18969(ch__$1,cs__$1,meta18970));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async18969(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17404__auto___19293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___19293,cs,m,dchan,dctr,done){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___19293,cs,m,dchan,dctr,done){
return (function (state_19127){
var state_val_19132 = (state_19127[(1)]);
if((state_val_19132 === (7))){
var inst_19123 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19134_19294 = state_19127__$1;
(statearr_19134_19294[(2)] = inst_19123);

(statearr_19134_19294[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (20))){
var inst_19019 = (state_19127[(7)]);
var inst_19033 = cljs.core.first(inst_19019);
var inst_19034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19033,(0),null);
var inst_19035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19033,(1),null);
var state_19127__$1 = (function (){var statearr_19143 = state_19127;
(statearr_19143[(8)] = inst_19034);

return statearr_19143;
})();
if(cljs.core.truth_(inst_19035)){
var statearr_19144_19296 = state_19127__$1;
(statearr_19144_19296[(1)] = (22));

} else {
var statearr_19145_19297 = state_19127__$1;
(statearr_19145_19297[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (27))){
var inst_19065 = (state_19127[(9)]);
var inst_18984 = (state_19127[(10)]);
var inst_19063 = (state_19127[(11)]);
var inst_19070 = (state_19127[(12)]);
var inst_19070__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19063,inst_19065);
var inst_19071 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19070__$1,inst_18984,done);
var state_19127__$1 = (function (){var statearr_19146 = state_19127;
(statearr_19146[(12)] = inst_19070__$1);

return statearr_19146;
})();
if(cljs.core.truth_(inst_19071)){
var statearr_19147_19299 = state_19127__$1;
(statearr_19147_19299[(1)] = (30));

} else {
var statearr_19148_19300 = state_19127__$1;
(statearr_19148_19300[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (1))){
var state_19127__$1 = state_19127;
var statearr_19149_19301 = state_19127__$1;
(statearr_19149_19301[(2)] = null);

(statearr_19149_19301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (24))){
var inst_19019 = (state_19127[(7)]);
var inst_19040 = (state_19127[(2)]);
var inst_19041 = cljs.core.next(inst_19019);
var inst_18995 = inst_19041;
var inst_18996 = null;
var inst_18997 = (0);
var inst_18998 = (0);
var state_19127__$1 = (function (){var statearr_19150 = state_19127;
(statearr_19150[(13)] = inst_18995);

(statearr_19150[(14)] = inst_18996);

(statearr_19150[(15)] = inst_18997);

(statearr_19150[(16)] = inst_19040);

(statearr_19150[(17)] = inst_18998);

return statearr_19150;
})();
var statearr_19151_19302 = state_19127__$1;
(statearr_19151_19302[(2)] = null);

(statearr_19151_19302[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (39))){
var state_19127__$1 = state_19127;
var statearr_19156_19303 = state_19127__$1;
(statearr_19156_19303[(2)] = null);

(statearr_19156_19303[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (4))){
var inst_18984 = (state_19127[(10)]);
var inst_18984__$1 = (state_19127[(2)]);
var inst_18985 = (inst_18984__$1 == null);
var state_19127__$1 = (function (){var statearr_19158 = state_19127;
(statearr_19158[(10)] = inst_18984__$1);

return statearr_19158;
})();
if(cljs.core.truth_(inst_18985)){
var statearr_19159_19307 = state_19127__$1;
(statearr_19159_19307[(1)] = (5));

} else {
var statearr_19160_19311 = state_19127__$1;
(statearr_19160_19311[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (15))){
var inst_18995 = (state_19127[(13)]);
var inst_18996 = (state_19127[(14)]);
var inst_18997 = (state_19127[(15)]);
var inst_18998 = (state_19127[(17)]);
var inst_19015 = (state_19127[(2)]);
var inst_19016 = (inst_18998 + (1));
var tmp19153 = inst_18995;
var tmp19154 = inst_18996;
var tmp19155 = inst_18997;
var inst_18995__$1 = tmp19153;
var inst_18996__$1 = tmp19154;
var inst_18997__$1 = tmp19155;
var inst_18998__$1 = inst_19016;
var state_19127__$1 = (function (){var statearr_19161 = state_19127;
(statearr_19161[(13)] = inst_18995__$1);

(statearr_19161[(14)] = inst_18996__$1);

(statearr_19161[(18)] = inst_19015);

(statearr_19161[(15)] = inst_18997__$1);

(statearr_19161[(17)] = inst_18998__$1);

return statearr_19161;
})();
var statearr_19162_19324 = state_19127__$1;
(statearr_19162_19324[(2)] = null);

(statearr_19162_19324[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (21))){
var inst_19044 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19169_19325 = state_19127__$1;
(statearr_19169_19325[(2)] = inst_19044);

(statearr_19169_19325[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (31))){
var inst_19070 = (state_19127[(12)]);
var inst_19074 = done(null);
var inst_19075 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19070);
var state_19127__$1 = (function (){var statearr_19170 = state_19127;
(statearr_19170[(19)] = inst_19074);

return statearr_19170;
})();
var statearr_19171_19326 = state_19127__$1;
(statearr_19171_19326[(2)] = inst_19075);

(statearr_19171_19326[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (32))){
var inst_19065 = (state_19127[(9)]);
var inst_19063 = (state_19127[(11)]);
var inst_19062 = (state_19127[(20)]);
var inst_19064 = (state_19127[(21)]);
var inst_19077 = (state_19127[(2)]);
var inst_19078 = (inst_19065 + (1));
var tmp19163 = inst_19063;
var tmp19164 = inst_19062;
var tmp19165 = inst_19064;
var inst_19062__$1 = tmp19164;
var inst_19063__$1 = tmp19163;
var inst_19064__$1 = tmp19165;
var inst_19065__$1 = inst_19078;
var state_19127__$1 = (function (){var statearr_19175 = state_19127;
(statearr_19175[(9)] = inst_19065__$1);

(statearr_19175[(22)] = inst_19077);

(statearr_19175[(11)] = inst_19063__$1);

(statearr_19175[(20)] = inst_19062__$1);

(statearr_19175[(21)] = inst_19064__$1);

return statearr_19175;
})();
var statearr_19180_19328 = state_19127__$1;
(statearr_19180_19328[(2)] = null);

(statearr_19180_19328[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (40))){
var inst_19090 = (state_19127[(23)]);
var inst_19098 = done(null);
var inst_19099 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19090);
var state_19127__$1 = (function (){var statearr_19185 = state_19127;
(statearr_19185[(24)] = inst_19098);

return statearr_19185;
})();
var statearr_19186_19331 = state_19127__$1;
(statearr_19186_19331[(2)] = inst_19099);

(statearr_19186_19331[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (33))){
var inst_19081 = (state_19127[(25)]);
var inst_19083 = cljs.core.chunked_seq_QMARK_(inst_19081);
var state_19127__$1 = state_19127;
if(inst_19083){
var statearr_19189_19333 = state_19127__$1;
(statearr_19189_19333[(1)] = (36));

} else {
var statearr_19190_19338 = state_19127__$1;
(statearr_19190_19338[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (13))){
var inst_19009 = (state_19127[(26)]);
var inst_19012 = cljs.core.async.close_BANG_(inst_19009);
var state_19127__$1 = state_19127;
var statearr_19191_19340 = state_19127__$1;
(statearr_19191_19340[(2)] = inst_19012);

(statearr_19191_19340[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (22))){
var inst_19034 = (state_19127[(8)]);
var inst_19037 = cljs.core.async.close_BANG_(inst_19034);
var state_19127__$1 = state_19127;
var statearr_19192_19341 = state_19127__$1;
(statearr_19192_19341[(2)] = inst_19037);

(statearr_19192_19341[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (36))){
var inst_19081 = (state_19127[(25)]);
var inst_19085 = cljs.core.chunk_first(inst_19081);
var inst_19086 = cljs.core.chunk_rest(inst_19081);
var inst_19087 = cljs.core.count(inst_19085);
var inst_19062 = inst_19086;
var inst_19063 = inst_19085;
var inst_19064 = inst_19087;
var inst_19065 = (0);
var state_19127__$1 = (function (){var statearr_19193 = state_19127;
(statearr_19193[(9)] = inst_19065);

(statearr_19193[(11)] = inst_19063);

(statearr_19193[(20)] = inst_19062);

(statearr_19193[(21)] = inst_19064);

return statearr_19193;
})();
var statearr_19194_19343 = state_19127__$1;
(statearr_19194_19343[(2)] = null);

(statearr_19194_19343[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (41))){
var inst_19081 = (state_19127[(25)]);
var inst_19101 = (state_19127[(2)]);
var inst_19102 = cljs.core.next(inst_19081);
var inst_19062 = inst_19102;
var inst_19063 = null;
var inst_19064 = (0);
var inst_19065 = (0);
var state_19127__$1 = (function (){var statearr_19195 = state_19127;
(statearr_19195[(9)] = inst_19065);

(statearr_19195[(11)] = inst_19063);

(statearr_19195[(20)] = inst_19062);

(statearr_19195[(27)] = inst_19101);

(statearr_19195[(21)] = inst_19064);

return statearr_19195;
})();
var statearr_19196_19352 = state_19127__$1;
(statearr_19196_19352[(2)] = null);

(statearr_19196_19352[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (43))){
var state_19127__$1 = state_19127;
var statearr_19197_19353 = state_19127__$1;
(statearr_19197_19353[(2)] = null);

(statearr_19197_19353[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (29))){
var inst_19110 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19198_19354 = state_19127__$1;
(statearr_19198_19354[(2)] = inst_19110);

(statearr_19198_19354[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (44))){
var inst_19120 = (state_19127[(2)]);
var state_19127__$1 = (function (){var statearr_19204 = state_19127;
(statearr_19204[(28)] = inst_19120);

return statearr_19204;
})();
var statearr_19206_19355 = state_19127__$1;
(statearr_19206_19355[(2)] = null);

(statearr_19206_19355[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (6))){
var inst_19054 = (state_19127[(29)]);
var inst_19053 = cljs.core.deref(cs);
var inst_19054__$1 = cljs.core.keys(inst_19053);
var inst_19055 = cljs.core.count(inst_19054__$1);
var inst_19056 = cljs.core.reset_BANG_(dctr,inst_19055);
var inst_19061 = cljs.core.seq(inst_19054__$1);
var inst_19062 = inst_19061;
var inst_19063 = null;
var inst_19064 = (0);
var inst_19065 = (0);
var state_19127__$1 = (function (){var statearr_19209 = state_19127;
(statearr_19209[(9)] = inst_19065);

(statearr_19209[(29)] = inst_19054__$1);

(statearr_19209[(30)] = inst_19056);

(statearr_19209[(11)] = inst_19063);

(statearr_19209[(20)] = inst_19062);

(statearr_19209[(21)] = inst_19064);

return statearr_19209;
})();
var statearr_19210_19356 = state_19127__$1;
(statearr_19210_19356[(2)] = null);

(statearr_19210_19356[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (28))){
var inst_19081 = (state_19127[(25)]);
var inst_19062 = (state_19127[(20)]);
var inst_19081__$1 = cljs.core.seq(inst_19062);
var state_19127__$1 = (function (){var statearr_19212 = state_19127;
(statearr_19212[(25)] = inst_19081__$1);

return statearr_19212;
})();
if(inst_19081__$1){
var statearr_19213_19358 = state_19127__$1;
(statearr_19213_19358[(1)] = (33));

} else {
var statearr_19214_19359 = state_19127__$1;
(statearr_19214_19359[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (25))){
var inst_19065 = (state_19127[(9)]);
var inst_19064 = (state_19127[(21)]);
var inst_19067 = (inst_19065 < inst_19064);
var inst_19068 = inst_19067;
var state_19127__$1 = state_19127;
if(cljs.core.truth_(inst_19068)){
var statearr_19221_19360 = state_19127__$1;
(statearr_19221_19360[(1)] = (27));

} else {
var statearr_19222_19361 = state_19127__$1;
(statearr_19222_19361[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (34))){
var state_19127__$1 = state_19127;
var statearr_19223_19362 = state_19127__$1;
(statearr_19223_19362[(2)] = null);

(statearr_19223_19362[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (17))){
var state_19127__$1 = state_19127;
var statearr_19224_19365 = state_19127__$1;
(statearr_19224_19365[(2)] = null);

(statearr_19224_19365[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (3))){
var inst_19125 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19127__$1,inst_19125);
} else {
if((state_val_19132 === (12))){
var inst_19049 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19225_19367 = state_19127__$1;
(statearr_19225_19367[(2)] = inst_19049);

(statearr_19225_19367[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (2))){
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19127__$1,(4),ch);
} else {
if((state_val_19132 === (23))){
var state_19127__$1 = state_19127;
var statearr_19226_19368 = state_19127__$1;
(statearr_19226_19368[(2)] = null);

(statearr_19226_19368[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (35))){
var inst_19108 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19227_19373 = state_19127__$1;
(statearr_19227_19373[(2)] = inst_19108);

(statearr_19227_19373[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (19))){
var inst_19019 = (state_19127[(7)]);
var inst_19023 = cljs.core.chunk_first(inst_19019);
var inst_19024 = cljs.core.chunk_rest(inst_19019);
var inst_19025 = cljs.core.count(inst_19023);
var inst_18995 = inst_19024;
var inst_18996 = inst_19023;
var inst_18997 = inst_19025;
var inst_18998 = (0);
var state_19127__$1 = (function (){var statearr_19228 = state_19127;
(statearr_19228[(13)] = inst_18995);

(statearr_19228[(14)] = inst_18996);

(statearr_19228[(15)] = inst_18997);

(statearr_19228[(17)] = inst_18998);

return statearr_19228;
})();
var statearr_19229_19387 = state_19127__$1;
(statearr_19229_19387[(2)] = null);

(statearr_19229_19387[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (11))){
var inst_18995 = (state_19127[(13)]);
var inst_19019 = (state_19127[(7)]);
var inst_19019__$1 = cljs.core.seq(inst_18995);
var state_19127__$1 = (function (){var statearr_19230 = state_19127;
(statearr_19230[(7)] = inst_19019__$1);

return statearr_19230;
})();
if(inst_19019__$1){
var statearr_19232_19394 = state_19127__$1;
(statearr_19232_19394[(1)] = (16));

} else {
var statearr_19233_19397 = state_19127__$1;
(statearr_19233_19397[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (9))){
var inst_19051 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19234_19404 = state_19127__$1;
(statearr_19234_19404[(2)] = inst_19051);

(statearr_19234_19404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (5))){
var inst_18993 = cljs.core.deref(cs);
var inst_18994 = cljs.core.seq(inst_18993);
var inst_18995 = inst_18994;
var inst_18996 = null;
var inst_18997 = (0);
var inst_18998 = (0);
var state_19127__$1 = (function (){var statearr_19237 = state_19127;
(statearr_19237[(13)] = inst_18995);

(statearr_19237[(14)] = inst_18996);

(statearr_19237[(15)] = inst_18997);

(statearr_19237[(17)] = inst_18998);

return statearr_19237;
})();
var statearr_19238_19405 = state_19127__$1;
(statearr_19238_19405[(2)] = null);

(statearr_19238_19405[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (14))){
var state_19127__$1 = state_19127;
var statearr_19239_19406 = state_19127__$1;
(statearr_19239_19406[(2)] = null);

(statearr_19239_19406[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (45))){
var inst_19117 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19240_19407 = state_19127__$1;
(statearr_19240_19407[(2)] = inst_19117);

(statearr_19240_19407[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (26))){
var inst_19054 = (state_19127[(29)]);
var inst_19112 = (state_19127[(2)]);
var inst_19113 = cljs.core.seq(inst_19054);
var state_19127__$1 = (function (){var statearr_19241 = state_19127;
(statearr_19241[(31)] = inst_19112);

return statearr_19241;
})();
if(inst_19113){
var statearr_19242_19408 = state_19127__$1;
(statearr_19242_19408[(1)] = (42));

} else {
var statearr_19243_19410 = state_19127__$1;
(statearr_19243_19410[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (16))){
var inst_19019 = (state_19127[(7)]);
var inst_19021 = cljs.core.chunked_seq_QMARK_(inst_19019);
var state_19127__$1 = state_19127;
if(inst_19021){
var statearr_19247_19411 = state_19127__$1;
(statearr_19247_19411[(1)] = (19));

} else {
var statearr_19250_19412 = state_19127__$1;
(statearr_19250_19412[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (38))){
var inst_19105 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19253_19413 = state_19127__$1;
(statearr_19253_19413[(2)] = inst_19105);

(statearr_19253_19413[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (30))){
var state_19127__$1 = state_19127;
var statearr_19258_19417 = state_19127__$1;
(statearr_19258_19417[(2)] = null);

(statearr_19258_19417[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (10))){
var inst_18996 = (state_19127[(14)]);
var inst_18998 = (state_19127[(17)]);
var inst_19008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18996,inst_18998);
var inst_19009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19008,(0),null);
var inst_19010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19008,(1),null);
var state_19127__$1 = (function (){var statearr_19263 = state_19127;
(statearr_19263[(26)] = inst_19009);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19264_19429 = state_19127__$1;
(statearr_19264_19429[(1)] = (13));

} else {
var statearr_19265_19430 = state_19127__$1;
(statearr_19265_19430[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (18))){
var inst_19047 = (state_19127[(2)]);
var state_19127__$1 = state_19127;
var statearr_19266_19432 = state_19127__$1;
(statearr_19266_19432[(2)] = inst_19047);

(statearr_19266_19432[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (42))){
var state_19127__$1 = state_19127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19127__$1,(45),dchan);
} else {
if((state_val_19132 === (37))){
var inst_18984 = (state_19127[(10)]);
var inst_19090 = (state_19127[(23)]);
var inst_19081 = (state_19127[(25)]);
var inst_19090__$1 = cljs.core.first(inst_19081);
var inst_19095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19090__$1,inst_18984,done);
var state_19127__$1 = (function (){var statearr_19267 = state_19127;
(statearr_19267[(23)] = inst_19090__$1);

return statearr_19267;
})();
if(cljs.core.truth_(inst_19095)){
var statearr_19268_19439 = state_19127__$1;
(statearr_19268_19439[(1)] = (39));

} else {
var statearr_19269_19441 = state_19127__$1;
(statearr_19269_19441[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19132 === (8))){
var inst_18997 = (state_19127[(15)]);
var inst_18998 = (state_19127[(17)]);
var inst_19002 = (inst_18998 < inst_18997);
var inst_19003 = inst_19002;
var state_19127__$1 = state_19127;
if(cljs.core.truth_(inst_19003)){
var statearr_19270_19451 = state_19127__$1;
(statearr_19270_19451[(1)] = (10));

} else {
var statearr_19271_19452 = state_19127__$1;
(statearr_19271_19452[(1)] = (11));

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
});})(c__17404__auto___19293,cs,m,dchan,dctr,done))
;
return ((function (switch__16860__auto__,c__17404__auto___19293,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16861__auto__ = null;
var cljs$core$async$mult_$_state_machine__16861__auto____0 = (function (){
var statearr_19272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19272[(0)] = cljs$core$async$mult_$_state_machine__16861__auto__);

(statearr_19272[(1)] = (1));

return statearr_19272;
});
var cljs$core$async$mult_$_state_machine__16861__auto____1 = (function (state_19127){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_19127);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e19273){if((e19273 instanceof Object)){
var ex__16864__auto__ = e19273;
var statearr_19274_19456 = state_19127;
(statearr_19274_19456[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19127);

return cljs.core.cst$kw$recur;
} else {
throw e19273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__19457 = state_19127;
state_19127 = G__19457;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16861__auto__ = function(state_19127){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16861__auto____1.call(this,state_19127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16861__auto____0;
cljs$core$async$mult_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16861__auto____1;
return cljs$core$async$mult_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___19293,cs,m,dchan,dctr,done))
})();
var state__17406__auto__ = (function (){var statearr_19280 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_19280[(6)] = c__17404__auto___19293);

return statearr_19280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___19293,cs,m,dchan,dctr,done))
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
var G__19463 = arguments.length;
switch (G__19463) {
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
var len__12084__auto___19550 = arguments.length;
var i__12085__auto___19552 = (0);
while(true){
if((i__12085__auto___19552 < len__12084__auto___19550)){
args__12091__auto__.push((arguments[i__12085__auto___19552]));

var G__19555 = (i__12085__auto___19552 + (1));
i__12085__auto___19552 = G__19555;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((3) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12092__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19542){
var map__19543 = p__19542;
var map__19543__$1 = ((((!((map__19543 == null)))?((((map__19543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19543):map__19543);
var opts = map__19543__$1;
var statearr_19546_19559 = state;
(statearr_19546_19559[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__19543,map__19543__$1,opts){
return (function (val){
var statearr_19547_19564 = state;
(statearr_19547_19564[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19543,map__19543__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_19549_19567 = state;
(statearr_19549_19567[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19533){
var G__19534 = cljs.core.first(seq19533);
var seq19533__$1 = cljs.core.next(seq19533);
var G__19535 = cljs.core.first(seq19533__$1);
var seq19533__$2 = cljs.core.next(seq19533__$1);
var G__19536 = cljs.core.first(seq19533__$2);
var seq19533__$3 = cljs.core.next(seq19533__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19534,G__19535,G__19536,seq19533__$3);
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
if(typeof cljs.core.async.t_cljs$core$async19582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19582 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta19583){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta19583 = meta19583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19584,meta19583__$1){
var self__ = this;
var _19584__$1 = this;
return (new cljs.core.async.t_cljs$core$async19582(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta19583__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19584){
var self__ = this;
var _19584__$1 = this;
return self__.meta19583;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async19582.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta19583], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async19582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19582";

cljs.core.async.t_cljs$core$async19582.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async19582");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async19582 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async19582(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19583){
return (new cljs.core.async.t_cljs$core$async19582(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta19583));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async19582(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17404__auto___19902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19710){
var state_val_19711 = (state_19710[(1)]);
if((state_val_19711 === (7))){
var inst_19611 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19717_19905 = state_19710__$1;
(statearr_19717_19905[(2)] = inst_19611);

(statearr_19717_19905[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (20))){
var inst_19624 = (state_19710[(7)]);
var state_19710__$1 = state_19710;
var statearr_19718_19906 = state_19710__$1;
(statearr_19718_19906[(2)] = inst_19624);

(statearr_19718_19906[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (27))){
var state_19710__$1 = state_19710;
var statearr_19720_19907 = state_19710__$1;
(statearr_19720_19907[(2)] = null);

(statearr_19720_19907[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (1))){
var inst_19596 = (state_19710[(8)]);
var inst_19596__$1 = calc_state();
var inst_19598 = (inst_19596__$1 == null);
var inst_19599 = cljs.core.not(inst_19598);
var state_19710__$1 = (function (){var statearr_19722 = state_19710;
(statearr_19722[(8)] = inst_19596__$1);

return statearr_19722;
})();
if(inst_19599){
var statearr_19723_19908 = state_19710__$1;
(statearr_19723_19908[(1)] = (2));

} else {
var statearr_19726_19909 = state_19710__$1;
(statearr_19726_19909[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (24))){
var inst_19659 = (state_19710[(9)]);
var inst_19684 = (state_19710[(10)]);
var inst_19650 = (state_19710[(11)]);
var inst_19684__$1 = (inst_19650.cljs$core$IFn$_invoke$arity$1 ? inst_19650.cljs$core$IFn$_invoke$arity$1(inst_19659) : inst_19650.call(null,inst_19659));
var state_19710__$1 = (function (){var statearr_19727 = state_19710;
(statearr_19727[(10)] = inst_19684__$1);

return statearr_19727;
})();
if(cljs.core.truth_(inst_19684__$1)){
var statearr_19728_19910 = state_19710__$1;
(statearr_19728_19910[(1)] = (29));

} else {
var statearr_19729_19911 = state_19710__$1;
(statearr_19729_19911[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (4))){
var inst_19614 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19614)){
var statearr_19731_19913 = state_19710__$1;
(statearr_19731_19913[(1)] = (8));

} else {
var statearr_19732_19914 = state_19710__$1;
(statearr_19732_19914[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (15))){
var inst_19643 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19643)){
var statearr_19734_19915 = state_19710__$1;
(statearr_19734_19915[(1)] = (19));

} else {
var statearr_19735_19916 = state_19710__$1;
(statearr_19735_19916[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (21))){
var inst_19649 = (state_19710[(12)]);
var inst_19649__$1 = (state_19710[(2)]);
var inst_19650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19649__$1,cljs.core.cst$kw$solos);
var inst_19651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19649__$1,cljs.core.cst$kw$mutes);
var inst_19652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19649__$1,cljs.core.cst$kw$reads);
var state_19710__$1 = (function (){var statearr_19737 = state_19710;
(statearr_19737[(12)] = inst_19649__$1);

(statearr_19737[(13)] = inst_19651);

(statearr_19737[(11)] = inst_19650);

return statearr_19737;
})();
return cljs.core.async.ioc_alts_BANG_(state_19710__$1,(22),inst_19652);
} else {
if((state_val_19711 === (31))){
var inst_19692 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19692)){
var statearr_19738_19924 = state_19710__$1;
(statearr_19738_19924[(1)] = (32));

} else {
var statearr_19739_19925 = state_19710__$1;
(statearr_19739_19925[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (32))){
var inst_19658 = (state_19710[(14)]);
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19710__$1,(35),out,inst_19658);
} else {
if((state_val_19711 === (33))){
var inst_19649 = (state_19710[(12)]);
var inst_19624 = inst_19649;
var state_19710__$1 = (function (){var statearr_19740 = state_19710;
(statearr_19740[(7)] = inst_19624);

return statearr_19740;
})();
var statearr_19741_19927 = state_19710__$1;
(statearr_19741_19927[(2)] = null);

(statearr_19741_19927[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (13))){
var inst_19624 = (state_19710[(7)]);
var inst_19631 = inst_19624.cljs$lang$protocol_mask$partition0$;
var inst_19632 = (inst_19631 & (64));
var inst_19633 = inst_19624.cljs$core$ISeq$;
var inst_19634 = (cljs.core.PROTOCOL_SENTINEL === inst_19633);
var inst_19635 = (inst_19632) || (inst_19634);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19635)){
var statearr_19742_19942 = state_19710__$1;
(statearr_19742_19942[(1)] = (16));

} else {
var statearr_19743_19943 = state_19710__$1;
(statearr_19743_19943[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (22))){
var inst_19659 = (state_19710[(9)]);
var inst_19658 = (state_19710[(14)]);
var inst_19657 = (state_19710[(2)]);
var inst_19658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19657,(0),null);
var inst_19659__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19657,(1),null);
var inst_19671 = (inst_19658__$1 == null);
var inst_19672 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19659__$1,change);
var inst_19673 = (inst_19671) || (inst_19672);
var state_19710__$1 = (function (){var statearr_19747 = state_19710;
(statearr_19747[(9)] = inst_19659__$1);

(statearr_19747[(14)] = inst_19658__$1);

return statearr_19747;
})();
if(cljs.core.truth_(inst_19673)){
var statearr_19750_19946 = state_19710__$1;
(statearr_19750_19946[(1)] = (23));

} else {
var statearr_19751_19947 = state_19710__$1;
(statearr_19751_19947[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (36))){
var inst_19649 = (state_19710[(12)]);
var inst_19624 = inst_19649;
var state_19710__$1 = (function (){var statearr_19752 = state_19710;
(statearr_19752[(7)] = inst_19624);

return statearr_19752;
})();
var statearr_19753_19948 = state_19710__$1;
(statearr_19753_19948[(2)] = null);

(statearr_19753_19948[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (29))){
var inst_19684 = (state_19710[(10)]);
var state_19710__$1 = state_19710;
var statearr_19759_19949 = state_19710__$1;
(statearr_19759_19949[(2)] = inst_19684);

(statearr_19759_19949[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (6))){
var state_19710__$1 = state_19710;
var statearr_19762_19950 = state_19710__$1;
(statearr_19762_19950[(2)] = false);

(statearr_19762_19950[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (28))){
var inst_19680 = (state_19710[(2)]);
var inst_19681 = calc_state();
var inst_19624 = inst_19681;
var state_19710__$1 = (function (){var statearr_19767 = state_19710;
(statearr_19767[(7)] = inst_19624);

(statearr_19767[(15)] = inst_19680);

return statearr_19767;
})();
var statearr_19772_19951 = state_19710__$1;
(statearr_19772_19951[(2)] = null);

(statearr_19772_19951[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (25))){
var inst_19706 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19777_19954 = state_19710__$1;
(statearr_19777_19954[(2)] = inst_19706);

(statearr_19777_19954[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (34))){
var inst_19704 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19784_19956 = state_19710__$1;
(statearr_19784_19956[(2)] = inst_19704);

(statearr_19784_19956[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (17))){
var state_19710__$1 = state_19710;
var statearr_19787_19957 = state_19710__$1;
(statearr_19787_19957[(2)] = false);

(statearr_19787_19957[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (3))){
var state_19710__$1 = state_19710;
var statearr_19791_19958 = state_19710__$1;
(statearr_19791_19958[(2)] = false);

(statearr_19791_19958[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (12))){
var inst_19708 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19710__$1,inst_19708);
} else {
if((state_val_19711 === (2))){
var inst_19596 = (state_19710[(8)]);
var inst_19603 = inst_19596.cljs$lang$protocol_mask$partition0$;
var inst_19604 = (inst_19603 & (64));
var inst_19605 = inst_19596.cljs$core$ISeq$;
var inst_19606 = (cljs.core.PROTOCOL_SENTINEL === inst_19605);
var inst_19607 = (inst_19604) || (inst_19606);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19607)){
var statearr_19795_19961 = state_19710__$1;
(statearr_19795_19961[(1)] = (5));

} else {
var statearr_19796_19962 = state_19710__$1;
(statearr_19796_19962[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (23))){
var inst_19658 = (state_19710[(14)]);
var inst_19675 = (inst_19658 == null);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19675)){
var statearr_19797_19963 = state_19710__$1;
(statearr_19797_19963[(1)] = (26));

} else {
var statearr_19798_19964 = state_19710__$1;
(statearr_19798_19964[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (35))){
var inst_19695 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19695)){
var statearr_19800_19965 = state_19710__$1;
(statearr_19800_19965[(1)] = (36));

} else {
var statearr_19801_19966 = state_19710__$1;
(statearr_19801_19966[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (19))){
var inst_19624 = (state_19710[(7)]);
var inst_19646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19624);
var state_19710__$1 = state_19710;
var statearr_19802_19967 = state_19710__$1;
(statearr_19802_19967[(2)] = inst_19646);

(statearr_19802_19967[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (11))){
var inst_19624 = (state_19710[(7)]);
var inst_19628 = (inst_19624 == null);
var inst_19629 = cljs.core.not(inst_19628);
var state_19710__$1 = state_19710;
if(inst_19629){
var statearr_19805_19970 = state_19710__$1;
(statearr_19805_19970[(1)] = (13));

} else {
var statearr_19806_19974 = state_19710__$1;
(statearr_19806_19974[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (9))){
var inst_19596 = (state_19710[(8)]);
var state_19710__$1 = state_19710;
var statearr_19807_19977 = state_19710__$1;
(statearr_19807_19977[(2)] = inst_19596);

(statearr_19807_19977[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (5))){
var state_19710__$1 = state_19710;
var statearr_19810_19982 = state_19710__$1;
(statearr_19810_19982[(2)] = true);

(statearr_19810_19982[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (14))){
var state_19710__$1 = state_19710;
var statearr_19813_19985 = state_19710__$1;
(statearr_19813_19985[(2)] = false);

(statearr_19813_19985[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (26))){
var inst_19659 = (state_19710[(9)]);
var inst_19677 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19659);
var state_19710__$1 = state_19710;
var statearr_19815_19990 = state_19710__$1;
(statearr_19815_19990[(2)] = inst_19677);

(statearr_19815_19990[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (16))){
var state_19710__$1 = state_19710;
var statearr_19820_19995 = state_19710__$1;
(statearr_19820_19995[(2)] = true);

(statearr_19820_19995[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (38))){
var inst_19700 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19824_19998 = state_19710__$1;
(statearr_19824_19998[(2)] = inst_19700);

(statearr_19824_19998[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (30))){
var inst_19651 = (state_19710[(13)]);
var inst_19659 = (state_19710[(9)]);
var inst_19650 = (state_19710[(11)]);
var inst_19687 = cljs.core.empty_QMARK_(inst_19650);
var inst_19688 = (inst_19651.cljs$core$IFn$_invoke$arity$1 ? inst_19651.cljs$core$IFn$_invoke$arity$1(inst_19659) : inst_19651.call(null,inst_19659));
var inst_19689 = cljs.core.not(inst_19688);
var inst_19690 = (inst_19687) && (inst_19689);
var state_19710__$1 = state_19710;
var statearr_19826_20007 = state_19710__$1;
(statearr_19826_20007[(2)] = inst_19690);

(statearr_19826_20007[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (10))){
var inst_19596 = (state_19710[(8)]);
var inst_19619 = (state_19710[(2)]);
var inst_19620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19619,cljs.core.cst$kw$solos);
var inst_19621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19619,cljs.core.cst$kw$mutes);
var inst_19623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19619,cljs.core.cst$kw$reads);
var inst_19624 = inst_19596;
var state_19710__$1 = (function (){var statearr_19829 = state_19710;
(statearr_19829[(16)] = inst_19621);

(statearr_19829[(17)] = inst_19620);

(statearr_19829[(7)] = inst_19624);

(statearr_19829[(18)] = inst_19623);

return statearr_19829;
})();
var statearr_19831_20008 = state_19710__$1;
(statearr_19831_20008[(2)] = null);

(statearr_19831_20008[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (18))){
var inst_19640 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19832_20009 = state_19710__$1;
(statearr_19832_20009[(2)] = inst_19640);

(statearr_19832_20009[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (37))){
var state_19710__$1 = state_19710;
var statearr_19834_20010 = state_19710__$1;
(statearr_19834_20010[(2)] = null);

(statearr_19834_20010[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19711 === (8))){
var inst_19596 = (state_19710[(8)]);
var inst_19616 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19596);
var state_19710__$1 = state_19710;
var statearr_19835_20011 = state_19710__$1;
(statearr_19835_20011[(2)] = inst_19616);

(statearr_19835_20011[(1)] = (10));


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
});})(c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16860__auto__,c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16861__auto__ = null;
var cljs$core$async$mix_$_state_machine__16861__auto____0 = (function (){
var statearr_19849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19849[(0)] = cljs$core$async$mix_$_state_machine__16861__auto__);

(statearr_19849[(1)] = (1));

return statearr_19849;
});
var cljs$core$async$mix_$_state_machine__16861__auto____1 = (function (state_19710){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_19710);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e19850){if((e19850 instanceof Object)){
var ex__16864__auto__ = e19850;
var statearr_19851_20012 = state_19710;
(statearr_19851_20012[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19710);

return cljs.core.cst$kw$recur;
} else {
throw e19850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20013 = state_19710;
state_19710 = G__20013;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16861__auto__ = function(state_19710){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16861__auto____1.call(this,state_19710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16861__auto____0;
cljs$core$async$mix_$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16861__auto____1;
return cljs$core$async$mix_$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17406__auto__ = (function (){var statearr_19853 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_19853[(6)] = c__17404__auto___19902);

return statearr_19853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___19902,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__20035 = arguments.length;
switch (G__20035) {
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
var G__20071 = arguments.length;
switch (G__20071) {
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
return (function (p1__20065_SHARP_){
if(cljs.core.truth_((p1__20065_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20065_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20065_SHARP_.call(null,topic)))){
return p1__20065_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20065_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20073 = meta20073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20074,meta20073__$1){
var self__ = this;
var _20074__$1 = this;
return (new cljs.core.async.t_cljs$core$async20072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20073__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20074){
var self__ = this;
var _20074__$1 = this;
return self__.meta20073;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta20073], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20072";

cljs.core.async.t_cljs$core$async20072.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async20072");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20072 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20073){
return (new cljs.core.async.t_cljs$core$async20072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20073));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17404__auto___20253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___20253,mults,ensure_mult,p){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___20253,mults,ensure_mult,p){
return (function (state_20167){
var state_val_20168 = (state_20167[(1)]);
if((state_val_20168 === (7))){
var inst_20163 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20169_20270 = state_20167__$1;
(statearr_20169_20270[(2)] = inst_20163);

(statearr_20169_20270[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (20))){
var state_20167__$1 = state_20167;
var statearr_20170_20271 = state_20167__$1;
(statearr_20170_20271[(2)] = null);

(statearr_20170_20271[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (1))){
var state_20167__$1 = state_20167;
var statearr_20171_20272 = state_20167__$1;
(statearr_20171_20272[(2)] = null);

(statearr_20171_20272[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (24))){
var inst_20131 = (state_20167[(7)]);
var inst_20155 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20131);
var state_20167__$1 = state_20167;
var statearr_20172_20273 = state_20167__$1;
(statearr_20172_20273[(2)] = inst_20155);

(statearr_20172_20273[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (4))){
var inst_20082 = (state_20167[(8)]);
var inst_20082__$1 = (state_20167[(2)]);
var inst_20083 = (inst_20082__$1 == null);
var state_20167__$1 = (function (){var statearr_20173 = state_20167;
(statearr_20173[(8)] = inst_20082__$1);

return statearr_20173;
})();
if(cljs.core.truth_(inst_20083)){
var statearr_20174_20274 = state_20167__$1;
(statearr_20174_20274[(1)] = (5));

} else {
var statearr_20175_20275 = state_20167__$1;
(statearr_20175_20275[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (15))){
var inst_20125 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20176_20276 = state_20167__$1;
(statearr_20176_20276[(2)] = inst_20125);

(statearr_20176_20276[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (21))){
var inst_20160 = (state_20167[(2)]);
var state_20167__$1 = (function (){var statearr_20177 = state_20167;
(statearr_20177[(9)] = inst_20160);

return statearr_20177;
})();
var statearr_20178_20277 = state_20167__$1;
(statearr_20178_20277[(2)] = null);

(statearr_20178_20277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (13))){
var inst_20107 = (state_20167[(10)]);
var inst_20109 = cljs.core.chunked_seq_QMARK_(inst_20107);
var state_20167__$1 = state_20167;
if(inst_20109){
var statearr_20179_20278 = state_20167__$1;
(statearr_20179_20278[(1)] = (16));

} else {
var statearr_20180_20279 = state_20167__$1;
(statearr_20180_20279[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (22))){
var inst_20152 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
if(cljs.core.truth_(inst_20152)){
var statearr_20181_20280 = state_20167__$1;
(statearr_20181_20280[(1)] = (23));

} else {
var statearr_20182_20281 = state_20167__$1;
(statearr_20182_20281[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (6))){
var inst_20133 = (state_20167[(11)]);
var inst_20131 = (state_20167[(7)]);
var inst_20082 = (state_20167[(8)]);
var inst_20131__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20082) : topic_fn.call(null,inst_20082));
var inst_20132 = cljs.core.deref(mults);
var inst_20133__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20132,inst_20131__$1);
var state_20167__$1 = (function (){var statearr_20183 = state_20167;
(statearr_20183[(11)] = inst_20133__$1);

(statearr_20183[(7)] = inst_20131__$1);

return statearr_20183;
})();
if(cljs.core.truth_(inst_20133__$1)){
var statearr_20184_20283 = state_20167__$1;
(statearr_20184_20283[(1)] = (19));

} else {
var statearr_20185_20284 = state_20167__$1;
(statearr_20185_20284[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (25))){
var inst_20157 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20187_20285 = state_20167__$1;
(statearr_20187_20285[(2)] = inst_20157);

(statearr_20187_20285[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (17))){
var inst_20107 = (state_20167[(10)]);
var inst_20116 = cljs.core.first(inst_20107);
var inst_20117 = cljs.core.async.muxch_STAR_(inst_20116);
var inst_20118 = cljs.core.async.close_BANG_(inst_20117);
var inst_20119 = cljs.core.next(inst_20107);
var inst_20092 = inst_20119;
var inst_20093 = null;
var inst_20094 = (0);
var inst_20095 = (0);
var state_20167__$1 = (function (){var statearr_20188 = state_20167;
(statearr_20188[(12)] = inst_20092);

(statearr_20188[(13)] = inst_20093);

(statearr_20188[(14)] = inst_20118);

(statearr_20188[(15)] = inst_20094);

(statearr_20188[(16)] = inst_20095);

return statearr_20188;
})();
var statearr_20189_20286 = state_20167__$1;
(statearr_20189_20286[(2)] = null);

(statearr_20189_20286[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (3))){
var inst_20165 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20167__$1,inst_20165);
} else {
if((state_val_20168 === (12))){
var inst_20127 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20190_20287 = state_20167__$1;
(statearr_20190_20287[(2)] = inst_20127);

(statearr_20190_20287[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (2))){
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20167__$1,(4),ch);
} else {
if((state_val_20168 === (23))){
var state_20167__$1 = state_20167;
var statearr_20191_20288 = state_20167__$1;
(statearr_20191_20288[(2)] = null);

(statearr_20191_20288[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (19))){
var inst_20133 = (state_20167[(11)]);
var inst_20082 = (state_20167[(8)]);
var inst_20150 = cljs.core.async.muxch_STAR_(inst_20133);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20167__$1,(22),inst_20150,inst_20082);
} else {
if((state_val_20168 === (11))){
var inst_20092 = (state_20167[(12)]);
var inst_20107 = (state_20167[(10)]);
var inst_20107__$1 = cljs.core.seq(inst_20092);
var state_20167__$1 = (function (){var statearr_20192 = state_20167;
(statearr_20192[(10)] = inst_20107__$1);

return statearr_20192;
})();
if(inst_20107__$1){
var statearr_20193_20289 = state_20167__$1;
(statearr_20193_20289[(1)] = (13));

} else {
var statearr_20194_20290 = state_20167__$1;
(statearr_20194_20290[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (9))){
var inst_20129 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20195_20296 = state_20167__$1;
(statearr_20195_20296[(2)] = inst_20129);

(statearr_20195_20296[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (5))){
var inst_20089 = cljs.core.deref(mults);
var inst_20090 = cljs.core.vals(inst_20089);
var inst_20091 = cljs.core.seq(inst_20090);
var inst_20092 = inst_20091;
var inst_20093 = null;
var inst_20094 = (0);
var inst_20095 = (0);
var state_20167__$1 = (function (){var statearr_20196 = state_20167;
(statearr_20196[(12)] = inst_20092);

(statearr_20196[(13)] = inst_20093);

(statearr_20196[(15)] = inst_20094);

(statearr_20196[(16)] = inst_20095);

return statearr_20196;
})();
var statearr_20197_20305 = state_20167__$1;
(statearr_20197_20305[(2)] = null);

(statearr_20197_20305[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (14))){
var state_20167__$1 = state_20167;
var statearr_20201_20308 = state_20167__$1;
(statearr_20201_20308[(2)] = null);

(statearr_20201_20308[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (16))){
var inst_20107 = (state_20167[(10)]);
var inst_20111 = cljs.core.chunk_first(inst_20107);
var inst_20112 = cljs.core.chunk_rest(inst_20107);
var inst_20113 = cljs.core.count(inst_20111);
var inst_20092 = inst_20112;
var inst_20093 = inst_20111;
var inst_20094 = inst_20113;
var inst_20095 = (0);
var state_20167__$1 = (function (){var statearr_20207 = state_20167;
(statearr_20207[(12)] = inst_20092);

(statearr_20207[(13)] = inst_20093);

(statearr_20207[(15)] = inst_20094);

(statearr_20207[(16)] = inst_20095);

return statearr_20207;
})();
var statearr_20210_20319 = state_20167__$1;
(statearr_20210_20319[(2)] = null);

(statearr_20210_20319[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (10))){
var inst_20092 = (state_20167[(12)]);
var inst_20093 = (state_20167[(13)]);
var inst_20094 = (state_20167[(15)]);
var inst_20095 = (state_20167[(16)]);
var inst_20100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20093,inst_20095);
var inst_20101 = cljs.core.async.muxch_STAR_(inst_20100);
var inst_20102 = cljs.core.async.close_BANG_(inst_20101);
var inst_20103 = (inst_20095 + (1));
var tmp20198 = inst_20092;
var tmp20199 = inst_20093;
var tmp20200 = inst_20094;
var inst_20092__$1 = tmp20198;
var inst_20093__$1 = tmp20199;
var inst_20094__$1 = tmp20200;
var inst_20095__$1 = inst_20103;
var state_20167__$1 = (function (){var statearr_20217 = state_20167;
(statearr_20217[(12)] = inst_20092__$1);

(statearr_20217[(13)] = inst_20093__$1);

(statearr_20217[(17)] = inst_20102);

(statearr_20217[(15)] = inst_20094__$1);

(statearr_20217[(16)] = inst_20095__$1);

return statearr_20217;
})();
var statearr_20220_20330 = state_20167__$1;
(statearr_20220_20330[(2)] = null);

(statearr_20220_20330[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (18))){
var inst_20122 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20223_20331 = state_20167__$1;
(statearr_20223_20331[(2)] = inst_20122);

(statearr_20223_20331[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20168 === (8))){
var inst_20094 = (state_20167[(15)]);
var inst_20095 = (state_20167[(16)]);
var inst_20097 = (inst_20095 < inst_20094);
var inst_20098 = inst_20097;
var state_20167__$1 = state_20167;
if(cljs.core.truth_(inst_20098)){
var statearr_20226_20332 = state_20167__$1;
(statearr_20226_20332[(1)] = (10));

} else {
var statearr_20229_20333 = state_20167__$1;
(statearr_20229_20333[(1)] = (11));

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
});})(c__17404__auto___20253,mults,ensure_mult,p))
;
return ((function (switch__16860__auto__,c__17404__auto___20253,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_20234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20234[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_20234[(1)] = (1));

return statearr_20234;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_20167){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20167);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e20237){if((e20237 instanceof Object)){
var ex__16864__auto__ = e20237;
var statearr_20240_20334 = state_20167;
(statearr_20240_20334[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20167);

return cljs.core.cst$kw$recur;
} else {
throw e20237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20335 = state_20167;
state_20167 = G__20335;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_20167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_20167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___20253,mults,ensure_mult,p))
})();
var state__17406__auto__ = (function (){var statearr_20245 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_20245[(6)] = c__17404__auto___20253);

return statearr_20245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___20253,mults,ensure_mult,p))
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
var G__20337 = arguments.length;
switch (G__20337) {
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
var G__20346 = arguments.length;
switch (G__20346) {
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
var G__20366 = arguments.length;
switch (G__20366) {
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
var c__17404__auto___20471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20406){
var state_val_20407 = (state_20406[(1)]);
if((state_val_20407 === (7))){
var state_20406__$1 = state_20406;
var statearr_20408_20472 = state_20406__$1;
(statearr_20408_20472[(2)] = null);

(statearr_20408_20472[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (1))){
var state_20406__$1 = state_20406;
var statearr_20409_20473 = state_20406__$1;
(statearr_20409_20473[(2)] = null);

(statearr_20409_20473[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (4))){
var inst_20369 = (state_20406[(7)]);
var inst_20371 = (inst_20369 < cnt);
var state_20406__$1 = state_20406;
if(cljs.core.truth_(inst_20371)){
var statearr_20410_20474 = state_20406__$1;
(statearr_20410_20474[(1)] = (6));

} else {
var statearr_20411_20475 = state_20406__$1;
(statearr_20411_20475[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (15))){
var inst_20402 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20412_20476 = state_20406__$1;
(statearr_20412_20476[(2)] = inst_20402);

(statearr_20412_20476[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (13))){
var inst_20395 = cljs.core.async.close_BANG_(out);
var state_20406__$1 = state_20406;
var statearr_20413_20481 = state_20406__$1;
(statearr_20413_20481[(2)] = inst_20395);

(statearr_20413_20481[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (6))){
var state_20406__$1 = state_20406;
var statearr_20414_20483 = state_20406__$1;
(statearr_20414_20483[(2)] = null);

(statearr_20414_20483[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (3))){
var inst_20404 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20406__$1,inst_20404);
} else {
if((state_val_20407 === (12))){
var inst_20392 = (state_20406[(8)]);
var inst_20392__$1 = (state_20406[(2)]);
var inst_20393 = cljs.core.some(cljs.core.nil_QMARK_,inst_20392__$1);
var state_20406__$1 = (function (){var statearr_20415 = state_20406;
(statearr_20415[(8)] = inst_20392__$1);

return statearr_20415;
})();
if(cljs.core.truth_(inst_20393)){
var statearr_20419_20485 = state_20406__$1;
(statearr_20419_20485[(1)] = (13));

} else {
var statearr_20422_20486 = state_20406__$1;
(statearr_20422_20486[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (2))){
var inst_20368 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20369 = (0);
var state_20406__$1 = (function (){var statearr_20425 = state_20406;
(statearr_20425[(7)] = inst_20369);

(statearr_20425[(9)] = inst_20368);

return statearr_20425;
})();
var statearr_20428_20487 = state_20406__$1;
(statearr_20428_20487[(2)] = null);

(statearr_20428_20487[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (11))){
var inst_20369 = (state_20406[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20406,(10),Object,null,(9));
var inst_20378 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20369) : chs__$1.call(null,inst_20369));
var inst_20380 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20369) : done.call(null,inst_20369));
var inst_20381 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20378,inst_20380);
var state_20406__$1 = state_20406;
var statearr_20433_20506 = state_20406__$1;
(statearr_20433_20506[(2)] = inst_20381);


cljs.core.async.impl.ioc_helpers.process_exception(state_20406__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (9))){
var inst_20369 = (state_20406[(7)]);
var inst_20383 = (state_20406[(2)]);
var inst_20384 = (inst_20369 + (1));
var inst_20369__$1 = inst_20384;
var state_20406__$1 = (function (){var statearr_20436 = state_20406;
(statearr_20436[(7)] = inst_20369__$1);

(statearr_20436[(10)] = inst_20383);

return statearr_20436;
})();
var statearr_20439_20507 = state_20406__$1;
(statearr_20439_20507[(2)] = null);

(statearr_20439_20507[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (5))){
var inst_20390 = (state_20406[(2)]);
var state_20406__$1 = (function (){var statearr_20442 = state_20406;
(statearr_20442[(11)] = inst_20390);

return statearr_20442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20406__$1,(12),dchan);
} else {
if((state_val_20407 === (14))){
var inst_20392 = (state_20406[(8)]);
var inst_20397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20392);
var state_20406__$1 = state_20406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20406__$1,(16),out,inst_20397);
} else {
if((state_val_20407 === (16))){
var inst_20399 = (state_20406[(2)]);
var state_20406__$1 = (function (){var statearr_20449 = state_20406;
(statearr_20449[(12)] = inst_20399);

return statearr_20449;
})();
var statearr_20450_20508 = state_20406__$1;
(statearr_20450_20508[(2)] = null);

(statearr_20450_20508[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (10))){
var inst_20373 = (state_20406[(2)]);
var inst_20374 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20406__$1 = (function (){var statearr_20453 = state_20406;
(statearr_20453[(13)] = inst_20373);

return statearr_20453;
})();
var statearr_20456_20509 = state_20406__$1;
(statearr_20456_20509[(2)] = inst_20374);


cljs.core.async.impl.ioc_helpers.process_exception(state_20406__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20407 === (8))){
var inst_20388 = (state_20406[(2)]);
var state_20406__$1 = state_20406;
var statearr_20459_20510 = state_20406__$1;
(statearr_20459_20510[(2)] = inst_20388);

(statearr_20459_20510[(1)] = (5));


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
});})(c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16860__auto__,c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_20464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20464[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_20464[(1)] = (1));

return statearr_20464;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_20406){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20406);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e20467){if((e20467 instanceof Object)){
var ex__16864__auto__ = e20467;
var statearr_20468_20511 = state_20406;
(statearr_20468_20511[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20406);

return cljs.core.cst$kw$recur;
} else {
throw e20467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20513 = state_20406;
state_20406 = G__20513;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_20406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_20406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17406__auto__ = (function (){var statearr_20469 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_20469[(6)] = c__17404__auto___20471);

return statearr_20469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___20471,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__20516 = arguments.length;
switch (G__20516) {
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
var c__17404__auto___20609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___20609,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___20609,out){
return (function (state_20548){
var state_val_20549 = (state_20548[(1)]);
if((state_val_20549 === (7))){
var inst_20528 = (state_20548[(7)]);
var inst_20527 = (state_20548[(8)]);
var inst_20527__$1 = (state_20548[(2)]);
var inst_20528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20527__$1,(0),null);
var inst_20529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20527__$1,(1),null);
var inst_20530 = (inst_20528__$1 == null);
var state_20548__$1 = (function (){var statearr_20550 = state_20548;
(statearr_20550[(7)] = inst_20528__$1);

(statearr_20550[(9)] = inst_20529);

(statearr_20550[(8)] = inst_20527__$1);

return statearr_20550;
})();
if(cljs.core.truth_(inst_20530)){
var statearr_20551_20610 = state_20548__$1;
(statearr_20551_20610[(1)] = (8));

} else {
var statearr_20555_20611 = state_20548__$1;
(statearr_20555_20611[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (1))){
var inst_20517 = cljs.core.vec(chs);
var inst_20518 = inst_20517;
var state_20548__$1 = (function (){var statearr_20558 = state_20548;
(statearr_20558[(10)] = inst_20518);

return statearr_20558;
})();
var statearr_20561_20612 = state_20548__$1;
(statearr_20561_20612[(2)] = null);

(statearr_20561_20612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (4))){
var inst_20518 = (state_20548[(10)]);
var state_20548__$1 = state_20548;
return cljs.core.async.ioc_alts_BANG_(state_20548__$1,(7),inst_20518);
} else {
if((state_val_20549 === (6))){
var inst_20544 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
var statearr_20566_20613 = state_20548__$1;
(statearr_20566_20613[(2)] = inst_20544);

(statearr_20566_20613[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (3))){
var inst_20546 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20548__$1,inst_20546);
} else {
if((state_val_20549 === (2))){
var inst_20518 = (state_20548[(10)]);
var inst_20520 = cljs.core.count(inst_20518);
var inst_20521 = (inst_20520 > (0));
var state_20548__$1 = state_20548;
if(cljs.core.truth_(inst_20521)){
var statearr_20574_20619 = state_20548__$1;
(statearr_20574_20619[(1)] = (4));

} else {
var statearr_20577_20620 = state_20548__$1;
(statearr_20577_20620[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (11))){
var inst_20518 = (state_20548[(10)]);
var inst_20537 = (state_20548[(2)]);
var tmp20569 = inst_20518;
var inst_20518__$1 = tmp20569;
var state_20548__$1 = (function (){var statearr_20580 = state_20548;
(statearr_20580[(10)] = inst_20518__$1);

(statearr_20580[(11)] = inst_20537);

return statearr_20580;
})();
var statearr_20583_20621 = state_20548__$1;
(statearr_20583_20621[(2)] = null);

(statearr_20583_20621[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (9))){
var inst_20528 = (state_20548[(7)]);
var state_20548__$1 = state_20548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20548__$1,(11),out,inst_20528);
} else {
if((state_val_20549 === (5))){
var inst_20542 = cljs.core.async.close_BANG_(out);
var state_20548__$1 = state_20548;
var statearr_20592_20623 = state_20548__$1;
(statearr_20592_20623[(2)] = inst_20542);

(statearr_20592_20623[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (10))){
var inst_20540 = (state_20548[(2)]);
var state_20548__$1 = state_20548;
var statearr_20595_20625 = state_20548__$1;
(statearr_20595_20625[(2)] = inst_20540);

(statearr_20595_20625[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20549 === (8))){
var inst_20528 = (state_20548[(7)]);
var inst_20529 = (state_20548[(9)]);
var inst_20518 = (state_20548[(10)]);
var inst_20527 = (state_20548[(8)]);
var inst_20532 = (function (){var cs = inst_20518;
var vec__20523 = inst_20527;
var v = inst_20528;
var c = inst_20529;
return ((function (cs,vec__20523,v,c,inst_20528,inst_20529,inst_20518,inst_20527,state_val_20549,c__17404__auto___20609,out){
return (function (p1__20514_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20514_SHARP_);
});
;})(cs,vec__20523,v,c,inst_20528,inst_20529,inst_20518,inst_20527,state_val_20549,c__17404__auto___20609,out))
})();
var inst_20533 = cljs.core.filterv(inst_20532,inst_20518);
var inst_20518__$1 = inst_20533;
var state_20548__$1 = (function (){var statearr_20602 = state_20548;
(statearr_20602[(10)] = inst_20518__$1);

return statearr_20602;
})();
var statearr_20603_20644 = state_20548__$1;
(statearr_20603_20644[(2)] = null);

(statearr_20603_20644[(1)] = (2));


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
});})(c__17404__auto___20609,out))
;
return ((function (switch__16860__auto__,c__17404__auto___20609,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_20604 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20604[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_20604[(1)] = (1));

return statearr_20604;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_20548){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20548);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e20605){if((e20605 instanceof Object)){
var ex__16864__auto__ = e20605;
var statearr_20606_20645 = state_20548;
(statearr_20606_20645[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20548);

return cljs.core.cst$kw$recur;
} else {
throw e20605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20646 = state_20548;
state_20548 = G__20646;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_20548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_20548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___20609,out))
})();
var state__17406__auto__ = (function (){var statearr_20607 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_20607[(6)] = c__17404__auto___20609);

return statearr_20607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___20609,out))
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
var G__20648 = arguments.length;
switch (G__20648) {
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
var c__17404__auto___20717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___20717,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___20717,out){
return (function (state_20673){
var state_val_20674 = (state_20673[(1)]);
if((state_val_20674 === (7))){
var inst_20655 = (state_20673[(7)]);
var inst_20655__$1 = (state_20673[(2)]);
var inst_20656 = (inst_20655__$1 == null);
var inst_20657 = cljs.core.not(inst_20656);
var state_20673__$1 = (function (){var statearr_20675 = state_20673;
(statearr_20675[(7)] = inst_20655__$1);

return statearr_20675;
})();
if(inst_20657){
var statearr_20676_20726 = state_20673__$1;
(statearr_20676_20726[(1)] = (8));

} else {
var statearr_20677_20729 = state_20673__$1;
(statearr_20677_20729[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (1))){
var inst_20650 = (0);
var state_20673__$1 = (function (){var statearr_20678 = state_20673;
(statearr_20678[(8)] = inst_20650);

return statearr_20678;
})();
var statearr_20679_20732 = state_20673__$1;
(statearr_20679_20732[(2)] = null);

(statearr_20679_20732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (4))){
var state_20673__$1 = state_20673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20673__$1,(7),ch);
} else {
if((state_val_20674 === (6))){
var inst_20668 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20680_20739 = state_20673__$1;
(statearr_20680_20739[(2)] = inst_20668);

(statearr_20680_20739[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (3))){
var inst_20670 = (state_20673[(2)]);
var inst_20671 = cljs.core.async.close_BANG_(out);
var state_20673__$1 = (function (){var statearr_20681 = state_20673;
(statearr_20681[(9)] = inst_20670);

return statearr_20681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20673__$1,inst_20671);
} else {
if((state_val_20674 === (2))){
var inst_20650 = (state_20673[(8)]);
var inst_20652 = (inst_20650 < n);
var state_20673__$1 = state_20673;
if(cljs.core.truth_(inst_20652)){
var statearr_20682_20740 = state_20673__$1;
(statearr_20682_20740[(1)] = (4));

} else {
var statearr_20683_20741 = state_20673__$1;
(statearr_20683_20741[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (11))){
var inst_20650 = (state_20673[(8)]);
var inst_20660 = (state_20673[(2)]);
var inst_20661 = (inst_20650 + (1));
var inst_20650__$1 = inst_20661;
var state_20673__$1 = (function (){var statearr_20684 = state_20673;
(statearr_20684[(10)] = inst_20660);

(statearr_20684[(8)] = inst_20650__$1);

return statearr_20684;
})();
var statearr_20685_20742 = state_20673__$1;
(statearr_20685_20742[(2)] = null);

(statearr_20685_20742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (9))){
var state_20673__$1 = state_20673;
var statearr_20686_20743 = state_20673__$1;
(statearr_20686_20743[(2)] = null);

(statearr_20686_20743[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (5))){
var state_20673__$1 = state_20673;
var statearr_20687_20744 = state_20673__$1;
(statearr_20687_20744[(2)] = null);

(statearr_20687_20744[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (10))){
var inst_20665 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20688_20745 = state_20673__$1;
(statearr_20688_20745[(2)] = inst_20665);

(statearr_20688_20745[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20674 === (8))){
var inst_20655 = (state_20673[(7)]);
var state_20673__$1 = state_20673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20673__$1,(11),out,inst_20655);
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
});})(c__17404__auto___20717,out))
;
return ((function (switch__16860__auto__,c__17404__auto___20717,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_20692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20692[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_20692[(1)] = (1));

return statearr_20692;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_20673){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20673);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e20695){if((e20695 instanceof Object)){
var ex__16864__auto__ = e20695;
var statearr_20698_20746 = state_20673;
(statearr_20698_20746[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20673);

return cljs.core.cst$kw$recur;
} else {
throw e20695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20747 = state_20673;
state_20673 = G__20747;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_20673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_20673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___20717,out))
})();
var state__17406__auto__ = (function (){var statearr_20703 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_20703[(6)] = c__17404__auto___20717);

return statearr_20703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___20717,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20753 = (function (f,ch,meta20754){
this.f = f;
this.ch = ch;
this.meta20754 = meta20754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20755,meta20754__$1){
var self__ = this;
var _20755__$1 = this;
return (new cljs.core.async.t_cljs$core$async20753(self__.f,self__.ch,meta20754__$1));
});

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20755){
var self__ = this;
var _20755__$1 = this;
return self__.meta20754;
});

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20758 = (function (f,ch,meta20754,_,fn1,meta20759){
this.f = f;
this.ch = ch;
this.meta20754 = meta20754;
this._ = _;
this.fn1 = fn1;
this.meta20759 = meta20759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20760,meta20759__$1){
var self__ = this;
var _20760__$1 = this;
return (new cljs.core.async.t_cljs$core$async20758(self__.f,self__.ch,self__.meta20754,self__._,self__.fn1,meta20759__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20760){
var self__ = this;
var _20760__$1 = this;
return self__.meta20759;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20748_SHARP_){
var G__20781 = (((p1__20748_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20748_SHARP_) : self__.f.call(null,p1__20748_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20781) : f1.call(null,G__20781));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20754,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20753], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20759], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20758";

cljs.core.async.t_cljs$core$async20758.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async20758");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20758 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20758(f__$1,ch__$1,meta20754__$1,___$2,fn1__$1,meta20759){
return (new cljs.core.async.t_cljs$core$async20758(f__$1,ch__$1,meta20754__$1,___$2,fn1__$1,meta20759));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20758(self__.f,self__.ch,self__.meta20754,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10793__auto__ = ret;
if(cljs.core.truth_(and__10793__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__10793__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20782 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20782) : self__.f.call(null,G__20782));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20754], null);
});

cljs.core.async.t_cljs$core$async20753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20753";

cljs.core.async.t_cljs$core$async20753.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async20753");
});

cljs.core.async.__GT_t_cljs$core$async20753 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20753(f__$1,ch__$1,meta20754){
return (new cljs.core.async.t_cljs$core$async20753(f__$1,ch__$1,meta20754));
});

}

return (new cljs.core.async.t_cljs$core$async20753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20784 = (function (f,ch,meta20785){
this.f = f;
this.ch = ch;
this.meta20785 = meta20785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20786,meta20785__$1){
var self__ = this;
var _20786__$1 = this;
return (new cljs.core.async.t_cljs$core$async20784(self__.f,self__.ch,meta20785__$1));
});

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20786){
var self__ = this;
var _20786__$1 = this;
return self__.meta20785;
});

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20785], null);
});

cljs.core.async.t_cljs$core$async20784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20784";

cljs.core.async.t_cljs$core$async20784.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async20784");
});

cljs.core.async.__GT_t_cljs$core$async20784 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20784(f__$1,ch__$1,meta20785){
return (new cljs.core.async.t_cljs$core$async20784(f__$1,ch__$1,meta20785));
});

}

return (new cljs.core.async.t_cljs$core$async20784(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20830 = (function (p,ch,meta20831){
this.p = p;
this.ch = ch;
this.meta20831 = meta20831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20832,meta20831__$1){
var self__ = this;
var _20832__$1 = this;
return (new cljs.core.async.t_cljs$core$async20830(self__.p,self__.ch,meta20831__$1));
});

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20832){
var self__ = this;
var _20832__$1 = this;
return self__.meta20831;
});

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20831], null);
});

cljs.core.async.t_cljs$core$async20830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20830";

cljs.core.async.t_cljs$core$async20830.cljs$lang$ctorPrWriter = (function (this__11476__auto__,writer__11477__auto__,opt__11478__auto__){
return cljs.core._write(writer__11477__auto__,"cljs.core.async/t_cljs$core$async20830");
});

cljs.core.async.__GT_t_cljs$core$async20830 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20830(p__$1,ch__$1,meta20831){
return (new cljs.core.async.t_cljs$core$async20830(p__$1,ch__$1,meta20831));
});

}

return (new cljs.core.async.t_cljs$core$async20830(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20837 = arguments.length;
switch (G__20837) {
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
var c__17404__auto___20880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___20880,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___20880,out){
return (function (state_20858){
var state_val_20859 = (state_20858[(1)]);
if((state_val_20859 === (7))){
var inst_20854 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20860_20881 = state_20858__$1;
(statearr_20860_20881[(2)] = inst_20854);

(statearr_20860_20881[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (1))){
var state_20858__$1 = state_20858;
var statearr_20861_20882 = state_20858__$1;
(statearr_20861_20882[(2)] = null);

(statearr_20861_20882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (4))){
var inst_20840 = (state_20858[(7)]);
var inst_20840__$1 = (state_20858[(2)]);
var inst_20841 = (inst_20840__$1 == null);
var state_20858__$1 = (function (){var statearr_20862 = state_20858;
(statearr_20862[(7)] = inst_20840__$1);

return statearr_20862;
})();
if(cljs.core.truth_(inst_20841)){
var statearr_20863_20884 = state_20858__$1;
(statearr_20863_20884[(1)] = (5));

} else {
var statearr_20864_20885 = state_20858__$1;
(statearr_20864_20885[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (6))){
var inst_20840 = (state_20858[(7)]);
var inst_20845 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20840) : p.call(null,inst_20840));
var state_20858__$1 = state_20858;
if(cljs.core.truth_(inst_20845)){
var statearr_20865_20888 = state_20858__$1;
(statearr_20865_20888[(1)] = (8));

} else {
var statearr_20866_20889 = state_20858__$1;
(statearr_20866_20889[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (3))){
var inst_20856 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20858__$1,inst_20856);
} else {
if((state_val_20859 === (2))){
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20858__$1,(4),ch);
} else {
if((state_val_20859 === (11))){
var inst_20848 = (state_20858[(2)]);
var state_20858__$1 = state_20858;
var statearr_20867_20893 = state_20858__$1;
(statearr_20867_20893[(2)] = inst_20848);

(statearr_20867_20893[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (9))){
var state_20858__$1 = state_20858;
var statearr_20868_20894 = state_20858__$1;
(statearr_20868_20894[(2)] = null);

(statearr_20868_20894[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (5))){
var inst_20843 = cljs.core.async.close_BANG_(out);
var state_20858__$1 = state_20858;
var statearr_20869_20895 = state_20858__$1;
(statearr_20869_20895[(2)] = inst_20843);

(statearr_20869_20895[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (10))){
var inst_20851 = (state_20858[(2)]);
var state_20858__$1 = (function (){var statearr_20870 = state_20858;
(statearr_20870[(8)] = inst_20851);

return statearr_20870;
})();
var statearr_20871_20896 = state_20858__$1;
(statearr_20871_20896[(2)] = null);

(statearr_20871_20896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20859 === (8))){
var inst_20840 = (state_20858[(7)]);
var state_20858__$1 = state_20858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20858__$1,(11),out,inst_20840);
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
});})(c__17404__auto___20880,out))
;
return ((function (switch__16860__auto__,c__17404__auto___20880,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_20872 = [null,null,null,null,null,null,null,null,null];
(statearr_20872[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_20872[(1)] = (1));

return statearr_20872;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_20858){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20858);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e20873){if((e20873 instanceof Object)){
var ex__16864__auto__ = e20873;
var statearr_20874_20898 = state_20858;
(statearr_20874_20898[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20858);

return cljs.core.cst$kw$recur;
} else {
throw e20873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__20899 = state_20858;
state_20858 = G__20899;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_20858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_20858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___20880,out))
})();
var state__17406__auto__ = (function (){var statearr_20875 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_20875[(6)] = c__17404__auto___20880);

return statearr_20875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___20880,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20901 = arguments.length;
switch (G__20901) {
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
var c__17404__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto__){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto__){
return (function (state_20974){
var state_val_20975 = (state_20974[(1)]);
if((state_val_20975 === (7))){
var inst_20967 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
var statearr_20978_21017 = state_20974__$1;
(statearr_20978_21017[(2)] = inst_20967);

(statearr_20978_21017[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (20))){
var inst_20934 = (state_20974[(7)]);
var inst_20948 = (state_20974[(2)]);
var inst_20949 = cljs.core.next(inst_20934);
var inst_20920 = inst_20949;
var inst_20921 = null;
var inst_20922 = (0);
var inst_20923 = (0);
var state_20974__$1 = (function (){var statearr_20979 = state_20974;
(statearr_20979[(8)] = inst_20923);

(statearr_20979[(9)] = inst_20920);

(statearr_20979[(10)] = inst_20948);

(statearr_20979[(11)] = inst_20921);

(statearr_20979[(12)] = inst_20922);

return statearr_20979;
})();
var statearr_20981_21020 = state_20974__$1;
(statearr_20981_21020[(2)] = null);

(statearr_20981_21020[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (1))){
var state_20974__$1 = state_20974;
var statearr_20982_21021 = state_20974__$1;
(statearr_20982_21021[(2)] = null);

(statearr_20982_21021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (4))){
var inst_20909 = (state_20974[(13)]);
var inst_20909__$1 = (state_20974[(2)]);
var inst_20910 = (inst_20909__$1 == null);
var state_20974__$1 = (function (){var statearr_20983 = state_20974;
(statearr_20983[(13)] = inst_20909__$1);

return statearr_20983;
})();
if(cljs.core.truth_(inst_20910)){
var statearr_20984_21026 = state_20974__$1;
(statearr_20984_21026[(1)] = (5));

} else {
var statearr_20985_21027 = state_20974__$1;
(statearr_20985_21027[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (15))){
var state_20974__$1 = state_20974;
var statearr_20989_21028 = state_20974__$1;
(statearr_20989_21028[(2)] = null);

(statearr_20989_21028[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (21))){
var state_20974__$1 = state_20974;
var statearr_20990_21029 = state_20974__$1;
(statearr_20990_21029[(2)] = null);

(statearr_20990_21029[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (13))){
var inst_20923 = (state_20974[(8)]);
var inst_20920 = (state_20974[(9)]);
var inst_20921 = (state_20974[(11)]);
var inst_20922 = (state_20974[(12)]);
var inst_20930 = (state_20974[(2)]);
var inst_20931 = (inst_20923 + (1));
var tmp20986 = inst_20920;
var tmp20987 = inst_20921;
var tmp20988 = inst_20922;
var inst_20920__$1 = tmp20986;
var inst_20921__$1 = tmp20987;
var inst_20922__$1 = tmp20988;
var inst_20923__$1 = inst_20931;
var state_20974__$1 = (function (){var statearr_20991 = state_20974;
(statearr_20991[(14)] = inst_20930);

(statearr_20991[(8)] = inst_20923__$1);

(statearr_20991[(9)] = inst_20920__$1);

(statearr_20991[(11)] = inst_20921__$1);

(statearr_20991[(12)] = inst_20922__$1);

return statearr_20991;
})();
var statearr_20992_21031 = state_20974__$1;
(statearr_20992_21031[(2)] = null);

(statearr_20992_21031[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (22))){
var state_20974__$1 = state_20974;
var statearr_20993_21034 = state_20974__$1;
(statearr_20993_21034[(2)] = null);

(statearr_20993_21034[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (6))){
var inst_20909 = (state_20974[(13)]);
var inst_20918 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20909) : f.call(null,inst_20909));
var inst_20919 = cljs.core.seq(inst_20918);
var inst_20920 = inst_20919;
var inst_20921 = null;
var inst_20922 = (0);
var inst_20923 = (0);
var state_20974__$1 = (function (){var statearr_20994 = state_20974;
(statearr_20994[(8)] = inst_20923);

(statearr_20994[(9)] = inst_20920);

(statearr_20994[(11)] = inst_20921);

(statearr_20994[(12)] = inst_20922);

return statearr_20994;
})();
var statearr_20995_21038 = state_20974__$1;
(statearr_20995_21038[(2)] = null);

(statearr_20995_21038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (17))){
var inst_20934 = (state_20974[(7)]);
var inst_20941 = cljs.core.chunk_first(inst_20934);
var inst_20942 = cljs.core.chunk_rest(inst_20934);
var inst_20943 = cljs.core.count(inst_20941);
var inst_20920 = inst_20942;
var inst_20921 = inst_20941;
var inst_20922 = inst_20943;
var inst_20923 = (0);
var state_20974__$1 = (function (){var statearr_20996 = state_20974;
(statearr_20996[(8)] = inst_20923);

(statearr_20996[(9)] = inst_20920);

(statearr_20996[(11)] = inst_20921);

(statearr_20996[(12)] = inst_20922);

return statearr_20996;
})();
var statearr_20997_21043 = state_20974__$1;
(statearr_20997_21043[(2)] = null);

(statearr_20997_21043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (3))){
var inst_20969 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20974__$1,inst_20969);
} else {
if((state_val_20975 === (12))){
var inst_20957 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
var statearr_20998_21051 = state_20974__$1;
(statearr_20998_21051[(2)] = inst_20957);

(statearr_20998_21051[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (2))){
var state_20974__$1 = state_20974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20974__$1,(4),in$);
} else {
if((state_val_20975 === (23))){
var inst_20965 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
var statearr_20999_21054 = state_20974__$1;
(statearr_20999_21054[(2)] = inst_20965);

(statearr_20999_21054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (19))){
var inst_20952 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
var statearr_21000_21057 = state_20974__$1;
(statearr_21000_21057[(2)] = inst_20952);

(statearr_21000_21057[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (11))){
var inst_20920 = (state_20974[(9)]);
var inst_20934 = (state_20974[(7)]);
var inst_20934__$1 = cljs.core.seq(inst_20920);
var state_20974__$1 = (function (){var statearr_21001 = state_20974;
(statearr_21001[(7)] = inst_20934__$1);

return statearr_21001;
})();
if(inst_20934__$1){
var statearr_21002_21059 = state_20974__$1;
(statearr_21002_21059[(1)] = (14));

} else {
var statearr_21003_21061 = state_20974__$1;
(statearr_21003_21061[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (9))){
var inst_20959 = (state_20974[(2)]);
var inst_20960 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20974__$1 = (function (){var statearr_21004 = state_20974;
(statearr_21004[(15)] = inst_20959);

return statearr_21004;
})();
if(cljs.core.truth_(inst_20960)){
var statearr_21005_21072 = state_20974__$1;
(statearr_21005_21072[(1)] = (21));

} else {
var statearr_21006_21074 = state_20974__$1;
(statearr_21006_21074[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (5))){
var inst_20912 = cljs.core.async.close_BANG_(out);
var state_20974__$1 = state_20974;
var statearr_21007_21079 = state_20974__$1;
(statearr_21007_21079[(2)] = inst_20912);

(statearr_21007_21079[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (14))){
var inst_20934 = (state_20974[(7)]);
var inst_20939 = cljs.core.chunked_seq_QMARK_(inst_20934);
var state_20974__$1 = state_20974;
if(inst_20939){
var statearr_21008_21087 = state_20974__$1;
(statearr_21008_21087[(1)] = (17));

} else {
var statearr_21009_21093 = state_20974__$1;
(statearr_21009_21093[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (16))){
var inst_20955 = (state_20974[(2)]);
var state_20974__$1 = state_20974;
var statearr_21010_21096 = state_20974__$1;
(statearr_21010_21096[(2)] = inst_20955);

(statearr_21010_21096[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20975 === (10))){
var inst_20923 = (state_20974[(8)]);
var inst_20921 = (state_20974[(11)]);
var inst_20928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20921,inst_20923);
var state_20974__$1 = state_20974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20974__$1,(13),out,inst_20928);
} else {
if((state_val_20975 === (18))){
var inst_20934 = (state_20974[(7)]);
var inst_20946 = cljs.core.first(inst_20934);
var state_20974__$1 = state_20974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20974__$1,(20),out,inst_20946);
} else {
if((state_val_20975 === (8))){
var inst_20923 = (state_20974[(8)]);
var inst_20922 = (state_20974[(12)]);
var inst_20925 = (inst_20923 < inst_20922);
var inst_20926 = inst_20925;
var state_20974__$1 = state_20974;
if(cljs.core.truth_(inst_20926)){
var statearr_21011_21102 = state_20974__$1;
(statearr_21011_21102[(1)] = (10));

} else {
var statearr_21012_21105 = state_20974__$1;
(statearr_21012_21105[(1)] = (11));

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
});})(c__17404__auto__))
;
return ((function (switch__16860__auto__,c__17404__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____0 = (function (){
var statearr_21013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21013[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__);

(statearr_21013[(1)] = (1));

return statearr_21013;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____1 = (function (state_20974){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_20974);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e21014){if((e21014 instanceof Object)){
var ex__16864__auto__ = e21014;
var statearr_21015_21113 = state_20974;
(statearr_21015_21113[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20974);

return cljs.core.cst$kw$recur;
} else {
throw e21014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__21114 = state_20974;
state_20974 = G__21114;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__ = function(state_20974){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____1.call(this,state_20974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16861__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto__))
})();
var state__17406__auto__ = (function (){var statearr_21016 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_21016[(6)] = c__17404__auto__);

return statearr_21016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto__))
);

return c__17404__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21122 = arguments.length;
switch (G__21122) {
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
var G__21142 = arguments.length;
switch (G__21142) {
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
var G__21161 = arguments.length;
switch (G__21161) {
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
var c__17404__auto___21228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___21228,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___21228,out){
return (function (state_21195){
var state_val_21196 = (state_21195[(1)]);
if((state_val_21196 === (7))){
var inst_21188 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21197_21231 = state_21195__$1;
(statearr_21197_21231[(2)] = inst_21188);

(statearr_21197_21231[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (1))){
var inst_21168 = null;
var state_21195__$1 = (function (){var statearr_21198 = state_21195;
(statearr_21198[(7)] = inst_21168);

return statearr_21198;
})();
var statearr_21199_21232 = state_21195__$1;
(statearr_21199_21232[(2)] = null);

(statearr_21199_21232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (4))){
var inst_21173 = (state_21195[(8)]);
var inst_21173__$1 = (state_21195[(2)]);
var inst_21174 = (inst_21173__$1 == null);
var inst_21175 = cljs.core.not(inst_21174);
var state_21195__$1 = (function (){var statearr_21200 = state_21195;
(statearr_21200[(8)] = inst_21173__$1);

return statearr_21200;
})();
if(inst_21175){
var statearr_21201_21233 = state_21195__$1;
(statearr_21201_21233[(1)] = (5));

} else {
var statearr_21202_21234 = state_21195__$1;
(statearr_21202_21234[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (6))){
var state_21195__$1 = state_21195;
var statearr_21203_21235 = state_21195__$1;
(statearr_21203_21235[(2)] = null);

(statearr_21203_21235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (3))){
var inst_21190 = (state_21195[(2)]);
var inst_21191 = cljs.core.async.close_BANG_(out);
var state_21195__$1 = (function (){var statearr_21204 = state_21195;
(statearr_21204[(9)] = inst_21190);

return statearr_21204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21195__$1,inst_21191);
} else {
if((state_val_21196 === (2))){
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21195__$1,(4),ch);
} else {
if((state_val_21196 === (11))){
var inst_21173 = (state_21195[(8)]);
var inst_21182 = (state_21195[(2)]);
var inst_21168 = inst_21173;
var state_21195__$1 = (function (){var statearr_21207 = state_21195;
(statearr_21207[(10)] = inst_21182);

(statearr_21207[(7)] = inst_21168);

return statearr_21207;
})();
var statearr_21209_21242 = state_21195__$1;
(statearr_21209_21242[(2)] = null);

(statearr_21209_21242[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (9))){
var inst_21173 = (state_21195[(8)]);
var state_21195__$1 = state_21195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21195__$1,(11),out,inst_21173);
} else {
if((state_val_21196 === (5))){
var inst_21173 = (state_21195[(8)]);
var inst_21168 = (state_21195[(7)]);
var inst_21177 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21173,inst_21168);
var state_21195__$1 = state_21195;
if(inst_21177){
var statearr_21214_21243 = state_21195__$1;
(statearr_21214_21243[(1)] = (8));

} else {
var statearr_21215_21244 = state_21195__$1;
(statearr_21215_21244[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (10))){
var inst_21185 = (state_21195[(2)]);
var state_21195__$1 = state_21195;
var statearr_21216_21245 = state_21195__$1;
(statearr_21216_21245[(2)] = inst_21185);

(statearr_21216_21245[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21196 === (8))){
var inst_21168 = (state_21195[(7)]);
var tmp21212 = inst_21168;
var inst_21168__$1 = tmp21212;
var state_21195__$1 = (function (){var statearr_21217 = state_21195;
(statearr_21217[(7)] = inst_21168__$1);

return statearr_21217;
})();
var statearr_21218_21250 = state_21195__$1;
(statearr_21218_21250[(2)] = null);

(statearr_21218_21250[(1)] = (2));


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
});})(c__17404__auto___21228,out))
;
return ((function (switch__16860__auto__,c__17404__auto___21228,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_21219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21219[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_21219[(1)] = (1));

return statearr_21219;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_21195){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_21195);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e21220){if((e21220 instanceof Object)){
var ex__16864__auto__ = e21220;
var statearr_21221_21251 = state_21195;
(statearr_21221_21251[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21195);

return cljs.core.cst$kw$recur;
} else {
throw e21220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__21252 = state_21195;
state_21195 = G__21252;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_21195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_21195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___21228,out))
})();
var state__17406__auto__ = (function (){var statearr_21222 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_21222[(6)] = c__17404__auto___21228);

return statearr_21222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___21228,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21256 = arguments.length;
switch (G__21256) {
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
var c__17404__auto___21356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___21356,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___21356,out){
return (function (state_21300){
var state_val_21301 = (state_21300[(1)]);
if((state_val_21301 === (7))){
var inst_21296 = (state_21300[(2)]);
var state_21300__$1 = state_21300;
var statearr_21303_21357 = state_21300__$1;
(statearr_21303_21357[(2)] = inst_21296);

(statearr_21303_21357[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (1))){
var inst_21260 = (new Array(n));
var inst_21262 = inst_21260;
var inst_21263 = (0);
var state_21300__$1 = (function (){var statearr_21304 = state_21300;
(statearr_21304[(7)] = inst_21262);

(statearr_21304[(8)] = inst_21263);

return statearr_21304;
})();
var statearr_21305_21359 = state_21300__$1;
(statearr_21305_21359[(2)] = null);

(statearr_21305_21359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (4))){
var inst_21267 = (state_21300[(9)]);
var inst_21267__$1 = (state_21300[(2)]);
var inst_21269 = (inst_21267__$1 == null);
var inst_21270 = cljs.core.not(inst_21269);
var state_21300__$1 = (function (){var statearr_21307 = state_21300;
(statearr_21307[(9)] = inst_21267__$1);

return statearr_21307;
})();
if(inst_21270){
var statearr_21308_21360 = state_21300__$1;
(statearr_21308_21360[(1)] = (5));

} else {
var statearr_21309_21361 = state_21300__$1;
(statearr_21309_21361[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (15))){
var inst_21290 = (state_21300[(2)]);
var state_21300__$1 = state_21300;
var statearr_21312_21362 = state_21300__$1;
(statearr_21312_21362[(2)] = inst_21290);

(statearr_21312_21362[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (13))){
var state_21300__$1 = state_21300;
var statearr_21315_21372 = state_21300__$1;
(statearr_21315_21372[(2)] = null);

(statearr_21315_21372[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (6))){
var inst_21263 = (state_21300[(8)]);
var inst_21286 = (inst_21263 > (0));
var state_21300__$1 = state_21300;
if(cljs.core.truth_(inst_21286)){
var statearr_21316_21374 = state_21300__$1;
(statearr_21316_21374[(1)] = (12));

} else {
var statearr_21317_21375 = state_21300__$1;
(statearr_21317_21375[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (3))){
var inst_21298 = (state_21300[(2)]);
var state_21300__$1 = state_21300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21300__$1,inst_21298);
} else {
if((state_val_21301 === (12))){
var inst_21262 = (state_21300[(7)]);
var inst_21288 = cljs.core.vec(inst_21262);
var state_21300__$1 = state_21300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21300__$1,(15),out,inst_21288);
} else {
if((state_val_21301 === (2))){
var state_21300__$1 = state_21300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21300__$1,(4),ch);
} else {
if((state_val_21301 === (11))){
var inst_21280 = (state_21300[(2)]);
var inst_21281 = (new Array(n));
var inst_21262 = inst_21281;
var inst_21263 = (0);
var state_21300__$1 = (function (){var statearr_21323 = state_21300;
(statearr_21323[(7)] = inst_21262);

(statearr_21323[(8)] = inst_21263);

(statearr_21323[(10)] = inst_21280);

return statearr_21323;
})();
var statearr_21324_21382 = state_21300__$1;
(statearr_21324_21382[(2)] = null);

(statearr_21324_21382[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (9))){
var inst_21262 = (state_21300[(7)]);
var inst_21278 = cljs.core.vec(inst_21262);
var state_21300__$1 = state_21300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21300__$1,(11),out,inst_21278);
} else {
if((state_val_21301 === (5))){
var inst_21273 = (state_21300[(11)]);
var inst_21262 = (state_21300[(7)]);
var inst_21267 = (state_21300[(9)]);
var inst_21263 = (state_21300[(8)]);
var inst_21272 = (inst_21262[inst_21263] = inst_21267);
var inst_21273__$1 = (inst_21263 + (1));
var inst_21274 = (inst_21273__$1 < n);
var state_21300__$1 = (function (){var statearr_21326 = state_21300;
(statearr_21326[(11)] = inst_21273__$1);

(statearr_21326[(12)] = inst_21272);

return statearr_21326;
})();
if(cljs.core.truth_(inst_21274)){
var statearr_21327_21389 = state_21300__$1;
(statearr_21327_21389[(1)] = (8));

} else {
var statearr_21328_21390 = state_21300__$1;
(statearr_21328_21390[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (14))){
var inst_21293 = (state_21300[(2)]);
var inst_21294 = cljs.core.async.close_BANG_(out);
var state_21300__$1 = (function (){var statearr_21332 = state_21300;
(statearr_21332[(13)] = inst_21293);

return statearr_21332;
})();
var statearr_21335_21392 = state_21300__$1;
(statearr_21335_21392[(2)] = inst_21294);

(statearr_21335_21392[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (10))){
var inst_21284 = (state_21300[(2)]);
var state_21300__$1 = state_21300;
var statearr_21336_21396 = state_21300__$1;
(statearr_21336_21396[(2)] = inst_21284);

(statearr_21336_21396[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21301 === (8))){
var inst_21273 = (state_21300[(11)]);
var inst_21262 = (state_21300[(7)]);
var tmp21331 = inst_21262;
var inst_21262__$1 = tmp21331;
var inst_21263 = inst_21273;
var state_21300__$1 = (function (){var statearr_21337 = state_21300;
(statearr_21337[(7)] = inst_21262__$1);

(statearr_21337[(8)] = inst_21263);

return statearr_21337;
})();
var statearr_21338_21402 = state_21300__$1;
(statearr_21338_21402[(2)] = null);

(statearr_21338_21402[(1)] = (2));


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
});})(c__17404__auto___21356,out))
;
return ((function (switch__16860__auto__,c__17404__auto___21356,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_21343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21343[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_21343[(1)] = (1));

return statearr_21343;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_21300){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_21300);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e21345){if((e21345 instanceof Object)){
var ex__16864__auto__ = e21345;
var statearr_21346_21409 = state_21300;
(statearr_21346_21409[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21300);

return cljs.core.cst$kw$recur;
} else {
throw e21345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__21411 = state_21300;
state_21300 = G__21411;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_21300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_21300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___21356,out))
})();
var state__17406__auto__ = (function (){var statearr_21348 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_21348[(6)] = c__17404__auto___21356);

return statearr_21348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___21356,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21422 = arguments.length;
switch (G__21422) {
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
var c__17404__auto___21550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__17404__auto___21550,out){
return (function (){
var f__17405__auto__ = (function (){var switch__16860__auto__ = ((function (c__17404__auto___21550,out){
return (function (state_21478){
var state_val_21479 = (state_21478[(1)]);
if((state_val_21479 === (7))){
var inst_21474 = (state_21478[(2)]);
var state_21478__$1 = state_21478;
var statearr_21484_21556 = state_21478__$1;
(statearr_21484_21556[(2)] = inst_21474);

(statearr_21484_21556[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (1))){
var inst_21427 = [];
var inst_21428 = inst_21427;
var inst_21429 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_21478__$1 = (function (){var statearr_21486 = state_21478;
(statearr_21486[(7)] = inst_21428);

(statearr_21486[(8)] = inst_21429);

return statearr_21486;
})();
var statearr_21487_21558 = state_21478__$1;
(statearr_21487_21558[(2)] = null);

(statearr_21487_21558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (4))){
var inst_21432 = (state_21478[(9)]);
var inst_21432__$1 = (state_21478[(2)]);
var inst_21433 = (inst_21432__$1 == null);
var inst_21434 = cljs.core.not(inst_21433);
var state_21478__$1 = (function (){var statearr_21488 = state_21478;
(statearr_21488[(9)] = inst_21432__$1);

return statearr_21488;
})();
if(inst_21434){
var statearr_21489_21563 = state_21478__$1;
(statearr_21489_21563[(1)] = (5));

} else {
var statearr_21490_21564 = state_21478__$1;
(statearr_21490_21564[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (15))){
var inst_21468 = (state_21478[(2)]);
var state_21478__$1 = state_21478;
var statearr_21494_21567 = state_21478__$1;
(statearr_21494_21567[(2)] = inst_21468);

(statearr_21494_21567[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (13))){
var state_21478__$1 = state_21478;
var statearr_21500_21568 = state_21478__$1;
(statearr_21500_21568[(2)] = null);

(statearr_21500_21568[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (6))){
var inst_21428 = (state_21478[(7)]);
var inst_21463 = inst_21428.length;
var inst_21464 = (inst_21463 > (0));
var state_21478__$1 = state_21478;
if(cljs.core.truth_(inst_21464)){
var statearr_21501_21572 = state_21478__$1;
(statearr_21501_21572[(1)] = (12));

} else {
var statearr_21502_21573 = state_21478__$1;
(statearr_21502_21573[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (3))){
var inst_21476 = (state_21478[(2)]);
var state_21478__$1 = state_21478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21478__$1,inst_21476);
} else {
if((state_val_21479 === (12))){
var inst_21428 = (state_21478[(7)]);
var inst_21466 = cljs.core.vec(inst_21428);
var state_21478__$1 = state_21478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21478__$1,(15),out,inst_21466);
} else {
if((state_val_21479 === (2))){
var state_21478__$1 = state_21478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21478__$1,(4),ch);
} else {
if((state_val_21479 === (11))){
var inst_21436 = (state_21478[(10)]);
var inst_21432 = (state_21478[(9)]);
var inst_21451 = (state_21478[(2)]);
var inst_21452 = [];
var inst_21454 = inst_21452.push(inst_21432);
var inst_21428 = inst_21452;
var inst_21429 = inst_21436;
var state_21478__$1 = (function (){var statearr_21513 = state_21478;
(statearr_21513[(11)] = inst_21454);

(statearr_21513[(7)] = inst_21428);

(statearr_21513[(8)] = inst_21429);

(statearr_21513[(12)] = inst_21451);

return statearr_21513;
})();
var statearr_21514_21584 = state_21478__$1;
(statearr_21514_21584[(2)] = null);

(statearr_21514_21584[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (9))){
var inst_21428 = (state_21478[(7)]);
var inst_21449 = cljs.core.vec(inst_21428);
var state_21478__$1 = state_21478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21478__$1,(11),out,inst_21449);
} else {
if((state_val_21479 === (5))){
var inst_21436 = (state_21478[(10)]);
var inst_21432 = (state_21478[(9)]);
var inst_21429 = (state_21478[(8)]);
var inst_21436__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21432) : f.call(null,inst_21432));
var inst_21442 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21436__$1,inst_21429);
var inst_21443 = cljs.core.keyword_identical_QMARK_(inst_21429,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_21444 = (inst_21442) || (inst_21443);
var state_21478__$1 = (function (){var statearr_21522 = state_21478;
(statearr_21522[(10)] = inst_21436__$1);

return statearr_21522;
})();
if(cljs.core.truth_(inst_21444)){
var statearr_21523_21588 = state_21478__$1;
(statearr_21523_21588[(1)] = (8));

} else {
var statearr_21525_21589 = state_21478__$1;
(statearr_21525_21589[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (14))){
var inst_21471 = (state_21478[(2)]);
var inst_21472 = cljs.core.async.close_BANG_(out);
var state_21478__$1 = (function (){var statearr_21527 = state_21478;
(statearr_21527[(13)] = inst_21471);

return statearr_21527;
})();
var statearr_21528_21594 = state_21478__$1;
(statearr_21528_21594[(2)] = inst_21472);

(statearr_21528_21594[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (10))){
var inst_21461 = (state_21478[(2)]);
var state_21478__$1 = state_21478;
var statearr_21529_21595 = state_21478__$1;
(statearr_21529_21595[(2)] = inst_21461);

(statearr_21529_21595[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21479 === (8))){
var inst_21436 = (state_21478[(10)]);
var inst_21432 = (state_21478[(9)]);
var inst_21428 = (state_21478[(7)]);
var inst_21446 = inst_21428.push(inst_21432);
var tmp21526 = inst_21428;
var inst_21428__$1 = tmp21526;
var inst_21429 = inst_21436;
var state_21478__$1 = (function (){var statearr_21532 = state_21478;
(statearr_21532[(14)] = inst_21446);

(statearr_21532[(7)] = inst_21428__$1);

(statearr_21532[(8)] = inst_21429);

return statearr_21532;
})();
var statearr_21534_21598 = state_21478__$1;
(statearr_21534_21598[(2)] = null);

(statearr_21534_21598[(1)] = (2));


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
});})(c__17404__auto___21550,out))
;
return ((function (switch__16860__auto__,c__17404__auto___21550,out){
return (function() {
var cljs$core$async$state_machine__16861__auto__ = null;
var cljs$core$async$state_machine__16861__auto____0 = (function (){
var statearr_21535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21535[(0)] = cljs$core$async$state_machine__16861__auto__);

(statearr_21535[(1)] = (1));

return statearr_21535;
});
var cljs$core$async$state_machine__16861__auto____1 = (function (state_21478){
while(true){
var ret_value__16862__auto__ = (function (){try{while(true){
var result__16863__auto__ = switch__16860__auto__(state_21478);
if(cljs.core.keyword_identical_QMARK_(result__16863__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16863__auto__;
}
break;
}
}catch (e21536){if((e21536 instanceof Object)){
var ex__16864__auto__ = e21536;
var statearr_21537_21600 = state_21478;
(statearr_21537_21600[(5)] = ex__16864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21478);

return cljs.core.cst$kw$recur;
} else {
throw e21536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16862__auto__,cljs.core.cst$kw$recur)){
var G__21601 = state_21478;
state_21478 = G__21601;
continue;
} else {
return ret_value__16862__auto__;
}
break;
}
});
cljs$core$async$state_machine__16861__auto__ = function(state_21478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16861__auto____1.call(this,state_21478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16861__auto____0;
cljs$core$async$state_machine__16861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16861__auto____1;
return cljs$core$async$state_machine__16861__auto__;
})()
;})(switch__16860__auto__,c__17404__auto___21550,out))
})();
var state__17406__auto__ = (function (){var statearr_21540 = (f__17405__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17405__auto__.cljs$core$IFn$_invoke$arity$0() : f__17405__auto__.call(null));
(statearr_21540[(6)] = c__17404__auto___21550);

return statearr_21540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17406__auto__);
});})(c__17404__auto___21550,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


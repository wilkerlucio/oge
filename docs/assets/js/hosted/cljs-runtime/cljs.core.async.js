goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33911 = arguments.length;
switch (G__33911) {
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
if(typeof cljs.core.async.t_cljs$core$async33912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33912 = (function (f,blockable,meta33913){
this.f = f;
this.blockable = blockable;
this.meta33913 = meta33913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33914,meta33913__$1){
var self__ = this;
var _33914__$1 = this;
return (new cljs.core.async.t_cljs$core$async33912(self__.f,self__.blockable,meta33913__$1));
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33914){
var self__ = this;
var _33914__$1 = this;
return self__.meta33913;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33913","meta33913",-1334928395,null)], null);
});

cljs.core.async.t_cljs$core$async33912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33912";

cljs.core.async.t_cljs$core$async33912.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async33912");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33912.
 */
cljs.core.async.__GT_t_cljs$core$async33912 = (function cljs$core$async$__GT_t_cljs$core$async33912(f__$1,blockable__$1,meta33913){
return (new cljs.core.async.t_cljs$core$async33912(f__$1,blockable__$1,meta33913));
});

}

return (new cljs.core.async.t_cljs$core$async33912(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__33918 = arguments.length;
switch (G__33918) {
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
var G__33921 = arguments.length;
switch (G__33921) {
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
var G__33924 = arguments.length;
switch (G__33924) {
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
var val_33926 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33926) : fn1.call(null,val_33926));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33926,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33926) : fn1.call(null,val_33926));
});})(val_33926,ret))
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
var G__33928 = arguments.length;
switch (G__33928) {
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
var n__4376__auto___33930 = n;
var x_33931 = (0);
while(true){
if((x_33931 < n__4376__auto___33930)){
(a[x_33931] = (0));

var G__33932 = (x_33931 + (1));
x_33931 = G__33932;
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

var G__33933 = (i + (1));
i = G__33933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async33934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33934 = (function (flag,meta33935){
this.flag = flag;
this.meta33935 = meta33935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33936,meta33935__$1){
var self__ = this;
var _33936__$1 = this;
return (new cljs.core.async.t_cljs$core$async33934(self__.flag,meta33935__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33936){
var self__ = this;
var _33936__$1 = this;
return self__.meta33935;
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33935","meta33935",-673824383,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33934";

cljs.core.async.t_cljs$core$async33934.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async33934");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33934.
 */
cljs.core.async.__GT_t_cljs$core$async33934 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33934(flag__$1,meta33935){
return (new cljs.core.async.t_cljs$core$async33934(flag__$1,meta33935));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33934(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33937 = (function (flag,cb,meta33938){
this.flag = flag;
this.cb = cb;
this.meta33938 = meta33938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33939,meta33938__$1){
var self__ = this;
var _33939__$1 = this;
return (new cljs.core.async.t_cljs$core$async33937(self__.flag,self__.cb,meta33938__$1));
});

cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33939){
var self__ = this;
var _33939__$1 = this;
return self__.meta33938;
});

cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33938","meta33938",-428621256,null)], null);
});

cljs.core.async.t_cljs$core$async33937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33937";

cljs.core.async.t_cljs$core$async33937.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async33937");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33937.
 */
cljs.core.async.__GT_t_cljs$core$async33937 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33937(flag__$1,cb__$1,meta33938){
return (new cljs.core.async.t_cljs$core$async33937(flag__$1,cb__$1,meta33938));
});

}

return (new cljs.core.async.t_cljs$core$async33937(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33940_SHARP_){
var G__33942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33940_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33942) : fret.call(null,G__33942));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33941_SHARP_){
var G__33943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33941_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33943) : fret.call(null,G__33943));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33944 = (i + (1));
i = G__33944;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___33950 = arguments.length;
var i__4500__auto___33951 = (0);
while(true){
if((i__4500__auto___33951 < len__4499__auto___33950)){
args__4502__auto__.push((arguments[i__4500__auto___33951]));

var G__33952 = (i__4500__auto___33951 + (1));
i__4500__auto___33951 = G__33952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33947){
var map__33948 = p__33947;
var map__33948__$1 = ((((!((map__33948 == null)))?(((((map__33948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33948):map__33948);
var opts = map__33948__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33945){
var G__33946 = cljs.core.first(seq33945);
var seq33945__$1 = cljs.core.next(seq33945);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33946,seq33945__$1);
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
var G__33954 = arguments.length;
switch (G__33954) {
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
var c__33851__auto___34000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___34000){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___34000){
return (function (state_33978){
var state_val_33979 = (state_33978[(1)]);
if((state_val_33979 === (7))){
var inst_33974 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
var statearr_33980_34001 = state_33978__$1;
(statearr_33980_34001[(2)] = inst_33974);

(statearr_33980_34001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (1))){
var state_33978__$1 = state_33978;
var statearr_33981_34002 = state_33978__$1;
(statearr_33981_34002[(2)] = null);

(statearr_33981_34002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (4))){
var inst_33957 = (state_33978[(7)]);
var inst_33957__$1 = (state_33978[(2)]);
var inst_33958 = (inst_33957__$1 == null);
var state_33978__$1 = (function (){var statearr_33982 = state_33978;
(statearr_33982[(7)] = inst_33957__$1);

return statearr_33982;
})();
if(cljs.core.truth_(inst_33958)){
var statearr_33983_34003 = state_33978__$1;
(statearr_33983_34003[(1)] = (5));

} else {
var statearr_33984_34004 = state_33978__$1;
(statearr_33984_34004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (13))){
var state_33978__$1 = state_33978;
var statearr_33985_34005 = state_33978__$1;
(statearr_33985_34005[(2)] = null);

(statearr_33985_34005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (6))){
var inst_33957 = (state_33978[(7)]);
var state_33978__$1 = state_33978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33978__$1,(11),to,inst_33957);
} else {
if((state_val_33979 === (3))){
var inst_33976 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33978__$1,inst_33976);
} else {
if((state_val_33979 === (12))){
var state_33978__$1 = state_33978;
var statearr_33986_34006 = state_33978__$1;
(statearr_33986_34006[(2)] = null);

(statearr_33986_34006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (2))){
var state_33978__$1 = state_33978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33978__$1,(4),from);
} else {
if((state_val_33979 === (11))){
var inst_33967 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
if(cljs.core.truth_(inst_33967)){
var statearr_33987_34007 = state_33978__$1;
(statearr_33987_34007[(1)] = (12));

} else {
var statearr_33988_34008 = state_33978__$1;
(statearr_33988_34008[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (9))){
var state_33978__$1 = state_33978;
var statearr_33989_34009 = state_33978__$1;
(statearr_33989_34009[(2)] = null);

(statearr_33989_34009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (5))){
var state_33978__$1 = state_33978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33990_34010 = state_33978__$1;
(statearr_33990_34010[(1)] = (8));

} else {
var statearr_33991_34011 = state_33978__$1;
(statearr_33991_34011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (14))){
var inst_33972 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
var statearr_33992_34012 = state_33978__$1;
(statearr_33992_34012[(2)] = inst_33972);

(statearr_33992_34012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (10))){
var inst_33964 = (state_33978[(2)]);
var state_33978__$1 = state_33978;
var statearr_33993_34013 = state_33978__$1;
(statearr_33993_34013[(2)] = inst_33964);

(statearr_33993_34013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33979 === (8))){
var inst_33961 = cljs.core.async.close_BANG_(to);
var state_33978__$1 = state_33978;
var statearr_33994_34014 = state_33978__$1;
(statearr_33994_34014[(2)] = inst_33961);

(statearr_33994_34014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___34000))
;
return ((function (switch__32834__auto__,c__33851__auto___34000){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_33995 = [null,null,null,null,null,null,null,null];
(statearr_33995[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_33995[(1)] = (1));

return statearr_33995;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_33978){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_33978);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e33996){if((e33996 instanceof Object)){
var ex__32838__auto__ = e33996;
var statearr_33997_34015 = state_33978;
(statearr_33997_34015[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34016 = state_33978;
state_33978 = G__34016;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_33978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_33978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___34000))
})();
var state__33853__auto__ = (function (){var statearr_33998 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_33998[(6)] = c__33851__auto___34000);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___34000))
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
return (function (p__34017){
var vec__34018 = p__34017;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34018,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34018,(1),null);
var job = vec__34018;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33851__auto___34192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results){
return (function (state_34025){
var state_val_34026 = (state_34025[(1)]);
if((state_val_34026 === (1))){
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34025__$1,(2),res,v);
} else {
if((state_val_34026 === (2))){
var inst_34022 = (state_34025[(2)]);
var inst_34023 = cljs.core.async.close_BANG_(res);
var state_34025__$1 = (function (){var statearr_34027 = state_34025;
(statearr_34027[(7)] = inst_34022);

return statearr_34027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34025__$1,inst_34023);
} else {
return null;
}
}
});})(c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results))
;
return ((function (switch__32834__auto__,c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_34028 = [null,null,null,null,null,null,null,null];
(statearr_34028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__);

(statearr_34028[(1)] = (1));

return statearr_34028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1 = (function (state_34025){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34025);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34029){if((e34029 instanceof Object)){
var ex__32838__auto__ = e34029;
var statearr_34030_34197 = state_34025;
(statearr_34030_34197[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34199 = state_34025;
state_34025 = G__34199;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = function(state_34025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1.call(this,state_34025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results))
})();
var state__33853__auto__ = (function (){var statearr_34031 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34031[(6)] = c__33851__auto___34192);

return statearr_34031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___34192,res,vec__34018,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34032){
var vec__34033 = p__34032;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34033,(1),null);
var job = vec__34033;
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
var n__4376__auto___34203 = n;
var __34204 = (0);
while(true){
if((__34204 < n__4376__auto___34203)){
var G__34036_34205 = type;
var G__34036_34206__$1 = (((G__34036_34205 instanceof cljs.core.Keyword))?G__34036_34205.fqn:null);
switch (G__34036_34206__$1) {
case "compute":
var c__33851__auto___34208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34204,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (__34204,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function (state_34049){
var state_val_34050 = (state_34049[(1)]);
if((state_val_34050 === (1))){
var state_34049__$1 = state_34049;
var statearr_34051_34209 = state_34049__$1;
(statearr_34051_34209[(2)] = null);

(statearr_34051_34209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (2))){
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34049__$1,(4),jobs);
} else {
if((state_val_34050 === (3))){
var inst_34047 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34049__$1,inst_34047);
} else {
if((state_val_34050 === (4))){
var inst_34039 = (state_34049[(2)]);
var inst_34040 = process(inst_34039);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34040)){
var statearr_34052_34210 = state_34049__$1;
(statearr_34052_34210[(1)] = (5));

} else {
var statearr_34053_34211 = state_34049__$1;
(statearr_34053_34211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (5))){
var state_34049__$1 = state_34049;
var statearr_34054_34212 = state_34049__$1;
(statearr_34054_34212[(2)] = null);

(statearr_34054_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (6))){
var state_34049__$1 = state_34049;
var statearr_34055_34213 = state_34049__$1;
(statearr_34055_34213[(2)] = null);

(statearr_34055_34213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (7))){
var inst_34045 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34056_34214 = state_34049__$1;
(statearr_34056_34214[(2)] = inst_34045);

(statearr_34056_34214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34204,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
;
return ((function (__34204,switch__32834__auto__,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_34057 = [null,null,null,null,null,null,null];
(statearr_34057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__);

(statearr_34057[(1)] = (1));

return statearr_34057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1 = (function (state_34049){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34049);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34058){if((e34058 instanceof Object)){
var ex__32838__auto__ = e34058;
var statearr_34059_34215 = state_34049;
(statearr_34059_34215[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34216 = state_34049;
state_34049 = G__34216;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = function(state_34049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1.call(this,state_34049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__;
})()
;})(__34204,switch__32834__auto__,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
})();
var state__33853__auto__ = (function (){var statearr_34060 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34060[(6)] = c__33851__auto___34208);

return statearr_34060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(__34204,c__33851__auto___34208,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
);


break;
case "async":
var c__33851__auto___34217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34204,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (__34204,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function (state_34073){
var state_val_34074 = (state_34073[(1)]);
if((state_val_34074 === (1))){
var state_34073__$1 = state_34073;
var statearr_34075_34218 = state_34073__$1;
(statearr_34075_34218[(2)] = null);

(statearr_34075_34218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (2))){
var state_34073__$1 = state_34073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34073__$1,(4),jobs);
} else {
if((state_val_34074 === (3))){
var inst_34071 = (state_34073[(2)]);
var state_34073__$1 = state_34073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34073__$1,inst_34071);
} else {
if((state_val_34074 === (4))){
var inst_34063 = (state_34073[(2)]);
var inst_34064 = async(inst_34063);
var state_34073__$1 = state_34073;
if(cljs.core.truth_(inst_34064)){
var statearr_34076_34219 = state_34073__$1;
(statearr_34076_34219[(1)] = (5));

} else {
var statearr_34077_34220 = state_34073__$1;
(statearr_34077_34220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (5))){
var state_34073__$1 = state_34073;
var statearr_34078_34221 = state_34073__$1;
(statearr_34078_34221[(2)] = null);

(statearr_34078_34221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (6))){
var state_34073__$1 = state_34073;
var statearr_34079_34222 = state_34073__$1;
(statearr_34079_34222[(2)] = null);

(statearr_34079_34222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34074 === (7))){
var inst_34069 = (state_34073[(2)]);
var state_34073__$1 = state_34073;
var statearr_34080_34223 = state_34073__$1;
(statearr_34080_34223[(2)] = inst_34069);

(statearr_34080_34223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34204,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
;
return ((function (__34204,switch__32834__auto__,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_34081 = [null,null,null,null,null,null,null];
(statearr_34081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__);

(statearr_34081[(1)] = (1));

return statearr_34081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1 = (function (state_34073){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34073);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34082){if((e34082 instanceof Object)){
var ex__32838__auto__ = e34082;
var statearr_34083_34224 = state_34073;
(statearr_34083_34224[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34082;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34225 = state_34073;
state_34073 = G__34225;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = function(state_34073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1.call(this,state_34073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__;
})()
;})(__34204,switch__32834__auto__,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
})();
var state__33853__auto__ = (function (){var statearr_34084 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34084[(6)] = c__33851__auto___34217);

return statearr_34084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(__34204,c__33851__auto___34217,G__34036_34205,G__34036_34206__$1,n__4376__auto___34203,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34036_34206__$1)].join('')));

}

var G__34226 = (__34204 + (1));
__34204 = G__34226;
continue;
} else {
}
break;
}

var c__33851__auto___34227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___34227,jobs,results,process,async){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___34227,jobs,results,process,async){
return (function (state_34106){
var state_val_34107 = (state_34106[(1)]);
if((state_val_34107 === (1))){
var state_34106__$1 = state_34106;
var statearr_34108_34228 = state_34106__$1;
(statearr_34108_34228[(2)] = null);

(statearr_34108_34228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (2))){
var state_34106__$1 = state_34106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34106__$1,(4),from);
} else {
if((state_val_34107 === (3))){
var inst_34104 = (state_34106[(2)]);
var state_34106__$1 = state_34106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34106__$1,inst_34104);
} else {
if((state_val_34107 === (4))){
var inst_34087 = (state_34106[(7)]);
var inst_34087__$1 = (state_34106[(2)]);
var inst_34088 = (inst_34087__$1 == null);
var state_34106__$1 = (function (){var statearr_34109 = state_34106;
(statearr_34109[(7)] = inst_34087__$1);

return statearr_34109;
})();
if(cljs.core.truth_(inst_34088)){
var statearr_34110_34229 = state_34106__$1;
(statearr_34110_34229[(1)] = (5));

} else {
var statearr_34111_34230 = state_34106__$1;
(statearr_34111_34230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (5))){
var inst_34090 = cljs.core.async.close_BANG_(jobs);
var state_34106__$1 = state_34106;
var statearr_34112_34231 = state_34106__$1;
(statearr_34112_34231[(2)] = inst_34090);

(statearr_34112_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (6))){
var inst_34092 = (state_34106[(8)]);
var inst_34087 = (state_34106[(7)]);
var inst_34092__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34093 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34094 = [inst_34087,inst_34092__$1];
var inst_34095 = (new cljs.core.PersistentVector(null,2,(5),inst_34093,inst_34094,null));
var state_34106__$1 = (function (){var statearr_34113 = state_34106;
(statearr_34113[(8)] = inst_34092__$1);

return statearr_34113;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34106__$1,(8),jobs,inst_34095);
} else {
if((state_val_34107 === (7))){
var inst_34102 = (state_34106[(2)]);
var state_34106__$1 = state_34106;
var statearr_34114_34232 = state_34106__$1;
(statearr_34114_34232[(2)] = inst_34102);

(statearr_34114_34232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34107 === (8))){
var inst_34092 = (state_34106[(8)]);
var inst_34097 = (state_34106[(2)]);
var state_34106__$1 = (function (){var statearr_34115 = state_34106;
(statearr_34115[(9)] = inst_34097);

return statearr_34115;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34106__$1,(9),results,inst_34092);
} else {
if((state_val_34107 === (9))){
var inst_34099 = (state_34106[(2)]);
var state_34106__$1 = (function (){var statearr_34116 = state_34106;
(statearr_34116[(10)] = inst_34099);

return statearr_34116;
})();
var statearr_34117_34233 = state_34106__$1;
(statearr_34117_34233[(2)] = null);

(statearr_34117_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___34227,jobs,results,process,async))
;
return ((function (switch__32834__auto__,c__33851__auto___34227,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_34118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__);

(statearr_34118[(1)] = (1));

return statearr_34118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1 = (function (state_34106){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34106);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34119){if((e34119 instanceof Object)){
var ex__32838__auto__ = e34119;
var statearr_34120_34234 = state_34106;
(statearr_34120_34234[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_34106;
state_34106 = G__34235;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = function(state_34106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1.call(this,state_34106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___34227,jobs,results,process,async))
})();
var state__33853__auto__ = (function (){var statearr_34121 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34121[(6)] = c__33851__auto___34227);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___34227,jobs,results,process,async))
);


var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__,jobs,results,process,async){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__,jobs,results,process,async){
return (function (state_34159){
var state_val_34160 = (state_34159[(1)]);
if((state_val_34160 === (7))){
var inst_34155 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34161_34236 = state_34159__$1;
(statearr_34161_34236[(2)] = inst_34155);

(statearr_34161_34236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (20))){
var state_34159__$1 = state_34159;
var statearr_34162_34237 = state_34159__$1;
(statearr_34162_34237[(2)] = null);

(statearr_34162_34237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (1))){
var state_34159__$1 = state_34159;
var statearr_34163_34238 = state_34159__$1;
(statearr_34163_34238[(2)] = null);

(statearr_34163_34238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (4))){
var inst_34124 = (state_34159[(7)]);
var inst_34124__$1 = (state_34159[(2)]);
var inst_34125 = (inst_34124__$1 == null);
var state_34159__$1 = (function (){var statearr_34164 = state_34159;
(statearr_34164[(7)] = inst_34124__$1);

return statearr_34164;
})();
if(cljs.core.truth_(inst_34125)){
var statearr_34165_34239 = state_34159__$1;
(statearr_34165_34239[(1)] = (5));

} else {
var statearr_34166_34240 = state_34159__$1;
(statearr_34166_34240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (15))){
var inst_34137 = (state_34159[(8)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34159__$1,(18),to,inst_34137);
} else {
if((state_val_34160 === (21))){
var inst_34150 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34167_34241 = state_34159__$1;
(statearr_34167_34241[(2)] = inst_34150);

(statearr_34167_34241[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (13))){
var inst_34152 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34168 = state_34159;
(statearr_34168[(9)] = inst_34152);

return statearr_34168;
})();
var statearr_34169_34242 = state_34159__$1;
(statearr_34169_34242[(2)] = null);

(statearr_34169_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (6))){
var inst_34124 = (state_34159[(7)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(11),inst_34124);
} else {
if((state_val_34160 === (17))){
var inst_34145 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
if(cljs.core.truth_(inst_34145)){
var statearr_34170_34243 = state_34159__$1;
(statearr_34170_34243[(1)] = (19));

} else {
var statearr_34171_34244 = state_34159__$1;
(statearr_34171_34244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (3))){
var inst_34157 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34159__$1,inst_34157);
} else {
if((state_val_34160 === (12))){
var inst_34134 = (state_34159[(10)]);
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(14),inst_34134);
} else {
if((state_val_34160 === (2))){
var state_34159__$1 = state_34159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34159__$1,(4),results);
} else {
if((state_val_34160 === (19))){
var state_34159__$1 = state_34159;
var statearr_34172_34245 = state_34159__$1;
(statearr_34172_34245[(2)] = null);

(statearr_34172_34245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (11))){
var inst_34134 = (state_34159[(2)]);
var state_34159__$1 = (function (){var statearr_34173 = state_34159;
(statearr_34173[(10)] = inst_34134);

return statearr_34173;
})();
var statearr_34174_34246 = state_34159__$1;
(statearr_34174_34246[(2)] = null);

(statearr_34174_34246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (9))){
var state_34159__$1 = state_34159;
var statearr_34175_34247 = state_34159__$1;
(statearr_34175_34247[(2)] = null);

(statearr_34175_34247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (5))){
var state_34159__$1 = state_34159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34176_34248 = state_34159__$1;
(statearr_34176_34248[(1)] = (8));

} else {
var statearr_34177_34249 = state_34159__$1;
(statearr_34177_34249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (14))){
var inst_34139 = (state_34159[(11)]);
var inst_34137 = (state_34159[(8)]);
var inst_34137__$1 = (state_34159[(2)]);
var inst_34138 = (inst_34137__$1 == null);
var inst_34139__$1 = cljs.core.not(inst_34138);
var state_34159__$1 = (function (){var statearr_34178 = state_34159;
(statearr_34178[(11)] = inst_34139__$1);

(statearr_34178[(8)] = inst_34137__$1);

return statearr_34178;
})();
if(inst_34139__$1){
var statearr_34179_34250 = state_34159__$1;
(statearr_34179_34250[(1)] = (15));

} else {
var statearr_34180_34251 = state_34159__$1;
(statearr_34180_34251[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (16))){
var inst_34139 = (state_34159[(11)]);
var state_34159__$1 = state_34159;
var statearr_34181_34252 = state_34159__$1;
(statearr_34181_34252[(2)] = inst_34139);

(statearr_34181_34252[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (10))){
var inst_34131 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34182_34253 = state_34159__$1;
(statearr_34182_34253[(2)] = inst_34131);

(statearr_34182_34253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (18))){
var inst_34142 = (state_34159[(2)]);
var state_34159__$1 = state_34159;
var statearr_34183_34254 = state_34159__$1;
(statearr_34183_34254[(2)] = inst_34142);

(statearr_34183_34254[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34160 === (8))){
var inst_34128 = cljs.core.async.close_BANG_(to);
var state_34159__$1 = state_34159;
var statearr_34184_34255 = state_34159__$1;
(statearr_34184_34255[(2)] = inst_34128);

(statearr_34184_34255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto__,jobs,results,process,async))
;
return ((function (switch__32834__auto__,c__33851__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_34185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34185[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__);

(statearr_34185[(1)] = (1));

return statearr_34185;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1 = (function (state_34159){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34159);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34186){if((e34186 instanceof Object)){
var ex__32838__auto__ = e34186;
var statearr_34187_34256 = state_34159;
(statearr_34187_34256[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34257 = state_34159;
state_34159 = G__34257;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__ = function(state_34159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1.call(this,state_34159);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__,jobs,results,process,async))
})();
var state__33853__auto__ = (function (){var statearr_34188 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34188[(6)] = c__33851__auto__);

return statearr_34188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__,jobs,results,process,async))
);

return c__33851__auto__;
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
var G__34259 = arguments.length;
switch (G__34259) {
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__34262 = arguments.length;
switch (G__34262) {
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__34268 = arguments.length;
switch (G__34268) {
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
var c__33851__auto___34346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___34346,tc,fc){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___34346,tc,fc){
return (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (7))){
var inst_34290 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34296_34347 = state_34294__$1;
(statearr_34296_34347[(2)] = inst_34290);

(statearr_34296_34347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (1))){
var state_34294__$1 = state_34294;
var statearr_34297_34348 = state_34294__$1;
(statearr_34297_34348[(2)] = null);

(statearr_34297_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (4))){
var inst_34271 = (state_34294[(7)]);
var inst_34271__$1 = (state_34294[(2)]);
var inst_34272 = (inst_34271__$1 == null);
var state_34294__$1 = (function (){var statearr_34298 = state_34294;
(statearr_34298[(7)] = inst_34271__$1);

return statearr_34298;
})();
if(cljs.core.truth_(inst_34272)){
var statearr_34299_34352 = state_34294__$1;
(statearr_34299_34352[(1)] = (5));

} else {
var statearr_34300_34353 = state_34294__$1;
(statearr_34300_34353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (13))){
var state_34294__$1 = state_34294;
var statearr_34301_34354 = state_34294__$1;
(statearr_34301_34354[(2)] = null);

(statearr_34301_34354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (6))){
var inst_34271 = (state_34294[(7)]);
var inst_34277 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34271) : p.call(null,inst_34271));
var state_34294__$1 = state_34294;
if(cljs.core.truth_(inst_34277)){
var statearr_34306_34355 = state_34294__$1;
(statearr_34306_34355[(1)] = (9));

} else {
var statearr_34307_34356 = state_34294__$1;
(statearr_34307_34356[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (3))){
var inst_34292 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34294__$1,inst_34292);
} else {
if((state_val_34295 === (12))){
var state_34294__$1 = state_34294;
var statearr_34308_34357 = state_34294__$1;
(statearr_34308_34357[(2)] = null);

(statearr_34308_34357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (2))){
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34294__$1,(4),ch);
} else {
if((state_val_34295 === (11))){
var inst_34271 = (state_34294[(7)]);
var inst_34281 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34294__$1,(8),inst_34281,inst_34271);
} else {
if((state_val_34295 === (9))){
var state_34294__$1 = state_34294;
var statearr_34319_34358 = state_34294__$1;
(statearr_34319_34358[(2)] = tc);

(statearr_34319_34358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (5))){
var inst_34274 = cljs.core.async.close_BANG_(tc);
var inst_34275 = cljs.core.async.close_BANG_(fc);
var state_34294__$1 = (function (){var statearr_34328 = state_34294;
(statearr_34328[(8)] = inst_34274);

return statearr_34328;
})();
var statearr_34329_34359 = state_34294__$1;
(statearr_34329_34359[(2)] = inst_34275);

(statearr_34329_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (14))){
var inst_34288 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34336_34360 = state_34294__$1;
(statearr_34336_34360[(2)] = inst_34288);

(statearr_34336_34360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (10))){
var state_34294__$1 = state_34294;
var statearr_34337_34362 = state_34294__$1;
(statearr_34337_34362[(2)] = fc);

(statearr_34337_34362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (8))){
var inst_34283 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
if(cljs.core.truth_(inst_34283)){
var statearr_34339_34364 = state_34294__$1;
(statearr_34339_34364[(1)] = (12));

} else {
var statearr_34340_34365 = state_34294__$1;
(statearr_34340_34365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___34346,tc,fc))
;
return ((function (switch__32834__auto__,c__33851__auto___34346,tc,fc){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_34341 = [null,null,null,null,null,null,null,null,null];
(statearr_34341[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_34341[(1)] = (1));

return statearr_34341;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_34294){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34294);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34342){if((e34342 instanceof Object)){
var ex__32838__auto__ = e34342;
var statearr_34343_34370 = state_34294;
(statearr_34343_34370[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_34294;
state_34294 = G__34371;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___34346,tc,fc))
})();
var state__33853__auto__ = (function (){var statearr_34344 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34344[(6)] = c__33851__auto___34346);

return statearr_34344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___34346,tc,fc))
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
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__){
return (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34397_34420 = state_34395__$1;
(statearr_34397_34420[(2)] = inst_34391);

(statearr_34397_34420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (1))){
var inst_34375 = init;
var state_34395__$1 = (function (){var statearr_34400 = state_34395;
(statearr_34400[(7)] = inst_34375);

return statearr_34400;
})();
var statearr_34402_34423 = state_34395__$1;
(statearr_34402_34423[(2)] = null);

(statearr_34402_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var inst_34378 = (state_34395[(8)]);
var inst_34378__$1 = (state_34395[(2)]);
var inst_34379 = (inst_34378__$1 == null);
var state_34395__$1 = (function (){var statearr_34403 = state_34395;
(statearr_34403[(8)] = inst_34378__$1);

return statearr_34403;
})();
if(cljs.core.truth_(inst_34379)){
var statearr_34404_34424 = state_34395__$1;
(statearr_34404_34424[(1)] = (5));

} else {
var statearr_34405_34425 = state_34395__$1;
(statearr_34405_34425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (6))){
var inst_34378 = (state_34395[(8)]);
var inst_34375 = (state_34395[(7)]);
var inst_34382 = (state_34395[(9)]);
var inst_34382__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34375,inst_34378) : f.call(null,inst_34375,inst_34378));
var inst_34383 = cljs.core.reduced_QMARK_(inst_34382__$1);
var state_34395__$1 = (function (){var statearr_34407 = state_34395;
(statearr_34407[(9)] = inst_34382__$1);

return statearr_34407;
})();
if(inst_34383){
var statearr_34408_34427 = state_34395__$1;
(statearr_34408_34427[(1)] = (8));

} else {
var statearr_34409_34428 = state_34395__$1;
(statearr_34409_34428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (2))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(4),ch);
} else {
if((state_val_34396 === (9))){
var inst_34382 = (state_34395[(9)]);
var inst_34375 = inst_34382;
var state_34395__$1 = (function (){var statearr_34411 = state_34395;
(statearr_34411[(7)] = inst_34375);

return statearr_34411;
})();
var statearr_34412_34429 = state_34395__$1;
(statearr_34412_34429[(2)] = null);

(statearr_34412_34429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var inst_34375 = (state_34395[(7)]);
var state_34395__$1 = state_34395;
var statearr_34413_34430 = state_34395__$1;
(statearr_34413_34430[(2)] = inst_34375);

(statearr_34413_34430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (10))){
var inst_34389 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34414_34435 = state_34395__$1;
(statearr_34414_34435[(2)] = inst_34389);

(statearr_34414_34435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (8))){
var inst_34382 = (state_34395[(9)]);
var inst_34385 = cljs.core.deref(inst_34382);
var state_34395__$1 = state_34395;
var statearr_34415_34436 = state_34395__$1;
(statearr_34415_34436[(2)] = inst_34385);

(statearr_34415_34436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32835__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32835__auto____0 = (function (){
var statearr_34416 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34416[(0)] = cljs$core$async$reduce_$_state_machine__32835__auto__);

(statearr_34416[(1)] = (1));

return statearr_34416;
});
var cljs$core$async$reduce_$_state_machine__32835__auto____1 = (function (state_34395){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34417){if((e34417 instanceof Object)){
var ex__32838__auto__ = e34417;
var statearr_34418_34438 = state_34395;
(statearr_34418_34438[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34417;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34439 = state_34395;
state_34395 = G__34439;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32835__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32835__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32835__auto____0;
cljs$core$async$reduce_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32835__auto____1;
return cljs$core$async$reduce_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_34419 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34419[(6)] = c__33851__auto__);

return statearr_34419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__))
);

return c__33851__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__,f__$1){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__,f__$1){
return (function (state_34449){
var state_val_34450 = (state_34449[(1)]);
if((state_val_34450 === (1))){
var inst_34440 = cljs.core.async.reduce(f__$1,init,ch);
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34449__$1,(2),inst_34440);
} else {
if((state_val_34450 === (2))){
var inst_34442 = (state_34449[(2)]);
var inst_34443 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34442) : f__$1.call(null,inst_34442));
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34449__$1,inst_34443);
} else {
return null;
}
}
});})(c__33851__auto__,f__$1))
;
return ((function (switch__32834__auto__,c__33851__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32835__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32835__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$transduce_$_state_machine__32835__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$transduce_$_state_machine__32835__auto____1 = (function (state_34449){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34449);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34464){if((e34464 instanceof Object)){
var ex__32838__auto__ = e34464;
var statearr_34465_34472 = state_34449;
(statearr_34465_34472[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34473 = state_34449;
state_34449 = G__34473;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32835__auto__ = function(state_34449){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32835__auto____1.call(this,state_34449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32835__auto____0;
cljs$core$async$transduce_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32835__auto____1;
return cljs$core$async$transduce_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__,f__$1))
})();
var state__33853__auto__ = (function (){var statearr_34471 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34471[(6)] = c__33851__auto__);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__,f__$1))
);

return c__33851__auto__;
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
var G__34475 = arguments.length;
switch (G__34475) {
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
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (7))){
var inst_34486 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34506_34573 = state_34504__$1;
(statearr_34506_34573[(2)] = inst_34486);

(statearr_34506_34573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (1))){
var inst_34480 = cljs.core.seq(coll);
var inst_34481 = inst_34480;
var state_34504__$1 = (function (){var statearr_34511 = state_34504;
(statearr_34511[(7)] = inst_34481);

return statearr_34511;
})();
var statearr_34513_34574 = state_34504__$1;
(statearr_34513_34574[(2)] = null);

(statearr_34513_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (4))){
var inst_34481 = (state_34504[(7)]);
var inst_34484 = cljs.core.first(inst_34481);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34504__$1,(7),ch,inst_34484);
} else {
if((state_val_34505 === (13))){
var inst_34498 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34519_34575 = state_34504__$1;
(statearr_34519_34575[(2)] = inst_34498);

(statearr_34519_34575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var inst_34489 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34489)){
var statearr_34526_34576 = state_34504__$1;
(statearr_34526_34576[(1)] = (8));

} else {
var statearr_34527_34577 = state_34504__$1;
(statearr_34527_34577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (12))){
var state_34504__$1 = state_34504;
var statearr_34533_34578 = state_34504__$1;
(statearr_34533_34578[(2)] = null);

(statearr_34533_34578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (2))){
var inst_34481 = (state_34504[(7)]);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34481)){
var statearr_34534_34579 = state_34504__$1;
(statearr_34534_34579[(1)] = (4));

} else {
var statearr_34535_34580 = state_34504__$1;
(statearr_34535_34580[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (11))){
var inst_34495 = cljs.core.async.close_BANG_(ch);
var state_34504__$1 = state_34504;
var statearr_34536_34581 = state_34504__$1;
(statearr_34536_34581[(2)] = inst_34495);

(statearr_34536_34581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (9))){
var state_34504__$1 = state_34504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34537_34582 = state_34504__$1;
(statearr_34537_34582[(1)] = (11));

} else {
var statearr_34538_34583 = state_34504__$1;
(statearr_34538_34583[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var inst_34481 = (state_34504[(7)]);
var state_34504__$1 = state_34504;
var statearr_34543_34584 = state_34504__$1;
(statearr_34543_34584[(2)] = inst_34481);

(statearr_34543_34584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (10))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34544_34585 = state_34504__$1;
(statearr_34544_34585[(2)] = inst_34500);

(statearr_34544_34585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (8))){
var inst_34481 = (state_34504[(7)]);
var inst_34491 = cljs.core.next(inst_34481);
var inst_34481__$1 = inst_34491;
var state_34504__$1 = (function (){var statearr_34545 = state_34504;
(statearr_34545[(7)] = inst_34481__$1);

return statearr_34545;
})();
var statearr_34546_34586 = state_34504__$1;
(statearr_34546_34586[(2)] = null);

(statearr_34546_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto__){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_34504){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__32838__auto__ = e34548;
var statearr_34549_34587 = state_34504;
(statearr_34549_34587[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34588 = state_34504;
state_34504 = G__34588;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_34555 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34555[(6)] = c__33851__auto__);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__))
);

return c__33851__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async34608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34608 = (function (ch,cs,meta34609){
this.ch = ch;
this.cs = cs;
this.meta34609 = meta34609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34610,meta34609__$1){
var self__ = this;
var _34610__$1 = this;
return (new cljs.core.async.t_cljs$core$async34608(self__.ch,self__.cs,meta34609__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34610){
var self__ = this;
var _34610__$1 = this;
return self__.meta34609;
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34609","meta34609",-476429473,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34608";

cljs.core.async.t_cljs$core$async34608.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34608");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34608.
 */
cljs.core.async.__GT_t_cljs$core$async34608 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34608(ch__$1,cs__$1,meta34609){
return (new cljs.core.async.t_cljs$core$async34608(ch__$1,cs__$1,meta34609));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34608(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33851__auto___34849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___34849,cs,m,dchan,dctr,done){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___34849,cs,m,dchan,dctr,done){
return (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (7))){
var inst_34758 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34764_34850 = state_34762__$1;
(statearr_34764_34850[(2)] = inst_34758);

(statearr_34764_34850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (20))){
var inst_34656 = (state_34762[(7)]);
var inst_34668 = cljs.core.first(inst_34656);
var inst_34669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34668,(0),null);
var inst_34670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34668,(1),null);
var state_34762__$1 = (function (){var statearr_34765 = state_34762;
(statearr_34765[(8)] = inst_34669);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34670)){
var statearr_34766_34851 = state_34762__$1;
(statearr_34766_34851[(1)] = (22));

} else {
var statearr_34767_34852 = state_34762__$1;
(statearr_34767_34852[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (27))){
var inst_34625 = (state_34762[(9)]);
var inst_34699 = (state_34762[(10)]);
var inst_34701 = (state_34762[(11)]);
var inst_34707 = (state_34762[(12)]);
var inst_34707__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34699,inst_34701);
var inst_34708 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34707__$1,inst_34625,done);
var state_34762__$1 = (function (){var statearr_34769 = state_34762;
(statearr_34769[(12)] = inst_34707__$1);

return statearr_34769;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34770_34853 = state_34762__$1;
(statearr_34770_34853[(1)] = (30));

} else {
var statearr_34771_34854 = state_34762__$1;
(statearr_34771_34854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (1))){
var state_34762__$1 = state_34762;
var statearr_34772_34855 = state_34762__$1;
(statearr_34772_34855[(2)] = null);

(statearr_34772_34855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (24))){
var inst_34656 = (state_34762[(7)]);
var inst_34675 = (state_34762[(2)]);
var inst_34676 = cljs.core.next(inst_34656);
var inst_34634 = inst_34676;
var inst_34635 = null;
var inst_34636 = (0);
var inst_34637 = (0);
var state_34762__$1 = (function (){var statearr_34773 = state_34762;
(statearr_34773[(13)] = inst_34635);

(statearr_34773[(14)] = inst_34636);

(statearr_34773[(15)] = inst_34675);

(statearr_34773[(16)] = inst_34637);

(statearr_34773[(17)] = inst_34634);

return statearr_34773;
})();
var statearr_34774_34856 = state_34762__$1;
(statearr_34774_34856[(2)] = null);

(statearr_34774_34856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (39))){
var state_34762__$1 = state_34762;
var statearr_34778_34857 = state_34762__$1;
(statearr_34778_34857[(2)] = null);

(statearr_34778_34857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (4))){
var inst_34625 = (state_34762[(9)]);
var inst_34625__$1 = (state_34762[(2)]);
var inst_34626 = (inst_34625__$1 == null);
var state_34762__$1 = (function (){var statearr_34779 = state_34762;
(statearr_34779[(9)] = inst_34625__$1);

return statearr_34779;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34780_34858 = state_34762__$1;
(statearr_34780_34858[(1)] = (5));

} else {
var statearr_34781_34859 = state_34762__$1;
(statearr_34781_34859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (15))){
var inst_34635 = (state_34762[(13)]);
var inst_34636 = (state_34762[(14)]);
var inst_34637 = (state_34762[(16)]);
var inst_34634 = (state_34762[(17)]);
var inst_34652 = (state_34762[(2)]);
var inst_34653 = (inst_34637 + (1));
var tmp34775 = inst_34635;
var tmp34776 = inst_34636;
var tmp34777 = inst_34634;
var inst_34634__$1 = tmp34777;
var inst_34635__$1 = tmp34775;
var inst_34636__$1 = tmp34776;
var inst_34637__$1 = inst_34653;
var state_34762__$1 = (function (){var statearr_34782 = state_34762;
(statearr_34782[(13)] = inst_34635__$1);

(statearr_34782[(14)] = inst_34636__$1);

(statearr_34782[(18)] = inst_34652);

(statearr_34782[(16)] = inst_34637__$1);

(statearr_34782[(17)] = inst_34634__$1);

return statearr_34782;
})();
var statearr_34783_34860 = state_34762__$1;
(statearr_34783_34860[(2)] = null);

(statearr_34783_34860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (21))){
var inst_34679 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34787_34861 = state_34762__$1;
(statearr_34787_34861[(2)] = inst_34679);

(statearr_34787_34861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (31))){
var inst_34707 = (state_34762[(12)]);
var inst_34711 = done(null);
var inst_34712 = cljs.core.async.untap_STAR_(m,inst_34707);
var state_34762__$1 = (function (){var statearr_34788 = state_34762;
(statearr_34788[(19)] = inst_34711);

return statearr_34788;
})();
var statearr_34789_34862 = state_34762__$1;
(statearr_34789_34862[(2)] = inst_34712);

(statearr_34789_34862[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (32))){
var inst_34698 = (state_34762[(20)]);
var inst_34700 = (state_34762[(21)]);
var inst_34699 = (state_34762[(10)]);
var inst_34701 = (state_34762[(11)]);
var inst_34714 = (state_34762[(2)]);
var inst_34715 = (inst_34701 + (1));
var tmp34784 = inst_34698;
var tmp34785 = inst_34700;
var tmp34786 = inst_34699;
var inst_34698__$1 = tmp34784;
var inst_34699__$1 = tmp34786;
var inst_34700__$1 = tmp34785;
var inst_34701__$1 = inst_34715;
var state_34762__$1 = (function (){var statearr_34790 = state_34762;
(statearr_34790[(20)] = inst_34698__$1);

(statearr_34790[(21)] = inst_34700__$1);

(statearr_34790[(10)] = inst_34699__$1);

(statearr_34790[(22)] = inst_34714);

(statearr_34790[(11)] = inst_34701__$1);

return statearr_34790;
})();
var statearr_34791_34863 = state_34762__$1;
(statearr_34791_34863[(2)] = null);

(statearr_34791_34863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (40))){
var inst_34730 = (state_34762[(23)]);
var inst_34734 = done(null);
var inst_34735 = cljs.core.async.untap_STAR_(m,inst_34730);
var state_34762__$1 = (function (){var statearr_34792 = state_34762;
(statearr_34792[(24)] = inst_34734);

return statearr_34792;
})();
var statearr_34793_34864 = state_34762__$1;
(statearr_34793_34864[(2)] = inst_34735);

(statearr_34793_34864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (33))){
var inst_34718 = (state_34762[(25)]);
var inst_34720 = cljs.core.chunked_seq_QMARK_(inst_34718);
var state_34762__$1 = state_34762;
if(inst_34720){
var statearr_34794_34865 = state_34762__$1;
(statearr_34794_34865[(1)] = (36));

} else {
var statearr_34795_34866 = state_34762__$1;
(statearr_34795_34866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (13))){
var inst_34646 = (state_34762[(26)]);
var inst_34649 = cljs.core.async.close_BANG_(inst_34646);
var state_34762__$1 = state_34762;
var statearr_34796_34867 = state_34762__$1;
(statearr_34796_34867[(2)] = inst_34649);

(statearr_34796_34867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (22))){
var inst_34669 = (state_34762[(8)]);
var inst_34672 = cljs.core.async.close_BANG_(inst_34669);
var state_34762__$1 = state_34762;
var statearr_34797_34868 = state_34762__$1;
(statearr_34797_34868[(2)] = inst_34672);

(statearr_34797_34868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (36))){
var inst_34718 = (state_34762[(25)]);
var inst_34722 = cljs.core.chunk_first(inst_34718);
var inst_34723 = cljs.core.chunk_rest(inst_34718);
var inst_34724 = cljs.core.count(inst_34722);
var inst_34698 = inst_34723;
var inst_34699 = inst_34722;
var inst_34700 = inst_34724;
var inst_34701 = (0);
var state_34762__$1 = (function (){var statearr_34798 = state_34762;
(statearr_34798[(20)] = inst_34698);

(statearr_34798[(21)] = inst_34700);

(statearr_34798[(10)] = inst_34699);

(statearr_34798[(11)] = inst_34701);

return statearr_34798;
})();
var statearr_34799_34869 = state_34762__$1;
(statearr_34799_34869[(2)] = null);

(statearr_34799_34869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (41))){
var inst_34718 = (state_34762[(25)]);
var inst_34737 = (state_34762[(2)]);
var inst_34738 = cljs.core.next(inst_34718);
var inst_34698 = inst_34738;
var inst_34699 = null;
var inst_34700 = (0);
var inst_34701 = (0);
var state_34762__$1 = (function (){var statearr_34800 = state_34762;
(statearr_34800[(20)] = inst_34698);

(statearr_34800[(27)] = inst_34737);

(statearr_34800[(21)] = inst_34700);

(statearr_34800[(10)] = inst_34699);

(statearr_34800[(11)] = inst_34701);

return statearr_34800;
})();
var statearr_34801_34870 = state_34762__$1;
(statearr_34801_34870[(2)] = null);

(statearr_34801_34870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (43))){
var state_34762__$1 = state_34762;
var statearr_34802_34871 = state_34762__$1;
(statearr_34802_34871[(2)] = null);

(statearr_34802_34871[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (29))){
var inst_34746 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34803_34872 = state_34762__$1;
(statearr_34803_34872[(2)] = inst_34746);

(statearr_34803_34872[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (44))){
var inst_34755 = (state_34762[(2)]);
var state_34762__$1 = (function (){var statearr_34804 = state_34762;
(statearr_34804[(28)] = inst_34755);

return statearr_34804;
})();
var statearr_34805_34873 = state_34762__$1;
(statearr_34805_34873[(2)] = null);

(statearr_34805_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (6))){
var inst_34689 = (state_34762[(29)]);
var inst_34688 = cljs.core.deref(cs);
var inst_34689__$1 = cljs.core.keys(inst_34688);
var inst_34691 = cljs.core.count(inst_34689__$1);
var inst_34692 = cljs.core.reset_BANG_(dctr,inst_34691);
var inst_34697 = cljs.core.seq(inst_34689__$1);
var inst_34698 = inst_34697;
var inst_34699 = null;
var inst_34700 = (0);
var inst_34701 = (0);
var state_34762__$1 = (function (){var statearr_34806 = state_34762;
(statearr_34806[(20)] = inst_34698);

(statearr_34806[(21)] = inst_34700);

(statearr_34806[(29)] = inst_34689__$1);

(statearr_34806[(10)] = inst_34699);

(statearr_34806[(30)] = inst_34692);

(statearr_34806[(11)] = inst_34701);

return statearr_34806;
})();
var statearr_34807_34874 = state_34762__$1;
(statearr_34807_34874[(2)] = null);

(statearr_34807_34874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (28))){
var inst_34698 = (state_34762[(20)]);
var inst_34718 = (state_34762[(25)]);
var inst_34718__$1 = cljs.core.seq(inst_34698);
var state_34762__$1 = (function (){var statearr_34808 = state_34762;
(statearr_34808[(25)] = inst_34718__$1);

return statearr_34808;
})();
if(inst_34718__$1){
var statearr_34809_34875 = state_34762__$1;
(statearr_34809_34875[(1)] = (33));

} else {
var statearr_34810_34876 = state_34762__$1;
(statearr_34810_34876[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (25))){
var inst_34700 = (state_34762[(21)]);
var inst_34701 = (state_34762[(11)]);
var inst_34704 = (inst_34701 < inst_34700);
var inst_34705 = inst_34704;
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34705)){
var statearr_34811_34877 = state_34762__$1;
(statearr_34811_34877[(1)] = (27));

} else {
var statearr_34812_34878 = state_34762__$1;
(statearr_34812_34878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (34))){
var state_34762__$1 = state_34762;
var statearr_34813_34879 = state_34762__$1;
(statearr_34813_34879[(2)] = null);

(statearr_34813_34879[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (17))){
var state_34762__$1 = state_34762;
var statearr_34814_34880 = state_34762__$1;
(statearr_34814_34880[(2)] = null);

(statearr_34814_34880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (3))){
var inst_34760 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34762__$1,inst_34760);
} else {
if((state_val_34763 === (12))){
var inst_34684 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34815_34881 = state_34762__$1;
(statearr_34815_34881[(2)] = inst_34684);

(statearr_34815_34881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (2))){
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34762__$1,(4),ch);
} else {
if((state_val_34763 === (23))){
var state_34762__$1 = state_34762;
var statearr_34816_34882 = state_34762__$1;
(statearr_34816_34882[(2)] = null);

(statearr_34816_34882[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (35))){
var inst_34744 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34817_34883 = state_34762__$1;
(statearr_34817_34883[(2)] = inst_34744);

(statearr_34817_34883[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (19))){
var inst_34656 = (state_34762[(7)]);
var inst_34660 = cljs.core.chunk_first(inst_34656);
var inst_34661 = cljs.core.chunk_rest(inst_34656);
var inst_34662 = cljs.core.count(inst_34660);
var inst_34634 = inst_34661;
var inst_34635 = inst_34660;
var inst_34636 = inst_34662;
var inst_34637 = (0);
var state_34762__$1 = (function (){var statearr_34818 = state_34762;
(statearr_34818[(13)] = inst_34635);

(statearr_34818[(14)] = inst_34636);

(statearr_34818[(16)] = inst_34637);

(statearr_34818[(17)] = inst_34634);

return statearr_34818;
})();
var statearr_34819_34884 = state_34762__$1;
(statearr_34819_34884[(2)] = null);

(statearr_34819_34884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (11))){
var inst_34656 = (state_34762[(7)]);
var inst_34634 = (state_34762[(17)]);
var inst_34656__$1 = cljs.core.seq(inst_34634);
var state_34762__$1 = (function (){var statearr_34820 = state_34762;
(statearr_34820[(7)] = inst_34656__$1);

return statearr_34820;
})();
if(inst_34656__$1){
var statearr_34821_34885 = state_34762__$1;
(statearr_34821_34885[(1)] = (16));

} else {
var statearr_34822_34886 = state_34762__$1;
(statearr_34822_34886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (9))){
var inst_34686 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34823_34887 = state_34762__$1;
(statearr_34823_34887[(2)] = inst_34686);

(statearr_34823_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (5))){
var inst_34632 = cljs.core.deref(cs);
var inst_34633 = cljs.core.seq(inst_34632);
var inst_34634 = inst_34633;
var inst_34635 = null;
var inst_34636 = (0);
var inst_34637 = (0);
var state_34762__$1 = (function (){var statearr_34824 = state_34762;
(statearr_34824[(13)] = inst_34635);

(statearr_34824[(14)] = inst_34636);

(statearr_34824[(16)] = inst_34637);

(statearr_34824[(17)] = inst_34634);

return statearr_34824;
})();
var statearr_34825_34888 = state_34762__$1;
(statearr_34825_34888[(2)] = null);

(statearr_34825_34888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (14))){
var state_34762__$1 = state_34762;
var statearr_34826_34889 = state_34762__$1;
(statearr_34826_34889[(2)] = null);

(statearr_34826_34889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (45))){
var inst_34752 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34827_34890 = state_34762__$1;
(statearr_34827_34890[(2)] = inst_34752);

(statearr_34827_34890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (26))){
var inst_34689 = (state_34762[(29)]);
var inst_34748 = (state_34762[(2)]);
var inst_34749 = cljs.core.seq(inst_34689);
var state_34762__$1 = (function (){var statearr_34828 = state_34762;
(statearr_34828[(31)] = inst_34748);

return statearr_34828;
})();
if(inst_34749){
var statearr_34829_34891 = state_34762__$1;
(statearr_34829_34891[(1)] = (42));

} else {
var statearr_34830_34892 = state_34762__$1;
(statearr_34830_34892[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (16))){
var inst_34656 = (state_34762[(7)]);
var inst_34658 = cljs.core.chunked_seq_QMARK_(inst_34656);
var state_34762__$1 = state_34762;
if(inst_34658){
var statearr_34832_34893 = state_34762__$1;
(statearr_34832_34893[(1)] = (19));

} else {
var statearr_34833_34894 = state_34762__$1;
(statearr_34833_34894[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (38))){
var inst_34741 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34834_34895 = state_34762__$1;
(statearr_34834_34895[(2)] = inst_34741);

(statearr_34834_34895[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (30))){
var state_34762__$1 = state_34762;
var statearr_34835_34896 = state_34762__$1;
(statearr_34835_34896[(2)] = null);

(statearr_34835_34896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (10))){
var inst_34635 = (state_34762[(13)]);
var inst_34637 = (state_34762[(16)]);
var inst_34645 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34635,inst_34637);
var inst_34646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34645,(0),null);
var inst_34647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34645,(1),null);
var state_34762__$1 = (function (){var statearr_34836 = state_34762;
(statearr_34836[(26)] = inst_34646);

return statearr_34836;
})();
if(cljs.core.truth_(inst_34647)){
var statearr_34837_34897 = state_34762__$1;
(statearr_34837_34897[(1)] = (13));

} else {
var statearr_34838_34898 = state_34762__$1;
(statearr_34838_34898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (18))){
var inst_34682 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34839_34899 = state_34762__$1;
(statearr_34839_34899[(2)] = inst_34682);

(statearr_34839_34899[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (42))){
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34762__$1,(45),dchan);
} else {
if((state_val_34763 === (37))){
var inst_34730 = (state_34762[(23)]);
var inst_34625 = (state_34762[(9)]);
var inst_34718 = (state_34762[(25)]);
var inst_34730__$1 = cljs.core.first(inst_34718);
var inst_34731 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34730__$1,inst_34625,done);
var state_34762__$1 = (function (){var statearr_34840 = state_34762;
(statearr_34840[(23)] = inst_34730__$1);

return statearr_34840;
})();
if(cljs.core.truth_(inst_34731)){
var statearr_34841_34900 = state_34762__$1;
(statearr_34841_34900[(1)] = (39));

} else {
var statearr_34842_34901 = state_34762__$1;
(statearr_34842_34901[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (8))){
var inst_34636 = (state_34762[(14)]);
var inst_34637 = (state_34762[(16)]);
var inst_34639 = (inst_34637 < inst_34636);
var inst_34640 = inst_34639;
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34640)){
var statearr_34843_34902 = state_34762__$1;
(statearr_34843_34902[(1)] = (10));

} else {
var statearr_34844_34903 = state_34762__$1;
(statearr_34844_34903[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___34849,cs,m,dchan,dctr,done))
;
return ((function (switch__32834__auto__,c__33851__auto___34849,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32835__auto__ = null;
var cljs$core$async$mult_$_state_machine__32835__auto____0 = (function (){
var statearr_34845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34845[(0)] = cljs$core$async$mult_$_state_machine__32835__auto__);

(statearr_34845[(1)] = (1));

return statearr_34845;
});
var cljs$core$async$mult_$_state_machine__32835__auto____1 = (function (state_34762){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_34762);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e34846){if((e34846 instanceof Object)){
var ex__32838__auto__ = e34846;
var statearr_34847_34904 = state_34762;
(statearr_34847_34904[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34905 = state_34762;
state_34762 = G__34905;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32835__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32835__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32835__auto____0;
cljs$core$async$mult_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32835__auto____1;
return cljs$core$async$mult_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___34849,cs,m,dchan,dctr,done))
})();
var state__33853__auto__ = (function (){var statearr_34848 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_34848[(6)] = c__33851__auto___34849);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___34849,cs,m,dchan,dctr,done))
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
var G__34907 = arguments.length;
switch (G__34907) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___34919 = arguments.length;
var i__4500__auto___34920 = (0);
while(true){
if((i__4500__auto___34920 < len__4499__auto___34919)){
args__4502__auto__.push((arguments[i__4500__auto___34920]));

var G__34921 = (i__4500__auto___34920 + (1));
i__4500__auto___34920 = G__34921;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34913){
var map__34914 = p__34913;
var map__34914__$1 = ((((!((map__34914 == null)))?(((((map__34914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34914):map__34914);
var opts = map__34914__$1;
var statearr_34916_34922 = state;
(statearr_34916_34922[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__34914,map__34914__$1,opts){
return (function (val){
var statearr_34917_34923 = state;
(statearr_34917_34923[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34914,map__34914__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34918_34924 = state;
(statearr_34918_34924[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34909){
var G__34910 = cljs.core.first(seq34909);
var seq34909__$1 = cljs.core.next(seq34909);
var G__34911 = cljs.core.first(seq34909__$1);
var seq34909__$2 = cljs.core.next(seq34909__$1);
var G__34912 = cljs.core.first(seq34909__$2);
var seq34909__$3 = cljs.core.next(seq34909__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34910,G__34911,G__34912,seq34909__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
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
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34927 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34928){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34928 = meta34928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34929,meta34928__$1){
var self__ = this;
var _34929__$1 = this;
return (new cljs.core.async.t_cljs$core$async34927(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34928__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34929){
var self__ = this;
var _34929__$1 = this;
return self__.meta34928;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34927.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34928","meta34928",651709689,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34927";

cljs.core.async.t_cljs$core$async34927.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async34927");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34927.
 */
cljs.core.async.__GT_t_cljs$core$async34927 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34927(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34928){
return (new cljs.core.async.t_cljs$core$async34927(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34928));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34927(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33851__auto___35170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35045){
var state_val_35046 = (state_35045[(1)]);
if((state_val_35046 === (7))){
var inst_34955 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35047_35171 = state_35045__$1;
(statearr_35047_35171[(2)] = inst_34955);

(statearr_35047_35171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (20))){
var inst_34967 = (state_35045[(7)]);
var state_35045__$1 = state_35045;
var statearr_35048_35172 = state_35045__$1;
(statearr_35048_35172[(2)] = inst_34967);

(statearr_35048_35172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (27))){
var state_35045__$1 = state_35045;
var statearr_35049_35174 = state_35045__$1;
(statearr_35049_35174[(2)] = null);

(statearr_35049_35174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (1))){
var inst_34942 = (state_35045[(8)]);
var inst_34942__$1 = calc_state();
var inst_34944 = (inst_34942__$1 == null);
var inst_34945 = cljs.core.not(inst_34944);
var state_35045__$1 = (function (){var statearr_35050 = state_35045;
(statearr_35050[(8)] = inst_34942__$1);

return statearr_35050;
})();
if(inst_34945){
var statearr_35051_35175 = state_35045__$1;
(statearr_35051_35175[(1)] = (2));

} else {
var statearr_35052_35176 = state_35045__$1;
(statearr_35052_35176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (24))){
var inst_34991 = (state_35045[(9)]);
var inst_35000 = (state_35045[(10)]);
var inst_35019 = (state_35045[(11)]);
var inst_35019__$1 = (inst_34991.cljs$core$IFn$_invoke$arity$1 ? inst_34991.cljs$core$IFn$_invoke$arity$1(inst_35000) : inst_34991.call(null,inst_35000));
var state_35045__$1 = (function (){var statearr_35053 = state_35045;
(statearr_35053[(11)] = inst_35019__$1);

return statearr_35053;
})();
if(cljs.core.truth_(inst_35019__$1)){
var statearr_35055_35177 = state_35045__$1;
(statearr_35055_35177[(1)] = (29));

} else {
var statearr_35056_35178 = state_35045__$1;
(statearr_35056_35178[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (4))){
var inst_34958 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34958)){
var statearr_35057_35179 = state_35045__$1;
(statearr_35057_35179[(1)] = (8));

} else {
var statearr_35058_35180 = state_35045__$1;
(statearr_35058_35180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (15))){
var inst_34985 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34985)){
var statearr_35067_35185 = state_35045__$1;
(statearr_35067_35185[(1)] = (19));

} else {
var statearr_35068_35186 = state_35045__$1;
(statearr_35068_35186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (21))){
var inst_34990 = (state_35045[(12)]);
var inst_34990__$1 = (state_35045[(2)]);
var inst_34991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34990__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34990__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34990__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35045__$1 = (function (){var statearr_35069 = state_35045;
(statearr_35069[(12)] = inst_34990__$1);

(statearr_35069[(9)] = inst_34991);

(statearr_35069[(13)] = inst_34992);

return statearr_35069;
})();
return cljs.core.async.ioc_alts_BANG_(state_35045__$1,(22),inst_34993);
} else {
if((state_val_35046 === (31))){
var inst_35027 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35027)){
var statearr_35070_35188 = state_35045__$1;
(statearr_35070_35188[(1)] = (32));

} else {
var statearr_35071_35189 = state_35045__$1;
(statearr_35071_35189[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (32))){
var inst_34999 = (state_35045[(14)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35045__$1,(35),out,inst_34999);
} else {
if((state_val_35046 === (33))){
var inst_34990 = (state_35045[(12)]);
var inst_34967 = inst_34990;
var state_35045__$1 = (function (){var statearr_35073 = state_35045;
(statearr_35073[(7)] = inst_34967);

return statearr_35073;
})();
var statearr_35074_35190 = state_35045__$1;
(statearr_35074_35190[(2)] = null);

(statearr_35074_35190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (13))){
var inst_34967 = (state_35045[(7)]);
var inst_34974 = inst_34967.cljs$lang$protocol_mask$partition0$;
var inst_34975 = (inst_34974 & (64));
var inst_34976 = inst_34967.cljs$core$ISeq$;
var inst_34977 = (cljs.core.PROTOCOL_SENTINEL === inst_34976);
var inst_34978 = ((inst_34975) || (inst_34977));
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34978)){
var statearr_35075_35191 = state_35045__$1;
(statearr_35075_35191[(1)] = (16));

} else {
var statearr_35076_35192 = state_35045__$1;
(statearr_35076_35192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (22))){
var inst_34999 = (state_35045[(14)]);
var inst_35000 = (state_35045[(10)]);
var inst_34998 = (state_35045[(2)]);
var inst_34999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34998,(0),null);
var inst_35000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34998,(1),null);
var inst_35004 = (inst_34999__$1 == null);
var inst_35006 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35000__$1,change);
var inst_35007 = ((inst_35004) || (inst_35006));
var state_35045__$1 = (function (){var statearr_35083 = state_35045;
(statearr_35083[(14)] = inst_34999__$1);

(statearr_35083[(10)] = inst_35000__$1);

return statearr_35083;
})();
if(cljs.core.truth_(inst_35007)){
var statearr_35084_35194 = state_35045__$1;
(statearr_35084_35194[(1)] = (23));

} else {
var statearr_35085_35195 = state_35045__$1;
(statearr_35085_35195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (36))){
var inst_34990 = (state_35045[(12)]);
var inst_34967 = inst_34990;
var state_35045__$1 = (function (){var statearr_35086 = state_35045;
(statearr_35086[(7)] = inst_34967);

return statearr_35086;
})();
var statearr_35087_35196 = state_35045__$1;
(statearr_35087_35196[(2)] = null);

(statearr_35087_35196[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (29))){
var inst_35019 = (state_35045[(11)]);
var state_35045__$1 = state_35045;
var statearr_35088_35197 = state_35045__$1;
(statearr_35088_35197[(2)] = inst_35019);

(statearr_35088_35197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (6))){
var state_35045__$1 = state_35045;
var statearr_35089_35198 = state_35045__$1;
(statearr_35089_35198[(2)] = false);

(statearr_35089_35198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (28))){
var inst_35015 = (state_35045[(2)]);
var inst_35016 = calc_state();
var inst_34967 = inst_35016;
var state_35045__$1 = (function (){var statearr_35095 = state_35045;
(statearr_35095[(15)] = inst_35015);

(statearr_35095[(7)] = inst_34967);

return statearr_35095;
})();
var statearr_35097_35199 = state_35045__$1;
(statearr_35097_35199[(2)] = null);

(statearr_35097_35199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (25))){
var inst_35041 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35098_35200 = state_35045__$1;
(statearr_35098_35200[(2)] = inst_35041);

(statearr_35098_35200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (34))){
var inst_35039 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35099_35201 = state_35045__$1;
(statearr_35099_35201[(2)] = inst_35039);

(statearr_35099_35201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (17))){
var state_35045__$1 = state_35045;
var statearr_35100_35202 = state_35045__$1;
(statearr_35100_35202[(2)] = false);

(statearr_35100_35202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (3))){
var state_35045__$1 = state_35045;
var statearr_35101_35203 = state_35045__$1;
(statearr_35101_35203[(2)] = false);

(statearr_35101_35203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (12))){
var inst_35043 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35045__$1,inst_35043);
} else {
if((state_val_35046 === (2))){
var inst_34942 = (state_35045[(8)]);
var inst_34947 = inst_34942.cljs$lang$protocol_mask$partition0$;
var inst_34948 = (inst_34947 & (64));
var inst_34949 = inst_34942.cljs$core$ISeq$;
var inst_34950 = (cljs.core.PROTOCOL_SENTINEL === inst_34949);
var inst_34951 = ((inst_34948) || (inst_34950));
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_34951)){
var statearr_35103_35205 = state_35045__$1;
(statearr_35103_35205[(1)] = (5));

} else {
var statearr_35108_35206 = state_35045__$1;
(statearr_35108_35206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (23))){
var inst_34999 = (state_35045[(14)]);
var inst_35009 = (inst_34999 == null);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35009)){
var statearr_35110_35207 = state_35045__$1;
(statearr_35110_35207[(1)] = (26));

} else {
var statearr_35111_35208 = state_35045__$1;
(statearr_35111_35208[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (35))){
var inst_35030 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
if(cljs.core.truth_(inst_35030)){
var statearr_35112_35211 = state_35045__$1;
(statearr_35112_35211[(1)] = (36));

} else {
var statearr_35113_35212 = state_35045__$1;
(statearr_35113_35212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (19))){
var inst_34967 = (state_35045[(7)]);
var inst_34987 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34967);
var state_35045__$1 = state_35045;
var statearr_35114_35217 = state_35045__$1;
(statearr_35114_35217[(2)] = inst_34987);

(statearr_35114_35217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (11))){
var inst_34967 = (state_35045[(7)]);
var inst_34971 = (inst_34967 == null);
var inst_34972 = cljs.core.not(inst_34971);
var state_35045__$1 = state_35045;
if(inst_34972){
var statearr_35120_35220 = state_35045__$1;
(statearr_35120_35220[(1)] = (13));

} else {
var statearr_35121_35221 = state_35045__$1;
(statearr_35121_35221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (9))){
var inst_34942 = (state_35045[(8)]);
var state_35045__$1 = state_35045;
var statearr_35122_35222 = state_35045__$1;
(statearr_35122_35222[(2)] = inst_34942);

(statearr_35122_35222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (5))){
var state_35045__$1 = state_35045;
var statearr_35123_35227 = state_35045__$1;
(statearr_35123_35227[(2)] = true);

(statearr_35123_35227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (14))){
var state_35045__$1 = state_35045;
var statearr_35124_35231 = state_35045__$1;
(statearr_35124_35231[(2)] = false);

(statearr_35124_35231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (26))){
var inst_35000 = (state_35045[(10)]);
var inst_35012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35000);
var state_35045__$1 = state_35045;
var statearr_35127_35233 = state_35045__$1;
(statearr_35127_35233[(2)] = inst_35012);

(statearr_35127_35233[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (16))){
var state_35045__$1 = state_35045;
var statearr_35128_35234 = state_35045__$1;
(statearr_35128_35234[(2)] = true);

(statearr_35128_35234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (38))){
var inst_35035 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35133_35239 = state_35045__$1;
(statearr_35133_35239[(2)] = inst_35035);

(statearr_35133_35239[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (30))){
var inst_34991 = (state_35045[(9)]);
var inst_35000 = (state_35045[(10)]);
var inst_34992 = (state_35045[(13)]);
var inst_35022 = cljs.core.empty_QMARK_(inst_34991);
var inst_35023 = (inst_34992.cljs$core$IFn$_invoke$arity$1 ? inst_34992.cljs$core$IFn$_invoke$arity$1(inst_35000) : inst_34992.call(null,inst_35000));
var inst_35024 = cljs.core.not(inst_35023);
var inst_35025 = ((inst_35022) && (inst_35024));
var state_35045__$1 = state_35045;
var statearr_35135_35242 = state_35045__$1;
(statearr_35135_35242[(2)] = inst_35025);

(statearr_35135_35242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (10))){
var inst_34942 = (state_35045[(8)]);
var inst_34963 = (state_35045[(2)]);
var inst_34964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34963,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34963,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34967 = inst_34942;
var state_35045__$1 = (function (){var statearr_35136 = state_35045;
(statearr_35136[(16)] = inst_34964);

(statearr_35136[(17)] = inst_34965);

(statearr_35136[(7)] = inst_34967);

(statearr_35136[(18)] = inst_34966);

return statearr_35136;
})();
var statearr_35137_35255 = state_35045__$1;
(statearr_35137_35255[(2)] = null);

(statearr_35137_35255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (18))){
var inst_34982 = (state_35045[(2)]);
var state_35045__$1 = state_35045;
var statearr_35139_35264 = state_35045__$1;
(statearr_35139_35264[(2)] = inst_34982);

(statearr_35139_35264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (37))){
var state_35045__$1 = state_35045;
var statearr_35140_35265 = state_35045__$1;
(statearr_35140_35265[(2)] = null);

(statearr_35140_35265[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35046 === (8))){
var inst_34942 = (state_35045[(8)]);
var inst_34960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34942);
var state_35045__$1 = state_35045;
var statearr_35141_35270 = state_35045__$1;
(statearr_35141_35270[(2)] = inst_34960);

(statearr_35141_35270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32834__auto__,c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32835__auto__ = null;
var cljs$core$async$mix_$_state_machine__32835__auto____0 = (function (){
var statearr_35145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35145[(0)] = cljs$core$async$mix_$_state_machine__32835__auto__);

(statearr_35145[(1)] = (1));

return statearr_35145;
});
var cljs$core$async$mix_$_state_machine__32835__auto____1 = (function (state_35045){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35045);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35146){if((e35146 instanceof Object)){
var ex__32838__auto__ = e35146;
var statearr_35147_35273 = state_35045;
(statearr_35147_35273[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35278 = state_35045;
state_35045 = G__35278;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32835__auto__ = function(state_35045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32835__auto____1.call(this,state_35045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32835__auto____0;
cljs$core$async$mix_$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32835__auto____1;
return cljs$core$async$mix_$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33853__auto__ = (function (){var statearr_35148 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35148[(6)] = c__33851__auto___35170);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35334 = arguments.length;
switch (G__35334) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
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
var G__35392 = arguments.length;
switch (G__35392) {
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
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__35386_SHARP_){
if(cljs.core.truth_((p1__35386_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35386_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35386_SHARP_.call(null,topic)))){
return p1__35386_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35386_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35393 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35394){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35394 = meta35394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35395,meta35394__$1){
var self__ = this;
var _35395__$1 = this;
return (new cljs.core.async.t_cljs$core$async35393(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35394__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35395){
var self__ = this;
var _35395__$1 = this;
return self__.meta35394;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35394","meta35394",-767645904,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35393";

cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async35393");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35393.
 */
cljs.core.async.__GT_t_cljs$core$async35393 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35394){
return (new cljs.core.async.t_cljs$core$async35393(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35394));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35393(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33851__auto___35530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35530,mults,ensure_mult,p){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35530,mults,ensure_mult,p){
return (function (state_35474){
var state_val_35475 = (state_35474[(1)]);
if((state_val_35475 === (7))){
var inst_35469 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35476_35532 = state_35474__$1;
(statearr_35476_35532[(2)] = inst_35469);

(statearr_35476_35532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (20))){
var state_35474__$1 = state_35474;
var statearr_35478_35533 = state_35474__$1;
(statearr_35478_35533[(2)] = null);

(statearr_35478_35533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (1))){
var state_35474__$1 = state_35474;
var statearr_35479_35534 = state_35474__$1;
(statearr_35479_35534[(2)] = null);

(statearr_35479_35534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (24))){
var inst_35451 = (state_35474[(7)]);
var inst_35460 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35451);
var state_35474__$1 = state_35474;
var statearr_35480_35535 = state_35474__$1;
(statearr_35480_35535[(2)] = inst_35460);

(statearr_35480_35535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (4))){
var inst_35403 = (state_35474[(8)]);
var inst_35403__$1 = (state_35474[(2)]);
var inst_35404 = (inst_35403__$1 == null);
var state_35474__$1 = (function (){var statearr_35481 = state_35474;
(statearr_35481[(8)] = inst_35403__$1);

return statearr_35481;
})();
if(cljs.core.truth_(inst_35404)){
var statearr_35482_35538 = state_35474__$1;
(statearr_35482_35538[(1)] = (5));

} else {
var statearr_35483_35539 = state_35474__$1;
(statearr_35483_35539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (15))){
var inst_35445 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35484_35540 = state_35474__$1;
(statearr_35484_35540[(2)] = inst_35445);

(statearr_35484_35540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (21))){
var inst_35465 = (state_35474[(2)]);
var state_35474__$1 = (function (){var statearr_35485 = state_35474;
(statearr_35485[(9)] = inst_35465);

return statearr_35485;
})();
var statearr_35486_35541 = state_35474__$1;
(statearr_35486_35541[(2)] = null);

(statearr_35486_35541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (13))){
var inst_35427 = (state_35474[(10)]);
var inst_35429 = cljs.core.chunked_seq_QMARK_(inst_35427);
var state_35474__$1 = state_35474;
if(inst_35429){
var statearr_35487_35543 = state_35474__$1;
(statearr_35487_35543[(1)] = (16));

} else {
var statearr_35488_35544 = state_35474__$1;
(statearr_35488_35544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (22))){
var inst_35457 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
if(cljs.core.truth_(inst_35457)){
var statearr_35489_35545 = state_35474__$1;
(statearr_35489_35545[(1)] = (23));

} else {
var statearr_35490_35546 = state_35474__$1;
(statearr_35490_35546[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (6))){
var inst_35403 = (state_35474[(8)]);
var inst_35453 = (state_35474[(11)]);
var inst_35451 = (state_35474[(7)]);
var inst_35451__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35403) : topic_fn.call(null,inst_35403));
var inst_35452 = cljs.core.deref(mults);
var inst_35453__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,inst_35451__$1);
var state_35474__$1 = (function (){var statearr_35491 = state_35474;
(statearr_35491[(11)] = inst_35453__$1);

(statearr_35491[(7)] = inst_35451__$1);

return statearr_35491;
})();
if(cljs.core.truth_(inst_35453__$1)){
var statearr_35492_35547 = state_35474__$1;
(statearr_35492_35547[(1)] = (19));

} else {
var statearr_35493_35548 = state_35474__$1;
(statearr_35493_35548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (25))){
var inst_35462 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35494_35549 = state_35474__$1;
(statearr_35494_35549[(2)] = inst_35462);

(statearr_35494_35549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (17))){
var inst_35427 = (state_35474[(10)]);
var inst_35436 = cljs.core.first(inst_35427);
var inst_35437 = cljs.core.async.muxch_STAR_(inst_35436);
var inst_35438 = cljs.core.async.close_BANG_(inst_35437);
var inst_35439 = cljs.core.next(inst_35427);
var inst_35413 = inst_35439;
var inst_35414 = null;
var inst_35415 = (0);
var inst_35416 = (0);
var state_35474__$1 = (function (){var statearr_35495 = state_35474;
(statearr_35495[(12)] = inst_35413);

(statearr_35495[(13)] = inst_35416);

(statearr_35495[(14)] = inst_35415);

(statearr_35495[(15)] = inst_35414);

(statearr_35495[(16)] = inst_35438);

return statearr_35495;
})();
var statearr_35496_35550 = state_35474__$1;
(statearr_35496_35550[(2)] = null);

(statearr_35496_35550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (3))){
var inst_35471 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35474__$1,inst_35471);
} else {
if((state_val_35475 === (12))){
var inst_35447 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35497_35552 = state_35474__$1;
(statearr_35497_35552[(2)] = inst_35447);

(statearr_35497_35552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (2))){
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35474__$1,(4),ch);
} else {
if((state_val_35475 === (23))){
var state_35474__$1 = state_35474;
var statearr_35498_35556 = state_35474__$1;
(statearr_35498_35556[(2)] = null);

(statearr_35498_35556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (19))){
var inst_35403 = (state_35474[(8)]);
var inst_35453 = (state_35474[(11)]);
var inst_35455 = cljs.core.async.muxch_STAR_(inst_35453);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35474__$1,(22),inst_35455,inst_35403);
} else {
if((state_val_35475 === (11))){
var inst_35413 = (state_35474[(12)]);
var inst_35427 = (state_35474[(10)]);
var inst_35427__$1 = cljs.core.seq(inst_35413);
var state_35474__$1 = (function (){var statearr_35499 = state_35474;
(statearr_35499[(10)] = inst_35427__$1);

return statearr_35499;
})();
if(inst_35427__$1){
var statearr_35500_35562 = state_35474__$1;
(statearr_35500_35562[(1)] = (13));

} else {
var statearr_35501_35563 = state_35474__$1;
(statearr_35501_35563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (9))){
var inst_35449 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35502_35564 = state_35474__$1;
(statearr_35502_35564[(2)] = inst_35449);

(statearr_35502_35564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (5))){
var inst_35410 = cljs.core.deref(mults);
var inst_35411 = cljs.core.vals(inst_35410);
var inst_35412 = cljs.core.seq(inst_35411);
var inst_35413 = inst_35412;
var inst_35414 = null;
var inst_35415 = (0);
var inst_35416 = (0);
var state_35474__$1 = (function (){var statearr_35505 = state_35474;
(statearr_35505[(12)] = inst_35413);

(statearr_35505[(13)] = inst_35416);

(statearr_35505[(14)] = inst_35415);

(statearr_35505[(15)] = inst_35414);

return statearr_35505;
})();
var statearr_35506_35570 = state_35474__$1;
(statearr_35506_35570[(2)] = null);

(statearr_35506_35570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (14))){
var state_35474__$1 = state_35474;
var statearr_35510_35571 = state_35474__$1;
(statearr_35510_35571[(2)] = null);

(statearr_35510_35571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (16))){
var inst_35427 = (state_35474[(10)]);
var inst_35431 = cljs.core.chunk_first(inst_35427);
var inst_35432 = cljs.core.chunk_rest(inst_35427);
var inst_35433 = cljs.core.count(inst_35431);
var inst_35413 = inst_35432;
var inst_35414 = inst_35431;
var inst_35415 = inst_35433;
var inst_35416 = (0);
var state_35474__$1 = (function (){var statearr_35511 = state_35474;
(statearr_35511[(12)] = inst_35413);

(statearr_35511[(13)] = inst_35416);

(statearr_35511[(14)] = inst_35415);

(statearr_35511[(15)] = inst_35414);

return statearr_35511;
})();
var statearr_35512_35573 = state_35474__$1;
(statearr_35512_35573[(2)] = null);

(statearr_35512_35573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (10))){
var inst_35413 = (state_35474[(12)]);
var inst_35416 = (state_35474[(13)]);
var inst_35415 = (state_35474[(14)]);
var inst_35414 = (state_35474[(15)]);
var inst_35421 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35414,inst_35416);
var inst_35422 = cljs.core.async.muxch_STAR_(inst_35421);
var inst_35423 = cljs.core.async.close_BANG_(inst_35422);
var inst_35424 = (inst_35416 + (1));
var tmp35507 = inst_35413;
var tmp35508 = inst_35415;
var tmp35509 = inst_35414;
var inst_35413__$1 = tmp35507;
var inst_35414__$1 = tmp35509;
var inst_35415__$1 = tmp35508;
var inst_35416__$1 = inst_35424;
var state_35474__$1 = (function (){var statearr_35515 = state_35474;
(statearr_35515[(17)] = inst_35423);

(statearr_35515[(12)] = inst_35413__$1);

(statearr_35515[(13)] = inst_35416__$1);

(statearr_35515[(14)] = inst_35415__$1);

(statearr_35515[(15)] = inst_35414__$1);

return statearr_35515;
})();
var statearr_35516_35594 = state_35474__$1;
(statearr_35516_35594[(2)] = null);

(statearr_35516_35594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (18))){
var inst_35442 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35517_35595 = state_35474__$1;
(statearr_35517_35595[(2)] = inst_35442);

(statearr_35517_35595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (8))){
var inst_35416 = (state_35474[(13)]);
var inst_35415 = (state_35474[(14)]);
var inst_35418 = (inst_35416 < inst_35415);
var inst_35419 = inst_35418;
var state_35474__$1 = state_35474;
if(cljs.core.truth_(inst_35419)){
var statearr_35518_35603 = state_35474__$1;
(statearr_35518_35603[(1)] = (10));

} else {
var statearr_35519_35604 = state_35474__$1;
(statearr_35519_35604[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___35530,mults,ensure_mult,p))
;
return ((function (switch__32834__auto__,c__33851__auto___35530,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_35520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35520[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_35520[(1)] = (1));

return statearr_35520;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_35474){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35474);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35521){if((e35521 instanceof Object)){
var ex__32838__auto__ = e35521;
var statearr_35522_35608 = state_35474;
(statearr_35522_35608[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35609 = state_35474;
state_35474 = G__35609;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_35474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_35474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35530,mults,ensure_mult,p))
})();
var state__33853__auto__ = (function (){var statearr_35523 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35523[(6)] = c__33851__auto___35530);

return statearr_35523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35530,mults,ensure_mult,p))
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
var G__35615 = arguments.length;
switch (G__35615) {
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
var G__35620 = arguments.length;
switch (G__35620) {
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
var G__35623 = arguments.length;
switch (G__35623) {
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
var c__33851__auto___35702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35662){
var state_val_35663 = (state_35662[(1)]);
if((state_val_35663 === (7))){
var state_35662__$1 = state_35662;
var statearr_35666_35703 = state_35662__$1;
(statearr_35666_35703[(2)] = null);

(statearr_35666_35703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (1))){
var state_35662__$1 = state_35662;
var statearr_35667_35704 = state_35662__$1;
(statearr_35667_35704[(2)] = null);

(statearr_35667_35704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (4))){
var inst_35626 = (state_35662[(7)]);
var inst_35628 = (inst_35626 < cnt);
var state_35662__$1 = state_35662;
if(cljs.core.truth_(inst_35628)){
var statearr_35668_35705 = state_35662__$1;
(statearr_35668_35705[(1)] = (6));

} else {
var statearr_35669_35706 = state_35662__$1;
(statearr_35669_35706[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (15))){
var inst_35658 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35670_35707 = state_35662__$1;
(statearr_35670_35707[(2)] = inst_35658);

(statearr_35670_35707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (13))){
var inst_35651 = cljs.core.async.close_BANG_(out);
var state_35662__$1 = state_35662;
var statearr_35671_35708 = state_35662__$1;
(statearr_35671_35708[(2)] = inst_35651);

(statearr_35671_35708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (6))){
var state_35662__$1 = state_35662;
var statearr_35672_35709 = state_35662__$1;
(statearr_35672_35709[(2)] = null);

(statearr_35672_35709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (3))){
var inst_35660 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35662__$1,inst_35660);
} else {
if((state_val_35663 === (12))){
var inst_35648 = (state_35662[(8)]);
var inst_35648__$1 = (state_35662[(2)]);
var inst_35649 = cljs.core.some(cljs.core.nil_QMARK_,inst_35648__$1);
var state_35662__$1 = (function (){var statearr_35677 = state_35662;
(statearr_35677[(8)] = inst_35648__$1);

return statearr_35677;
})();
if(cljs.core.truth_(inst_35649)){
var statearr_35678_35710 = state_35662__$1;
(statearr_35678_35710[(1)] = (13));

} else {
var statearr_35679_35711 = state_35662__$1;
(statearr_35679_35711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (2))){
var inst_35625 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35626 = (0);
var state_35662__$1 = (function (){var statearr_35680 = state_35662;
(statearr_35680[(9)] = inst_35625);

(statearr_35680[(7)] = inst_35626);

return statearr_35680;
})();
var statearr_35684_35712 = state_35662__$1;
(statearr_35684_35712[(2)] = null);

(statearr_35684_35712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (11))){
var inst_35626 = (state_35662[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35662,(10),Object,null,(9));
var inst_35635 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35626) : chs__$1.call(null,inst_35626));
var inst_35636 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35626) : done.call(null,inst_35626));
var inst_35637 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35635,inst_35636);
var state_35662__$1 = state_35662;
var statearr_35688_35713 = state_35662__$1;
(statearr_35688_35713[(2)] = inst_35637);


cljs.core.async.impl.ioc_helpers.process_exception(state_35662__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (9))){
var inst_35626 = (state_35662[(7)]);
var inst_35639 = (state_35662[(2)]);
var inst_35640 = (inst_35626 + (1));
var inst_35626__$1 = inst_35640;
var state_35662__$1 = (function (){var statearr_35689 = state_35662;
(statearr_35689[(10)] = inst_35639);

(statearr_35689[(7)] = inst_35626__$1);

return statearr_35689;
})();
var statearr_35690_35714 = state_35662__$1;
(statearr_35690_35714[(2)] = null);

(statearr_35690_35714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (5))){
var inst_35646 = (state_35662[(2)]);
var state_35662__$1 = (function (){var statearr_35691 = state_35662;
(statearr_35691[(11)] = inst_35646);

return statearr_35691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35662__$1,(12),dchan);
} else {
if((state_val_35663 === (14))){
var inst_35648 = (state_35662[(8)]);
var inst_35653 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35648);
var state_35662__$1 = state_35662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35662__$1,(16),out,inst_35653);
} else {
if((state_val_35663 === (16))){
var inst_35655 = (state_35662[(2)]);
var state_35662__$1 = (function (){var statearr_35692 = state_35662;
(statearr_35692[(12)] = inst_35655);

return statearr_35692;
})();
var statearr_35693_35716 = state_35662__$1;
(statearr_35693_35716[(2)] = null);

(statearr_35693_35716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (10))){
var inst_35630 = (state_35662[(2)]);
var inst_35631 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35662__$1 = (function (){var statearr_35694 = state_35662;
(statearr_35694[(13)] = inst_35630);

return statearr_35694;
})();
var statearr_35695_35717 = state_35662__$1;
(statearr_35695_35717[(2)] = inst_35631);


cljs.core.async.impl.ioc_helpers.process_exception(state_35662__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35663 === (8))){
var inst_35644 = (state_35662[(2)]);
var state_35662__$1 = state_35662;
var statearr_35696_35718 = state_35662__$1;
(statearr_35696_35718[(2)] = inst_35644);

(statearr_35696_35718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32834__auto__,c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_35697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35697[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_35697[(1)] = (1));

return statearr_35697;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_35662){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35662);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35698){if((e35698 instanceof Object)){
var ex__32838__auto__ = e35698;
var statearr_35699_35721 = state_35662;
(statearr_35699_35721[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35722 = state_35662;
state_35662 = G__35722;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_35662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_35662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33853__auto__ = (function (){var statearr_35700 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35700[(6)] = c__33851__auto___35702);

return statearr_35700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35702,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35731 = arguments.length;
switch (G__35731) {
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
var c__33851__auto___35786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35786,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35786,out){
return (function (state_35763){
var state_val_35764 = (state_35763[(1)]);
if((state_val_35764 === (7))){
var inst_35743 = (state_35763[(7)]);
var inst_35742 = (state_35763[(8)]);
var inst_35742__$1 = (state_35763[(2)]);
var inst_35743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35742__$1,(0),null);
var inst_35744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35742__$1,(1),null);
var inst_35745 = (inst_35743__$1 == null);
var state_35763__$1 = (function (){var statearr_35765 = state_35763;
(statearr_35765[(7)] = inst_35743__$1);

(statearr_35765[(8)] = inst_35742__$1);

(statearr_35765[(9)] = inst_35744);

return statearr_35765;
})();
if(cljs.core.truth_(inst_35745)){
var statearr_35766_35792 = state_35763__$1;
(statearr_35766_35792[(1)] = (8));

} else {
var statearr_35767_35793 = state_35763__$1;
(statearr_35767_35793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (1))){
var inst_35732 = cljs.core.vec(chs);
var inst_35733 = inst_35732;
var state_35763__$1 = (function (){var statearr_35768 = state_35763;
(statearr_35768[(10)] = inst_35733);

return statearr_35768;
})();
var statearr_35769_35796 = state_35763__$1;
(statearr_35769_35796[(2)] = null);

(statearr_35769_35796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (4))){
var inst_35733 = (state_35763[(10)]);
var state_35763__$1 = state_35763;
return cljs.core.async.ioc_alts_BANG_(state_35763__$1,(7),inst_35733);
} else {
if((state_val_35764 === (6))){
var inst_35759 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35770_35797 = state_35763__$1;
(statearr_35770_35797[(2)] = inst_35759);

(statearr_35770_35797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (3))){
var inst_35761 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35763__$1,inst_35761);
} else {
if((state_val_35764 === (2))){
var inst_35733 = (state_35763[(10)]);
var inst_35735 = cljs.core.count(inst_35733);
var inst_35736 = (inst_35735 > (0));
var state_35763__$1 = state_35763;
if(cljs.core.truth_(inst_35736)){
var statearr_35772_35801 = state_35763__$1;
(statearr_35772_35801[(1)] = (4));

} else {
var statearr_35773_35802 = state_35763__$1;
(statearr_35773_35802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (11))){
var inst_35733 = (state_35763[(10)]);
var inst_35752 = (state_35763[(2)]);
var tmp35771 = inst_35733;
var inst_35733__$1 = tmp35771;
var state_35763__$1 = (function (){var statearr_35775 = state_35763;
(statearr_35775[(10)] = inst_35733__$1);

(statearr_35775[(11)] = inst_35752);

return statearr_35775;
})();
var statearr_35776_35806 = state_35763__$1;
(statearr_35776_35806[(2)] = null);

(statearr_35776_35806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (9))){
var inst_35743 = (state_35763[(7)]);
var state_35763__$1 = state_35763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35763__$1,(11),out,inst_35743);
} else {
if((state_val_35764 === (5))){
var inst_35757 = cljs.core.async.close_BANG_(out);
var state_35763__$1 = state_35763;
var statearr_35777_35807 = state_35763__$1;
(statearr_35777_35807[(2)] = inst_35757);

(statearr_35777_35807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (10))){
var inst_35755 = (state_35763[(2)]);
var state_35763__$1 = state_35763;
var statearr_35778_35808 = state_35763__$1;
(statearr_35778_35808[(2)] = inst_35755);

(statearr_35778_35808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35764 === (8))){
var inst_35743 = (state_35763[(7)]);
var inst_35742 = (state_35763[(8)]);
var inst_35744 = (state_35763[(9)]);
var inst_35733 = (state_35763[(10)]);
var inst_35747 = (function (){var cs = inst_35733;
var vec__35738 = inst_35742;
var v = inst_35743;
var c = inst_35744;
return ((function (cs,vec__35738,v,c,inst_35743,inst_35742,inst_35744,inst_35733,state_val_35764,c__33851__auto___35786,out){
return (function (p1__35729_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35729_SHARP_);
});
;})(cs,vec__35738,v,c,inst_35743,inst_35742,inst_35744,inst_35733,state_val_35764,c__33851__auto___35786,out))
})();
var inst_35748 = cljs.core.filterv(inst_35747,inst_35733);
var inst_35733__$1 = inst_35748;
var state_35763__$1 = (function (){var statearr_35779 = state_35763;
(statearr_35779[(10)] = inst_35733__$1);

return statearr_35779;
})();
var statearr_35780_35809 = state_35763__$1;
(statearr_35780_35809[(2)] = null);

(statearr_35780_35809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___35786,out))
;
return ((function (switch__32834__auto__,c__33851__auto___35786,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_35781 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35781[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_35781[(1)] = (1));

return statearr_35781;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_35763){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35763);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35782){if((e35782 instanceof Object)){
var ex__32838__auto__ = e35782;
var statearr_35783_35811 = state_35763;
(statearr_35783_35811[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35815 = state_35763;
state_35763 = G__35815;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_35763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_35763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35786,out))
})();
var state__33853__auto__ = (function (){var statearr_35784 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35784[(6)] = c__33851__auto___35786);

return statearr_35784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35786,out))
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
var G__35821 = arguments.length;
switch (G__35821) {
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
var c__33851__auto___35867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35867,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35867,out){
return (function (state_35845){
var state_val_35846 = (state_35845[(1)]);
if((state_val_35846 === (7))){
var inst_35827 = (state_35845[(7)]);
var inst_35827__$1 = (state_35845[(2)]);
var inst_35828 = (inst_35827__$1 == null);
var inst_35829 = cljs.core.not(inst_35828);
var state_35845__$1 = (function (){var statearr_35848 = state_35845;
(statearr_35848[(7)] = inst_35827__$1);

return statearr_35848;
})();
if(inst_35829){
var statearr_35849_35868 = state_35845__$1;
(statearr_35849_35868[(1)] = (8));

} else {
var statearr_35850_35869 = state_35845__$1;
(statearr_35850_35869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (1))){
var inst_35822 = (0);
var state_35845__$1 = (function (){var statearr_35851 = state_35845;
(statearr_35851[(8)] = inst_35822);

return statearr_35851;
})();
var statearr_35852_35870 = state_35845__$1;
(statearr_35852_35870[(2)] = null);

(statearr_35852_35870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (4))){
var state_35845__$1 = state_35845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35845__$1,(7),ch);
} else {
if((state_val_35846 === (6))){
var inst_35840 = (state_35845[(2)]);
var state_35845__$1 = state_35845;
var statearr_35853_35871 = state_35845__$1;
(statearr_35853_35871[(2)] = inst_35840);

(statearr_35853_35871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (3))){
var inst_35842 = (state_35845[(2)]);
var inst_35843 = cljs.core.async.close_BANG_(out);
var state_35845__$1 = (function (){var statearr_35854 = state_35845;
(statearr_35854[(9)] = inst_35842);

return statearr_35854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35845__$1,inst_35843);
} else {
if((state_val_35846 === (2))){
var inst_35822 = (state_35845[(8)]);
var inst_35824 = (inst_35822 < n);
var state_35845__$1 = state_35845;
if(cljs.core.truth_(inst_35824)){
var statearr_35855_35872 = state_35845__$1;
(statearr_35855_35872[(1)] = (4));

} else {
var statearr_35856_35873 = state_35845__$1;
(statearr_35856_35873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (11))){
var inst_35822 = (state_35845[(8)]);
var inst_35832 = (state_35845[(2)]);
var inst_35833 = (inst_35822 + (1));
var inst_35822__$1 = inst_35833;
var state_35845__$1 = (function (){var statearr_35857 = state_35845;
(statearr_35857[(8)] = inst_35822__$1);

(statearr_35857[(10)] = inst_35832);

return statearr_35857;
})();
var statearr_35858_35874 = state_35845__$1;
(statearr_35858_35874[(2)] = null);

(statearr_35858_35874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (9))){
var state_35845__$1 = state_35845;
var statearr_35859_35875 = state_35845__$1;
(statearr_35859_35875[(2)] = null);

(statearr_35859_35875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (5))){
var state_35845__$1 = state_35845;
var statearr_35860_35876 = state_35845__$1;
(statearr_35860_35876[(2)] = null);

(statearr_35860_35876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (10))){
var inst_35837 = (state_35845[(2)]);
var state_35845__$1 = state_35845;
var statearr_35861_35877 = state_35845__$1;
(statearr_35861_35877[(2)] = inst_35837);

(statearr_35861_35877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35846 === (8))){
var inst_35827 = (state_35845[(7)]);
var state_35845__$1 = state_35845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35845__$1,(11),out,inst_35827);
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
});})(c__33851__auto___35867,out))
;
return ((function (switch__32834__auto__,c__33851__auto___35867,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_35862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35862[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_35862[(1)] = (1));

return statearr_35862;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_35845){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35845);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35863){if((e35863 instanceof Object)){
var ex__32838__auto__ = e35863;
var statearr_35864_35880 = state_35845;
(statearr_35864_35880[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35884 = state_35845;
state_35845 = G__35884;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_35845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_35845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35867,out))
})();
var state__33853__auto__ = (function (){var statearr_35865 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35865[(6)] = c__33851__auto___35867);

return statearr_35865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35867,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35886 = (function (f,ch,meta35887){
this.f = f;
this.ch = ch;
this.meta35887 = meta35887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35888,meta35887__$1){
var self__ = this;
var _35888__$1 = this;
return (new cljs.core.async.t_cljs$core$async35886(self__.f,self__.ch,meta35887__$1));
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35888){
var self__ = this;
var _35888__$1 = this;
return self__.meta35887;
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35889 = (function (f,ch,meta35887,_,fn1,meta35890){
this.f = f;
this.ch = ch;
this.meta35887 = meta35887;
this._ = _;
this.fn1 = fn1;
this.meta35890 = meta35890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35891,meta35890__$1){
var self__ = this;
var _35891__$1 = this;
return (new cljs.core.async.t_cljs$core$async35889(self__.f,self__.ch,self__.meta35887,self__._,self__.fn1,meta35890__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35891){
var self__ = this;
var _35891__$1 = this;
return self__.meta35890;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35885_SHARP_){
var G__35892 = (((p1__35885_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35885_SHARP_) : self__.f.call(null,p1__35885_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35892) : f1.call(null,G__35892));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35887","meta35887",-154628800,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35886","cljs.core.async/t_cljs$core$async35886",1933859628,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35890","meta35890",-733249480,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35889";

cljs.core.async.t_cljs$core$async35889.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async35889");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35889.
 */
cljs.core.async.__GT_t_cljs$core$async35889 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35889(f__$1,ch__$1,meta35887__$1,___$2,fn1__$1,meta35890){
return (new cljs.core.async.t_cljs$core$async35889(f__$1,ch__$1,meta35887__$1,___$2,fn1__$1,meta35890));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35889(self__.f,self__.ch,self__.meta35887,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35894 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35894) : self__.f.call(null,G__35894));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35886.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35887","meta35887",-154628800,null)], null);
});

cljs.core.async.t_cljs$core$async35886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35886";

cljs.core.async.t_cljs$core$async35886.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async35886");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35886.
 */
cljs.core.async.__GT_t_cljs$core$async35886 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35886(f__$1,ch__$1,meta35887){
return (new cljs.core.async.t_cljs$core$async35886(f__$1,ch__$1,meta35887));
});

}

return (new cljs.core.async.t_cljs$core$async35886(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35899 = (function (f,ch,meta35900){
this.f = f;
this.ch = ch;
this.meta35900 = meta35900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35901,meta35900__$1){
var self__ = this;
var _35901__$1 = this;
return (new cljs.core.async.t_cljs$core$async35899(self__.f,self__.ch,meta35900__$1));
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35901){
var self__ = this;
var _35901__$1 = this;
return self__.meta35900;
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35900","meta35900",-5554569,null)], null);
});

cljs.core.async.t_cljs$core$async35899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35899";

cljs.core.async.t_cljs$core$async35899.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async35899");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35899.
 */
cljs.core.async.__GT_t_cljs$core$async35899 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35899(f__$1,ch__$1,meta35900){
return (new cljs.core.async.t_cljs$core$async35899(f__$1,ch__$1,meta35900));
});

}

return (new cljs.core.async.t_cljs$core$async35899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35906 = (function (p,ch,meta35907){
this.p = p;
this.ch = ch;
this.meta35907 = meta35907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35908,meta35907__$1){
var self__ = this;
var _35908__$1 = this;
return (new cljs.core.async.t_cljs$core$async35906(self__.p,self__.ch,meta35907__$1));
});

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35908){
var self__ = this;
var _35908__$1 = this;
return self__.meta35907;
});

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35907","meta35907",1365478537,null)], null);
});

cljs.core.async.t_cljs$core$async35906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35906";

cljs.core.async.t_cljs$core$async35906.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async35906");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35906.
 */
cljs.core.async.__GT_t_cljs$core$async35906 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35906(p__$1,ch__$1,meta35907){
return (new cljs.core.async.t_cljs$core$async35906(p__$1,ch__$1,meta35907));
});

}

return (new cljs.core.async.t_cljs$core$async35906(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35916 = arguments.length;
switch (G__35916) {
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
var c__33851__auto___35977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___35977,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___35977,out){
return (function (state_35937){
var state_val_35938 = (state_35937[(1)]);
if((state_val_35938 === (7))){
var inst_35933 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35939_35978 = state_35937__$1;
(statearr_35939_35978[(2)] = inst_35933);

(statearr_35939_35978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (1))){
var state_35937__$1 = state_35937;
var statearr_35940_35979 = state_35937__$1;
(statearr_35940_35979[(2)] = null);

(statearr_35940_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (4))){
var inst_35919 = (state_35937[(7)]);
var inst_35919__$1 = (state_35937[(2)]);
var inst_35920 = (inst_35919__$1 == null);
var state_35937__$1 = (function (){var statearr_35941 = state_35937;
(statearr_35941[(7)] = inst_35919__$1);

return statearr_35941;
})();
if(cljs.core.truth_(inst_35920)){
var statearr_35942_35980 = state_35937__$1;
(statearr_35942_35980[(1)] = (5));

} else {
var statearr_35943_35981 = state_35937__$1;
(statearr_35943_35981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (6))){
var inst_35919 = (state_35937[(7)]);
var inst_35924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35919) : p.call(null,inst_35919));
var state_35937__$1 = state_35937;
if(cljs.core.truth_(inst_35924)){
var statearr_35944_35985 = state_35937__$1;
(statearr_35944_35985[(1)] = (8));

} else {
var statearr_35945_35986 = state_35937__$1;
(statearr_35945_35986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (3))){
var inst_35935 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35937__$1,inst_35935);
} else {
if((state_val_35938 === (2))){
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35937__$1,(4),ch);
} else {
if((state_val_35938 === (11))){
var inst_35927 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35946_35988 = state_35937__$1;
(statearr_35946_35988[(2)] = inst_35927);

(statearr_35946_35988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (9))){
var state_35937__$1 = state_35937;
var statearr_35947_35997 = state_35937__$1;
(statearr_35947_35997[(2)] = null);

(statearr_35947_35997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (5))){
var inst_35922 = cljs.core.async.close_BANG_(out);
var state_35937__$1 = state_35937;
var statearr_35948_36004 = state_35937__$1;
(statearr_35948_36004[(2)] = inst_35922);

(statearr_35948_36004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (10))){
var inst_35930 = (state_35937[(2)]);
var state_35937__$1 = (function (){var statearr_35949 = state_35937;
(statearr_35949[(8)] = inst_35930);

return statearr_35949;
})();
var statearr_35950_36011 = state_35937__$1;
(statearr_35950_36011[(2)] = null);

(statearr_35950_36011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35938 === (8))){
var inst_35919 = (state_35937[(7)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35937__$1,(11),out,inst_35919);
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
});})(c__33851__auto___35977,out))
;
return ((function (switch__32834__auto__,c__33851__auto___35977,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_35951 = [null,null,null,null,null,null,null,null,null];
(statearr_35951[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_35951[(1)] = (1));

return statearr_35951;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_35937){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_35937);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e35952){if((e35952 instanceof Object)){
var ex__32838__auto__ = e35952;
var statearr_35953_36019 = state_35937;
(statearr_35953_36019[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36020 = state_35937;
state_35937 = G__36020;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___35977,out))
})();
var state__33853__auto__ = (function (){var statearr_35954 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_35954[(6)] = c__33851__auto___35977);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___35977,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36025 = arguments.length;
switch (G__36025) {
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
var c__33851__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto__){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto__){
return (function (state_36097){
var state_val_36098 = (state_36097[(1)]);
if((state_val_36098 === (7))){
var inst_36093 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36114_36165 = state_36097__$1;
(statearr_36114_36165[(2)] = inst_36093);

(statearr_36114_36165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (20))){
var inst_36063 = (state_36097[(7)]);
var inst_36074 = (state_36097[(2)]);
var inst_36075 = cljs.core.next(inst_36063);
var inst_36048 = inst_36075;
var inst_36049 = null;
var inst_36050 = (0);
var inst_36051 = (0);
var state_36097__$1 = (function (){var statearr_36122 = state_36097;
(statearr_36122[(8)] = inst_36049);

(statearr_36122[(9)] = inst_36050);

(statearr_36122[(10)] = inst_36051);

(statearr_36122[(11)] = inst_36048);

(statearr_36122[(12)] = inst_36074);

return statearr_36122;
})();
var statearr_36127_36166 = state_36097__$1;
(statearr_36127_36166[(2)] = null);

(statearr_36127_36166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (1))){
var state_36097__$1 = state_36097;
var statearr_36128_36167 = state_36097__$1;
(statearr_36128_36167[(2)] = null);

(statearr_36128_36167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (4))){
var inst_36037 = (state_36097[(13)]);
var inst_36037__$1 = (state_36097[(2)]);
var inst_36038 = (inst_36037__$1 == null);
var state_36097__$1 = (function (){var statearr_36129 = state_36097;
(statearr_36129[(13)] = inst_36037__$1);

return statearr_36129;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36130_36168 = state_36097__$1;
(statearr_36130_36168[(1)] = (5));

} else {
var statearr_36131_36169 = state_36097__$1;
(statearr_36131_36169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (15))){
var state_36097__$1 = state_36097;
var statearr_36135_36170 = state_36097__$1;
(statearr_36135_36170[(2)] = null);

(statearr_36135_36170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (21))){
var state_36097__$1 = state_36097;
var statearr_36136_36171 = state_36097__$1;
(statearr_36136_36171[(2)] = null);

(statearr_36136_36171[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (13))){
var inst_36049 = (state_36097[(8)]);
var inst_36050 = (state_36097[(9)]);
var inst_36051 = (state_36097[(10)]);
var inst_36048 = (state_36097[(11)]);
var inst_36059 = (state_36097[(2)]);
var inst_36060 = (inst_36051 + (1));
var tmp36132 = inst_36049;
var tmp36133 = inst_36050;
var tmp36134 = inst_36048;
var inst_36048__$1 = tmp36134;
var inst_36049__$1 = tmp36132;
var inst_36050__$1 = tmp36133;
var inst_36051__$1 = inst_36060;
var state_36097__$1 = (function (){var statearr_36139 = state_36097;
(statearr_36139[(14)] = inst_36059);

(statearr_36139[(8)] = inst_36049__$1);

(statearr_36139[(9)] = inst_36050__$1);

(statearr_36139[(10)] = inst_36051__$1);

(statearr_36139[(11)] = inst_36048__$1);

return statearr_36139;
})();
var statearr_36140_36172 = state_36097__$1;
(statearr_36140_36172[(2)] = null);

(statearr_36140_36172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (22))){
var state_36097__$1 = state_36097;
var statearr_36141_36173 = state_36097__$1;
(statearr_36141_36173[(2)] = null);

(statearr_36141_36173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (6))){
var inst_36037 = (state_36097[(13)]);
var inst_36046 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36037) : f.call(null,inst_36037));
var inst_36047 = cljs.core.seq(inst_36046);
var inst_36048 = inst_36047;
var inst_36049 = null;
var inst_36050 = (0);
var inst_36051 = (0);
var state_36097__$1 = (function (){var statearr_36142 = state_36097;
(statearr_36142[(8)] = inst_36049);

(statearr_36142[(9)] = inst_36050);

(statearr_36142[(10)] = inst_36051);

(statearr_36142[(11)] = inst_36048);

return statearr_36142;
})();
var statearr_36143_36174 = state_36097__$1;
(statearr_36143_36174[(2)] = null);

(statearr_36143_36174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (17))){
var inst_36063 = (state_36097[(7)]);
var inst_36067 = cljs.core.chunk_first(inst_36063);
var inst_36068 = cljs.core.chunk_rest(inst_36063);
var inst_36069 = cljs.core.count(inst_36067);
var inst_36048 = inst_36068;
var inst_36049 = inst_36067;
var inst_36050 = inst_36069;
var inst_36051 = (0);
var state_36097__$1 = (function (){var statearr_36144 = state_36097;
(statearr_36144[(8)] = inst_36049);

(statearr_36144[(9)] = inst_36050);

(statearr_36144[(10)] = inst_36051);

(statearr_36144[(11)] = inst_36048);

return statearr_36144;
})();
var statearr_36145_36178 = state_36097__$1;
(statearr_36145_36178[(2)] = null);

(statearr_36145_36178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (3))){
var inst_36095 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36097__$1,inst_36095);
} else {
if((state_val_36098 === (12))){
var inst_36083 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36146_36184 = state_36097__$1;
(statearr_36146_36184[(2)] = inst_36083);

(statearr_36146_36184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (2))){
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36097__$1,(4),in$);
} else {
if((state_val_36098 === (23))){
var inst_36091 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36147_36188 = state_36097__$1;
(statearr_36147_36188[(2)] = inst_36091);

(statearr_36147_36188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (19))){
var inst_36078 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36148_36189 = state_36097__$1;
(statearr_36148_36189[(2)] = inst_36078);

(statearr_36148_36189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (11))){
var inst_36063 = (state_36097[(7)]);
var inst_36048 = (state_36097[(11)]);
var inst_36063__$1 = cljs.core.seq(inst_36048);
var state_36097__$1 = (function (){var statearr_36149 = state_36097;
(statearr_36149[(7)] = inst_36063__$1);

return statearr_36149;
})();
if(inst_36063__$1){
var statearr_36150_36190 = state_36097__$1;
(statearr_36150_36190[(1)] = (14));

} else {
var statearr_36151_36191 = state_36097__$1;
(statearr_36151_36191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (9))){
var inst_36085 = (state_36097[(2)]);
var inst_36086 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36097__$1 = (function (){var statearr_36152 = state_36097;
(statearr_36152[(15)] = inst_36085);

return statearr_36152;
})();
if(cljs.core.truth_(inst_36086)){
var statearr_36153_36192 = state_36097__$1;
(statearr_36153_36192[(1)] = (21));

} else {
var statearr_36154_36193 = state_36097__$1;
(statearr_36154_36193[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (5))){
var inst_36040 = cljs.core.async.close_BANG_(out);
var state_36097__$1 = state_36097;
var statearr_36155_36194 = state_36097__$1;
(statearr_36155_36194[(2)] = inst_36040);

(statearr_36155_36194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (14))){
var inst_36063 = (state_36097[(7)]);
var inst_36065 = cljs.core.chunked_seq_QMARK_(inst_36063);
var state_36097__$1 = state_36097;
if(inst_36065){
var statearr_36156_36195 = state_36097__$1;
(statearr_36156_36195[(1)] = (17));

} else {
var statearr_36157_36196 = state_36097__$1;
(statearr_36157_36196[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (16))){
var inst_36081 = (state_36097[(2)]);
var state_36097__$1 = state_36097;
var statearr_36158_36197 = state_36097__$1;
(statearr_36158_36197[(2)] = inst_36081);

(statearr_36158_36197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36098 === (10))){
var inst_36049 = (state_36097[(8)]);
var inst_36051 = (state_36097[(10)]);
var inst_36056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36049,inst_36051);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36097__$1,(13),out,inst_36056);
} else {
if((state_val_36098 === (18))){
var inst_36063 = (state_36097[(7)]);
var inst_36072 = cljs.core.first(inst_36063);
var state_36097__$1 = state_36097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36097__$1,(20),out,inst_36072);
} else {
if((state_val_36098 === (8))){
var inst_36050 = (state_36097[(9)]);
var inst_36051 = (state_36097[(10)]);
var inst_36053 = (inst_36051 < inst_36050);
var inst_36054 = inst_36053;
var state_36097__$1 = state_36097;
if(cljs.core.truth_(inst_36054)){
var statearr_36159_36198 = state_36097__$1;
(statearr_36159_36198[(1)] = (10));

} else {
var statearr_36160_36199 = state_36097__$1;
(statearr_36160_36199[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto__))
;
return ((function (switch__32834__auto__,c__33851__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____0 = (function (){
var statearr_36161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36161[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__);

(statearr_36161[(1)] = (1));

return statearr_36161;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____1 = (function (state_36097){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_36097);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e36162){if((e36162 instanceof Object)){
var ex__32838__auto__ = e36162;
var statearr_36163_36200 = state_36097;
(statearr_36163_36200[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36201 = state_36097;
state_36097 = G__36201;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__ = function(state_36097){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____1.call(this,state_36097);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32835__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto__))
})();
var state__33853__auto__ = (function (){var statearr_36164 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_36164[(6)] = c__33851__auto__);

return statearr_36164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto__))
);

return c__33851__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36203 = arguments.length;
switch (G__36203) {
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
var G__36206 = arguments.length;
switch (G__36206) {
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
var G__36215 = arguments.length;
switch (G__36215) {
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
var c__33851__auto___36281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___36281,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___36281,out){
return (function (state_36242){
var state_val_36243 = (state_36242[(1)]);
if((state_val_36243 === (7))){
var inst_36237 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36244_36286 = state_36242__$1;
(statearr_36244_36286[(2)] = inst_36237);

(statearr_36244_36286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (1))){
var inst_36219 = null;
var state_36242__$1 = (function (){var statearr_36245 = state_36242;
(statearr_36245[(7)] = inst_36219);

return statearr_36245;
})();
var statearr_36246_36293 = state_36242__$1;
(statearr_36246_36293[(2)] = null);

(statearr_36246_36293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (4))){
var inst_36222 = (state_36242[(8)]);
var inst_36222__$1 = (state_36242[(2)]);
var inst_36223 = (inst_36222__$1 == null);
var inst_36224 = cljs.core.not(inst_36223);
var state_36242__$1 = (function (){var statearr_36247 = state_36242;
(statearr_36247[(8)] = inst_36222__$1);

return statearr_36247;
})();
if(inst_36224){
var statearr_36248_36294 = state_36242__$1;
(statearr_36248_36294[(1)] = (5));

} else {
var statearr_36249_36298 = state_36242__$1;
(statearr_36249_36298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (6))){
var state_36242__$1 = state_36242;
var statearr_36250_36303 = state_36242__$1;
(statearr_36250_36303[(2)] = null);

(statearr_36250_36303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (3))){
var inst_36239 = (state_36242[(2)]);
var inst_36240 = cljs.core.async.close_BANG_(out);
var state_36242__$1 = (function (){var statearr_36251 = state_36242;
(statearr_36251[(9)] = inst_36239);

return statearr_36251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36242__$1,inst_36240);
} else {
if((state_val_36243 === (2))){
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36242__$1,(4),ch);
} else {
if((state_val_36243 === (11))){
var inst_36222 = (state_36242[(8)]);
var inst_36231 = (state_36242[(2)]);
var inst_36219 = inst_36222;
var state_36242__$1 = (function (){var statearr_36252 = state_36242;
(statearr_36252[(10)] = inst_36231);

(statearr_36252[(7)] = inst_36219);

return statearr_36252;
})();
var statearr_36253_36314 = state_36242__$1;
(statearr_36253_36314[(2)] = null);

(statearr_36253_36314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (9))){
var inst_36222 = (state_36242[(8)]);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36242__$1,(11),out,inst_36222);
} else {
if((state_val_36243 === (5))){
var inst_36222 = (state_36242[(8)]);
var inst_36219 = (state_36242[(7)]);
var inst_36226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36222,inst_36219);
var state_36242__$1 = state_36242;
if(inst_36226){
var statearr_36258_36317 = state_36242__$1;
(statearr_36258_36317[(1)] = (8));

} else {
var statearr_36259_36318 = state_36242__$1;
(statearr_36259_36318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (10))){
var inst_36234 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36260_36319 = state_36242__$1;
(statearr_36260_36319[(2)] = inst_36234);

(statearr_36260_36319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (8))){
var inst_36219 = (state_36242[(7)]);
var tmp36254 = inst_36219;
var inst_36219__$1 = tmp36254;
var state_36242__$1 = (function (){var statearr_36261 = state_36242;
(statearr_36261[(7)] = inst_36219__$1);

return statearr_36261;
})();
var statearr_36262_36320 = state_36242__$1;
(statearr_36262_36320[(2)] = null);

(statearr_36262_36320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___36281,out))
;
return ((function (switch__32834__auto__,c__33851__auto___36281,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_36263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36263[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_36263[(1)] = (1));

return statearr_36263;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_36242){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_36242);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e36264){if((e36264 instanceof Object)){
var ex__32838__auto__ = e36264;
var statearr_36265_36321 = state_36242;
(statearr_36265_36321[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36264;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36322 = state_36242;
state_36242 = G__36322;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___36281,out))
})();
var state__33853__auto__ = (function (){var statearr_36269 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_36269[(6)] = c__33851__auto___36281);

return statearr_36269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___36281,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36324 = arguments.length;
switch (G__36324) {
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
var c__33851__auto___36391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___36391,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___36391,out){
return (function (state_36362){
var state_val_36363 = (state_36362[(1)]);
if((state_val_36363 === (7))){
var inst_36358 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
var statearr_36364_36392 = state_36362__$1;
(statearr_36364_36392[(2)] = inst_36358);

(statearr_36364_36392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (1))){
var inst_36325 = (new Array(n));
var inst_36326 = inst_36325;
var inst_36327 = (0);
var state_36362__$1 = (function (){var statearr_36366 = state_36362;
(statearr_36366[(7)] = inst_36326);

(statearr_36366[(8)] = inst_36327);

return statearr_36366;
})();
var statearr_36367_36393 = state_36362__$1;
(statearr_36367_36393[(2)] = null);

(statearr_36367_36393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (4))){
var inst_36330 = (state_36362[(9)]);
var inst_36330__$1 = (state_36362[(2)]);
var inst_36331 = (inst_36330__$1 == null);
var inst_36332 = cljs.core.not(inst_36331);
var state_36362__$1 = (function (){var statearr_36368 = state_36362;
(statearr_36368[(9)] = inst_36330__$1);

return statearr_36368;
})();
if(inst_36332){
var statearr_36369_36394 = state_36362__$1;
(statearr_36369_36394[(1)] = (5));

} else {
var statearr_36370_36395 = state_36362__$1;
(statearr_36370_36395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (15))){
var inst_36352 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
var statearr_36371_36396 = state_36362__$1;
(statearr_36371_36396[(2)] = inst_36352);

(statearr_36371_36396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (13))){
var state_36362__$1 = state_36362;
var statearr_36372_36397 = state_36362__$1;
(statearr_36372_36397[(2)] = null);

(statearr_36372_36397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (6))){
var inst_36327 = (state_36362[(8)]);
var inst_36348 = (inst_36327 > (0));
var state_36362__$1 = state_36362;
if(cljs.core.truth_(inst_36348)){
var statearr_36373_36398 = state_36362__$1;
(statearr_36373_36398[(1)] = (12));

} else {
var statearr_36374_36399 = state_36362__$1;
(statearr_36374_36399[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (3))){
var inst_36360 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36362__$1,inst_36360);
} else {
if((state_val_36363 === (12))){
var inst_36326 = (state_36362[(7)]);
var inst_36350 = cljs.core.vec(inst_36326);
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36362__$1,(15),out,inst_36350);
} else {
if((state_val_36363 === (2))){
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36362__$1,(4),ch);
} else {
if((state_val_36363 === (11))){
var inst_36342 = (state_36362[(2)]);
var inst_36343 = (new Array(n));
var inst_36326 = inst_36343;
var inst_36327 = (0);
var state_36362__$1 = (function (){var statearr_36375 = state_36362;
(statearr_36375[(10)] = inst_36342);

(statearr_36375[(7)] = inst_36326);

(statearr_36375[(8)] = inst_36327);

return statearr_36375;
})();
var statearr_36376_36400 = state_36362__$1;
(statearr_36376_36400[(2)] = null);

(statearr_36376_36400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (9))){
var inst_36326 = (state_36362[(7)]);
var inst_36340 = cljs.core.vec(inst_36326);
var state_36362__$1 = state_36362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36362__$1,(11),out,inst_36340);
} else {
if((state_val_36363 === (5))){
var inst_36326 = (state_36362[(7)]);
var inst_36327 = (state_36362[(8)]);
var inst_36330 = (state_36362[(9)]);
var inst_36335 = (state_36362[(11)]);
var inst_36334 = (inst_36326[inst_36327] = inst_36330);
var inst_36335__$1 = (inst_36327 + (1));
var inst_36336 = (inst_36335__$1 < n);
var state_36362__$1 = (function (){var statearr_36377 = state_36362;
(statearr_36377[(12)] = inst_36334);

(statearr_36377[(11)] = inst_36335__$1);

return statearr_36377;
})();
if(cljs.core.truth_(inst_36336)){
var statearr_36378_36401 = state_36362__$1;
(statearr_36378_36401[(1)] = (8));

} else {
var statearr_36379_36402 = state_36362__$1;
(statearr_36379_36402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (14))){
var inst_36355 = (state_36362[(2)]);
var inst_36356 = cljs.core.async.close_BANG_(out);
var state_36362__$1 = (function (){var statearr_36381 = state_36362;
(statearr_36381[(13)] = inst_36355);

return statearr_36381;
})();
var statearr_36382_36406 = state_36362__$1;
(statearr_36382_36406[(2)] = inst_36356);

(statearr_36382_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (10))){
var inst_36346 = (state_36362[(2)]);
var state_36362__$1 = state_36362;
var statearr_36383_36407 = state_36362__$1;
(statearr_36383_36407[(2)] = inst_36346);

(statearr_36383_36407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36363 === (8))){
var inst_36326 = (state_36362[(7)]);
var inst_36335 = (state_36362[(11)]);
var tmp36380 = inst_36326;
var inst_36326__$1 = tmp36380;
var inst_36327 = inst_36335;
var state_36362__$1 = (function (){var statearr_36384 = state_36362;
(statearr_36384[(7)] = inst_36326__$1);

(statearr_36384[(8)] = inst_36327);

return statearr_36384;
})();
var statearr_36385_36408 = state_36362__$1;
(statearr_36385_36408[(2)] = null);

(statearr_36385_36408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___36391,out))
;
return ((function (switch__32834__auto__,c__33851__auto___36391,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_36386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36386[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_36386[(1)] = (1));

return statearr_36386;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_36362){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_36362);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e36387){if((e36387 instanceof Object)){
var ex__32838__auto__ = e36387;
var statearr_36388_36410 = state_36362;
(statearr_36388_36410[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36411 = state_36362;
state_36362 = G__36411;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_36362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_36362);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___36391,out))
})();
var state__33853__auto__ = (function (){var statearr_36389 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_36389[(6)] = c__33851__auto___36391);

return statearr_36389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___36391,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36415 = arguments.length;
switch (G__36415) {
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
var c__33851__auto___36488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___36488,out){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___36488,out){
return (function (state_36460){
var state_val_36461 = (state_36460[(1)]);
if((state_val_36461 === (7))){
var inst_36456 = (state_36460[(2)]);
var state_36460__$1 = state_36460;
var statearr_36462_36489 = state_36460__$1;
(statearr_36462_36489[(2)] = inst_36456);

(statearr_36462_36489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (1))){
var inst_36419 = [];
var inst_36420 = inst_36419;
var inst_36421 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36460__$1 = (function (){var statearr_36463 = state_36460;
(statearr_36463[(7)] = inst_36420);

(statearr_36463[(8)] = inst_36421);

return statearr_36463;
})();
var statearr_36464_36490 = state_36460__$1;
(statearr_36464_36490[(2)] = null);

(statearr_36464_36490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (4))){
var inst_36424 = (state_36460[(9)]);
var inst_36424__$1 = (state_36460[(2)]);
var inst_36425 = (inst_36424__$1 == null);
var inst_36426 = cljs.core.not(inst_36425);
var state_36460__$1 = (function (){var statearr_36465 = state_36460;
(statearr_36465[(9)] = inst_36424__$1);

return statearr_36465;
})();
if(inst_36426){
var statearr_36466_36491 = state_36460__$1;
(statearr_36466_36491[(1)] = (5));

} else {
var statearr_36467_36492 = state_36460__$1;
(statearr_36467_36492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (15))){
var inst_36450 = (state_36460[(2)]);
var state_36460__$1 = state_36460;
var statearr_36468_36493 = state_36460__$1;
(statearr_36468_36493[(2)] = inst_36450);

(statearr_36468_36493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (13))){
var state_36460__$1 = state_36460;
var statearr_36469_36494 = state_36460__$1;
(statearr_36469_36494[(2)] = null);

(statearr_36469_36494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (6))){
var inst_36420 = (state_36460[(7)]);
var inst_36445 = inst_36420.length;
var inst_36446 = (inst_36445 > (0));
var state_36460__$1 = state_36460;
if(cljs.core.truth_(inst_36446)){
var statearr_36470_36495 = state_36460__$1;
(statearr_36470_36495[(1)] = (12));

} else {
var statearr_36471_36496 = state_36460__$1;
(statearr_36471_36496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (3))){
var inst_36458 = (state_36460[(2)]);
var state_36460__$1 = state_36460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36460__$1,inst_36458);
} else {
if((state_val_36461 === (12))){
var inst_36420 = (state_36460[(7)]);
var inst_36448 = cljs.core.vec(inst_36420);
var state_36460__$1 = state_36460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36460__$1,(15),out,inst_36448);
} else {
if((state_val_36461 === (2))){
var state_36460__$1 = state_36460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36460__$1,(4),ch);
} else {
if((state_val_36461 === (11))){
var inst_36424 = (state_36460[(9)]);
var inst_36428 = (state_36460[(10)]);
var inst_36438 = (state_36460[(2)]);
var inst_36439 = [];
var inst_36440 = inst_36439.push(inst_36424);
var inst_36420 = inst_36439;
var inst_36421 = inst_36428;
var state_36460__$1 = (function (){var statearr_36472 = state_36460;
(statearr_36472[(11)] = inst_36440);

(statearr_36472[(7)] = inst_36420);

(statearr_36472[(12)] = inst_36438);

(statearr_36472[(8)] = inst_36421);

return statearr_36472;
})();
var statearr_36473_36497 = state_36460__$1;
(statearr_36473_36497[(2)] = null);

(statearr_36473_36497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (9))){
var inst_36420 = (state_36460[(7)]);
var inst_36436 = cljs.core.vec(inst_36420);
var state_36460__$1 = state_36460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36460__$1,(11),out,inst_36436);
} else {
if((state_val_36461 === (5))){
var inst_36421 = (state_36460[(8)]);
var inst_36424 = (state_36460[(9)]);
var inst_36428 = (state_36460[(10)]);
var inst_36428__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36424) : f.call(null,inst_36424));
var inst_36429 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36428__$1,inst_36421);
var inst_36430 = cljs.core.keyword_identical_QMARK_(inst_36421,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36431 = ((inst_36429) || (inst_36430));
var state_36460__$1 = (function (){var statearr_36474 = state_36460;
(statearr_36474[(10)] = inst_36428__$1);

return statearr_36474;
})();
if(cljs.core.truth_(inst_36431)){
var statearr_36475_36501 = state_36460__$1;
(statearr_36475_36501[(1)] = (8));

} else {
var statearr_36476_36502 = state_36460__$1;
(statearr_36476_36502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (14))){
var inst_36453 = (state_36460[(2)]);
var inst_36454 = cljs.core.async.close_BANG_(out);
var state_36460__$1 = (function (){var statearr_36478 = state_36460;
(statearr_36478[(13)] = inst_36453);

return statearr_36478;
})();
var statearr_36479_36503 = state_36460__$1;
(statearr_36479_36503[(2)] = inst_36454);

(statearr_36479_36503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (10))){
var inst_36443 = (state_36460[(2)]);
var state_36460__$1 = state_36460;
var statearr_36480_36504 = state_36460__$1;
(statearr_36480_36504[(2)] = inst_36443);

(statearr_36480_36504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36461 === (8))){
var inst_36420 = (state_36460[(7)]);
var inst_36424 = (state_36460[(9)]);
var inst_36428 = (state_36460[(10)]);
var inst_36433 = inst_36420.push(inst_36424);
var tmp36477 = inst_36420;
var inst_36420__$1 = tmp36477;
var inst_36421 = inst_36428;
var state_36460__$1 = (function (){var statearr_36481 = state_36460;
(statearr_36481[(14)] = inst_36433);

(statearr_36481[(7)] = inst_36420__$1);

(statearr_36481[(8)] = inst_36421);

return statearr_36481;
})();
var statearr_36482_36505 = state_36460__$1;
(statearr_36482_36505[(2)] = null);

(statearr_36482_36505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__33851__auto___36488,out))
;
return ((function (switch__32834__auto__,c__33851__auto___36488,out){
return (function() {
var cljs$core$async$state_machine__32835__auto__ = null;
var cljs$core$async$state_machine__32835__auto____0 = (function (){
var statearr_36483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36483[(0)] = cljs$core$async$state_machine__32835__auto__);

(statearr_36483[(1)] = (1));

return statearr_36483;
});
var cljs$core$async$state_machine__32835__auto____1 = (function (state_36460){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_36460);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e36484){if((e36484 instanceof Object)){
var ex__32838__auto__ = e36484;
var statearr_36485_36517 = state_36460;
(statearr_36485_36517[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36519 = state_36460;
state_36460 = G__36519;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
cljs$core$async$state_machine__32835__auto__ = function(state_36460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32835__auto____1.call(this,state_36460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32835__auto____0;
cljs$core$async$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32835__auto____1;
return cljs$core$async$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___36488,out))
})();
var state__33853__auto__ = (function (){var statearr_36486 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_36486[(6)] = c__33851__auto___36488);

return statearr_36486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___36488,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map

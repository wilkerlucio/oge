// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('om.next.cache');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {om.next.cache.Object}
*/
om.next.cache.Cache = (function (arr,index,size){
this.arr = arr;
this.index = index;
this.size = size;
});
om.next.cache.Cache.prototype.add = (function (id,x){
var self__ = this;
var this$ = this;
var x_SINGLEQUOTE__16062 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$client_DASH_time,(new Date()));
if((self__.size <= self__.arr.length)){
var id_SINGLEQUOTE__16064 = self__.arr.shift();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.index,((function (id_SINGLEQUOTE__16064,x_SINGLEQUOTE__16062,this$){
return (function (p1__16056_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16056_SHARP_,id_SINGLEQUOTE__16064),id,x_SINGLEQUOTE__16062);
});})(id_SINGLEQUOTE__16064,x_SINGLEQUOTE__16062,this$))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.index,cljs.core.assoc,id,x_SINGLEQUOTE__16062);
}

return self__.arr.push(id);
});

om.next.cache.Cache.prototype.get = (function (id){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.index),id);
});

om.next.cache.Cache.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$arr,cljs.core.cst$sym$index,cljs.core.cst$sym$size], null);
});

om.next.cache.Cache.cljs$lang$type = true;

om.next.cache.Cache.cljs$lang$ctorStr = "om.next.cache/Cache";

om.next.cache.Cache.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"om.next.cache/Cache");
});

om.next.cache.__GT_Cache = (function om$next$cache$__GT_Cache(arr,index,size){
return (new om.next.cache.Cache(arr,index,size));
});

om.next.cache.cache = (function om$next$cache$cache(size){
return (new om.next.cache.Cache([],cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),size));
});

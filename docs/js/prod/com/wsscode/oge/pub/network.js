// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.pub.network');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.network');
com.wsscode.oge.pub.network.request_transform = (function com$wsscode$oge$pub$network$request_transform(req){
var token = null;
var G__33708 = req;
if(cljs.core.truth_(token)){
return cljs.core.assoc_in(G__33708,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"Authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
} else {
return G__33708;
}
});
com.wsscode.oge.pub.network.network_error_callback = (function com$wsscode$oge$pub$network$network_error_callback(var_args){
var args__11698__auto__ = [];
var len__11691__auto___33717 = arguments.length;
var i__11692__auto___33719 = (0);
while(true){
if((i__11692__auto___33719 < len__11691__auto___33717)){
args__11698__auto__.push((arguments[i__11692__auto___33719]));

var G__33721 = (i__11692__auto___33719 + (1));
i__11692__auto___33719 = G__33721;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return com.wsscode.oge.pub.network.network_error_callback.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

com.wsscode.oge.pub.network.network_error_callback.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("Network error",args);
});

com.wsscode.oge.pub.network.network_error_callback.cljs$lang$maxFixedArity = (0);

com.wsscode.oge.pub.network.network_error_callback.cljs$lang$applyTo = (function (seq33713){
return com.wsscode.oge.pub.network.network_error_callback.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33713));
});


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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.oge.pub.network.DynamicNetwork = (function (url_atom,network,__meta,__extmap,__hash){
this.url_atom = url_atom;
this.network = network;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k33725,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__33734 = k33725;
var G__33734__$1 = (((G__33734 instanceof cljs.core.Keyword))?G__33734.fqn:null);
switch (G__33734__$1) {
case "url-atom":
return self__.url_atom;

break;
case "network":
return self__.network;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33725,else__11103__auto__);

}
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#com.wsscode.oge.pub.network.DynamicNetwork{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url_DASH_atom,self__.url_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$network,self__.network],null))], null),self__.__extmap));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33724){
var self__ = this;
var G__33724__$1 = this;
return (new cljs.core.RecordIter((0),G__33724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$url_DASH_atom,cljs.core.cst$kw$network], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,self__.__extmap,self__.__hash));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__33740 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-2006818027 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__33740(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33726,other33727){
var self__ = this;
var this33726__$1 = this;
return (!((other33727 == null))) && ((this33726__$1.constructor === other33727.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33726__$1.url_atom,other33727.url_atom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33726__$1.network,other33727.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33726__$1.__extmap,other33727.__extmap));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;


com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.url_atom))){
return fulcro.client.network.send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.network,cljs.core.cst$kw$url,cljs.core.deref(self__.url_atom)),edn,ok,error);
} else {
var G__33746 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No URL set",cljs.core.PersistentArrayMap.EMPTY);
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__33746) : error.call(null,G__33746));
}
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url_DASH_atom,null,cljs.core.cst$kw$network,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;


com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return fulcro.client.network.serialize_requests_QMARK_(self__.network);
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__33724){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__33755 = cljs.core.keyword_identical_QMARK_;
var expr__33756 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__33758 = cljs.core.cst$kw$url_DASH_atom;
var G__33759 = expr__33756;
return (pred__33755.cljs$core$IFn$_invoke$arity$2 ? pred__33755.cljs$core$IFn$_invoke$arity$2(G__33758,G__33759) : pred__33755.call(null,G__33758,G__33759));
})())){
return (new com.wsscode.oge.pub.network.DynamicNetwork(G__33724,self__.network,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33760 = cljs.core.cst$kw$network;
var G__33761 = expr__33756;
return (pred__33755.cljs$core$IFn$_invoke$arity$2 ? pred__33755.cljs$core$IFn$_invoke$arity$2(G__33760,G__33761) : pred__33755.call(null,G__33760,G__33761));
})())){
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,G__33724,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__33724),null));
}
}
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$url_DASH_atom,self__.url_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$network,self__.network],null))], null),self__.__extmap));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__33724){
var self__ = this;
var this__11099__auto____$1 = this;
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,G__33724,self__.__extmap,self__.__hash));
});


com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

com.wsscode.oge.pub.network.DynamicNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$url_DASH_atom,cljs.core.cst$sym$network], null);
});

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$type = true;

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.wsscode.oge.pub.network/DynamicNetwork");
});

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"com.wsscode.oge.pub.network/DynamicNetwork");
});

com.wsscode.oge.pub.network.__GT_DynamicNetwork = (function com$wsscode$oge$pub$network$__GT_DynamicNetwork(url_atom,network){
return (new com.wsscode.oge.pub.network.DynamicNetwork(url_atom,network,null,null,null));
});

com.wsscode.oge.pub.network.map__GT_DynamicNetwork = (function com$wsscode$oge$pub$network$map__GT_DynamicNetwork(G__33730){
return (new com.wsscode.oge.pub.network.DynamicNetwork(cljs.core.cst$kw$url_DASH_atom.cljs$core$IFn$_invoke$arity$1(G__33730),cljs.core.cst$kw$network.cljs$core$IFn$_invoke$arity$1(G__33730),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33730,cljs.core.cst$kw$url_DASH_atom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$network], 0))),null));
});

com.wsscode.oge.pub.network.make_network = (function com$wsscode$oge$pub$network$make_network(var_args){
var G__33820 = arguments.length;
switch (G__33820) {
case 1:
return com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$1 = (function (url_atom){
return com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$2(url_atom,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.oge.pub.network.make_network.cljs$core$IFn$_invoke$arity$2 = (function (url_atom,_){
var base_network = fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request_DASH_transform,com.wsscode.oge.pub.network.request_transform,cljs.core.cst$kw$global_DASH_error_DASH_callback,com.wsscode.oge.pub.network.network_error_callback], 0));
return com.wsscode.oge.pub.network.map__GT_DynamicNetwork(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url_DASH_atom,url_atom,cljs.core.cst$kw$network,base_network], null));
});

com.wsscode.oge.pub.network.make_network.cljs$lang$maxFixedArity = 2;


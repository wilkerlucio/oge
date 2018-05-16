goog.provide('com.wsscode.oge.pub.network');
goog.require('cljs.core');
goog.require('fulcro.client.network');
com.wsscode.oge.pub.network.request_transform = (function com$wsscode$oge$pub$network$request_transform(req){
var token = null;
var G__47862 = req;
if(cljs.core.truth_(token)){
return cljs.core.assoc_in(G__47862,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''));
} else {
return G__47862;
}
});
com.wsscode.oge.pub.network.network_error_callback = (function com$wsscode$oge$pub$network$network_error_callback(var_args){
var args__4502__auto__ = [];
var len__4499__auto___47868 = arguments.length;
var i__4500__auto___47870 = (0);
while(true){
if((i__4500__auto___47870 < len__4499__auto___47868)){
args__4502__auto__.push((arguments[i__4500__auto___47870]));

var G__47871 = (i__4500__auto___47870 + (1));
i__4500__auto___47870 = G__47871;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return com.wsscode.oge.pub.network.network_error_callback.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

com.wsscode.oge.pub.network.network_error_callback.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("Network error",args);
});

com.wsscode.oge.pub.network.network_error_callback.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.oge.pub.network.network_error_callback.cljs$lang$applyTo = (function (seq47863){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47863));
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
com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k47877,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__47889 = k47877;
var G__47889__$1 = (((G__47889 instanceof cljs.core.Keyword))?G__47889.fqn:null);
switch (G__47889__$1) {
case "url-atom":
return self__.url_atom;

break;
case "network":
return self__.network;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47877,else__12537__auto__);

}
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#com.wsscode.oge.pub.network.DynamicNetwork{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),self__.url_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null))], null),self__.__extmap));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47876){
var self__ = this;
var G__47876__$1 = this;
return (new cljs.core.RecordIter((0),G__47876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),new cljs.core.Keyword(null,"network","network",2050004697)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__47911 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-2006818027 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__47911(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47878,other47879){
var self__ = this;
var this47878__$1 = this;
return ((!((other47879 == null))) && ((this47878__$1.constructor === other47879.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47878__$1.url_atom,other47879.url_atom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47878__$1.network,other47879.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47878__$1.__extmap,other47879.__extmap)));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.url_atom))){
return fulcro.client.network.send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.network,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.deref(self__.url_atom)),edn,ok,error);
} else {
var G__47917 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No URL set",cljs.core.PersistentArrayMap.EMPTY);
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__47917) : error.call(null,G__47917));
}
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.oge.pub.network.DynamicNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return fulcro.client.network.serialize_requests_QMARK_(self__.network);
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__47876){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__47924 = cljs.core.keyword_identical_QMARK_;
var expr__47925 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__47927 = new cljs.core.Keyword(null,"url-atom","url-atom",-241562933);
var G__47928 = expr__47925;
return (pred__47924.cljs$core$IFn$_invoke$arity$2 ? pred__47924.cljs$core$IFn$_invoke$arity$2(G__47927,G__47928) : pred__47924.call(null,G__47927,G__47928));
})())){
return (new com.wsscode.oge.pub.network.DynamicNetwork(G__47876,self__.network,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47929 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__47930 = expr__47925;
return (pred__47924.cljs$core$IFn$_invoke$arity$2 ? pred__47924.cljs$core$IFn$_invoke$arity$2(G__47929,G__47930) : pred__47924.call(null,G__47929,G__47930));
})())){
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,G__47876,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__47876),null));
}
}
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),self__.url_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null))], null),self__.__extmap));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__47876){
var self__ = this;
var this__12533__auto____$1 = this;
return (new com.wsscode.oge.pub.network.DynamicNetwork(self__.url_atom,self__.network,G__47876,self__.__extmap,self__.__hash));
});

com.wsscode.oge.pub.network.DynamicNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

com.wsscode.oge.pub.network.DynamicNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url-atom","url-atom",1398968594,null),new cljs.core.Symbol(null,"network","network",-604431072,null)], null);
});

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$type = true;

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"com.wsscode.oge.pub.network/DynamicNetwork",null,(1),null));
});

com.wsscode.oge.pub.network.DynamicNetwork.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"com.wsscode.oge.pub.network/DynamicNetwork");
});

/**
 * Positional factory function for com.wsscode.oge.pub.network/DynamicNetwork.
 */
com.wsscode.oge.pub.network.__GT_DynamicNetwork = (function com$wsscode$oge$pub$network$__GT_DynamicNetwork(url_atom,network){
return (new com.wsscode.oge.pub.network.DynamicNetwork(url_atom,network,null,null,null));
});

/**
 * Factory function for com.wsscode.oge.pub.network/DynamicNetwork, taking a map of keywords to field values.
 */
com.wsscode.oge.pub.network.map__GT_DynamicNetwork = (function com$wsscode$oge$pub$network$map__GT_DynamicNetwork(G__47880){
return (new com.wsscode.oge.pub.network.DynamicNetwork(new cljs.core.Keyword(null,"url-atom","url-atom",-241562933).cljs$core$IFn$_invoke$arity$1(G__47880),new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__47880),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47880,new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"network","network",2050004697)], 0))),null));
});

com.wsscode.oge.pub.network.make_network = (function com$wsscode$oge$pub$network$make_network(var_args){
var G__47950 = arguments.length;
switch (G__47950) {
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
var base_network = fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-transform","request-transform",170337297),com.wsscode.oge.pub.network.request_transform,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),com.wsscode.oge.pub.network.network_error_callback], 0));
return com.wsscode.oge.pub.network.map__GT_DynamicNetwork(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url-atom","url-atom",-241562933),url_atom,new cljs.core.Keyword(null,"network","network",2050004697),base_network], null));
});

com.wsscode.oge.pub.network.make_network.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=com.wsscode.oge.pub.network.js.map

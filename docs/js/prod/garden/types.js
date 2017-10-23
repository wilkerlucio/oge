// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k31483,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__31488 = k31483;
var G__31488__$1 = (((G__31488 instanceof cljs.core.Keyword))?G__31488.fqn:null);
switch (G__31488__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31483,else__11103__auto__);

}
});


garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#garden.types.CSSUnit{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unit,self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$magnitude,self__.magnitude],null))], null),self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31482){
var self__ = this;
var G__31482__$1 = this;
return (new cljs.core.RecordIter((0),G__31482__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unit,cljs.core.cst$kw$magnitude], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__31493 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__31493(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31484,other31485){
var self__ = this;
var this31484__$1 = this;
return (!((other31485 == null))) && ((this31484__$1.constructor === other31485.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31484__$1.unit,other31485.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31484__$1.magnitude,other31485.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31484__$1.__extmap,other31485.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$unit,null,cljs.core.cst$kw$magnitude,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__31482){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__31499 = cljs.core.keyword_identical_QMARK_;
var expr__31500 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__31502 = cljs.core.cst$kw$unit;
var G__31503 = expr__31500;
return (pred__31499.cljs$core$IFn$_invoke$arity$2 ? pred__31499.cljs$core$IFn$_invoke$arity$2(G__31502,G__31503) : pred__31499.call(null,G__31502,G__31503));
})())){
return (new garden.types.CSSUnit(G__31482,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31506 = cljs.core.cst$kw$magnitude;
var G__31507 = expr__31500;
return (pred__31499.cljs$core$IFn$_invoke$arity$2 ? pred__31499.cljs$core$IFn$_invoke$arity$2(G__31506,G__31507) : pred__31499.call(null,G__31506,G__31507));
})())){
return (new garden.types.CSSUnit(self__.unit,G__31482,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__31482),null));
}
}
});


garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unit,self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$magnitude,self__.magnitude],null))], null),self__.__extmap));
});


garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__31482){
var self__ = this;
var this__11099__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__31482,self__.__extmap,self__.__hash));
});


garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unit,cljs.core.cst$sym$magnitude], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__31486){
return (new garden.types.CSSUnit(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(G__31486),cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$1(G__31486),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31486,cljs.core.cst$kw$unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$magnitude], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k31551,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__31561 = k31551;
var G__31561__$1 = (((G__31561 instanceof cljs.core.Keyword))?G__31561.fqn:null);
switch (G__31561__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31551,else__11103__auto__);

}
});


garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#garden.types.CSSFunction{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$function,self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31550){
var self__ = this;
var G__31550__$1 = this;
return (new cljs.core.RecordIter((0),G__31550__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$function,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__31572 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__31572(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31552,other31553){
var self__ = this;
var this31552__$1 = this;
return (!((other31553 == null))) && ((this31552__$1.constructor === other31553.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31552__$1.function,other31553.function)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31552__$1.args,other31553.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31552__$1.__extmap,other31553.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$function,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__31550){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__31577 = cljs.core.keyword_identical_QMARK_;
var expr__31578 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__31580 = cljs.core.cst$kw$function;
var G__31581 = expr__31578;
return (pred__31577.cljs$core$IFn$_invoke$arity$2 ? pred__31577.cljs$core$IFn$_invoke$arity$2(G__31580,G__31581) : pred__31577.call(null,G__31580,G__31581));
})())){
return (new garden.types.CSSFunction(G__31550,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31582 = cljs.core.cst$kw$args;
var G__31583 = expr__31578;
return (pred__31577.cljs$core$IFn$_invoke$arity$2 ? pred__31577.cljs$core$IFn$_invoke$arity$2(G__31582,G__31583) : pred__31577.call(null,G__31582,G__31583));
})())){
return (new garden.types.CSSFunction(self__.function$,G__31550,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__31550),null));
}
}
});


garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$function,self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});


garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__31550){
var self__ = this;
var this__11099__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__31550,self__.__extmap,self__.__hash));
});


garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$function,cljs.core.cst$sym$args], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__31557){
return (new garden.types.CSSFunction(cljs.core.cst$kw$function.cljs$core$IFn$_invoke$arity$1(G__31557),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__31557),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31557,cljs.core.cst$kw$function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k31648,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__31654 = k31648;
var G__31654__$1 = (((G__31654 instanceof cljs.core.Keyword))?G__31654.fqn:null);
switch (G__31654__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31648,else__11103__auto__);

}
});


garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#garden.types.CSSAtRule{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$identifier,self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31647){
var self__ = this;
var G__31647__$1 = this;
return (new cljs.core.RecordIter((0),G__31647__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$identifier,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});


garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__31667 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__31667(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31649,other31650){
var self__ = this;
var this31649__$1 = this;
return (!((other31650 == null))) && ((this31649__$1.constructor === other31650.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31649__$1.identifier,other31650.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31649__$1.value,other31650.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31649__$1.__extmap,other31650.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$identifier,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__31647){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__31671 = cljs.core.keyword_identical_QMARK_;
var expr__31672 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__31674 = cljs.core.cst$kw$identifier;
var G__31675 = expr__31672;
return (pred__31671.cljs$core$IFn$_invoke$arity$2 ? pred__31671.cljs$core$IFn$_invoke$arity$2(G__31674,G__31675) : pred__31671.call(null,G__31674,G__31675));
})())){
return (new garden.types.CSSAtRule(G__31647,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31676 = cljs.core.cst$kw$value;
var G__31677 = expr__31672;
return (pred__31671.cljs$core$IFn$_invoke$arity$2 ? pred__31671.cljs$core$IFn$_invoke$arity$2(G__31676,G__31677) : pred__31671.call(null,G__31676,G__31677));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__31647,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__31647),null));
}
}
});


garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$identifier,self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});


garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__31647){
var self__ = this;
var this__11099__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__31647,self__.__extmap,self__.__hash));
});


garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$identifier,cljs.core.cst$sym$value], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__31651){
return (new garden.types.CSSAtRule(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(G__31651),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__31651),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31651,cljs.core.cst$kw$identifier,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0))),null));
});


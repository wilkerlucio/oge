goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k30122,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__30128 = k30122;
var G__30128__$1 = (((G__30128 instanceof cljs.core.Keyword))?G__30128.fqn:null);
switch (G__30128__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30122,else__12537__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#garden.types.CSSUnit{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30121){
var self__ = this;
var G__30121__$1 = this;
return (new cljs.core.RecordIter((0),G__30121__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__30137 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__30137(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30123,other30124){
var self__ = this;
var this30123__$1 = this;
return ((!((other30124 == null))) && ((this30123__$1.constructor === other30124.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30123__$1.unit,other30124.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30123__$1.magnitude,other30124.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30123__$1.__extmap,other30124.__extmap)));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__30121){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__30141 = cljs.core.keyword_identical_QMARK_;
var expr__30142 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__30144 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__30145 = expr__30142;
return (pred__30141.cljs$core$IFn$_invoke$arity$2 ? pred__30141.cljs$core$IFn$_invoke$arity$2(G__30144,G__30145) : pred__30141.call(null,G__30144,G__30145));
})())){
return (new garden.types.CSSUnit(G__30121,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30148 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__30149 = expr__30142;
return (pred__30141.cljs$core$IFn$_invoke$arity$2 ? pred__30141.cljs$core$IFn$_invoke$arity$2(G__30148,G__30149) : pred__30141.call(null,G__30148,G__30149));
})())){
return (new garden.types.CSSUnit(self__.unit,G__30121,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__30121),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__30121){
var self__ = this;
var this__12533__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__30121,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"garden.types/CSSUnit");
});

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__30125){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__30125),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__30125),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30125,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0))),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k30160,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__30166 = k30160;
var G__30166__$1 = (((G__30166 instanceof cljs.core.Keyword))?G__30166.fqn:null);
switch (G__30166__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30160,else__12537__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#garden.types.CSSFunction{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30159){
var self__ = this;
var G__30159__$1 = this;
return (new cljs.core.RecordIter((0),G__30159__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__30173 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__30173(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30161,other30162){
var self__ = this;
var this30161__$1 = this;
return ((!((other30162 == null))) && ((this30161__$1.constructor === other30162.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30161__$1.f,other30162.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30161__$1.args,other30162.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30161__$1.__extmap,other30162.__extmap)));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__30159){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__30178 = cljs.core.keyword_identical_QMARK_;
var expr__30179 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__30182 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__30183 = expr__30179;
return (pred__30178.cljs$core$IFn$_invoke$arity$2 ? pred__30178.cljs$core$IFn$_invoke$arity$2(G__30182,G__30183) : pred__30178.call(null,G__30182,G__30183));
})())){
return (new garden.types.CSSFunction(G__30159,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30185 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__30186 = expr__30179;
return (pred__30178.cljs$core$IFn$_invoke$arity$2 ? pred__30178.cljs$core$IFn$_invoke$arity$2(G__30185,G__30186) : pred__30178.call(null,G__30185,G__30186));
})())){
return (new garden.types.CSSFunction(self__.f,G__30159,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__30159),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__30159){
var self__ = this;
var this__12533__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__30159,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"garden.types/CSSFunction");
});

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__30165){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__30165),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__30165),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30165,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0))),null));
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
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k30197,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__30202 = k30197;
var G__30202__$1 = (((G__30202 instanceof cljs.core.Keyword))?G__30202.fqn:null);
switch (G__30202__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30197,else__12537__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#garden.types.CSSAtRule{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30196){
var self__ = this;
var G__30196__$1 = this;
return (new cljs.core.RecordIter((0),G__30196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__30210 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__30210(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30198,other30199){
var self__ = this;
var this30198__$1 = this;
return ((!((other30199 == null))) && ((this30198__$1.constructor === other30199.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30198__$1.identifier,other30199.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30198__$1.value,other30199.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30198__$1.__extmap,other30199.__extmap)));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__30196){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__30214 = cljs.core.keyword_identical_QMARK_;
var expr__30215 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__30217 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__30218 = expr__30215;
return (pred__30214.cljs$core$IFn$_invoke$arity$2 ? pred__30214.cljs$core$IFn$_invoke$arity$2(G__30217,G__30218) : pred__30214.call(null,G__30217,G__30218));
})())){
return (new garden.types.CSSAtRule(G__30196,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30220 = new cljs.core.Keyword(null,"value","value",305978217);
var G__30221 = expr__30215;
return (pred__30214.cljs$core$IFn$_invoke$arity$2 ? pred__30214.cljs$core$IFn$_invoke$arity$2(G__30220,G__30221) : pred__30214.call(null,G__30220,G__30221));
})())){
return (new garden.types.CSSAtRule(self__.identifier,G__30196,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__30196),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__30196){
var self__ = this;
var this__12533__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__30196,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"garden.types/CSSAtRule");
});

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__30201){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__30201),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__30201),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30201,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0))),null));
});


//# sourceMappingURL=garden.types.js.map

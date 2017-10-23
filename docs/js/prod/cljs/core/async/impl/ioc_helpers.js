// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),cljs.core.cst$kw$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583 = (function (f,meta25584){
this.f = f;
this.meta25584 = meta25584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25585,meta25584__$1){
var self__ = this;
var _25585__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583(self__.f,meta25584__$1));
});


cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25585){
var self__ = this;
var _25585__$1 = this;
return self__.meta25584;
});


cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta25584], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers25583";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers25583");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers25583 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers25583(f__$1,meta25584){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583(f__$1,meta25584));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers25583(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__25596 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__25596.cljs$core$IFn$_invoke$arity$1 ? fexpr__25596.cljs$core$IFn$_invoke$arity$1(state) : fexpr__25596.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e25600){if((e25600 instanceof Object)){
var ex = e25600;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e25600;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5457__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_25606_25611 = state;
(statearr_25606_25611[(2)] = x);

(statearr_25606_25611[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25610_25612 = state;
(statearr_25610_25612[(2)] = cljs.core.deref(cb));

(statearr_25610_25612[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5457__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_25617_25620 = state;
(statearr_25617_25620[(2)] = ret_val);

(statearr_25617_25620[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25618_25622 = state;
(statearr_25618_25622[(2)] = cljs.core.deref(cb));

(statearr_25618_25622[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k25631,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__25640 = k25631;
var G__25640__$1 = (((G__25640 instanceof cljs.core.Keyword))?G__25640.fqn:null);
switch (G__25640__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25631,else__11103__auto__);

}
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25630){
var self__ = this;
var G__25630__$1 = this;
return (new cljs.core.RecordIter((0),G__25630__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_block,cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__25672 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__25672(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25632,other25633){
var self__ = this;
var this25632__$1 = this;
return (!((other25633 == null))) && ((this25632__$1.constructor === other25633.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.catch_block,other25633.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.catch_exception,other25633.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.finally_block,other25633.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.continue_block,other25633.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.prev,other25633.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25632__$1.__extmap,other25633.__extmap));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$finally_DASH_block,null,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.cst$kw$catch_DASH_exception,null,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$continue_DASH_block,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__25630){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__25697 = cljs.core.keyword_identical_QMARK_;
var expr__25698 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__25700 = cljs.core.cst$kw$catch_DASH_block;
var G__25701 = expr__25698;
return (pred__25697.cljs$core$IFn$_invoke$arity$2 ? pred__25697.cljs$core$IFn$_invoke$arity$2(G__25700,G__25701) : pred__25697.call(null,G__25700,G__25701));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__25630,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25702 = cljs.core.cst$kw$catch_DASH_exception;
var G__25703 = expr__25698;
return (pred__25697.cljs$core$IFn$_invoke$arity$2 ? pred__25697.cljs$core$IFn$_invoke$arity$2(G__25702,G__25703) : pred__25697.call(null,G__25702,G__25703));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__25630,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25704 = cljs.core.cst$kw$finally_DASH_block;
var G__25705 = expr__25698;
return (pred__25697.cljs$core$IFn$_invoke$arity$2 ? pred__25697.cljs$core$IFn$_invoke$arity$2(G__25704,G__25705) : pred__25697.call(null,G__25704,G__25705));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__25630,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25706 = cljs.core.cst$kw$continue_DASH_block;
var G__25707 = expr__25698;
return (pred__25697.cljs$core$IFn$_invoke$arity$2 ? pred__25697.cljs$core$IFn$_invoke$arity$2(G__25706,G__25707) : pred__25697.call(null,G__25706,G__25707));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__25630,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25708 = cljs.core.cst$kw$prev;
var G__25709 = expr__25698;
return (pred__25697.cljs$core$IFn$_invoke$arity$2 ? pred__25697.cljs$core$IFn$_invoke$arity$2(G__25708,G__25709) : pred__25697.call(null,G__25708,G__25709));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__25630,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__25630),null));
}
}
}
}
}
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__25630){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__25630,self__.__extmap,self__.__hash));
});


cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$catch_DASH_block,cljs.core.with_meta(cljs.core.cst$sym$catch_DASH_exception,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Class], null)),cljs.core.cst$sym$finally_DASH_block,cljs.core.cst$sym$continue_DASH_block,cljs.core.cst$sym$prev], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__25634){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__25634),cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__25634),cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__25634),cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__25634),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(G__25634),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25634,cljs.core.cst$kw$catch_DASH_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], 0))),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_25752 = state;
(statearr_25752[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_25752;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__10400__auto__ = exception;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__10400__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = exception;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = catch_block;
if(cljs.core.truth_(and__10400__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
var statearr_25757 = state;
(statearr_25757[(1)] = catch_block);

(statearr_25757[(2)] = exception);

(statearr_25757[(5)] = null);

(statearr_25757[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,null], 0)));

return statearr_25757;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = exception;
if(cljs.core.truth_(and__10400__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__10400__auto__;
}
})())){
var statearr_25758_25767 = state;
(statearr_25758_25767[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__25769 = state;
state = G__25769;
continue;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = exception;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = cljs.core.not(catch_block);
if(and__10400__auto____$1){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
var statearr_25760 = state;
(statearr_25760[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25760[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_25760;
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(exception);
if(and__10400__auto__){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__10400__auto__;
}
})())){
var statearr_25764 = state;
(statearr_25764[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25764[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_25764;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_25765 = state;
(statearr_25765[(1)] = cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25765[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_25765;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

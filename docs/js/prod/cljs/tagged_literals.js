// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tagged_literals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
cljs.tagged_literals.read_queue = (function cljs$tagged_literals$read_queue(form){
if(cljs.core.vector_QMARK_(form)){
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}

return cljs.core._conj(cljs.core._conj((function (){var x__11366__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.cst$sym$cljs$core$PersistentQueue$EMPTY),cljs.core.cst$sym$cljs$core_SLASH_into);
});
cljs.tagged_literals.read_uuid = (function cljs$tagged_literals$read_uuid(form){
if(typeof form === 'string'){
} else {
throw (new Error("UUID literal expects a string as its representation."));
}

try{return cljs.core.uuid(form);
}catch (e17598){var e = e17598;
throw (new Error(e.message));
}});
cljs.tagged_literals.read_inst = (function cljs$tagged_literals$read_inst(form){
if(typeof form === 'string'){
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}

try{return cljs.reader.read_date(form);
}catch (e17599){var e = e17599;
throw (new Error(e.message));
}});
cljs.tagged_literals.valid_js_literal_key_QMARK_ = (function cljs$tagged_literals$valid_js_literal_key_QMARK_(k){
return (typeof k === 'string') || (((k instanceof cljs.core.Keyword)) && ((cljs.core.namespace(k) == null)));
});

/**
* @constructor
*/
cljs.tagged_literals.JSValue = (function (val){
this.val = val;
});

cljs.tagged_literals.JSValue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
});

cljs.tagged_literals.JSValue.cljs$lang$type = true;

cljs.tagged_literals.JSValue.cljs$lang$ctorStr = "cljs.tagged-literals/JSValue";

cljs.tagged_literals.JSValue.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.tagged-literals/JSValue");
});

cljs.tagged_literals.__GT_JSValue = (function cljs$tagged_literals$__GT_JSValue(val){
return (new cljs.tagged_literals.JSValue(val));
});

cljs.tagged_literals.read_js = (function cljs$tagged_literals$read_js(form){
if((cljs.core.vector_QMARK_(form)) || (cljs.core.map_QMARK_(form))){
} else {
throw (new Error("JavaScript literal must use map or vector notation"));
}

if((!(cljs.core.map_QMARK_(form))) || (cljs.core.every_QMARK_(cljs.tagged_literals.valid_js_literal_key_QMARK_,cljs.core.keys(form)))){
} else {
throw (new Error("JavaScript literal keys must be strings or unqualified keywords"));
}

return (new cljs.tagged_literals.JSValue(form));
});
cljs.tagged_literals._STAR_cljs_data_readers_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$queue,cljs.tagged_literals.read_queue,cljs.core.cst$sym$uuid,cljs.tagged_literals.read_uuid,cljs.core.cst$sym$inst,cljs.tagged_literals.read_inst,cljs.core.cst$sym$js,cljs.tagged_literals.read_js], null)], 0));

// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.pathom.merge');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.next');
com.wsscode.pathom.merge.merge_queries_STAR_ = (function com$wsscode$pathom$merge$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__45484){
var map__45486 = p__45484;
var map__45486__$1 = ((((!((map__45486 == null)))?((((map__45486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45486):map__45486);
var item_b = map__45486__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45486__$1,cljs.core.cst$kw$key);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45486__$1,cljs.core.cst$kw$type);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45486__$1,cljs.core.cst$kw$params);
var temp__5457__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__45486,map__45486__$1,item_b,key,type,params){
return (function (p1__45483_SHARP_,p2__45482_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(p2__45482_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45483_SHARP_,p2__45482_SHARP_], null);
} else {
return null;
}
});})(map__45486,map__45486__$1,item_b,key,type,params))
,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__45489 = temp__5457__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45489,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45489,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$join,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$prop,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,idx], null),com.wsscode.pathom.merge.merge_queries_STAR_,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,cljs.core.cst$kw$children,cljs.core.conj,item_b);
}
}),qa,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(qb));
});
com.wsscode.pathom.merge.merge_queries = (function com$wsscode$pathom$merge$merge_queries(qa,qb){
var G__45501 = com.wsscode.pathom.merge.merge_queries_STAR_(om.next.query__GT_ast(qa),om.next.query__GT_ast(qb));
if((G__45501 == null)){
return null;
} else {
return om.next.ast__GT_query(G__45501);
}
});

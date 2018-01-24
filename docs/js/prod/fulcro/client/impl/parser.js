// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.impl.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('fulcro.util');
fulcro.client.impl.parser.mark_meta = (function fulcro$client$impl$parser$mark_meta(source,target){
var G__19376 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19376,cljs.core.cst$kw$meta,cljs.core.meta(source));
} else {
return G__19376;
}
});
fulcro.client.impl.parser.symbol__GT_ast = (function fulcro$client$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
fulcro.client.impl.parser.keyword__GT_ast = (function fulcro$client$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
fulcro.client.impl.parser.union_entry__GT_ast = (function fulcro$client$impl$parser$union_entry__GT_ast(p__19400){
var vec__19401 = p__19400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19401,(1),null);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$union_DASH_entry,cljs.core.cst$kw$union_DASH_key,k,cljs.core.cst$kw$query,v,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
fulcro.client.impl.parser.union__GT_ast = (function fulcro$client$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$union,cljs.core.cst$kw$query,m,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.union_entry__GT_ast),m)], null);
});
fulcro.client.impl.parser.call__GT_ast = (function fulcro$client$impl$parser$call__GT_ast(p__19416){
var vec__19418 = p__19416;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19418,(1),null);
var call = vec__19418;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : fulcro.client.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__10805__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : fulcro.client.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__10805__auto__ = args;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__19431 = fulcro.client.impl.parser.mark_meta(call,ast);
if((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19431,cljs.core.cst$kw$type,cljs.core.cst$kw$call);
} else {
return G__19431;
}
}
});
/**
 * Convert a query to its AST representation.
 */
fulcro.client.impl.parser.query__GT_ast = (function fulcro$client$impl$parser$query__GT_ast(query){
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.impl.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
fulcro.client.impl.parser.join__GT_ast = (function fulcro$client$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__19458 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19458,(1),null);
var ast = (fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : fulcro.client.impl.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast)))?cljs.core.cst$kw$call:cljs.core.cst$kw$join);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,fulcro.client.impl.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$query,v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,v)))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_join], null))})()
)))], 0));
});
fulcro.client.impl.parser.ident__GT_ast = (function fulcro$client$impl$parser$ident__GT_ast(p__19468){
var vec__19469 = p__19468;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19469,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19469,(1),null);
var ref = vec__19469;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
fulcro.client.impl.parser.expr__GT_ast = (function fulcro$client$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return fulcro.client.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return fulcro.client.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return fulcro.client.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return fulcro.client.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return fulcro.client.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
fulcro.client.impl.parser.wrap_expr = (function fulcro$client$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__19498 = expr;
if((expr instanceof cljs.core.Keyword)){
var x__11759__auto__ = G__19498;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
} else {
return G__19498;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null));
} else {
return expr;
}
});
fulcro.client.impl.parser.parameterize = (function fulcro$client$impl$parser$parameterize(expr,params){
if(!(cljs.core.empty_QMARK_(params))){
var x__11759__auto__ = expr;
return cljs.core._conj((function (){var x__11759__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto____$1);
})(),x__11759__auto__);
} else {
var x__11759__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__11759__auto__);
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
fulcro.client.impl.parser.ast__GT_expr = (function fulcro$client$impl$parser$ast__GT_expr(var_args){
var G__19511 = arguments.length;
switch (G__19511) {
case 1:
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__19513,unparse_QMARK_){
var map__19514 = p__19513;
var map__19514__$1 = ((((!((map__19514 == null)))?((((map__19514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19514):map__19514);
var ast = map__19514__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$meta);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19514__$1,cljs.core.cst$kw$component);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,type)){
var G__19517 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__19514,map__19514__$1,ast,ast_meta,type,component){
return (function (p1__19503_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__19503_SHARP_,unparse_QMARK_);
});})(map__19514,map__19514__$1,ast,ast_meta,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19517,cljs.core.assoc,cljs.core.cst$kw$component,component);
} else {
return G__19517;
}
} else {
var map__19518 = ast;
var map__19518__$1 = ((((!((map__19518 == null)))?((((map__19518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19518):map__19518);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$query);
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$query_DASH_root);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19518__$1,cljs.core.cst$kw$params);
return fulcro.client.impl.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__10793__auto__ = params;
if(cljs.core.truth_(and__10793__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
} else {
return and__10793__auto__;
}
})())?(function (){var expr = fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params),unparse_QMARK_);
return fulcro.client.impl.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type))?fulcro.client.impl.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__10805__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type);
if(or__10805__auto__){
return or__10805__auto__;
} else {
var and__10793__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
if(and__10793__auto__){
return cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__10793__auto__;
}
}
})())){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query)) && (!(typeof query === 'number')) && ((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type)))){
var map__19530 = ast;
var map__19530__$1 = ((((!((map__19530 == null)))?((((map__19530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19530):map__19530);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19530__$1,cljs.core.cst$kw$children);
var query_meta = cljs.core.meta(query);
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__19532 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19532,cljs.core.assoc,cljs.core.cst$kw$component,component);
} else {
return G__19532;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component){
return (function (p__19537){
var map__19538 = p__19537;
var map__19538__$1 = ((((!((map__19538 == null)))?((((map__19538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19538):map__19538);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,cljs.core.cst$kw$union_DASH_key);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,cljs.core.cst$kw$children);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19538__$1,cljs.core.cst$kw$component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__19541 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__19538,map__19538__$1,union_key,children__$1,component__$1,map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component){
return (function (p1__19506_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__19506_SHARP_,unparse_QMARK_);
});})(map__19538,map__19538__$1,union_key,children__$1,component__$1,map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19541,cljs.core.assoc,cljs.core.cst$kw$component,component__$1);
} else {
return G__19541;
}
})()], null);
});})(map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__19545 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component){
return (function (p1__19509_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__19509_SHARP_,unparse_QMARK_);
});})(map__19530,map__19530__$1,children,query_meta,key__$1,map__19518,map__19518__$1,key,query,query_root,params,map__19514,map__19514__$1,ast,ast_meta,type,component))
),children);
if(!((component == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19545,cljs.core.assoc,cljs.core.cst$kw$component,component);
} else {
return G__19545;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
});

fulcro.client.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
fulcro.client.impl.parser.path_meta = (function fulcro$client$impl$parser$path_meta(var_args){
var G__19602 = arguments.length;
switch (G__19602) {
case 3:
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query,null);
});

fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
if((query == null)){
var G__19636 = data;
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19636,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__19636;
}
} else {
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,v){
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),query,union_expr);
})),data),cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
if(cljs.core.vector_QMARK_(query)){
var joins = cljs.core.seq(query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first(joins);
if(cljs.core.not((function (){var or__10805__auto__ = fulcro.util.join_QMARK_(join);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return (fulcro.util.ident_QMARK_(join)) || ((cljs.core.seq_QMARK_(join)) && (fulcro.util.ident_QMARK_(cljs.core.first(join))));
}
})())){
var G__19745 = cljs.core.next(joins);
var G__19746 = ret;
joins = G__19745;
ret = G__19746;
continue;
} else {
var join__$1 = (function (){var G__19715 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__19715);
} else {
return G__19715;
}
})();
var join__$2 = (function (){var G__19716 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__19716],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__19716;
}
})();
var vec__19712 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19712,(1),null);
var union_entry = ((fulcro.util.union_QMARK_(join__$2))?sel:union_expr);
var sel__$1 = ((fulcro.util.recursion_QMARK_(sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__19719 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__19719);
} else {
return G__19719;
}
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,key__$1);
var G__19768 = cljs.core.next(joins);
var G__19769 = (function (){var G__19721 = ret;
if((cljs.core.map_QMARK_(ret)) && (cljs.core.contains_QMARK_(ret,key__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19721,key__$1,fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1),sel__$1,union_entry));
} else {
return G__19721;
}
})();
joins = G__19768;
ret = G__19769;
continue;
}
} else {
var G__19724 = ret;
if(((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$)))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19724,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__19724;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(data)){
var dispatch_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,fulcro.client.impl.parser.expr__GT_ast);
var branches = cljs.core.vals(query);
var props = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dispatch_key,cljs.core.keys(data));
var query__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dispatch_key,branches,props){
return (function (ret,q){
var query_props = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(dispatch_key),q);
var props__$1 = cljs.core.set(props);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(props__$1),cljs.core.set(query_props))){
return cljs.core.reduced(q);
} else {
if(cljs.core.truth_(clojure.set.subset_QMARK_(props__$1,query_props))){
return q;
} else {
return ret;

}
}
});})(dispatch_key,branches,props))
,null,branches);
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

fulcro.client.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;

fulcro.client.impl.parser.rethrow_QMARK_ = (function fulcro$client$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fulcro$client$primitives_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to fulcro.client.primitives/parser
 * for top level documentation.
 */
fulcro.client.impl.parser.parser = (function fulcro$client$impl$parser$parser(p__19811){
var map__19812 = p__19811;
var map__19812__$1 = ((((!((map__19812 == null)))?((((map__19812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19812):map__19812);
var config = map__19812__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19812__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19812__$1,cljs.core.cst$kw$mutate);
return ((function (map__19812,map__19812__$1,config,read,mutate){
return (function() {
var fulcro$client$impl$parser$parser_$_self = null;
var fulcro$client$impl$parser$parser_$_self__2 = (function (env,query){
return fulcro$client$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var fulcro$client$impl$parser$parser_$_self__3 = (function (env,query,target){
var map__19821 = (function (){var G__19822 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,fulcro$client$impl$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$fulcro$client$primitives_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19822,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__19822;
}
})();
var map__19821__$1 = ((((!((map__19821 == null)))?((((map__19821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19821):map__19821);
var env__$1 = map__19821__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19821__$1,cljs.core.cst$kw$path);
var step = ((function (map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate){
return (function fulcro$client$impl$parser$parser_$_self_$_step(ret,expr){
var map__19859 = fulcro.client.impl.parser.expr__GT_ast(expr);
var map__19859__$1 = ((((!((map__19859 == null)))?((((map__19859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19859):map__19859);
var ast = map__19859__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19859__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var G__19862 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ast,ast,cljs.core.cst$kw$query,query_SINGLEQUOTE_], null)], 0));
var G__19862__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19862,cljs.core.cst$kw$query):G__19862);
var G__19862__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19862__$1,cljs.core.cst$kw$query,query):G__19862__$1);
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19862__$2,cljs.core.cst$kw$query_DASH_root,key);
} else {
return G__19862__$2;
}
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (function (){var G__19864 = type;
var G__19864__$1 = (((G__19864 instanceof cljs.core.Keyword))?G__19864.fqn:null);
switch (G__19864__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19864__$1)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__19865 = ret;
var G__19865__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19865,expr):G__19865);
var G__19865__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19865__$1,fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)):G__19865__$1);
if(cljs.core.seq(cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(G__19865__$2,cljs.core.update,cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh,((function (G__19865,G__19865__$1,G__19865__$2,ast_SINGLEQUOTE_,map__19859,map__19859__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate){
return (function (p1__19803_SHARP_,p2__19804_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__10805__auto__ = p1__19803_SHARP_;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),p2__19804_SHARP_);
});})(G__19865,G__19865__$1,G__19865__$2,ast_SINGLEQUOTE_,map__19859,map__19859__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate))
,cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(res));
} else {
return G__19865__$2;
}
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mut_ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_(mut_ret,(function (){var fexpr__19870 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res);
return (fexpr__19870.cljs$core$IFn$_invoke$arity$0 ? fexpr__19870.cljs$core$IFn$_invoke$arity$0() : fexpr__19870.call(null));
})());
}catch (e19867){var e_19941 = e19867;
if(cljs.core.truth_(fulcro.client.impl.parser.rethrow_QMARK_(e_19941))){
throw e_19941;
} else {
cljs.core.reset_BANG_(error,e_19941);
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key)," mutation :value must be nil or a map with structure {:refresh [...]}"].join('')),"\n","(or (nil? value) (map? value))"].join('')));
}
} else {
}

var G__19872 = ret;
var G__19872__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872,(function (){var G__19878 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__19878);
} else {
return G__19878;
}
})(),value):G__19872);
var G__19872__$2 = (cljs.core.truth_(cljs.core.deref(mut_ret))?cljs.core.assoc_in(G__19872__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$result], null),cljs.core.deref(mut_ret)):G__19872__$1);
var G__19872__$3 = ((cljs.core.seq(cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(res)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(G__19872__$2,cljs.core.update,cljs.core.cst$kw$fulcro$client$primitives_SLASH_refresh,((function (G__19872,G__19872__$1,G__19872__$2,value,error,mut_ret,map__19859,map__19859__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate){
return (function (p1__19808_SHARP_,p2__19809_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__10805__auto__ = p1__19808_SHARP_;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),p2__19809_SHARP_);
});})(G__19872,G__19872__$1,G__19872__$2,value,error,mut_ret,map__19859,map__19859__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate))
,cljs.core.cst$kw$refresh.cljs$core$IFn$_invoke$arity$1(res)):G__19872__$2);
if(cljs.core.truth_(cljs.core.deref(error))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$3,key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fulcro$client$primitives_SLASH_error,cljs.core.deref(error)], null));
} else {
return G__19872__$3;
}
}
}
});})(map__19821,map__19821__$1,env__$1,path,map__19812,map__19812__$1,config,read,mutate))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
});
fulcro$client$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return fulcro$client$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return fulcro$client$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$client$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = fulcro$client$impl$parser$parser_$_self__2;
fulcro$client$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = fulcro$client$impl$parser$parser_$_self__3;
return fulcro$client$impl$parser$parser_$_self;
})()
;})(map__19812,map__19812__$1,config,read,mutate))
});
fulcro.client.impl.parser.dispatch = (function fulcro$client$impl$parser$dispatch(_,k,___$1){
return k;
});

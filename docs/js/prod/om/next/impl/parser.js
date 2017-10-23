// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('om.util');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__16225){
var vec__16226 = p__16225;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(1),null);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$union_DASH_entry,cljs.core.cst$kw$union_DASH_key,k,cljs.core.cst$kw$query,v,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$union,cljs.core.cst$kw$query,m,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__16243){
var vec__16244 = p__16243;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(1),null);
var call = vec__16244;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__10412__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__10412__auto__ = args;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__16252 = ast;
if((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16252,cljs.core.cst$kw$type,cljs.core.cst$kw$call);
} else {
return G__16252;
}
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__16293 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$join,cljs.core.cst$kw$query,v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,v)))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_join], null))})()
)))], 0));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__16320){
var vec__16321 = p__16320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16321,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16321,(1),null);
var ref = vec__16321;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__16337 = expr;
if((expr instanceof cljs.core.Keyword)){
var x__11366__auto__ = G__16337;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
} else {
return G__16337;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var G__16369 = arguments.length;
switch (G__16369) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__16373,unparse_QMARK_){
var map__16374 = p__16373;
var map__16374__$1 = ((((!((map__16374 == null)))?((((map__16374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16374):map__16374);
var ast = map__16374__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16374__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16374__$1,cljs.core.cst$kw$component);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,type)){
var G__16383 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__16374,map__16374__$1,ast,type,component){
return (function (p1__16359_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__16359_SHARP_,unparse_QMARK_);
});})(map__16374,map__16374__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.with_meta(G__16383,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__16383;
}
} else {
var map__16384 = ast;
var map__16384__$1 = ((((!((map__16384 == null)))?((((map__16384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16384):map__16384);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16384__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16384__$1,cljs.core.cst$kw$query);
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16384__$1,cljs.core.cst$kw$query_DASH_root);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16384__$1,cljs.core.cst$kw$params);
return om.next.impl.parser.wrap_expr(query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_(params))){
var x__11366__auto__ = expr;
return cljs.core._conj((function (){var x__11366__auto____$1 = params;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto____$1);
})(),x__11366__auto__);
} else {
var x__11366__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type))?(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__16400 = ast;
var map__16400__$1 = ((((!((map__16400 == null)))?((((map__16400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16400):map__16400);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16400__$1,cljs.core.cst$kw$children);
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__16419 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(component)){
return cljs.core.with_meta(G__16419,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__16419;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component){
return (function (p__16433){
var map__16434 = p__16433;
var map__16434__$1 = ((((!((map__16434 == null)))?((((map__16434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16434):map__16434);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,cljs.core.cst$kw$union_DASH_key);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,cljs.core.cst$kw$children);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,cljs.core.cst$kw$component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__16437 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__16434,map__16434__$1,union_key,children__$1,component__$1,map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component){
return (function (p1__16366_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__16366_SHARP_,unparse_QMARK_);
});})(map__16434,map__16434__$1,union_key,children__$1,component__$1,map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.with_meta(G__16437,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component__$1], null));
} else {
return G__16437;
}
})()], null);
});})(map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,(function (){var G__16438 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component){
return (function (p1__16367_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__16367_SHARP_,unparse_QMARK_);
});})(map__16400,map__16400__$1,children,map__16384,map__16384__$1,key,query,query_root,params,map__16374,map__16374__$1,ast,type,component))
),children);
if(!((component == null))){
return cljs.core.with_meta(G__16438,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null));
} else {
return G__16438;
}
})()]);
}
})():cljs.core.PersistentArrayMap.createAsIfByAssoc([key,query])):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var G__16506 = arguments.length;
switch (G__16506) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
if((query == null)){
var G__16520 = data;
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__16520,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__16520;
}
} else {
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,v){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),query,union_expr);
})),data),cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
if(cljs.core.vector_QMARK_(query)){
var joins = cljs.core.seq(query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first(joins);
if(cljs.core.not((function (){var or__10412__auto__ = om.util.join_QMARK_(join);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (om.util.ident_QMARK_(join)) || ((cljs.core.seq_QMARK_(join)) && (om.util.ident_QMARK_(cljs.core.first(join))));
}
})())){
var G__16571 = cljs.core.next(joins);
var G__16572 = ret;
joins = G__16571;
ret = G__16572;
continue;
} else {
var join__$1 = (function (){var G__16542 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__16542);
} else {
return G__16542;
}
})();
var join__$2 = (function (){var G__16547 = join__$1;
if(om.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__16547],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__16547;
}
})();
var vec__16539 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16539,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16539,(1),null);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_(sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__16549 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__16549);
} else {
return G__16549;
}
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,key__$1);
var G__16577 = cljs.core.next(joins);
var G__16578 = (function (){var G__16550 = ret;
if((cljs.core.map_QMARK_(ret)) && (cljs.core.contains_QMARK_(ret,key__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16550,key__$1,om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1),sel__$1,union_entry));
} else {
return G__16550;
}
})();
joins = G__16577;
ret = G__16578;
continue;
}
} else {
var G__16553 = ret;
if(((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$)))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__16553,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__16553;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(data)){
var dispatch_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast);
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
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;

om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__16592){
var map__16593 = p__16592;
var map__16593__$1 = ((((!((map__16593 == null)))?((((map__16593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16593):map__16593);
var config = map__16593__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16593__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16593__$1,cljs.core.cst$kw$mutate);
return ((function (map__16593,map__16593__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = (function (){var or__10412__auto__ = cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__16599 = (function (){var G__16600 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16600,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__16600;
}
})();
var map__16599__$1 = ((((!((map__16599 == null)))?((((map__16599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16599):map__16599);
var env__$1 = map__16599__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16599__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__16599,map__16599__$1,env__$1,path,map__16593,map__16593__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__16640 = om.next.impl.parser.expr__GT_ast(expr);
var map__16640__$1 = ((((!((map__16640 == null)))?((((map__16640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16640):map__16640);
var ast = map__16640__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16640__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var G__16642 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ast,ast,cljs.core.cst$kw$query,query_SINGLEQUOTE_], null)], 0));
var G__16642__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16642,cljs.core.cst$kw$query):G__16642);
var G__16642__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16642__$1,cljs.core.cst$kw$query,query):G__16642__$1);
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16642__$2,cljs.core.cst$kw$query_DASH_root,key);
} else {
return G__16642__$2;
}
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (function (){var G__16644 = type;
var G__16644__$1 = (((G__16644 instanceof cljs.core.Keyword))?G__16644.fqn:null);
switch (G__16644__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16644__$1)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__16645 = ret;
var G__16645__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16645,expr):G__16645);
if(cljs.core.map_QMARK_(ast_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__16645__$1,om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_));
} else {
return G__16645__$1;
}
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mut_ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_(mut_ret,(function (){var fexpr__16654 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res);
return (fexpr__16654.cljs$core$IFn$_invoke$arity$0 ? fexpr__16654.cljs$core$IFn$_invoke$arity$0() : fexpr__16654.call(null));
})());
}catch (e16650){var e_16668 = e16650;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_16668))){
throw e_16668;
} else {
cljs.core.reset_BANG_(error,e_16668);
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key)," mutation :value must be nil or a map with structure {:keys [...]}"].join('')),"\n","(or (nil? value) (map? value))"].join('')));
}
} else {
}

var G__16658 = ret;
var G__16658__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16658,(function (){var G__16659 = key;
if(om.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__16659);
} else {
return G__16659;
}
})(),value):G__16658);
var G__16658__$2 = (cljs.core.truth_(cljs.core.deref(mut_ret))?cljs.core.assoc_in(G__16658__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$result], null),cljs.core.deref(mut_ret)):G__16658__$1);
if(cljs.core.truth_(cljs.core.deref(error))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16658__$2,key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$om$next_SLASH_error,cljs.core.deref(error)], null));
} else {
return G__16658__$2;
}
}
}
});})(elide_paths_QMARK_,map__16599,map__16599__$1,env__$1,path,map__16593,map__16593__$1,config,read,mutate))
;
var G__16660 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(((target == null)) && (cljs.core.not(elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3(G__16660,path,query);
} else {
return G__16660;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__16593,map__16593__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

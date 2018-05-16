goog.provide('fulcro.client.impl.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('fulcro.util');
fulcro.client.impl.parser.mark_meta = (function fulcro$client$impl$parser$mark_meta(source,target){
var G__36742 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36742,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__36742;
}
});
fulcro.client.impl.parser.symbol__GT_ast = (function fulcro$client$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
fulcro.client.impl.parser.keyword__GT_ast = (function fulcro$client$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
fulcro.client.impl.parser.union_entry__GT_ast = (function fulcro$client$impl$parser$union_entry__GT_ast(p__36746){
var vec__36747 = p__36746;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36747,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
fulcro.client.impl.parser.union__GT_ast = (function fulcro$client$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.union_entry__GT_ast),m)], null);
});
fulcro.client.impl.parser.call__GT_ast = (function fulcro$client$impl$parser$call__GT_ast(p__36751){
var vec__36752 = p__36751;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36752,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36752,(1),null);
var call = vec__36752;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : fulcro.client.impl.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : fulcro.client.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__3922__auto__ = args;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__36756 = fulcro.client.impl.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36756,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__36756;
}
}
});
/**
 * Convert a query to its AST representation.
 */
fulcro.client.impl.parser.query__GT_ast = (function fulcro$client$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.impl.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
fulcro.client.impl.parser.join__GT_ast = (function fulcro$client$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__36767 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36767,(1),null);
var ast = (fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : fulcro.client.impl.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,fulcro.client.impl.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(fulcro.client.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
fulcro.client.impl.parser.ident__GT_ast = (function fulcro$client$impl$parser$ident__GT_ast(p__36784){
var vec__36785 = p__36784;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36785,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36785,(1),null);
var ref = vec__36785;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
fulcro.client.impl.parser.wrap_expr = (function fulcro$client$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__36792 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__36792,null,(1),null));
} else {
return G__36792;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
fulcro.client.impl.parser.parameterize = (function fulcro$client$impl$parser$parameterize(expr,params){
if(!(cljs.core.empty_QMARK_(params))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
fulcro.client.impl.parser.ast__GT_expr = (function fulcro$client$impl$parser$ast__GT_expr(var_args){
var G__36803 = arguments.length;
switch (G__36803) {
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

fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__36805,unparse_QMARK_){
var map__36806 = p__36805;
var map__36806__$1 = ((((!((map__36806 == null)))?(((((map__36806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36806):map__36806);
var ast = map__36806__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__36811 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__36806,map__36806__$1,ast,ast_meta,type,component){
return (function (p1__36799_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__36799_SHARP_,unparse_QMARK_);
});})(map__36806,map__36806__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36811,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__36811;
}
} else {
var map__36812 = ast;
var map__36812__$1 = ((((!((map__36812 == null)))?(((((map__36812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36812):map__36812);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,new cljs.core.Keyword(null,"params","params",710516235));
return fulcro.client.impl.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__3911__auto__ = params;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__3911__auto__;
}
})())?(function (){var expr = fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return fulcro.client.impl.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?fulcro.client.impl.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__3911__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__3911__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && (!(typeof query === 'number')) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__36814 = ast;
var map__36814__$1 = ((((!((map__36814 == null)))?(((((map__36814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36814):map__36814);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__36816 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36816,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__36816;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component){
return (function (p__36817){
var map__36818 = p__36817;
var map__36818__$1 = ((((!((map__36818 == null)))?(((((map__36818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36818):map__36818);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36818__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36818__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36818__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__36820 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__36818,map__36818__$1,union_key,children__$1,component__$1,map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component){
return (function (p1__36800_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__36800_SHARP_,unparse_QMARK_);
});})(map__36818,map__36818__$1,union_key,children__$1,component__$1,map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36820,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__36820;
}
})()], null);
});})(map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__36821 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component){
return (function (p1__36801_SHARP_){
return fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__36801_SHARP_,unparse_QMARK_);
});})(map__36814,map__36814__$1,children,query_meta,key__$1,map__36812,map__36812__$1,key,query,query_root,params,map__36806,map__36806__$1,ast,ast_meta,type,component))
),children);
if(!((component == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36821,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__36821;
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
var G__36844 = arguments.length;
switch (G__36844) {
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
var G__36846 = data;
if(((!((data == null)))?(((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IWithMeta$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36846,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__36846;
}
} else {
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,v){
return fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),query,union_expr);
})),data),cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
if(cljs.core.vector_QMARK_(query)){
var joins = cljs.core.seq(query);
var ret = data;
while(true){
if(!((joins == null))){
var join = cljs.core.first(joins);
if(cljs.core.not((function (){var or__3922__auto__ = fulcro.util.join_QMARK_(join);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((fulcro.util.ident_QMARK_(join)) || (((cljs.core.seq_QMARK_(join)) && (fulcro.util.ident_QMARK_(cljs.core.first(join))))));
}
})())){
var G__36864 = cljs.core.next(joins);
var G__36865 = ret;
joins = G__36864;
ret = G__36865;
continue;
} else {
var join__$1 = (function (){var G__36852 = join;
if(cljs.core.seq_QMARK_(join)){
return cljs.core.first(G__36852);
} else {
return G__36852;
}
})();
var join__$2 = (function (){var G__36853 = join__$1;
if(fulcro.util.ident_QMARK_(join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__36853],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__36853;
}
})();
var vec__36849 = fulcro.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36849,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36849,(1),null);
var union_entry = ((fulcro.util.union_QMARK_(join__$2))?sel:union_expr);
var sel__$1 = ((fulcro.util.recursion_QMARK_(sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__36854 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__36854);
} else {
return G__36854;
}
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,key__$1);
var G__36867 = cljs.core.next(joins);
var G__36868 = (function (){var G__36855 = ret;
if(((cljs.core.map_QMARK_(ret)) && (cljs.core.contains_QMARK_(ret,key__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36855,key__$1,fulcro.client.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1),sel__$1,union_entry));
} else {
return G__36855;
}
})();
joins = G__36867;
ret = G__36868;
continue;
}
} else {
var G__36856 = ret;
if(((!((ret == null)))?(((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IWithMeta$))))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__36856,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__36856;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(data)){
var dispatch_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),fulcro.client.impl.parser.expr__GT_ast);
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
return (((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("fulcro.client.primitives","abort","fulcro.client.primitives/abort",-2106449038),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x)))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to fulcro.client.primitives/parser
 * for top level documentation.
 */
fulcro.client.impl.parser.parser = (function fulcro$client$impl$parser$parser(p__36875){
var map__36876 = p__36875;
var map__36876__$1 = ((((!((map__36876 == null)))?(((((map__36876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36876):map__36876);
var config = map__36876__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36876__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__36876,map__36876__$1,config,read,mutate){
return (function() {
var fulcro$client$impl$parser$parser_$_self = null;
var fulcro$client$impl$parser$parser_$_self__2 = (function (env,query){
return fulcro$client$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var fulcro$client$impl$parser$parser_$_self__3 = (function (env,query,target){
var target__$1 = (function (){var or__3922__auto__ = target;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(env);
}
})();
var map__36878 = (function (){var G__36879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),fulcro$client$impl$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),target__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("fulcro.client.primitives","root","fulcro.client.primitives/root",-1042228161)], 0));
if(!(cljs.core.contains_QMARK_(env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36879,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__36879;
}
})();
var map__36878__$1 = ((((!((map__36878 == null)))?(((((map__36878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36878):map__36878);
var env__$1 = map__36878__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36878__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate){
return (function fulcro$client$impl$parser$parser_$_self_$_step(ret,expr){
var map__36893 = fulcro.client.impl.parser.expr__GT_ast(expr);
var map__36893__$1 = ((((!((map__36893 == null)))?(((((map__36893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36893):map__36893);
var ast = map__36893__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__36895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null)], 0));
var G__36895__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36895,new cljs.core.Keyword(null,"query","query",-1288509510)):G__36895);
var G__36895__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36895__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__36895__$1);
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36895__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key);
} else {
return G__36895__$2;
}
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__36896 = type;
var G__36896__$1 = (((G__36896 instanceof cljs.core.Keyword))?G__36896.fqn:null);
switch (G__36896__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36896__$1)].join('')));

}
})();
if(!((target__$1 == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target__$1);
var G__36897 = ret;
var G__36897__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36897,expr):G__36897);
var G__36897__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36897__$1,fulcro.client.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)):G__36897__$1);
if(cljs.core.seq(new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(G__36897__$2,cljs.core.update,new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561),((function (G__36897,G__36897__$1,G__36897__$2,ast_SINGLEQUOTE_,map__36893,map__36893__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate){
return (function (p1__36871_SHARP_,p2__36872_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3922__auto__ = p1__36871_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),p2__36872_SHARP_);
});})(G__36897,G__36897__$1,G__36897__$2,ast_SINGLEQUOTE_,map__36893,map__36893__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate))
,new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(res));
} else {
return G__36897__$2;
}
} else {
if(!(((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"value","value",305978217)))))){
return ret;
} else {
var error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var mut_ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if(((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null))))){
try{cljs.core.reset_BANG_(mut_ret,(function (){var fexpr__36899 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res);
return (fexpr__36899.cljs$core$IFn$_invoke$arity$0 ? fexpr__36899.cljs$core$IFn$_invoke$arity$0() : fexpr__36899.call(null));
})());
}catch (e36898){var e_36912 = e36898;
if(cljs.core.truth_(fulcro.client.impl.parser.rethrow_QMARK_(e_36912))){
throw e_36912;
} else {
cljs.core.reset_BANG_(error,e_36912);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if((((value == null)) || (cljs.core.map_QMARK_(value)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dispatch_key)," mutation :value must be nil or a map with structure {:refresh [...]}"].join('')),"\n","(or (nil? value) (map? value))"].join('')));
}
} else {
}

var G__36900 = ret;
var G__36900__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36900,(function (){var G__36901 = key;
if(fulcro.util.unique_ident_QMARK_(key)){
return cljs.core.first(G__36901);
} else {
return G__36901;
}
})(),value):G__36900);
var G__36900__$2 = (cljs.core.truth_(cljs.core.deref(mut_ret))?cljs.core.assoc_in(G__36900__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.deref(mut_ret)):G__36900__$1);
var G__36900__$3 = ((cljs.core.seq(new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(res)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(G__36900__$2,cljs.core.update,new cljs.core.Keyword("fulcro.client.primitives","refresh","fulcro.client.primitives/refresh",481513561),((function (G__36900,G__36900__$1,G__36900__$2,value,error,mut_ret,map__36893,map__36893__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate){
return (function (p1__36873_SHARP_,p2__36874_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__3922__auto__ = p1__36873_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),p2__36874_SHARP_);
});})(G__36900,G__36900__$1,G__36900__$2,value,error,mut_ret,map__36893,map__36893__$1,ast,query_SINGLEQUOTE_,key,dispatch_key,params,env__$2,type,call_QMARK_,res,target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate))
,new cljs.core.Keyword(null,"refresh","refresh",1947415525).cljs$core$IFn$_invoke$arity$1(res)):G__36900__$2);
if(cljs.core.truth_(cljs.core.deref(error))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36900__$3,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.client.primitives","error","fulcro.client.primitives/error",1510344092),cljs.core.deref(error)], null));
} else {
return G__36900__$3;
}
}
}
});})(target__$1,map__36878,map__36878__$1,env__$1,path,map__36876,map__36876__$1,config,read,mutate))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target__$1 == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
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
;})(map__36876,map__36876__$1,config,read,mutate))
});
fulcro.client.impl.parser.dispatch = (function fulcro$client$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=fulcro.client.impl.parser.js.map

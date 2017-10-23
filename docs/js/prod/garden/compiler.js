// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.color');
goog.require('garden.compression');
goog.require('garden.selectors');
goog.require('garden.units');
goog.require('garden.util');
goog.require('garden.types');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$pretty_DASH_print_QMARK_,true,cljs.core.cst$kw$preamble,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$output_DASH_to,null,cljs.core.cst$kw$vendors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$media_DASH_expressions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$nesting_DASH_behavior,cljs.core.cst$kw$default], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$merge,(function (expr,context){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,expr], 0));
}),cljs.core.cst$kw$default,(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__11737__auto___46189 = (function (){
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46191 = arguments.length;
var i__11692__auto___46192 = (0);
while(true){
if((i__11692__auto___46192 < len__11691__auto___46191)){
args__11698__auto__.push((arguments[i__11692__auto___46192]));

var G__46193 = (i__11692__auto___46192 + (1));
i__11692__auto___46192 = G__46193;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$garden$compiler_SLASH__STAR_selector_DASH_context_STAR_),(function (){var x__11366__auto__ = selector_context;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});

garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq46168){
var G__46169 = cljs.core.first(seq46168);
var seq46168__$1 = cljs.core.next(seq46168);
var G__46170 = cljs.core.first(seq46168__$1);
var seq46168__$2 = cljs.core.next(seq46168__$1);
var G__46171 = cljs.core.first(seq46168__$2);
var seq46168__$3 = cljs.core.next(seq46168__$2);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic(G__46169,G__46170,G__46171,seq46168__$3);
});

return null;
})()
;
garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__11737__auto___46213 = (function (){
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46214 = arguments.length;
var i__11692__auto___46215 = (0);
while(true){
if((i__11692__auto___46215 < len__11691__auto___46214)){
args__11698__auto__.push((arguments[i__11692__auto___46215]));

var G__46217 = (i__11692__auto___46215 + (1));
i__11692__auto___46215 = G__46217;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((3) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11699__auto__);
});

garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_binding),(function (){var x__11366__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$garden$compiler_SLASH__STAR_media_DASH_query_DASH_context_STAR_),(function (){var x__11366__auto__ = selector_context;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__11366__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})()], 0))));
});

garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq46201){
var G__46202 = cljs.core.first(seq46201);
var seq46201__$1 = cljs.core.next(seq46201);
var G__46203 = cljs.core.first(seq46201__$1);
var seq46201__$2 = cljs.core.next(seq46201__$1);
var G__46204 = cljs.core.first(seq46201__$2);
var seq46201__$3 = cljs.core.next(seq46201__$2);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic(G__46202,G__46203,G__46204,seq46201__$3);
});

return null;
})()
;
garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq(cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_(garden.compiler.auto_prefixed_properties(),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__10412__auto__ = (garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1 ? garden.util.rule_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : garden.util.rule_QMARK_.call(null,x));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = garden.util.at_import_QMARK_(x);
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
var or__10412__auto____$2 = garden.util.at_media_QMARK_(x);
if(cljs.core.truth_(or__10412__auto____$2)){
return or__10412__auto____$2;
} else {
return garden.util.at_keyframes_QMARK_(x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
var fexpr__46236 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove);
return (fexpr__46236.cljs$core$IFn$_invoke$arity$2 ? fexpr__46236.cljs$core$IFn$_invoke$arity$2(pred,coll) : fexpr__46236.call(null,pred,coll));
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (garden.compiler.expand[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (garden.compiler.expand["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core.seq_QMARK_(x)){
return (garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_seqs.cljs$core$IFn$_invoke$arity$1(x) : garden.compiler.expand_seqs.call(null,x));
} else {
var x__11366__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0));
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(d){
var prefix = (function (p1__46266_SHARP_,p2__46267_SHARP_){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__46266_SHARP_,"-",p2__46267_SHARP_], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (prefix){
return (function (m,p__46268){
var vec__46269 = p__46268;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(1),null);
if(cljs.core.truth_(garden.util.hash_map_QMARK_(v))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__46269,k,v,prefix){
return (function (m1,p__46277){
var vec__46278 = p__46277;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46278,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46278,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m1,prefix(k,k1),v1);
});})(vec__46269,k,v,prefix))
,m,(garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_declaration_1.cljs$core$IFn$_invoke$arity$1(v) : garden.compiler.expand_declaration_1.call(null,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,garden.util.to_str(k),v);
}
});})(prefix))
,cljs.core.PersistentArrayMap.EMPTY,d);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(d){
if(cljs.core.seq(d)){
return cljs.core.with_meta(garden.compiler.expand_declaration_1(d),cljs.core.meta(d));
} else {
return null;
}
});
/**
 * Matches a single "&" or "&" follow by one or more 
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__5459__auto__ = cljs.core.re_find(garden.compiler.parent_selector_re,garden.util.to_str(cljs.core.last(selector)));
if(cljs.core.truth_(temp__5459__auto__)){
var reference = temp__5459__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__5457__auto__ = garden.compiler.extract_reference(selector);
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
var parent = cljs.core.butlast(selector);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(parent),(function (){var x__11366__auto__ = garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(parent),reference], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
})());
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq(parent))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten,garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent,selector__$1], 0))):cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,selector__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__46346 = cljs.core.split_with(garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46346,(1),null);
var selector__$1 = garden.compiler.expand_selector(selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand(children);
var vec__46349 = garden.compiler.divide_vec(garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46349,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46349,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_46352 = garden.compiler._STAR_selector_context_STAR_;
garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq(selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs], 0)));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_46352;
}})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ys,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declarations], 0))));
});
if(typeof garden.compiler.expand_at_rule !== 'undefined'){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","expand-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (at_rule){
var x__11366__auto__ = at_rule;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
}));
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__46395){
var map__46396 = p__46395;
var map__46396__$1 = ((((!((map__46396 == null)))?((((map__46396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46396):map__46396);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46396__$1,cljs.core.cst$kw$value);
var map__46399 = value;
var map__46399__$1 = ((((!((map__46399 == null)))?((((map__46399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46399):map__46399);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,cljs.core.cst$kw$frames);
var x__11366__auto__ = (new garden.types.CSSAtRule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,garden.util.to_str(identifier),cljs.core.cst$kw$frames,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frames], 0))], null),null,null,null));
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__5457__auto__ = (function (){var G__46414 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$media_DASH_expressions,cljs.core.cst$kw$nesting_DASH_behavior], null));
return (garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.media_expression_behavior.cljs$core$IFn$_invoke$arity$1(G__46414) : garden.compiler.media_expression_behavior.call(null,G__46414));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(expression,garden.compiler._STAR_media_query_context_STAR_) : f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_));
} else {
return expression;
}
});
garden.compiler.expand_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__46417){
var map__46418 = p__46417;
var map__46418__$1 = ((((!((map__46418 == null)))?((((map__46418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46418):map__46418);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46418__$1,cljs.core.cst$kw$value);
var map__46420 = value;
var map__46420__$1 = ((((!((map__46420 == null)))?((((map__46420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46420):map__46420);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46420__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46420__$1,cljs.core.cst$kw$rules);
var media_queries__$1 = garden.compiler.expand_media_query_expression(media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_46425 = garden.compiler._STAR_media_query_context_STAR_;
garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(garden.compiler.expand,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.expand(rules)], 0)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_46425;
}})();
var vec__46421 = garden.compiler.divide_vec(garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46421,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46421,(1),null);
return cljs.core.cons((new garden.types.CSSAtRule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries__$1,cljs.core.cst$kw$rules,rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.expand,garden.compiler.expand(xs)));
});
goog.object.set(garden.compiler.IExpandable,"null",true);

var G__46452_46516 = garden.compiler.expand;
var G__46453_46517 = "null";
var G__46454_46518 = ((function (G__46452_46516,G__46453_46517){
return (function (this$){
return null;
});})(G__46452_46516,G__46453_46517))
;
goog.object.set(G__46452_46516,G__46453_46517,G__46454_46518);


cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});


cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.Cons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__11366__auto__ = this$__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});


cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__11366__auto__ = garden.compiler.expand_declaration(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});


cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});

goog.object.set(garden.compiler.IExpandable,"_",true);

var G__46488_46540 = garden.compiler.expand;
var G__46489_46541 = "_";
var G__46490_46542 = ((function (G__46488_46540,G__46489_46541){
return (function (this$){
var x__11366__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});})(G__46488_46540,G__46489_46541))
;
goog.object.set(G__46488_46540,G__46489_46541,G__46490_46542);


cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__11366__auto__ = garden.compiler.expand_declaration(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});


cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});


garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.expand_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.expand_at_rule.call(null,this$__$1));
});


cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});


cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule(this$__$1);
});


cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__11366__auto__ = garden.compiler.expand_declaration(this$__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});


garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__11366__auto__ = this$__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__11366__auto__);
});


cljs.core.List.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs(this$__$1);
});

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (garden.compiler.render_css[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (garden.compiler.render_css["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSSRenderer.render-css",this$);
}
}
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var G__46567 = arguments.length;
switch (G__46567) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var G__46574 = arguments.length;
switch (G__46574) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,xs);
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__11294__auto__ = (function garden$compiler$iter__46575(s__46576){
return (new cljs.core.LazySeq(null,(function (){
var s__46576__$1 = s__46576;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__46576__$1);
if(temp__5459__auto__){
var s__46576__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46576__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__46576__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__46578 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__46577 = (0);
while(true){
if((i__46577 < size__11293__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__46577);
cljs.core.chunk_append(b__46578,((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))));

var G__46600 = (i__46577 + (1));
i__46577 = G__46600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46578),garden$compiler$iter__46575(cljs.core.chunk_rest(s__46576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46578),null);
}
} else {
var x = cljs.core.first(s__46576__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2(f,x):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),garden$compiler$iter__46575(cljs.core.rest(s__46576__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.comma,ys);
});

garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(cljs.core.truth_(garden.util.at_keyframes_QMARK_(x))){
return garden.util.to_str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$identifier], null)));
} else {
return garden.compiler.render_css(x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__46636){
var vec__46637 = p__46636;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46637,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46637,(1),null);
if(cljs.core.set_QMARK_(val)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_(val))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,val):garden.compiler.render_value(val));
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop,garden.compiler.colon,val__$1,garden.compiler.semicolon], 0));
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46650_SHARP_){
return cljs.core.cons(p1__46650_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__46650_SHARP_) : f.call(null,p1__46650_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([declaration], 0));
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__46656){
var vec__46657 = p__46656;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46657,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46657,(1),null);
var iter__11294__auto__ = ((function (vec__46657,p,v){
return (function garden$compiler$prefixed_blocks_$_iter__46660(s__46661){
return (new cljs.core.LazySeq(null,((function (vec__46657,p,v){
return (function (){
var s__46661__$1 = s__46661;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__46661__$1);
if(temp__5459__auto__){
var s__46661__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46661__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__46661__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__46663 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__46662 = (0);
while(true){
if((i__46662 < size__11293__auto__)){
var vendor = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__46662);
cljs.core.chunk_append(b__46663,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null));

var G__46692 = (i__46662 + (1));
i__46662 = G__46692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46663),garden$compiler$prefixed_blocks_$_iter__46660(cljs.core.chunk_rest(s__46661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46663),null);
}
} else {
var vendor = cljs.core.first(s__46661__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix(vendor,cljs.core.name(p)),v], null),garden$compiler$prefixed_blocks_$_iter__46660(cljs.core.rest(s__46661__$2)));
}
} else {
return null;
}
break;
}
});})(vec__46657,p,v))
,null,null));
});})(vec__46657,p,v))
;
return iter__11294__auto__(vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks((function (block){
var vec__46701 = block;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46701,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46701,(1),null);
if(cljs.core.truth_(garden.compiler.auto_prefix_QMARK_(cljs.core.name(p)))){
return garden.compiler.prefixed_blocks(vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__10412__auto__ = cljs.core.cst$kw$vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return garden.compiler.vendors();
}
})();
var prefix_fn = (cljs.core.truth_(cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return (prefix_fn.cljs$core$IFn$_invoke$arity$2 ? prefix_fn.cljs$core$IFn$_invoke$arity$2(vendors,declaration) : prefix_fn.call(null,vendors,declaration));
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_property_and_value,garden.compiler.prefix_declaration(declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__46710){
var vec__46711 = p__46710;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(0),null);
var declarations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(1),null);
var rule = vec__46711;
if((cljs.core.seq(rule)) && (cljs.core.every_QMARK_(cljs.core.seq,rule))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector(selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__46714){
var vec__46716 = p__46714;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46716,(1),null);
var vec__46719 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(0),null);
var sv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = v;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.seq(sv);
} else {
return and__10400__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 *   
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_(expr)){
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" and ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__46725 = css_unit;
var map__46725__$1 = ((((!((map__46725 == null)))?((((map__46725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46725):map__46725);
var magnitude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46725__$1,cljs.core.cst$kw$magnitude);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46725__$1,cljs.core.cst$kw$unit);
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(unit))].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__46731 = css_function;
var map__46731__$1 = ((((!((map__46731 == null)))?((((map__46731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46731):map__46731);
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46731__$1,cljs.core.cst$kw$function);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46731__$1,cljs.core.cst$kw$args);
var args__$1 = ((cljs.core.sequential_QMARK_(args))?garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(args):garden.util.to_str(args));
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%s(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.to_str(function$),args__$1], 0));
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__5457__auto__ = cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5457__auto__)){
var a = temp__5457__auto__;
var map__46735 = garden.color.as_hsl(c);
var map__46735__$1 = ((((!((map__46735 == null)))?((((map__46735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46735):map__46735);
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46735__$1,cljs.core.cst$kw$hue);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46735__$1,cljs.core.cst$kw$saturation);
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46735__$1,cljs.core.cst$kw$lightness);
var vec__46736 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46736,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46736,(1),null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic("hsla(%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null))], 0));
} else {
return garden.color.as_hex(c);
}
});
if(typeof garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("garden.compiler","render-at-rule"),cljs.core.cst$kw$identifier,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return null;
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$import,(function (p__46754){
var map__46755 = p__46754;
var map__46755__$1 = ((((!((map__46755 == null)))?((((map__46755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46755):map__46755);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46755__$1,cljs.core.cst$kw$value);
var map__46757 = value;
var map__46757__$1 = ((((!((map__46757 == null)))?((((map__46757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46757):map__46757);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46757__$1,cljs.core.cst$kw$url);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46757__$1,cljs.core.cst$kw$media_DASH_queries);
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes(url):garden.compiler.render_css(url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr(media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.semicolon)].join('');
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyframes,(function (p__46763){
var map__46764 = p__46763;
var map__46764__$1 = ((((!((map__46764 == null)))?((((map__46764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46764):map__46764);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46764__$1,cljs.core.cst$kw$value);
var map__46766 = value;
var map__46766__$1 = ((((!((map__46766 == null)))?((((map__46766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46766):map__46766);
var identifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46766__$1,cljs.core.cst$kw$identifier);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46766__$1,cljs.core.cst$kw$frames);
if(cljs.core.seq(frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str(identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__46766,map__46766__$1,identifier,frames,map__46764,map__46764__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.vendor_prefix(vendor,"keyframes "))].join('');
});})(body,map__46766,map__46766__$1,identifier,frames,map__46764,map__46764__$1,value))
;
return garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (body,prefix,map__46766,map__46766__$1,identifier,frames,map__46764,map__46764__$1,value){
return (function (p1__46762_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46762_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__46766,map__46766__$1,identifier,frames,map__46764,map__46764__$1,value))
,cljs.core.cons("@keyframes ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(prefix,garden.compiler.vendors()))));
} else {
return null;
}
}));
garden.compiler.render_at_rule.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$media,(function (p__46774){
var map__46775 = p__46774;
var map__46775__$1 = ((((!((map__46775 == null)))?((((map__46775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46775):map__46775);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46775__$1,cljs.core.cst$kw$value);
var map__46777 = value;
var map__46777__$1 = ((((!((map__46777 == null)))?((((map__46777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46777):map__46777);
var media_queries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777__$1,cljs.core.cst$kw$media_DASH_queries);
var rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46777__$1,cljs.core.cst$kw$rules);
if(cljs.core.seq(rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr(media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str(garden.compiler.rule_join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(garden.compiler.CSSRenderer,"null",true);

var G__46785_46806 = garden.compiler.render_css;
var G__46786_46807 = "null";
var G__46787_46808 = ((function (G__46785_46806,G__46786_46807){
return (function (this$){
return "";
});})(G__46785_46806,G__46786_46807))
;
goog.object.set(G__46785_46806,G__46786_46807,G__46787_46808);


garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color(this$__$1);
});


cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});


cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit(this$__$1);
});


cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"number",true);

var G__46796_46820 = garden.compiler.render_css;
var G__46797_46821 = "number";
var G__46798_46822 = ((function (G__46796_46820,G__46797_46821){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__46796_46820,G__46797_46821))
;
goog.object.set(G__46796_46820,G__46797_46821,G__46798_46822);


garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function(this$__$1);
});


cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});


cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"_",true);

var G__46799_46823 = garden.compiler.render_css;
var G__46800_46824 = "_";
var G__46801_46825 = ((function (G__46799_46823,G__46800_46824){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__46799_46823,G__46800_46824))
;
goog.object.set(G__46799_46823,G__46800_46824,G__46801_46825);


cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});


cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});


garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return (garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1 ? garden.compiler.render_at_rule.cljs$core$IFn$_invoke$arity$1(this$__$1) : garden.compiler.render_at_rule.call(null,this$__$1));
});


cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});


cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule(this$__$1);
});


cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});


cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration(this$__$1);
});


cljs.core.List.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first(garden.compiler.render_css(garden.compiler.expand(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_46836 = garden.compiler._STAR_flags_STAR_;
garden.compiler._STAR_flags_STAR_ = flags;

try{return garden.compiler.rule_join(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.compiler.render_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet(rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_46836;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__46837,stylesheet){
var map__46838 = p__46837;
var map__46838__$1 = ((((!((map__46838 == null)))?((((map__46838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46838):map__46838);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,cljs.core.cst$kw$preamble);
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__46845,stylesheet){
var map__46846 = p__46845;
var map__46846__$1 = ((((!((map__46846 == null)))?((((map__46846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46846):map__46846);
var pretty_print_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46846__$1,cljs.core.cst$kw$pretty_DASH_print_QMARK_);
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46846__$1,cljs.core.cst$kw$pretty_DASH_print);
if(cljs.core.truth_((function (){var or__10412__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet(stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__46864,stylesheet){
var map__46865 = p__46864;
var map__46865__$1 = ((((!((map__46865 == null)))?((((map__46865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46865):map__46865);
var output_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46865__$1,cljs.core.cst$kw$output_DASH_to);
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46872 = arguments.length;
var i__11692__auto___46873 = (0);
while(true){
if((i__11692__auto___46873 < len__11691__auto___46872)){
args__11698__auto__.push((arguments[i__11692__auto___46873]));

var G__46874 = (i__11692__auto___46873 + (1));
i__11692__auto___46873 = G__46874;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__46869 = (cljs.core.truth_((function (){var and__10400__auto__ = garden.util.hash_map_QMARK_(flags);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.some(cljs.core.set(cljs.core.keys(flags)),cljs.core.keys(garden.compiler._STAR_flags_STAR_));
} else {
return and__10400__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler._STAR_flags_STAR_,flags], 0)),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons(flags,rules)], null));
var flags__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46869,(0),null);
var rules__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46869,(1),null);
return garden.compiler.do_output_to(flags__$1,garden.compiler.do_compression(flags__$1,garden.compiler.do_preamble(flags__$1,garden.compiler.do_compile(flags__$1,rules__$1))));
});

garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

garden.compiler.compile_css.cljs$lang$applyTo = (function (seq46867){
var G__46868 = cljs.core.first(seq46867);
var seq46867__$1 = cljs.core.next(seq46867);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic(G__46868,seq46867__$1);
});


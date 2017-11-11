// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('com.wsscode.oge.ui.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('om.next');
goog.require('om.next.protocols');
goog.require('om.util');
goog.require('cljs.spec.alpha');
com.wsscode.oge.ui.helpers.js_get_in = (function com$wsscode$oge$ui$helpers$js_get_in(x,path){
var G__46163 = x;
var G__46164 = cljs.core.clj__GT_js(path);
return goog.object.getValueByKeys(G__46163,G__46164);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_js_DASH_get_DASH_in,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$x,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$path,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.html_attr_merge = (function com$wsscode$oge$ui$helpers$html_attr_merge(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(typeof a === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
return b;

}
}
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_html_DASH_attr_DASH_merge,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$a,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.cst$kw$b,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.props__GT_html = (function com$wsscode$oge$ui$helpers$props__GT_html(var_args){
var args__11698__auto__ = [];
var len__11691__auto___46194 = arguments.length;
var i__11692__auto___46195 = (0);
while(true){
if((i__11692__auto___46195 < len__11691__auto___46194)){
args__11698__auto__.push((arguments[i__11692__auto___46195]));

var G__46196 = (i__11692__auto___46195 + (1));
i__11692__auto___46195 = G__46196;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__46185){
var vec__46186 = p__46185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46186,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46186,(1),null);
return cljs.core.simple_keyword_QMARK_(k);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,com.wsscode.oge.ui.helpers.html_attr_merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.cst$kw$react_DASH_key),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__46181_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46181_SHARP_,cljs.core.cst$kw$react_DASH_key);
}),props))));
});

com.wsscode.oge.ui.helpers.props__GT_html.cljs$lang$maxFixedArity = (1);

com.wsscode.oge.ui.helpers.props__GT_html.cljs$lang$applyTo = (function (seq46182){
var G__46183 = cljs.core.first(seq46182);
var seq46182__$1 = cljs.core.next(seq46182);
return com.wsscode.oge.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__46183,seq46182__$1);
});

com.wsscode.oge.ui.helpers.expand_classes = (function com$wsscode$oge$ui$helpers$expand_classes(css,classes){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(css,classes))], null);
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$com$wsscode$oge$ui$helpers_SLASH_expand_DASH_classes,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$css,cljs.core.cst$kw$classes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$kw$classes,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.map_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,null,null));
com.wsscode.oge.ui.helpers.strings = (function com$wsscode$oge$ui$helpers$strings(strings){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46208_SHARP_){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46208_SHARP_),"\""].join('');
}),strings));
});
com.wsscode.oge.ui.helpers._STAR_instrument_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return om.next._STAR_instrument_STAR_;},cljs.core.cst$sym$om$next_SLASH__STAR_instrument_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$_STAR_instrument_STAR_,"resources/public/js/prod/om/next.cljc",49,1,true,502,502,cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_instrument_STAR_)?om.next._STAR_instrument_STAR_.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers._STAR_reconciler_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return om.next._STAR_reconciler_STAR_;},cljs.core.cst$sym$om$next_SLASH__STAR_reconciler_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$_STAR_reconciler_STAR_,"resources/public/js/prod/om/next.cljc",49,1,true,499,499,cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_reconciler_STAR_)?om.next._STAR_reconciler_STAR_.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers._STAR_parent_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return om.next._STAR_parent_STAR_;},cljs.core.cst$sym$om$next_SLASH__STAR_parent_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$_STAR_parent_STAR_,"resources/public/js/prod/om/next.cljc",45,1,true,500,500,cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_parent_STAR_)?om.next._STAR_parent_STAR_.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers._STAR_shared_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return om.next._STAR_shared_STAR_;},cljs.core.cst$sym$om$next_SLASH__STAR_shared_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$_STAR_shared_STAR_,"resources/public/js/prod/om/next.cljc",45,1,true,501,501,cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_shared_STAR_)?om.next._STAR_shared_STAR_.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers._STAR_depth_STAR_ = cljs.core.deref(new cljs.core.Var(function(){return om.next._STAR_depth_STAR_;},cljs.core.cst$sym$om$next_SLASH__STAR_depth_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$_STAR_depth_STAR_,"resources/public/js/prod/om/next.cljc",44,1,true,503,503,cljs.core.List.EMPTY,null,(cljs.core.truth_(om.next._STAR_depth_STAR_)?om.next._STAR_depth_STAR_.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers.compute_react_key = cljs.core.deref(new cljs.core.Var(function(){return om.next.compute_react_key;},cljs.core.cst$sym$om$next_SLASH_compute_DASH_react_DASH_key,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$compute_DASH_react_DASH_key,"resources/public/js/prod/om/next.cljc",28,4,825,825,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cl,cljs.core.cst$sym$props], null)),null,(cljs.core.truth_(om.next.compute_react_key)?om.next.compute_react_key.cljs$lang$test:null)])));
com.wsscode.oge.ui.helpers.om_props = cljs.core.deref(new cljs.core.Var(function(){return om.next.om_props;},cljs.core.cst$sym$om$next_SLASH_om_DASH_props,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$om$next,cljs.core.cst$sym$om_DASH_props,"resources/public/js/prod/om/next.cljc",19,4,799,799,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null)),null,(cljs.core.truth_(om.next.om_props)?om.next.om_props.cljs$lang$test:null)])));
/**
 * Create a factory constructor from a component class created with
 * om.next/defui. Different from the default Om.next one, this will expand
 * the children, this enables the children to be present without requiring
 * each of then to specify a react key to avoid react key warnings.
 */
com.wsscode.oge.ui.helpers.container_factory = (function com$wsscode$oge$ui$helpers$container_factory(var_args){
var G__46242 = arguments.length;
switch (G__46242) {
case 1:
return com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__46247){
var map__46248 = p__46247;
var map__46248__$1 = ((((!((map__46248 == null)))?((((map__46248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46248):map__46248);
var opts = map__46248__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46248__$1,cljs.core.cst$kw$keyfn);
var instrument_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46248__$1,cljs.core.cst$kw$instrument_QMARK_,true);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__46248,map__46248__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var com$wsscode$oge$ui$helpers$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__10400__auto__ = com.wsscode.oge.ui.helpers._STAR_instrument_STAR_;
if(cljs.core.truth_(and__10400__auto__)){
return instrument_QMARK_;
} else {
return and__10400__auto__;
}
})())){
var G__46253 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,com.wsscode.oge.ui.helpers.container_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$instrument_QMARK_,false))], null);
return (com.wsscode.oge.ui.helpers._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.helpers._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__46253) : com.wsscode.oge.ui.helpers._STAR_instrument_STAR_.call(null,G__46253));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):(com.wsscode.oge.ui.helpers.compute_react_key.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.oge.ui.helpers.compute_react_key.cljs$core$IFn$_invoke$arity$2(class$,props) : com.wsscode.oge.ui.helpers.compute_react_key.call(null,class$,props)));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__46262 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46262)].join('');
} else {
return G__46262;
}
})();
var t = ((!((com.wsscode.oge.ui.helpers._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(com.wsscode.oge.ui.helpers._STAR_reconciler_STAR_):(0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,({"omcljs$value": (com.wsscode.oge.ui.helpers.om_props.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.oge.ui.helpers.om_props.cljs$core$IFn$_invoke$arity$2(props,t) : com.wsscode.oge.ui.helpers.om_props.call(null,props,t)), "omcljs$instrument": com.wsscode.oge.ui.helpers._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": com.wsscode.oge.ui.helpers._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": com.wsscode.oge.ui.helpers._STAR_reconciler_STAR_, "omcljs$depth": com.wsscode.oge.ui.helpers._STAR_depth_STAR_, "omcljs$parent": com.wsscode.oge.ui.helpers._STAR_parent_STAR_}),om.util.force_children(children));
}
};
var com$wsscode$oge$ui$helpers$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__46309__i = 0, G__46309__a = new Array(arguments.length -  1);
while (G__46309__i < G__46309__a.length) {G__46309__a[G__46309__i] = arguments[G__46309__i + 1]; ++G__46309__i;}
  children = new cljs.core.IndexedSeq(G__46309__a,0,null);
} 
return com$wsscode$oge$ui$helpers$self__delegate.call(this,props,children);};
com$wsscode$oge$ui$helpers$self.cljs$lang$maxFixedArity = 1;
com$wsscode$oge$ui$helpers$self.cljs$lang$applyTo = (function (arglist__46312){
var props = cljs.core.first(arglist__46312);
var children = cljs.core.rest(arglist__46312);
return com$wsscode$oge$ui$helpers$self__delegate(props,children);
});
com$wsscode$oge$ui$helpers$self.cljs$core$IFn$_invoke$arity$variadic = com$wsscode$oge$ui$helpers$self__delegate;
return com$wsscode$oge$ui$helpers$self;
})()
;
;})(map__46248,map__46248__$1,opts,validator,keyfn,instrument_QMARK_))
});

com.wsscode.oge.ui.helpers.container_factory.cljs$lang$maxFixedArity = 2;


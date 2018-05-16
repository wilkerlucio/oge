goog.provide('fulcro.client.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('fulcro.client.dom_common');


































































































































fulcro.client.dom.element_marker = (function (){var G__40726 = React.createElement("div",null);
var G__40727 = "$$typeof";
return goog.object.get(G__40726,G__40727);
})();
/**
 * Returns true if the given arg is a react element.
 */
fulcro.client.dom.element_QMARK_ = (function fulcro$client$dom$element_QMARK_(x){
return ((cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom.element_marker,goog.object.get(x,"$$typeof"))));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null))))))),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"js-object","js-object",1830199158)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__40729_SHARP_){
return ((cljs.core.map_QMARK_(p1__40729_SHARP_)) && (cljs.core.not(fulcro.client.dom.element_QMARK_(p1__40729_SHARP_))));
}),(function (p1__40730_SHARP_){
return ((cljs.core.object_QMARK_(p1__40730_SHARP_)) && (cljs.core.not(fulcro.client.dom.element_QMARK_(p1__40730_SHARP_))));
})], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null))))))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__40731_SHARP_){
return ((cljs.core.vector_QMARK_(p1__40731_SHARP_)) || (cljs.core.seq_QMARK_(p1__40731_SHARP_)) || (cljs.core.array_QMARK_(p1__40731_SHARP_)));
}),cljs.core.nil_QMARK_,fulcro.client.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40729#","p1__40729#",2023805208,null))))),new cljs.core.Keyword(null,"js-object","js-object",1830199158),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),cljs.core.list(new cljs.core.Symbol("cljs.core","object?","cljs.core/object?",2051371283,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null),new cljs.core.Symbol(null,"p1__40730#","p1__40730#",-694569871,null))))))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),new cljs.core.Symbol(null,"p1__40731#","p1__40731#",433544053,null)))),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Symbol("fulcro.client.dom","element?","fulcro.client.dom/element?",-878482509,null)))], null)));
/**
 * Equivalent to React.render
 */
fulcro.client.dom.render = (function fulcro$client$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString
 */
fulcro.client.dom.render_to_str = (function fulcro$client$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
fulcro.client.dom.node = (function fulcro$client$dom$node(var_args){
var G__40743 = arguments.length;
switch (G__40743) {
case 1:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__40744 = component.refs;
var G__40744__$1 = (((G__40744 == null))?null:goog.object.get(G__40744,name));
if((G__40744__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__40744__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__40757 = arguments.length;
switch (G__40757) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___40759 = arguments.length;
var i__4500__auto___40761 = (0);
while(true){
if((i__4500__auto___40761 < len__4499__auto___40759)){
args_arr__4514__auto__.push((arguments[i__4500__auto___40761]));

var G__40762 = (i__4500__auto___40761 + (1));
i__4500__auto___40761 = G__40762;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

/** @this {Function} */
fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq40754){
var G__40755 = cljs.core.first(seq40754);
var seq40754__$1 = cljs.core.next(seq40754);
var G__40756 = cljs.core.first(seq40754__$1);
var seq40754__$2 = cljs.core.next(seq40754__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40755,G__40756,seq40754__$2);
});

fulcro.client.dom.create_element.cljs$lang$maxFixedArity = (2);

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
fulcro.client.dom.convert_props = (function fulcro$client$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
fulcro.client.dom.macro_create_element_STAR_ = (function fulcro$client$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return React.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
fulcro.client.dom.update_state = (function fulcro$client$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var inputRef = goog.object.get(next_props,"inputRef");
var G__40763_40766 = next_state;
var G__40764_40767 = next_props;
var G__40765_40768 = ({"onChange": on_change});
goog.object.extend(G__40763_40766,G__40764_40767,G__40765_40768);

goog.object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
goog.object.remove(next_state,"inputRef");

goog.object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(next_state);
});
fulcro.client.dom.wrap_form_element = (function fulcro$client$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({"ref": goog.object.get(props,"inputRef")});
var G__40772_40792 = state;
var G__40773_40793 = props;
var G__40774_40794 = ({"onChange": (function (){var G__40775 = goog.object.get(this$,"onChange");
var G__40776 = this$;
return goog.bind(G__40775,G__40776);
})()});
goog.object.extend(G__40772_40792,G__40773_40793,G__40774_40794);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x40778_40799 = ctor.prototype;
x40778_40799.onChange = ((function (x40778_40799,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return fulcro.client.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x40778_40799,ctor))
;

x40778_40799.componentWillReceiveProps = ((function (x40778_40799,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var element_value = (function (){var G__40786 = ReactDOM.findDOMNode(this$);
var G__40787 = "value";
return goog.object.get(G__40786,G__40787);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x40778_40799,ctor))
;

x40778_40799.render = ((function (x40778_40799,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x40778_40799,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__40804__delegate = function (props,children){
var temp__5455__auto__ = goog.object.get(props,"ref");
if(cljs.core.truth_(temp__5455__auto__)){
var r = temp__5455__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
goog.object.extend(p,props);

goog.object.set(p,"inputRef",r);

goog.object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
};
var G__40804 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__40805__i = 0, G__40805__a = new Array(arguments.length -  1);
while (G__40805__i < G__40805__a.length) {G__40805__a[G__40805__i] = arguments[G__40805__i + 1]; ++G__40805__i;}
  children = new cljs.core.IndexedSeq(G__40805__a,0,null);
} 
return G__40804__delegate.call(this,props,children);};
G__40804.cljs$lang$maxFixedArity = 1;
G__40804.cljs$lang$applyTo = (function (arglist__40806){
var props = cljs.core.first(arglist__40806);
var children = cljs.core.rest(arglist__40806);
return G__40804__delegate(props,children);
});
G__40804.cljs$core$IFn$_invoke$arity$variadic = G__40804__delegate;
return G__40804;
})()
;
;})(real_factory,ctor))
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_input = fulcro.client.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_textarea = fulcro.client.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_option = fulcro.client.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
fulcro.client.dom.wrapped_select = fulcro.client.dom.wrap_form_element("select");
fulcro.client.dom.arr_append_STAR_ = (function fulcro$client$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
fulcro.client.dom.arr_append = (function fulcro$client$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.arr_append_STAR_,arr,fulcro.util.force_children(tail));
});
/**
 * Used internally by element generation.
 */
fulcro.client.dom.macro_create_wrapped_form_element = (function fulcro$client$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__40813 = tag;
switch (G__40813) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40813)].join('')));

}
});
if(typeof fulcro.client.dom.form_elements_QMARK_ !== 'undefined'){
} else {
fulcro.client.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
/**
 * Used internally by element generation.
 */
fulcro.client.dom.macro_create_element = (function fulcro$client$dom$macro_create_element(var_args){
var G__40816 = arguments.length;
switch (G__40816) {
case 2:
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__40821 = args;
var seq__40822 = cljs.core.seq(vec__40821);
var first__40823 = cljs.core.first(seq__40822);
var seq__40822__$1 = cljs.core.next(seq__40822);
var head = first__40823;
var tail = seq__40822__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__40826 = (function (){var G__40827 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__40827,tail);

return G__40827;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40826) : f.call(null,G__40826));
} else {
if(cljs.core.truth_(fulcro.client.dom.element_QMARK_(head))){
var G__40830 = (function (){var G__40831 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__40831,args);

return G__40831;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40830) : f.call(null,G__40830));
} else {
if(cljs.core.object_QMARK_(head)){
var G__40832 = (function (){var G__40833 = [type,fulcro.client.dom_common.add_kwprops_to_props(head,csskw)];
fulcro.client.dom.arr_append(G__40833,tail);

return G__40833;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40832) : f.call(null,G__40832));
} else {
if(cljs.core.map_QMARK_(head)){
var G__40838 = (function (){var G__40839 = [type,cljs.core.clj__GT_js(fulcro.client.dom_common.add_kwprops_to_props(head,csskw))];
fulcro.client.dom.arr_append(G__40839,tail);

return G__40839;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40838) : f.call(null,G__40838));
} else {
var G__40840 = (function (){var G__40841 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__40841,args);

return G__40841;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40840) : f.call(null,G__40840));

}
}
}
}
});

fulcro.client.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

fulcro.client.dom.form = (function fulcro$client$dom$form(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41577 = arguments.length;
var i__4500__auto___41578 = (0);
while(true){
if((i__4500__auto___41578 < len__4499__auto___41577)){
args__4502__auto__.push((arguments[i__4500__auto___41578]));

var G__41579 = (i__4500__auto___41578 + (1));
i__4500__auto___41578 = G__41579;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40852 = conformed_args__39829__auto__;
var map__40852__$1 = ((((!((map__40852 == null)))?(((((map__40852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40852):map__40852);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40852__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40852__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40852__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.form.cljs$lang$applyTo = (function (seq40851){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40851));
});


fulcro.client.dom.audio = (function fulcro$client$dom$audio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41588 = arguments.length;
var i__4500__auto___41589 = (0);
while(true){
if((i__4500__auto___41589 < len__4499__auto___41588)){
args__4502__auto__.push((arguments[i__4500__auto___41589]));

var G__41590 = (i__4500__auto___41589 + (1));
i__4500__auto___41589 = G__41590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40858 = conformed_args__39829__auto__;
var map__40858__$1 = ((((!((map__40858 == null)))?(((((map__40858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40858):map__40858);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq40854){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40854));
});


fulcro.client.dom.input = (function fulcro$client$dom$input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41592 = arguments.length;
var i__4500__auto___41593 = (0);
while(true){
if((i__4500__auto___41593 < len__4499__auto___41592)){
args__4502__auto__.push((arguments[i__4500__auto___41593]));

var G__41594 = (i__4500__auto___41593 + (1));
i__4500__auto___41593 = G__41594;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40864 = conformed_args__39829__auto__;
var map__40864__$1 = ((((!((map__40864 == null)))?(((((map__40864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40864):map__40864);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40864__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40864__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40864__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.input.cljs$lang$applyTo = (function (seq40863){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40863));
});


fulcro.client.dom.menuitem = (function fulcro$client$dom$menuitem(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41595 = arguments.length;
var i__4500__auto___41596 = (0);
while(true){
if((i__4500__auto___41596 < len__4499__auto___41595)){
args__4502__auto__.push((arguments[i__4500__auto___41596]));

var G__41597 = (i__4500__auto___41596 + (1));
i__4500__auto___41596 = G__41597;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40867 = conformed_args__39829__auto__;
var map__40867__$1 = ((((!((map__40867 == null)))?(((((map__40867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40867):map__40867);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq40866){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40866));
});


fulcro.client.dom.radialGradient = (function fulcro$client$dom$radialGradient(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41598 = arguments.length;
var i__4500__auto___41599 = (0);
while(true){
if((i__4500__auto___41599 < len__4499__auto___41598)){
args__4502__auto__.push((arguments[i__4500__auto___41599]));

var G__41600 = (i__4500__auto___41599 + (1));
i__4500__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40874 = conformed_args__39829__auto__;
var map__40874__$1 = ((((!((map__40874 == null)))?(((((map__40874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40874):map__40874);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40874__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq40870){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40870));
});


fulcro.client.dom.base = (function fulcro$client$dom$base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41601 = arguments.length;
var i__4500__auto___41602 = (0);
while(true){
if((i__4500__auto___41602 < len__4499__auto___41601)){
args__4502__auto__.push((arguments[i__4500__auto___41602]));

var G__41603 = (i__4500__auto___41602 + (1));
i__4500__auto___41602 = G__41603;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40878 = conformed_args__39829__auto__;
var map__40878__$1 = ((((!((map__40878 == null)))?(((((map__40878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40878):map__40878);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.base.cljs$lang$applyTo = (function (seq40876){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40876));
});


fulcro.client.dom.h1 = (function fulcro$client$dom$h1(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41608 = arguments.length;
var i__4500__auto___41609 = (0);
while(true){
if((i__4500__auto___41609 < len__4499__auto___41608)){
args__4502__auto__.push((arguments[i__4500__auto___41609]));

var G__41611 = (i__4500__auto___41609 + (1));
i__4500__auto___41609 = G__41611;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40884 = conformed_args__39829__auto__;
var map__40884__$1 = ((((!((map__40884 == null)))?(((((map__40884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40884):map__40884);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40884__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40884__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40884__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq40883){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40883));
});


fulcro.client.dom.embed = (function fulcro$client$dom$embed(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41623 = arguments.length;
var i__4500__auto___41624 = (0);
while(true){
if((i__4500__auto___41624 < len__4499__auto___41623)){
args__4502__auto__.push((arguments[i__4500__auto___41624]));

var G__41627 = (i__4500__auto___41624 + (1));
i__4500__auto___41624 = G__41627;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40887 = conformed_args__39829__auto__;
var map__40887__$1 = ((((!((map__40887 == null)))?(((((map__40887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40887):map__40887);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq40886){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40886));
});


fulcro.client.dom.h3 = (function fulcro$client$dom$h3(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41628 = arguments.length;
var i__4500__auto___41629 = (0);
while(true){
if((i__4500__auto___41629 < len__4499__auto___41628)){
args__4502__auto__.push((arguments[i__4500__auto___41629]));

var G__41630 = (i__4500__auto___41629 + (1));
i__4500__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40891 = conformed_args__39829__auto__;
var map__40891__$1 = ((((!((map__40891 == null)))?(((((map__40891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40891):map__40891);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq40890){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40890));
});


fulcro.client.dom.body = (function fulcro$client$dom$body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41631 = arguments.length;
var i__4500__auto___41632 = (0);
while(true){
if((i__4500__auto___41632 < len__4499__auto___41631)){
args__4502__auto__.push((arguments[i__4500__auto___41632]));

var G__41637 = (i__4500__auto___41632 + (1));
i__4500__auto___41632 = G__41637;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40895 = conformed_args__39829__auto__;
var map__40895__$1 = ((((!((map__40895 == null)))?(((((map__40895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40895):map__40895);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.body.cljs$lang$applyTo = (function (seq40894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40894));
});


fulcro.client.dom.keygen = (function fulcro$client$dom$keygen(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41659 = arguments.length;
var i__4500__auto___41660 = (0);
while(true){
if((i__4500__auto___41660 < len__4499__auto___41659)){
args__4502__auto__.push((arguments[i__4500__auto___41660]));

var G__41662 = (i__4500__auto___41660 + (1));
i__4500__auto___41660 = G__41662;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40899 = conformed_args__39829__auto__;
var map__40899__$1 = ((((!((map__40899 == null)))?(((((map__40899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40899):map__40899);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq40898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40898));
});


fulcro.client.dom.progress = (function fulcro$client$dom$progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41669 = arguments.length;
var i__4500__auto___41670 = (0);
while(true){
if((i__4500__auto___41670 < len__4499__auto___41669)){
args__4502__auto__.push((arguments[i__4500__auto___41670]));

var G__41672 = (i__4500__auto___41670 + (1));
i__4500__auto___41670 = G__41672;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40902 = conformed_args__39829__auto__;
var map__40902__$1 = ((((!((map__40902 == null)))?(((((map__40902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40902):map__40902);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq40901){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40901));
});


fulcro.client.dom.main = (function fulcro$client$dom$main(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41673 = arguments.length;
var i__4500__auto___41674 = (0);
while(true){
if((i__4500__auto___41674 < len__4499__auto___41673)){
args__4502__auto__.push((arguments[i__4500__auto___41674]));

var G__41675 = (i__4500__auto___41674 + (1));
i__4500__auto___41674 = G__41675;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40909 = conformed_args__39829__auto__;
var map__40909__$1 = ((((!((map__40909 == null)))?(((((map__40909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40909):map__40909);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.main.cljs$lang$applyTo = (function (seq40905){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40905));
});


fulcro.client.dom.cite = (function fulcro$client$dom$cite(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41682 = arguments.length;
var i__4500__auto___41683 = (0);
while(true){
if((i__4500__auto___41683 < len__4499__auto___41682)){
args__4502__auto__.push((arguments[i__4500__auto___41683]));

var G__41684 = (i__4500__auto___41683 + (1));
i__4500__auto___41683 = G__41684;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40917 = conformed_args__39829__auto__;
var map__40917__$1 = ((((!((map__40917 == null)))?(((((map__40917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40917):map__40917);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq40915){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40915));
});


fulcro.client.dom.rect = (function fulcro$client$dom$rect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41691 = arguments.length;
var i__4500__auto___41692 = (0);
while(true){
if((i__4500__auto___41692 < len__4499__auto___41691)){
args__4502__auto__.push((arguments[i__4500__auto___41692]));

var G__41693 = (i__4500__auto___41692 + (1));
i__4500__auto___41692 = G__41693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40924 = conformed_args__39829__auto__;
var map__40924__$1 = ((((!((map__40924 == null)))?(((((map__40924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40924):map__40924);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40924__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40924__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq40921){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40921));
});


fulcro.client.dom.polyline = (function fulcro$client$dom$polyline(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41696 = arguments.length;
var i__4500__auto___41697 = (0);
while(true){
if((i__4500__auto___41697 < len__4499__auto___41696)){
args__4502__auto__.push((arguments[i__4500__auto___41697]));

var G__41698 = (i__4500__auto___41697 + (1));
i__4500__auto___41697 = G__41698;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40933 = conformed_args__39829__auto__;
var map__40933__$1 = ((((!((map__40933 == null)))?(((((map__40933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40933):map__40933);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq40932){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40932));
});


fulcro.client.dom.map = (function fulcro$client$dom$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41702 = arguments.length;
var i__4500__auto___41703 = (0);
while(true){
if((i__4500__auto___41703 < len__4499__auto___41702)){
args__4502__auto__.push((arguments[i__4500__auto___41703]));

var G__41704 = (i__4500__auto___41703 + (1));
i__4500__auto___41703 = G__41704;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40937 = conformed_args__39829__auto__;
var map__40937__$1 = ((((!((map__40937 == null)))?(((((map__40937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40937):map__40937);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.map.cljs$lang$applyTo = (function (seq40936){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40936));
});


fulcro.client.dom.object = (function fulcro$client$dom$object(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41709 = arguments.length;
var i__4500__auto___41710 = (0);
while(true){
if((i__4500__auto___41710 < len__4499__auto___41709)){
args__4502__auto__.push((arguments[i__4500__auto___41710]));

var G__41711 = (i__4500__auto___41710 + (1));
i__4500__auto___41710 = G__41711;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40944 = conformed_args__39829__auto__;
var map__40944__$1 = ((((!((map__40944 == null)))?(((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40944):map__40944);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40944__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.object.cljs$lang$applyTo = (function (seq40943){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40943));
});


fulcro.client.dom.i = (function fulcro$client$dom$i(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41717 = arguments.length;
var i__4500__auto___41718 = (0);
while(true){
if((i__4500__auto___41718 < len__4499__auto___41717)){
args__4502__auto__.push((arguments[i__4500__auto___41718]));

var G__41719 = (i__4500__auto___41718 + (1));
i__4500__auto___41718 = G__41719;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40950 = conformed_args__39829__auto__;
var map__40950__$1 = ((((!((map__40950 == null)))?(((((map__40950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40950):map__40950);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.i.cljs$lang$applyTo = (function (seq40947){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40947));
});


fulcro.client.dom.p = (function fulcro$client$dom$p(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41721 = arguments.length;
var i__4500__auto___41722 = (0);
while(true){
if((i__4500__auto___41722 < len__4499__auto___41721)){
args__4502__auto__.push((arguments[i__4500__auto___41722]));

var G__41723 = (i__4500__auto___41722 + (1));
i__4500__auto___41722 = G__41723;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40959 = conformed_args__39829__auto__;
var map__40959__$1 = ((((!((map__40959 == null)))?(((((map__40959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40959):map__40959);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.p.cljs$lang$applyTo = (function (seq40952){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40952));
});


fulcro.client.dom.nav = (function fulcro$client$dom$nav(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41733 = arguments.length;
var i__4500__auto___41735 = (0);
while(true){
if((i__4500__auto___41735 < len__4499__auto___41733)){
args__4502__auto__.push((arguments[i__4500__auto___41735]));

var G__41736 = (i__4500__auto___41735 + (1));
i__4500__auto___41735 = G__41736;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40974 = conformed_args__39829__auto__;
var map__40974__$1 = ((((!((map__40974 == null)))?(((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40974):map__40974);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40974__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq40971){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40971));
});


fulcro.client.dom.ruby = (function fulcro$client$dom$ruby(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41751 = arguments.length;
var i__4500__auto___41752 = (0);
while(true){
if((i__4500__auto___41752 < len__4499__auto___41751)){
args__4502__auto__.push((arguments[i__4500__auto___41752]));

var G__41753 = (i__4500__auto___41752 + (1));
i__4500__auto___41752 = G__41753;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40984 = conformed_args__39829__auto__;
var map__40984__$1 = ((((!((map__40984 == null)))?(((((map__40984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40984):map__40984);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq40982){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40982));
});


fulcro.client.dom.a = (function fulcro$client$dom$a(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41758 = arguments.length;
var i__4500__auto___41759 = (0);
while(true){
if((i__4500__auto___41759 < len__4499__auto___41758)){
args__4502__auto__.push((arguments[i__4500__auto___41759]));

var G__41760 = (i__4500__auto___41759 + (1));
i__4500__auto___41759 = G__41760;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40991 = conformed_args__39829__auto__;
var map__40991__$1 = ((((!((map__40991 == null)))?(((((map__40991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40991):map__40991);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.a.cljs$lang$applyTo = (function (seq40986){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40986));
});


fulcro.client.dom.menu = (function fulcro$client$dom$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41761 = arguments.length;
var i__4500__auto___41762 = (0);
while(true){
if((i__4500__auto___41762 < len__4499__auto___41761)){
args__4502__auto__.push((arguments[i__4500__auto___41762]));

var G__41763 = (i__4500__auto___41762 + (1));
i__4500__auto___41762 = G__41763;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__40995 = conformed_args__39829__auto__;
var map__40995__$1 = ((((!((map__40995 == null)))?(((((map__40995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40995):map__40995);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq40994){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40994));
});


fulcro.client.dom.blockquote = (function fulcro$client$dom$blockquote(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41764 = arguments.length;
var i__4500__auto___41765 = (0);
while(true){
if((i__4500__auto___41765 < len__4499__auto___41764)){
args__4502__auto__.push((arguments[i__4500__auto___41765]));

var G__41766 = (i__4500__auto___41765 + (1));
i__4500__auto___41765 = G__41766;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41000 = conformed_args__39829__auto__;
var map__41000__$1 = ((((!((map__41000 == null)))?(((((map__41000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41000):map__41000);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq40999){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40999));
});


fulcro.client.dom.img = (function fulcro$client$dom$img(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41767 = arguments.length;
var i__4500__auto___41768 = (0);
while(true){
if((i__4500__auto___41768 < len__4499__auto___41767)){
args__4502__auto__.push((arguments[i__4500__auto___41768]));

var G__41769 = (i__4500__auto___41768 + (1));
i__4500__auto___41768 = G__41769;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41003 = conformed_args__39829__auto__;
var map__41003__$1 = ((((!((map__41003 == null)))?(((((map__41003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41003):map__41003);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.img.cljs$lang$applyTo = (function (seq41002){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41002));
});


fulcro.client.dom.text = (function fulcro$client$dom$text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41770 = arguments.length;
var i__4500__auto___41771 = (0);
while(true){
if((i__4500__auto___41771 < len__4499__auto___41770)){
args__4502__auto__.push((arguments[i__4500__auto___41771]));

var G__41772 = (i__4500__auto___41771 + (1));
i__4500__auto___41771 = G__41772;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41006 = conformed_args__39829__auto__;
var map__41006__$1 = ((((!((map__41006 == null)))?(((((map__41006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41006):map__41006);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.text.cljs$lang$applyTo = (function (seq41005){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41005));
});


fulcro.client.dom.span = (function fulcro$client$dom$span(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41774 = arguments.length;
var i__4500__auto___41775 = (0);
while(true){
if((i__4500__auto___41775 < len__4499__auto___41774)){
args__4502__auto__.push((arguments[i__4500__auto___41775]));

var G__41776 = (i__4500__auto___41775 + (1));
i__4500__auto___41775 = G__41776;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41010 = conformed_args__39829__auto__;
var map__41010__$1 = ((((!((map__41010 == null)))?(((((map__41010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41010):map__41010);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.span.cljs$lang$applyTo = (function (seq41008){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41008));
});


fulcro.client.dom.track = (function fulcro$client$dom$track(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41779 = arguments.length;
var i__4500__auto___41780 = (0);
while(true){
if((i__4500__auto___41780 < len__4499__auto___41779)){
args__4502__auto__.push((arguments[i__4500__auto___41780]));

var G__41781 = (i__4500__auto___41780 + (1));
i__4500__auto___41780 = G__41781;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41015 = conformed_args__39829__auto__;
var map__41015__$1 = ((((!((map__41015 == null)))?(((((map__41015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41015):map__41015);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.track.cljs$lang$applyTo = (function (seq41012){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41012));
});


fulcro.client.dom.data = (function fulcro$client$dom$data(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41784 = arguments.length;
var i__4500__auto___41785 = (0);
while(true){
if((i__4500__auto___41785 < len__4499__auto___41784)){
args__4502__auto__.push((arguments[i__4500__auto___41785]));

var G__41787 = (i__4500__auto___41785 + (1));
i__4500__auto___41785 = G__41787;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41024 = conformed_args__39829__auto__;
var map__41024__$1 = ((((!((map__41024 == null)))?(((((map__41024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41024):map__41024);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41024__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41024__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41024__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.data.cljs$lang$applyTo = (function (seq41023){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41023));
});


fulcro.client.dom.u = (function fulcro$client$dom$u(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41789 = arguments.length;
var i__4500__auto___41790 = (0);
while(true){
if((i__4500__auto___41790 < len__4499__auto___41789)){
args__4502__auto__.push((arguments[i__4500__auto___41790]));

var G__41792 = (i__4500__auto___41790 + (1));
i__4500__auto___41790 = G__41792;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41029 = conformed_args__39829__auto__;
var map__41029__$1 = ((((!((map__41029 == null)))?(((((map__41029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41029):map__41029);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.u.cljs$lang$applyTo = (function (seq41028){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41028));
});


fulcro.client.dom.dl = (function fulcro$client$dom$dl(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41795 = arguments.length;
var i__4500__auto___41796 = (0);
while(true){
if((i__4500__auto___41796 < len__4499__auto___41795)){
args__4502__auto__.push((arguments[i__4500__auto___41796]));

var G__41797 = (i__4500__auto___41796 + (1));
i__4500__auto___41796 = G__41797;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41033 = conformed_args__39829__auto__;
var map__41033__$1 = ((((!((map__41033 == null)))?(((((map__41033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41033):map__41033);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq41032){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41032));
});


fulcro.client.dom.select = (function fulcro$client$dom$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41801 = arguments.length;
var i__4500__auto___41802 = (0);
while(true){
if((i__4500__auto___41802 < len__4499__auto___41801)){
args__4502__auto__.push((arguments[i__4500__auto___41802]));

var G__41803 = (i__4500__auto___41802 + (1));
i__4500__auto___41802 = G__41803;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41037 = conformed_args__39829__auto__;
var map__41037__$1 = ((((!((map__41037 == null)))?(((((map__41037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41037):map__41037);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.select.cljs$lang$applyTo = (function (seq41036){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41036));
});


fulcro.client.dom.polygon = (function fulcro$client$dom$polygon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41807 = arguments.length;
var i__4500__auto___41808 = (0);
while(true){
if((i__4500__auto___41808 < len__4499__auto___41807)){
args__4502__auto__.push((arguments[i__4500__auto___41808]));

var G__41809 = (i__4500__auto___41808 + (1));
i__4500__auto___41808 = G__41809;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41046 = conformed_args__39829__auto__;
var map__41046__$1 = ((((!((map__41046 == null)))?(((((map__41046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41046):map__41046);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq41043){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41043));
});


fulcro.client.dom.pattern = (function fulcro$client$dom$pattern(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41814 = arguments.length;
var i__4500__auto___41815 = (0);
while(true){
if((i__4500__auto___41815 < len__4499__auto___41814)){
args__4502__auto__.push((arguments[i__4500__auto___41815]));

var G__41816 = (i__4500__auto___41815 + (1));
i__4500__auto___41815 = G__41816;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41052 = conformed_args__39829__auto__;
var map__41052__$1 = ((((!((map__41052 == null)))?(((((map__41052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41052):map__41052);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq41050){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41050));
});


fulcro.client.dom.html = (function fulcro$client$dom$html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41822 = arguments.length;
var i__4500__auto___41823 = (0);
while(true){
if((i__4500__auto___41823 < len__4499__auto___41822)){
args__4502__auto__.push((arguments[i__4500__auto___41823]));

var G__41824 = (i__4500__auto___41823 + (1));
i__4500__auto___41823 = G__41824;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41068 = conformed_args__39829__auto__;
var map__41068__$1 = ((((!((map__41068 == null)))?(((((map__41068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41068):map__41068);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.html.cljs$lang$applyTo = (function (seq41063){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41063));
});


fulcro.client.dom.thead = (function fulcro$client$dom$thead(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41825 = arguments.length;
var i__4500__auto___41826 = (0);
while(true){
if((i__4500__auto___41826 < len__4499__auto___41825)){
args__4502__auto__.push((arguments[i__4500__auto___41826]));

var G__41827 = (i__4500__auto___41826 + (1));
i__4500__auto___41826 = G__41827;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41071 = conformed_args__39829__auto__;
var map__41071__$1 = ((((!((map__41071 == null)))?(((((map__41071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41071):map__41071);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq41070){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41070));
});


fulcro.client.dom.path = (function fulcro$client$dom$path(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41830 = arguments.length;
var i__4500__auto___41831 = (0);
while(true){
if((i__4500__auto___41831 < len__4499__auto___41830)){
args__4502__auto__.push((arguments[i__4500__auto___41831]));

var G__41832 = (i__4500__auto___41831 + (1));
i__4500__auto___41831 = G__41832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41074 = conformed_args__39829__auto__;
var map__41074__$1 = ((((!((map__41074 == null)))?(((((map__41074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41074):map__41074);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41074__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.path.cljs$lang$applyTo = (function (seq41073){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41073));
});


fulcro.client.dom.del = (function fulcro$client$dom$del(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41833 = arguments.length;
var i__4500__auto___41834 = (0);
while(true){
if((i__4500__auto___41834 < len__4499__auto___41833)){
args__4502__auto__.push((arguments[i__4500__auto___41834]));

var G__41835 = (i__4500__auto___41834 + (1));
i__4500__auto___41834 = G__41835;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41078 = conformed_args__39829__auto__;
var map__41078__$1 = ((((!((map__41078 == null)))?(((((map__41078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41078):map__41078);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.del.cljs$lang$applyTo = (function (seq41076){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41076));
});


fulcro.client.dom.fieldset = (function fulcro$client$dom$fieldset(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41836 = arguments.length;
var i__4500__auto___41837 = (0);
while(true){
if((i__4500__auto___41837 < len__4499__auto___41836)){
args__4502__auto__.push((arguments[i__4500__auto___41837]));

var G__41838 = (i__4500__auto___41837 + (1));
i__4500__auto___41837 = G__41838;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41082 = conformed_args__39829__auto__;
var map__41082__$1 = ((((!((map__41082 == null)))?(((((map__41082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41082):map__41082);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq41080){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41080));
});


fulcro.client.dom.aside = (function fulcro$client$dom$aside(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41842 = arguments.length;
var i__4500__auto___41843 = (0);
while(true){
if((i__4500__auto___41843 < len__4499__auto___41842)){
args__4502__auto__.push((arguments[i__4500__auto___41843]));

var G__41845 = (i__4500__auto___41843 + (1));
i__4500__auto___41843 = G__41845;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41085 = conformed_args__39829__auto__;
var map__41085__$1 = ((((!((map__41085 == null)))?(((((map__41085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41085):map__41085);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq41084){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41084));
});


fulcro.client.dom.figure = (function fulcro$client$dom$figure(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41847 = arguments.length;
var i__4500__auto___41848 = (0);
while(true){
if((i__4500__auto___41848 < len__4499__auto___41847)){
args__4502__auto__.push((arguments[i__4500__auto___41848]));

var G__41849 = (i__4500__auto___41848 + (1));
i__4500__auto___41848 = G__41849;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41088 = conformed_args__39829__auto__;
var map__41088__$1 = ((((!((map__41088 == null)))?(((((map__41088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41088):map__41088);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq41087){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41087));
});


fulcro.client.dom.figcaption = (function fulcro$client$dom$figcaption(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41851 = arguments.length;
var i__4500__auto___41852 = (0);
while(true){
if((i__4500__auto___41852 < len__4499__auto___41851)){
args__4502__auto__.push((arguments[i__4500__auto___41852]));

var G__41853 = (i__4500__auto___41852 + (1));
i__4500__auto___41852 = G__41853;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41091 = conformed_args__39829__auto__;
var map__41091__$1 = ((((!((map__41091 == null)))?(((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41091):map__41091);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq41090){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41090));
});


fulcro.client.dom.mask = (function fulcro$client$dom$mask(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41858 = arguments.length;
var i__4500__auto___41860 = (0);
while(true){
if((i__4500__auto___41860 < len__4499__auto___41858)){
args__4502__auto__.push((arguments[i__4500__auto___41860]));

var G__41861 = (i__4500__auto___41860 + (1));
i__4500__auto___41860 = G__41861;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41094 = conformed_args__39829__auto__;
var map__41094__$1 = ((((!((map__41094 == null)))?(((((map__41094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41094):map__41094);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq41093){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41093));
});


fulcro.client.dom.q = (function fulcro$client$dom$q(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41863 = arguments.length;
var i__4500__auto___41864 = (0);
while(true){
if((i__4500__auto___41864 < len__4499__auto___41863)){
args__4502__auto__.push((arguments[i__4500__auto___41864]));

var G__41865 = (i__4500__auto___41864 + (1));
i__4500__auto___41864 = G__41865;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41103 = conformed_args__39829__auto__;
var map__41103__$1 = ((((!((map__41103 == null)))?(((((map__41103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41103):map__41103);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41103__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41103__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41103__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.q.cljs$lang$applyTo = (function (seq41098){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41098));
});


fulcro.client.dom.bdi = (function fulcro$client$dom$bdi(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41866 = arguments.length;
var i__4500__auto___41867 = (0);
while(true){
if((i__4500__auto___41867 < len__4499__auto___41866)){
args__4502__auto__.push((arguments[i__4500__auto___41867]));

var G__41868 = (i__4500__auto___41867 + (1));
i__4500__auto___41867 = G__41868;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41108 = conformed_args__39829__auto__;
var map__41108__$1 = ((((!((map__41108 == null)))?(((((map__41108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41108):map__41108);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq41107){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41107));
});


fulcro.client.dom.video = (function fulcro$client$dom$video(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41871 = arguments.length;
var i__4500__auto___41872 = (0);
while(true){
if((i__4500__auto___41872 < len__4499__auto___41871)){
args__4502__auto__.push((arguments[i__4500__auto___41872]));

var G__41873 = (i__4500__auto___41872 + (1));
i__4500__auto___41872 = G__41873;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41111 = conformed_args__39829__auto__;
var map__41111__$1 = ((((!((map__41111 == null)))?(((((map__41111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41111):map__41111);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.video.cljs$lang$applyTo = (function (seq41110){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41110));
});


fulcro.client.dom.address = (function fulcro$client$dom$address(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41879 = arguments.length;
var i__4500__auto___41880 = (0);
while(true){
if((i__4500__auto___41880 < len__4499__auto___41879)){
args__4502__auto__.push((arguments[i__4500__auto___41880]));

var G__41889 = (i__4500__auto___41880 + (1));
i__4500__auto___41880 = G__41889;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41114 = conformed_args__39829__auto__;
var map__41114__$1 = ((((!((map__41114 == null)))?(((((map__41114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41114):map__41114);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.address.cljs$lang$applyTo = (function (seq41113){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41113));
});


fulcro.client.dom.caption = (function fulcro$client$dom$caption(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41892 = arguments.length;
var i__4500__auto___41893 = (0);
while(true){
if((i__4500__auto___41893 < len__4499__auto___41892)){
args__4502__auto__.push((arguments[i__4500__auto___41893]));

var G__41895 = (i__4500__auto___41893 + (1));
i__4500__auto___41893 = G__41895;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41117 = conformed_args__39829__auto__;
var map__41117__$1 = ((((!((map__41117 == null)))?(((((map__41117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41117):map__41117);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq41116){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41116));
});


fulcro.client.dom.dd = (function fulcro$client$dom$dd(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41900 = arguments.length;
var i__4500__auto___41901 = (0);
while(true){
if((i__4500__auto___41901 < len__4499__auto___41900)){
args__4502__auto__.push((arguments[i__4500__auto___41901]));

var G__41902 = (i__4500__auto___41901 + (1));
i__4500__auto___41901 = G__41902;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41120 = conformed_args__39829__auto__;
var map__41120__$1 = ((((!((map__41120 == null)))?(((((map__41120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41120):map__41120);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq41119){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41119));
});


fulcro.client.dom.rp = (function fulcro$client$dom$rp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41904 = arguments.length;
var i__4500__auto___41905 = (0);
while(true){
if((i__4500__auto___41905 < len__4499__auto___41904)){
args__4502__auto__.push((arguments[i__4500__auto___41905]));

var G__41906 = (i__4500__auto___41905 + (1));
i__4500__auto___41905 = G__41906;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41127 = conformed_args__39829__auto__;
var map__41127__$1 = ((((!((map__41127 == null)))?(((((map__41127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41127):map__41127);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq41126){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41126));
});


fulcro.client.dom.hr = (function fulcro$client$dom$hr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41907 = arguments.length;
var i__4500__auto___41908 = (0);
while(true){
if((i__4500__auto___41908 < len__4499__auto___41907)){
args__4502__auto__.push((arguments[i__4500__auto___41908]));

var G__41909 = (i__4500__auto___41908 + (1));
i__4500__auto___41908 = G__41909;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41134 = conformed_args__39829__auto__;
var map__41134__$1 = ((((!((map__41134 == null)))?(((((map__41134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41134):map__41134);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq41129){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41129));
});


fulcro.client.dom.meta = (function fulcro$client$dom$meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41911 = arguments.length;
var i__4500__auto___41912 = (0);
while(true){
if((i__4500__auto___41912 < len__4499__auto___41911)){
args__4502__auto__.push((arguments[i__4500__auto___41912]));

var G__41913 = (i__4500__auto___41912 + (1));
i__4500__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41137 = conformed_args__39829__auto__;
var map__41137__$1 = ((((!((map__41137 == null)))?(((((map__41137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41137):map__41137);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41137__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41137__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41137__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq41136){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41136));
});


fulcro.client.dom.tbody = (function fulcro$client$dom$tbody(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41914 = arguments.length;
var i__4500__auto___41915 = (0);
while(true){
if((i__4500__auto___41915 < len__4499__auto___41914)){
args__4502__auto__.push((arguments[i__4500__auto___41915]));

var G__41916 = (i__4500__auto___41915 + (1));
i__4500__auto___41915 = G__41916;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41144 = conformed_args__39829__auto__;
var map__41144__$1 = ((((!((map__41144 == null)))?(((((map__41144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41144):map__41144);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq41140){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41140));
});


fulcro.client.dom.table = (function fulcro$client$dom$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41917 = arguments.length;
var i__4500__auto___41918 = (0);
while(true){
if((i__4500__auto___41918 < len__4499__auto___41917)){
args__4502__auto__.push((arguments[i__4500__auto___41918]));

var G__41919 = (i__4500__auto___41918 + (1));
i__4500__auto___41918 = G__41919;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41147 = conformed_args__39829__auto__;
var map__41147__$1 = ((((!((map__41147 == null)))?(((((map__41147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41147):map__41147);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.table.cljs$lang$applyTo = (function (seq41146){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41146));
});


fulcro.client.dom.pre = (function fulcro$client$dom$pre(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41922 = arguments.length;
var i__4500__auto___41924 = (0);
while(true){
if((i__4500__auto___41924 < len__4499__auto___41922)){
args__4502__auto__.push((arguments[i__4500__auto___41924]));

var G__41925 = (i__4500__auto___41924 + (1));
i__4500__auto___41924 = G__41925;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41161 = conformed_args__39829__auto__;
var map__41161__$1 = ((((!((map__41161 == null)))?(((((map__41161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41161):map__41161);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq41153){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41153));
});


fulcro.client.dom.ul = (function fulcro$client$dom$ul(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41928 = arguments.length;
var i__4500__auto___41929 = (0);
while(true){
if((i__4500__auto___41929 < len__4499__auto___41928)){
args__4502__auto__.push((arguments[i__4500__auto___41929]));

var G__41930 = (i__4500__auto___41929 + (1));
i__4500__auto___41929 = G__41930;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41165 = conformed_args__39829__auto__;
var map__41165__$1 = ((((!((map__41165 == null)))?(((((map__41165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41165):map__41165);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41165__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41165__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41165__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq41164){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41164));
});


fulcro.client.dom.sup = (function fulcro$client$dom$sup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41932 = arguments.length;
var i__4500__auto___41933 = (0);
while(true){
if((i__4500__auto___41933 < len__4499__auto___41932)){
args__4502__auto__.push((arguments[i__4500__auto___41933]));

var G__41935 = (i__4500__auto___41933 + (1));
i__4500__auto___41933 = G__41935;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41169 = conformed_args__39829__auto__;
var map__41169__$1 = ((((!((map__41169 == null)))?(((((map__41169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41169):map__41169);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq41168){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41168));
});


fulcro.client.dom.dfn = (function fulcro$client$dom$dfn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41938 = arguments.length;
var i__4500__auto___41939 = (0);
while(true){
if((i__4500__auto___41939 < len__4499__auto___41938)){
args__4502__auto__.push((arguments[i__4500__auto___41939]));

var G__41940 = (i__4500__auto___41939 + (1));
i__4500__auto___41939 = G__41940;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41173 = conformed_args__39829__auto__;
var map__41173__$1 = ((((!((map__41173 == null)))?(((((map__41173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41173):map__41173);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41173__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41173__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41173__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq41172){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41172));
});


fulcro.client.dom.sub = (function fulcro$client$dom$sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41941 = arguments.length;
var i__4500__auto___41942 = (0);
while(true){
if((i__4500__auto___41942 < len__4499__auto___41941)){
args__4502__auto__.push((arguments[i__4500__auto___41942]));

var G__41943 = (i__4500__auto___41942 + (1));
i__4500__auto___41942 = G__41943;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41178 = conformed_args__39829__auto__;
var map__41178__$1 = ((((!((map__41178 == null)))?(((((map__41178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41178):map__41178);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq41175){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41175));
});


fulcro.client.dom.mark = (function fulcro$client$dom$mark(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41948 = arguments.length;
var i__4500__auto___41949 = (0);
while(true){
if((i__4500__auto___41949 < len__4499__auto___41948)){
args__4502__auto__.push((arguments[i__4500__auto___41949]));

var G__41950 = (i__4500__auto___41949 + (1));
i__4500__auto___41949 = G__41950;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41191 = conformed_args__39829__auto__;
var map__41191__$1 = ((((!((map__41191 == null)))?(((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41191):map__41191);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq41183){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41183));
});


fulcro.client.dom.script = (function fulcro$client$dom$script(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41951 = arguments.length;
var i__4500__auto___41952 = (0);
while(true){
if((i__4500__auto___41952 < len__4499__auto___41951)){
args__4502__auto__.push((arguments[i__4500__auto___41952]));

var G__41953 = (i__4500__auto___41952 + (1));
i__4500__auto___41952 = G__41953;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41201 = conformed_args__39829__auto__;
var map__41201__$1 = ((((!((map__41201 == null)))?(((((map__41201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41201):map__41201);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.script.cljs$lang$applyTo = (function (seq41200){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41200));
});


fulcro.client.dom.big = (function fulcro$client$dom$big(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41954 = arguments.length;
var i__4500__auto___41955 = (0);
while(true){
if((i__4500__auto___41955 < len__4499__auto___41954)){
args__4502__auto__.push((arguments[i__4500__auto___41955]));

var G__41956 = (i__4500__auto___41955 + (1));
i__4500__auto___41955 = G__41956;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41204 = conformed_args__39829__auto__;
var map__41204__$1 = ((((!((map__41204 == null)))?(((((map__41204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41204):map__41204);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41204__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41204__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41204__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.big.cljs$lang$applyTo = (function (seq41203){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41203));
});


fulcro.client.dom.button = (function fulcro$client$dom$button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41957 = arguments.length;
var i__4500__auto___41958 = (0);
while(true){
if((i__4500__auto___41958 < len__4499__auto___41957)){
args__4502__auto__.push((arguments[i__4500__auto___41958]));

var G__41959 = (i__4500__auto___41958 + (1));
i__4500__auto___41958 = G__41959;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41213 = conformed_args__39829__auto__;
var map__41213__$1 = ((((!((map__41213 == null)))?(((((map__41213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41213):map__41213);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.button.cljs$lang$applyTo = (function (seq41206){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41206));
});


fulcro.client.dom.wbr = (function fulcro$client$dom$wbr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41960 = arguments.length;
var i__4500__auto___41961 = (0);
while(true){
if((i__4500__auto___41961 < len__4499__auto___41960)){
args__4502__auto__.push((arguments[i__4500__auto___41961]));

var G__41962 = (i__4500__auto___41961 + (1));
i__4500__auto___41961 = G__41962;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41216 = conformed_args__39829__auto__;
var map__41216__$1 = ((((!((map__41216 == null)))?(((((map__41216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41216):map__41216);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq41215){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41215));
});


fulcro.client.dom.strong = (function fulcro$client$dom$strong(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41966 = arguments.length;
var i__4500__auto___41967 = (0);
while(true){
if((i__4500__auto___41967 < len__4499__auto___41966)){
args__4502__auto__.push((arguments[i__4500__auto___41967]));

var G__41968 = (i__4500__auto___41967 + (1));
i__4500__auto___41967 = G__41968;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41219 = conformed_args__39829__auto__;
var map__41219__$1 = ((((!((map__41219 == null)))?(((((map__41219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41219):map__41219);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41219__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41219__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41219__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq41218){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41218));
});


fulcro.client.dom.use = (function fulcro$client$dom$use(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41974 = arguments.length;
var i__4500__auto___41975 = (0);
while(true){
if((i__4500__auto___41975 < len__4499__auto___41974)){
args__4502__auto__.push((arguments[i__4500__auto___41975]));

var G__41976 = (i__4500__auto___41975 + (1));
i__4500__auto___41975 = G__41976;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41224 = conformed_args__39829__auto__;
var map__41224__$1 = ((((!((map__41224 == null)))?(((((map__41224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41224):map__41224);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.use.cljs$lang$applyTo = (function (seq41221){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41221));
});


fulcro.client.dom.li = (function fulcro$client$dom$li(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41982 = arguments.length;
var i__4500__auto___41983 = (0);
while(true){
if((i__4500__auto___41983 < len__4499__auto___41982)){
args__4502__auto__.push((arguments[i__4500__auto___41983]));

var G__41984 = (i__4500__auto___41983 + (1));
i__4500__auto___41983 = G__41984;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41228 = conformed_args__39829__auto__;
var map__41228__$1 = ((((!((map__41228 == null)))?(((((map__41228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41228):map__41228);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41228__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41228__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41228__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.li.cljs$lang$applyTo = (function (seq41226){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41226));
});


fulcro.client.dom.dt = (function fulcro$client$dom$dt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41988 = arguments.length;
var i__4500__auto___41989 = (0);
while(true){
if((i__4500__auto___41989 < len__4499__auto___41988)){
args__4502__auto__.push((arguments[i__4500__auto___41989]));

var G__41990 = (i__4500__auto___41989 + (1));
i__4500__auto___41989 = G__41990;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41231 = conformed_args__39829__auto__;
var map__41231__$1 = ((((!((map__41231 == null)))?(((((map__41231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41231):map__41231);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq41230){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41230));
});


fulcro.client.dom.td = (function fulcro$client$dom$td(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41992 = arguments.length;
var i__4500__auto___41993 = (0);
while(true){
if((i__4500__auto___41993 < len__4499__auto___41992)){
args__4502__auto__.push((arguments[i__4500__auto___41993]));

var G__41994 = (i__4500__auto___41993 + (1));
i__4500__auto___41993 = G__41994;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41240 = conformed_args__39829__auto__;
var map__41240__$1 = ((((!((map__41240 == null)))?(((((map__41240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41240):map__41240);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.td.cljs$lang$applyTo = (function (seq41238){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41238));
});


fulcro.client.dom.tr = (function fulcro$client$dom$tr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41995 = arguments.length;
var i__4500__auto___41996 = (0);
while(true){
if((i__4500__auto___41996 < len__4499__auto___41995)){
args__4502__auto__.push((arguments[i__4500__auto___41996]));

var G__41997 = (i__4500__auto___41996 + (1));
i__4500__auto___41996 = G__41997;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41262 = conformed_args__39829__auto__;
var map__41262__$1 = ((((!((map__41262 == null)))?(((((map__41262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41262):map__41262);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq41253){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41253));
});


fulcro.client.dom.circle = (function fulcro$client$dom$circle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41998 = arguments.length;
var i__4500__auto___41999 = (0);
while(true){
if((i__4500__auto___41999 < len__4499__auto___41998)){
args__4502__auto__.push((arguments[i__4500__auto___41999]));

var G__42000 = (i__4500__auto___41999 + (1));
i__4500__auto___41999 = G__42000;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41274 = conformed_args__39829__auto__;
var map__41274__$1 = ((((!((map__41274 == null)))?(((((map__41274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41274):map__41274);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq41268){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41268));
});


fulcro.client.dom.section = (function fulcro$client$dom$section(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42001 = arguments.length;
var i__4500__auto___42002 = (0);
while(true){
if((i__4500__auto___42002 < len__4499__auto___42001)){
args__4502__auto__.push((arguments[i__4500__auto___42002]));

var G__42003 = (i__4500__auto___42002 + (1));
i__4500__auto___42002 = G__42003;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41278 = conformed_args__39829__auto__;
var map__41278__$1 = ((((!((map__41278 == null)))?(((((map__41278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41278):map__41278);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.section.cljs$lang$applyTo = (function (seq41277){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41277));
});


fulcro.client.dom.th = (function fulcro$client$dom$th(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42004 = arguments.length;
var i__4500__auto___42005 = (0);
while(true){
if((i__4500__auto___42005 < len__4499__auto___42004)){
args__4502__auto__.push((arguments[i__4500__auto___42005]));

var G__42006 = (i__4500__auto___42005 + (1));
i__4500__auto___42005 = G__42006;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41284 = conformed_args__39829__auto__;
var map__41284__$1 = ((((!((map__41284 == null)))?(((((map__41284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41284):map__41284);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41284__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41284__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41284__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.th.cljs$lang$applyTo = (function (seq41281){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41281));
});


fulcro.client.dom.time = (function fulcro$client$dom$time(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42010 = arguments.length;
var i__4500__auto___42011 = (0);
while(true){
if((i__4500__auto___42011 < len__4499__auto___42010)){
args__4502__auto__.push((arguments[i__4500__auto___42011]));

var G__42012 = (i__4500__auto___42011 + (1));
i__4500__auto___42011 = G__42012;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41290 = conformed_args__39829__auto__;
var map__41290__$1 = ((((!((map__41290 == null)))?(((((map__41290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41290):map__41290);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.time.cljs$lang$applyTo = (function (seq41288){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41288));
});


fulcro.client.dom.optgroup = (function fulcro$client$dom$optgroup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42016 = arguments.length;
var i__4500__auto___42017 = (0);
while(true){
if((i__4500__auto___42017 < len__4499__auto___42016)){
args__4502__auto__.push((arguments[i__4500__auto___42017]));

var G__42018 = (i__4500__auto___42017 + (1));
i__4500__auto___42017 = G__42018;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41295 = conformed_args__39829__auto__;
var map__41295__$1 = ((((!((map__41295 == null)))?(((((map__41295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41295):map__41295);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41295__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41295__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41295__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq41293){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41293));
});


fulcro.client.dom.iframe = (function fulcro$client$dom$iframe(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42019 = arguments.length;
var i__4500__auto___42020 = (0);
while(true){
if((i__4500__auto___42020 < len__4499__auto___42019)){
args__4502__auto__.push((arguments[i__4500__auto___42020]));

var G__42021 = (i__4500__auto___42020 + (1));
i__4500__auto___42020 = G__42021;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41303 = conformed_args__39829__auto__;
var map__41303__$1 = ((((!((map__41303 == null)))?(((((map__41303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41303):map__41303);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41303__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq41302){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41302));
});


fulcro.client.dom.legend = (function fulcro$client$dom$legend(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42022 = arguments.length;
var i__4500__auto___42023 = (0);
while(true){
if((i__4500__auto___42023 < len__4499__auto___42022)){
args__4502__auto__.push((arguments[i__4500__auto___42023]));

var G__42026 = (i__4500__auto___42023 + (1));
i__4500__auto___42023 = G__42026;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41306 = conformed_args__39829__auto__;
var map__41306__$1 = ((((!((map__41306 == null)))?(((((map__41306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41306):map__41306);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq41305){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41305));
});


fulcro.client.dom.em = (function fulcro$client$dom$em(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42031 = arguments.length;
var i__4500__auto___42032 = (0);
while(true){
if((i__4500__auto___42032 < len__4499__auto___42031)){
args__4502__auto__.push((arguments[i__4500__auto___42032]));

var G__42034 = (i__4500__auto___42032 + (1));
i__4500__auto___42032 = G__42034;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41309 = conformed_args__39829__auto__;
var map__41309__$1 = ((((!((map__41309 == null)))?(((((map__41309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41309):map__41309);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.em.cljs$lang$applyTo = (function (seq41308){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41308));
});


fulcro.client.dom.kbd = (function fulcro$client$dom$kbd(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42038 = arguments.length;
var i__4500__auto___42039 = (0);
while(true){
if((i__4500__auto___42039 < len__4499__auto___42038)){
args__4502__auto__.push((arguments[i__4500__auto___42039]));

var G__42040 = (i__4500__auto___42039 + (1));
i__4500__auto___42039 = G__42040;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41314 = conformed_args__39829__auto__;
var map__41314__$1 = ((((!((map__41314 == null)))?(((((map__41314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41314):map__41314);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41314__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41314__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41314__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq41313){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41313));
});


fulcro.client.dom.article = (function fulcro$client$dom$article(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42041 = arguments.length;
var i__4500__auto___42042 = (0);
while(true){
if((i__4500__auto___42042 < len__4499__auto___42041)){
args__4502__auto__.push((arguments[i__4500__auto___42042]));

var G__42043 = (i__4500__auto___42042 + (1));
i__4500__auto___42042 = G__42043;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41317 = conformed_args__39829__auto__;
var map__41317__$1 = ((((!((map__41317 == null)))?(((((map__41317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41317):map__41317);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41317__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41317__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41317__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.article.cljs$lang$applyTo = (function (seq41316){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41316));
});


fulcro.client.dom.clipPath = (function fulcro$client$dom$clipPath(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42044 = arguments.length;
var i__4500__auto___42045 = (0);
while(true){
if((i__4500__auto___42045 < len__4499__auto___42044)){
args__4502__auto__.push((arguments[i__4500__auto___42045]));

var G__42046 = (i__4500__auto___42045 + (1));
i__4500__auto___42045 = G__42046;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41321 = conformed_args__39829__auto__;
var map__41321__$1 = ((((!((map__41321 == null)))?(((((map__41321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41321):map__41321);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq41320){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41320));
});


fulcro.client.dom.abbr = (function fulcro$client$dom$abbr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42054 = arguments.length;
var i__4500__auto___42055 = (0);
while(true){
if((i__4500__auto___42055 < len__4499__auto___42054)){
args__4502__auto__.push((arguments[i__4500__auto___42055]));

var G__42056 = (i__4500__auto___42055 + (1));
i__4500__auto___42055 = G__42056;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41324 = conformed_args__39829__auto__;
var map__41324__$1 = ((((!((map__41324 == null)))?(((((map__41324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41324):map__41324);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41324__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq41323){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41323));
});


fulcro.client.dom.source = (function fulcro$client$dom$source(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42057 = arguments.length;
var i__4500__auto___42059 = (0);
while(true){
if((i__4500__auto___42059 < len__4499__auto___42057)){
args__4502__auto__.push((arguments[i__4500__auto___42059]));

var G__42061 = (i__4500__auto___42059 + (1));
i__4500__auto___42059 = G__42061;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41327 = conformed_args__39829__auto__;
var map__41327__$1 = ((((!((map__41327 == null)))?(((((map__41327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41327):map__41327);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.source.cljs$lang$applyTo = (function (seq41326){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41326));
});


fulcro.client.dom.output = (function fulcro$client$dom$output(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42067 = arguments.length;
var i__4500__auto___42068 = (0);
while(true){
if((i__4500__auto___42068 < len__4499__auto___42067)){
args__4502__auto__.push((arguments[i__4500__auto___42068]));

var G__42069 = (i__4500__auto___42068 + (1));
i__4500__auto___42068 = G__42069;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41331 = conformed_args__39829__auto__;
var map__41331__$1 = ((((!((map__41331 == null)))?(((((map__41331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41331):map__41331);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41331__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41331__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41331__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.output.cljs$lang$applyTo = (function (seq41329){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41329));
});


fulcro.client.dom.header = (function fulcro$client$dom$header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42070 = arguments.length;
var i__4500__auto___42071 = (0);
while(true){
if((i__4500__auto___42071 < len__4499__auto___42070)){
args__4502__auto__.push((arguments[i__4500__auto___42071]));

var G__42072 = (i__4500__auto___42071 + (1));
i__4500__auto___42071 = G__42072;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41342 = conformed_args__39829__auto__;
var map__41342__$1 = ((((!((map__41342 == null)))?(((((map__41342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41342):map__41342);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.header.cljs$lang$applyTo = (function (seq41337){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41337));
});


fulcro.client.dom.datalist = (function fulcro$client$dom$datalist(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42073 = arguments.length;
var i__4500__auto___42078 = (0);
while(true){
if((i__4500__auto___42078 < len__4499__auto___42073)){
args__4502__auto__.push((arguments[i__4500__auto___42078]));

var G__42079 = (i__4500__auto___42078 + (1));
i__4500__auto___42078 = G__42079;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41345 = conformed_args__39829__auto__;
var map__41345__$1 = ((((!((map__41345 == null)))?(((((map__41345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41345):map__41345);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41345__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41345__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41345__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq41344){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41344));
});


fulcro.client.dom.tfoot = (function fulcro$client$dom$tfoot(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42088 = arguments.length;
var i__4500__auto___42089 = (0);
while(true){
if((i__4500__auto___42089 < len__4499__auto___42088)){
args__4502__auto__.push((arguments[i__4500__auto___42089]));

var G__42090 = (i__4500__auto___42089 + (1));
i__4500__auto___42089 = G__42090;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41348 = conformed_args__39829__auto__;
var map__41348__$1 = ((((!((map__41348 == null)))?(((((map__41348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41348):map__41348);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41348__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq41347){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41347));
});


fulcro.client.dom.s = (function fulcro$client$dom$s(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42091 = arguments.length;
var i__4500__auto___42092 = (0);
while(true){
if((i__4500__auto___42092 < len__4499__auto___42091)){
args__4502__auto__.push((arguments[i__4500__auto___42092]));

var G__42093 = (i__4500__auto___42092 + (1));
i__4500__auto___42092 = G__42093;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41351 = conformed_args__39829__auto__;
var map__41351__$1 = ((((!((map__41351 == null)))?(((((map__41351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41351):map__41351);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.s.cljs$lang$applyTo = (function (seq41350){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41350));
});


fulcro.client.dom.ins = (function fulcro$client$dom$ins(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42094 = arguments.length;
var i__4500__auto___42095 = (0);
while(true){
if((i__4500__auto___42095 < len__4499__auto___42094)){
args__4502__auto__.push((arguments[i__4500__auto___42095]));

var G__42096 = (i__4500__auto___42095 + (1));
i__4500__auto___42095 = G__42096;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41358 = conformed_args__39829__auto__;
var map__41358__$1 = ((((!((map__41358 == null)))?(((((map__41358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41358):map__41358);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq41353){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41353));
});


fulcro.client.dom.footer = (function fulcro$client$dom$footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42103 = arguments.length;
var i__4500__auto___42104 = (0);
while(true){
if((i__4500__auto___42104 < len__4499__auto___42103)){
args__4502__auto__.push((arguments[i__4500__auto___42104]));

var G__42105 = (i__4500__auto___42104 + (1));
i__4500__auto___42104 = G__42105;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41362 = conformed_args__39829__auto__;
var map__41362__$1 = ((((!((map__41362 == null)))?(((((map__41362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41362):map__41362);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq41361){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41361));
});


fulcro.client.dom.title = (function fulcro$client$dom$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42106 = arguments.length;
var i__4500__auto___42107 = (0);
while(true){
if((i__4500__auto___42107 < len__4499__auto___42106)){
args__4502__auto__.push((arguments[i__4500__auto___42107]));

var G__42108 = (i__4500__auto___42107 + (1));
i__4500__auto___42107 = G__42108;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41366 = conformed_args__39829__auto__;
var map__41366__$1 = ((((!((map__41366 == null)))?(((((map__41366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41366):map__41366);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41366__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41366__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41366__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.title.cljs$lang$applyTo = (function (seq41364){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41364));
});


fulcro.client.dom.h5 = (function fulcro$client$dom$h5(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42109 = arguments.length;
var i__4500__auto___42110 = (0);
while(true){
if((i__4500__auto___42110 < len__4499__auto___42109)){
args__4502__auto__.push((arguments[i__4500__auto___42110]));

var G__42111 = (i__4500__auto___42110 + (1));
i__4500__auto___42110 = G__42111;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41372 = conformed_args__39829__auto__;
var map__41372__$1 = ((((!((map__41372 == null)))?(((((map__41372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41372):map__41372);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq41369){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41369));
});


fulcro.client.dom.canvas = (function fulcro$client$dom$canvas(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42112 = arguments.length;
var i__4500__auto___42113 = (0);
while(true){
if((i__4500__auto___42113 < len__4499__auto___42112)){
args__4502__auto__.push((arguments[i__4500__auto___42113]));

var G__42114 = (i__4500__auto___42113 + (1));
i__4500__auto___42113 = G__42114;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41378 = conformed_args__39829__auto__;
var map__41378__$1 = ((((!((map__41378 == null)))?(((((map__41378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41378):map__41378);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41378__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41378__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41378__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq41375){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41375));
});


fulcro.client.dom.param = (function fulcro$client$dom$param(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42115 = arguments.length;
var i__4500__auto___42116 = (0);
while(true){
if((i__4500__auto___42116 < len__4499__auto___42115)){
args__4502__auto__.push((arguments[i__4500__auto___42116]));

var G__42117 = (i__4500__auto___42116 + (1));
i__4500__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41381 = conformed_args__39829__auto__;
var map__41381__$1 = ((((!((map__41381 == null)))?(((((map__41381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41381):map__41381);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41381__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41381__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41381__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.param.cljs$lang$applyTo = (function (seq41380){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41380));
});


fulcro.client.dom.div = (function fulcro$client$dom$div(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42118 = arguments.length;
var i__4500__auto___42119 = (0);
while(true){
if((i__4500__auto___42119 < len__4499__auto___42118)){
args__4502__auto__.push((arguments[i__4500__auto___42119]));

var G__42120 = (i__4500__auto___42119 + (1));
i__4500__auto___42119 = G__42120;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41386 = conformed_args__39829__auto__;
var map__41386__$1 = ((((!((map__41386 == null)))?(((((map__41386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41386):map__41386);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.div.cljs$lang$applyTo = (function (seq41383){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41383));
});


fulcro.client.dom.option = (function fulcro$client$dom$option(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42121 = arguments.length;
var i__4500__auto___42122 = (0);
while(true){
if((i__4500__auto___42122 < len__4499__auto___42121)){
args__4502__auto__.push((arguments[i__4500__auto___42122]));

var G__42123 = (i__4500__auto___42122 + (1));
i__4500__auto___42122 = G__42123;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41390 = conformed_args__39829__auto__;
var map__41390__$1 = ((((!((map__41390 == null)))?(((((map__41390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41390):map__41390);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41390__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41390__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41390__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.option.cljs$lang$applyTo = (function (seq41389){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41389));
});


fulcro.client.dom.summary = (function fulcro$client$dom$summary(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42124 = arguments.length;
var i__4500__auto___42125 = (0);
while(true){
if((i__4500__auto___42125 < len__4499__auto___42124)){
args__4502__auto__.push((arguments[i__4500__auto___42125]));

var G__42126 = (i__4500__auto___42125 + (1));
i__4500__auto___42125 = G__42126;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41398 = conformed_args__39829__auto__;
var map__41398__$1 = ((((!((map__41398 == null)))?(((((map__41398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41398):map__41398);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41398__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41398__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41398__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq41396){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41396));
});


fulcro.client.dom.samp = (function fulcro$client$dom$samp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42127 = arguments.length;
var i__4500__auto___42128 = (0);
while(true){
if((i__4500__auto___42128 < len__4499__auto___42127)){
args__4502__auto__.push((arguments[i__4500__auto___42128]));

var G__42129 = (i__4500__auto___42128 + (1));
i__4500__auto___42128 = G__42129;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41401 = conformed_args__39829__auto__;
var map__41401__$1 = ((((!((map__41401 == null)))?(((((map__41401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41401):map__41401);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq41400){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41400));
});


fulcro.client.dom.small = (function fulcro$client$dom$small(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42130 = arguments.length;
var i__4500__auto___42131 = (0);
while(true){
if((i__4500__auto___42131 < len__4499__auto___42130)){
args__4502__auto__.push((arguments[i__4500__auto___42131]));

var G__42132 = (i__4500__auto___42131 + (1));
i__4500__auto___42131 = G__42132;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41411 = conformed_args__39829__auto__;
var map__41411__$1 = ((((!((map__41411 == null)))?(((((map__41411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41411):map__41411);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.small.cljs$lang$applyTo = (function (seq41410){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41410));
});


fulcro.client.dom.style = (function fulcro$client$dom$style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42133 = arguments.length;
var i__4500__auto___42134 = (0);
while(true){
if((i__4500__auto___42134 < len__4499__auto___42133)){
args__4502__auto__.push((arguments[i__4500__auto___42134]));

var G__42135 = (i__4500__auto___42134 + (1));
i__4500__auto___42134 = G__42135;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41417 = conformed_args__39829__auto__;
var map__41417__$1 = ((((!((map__41417 == null)))?(((((map__41417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41417):map__41417);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41417__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.style.cljs$lang$applyTo = (function (seq41413){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41413));
});


fulcro.client.dom.textarea = (function fulcro$client$dom$textarea(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42136 = arguments.length;
var i__4500__auto___42137 = (0);
while(true){
if((i__4500__auto___42137 < len__4499__auto___42136)){
args__4502__auto__.push((arguments[i__4500__auto___42137]));

var G__42138 = (i__4500__auto___42137 + (1));
i__4500__auto___42137 = G__42138;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41424 = conformed_args__39829__auto__;
var map__41424__$1 = ((((!((map__41424 == null)))?(((((map__41424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41424):map__41424);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.textarea.cljs$lang$applyTo = (function (seq41423){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41423));
});


fulcro.client.dom.h4 = (function fulcro$client$dom$h4(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42139 = arguments.length;
var i__4500__auto___42140 = (0);
while(true){
if((i__4500__auto___42140 < len__4499__auto___42139)){
args__4502__auto__.push((arguments[i__4500__auto___42140]));

var G__42141 = (i__4500__auto___42140 + (1));
i__4500__auto___42140 = G__42141;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41427 = conformed_args__39829__auto__;
var map__41427__$1 = ((((!((map__41427 == null)))?(((((map__41427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41427):map__41427);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41427__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq41426){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41426));
});


fulcro.client.dom.head = (function fulcro$client$dom$head(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42142 = arguments.length;
var i__4500__auto___42143 = (0);
while(true){
if((i__4500__auto___42143 < len__4499__auto___42142)){
args__4502__auto__.push((arguments[i__4500__auto___42143]));

var G__42144 = (i__4500__auto___42143 + (1));
i__4500__auto___42143 = G__42144;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41437 = conformed_args__39829__auto__;
var map__41437__$1 = ((((!((map__41437 == null)))?(((((map__41437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41437):map__41437);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.head.cljs$lang$applyTo = (function (seq41429){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41429));
});


fulcro.client.dom.g = (function fulcro$client$dom$g(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42145 = arguments.length;
var i__4500__auto___42146 = (0);
while(true){
if((i__4500__auto___42146 < len__4499__auto___42145)){
args__4502__auto__.push((arguments[i__4500__auto___42146]));

var G__42147 = (i__4500__auto___42146 + (1));
i__4500__auto___42146 = G__42147;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41445 = conformed_args__39829__auto__;
var map__41445__$1 = ((((!((map__41445 == null)))?(((((map__41445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41445):map__41445);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41445__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41445__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.g.cljs$lang$applyTo = (function (seq41440){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41440));
});


fulcro.client.dom.stop = (function fulcro$client$dom$stop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42148 = arguments.length;
var i__4500__auto___42149 = (0);
while(true){
if((i__4500__auto___42149 < len__4499__auto___42148)){
args__4502__auto__.push((arguments[i__4500__auto___42149]));

var G__42150 = (i__4500__auto___42149 + (1));
i__4500__auto___42149 = G__42150;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41459 = conformed_args__39829__auto__;
var map__41459__$1 = ((((!((map__41459 == null)))?(((((map__41459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41459):map__41459);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq41458){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41458));
});


fulcro.client.dom.var$ = (function fulcro$client$dom$var(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42151 = arguments.length;
var i__4500__auto___42152 = (0);
while(true){
if((i__4500__auto___42152 < len__4499__auto___42151)){
args__4502__auto__.push((arguments[i__4500__auto___42152]));

var G__42153 = (i__4500__auto___42152 + (1));
i__4500__auto___42152 = G__42153;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41467 = conformed_args__39829__auto__;
var map__41467__$1 = ((((!((map__41467 == null)))?(((((map__41467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41467):map__41467);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq41466){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41466));
});


fulcro.client.dom.tspan = (function fulcro$client$dom$tspan(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42154 = arguments.length;
var i__4500__auto___42155 = (0);
while(true){
if((i__4500__auto___42155 < len__4499__auto___42154)){
args__4502__auto__.push((arguments[i__4500__auto___42155]));

var G__42156 = (i__4500__auto___42155 + (1));
i__4500__auto___42155 = G__42156;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41476 = conformed_args__39829__auto__;
var map__41476__$1 = ((((!((map__41476 == null)))?(((((map__41476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41476):map__41476);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq41474){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41474));
});


fulcro.client.dom.ol = (function fulcro$client$dom$ol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42157 = arguments.length;
var i__4500__auto___42158 = (0);
while(true){
if((i__4500__auto___42158 < len__4499__auto___42157)){
args__4502__auto__.push((arguments[i__4500__auto___42158]));

var G__42159 = (i__4500__auto___42158 + (1));
i__4500__auto___42158 = G__42159;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41480 = conformed_args__39829__auto__;
var map__41480__$1 = ((((!((map__41480 == null)))?(((((map__41480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41480):map__41480);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq41479){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41479));
});


fulcro.client.dom.details = (function fulcro$client$dom$details(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42160 = arguments.length;
var i__4500__auto___42161 = (0);
while(true){
if((i__4500__auto___42161 < len__4499__auto___42160)){
args__4502__auto__.push((arguments[i__4500__auto___42161]));

var G__42162 = (i__4500__auto___42161 + (1));
i__4500__auto___42161 = G__42162;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41486 = conformed_args__39829__auto__;
var map__41486__$1 = ((((!((map__41486 == null)))?(((((map__41486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41486):map__41486);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.details.cljs$lang$applyTo = (function (seq41485){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41485));
});


fulcro.client.dom.line = (function fulcro$client$dom$line(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42163 = arguments.length;
var i__4500__auto___42164 = (0);
while(true){
if((i__4500__auto___42164 < len__4499__auto___42163)){
args__4502__auto__.push((arguments[i__4500__auto___42164]));

var G__42165 = (i__4500__auto___42164 + (1));
i__4500__auto___42164 = G__42165;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41491 = conformed_args__39829__auto__;
var map__41491__$1 = ((((!((map__41491 == null)))?(((((map__41491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41491):map__41491);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41491__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41491__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41491__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.line.cljs$lang$applyTo = (function (seq41489){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41489));
});


fulcro.client.dom.col = (function fulcro$client$dom$col(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42166 = arguments.length;
var i__4500__auto___42167 = (0);
while(true){
if((i__4500__auto___42167 < len__4499__auto___42166)){
args__4502__auto__.push((arguments[i__4500__auto___42167]));

var G__42168 = (i__4500__auto___42167 + (1));
i__4500__auto___42167 = G__42168;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41498 = conformed_args__39829__auto__;
var map__41498__$1 = ((((!((map__41498 == null)))?(((((map__41498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41498):map__41498);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.col.cljs$lang$applyTo = (function (seq41493){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41493));
});


fulcro.client.dom.label = (function fulcro$client$dom$label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42169 = arguments.length;
var i__4500__auto___42170 = (0);
while(true){
if((i__4500__auto___42170 < len__4499__auto___42169)){
args__4502__auto__.push((arguments[i__4500__auto___42170]));

var G__42171 = (i__4500__auto___42170 + (1));
i__4500__auto___42170 = G__42171;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41506 = conformed_args__39829__auto__;
var map__41506__$1 = ((((!((map__41506 == null)))?(((((map__41506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41506):map__41506);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.label.cljs$lang$applyTo = (function (seq41503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41503));
});


fulcro.client.dom.picture = (function fulcro$client$dom$picture(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42172 = arguments.length;
var i__4500__auto___42173 = (0);
while(true){
if((i__4500__auto___42173 < len__4499__auto___42172)){
args__4502__auto__.push((arguments[i__4500__auto___42173]));

var G__42174 = (i__4500__auto___42173 + (1));
i__4500__auto___42173 = G__42174;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41510 = conformed_args__39829__auto__;
var map__41510__$1 = ((((!((map__41510 == null)))?(((((map__41510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41510):map__41510);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq41509){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41509));
});


fulcro.client.dom.rt = (function fulcro$client$dom$rt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42175 = arguments.length;
var i__4500__auto___42176 = (0);
while(true){
if((i__4500__auto___42176 < len__4499__auto___42175)){
args__4502__auto__.push((arguments[i__4500__auto___42176]));

var G__42177 = (i__4500__auto___42176 + (1));
i__4500__auto___42176 = G__42177;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41513 = conformed_args__39829__auto__;
var map__41513__$1 = ((((!((map__41513 == null)))?(((((map__41513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41513):map__41513);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq41512){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41512));
});


fulcro.client.dom.h6 = (function fulcro$client$dom$h6(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42178 = arguments.length;
var i__4500__auto___42179 = (0);
while(true){
if((i__4500__auto___42179 < len__4499__auto___42178)){
args__4502__auto__.push((arguments[i__4500__auto___42179]));

var G__42180 = (i__4500__auto___42179 + (1));
i__4500__auto___42179 = G__42180;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41517 = conformed_args__39829__auto__;
var map__41517__$1 = ((((!((map__41517 == null)))?(((((map__41517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41517):map__41517);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq41516){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41516));
});


fulcro.client.dom.link = (function fulcro$client$dom$link(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42181 = arguments.length;
var i__4500__auto___42182 = (0);
while(true){
if((i__4500__auto___42182 < len__4499__auto___42181)){
args__4502__auto__.push((arguments[i__4500__auto___42182]));

var G__42183 = (i__4500__auto___42182 + (1));
i__4500__auto___42182 = G__42183;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41529 = conformed_args__39829__auto__;
var map__41529__$1 = ((((!((map__41529 == null)))?(((((map__41529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41529):map__41529);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.link.cljs$lang$applyTo = (function (seq41526){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41526));
});


fulcro.client.dom.defs = (function fulcro$client$dom$defs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42184 = arguments.length;
var i__4500__auto___42185 = (0);
while(true){
if((i__4500__auto___42185 < len__4499__auto___42184)){
args__4502__auto__.push((arguments[i__4500__auto___42185]));

var G__42186 = (i__4500__auto___42185 + (1));
i__4500__auto___42185 = G__42186;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41532 = conformed_args__39829__auto__;
var map__41532__$1 = ((((!((map__41532 == null)))?(((((map__41532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41532):map__41532);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq41531){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41531));
});


fulcro.client.dom.colgroup = (function fulcro$client$dom$colgroup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42187 = arguments.length;
var i__4500__auto___42188 = (0);
while(true){
if((i__4500__auto___42188 < len__4499__auto___42187)){
args__4502__auto__.push((arguments[i__4500__auto___42188]));

var G__42189 = (i__4500__auto___42188 + (1));
i__4500__auto___42188 = G__42189;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41536 = conformed_args__39829__auto__;
var map__41536__$1 = ((((!((map__41536 == null)))?(((((map__41536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41536):map__41536);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq41534){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41534));
});


fulcro.client.dom.meter = (function fulcro$client$dom$meter(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42190 = arguments.length;
var i__4500__auto___42191 = (0);
while(true){
if((i__4500__auto___42191 < len__4499__auto___42190)){
args__4502__auto__.push((arguments[i__4500__auto___42191]));

var G__42192 = (i__4500__auto___42191 + (1));
i__4500__auto___42191 = G__42192;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41539 = conformed_args__39829__auto__;
var map__41539__$1 = ((((!((map__41539 == null)))?(((((map__41539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41539):map__41539);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41539__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq41538){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41538));
});


fulcro.client.dom.bdo = (function fulcro$client$dom$bdo(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42193 = arguments.length;
var i__4500__auto___42194 = (0);
while(true){
if((i__4500__auto___42194 < len__4499__auto___42193)){
args__4502__auto__.push((arguments[i__4500__auto___42194]));

var G__42195 = (i__4500__auto___42194 + (1));
i__4500__auto___42194 = G__42195;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41542 = conformed_args__39829__auto__;
var map__41542__$1 = ((((!((map__41542 == null)))?(((((map__41542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41542):map__41542);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq41541){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41541));
});


fulcro.client.dom.b = (function fulcro$client$dom$b(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42196 = arguments.length;
var i__4500__auto___42197 = (0);
while(true){
if((i__4500__auto___42197 < len__4499__auto___42196)){
args__4502__auto__.push((arguments[i__4500__auto___42197]));

var G__42198 = (i__4500__auto___42197 + (1));
i__4500__auto___42197 = G__42198;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41545 = conformed_args__39829__auto__;
var map__41545__$1 = ((((!((map__41545 == null)))?(((((map__41545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41545):map__41545);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.b.cljs$lang$applyTo = (function (seq41544){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41544));
});


fulcro.client.dom.svg = (function fulcro$client$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42199 = arguments.length;
var i__4500__auto___42200 = (0);
while(true){
if((i__4500__auto___42200 < len__4499__auto___42199)){
args__4502__auto__.push((arguments[i__4500__auto___42200]));

var G__42201 = (i__4500__auto___42200 + (1));
i__4500__auto___42200 = G__42201;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41548 = conformed_args__39829__auto__;
var map__41548__$1 = ((((!((map__41548 == null)))?(((((map__41548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41548):map__41548);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41548__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41548__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq41547){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41547));
});


fulcro.client.dom.ellipse = (function fulcro$client$dom$ellipse(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42202 = arguments.length;
var i__4500__auto___42203 = (0);
while(true){
if((i__4500__auto___42203 < len__4499__auto___42202)){
args__4502__auto__.push((arguments[i__4500__auto___42203]));

var G__42204 = (i__4500__auto___42203 + (1));
i__4500__auto___42203 = G__42204;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41553 = conformed_args__39829__auto__;
var map__41553__$1 = ((((!((map__41553 == null)))?(((((map__41553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41553):map__41553);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41553__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41553__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41553__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq41552){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41552));
});


fulcro.client.dom.code = (function fulcro$client$dom$code(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42205 = arguments.length;
var i__4500__auto___42206 = (0);
while(true){
if((i__4500__auto___42206 < len__4499__auto___42205)){
args__4502__auto__.push((arguments[i__4500__auto___42206]));

var G__42207 = (i__4500__auto___42206 + (1));
i__4500__auto___42206 = G__42207;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41556 = conformed_args__39829__auto__;
var map__41556__$1 = ((((!((map__41556 == null)))?(((((map__41556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41556):map__41556);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.code.cljs$lang$applyTo = (function (seq41555){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41555));
});


fulcro.client.dom.dialog = (function fulcro$client$dom$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42208 = arguments.length;
var i__4500__auto___42209 = (0);
while(true){
if((i__4500__auto___42209 < len__4499__auto___42208)){
args__4502__auto__.push((arguments[i__4500__auto___42209]));

var G__42210 = (i__4500__auto___42209 + (1));
i__4500__auto___42209 = G__42210;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41560 = conformed_args__39829__auto__;
var map__41560__$1 = ((((!((map__41560 == null)))?(((((map__41560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41560):map__41560);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq41559){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41559));
});


fulcro.client.dom.linearGradient = (function fulcro$client$dom$linearGradient(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42211 = arguments.length;
var i__4500__auto___42212 = (0);
while(true){
if((i__4500__auto___42212 < len__4499__auto___42211)){
args__4502__auto__.push((arguments[i__4500__auto___42212]));

var G__42213 = (i__4500__auto___42212 + (1));
i__4500__auto___42212 = G__42213;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41563 = conformed_args__39829__auto__;
var map__41563__$1 = ((((!((map__41563 == null)))?(((((map__41563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41563):map__41563);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41563__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq41562){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41562));
});


fulcro.client.dom.noscript = (function fulcro$client$dom$noscript(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42214 = arguments.length;
var i__4500__auto___42215 = (0);
while(true){
if((i__4500__auto___42215 < len__4499__auto___42214)){
args__4502__auto__.push((arguments[i__4500__auto___42215]));

var G__42216 = (i__4500__auto___42215 + (1));
i__4500__auto___42215 = G__42216;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41566 = conformed_args__39829__auto__;
var map__41566__$1 = ((((!((map__41566 == null)))?(((((map__41566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41566):map__41566);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq41565){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41565));
});


fulcro.client.dom.h2 = (function fulcro$client$dom$h2(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42217 = arguments.length;
var i__4500__auto___42218 = (0);
while(true){
if((i__4500__auto___42218 < len__4499__auto___42217)){
args__4502__auto__.push((arguments[i__4500__auto___42218]));

var G__42219 = (i__4500__auto___42218 + (1));
i__4500__auto___42218 = G__42219;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41569 = conformed_args__39829__auto__;
var map__41569__$1 = ((((!((map__41569 == null)))?(((((map__41569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41569):map__41569);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq41568){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41568));
});


fulcro.client.dom.area = (function fulcro$client$dom$area(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42220 = arguments.length;
var i__4500__auto___42221 = (0);
while(true){
if((i__4500__auto___42221 < len__4499__auto___42220)){
args__4502__auto__.push((arguments[i__4500__auto___42221]));

var G__42222 = (i__4500__auto___42221 + (1));
i__4500__auto___42221 = G__42222;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41572 = conformed_args__39829__auto__;
var map__41572__$1 = ((((!((map__41572 == null)))?(((((map__41572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41572):map__41572);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.area.cljs$lang$applyTo = (function (seq41571){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41571));
});


fulcro.client.dom.br = (function fulcro$client$dom$br(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42223 = arguments.length;
var i__4500__auto___42224 = (0);
while(true){
if((i__4500__auto___42224 < len__4499__auto___42223)){
args__4502__auto__.push((arguments[i__4500__auto___42224]));

var G__42225 = (i__4500__auto___42224 + (1));
i__4500__auto___42224 = G__42225;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__41575 = conformed_args__39829__auto__;
var map__41575__$1 = ((((!((map__41575 == null)))?(((((map__41575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41575):map__41575);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.dom.br.cljs$lang$applyTo = (function (seq41574){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41574));
});


//# sourceMappingURL=fulcro.client.dom.js.map

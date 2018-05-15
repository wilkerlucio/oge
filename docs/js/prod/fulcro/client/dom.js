// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('fulcro.util');
goog.require('goog.object');
goog.require('fulcro.client.dom_common');


































































































































fulcro.client.dom.element_marker = (function (){var G__24458 = React.createElement("div",null);
var G__24459 = "$$typeof";
return goog.object.get(G__24458,G__24459);
})();
/**
 * Returns true if the given arg is a react element.
 */
fulcro.client.dom.element_QMARK_ = (function fulcro$client$dom$element_QMARK_(x){
return (cljs.core.object_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom.element_marker,goog.object.get(x,"$$typeof")));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$css,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.cst$kw$attrs,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24464_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_)))),cljs.core.cst$kw$js_DASH_object,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24466_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_object_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_)))))),cljs.core.cst$kw$children,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$collection,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24467_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_array_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_))),cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$css,cljs.core.cst$kw$attrs,cljs.core.cst$kw$children], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nil,cljs.core.cst$kw$map,cljs.core.cst$kw$js_DASH_object], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$_PERCENT_)))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_object_QMARK_,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$_PERCENT_))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nil_QMARK_,(function (p1__24464_SHARP_){
return (cljs.core.map_QMARK_(p1__24464_SHARP_)) && (cljs.core.not(fulcro.client.dom.element_QMARK_(p1__24464_SHARP_)));
}),(function (p1__24466_SHARP_){
return (cljs.core.object_QMARK_(p1__24466_SHARP_)) && (cljs.core.not(fulcro.client.dom.element_QMARK_(p1__24466_SHARP_)));
})], null),null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24464_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_)))),cljs.core.cst$kw$js_DASH_object,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24466_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_object_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_)))))),cljs.spec.alpha.rep_impl(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$collection,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24467_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_array_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_))),cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$number,cljs.core.cst$kw$collection,cljs.core.cst$kw$nil,cljs.core.cst$kw$element], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_array_QMARK_,cljs.core.cst$sym$_PERCENT_))),cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,(function (p1__24467_SHARP_){
return (cljs.core.vector_QMARK_(p1__24467_SHARP_)) || (cljs.core.seq_QMARK_(p1__24467_SHARP_)) || (cljs.core.array_QMARK_(p1__24467_SHARP_));
}),cljs.core.nil_QMARK_,fulcro.client.dom.element_QMARK_], null),null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.cst$sym$cljs$core_SLASH_keyword_QMARK_),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$map,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24464_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24464_SHARP_)))),cljs.core.cst$kw$js_DASH_object,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24466_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_and,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_object_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_not,cljs.core.list(cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_,cljs.core.cst$sym$p1__24466_SHARP_)))))),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_or,cljs.core.cst$kw$string,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.cst$kw$number,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,cljs.core.cst$kw$collection,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__24467_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_or,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_seq_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_array_QMARK_,cljs.core.cst$sym$p1__24467_SHARP_))),cljs.core.cst$kw$nil,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,cljs.core.cst$kw$element,cljs.core.cst$sym$fulcro$client$dom_SLASH_element_QMARK_))], null)));
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
var G__24515 = arguments.length;
switch (G__24515) {
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
var G__24517 = component.refs;
var G__24517__$1 = (((G__24517 == null))?null:goog.object.get(G__24517,name));
if((G__24517__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__24517__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__24523 = arguments.length;
switch (G__24523) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12107__auto__ = [];
var len__12084__auto___24535 = arguments.length;
var i__12085__auto___24536 = (0);
while(true){
if((i__12085__auto___24536 < len__12084__auto___24535)){
args_arr__12107__auto__.push((arguments[i__12085__auto___24536]));

var G__24537 = (i__12085__auto___24536 + (1));
i__12085__auto___24536 = G__24537;
continue;
} else {
}
break;
}

var argseq__12108__auto__ = (new cljs.core.IndexedSeq(args_arr__12107__auto__.slice((2)),(0),null));
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12108__auto__);

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

fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq24520){
var G__24521 = cljs.core.first(seq24520);
var seq24520__$1 = cljs.core.next(seq24520);
var G__24522 = cljs.core.first(seq24520__$1);
var seq24520__$2 = cljs.core.next(seq24520__$1);
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic(G__24521,G__24522,seq24520__$2);
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
var G__24538_24541 = next_state;
var G__24539_24542 = next_props;
var G__24540_24543 = ({"onChange": on_change});
goog.object.extend(G__24538_24541,G__24539_24542,G__24540_24543);

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
var G__24545_24572 = state;
var G__24546_24573 = props;
var G__24547_24574 = ({"onChange": (function (){var G__24548 = goog.object.get(this$,"onChange");
var G__24549 = this$;
return goog.bind(G__24548,G__24549);
})()});
goog.object.extend(G__24545_24572,G__24546_24573,G__24547_24574);

goog.object.remove(state,"inputRef");

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x24559_24576 = ctor.prototype;
x24559_24576.onChange = ((function (x24559_24576,ctor){
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
});})(x24559_24576,ctor))
;

x24559_24576.componentWillReceiveProps = ((function (x24559_24576,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var element_value = (function (){var G__24563 = ReactDOM.findDOMNode(this$);
var G__24564 = "value";
return goog.object.get(G__24563,G__24564);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x24559_24576,ctor))
;

x24559_24576.render = ((function (x24559_24576,ctor){
return (function (){
var this$ = this;
var G__24565 = element;
var G__24566 = this$.state;
return React.createElement(G__24565,G__24566);
});})(x24559_24576,ctor))
;


var real_factory = React.createFactory(ctor);
return ((function (real_factory,ctor){
return (function() { 
var G__24583__delegate = function (props,children){
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
var G__24583 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__24588__i = 0, G__24588__a = new Array(arguments.length -  1);
while (G__24588__i < G__24588__a.length) {G__24588__a[G__24588__i] = arguments[G__24588__i + 1]; ++G__24588__i;}
  children = new cljs.core.IndexedSeq(G__24588__a,0,null);
} 
return G__24583__delegate.call(this,props,children);};
G__24583.cljs$lang$maxFixedArity = 1;
G__24583.cljs$lang$applyTo = (function (arglist__24589){
var props = cljs.core.first(arglist__24589);
var children = cljs.core.rest(arglist__24589);
return G__24583__delegate(props,children);
});
G__24583.cljs$core$IFn$_invoke$arity$variadic = G__24583__delegate;
return G__24583;
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
var G__24598 = tag;
switch (G__24598) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24598)].join('')));

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
var G__24615 = arguments.length;
switch (G__24615) {
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
var vec__24620 = args;
var seq__24621 = cljs.core.seq(vec__24620);
var first__24622 = cljs.core.first(seq__24621);
var seq__24621__$1 = cljs.core.next(seq__24621);
var head = first__24622;
var tail = seq__24621__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__24624 = (function (){var G__24625 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__24625,tail);

return G__24625;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24624) : f.call(null,G__24624));
} else {
if(cljs.core.truth_(fulcro.client.dom.element_QMARK_(head))){
var G__24626 = (function (){var G__24627 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__24627,args);

return G__24627;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24626) : f.call(null,G__24626));
} else {
if(cljs.core.object_QMARK_(head)){
var G__24630 = (function (){var G__24631 = [type,fulcro.client.dom_common.add_kwprops_to_props(head,csskw)];
fulcro.client.dom.arr_append(G__24631,tail);

return G__24631;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24630) : f.call(null,G__24630));
} else {
if(cljs.core.map_QMARK_(head)){
var G__24633 = (function (){var G__24634 = [type,cljs.core.clj__GT_js(fulcro.client.dom_common.add_kwprops_to_props(head,csskw))];
fulcro.client.dom.arr_append(G__24634,tail);

return G__24634;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24633) : f.call(null,G__24633));
} else {
var G__24636 = (function (){var G__24637 = [type,fulcro.client.dom_common.add_kwprops_to_props(({}),csskw)];
fulcro.client.dom.arr_append(G__24637,args);

return G__24637;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24636) : f.call(null,G__24636));

}
}
}
}
});

fulcro.client.dom.macro_create_element.cljs$lang$maxFixedArity = 3;

fulcro.client.dom.form = (function fulcro$client$dom$form(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26020 = arguments.length;
var i__12085__auto___26021 = (0);
while(true){
if((i__12085__auto___26021 < len__12084__auto___26020)){
args__12091__auto__.push((arguments[i__12085__auto___26021]));

var G__26022 = (i__12085__auto___26021 + (1));
i__12085__auto___26021 = G__26022;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24654 = conformed_args__22984__auto__;
var map__24654__$1 = ((((!((map__24654 == null)))?((((map__24654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24654.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24654):map__24654);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24654__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24654__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24654__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.form.cljs$lang$applyTo = (function (seq24651){
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24651));
});


fulcro.client.dom.audio = (function fulcro$client$dom$audio(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26023 = arguments.length;
var i__12085__auto___26024 = (0);
while(true){
if((i__12085__auto___26024 < len__12084__auto___26023)){
args__12091__auto__.push((arguments[i__12085__auto___26024]));

var G__26025 = (i__12085__auto___26024 + (1));
i__12085__auto___26024 = G__26025;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24660 = conformed_args__22984__auto__;
var map__24660__$1 = ((((!((map__24660 == null)))?((((map__24660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24660):map__24660);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24660__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq24659){
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24659));
});


fulcro.client.dom.input = (function fulcro$client$dom$input(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26026 = arguments.length;
var i__12085__auto___26027 = (0);
while(true){
if((i__12085__auto___26027 < len__12084__auto___26026)){
args__12091__auto__.push((arguments[i__12085__auto___26027]));

var G__26028 = (i__12085__auto___26027 + (1));
i__12085__auto___26027 = G__26028;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24666 = conformed_args__22984__auto__;
var map__24666__$1 = ((((!((map__24666 == null)))?((((map__24666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24666):map__24666);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24666__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.input.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.input.cljs$lang$applyTo = (function (seq24662){
return fulcro.client.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24662));
});


fulcro.client.dom.menuitem = (function fulcro$client$dom$menuitem(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26029 = arguments.length;
var i__12085__auto___26030 = (0);
while(true){
if((i__12085__auto___26030 < len__12084__auto___26029)){
args__12091__auto__.push((arguments[i__12085__auto___26030]));

var G__26031 = (i__12085__auto___26030 + (1));
i__12085__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24671 = conformed_args__22984__auto__;
var map__24671__$1 = ((((!((map__24671 == null)))?((((map__24671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24671):map__24671);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24671__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq24670){
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24670));
});


fulcro.client.dom.radialGradient = (function fulcro$client$dom$radialGradient(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26032 = arguments.length;
var i__12085__auto___26033 = (0);
while(true){
if((i__12085__auto___26033 < len__12084__auto___26032)){
args__12091__auto__.push((arguments[i__12085__auto___26033]));

var G__26034 = (i__12085__auto___26033 + (1));
i__12085__auto___26033 = G__26034;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24677 = conformed_args__22984__auto__;
var map__24677__$1 = ((((!((map__24677 == null)))?((((map__24677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24677):map__24677);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24677__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq24673){
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24673));
});


fulcro.client.dom.base = (function fulcro$client$dom$base(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26037 = arguments.length;
var i__12085__auto___26038 = (0);
while(true){
if((i__12085__auto___26038 < len__12084__auto___26037)){
args__12091__auto__.push((arguments[i__12085__auto___26038]));

var G__26040 = (i__12085__auto___26038 + (1));
i__12085__auto___26038 = G__26040;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24680 = conformed_args__22984__auto__;
var map__24680__$1 = ((((!((map__24680 == null)))?((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24680):map__24680);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24680__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.base.cljs$lang$applyTo = (function (seq24679){
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24679));
});


fulcro.client.dom.h1 = (function fulcro$client$dom$h1(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26044 = arguments.length;
var i__12085__auto___26045 = (0);
while(true){
if((i__12085__auto___26045 < len__12084__auto___26044)){
args__12091__auto__.push((arguments[i__12085__auto___26045]));

var G__26046 = (i__12085__auto___26045 + (1));
i__12085__auto___26045 = G__26046;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24684 = conformed_args__22984__auto__;
var map__24684__$1 = ((((!((map__24684 == null)))?((((map__24684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24684):map__24684);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24684__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24684__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24684__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq24683){
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24683));
});


fulcro.client.dom.embed = (function fulcro$client$dom$embed(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26047 = arguments.length;
var i__12085__auto___26048 = (0);
while(true){
if((i__12085__auto___26048 < len__12084__auto___26047)){
args__12091__auto__.push((arguments[i__12085__auto___26048]));

var G__26049 = (i__12085__auto___26048 + (1));
i__12085__auto___26048 = G__26049;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24690 = conformed_args__22984__auto__;
var map__24690__$1 = ((((!((map__24690 == null)))?((((map__24690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24690):map__24690);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24690__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq24687){
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24687));
});


fulcro.client.dom.h3 = (function fulcro$client$dom$h3(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26050 = arguments.length;
var i__12085__auto___26051 = (0);
while(true){
if((i__12085__auto___26051 < len__12084__auto___26050)){
args__12091__auto__.push((arguments[i__12085__auto___26051]));

var G__26052 = (i__12085__auto___26051 + (1));
i__12085__auto___26051 = G__26052;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24699 = conformed_args__22984__auto__;
var map__24699__$1 = ((((!((map__24699 == null)))?((((map__24699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24699):map__24699);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24699__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq24697){
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24697));
});


fulcro.client.dom.body = (function fulcro$client$dom$body(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26053 = arguments.length;
var i__12085__auto___26054 = (0);
while(true){
if((i__12085__auto___26054 < len__12084__auto___26053)){
args__12091__auto__.push((arguments[i__12085__auto___26054]));

var G__26055 = (i__12085__auto___26054 + (1));
i__12085__auto___26054 = G__26055;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24708 = conformed_args__22984__auto__;
var map__24708__$1 = ((((!((map__24708 == null)))?((((map__24708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24708):map__24708);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24708__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.body.cljs$lang$applyTo = (function (seq24707){
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24707));
});


fulcro.client.dom.keygen = (function fulcro$client$dom$keygen(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26056 = arguments.length;
var i__12085__auto___26057 = (0);
while(true){
if((i__12085__auto___26057 < len__12084__auto___26056)){
args__12091__auto__.push((arguments[i__12085__auto___26057]));

var G__26058 = (i__12085__auto___26057 + (1));
i__12085__auto___26057 = G__26058;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24764 = conformed_args__22984__auto__;
var map__24764__$1 = ((((!((map__24764 == null)))?((((map__24764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24764):map__24764);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24764__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq24732){
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24732));
});


fulcro.client.dom.progress = (function fulcro$client$dom$progress(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26059 = arguments.length;
var i__12085__auto___26060 = (0);
while(true){
if((i__12085__auto___26060 < len__12084__auto___26059)){
args__12091__auto__.push((arguments[i__12085__auto___26060]));

var G__26061 = (i__12085__auto___26060 + (1));
i__12085__auto___26060 = G__26061;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24793 = conformed_args__22984__auto__;
var map__24793__$1 = ((((!((map__24793 == null)))?((((map__24793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24793):map__24793);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24793__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq24789){
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24789));
});


fulcro.client.dom.main = (function fulcro$client$dom$main(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26062 = arguments.length;
var i__12085__auto___26063 = (0);
while(true){
if((i__12085__auto___26063 < len__12084__auto___26062)){
args__12091__auto__.push((arguments[i__12085__auto___26063]));

var G__26064 = (i__12085__auto___26063 + (1));
i__12085__auto___26063 = G__26064;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24806 = conformed_args__22984__auto__;
var map__24806__$1 = ((((!((map__24806 == null)))?((((map__24806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24806.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24806):map__24806);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.main.cljs$lang$applyTo = (function (seq24801){
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24801));
});


fulcro.client.dom.cite = (function fulcro$client$dom$cite(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26065 = arguments.length;
var i__12085__auto___26066 = (0);
while(true){
if((i__12085__auto___26066 < len__12084__auto___26065)){
args__12091__auto__.push((arguments[i__12085__auto___26066]));

var G__26067 = (i__12085__auto___26066 + (1));
i__12085__auto___26066 = G__26067;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24818 = conformed_args__22984__auto__;
var map__24818__$1 = ((((!((map__24818 == null)))?((((map__24818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24818):map__24818);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24818__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24818__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24818__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq24815){
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24815));
});


fulcro.client.dom.rect = (function fulcro$client$dom$rect(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26068 = arguments.length;
var i__12085__auto___26069 = (0);
while(true){
if((i__12085__auto___26069 < len__12084__auto___26068)){
args__12091__auto__.push((arguments[i__12085__auto___26069]));

var G__26070 = (i__12085__auto___26069 + (1));
i__12085__auto___26069 = G__26070;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24836 = conformed_args__22984__auto__;
var map__24836__$1 = ((((!((map__24836 == null)))?((((map__24836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24836):map__24836);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24836__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24836__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24836__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq24832){
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24832));
});


fulcro.client.dom.polyline = (function fulcro$client$dom$polyline(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26071 = arguments.length;
var i__12085__auto___26072 = (0);
while(true){
if((i__12085__auto___26072 < len__12084__auto___26071)){
args__12091__auto__.push((arguments[i__12085__auto___26072]));

var G__26075 = (i__12085__auto___26072 + (1));
i__12085__auto___26072 = G__26075;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24848 = conformed_args__22984__auto__;
var map__24848__$1 = ((((!((map__24848 == null)))?((((map__24848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24848):map__24848);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24848__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24848__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24848__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq24845){
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24845));
});


fulcro.client.dom.map = (function fulcro$client$dom$map(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26080 = arguments.length;
var i__12085__auto___26081 = (0);
while(true){
if((i__12085__auto___26081 < len__12084__auto___26080)){
args__12091__auto__.push((arguments[i__12085__auto___26081]));

var G__26082 = (i__12085__auto___26081 + (1));
i__12085__auto___26081 = G__26082;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24862 = conformed_args__22984__auto__;
var map__24862__$1 = ((((!((map__24862 == null)))?((((map__24862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24862):map__24862);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24862__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.map.cljs$lang$applyTo = (function (seq24856){
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24856));
});


fulcro.client.dom.object = (function fulcro$client$dom$object(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26091 = arguments.length;
var i__12085__auto___26092 = (0);
while(true){
if((i__12085__auto___26092 < len__12084__auto___26091)){
args__12091__auto__.push((arguments[i__12085__auto___26092]));

var G__26093 = (i__12085__auto___26092 + (1));
i__12085__auto___26092 = G__26093;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24868 = conformed_args__22984__auto__;
var map__24868__$1 = ((((!((map__24868 == null)))?((((map__24868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24868):map__24868);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24868__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24868__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24868__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.object.cljs$lang$applyTo = (function (seq24867){
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24867));
});


fulcro.client.dom.i = (function fulcro$client$dom$i(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26099 = arguments.length;
var i__12085__auto___26100 = (0);
while(true){
if((i__12085__auto___26100 < len__12084__auto___26099)){
args__12091__auto__.push((arguments[i__12085__auto___26100]));

var G__26101 = (i__12085__auto___26100 + (1));
i__12085__auto___26100 = G__26101;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24875 = conformed_args__22984__auto__;
var map__24875__$1 = ((((!((map__24875 == null)))?((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24875):map__24875);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24875__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.i.cljs$lang$applyTo = (function (seq24870){
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24870));
});


fulcro.client.dom.p = (function fulcro$client$dom$p(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26108 = arguments.length;
var i__12085__auto___26109 = (0);
while(true){
if((i__12085__auto___26109 < len__12084__auto___26108)){
args__12091__auto__.push((arguments[i__12085__auto___26109]));

var G__26110 = (i__12085__auto___26109 + (1));
i__12085__auto___26109 = G__26110;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24885 = conformed_args__22984__auto__;
var map__24885__$1 = ((((!((map__24885 == null)))?((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24885):map__24885);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24885__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24885__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24885__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.p.cljs$lang$applyTo = (function (seq24877){
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24877));
});


fulcro.client.dom.nav = (function fulcro$client$dom$nav(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26118 = arguments.length;
var i__12085__auto___26120 = (0);
while(true){
if((i__12085__auto___26120 < len__12084__auto___26118)){
args__12091__auto__.push((arguments[i__12085__auto___26120]));

var G__26123 = (i__12085__auto___26120 + (1));
i__12085__auto___26120 = G__26123;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24891 = conformed_args__22984__auto__;
var map__24891__$1 = ((((!((map__24891 == null)))?((((map__24891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24891):map__24891);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24891__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq24888){
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24888));
});


fulcro.client.dom.ruby = (function fulcro$client$dom$ruby(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26135 = arguments.length;
var i__12085__auto___26136 = (0);
while(true){
if((i__12085__auto___26136 < len__12084__auto___26135)){
args__12091__auto__.push((arguments[i__12085__auto___26136]));

var G__26140 = (i__12085__auto___26136 + (1));
i__12085__auto___26136 = G__26140;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24901 = conformed_args__22984__auto__;
var map__24901__$1 = ((((!((map__24901 == null)))?((((map__24901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24901):map__24901);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq24895){
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24895));
});


fulcro.client.dom.a = (function fulcro$client$dom$a(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26157 = arguments.length;
var i__12085__auto___26158 = (0);
while(true){
if((i__12085__auto___26158 < len__12084__auto___26157)){
args__12091__auto__.push((arguments[i__12085__auto___26158]));

var G__26159 = (i__12085__auto___26158 + (1));
i__12085__auto___26158 = G__26159;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24911 = conformed_args__22984__auto__;
var map__24911__$1 = ((((!((map__24911 == null)))?((((map__24911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24911):map__24911);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24911__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.a.cljs$lang$applyTo = (function (seq24909){
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24909));
});


fulcro.client.dom.menu = (function fulcro$client$dom$menu(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26172 = arguments.length;
var i__12085__auto___26173 = (0);
while(true){
if((i__12085__auto___26173 < len__12084__auto___26172)){
args__12091__auto__.push((arguments[i__12085__auto___26173]));

var G__26175 = (i__12085__auto___26173 + (1));
i__12085__auto___26173 = G__26175;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24923 = conformed_args__22984__auto__;
var map__24923__$1 = ((((!((map__24923 == null)))?((((map__24923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24923):map__24923);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24923__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24923__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24923__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq24916){
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24916));
});


fulcro.client.dom.blockquote = (function fulcro$client$dom$blockquote(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26191 = arguments.length;
var i__12085__auto___26192 = (0);
while(true){
if((i__12085__auto___26192 < len__12084__auto___26191)){
args__12091__auto__.push((arguments[i__12085__auto___26192]));

var G__26193 = (i__12085__auto___26192 + (1));
i__12085__auto___26192 = G__26193;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24929 = conformed_args__22984__auto__;
var map__24929__$1 = ((((!((map__24929 == null)))?((((map__24929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24929):map__24929);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24929__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24929__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24929__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq24927){
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24927));
});


fulcro.client.dom.img = (function fulcro$client$dom$img(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26198 = arguments.length;
var i__12085__auto___26199 = (0);
while(true){
if((i__12085__auto___26199 < len__12084__auto___26198)){
args__12091__auto__.push((arguments[i__12085__auto___26199]));

var G__26200 = (i__12085__auto___26199 + (1));
i__12085__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24936 = conformed_args__22984__auto__;
var map__24936__$1 = ((((!((map__24936 == null)))?((((map__24936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24936):map__24936);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24936__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.img.cljs$lang$applyTo = (function (seq24933){
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24933));
});


fulcro.client.dom.text = (function fulcro$client$dom$text(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26207 = arguments.length;
var i__12085__auto___26208 = (0);
while(true){
if((i__12085__auto___26208 < len__12084__auto___26207)){
args__12091__auto__.push((arguments[i__12085__auto___26208]));

var G__26209 = (i__12085__auto___26208 + (1));
i__12085__auto___26208 = G__26209;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24945 = conformed_args__22984__auto__;
var map__24945__$1 = ((((!((map__24945 == null)))?((((map__24945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24945):map__24945);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24945__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.text.cljs$lang$applyTo = (function (seq24943){
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24943));
});


fulcro.client.dom.span = (function fulcro$client$dom$span(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26214 = arguments.length;
var i__12085__auto___26216 = (0);
while(true){
if((i__12085__auto___26216 < len__12084__auto___26214)){
args__12091__auto__.push((arguments[i__12085__auto___26216]));

var G__26217 = (i__12085__auto___26216 + (1));
i__12085__auto___26216 = G__26217;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24953 = conformed_args__22984__auto__;
var map__24953__$1 = ((((!((map__24953 == null)))?((((map__24953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24953):map__24953);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.span.cljs$lang$applyTo = (function (seq24951){
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24951));
});


fulcro.client.dom.track = (function fulcro$client$dom$track(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26225 = arguments.length;
var i__12085__auto___26226 = (0);
while(true){
if((i__12085__auto___26226 < len__12084__auto___26225)){
args__12091__auto__.push((arguments[i__12085__auto___26226]));

var G__26227 = (i__12085__auto___26226 + (1));
i__12085__auto___26226 = G__26227;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24965 = conformed_args__22984__auto__;
var map__24965__$1 = ((((!((map__24965 == null)))?((((map__24965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24965):map__24965);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24965__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.track.cljs$lang$applyTo = (function (seq24962){
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24962));
});


fulcro.client.dom.data = (function fulcro$client$dom$data(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26231 = arguments.length;
var i__12085__auto___26232 = (0);
while(true){
if((i__12085__auto___26232 < len__12084__auto___26231)){
args__12091__auto__.push((arguments[i__12085__auto___26232]));

var G__26233 = (i__12085__auto___26232 + (1));
i__12085__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24969 = conformed_args__22984__auto__;
var map__24969__$1 = ((((!((map__24969 == null)))?((((map__24969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24969):map__24969);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.data.cljs$lang$applyTo = (function (seq24968){
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24968));
});


fulcro.client.dom.u = (function fulcro$client$dom$u(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26239 = arguments.length;
var i__12085__auto___26240 = (0);
while(true){
if((i__12085__auto___26240 < len__12084__auto___26239)){
args__12091__auto__.push((arguments[i__12085__auto___26240]));

var G__26243 = (i__12085__auto___26240 + (1));
i__12085__auto___26240 = G__26243;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24980 = conformed_args__22984__auto__;
var map__24980__$1 = ((((!((map__24980 == null)))?((((map__24980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24980):map__24980);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24980__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24980__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24980__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.u.cljs$lang$applyTo = (function (seq24977){
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24977));
});


fulcro.client.dom.dl = (function fulcro$client$dom$dl(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26252 = arguments.length;
var i__12085__auto___26253 = (0);
while(true){
if((i__12085__auto___26253 < len__12084__auto___26252)){
args__12091__auto__.push((arguments[i__12085__auto___26253]));

var G__26254 = (i__12085__auto___26253 + (1));
i__12085__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__24985 = conformed_args__22984__auto__;
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24985):map__24985);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24985__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24985__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24985__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq24984){
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24984));
});


fulcro.client.dom.select = (function fulcro$client$dom$select(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26262 = arguments.length;
var i__12085__auto___26263 = (0);
while(true){
if((i__12085__auto___26263 < len__12084__auto___26262)){
args__12091__auto__.push((arguments[i__12085__auto___26263]));

var G__26265 = (i__12085__auto___26263 + (1));
i__12085__auto___26263 = G__26265;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25020 = conformed_args__22984__auto__;
var map__25020__$1 = ((((!((map__25020 == null)))?((((map__25020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25020):map__25020);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25020__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25020__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25020__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.select.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.select.cljs$lang$applyTo = (function (seq24996){
return fulcro.client.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24996));
});


fulcro.client.dom.polygon = (function fulcro$client$dom$polygon(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26267 = arguments.length;
var i__12085__auto___26268 = (0);
while(true){
if((i__12085__auto___26268 < len__12084__auto___26267)){
args__12091__auto__.push((arguments[i__12085__auto___26268]));

var G__26269 = (i__12085__auto___26268 + (1));
i__12085__auto___26268 = G__26269;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25039 = conformed_args__22984__auto__;
var map__25039__$1 = ((((!((map__25039 == null)))?((((map__25039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25039):map__25039);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25039__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25039__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25039__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq25035){
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25035));
});


fulcro.client.dom.pattern = (function fulcro$client$dom$pattern(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26278 = arguments.length;
var i__12085__auto___26279 = (0);
while(true){
if((i__12085__auto___26279 < len__12084__auto___26278)){
args__12091__auto__.push((arguments[i__12085__auto___26279]));

var G__26280 = (i__12085__auto___26279 + (1));
i__12085__auto___26279 = G__26280;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25047 = conformed_args__22984__auto__;
var map__25047__$1 = ((((!((map__25047 == null)))?((((map__25047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25047):map__25047);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25047__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25047__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25047__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq25046){
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25046));
});


fulcro.client.dom.html = (function fulcro$client$dom$html(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26283 = arguments.length;
var i__12085__auto___26285 = (0);
while(true){
if((i__12085__auto___26285 < len__12084__auto___26283)){
args__12091__auto__.push((arguments[i__12085__auto___26285]));

var G__26287 = (i__12085__auto___26285 + (1));
i__12085__auto___26285 = G__26287;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25062 = conformed_args__22984__auto__;
var map__25062__$1 = ((((!((map__25062 == null)))?((((map__25062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25062):map__25062);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25062__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.html.cljs$lang$applyTo = (function (seq25057){
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25057));
});


fulcro.client.dom.thead = (function fulcro$client$dom$thead(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26292 = arguments.length;
var i__12085__auto___26293 = (0);
while(true){
if((i__12085__auto___26293 < len__12084__auto___26292)){
args__12091__auto__.push((arguments[i__12085__auto___26293]));

var G__26294 = (i__12085__auto___26293 + (1));
i__12085__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25075 = conformed_args__22984__auto__;
var map__25075__$1 = ((((!((map__25075 == null)))?((((map__25075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25075):map__25075);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25075__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq25068){
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25068));
});


fulcro.client.dom.path = (function fulcro$client$dom$path(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26303 = arguments.length;
var i__12085__auto___26304 = (0);
while(true){
if((i__12085__auto___26304 < len__12084__auto___26303)){
args__12091__auto__.push((arguments[i__12085__auto___26304]));

var G__26305 = (i__12085__auto___26304 + (1));
i__12085__auto___26304 = G__26305;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25081 = conformed_args__22984__auto__;
var map__25081__$1 = ((((!((map__25081 == null)))?((((map__25081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25081):map__25081);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25081__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25081__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25081__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.path.cljs$lang$applyTo = (function (seq25080){
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25080));
});


fulcro.client.dom.del = (function fulcro$client$dom$del(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26311 = arguments.length;
var i__12085__auto___26312 = (0);
while(true){
if((i__12085__auto___26312 < len__12084__auto___26311)){
args__12091__auto__.push((arguments[i__12085__auto___26312]));

var G__26314 = (i__12085__auto___26312 + (1));
i__12085__auto___26312 = G__26314;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25089 = conformed_args__22984__auto__;
var map__25089__$1 = ((((!((map__25089 == null)))?((((map__25089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25089):map__25089);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25089__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.del.cljs$lang$applyTo = (function (seq25087){
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25087));
});


fulcro.client.dom.fieldset = (function fulcro$client$dom$fieldset(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26322 = arguments.length;
var i__12085__auto___26323 = (0);
while(true){
if((i__12085__auto___26323 < len__12084__auto___26322)){
args__12091__auto__.push((arguments[i__12085__auto___26323]));

var G__26324 = (i__12085__auto___26323 + (1));
i__12085__auto___26323 = G__26324;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25101 = conformed_args__22984__auto__;
var map__25101__$1 = ((((!((map__25101 == null)))?((((map__25101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25101):map__25101);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25101__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25101__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25101__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq25098){
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25098));
});


fulcro.client.dom.aside = (function fulcro$client$dom$aside(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26340 = arguments.length;
var i__12085__auto___26341 = (0);
while(true){
if((i__12085__auto___26341 < len__12084__auto___26340)){
args__12091__auto__.push((arguments[i__12085__auto___26341]));

var G__26342 = (i__12085__auto___26341 + (1));
i__12085__auto___26341 = G__26342;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25108 = conformed_args__22984__auto__;
var map__25108__$1 = ((((!((map__25108 == null)))?((((map__25108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25108):map__25108);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25108__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25108__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25108__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq25105){
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25105));
});


fulcro.client.dom.figure = (function fulcro$client$dom$figure(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26360 = arguments.length;
var i__12085__auto___26362 = (0);
while(true){
if((i__12085__auto___26362 < len__12084__auto___26360)){
args__12091__auto__.push((arguments[i__12085__auto___26362]));

var G__26366 = (i__12085__auto___26362 + (1));
i__12085__auto___26362 = G__26366;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25116 = conformed_args__22984__auto__;
var map__25116__$1 = ((((!((map__25116 == null)))?((((map__25116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25116):map__25116);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25116__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq25112){
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25112));
});


fulcro.client.dom.figcaption = (function fulcro$client$dom$figcaption(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26377 = arguments.length;
var i__12085__auto___26379 = (0);
while(true){
if((i__12085__auto___26379 < len__12084__auto___26377)){
args__12091__auto__.push((arguments[i__12085__auto___26379]));

var G__26380 = (i__12085__auto___26379 + (1));
i__12085__auto___26379 = G__26380;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25125 = conformed_args__22984__auto__;
var map__25125__$1 = ((((!((map__25125 == null)))?((((map__25125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25125):map__25125);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25125__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq25124){
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25124));
});


fulcro.client.dom.mask = (function fulcro$client$dom$mask(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26389 = arguments.length;
var i__12085__auto___26393 = (0);
while(true){
if((i__12085__auto___26393 < len__12084__auto___26389)){
args__12091__auto__.push((arguments[i__12085__auto___26393]));

var G__26394 = (i__12085__auto___26393 + (1));
i__12085__auto___26393 = G__26394;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25136 = conformed_args__22984__auto__;
var map__25136__$1 = ((((!((map__25136 == null)))?((((map__25136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25136):map__25136);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25136__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq25132){
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25132));
});


fulcro.client.dom.q = (function fulcro$client$dom$q(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26401 = arguments.length;
var i__12085__auto___26404 = (0);
while(true){
if((i__12085__auto___26404 < len__12084__auto___26401)){
args__12091__auto__.push((arguments[i__12085__auto___26404]));

var G__26405 = (i__12085__auto___26404 + (1));
i__12085__auto___26404 = G__26405;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25177 = conformed_args__22984__auto__;
var map__25177__$1 = ((((!((map__25177 == null)))?((((map__25177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25177):map__25177);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25177__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25177__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25177__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.q.cljs$lang$applyTo = (function (seq25155){
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25155));
});


fulcro.client.dom.bdi = (function fulcro$client$dom$bdi(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26418 = arguments.length;
var i__12085__auto___26419 = (0);
while(true){
if((i__12085__auto___26419 < len__12084__auto___26418)){
args__12091__auto__.push((arguments[i__12085__auto___26419]));

var G__26420 = (i__12085__auto___26419 + (1));
i__12085__auto___26419 = G__26420;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25189 = conformed_args__22984__auto__;
var map__25189__$1 = ((((!((map__25189 == null)))?((((map__25189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25189):map__25189);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25189__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq25185){
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25185));
});


fulcro.client.dom.video = (function fulcro$client$dom$video(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26438 = arguments.length;
var i__12085__auto___26439 = (0);
while(true){
if((i__12085__auto___26439 < len__12084__auto___26438)){
args__12091__auto__.push((arguments[i__12085__auto___26439]));

var G__26440 = (i__12085__auto___26439 + (1));
i__12085__auto___26439 = G__26440;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25197 = conformed_args__22984__auto__;
var map__25197__$1 = ((((!((map__25197 == null)))?((((map__25197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25197):map__25197);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25197__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.video.cljs$lang$applyTo = (function (seq25196){
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25196));
});


fulcro.client.dom.address = (function fulcro$client$dom$address(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26467 = arguments.length;
var i__12085__auto___26468 = (0);
while(true){
if((i__12085__auto___26468 < len__12084__auto___26467)){
args__12091__auto__.push((arguments[i__12085__auto___26468]));

var G__26469 = (i__12085__auto___26468 + (1));
i__12085__auto___26468 = G__26469;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25206 = conformed_args__22984__auto__;
var map__25206__$1 = ((((!((map__25206 == null)))?((((map__25206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25206):map__25206);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25206__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25206__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25206__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.address.cljs$lang$applyTo = (function (seq25202){
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25202));
});


fulcro.client.dom.caption = (function fulcro$client$dom$caption(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26476 = arguments.length;
var i__12085__auto___26478 = (0);
while(true){
if((i__12085__auto___26478 < len__12084__auto___26476)){
args__12091__auto__.push((arguments[i__12085__auto___26478]));

var G__26482 = (i__12085__auto___26478 + (1));
i__12085__auto___26478 = G__26482;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25219 = conformed_args__22984__auto__;
var map__25219__$1 = ((((!((map__25219 == null)))?((((map__25219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25219):map__25219);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25219__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25219__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25219__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq25213){
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25213));
});


fulcro.client.dom.dd = (function fulcro$client$dom$dd(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26501 = arguments.length;
var i__12085__auto___26502 = (0);
while(true){
if((i__12085__auto___26502 < len__12084__auto___26501)){
args__12091__auto__.push((arguments[i__12085__auto___26502]));

var G__26503 = (i__12085__auto___26502 + (1));
i__12085__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25231 = conformed_args__22984__auto__;
var map__25231__$1 = ((((!((map__25231 == null)))?((((map__25231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25231):map__25231);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq25227){
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25227));
});


fulcro.client.dom.rp = (function fulcro$client$dom$rp(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26507 = arguments.length;
var i__12085__auto___26508 = (0);
while(true){
if((i__12085__auto___26508 < len__12084__auto___26507)){
args__12091__auto__.push((arguments[i__12085__auto___26508]));

var G__26511 = (i__12085__auto___26508 + (1));
i__12085__auto___26508 = G__26511;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25246 = conformed_args__22984__auto__;
var map__25246__$1 = ((((!((map__25246 == null)))?((((map__25246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25246):map__25246);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq25238){
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25238));
});


fulcro.client.dom.hr = (function fulcro$client$dom$hr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26515 = arguments.length;
var i__12085__auto___26516 = (0);
while(true){
if((i__12085__auto___26516 < len__12084__auto___26515)){
args__12091__auto__.push((arguments[i__12085__auto___26516]));

var G__26517 = (i__12085__auto___26516 + (1));
i__12085__auto___26516 = G__26517;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25254 = conformed_args__22984__auto__;
var map__25254__$1 = ((((!((map__25254 == null)))?((((map__25254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25254):map__25254);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25254__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25254__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25254__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq25252){
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25252));
});


fulcro.client.dom.meta = (function fulcro$client$dom$meta(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26526 = arguments.length;
var i__12085__auto___26527 = (0);
while(true){
if((i__12085__auto___26527 < len__12084__auto___26526)){
args__12091__auto__.push((arguments[i__12085__auto___26527]));

var G__26528 = (i__12085__auto___26527 + (1));
i__12085__auto___26527 = G__26528;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25259 = conformed_args__22984__auto__;
var map__25259__$1 = ((((!((map__25259 == null)))?((((map__25259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25259):map__25259);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25259__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25259__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25259__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq25258){
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25258));
});


fulcro.client.dom.tbody = (function fulcro$client$dom$tbody(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26535 = arguments.length;
var i__12085__auto___26537 = (0);
while(true){
if((i__12085__auto___26537 < len__12084__auto___26535)){
args__12091__auto__.push((arguments[i__12085__auto___26537]));

var G__26538 = (i__12085__auto___26537 + (1));
i__12085__auto___26537 = G__26538;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25277 = conformed_args__22984__auto__;
var map__25277__$1 = ((((!((map__25277 == null)))?((((map__25277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25277):map__25277);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25277__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25277__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25277__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq25265){
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25265));
});


fulcro.client.dom.table = (function fulcro$client$dom$table(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26545 = arguments.length;
var i__12085__auto___26546 = (0);
while(true){
if((i__12085__auto___26546 < len__12084__auto___26545)){
args__12091__auto__.push((arguments[i__12085__auto___26546]));

var G__26547 = (i__12085__auto___26546 + (1));
i__12085__auto___26546 = G__26547;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25300 = conformed_args__22984__auto__;
var map__25300__$1 = ((((!((map__25300 == null)))?((((map__25300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25300):map__25300);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.table.cljs$lang$applyTo = (function (seq25296){
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25296));
});


fulcro.client.dom.pre = (function fulcro$client$dom$pre(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26554 = arguments.length;
var i__12085__auto___26555 = (0);
while(true){
if((i__12085__auto___26555 < len__12084__auto___26554)){
args__12091__auto__.push((arguments[i__12085__auto___26555]));

var G__26557 = (i__12085__auto___26555 + (1));
i__12085__auto___26555 = G__26557;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25316 = conformed_args__22984__auto__;
var map__25316__$1 = ((((!((map__25316 == null)))?((((map__25316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25316):map__25316);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25316__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25316__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25316__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq25310){
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25310));
});


fulcro.client.dom.ul = (function fulcro$client$dom$ul(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26565 = arguments.length;
var i__12085__auto___26566 = (0);
while(true){
if((i__12085__auto___26566 < len__12084__auto___26565)){
args__12091__auto__.push((arguments[i__12085__auto___26566]));

var G__26567 = (i__12085__auto___26566 + (1));
i__12085__auto___26566 = G__26567;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25327 = conformed_args__22984__auto__;
var map__25327__$1 = ((((!((map__25327 == null)))?((((map__25327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25327):map__25327);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25327__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq25325){
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25325));
});


fulcro.client.dom.sup = (function fulcro$client$dom$sup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26574 = arguments.length;
var i__12085__auto___26575 = (0);
while(true){
if((i__12085__auto___26575 < len__12084__auto___26574)){
args__12091__auto__.push((arguments[i__12085__auto___26575]));

var G__26576 = (i__12085__auto___26575 + (1));
i__12085__auto___26575 = G__26576;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25334 = conformed_args__22984__auto__;
var map__25334__$1 = ((((!((map__25334 == null)))?((((map__25334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25334):map__25334);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25334__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25334__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25334__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq25330){
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25330));
});


fulcro.client.dom.dfn = (function fulcro$client$dom$dfn(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26582 = arguments.length;
var i__12085__auto___26583 = (0);
while(true){
if((i__12085__auto___26583 < len__12084__auto___26582)){
args__12091__auto__.push((arguments[i__12085__auto___26583]));

var G__26585 = (i__12085__auto___26583 + (1));
i__12085__auto___26583 = G__26585;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25341 = conformed_args__22984__auto__;
var map__25341__$1 = ((((!((map__25341 == null)))?((((map__25341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25341):map__25341);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25341__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25341__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25341__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq25338){
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25338));
});


fulcro.client.dom.sub = (function fulcro$client$dom$sub(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26589 = arguments.length;
var i__12085__auto___26590 = (0);
while(true){
if((i__12085__auto___26590 < len__12084__auto___26589)){
args__12091__auto__.push((arguments[i__12085__auto___26590]));

var G__26591 = (i__12085__auto___26590 + (1));
i__12085__auto___26590 = G__26591;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25347 = conformed_args__22984__auto__;
var map__25347__$1 = ((((!((map__25347 == null)))?((((map__25347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25347):map__25347);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25347__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq25346){
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25346));
});


fulcro.client.dom.mark = (function fulcro$client$dom$mark(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26601 = arguments.length;
var i__12085__auto___26602 = (0);
while(true){
if((i__12085__auto___26602 < len__12084__auto___26601)){
args__12091__auto__.push((arguments[i__12085__auto___26602]));

var G__26603 = (i__12085__auto___26602 + (1));
i__12085__auto___26602 = G__26603;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25353 = conformed_args__22984__auto__;
var map__25353__$1 = ((((!((map__25353 == null)))?((((map__25353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25353):map__25353);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25353__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25353__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25353__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq25351){
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25351));
});


fulcro.client.dom.script = (function fulcro$client$dom$script(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26609 = arguments.length;
var i__12085__auto___26610 = (0);
while(true){
if((i__12085__auto___26610 < len__12084__auto___26609)){
args__12091__auto__.push((arguments[i__12085__auto___26610]));

var G__26611 = (i__12085__auto___26610 + (1));
i__12085__auto___26610 = G__26611;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25364 = conformed_args__22984__auto__;
var map__25364__$1 = ((((!((map__25364 == null)))?((((map__25364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25364):map__25364);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25364__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.script.cljs$lang$applyTo = (function (seq25360){
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25360));
});


fulcro.client.dom.big = (function fulcro$client$dom$big(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26615 = arguments.length;
var i__12085__auto___26616 = (0);
while(true){
if((i__12085__auto___26616 < len__12084__auto___26615)){
args__12091__auto__.push((arguments[i__12085__auto___26616]));

var G__26617 = (i__12085__auto___26616 + (1));
i__12085__auto___26616 = G__26617;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25371 = conformed_args__22984__auto__;
var map__25371__$1 = ((((!((map__25371 == null)))?((((map__25371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25371):map__25371);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.big.cljs$lang$applyTo = (function (seq25369){
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25369));
});


fulcro.client.dom.button = (function fulcro$client$dom$button(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26621 = arguments.length;
var i__12085__auto___26622 = (0);
while(true){
if((i__12085__auto___26622 < len__12084__auto___26621)){
args__12091__auto__.push((arguments[i__12085__auto___26622]));

var G__26623 = (i__12085__auto___26622 + (1));
i__12085__auto___26622 = G__26623;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25375 = conformed_args__22984__auto__;
var map__25375__$1 = ((((!((map__25375 == null)))?((((map__25375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25375):map__25375);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25375__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25375__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25375__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.button.cljs$lang$applyTo = (function (seq25374){
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25374));
});


fulcro.client.dom.wbr = (function fulcro$client$dom$wbr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26629 = arguments.length;
var i__12085__auto___26630 = (0);
while(true){
if((i__12085__auto___26630 < len__12084__auto___26629)){
args__12091__auto__.push((arguments[i__12085__auto___26630]));

var G__26631 = (i__12085__auto___26630 + (1));
i__12085__auto___26630 = G__26631;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25381 = conformed_args__22984__auto__;
var map__25381__$1 = ((((!((map__25381 == null)))?((((map__25381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25381):map__25381);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25381__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25381__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25381__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq25379){
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25379));
});


fulcro.client.dom.strong = (function fulcro$client$dom$strong(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26636 = arguments.length;
var i__12085__auto___26637 = (0);
while(true){
if((i__12085__auto___26637 < len__12084__auto___26636)){
args__12091__auto__.push((arguments[i__12085__auto___26637]));

var G__26638 = (i__12085__auto___26637 + (1));
i__12085__auto___26637 = G__26638;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25386 = conformed_args__22984__auto__;
var map__25386__$1 = ((((!((map__25386 == null)))?((((map__25386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25386):map__25386);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25386__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25386__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25386__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq25384){
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25384));
});


fulcro.client.dom.use = (function fulcro$client$dom$use(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26643 = arguments.length;
var i__12085__auto___26644 = (0);
while(true){
if((i__12085__auto___26644 < len__12084__auto___26643)){
args__12091__auto__.push((arguments[i__12085__auto___26644]));

var G__26645 = (i__12085__auto___26644 + (1));
i__12085__auto___26644 = G__26645;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25391 = conformed_args__22984__auto__;
var map__25391__$1 = ((((!((map__25391 == null)))?((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25391):map__25391);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25391__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25391__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25391__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.use.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.use.cljs$lang$applyTo = (function (seq25389){
return fulcro.client.dom.use.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25389));
});


fulcro.client.dom.li = (function fulcro$client$dom$li(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26650 = arguments.length;
var i__12085__auto___26651 = (0);
while(true){
if((i__12085__auto___26651 < len__12084__auto___26650)){
args__12091__auto__.push((arguments[i__12085__auto___26651]));

var G__26653 = (i__12085__auto___26651 + (1));
i__12085__auto___26651 = G__26653;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25397 = conformed_args__22984__auto__;
var map__25397__$1 = ((((!((map__25397 == null)))?((((map__25397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25397):map__25397);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25397__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25397__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25397__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.li.cljs$lang$applyTo = (function (seq25396){
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25396));
});


fulcro.client.dom.dt = (function fulcro$client$dom$dt(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26657 = arguments.length;
var i__12085__auto___26658 = (0);
while(true){
if((i__12085__auto___26658 < len__12084__auto___26657)){
args__12091__auto__.push((arguments[i__12085__auto___26658]));

var G__26659 = (i__12085__auto___26658 + (1));
i__12085__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25402 = conformed_args__22984__auto__;
var map__25402__$1 = ((((!((map__25402 == null)))?((((map__25402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25402):map__25402);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25402__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25402__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25402__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq25401){
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25401));
});


fulcro.client.dom.td = (function fulcro$client$dom$td(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26666 = arguments.length;
var i__12085__auto___26667 = (0);
while(true){
if((i__12085__auto___26667 < len__12084__auto___26666)){
args__12091__auto__.push((arguments[i__12085__auto___26667]));

var G__26668 = (i__12085__auto___26667 + (1));
i__12085__auto___26667 = G__26668;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25406 = conformed_args__22984__auto__;
var map__25406__$1 = ((((!((map__25406 == null)))?((((map__25406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25406):map__25406);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25406__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25406__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25406__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.td.cljs$lang$applyTo = (function (seq25405){
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25405));
});


fulcro.client.dom.tr = (function fulcro$client$dom$tr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26671 = arguments.length;
var i__12085__auto___26672 = (0);
while(true){
if((i__12085__auto___26672 < len__12084__auto___26671)){
args__12091__auto__.push((arguments[i__12085__auto___26672]));

var G__26674 = (i__12085__auto___26672 + (1));
i__12085__auto___26672 = G__26674;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25413 = conformed_args__22984__auto__;
var map__25413__$1 = ((((!((map__25413 == null)))?((((map__25413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25413):map__25413);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25413__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25413__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25413__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq25412){
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25412));
});


fulcro.client.dom.circle = (function fulcro$client$dom$circle(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26682 = arguments.length;
var i__12085__auto___26683 = (0);
while(true){
if((i__12085__auto___26683 < len__12084__auto___26682)){
args__12091__auto__.push((arguments[i__12085__auto___26683]));

var G__26684 = (i__12085__auto___26683 + (1));
i__12085__auto___26683 = G__26684;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25418 = conformed_args__22984__auto__;
var map__25418__$1 = ((((!((map__25418 == null)))?((((map__25418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25418):map__25418);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25418__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25418__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25418__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq25417){
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25417));
});


fulcro.client.dom.section = (function fulcro$client$dom$section(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26689 = arguments.length;
var i__12085__auto___26690 = (0);
while(true){
if((i__12085__auto___26690 < len__12084__auto___26689)){
args__12091__auto__.push((arguments[i__12085__auto___26690]));

var G__26693 = (i__12085__auto___26690 + (1));
i__12085__auto___26690 = G__26693;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25421 = conformed_args__22984__auto__;
var map__25421__$1 = ((((!((map__25421 == null)))?((((map__25421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25421):map__25421);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25421__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25421__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25421__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.section.cljs$lang$applyTo = (function (seq25420){
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25420));
});


fulcro.client.dom.th = (function fulcro$client$dom$th(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26700 = arguments.length;
var i__12085__auto___26701 = (0);
while(true){
if((i__12085__auto___26701 < len__12084__auto___26700)){
args__12091__auto__.push((arguments[i__12085__auto___26701]));

var G__26702 = (i__12085__auto___26701 + (1));
i__12085__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25426 = conformed_args__22984__auto__;
var map__25426__$1 = ((((!((map__25426 == null)))?((((map__25426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25426):map__25426);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25426__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.th.cljs$lang$applyTo = (function (seq25425){
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25425));
});


fulcro.client.dom.time = (function fulcro$client$dom$time(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26709 = arguments.length;
var i__12085__auto___26710 = (0);
while(true){
if((i__12085__auto___26710 < len__12084__auto___26709)){
args__12091__auto__.push((arguments[i__12085__auto___26710]));

var G__26711 = (i__12085__auto___26710 + (1));
i__12085__auto___26710 = G__26711;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25456 = conformed_args__22984__auto__;
var map__25456__$1 = ((((!((map__25456 == null)))?((((map__25456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25456):map__25456);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25456__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25456__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25456__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.time.cljs$lang$applyTo = (function (seq25450){
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25450));
});


fulcro.client.dom.optgroup = (function fulcro$client$dom$optgroup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26716 = arguments.length;
var i__12085__auto___26717 = (0);
while(true){
if((i__12085__auto___26717 < len__12084__auto___26716)){
args__12091__auto__.push((arguments[i__12085__auto___26717]));

var G__26718 = (i__12085__auto___26717 + (1));
i__12085__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25466 = conformed_args__22984__auto__;
var map__25466__$1 = ((((!((map__25466 == null)))?((((map__25466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25466):map__25466);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq25461){
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25461));
});


fulcro.client.dom.iframe = (function fulcro$client$dom$iframe(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26729 = arguments.length;
var i__12085__auto___26732 = (0);
while(true){
if((i__12085__auto___26732 < len__12084__auto___26729)){
args__12091__auto__.push((arguments[i__12085__auto___26732]));

var G__26733 = (i__12085__auto___26732 + (1));
i__12085__auto___26732 = G__26733;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25474 = conformed_args__22984__auto__;
var map__25474__$1 = ((((!((map__25474 == null)))?((((map__25474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25474):map__25474);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25474__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25474__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25474__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq25471){
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25471));
});


fulcro.client.dom.legend = (function fulcro$client$dom$legend(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26738 = arguments.length;
var i__12085__auto___26739 = (0);
while(true){
if((i__12085__auto___26739 < len__12084__auto___26738)){
args__12091__auto__.push((arguments[i__12085__auto___26739]));

var G__26742 = (i__12085__auto___26739 + (1));
i__12085__auto___26739 = G__26742;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25480 = conformed_args__22984__auto__;
var map__25480__$1 = ((((!((map__25480 == null)))?((((map__25480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25480):map__25480);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25480__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25480__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25480__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq25477){
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25477));
});


fulcro.client.dom.em = (function fulcro$client$dom$em(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26751 = arguments.length;
var i__12085__auto___26752 = (0);
while(true){
if((i__12085__auto___26752 < len__12084__auto___26751)){
args__12091__auto__.push((arguments[i__12085__auto___26752]));

var G__26756 = (i__12085__auto___26752 + (1));
i__12085__auto___26752 = G__26756;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25488 = conformed_args__22984__auto__;
var map__25488__$1 = ((((!((map__25488 == null)))?((((map__25488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25488):map__25488);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25488__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25488__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25488__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.em.cljs$lang$applyTo = (function (seq25486){
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25486));
});


fulcro.client.dom.kbd = (function fulcro$client$dom$kbd(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26760 = arguments.length;
var i__12085__auto___26761 = (0);
while(true){
if((i__12085__auto___26761 < len__12084__auto___26760)){
args__12091__auto__.push((arguments[i__12085__auto___26761]));

var G__26763 = (i__12085__auto___26761 + (1));
i__12085__auto___26761 = G__26763;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25494 = conformed_args__22984__auto__;
var map__25494__$1 = ((((!((map__25494 == null)))?((((map__25494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25494):map__25494);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25494__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25494__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25494__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq25493){
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25493));
});


fulcro.client.dom.article = (function fulcro$client$dom$article(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26767 = arguments.length;
var i__12085__auto___26769 = (0);
while(true){
if((i__12085__auto___26769 < len__12084__auto___26767)){
args__12091__auto__.push((arguments[i__12085__auto___26769]));

var G__26770 = (i__12085__auto___26769 + (1));
i__12085__auto___26769 = G__26770;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25501 = conformed_args__22984__auto__;
var map__25501__$1 = ((((!((map__25501 == null)))?((((map__25501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25501):map__25501);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25501__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25501__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25501__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.article.cljs$lang$applyTo = (function (seq25498){
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25498));
});


fulcro.client.dom.clipPath = (function fulcro$client$dom$clipPath(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26776 = arguments.length;
var i__12085__auto___26777 = (0);
while(true){
if((i__12085__auto___26777 < len__12084__auto___26776)){
args__12091__auto__.push((arguments[i__12085__auto___26777]));

var G__26778 = (i__12085__auto___26777 + (1));
i__12085__auto___26777 = G__26778;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25505 = conformed_args__22984__auto__;
var map__25505__$1 = ((((!((map__25505 == null)))?((((map__25505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25505):map__25505);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25505__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25505__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25505__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq25504){
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25504));
});


fulcro.client.dom.abbr = (function fulcro$client$dom$abbr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26785 = arguments.length;
var i__12085__auto___26786 = (0);
while(true){
if((i__12085__auto___26786 < len__12084__auto___26785)){
args__12091__auto__.push((arguments[i__12085__auto___26786]));

var G__26787 = (i__12085__auto___26786 + (1));
i__12085__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25569 = conformed_args__22984__auto__;
var map__25569__$1 = ((((!((map__25569 == null)))?((((map__25569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25569):map__25569);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25569__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25569__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25569__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq25543){
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25543));
});


fulcro.client.dom.source = (function fulcro$client$dom$source(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26795 = arguments.length;
var i__12085__auto___26796 = (0);
while(true){
if((i__12085__auto___26796 < len__12084__auto___26795)){
args__12091__auto__.push((arguments[i__12085__auto___26796]));

var G__26799 = (i__12085__auto___26796 + (1));
i__12085__auto___26796 = G__26799;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25578 = conformed_args__22984__auto__;
var map__25578__$1 = ((((!((map__25578 == null)))?((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25578):map__25578);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25578__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25578__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25578__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.source.cljs$lang$applyTo = (function (seq25574){
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25574));
});


fulcro.client.dom.output = (function fulcro$client$dom$output(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26805 = arguments.length;
var i__12085__auto___26807 = (0);
while(true){
if((i__12085__auto___26807 < len__12084__auto___26805)){
args__12091__auto__.push((arguments[i__12085__auto___26807]));

var G__26808 = (i__12085__auto___26807 + (1));
i__12085__auto___26807 = G__26808;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25592 = conformed_args__22984__auto__;
var map__25592__$1 = ((((!((map__25592 == null)))?((((map__25592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25592):map__25592);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25592__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.output.cljs$lang$applyTo = (function (seq25588){
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25588));
});


fulcro.client.dom.header = (function fulcro$client$dom$header(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26811 = arguments.length;
var i__12085__auto___26812 = (0);
while(true){
if((i__12085__auto___26812 < len__12084__auto___26811)){
args__12091__auto__.push((arguments[i__12085__auto___26812]));

var G__26813 = (i__12085__auto___26812 + (1));
i__12085__auto___26812 = G__26813;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25600 = conformed_args__22984__auto__;
var map__25600__$1 = ((((!((map__25600 == null)))?((((map__25600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25600):map__25600);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.header.cljs$lang$applyTo = (function (seq25597){
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25597));
});


fulcro.client.dom.datalist = (function fulcro$client$dom$datalist(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26824 = arguments.length;
var i__12085__auto___26825 = (0);
while(true){
if((i__12085__auto___26825 < len__12084__auto___26824)){
args__12091__auto__.push((arguments[i__12085__auto___26825]));

var G__26826 = (i__12085__auto___26825 + (1));
i__12085__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25612 = conformed_args__22984__auto__;
var map__25612__$1 = ((((!((map__25612 == null)))?((((map__25612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25612):map__25612);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25612__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25612__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25612__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq25607){
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25607));
});


fulcro.client.dom.tfoot = (function fulcro$client$dom$tfoot(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26833 = arguments.length;
var i__12085__auto___26834 = (0);
while(true){
if((i__12085__auto___26834 < len__12084__auto___26833)){
args__12091__auto__.push((arguments[i__12085__auto___26834]));

var G__26835 = (i__12085__auto___26834 + (1));
i__12085__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25621 = conformed_args__22984__auto__;
var map__25621__$1 = ((((!((map__25621 == null)))?((((map__25621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25621):map__25621);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25621__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25621__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25621__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq25617){
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25617));
});


fulcro.client.dom.s = (function fulcro$client$dom$s(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26847 = arguments.length;
var i__12085__auto___26848 = (0);
while(true){
if((i__12085__auto___26848 < len__12084__auto___26847)){
args__12091__auto__.push((arguments[i__12085__auto___26848]));

var G__26852 = (i__12085__auto___26848 + (1));
i__12085__auto___26848 = G__26852;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25628 = conformed_args__22984__auto__;
var map__25628__$1 = ((((!((map__25628 == null)))?((((map__25628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25628):map__25628);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25628__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25628__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25628__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.s.cljs$lang$applyTo = (function (seq25626){
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25626));
});


fulcro.client.dom.ins = (function fulcro$client$dom$ins(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26861 = arguments.length;
var i__12085__auto___26862 = (0);
while(true){
if((i__12085__auto___26862 < len__12084__auto___26861)){
args__12091__auto__.push((arguments[i__12085__auto___26862]));

var G__26864 = (i__12085__auto___26862 + (1));
i__12085__auto___26862 = G__26864;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25635 = conformed_args__22984__auto__;
var map__25635__$1 = ((((!((map__25635 == null)))?((((map__25635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25635):map__25635);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25635__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25635__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25635__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq25632){
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25632));
});


fulcro.client.dom.footer = (function fulcro$client$dom$footer(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26873 = arguments.length;
var i__12085__auto___26874 = (0);
while(true){
if((i__12085__auto___26874 < len__12084__auto___26873)){
args__12091__auto__.push((arguments[i__12085__auto___26874]));

var G__26877 = (i__12085__auto___26874 + (1));
i__12085__auto___26874 = G__26877;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25641 = conformed_args__22984__auto__;
var map__25641__$1 = ((((!((map__25641 == null)))?((((map__25641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25641):map__25641);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25641__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25641__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25641__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq25639){
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25639));
});


fulcro.client.dom.title = (function fulcro$client$dom$title(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26888 = arguments.length;
var i__12085__auto___26889 = (0);
while(true){
if((i__12085__auto___26889 < len__12084__auto___26888)){
args__12091__auto__.push((arguments[i__12085__auto___26889]));

var G__26890 = (i__12085__auto___26889 + (1));
i__12085__auto___26889 = G__26890;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25646 = conformed_args__22984__auto__;
var map__25646__$1 = ((((!((map__25646 == null)))?((((map__25646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25646):map__25646);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25646__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.title.cljs$lang$applyTo = (function (seq25645){
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25645));
});


fulcro.client.dom.h5 = (function fulcro$client$dom$h5(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26903 = arguments.length;
var i__12085__auto___26904 = (0);
while(true){
if((i__12085__auto___26904 < len__12084__auto___26903)){
args__12091__auto__.push((arguments[i__12085__auto___26904]));

var G__26905 = (i__12085__auto___26904 + (1));
i__12085__auto___26904 = G__26905;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25653 = conformed_args__22984__auto__;
var map__25653__$1 = ((((!((map__25653 == null)))?((((map__25653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25653):map__25653);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25653__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25653__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25653__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq25650){
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25650));
});


fulcro.client.dom.canvas = (function fulcro$client$dom$canvas(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26911 = arguments.length;
var i__12085__auto___26912 = (0);
while(true){
if((i__12085__auto___26912 < len__12084__auto___26911)){
args__12091__auto__.push((arguments[i__12085__auto___26912]));

var G__26913 = (i__12085__auto___26912 + (1));
i__12085__auto___26912 = G__26913;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25662 = conformed_args__22984__auto__;
var map__25662__$1 = ((((!((map__25662 == null)))?((((map__25662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25662):map__25662);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25662__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25662__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25662__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq25659){
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25659));
});


fulcro.client.dom.param = (function fulcro$client$dom$param(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26926 = arguments.length;
var i__12085__auto___26927 = (0);
while(true){
if((i__12085__auto___26927 < len__12084__auto___26926)){
args__12091__auto__.push((arguments[i__12085__auto___26927]));

var G__26928 = (i__12085__auto___26927 + (1));
i__12085__auto___26927 = G__26928;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25669 = conformed_args__22984__auto__;
var map__25669__$1 = ((((!((map__25669 == null)))?((((map__25669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25669):map__25669);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25669__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25669__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25669__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.param.cljs$lang$applyTo = (function (seq25666){
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25666));
});


fulcro.client.dom.div = (function fulcro$client$dom$div(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26939 = arguments.length;
var i__12085__auto___26940 = (0);
while(true){
if((i__12085__auto___26940 < len__12084__auto___26939)){
args__12091__auto__.push((arguments[i__12085__auto___26940]));

var G__26942 = (i__12085__auto___26940 + (1));
i__12085__auto___26940 = G__26942;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25674 = conformed_args__22984__auto__;
var map__25674__$1 = ((((!((map__25674 == null)))?((((map__25674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25674):map__25674);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25674__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25674__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25674__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.div.cljs$lang$applyTo = (function (seq25672){
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25672));
});


fulcro.client.dom.option = (function fulcro$client$dom$option(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26945 = arguments.length;
var i__12085__auto___26946 = (0);
while(true){
if((i__12085__auto___26946 < len__12084__auto___26945)){
args__12091__auto__.push((arguments[i__12085__auto___26946]));

var G__26947 = (i__12085__auto___26946 + (1));
i__12085__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25680 = conformed_args__22984__auto__;
var map__25680__$1 = ((((!((map__25680 == null)))?((((map__25680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25680):map__25680);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25680__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25680__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25680__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.option.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.option.cljs$lang$applyTo = (function (seq25678){
return fulcro.client.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25678));
});


fulcro.client.dom.summary = (function fulcro$client$dom$summary(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26954 = arguments.length;
var i__12085__auto___26955 = (0);
while(true){
if((i__12085__auto___26955 < len__12084__auto___26954)){
args__12091__auto__.push((arguments[i__12085__auto___26955]));

var G__26956 = (i__12085__auto___26955 + (1));
i__12085__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25686 = conformed_args__22984__auto__;
var map__25686__$1 = ((((!((map__25686 == null)))?((((map__25686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25686):map__25686);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25686__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25686__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25686__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq25684){
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25684));
});


fulcro.client.dom.samp = (function fulcro$client$dom$samp(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26962 = arguments.length;
var i__12085__auto___26963 = (0);
while(true){
if((i__12085__auto___26963 < len__12084__auto___26962)){
args__12091__auto__.push((arguments[i__12085__auto___26963]));

var G__26971 = (i__12085__auto___26963 + (1));
i__12085__auto___26963 = G__26971;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25691 = conformed_args__22984__auto__;
var map__25691__$1 = ((((!((map__25691 == null)))?((((map__25691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25691):map__25691);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq25690){
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25690));
});


fulcro.client.dom.small = (function fulcro$client$dom$small(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26985 = arguments.length;
var i__12085__auto___26986 = (0);
while(true){
if((i__12085__auto___26986 < len__12084__auto___26985)){
args__12091__auto__.push((arguments[i__12085__auto___26986]));

var G__26987 = (i__12085__auto___26986 + (1));
i__12085__auto___26986 = G__26987;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25722 = conformed_args__22984__auto__;
var map__25722__$1 = ((((!((map__25722 == null)))?((((map__25722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25722):map__25722);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25722__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25722__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25722__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.small.cljs$lang$applyTo = (function (seq25718){
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25718));
});


fulcro.client.dom.style = (function fulcro$client$dom$style(var_args){
var args__12091__auto__ = [];
var len__12084__auto___26994 = arguments.length;
var i__12085__auto___26995 = (0);
while(true){
if((i__12085__auto___26995 < len__12084__auto___26994)){
args__12091__auto__.push((arguments[i__12085__auto___26995]));

var G__26997 = (i__12085__auto___26995 + (1));
i__12085__auto___26995 = G__26997;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25733 = conformed_args__22984__auto__;
var map__25733__$1 = ((((!((map__25733 == null)))?((((map__25733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25733):map__25733);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25733__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25733__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25733__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.style.cljs$lang$applyTo = (function (seq25729){
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25729));
});


fulcro.client.dom.textarea = (function fulcro$client$dom$textarea(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27003 = arguments.length;
var i__12085__auto___27004 = (0);
while(true){
if((i__12085__auto___27004 < len__12084__auto___27003)){
args__12091__auto__.push((arguments[i__12085__auto___27004]));

var G__27005 = (i__12085__auto___27004 + (1));
i__12085__auto___27004 = G__27005;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25745 = conformed_args__22984__auto__;
var map__25745__$1 = ((((!((map__25745 == null)))?((((map__25745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25745):map__25745);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25745__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25745__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25745__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.textarea.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.textarea.cljs$lang$applyTo = (function (seq25741){
return fulcro.client.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25741));
});


fulcro.client.dom.h4 = (function fulcro$client$dom$h4(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27011 = arguments.length;
var i__12085__auto___27013 = (0);
while(true){
if((i__12085__auto___27013 < len__12084__auto___27011)){
args__12091__auto__.push((arguments[i__12085__auto___27013]));

var G__27014 = (i__12085__auto___27013 + (1));
i__12085__auto___27013 = G__27014;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25751 = conformed_args__22984__auto__;
var map__25751__$1 = ((((!((map__25751 == null)))?((((map__25751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25751):map__25751);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25751__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25751__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25751__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq25749){
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25749));
});


fulcro.client.dom.head = (function fulcro$client$dom$head(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27025 = arguments.length;
var i__12085__auto___27026 = (0);
while(true){
if((i__12085__auto___27026 < len__12084__auto___27025)){
args__12091__auto__.push((arguments[i__12085__auto___27026]));

var G__27027 = (i__12085__auto___27026 + (1));
i__12085__auto___27026 = G__27027;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25758 = conformed_args__22984__auto__;
var map__25758__$1 = ((((!((map__25758 == null)))?((((map__25758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25758):map__25758);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25758__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25758__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25758__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.head.cljs$lang$applyTo = (function (seq25756){
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25756));
});


fulcro.client.dom.g = (function fulcro$client$dom$g(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27051 = arguments.length;
var i__12085__auto___27052 = (0);
while(true){
if((i__12085__auto___27052 < len__12084__auto___27051)){
args__12091__auto__.push((arguments[i__12085__auto___27052]));

var G__27053 = (i__12085__auto___27052 + (1));
i__12085__auto___27052 = G__27053;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25765 = conformed_args__22984__auto__;
var map__25765__$1 = ((((!((map__25765 == null)))?((((map__25765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25765):map__25765);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.g.cljs$lang$applyTo = (function (seq25761){
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25761));
});


fulcro.client.dom.stop = (function fulcro$client$dom$stop(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27059 = arguments.length;
var i__12085__auto___27060 = (0);
while(true){
if((i__12085__auto___27060 < len__12084__auto___27059)){
args__12091__auto__.push((arguments[i__12085__auto___27060]));

var G__27061 = (i__12085__auto___27060 + (1));
i__12085__auto___27060 = G__27061;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25770 = conformed_args__22984__auto__;
var map__25770__$1 = ((((!((map__25770 == null)))?((((map__25770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25770):map__25770);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25770__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25770__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25770__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq25768){
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25768));
});


fulcro.client.dom.var$ = (function fulcro$client$dom$var(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27067 = arguments.length;
var i__12085__auto___27068 = (0);
while(true){
if((i__12085__auto___27068 < len__12084__auto___27067)){
args__12091__auto__.push((arguments[i__12085__auto___27068]));

var G__27069 = (i__12085__auto___27068 + (1));
i__12085__auto___27068 = G__27069;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25776 = conformed_args__22984__auto__;
var map__25776__$1 = ((((!((map__25776 == null)))?((((map__25776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25776):map__25776);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25776__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25776__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25776__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq25774){
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25774));
});


fulcro.client.dom.tspan = (function fulcro$client$dom$tspan(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27077 = arguments.length;
var i__12085__auto___27078 = (0);
while(true){
if((i__12085__auto___27078 < len__12084__auto___27077)){
args__12091__auto__.push((arguments[i__12085__auto___27078]));

var G__27082 = (i__12085__auto___27078 + (1));
i__12085__auto___27078 = G__27082;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25820 = conformed_args__22984__auto__;
var map__25820__$1 = ((((!((map__25820 == null)))?((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25820):map__25820);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq25817){
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25817));
});


fulcro.client.dom.ol = (function fulcro$client$dom$ol(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27092 = arguments.length;
var i__12085__auto___27093 = (0);
while(true){
if((i__12085__auto___27093 < len__12084__auto___27092)){
args__12091__auto__.push((arguments[i__12085__auto___27093]));

var G__27094 = (i__12085__auto___27093 + (1));
i__12085__auto___27093 = G__27094;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25831 = conformed_args__22984__auto__;
var map__25831__$1 = ((((!((map__25831 == null)))?((((map__25831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25831):map__25831);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25831__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25831__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25831__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq25828){
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25828));
});


fulcro.client.dom.details = (function fulcro$client$dom$details(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27106 = arguments.length;
var i__12085__auto___27107 = (0);
while(true){
if((i__12085__auto___27107 < len__12084__auto___27106)){
args__12091__auto__.push((arguments[i__12085__auto___27107]));

var G__27108 = (i__12085__auto___27107 + (1));
i__12085__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25842 = conformed_args__22984__auto__;
var map__25842__$1 = ((((!((map__25842 == null)))?((((map__25842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25842):map__25842);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25842__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25842__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25842__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.details.cljs$lang$applyTo = (function (seq25835){
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25835));
});


fulcro.client.dom.line = (function fulcro$client$dom$line(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27111 = arguments.length;
var i__12085__auto___27112 = (0);
while(true){
if((i__12085__auto___27112 < len__12084__auto___27111)){
args__12091__auto__.push((arguments[i__12085__auto___27112]));

var G__27113 = (i__12085__auto___27112 + (1));
i__12085__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25852 = conformed_args__22984__auto__;
var map__25852__$1 = ((((!((map__25852 == null)))?((((map__25852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25852):map__25852);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.line.cljs$lang$applyTo = (function (seq25848){
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25848));
});


fulcro.client.dom.col = (function fulcro$client$dom$col(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27123 = arguments.length;
var i__12085__auto___27124 = (0);
while(true){
if((i__12085__auto___27124 < len__12084__auto___27123)){
args__12091__auto__.push((arguments[i__12085__auto___27124]));

var G__27125 = (i__12085__auto___27124 + (1));
i__12085__auto___27124 = G__27125;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25858 = conformed_args__22984__auto__;
var map__25858__$1 = ((((!((map__25858 == null)))?((((map__25858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25858):map__25858);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25858__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25858__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25858__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.col.cljs$lang$applyTo = (function (seq25855){
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25855));
});


fulcro.client.dom.label = (function fulcro$client$dom$label(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27137 = arguments.length;
var i__12085__auto___27138 = (0);
while(true){
if((i__12085__auto___27138 < len__12084__auto___27137)){
args__12091__auto__.push((arguments[i__12085__auto___27138]));

var G__27139 = (i__12085__auto___27138 + (1));
i__12085__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25865 = conformed_args__22984__auto__;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25865):map__25865);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25865__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25865__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25865__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.label.cljs$lang$applyTo = (function (seq25861){
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25861));
});


fulcro.client.dom.picture = (function fulcro$client$dom$picture(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27144 = arguments.length;
var i__12085__auto___27145 = (0);
while(true){
if((i__12085__auto___27145 < len__12084__auto___27144)){
args__12091__auto__.push((arguments[i__12085__auto___27145]));

var G__27149 = (i__12085__auto___27145 + (1));
i__12085__auto___27145 = G__27149;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25871 = conformed_args__22984__auto__;
var map__25871__$1 = ((((!((map__25871 == null)))?((((map__25871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25871):map__25871);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25871__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25871__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25871__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq25870){
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25870));
});


fulcro.client.dom.rt = (function fulcro$client$dom$rt(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27159 = arguments.length;
var i__12085__auto___27160 = (0);
while(true){
if((i__12085__auto___27160 < len__12084__auto___27159)){
args__12091__auto__.push((arguments[i__12085__auto___27160]));

var G__27163 = (i__12085__auto___27160 + (1));
i__12085__auto___27160 = G__27163;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25877 = conformed_args__22984__auto__;
var map__25877__$1 = ((((!((map__25877 == null)))?((((map__25877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25877):map__25877);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25877__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25877__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25877__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq25874){
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25874));
});


fulcro.client.dom.h6 = (function fulcro$client$dom$h6(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27177 = arguments.length;
var i__12085__auto___27179 = (0);
while(true){
if((i__12085__auto___27179 < len__12084__auto___27177)){
args__12091__auto__.push((arguments[i__12085__auto___27179]));

var G__27180 = (i__12085__auto___27179 + (1));
i__12085__auto___27179 = G__27180;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25883 = conformed_args__22984__auto__;
var map__25883__$1 = ((((!((map__25883 == null)))?((((map__25883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25883):map__25883);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25883__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25883__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25883__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq25881){
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25881));
});


fulcro.client.dom.link = (function fulcro$client$dom$link(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27188 = arguments.length;
var i__12085__auto___27189 = (0);
while(true){
if((i__12085__auto___27189 < len__12084__auto___27188)){
args__12091__auto__.push((arguments[i__12085__auto___27189]));

var G__27190 = (i__12085__auto___27189 + (1));
i__12085__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25889 = conformed_args__22984__auto__;
var map__25889__$1 = ((((!((map__25889 == null)))?((((map__25889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25889):map__25889);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25889__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.link.cljs$lang$applyTo = (function (seq25887){
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25887));
});


fulcro.client.dom.defs = (function fulcro$client$dom$defs(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27198 = arguments.length;
var i__12085__auto___27199 = (0);
while(true){
if((i__12085__auto___27199 < len__12084__auto___27198)){
args__12091__auto__.push((arguments[i__12085__auto___27199]));

var G__27200 = (i__12085__auto___27199 + (1));
i__12085__auto___27199 = G__27200;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25934 = conformed_args__22984__auto__;
var map__25934__$1 = ((((!((map__25934 == null)))?((((map__25934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25934):map__25934);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq25898){
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25898));
});


fulcro.client.dom.colgroup = (function fulcro$client$dom$colgroup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27210 = arguments.length;
var i__12085__auto___27211 = (0);
while(true){
if((i__12085__auto___27211 < len__12084__auto___27210)){
args__12091__auto__.push((arguments[i__12085__auto___27211]));

var G__27212 = (i__12085__auto___27211 + (1));
i__12085__auto___27211 = G__27212;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25946 = conformed_args__22984__auto__;
var map__25946__$1 = ((((!((map__25946 == null)))?((((map__25946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25946):map__25946);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25946__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq25941){
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25941));
});


fulcro.client.dom.meter = (function fulcro$client$dom$meter(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27217 = arguments.length;
var i__12085__auto___27218 = (0);
while(true){
if((i__12085__auto___27218 < len__12084__auto___27217)){
args__12091__auto__.push((arguments[i__12085__auto___27218]));

var G__27219 = (i__12085__auto___27218 + (1));
i__12085__auto___27218 = G__27219;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25954 = conformed_args__22984__auto__;
var map__25954__$1 = ((((!((map__25954 == null)))?((((map__25954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25954):map__25954);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25954__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq25951){
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25951));
});


fulcro.client.dom.bdo = (function fulcro$client$dom$bdo(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27225 = arguments.length;
var i__12085__auto___27227 = (0);
while(true){
if((i__12085__auto___27227 < len__12084__auto___27225)){
args__12091__auto__.push((arguments[i__12085__auto___27227]));

var G__27228 = (i__12085__auto___27227 + (1));
i__12085__auto___27227 = G__27228;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25966 = conformed_args__22984__auto__;
var map__25966__$1 = ((((!((map__25966 == null)))?((((map__25966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25966):map__25966);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25966__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25966__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25966__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq25962){
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25962));
});


fulcro.client.dom.b = (function fulcro$client$dom$b(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27235 = arguments.length;
var i__12085__auto___27236 = (0);
while(true){
if((i__12085__auto___27236 < len__12084__auto___27235)){
args__12091__auto__.push((arguments[i__12085__auto___27236]));

var G__27237 = (i__12085__auto___27236 + (1));
i__12085__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25975 = conformed_args__22984__auto__;
var map__25975__$1 = ((((!((map__25975 == null)))?((((map__25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25975):map__25975);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25975__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.b.cljs$lang$applyTo = (function (seq25972){
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25972));
});


fulcro.client.dom.svg = (function fulcro$client$dom$svg(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27252 = arguments.length;
var i__12085__auto___27254 = (0);
while(true){
if((i__12085__auto___27254 < len__12084__auto___27252)){
args__12091__auto__.push((arguments[i__12085__auto___27254]));

var G__27256 = (i__12085__auto___27254 + (1));
i__12085__auto___27254 = G__27256;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25981 = conformed_args__22984__auto__;
var map__25981__$1 = ((((!((map__25981 == null)))?((((map__25981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25981):map__25981);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25981__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25981__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25981__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq25979){
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25979));
});


fulcro.client.dom.ellipse = (function fulcro$client$dom$ellipse(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27267 = arguments.length;
var i__12085__auto___27268 = (0);
while(true){
if((i__12085__auto___27268 < len__12084__auto___27267)){
args__12091__auto__.push((arguments[i__12085__auto___27268]));

var G__27269 = (i__12085__auto___27268 + (1));
i__12085__auto___27268 = G__27269;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25989 = conformed_args__22984__auto__;
var map__25989__$1 = ((((!((map__25989 == null)))?((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25989):map__25989);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25989__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq25987){
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25987));
});


fulcro.client.dom.code = (function fulcro$client$dom$code(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27279 = arguments.length;
var i__12085__auto___27280 = (0);
while(true){
if((i__12085__auto___27280 < len__12084__auto___27279)){
args__12091__auto__.push((arguments[i__12085__auto___27280]));

var G__27281 = (i__12085__auto___27280 + (1));
i__12085__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__25993 = conformed_args__22984__auto__;
var map__25993__$1 = ((((!((map__25993 == null)))?((((map__25993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25993):map__25993);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25993__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.code.cljs$lang$applyTo = (function (seq25992){
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25992));
});


fulcro.client.dom.dialog = (function fulcro$client$dom$dialog(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27285 = arguments.length;
var i__12085__auto___27286 = (0);
while(true){
if((i__12085__auto___27286 < len__12084__auto___27285)){
args__12091__auto__.push((arguments[i__12085__auto___27286]));

var G__27290 = (i__12085__auto___27286 + (1));
i__12085__auto___27286 = G__27290;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26000 = conformed_args__22984__auto__;
var map__26000__$1 = ((((!((map__26000 == null)))?((((map__26000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26000):map__26000);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26000__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26000__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26000__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq25998){
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25998));
});


fulcro.client.dom.linearGradient = (function fulcro$client$dom$linearGradient(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27295 = arguments.length;
var i__12085__auto___27296 = (0);
while(true){
if((i__12085__auto___27296 < len__12084__auto___27295)){
args__12091__auto__.push((arguments[i__12085__auto___27296]));

var G__27297 = (i__12085__auto___27296 + (1));
i__12085__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26006 = conformed_args__22984__auto__;
var map__26006__$1 = ((((!((map__26006 == null)))?((((map__26006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26006):map__26006);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26006__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq26003){
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26003));
});


fulcro.client.dom.noscript = (function fulcro$client$dom$noscript(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27310 = arguments.length;
var i__12085__auto___27311 = (0);
while(true){
if((i__12085__auto___27311 < len__12084__auto___27310)){
args__12091__auto__.push((arguments[i__12085__auto___27311]));

var G__27312 = (i__12085__auto___27311 + (1));
i__12085__auto___27311 = G__27312;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26009 = conformed_args__22984__auto__;
var map__26009__$1 = ((((!((map__26009 == null)))?((((map__26009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26009):map__26009);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26009__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq26008){
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26008));
});


fulcro.client.dom.h2 = (function fulcro$client$dom$h2(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27318 = arguments.length;
var i__12085__auto___27320 = (0);
while(true){
if((i__12085__auto___27320 < len__12084__auto___27318)){
args__12091__auto__.push((arguments[i__12085__auto___27320]));

var G__27322 = (i__12085__auto___27320 + (1));
i__12085__auto___27320 = G__27322;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26012 = conformed_args__22984__auto__;
var map__26012__$1 = ((((!((map__26012 == null)))?((((map__26012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26012):map__26012);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26012__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26012__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26012__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq26011){
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26011));
});


fulcro.client.dom.area = (function fulcro$client$dom$area(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27328 = arguments.length;
var i__12085__auto___27329 = (0);
while(true){
if((i__12085__auto___27329 < len__12084__auto___27328)){
args__12091__auto__.push((arguments[i__12085__auto___27329]));

var G__27330 = (i__12085__auto___27329 + (1));
i__12085__auto___27329 = G__27330;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26015 = conformed_args__22984__auto__;
var map__26015__$1 = ((((!((map__26015 == null)))?((((map__26015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26015):map__26015);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26015__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.area.cljs$lang$applyTo = (function (seq26014){
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26014));
});


fulcro.client.dom.br = (function fulcro$client$dom$br(var_args){
var args__12091__auto__ = [];
var len__12084__auto___27335 = arguments.length;
var i__12085__auto___27336 = (0);
while(true){
if((i__12085__auto___27336 < len__12084__auto___27335)){
args__12091__auto__.push((arguments[i__12085__auto___27336]));

var G__27338 = (i__12085__auto___27336 + (1));
i__12085__auto___27336 = G__27338;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((0) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((0)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__12092__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__22984__auto__ = fulcro.util.conform_BANG_(cljs.core.cst$kw$fulcro$client$dom_SLASH_dom_DASH_element_DASH_args,args);
var map__26018 = conformed_args__22984__auto__;
var map__26018__$1 = ((((!((map__26018 == null)))?((((map__26018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26018):map__26018);
var css__22987__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26018__$1,cljs.core.cst$kw$css);
var children__22986__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26018__$1,cljs.core.cst$kw$children);
var attrs__22985__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26018__$1,cljs.core.cst$kw$attrs);
var children__22986__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__22986__auto__);
var attrs_value__22988__auto__ = (function (){var or__10805__auto__ = cljs.core.second(attrs__22985__auto__);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__22988__auto__], null),children__22986__auto____$1),css__22987__auto__);
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (0);

fulcro.client.dom.br.cljs$lang$applyTo = (function (seq26017){
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26017));
});


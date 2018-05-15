// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro_css.css');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tagged_literals');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('garden.core');
goog.require('garden.selectors');
/**
 * Replaces slashes and dots with underscore.
 */
fulcro_css.css.cssify = (function fulcro_css$css$cssify(str){
if(cljs.core.truth_(str)){
return clojure.string.replace(str,/[.\/]/,"_");
} else {
return null;
}
});
fulcro_css.css.fq_component = (function fulcro_css$css$fq_component(comp_class){
var temp__5455__auto__ = comp_class.displayName;
if(cljs.core.truth_(temp__5455__auto__)){
var nm = temp__5455__auto__;
return nm;
} else {
return "unknown/unknown";
}
});
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
fulcro_css.css.local_class = (function fulcro_css$css$local_class(var_args){
var G__25314 = arguments.length;
switch (G__25314) {
case 1:
return fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.cssify(fulcro_css.css.fq_component(comp_class)))].join('');
});

fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.cssify(fulcro_css.css.fq_component(comp_class))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(nm))].join('');
});

fulcro_css.css.local_class.cljs$lang$maxFixedArity = 2;

fulcro_css.css.set_classname = (function fulcro_css$css$set_classname(m,subclasses){
return cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$className,subclasses),cljs.core.cst$kw$class));
});

/**
 * @interface
 */
fulcro_css.css.CSS = function(){};

/**
 * Specifies the component's local CSS rules
 */
fulcro_css.css.local_rules = (function fulcro_css$css$local_rules(this$){
if((!((this$ == null))) && (!((this$.fulcro_css$css$CSS$local_rules$arity$1 == null)))){
return this$.fulcro_css$css$CSS$local_rules$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro_css.css.local_rules[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro_css.css.local_rules["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSS.local-rules",this$);
}
}
}
});

/**
 * Specifies the components (typically direct children) whose CSS should be included.
 */
fulcro_css.css.include_children = (function fulcro_css$css$include_children(this$){
if((!((this$ == null))) && (!((this$.fulcro_css$css$CSS$include_children$arity$1 == null)))){
return this$.fulcro_css$css$CSS$include_children$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro_css.css.include_children[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro_css.css.include_children["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSS.include-children",this$);
}
}
}
});


/**
 * @interface
 */
fulcro_css.css.Global = function(){};

/**
 * DEPRECATED. Will be removed in a future release. Do not use for new applications. Use the `$` prefix instead.
 */
fulcro_css.css.global_rules = (function fulcro_css$css$global_rules(this$){
if((!((this$ == null))) && (!((this$.fulcro_css$css$Global$global_rules$arity$1 == null)))){
return this$.fulcro_css$css$Global$global_rules$arity$1(this$);
} else {
var x__11538__auto__ = (((this$ == null))?null:this$);
var m__11539__auto__ = (fulcro_css.css.global_rules[goog.typeOf(x__11538__auto__)]);
if(!((m__11539__auto__ == null))){
return (m__11539__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto__.call(null,this$));
} else {
var m__11539__auto____$1 = (fulcro_css.css.global_rules["_"]);
if(!((m__11539__auto____$1 == null))){
return (m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11539__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11539__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Global.global-rules",this$);
}
}
}
});

/**
 * Returns true if the given component has css
 */
fulcro_css.css.CSS_QMARK_ = (function fulcro_css$css$CSS_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro_css$css$CSS$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Returns true if the component has global rules
 */
fulcro_css.css.Global_QMARK_ = (function fulcro_css$css$Global_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro_css$css$Global$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Get the *raw* value from the global-rules of a component.
 */
fulcro_css.css.get_global_rules = (function fulcro_css$css$get_global_rules(component){
if(cljs.core.truth_(fulcro_css.css.Global_QMARK_(component))){
return fulcro_css.css.global_rules(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Get the *raw* value from the local-rules of a component.
 */
fulcro_css.css.get_local_rules = (function fulcro_css$css$get_local_rules(component){
if(cljs.core.truth_(fulcro_css.css.CSS_QMARK_(component))){
return fulcro_css.css.local_rules(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Returns true if the given string starts with one of [. $ &$ &.]
 */
fulcro_css.css.prefixed_name_QMARK_ = (function fulcro_css$css$prefixed_name_QMARK_(nm){
return !((cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm) == null));
});
/**
 * Returns the prefix of a string. [. $ &$ &.]
 */
fulcro_css.css.get_prefix = (function fulcro_css$css$get_prefix(nm){
var vec__25366 = cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25366,(1),null);
return prefix;
});
/**
 * Returns true if the given keyword starts with one of [. $ &$ &.]
 */
fulcro_css.css.prefixed_keyword_QMARK_ = (function fulcro_css$css$prefixed_keyword_QMARK_(kw){
var and__10793__auto__ = (kw instanceof cljs.core.Keyword);
if(and__10793__auto__){
return fulcro_css.css.prefixed_name_QMARK_(cljs.core.name(kw));
} else {
return and__10793__auto__;
}
});
/**
 * Removes the prefix of a string.
 */
fulcro_css.css.remove_prefix = (function fulcro_css$css$remove_prefix(nm){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(fulcro_css.css.get_prefix(nm)));
});
/**
 * Removes the prefix of a keyword.
 */
fulcro_css.css.remove_prefix_kw = (function fulcro_css$css$remove_prefix_kw(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.remove_prefix(cljs.core.name(kw)));
});
/**
 * Returns the list of components from the include-children method of a component
 */
fulcro_css.css.get_includes = (function fulcro_css$css$get_includes(component){
if(cljs.core.truth_(fulcro_css.css.CSS_QMARK_(component))){
return fulcro_css.css.include_children(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Recursively finds all includes starting at the given component.
 */
fulcro_css.css.get_nested_includes = (function fulcro_css$css$get_nested_includes(component){
var direct_children = fulcro_css.css.get_includes(component);
if(cljs.core.empty_QMARK_(direct_children)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(direct_children,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (direct_children){
return (function (p1__25377_SHARP_,p2__25378_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__25377_SHARP_,(fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1(p2__25378_SHARP_) : fulcro_css.css.get_nested_includes.call(null,p2__25378_SHARP_)));
});})(direct_children))
,cljs.core.PersistentVector.EMPTY,direct_children));
}
});
fulcro_css.css.localize_name = (function fulcro_css$css$localize_name(nm,comp){
var no_prefix = fulcro_css.css.remove_prefix(nm);
var prefix = fulcro_css.css.get_prefix(nm);
var G__25380 = prefix;
switch (G__25380) {
case ".":
case "&.":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no_prefix)))].join('');

break;
case "$":
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
case "&$":
return ["&.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25380)].join('')));

}
});
fulcro_css.css.localize_kw = (function fulcro_css$css$localize_kw(kw,comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.localize_name(cljs.core.name(kw),comp));
});
/**
 * Gives the localized classname for the given keyword.
 */
fulcro_css.css.kw__GT_localized_classname = (function fulcro_css$css$kw__GT_localized_classname(comp,kw){
var nm = cljs.core.name(kw);
var prefix = fulcro_css.css.get_prefix(nm);
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(prefix));
var G__25385 = prefix;
switch (G__25385) {
case "$":
case "&$":
return no_prefix;

break;
case ".":
case "&.":
return fulcro_css.css.local_class.cljs$core$IFn$_invoke$arity$2(comp,no_prefix);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25385)].join('')));

}
});
fulcro_css.css.selector_QMARK_ = (function fulcro_css$css$selector_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(garden.selectors.CSSSelector,cljs.core.type(x));
});
fulcro_css.css.localize_selector = (function fulcro_css$css$localize_selector(selector,comp){
var val = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(selector);
var split_cns_selectors = clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /);
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val,split_cns_selectors){
return (function (p1__25390_SHARP_){
if(cljs.core.truth_(fulcro_css.css.prefixed_name_QMARK_(p1__25390_SHARP_))){
return fulcro_css.css.localize_name(p1__25390_SHARP_,comp);
} else {
return p1__25390_SHARP_;
}
});})(val,split_cns_selectors))
,split_cns_selectors)));
});
/**
 * Converts prefixed keywords into localized keywords and localizes the values of garden selectors
 */
fulcro_css.css.localize_css = (function fulcro_css$css$localize_css(component){
return clojure.walk.postwalk((function (ele){
if(cljs.core.truth_(fulcro_css.css.prefixed_keyword_QMARK_(ele))){
return fulcro_css.css.localize_kw(ele,component);
} else {
if(cljs.core.truth_(fulcro_css.css.selector_QMARK_(ele))){
return fulcro_css.css.localize_selector(ele,component);
} else {
return ele;

}
}
}),fulcro_css.css.get_local_rules(component));
});
/**
 * Gets the local and global rules from the given component.
 */
fulcro_css.css.get_css_rules = (function fulcro_css$css$get_css_rules(component){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.localize_css(component),fulcro_css.css.get_global_rules(component));
});
/**
 * Recursively gets all global and localized rules (in garden notation) starting at the given component.
 */
fulcro_css.css.get_css = (function fulcro_css$css$get_css(component){
var own_rules = fulcro_css.css.get_css_rules(component);
var nested_children = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_nested_includes(component));
var nested_children_rules = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (own_rules,nested_children){
return (function (p1__25399_SHARP_,p2__25400_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__25399_SHARP_,fulcro_css.css.get_css_rules(p2__25400_SHARP_));
});})(own_rules,nested_children))
,cljs.core.PersistentVector.EMPTY,nested_children);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(own_rules,nested_children_rules);
});
/**
 * Gets all the keywords that are present in a selector
 */
fulcro_css.css.get_selector_keywords = (function fulcro_css$css$get_selector_keywords(selector){
var val = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(selector);
var classnames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (val){
return (function (p1__25404_SHARP_){
return cljs.core.re_matches(/[.$].*/,p1__25404_SHARP_);
});})(val))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,classnames);
});
/**
 * Gets all used classnames in from the given rules as keywords
 */
fulcro_css.css.get_class_keys = (function fulcro_css$css$get_class_keys(rules){
var flattened_rules = cljs.core.flatten(rules);
var selectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.selector_QMARK_,flattened_rules);
var prefixed_kws = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.prefixed_keyword_QMARK_,flattened_rules);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.get_selector_keywords,selectors)),prefixed_kws));
});
/**
 * Returns a map from user-given CSS rule names to localized names of the given component.
 */
fulcro_css.css.get_classnames = (function fulcro_css$css$get_classnames(comp){
var local_class_keys = fulcro_css.css.get_class_keys(fulcro_css.css.get_local_rules(comp));
var global_class_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.remove_prefix_kw,fulcro_css.css.get_class_keys(fulcro_css.css.get_global_rules(comp)));
var local_classnames = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.remove_prefix_kw,local_class_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (local_class_keys,global_class_keys){
return (function (p1__25411_SHARP_){
return fulcro_css.css.kw__GT_localized_classname(comp,p1__25411_SHARP_);
});})(local_class_keys,global_class_keys))
,local_class_keys));
var global_classnames = cljs.core.zipmap(global_class_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,global_class_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_classnames,global_classnames], 0));
});
/**
 * Returns a string that contains the raw CSS for the rules defined on the given component's sub-tree. This can be used for
 * server-side rendering of the style element, or in a `style` element as the :dangerouslySetInnerHTML/:html value:
 * 
 * (dom/style #js {:dangerouslySetInnerHTML #js {:__html (raw-css component)}})
 * 
 */
fulcro_css.css.raw_css = (function fulcro_css$css$raw_css(component){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(component)], 0));
});
/**
 * Returns a React Style element with the (recursive) CSS of the given component. Useful for directly embedding in your UI VDOM.
 */
fulcro_css.css.style_element = (function fulcro_css$css$style_element(component){
var G__25415 = "style";
var G__25416 = ({"dangerouslySetInnerHTML": ({"__html": garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(component)], 0))})});
return React.createElement(G__25415,G__25416);
});
/**
 * Remove the given element from the DOM by ID
 */
fulcro_css.css.remove_from_dom = (function fulcro_css$css$remove_from_dom(id){
var temp__5455__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5455__auto__)){
var old_element = temp__5455__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's DOM  with the co-located CSS of the specified component.
 */
fulcro_css.css.upsert_css = (function fulcro_css$css$upsert_css(id,root_component){
fulcro_css.css.remove_from_dom(id);

var style_ele = document.createElement("style");
style_ele.innerHTML = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(root_component)], 0));

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

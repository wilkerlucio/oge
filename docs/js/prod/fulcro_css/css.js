// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro_css.css');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tagged_literals');
goog.require('clojure.string');
goog.require('com.rpl.specter');
goog.require('om.next');
goog.require('garden.core');
goog.require('garden.selectors');
goog.require('cljs.core');
goog.require('fulcro_css.core');

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
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro_css.css.local_rules[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro_css.css.local_rules["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
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
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro_css.css.include_children[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro_css.css.include_children["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
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
 * Specifies the component's global CSS rules
 */
fulcro_css.css.global_rules = (function fulcro_css$css$global_rules(this$){
if((!((this$ == null))) && (!((this$.fulcro_css$css$Global$global_rules$arity$1 == null)))){
return this$.fulcro_css$css$Global$global_rules$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro_css.css.global_rules[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro_css.css.global_rules["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
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
var vec__48612 = cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48612,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48612,(1),null);
return prefix;
});
/**
 * Returns true if the given keyword starts with one of [. $ &$ &.]
 */
fulcro_css.css.prefixed_keyword_QMARK_ = (function fulcro_css$css$prefixed_keyword_QMARK_(kw){
var and__10400__auto__ = (kw instanceof cljs.core.Keyword);
if(and__10400__auto__){
return fulcro_css.css.prefixed_name_QMARK_(cljs.core.name(kw));
} else {
return and__10400__auto__;
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
return (function (p1__48615_SHARP_,p2__48616_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__48615_SHARP_,(fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1(p2__48616_SHARP_) : fulcro_css.css.get_nested_includes.call(null,p2__48616_SHARP_)));
});})(direct_children))
,cljs.core.PersistentVector.EMPTY,direct_children));
}
});
fulcro_css.css.localize_name = (function fulcro_css$css$localize_name(nm,comp){
var no_prefix = fulcro_css.css.remove_prefix(nm);
var prefix = fulcro_css.css.get_prefix(nm);
var G__48620 = prefix;
switch (G__48620) {
case ".":
case "&.":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no_prefix)))].join('');

break;
case "$":
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
case "&$":
return ["&.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48620)].join('')));

}
});
fulcro_css.css.localize_kw = (function fulcro_css$css$localize_kw(kw,comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fulcro_css.css.localize_name(cljs.core.name(kw),comp));
});
/**
 * Gives the localized classname for the given keyword.
 */
fulcro_css.css.local_class = (function fulcro_css$css$local_class(comp,kw){
var nm = cljs.core.name(kw);
var prefix = fulcro_css.css.get_prefix(nm);
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(prefix));
var G__48626 = prefix;
switch (G__48626) {
case "$":
case "&$":
return no_prefix;

break;
case ".":
case "&.":
return fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$2(comp,no_prefix);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48626)].join('')));

}
});
fulcro_css.css.selector_QMARK_ = (function fulcro_css$css$selector_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(garden.selectors.CSSSelector,cljs.core.type(x));
});
fulcro_css.css.localize_selector = (function fulcro_css$css$localize_selector(selector,comp){
var val = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(selector);
var split_cns_selectors = clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /);
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val,split_cns_selectors){
return (function (p1__48631_SHARP_){
if(cljs.core.truth_(fulcro_css.css.prefixed_name_QMARK_(p1__48631_SHARP_))){
return fulcro_css.css.localize_name(p1__48631_SHARP_,comp);
} else {
return p1__48631_SHARP_;
}
});})(val,split_cns_selectors))
,split_cns_selectors)));
});
/**
 * Converts prefixed keywords into localized keywords and localizes the values of garden selectors
 */
fulcro_css.css.localize_css = (function fulcro_css$css$localize_css(component){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__31013__auto__ = fulcro_css.css.pathcache48638;
var info__31013__auto____$1 = (((info__31013__auto__ == null))?(function (){var info48639 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.walker,new cljs.core.Var(function(){return com.rpl.specter.walker;},cljs.core.cst$sym$com$rpl$specter_SLASH_walker,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$rpl$specter,cljs.core.cst$sym$walker,"resources/public/js/prod/com/rpl/specter.cljc",9,1,1292,1296,cljs.core.List.EMPTY,"Navigate the data structure until reaching\n          a value for which `afn` returns truthy. Has\n          same semantics as clojure.walk.",(cljs.core.truth_(com.rpl.specter.walker)?com.rpl.specter.walker.cljs$lang$test:null)])),cljs.core.cst$sym$sp_SLASH_walker),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse(((function (info__31013__auto__){
return (function (p1__48636_SHARP_){
var or__10412__auto__ = fulcro_css.css.prefixed_keyword_QMARK_(p1__48636_SHARP_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return fulcro_css.css.selector_QMARK_(p1__48636_SHARP_);
}
});})(info__31013__auto__))
,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__48636_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$prefixed_DASH_keyword_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_),cljs.core.list(cljs.core.cst$sym$selector_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_))))], null),cljs.core.list(cljs.core.cst$sym$sp_SLASH_walker,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__48636_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$prefixed_DASH_keyword_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_),cljs.core.list(cljs.core.cst$sym$selector_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_)))))], null),"fulcro-css.css",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$sp_SLASH_walker,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__48636_SHARP_], null),cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$prefixed_DASH_keyword_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_),cljs.core.list(cljs.core.cst$sym$selector_QMARK_,cljs.core.cst$sym$p1__48636_SHARP_)))], null));
fulcro_css.css.pathcache48638 = info48639;

return info48639;
})():info__31013__auto__);
var precompiled48640 = com.rpl.specter.impl.cached_path_info_precompiled(info__31013__auto____$1);
var dynamic_QMARK___31014__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__31013__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___31014__auto__)){
var G__48641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.walker,((function (info__31013__auto__,info__31013__auto____$1,precompiled48640,dynamic_QMARK___31014__auto__){
return (function (p1__48636_SHARP_){
var or__10412__auto__ = fulcro_css.css.prefixed_keyword_QMARK_(p1__48636_SHARP_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return fulcro_css.css.selector_QMARK_(p1__48636_SHARP_);
}
});})(info__31013__auto__,info__31013__auto____$1,precompiled48640,dynamic_QMARK___31014__auto__))
], null);
return (precompiled48640.cljs$core$IFn$_invoke$arity$1 ? precompiled48640.cljs$core$IFn$_invoke$arity$1(G__48641) : precompiled48640.call(null,G__48641));
} else {
return precompiled48640;
}
})(),(function (p1__48637_SHARP_){
if(cljs.core.truth_(fulcro_css.css.prefixed_keyword_QMARK_(p1__48637_SHARP_))){
return fulcro_css.css.localize_kw(p1__48637_SHARP_,component);
} else {
return fulcro_css.css.localize_selector(p1__48637_SHARP_,component);
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
return (function (p1__48650_SHARP_,p2__48651_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__48650_SHARP_,fulcro_css.css.get_css_rules(p2__48651_SHARP_));
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
return (function (p1__48656_SHARP_){
return cljs.core.re_matches(/[.$].*/,p1__48656_SHARP_);
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
 * Returns a map from user-given CSS rule names to fulcro-css localized names of the given component.
 */
fulcro_css.css.get_classnames = (function fulcro_css$css$get_classnames(comp){
var local_class_keys = fulcro_css.css.get_class_keys(fulcro_css.css.get_local_rules(comp));
var global_class_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.remove_prefix_kw,fulcro_css.css.get_class_keys(fulcro_css.css.get_global_rules(comp)));
var local_classnames = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.remove_prefix_kw,local_class_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (local_class_keys,global_class_keys){
return (function (p1__48657_SHARP_){
return fulcro_css.css.local_class(comp,p1__48657_SHARP_);
});})(local_class_keys,global_class_keys))
,local_class_keys));
var global_classnames = cljs.core.zipmap(global_class_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,global_class_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_classnames,global_classnames], 0));
});
/**
 * (Re)place the STYLE element with the provided ID on the document's DOM  with the co-located CSS of the specified component.
 */
fulcro_css.css.upsert_css = (function fulcro_css$css$upsert_css(id,root_component){
fulcro_css.core.remove_from_dom(id);

var style_ele = document.createElement("style");
style_ele.innerHTML = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(root_component)], 0));

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

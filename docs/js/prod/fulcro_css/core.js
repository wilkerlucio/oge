// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro_css.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tagged_literals');
goog.require('clojure.string');
goog.require('com.rpl.specter');
goog.require('garden.core');
goog.require('om.next');
goog.require('cljs.core');

/**
 * @interface
 */
fulcro_css.core.CSS = function(){};

/**
 * Specifies the component-local CSS
 */
fulcro_css.core.css = (function fulcro_css$core$css(this$){
if((!((this$ == null))) && (!((this$.fulcro_css$core$CSS$css$arity$1 == null)))){
return this$.fulcro_css$core$CSS$css$arity$1(this$);
} else {
var x__11145__auto__ = (((this$ == null))?null:this$);
var m__11146__auto__ = (fulcro_css.core.css[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto__.call(null,this$));
} else {
var m__11146__auto____$1 = (fulcro_css.core.css["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__11146__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSS.css",this$);
}
}
}
});

fulcro_css.core.call_css = (function fulcro_css$core$call_css(component){
return fulcro_css.core.css(component);
});
/**
 * Replaces slashes and dots with underscore.
 */
fulcro_css.core.cssify = (function fulcro_css$core$cssify(str){
if(cljs.core.truth_(str)){
return clojure.string.replace(str,/[.\/]/,"_");
} else {
return null;
}
});
fulcro_css.core.fq_component = (function fulcro_css$core$fq_component(comp_class){
var temp__5457__auto__ = comp_class.displayName;
if(cljs.core.truth_(temp__5457__auto__)){
var nm = temp__5457__auto__;
return nm;
} else {
return "unknown/unknown";
}
});
/**
 * Generate a keyword for a localized CSS class for use in Garden CSS syntax as a localized component classname keyword.
 */
fulcro_css.core.local_kw = (function fulcro_css$core$local_kw(var_args){
var G__48596 = arguments.length;
switch (G__48596) {
case 1:
return fulcro_css.core.local_kw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro_css.core.local_kw.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro_css.core.local_kw.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.core.cssify(fulcro_css.core.fq_component(comp_class)))].join(''));
});

fulcro_css.core.local_kw.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.core.cssify(fulcro_css.core.fq_component(comp_class))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(nm))].join(''));
});

fulcro_css.core.local_kw.cljs$lang$maxFixedArity = 2;

/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
fulcro_css.core.local_class = (function fulcro_css$core$local_class(var_args){
var G__48604 = arguments.length;
switch (G__48604) {
case 1:
return fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.core.cssify(fulcro_css.core.fq_component(comp_class)))].join('');
});

fulcro_css.core.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.core.cssify(fulcro_css.core.fq_component(comp_class))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(nm))].join('');
});

fulcro_css.core.local_class.cljs$lang$maxFixedArity = 2;

fulcro_css.core.CSS_QMARK_ = (function fulcro_css$core$CSS_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro_css$core$CSS$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Remove the given element from the DOM by ID
 */
fulcro_css.core.remove_from_dom = (function fulcro_css$core$remove_from_dom(id){
var temp__5457__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5457__auto__)){
var old_element = temp__5457__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's DOM  with the co-located CSS of the specified component.
 */
fulcro_css.core.upsert_css = (function fulcro_css$core$upsert_css(id,root_component){
fulcro_css.core.remove_from_dom(id);

var style_ele = document.createElement("style");
style_ele.innerHTML = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.core.call_css(root_component)], 0));

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});
fulcro_css.core.set_classname = (function fulcro_css$core$set_classname(m,subclasses){
return cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$className,subclasses),cljs.core.cst$kw$class));
});

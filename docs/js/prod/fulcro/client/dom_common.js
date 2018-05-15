// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.dom_common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.object');
fulcro.client.dom_common.remove_separators = (function fulcro$client$dom_common$remove_separators(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
fulcro.client.dom_common.get_tokens = (function fulcro$client$dom_common$get_tokens(k){
return cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(k));
});
/**
 * Parse CSS shorthand keyword and return map of id/classes.
 * 
 *   (parse :.klass3#some-id.klass1.klass2)
 *   => {:id        "some-id"
 *    :classes ["klass3" "klass1" "klass2"]}
 */
fulcro.client.dom_common.parse = (function fulcro$client$dom_common$parse(k){
if(cljs.core.truth_(k)){
var tokens = fulcro.client.dom_common.get_tokens(k);
var id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens){
return (function (p1__22129_SHARP_){
return cljs.core.re_matches(/^#.*/,p1__22129_SHARP_);
});})(tokens))
,tokens));
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens,id){
return (function (p1__22130_SHARP_){
return cljs.core.re_matches(/^\..*/,p1__22130_SHARP_);
});})(tokens,id))
,tokens);
var sanitized_id = fulcro.client.dom_common.remove_separators(id);
if(cljs.core.truth_(cljs.core.re_matches(/^(\.[^.#]+|#[^.#]+)+$/,cljs.core.name(k)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid style keyword. It contains something other than classnames and IDs.",cljs.core.PersistentArrayMap.EMPTY);
}

var G__22135 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$classes,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom_common.remove_separators,classes))], null);
if(cljs.core.truth_(sanitized_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22135,cljs.core.cst$kw$id,sanitized_id);
} else {
return G__22135;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Takes a sequence of classname strings and a string with existing classes. Returns a string of these properly joined.
 * 
 *   classes-str can be nil or and empty string, and classes-seq can be nil or empty.
 */
fulcro.client.dom_common.combined_classes = (function fulcro$client$dom_common$combined_classes(classes_seq,classes_str){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",((cljs.core.seq(classes_str))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes_seq,classes_str):classes_seq));
});
/**
 * Combine a hiccup-style keyword with props that are either a JS or CLJS map.
 */
fulcro.client.dom_common.add_kwprops_to_props = (function fulcro$client$dom_common$add_kwprops_to_props(props,kw){
var map__22150 = fulcro.client.dom_common.parse(kw);
var map__22150__$1 = ((((!((map__22150 == null)))?((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22150):map__22150);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22150__$1,cljs.core.cst$kw$classes,cljs.core.PersistentVector.EMPTY);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22150__$1,cljs.core.cst$kw$id);
if(((props == null)) || (cljs.core.object_QMARK_(props))){
var props__$1 = goog.object.clone(props);
var existing_classes = goog.object.get(props__$1,"className");
if(cljs.core.seq(classes)){
var G__22155_22180 = props__$1;
var G__22156_22181 = "className";
var G__22157_22182 = fulcro.client.dom_common.combined_classes(classes,existing_classes);
goog.object.set(G__22155_22180,G__22156_22181,G__22157_22182);
} else {
}

if(cljs.core.truth_(id)){
goog.object.set(props__$1,"id",id);
} else {
}

return props__$1;
} else {
var existing_classes = cljs.core.cst$kw$className.cljs$core$IFn$_invoke$arity$1(props);
var G__22159 = (function (){var or__10805__auto__ = props;
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__22159__$1 = ((cljs.core.seq(classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22159,cljs.core.cst$kw$className,fulcro.client.dom_common.combined_classes(classes,existing_classes)):G__22159);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22159__$1,cljs.core.cst$kw$id,id);
} else {
return G__22159__$1;
}
}
});
fulcro.client.dom_common.tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 131, [cljs.core.cst$sym$form,null,cljs.core.cst$sym$audio,null,cljs.core.cst$sym$input,null,cljs.core.cst$sym$menuitem,null,cljs.core.cst$sym$radialGradient,null,cljs.core.cst$sym$base,null,cljs.core.cst$sym$h1,null,cljs.core.cst$sym$embed,null,cljs.core.cst$sym$h3,null,cljs.core.cst$sym$body,null,cljs.core.cst$sym$keygen,null,cljs.core.cst$sym$progress,null,cljs.core.cst$sym$main,null,cljs.core.cst$sym$cite,null,cljs.core.cst$sym$rect,null,cljs.core.cst$sym$polyline,null,cljs.core.cst$sym$map,null,cljs.core.cst$sym$object,null,cljs.core.cst$sym$i,null,cljs.core.cst$sym$p,null,cljs.core.cst$sym$nav,null,cljs.core.cst$sym$ruby,null,cljs.core.cst$sym$a,null,cljs.core.cst$sym$menu,null,cljs.core.cst$sym$blockquote,null,cljs.core.cst$sym$img,null,cljs.core.cst$sym$text,null,cljs.core.cst$sym$span,null,cljs.core.cst$sym$track,null,cljs.core.cst$sym$data,null,cljs.core.cst$sym$u,null,cljs.core.cst$sym$dl,null,cljs.core.cst$sym$select,null,cljs.core.cst$sym$polygon,null,cljs.core.cst$sym$pattern,null,cljs.core.cst$sym$html,null,cljs.core.cst$sym$thead,null,cljs.core.cst$sym$path,null,cljs.core.cst$sym$del,null,cljs.core.cst$sym$fieldset,null,cljs.core.cst$sym$aside,null,cljs.core.cst$sym$figure,null,cljs.core.cst$sym$figcaption,null,cljs.core.cst$sym$mask,null,cljs.core.cst$sym$q,null,cljs.core.cst$sym$bdi,null,cljs.core.cst$sym$video,null,cljs.core.cst$sym$address,null,cljs.core.cst$sym$caption,null,cljs.core.cst$sym$dd,null,cljs.core.cst$sym$rp,null,cljs.core.cst$sym$hr,null,cljs.core.cst$sym$meta,null,cljs.core.cst$sym$tbody,null,cljs.core.cst$sym$table,null,cljs.core.cst$sym$pre,null,cljs.core.cst$sym$ul,null,cljs.core.cst$sym$sup,null,cljs.core.cst$sym$dfn,null,cljs.core.cst$sym$sub,null,cljs.core.cst$sym$mark,null,cljs.core.cst$sym$script,null,cljs.core.cst$sym$big,null,cljs.core.cst$sym$button,null,cljs.core.cst$sym$wbr,null,cljs.core.cst$sym$strong,null,cljs.core.cst$sym$use,null,cljs.core.cst$sym$li,null,cljs.core.cst$sym$dt,null,cljs.core.cst$sym$td,null,cljs.core.cst$sym$tr,null,cljs.core.cst$sym$circle,null,cljs.core.cst$sym$section,null,cljs.core.cst$sym$th,null,cljs.core.cst$sym$time,null,cljs.core.cst$sym$optgroup,null,cljs.core.cst$sym$iframe,null,cljs.core.cst$sym$legend,null,cljs.core.cst$sym$em,null,cljs.core.cst$sym$kbd,null,cljs.core.cst$sym$article,null,cljs.core.cst$sym$clipPath,null,cljs.core.cst$sym$abbr,null,cljs.core.cst$sym$source,null,cljs.core.cst$sym$output,null,cljs.core.cst$sym$header,null,cljs.core.cst$sym$datalist,null,cljs.core.cst$sym$tfoot,null,cljs.core.cst$sym$s,null,cljs.core.cst$sym$ins,null,cljs.core.cst$sym$footer,null,cljs.core.cst$sym$title,null,cljs.core.cst$sym$h5,null,cljs.core.cst$sym$canvas,null,cljs.core.cst$sym$param,null,cljs.core.cst$sym$div,null,cljs.core.cst$sym$option,null,cljs.core.cst$sym$summary,null,cljs.core.cst$sym$samp,null,cljs.core.cst$sym$small,null,cljs.core.cst$sym$style,null,cljs.core.cst$sym$textarea,null,cljs.core.cst$sym$h4,null,cljs.core.cst$sym$head,null,cljs.core.cst$sym$g,null,cljs.core.cst$sym$stop,null,cljs.core.cst$sym$var,null,cljs.core.cst$sym$tspan,null,cljs.core.cst$sym$ol,null,cljs.core.cst$sym$details,null,cljs.core.cst$sym$line,null,cljs.core.cst$sym$col,null,cljs.core.cst$sym$label,null,cljs.core.cst$sym$picture,null,cljs.core.cst$sym$rt,null,cljs.core.cst$sym$h6,null,cljs.core.cst$sym$link,null,cljs.core.cst$sym$defs,null,cljs.core.cst$sym$colgroup,null,cljs.core.cst$sym$meter,null,cljs.core.cst$sym$bdo,null,cljs.core.cst$sym$b,null,cljs.core.cst$sym$svg,null,cljs.core.cst$sym$ellipse,null,cljs.core.cst$sym$code,null,cljs.core.cst$sym$dialog,null,cljs.core.cst$sym$linearGradient,null,cljs.core.cst$sym$noscript,null,cljs.core.cst$sym$h2,null,cljs.core.cst$sym$area,null,cljs.core.cst$sym$br,null], null), null);

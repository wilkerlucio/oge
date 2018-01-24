// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.i18n');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.logging');
fulcro.i18n._STAR_current_locale_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("en-US");
fulcro.i18n._STAR_loaded_translations_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fulcro.i18n._STAR_custom_formats_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
fulcro.i18n.current_locale = (function fulcro$i18n$current_locale(){
var or__10805__auto__ = cljs.core.deref(fulcro.i18n._STAR_current_locale_STAR_);
if(cljs.core.truth_(or__10805__auto__)){
return or__10805__auto__;
} else {
return "en-US";
}
});
fulcro.i18n.translations_for_locale = (function fulcro$i18n$translations_for_locale(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.i18n._STAR_loaded_translations_STAR_),fulcro.i18n.current_locale());
});
/**
 * Merges the given formats into the supported custom formats. See https://formatjs.io/guides/message-syntax/#custom-formats
 *   for more information on the structure of custom formats.
 * 
 *   IMPORTANT: `formats` must be a clj/cljs map. It will be converted to the proper JS object behind the scenes during
 *   translation.
 */
fulcro.i18n.merge_custom_formats = (function fulcro$i18n$merge_custom_formats(formats){
if(cljs.core.map_QMARK_(formats)){
} else {
throw (new Error("Assert failed: (map? formats)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fulcro.i18n._STAR_custom_formats_STAR_,cljs.core.merge,formats);
});
var real_tr = (function fulcro$i18n$real_tr(msg){
var msg_key = ["|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = fulcro.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,msg);
return translation;
});
tr = (function fulcro$i18n$tr(msg){
return real_tr(msg);
});
var real_trc = (function fulcro$i18n$real_trc(ctxt,msg){
var msg_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctxt),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var translations = fulcro.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,msg);
return translation;
});
trc = (function (ctxt,msg){
return real_trc(ctxt,msg);
});
trf = (function() { 
var fulcro$i18n$trf__delegate = function (fmt,args){
try{var argmap = (((cljs.core.map_QMARK_(cljs.core.first(args))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))))?cljs.core.first(args):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args))));
var msg_key = ["|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = fulcro.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,fmt);
var custom_formats = (cljs.core.truth_(cljs.core.deref(fulcro.i18n._STAR_custom_formats_STAR_))?cljs.core.clj__GT_js(cljs.core.deref(fulcro.i18n._STAR_custom_formats_STAR_)):null);
var formatter = (cljs.core.truth_(custom_formats)?(new IntlMessageFormat(translation,fulcro.i18n.current_locale(),custom_formats)):(new IntlMessageFormat(translation,fulcro.i18n.current_locale())));
return formatter.format(cljs.core.clj__GT_js(argmap));
}catch (e40112){var e = e40112;
fulcro.client.logging.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unable to format trf output ",e], 0));

return "???";
}};
var fulcro$i18n$trf = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__40117__i = 0, G__40117__a = new Array(arguments.length -  1);
while (G__40117__i < G__40117__a.length) {G__40117__a[G__40117__i] = arguments[G__40117__i + 1]; ++G__40117__i;}
  args = new cljs.core.IndexedSeq(G__40117__a,0,null);
} 
return fulcro$i18n$trf__delegate.call(this,fmt,args);};
fulcro$i18n$trf.cljs$lang$maxFixedArity = 1;
fulcro$i18n$trf.cljs$lang$applyTo = (function (arglist__40118){
var fmt = cljs.core.first(arglist__40118);
var args = cljs.core.rest(arglist__40118);
return fulcro$i18n$trf__delegate(fmt,args);
});
fulcro$i18n$trf.cljs$core$IFn$_invoke$arity$variadic = fulcro$i18n$trf__delegate;
return fulcro$i18n$trf;
})()
;

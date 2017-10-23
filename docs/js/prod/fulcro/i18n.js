// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.i18n');
goog.require('cljs.core');
goog.require('cljs.core.constants');
fulcro.i18n._STAR_current_locale_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("en-US");
fulcro.i18n._STAR_loaded_translations_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fulcro.i18n.current_locale = (function fulcro$i18n$current_locale(){
return cljs.core.deref(fulcro.i18n._STAR_current_locale_STAR_);
});
fulcro.i18n.translations_for_locale = (function fulcro$i18n$translations_for_locale(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fulcro.i18n._STAR_loaded_translations_STAR_),fulcro.i18n.current_locale());
});
var ret__11737__auto___32244 = fulcro.i18n.if_cljs = (function fulcro$i18n$if_cljs(_AMPERSAND_form,_AMPERSAND_env,then,else$){
if(cljs.core.truth_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return then;
} else {
return else$;
}
});
fulcro.i18n.if_cljs.cljs$lang$macro = true;

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
var fulcro$i18n$trf__delegate = function (fmt,p__32245){
var map__32246 = p__32245;
var map__32246__$1 = ((((!((map__32246 == null)))?((((map__32246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32246):map__32246);
var argmap = map__32246__$1;
try{var msg_key = ["|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join('');
var translations = fulcro.i18n.translations_for_locale();
var translation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(translations,msg_key,fmt);
var formatter = (new IntlMessageFormat(translation,fulcro.i18n.current_locale()));
return formatter.format(cljs.core.clj__GT_js(argmap));
}catch (e32248){var e = e32248;
return "???";
}};
var fulcro$i18n$trf = function (fmt,var_args){
var p__32245 = null;
if (arguments.length > 1) {
var G__32249__i = 0, G__32249__a = new Array(arguments.length -  1);
while (G__32249__i < G__32249__a.length) {G__32249__a[G__32249__i] = arguments[G__32249__i + 1]; ++G__32249__i;}
  p__32245 = new cljs.core.IndexedSeq(G__32249__a,0,null);
} 
return fulcro$i18n$trf__delegate.call(this,fmt,p__32245);};
fulcro$i18n$trf.cljs$lang$maxFixedArity = 1;
fulcro$i18n$trf.cljs$lang$applyTo = (function (arglist__32250){
var fmt = cljs.core.first(arglist__32250);
var p__32245 = cljs.core.rest(arglist__32250);
return fulcro$i18n$trf__delegate(fmt,p__32245);
});
fulcro$i18n$trf.cljs$core$IFn$_invoke$arity$variadic = fulcro$i18n$trf__delegate;
return fulcro$i18n$trf;
})()
;

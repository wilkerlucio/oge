goog.provide('com.wsscode.oge.ui.codemirror');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.dom');
goog.require('goog.object');
goog.require('com.wsscode.pathom.connect');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.reader');
goog.require('cljsjs.codemirror');
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$fold$foldcode=shadow.js.require("module$node_modules$codemirror$addon$fold$foldcode", {});
var module$node_modules$codemirror$addon$fold$foldgutter=shadow.js.require("module$node_modules$codemirror$addon$fold$foldgutter", {});
var module$node_modules$codemirror$addon$fold$brace_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$brace_fold", {});
var module$node_modules$codemirror$addon$fold$indent_fold=shadow.js.require("module$node_modules$codemirror$addon$fold$indent_fold", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$addon$search$match_highlighter=shadow.js.require("module$node_modules$codemirror$addon$search$match_highlighter", {});
var module$node_modules$codemirror$addon$search$search=shadow.js.require("module$node_modules$codemirror$addon$search$search", {});
var module$node_modules$codemirror$addon$search$searchcursor=shadow.js.require("module$node_modules$codemirror$addon$search$searchcursor", {});
var module$node_modules$codemirror$addon$hint$anyword_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$anyword_hint", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$display$placeholder=shadow.js.require("module$node_modules$codemirror$addon$display$placeholder", {});
var module$node_modules$parinfer_codemirror$parinfer_codemirror=shadow.js.require("module$node_modules$parinfer_codemirror$parinfer_codemirror", {});
var module$com$wsscode$oge$ui$oge_mode=shadow.js.require("module$com$wsscode$oge$ui$oge_mode", {});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"obj","obj",981763962)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","theme","com.wsscode.oge.ui.codemirror/theme",1694705790),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","indentUnit","com.wsscode.oge.ui.codemirror/indentUnit",1181793993),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","smartIndent","com.wsscode.oge.ui.codemirror/smartIndent",-1193206474),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","readOnly","com.wsscode.oge.ui.codemirror/readOnly",1751105953),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","value","com.wsscode.oge.ui.codemirror/value",602417211),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","onChange","com.wsscode.oge.ui.codemirror/onChange",984127913),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","theme","com.wsscode.oge.ui.codemirror/theme",1694705790),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","indentUnit","com.wsscode.oge.ui.codemirror/indentUnit",1181793993),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","smartIndent","com.wsscode.oge.ui.codemirror/smartIndent",-1193206474),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30644){
return cljs.core.map_QMARK_(G__30644);
})], null),(function (G__30644){
return cljs.core.map_QMARK_(G__30644);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","theme","com.wsscode.oge.ui.codemirror/theme",1694705790),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","indentUnit","com.wsscode.oge.ui.codemirror/indentUnit",1181793993),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","smartIndent","com.wsscode.oge.ui.codemirror/smartIndent",-1193206474),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","theme","com.wsscode.oge.ui.codemirror/theme",1694705790),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","indentUnit","com.wsscode.oge.ui.codemirror/indentUnit",1181793993),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","smartIndent","com.wsscode.oge.ui.codemirror/smartIndent",-1193206474),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","theme","com.wsscode.oge.ui.codemirror/theme",1694705790),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","indentUnit","com.wsscode.oge.ui.codemirror/indentUnit",1181793993),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","smartIndent","com.wsscode.oge.ui.codemirror/smartIndent",-1193206474),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","props","com.wsscode.oge.ui.codemirror/props",1285183885),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","value","com.wsscode.oge.ui.codemirror/value",602417211)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","value","com.wsscode.oge.ui.codemirror/value",602417211)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30647){
return cljs.core.map_QMARK_(G__30647);
}),(function (G__30647){
return cljs.core.contains_QMARK_(G__30647,new cljs.core.Keyword(null,"value","value",305978217));
})], null),(function (G__30647){
return ((cljs.core.map_QMARK_(G__30647)) && (cljs.core.contains_QMARK_(G__30647,new cljs.core.Keyword(null,"value","value",305978217))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","value","com.wsscode.oge.ui.codemirror/value",602417211)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"value","value",305978217)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","extraKeys","com.wsscode.oge.ui.codemirror/extraKeys",561680448),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.fn_QMARK_], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__30651){
return cljs.core.map_QMARK_(G__30651);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__14798__auto__,v__14799__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__14799__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)))], null),null));
com.wsscode.oge.ui.codemirror.prop_call = (function com$wsscode$oge$ui$codemirror$prop_call(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30661 = arguments.length;
var i__4500__auto___30662 = (0);
while(true){
if((i__4500__auto___30662 < len__4499__auto___30661)){
args__4502__auto__.push((arguments[i__4500__auto___30662]));

var G__30663 = (i__4500__auto___30662 + (1));
i__4500__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic = (function (comp,name,args){
var temp__5457__auto__ = (function (){var G__30657 = fulcro.client.primitives.props(comp);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__30657) : name.call(null,G__30657));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return null;
}
});

com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.oge.ui.codemirror.prop_call.cljs$lang$applyTo = (function (seq30654){
var G__30655 = cljs.core.first(seq30654);
var seq30654__$1 = cljs.core.next(seq30654);
var G__30656 = cljs.core.first(seq30654__$1);
var seq30654__$2 = cljs.core.next(seq30654__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30655,G__30656,seq30654__$2);
});

com.wsscode.oge.ui.codemirror.html_props = (function com$wsscode$oge$ui$codemirror$html_props(props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30666){
var vec__30667 = p__30666;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30667,(1),null);
return cljs.core.namespace(k);
}),props)));
});
com.wsscode.oge.ui.codemirror.oge_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof com.wsscode.oge.ui.codemirror.Editor !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.oge.ui.codemirror.Editor = (function com$wsscode$oge$ui$codemirror$Editor(){
var this__28659__auto__ = this;
React.Component.apply(this__28659__auto__,arguments);

if(!((this__28659__auto__.initLocalState == null))){
this__28659__auto__.state = this__28659__auto__.initLocalState();
} else {
this__28659__auto__.state = {};
}

return this__28659__auto__;
});

com.wsscode.oge.ui.codemirror.Editor.prototype = goog.object.clone(React.Component.prototype);
}

var x30683_30718 = com.wsscode.oge.ui.codemirror.Editor.prototype;
x30683_30718.componentWillUpdate = ((function (x30683_30718){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(((!((this__28514__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__28514__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__28523__auto___30719 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives.props(this__28514__auto__));
var next_ident__28524__auto___30720 = fulcro.client.primitives.ident(this__28514__auto__,fulcro.client.primitives._next_props(next_props__28515__auto__,this__28514__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__28523__auto___30719,next_ident__28524__auto___30720)){
var idxr__28525__auto___30723 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__28525__auto___30723 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__28525__auto___30723),((function (idxr__28525__auto___30723,ident__28523__auto___30719,next_ident__28524__auto___30720,this__28514__auto__,x30683_30718){
return (function (indexes__28526__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__28526__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__28523__auto___30719], null),cljs.core.disj,this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__28524__auto___30720], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__28514__auto__);
});})(idxr__28525__auto___30723,ident__28523__auto___30719,next_ident__28524__auto___30720,this__28514__auto__,x30683_30718))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__28514__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__28514__auto__);
});})(x30683_30718))
;

x30683_30718.shouldComponentUpdate = ((function (x30683_30718){
return (function (next_props__28515__auto__,next_state__28516__auto__){
var this__28514__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__28517__auto__ = next_props__28515__auto__.children;
var next_props__28515__auto____$1 = goog.object.get(next_props__28515__auto__,"fulcro$value");
var next_props__28515__auto____$2 = (function (){var G__30685 = next_props__28515__auto____$1;
if((next_props__28515__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__30685);
} else {
return G__30685;
}
})();
var current_props__28518__auto__ = fulcro.client.primitives.props(this__28514__auto__);
var next_props_stale_QMARK___28519__auto__ = (fulcro.client.primitives.get_basis_time(current_props__28518__auto__) > fulcro.client.primitives.get_basis_time(next_props__28515__auto____$2));
var props_changed_QMARK___28520__auto__ = ((!(next_props_stale_QMARK___28519__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__28518__auto__,next_props__28515__auto____$2)));
var state_changed_QMARK___28521__auto__ = (function (){var and__3911__auto__ = this__28514__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30686 = this__28514__auto__.state;
var G__30687 = "fulcro$state";
return goog.object.get(G__30686,G__30687);
})(),goog.object.get(next_state__28516__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___28522__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__28514__auto__.props.children,next_children__28517__auto__);
var or__3922__auto__ = props_changed_QMARK___28520__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___28521__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___28522__auto__;
}
}
}
});})(x30683_30718))
;

x30683_30718.componentDidUpdate = ((function (x30683_30718){
return (function (prev_props__28527__auto__,prev_state__28528__auto__){
var this__28514__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__28514__auto__);
});})(x30683_30718))
;

x30683_30718.componentWillMount = ((function (x30683_30718){
return (function (){
var this__28514__auto__ = this;
var indexer__28529__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__28514__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__28529__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__28529__auto__,this__28514__auto__);
}
});})(x30683_30718))
;

x30683_30718.componentWillReceiveProps = ((function (x30683_30718){
return (function (next_props__28489__auto__){
var this__28488__auto__ = this;
var this$ = this__28488__auto__;
var map__30688 = fulcro.client.primitives._next_props(next_props__28489__auto__,this__28488__auto__);
var map__30688__$1 = ((((!((map__30688 == null)))?(((((map__30688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30688):map__30688);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30688__$1,new cljs.core.Keyword(null,"value","value",305978217));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30688__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var cm = goog.object.get(this$,"codemirror");
var cur_index = (function (){var G__30690 = cm;
var G__30691 = ["options","ogeIndex"];
return goog.object.getValueByKeys(G__30690,G__30691);
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = cur_index;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(indexes,cljs.core.deref(cur_index));
} else {
return and__3911__auto__;
}
})())){
cljs.core.reset_BANG_(com.wsscode.oge.ui.codemirror.oge_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(cur_index,indexes);

var G__30692_30726 = (function (){var G__30695 = cm;
var G__30696 = ["options","hintOptions"];
return goog.object.getValueByKeys(G__30695,G__30696);
})();
var G__30693_30727 = "hint";
var G__30694_30728 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes);
goog.object.set(G__30692_30726,G__30693_30727,G__30694_30728);
} else {
}

if(cljs.core.not(goog.object.get(this$,"editorHold"))){
var cur_value = cm.getValue();
if(cljs.core.truth_((function (){var and__3911__auto__ = cm;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = value;
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cur_value);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return cm.setValue(value);
} else {
return null;
}
} else {
return null;
}
});})(x30683_30718))
;

x30683_30718.componentDidMount = ((function (x30683_30718){
return (function (){
var this__28504__auto__ = this;
var this$ = this__28504__auto__;
var reconciler__28505__auto__ = fulcro.client.primitives.get_reconciler(this__28504__auto__);
var lifecycle__28506__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__28505__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__28504__auto__,"fulcro$mounted",true);

if((lifecycle__28506__auto__ == null)){
} else {
var G__30699_30729 = this__28504__auto__;
var G__30700_30730 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__28506__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__28506__auto__.cljs$core$IFn$_invoke$arity$2(G__30699_30729,G__30700_30730) : lifecycle__28506__auto__.call(null,G__30699_30729,G__30700_30730));
}

var textarea = goog.object.get(this$,"textNode");
var options = cljs.core.clj__GT_js((function (){var or__3922__auto__ = new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var process = new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","process","com.wsscode.oge.ui.codemirror/process",-1960568548).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$));
var codemirror = CodeMirror.fromTextArea(textarea,options);
try{codemirror.on("change",((function (textarea,options,process,codemirror,this$,reconciler__28505__auto__,lifecycle__28506__auto__,this__28504__auto__,x30683_30718){
return (function (p1__30679_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(p1__30679_SHARP_,"origin"),"setValue")){
clearTimeout(goog.object.get(this$,"editorHold"));

var G__30703_30731 = this$;
var G__30704_30732 = "editorHold";
var G__30705_30733 = setTimeout(((function (G__30703_30731,G__30704_30732,textarea,options,process,codemirror,this$,reconciler__28505__auto__,lifecycle__28506__auto__,this__28504__auto__,x30683_30718){
return (function (){
return goog.object.set(this$,"editorHold",false);
});})(G__30703_30731,G__30704_30732,textarea,options,process,codemirror,this$,reconciler__28505__auto__,lifecycle__28506__auto__,this__28504__auto__,x30683_30718))
,(800));
goog.object.set(G__30703_30731,G__30704_30732,G__30705_30733);

return com.wsscode.oge.ui.codemirror.prop_call.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"onChange","onChange",-312891301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30679_SHARP_.getValue()], 0));
} else {
return null;
}
});})(textarea,options,process,codemirror,this$,reconciler__28505__auto__,lifecycle__28506__auto__,this__28504__auto__,x30683_30718))
);

codemirror.setValue(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));

if(cljs.core.truth_(process)){
(process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(codemirror) : process.call(null,codemirror));
} else {
}
}catch (e30701){var e_30734 = e30701;
console.warn("Error setting up CodeMirror",e_30734);
}
return goog.object.set(this$,"codemirror",codemirror);
});})(x30683_30718))
;

x30683_30718.componentWillUnmount = ((function (x30683_30718){
return (function (){
var this__28507__auto__ = this;
var this$ = this__28507__auto__;
var reconciler__28508__auto__ = fulcro.client.primitives.get_reconciler(this__28507__auto__);
var lifecycle__28509__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__28508__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__28510__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__28508__auto__);
var st__28511__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__28510__auto__);
var indexer__28512__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__28510__auto__);
goog.object.set(this__28507__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__28511__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__28511__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__28507__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__28511__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__28507__auto__], 0));
} else {
}

if((lifecycle__28509__auto__ == null)){
} else {
var G__30709_30735 = this__28507__auto__;
var G__30710_30736 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__28509__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__28509__auto__.cljs$core$IFn$_invoke$arity$2(G__30709_30735,G__30710_30736) : lifecycle__28509__auto__.call(null,G__30709_30735,G__30710_30736));
}

if((indexer__28512__auto__ == null)){
} else {
fulcro.client.impl.protocols.drop_component_BANG_(indexer__28512__auto__,this__28507__auto__);
}

var temp__5455__auto__ = goog.object.get(this$,"codemirror");
if(cljs.core.truth_(temp__5455__auto__)){
var cm = temp__5455__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(x30683_30718))
;

x30683_30718.render = ((function (x30683_30718){
return (function (){
var this__28513__auto__ = this;
var this$ = this__28513__auto__;
var _STAR_reconciler_STAR_30711 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30712 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_30713 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_30714 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_30715 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__28513__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__28513__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__28513__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__28513__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__28513__auto__;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.oge.ui.codemirror.html_props(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"onChange","onChange",-312891301)], 0))),fulcro.util.force_children(React.createElement("textarea",({"ref": ((function (props,_STAR_reconciler_STAR_30711,_STAR_depth_STAR_30712,_STAR_shared_STAR_30713,_STAR_instrument_STAR_30714,_STAR_parent_STAR_30715,this$,this__28513__auto__,x30683_30718){
return (function (p1__30680_SHARP_){
return goog.object.set(this$,"textNode",p1__30680_SHARP_);
});})(props,_STAR_reconciler_STAR_30711,_STAR_depth_STAR_30712,_STAR_shared_STAR_30713,_STAR_instrument_STAR_30714,_STAR_parent_STAR_30715,this$,this__28513__auto__,x30683_30718))
, "defaultValue": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)})))], null),null);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_30715;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_30714;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_30713;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_30712;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30711;
}});})(x30683_30718))
;


com.wsscode.oge.ui.codemirror.Editor.prototype.constructor = com.wsscode.oge.ui.codemirror.Editor;

com.wsscode.oge.ui.codemirror.Editor.prototype.constructor.displayName = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.prototype.fulcro$isComponent = true;

var x30716_30737 = com.wsscode.oge.ui.codemirror.Editor;


var x30717_30738 = com.wsscode.oge.ui.codemirror.Editor.prototype;


com.wsscode.oge.ui.codemirror.Editor.cljs$lang$type = true;

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorStr = "com.wsscode.oge.ui.codemirror/Editor";

com.wsscode.oge.ui.codemirror.Editor.cljs$lang$ctorPrWriter = (function (this__28662__auto__,writer__28663__auto__,opt__28664__auto__){
return cljs.core._write(writer__28663__auto__,"com.wsscode.oge.ui.codemirror/Editor");
});
com.wsscode.oge.ui.codemirror.editor = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.Editor);
com.wsscode.oge.ui.codemirror.escape_re = (function com$wsscode$oge$ui$codemirror$escape_re(input){
var re = (new RegExp("([.*+?^=!:${}()|[\\]\\/\\\\])","g"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)].join('').replace(re,"\\$1");
});
com.wsscode.oge.ui.codemirror.fuzzy_re = (function com$wsscode$oge$ui$codemirror$fuzzy_re(input){
return RegExp(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,c){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.escape_re(c)),".*"].join('');
}),"",input),"i");
});
com.wsscode.oge.ui.codemirror.str__GT_keyword = (function com$wsscode$oge$ui$codemirror$str__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
});
com.wsscode.oge.ui.codemirror.token_context = (function com$wsscode$oge$ui$codemirror$token_context(p__30739,token){
var map__30740 = p__30739;
var map__30740__$1 = ((((!((map__30740 == null)))?(((((map__30740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30740):map__30740);
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30740__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var state = goog.object.get(token,"state");
var mode = goog.object.get(state,"mode");
var path_stack = goog.object.get(state,"pathStack");
var find_ctx = ((function (state,mode,path_stack,map__30740,map__30740__$1,index_io){
return (function() {
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = null;
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1 = (function (s){
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentVector.EMPTY);
});
var com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2 = (function (s,ctx){
while(true){
var mode__$1 = goog.object.get(s,"mode");
var key = goog.object.get(s,"key");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",(function (){var G__30744 = s;
var G__30745 = ["key","mode"];
return goog.object.getValueByKeys(G__30744,G__30745);
})())))){
var key__$1 = com.wsscode.oge.ui.codemirror.str__GT_keyword((function (){var G__30746 = s;
var G__30747 = ["key","key"];
return goog.object.getValueByKeys(G__30746,G__30747);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(typeof key === 'string')))){
var key__$1 = com.wsscode.oge.ui.codemirror.str__GT_keyword(key);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_io,cljs.core.PersistentHashSet.EMPTY),key__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1)], null);
} else {
var G__30772 = (function (){var G__30748 = s;
var G__30749 = ["prev","prev"];
return goog.object.getValueByKeys(G__30748,G__30749);
})();
var G__30773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ctx,key__$1);
s = G__30772;
ctx = G__30773;
continue;
}
} else {
if(cljs.core.not(cljs.core.seq(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(s)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),ctx], null);
} else {
return null;
}
}
}
break;
}
});
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx = function(s,ctx){
switch(arguments.length){
case 1:
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1.call(this,s);
case 2:
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2.call(this,s,ctx);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$1 = com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__1;
com$wsscode$oge$ui$codemirror$token_context_$_find_ctx.cljs$core$IFn$_invoke$arity$2 = com$wsscode$oge$ui$codemirror$token_context_$_find_ctx__2;
return com$wsscode$oge$ui$codemirror$token_context_$_find_ctx;
})()
;})(state,mode,path_stack,map__30740,map__30740__$1,index_io))
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ident",mode)) && ((((goog.object.get(path_stack,"key") == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ident","ident",-742346)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("join",mode)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(token,"string"),goog.object.get(path_stack,"key"))) || ((goog.object.get(path_stack,"key") == null)))))){
return find_ctx.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",(function (){var G__30750 = path_stack;
var G__30751 = ["prev","mode"];
return goog.object.getValueByKeys(G__30750,G__30751);
})()))?(function (){var G__30752 = path_stack;
var G__30753 = ["prev","prev","prev"];
return goog.object.getValueByKeys(G__30752,G__30753);
})():(function (){var G__30754 = path_stack;
var G__30755 = ["prev","prev"];
return goog.object.getValueByKeys(G__30754,G__30755);
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",mode)){
if(cljs.core.truth_((function (){var G__30756 = path_stack;
var G__30757 = ["prev","mode"];
return goog.object.getValueByKeys(G__30756,G__30757);
})())){
return find_ctx.cljs$core$IFn$_invoke$arity$1(goog.object.get(path_stack,"prev"));
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentVector.EMPTY], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("param-exp",mode)){
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var G__30760 = path_stack;
var G__30761 = ["prev","prev","mode"];
return goog.object.getValueByKeys(G__30760,G__30761);
})();
if(cljs.core.truth_(and__3911__auto__)){
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__30766 = path_stack;
var G__30767 = ["prev","mode"];
return goog.object.getValueByKeys(G__30766,G__30767);
})());
if(or__3922__auto__){
return or__3922__auto__;
} else {
var G__30768 = path_stack;
var G__30769 = ["prev","prev","prev","mode"];
return goog.object.getValueByKeys(G__30768,G__30769);
}
} else {
return and__3911__auto__;
}
})())){
return find_ctx.cljs$core$IFn$_invoke$arity$1((function (){var G__30770 = path_stack;
var G__30771 = ["prev","prev"];
return goog.object.getValueByKeys(G__30770,G__30771);
})());
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return null;
}
}
}
}
});
com.wsscode.oge.ui.codemirror.completions = (function com$wsscode$oge$ui$codemirror$completions(index,token,reg){
var ctx = com.wsscode.oge.ui.codemirror.token_context(index,token);
if(cljs.core.truth_(reg)){
var G__30775 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ctx);
var G__30775__$1 = (((G__30775 instanceof cljs.core.Keyword))?G__30775.fqn:null);
switch (G__30775__$1) {
case "attribute":
return com.wsscode.pathom.connect.discover_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776),com.wsscode.oge.ui.codemirror.oge_cache),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),cljs.core.namespace),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(ctx)));

break;
case "ident":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__30775,G__30775__$1,ctx){
return (function (p1__30774_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__30774_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
});})(G__30775,G__30775__$1,ctx))
),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(index));

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return null;
}
});
goog.exportSymbol('com.wsscode.oge.ui.codemirror.completions', com.wsscode.oge.ui.codemirror.completions);
goog.object.set(window,"cljsDeref",cljs.core.deref);
com.wsscode.oge.ui.codemirror.cm_completions = (function com$wsscode$oge$ui$codemirror$cm_completions(index,cm){
var cur = cm.getCursor();
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
return com.wsscode.oge.ui.codemirror.completions(index,token,reg);
});
com.wsscode.oge.ui.codemirror.autocomplete = (function com$wsscode$oge$ui$codemirror$autocomplete(index,cm,options){
var cur = cm.getCursor();
var line = cur.line;
var ch = cur.ch;
var token = cm.getTokenAt(cur);
var reg = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token.string,(0),(ch - token.start));
var blank_QMARK_ = (function (){var fexpr__30778 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["(",null,"{",null,"[",null," ",null], null), null);
return (fexpr__30778.cljs$core$IFn$_invoke$arity$1 ? fexpr__30778.cljs$core$IFn$_invoke$arity$1(reg) : fexpr__30778.call(null,reg));
})();
var start = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,(ch - cljs.core.count(reg))));
var end = (cljs.core.truth_(blank_QMARK_)?cur:CodeMirror.Pos(line,goog.object.get(token,"end")));
var words = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,com.wsscode.oge.ui.codemirror.cm_completions(index,cm));
if(cljs.core.truth_(words)){
var fuzzy = (cljs.core.truth_(blank_QMARK_)?/.*/:com.wsscode.oge.ui.codemirror.fuzzy_re(reg));
return ({"list": cljs.core.clj__GT_js(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words){
return (function (p1__30777_SHARP_){
return cljs.core.re_find(fuzzy,p1__30777_SHARP_);
});})(fuzzy,cur,line,ch,token,reg,blank_QMARK_,start,end,words))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),cljs.core.PersistentHashSet.EMPTY),words))))), "from": start, "to": end});
} else {
return null;
}
});
com.wsscode.oge.ui.codemirror.def_cm_command = (function com$wsscode$oge$ui$codemirror$def_cm_command(name,f){
var G__30779 = goog.object.get(CodeMirror,"commands");
var G__30780 = name;
var G__30781 = f;
return goog.object.set(G__30779,G__30780,G__30781);
});
com.wsscode.oge.ui.codemirror.key_has_children_QMARK_ = (function com$wsscode$oge$ui$codemirror$key_has_children_QMARK_(completions,token){
var reg = com.wsscode.oge.ui.codemirror.str__GT_keyword(goog.object.get(token,"string"));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom",goog.object.get(token,"type"))) && (((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(completions,reg))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.namespace(reg))))));
});
goog.exportSymbol('com.wsscode.oge.ui.codemirror.key_has_children_QMARK_', com.wsscode.oge.ui.codemirror.key_has_children_QMARK_);
com.wsscode.oge.ui.codemirror.str_repeat = (function com$wsscode$oge$ui$codemirror$str_repeat(s,n){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,s));
});
com.wsscode.oge.ui.codemirror.def_cm_command("ogeJoin",(function (cm){
var cur = cm.getCursor();
var token = cm.getTokenAt(cur);
var indent = (function (){var or__3922__auto__ = (function (){var G__30784 = token;
var G__30785 = ["state","pathStack","indent"];
return goog.object.getValueByKeys(G__30784,G__30785);
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("attr-list",(function (){var G__30788 = token;
var G__30789 = ["state","mode"];
return goog.object.getValueByKeys(G__30788,G__30789);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("atom-composite",goog.object.get(token,"type"))))){
var line = cur.line;
var start = CodeMirror.Pos(line,goog.object.get(token,"start"));
var end = CodeMirror.Pos(line,goog.object.get(token,"end"));
var s = goog.object.get(token,"string");
var vec__30790 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start.ch,indent))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos((line + (1)),((2) + indent)),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.oge.ui.codemirror.str_repeat(" ",(indent + (1)))),"[]}"].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [CodeMirror.Pos(line,((goog.object.get(token,"start") + cljs.core.count(s)) + (3))),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," []}"].join('')], null));
var cursor_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30790,(0),null);
var joined = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30790,(1),null);
cm.replaceRange(joined,start,end);

cm.setCursor(cursor_end);

return cm.showHint();
} else {
return null;
}
}));
com.wsscode.oge.ui.codemirror.oge = (function com$wsscode$oge$ui$codemirror$oge(p__30794){
var map__30795 = p__30794;
var map__30795__$1 = ((((!((map__30795 == null)))?(((((map__30795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30795):map__30795);
var props = map__30795__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30795__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","extraKeys","com.wsscode.oge.ui.codemirror/extraKeys",561680448),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","hintOptions","com.wsscode.oge.ui.codemirror/hintOptions",-146462266),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","autoCloseBrackets","com.wsscode.oge.ui.codemirror/autoCloseBrackets",246096745),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631),new cljs.core.Keyword(null,"ogeIndex","ogeIndex",-550404780),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","gutters","com.wsscode.oge.ui.codemirror/gutters",1945074326),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","matchBrackets","com.wsscode.oge.ui.codemirror/matchBrackets",-1842834214),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","foldGutter","com.wsscode.oge.ui.codemirror/foldGutter",88128571),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","highlightSelectionMatches","com.wsscode.oge.ui.codemirror/highlightSelectionMatches",-2062767588)],[new cljs.core.PersistentArrayMap(null, 1, ["Ctrl-Space","autocomplete"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hint","hint",439639918),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.oge.ui.codemirror.autocomplete,indexes),new cljs.core.Keyword(null,"completeSingle","completeSingle",-665527534),false], null),true,true,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(indexes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null),"oge",true,true,true]);
var G__30797 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","process","com.wsscode.oge.ui.codemirror/process",-1960568548),((function (options,map__30795,map__30795__$1,props,indexes){
return (function (cm){
cm.on("keyup",((function (options,map__30795,map__30795__$1,props,indexes){
return (function (cm__$1,e){
if(((cljs.core.not((function (){var G__30800 = cm__$1;
var G__30801 = ["state","completionActive"];
return goog.object.getValueByKeys(G__30800,G__30801);
})())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(goog.object.get(e,"key")))))){
return CodeMirror.showHint(cm__$1);
} else {
return null;
}
});})(options,map__30795,map__30795__$1,props,indexes))
);

var G__30802 = cm;
var G__30803 = "smart";
var G__30804 = ({"forceBalance": true});
return module$node_modules$parinfer_codemirror$parinfer_codemirror.init(G__30802,G__30803,G__30804);
});})(options,map__30795,map__30795__$1,props,indexes))
),new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757),((function (options,map__30795,map__30795__$1,props,indexes){
return (function (p1__30793_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__30793_SHARP_], 0));
});})(options,map__30795,map__30795__$1,props,indexes))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__30797) : com.wsscode.oge.ui.codemirror.editor.call(null,G__30797));
});
com.wsscode.oge.ui.codemirror.clojure = (function com$wsscode$oge$ui$codemirror$clojure(props){
var options = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","lineNumbers","com.wsscode.oge.ui.codemirror/lineNumbers",58719631),true,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","mode","com.wsscode.oge.ui.codemirror/mode",-44852935),"clojure",new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","matchBrackets","com.wsscode.oge.ui.codemirror/matchBrackets",-1842834214),true,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","highlightSelectionMatches","com.wsscode.oge.ui.codemirror/highlightSelectionMatches",-2062767588),true,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","foldGutter","com.wsscode.oge.ui.codemirror/foldGutter",88128571),true,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","gutters","com.wsscode.oge.ui.codemirror/gutters",1945074326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CodeMirror-linenumbers","CodeMirror-foldgutter"], null)], null);
var G__30806 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.oge.ui.codemirror","options","com.wsscode.oge.ui.codemirror/options",-1270412757),((function (options){
return (function (p1__30805_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,p1__30805_SHARP_], 0));
});})(options))
);
return (com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.oge.ui.codemirror.editor.cljs$core$IFn$_invoke$arity$1(G__30806) : com.wsscode.oge.ui.codemirror.editor.call(null,G__30806));
});

//# sourceMappingURL=com.wsscode.oge.ui.codemirror.js.map

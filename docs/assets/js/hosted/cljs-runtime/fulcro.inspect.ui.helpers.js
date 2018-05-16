goog.provide('fulcro.inspect.ui.helpers');
goog.require('cljs.core');
goog.require('fulcro_css.css');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('fulcro.client.primitives');
fulcro.inspect.ui.helpers.js_get_in = (function fulcro$inspect$ui$helpers$js_get_in(x,path){
var G__42402 = x;
var G__42403 = cljs.core.clj__GT_js(path);
return goog.object.getValueByKeys(G__42402,G__42403);
});
fulcro.inspect.ui.helpers.html_attr_merge = (function fulcro$inspect$ui$helpers$html_attr_merge(a,b){
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
fulcro.inspect.ui.helpers.props__GT_html = (function fulcro$inspect$ui$helpers$props__GT_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42418 = arguments.length;
var i__4500__auto___42419 = (0);
while(true){
if((i__4500__auto___42419 < len__4499__auto___42418)){
args__4502__auto__.push((arguments[i__4500__auto___42419]));

var G__42422 = (i__4500__auto___42419 + (1));
i__4500__auto___42419 = G__42422;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__42410){
var vec__42411 = p__42410;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42411,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42411,(1),null);
return cljs.core.simple_keyword_QMARK_(k);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,fulcro.inspect.ui.helpers.html_attr_merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"react-key","react-key",1337881348)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42406_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42406_SHARP_,new cljs.core.Keyword(null,"react-key","react-key",1337881348));
}),props))));
});

fulcro.inspect.ui.helpers.props__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.helpers.props__GT_html.cljs$lang$applyTo = (function (seq42408){
var G__42409 = cljs.core.first(seq42408);
var seq42408__$1 = cljs.core.next(seq42408);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42409,seq42408__$1);
});

fulcro.inspect.ui.helpers.expand_classes = (function fulcro$inspect$ui$helpers$expand_classes(css,classes){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(css,classes))], null);
});
fulcro.inspect.ui.helpers.props = (function fulcro$inspect$ui$helpers$props(comp,defaults){
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(defaults,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.props(comp)], 0));
});
fulcro.inspect.ui.helpers.props_PLUS_classes = (function fulcro$inspect$ui$helpers$props_PLUS_classes(comp,defaults){
var props = fulcro.client.primitives.props(comp);
var css = fulcro_css.css.get_classnames(fulcro.client.primitives.react_type(comp));
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(defaults,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.expand_classes(css,new cljs.core.Keyword("fulcro.inspect.ui.core","classes","fulcro.inspect.ui.core/classes",2092032546).cljs$core$IFn$_invoke$arity$1(props)),props], 0));
});
fulcro.inspect.ui.helpers.computed_factory = (function fulcro$inspect$ui$helpers$computed_factory(var_args){
var G__42451 = arguments.length;
switch (G__42451) {
case 1:
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return ((function (factory){
return (function() {
var fulcro$inspect$ui$helpers$real_factory = null;
var fulcro$inspect$ui$helpers$real_factory__1 = (function (props){
return fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$2(props,cljs.core.PersistentArrayMap.EMPTY);
});
var fulcro$inspect$ui$helpers$real_factory__2 = (function (props,computed){
var G__42452 = fulcro.client.primitives.computed(props,computed);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__42452) : factory.call(null,G__42452));
});
fulcro$inspect$ui$helpers$real_factory = function(props,computed){
switch(arguments.length){
case 1:
return fulcro$inspect$ui$helpers$real_factory__1.call(this,props);
case 2:
return fulcro$inspect$ui$helpers$real_factory__2.call(this,props,computed);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$1 = fulcro$inspect$ui$helpers$real_factory__1;
fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$2 = fulcro$inspect$ui$helpers$real_factory__2;
return fulcro$inspect$ui$helpers$real_factory;
})()
;})(factory))
});

fulcro.inspect.ui.helpers.computed_factory.cljs$lang$maxFixedArity = 2;

fulcro.inspect.ui.helpers.normalize_id = (function fulcro$inspect$ui$helpers$normalize_id(id){
var temp__5455__auto__ = cljs.core.re_find(/(.+?)(-\d+)$/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__42455 = temp__5455__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42455,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42455,(1),null);
if((id instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefix,(1)));
} else {
if((id instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(prefix);
} else {
return prefix;

}
}
} else {
return id;
}
});
/**
 * Extracts the app id from a reference.
 */
fulcro.inspect.ui.helpers.ref_app_id = (function fulcro$inspect$ui$helpers$ref_app_id(ref){
if(((cljs.core.vector_QMARK_(ref)) && (cljs.core.vector_QMARK_(cljs.core.second(ref))))){
} else {
throw (new Error(["Assert failed: ","Ref with app it must be in the format: [:id-key [::app-id app-id]]","\n","(and (vector? ref) (vector? (second ref)))"].join('')));
}

var vec__42461 = ref;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(0),null);
var vec__42465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42461,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465,(0),null);
var app_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42465,(1),null);
return fulcro.inspect.ui.helpers.normalize_id(app_id);
});
fulcro.inspect.ui.helpers.comp_app_id = (function fulcro$inspect$ui$helpers$comp_app_id(comp){
return fulcro.inspect.ui.helpers.ref_app_id(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$1(comp));
});
fulcro.inspect.ui.helpers.all_apps = (function fulcro$inspect$ui$helpers$all_apps(state){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","multi-inspector","fulcro.inspect.ui.multi-inspector/multi-inspector",1353666037),"main",new cljs.core.Keyword("fulcro.inspect.ui.multi-inspector","inspectors","fulcro.inspect.ui.multi-inspector/inspectors",-1565317572)], null)));
});
fulcro.inspect.ui.helpers.matching_apps = (function fulcro$inspect$ui$helpers$matching_apps(state,app_id){
var nid = fulcro.inspect.ui.helpers.normalize_id(app_id);
return cljs.core.filterv(((function (nid){
return (function (p1__42474_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nid,fulcro.inspect.ui.helpers.normalize_id(p1__42474_SHARP_));
});})(nid))
,fulcro.inspect.ui.helpers.all_apps(state));
});
fulcro.inspect.ui.helpers.update_matching_apps = (function fulcro$inspect$ui$helpers$update_matching_apps(state,app_id,f){
var apps = fulcro.inspect.ui.helpers.matching_apps(state,app_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (apps){
return (function (s,app){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(s,app) : f.call(null,s,app));
});})(apps))
,state,apps);
});

//# sourceMappingURL=fulcro.inspect.ui.helpers.js.map

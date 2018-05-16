goog.provide('fulcro.client.localized_dom');
goog.require('cljs.core');
goog.require('fulcro.client.dom');
goog.require('fulcro.util');
goog.require('fulcro.client.localized_dom_common');


































































































































fulcro.client.localized_dom.node = fulcro.client.dom.node;
fulcro.client.localized_dom.render_to_str = fulcro.client.dom.render_to_str;
fulcro.client.localized_dom.create_element = fulcro.client.dom.create_element;
var arr_append_STAR_ = (function fulcro$client$localized_dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
var arr_append = (function fulcro$client$localized_dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(arr_append_STAR_,arr,fulcro.util.force_children(tail));
});
fulcro.client.localized_dom.macro_create_element = (function fulcro$client$localized_dom$macro_create_element(var_args){
var G__42424 = arguments.length;
switch (G__42424) {
case 2:
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__42425 = args;
var seq__42426 = cljs.core.seq(vec__42425);
var first__42427 = cljs.core.first(seq__42426);
var seq__42426__$1 = cljs.core.next(seq__42426);
var head = first__42427;
var tail = seq__42426__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__42428 = (function (){var G__42429 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__42429,tail);

return G__42429;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42428) : f.call(null,G__42428));
} else {
if(cljs.core.truth_(fulcro.client.dom.element_QMARK_(head))){
var G__42430 = (function (){var G__42431 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__42431,args);

return G__42431;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42430) : f.call(null,G__42430));
} else {
if(cljs.core.object_QMARK_(head)){
var G__42432 = (function (){var G__42433 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__42433,tail);

return G__42433;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42432) : f.call(null,G__42432));
} else {
if(cljs.core.map_QMARK_(head)){
var G__42436 = (function (){var G__42439 = [type,cljs.core.clj__GT_js(fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__42439,tail);

return G__42439;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42436) : f.call(null,G__42436));
} else {
var G__42440 = (function (){var G__42441 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__42441,args);

return G__42441;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42440) : f.call(null,G__42440));

}
}
}
}
});

fulcro.client.localized_dom.macro_create_element.cljs$lang$maxFixedArity = 3;

fulcro.client.localized_dom.form = (function fulcro$client$localized_dom$form(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43070 = arguments.length;
var i__4500__auto___43071 = (0);
while(true){
if((i__4500__auto___43071 < len__4499__auto___43070)){
args__4502__auto__.push((arguments[i__4500__auto___43071]));

var G__43072 = (i__4500__auto___43071 + (1));
i__4500__auto___43071 = G__43072;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42459 = conformed_args__39829__auto__;
var map__42459__$1 = ((((!((map__42459 == null)))?(((((map__42459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42459):map__42459);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.form.cljs$lang$applyTo = (function (seq42454){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42454));
});


fulcro.client.localized_dom.audio = (function fulcro$client$localized_dom$audio(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43073 = arguments.length;
var i__4500__auto___43074 = (0);
while(true){
if((i__4500__auto___43074 < len__4499__auto___43073)){
args__4502__auto__.push((arguments[i__4500__auto___43074]));

var G__43075 = (i__4500__auto___43074 + (1));
i__4500__auto___43074 = G__43075;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42471 = conformed_args__39829__auto__;
var map__42471__$1 = ((((!((map__42471 == null)))?(((((map__42471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42471):map__42471);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42471__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42471__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42471__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.audio.cljs$lang$applyTo = (function (seq42464){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42464));
});


fulcro.client.localized_dom.input = (function fulcro$client$localized_dom$input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43080 = arguments.length;
var i__4500__auto___43081 = (0);
while(true){
if((i__4500__auto___43081 < len__4499__auto___43080)){
args__4502__auto__.push((arguments[i__4500__auto___43081]));

var G__43082 = (i__4500__auto___43081 + (1));
i__4500__auto___43081 = G__43082;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42477 = conformed_args__39829__auto__;
var map__42477__$1 = ((((!((map__42477 == null)))?(((((map__42477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42477):map__42477);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42477__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42477__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42477__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.input.cljs$lang$applyTo = (function (seq42473){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42473));
});


fulcro.client.localized_dom.menuitem = (function fulcro$client$localized_dom$menuitem(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43086 = arguments.length;
var i__4500__auto___43087 = (0);
while(true){
if((i__4500__auto___43087 < len__4499__auto___43086)){
args__4502__auto__.push((arguments[i__4500__auto___43087]));

var G__43088 = (i__4500__auto___43087 + (1));
i__4500__auto___43087 = G__43088;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42483 = conformed_args__39829__auto__;
var map__42483__$1 = ((((!((map__42483 == null)))?(((((map__42483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42483):map__42483);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42483__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menuitem.cljs$lang$applyTo = (function (seq42482){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42482));
});


fulcro.client.localized_dom.radialGradient = (function fulcro$client$localized_dom$radialGradient(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43091 = arguments.length;
var i__4500__auto___43092 = (0);
while(true){
if((i__4500__auto___43092 < len__4499__auto___43091)){
args__4502__auto__.push((arguments[i__4500__auto___43092]));

var G__43093 = (i__4500__auto___43092 + (1));
i__4500__auto___43092 = G__43093;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42486 = conformed_args__39829__auto__;
var map__42486__$1 = ((((!((map__42486 == null)))?(((((map__42486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42486):map__42486);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq42485){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42485));
});


fulcro.client.localized_dom.base = (function fulcro$client$localized_dom$base(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43094 = arguments.length;
var i__4500__auto___43095 = (0);
while(true){
if((i__4500__auto___43095 < len__4499__auto___43094)){
args__4502__auto__.push((arguments[i__4500__auto___43095]));

var G__43096 = (i__4500__auto___43095 + (1));
i__4500__auto___43095 = G__43096;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42489 = conformed_args__39829__auto__;
var map__42489__$1 = ((((!((map__42489 == null)))?(((((map__42489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42489):map__42489);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.base.cljs$lang$applyTo = (function (seq42488){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42488));
});


fulcro.client.localized_dom.h1 = (function fulcro$client$localized_dom$h1(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43097 = arguments.length;
var i__4500__auto___43098 = (0);
while(true){
if((i__4500__auto___43098 < len__4499__auto___43097)){
args__4502__auto__.push((arguments[i__4500__auto___43098]));

var G__43099 = (i__4500__auto___43098 + (1));
i__4500__auto___43098 = G__43099;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42495 = conformed_args__39829__auto__;
var map__42495__$1 = ((((!((map__42495 == null)))?(((((map__42495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42495):map__42495);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42495__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42495__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42495__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h1.cljs$lang$applyTo = (function (seq42493){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42493));
});


fulcro.client.localized_dom.embed = (function fulcro$client$localized_dom$embed(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43100 = arguments.length;
var i__4500__auto___43101 = (0);
while(true){
if((i__4500__auto___43101 < len__4499__auto___43100)){
args__4502__auto__.push((arguments[i__4500__auto___43101]));

var G__43102 = (i__4500__auto___43101 + (1));
i__4500__auto___43101 = G__43102;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42500 = conformed_args__39829__auto__;
var map__42500__$1 = ((((!((map__42500 == null)))?(((((map__42500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42500):map__42500);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.embed.cljs$lang$applyTo = (function (seq42498){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42498));
});


fulcro.client.localized_dom.h3 = (function fulcro$client$localized_dom$h3(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43103 = arguments.length;
var i__4500__auto___43104 = (0);
while(true){
if((i__4500__auto___43104 < len__4499__auto___43103)){
args__4502__auto__.push((arguments[i__4500__auto___43104]));

var G__43105 = (i__4500__auto___43104 + (1));
i__4500__auto___43104 = G__43105;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42505 = conformed_args__39829__auto__;
var map__42505__$1 = ((((!((map__42505 == null)))?(((((map__42505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42505):map__42505);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42505__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h3.cljs$lang$applyTo = (function (seq42503){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42503));
});


fulcro.client.localized_dom.body = (function fulcro$client$localized_dom$body(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43106 = arguments.length;
var i__4500__auto___43107 = (0);
while(true){
if((i__4500__auto___43107 < len__4499__auto___43106)){
args__4502__auto__.push((arguments[i__4500__auto___43107]));

var G__43108 = (i__4500__auto___43107 + (1));
i__4500__auto___43107 = G__43108;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42513 = conformed_args__39829__auto__;
var map__42513__$1 = ((((!((map__42513 == null)))?(((((map__42513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42513):map__42513);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.body.cljs$lang$applyTo = (function (seq42509){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42509));
});


fulcro.client.localized_dom.keygen = (function fulcro$client$localized_dom$keygen(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43112 = arguments.length;
var i__4500__auto___43113 = (0);
while(true){
if((i__4500__auto___43113 < len__4499__auto___43112)){
args__4502__auto__.push((arguments[i__4500__auto___43113]));

var G__43114 = (i__4500__auto___43113 + (1));
i__4500__auto___43113 = G__43114;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42517 = conformed_args__39829__auto__;
var map__42517__$1 = ((((!((map__42517 == null)))?(((((map__42517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42517):map__42517);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.keygen.cljs$lang$applyTo = (function (seq42516){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42516));
});


fulcro.client.localized_dom.progress = (function fulcro$client$localized_dom$progress(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43115 = arguments.length;
var i__4500__auto___43116 = (0);
while(true){
if((i__4500__auto___43116 < len__4499__auto___43115)){
args__4502__auto__.push((arguments[i__4500__auto___43116]));

var G__43117 = (i__4500__auto___43116 + (1));
i__4500__auto___43116 = G__43117;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42521 = conformed_args__39829__auto__;
var map__42521__$1 = ((((!((map__42521 == null)))?(((((map__42521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42521):map__42521);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42521__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42521__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42521__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.progress.cljs$lang$applyTo = (function (seq42519){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42519));
});


fulcro.client.localized_dom.main = (function fulcro$client$localized_dom$main(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43118 = arguments.length;
var i__4500__auto___43119 = (0);
while(true){
if((i__4500__auto___43119 < len__4499__auto___43118)){
args__4502__auto__.push((arguments[i__4500__auto___43119]));

var G__43120 = (i__4500__auto___43119 + (1));
i__4500__auto___43119 = G__43120;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42525 = conformed_args__39829__auto__;
var map__42525__$1 = ((((!((map__42525 == null)))?(((((map__42525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42525):map__42525);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.main.cljs$lang$applyTo = (function (seq42524){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42524));
});


fulcro.client.localized_dom.cite = (function fulcro$client$localized_dom$cite(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43126 = arguments.length;
var i__4500__auto___43127 = (0);
while(true){
if((i__4500__auto___43127 < len__4499__auto___43126)){
args__4502__auto__.push((arguments[i__4500__auto___43127]));

var G__43129 = (i__4500__auto___43127 + (1));
i__4500__auto___43127 = G__43129;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42531 = conformed_args__39829__auto__;
var map__42531__$1 = ((((!((map__42531 == null)))?(((((map__42531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42531):map__42531);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cite.cljs$lang$applyTo = (function (seq42530){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42530));
});


fulcro.client.localized_dom.rect = (function fulcro$client$localized_dom$rect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43138 = arguments.length;
var i__4500__auto___43139 = (0);
while(true){
if((i__4500__auto___43139 < len__4499__auto___43138)){
args__4502__auto__.push((arguments[i__4500__auto___43139]));

var G__43140 = (i__4500__auto___43139 + (1));
i__4500__auto___43139 = G__43140;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42534 = conformed_args__39829__auto__;
var map__42534__$1 = ((((!((map__42534 == null)))?(((((map__42534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42534):map__42534);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rect.cljs$lang$applyTo = (function (seq42533){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42533));
});


fulcro.client.localized_dom.polyline = (function fulcro$client$localized_dom$polyline(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43145 = arguments.length;
var i__4500__auto___43146 = (0);
while(true){
if((i__4500__auto___43146 < len__4499__auto___43145)){
args__4502__auto__.push((arguments[i__4500__auto___43146]));

var G__43147 = (i__4500__auto___43146 + (1));
i__4500__auto___43146 = G__43147;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42537 = conformed_args__39829__auto__;
var map__42537__$1 = ((((!((map__42537 == null)))?(((((map__42537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42537):map__42537);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polyline.cljs$lang$applyTo = (function (seq42536){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42536));
});


fulcro.client.localized_dom.map = (function fulcro$client$localized_dom$map(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43152 = arguments.length;
var i__4500__auto___43153 = (0);
while(true){
if((i__4500__auto___43153 < len__4499__auto___43152)){
args__4502__auto__.push((arguments[i__4500__auto___43153]));

var G__43158 = (i__4500__auto___43153 + (1));
i__4500__auto___43153 = G__43158;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42540 = conformed_args__39829__auto__;
var map__42540__$1 = ((((!((map__42540 == null)))?(((((map__42540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42540):map__42540);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.map.cljs$lang$applyTo = (function (seq42539){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42539));
});


fulcro.client.localized_dom.object = (function fulcro$client$localized_dom$object(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43167 = arguments.length;
var i__4500__auto___43168 = (0);
while(true){
if((i__4500__auto___43168 < len__4499__auto___43167)){
args__4502__auto__.push((arguments[i__4500__auto___43168]));

var G__43171 = (i__4500__auto___43168 + (1));
i__4500__auto___43168 = G__43171;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42543 = conformed_args__39829__auto__;
var map__42543__$1 = ((((!((map__42543 == null)))?(((((map__42543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42543):map__42543);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.object.cljs$lang$applyTo = (function (seq42542){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42542));
});


fulcro.client.localized_dom.i = (function fulcro$client$localized_dom$i(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43186 = arguments.length;
var i__4500__auto___43187 = (0);
while(true){
if((i__4500__auto___43187 < len__4499__auto___43186)){
args__4502__auto__.push((arguments[i__4500__auto___43187]));

var G__43188 = (i__4500__auto___43187 + (1));
i__4500__auto___43187 = G__43188;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42546 = conformed_args__39829__auto__;
var map__42546__$1 = ((((!((map__42546 == null)))?(((((map__42546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42546):map__42546);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.i.cljs$lang$applyTo = (function (seq42545){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42545));
});


fulcro.client.localized_dom.p = (function fulcro$client$localized_dom$p(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43193 = arguments.length;
var i__4500__auto___43194 = (0);
while(true){
if((i__4500__auto___43194 < len__4499__auto___43193)){
args__4502__auto__.push((arguments[i__4500__auto___43194]));

var G__43195 = (i__4500__auto___43194 + (1));
i__4500__auto___43194 = G__43195;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42549 = conformed_args__39829__auto__;
var map__42549__$1 = ((((!((map__42549 == null)))?(((((map__42549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42549):map__42549);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.p.cljs$lang$applyTo = (function (seq42548){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42548));
});


fulcro.client.localized_dom.nav = (function fulcro$client$localized_dom$nav(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43202 = arguments.length;
var i__4500__auto___43203 = (0);
while(true){
if((i__4500__auto___43203 < len__4499__auto___43202)){
args__4502__auto__.push((arguments[i__4500__auto___43203]));

var G__43204 = (i__4500__auto___43203 + (1));
i__4500__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42552 = conformed_args__39829__auto__;
var map__42552__$1 = ((((!((map__42552 == null)))?(((((map__42552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42552):map__42552);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.nav.cljs$lang$applyTo = (function (seq42551){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42551));
});


fulcro.client.localized_dom.ruby = (function fulcro$client$localized_dom$ruby(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43213 = arguments.length;
var i__4500__auto___43214 = (0);
while(true){
if((i__4500__auto___43214 < len__4499__auto___43213)){
args__4502__auto__.push((arguments[i__4500__auto___43214]));

var G__43215 = (i__4500__auto___43214 + (1));
i__4500__auto___43214 = G__43215;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42555 = conformed_args__39829__auto__;
var map__42555__$1 = ((((!((map__42555 == null)))?(((((map__42555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42555):map__42555);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ruby.cljs$lang$applyTo = (function (seq42554){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42554));
});


fulcro.client.localized_dom.a = (function fulcro$client$localized_dom$a(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43220 = arguments.length;
var i__4500__auto___43221 = (0);
while(true){
if((i__4500__auto___43221 < len__4499__auto___43220)){
args__4502__auto__.push((arguments[i__4500__auto___43221]));

var G__43222 = (i__4500__auto___43221 + (1));
i__4500__auto___43221 = G__43222;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42558 = conformed_args__39829__auto__;
var map__42558__$1 = ((((!((map__42558 == null)))?(((((map__42558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42558):map__42558);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.a.cljs$lang$applyTo = (function (seq42557){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42557));
});


fulcro.client.localized_dom.menu = (function fulcro$client$localized_dom$menu(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43231 = arguments.length;
var i__4500__auto___43232 = (0);
while(true){
if((i__4500__auto___43232 < len__4499__auto___43231)){
args__4502__auto__.push((arguments[i__4500__auto___43232]));

var G__43233 = (i__4500__auto___43232 + (1));
i__4500__auto___43232 = G__43233;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42561 = conformed_args__39829__auto__;
var map__42561__$1 = ((((!((map__42561 == null)))?(((((map__42561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42561):map__42561);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menu.cljs$lang$applyTo = (function (seq42560){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42560));
});


fulcro.client.localized_dom.blockquote = (function fulcro$client$localized_dom$blockquote(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43245 = arguments.length;
var i__4500__auto___43246 = (0);
while(true){
if((i__4500__auto___43246 < len__4499__auto___43245)){
args__4502__auto__.push((arguments[i__4500__auto___43246]));

var G__43247 = (i__4500__auto___43246 + (1));
i__4500__auto___43246 = G__43247;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42566 = conformed_args__39829__auto__;
var map__42566__$1 = ((((!((map__42566 == null)))?(((((map__42566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42566):map__42566);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.blockquote.cljs$lang$applyTo = (function (seq42565){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42565));
});


fulcro.client.localized_dom.img = (function fulcro$client$localized_dom$img(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43257 = arguments.length;
var i__4500__auto___43262 = (0);
while(true){
if((i__4500__auto___43262 < len__4499__auto___43257)){
args__4502__auto__.push((arguments[i__4500__auto___43262]));

var G__43264 = (i__4500__auto___43262 + (1));
i__4500__auto___43262 = G__43264;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42569 = conformed_args__39829__auto__;
var map__42569__$1 = ((((!((map__42569 == null)))?(((((map__42569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42569):map__42569);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.img.cljs$lang$applyTo = (function (seq42568){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42568));
});


fulcro.client.localized_dom.text = (function fulcro$client$localized_dom$text(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43274 = arguments.length;
var i__4500__auto___43275 = (0);
while(true){
if((i__4500__auto___43275 < len__4499__auto___43274)){
args__4502__auto__.push((arguments[i__4500__auto___43275]));

var G__43276 = (i__4500__auto___43275 + (1));
i__4500__auto___43275 = G__43276;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42574 = conformed_args__39829__auto__;
var map__42574__$1 = ((((!((map__42574 == null)))?(((((map__42574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42574):map__42574);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.text.cljs$lang$applyTo = (function (seq42573){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42573));
});


fulcro.client.localized_dom.span = (function fulcro$client$localized_dom$span(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43277 = arguments.length;
var i__4500__auto___43278 = (0);
while(true){
if((i__4500__auto___43278 < len__4499__auto___43277)){
args__4502__auto__.push((arguments[i__4500__auto___43278]));

var G__43279 = (i__4500__auto___43278 + (1));
i__4500__auto___43278 = G__43279;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42583 = conformed_args__39829__auto__;
var map__42583__$1 = ((((!((map__42583 == null)))?(((((map__42583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42583):map__42583);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.span.cljs$lang$applyTo = (function (seq42577){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42577));
});


fulcro.client.localized_dom.track = (function fulcro$client$localized_dom$track(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43283 = arguments.length;
var i__4500__auto___43284 = (0);
while(true){
if((i__4500__auto___43284 < len__4499__auto___43283)){
args__4502__auto__.push((arguments[i__4500__auto___43284]));

var G__43285 = (i__4500__auto___43284 + (1));
i__4500__auto___43284 = G__43285;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42589 = conformed_args__39829__auto__;
var map__42589__$1 = ((((!((map__42589 == null)))?(((((map__42589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42589):map__42589);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42589__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.track.cljs$lang$applyTo = (function (seq42585){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42585));
});


fulcro.client.localized_dom.data = (function fulcro$client$localized_dom$data(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43290 = arguments.length;
var i__4500__auto___43291 = (0);
while(true){
if((i__4500__auto___43291 < len__4499__auto___43290)){
args__4502__auto__.push((arguments[i__4500__auto___43291]));

var G__43292 = (i__4500__auto___43291 + (1));
i__4500__auto___43291 = G__43292;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42596 = conformed_args__39829__auto__;
var map__42596__$1 = ((((!((map__42596 == null)))?(((((map__42596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42596):map__42596);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.data.cljs$lang$applyTo = (function (seq42591){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42591));
});


fulcro.client.localized_dom.u = (function fulcro$client$localized_dom$u(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43298 = arguments.length;
var i__4500__auto___43299 = (0);
while(true){
if((i__4500__auto___43299 < len__4499__auto___43298)){
args__4502__auto__.push((arguments[i__4500__auto___43299]));

var G__43300 = (i__4500__auto___43299 + (1));
i__4500__auto___43299 = G__43300;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42599 = conformed_args__39829__auto__;
var map__42599__$1 = ((((!((map__42599 == null)))?(((((map__42599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42599):map__42599);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.u.cljs$lang$applyTo = (function (seq42598){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42598));
});


fulcro.client.localized_dom.dl = (function fulcro$client$localized_dom$dl(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43308 = arguments.length;
var i__4500__auto___43309 = (0);
while(true){
if((i__4500__auto___43309 < len__4499__auto___43308)){
args__4502__auto__.push((arguments[i__4500__auto___43309]));

var G__43310 = (i__4500__auto___43309 + (1));
i__4500__auto___43309 = G__43310;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42608 = conformed_args__39829__auto__;
var map__42608__$1 = ((((!((map__42608 == null)))?(((((map__42608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42608):map__42608);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dl.cljs$lang$applyTo = (function (seq42602){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42602));
});


fulcro.client.localized_dom.select = (function fulcro$client$localized_dom$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43315 = arguments.length;
var i__4500__auto___43316 = (0);
while(true){
if((i__4500__auto___43316 < len__4499__auto___43315)){
args__4502__auto__.push((arguments[i__4500__auto___43316]));

var G__43317 = (i__4500__auto___43316 + (1));
i__4500__auto___43316 = G__43317;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42614 = conformed_args__39829__auto__;
var map__42614__$1 = ((((!((map__42614 == null)))?(((((map__42614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42614):map__42614);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.select.cljs$lang$applyTo = (function (seq42610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42610));
});


fulcro.client.localized_dom.polygon = (function fulcro$client$localized_dom$polygon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43321 = arguments.length;
var i__4500__auto___43322 = (0);
while(true){
if((i__4500__auto___43322 < len__4499__auto___43321)){
args__4502__auto__.push((arguments[i__4500__auto___43322]));

var G__43323 = (i__4500__auto___43322 + (1));
i__4500__auto___43322 = G__43323;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42621 = conformed_args__39829__auto__;
var map__42621__$1 = ((((!((map__42621 == null)))?(((((map__42621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42621):map__42621);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polygon.cljs$lang$applyTo = (function (seq42620){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42620));
});


fulcro.client.localized_dom.pattern = (function fulcro$client$localized_dom$pattern(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43328 = arguments.length;
var i__4500__auto___43329 = (0);
while(true){
if((i__4500__auto___43329 < len__4499__auto___43328)){
args__4502__auto__.push((arguments[i__4500__auto___43329]));

var G__43330 = (i__4500__auto___43329 + (1));
i__4500__auto___43329 = G__43330;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42624 = conformed_args__39829__auto__;
var map__42624__$1 = ((((!((map__42624 == null)))?(((((map__42624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42624):map__42624);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pattern.cljs$lang$applyTo = (function (seq42623){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42623));
});


fulcro.client.localized_dom.html = (function fulcro$client$localized_dom$html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43331 = arguments.length;
var i__4500__auto___43332 = (0);
while(true){
if((i__4500__auto___43332 < len__4499__auto___43331)){
args__4502__auto__.push((arguments[i__4500__auto___43332]));

var G__43333 = (i__4500__auto___43332 + (1));
i__4500__auto___43332 = G__43333;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42627 = conformed_args__39829__auto__;
var map__42627__$1 = ((((!((map__42627 == null)))?(((((map__42627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42627):map__42627);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42627__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42627__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42627__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.html.cljs$lang$applyTo = (function (seq42626){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42626));
});


fulcro.client.localized_dom.thead = (function fulcro$client$localized_dom$thead(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43334 = arguments.length;
var i__4500__auto___43335 = (0);
while(true){
if((i__4500__auto___43335 < len__4499__auto___43334)){
args__4502__auto__.push((arguments[i__4500__auto___43335]));

var G__43336 = (i__4500__auto___43335 + (1));
i__4500__auto___43335 = G__43336;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42634 = conformed_args__39829__auto__;
var map__42634__$1 = ((((!((map__42634 == null)))?(((((map__42634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42634):map__42634);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.thead.cljs$lang$applyTo = (function (seq42632){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42632));
});


fulcro.client.localized_dom.path = (function fulcro$client$localized_dom$path(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43337 = arguments.length;
var i__4500__auto___43338 = (0);
while(true){
if((i__4500__auto___43338 < len__4499__auto___43337)){
args__4502__auto__.push((arguments[i__4500__auto___43338]));

var G__43339 = (i__4500__auto___43338 + (1));
i__4500__auto___43338 = G__43339;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42643 = conformed_args__39829__auto__;
var map__42643__$1 = ((((!((map__42643 == null)))?(((((map__42643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42643):map__42643);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.path.cljs$lang$applyTo = (function (seq42638){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42638));
});


fulcro.client.localized_dom.del = (function fulcro$client$localized_dom$del(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43341 = arguments.length;
var i__4500__auto___43342 = (0);
while(true){
if((i__4500__auto___43342 < len__4499__auto___43341)){
args__4502__auto__.push((arguments[i__4500__auto___43342]));

var G__43343 = (i__4500__auto___43342 + (1));
i__4500__auto___43342 = G__43343;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42647 = conformed_args__39829__auto__;
var map__42647__$1 = ((((!((map__42647 == null)))?(((((map__42647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42647):map__42647);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.del.cljs$lang$applyTo = (function (seq42646){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42646));
});


fulcro.client.localized_dom.fieldset = (function fulcro$client$localized_dom$fieldset(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43345 = arguments.length;
var i__4500__auto___43346 = (0);
while(true){
if((i__4500__auto___43346 < len__4499__auto___43345)){
args__4502__auto__.push((arguments[i__4500__auto___43346]));

var G__43347 = (i__4500__auto___43346 + (1));
i__4500__auto___43346 = G__43347;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42657 = conformed_args__39829__auto__;
var map__42657__$1 = ((((!((map__42657 == null)))?(((((map__42657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42657):map__42657);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fieldset.cljs$lang$applyTo = (function (seq42654){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42654));
});


fulcro.client.localized_dom.aside = (function fulcro$client$localized_dom$aside(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43348 = arguments.length;
var i__4500__auto___43349 = (0);
while(true){
if((i__4500__auto___43349 < len__4499__auto___43348)){
args__4502__auto__.push((arguments[i__4500__auto___43349]));

var G__43350 = (i__4500__auto___43349 + (1));
i__4500__auto___43349 = G__43350;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42661 = conformed_args__39829__auto__;
var map__42661__$1 = ((((!((map__42661 == null)))?(((((map__42661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42661):map__42661);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.aside.cljs$lang$applyTo = (function (seq42660){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42660));
});


fulcro.client.localized_dom.figure = (function fulcro$client$localized_dom$figure(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43351 = arguments.length;
var i__4500__auto___43352 = (0);
while(true){
if((i__4500__auto___43352 < len__4499__auto___43351)){
args__4502__auto__.push((arguments[i__4500__auto___43352]));

var G__43353 = (i__4500__auto___43352 + (1));
i__4500__auto___43352 = G__43353;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42666 = conformed_args__39829__auto__;
var map__42666__$1 = ((((!((map__42666 == null)))?(((((map__42666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42666):map__42666);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figure.cljs$lang$applyTo = (function (seq42663){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42663));
});


fulcro.client.localized_dom.figcaption = (function fulcro$client$localized_dom$figcaption(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43354 = arguments.length;
var i__4500__auto___43355 = (0);
while(true){
if((i__4500__auto___43355 < len__4499__auto___43354)){
args__4502__auto__.push((arguments[i__4500__auto___43355]));

var G__43356 = (i__4500__auto___43355 + (1));
i__4500__auto___43355 = G__43356;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42674 = conformed_args__39829__auto__;
var map__42674__$1 = ((((!((map__42674 == null)))?(((((map__42674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42674):map__42674);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figcaption.cljs$lang$applyTo = (function (seq42672){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42672));
});


fulcro.client.localized_dom.mask = (function fulcro$client$localized_dom$mask(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43357 = arguments.length;
var i__4500__auto___43358 = (0);
while(true){
if((i__4500__auto___43358 < len__4499__auto___43357)){
args__4502__auto__.push((arguments[i__4500__auto___43358]));

var G__43359 = (i__4500__auto___43358 + (1));
i__4500__auto___43358 = G__43359;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42677 = conformed_args__39829__auto__;
var map__42677__$1 = ((((!((map__42677 == null)))?(((((map__42677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42677):map__42677);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mask.cljs$lang$applyTo = (function (seq42676){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42676));
});


fulcro.client.localized_dom.q = (function fulcro$client$localized_dom$q(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43360 = arguments.length;
var i__4500__auto___43361 = (0);
while(true){
if((i__4500__auto___43361 < len__4499__auto___43360)){
args__4502__auto__.push((arguments[i__4500__auto___43361]));

var G__43362 = (i__4500__auto___43361 + (1));
i__4500__auto___43361 = G__43362;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42682 = conformed_args__39829__auto__;
var map__42682__$1 = ((((!((map__42682 == null)))?(((((map__42682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42682):map__42682);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.q.cljs$lang$applyTo = (function (seq42681){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42681));
});


fulcro.client.localized_dom.bdi = (function fulcro$client$localized_dom$bdi(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43363 = arguments.length;
var i__4500__auto___43364 = (0);
while(true){
if((i__4500__auto___43364 < len__4499__auto___43363)){
args__4502__auto__.push((arguments[i__4500__auto___43364]));

var G__43365 = (i__4500__auto___43364 + (1));
i__4500__auto___43364 = G__43365;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42685 = conformed_args__39829__auto__;
var map__42685__$1 = ((((!((map__42685 == null)))?(((((map__42685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42685):map__42685);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdi.cljs$lang$applyTo = (function (seq42684){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42684));
});


fulcro.client.localized_dom.video = (function fulcro$client$localized_dom$video(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43366 = arguments.length;
var i__4500__auto___43367 = (0);
while(true){
if((i__4500__auto___43367 < len__4499__auto___43366)){
args__4502__auto__.push((arguments[i__4500__auto___43367]));

var G__43368 = (i__4500__auto___43367 + (1));
i__4500__auto___43367 = G__43368;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42688 = conformed_args__39829__auto__;
var map__42688__$1 = ((((!((map__42688 == null)))?(((((map__42688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42688):map__42688);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.video.cljs$lang$applyTo = (function (seq42687){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42687));
});


fulcro.client.localized_dom.address = (function fulcro$client$localized_dom$address(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43369 = arguments.length;
var i__4500__auto___43370 = (0);
while(true){
if((i__4500__auto___43370 < len__4499__auto___43369)){
args__4502__auto__.push((arguments[i__4500__auto___43370]));

var G__43371 = (i__4500__auto___43370 + (1));
i__4500__auto___43370 = G__43371;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42691 = conformed_args__39829__auto__;
var map__42691__$1 = ((((!((map__42691 == null)))?(((((map__42691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42691):map__42691);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.address.cljs$lang$applyTo = (function (seq42690){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42690));
});


fulcro.client.localized_dom.caption = (function fulcro$client$localized_dom$caption(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43372 = arguments.length;
var i__4500__auto___43373 = (0);
while(true){
if((i__4500__auto___43373 < len__4499__auto___43372)){
args__4502__auto__.push((arguments[i__4500__auto___43373]));

var G__43374 = (i__4500__auto___43373 + (1));
i__4500__auto___43373 = G__43374;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42694 = conformed_args__39829__auto__;
var map__42694__$1 = ((((!((map__42694 == null)))?(((((map__42694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42694):map__42694);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.caption.cljs$lang$applyTo = (function (seq42693){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42693));
});


fulcro.client.localized_dom.dd = (function fulcro$client$localized_dom$dd(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43375 = arguments.length;
var i__4500__auto___43376 = (0);
while(true){
if((i__4500__auto___43376 < len__4499__auto___43375)){
args__4502__auto__.push((arguments[i__4500__auto___43376]));

var G__43377 = (i__4500__auto___43376 + (1));
i__4500__auto___43376 = G__43377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42697 = conformed_args__39829__auto__;
var map__42697__$1 = ((((!((map__42697 == null)))?(((((map__42697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42697):map__42697);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dd.cljs$lang$applyTo = (function (seq42696){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42696));
});


fulcro.client.localized_dom.rp = (function fulcro$client$localized_dom$rp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43378 = arguments.length;
var i__4500__auto___43379 = (0);
while(true){
if((i__4500__auto___43379 < len__4499__auto___43378)){
args__4502__auto__.push((arguments[i__4500__auto___43379]));

var G__43380 = (i__4500__auto___43379 + (1));
i__4500__auto___43379 = G__43380;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42700 = conformed_args__39829__auto__;
var map__42700__$1 = ((((!((map__42700 == null)))?(((((map__42700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42700):map__42700);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rp.cljs$lang$applyTo = (function (seq42699){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42699));
});


fulcro.client.localized_dom.hr = (function fulcro$client$localized_dom$hr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43381 = arguments.length;
var i__4500__auto___43382 = (0);
while(true){
if((i__4500__auto___43382 < len__4499__auto___43381)){
args__4502__auto__.push((arguments[i__4500__auto___43382]));

var G__43383 = (i__4500__auto___43382 + (1));
i__4500__auto___43382 = G__43383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42703 = conformed_args__39829__auto__;
var map__42703__$1 = ((((!((map__42703 == null)))?(((((map__42703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42703):map__42703);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hr.cljs$lang$applyTo = (function (seq42702){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42702));
});


fulcro.client.localized_dom.meta = (function fulcro$client$localized_dom$meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43384 = arguments.length;
var i__4500__auto___43385 = (0);
while(true){
if((i__4500__auto___43385 < len__4499__auto___43384)){
args__4502__auto__.push((arguments[i__4500__auto___43385]));

var G__43386 = (i__4500__auto___43385 + (1));
i__4500__auto___43385 = G__43386;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42706 = conformed_args__39829__auto__;
var map__42706__$1 = ((((!((map__42706 == null)))?(((((map__42706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42706):map__42706);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meta.cljs$lang$applyTo = (function (seq42705){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42705));
});


fulcro.client.localized_dom.tbody = (function fulcro$client$localized_dom$tbody(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43387 = arguments.length;
var i__4500__auto___43388 = (0);
while(true){
if((i__4500__auto___43388 < len__4499__auto___43387)){
args__4502__auto__.push((arguments[i__4500__auto___43388]));

var G__43389 = (i__4500__auto___43388 + (1));
i__4500__auto___43388 = G__43389;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42709 = conformed_args__39829__auto__;
var map__42709__$1 = ((((!((map__42709 == null)))?(((((map__42709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42709):map__42709);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tbody.cljs$lang$applyTo = (function (seq42708){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42708));
});


fulcro.client.localized_dom.table = (function fulcro$client$localized_dom$table(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43390 = arguments.length;
var i__4500__auto___43391 = (0);
while(true){
if((i__4500__auto___43391 < len__4499__auto___43390)){
args__4502__auto__.push((arguments[i__4500__auto___43391]));

var G__43392 = (i__4500__auto___43391 + (1));
i__4500__auto___43391 = G__43392;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42712 = conformed_args__39829__auto__;
var map__42712__$1 = ((((!((map__42712 == null)))?(((((map__42712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42712):map__42712);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.table.cljs$lang$applyTo = (function (seq42711){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42711));
});


fulcro.client.localized_dom.pre = (function fulcro$client$localized_dom$pre(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43393 = arguments.length;
var i__4500__auto___43394 = (0);
while(true){
if((i__4500__auto___43394 < len__4499__auto___43393)){
args__4502__auto__.push((arguments[i__4500__auto___43394]));

var G__43395 = (i__4500__auto___43394 + (1));
i__4500__auto___43394 = G__43395;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42715 = conformed_args__39829__auto__;
var map__42715__$1 = ((((!((map__42715 == null)))?(((((map__42715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42715):map__42715);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pre.cljs$lang$applyTo = (function (seq42714){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42714));
});


fulcro.client.localized_dom.ul = (function fulcro$client$localized_dom$ul(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43396 = arguments.length;
var i__4500__auto___43397 = (0);
while(true){
if((i__4500__auto___43397 < len__4499__auto___43396)){
args__4502__auto__.push((arguments[i__4500__auto___43397]));

var G__43398 = (i__4500__auto___43397 + (1));
i__4500__auto___43397 = G__43398;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42718 = conformed_args__39829__auto__;
var map__42718__$1 = ((((!((map__42718 == null)))?(((((map__42718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42718):map__42718);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ul.cljs$lang$applyTo = (function (seq42717){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42717));
});


fulcro.client.localized_dom.sup = (function fulcro$client$localized_dom$sup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43399 = arguments.length;
var i__4500__auto___43400 = (0);
while(true){
if((i__4500__auto___43400 < len__4499__auto___43399)){
args__4502__auto__.push((arguments[i__4500__auto___43400]));

var G__43401 = (i__4500__auto___43400 + (1));
i__4500__auto___43400 = G__43401;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42721 = conformed_args__39829__auto__;
var map__42721__$1 = ((((!((map__42721 == null)))?(((((map__42721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42721):map__42721);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sup.cljs$lang$applyTo = (function (seq42720){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42720));
});


fulcro.client.localized_dom.dfn = (function fulcro$client$localized_dom$dfn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43402 = arguments.length;
var i__4500__auto___43403 = (0);
while(true){
if((i__4500__auto___43403 < len__4499__auto___43402)){
args__4502__auto__.push((arguments[i__4500__auto___43403]));

var G__43404 = (i__4500__auto___43403 + (1));
i__4500__auto___43403 = G__43404;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42724 = conformed_args__39829__auto__;
var map__42724__$1 = ((((!((map__42724 == null)))?(((((map__42724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42724):map__42724);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dfn.cljs$lang$applyTo = (function (seq42723){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42723));
});


fulcro.client.localized_dom.sub = (function fulcro$client$localized_dom$sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43405 = arguments.length;
var i__4500__auto___43406 = (0);
while(true){
if((i__4500__auto___43406 < len__4499__auto___43405)){
args__4502__auto__.push((arguments[i__4500__auto___43406]));

var G__43407 = (i__4500__auto___43406 + (1));
i__4500__auto___43406 = G__43407;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42727 = conformed_args__39829__auto__;
var map__42727__$1 = ((((!((map__42727 == null)))?(((((map__42727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42727):map__42727);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sub.cljs$lang$applyTo = (function (seq42726){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42726));
});


fulcro.client.localized_dom.mark = (function fulcro$client$localized_dom$mark(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43408 = arguments.length;
var i__4500__auto___43409 = (0);
while(true){
if((i__4500__auto___43409 < len__4499__auto___43408)){
args__4502__auto__.push((arguments[i__4500__auto___43409]));

var G__43410 = (i__4500__auto___43409 + (1));
i__4500__auto___43409 = G__43410;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42730 = conformed_args__39829__auto__;
var map__42730__$1 = ((((!((map__42730 == null)))?(((((map__42730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42730):map__42730);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mark.cljs$lang$applyTo = (function (seq42729){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42729));
});


fulcro.client.localized_dom.script = (function fulcro$client$localized_dom$script(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43411 = arguments.length;
var i__4500__auto___43412 = (0);
while(true){
if((i__4500__auto___43412 < len__4499__auto___43411)){
args__4502__auto__.push((arguments[i__4500__auto___43412]));

var G__43413 = (i__4500__auto___43412 + (1));
i__4500__auto___43412 = G__43413;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42733 = conformed_args__39829__auto__;
var map__42733__$1 = ((((!((map__42733 == null)))?(((((map__42733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42733):map__42733);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.script.cljs$lang$applyTo = (function (seq42732){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42732));
});


fulcro.client.localized_dom.big = (function fulcro$client$localized_dom$big(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43414 = arguments.length;
var i__4500__auto___43415 = (0);
while(true){
if((i__4500__auto___43415 < len__4499__auto___43414)){
args__4502__auto__.push((arguments[i__4500__auto___43415]));

var G__43416 = (i__4500__auto___43415 + (1));
i__4500__auto___43415 = G__43416;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42736 = conformed_args__39829__auto__;
var map__42736__$1 = ((((!((map__42736 == null)))?(((((map__42736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42736):map__42736);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.big.cljs$lang$applyTo = (function (seq42735){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42735));
});


fulcro.client.localized_dom.button = (function fulcro$client$localized_dom$button(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43417 = arguments.length;
var i__4500__auto___43418 = (0);
while(true){
if((i__4500__auto___43418 < len__4499__auto___43417)){
args__4502__auto__.push((arguments[i__4500__auto___43418]));

var G__43419 = (i__4500__auto___43418 + (1));
i__4500__auto___43418 = G__43419;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42739 = conformed_args__39829__auto__;
var map__42739__$1 = ((((!((map__42739 == null)))?(((((map__42739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42739):map__42739);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.button.cljs$lang$applyTo = (function (seq42738){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42738));
});


fulcro.client.localized_dom.wbr = (function fulcro$client$localized_dom$wbr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43420 = arguments.length;
var i__4500__auto___43421 = (0);
while(true){
if((i__4500__auto___43421 < len__4499__auto___43420)){
args__4502__auto__.push((arguments[i__4500__auto___43421]));

var G__43422 = (i__4500__auto___43421 + (1));
i__4500__auto___43421 = G__43422;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42742 = conformed_args__39829__auto__;
var map__42742__$1 = ((((!((map__42742 == null)))?(((((map__42742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42742):map__42742);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.wbr.cljs$lang$applyTo = (function (seq42741){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42741));
});


fulcro.client.localized_dom.strong = (function fulcro$client$localized_dom$strong(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43423 = arguments.length;
var i__4500__auto___43424 = (0);
while(true){
if((i__4500__auto___43424 < len__4499__auto___43423)){
args__4502__auto__.push((arguments[i__4500__auto___43424]));

var G__43425 = (i__4500__auto___43424 + (1));
i__4500__auto___43424 = G__43425;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42745 = conformed_args__39829__auto__;
var map__42745__$1 = ((((!((map__42745 == null)))?(((((map__42745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42745):map__42745);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.strong.cljs$lang$applyTo = (function (seq42744){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42744));
});


fulcro.client.localized_dom.use = (function fulcro$client$localized_dom$use(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43426 = arguments.length;
var i__4500__auto___43427 = (0);
while(true){
if((i__4500__auto___43427 < len__4499__auto___43426)){
args__4502__auto__.push((arguments[i__4500__auto___43427]));

var G__43428 = (i__4500__auto___43427 + (1));
i__4500__auto___43427 = G__43428;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42748 = conformed_args__39829__auto__;
var map__42748__$1 = ((((!((map__42748 == null)))?(((((map__42748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42748):map__42748);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.use.cljs$lang$applyTo = (function (seq42747){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42747));
});


fulcro.client.localized_dom.li = (function fulcro$client$localized_dom$li(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43429 = arguments.length;
var i__4500__auto___43430 = (0);
while(true){
if((i__4500__auto___43430 < len__4499__auto___43429)){
args__4502__auto__.push((arguments[i__4500__auto___43430]));

var G__43431 = (i__4500__auto___43430 + (1));
i__4500__auto___43430 = G__43431;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42751 = conformed_args__39829__auto__;
var map__42751__$1 = ((((!((map__42751 == null)))?(((((map__42751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42751):map__42751);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.li.cljs$lang$applyTo = (function (seq42750){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42750));
});


fulcro.client.localized_dom.dt = (function fulcro$client$localized_dom$dt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43432 = arguments.length;
var i__4500__auto___43433 = (0);
while(true){
if((i__4500__auto___43433 < len__4499__auto___43432)){
args__4502__auto__.push((arguments[i__4500__auto___43433]));

var G__43434 = (i__4500__auto___43433 + (1));
i__4500__auto___43433 = G__43434;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42754 = conformed_args__39829__auto__;
var map__42754__$1 = ((((!((map__42754 == null)))?(((((map__42754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42754):map__42754);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dt.cljs$lang$applyTo = (function (seq42753){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42753));
});


fulcro.client.localized_dom.td = (function fulcro$client$localized_dom$td(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43435 = arguments.length;
var i__4500__auto___43436 = (0);
while(true){
if((i__4500__auto___43436 < len__4499__auto___43435)){
args__4502__auto__.push((arguments[i__4500__auto___43436]));

var G__43437 = (i__4500__auto___43436 + (1));
i__4500__auto___43436 = G__43437;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42757 = conformed_args__39829__auto__;
var map__42757__$1 = ((((!((map__42757 == null)))?(((((map__42757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42757):map__42757);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.td.cljs$lang$applyTo = (function (seq42756){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42756));
});


fulcro.client.localized_dom.tr = (function fulcro$client$localized_dom$tr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43438 = arguments.length;
var i__4500__auto___43439 = (0);
while(true){
if((i__4500__auto___43439 < len__4499__auto___43438)){
args__4502__auto__.push((arguments[i__4500__auto___43439]));

var G__43440 = (i__4500__auto___43439 + (1));
i__4500__auto___43439 = G__43440;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42760 = conformed_args__39829__auto__;
var map__42760__$1 = ((((!((map__42760 == null)))?(((((map__42760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42760):map__42760);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tr.cljs$lang$applyTo = (function (seq42759){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42759));
});


fulcro.client.localized_dom.circle = (function fulcro$client$localized_dom$circle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43441 = arguments.length;
var i__4500__auto___43442 = (0);
while(true){
if((i__4500__auto___43442 < len__4499__auto___43441)){
args__4502__auto__.push((arguments[i__4500__auto___43442]));

var G__43443 = (i__4500__auto___43442 + (1));
i__4500__auto___43442 = G__43443;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42763 = conformed_args__39829__auto__;
var map__42763__$1 = ((((!((map__42763 == null)))?(((((map__42763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42763):map__42763);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.circle.cljs$lang$applyTo = (function (seq42762){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42762));
});


fulcro.client.localized_dom.section = (function fulcro$client$localized_dom$section(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43444 = arguments.length;
var i__4500__auto___43445 = (0);
while(true){
if((i__4500__auto___43445 < len__4499__auto___43444)){
args__4502__auto__.push((arguments[i__4500__auto___43445]));

var G__43446 = (i__4500__auto___43445 + (1));
i__4500__auto___43445 = G__43446;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42766 = conformed_args__39829__auto__;
var map__42766__$1 = ((((!((map__42766 == null)))?(((((map__42766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42766):map__42766);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.section.cljs$lang$applyTo = (function (seq42765){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42765));
});


fulcro.client.localized_dom.th = (function fulcro$client$localized_dom$th(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43447 = arguments.length;
var i__4500__auto___43448 = (0);
while(true){
if((i__4500__auto___43448 < len__4499__auto___43447)){
args__4502__auto__.push((arguments[i__4500__auto___43448]));

var G__43449 = (i__4500__auto___43448 + (1));
i__4500__auto___43448 = G__43449;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42769 = conformed_args__39829__auto__;
var map__42769__$1 = ((((!((map__42769 == null)))?(((((map__42769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42769):map__42769);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.th.cljs$lang$applyTo = (function (seq42768){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42768));
});


fulcro.client.localized_dom.time = (function fulcro$client$localized_dom$time(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43450 = arguments.length;
var i__4500__auto___43451 = (0);
while(true){
if((i__4500__auto___43451 < len__4499__auto___43450)){
args__4502__auto__.push((arguments[i__4500__auto___43451]));

var G__43452 = (i__4500__auto___43451 + (1));
i__4500__auto___43451 = G__43452;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42772 = conformed_args__39829__auto__;
var map__42772__$1 = ((((!((map__42772 == null)))?(((((map__42772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42772):map__42772);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.time.cljs$lang$applyTo = (function (seq42771){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42771));
});


fulcro.client.localized_dom.optgroup = (function fulcro$client$localized_dom$optgroup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43453 = arguments.length;
var i__4500__auto___43454 = (0);
while(true){
if((i__4500__auto___43454 < len__4499__auto___43453)){
args__4502__auto__.push((arguments[i__4500__auto___43454]));

var G__43455 = (i__4500__auto___43454 + (1));
i__4500__auto___43454 = G__43455;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42775 = conformed_args__39829__auto__;
var map__42775__$1 = ((((!((map__42775 == null)))?(((((map__42775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42775):map__42775);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.optgroup.cljs$lang$applyTo = (function (seq42774){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42774));
});


fulcro.client.localized_dom.iframe = (function fulcro$client$localized_dom$iframe(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43456 = arguments.length;
var i__4500__auto___43457 = (0);
while(true){
if((i__4500__auto___43457 < len__4499__auto___43456)){
args__4502__auto__.push((arguments[i__4500__auto___43457]));

var G__43458 = (i__4500__auto___43457 + (1));
i__4500__auto___43457 = G__43458;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42778 = conformed_args__39829__auto__;
var map__42778__$1 = ((((!((map__42778 == null)))?(((((map__42778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42778):map__42778);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.iframe.cljs$lang$applyTo = (function (seq42777){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42777));
});


fulcro.client.localized_dom.legend = (function fulcro$client$localized_dom$legend(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43459 = arguments.length;
var i__4500__auto___43460 = (0);
while(true){
if((i__4500__auto___43460 < len__4499__auto___43459)){
args__4502__auto__.push((arguments[i__4500__auto___43460]));

var G__43461 = (i__4500__auto___43460 + (1));
i__4500__auto___43460 = G__43461;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42781 = conformed_args__39829__auto__;
var map__42781__$1 = ((((!((map__42781 == null)))?(((((map__42781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42781):map__42781);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.legend.cljs$lang$applyTo = (function (seq42780){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42780));
});


fulcro.client.localized_dom.em = (function fulcro$client$localized_dom$em(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43462 = arguments.length;
var i__4500__auto___43463 = (0);
while(true){
if((i__4500__auto___43463 < len__4499__auto___43462)){
args__4502__auto__.push((arguments[i__4500__auto___43463]));

var G__43464 = (i__4500__auto___43463 + (1));
i__4500__auto___43463 = G__43464;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42784 = conformed_args__39829__auto__;
var map__42784__$1 = ((((!((map__42784 == null)))?(((((map__42784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42784):map__42784);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.em.cljs$lang$applyTo = (function (seq42783){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42783));
});


fulcro.client.localized_dom.kbd = (function fulcro$client$localized_dom$kbd(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43465 = arguments.length;
var i__4500__auto___43466 = (0);
while(true){
if((i__4500__auto___43466 < len__4499__auto___43465)){
args__4502__auto__.push((arguments[i__4500__auto___43466]));

var G__43467 = (i__4500__auto___43466 + (1));
i__4500__auto___43466 = G__43467;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42787 = conformed_args__39829__auto__;
var map__42787__$1 = ((((!((map__42787 == null)))?(((((map__42787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42787):map__42787);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.kbd.cljs$lang$applyTo = (function (seq42786){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42786));
});


fulcro.client.localized_dom.article = (function fulcro$client$localized_dom$article(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43468 = arguments.length;
var i__4500__auto___43469 = (0);
while(true){
if((i__4500__auto___43469 < len__4499__auto___43468)){
args__4502__auto__.push((arguments[i__4500__auto___43469]));

var G__43470 = (i__4500__auto___43469 + (1));
i__4500__auto___43469 = G__43470;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42790 = conformed_args__39829__auto__;
var map__42790__$1 = ((((!((map__42790 == null)))?(((((map__42790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42790):map__42790);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.article.cljs$lang$applyTo = (function (seq42789){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42789));
});


fulcro.client.localized_dom.clipPath = (function fulcro$client$localized_dom$clipPath(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43471 = arguments.length;
var i__4500__auto___43472 = (0);
while(true){
if((i__4500__auto___43472 < len__4499__auto___43471)){
args__4502__auto__.push((arguments[i__4500__auto___43472]));

var G__43473 = (i__4500__auto___43472 + (1));
i__4500__auto___43472 = G__43473;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42793 = conformed_args__39829__auto__;
var map__42793__$1 = ((((!((map__42793 == null)))?(((((map__42793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42793):map__42793);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.clipPath.cljs$lang$applyTo = (function (seq42792){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42792));
});


fulcro.client.localized_dom.abbr = (function fulcro$client$localized_dom$abbr(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43474 = arguments.length;
var i__4500__auto___43475 = (0);
while(true){
if((i__4500__auto___43475 < len__4499__auto___43474)){
args__4502__auto__.push((arguments[i__4500__auto___43475]));

var G__43476 = (i__4500__auto___43475 + (1));
i__4500__auto___43475 = G__43476;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42796 = conformed_args__39829__auto__;
var map__42796__$1 = ((((!((map__42796 == null)))?(((((map__42796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42796):map__42796);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42796__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.abbr.cljs$lang$applyTo = (function (seq42795){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42795));
});


fulcro.client.localized_dom.source = (function fulcro$client$localized_dom$source(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43477 = arguments.length;
var i__4500__auto___43478 = (0);
while(true){
if((i__4500__auto___43478 < len__4499__auto___43477)){
args__4502__auto__.push((arguments[i__4500__auto___43478]));

var G__43479 = (i__4500__auto___43478 + (1));
i__4500__auto___43478 = G__43479;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42799 = conformed_args__39829__auto__;
var map__42799__$1 = ((((!((map__42799 == null)))?(((((map__42799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42799):map__42799);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.source.cljs$lang$applyTo = (function (seq42798){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42798));
});


fulcro.client.localized_dom.output = (function fulcro$client$localized_dom$output(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43480 = arguments.length;
var i__4500__auto___43481 = (0);
while(true){
if((i__4500__auto___43481 < len__4499__auto___43480)){
args__4502__auto__.push((arguments[i__4500__auto___43481]));

var G__43482 = (i__4500__auto___43481 + (1));
i__4500__auto___43481 = G__43482;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42802 = conformed_args__39829__auto__;
var map__42802__$1 = ((((!((map__42802 == null)))?(((((map__42802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42802):map__42802);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42802__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42802__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42802__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.output.cljs$lang$applyTo = (function (seq42801){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42801));
});


fulcro.client.localized_dom.header = (function fulcro$client$localized_dom$header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43483 = arguments.length;
var i__4500__auto___43484 = (0);
while(true){
if((i__4500__auto___43484 < len__4499__auto___43483)){
args__4502__auto__.push((arguments[i__4500__auto___43484]));

var G__43485 = (i__4500__auto___43484 + (1));
i__4500__auto___43484 = G__43485;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42805 = conformed_args__39829__auto__;
var map__42805__$1 = ((((!((map__42805 == null)))?(((((map__42805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42805):map__42805);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.header.cljs$lang$applyTo = (function (seq42804){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42804));
});


fulcro.client.localized_dom.datalist = (function fulcro$client$localized_dom$datalist(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43486 = arguments.length;
var i__4500__auto___43487 = (0);
while(true){
if((i__4500__auto___43487 < len__4499__auto___43486)){
args__4502__auto__.push((arguments[i__4500__auto___43487]));

var G__43488 = (i__4500__auto___43487 + (1));
i__4500__auto___43487 = G__43488;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42808 = conformed_args__39829__auto__;
var map__42808__$1 = ((((!((map__42808 == null)))?(((((map__42808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42808):map__42808);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42808__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42808__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42808__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.datalist.cljs$lang$applyTo = (function (seq42807){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42807));
});


fulcro.client.localized_dom.tfoot = (function fulcro$client$localized_dom$tfoot(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43489 = arguments.length;
var i__4500__auto___43490 = (0);
while(true){
if((i__4500__auto___43490 < len__4499__auto___43489)){
args__4502__auto__.push((arguments[i__4500__auto___43490]));

var G__43491 = (i__4500__auto___43490 + (1));
i__4500__auto___43490 = G__43491;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42811 = conformed_args__39829__auto__;
var map__42811__$1 = ((((!((map__42811 == null)))?(((((map__42811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42811):map__42811);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tfoot.cljs$lang$applyTo = (function (seq42810){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42810));
});


fulcro.client.localized_dom.s = (function fulcro$client$localized_dom$s(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43492 = arguments.length;
var i__4500__auto___43493 = (0);
while(true){
if((i__4500__auto___43493 < len__4499__auto___43492)){
args__4502__auto__.push((arguments[i__4500__auto___43493]));

var G__43494 = (i__4500__auto___43493 + (1));
i__4500__auto___43493 = G__43494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42816 = conformed_args__39829__auto__;
var map__42816__$1 = ((((!((map__42816 == null)))?(((((map__42816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42816):map__42816);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42816__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42816__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42816__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.s.cljs$lang$applyTo = (function (seq42813){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42813));
});


fulcro.client.localized_dom.ins = (function fulcro$client$localized_dom$ins(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43495 = arguments.length;
var i__4500__auto___43496 = (0);
while(true){
if((i__4500__auto___43496 < len__4499__auto___43495)){
args__4502__auto__.push((arguments[i__4500__auto___43496]));

var G__43497 = (i__4500__auto___43496 + (1));
i__4500__auto___43496 = G__43497;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42820 = conformed_args__39829__auto__;
var map__42820__$1 = ((((!((map__42820 == null)))?(((((map__42820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42820):map__42820);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ins.cljs$lang$applyTo = (function (seq42819){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42819));
});


fulcro.client.localized_dom.footer = (function fulcro$client$localized_dom$footer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43498 = arguments.length;
var i__4500__auto___43499 = (0);
while(true){
if((i__4500__auto___43499 < len__4499__auto___43498)){
args__4502__auto__.push((arguments[i__4500__auto___43499]));

var G__43500 = (i__4500__auto___43499 + (1));
i__4500__auto___43499 = G__43500;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42829 = conformed_args__39829__auto__;
var map__42829__$1 = ((((!((map__42829 == null)))?(((((map__42829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42829):map__42829);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.footer.cljs$lang$applyTo = (function (seq42824){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42824));
});


fulcro.client.localized_dom.title = (function fulcro$client$localized_dom$title(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43501 = arguments.length;
var i__4500__auto___43502 = (0);
while(true){
if((i__4500__auto___43502 < len__4499__auto___43501)){
args__4502__auto__.push((arguments[i__4500__auto___43502]));

var G__43503 = (i__4500__auto___43502 + (1));
i__4500__auto___43502 = G__43503;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42835 = conformed_args__39829__auto__;
var map__42835__$1 = ((((!((map__42835 == null)))?(((((map__42835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42835):map__42835);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.title.cljs$lang$applyTo = (function (seq42834){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42834));
});


fulcro.client.localized_dom.h5 = (function fulcro$client$localized_dom$h5(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43504 = arguments.length;
var i__4500__auto___43505 = (0);
while(true){
if((i__4500__auto___43505 < len__4499__auto___43504)){
args__4502__auto__.push((arguments[i__4500__auto___43505]));

var G__43506 = (i__4500__auto___43505 + (1));
i__4500__auto___43505 = G__43506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42848 = conformed_args__39829__auto__;
var map__42848__$1 = ((((!((map__42848 == null)))?(((((map__42848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42848):map__42848);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42848__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42848__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42848__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h5.cljs$lang$applyTo = (function (seq42847){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42847));
});


fulcro.client.localized_dom.canvas = (function fulcro$client$localized_dom$canvas(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43507 = arguments.length;
var i__4500__auto___43508 = (0);
while(true){
if((i__4500__auto___43508 < len__4499__auto___43507)){
args__4502__auto__.push((arguments[i__4500__auto___43508]));

var G__43509 = (i__4500__auto___43508 + (1));
i__4500__auto___43508 = G__43509;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42858 = conformed_args__39829__auto__;
var map__42858__$1 = ((((!((map__42858 == null)))?(((((map__42858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42858):map__42858);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.canvas.cljs$lang$applyTo = (function (seq42854){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42854));
});


fulcro.client.localized_dom.param = (function fulcro$client$localized_dom$param(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43510 = arguments.length;
var i__4500__auto___43511 = (0);
while(true){
if((i__4500__auto___43511 < len__4499__auto___43510)){
args__4502__auto__.push((arguments[i__4500__auto___43511]));

var G__43512 = (i__4500__auto___43511 + (1));
i__4500__auto___43511 = G__43512;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42866 = conformed_args__39829__auto__;
var map__42866__$1 = ((((!((map__42866 == null)))?(((((map__42866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42866):map__42866);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42866__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42866__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42866__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.param.cljs$lang$applyTo = (function (seq42865){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42865));
});


fulcro.client.localized_dom.div = (function fulcro$client$localized_dom$div(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43513 = arguments.length;
var i__4500__auto___43514 = (0);
while(true){
if((i__4500__auto___43514 < len__4499__auto___43513)){
args__4502__auto__.push((arguments[i__4500__auto___43514]));

var G__43515 = (i__4500__auto___43514 + (1));
i__4500__auto___43514 = G__43515;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42872 = conformed_args__39829__auto__;
var map__42872__$1 = ((((!((map__42872 == null)))?(((((map__42872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42872):map__42872);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.div.cljs$lang$applyTo = (function (seq42871){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42871));
});


fulcro.client.localized_dom.option = (function fulcro$client$localized_dom$option(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43516 = arguments.length;
var i__4500__auto___43517 = (0);
while(true){
if((i__4500__auto___43517 < len__4499__auto___43516)){
args__4502__auto__.push((arguments[i__4500__auto___43517]));

var G__43518 = (i__4500__auto___43517 + (1));
i__4500__auto___43517 = G__43518;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42881 = conformed_args__39829__auto__;
var map__42881__$1 = ((((!((map__42881 == null)))?(((((map__42881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42881):map__42881);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.option.cljs$lang$applyTo = (function (seq42879){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42879));
});


fulcro.client.localized_dom.summary = (function fulcro$client$localized_dom$summary(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43519 = arguments.length;
var i__4500__auto___43520 = (0);
while(true){
if((i__4500__auto___43520 < len__4499__auto___43519)){
args__4502__auto__.push((arguments[i__4500__auto___43520]));

var G__43521 = (i__4500__auto___43520 + (1));
i__4500__auto___43520 = G__43521;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42889 = conformed_args__39829__auto__;
var map__42889__$1 = ((((!((map__42889 == null)))?(((((map__42889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42889):map__42889);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.summary.cljs$lang$applyTo = (function (seq42888){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42888));
});


fulcro.client.localized_dom.samp = (function fulcro$client$localized_dom$samp(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43522 = arguments.length;
var i__4500__auto___43523 = (0);
while(true){
if((i__4500__auto___43523 < len__4499__auto___43522)){
args__4502__auto__.push((arguments[i__4500__auto___43523]));

var G__43524 = (i__4500__auto___43523 + (1));
i__4500__auto___43523 = G__43524;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42895 = conformed_args__39829__auto__;
var map__42895__$1 = ((((!((map__42895 == null)))?(((((map__42895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42895):map__42895);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.samp.cljs$lang$applyTo = (function (seq42894){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42894));
});


fulcro.client.localized_dom.small = (function fulcro$client$localized_dom$small(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43525 = arguments.length;
var i__4500__auto___43526 = (0);
while(true){
if((i__4500__auto___43526 < len__4499__auto___43525)){
args__4502__auto__.push((arguments[i__4500__auto___43526]));

var G__43527 = (i__4500__auto___43526 + (1));
i__4500__auto___43526 = G__43527;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42899 = conformed_args__39829__auto__;
var map__42899__$1 = ((((!((map__42899 == null)))?(((((map__42899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42899):map__42899);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.small.cljs$lang$applyTo = (function (seq42898){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42898));
});


fulcro.client.localized_dom.style = (function fulcro$client$localized_dom$style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43528 = arguments.length;
var i__4500__auto___43529 = (0);
while(true){
if((i__4500__auto___43529 < len__4499__auto___43528)){
args__4502__auto__.push((arguments[i__4500__auto___43529]));

var G__43530 = (i__4500__auto___43529 + (1));
i__4500__auto___43529 = G__43530;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42902 = conformed_args__39829__auto__;
var map__42902__$1 = ((((!((map__42902 == null)))?(((((map__42902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42902):map__42902);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42902__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42902__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42902__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.style.cljs$lang$applyTo = (function (seq42901){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42901));
});


fulcro.client.localized_dom.textarea = (function fulcro$client$localized_dom$textarea(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43531 = arguments.length;
var i__4500__auto___43532 = (0);
while(true){
if((i__4500__auto___43532 < len__4499__auto___43531)){
args__4502__auto__.push((arguments[i__4500__auto___43532]));

var G__43533 = (i__4500__auto___43532 + (1));
i__4500__auto___43532 = G__43533;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42912 = conformed_args__39829__auto__;
var map__42912__$1 = ((((!((map__42912 == null)))?(((((map__42912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42912):map__42912);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42912__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42912__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42912__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textarea.cljs$lang$applyTo = (function (seq42908){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42908));
});


fulcro.client.localized_dom.h4 = (function fulcro$client$localized_dom$h4(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43534 = arguments.length;
var i__4500__auto___43535 = (0);
while(true){
if((i__4500__auto___43535 < len__4499__auto___43534)){
args__4502__auto__.push((arguments[i__4500__auto___43535]));

var G__43536 = (i__4500__auto___43535 + (1));
i__4500__auto___43535 = G__43536;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42919 = conformed_args__39829__auto__;
var map__42919__$1 = ((((!((map__42919 == null)))?(((((map__42919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42919):map__42919);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h4.cljs$lang$applyTo = (function (seq42915){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42915));
});


fulcro.client.localized_dom.head = (function fulcro$client$localized_dom$head(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43537 = arguments.length;
var i__4500__auto___43538 = (0);
while(true){
if((i__4500__auto___43538 < len__4499__auto___43537)){
args__4502__auto__.push((arguments[i__4500__auto___43538]));

var G__43539 = (i__4500__auto___43538 + (1));
i__4500__auto___43538 = G__43539;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42922 = conformed_args__39829__auto__;
var map__42922__$1 = ((((!((map__42922 == null)))?(((((map__42922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42922):map__42922);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42922__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42922__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42922__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.head.cljs$lang$applyTo = (function (seq42921){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42921));
});


fulcro.client.localized_dom.g = (function fulcro$client$localized_dom$g(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43540 = arguments.length;
var i__4500__auto___43541 = (0);
while(true){
if((i__4500__auto___43541 < len__4499__auto___43540)){
args__4502__auto__.push((arguments[i__4500__auto___43541]));

var G__43542 = (i__4500__auto___43541 + (1));
i__4500__auto___43541 = G__43542;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42933 = conformed_args__39829__auto__;
var map__42933__$1 = ((((!((map__42933 == null)))?(((((map__42933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42933):map__42933);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.g.cljs$lang$applyTo = (function (seq42924){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42924));
});


fulcro.client.localized_dom.stop = (function fulcro$client$localized_dom$stop(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43543 = arguments.length;
var i__4500__auto___43544 = (0);
while(true){
if((i__4500__auto___43544 < len__4499__auto___43543)){
args__4502__auto__.push((arguments[i__4500__auto___43544]));

var G__43545 = (i__4500__auto___43544 + (1));
i__4500__auto___43544 = G__43545;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42945 = conformed_args__39829__auto__;
var map__42945__$1 = ((((!((map__42945 == null)))?(((((map__42945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42945):map__42945);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.stop.cljs$lang$applyTo = (function (seq42940){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42940));
});


fulcro.client.localized_dom.var$ = (function fulcro$client$localized_dom$var(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43546 = arguments.length;
var i__4500__auto___43547 = (0);
while(true){
if((i__4500__auto___43547 < len__4499__auto___43546)){
args__4502__auto__.push((arguments[i__4500__auto___43547]));

var G__43548 = (i__4500__auto___43547 + (1));
i__4500__auto___43547 = G__43548;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42951 = conformed_args__39829__auto__;
var map__42951__$1 = ((((!((map__42951 == null)))?(((((map__42951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42951):map__42951);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.var$.cljs$lang$applyTo = (function (seq42950){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42950));
});


fulcro.client.localized_dom.tspan = (function fulcro$client$localized_dom$tspan(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43549 = arguments.length;
var i__4500__auto___43550 = (0);
while(true){
if((i__4500__auto___43550 < len__4499__auto___43549)){
args__4502__auto__.push((arguments[i__4500__auto___43550]));

var G__43551 = (i__4500__auto___43550 + (1));
i__4500__auto___43550 = G__43551;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42956 = conformed_args__39829__auto__;
var map__42956__$1 = ((((!((map__42956 == null)))?(((((map__42956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42956):map__42956);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tspan.cljs$lang$applyTo = (function (seq42954){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42954));
});


fulcro.client.localized_dom.ol = (function fulcro$client$localized_dom$ol(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43552 = arguments.length;
var i__4500__auto___43553 = (0);
while(true){
if((i__4500__auto___43553 < len__4499__auto___43552)){
args__4502__auto__.push((arguments[i__4500__auto___43553]));

var G__43554 = (i__4500__auto___43553 + (1));
i__4500__auto___43553 = G__43554;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42961 = conformed_args__39829__auto__;
var map__42961__$1 = ((((!((map__42961 == null)))?(((((map__42961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42961):map__42961);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ol.cljs$lang$applyTo = (function (seq42958){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42958));
});


fulcro.client.localized_dom.details = (function fulcro$client$localized_dom$details(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43555 = arguments.length;
var i__4500__auto___43556 = (0);
while(true){
if((i__4500__auto___43556 < len__4499__auto___43555)){
args__4502__auto__.push((arguments[i__4500__auto___43556]));

var G__43557 = (i__4500__auto___43556 + (1));
i__4500__auto___43556 = G__43557;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42973 = conformed_args__39829__auto__;
var map__42973__$1 = ((((!((map__42973 == null)))?(((((map__42973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42973):map__42973);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.details.cljs$lang$applyTo = (function (seq42965){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42965));
});


fulcro.client.localized_dom.line = (function fulcro$client$localized_dom$line(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43558 = arguments.length;
var i__4500__auto___43559 = (0);
while(true){
if((i__4500__auto___43559 < len__4499__auto___43558)){
args__4502__auto__.push((arguments[i__4500__auto___43559]));

var G__43560 = (i__4500__auto___43559 + (1));
i__4500__auto___43559 = G__43560;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42976 = conformed_args__39829__auto__;
var map__42976__$1 = ((((!((map__42976 == null)))?(((((map__42976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42976):map__42976);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.line.cljs$lang$applyTo = (function (seq42975){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42975));
});


fulcro.client.localized_dom.col = (function fulcro$client$localized_dom$col(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43561 = arguments.length;
var i__4500__auto___43562 = (0);
while(true){
if((i__4500__auto___43562 < len__4499__auto___43561)){
args__4502__auto__.push((arguments[i__4500__auto___43562]));

var G__43563 = (i__4500__auto___43562 + (1));
i__4500__auto___43562 = G__43563;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42985 = conformed_args__39829__auto__;
var map__42985__$1 = ((((!((map__42985 == null)))?(((((map__42985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42985):map__42985);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.col.cljs$lang$applyTo = (function (seq42982){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42982));
});


fulcro.client.localized_dom.label = (function fulcro$client$localized_dom$label(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43564 = arguments.length;
var i__4500__auto___43565 = (0);
while(true){
if((i__4500__auto___43565 < len__4499__auto___43564)){
args__4502__auto__.push((arguments[i__4500__auto___43565]));

var G__43566 = (i__4500__auto___43565 + (1));
i__4500__auto___43565 = G__43566;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42992 = conformed_args__39829__auto__;
var map__42992__$1 = ((((!((map__42992 == null)))?(((((map__42992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42992):map__42992);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.label.cljs$lang$applyTo = (function (seq42991){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42991));
});


fulcro.client.localized_dom.picture = (function fulcro$client$localized_dom$picture(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43567 = arguments.length;
var i__4500__auto___43568 = (0);
while(true){
if((i__4500__auto___43568 < len__4499__auto___43567)){
args__4502__auto__.push((arguments[i__4500__auto___43568]));

var G__43569 = (i__4500__auto___43568 + (1));
i__4500__auto___43568 = G__43569;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__42998 = conformed_args__39829__auto__;
var map__42998__$1 = ((((!((map__42998 == null)))?(((((map__42998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42998):map__42998);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42998__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42998__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42998__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.picture.cljs$lang$applyTo = (function (seq42994){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42994));
});


fulcro.client.localized_dom.rt = (function fulcro$client$localized_dom$rt(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43570 = arguments.length;
var i__4500__auto___43571 = (0);
while(true){
if((i__4500__auto___43571 < len__4499__auto___43570)){
args__4502__auto__.push((arguments[i__4500__auto___43571]));

var G__43572 = (i__4500__auto___43571 + (1));
i__4500__auto___43571 = G__43572;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43001 = conformed_args__39829__auto__;
var map__43001__$1 = ((((!((map__43001 == null)))?(((((map__43001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43001):map__43001);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rt.cljs$lang$applyTo = (function (seq43000){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43000));
});


fulcro.client.localized_dom.h6 = (function fulcro$client$localized_dom$h6(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43573 = arguments.length;
var i__4500__auto___43574 = (0);
while(true){
if((i__4500__auto___43574 < len__4499__auto___43573)){
args__4502__auto__.push((arguments[i__4500__auto___43574]));

var G__43575 = (i__4500__auto___43574 + (1));
i__4500__auto___43574 = G__43575;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43004 = conformed_args__39829__auto__;
var map__43004__$1 = ((((!((map__43004 == null)))?(((((map__43004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43004):map__43004);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43004__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h6.cljs$lang$applyTo = (function (seq43003){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43003));
});


fulcro.client.localized_dom.link = (function fulcro$client$localized_dom$link(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43576 = arguments.length;
var i__4500__auto___43577 = (0);
while(true){
if((i__4500__auto___43577 < len__4499__auto___43576)){
args__4502__auto__.push((arguments[i__4500__auto___43577]));

var G__43578 = (i__4500__auto___43577 + (1));
i__4500__auto___43577 = G__43578;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43009 = conformed_args__39829__auto__;
var map__43009__$1 = ((((!((map__43009 == null)))?(((((map__43009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43009):map__43009);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.link.cljs$lang$applyTo = (function (seq43006){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43006));
});


fulcro.client.localized_dom.defs = (function fulcro$client$localized_dom$defs(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43579 = arguments.length;
var i__4500__auto___43580 = (0);
while(true){
if((i__4500__auto___43580 < len__4499__auto___43579)){
args__4502__auto__.push((arguments[i__4500__auto___43580]));

var G__43581 = (i__4500__auto___43580 + (1));
i__4500__auto___43580 = G__43581;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43014 = conformed_args__39829__auto__;
var map__43014__$1 = ((((!((map__43014 == null)))?(((((map__43014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43014):map__43014);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43014__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43014__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43014__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.defs.cljs$lang$applyTo = (function (seq43012){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43012));
});


fulcro.client.localized_dom.colgroup = (function fulcro$client$localized_dom$colgroup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43582 = arguments.length;
var i__4500__auto___43583 = (0);
while(true){
if((i__4500__auto___43583 < len__4499__auto___43582)){
args__4502__auto__.push((arguments[i__4500__auto___43583]));

var G__43584 = (i__4500__auto___43583 + (1));
i__4500__auto___43583 = G__43584;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43021 = conformed_args__39829__auto__;
var map__43021__$1 = ((((!((map__43021 == null)))?(((((map__43021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43021):map__43021);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.colgroup.cljs$lang$applyTo = (function (seq43019){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43019));
});


fulcro.client.localized_dom.meter = (function fulcro$client$localized_dom$meter(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43585 = arguments.length;
var i__4500__auto___43586 = (0);
while(true){
if((i__4500__auto___43586 < len__4499__auto___43585)){
args__4502__auto__.push((arguments[i__4500__auto___43586]));

var G__43587 = (i__4500__auto___43586 + (1));
i__4500__auto___43586 = G__43587;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43025 = conformed_args__39829__auto__;
var map__43025__$1 = ((((!((map__43025 == null)))?(((((map__43025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43025):map__43025);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meter.cljs$lang$applyTo = (function (seq43023){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43023));
});


fulcro.client.localized_dom.bdo = (function fulcro$client$localized_dom$bdo(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43588 = arguments.length;
var i__4500__auto___43589 = (0);
while(true){
if((i__4500__auto___43589 < len__4499__auto___43588)){
args__4502__auto__.push((arguments[i__4500__auto___43589]));

var G__43590 = (i__4500__auto___43589 + (1));
i__4500__auto___43589 = G__43590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43029 = conformed_args__39829__auto__;
var map__43029__$1 = ((((!((map__43029 == null)))?(((((map__43029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43029):map__43029);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdo.cljs$lang$applyTo = (function (seq43028){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43028));
});


fulcro.client.localized_dom.b = (function fulcro$client$localized_dom$b(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43591 = arguments.length;
var i__4500__auto___43592 = (0);
while(true){
if((i__4500__auto___43592 < len__4499__auto___43591)){
args__4502__auto__.push((arguments[i__4500__auto___43592]));

var G__43593 = (i__4500__auto___43592 + (1));
i__4500__auto___43592 = G__43593;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43035 = conformed_args__39829__auto__;
var map__43035__$1 = ((((!((map__43035 == null)))?(((((map__43035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43035):map__43035);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.b.cljs$lang$applyTo = (function (seq43031){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43031));
});


fulcro.client.localized_dom.svg = (function fulcro$client$localized_dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43594 = arguments.length;
var i__4500__auto___43595 = (0);
while(true){
if((i__4500__auto___43595 < len__4499__auto___43594)){
args__4502__auto__.push((arguments[i__4500__auto___43595]));

var G__43596 = (i__4500__auto___43595 + (1));
i__4500__auto___43595 = G__43596;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43040 = conformed_args__39829__auto__;
var map__43040__$1 = ((((!((map__43040 == null)))?(((((map__43040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43040):map__43040);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.svg.cljs$lang$applyTo = (function (seq43038){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43038));
});


fulcro.client.localized_dom.ellipse = (function fulcro$client$localized_dom$ellipse(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43597 = arguments.length;
var i__4500__auto___43598 = (0);
while(true){
if((i__4500__auto___43598 < len__4499__auto___43597)){
args__4502__auto__.push((arguments[i__4500__auto___43598]));

var G__43599 = (i__4500__auto___43598 + (1));
i__4500__auto___43598 = G__43599;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43043 = conformed_args__39829__auto__;
var map__43043__$1 = ((((!((map__43043 == null)))?(((((map__43043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43043):map__43043);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ellipse.cljs$lang$applyTo = (function (seq43042){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43042));
});


fulcro.client.localized_dom.code = (function fulcro$client$localized_dom$code(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43602 = arguments.length;
var i__4500__auto___43603 = (0);
while(true){
if((i__4500__auto___43603 < len__4499__auto___43602)){
args__4502__auto__.push((arguments[i__4500__auto___43603]));

var G__43605 = (i__4500__auto___43603 + (1));
i__4500__auto___43603 = G__43605;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43046 = conformed_args__39829__auto__;
var map__43046__$1 = ((((!((map__43046 == null)))?(((((map__43046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43046):map__43046);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43046__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43046__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43046__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.code.cljs$lang$applyTo = (function (seq43045){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43045));
});


fulcro.client.localized_dom.dialog = (function fulcro$client$localized_dom$dialog(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43613 = arguments.length;
var i__4500__auto___43614 = (0);
while(true){
if((i__4500__auto___43614 < len__4499__auto___43613)){
args__4502__auto__.push((arguments[i__4500__auto___43614]));

var G__43615 = (i__4500__auto___43614 + (1));
i__4500__auto___43614 = G__43615;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43052 = conformed_args__39829__auto__;
var map__43052__$1 = ((((!((map__43052 == null)))?(((((map__43052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43052):map__43052);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dialog.cljs$lang$applyTo = (function (seq43048){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43048));
});


fulcro.client.localized_dom.linearGradient = (function fulcro$client$localized_dom$linearGradient(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43621 = arguments.length;
var i__4500__auto___43622 = (0);
while(true){
if((i__4500__auto___43622 < len__4499__auto___43621)){
args__4502__auto__.push((arguments[i__4500__auto___43622]));

var G__43623 = (i__4500__auto___43622 + (1));
i__4500__auto___43622 = G__43623;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43056 = conformed_args__39829__auto__;
var map__43056__$1 = ((((!((map__43056 == null)))?(((((map__43056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43056):map__43056);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43056__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43056__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq43055){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43055));
});


fulcro.client.localized_dom.noscript = (function fulcro$client$localized_dom$noscript(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43628 = arguments.length;
var i__4500__auto___43630 = (0);
while(true){
if((i__4500__auto___43630 < len__4499__auto___43628)){
args__4502__auto__.push((arguments[i__4500__auto___43630]));

var G__43632 = (i__4500__auto___43630 + (1));
i__4500__auto___43630 = G__43632;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43059 = conformed_args__39829__auto__;
var map__43059__$1 = ((((!((map__43059 == null)))?(((((map__43059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43059):map__43059);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.noscript.cljs$lang$applyTo = (function (seq43058){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43058));
});


fulcro.client.localized_dom.h2 = (function fulcro$client$localized_dom$h2(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43636 = arguments.length;
var i__4500__auto___43637 = (0);
while(true){
if((i__4500__auto___43637 < len__4499__auto___43636)){
args__4502__auto__.push((arguments[i__4500__auto___43637]));

var G__43638 = (i__4500__auto___43637 + (1));
i__4500__auto___43637 = G__43638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43062 = conformed_args__39829__auto__;
var map__43062__$1 = ((((!((map__43062 == null)))?(((((map__43062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43062):map__43062);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h2.cljs$lang$applyTo = (function (seq43061){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43061));
});


fulcro.client.localized_dom.area = (function fulcro$client$localized_dom$area(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43640 = arguments.length;
var i__4500__auto___43641 = (0);
while(true){
if((i__4500__auto___43641 < len__4499__auto___43640)){
args__4502__auto__.push((arguments[i__4500__auto___43641]));

var G__43642 = (i__4500__auto___43641 + (1));
i__4500__auto___43641 = G__43642;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43065 = conformed_args__39829__auto__;
var map__43065__$1 = ((((!((map__43065 == null)))?(((((map__43065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43065):map__43065);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43065__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43065__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43065__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.area.cljs$lang$applyTo = (function (seq43064){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43064));
});


fulcro.client.localized_dom.br = (function fulcro$client$localized_dom$br(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43651 = arguments.length;
var i__4500__auto___43652 = (0);
while(true){
if((i__4500__auto___43652 < len__4499__auto___43651)){
args__4502__auto__.push((arguments[i__4500__auto___43652]));

var G__43654 = (i__4500__auto___43652 + (1));
i__4500__auto___43652 = G__43654;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__39829__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__43068 = conformed_args__39829__auto__;
var map__43068__$1 = ((((!((map__43068 == null)))?(((((map__43068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43068):map__43068);
var attrs__39830__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43068__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__39832__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43068__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__39831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43068__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__39831__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__39831__auto__);
var attrs_value__39833__auto__ = (function (){var or__3922__auto__ = cljs.core.second(attrs__39830__auto__);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__39833__auto__], null),children__39831__auto____$1),css__39832__auto__);
});

fulcro.client.localized_dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.br.cljs$lang$applyTo = (function (seq43067){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43067));
});


//# sourceMappingURL=fulcro.client.localized_dom.js.map

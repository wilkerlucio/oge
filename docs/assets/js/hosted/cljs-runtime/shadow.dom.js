goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45382 = coll;
var G__45383 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45382,G__45383) : shadow.dom.lazy_native_coll_seq.call(null,G__45382,G__45383));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45402 = arguments.length;
switch (G__45402) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45409 = arguments.length;
switch (G__45409) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45413 = arguments.length;
switch (G__45413) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45416 = arguments.length;
switch (G__45416) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45420 = arguments.length;
switch (G__45420) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__45421 = document;
var G__45422 = shadow.dom.dom_node(el);
return goog.dom.contains(G__45421,G__45422);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__45423 = shadow.dom.dom_node(parent);
var G__45424 = shadow.dom.dom_node(el);
return goog.dom.contains(G__45423,G__45424);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__45426 = shadow.dom.dom_node(el);
var G__45427 = cls;
return goog.dom.classlist.add(G__45426,G__45427);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__45428 = shadow.dom.dom_node(el);
var G__45429 = cls;
return goog.dom.classlist.remove(G__45428,G__45429);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45431 = arguments.length;
switch (G__45431) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__45432 = shadow.dom.dom_node(el);
var G__45433 = cls;
return goog.dom.classlist.toggle(G__45432,G__45433);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45435){if((e45435 instanceof Object)){
var e = e45435;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45435;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45437 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45438 = null;
var count__45439 = (0);
var i__45440 = (0);
while(true){
if((i__45440 < count__45439)){
var el = chunk__45438.cljs$core$IIndexed$_nth$arity$2(null,i__45440);
var handler_45448__$1 = ((function (seq__45437,chunk__45438,count__45439,i__45440,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45437,chunk__45438,count__45439,i__45440,el))
;
var G__45442_45449 = el;
var G__45443_45450 = cljs.core.name(ev);
var G__45444_45451 = handler_45448__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__45442_45449,G__45443_45450,G__45444_45451) : shadow.dom.dom_listen.call(null,G__45442_45449,G__45443_45450,G__45444_45451));


var G__45452 = seq__45437;
var G__45453 = chunk__45438;
var G__45454 = count__45439;
var G__45455 = (i__45440 + (1));
seq__45437 = G__45452;
chunk__45438 = G__45453;
count__45439 = G__45454;
i__45440 = G__45455;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__45437);
if(temp__5457__auto__){
var seq__45437__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45437__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45437__$1);
var G__45456 = cljs.core.chunk_rest(seq__45437__$1);
var G__45457 = c__4319__auto__;
var G__45458 = cljs.core.count(c__4319__auto__);
var G__45459 = (0);
seq__45437 = G__45456;
chunk__45438 = G__45457;
count__45439 = G__45458;
i__45440 = G__45459;
continue;
} else {
var el = cljs.core.first(seq__45437__$1);
var handler_45460__$1 = ((function (seq__45437,chunk__45438,count__45439,i__45440,el,seq__45437__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45437,chunk__45438,count__45439,i__45440,el,seq__45437__$1,temp__5457__auto__))
;
var G__45445_45461 = el;
var G__45446_45462 = cljs.core.name(ev);
var G__45447_45463 = handler_45460__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__45445_45461,G__45446_45462,G__45447_45463) : shadow.dom.dom_listen.call(null,G__45445_45461,G__45446_45462,G__45447_45463));


var G__45464 = cljs.core.next(seq__45437__$1);
var G__45465 = null;
var G__45466 = (0);
var G__45467 = (0);
seq__45437 = G__45464;
chunk__45438 = G__45465;
count__45439 = G__45466;
i__45440 = G__45467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45469 = arguments.length;
switch (G__45469) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__45470 = shadow.dom.dom_node(el);
var G__45471 = cljs.core.name(ev);
var G__45472 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__45470,G__45471,G__45472) : shadow.dom.dom_listen.call(null,G__45470,G__45471,G__45472));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__45474 = shadow.dom.dom_node(el);
var G__45475 = cljs.core.name(ev);
var G__45476 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__45474,G__45475,G__45476) : shadow.dom.dom_listen_remove.call(null,G__45474,G__45475,G__45476));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45477 = cljs.core.seq(events);
var chunk__45478 = null;
var count__45479 = (0);
var i__45480 = (0);
while(true){
if((i__45480 < count__45479)){
var vec__45481 = chunk__45478.cljs$core$IIndexed$_nth$arity$2(null,i__45480);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45481,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45487 = seq__45477;
var G__45488 = chunk__45478;
var G__45489 = count__45479;
var G__45490 = (i__45480 + (1));
seq__45477 = G__45487;
chunk__45478 = G__45488;
count__45479 = G__45489;
i__45480 = G__45490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__45477);
if(temp__5457__auto__){
var seq__45477__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45477__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45477__$1);
var G__45491 = cljs.core.chunk_rest(seq__45477__$1);
var G__45492 = c__4319__auto__;
var G__45493 = cljs.core.count(c__4319__auto__);
var G__45494 = (0);
seq__45477 = G__45491;
chunk__45478 = G__45492;
count__45479 = G__45493;
i__45480 = G__45494;
continue;
} else {
var vec__45484 = cljs.core.first(seq__45477__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45484,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45495 = cljs.core.next(seq__45477__$1);
var G__45496 = null;
var G__45497 = (0);
var G__45498 = (0);
seq__45477 = G__45495;
chunk__45478 = G__45496;
count__45479 = G__45497;
i__45480 = G__45498;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45499 = cljs.core.seq(styles);
var chunk__45500 = null;
var count__45501 = (0);
var i__45502 = (0);
while(true){
if((i__45502 < count__45501)){
var vec__45503 = chunk__45500.cljs$core$IIndexed$_nth$arity$2(null,i__45502);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45503,(1),null);
var G__45506_45515 = dom;
var G__45507_45516 = cljs.core.name(k);
var G__45508_45517 = (((v == null))?"":v);
goog.style.setStyle(G__45506_45515,G__45507_45516,G__45508_45517);


var G__45518 = seq__45499;
var G__45519 = chunk__45500;
var G__45520 = count__45501;
var G__45521 = (i__45502 + (1));
seq__45499 = G__45518;
chunk__45500 = G__45519;
count__45501 = G__45520;
i__45502 = G__45521;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__45499);
if(temp__5457__auto__){
var seq__45499__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45499__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45499__$1);
var G__45522 = cljs.core.chunk_rest(seq__45499__$1);
var G__45523 = c__4319__auto__;
var G__45524 = cljs.core.count(c__4319__auto__);
var G__45525 = (0);
seq__45499 = G__45522;
chunk__45500 = G__45523;
count__45501 = G__45524;
i__45502 = G__45525;
continue;
} else {
var vec__45509 = cljs.core.first(seq__45499__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45509,(1),null);
var G__45512_45526 = dom;
var G__45513_45527 = cljs.core.name(k);
var G__45514_45528 = (((v == null))?"":v);
goog.style.setStyle(G__45512_45526,G__45513_45527,G__45514_45528);


var G__45529 = cljs.core.next(seq__45499__$1);
var G__45530 = null;
var G__45531 = (0);
var G__45532 = (0);
seq__45499 = G__45529;
chunk__45500 = G__45530;
count__45501 = G__45531;
i__45502 = G__45532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45533_45534 = key;
var G__45533_45535__$1 = (((G__45533_45534 instanceof cljs.core.Keyword))?G__45533_45534.fqn:null);
switch (G__45533_45535__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45537 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_45537,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_45537,"aria-");
}
})())){
el.setAttribute(ks_45537,value);
} else {
(el[ks_45537] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__45538 = shadow.dom.dom_node(el);
var G__45539 = cls;
return goog.dom.classlist.contains(G__45538,G__45539);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45540){
var map__45541 = p__45540;
var map__45541__$1 = ((((!((map__45541 == null)))?(((((map__45541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45541):map__45541);
var props = map__45541__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45543 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45546 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45546,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45546;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45548 = arguments.length;
switch (G__45548) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45550){
var vec__45551 = p__45550;
var seq__45552 = cljs.core.seq(vec__45551);
var first__45553 = cljs.core.first(seq__45552);
var seq__45552__$1 = cljs.core.next(seq__45552);
var nn = first__45553;
var first__45553__$1 = cljs.core.first(seq__45552__$1);
var seq__45552__$2 = cljs.core.next(seq__45552__$1);
var np = first__45553__$1;
var nc = seq__45552__$2;
var node = vec__45551;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45554 = nn;
var G__45555 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45554,G__45555) : create_fn.call(null,G__45554,G__45555));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45556 = nn;
var G__45557 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45556,G__45557) : create_fn.call(null,G__45556,G__45557));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45558 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45558,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45558,(1),null);
var seq__45561_45577 = cljs.core.seq(node_children);
var chunk__45562_45578 = null;
var count__45563_45579 = (0);
var i__45564_45580 = (0);
while(true){
if((i__45564_45580 < count__45563_45579)){
var child_struct_45581 = chunk__45562_45578.cljs$core$IIndexed$_nth$arity$2(null,i__45564_45580);
var children_45582 = shadow.dom.dom_node(child_struct_45581);
if(cljs.core.seq_QMARK_(children_45582)){
var seq__45565_45583 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45582));
var chunk__45567_45584 = null;
var count__45568_45585 = (0);
var i__45569_45586 = (0);
while(true){
if((i__45569_45586 < count__45568_45585)){
var child_45587 = chunk__45567_45584.cljs$core$IIndexed$_nth$arity$2(null,i__45569_45586);
if(cljs.core.truth_(child_45587)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45587);


var G__45588 = seq__45565_45583;
var G__45589 = chunk__45567_45584;
var G__45590 = count__45568_45585;
var G__45591 = (i__45569_45586 + (1));
seq__45565_45583 = G__45588;
chunk__45567_45584 = G__45589;
count__45568_45585 = G__45590;
i__45569_45586 = G__45591;
continue;
} else {
var G__45592 = seq__45565_45583;
var G__45593 = chunk__45567_45584;
var G__45594 = count__45568_45585;
var G__45595 = (i__45569_45586 + (1));
seq__45565_45583 = G__45592;
chunk__45567_45584 = G__45593;
count__45568_45585 = G__45594;
i__45569_45586 = G__45595;
continue;
}
} else {
var temp__5457__auto___45596 = cljs.core.seq(seq__45565_45583);
if(temp__5457__auto___45596){
var seq__45565_45597__$1 = temp__5457__auto___45596;
if(cljs.core.chunked_seq_QMARK_(seq__45565_45597__$1)){
var c__4319__auto___45598 = cljs.core.chunk_first(seq__45565_45597__$1);
var G__45599 = cljs.core.chunk_rest(seq__45565_45597__$1);
var G__45600 = c__4319__auto___45598;
var G__45601 = cljs.core.count(c__4319__auto___45598);
var G__45602 = (0);
seq__45565_45583 = G__45599;
chunk__45567_45584 = G__45600;
count__45568_45585 = G__45601;
i__45569_45586 = G__45602;
continue;
} else {
var child_45603 = cljs.core.first(seq__45565_45597__$1);
if(cljs.core.truth_(child_45603)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45603);


var G__45604 = cljs.core.next(seq__45565_45597__$1);
var G__45605 = null;
var G__45606 = (0);
var G__45607 = (0);
seq__45565_45583 = G__45604;
chunk__45567_45584 = G__45605;
count__45568_45585 = G__45606;
i__45569_45586 = G__45607;
continue;
} else {
var G__45608 = cljs.core.next(seq__45565_45597__$1);
var G__45609 = null;
var G__45610 = (0);
var G__45611 = (0);
seq__45565_45583 = G__45608;
chunk__45567_45584 = G__45609;
count__45568_45585 = G__45610;
i__45569_45586 = G__45611;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45582);
}


var G__45612 = seq__45561_45577;
var G__45613 = chunk__45562_45578;
var G__45614 = count__45563_45579;
var G__45615 = (i__45564_45580 + (1));
seq__45561_45577 = G__45612;
chunk__45562_45578 = G__45613;
count__45563_45579 = G__45614;
i__45564_45580 = G__45615;
continue;
} else {
var temp__5457__auto___45616 = cljs.core.seq(seq__45561_45577);
if(temp__5457__auto___45616){
var seq__45561_45617__$1 = temp__5457__auto___45616;
if(cljs.core.chunked_seq_QMARK_(seq__45561_45617__$1)){
var c__4319__auto___45618 = cljs.core.chunk_first(seq__45561_45617__$1);
var G__45619 = cljs.core.chunk_rest(seq__45561_45617__$1);
var G__45620 = c__4319__auto___45618;
var G__45621 = cljs.core.count(c__4319__auto___45618);
var G__45622 = (0);
seq__45561_45577 = G__45619;
chunk__45562_45578 = G__45620;
count__45563_45579 = G__45621;
i__45564_45580 = G__45622;
continue;
} else {
var child_struct_45623 = cljs.core.first(seq__45561_45617__$1);
var children_45624 = shadow.dom.dom_node(child_struct_45623);
if(cljs.core.seq_QMARK_(children_45624)){
var seq__45571_45625 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45624));
var chunk__45573_45626 = null;
var count__45574_45627 = (0);
var i__45575_45628 = (0);
while(true){
if((i__45575_45628 < count__45574_45627)){
var child_45629 = chunk__45573_45626.cljs$core$IIndexed$_nth$arity$2(null,i__45575_45628);
if(cljs.core.truth_(child_45629)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45629);


var G__45630 = seq__45571_45625;
var G__45631 = chunk__45573_45626;
var G__45632 = count__45574_45627;
var G__45633 = (i__45575_45628 + (1));
seq__45571_45625 = G__45630;
chunk__45573_45626 = G__45631;
count__45574_45627 = G__45632;
i__45575_45628 = G__45633;
continue;
} else {
var G__45634 = seq__45571_45625;
var G__45635 = chunk__45573_45626;
var G__45636 = count__45574_45627;
var G__45637 = (i__45575_45628 + (1));
seq__45571_45625 = G__45634;
chunk__45573_45626 = G__45635;
count__45574_45627 = G__45636;
i__45575_45628 = G__45637;
continue;
}
} else {
var temp__5457__auto___45638__$1 = cljs.core.seq(seq__45571_45625);
if(temp__5457__auto___45638__$1){
var seq__45571_45639__$1 = temp__5457__auto___45638__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45571_45639__$1)){
var c__4319__auto___45640 = cljs.core.chunk_first(seq__45571_45639__$1);
var G__45641 = cljs.core.chunk_rest(seq__45571_45639__$1);
var G__45642 = c__4319__auto___45640;
var G__45643 = cljs.core.count(c__4319__auto___45640);
var G__45644 = (0);
seq__45571_45625 = G__45641;
chunk__45573_45626 = G__45642;
count__45574_45627 = G__45643;
i__45575_45628 = G__45644;
continue;
} else {
var child_45645 = cljs.core.first(seq__45571_45639__$1);
if(cljs.core.truth_(child_45645)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45645);


var G__45646 = cljs.core.next(seq__45571_45639__$1);
var G__45647 = null;
var G__45648 = (0);
var G__45649 = (0);
seq__45571_45625 = G__45646;
chunk__45573_45626 = G__45647;
count__45574_45627 = G__45648;
i__45575_45628 = G__45649;
continue;
} else {
var G__45650 = cljs.core.next(seq__45571_45639__$1);
var G__45651 = null;
var G__45652 = (0);
var G__45653 = (0);
seq__45571_45625 = G__45650;
chunk__45573_45626 = G__45651;
count__45574_45627 = G__45652;
i__45575_45628 = G__45653;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45624);
}


var G__45656 = cljs.core.next(seq__45561_45617__$1);
var G__45657 = null;
var G__45658 = (0);
var G__45659 = (0);
seq__45561_45577 = G__45656;
chunk__45562_45578 = G__45657;
count__45563_45579 = G__45658;
i__45564_45580 = G__45659;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__45676 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__45676);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45686 = cljs.core.seq(node);
var chunk__45687 = null;
var count__45688 = (0);
var i__45689 = (0);
while(true){
if((i__45689 < count__45688)){
var n = chunk__45687.cljs$core$IIndexed$_nth$arity$2(null,i__45689);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45694 = seq__45686;
var G__45695 = chunk__45687;
var G__45696 = count__45688;
var G__45697 = (i__45689 + (1));
seq__45686 = G__45694;
chunk__45687 = G__45695;
count__45688 = G__45696;
i__45689 = G__45697;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__45686);
if(temp__5457__auto__){
var seq__45686__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45686__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45686__$1);
var G__45700 = cljs.core.chunk_rest(seq__45686__$1);
var G__45701 = c__4319__auto__;
var G__45702 = cljs.core.count(c__4319__auto__);
var G__45703 = (0);
seq__45686 = G__45700;
chunk__45687 = G__45701;
count__45688 = G__45702;
i__45689 = G__45703;
continue;
} else {
var n = cljs.core.first(seq__45686__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45705 = cljs.core.next(seq__45686__$1);
var G__45706 = null;
var G__45707 = (0);
var G__45708 = (0);
seq__45686 = G__45705;
chunk__45687 = G__45706;
count__45688 = G__45707;
i__45689 = G__45708;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__45709 = shadow.dom.dom_node(new$);
var G__45710 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__45709,G__45710);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45714 = arguments.length;
switch (G__45714) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45720 = arguments.length;
switch (G__45720) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45741 = arguments.length;
switch (G__45741) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___45761 = arguments.length;
var i__4500__auto___45762 = (0);
while(true){
if((i__4500__auto___45762 < len__4499__auto___45761)){
args__4502__auto__.push((arguments[i__4500__auto___45762]));

var G__45763 = (i__4500__auto___45762 + (1));
i__4500__auto___45762 = G__45763;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45757_45764 = cljs.core.seq(nodes);
var chunk__45758_45765 = null;
var count__45759_45766 = (0);
var i__45760_45767 = (0);
while(true){
if((i__45760_45767 < count__45759_45766)){
var node_45768 = chunk__45758_45765.cljs$core$IIndexed$_nth$arity$2(null,i__45760_45767);
fragment.appendChild(shadow.dom._to_dom(node_45768));


var G__45770 = seq__45757_45764;
var G__45771 = chunk__45758_45765;
var G__45772 = count__45759_45766;
var G__45773 = (i__45760_45767 + (1));
seq__45757_45764 = G__45770;
chunk__45758_45765 = G__45771;
count__45759_45766 = G__45772;
i__45760_45767 = G__45773;
continue;
} else {
var temp__5457__auto___45774 = cljs.core.seq(seq__45757_45764);
if(temp__5457__auto___45774){
var seq__45757_45775__$1 = temp__5457__auto___45774;
if(cljs.core.chunked_seq_QMARK_(seq__45757_45775__$1)){
var c__4319__auto___45776 = cljs.core.chunk_first(seq__45757_45775__$1);
var G__45777 = cljs.core.chunk_rest(seq__45757_45775__$1);
var G__45778 = c__4319__auto___45776;
var G__45779 = cljs.core.count(c__4319__auto___45776);
var G__45780 = (0);
seq__45757_45764 = G__45777;
chunk__45758_45765 = G__45778;
count__45759_45766 = G__45779;
i__45760_45767 = G__45780;
continue;
} else {
var node_45783 = cljs.core.first(seq__45757_45775__$1);
fragment.appendChild(shadow.dom._to_dom(node_45783));


var G__45785 = cljs.core.next(seq__45757_45775__$1);
var G__45786 = null;
var G__45787 = (0);
var G__45788 = (0);
seq__45757_45764 = G__45785;
chunk__45758_45765 = G__45786;
count__45759_45766 = G__45787;
i__45760_45767 = G__45788;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq45756){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45756));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45789_45803 = cljs.core.seq(scripts);
var chunk__45790_45804 = null;
var count__45791_45805 = (0);
var i__45792_45806 = (0);
while(true){
if((i__45792_45806 < count__45791_45805)){
var vec__45793_45807 = chunk__45790_45804.cljs$core$IIndexed$_nth$arity$2(null,i__45792_45806);
var script_tag_45808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793_45807,(0),null);
var script_body_45809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45793_45807,(1),null);
eval(script_body_45809);


var G__45810 = seq__45789_45803;
var G__45811 = chunk__45790_45804;
var G__45812 = count__45791_45805;
var G__45813 = (i__45792_45806 + (1));
seq__45789_45803 = G__45810;
chunk__45790_45804 = G__45811;
count__45791_45805 = G__45812;
i__45792_45806 = G__45813;
continue;
} else {
var temp__5457__auto___45814 = cljs.core.seq(seq__45789_45803);
if(temp__5457__auto___45814){
var seq__45789_45815__$1 = temp__5457__auto___45814;
if(cljs.core.chunked_seq_QMARK_(seq__45789_45815__$1)){
var c__4319__auto___45816 = cljs.core.chunk_first(seq__45789_45815__$1);
var G__45817 = cljs.core.chunk_rest(seq__45789_45815__$1);
var G__45818 = c__4319__auto___45816;
var G__45819 = cljs.core.count(c__4319__auto___45816);
var G__45820 = (0);
seq__45789_45803 = G__45817;
chunk__45790_45804 = G__45818;
count__45791_45805 = G__45819;
i__45792_45806 = G__45820;
continue;
} else {
var vec__45796_45821 = cljs.core.first(seq__45789_45815__$1);
var script_tag_45822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45796_45821,(0),null);
var script_body_45823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45796_45821,(1),null);
eval(script_body_45823);


var G__45824 = cljs.core.next(seq__45789_45815__$1);
var G__45825 = null;
var G__45826 = (0);
var G__45827 = (0);
seq__45789_45803 = G__45824;
chunk__45790_45804 = G__45825;
count__45791_45805 = G__45826;
i__45792_45806 = G__45827;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__45799){
var vec__45800 = p__45799;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__45832 = shadow.dom.dom_node(el);
var G__45833 = cls;
return goog.dom.getAncestorByClass(G__45832,G__45833);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45837 = arguments.length;
switch (G__45837) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__45839 = shadow.dom.dom_node(el);
var G__45840 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__45839,G__45840);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__45841 = shadow.dom.dom_node(el);
var G__45842 = cljs.core.name(tag);
var G__45843 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__45841,G__45842,G__45843);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__45845 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__45845);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__45846 = shadow.dom.dom_node(dom);
var G__45847 = value;
return goog.dom.forms.setValue(G__45846,G__45847);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45848 = cljs.core.seq(style_keys);
var chunk__45849 = null;
var count__45850 = (0);
var i__45851 = (0);
while(true){
if((i__45851 < count__45850)){
var it = chunk__45849.cljs$core$IIndexed$_nth$arity$2(null,i__45851);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45852 = seq__45848;
var G__45853 = chunk__45849;
var G__45854 = count__45850;
var G__45855 = (i__45851 + (1));
seq__45848 = G__45852;
chunk__45849 = G__45853;
count__45850 = G__45854;
i__45851 = G__45855;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__45848);
if(temp__5457__auto__){
var seq__45848__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45848__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45848__$1);
var G__45856 = cljs.core.chunk_rest(seq__45848__$1);
var G__45857 = c__4319__auto__;
var G__45858 = cljs.core.count(c__4319__auto__);
var G__45859 = (0);
seq__45848 = G__45856;
chunk__45849 = G__45857;
count__45850 = G__45858;
i__45851 = G__45859;
continue;
} else {
var it = cljs.core.first(seq__45848__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45860 = cljs.core.next(seq__45848__$1);
var G__45861 = null;
var G__45862 = (0);
var G__45863 = (0);
seq__45848 = G__45860;
chunk__45849 = G__45861;
count__45850 = G__45862;
i__45851 = G__45863;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k45865,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__45869 = k45865;
var G__45869__$1 = (((G__45869 instanceof cljs.core.Keyword))?G__45869.fqn:null);
switch (G__45869__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45865,else__12537__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#shadow.dom.Coordinate{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45864){
var self__ = this;
var G__45864__$1 = this;
return (new cljs.core.RecordIter((0),G__45864__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__45870 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__45870(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45866,other45867){
var self__ = this;
var this45866__$1 = this;
return ((!((other45867 == null))) && ((this45866__$1.constructor === other45867.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45866__$1.x,other45867.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45866__$1.y,other45867.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45866__$1.__extmap,other45867.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__45864){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__45871 = cljs.core.keyword_identical_QMARK_;
var expr__45872 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__45874 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__45875 = expr__45872;
return (pred__45871.cljs$core$IFn$_invoke$arity$2 ? pred__45871.cljs$core$IFn$_invoke$arity$2(G__45874,G__45875) : pred__45871.call(null,G__45874,G__45875));
})())){
return (new shadow.dom.Coordinate(G__45864,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45876 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__45877 = expr__45872;
return (pred__45871.cljs$core$IFn$_invoke$arity$2 ? pred__45871.cljs$core$IFn$_invoke$arity$2(G__45876,G__45877) : pred__45871.call(null,G__45876,G__45877));
})())){
return (new shadow.dom.Coordinate(self__.x,G__45864,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__45864),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__45864){
var self__ = this;
var this__12533__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45864,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45868){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45868),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45868),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45868,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__45879 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__45879);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__45880 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__45880);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__45881 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__45881);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12534__auto__,k__12535__auto__){
var self__ = this;
var this__12534__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__12534__auto____$1,k__12535__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12536__auto__,k45883,else__12537__auto__){
var self__ = this;
var this__12536__auto____$1 = this;
var G__45887 = k45883;
var G__45887__$1 = (((G__45887 instanceof cljs.core.Keyword))?G__45887.fqn:null);
switch (G__45887__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45883,else__12537__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12548__auto__,writer__12549__auto__,opts__12550__auto__){
var self__ = this;
var this__12548__auto____$1 = this;
var pr_pair__12551__auto__ = ((function (this__12548__auto____$1){
return (function (keyval__12552__auto__){
return cljs.core.pr_sequential_writer(writer__12549__auto__,cljs.core.pr_writer,""," ","",opts__12550__auto__,keyval__12552__auto__);
});})(this__12548__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__12549__auto__,pr_pair__12551__auto__,"#shadow.dom.Size{",", ","}",opts__12550__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45882){
var self__ = this;
var G__45882__$1 = this;
return (new cljs.core.RecordIter((0),G__45882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12532__auto__){
var self__ = this;
var this__12532__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12529__auto__){
var self__ = this;
var this__12529__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12538__auto__){
var self__ = this;
var this__12538__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12530__auto__){
var self__ = this;
var this__12530__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__45888 = ((function (h__4030__auto__,this__12530__auto____$1){
return (function (coll__12531__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__12531__auto__));
});})(h__4030__auto__,this__12530__auto____$1))
;
return fexpr__45888(this__12530__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45884,other45885){
var self__ = this;
var this45884__$1 = this;
return ((!((other45885 == null))) && ((this45884__$1.constructor === other45885.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45884__$1.w,other45885.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45884__$1.h,other45885.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45884__$1.__extmap,other45885.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12543__auto__,k__12544__auto__){
var self__ = this;
var this__12543__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__12544__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__12543__auto____$1),self__.__meta),k__12544__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__12544__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12541__auto__,k__12542__auto__,G__45882){
var self__ = this;
var this__12541__auto____$1 = this;
var pred__45889 = cljs.core.keyword_identical_QMARK_;
var expr__45890 = k__12542__auto__;
if(cljs.core.truth_((function (){var G__45892 = new cljs.core.Keyword(null,"w","w",354169001);
var G__45893 = expr__45890;
return (pred__45889.cljs$core$IFn$_invoke$arity$2 ? pred__45889.cljs$core$IFn$_invoke$arity$2(G__45892,G__45893) : pred__45889.call(null,G__45892,G__45893));
})())){
return (new shadow.dom.Size(G__45882,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45894 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__45895 = expr__45890;
return (pred__45889.cljs$core$IFn$_invoke$arity$2 ? pred__45889.cljs$core$IFn$_invoke$arity$2(G__45894,G__45895) : pred__45889.call(null,G__45894,G__45895));
})())){
return (new shadow.dom.Size(self__.w,G__45882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__12542__auto__,G__45882),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12546__auto__){
var self__ = this;
var this__12546__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12533__auto__,G__45882){
var self__ = this;
var this__12533__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45882,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12539__auto__,entry__12540__auto__){
var self__ = this;
var this__12539__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__12540__auto__)){
return cljs.core._assoc(this__12539__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__12540__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__12539__auto____$1,entry__12540__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45886){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45886),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45886),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45886,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__45897 = shadow.dom.dom_node(el);
return goog.style.getSize(G__45897);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__45898 = (i + (1));
var G__45899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45898;
ret = G__45899;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45900){
var vec__45901 = p__45900;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45901,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45905 = arguments.length;
switch (G__45905) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45907_45909 = new_node;
var G__45908_45910 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__45907_45909,G__45908_45910);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__45911_45913 = new_node;
var G__45912_45914 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__45911_45913,G__45912_45914);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45915 = ps;
var G__45916 = (i + (1));
el__$1 = G__45915;
i = G__45916;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__45917 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__45917);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__45918 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__45918);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__45919 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__45919);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45920 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45920,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45923_45933 = cljs.core.seq(props);
var chunk__45924_45934 = null;
var count__45925_45935 = (0);
var i__45926_45936 = (0);
while(true){
if((i__45926_45936 < count__45925_45935)){
var vec__45927_45937 = chunk__45924_45934.cljs$core$IIndexed$_nth$arity$2(null,i__45926_45936);
var k_45938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927_45937,(0),null);
var v_45939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927_45937,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_45938);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45938),v_45939);


var G__45940 = seq__45923_45933;
var G__45941 = chunk__45924_45934;
var G__45942 = count__45925_45935;
var G__45943 = (i__45926_45936 + (1));
seq__45923_45933 = G__45940;
chunk__45924_45934 = G__45941;
count__45925_45935 = G__45942;
i__45926_45936 = G__45943;
continue;
} else {
var temp__5457__auto___45944 = cljs.core.seq(seq__45923_45933);
if(temp__5457__auto___45944){
var seq__45923_45945__$1 = temp__5457__auto___45944;
if(cljs.core.chunked_seq_QMARK_(seq__45923_45945__$1)){
var c__4319__auto___45946 = cljs.core.chunk_first(seq__45923_45945__$1);
var G__45947 = cljs.core.chunk_rest(seq__45923_45945__$1);
var G__45948 = c__4319__auto___45946;
var G__45949 = cljs.core.count(c__4319__auto___45946);
var G__45950 = (0);
seq__45923_45933 = G__45947;
chunk__45924_45934 = G__45948;
count__45925_45935 = G__45949;
i__45926_45936 = G__45950;
continue;
} else {
var vec__45930_45951 = cljs.core.first(seq__45923_45945__$1);
var k_45952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930_45951,(0),null);
var v_45953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930_45951,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_45952);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45952),v_45953);


var G__45954 = cljs.core.next(seq__45923_45945__$1);
var G__45955 = null;
var G__45956 = (0);
var G__45957 = (0);
seq__45923_45933 = G__45954;
chunk__45924_45934 = G__45955;
count__45925_45935 = G__45956;
i__45926_45936 = G__45957;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45959 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45959,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45959,(1),null);
var seq__45962_45980 = cljs.core.seq(node_children);
var chunk__45964_45981 = null;
var count__45965_45982 = (0);
var i__45966_45983 = (0);
while(true){
if((i__45966_45983 < count__45965_45982)){
var child_struct_45984 = chunk__45964_45981.cljs$core$IIndexed$_nth$arity$2(null,i__45966_45983);
if(!((child_struct_45984 == null))){
if(typeof child_struct_45984 === 'string'){
var text_45985 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45985),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_45984)].join(''));
} else {
var children_45986 = shadow.dom.svg_node(child_struct_45984);
if(cljs.core.seq_QMARK_(children_45986)){
var seq__45968_45987 = cljs.core.seq(children_45986);
var chunk__45970_45988 = null;
var count__45971_45989 = (0);
var i__45972_45990 = (0);
while(true){
if((i__45972_45990 < count__45971_45989)){
var child_45991 = chunk__45970_45988.cljs$core$IIndexed$_nth$arity$2(null,i__45972_45990);
if(cljs.core.truth_(child_45991)){
node.appendChild(child_45991);


var G__45992 = seq__45968_45987;
var G__45993 = chunk__45970_45988;
var G__45994 = count__45971_45989;
var G__45995 = (i__45972_45990 + (1));
seq__45968_45987 = G__45992;
chunk__45970_45988 = G__45993;
count__45971_45989 = G__45994;
i__45972_45990 = G__45995;
continue;
} else {
var G__45996 = seq__45968_45987;
var G__45997 = chunk__45970_45988;
var G__45998 = count__45971_45989;
var G__45999 = (i__45972_45990 + (1));
seq__45968_45987 = G__45996;
chunk__45970_45988 = G__45997;
count__45971_45989 = G__45998;
i__45972_45990 = G__45999;
continue;
}
} else {
var temp__5457__auto___46000 = cljs.core.seq(seq__45968_45987);
if(temp__5457__auto___46000){
var seq__45968_46001__$1 = temp__5457__auto___46000;
if(cljs.core.chunked_seq_QMARK_(seq__45968_46001__$1)){
var c__4319__auto___46002 = cljs.core.chunk_first(seq__45968_46001__$1);
var G__46003 = cljs.core.chunk_rest(seq__45968_46001__$1);
var G__46004 = c__4319__auto___46002;
var G__46005 = cljs.core.count(c__4319__auto___46002);
var G__46006 = (0);
seq__45968_45987 = G__46003;
chunk__45970_45988 = G__46004;
count__45971_45989 = G__46005;
i__45972_45990 = G__46006;
continue;
} else {
var child_46007 = cljs.core.first(seq__45968_46001__$1);
if(cljs.core.truth_(child_46007)){
node.appendChild(child_46007);


var G__46008 = cljs.core.next(seq__45968_46001__$1);
var G__46009 = null;
var G__46010 = (0);
var G__46011 = (0);
seq__45968_45987 = G__46008;
chunk__45970_45988 = G__46009;
count__45971_45989 = G__46010;
i__45972_45990 = G__46011;
continue;
} else {
var G__46012 = cljs.core.next(seq__45968_46001__$1);
var G__46013 = null;
var G__46014 = (0);
var G__46015 = (0);
seq__45968_45987 = G__46012;
chunk__45970_45988 = G__46013;
count__45971_45989 = G__46014;
i__45972_45990 = G__46015;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45986);
}
}


var G__46016 = seq__45962_45980;
var G__46017 = chunk__45964_45981;
var G__46018 = count__45965_45982;
var G__46019 = (i__45966_45983 + (1));
seq__45962_45980 = G__46016;
chunk__45964_45981 = G__46017;
count__45965_45982 = G__46018;
i__45966_45983 = G__46019;
continue;
} else {
var G__46020 = seq__45962_45980;
var G__46021 = chunk__45964_45981;
var G__46022 = count__45965_45982;
var G__46023 = (i__45966_45983 + (1));
seq__45962_45980 = G__46020;
chunk__45964_45981 = G__46021;
count__45965_45982 = G__46022;
i__45966_45983 = G__46023;
continue;
}
} else {
var temp__5457__auto___46024 = cljs.core.seq(seq__45962_45980);
if(temp__5457__auto___46024){
var seq__45962_46025__$1 = temp__5457__auto___46024;
if(cljs.core.chunked_seq_QMARK_(seq__45962_46025__$1)){
var c__4319__auto___46026 = cljs.core.chunk_first(seq__45962_46025__$1);
var G__46027 = cljs.core.chunk_rest(seq__45962_46025__$1);
var G__46028 = c__4319__auto___46026;
var G__46029 = cljs.core.count(c__4319__auto___46026);
var G__46030 = (0);
seq__45962_45980 = G__46027;
chunk__45964_45981 = G__46028;
count__45965_45982 = G__46029;
i__45966_45983 = G__46030;
continue;
} else {
var child_struct_46031 = cljs.core.first(seq__45962_46025__$1);
if(!((child_struct_46031 == null))){
if(typeof child_struct_46031 === 'string'){
var text_46032 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_46031)].join(''));
} else {
var children_46033 = shadow.dom.svg_node(child_struct_46031);
if(cljs.core.seq_QMARK_(children_46033)){
var seq__45974_46034 = cljs.core.seq(children_46033);
var chunk__45976_46035 = null;
var count__45977_46036 = (0);
var i__45978_46037 = (0);
while(true){
if((i__45978_46037 < count__45977_46036)){
var child_46038 = chunk__45976_46035.cljs$core$IIndexed$_nth$arity$2(null,i__45978_46037);
if(cljs.core.truth_(child_46038)){
node.appendChild(child_46038);


var G__46039 = seq__45974_46034;
var G__46040 = chunk__45976_46035;
var G__46041 = count__45977_46036;
var G__46042 = (i__45978_46037 + (1));
seq__45974_46034 = G__46039;
chunk__45976_46035 = G__46040;
count__45977_46036 = G__46041;
i__45978_46037 = G__46042;
continue;
} else {
var G__46043 = seq__45974_46034;
var G__46044 = chunk__45976_46035;
var G__46045 = count__45977_46036;
var G__46046 = (i__45978_46037 + (1));
seq__45974_46034 = G__46043;
chunk__45976_46035 = G__46044;
count__45977_46036 = G__46045;
i__45978_46037 = G__46046;
continue;
}
} else {
var temp__5457__auto___46047__$1 = cljs.core.seq(seq__45974_46034);
if(temp__5457__auto___46047__$1){
var seq__45974_46048__$1 = temp__5457__auto___46047__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45974_46048__$1)){
var c__4319__auto___46049 = cljs.core.chunk_first(seq__45974_46048__$1);
var G__46050 = cljs.core.chunk_rest(seq__45974_46048__$1);
var G__46051 = c__4319__auto___46049;
var G__46052 = cljs.core.count(c__4319__auto___46049);
var G__46053 = (0);
seq__45974_46034 = G__46050;
chunk__45976_46035 = G__46051;
count__45977_46036 = G__46052;
i__45978_46037 = G__46053;
continue;
} else {
var child_46054 = cljs.core.first(seq__45974_46048__$1);
if(cljs.core.truth_(child_46054)){
node.appendChild(child_46054);


var G__46057 = cljs.core.next(seq__45974_46048__$1);
var G__46058 = null;
var G__46059 = (0);
var G__46060 = (0);
seq__45974_46034 = G__46057;
chunk__45976_46035 = G__46058;
count__45977_46036 = G__46059;
i__45978_46037 = G__46060;
continue;
} else {
var G__46061 = cljs.core.next(seq__45974_46048__$1);
var G__46062 = null;
var G__46063 = (0);
var G__46064 = (0);
seq__45974_46034 = G__46061;
chunk__45976_46035 = G__46062;
count__45977_46036 = G__46063;
i__45978_46037 = G__46064;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46033);
}
}


var G__46065 = cljs.core.next(seq__45962_46025__$1);
var G__46066 = null;
var G__46067 = (0);
var G__46068 = (0);
seq__45962_45980 = G__46065;
chunk__45964_45981 = G__46066;
count__45965_45982 = G__46067;
i__45966_45983 = G__46068;
continue;
} else {
var G__46069 = cljs.core.next(seq__45962_46025__$1);
var G__46070 = null;
var G__46071 = (0);
var G__46072 = (0);
seq__45962_45980 = G__46069;
chunk__45964_45981 = G__46070;
count__45965_45982 = G__46071;
i__45966_45983 = G__46072;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__46077_46099 = shadow.dom._to_svg;
var G__46078_46100 = "string";
var G__46079_46101 = ((function (G__46077_46099,G__46078_46100){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__46077_46099,G__46078_46100))
;
goog.object.set(G__46077_46099,G__46078_46100,G__46079_46101);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__46096_46105 = shadow.dom._to_svg;
var G__46097_46106 = "null";
var G__46098_46107 = ((function (G__46096_46105,G__46097_46106){
return (function (_){
return null;
});})(G__46096_46105,G__46097_46106))
;
goog.object.set(G__46096_46105,G__46097_46106,G__46098_46107);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___46111 = arguments.length;
var i__4500__auto___46112 = (0);
while(true){
if((i__4500__auto___46112 < len__4499__auto___46111)){
args__4502__auto__.push((arguments[i__4500__auto___46112]));

var G__46114 = (i__4500__auto___46112 + (1));
i__4500__auto___46112 = G__46114;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq46109){
var G__46110 = cljs.core.first(seq46109);
var seq46109__$1 = cljs.core.next(seq46109);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46110,seq46109__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46116 = arguments.length;
switch (G__46116) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__46120_46136 = shadow.dom.dom_node(el);
var G__46121_46137 = cljs.core.name(event);
var G__46122_46138 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46120_46136,G__46121_46137,G__46122_46138) : shadow.dom.dom_listen.call(null,G__46120_46136,G__46121_46137,G__46122_46138));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__33851__auto___46139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33851__auto___46139,buf,chan,event_fn){
return (function (){
var f__33852__auto__ = (function (){var switch__32834__auto__ = ((function (c__33851__auto___46139,buf,chan,event_fn){
return (function (state_46128){
var state_val_46129 = (state_46128[(1)]);
if((state_val_46129 === (1))){
var state_46128__$1 = state_46128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46128__$1,(2),once_or_cleanup);
} else {
if((state_val_46129 === (2))){
var inst_46125 = (state_46128[(2)]);
var inst_46126 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46128__$1 = (function (){var statearr_46130 = state_46128;
(statearr_46130[(7)] = inst_46125);

return statearr_46130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46128__$1,inst_46126);
} else {
return null;
}
}
});})(c__33851__auto___46139,buf,chan,event_fn))
;
return ((function (switch__32834__auto__,c__33851__auto___46139,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__32835__auto__ = null;
var shadow$dom$state_machine__32835__auto____0 = (function (){
var statearr_46131 = [null,null,null,null,null,null,null,null];
(statearr_46131[(0)] = shadow$dom$state_machine__32835__auto__);

(statearr_46131[(1)] = (1));

return statearr_46131;
});
var shadow$dom$state_machine__32835__auto____1 = (function (state_46128){
while(true){
var ret_value__32836__auto__ = (function (){try{while(true){
var result__32837__auto__ = switch__32834__auto__(state_46128);
if(cljs.core.keyword_identical_QMARK_(result__32837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32837__auto__;
}
break;
}
}catch (e46132){if((e46132 instanceof Object)){
var ex__32838__auto__ = e46132;
var statearr_46133_46140 = state_46128;
(statearr_46133_46140[(5)] = ex__32838__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46141 = state_46128;
state_46128 = G__46141;
continue;
} else {
return ret_value__32836__auto__;
}
break;
}
});
shadow$dom$state_machine__32835__auto__ = function(state_46128){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32835__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32835__auto____1.call(this,state_46128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32835__auto____0;
shadow$dom$state_machine__32835__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32835__auto____1;
return shadow$dom$state_machine__32835__auto__;
})()
;})(switch__32834__auto__,c__33851__auto___46139,buf,chan,event_fn))
})();
var state__33853__auto__ = (function (){var statearr_46134 = (f__33852__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33852__auto__.cljs$core$IFn$_invoke$arity$0() : f__33852__auto__.call(null));
(statearr_46134[(6)] = c__33851__auto___46139);

return statearr_46134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33853__auto__);
});})(c__33851__auto___46139,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map

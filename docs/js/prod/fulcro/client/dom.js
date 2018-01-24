// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('fulcro.client.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('fulcro.client.util');
goog.require('goog.object');
/**
 * Updates the state of the wrapped input element.
 */
fulcro.client.dom.update_state = (function fulcro$client$dom$update_state(component,next_props,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__40717_40724 = next_state;
var G__40718_40725 = next_props;
var G__40719_40726 = ({"onChange": on_change});
goog.object.extend(G__40717_40724,G__40718_40725,G__40719_40726);

goog.object.set(next_state,"value",value);

return component.setState(next_state);
});
fulcro.client.dom.wrap_form_element = (function fulcro$client$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__40729_40789 = state;
var G__40730_40790 = props;
var G__40731_40791 = ({"onChange": (function (){var G__40732 = goog.object.get(this$,"onChange");
var G__40733 = this$;
return goog.bind(G__40732,G__40733);
})()});
goog.object.extend(G__40729_40789,G__40730_40790,G__40731_40791);

return state;
})();

return React.Component.apply(this$,arguments);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x40743_40795 = ctor.prototype;
x40743_40795.onChange = ((function (x40743_40795,ctor){
return (function (event){
var this$ = this;
var temp__5457__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5457__auto__)){
var handler = temp__5457__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return fulcro.client.dom.update_state(this$,this$.props,goog.object.getValueByKeys(event,"target","value"));
} else {
return null;
}
});})(x40743_40795,ctor))
;

x40743_40795.componentWillReceiveProps = ((function (x40743_40795,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state","value");
var element_value = (function (){var G__40777 = ReactDOM.findDOMNode(this$);
var G__40778 = "value";
return goog.object.get(G__40777,G__40778);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return fulcro.client.dom.update_state(this$,new_props,element_value);
} else {
return fulcro.client.dom.update_state(this$,new_props,goog.object.get(new_props,"value"));
}
});})(x40743_40795,ctor))
;

x40743_40795.render = ((function (x40743_40795,ctor){
return (function (){
var this$ = this;
var G__40782 = element;
var G__40783 = this$.state;
return React.createElement(G__40782,G__40783);
});})(x40743_40795,ctor))
;


return React.createFactory(ctor);
});
fulcro.client.dom.a = (function fulcro$client$dom$a(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41464 = arguments.length;
var i__12085__auto___41465 = (0);
while(true){
if((i__12085__auto___41465 < len__12084__auto___41464)){
args__12091__auto__.push((arguments[i__12085__auto___41465]));

var G__41466 = (i__12085__auto___41465 + (1));
i__12085__auto___41465 = G__41466;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("a",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.a.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.a.cljs$lang$applyTo = (function (seq40805){
var G__40806 = cljs.core.first(seq40805);
var seq40805__$1 = cljs.core.next(seq40805);
return fulcro.client.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__40806,seq40805__$1);
});


fulcro.client.dom.abbr = (function fulcro$client$dom$abbr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41468 = arguments.length;
var i__12085__auto___41470 = (0);
while(true){
if((i__12085__auto___41470 < len__12084__auto___41468)){
args__12091__auto__.push((arguments[i__12085__auto___41470]));

var G__41471 = (i__12085__auto___41470 + (1));
i__12085__auto___41470 = G__41471;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("abbr",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.abbr.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.abbr.cljs$lang$applyTo = (function (seq40813){
var G__40814 = cljs.core.first(seq40813);
var seq40813__$1 = cljs.core.next(seq40813);
return fulcro.client.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__40814,seq40813__$1);
});


fulcro.client.dom.address = (function fulcro$client$dom$address(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41472 = arguments.length;
var i__12085__auto___41473 = (0);
while(true){
if((i__12085__auto___41473 < len__12084__auto___41472)){
args__12091__auto__.push((arguments[i__12085__auto___41473]));

var G__41474 = (i__12085__auto___41473 + (1));
i__12085__auto___41473 = G__41474;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("address",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.address.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.address.cljs$lang$applyTo = (function (seq40824){
var G__40825 = cljs.core.first(seq40824);
var seq40824__$1 = cljs.core.next(seq40824);
return fulcro.client.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__40825,seq40824__$1);
});


fulcro.client.dom.area = (function fulcro$client$dom$area(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41475 = arguments.length;
var i__12085__auto___41476 = (0);
while(true){
if((i__12085__auto___41476 < len__12084__auto___41475)){
args__12091__auto__.push((arguments[i__12085__auto___41476]));

var G__41477 = (i__12085__auto___41476 + (1));
i__12085__auto___41476 = G__41477;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("area",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.area.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.area.cljs$lang$applyTo = (function (seq40831){
var G__40832 = cljs.core.first(seq40831);
var seq40831__$1 = cljs.core.next(seq40831);
return fulcro.client.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__40832,seq40831__$1);
});


fulcro.client.dom.article = (function fulcro$client$dom$article(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41478 = arguments.length;
var i__12085__auto___41479 = (0);
while(true){
if((i__12085__auto___41479 < len__12084__auto___41478)){
args__12091__auto__.push((arguments[i__12085__auto___41479]));

var G__41480 = (i__12085__auto___41479 + (1));
i__12085__auto___41479 = G__41480;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("article",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.article.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.article.cljs$lang$applyTo = (function (seq40838){
var G__40839 = cljs.core.first(seq40838);
var seq40838__$1 = cljs.core.next(seq40838);
return fulcro.client.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__40839,seq40838__$1);
});


fulcro.client.dom.aside = (function fulcro$client$dom$aside(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41481 = arguments.length;
var i__12085__auto___41482 = (0);
while(true){
if((i__12085__auto___41482 < len__12084__auto___41481)){
args__12091__auto__.push((arguments[i__12085__auto___41482]));

var G__41483 = (i__12085__auto___41482 + (1));
i__12085__auto___41482 = G__41483;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("aside",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.aside.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.aside.cljs$lang$applyTo = (function (seq40846){
var G__40847 = cljs.core.first(seq40846);
var seq40846__$1 = cljs.core.next(seq40846);
return fulcro.client.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__40847,seq40846__$1);
});


fulcro.client.dom.audio = (function fulcro$client$dom$audio(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41484 = arguments.length;
var i__12085__auto___41485 = (0);
while(true){
if((i__12085__auto___41485 < len__12084__auto___41484)){
args__12091__auto__.push((arguments[i__12085__auto___41485]));

var G__41486 = (i__12085__auto___41485 + (1));
i__12085__auto___41485 = G__41486;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("audio",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.audio.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.audio.cljs$lang$applyTo = (function (seq40851){
var G__40852 = cljs.core.first(seq40851);
var seq40851__$1 = cljs.core.next(seq40851);
return fulcro.client.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__40852,seq40851__$1);
});


fulcro.client.dom.b = (function fulcro$client$dom$b(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41487 = arguments.length;
var i__12085__auto___41488 = (0);
while(true){
if((i__12085__auto___41488 < len__12084__auto___41487)){
args__12091__auto__.push((arguments[i__12085__auto___41488]));

var G__41489 = (i__12085__auto___41488 + (1));
i__12085__auto___41488 = G__41489;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("b",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.b.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.b.cljs$lang$applyTo = (function (seq40858){
var G__40860 = cljs.core.first(seq40858);
var seq40858__$1 = cljs.core.next(seq40858);
return fulcro.client.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__40860,seq40858__$1);
});


fulcro.client.dom.base = (function fulcro$client$dom$base(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41492 = arguments.length;
var i__12085__auto___41493 = (0);
while(true){
if((i__12085__auto___41493 < len__12084__auto___41492)){
args__12091__auto__.push((arguments[i__12085__auto___41493]));

var G__41494 = (i__12085__auto___41493 + (1));
i__12085__auto___41493 = G__41494;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("base",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.base.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.base.cljs$lang$applyTo = (function (seq40866){
var G__40867 = cljs.core.first(seq40866);
var seq40866__$1 = cljs.core.next(seq40866);
return fulcro.client.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__40867,seq40866__$1);
});


fulcro.client.dom.bdi = (function fulcro$client$dom$bdi(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41496 = arguments.length;
var i__12085__auto___41497 = (0);
while(true){
if((i__12085__auto___41497 < len__12084__auto___41496)){
args__12091__auto__.push((arguments[i__12085__auto___41497]));

var G__41498 = (i__12085__auto___41497 + (1));
i__12085__auto___41497 = G__41498;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("bdi",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.bdi.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.bdi.cljs$lang$applyTo = (function (seq40872){
var G__40873 = cljs.core.first(seq40872);
var seq40872__$1 = cljs.core.next(seq40872);
return fulcro.client.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__40873,seq40872__$1);
});


fulcro.client.dom.bdo = (function fulcro$client$dom$bdo(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41499 = arguments.length;
var i__12085__auto___41500 = (0);
while(true){
if((i__12085__auto___41500 < len__12084__auto___41499)){
args__12091__auto__.push((arguments[i__12085__auto___41500]));

var G__41501 = (i__12085__auto___41500 + (1));
i__12085__auto___41500 = G__41501;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("bdo",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.bdo.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.bdo.cljs$lang$applyTo = (function (seq40880){
var G__40881 = cljs.core.first(seq40880);
var seq40880__$1 = cljs.core.next(seq40880);
return fulcro.client.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__40881,seq40880__$1);
});


fulcro.client.dom.big = (function fulcro$client$dom$big(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41502 = arguments.length;
var i__12085__auto___41503 = (0);
while(true){
if((i__12085__auto___41503 < len__12084__auto___41502)){
args__12091__auto__.push((arguments[i__12085__auto___41503]));

var G__41505 = (i__12085__auto___41503 + (1));
i__12085__auto___41503 = G__41505;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("big",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.big.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.big.cljs$lang$applyTo = (function (seq40886){
var G__40887 = cljs.core.first(seq40886);
var seq40886__$1 = cljs.core.next(seq40886);
return fulcro.client.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__40887,seq40886__$1);
});


fulcro.client.dom.blockquote = (function fulcro$client$dom$blockquote(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41508 = arguments.length;
var i__12085__auto___41509 = (0);
while(true){
if((i__12085__auto___41509 < len__12084__auto___41508)){
args__12091__auto__.push((arguments[i__12085__auto___41509]));

var G__41510 = (i__12085__auto___41509 + (1));
i__12085__auto___41509 = G__41510;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("blockquote",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.blockquote.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.blockquote.cljs$lang$applyTo = (function (seq40892){
var G__40893 = cljs.core.first(seq40892);
var seq40892__$1 = cljs.core.next(seq40892);
return fulcro.client.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__40893,seq40892__$1);
});


fulcro.client.dom.body = (function fulcro$client$dom$body(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41511 = arguments.length;
var i__12085__auto___41512 = (0);
while(true){
if((i__12085__auto___41512 < len__12084__auto___41511)){
args__12091__auto__.push((arguments[i__12085__auto___41512]));

var G__41513 = (i__12085__auto___41512 + (1));
i__12085__auto___41512 = G__41513;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("body",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.body.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.body.cljs$lang$applyTo = (function (seq40922){
var G__40923 = cljs.core.first(seq40922);
var seq40922__$1 = cljs.core.next(seq40922);
return fulcro.client.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__40923,seq40922__$1);
});


fulcro.client.dom.br = (function fulcro$client$dom$br(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41518 = arguments.length;
var i__12085__auto___41519 = (0);
while(true){
if((i__12085__auto___41519 < len__12084__auto___41518)){
args__12091__auto__.push((arguments[i__12085__auto___41519]));

var G__41520 = (i__12085__auto___41519 + (1));
i__12085__auto___41519 = G__41520;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("br",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.br.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.br.cljs$lang$applyTo = (function (seq40932){
var G__40933 = cljs.core.first(seq40932);
var seq40932__$1 = cljs.core.next(seq40932);
return fulcro.client.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__40933,seq40932__$1);
});


fulcro.client.dom.button = (function fulcro$client$dom$button(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41527 = arguments.length;
var i__12085__auto___41528 = (0);
while(true){
if((i__12085__auto___41528 < len__12084__auto___41527)){
args__12091__auto__.push((arguments[i__12085__auto___41528]));

var G__41529 = (i__12085__auto___41528 + (1));
i__12085__auto___41528 = G__41529;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("button",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.button.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.button.cljs$lang$applyTo = (function (seq40938){
var G__40939 = cljs.core.first(seq40938);
var seq40938__$1 = cljs.core.next(seq40938);
return fulcro.client.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__40939,seq40938__$1);
});


fulcro.client.dom.canvas = (function fulcro$client$dom$canvas(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41534 = arguments.length;
var i__12085__auto___41535 = (0);
while(true){
if((i__12085__auto___41535 < len__12084__auto___41534)){
args__12091__auto__.push((arguments[i__12085__auto___41535]));

var G__41536 = (i__12085__auto___41535 + (1));
i__12085__auto___41535 = G__41536;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("canvas",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.canvas.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.canvas.cljs$lang$applyTo = (function (seq40947){
var G__40948 = cljs.core.first(seq40947);
var seq40947__$1 = cljs.core.next(seq40947);
return fulcro.client.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__40948,seq40947__$1);
});


fulcro.client.dom.caption = (function fulcro$client$dom$caption(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41541 = arguments.length;
var i__12085__auto___41542 = (0);
while(true){
if((i__12085__auto___41542 < len__12084__auto___41541)){
args__12091__auto__.push((arguments[i__12085__auto___41542]));

var G__41543 = (i__12085__auto___41542 + (1));
i__12085__auto___41542 = G__41543;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("caption",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.caption.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.caption.cljs$lang$applyTo = (function (seq40959){
var G__40960 = cljs.core.first(seq40959);
var seq40959__$1 = cljs.core.next(seq40959);
return fulcro.client.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__40960,seq40959__$1);
});


fulcro.client.dom.cite = (function fulcro$client$dom$cite(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41544 = arguments.length;
var i__12085__auto___41545 = (0);
while(true){
if((i__12085__auto___41545 < len__12084__auto___41544)){
args__12091__auto__.push((arguments[i__12085__auto___41545]));

var G__41546 = (i__12085__auto___41545 + (1));
i__12085__auto___41545 = G__41546;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("cite",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.cite.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.cite.cljs$lang$applyTo = (function (seq40962){
var G__40963 = cljs.core.first(seq40962);
var seq40962__$1 = cljs.core.next(seq40962);
return fulcro.client.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__40963,seq40962__$1);
});


fulcro.client.dom.code = (function fulcro$client$dom$code(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41551 = arguments.length;
var i__12085__auto___41552 = (0);
while(true){
if((i__12085__auto___41552 < len__12084__auto___41551)){
args__12091__auto__.push((arguments[i__12085__auto___41552]));

var G__41553 = (i__12085__auto___41552 + (1));
i__12085__auto___41552 = G__41553;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("code",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.code.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.code.cljs$lang$applyTo = (function (seq40970){
var G__40971 = cljs.core.first(seq40970);
var seq40970__$1 = cljs.core.next(seq40970);
return fulcro.client.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__40971,seq40970__$1);
});


fulcro.client.dom.col = (function fulcro$client$dom$col(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41558 = arguments.length;
var i__12085__auto___41559 = (0);
while(true){
if((i__12085__auto___41559 < len__12084__auto___41558)){
args__12091__auto__.push((arguments[i__12085__auto___41559]));

var G__41564 = (i__12085__auto___41559 + (1));
i__12085__auto___41559 = G__41564;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("col",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.col.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.col.cljs$lang$applyTo = (function (seq40975){
var G__40976 = cljs.core.first(seq40975);
var seq40975__$1 = cljs.core.next(seq40975);
return fulcro.client.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__40976,seq40975__$1);
});


fulcro.client.dom.colgroup = (function fulcro$client$dom$colgroup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41567 = arguments.length;
var i__12085__auto___41570 = (0);
while(true){
if((i__12085__auto___41570 < len__12084__auto___41567)){
args__12091__auto__.push((arguments[i__12085__auto___41570]));

var G__41571 = (i__12085__auto___41570 + (1));
i__12085__auto___41570 = G__41571;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("colgroup",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.colgroup.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.colgroup.cljs$lang$applyTo = (function (seq40984){
var G__40985 = cljs.core.first(seq40984);
var seq40984__$1 = cljs.core.next(seq40984);
return fulcro.client.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__40985,seq40984__$1);
});


fulcro.client.dom.data = (function fulcro$client$dom$data(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41582 = arguments.length;
var i__12085__auto___41583 = (0);
while(true){
if((i__12085__auto___41583 < len__12084__auto___41582)){
args__12091__auto__.push((arguments[i__12085__auto___41583]));

var G__41584 = (i__12085__auto___41583 + (1));
i__12085__auto___41583 = G__41584;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("data",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.data.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.data.cljs$lang$applyTo = (function (seq40995){
var G__40996 = cljs.core.first(seq40995);
var seq40995__$1 = cljs.core.next(seq40995);
return fulcro.client.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__40996,seq40995__$1);
});


fulcro.client.dom.datalist = (function fulcro$client$dom$datalist(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41591 = arguments.length;
var i__12085__auto___41596 = (0);
while(true){
if((i__12085__auto___41596 < len__12084__auto___41591)){
args__12091__auto__.push((arguments[i__12085__auto___41596]));

var G__41597 = (i__12085__auto___41596 + (1));
i__12085__auto___41596 = G__41597;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("datalist",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.datalist.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.datalist.cljs$lang$applyTo = (function (seq41002){
var G__41003 = cljs.core.first(seq41002);
var seq41002__$1 = cljs.core.next(seq41002);
return fulcro.client.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__41003,seq41002__$1);
});


fulcro.client.dom.dd = (function fulcro$client$dom$dd(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41598 = arguments.length;
var i__12085__auto___41599 = (0);
while(true){
if((i__12085__auto___41599 < len__12084__auto___41598)){
args__12091__auto__.push((arguments[i__12085__auto___41599]));

var G__41600 = (i__12085__auto___41599 + (1));
i__12085__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("dd",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.dd.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.dd.cljs$lang$applyTo = (function (seq41005){
var G__41006 = cljs.core.first(seq41005);
var seq41005__$1 = cljs.core.next(seq41005);
return fulcro.client.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__41006,seq41005__$1);
});


fulcro.client.dom.del = (function fulcro$client$dom$del(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41601 = arguments.length;
var i__12085__auto___41602 = (0);
while(true){
if((i__12085__auto___41602 < len__12084__auto___41601)){
args__12091__auto__.push((arguments[i__12085__auto___41602]));

var G__41603 = (i__12085__auto___41602 + (1));
i__12085__auto___41602 = G__41603;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("del",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.del.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.del.cljs$lang$applyTo = (function (seq41010){
var G__41011 = cljs.core.first(seq41010);
var seq41010__$1 = cljs.core.next(seq41010);
return fulcro.client.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__41011,seq41010__$1);
});


fulcro.client.dom.details = (function fulcro$client$dom$details(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41608 = arguments.length;
var i__12085__auto___41609 = (0);
while(true){
if((i__12085__auto___41609 < len__12084__auto___41608)){
args__12091__auto__.push((arguments[i__12085__auto___41609]));

var G__41611 = (i__12085__auto___41609 + (1));
i__12085__auto___41609 = G__41611;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("details",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.details.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.details.cljs$lang$applyTo = (function (seq41016){
var G__41017 = cljs.core.first(seq41016);
var seq41016__$1 = cljs.core.next(seq41016);
return fulcro.client.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__41017,seq41016__$1);
});


fulcro.client.dom.dfn = (function fulcro$client$dom$dfn(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41613 = arguments.length;
var i__12085__auto___41614 = (0);
while(true){
if((i__12085__auto___41614 < len__12084__auto___41613)){
args__12091__auto__.push((arguments[i__12085__auto___41614]));

var G__41615 = (i__12085__auto___41614 + (1));
i__12085__auto___41614 = G__41615;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("dfn",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.dfn.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.dfn.cljs$lang$applyTo = (function (seq41022){
var G__41023 = cljs.core.first(seq41022);
var seq41022__$1 = cljs.core.next(seq41022);
return fulcro.client.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__41023,seq41022__$1);
});


fulcro.client.dom.dialog = (function fulcro$client$dom$dialog(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41624 = arguments.length;
var i__12085__auto___41625 = (0);
while(true){
if((i__12085__auto___41625 < len__12084__auto___41624)){
args__12091__auto__.push((arguments[i__12085__auto___41625]));

var G__41626 = (i__12085__auto___41625 + (1));
i__12085__auto___41625 = G__41626;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("dialog",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.dialog.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.dialog.cljs$lang$applyTo = (function (seq41027){
var G__41028 = cljs.core.first(seq41027);
var seq41027__$1 = cljs.core.next(seq41027);
return fulcro.client.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__41028,seq41027__$1);
});


fulcro.client.dom.div = (function fulcro$client$dom$div(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41631 = arguments.length;
var i__12085__auto___41632 = (0);
while(true){
if((i__12085__auto___41632 < len__12084__auto___41631)){
args__12091__auto__.push((arguments[i__12085__auto___41632]));

var G__41633 = (i__12085__auto___41632 + (1));
i__12085__auto___41632 = G__41633;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("div",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.div.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.div.cljs$lang$applyTo = (function (seq41036){
var G__41037 = cljs.core.first(seq41036);
var seq41036__$1 = cljs.core.next(seq41036);
return fulcro.client.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__41037,seq41036__$1);
});


fulcro.client.dom.dl = (function fulcro$client$dom$dl(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41634 = arguments.length;
var i__12085__auto___41635 = (0);
while(true){
if((i__12085__auto___41635 < len__12084__auto___41634)){
args__12091__auto__.push((arguments[i__12085__auto___41635]));

var G__41636 = (i__12085__auto___41635 + (1));
i__12085__auto___41635 = G__41636;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("dl",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.dl.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.dl.cljs$lang$applyTo = (function (seq41039){
var G__41040 = cljs.core.first(seq41039);
var seq41039__$1 = cljs.core.next(seq41039);
return fulcro.client.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__41040,seq41039__$1);
});


fulcro.client.dom.dt = (function fulcro$client$dom$dt(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41637 = arguments.length;
var i__12085__auto___41638 = (0);
while(true){
if((i__12085__auto___41638 < len__12084__auto___41637)){
args__12091__auto__.push((arguments[i__12085__auto___41638]));

var G__41639 = (i__12085__auto___41638 + (1));
i__12085__auto___41638 = G__41639;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("dt",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.dt.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.dt.cljs$lang$applyTo = (function (seq41049){
var G__41051 = cljs.core.first(seq41049);
var seq41049__$1 = cljs.core.next(seq41049);
return fulcro.client.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__41051,seq41049__$1);
});


fulcro.client.dom.em = (function fulcro$client$dom$em(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41648 = arguments.length;
var i__12085__auto___41649 = (0);
while(true){
if((i__12085__auto___41649 < len__12084__auto___41648)){
args__12091__auto__.push((arguments[i__12085__auto___41649]));

var G__41650 = (i__12085__auto___41649 + (1));
i__12085__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("em",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.em.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.em.cljs$lang$applyTo = (function (seq41056){
var G__41057 = cljs.core.first(seq41056);
var seq41056__$1 = cljs.core.next(seq41056);
return fulcro.client.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__41057,seq41056__$1);
});


fulcro.client.dom.embed = (function fulcro$client$dom$embed(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41655 = arguments.length;
var i__12085__auto___41656 = (0);
while(true){
if((i__12085__auto___41656 < len__12084__auto___41655)){
args__12091__auto__.push((arguments[i__12085__auto___41656]));

var G__41657 = (i__12085__auto___41656 + (1));
i__12085__auto___41656 = G__41657;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("embed",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.embed.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.embed.cljs$lang$applyTo = (function (seq41068){
var G__41069 = cljs.core.first(seq41068);
var seq41068__$1 = cljs.core.next(seq41068);
return fulcro.client.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__41069,seq41068__$1);
});


fulcro.client.dom.fieldset = (function fulcro$client$dom$fieldset(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41664 = arguments.length;
var i__12085__auto___41665 = (0);
while(true){
if((i__12085__auto___41665 < len__12084__auto___41664)){
args__12091__auto__.push((arguments[i__12085__auto___41665]));

var G__41666 = (i__12085__auto___41665 + (1));
i__12085__auto___41665 = G__41666;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("fieldset",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.fieldset.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.fieldset.cljs$lang$applyTo = (function (seq41078){
var G__41079 = cljs.core.first(seq41078);
var seq41078__$1 = cljs.core.next(seq41078);
return fulcro.client.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__41079,seq41078__$1);
});


fulcro.client.dom.figcaption = (function fulcro$client$dom$figcaption(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41671 = arguments.length;
var i__12085__auto___41672 = (0);
while(true){
if((i__12085__auto___41672 < len__12084__auto___41671)){
args__12091__auto__.push((arguments[i__12085__auto___41672]));

var G__41677 = (i__12085__auto___41672 + (1));
i__12085__auto___41672 = G__41677;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("figcaption",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.figcaption.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.figcaption.cljs$lang$applyTo = (function (seq41081){
var G__41082 = cljs.core.first(seq41081);
var seq41081__$1 = cljs.core.next(seq41081);
return fulcro.client.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__41082,seq41081__$1);
});


fulcro.client.dom.figure = (function fulcro$client$dom$figure(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41684 = arguments.length;
var i__12085__auto___41685 = (0);
while(true){
if((i__12085__auto___41685 < len__12084__auto___41684)){
args__12091__auto__.push((arguments[i__12085__auto___41685]));

var G__41690 = (i__12085__auto___41685 + (1));
i__12085__auto___41685 = G__41690;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("figure",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.figure.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.figure.cljs$lang$applyTo = (function (seq41085){
var G__41086 = cljs.core.first(seq41085);
var seq41085__$1 = cljs.core.next(seq41085);
return fulcro.client.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__41086,seq41085__$1);
});


fulcro.client.dom.footer = (function fulcro$client$dom$footer(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41691 = arguments.length;
var i__12085__auto___41692 = (0);
while(true){
if((i__12085__auto___41692 < len__12084__auto___41691)){
args__12091__auto__.push((arguments[i__12085__auto___41692]));

var G__41693 = (i__12085__auto___41692 + (1));
i__12085__auto___41692 = G__41693;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("footer",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.footer.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.footer.cljs$lang$applyTo = (function (seq41091){
var G__41092 = cljs.core.first(seq41091);
var seq41091__$1 = cljs.core.next(seq41091);
return fulcro.client.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__41092,seq41091__$1);
});


fulcro.client.dom.form = (function fulcro$client$dom$form(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41694 = arguments.length;
var i__12085__auto___41695 = (0);
while(true){
if((i__12085__auto___41695 < len__12084__auto___41694)){
args__12091__auto__.push((arguments[i__12085__auto___41695]));

var G__41696 = (i__12085__auto___41695 + (1));
i__12085__auto___41695 = G__41696;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("form",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.form.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.form.cljs$lang$applyTo = (function (seq41109){
var G__41110 = cljs.core.first(seq41109);
var seq41109__$1 = cljs.core.next(seq41109);
return fulcro.client.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__41110,seq41109__$1);
});


fulcro.client.dom.h1 = (function fulcro$client$dom$h1(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41697 = arguments.length;
var i__12085__auto___41698 = (0);
while(true){
if((i__12085__auto___41698 < len__12084__auto___41697)){
args__12091__auto__.push((arguments[i__12085__auto___41698]));

var G__41699 = (i__12085__auto___41698 + (1));
i__12085__auto___41698 = G__41699;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h1",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h1.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h1.cljs$lang$applyTo = (function (seq41117){
var G__41118 = cljs.core.first(seq41117);
var seq41117__$1 = cljs.core.next(seq41117);
return fulcro.client.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__41118,seq41117__$1);
});


fulcro.client.dom.h2 = (function fulcro$client$dom$h2(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41700 = arguments.length;
var i__12085__auto___41701 = (0);
while(true){
if((i__12085__auto___41701 < len__12084__auto___41700)){
args__12091__auto__.push((arguments[i__12085__auto___41701]));

var G__41702 = (i__12085__auto___41701 + (1));
i__12085__auto___41701 = G__41702;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h2",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h2.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h2.cljs$lang$applyTo = (function (seq41123){
var G__41124 = cljs.core.first(seq41123);
var seq41123__$1 = cljs.core.next(seq41123);
return fulcro.client.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__41124,seq41123__$1);
});


fulcro.client.dom.h3 = (function fulcro$client$dom$h3(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41703 = arguments.length;
var i__12085__auto___41704 = (0);
while(true){
if((i__12085__auto___41704 < len__12084__auto___41703)){
args__12091__auto__.push((arguments[i__12085__auto___41704]));

var G__41705 = (i__12085__auto___41704 + (1));
i__12085__auto___41704 = G__41705;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h3",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h3.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h3.cljs$lang$applyTo = (function (seq41125){
var G__41126 = cljs.core.first(seq41125);
var seq41125__$1 = cljs.core.next(seq41125);
return fulcro.client.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__41126,seq41125__$1);
});


fulcro.client.dom.h4 = (function fulcro$client$dom$h4(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41706 = arguments.length;
var i__12085__auto___41707 = (0);
while(true){
if((i__12085__auto___41707 < len__12084__auto___41706)){
args__12091__auto__.push((arguments[i__12085__auto___41707]));

var G__41708 = (i__12085__auto___41707 + (1));
i__12085__auto___41707 = G__41708;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h4",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h4.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h4.cljs$lang$applyTo = (function (seq41128){
var G__41129 = cljs.core.first(seq41128);
var seq41128__$1 = cljs.core.next(seq41128);
return fulcro.client.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__41129,seq41128__$1);
});


fulcro.client.dom.h5 = (function fulcro$client$dom$h5(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41709 = arguments.length;
var i__12085__auto___41710 = (0);
while(true){
if((i__12085__auto___41710 < len__12084__auto___41709)){
args__12091__auto__.push((arguments[i__12085__auto___41710]));

var G__41711 = (i__12085__auto___41710 + (1));
i__12085__auto___41710 = G__41711;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h5",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h5.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h5.cljs$lang$applyTo = (function (seq41139){
var G__41140 = cljs.core.first(seq41139);
var seq41139__$1 = cljs.core.next(seq41139);
return fulcro.client.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__41140,seq41139__$1);
});


fulcro.client.dom.h6 = (function fulcro$client$dom$h6(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41712 = arguments.length;
var i__12085__auto___41713 = (0);
while(true){
if((i__12085__auto___41713 < len__12084__auto___41712)){
args__12091__auto__.push((arguments[i__12085__auto___41713]));

var G__41714 = (i__12085__auto___41713 + (1));
i__12085__auto___41713 = G__41714;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("h6",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.h6.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.h6.cljs$lang$applyTo = (function (seq41142){
var G__41143 = cljs.core.first(seq41142);
var seq41142__$1 = cljs.core.next(seq41142);
return fulcro.client.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__41143,seq41142__$1);
});


fulcro.client.dom.head = (function fulcro$client$dom$head(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41715 = arguments.length;
var i__12085__auto___41716 = (0);
while(true){
if((i__12085__auto___41716 < len__12084__auto___41715)){
args__12091__auto__.push((arguments[i__12085__auto___41716]));

var G__41717 = (i__12085__auto___41716 + (1));
i__12085__auto___41716 = G__41717;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("head",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.head.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.head.cljs$lang$applyTo = (function (seq41148){
var G__41149 = cljs.core.first(seq41148);
var seq41148__$1 = cljs.core.next(seq41148);
return fulcro.client.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__41149,seq41148__$1);
});


fulcro.client.dom.header = (function fulcro$client$dom$header(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41718 = arguments.length;
var i__12085__auto___41720 = (0);
while(true){
if((i__12085__auto___41720 < len__12084__auto___41718)){
args__12091__auto__.push((arguments[i__12085__auto___41720]));

var G__41721 = (i__12085__auto___41720 + (1));
i__12085__auto___41720 = G__41721;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("header",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.header.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.header.cljs$lang$applyTo = (function (seq41150){
var G__41151 = cljs.core.first(seq41150);
var seq41150__$1 = cljs.core.next(seq41150);
return fulcro.client.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__41151,seq41150__$1);
});


fulcro.client.dom.hr = (function fulcro$client$dom$hr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41726 = arguments.length;
var i__12085__auto___41727 = (0);
while(true){
if((i__12085__auto___41727 < len__12084__auto___41726)){
args__12091__auto__.push((arguments[i__12085__auto___41727]));

var G__41728 = (i__12085__auto___41727 + (1));
i__12085__auto___41727 = G__41728;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("hr",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.hr.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.hr.cljs$lang$applyTo = (function (seq41152){
var G__41153 = cljs.core.first(seq41152);
var seq41152__$1 = cljs.core.next(seq41152);
return fulcro.client.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__41153,seq41152__$1);
});


fulcro.client.dom.html = (function fulcro$client$dom$html(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41729 = arguments.length;
var i__12085__auto___41732 = (0);
while(true){
if((i__12085__auto___41732 < len__12084__auto___41729)){
args__12091__auto__.push((arguments[i__12085__auto___41732]));

var G__41736 = (i__12085__auto___41732 + (1));
i__12085__auto___41732 = G__41736;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("html",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.html.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.html.cljs$lang$applyTo = (function (seq41161){
var G__41162 = cljs.core.first(seq41161);
var seq41161__$1 = cljs.core.next(seq41161);
return fulcro.client.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__41162,seq41161__$1);
});


fulcro.client.dom.i = (function fulcro$client$dom$i(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41740 = arguments.length;
var i__12085__auto___41741 = (0);
while(true){
if((i__12085__auto___41741 < len__12084__auto___41740)){
args__12091__auto__.push((arguments[i__12085__auto___41741]));

var G__41743 = (i__12085__auto___41741 + (1));
i__12085__auto___41741 = G__41743;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("i",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.i.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.i.cljs$lang$applyTo = (function (seq41167){
var G__41168 = cljs.core.first(seq41167);
var seq41167__$1 = cljs.core.next(seq41167);
return fulcro.client.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__41168,seq41167__$1);
});


fulcro.client.dom.iframe = (function fulcro$client$dom$iframe(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41744 = arguments.length;
var i__12085__auto___41745 = (0);
while(true){
if((i__12085__auto___41745 < len__12084__auto___41744)){
args__12091__auto__.push((arguments[i__12085__auto___41745]));

var G__41746 = (i__12085__auto___41745 + (1));
i__12085__auto___41745 = G__41746;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("iframe",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.iframe.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.iframe.cljs$lang$applyTo = (function (seq41178){
var G__41179 = cljs.core.first(seq41178);
var seq41178__$1 = cljs.core.next(seq41178);
return fulcro.client.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__41179,seq41178__$1);
});


fulcro.client.dom.img = (function fulcro$client$dom$img(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41749 = arguments.length;
var i__12085__auto___41750 = (0);
while(true){
if((i__12085__auto___41750 < len__12084__auto___41749)){
args__12091__auto__.push((arguments[i__12085__auto___41750]));

var G__41751 = (i__12085__auto___41750 + (1));
i__12085__auto___41750 = G__41751;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("img",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.img.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.img.cljs$lang$applyTo = (function (seq41183){
var G__41184 = cljs.core.first(seq41183);
var seq41183__$1 = cljs.core.next(seq41183);
return fulcro.client.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__41184,seq41183__$1);
});


fulcro.client.dom.ins = (function fulcro$client$dom$ins(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41752 = arguments.length;
var i__12085__auto___41754 = (0);
while(true){
if((i__12085__auto___41754 < len__12084__auto___41752)){
args__12091__auto__.push((arguments[i__12085__auto___41754]));

var G__41755 = (i__12085__auto___41754 + (1));
i__12085__auto___41754 = G__41755;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("ins",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.ins.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.ins.cljs$lang$applyTo = (function (seq41186){
var G__41187 = cljs.core.first(seq41186);
var seq41186__$1 = cljs.core.next(seq41186);
return fulcro.client.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__41187,seq41186__$1);
});


fulcro.client.dom.kbd = (function fulcro$client$dom$kbd(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41756 = arguments.length;
var i__12085__auto___41757 = (0);
while(true){
if((i__12085__auto___41757 < len__12084__auto___41756)){
args__12091__auto__.push((arguments[i__12085__auto___41757]));

var G__41758 = (i__12085__auto___41757 + (1));
i__12085__auto___41757 = G__41758;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("kbd",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.kbd.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.kbd.cljs$lang$applyTo = (function (seq41190){
var G__41191 = cljs.core.first(seq41190);
var seq41190__$1 = cljs.core.next(seq41190);
return fulcro.client.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__41191,seq41190__$1);
});


fulcro.client.dom.keygen = (function fulcro$client$dom$keygen(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41759 = arguments.length;
var i__12085__auto___41761 = (0);
while(true){
if((i__12085__auto___41761 < len__12084__auto___41759)){
args__12091__auto__.push((arguments[i__12085__auto___41761]));

var G__41762 = (i__12085__auto___41761 + (1));
i__12085__auto___41761 = G__41762;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("keygen",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.keygen.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.keygen.cljs$lang$applyTo = (function (seq41193){
var G__41194 = cljs.core.first(seq41193);
var seq41193__$1 = cljs.core.next(seq41193);
return fulcro.client.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__41194,seq41193__$1);
});


fulcro.client.dom.label = (function fulcro$client$dom$label(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41767 = arguments.length;
var i__12085__auto___41768 = (0);
while(true){
if((i__12085__auto___41768 < len__12084__auto___41767)){
args__12091__auto__.push((arguments[i__12085__auto___41768]));

var G__41769 = (i__12085__auto___41768 + (1));
i__12085__auto___41768 = G__41769;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("label",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.label.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.label.cljs$lang$applyTo = (function (seq41199){
var G__41200 = cljs.core.first(seq41199);
var seq41199__$1 = cljs.core.next(seq41199);
return fulcro.client.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__41200,seq41199__$1);
});


fulcro.client.dom.legend = (function fulcro$client$dom$legend(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41770 = arguments.length;
var i__12085__auto___41771 = (0);
while(true){
if((i__12085__auto___41771 < len__12084__auto___41770)){
args__12091__auto__.push((arguments[i__12085__auto___41771]));

var G__41772 = (i__12085__auto___41771 + (1));
i__12085__auto___41771 = G__41772;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("legend",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.legend.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.legend.cljs$lang$applyTo = (function (seq41204){
var G__41205 = cljs.core.first(seq41204);
var seq41204__$1 = cljs.core.next(seq41204);
return fulcro.client.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__41205,seq41204__$1);
});


fulcro.client.dom.li = (function fulcro$client$dom$li(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41773 = arguments.length;
var i__12085__auto___41774 = (0);
while(true){
if((i__12085__auto___41774 < len__12084__auto___41773)){
args__12091__auto__.push((arguments[i__12085__auto___41774]));

var G__41775 = (i__12085__auto___41774 + (1));
i__12085__auto___41774 = G__41775;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("li",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.li.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.li.cljs$lang$applyTo = (function (seq41210){
var G__41211 = cljs.core.first(seq41210);
var seq41210__$1 = cljs.core.next(seq41210);
return fulcro.client.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__41211,seq41210__$1);
});


fulcro.client.dom.link = (function fulcro$client$dom$link(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41776 = arguments.length;
var i__12085__auto___41777 = (0);
while(true){
if((i__12085__auto___41777 < len__12084__auto___41776)){
args__12091__auto__.push((arguments[i__12085__auto___41777]));

var G__41780 = (i__12085__auto___41777 + (1));
i__12085__auto___41777 = G__41780;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("link",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.link.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.link.cljs$lang$applyTo = (function (seq41217){
var G__41218 = cljs.core.first(seq41217);
var seq41217__$1 = cljs.core.next(seq41217);
return fulcro.client.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__41218,seq41217__$1);
});


fulcro.client.dom.main = (function fulcro$client$dom$main(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41787 = arguments.length;
var i__12085__auto___41788 = (0);
while(true){
if((i__12085__auto___41788 < len__12084__auto___41787)){
args__12091__auto__.push((arguments[i__12085__auto___41788]));

var G__41789 = (i__12085__auto___41788 + (1));
i__12085__auto___41788 = G__41789;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("main",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.main.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.main.cljs$lang$applyTo = (function (seq41245){
var G__41246 = cljs.core.first(seq41245);
var seq41245__$1 = cljs.core.next(seq41245);
return fulcro.client.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__41246,seq41245__$1);
});


fulcro.client.dom.map = (function fulcro$client$dom$map(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41792 = arguments.length;
var i__12085__auto___41793 = (0);
while(true){
if((i__12085__auto___41793 < len__12084__auto___41792)){
args__12091__auto__.push((arguments[i__12085__auto___41793]));

var G__41798 = (i__12085__auto___41793 + (1));
i__12085__auto___41793 = G__41798;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("map",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.map.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.map.cljs$lang$applyTo = (function (seq41252){
var G__41253 = cljs.core.first(seq41252);
var seq41252__$1 = cljs.core.next(seq41252);
return fulcro.client.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__41253,seq41252__$1);
});


fulcro.client.dom.mark = (function fulcro$client$dom$mark(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41799 = arguments.length;
var i__12085__auto___41801 = (0);
while(true){
if((i__12085__auto___41801 < len__12084__auto___41799)){
args__12091__auto__.push((arguments[i__12085__auto___41801]));

var G__41802 = (i__12085__auto___41801 + (1));
i__12085__auto___41801 = G__41802;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("mark",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.mark.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.mark.cljs$lang$applyTo = (function (seq41262){
var G__41263 = cljs.core.first(seq41262);
var seq41262__$1 = cljs.core.next(seq41262);
return fulcro.client.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__41263,seq41262__$1);
});


fulcro.client.dom.menu = (function fulcro$client$dom$menu(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41805 = arguments.length;
var i__12085__auto___41806 = (0);
while(true){
if((i__12085__auto___41806 < len__12084__auto___41805)){
args__12091__auto__.push((arguments[i__12085__auto___41806]));

var G__41811 = (i__12085__auto___41806 + (1));
i__12085__auto___41806 = G__41811;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("menu",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.menu.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.menu.cljs$lang$applyTo = (function (seq41268){
var G__41269 = cljs.core.first(seq41268);
var seq41268__$1 = cljs.core.next(seq41268);
return fulcro.client.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__41269,seq41268__$1);
});


fulcro.client.dom.menuitem = (function fulcro$client$dom$menuitem(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41812 = arguments.length;
var i__12085__auto___41813 = (0);
while(true){
if((i__12085__auto___41813 < len__12084__auto___41812)){
args__12091__auto__.push((arguments[i__12085__auto___41813]));

var G__41814 = (i__12085__auto___41813 + (1));
i__12085__auto___41813 = G__41814;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("menuitem",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.menuitem.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.menuitem.cljs$lang$applyTo = (function (seq41271){
var G__41272 = cljs.core.first(seq41271);
var seq41271__$1 = cljs.core.next(seq41271);
return fulcro.client.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__41272,seq41271__$1);
});


fulcro.client.dom.meta = (function fulcro$client$dom$meta(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41824 = arguments.length;
var i__12085__auto___41825 = (0);
while(true){
if((i__12085__auto___41825 < len__12084__auto___41824)){
args__12091__auto__.push((arguments[i__12085__auto___41825]));

var G__41826 = (i__12085__auto___41825 + (1));
i__12085__auto___41825 = G__41826;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("meta",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.meta.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.meta.cljs$lang$applyTo = (function (seq41273){
var G__41274 = cljs.core.first(seq41273);
var seq41273__$1 = cljs.core.next(seq41273);
return fulcro.client.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__41274,seq41273__$1);
});


fulcro.client.dom.meter = (function fulcro$client$dom$meter(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41827 = arguments.length;
var i__12085__auto___41828 = (0);
while(true){
if((i__12085__auto___41828 < len__12084__auto___41827)){
args__12091__auto__.push((arguments[i__12085__auto___41828]));

var G__41829 = (i__12085__auto___41828 + (1));
i__12085__auto___41828 = G__41829;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("meter",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.meter.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.meter.cljs$lang$applyTo = (function (seq41277){
var G__41279 = cljs.core.first(seq41277);
var seq41277__$1 = cljs.core.next(seq41277);
return fulcro.client.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__41279,seq41277__$1);
});


fulcro.client.dom.nav = (function fulcro$client$dom$nav(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41830 = arguments.length;
var i__12085__auto___41831 = (0);
while(true){
if((i__12085__auto___41831 < len__12084__auto___41830)){
args__12091__auto__.push((arguments[i__12085__auto___41831]));

var G__41832 = (i__12085__auto___41831 + (1));
i__12085__auto___41831 = G__41832;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("nav",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.nav.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.nav.cljs$lang$applyTo = (function (seq41284){
var G__41285 = cljs.core.first(seq41284);
var seq41284__$1 = cljs.core.next(seq41284);
return fulcro.client.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__41285,seq41284__$1);
});


fulcro.client.dom.noscript = (function fulcro$client$dom$noscript(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41838 = arguments.length;
var i__12085__auto___41839 = (0);
while(true){
if((i__12085__auto___41839 < len__12084__auto___41838)){
args__12091__auto__.push((arguments[i__12085__auto___41839]));

var G__41844 = (i__12085__auto___41839 + (1));
i__12085__auto___41839 = G__41844;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("noscript",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.noscript.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.noscript.cljs$lang$applyTo = (function (seq41293){
var G__41294 = cljs.core.first(seq41293);
var seq41293__$1 = cljs.core.next(seq41293);
return fulcro.client.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__41294,seq41293__$1);
});


fulcro.client.dom.object = (function fulcro$client$dom$object(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41861 = arguments.length;
var i__12085__auto___41862 = (0);
while(true){
if((i__12085__auto___41862 < len__12084__auto___41861)){
args__12091__auto__.push((arguments[i__12085__auto___41862]));

var G__41863 = (i__12085__auto___41862 + (1));
i__12085__auto___41862 = G__41863;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("object",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.object.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.object.cljs$lang$applyTo = (function (seq41298){
var G__41299 = cljs.core.first(seq41298);
var seq41298__$1 = cljs.core.next(seq41298);
return fulcro.client.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__41299,seq41298__$1);
});


fulcro.client.dom.ol = (function fulcro$client$dom$ol(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41877 = arguments.length;
var i__12085__auto___41878 = (0);
while(true){
if((i__12085__auto___41878 < len__12084__auto___41877)){
args__12091__auto__.push((arguments[i__12085__auto___41878]));

var G__41879 = (i__12085__auto___41878 + (1));
i__12085__auto___41878 = G__41879;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("ol",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.ol.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.ol.cljs$lang$applyTo = (function (seq41304){
var G__41305 = cljs.core.first(seq41304);
var seq41304__$1 = cljs.core.next(seq41304);
return fulcro.client.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__41305,seq41304__$1);
});


fulcro.client.dom.optgroup = (function fulcro$client$dom$optgroup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41880 = arguments.length;
var i__12085__auto___41881 = (0);
while(true){
if((i__12085__auto___41881 < len__12084__auto___41880)){
args__12091__auto__.push((arguments[i__12085__auto___41881]));

var G__41882 = (i__12085__auto___41881 + (1));
i__12085__auto___41881 = G__41882;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("optgroup",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.optgroup.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.optgroup.cljs$lang$applyTo = (function (seq41312){
var G__41313 = cljs.core.first(seq41312);
var seq41312__$1 = cljs.core.next(seq41312);
return fulcro.client.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__41313,seq41312__$1);
});


fulcro.client.dom.output = (function fulcro$client$dom$output(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41883 = arguments.length;
var i__12085__auto___41884 = (0);
while(true){
if((i__12085__auto___41884 < len__12084__auto___41883)){
args__12091__auto__.push((arguments[i__12085__auto___41884]));

var G__41885 = (i__12085__auto___41884 + (1));
i__12085__auto___41884 = G__41885;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("output",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.output.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.output.cljs$lang$applyTo = (function (seq41314){
var G__41315 = cljs.core.first(seq41314);
var seq41314__$1 = cljs.core.next(seq41314);
return fulcro.client.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__41315,seq41314__$1);
});


fulcro.client.dom.p = (function fulcro$client$dom$p(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41895 = arguments.length;
var i__12085__auto___41896 = (0);
while(true){
if((i__12085__auto___41896 < len__12084__auto___41895)){
args__12091__auto__.push((arguments[i__12085__auto___41896]));

var G__41898 = (i__12085__auto___41896 + (1));
i__12085__auto___41896 = G__41898;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("p",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.p.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.p.cljs$lang$applyTo = (function (seq41317){
var G__41318 = cljs.core.first(seq41317);
var seq41317__$1 = cljs.core.next(seq41317);
return fulcro.client.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__41318,seq41317__$1);
});


fulcro.client.dom.param = (function fulcro$client$dom$param(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41914 = arguments.length;
var i__12085__auto___41915 = (0);
while(true){
if((i__12085__auto___41915 < len__12084__auto___41914)){
args__12091__auto__.push((arguments[i__12085__auto___41915]));

var G__41916 = (i__12085__auto___41915 + (1));
i__12085__auto___41915 = G__41916;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("param",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.param.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.param.cljs$lang$applyTo = (function (seq41319){
var G__41320 = cljs.core.first(seq41319);
var seq41319__$1 = cljs.core.next(seq41319);
return fulcro.client.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__41320,seq41319__$1);
});


fulcro.client.dom.picture = (function fulcro$client$dom$picture(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41926 = arguments.length;
var i__12085__auto___41927 = (0);
while(true){
if((i__12085__auto___41927 < len__12084__auto___41926)){
args__12091__auto__.push((arguments[i__12085__auto___41927]));

var G__41932 = (i__12085__auto___41927 + (1));
i__12085__auto___41927 = G__41932;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("picture",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.picture.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.picture.cljs$lang$applyTo = (function (seq41321){
var G__41322 = cljs.core.first(seq41321);
var seq41321__$1 = cljs.core.next(seq41321);
return fulcro.client.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__41322,seq41321__$1);
});


fulcro.client.dom.pre = (function fulcro$client$dom$pre(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41935 = arguments.length;
var i__12085__auto___41936 = (0);
while(true){
if((i__12085__auto___41936 < len__12084__auto___41935)){
args__12091__auto__.push((arguments[i__12085__auto___41936]));

var G__41938 = (i__12085__auto___41936 + (1));
i__12085__auto___41936 = G__41938;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("pre",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.pre.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.pre.cljs$lang$applyTo = (function (seq41323){
var G__41324 = cljs.core.first(seq41323);
var seq41323__$1 = cljs.core.next(seq41323);
return fulcro.client.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__41324,seq41323__$1);
});


fulcro.client.dom.progress = (function fulcro$client$dom$progress(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41940 = arguments.length;
var i__12085__auto___41941 = (0);
while(true){
if((i__12085__auto___41941 < len__12084__auto___41940)){
args__12091__auto__.push((arguments[i__12085__auto___41941]));

var G__41942 = (i__12085__auto___41941 + (1));
i__12085__auto___41941 = G__41942;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("progress",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.progress.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.progress.cljs$lang$applyTo = (function (seq41325){
var G__41326 = cljs.core.first(seq41325);
var seq41325__$1 = cljs.core.next(seq41325);
return fulcro.client.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__41326,seq41325__$1);
});


fulcro.client.dom.q = (function fulcro$client$dom$q(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41949 = arguments.length;
var i__12085__auto___41950 = (0);
while(true){
if((i__12085__auto___41950 < len__12084__auto___41949)){
args__12091__auto__.push((arguments[i__12085__auto___41950]));

var G__41953 = (i__12085__auto___41950 + (1));
i__12085__auto___41950 = G__41953;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("q",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.q.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.q.cljs$lang$applyTo = (function (seq41327){
var G__41328 = cljs.core.first(seq41327);
var seq41327__$1 = cljs.core.next(seq41327);
return fulcro.client.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__41328,seq41327__$1);
});


fulcro.client.dom.rp = (function fulcro$client$dom$rp(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41954 = arguments.length;
var i__12085__auto___41955 = (0);
while(true){
if((i__12085__auto___41955 < len__12084__auto___41954)){
args__12091__auto__.push((arguments[i__12085__auto___41955]));

var G__41956 = (i__12085__auto___41955 + (1));
i__12085__auto___41955 = G__41956;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("rp",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.rp.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.rp.cljs$lang$applyTo = (function (seq41329){
var G__41330 = cljs.core.first(seq41329);
var seq41329__$1 = cljs.core.next(seq41329);
return fulcro.client.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__41330,seq41329__$1);
});


fulcro.client.dom.rt = (function fulcro$client$dom$rt(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41963 = arguments.length;
var i__12085__auto___41965 = (0);
while(true){
if((i__12085__auto___41965 < len__12084__auto___41963)){
args__12091__auto__.push((arguments[i__12085__auto___41965]));

var G__41966 = (i__12085__auto___41965 + (1));
i__12085__auto___41965 = G__41966;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("rt",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.rt.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.rt.cljs$lang$applyTo = (function (seq41332){
var G__41333 = cljs.core.first(seq41332);
var seq41332__$1 = cljs.core.next(seq41332);
return fulcro.client.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__41333,seq41332__$1);
});


fulcro.client.dom.ruby = (function fulcro$client$dom$ruby(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41976 = arguments.length;
var i__12085__auto___41977 = (0);
while(true){
if((i__12085__auto___41977 < len__12084__auto___41976)){
args__12091__auto__.push((arguments[i__12085__auto___41977]));

var G__41978 = (i__12085__auto___41977 + (1));
i__12085__auto___41977 = G__41978;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("ruby",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.ruby.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.ruby.cljs$lang$applyTo = (function (seq41334){
var G__41335 = cljs.core.first(seq41334);
var seq41334__$1 = cljs.core.next(seq41334);
return fulcro.client.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__41335,seq41334__$1);
});


fulcro.client.dom.s = (function fulcro$client$dom$s(var_args){
var args__12091__auto__ = [];
var len__12084__auto___41979 = arguments.length;
var i__12085__auto___41980 = (0);
while(true){
if((i__12085__auto___41980 < len__12084__auto___41979)){
args__12091__auto__.push((arguments[i__12085__auto___41980]));

var G__41981 = (i__12085__auto___41980 + (1));
i__12085__auto___41980 = G__41981;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("s",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.s.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.s.cljs$lang$applyTo = (function (seq41336){
var G__41337 = cljs.core.first(seq41336);
var seq41336__$1 = cljs.core.next(seq41336);
return fulcro.client.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__41337,seq41336__$1);
});


fulcro.client.dom.samp = (function fulcro$client$dom$samp(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42000 = arguments.length;
var i__12085__auto___42001 = (0);
while(true){
if((i__12085__auto___42001 < len__12084__auto___42000)){
args__12091__auto__.push((arguments[i__12085__auto___42001]));

var G__42002 = (i__12085__auto___42001 + (1));
i__12085__auto___42001 = G__42002;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("samp",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.samp.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.samp.cljs$lang$applyTo = (function (seq41338){
var G__41339 = cljs.core.first(seq41338);
var seq41338__$1 = cljs.core.next(seq41338);
return fulcro.client.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__41339,seq41338__$1);
});


fulcro.client.dom.script = (function fulcro$client$dom$script(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42005 = arguments.length;
var i__12085__auto___42006 = (0);
while(true){
if((i__12085__auto___42006 < len__12084__auto___42005)){
args__12091__auto__.push((arguments[i__12085__auto___42006]));

var G__42007 = (i__12085__auto___42006 + (1));
i__12085__auto___42006 = G__42007;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("script",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.script.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.script.cljs$lang$applyTo = (function (seq41344){
var G__41345 = cljs.core.first(seq41344);
var seq41344__$1 = cljs.core.next(seq41344);
return fulcro.client.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__41345,seq41344__$1);
});


fulcro.client.dom.section = (function fulcro$client$dom$section(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42013 = arguments.length;
var i__12085__auto___42015 = (0);
while(true){
if((i__12085__auto___42015 < len__12084__auto___42013)){
args__12091__auto__.push((arguments[i__12085__auto___42015]));

var G__42020 = (i__12085__auto___42015 + (1));
i__12085__auto___42015 = G__42020;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("section",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.section.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.section.cljs$lang$applyTo = (function (seq41348){
var G__41349 = cljs.core.first(seq41348);
var seq41348__$1 = cljs.core.next(seq41348);
return fulcro.client.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__41349,seq41348__$1);
});


fulcro.client.dom.small = (function fulcro$client$dom$small(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42032 = arguments.length;
var i__12085__auto___42033 = (0);
while(true){
if((i__12085__auto___42033 < len__12084__auto___42032)){
args__12091__auto__.push((arguments[i__12085__auto___42033]));

var G__42034 = (i__12085__auto___42033 + (1));
i__12085__auto___42033 = G__42034;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("small",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.small.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.small.cljs$lang$applyTo = (function (seq41350){
var G__41351 = cljs.core.first(seq41350);
var seq41350__$1 = cljs.core.next(seq41350);
return fulcro.client.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__41351,seq41350__$1);
});


fulcro.client.dom.source = (function fulcro$client$dom$source(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42044 = arguments.length;
var i__12085__auto___42045 = (0);
while(true){
if((i__12085__auto___42045 < len__12084__auto___42044)){
args__12091__auto__.push((arguments[i__12085__auto___42045]));

var G__42046 = (i__12085__auto___42045 + (1));
i__12085__auto___42045 = G__42046;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("source",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.source.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.source.cljs$lang$applyTo = (function (seq41352){
var G__41353 = cljs.core.first(seq41352);
var seq41352__$1 = cljs.core.next(seq41352);
return fulcro.client.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__41353,seq41352__$1);
});


fulcro.client.dom.span = (function fulcro$client$dom$span(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42047 = arguments.length;
var i__12085__auto___42048 = (0);
while(true){
if((i__12085__auto___42048 < len__12084__auto___42047)){
args__12091__auto__.push((arguments[i__12085__auto___42048]));

var G__42053 = (i__12085__auto___42048 + (1));
i__12085__auto___42048 = G__42053;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("span",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.span.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.span.cljs$lang$applyTo = (function (seq41354){
var G__41355 = cljs.core.first(seq41354);
var seq41354__$1 = cljs.core.next(seq41354);
return fulcro.client.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__41355,seq41354__$1);
});


fulcro.client.dom.strong = (function fulcro$client$dom$strong(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42068 = arguments.length;
var i__12085__auto___42069 = (0);
while(true){
if((i__12085__auto___42069 < len__12084__auto___42068)){
args__12091__auto__.push((arguments[i__12085__auto___42069]));

var G__42070 = (i__12085__auto___42069 + (1));
i__12085__auto___42069 = G__42070;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("strong",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.strong.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.strong.cljs$lang$applyTo = (function (seq41357){
var G__41358 = cljs.core.first(seq41357);
var seq41357__$1 = cljs.core.next(seq41357);
return fulcro.client.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__41358,seq41357__$1);
});


fulcro.client.dom.style = (function fulcro$client$dom$style(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42073 = arguments.length;
var i__12085__auto___42074 = (0);
while(true){
if((i__12085__auto___42074 < len__12084__auto___42073)){
args__12091__auto__.push((arguments[i__12085__auto___42074]));

var G__42075 = (i__12085__auto___42074 + (1));
i__12085__auto___42074 = G__42075;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("style",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.style.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.style.cljs$lang$applyTo = (function (seq41359){
var G__41360 = cljs.core.first(seq41359);
var seq41359__$1 = cljs.core.next(seq41359);
return fulcro.client.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__41360,seq41359__$1);
});


fulcro.client.dom.sub = (function fulcro$client$dom$sub(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42082 = arguments.length;
var i__12085__auto___42083 = (0);
while(true){
if((i__12085__auto___42083 < len__12084__auto___42082)){
args__12091__auto__.push((arguments[i__12085__auto___42083]));

var G__42088 = (i__12085__auto___42083 + (1));
i__12085__auto___42083 = G__42088;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("sub",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.sub.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.sub.cljs$lang$applyTo = (function (seq41362){
var G__41363 = cljs.core.first(seq41362);
var seq41362__$1 = cljs.core.next(seq41362);
return fulcro.client.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__41363,seq41362__$1);
});


fulcro.client.dom.summary = (function fulcro$client$dom$summary(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42092 = arguments.length;
var i__12085__auto___42093 = (0);
while(true){
if((i__12085__auto___42093 < len__12084__auto___42092)){
args__12091__auto__.push((arguments[i__12085__auto___42093]));

var G__42094 = (i__12085__auto___42093 + (1));
i__12085__auto___42093 = G__42094;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("summary",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.summary.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.summary.cljs$lang$applyTo = (function (seq41365){
var G__41366 = cljs.core.first(seq41365);
var seq41365__$1 = cljs.core.next(seq41365);
return fulcro.client.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__41366,seq41365__$1);
});


fulcro.client.dom.sup = (function fulcro$client$dom$sup(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42095 = arguments.length;
var i__12085__auto___42096 = (0);
while(true){
if((i__12085__auto___42096 < len__12084__auto___42095)){
args__12091__auto__.push((arguments[i__12085__auto___42096]));

var G__42097 = (i__12085__auto___42096 + (1));
i__12085__auto___42096 = G__42097;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("sup",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.sup.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.sup.cljs$lang$applyTo = (function (seq41369){
var G__41370 = cljs.core.first(seq41369);
var seq41369__$1 = cljs.core.next(seq41369);
return fulcro.client.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__41370,seq41369__$1);
});


fulcro.client.dom.table = (function fulcro$client$dom$table(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42099 = arguments.length;
var i__12085__auto___42100 = (0);
while(true){
if((i__12085__auto___42100 < len__12084__auto___42099)){
args__12091__auto__.push((arguments[i__12085__auto___42100]));

var G__42102 = (i__12085__auto___42100 + (1));
i__12085__auto___42100 = G__42102;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("table",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.table.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.table.cljs$lang$applyTo = (function (seq41371){
var G__41372 = cljs.core.first(seq41371);
var seq41371__$1 = cljs.core.next(seq41371);
return fulcro.client.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__41372,seq41371__$1);
});


fulcro.client.dom.tbody = (function fulcro$client$dom$tbody(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42106 = arguments.length;
var i__12085__auto___42107 = (0);
while(true){
if((i__12085__auto___42107 < len__12084__auto___42106)){
args__12091__auto__.push((arguments[i__12085__auto___42107]));

var G__42108 = (i__12085__auto___42107 + (1));
i__12085__auto___42107 = G__42108;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("tbody",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.tbody.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.tbody.cljs$lang$applyTo = (function (seq41373){
var G__41374 = cljs.core.first(seq41373);
var seq41373__$1 = cljs.core.next(seq41373);
return fulcro.client.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__41374,seq41373__$1);
});


fulcro.client.dom.td = (function fulcro$client$dom$td(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42109 = arguments.length;
var i__12085__auto___42110 = (0);
while(true){
if((i__12085__auto___42110 < len__12084__auto___42109)){
args__12091__auto__.push((arguments[i__12085__auto___42110]));

var G__42111 = (i__12085__auto___42110 + (1));
i__12085__auto___42110 = G__42111;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("td",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.td.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.td.cljs$lang$applyTo = (function (seq41375){
var G__41376 = cljs.core.first(seq41375);
var seq41375__$1 = cljs.core.next(seq41375);
return fulcro.client.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__41376,seq41375__$1);
});


fulcro.client.dom.tfoot = (function fulcro$client$dom$tfoot(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42112 = arguments.length;
var i__12085__auto___42113 = (0);
while(true){
if((i__12085__auto___42113 < len__12084__auto___42112)){
args__12091__auto__.push((arguments[i__12085__auto___42113]));

var G__42115 = (i__12085__auto___42113 + (1));
i__12085__auto___42113 = G__42115;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("tfoot",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.tfoot.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.tfoot.cljs$lang$applyTo = (function (seq41380){
var G__41381 = cljs.core.first(seq41380);
var seq41380__$1 = cljs.core.next(seq41380);
return fulcro.client.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__41381,seq41380__$1);
});


fulcro.client.dom.th = (function fulcro$client$dom$th(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42119 = arguments.length;
var i__12085__auto___42120 = (0);
while(true){
if((i__12085__auto___42120 < len__12084__auto___42119)){
args__12091__auto__.push((arguments[i__12085__auto___42120]));

var G__42121 = (i__12085__auto___42120 + (1));
i__12085__auto___42120 = G__42121;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("th",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.th.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.th.cljs$lang$applyTo = (function (seq41382){
var G__41383 = cljs.core.first(seq41382);
var seq41382__$1 = cljs.core.next(seq41382);
return fulcro.client.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__41383,seq41382__$1);
});


fulcro.client.dom.thead = (function fulcro$client$dom$thead(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42131 = arguments.length;
var i__12085__auto___42132 = (0);
while(true){
if((i__12085__auto___42132 < len__12084__auto___42131)){
args__12091__auto__.push((arguments[i__12085__auto___42132]));

var G__42133 = (i__12085__auto___42132 + (1));
i__12085__auto___42132 = G__42133;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("thead",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.thead.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.thead.cljs$lang$applyTo = (function (seq41384){
var G__41385 = cljs.core.first(seq41384);
var seq41384__$1 = cljs.core.next(seq41384);
return fulcro.client.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__41385,seq41384__$1);
});


fulcro.client.dom.time = (function fulcro$client$dom$time(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42139 = arguments.length;
var i__12085__auto___42143 = (0);
while(true){
if((i__12085__auto___42143 < len__12084__auto___42139)){
args__12091__auto__.push((arguments[i__12085__auto___42143]));

var G__42149 = (i__12085__auto___42143 + (1));
i__12085__auto___42143 = G__42149;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("time",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.time.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.time.cljs$lang$applyTo = (function (seq41386){
var G__41387 = cljs.core.first(seq41386);
var seq41386__$1 = cljs.core.next(seq41386);
return fulcro.client.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__41387,seq41386__$1);
});


fulcro.client.dom.title = (function fulcro$client$dom$title(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42194 = arguments.length;
var i__12085__auto___42195 = (0);
while(true){
if((i__12085__auto___42195 < len__12084__auto___42194)){
args__12091__auto__.push((arguments[i__12085__auto___42195]));

var G__42197 = (i__12085__auto___42195 + (1));
i__12085__auto___42195 = G__42197;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("title",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.title.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.title.cljs$lang$applyTo = (function (seq41388){
var G__41389 = cljs.core.first(seq41388);
var seq41388__$1 = cljs.core.next(seq41388);
return fulcro.client.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__41389,seq41388__$1);
});


fulcro.client.dom.tr = (function fulcro$client$dom$tr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42204 = arguments.length;
var i__12085__auto___42205 = (0);
while(true){
if((i__12085__auto___42205 < len__12084__auto___42204)){
args__12091__auto__.push((arguments[i__12085__auto___42205]));

var G__42207 = (i__12085__auto___42205 + (1));
i__12085__auto___42205 = G__42207;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("tr",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.tr.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.tr.cljs$lang$applyTo = (function (seq41390){
var G__41391 = cljs.core.first(seq41390);
var seq41390__$1 = cljs.core.next(seq41390);
return fulcro.client.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__41391,seq41390__$1);
});


fulcro.client.dom.track = (function fulcro$client$dom$track(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42213 = arguments.length;
var i__12085__auto___42214 = (0);
while(true){
if((i__12085__auto___42214 < len__12084__auto___42213)){
args__12091__auto__.push((arguments[i__12085__auto___42214]));

var G__42215 = (i__12085__auto___42214 + (1));
i__12085__auto___42214 = G__42215;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("track",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.track.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.track.cljs$lang$applyTo = (function (seq41395){
var G__41396 = cljs.core.first(seq41395);
var seq41395__$1 = cljs.core.next(seq41395);
return fulcro.client.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__41396,seq41395__$1);
});


fulcro.client.dom.u = (function fulcro$client$dom$u(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42222 = arguments.length;
var i__12085__auto___42223 = (0);
while(true){
if((i__12085__auto___42223 < len__12084__auto___42222)){
args__12091__auto__.push((arguments[i__12085__auto___42223]));

var G__42225 = (i__12085__auto___42223 + (1));
i__12085__auto___42223 = G__42225;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("u",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.u.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.u.cljs$lang$applyTo = (function (seq41401){
var G__41402 = cljs.core.first(seq41401);
var seq41401__$1 = cljs.core.next(seq41401);
return fulcro.client.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__41402,seq41401__$1);
});


fulcro.client.dom.ul = (function fulcro$client$dom$ul(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42229 = arguments.length;
var i__12085__auto___42230 = (0);
while(true){
if((i__12085__auto___42230 < len__12084__auto___42229)){
args__12091__auto__.push((arguments[i__12085__auto___42230]));

var G__42231 = (i__12085__auto___42230 + (1));
i__12085__auto___42230 = G__42231;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("ul",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.ul.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.ul.cljs$lang$applyTo = (function (seq41403){
var G__41404 = cljs.core.first(seq41403);
var seq41403__$1 = cljs.core.next(seq41403);
return fulcro.client.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__41404,seq41403__$1);
});


fulcro.client.dom.var$ = (function fulcro$client$dom$var(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42239 = arguments.length;
var i__12085__auto___42240 = (0);
while(true){
if((i__12085__auto___42240 < len__12084__auto___42239)){
args__12091__auto__.push((arguments[i__12085__auto___42240]));

var G__42242 = (i__12085__auto___42240 + (1));
i__12085__auto___42240 = G__42242;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("var",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.var$.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.var$.cljs$lang$applyTo = (function (seq41405){
var G__41406 = cljs.core.first(seq41405);
var seq41405__$1 = cljs.core.next(seq41405);
return fulcro.client.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__41406,seq41405__$1);
});


fulcro.client.dom.video = (function fulcro$client$dom$video(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42246 = arguments.length;
var i__12085__auto___42248 = (0);
while(true){
if((i__12085__auto___42248 < len__12084__auto___42246)){
args__12091__auto__.push((arguments[i__12085__auto___42248]));

var G__42249 = (i__12085__auto___42248 + (1));
i__12085__auto___42248 = G__42249;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("video",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.video.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.video.cljs$lang$applyTo = (function (seq41408){
var G__41409 = cljs.core.first(seq41408);
var seq41408__$1 = cljs.core.next(seq41408);
return fulcro.client.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__41409,seq41408__$1);
});


fulcro.client.dom.wbr = (function fulcro$client$dom$wbr(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42255 = arguments.length;
var i__12085__auto___42256 = (0);
while(true){
if((i__12085__auto___42256 < len__12084__auto___42255)){
args__12091__auto__.push((arguments[i__12085__auto___42256]));

var G__42257 = (i__12085__auto___42256 + (1));
i__12085__auto___42256 = G__42257;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("wbr",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.wbr.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.wbr.cljs$lang$applyTo = (function (seq41410){
var G__41411 = cljs.core.first(seq41410);
var seq41410__$1 = cljs.core.next(seq41410);
return fulcro.client.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__41411,seq41410__$1);
});


fulcro.client.dom.circle = (function fulcro$client$dom$circle(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42262 = arguments.length;
var i__12085__auto___42263 = (0);
while(true){
if((i__12085__auto___42263 < len__12084__auto___42262)){
args__12091__auto__.push((arguments[i__12085__auto___42263]));

var G__42266 = (i__12085__auto___42263 + (1));
i__12085__auto___42263 = G__42266;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("circle",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.circle.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.circle.cljs$lang$applyTo = (function (seq41415){
var G__41416 = cljs.core.first(seq41415);
var seq41415__$1 = cljs.core.next(seq41415);
return fulcro.client.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__41416,seq41415__$1);
});


fulcro.client.dom.clipPath = (function fulcro$client$dom$clipPath(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42318 = arguments.length;
var i__12085__auto___42319 = (0);
while(true){
if((i__12085__auto___42319 < len__12084__auto___42318)){
args__12091__auto__.push((arguments[i__12085__auto___42319]));

var G__42320 = (i__12085__auto___42319 + (1));
i__12085__auto___42319 = G__42320;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("clipPath",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.clipPath.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.clipPath.cljs$lang$applyTo = (function (seq41417){
var G__41418 = cljs.core.first(seq41417);
var seq41417__$1 = cljs.core.next(seq41417);
return fulcro.client.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__41418,seq41417__$1);
});


fulcro.client.dom.ellipse = (function fulcro$client$dom$ellipse(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42327 = arguments.length;
var i__12085__auto___42329 = (0);
while(true){
if((i__12085__auto___42329 < len__12084__auto___42327)){
args__12091__auto__.push((arguments[i__12085__auto___42329]));

var G__42330 = (i__12085__auto___42329 + (1));
i__12085__auto___42329 = G__42330;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("ellipse",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.ellipse.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.ellipse.cljs$lang$applyTo = (function (seq41420){
var G__41421 = cljs.core.first(seq41420);
var seq41420__$1 = cljs.core.next(seq41420);
return fulcro.client.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__41421,seq41420__$1);
});


fulcro.client.dom.g = (function fulcro$client$dom$g(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42336 = arguments.length;
var i__12085__auto___42337 = (0);
while(true){
if((i__12085__auto___42337 < len__12084__auto___42336)){
args__12091__auto__.push((arguments[i__12085__auto___42337]));

var G__42339 = (i__12085__auto___42337 + (1));
i__12085__auto___42337 = G__42339;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("g",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.g.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.g.cljs$lang$applyTo = (function (seq41423){
var G__41424 = cljs.core.first(seq41423);
var seq41423__$1 = cljs.core.next(seq41423);
return fulcro.client.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__41424,seq41423__$1);
});


fulcro.client.dom.line = (function fulcro$client$dom$line(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42346 = arguments.length;
var i__12085__auto___42347 = (0);
while(true){
if((i__12085__auto___42347 < len__12084__auto___42346)){
args__12091__auto__.push((arguments[i__12085__auto___42347]));

var G__42349 = (i__12085__auto___42347 + (1));
i__12085__auto___42347 = G__42349;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("line",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.line.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.line.cljs$lang$applyTo = (function (seq41425){
var G__41426 = cljs.core.first(seq41425);
var seq41425__$1 = cljs.core.next(seq41425);
return fulcro.client.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__41426,seq41425__$1);
});


fulcro.client.dom.mask = (function fulcro$client$dom$mask(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42355 = arguments.length;
var i__12085__auto___42356 = (0);
while(true){
if((i__12085__auto___42356 < len__12084__auto___42355)){
args__12091__auto__.push((arguments[i__12085__auto___42356]));

var G__42357 = (i__12085__auto___42356 + (1));
i__12085__auto___42356 = G__42357;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("mask",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.mask.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.mask.cljs$lang$applyTo = (function (seq41427){
var G__41428 = cljs.core.first(seq41427);
var seq41427__$1 = cljs.core.next(seq41427);
return fulcro.client.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__41428,seq41427__$1);
});


fulcro.client.dom.path = (function fulcro$client$dom$path(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42364 = arguments.length;
var i__12085__auto___42365 = (0);
while(true){
if((i__12085__auto___42365 < len__12084__auto___42364)){
args__12091__auto__.push((arguments[i__12085__auto___42365]));

var G__42367 = (i__12085__auto___42365 + (1));
i__12085__auto___42365 = G__42367;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("path",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.path.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.path.cljs$lang$applyTo = (function (seq41429){
var G__41430 = cljs.core.first(seq41429);
var seq41429__$1 = cljs.core.next(seq41429);
return fulcro.client.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__41430,seq41429__$1);
});


fulcro.client.dom.pattern = (function fulcro$client$dom$pattern(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42371 = arguments.length;
var i__12085__auto___42372 = (0);
while(true){
if((i__12085__auto___42372 < len__12084__auto___42371)){
args__12091__auto__.push((arguments[i__12085__auto___42372]));

var G__42373 = (i__12085__auto___42372 + (1));
i__12085__auto___42372 = G__42373;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("pattern",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.pattern.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.pattern.cljs$lang$applyTo = (function (seq41432){
var G__41433 = cljs.core.first(seq41432);
var seq41432__$1 = cljs.core.next(seq41432);
return fulcro.client.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__41433,seq41432__$1);
});


fulcro.client.dom.polyline = (function fulcro$client$dom$polyline(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42379 = arguments.length;
var i__12085__auto___42380 = (0);
while(true){
if((i__12085__auto___42380 < len__12084__auto___42379)){
args__12091__auto__.push((arguments[i__12085__auto___42380]));

var G__42381 = (i__12085__auto___42380 + (1));
i__12085__auto___42380 = G__42381;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("polyline",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.polyline.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.polyline.cljs$lang$applyTo = (function (seq41437){
var G__41438 = cljs.core.first(seq41437);
var seq41437__$1 = cljs.core.next(seq41437);
return fulcro.client.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__41438,seq41437__$1);
});


fulcro.client.dom.rect = (function fulcro$client$dom$rect(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42382 = arguments.length;
var i__12085__auto___42383 = (0);
while(true){
if((i__12085__auto___42383 < len__12084__auto___42382)){
args__12091__auto__.push((arguments[i__12085__auto___42383]));

var G__42384 = (i__12085__auto___42383 + (1));
i__12085__auto___42383 = G__42384;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("rect",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.rect.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.rect.cljs$lang$applyTo = (function (seq41439){
var G__41440 = cljs.core.first(seq41439);
var seq41439__$1 = cljs.core.next(seq41439);
return fulcro.client.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__41440,seq41439__$1);
});


fulcro.client.dom.svg = (function fulcro$client$dom$svg(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42385 = arguments.length;
var i__12085__auto___42387 = (0);
while(true){
if((i__12085__auto___42387 < len__12084__auto___42385)){
args__12091__auto__.push((arguments[i__12085__auto___42387]));

var G__42388 = (i__12085__auto___42387 + (1));
i__12085__auto___42387 = G__42388;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("svg",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.svg.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.svg.cljs$lang$applyTo = (function (seq41441){
var G__41442 = cljs.core.first(seq41441);
var seq41441__$1 = cljs.core.next(seq41441);
return fulcro.client.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__41442,seq41441__$1);
});


fulcro.client.dom.text = (function fulcro$client$dom$text(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42391 = arguments.length;
var i__12085__auto___42392 = (0);
while(true){
if((i__12085__auto___42392 < len__12084__auto___42391)){
args__12091__auto__.push((arguments[i__12085__auto___42392]));

var G__42393 = (i__12085__auto___42392 + (1));
i__12085__auto___42392 = G__42393;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("text",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.text.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.text.cljs$lang$applyTo = (function (seq41443){
var G__41444 = cljs.core.first(seq41443);
var seq41443__$1 = cljs.core.next(seq41443);
return fulcro.client.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__41444,seq41443__$1);
});


fulcro.client.dom.defs = (function fulcro$client$dom$defs(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42398 = arguments.length;
var i__12085__auto___42399 = (0);
while(true){
if((i__12085__auto___42399 < len__12084__auto___42398)){
args__12091__auto__.push((arguments[i__12085__auto___42399]));

var G__42400 = (i__12085__auto___42399 + (1));
i__12085__auto___42399 = G__42400;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("defs",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.defs.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.defs.cljs$lang$applyTo = (function (seq41445){
var G__41446 = cljs.core.first(seq41445);
var seq41445__$1 = cljs.core.next(seq41445);
return fulcro.client.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__41446,seq41445__$1);
});


fulcro.client.dom.linearGradient = (function fulcro$client$dom$linearGradient(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42403 = arguments.length;
var i__12085__auto___42404 = (0);
while(true){
if((i__12085__auto___42404 < len__12084__auto___42403)){
args__12091__auto__.push((arguments[i__12085__auto___42404]));

var G__42405 = (i__12085__auto___42404 + (1));
i__12085__auto___42404 = G__42405;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("linearGradient",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.linearGradient.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.linearGradient.cljs$lang$applyTo = (function (seq41447){
var G__41448 = cljs.core.first(seq41447);
var seq41447__$1 = cljs.core.next(seq41447);
return fulcro.client.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__41448,seq41447__$1);
});


fulcro.client.dom.polygon = (function fulcro$client$dom$polygon(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42407 = arguments.length;
var i__12085__auto___42408 = (0);
while(true){
if((i__12085__auto___42408 < len__12084__auto___42407)){
args__12091__auto__.push((arguments[i__12085__auto___42408]));

var G__42411 = (i__12085__auto___42408 + (1));
i__12085__auto___42408 = G__42411;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("polygon",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.polygon.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.polygon.cljs$lang$applyTo = (function (seq41449){
var G__41450 = cljs.core.first(seq41449);
var seq41449__$1 = cljs.core.next(seq41449);
return fulcro.client.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__41450,seq41449__$1);
});


fulcro.client.dom.radialGradient = (function fulcro$client$dom$radialGradient(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42415 = arguments.length;
var i__12085__auto___42416 = (0);
while(true){
if((i__12085__auto___42416 < len__12084__auto___42415)){
args__12091__auto__.push((arguments[i__12085__auto___42416]));

var G__42419 = (i__12085__auto___42416 + (1));
i__12085__auto___42416 = G__42419;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("radialGradient",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.radialGradient.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.radialGradient.cljs$lang$applyTo = (function (seq41451){
var G__41452 = cljs.core.first(seq41451);
var seq41451__$1 = cljs.core.next(seq41451);
return fulcro.client.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__41452,seq41451__$1);
});


fulcro.client.dom.stop = (function fulcro$client$dom$stop(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42422 = arguments.length;
var i__12085__auto___42423 = (0);
while(true){
if((i__12085__auto___42423 < len__12084__auto___42422)){
args__12091__auto__.push((arguments[i__12085__auto___42423]));

var G__42425 = (i__12085__auto___42423 + (1));
i__12085__auto___42423 = G__42425;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("stop",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.stop.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.stop.cljs$lang$applyTo = (function (seq41454){
var G__41455 = cljs.core.first(seq41454);
var seq41454__$1 = cljs.core.next(seq41454);
return fulcro.client.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__41455,seq41454__$1);
});


fulcro.client.dom.tspan = (function fulcro$client$dom$tspan(var_args){
var args__12091__auto__ = [];
var len__12084__auto___42428 = arguments.length;
var i__12085__auto___42429 = (0);
while(true){
if((i__12085__auto___42429 < len__12084__auto___42428)){
args__12091__auto__.push((arguments[i__12085__auto___42429]));

var G__42431 = (i__12085__auto___42429 + (1));
i__12085__auto___42429 = G__42431;
continue;
} else {
}
break;
}

var argseq__12092__auto__ = ((((1) < args__12091__auto__.length))?(new cljs.core.IndexedSeq(args__12091__auto__.slice((1)),(0),null)):null);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12092__auto__);
});

fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__40148__auto__,children__40149__auto__){
return React.createElement.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons("tspan",cljs.core.cons(opts__40148__auto__,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro.util.force_children,children__40149__auto__)))));
});

fulcro.client.dom.tspan.cljs$lang$maxFixedArity = (1);

fulcro.client.dom.tspan.cljs$lang$applyTo = (function (seq41459){
var G__41460 = cljs.core.first(seq41459);
var seq41459__$1 = cljs.core.next(seq41459);
return fulcro.client.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__41460,seq41459__$1);
});


fulcro.client.dom.input = fulcro.client.dom.wrap_form_element("input");

fulcro.client.dom.textarea = fulcro.client.dom.wrap_form_element("textarea");

fulcro.client.dom.option = fulcro.client.dom.wrap_form_element("option");

fulcro.client.dom.select = fulcro.client.dom.wrap_form_element("select");
/**
 * Equivalent to React.render
 */
fulcro.client.dom.render = (function fulcro$client$dom$render(component,el){
return ReactDOM.render(component,el);
});
/**
 * Equivalent to React.renderToString
 */
fulcro.client.dom.render_to_str = (function fulcro$client$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
fulcro.client.dom.node = (function fulcro$client$dom$node(var_args){
var G__42439 = arguments.length;
switch (G__42439) {
case 1:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return ReactDOM.findDOMNode(component);
});

fulcro.client.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__42441 = component.refs;
var G__42441__$1 = (((G__42441 == null))?null:goog.object.get(G__42441,name));
if((G__42441__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__42441__$1);
}
});

fulcro.client.dom.node.cljs$lang$maxFixedArity = 2;

/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
fulcro.client.dom.create_element = (function fulcro$client$dom$create_element(var_args){
var G__42456 = arguments.length;
switch (G__42456) {
case 1:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12107__auto__ = [];
var len__12084__auto___42463 = arguments.length;
var i__12085__auto___42464 = (0);
while(true){
if((i__12085__auto___42464 < len__12084__auto___42463)){
args_arr__12107__auto__.push((arguments[i__12085__auto___42464]));

var G__42465 = (i__12085__auto___42464 + (1));
i__12085__auto___42464 = G__42465;
continue;
} else {
}
break;
}

var argseq__12108__auto__ = (new cljs.core.IndexedSeq(args_arr__12107__auto__.slice((2)),(0),null));
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12108__auto__);

}
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return React.createElement(tag,opts);
});

fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement(tag,opts,children);
});

fulcro.client.dom.create_element.cljs$lang$applyTo = (function (seq42453){
var G__42454 = cljs.core.first(seq42453);
var seq42453__$1 = cljs.core.next(seq42453);
var G__42455 = cljs.core.first(seq42453__$1);
var seq42453__$2 = cljs.core.next(seq42453__$1);
return fulcro.client.dom.create_element.cljs$core$IFn$_invoke$arity$variadic(G__42454,G__42455,seq42453__$2);
});

fulcro.client.dom.create_element.cljs$lang$maxFixedArity = (2);


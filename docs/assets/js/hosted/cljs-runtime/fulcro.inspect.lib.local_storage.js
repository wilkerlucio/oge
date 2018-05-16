goog.provide('fulcro.inspect.lib.local_storage');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cognitect.transit');
goog.require('fulcro.transit');
fulcro.inspect.lib.local_storage.read_transit = (function fulcro$inspect$lib$local_storage$read_transit(s){
return cognitect.transit.read(fulcro.transit.reader.cljs$core$IFn$_invoke$arity$0(),s);
});
fulcro.inspect.lib.local_storage.write_transit = (function fulcro$inspect$lib$local_storage$write_transit(x){
return cognitect.transit.write(fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0(),x);
});
fulcro.inspect.lib.local_storage.local_storage = window.localStorage;
fulcro.inspect.lib.local_storage.get = (function fulcro$inspect$lib$local_storage$get(var_args){
var G__37112 = arguments.length;
switch (G__37112) {
case 1:
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5455__auto__ = fulcro.inspect.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
} else {
return default$;
}
});

fulcro.inspect.lib.local_storage.get.cljs$lang$maxFixedArity = 2;

fulcro.inspect.lib.local_storage.set_BANG_ = (function fulcro$inspect$lib$local_storage$set_BANG_(key,value){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
fulcro.inspect.lib.local_storage.tget = (function fulcro$inspect$lib$local_storage$tget(var_args){
var G__37117 = arguments.length;
switch (G__37117) {
case 1:
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$1 = (function (key){
return fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2(key,null);
});

fulcro.inspect.lib.local_storage.tget.cljs$core$IFn$_invoke$arity$2 = (function (key,default$){
var temp__5455__auto__ = fulcro.inspect.lib.local_storage.local_storage.getItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)));
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return fulcro.inspect.lib.local_storage.read_transit(value);
} else {
return default$;
}
});

fulcro.inspect.lib.local_storage.tget.cljs$lang$maxFixedArity = 2;

fulcro.inspect.lib.local_storage.tset_BANG_ = (function fulcro$inspect$lib$local_storage$tset_BANG_(key,value){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),fulcro.inspect.lib.local_storage.write_transit(value));
});
fulcro.inspect.lib.local_storage.remove_BANG_ = (function fulcro$inspect$lib$local_storage$remove_BANG_(key){
return fulcro.inspect.lib.local_storage.local_storage.removeItem(key);
});
fulcro.inspect.lib.local_storage.update_BANG_ = (function fulcro$inspect$lib$local_storage$update_BANG_(key,f){
return fulcro.inspect.lib.local_storage.local_storage.setItem(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37125 = fulcro.inspect.lib.local_storage.get.cljs$core$IFn$_invoke$arity$1(key);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37125) : f.call(null,G__37125));
})()], 0)));
});

//# sourceMappingURL=fulcro.inspect.lib.local_storage.js.map

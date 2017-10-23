// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16492 = arguments.length;
var i__11692__auto___16494 = (0);
while(true){
if((i__11692__auto___16494 < len__11691__auto___16492)){
args__11698__auto__.push((arguments[i__11692__auto___16494]));

var G__16495 = (i__11692__auto___16494 + (1));
i__11692__auto___16494 = G__16495;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq16478){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16478));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16502 = arguments.length;
var i__11692__auto___16503 = (0);
while(true){
if((i__11692__auto___16503 < len__11691__auto___16502)){
args__11698__auto__.push((arguments[i__11692__auto___16503]));

var G__16504 = (i__11692__auto___16503 + (1));
i__11692__auto___16503 = G__16504;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq16497){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16497));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__16507 = cljs.core._EQ_;
var expr__16508 = c;
if(cljs.core.truth_((function (){var G__16510 = "\b";
var G__16511 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16510,G__16511) : pred__16507.call(null,G__16510,G__16511));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__16512 = "\t";
var G__16513 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16512,G__16513) : pred__16507.call(null,G__16512,G__16513));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__16514 = "\n";
var G__16515 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16514,G__16515) : pred__16507.call(null,G__16514,G__16515));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__16516 = "\f";
var G__16517 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16516,G__16517) : pred__16507.call(null,G__16516,G__16517));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__16518 = "\r";
var G__16519 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16518,G__16519) : pred__16507.call(null,G__16518,G__16519));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__16523 = "\"";
var G__16524 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16523,G__16524) : pred__16507.call(null,G__16523,G__16524));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__16525 = "\\";
var G__16526 = expr__16508;
return (pred__16507.cljs$core$IFn$_invoke$arity$2 ? pred__16507.cljs$core$IFn$_invoke$arity$2(G__16525,G__16526) : pred__16507.call(null,G__16525,G__16526));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16555 = arguments.length;
var i__11692__auto___16556 = (0);
while(true){
if((i__11692__auto___16556 < len__11691__auto___16555)){
args__11698__auto__.push((arguments[i__11692__auto___16556]));

var G__16557 = (i__11692__auto___16556 + (1));
i__11692__auto___16556 = G__16557;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq16548){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16548));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16566 = arguments.length;
var i__11692__auto___16567 = (0);
while(true){
if((i__11692__auto___16567 < len__11691__auto___16566)){
args__11698__auto__.push((arguments[i__11692__auto___16567]));

var G__16568 = (i__11692__auto___16567 + (1));
i__11692__auto___16567 = G__16568;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((0) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__11699__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq16563){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16563));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__16574 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16574,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16574,(1),null);
var G__16579 = new_context;
var G__16580 = remainder;
var G__16581 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16579;
lis__$1 = G__16580;
acc = G__16581;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16582 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__16585 = new_context;
var G__16586 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16585;
acc = G__16586;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__16587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__16590 = new_context;
var G__16591 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__16590;
acc = G__16591;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11294__auto__ = (function cljs$pprint$unzip_map_$_iter__16595(s__16596){
return (new cljs.core.LazySeq(null,(function (){
var s__16596__$1 = s__16596;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__16596__$1);
if(temp__5459__auto__){
var s__16596__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16596__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__16596__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__16598 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__16597 = (0);
while(true){
if((i__16597 < size__11293__auto__)){
var vec__16601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__16597);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(0),null);
var vec__16604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16601,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16604,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16604,(1),null);
cljs.core.chunk_append(b__16598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__16637 = (i__16597 + (1));
i__16597 = G__16637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16598),cljs$pprint$unzip_map_$_iter__16595(cljs.core.chunk_rest(s__16596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16598),null);
}
} else {
var vec__16608 = cljs.core.first(s__16596__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608,(0),null);
var vec__16611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16608,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16611,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16611,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__16595(cljs.core.rest(s__16596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11294__auto__ = (function cljs$pprint$unzip_map_$_iter__16616(s__16617){
return (new cljs.core.LazySeq(null,(function (){
var s__16617__$1 = s__16617;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__16617__$1);
if(temp__5459__auto__){
var s__16617__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16617__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__16617__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__16619 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__16618 = (0);
while(true){
if((i__16618 < size__11293__auto__)){
var vec__16621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__16618);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16621,(0),null);
var vec__16624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16621,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16624,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16624,(1),null);
cljs.core.chunk_append(b__16619,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__16643 = (i__16618 + (1));
i__16618 = G__16643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16619),cljs$pprint$unzip_map_$_iter__16616(cljs.core.chunk_rest(s__16617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16619),null);
}
} else {
var vec__16628 = cljs.core.first(s__16617__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(0),null);
var vec__16631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16631,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16631,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__16616(cljs.core.rest(s__16617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11294__auto__ = (function cljs$pprint$tuple_map_$_iter__16646(s__16647){
return (new cljs.core.LazySeq(null,(function (){
var s__16647__$1 = s__16647;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__16647__$1);
if(temp__5459__auto__){
var s__16647__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16647__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__16647__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__16649 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__16648 = (0);
while(true){
if((i__16648 < size__11293__auto__)){
var vec__16651 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__16648);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16651,(1),null);
cljs.core.chunk_append(b__16649,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__16661 = (i__16648 + (1));
i__16648 = G__16661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16649),cljs$pprint$tuple_map_$_iter__16646(cljs.core.chunk_rest(s__16647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16649),null);
}
} else {
var vec__16655 = cljs.core.first(s__16647__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16655,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__16646(cljs.core.rest(s__16647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__16662 = (n - (1));
n = G__16662;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__16663 = (n + (1));
n = G__16663;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__16666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__16666) : test.call(null,G__16666));
})()))){
return pos;
} else {
var G__16667 = (pos + (1));
pos = G__16667;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__11145__auto__ = (((pp == null))?null:pp);
var m__11146__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__11145__auto__)]);
if(!((m__11146__auto__ == null))){
return (m__11146__auto__.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__11146__auto__.call(null,pp));
} else {
var m__11146__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__11146__auto____$1 == null))){
return (m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__11146__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__11146__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__16669 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__16669) : sym.call(null,G__16669));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__16672 = arguments.length;
switch (G__16672) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint16673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint16673 = (function (writer,max_columns,fields,meta16674){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta16674 = meta16674;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint16673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_16675,meta16674__$1){
var self__ = this;
var _16675__$1 = this;
return (new cljs.pprint.t_cljs$pprint16673(self__.writer,self__.max_columns,self__.fields,meta16674__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_16675){
var self__ = this;
var _16675__$1 = this;
return self__.meta16674;
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__16676 = cljs.core._EQ_;
var expr__16677 = cljs.core.type(x);
if(cljs.core.truth_((pred__16676.cljs$core$IFn$_invoke$arity$2 ? pred__16676.cljs$core$IFn$_invoke$arity$2(String,expr__16677) : pred__16676.call(null,String,expr__16677)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__16676,expr__16677,this$__$1,fields){
return (function (p1__16670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16670_SHARP_,"\n");
});})(s,nl,pred__16676,expr__16677,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__16676.cljs$core$IFn$_invoke$arity$2 ? pred__16676.cljs$core$IFn$_invoke$arity$2(Number,expr__16677) : pred__16676.call(null,Number,expr__16677)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16677)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta16674], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint16673.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint16673.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint16673";

cljs.pprint.t_cljs$pprint16673.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint16673");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint16673 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint16673(writer__$1,max_columns__$1,fields__$1,meta16674){
return (new cljs.pprint.t_cljs$pprint16673(writer__$1,max_columns__$1,fields__$1,meta16674));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint16673(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16681,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16685 = k16681;
var G__16685__$1 = (((G__16685 instanceof cljs.core.Keyword))?G__16685.fqn:null);
switch (G__16685__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16681,else__11103__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.logical-block{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16680){
var self__ = this;
var G__16680__$1 = this;
return (new cljs.core.RecordIter((0),G__16680__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16689 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16689(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16682,other16683){
var self__ = this;
var this16682__$1 = this;
return (!((other16683 == null))) && ((this16682__$1.constructor === other16683.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.parent,other16683.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.section,other16683.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.start_col,other16683.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.indent,other16683.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.done_nl,other16683.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.intra_block_nl,other16683.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.prefix,other16683.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.per_line_prefix,other16683.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.suffix,other16683.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.logical_block_callback,other16683.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16682__$1.__extmap,other16683.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16680){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16693 = cljs.core.keyword_identical_QMARK_;
var expr__16694 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16696 = cljs.core.cst$kw$parent;
var G__16697 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16696,G__16697) : pred__16693.call(null,G__16696,G__16697));
})())){
return (new cljs.pprint.logical_block(G__16680,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16699 = cljs.core.cst$kw$section;
var G__16700 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16699,G__16700) : pred__16693.call(null,G__16699,G__16700));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__16680,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16701 = cljs.core.cst$kw$start_DASH_col;
var G__16702 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16701,G__16702) : pred__16693.call(null,G__16701,G__16702));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__16680,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16703 = cljs.core.cst$kw$indent;
var G__16704 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16703,G__16704) : pred__16693.call(null,G__16703,G__16704));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__16680,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16705 = cljs.core.cst$kw$done_DASH_nl;
var G__16706 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16705,G__16706) : pred__16693.call(null,G__16705,G__16706));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__16680,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16707 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__16708 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16707,G__16708) : pred__16693.call(null,G__16707,G__16708));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__16680,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16709 = cljs.core.cst$kw$prefix;
var G__16710 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16709,G__16710) : pred__16693.call(null,G__16709,G__16710));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__16680,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16711 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__16712 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16711,G__16712) : pred__16693.call(null,G__16711,G__16712));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__16680,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16713 = cljs.core.cst$kw$suffix;
var G__16714 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16713,G__16714) : pred__16693.call(null,G__16713,G__16714));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__16680,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16717 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__16718 = expr__16694;
return (pred__16693.cljs$core$IFn$_invoke$arity$2 ? pred__16693.cljs$core$IFn$_invoke$arity$2(G__16717,G__16718) : pred__16693.call(null,G__16717,G__16718));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__16680,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16680),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16680){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__16680,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__16684){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__16684),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__16684),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16684,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__16744 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__16744;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16750,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16756 = k16750;
var G__16756__$1 = (((G__16756 instanceof cljs.core.Keyword))?G__16756.fqn:null);
switch (G__16756__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16750,else__11103__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16749){
var self__ = this;
var G__16749__$1 = this;
return (new cljs.core.RecordIter((0),G__16749__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16757 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16757(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16751,other16752){
var self__ = this;
var this16751__$1 = this;
return (!((other16752 == null))) && ((this16751__$1.constructor === other16752.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.type_tag,other16752.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.data,other16752.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.trailing_white_space,other16752.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.start_pos,other16752.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.end_pos,other16752.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16751__$1.__extmap,other16752.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16749){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16758 = cljs.core.keyword_identical_QMARK_;
var expr__16759 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16761 = cljs.core.cst$kw$type_DASH_tag;
var G__16762 = expr__16759;
return (pred__16758.cljs$core$IFn$_invoke$arity$2 ? pred__16758.cljs$core$IFn$_invoke$arity$2(G__16761,G__16762) : pred__16758.call(null,G__16761,G__16762));
})())){
return (new cljs.pprint.buffer_blob(G__16749,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16763 = cljs.core.cst$kw$data;
var G__16764 = expr__16759;
return (pred__16758.cljs$core$IFn$_invoke$arity$2 ? pred__16758.cljs$core$IFn$_invoke$arity$2(G__16763,G__16764) : pred__16758.call(null,G__16763,G__16764));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__16749,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16765 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__16766 = expr__16759;
return (pred__16758.cljs$core$IFn$_invoke$arity$2 ? pred__16758.cljs$core$IFn$_invoke$arity$2(G__16765,G__16766) : pred__16758.call(null,G__16765,G__16766));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__16749,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16767 = cljs.core.cst$kw$start_DASH_pos;
var G__16768 = expr__16759;
return (pred__16758.cljs$core$IFn$_invoke$arity$2 ? pred__16758.cljs$core$IFn$_invoke$arity$2(G__16767,G__16768) : pred__16758.call(null,G__16767,G__16768));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__16749,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16769 = cljs.core.cst$kw$end_DASH_pos;
var G__16770 = expr__16759;
return (pred__16758.cljs$core$IFn$_invoke$arity$2 ? pred__16758.cljs$core$IFn$_invoke$arity$2(G__16769,G__16770) : pred__16758.call(null,G__16769,G__16770));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__16749,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16749),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16749){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__16749,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__16754){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16754),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__16754),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__16754),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16754),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16754),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16754,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__16300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16300__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16798,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16805 = k16798;
var G__16805__$1 = (((G__16805 instanceof cljs.core.Keyword))?G__16805.fqn:null);
switch (G__16805__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16798,else__11103__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.nl-t{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16797){
var self__ = this;
var G__16797__$1 = this;
return (new cljs.core.RecordIter((0),G__16797__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16809 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16809(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16799,other16800){
var self__ = this;
var this16799__$1 = this;
return (!((other16800 == null))) && ((this16799__$1.constructor === other16800.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.type_tag,other16800.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.type,other16800.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.logical_block,other16800.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.start_pos,other16800.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.end_pos,other16800.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16799__$1.__extmap,other16800.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16797){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16810 = cljs.core.keyword_identical_QMARK_;
var expr__16811 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16813 = cljs.core.cst$kw$type_DASH_tag;
var G__16814 = expr__16811;
return (pred__16810.cljs$core$IFn$_invoke$arity$2 ? pred__16810.cljs$core$IFn$_invoke$arity$2(G__16813,G__16814) : pred__16810.call(null,G__16813,G__16814));
})())){
return (new cljs.pprint.nl_t(G__16797,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16815 = cljs.core.cst$kw$type;
var G__16816 = expr__16811;
return (pred__16810.cljs$core$IFn$_invoke$arity$2 ? pred__16810.cljs$core$IFn$_invoke$arity$2(G__16815,G__16816) : pred__16810.call(null,G__16815,G__16816));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__16797,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16817 = cljs.core.cst$kw$logical_DASH_block;
var G__16818 = expr__16811;
return (pred__16810.cljs$core$IFn$_invoke$arity$2 ? pred__16810.cljs$core$IFn$_invoke$arity$2(G__16817,G__16818) : pred__16810.call(null,G__16817,G__16818));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__16797,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16819 = cljs.core.cst$kw$start_DASH_pos;
var G__16820 = expr__16811;
return (pred__16810.cljs$core$IFn$_invoke$arity$2 ? pred__16810.cljs$core$IFn$_invoke$arity$2(G__16819,G__16820) : pred__16810.call(null,G__16819,G__16820));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__16797,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16821 = cljs.core.cst$kw$end_DASH_pos;
var G__16822 = expr__16811;
return (pred__16810.cljs$core$IFn$_invoke$arity$2 ? pred__16810.cljs$core$IFn$_invoke$arity$2(G__16821,G__16822) : pred__16810.call(null,G__16821,G__16822));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__16797,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16797),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16797){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__16797,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__16804){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16804),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__16804),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16804),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16804),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16804),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16804,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__16300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16300__auto__),cljs.core.cst$kw$nl_DASH_t);
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16832,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16839 = k16832;
var G__16839__$1 = (((G__16839 instanceof cljs.core.Keyword))?G__16839.fqn:null);
switch (G__16839__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16832,else__11103__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16831){
var self__ = this;
var G__16831__$1 = this;
return (new cljs.core.RecordIter((0),G__16831__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16840 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16840(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16833,other16834){
var self__ = this;
var this16833__$1 = this;
return (!((other16834 == null))) && ((this16833__$1.constructor === other16834.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16833__$1.type_tag,other16834.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16833__$1.logical_block,other16834.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16833__$1.start_pos,other16834.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16833__$1.end_pos,other16834.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16833__$1.__extmap,other16834.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16831){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16843 = cljs.core.keyword_identical_QMARK_;
var expr__16844 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16848 = cljs.core.cst$kw$type_DASH_tag;
var G__16849 = expr__16844;
return (pred__16843.cljs$core$IFn$_invoke$arity$2 ? pred__16843.cljs$core$IFn$_invoke$arity$2(G__16848,G__16849) : pred__16843.call(null,G__16848,G__16849));
})())){
return (new cljs.pprint.start_block_t(G__16831,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16851 = cljs.core.cst$kw$logical_DASH_block;
var G__16852 = expr__16844;
return (pred__16843.cljs$core$IFn$_invoke$arity$2 ? pred__16843.cljs$core$IFn$_invoke$arity$2(G__16851,G__16852) : pred__16843.call(null,G__16851,G__16852));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__16831,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16853 = cljs.core.cst$kw$start_DASH_pos;
var G__16854 = expr__16844;
return (pred__16843.cljs$core$IFn$_invoke$arity$2 ? pred__16843.cljs$core$IFn$_invoke$arity$2(G__16853,G__16854) : pred__16843.call(null,G__16853,G__16854));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__16831,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16855 = cljs.core.cst$kw$end_DASH_pos;
var G__16856 = expr__16844;
return (pred__16843.cljs$core$IFn$_invoke$arity$2 ? pred__16843.cljs$core$IFn$_invoke$arity$2(G__16855,G__16856) : pred__16843.call(null,G__16855,G__16856));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16831,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16831),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16831){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16831,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__16838){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16838),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16838),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16838),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16838),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16838,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__16300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16300__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16872,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16881 = k16872;
var G__16881__$1 = (((G__16881 instanceof cljs.core.Keyword))?G__16881.fqn:null);
switch (G__16881__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16872,else__11103__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16871){
var self__ = this;
var G__16871__$1 = this;
return (new cljs.core.RecordIter((0),G__16871__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16886 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16886(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16873,other16874){
var self__ = this;
var this16873__$1 = this;
return (!((other16874 == null))) && ((this16873__$1.constructor === other16874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16873__$1.type_tag,other16874.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16873__$1.logical_block,other16874.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16873__$1.start_pos,other16874.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16873__$1.end_pos,other16874.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16873__$1.__extmap,other16874.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16871){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16893 = cljs.core.keyword_identical_QMARK_;
var expr__16894 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16896 = cljs.core.cst$kw$type_DASH_tag;
var G__16897 = expr__16894;
return (pred__16893.cljs$core$IFn$_invoke$arity$2 ? pred__16893.cljs$core$IFn$_invoke$arity$2(G__16896,G__16897) : pred__16893.call(null,G__16896,G__16897));
})())){
return (new cljs.pprint.end_block_t(G__16871,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16898 = cljs.core.cst$kw$logical_DASH_block;
var G__16899 = expr__16894;
return (pred__16893.cljs$core$IFn$_invoke$arity$2 ? pred__16893.cljs$core$IFn$_invoke$arity$2(G__16898,G__16899) : pred__16893.call(null,G__16898,G__16899));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__16871,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16900 = cljs.core.cst$kw$start_DASH_pos;
var G__16901 = expr__16894;
return (pred__16893.cljs$core$IFn$_invoke$arity$2 ? pred__16893.cljs$core$IFn$_invoke$arity$2(G__16900,G__16901) : pred__16893.call(null,G__16900,G__16901));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__16871,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16902 = cljs.core.cst$kw$end_DASH_pos;
var G__16903 = expr__16894;
return (pred__16893.cljs$core$IFn$_invoke$arity$2 ? pred__16893.cljs$core$IFn$_invoke$arity$2(G__16902,G__16903) : pred__16893.call(null,G__16902,G__16903));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__16871,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16871),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16871){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__16871,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__16876){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16876),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16876),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16876),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16876),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16876,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__16300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16300__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k16915,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__16919 = k16915;
var G__16919__$1 = (((G__16919 instanceof cljs.core.Keyword))?G__16919.fqn:null);
switch (G__16919__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16915,else__11103__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.indent-t{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16914){
var self__ = this;
var G__16914__$1 = this;
return (new cljs.core.RecordIter((0),G__16914__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__16920 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__16920(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16916,other16917){
var self__ = this;
var this16916__$1 = this;
return (!((other16917 == null))) && ((this16916__$1.constructor === other16917.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.type_tag,other16917.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.logical_block,other16917.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.relative_to,other16917.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.offset,other16917.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.start_pos,other16917.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.end_pos,other16917.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16916__$1.__extmap,other16917.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__16914){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__16925 = cljs.core.keyword_identical_QMARK_;
var expr__16926 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__16929 = cljs.core.cst$kw$type_DASH_tag;
var G__16930 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16929,G__16930) : pred__16925.call(null,G__16929,G__16930));
})())){
return (new cljs.pprint.indent_t(G__16914,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16931 = cljs.core.cst$kw$logical_DASH_block;
var G__16932 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16931,G__16932) : pred__16925.call(null,G__16931,G__16932));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__16914,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16933 = cljs.core.cst$kw$relative_DASH_to;
var G__16934 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16933,G__16934) : pred__16925.call(null,G__16933,G__16934));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__16914,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16935 = cljs.core.cst$kw$offset;
var G__16936 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16935,G__16936) : pred__16925.call(null,G__16935,G__16936));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__16914,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16937 = cljs.core.cst$kw$start_DASH_pos;
var G__16938 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16937,G__16938) : pred__16925.call(null,G__16937,G__16938));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__16914,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__16939 = cljs.core.cst$kw$end_DASH_pos;
var G__16940 = expr__16926;
return (pred__16925.cljs$core$IFn$_invoke$arity$2 ? pred__16925.cljs$core$IFn$_invoke$arity$2(G__16939,G__16940) : pred__16925.call(null,G__16939,G__16940));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__16914,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__16914),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__16914){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__16914,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__16918){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__16918),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__16918),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__16918),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__16918),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16918),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__16918),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16918,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__16300__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__16300__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__,hierarchy__11471__auto__){
return (function (p1__16980_SHARP_,p2__16979_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__16979_SHARP_);
});})(method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__,hierarchy__11471__auto__))
,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__5459__auto___16987 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5459__auto___16987)){
var cb_16988 = temp__5459__auto___16987;
var G__16985_16989 = cljs.core.cst$kw$start;
(cb_16988.cljs$core$IFn$_invoke$arity$1 ? cb_16988.cljs$core$IFn$_invoke$arity$1(G__16985_16989) : cb_16988.call(null,G__16985_16989));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__5459__auto___16990 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5459__auto___16990)){
var prefix_16991 = temp__5459__auto___16990;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_16991);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__5459__auto___16993 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5459__auto___16993)){
var cb_16994 = temp__5459__auto___16993;
var G__16992_16995 = cljs.core.cst$kw$end;
(cb_16994.cljs$core$IFn$_invoke$arity$1 ? cb_16994.cljs$core$IFn$_invoke$arity$1(G__16992_16995) : cb_16994.call(null,G__16992_16995));
} else {
}

var temp__5459__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5459__auto__)){
var suffix = temp__5459__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__16996 = cljs.core._EQ_;
var expr__16997 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__16999 = cljs.core.cst$kw$block;
var G__17000 = expr__16997;
return (pred__16996.cljs$core$IFn$_invoke$arity$2 ? pred__16996.cljs$core$IFn$_invoke$arity$2(G__16999,G__17000) : pred__16996.call(null,G__16999,G__17000));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17001 = cljs.core.cst$kw$current;
var G__17002 = expr__16997;
return (pred__16996.cljs$core$IFn$_invoke$arity$2 ? pred__16996.cljs$core$IFn$_invoke$arity$2(G__17001,G__17002) : pred__16996.call(null,G__17001,G__17002));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16997)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__10400__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__10400__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5457__auto___17007 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___17007)){
var tws_17008 = temp__5457__auto___17007;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17008);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__17013 = cljs.core.seq(tokens);
var chunk__17014 = null;
var count__17015 = (0);
var i__17016 = (0);
while(true){
if((i__17016 < count__17015)){
var token = chunk__17014.cljs$core$IIndexed$_nth$arity$2(null,i__17016);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5457__auto___17019 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___17019)){
var tws_17020 = temp__5457__auto___17019;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17020);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17021 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__10400__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__10400__auto__)){
return tws_17021;
} else {
return and__10400__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17021);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17022 = seq__17013;
var G__17023 = chunk__17014;
var G__17024 = count__17015;
var G__17025 = (i__17016 + (1));
seq__17013 = G__17022;
chunk__17014 = G__17023;
count__17015 = G__17024;
i__17016 = G__17025;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__17013);
if(temp__5459__auto__){
var seq__17013__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17013__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__17013__$1);
var G__17026 = cljs.core.chunk_rest(seq__17013__$1);
var G__17027 = c__11343__auto__;
var G__17028 = cljs.core.count(c__11343__auto__);
var G__17029 = (0);
seq__17013 = G__17026;
chunk__17014 = G__17027;
count__17015 = G__17028;
i__17016 = G__17029;
continue;
} else {
var token = cljs.core.first(seq__17013__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__5457__auto___17036 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto___17036)){
var tws_17037 = temp__5457__auto___17036;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17037);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_17038 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__10400__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__10400__auto__)){
return tws_17038;
} else {
return and__10400__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_17038);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__17039 = cljs.core.next(seq__17013__$1);
var G__17040 = null;
var G__17041 = (0);
var G__17042 = (0);
seq__17013 = G__17039;
chunk__17014 = G__17040;
count__17015 = G__17041;
i__17016 = G__17042;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__10412__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__10400__auto__ = miser_width;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = maxcol;
if(cljs.core.truth_(and__10400__auto____$1)){
var and__10400__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__10400__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__10400__auto____$2;
}
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__,hierarchy__11471__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__,hierarchy__11471__auto__))
,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__10412__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17052_SHARP_){
return cljs.core.not((function (){var and__10400__auto__ = cljs.pprint.nl_t_QMARK_(p1__17052_SHARP_);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17052_SHARP_),lb);
} else {
return and__10400__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__17066_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__17066_SHARP_);
return cljs.core.not((function (){var and__10400__auto__ = cljs.pprint.nl_t_QMARK_(p1__17066_SHARP_);
if(cljs.core.truth_(and__10400__auto__)){
var or__10412__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__10412__auto__){
return or__10412__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__10400__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__17067 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__17067;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_17076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_17076);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17080_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__17080_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__17083 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17083,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__17086 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__17089 = newl;
var G__17090 = this$;
var G__17091 = section;
var G__17092 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__17089,G__17090,G__17091,G__17092) : cljs.pprint.emit_nl_QMARK_.call(null,G__17089,G__17090,G__17091,G__17092));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__17095 = new_buffer;
buffer = G__17095;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5457__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var buf = temp__5457__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5459__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5459__auto__)){
var tws = temp__5459__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_17108 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17109 = (oldpos_17108 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17109);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_17108,newpos_17109));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__17104_17121 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__17105_17122 = null;
var count__17106_17123 = (0);
var i__17107_17124 = (0);
while(true){
if((i__17107_17124 < count__17106_17123)){
var l_17125__$1 = chunk__17105_17122.cljs$core$IIndexed$_nth$arity$2(null,i__17107_17124);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17125__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17126 = seq__17104_17121;
var G__17127 = chunk__17105_17122;
var G__17128 = count__17106_17123;
var G__17129 = (i__17107_17124 + (1));
seq__17104_17121 = G__17126;
chunk__17105_17122 = G__17127;
count__17106_17123 = G__17128;
i__17107_17124 = G__17129;
continue;
} else {
var temp__5459__auto___17130 = cljs.core.seq(seq__17104_17121);
if(temp__5459__auto___17130){
var seq__17104_17131__$1 = temp__5459__auto___17130;
if(cljs.core.chunked_seq_QMARK_(seq__17104_17131__$1)){
var c__11343__auto___17132 = cljs.core.chunk_first(seq__17104_17131__$1);
var G__17133 = cljs.core.chunk_rest(seq__17104_17131__$1);
var G__17134 = c__11343__auto___17132;
var G__17135 = cljs.core.count(c__11343__auto___17132);
var G__17136 = (0);
seq__17104_17121 = G__17133;
chunk__17105_17122 = G__17134;
count__17106_17123 = G__17135;
i__17107_17124 = G__17136;
continue;
} else {
var l_17137__$1 = cljs.core.first(seq__17104_17131__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_17137__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__17138 = cljs.core.next(seq__17104_17131__$1);
var G__17139 = null;
var G__17140 = (0);
var G__17141 = (0);
seq__17104_17121 = G__17138;
chunk__17105_17122 = G__17139;
count__17106_17123 = G__17140;
i__17107_17124 = G__17141;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint17144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17144 = (function (writer,max_columns,miser_width,lb,fields,meta17145){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta17145 = meta17145;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_17146,meta17145__$1){
var self__ = this;
var _17146__$1 = this;
return (new cljs.pprint.t_cljs$pprint17144(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta17145__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_17146){
var self__ = this;
var _17146__$1 = this;
return self__.meta17145;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17149 = cljs.core._EQ_;
var expr__17150 = cljs.core.type(x);
if(cljs.core.truth_((pred__17149.cljs$core$IFn$_invoke$arity$2 ? pred__17149.cljs$core$IFn$_invoke$arity$2(String,expr__17150) : pred__17149.call(null,String,expr__17150)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__17149.cljs$core$IFn$_invoke$arity$2 ? pred__17149.cljs$core$IFn$_invoke$arity$2(Number,expr__17150) : pred__17149.call(null,Number,expr__17150)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17150)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint17144.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta17145], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint17144.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17144.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17144";

cljs.pprint.t_cljs$pprint17144.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint17144");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint17144 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint17144(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17145){
return (new cljs.pprint.t_cljs$pprint17144(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta17145));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint17144(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__5459__auto___17166 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5459__auto___17166)){
var cb_17167 = temp__5459__auto___17166;
var G__17165_17168 = cljs.core.cst$kw$start;
(cb_17167.cljs$core$IFn$_invoke$arity$1 ? cb_17167.cljs$core$IFn$_invoke$arity$1(G__17165_17168) : cb_17167.call(null,G__17165_17168));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5459__auto___17170 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5459__auto___17170)){
var cb_17171 = temp__5459__auto___17170;
var G__17169_17172 = cljs.core.cst$kw$end;
(cb_17171.cljs$core$IFn$_invoke$arity$1 ? cb_17171.cljs$core$IFn$_invoke$arity$1(G__17169_17172) : cb_17171.call(null,G__17169_17172));
} else {
}
} else {
var oldpos_17174 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_17175 = (oldpos_17174 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_17175);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_17174,newpos_17175));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__17178 = cljs.core._EQ_;
var expr__17179 = relative_to;
if(cljs.core.truth_((function (){var G__17181 = cljs.core.cst$kw$block;
var G__17182 = expr__17179;
return (pred__17178.cljs$core$IFn$_invoke$arity$2 ? pred__17178.cljs$core$IFn$_invoke$arity$2(G__17181,G__17182) : pred__17178.call(null,G__17181,G__17182));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__17183 = cljs.core.cst$kw$current;
var G__17184 = expr__17179;
return (pred__17178.cljs$core$IFn$_invoke$arity$2 ? pred__17178.cljs$core$IFn$_invoke$arity$2(G__17183,G__17184) : pred__17178.call(null,G__17183,G__17184));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17179)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17189_SHARP_){
var temp__5459__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__17189_SHARP_));
if(cljs.core.truth_(temp__5459__auto__)){
var v = temp__5459__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__17189_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__10400__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__10400__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__10400__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__10400__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__10400__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__11698__auto__ = [];
var len__11691__auto___17214 = arguments.length;
var i__11692__auto___17215 = (0);
while(true){
if((i__11692__auto___17215 < len__11691__auto___17214)){
args__11698__auto__.push((arguments[i__11692__auto___17215]));

var G__17216 = (i__11692__auto___17215 + (1));
i__11692__auto___17215 = G__17216;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_17197 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_17198 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_17199 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_17200 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_17201 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_17202 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_17203 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_17204 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_17205 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_17206 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_17207 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_17208 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__16241__auto___17218 = base_writer;
var new_writer__16242__auto___17219 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16241__auto___17218));
var _STAR_out_STAR_17209_17220 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16242__auto___17219)?cljs.pprint.make_pretty_writer(base_writer__16241__auto___17218,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16241__auto___17218);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17209_17220;
}} else {
var _STAR_out_STAR_17212_17221 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17212_17221;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_17208;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_17207;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_17206;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_17205;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17204;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_17203;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_17202;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_17201;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_17200;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_17199;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_17198;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_17197;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq17195){
var G__17196 = cljs.core.first(seq17195);
var seq17195__$1 = cljs.core.next(seq17195);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__17196,seq17195__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__17228 = arguments.length;
switch (G__17228) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17229 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17229;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__16241__auto__ = writer;
var new_writer__16242__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__16241__auto__));
var _STAR_out_STAR_17231 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__16242__auto__)?cljs.pprint.make_pretty_writer(base_writer__16241__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__16241__auto__);

try{var _STAR_print_pretty_STAR_17232_17236 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_17232_17236;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17231;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__10400__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__10400__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__10400__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__11698__auto__ = [];
var len__11691__auto___17245 = arguments.length;
var i__11692__auto___17246 = (0);
while(true){
if((i__11692__auto___17246 < len__11691__auto___17245)){
args__11698__auto__.push((arguments[i__11692__auto___17246]));

var G__17247 = (i__11692__auto___17246 + (1));
i__11692__auto___17246 = G__17247;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq17240){
var G__17241 = cljs.core.first(seq17240);
var seq17240__$1 = cljs.core.next(seq17240);
var G__17242 = cljs.core.first(seq17240__$1);
var seq17240__$2 = cljs.core.next(seq17240__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__17241,G__17242,seq17240__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k17251,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__17257 = k17251;
var G__17257__$1 = (((G__17257 instanceof cljs.core.Keyword))?G__17257.fqn:null);
switch (G__17257__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17251,else__11103__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17250){
var self__ = this;
var G__17250__$1 = this;
return (new cljs.core.RecordIter((0),G__17250__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__17264 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__17264(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17252,other17253){
var self__ = this;
var this17252__$1 = this;
return (!((other17253 == null))) && ((this17252__$1.constructor === other17253.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17252__$1.seq,other17253.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17252__$1.rest,other17253.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17252__$1.pos,other17253.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17252__$1.__extmap,other17253.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__17250){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__17266 = cljs.core.keyword_identical_QMARK_;
var expr__17268 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__17270 = cljs.core.cst$kw$seq;
var G__17271 = expr__17268;
return (pred__17266.cljs$core$IFn$_invoke$arity$2 ? pred__17266.cljs$core$IFn$_invoke$arity$2(G__17270,G__17271) : pred__17266.call(null,G__17270,G__17271));
})())){
return (new cljs.pprint.arg_navigator(G__17250,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17272 = cljs.core.cst$kw$rest;
var G__17273 = expr__17268;
return (pred__17266.cljs$core$IFn$_invoke$arity$2 ? pred__17266.cljs$core$IFn$_invoke$arity$2(G__17272,G__17273) : pred__17266.call(null,G__17272,G__17273));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__17250,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17274 = cljs.core.cst$kw$pos;
var G__17275 = expr__17268;
return (pred__17266.cljs$core$IFn$_invoke$arity$2 ? pred__17266.cljs$core$IFn$_invoke$arity$2(G__17274,G__17275) : pred__17266.call(null,G__17274,G__17275));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__17250,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__17250),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__17250){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__17250,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__17255){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__17255),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__17255),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__17255),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17255,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__17296 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__17300 = navigator;
var G__17301 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__17300,G__17301) : cljs.pprint.relative_reposition.call(null,G__17300,G__17301));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11100__auto__,k__11101__auto__){
var self__ = this;
var this__11100__auto____$1 = this;
return this__11100__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11101__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11102__auto__,k17306,else__11103__auto__){
var self__ = this;
var this__11102__auto____$1 = this;
var G__17312 = k17306;
var G__17312__$1 = (((G__17312 instanceof cljs.core.Keyword))?G__17312.fqn:null);
switch (G__17312__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17306,else__11103__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11114__auto__,writer__11115__auto__,opts__11116__auto__){
var self__ = this;
var this__11114__auto____$1 = this;
var pr_pair__11117__auto__ = ((function (this__11114__auto____$1){
return (function (keyval__11118__auto__){
return cljs.core.pr_sequential_writer(writer__11115__auto__,cljs.core.pr_writer,""," ","",opts__11116__auto__,keyval__11118__auto__);
});})(this__11114__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11115__auto__,pr_pair__11117__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__11116__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17305){
var self__ = this;
var G__17305__$1 = this;
return (new cljs.core.RecordIter((0),G__17305__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11098__auto__){
var self__ = this;
var this__11098__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11095__auto__){
var self__ = this;
var this__11095__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11104__auto__){
var self__ = this;
var this__11104__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11096__auto__){
var self__ = this;
var this__11096__auto____$1 = this;
var h__10868__auto__ = self__.__hash;
if(!((h__10868__auto__ == null))){
return h__10868__auto__;
} else {
var h__10868__auto____$1 = (function (){var fexpr__17319 = ((function (h__10868__auto__,this__11096__auto____$1){
return (function (coll__11097__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__11097__auto__));
});})(h__10868__auto__,this__11096__auto____$1))
;
return fexpr__17319(this__11096__auto____$1);
})();
self__.__hash = h__10868__auto____$1;

return h__10868__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17307,other17308){
var self__ = this;
var this17307__$1 = this;
return (!((other17308 == null))) && ((this17307__$1.constructor === other17308.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17307__$1.func,other17308.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17307__$1.def,other17308.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17307__$1.params,other17308.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17307__$1.offset,other17308.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17307__$1.__extmap,other17308.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11109__auto__,k__11110__auto__){
var self__ = this;
var this__11109__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__11110__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11109__auto____$1),self__.__meta),k__11110__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11110__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11107__auto__,k__11108__auto__,G__17305){
var self__ = this;
var this__11107__auto____$1 = this;
var pred__17325 = cljs.core.keyword_identical_QMARK_;
var expr__17326 = k__11108__auto__;
if(cljs.core.truth_((function (){var G__17328 = cljs.core.cst$kw$func;
var G__17329 = expr__17326;
return (pred__17325.cljs$core$IFn$_invoke$arity$2 ? pred__17325.cljs$core$IFn$_invoke$arity$2(G__17328,G__17329) : pred__17325.call(null,G__17328,G__17329));
})())){
return (new cljs.pprint.compiled_directive(G__17305,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17331 = cljs.core.cst$kw$def;
var G__17332 = expr__17326;
return (pred__17325.cljs$core$IFn$_invoke$arity$2 ? pred__17325.cljs$core$IFn$_invoke$arity$2(G__17331,G__17332) : pred__17325.call(null,G__17331,G__17332));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__17305,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17333 = cljs.core.cst$kw$params;
var G__17334 = expr__17326;
return (pred__17325.cljs$core$IFn$_invoke$arity$2 ? pred__17325.cljs$core$IFn$_invoke$arity$2(G__17333,G__17334) : pred__17325.call(null,G__17333,G__17334));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__17305,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__17335 = cljs.core.cst$kw$offset;
var G__17336 = expr__17326;
return (pred__17325.cljs$core$IFn$_invoke$arity$2 ? pred__17325.cljs$core$IFn$_invoke$arity$2(G__17335,G__17336) : pred__17325.call(null,G__17335,G__17336));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__17305,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11108__auto__,G__17305),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11112__auto__){
var self__ = this;
var this__11112__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11099__auto__,G__17305){
var self__ = this;
var this__11099__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__17305,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11105__auto__,entry__11106__auto__){
var self__ = this;
var this__11105__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11106__auto__)){
return this__11105__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11106__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11105__auto____$1,entry__11106__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__11138__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__11138__auto__,writer__11139__auto__){
return cljs.core._write(writer__11139__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__17309){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__17309),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__17309),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__17309),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__17309),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17309,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__17357,navigator){
var vec__17358 = p__17357;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(0),null);
var vec__17361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17358,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17361,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17361,(1),null);
var vec__17365 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17365,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__17371 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17371,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__10412__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__17376 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17376,(1),null);
var base_output = (function (){var or__10412__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__17385_SHARP_){
if((p1__17385_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__17385_SHARP_,base),cljs.core.quot(p1__17385_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__17387_SHARP_){
if((p1__17387_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__17387_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__17387_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__17391 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_17395 = (arg < (0));
var pos_arg_17396 = ((neg_17395)?(- arg):arg);
var raw_str_17397 = cljs.pprint.opt_base_str(base,pos_arg_17396);
var group_str_17398 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_17395,pos_arg_17396,raw_str_17397,vec__17391,arg,arg_navigator__$1){
return (function (p1__17388_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__17388_SHARP_);
});})(neg_17395,pos_arg_17396,raw_str_17397,vec__17391,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_17397));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_17397);
var signed_str_17399 = ((neg_17395)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17398)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_17398)].join(''):group_str_17398
));
var padded_str_17400 = (((signed_str_17399.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_17399.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_17399)].join(''):signed_str_17399);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_17400], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__17407 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__17408 = (pos - (1));
var G__17409 = cljs.core.first(remainder);
var G__17410 = cljs.core.next(remainder);
acc = G__17407;
pos = G__17408;
this$ = G__17409;
remainder = G__17410;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__17415 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17415,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17415,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_17426 = (((arg < (0)))?(- arg):arg);
var parts_17427 = cljs.pprint.remainders((1000),abs_arg_17426);
if((cljs.core.count(parts_17427) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17430 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_17427);
var full_str_17431 = cljs.pprint.add_english_scales(parts_strs_17430,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_17431)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__17437 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17437,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17437,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_17443 = (((arg < (0)))?(- arg):arg);
var parts_17444 = cljs.pprint.remainders((1000),abs_arg_17443);
if((cljs.core.count(parts_17444) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_17445 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_17444));
var head_str_17446 = cljs.pprint.add_english_scales(parts_strs_17445,(1));
var tail_str_17447 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_17444));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_17446))) && (!(cljs.core.empty_QMARK_(tail_str_17447))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17446),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_17447)].join(''):((!(cljs.core.empty_QMARK_(head_str_17446)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_17446),"th"].join(''):tail_str_17447
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_17448 = cljs.core.rem(arg,(100));
var not_teens_17449 = (((11) < low_two_digits_17448)) || (((19) > low_two_digits_17448));
var low_digit_17450 = cljs.core.rem(low_two_digits_17448,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_17450 === (1))) && (not_teens_17449))?"st":((((low_digit_17450 === (2))) && (not_teens_17449))?"nd":((((low_digit_17450 === (3))) && (not_teens_17449))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__17453 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17453,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17453,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_17456 = cljs.pprint.remainders((10),arg);
var acc_17457 = cljs.core.PersistentVector.EMPTY;
var pos_17458 = (cljs.core.count(digits_17456) - (1));
var digits_17459__$1 = digits_17456;
while(true){
if(cljs.core.empty_QMARK_(digits_17459__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_17457)], 0));
} else {
var digit_17460 = cljs.core.first(digits_17459__$1);
var G__17461 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_17460))?acc_17457:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_17457,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_17458),(digit_17460 - (1)))));
var G__17462 = (pos_17458 - (1));
var G__17463 = cljs.core.next(digits_17459__$1);
acc_17457 = G__17461;
pos_17458 = G__17462;
digits_17459__$1 = G__17463;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__17467 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__17474 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17474,(1),null);
var pred__17477_17496 = cljs.core._EQ_;
var expr__17478_17497 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__17480 = "o";
var G__17481 = expr__17478_17497;
return (pred__17477_17496.cljs$core$IFn$_invoke$arity$2 ? pred__17477_17496.cljs$core$IFn$_invoke$arity$2(G__17480,G__17481) : pred__17477_17496.call(null,G__17480,G__17481));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__17482 = "u";
var G__17483 = expr__17478_17497;
return (pred__17477_17496.cljs$core$IFn$_invoke$arity$2 ? pred__17477_17496.cljs$core$IFn$_invoke$arity$2(G__17482,G__17483) : pred__17477_17496.call(null,G__17482,G__17483));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__17477_17496.cljs$core$IFn$_invoke$arity$2 ? pred__17477_17496.cljs$core$IFn$_invoke$arity$2(null,expr__17478_17497) : pred__17477_17496.call(null,null,expr__17478_17497)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17478_17497)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__17508 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17508,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17508,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__17535 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17535,(1),null);
var vec__17538 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17538,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17538,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__17567 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17567,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__17574 = (i - (1));
i = G__17574;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__10412__auto__ = d;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__10764__auto__ = (2);
var y__10765__auto__ = w;
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__10764__auto__ = (e + (1));
var y__10765__auto__ = (w__$1 - (1));
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})():(w__$1 + e)
));
var vec__17577 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17577,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__17581 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17581,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__17586 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(1),null);
var vec__17589 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__17592 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17592,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17592,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__10412__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__17595 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17595,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17595,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17595,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__10400__auto__ = w;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = d;
if(cljs.core.truth_(and__10400__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_17600 = cljs.core.count(fixed_repr__$1);
var signed_len_17601 = (cljs.core.truth_(add_sign)?(len_17600 + (1)):len_17600);
var prepend_zero_17602__$1 = (prepend_zero) && (!((signed_len_17601 >= w)));
var append_zero_17603__$1 = (append_zero) && (!((signed_len_17601 >= w)));
var full_len_17604 = (((prepend_zero_17602__$1) || (append_zero_17603__$1))?(signed_len_17601 + (1)):signed_len_17601);
if(cljs.core.truth_((function (){var and__10400__auto__ = (full_len_17604 > w);
if(and__10400__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__10400__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_17604),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17602__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17603__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__17605 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17605,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17605,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__17611_17621 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__17612_17622 = G__17611_17621;
var mantissa_17623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612_17622,(0),null);
var exp_17624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17612_17622,(1),null);
var G__17611_17625__$1 = G__17611_17621;
while(true){
var vec__17615_17626 = G__17611_17625__$1;
var mantissa_17627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615_17626,(0),null);
var exp_17628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17615_17626,(1),null);
var w_17629 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_17630 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_17631 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_17632 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_17633 = (function (){var or__10412__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return "E";
}
})();
var add_sign_17634 = (function (){var or__10412__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_17635 = (k_17632 <= (0));
var scaled_exp_17636 = (exp_17628__$1 - (k_17632 - (1)));
var scaled_exp_str_17637 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_17636))].join('');
var scaled_exp_str_17638__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_17633),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_17636 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_17631)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_17631 - cljs.core.count(scaled_exp_str_17637)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17637)].join('');
var exp_width_17639 = cljs.core.count(scaled_exp_str_17638__$1);
var base_mantissa_width_17640 = cljs.core.count(mantissa_17627__$1);
var scaled_mantissa_17641 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_17632),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_17627__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_17630)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_17630 - (base_mantissa_width_17640 - (1))) - (((k_17632 < (0)))?(- k_17632):(0))),"0")):null))].join('');
var w_mantissa_17642 = (cljs.core.truth_(w_17629)?(w_17629 - exp_width_17639):null);
var vec__17618_17643 = cljs.pprint.round_str(scaled_mantissa_17641,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17632,(0)))?(d_17630 - (1)):(((k_17632 > (0)))?d_17630:(((k_17632 < (0)))?(d_17630 - (1)):null))),(cljs.core.truth_(w_mantissa_17642)?(w_mantissa_17642 - (cljs.core.truth_(add_sign_17634)?(1):(0))):null));
var rounded_mantissa_17644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17618_17643,(0),null);
var __17645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17618_17643,(1),null);
var incr_exp_17646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17618_17643,(2),null);
var full_mantissa_17647 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_17644,k_17632);
var append_zero_17648 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_17632,cljs.core.count(rounded_mantissa_17644))) && ((d_17630 == null));
if(cljs.core.not(incr_exp_17646)){
if(cljs.core.truth_(w_17629)){
var len_17659 = (cljs.core.count(full_mantissa_17647) + exp_width_17639);
var signed_len_17660 = (cljs.core.truth_(add_sign_17634)?(len_17659 + (1)):len_17659);
var prepend_zero_17661__$1 = (prepend_zero_17635) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_17660,w_17629)));
var full_len_17662 = ((prepend_zero_17661__$1)?(signed_len_17660 + (1)):signed_len_17660);
var append_zero_17663__$1 = (append_zero_17648) && ((full_len_17662 < w_17629));
if(cljs.core.truth_((function (){var and__10400__auto__ = (function (){var or__10412__auto__ = (full_len_17662 > w_17629);
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = e_17631;
if(cljs.core.truth_(and__10400__auto__)){
return ((exp_width_17639 - (2)) > e_17631);
} else {
return and__10400__auto__;
}
}
})();
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__10400__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_17629,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_17629 - full_len_17662) - ((append_zero_17663__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17634)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17661__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17647),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17663__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17638__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_17634)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_17635)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_17647),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_17648)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_17638__$1)].join('')], 0));
}
} else {
var G__17670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_17644,(exp_17628__$1 + (1))], null);
G__17611_17625__$1 = G__17670;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__17672 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17672,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__17675 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__10764__auto__ = cljs.core.count(mantissa);
var y__10765__auto__ = (function (){var x__10771__auto__ = n;
var y__10772__auto__ = (7);
return ((x__10771__auto__ < y__10772__auto__) ? x__10771__auto__ : y__10772__auto__);
})();
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__17694 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17694,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17694,(1),null);
var vec__17697 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17697,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17697,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__10412__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (arg < (0));
}
})();
var vec__17700 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17700,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17700,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17700,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__10400__auto__)){
return add_sign;
} else {
return and__10400__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__10400__auto__){
return add_sign;
} else {
return and__10400__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__17723 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17723,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17723,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__17736 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17736,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17736,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__17745 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17745,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17745,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17754 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17754,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17754,(1),null);
var vec__17757 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17757,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17757,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__10412__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = max_count;
if(cljs.core.truth_(and__10400__auto__)){
return (count >= max_count);
} else {
return and__10400__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17760 = (count + (1));
var G__17761 = iter_result;
var G__17762 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__17760;
args__$1 = G__17761;
last_pos = G__17762;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17763 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17763,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17763,(1),null);
var vec__17766 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17766,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__10412__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = max_count;
if(cljs.core.truth_(and__10400__auto__)){
return (count >= max_count);
} else {
return and__10400__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__17773 = (count + (1));
var G__17774 = cljs.core.next(arg_list__$1);
count = G__17773;
arg_list__$1 = G__17774;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17775 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17775,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17775,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__10412__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = max_count;
if(cljs.core.truth_(and__10400__auto__)){
return (count >= max_count);
} else {
return and__10400__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__17779 = (count + (1));
var G__17780 = iter_result;
var G__17781 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__17779;
navigator__$2 = G__17780;
last_pos = G__17781;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__17783 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17783,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17783,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__10412__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__10412__auto__){
return or__10412__auto__;
} else {
var and__10400__auto__ = max_count;
if(cljs.core.truth_(and__10400__auto__)){
return (count >= max_count);
} else {
return and__10400__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__17788 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17788,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__17794 = (count + (1));
var G__17795 = navigator__$3;
count = G__17794;
navigator__$2 = G__17795;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__17797 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_17800 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17800;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17797,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__17807 = cljs.core.next(clauses__$1);
var G__17808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__17809 = iter_result;
clauses__$1 = G__17807;
acc = G__17808;
navigator__$1 = G__17809;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__17820 = (function (){var temp__5459__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5459__auto__)){
var else$ = temp__5459__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__17823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(1),null);
var navigator__$1 = (function (){var or__10412__auto__ = new_navigator;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return navigator;
}
})();
var vec__17826 = (function (){var temp__5459__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5459__auto__)){
var p = temp__5459__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17826,(1),null);
var navigator__$2 = (function (){var or__10412__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__10412__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__10412__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__17829 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17829,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17829,(1),null);
var slots = (function (){var x__10764__auto__ = (1);
var y__10765__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__10764__auto__ = minpad;
var y__10765__auto__ = cljs.core.quot(total_pad,slots);
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__10400__auto__ = eol_str;
if(cljs.core.truth_(and__10400__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__10400__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_17880__$1 = slots;
var extra_pad_17881__$1 = extra_pad;
var strs_17882__$1 = strs;
var pad_only_17883 = (function (){var or__10412__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_17882__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_17882__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_17883))?cljs.core.first(strs_17882__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__10412__auto__ = pad_only_17883;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = cljs.core.next(strs_17882__$1);
if(or__10412__auto____$1){
return or__10412__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_17881__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__17886 = (slots_17880__$1 - (1));
var G__17887 = (extra_pad_17881__$1 - (1));
var G__17888 = (cljs.core.truth_(pad_only_17883)?strs_17882__$1:cljs.core.next(strs_17882__$1));
var G__17889 = false;
slots_17880__$1 = G__17886;
extra_pad_17881__$1 = G__17887;
strs_17882__$1 = G__17888;
pad_only_17883 = G__17889;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17890 = (function (writer,meta17891){
this.writer = writer;
this.meta17891 = meta17891;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17892,meta17891__$1){
var self__ = this;
var _17892__$1 = this;
return (new cljs.pprint.t_cljs$pprint17890(self__.writer,meta17891__$1));
});

cljs.pprint.t_cljs$pprint17890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17892){
var self__ = this;
var _17892__$1 = this;
return self__.meta17891;
});

cljs.pprint.t_cljs$pprint17890.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17890.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17896 = cljs.core._EQ_;
var expr__17897 = cljs.core.type(x);
if(cljs.core.truth_((pred__17896.cljs$core$IFn$_invoke$arity$2 ? pred__17896.cljs$core$IFn$_invoke$arity$2(String,expr__17897) : pred__17896.call(null,String,expr__17897)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__17896.cljs$core$IFn$_invoke$arity$2 ? pred__17896.cljs$core$IFn$_invoke$arity$2(Number,expr__17897) : pred__17896.call(null,Number,expr__17897)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17897)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17891], null);
});

cljs.pprint.t_cljs$pprint17890.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17890.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17890";

cljs.pprint.t_cljs$pprint17890.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint17890");
});

cljs.pprint.__GT_t_cljs$pprint17890 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint17890(writer__$1,meta17891){
return (new cljs.pprint.t_cljs$pprint17890(writer__$1,meta17891));
});

}

return (new cljs.pprint.t_cljs$pprint17890(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint17902 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17902 = (function (writer,meta17903){
this.writer = writer;
this.meta17903 = meta17903;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17904,meta17903__$1){
var self__ = this;
var _17904__$1 = this;
return (new cljs.pprint.t_cljs$pprint17902(self__.writer,meta17903__$1));
});

cljs.pprint.t_cljs$pprint17902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17904){
var self__ = this;
var _17904__$1 = this;
return self__.meta17903;
});

cljs.pprint.t_cljs$pprint17902.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint17902.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17905 = cljs.core._EQ_;
var expr__17906 = cljs.core.type(x);
if(cljs.core.truth_((pred__17905.cljs$core$IFn$_invoke$arity$2 ? pred__17905.cljs$core$IFn$_invoke$arity$2(String,expr__17906) : pred__17905.call(null,String,expr__17906)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__17905.cljs$core$IFn$_invoke$arity$2 ? pred__17905.cljs$core$IFn$_invoke$arity$2(Number,expr__17906) : pred__17905.call(null,Number,expr__17906)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17906)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint17902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta17903], null);
});

cljs.pprint.t_cljs$pprint17902.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17902.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17902";

cljs.pprint.t_cljs$pprint17902.cljs$lang$ctorPrWriter = (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint17902");
});

cljs.pprint.__GT_t_cljs$pprint17902 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint17902(writer__$1,meta17903){
return (new cljs.pprint.t_cljs$pprint17902(writer__$1,meta17903));
});

}

return (new cljs.pprint.t_cljs$pprint17902(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__10400__auto__ = first_QMARK_;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = f;
if(cljs.core.truth_(and__10400__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__10400__auto__ = m;
if(cljs.core.truth_(and__10400__auto__)){
return (m.index + (1));
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint17908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17908 = (function (writer,last_was_whitespace_QMARK_,meta17909){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta17909 = meta17909;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_17910,meta17909__$1){
var self__ = this;
var _17910__$1 = this;
return (new cljs.pprint.t_cljs$pprint17908(self__.writer,self__.last_was_whitespace_QMARK_,meta17909__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_17910){
var self__ = this;
var _17910__$1 = this;
return self__.meta17909;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17908.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17908.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17911 = cljs.core._EQ_;
var expr__17912 = cljs.core.type(x);
if(cljs.core.truth_((pred__17911.cljs$core$IFn$_invoke$arity$2 ? pred__17911.cljs$core$IFn$_invoke$arity$2(String,expr__17912) : pred__17911.call(null,String,expr__17912)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__17914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__17914);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__17911.cljs$core$IFn$_invoke$arity$2 ? pred__17911.cljs$core$IFn$_invoke$arity$2(Number,expr__17912) : pred__17911.call(null,Number,expr__17912)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17912)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17908.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta17909], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint17908.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17908.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17908";

cljs.pprint.t_cljs$pprint17908.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint17908");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint17908 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint17908(writer__$1,last_was_whitespace_QMARK___$1,meta17909){
return (new cljs.pprint.t_cljs$pprint17908(writer__$1,last_was_whitespace_QMARK___$1,meta17909));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint17908(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint17919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint17919 = (function (writer,capped,meta17920){
this.writer = writer;
this.capped = capped;
this.meta17920 = meta17920;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint17919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_17921,meta17920__$1){
var self__ = this;
var _17921__$1 = this;
return (new cljs.pprint.t_cljs$pprint17919(self__.writer,self__.capped,meta17920__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint17919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_17921){
var self__ = this;
var _17921__$1 = this;
return self__.meta17920;
});})(capped))
;

cljs.pprint.t_cljs$pprint17919.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint17919.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__17922 = cljs.core._EQ_;
var expr__17923 = cljs.core.type(x);
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(String,expr__17923) : pred__17922.call(null,String,expr__17923)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__10400__auto__ = m;
if(cljs.core.truth_(and__10400__auto__)){
return m.index;
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__17922.cljs$core$IFn$_invoke$arity$2 ? pred__17922.cljs$core$IFn$_invoke$arity$2(Number,expr__17923) : pred__17922.call(null,Number,expr__17923)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__10400__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__10400__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__17923)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint17919.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta17920], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint17919.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint17919.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint17919";

cljs.pprint.t_cljs$pprint17919.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__11083__auto__,writer__11084__auto__,opt__11085__auto__){
return cljs.core._write(writer__11084__auto__,"cljs.pprint/t_cljs$pprint17919");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint17919 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint17919(writer__$1,capped__$1,meta17920){
return (new cljs.pprint.t_cljs$pprint17919(writer__$1,capped__$1,meta17920));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint17919(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_17935 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_17935;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_17946 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17947 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_17948 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_17949 = (((current_17948 < colnum_17946))?(colnum_17946 - current_17948):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_17947,(0)))?(0):(colinc_17947 - cljs.core.rem((current_17948 - colnum_17946),colinc_17947))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17949," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_17954 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_17955 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_17956 = (colrel_17954 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_17957 = (((colinc_17955 > (0)))?cljs.core.rem(start_col_17956,colinc_17955):(0));
var space_count_17958 = (colrel_17954 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_17957))?(0):(colinc_17955 - offset_17957)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_17958," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__17959 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17959,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_17964_17968 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_17965_17969 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_17965_17969;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_17964_17968;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17973_SHARP_,p2__17974_SHARP_,p3__17975_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__17973_SHARP_,p2__17974_SHARP_,p3__17975_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17976_SHARP_,p2__17977_SHARP_,p3__17978_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__17976_SHARP_,p2__17977_SHARP_,p3__17978_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17979_SHARP_,p2__17980_SHARP_,p3__17981_SHARP_){
return cljs.pprint.format_integer((10),p1__17979_SHARP_,p2__17980_SHARP_,p3__17981_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17982_SHARP_,p2__17983_SHARP_,p3__17984_SHARP_){
return cljs.pprint.format_integer((2),p1__17982_SHARP_,p2__17983_SHARP_,p3__17984_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17985_SHARP_,p2__17986_SHARP_,p3__17987_SHARP_){
return cljs.pprint.format_integer((8),p1__17985_SHARP_,p2__17986_SHARP_,p3__17987_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17988_SHARP_,p2__17989_SHARP_,p3__17990_SHARP_){
return cljs.pprint.format_integer((16),p1__17988_SHARP_,p2__17989_SHARP_,p3__17990_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__17991_SHARP_,p2__17992_SHARP_,p3__17993_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__17991_SHARP_),p1__17991_SHARP_,p2__17992_SHARP_,p3__17993_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__10400__auto__;
}
})())){
return (function (p1__17994_SHARP_,p2__17995_SHARP_,p3__17996_SHARP_){
return cljs.pprint.format_old_roman(p1__17994_SHARP_,p2__17995_SHARP_,p3__17996_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__17997_SHARP_,p2__17998_SHARP_,p3__17999_SHARP_){
return cljs.pprint.format_new_roman(p1__17997_SHARP_,p2__17998_SHARP_,p3__17999_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18000_SHARP_,p2__18001_SHARP_,p3__18002_SHARP_){
return cljs.pprint.format_ordinal_english(p1__18000_SHARP_,p2__18001_SHARP_,p3__18002_SHARP_);
});
} else {
return (function (p1__18003_SHARP_,p2__18004_SHARP_,p3__18005_SHARP_){
return cljs.pprint.format_cardinal_english(p1__18003_SHARP_,p2__18004_SHARP_,p3__18005_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__18026 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18026,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18026,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__11457__auto___18082 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18083 = (0);
while(true){
if((i_18083 < n__11457__auto___18082)){
cljs.pprint.prn();

var G__18084 = (i_18083 + (1));
i_18083 = G__18084;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_18085 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_18085 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__11457__auto___18086 = (cnt_18085 - (1));
var i_18087 = (0);
while(true){
if((i_18087 < n__11457__auto___18086)){
cljs.pprint.prn();

var G__18088 = (i_18087 + (1));
i_18087 = G__18088;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__11457__auto___18090 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_18091 = (0);
while(true){
if((i_18091 < n__11457__auto___18090)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__18092 = (i_18091 + (1));
i_18091 = G__18092;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__18007_SHARP_,p2__18009_SHARP_,p3__18010_SHARP_){
return cljs.pprint.relative_tabulation(p1__18007_SHARP_,p2__18009_SHARP_,p3__18010_SHARP_);
});
} else {
return (function (p1__18011_SHARP_,p2__18012_SHARP_,p3__18013_SHARP_){
return cljs.pprint.absolute_tabulation(p1__18011_SHARP_,p2__18012_SHARP_,p3__18013_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__18032 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18032,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18032,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__18035 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18035,(1),null);
var vec__18038 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18038,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18038,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__10400__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__18014_SHARP_,p2__18015_SHARP_,p3__18016_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__18014_SHARP_,p2__18015_SHARP_,p3__18016_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__10400__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__10400__auto__ = arg1;
if(cljs.core.truth_(and__10400__auto__)){
var and__10400__auto____$1 = arg2;
if(cljs.core.truth_(and__10400__auto____$1)){
return arg3;
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__10400__auto__ = arg1;
if(cljs.core.truth_(and__10400__auto__)){
return arg2;
} else {
return and__10400__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__18052 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18052,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__18055 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18055,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__18107){
var vec__18108 = p__18107;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18108,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__18116){
var vec__18117 = p__18116;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18117,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__18121){
var vec__18122 = p__18121;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__10400__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__10400__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__10400__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__10400__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__10400__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__10400__auto__){
var and__10400__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__10400__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__10400__auto____$1;
}
} else {
return and__10400__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__10771__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__10772__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__10771__auto__ < y__10772__auto__) ? x__10771__auto__ : y__10772__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__18125_SHARP_,p2__18126_SHARP_){
var val = cljs.core.first(p1__18125_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__18126_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__18126_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__18125_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__11294__auto__ = (function cljs$pprint$map_params_$_iter__18130(s__18131){
return (new cljs.core.LazySeq(null,(function (){
var s__18131__$1 = s__18131;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__18131__$1);
if(temp__5459__auto__){
var s__18131__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18131__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__18131__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__18133 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__18132 = (0);
while(true){
if((i__18132 < size__11293__auto__)){
var vec__18134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__18132);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18134,(0),null);
var vec__18137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18134,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18137,(0),null);
cljs.core.chunk_append(b__18133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__18152 = (i__18132 + (1));
i__18132 = G__18152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18133),cljs$pprint$map_params_$_iter__18130(cljs.core.chunk_rest(s__18131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18133),null);
}
} else {
var vec__18140 = cljs.core.first(s__18131__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140,(0),null);
var vec__18143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__18130(cljs.core.rest(s__18131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18127_SHARP_,p2__18128_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__18127_SHARP_,p2__18128_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18129_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__18129_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__18156 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156,(0),null);
var vec__18159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18159,(1),null);
var vec__18162 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(0),null);
var vec__18165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18162,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18165,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18165,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18165,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__18170 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__18170.cljs$core$IFn$_invoke$arity$2 ? fexpr__18170.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__18170.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__10400__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__10400__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__18179 = (function (){var G__18182 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__18183 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__18184 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__18182,G__18183,G__18184) : cljs.pprint.collect_clauses.call(null,G__18182,G__18183,G__18184));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18179,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18179,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__18185){
var vec__18186 = p__18185;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18186,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18186,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18186,(2),null);
var vec__18189 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18189,(0),null);
var vec__18192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18189,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18192,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_18198 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_18198){
return (function (p__18199){
var vec__18200 = p__18199;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_18198))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_18198;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__10412__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__18204 = cljs.core.next(format__$1);
format__$1 = G__18204;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__18207 = arguments.length;
switch (G__18207) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__10400__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__10400__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_18208 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_18208;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__18209 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18209,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18209,(1),null);
var vec__18212 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__18221 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__18221) : cljs.pprint.reader_macros.call(null,G__18221));
})();
if(cljs.core.truth_((function (){var and__10400__auto__ = macro_char;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__10400__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18222_18229 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18223_18230 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count18227_18231 = (0);
var alis_18232__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18227_18231 < cljs.core._STAR_print_length_STAR_))){
if(alis_18232__$1){
cljs.pprint.write_out(cljs.core.first(alis_18232__$1));

if(cljs.core.next(alis_18232__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18233 = (length_count18227_18231 + (1));
var G__18234 = cljs.core.next(alis_18232__$1);
length_count18227_18231 = G__18233;
alis_18232__$1 = G__18234;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18223_18230;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18222_18229;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18235_18241 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18236_18242 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18237_18243 = (0);
var aseq_18244 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18237_18243 < cljs.core._STAR_print_length_STAR_))){
if(aseq_18244){
cljs.pprint.write_out(cljs.core.first(aseq_18244));

if(cljs.core.next(aseq_18244)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18245 = (length_count18237_18243 + (1));
var G__18246 = cljs.core.next(aseq_18244);
length_count18237_18243 = G__18245;
aseq_18244 = G__18246;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18236_18242;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18235_18241;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__16444__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18247__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18247 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18248__i = 0, G__18248__a = new Array(arguments.length -  0);
while (G__18248__i < G__18248__a.length) {G__18248__a[G__18248__i] = arguments[G__18248__i + 0]; ++G__18248__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18248__a,0,null);
} 
return G__18247__delegate.call(this,args__16446__auto__);};
G__18247.cljs$lang$maxFixedArity = 0;
G__18247.cljs$lang$applyTo = (function (arglist__18249){
var args__16446__auto__ = cljs.core.seq(arglist__18249);
return G__18247__delegate(args__16446__auto__);
});
G__18247.cljs$core$IFn$_invoke$arity$variadic = G__18247__delegate;
return G__18247;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__18250 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__18256 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",15,1,9841,9841,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__18256.cljs$core$IFn$_invoke$arity$1 ? fexpr__18256.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__18256.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18250,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18250,(1),null);
var amap__$1 = (function (){var or__10412__auto__ = lift_map;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18257_18269 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18258_18270 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count18262_18271 = (0);
var aseq_18272 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18262_18271 < cljs.core._STAR_print_length_STAR_))){
if(aseq_18272){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18263_18273 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18264_18274 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_18272));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_18272)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18264_18274;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18263_18273;
}}


if(cljs.core.next(aseq_18272)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18277 = (length_count18262_18271 + (1));
var G__18278 = cljs.core.next(aseq_18272);
length_count18262_18271 = G__18277;
aseq_18272 = G__18278;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18258_18270;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18257_18269;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__16444__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18289__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18289 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18290__i = 0, G__18290__a = new Array(arguments.length -  0);
while (G__18290__i < G__18290__a.length) {G__18290__a[G__18290__i] = arguments[G__18290__i + 0]; ++G__18290__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18290__a,0,null);
} 
return G__18289__delegate.call(this,args__16446__auto__);};
G__18289.cljs$lang$maxFixedArity = 0;
G__18289.cljs$lang$applyTo = (function (arglist__18295){
var args__16446__auto__ = cljs.core.seq(arglist__18295);
return G__18289__delegate(args__16446__auto__);
});
G__18289.cljs$core$IFn$_invoke$arity$variadic = G__18289__delegate;
return G__18289;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__10412__auto__ = (function (){var temp__5459__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5459__auto__)){
var match = temp__5459__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18296_18300 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18297_18301 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__10400__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__10400__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__10400__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18297_18301;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18296_18300;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__16444__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18302__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18302 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18303__i = 0, G__18303__a = new Array(arguments.length -  0);
while (G__18303__i < G__18303__a.length) {G__18303__a[G__18303__i] = arguments[G__18303__i + 0]; ++G__18303__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18303__a,0,null);
} 
return G__18302__delegate.call(this,args__16446__auto__);};
G__18302.cljs$lang$maxFixedArity = 0;
G__18302.cljs$lang$applyTo = (function (arglist__18304){
var args__16446__auto__ = cljs.core.seq(arglist__18304);
return G__18302__delegate(args__16446__auto__);
});
G__18302.cljs$core$IFn$_invoke$arity$variadic = G__18302__delegate;
return G__18302;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__18306 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18306,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18306,(1),null);
var vec__18309 = reference;
var seq__18310 = cljs.core.seq(vec__18309);
var first__18311 = cljs.core.first(seq__18310);
var seq__18310__$1 = cljs.core.next(seq__18310);
var keyw = first__18311;
var args = seq__18310__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18312_18336 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18313_18337 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__18314_18338 = (function (){var format_in__16444__auto__ = "~w~:i";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18341__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18341 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18342__i = 0, G__18342__a = new Array(arguments.length -  0);
while (G__18342__i < G__18342__a.length) {G__18342__a[G__18342__i] = arguments[G__18342__i + 0]; ++G__18342__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18342__a,0,null);
} 
return G__18341__delegate.call(this,args__16446__auto__);};
G__18341.cljs$lang$maxFixedArity = 0;
G__18341.cljs$lang$applyTo = (function (arglist__18343){
var args__16446__auto__ = cljs.core.seq(arglist__18343);
return G__18341__delegate(args__16446__auto__);
});
G__18341.cljs$core$IFn$_invoke$arity$variadic = G__18341__delegate;
return G__18341;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18314_18338.cljs$core$IFn$_invoke$arity$1 ? fexpr__18314_18338.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__18314_18338.call(null,keyw));

var args_18344__$1 = args;
while(true){
if(cljs.core.seq(args_18344__$1)){
var fexpr__18318_18345 = (function (){var format_in__16444__auto__ = " ";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18346__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18346 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18347__i = 0, G__18347__a = new Array(arguments.length -  0);
while (G__18347__i < G__18347__a.length) {G__18347__a[G__18347__i] = arguments[G__18347__i + 0]; ++G__18347__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18347__a,0,null);
} 
return G__18346__delegate.call(this,args__16446__auto__);};
G__18346.cljs$lang$maxFixedArity = 0;
G__18346.cljs$lang$applyTo = (function (arglist__18348){
var args__16446__auto__ = cljs.core.seq(arglist__18348);
return G__18346__delegate(args__16446__auto__);
});
G__18346.cljs$core$IFn$_invoke$arity$variadic = G__18346__delegate;
return G__18346;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18318_18345.cljs$core$IFn$_invoke$arity$0 ? fexpr__18318_18345.cljs$core$IFn$_invoke$arity$0() : fexpr__18318_18345.call(null));

var arg_18349 = cljs.core.first(args_18344__$1);
if(cljs.core.sequential_QMARK_(arg_18349)){
var vec__18320_18350 = cljs.pprint.brackets(arg_18349);
var start_18351__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320_18350,(0),null);
var end_18352__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18320_18350,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18325_18353 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18326_18354 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_18351__$1,null,end_18352__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_18349),(3))) && ((cljs.core.second(arg_18349) instanceof cljs.core.Keyword))){
var vec__18329_18355 = arg_18349;
var ns_18356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329_18355,(0),null);
var kw_18357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329_18355,(1),null);
var lis_18358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329_18355,(2),null);
var fexpr__18332_18360 = (function (){var format_in__16444__auto__ = "~w ~w ";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18329_18355,ns_18356,kw_18357,lis_18358,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18367__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18367 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18372__i = 0, G__18372__a = new Array(arguments.length -  0);
while (G__18372__i < G__18372__a.length) {G__18372__a[G__18372__i] = arguments[G__18372__i + 0]; ++G__18372__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18372__a,0,null);
} 
return G__18367__delegate.call(this,args__16446__auto__);};
G__18367.cljs$lang$maxFixedArity = 0;
G__18367.cljs$lang$applyTo = (function (arglist__18373){
var args__16446__auto__ = cljs.core.seq(arglist__18373);
return G__18367__delegate(args__16446__auto__);
});
G__18367.cljs$core$IFn$_invoke$arity$variadic = G__18367__delegate;
return G__18367;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18329_18355,ns_18356,kw_18357,lis_18358,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18332_18360.cljs$core$IFn$_invoke$arity$2 ? fexpr__18332_18360.cljs$core$IFn$_invoke$arity$2(ns_18356,kw_18357) : fexpr__18332_18360.call(null,ns_18356,kw_18357));

if(cljs.core.sequential_QMARK_(lis_18358)){
var fexpr__18333_18377 = (function (){var format_in__16444__auto__ = ((cljs.core.vector_QMARK_(lis_18358))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18329_18355,ns_18356,kw_18357,lis_18358,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18378__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18378 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18380__i = 0, G__18380__a = new Array(arguments.length -  0);
while (G__18380__i < G__18380__a.length) {G__18380__a[G__18380__i] = arguments[G__18380__i + 0]; ++G__18380__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18380__a,0,null);
} 
return G__18378__delegate.call(this,args__16446__auto__);};
G__18378.cljs$lang$maxFixedArity = 0;
G__18378.cljs$lang$applyTo = (function (arglist__18381){
var args__16446__auto__ = cljs.core.seq(arglist__18381);
return G__18378__delegate(args__16446__auto__);
});
G__18378.cljs$core$IFn$_invoke$arity$variadic = G__18378__delegate;
return G__18378;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18329_18355,ns_18356,kw_18357,lis_18358,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18333_18377.cljs$core$IFn$_invoke$arity$1 ? fexpr__18333_18377.cljs$core$IFn$_invoke$arity$1(lis_18358) : fexpr__18333_18377.call(null,lis_18358));
} else {
cljs.pprint.write_out(lis_18358);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16444__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18382__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18382 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18383__i = 0, G__18383__a = new Array(arguments.length -  0);
while (G__18383__i < G__18383__a.length) {G__18383__a[G__18383__i] = arguments[G__18383__i + 0]; ++G__18383__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18383__a,0,null);
} 
return G__18382__delegate.call(this,args__16446__auto__);};
G__18382.cljs$lang$maxFixedArity = 0;
G__18382.cljs$lang$applyTo = (function (arglist__18384){
var args__16446__auto__ = cljs.core.seq(arglist__18384);
return G__18382__delegate(args__16446__auto__);
});
G__18382.cljs$core$IFn$_invoke$arity$variadic = G__18382__delegate;
return G__18382;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18325_18353,_STAR_current_length_STAR_18326_18354,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})(),arg_18349);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18326_18354;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18325_18353;
}}


if(cljs.core.next(args_18344__$1)){
var fexpr__18334_18385 = (function (){var format_in__16444__auto__ = "~_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18386__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18386 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18387__i = 0, G__18387__a = new Array(arguments.length -  0);
while (G__18387__i < G__18387__a.length) {G__18387__a[G__18387__i] = arguments[G__18387__i + 0]; ++G__18387__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18387__a,0,null);
} 
return G__18386__delegate.call(this,args__16446__auto__);};
G__18386.cljs$lang$maxFixedArity = 0;
G__18386.cljs$lang$applyTo = (function (arglist__18388){
var args__16446__auto__ = cljs.core.seq(arglist__18388);
return G__18386__delegate(args__16446__auto__);
});
G__18386.cljs$core$IFn$_invoke$arity$variadic = G__18386__delegate;
return G__18386;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,vec__18320_18350,start_18351__$1,end_18352__$1,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18334_18385.cljs$core$IFn$_invoke$arity$0 ? fexpr__18334_18385.cljs$core$IFn$_invoke$arity$0() : fexpr__18334_18385.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_18349);

if(cljs.core.next(args_18344__$1)){
var fexpr__18335_18389 = (function (){var format_in__16444__auto__ = "~:_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (args_18344__$1,format_in__16444__auto__,cf__16445__auto__,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args){
return (function() { 
var G__18391__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18391 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18394__i = 0, G__18394__a = new Array(arguments.length -  0);
while (G__18394__i < G__18394__a.length) {G__18394__a[G__18394__i] = arguments[G__18394__i + 0]; ++G__18394__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18394__a,0,null);
} 
return G__18391__delegate.call(this,args__16446__auto__);};
G__18391.cljs$lang$maxFixedArity = 0;
G__18391.cljs$lang$applyTo = (function (arglist__18395){
var args__16446__auto__ = cljs.core.seq(arglist__18395);
return G__18391__delegate(args__16446__auto__);
});
G__18391.cljs$core$IFn$_invoke$arity$variadic = G__18391__delegate;
return G__18391;
})()
;
;})(args_18344__$1,format_in__16444__auto__,cf__16445__auto__,arg_18349,_STAR_current_level_STAR_18312_18336,_STAR_current_length_STAR_18313_18337,vec__18306,start,end,vec__18309,seq__18310,first__18311,seq__18310__$1,keyw,args))
})();
(fexpr__18335_18389.cljs$core$IFn$_invoke$arity$0 ? fexpr__18335_18389.cljs$core$IFn$_invoke$arity$0() : fexpr__18335_18389.call(null));
} else {
}
}

var G__18396 = cljs.core.next(args_18344__$1);
args_18344__$1 = G__18396;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18313_18337;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18312_18336;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__18401 = alis;
var seq__18402 = cljs.core.seq(vec__18401);
var first__18403 = cljs.core.first(seq__18402);
var seq__18402__$1 = cljs.core.next(seq__18402);
var ns_sym = first__18403;
var first__18403__$1 = cljs.core.first(seq__18402__$1);
var seq__18402__$2 = cljs.core.next(seq__18402__$1);
var ns_name = first__18403__$1;
var stuff = seq__18402__$2;
var vec__18404 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18404,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18404,(1),null);
var vec__18407 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18407,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18407,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18410_18418 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18411_18419 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18412_18420 = (function (){var format_in__16444__auto__ = "~w ~1I~@_~w";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references){
return (function() { 
var G__18421__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18421 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18422__i = 0, G__18422__a = new Array(arguments.length -  0);
while (G__18422__i < G__18422__a.length) {G__18422__a[G__18422__i] = arguments[G__18422__i + 0]; ++G__18422__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18422__a,0,null);
} 
return G__18421__delegate.call(this,args__16446__auto__);};
G__18421.cljs$lang$maxFixedArity = 0;
G__18421.cljs$lang$applyTo = (function (arglist__18423){
var args__16446__auto__ = cljs.core.seq(arglist__18423);
return G__18421__delegate(args__16446__auto__);
});
G__18421.cljs$core$IFn$_invoke$arity$variadic = G__18421__delegate;
return G__18421;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references))
})();
(fexpr__18412_18420.cljs$core$IFn$_invoke$arity$2 ? fexpr__18412_18420.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__18412_18420.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__10412__auto__ = doc_str;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = attr_map;
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__18413_18424 = (function (){var format_in__16444__auto__ = "~@:_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references){
return (function() { 
var G__18427__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18427 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18428__i = 0, G__18428__a = new Array(arguments.length -  0);
while (G__18428__i < G__18428__a.length) {G__18428__a[G__18428__i] = arguments[G__18428__i + 0]; ++G__18428__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18428__a,0,null);
} 
return G__18427__delegate.call(this,args__16446__auto__);};
G__18427.cljs$lang$maxFixedArity = 0;
G__18427.cljs$lang$applyTo = (function (arglist__18429){
var args__16446__auto__ = cljs.core.seq(arglist__18429);
return G__18427__delegate(args__16446__auto__);
});
G__18427.cljs$core$IFn$_invoke$arity$variadic = G__18427__delegate;
return G__18427;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references))
})();
(fexpr__18413_18424.cljs$core$IFn$_invoke$arity$0 ? fexpr__18413_18424.cljs$core$IFn$_invoke$arity$0() : fexpr__18413_18424.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__10412__auto__ = attr_map;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__18415_18430 = attr_map;
var G__18416_18431 = cljs.core.seq(references);
var fexpr__18414_18432 = (function (){var format_in__16444__auto__ = "~w~:[~;~:@_~]";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,G__18415_18430,G__18416_18431,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references){
return (function() { 
var G__18433__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18433 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18434__i = 0, G__18434__a = new Array(arguments.length -  0);
while (G__18434__i < G__18434__a.length) {G__18434__a[G__18434__i] = arguments[G__18434__i + 0]; ++G__18434__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18434__a,0,null);
} 
return G__18433__delegate.call(this,args__16446__auto__);};
G__18433.cljs$lang$maxFixedArity = 0;
G__18433.cljs$lang$applyTo = (function (arglist__18435){
var args__16446__auto__ = cljs.core.seq(arglist__18435);
return G__18433__delegate(args__16446__auto__);
});
G__18433.cljs$core$IFn$_invoke$arity$variadic = G__18433__delegate;
return G__18433;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,G__18415_18430,G__18416_18431,_STAR_current_level_STAR_18410_18418,_STAR_current_length_STAR_18411_18419,vec__18401,seq__18402,first__18403,seq__18402__$1,ns_sym,first__18403__$1,seq__18402__$2,ns_name,stuff,vec__18404,doc_str,stuff__$1,vec__18407,attr_map,references))
})();
(fexpr__18414_18432.cljs$core$IFn$_invoke$arity$2 ? fexpr__18414_18432.cljs$core$IFn$_invoke$arity$2(G__18415_18430,G__18416_18431) : fexpr__18414_18432.call(null,G__18415_18430,G__18416_18431));
} else {
}

var references_18440__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_18440__$1));

var temp__5459__auto___18441 = cljs.core.next(references_18440__$1);
if(temp__5459__auto___18441){
var references_18442__$2 = temp__5459__auto___18441;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18443 = references_18442__$2;
references_18440__$1 = G__18443;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18411_18419;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18410_18418;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__16444__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18448__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18448 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18449__i = 0, G__18449__a = new Array(arguments.length -  0);
while (G__18449__i < G__18449__a.length) {G__18449__a[G__18449__i] = arguments[G__18449__i + 0]; ++G__18449__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18449__a,0,null);
} 
return G__18448__delegate.call(this,args__16446__auto__);};
G__18448.cljs$lang$maxFixedArity = 0;
G__18448.cljs$lang$applyTo = (function (arglist__18450){
var args__16446__auto__ = cljs.core.seq(arglist__18450);
return G__18448__delegate(args__16446__auto__);
});
G__18448.cljs$core$IFn$_invoke$arity$variadic = G__18448__delegate;
return G__18448;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__18454_18459 = (function (){var format_in__16444__auto__ = " ~_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18460__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18460 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18461__i = 0, G__18461__a = new Array(arguments.length -  0);
while (G__18461__i < G__18461__a.length) {G__18461__a[G__18461__i] = arguments[G__18461__i + 0]; ++G__18461__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18461__a,0,null);
} 
return G__18460__delegate.call(this,args__16446__auto__);};
G__18460.cljs$lang$maxFixedArity = 0;
G__18460.cljs$lang$applyTo = (function (arglist__18462){
var args__16446__auto__ = cljs.core.seq(arglist__18462);
return G__18460__delegate(args__16446__auto__);
});
G__18460.cljs$core$IFn$_invoke$arity$variadic = G__18460__delegate;
return G__18460;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
(fexpr__18454_18459.cljs$core$IFn$_invoke$arity$0 ? fexpr__18454_18459.cljs$core$IFn$_invoke$arity$0() : fexpr__18454_18459.call(null));
} else {
var fexpr__18457_18463 = (function (){var format_in__16444__auto__ = " ~@_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18464__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18464 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18467__i = 0, G__18467__a = new Array(arguments.length -  0);
while (G__18467__i < G__18467__a.length) {G__18467__a[G__18467__i] = arguments[G__18467__i + 0]; ++G__18467__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18467__a,0,null);
} 
return G__18464__delegate.call(this,args__16446__auto__);};
G__18464.cljs$lang$maxFixedArity = 0;
G__18464.cljs$lang$applyTo = (function (arglist__18468){
var args__16446__auto__ = cljs.core.seq(arglist__18468);
return G__18464__delegate(args__16446__auto__);
});
G__18464.cljs$core$IFn$_invoke$arity$variadic = G__18464__delegate;
return G__18464;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
(fexpr__18457_18463.cljs$core$IFn$_invoke$arity$0 ? fexpr__18457_18463.cljs$core$IFn$_invoke$arity$0() : fexpr__18457_18463.call(null));
}

var fexpr__18458 = (function (){var format_in__16444__auto__ = "~{~w~^ ~_~}";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18473__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18473 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18474__i = 0, G__18474__a = new Array(arguments.length -  0);
while (G__18474__i < G__18474__a.length) {G__18474__a[G__18474__i] = arguments[G__18474__i + 0]; ++G__18474__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18474__a,0,null);
} 
return G__18473__delegate.call(this,args__16446__auto__);};
G__18473.cljs$lang$maxFixedArity = 0;
G__18473.cljs$lang$applyTo = (function (arglist__18476){
var args__16446__auto__ = cljs.core.seq(arglist__18476);
return G__18473__delegate(args__16446__auto__);
});
G__18473.cljs$core$IFn$_invoke$arity$variadic = G__18473__delegate;
return G__18473;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
return (fexpr__18458.cljs$core$IFn$_invoke$arity$1 ? fexpr__18458.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18458.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__18477 = (function (){var format_in__16444__auto__ = " ~_~{~w~^ ~_~}";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18482__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18482 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18483__i = 0, G__18483__a = new Array(arguments.length -  0);
while (G__18483__i < G__18483__a.length) {G__18483__a[G__18483__i] = arguments[G__18483__i + 0]; ++G__18483__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18483__a,0,null);
} 
return G__18482__delegate.call(this,args__16446__auto__);};
G__18482.cljs$lang$maxFixedArity = 0;
G__18482.cljs$lang$applyTo = (function (arglist__18484){
var args__16446__auto__ = cljs.core.seq(arglist__18484);
return G__18482__delegate(args__16446__auto__);
});
G__18482.cljs$core$IFn$_invoke$arity$variadic = G__18482__delegate;
return G__18482;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
return (fexpr__18477.cljs$core$IFn$_invoke$arity$1 ? fexpr__18477.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__18477.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__18485 = alis;
var seq__18486 = cljs.core.seq(vec__18485);
var first__18487 = cljs.core.first(seq__18486);
var seq__18486__$1 = cljs.core.next(seq__18486);
var defn_sym = first__18487;
var first__18487__$1 = cljs.core.first(seq__18486__$1);
var seq__18486__$2 = cljs.core.next(seq__18486__$1);
var defn_name = first__18487__$1;
var stuff = seq__18486__$2;
var vec__18488 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18488,(1),null);
var vec__18491 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18491,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18494_18506 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18495_18507 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__18496_18508 = (function (){var format_in__16444__auto__ = "~w ~1I~@_~w";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2){
return (function() { 
var G__18513__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18513 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18514__i = 0, G__18514__a = new Array(arguments.length -  0);
while (G__18514__i < G__18514__a.length) {G__18514__a[G__18514__i] = arguments[G__18514__i + 0]; ++G__18514__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18514__a,0,null);
} 
return G__18513__delegate.call(this,args__16446__auto__);};
G__18513.cljs$lang$maxFixedArity = 0;
G__18513.cljs$lang$applyTo = (function (arglist__18515){
var args__16446__auto__ = cljs.core.seq(arglist__18515);
return G__18513__delegate(args__16446__auto__);
});
G__18513.cljs$core$IFn$_invoke$arity$variadic = G__18513__delegate;
return G__18513;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2))
})();
(fexpr__18496_18508.cljs$core$IFn$_invoke$arity$2 ? fexpr__18496_18508.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__18496_18508.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__18497_18520 = (function (){var format_in__16444__auto__ = " ~_~w";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2){
return (function() { 
var G__18522__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18522 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18523__i = 0, G__18523__a = new Array(arguments.length -  0);
while (G__18523__i < G__18523__a.length) {G__18523__a[G__18523__i] = arguments[G__18523__i + 0]; ++G__18523__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18523__a,0,null);
} 
return G__18522__delegate.call(this,args__16446__auto__);};
G__18522.cljs$lang$maxFixedArity = 0;
G__18522.cljs$lang$applyTo = (function (arglist__18527){
var args__16446__auto__ = cljs.core.seq(arglist__18527);
return G__18522__delegate(args__16446__auto__);
});
G__18522.cljs$core$IFn$_invoke$arity$variadic = G__18522__delegate;
return G__18522;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2))
})();
(fexpr__18497_18520.cljs$core$IFn$_invoke$arity$1 ? fexpr__18497_18520.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__18497_18520.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__18498_18529 = (function (){var format_in__16444__auto__ = " ~_~w";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2){
return (function() { 
var G__18530__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18530 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18531__i = 0, G__18531__a = new Array(arguments.length -  0);
while (G__18531__i < G__18531__a.length) {G__18531__a[G__18531__i] = arguments[G__18531__i + 0]; ++G__18531__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18531__a,0,null);
} 
return G__18530__delegate.call(this,args__16446__auto__);};
G__18530.cljs$lang$maxFixedArity = 0;
G__18530.cljs$lang$applyTo = (function (arglist__18532){
var args__16446__auto__ = cljs.core.seq(arglist__18532);
return G__18530__delegate(args__16446__auto__);
});
G__18530.cljs$core$IFn$_invoke$arity$variadic = G__18530__delegate;
return G__18530;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18494_18506,_STAR_current_length_STAR_18495_18507,vec__18485,seq__18486,first__18487,seq__18486__$1,defn_sym,first__18487__$1,seq__18486__$2,defn_name,stuff,vec__18488,doc_str,stuff__$1,vec__18491,attr_map,stuff__$2))
})();
(fexpr__18498_18529.cljs$core$IFn$_invoke$arity$1 ? fexpr__18498_18529.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__18498_18529.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__10412__auto__ = doc_str;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__10412__auto__ = doc_str;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18495_18507;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18494_18506;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18539_18548 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18540_18549 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count18541_18550 = (0);
var binding_18551 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18541_18550 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_18551)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18542_18552 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18543_18553 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_18551));

if(cljs.core.next(binding_18551)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_18551));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18543_18553;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18542_18552;
}}


if(cljs.core.next(cljs.core.rest(binding_18551))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18554 = (length_count18541_18550 + (1));
var G__18555 = cljs.core.next(cljs.core.rest(binding_18551));
length_count18541_18550 = G__18554;
binding_18551 = G__18555;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18540_18549;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18539_18548;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18556_18565 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18557_18566 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__18560_18567 = (function (){var format_in__16444__auto__ = "~w ~1I~@_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18556_18565,_STAR_current_length_STAR_18557_18566,base_sym){
return (function() { 
var G__18568__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18568 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18569__i = 0, G__18569__a = new Array(arguments.length -  0);
while (G__18569__i < G__18569__a.length) {G__18569__a[G__18569__i] = arguments[G__18569__i + 0]; ++G__18569__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18569__a,0,null);
} 
return G__18568__delegate.call(this,args__16446__auto__);};
G__18568.cljs$lang$maxFixedArity = 0;
G__18568.cljs$lang$applyTo = (function (arglist__18570){
var args__16446__auto__ = cljs.core.seq(arglist__18570);
return G__18568__delegate(args__16446__auto__);
});
G__18568.cljs$core$IFn$_invoke$arity$variadic = G__18568__delegate;
return G__18568;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18556_18565,_STAR_current_length_STAR_18557_18566,base_sym))
})();
(fexpr__18560_18567.cljs$core$IFn$_invoke$arity$1 ? fexpr__18560_18567.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__18560_18567.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__18564_18571 = cljs.core.next(cljs.core.rest(alis));
var fexpr__18563_18572 = (function (){var format_in__16444__auto__ = " ~_~{~w~^ ~_~}";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,G__18564_18571,_STAR_current_level_STAR_18556_18565,_STAR_current_length_STAR_18557_18566,base_sym){
return (function() { 
var G__18573__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18573 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18574__i = 0, G__18574__a = new Array(arguments.length -  0);
while (G__18574__i < G__18574__a.length) {G__18574__a[G__18574__i] = arguments[G__18574__i + 0]; ++G__18574__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18574__a,0,null);
} 
return G__18573__delegate.call(this,args__16446__auto__);};
G__18573.cljs$lang$maxFixedArity = 0;
G__18573.cljs$lang$applyTo = (function (arglist__18575){
var args__16446__auto__ = cljs.core.seq(arglist__18575);
return G__18573__delegate(args__16446__auto__);
});
G__18573.cljs$core$IFn$_invoke$arity$variadic = G__18573__delegate;
return G__18573;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,G__18564_18571,_STAR_current_level_STAR_18556_18565,_STAR_current_length_STAR_18557_18566,base_sym))
})();
(fexpr__18563_18572.cljs$core$IFn$_invoke$arity$1 ? fexpr__18563_18572.cljs$core$IFn$_invoke$arity$1(G__18564_18571) : fexpr__18563_18572.call(null,G__18564_18571));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18557_18566;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18556_18565;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__16444__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__){
return (function() { 
var G__18582__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18582 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18584__i = 0, G__18584__a = new Array(arguments.length -  0);
while (G__18584__i < G__18584__a.length) {G__18584__a[G__18584__i] = arguments[G__18584__i + 0]; ++G__18584__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18584__a,0,null);
} 
return G__18582__delegate.call(this,args__16446__auto__);};
G__18582.cljs$lang$maxFixedArity = 0;
G__18582.cljs$lang$applyTo = (function (arglist__18586){
var args__16446__auto__ = cljs.core.seq(arglist__18586);
return G__18582__delegate(args__16446__auto__);
});
G__18582.cljs$core$IFn$_invoke$arity$variadic = G__18582__delegate;
return G__18582;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18587_18592 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18588_18593 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count18589_18594 = (0);
var alis_18595__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18589_18594 < cljs.core._STAR_print_length_STAR_))){
if(alis_18595__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18590_18596 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18591_18597 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18595__$1));

if(cljs.core.next(alis_18595__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18595__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18591_18597;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18590_18596;
}}


if(cljs.core.next(cljs.core.rest(alis_18595__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18598 = (length_count18589_18594 + (1));
var G__18599 = cljs.core.next(cljs.core.rest(alis_18595__$1));
length_count18589_18594 = G__18598;
alis_18595__$1 = G__18599;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18588_18593;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18587_18592;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18600_18605 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18601_18606 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__16444__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18600_18605,_STAR_current_length_STAR_18601_18606){
return (function() { 
var G__18607__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18607 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18608__i = 0, G__18608__a = new Array(arguments.length -  0);
while (G__18608__i < G__18608__a.length) {G__18608__a[G__18608__i] = arguments[G__18608__i + 0]; ++G__18608__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18608__a,0,null);
} 
return G__18607__delegate.call(this,args__16446__auto__);};
G__18607.cljs$lang$maxFixedArity = 0;
G__18607.cljs$lang$applyTo = (function (arglist__18609){
var args__16446__auto__ = cljs.core.seq(arglist__18609);
return G__18607__delegate(args__16446__auto__);
});
G__18607.cljs$core$IFn$_invoke$arity$variadic = G__18607__delegate;
return G__18607;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_current_level_STAR_18600_18605,_STAR_current_length_STAR_18601_18606))
})(),alis);

var length_count18602_18610 = (0);
var alis_18611__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18602_18610 < cljs.core._STAR_print_length_STAR_))){
if(alis_18611__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18603_18612 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18604_18613 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_18611__$1));

if(cljs.core.next(alis_18611__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_18611__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18604_18613;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18603_18612;
}}


if(cljs.core.next(cljs.core.rest(alis_18611__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18617 = (length_count18602_18610 + (1));
var G__18618 = cljs.core.next(cljs.core.rest(alis_18611__$1));
length_count18602_18610 = G__18617;
alis_18611__$1 = G__18618;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18601_18606;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18600_18605;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_18625 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_18625,args,nlis){
return (function (p1__18621_SHARP_,p2__18622_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__18621_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18622_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_18625,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__18626 = (function (){var format_in__16444__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__16445__auto__ = ((typeof format_in__16444__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__16444__auto__) : cljs.pprint.cached_compile.call(null,format_in__16444__auto__)):format_in__16444__auto__);
return ((function (format_in__16444__auto__,cf__16445__auto__,_STAR_symbol_map_STAR_18625,args,nlis){
return (function() { 
var G__18627__delegate = function (args__16446__auto__){
var navigator__16447__auto__ = cljs.pprint.init_navigator(args__16446__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__16445__auto__,navigator__16447__auto__);
};
var G__18627 = function (var_args){
var args__16446__auto__ = null;
if (arguments.length > 0) {
var G__18628__i = 0, G__18628__a = new Array(arguments.length -  0);
while (G__18628__i < G__18628__a.length) {G__18628__a[G__18628__i] = arguments[G__18628__i + 0]; ++G__18628__i;}
  args__16446__auto__ = new cljs.core.IndexedSeq(G__18628__a,0,null);
} 
return G__18627__delegate.call(this,args__16446__auto__);};
G__18627.cljs$lang$maxFixedArity = 0;
G__18627.cljs$lang$applyTo = (function (arglist__18629){
var args__16446__auto__ = cljs.core.seq(arglist__18629);
return G__18627__delegate(args__16446__auto__);
});
G__18627.cljs$core$IFn$_invoke$arity$variadic = G__18627__delegate;
return G__18627;
})()
;
;})(format_in__16444__auto__,cf__16445__auto__,_STAR_symbol_map_STAR_18625,args,nlis))
})();
return (fexpr__18626.cljs$core$IFn$_invoke$arity$1 ? fexpr__18626.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__18626.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_18625;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_18631_18634 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_18632_18635 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count18633_18636 = (0);
var alis_18637__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count18633_18636 < cljs.core._STAR_print_length_STAR_))){
if(alis_18637__$1){
cljs.pprint.write_out(cljs.core.first(alis_18637__$1));

if(cljs.core.next(alis_18637__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__18638 = (length_count18633_18636 + (1));
var G__18639 = cljs.core.next(alis_18637__$1);
length_count18633_18636 = G__18638;
alis_18637__$1 = G__18639;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_18632_18635;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_18631_18634;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__11294__auto__ = (function cljs$pprint$two_forms_$_iter__18640(s__18641){
return (new cljs.core.LazySeq(null,(function (){
var s__18641__$1 = s__18641;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__18641__$1);
if(temp__5459__auto__){
var s__18641__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18641__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__18641__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__18643 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__18642 = (0);
while(true){
if((i__18642 < size__11293__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__18642);
cljs.core.chunk_append(b__18643,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__18646 = (i__18642 + (1));
i__18642 = G__18646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18643),cljs$pprint$two_forms_$_iter__18640(cljs.core.chunk_rest(s__18641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18643),null);
}
} else {
var x = cljs.core.first(s__18641__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__18640(cljs.core.rest(s__18641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__18650_SHARP_){
var vec__18651 = p1__18650_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18651,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18651,(1),null);
if(cljs.core.not((function (){var or__10412__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__18650_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5457__auto__ = (function (){var G__18658 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__18658) : cljs.pprint._STAR_code_table_STAR_.call(null,G__18658));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var special_form = temp__5457__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5457__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5457__auto__)){
var arg_num = temp__5457__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__11467__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11468__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11469__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11470__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11471__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__11471__auto__,method_table__11467__auto__,prefer_table__11468__auto__,method_cache__11469__auto__,cached_hierarchy__11470__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__10764__auto__ = (0);
var y__10765__auto__ = (width - cljs.core.count(s));
return ((x__10764__auto__ > y__10765__auto__) ? x__10764__auto__ : y__10765__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__18672 = arguments.length;
switch (G__18672) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_18673 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18673){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_18673){
return (function (p1__18668_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__18668_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_18673))
,rows));
});})(_STAR_print_newline_STAR_18673))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_18673){
return (function (p1__18669_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__18669_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_18673))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_18673){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__11294__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_18673){
return (function cljs$pprint$iter__18674(s__18675){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_18673){
return (function (){
var s__18675__$1 = s__18675;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__18675__$1);
if(temp__5459__auto__){
var s__18675__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18675__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__18675__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__18677 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__18676 = (0);
while(true){
if((i__18676 < size__11293__auto__)){
var vec__18678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__18676);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18678,(1),null);
cljs.core.chunk_append(b__18677,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__18691 = (i__18676 + (1));
i__18676 = G__18691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18677),cljs$pprint$iter__18674(cljs.core.chunk_rest(s__18675__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18677),null);
}
} else {
var vec__18681 = cljs.core.first(s__18675__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__18674(cljs.core.rest(s__18675__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_18673))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_18673))
;
return iter__11294__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__11294__auto__,widths,spacers,_STAR_print_newline_STAR_18673){
return (function (p1__18670_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__18670_SHARP_);
});})(iter__11294__auto__,widths,spacers,_STAR_print_newline_STAR_18673))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_18673))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__18685 = cljs.core.seq(rows);
var chunk__18686 = null;
var count__18687 = (0);
var i__18688 = (0);
while(true){
if((i__18688 < count__18687)){
var row = chunk__18686.cljs$core$IIndexed$_nth$arity$2(null,i__18688);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18692 = seq__18685;
var G__18693 = chunk__18686;
var G__18694 = count__18687;
var G__18695 = (i__18688 + (1));
seq__18685 = G__18692;
chunk__18686 = G__18693;
count__18687 = G__18694;
i__18688 = G__18695;
continue;
} else {
var temp__5459__auto__ = cljs.core.seq(seq__18685);
if(temp__5459__auto__){
var seq__18685__$1 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18685__$1)){
var c__11343__auto__ = cljs.core.chunk_first(seq__18685__$1);
var G__18696 = cljs.core.chunk_rest(seq__18685__$1);
var G__18697 = c__11343__auto__;
var G__18698 = cljs.core.count(c__11343__auto__);
var G__18699 = (0);
seq__18685 = G__18696;
chunk__18686 = G__18697;
count__18687 = G__18698;
i__18688 = G__18699;
continue;
} else {
var row = cljs.core.first(seq__18685__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__18700 = cljs.core.next(seq__18685__$1);
var G__18701 = null;
var G__18702 = (0);
var G__18703 = (0);
seq__18685 = G__18700;
chunk__18686 = G__18701;
count__18687 = G__18702;
i__18688 = G__18703;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_18673;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45196){
var map__45197 = p__45196;
var map__45197__$1 = ((((!((map__45197 == null)))?(((((map__45197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45197):map__45197);
var m = map__45197__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45199_45221 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45200_45222 = null;
var count__45201_45223 = (0);
var i__45202_45224 = (0);
while(true){
if((i__45202_45224 < count__45201_45223)){
var f_45225 = chunk__45200_45222.cljs$core$IIndexed$_nth$arity$2(null,i__45202_45224);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45225], 0));


var G__45226 = seq__45199_45221;
var G__45227 = chunk__45200_45222;
var G__45228 = count__45201_45223;
var G__45229 = (i__45202_45224 + (1));
seq__45199_45221 = G__45226;
chunk__45200_45222 = G__45227;
count__45201_45223 = G__45228;
i__45202_45224 = G__45229;
continue;
} else {
var temp__5457__auto___45230 = cljs.core.seq(seq__45199_45221);
if(temp__5457__auto___45230){
var seq__45199_45231__$1 = temp__5457__auto___45230;
if(cljs.core.chunked_seq_QMARK_(seq__45199_45231__$1)){
var c__4319__auto___45232 = cljs.core.chunk_first(seq__45199_45231__$1);
var G__45233 = cljs.core.chunk_rest(seq__45199_45231__$1);
var G__45234 = c__4319__auto___45232;
var G__45235 = cljs.core.count(c__4319__auto___45232);
var G__45236 = (0);
seq__45199_45221 = G__45233;
chunk__45200_45222 = G__45234;
count__45201_45223 = G__45235;
i__45202_45224 = G__45236;
continue;
} else {
var f_45237 = cljs.core.first(seq__45199_45231__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45237], 0));


var G__45238 = cljs.core.next(seq__45199_45231__$1);
var G__45239 = null;
var G__45240 = (0);
var G__45241 = (0);
seq__45199_45221 = G__45238;
chunk__45200_45222 = G__45239;
count__45201_45223 = G__45240;
i__45202_45224 = G__45241;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45242 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45242], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45242)))?cljs.core.second(arglists_45242):arglists_45242)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45203_45243 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45204_45244 = null;
var count__45205_45245 = (0);
var i__45206_45246 = (0);
while(true){
if((i__45206_45246 < count__45205_45245)){
var vec__45207_45247 = chunk__45204_45244.cljs$core$IIndexed$_nth$arity$2(null,i__45206_45246);
var name_45248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207_45247,(0),null);
var map__45210_45249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45207_45247,(1),null);
var map__45210_45250__$1 = ((((!((map__45210_45249 == null)))?(((((map__45210_45249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45210_45249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45210_45249):map__45210_45249);
var doc_45251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210_45250__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210_45250__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45248], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45252], 0));

if(cljs.core.truth_(doc_45251)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45251], 0));
} else {
}


var G__45253 = seq__45203_45243;
var G__45254 = chunk__45204_45244;
var G__45255 = count__45205_45245;
var G__45256 = (i__45206_45246 + (1));
seq__45203_45243 = G__45253;
chunk__45204_45244 = G__45254;
count__45205_45245 = G__45255;
i__45206_45246 = G__45256;
continue;
} else {
var temp__5457__auto___45257 = cljs.core.seq(seq__45203_45243);
if(temp__5457__auto___45257){
var seq__45203_45258__$1 = temp__5457__auto___45257;
if(cljs.core.chunked_seq_QMARK_(seq__45203_45258__$1)){
var c__4319__auto___45259 = cljs.core.chunk_first(seq__45203_45258__$1);
var G__45260 = cljs.core.chunk_rest(seq__45203_45258__$1);
var G__45261 = c__4319__auto___45259;
var G__45262 = cljs.core.count(c__4319__auto___45259);
var G__45263 = (0);
seq__45203_45243 = G__45260;
chunk__45204_45244 = G__45261;
count__45205_45245 = G__45262;
i__45206_45246 = G__45263;
continue;
} else {
var vec__45212_45264 = cljs.core.first(seq__45203_45258__$1);
var name_45265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45212_45264,(0),null);
var map__45215_45266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45212_45264,(1),null);
var map__45215_45267__$1 = ((((!((map__45215_45266 == null)))?(((((map__45215_45266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45215_45266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45215_45266):map__45215_45266);
var doc_45268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215_45267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45215_45267__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45265], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45269], 0));

if(cljs.core.truth_(doc_45268)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45268], 0));
} else {
}


var G__45271 = cljs.core.next(seq__45203_45258__$1);
var G__45272 = null;
var G__45273 = (0);
var G__45274 = (0);
seq__45203_45243 = G__45271;
chunk__45204_45244 = G__45272;
count__45205_45245 = G__45273;
i__45206_45246 = G__45274;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45217 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45218 = null;
var count__45219 = (0);
var i__45220 = (0);
while(true){
if((i__45220 < count__45219)){
var role = chunk__45218.cljs$core$IIndexed$_nth$arity$2(null,i__45220);
var temp__5457__auto___45275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___45275__$1)){
var spec_45276 = temp__5457__auto___45275__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_45276)], 0));
} else {
}


var G__45277 = seq__45217;
var G__45278 = chunk__45218;
var G__45279 = count__45219;
var G__45280 = (i__45220 + (1));
seq__45217 = G__45277;
chunk__45218 = G__45278;
count__45219 = G__45279;
i__45220 = G__45280;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__45217);
if(temp__5457__auto____$1){
var seq__45217__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45217__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__45217__$1);
var G__45281 = cljs.core.chunk_rest(seq__45217__$1);
var G__45282 = c__4319__auto__;
var G__45283 = cljs.core.count(c__4319__auto__);
var G__45284 = (0);
seq__45217 = G__45281;
chunk__45218 = G__45282;
count__45219 = G__45283;
i__45220 = G__45284;
continue;
} else {
var role = cljs.core.first(seq__45217__$1);
var temp__5457__auto___45285__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___45285__$2)){
var spec_45286 = temp__5457__auto___45285__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_45286)], 0));
} else {
}


var G__45287 = cljs.core.next(seq__45217__$1);
var G__45288 = null;
var G__45289 = (0);
var G__45290 = (0);
seq__45217 = G__45287;
chunk__45218 = G__45288;
count__45219 = G__45289;
i__45220 = G__45290;
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
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map

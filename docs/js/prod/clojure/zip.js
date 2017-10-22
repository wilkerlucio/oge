// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('clojure.zip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Creates a new zipper structure. 
 * 
 *   branch? is a fn that, given a node, returns true if can have
 *   children, even if it currently doesn't.
 * 
 *   children is a fn that, given a branch node, returns a seq of its
 *   children.
 * 
 *   make-node is a fn that, given an existing node and a seq of
 *   children, returns a new branch node with the supplied children.
 *   root is the root node.
 */
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$zip_SLASH_branch_QMARK_,branch_QMARK_,cljs.core.cst$kw$zip_SLASH_children,children,cljs.core.cst$kw$zip_SLASH_make_DASH_node,make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 *   given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.cst$kw$content),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,(function (){var and__10400__auto__ = children;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__10400__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((0)) : loc.call(null,(0)));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
var G__16130 = clojure.zip.node(loc);
var fexpr__16129 = cljs.core.cst$kw$zip_SLASH_branch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__16129.cljs$core$IFn$_invoke$arity$1 ? fexpr__16129.cljs$core$IFn$_invoke$arity$1(G__16130) : fexpr__16129.call(null,G__16130));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var G__16134 = clojure.zip.node(loc);
var fexpr__16133 = cljs.core.cst$kw$zip_SLASH_children.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__16133.cljs$core$IFn$_invoke$arity$1 ? fexpr__16133.cljs$core$IFn$_invoke$arity$1(G__16134) : fexpr__16133.call(null,G__16134));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 *   children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
var fexpr__16138 = cljs.core.cst$kw$zip_SLASH_make_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc));
return (fexpr__16138.cljs$core$IFn$_invoke$arity$2 ? fexpr__16138.cljs$core$IFn$_invoke$arity$2(node,children) : fexpr__16138.call(null,node,children));
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq(cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1)))));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1((loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 *   nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var vec__16150 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16150,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16150,(1),null);
var vec__16153 = clojure.zip.children(loc);
var seq__16154 = cljs.core.seq(vec__16153);
var first__16155 = cljs.core.first(seq__16154);
var seq__16154__$1 = cljs.core.next(seq__16154);
var c = first__16155;
var cnext = seq__16154__$1;
var cs = vec__16153;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$pnodes,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pnodes.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.cst$kw$ppath,path,cljs.core.cst$kw$r,cnext], null)], null),cljs.core.meta(loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 *   the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__16166 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166,(0),null);
var map__16173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16166,(1),null);
var map__16173__$1 = ((((!((map__16173 == null)))?((((map__16173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16173):map__16173);
var path = map__16173__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,cljs.core.cst$kw$pnodes);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,cljs.core.cst$kw$r);
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,cljs.core.cst$kw$changed_QMARK_);
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek(pnodes);
return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__10400__auto__ = ppath;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__10400__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return clojure.zip.node(loc);
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__16223 = p;
loc = G__16223;
continue;
} else {
return clojure.zip.node(loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__16228 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(0),null);
var map__16231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16228,(1),null);
var map__16231__$1 = ((((!((map__16231 == null)))?((((map__16231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16231):map__16231);
var path = map__16231__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16231__$1,cljs.core.cst$kw$l);
var vec__16232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16231__$1,cljs.core.cst$kw$r);
var seq__16233 = cljs.core.seq(vec__16232);
var first__16234 = cljs.core.first(seq__16233);
var seq__16233__$1 = cljs.core.next(seq__16233);
var r = first__16234;
var rnext = seq__16233__$1;
var rs = vec__16232;
if(cljs.core.truth_((function (){var and__10400__auto__ = path;
if(cljs.core.truth_(and__10400__auto__)){
return rs;
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,rnext], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__16274 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(0),null);
var map__16277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16274,(1),null);
var map__16277__$1 = ((((!((map__16277 == null)))?((((map__16277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16277):map__16277);
var path = map__16277__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16277__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16277__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__10400__auto__ = path;
if(cljs.core.truth_(and__10400__auto__)){
return r;
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,null], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__16293 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(0),null);
var map__16296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16293,(1),null);
var map__16296__$1 = ((((!((map__16296 == null)))?((((map__16296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16296):map__16296);
var path = map__16296__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16296__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16296__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__10400__auto__ = path;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.seq(l);
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__16335 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(0),null);
var map__16338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16335,(1),null);
var map__16338__$1 = ((((!((map__16338 == null)))?((((map__16338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16338):map__16338);
var path = map__16338__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16338__$1,cljs.core.cst$kw$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16338__$1,cljs.core.cst$kw$r);
if(cljs.core.truth_((function (){var and__10400__auto__ = path;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.seq(l);
} else {
return and__10400__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 *  without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__16373 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16373,(0),null);
var map__16376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16373,(1),null);
var map__16376__$1 = ((((!((map__16376 == null)))?((((map__16376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16376):map__16376);
var path = map__16376__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16376__$1,cljs.core.cst$kw$l);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 *   without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__16417 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417,(0),null);
var map__16420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16417,(1),null);
var map__16420__$1 = ((((!((map__16420 == null)))?((((map__16420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16420):map__16420);
var path = map__16420__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16420__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$r,cljs.core.cons(item,r),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__16453 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16453,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16453,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16493 = arguments.length;
var i__11692__auto___16495 = (0);
while(true){
if((i__11692__auto___16495 < len__11691__auto___16493)){
args__11698__auto__.push((arguments[i__11692__auto___16495]));

var G__16502 = (i__11692__auto___16495 + (1));
i__11692__auto___16495 = G__16502;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
});

clojure.zip.edit.cljs$lang$maxFixedArity = (2);

clojure.zip.edit.cljs$lang$applyTo = (function (seq16471){
var G__16472 = cljs.core.first(seq16471);
var seq16471__$1 = cljs.core.next(seq16471);
var G__16473 = cljs.core.first(seq16471__$1);
var seq16471__$2 = cljs.core.next(seq16471__$1);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__16472,G__16473,seq16471__$2);
});

/**
 * Inserts the item as the leftmost child of the node at this loc,
 *   without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 *   without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 *   the end, returns a distinguished loc detectable via end?. If already
 *   at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))))){
return loc;
} else {
var or__10412__auto__ = (function (){var and__10400__auto__ = clojure.zip.branch_QMARK_(loc);
if(cljs.core.truth_(and__10400__auto__)){
return clojure.zip.down(loc);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
var or__10412__auto____$1 = clojure.zip.right(loc);
if(cljs.core.truth_(or__10412__auto____$1)){
return or__10412__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__10412__auto____$2 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__10412__auto____$2)){
return or__10412__auto____$2;
} else {
var G__16531 = clojure.zip.up(p);
p = G__16531;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.cst$kw$end], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 *   at the root, returns nil.
 */
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__5457__auto__ = clojure.zip.left(loc);
if(cljs.core.truth_(temp__5457__auto__)){
var lloc = temp__5457__auto__;
var loc__$1 = lloc;
while(true){
var temp__5457__auto____$1 = (function (){var and__10400__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__10400__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto____$1)){
var child = temp__5457__auto____$1;
var G__16542 = clojure.zip.rightmost(child);
loc__$1 = G__16542;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,(loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1((1)) : loc.call(null,(1))));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 *   it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__16556 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(0),null);
var map__16559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16556,(1),null);
var map__16559__$1 = ((((!((map__16559 == null)))?((((map__16559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16559):map__16559);
var path = map__16559__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16559__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16559__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16559__$1,cljs.core.cst$kw$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16559__$1,cljs.core.cst$kw$r);
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count(l) > (0))){
var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
while(true){
var temp__5457__auto__ = (function (){var and__10400__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__10400__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__10400__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var child = temp__5457__auto__;
var G__16585 = clojure.zip.rightmost(child);
loc__$1 = G__16585;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__10400__auto__ = ppath;
if(cljs.core.truth_(and__10400__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__10400__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});

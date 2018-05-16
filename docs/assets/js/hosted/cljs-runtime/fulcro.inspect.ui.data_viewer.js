goog.provide('fulcro.inspect.ui.data_viewer');
goog.require('cljs.core');
goog.require('fulcro.client.mutations');
goog.require('fulcro_css.css');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
fulcro.inspect.ui.data_viewer.vec_max_inline = (2);
fulcro.inspect.ui.data_viewer.sequential_max_inline = (5);
fulcro.inspect.ui.data_viewer.map_max_inline = (10);
fulcro.inspect.ui.data_viewer.children_expandable_paths = (function fulcro$inspect$ui$data_viewer$children_expandable_paths(x){
var lookup = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),x,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentVector.EMPTY], null)], null);
var paths = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq(lookup)){
var vec__44461 = lookup;
var seq__44462 = cljs.core.seq(vec__44461);
var first__44463 = cljs.core.first(seq__44462);
var seq__44462__$1 = cljs.core.next(seq__44462);
var map__44464 = first__44463;
var map__44464__$1 = ((((!((map__44464 == null)))?(((((map__44464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44464):map__44464);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,new cljs.core.Keyword(null,"p","p",151049309));
var t = seq__44462__$1;
if(((cljs.core.sequential_QMARK_(e)) || (cljs.core.set_QMARK_(e)))){
var sub_paths = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (lookup,paths,vec__44461,seq__44462,first__44463,seq__44462__$1,map__44464,map__44464__$1,e,p,t){
return (function (i,x__$1){
if(cljs.core.coll_QMARK_(x__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),x__$1,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return null;
}
});})(lookup,paths,vec__44461,seq__44462,first__44463,seq__44462__$1,map__44464,map__44464__$1,e,p,t))
,e);
var G__44470 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(t,sub_paths));
var G__44471 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309)),sub_paths);
lookup = G__44470;
paths = G__44471;
continue;
} else {
if(cljs.core.map_QMARK_(e)){
var sub_paths = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (lookup,paths,vec__44461,seq__44462,first__44463,seq__44462__$1,map__44464,map__44464__$1,e,p,t){
return (function (p__44466){
var vec__44467 = p__44466;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467,(0),null);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467,(1),null);
if(cljs.core.coll_QMARK_(x__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),x__$1,new cljs.core.Keyword(null,"p","p",151049309),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,k)], null);
} else {
return null;
}
});})(lookup,paths,vec__44461,seq__44462,first__44463,seq__44462__$1,map__44464,map__44464__$1,e,p,t))
,e);
var G__44472 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(t,sub_paths));
var G__44473 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"p","p",151049309)),sub_paths);
lookup = G__44472;
paths = G__44473;
continue;
} else {
var G__44474 = t;
var G__44475 = paths;
lookup = G__44474;
paths = G__44475;
continue;

}
}
} else {
return paths;
}
break;
}
});
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-viewer","toggle","fulcro.inspect.ui.data-viewer/toggle",422454613,null),(function (env44477,_,p__44478){
var map__44479 = p__44478;
var map__44479__$1 = ((((!((map__44479 == null)))?(((((map__44479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44479):map__44479);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44479__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path","fulcro.inspect.ui.data-viewer/path",-2127421216));
var propagate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44479__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","propagate?","fulcro.inspect.ui.data-viewer/propagate?",964078102));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env44477;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env,map__44479,map__44479__$1,path,propagate_QMARK_){
return (function (){
var map__44481 = env;
var map__44481__$1 = ((((!((map__44481 == null)))?(((((map__44481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44481):map__44481);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44481__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44481__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var open_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
var content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
var toggled = cljs.core.not(open_QMARK_);
var paths = (function (){var G__44483 = cljs.core.PersistentArrayMap.createAsIfByAssoc([path,toggled]);
if(cljs.core.truth_(propagate_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__44483,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__44483,map__44481,map__44481__$1,state,ref,open_QMARK_,content,toggled,env,map__44479,map__44479__$1,path,propagate_QMARK_){
return (function (p1__44476_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,p1__44476_SHARP_),toggled],null));
});})(G__44483,map__44481,map__44481__$1,state,ref,open_QMARK_,content,toggled,env,map__44479,map__44479__$1,path,propagate_QMARK_))
),fulcro.inspect.ui.data_viewer.children_expandable_paths(content));
} else {
return G__44483;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.merge,paths], 0));
});})(env,map__44479,map__44479__$1,path,propagate_QMARK_))
], null);
})(),(function (){var env = env44477;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
fulcro.inspect.ui.data_viewer.keyable_QMARK_ = (function fulcro$inspect$ui$data_viewer$keyable_QMARK_(x){
return (((x == null)) || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || (typeof x === 'number') || (cljs.core.boolean_QMARK_(x)) || ((x instanceof cljs.core.Symbol)) || (cljs.core.uuid_QMARK_(x)) || (fulcro.client.primitives.tempid_QMARK_(x)) || (((cljs.core.vector_QMARK_(x)) && ((cljs.core.count(x) <= fulcro.inspect.ui.data_viewer.vec_max_inline)))));
});
fulcro.inspect.ui.data_viewer.render_ordered_list = (function fulcro$inspect$ui$data_viewer$render_ordered_list(p__44484,content){
var map__44485 = p__44484;
var map__44485__$1 = ((((!((map__44485 == null)))?(((((map__44485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44485):map__44485);
var input = map__44485__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"path-action","path-action",1211199268));
var linkable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44485__$1,new cljs.core.Keyword(null,"linkable?","linkable?",397018650));
var iter__4292__auto__ = ((function (map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_){
return (function fulcro$inspect$ui$data_viewer$render_ordered_list_$_iter__44487(s__44488){
return (new cljs.core.LazySeq(null,((function (map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_){
return (function (){
var s__44488__$1 = s__44488;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__44488__$1);
if(temp__5457__auto__){
var s__44488__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44488__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__44488__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__44490 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__44489 = (0);
while(true){
if((i__44489 < size__4291__auto__)){
var vec__44491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__44489);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44491,(1),null);
cljs.core.chunk_append(b__44490,fulcro.client.dom.macro_create_element_STAR_(["div",({"key": i, "className": new cljs.core.Keyword(null,"list-item","list-item",-999803634).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-item-index","list-item-index",-877133183).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_((function (){var and__3911__auto__ = linkable_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return path_action;
} else {
return and__3911__auto__;
}
})())?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"path-action","path-action",1211199268).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (i__44489,vec__44491,x,i,c__4290__auto__,size__4291__auto__,b__44490,s__44488__$2,temp__5457__auto__,map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_){
return (function (){
var G__44494 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (path_action.cljs$core$IFn$_invoke$arity$1 ? path_action.cljs$core$IFn$_invoke$arity$1(G__44494) : path_action.call(null,G__44494));
});})(i__44489,vec__44491,x,i,c__4290__auto__,size__4291__auto__,b__44490,s__44488__$2,temp__5457__auto__,map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_))
}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''))]):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')))])),fulcro.util.force_children((function (){var G__44495 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i);
var G__44496 = x;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44495,G__44496) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44495,G__44496));
})())]));

var G__44503 = (i__44489 + (1));
i__44489 = G__44503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44490),fulcro$inspect$ui$data_viewer$render_ordered_list_$_iter__44487(cljs.core.chunk_rest(s__44488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44490),null);
}
} else {
var vec__44497 = cljs.core.first(s__44488__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44497,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44497,(1),null);
return cljs.core.cons(fulcro.client.dom.macro_create_element_STAR_(["div",({"key": i, "className": new cljs.core.Keyword(null,"list-item","list-item",-999803634).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-item-index","list-item-index",-877133183).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_((function (){var and__3911__auto__ = linkable_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return path_action;
} else {
return and__3911__auto__;
}
})())?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"path-action","path-action",1211199268).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (vec__44497,x,i,s__44488__$2,temp__5457__auto__,map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_){
return (function (){
var G__44500 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (path_action.cljs$core$IFn$_invoke$arity$1 ? path_action.cljs$core$IFn$_invoke$arity$1(G__44500) : path_action.call(null,G__44500));
});})(vec__44497,x,i,s__44488__$2,temp__5457__auto__,map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_))
}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''))]):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')))])),fulcro.util.force_children((function (){var G__44501 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i);
var G__44502 = x;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44501,G__44502) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44501,G__44502));
})())]),fulcro$inspect$ui$data_viewer$render_ordered_list_$_iter__44487(cljs.core.rest(s__44488__$2)));
}
} else {
return null;
}
break;
}
});})(map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_))
,null,null));
});})(map__44485,map__44485__$1,input,css,path,path_action,linkable_QMARK_))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,content,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
fulcro.inspect.ui.data_viewer.render_sequential = (function fulcro$inspect$ui$data_viewer$render_sequential(p__44505,content){
var map__44506 = p__44505;
var map__44506__$1 = ((((!((map__44506 == null)))?(((((map__44506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44506):map__44506);
var input = map__44506__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var toggle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var open_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"open-close","open-close",-1701935171));
var static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44506__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"data-row","data-row",-1410898325).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(((((cljs.core.not(static_QMARK_)) && ((cljs.core.count(content) > fulcro.inspect.ui.data_viewer.vec_max_inline))))?fulcro.client.dom.macro_create_element_STAR_(["div",({"onClick": ((function (map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_){
return (function (p1__44504_SHARP_){
return (toggle.cljs$core$IFn$_invoke$arity$2 ? toggle.cljs$core$IFn$_invoke$arity$2(p1__44504_SHARP_,path) : toggle.call(null,p1__44504_SHARP_,path));
});})(map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_))
, "className": new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_((expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(path) : expanded.call(null,path)))?"\u25BC":"\u25B6"))]):null)),fulcro.util.force_children((cljs.core.truth_((expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(path) : expanded.call(null,path)))?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-container","list-container",2018934991).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.render_ordered_list(input,content))]):fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-inline","list-inline",-1998514879).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(cljs.core.first(open_close)),fulcro.util.force_children((function (){var iter__4292__auto__ = ((function (map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_){
return (function fulcro$inspect$ui$data_viewer$render_sequential_$_iter__44508(s__44509){
return (new cljs.core.LazySeq(null,((function (map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_){
return (function (){
var s__44509__$1 = s__44509;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__44509__$1);
if(temp__5457__auto__){
var s__44509__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44509__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__44509__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__44511 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__44510 = (0);
while(true){
if((i__44510 < size__4291__auto__)){
var vec__44512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__44510);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44512,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44512,(1),null);
cljs.core.chunk_append(b__44511,fulcro.client.dom.macro_create_element_STAR_(["div",({"key": i, "className": new cljs.core.Keyword(null,"list-inline-item","list-inline-item",1195637429).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__44515 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i);
var G__44516 = x;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44515,G__44516) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44515,G__44516));
})())]));

var G__44522 = (i__44510 + (1));
i__44510 = G__44522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44511),fulcro$inspect$ui$data_viewer$render_sequential_$_iter__44508(cljs.core.chunk_rest(s__44509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44511),null);
}
} else {
var vec__44517 = cljs.core.first(s__44509__$2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44517,(1),null);
return cljs.core.cons(fulcro.client.dom.macro_create_element_STAR_(["div",({"key": i, "className": new cljs.core.Keyword(null,"list-inline-item","list-inline-item",1195637429).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((function (){var G__44520 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,i);
var G__44521 = x;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44520,G__44521) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44520,G__44521));
})())]),fulcro$inspect$ui$data_viewer$render_sequential_$_iter__44508(cljs.core.rest(s__44509__$2)));
}
} else {
return null;
}
break;
}
});})(map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_))
,null,null));
});})(map__44506,map__44506__$1,input,css,expanded,path,toggle,open_close,static_QMARK_))
;
return iter__4292__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_viewer.sequential_max_inline,content),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
})()),fulcro.util.force_children((((cljs.core.count(content) > fulcro.inspect.ui.data_viewer.sequential_max_inline))?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-inline-item","list-inline-item",1195637429).cljs$core$IFn$_invoke$arity$1(css)}),"\u2026"]):null)),fulcro.util.force_children(cljs.core.second(open_close))])
))]);
});
fulcro.inspect.ui.data_viewer.render_vector = (function fulcro$inspect$ui$data_viewer$render_vector(input,content){
return fulcro.inspect.ui.data_viewer.render_sequential(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(input,new cljs.core.Keyword(null,"open-close","open-close",-1701935171),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"linkable?","linkable?",397018650),true], 0)),content);
});
fulcro.inspect.ui.data_viewer.render_list = (function fulcro$inspect$ui$data_viewer$render_list(input,content){
return fulcro.inspect.ui.data_viewer.render_sequential(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(input,new cljs.core.Keyword(null,"open-close","open-close",-1701935171),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"linkable?","linkable?",397018650),true], 0)),content);
});
fulcro.inspect.ui.data_viewer.render_set = (function fulcro$inspect$ui$data_viewer$render_set(input,content){
return fulcro.inspect.ui.data_viewer.render_sequential(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword(null,"open-close","open-close",-1701935171),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null)),content);
});
fulcro.inspect.ui.data_viewer.render_map = (function fulcro$inspect$ui$data_viewer$render_map(p__44524,content){
var map__44525 = p__44524;
var map__44525__$1 = ((((!((map__44525 == null)))?(((((map__44525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44525):map__44525);
var input = map__44525__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var toggle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var path_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"path-action","path-action",1211199268));
var elide_one_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"elide-one?","elide-one?",-192908038));
var static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44525__$1,new cljs.core.Keyword(null,"static?","static?",-1639874822));
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"data-row","data-row",-1410898325).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(((((cljs.core.not(static_QMARK_)) && (((cljs.core.not(elide_one_QMARK_)) || (((1) > cljs.core.count(content)))))))?fulcro.client.dom.macro_create_element_STAR_(["div",({"onClick": ((function (map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_){
return (function (p1__44523_SHARP_){
return (toggle.cljs$core$IFn$_invoke$arity$2 ? toggle.cljs$core$IFn$_invoke$arity$2(p1__44523_SHARP_,path) : toggle.call(null,p1__44523_SHARP_,path));
});})(map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_))
, "className": new cljs.core.Keyword(null,"toggle-button","toggle-button",267667985).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_((expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(path) : expanded.call(null,path)))?"\u25BC":"\u25B6"))]):null)),fulcro.util.force_children(((cljs.core.empty_QMARK_(content))?"{}":(cljs.core.truth_((expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(path) : expanded.call(null,path)))?((cljs.core.every_QMARK_(fulcro.inspect.ui.data_viewer.keyable_QMARK_,cljs.core.keys(content)))?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"map-container","map-container",1333465834).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_){
return (function (p__44527){
var vec__44528 = p__44527;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44528,(1),null);
if(cljs.core.truth_((function (){var G__44531 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(G__44531) : expanded.call(null,G__44531));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.dom.macro_create_element_STAR_(["div",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-key"].join('')}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-item-index","list-item-index",-877133183).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_(path_action)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"path-action","path-action",1211199268).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (vec__44528,k,v,map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_){
return (function (){
var G__44532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (path_action.cljs$core$IFn$_invoke$arity$1 ? path_action.cljs$core$IFn$_invoke$arity$1(G__44532) : path_action.call(null,G__44532));
});})(vec__44528,k,v,map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_))
}),fulcro.util.force_children((fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(input,k) : fulcro.inspect.ui.data_viewer.render_data.call(null,input,k)))]):(fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(input,k) : fulcro.inspect.ui.data_viewer.render_data.call(null,input,k))))]))]),fulcro.client.dom.macro_create_element_STAR_(["div",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-key-space"].join('')})]),fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"map-expanded-item","map-expanded-item",1903130054).cljs$core$IFn$_invoke$arity$1(css), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-value"].join('')}),fulcro.util.force_children((function (){var G__44533 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k);
var G__44534 = v;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44533,G__44534) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44533,G__44534));
})())])], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.dom.macro_create_element_STAR_(["div",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-key"].join('')}),fulcro.util.force_children(fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-item-index","list-item-index",-877133183).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children((cljs.core.truth_(path_action)?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"path-action","path-action",1211199268).cljs$core$IFn$_invoke$arity$1(css), "onClick": ((function (vec__44528,k,v,map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_){
return (function (){
var G__44535 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (path_action.cljs$core$IFn$_invoke$arity$1 ? path_action.cljs$core$IFn$_invoke$arity$1(G__44535) : path_action.call(null,G__44535));
});})(vec__44528,k,v,map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_))
}),fulcro.util.force_children((fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(input,k) : fulcro.inspect.ui.data_viewer.render_data.call(null,input,k)))]):(fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(input,k) : fulcro.inspect.ui.data_viewer.render_data.call(null,input,k))))]))]),fulcro.client.dom.macro_create_element_STAR_(["div",({"key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-value"].join('')}),fulcro.util.force_children((function (){var G__44536 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k);
var G__44537 = v;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44536,G__44537) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44536,G__44537));
})())])], null);
}
});})(map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first),content))))]):fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-container","list-container",2018934991).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.render_ordered_list(input,content))])):(cljs.core.truth_((function (){var or__3922__auto__ = (function (){var G__44539 = cljs.core.vec(cljs.core.butlast(path));
return (expanded.cljs$core$IFn$_invoke$arity$1 ? expanded.cljs$core$IFn$_invoke$arity$1(G__44539) : expanded.call(null,G__44539));
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.empty_QMARK_(path);
}
})())?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-inline","list-inline",-1998514879).cljs$core$IFn$_invoke$arity$1(css)}),"{",fulcro.util.force_children(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_){
return (function (p__44540){
var vec__44541 = p__44540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44541,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"map-inline-key-item","map-inline-key-item",881803672).cljs$core$IFn$_invoke$arity$1(css), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-key"].join('')}),fulcro.util.force_children((fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(input,k) : fulcro.inspect.ui.data_viewer.render_data.call(null,input,k)))]),fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"map-inline-value-item","map-inline-value-item",-1102280873).cljs$core$IFn$_invoke$arity$1(css), "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-value"].join('')}),fulcro.util.force_children((function (){var G__44544 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(input,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,k);
var G__44545 = v;
return (fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_viewer.render_data.cljs$core$IFn$_invoke$arity$2(G__44544,G__44545) : fulcro.inspect.ui.data_viewer.render_data.call(null,G__44544,G__44545));
})())])], null);
});})(map__44525,map__44525__$1,input,css,expanded,path,toggle,path_action,elide_one_QMARK_,static_QMARK_))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_viewer.map_max_inline,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first),content)))))),fulcro.util.force_children((((cljs.core.count(content) > fulcro.inspect.ui.data_viewer.map_max_inline))?", ":null)),fulcro.util.force_children((((cljs.core.count(content) > fulcro.inspect.ui.data_viewer.map_max_inline))?fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"list-inline-item","list-inline-item",1195637429).cljs$core$IFn$_invoke$arity$1(css)}),"\u2026"]):null)),"}"]):"{\u2026}"
))))]);
});
fulcro.inspect.ui.data_viewer.render_data = (function fulcro$inspect$ui$data_viewer$render_data(p__44547,content){
var map__44548 = p__44547;
var map__44548__$1 = ((((!((map__44548 == null)))?(((((map__44548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44548):map__44548);
var input = map__44548__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var input__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword(null,"expanded","expanded",-3020742),((function (map__44548,map__44548__$1,input,css){
return (function (p1__44546_SHARP_){
var or__3922__auto__ = p1__44546_SHARP_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});})(map__44548,map__44548__$1,input,css))
);
if((content == null)){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(css)}),"nil"]);
} else {
if(typeof content === 'string'){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)))]);
} else {
if((content instanceof cljs.core.Keyword)){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))]);
} else {
if((content instanceof cljs.core.Symbol)){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))]);
} else {
if(typeof content === 'number'){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))]);
} else {
if(cljs.core.boolean_QMARK_(content)){
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"boolean","boolean",-1919418404).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))]);
} else {
if(cljs.core.vector_QMARK_(content)){
return fulcro.inspect.ui.data_viewer.render_vector(input__$1,content);
} else {
if(cljs.core.list_QMARK_(content)){
return fulcro.inspect.ui.data_viewer.render_list(input__$1,content);
} else {
if(cljs.core.set_QMARK_(content)){
return fulcro.inspect.ui.data_viewer.render_set(input__$1,content);
} else {
if(cljs.core.map_QMARK_(content)){
return fulcro.inspect.ui.data_viewer.render_map(input__$1,content);
} else {
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"unknown","unknown",-935977881).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))]);

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
fulcro.inspect.ui.data_viewer.css_triangle = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"color","color",1011675173),"#8f8f8f",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3px"], null);
fulcro.inspect.ui.data_viewer.css_code_font = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'courier new', monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null);
if(typeof fulcro.inspect.ui.data_viewer.DataViewer !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.data_viewer.DataViewer = (function fulcro$inspect$ui$data_viewer$DataViewer(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.data_viewer.DataViewer.prototype = goog.object.clone(React.Component.prototype);
}

var x44554_44570 = fulcro.inspect.ui.data_viewer.DataViewer.prototype;
x44554_44570.componentDidMount = ((function (x44554_44570){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44554_44570))
;

x44554_44570.componentWillUpdate = ((function (x44554_44570){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44571 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44572 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44571,next_ident__38531__auto___44572)){
var idxr__38532__auto___44573 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44573 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44573),((function (idxr__38532__auto___44573,ident__38530__auto___44571,next_ident__38531__auto___44572,this__38521__auto__,x44554_44570){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44571], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44572], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44573,ident__38530__auto___44571,next_ident__38531__auto___44572,this__38521__auto__,x44554_44570))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44554_44570))
;

x44554_44570.shouldComponentUpdate = ((function (x44554_44570){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44556 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44556);
} else {
return G__44556;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44557 = this__38521__auto__.state;
var G__44558 = "fulcro$state";
return goog.object.get(G__44557,G__44558);
})(),goog.object.get(next_state__38523__auto__,"fulcro$state"));
} else {
return and__3911__auto__;
}
})();
var children_changed_QMARK___38529__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__38521__auto__.props.children,next_children__38524__auto__);
var or__3922__auto__ = props_changed_QMARK___38527__auto__;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = state_changed_QMARK___38528__auto__;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return children_changed_QMARK___38529__auto__;
}
}
}
});})(x44554_44570))
;

x44554_44570.componentWillUnmount = ((function (x44554_44570){
return (function (){
var this__38521__auto__ = this;
var r__38537__auto__ = fulcro.client.primitives.get_reconciler(this__38521__auto__);
var cfg__38538__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__38537__auto__);
var st__38539__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
var indexer__38536__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38538__auto__);
goog.object.set(this__38521__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38539__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38539__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38521__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38539__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38521__auto__], 0));
} else {
}

if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.drop_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44554_44570))
;

x44554_44570.componentDidUpdate = ((function (x44554_44570){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44554_44570))
;

x44554_44570.componentWillMount = ((function (x44554_44570){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44554_44570))
;

x44554_44570.render = ((function (x44554_44570){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44559 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44560 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44561 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44562 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44563 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44564 = fulcro.client.primitives.props(this$);
var map__44564__$1 = ((((!((map__44564 == null)))?(((((map__44564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44564):map__44564);
var props = map__44564__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44564__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168));
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44564__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738));
var elide_one_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44564__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","elide-one?","fulcro.inspect.ui.data-viewer/elide-one?",1763322266));
var static_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44564__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","static?","fulcro.inspect.ui.data-viewer/static?",1252357018));
var map__44565 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__44565__$1 = ((((!((map__44565 == null)))?(((((map__44565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44565):map__44565);
var path_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path-action","fulcro.inspect.ui.data-viewer/path-action",-1571957884));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.data_viewer.DataViewer);
return fulcro.client.dom.macro_create_element_STAR_(["div",({"className": new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)}),fulcro.util.force_children(fulcro.inspect.ui.data_viewer.render_data(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),expanded,new cljs.core.Keyword(null,"static?","static?",-1639874822),static_QMARK_,new cljs.core.Keyword(null,"elide-one?","elide-one?",-192908038),elide_one_QMARK_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),((function (map__44564,map__44564__$1,props,content,expanded,elide_one_QMARK_,static_QMARK_,map__44565,map__44565__$1,path_action,css,_STAR_reconciler_STAR_44559,_STAR_depth_STAR_44560,_STAR_shared_STAR_44561,_STAR_instrument_STAR_44562,_STAR_parent_STAR_44563,this$,this__38520__auto__,x44554_44570){
return (function (p1__44551_SHARP_,p2__44550_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-viewer","toggle","fulcro.inspect.ui.data-viewer/toggle",422454613,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","path","fulcro.inspect.ui.data-viewer/path",-2127421216),null,(1),null)),(new cljs.core.List(null,p2__44550_SHARP_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","propagate?","fulcro.inspect.ui.data-viewer/propagate?",964078102),null,(1),null)),(new cljs.core.List(null,(function (){var or__3922__auto__ = p1__44551_SHARP_.altKey;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__44551_SHARP_.metaKey;
}
})(),null,(1),null))], 0))))),null,(1),null)))))], null));
});})(map__44564,map__44564__$1,props,content,expanded,elide_one_QMARK_,static_QMARK_,map__44565,map__44565__$1,path_action,css,_STAR_reconciler_STAR_44559,_STAR_depth_STAR_44560,_STAR_shared_STAR_44561,_STAR_instrument_STAR_44562,_STAR_parent_STAR_44563,this$,this__38520__auto__,x44554_44570))
,new cljs.core.Keyword(null,"css","css",1135045163),css,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-action","path-action",1211199268),path_action], null),content))]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44563;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44562;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44561;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44560;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44559;
}});})(x44554_44570))
;


fulcro.inspect.ui.data_viewer.DataViewer.prototype.constructor = fulcro.inspect.ui.data_viewer.DataViewer;

fulcro.inspect.ui.data_viewer.DataViewer.prototype.constructor.displayName = "fulcro.inspect.ui.data-viewer/DataViewer";

fulcro.inspect.ui.data_viewer.DataViewer.prototype.fulcro$isComponent = true;

var x44568_44574 = fulcro.inspect.ui.data_viewer.DataViewer;
x44568_44574.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44568_44574.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44568_44574){
return (function (_,content){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168),content,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.PersistentArrayMap.EMPTY], null);
});})(x44568_44574))
;

x44568_44574.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44568_44574.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44568_44574){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44568_44574))
;

x44568_44574.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44568_44574.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44568_44574){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738)], null);
});})(x44568_44574))
;

x44568_44574.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44568_44574.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44568_44574){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.inspect.ui.data_viewer.css_code_font], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nil",".nil",-1062610078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#808080"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".string",".string",-85540827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#c41a16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".keyword",".keyword",388974360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#881391"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".symbol",".symbol",-397264255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#134f91"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".number",".number",-700907980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1c00cf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".boolean",".boolean",880793641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#009999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-row",".data-row",860092148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-inline",".list-inline",1195631300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-inline-item",".list-inline-item",960133144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-container",".list-container",-486014461),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 12px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid rgba(60, 90, 60, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 1px 1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-button",".toggle-button",-1541139659),fulcro.inspect.ui.data_viewer.css_triangle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-item",".list-item",-375783940),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-item-index",".list-item-index",869472463),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#dddddd",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"2px solid rgba(100, 100, 100, 0.2)",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"35px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-container",".map-container",-1396978561),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 12px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid rgba(60, 90, 60, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 1px 1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"max-content 1fr"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-expanded-item",".map-expanded-item",-584468457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),"1",new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),"3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-inline-key-item",".map-inline-key-item",-1589750818),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-inline-value-item",".map-inline-value-item",1595177000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".path-action",".path-action",342923616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null)], null);
});})(x44568_44574))
;

x44568_44574.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44568_44574){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44568_44574))
;


var x44569_44575 = fulcro.inspect.ui.data_viewer.DataViewer.prototype;
x44569_44575.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44569_44575.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44569_44575){
return (function (_,content){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168),content,new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738),cljs.core.PersistentArrayMap.EMPTY], null);
});})(x44569_44575))
;

x44569_44575.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44569_44575.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44569_44575){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44569_44575))
;

x44569_44575.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44569_44575.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44569_44575){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","id","fulcro.inspect.ui.data-viewer/id",1323632372),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","expanded","fulcro.inspect.ui.data-viewer/expanded",846443738)], null);
});})(x44569_44575))
;

x44569_44575.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44569_44575.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44569_44575){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.inspect.ui.data_viewer.css_code_font], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nil",".nil",-1062610078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#808080"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".string",".string",-85540827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#c41a16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".keyword",".keyword",388974360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#881391"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".symbol",".symbol",-397264255),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#134f91"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".number",".number",-700907980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1c00cf"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".boolean",".boolean",880793641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#009999"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".data-row",".data-row",860092148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-inline",".list-inline",1195631300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-inline-item",".list-inline-item",960133144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-container",".list-container",-486014461),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 12px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid rgba(60, 90, 60, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 1px 1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toggle-button",".toggle-button",-1541139659),fulcro.inspect.ui.data_viewer.css_triangle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-item",".list-item",-375783940),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-item-index",".list-item-index",869472463),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#dddddd",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"2px solid rgba(100, 100, 100, 0.2)",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"35px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"1px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-container",".map-container",-1396978561),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 12px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid rgba(60, 90, 60, 0.1)",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 1px 1px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"max-content 1fr"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-expanded-item",".map-expanded-item",-584468457),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),"1",new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),"3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-inline-key-item",".map-inline-key-item",-1589750818),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".map-inline-value-item",".map-inline-value-item",1595177000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".path-action",".path-action",342923616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null)], null);
});})(x44569_44575))
;

x44569_44575.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44569_44575){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44569_44575))
;


fulcro.inspect.ui.data_viewer.DataViewer.cljs$lang$type = true;

fulcro.inspect.ui.data_viewer.DataViewer.cljs$lang$ctorStr = "fulcro.inspect.ui.data-viewer/DataViewer";

fulcro.inspect.ui.data_viewer.DataViewer.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.data-viewer/DataViewer");
});
var factory_44583 = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_viewer.DataViewer);
fulcro.inspect.ui.data_viewer.data_viewer = ((function (factory_44583){
return (function fulcro$inspect$ui$data_viewer$data_viewer(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44584 = arguments.length;
var i__4500__auto___44585 = (0);
while(true){
if((i__4500__auto___44585 < len__4499__auto___44584)){
args__4502__auto__.push((arguments[i__4500__auto___44585]));

var G__44586 = (i__4500__auto___44585 + (1));
i__4500__auto___44585 = G__44586;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.data_viewer.data_viewer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});})(factory_44583))
;

fulcro.inspect.ui.data_viewer.data_viewer.cljs$core$IFn$_invoke$arity$variadic = ((function (factory_44583){
return (function (props,p__44578){
var vec__44579 = p__44578;
var computed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44579,(0),null);
var G__44582 = fulcro.client.primitives.computed(props,computed);
return (factory_44583.cljs$core$IFn$_invoke$arity$1 ? factory_44583.cljs$core$IFn$_invoke$arity$1(G__44582) : factory_44583.call(null,G__44582));
});})(factory_44583))
;

fulcro.inspect.ui.data_viewer.data_viewer.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.data_viewer.data_viewer.cljs$lang$applyTo = ((function (factory_44583){
return (function (seq44576){
var G__44577 = cljs.core.first(seq44576);
var seq44576__$1 = cljs.core.next(seq44576);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44577,seq44576__$1);
});})(factory_44583))
;


//# sourceMappingURL=fulcro.inspect.ui.data_viewer.js.map

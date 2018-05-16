goog.provide('fulcro.inspect.ui.data_history');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('garden.selectors');
goog.require('fulcro.inspect.lib.local_storage');
goog.require('fulcro.inspect.ui.data_viewer');
goog.require('fulcro.inspect.ui.data_watcher');
goog.require('fulcro.inspect.ui.core');
goog.require('fulcro.inspect.ui.dom_history_viewer');
goog.require('fulcro.inspect.helpers');
goog.require('fulcro.inspect.ui.helpers');
fulcro.inspect.ui.data_history._STAR_max_history_STAR_ = (100);
fulcro.inspect.ui.data_history.new_state = (function fulcro$inspect$ui$data_history$new_state(content){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","state","fulcro.inspect.ui.data-history/state",-1382291565),content,new cljs.core.Keyword("fulcro.inspect.ui.data-history","timestamp","fulcro.inspect.ui.data-history/timestamp",2125402813),(new Date())], null);
});
/**
 * 
 */
fulcro.inspect.ui.data_history.set_content = (function (){
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","set-content","fulcro.inspect.ui.data-history/set-content",-1511573547,null),(function (env45042,_,content){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var env = env45042;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env){
return (function (){
var map__45043 = env;
var map__45043__$1 = ((((!((map__45043 == null)))?(((((map__45043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45043):map__45043);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45043__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45043__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__45044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__45044__$1 = ((((!((map__45044 == null)))?(((((map__45044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45044):map__45044);
var watcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381));
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(history))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_index,(cljs.core.count(history) - (1)))))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_index,(fulcro.inspect.ui.data_history._STAR_max_history_STAR_ - (1))))){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),cljs.core.inc], 0));
} else {
}

var G__45047_45055 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ref","ref",1289896967),watcher);
var G__45048_45056 = content;
(fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2(G__45047_45055,G__45048_45056) : fulcro.inspect.ui.data_watcher.update_state.call(null,G__45047_45055,G__45048_45056));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_history._STAR_max_history_STAR_,cljs.core.count(history))){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),cljs.core.dec], 0));
} else {
}
}

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),((function (map__45043,map__45043__$1,state,ref,map__45044,map__45044__$1,watcher,current_index,history,env){
return (function (p1__45041_SHARP_){
return cljs.core.vec(cljs.core.take_last(fulcro.inspect.ui.data_history._STAR_max_history_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45041_SHARP_,fulcro.inspect.ui.data_history.new_state(content))));
});})(map__45043,map__45043__$1,state,ref,map__45044,map__45044__$1,watcher,current_index,history,env))
], 0));
});})(env))
], null);
})(),(function (){var env = env45042;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));

return (function (env,content){
var map__45049 = env;
var map__45049__$1 = ((((!((map__45049 == null)))?(((((map__45049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45049):map__45049);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45049__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__45050 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
var map__45050__$1 = ((((!((map__45050 == null)))?(((((map__45050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45050):map__45050);
var watcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381));
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(history))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_index,(cljs.core.count(history) - (1)))))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_index,(fulcro.inspect.ui.data_history._STAR_max_history_STAR_ - (1))))){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),cljs.core.inc], 0));
} else {
}

var G__45053_45057 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ref","ref",1289896967),watcher);
var G__45054_45058 = content;
(fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2(G__45053_45057,G__45054_45058) : fulcro.inspect.ui.data_watcher.update_state.call(null,G__45053_45057,G__45054_45058));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_history._STAR_max_history_STAR_,cljs.core.count(history))){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),cljs.core.dec], 0));
} else {
}
}

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update,new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),((function (map__45049,map__45049__$1,state,ref,map__45050,map__45050__$1,watcher,current_index,history){
return (function (p1__45041_SHARP_){
return cljs.core.vec(cljs.core.take_last(fulcro.inspect.ui.data_history._STAR_max_history_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__45041_SHARP_,fulcro.inspect.ui.data_history.new_state(content))));
});})(map__45049,map__45049__$1,state,ref,map__45050,map__45050__$1,watcher,current_index,history))
], 0));
});
})()
;
/**
 * 
 */
fulcro.inspect.ui.data_history.navigate_history = (function (){
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","navigate-history","fulcro.inspect.ui.data-history/navigate-history",-564092494,null),(function (env45059,_,p__45060){
var map__45061 = p__45060;
var map__45061__$1 = ((((!((map__45061 == null)))?(((((map__45061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45061):map__45061);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45061__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45063 = env45059;
var map__45063__$1 = ((((!((map__45063 == null)))?(((((map__45063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45063):map__45063);
var env = map__45063__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45063__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45063,map__45063__$1,env,state,ref,map__45061,map__45061__$1,current_index){
return (function (){
var history = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_index,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289).cljs$core$IFn$_invoke$arity$1(history))){
var content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),current_index,new cljs.core.Keyword("fulcro.inspect.ui.data-history","state","fulcro.inspect.ui.data-history/state",-1382291565)], null));
var history_view_state_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994).cljs$core$IFn$_invoke$arity$1(history))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,history_view_state_path,content);
} else {
}

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),current_index], 0));

var G__45065 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381).cljs$core$IFn$_invoke$arity$1(history));
var G__45066 = content;
return (fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2(G__45065,G__45066) : fulcro.inspect.ui.data_watcher.update_state.call(null,G__45065,G__45066));
} else {
return null;
}
});})(map__45063,map__45063__$1,env,state,ref,map__45061,map__45061__$1,current_index))
], null);
})(),(function (){var env = env45059;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui","historical-dom-view","ui/historical-dom-view",608272860)], null)], null);
})()], 0));
}));

return (function (p__45067,p__45068){
var map__45069 = p__45067;
var map__45069__$1 = ((((!((map__45069 == null)))?(((((map__45069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45069):map__45069);
var env = map__45069__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45069__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45069__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var map__45070 = p__45068;
var map__45070__$1 = ((((!((map__45070 == null)))?(((((map__45070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45070):map__45070);
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45070__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289));
var history = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_index,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289).cljs$core$IFn$_invoke$arity$1(history))){
var content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(history,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),current_index,new cljs.core.Keyword("fulcro.inspect.ui.data-history","state","fulcro.inspect.ui.data-history/state",-1382291565)], null));
var history_view_state_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994).cljs$core$IFn$_invoke$arity$1(history))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,history_view_state_path,content);
} else {
}

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),current_index], 0));

var G__45073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381).cljs$core$IFn$_invoke$arity$1(history));
var G__45074 = content;
return (fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_watcher.update_state.cljs$core$IFn$_invoke$arity$2(G__45073,G__45074) : fulcro.inspect.ui.data_watcher.update_state.call(null,G__45073,G__45074));
} else {
return null;
}
});
})()
;
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","reset-app","fulcro.inspect.ui.data-history/reset-app",-1470191172,null),(function (env45075,_,p__45076){
var map__45077 = p__45076;
var map__45077__$1 = ((((!((map__45077 == null)))?(((((map__45077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45077):map__45077);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45077__$1,new cljs.core.Keyword(null,"app","app",-560961707));
var target_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45077__$1,new cljs.core.Keyword(null,"target-state","target-state",-682429993));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45079 = env45075;
var map__45079__$1 = ((((!((map__45079 == null)))?(((((map__45079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45079):map__45079);
var env = map__45079__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45079__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45079__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45079,map__45079__$1,env,state,ref,map__45077,map__45077__$1,app,target_state){
return (function (){
var reconciler = (function (){var G__45081 = app;
if((G__45081 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__45081);
}
})();
var state_atom = (function (){var G__45082 = reconciler;
if((G__45082 == null)){
return null;
} else {
return fulcro.client.primitives.app_state(G__45082);
}
})();
cljs.core.reset_BANG_(state_atom,target_state);

fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),(cljs.core.count(new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),ref))) - (1))], 0));

return setTimeout(((function (reconciler,state_atom,map__45079,map__45079__$1,env,state,ref,map__45077,map__45077__$1,app,target_state){
return (function (){
return fulcro.client.primitives.force_root_render_BANG_(reconciler);
});})(reconciler,state_atom,map__45079,map__45079__$1,env,state,ref,map__45077,map__45077__$1,app,target_state))
,(10));
});})(map__45079,map__45079__$1,env,state,ref,map__45077,map__45077__$1,app,target_state))
], null);
})(),(function (){var ___$1 = env45075;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh","refresh",1947415525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289)], null)], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.data_history.Snapshot !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.data_history.Snapshot = (function fulcro$inspect$ui$data_history$Snapshot(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.data_history.Snapshot.prototype = goog.object.clone(React.Component.prototype);
}

var x45085_45104 = fulcro.inspect.ui.data_history.Snapshot.prototype;
x45085_45104.componentDidMount = ((function (x45085_45104){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x45085_45104))
;

x45085_45104.componentWillUpdate = ((function (x45085_45104){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___45105 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___45106 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___45105,next_ident__38531__auto___45106)){
var idxr__38532__auto___45107 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___45107 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___45107),((function (idxr__38532__auto___45107,ident__38530__auto___45105,next_ident__38531__auto___45106,this__38521__auto__,x45085_45104){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___45105], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___45106], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___45107,ident__38530__auto___45105,next_ident__38531__auto___45106,this__38521__auto__,x45085_45104))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x45085_45104))
;

x45085_45104.shouldComponentUpdate = ((function (x45085_45104){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__45087 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__45087);
} else {
return G__45087;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45088 = this__38521__auto__.state;
var G__45089 = "fulcro$state";
return goog.object.get(G__45088,G__45089);
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
});})(x45085_45104))
;

x45085_45104.componentWillUnmount = ((function (x45085_45104){
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
});})(x45085_45104))
;

x45085_45104.componentDidUpdate = ((function (x45085_45104){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x45085_45104))
;

x45085_45104.componentWillMount = ((function (x45085_45104){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x45085_45104))
;

x45085_45104.render = ((function (x45085_45104){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_45090 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45091 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_45092 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_45093 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_45094 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__45095 = fulcro.client.primitives.props(this$);
var map__45095__$1 = ((((!((map__45095 == null)))?(((((map__45095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45095):map__45095);
var props = map__45095__$1;
var snapshot_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-date","fulcro.inspect.ui.data-history/snapshot-date",-1986210397));
var snapshot_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646));
var label_editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword("ui","label-editor","ui/label-editor",1699461145));
var map__45096 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__45096__$1 = ((((!((map__45096 == null)))?(((((map__45096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45096):map__45096);
var on_pick_snapshot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-pick-snapshot","fulcro.inspect.ui.data-history/on-pick-snapshot",1797121199));
var on_delete_snapshot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-delete-snapshot","fulcro.inspect.ui.data-history/on-delete-snapshot",-1755215556));
var current_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current?","fulcro.inspect.ui.data-history/current?",-1749308960));
var on_update_snapshot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45096__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-update-snapshot","fulcro.inspect.ui.data-history/on-update-snapshot",-415455304));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.data_history.Snapshot);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(current_QMARK_)?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(css):null)], null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".label",".label",1227819101),(function (){var G__45099 = label_editor;
var G__45100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.core","value","fulcro.inspect.ui.core/value",428871581),snapshot_label,new cljs.core.Keyword("fulcro.inspect.ui.core","on-change","fulcro.inspect.ui.core/on-change",-1449504377),((function (G__45099,map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104){
return (function (new_label){
var G__45101 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),new_label);
return (on_update_snapshot.cljs$core$IFn$_invoke$arity$1 ? on_update_snapshot.cljs$core$IFn$_invoke$arity$1(G__45101) : on_update_snapshot.call(null,G__45101));
});})(G__45099,map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104))
], null);
return (fulcro.inspect.ui.core.inline_editor.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.core.inline_editor.cljs$core$IFn$_invoke$arity$2(G__45099,G__45100) : fulcro.inspect.ui.core.inline_editor.call(null,G__45099,G__45100));
})()], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".action.pick",".action.pick",-539676380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104){
return (function (){
return (on_pick_snapshot.cljs$core$IFn$_invoke$arity$1 ? on_pick_snapshot.cljs$core$IFn$_invoke$arity$1(props) : on_pick_snapshot.call(null,props));
});})(map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104))
], null),fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Restore snapshot"], null),new cljs.core.Keyword(null,"settings_backup_restore","settings_backup_restore",257764755))], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".action.remove",".action.remove",1481616021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104){
return (function (){
return (on_delete_snapshot.cljs$core$IFn$_invoke$arity$1 ? on_delete_snapshot.cljs$core$IFn$_invoke$arity$1(props) : on_delete_snapshot.call(null,props));
});})(map__45095,map__45095__$1,props,snapshot_date,snapshot_label,label_editor,map__45096,map__45096__$1,on_pick_snapshot,on_delete_snapshot,current_QMARK_,on_update_snapshot,css,_STAR_reconciler_STAR_45090,_STAR_depth_STAR_45091,_STAR_shared_STAR_45092,_STAR_instrument_STAR_45093,_STAR_parent_STAR_45094,this$,this__38520__auto__,x45085_45104))
], null),fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Delete snapshot"], null),new cljs.core.Keyword(null,"delete_forever","delete_forever",-293767212))], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_45094;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_45093;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_45092;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_45091;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45090;
}});})(x45085_45104))
;


fulcro.inspect.ui.data_history.Snapshot.prototype.constructor = fulcro.inspect.ui.data_history.Snapshot;

fulcro.inspect.ui.data_history.Snapshot.prototype.constructor.displayName = "fulcro.inspect.ui.data-history/Snapshot";

fulcro.inspect.ui.data_history.Snapshot.prototype.fulcro$isComponent = true;

var x45102_45108 = fulcro.inspect.ui.data_history.Snapshot;
x45102_45108.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45102_45108.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45102_45108){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".current",".current",-1701446288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#3c7bd6 !important"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.foreign_class(fulcro.inspect.ui.core.InlineEditor,new cljs.core.Keyword(null,"label","label",1718410804)),fulcro.inspect.ui.core.foreign_class(fulcro.inspect.ui.core.InlineEditor,new cljs.core.Keyword(null,"no-label","no-label",-928333903)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.8)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 6px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".date",".date",364205229),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.css_timestamp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null);
});})(x45102_45108))
;

x45102_45108.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45102_45108){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x45102_45108))
;

x45102_45108.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45102_45108.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45102_45108){
return (function (this$,data){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638),data,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),"New Snapshot",new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-date","fulcro.inspect.ui.data-history/snapshot-date",-1986210397),(new Date()),new cljs.core.Keyword("ui","label-editor","ui/label-editor",1699461145),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.core.InlineEditor,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x45102_45108))
;

x45102_45108.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45102_45108.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45102_45108){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45102_45108))
;

x45102_45108.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45102_45108.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45102_45108){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-date","fulcro.inspect.ui.data-history/snapshot-date",-1986210397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","label-editor","ui/label-editor",1699461145),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.InlineEditor)], null)], null);
});})(x45102_45108))
;


var x45103_45109 = fulcro.inspect.ui.data_history.Snapshot.prototype;
x45103_45109.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45103_45109.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45103_45109){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".current",".current",-1701446288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#3c7bd6 !important"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.foreign_class(fulcro.inspect.ui.core.InlineEditor,new cljs.core.Keyword(null,"label","label",1718410804)),fulcro.inspect.ui.core.foreign_class(fulcro.inspect.ui.core.InlineEditor,new cljs.core.Keyword(null,"no-label","no-label",-928333903)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.8)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 6px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".date",".date",364205229),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.css_timestamp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null)], null);
});})(x45103_45109))
;

x45103_45109.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45103_45109){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x45103_45109))
;

x45103_45109.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45103_45109.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45103_45109){
return (function (this$,data){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638),data,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),"New Snapshot",new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-date","fulcro.inspect.ui.data-history/snapshot-date",-1986210397),(new Date()),new cljs.core.Keyword("ui","label-editor","ui/label-editor",1699461145),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.core.InlineEditor,cljs.core.PersistentArrayMap.EMPTY)], null);
});})(x45103_45109))
;

x45103_45109.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45103_45109.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45103_45109){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45103_45109))
;

x45103_45109.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45103_45109.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45103_45109){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-date","fulcro.inspect.ui.data-history/snapshot-date",-1986210397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","label-editor","ui/label-editor",1699461145),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.InlineEditor)], null)], null);
});})(x45103_45109))
;


fulcro.inspect.ui.data_history.Snapshot.cljs$lang$type = true;

fulcro.inspect.ui.data_history.Snapshot.cljs$lang$ctorStr = "fulcro.inspect.ui.data-history/Snapshot";

fulcro.inspect.ui.data_history.Snapshot.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.data-history/Snapshot");
});
fulcro.inspect.ui.data_history.snapshot = fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_history.Snapshot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781)], null));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","save-snapshot","fulcro.inspect.ui.data-history/save-snapshot",-51085480,null),(function (env45110,_,p__45111){
var map__45112 = p__45111;
var map__45112__$1 = ((((!((map__45112 == null)))?(((((map__45112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45112):map__45112);
var snapshot_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45114 = env45110;
var map__45114__$1 = ((((!((map__45114 == null)))?(((((map__45114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45114):map__45114);
var env = map__45114__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45114__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db){
return (function (){
var ss_45116 = fulcro.inspect.helpers.create_entity_BANG_(env,fulcro.inspect.ui.data_history.Snapshot,snapshot_db);
var new_ident_45117 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.data_history.Snapshot,ss_45116);
var app_id_45118 = fulcro.inspect.ui.helpers.ref_app_id(ref);
var apps_45119 = fulcro.inspect.ui.helpers.matching_apps(cljs.core.deref(state),app_id_45118);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (ss_45116,new_ident_45117,app_id_45118,apps_45119,map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db){
return (function (s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ss_45116,new_ident_45117,app_id_45118,apps_45119,map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db){
return (function (s__$1,app){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(s__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app], null),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646)], null),cljs.core.conj,new_ident_45117);
});})(ss_45116,new_ident_45117,app_id_45118,apps_45119,map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db))
,s,apps_45119);
});})(ss_45116,new_ident_45117,app_id_45118,apps_45119,map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db))
);

var snapshots_45120 = new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1(component));
fulcro.inspect.lib.local_storage.tset_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.inspect.ui.helpers.ref_app_id(ref)], null),snapshots_45120);

return fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892),true], 0));
});})(map__45114,map__45114__$1,env,ref,state,component,map__45112,map__45112__$1,snapshot_db))
], null);
})(),(function (){var env = env45110;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","update-snapshot-label","fulcro.inspect.ui.data-history/update-snapshot-label",-551035600,null),(function (env45121,_,p__45122){
var map__45123 = p__45122;
var map__45123__$1 = ((((!((map__45123 == null)))?(((((map__45123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45123):map__45123);
var snapshot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781));
var snapshot_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45125 = env45121;
var map__45125__$1 = ((((!((map__45125 == null)))?(((((map__45125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45125):map__45125);
var env = map__45125__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45125,map__45125__$1,env,ref,component,map__45123,map__45123__$1,snapshot_id,snapshot_label){
return (function (){
fulcro.inspect.helpers.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),snapshot_id], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),snapshot_label], 0));

var snapshots = new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1(component));
return fulcro.inspect.lib.local_storage.tset_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.inspect.ui.helpers.ref_app_id(ref)], null),snapshots);
});})(map__45125,map__45125__$1,env,ref,component,map__45123,map__45123__$1,snapshot_id,snapshot_label))
], null);
})(),(function (){var env = env45121;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
cljs.core._add_method(fulcro.client.mutations.mutate,new cljs.core.Symbol("fulcro.inspect.ui.data-history","delete-snapshot","fulcro.inspect.ui.data-history/delete-snapshot",-1294838325,null),(function (env45129,_,p__45130){
var map__45131 = p__45130;
var map__45131__$1 = ((((!((map__45131 == null)))?(((((map__45131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45131):map__45131);
var snapshot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45131__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__45133 = env45129;
var map__45133__$1 = ((((!((map__45133 == null)))?(((((map__45133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45133):map__45133);
var env = map__45133__$1;
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45133__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45133__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45133__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id){
return (function (){
var sref_45135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-id","fulcro.inspect.ui.data-history/snapshot-id",682167781),snapshot_id], null);
var app_id_45136 = fulcro.inspect.ui.helpers.ref_app_id(ref);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id){
return (function (p1__45127_SHARP_){
return fulcro.inspect.helpers.deep_remove_ref(p1__45127_SHARP_,sref_45135);
});})(sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id))
,((function (sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id){
return (function (p1__45128_SHARP_){
return fulcro.inspect.ui.helpers.update_matching_apps(p1__45128_SHARP_,app_id_45136,((function (sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id){
return (function (s,app){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app], null),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646)], null),((function (sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id){
return (function (ss){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([sref_45135]),ss));
});})(sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id))
);
});})(sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id))
);
});})(sref_45135,app_id_45136,map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id))
));

var snapshots = new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.helpers.query_component.cljs$core$IFn$_invoke$arity$1(component));
return fulcro.inspect.lib.local_storage.tset_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.inspect.ui.helpers.ref_app_id(ref)], null),snapshots);
});})(map__45133,map__45133__$1,env,ref,state,component,map__45131,map__45131__$1,snapshot_id))
], null);
})(),(function (){var env = env45129;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),false], null);
})()], 0));
}));
if(typeof fulcro.inspect.ui.data_history.DataHistory !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.data_history.DataHistory = (function fulcro$inspect$ui$data_history$DataHistory(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.data_history.DataHistory.prototype = goog.object.clone(React.Component.prototype);
}

var x45142_45192 = fulcro.inspect.ui.data_history.DataHistory.prototype;
x45142_45192.componentDidMount = ((function (x45142_45192){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x45142_45192))
;

x45142_45192.componentWillUpdate = ((function (x45142_45192){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___45193 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___45194 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___45193,next_ident__38531__auto___45194)){
var idxr__38532__auto___45195 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___45195 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___45195),((function (idxr__38532__auto___45195,ident__38530__auto___45193,next_ident__38531__auto___45194,this__38521__auto__,x45142_45192){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___45193], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___45194], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___45195,ident__38530__auto___45193,next_ident__38531__auto___45194,this__38521__auto__,x45142_45192))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x45142_45192))
;

x45142_45192.shouldComponentUpdate = ((function (x45142_45192){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__45144 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__45144);
} else {
return G__45144;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45145 = this__38521__auto__.state;
var G__45146 = "fulcro$state";
return goog.object.get(G__45145,G__45146);
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
});})(x45142_45192))
;

x45142_45192.componentWillUnmount = ((function (x45142_45192){
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
});})(x45142_45192))
;

x45142_45192.componentDidUpdate = ((function (x45142_45192){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x45142_45192))
;

x45142_45192.componentWillMount = ((function (x45142_45192){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x45142_45192))
;

x45142_45192.render = ((function (x45142_45192){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_45147 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_45148 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_45149 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_45150 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_45151 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__45152 = fulcro.client.primitives.props(this$);
var map__45152__$1 = ((((!((map__45152 == null)))?(((((map__45152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45152):map__45152);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698));
var watcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381));
var current_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289));
var show_dom_preview_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994));
var show_snapshots_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892));
var snapshots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45152__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646));
var map__45153 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__45153__$1 = ((((!((map__45153 == null)))?(((((map__45153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45153):map__45153);
var target_app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45153__$1,new cljs.core.Keyword(null,"target-app","target-app",876281807));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.data_history.DataHistory);
var at_end_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(history) - (1)),current_index);
var app_state = new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282).cljs$core$IFn$_invoke$arity$1(watcher));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(function (){var G__45156 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065).cljs$core$IFn$_invoke$arity$1(css)], null);
var G__45157 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Show DOM preview.",new cljs.core.Keyword(null,"checked","checked",-50955819),show_dom_preview_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__45156,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994));
});})(G__45156,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], 0))], 0));
var G__45158 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),current_index),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45156,G__45157,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(function (){var G__45165 = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","navigate-history","fulcro.inspect.ui.data-history/navigate-history",-564092494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),(current_index - (1))], null),null,(1),null))))),null,(1),null))))));
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45165,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))));
} else {
return G__45165;
}
})());
});})(G__45156,G__45157,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Back one version"], null),new cljs.core.Keyword(null,"chevron_left","chevron_left",1329443077))], 0));
var G__45159 = fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count(history) - (1)),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_index)].join(''),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (G__45156,G__45157,G__45158,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","hide-dom-preview","fulcro.inspect.ui.dom-history-viewer/hide-dom-preview",1398943440,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)))))));
});})(G__45156,G__45157,G__45158,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__45156,G__45157,G__45158,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p1__45137_SHARP_){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(function (){var G__45166 = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","navigate-history","fulcro.inspect.ui.data-history/navigate-history",-564092494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),null,(1),null)),(new cljs.core.List(null,parseInt(p1__45137_SHARP_.target.value),null,(1),null)))))),null,(1),null))))),null,(1),null))))));
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45166,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))));
} else {
return G__45166;
}
})());
});})(G__45156,G__45157,G__45158,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null)], 0));
var G__45160 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),at_end_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45156,G__45157,G__45158,G__45159,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,(function (){var G__45167 = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","navigate-history","fulcro.inspect.ui.data-history/navigate-history",-564092494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),(current_index + (1))], null),null,(1),null))))),null,(1),null))))));
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45167,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.dom-history-viewer","show-dom-preview","fulcro.inspect.ui.dom-history-viewer/show-dom-preview",626121644,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))));
} else {
return G__45167;
}
})());
});})(G__45156,G__45157,G__45158,G__45159,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Foward one version"], null),new cljs.core.Keyword(null,"chevron_right","chevron_right",-2121407027))], 0));
var G__45161 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),at_end_QMARK_,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45156,G__45157,G__45158,G__45159,G__45160,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","reset-app","fulcro.inspect.ui.data-history/reset-app",-1470191172,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),target_app,new cljs.core.Keyword(null,"target-state","target-state",-682429993),app_state], null),null,(1),null))))),null,(1),null)))))));
});})(G__45156,G__45157,G__45158,G__45159,G__45160,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Reset App To This State"], null),new cljs.core.Keyword(null,"settings_backup_restore","settings_backup_restore",257764755))], 0));
var G__45162 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
var content = fulcro.inspect.helpers.get_in_path(cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(this$))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","id","fulcro.inspect.ui.data-watcher/id",-1652254714).cljs$core$IFn$_invoke$arity$1(watcher),new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)], null));
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","save-snapshot","fulcro.inspect.ui.data-history/save-snapshot",-51085480,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638),null,(1),null)),(new cljs.core.List(null,content,null,(1),null)))))),null,(1),null)))))], null));
});})(G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Save snapshot of current state"], null),new cljs.core.Keyword(null,"add_a_photo","add_a_photo",-1591623386))], 0));
var G__45163 = fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null)], 0));
var G__45164 = fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(cljs.core.seq(snapshots))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892));
});})(G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.seq(snapshots))?"Toggle snapshots view.":"Record a snapshot to enable the snapshots view.")], null),new cljs.core.Keyword(null,"wallpaper","wallpaper",-661723215))], 0));
return (fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$9 ? fulcro.inspect.ui.core.toolbar.cljs$core$IFn$_invoke$arity$9(G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,G__45164) : fulcro.inspect.ui.core.toolbar.call(null,G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,G__45164));
})(),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".row-content",".row-content",-1639716366),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".watcher",".watcher",-1897312565),(fulcro.inspect.ui.data_watcher.data_watcher.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.data_watcher.data_watcher.cljs$core$IFn$_invoke$arity$1(watcher) : fulcro.inspect.ui.data_watcher.data_watcher.call(null,watcher))], 0)),(cljs.core.truth_((function (){var and__3911__auto__ = show_snapshots_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq(snapshots);
} else {
return and__3911__auto__;
}
})())?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".snapshots",".snapshots",-12929849),(function (){var iter__4292__auto__ = ((function (at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function fulcro$inspect$ui$data_history$iter__45168(s__45169){
return (new cljs.core.LazySeq(null,((function (at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (){
var s__45169__$1 = s__45169;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__45169__$1);
if(temp__5457__auto__){
var s__45169__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45169__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__45169__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__45171 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__45170 = (0);
while(true){
if((i__45170 < size__4291__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__45170);
cljs.core.chunk_append(b__45171,(function (){var G__45172 = s;
var G__45173 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","current?","fulcro.inspect.ui.data-history/current?",-1749308960),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(watcher,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638))),new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-delete-snapshot","fulcro.inspect.ui.data-history/on-delete-snapshot",-1755215556),((function (i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p__45174){
var map__45175 = p__45174;
var map__45175__$1 = ((((!((map__45175 == null)))?(((((map__45175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45175):map__45175);
var s__$1 = map__45175__$1;
var snapshot_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45175__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646));
if(cljs.core.truth_(confirm(["Delete ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(snapshot_label)," snapshot?"].join('')))){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","delete-snapshot","fulcro.inspect.ui.data-history/delete-snapshot",-1294838325,null),null,(1),null)),(new cljs.core.List(null,s__$1,null,(1),null))))),null,(1),null)))))));
} else {
return null;
}
});})(i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-pick-snapshot","fulcro.inspect.ui.data-history/on-pick-snapshot",1797121199),((function (i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p__45177){
var map__45178 = p__45177;
var map__45178__$1 = ((((!((map__45178 == null)))?(((((map__45178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45178):map__45178);
var snapshot_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638));
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","reset-app","fulcro.inspect.ui.data-history/reset-app",-1470191172,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),target_app,new cljs.core.Keyword(null,"target-state","target-state",-682429993),snapshot_db], null),null,(1),null))))),null,(1),null)))))));
});})(i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-update-snapshot","fulcro.inspect.ui.data-history/on-update-snapshot",-415455304),((function (i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (snapshot){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","update-snapshot-label","fulcro.inspect.ui.data-history/update-snapshot-label",-551035600,null),null,(1),null)),(new cljs.core.List(null,snapshot,null,(1),null))))),null,(1),null)))))));
});})(i__45170,G__45172,s,c__4290__auto__,size__4291__auto__,b__45171,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null);
return (fulcro.inspect.ui.data_history.snapshot.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_history.snapshot.cljs$core$IFn$_invoke$arity$2(G__45172,G__45173) : fulcro.inspect.ui.data_history.snapshot.call(null,G__45172,G__45173));
})());

var G__45270 = (i__45170 + (1));
i__45170 = G__45270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45171),fulcro$inspect$ui$data_history$iter__45168(cljs.core.chunk_rest(s__45169__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45171),null);
}
} else {
var s = cljs.core.first(s__45169__$2);
return cljs.core.cons((function (){var G__45180 = s;
var G__45181 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","current?","fulcro.inspect.ui.data-history/current?",-1749308960),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(watcher,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-watcher","root-data","fulcro.inspect.ui.data-watcher/root-data",-1622982282),new cljs.core.Keyword("fulcro.inspect.ui.data-viewer","content","fulcro.inspect.ui.data-viewer/content",-1671486168)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638))),new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-delete-snapshot","fulcro.inspect.ui.data-history/on-delete-snapshot",-1755215556),((function (G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p__45182){
var map__45183 = p__45182;
var map__45183__$1 = ((((!((map__45183 == null)))?(((((map__45183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45183):map__45183);
var s__$1 = map__45183__$1;
var snapshot_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45183__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646));
if(cljs.core.truth_(confirm(["Delete ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(snapshot_label)," snapshot?"].join('')))){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","delete-snapshot","fulcro.inspect.ui.data-history/delete-snapshot",-1294838325,null),null,(1),null)),(new cljs.core.List(null,s__$1,null,(1),null))))),null,(1),null)))))));
} else {
return null;
}
});})(G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-pick-snapshot","fulcro.inspect.ui.data-history/on-pick-snapshot",1797121199),((function (G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p__45185){
var map__45186 = p__45185;
var map__45186__$1 = ((((!((map__45186 == null)))?(((((map__45186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45186):map__45186);
var snapshot_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45186__$1,new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-db","fulcro.inspect.ui.data-history/snapshot-db",-528627638));
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","reset-app","fulcro.inspect.ui.data-history/reset-app",-1470191172,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app","app",-560961707),target_app,new cljs.core.Keyword(null,"target-state","target-state",-682429993),snapshot_db], null),null,(1),null))))),null,(1),null)))))));
});})(G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,new cljs.core.Keyword("fulcro.inspect.ui.data-history","on-update-snapshot","fulcro.inspect.ui.data-history/on-update-snapshot",-415455304),((function (G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (snapshot){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.inspect.ui.data-history","update-snapshot-label","fulcro.inspect.ui.data-history/update-snapshot-label",-551035600,null),null,(1),null)),(new cljs.core.List(null,snapshot,null,(1),null))))),null,(1),null)))))));
});})(G__45180,s,s__45169__$2,temp__5457__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
], null);
return (fulcro.inspect.ui.data_history.snapshot.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.ui.data_history.snapshot.cljs$core$IFn$_invoke$arity$2(G__45180,G__45181) : fulcro.inspect.ui.data_history.snapshot.call(null,G__45180,G__45181));
})(),fulcro$inspect$ui$data_history$iter__45168(cljs.core.rest(s__45169__$2)));
}
} else {
return null;
}
break;
}
});})(at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,null,null));
});})(at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
;
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshot-label","fulcro.inspect.ui.data-history/snapshot-label",54333646),((function (iter__4292__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192){
return (function (p1__45139_SHARP_,p2__45138_SHARP_){
return cljs.core.compare(p2__45138_SHARP_,p1__45139_SHARP_);
});})(iter__4292__auto__,at_end_QMARK_,app_state,map__45152,map__45152__$1,history,watcher,current_index,show_dom_preview_QMARK_,show_snapshots_QMARK_,snapshots,map__45153,map__45153__$1,target_app,css,_STAR_reconciler_STAR_45147,_STAR_depth_STAR_45148,_STAR_shared_STAR_45149,_STAR_instrument_STAR_45150,_STAR_parent_STAR_45151,this$,this__38520__auto__,x45142_45192))
,snapshots));
})()], 0)):null)], 0))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_45151;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_45150;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_45149;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_45148;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45147;
}});})(x45142_45192))
;


fulcro.inspect.ui.data_history.DataHistory.prototype.constructor = fulcro.inspect.ui.data_history.DataHistory;

fulcro.inspect.ui.data_history.DataHistory.prototype.constructor.displayName = "fulcro.inspect.ui.data-history/DataHistory";

fulcro.inspect.ui.data_history.DataHistory.prototype.fulcro$isComponent = true;

var x45188_45294 = fulcro.inspect.ui.data_history.DataHistory;
x45188_45294.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45188_45294.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45188_45294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".slider",".slider",2086239105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".watcher",".watcher",-1897312565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row-content",".row-content",-1639716366),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".snapshots",".snapshots",-12929849),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"1px solid #a3a3a3",new cljs.core.Keyword(null,"width","width",-384071477),"220px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".snapshots-toggler",".snapshots-toggler",-1519729720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#a3a3a3",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,".snapshots",".snapshots",-12929849),(function (){var G__45189 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1("odd") : garden.selectors.nth_child.call(null,"odd"));
return (garden.selectors.div.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.div.cljs$core$IFn$_invoke$arity$1(G__45189) : garden.selectors.div.call(null,G__45189));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5"], null)], null)], null);
});})(x45188_45294))
;

x45188_45294.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45188_45294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.CSS,fulcro.inspect.ui.data_watcher.DataWatcher,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,fulcro.inspect.ui.data_history.Snapshot], null);
});})(x45188_45294))
;

x45188_45294.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45188_45294.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45188_45294){
return (function (this$,content){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_history.new_state(content)], null),new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),(0),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994),true,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892),true,new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_watcher.DataWatcher,content),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),cljs.core.PersistentVector.EMPTY], null);
});})(x45188_45294))
;

x45188_45294.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45188_45294.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45188_45294){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45188_45294))
;

x45188_45294.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45188_45294.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45188_45294){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_watcher.DataWatcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_history.Snapshot)], null)], null);
});})(x45188_45294))
;


var x45190_45299 = fulcro.inspect.ui.data_history.DataHistory.prototype;
x45190_45299.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x45190_45299.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x45190_45299){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".slider",".slider",2086239105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".watcher",".watcher",-1897312565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".row-content",".row-content",-1639716366),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".snapshots",".snapshots",-12929849),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"1px solid #a3a3a3",new cljs.core.Keyword(null,"width","width",-384071477),"220px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".snapshots-toggler",".snapshots-toggler",-1519729720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"#a3a3a3",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),"1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,".snapshots",".snapshots",-12929849),(function (){var G__45191 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1("odd") : garden.selectors.nth_child.call(null,"odd"));
return (garden.selectors.div.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.div.cljs$core$IFn$_invoke$arity$1(G__45191) : garden.selectors.div.call(null,G__45191));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5"], null)], null)], null);
});})(x45190_45299))
;

x45190_45299.fulcro_css$css$CSS$include_children$arity$1 = ((function (x45190_45299){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.CSS,fulcro.inspect.ui.data_watcher.DataWatcher,fulcro.inspect.ui.dom_history_viewer.DOMHistoryView,fulcro.inspect.ui.data_history.Snapshot], null);
});})(x45190_45299))
;

x45190_45299.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x45190_45299.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x45190_45299){
return (function (this$,content){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.data_history.new_state(content)], null),new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),(0),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994),true,new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892),true,new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),fulcro.client.primitives.get_initial_state(fulcro.inspect.ui.data_watcher.DataWatcher,content),new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),cljs.core.PersistentVector.EMPTY], null);
});})(x45190_45299))
;

x45190_45299.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x45190_45299.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x45190_45299){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x45190_45299))
;

x45190_45299.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x45190_45299.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x45190_45299){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","history-id","fulcro.inspect.ui.data-history/history-id",2124775725),new cljs.core.Keyword("fulcro.inspect.ui.data-history","history","fulcro.inspect.ui.data-history/history",358883698),new cljs.core.Keyword("fulcro.inspect.ui.data-history","current-index","fulcro.inspect.ui.data-history/current-index",-1658638289),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-dom-preview?","fulcro.inspect.ui.data-history/show-dom-preview?",699525994),new cljs.core.Keyword("fulcro.inspect.ui.data-history","show-snapshots?","fulcro.inspect.ui.data-history/show-snapshots?",372510892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","watcher","fulcro.inspect.ui.data-history/watcher",1673416381),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_watcher.DataWatcher)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.data-history","snapshots","fulcro.inspect.ui.data-history/snapshots",1409222646),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_history.Snapshot)], null)], null);
});})(x45190_45299))
;


fulcro.inspect.ui.data_history.DataHistory.cljs$lang$type = true;

fulcro.inspect.ui.data_history.DataHistory.cljs$lang$ctorStr = "fulcro.inspect.ui.data-history/DataHistory";

fulcro.inspect.ui.data_history.DataHistory.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.data-history/DataHistory");
});
fulcro.inspect.ui.data_history.data_history = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.data_history.DataHistory);

//# sourceMappingURL=fulcro.inspect.ui.data_history.js.map

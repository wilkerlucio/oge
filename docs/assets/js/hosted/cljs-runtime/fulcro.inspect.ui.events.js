goog.provide('fulcro.inspect.ui.events');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
fulcro.inspect.ui.events.KEYS = cljs.core.PersistentHashMap.fromArrays(["d","n","z","w","space","s","tab","right","f","e","up","q","p","j","return","x","v","backspace","escape","a","t","slash","i","k","down","b","r","y","g","l","u","h","m","o","c","left"],[(68),(78),(90),(87),(32),(83),(9),(39),(70),(69),(38),(81),(80),(74),(13),(88),(86),(8),(27),(65),(84),(191),(73),(75),(40),(66),(82),(89),(71),(76),(85),(72),(77),(79),(67),(37)]);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.ui.events","key-string","fulcro.inspect.ui.events/key-string",1306560607),cljs.core.list(new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),new cljs.core.Symbol("fulcro.inspect.ui.events","KEYS","fulcro.inspect.ui.events/KEYS",1827173822,null))),cljs.core.set(cljs.core.keys(fulcro.inspect.ui.events.KEYS)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["shift",null,"alt",null,"meta",null,"ctrl",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["shift",null,"alt",null,"meta",null,"ctrl",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.ui.events","keystroke","fulcro.inspect.ui.events/keystroke",624751047),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42563#","p1__42563#",-1255911082,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"p1__42563#","p1__42563#",-1255911082,null),/-/)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42564#","p1__42564#",1154319649,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"p1__42564#","p1__42564#",1154319649,null)))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("fulcro.inspect.ui.events","key-string","fulcro.inspect.ui.events/key-string",1306560607))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42563#","p1__42563#",-1255911082,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"p1__42563#","p1__42563#",-1255911082,null),/-/)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__42564#","p1__42564#",1154319649,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"p1__42564#","p1__42564#",1154319649,null)))),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("fulcro.inspect.ui.events","key-string","fulcro.inspect.ui.events/key-string",1306560607))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","split","clojure.string/split",651388004,null),new cljs.core.Symbol(null,"%","%",-950237169,null),/-/)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.string","join","clojure.string/join",-539723360,null),"-",new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__42563_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__42563_SHARP_,/-/);
}),null,true,(function (p1__42564_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",p1__42564_SHARP_);
})),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.rep_impl(new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422),new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422)),new cljs.core.Keyword("fulcro.inspect.ui.events","key-string","fulcro.inspect.ui.events/key-string",1306560607)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("fulcro.inspect.ui.events","modifier","fulcro.inspect.ui.events/modifier",-1288025422)),new cljs.core.Keyword("fulcro.inspect.ui.events","key-string","fulcro.inspect.ui.events/key-string",1306560607)], null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.ui.events","key-code","fulcro.inspect.ui.events/key-code",-821351406),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
fulcro.inspect.ui.events.key_code = (function fulcro$inspect$ui$events$key_code(name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.ui.events","key-code","fulcro.inspect.ui.events/key-code",-821351406),cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.events.KEYS,name)], null);
});
fulcro.inspect.ui.events.parse_keystroke = (function fulcro$inspect$ui$events$parse_keystroke(keystroke){
var temp__5455__auto__ = cljs.spec.alpha.conform(new cljs.core.Keyword("fulcro.inspect.ui.events","keystroke","fulcro.inspect.ui.events/keystroke",624751047),keystroke);
if(cljs.core.truth_(temp__5455__auto__)){
var map__42571 = temp__5455__auto__;
var map__42571__$1 = ((((!((map__42571 == null)))?(((((map__42571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42571):map__42571);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.ui.events","key-code","fulcro.inspect.ui.events/key-code",-821351406),cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.events.KEYS,key),new cljs.core.Keyword("fulcro.inspect.ui.events","modifiers","fulcro.inspect.ui.events/modifiers",-801662012),modifiers], null);
} else {
return console.warn(["Keystroke `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystroke),"` is not valid."].join(''));
}
});
fulcro.inspect.ui.events.match_modifiers_QMARK_ = (function fulcro$inspect$ui$events$match_modifiers_QMARK_(e,p__42578){
var map__42579 = p__42578;
var map__42579__$1 = ((((!((map__42579 == null)))?(((((map__42579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42579):map__42579);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42579__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","modifiers","fulcro.inspect.ui.events/modifiers",-801662012));
return cljs.core.every_QMARK_(((function (map__42579,map__42579__$1,modifiers){
return (function (p1__42576_SHARP_){
var G__42581 = e;
var G__42582 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42576_SHARP_),"Key"].join('');
return goog.object.get(G__42581,G__42582);
});})(map__42579,map__42579__$1,modifiers))
,modifiers);
});
fulcro.inspect.ui.events.match_key_QMARK_ = (function fulcro$inspect$ui$events$match_key_QMARK_(e,p__42586){
var map__42587 = p__42586;
var map__42587__$1 = ((((!((map__42587 == null)))?(((((map__42587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42587):map__42587);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42587__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","key-code","fulcro.inspect.ui.events/key-code",-821351406));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(e,"keyCode"),key_code);
});
fulcro.inspect.ui.events.handle_event = (function fulcro$inspect$ui$events$handle_event(this$,e){
var map__42592 = fulcro.client.primitives.props(this$);
var map__42592__$1 = ((((!((map__42592 == null)))?(((((map__42592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42592):map__42592);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42592__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","action","fulcro.inspect.ui.events/action",-487804538));
var map__42593 = goog.object.get(this$,"matcher");
var map__42593__$1 = ((((!((map__42593 == null)))?(((((map__42593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42593):map__42593);
var matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42593__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
if(cljs.core.truth_((function (){var and__3911__auto__ = fulcro.inspect.ui.events.match_key_QMARK_(e,matcher);
if(cljs.core.truth_(and__3911__auto__)){
return fulcro.inspect.ui.events.match_modifiers_QMARK_(e,matcher);
} else {
return and__3911__auto__;
}
})())){
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(e) : action.call(null,e));
} else {
return null;
}
});
fulcro.inspect.ui.events.read_target = (function fulcro$inspect$ui$events$read_target(target){
if(cljs.core.fn_QMARK_(target)){
return (target.cljs$core$IFn$_invoke$arity$0 ? target.cljs$core$IFn$_invoke$arity$0() : target.call(null));
} else {
if((target == null)){
return document.body;
} else {
return target;

}
}
});
fulcro.inspect.ui.events.start_handler = (function fulcro$inspect$ui$events$start_handler(this$){
var temp__5455__auto__ = fulcro.inspect.ui.events.parse_keystroke(new cljs.core.Keyword("fulcro.inspect.ui.events","keystroke","fulcro.inspect.ui.events/keystroke",624751047).cljs$core$IFn$_invoke$arity$1(fulcro.client.primitives.props(this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var matcher = temp__5455__auto__;
var handler = ((function (matcher,temp__5455__auto__){
return (function (p1__42601_SHARP_){
return fulcro.inspect.ui.events.handle_event(this$,p1__42601_SHARP_);
});})(matcher,temp__5455__auto__))
;
var map__42603 = fulcro.client.primitives.props(this$);
var map__42603__$1 = ((((!((map__42603 == null)))?(((((map__42603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42603):map__42603);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42603__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","target","fulcro.inspect.ui.events/target",-652104725));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42603__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","event","fulcro.inspect.ui.events/event",-1572807004));
var target__$1 = fulcro.inspect.ui.events.read_target(target);
var event__$1 = (function (){var or__3922__auto__ = event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "keydown";
}
})();
var G__42605_42611 = this$;
var G__42606_42612 = "matcher";
var G__42607_42613 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"matcher","matcher",-452768995),matcher], null);
goog.object.set(G__42605_42611,G__42606_42612,G__42607_42613);

if(cljs.core.truth_(target__$1)){
return target__$1.addEventListener(event__$1,handler);
} else {
return null;
}
} else {
return null;
}
});
fulcro.inspect.ui.events.dispose_handler = (function fulcro$inspect$ui$events$dispose_handler(this$){
var temp__5455__auto__ = goog.object.get(this$,"matcher");
if(cljs.core.truth_(temp__5455__auto__)){
var map__42616 = temp__5455__auto__;
var map__42616__$1 = ((((!((map__42616 == null)))?(((((map__42616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42616):map__42616);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42616__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var map__42618 = fulcro.client.primitives.props(this$);
var map__42618__$1 = ((((!((map__42618 == null)))?(((((map__42618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42618):map__42618);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42618__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","target","fulcro.inspect.ui.events/target",-652104725));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42618__$1,new cljs.core.Keyword("fulcro.inspect.ui.events","event","fulcro.inspect.ui.events/event",-1572807004));
var target__$1 = fulcro.inspect.ui.events.read_target(target);
var event__$1 = (function (){var or__3922__auto__ = event;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "keydown";
}
})();
if(cljs.core.truth_(target__$1)){
return target__$1.removeEventListener(event__$1,handler);
} else {
return null;
}
} else {
return null;
}
});
if(typeof fulcro.inspect.ui.events.KeyListener !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.events.KeyListener = (function fulcro$inspect$ui$events$KeyListener(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.events.KeyListener.prototype = goog.object.clone(React.Component.prototype);
}

var x42631_42659 = fulcro.inspect.ui.events.KeyListener.prototype;
x42631_42659.shouldComponentUpdate = ((function (x42631_42659){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__42633 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__42633);
} else {
return G__42633;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42636 = this__38521__auto__.state;
var G__42637 = "fulcro$state";
return goog.object.get(G__42636,G__42637);
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
});})(x42631_42659))
;

x42631_42659.componentWillMount = ((function (x42631_42659){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x42631_42659))
;

x42631_42659.componentDidMount = ((function (x42631_42659){
return (function (){
var this__38511__auto__ = this;
var this$ = this__38511__auto__;
var reconciler__38512__auto__ = fulcro.client.primitives.get_reconciler(this__38511__auto__);
var lifecycle__38513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38512__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__38511__auto__,"fulcro$mounted",true);

if((lifecycle__38513__auto__ == null)){
} else {
var G__42639_42664 = this__38511__auto__;
var G__42640_42665 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2(G__42639_42664,G__42640_42665) : lifecycle__38513__auto__.call(null,G__42639_42664,G__42640_42665));
}

return fulcro.inspect.ui.events.start_handler(this$);
});})(x42631_42659))
;

x42631_42659.componentWillUnmount = ((function (x42631_42659){
return (function (){
var this__38514__auto__ = this;
var this$ = this__38514__auto__;
var reconciler__38515__auto__ = fulcro.client.primitives.get_reconciler(this__38514__auto__);
var lifecycle__38516__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38515__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var cfg__38517__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler__38515__auto__);
var st__38518__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__38517__auto__);
var indexer__38519__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__38517__auto__);
goog.object.set(this__38514__auto__,"fulcro$mounted",false);

if(cljs.core.truth_((function (){var and__3911__auto__ = !((st__38518__auto__ == null));
if(and__3911__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st__38518__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249),this__38514__auto__], null));
} else {
return and__3911__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__38518__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client.primitives","queries","fulcro.client.primitives/queries",-963324249)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this__38514__auto__], 0));
} else {
}

if((lifecycle__38516__auto__ == null)){
} else {
var G__42641_42668 = this__38514__auto__;
var G__42642_42669 = new cljs.core.Keyword(null,"unmount","unmount",-1779083333);
(lifecycle__38516__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38516__auto__.cljs$core$IFn$_invoke$arity$2(G__42641_42668,G__42642_42669) : lifecycle__38516__auto__.call(null,G__42641_42668,G__42642_42669));
}

if((indexer__38519__auto__ == null)){
} else {
fulcro.client.impl.protocols.drop_component_BANG_(indexer__38519__auto__,this__38514__auto__);
}

return fulcro.inspect.ui.events.dispose_handler(this$);
});})(x42631_42659))
;

x42631_42659.componentWillUpdate = ((function (x42631_42659){
return (function (next_props__38498__auto__,next_state__38499__auto__){
var this__38497__auto__ = this;
var this$ = this__38497__auto__;
var _ = fulcro.client.primitives._next_props(next_props__38498__auto__,this__38497__auto__);
var ___$1 = (function (){var or__3922__auto__ = goog.object.get(next_state__38499__auto__,"fulcro$pendingState");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.object.get(next_state__38499__auto__,"fulcro$state");
}
})();
var ret__38500__auto__ = fulcro.inspect.ui.events.dispose_handler(this$);
if(((!((this__38497__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38497__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38501__auto___42670 = fulcro.client.primitives.ident(this__38497__auto__,fulcro.client.primitives.props(this__38497__auto__));
var next_ident__38502__auto___42671 = fulcro.client.primitives.ident(this__38497__auto__,___$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38501__auto___42670,next_ident__38502__auto___42671)){
var idxr__38503__auto___42673 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38497__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38503__auto___42673 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38503__auto___42673),((function (idxr__38503__auto___42673,ident__38501__auto___42670,next_ident__38502__auto___42671,this$,_,___$1,ret__38500__auto__,this__38497__auto__,x42631_42659){
return (function (indexes__38504__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38504__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38501__auto___42670], null),cljs.core.disj,this__38497__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38502__auto___42671], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38497__auto__);
});})(idxr__38503__auto___42673,ident__38501__auto___42670,next_ident__38502__auto___42671,this$,_,___$1,ret__38500__auto__,this__38497__auto__,x42631_42659))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38497__auto__);

fulcro.client.primitives.merge_pending_state_BANG_(this__38497__auto__);

return ret__38500__auto__;
});})(x42631_42659))
;

x42631_42659.componentDidUpdate = ((function (x42631_42659){
return (function (prev_props__38506__auto__,prev_state__38507__auto__){
var this__38505__auto__ = this;
var this$ = this__38505__auto__;
var _ = fulcro.client.primitives._prev_props(prev_props__38506__auto__,this__38505__auto__);
var ___$1 = goog.object.get(prev_state__38507__auto__,"fulcro$previousState");
fulcro.inspect.ui.events.start_handler(this$);

return fulcro.client.primitives.clear_prev_props_BANG_(this__38505__auto__);
});})(x42631_42659))
;

x42631_42659.render = ((function (x42631_42659){
return (function (){
var this__38520__auto__ = this;
var _ = this__38520__auto__;
var _STAR_reconciler_STAR_42649 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42650 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_42651 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_42652 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_42653 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{return fulcro.client.dom.macro_create_element_STAR_(["noscript",({})]);
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_42653;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_42652;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_42651;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_42650;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42649;
}});})(x42631_42659))
;


fulcro.inspect.ui.events.KeyListener.prototype.constructor = fulcro.inspect.ui.events.KeyListener;

fulcro.inspect.ui.events.KeyListener.prototype.constructor.displayName = "fulcro.inspect.ui.events/KeyListener";

fulcro.inspect.ui.events.KeyListener.prototype.fulcro$isComponent = true;

var x42655_42679 = fulcro.inspect.ui.events.KeyListener;


var x42656_42680 = fulcro.inspect.ui.events.KeyListener.prototype;


fulcro.inspect.ui.events.KeyListener.cljs$lang$type = true;

fulcro.inspect.ui.events.KeyListener.cljs$lang$ctorStr = "fulcro.inspect.ui.events/KeyListener";

fulcro.inspect.ui.events.KeyListener.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.events/KeyListener");
});
fulcro.inspect.ui.events.key_listener = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.events.KeyListener);

//# sourceMappingURL=fulcro.inspect.ui.events.js.map

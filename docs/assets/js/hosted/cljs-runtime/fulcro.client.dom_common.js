goog.provide('fulcro.client.dom_common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
fulcro.client.dom_common.remove_separators = (function fulcro$client$dom_common$remove_separators(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
fulcro.client.dom_common.get_tokens = (function fulcro$client$dom_common$get_tokens(k){
return cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(k));
});
/**
 * Parse CSS shorthand keyword and return map of id/classes.
 * 
 *   (parse :.klass3#some-id.klass1.klass2)
 *   => {:id        "some-id"
 *    :classes ["klass3" "klass1" "klass2"]}
 */
fulcro.client.dom_common.parse = (function fulcro$client$dom_common$parse(k){
if(cljs.core.truth_(k)){
var tokens = fulcro.client.dom_common.get_tokens(k);
var id = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens){
return (function (p1__39566_SHARP_){
return cljs.core.re_matches(/^#.*/,p1__39566_SHARP_);
});})(tokens))
,tokens));
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tokens,id){
return (function (p1__39567_SHARP_){
return cljs.core.re_matches(/^\..*/,p1__39567_SHARP_);
});})(tokens,id))
,tokens);
var sanitized_id = fulcro.client.dom_common.remove_separators(id);
if(cljs.core.truth_(cljs.core.re_matches(/^(\.[^.#]+|#[^.#]+)+$/,cljs.core.name(k)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid style keyword. It contains something other than classnames and IDs.",cljs.core.PersistentArrayMap.EMPTY);
}

var G__39569 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(fulcro.client.dom_common.remove_separators,classes))], null);
if(cljs.core.truth_(sanitized_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39569,new cljs.core.Keyword(null,"id","id",-1388402092),sanitized_id);
} else {
return G__39569;
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Takes a sequence of classname strings and a string with existing classes. Returns a string of these properly joined.
 * 
 *   classes-str can be nil or and empty string, and classes-seq can be nil or empty.
 */
fulcro.client.dom_common.combined_classes = (function fulcro$client$dom_common$combined_classes(classes_seq,classes_str){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",((cljs.core.seq(classes_str))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes_seq,classes_str):classes_seq));
});
/**
 * Combine a hiccup-style keyword with props that are either a JS or CLJS map.
 */
fulcro.client.dom_common.add_kwprops_to_props = (function fulcro$client$dom_common$add_kwprops_to_props(props,kw){
var map__39574 = fulcro.client.dom_common.parse(kw);
var map__39574__$1 = ((((!((map__39574 == null)))?(((((map__39574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39574):map__39574);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39574__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentVector.EMPTY);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((((props == null)) || (cljs.core.object_QMARK_(props)))){
var props__$1 = goog.object.clone(props);
var existing_classes = goog.object.get(props__$1,"className");
if(cljs.core.seq(classes)){
var G__39577_39582 = props__$1;
var G__39578_39583 = "className";
var G__39579_39584 = fulcro.client.dom_common.combined_classes(classes,existing_classes);
goog.object.set(G__39577_39582,G__39578_39583,G__39579_39584);
} else {
}

if(cljs.core.truth_(id)){
goog.object.set(props__$1,"id",id);
} else {
}

return props__$1;
} else {
var existing_classes = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
var G__39580 = (function (){var or__3922__auto__ = props;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var G__39580__$1 = ((cljs.core.seq(classes))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39580,new cljs.core.Keyword(null,"className","className",-1983287057),fulcro.client.dom_common.combined_classes(classes,existing_classes)):G__39580);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39580__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__39580__$1;
}
}
});
fulcro.client.dom_common.tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 131, [new cljs.core.Symbol(null,"form","form",16469056,null),null,new cljs.core.Symbol(null,"audio","audio",-835308448,null),null,new cljs.core.Symbol(null,"input","input",-2097503808,null),null,new cljs.core.Symbol(null,"menuitem","menuitem",-1650388416,null),null,new cljs.core.Symbol(null,"radialGradient","radialGradient",-1252188576,null),null,new cljs.core.Symbol(null,"base","base",1825810849,null),null,new cljs.core.Symbol(null,"h1","h1",-256355935,null),null,new cljs.core.Symbol(null,"embed","embed",285618178,null),null,new cljs.core.Symbol(null,"h3","h3",-586824606,null),null,new cljs.core.Symbol(null,"body","body",-408674142,null),null,new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),null,new cljs.core.Symbol(null,"progress","progress",1884855074,null),null,new cljs.core.Symbol(null,"main","main",-477271134,null),null,new cljs.core.Symbol(null,"cite","cite",-744995773,null),null,new cljs.core.Symbol(null,"rect","rect",1531628899,null),null,new cljs.core.Symbol(null,"polyline","polyline",-91019517,null),null,new cljs.core.Symbol(null,"map","map",-1282745308,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"i","i",253690212,null),null,new cljs.core.Symbol(null,"p","p",1791580836,null),null,new cljs.core.Symbol(null,"nav","nav",-1934895292,null),null,new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),null,new cljs.core.Symbol(null,"a","a",-482876059,null),null,new cljs.core.Symbol(null,"menu","menu",1992786725,null),null,new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),null,new cljs.core.Symbol(null,"img","img",-1211748411,null),null,new cljs.core.Symbol(null,"text","text",-150030170,null),null,new cljs.core.Symbol(null,"span","span",-1259562778,null),null,new cljs.core.Symbol(null,"track","track",1836319014,null),null,new cljs.core.Symbol(null,"data","data",1407862150,null),null,new cljs.core.Symbol(null,"u","u",483896742,null),null,new cljs.core.Symbol(null,"dl","dl",-499620186,null),null,new cljs.core.Symbol(null,"select","select",-1506602266,null),null,new cljs.core.Symbol(null,"polygon","polygon",-1817382010,null),null,new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),null,new cljs.core.Symbol(null,"html","html",641734630,null),null,new cljs.core.Symbol(null,"thead","thead",1348656231,null),null,new cljs.core.Symbol(null,"path","path",1452340359,null),null,new cljs.core.Symbol(null,"del","del",-2079460185,null),null,new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),null,new cljs.core.Symbol(null,"aside","aside",-1240038232,null),null,new cljs.core.Symbol(null,"figure","figure",1079137448,null),null,new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),null,new cljs.core.Symbol(null,"mask","mask",1054783080,null),null,new cljs.core.Symbol(null,"q","q",-1965434072,null),null,new cljs.core.Symbol(null,"bdi","bdi",317505641,null),null,new cljs.core.Symbol(null,"video","video",1797419657,null),null,new cljs.core.Symbol(null,"address","address",-2094936343,null),null,new cljs.core.Symbol(null,"caption","caption",785147625,null),null,new cljs.core.Symbol(null,"dd","dd",300093898,null),null,new cljs.core.Symbol(null,"rp","rp",-647737686,null),null,new cljs.core.Symbol(null,"hr","hr",-1276695702,null),null,new cljs.core.Symbol(null,"meta","meta",-1154898805,null),null,new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),null,new cljs.core.Symbol(null,"table","table",1075588491,null),null,new cljs.core.Symbol(null,"pre","pre",-535978900,null),null,new cljs.core.Symbol(null,"ul","ul",291010124,null),null,new cljs.core.Symbol(null,"sup","sup",-398960819,null),null,new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),null,new cljs.core.Symbol(null,"sub","sub",-453228498,null),null,new cljs.core.Symbol(null,"mark","mark",1266715182,null),null,new cljs.core.Symbol(null,"script","script",336087726,null),null,new cljs.core.Symbol(null,"big","big",-1750885618,null),null,new cljs.core.Symbol(null,"button","button",-1197855826,null),null,new cljs.core.Symbol(null,"wbr","wbr",1869193327,null),null,new cljs.core.Symbol(null,"strong","strong",1910060527,null),null,new cljs.core.Symbol(null,"use","use",-205850897,null),null,new cljs.core.Symbol(null,"li","li",-1930876848,null),null,new cljs.core.Symbol(null,"dt","dt",1272086768,null),null,new cljs.core.Symbol(null,"td","td",-1174502416,null),null,new cljs.core.Symbol(null,"tr","tr",215756881,null),null,new cljs.core.Symbol(null,"circle","circle",-751223407,null),null,new cljs.core.Symbol(null,"section","section",1340390001,null),null,new cljs.core.Symbol(null,"th","th",1094922961,null),null,new cljs.core.Symbol(null,"time","time",-1268547887,null),null,new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),null,new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),null,new cljs.core.Symbol(null,"legend","legend",613339282,null),null,new cljs.core.Symbol(null,"em","em",-1946622734,null),null,new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),null,new cljs.core.Symbol(null,"article","article",1618846482,null),null,new cljs.core.Symbol(null,"clipPath","clipPath",705911730,null),null,new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),null,new cljs.core.Symbol(null,"source","source",1206599988,null),null,new cljs.core.Symbol(null,"output","output",534662484,null),null,new cljs.core.Symbol(null,"header","header",1759972661,null),null,new cljs.core.Symbol(null,"datalist","datalist",405488053,null),null,new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),null,new cljs.core.Symbol(null,"s","s",-948495851,null),null,new cljs.core.Symbol(null,"ins","ins",618547957,null),null,new cljs.core.Symbol(null,"footer","footer",-1047990379,null),null,new cljs.core.Symbol(null,"title","title",-2017930186,null),null,new cljs.core.Symbol(null,"h5","h5",-188625098,null),null,new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),null,new cljs.core.Symbol(null,"param","param",-640803946,null),null,new cljs.core.Symbol(null,"div","div",-1597244137,null),null,new cljs.core.Symbol(null,"option","option",1705663799,null),null,new cljs.core.Symbol(null,"summary","summary",2021379479,null),null,new cljs.core.Symbol(null,"samp","samp",-1148294633,null),null,new cljs.core.Symbol(null,"small","small",-520957065,null),null,new cljs.core.Symbol(null,"style","style",1143888791,null),null,new cljs.core.Symbol(null,"textarea","textarea",990155703,null),null,new cljs.core.Symbol(null,"h4","h4",-649572776,null),null,new cljs.core.Symbol(null,"head","head",869147608,null),null,new cljs.core.Symbol(null,"g","g",-916345864,null),null,new cljs.core.Symbol(null,"stop","stop",-500379815,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"tspan","tspan",82678330,null),null,new cljs.core.Symbol(null,"ol","ol",-1721911718,null),null,new cljs.core.Symbol(null,"details","details",-697640358,null),null,new cljs.core.Symbol(null,"line","line",1852876762,null),null,new cljs.core.Symbol(null,"col","col",-318831557,null),null,new cljs.core.Symbol(null,"label","label",-936024965,null),null,new cljs.core.Symbol(null,"picture","picture",718588123,null),null,new cljs.core.Symbol(null,"rt","rt",-2030955077,null),null,new cljs.core.Symbol(null,"h6","h6",-2097141989,null),null,new cljs.core.Symbol(null,"link","link",-128631941,null),null,new cljs.core.Symbol(null,"defs","defs",-1255986052,null),null,new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),null,new cljs.core.Symbol(null,"meter","meter",1452889916,null),null,new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),null,new cljs.core.Symbol(null,"b","b",-1172211299,null),null,new cljs.core.Symbol(null,"svg","svg",-1797646627,null),null,new cljs.core.Symbol(null,"ellipse","ellipse",-1518544067,null),null,new cljs.core.Symbol(null,"code","code",-1068142627,null),null,new cljs.core.Symbol(null,"dialog","dialog",-1239285634,null),null,new cljs.core.Symbol(null,"linearGradient","linearGradient",-942471042,null),null,new cljs.core.Symbol(null,"noscript","noscript",935754238,null),null,new cljs.core.Symbol(null,"h2","h2",1267868799,null),null,new cljs.core.Symbol(null,"area","area",2112538783,null),null,new cljs.core.Symbol(null,"br","br",-1720330977,null),null], null), null);

//# sourceMappingURL=fulcro.client.dom_common.js.map

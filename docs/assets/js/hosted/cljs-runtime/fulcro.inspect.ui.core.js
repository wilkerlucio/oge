goog.provide('fulcro.inspect.ui.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fulcro.client.primitives');
goog.require('fulcro_css.css');
goog.require('fulcro.ui.icons');
goog.require('fulcro.inspect.ui.helpers');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.inspect.ui.events');
goog.require('garden.selectors');
fulcro.inspect.ui.core.mono_font_family = "monospace";
fulcro.inspect.ui.core.label_font_family = "sans-serif";
fulcro.inspect.ui.core.label_font_size = "12px";
fulcro.inspect.ui.core.color_bg_light = "#f5f5f5";
fulcro.inspect.ui.core.color_bg_light_border = "#e1e1e1";
fulcro.inspect.ui.core.color_bg_medium_border = "#cdcdcd";
fulcro.inspect.ui.core.color_text_normal = "#5a5a5a";
fulcro.inspect.ui.core.color_text_strong = "#333";
fulcro.inspect.ui.core.color_text_faded = "#bbb";
fulcro.inspect.ui.core.color_icon_normal = "#6e6e6e";
fulcro.inspect.ui.core.color_icon_strong = "#333";
fulcro.inspect.ui.core.color_row_hover = "#eef3fa";
fulcro.inspect.ui.core.color_row_selected = "#e6e6e6";
fulcro.inspect.ui.core.box_shadow = "0 6px 6px rgba(0, 0, 0, 0.26), 0 9px 20px rgba(0, 0, 0, 0.19)";
fulcro.inspect.ui.core.css_info_group = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #eee",new cljs.core.Keyword(null,"padding","padding",1660304693),"7px 0"], null);
fulcro.inspect.ui.core.css_info_label = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"6px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null);
fulcro.inspect.ui.core.css_timestamp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"color","color",1011675173),"#808080",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 4px 0 7px"], null);
fulcro.inspect.ui.core.add_zeros = (function fulcro$inspect$ui$core$add_zeros(n,x){
var n__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
while(true){
if((cljs.core.count(n__$1) < x)){
var G__44315 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n__$1)].join('');
n__$1 = G__44315;
continue;
} else {
return n__$1;
}
break;
}
});
fulcro.inspect.ui.core.print_timestamp = (function fulcro$inspect$ui$core$print_timestamp(date){
if(cljs.core.truth_(date)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.add_zeros(date.getHours(),(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.add_zeros(date.getMinutes(),(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.add_zeros(date.getSeconds(),(2))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.add_zeros(date.getMilliseconds(),(3)))].join('');
} else {
return null;
}
});
fulcro.inspect.ui.core.foreign_class = (function fulcro$inspect$ui$core$foreign_class(comp,class$){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__44316 = fulcro_css.css.get_classnames(comp);
return (class$.cljs$core$IFn$_invoke$arity$1 ? class$.cljs$core$IFn$_invoke$arity$1(G__44316) : class$.call(null,G__44316));
})())].join(''));
});
fulcro.inspect.ui.core.icons_base64 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dock-right","dock-right",-1512832137),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0xMi0yOVQxOToxMjowOTwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjc8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+NTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChA7ceQAAAA5SURBVCgVY8zLy/vPQAZgIkMPWAsLTOOkSZMYYWx0GpuryLZxVCN68CLxyQ4cRmxxhGQwTibZNgIAuBEIq/65jKIAAAAASUVORK5CYII=",new cljs.core.Keyword(null,"dock-right-blue","dock-right-blue",51799240),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0xMi0yOVQyMDoxMjo0NjwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjc8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+NTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cs4JPgEAAAA4SURBVCgVY3RqePOfgQzARIYesBYWmMZ9DSKMMDY6jc1VZNs4qhE9eJH4ZAcOI7Y4QjIYJ5NsGwHiBAlzQbjUggAAAABJRU5ErkJggg==",new cljs.core.Keyword(null,"dock-bottom","dock-bottom",-123209135),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAIAAADd4huNAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0xMi0yOVQxOToxMjozODwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjc8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+NTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CgnaVK0AAAAtSURBVCgVY8zLy2MgDjARpwykigWidOLEiXj05OfnA2VJMHXAlTLSJLAG3FsAkVEFrYi1uDQAAAAASUVORK5CYII=",new cljs.core.Keyword(null,"dock-bottom-blue","dock-bottom-blue",-537131060),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNy0xMi0yOVQyMDoxMjo4ODwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjc8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6Q29tcHJlc3Npb24+NTwvdGlmZjpDb21wcmVzc2lvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cmpsn3gAAAA1SURBVCgVY3RqePOfgQzARIYesBYWmMZ9DSKMMDY+GuZCsm0cQhoZYZ7FFyDY5IaQH8l2KgCK6glzbJbgcgAAAABJRU5ErkJggg=="], null);
/**
 * Gets an SVG representation of the given icon. See material-icon-paths.
 */
fulcro.inspect.ui.core.fulcro_icon = (function fulcro$inspect$ui$core$fulcro_icon(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44323 = arguments.length;
var i__4500__auto___44324 = (0);
while(true){
if((i__4500__auto___44324 < len__4499__auto___44323)){
args__4502__auto__.push((arguments[i__4500__auto___44324]));

var G__44325 = (i__4500__auto___44324 + (1));
i__4500__auto___44324 = G__44325;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.core.fulcro_icon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.core.fulcro_icon.cljs$core$IFn$_invoke$arity$variadic = (function (icon_name,p__44319){
var map__44320 = p__44319;
var map__44320__$1 = ((((!((map__44320 == null)))?(((((map__44320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44320):map__44320);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"states","states",1389013542));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var onClick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44320__$1,new cljs.core.Keyword(null,"title","title",636505583));
if((icon_name instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","Icon name must be a keyword","\n","(keyword? icon-name)"].join('')));
}

var add_class = ((function (map__44320,map__44320__$1,width,height,modifiers,states,className,onClick,title){
return (function (attrs){
return null;
});})(map__44320,map__44320__$1,width,height,modifiers,states,className,onClick,title))
;
var path_check = (icon_name.cljs$core$IFn$_invoke$arity$1 ? icon_name.cljs$core$IFn$_invoke$arity$1(fulcro.ui.icons.material_icon_paths) : icon_name.call(null,fulcro.ui.icons.material_icon_paths));
var icon_name__$1 = clojure.string.replace(cljs.core.name(icon_name),/_/,"-");
if(clojure.string.blank_QMARK_(path_check)){
return null;
} else {
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.clj__GT_js((function (){var G__44322 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.ui.icons.concat_class_string.cljs$core$IFn$_invoke$arity$3("c-icon","--",modifiers),["c-icon--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon_name__$1)].join(''),fulcro.ui.icons.concat_state_string(states),fulcro.ui.icons.concat_class_string.cljs$core$IFn$_invoke$arity$1(className)], null)),new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"width","width",-384071477),"24",new cljs.core.Keyword(null,"height","height",1025178622),"24",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"title",new cljs.core.Keyword(null,"role","role",-736691072),"img",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null);
if(cljs.core.truth_(onClick)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44322,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__44322,add_class,path_check,icon_name__$1,map__44320,map__44320__$1,width,height,modifiers,states,className,onClick,title){
return (function (){
return (onClick.cljs$core$IFn$_invoke$arity$0 ? onClick.cljs$core$IFn$_invoke$arity$0() : onClick.call(null));
});})(G__44322,add_class,path_check,icon_name__$1,map__44320,map__44320__$1,width,height,modifiers,states,className,onClick,title))
);
} else {
return G__44322;
}
})()),fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], 0)),fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"d": path_check})], 0))], 0));
}
});

fulcro.inspect.ui.core.fulcro_icon.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.core.fulcro_icon.cljs$lang$applyTo = (function (seq44317){
var G__44318 = cljs.core.first(seq44317);
var seq44317__$1 = cljs.core.next(seq44317);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44318,seq44317__$1);
});

fulcro.inspect.ui.core.icon = (function fulcro$inspect$ui$core$icon(var_args){
var G__44327 = arguments.length;
switch (G__44327) {
case 1:
return fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$1 = (function (name){
return fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,name);
});

fulcro.inspect.ui.core.icon.cljs$core$IFn$_invoke$arity$2 = (function (props,name){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.core.icons_base64,name);
if(cljs.core.truth_(temp__5455__auto__)){
var code = temp__5455__auto__;
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),code], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.inspect.ui.core.fulcro_icon,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,props));
}
});

fulcro.inspect.ui.core.icon.cljs$lang$maxFixedArity = 2;

if(typeof fulcro.inspect.ui.core.Row !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.core.Row = (function fulcro$inspect$ui$core$Row(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.core.Row.prototype = goog.object.clone(React.Component.prototype);
}

var x44331_44343 = fulcro.inspect.ui.core.Row.prototype;
x44331_44343.componentDidMount = ((function (x44331_44343){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44331_44343))
;

x44331_44343.componentWillUpdate = ((function (x44331_44343){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44344 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44345 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44344,next_ident__38531__auto___44345)){
var idxr__38532__auto___44346 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44346 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44346),((function (idxr__38532__auto___44346,ident__38530__auto___44344,next_ident__38531__auto___44345,this__38521__auto__,x44331_44343){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44344], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44345], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44346,ident__38530__auto___44344,next_ident__38531__auto___44345,this__38521__auto__,x44331_44343))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44331_44343))
;

x44331_44343.shouldComponentUpdate = ((function (x44331_44343){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44333 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44333);
} else {
return G__44333;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44334 = this__38521__auto__.state;
var G__44335 = "fulcro$state";
return goog.object.get(G__44334,G__44335);
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
});})(x44331_44343))
;

x44331_44343.componentWillUnmount = ((function (x44331_44343){
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
});})(x44331_44343))
;

x44331_44343.componentDidUpdate = ((function (x44331_44343){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44331_44343))
;

x44331_44343.componentWillMount = ((function (x44331_44343){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44331_44343))
;

x44331_44343.render = ((function (x44331_44343){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44336 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44337 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44338 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44339 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44340 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),props,fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44340;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44339;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44338;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44337;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44336;
}});})(x44331_44343))
;


fulcro.inspect.ui.core.Row.prototype.constructor = fulcro.inspect.ui.core.Row;

fulcro.inspect.ui.core.Row.prototype.constructor.displayName = "fulcro.inspect.ui.core/Row";

fulcro.inspect.ui.core.Row.prototype.fulcro$isComponent = true;

var x44341_44347 = fulcro.inspect.ui.core.Row;
x44341_44347.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44341_44347.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44341_44347){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x44341_44347))
;

x44341_44347.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44341_44347){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44341_44347))
;


var x44342_44348 = fulcro.inspect.ui.core.Row.prototype;
x44342_44348.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44342_44348.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44342_44348){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x44342_44348))
;

x44342_44348.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44342_44348){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44342_44348))
;


fulcro.inspect.ui.core.Row.cljs$lang$type = true;

fulcro.inspect.ui.core.Row.cljs$lang$ctorStr = "fulcro.inspect.ui.core/Row";

fulcro.inspect.ui.core.Row.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.core/Row");
});
fulcro.inspect.ui.core.row = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.Row);
if(typeof fulcro.inspect.ui.core.ToolBar !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.core.ToolBar = (function fulcro$inspect$ui$core$ToolBar(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.core.ToolBar.prototype = goog.object.clone(React.Component.prototype);
}

var x44351_44365 = fulcro.inspect.ui.core.ToolBar.prototype;
x44351_44365.componentDidMount = ((function (x44351_44365){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44351_44365))
;

x44351_44365.componentWillUpdate = ((function (x44351_44365){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44366 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44367 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44366,next_ident__38531__auto___44367)){
var idxr__38532__auto___44368 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44368 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44368),((function (idxr__38532__auto___44368,ident__38530__auto___44366,next_ident__38531__auto___44367,this__38521__auto__,x44351_44365){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44366], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44367], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44368,ident__38530__auto___44366,next_ident__38531__auto___44367,this__38521__auto__,x44351_44365))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44351_44365))
;

x44351_44365.shouldComponentUpdate = ((function (x44351_44365){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44353 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44353);
} else {
return G__44353;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44354 = this__38521__auto__.state;
var G__44355 = "fulcro$state";
return goog.object.get(G__44354,G__44355);
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
});})(x44351_44365))
;

x44351_44365.componentWillUnmount = ((function (x44351_44365){
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
});})(x44351_44365))
;

x44351_44365.componentDidUpdate = ((function (x44351_44365){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44351_44365))
;

x44351_44365.componentWillMount = ((function (x44351_44365){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44351_44365))
;

x44351_44365.render = ((function (x44351_44365){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44356 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44357 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44358 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44359 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44360 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var _ = fulcro.client.primitives.props(this$);
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.core.ToolBar);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.props_PLUS_classes(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(css)], null)),fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44360;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44359;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44358;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44357;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44356;
}});})(x44351_44365))
;


fulcro.inspect.ui.core.ToolBar.prototype.constructor = fulcro.inspect.ui.core.ToolBar;

fulcro.inspect.ui.core.ToolBar.prototype.constructor.displayName = "fulcro.inspect.ui.core/ToolBar";

fulcro.inspect.ui.core.ToolBar.prototype.fulcro$isComponent = true;

var x44361_44369 = fulcro.inspect.ui.core.ToolBar;
x44361_44369.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44361_44369.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44361_44369){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #dadada",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_strong], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.details","&.details",1803894051),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ccc",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"28px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44362 = garden.selectors.attr.cljs$core$IFn$_invoke$arity$1("disabled");
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__44362) : garden.selectors._AMPERSAND_.call(null,G__44362));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".separator",".separator",723371719),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#ccc",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"height","height",1025178622),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 6px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px"], null)], null)], null);
});})(x44361_44369))
;

x44361_44369.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44361_44369){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44361_44369))
;


var x44363_44370 = fulcro.inspect.ui.core.ToolBar.prototype;
x44363_44370.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44363_44370.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44363_44370){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #dadada",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.7)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_strong], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.details","&.details",1803894051),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #ccc",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"height","height",1025178622),"28px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".action",".action",-1608343875),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44364 = garden.selectors.attr.cljs$core$IFn$_invoke$arity$1("disabled");
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__44364) : garden.selectors._AMPERSAND_.call(null,G__44364));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"not-allowed"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$c-icon","$c-icon",821230173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),fulcro.inspect.ui.core.color_icon_normal], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".separator",".separator",723371719),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#ccc",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"height","height",1025178622),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 6px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_normal,new cljs.core.Keyword(null,"outline","outline",793464534),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 2px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size,new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 4px"], null)], null)], null);
});})(x44363_44370))
;

x44363_44370.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44363_44370){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44363_44370))
;


fulcro.inspect.ui.core.ToolBar.cljs$lang$type = true;

fulcro.inspect.ui.core.ToolBar.cljs$lang$ctorStr = "fulcro.inspect.ui.core/ToolBar";

fulcro.inspect.ui.core.ToolBar.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.core/ToolBar");
});
fulcro.inspect.ui.core.toolbar = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.ToolBar);
fulcro.inspect.ui.core.toolbar_separator = (function fulcro$inspect$ui$core$toolbar_separator(){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"className": new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_classnames(fulcro.inspect.ui.core.ToolBar))})], 0));
});
fulcro.inspect.ui.core.toolbar_spacer = (function fulcro$inspect$ui$core$toolbar_spacer(){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"style": ({"flex": (1)})})], 0));
});
fulcro.inspect.ui.core.toolbar_action = (function fulcro$inspect$ui$core$toolbar_action(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44374 = arguments.length;
var i__4500__auto___44375 = (0);
while(true){
if((i__4500__auto___44375 < len__4499__auto___44374)){
args__4502__auto__.push((arguments[i__4500__auto___44375]));

var G__44376 = (i__4500__auto___44375 + (1));
i__4500__auto___44375 = G__44376;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.core.toolbar_action.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var props__$1 = (function (){var G__44373 = props;
if(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44373,new cljs.core.Keyword(null,"onClick","onClick",-1991238530));
} else {
return G__44373;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.localized_dom.div,fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_classnames(fulcro.inspect.ui.core.ToolBar))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1], 0)),children);
});

fulcro.inspect.ui.core.toolbar_action.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.core.toolbar_action.cljs$lang$applyTo = (function (seq44371){
var G__44372 = cljs.core.first(seq44371);
var seq44371__$1 = cljs.core.next(seq44371);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44372,seq44371__$1);
});

fulcro.inspect.ui.core.toolbar_text_field = (function fulcro$inspect$ui$core$toolbar_text_field(props){
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(fulcro_css.css.get_classnames(fulcro.inspect.ui.core.ToolBar)),new cljs.core.Keyword(null,"type","type",1174270348),"text"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))], 0));
});
if(typeof fulcro.inspect.ui.core.AutoFocusInput !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.core.AutoFocusInput = (function fulcro$inspect$ui$core$AutoFocusInput(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.core.AutoFocusInput.prototype = goog.object.clone(React.Component.prototype);
}

var x44379_44393 = fulcro.inspect.ui.core.AutoFocusInput.prototype;
x44379_44393.componentWillUpdate = ((function (x44379_44393){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44394 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44395 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44394,next_ident__38531__auto___44395)){
var idxr__38532__auto___44396 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44396 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44396),((function (idxr__38532__auto___44396,ident__38530__auto___44394,next_ident__38531__auto___44395,this__38521__auto__,x44379_44393){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44394], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44395], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44396,ident__38530__auto___44394,next_ident__38531__auto___44395,this__38521__auto__,x44379_44393))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44379_44393))
;

x44379_44393.shouldComponentUpdate = ((function (x44379_44393){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44381 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44381);
} else {
return G__44381;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44382 = this__38521__auto__.state;
var G__44383 = "fulcro$state";
return goog.object.get(G__44382,G__44383);
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
});})(x44379_44393))
;

x44379_44393.componentWillUnmount = ((function (x44379_44393){
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
});})(x44379_44393))
;

x44379_44393.componentDidUpdate = ((function (x44379_44393){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44379_44393))
;

x44379_44393.componentWillMount = ((function (x44379_44393){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44379_44393))
;

x44379_44393.render = ((function (x44379_44393){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44384 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44385 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44386 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44387 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44388 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44388;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44387;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44386;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44385;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44384;
}});})(x44379_44393))
;

x44379_44393.componentDidMount = ((function (x44379_44393){
return (function (){
var this__38511__auto__ = this;
var this$ = this__38511__auto__;
var reconciler__38512__auto__ = fulcro.client.primitives.get_reconciler(this__38511__auto__);
var lifecycle__38513__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__38512__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
goog.object.set(this__38511__auto__,"fulcro$mounted",true);

if((lifecycle__38513__auto__ == null)){
} else {
var G__44389_44397 = this__38511__auto__;
var G__44390_44398 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__38513__auto__.cljs$core$IFn$_invoke$arity$2(G__44389_44397,G__44390_44398) : lifecycle__38513__auto__.call(null,G__44389_44397,G__44390_44398));
}

return (fulcro.client.localized_dom.node.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.localized_dom.node.cljs$core$IFn$_invoke$arity$1(this$) : fulcro.client.localized_dom.node.call(null,this$)).select();
});})(x44379_44393))
;


fulcro.inspect.ui.core.AutoFocusInput.prototype.constructor = fulcro.inspect.ui.core.AutoFocusInput;

fulcro.inspect.ui.core.AutoFocusInput.prototype.constructor.displayName = "fulcro.inspect.ui.core/AutoFocusInput";

fulcro.inspect.ui.core.AutoFocusInput.prototype.fulcro$isComponent = true;

var x44391_44399 = fulcro.inspect.ui.core.AutoFocusInput;


var x44392_44400 = fulcro.inspect.ui.core.AutoFocusInput.prototype;


fulcro.inspect.ui.core.AutoFocusInput.cljs$lang$type = true;

fulcro.inspect.ui.core.AutoFocusInput.cljs$lang$ctorStr = "fulcro.inspect.ui.core/AutoFocusInput";

fulcro.inspect.ui.core.AutoFocusInput.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.core/AutoFocusInput");
});
fulcro.inspect.ui.core.auto_focus_input = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.AutoFocusInput);
if(typeof fulcro.inspect.ui.core.InlineEditor !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.core.InlineEditor = (function fulcro$inspect$ui$core$InlineEditor(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.core.InlineEditor.prototype = goog.object.clone(React.Component.prototype);
}

var x44405_44422 = fulcro.inspect.ui.core.InlineEditor.prototype;
x44405_44422.componentDidMount = ((function (x44405_44422){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44405_44422))
;

x44405_44422.componentWillUpdate = ((function (x44405_44422){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44423 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44424 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44423,next_ident__38531__auto___44424)){
var idxr__38532__auto___44425 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44425 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44425),((function (idxr__38532__auto___44425,ident__38530__auto___44423,next_ident__38531__auto___44424,this__38521__auto__,x44405_44422){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44423], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44424], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44425,ident__38530__auto___44423,next_ident__38531__auto___44424,this__38521__auto__,x44405_44422))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44405_44422))
;

x44405_44422.shouldComponentUpdate = ((function (x44405_44422){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44407 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44407);
} else {
return G__44407;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44408 = this__38521__auto__.state;
var G__44409 = "fulcro$state";
return goog.object.get(G__44408,G__44409);
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
});})(x44405_44422))
;

x44405_44422.componentWillUnmount = ((function (x44405_44422){
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
});})(x44405_44422))
;

x44405_44422.componentDidUpdate = ((function (x44405_44422){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44405_44422))
;

x44405_44422.componentWillMount = ((function (x44405_44422){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44405_44422))
;

x44405_44422.render = ((function (x44405_44422){
return (function (){
var this__38520__auto__ = this;
var this$ = this__38520__auto__;
var _STAR_reconciler_STAR_44410 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44411 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR_44412 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR_44413 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR_44414 = fulcro.client.primitives._STAR_parent_STAR_;
fulcro.client.primitives._STAR_reconciler_STAR_ = fulcro.client.primitives.get_reconciler(this__38520__auto__);

fulcro.client.primitives._STAR_depth_STAR_ = (fulcro.client.primitives.depth(this__38520__auto__) + (1));

fulcro.client.primitives._STAR_shared_STAR_ = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__38520__auto__);

fulcro.client.primitives._STAR_instrument_STAR_ = fulcro.client.primitives.instrument(this__38520__auto__);

fulcro.client.primitives._STAR_parent_STAR_ = this__38520__auto__;

try{var map__44415 = fulcro.client.primitives.props(this$);
var map__44415__$1 = ((((!((map__44415 == null)))?(((((map__44415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44415):map__44415);
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44415__$1,new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492));
var editor_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44415__$1,new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724));
var map__44416 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__44416__$1 = ((((!((map__44416 == null)))?(((((map__44416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44416):map__44416);
var computed = map__44416__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword("fulcro.inspect.ui.core","value","fulcro.inspect.ui.core/value",428871581));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword("fulcro.inspect.ui.core","on-change","fulcro.inspect.ui.core/on-change",-1449504377));
var css = fulcro_css.css.get_classnames(fulcro.inspect.ui.core.InlineEditor);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422){
return (function (){
if(cljs.core.truth_(editing_QMARK_)){
return null;
} else {
fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724),value);

return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),true);
}
});})(map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422))
], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([computed], 0)),(cljs.core.truth_(editing_QMARK_)?(function (){var G__44419 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),editor_value,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422){
return (function (p1__44401_SHARP_){
if(cljs.core.truth_(fulcro.inspect.ui.events.match_key_QMARK_(p1__44401_SHARP_,fulcro.inspect.ui.events.key_code("escape")))){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),false);
} else {
if(cljs.core.truth_(fulcro.inspect.ui.events.match_key_QMARK_(p1__44401_SHARP_,fulcro.inspect.ui.events.key_code("return")))){
fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),false);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(editor_value) : on_change.call(null,editor_value));
} else {
return null;
}
}
});})(map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422))
,new cljs.core.Keyword(null,"onBlur","onBlur",229342509),((function (map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422){
return (function (){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),false);
});})(map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422))
,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422){
return (function (p1__44402_SHARP_){
return fulcro.client.mutations.set_string_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event","event",301435442),p1__44402_SHARP_], 0));
});})(map__44415,map__44415__$1,editing_QMARK_,editor_value,map__44416,map__44416__$1,computed,value,on_change,css,_STAR_reconciler_STAR_44410,_STAR_depth_STAR_44411,_STAR_shared_STAR_44412,_STAR_instrument_STAR_44413,_STAR_parent_STAR_44414,this$,this__38520__auto__,x44405_44422))
], null);
return (fulcro.inspect.ui.core.auto_focus_input.cljs$core$IFn$_invoke$arity$1 ? fulcro.inspect.ui.core.auto_focus_input.cljs$core$IFn$_invoke$arity$1(G__44419) : fulcro.inspect.ui.core.auto_focus_input.call(null,G__44419));
})():fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".label",".label",1227819101),((cljs.core.seq(value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''):fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".no-label",".no-label",1564583153),"Unnamed"], 0)))], 0)))], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR_44414;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR_44413;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR_44412;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR_44411;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44410;
}});})(x44405_44422))
;


fulcro.inspect.ui.core.InlineEditor.prototype.constructor = fulcro.inspect.ui.core.InlineEditor;

fulcro.inspect.ui.core.InlineEditor.prototype.constructor.displayName = "fulcro.inspect.ui.core/InlineEditor";

fulcro.inspect.ui.core.InlineEditor.prototype.fulcro$isComponent = true;

var x44420_44426 = fulcro.inspect.ui.core.InlineEditor;
x44420_44426.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44420_44426.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44420_44426){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".no-label",".no-label",1564583153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong,new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #c7c7c7",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 1px 3px 1px rgba(0, 0, 0, 0.078)",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null);
});})(x44420_44426))
;

x44420_44426.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44420_44426){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44420_44426))
;

x44420_44426.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44420_44426.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44420_44426){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),false,new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724),""], null);
});})(x44420_44426))
;

x44420_44426.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44420_44426.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44420_44426){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44420_44426))
;

x44420_44426.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44420_44426.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44420_44426){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724)], null);
});})(x44420_44426))
;


var x44421_44427 = fulcro.inspect.ui.core.InlineEditor.prototype;
x44421_44427.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44421_44427.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44421_44427){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".no-label",".no-label",1564583153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_faded], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".label",".label",1227819101),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),fulcro.inspect.ui.core.color_text_strong,new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.label_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".input",".input",-1804475321),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #c7c7c7",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0px 1px 3px 1px rgba(0, 0, 0, 0.078)",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null);
});})(x44421_44427))
;

x44421_44427.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44421_44427){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x44421_44427))
;

x44421_44427.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x44421_44427.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x44421_44427){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),cljs.core.random_uuid(),new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),false,new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724),""], null);
});})(x44421_44427))
;

x44421_44427.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x44421_44427.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x44421_44427){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x44421_44427))
;

x44421_44427.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x44421_44427.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x44421_44427){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029),new cljs.core.Keyword("fulcro.inspect.ui.core","editing?","fulcro.inspect.ui.core/editing?",-1662764492),new cljs.core.Keyword("fulcro.inspect.ui.core","editor-value","fulcro.inspect.ui.core/editor-value",-735909724)], null);
});})(x44421_44427))
;


fulcro.inspect.ui.core.InlineEditor.cljs$lang$type = true;

fulcro.inspect.ui.core.InlineEditor.cljs$lang$ctorStr = "fulcro.inspect.ui.core/InlineEditor";

fulcro.inspect.ui.core.InlineEditor.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.core/InlineEditor");
});
fulcro.inspect.ui.core.inline_editor = fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.ui.core.InlineEditor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword("fulcro.inspect.ui.core","editor-id","fulcro.inspect.ui.core/editor-id",1263640029)], null));
if(typeof fulcro.inspect.ui.core.CSS !== 'undefined'){
} else {
/**
 * @constructor
 * @nocollapse
 */
fulcro.inspect.ui.core.CSS = (function fulcro$inspect$ui$core$CSS(){
var this__38666__auto__ = this;
React.Component.apply(this__38666__auto__,arguments);

if(!((this__38666__auto__.initLocalState == null))){
this__38666__auto__.state = this__38666__auto__.initLocalState();
} else {
this__38666__auto__.state = {};
}

return this__38666__auto__;
});

fulcro.inspect.ui.core.CSS.prototype = goog.object.clone(React.Component.prototype);
}

var x44430_44437 = fulcro.inspect.ui.core.CSS.prototype;
x44430_44437.componentDidMount = ((function (x44430_44437){
return (function (){
var this__38521__auto__ = this;
return goog.object.set(this__38521__auto__,"fulcro$mounted",true);
});})(x44430_44437))
;

x44430_44437.componentWillUpdate = ((function (x44430_44437){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(((!((this__38521__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__38521__auto__.fulcro$client$primitives$Ident$))))?true:false):false)){
var ident__38530__auto___44438 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives.props(this__38521__auto__));
var next_ident__38531__auto___44439 = fulcro.client.primitives.ident(this__38521__auto__,fulcro.client.primitives._next_props(next_props__38522__auto__,this__38521__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__38530__auto___44438,next_ident__38531__auto___44439)){
var idxr__38532__auto___44440 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__38532__auto___44440 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__38532__auto___44440),((function (idxr__38532__auto___44440,ident__38530__auto___44438,next_ident__38531__auto___44439,this__38521__auto__,x44430_44437){
return (function (indexes__38533__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__38533__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__38530__auto___44438], null),cljs.core.disj,this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__38531__auto___44439], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__38521__auto__);
});})(idxr__38532__auto___44440,ident__38530__auto___44438,next_ident__38531__auto___44439,this__38521__auto__,x44430_44437))
);
}
} else {
}
} else {
}

fulcro.client.primitives.merge_pending_props_BANG_(this__38521__auto__);

return fulcro.client.primitives.merge_pending_state_BANG_(this__38521__auto__);
});})(x44430_44437))
;

x44430_44437.shouldComponentUpdate = ((function (x44430_44437){
return (function (next_props__38522__auto__,next_state__38523__auto__){
var this__38521__auto__ = this;
if(fulcro.client.primitives._STAR_blindly_render_STAR_){
return true;
} else {
var next_children__38524__auto__ = next_props__38522__auto__.children;
var next_props__38522__auto____$1 = goog.object.get(next_props__38522__auto__,"fulcro$value");
var next_props__38522__auto____$2 = (function (){var G__44432 = next_props__38522__auto____$1;
if((next_props__38522__auto____$1 instanceof fulcro.client.primitives.FulcroProps)){
return fulcro.client.primitives.unwrap(G__44432);
} else {
return G__44432;
}
})();
var current_props__38525__auto__ = fulcro.client.primitives.props(this__38521__auto__);
var next_props_stale_QMARK___38526__auto__ = (fulcro.client.primitives.get_basis_time(current_props__38525__auto__) > fulcro.client.primitives.get_basis_time(next_props__38522__auto____$2));
var props_changed_QMARK___38527__auto__ = ((!(next_props_stale_QMARK___38526__auto__)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_props__38525__auto__,next_props__38522__auto____$2)));
var state_changed_QMARK___38528__auto__ = (function (){var and__3911__auto__ = this__38521__auto__.state;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__44433 = this__38521__auto__.state;
var G__44434 = "fulcro$state";
return goog.object.get(G__44433,G__44434);
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
});})(x44430_44437))
;

x44430_44437.componentWillUnmount = ((function (x44430_44437){
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
});})(x44430_44437))
;

x44430_44437.componentDidUpdate = ((function (x44430_44437){
return (function (prev_props__38534__auto__,prev_state__38535__auto__){
var this__38521__auto__ = this;
return fulcro.client.primitives.clear_prev_props_BANG_(this__38521__auto__);
});})(x44430_44437))
;

x44430_44437.componentWillMount = ((function (x44430_44437){
return (function (){
var this__38521__auto__ = this;
var indexer__38536__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fulcro.client.primitives.get_reconciler(this__38521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__38536__auto__ == null)){
return null;
} else {
return fulcro.client.impl.protocols.index_component_BANG_(indexer__38536__auto__,this__38521__auto__);
}
});})(x44430_44437))
;


fulcro.inspect.ui.core.CSS.prototype.constructor = fulcro.inspect.ui.core.CSS;

fulcro.inspect.ui.core.CSS.prototype.constructor.displayName = "fulcro.inspect.ui.core/CSS";

fulcro.inspect.ui.core.CSS.prototype.fulcro$isComponent = true;

var x44435_44441 = fulcro.inspect.ui.core.CSS;
x44435_44441.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44435_44441.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44435_44441){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".focused-panel",".focused-panel",1915827687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #a3a3a3",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".focused-container",".focused-container",-176069447),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-group",".info-group",2040847240),fulcro.inspect.ui.core.css_info_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.first_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.first_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-label",".info-label",-428029132),fulcro.inspect.ui.core.css_info_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ident",".ident",1621289128),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 6px",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#424242",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.mono_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-name",".display-name",1505073148),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5efff",new cljs.core.Keyword(null,"color","color",1011675173),"#051d38",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.mono_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null)], null);
});})(x44435_44441))
;

x44435_44441.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44435_44441){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.ToolBar,fulcro.inspect.ui.core.Row,fulcro.inspect.ui.core.InlineEditor], null);
});})(x44435_44441))
;


var x44436_44442 = fulcro.inspect.ui.core.CSS.prototype;
x44436_44442.fulcro_css$css$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x44436_44442.fulcro_css$css$CSS$local_rules$arity$1 = ((function (x44436_44442){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".focused-panel",".focused-panel",1915827687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #a3a3a3",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"height","height",1025178622),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".focused-container",".focused-container",-176069447),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-group",".info-group",2040847240),fulcro.inspect.ui.core.css_info_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.first_child) : garden.selectors._AMPERSAND_.call(null,garden.selectors.first_child)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".info-label",".info-label",-428029132),fulcro.inspect.ui.core.css_info_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ident",".ident",1621289128),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 6px",new cljs.core.Keyword(null,"background","background",-863952629),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#424242",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.mono_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),fulcro.inspect.ui.core.label_font_size], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-name",".display-name",1505073148),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#e5efff",new cljs.core.Keyword(null,"color","color",1011675173),"#051d38",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),fulcro.inspect.ui.core.mono_font_family,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null)], null);
});})(x44436_44442))
;

x44436_44442.fulcro_css$css$CSS$include_children$arity$1 = ((function (x44436_44442){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.ui.core.ToolBar,fulcro.inspect.ui.core.Row,fulcro.inspect.ui.core.InlineEditor], null);
});})(x44436_44442))
;


fulcro.inspect.ui.core.CSS.cljs$lang$type = true;

fulcro.inspect.ui.core.CSS.cljs$lang$ctorStr = "fulcro.inspect.ui.core/CSS";

fulcro.inspect.ui.core.CSS.cljs$lang$ctorPrWriter = (function (this__38669__auto__,writer__38670__auto__,opt__38671__auto__){
return cljs.core._write(writer__38670__auto__,"fulcro.inspect.ui.core/CSS");
});
fulcro.inspect.ui.core.scss = fulcro_css.css.get_classnames(fulcro.inspect.ui.core.CSS);
fulcro.inspect.ui.core.focus_panel = (function fulcro$inspect$ui$core$focus_panel(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44445 = arguments.length;
var i__4500__auto___44446 = (0);
while(true){
if((i__4500__auto___44446 < len__4499__auto___44445)){
args__4502__auto__.push((arguments[i__4500__auto___44446]));

var G__44447 = (i__4500__auto___44446 + (1));
i__4500__auto___44446 = G__44447;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.core.focus_panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.core.focus_panel.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.localized_dom.div,fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"focused-panel","focused-panel",-1991220374).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),children);
});

fulcro.inspect.ui.core.focus_panel.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.core.focus_panel.cljs$lang$applyTo = (function (seq44443){
var G__44444 = cljs.core.first(seq44443);
var seq44443__$1 = cljs.core.next(seq44443);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44444,seq44443__$1);
});

fulcro.inspect.ui.core.focus_panel_content = (function fulcro$inspect$ui$core$focus_panel_content(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44450 = arguments.length;
var i__4500__auto___44451 = (0);
while(true){
if((i__4500__auto___44451 < len__4499__auto___44450)){
args__4502__auto__.push((arguments[i__4500__auto___44451]));

var G__44452 = (i__4500__auto___44451 + (1));
i__4500__auto___44451 = G__44452;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.core.focus_panel_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.core.focus_panel_content.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fulcro.client.localized_dom.div,fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"focused-container","focused-container",2111714).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),children);
});

fulcro.inspect.ui.core.focus_panel_content.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.core.focus_panel_content.cljs$lang$applyTo = (function (seq44448){
var G__44449 = cljs.core.first(seq44448);
var seq44448__$1 = cljs.core.next(seq44448);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44449,seq44448__$1);
});

fulcro.inspect.ui.core.info = (function fulcro$inspect$ui$core$info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44458 = arguments.length;
var i__4500__auto___44459 = (0);
while(true){
if((i__4500__auto___44459 < len__4499__auto___44458)){
args__4502__auto__.push((arguments[i__4500__auto___44459]));

var G__44460 = (i__4500__auto___44459 + (1));
i__4500__auto___44459 = G__44460;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

fulcro.inspect.ui.core.info.cljs$core$IFn$_invoke$arity$variadic = (function (p__44455,children){
var map__44456 = p__44455;
var map__44456__$1 = ((((!((map__44456 == null)))?(((((map__44456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44456):map__44456);
var props = map__44456__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44456__$1,new cljs.core.Keyword("fulcro.inspect.ui.core","title","fulcro.inspect.ui.core/title",715897499));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(fulcro.client.localized_dom.div,fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"info-group","info-group",1883049582).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),(cljs.core.truth_(title)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([({"className": new cljs.core.Keyword(null,"info-label","info-label",-630481582).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)}),title], 0)):null),children);
});

fulcro.inspect.ui.core.info.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.core.info.cljs$lang$applyTo = (function (seq44453){
var G__44454 = cljs.core.first(seq44453);
var seq44453__$1 = cljs.core.next(seq44453);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44454,seq44453__$1);
});

fulcro.inspect.ui.core.ident = (function fulcro$inspect$ui$core$ident(props,ref){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ref], 0))], 0));
});
fulcro.inspect.ui.core.comp_display_name = (function fulcro$inspect$ui$core$comp_display_name(props,display_name){
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(fulcro.inspect.ui.core.scss)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join('')], 0));
});

//# sourceMappingURL=fulcro.inspect.ui.core.js.map

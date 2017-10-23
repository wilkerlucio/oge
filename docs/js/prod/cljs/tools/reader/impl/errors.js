// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$reader_DASH_exception,cljs.core.cst$kw$ex_DASH_kind,ex_type], null);
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(details,cljs.core.cst$kw$file,cljs.tools.reader.reader_types.get_file_name(rdr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$line,cljs.tools.reader.reader_types.get_line_number(rdr),cljs.core.cst$kw$col,cljs.tools.reader.reader_types.get_column_number(rdr)], 0));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16729 = arguments.length;
var i__11692__auto___16730 = (0);
while(true){
if((i__11692__auto___16730 < len__11691__auto___16729)){
args__11698__auto__.push((arguments[i__11692__auto___16730]));

var G__16731 = (i__11692__auto___16730 + (1));
i__11692__auto___16730 = G__16731;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details(rdr,ex_type);
var file = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(details);
var line = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(details);
var col = cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__10412__auto__ = msg1;
if(cljs.core.truth_(or__10412__auto__)){
return or__10412__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(full_msg,details);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq16726){
var G__16727 = cljs.core.first(seq16726);
var seq16726__$1 = cljs.core.next(seq16726);
var G__16728 = cljs.core.first(seq16726__$1);
var seq16726__$2 = cljs.core.next(seq16726__$1);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(G__16727,G__16728,seq16726__$2);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16734 = arguments.length;
var i__11692__auto___16735 = (0);
while(true){
if((i__11692__auto___16735 < len__11691__auto___16734)){
args__11698__auto__.push((arguments[i__11692__auto___16735]));

var G__16736 = (i__11692__auto___16735 + (1));
i__11692__auto___16735 = G__16736;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$reader_DASH_error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq16732){
var G__16733 = cljs.core.first(seq16732);
var seq16732__$1 = cljs.core.next(seq16732);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__16733,seq16732__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16739 = arguments.length;
var i__11692__auto___16740 = (0);
while(true){
if((i__11692__auto___16740 < len__11691__auto___16739)){
args__11698__auto__.push((arguments[i__11692__auto___16740]));

var G__16741 = (i__11692__auto___16740 + (1));
i__11692__auto___16740 = G__16741;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$illegal_DASH_argument,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq16737){
var G__16738 = cljs.core.first(seq16737);
var seq16737__$1 = cljs.core.next(seq16737);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(G__16738,seq16737__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16745 = arguments.length;
var i__11692__auto___16746 = (0);
while(true){
if((i__11692__auto___16746 < len__11691__auto___16745)){
args__11698__auto__.push((arguments[i__11692__auto___16746]));

var G__16747 = (i__11692__auto___16746 + (1));
i__11692__auto___16746 = G__16747;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((1) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11699__auto__);
});

cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.cst$kw$eof,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
});

cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq16742){
var G__16743 = cljs.core.first(seq16742);
var seq16742__$1 = cljs.core.next(seq16742);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(G__16743,seq16742__$1);
});

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__16753 = arguments.length;
switch (G__16753) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,line,column,null);
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name(kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),"."], 0));
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count(elements)," form(s). Map literals must contain an even number of forms."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid number: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal: \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode escape: \\u",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid ",cljs.core.name(kind),": ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading start of ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character: ",ch," found while reading ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading dispatch character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No dispatch macro for ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unmatched delimiter ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__11698__auto__ = [];
var len__11691__auto___16775 = arguments.length;
var i__11692__auto___16776 = (0);
while(true){
if((i__11692__auto___16776 < len__11691__auto___16775)){
args__11698__auto__.push((arguments[i__11692__auto___16776]));

var G__16777 = (i__11692__auto___16776 + (1));
i__11692__auto___16776 = G__16777;
continue;
} else {
}
break;
}

var argseq__11699__auto__ = ((((2) < args__11698__auto__.length))?(new cljs.core.IndexedSeq(args__11698__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11699__auto__);
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__16774 = kind;
var G__16774__$1 = (((G__16774 instanceof cljs.core.Keyword))?G__16774.fqn:null);
switch (G__16774__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16774__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF reading ",cljs.core.name(kind)," starting ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,init,start),"."], 0));
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq16771){
var G__16772 = cljs.core.first(seq16771);
var seq16771__$1 = cljs.core.next(seq16771);
var G__16773 = cljs.core.first(seq16771__$1);
var seq16771__$2 = cljs.core.next(seq16771__$1);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(G__16772,G__16773,seq16771__$2);
});

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch(rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character literal \\u",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Octal escape sequence must be in range [0, 377]."], 0));
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported character: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported escape character: \\",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A single colon is not a valid keyword."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(x),". Metadata must be a Symbol, Keyword, String or Map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(target),". ","Metadata can only be applied to IMetas."], 0));
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(feature)," Features must be keywords."], 0));
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespaced map with namespace ",ns_name," does not specify a map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid value used as namespace in namespaced map: ",ns_name,"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),". Reader tags must be symbols."], 0));
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),"."], 0));
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__11294__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__16790(s__16791){
return (new cljs.core.LazySeq(null,(function (){
var s__16791__$1 = s__16791;
while(true){
var temp__5459__auto__ = cljs.core.seq(s__16791__$1);
if(temp__5459__auto__){
var s__16791__$2 = temp__5459__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16791__$2)){
var c__11292__auto__ = cljs.core.chunk_first(s__16791__$2);
var size__11293__auto__ = cljs.core.count(c__11292__auto__);
var b__16793 = cljs.core.chunk_buffer(size__11293__auto__);
if((function (){var i__16792 = (0);
while(true){
if((i__16792 < size__11293__auto__)){
var vec__16794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11292__auto__,i__16792);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16794,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__16793,id);

var G__16806 = (i__16792 + (1));
i__16792 = G__16806;
continue;
} else {
var G__16807 = (i__16792 + (1));
i__16792 = G__16807;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16793),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__16790(cljs.core.chunk_rest(s__16791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16793),null);
}
} else {
var vec__16801 = cljs.core.first(s__16791__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16801,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__16790(cljs.core.rest(s__16791__$2)));
} else {
var G__16808 = cljs.core.rest(s__16791__$2);
s__16791__$1 = G__16808;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11294__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.duplicate_keys_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize(cljs.core.name(kind)))," literal contains duplicate key"].join(''),ks)], 0));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading, starting at line ",line,"."], 0));
} else {
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading."], 0));
}
});

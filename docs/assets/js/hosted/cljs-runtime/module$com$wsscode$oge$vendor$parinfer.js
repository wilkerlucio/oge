shadow$provide.module$com$wsscode$oge$vendor$parinfer=function(R,T,F,O,H){(function(a,m){"function"===typeof define&&define.amd?define([],m):"object"===typeof O&&O.exports?O.exports=m():a.parinfer=m()})(this,function(){function a(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a}function m(a){a=a||{};return{cursorX:a.cursorX,cursorLine:a.cursorLine,prevCursorX:a.prevCursorX,prevCursorLine:a.prevCursorLine,selectionStartLine:a.selectionStartLine,changes:a.changes,partialResult:a.partialResult,
forceBalance:a.forceBalance,returnParens:a.returnParens}}function D(){return{lineNo:-999,startX:-999,endX:-999,openers:[],clamped:{startX:-999,endX:-999,openers:[]}}}function B(a,b){var d={lineNo:a.lineNo,x:a.x,inputLineNo:a.inputLineNo,inputX:a.inputX};return a.errorPosCache[b]=d}function x(a,b){var d=a.errorPosCache[b],f=a.partialResult?"lineNo":"inputLineNo",g=a.partialResult?"x":"inputX",h={parinferError:!0,name:b,message:ka[b],lineNo:d?d[f]:a[f],x:d?d[g]:a[g]},k=r(a.parenStack,0);if("unmatched-close-paren"===
b){if((d=a.errorPosCache["unmatched-open-paren"])||k)h.extra={name:"unmatched-open-paren",lineNo:d?d[f]:k[f],x:d?d[g]:k[g]}}else"unclosed-paren"===b&&(h.lineNo=k[f],h.x=k[g]);return h}function v(a,b,d,f,g){var h=a.lines[b];h=h.substring(0,d)+g+h.substring(f);a.lines[b]=h;g=g.length-(f-d);0!==g&&a.cursorLine===b&&-999!==a.cursorX&&(a.cursorX===d&&a.cursorX===f?0===a.cursorX:a.cursorX>=f)&&(a.cursorX+=g)}function r(a,b){var d=a.length-1;return b>d?null:a[d-b]}function E(a){return"}"===a||")"===a||"]"===
a}function Q(a,b){return 0===a.length?!1:r(a,0).ch===ja[b]}function k(a){var b=a.ch;return!a.isEscaped&&(" "===b||"  "===b)}function d(a,b,d,f){return b===f&&-999!==d&&-999!==a&&a>d}function b(a,b,d){a.parenTrail.lineNo=b;a.parenTrail.startX=d;a.parenTrail.endX=d;a.parenTrail.openers=[];a.parenTrail.clamped.startX=-999;a.parenTrail.clamped.endX=-999;a.parenTrail.clamped.openers=[]}function u(a,b){var d;for(d=0;d<a.parenStack.length;d++){var f=r(a.parenStack,d);if(f.x-f.indentDelta<b)break;if(f.x<
b){var g=r(a.parenStack,d+1);if(!g||g.indentDelta!==f.indentDelta){f.indentDelta=0;break}}}return d}function P(a,b){if(b){var d=r(a.parenStack,0);d?d.maxChildIndent=b.x:a.maxIndent=b.x}}function f(a){var b=a.parenTrail,d=b.clamped.openers.concat(b.openers);if(0<d.length&&(b={lineNo:b.lineNo,startX:-999!==b.clamped.startX?b.clamped.startX:b.startX,endX:0===b.openers.length?b.clamped.endX:b.endX},a.parenTrails.push(b),a.returnParens))for(a=0;a<d.length;a++)d[a].closer.trail=b}function g(a,b){var d=
a.x,f=d+b,g,h="";for(g=0;g<f;g++)h+=" ";v(a,a.lineNo,0,d,h);a.x=f;a.indentDelta+=b}function M(a){a.trackingIndent=!1;if(a.quoteDanger)throw x(a,"quote-danger");if("INDENT_MODE"===a.mode){var b="",d=u(a,a.x),h;for(h=0;h<d;h++){var k=a.parenStack.pop();a.parenTrail.openers.push(k);var n=ja[k.ch];b+=n;if(a.returnParens){var m=a.parenTrail.startX+h;k.closer.lineNo=a.parenTrail.lineNo;k.closer.x=m;k.closer.ch=n}}-999!==a.parenTrail.lineNo&&(v(a,a.parenTrail.lineNo,a.parenTrail.startX,a.parenTrail.endX,
b),a.parenTrail.endX=a.parenTrail.startX+b.length,f(a));(b=r(a.parenStack,0))&&b.indentDelta!==a.indentDelta&&g(a,b.indentDelta)}else if("PAREN_MODE"===a.mode){n=b=a.x;d=0;h=a.maxIndent;if(k=r(a.parenStack,0))d=k.x+1,h=k.maxChildIndent,k.indentDelta!==a.indentDelta&&(n+=k.indentDelta);-999!==d&&(n=Math.max(d,n));-999!==h&&(n=Math.min(h,n));n!==b&&g(a,n-b)}}function h(a,b){a={ch:b.ch,x:b.x,lineNo:b.lineNo};null!=b.argX&&(a.argX=b.argX);return a}function n(a,d){a.ch=d;a.skipChar=!1;if(a.changes&&(a.smart||
"PAREN_MODE"===a.mode)){var h=a.changes[a.inputLineNo];h&&(h=h[a.inputX])&&(a.indentDelta+=h.newEndX-h.oldEndX)}if(a.trackingIndent)if(E(a.ch)){if("INDENT_MODE"===a.mode){if(!a.forceBalance){if(a.smart)throw{leadingCloseParen:!0};a.errorPosCache["leading-close-paren"]||B(a,"leading-close-paren")}a.skipChar=!0}if("PAREN_MODE"===a.mode){if(!Q(a.parenStack,a.ch))throw x(a,"unmatched-close-paren");h=a.cursorX;var n=a.x;if(a.cursorLine===a.lineNo&&-999!==n&&-999!==h&&h<=n)M(a);else{h=a.parenStack.pop();
n=ja[h.ch];if(a.returnParens){var m=a.parenTrail.endX;h.closer.lineNo=a.parenTrail.lineNo;h.closer.x=m;h.closer.ch=n}P(a,h);m=a.parenTrail.endX;v(a,a.parenTrail.lineNo,m,m,n);a.parenTrail.endX++;a.parenTrail.openers.push(h);(h=a.parenTrails[a.parenTrails.length-1])&&h.lineNo===a.parenTrail.lineNo?h.endX=a.parenTrail.endX:f(a);a.skipChar=!0}}}else if(";"===a.ch){h=a.parenTrail.openers.length;if("PAREN_MODE"===a.mode)for(n=0;n<h;n++)a.parenStack.push(r(a.parenTrail.openers,n));n=u(a,a.x);(n=r(a.parenStack,
n))&&n.indentDelta!==a.indentDelta&&g(a,n.indentDelta);if("PAREN_MODE"===a.mode)for(n=0;n<h;n++)a.parenStack.pop();a.trackingIndent=!1}else"\n"!==a.ch&&" "!==a.ch&&"\t"!==a.ch&&M(a);if(a.skipChar)a.ch="";else{h=a.ch;a.isEscaped=!1;if(a.isEscaping){if(a.isEscaping=!1,a.isEscaped=!0,"\n"===a.ch){if(a.isInCode)throw x(a,"eol-backslash");a.isInComment=!1;a.ch=""}}else if("{"===h||"("===h||"["===h)a.isInCode&&(h={inputLineNo:a.inputLineNo,inputX:a.inputX,lineNo:a.lineNo,x:a.x,ch:a.ch,indentDelta:a.indentDelta,
maxChildIndent:-999},a.returnParens&&(h.children=[],h.closer={lineNo:-999,x:-999,ch:""},n=(n=r(a.parenStack,0))?n.children:a.parens,n.push(h)),a.parenStack.push(h),a.trackingArgTabStop="space");else if(E(h)){if(a.isInCode)if(Q(a.parenStack,a.ch)){h=r(a.parenStack,0);a.returnParens&&(n=a.x,m=a.ch,h.closer.lineNo=a.lineNo,h.closer.x=n,h.closer.ch=m);a.parenTrail.endX=a.x+1;a.parenTrail.openers.push(h);if(h="INDENT_MODE"===a.mode&&a.smart){h=r(a.parenStack,0);n=(n=r(a.parenStack,1))?n.x+1:0;m=h.x;var J=
a.cursorLine===h.lineNo&&n<=a.cursorX&&a.cursorX<=m;if(!a.changes&&-999!==a.prevCursorLine&&a.prevCursorLine===h.lineNo&&n<=a.prevCursorX&&a.prevCursorX<=m&&!J)throw{releaseCursorHold:!0};h=J}h&&(h=a.parenTrail.startX,n=a.parenTrail.endX,m=a.parenTrail.openers,b(a,a.lineNo,a.x+1),a.parenTrail.clamped.startX=h,a.parenTrail.clamped.endX=n,a.parenTrail.clamped.openers=m);a.parenStack.pop();a.trackingArgTabStop=null}else{if("PAREN_MODE"===a.mode)throw x(a,"unmatched-close-paren");!a.errorPosCache["unmatched-close-paren"]&&
(B(a,"unmatched-close-paren"),h=r(a.parenStack,0))&&(n=B(a,"unmatched-open-paren"),n.inputLineNo=h.inputLineNo,n.inputX=h.inputX);a.ch=""}}else'"'===h?a.isInStr?a.isInStr=!1:a.isInComment?(a.quoteDanger=!a.quoteDanger,a.quoteDanger&&B(a,"quote-danger")):(a.isInStr=!0,B(a,"unclosed-quote")):";"===h?a.isInCode&&(a.isInComment=!0,a.commentX=a.x,a.trackingArgTabStop=null):"\\"===h?a.isEscaping=!0:"\t"===h?a.isInCode&&(a.ch="  "):"\n"===h&&(a.isInComment=!1,a.ch="");h=a.ch;a.isInCode=!a.isInComment&&!a.isInStr;
n=a.ch;m=E(n)&&!a.isEscaped;a.isInCode&&!k(a)&&""!==n&&!m&&b(a,a.lineNo,a.x+h.length);if(h=a.trackingArgTabStop)"space"===h?a.isInCode&&k(a)&&(a.trackingArgTabStop="arg"):"arg"!==h||k(a)||(r(a.parenStack,0).argX=a.x,a.trackingArgTabStop=null)}h=a.ch;d!==h&&(v(a,a.lineNo,a.x,a.x+d.length,h),a.indentDelta-=d.length-h.length);a.x+=h.length}function ea(b,g,k,m){k={mode:k,smart:m,origText:b,origCursorX:-999,origCursorLine:-999,inputLines:b.split(V),inputLineNo:-1,inputX:-1,lines:[],lineNo:-1,ch:"",x:0,
parenStack:[],tabStops:[],parenTrail:D(),parenTrails:[],returnParens:!1,parens:[],cursorX:-999,cursorLine:-999,prevCursorX:-999,prevCursorLine:-999,selectionStartLine:-999,changes:null,isInCode:!0,isEscaping:!1,isEscaped:!1,isInStr:!1,isInComment:!1,commentX:-999,quoteDanger:!1,trackingIndent:!1,skipChar:!1,success:!1,partialResult:!1,forceBalance:!1,maxIndent:-999,indentDelta:0,trackingArgTabStop:null,error:{name:null,message:null,lineNo:null,x:null,extra:{name:null,lineNo:null,x:null}},errorPosCache:{}};
if(g){a(g.cursorX)&&(k.cursorX=g.cursorX,k.origCursorX=g.cursorX);a(g.cursorLine)&&(k.cursorLine=g.cursorLine,k.origCursorLine=g.cursorLine);a(g.prevCursorX)&&(k.prevCursorX=g.prevCursorX);a(g.prevCursorLine)&&(k.prevCursorLine=g.prevCursorLine);a(g.selectionStartLine)&&(k.selectionStartLine=g.selectionStartLine);if(Array.isArray(g.changes)){var C=g.changes;if(0===C.length)C=null;else{var u={},N,K;for(K=0;K<C.length;K++){if(N=C[K]){var J=N.newText.split(V);var ha=N.oldText.split(V);var B=(1===J.length?
N.x:0)+J[J.length-1].length;J=N.lineNo+(J.length-1);ha={x:N.x,lineNo:N.lineNo,oldText:N.oldText,newText:N.newText,oldEndX:(1===ha.length?N.x:0)+ha[ha.length-1].length,newEndX:B,newEndLineNo:J,lookupLineNo:J,lookupX:B}}else ha=void 0;(N=u[ha.lookupLineNo])||(N=u[ha.lookupLineNo]={});N[ha.lookupX]=ha}C=u}k.changes=C}"boolean"===typeof g.partialResult&&(k.partialResult=g.partialResult);"boolean"===typeof g.forceBalance&&(k.forceBalance=g.forceBalance);"boolean"===typeof g.returnParens&&(k.returnParens=
g.returnParens)}try{var I;for(I=0;I<k.inputLines.length;I++){k.inputLineNo=I;C=void 0;u=k;K=I;N=u;var G=u.inputLines[K];N.x=0;N.lineNo++;N.lines.push(G);N.commentX=-999;N.indentDelta=0;delete N.errorPosCache["unmatched-close-paren"];delete N.errorPosCache["unmatched-open-paren"];delete N.errorPosCache["leading-close-paren"];N.trackingArgTabStop=null;N.trackingIndent=!N.isInStr;N=void 0;ha=u;if((-999!==ha.selectionStartLine?ha.selectionStartLine:ha.cursorLine)===ha.lineNo){for(N=0;N<ha.parenStack.length;N++)ha.tabStops.push(h(ha,
ha.parenStack[N]));if("PAREN_MODE"===ha.mode)for(N=ha.parenTrail.openers.length-1;0<=N;N--)ha.tabStops.push(h(ha,ha.parenTrail.openers[N]));for(N=1;N<ha.tabStops.length;N++){var W=ha.tabStops[N].x,da=ha.tabStops[N-1].argX;null!=da&&da>=W&&delete ha.tabStops[N-1].argX}}for(C=0;C<u.inputLines[K].length;C++)u.inputX=C,n(u,u.inputLines[K][C]);n(u,"\n");if(!u.forceBalance){var ja=u.errorPosCache["unmatched-close-paren"];if(ja&&ja.x<u.parenTrail.startX)throw x(u,"unmatched-close-paren");if(u.errorPosCache["leading-close-paren"]&&
u.parenTrail.lineNo===u.lineNo)throw x(u,"leading-close-paren");}if(u.lineNo===u.parenTrail.lineNo)if(C=u,C.isInStr)C.parenTrail=D();else if("INDENT_MODE"===C.mode){u=void 0;K=C;var Q=K.parenTrail.startX,ba=K.parenTrail.endX;N=K;var ka=K.cursorX,ra=K.cursorLine;if(d(ka,ra,N.parenTrail.startX,N.lineNo)&&!d(ka,ra,N.commentX,N.lineNo)){var Aa=Math.max(Q,K.cursorX),na=Math.max(ba,K.cursorX),q=K.lines[K.lineNo];N=0;for(u=Q;u<Aa;u++)E(q[u])&&N++;var z=K.parenTrail.openers;K.parenTrail.openers=z.slice(N);
K.parenTrail.startX=Aa;K.parenTrail.endX=na;K.parenTrail.clamped.openers=z.slice(0,N);K.parenTrail.clamped.startX=Q;K.parenTrail.clamped.endX=ba}if(C.parenTrail.startX!==C.parenTrail.endX)for(var c=C.parenTrail.openers;0!==c.length;)C.parenStack.push(c.pop())}else if("PAREN_MODE"===C.mode){P(C,r(C.parenTrail.openers,0));if(C.lineNo!==C.cursorLine){u=void 0;K=C;var S=K.parenTrail.startX,Pa=K.parenTrail.endX;if(S!==Pa&&K.lineNo===K.parenTrail.lineNo){var Sa=K.lines[K.lineNo];N="";ha=0;for(u=S;u<Pa;u++)E(Sa[u])?
N+=Sa[u]:ha++;0<ha&&(v(K,K.lineNo,S,Pa,N),K.parenTrail.endX-=ha)}}f(C)}}if(k.quoteDanger)throw x(k,"quote-danger");if(k.isInStr)throw x(k,"unclosed-quote");if(0!==k.parenStack.length&&"PAREN_MODE"===k.mode)throw x(k,"unclosed-paren");"INDENT_MODE"===k.mode&&(k.x=0,M(k));k.success=!0}catch(Da){if(Da.leadingCloseParen||Da.releaseCursorHold)return ea(b,g,"PAREN_MODE",m);b=Da;k.success=!1;if(b.parinferError)delete b.parinferError,k.error=b;else throw k.error.name="unhandled",k.error.message=b.stack,b;
}return k}function Aa(a){var b=-1!==a.origText.search("\r")?"\r\n":"\n";a.success?(b={text:a.lines.join(b),cursorX:a.cursorX,cursorLine:a.cursorLine,success:!0,tabStops:a.tabStops,parenTrails:a.parenTrails},a.returnParens&&(b.parens=a.parens)):(b={text:a.partialResult?a.lines.join(b):a.origText,cursorX:a.partialResult?a.cursorX:a.origCursorX,cursorLine:a.partialResult?a.cursorLine:a.origCursorLine,parenTrails:a.partialResult?a.parenTrails:null,success:!1,error:a.error},a.partialResult&&a.returnParens&&
(b.parens=a.parens));-999===b.cursorX&&delete b.cursorX;-999===b.cursorLine&&delete b.cursorLine;b.tabStops&&0===b.tabStops.length&&delete b.tabStops;return b}var V=/\r?\n/,ja={"{":"}","}":"{","[":"]","]":"[","(":")",")":"("},ka={"quote-danger":"Quotes must balanced inside comment blocks.","eol-backslash":"Line cannot end in a hanging backslash.","unclosed-quote":"String is missing a closing quote.","unclosed-paren":"Unclosed open-paren.","unmatched-close-paren":"Unmatched close-paren.","unmatched-open-paren":"Unmatched open-paren.",
"leading-close-paren":"Line cannot lead with a close-paren.",unhandled:"Unhandled error."};return{version:"3.10.0",indentMode:function(a,b){b=m(b);return Aa(ea(a,b,"INDENT_MODE"))},parenMode:function(a,b){b=m(b);return Aa(ea(a,b,"PAREN_MODE"))},smartMode:function(a,b){b=m(b);return Aa(ea(a,b,"INDENT_MODE",null==b.selectionStartLine))}}})}
//# sourceMappingURL=module$com$wsscode$oge$vendor$parinfer.js.map

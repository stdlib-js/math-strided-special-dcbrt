// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,o&&(r="-"+r)),r}var a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===i.call(r.specifier)?i.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var u=Math.abs,l=String.prototype.toLowerCase,y=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,w,"$1e"),e=p.call(e,h,"e"),e=p.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,s,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===y.call(r.specifier)?y.call(e):l.call(e)}function A(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function S(r,t,n){var e=t-r.length;return e<0?r:r=n?r+A(e):A(e)+r}var U=String.fromCharCode,F=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,a,i,u,l,y,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,y=0;y<r.length;y++)if(f(e=r[y]))u+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+y+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,F(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,F(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!F(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=F(i)?String(e.arg):U(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=S(e.arg,e.width,e.padRight)),u+=e.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,n,e,o;for(n=[],o=0,e=T.exec(r);e;)(t=r.slice(o,T.lastIndex-e[0].length)).length&&n.push(t),n.push(I(e)),o=T.lastIndex,e=T.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function k(r){return"string"==typeof r}function O(r){var t,n;if(!k(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[x(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return j.apply(null,t)}var N=Object.prototype,V=N.toString,$=N.__defineGetter__,G=N.__defineSetter__,H=N.__lookupGetter__,W=N.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,a,i;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(H.call(r,t)||W.call(r,t)?(e=r.__proto__,r.__proto__=N,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,t,n.get),i&&G&&G.call(r,t,n.set),r};function L(r,t,n){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r,t,n,e,o,a){var i,c,f;if(r<=0)return e;for(i=n<0?(1-r)*n:0,c=o<0?(1-r)*o:0,f=0;f<r;f++)e[c]=a(t[i]),i+=n,c+=o;return e}function R(r,t,n,e,o,a,i,c){var f,u,l;if(r<=0)return o;for(f=e,u=i,l=0;l<r;l++)o[u]=c(t[f]),f+=n,u+=a;return o}L(P,"ndarray",R);function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=Z();var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function M(r,t){return null!=r&&z.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Y.call(r);n=r[B],t=M(r,B);try{r[B]=void 0}catch(t){return Y.call(r)}return e=Y.call(r),t?r[B]=n:delete r[B],e}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,t,n;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=Q,nr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var or,ar="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,n;if("function"!=typeof er)return!1;try{t=new er([1,3.14,-3.14,NaN]),n=t,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var ir=or,cr=Z();var fr=Object.prototype.toString;var ur="function"==typeof Symbol?Symbol:void 0,lr="function"==typeof ur?ur.toStringTag:"";var yr=cr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return fr.call(r);n=r[lr],t=M(r,lr);try{r[lr]=void 0}catch(t){return fr.call(r)}return e=fr.call(r),t?r[lr]=n:delete r[lr],e}:function(r){return fr.call(r)},pr="function"==typeof Uint8Array;var sr="function"==typeof Uint8Array?Uint8Array:null;var vr,gr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr(t=[1,3.14,-3.14,256,257]),n=t,r=(pr&&n instanceof Uint8Array||"[object Uint8Array]"===yr(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr=vr,br=Z();var hr=Object.prototype.toString;var wr="function"==typeof Symbol?Symbol:void 0,mr="function"==typeof wr?wr.toStringTag:"";var Ar=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return hr.call(r);n=r[mr],t=M(r,mr);try{r[mr]=void 0}catch(t){return hr.call(r)}return e=hr.call(r),t?r[mr]=n:delete r[mr],e}:function(r){return hr.call(r)},Sr="function"==typeof Uint16Array;var Ur="function"==typeof Uint16Array?Uint16Array:null;var Fr,Er="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof Ur)return!1;try{t=new Ur(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Sr&&n instanceof Uint16Array||"[object Uint16Array]"===Ar(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,jr={uint16:Fr,uint8:dr};(_r=new jr.uint16(1))[0]=4660;var Tr=52===new jr.uint8(_r.buffer)[0],Ir=!0===Tr?1:0,xr=new ir(1),kr=new tr(xr.buffer);function Or(r){return xr[0]=r,kr[Ir]}var Nr=Z();var Vr=Object.prototype.toString;var $r="function"==typeof Symbol?Symbol:void 0,Gr="function"==typeof $r?$r.toStringTag:"";var Hr=Nr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Vr.call(r);n=r[Gr],t=M(r,Gr);try{r[Gr]=void 0}catch(t){return Vr.call(r)}return e=Vr.call(r),t?r[Gr]=n:delete r[Gr],e}:function(r){return Vr.call(r)},Wr="function"==typeof Uint32Array;var Cr="function"==typeof Uint32Array?Uint32Array:null;var Lr,Pr="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof Cr)return!1;try{t=new Cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Wr&&n instanceof Uint32Array||"[object Uint32Array]"===Hr(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Rr=Lr,Zr="function"==typeof Float64Array;var Xr="function"==typeof Float64Array?Float64Array:null;var Yr,zr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var r,t,n;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),n=t,r=(Zr&&n instanceof Float64Array||"[object Float64Array]"===Hr(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var Mr=!0===Tr?1:0,qr=new Yr(1),Br=new Rr(qr.buffer);var Dr=Number.POSITIVE_INFINITY,Jr=Number.NEGATIVE_INFINITY;var Kr=Z();var Qr=Object.prototype.toString;var rt="function"==typeof Symbol?Symbol:void 0,tt="function"==typeof rt?rt.toStringTag:"";var nt=Kr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return Qr.call(r);n=r[tt],t=M(r,tt);try{r[tt]=void 0}catch(t){return Qr.call(r)}return e=Qr.call(r),t?r[tt]=n:delete r[tt],e}:function(r){return Qr.call(r)},et="function"==typeof Uint32Array;var ot="function"==typeof Uint32Array?Uint32Array:null;var at,it="function"==typeof Uint32Array?Uint32Array:void 0;at=function(){var r,t,n;if("function"!=typeof ot)return!1;try{t=new ot(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(et&&n instanceof Uint32Array||"[object Uint32Array]"===nt(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")};var ct=at,ft="function"==typeof Float64Array;var ut="function"==typeof Float64Array?Float64Array:null;var lt,yt,pt,st="function"==typeof Float64Array?Float64Array:void 0;lt=function(){var r,t,n;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,NaN]),n=t,r=(ft&&n instanceof Float64Array||"[object Float64Array]"===nt(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?st:function(){throw new Error("not implemented")},!0===Tr?(yt=1,pt=0):(yt=0,pt=1);var vt={HIGH:yt,LOW:pt},gt=new lt(1),dt=new ct(gt.buffer),bt=vt.HIGH,ht=vt.LOW;function wt(r,t){return dt[bt]=r,dt[ht]=t,gt[0]}var mt=Z();var At=Object.prototype.toString;var St="function"==typeof Symbol?Symbol:void 0,Ut="function"==typeof St?St.toStringTag:"";var Ft=mt&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e;if(null==r)return At.call(r);n=r[Ut],t=M(r,Ut);try{r[Ut]=void 0}catch(t){return At.call(r)}return e=At.call(r),t?r[Ut]=n:delete r[Ut],e}:function(r){return At.call(r)},Et="function"==typeof Uint32Array;var _t="function"==typeof Uint32Array?Uint32Array:null;var jt,Tt="function"==typeof Uint32Array?Uint32Array:void 0;jt=function(){var r,t,n;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Et&&n instanceof Uint32Array||"[object Uint32Array]"===Ft(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var It=jt,xt="function"==typeof Float64Array;var kt="function"==typeof Float64Array?Float64Array:null;var Ot,Nt,Vt,$t="function"==typeof Float64Array?Float64Array:void 0;Ot=function(){var r,t,n;if("function"!=typeof kt)return!1;try{t=new kt([1,3.14,-3.14,NaN]),n=t,r=(xt&&n instanceof Float64Array||"[object Float64Array]"===Ft(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$t:function(){throw new Error("not implemented")},!0===Tr?(Nt=1,Vt=0):(Nt=0,Vt=1);var Gt={HIGH:Nt,LOW:Vt},Ht=new Ot(1),Wt=new It(Ht.buffer),Ct=Gt.HIGH,Lt=Gt.LOW;function Pt(r,t,n,e){return Ht[0]=r,t[e]=Wt[Ct],t[e+n]=Wt[Lt],t}function Rt(r){return Pt(r,[0,0],1,0)}L(Rt,"assign",Pt);var Zt=Or(22250738585072014e-324),Xt=[0,0];function Yt(r){var t,n,e,o;return 0===r||function(r){return r!=r}(r)||function(r){return r===Dr||r===Jr}(r)?r:(t=(2147483648&(n=Or(r)>>>0))>>>0,o=(n&=2147483647)<Zt?wt(t|696219795+(((2147483647&Or(o=0x40000000000000*r))>>>0)/3>>>0)>>>0,0):function(r,t){return qr[0]=r,Br[Mr]=t>>>0,qr[0]}(o=0,t|715094163+(n/3>>>0)>>>0),o*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(e=o*o*(o/r)),Rt.assign(o,Xt,1,0),2147483648&Xt[1]?(Xt[0]+=1,Xt[1]&=2147483647):Xt[1]|=2147483648,o=wt(4294967295&Xt[0],3221225472&Xt[1]),o+=o*(e=((e=r/(o*o))-o)/(o+o+e)))}function zt(r,t,n,e,o){return P(r,t,n,e,o,Yt)}function Mt(r,t,n,e,o,a,i){return R(r,t,n,e,o,a,i,Yt)}L(zt,"ndarray",Mt);export{zt as default,Mt as ndarray};
//# sourceMappingURL=mod.js.map

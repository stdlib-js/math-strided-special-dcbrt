// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,l,s,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j=Object.prototype,T=j.toString,O=j.__defineGetter__,V=j.__defineSetter__,$=j.__lookupGetter__,G=j.__lookupSetter__,N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function H(r,e,t){N(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r,e){return e>0?0:(1-r)*e}function C(r,e,t,n,i,a,o,c){var u,f,l;if(r<=0)return i;for(u=n,f=o,l=0;l<r;l++)i[f]=c(e[u]),u+=t,f+=a;return i}function L(r,e,t,n,i,a){return C(r,e,t,W(r,t),n,i,W(r,i),a)}H(L,"ndarray",C);var P,R=2147483648,Z=2147483647,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,q="function"==typeof M?M.toStringTag:"",B=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Y.call(r);t=r[q],a=q,e=null!=(i=r)&&z.call(i,a);try{r[q]=void 0}catch(e){return Y.call(r)}return n=Y.call(r),e?r[q]=t:delete r[q],n}:function(r){return Y.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(D&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=P,er="function"==typeof Float64Array,tr="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),t=e,r=(er&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir,ar=Q,or="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),t=e,r=(or&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,lr=ir,sr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,yr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(sr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,gr={uint16:fr,uint8:lr};(dr=new gr.uint16(1))[0]=4660;var hr=52===new gr.uint8(dr.buffer)[0],wr=!0===hr?1:0,br=new ar(1),vr=new rr(br.buffer);function mr(r){return br[0]=r,vr[wr]}var Ar,_r,Er=!0===hr?1:0,Ur=new ar(1),Sr=new rr(Ur.buffer),Ir=Number.POSITIVE_INFINITY,xr=Number.NEGATIVE_INFINITY;!0===hr?(Ar=1,_r=0):(Ar=0,_r=1);var kr,Fr,jr={HIGH:Ar,LOW:_r},Tr=new ar(1),Or=new rr(Tr.buffer),Vr=jr.HIGH,$r=jr.LOW;function Gr(r,e){return Or[Vr]=r,Or[$r]=e,Tr[0]}!0===hr?(kr=1,Fr=0):(kr=0,Fr=1);var Nr={HIGH:kr,LOW:Fr},Hr=new ar(1),Wr=new rr(Hr.buffer),Cr=Nr.HIGH,Lr=Nr.LOW;function Pr(r,e,t,n){return Hr[0]=r,e[n]=Wr[Cr],e[n+t]=Wr[Lr],e}function Rr(r){return Pr(r,[0,0],1,0)}H(Rr,"assign",Pr);var Zr=4294967295,Xr=3221225472,Yr=0x40000000000000,zr=2147483648,Mr=1,qr=715094163,Br=696219795,Dr=mr(22250738585072014e-324),Jr=[0,0];function Kr(r){var e,t,n,i;return 0===r||function(r){return r!=r}(r)||function(r){return r===Ir||r===xr}(r)?r:(e=((t=mr(r)>>>0)&R)>>>0,i=(t&=Z)<Dr?Gr(e|(((mr(i=Yr*r)&Z)>>>0)/3>>>0)+Br>>>0,0):function(r,e){return Ur[0]=r,Sr[Er]=e>>>0,Ur[0]}(i=0,e|(t/3>>>0)+qr>>>0),i*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(n=i*i*(i/r)),Rr.assign(i,Jr,1,0),Jr[1]&zr?(Jr[0]+=Mr,Jr[1]&=~zr):Jr[1]|=zr,i=Gr(Jr[0]&Zr,Jr[1]&Xr),i+=i*(n=((n=r/(i*i))-i)/(i+i+n)))}function Qr(r,e,t,n,i){return L(r,e,t,n,i,Kr)}return H(Qr,"ndarray",(function(r,e,t,n,i,a,o){return C(r,e,t,n,i,a,o,Kr)})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dcbrt=e();
//# sourceMappingURL=index.js.map

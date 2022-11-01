// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t};function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(t,r,n,e,o,i){var u,a,f;if(t<=0)return e;for(u=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=i(r[u]),u+=n,a+=o;return e}function p(t,r,n,e,o,i,u,a){var f,c,l;if(t<=0)return o;for(f=e,c=u,l=0;l<t;l++)o[c]=a(r[f]),f+=n,c+=i;return o}l(y,"ndarray",p);var b,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,_=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",A=d&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return v.call(t);n=t[w],i=w,r=null!=(o=t)&&_.call(o,i);try{t[w]=void 0}catch(r){return v.call(t)}return e=v.call(t),r?t[w]=n:delete t[w],e}:function(t){return v.call(t)},s="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var t,r,n;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(s&&n instanceof Uint32Array||"[object Uint32Array]"===A(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?U:function(){throw new Error("not implemented")};var h,j=b,g="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;h=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===A(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=h,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,256,257]),n=r,t=(F&&n instanceof Uint8Array||"[object Uint8Array]"===A(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?N:function(){throw new Error("not implemented")};var H,G=S,P="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,65536,65537]),n=r,t=(P&&n instanceof Uint16Array||"[object Uint16Array]"===A(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W={uint16:H,uint8:G};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],Y=!0===k?1:0,C=new E(1),M=new j(C.buffer);function q(t){return C[0]=t,M[Y]}var z,B,D=!0===k?1:0,J=new E(1),K=new j(J.buffer),Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;!0===k?(z=1,B=0):(z=0,B=1);var X,Z,$={HIGH:z,LOW:B},tt=new E(1),rt=new j(tt.buffer),nt=$.HIGH,et=$.LOW;function ot(t,r){return rt[nt]=t,rt[et]=r,tt[0]}!0===k?(X=1,Z=0):(X=0,Z=1);var it={HIGH:X,LOW:Z},ut=new E(1),at=new j(ut.buffer),ft=it.HIGH,ct=it.LOW;function lt(t,r){return ut[0]=r,t[0]=at[ft],t[1]=at[ct],t}var yt=2147483647,pt=2147483648,bt=q(22250738585072014e-324),dt=[0,0];function vt(t){var r,n,e,o;return 0===t||function(t){return t!=t}(t)||function(t){return t===Q||t===R}(t)?t:(r=(2147483648&(n=q(t)>>>0))>>>0,o=(n&=yt)<bt?ot(r|696219795+(((q(o=0x40000000000000*t)&yt)>>>0)/3>>>0)>>>0,0):function(t,r){return J[0]=t,K[D]=r>>>0,J[0]}(o=0,r|715094163+(n/3>>>0)>>>0),o*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(e=o*o*(o/t)),function(t,r){1===arguments.length?lt([0,0],t):lt(t,r)}(dt,o),dt[1]&pt?(dt[0]+=1,dt[1]&=~pt):dt[1]|=pt,o=ot(4294967295&dt[0],3221225472&dt[1]),o+=o*(e=((e=t/(o*o))-o)/(o+o+e)))}function _t(t,r,n,e,o){return y(t,r,n,e,o,vt)}function wt(t,r,n,e,o,i,u){return p(t,r,n,e,o,i,u,vt)}l(_t,"ndarray",wt),t.default=_t,t.ndarray=wt,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).dcbrt={});
//# sourceMappingURL=browser.js.map

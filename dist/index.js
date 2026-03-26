"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(z,s){
var f=require('@stdlib/strided-base-dmap/dist'),j=require('@stdlib/math-base-special-cbrt/dist');function x(e,r,a,t,i){return f(e,r,a,t,i,j)}s.exports=x
});var q=u(function(A,c){
var l=require('@stdlib/strided-base-dmap/dist').ndarray,R=require('@stdlib/math-base-special-cbrt/dist');function _(e,r,a,t,i,m,y){return l(e,r,a,t,i,m,y,R)}c.exports=_
});var p=u(function(B,o){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),O=q();E(d,"ndarray",O);o.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),n,b=h(g(__dirname,"./native.js"));b instanceof Error?n=k:n=b;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

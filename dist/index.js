"use strict";var O=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var c=O(function(B,b){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),S=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-boolean").isPrimitive,T=require("@stdlib/assert-is-integer").isPrimitive,P=require("@stdlib/assert-is-ndarray-like"),V=require("@stdlib/ndarray-base-assert-is-read-only"),g=require("@stdlib/assert-has-own-property"),y=require("@stdlib/symbol-iterator"),x=require("@stdlib/array-base-nulls"),R=require("@stdlib/ndarray-shape"),j=require("@stdlib/ndarray-base-normalize-index"),D=require("@stdlib/ndarray-base-numel"),F=require("@stdlib/ndarray-base-slice"),I=require("@stdlib/slice-ctor"),L=require("@stdlib/slice-base-args2multislice"),a=require("@stdlib/string-format");function q(i,r){var e,s,l,n,o,p,d,v,u,t;if(!P(i))throw new TypeError(a("invalid argument. First argument must be an ndarray. Value: `%s`.",i));if(!T(r))throw new TypeError(a("invalid argument. Second argument must be an integer. Value: `%s`.",r));if(n={writable:!1,keepdim:!1},arguments.length>2){if(e=arguments[2],!S(e))throw new TypeError(a("invalid argument. Options argument must be an object. Value: `%s`.",e));if(g(e,"readonly")){if(!w(e.readonly))throw new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",e.readonly));if(n.writable=!e.readonly,n.writable&&V(i))throw new Error(a("invalid option. Cannot write to read-only array."))}if(g(e,"keepdim")){if(!w(e.keepdim))throw new TypeError(a("invalid option. `%s` option must be a boolean. Option: `%s`.","keepdim",e.keepdim));n.keepdim=e.keepdim}}if(s=R(i),l=s.length,u=j(r,l-1),u===-1)throw new RangeError(a("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",l,r));return v=D(s),v===0&&(p=!0),v=s[u],t=-1,d=x(l),o={},f(o,"next",h),f(o,"return",k),y&&f(o,y,E),o;function h(){var m;return t+=1,p||t>=v?{done:!0}:(n.keepdim?d[u]=new I(t,t+1,1):d[u]=t,m=L(d),{value:F(i,m,!0,n.writable),done:!1})}function k(m){return p=!0,arguments.length?{value:m,done:!0}:{done:!0}}function E(){return q(i,r,n)}}b.exports=q});var N=c();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

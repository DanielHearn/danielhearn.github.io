"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[996],{8678:function(e,t,n){var r=n(7294),o=n(1883);t.Z=e=>{let{location:t,title:n,children:i}=e;const{site:s}=(0,o.useStaticQuery)("688023903"),a="/blog/"===t.pathname;let c;const l=s.siteMetadata.author.name,u=s.siteMetadata.siteUrl,f=s.siteMetadata.bggUrl;return c=a?r.createElement("h1",{className:"main-heading"},r.createElement(o.Link,{to:"/"},"Gaming with Dan")):r.createElement(r.Fragment,null," ",r.createElement("h1",{className:"main-heading"},r.createElement(o.Link,{to:"/"},"Gaming with Dan"))," "),r.createElement("div",{className:"global-wrapper","data-is-root-path":a},r.createElement("header",{className:"global-header"},c),r.createElement("main",null,i),r.createElement("footer",null,r.createElement("div",null,"By ",r.createElement("a",{href:u},l)),r.createElement("div",null,r.createElement("a",{href:f},"BoardGameGeek"))))}},9357:function(e,t,n){var r=n(7294),o=n(1883);t.Z=e=>{var t;let{description:n,title:i,children:s}=e;const{site:a}=(0,o.useStaticQuery)("2841359383"),c=n||a.siteMetadata.description,l=null===(t=a.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,l?i+" | "+l:i),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          /* latin */\n        @font-face {\n          font-family: 'Poppins';\n          font-style: normal;\n          font-weight: 400;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');\n          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n        }\n        /* latin */\n        @font-face {\n          font-family: 'Poppins';\n          font-style: normal;\n          font-weight: 500;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');\n          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n        }\n        /* latin */\n        @font-face {\n          font-family: 'Poppins';\n          font-style: normal;\n          font-weight: 600;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2) format('woff2');\n          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n        }\n        /* latin */\n        @font-face {\n          font-family: 'Poppins';\n          font-style: normal;\n          font-weight: 700;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');\n          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n        }\n        /* latin */\n        @font-face {\n          font-family: 'Poppins';\n          font-style: normal;\n          font-weight: 800;\n          font-display: swap;\n          src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2) format('woff2');\n          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n        }\n        "}}),s)}},1663:function(e,t,n){n.r(t),n.d(t,{Head:function(){return rt},default:function(){return nt}});var r=n(7294),o=n(8678),i=n(9357),s=n(4578);function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:c}=Object.prototype,{getPrototypeOf:l}=Object,u=(f=Object.create(null),e=>{const t=c.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())});var f;const d=e=>(e=e.toLowerCase(),t=>u(t)===e),h=e=>t=>typeof t===e,{isArray:p}=Array,m=h("undefined");const g=d("ArrayBuffer");const y=h("string"),E=h("function"),b=h("number"),w=e=>null!==e&&"object"==typeof e,v=e=>{if("object"!==u(e))return!1;const t=l(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},O=d("Date"),S=d("File"),U=d("Blob"),F=d("FileList"),A=d("URLSearchParams");function R(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),p(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function _(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!m(e)&&e!==x;const T=(N="undefined"!=typeof Uint8Array&&l(Uint8Array),e=>N&&e instanceof N);var N;const D=d("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),k=d("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};R(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},B="abcdefghijklmnopqrstuvwxyz",L="0123456789",z={DIGIT:L,ALPHA:B,ALPHA_DIGIT:B+B.toUpperCase()+L};const I=d("AsyncFunction");var M={isArray:p,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||E(e.append)&&("formdata"===(t=u(e))||"object"===t&&E(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:y,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:v,isUndefined:m,isDate:O,isFile:S,isBlob:U,isRegExp:k,isFunction:E,isStream:e=>w(e)&&E(e.pipe),isURLSearchParams:A,isTypedArray:T,isFileList:F,forEach:R,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const i=t&&_(n,o)||o;v(n[i])&&v(r)?n[i]=e(n[i],r):v(r)?n[i]=e({},r):p(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&R(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(R(t,((t,r)=>{n&&E(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&l(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:d,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:D,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(E(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];E(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return p(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:_,global:x,isContextDefined:C,ALPHABET:z,generateString:(e=16,t=z.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&E(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=p(e)?[]:{};return R(e,((e,t)=>{const i=n(e,r+1);!m(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:I,isThenable:e=>e&&(w(e)||E(e))&&E(e.then)&&E(e.catch)};function q(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}M.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=q.prototype,J={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{J[e]={value:e}})),Object.defineProperties(q,J),Object.defineProperty(H,"isAxiosError",{value:!0}),q.from=(e,t,n,r,o,i)=>{const s=Object.create(H);return M.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),q.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var $=q;function V(e){return M.isPlainObject(e)||M.isArray(e)}function W(e){return M.endsWith(e,"[]")?e.slice(0,-2):e}function K(e,t,n){return e?e.concat(t).map((function(e,t){return e=W(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const G=M.toFlatObject(M,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Q=function(e,t,n){if(!M.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!M.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&M.isSpecCompliantForm(t);if(!M.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(M.isDate(e))return e.toISOString();if(!a&&M.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(e)||M.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(M.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(M.isArray(e)&&function(e){return M.isArray(e)&&!e.some(V)}(e)||(M.isFileList(e)||M.endsWith(n,"[]"))&&(a=M.toArray(e)))return n=W(n),a.forEach((function(e,r){!M.isUndefined(e)&&null!==e&&t.append(!0===s?K([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!V(e)||(t.append(K(o,n,i),c(e)),!1)}const u=[],f=Object.assign(G,{defaultVisitor:l,convertValue:c,isVisitable:V});if(!M.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!M.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),M.forEach(n,(function(n,i){!0===(!(M.isUndefined(n)||null===n)&&o.call(t,n,M.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function Z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function X(e,t){this._pairs=[],e&&Q(e,this,t)}const Y=X.prototype;Y.append=function(e,t){this._pairs.push([e,t])},Y.toString=function(e){const t=e?function(t){return e.call(this,t,Z)}:Z;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ee=X;function te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ne(e,t,n){if(!t)return e;const r=n&&n.encode||te,o=n&&n.serialize;let i;if(i=o?o(t,n):M.isURLSearchParams(t)?t.toString():new ee(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}var re=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){M.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},oe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ie={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ee,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};var se=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&M.isArray(r)?r.length:i,a)return M.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&M.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&M.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s}if(M.isFormData(e)&&M.isFunction(e.entries)){const n={};return M.forEachEntry(e,((e,r)=>{t(function(e){return M.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:oe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=M.isObject(e);o&&M.isHTMLForm(e)&&(e=new FormData(e));if(M.isFormData(e))return r&&r?JSON.stringify(se(e)):e;if(M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Q(e,new ie.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ie.isNode&&M.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=M.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Q(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(M.isString(e))try{return(t||JSON.parse)(e),M.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ce.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&M.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw $.from(o,$.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ie.classes.FormData,Blob:ie.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};M.forEach(["delete","get","head"],(function(e){ce.headers[e]={}})),M.forEach(["post","put","patch"],(function(e){ce.headers[e]=M.merge(ae)}));var le=ce;const ue=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const fe=Symbol("internals");function de(e){return e&&String(e).trim().toLowerCase()}function he(e){return!1===e||null==e?e:M.isArray(e)?e.map(he):String(e)}function pe(e,t,n,r,o){return M.isFunction(r)?r.call(this,t,n):(o&&(t=n),M.isString(t)?M.isString(r)?-1!==t.indexOf(r):M.isRegExp(r)?r.test(t):void 0:void 0)}class me{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=de(t);if(!o)throw new Error("header name must be a non-empty string");const i=M.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=he(e))}const i=(e,t)=>M.forEach(e,((e,n)=>o(e,n,t)));return M.isPlainObject(e)||e instanceof this.constructor?i(e,t):M.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ue[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=de(e)){const n=M.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(M.isFunction(t))return t.call(this,e,n);if(M.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=de(e)){const n=M.findKey(this,e);return!(!n||void 0===this[n]||t&&!pe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=de(e)){const o=M.findKey(n,e);!o||t&&!pe(0,n[o],o,t)||(delete n[o],r=!0)}}return M.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!pe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return M.forEach(this,((r,o)=>{const i=M.findKey(n,o);if(i)return t[i]=he(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=he(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return M.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&M.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[fe]=this[fe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=de(e);t[r]||(!function(e,t){const n=M.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return M.isArray(e)?e.forEach(r):r(e),this}}me.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),M.freezeMethods(me.prototype),M.freezeMethods(me);var ge=me;function ye(e,t){const n=this||le,r=t||n,o=ge.from(r.headers);let i=r.data;return M.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Ee(e){return!(!e||!e.__CANCEL__)}function be(e,t,n){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,n),this.name="CanceledError"}M.inherits(be,$,{__CANCEL__:!0});var we=be;var ve=ie.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),M.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),M.isString(r)&&s.push("path="+r),M.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Oe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Se=ie.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=M.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};var Ue=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,f=0;for(;u!==i;)f+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}};function Fe(e,t){let n=0;const r=Ue(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Ae={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ge.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}M.isFormData(r)&&(ie.isStandardBrowserEnv||ie.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const l=Oe(e.baseURL,e.url);function u(){if(!c)return;const r=ge.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ne(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new $("Request aborted",$.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new $("Network Error",$.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||oe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new $(t,r.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,c)),c=null},ie.isStandardBrowserEnv){const t=(e.withCredentials||Se(l))&&e.xsrfCookieName&&ve.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&M.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),M.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Fe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Fe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new we(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);f&&-1===ie.protocols.indexOf(f)?n(new $("Unsupported protocol "+f+":",$.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};M.forEach(Ae,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var Re=e=>{e=M.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=M.isString(n)?Ae[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new $(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(M.hasOwnProp(Ae,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!M.isFunction(r))throw new TypeError("adapter is not a function");return r};function _e(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new we(null,e)}function xe(e){_e(e),e.headers=ge.from(e.headers),e.data=ye.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Re(e.adapter||le.adapter)(e).then((function(t){return _e(e),t.data=ye.call(e,e.transformResponse,t),t.headers=ge.from(t.headers),t}),(function(t){return Ee(t)||(_e(e),t&&t.response&&(t.response.data=ye.call(e,e.transformResponse,t.response),t.response.headers=ge.from(t.response.headers))),Promise.reject(t)}))}const Ce=e=>e instanceof ge?e.toJSON():e;function Te(e,t){t=t||{};const n={};function r(e,t,n){return M.isPlainObject(e)&&M.isPlainObject(t)?M.merge.call({caseless:n},e,t):M.isPlainObject(t)?M.merge({},t):M.isArray(t)?t.slice():t}function o(e,t,n){return M.isUndefined(t)?M.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!M.isUndefined(t))return r(void 0,t)}function s(e,t){return M.isUndefined(t)?M.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Ce(e),Ce(t),!0)};return M.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);M.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Ne="1.4.0",De={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{De[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const je={};De.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new $(r(o," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!je[o]&&(je[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var ke={assertOptions:function(e,t,n){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new $("option "+i+" must be "+n,$.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $("Unknown option "+i,$.ERR_BAD_OPTION)}},validators:De};const Pe=ke.validators;class Be{constructor(e){this.defaults=e,this.interceptors={request:new re,response:new re}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Te(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&ke.assertOptions(n,{silentJSONParsing:Pe.transitional(Pe.boolean),forcedJSONParsing:Pe.transitional(Pe.boolean),clarifyTimeoutError:Pe.transitional(Pe.boolean)},!1),null!=r&&(M.isFunction(r)?t.paramsSerializer={serialize:r}:ke.assertOptions(r,{encode:Pe.function,serialize:Pe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&M.merge(o.common,o[t.method]),i&&M.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ge.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[xe.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=s.length;let d=t;for(f=0;f<u;){const e=s[f++],t=s[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{l=xe.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ne(Oe((e=Te(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}M.forEach(["delete","get","head","options"],(function(e){Be.prototype[e]=function(t,n){return this.request(Te(n||{},{method:e,url:t,data:(n||{}).data}))}})),M.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Te(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Be.prototype[e]=t(),Be.prototype[e+"Form"]=t(!0)}));var Le=Be;class ze{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new we(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new ze((function(t){e=t})),cancel:e}}}var Ie=ze;const Me={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Me).forEach((([e,t])=>{Me[t]=e}));var qe=Me;const He=function e(t){const n=new Le(t),r=a(Le.prototype.request,n);return M.extend(r,Le.prototype,n,{allOwnKeys:!0}),M.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Te(t,n))},r}(le);He.Axios=Le,He.CanceledError=we,He.CancelToken=Ie,He.isCancel=Ee,He.VERSION=Ne,He.toFormData=Q,He.AxiosError=$,He.Cancel=He.CanceledError,He.all=function(e){return Promise.all(e)},He.spread=function(e){return function(t){return e.apply(null,t)}},He.isAxiosError=function(e){return M.isObject(e)&&!0===e.isAxiosError},He.mergeConfig=Te,He.AxiosHeaders=ge,He.formToJSON=e=>se(M.isHTMLForm(e)?new FormData(e):e),He.HttpStatusCode=qe,He.default=He;var Je=He,$e=function(){function e(){}return e.prototype.expandToken=function(e){for(var t=[],n="",r=0,o=e.length;r<o;++r)n+=e.charAt(r),t.push(n);return t},e}(),Ve=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function We(e,t){t=t||[];for(var n=e=e||{},r=0;r<t.length;r++)if(null==(n=n[t[r]]))return null;return n}var Ke=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var t=e.prototype;return t.indexDocument=function(e,t,n){this._tokenToIdfCache={};var r,o=this._tokenMap;"object"!=typeof o[e]?o[e]=r={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(r=o[e]).$totalNumOccurrences++;var i=r.$uidMap;"object"!=typeof i[t]?(r.$numDocumentOccurrences++,i[t]={$document:n,$numTokenOccurrences:1}):i[t].$numTokenOccurrences++},t.search=function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r],s=this._tokenMap[i];if(!s)return[];if(0===r)for(var a=0,c=(l=Object.keys(s.$uidMap)).length;a<c;a++){n[u=l[a]]=s.$uidMap[u].$document}else{var l;for(a=0,c=(l=Object.keys(n)).length;a<c;a++){var u=l[a];"object"!=typeof s.$uidMap[u]&&delete n[u]}}}var f=[];for(var u in n)f.push(n[u]);var d=this._createCalculateTfIdf();return f.sort((function(n,r){return d(e,r,t)-d(e,n,t)}))},t._createCalculateIdf=function(){var e=this._tokenMap,t=this._tokenToIdfCache;return function(n,r){if(!t[n]){var o=void 0!==e[n]?e[n].$numDocumentOccurrences:0;t[n]=1+Math.log(r.length/(1+o))}return t[n]}},t._createCalculateTfIdf=function(){var e=this._tokenMap,t=this._uidFieldName,n=this._createCalculateIdf();return function(r,o,i){for(var s=0,a=0,c=r.length;a<c;++a){var l,u=r[a],f=n(u,i);f===1/0&&(f=0),l=t instanceof Array?o&&We(o,t):o&&o[t],s+=(void 0!==e[u]&&void 0!==e[u].$uidMap[l]?e[u].$uidMap[l].$numTokenOccurrences:0)*f}return s}},e}(),Ge=/[^a-zа-яё0-9\-']+/i,Qe=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(Ge).filter((function(e){return e}))},e}();function Ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Xe=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new $e,this._searchIndex=new Ke(e),this._sanitizer=new Ve,this._tokenizer=new Qe,this._documents=[],this._searchableFields=[]}var t,n,r,o=e.prototype;return o.addDocument=function(e){this.addDocuments([e])},o.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},o.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},o.search=function(e){var t=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(t,this._documents)},o.indexDocuments_=function(e,t){this._initialized=!0;for(var n=this._indexStrategy,r=this._sanitizer,o=this._searchIndex,i=this._tokenizer,s=this._uidFieldName,a=0,c=e.length;a<c;a++){var l,u=e[a];l=s instanceof Array?We(u,s):u[s];for(var f=0,d=t.length;f<d;f++){var h,p=t[f];if(null!=(h=p instanceof Array?We(u,p):u[p])&&"string"!=typeof h&&h.toString&&(h=h.toString()),"string"==typeof h)for(var m=i.tokenize(r.sanitize(h)),g=0,y=m.length;g<y;g++)for(var E=m[g],b=n.expandToken(E),w=0,v=b.length;w<v;w++){var O=b[w];o.indexDocument(O,l,u)}}}},t=e,(n=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&Ze(t.prototype,n),r&&Ze(t,r),e}(),Ye=n(1883);let et=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={bookList:[],search:[],searchResults:[],isLoading:!0,isError:!1,searchQuery:""},t.rebuildIndex=e=>{const n=new Xe("id");n.indexStrategy=new $e,n.sanitizer=new Ve,n.searchIndex=new Ke("title"),n.addIndex("title"),n.addIndex("tags"),n.addDocuments(e),t.setState({search:n,isLoading:!1})},t.searchData=e=>{const{search:n}=t.state;if(null!=n&&n.search){const r=n.search(e.target.value);t.setState({searchQuery:e.target.value,searchResults:r})}},t.handleSubmit=e=>{e.preventDefault()},t}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=async function(){Je.get("/post_feed-1.json").then((e=>{const t=e.data;this.setState({bookList:t.items}),this.rebuildIndex(t.items)})).catch((e=>{this.setState({isError:!0})}))},n.render=function(){const{searchResults:e,searchQuery:t}=this.state;return r.createElement("div",null,r.createElement("div",{style:{margin:"0 auto"}},r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("div",{style:{margin:"0 auto"}},r.createElement("label",{htmlFor:"Search",style:{paddingRight:"10px"}},"Enter your search here"),r.createElement("input",{id:"Search",value:t,onChange:this.searchData,placeholder:"Enter your search here",style:{margin:"0 auto",width:"400px"}}))),t&&r.createElement("div",null,null!=e&&e.length?r.createElement("ol",{style:{listStyle:"none"}},e.map((e=>{const t=e.title||e.slug;return r.createElement("li",{key:e.slug,className:"list-item"},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("div",null,r.createElement("header",null,r.createElement("h2",null,r.createElement(Ye.Link,{to:e.url,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t))),r.createElement("small",null,e.date)),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.description||e.excerpt},itemProp:"description"})))))}))):r.createElement("span",null,"No matching results"))))},t}(r.Component);var tt=et;var nt=e=>{let{data:{site:{siteMetadata:{title:t}}},location:n}=e;const i=t||"Title";return r.createElement(o.Z,{location:n,title:i},r.createElement("div",null,r.createElement("h1",null,"Search"),r.createElement(tt,null)))};const rt=()=>r.createElement(i.Z,{title:"Search"})}}]);
//# sourceMappingURL=component---src-pages-search-js-d52bc201f5c471abffb5.js.map
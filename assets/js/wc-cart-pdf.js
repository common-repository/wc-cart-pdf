/*! For license information please see wc-cart-pdf.js.LICENSE.txt */
(()=>{var e,t={623:(e,t,r)=>{"use strict";function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var o=function e(t,r){function o(e,o,i){if("undefined"!=typeof document){"number"==typeof(i=n({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var i=r[o].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(n[a]=t.read(c,a),e===a)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),i=r(221),c=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){var t=cartpdf.capture_fields||[];try{if(!e||"object"!==a(e))throw new Error("Invalid object");for(var r in e)t.includes(r)||delete e[r];var n=JSON.stringify(e);o.set("wc-cart-pdf-customer",n)}catch(e){console.error(e)}};const l=function(){if("undefined"!=typeof wp&&wp&&wp.data){var e=c()((function(){var e=wp.data.select("wc/store/cart").getCustomerData(),t={};for(var r in e.shippingAddress)t["shipping_".concat(r)]=e.shippingAddress[r];for(var n in e.billingAddress)t["billing_".concat(n)]=e.billingAddress[n];u(t)}),250);wp.data.subscribe(e)}var t=document.querySelector('form[name="checkout"]'),r=null==t?void 0:t.querySelectorAll("input, textarea, select");null==r||r.forEach((function(e){e.addEventListener("change",(function(e){e.preventDefault();var r=new FormData(t),n={};r.forEach((function(e,t){n[t]=e})),u(n)}))}))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const p=function(){var e=document.getElementById("wc-cart-pdf-modal"),t=null==e?void 0:e.querySelector("form"),r=null==t?void 0:t.getAttribute("action"),n=null==e?void 0:e.querySelector("#wc-cart-pdf-capture-form-errors");if(e&&t&&r&&n){var i,c=document.querySelector(".cart-pdf-button"),a=!1;(null==c?void 0:c.addEventListener("click",l))||(i=setInterval((function(){document.querySelector(".cart-pdf-button")&&(clearInterval(i),document.querySelector(".cart-pdf-button").addEventListener("click",l))}),250)),t.addEventListener("submit",(function(i){if(i.preventDefault(),!a){a=!0;var c,u=new FormData(t),l={},d=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=s(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}(u.entries());try{for(d.s();!(c=d.n()).done;){var p=f(c.value,2),v=p[0],y=p[1];l[v]=y}}catch(e){d.e(e)}finally{d.f()}o.set("wc-cart-pdf-customer",JSON.stringify(l)),l.nonce=cartpdf.nonce,fetch("".concat(cartpdf.ajax_url,"?action=wc_cart_pdf_modal_form_save"),{method:"POST",body:new URLSearchParams(l).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e.json()})).then((function(t){if(t.success){var o=new URL(r);l.email_copy&&"1"===l.email_copy&&o.searchParams.set("email_copy","1"),window.location.href=o.toString(),e.close()}else n.textContent=(null==t?void 0:t.data)||"An error occurred."})).catch((function(e){var t;n.textContent=(null==e||null===(t=e.responseJSON)||void 0===t?void 0:t.data)||"An error occurred."})).finally((function(){a=!1}))}}))}else console.error("WC Cart PDF: Modal capture elements not found.");function u(t){t.target!==e&&t.target!==e.querySelector(".wc-cart-pdf-modal-close")||(e.close(),e.removeEventListener("click",u))}function l(r){r.preventDefault(),e.showModal(),t.querySelector("input").focus(),e.addEventListener("click",u)}};document.addEventListener("DOMContentLoaded",(function(){var e,t;null!==(e=cartpdf)&&void 0!==e&&null!==(e=e.modules)&&void 0!==e&&e.capture_customer&&l(),null!==(t=cartpdf)&&void 0!==t&&null!==(t=t.modules)&&void 0!==t&&t.modal_capture&&p()}))},873:(e,t,r)=>{var n=r(325).Symbol;e.exports=n},552:(e,t,r)=>{var n=r(873),o=r(659),i=r(350),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):i(e)}},128:(e,t,r)=>{var n=r(800),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},840:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},659:(e,t,r)=>{var n=r(873),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[a]=r:delete e[a]),o}},350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},325:(e,t,r)=>{var n=r(840),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},800:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},221:(e,t,r)=>{var n=r(805),o=r(124),i=r(374),c=Math.max,a=Math.min;e.exports=function(e,t,r){var u,l,f,s,d,p,v=0,y=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=u,n=l;return u=l=void 0,v=t,s=e.apply(n,r)}function g(e){var r=e-p;return void 0===p||r>=t||r<0||m&&e-v>=f}function w(){var e=o();if(g(e))return x(e);d=setTimeout(w,function(e){var r=t-(e-p);return m?a(r,f-(e-v)):r}(e))}function x(e){return d=void 0,b&&u?h(e):(u=l=void 0,s)}function S(){var e=o(),r=g(e);if(u=arguments,l=this,p=e,r){if(void 0===d)return function(e){return v=e,d=setTimeout(w,t),y?h(e):s}(p);if(m)return clearTimeout(d),d=setTimeout(w,t),h(p)}return void 0===d&&(d=setTimeout(w,t)),s}return t=i(t)||0,n(r)&&(y=!!r.leading,f=(m="maxWait"in r)?c(i(r.maxWait)||0,t):f,b="trailing"in r?!!r.trailing:b),S.cancel=function(){void 0!==d&&clearTimeout(d),v=0,u=p=l=d=void 0},S.flush=function(){return void 0===d?s:x(o())},S}},805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},394:(e,t,r)=>{var n=r(552),o=r(346);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},124:(e,t,r)=>{var n=r(325);e.exports=function(){return n.Date.now()}},374:(e,t,r)=>{var n=r(128),o=r(805),i=r(394),c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=a.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):c.test(e)?NaN:+e}},594:()=>{},917:()=>{}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,r,o,i)=>{if(!r){var c=1/0;for(f=0;f<e.length;f++){for(var[r,o,i]=e[f],a=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(a=!1,i<c&&(c=i));if(a){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={864:0,913:0,910:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[c,a,u]=r,l=0;if(c.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var f=u(n)}for(t&&t(r);l<c.length;l++)i=c[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self.webpackChunkwc_cart_pdf=self.webpackChunkwc_cart_pdf||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[913,910],(()=>n(623))),n.O(void 0,[913,910],(()=>n(594)));var o=n.O(void 0,[913,910],(()=>n(917)));o=n.O(o)})();
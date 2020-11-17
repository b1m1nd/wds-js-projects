parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SuC1":[function(require,module,exports) {
var e=new AudioContext,t=document.getElementById("useKeys"),n=document.querySelector(".close"),c=[{note:"C",key:"S",frequency:261.626,active:!1},{note:"Db",key:"E",frequency:277.183,active:!1},{note:"D",key:"D",frequency:293.665,active:!1},{note:"Eb",key:"R",frequency:311.127,active:!1},{note:"E",key:"F",frequency:329.628,active:!1},{note:"F",key:"H",frequency:349.228,active:!1},{note:"Gb",key:"U",frequency:369.994,active:!1},{note:"G",key:"J",frequency:369.994,active:!1},{note:"Ab",key:"I",frequency:391.995,active:!1},{note:"A",key:"K",frequency:440,active:!1},{note:"Bb",key:"O",frequency:466.164,active:!1},{note:"B",key:"L",frequency:493.883,active:!1}];function o(e){return c.find(function(t){return"Key".concat(t.key)===e})}function i(){c.forEach(function(e){document.querySelector('[data-note="'.concat(e.note,'"]')).classList.toggle("active",e.active),null!=e.oscillator&&(e.oscillator.stop(),e.oscillator.disconnect())});var e=c.filter(function(e){return e.active}),t=1/e.length;e.forEach(function(e){a(e,t)})}function a(t,n){var c=e.createGain(),o=e.createOscillator();c.gain.value=n,o.frequency.value=t.frequency,o.type="sine",o.connect(e.destination),o.start(),t.oscillator=o}n.addEventListener("click",function(){this.closest(".rotate").classList.add("hidden")}),document.addEventListener("keydown",function(e){if(t.checked&&!e.repeat){var n=o(e.code);null!=n&&(n.active=!0,i())}}),document.addEventListener("keyup",function(e){if(t.checked){var n=o(e.code);null!=n&&(n.active=!1,i())}});
},{}],"wzVr":[function(require,module,exports) {
var e=document.getElementById("quiz-form"),t=Array.from(document.querySelectorAll(".answer")),r=document.querySelectorAll(".question-item"),c=document.getElementById("alert");function n(){var e=t.filter(function(e){return e.checked}),n=0;t.forEach(function(e){if(e.checked){var t=e.closest(".question-item");"true"===e.value?(t.classList.add("correct"),t.classList.remove("incorrect"),n++):(t.classList.remove("correct"),t.classList.add("incorrect"),n--)}});var i=e.every(function(e){return"true"===e.value}),o=e===r.length;(3===n||i&&o)&&(c.classList.add("active"),setTimeout(function(){return c.classList.remove("active")},1500))}e.addEventListener("submit",function(e){e.preventDefault(),r.forEach(function(e){e.classList.add("incorrect")}),n()});
},{}],"JXHT":[function(require,module,exports) {
function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=document.getElementById("form"),c=document.getElementById("username"),i=document.getElementById("password"),l=document.getElementById("password-confirmation"),u=document.getElementById("terms"),m=document.querySelector(".errors-list"),d=document.querySelector(".success-form");function f(){for(;m.firstChild;)m.removeChild(m.firstChild);m.closest(".errors").classList.remove("show")}function h(e){e.forEach(function(e){var t=document.createElement("li");t.innerHTML=e,m.appendChild(t)}),m.closest(".errors").classList.add("show")}a.addEventListener("submit",function(t){t.preventDefault();var r=[];if(f(),c.value.length<=5){r=[].concat(e(r),["Username must be over 5 characters long"])}if(i.value.length<=9){r=[].concat(e(r),["Password must be over 9 characters long"])}if(i.value!==l.value||!l.value){r=[].concat(e(r),["Passwords must be confirmed and match"])}if(!u.checked){r=[].concat(e(r),["Must agree to my terms"])}r.length>0?h(r):(d.classList.add("show"),d.addEventListener("click",function(){this.classList.remove("show")}))});
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("./piano.js"),require("./quiz.js"),require("./validation.js");var e=document.querySelector(".navMain"),r=document.querySelector(".canHazBurger");r.addEventListener("click",function(r){e.classList.toggle("hidden")}),console.log("[1m[36m Starting WDS projects! [0m");
},{"./piano.js":"SuC1","./quiz.js":"wzVr","./validation.js":"JXHT"}]},{},["d6sW"], null)
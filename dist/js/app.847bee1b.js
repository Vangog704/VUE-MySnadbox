(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],o=!0,a=1;a<r.length;a++){var c=r[a];0!==n[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var o={},n={app:0},i=[];function s(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=o,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(r,o,function(e){return t[e]}.bind(null,o));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var h=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0c75":function(t,e){t.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="fb15")}({1266:function(t,e){function r(t,e){if(!(this instanceof r))return new r(t,e);this.x=t||0,this.y=e||0}t.exports=r,r.fromArray=function(t){return new r(t[0]||0,t[1]||0)},r.fromObject=function(t){return new r(t.x||0,t.y||0)},r.prototype.addX=function(t){return this.x+=t.x,this},r.prototype.addY=function(t){return this.y+=t.y,this},r.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},r.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},r.prototype.addScalarX=function(t){return this.x+=t,this},r.prototype.addScalarY=function(t){return this.y+=t,this},r.prototype.subtractX=function(t){return this.x-=t.x,this},r.prototype.subtractY=function(t){return this.y-=t.y,this},r.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},r.prototype.subtractScalar=function(t){return this.x-=t,this.y-=t,this},r.prototype.subtractScalarX=function(t){return this.x-=t,this},r.prototype.subtractScalarY=function(t){return this.y-=t,this},r.prototype.divideX=function(t){return this.x/=t.x,this},r.prototype.divideY=function(t){return this.y/=t.y,this},r.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},r.prototype.divideScalar=function(t){return 0!==t?(this.x/=t,this.y/=t):(this.x=0,this.y=0),this},r.prototype.divideScalarX=function(t){return 0!==t?this.x/=t:this.x=0,this},r.prototype.divideScalarY=function(t){return 0!==t?this.y/=t:this.y=0,this},r.prototype.invertX=function(){return this.x*=-1,this},r.prototype.invertY=function(){return this.y*=-1,this},r.prototype.invert=function(){return this.invertX(),this.invertY(),this},r.prototype.multiplyX=function(t){return this.x*=t.x,this},r.prototype.multiplyY=function(t){return this.y*=t.y,this},r.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},r.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},r.prototype.multiplyScalarX=function(t){return this.x*=t,this},r.prototype.multiplyScalarY=function(t){return this.y*=t,this},r.prototype.normalize=function(){var t=this.length();return 0===t?(this.x=1,this.y=0):this.divide(r(t,t)),this},r.prototype.norm=r.prototype.normalize,r.prototype.limit=function(t,e){return Math.abs(this.x)>t&&(this.x*=e),Math.abs(this.y)>t&&(this.y*=e),this},r.prototype.randomize=function(t,e){return this.randomizeX(t,e),this.randomizeY(t,e),this},r.prototype.randomizeX=function(t,e){var r=Math.min(t.x,e.x),o=Math.max(t.x,e.x);return this.x=n(r,o),this},r.prototype.randomizeY=function(t,e){var r=Math.min(t.y,e.y),o=Math.max(t.y,e.y);return this.y=n(r,o),this},r.prototype.randomizeAny=function(t,e){return Math.round(Math.random())?this.randomizeX(t,e):this.randomizeY(t,e),this},r.prototype.unfloat=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},r.prototype.toFixed=function(t){return"undefined"===typeof t&&(t=8),this.x=this.x.toFixed(t),this.y=this.y.toFixed(t),this},r.prototype.mixX=function(t,e){return"undefined"===typeof e&&(e=.5),this.x=(1-e)*this.x+e*t.x,this},r.prototype.mixY=function(t,e){return"undefined"===typeof e&&(e=.5),this.y=(1-e)*this.y+e*t.y,this},r.prototype.mix=function(t,e){return this.mixX(t,e),this.mixY(t,e),this},r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyX=function(t){return this.x=t.x,this},r.prototype.copyY=function(t){return this.y=t.y,this},r.prototype.copy=function(t){return this.copyX(t),this.copyY(t),this},r.prototype.zero=function(){return this.x=this.y=0,this},r.prototype.dot=function(t){return this.x*t.x+this.y*t.y},r.prototype.cross=function(t){return this.x*t.y-this.y*t.x},r.prototype.projectOnto=function(t){var e=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y);return this.x=e*t.x,this.y=e*t.y,this},r.prototype.horizontalAngle=function(){return Math.atan2(this.y,this.x)},r.prototype.horizontalAngleDeg=function(){return i(this.horizontalAngle())},r.prototype.verticalAngle=function(){return Math.atan2(this.x,this.y)},r.prototype.verticalAngleDeg=function(){return i(this.verticalAngle())},r.prototype.angle=r.prototype.horizontalAngle,r.prototype.angleDeg=r.prototype.horizontalAngleDeg,r.prototype.direction=r.prototype.horizontalAngle,r.prototype.rotate=function(t){var e=this.x*Math.cos(t)-this.y*Math.sin(t),r=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=e,this.y=r,this},r.prototype.rotateDeg=function(t){return t=s(t),this.rotate(t)},r.prototype.rotateTo=function(t){return this.rotate(t-this.angle())},r.prototype.rotateToDeg=function(t){return t=s(t),this.rotateTo(t)},r.prototype.rotateBy=function(t){var e=this.angle()+t;return this.rotate(e)},r.prototype.rotateByDeg=function(t){return t=s(t),this.rotateBy(t)},r.prototype.distanceX=function(t){return this.x-t.x},r.prototype.absDistanceX=function(t){return Math.abs(this.distanceX(t))},r.prototype.distanceY=function(t){return this.y-t.y},r.prototype.absDistanceY=function(t){return Math.abs(this.distanceY(t))},r.prototype.distance=function(t){return Math.sqrt(this.distanceSq(t))},r.prototype.distanceSq=function(t){var e=this.distanceX(t),r=this.distanceY(t);return e*e+r*r},r.prototype.length=function(){return Math.sqrt(this.lengthSq())},r.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},r.prototype.magnitude=r.prototype.length,r.prototype.isZero=function(){return 0===this.x&&0===this.y},r.prototype.isEqualTo=function(t){return this.x===t.x&&this.y===t.y},r.prototype.toString=function(){return"x:"+this.x+", y:"+this.y},r.prototype.toArray=function(){return[this.x,this.y]},r.prototype.toObject=function(){return{x:this.x,y:this.y}};var o=180/Math.PI;function n(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function i(t){return t*o}function s(t){return t/o}},"24f8":function(t,e,r){var o=r("60eb");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("cf0b9396",o,!0,{sourceMap:!1,shadowMode:!1})},"2eaf":function(t,e,r){"use strict";var o=r("fd8a"),n=r.n(o);n.a},"499e":function(t,e,r){"use strict";function o(t,e){for(var r=[],o={},n=0;n<e.length;n++){var i=e[n],s=i[0],a=i[1],c=i[2],l=i[3],h={id:t+":"+n,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(h):r.push(o[s]={id:s,parts:[h]})}return r}r.r(e),r.d(e,"default",(function(){return d}));var n="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,h=function(){},u=null,p="data-vue-ssr-id",f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,r,n){l=r,u=n||{};var s=o(t,e);return v(s),function(e){for(var r=[],n=0;n<s.length;n++){var a=s[n],c=i[a.id];c.refs--,r.push(c)}e?(s=o(t,e),v(s)):s=[];for(n=0;n<r.length;n++){c=r[n];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(y(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{var s=[];for(n=0;n<r.parts.length;n++)s.push(y(r.parts[n]));i[r.id]={id:r.id,refs:1,parts:s}}}}function b(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function y(t){var e,r,o=document.querySelector("style["+p+'~="'+t.id+'"]');if(o){if(l)return h;o.parentNode.removeChild(o)}if(f){var n=c++;o=a||(a=b()),e=x.bind(null,o,n,!1),r=x.bind(null,o,n,!0)}else o=b(),e=m.bind(null,o),r=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else r()}}var g=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function x(t,e,r,o){var n=r?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var i=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function m(t,e){var r=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),u.ssrId&&t.setAttribute(p,e.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},"4bad":function(t,e,r){"use strict";function o(t,e){var r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"===typeof btoa){var i=n(o),s=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")}));return[r].concat(s).concat([i]).join("\n")}return[r].join("\n")}function n(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(r," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=o(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"===typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="(".concat(a[2],") and (").concat(r,")")),e.push(a))}},e}},"506b":function(t,e,r){var o=r("e6ea");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("59c24d95",o,!0,{sourceMap:!1,shadowMode:!1})},"60eb":function(t,e,r){e=t.exports=r("4bad")(!1),e.push([t.i,".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}body{margin:0}.radial-menu-main{visibility:hidden;position:absolute}.wrapper{perspective:20cm;transform-origin:center center;width:inherit;height:inherit;overflow:visible}.svg-main{overflow:visible;transition-duration:.4s;transition-property:transform;position:absolute;filter:blur(.4px)}.fade-enter-active,.fade-leave-active{transition:all .1s ease-in}.fade-enter,.fade-leave-to{opacity:.1;transform:scale(.1)}",""])},"63e6":function(t,e,r){e=t.exports=r("4bad")(!1),e.push([t.i,".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}.active-menu .arc-svg{stroke:var(--act--btn-stroke-color)}.arc-svg{fill:var(--btn-color);stroke:var(--btn-stroke-color);stroke-width:1px;transition-duration:0s,.3s;transition-property:stroke,fill}.arc-svg,.icon{overflow:visible}.icon{stroke-width:0px;fill:var(--icon-color);stroke:var(--icon-color)}.circle,.icon{pointer-events:none}.circle{stroke-width:1px;fill:var(--icon-circle-color);stroke:var(--icon-circle-stroke-color)}.button-group{visibility:visible}.button:hover>.link:active .arc-svg{transition-duration:0s,0s;transition-property:stroke,fill;fill:var(--sel--btn-stroke-color);stroke:var(--sel--btn-stroke-color)}.button:hover>.link:active .icon{fill:#32cd32}.button:hover:hover+g .arc-svg{stroke-width:3px;fill:var(--act--btn-color);stroke:var(--act--btn-stroke-color)}.button:hover:hover+g .icon{fill:var(--act--icon-color);stroke:var(--act--icon-color)}.button:hover .arc-svg{stroke-width:6px;fill:var(--sel--btn-color);stroke:var(--sel--btn-stroke-color)}.button:hover .icon{fill:var(--sel--icon-color);stroke:var(--sel--icon-color)}.button:hover .circle{stroke-width:2px;fill:var(--sel--icon-circle-color);stroke:var(--sel--icon-circle-stroke-color)}",""])},9416:function(t,e,r){"use strict";var o=r("24f8"),n=r.n(o);n.a},df0b:function(t,e,r){"use strict";var o=r("506b"),n=r.n(o);n.a},e6ea:function(t,e,r){e=t.exports=r("4bad")(!1),e.push([t.i,".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color);--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}.text-wraper{position:absolute;visibility:hidden;width:100%;height:100%}.text{visibility:visible;color:var(--text-color);font-weight:700;font-size:1.2em;height:inherit}.text,.text div{display:flex;align-items:center;justify-content:center}.text div{text-align:center;margin:0;border-radius:50%;border:6px solid var(--text-bg-stroke-color);box-shadow:0 0 3em var(--text-bg-stroke-color);background-color:var(--text-bg-color)}.text div p{user-select:none;margin:0}.textframe-leave-active{transition:all .2s ease-in}.textframe-leave-to{filter:url(#glitch);opacity:0}",""])},f6fd:function(t,e){(function(t){var e="currentScript",r=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(o){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(o.stack)||[!1])[1];for(t in r)if(r[t].src==e||"interactive"==r[t].readyState)return r[t];return null}}})})(document)},fb15:function(t,e,r){"use strict";var o;(r.r(e),"undefined"!==typeof window)&&(r("f6fd"),(o=window.document.currentScript)&&(o=o.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=o[1]));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"radial-menu-main",style:t.mainStyle()},[r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"wrapper"},[r("text-component",{attrs:{titleText:t.text,size:t.textFiledSize}}),r("svg",{staticClass:"svg-main",style:t.transformStyle(),attrs:{viewBox:t.boxToSvgPath(t.box),weight:t.box.w,height:t.box.h}},[r("button-group",{attrs:{buttons:t.menushape,box:t.box},on:{setText:t.setText,rotate:t.rotate}})],1)],1)])],1)},i=[],s=r("1266"),a=r.n(s);class c{constructor(t){this.title=t.title,this.icon=t.icon,this.path=t.path,this.action=t.action,this.aperture=t.aperture,this.height=t.height,this.outrad=t.radius,this.inrad=t.inrad,this.angle=t.angle,this.ps=[];let e=this;this.__proto__.util={up:"0 0 1",down:"1 0 0"},this.__proto__._proxy={get(t,r){return r.split("_").reduce((r,o)=>{return r+" "+(e[o]?e[o]:e.util[o]?e.util[o]:t[o].x+","+t[o].y)})}},this._build()}_build(){let t=new a.a(0,-this.inrad),e=new a.a(0,-this.outrad);this._calcIconParams(t,e),this._calcPointsParams(t,e),this._addGapsToArcs(),this.path_n=this._pointsToArcPathStr(),this.path_r=this._pointsToRoundedArcPathStr(this._roundedEdgesToArcShape())}_calcIconParams(t,e){this.iconpos=e.clone().mix(t,.5),this.iconpos.rotateDeg(this.angle),this.iconsize=this._calcIconSize()}_calcPointsParams(t,e){const r=this.aperture/2;this.ps[0]=e.clone().rotateDeg(-r).rotateDeg(this.angle),this.ps[3]=t.clone().rotateDeg(-r).rotateDeg(this.angle),this.ps[1]=e.clone().rotateDeg(r).rotateDeg(this.angle),this.ps[2]=t.clone().rotateDeg(r).rotateDeg(this.angle)}_addGapsToArcs(){const t=2,e=new a.a(t,t),r=this.ps[0].clone().normalize().multiply(e),o=this.ps[1].clone().normalize().multiply(e);let n;n=this.ps[0].clone().rotate(Math.PI/2).normalize().multiply(e),this.ps[0].add(n).subtract(r),this.ps[3].add(n).add(r),n=this.ps[1].clone().rotate(Math.PI/2).normalize().multiply(e),this.ps[1].subtract(n).subtract(o),this.ps[2].subtract(n).add(o)}_roundedEdgesToArcShape(){let t=[],e=this.ps,r=e[0].clone(),o=e[1].clone(),n=e[3].clone(),i=e[2].clone();const s=.05*this.aperture;let a=.8,c=.8,l=.2,h=.8,u=n.clone().mix(r,.15).subtract(n),p=i.clone().mix(o,.15).subtract(i);return t[15]=e[3].clone().add(u),t[8]=e[2].clone().add(p),t[14]=e[3].clone().mix(t[15],l),t[9]=e[2].clone().mix(t[8],l),t[12]=n.rotateDeg(2*s),t[11]=i.rotateDeg(2*-s),t[13]=t[12].clone().mix(e[3],h),t[10]=t[11].clone().mix(e[2],h),t[0]=e[0].clone().subtract(u),t[7]=e[1].clone().subtract(p),t[1]=t[0].clone().mix(e[0],a),t[6]=t[7].clone().mix(e[1],a),t[3]=r.rotateDeg(s),t[4]=o.rotateDeg(-s),t[2]=t[3].clone().mix(e[0],c),t[5]=t[4].clone().mix(e[1],c),t}_calcIconSize(){let t=this.iconpos.clone().rotateDeg(this.aperture).subtract(this.iconpos).length(),e=this.height;return.85*(t>e?e:t)}_pointsToRoundedArcPathStr(t){let e=new Proxy(t,this._proxy);return e.M_0+e.C_1_2_3+e.A_outrad_outrad_up_4+e.C_5_6_7+e.L_8+e.C_9_10_11+e.A_inrad_inrad_down_12+e.C_13_14_15+"z"}_pointsToArcPathStr(){let t=new Proxy(this.ps,this._proxy);return t.M_0+t.A_outrad_outrad_up_1+t.L_2+t.A_inrad_inrad_down_3+"z"}pointsToArcPathStr(t=this.ps,e=this.inrad,r=this.outrad){return`\n\t\t\tM ${t[0].x} ${t[0].y} \n\t\t\tA ${r} ${r} 0 0 1 ${t[1].x} ${t[1].y} \n\t\t\tL ${t[2].x} ${t[2].y} \n\t\t\tA ${e} ${e} 1 0 0  ${t[3].x} ${t[3].y} \n\t\t\tz \n\t\t`}pointsToRoundedArcPathStr(t,e=this.inrad,r=this.outrad){return` \n\t\t\tM ${t[0].x},  ${t[0].y}\n\t\t\tC ${t[1].x},  ${t[1].y}  ${t[2].x},  ${t[2].y} ${t[3].x},  ${t[3].y} \n\t\t\tA ${r} ${r} 0 0 1 ${t[4].x},  ${t[4].y}\n\t\t\tC ${t[5].x},  ${t[5].y}  ${t[6].x},  ${t[6].y} ${t[7].x},  ${t[7].y}\n\t\t\tL ${t[8].x},  ${t[8].y}\n\t\t\tC ${t[9].x},  ${t[9].y}  ${t[10].x},  ${t[10].y} ${t[11].x},  ${t[11].y}\n\t\t\tA ${e} ${e} 1 0 0 ${t[12].x},  ${t[12].y}\n\t\t\tC ${t[13].x},  ${t[13].y}  ${t[14].x},  ${t[14].y} ${t[15].x},  ${t[15].y}\n\t\t\tz \n\t\t`}}class l{constructor(t){this._conf={},this._conf.aperture=t.aperture,this._conf.angle=t.angle,this._conf.radius=t.radius,this._conf.btns=t.btns,this._res=[],this._defAperture=5}build(){if(!this._validConfig())return console.log("VALIDATION ERROR"),[];for(let t in this._conf.btns)this._res[t]=new c(this._conf.btns[t]),this._conf.btns[t].btns&&(this._res[t].children=new l(this._conf.btns[t]).build()),this._res[t].id=t;return this._res}_validConfig(){return!(this._conf.btns.length<2)&&(this._copyBtns(),this._specifyAperture2()&&this._specifyAngles()&&this._specifyRadius())}_specifyRadius(){let t=this._conf,e=t.btns;for(let r in e)null==e[r].height&&(e[r].height=t.height);for(let r in e)e[r].inrad=t.radius||30,e[r].radius=e[r].inrad+e[r].height;return!0}_specifyAperture(){let t=this._conf,e=t.btns,r=this._defAperture;t.aperture=t.aperture>360?360:t.aperture;let o=0,n=this._btnCount;for(let c=0;c<this._btnCount;c++)e[c].aperture&&e[c].aperture>r?(o+=e[c].aperture,n--):e[c].aperture=r;let i=o+r*n,s=t.aperture<i?(t.aperture-r*n)/o:1,a=t.aperture>=i?(t.aperture-o)/(r*n):1;for(let c=0;c<this._btnCount;c++)e[c].aperture=e[c].aperture===r?r*a:e[c].aperture*s;return!0}_specifyAperture2(){this._conf.aperture=this._conf.aperture>360?360:this._conf.aperture;let t,e=this._conf.btns,r=this._conf.aperture,o=36,n=100/360*o;for(let s in e)e[s].aperture=e[s].aperture||n,e[s].aperture>50&&(e[s].aperture=50);t=0;for(let s in e)if(t+=e[s].aperture,t>100){t-=e[s].aperture,e.splice(s,e.length);break}let i=r/t;for(let s in e)e[s].aperture*=i,e[s].aperture>180&&(e[s].aperture=180);return!0}_specifyAngles(){let t=this._conf,e=t.btns||[],r=t.angle||0;r-=t.aperture/2;for(let o in e)r+=e[o].aperture/2,e[o].angle=r,r+=e[o].aperture/2;return!0}_copyBtns(){let t=[],e=this._conf.btns;for(let r in e)t[r]={aperture:e[r].aperture,height:e[r].height,action:e[r].action,path:e[r].path,icon:e[r].icon,title:e[r].title},e[r].btns&&(t[r].btns=e[r].btns);this._conf.btns=t}}var h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("g",{staticClass:"main"},t._l(t.shape(),(function(e,o){return r("g",{key:o,class:"button-group "+t.strokeClass},[r("g",{staticClass:"button",on:{mouseover:function(r){return t.buttonOverHandler(r,e)},mouseout:function(r){return t.emitDefault(r,e)},contextmenu:function(r){return t.emitDefault(r,e)}}},[r("a",{staticClass:"link",attrs:{href:""+(e.path||"")},on:{click:function(r){return t.redirect(r,e)},contextmenu:function(r){return r.preventDefault(),t.contextMenu(r,e)}}},[r("svg",{staticClass:"arc-svg"},[r("path",{staticClass:"arc-path",attrs:{d:e.path_r}})]),r("circle",{staticClass:"circle",attrs:{cx:""+e.iconpos.x,cy:""+e.iconpos.y,r:""+e.iconsize/2}}),r("svg",{staticClass:"icon",attrs:{viewBox:t.iconViewBox(e),x:""+e.iconpos.x,y:""+e.iconpos.y}},[r("path",{attrs:{d:e.icon.d}})])])]),r("button-group",{attrs:{buttons:e.children,box:t.box},on:{setText:t.emitText,rotate:function(e){return t.transferRotation(e)}}})],1)})),0)},u=[],p={name:"button-group",props:{buttons:Array,box:Object},data(){return{strokeClass:""}},methods:{redirect(t,e){!e.action||"function"!==typeof e.action||(t.stopPropagation(),e.action())?e.path?console.log("redirect",e.path):(t.preventDefault(),t.stopPropagation()):t.preventDefault()},contextMenu(t,e){t.stopPropagation()},shape(){return this.buttons},iconViewBox(t){return`\n                ${t.icon.size.w/2} \n                ${t.icon.size.h/2} \n                ${this.box.w/t.iconsize*t.icon.size.w*1.6} \n                ${this.box.h/t.iconsize*t.icon.size.h*1.6}\n            `},buttonOverHandler(t,e){this.emitRotation(t,e),this.emitText(e.title),this.strokeClass="active-menu"},emitText(t){this.$emit("setText",t)},emitRotation(t,e){this.$emit("rotate",e.iconpos.clone().normalize().multiply(new a.a(12,12)))},emitDefault(t,e){this.$emit("rotate"),this.$emit("setText"),this.strokeClass=""},transferRotation(t){this.$emit("rotate",t)}},computed:{},mounted:function(){}},f=p;r("2eaf");function d(t,e,r,o,n,i,s,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var h=l.render;l.render=function(t,e){return c.call(e),h(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}var v=d(f,h,u,!1,null,null,null),b=v.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-wraper"},[r("defs",[r("filter",{attrs:{id:"glitch"}},[r("feTurbulence",{attrs:{type:"fractalNoise",baseFrequency:"0 .17",numOctaves:"1",result:"warp"}}),r("feDisplacementMap",{attrs:{xChannelSelector:"R",yChannelSelector:"G",scale:"20",in:"SourceGraphic",in2:"warp"}})],1)]),r("transition",{attrs:{name:"textframe"}},[t.isVisible?r("div",{staticClass:"text"},[r("div",{style:t.textWrapperStyle()},[r("p",[t._v(t._s(t.titleText||""))])])]):t._e()])],1)},g=[],x={name:"radial-menu-text",props:{titleText:String,size:Number},data(){return{titleVisible:!1}},methods:{lag(){this.titleVisible=!1,setTimeout(()=>{this.titleVisible=!0,setTimeout(()=>{this.lag()},500*Math.floor(10*Math.random()))},150)},textWrapperStyle(){return`\n                width: ${this.size}px;\n                height: ${this.size}px;\n            `}},computed:{isVisible(){return this.titleVisible&&this.titleText}},mounted:function(){this.lag()}},m=x,z=(r("df0b"),d(m,y,g,!1,null,null,null)),M=z.exports,_={name:"radial-menu",components:{"button-group":b,"text-component":M},props:{conf:Object,pos:Object,visible:Boolean},data(){let t=this.shape(),e=this.mainViewBox(t);return{box:e,menushape:t,shiftVector:new a.a(0,0),text:null}},methods:{setText(t){this.text=t},rotate(t){this.shiftVector=t||new a.a(0,0)},shape(){return console.log("BUILD RADIAL-MENU"),new l(this.conf).build()},mainStyle(){return null==this.pos&&(this.pos={x:0,y:0}),`\n                transform: translate(${this.pos.x+this.box.x}px, ${this.pos.y+this.box.y}px);\n                width: ${this.box.w}px; \n                height: ${this.box.h}px;\n            `},transformStyle(){return this.shiftVector?` transform: ${this.rotateStyle(this.shiftVector)} ${this.translateStyle(this.shiftVector)}; `:""},rotateStyle(t){return t?(0!=t.x?` rotateX(${t.y}deg) `:"")+(0!=t.y?` rotateY(${-t.x}deg) `:""):""},translateStyle(t){return t?` translate(${-t.x}px, ${-t.y}px); `:""},boxToSvgPath(t){return`${t.x} ${t.y} ${t.w} ${t.h}`},mainViewBox(t){let e={};return e.w=e.h=2*this._maxRadius(t),e.x=-.5*e.w,e.y=-.5*e.h,e},_maxRadius(t){let e,r=0;for(let o of t)r=null!=o.children?r>(e=this._maxRadius(o.children))?r:e:r<o.outrad?o.outrad:r;return r}},computed:{textFiledSize(){return this.menushape[0]?1.7*this.menushape[0].inrad:0}},watch:{},mounted:function(){}},w=_,k=(r("9416"),d(w,n,i,!1,null,null,null)),$=k.exports;e["default"]=$},fd8a:function(t,e,r){var o=r("63e6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("7ed29edf",o,!0,{sourceMap:!1,shadowMode:!1})}})["default"]},5056:function(t){t.exports=JSON.parse('{"zip":{"d":"M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.121 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841v0 0zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0 0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z M8 2h4v2h-4v-2z M12 4h4v2h-4v-2z M8 6h4v2h-4v-2z M12 8h4v2h-4v-2z M8 10h4v2h-4v-2z M12 12h4v2h-4v-2z M8 14h4v2h-4v-2z M12 16h4v2h-4v-2z M8 26.5c0 0.825 0.675 1.5 1.5 1.5h5c0.825 0 1.5-0.675 1.5-1.5v-5c0-0.825-0.675-1.5-1.5-1.5h-2.5v-2h-4v8.5zM14 24v2h-4v-2h4z","size":{"w":32,"h":32}},"data":{"d":"M16 0c-8.837 0-16 2.239-16 5v4c0 2.761 7.163 5 16 5s16-2.239 16-5v-4c0-2.761-7.163-5-16-5z M16 17c-8.837 0-16-2.239-16-5v6c0 2.761 7.163 5 16 5s16-2.239 16-5v-6c0 2.761-7.163 5-16 5z M16 26c-8.837 0-16-2.239-16-5v6c0 2.761 7.163 5 16 5s16-2.239 16-5v-6c0 2.761-7.163 5-16 5z","size":{"w":32,"h":32}},"pen":{"d":"M12 20l4-2 14-14-2-2-14 14-2 4zM9.041 27.097c-0.989-2.085-2.052-3.149-4.137-4.137l3.097-8.525 4-2.435 12-12h-6l-12 12-6 20 20-6 12-12v-6l-12 12-2.435 4z","size":{"w":32,"h":32}},"qr":{"d":"M10 2h-8v8h8v-8zM12 0v0 12h-12v-12h12zM4 4h4v4h-4zM30 2h-8v8h8v-8zM32 0v0 12h-12v-12h12zM24 4h4v4h-4zM10 22h-8v8h8v-8zM12 20v0 12h-12v-12h12zM4 24h4v4h-4zM14 0h2v2h-2zM16 2h2v2h-2zM14 4h2v2h-2zM16 6h2v2h-2zM14 8h2v2h-2zM16 10h2v2h-2zM14 12h2v2h-2zM14 16h2v2h-2zM16 18h2v2h-2zM14 20h2v2h-2zM16 22h2v2h-2zM14 24h2v2h-2zM16 26h2v2h-2zM14 28h2v2h-2zM16 30h2v2h-2zM30 16h2v2h-2zM2 16h2v2h-2zM4 14h2v2h-2zM0 14h2v2h-2zM8 14h2v2h-2zM10 16h2v2h-2zM12 14h2v2h-2zM18 16h2v2h-2zM20 14h2v2h-2zM22 16h2v2h-2zM24 14h2v2h-2zM26 16h2v2h-2zM28 14h2v2h-2zM30 20h2v2h-2zM18 20h2v2h-2zM20 18h2v2h-2zM22 20h2v2h-2zM26 20h2v2h-2zM28 18h2v2h-2zM30 24h2v2h-2zM18 24h2v2h-2zM20 22h2v2h-2zM24 22h2v2h-2zM26 24h2v2h-2zM28 22h2v2h-2zM30 28h2v2h-2zM20 26h2v2h-2zM22 28h2v2h-2zM24 26h2v2h-2zM26 28h2v2h-2zM20 30h2v2h-2zM24 30h2v2h-2zM28 30h2v2h-2z","size":{"w":32,"h":32}},"bones":{"d":"M27 6h-16c-2.75 0-5 2.25-5 5v16c0 2.75 2.25 5 5 5h16c2.75 0 5-2.25 5-5v-16c0-2.75-2.25-5-5-5zM13 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM13 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM19 22c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zM25.899 4c-0.467-2.275-2.491-4-4.899-4h-16c-2.75 0-5 2.25-5 5v16c0 2.408 1.725 4.432 4 4.899v-19.899c0-1.1 0.9-2 2-2h19.899z","size":{"w":32,"h":32}},"headphone":{"d":"M9 18h-2v14h2c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1z M23 18c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h2v-14h-2z M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16c0 1.919 0.338 3.759 0.958 5.464-0.609 1.038-0.958 2.246-0.958 3.536 0 3.526 2.608 6.443 6 6.929v-13.857c-0.997 0.143-1.927 0.495-2.742 1.012-0.168-0.835-0.258-1.699-0.258-2.584 0-7.18 5.82-13 13-13s13 5.82 13 13c0 0.885-0.088 1.749-0.257 2.584-0.816-0.517-1.745-0.87-2.743-1.013v13.858c3.392-0.485 6-3.402 6-6.929 0-1.29-0.349-2.498-0.958-3.536 0.62-1.705 0.958-3.545 0.958-5.465z","size":{"w":32,"h":32}},"sword":{"d":"M30.828 1.172c-1.562-1.562-4.095-1.562-5.657 0l-5.379 5.379-3.793-3.793-4.243 4.243 3.326 3.326-14.754 14.754c-0.252 0.252-0.358 0.592-0.322 0.921h-0.008v5c0 0.552 0.448 1 1 1h5c0 0 0.083 0 0.125 0 0.288 0 0.576-0.11 0.795-0.329l14.754-14.754 3.326 3.326 4.243-4.243-3.793-3.793 5.379-5.379c1.562-1.562 1.562-4.095 0-5.657zM5.409 30h-3.409v-3.409l14.674-14.674 3.409 3.409-14.674 14.674z","size":{"w":32,"h":32}},"fire":{"d":"M10.031 32c-2.133-4.438-0.997-6.981 0.642-9.376 1.795-2.624 2.258-5.221 2.258-5.221s1.411 1.834 0.847 4.703c2.493-2.775 2.963-7.196 2.587-8.889 5.635 3.938 8.043 12.464 4.798 18.783 17.262-9.767 4.294-24.38 2.036-26.027 0.753 1.646 0.895 4.433-0.625 5.785-2.573-9.759-8.937-11.759-8.937-11.759 0.753 5.033-2.728 10.536-6.084 14.648-0.118-2.007-0.243-3.392-1.298-5.312-0.237 3.646-3.023 6.617-3.777 10.27-1.022 4.946 0.765 8.568 7.555 12.394z","size":{"w":32,"h":32}},"hex":{"d":"M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z","size":{"w":28,"h":49}}}')},"56d7":function(t,e,r){"use strict";r.r(e);var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"},on:{click:function(e){t.m1.visible=!1,t.m2.visible=!1},contextmenu:function(e){t.m1.visible=!1,t.m2.visible=!1}}},[r("div",{staticClass:"purplesquare AAAATEST",on:{contextmenu:function(e){return e.preventDefault(),t.showMenu(e,t.m1)}}},[t.m1.visible?t._e():r("h3",[t._v("Right click here...")])]),r("div",{staticClass:"greensquare",on:{contextmenu:function(e){return e.preventDefault(),t.showMenu(e,t.m2)}}},[t.m2.visible?t._e():r("h3",[t._v("...or here...")])]),r("radial-menu",{attrs:{conf:t.m1.conf,pos:t.m1.pos,visible:t.m1.visible}}),r("span",{staticClass:"pink"},[r("radial-menu",{attrs:{conf:t.m2.conf,pos:t.m2.pos,visible:t.m2.visible}})],1)],1)},i=[],s=(r("1266"),r("5056")),a=r("5118"),c={angle:180,aperture:360,radius:110,height:100,btns:[{height:75,title:"QR",icon:s.qr,path:"/Qr",btns:[{height:50,title:"Pen",icon:s.pen,path:"/Pen",action:()=>{return console.log("action"),!1}},{height:50,title:"DATA",icon:s.data,path:"/data",action:()=>{return console.log("action"),!0}},{height:50,title:"Bones",icon:s.bones},{height:50,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Pen",icon:s.pen},{height:125,title:"Sword",icon:s.sword,btns:[{aperture:20,height:50,title:"Pen",icon:s.pen},{height:50,title:"DATA",icon:s.data},{height:50,title:"QR",icon:s.qr},{height:50,title:"Bones",icon:s.bones},{height:50,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Bones",icon:s.bones,btns:[{height:50,title:"Pen",icon:s.pen},{height:50,title:"DATA",icon:s.data}]},{height:75,title:"DATA",icon:s.data,btns:[{height:50,title:"Pen",icon:s.pen,btns:[{height:50,title:"Pen",icon:s.pen},{height:50,title:"Sword",icon:s.sword}]},{height:100,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Head Phones",icon:s.headphone,btns:[{height:50,title:"Pen",icon:s.pen},{aperture:20,height:50,title:"DATA",icon:s.data,btns:[{height:50,title:"DATA",icon:s.data},{height:50,title:"QR",icon:s.qr},{height:50,title:"Bones",icon:s.bones},{aperture:20,height:50,title:"ZIP",icon:s.zip,btns:[{height:50,title:"Pen",icon:s.pen},{height:50,title:"Sword",icon:s.sword}]}]}]},{height:50,title:"ZIP",icon:s.zip}]},l={angle:180,aperture:360,radius:110,height:100,btns:[{height:75,title:"QR",icon:s.qr,path:"/Qr",btns:[{height:50,title:"Pen",icon:s.pen,path:"/Pen",action:()=>{return console.log("action"),!1}},{height:50,title:"DATA",icon:s.data},{height:50,title:"Bones",icon:s.bones},{height:50,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Pen",icon:s.pen},{height:125,title:"Sword",icon:s.sword,btns:[{aperture:20,height:50,title:"Pen",icon:s.pen},{height:50,title:"DATA",icon:s.data},{height:50,title:"QR",icon:s.qr},{height:50,title:"Bones",icon:s.bones},{height:50,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Bones",icon:s.bones,btns:[{height:50,title:"Pen",icon:s.pen},{height:50,title:"Bones",icon:s.bones},{height:50,title:"DATA",icon:s.data},{aperture:20,height:50,title:"ZIP",icon:s.zip}]},{height:75,title:"DATA",icon:s.data,btns:[{height:50,title:"Pen",icon:s.pen,btns:[{height:50,title:"Pen",icon:s.pen},{height:50,title:"Bones",icon:s.bones},{aperture:20,height:50,title:"ZIP",icon:s.zip},{height:50,title:"Sword",icon:s.sword}]},{height:100,title:"Sword",icon:s.sword}]},{aperture:20,height:75,title:"Head Phones",icon:s.headphone,btns:[{height:50,title:"DATA",icon:s.data},{height:50,title:"QR",icon:s.qr},{height:50,title:"Bones",icon:s.bones},{aperture:20,height:50,title:"ZIP",icon:s.zip}]}]},h={name:"app",data:function(){return{m1:{conf:c,pos:{x:0,y:0},visible:!1},m2:{conf:l,pos:{x:0,y:0},visible:!1}}},props:{num:Number},methods:{showMenu(t,e){return e.visible=!1,Object(a["setTimeout"])(()=>{e.pos={x:t.pageX,y:t.pageY},e.visible=!0},200),!1}},mounted:function(){}},u=h,p=(r("f8cc"),r("2877")),f=Object(p["a"])(u,n,i,!1,null,null,null),d=f.exports,v=r("0c75"),b=r.n(v);o["a"].component("radial-menu",b.a),new o["a"]({el:"#app",render:t=>t(d)})},"675f":function(t,e,r){e=t.exports=r("4bad")(!1),e.push([t.i,".radial-menu-main{--btn-color:#000;--btn-stroke-color:var(--btn-color)}.pink .radial-menu-main,.radial-menu-main{--sel--btn-color:rgba(40,255,244,0.8);--sel--btn-stroke-color:#28fff4;--act--btn-color:var(--text-bg-color);--act--btn-stroke-color:var(--btn-color);--text-color:#93fffa;--text-bg-color:rgba(40,255,244,0.5);--text-bg-stroke-color:var(--sel--btn-stroke-color);--icon-color:var(--sel--btn-stroke-color);--sel--icon-color:var(--sel--btn-stroke-color);--act--icon-color:var(--sel--btn-stroke-color);--icon-circle-color:var(--btn-color);--icon-circle-stroke-color:var(--btn-color);--sel--icon-circle-color:var(--btn-color);--sel--icon-circle-stroke-color:var(--sel--btn-stroke-color)}.pink .radial-menu-main{--btn-color:#ff7b7b;--btn-stroke-color:var(--btn-color)}.greensquare{left:850px}.greensquare,.purplesquare{color:#fff;overflow:hidden;position:absolute;top:200px;width:200px;height:200px;background-color:purple;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z' fill='%23ffc059' fill-opacity='.14' fill-rule='nonzero'/%3E%3C/svg%3E\")}.purplesquare{left:200px}#app{width:2000px;height:2000px;background-color:#ce9200;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z' fill='%23ffc059' fill-opacity='.14' fill-rule='nonzero'/%3E%3C/svg%3E\")}",""])},7772:function(t,e,r){var o=r("675f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("5baf6c76",o,!0,{sourceMap:!1,shadowMode:!1})},f8cc:function(t,e,r){"use strict";var o=r("7772"),n=r.n(o);n.a}});
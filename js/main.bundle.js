!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){var n,o,i;/*! nouislider - 12.1.0 - 10/25/2018 */o=[],void 0===(i="function"==typeof(n=function(){"use strict";var t="12.1.0";function e(t){return null!=t}function r(t){t.preventDefault()}function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function o(t,e,r){r>0&&(l(t,e),setTimeout(function(){c(t,e)},r))}function i(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function s(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function l(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function c(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function u(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||""),n=e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,o=e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop;return{x:n,y:o}}function d(t,e){return 100/(e-t)}function f(t,e){return 100*e/(t[1]-t[0])}function p(t,e){for(var r=1;t>=e[r];)r+=1;return r}function h(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=p(r,t),o=t[n-1],i=t[n],a=e[n-1],s=e[n];return a+function(t,e){return f(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}([o,i],r)/d(a,s)}function m(t,e,r,n){if(100===n)return n;var o=p(n,t),i=t[o-1],a=t[o];return r?n-i>(a-i)/2?a:i:e[o-1]?t[o-1]+function(t,e){return Math.round(t/e)*e}(n-t[o-1],e[o-1]):n}function g(e,r,o){var i;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.");if(!n(i="min"===e?0:"max"===e?100:parseFloat(e))||!n(r[0]))throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.");o.xPct.push(i),o.xVal.push(r[0]),i?o.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(o.xSteps[0]=r[1]),o.xHighestCompleteStep.push(0)}function v(t,e,r){if(!e)return!0;r.xSteps[t]=f([r.xVal[t],r.xVal[t+1]],e)/d(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],o=Math.ceil(Number(n.toFixed(3))-1),i=r.xVal[t]+r.xNumSteps[t]*o;r.xHighestCompleteStep[t]=i}function b(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var o=[];for(n in t)t.hasOwnProperty(n)&&o.push([t[n],n]);for(o.length&&"object"==typeof o[0][0]?o.sort(function(t,e){return t[0][0]-e[0][0]}):o.sort(function(t,e){return t[0]-e[0]}),n=0;n<o.length;n++)g(o[n][1],o[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)v(n,this.xNumSteps[n],this)}b.prototype.getMargin=function(e){var r=this.xNumSteps[0];if(r&&e/r%1!=0)throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&f(this.xVal,e)},b.prototype.toStepping=function(t){return t=h(this.xVal,this.xPct,t)},b.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=p(r,e),o=t[n-1],i=t[n],a=e[n-1],s=e[n];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([o,i],(r-a)*d(a,s))}(this.xVal,this.xPct,t)},b.prototype.getStep=function(t){return t=m(this.xPct,this.xSteps,this.snap,t)},b.prototype.getNearbySteps=function(t){var e=p(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},b.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(s);return Math.max.apply(null,t)},b.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var y={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function S(e){if(function(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}(e))return!0;throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function w(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'step' is not numeric.");e.singleStep=r}function x(e,r){if("object"!=typeof r||Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new b(r,e.snap,e.singleStep)}function E(e,r){if(r=a(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.");e.handles=r.length,e.start=r}function C(e,r){if(e.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}function N(e,r){if(e.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}function U(e,r){if(e.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}function j(e,r){var n,o=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(n=1;n<e.handles;n++)o.push(r);o.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==e.handles+1)throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.");o=r}e.connect=o}function k(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function P(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.");if(0!==r&&(e.margin=e.spectrum.getMargin(r),!e.margin))throw new Error("noUiSlider ("+t+"): 'margin' option is only supported on linear sliders.")}function A(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getMargin(r),!e.limit||e.handles<2)throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function M(e,r){if(!n(r)&&!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!n(r[0])&&!n(r[1]))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){if(Array.isArray(r)||(r=[r,r]),e.padding=[e.spectrum.getMargin(r[0]),e.spectrum.getMargin(r[1])],!1===e.padding[0]||!1===e.padding[1])throw new Error("noUiSlider ("+t+"): 'padding' option is only supported on linear sliders.");if(e.padding[0]<0||e.padding[1]<0)throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).");if(e.padding[0]+e.padding[1]>=100)throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function _(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function O(e,r){if("string"!=typeof r)throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.");var n=r.indexOf("tap")>=0,o=r.indexOf("drag")>=0,i=r.indexOf("fixed")>=0,a=r.indexOf("snap")>=0,s=r.indexOf("hover")>=0,l=r.indexOf("unconstrained")>=0;if(i){if(2!==e.handles)throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles");P(e,e.start[1]-e.start[0])}if(l&&(e.margin||e.limit))throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||a,drag:o,fixed:i,snap:a,hover:s,unconstrained:l}}function V(e,r){if(!1!==r)if(!0===r){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(!0)}else{if(e.tooltips=a(r),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.");e.tooltips.forEach(function(e){if("boolean"!=typeof e&&("object"!=typeof e||"function"!=typeof e.to))throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")})}}function L(t,e){t.ariaFormat=e,S(e)}function z(t,e){t.format=e,S(e)}function F(e,r){if(e.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}function H(t,e){t.documentElement=e}function T(e,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=r}function D(e,r){if("object"!=typeof r)throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.");if("string"==typeof e.cssPrefix)for(var n in e.cssClasses={},r)r.hasOwnProperty(n)&&(e.cssClasses[n]=e.cssPrefix+r[n]);else e.cssClasses=r}function $(r){var n={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:y,format:y},o={step:{r:!1,t:w},start:{r:!0,t:E},connect:{r:!0,t:j},direction:{r:!0,t:_},snap:{r:!1,t:C},animate:{r:!1,t:N},animationDuration:{r:!1,t:U},range:{r:!0,t:x},orientation:{r:!1,t:k},margin:{r:!1,t:P},limit:{r:!1,t:A},padding:{r:!1,t:M},behaviour:{r:!0,t:O},ariaFormat:{r:!1,t:L},format:{r:!1,t:z},tooltips:{r:!1,t:V},keyboardSupport:{r:!0,t:F},documentElement:{r:!1,t:H},cssPrefix:{r:!0,t:T},cssClasses:{r:!0,t:D}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(o).forEach(function(a){if(!e(r[a])&&void 0===i[a]){if(o[a].r)throw new Error("noUiSlider ("+t+"): '"+a+"' is required.");return!0}o[a].t(n,e(r[a])?r[a]:i[a])}),n.pips=r.pips;var a=document.createElement("div"),s=void 0!==a.style.msTransform,l=void 0!==a.style.transform;return n.transformRule=l?"transform":s?"msTransform":"webkitTransform",n.style=[["left","top"],["right","bottom"]][n.dir][n.ort],n}function R(e,n,s){var d,f,p,h,m,g,v,b,y=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},S=window.CSS&&CSS.supports&&CSS.supports("touch-action","none"),w=S&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),x=e,E=[],C=[],N=0,U=n.spectrum,j=[],k={},P=e.ownerDocument,A=n.documentElement||P.documentElement,M=P.body,_=-1,O=0,V=1,L=2,z="rtl"===P.dir||1===n.ort?0:100;function F(t,e){var r=P.createElement("div");return e&&l(r,e),t.appendChild(r),r}function H(t,e){var r=F(t,n.cssClasses.origin),o=F(r,n.cssClasses.handle);return o.setAttribute("data-handle",e),n.keyboardSupport&&o.setAttribute("tabindex","0"),o.setAttribute("role","slider"),o.setAttribute("aria-orientation",n.ort?"vertical":"horizontal"),0===e?l(o,n.cssClasses.handleLower):e===n.handles-1&&l(o,n.cssClasses.handleUpper),r}function T(t,e){return!!e&&F(t,n.cssClasses.connect)}function D(t,e){return!!n.tooltips[e]&&F(t.firstChild,n.cssClasses.tooltip)}function R(t,e,r){var o=P.createElement("div"),i=[];i[O]=n.cssClasses.valueNormal,i[V]=n.cssClasses.valueLarge,i[L]=n.cssClasses.valueSub;var a=[];a[O]=n.cssClasses.markerNormal,a[V]=n.cssClasses.markerLarge,a[L]=n.cssClasses.markerSub;var s=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],c=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];function u(t,e){var r=e===n.cssClasses.value,o=r?s:c,l=r?i:a;return e+" "+o[n.ort]+" "+l[t]}return l(o,n.cssClasses.pips),l(o,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(t).forEach(function(i){!function(t,i,a){if((a=e?e(i,a):a)!==_){var s=F(o,!1);s.className=u(a,n.cssClasses.marker),s.style[n.style]=t+"%",a>O&&((s=F(o,!1)).className=u(a,n.cssClasses.value),s.setAttribute("data-value",i),s.style[n.style]=t+"%",s.innerHTML=r.to(i))}}(i,t[i][0],t[i][1])}),o}function q(){var t;m&&((t=m).parentElement.removeChild(t),m=null)}function X(e){q();var r=e.mode,n=e.density||1,o=e.filter||!1,i=e.values||!1,a=e.stepped||!1,s=function(e,r,n){if("range"===e||"steps"===e)return U.xVal;if("count"===e){if(r<2)throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.");var o=r-1,i=100/o;for(r=[];o--;)r[o]=o*i;r.push(100),e="positions"}return"positions"===e?r.map(function(t){return U.fromStepping(n?U.getStep(t):t)}):"values"===e?n?r.map(function(t){return U.fromStepping(U.getStep(U.toStepping(t)))}):r:void 0}(r,i,a),l=function(t,e,r){var n,o={},i=U.xVal[0],a=U.xVal[U.xVal.length-1],s=!1,l=!1,c=0;return(n=r.slice().sort(function(t,e){return t-e}),r=n.filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==i&&(r.unshift(i),s=!0),r[r.length-1]!==a&&(r.push(a),l=!0),r.forEach(function(n,i){var a,u,d,f,p,h,m,g,v,b,y=n,S=r[i+1],w="steps"===e;if(w&&(a=U.xNumSteps[i]),a||(a=S-y),!1!==y&&void 0!==S)for(a=Math.max(a,1e-7),u=y;u<=S;u=(u+a).toFixed(7)/1){for(g=(p=(f=U.toStepping(u))-c)/t,b=p/(v=Math.round(g)),d=1;d<=v;d+=1)o[(h=c+d*b).toFixed(5)]=[U.fromStepping(h),0];m=r.indexOf(u)>-1?V:w?L:O,!i&&s&&(m=0),u===S&&l||(o[f.toFixed(5)]=[u,m]),c=f}}),o}(n,r,s),c=e.format||{to:Math.round};return m=x.appendChild(R(l,o,c))}function B(){var t=d.getBoundingClientRect(),e="offset"+["Width","Height"][n.ort];return 0===n.ort?t.width||d[e]:t.height||d[e]}function Y(t,e,r,o){var i=function(i){return!!(i=function(t,e,r){var n,o,i=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),i){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(c.length>1)return!1;n=c[0].pageX,o=c[0].pageY}else{var d=Array.prototype.find.call(t.changedTouches,l);if(!d)return!1;n=d.pageX,o=d.pageY}}return e=e||u(P),(a||s)&&(n=t.clientX+e.x,o=t.clientY+e.y),t.pageOffset=e,t.points=[n,o],t.cursor=a||s,t}(i,o.pageOffset,o.target||e))&&!(x.hasAttribute("disabled")&&!o.doNotReject)&&(a=x,s=n.cssClasses.tap,!((a.classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!o.doNotReject)&&!(t===y.start&&void 0!==i.buttons&&i.buttons>1)&&(!o.hover||!i.buttons)&&(w||i.preventDefault(),i.calcPoint=i.points[n.ort],void r(i,o)));var a,s},a=[];return t.split(" ").forEach(function(t){e.addEventListener(t,i,!!w&&{passive:!0}),a.push([t,i])}),a}function I(t){var e,r,o,a,s,l,c=t-(e=d,r=n.ort,o=e.getBoundingClientRect(),a=e.ownerDocument,s=a.documentElement,l=u(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?o.top+l.y-s.clientTop:o.left+l.x-s.clientLeft),f=100*c/B();return f=i(f),n.dir?100-f:f}function W(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&J(t,e)}function G(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return J(t,e);var r=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint),o=100*r/e.baseSize;it(r>0,o,e.locations,e.handleNumbers)}function J(t,e){e.handle&&(c(e.handle,n.cssClasses.active),N-=1),e.listeners.forEach(function(t){A.removeEventListener(t[0],t[1])}),0===N&&(c(x,n.cssClasses.drag),st(),t.cursor&&(M.style.cursor="",M.removeEventListener("selectstart",r))),e.handleNumbers.forEach(function(t){et("change",t),et("set",t),et("end",t)})}function K(t,e){var o;if(1===e.handleNumbers.length){var i=f[e.handleNumbers[0]];if(i.hasAttribute("disabled"))return!1;o=i.children[0],N+=1,l(o,n.cssClasses.active)}t.stopPropagation();var a=[],s=Y(y.move,A,G,{target:t.target,handle:o,listeners:a,startCalcPoint:t.calcPoint,baseSize:B(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:E.slice()}),c=Y(y.end,A,J,{target:t.target,handle:o,listeners:a,doNotReject:!0,handleNumbers:e.handleNumbers}),u=Y("mouseout",A,W,{target:t.target,handle:o,listeners:a,doNotReject:!0,handleNumbers:e.handleNumbers});a.push.apply(a,s.concat(c,u)),t.cursor&&(M.style.cursor=getComputedStyle(t.target).cursor,f.length>1&&l(x,n.cssClasses.drag),M.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach(function(t){et("start",t)})}function Q(t){t.stopPropagation();var e=I(t.calcPoint),r=function(t){var e=100,r=!1;return f.forEach(function(n,o){if(!n.hasAttribute("disabled")){var i=Math.abs(E[o]-t);(i<e||100===i&&100===e)&&(r=o,e=i)}}),r}(e);if(!1===r)return!1;n.events.snap||o(x,n.cssClasses.tap,n.animationDuration),lt(r,e,!0,!0),st(),et("slide",r,!0),et("update",r,!0),et("change",r,!0),et("set",r,!0),n.events.snap&&K(t,{handleNumbers:[r]})}function Z(t){var e=I(t.calcPoint),r=U.getStep(e),n=U.fromStepping(r);Object.keys(k).forEach(function(t){"hover"===t.split(".")[0]&&k[t].forEach(function(t){t.call(h,n)})})}function tt(t,e){k[t]=k[t]||[],k[t].push(e),"update"===t.split(".")[0]&&f.forEach(function(t,e){et("update",e)})}function et(t,e,r){Object.keys(k).forEach(function(o){var i=o.split(".")[0];t===i&&k[o].forEach(function(t){t.call(h,j.map(n.format.to),e,j.slice(),r||!1,E.slice())})})}function rt(t){return t+"%"}function nt(t,e,r,o,a,s){return f.length>1&&!n.events.unconstrained&&(o&&e>0&&(r=Math.max(r,t[e-1]+n.margin)),a&&e<f.length-1&&(r=Math.min(r,t[e+1]-n.margin))),f.length>1&&n.limit&&(o&&e>0&&(r=Math.min(r,t[e-1]+n.limit)),a&&e<f.length-1&&(r=Math.max(r,t[e+1]-n.limit))),n.padding&&(0===e&&(r=Math.max(r,n.padding[0])),e===f.length-1&&(r=Math.min(r,100-n.padding[1]))),!((r=i(r=U.getStep(r)))===t[e]&&!s)&&r}function ot(t,e){var r=n.ort;return(r?e:t)+", "+(r?t:e)}function it(t,e,r,n){var o=r.slice(),i=[!t,t],a=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach(function(t,r){var n=nt(o,t,o[t]+e,i[r],a[r],!1);!1===n?e=0:(e=n-o[t],o[t]=n)}):i=a=[!0];var s=!1;n.forEach(function(t,n){s=lt(t,r[t]+e,i[n],a[n])||s}),s&&n.forEach(function(t){et("update",t),et("slide",t)})}function at(t,e){return n.dir?100-t-e:t}function st(){C.forEach(function(t){var e=E[t]>50?-1:1,r=3+(f.length+e*t);f[t].style.zIndex=r})}function lt(t,e,r,o){return!1!==(e=nt(E,t,e,r,o,!1))&&(function(t,e){E[t]=e,j[t]=U.fromStepping(e);var r="translate("+ot(rt(at(e,0)-z),"0")+")";f[t].style[n.transformRule]=r,ct(t),ct(t+1)}(t,e),!0)}function ct(t){if(p[t]){var e=0,r=100;0!==t&&(e=E[t-1]),t!==p.length-1&&(r=E[t]);var o=r-e,i="translate("+ot(rt(at(e,o)),"0")+")",a="scale("+ot(o/100,"1")+")";p[t].style[n.transformRule]=i+" "+a}}function ut(t,e){var r=a(t),i=void 0===E[0];e=void 0===e||!!e,n.animate&&!i&&o(x,n.cssClasses.tap,n.animationDuration),C.forEach(function(t){lt(t,function(t,e){return null===t||!1===t||void 0===t?E[e]:("number"==typeof t&&(t=String(t)),t=n.format.from(t),!1===(t=U.toStepping(t))||isNaN(t)?E[e]:t)}(r[t],t),!0,!1)}),C.forEach(function(t){lt(t,E[t],!0,!0)}),st(),C.forEach(function(t){et("update",t),null!==r[t]&&e&&et("set",t)})}function dt(){var t=j.map(n.format.to);return 1===t.length?t[0]:t}return l(b=x,n.cssClasses.target),0===n.dir?l(b,n.cssClasses.ltr):l(b,n.cssClasses.rtl),0===n.ort?l(b,n.cssClasses.horizontal):l(b,n.cssClasses.vertical),d=F(b,n.cssClasses.base),function(t,e){var r=F(e,n.cssClasses.connects);f=[],(p=[]).push(T(r,t[0]));for(var o=0;o<n.handles;o++)f.push(H(e,o)),C[o]=o,p.push(T(r,t[o+1]))}(n.connect,d),(v=n.events).fixed||f.forEach(function(t,e){Y(y.start,t.children[0],K,{handleNumbers:[e]})}),v.tap&&Y(y.start,d,Q,{}),v.hover&&Y(y.move,d,Z,{hover:!0}),v.drag&&p.forEach(function(t,e){if(!1!==t&&0!==e&&e!==p.length-1){var r=f[e-1],o=f[e],i=[t];l(t,n.cssClasses.draggable),v.fixed&&(i.push(r.children[0]),i.push(o.children[0])),i.forEach(function(t){Y(y.start,t,K,{handles:[r,o],handleNumbers:[e-1,e]})})}}),ut(n.start),h={destroy:function(){for(var t in n.cssClasses)n.cssClasses.hasOwnProperty(t)&&c(x,n.cssClasses[t]);for(;x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return E.map(function(t,e){var r=U.getNearbySteps(t),n=j[e],o=r.thisStep.step,i=null;!1!==o&&n+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-n),i=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===t?o=null:0===t&&(i=null);var a=U.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(a))),null!==i&&!1!==i&&(i=Number(i.toFixed(a))),[i,o]})},on:tt,off:function(t){var e=t&&t.split(".")[0],r=e&&t.substring(e.length);Object.keys(k).forEach(function(t){var n=t.split(".")[0],o=t.substring(n.length);e&&e!==n||r&&r!==o||delete k[t]})},get:dt,set:ut,setHandle:function(e,r,n){var o=[];if(!((e=Number(e))>=0&&e<C.length))throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e);for(var i=0;i<C.length;i++)o[i]=null;o[e]=r,ut(o,n)},reset:function(t){ut(n.start,t)},__moveHandles:function(t,e,r){it(t,e,E,r)},options:s,updateOptions:function(t,e){var r=dt(),o=["margin","limit","padding","range","animate","snap","step","format"];o.forEach(function(e){void 0!==t[e]&&(s[e]=t[e])});var i=$(s);o.forEach(function(e){void 0!==t[e]&&(n[e]=i[e])}),U=i.spectrum,n.margin=i.margin,n.limit=i.limit,n.padding=i.padding,n.pips&&X(n.pips),E=[],ut(t.start||r,e)},target:x,removePips:q,pips:X},n.pips&&X(n.pips),n.tooltips&&(g=f.map(D),tt("update",function(t,e,r){if(g[e]){var o=t[e];!0!==n.tooltips[e]&&(o=n.tooltips[e].to(r[e])),g[e].innerHTML=o}})),tt("update",function(t,e,r,o,i){C.forEach(function(t){var e=f[t],o=nt(E,t,0,!0,!0,!0),a=nt(E,t,100,!0,!0,!0),s=i[t],l=n.ariaFormat.to(r[t]);o=U.fromStepping(o).toFixed(1),a=U.fromStepping(a).toFixed(1),s=U.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",o),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",l)})}),h}return{__spectrum:b,version:t,create:function(e,r){if(!e||!e.nodeName)throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+t+"): Slider was already initialized.");var n=$(r),o=R(e,n,r);return e.noUiSlider=o,o}}})?n.apply(e,o):n)||(t.exports=i)},function(t,e){const r=document.querySelector(".menu"),n=r.querySelector(".menu__burger");n.onclick=(t=>{r.classList.toggle("menu_closed"),n.classList.toggle("menu__burger_closed")})},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);r(1);const i=(t,e)=>{const r=e-t;return Array.from({length:r},(e,r)=>t+r)},a=document.querySelector(".slider");o.a.create(a,{start:[1920,2019],connect:!0,step:1,range:{min:1920,max:2019},tooltips:!0,format:{to:function(t){return t},from:function(t){return t}}});const s=d3.geo.mercator().center([-20,45]).scale(260).rotate([-20,0]).translate([window.innerWidth/2.1,window.innerHeight/2.2]),l=d3.select("#map").append("svg").attr("width","100%").attr("height","100%"),c=d3.geo.path().projection(s),u=l.append("g"),d=20,f=6,p=d3.select(".tooltip");d3.json("js/world-110m2.json",(t,e)=>{u.selectAll("path").data(topojson.object(e,e.objects.countries).geometries).enter().append("path").attr("d",c)}),d3.json("js/brut-data.json",(t,e)=>{d3.select(".header__anzahl").text(`${e.length} Gebäude`),u.selectAll("circle").data(e).enter().append("rect").attr("x",function(t){return s([t.lng,t.lat])[0]}).attr("y",function(t){return s([t.lng,t.lat])[1]}).attr("width",d).attr("height",f).attr("class",function(t){return`${(t=>t>=1920&&t<1930?"city-dot cd-1920-1930":t>=1930&&t<1935?"city-dot cd-1930-1935":t>=1935&&t<1940?"city-dot cd-1935-1940":t>=1940&&t<1945?"city-dot cd-1940-1945":t>=1945&&t<1950?"city-dot cd-1945-1950":t>=1950&&t<1955?"city-dot cd-1950-1955":t>=1955&&t<1960?"city-dot cd-1955-1960":t>=1960&&t<1965?"city-dot cd-1960-1965":t>=1965&&t<1970?"city-dot cd-1965-1970":t>=1970&&t<1975?"city-dot cd-1970-1975":t>=1975&&t<1980?"city-dot cd-1975-1980":t>=1980&&t<1985?"city-dot cd-1980-1985":t>=1985&&t<1990?"city-dot cd-1985-1990":t>=1990&&t<1995?"city-dot cd-1990-1995":t>=1995&&t<2e3?"city-dot cd-1995-2000":t>=2e3&&t<2005?"city-dot cd-2000-2005":t>=2005&&t<2010?"city-dot cd-2005-2010":t>=2010&&t<2015?"city-dot cd-2010-2015":t>=2015?"city-dot cd-2015--":void 0)(t.start_jahr)} ${t.start_jahr}-jahr`}).on("mouseover",function(t){d3.select(this).style("fill","black"),p.style("display","block").style("left",d3.event.pageX+"px").style("top",d3.event.pageY-100+"px"),p.select(".tooltip__vorschau__image").style("background-image",`url(${t.thumbnail})`),p.select(".tooltip__vorschau").style("display",function(e){if(""===t.thumbnail||!t.thumbnail||!t.thumbnail.match(/jpg/i))return"none"}),p.select(".tooltip__titel").text(t.titel),p.select(".tooltip__autor").text(t.architekten),p.select(".tooltip__jahr-staat").text(`${t.start_jahr}—${t.ende_jahr}, ${t.staat}${""!==t.stadt?`, ${t.stadt}`:""}`),p.select(".tooltip__status").text(t.status).style("background",function(e){return"status-still-there"===t.status?"#4c475b":"status-saved"===t.status?"#27d167":"status-danger"===t.status||"status-saved-danger"===t.status?"#e27000":"#e33632"})}).on("mouseout",function(t){p.style("display","none"),d3.select(this).transition().style("fill",(t=>t.contains("cd-1920-1930")?"#ffc64c":t.contains("cd-1930-1935")?"#ffbc4d":t.contains("cd-1935-1940")?"#ffb251":t.contains("cd-1940-1945")?"#ffa758":t.contains("cd-1945-1950")?"#ff9c62":t.contains("cd-1950-1955")?"#ff906e":t.contains("cd-1955-1960")?"#ff857c":t.contains("cd-1960-1965")?"#ff7b8b":t.contains("cd-1965-1970")?"#ff729c":t.contains("cd-1970-1975")?"#ff6bae":t.contains("cd-1975-1980")?"#ff67c0":t.contains("cd-1980-1985")?"#a459f2":t.contains("cd-1985-1990")?"#7e54f8":t.contains("cd-1990-1995")?"#0065e4":t.contains("cd-1995-2000")?"#0077d0":t.contains("cd-2000-2005")?"#0088bd":t.contains("cd-2005-2010")?"#009aa9":t.contains("cd-2010-2015")?"#00ab95":t.contains("cd-2015--")?"#00bd82":void 0)(this.classList)).duration(1e3)}),a.noUiSlider.on("slide",function(t,e){u.selectAll(".city-dot").attr("display",e=>{let r="block";return[...i(1920,t[0]),...i(t[1],2020)].map(t=>{e.start_jahr===t&&(r="none")}),r})})});const h=d3.behavior.zoom().on("zoom",()=>{u.attr("transform",`translate(${d3.event.translate.join(",")}) scale(${d3.event.scale})`);let t=d3.event.scale.toFixed(2);(d3.event.scale<100||d3.event.scale<=0)&&(u.attr("stroke-width",.5/t),u.selectAll("rect").attr("width",d/t).attr("height",f/t))});l.call(h)}]);
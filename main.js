(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#body {\n    display: flex;\n    justify-content: center;\n}\n\n#content {\n    width: 800px;\n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 16px;\n    padding: 16px;\n}\n\n.subcontent{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* padding: 32px;\n    margin: 16px; */\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),m=n.n(l),p=n(28),f={};function h(e){const t=document.createElement("div");t.id="homePageSubContent",t.classList.add("subcontent");const n=document.createElement("img"),r=document.createElement("h1"),o=document.createElement("p");n.src="../frying-nemo-s-new-logo.jpg",r.innerText="Frying Nemo!",o.innerText="Welcome to Frying Nemo, where the taste of the sea meets the sizzle of the kitchen! Our restaurant offers an unforgettable culinary experience that is sure to tantalize your taste buds.\n\nAt Frying Nemo, we take great pride in serving only the freshest seafood sourced directly from the ocean. Our expert chefs use their creativity and skill to bring out the unique flavors of each dish, creating a menu that is both classic and innovative.\n\nWhether you're in the mood for a classic fish and chips or a more exotic seafood platter, our menu has something for everyone. We also offer a wide range of vegetarian and gluten-free options, ensuring that all of our guests can enjoy a delicious meal.\n\nOur restaurant has a warm and welcoming atmosphere that is perfect for a romantic dinner, a family outing, or a night out with friends. With attentive service and a menu that is sure to impress, Frying Nemo is the perfect place to celebrate any occasion.\n\nWe take great care to ensure that every guest leaves our restaurant satisfied and eager to return. Come visit us at Frying Nemo and experience the ultimate seafood dining experience!.",o.style.width="80%",t.append(r,n,o),e.append(t)}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v=document.getElementById("content");document.getElementById("body");var y=!0,g=!1,x=!1;const E=function(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("header");const n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button");o.id="home",o.innerText="HOME";const a=document.createElement("button");a.innerText="MENU",a.id="menu";const i=document.createElement("button");return i.innerText="CONTACT",i.id="contact",t.append(o,a,i),e.append(t,n,r),{container:e,header:t,mainBody:n,footer:r,homeButton:o,menuButton:a,contactButton:i}}();v.append(E.container),h(E.mainBody);const b=E.homeButton,T=E.menuButton,C=E.contactButton;b.addEventListener("click",(function(){y||(y=!0,g=!1,x=!1,E.mainBody.removeChild(E.mainBody.firstElementChild),h(E.mainBody))})),T.addEventListener("click",(function(){g||(y=!1,g=!0,x=!1,E.mainBody.removeChild(E.mainBody.firstElementChild),function(e){const t=document.createElement("div");t.classList.add("subcontent");const n=document.createElement("h1");n.innerText="MENU";const r=document.createElement("ul"),o=document.createElement("li");o.innerText="Buffalo Wings";const a=document.createElement("li");a.innerText="Suar Wings";const i=document.createElement("li");i.innerText="KalaSuar Wings",r.append(o,a,i),t.append(n,r),e.appendChild(t)}(E.mainBody))})),C.addEventListener("click",(function(){x||(y=!1,g=!1,x=!0,E.mainBody.removeChild(E.mainBody.firstElementChild),function(e){const t=document.createElement("div");t.classList.add("subcontent");const n=document.createElement("h1"),r=document.createElement("p1");n.innerText="Contact Number 1 :",r.innerText="1231231234";const o=document.createElement("h1"),a=document.createElement("p2");o.innerText="Contact Number 2 :",a.innerText="3331231234",t.append(n,r,o,a),e.appendChild(t)}(E.mainBody))}))})()})();
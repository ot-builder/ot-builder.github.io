(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/FXl":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("mXGw"),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"===typeof e?e(n):c({},n,{},e)),t},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,m=s["".concat(o,".").concat(d)]||s[d]||f[d]||i;return t?a.a.createElement(m,c({ref:n},u,{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"===typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},"32hu":function(e,n,t){},"752K":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/intro",function(){return t("nk4s")}])},DXdU:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return l}));var r=t("mXGw"),a=t.n(r),i=t("bBV7"),o=(t("32hu"),a.a.createElement),c=function(e){return o("aside",{className:"side"},o("section",{className:"site-nav"},o("h1",null,o("a",{className:"nav-link",href:"/index"},"ot-builder")),o("ul",{className:"nav-list"},o(l,{dir:"/tutorial/intro",href:"/tutorial/intro",text:"Introduction"}),o(l,{dir:"/references",href:"/references",text:"API Reference"}),o(l,{href:"https://github.com/ot-builder/monorepo",text:"Repository"}))),o("section",{className:"function-nav"},e.children))},l=Object(i.withRouter)((function(e){var n=e.dir?e.router.pathname.slice(0,e.dir.length)===e.dir?"dynamic current":"dynamic other":"fixed";return o("li",{className:"nav-link "+n},o("a",{className:"link-item",href:e.href||e.dir},e.text),e.children)}))},Fcif:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},Rq51:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("mXGw"),a=t.n(r),i=t("DXdU"),o=a.a.createElement,c=function(e){return o("main",{className:"landing-page"},o(i.a,null,""),o("article",null,e.children))}},"dV/x":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,"a",(function(){return r}))},nk4s:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("Fcif"),a=t("dV/x"),i=t("mXGw"),o=t.n(i),c=t("/FXl"),l=t("Rq51"),u=(o.a.createElement,{}),p=l.a;function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.a)(p,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"Introduction"),Object(c.a)("p",null,Object(c.a)("inlineCode",{parentName:"p"},"ot-builder")," is a Node.JS library that focuses parsing, manipulating and building fonts."),Object(c.a)("p",null,"Currently ",Object(c.a)("inlineCode",{parentName:"p"},"ot-builder")," supports:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"TrueType and Postscript glyph geometry and hinting;"),Object(c.a)("li",{parentName:"ul"},"OpenType layout (",Object(c.a)("inlineCode",{parentName:"li"},"GSUB"),",\xa0",Object(c.a)("inlineCode",{parentName:"li"},"GPOS"),", ",Object(c.a)("inlineCode",{parentName:"li"},"GDEF"),", ",Object(c.a)("inlineCode",{parentName:"li"},"BASE"),");"),Object(c.a)("li",{parentName:"ul"},"First-class variation;"),Object(c.a)("li",{parentName:"ul"},"Font-level glyph mappers and coordinate mappers.")))}s.isMDXComponent=!0}},[["752K",0,2,1,3]]]);
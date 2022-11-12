(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{4967:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/prelude",function(){return __webpack_require__(4911)}])},4234:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Fp:function(){return annot},IM:function(){return record},OT:function(){return readonly},RF:function(){return rest},bc:function(){return tuple},jt:function(){return optional},l2:function(){return app},l7:function(){return extend},lo:function(){return guard},pi:function(){return pi},wE:function(){return either},yA:function(){return defaultTo}});let optional=ts=>({optional:ts}),rest=ts=>({rest:ts}),readonly=ts=>({readonly:ts}),either=function(){for(var _len=arguments.length,ts=Array(_len),_key=0;_key<_len;_key++)ts[_key]=arguments[_key];return{either:ts}},tuple=function(){for(var _len=arguments.length,ts=Array(_len),_key=0;_key<_len;_key++)ts[_key]=arguments[_key];return{tuple:ts}},app=function(a){for(var _len=arguments.length,ts=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)ts[_key-1]=arguments[_key];return{generic:a,args:ts}},pi=(a,b)=>({takes:a,returns:b}),record=a=>({object:a}),annot=(ts,s)=>({rawType:ts,annotation:s}),extend=(a,b)=>({operator:"extends",left:a,right:b}),defaultTo=(a,b)=>({operator:"=",left:a,right:b}),guard=(a,b)=>({operator:"is",left:a,right:b})},4911:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4246),_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1670),templates_api_doc__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9790),api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4017),api_doc_exports__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5307),api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4234);let MDXLayout=templates_api_doc__WEBPACK_IMPORTED_MODULE_1__.A;function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1,{children:"Prelude"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p,{children:["The Prelude contains various utility types that is used in the rest parts of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code,{children:"ot-builder"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2,{children:["Namespace ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Maybe("T")})," = ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.R,{s:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(null,void 0,"T")}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p,{children:["Represents an optional object. Frequently used in the rest parts of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code,{children:"ot-builder"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStoreFactory("T",(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l7)("S",api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStore("T")))})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStoreFactory.createStoreFromList,args:{init:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l2)("Iterable","T")},returns:"S"}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStoreFactoryWithDefault("T",(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l7)("S",api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStore("T")))})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Inherits"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.R,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStoreFactory("T","S")}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStoreFactoryWithDefault.createStoreFromSize,args:{count:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx},returns:"S"}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStore("T")})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.OrderStore.decideOrder,returns:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order("T")}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order("T")})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Nw,{readonly:!0,s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.length,type:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.at,args:{index:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx},returns:"T"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p,{children:"Get item at specific index. Should throw error when item is absent."}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.tryAt,args:{index:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx},returns:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Maybe("T")}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p,{children:["Get item at specific index. Return ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code,{children:"undefined"})," when item is absent."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.reverse,args:{item:"T"},returns:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.tryReverse,args:{index:"T"},returns:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Maybe(api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx)}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.tryReverseFallback("F"),args:{index:"T",fallback:"F"},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx,"F")}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order["[Symbol.Iterator]"],returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l2)("IterableIterator","T")}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Order.entries,returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l2)("IterableIterator",(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.bc)(api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx,"T"))}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Naming.Source("G")})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Naming.Source.getName,args:{item:"G"},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(void 0,null,api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Z_)}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Interface ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Naming.IndexSource("G")})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Naming.Source.getIndex,args:{item:"G"},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(void 0,null,api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx)}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Vw.Naming.Source.getVariantIndex,args:{item:"G"},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(void 0,null,(0,api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.IX)(api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Rx))}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2,{children:["Namespace ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T")})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Constructor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{ctor:!0,s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID.constructor,args:{id:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.Z_}}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Method"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair.cast("T"),args:{expected:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T")},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(void 0,"T")}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p,{children:["Query the corresponded value part of a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.R,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair}),". Return the value if the type ID parameter matches."]}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Factory Methods"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{static:!0,s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair.create("T"),args:{tid:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T"),value:"T"},returns:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3,{children:["Class ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.Hf,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Constructor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{ctor:!0,s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag.constructor}),"\n"]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4,{children:"Method"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag.get("T"),args:{tid:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T")},returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.wE)(void 0,"T")}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag.set("T"),args:{tid:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T"),value:"T"},returns:"void"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag.delete("T"),args:{tid:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.TypeID("T")},returns:"void"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(api_doc_tyfmt__WEBPACK_IMPORTED_MODULE_2__.n$,{s:api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.PropertyBag.entries,returns:(0,api_doc_tycon__WEBPACK_IMPORTED_MODULE_5__.l2)("IterableIterator",api_doc_exports__WEBPACK_IMPORTED_MODULE_3__.n0.DependentPair)}),"\n"]}),"\n"]})]})}__webpack_exports__.default=function(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent,props)}))}}},function(__webpack_require__){__webpack_require__.O(0,[774,495,888,179],function(){return __webpack_require__(__webpack_require__.s=4967)}),_N_E=__webpack_require__.O()}]);
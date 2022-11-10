(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{4967:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/prelude",function(){return r(4911)}])},4234:function(n,e,r){"use strict";r.d(e,{Fp:function(){return o},IM:function(){return x},OT:function(){return i},RF:function(){return t},bc:function(){return d},jt:function(){return s},l2:function(){return c},l7:function(){return a},lo:function(){return j},pi:function(){return h},wE:function(){return l},yA:function(){return u}});let s=n=>({optional:n}),t=n=>({rest:n}),i=n=>({readonly:n}),l=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return{either:e}},d=function(){for(var n=arguments.length,e=Array(n),r=0;r<n;r++)e[r]=arguments[r];return{tuple:e}},c=function(n){for(var e=arguments.length,r=Array(e>1?e-1:0),s=1;s<e;s++)r[s-1]=arguments[s];return{generic:n,args:r}},h=(n,e)=>({takes:n,returns:e}),x=n=>({object:n}),o=(n,e)=>({rawType:n,annotation:e}),a=(n,e)=>({operator:"extends",left:n,right:e}),u=(n,e)=>({operator:"=",left:n,right:e}),j=(n,e)=>({operator:"is",left:n,right:e})},4911:function(n,e,r){"use strict";r.r(e);var s=r(4246),t=r(1670),i=r(9790),l=r(4017),d=r(5307),c=r(4234);let h=i.A;function x(n){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{children:"Prelude"}),"\n",(0,s.jsxs)(e.p,{children:["The Prelude contains various utility types that is used in the rest parts of ",(0,s.jsx)(e.code,{children:"ot-builder"}),"."]}),"\n",(0,s.jsxs)(e.h2,{children:["Namespace ",(0,s.jsx)(l.Hf,{s:d.Vw})]}),"\n",(0,s.jsxs)(e.h3,{children:["Type ",(0,s.jsx)(l.Hf,{s:d.Vw.Maybe("T")})," = ",(0,s.jsx)(l.R,{s:(0,c.wE)(null,void 0,"T")}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Represents an optional object. Frequently used in the rest parts of the ",(0,s.jsx)(e.code,{children:"ot-builder"}),"."]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.OrderStoreFactory("T",(0,c.l7)("S",d.Vw.OrderStore("T")))})]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.OrderStoreFactory.createStoreFromList,args:{init:(0,c.l2)("Iterable","T")},returns:"S"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.OrderStoreFactoryWithDefault("T",(0,c.l7)("S",d.Vw.OrderStore("T")))})]}),"\n",(0,s.jsx)(e.h4,{children:"Inherits"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.R,{s:d.Vw.OrderStoreFactory("T","S")}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.OrderStoreFactoryWithDefault.createStoreFromSize,args:{count:d.Rx},returns:"S"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.OrderStore("T")})]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.OrderStore.decideOrder,returns:d.Vw.Order("T")}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.Order("T")})]}),"\n",(0,s.jsx)(e.h4,{children:"Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.Nw,{readonly:!0,s:d.Vw.Order.length,type:d.Rx}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.at,args:{index:d.Rx},returns:"T"}),"\n",(0,s.jsx)(e.p,{children:"Get item at specific index. Should throw error when item is absent."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.tryAt,args:{index:d.Rx},returns:d.Vw.Maybe("T")}),"\n",(0,s.jsxs)(e.p,{children:["Get item at specific index. Return ",(0,s.jsx)(e.code,{children:"undefined"})," when item is absent."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.reverse,args:{item:"T"},returns:d.Rx}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.tryReverse,args:{index:"T"},returns:d.Vw.Maybe(d.Rx)}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.tryReverseFallback("F"),args:{index:"T",fallback:"F"},returns:(0,c.wE)(d.Rx,"F")}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order["[Symbol.Iterator]"],returns:(0,c.l2)("IterableIterator","T")}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Order.entries,returns:(0,c.l2)("IterableIterator",(0,c.bc)(d.Rx,"T"))}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.Naming.Source("G")})]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Naming.Source.getName,args:{item:"G"},returns:(0,c.wE)(void 0,null,d.Z_)}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Interface ",(0,s.jsx)(l.Hf,{s:d.Vw.Naming.IndexSource("G")})]}),"\n",(0,s.jsx)(e.h4,{children:"Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Naming.Source.getIndex,args:{item:"G"},returns:(0,c.wE)(void 0,null,d.Rx)}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.Vw.Naming.Source.getVariantIndex,args:{item:"G"},returns:(0,c.wE)(void 0,null,(0,d.IX)(d.Rx))}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{children:["Namespace ",(0,s.jsx)(l.Hf,{s:d.n0})]}),"\n",(0,s.jsxs)(e.h3,{children:["Class ",(0,s.jsx)(l.Hf,{s:d.n0.TypeID("T")})]}),"\n",(0,s.jsx)(e.h4,{children:"Constructor"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{ctor:!0,s:d.n0.TypeID.constructor,args:{id:d.Z_}}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Class ",(0,s.jsx)(l.Hf,{s:d.n0.DependentPair})]}),"\n",(0,s.jsx)(e.h4,{children:"Method"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.n0.DependentPair.cast("T"),args:{expected:d.n0.TypeID("T")},returns:(0,c.wE)(void 0,"T")}),"\n",(0,s.jsxs)(e.p,{children:["Query the corresponded value part of a ",(0,s.jsx)(l.R,{s:d.n0.DependentPair}),". Return the value if the type ID parameter matches."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{children:"Factory Methods"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{static:!0,s:d.n0.DependentPair.create("T"),args:{tid:d.n0.TypeID("T"),value:"T"},returns:d.n0.DependentPair}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Class ",(0,s.jsx)(l.Hf,{s:d.n0.PropertyBag})]}),"\n",(0,s.jsx)(e.h4,{children:"Constructor"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{ctor:!0,s:d.n0.PropertyBag.constructor}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{children:"Method"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.n0.PropertyBag.get("T"),args:{tid:d.n0.TypeID("T")},returns:(0,c.wE)(void 0,"T")}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.n0.PropertyBag.set("T"),args:{tid:d.n0.TypeID("T"),value:"T"},returns:"void"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.n0.PropertyBag.delete("T"),args:{tid:d.n0.TypeID("T")},returns:"void"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(l.n$,{s:d.n0.PropertyBag.entries,returns:(0,c.l2)("IterableIterator",d.n0.DependentPair)}),"\n"]}),"\n"]})]})}e.default=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(h,Object.assign({},n,{children:(0,s.jsx)(x,n)}))}}},function(n){n.O(0,[774,495,888,179],function(){return n(n.s=4967)}),_N_E=n.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{438:(s,n,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/ot/var",function(){return r(8006)}])},1833:(s,n,r)=>{"use strict";r.d(n,{PV:()=>l,X$:()=>j,ah:()=>V,b0:()=>h,g1:()=>c,gP:()=>i,lq:()=>e,pi:()=>x,tB:()=>t,vU:()=>u,yA:()=>d,zs:()=>a});let e=s=>({optional:s}),a=s=>({rest:s}),t=s=>({readonly:s}),i=function(){for(var s=arguments.length,n=Array(s),r=0;r<s;r++)n[r]=arguments[r];return{either:n}},l=function(){for(var s=arguments.length,n=Array(s),r=0;r<s;r++)n[r]=arguments[r];return{tuple:n}},d=function(s){for(var n=arguments.length,r=Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return{generic:s,args:r}},x=(s,n)=>({takes:s,returns:n}),c=s=>({object:s}),h=(s,n)=>({rawType:s,annotation:n}),j=(s,n)=>({operator:"extends",left:s,right:n}),u=(s,n)=>({operator:"=",left:s,right:n}),V=(s,n)=>({operator:"is",left:s,right:n})},8006:(s,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>h});var e=r(6514),a=r(9066),t=r(3207),i=r(582),l=r(2967),d=r(1833);let x=t.P;function c(s){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(n.h1,{children:["Namespace ",(0,e.jsx)(i.xi,{s:l.Ot.Var})]}),"\n",(0,e.jsx)(n.h2,{children:"Foundation Types"}),"\n",(0,e.jsxs)(n.h3,{children:["Type ",(0,e.jsx)(i.xi,{s:l.Ot.Var.Value})]}),"\n",(0,e.jsxs)(n.p,{children:["An immutable, opaque union type of ",(0,e.jsx)(i.R,{s:"number"})," and an internal class implements a quantity that varies under OpenType Variation rules. Use ",(0,e.jsx)(i.R,{s:l.Ot.Var.Ops})," to create and manipulate them."]}),"\n",(0,e.jsxs)(n.h3,{children:["Class ",(0,e.jsx)(i.xi,{s:l.Ot.Var.Dim})]}),"\n",(0,e.jsx)(n.p,{children:"An object type representing a “variation dimension” in a variable font. Its object identity is significant, and is used to distinguish dimensions of a variable font's design space."}),"\n",(0,e.jsxs)(n.p,{children:["Class ",(0,e.jsx)(i.R,{s:l.Ot.Fvar.Axis})," in ",(0,e.jsx)(i.R,{s:l.Ot.Fvar})," contains such dimension object, with extra properties for naming, identification, etc."]}),"\n",(0,e.jsx)(n.h4,{children:"Constructor"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{ctor:!0,s:l.Ot.Var.Dim.Constructor,args:{tag:l.vw,minValue:l.ai,defaultValue:l.ai,maxValue:l.ai}}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Properties"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Dim.tag,type:l.vw}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Dim.min,type:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Dim.default,type:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Dim.max,type:l.ai}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.h3,{children:["Type ",(0,e.jsx)(i.xi,{s:l.Ot.Var.DesignSpace})]}),"\n",(0,e.jsxs)(n.p,{children:["Aliased to ",(0,e.jsx)(i.R,{s:l.B_.Order(l.Ot.Var.Dim)}),"."]}),"\n",(0,e.jsxs)(n.h3,{children:["Datatype ",(0,e.jsx)(i.xi,{s:l.Ot.Var.Instance})]}),"\n",(0,e.jsxs)(n.p,{children:["Defined as ",(0,e.jsx)(i.R,{s:l.B_.Maybe((0,d.tB)((0,l.Tj)(l.Ot.Var.Dim,l.ai)))}),"."]}),"\n",(0,e.jsxs)(n.h3,{children:["Datatype ",(0,e.jsx)(i.xi,{s:l.Ot.Var.MasterDim})]}),"\n",(0,e.jsx)(n.h4,{children:"Properties"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.MasterDim.dim,type:l.Ot.Var.Dim}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.MasterDim.min,type:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.MasterDim.peak,type:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.MasterDim.max,type:l.ai}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.h3,{children:["Class ",(0,e.jsx)(i.xi,{s:l.Ot.Var.Master})]}),"\n",(0,e.jsx)(n.h4,{children:"Constructor"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{ctor:!0,s:l.Ot.Var.Master.constructor,args:{init:(0,l.vE)((0,d.gP)(void 0,null,l.Ot.Var.MasterDim))}}),"\n",(0,e.jsxs)(n.p,{children:["Create a ",(0,e.jsx)(i.R,{s:l.Ot.Var.Master})," from per-axis regions. ",(0,e.jsx)(n.code,{children:"undefined"})," and ",(0,e.jsx)(n.code,{children:"null"})," items are ignored."]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Properties"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Master.regions,type:(0,d.tB)((0,l.YO)(l.Ot.Var.MasterDim))}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Methods"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Master.evaluate,args:{instance:l.Ot.Var.Instance},returns:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Master.getPeak,args:{},returns:l.Ot.Var.Instance}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Master.isInvalid,args:{},returns:l.zM}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Master.isSimple,args:{},returns:l.zM}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.h3,{children:["Class ",(0,e.jsx)(i.xi,{s:l.Ot.Var.MasterSet})]}),"\n",(0,e.jsx)(n.p,{children:"A master set collects masters and associates an unique number to masters that are distinguishable. Equivalent masters will share same index."}),"\n",(0,e.jsx)(n.h4,{children:"Inherits"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.R,{s:(0,l.vE)((0,d.PV)(l.Ot.Var.Master,l.ai))}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Constructor"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{ctor:!0,s:l.Ot.Var.MasterSet.constructor,args:{}}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Methods"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.MasterSet.get,args:{master:l.Ot.Var.Master},returns:(0,d.gP)(void 0,(0,d.g1)({index:l.ai,master:l.Ot.Var.Master}))}),"\n",(0,e.jsxs)(n.p,{children:["Query the records and return the index and corresponding collected masters, or ",(0,e.jsx)(n.code,{children:"undefined"})," if the master is not recorded."]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.MasterSet.getOrPush,args:{master:l.Ot.Var.Master},returns:(0,d.gP)(void 0,(0,d.g1)({index:l.ai,master:l.Ot.Var.Master}))}),"\n",(0,e.jsxs)(n.p,{children:["Query the records and return the index and corresponding collected masters, or add it into the record if it is not collected. Returns ",(0,e.jsx)(n.code,{children:"undefined"})," when the master is considered invalid."]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h2,{children:"Operations"}),"\n",(0,e.jsxs)(n.h3,{children:["Singleton ",(0,e.jsx)(i.xi,{s:l.Ot.Var.Ops})]}),"\n",(0,e.jsx)(n.h4,{children:"Properties"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.Ops.neutral,type:l.ai}),"\n",(0,e.jsxs)(n.p,{children:["The identity of ",(0,e.jsx)(i.R,{s:l.Ot.Var.Value}),". Equal to 0."]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Vector space methods"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.add,args:{x:l.Ot.Var.Value,y:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.negate,args:{x:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.minus,args:{x:l.Ot.Var.Value,y:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.scale,args:{scale:l.ai,y:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.addScale,args:{x:l.Ot.Var.Value,scale:l.ai,y:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Variation methods"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.originOf,args:{x:l.Ot.Var.Value},returns:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.varianceDeltaOf,args:{x:l.Ot.Var.Value,m:l.Ot.Var.Master},returns:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.varianceOf,args:{x:l.Ot.Var.Value},returns:(0,l.vE)((0,d.PV)(l.Ot.Var.Master,l.ai))}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.removeOrigin,args:{x:l.Ot.Var.Value},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.evaluate,args:{x:l.Ot.Var.Value,instance:l.Ot.Var.Instance},returns:l.ai}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.equal,args:{x:l.Ot.Var.Value,y:l.Ot.Var.Value,err:(0,d.lq)(l.ai)},returns:l.zM}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.sum,args:{"...xs":(0,d.b0)((0,l.YO)(l.Ot.Var.Value),"Parts to sum up")},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.isConstant,args:{x:l.Ot.Var.Value},returns:l.zM}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.Ops.isZero,args:{x:l.Ot.Var.Value},returns:l.zM}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.h3,{children:["Class ",(0,e.jsx)(i.xi,{s:l.Ot.Var.ValueFactory})]}),"\n",(0,e.jsx)(n.h4,{children:"Constructor"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{ctor:!0,s:l.Ot.Var.ValueFactory.constructor,args:{masterSet:(0,d.lq)(l.Ot.Var.MasterSet)}}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Properties"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.dP,{readonly:!0,s:l.Ot.Var.ValueFactory.masterSet,type:l.Ot.Var.MasterSet}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h4,{children:"Methods"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.ValueFactory.create,args:{origin:(0,d.lq)(l.ai),variance:(0,d.lq)((0,l.vE)((0,d.PV)(l.Ot.Var.Master,l.ai)))},returns:l.Ot.Var.Value}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsx)(i.IT,{s:l.Ot.Var.ValueFactory.make,args:{"...xs":(0,l.YO)((0,d.gP)(l.Ot.Var.Value,(0,d.PV)(l.Ot.Var.Master,l.ai)))},returns:l.Ot.Var.Value}),"\n"]}),"\n"]})]})}function h(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,e.jsx)(x,{...s,children:(0,e.jsx)(c,{...s})})}}},s=>{var n=n=>s(s.s=n);s.O(0,[301,636,593,792],()=>n(438)),_N_E=s.O()}]);
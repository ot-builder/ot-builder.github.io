(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{2341:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/ot/glyph",function(){return e(2369)}])},4234:function(n,s,e){"use strict";e.d(s,{Fp:function(){return x},IM:function(){return p},OT:function(){return l},RF:function(){return r},bc:function(){return h},jt:function(){return t},l2:function(){return o},l7:function(){return j},lo:function(){return a},pi:function(){return c},wE:function(){return i},yA:function(){return y}});var t=function(n){return{optional:n}},r=function(n){return{rest:n}},l=function(n){return{readonly:n}},i=function(){for(var n=arguments.length,s=new Array(n),e=0;e<n;e++)s[e]=arguments[e];return{either:s}},h=function(){for(var n=arguments.length,s=new Array(n),e=0;e<n;e++)s[e]=arguments[e];return{tuple:s}},o=function(n){for(var s=arguments.length,e=new Array(s>1?s-1:0),t=1;t<s;t++)e[t-1]=arguments[t];return{generic:n,args:e}},c=function(n,s){return{takes:n,returns:s}},p=function(n){return{object:n}},x=function(n,s){return{rawType:n,annotation:s}},j=function(n,s){return{operator:"extends",left:n,right:s}},y=function(n,s){return{operator:"=",left:n,right:s}},a=function(n,s){return{operator:"is",left:n,right:s}}},2369:function(n,s,e){"use strict";e.r(s);var t=e(4246),r=e(9790),l=e(4017),i=e(5307),h=e(4234),o=r.A;function c(n){var s=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",em:"em"},n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:(0,t.jsx)(l.Hf,{s:i.Ot.Glyph})}),"\n",(0,t.jsxs)(s.p,{children:["The type-namespace duplex ",(0,t.jsx)(l.R,{s:i.Ot.Glyph})," defines the datatype, related datatype and operations for OpenType glyphs."]}),"\n",(0,t.jsx)(s.h2,{children:"Glyph Store"}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(l.R,{s:i.Ot.Font})," support any datatype implemented ",(0,t.jsx)(l.R,{s:i.Vw.OrderStore(i.Ot.Glyph)})," to be the glyph store. ",(0,t.jsx)(s.code,{children:"ot-builder"})," provided ",(0,t.jsx)(l.R,{s:i.Ot.ListGlyphStore})," as the default glyph store implementation."]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GlyphStore})]}),"\n",(0,t.jsxs)(s.p,{children:["Alias of ",(0,t.jsx)(l.R,{s:i.Vw.OrderStore(i.Ot.Glyph)}),"."]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GlyphStoreFactory((0,h.l7)("GS",i.Ot.GlyphStore))})]}),"\n",(0,t.jsxs)(s.p,{children:["Alias of ",(0,t.jsx)(l.R,{s:i.Vw.OrderStoreFactory(i.Ot.Glyph,"GS")}),"."]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GlyphStoreFactoryWithDefault((0,h.l7)("GS",i.Ot.GlyphStore))})]}),"\n",(0,t.jsxs)(s.p,{children:["Alias of ",(0,t.jsx)(l.R,{s:i.Vw.OrderStoreFactoryWithDefault(i.Ot.Glyph,"GS")}),"."]}),"\n",(0,t.jsxs)(s.h3,{children:["Type ",(0,t.jsx)(l.Hf,{s:i.Ot.ListGlyphStore})]}),"\n",(0,t.jsxs)(s.p,{children:["An opaque class that implements ",(0,t.jsx)(l.R,{s:i.Vw.OrderStore(i.Ot.Glyph)}),". Created by ",(0,t.jsx)(l.R,{s:i.Ot.ListGlyphStoreFactory}),"."]}),"\n",(0,t.jsxs)(s.h3,{children:["Singleton ",(0,t.jsx)(l.Hf,{s:i.Ot.ListGlyphStoreFactory})]}),"\n",(0,t.jsxs)(s.p,{children:["An opaque factory object that implements ",(0,t.jsx)(l.R,{s:i.Vw.OrderStoreFactoryWithDefault(i.Ot.Glyph,i.Ot.ListGlyphStore)}),"."]}),"\n",(0,t.jsx)(s.h2,{children:"Glyph"}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph})]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(l.R,{s:i.Ot.Glyph})," class represents one glyph. Object identity of ",(0,t.jsx)(l.R,{s:i.Ot.Glyph}),"'s carry the semantics of glyph identity. Many parts of the font, even some geometries inside the glyph, will hold references to ",(0,t.jsx)(l.R,{s:i.Ot.Glyph}),"'s."]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.constructor}),"\n",(0,t.jsxs)(s.p,{children:["Create an empty ",(0,t.jsx)(l.R,{s:i.Ot.Glyph}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.name,type:i.Vw.Maybe(i.Z_)}),"\n",(0,t.jsx)(s.p,{children:"The glyph name. Optional."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.geometry,type:i.Vw.Maybe(i.Ot.Glyph.Geometry)}),"\n",(0,t.jsx)(s.p,{children:"The geometry. Optional. When absent, the glyph is considered a space."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.hints,type:i.Vw.Maybe(i.Ot.Glyph.Hints)}),"\n",(0,t.jsx)(s.p,{children:"The hints. Optional."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.horizontal,type:i.Vw.Maybe(i.Ot.Glyph.Metric)}),"\n",(0,t.jsx)(s.p,{children:"The horizontal metric."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.vertical,type:i.Vw.Maybe(i.Ot.Glyph.Metric)}),"\n",(0,t.jsx)(s.p,{children:"The vertical metric."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{static:!0,s:i.Ot.Glyph.shallowCopy,args:{from:i.Ot.Glyph},returns:i.Ot.Glyph}),"\n",(0,t.jsx)(s.p,{children:"Perform a shallow copy of another glyph."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{children:"Metrics"}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Metric})]}),"\n",(0,t.jsx)(s.p,{children:"Defines a metric advance of a glyph."}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Metric.start,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"Start coordinate."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Metric.end,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"End coordinate."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{children:"Geometry"}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Geometry})]}),"\n",(0,t.jsx)(s.p,{children:"Defines as the union of the following cases."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.ContourSet}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TtReference}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryList}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.GeometryT.type,type:"unique symbol"}),"\n",(0,t.jsx)(s.p,{children:"The type tag of this hint object."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Case Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.ContourSet})," | type = ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryType.ContourSet})]}),"\n",(0,t.jsx)(s.h4,{children:"Implements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.ContourSetProps}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.ContourSet.constructor,args:{},returns:i.Ot.Glyph.ContourSet}),"\n",(0,t.jsxs)(s.p,{children:["Creates an ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.ContourSet})," with default implementation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.ContourSetProps})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.ContourSetProps.contours,type:(0,i.IX)(i.Ot.Glyph.Contour)}),"\n",(0,t.jsx)(s.p,{children:"The contour set, being a nested array of control knots."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Case Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.TtReference})," | type = ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryType.TtReference})]}),"\n",(0,t.jsx)(s.h4,{children:"Implements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TtReferenceProps}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,long:!0,s:i.Ot.Glyph.TtReference.constructor,args:{to:(0,h.Fp)(i.Ot.Glyph,"Target glyph"),transform:(0,h.Fp)(i.Ot.Glyph.Transform2X3,"Transform of this reference")},returns:i.Ot.Glyph.TtReference}),"\n",(0,t.jsxs)(s.p,{children:["Creates an ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TrReference})," with default implementation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.TtReferenceProps})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtReferenceProps.to,type:i.Ot.Glyph}),"\n",(0,t.jsx)(s.p,{children:"The target glyph."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtReferenceProps.transform,type:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsx)(s.p,{children:"The transform being applied."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtReferenceProps.roundXyToGrid,type:i.O7}),"\n",(0,t.jsx)(s.p,{children:"Whether to round to grid."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtReferenceProps.useMyMetrics,type:i.O7}),"\n",(0,t.jsx)(s.p,{children:"If set, this forces the advance width and left sidebearing for the composite to be equal to those from this original glyph. This works for hinted and unhinted characters."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtReferenceProps.pointAttachment,type:i.Vw.Maybe(i.Ot.Glyph.PointAttachment)}),"\n",(0,t.jsx)(s.p,{children:"When present, this reference follows TrueType's point-attachment rules."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Case Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.GeometryList})," | type = ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryType.GeometryList})]}),"\n",(0,t.jsx)(s.h4,{children:"Implements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryListProp}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.GeometryList.constructor,args:{items:(0,h.jt)((0,i.IX)(i.Ot.Glyph.Geometry))},returns:i.Ot.Glyph.GeometryList}),"\n",(0,t.jsxs)(s.p,{children:["Creates an ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.GeometryList})," from its members."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Type ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.GeometryListProp})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.GeometryList.items,type:i.Ot.Glyph.Geometry}),"\n",(0,t.jsx)(s.p,{children:"The sub items inside."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{children:"Hints"}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Hint})]}),"\n",(0,t.jsx)(s.p,{children:"Defines as the union of the following cases."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TtInstruction}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.CffHint}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Hint.type,type:"unique symbol"}),"\n",(0,t.jsx)(s.p,{children:"The type tag of this hint object."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Case Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.TtInstruction})," | type = ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.HintType.TtInstruction})]}),"\n",(0,t.jsx)(s.h4,{children:"Implements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TtInstructionProps}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.TtInstruction.constructor,args:{instructions:"Buffer"}}),"\n",(0,t.jsxs)(s.p,{children:["Creates an ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.TtInstruction})," from a given instruction buffer."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.TtInstructionProps})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.TtInstructionProps.instructions,type:"Buffer"}),"\n",(0,t.jsx)(s.p,{children:"The buffer containing the TrueType instructions."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Case Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.CffHint})," | type = ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.HintType.CffHint})]}),"\n",(0,t.jsx)(s.h4,{children:"Implements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.R,{s:i.Ot.Glyph.CffHintProps}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.CffHint.constructor,args:{},returns:i.Ot.Glyph.CffHint}),"\n",(0,t.jsxs)(s.p,{children:["Create an empty ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.CffHint}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.CffHintProps})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintProps.hStems,type:i.Ot.Glyph.CffHintStem}),"\n",(0,t.jsx)(s.p,{children:"The horizontal stems."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintProps.vStems,type:i.Ot.Glyph.CffHintStem}),"\n",(0,t.jsx)(s.p,{children:"The vertical stems."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintProps.hintMasks,type:i.Ot.Glyph.CffHintMask}),"\n",(0,t.jsx)(s.p,{children:"The hint masks."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintProps.counterMasks,type:i.Ot.Glyph.CffHintMask}),"\n",(0,t.jsx)(s.p,{children:"The contour masks."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.CffHintStem})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintStem.start,type:i.Ot.Var}),"\n",(0,t.jsx)(s.p,{children:"Start coordinate of this hint stem."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintStem.end,type:i.Ot.Var}),"\n",(0,t.jsx)(s.p,{children:"End coordinate of this hint stem."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Factory Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Fn,{s:i.Ot.Glyph.CffHint.createStem,args:{start:i.Ot.Var.Value,end:i.Ot.Var.Value},returns:i.Ot.Glyph.CffHintStem}),"\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.CffHintStem}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.CffHintMask})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintMask.at,type:(0,i.t8)(i.Ot.Glyph.PointRef)}),"\n",(0,t.jsx)(s.p,{children:"The point reference right before this hint mask take effect."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintMask.maskH,type:(0,i.t8)(i.Ot.Glyph.CffHintStem)}),"\n",(0,t.jsx)(s.p,{children:"Horizontal stems needed to be enabled."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.CffHintMask.maskH,type:(0,i.t8)(i.Ot.Glyph.CffHintStem)}),"\n",(0,t.jsx)(s.p,{children:"Vertical stems needed to be enabled."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Factory Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Fn,{long:!0,s:i.Ot.Glyph.CffHint.createMask,args:{at:(0,h.Fp)(i.Ot.Glyph.PointRef,"Point reference right before this mask"),maskH:(0,h.Fp)((0,i.t8)(i.Ot.Glyph.CffHintStem),"Horizontal stems to be enabled"),maskV:(0,h.Fp)((0,i.t8)(i.Ot.Glyph.CffHintStem),"Vertical stems to be enabled")},returns:i.Ot.Glyph.CffHintMask}),"\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.CffHintMask}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{children:"Support Types"}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Contour})]}),"\n",(0,t.jsxs)(s.p,{children:["Defined as ",(0,t.jsx)(l.R,{s:(0,i.IX)(i.Ot.Glyph.Point)}),"."]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Point})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.R,{s:i.Ot.Glyph.Point})," defines the datatype of glyph points."]}),"\n",(0,t.jsx)(s.h4,{children:"Factory Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{long:!0,static:!0,s:i.Ot.Glyph.Point.create,args:{x:(0,h.Fp)(i.Ot.Var.Value,"X Coordinate"),y:(0,h.Fp)(i.Ot.Var.Value,"Y coordinate"),kind:(0,h.jt)((0,h.Fp)(i.Ot.Glyph.PointType,"Point Type"))},returns:i.Ot.Glyph.Point}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Point.x,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"X coordinate."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Point.y,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"Y coordinate."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Point.kind,type:i.Ot.Glyph.PointType}),"\n",(0,t.jsx)(s.p,{children:"Point type."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Singleton ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.PointOps})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointOps.neutral,type:i.Rx}),"\n",(0,t.jsxs)(s.p,{children:["The identity of ",(0,t.jsx)(l.R,{s:i.Ot.Glyph.Point}),". Equal to 0."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.add,args:{x:i.Ot.Glyph.Point,y:i.Ot.Glyph.Point},returns:i.Ot.Glyph.Point}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.negate,args:{x:i.Ot.Glyph.Point},returns:i.Ot.Glyph.Point}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.minus,args:{x:i.Ot.Glyph.Point,y:i.Ot.Glyph.Point},returns:i.Ot.Glyph.Point}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.scale,args:{scale:i.Rx,y:i.Ot.Glyph.Point},returns:i.Ot.Glyph.Point}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.addScale,args:{x:i.Ot.Glyph.Point,scale:i.Rx,y:i.Ot.Glyph.Point},returns:i.Ot.Glyph.Point}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.applyTransform,args:{x:i.Ot.Glyph.Point,transform:i.Ot.Glyph.Transform2X3},returns:i.Ot.Glyph.Point}),"\n",(0,t.jsx)(s.p,{children:"Apply a 2\xd73 transform to a point."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.combineTransform,args:{a:i.Ot.Glyph.Transform2X3,b:i.Ot.Glyph.Transform2X3},returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsxs)(s.p,{children:["Combine two 2\xd73 transforms together. Applying the combined transform will be equivalent to applying ",(0,t.jsx)(s.em,{children:"b"})," then ",(0,t.jsx)(s.em,{children:"a"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.Glyph.PointOps.removeScaledOffset,args:{tfm:i.Ot.Glyph.Transform2X3},returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsxs)(s.p,{children:["Create an equivalent 2\xd73 transform but without ",(0,t.jsx)(s.code,{children:"scaledOffset"})," property set."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Type ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Transform2X3})]}),"\n",(0,t.jsx)(s.h4,{children:"Constants"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Transform2X3.Identity,returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsx)(s.p,{children:"The identity transform."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Factory Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Fn,{s:i.Ot.Glyph.Transform2X3.Scale,args:{s:i.Rx},returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsx)(s.p,{children:"Creates a uniform scaling transform."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Fn,{s:i.Ot.Glyph.Transform2X3.Translate,args:{dx:i.Ot.Var.Value,dy:i.Ot.Var.Value},returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsx)(s.p,{children:"Creates a translation transform."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Fn,{s:i.Ot.Glyph.Transform2X3.Rotate,args:{angle:i.Rx},returns:i.Ot.Glyph.Transform2X3}),"\n",(0,t.jsxs)(s.p,{children:["Creates a rotation transform. ",(0,t.jsx)(s.em,{children:"angle"})," is measured in radians, and the positive orientation is counter-clockwise."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.dx,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"X offset."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.dy,type:i.Ot.Var.Value}),"\n",(0,t.jsx)(s.p,{children:"Y offset."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.xx,type:i.Rx}),"\n",(0,t.jsx)(s.p,{children:"X scale."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.yx,type:i.Rx}),"\n",(0,t.jsx)(s.p,{children:'X shearing. Used by the "Scale10" coefficient in TrueType\'s `glyf`` table.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.xy,type:i.Rx}),"\n",(0,t.jsx)(s.p,{children:'Y shearing. Used by the "Scale01" coefficient in TrueType\'s `glyf`` table.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.yy,type:i.Rx}),"\n",(0,t.jsx)(s.p,{children:"Y scale."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.Transform2X3.scaledOffset,type:i.Vw.Maybe(i.O7)}),"\n",(0,t.jsx)(s.p,{children:"Whether the offset is scaled."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Enumeration ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.PointType})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.ck,{s:i.Ot.Glyph.PointType.Corner})," = 0"]}),"\n",(0,t.jsx)(s.p,{children:"This point is corner point."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.ck,{s:i.Ot.Glyph.PointType.Lead})," = 1"]}),"\n",(0,t.jsx)(s.p,{children:"This point is the first control point of a cubic Bezier curve."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.ck,{s:i.Ot.Glyph.PointType.Follow})," = 2"]}),"\n",(0,t.jsx)(s.p,{children:"This point is the second control point of a cubic Bezier curve."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(l.ck,{s:i.Ot.Glyph.PointType.Quad})," = 3"]}),"\n",(0,t.jsx)(s.p,{children:"This point is an off-curve control point in a quadratic contour, as in TrueType."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.PointRef})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointRef.geometry,type:i.Rx}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointRef.contour,type:i.Rx}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointRef.index,type:i.Rx}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.PointIDRef})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointIDRef.pointIndex,type:i.Rx}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.GlyphPointIDRef})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.GlyphPointIDRef.glyph,type:i.Ot.Glyph}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.GlyphPointIDRef.pointIndex,type:i.Rx}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Datatype ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.PointAttachment})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointAttachment.inner,type:i.Ot.Glyph.PointIDRef}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.Glyph.PointAttachment.outer,type:i.Ot.Glyph.PointIDRef}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{children:"Glyph Naming"}),"\n",(0,t.jsxs)(s.h3,{children:["Type ",(0,t.jsx)(l.Hf,{s:i.Ot.GlyphNamingSource})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.GlyphNamingSource.post,type:i.Vw.Maybe(i.Vw.Naming.Source(i.Ot.Glyph))}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.GlyphNamingSource.cff,type:i.Vw.Maybe(i.Vw.Naming.Source(i.Ot.Glyph))}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{readonly:!0,s:i.Ot.GlyphNamingSource.encoding,type:i.Vw.Maybe(i.Vw.Naming.IndexSource(i.Ot.Glyph))}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GlyphNamer})]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.GlyphNamer.nameGlyph,args:{source:i.Ot.GlyphNamingSource,gid:i.Rx,glyph:i.Ot.Glyph},returns:i.Z_}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Singleton ",(0,t.jsx)(l.Hf,{s:i.Ot.StandardGlyphNamer})]}),"\n",(0,t.jsxs)(s.p,{children:["The default glyph namer, implements ",(0,t.jsx)(l.R,{s:i.Ot.GlyphNamer}),"."]}),"\n",(0,t.jsxs)(s.h2,{children:["Glyph Stats (namespace ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Stats}),")"]}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.Glyph.Stats.BoundingBox})]}),"\n",(0,t.jsx)(s.h4,{children:"Constructor"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{ctor:!0,s:i.Ot.Glyph.Stats.BoundingBox.constructor,args:{xMin:i.Rx,xMax:i.Rx,yMin:i.Rx,yMax:i.Rx}}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Properties"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.Stats.BoundingBox.xMin,type:i.Rx}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.Stats.BoundingBox.xMax,type:i.Rx}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.Stats.BoundingBox.yMin,type:i.Rx}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.Nw,{s:i.Ot.Glyph.Stats.BoundingBox.yMax,type:i.Rx}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{children:"Static Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{static:!0,s:i.Ot.Glyph.Stats.BoundingBox.Blank,returns:i.Ot.Glyph.Stats.BoundingBox}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{children:["Geometry Utilities (namespace ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil}),")"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.GeometrySink("T")})]}),"\n",(0,t.jsx)(s.h4,{children:"Methods"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.GeometryUtil.GeometrySink.beginContour}),"\n",(0,t.jsx)(s.p,{children:"The callback when a contour begins."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.GeometryUtil.GeometrySink.addControlKnot,args:{knot:i.Ot.Glyph.Point}}),"\n",(0,t.jsx)(s.p,{children:"The callback when a control knot (point) is added."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.GeometryUtil.GeometrySink.endContour}),"\n",(0,t.jsx)(s.p,{children:"The callback when a contour ends."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(l.n$,{s:i.Ot.GeometryUtil.GeometrySink.getResult,returns:"T"}),"\n",(0,t.jsx)(s.p,{children:"The callback of returning value."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{children:["Interface ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.GeometrySinkClass("T")})]}),"\n",(0,t.jsxs)(s.p,{children:["Class that constructs ",(0,t.jsx)(l.R,{s:i.Ot.GeometryUtil.GeometrySink("T")})," instances."]}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.Flattener})]}),"\n",(0,t.jsxs)(s.p,{children:["Implements ",(0,t.jsx)(l.R,{s:i.Ot.GeometryUtil.GeometrySink((0,i.IX)((0,i.IX)(i.Ot.Glyph.Point)))})]}),"\n",(0,t.jsx)(s.p,{children:"A sink class to flatten the geometry to a contour list."}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.ListPoint})]}),"\n",(0,t.jsxs)(s.p,{children:["Implements ",(0,t.jsx)(l.R,{s:i.Ot.GeometryUtil.GeometrySink((0,i.IX)(i.Ot.Glyph.Point))})]}),"\n",(0,t.jsx)(s.p,{children:"A sink class to list the geometry's points"}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.GetBound})]}),"\n",(0,t.jsxs)(s.p,{children:["Implements ",(0,t.jsx)(l.R,{s:i.Ot.GeometryUtil.GeometrySink(i.Ot.Glyph.Stat.BoundingBox)})]}),"\n",(0,t.jsx)(s.p,{children:"A sink class to get the bounding box of a geometry"}),"\n",(0,t.jsxs)(s.h3,{children:["Class ",(0,t.jsx)(l.Hf,{s:i.Ot.GeometryUtil.CountPoint})]}),"\n",(0,t.jsxs)(s.p,{children:["Implements ",(0,t.jsx)(l.R,{s:i.Ot.GeometryUtil.GeometrySink(i.Rx)})]}),"\n",(0,t.jsx)(s.p,{children:"A sink class to count the geometry's points."}),"\n",(0,t.jsxs)(s.h3,{children:["Function ",(0,t.jsx)(l.Fn,{s:i.Ot.GeometryUtil.apply("T"),args:{cls:i.Ot.GeometryUtil.GeometrySinkClass("T"),geometries:(0,h.RF)((0,i.IX)(i.Ot.Glyph.Geometry))},returns:"T"})]}),"\n",(0,t.jsx)(s.p,{children:"Traverse the geometries and use the sink to collect data."})]})}s.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,Object.assign({},n,{children:(0,t.jsx)(c,n)}))}}},function(n){n.O(0,[774,834,888,179],(function(){return s=2341,n(n.s=s);var s}));var s=n.O();_N_E=s}]);
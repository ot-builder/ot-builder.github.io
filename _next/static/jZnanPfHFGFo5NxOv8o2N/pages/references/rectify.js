(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2zsx":function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"i",(function(){return c})),r.d(t,"d",(function(){return a})),r.d(t,"k",(function(){return l})),r.d(t,"b",(function(){return i})),r.d(t,"h",(function(){return o})),r.d(t,"j",(function(){return u})),r.d(t,"a",(function(){return d})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return b})),r.d(t,"f",(function(){return j}));var n=function(e){return{optional:e}},c=function(e){return{readonly:e}},a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{either:t}},l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{tuple:t}},i=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return{generic:e,args:r}},o=function(e,t){return{takes:e,returns:t}},u=function(e){return{object:e}},d=function(e,t){return{rawType:e,annotation:t}},s=function(e,t){return{operator:"extends",left:e,right:t}},b=function(e,t){return{operator:"=",left:e,right:t}},j=function(e,t){return{operator:"is",left:e,right:t}}},Mkan:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r("z3IF"),c=r("2Fjn"),a=r("mXGw"),l=r.n(a),i=r("/FXl"),o=r("I+gl"),u=r("Vp4n"),d=r("+3er"),s=r("2zsx"),b=(l.a.createElement,{}),j=o.a;function O(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(i.a)(j,Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"Namespace ",Object(i.a)(u.a,{s:d.d,mdxType:"Decl"})),Object(i.a)("h2",null,"Glyph Rectification"),Object(i.a)("h3",null,"Interface ",Object(i.a)(u.a,{s:d.d.GlyphRectifier,mdxType:"Decl"})),Object(i.a)("h4",null,"Methods"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.GlyphRectifier.glyph,args:{from:d.c.Glyph},returns:Object(s.d)(null,void 0,d.c.Glyph),mdxType:"Method"}))),Object(i.a)("h3",null,"Function ",Object(i.a)(u.b,{long:!0,s:d.d.rectifyFontGlyphs(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{rec:Object(s.a)(d.d.GlyphRectifier,"The Rectifier"),font:Object(s.a)(d.c.Font("GS"),"The font to process"),gsf:Object(s.a)(d.a.OrderStoreFactoryWithDefault(d.c.Glyph,"GS"),"Factory to create a glyph store")},returns:"void",mdxType:"Fn"})),Object(i.a)("h2",null,"Axis, Coordinate and Point Attachment Rectification"),Object(i.a)("h3",null,"Interface ",Object(i.a)(u.a,{s:d.d.AxisRectifier,mdxType:"Decl"})),Object(i.a)("h4",null,"Methods"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.AxisRectifier.dim,args:{from:d.c.Var.Dim},returns:Object(s.d)(null,void 0,d.c.Var.Dim),mdxType:"Method"})),Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.AxisRectifier.axis,args:{from:d.c.Fvar.Dim},returns:Object(s.d)(null,void 0,d.c.Fvar.Axis),mdxType:"Method"}))),Object(i.a)("h4",null,"Properties"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.d,{readonly:!0,s:d.d.AxisRectifier.addedAxes,type:Object(s.i)(Object(d.h)(d.c.Fvar.Axis)),mdxType:"Member"}))),Object(i.a)("h3",null,"Interface ",Object(i.a)(u.a,{s:d.d.CoordRectifier,mdxType:"Decl"})),Object(i.a)("h4",null,"Methods"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.CoordRectifier.coord,args:{from:d.c.Var.Value},returns:d.c.Var.Value,mdxType:"Method"})),Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.CoordRectifier.cv,args:{from:d.c.Var.Value},returns:d.c.Var.Value,mdxType:"Method"}))),Object(i.a)("h3",null,"Interface ",Object(i.a)(u.a,{s:d.d.PointAttachmentRectifier,mdxType:"Decl"})),Object(i.a)("h4",null,"Methods"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{long:!0,s:d.d.PointAttachmentRectifier.acceptOffset,args:{actual:Object(s.j)({x:d.c.Var.Value,y:d.c.Var.Value}),desired:Object(s.j)({x:d.c.Var.Value,y:d.c.Var.Value})},returns:Object(s.j)({x:d.i,y:d.i}),mdxType:"Method"}))),Object(i.a)("h4",null,"Properties"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.d,{readonly:!0,s:d.d.PointAttachmentRectifier.manner,type:d.d.PointAttachmentRectifyManner,mdxType:"Member"}))),Object(i.a)("h3",null,"Enumeration ",Object(i.a)(u.a,{s:d.d.PointAttachmentRectifyManner,mdxType:"Decl"})),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.c,{s:d.d.PointAttachmentRectifyManner.TrustAttachment,mdxType:"Item"})),Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.c,{s:d.d.PointAttachmentRectifyManner.TrustCoordinate,mdxType:"Item"}))),Object(i.a)("h3",null,"Function ",Object(i.a)(u.b,{long:!0,s:d.d.rectifyFontCoords(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{recAxes:Object(s.a)(d.d.AxisRectifier,"Axis rectifier"),recCoord:Object(s.a)(d.d.CoordRectifier,"Coordinate rectifier"),recPA:Object(s.a)(d.d.PointAttachmentRectifier,"Point Attachment rectifier"),font:Object(s.a)(d.c.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(i.a)("h2",null,"Visible Glyph Tracing"),Object(i.a)("h3",null,"Interface ",Object(i.a)(u.a,{s:d.d.GlyphTracer,mdxType:"Decl"})),Object(i.a)("h4",null,"Methods"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.GlyphTracer.has,args:{glyph:d.c.Glyph},returns:d.i,mdxType:"Method"})),Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.e,{s:d.d.GlyphTracer.add,args:{glyph:d.c.Glyph},returns:"void",mdxType:"Method"}))),Object(i.a)("h4",null,"Properties"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(u.d,{readonly:!0,s:d.d.GlyphTracer.size,type:d.l,mdxType:"Member"}))),Object(i.a)("h3",null,"Function ",Object(i.a)(u.b,{long:!0,s:d.d.traceGlyphs(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{tracer:Object(s.a)(d.d.GlyphTracer,"The glyph tracer"),font:Object(s.a)(d.c.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(i.a)("h3",null,"Function ",Object(i.a)(u.b,{long:!0,s:d.d.visibleGlyphsFromUnicodeSet(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{font:Object(s.a)(d.c.Font("GS"),"The font to process"),unicodeSet:Object(s.a)(Object(s.j)({has:Object(s.h)({u:d.l},d.i)}),"The Unicode inclusion detector")},returns:Object(d.m)(d.c.Glyph),mdxType:"Fn"})))}O.isMDXComponent=!0},duaN:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/rectify",function(){return r("Mkan")}])}},[["duaN",0,2,1,3]]]);
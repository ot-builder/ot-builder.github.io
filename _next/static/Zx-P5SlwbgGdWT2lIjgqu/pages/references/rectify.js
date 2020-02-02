(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2zsx":function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return j}));var r=function(e){return{optional:e}},c=function(e){return{readonly:e}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},l=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{generic:e,args:n}},o=function(e,t){return{takes:e,returns:t}},u=function(e){return{object:e}},d=function(e,t){return{rawType:e,annotation:t}},s=function(e,t){return{operator:"extends",left:e,right:t}},b=function(e,t){return{operator:"=",left:e,right:t}},j=function(e,t){return{operator:"is",left:e,right:t}}},Mkan:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("z3IF"),c=n("2Fjn"),a=n("mXGw"),i=n.n(a),l=n("/FXl"),o=n("I+gl"),u=n("Vp4n"),d=n("+3er"),s=n("2zsx"),b=(i.a.createElement,{}),j=o.a;function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.a)(j,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Namespace ",Object(l.a)(u.a,{s:d.d,mdxType:"Decl"})),Object(l.a)("h2",null,"Glyph Rectification"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.d.GlyphReferenceRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.GlyphReferenceRectifier.glyphRef,args:{from:d.c.Glyph},returns:Object(s.d)(null,void 0,d.c.Glyph),mdxType:"Method"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.d.rectifyFontGlyphReferences(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{rec:Object(s.a)(d.d.GlyphReferenceRectifier,"The Rectifier"),font:Object(s.a)(d.c.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Perform in-place rectification of ",Object(l.a)("inlineCode",{parentName:"p"},"font")," using a given ",Object(l.a)("inlineCode",{parentName:"p"},"Rectify.GlyphReferenceRectifier"),". The procedure will rectify all the glyph references, including the cross-references from the glyph geometries, ",Object(l.a)("strong",{parentName:"p"},"but not")," the glyph store itself."),Object(l.a)("h2",null,"Axis, Coordinate and Point Attachment Rectification"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.d.AxisRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.AxisRectifier.dim,args:{from:d.c.Var.Dim},returns:Object(s.d)(null,void 0,d.c.Var.Dim),mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.AxisRectifier.axis,args:{from:d.c.Fvar.Dim},returns:Object(s.d)(null,void 0,d.c.Fvar.Axis),mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.d.AxisRectifier.addedAxes,type:Object(s.i)(Object(d.h)(d.c.Fvar.Axis)),mdxType:"Member"}))),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.d.CoordRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.CoordRectifier.coord,args:{from:d.c.Var.Value},returns:d.c.Var.Value,mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.CoordRectifier.cv,args:{from:d.c.Var.Value},returns:d.c.Var.Value,mdxType:"Method"}))),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.d.PointAttachmentRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{long:!0,s:d.d.PointAttachmentRectifier.acceptOffset,args:{actual:Object(s.j)({x:d.c.Var.Value,y:d.c.Var.Value}),desired:Object(s.j)({x:d.c.Var.Value,y:d.c.Var.Value})},returns:Object(s.j)({x:d.i,y:d.i}),mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.d.PointAttachmentRectifier.manner,type:d.d.PointAttachmentRectifyManner,mdxType:"Member"}))),Object(l.a)("h3",null,"Enumeration ",Object(l.a)(u.a,{s:d.d.PointAttachmentRectifyManner,mdxType:"Decl"})),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.c,{s:d.d.PointAttachmentRectifyManner.TrustAttachment,mdxType:"Item"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.c,{s:d.d.PointAttachmentRectifyManner.TrustCoordinate,mdxType:"Item"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.d.rectifyFontCoords(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{recAxes:Object(s.a)(d.d.AxisRectifier,"Axis rectifier"),recCoord:Object(s.a)(d.d.CoordRectifier,"Coordinate rectifier"),recPA:Object(s.a)(d.d.PointAttachmentRectifier,"Point Attachment rectifier"),font:Object(s.a)(d.c.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("h2",null,"Visible Glyph Tracing"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.d.GlyphTracer,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.GlyphTracer.has,args:{glyph:d.c.Glyph},returns:d.i,mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.d.GlyphTracer.add,args:{glyph:d.c.Glyph},returns:"void",mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.d.GlyphTracer.size,type:d.l,mdxType:"Member"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.d.traceGlyphs(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{tracer:Object(s.a)(d.d.GlyphTracer,"The glyph tracer"),font:Object(s.a)(d.c.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.d.visibleGlyphsFromUnicodeSet(Object(s.e)("GS",d.a.OrderStore(d.c.Glyph))),args:{font:Object(s.a)(d.c.Font("GS"),"The font to process"),unicodeSet:Object(s.a)(Object(s.j)({has:Object(s.h)({u:d.l},d.i)}),"The Unicode inclusion detector")},returns:Object(d.m)(d.c.Glyph),mdxType:"Fn"})))}p.isMDXComponent=!0},duaN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/rectify",function(){return n("Mkan")}])}},[["duaN",1,2,0,3]]]);
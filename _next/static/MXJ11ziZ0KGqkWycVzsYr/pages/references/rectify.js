(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{Mkan:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("z3IF"),c=n("2Fjn"),a=n("mXGw"),i=n.n(a),l=n("/FXl"),o=n("/DYT"),u=n("uCIM"),d=n("hzWR"),b=n("q3Ca"),s=(i.a.createElement,{}),j=o.a;function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(l.a)(j,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Namespace ",Object(l.a)(u.a,{s:d.e,mdxType:"Decl"})),Object(l.a)("h2",null,"Glyph Reference Rectification"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.e.GlyphReferenceRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.GlyphReferenceRectifier.glyphRef,args:{from:d.d.Glyph},returns:Object(b.d)(null,void 0,d.d.Glyph),mdxType:"Method"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.e.rectifyFontGlyphReferences(Object(b.e)("GS",d.b.OrderStore(d.d.Glyph))),args:{rec:Object(b.a)(d.e.GlyphReferenceRectifier,"The Rectifier"),font:Object(b.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Perform in-place rectification of ",Object(l.a)("inlineCode",{parentName:"p"},"font")," using a given ",Object(l.a)("inlineCode",{parentName:"p"},"Rectify.GlyphReferenceRectifier"),". The procedure will rectify all the glyph references, including the cross-references from the glyph geometries, ",Object(l.a)("strong",{parentName:"p"},"but not")," the glyph store itself."),Object(l.a)("h2",null,"Axis, Coordinate and Point Attachment Rectification"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.e.AxisRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.AxisRectifier.dim,args:{from:d.d.Var.Dim},returns:Object(b.d)(null,void 0,d.d.Var.Dim),mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.AxisRectifier.axis,args:{from:d.d.Fvar.Dim},returns:Object(b.d)(null,void 0,d.d.Fvar.Axis),mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.e.AxisRectifier.addedAxes,type:Object(b.i)(Object(d.i)(d.d.Fvar.Axis)),mdxType:"Member"}))),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.e.CoordRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.CoordRectifier.coord,args:{from:d.d.Var.Value},returns:d.d.Var.Value,mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.CoordRectifier.cv,args:{from:d.d.Var.Value},returns:d.d.Var.Value,mdxType:"Method"}))),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.e.PointAttachmentRectifier,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{long:!0,s:d.e.PointAttachmentRectifier.acceptOffset,args:{actual:Object(b.j)({x:d.d.Var.Value,y:d.d.Var.Value}),desired:Object(b.j)({x:d.d.Var.Value,y:d.d.Var.Value})},returns:Object(b.j)({x:d.j,y:d.j}),mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.e.PointAttachmentRectifier.manner,type:d.e.PointAttachmentRectifyManner,mdxType:"Member"}))),Object(l.a)("h3",null,"Enumeration ",Object(l.a)(u.a,{s:d.e.PointAttachmentRectifyManner,mdxType:"Decl"})),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.c,{s:d.e.PointAttachmentRectifyManner.TrustAttachment,mdxType:"Item"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.c,{s:d.e.PointAttachmentRectifyManner.TrustCoordinate,mdxType:"Item"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.e.rectifyFontCoords(Object(b.e)("GS",d.b.OrderStore(d.d.Glyph))),args:{recAxes:Object(b.a)(d.e.AxisRectifier,"Axis rectifier"),recCoord:Object(b.a)(d.e.CoordRectifier,"Coordinate rectifier"),recPA:Object(b.a)(d.e.PointAttachmentRectifier,"Point Attachment rectifier"),font:Object(b.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("h2",null,"Visible Glyph Tracing"),Object(l.a)("h3",null,"Interface ",Object(l.a)(u.a,{s:d.e.GlyphTracer,mdxType:"Decl"})),Object(l.a)("h4",null,"Methods"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.GlyphTracer.has,args:{glyph:d.d.Glyph},returns:d.j,mdxType:"Method"})),Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.e,{s:d.e.GlyphTracer.add,args:{glyph:d.d.Glyph},returns:"void",mdxType:"Method"}))),Object(l.a)("h4",null,"Properties"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(u.d,{readonly:!0,s:d.e.GlyphTracer.size,type:d.m,mdxType:"Member"}))),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.e.traceGlyphs(Object(b.e)("GS",d.b.OrderStore(d.d.Glyph))),args:{tracer:Object(b.a)(d.e.GlyphTracer,"The glyph tracer"),font:Object(b.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(l.a)("h3",null,"Function ",Object(l.a)(u.b,{long:!0,s:d.e.visibleGlyphsFromUnicodeSet(Object(b.e)("GS",d.b.OrderStore(d.d.Glyph))),args:{font:Object(b.a)(d.d.Font("GS"),"The font to process"),unicodeSet:Object(b.a)(Object(b.j)({has:Object(b.h)({u:d.m},d.j)}),"The Unicode inclusion detector")},returns:Object(d.n)(d.d.Glyph),mdxType:"Fn"})))}p.isMDXComponent=!0},duaN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/rectify",function(){return n("Mkan")}])},q3Ca:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return o})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return j}));var r=function(e){return{optional:e}},c=function(e){return{readonly:e}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},l=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{generic:e,args:n}},o=function(e,t){return{takes:e,returns:t}},u=function(e){return{object:e}},d=function(e,t){return{rawType:e,annotation:t}},b=function(e,t){return{operator:"extends",left:e,right:t}},s=function(e,t){return{operator:"=",left:e,right:t}},j=function(e,t){return{operator:"is",left:e,right:t}}}},[["duaN",0,2,1,3]]]);
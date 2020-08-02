_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{Mkan:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("Fcif"),c=n("dV/x"),a=n("mXGw"),i=n.n(a),o=n("/FXl"),l=n("/DYT"),u=n("uCIM"),d=n("hzWR"),f=n("q3Ca"),s=(i.a.createElement,{}),b=l.a;function j(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.a)(b,Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",null,"Namespace ",Object(o.a)(u.a,{s:d.e,mdxType:"Decl"})),Object(o.a)("h2",null,"Glyph Reference Rectification"),Object(o.a)("h3",null,"Interface ",Object(o.a)(u.a,{s:d.e.GlyphReferenceRectifier,mdxType:"Decl"})),Object(o.a)("h4",null,"Methods"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{s:d.e.GlyphReferenceRectifier.glyphRef,args:{from:d.d.Glyph},returns:Object(f.d)(null,void 0,d.d.Glyph),mdxType:"Method"}))),Object(o.a)("h3",null,"Constant ",Object(o.a)(u.a,{s:d.e.IdGlyphRefRectifier,mdxType:"Decl"})," : ",Object(o.a)(u.g,{s:d.e.GlyphReferenceRectifier,mdxType:"R"})),Object(o.a)("p",null,"The identity (Nop) glyph reference rectifier."),Object(o.a)("h3",null,"Function ",Object(o.a)(u.b,{long:!0,s:d.e.rectifyFontGlyphReferences(Object(f.e)("GS",d.d.GlyphStore)),args:{rec:Object(f.a)(d.e.GlyphReferenceRectifier,"The Rectifier"),font:Object(f.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(o.a)("p",null,"Perform in-place rectification of ",Object(o.a)("inlineCode",{parentName:"p"},"font")," using a given ",Object(o.a)("inlineCode",{parentName:"p"},"Rectify.GlyphReferenceRectifier"),". The procedure will rectify all the glyph references, including the cross-references from the glyph geometries, ",Object(o.a)("strong",{parentName:"p"},"but not")," the glyph store itself."),Object(o.a)("h2",null,"Axis, Coordinate and Point Attachment Rectification"),Object(o.a)("h3",null,"Interface ",Object(o.a)(u.a,{s:d.e.AxisRectifier,mdxType:"Decl"})),Object(o.a)("h4",null,"Methods"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{s:d.e.AxisRectifier.dim,args:{from:d.d.Var.Dim},returns:Object(f.d)(null,void 0,d.d.Var.Dim),mdxType:"Method"})),Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{s:d.e.AxisRectifier.axis,args:{from:d.d.Fvar.Dim},returns:Object(f.d)(null,void 0,d.d.Fvar.Axis),mdxType:"Method"}))),Object(o.a)("h4",null,"Properties"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.d,{readonly:!0,s:d.e.AxisRectifier.addedAxes,type:Object(f.i)(Object(d.i)(d.d.Fvar.Axis)),mdxType:"Member"}))),Object(o.a)("h3",null,"Constant ",Object(o.a)(u.a,{s:d.e.IdAxisRectifier,mdxType:"Decl"})," : ",Object(o.a)(u.g,{s:d.e.AxisRectifier,mdxType:"R"})),Object(o.a)("p",null,"The identity (Nop) axis rectifier."),Object(o.a)("h3",null,"Interface ",Object(o.a)(u.a,{s:d.e.CoordRectifier,mdxType:"Decl"})),Object(o.a)("h4",null,"Methods"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{s:d.e.CoordRectifier.coord,args:{from:d.d.Var.Value},returns:d.d.Var.Value,mdxType:"Method"})),Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{s:d.e.CoordRectifier.cv,args:{from:d.d.Var.Value},returns:d.d.Var.Value,mdxType:"Method"}))),Object(o.a)("h3",null,"Constant ",Object(o.a)(u.a,{s:d.e.IdCoordRectifier,mdxType:"Decl"})," : ",Object(o.a)(u.g,{s:d.e.CoordRectifier,mdxType:"R"})),Object(o.a)("p",null,"The identity (Nop) coordinate rectifier."),Object(o.a)("h3",null,"Interface ",Object(o.a)(u.a,{s:d.e.PointAttachmentRectifier,mdxType:"Decl"})),Object(o.a)("h4",null,"Methods"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.e,{long:!0,s:d.e.PointAttachmentRectifier.acceptOffset,args:{actual:Object(f.j)({x:d.d.Var.Value,y:d.d.Var.Value}),desired:Object(f.j)({x:d.d.Var.Value,y:d.d.Var.Value})},returns:Object(f.j)({x:d.j,y:d.j}),mdxType:"Method"}))),Object(o.a)("h4",null,"Properties"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.d,{readonly:!0,s:d.e.PointAttachmentRectifier.manner,type:d.e.PointAttachmentRectifyManner,mdxType:"Member"}))),Object(o.a)("h3",null,"Enumeration ",Object(o.a)(u.a,{s:d.e.PointAttachmentRectifyManner,mdxType:"Decl"})),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.c,{s:d.e.PointAttachmentRectifyManner.TrustAttachment,mdxType:"Item"})),Object(o.a)("li",{parentName:"ul"},Object(o.a)(u.c,{s:d.e.PointAttachmentRectifyManner.TrustCoordinate,mdxType:"Item"}))),Object(o.a)("h3",null,"Constant ",Object(o.a)(u.a,{s:d.e.IdPointAttachmentRectifier,mdxType:"Decl"})," : ",Object(o.a)(u.g,{s:d.e.PointAttachmentRectifier,mdxType:"R"})),Object(o.a)("p",null,"The identity (Nop) point Attachment rectifier."),Object(o.a)("h3",null,"Function ",Object(o.a)(u.b,{long:!0,s:d.e.rectifyFontAxes(Object(f.e)("GS",d.d.GlyphStore)),args:{recAxes:Object(f.a)(d.e.AxisRectifier,"Axis rectifier"),font:Object(f.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(o.a)("h3",null,"Function ",Object(o.a)(u.b,{long:!0,s:d.e.rectifyFontCoords(Object(f.e)("GS",d.d.GlyphStore)),args:{recCoord:Object(f.a)(d.e.CoordRectifier,"Coordinate rectifier"),recPA:Object(f.a)(d.e.PointAttachmentRectifier,"Point Attachment rectifier"),font:Object(f.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),Object(o.a)("h2",null,"Run All Rectification at Once"),Object(o.a)("h3",null,"Function ",Object(o.a)(u.b,{long:!0,s:d.e.rectifyFont(Object(f.e)("GS",d.d.GlyphStore)),args:{recGlyphRef:Object(f.a)(d.e.GlyphReferenceRectifier,"Glyph reference rectifier"),recAxes:Object(f.a)(d.e.AxisRectifier,"Axis rectifier"),recCoord:Object(f.a)(d.e.CoordRectifier,"Coordinate rectifier"),recPA:Object(f.a)(d.e.PointAttachmentRectifier,"Point Attachment rectifier"),font:Object(f.a)(d.d.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})))}j.isMDXComponent=!0},duaN:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/rectify",function(){return n("Mkan")}])},q3Ca:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"j",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return b}));var r=function(e){return{optional:e}},c=function(e){return{readonly:e}},a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},o=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{generic:e,args:n}},l=function(e,t){return{takes:e,returns:t}},u=function(e){return{object:e}},d=function(e,t){return{rawType:e,annotation:t}},f=function(e,t){return{operator:"extends",left:e,right:t}},s=function(e,t){return{operator:"=",left:e,right:t}},b=function(e,t){return{operator:"is",left:e,right:t}}}},[["duaN",0,2,1,4,3]]]);
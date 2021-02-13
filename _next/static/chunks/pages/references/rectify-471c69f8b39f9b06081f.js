_N_E=(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{9557:function(e,t,r){"use strict";r.d(t,{jt:function(){return i},OT:function(){return n},wE:function(){return l},bc:function(){return o},l2:function(){return a},pi:function(){return c},IM:function(){return s},Fp:function(){return p},l7:function(){return f},yA:function(){return u},lo:function(){return h}});var i=function(e){return{optional:e}},n=function(e){return{readonly:e}},l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{either:t}},o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{tuple:t}},a=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return{generic:e,args:r}},c=function(e,t){return{takes:e,returns:t}},s=function(e){return{object:e}},p=function(e,t){return{rawType:e,annotation:t}},f=function(e,t){return{operator:"extends",left:e,right:t}},u=function(e,t){return{operator:"=",left:e,right:t}},h=function(e,t){return{operator:"is",left:e,right:t}}},2269:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var i=r(3450),n=r(8781),l=(r(7378),r(5318)),o=r(2529),a=r(5974),c=r(3969),s=r(9557);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={},h=o.A;function T(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,l.kt)(h,f(f(f({},u),r),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Namespace ",(0,l.kt)(a.Hf,{s:c.Tl,mdxType:"Decl"})),(0,l.kt)("h2",null,"Perform Rectification over the Font"),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.inPlaceRectifyFont((0,s.l7)("GS",c.Ot.GlyphStore)),args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),font:(0,s.Fp)(c.Ot.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),(0,l.kt)("p",null,"Perform in-place rectification of ",(0,l.kt)("inlineCode",{parentName:"p"},"font")," using a given rectifiers. The procedure will rectify all the glyph references, including the cross-references from the glyph geometries, ",(0,l.kt)("strong",{parentName:"p"},"but will not change")," the object identity of the glyph store and glyph objects within it."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.inPlaceRectifyFontAxes((0,s.l7)("GS",c.Ot.GlyphStore)),args:{recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),font:(0,s.Fp)(c.Ot.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.inPlaceRectifyFontCoords((0,s.l7)("GS",c.Ot.GlyphStore)),args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),font:(0,s.Fp)(c.Ot.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.inPlaceRectifyFontGlyphReferences((0,s.l7)("GS",c.Ot.GlyphStore)),args:{rec:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"The Rectifier"),font:(0,s.Fp)(c.Ot.Font("GS"),"The font to process")},returns:"void",mdxType:"Fn"})),(0,l.kt)("h2",null,"Perform Rectification over Font Structures"),(0,l.kt)("p",null,"The functions below provides rectification over fonts' inner structures."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.inPlaceRectifyGlyphStore((0,s.l7)("GS",c.Ot.GlyphStore)),args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),gs:(0,s.Fp)("GS","The glyph store to process")},returns:"GS",mdxType:"Fn"})),(0,l.kt)("p",null,"Perform in-place rectification of a glyph store using a given rectifiers. The procedure will rectify all the glyph references, including the cross-references from the glyph geometries, ",(0,l.kt)("strong",{parentName:"p"},"but will not change")," the object identity of the glyph store and glyph objects within it."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyCffTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Cff.Table,"The table to process")},returns:c.Ot.Cff.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Cff.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyCvtTable,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Cvt.Table,"The table to process")},returns:c.Ot.Cvt.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Cvt.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyBaseTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),table:(0,s.Fp)(c.Ot.Base.Table,"The table to process")},returns:c.Ot.Base.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Base.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyGdefTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),table:(0,s.Fp)(c.Ot.Gdef.Table,"The table to process")},returns:c.Ot.Gdef.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Gdef.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyGsubTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),table:(0,s.Fp)(c.Ot.Gsub.Table,"The table to process")},returns:c.Ot.Gsub.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Gsub.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyGposTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),recPA:(0,s.Fp)(c.Tl.PointAttachmentRectifier,"Point Attachment rectifier"),table:(0,s.Fp)(c.Ot.Gpos.Table,"The table to process")},returns:c.Ot.Gpos.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Gpos.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyMathTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Math.Table,"The table to process")},returns:c.Ot.Math.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Math.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyCmapTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),table:(0,s.Fp)(c.Ot.Cmap.Table,"The table to process")},returns:c.Ot.Cmap.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Cmap.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyFvarTable,args:{recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),table:(0,s.Fp)(c.Ot.Fvar.Table,"The table to process")},returns:c.Ot.Fvar.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Fvar.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyAvarTable,args:{recAxes:(0,s.Fp)(c.Tl.AxisRectifier,"Axis rectifier"),table:(0,s.Fp)(c.Ot.Avar.Table,"The table to process")},returns:c.Ot.Avar.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Avar.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyHheaTable,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Hhea.Table,"The table to process")},returns:c.Ot.Hhea.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Hhea.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyVheaTable,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Vhea.Table,"The table to process")},returns:c.Ot.Vhea.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Vhea.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyGaspTable,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Gasp.Table,"The table to process")},returns:c.Ot.Gasp.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Gasp.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyOs2Table,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Os2.Table,"The table to process")},returns:c.Ot.Os2.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Os2.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyPostTable,args:{recCoord:(0,s.Fp)(c.Tl.CoordRectifier,"Coordinate rectifier"),table:(0,s.Fp)(c.Ot.Post.Table,"The table to process")},returns:c.Ot.Post.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.Post.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h3",null,"Function ",(0,l.kt)(a.Fn,{long:!0,s:c.Tl.rectifyExtPrivateTable,args:{recGlyphRef:(0,s.Fp)(c.Tl.GlyphReferenceRectifier,"Glyph reference rectifier"),table:(0,s.Fp)(c.Ot.XPrv.Table,"The table to process")},returns:c.Ot.XPrv.Table,mdxType:"Fn"})),(0,l.kt)("p",null,"Perform rectification for ",(0,l.kt)(a.R,{s:c.Ot.XPrv.Table,mdxType:"R"}),". Returns a new table with properties updated (no table-specific data structures are shared with the original)."),(0,l.kt)("h2",null,"Glyph Reference Rectifier"),(0,l.kt)("h3",null,"Interface ",(0,l.kt)(a.Hf,{s:c.Tl.GlyphReferenceRectifier,mdxType:"Decl"})),(0,l.kt)("h4",null,"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{s:c.Tl.GlyphReferenceRectifier.glyphRef,args:{from:c.Ot.Glyph},returns:(0,s.wE)(null,void 0,c.Ot.Glyph),mdxType:"Method"}))),(0,l.kt)("h3",null,"Constant ",(0,l.kt)(a.Hf,{s:c.Tl.IdGlyphRefRectifier,mdxType:"Decl"})," : ",(0,l.kt)(a.R,{s:c.Tl.GlyphReferenceRectifier,mdxType:"R"})),(0,l.kt)("p",null,"The identity (Nop) glyph reference rectifier."),(0,l.kt)("h2",null,"Axis, Coordinate and Point Attachment Rectifier"),(0,l.kt)("h3",null,"Interface ",(0,l.kt)(a.Hf,{s:c.Tl.AxisRectifier,mdxType:"Decl"})),(0,l.kt)("h4",null,"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{s:c.Tl.AxisRectifier.dim,args:{from:c.Ot.Var.Dim},returns:(0,s.wE)(null,void 0,c.Ot.Var.Dim),mdxType:"Method"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{s:c.Tl.AxisRectifier.axis,args:{from:c.Ot.Fvar.Dim},returns:(0,s.wE)(null,void 0,c.Ot.Fvar.Axis),mdxType:"Method"}))),(0,l.kt)("h4",null,"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.Nw,{readonly:!0,s:c.Tl.AxisRectifier.addedAxes,type:(0,s.OT)((0,c.IX)(c.Ot.Fvar.Axis)),mdxType:"Member"}))),(0,l.kt)("h3",null,"Constant ",(0,l.kt)(a.Hf,{s:c.Tl.IdAxisRectifier,mdxType:"Decl"})," : ",(0,l.kt)(a.R,{s:c.Tl.AxisRectifier,mdxType:"R"})),(0,l.kt)("p",null,"The identity (Nop) axis rectifier."),(0,l.kt)("h3",null,"Interface ",(0,l.kt)(a.Hf,{s:c.Tl.CoordRectifier,mdxType:"Decl"})),(0,l.kt)("h4",null,"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{s:c.Tl.CoordRectifier.coord,args:{from:c.Ot.Var.Value},returns:c.Ot.Var.Value,mdxType:"Method"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{s:c.Tl.CoordRectifier.cv,args:{from:c.Ot.Var.Value},returns:c.Ot.Var.Value,mdxType:"Method"}))),(0,l.kt)("h3",null,"Constant ",(0,l.kt)(a.Hf,{s:c.Tl.IdCoordRectifier,mdxType:"Decl"})," : ",(0,l.kt)(a.R,{s:c.Tl.CoordRectifier,mdxType:"R"})),(0,l.kt)("p",null,"The identity (Nop) coordinate rectifier."),(0,l.kt)("h3",null,"Interface ",(0,l.kt)(a.Hf,{s:c.Tl.PointAttachmentRectifier,mdxType:"Decl"})),(0,l.kt)("h4",null,"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.n$,{long:!0,s:c.Tl.PointAttachmentRectifier.acceptOffset,args:{actual:(0,s.IM)({x:c.Ot.Var.Value,y:c.Ot.Var.Value}),desired:(0,s.IM)({x:c.Ot.Var.Value,y:c.Ot.Var.Value})},returns:(0,s.IM)({x:c.O7,y:c.O7}),mdxType:"Method"}))),(0,l.kt)("h4",null,"Properties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.Nw,{readonly:!0,s:c.Tl.PointAttachmentRectifier.manner,type:c.Tl.PointAttachmentRectifyManner,mdxType:"Member"}))),(0,l.kt)("h3",null,"Enumeration ",(0,l.kt)(a.Hf,{s:c.Tl.PointAttachmentRectifyManner,mdxType:"Decl"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.ck,{s:c.Tl.PointAttachmentRectifyManner.TrustAttachment,mdxType:"Item"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(a.ck,{s:c.Tl.PointAttachmentRectifyManner.TrustCoordinate,mdxType:"Item"}))),(0,l.kt)("h3",null,"Constant ",(0,l.kt)(a.Hf,{s:c.Tl.IdPointAttachmentRectifier,mdxType:"Decl"})," : ",(0,l.kt)(a.R,{s:c.Tl.PointAttachmentRectifier,mdxType:"R"})),(0,l.kt)("p",null,"The identity (Nop) point Attachment rectifier."))}T.isMDXComponent=!0},999:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/rectify",function(){return r(2269)}])}},0,[[999,272,774,351,942]]]);
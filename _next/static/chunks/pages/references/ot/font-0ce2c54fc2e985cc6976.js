(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{9557:function(t,e,n){"use strict";n.d(e,{jt:function(){return r},OT:function(){return p},wE:function(){return a},bc:function(){return l},l2:function(){return o},pi:function(){return i},IM:function(){return u},Fp:function(){return m},l7:function(){return s},yA:function(){return y},lo:function(){return k}});var r=function(t){return{optional:t}},p=function(t){return{readonly:t}},a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return{either:e}},l=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return{tuple:e}},o=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return{generic:t,args:n}},i=function(t,e){return{takes:t,returns:e}},u=function(t){return{object:t}},m=function(t,e){return{rawType:t,annotation:e}},s=function(t,e){return{operator:"extends",left:t,right:e}},y=function(t,e){return{operator:"=",left:t,right:e}},k=function(t,e){return{operator:"is",left:t,right:e}}},3919:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return O}});var r=n(3450),p=n(8781),a=(n(7378),n(5318)),l=n(2529),o=n(5974),i=n(3969),u=n(9557);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={},k=l.A;function O(t){var e=t.components,n=(0,p.Z)(t,["components"]);return(0,a.kt)(k,s(s(s({},y),n),{},{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,(0,a.kt)(o.R,{s:i.Ot.Font,mdxType:"R"})),(0,a.kt)("h2",null,"Font Type"),(0,a.kt)("h3",null,"Datatype ",(0,a.kt)(o.Hf,{s:i.Ot.Font((0,u.yA)((0,u.l7)("GS",i.Vw.OrderStore(i.Ot.Glyph)),i.Vw.OrderStore(i.Ot.Glyph))),mdxType:"Decl"})),(0,a.kt)("h4",null,"Type Parameter Requirements"),(0,a.kt)("p",null,"The type ",(0,a.kt)(o.R,{s:i.Ot.Font,mdxType:"R"})," is generic, and it supports any glyph store types (",(0,a.kt)(o.R,{s:"GS",mdxType:"R"}),") that can decide an order of glyphs (",(0,a.kt)(o.R,{s:i.Vw.Order(i.Ot.Glyph),mdxType:"R"}),") by implementing ",(0,a.kt)(o.R,{s:i.Vw.OrderStore(i.Ot.Glyph),mdxType:"R"}),"."),(0,a.kt)("p",null,"A pre-supplied implementation is ",(0,a.kt)(o.R,{s:i.Ot.ListGlyphStore,mdxType:"R"}),". The factory creating ",(0,a.kt)(o.R,{s:i.Ot.ListGlyphStore,mdxType:"R"}),"'s is ",(0,a.kt)(o.R,{s:i.Ot.ListGlyphStoreFactory,mdxType:"R"}),"."),(0,a.kt)("p",null,"When the ",(0,a.kt)(o.R,{s:"GS",mdxType:"R"})," parameter is absent, it will default to ",(0,a.kt)(o.R,{s:i.Vw.OrderStore(i.Ot.Glyph),mdxType:"R"}),"."),(0,a.kt)("p",null,"An ",(0,a.kt)(o.R,{s:i.Ot.Font("GS"),mdxType:"R"})," could be either ",(0,a.kt)(o.R,{s:i.Ot.Font.Cff("GS"),mdxType:"R"})," or ",(0,a.kt)(o.R,{s:i.Ot.Font.Ttf("GS"),mdxType:"R"}),", depending on whether the ",(0,a.kt)("code",null,"cff")," property exists. When present, the font is considered CFF. Utility functions ",(0,a.kt)(o.R,{s:i.Ot.Font.isCff,mdxType:"R"})," and ",(0,a.kt)(o.R,{s:i.Ot.Font.isTtf,mdxType:"R"})," could be used to detect the types."),(0,a.kt)("h4",null,"Members"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Glyph store"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.glyphs,type:"GS",mdxType:"Member"}),(0,a.kt)("p",{parentName:"li"},"The glyph store.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CFF-specific"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.cff,type:i.Ot.Cff.Table,mdxType:"Member"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TrueType-specific"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.fpgm,type:(0,u.jt)(i.Ot.Fpgm.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.prep,type:(0,u.jt)(i.Ot.Prep.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.cvt,type:(0,u.jt)(i.Ot.Cvt.Table),mdxType:"Member"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Metadata"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.head,type:i.Ot.Head.Table,mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.maxp,type:i.Ot.Maxp.Table,mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.fvar,type:(0,u.jt)(i.Ot.Fvar.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.post,type:(0,u.jt)(i.Ot.Post.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.os2,type:(0,u.jt)(i.Ot.Os2.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.hhea,type:(0,u.jt)(i.Ot.MetricHead.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.vhea,type:(0,u.jt)(i.Ot.MetricHead.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.avar,type:(0,u.jt)(i.Ot.Avar.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.gasp,type:(0,u.jt)(i.Ot.Gasp.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.vdmx,type:(0,u.jt)(i.Ot.Vdmx.Table),mdxType:"Member"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Naming"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.name,type:(0,u.jt)(i.Ot.Name.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.meta,type:(0,u.jt)(i.Ot.Meta.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.stat,type:(0,u.jt)(i.Ot.Stat.Table),mdxType:"Member"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Encoding"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.cmap,type:(0,u.jt)(i.Ot.Cmap.Table),mdxType:"Member"})))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenType Layout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.gdef,type:(0,u.jt)(i.Ot.Gdef.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.gsub,type:(0,u.jt)(i.Ot.Gsub.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.gpos,type:(0,u.jt)(i.Ot.Gpos.Table),mdxType:"Member"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(o.Nw,{s:i.Ot.Font.base,type:(0,u.jt)(i.Ot.Base.Table),mdxType:"Member"}))))),(0,a.kt)("h3",null,"Type ",(0,a.kt)(o.Hf,{s:i.Ot.Font.Cff((0,u.yA)((0,u.l7)("GS",i.Vw.OrderStore(i.Ot.Glyph)),i.Vw.OrderStore(i.Ot.Glyph))),mdxType:"Decl"})),(0,a.kt)("p",null,"CFF variant of ",(0,a.kt)(o.R,{s:i.Ot.Font("GS"),mdxType:"R"}),". The property ",(0,a.kt)("inlineCode",{parentName:"p"},"cff")," is guaranteed to be present."),(0,a.kt)("h3",null,"Type ",(0,a.kt)(o.Hf,{s:i.Ot.Font.Ttf((0,u.yA)((0,u.l7)("GS",i.Vw.OrderStore(i.Ot.Glyph)),i.Vw.OrderStore(i.Ot.Glyph))),mdxType:"Decl"})),(0,a.kt)("p",null,"TrueType variant of ",(0,a.kt)(o.R,{s:i.Ot.Font("GS"),mdxType:"R"}),". Properties ",(0,a.kt)("inlineCode",{parentName:"p"},"fpgm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"prep")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cvt")," may present."),(0,a.kt)("h2",null,"Utility functions"),(0,a.kt)("h3",null,"Function ",(0,a.kt)(o.Fn,{s:i.Ot.Font.isCff((0,u.l7)("GS",i.Vw.Order(i.Ot.Glyph))),args:{font:i.Ot.Font("GS")},returns:(0,u.lo)("font",i.Ot.Font.Cff("GS")),mdxType:"Fn"})),(0,a.kt)("p",null,"Detects whether ",(0,a.kt)("inlineCode",{parentName:"p"},"font")," is a CFF font."),(0,a.kt)("h3",null,"Function ",(0,a.kt)(o.Fn,{s:i.Ot.Font.isTtf((0,u.l7)("GS",i.Vw.Order(i.Ot.Glyph))),args:{font:i.Ot.Font("GS")},returns:(0,u.lo)("font",i.Ot.Font.Ttf("GS")),mdxType:"Fn"})),(0,a.kt)("p",null,"Detects whether ",(0,a.kt)("inlineCode",{parentName:"p"},"font")," is a TrueType font."))}O.isMDXComponent=!0},2466:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/ot/font",function(){return n(3919)}])}},0,[[2466,272,774,351,942]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{H7nJ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("Fcif"),r=n("dV/x"),c=n("mXGw"),o=n.n(c),l=n("/FXl"),i=n("/DYT"),p=n("uCIM"),s=n("hzWR"),u=n("q3Ca"),b=(o.a.createElement,{}),h=i.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)(h,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Namespace ",Object(l.a)(p.a,{s:s.a,mdxType:"Decl"})),Object(l.a)("p",null,"The namespace ",Object(l.a)(p.g,{s:s.a,mdxType:"R"})," contains programmatical implementations of various CLI functionality."),Object(l.a)("h2",null,"Consolidation"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.consolidateFont(Object(u.e)("GS",s.d.GlyphStore)),args:{font:s.d.Font("GS")},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Consolidates the font, including:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Cleanup all the data references to glyphs not present in font's glyph set."),Object(l.a)("li",{parentName:"ul"},"Cleanup fonts' OTL tables, like merging identical feature records under same language.")),Object(l.a)("h2",null,"Garbage Collection"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.gcFont(Object(u.e)("GS",s.d.GlyphStore)),args:{font:s.d.Font("GS"),gsf:s.d.GlyphstoreFactory("GS")},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Reduces the ",Object(l.a)("em",{parentName:"p"},"font"),"'s glyph set to all glyphs accessible."),Object(l.a)("h2",null,"Subsetting"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.subsetFont(Object(u.e)("GS",s.d.GlyphStore)),args:{font:s.d.Font("GS"),text:Object(s.l)(s.p),gsf:s.d.GlyphstoreFactory("GS")},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Reduces the ",Object(l.a)("em",{parentName:"p"},"font"),"'s glyph set to all glyphs accessible from ",Object(l.a)("em",{parentName:"p"},"text"),"."),Object(l.a)("h2",null,"Font Merging"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.mergeFont(Object(u.e)("GS1",s.d.GlyphStore),Object(u.e)("GS2",s.d.GlyphStore)),args:{basis:s.d.Font("GS1"),override:s.d.Font("GS2"),gsf:s.d.GlyphstoreFactory("GS1"),options:Object(u.g)(s.a.MergeOptions)},mdxType:"Fn"})),Object(l.a)("p",null,"Create a combined font ",Object(l.a)("em",{parentName:"p"},"override")," into font ",Object(l.a)("em",{parentName:"p"},"basis"),", which will have a new glyph store and new ",Object(l.a)("inlineCode",{parentName:"p"},"cmap"),", ",Object(l.a)("inlineCode",{parentName:"p"},"GSUB"),", ",Object(l.a)("inlineCode",{parentName:"p"},"GPOS")," and ",Object(l.a)("inlineCode",{parentName:"p"},"GDEF")," tables. The remaining tables will be shared with ",Object(l.a)("em",{parentName:"p"},"basis"),"."),Object(l.a)("h3",null,"DataType ",Object(l.a)(p.a,{s:s.a.MergeOptions,mdxType:"Decl"})),Object(l.a)("h4",null,"Members"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(p.d,{s:s.a.MergeOptions.perferOverride,type:Object(u.g)(s.k),mdxType:"Member"}),Object(l.a)("p",{parentName:"li"},"  When set, the character mapping and OTL will prefer the mapping in ",Object(l.a)("em",{parentName:"p"},"override")," over ",Object(l.a)("em",{parentName:"p"},"basis"),"."))),Object(l.a)("h2",null,"Changing UPM"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.rebaseFont(Object(u.e)("GS",s.d.GlyphStore)),args:{font:s.d.Font("GS"),newUpm:s.n},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Reduces the ",Object(l.a)("em",{parentName:"p"},"font"),"'s units-per-em value to ",Object(l.a)("em",{parentName:"p"},"newUpm"),"."),Object(l.a)("h2",null,"Unify Design Space"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.unifyDesignSpaces(Object(u.e)("GS",s.d.GlyphStore)),args:{fonts:Object(s.j)(s.d.Font("GS"))},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Unify the design space of the input when they are compatible; Otherwise raise error."),Object(l.a)("h2",null,"Glyph Set Sharing"),Object(l.a)("h3",null,"Function ",Object(l.a)(p.b,{s:s.a.shareGlyphSet(Object(u.e)("GS",s.d.GlyphStore)),args:{fonts:Object(s.j)(s.d.Font("GS")),gsf:s.d.GlyphstoreFactory("GS"),options:Object(u.g)(s.a.ShareGlyphSetOptions)},returns:"void",mdxType:"Fn"})),Object(l.a)("p",null,"Unify the glyph set by glyph shape. This procedure is usually used when creating TTC files from TTF files."),Object(l.a)("h3",null,"DataType ",Object(l.a)(p.a,{s:s.a.ShareGlyphSetOptions,mdxType:"Decl"})),Object(l.a)("h4",null,"Members"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)(p.d,{s:s.a.ShareGlyphSetOptions.unifyGlyphList,type:Object(u.g)(s.k),mdxType:"Member"}),Object(l.a)("p",{parentName:"li"},"  Whether to make the glyph list the same. When set to false, only the glyph references will be unified."))))}O.isMDXComponent=!0},"n+y7":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/cli-proc",function(){return n("H7nJ")}])},q3Ca:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"k",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return i})),n.d(t,"j",(function(){return p})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return h}));var a=function(e){return{optional:e}},r=function(e){return{readonly:e}},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},l=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return{generic:e,args:n}},i=function(e,t){return{takes:e,returns:t}},p=function(e){return{object:e}},s=function(e,t){return{rawType:e,annotation:t}},u=function(e,t){return{operator:"extends",left:e,right:t}},b=function(e,t){return{operator:"=",left:e,right:t}},h=function(e,t){return{operator:"is",left:e,right:t}}}},[["n+y7",0,2,1,4,3]]]);
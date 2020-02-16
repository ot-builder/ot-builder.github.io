(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/qY7":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/font-io",function(){return n("xv0S")}])},q3Ca:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"k",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return p})),n.d(t,"j",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return m}));var a=function(e){return{optional:e}},r=function(e){return{readonly:e}},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},i=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return{generic:e,args:n}},p=function(e,t){return{takes:e,returns:t}},l=function(e){return{object:e}},b=function(e,t){return{rawType:e,annotation:t}},u=function(e,t){return{operator:"extends",left:e,right:t}},d=function(e,t){return{operator:"=",left:e,right:t}},m=function(e,t){return{operator:"is",left:e,right:t}}},xv0S:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("z3IF"),r=n("2Fjn"),o=n("mXGw"),c=n.n(o),i=n("/FXl"),p=n("/DYT"),l=n("uCIM"),b=n("hzWR"),u=n("q3Ca"),d=(c.a.createElement,{}),m=p.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(m,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"Namespace ",Object(i.a)(l.a,{s:b.c,mdxType:"Decl"})),Object(i.a)("h2",null,"IO Procedures"),Object(i.a)("h3",null,Object(i.a)(l.b,{long:!0,s:b.c.readFont(Object(u.e)("GS",b.b.Order(b.d.Glyph))),args:{sfnt:Object(u.a)(b.d.Sfnt,"SFNT to parse"),gsf:Object(u.a)(b.b.OrderStoreFactoryWithDefault(b.d.Glyph,"GS"),"Factory to create a glyph store"),config:Object(u.g)(Object(u.a)(b.c.FontIoConfig,"IO configuration"))},returns:b.d.Font("GS"),mdxType:"Fn"})),Object(i.a)("p",null,"Creates a ",Object(i.a)(l.g,{s:b.d.Font,mdxType:"R"})," form a ",Object(i.a)(l.g,{s:b.d.Sfnt,mdxType:"R"}),". The paraemter ",Object(i.a)("em",{parentName:"p"},Object(i.a)("inlineCode",{parentName:"em"},"gsf"))," is used to provide the glyph store factory to create the glyph store. When using with ",Object(i.a)(l.g,{s:b.d.ListGlyphStore,mdxType:"R"}),", ",Object(i.a)(l.g,{s:b.d.ListGlyphStoreFactory,mdxType:"R"})," is recommended to be provided for ",Object(i.a)("em",{parentName:"p"},Object(i.a)("inlineCode",{parentName:"em"},"gsf"))," parameter."),Object(i.a)("h3",null,Object(i.a)(l.b,{long:!0,s:b.c.writeFont(Object(u.e)("GS",b.b.Order(b.d.Glyph))),args:{font:Object(u.a)(b.d.Font("GS"),"The font to write"),config:Object(u.g)(Object(u.a)(b.c.FontIoConfig,"IO configuration"))},returns:b.d.Sfnt,mdxType:"Fn"})),Object(i.a)("p",null,"Creates a ",Object(i.a)(l.g,{s:b.d.Sfnt,mdxType:"R"})," form a ",Object(i.a)(l.g,{s:b.d.Font,mdxType:"R"}),"."),Object(i.a)("h3",null,Object(i.a)(l.b,{s:b.c.readSfntOtf,args:{buffer:"Buffer"},returns:b.d.Sfnt,mdxType:"Fn"})),Object(i.a)("p",null,"Creates a ",Object(i.a)(l.g,{s:b.d.Sfnt,mdxType:"R"})," form a ",Object(i.a)(l.g,{s:"Buffer",mdxType:"R"}),"."),Object(i.a)("h3",null,Object(i.a)(l.b,{s:b.c.writeSfntOtf,args:{sfnt:b.d.Sfnt},returns:"Buffer",mdxType:"Fn"})),Object(i.a)("p",null,"Creates a ",Object(i.a)(l.g,{s:"Buffer",mdxType:"R"})," form a ",Object(i.a)(l.g,{s:b.d.Sfnt,mdxType:"R"}),"."),Object(i.a)("h2",null,"IO Configuration"),Object(i.a)("h3",null,"Datatype ",Object(i.a)(l.a,{s:b.c.FontIoConfig,mdxType:"Decl"})),Object(i.a)("h4",null,"Members"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.c,{optional:!0,s:b.c.FontIoConfig.glyphStore,mdxType:"Item"}),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.glyphStore.statOs2XAvgCharWidth,type:b.j,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  Whether to recalculate ",Object(i.a)("inlineCode",{parentName:"p"},"xAvgCharWidth")," property in ",Object(i.a)("inlineCode",{parentName:"p"},"OS/2")," table when writing fonts. Defaults to ",Object(i.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.c,{optional:!0,s:b.c.FontIoConfig.cff,mdxType:"Item"}),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.cff.doLocalOptimization,type:b.j,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  Whether to perform local optimization when writing the ",Object(i.a)("inlineCode",{parentName:"p"},"CFF"),"/",Object(i.a)("inlineCode",{parentName:"p"},"CFF2")," table. Defaults to ",Object(i.a)("inlineCode",{parentName:"p"},"true"),".")),Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.cff.doGlobalOptimization,type:b.j,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  Whether to perform global optimization when writing the ",Object(i.a)("inlineCode",{parentName:"p"},"CFF"),"/",Object(i.a)("inlineCode",{parentName:"p"},"CFF2")," table. Defaults to ",Object(i.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.c,{optional:!0,s:b.c.FontIoConfig.ttf,mdxType:"Item"}),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.ttf.gvarOptimizeTolerance,type:b.j,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  The error tolerance when writing the ",Object(i.a)("inlineCode",{parentName:"p"},"gvar")," table. Defaults to ",Object(i.a)("inlineCode",{parentName:"p"},"1/128"),". With higher tolerance the ",Object(i.a)("inlineCode",{parentName:"p"},"gvar")," table writer would do more aggressive IUP optimization.")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.c,{optional:!0,s:b.c.FontIoConfig.encoding,mdxType:"Item"}),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.encoding.statOs2UnicodeRanges,type:b.j,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  Whether to recalculate ",Object(i.a)("inlineCode",{parentName:"p"},"ulUnicodeRange1")," ... ",Object(i.a)("inlineCode",{parentName:"p"},"ulUnicodeRange4")," property in ",Object(i.a)("inlineCode",{parentName:"p"},"OS/2")," table when writing fonts. Defaults to ",Object(i.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.c,{optional:!0,s:b.c.FontIoConfig.glyphNaming,mdxType:"Item"}),":",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)(l.d,{optional:!0,s:b.c.FontIoConfig.glyphNaming.namer,type:b.d.GlyphNamer,mdxType:"Member"}),Object(i.a)("p",{parentName:"li"},"  The glyph namer. Defaults to ",Object(i.a)(l.g,{s:b.d.StandardOtGlyphNamer,mdxType:"R"}),"."))))))}O.isMDXComponent=!0}},[["/qY7",1,2,0,3]]]);
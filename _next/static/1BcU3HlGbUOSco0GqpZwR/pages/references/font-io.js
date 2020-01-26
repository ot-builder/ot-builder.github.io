(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/qY7":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/font-io",function(){return n("xv0S")}])},"2zsx":function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return p})),n.d(t,"j",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return O}));var a=function(e){return{optional:e}},r=function(e){return{readonly:e}},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{either:t}},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return{tuple:t}},c=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return{generic:e,args:n}},p=function(e,t){return{takes:e,returns:t}},l=function(e){return{object:e}},b=function(e,t){return{rawType:e,annotation:t}},u=function(e,t){return{operator:"extends",left:e,right:t}},m=function(e,t){return{operator:"=",left:e,right:t}},O=function(e,t){return{operator:"is",left:e,right:t}}},xv0S:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n("z3IF"),r=n("2Fjn"),o=n("mXGw"),i=n.n(o),c=n("/FXl"),p=n("I+gl"),l=n("Vp4n"),b=n("+3er"),u=n("2zsx"),m=(i.a.createElement,{}),O=p.a;function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.a)(O,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"Namespace ",Object(c.a)(l.a,{s:b.b,mdxType:"Decl"})),Object(c.a)("h2",null,"IO Procedures"),Object(c.a)("h3",null,Object(c.a)(l.b,{long:!0,s:b.b.readFont(Object(u.e)("GS",b.a.Order(b.c.Glyph))),args:{sfnt:Object(u.a)(b.c.Sfnt,"SFNT to parse"),gsf:Object(u.a)(b.a.OrderStoreFactoryWithDefault(b.c.Glyph,"GS"),"Factory to create a glyph store"),config:Object(u.g)(Object(u.a)(b.b.FontIoConfig,"IO configuration"))},returns:b.c.Font("GS"),mdxType:"Fn"})),Object(c.a)("p",null,"Creates a ",Object(c.a)(l.g,{s:b.c.Font,mdxType:"R"})," form a ",Object(c.a)(l.g,{s:b.c.Sfnt,mdxType:"R"}),". The paraemter ",Object(c.a)("em",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"em"},"gsf"))," is used to provide the glyph store factory to create the glyph store. When using with ",Object(c.a)(l.g,{s:b.c.ListGlyphStore,mdxType:"R"}),", ",Object(c.a)(l.g,{s:b.c.ListGlyphStoreFactory,mdxType:"R"})," is recommended to be provided for ",Object(c.a)("em",{parentName:"p"},Object(c.a)("inlineCode",{parentName:"em"},"gsf"))," parameter."),Object(c.a)("h3",null,Object(c.a)(l.b,{long:!0,s:b.b.writeFont(Object(u.e)("GS",b.a.Order(b.c.Glyph))),args:{font:Object(u.a)(b.c.Font("GS"),"The font to write"),config:Object(u.g)(Object(u.a)(b.b.FontIoConfig,"IO configuration"))},returns:b.c.Sfnt,mdxType:"Fn"})),Object(c.a)("p",null,"Creates a ",Object(c.a)(l.g,{s:b.c.Sfnt,mdxType:"R"})," form a ",Object(c.a)(l.g,{s:b.c.Font,mdxType:"R"}),"."),Object(c.a)("h3",null,Object(c.a)(l.b,{s:b.b.readSfntOtf,args:{buffer:"Buffer"},returns:b.c.Sfnt,mdxType:"Fn"})),Object(c.a)("p",null,"Creates a ",Object(c.a)(l.g,{s:b.c.Sfnt,mdxType:"R"})," form a ",Object(c.a)(l.g,{s:"Buffer",mdxType:"R"}),"."),Object(c.a)("h3",null,Object(c.a)(l.b,{s:b.b.writeSfntOtf,args:{sfnt:b.c.Sfnt},returns:"Buffer",mdxType:"Fn"})),Object(c.a)("p",null,"Creates a ",Object(c.a)(l.g,{s:"Buffer",mdxType:"R"})," form a ",Object(c.a)(l.g,{s:b.c.Sfnt,mdxType:"R"}),"."),Object(c.a)("h2",null,"IO Configuration"),Object(c.a)("h3",null,"Datatype ",Object(c.a)(l.a,{s:b.b.FontIoConfig,mdxType:"Decl"})),Object(c.a)("h4",null,"Members"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.c,{optional:!0,s:b.b.FontIoConfig.glyphStore,mdxType:"Item"}),":",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.glyphStore.statOs2XAvgCharWidth,type:b.i,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  Whether to recalculate ",Object(c.a)("inlineCode",{parentName:"p"},"xAvgCharWidth")," property in ",Object(c.a)("inlineCode",{parentName:"p"},"OS/2")," table when writing fonts. Defaults to ",Object(c.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.c,{optional:!0,s:b.b.FontIoConfig.cff,mdxType:"Item"}),":",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.cff.doLocalOptimization,type:b.i,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  Whether to perform local optimization when writing the ",Object(c.a)("inlineCode",{parentName:"p"},"CFF"),"/",Object(c.a)("inlineCode",{parentName:"p"},"CFF2")," table. Defaults to ",Object(c.a)("inlineCode",{parentName:"p"},"true"),".")),Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.cff.doGlobalOptimization,type:b.i,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  Whether to perform global optimization when writing the ",Object(c.a)("inlineCode",{parentName:"p"},"CFF"),"/",Object(c.a)("inlineCode",{parentName:"p"},"CFF2")," table. Defaults to ",Object(c.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.c,{optional:!0,s:b.b.FontIoConfig.ttf,mdxType:"Item"}),":",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.ttf.gvarOptimizeTolerance,type:b.i,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  The error tolerance when writing the ",Object(c.a)("inlineCode",{parentName:"p"},"gvar")," table. Defaults to ",Object(c.a)("inlineCode",{parentName:"p"},"1/128"),". With higher tolerance the ",Object(c.a)("inlineCode",{parentName:"p"},"gvar")," table writer would do more aggressive IUP optimization.")))),Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.c,{optional:!0,s:b.b.FontIoConfig.encoding,mdxType:"Item"}),":",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.encoding.statOs2UnicodeRanges,type:b.i,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  Whether to recalculate ",Object(c.a)("inlineCode",{parentName:"p"},"ulUnicodeRange1")," ... ",Object(c.a)("inlineCode",{parentName:"p"},"ulUnicodeRange4")," property in ",Object(c.a)("inlineCode",{parentName:"p"},"OS/2")," table when writing fonts. Defaults to ",Object(c.a)("inlineCode",{parentName:"p"},"true"),".")))),Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.c,{optional:!0,s:b.b.FontIoConfig.glyphNaming,mdxType:"Item"}),":",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},Object(c.a)(l.d,{optional:!0,s:b.b.FontIoConfig.glyphNaming.namer,type:b.c.GlyphNamer,mdxType:"Member"}),Object(c.a)("p",{parentName:"li"},"  The glyph namer. Defaults to ",Object(c.a)(l.g,{s:b.c.StandardOtGlyphNamer,mdxType:"R"}),"."))))))}f.isMDXComponent=!0}},[["/qY7",0,2,1,3]]]);
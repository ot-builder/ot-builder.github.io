(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{9932:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/font-io",function(){return t(9391)}])},9391:function(e,n,t){"use strict";t.r(n);var s=t(4246),r=t(1670),i=t(4604),o=t(8391),l=t(6092),c=t(8263);let a=i.A;function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",em:"em",code:"code",h4:"h4",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{children:["Namespace ",(0,s.jsx)(o.Hf,{s:l.L3})]}),"\n",(0,s.jsx)(n.h2,{children:"IO Procedures"}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{long:!0,s:l.L3.readFont((0,c.l7)("GS",l.Vw.Order(l.Ot.Glyph))),args:{sfnt:(0,c.Fp)(l.Ot.Sfnt,"SFNT to parse"),gsf:(0,c.Fp)(l.Vw.OrderStoreFactoryWithDefault(l.Ot.Glyph,"GS"),"Factory to create a glyph store"),config:(0,c.jt)((0,c.Fp)(l.L3.FontIoConfig,"IO configuration"))},returns:l.Ot.Font("GS")})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:l.Ot.Font})," form a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt}),". The parameter ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"gsf"})})," is used to provide the glyph store factory to create the glyph store. When using with ",(0,s.jsx)(o.R,{s:l.Ot.ListGlyphStore}),", ",(0,s.jsx)(o.R,{s:l.Ot.ListGlyphStoreFactory})," is recommended to be provided for ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"gsf"})})," parameter."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{long:!0,s:l.L3.writeFont((0,c.l7)("GS",l.Vw.Order(l.Ot.Glyph))),args:{font:(0,c.Fp)(l.Ot.Font("GS"),"The font to write"),config:(0,c.jt)((0,c.Fp)(l.L3.FontIoConfig,"IO configuration"))},returns:l.Ot.Sfnt})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt})," form a ",(0,s.jsx)(o.R,{s:l.Ot.Font}),"."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.readSfntOtf,args:{buffer:"Buffer"},returns:l.Ot.Sfnt})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt})," form a ",(0,s.jsx)(o.R,{s:"Buffer"}),"."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.writeSfntOtf,args:{sfnt:l.Ot.Sfnt},returns:"Buffer"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:"Buffer"})," form a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt}),"."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.writeSfntOtfFromTableSlices,args:{sfnt:l.L3.TableSliceCollection},returns:"Buffer"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:"Buffer"})," form a ",(0,s.jsx)(o.R,{s:l.Ot.TableSliceCollection}),"."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.readSfntTtc,args:{buffer:"Buffer"},returns:(0,l.IX)(l.Ot.Sfnt)})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt})," array form a ",(0,s.jsx)(o.R,{s:"Buffer"})," representing a TTC file."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.writeSfntTtc,args:{sfnt:(0,l.IX)(l.Ot.Sfnt)},returns:"Buffer"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a TTC file ",(0,s.jsx)(o.R,{s:"Buffer"})," form a ",(0,s.jsx)(o.R,{s:l.Ot.Sfnt})," array."]}),"\n",(0,s.jsx)(n.h3,{children:(0,s.jsx)(o.Fn,{s:l.L3.writeSfntTtcFromTableSlices,args:{sfnt:(0,l.IX)(l.Ot.TableSliceCollection)},returns:"Buffer"})}),"\n",(0,s.jsxs)(n.p,{children:["Creates a TTC file ",(0,s.jsx)(o.R,{s:"Buffer"})," form a ",(0,s.jsx)(o.R,{s:l.L3.TableSliceCollection})," array."]}),"\n",(0,s.jsx)(n.h2,{children:"Table Slice Collection"}),"\n",(0,s.jsxs)(n.h3,{children:["Datatype ",(0,s.jsx)(o.Hf,{s:l.L3.TableSliceCollection})]}),"\n",(0,s.jsx)(n.h4,{children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{readonly:!0,s:l.L3.TableSliceCollection.version,type:l.Rx}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{s:l.L3.TableSliceCollection.tables,type:(0,l.UI)(l.Vp,l.L3.TableSlice)}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{children:["Datatype ",(0,s.jsx)(o.Hf,{s:l.L3.TableSlice})]}),"\n",(0,s.jsx)(n.h4,{children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{s:l.L3.TableSlice.data,type:"Buffer"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{s:l.L3.TableSlice.start,type:l.Rx}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{s:l.L3.TableSlice.length,type:l.Rx}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"IO Configuration"}),"\n",(0,s.jsxs)(n.h3,{children:["Datatype ",(0,s.jsx)(o.Hf,{s:l.L3.FontIoConfig})]}),"\n",(0,s.jsx)(n.h4,{children:"Members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.glyphStore}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.glyphStore.statOs2XAvgCharWidth,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether to recalculate ",(0,s.jsx)(n.code,{children:"xAvgCharWidth"})," property in ",(0,s.jsx)(n.code,{children:"OS/2"})," table when writing fonts. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.cff}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.cff.doLocalOptimization,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether to perform local optimization when writing the ",(0,s.jsx)(n.code,{children:"CFF"}),"/",(0,s.jsx)(n.code,{children:"CFF2"})," table. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.cff.doGlobalOptimization,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether to perform global optimization when writing the ",(0,s.jsx)(n.code,{children:"CFF"}),"/",(0,s.jsx)(n.code,{children:"CFF2"})," table. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.ttf}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.ttf.gvarOptimizeTolerance,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["The error tolerance when writing the ",(0,s.jsx)(n.code,{children:"gvar"})," table. Defaults to ",(0,s.jsx)(n.code,{children:"1/128"}),". With higher tolerance the ",(0,s.jsx)(n.code,{children:"gvar"})," table writer would do more aggressive IUP optimization."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.ttf.gvarForceProduceGVD,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["When building ",(0,s.jsx)(n.code,{children:"gvar"}),", force production of glyph variation data, even if the glyph has no variation."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.ttf.gvarForceZeroGapsBetweenGVD,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["When building ",(0,s.jsx)(n.code,{children:"gvar"}),", force a 4-byte zero gap between each glyph variation data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.encoding}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.encoding.statOs2UnicodeRanges,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether to recalculate ",(0,s.jsx)(n.code,{children:"ulUnicodeRange1"})," ... ",(0,s.jsx)(n.code,{children:"ulUnicodeRange4"})," property in ",(0,s.jsx)(n.code,{children:"OS/2"})," table when writing fonts. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.encoding.forceCmapSubtableFormatToBePresent,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether to force a ",(0,s.jsx)(n.code,{children:"cmap"})," format 4 subtable to be present even if it is empty or non-buildable (i.e. when all characters are mapped to exactly the same glyph). Under those situations, a “stub” ",(0,s.jsx)(n.code,{children:"cmap"})," format 4 subtable containing no mapping will be created. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.glyphNaming}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.glyphNaming.namer,type:l.Ot.GlyphNamer}),"\n",(0,s.jsxs)(n.p,{children:["The glyph namer. Defaults to ",(0,s.jsx)(o.R,{s:l.Ot.StandardOtGlyphNamer}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.layout}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.layout.gdefWriteTrick,type:l.Rx}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.layout.lookupWriteTricks,type:(0,l.UI)(l.Ot.GsubGpos.LookupProp,l.Rx)}),"\n",(0,s.jsxs)(n.p,{children:["Specific options to control writing behavior when writing ",(0,s.jsx)(n.code,{children:"GDEF"})," table, and ",(0,s.jsx)(n.code,{children:"GSUB"})," / ",(0,s.jsx)(n.code,{children:"GPOS"})," lookups, to provide platform-specific optimizations. The number is a flag-field and could be assigned as:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x0001"}),": Avoid lookup being lifted as an extension lookup;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x0002"}),": Force single substitution and single position lookups to form one single subtable;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x0004"}),": Force lookups to use flat (format 1) coverage table;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x0008"}),": Force lookups to use coverage tables and class-def tables with less items instead of smaller footprint;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x0010"}),": Force contextual lookups to become chaining (could be used to workaround certain Apple shaping engine's bugs);"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.extPrivate}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.extPrivate.processExtPrivateTable,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether process the Extensible Privates Table (",(0,s.jsx)(n.code,{children:"XPRV"}),"). Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(o.ck,{optional:!0,s:l.L3.FontIoConfig.vttPrivate}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.vttPrivate.processVttPrivateTables,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether process the VTT private data tables (TSI-tables). Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.vttPrivate.recalculatePseudoInstructions,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether recalculate composite glyphs’ pseudo-instructions. Defaults to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.Nw,{optional:!0,s:l.L3.FontIoConfig.generateDummyDigitalSignature,type:l.O7}),"\n",(0,s.jsxs)(n.p,{children:["Whether generate an 8-byte dummy digital signature (",(0,s.jsx)(n.code,{children:"DSIG"})," table) to the final SFNT."]}),"\n"]}),"\n"]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(_createMdxContent,e)}))}},8263:function(e,n,t){"use strict";t.d(n,{Fp:function(){return annot},IM:function(){return record},OT:function(){return readonly},RF:function(){return rest},bc:function(){return tuple},jt:function(){return optional},l2:function(){return app},l7:function(){return extend},lo:function(){return guard},pi:function(){return pi},wE:function(){return either},yA:function(){return defaultTo}});let optional=e=>({optional:e}),rest=e=>({rest:e}),readonly=e=>({readonly:e}),either=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return{either:n}},tuple=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return{tuple:n}},app=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];return{generic:e,args:t}},pi=(e,n)=>({takes:e,returns:n}),record=e=>({object:e}),annot=(e,n)=>({rawType:e,annotation:n}),extend=(e,n)=>({operator:"extends",left:e,right:n}),defaultTo=(e,n)=>({operator:"=",left:e,right:n}),guard=(e,n)=>({operator:"is",left:e,right:n})}},function(e){e.O(0,[774,398,888,179],function(){return e(e.s=9932)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{9932:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/references/font-io",function(){return t(1938)}])},4234:function(n,e,t){"use strict";t.d(e,{Fp:function(){return d},IM:function(){return h},OT:function(){return i},RF:function(){return r},bc:function(){return l},jt:function(){return s},l2:function(){return c},l7:function(){return x},lo:function(){return j},pi:function(){return a},wE:function(){return o},yA:function(){return f}});var s=function(n){return{optional:n}},r=function(n){return{rest:n}},i=function(n){return{readonly:n}},o=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return{either:e}},l=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return{tuple:e}},c=function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];return{generic:n,args:t}},a=function(n,e){return{takes:n,returns:e}},h=function(n){return{object:n}},d=function(n,e){return{rawType:n,annotation:e}},x=function(n,e){return{operator:"extends",left:n,right:e}},f=function(n,e){return{operator:"=",left:n,right:e}},j=function(n,e){return{operator:"is",left:n,right:e}}},1938:function(n,e,t){"use strict";t.r(e);var s=t(4246),r=t(9790),i=t(4017),o=t(5307),l=t(4234),c=r.A;function a(n){var e=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",em:"em",code:"code",h4:"h4",ul:"ul",li:"li"},n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{children:["Namespace ",(0,s.jsx)(i.Hf,{s:o.L3})]}),"\n",(0,s.jsx)(e.h2,{children:"IO Procedures"}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{long:!0,s:o.L3.readFont((0,l.l7)("GS",o.Vw.Order(o.Ot.Glyph))),args:{sfnt:(0,l.Fp)(o.Ot.Sfnt,"SFNT to parse"),gsf:(0,l.Fp)(o.Vw.OrderStoreFactoryWithDefault(o.Ot.Glyph,"GS"),"Factory to create a glyph store"),config:(0,l.jt)((0,l.Fp)(o.L3.FontIoConfig,"IO configuration"))},returns:o.Ot.Font("GS")})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:o.Ot.Font})," form a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt}),". The parameter ",(0,s.jsx)(e.em,{children:(0,s.jsx)(e.code,{children:"gsf"})})," is used to provide the glyph store factory to create the glyph store. When using with ",(0,s.jsx)(i.R,{s:o.Ot.ListGlyphStore}),", ",(0,s.jsx)(i.R,{s:o.Ot.ListGlyphStoreFactory})," is recommended to be provided for ",(0,s.jsx)(e.em,{children:(0,s.jsx)(e.code,{children:"gsf"})})," parameter."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{long:!0,s:o.L3.writeFont((0,l.l7)("GS",o.Vw.Order(o.Ot.Glyph))),args:{font:(0,l.Fp)(o.Ot.Font("GS"),"The font to write"),config:(0,l.jt)((0,l.Fp)(o.L3.FontIoConfig,"IO configuration"))},returns:o.Ot.Sfnt})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt})," form a ",(0,s.jsx)(i.R,{s:o.Ot.Font}),"."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.readSfntOtf,args:{buffer:"Buffer"},returns:o.Ot.Sfnt})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt})," form a ",(0,s.jsx)(i.R,{s:"Buffer"}),"."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.writeSfntOtf,args:{sfnt:o.Ot.Sfnt},returns:"Buffer"})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:"Buffer"})," form a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt}),"."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.writeSfntOtfFromTableSlices,args:{sfnt:o.L3.TableSliceCollection},returns:"Buffer"})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:"Buffer"})," form a ",(0,s.jsx)(i.R,{s:o.Ot.TableSliceCollection}),"."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.readSfntTtc,args:{buffer:"Buffer"},returns:(0,o.IX)(o.Ot.Sfnt)})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt})," array form a ",(0,s.jsx)(i.R,{s:"Buffer"})," representing a TTC file."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.writeSfntTtc,args:{sfnt:(0,o.IX)(o.Ot.Sfnt)},returns:"Buffer"})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a TTC file ",(0,s.jsx)(i.R,{s:"Buffer"})," form a ",(0,s.jsx)(i.R,{s:o.Ot.Sfnt})," array."]}),"\n",(0,s.jsx)(e.h3,{children:(0,s.jsx)(i.Fn,{s:o.L3.writeSfntTtcFromTableSlices,args:{sfnt:(0,o.IX)(o.Ot.TableSliceCollection)},returns:"Buffer"})}),"\n",(0,s.jsxs)(e.p,{children:["Creates a TTC file ",(0,s.jsx)(i.R,{s:"Buffer"})," form a ",(0,s.jsx)(i.R,{s:o.L3.TableSliceCollection})," array."]}),"\n",(0,s.jsx)(e.h2,{children:"Table Slice Collection"}),"\n",(0,s.jsxs)(e.h3,{children:["Datatype ",(0,s.jsx)(i.Hf,{s:o.L3.TableSliceCollection})]}),"\n",(0,s.jsx)(e.h4,{children:"Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{readonly:!0,s:o.L3.TableSliceCollection.version,type:o.Rx}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{s:o.L3.TableSliceCollection.tables,type:(0,o.UI)(o.Vp,o.L3.TableSlice)}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{children:["Datatype ",(0,s.jsx)(i.Hf,{s:o.L3.TableSlice})]}),"\n",(0,s.jsx)(e.h4,{children:"Properties"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{s:o.L3.TableSlice.data,type:"Buffer"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{s:o.L3.TableSlice.start,type:o.Rx}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{s:o.L3.TableSlice.length,type:o.Rx}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{children:"IO Configuration"}),"\n",(0,s.jsxs)(e.h3,{children:["Datatype ",(0,s.jsx)(i.Hf,{s:o.L3.FontIoConfig})]}),"\n",(0,s.jsx)(e.h4,{children:"Members"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.glyphStore}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.glyphStore.statOs2XAvgCharWidth,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether to recalculate ",(0,s.jsx)(e.code,{children:"xAvgCharWidth"})," property in ",(0,s.jsx)(e.code,{children:"OS/2"})," table when writing fonts. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.cff}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.cff.doLocalOptimization,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether to perform local optimization when writing the ",(0,s.jsx)(e.code,{children:"CFF"}),"/",(0,s.jsx)(e.code,{children:"CFF2"})," table. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.cff.doGlobalOptimization,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether to perform global optimization when writing the ",(0,s.jsx)(e.code,{children:"CFF"}),"/",(0,s.jsx)(e.code,{children:"CFF2"})," table. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.ttf}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.ttf.gvarOptimizeTolerance,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["The error tolerance when writing the ",(0,s.jsx)(e.code,{children:"gvar"})," table. Defaults to ",(0,s.jsx)(e.code,{children:"1/128"}),". With higher tolerance the ",(0,s.jsx)(e.code,{children:"gvar"})," table writer would do more aggressive IUP optimization."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.ttf.gvarForceProduceGVD,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["When building ",(0,s.jsx)(e.code,{children:"gvar"}),", force production of glyph variation data, even if the glyph has no variation."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.ttf.gvarForceZeroGapsBetweenGVD,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["When building ",(0,s.jsx)(e.code,{children:"gvar"}),", force a 4-byte zero gap between each glyph variation data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.encoding}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.encoding.statOs2UnicodeRanges,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether to recalculate ",(0,s.jsx)(e.code,{children:"ulUnicodeRange1"})," ... ",(0,s.jsx)(e.code,{children:"ulUnicodeRange4"})," property in ",(0,s.jsx)(e.code,{children:"OS/2"})," table when writing fonts. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.encoding.forceCmapSubtableFormatToBePresent,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether to force a ",(0,s.jsx)(e.code,{children:"cmap"})," format 4 subtable to be present even if it is empty or non-buildable (i.e. when all characters are mapped to exactly the same glyph). Under those situations, a \u201cstub\u201d ",(0,s.jsx)(e.code,{children:"cmap"})," format 4 subtable containing no mapping will be created. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.glyphNaming}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.glyphNaming.namer,type:o.Ot.GlyphNamer}),"\n",(0,s.jsxs)(e.p,{children:["The glyph namer. Defaults to ",(0,s.jsx)(i.R,{s:o.Ot.StandardOtGlyphNamer}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.layout}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.layout.gdefWriteTrick,type:o.Rx}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.layout.lookupWriteTricks,type:(0,o.UI)(o.Ot.GsubGpos.LookupProp,o.Rx)}),"\n",(0,s.jsxs)(e.p,{children:["Specific options to control writing behavior when writing ",(0,s.jsx)(e.code,{children:"GDEF"})," table, and ",(0,s.jsx)(e.code,{children:"GSUB"})," / ",(0,s.jsx)(e.code,{children:"GPOS"})," lookups, to provide platform-specific optimizations. The number is a flag-field and could be assigned as:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0x0001"}),": Avoid lookup being lifted as an extension lookup;"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0x0002"}),": Force single substitution and single position lookups to form one single subtable;"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0x0004"}),": Force lookups to use flat (format 1) coverage table;"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0x0008"}),": Force lookups to use coverage tables and class-def tables with less items instead of smaller footprint;"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"0x0010"}),": Force contextual lookups to become chaining (could be used to workaround certain Apple shaping engine's bugs);"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.extPrivate}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.extPrivate.processExtPrivateTable,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether process the Extensible Privates Table (",(0,s.jsx)(e.code,{children:"XPRV"}),"). Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(i.ck,{optional:!0,s:o.L3.FontIoConfig.vttPrivate}),":"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.vttPrivate.processVttPrivateTables,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether process the VTT private data tables (TSI-tables). Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.vttPrivate.recalculatePseudoInstructions,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether recalculate composite glyphs\u2019 pseudo-instructions. Defaults to ",(0,s.jsx)(e.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(i.Nw,{optional:!0,s:o.L3.FontIoConfig.generateDummyDigitalSignature,type:o.O7}),"\n",(0,s.jsxs)(e.p,{children:["Whether generate an 8-byte dummy digital signature (",(0,s.jsx)(e.code,{children:"DSIG"})," table) to the final SFNT."]}),"\n"]}),"\n"]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,Object.assign({},n,{children:(0,s.jsx)(a,n)}))}}},function(n){n.O(0,[774,834,888,179],(function(){return e=9932,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
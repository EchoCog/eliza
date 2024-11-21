"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[3911],{52519:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>t,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"interfaces/ITranscriptionService","title":"ITranscriptionService","description":"@ai16z/eliza v0.1.3 / ITranscriptionService","source":"@site/api/interfaces/ITranscriptionService.md","sourceDirName":"interfaces","slug":"/interfaces/ITranscriptionService","permalink":"/eliza/api/interfaces/ITranscriptionService","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ITextGenerationService","permalink":"/eliza/api/interfaces/ITextGenerationService"},"next":{"title":"IVideoService","permalink":"/eliza/api/interfaces/IVideoService"}}');var s=r(74848),c=r(28453);const d={},l="Interface: ITranscriptionService",t={},a=[{value:"Extends",id:"extends",level:2},{value:"Accessors",id:"accessors",level:2},{value:"serviceType",id:"servicetype",level:3},{value:"Get Signature",id:"get-signature",level:4},{value:"Returns",id:"returns",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"initialize()",id:"initialize",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getInstance()",id:"getinstance",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"transcribeAttachment()",id:"transcribeattachment",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"transcribeAttachmentLocally()",id:"transcribeattachmentlocally",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"transcribe()",id:"transcribe",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"transcribeLocally()",id:"transcribelocally",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/",children:"@ai16z/eliza v0.1.3"})," / ITranscriptionService"]}),"\n",(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"interface-itranscriptionservice",children:"Interface: ITranscriptionService"})}),"\n",(0,s.jsx)(i.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"accessors",children:"Accessors"}),"\n",(0,s.jsx)(i.h3,{id:"servicetype",children:"serviceType"}),"\n",(0,s.jsx)(i.h4,{id:"get-signature",children:"Get Signature"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"get"})," ",(0,s.jsx)(i.strong,{children:"serviceType"}),"(): ",(0,s.jsx)(i.a,{href:"/eliza/api/enumerations/ServiceType",children:(0,s.jsx)(i.code,{children:"ServiceType"})})]}),"\n"]}),"\n",(0,s.jsx)(i.h5,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/eliza/api/enumerations/ServiceType",children:(0,s.jsx)(i.code,{children:"ServiceType"})})}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#serviceType-1",children:(0,s.jsx)(i.code,{children:"serviceType"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L580",children:"packages/core/src/types.ts:580"})}),"\n",(0,s.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(i.h3,{id:"initialize",children:"initialize()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"abstract"})," ",(0,s.jsx)(i.strong,{children:"initialize"}),"(",(0,s.jsx)(i.code,{children:"runtime"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Add abstract initialize method that must be implemented by derived classes"}),"\n",(0,s.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"runtime"}),": ",(0,s.jsx)(i.a,{href:"/eliza/api/interfaces/IAgentRuntime",children:(0,s.jsx)(i.code,{children:"IAgentRuntime"})})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service",children:(0,s.jsx)(i.code,{children:"Service"})}),".",(0,s.jsx)(i.a,{href:"/eliza/api/classes/Service#initialize",children:(0,s.jsx)(i.code,{children:"initialize"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L585",children:"packages/core/src/types.ts:585"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"getinstance",children:"getInstance()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"getInstance"}),"(): ",(0,s.jsx)(i.a,{href:"/eliza/api/interfaces/ITranscriptionService",children:(0,s.jsx)(i.code,{children:"ITranscriptionService"})})]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"/eliza/api/interfaces/ITranscriptionService",children:(0,s.jsx)(i.code,{children:"ITranscriptionService"})})}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L665",children:"packages/core/src/types.ts:665"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"transcribeattachment",children:"transcribeAttachment()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"transcribeAttachment"}),"(",(0,s.jsx)(i.code,{children:"audioBuffer"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"audioBuffer"}),": ",(0,s.jsx)(i.code,{children:"ArrayBuffer"})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L666",children:"packages/core/src/types.ts:666"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"transcribeattachmentlocally",children:"transcribeAttachmentLocally()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"transcribeAttachmentLocally"}),"(",(0,s.jsx)(i.code,{children:"audioBuffer"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"audioBuffer"}),": ",(0,s.jsx)(i.code,{children:"ArrayBuffer"})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L667",children:"packages/core/src/types.ts:667"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"transcribe",children:"transcribe()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"transcribe"}),"(",(0,s.jsx)(i.code,{children:"audioBuffer"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"audioBuffer"}),": ",(0,s.jsx)(i.code,{children:"ArrayBuffer"})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L670",children:"packages/core/src/types.ts:670"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"transcribelocally",children:"transcribeLocally()"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"transcribeLocally"}),"(",(0,s.jsx)(i.code,{children:"audioBuffer"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"audioBuffer"}),": ",(0,s.jsx)(i.code,{children:"ArrayBuffer"})]}),"\n",(0,s.jsx)(i.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"string"}),">"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/ai16z/eliza/blob/main/packages/core/src/types.ts#L671",children:"packages/core/src/types.ts:671"})})]})}function o(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>l});var n=r(96540);const s={},c=n.createContext(s);function d(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);
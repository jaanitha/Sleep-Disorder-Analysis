"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_code-view-shared_components_files-search_FileResultsList_tsx"],{87160:(e,t,r)=>{r.d(t,{V:()=>WebWorker});let WebWorker=class WebWorker{set onmessage(e){this.worker.onmessage=e}postMessage(e){this.worker.postMessage(e)}terminate(){this.worker.terminate()}constructor(e,t){try{this.worker=new Worker(e)}catch(e){console.warn("Web workers are not available. Please enable web workers to benefit from the improved performance."),this.worker=new MainThreadWorker(t)}}};let MainThreadWorker=class MainThreadWorker{async postMessage(e){if(this.terminated)return;let t={data:this.job({data:e})};this.onmessage?.(t)}terminate(){this.terminated=!0}constructor(e){this.job=e,this.terminated=!1}}},88808:(e,t,r)=>{r.r(t),r.d(t,{FileResultRow:()=>$,default:()=>D});var a=r(48055),s=r(34400),l=r(45194),i=r(23710),n=r(49632),o=r(57226),c=r(21119),u=r(10409),d=r(11270),f=r(10351),h=r(79993),m=r(26935),p=r(13275),x=r(85529),g=r(17840),v=r(42483),w=r(51461),b=r(52972),y=r(73290),j=r(2708),C=r(74121),R=r(98833),E=r(97011),S=r(47142),k=r(58081),N=r(87160),F=r(15205);let L=(0,F.Z)(S.Gs);function I({data:e}){let{query:t,baseList:r,startTime:a}=e,s=t.replaceAll("\\","");return{query:t,list:r.filter(e=>""===s||(0,S.CD)(s,e)&&L(s,e)>0).sort((e,t)=>L(s,t)-L(s,e)),baseCount:r.length,startTime:a}}var T=r(8959),A=r(4675);async function _(e){let t=await (0,A.v5)(e);return t.ok?await t.json():void 0}let Z=new Map,M=(0,F.Z)(_,{cache:Z});function D({onRenderRow:e,onItemSelected:t,searchBoxRef:r,sx:d={},...x}){let{query:C,setQuery:R}=(0,s.aM)(),E=(0,o.H)(),S=k.useRef(null),F=r??S,[L,A]=k.useState(C.length>0),[_,Z]=k.useState(!!C),{list:D,directories:$,loading:H,error:O}=function(e){let t=(0,o.H)(),{refInfo:r}=(0,l.Br)(),[a,s]=(0,k.useState)({list:[],directories:[],loading:!0}),i=(0,u.a_)({repo:t,commitOid:r.currentOid,includeDirectories:!0});return(0,k.useEffect)(()=>{let t=!1,r=async()=>{s({list:[],directories:[],loading:!0});let e=await M(i);if(t)return;let r=e?.paths||[],a=e?.directories||[];s({list:r.concat(a).sort(),directories:a,error:!e})};return e&&r(),function(){t=!0}},[i,e]),a}(L),{path:B}=(0,l.Br)(),{findFileWorkerPath:V}=(0,l.Ou)(),{getUrl:z}=(0,n.B)(),{queryText:G,queryLine:P}=function(e){let t=(e=e.replaceAll(" ","")).indexOf(":");return t>=0?{queryText:e.substring(0,t),queryLine:parseInt(e.substring(t+1),10)}:{queryText:e,queryLine:void 0}}(C),{matches:K,clearMatches:U}=function(e,t,r,a){let[s,l]=k.useState(),n=k.useRef(""),o=k.useRef(),{sendStats:c}=(0,i.a)(),u=k.useRef(!1),d=k.useCallback(()=>{let e=new N.V(r,I);e.onmessage=({data:e})=>{u.current=!1,l(e.list),n.current=e.query,e.startTime&&c("repository.find-file",{"find-file-base-count":e.baseCount,"find-file-results-count":e.list.length,"find-file-duration-ms":performance.now()-e.startTime})},o.current=e},[c,r]);return k.useEffect(()=>{if(a)return d(),function(){o.current?.terminate()}},[d,a]),k.useEffect(()=>{if(e.length&&t){u.current&&(o.current?.terminate(),d());let r=n.current&&t.startsWith(n.current);u.current=!0,o.current?.postMessage({baseList:r&&s||e,query:t,startTime:performance.now()})}},[e,t,d]),{matches:s,clearMatches:()=>l(void 0)}}(D,G,V,L),{sendRepoClickEvent:Y}=(0,i.a)(),Q=(0,h.s)(),[X,J]=k.useState(0),[ee,et]=k.useState((0,T.$)()),er=k.useRef(null),ea=k.useRef(null),es="file-results-list",{sendRepoKeyDownEvent:el}=(0,i.a)(),{screenSize:ei}=(0,f.eI)(),en=x.useOverlay||ei>=f._G.large,eo=k.useCallback(()=>{Y("FILE_TREE.SEARCH_RESULT_CLICK"),t?.(),Z(!1)},[Y,t]),{containerRef:ec}=(0,g.v)({bindKeys:m.Qw.ArrowVertical|m.Qw.HomeAndEnd,focusInStrategy:"previous"},[H,O]);k.useEffect(()=>{C||Z(!1)},[C]),k.useEffect(()=>{document.activeElement!==F.current&&en&&Z(!1)},[B,F,en]);let eu=K?.slice(0,40)||[],ed=K&&K.length>eu.length,ef=(0,a.jsx)(v.Z,{sx:{maxHeight:en?"60vh":"100% !important",overflowY:"auto",scrollbarGutter:"stable",maxWidth:"100vw","@media (max-width: 768px)":{ml:3,mr:2}},children:O?(0,a.jsx)(w.Z,{variant:"danger",className:"m-3",children:"Failed to search"}):(0,a.jsxs)(b.S,{ref:ec,sx:{overflow:"auto",p:en?2:3,width:"100%",pr:en?3:0,pt:en?3:"2px !important"},role:"listbox",children:[!H&&eu.map((t,r)=>{let s=$.includes(t);return(0,a.jsx)(q,{active:t===B,index:r,focused:ee&&X===r,match:t,onRender:e,query:G,onClick:eo,isDirectory:s,to:z({path:t,action:s?"tree":"blob",hash:P?`L${P}`:""}),useOverlay:en,listRef:ec},t)}),(0,a.jsxs)("div",{className:"m-3 text-center",children:[(0,a.jsx)(W,{loading:H||!K,visibleResultCount:eu.length,truncated:!!ed}),ed&&(0,a.jsxs)(a.Fragment,{children:["\xa0",(0,a.jsx)(y.Z,{id:"see-all-results-link",className:"focus-visible",ref:er,href:(0,u.mY)({owner:E.ownerLogin,repo:E.name,searchTerm:`path:${G}`}),sx:ee&&X===eu.length?{outline:"2px solid var(--focus-outlineColor, var(--color-accent-fg))",outlineOffset:"-2px",boxShadow:"none"}:{},children:"See all results"})]})]})]})});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.Z,{ref:ea,sx:{mx:2,ml:3,...d},children:(0,a.jsx)(T.f,{ariaActiveDescendant:(!en&&C||en&&_)&&ee&&X>-1?ed&&X===eu.length?"see-all-results-link":`file-result-${X}`:void 0,ariaExpanded:en?_:void 0,ariaHasPopup:en,ariaControls:en?es:void 0,ref:F,query:C,onKeyDown:e=>{let{key:t,shiftKey:r,metaKey:a,altKey:s,ctrlKey:l}=e;if(!r&&!a&&!s){if("Escape"===t)C?(el("FILE_TREE.CANCEL_SEARCH"),R(""),U()):document.activeElement&&document.activeElement.blur();else if(!C)return;else if("Enter"===t)ed&&X===eu.length?Q((0,u.mY)({owner:E.ownerLogin,repo:E.name,searchTerm:`path:${G}`})):eu[X]&&(Q(z({path:eu[X],action:"blob",hash:P?`L${P}`:""})),Z(!1));else if("ArrowDown"===t||l&&"n"===t){if(ed&&X>=eu.length-1){if(J(eu.length),er.current&&ec.current){let e=(0,c.M)(ec.current);(0,p.z)(er.current,e,{behavior:"instant"})}}else J(Math.min(X+1,eu.length-1));e.preventDefault();return}else if("ArrowUp"===t||l&&"p"===t){J(Math.max(X-1,0)),e.preventDefault();return}}},onPreload:()=>A(!0),onSearch:e=>{R(e),e?Z(!0):(U(),Z(!1)),J(0)},onBlur:e=>{ec.current?.contains(e.relatedTarget)||(Z(!1),et(!1))},onFocus:()=>{C&&Z(!0),et(!0)},sx:{minWidth:"160px"}})}),en&&(0,a.jsx)(j.w,{anchorRef:ea,open:en&&_,renderAnchor:null,onClose:()=>{Z(!1)},focusZoneSettings:{disabled:!0},focusTrapSettings:{disabled:!0},width:"xlarge",align:"end",overlayProps:{id:es,role:"dialog"},children:ef}),!en&&C&&ef]})}function W({visibleResultCount:e,truncated:t,loading:r}){return(0,a.jsx)("span",{role:"status",className:r||t||0===e?void 0:"sr-only","aria-label":r?"Loading":void 0,children:r?(0,a.jsx)(C.Z,{size:"large"}):0===e?"No matches found":t?`First ${e} files shown.`:`Showing ${e} files.`},"results-count-status")}let $=({active:e,focused:t,index:r,match:s,query:l,to:i,isDirectory:n,onClick:o,onRender:u,useOverlay:f,listRef:h})=>{let m=(0,S.m7)(l,s);u?.();let x=k.useRef(null),g=n?H:O;k.useEffect(()=>{if(t&&x.current&&h?.current){let e=(0,c.M)(h.current);(0,p.z)(x.current,e,{behavior:"instant"})}},[t,h]);let w={};return t&&(w={outline:"none",border:"2 solid",boxShadow:"0 0 0 2px #0969da"}),(0,a.jsx)(b.S.Item,{id:`file-result-${r}`,ref:x,as:d.r,onSelect:o,to:i,active:e,sx:{fontWeight:"normal",":hover":{textDecoration:"none"},mx:"2px",width:"calc(100% - 4px)",...w},role:"option","data-focus-visible-added":t||void 0,tabIndex:f?-1:0,children:(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("div",{className:"d-flex flex-1 flex-column overflow-hidden",children:(0,a.jsx)(B,{text:s,positionsList:m,sx:{color:"fg.muted"},LeadingIcon:g})}),t&&(0,a.jsx)(v.Z,{sx:{pl:1,whiteSpace:"nowrap",color:"fg.muted"},children:`Go to ${n?"folder":"file"}`})]})},s)},H=()=>(0,a.jsx)(R.Z,{"aria-label":"Directory",icon:x.FileDirectoryFillIcon,sx:{color:"var(--treeViewItem-leadingVisual-iconColor-rest, var(--color-icon-directory))",mr:2},size:"small"}),O=()=>(0,a.jsx)(R.Z,{"aria-label":"File",icon:x.FileIcon,className:"fgColor-muted mr-2",size:"small"}),q=k.memo($);function B({text:e,positionsList:t,sx:r,LeadingIcon:s}){let l=[],i=0;for(let r of t){if(Number(r)!==r||r<i||r>e.length)continue;let t=e.slice(i,r);t&&l.push(V(t)),i=r+1,l.push((0,a.jsx)(E.Z,{as:"mark",className:"text-bold bgColor-transparent fgColor-default",children:e[r]},r))}return l.push(V(e.slice(i))),(0,a.jsx)(v.Z,{sx:r,children:(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsx)(s,{}),l]})})}function V(e){return e.replaceAll("/","/\u200B")}try{D.displayName||(D.displayName="FileResultsList")}catch{}try{W.displayName||(W.displayName="FileResultsStatus")}catch{}try{$.displayName||($.displayName="FileResultRow")}catch{}try{H.displayName||(H.displayName="DirectoryIcon")}catch{}try{O.displayName||(O.displayName="FileResultIcon")}catch{}try{q.displayName||(q.displayName="MemoizedFileResultRow")}catch{}try{B.displayName||(B.displayName="HighlightMatch")}catch{}},8959:(e,t,r)=>{r.d(t,{$:()=>h,f:()=>f});var a=r(48055),s=r(46263),l=r(95347),i=r(23710),n=r(84669),o=r(85529),c=r(14626),u=r(42483),d=r(58081);let f=d.forwardRef(({ariaActiveDescendant:e,ariaControls:t,ariaExpanded:r,ariaHasPopup:n,onBlur:f,onFocus:m,onKeyDown:p,onPreload:x,onSearch:g,query:v,sx:w={}},b)=>{let{sendRepoClickEvent:y}=(0,i.a)(),[j,C]=d.useState(v),R=d.useRef((0,s.D)(e=>g(e),250));d.useEffect(()=>{C(v)},[v]);let E=v?(0,a.jsx)(c.Z.Action,{onClick:()=>{y("FILE_TREE.CANCEL_SEARCH"),g("")},icon:o.XCircleFillIcon,"aria-label":"Clear",className:"fgColor-muted"}):void 0;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.Z,{autoFocus:h(),ref:b,value:j,onKeyDown:p,onChange:e=>{C(e.target.value),x(),R.current(e.target.value)},sx:{display:"flex",...w},"aria-label":"Go to file","aria-activedescendant":e,role:n?"combobox":void 0,"aria-controls":t,"aria-expanded":r,"aria-haspopup":n?"dialog":void 0,autoCorrect:"off",spellCheck:"false",placeholder:"Go to file",leadingVisual:o.SearchIcon,trailingAction:E,trailingVisual:E?void 0:()=>(0,a.jsx)(l.I,{children:(0,a.jsx)(u.Z,{sx:{mr:"-6px"},children:(0,a.jsx)("kbd",{children:"t"})})}),onFocus:e=>{x(),e.target.select(),m?.(e)},onBlur:f,onClick:()=>y("FILE_TREE.SEARCH_BOX")})})});function h(){return"1"===new URLSearchParams(n.ssrSafeLocation.search).get("search")}f.displayName="FilesSearchBox"}}]);
//# sourceMappingURL=ui_packages_code-view-shared_components_files-search_FileResultsList_tsx-aba592703ed7.js.map
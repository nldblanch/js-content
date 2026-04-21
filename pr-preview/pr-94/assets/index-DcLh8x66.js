const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-8nISElcg.js","assets/vendor-react-CeVddbde.js","assets/vendor-xterm-D5NOrwd8.js","assets/vendor-xterm-DDGTF8rc.css","assets/vendor-state-BDDn670C.js","assets/vendor-git-9Kqk95oe.js","assets/vendor-prism-Bu1_jjbi.js","assets/vendor-markdown-CKuRw0qk.js"])))=>i.map(i=>d[i]);
import{r as w,j as l,L as vt,R as se,u as Mn,b as ot,N as Ct,d as Ya,O as Wa,e as Ga,f as za,h as qa}from"./vendor-react-CeVddbde.js";import{P as Qa}from"./vendor-prism-Bu1_jjbi.js";import{f as kt,p as Jt,a as $t,n as Zt,h as it,s as Ue,o as It,z as Bn,b as Va,c as Ka,d as fe,v as Xa,e as Hn,g as en,M as Ja,r as $a}from"./vendor-markdown-CKuRw0qk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();const Za="modulepreload",es=function(e){return"/js-content/pr-preview/pr-94/"+e},tn={},ts=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){let m=function(E){return Promise.all(E.map(A=>Promise.resolve(A).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=d?.nonce||d?.getAttribute("nonce");r=m(n.map(E=>{if(E=es(E),E in tn)return;tn[E]=!0;const A=E.endsWith(".css"),x=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${x}`))return;const S=document.createElement("link");if(S.rel=A?"stylesheet":Za,A||(S.as="script"),S.crossOrigin="",S.href=E,f&&S.setAttribute("nonce",f),document.head.appendChild(S),A)return new Promise((P,F)=>{S.addEventListener("load",P),S.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${E}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return r.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return t().catch(u)})},Un="/js-content/pr-preview/pr-94/",ns=e=>new Promise(t=>setTimeout(t,e));function as(e,t){return w.lazy(()=>Promise.all([e(),ns(t)]).then(([n])=>n))}const re=e=>`${Un}${e}`,G={HOME:{label:"Home",path:"/"},INSTRUCTIONS:{label:"Guides",path:"/instructions"},INSTRUCTION_DETAIL:{path:"/instructions/:slug"},SETUP:{label:"Getting Started",path:"/setup"},EXTRA_TASKS:{label:"Extra Tasks",path:"/extra-tasks"},HELP:{label:"HELP!",path:"/help"},CREDITS:{label:"Credits",path:"/credits"}},Fn=()=>l.jsx("div",{className:"w-fit",children:l.jsx("div",{className:"flex justify-evenly gap-2",children:["bg-red-500","bg-yellow-500","bg-green-500"].map(e=>l.jsx("div",{className:`rounded-full aspect-square h-4 ${e}`},e))})}),ss=({children:e,title:t,code:n})=>{const s=w.useRef(null);w.useEffect(()=>{Qa.highlightAll()},[n]);const r=()=>{const u=s.current?.querySelector("input");u&&u.focus()};return l.jsxs("div",{className:"rounded-3xl w-full",children:[l.jsxs("div",{className:"py-4 px-6 flex items-center gap-4 bg-black-800 rounded-t-3xl font-fira text-muted text-2xl",children:[l.jsx(Fn,{}),l.jsx("h2",{children:t})]}),l.jsxs("div",{ref:s,onClick:r,className:"rounded-b-3xl py-4 px-6 bg-black-900 text-2xl!",children:[l.jsx("pre",{className:"prose prose-invert",children:l.jsx("code",{className:"language-js text-2xl!",children:n})}),e]})]})},rs=(e,t)=>{const n=new Array(e.length+t.length);for(let s=0;s<e.length;s++)n[s]=e[s];for(let s=0;s<t.length;s++)n[e.length+s]=t[s];return n},us=(e,t)=>({classGroupId:e,validator:t}),jn=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Ze="-",nn=[],os="arbitrary..",is=e=>{const t=ls(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return cs(d);const f=d.split(Ze),m=f[0]===""&&f.length>1?1:0;return Yn(f,m,t)},getConflictingClassGroupIds:(d,f)=>{if(f){const m=s[d],E=n[d];return m?E?rs(E,m):m:E||nn}return n[d]||nn}}},Yn=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const r=e[t],u=n.nextPart.get(r);if(u){const E=Yn(e,t+1,u);if(E)return E}const d=n.validators;if(d===null)return;const f=t===0?e.join(Ze):e.slice(t).join(Ze),m=d.length;for(let E=0;E<m;E++){const A=d[E];if(A.validator(f))return A.classGroupId}},cs=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),s=t.slice(0,n);return s?os+s:void 0})(),ls=e=>{const{theme:t,classGroups:n}=e;return ds(n,t)},ds=(e,t)=>{const n=jn();for(const s in e){const r=e[s];Pt(r,n,s,t)}return n},Pt=(e,t,n,s)=>{const r=e.length;for(let u=0;u<r;u++){const d=e[u];hs(d,t,n,s)}},hs=(e,t,n,s)=>{if(typeof e=="string"){ms(e,t,n);return}if(typeof e=="function"){fs(e,t,n,s);return}ps(e,t,n,s)},ms=(e,t,n)=>{const s=e===""?t:Wn(t,e);s.classGroupId=n},fs=(e,t,n,s)=>{if(bs(e)){Pt(e(s),t,n,s);return}t.validators===null&&(t.validators=[]),t.validators.push(us(n,e))},ps=(e,t,n,s)=>{const r=Object.entries(e),u=r.length;for(let d=0;d<u;d++){const[f,m]=r[d];Pt(m,Wn(t,f),n,s)}},Wn=(e,t)=>{let n=e;const s=t.split(Ze),r=s.length;for(let u=0;u<r;u++){const d=s[u];let f=n.nextPart.get(d);f||(f=jn(),n.nextPart.set(d,f)),n=f}return n},bs=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,gs=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),s=Object.create(null);const r=(u,d)=>{n[u]=d,t++,t>e&&(t=0,s=n,n=Object.create(null))};return{get(u){let d=n[u];if(d!==void 0)return d;if((d=s[u])!==void 0)return r(u,d),d},set(u,d){u in n?n[u]=d:r(u,d)}}},xt="!",an=":",Es=[],sn=(e,t,n,s,r)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:s,isExternal:r}),Ts=e=>{const{prefix:t,experimentalParseClassName:n}=e;let s=r=>{const u=[];let d=0,f=0,m=0,E;const A=r.length;for(let q=0;q<A;q++){const j=r[q];if(d===0&&f===0){if(j===an){u.push(r.slice(m,q)),m=q+1;continue}if(j==="/"){E=q;continue}}j==="["?d++:j==="]"?d--:j==="("?f++:j===")"&&f--}const x=u.length===0?r:r.slice(m);let S=x,P=!1;x.endsWith(xt)?(S=x.slice(0,-1),P=!0):x.startsWith(xt)&&(S=x.slice(1),P=!0);const F=E&&E>m?E-m:void 0;return sn(u,P,S,F)};if(t){const r=t+an,u=s;s=d=>d.startsWith(r)?u(d.slice(r.length)):sn(Es,!1,d,void 0,!0)}if(n){const r=s;s=u=>n({className:u,parseClassName:r})}return s},_s=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,s)=>{t.set(n,1e6+s)}),n=>{const s=[];let r=[];for(let u=0;u<n.length;u++){const d=n[u],f=d[0]==="[",m=t.has(d);f||m?(r.length>0&&(r.sort(),s.push(...r),r=[]),s.push(d)):r.push(d)}return r.length>0&&(r.sort(),s.push(...r)),s}},As=e=>({cache:gs(e.cacheSize),parseClassName:Ts(e),sortModifiers:_s(e),...is(e)}),ys=/\s+/,Ns=(e,t)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:r,sortModifiers:u}=t,d=[],f=e.trim().split(ys);let m="";for(let E=f.length-1;E>=0;E-=1){const A=f[E],{isExternal:x,modifiers:S,hasImportantModifier:P,baseClassName:F,maybePostfixModifierPosition:q}=n(A);if(x){m=A+(m.length>0?" "+m:m);continue}let j=!!q,oe=s(j?F.substring(0,q):F);if(!oe){if(!j){m=A+(m.length>0?" "+m:m);continue}if(oe=s(F),!oe){m=A+(m.length>0?" "+m:m);continue}j=!1}const Ye=S.length===0?"":S.length===1?S[0]:u(S).join(":"),xe=P?Ye+xt:Ye,ge=xe+oe;if(d.indexOf(ge)>-1)continue;d.push(ge);const Ee=r(oe,j);for(let ie=0;ie<Ee.length;++ie){const Se=Ee[ie];d.push(xe+Se)}m=A+(m.length>0?" "+m:m)}return m},Cs=(...e)=>{let t=0,n,s,r="";for(;t<e.length;)(n=e[t++])&&(s=Gn(n))&&(r&&(r+=" "),r+=s);return r},Gn=e=>{if(typeof e=="string")return e;let t,n="";for(let s=0;s<e.length;s++)e[s]&&(t=Gn(e[s]))&&(n&&(n+=" "),n+=t);return n},Is=(e,...t)=>{let n,s,r,u;const d=m=>{const E=t.reduce((A,x)=>x(A),e());return n=As(E),s=n.cache.get,r=n.cache.set,u=f,f(m)},f=m=>{const E=s(m);if(E)return E;const A=Ns(m,n);return r(m,A),A};return u=d,(...m)=>u(Cs(...m))},xs=[],L=e=>{const t=n=>n[e]||xs;return t.isThemeGetter=!0,t},zn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,qn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ss=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ws=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Rs=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Os=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ls=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ds=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$=e=>Ss.test(e),C=e=>!!e&&!Number.isNaN(Number(e)),Z=e=>!!e&&Number.isInteger(Number(e)),Et=e=>e.endsWith("%")&&C(e.slice(0,-1)),X=e=>ws.test(e),Qn=()=>!0,vs=e=>Rs.test(e)&&!Os.test(e),Mt=()=>!1,ks=e=>Ls.test(e),Ps=e=>Ds.test(e),Ms=e=>!T(e)&&!_(e),Bs=e=>ue(e,Xn,Mt),T=e=>zn.test(e),le=e=>ue(e,Jn,vs),rn=e=>ue(e,zs,C),Hs=e=>ue(e,Zn,Qn),Us=e=>ue(e,$n,Mt),un=e=>ue(e,Vn,Mt),Fs=e=>ue(e,Kn,Ps),Ve=e=>ue(e,ea,ks),_=e=>qn.test(e),we=e=>pe(e,Jn),js=e=>pe(e,$n),on=e=>pe(e,Vn),Ys=e=>pe(e,Xn),Ws=e=>pe(e,Kn),Ke=e=>pe(e,ea,!0),Gs=e=>pe(e,Zn,!0),ue=(e,t,n)=>{const s=zn.exec(e);return s?s[1]?t(s[1]):n(s[2]):!1},pe=(e,t,n=!1)=>{const s=qn.exec(e);return s?s[1]?t(s[1]):n:!1},Vn=e=>e==="position"||e==="percentage",Kn=e=>e==="image"||e==="url",Xn=e=>e==="length"||e==="size"||e==="bg-size",Jn=e=>e==="length",zs=e=>e==="number",$n=e=>e==="family-name",Zn=e=>e==="number"||e==="weight",ea=e=>e==="shadow",qs=()=>{const e=L("color"),t=L("font"),n=L("text"),s=L("font-weight"),r=L("tracking"),u=L("leading"),d=L("breakpoint"),f=L("container"),m=L("spacing"),E=L("radius"),A=L("shadow"),x=L("inset-shadow"),S=L("text-shadow"),P=L("drop-shadow"),F=L("blur"),q=L("perspective"),j=L("aspect"),oe=L("ease"),Ye=L("animate"),xe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ge=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],Ee=()=>[...ge(),_,T],ie=()=>["auto","hidden","clip","visible","scroll"],Se=()=>["auto","contain","none"],y=()=>[_,T,m],Y=()=>[$,"full","auto",...y()],Wt=()=>[Z,"none","subgrid",_,T],Gt=()=>["auto",{span:["full",Z,_,T]},Z,_,T],We=()=>[Z,"auto",_,T],zt=()=>["auto","min","max","fr",_,T],mt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Te=()=>["start","end","center","stretch","center-safe","end-safe"],Q=()=>["auto",...y()],ce=()=>[$,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...y()],ft=()=>[$,"screen","full","dvw","lvw","svw","min","max","fit",...y()],pt=()=>[$,"screen","full","lh","dvh","lvh","svh","min","max","fit",...y()],N=()=>[e,_,T],qt=()=>[...ge(),on,un,{position:[_,T]}],Qt=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Vt=()=>["auto","cover","contain",Ys,Bs,{size:[_,T]}],bt=()=>[Et,we,le],B=()=>["","none","full",E,_,T],H=()=>["",C,we,le],Ge=()=>["solid","dashed","dotted","double"],Kt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>[C,Et,on,un],Xt=()=>["","none",F,_,T],ze=()=>["none",C,_,T],qe=()=>["none",C,_,T],gt=()=>[C,_,T],Qe=()=>[$,"full",...y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[X],breakpoint:[X],color:[Qn],container:[X],"drop-shadow":[X],ease:["in","out","in-out"],font:[Ms],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[X],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[X],shadow:[X],spacing:["px",C],text:[X],"text-shadow":[X],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$,T,_,j]}],container:["container"],columns:[{columns:[C,T,_,f]}],"break-after":[{"break-after":xe()}],"break-before":[{"break-before":xe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:Ee()}],overflow:[{overflow:ie()}],"overflow-x":[{"overflow-x":ie()}],"overflow-y":[{"overflow-y":ie()}],overscroll:[{overscroll:Se()}],"overscroll-x":[{"overscroll-x":Se()}],"overscroll-y":[{"overscroll-y":Se()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Y()}],"inset-x":[{"inset-x":Y()}],"inset-y":[{"inset-y":Y()}],start:[{"inset-s":Y(),start:Y()}],end:[{"inset-e":Y(),end:Y()}],"inset-bs":[{"inset-bs":Y()}],"inset-be":[{"inset-be":Y()}],top:[{top:Y()}],right:[{right:Y()}],bottom:[{bottom:Y()}],left:[{left:Y()}],visibility:["visible","invisible","collapse"],z:[{z:[Z,"auto",_,T]}],basis:[{basis:[$,"full","auto",f,...y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[C,$,"auto","initial","none",T]}],grow:[{grow:["",C,_,T]}],shrink:[{shrink:["",C,_,T]}],order:[{order:[Z,"first","last","none",_,T]}],"grid-cols":[{"grid-cols":Wt()}],"col-start-end":[{col:Gt()}],"col-start":[{"col-start":We()}],"col-end":[{"col-end":We()}],"grid-rows":[{"grid-rows":Wt()}],"row-start-end":[{row:Gt()}],"row-start":[{"row-start":We()}],"row-end":[{"row-end":We()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":zt()}],"auto-rows":[{"auto-rows":zt()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...mt(),"normal"]}],"justify-items":[{"justify-items":[...Te(),"normal"]}],"justify-self":[{"justify-self":["auto",...Te()]}],"align-content":[{content:["normal",...mt()]}],"align-items":[{items:[...Te(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Te(),{baseline:["","last"]}]}],"place-content":[{"place-content":mt()}],"place-items":[{"place-items":[...Te(),"baseline"]}],"place-self":[{"place-self":["auto",...Te()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pbs:[{pbs:y()}],pbe:[{pbe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:Q()}],mx:[{mx:Q()}],my:[{my:Q()}],ms:[{ms:Q()}],me:[{me:Q()}],mbs:[{mbs:Q()}],mbe:[{mbe:Q()}],mt:[{mt:Q()}],mr:[{mr:Q()}],mb:[{mb:Q()}],ml:[{ml:Q()}],"space-x":[{"space-x":y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":y()}],"space-y-reverse":["space-y-reverse"],size:[{size:ce()}],"inline-size":[{inline:["auto",...ft()]}],"min-inline-size":[{"min-inline":["auto",...ft()]}],"max-inline-size":[{"max-inline":["none",...ft()]}],"block-size":[{block:["auto",...pt()]}],"min-block-size":[{"min-block":["auto",...pt()]}],"max-block-size":[{"max-block":["none",...pt()]}],w:[{w:[f,"screen",...ce()]}],"min-w":[{"min-w":[f,"screen","none",...ce()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[d]},...ce()]}],h:[{h:["screen","lh",...ce()]}],"min-h":[{"min-h":["screen","lh","none",...ce()]}],"max-h":[{"max-h":["screen","lh",...ce()]}],"font-size":[{text:["base",n,we,le]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,Gs,Hs]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Et,T]}],"font-family":[{font:[js,Us,t]}],"font-features":[{"font-features":[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,_,T]}],"line-clamp":[{"line-clamp":[C,"none",_,rn]}],leading:[{leading:[u,...y()]}],"list-image":[{"list-image":["none",_,T]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",_,T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:N()}],"text-color":[{text:N()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ge(),"wavy"]}],"text-decoration-thickness":[{decoration:[C,"from-font","auto",_,le]}],"text-decoration-color":[{decoration:N()}],"underline-offset":[{"underline-offset":[C,"auto",_,T]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",_,T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",_,T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:qt()}],"bg-repeat":[{bg:Qt()}],"bg-size":[{bg:Vt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Z,_,T],radial:["",_,T],conic:[Z,_,T]},Ws,Fs]}],"bg-color":[{bg:N()}],"gradient-from-pos":[{from:bt()}],"gradient-via-pos":[{via:bt()}],"gradient-to-pos":[{to:bt()}],"gradient-from":[{from:N()}],"gradient-via":[{via:N()}],"gradient-to":[{to:N()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:H()}],"border-w-x":[{"border-x":H()}],"border-w-y":[{"border-y":H()}],"border-w-s":[{"border-s":H()}],"border-w-e":[{"border-e":H()}],"border-w-bs":[{"border-bs":H()}],"border-w-be":[{"border-be":H()}],"border-w-t":[{"border-t":H()}],"border-w-r":[{"border-r":H()}],"border-w-b":[{"border-b":H()}],"border-w-l":[{"border-l":H()}],"divide-x":[{"divide-x":H()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":H()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ge(),"hidden","none"]}],"divide-style":[{divide:[...Ge(),"hidden","none"]}],"border-color":[{border:N()}],"border-color-x":[{"border-x":N()}],"border-color-y":[{"border-y":N()}],"border-color-s":[{"border-s":N()}],"border-color-e":[{"border-e":N()}],"border-color-bs":[{"border-bs":N()}],"border-color-be":[{"border-be":N()}],"border-color-t":[{"border-t":N()}],"border-color-r":[{"border-r":N()}],"border-color-b":[{"border-b":N()}],"border-color-l":[{"border-l":N()}],"divide-color":[{divide:N()}],"outline-style":[{outline:[...Ge(),"none","hidden"]}],"outline-offset":[{"outline-offset":[C,_,T]}],"outline-w":[{outline:["",C,we,le]}],"outline-color":[{outline:N()}],shadow:[{shadow:["","none",A,Ke,Ve]}],"shadow-color":[{shadow:N()}],"inset-shadow":[{"inset-shadow":["none",x,Ke,Ve]}],"inset-shadow-color":[{"inset-shadow":N()}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:N()}],"ring-offset-w":[{"ring-offset":[C,le]}],"ring-offset-color":[{"ring-offset":N()}],"inset-ring-w":[{"inset-ring":H()}],"inset-ring-color":[{"inset-ring":N()}],"text-shadow":[{"text-shadow":["none",S,Ke,Ve]}],"text-shadow-color":[{"text-shadow":N()}],opacity:[{opacity:[C,_,T]}],"mix-blend":[{"mix-blend":[...Kt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Kt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[C]}],"mask-image-linear-from-pos":[{"mask-linear-from":D()}],"mask-image-linear-to-pos":[{"mask-linear-to":D()}],"mask-image-linear-from-color":[{"mask-linear-from":N()}],"mask-image-linear-to-color":[{"mask-linear-to":N()}],"mask-image-t-from-pos":[{"mask-t-from":D()}],"mask-image-t-to-pos":[{"mask-t-to":D()}],"mask-image-t-from-color":[{"mask-t-from":N()}],"mask-image-t-to-color":[{"mask-t-to":N()}],"mask-image-r-from-pos":[{"mask-r-from":D()}],"mask-image-r-to-pos":[{"mask-r-to":D()}],"mask-image-r-from-color":[{"mask-r-from":N()}],"mask-image-r-to-color":[{"mask-r-to":N()}],"mask-image-b-from-pos":[{"mask-b-from":D()}],"mask-image-b-to-pos":[{"mask-b-to":D()}],"mask-image-b-from-color":[{"mask-b-from":N()}],"mask-image-b-to-color":[{"mask-b-to":N()}],"mask-image-l-from-pos":[{"mask-l-from":D()}],"mask-image-l-to-pos":[{"mask-l-to":D()}],"mask-image-l-from-color":[{"mask-l-from":N()}],"mask-image-l-to-color":[{"mask-l-to":N()}],"mask-image-x-from-pos":[{"mask-x-from":D()}],"mask-image-x-to-pos":[{"mask-x-to":D()}],"mask-image-x-from-color":[{"mask-x-from":N()}],"mask-image-x-to-color":[{"mask-x-to":N()}],"mask-image-y-from-pos":[{"mask-y-from":D()}],"mask-image-y-to-pos":[{"mask-y-to":D()}],"mask-image-y-from-color":[{"mask-y-from":N()}],"mask-image-y-to-color":[{"mask-y-to":N()}],"mask-image-radial":[{"mask-radial":[_,T]}],"mask-image-radial-from-pos":[{"mask-radial-from":D()}],"mask-image-radial-to-pos":[{"mask-radial-to":D()}],"mask-image-radial-from-color":[{"mask-radial-from":N()}],"mask-image-radial-to-color":[{"mask-radial-to":N()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ge()}],"mask-image-conic-pos":[{"mask-conic":[C]}],"mask-image-conic-from-pos":[{"mask-conic-from":D()}],"mask-image-conic-to-pos":[{"mask-conic-to":D()}],"mask-image-conic-from-color":[{"mask-conic-from":N()}],"mask-image-conic-to-color":[{"mask-conic-to":N()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:qt()}],"mask-repeat":[{mask:Qt()}],"mask-size":[{mask:Vt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",_,T]}],filter:[{filter:["","none",_,T]}],blur:[{blur:Xt()}],brightness:[{brightness:[C,_,T]}],contrast:[{contrast:[C,_,T]}],"drop-shadow":[{"drop-shadow":["","none",P,Ke,Ve]}],"drop-shadow-color":[{"drop-shadow":N()}],grayscale:[{grayscale:["",C,_,T]}],"hue-rotate":[{"hue-rotate":[C,_,T]}],invert:[{invert:["",C,_,T]}],saturate:[{saturate:[C,_,T]}],sepia:[{sepia:["",C,_,T]}],"backdrop-filter":[{"backdrop-filter":["","none",_,T]}],"backdrop-blur":[{"backdrop-blur":Xt()}],"backdrop-brightness":[{"backdrop-brightness":[C,_,T]}],"backdrop-contrast":[{"backdrop-contrast":[C,_,T]}],"backdrop-grayscale":[{"backdrop-grayscale":["",C,_,T]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[C,_,T]}],"backdrop-invert":[{"backdrop-invert":["",C,_,T]}],"backdrop-opacity":[{"backdrop-opacity":[C,_,T]}],"backdrop-saturate":[{"backdrop-saturate":[C,_,T]}],"backdrop-sepia":[{"backdrop-sepia":["",C,_,T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",_,T]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[C,"initial",_,T]}],ease:[{ease:["linear","initial",oe,_,T]}],delay:[{delay:[C,_,T]}],animate:[{animate:["none",Ye,_,T]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[q,_,T]}],"perspective-origin":[{"perspective-origin":Ee()}],rotate:[{rotate:ze()}],"rotate-x":[{"rotate-x":ze()}],"rotate-y":[{"rotate-y":ze()}],"rotate-z":[{"rotate-z":ze()}],scale:[{scale:qe()}],"scale-x":[{"scale-x":qe()}],"scale-y":[{"scale-y":qe()}],"scale-z":[{"scale-z":qe()}],"scale-3d":["scale-3d"],skew:[{skew:gt()}],"skew-x":[{"skew-x":gt()}],"skew-y":[{"skew-y":gt()}],transform:[{transform:[_,T,"","none","gpu","cpu"]}],"transform-origin":[{origin:Ee()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Qe()}],"translate-x":[{"translate-x":Qe()}],"translate-y":[{"translate-y":Qe()}],"translate-z":[{"translate-z":Qe()}],"translate-none":["translate-none"],accent:[{accent:N()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:N()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",_,T]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mbs":[{"scroll-mbs":y()}],"scroll-mbe":[{"scroll-mbe":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pbs":[{"scroll-pbs":y()}],"scroll-pbe":[{"scroll-pbe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",_,T]}],fill:[{fill:["none",...N()]}],"stroke-w":[{stroke:[C,we,le,rn]}],stroke:[{stroke:["none",...N()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Le=Is(qs),Tt="font-extrabold leading-tight text-white",_t={xxl:"text-[80px] leading-[80px]",xl:"text-[48px] leading-[50px]",lg:"text-[36px] leading-[40px]",md:"text-[24px] leading-[30px]",sm:"text-[19px] leading-[25px]"},At={libre:"font-libre",fira:"font-fira"},Qs=({word:e,underline:t})=>l.jsxs("span",{className:"relative inline-block text-blue",children:[e,t&&l.jsx(Vs,{})]}),Vs=()=>l.jsx("img",{src:re("underline.svg"),alt:"","aria-hidden":"true",className:"pointer-events-none absolute left-0 top-full block w-full select-none"}),ne=({text:e,children:t,highlight:n,underline:s,variant:r="lg",as:u="h1",className:d,wrapperClassName:f,noWrapper:m,font:E="libre"})=>{const A=u,x=(()=>{if(t)return l.jsx(A,{className:Le(Tt,_t[r],At[E],d),children:t});const S=e??"",P=S.split(" "),F=P.pop();return F?l.jsxs(A,{className:Le(Tt,_t[r],At[E],d),children:[P.join(" ")," ",n?l.jsx(Qs,{word:F,underline:s}):F]}):l.jsx(A,{className:Le(Tt,_t[r],At[E],d),children:S})})();return m?x:l.jsx("div",{className:Le("flex flex-col grow-0 max-w-fit items-end justify-center",f),children:x})},Ks="text-gray font-normal font-fira mx-auto text-center",Xs={xl:"text-[27px] leading-[30px]",lg:"text-[24px] leading-[30px]",md:"text-[19px] leading-[25px]",sm:"text-[16px] leading-[20px]"},W=({text:e,variant:t="md",className:n})=>l.jsx("p",{className:Le(Ks,Xs[t],n),children:e});function Js(){const e="Your name here...",[t,n]=w.useState(e),[s,r]=w.useState(!1);return l.jsxs("div",{className:"page-container",children:[l.jsx(ne,{variant:"xl",text:"Making JavaScript Easy",underline:!0,highlight:!0}),l.jsx(W,{text:"A comprehensive course designed for beginners to master JavaScript fundamentals through hands-on exercises."}),l.jsxs(vt,{to:G.SETUP.path,className:"bg-blue px-8 py-2 rounded-4xl max-h-68 flex items-center justify-center",children:[l.jsx("button",{className:"text-black-700 font-bold font-fira text-3xl",children:"Start Learning"}),l.jsx("div",{className:"p-4",children:l.jsx("img",{src:re("arrow.svg"),className:"inline-block h-8 text-black-700"})})]}),l.jsx("div",{className:"my-4 w-full",children:l.jsx(ss,{title:"example.js",code:`function greetStudent(name) {
    const message = \`Welcome to the JavaScript course, \${name}!\`;
    console.log(message);
    return message;
  }
  
  // Try it yourself`,children:l.jsxs("div",{className:"space-y-2",children:[l.jsxs("form",{action:()=>{r(!0),console.log(`Welcome to the JavaScript course, ${t}!`)},className:"flex text-white font-fira items-center",children:[l.jsx("span",{className:"text-[#dcdcaa]",children:"greetStudent"}),l.jsx("span",{children:"("}),l.jsx("span",{className:"text-[#ce9178]",children:'"'}),l.jsx("input",{type:"text",placeholder:"",className:"text-[#ce9178] border-none outline-none",value:t,id:"auto",style:{width:`${Math.max(t.length,1)}ch`,fontFamily:"inherit"},onChange:u=>{n(u.currentTarget.value)},onBlur:u=>{u.currentTarget.value===""&&n(e)}}),l.jsx("span",{className:"text-[#ce9178]",children:'"'}),l.jsx("span",{children:");"})]}),s&&l.jsx("span",{className:"text-[#6a9955] font-fira",children:"// Check the console!"})]})})}),l.jsx("h2",{className:"text-white text-4xl font-libre",children:"Course Topics"}),l.jsx("p",{className:"text-gray text-2xl font-normal font-fira mx-auto",children:"The included exercises will teach you some of the following Skills."}),l.jsx("ul",{className:"text-gray w-full gap-x-10.5 gap-y-5.5 text-2xl font-normal font-fira mx-auto grid grid-cols-2",children:["Variables and Data Types","Functions","Problem Solving","Unit Testing","Modern JavaScript"].map(u=>l.jsxs("li",{className:"w-full bg-black-900 rounded-4xl px-6 py-8 space-x-6",children:[l.jsx("img",{src:re("tick.svg"),className:"inline-block h-12"}),l.jsx("span",{children:u})]},u))})]})}function $s(){const[e,t]=w.useState(!1);return{isOpen:e,open:()=>t(!0),close:()=>t(!1)}}function Zs({isOpen:e,onClose:t,title:n,children:s}){const r=w.useRef(null);return w.useEffect(()=>{const u=d=>{d.key==="Escape"&&t()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[t]),e?l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",onClick:u=>u.target===r.current&&t(),ref:r,children:l.jsxs("div",{className:"bg-black-800 border border-gray/20 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl",children:[l.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray/10",children:[l.jsx("h3",{className:"text-2xl font-libre font-bold text-white",children:n}),l.jsx("button",{onClick:t,className:"cursor-pointer text-gray hover:text-white transition-colors text-3xl leading-none",children:"×"})]}),l.jsx("div",{className:"p-6 font-fira text-gray text-lg",children:s})]})}):null}function er({children:e}){const[t,n]=w.useState(!1),{isOpen:s,open:r,close:u}=$s(),d=se.Children.toArray(e),f=d.find(x=>w.isValidElement(x)&&x.type===Dt),m=d.filter(x=>!(w.isValidElement(x)&&x.type===Dt)),E=x=>{if(st(f).toLowerCase().includes("table of contents")){n(P=>!P);return}x.preventDefault(),t?n(!1):r()},A=()=>{n(!0),u()};return l.jsxs("div",{className:"mb-4 border border-gray/20 rounded-xl bg-black-900/30 overflow-hidden",children:[l.jsx("div",{onClick:E,className:"cursor-pointer",children:f?w.cloneElement(f,{isOpen:t}):l.jsx("div",{className:"p-4 text-blue font-fira text-xl",children:"Details"})}),t&&l.jsx("div",{className:"p-4 border-t border-gray/20 bg-black-800/50 animate-in fade-in slide-in-from-top-2 duration-200",children:m}),l.jsxs(Zs,{isOpen:s,onClose:u,title:"Confirm Access",children:[l.jsx("p",{className:"mb-6",children:"This section contains spoilers or advanced solutions. Are you sure you want to proceed?"}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:A,className:"cursor-pointer flex-1 bg-blue text-black-700 font-bold py-2 rounded-lg hover:brightness-110",children:"Show Content"}),l.jsx("button",{onClick:u,className:"cursor-pointer flex-1 border border-gray/20 text-white py-2 rounded-lg hover:bg-white/5",children:"Cancel"})]})]})]})}const cn=/[#.]/g;function tr(e,t){const n=e||"",s={};let r=0,u,d;for(;r<n.length;){cn.lastIndex=r;const f=cn.exec(n),m=n.slice(r,f?f.index:n.length);m&&(u?u==="#"?s.id=m:Array.isArray(s.className)?s.className.push(m):s.className=[m]:d=m,r+=m.length),f&&(u=f[0],r++)}return{type:"element",tagName:d||t||"div",properties:s,children:[]}}function ta(e,t,n){const s=n?rr(n):void 0;function r(u,d,...f){let m;if(u==null){m={type:"root",children:[]};const E=d;f.unshift(E)}else{m=tr(u,t);const E=m.tagName.toLowerCase(),A=s?s.get(E):void 0;if(m.tagName=A||E,nr(d))f.unshift(d);else for(const[x,S]of Object.entries(d))ar(e,m.properties,x,S)}for(const E of f)St(m.children,E);return m.type==="element"&&m.tagName==="template"&&(m.content={type:"root",children:m.children},m.children=[]),m}return r}function nr(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const s of n){const r=t[s];if(r&&typeof r=="object"){if(!Array.isArray(r))return!0;const u=r;for(const d of u)if(typeof d!="number"&&typeof d!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function ar(e,t,n,s){const r=kt(e,n);let u;if(s!=null){if(typeof s=="number"){if(Number.isNaN(s))return;u=s}else typeof s=="boolean"?u=s:typeof s=="string"?r.spaceSeparated?u=Jt(s):r.commaSeparated?u=$t(s):r.commaOrSpaceSeparated?u=Jt($t(s).join(" ")):u=ln(r,r.property,s):Array.isArray(s)?u=[...s]:u=r.property==="style"?sr(s):String(s);if(Array.isArray(u)){const d=[];for(const f of u)d.push(ln(r,r.property,f));u=d}r.property==="className"&&Array.isArray(t.className)&&(u=t.className.concat(u)),t[r.property]=u}}function St(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)St(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?St(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function ln(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||Zt(n)===Zt(t)))return!0}return n}function sr(e){const t=[];for(const[n,s]of Object.entries(e))t.push([n,s].join(": "));return t.join("; ")}function rr(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const ur=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],or=ta(it,"div"),ir=ta(Ue,"g",ur);function cr(e){const t=String(e),n=[];return{toOffset:r,toPoint:s};function s(u){if(typeof u=="number"&&u>-1&&u<=t.length){let d=0;for(;;){let f=n[d];if(f===void 0){const m=dn(t,n[d-1]);f=m===-1?t.length+1:m+1,n[d]=f}if(f>u)return{line:d+1,column:u-(d>0?n[d-1]:0)+1,offset:u};d++}}}function r(u){if(u&&typeof u.line=="number"&&typeof u.column=="number"&&!Number.isNaN(u.line)&&!Number.isNaN(u.column)){for(;n.length<u.line;){const f=n[n.length-1],m=dn(t,f),E=m===-1?t.length+1:m+1;if(f===E)break;n.push(E)}const d=(u.line>1?n[u.line-2]:0)+u.column-1;if(d<n[u.line-1])return d}}}function dn(e,t){const n=e.indexOf("\r",t),s=e.indexOf(`
`,t);return s===-1?n:n===-1||n+1===s?s:n<s?n:s}const he={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},na={}.hasOwnProperty,lr=Object.prototype;function dr(e,t){const n=t||{};return Bt({file:n.file||void 0,location:!1,schema:n.space==="svg"?Ue:it,verbose:n.verbose||!1},e)}function Bt(e,t){let n;switch(t.nodeName){case"#comment":{const s=t;return n={type:"comment",value:s.data},Je(e,s,n),n}case"#document":case"#document-fragment":{const s=t,r="mode"in s?s.mode==="quirks"||s.mode==="limited-quirks":!1;if(n={type:"root",children:aa(e,t.childNodes),data:{quirksMode:r}},e.file&&e.location){const u=String(e.file),d=cr(u),f=d.toPoint(0),m=d.toPoint(u.length);n.position={start:f,end:m}}return n}case"#documentType":{const s=t;return n={type:"doctype"},Je(e,s,n),n}case"#text":{const s=t;return n={type:"text",value:s.value},Je(e,s,n),n}default:return n=hr(e,t),n}}function aa(e,t){let n=-1;const s=[];for(;++n<t.length;){const r=Bt(e,t[n]);s.push(r)}return s}function hr(e,t){const n=e.schema;e.schema=t.namespaceURI===he.svg?Ue:it;let s=-1;const r={};for(;++s<t.attrs.length;){const f=t.attrs[s],m=(f.prefix?f.prefix+":":"")+f.name;na.call(lr,m)||(r[m]=f.value)}const d=(e.schema.space==="svg"?ir:or)(t.tagName,r,aa(e,t.childNodes));if(Je(e,t,d),d.tagName==="template"){const f=t,m=f.sourceCodeLocation,E=m&&m.startTag&&Ae(m.startTag),A=m&&m.endTag&&Ae(m.endTag),x=Bt(e,f.content);E&&A&&e.file&&(x.position={start:E.end,end:A.start}),d.content=x}return e.schema=n,d}function Je(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const s=mr(e,n,t.sourceCodeLocation);s&&(e.location=!0,n.position=s)}}function mr(e,t,n){const s=Ae(n);if(t.type==="element"){const r=t.children[t.children.length-1];if(s&&!n.endTag&&r&&r.position&&r.position.end&&(s.end=Object.assign({},r.position.end)),e.verbose){const u={};let d;if(n.attrs)for(d in n.attrs)na.call(n.attrs,d)&&(u[kt(e.schema,d).property]=Ae(n.attrs[d]));It(n.startTag);const f=Ae(n.startTag),m=n.endTag?Ae(n.endTag):void 0,E={opening:f};m&&(E.closing=m),E.properties=u,t.data={position:E}}}return s}function Ae(e){const t=hn({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=hn({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function hn(e){return e.line&&e.column?e:void 0}const fr={},pr={}.hasOwnProperty,sa=Bn("type",{handlers:{root:gr,element:yr,text:_r,comment:Ar,doctype:Tr}});function br(e,t){const s=(t||fr).space;return sa(e,s==="svg"?Ue:it)}function gr(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=Ht(e.children,n,t),Ne(e,n),n}function Er(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=Ht(e.children,n,t),Ne(e,n),n}function Tr(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return Ne(e,t),t}function _r(e){const t={nodeName:"#text",value:e.value,parentNode:null};return Ne(e,t),t}function Ar(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return Ne(e,t),t}function yr(e,t){const n=t;let s=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(s=Ue);const r=[];let u;if(e.properties){for(u in e.properties)if(u!=="children"&&pr.call(e.properties,u)){const m=Nr(s,u,e.properties[u]);m&&r.push(m)}}const d=s.space,f={nodeName:e.tagName,tagName:e.tagName,attrs:r,namespaceURI:he[d],childNodes:[],parentNode:null};return f.childNodes=Ht(e.children,f,s),Ne(e,f),e.tagName==="template"&&e.content&&(f.content=Er(e.content,s)),f}function Nr(e,t,n){const s=kt(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&s.boolean)return;Array.isArray(n)&&(n=s.commaSeparated?Va(n):Ka(n));const r={name:s.attribute,value:n===!0?"":String(n)};if(s.space&&s.space!=="html"&&s.space!=="svg"){const u=r.name.indexOf(":");u<0?r.prefix="":(r.name=r.name.slice(u+1),r.prefix=s.attribute.slice(0,u)),r.namespace=he[s.space]}return r}function Ht(e,t,n){let s=-1;const r=[];if(e)for(;++s<e.length;){const u=sa(e[s],n);u.parentNode=t,r.push(u)}return r}function Ne(e,t){const n=e.position;n&&n.start&&n.end&&(It(typeof n.start.offset=="number"),It(typeof n.end.offset=="number"),t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const Cr=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],Ir=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),R="�";var o;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(o||(o={}));const U={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function ra(e){return e>=55296&&e<=57343}function xr(e){return e>=56320&&e<=57343}function Sr(e,t){return(e-55296)*1024+9216+t}function ua(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function oa(e){return e>=64976&&e<=65007||Ir.has(e)}var p;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(p||(p={}));const wr=65536;class Rr{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=wr,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:s,col:r,offset:u}=this,d=r+n,f=u+n;return{code:t,startLine:s,endLine:s,startCol:d,endCol:d,startOffset:f,endOffset:f}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(xr(n))return this.pos++,this._addGap(),Sr(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,o.EOF;return this._err(p.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let s=0;s<t.length;s++)if((this.html.charCodeAt(this.pos+s)|32)!==t.charCodeAt(s))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,o.EOF;const s=this.html.charCodeAt(n);return s===o.CARRIAGE_RETURN?o.LINE_FEED:s}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,o.EOF;let t=this.html.charCodeAt(this.pos);return t===o.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,o.LINE_FEED):t===o.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,ra(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===o.LINE_FEED||t===o.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){ua(t)?this._err(p.controlCharacterInInputStream):oa(t)&&this._err(p.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var I;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(I||(I={}));function ia(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const Or=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Lr=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function Dr(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=Lr.get(e))!==null&&t!==void 0?t:e}var k;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(k||(k={}));const vr=32;var ae;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(ae||(ae={}));function wt(e){return e>=k.ZERO&&e<=k.NINE}function kr(e){return e>=k.UPPER_A&&e<=k.UPPER_F||e>=k.LOWER_A&&e<=k.LOWER_F}function Pr(e){return e>=k.UPPER_A&&e<=k.UPPER_Z||e>=k.LOWER_A&&e<=k.LOWER_Z||wt(e)}function Mr(e){return e===k.EQUALS||Pr(e)}var v;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(v||(v={}));var J;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(J||(J={}));class Br{constructor(t,n,s){this.decodeTree=t,this.emitCodePoint=n,this.errors=s,this.state=v.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=J.Strict}startEntity(t){this.decodeMode=t,this.state=v.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case v.EntityStart:return t.charCodeAt(n)===k.NUM?(this.state=v.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=v.NamedEntity,this.stateNamedEntity(t,n));case v.NumericStart:return this.stateNumericStart(t,n);case v.NumericDecimal:return this.stateNumericDecimal(t,n);case v.NumericHex:return this.stateNumericHex(t,n);case v.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|vr)===k.LOWER_X?(this.state=v.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=v.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,s,r){if(n!==s){const u=s-n;this.result=this.result*Math.pow(r,u)+Number.parseInt(t.substr(n,u),r),this.consumed+=u}}stateNumericHex(t,n){const s=n;for(;n<t.length;){const r=t.charCodeAt(n);if(wt(r)||kr(r))n+=1;else return this.addToNumericResult(t,s,n,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(t,s,n,16),-1}stateNumericDecimal(t,n){const s=n;for(;n<t.length;){const r=t.charCodeAt(n);if(wt(r))n+=1;else return this.addToNumericResult(t,s,n,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(t,s,n,10),-1}emitNumericEntity(t,n){var s;if(this.consumed<=n)return(s=this.errors)===null||s===void 0||s.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===k.SEMI)this.consumed+=1;else if(this.decodeMode===J.Strict)return 0;return this.emitCodePoint(Dr(this.result),this.consumed),this.errors&&(t!==k.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:s}=this;let r=s[this.treeIndex],u=(r&ae.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const d=t.charCodeAt(n);if(this.treeIndex=Hr(s,r,this.treeIndex+Math.max(1,u),d),this.treeIndex<0)return this.result===0||this.decodeMode===J.Attribute&&(u===0||Mr(d))?0:this.emitNotTerminatedNamedEntity();if(r=s[this.treeIndex],u=(r&ae.VALUE_LENGTH)>>14,u!==0){if(d===k.SEMI)return this.emitNamedEntityData(this.treeIndex,u,this.consumed+this.excess);this.decodeMode!==J.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:s}=this,r=(s[n]&ae.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,r,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,s){const{decodeTree:r}=this;return this.emitCodePoint(n===1?r[t]&~ae.VALUE_LENGTH:r[t+1],s),n===3&&this.emitCodePoint(r[t+2],s),s}end(){var t;switch(this.state){case v.NamedEntity:return this.result!==0&&(this.decodeMode!==J.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case v.NumericDecimal:return this.emitNumericEntity(0,2);case v.NumericHex:return this.emitNumericEntity(0,3);case v.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case v.EntityStart:return 0}}}function Hr(e,t,n,s){const r=(t&ae.BRANCH_LENGTH)>>7,u=t&ae.JUMP_TABLE;if(r===0)return u!==0&&s===u?n:-1;if(u){const m=s-u;return m<0||m>=r?-1:e[n+m]-1}let d=n,f=d+r-1;for(;d<=f;){const m=d+f>>>1,E=e[m];if(E<s)d=m+1;else if(E>s)f=m-1;else return e[m+r]}return-1}var b;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(b||(b={}));var me;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(me||(me={}));var z;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(z||(z={}));var h;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(h||(h={}));var a;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(a||(a={}));const Ur=new Map([[h.A,a.A],[h.ADDRESS,a.ADDRESS],[h.ANNOTATION_XML,a.ANNOTATION_XML],[h.APPLET,a.APPLET],[h.AREA,a.AREA],[h.ARTICLE,a.ARTICLE],[h.ASIDE,a.ASIDE],[h.B,a.B],[h.BASE,a.BASE],[h.BASEFONT,a.BASEFONT],[h.BGSOUND,a.BGSOUND],[h.BIG,a.BIG],[h.BLOCKQUOTE,a.BLOCKQUOTE],[h.BODY,a.BODY],[h.BR,a.BR],[h.BUTTON,a.BUTTON],[h.CAPTION,a.CAPTION],[h.CENTER,a.CENTER],[h.CODE,a.CODE],[h.COL,a.COL],[h.COLGROUP,a.COLGROUP],[h.DD,a.DD],[h.DESC,a.DESC],[h.DETAILS,a.DETAILS],[h.DIALOG,a.DIALOG],[h.DIR,a.DIR],[h.DIV,a.DIV],[h.DL,a.DL],[h.DT,a.DT],[h.EM,a.EM],[h.EMBED,a.EMBED],[h.FIELDSET,a.FIELDSET],[h.FIGCAPTION,a.FIGCAPTION],[h.FIGURE,a.FIGURE],[h.FONT,a.FONT],[h.FOOTER,a.FOOTER],[h.FOREIGN_OBJECT,a.FOREIGN_OBJECT],[h.FORM,a.FORM],[h.FRAME,a.FRAME],[h.FRAMESET,a.FRAMESET],[h.H1,a.H1],[h.H2,a.H2],[h.H3,a.H3],[h.H4,a.H4],[h.H5,a.H5],[h.H6,a.H6],[h.HEAD,a.HEAD],[h.HEADER,a.HEADER],[h.HGROUP,a.HGROUP],[h.HR,a.HR],[h.HTML,a.HTML],[h.I,a.I],[h.IMG,a.IMG],[h.IMAGE,a.IMAGE],[h.INPUT,a.INPUT],[h.IFRAME,a.IFRAME],[h.KEYGEN,a.KEYGEN],[h.LABEL,a.LABEL],[h.LI,a.LI],[h.LINK,a.LINK],[h.LISTING,a.LISTING],[h.MAIN,a.MAIN],[h.MALIGNMARK,a.MALIGNMARK],[h.MARQUEE,a.MARQUEE],[h.MATH,a.MATH],[h.MENU,a.MENU],[h.META,a.META],[h.MGLYPH,a.MGLYPH],[h.MI,a.MI],[h.MO,a.MO],[h.MN,a.MN],[h.MS,a.MS],[h.MTEXT,a.MTEXT],[h.NAV,a.NAV],[h.NOBR,a.NOBR],[h.NOFRAMES,a.NOFRAMES],[h.NOEMBED,a.NOEMBED],[h.NOSCRIPT,a.NOSCRIPT],[h.OBJECT,a.OBJECT],[h.OL,a.OL],[h.OPTGROUP,a.OPTGROUP],[h.OPTION,a.OPTION],[h.P,a.P],[h.PARAM,a.PARAM],[h.PLAINTEXT,a.PLAINTEXT],[h.PRE,a.PRE],[h.RB,a.RB],[h.RP,a.RP],[h.RT,a.RT],[h.RTC,a.RTC],[h.RUBY,a.RUBY],[h.S,a.S],[h.SCRIPT,a.SCRIPT],[h.SEARCH,a.SEARCH],[h.SECTION,a.SECTION],[h.SELECT,a.SELECT],[h.SOURCE,a.SOURCE],[h.SMALL,a.SMALL],[h.SPAN,a.SPAN],[h.STRIKE,a.STRIKE],[h.STRONG,a.STRONG],[h.STYLE,a.STYLE],[h.SUB,a.SUB],[h.SUMMARY,a.SUMMARY],[h.SUP,a.SUP],[h.TABLE,a.TABLE],[h.TBODY,a.TBODY],[h.TEMPLATE,a.TEMPLATE],[h.TEXTAREA,a.TEXTAREA],[h.TFOOT,a.TFOOT],[h.TD,a.TD],[h.TH,a.TH],[h.THEAD,a.THEAD],[h.TITLE,a.TITLE],[h.TR,a.TR],[h.TRACK,a.TRACK],[h.TT,a.TT],[h.U,a.U],[h.UL,a.UL],[h.SVG,a.SVG],[h.VAR,a.VAR],[h.WBR,a.WBR],[h.XMP,a.XMP]]);function Ce(e){var t;return(t=Ur.get(e))!==null&&t!==void 0?t:a.UNKNOWN}const g=a,Fr={[b.HTML]:new Set([g.ADDRESS,g.APPLET,g.AREA,g.ARTICLE,g.ASIDE,g.BASE,g.BASEFONT,g.BGSOUND,g.BLOCKQUOTE,g.BODY,g.BR,g.BUTTON,g.CAPTION,g.CENTER,g.COL,g.COLGROUP,g.DD,g.DETAILS,g.DIR,g.DIV,g.DL,g.DT,g.EMBED,g.FIELDSET,g.FIGCAPTION,g.FIGURE,g.FOOTER,g.FORM,g.FRAME,g.FRAMESET,g.H1,g.H2,g.H3,g.H4,g.H5,g.H6,g.HEAD,g.HEADER,g.HGROUP,g.HR,g.HTML,g.IFRAME,g.IMG,g.INPUT,g.LI,g.LINK,g.LISTING,g.MAIN,g.MARQUEE,g.MENU,g.META,g.NAV,g.NOEMBED,g.NOFRAMES,g.NOSCRIPT,g.OBJECT,g.OL,g.P,g.PARAM,g.PLAINTEXT,g.PRE,g.SCRIPT,g.SECTION,g.SELECT,g.SOURCE,g.STYLE,g.SUMMARY,g.TABLE,g.TBODY,g.TD,g.TEMPLATE,g.TEXTAREA,g.TFOOT,g.TH,g.THEAD,g.TITLE,g.TR,g.TRACK,g.UL,g.WBR,g.XMP]),[b.MATHML]:new Set([g.MI,g.MO,g.MN,g.MS,g.MTEXT,g.ANNOTATION_XML]),[b.SVG]:new Set([g.TITLE,g.FOREIGN_OBJECT,g.DESC]),[b.XLINK]:new Set,[b.XML]:new Set,[b.XMLNS]:new Set},Rt=new Set([g.H1,g.H2,g.H3,g.H4,g.H5,g.H6]);h.STYLE,h.SCRIPT,h.XMP,h.IFRAME,h.NOEMBED,h.NOFRAMES,h.PLAINTEXT;var i;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(i||(i={}));const O={DATA:i.DATA,RCDATA:i.RCDATA,RAWTEXT:i.RAWTEXT,SCRIPT_DATA:i.SCRIPT_DATA,PLAINTEXT:i.PLAINTEXT,CDATA_SECTION:i.CDATA_SECTION};function jr(e){return e>=o.DIGIT_0&&e<=o.DIGIT_9}function De(e){return e>=o.LATIN_CAPITAL_A&&e<=o.LATIN_CAPITAL_Z}function Yr(e){return e>=o.LATIN_SMALL_A&&e<=o.LATIN_SMALL_Z}function ee(e){return Yr(e)||De(e)}function mn(e){return ee(e)||jr(e)}function Xe(e){return e+32}function ca(e){return e===o.SPACE||e===o.LINE_FEED||e===o.TABULATION||e===o.FORM_FEED}function fn(e){return ca(e)||e===o.SOLIDUS||e===o.GREATER_THAN_SIGN}function Wr(e){return e===o.NULL?p.nullCharacterReference:e>1114111?p.characterReferenceOutsideUnicodeRange:ra(e)?p.surrogateCharacterReference:oa(e)?p.noncharacterCharacterReference:ua(e)||e===o.CARRIAGE_RETURN?p.controlCharacterReference:null}class Gr{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=i.DATA,this.returnState=i.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new Rr(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new Br(Or,(s,r)=>{this.preprocessor.pos=this.entityStartPos+r-1,this._flushCodePointConsumedAsCharacterReference(s)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(p.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:s=>{this._err(p.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+s)},validateNumericCharacterReference:s=>{const r=Wr(s);r&&this._err(r,1)}}:void 0)}_err(t,n=0){var s,r;(r=(s=this.handler).onParseError)===null||r===void 0||r.call(s,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t?.())}write(t,n,s){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||s?.()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:I.START_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:I.END_TAG,tagName:"",tagID:a.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:I.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:I.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const s=this.currentToken;if(ia(s,this.currentAttr.name)===null){if(s.attrs.push(this.currentAttr),s.location&&this.currentLocation){const r=(t=(n=s.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);r[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(p.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=Ce(t.tagName),t.type===I.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(p.endTagWithAttributes),t.selfClosing&&this._err(p.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case I.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case I.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case I.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:I.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=ca(t)?I.WHITESPACE_CHARACTER:t===o.NULL?I.NULL_CHARACTER:I.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(I.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=i.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?J.Attribute:J.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===i.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===i.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===i.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case i.DATA:{this._stateData(t);break}case i.RCDATA:{this._stateRcdata(t);break}case i.RAWTEXT:{this._stateRawtext(t);break}case i.SCRIPT_DATA:{this._stateScriptData(t);break}case i.PLAINTEXT:{this._statePlaintext(t);break}case i.TAG_OPEN:{this._stateTagOpen(t);break}case i.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case i.TAG_NAME:{this._stateTagName(t);break}case i.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case i.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case i.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case i.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case i.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case i.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case i.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case i.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case i.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case i.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case i.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case i.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case i.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case i.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case i.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case i.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case i.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case i.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case i.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case i.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case i.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case i.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case i.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case i.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case i.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case i.BOGUS_COMMENT:{this._stateBogusComment(t);break}case i.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case i.COMMENT_START:{this._stateCommentStart(t);break}case i.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case i.COMMENT:{this._stateComment(t);break}case i.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case i.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case i.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case i.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case i.COMMENT_END:{this._stateCommentEnd(t);break}case i.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case i.DOCTYPE:{this._stateDoctype(t);break}case i.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case i.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case i.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case i.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case i.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case i.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case i.CDATA_SECTION:{this._stateCdataSection(t);break}case i.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case i.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case i.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case i.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case o.LESS_THAN_SIGN:{this.state=i.TAG_OPEN;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitCodePoint(t);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case o.AMPERSAND:{this._startCharacterReference();break}case o.LESS_THAN_SIGN:{this.state=i.RCDATA_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case o.LESS_THAN_SIGN:{this.state=i.RAWTEXT_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(ee(t))this._createStartTagToken(),this.state=i.TAG_NAME,this._stateTagName(t);else switch(t){case o.EXCLAMATION_MARK:{this.state=i.MARKUP_DECLARATION_OPEN;break}case o.SOLIDUS:{this.state=i.END_TAG_OPEN;break}case o.QUESTION_MARK:{this._err(p.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=i.BOGUS_COMMENT,this._stateBogusComment(t);break}case o.EOF:{this._err(p.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(p.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=i.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(ee(t))this._createEndTagToken(),this.state=i.TAG_NAME,this._stateTagName(t);else switch(t){case o.GREATER_THAN_SIGN:{this._err(p.missingEndTagName),this.state=i.DATA;break}case o.EOF:{this._err(p.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(p.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=i.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.BEFORE_ATTRIBUTE_NAME;break}case o.SOLIDUS:{this.state=i.SELF_CLOSING_START_TAG;break}case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentTagToken();break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.tagName+=R;break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(De(t)?Xe(t):t)}}_stateRcdataLessThanSign(t){t===o.SOLIDUS?this.state=i.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=i.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){ee(t)?(this.state=i.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=i.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=i.BEFORE_ATTRIBUTE_NAME,!1;case o.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=i.SELF_CLOSING_START_TAG,!1;case o.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=i.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=i.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===o.SOLIDUS?this.state=i.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=i.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){ee(t)?(this.state=i.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=i.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=i.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case o.SOLIDUS:{this.state=i.SCRIPT_DATA_END_TAG_OPEN;break}case o.EXCLAMATION_MARK:{this.state=i.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=i.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){ee(t)?(this.state=i.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=i.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=i.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===o.HYPHEN_MINUS?(this.state=i.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=i.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===o.HYPHEN_MINUS?(this.state=i.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=i.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case o.HYPHEN_MINUS:{this.state=i.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case o.HYPHEN_MINUS:{this.state=i.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.state=i.SCRIPT_DATA_ESCAPED,this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=i.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case o.HYPHEN_MINUS:{this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case o.GREATER_THAN_SIGN:{this.state=i.SCRIPT_DATA,this._emitChars(">");break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.state=i.SCRIPT_DATA_ESCAPED,this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=i.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===o.SOLIDUS?this.state=i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:ee(t)?(this._emitChars("<"),this.state=i.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=i.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){ee(t)?(this.state=i.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=i.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=i.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(U.SCRIPT,!1)&&fn(this.preprocessor.peek(U.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<U.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=i.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case o.HYPHEN_MINUS:{this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.NULL:{this._err(p.unexpectedNullCharacter),this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case o.HYPHEN_MINUS:{this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case o.HYPHEN_MINUS:{this._emitChars("-");break}case o.LESS_THAN_SIGN:{this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case o.GREATER_THAN_SIGN:{this.state=i.SCRIPT_DATA,this._emitChars(">");break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(R);break}case o.EOF:{this._err(p.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===o.SOLIDUS?(this.state=i.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(U.SCRIPT,!1)&&fn(this.preprocessor.peek(U.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<U.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=i.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=i.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.SOLIDUS:case o.GREATER_THAN_SIGN:case o.EOF:{this.state=i.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case o.EQUALS_SIGN:{this._err(p.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=i.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=i.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:case o.SOLIDUS:case o.GREATER_THAN_SIGN:case o.EOF:{this._leaveAttrName(),this.state=i.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case o.EQUALS_SIGN:{this._leaveAttrName(),this.state=i.BEFORE_ATTRIBUTE_VALUE;break}case o.QUOTATION_MARK:case o.APOSTROPHE:case o.LESS_THAN_SIGN:{this._err(p.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.currentAttr.name+=R;break}default:this.currentAttr.name+=String.fromCodePoint(De(t)?Xe(t):t)}}_stateAfterAttributeName(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.SOLIDUS:{this.state=i.SELF_CLOSING_START_TAG;break}case o.EQUALS_SIGN:{this.state=i.BEFORE_ATTRIBUTE_VALUE;break}case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=i.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{this.state=i.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this.state=i.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(p.missingAttributeValue),this.state=i.DATA,this.emitCurrentTagToken();break}default:this.state=i.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case o.QUOTATION_MARK:{this.state=i.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.currentAttr.value+=R;break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case o.APOSTROPHE:{this.state=i.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.currentAttr.value+=R;break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this._leaveAttrValue(),this.state=i.BEFORE_ATTRIBUTE_NAME;break}case o.AMPERSAND:{this._startCharacterReference();break}case o.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=i.DATA,this.emitCurrentTagToken();break}case o.NULL:{this._err(p.unexpectedNullCharacter),this.currentAttr.value+=R;break}case o.QUOTATION_MARK:case o.APOSTROPHE:case o.LESS_THAN_SIGN:case o.EQUALS_SIGN:case o.GRAVE_ACCENT:{this._err(p.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this._leaveAttrValue(),this.state=i.BEFORE_ATTRIBUTE_NAME;break}case o.SOLIDUS:{this._leaveAttrValue(),this.state=i.SELF_CLOSING_START_TAG;break}case o.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=i.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this._err(p.missingWhitespaceBetweenAttributes),this.state=i.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case o.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=i.DATA,this.emitCurrentTagToken();break}case o.EOF:{this._err(p.eofInTag),this._emitEOFToken();break}default:this._err(p.unexpectedSolidusInTag),this.state=i.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentComment(n);break}case o.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.data+=R;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(U.DASH_DASH,!0)?(this._createCommentToken(U.DASH_DASH.length+1),this.state=i.COMMENT_START):this._consumeSequenceIfMatch(U.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(U.DOCTYPE.length+1),this.state=i.DOCTYPE):this._consumeSequenceIfMatch(U.CDATA_START,!0)?this.inForeignNode?this.state=i.CDATA_SECTION:(this._err(p.cdataInHtmlContent),this._createCommentToken(U.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=i.BOGUS_COMMENT):this._ensureHibernation()||(this._err(p.incorrectlyOpenedComment),this._createCommentToken(2),this.state=i.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case o.HYPHEN_MINUS:{this.state=i.COMMENT_START_DASH;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptClosingOfEmptyComment),this.state=i.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=i.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=i.COMMENT_END;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptClosingOfEmptyComment),this.state=i.DATA,this.emitCurrentComment(n);break}case o.EOF:{this._err(p.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=i.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=i.COMMENT_END_DASH;break}case o.LESS_THAN_SIGN:{n.data+="<",this.state=i.COMMENT_LESS_THAN_SIGN;break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.data+=R;break}case o.EOF:{this._err(p.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case o.EXCLAMATION_MARK:{n.data+="!",this.state=i.COMMENT_LESS_THAN_SIGN_BANG;break}case o.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=i.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===o.HYPHEN_MINUS?this.state=i.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=i.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===o.HYPHEN_MINUS?this.state=i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=i.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==o.GREATER_THAN_SIGN&&t!==o.EOF&&this._err(p.nestedComment),this.state=i.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case o.HYPHEN_MINUS:{this.state=i.COMMENT_END;break}case o.EOF:{this._err(p.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=i.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentComment(n);break}case o.EXCLAMATION_MARK:{this.state=i.COMMENT_END_BANG;break}case o.HYPHEN_MINUS:{n.data+="-";break}case o.EOF:{this._err(p.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=i.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case o.HYPHEN_MINUS:{n.data+="--!",this.state=i.COMMENT_END_DASH;break}case o.GREATER_THAN_SIGN:{this._err(p.incorrectlyClosedComment),this.state=i.DATA,this.emitCurrentComment(n);break}case o.EOF:{this._err(p.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=i.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.BEFORE_DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this.state=i.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case o.EOF:{this._err(p.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingWhitespaceBeforeDoctypeName),this.state=i.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(De(t))this._createDoctypeToken(String.fromCharCode(Xe(t))),this.state=i.DOCTYPE_NAME;else switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.NULL:{this._err(p.unexpectedNullCharacter),this._createDoctypeToken(R),this.state=i.DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this._err(p.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=i.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.AFTER_DOCTYPE_NAME;break}case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.name+=R;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(De(t)?Xe(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(U.PUBLIC,!1)?this.state=i.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(U.SYSTEM,!1)?this.state=i.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(p.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.QUOTATION_MARK:{this._err(p.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(p.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(p.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{n.publicId="",this.state=i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{n.publicId="",this.state=i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(p.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case o.QUOTATION_MARK:{this.state=i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.publicId+=R;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case o.APOSTROPHE:{this.state=i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.publicId+=R;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case o.GREATER_THAN_SIGN:{this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.QUOTATION_MARK:{this._err(p.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(p.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.QUOTATION_MARK:{n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:{this.state=i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.QUOTATION_MARK:{this._err(p.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{this._err(p.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(p.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.QUOTATION_MARK:{n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case o.APOSTROPHE:{n.systemId="",this.state=i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case o.GREATER_THAN_SIGN:{this._err(p.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.DATA,this.emitCurrentDoctype(n);break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case o.QUOTATION_MARK:{this.state=i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.systemId+=R;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case o.APOSTROPHE:{this.state=i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case o.NULL:{this._err(p.unexpectedNullCharacter),n.systemId+=R;break}case o.GREATER_THAN_SIGN:{this._err(p.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case o.SPACE:case o.LINE_FEED:case o.TABULATION:case o.FORM_FEED:break;case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.EOF:{this._err(p.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(p.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=i.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case o.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=i.DATA;break}case o.NULL:{this._err(p.unexpectedNullCharacter);break}case o.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case o.RIGHT_SQUARE_BRACKET:{this.state=i.CDATA_SECTION_BRACKET;break}case o.EOF:{this._err(p.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===o.RIGHT_SQUARE_BRACKET?this.state=i.CDATA_SECTION_END:(this._emitChars("]"),this.state=i.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case o.GREATER_THAN_SIGN:{this.state=i.DATA;break}case o.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=i.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(o.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&mn(this.preprocessor.peek(1))?i.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){mn(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===o.SEMICOLON&&this._err(p.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const la=new Set([a.DD,a.DT,a.LI,a.OPTGROUP,a.OPTION,a.P,a.RB,a.RP,a.RT,a.RTC]),pn=new Set([...la,a.CAPTION,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]),et=new Set([a.APPLET,a.CAPTION,a.HTML,a.MARQUEE,a.OBJECT,a.TABLE,a.TD,a.TEMPLATE,a.TH]),zr=new Set([...et,a.OL,a.UL]),qr=new Set([...et,a.BUTTON]),bn=new Set([a.ANNOTATION_XML,a.MI,a.MN,a.MO,a.MS,a.MTEXT]),gn=new Set([a.DESC,a.FOREIGN_OBJECT,a.TITLE]),Qr=new Set([a.TR,a.TEMPLATE,a.HTML]),Vr=new Set([a.TBODY,a.TFOOT,a.THEAD,a.TEMPLATE,a.HTML]),Kr=new Set([a.TABLE,a.TEMPLATE,a.HTML]),Xr=new Set([a.TD,a.TH]);class Jr{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,s){this.treeAdapter=n,this.handler=s,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=a.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===a.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===b.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const s=this._indexOf(t);this.items[s]=n,s===this.stackTop&&(this.current=n)}insertAfter(t,n,s){const r=this._indexOf(t)+1;this.items.splice(r,0,n),this.tagIDs.splice(r,0,s),this.stackTop++,r===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,r===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==b.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const s=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(s,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(Rt,b.HTML)}popUntilTableCellPopped(){this.popUntilPopped(Xr,b.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let s=this.stackTop;s>=0;s--)if(t.has(this.tagIDs[s])&&this.treeAdapter.getNamespaceURI(this.items[s])===n)return s;return-1}clearBackTo(t,n){const s=this._indexOfTagNames(t,n);this.shortenToLength(s+1)}clearBackToTableContext(){this.clearBackTo(Kr,b.HTML)}clearBackToTableBodyContext(){this.clearBackTo(Vr,b.HTML)}clearBackToTableRowContext(){this.clearBackTo(Qr,b.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===a.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===a.HTML}hasInDynamicScope(t,n){for(let s=this.stackTop;s>=0;s--){const r=this.tagIDs[s];switch(this.treeAdapter.getNamespaceURI(this.items[s])){case b.HTML:{if(r===t)return!0;if(n.has(r))return!1;break}case b.SVG:{if(gn.has(r))return!1;break}case b.MATHML:{if(bn.has(r))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,et)}hasInListItemScope(t){return this.hasInDynamicScope(t,zr)}hasInButtonScope(t){return this.hasInDynamicScope(t,qr)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case b.HTML:{if(Rt.has(n))return!0;if(et.has(n))return!1;break}case b.SVG:{if(gn.has(n))return!1;break}case b.MATHML:{if(bn.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===b.HTML)switch(this.tagIDs[n]){case t:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===b.HTML)switch(this.tagIDs[t]){case a.TBODY:case a.THEAD:case a.TFOOT:return!0;case a.TABLE:case a.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===b.HTML)switch(this.tagIDs[n]){case t:return!0;case a.OPTION:case a.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&la.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&pn.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&pn.has(this.currentTagId);)this.pop()}}const yt=3;var K;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(K||(K={}));const En={type:K.Marker};class $r{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const s=[],r=n.length,u=this.treeAdapter.getTagName(t),d=this.treeAdapter.getNamespaceURI(t);for(let f=0;f<this.entries.length;f++){const m=this.entries[f];if(m.type===K.Marker)break;const{element:E}=m;if(this.treeAdapter.getTagName(E)===u&&this.treeAdapter.getNamespaceURI(E)===d){const A=this.treeAdapter.getAttrList(E);A.length===r&&s.push({idx:f,attrs:A})}}return s}_ensureNoahArkCondition(t){if(this.entries.length<yt)return;const n=this.treeAdapter.getAttrList(t),s=this._getNoahArkConditionCandidates(t,n);if(s.length<yt)return;const r=new Map(n.map(d=>[d.name,d.value]));let u=0;for(let d=0;d<s.length;d++){const f=s[d];f.attrs.every(m=>r.get(m.name)===m.value)&&(u+=1,u>=yt&&this.entries.splice(f.idx,1))}}insertMarker(){this.entries.unshift(En)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:K.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const s=this.entries.indexOf(this.bookmark);this.entries.splice(s,0,{type:K.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(En);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(s=>s.type===K.Marker||this.treeAdapter.getTagName(s.element)===t);return n&&n.type===K.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===K.Element&&n.element===t)}}const te={createDocument(){return{nodeName:"#document",mode:z.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const s=e.childNodes.indexOf(n);e.childNodes.splice(s,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,s){const r=e.childNodes.find(u=>u.nodeName==="#documentType");if(r)r.name=t,r.publicId=n,r.systemId=s;else{const u={nodeName:"#documentType",name:t,publicId:n,systemId:s,parentNode:null};te.appendChild(e,u)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(te.isTextNode(n)){n.value+=t;return}}te.appendChild(e,te.createTextNode(t))},insertTextBefore(e,t,n){const s=e.childNodes[e.childNodes.indexOf(n)-1];s&&te.isTextNode(s)?s.value+=t:te.insertBefore(e,te.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(s=>s.name));for(let s=0;s<t.length;s++)n.has(t[s].name)||e.attrs.push(t[s])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},da="html",Zr="about:legacy-compat",eu="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",ha=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],tu=[...ha,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],nu=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),ma=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],au=[...ma,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function Tn(e,t){return t.some(n=>e.startsWith(n))}function su(e){return e.name===da&&e.publicId===null&&(e.systemId===null||e.systemId===Zr)}function ru(e){if(e.name!==da)return z.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===eu)return z.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),nu.has(n))return z.QUIRKS;let s=t===null?tu:ha;if(Tn(n,s))return z.QUIRKS;if(s=t===null?ma:au,Tn(n,s))return z.LIMITED_QUIRKS}return z.NO_QUIRKS}const _n={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},uu="definitionurl",ou="definitionURL",iu=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),cu=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:b.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:b.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:b.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:b.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:b.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:b.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:b.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:b.XML}],["xml:space",{prefix:"xml",name:"space",namespace:b.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:b.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:b.XMLNS}]]),lu=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),du=new Set([a.B,a.BIG,a.BLOCKQUOTE,a.BODY,a.BR,a.CENTER,a.CODE,a.DD,a.DIV,a.DL,a.DT,a.EM,a.EMBED,a.H1,a.H2,a.H3,a.H4,a.H5,a.H6,a.HEAD,a.HR,a.I,a.IMG,a.LI,a.LISTING,a.MENU,a.META,a.NOBR,a.OL,a.P,a.PRE,a.RUBY,a.S,a.SMALL,a.SPAN,a.STRONG,a.STRIKE,a.SUB,a.SUP,a.TABLE,a.TT,a.U,a.UL,a.VAR]);function hu(e){const t=e.tagID;return t===a.FONT&&e.attrs.some(({name:s})=>s===me.COLOR||s===me.SIZE||s===me.FACE)||du.has(t)}function fa(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===uu){e.attrs[t].name=ou;break}}function pa(e){for(let t=0;t<e.attrs.length;t++){const n=iu.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function Ut(e){for(let t=0;t<e.attrs.length;t++){const n=cu.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function mu(e){const t=lu.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=Ce(e.tagName))}function fu(e,t){return t===b.MATHML&&(e===a.MI||e===a.MO||e===a.MN||e===a.MS||e===a.MTEXT)}function pu(e,t,n){if(t===b.MATHML&&e===a.ANNOTATION_XML){for(let s=0;s<n.length;s++)if(n[s].name===me.ENCODING){const r=n[s].value.toLowerCase();return r===_n.TEXT_HTML||r===_n.APPLICATION_XML}}return t===b.SVG&&(e===a.FOREIGN_OBJECT||e===a.DESC||e===a.TITLE)}function bu(e,t,n,s){return(!s||s===b.HTML)&&pu(e,t,n)||(!s||s===b.MATHML)&&fu(e,t)}const gu="hidden",Eu=8,Tu=3;var c;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(c||(c={}));const _u={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},ba=new Set([a.TABLE,a.TBODY,a.TFOOT,a.THEAD,a.TR]),An={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:te,onParseError:null};class yn{constructor(t,n,s=null,r=null){this.fragmentContext=s,this.scriptHandler=r,this.currentToken=null,this.stopped=!1,this.insertionMode=c.INITIAL,this.originalInsertionMode=c.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...An,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new Gr(this.options,this),this.activeFormattingElements=new $r(this.treeAdapter),this.fragmentContextID=s?Ce(this.treeAdapter.getTagName(s)):a.UNKNOWN,this._setContextModes(s??this.document,this.fragmentContextID),this.openElements=new Jr(this.document,this.treeAdapter,this)}static parse(t,n){const s=new this(n);return s.tokenizer.write(t,!0),s.document}static getFragmentParser(t,n){const s={...An,...n};t??(t=s.treeAdapter.createElement(h.TEMPLATE,b.HTML,[]));const r=s.treeAdapter.createElement("documentmock",b.HTML,[]),u=new this(s,r,t);return u.fragmentContextID===a.TEMPLATE&&u.tmplInsertionModeStack.unshift(c.IN_TEMPLATE),u._initTokenizerForFragmentParsing(),u._insertFakeRootElement(),u._resetInsertionMode(),u._findFormInFragmentContext(),u}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,s){var r;if(!this.onParseError)return;const u=(r=t.location)!==null&&r!==void 0?r:_u,d={code:n,startLine:u.startLine,startCol:u.startCol,startOffset:u.startOffset,endLine:s?u.startLine:u.endLine,endCol:s?u.startCol:u.endCol,endOffset:s?u.startOffset:u.endOffset};this.onParseError(d)}onItemPush(t,n,s){var r,u;(u=(r=this.treeAdapter).onItemPush)===null||u===void 0||u.call(r,t),s&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var s,r;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(r=(s=this.treeAdapter).onItemPop)===null||r===void 0||r.call(s,t,this.openElements.current),n){let u,d;this.openElements.stackTop===0&&this.fragmentContext?(u=this.fragmentContext,d=this.fragmentContextID):{current:u,currentTagId:d}=this.openElements,this._setContextModes(u,d)}}_setContextModes(t,n){const s=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===b.HTML;this.currentNotInHTML=!s,this.tokenizer.inForeignNode=!s&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,b.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=c.TEXT}switchToPlaintextParsing(){this.insertionMode=c.TEXT,this.originalInsertionMode=c.IN_BODY,this.tokenizer.state=O.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===h.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==b.HTML))switch(this.fragmentContextID){case a.TITLE:case a.TEXTAREA:{this.tokenizer.state=O.RCDATA;break}case a.STYLE:case a.XMP:case a.IFRAME:case a.NOEMBED:case a.NOFRAMES:case a.NOSCRIPT:{this.tokenizer.state=O.RAWTEXT;break}case a.SCRIPT:{this.tokenizer.state=O.SCRIPT_DATA;break}case a.PLAINTEXT:{this.tokenizer.state=O.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",s=t.publicId||"",r=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,s,r),t.location){const d=this.treeAdapter.getChildNodes(this.document).find(f=>this.treeAdapter.isDocumentTypeNode(f));d&&this.treeAdapter.setNodeSourceCodeLocation(d,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const s=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,s)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const s=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(s??this.document,t)}}_appendElement(t,n){const s=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(s,t.location)}_insertElement(t,n){const s=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(s,t.location),this.openElements.push(s,t.tagID)}_insertFakeElement(t,n){const s=this.treeAdapter.createElement(t,b.HTML,[]);this._attachElementToTree(s,null),this.openElements.push(s,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,b.HTML,t.attrs),s=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,s),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(h.HTML,b.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,a.HTML)}_appendCommentNode(t,n){const s=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,s),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(s,t.location)}_insertCharacters(t){let n,s;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:s}=this._findFosterParentingLocation(),s?this.treeAdapter.insertTextBefore(n,t.chars,s):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const r=this.treeAdapter.getChildNodes(n),u=s?r.lastIndexOf(s):r.length,d=r[u-1];if(this.treeAdapter.getNodeSourceCodeLocation(d)){const{endLine:m,endCol:E,endOffset:A}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(d,{endLine:m,endCol:E,endOffset:A})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(d,t.location)}_adoptNodes(t,n){for(let s=this.treeAdapter.getFirstChild(t);s;s=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(s),this.treeAdapter.appendChild(n,s)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const s=n.location,r=this.treeAdapter.getTagName(t),u=n.type===I.END_TAG&&r===n.tagName?{endTag:{...s},endLine:s.endLine,endCol:s.endCol,endOffset:s.endOffset}:{endLine:s.startLine,endCol:s.startCol,endOffset:s.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,u)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,s;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,s=this.fragmentContextID):{current:n,currentTagId:s}=this.openElements,t.tagID===a.SVG&&this.treeAdapter.getTagName(n)===h.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===b.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===a.MGLYPH||t.tagID===a.MALIGNMARK)&&s!==void 0&&!this._isIntegrationPoint(s,n,b.HTML)}_processToken(t){switch(t.type){case I.CHARACTER:{this.onCharacter(t);break}case I.NULL_CHARACTER:{this.onNullCharacter(t);break}case I.COMMENT:{this.onComment(t);break}case I.DOCTYPE:{this.onDoctype(t);break}case I.START_TAG:{this._processStartTag(t);break}case I.END_TAG:{this.onEndTag(t);break}case I.EOF:{this.onEof(t);break}case I.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,s){const r=this.treeAdapter.getNamespaceURI(n),u=this.treeAdapter.getAttrList(n);return bu(t,r,u,s)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(r=>r.type===K.Marker||this.openElements.contains(r.element)),s=n===-1?t-1:n-1;for(let r=s;r>=0;r--){const u=this.activeFormattingElements.entries[r];this._insertElement(u.token,this.treeAdapter.getNamespaceURI(u.element)),u.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=c.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(a.P),this.openElements.popUntilTagNamePopped(a.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case a.TR:{this.insertionMode=c.IN_ROW;return}case a.TBODY:case a.THEAD:case a.TFOOT:{this.insertionMode=c.IN_TABLE_BODY;return}case a.CAPTION:{this.insertionMode=c.IN_CAPTION;return}case a.COLGROUP:{this.insertionMode=c.IN_COLUMN_GROUP;return}case a.TABLE:{this.insertionMode=c.IN_TABLE;return}case a.BODY:{this.insertionMode=c.IN_BODY;return}case a.FRAMESET:{this.insertionMode=c.IN_FRAMESET;return}case a.SELECT:{this._resetInsertionModeForSelect(t);return}case a.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case a.HTML:{this.insertionMode=this.headElement?c.AFTER_HEAD:c.BEFORE_HEAD;return}case a.TD:case a.TH:{if(t>0){this.insertionMode=c.IN_CELL;return}break}case a.HEAD:{if(t>0){this.insertionMode=c.IN_HEAD;return}break}}this.insertionMode=c.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const s=this.openElements.tagIDs[n];if(s===a.TEMPLATE)break;if(s===a.TABLE){this.insertionMode=c.IN_SELECT_IN_TABLE;return}}this.insertionMode=c.IN_SELECT}_isElementCausesFosterParenting(t){return ba.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case a.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===b.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case a.TABLE:{const s=this.treeAdapter.getParentNode(n);return s?{parent:s,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const s=this.treeAdapter.getNamespaceURI(t);return Fr[s].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){Jo(this,t);return}switch(this.insertionMode){case c.INITIAL:{Re(this,t);break}case c.BEFORE_HTML:{ve(this,t);break}case c.BEFORE_HEAD:{ke(this,t);break}case c.IN_HEAD:{Pe(this,t);break}case c.IN_HEAD_NO_SCRIPT:{Me(this,t);break}case c.AFTER_HEAD:{Be(this,t);break}case c.IN_BODY:case c.IN_CAPTION:case c.IN_CELL:case c.IN_TEMPLATE:{Ea(this,t);break}case c.TEXT:case c.IN_SELECT:case c.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case c.IN_TABLE:case c.IN_TABLE_BODY:case c.IN_ROW:{Nt(this,t);break}case c.IN_TABLE_TEXT:{Ca(this,t);break}case c.IN_COLUMN_GROUP:{tt(this,t);break}case c.AFTER_BODY:{nt(this,t);break}case c.AFTER_AFTER_BODY:{$e(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){Xo(this,t);return}switch(this.insertionMode){case c.INITIAL:{Re(this,t);break}case c.BEFORE_HTML:{ve(this,t);break}case c.BEFORE_HEAD:{ke(this,t);break}case c.IN_HEAD:{Pe(this,t);break}case c.IN_HEAD_NO_SCRIPT:{Me(this,t);break}case c.AFTER_HEAD:{Be(this,t);break}case c.TEXT:{this._insertCharacters(t);break}case c.IN_TABLE:case c.IN_TABLE_BODY:case c.IN_ROW:{Nt(this,t);break}case c.IN_COLUMN_GROUP:{tt(this,t);break}case c.AFTER_BODY:{nt(this,t);break}case c.AFTER_AFTER_BODY:{$e(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){Ot(this,t);return}switch(this.insertionMode){case c.INITIAL:case c.BEFORE_HTML:case c.BEFORE_HEAD:case c.IN_HEAD:case c.IN_HEAD_NO_SCRIPT:case c.AFTER_HEAD:case c.IN_BODY:case c.IN_TABLE:case c.IN_CAPTION:case c.IN_COLUMN_GROUP:case c.IN_TABLE_BODY:case c.IN_ROW:case c.IN_CELL:case c.IN_SELECT:case c.IN_SELECT_IN_TABLE:case c.IN_TEMPLATE:case c.IN_FRAMESET:case c.AFTER_FRAMESET:{Ot(this,t);break}case c.IN_TABLE_TEXT:{Oe(this,t);break}case c.AFTER_BODY:{Su(this,t);break}case c.AFTER_AFTER_BODY:case c.AFTER_AFTER_FRAMESET:{wu(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case c.INITIAL:{Ru(this,t);break}case c.BEFORE_HEAD:case c.IN_HEAD:case c.IN_HEAD_NO_SCRIPT:case c.AFTER_HEAD:{this._err(t,p.misplacedDoctype);break}case c.IN_TABLE_TEXT:{Oe(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,p.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?$o(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case c.INITIAL:{Re(this,t);break}case c.BEFORE_HTML:{Ou(this,t);break}case c.BEFORE_HEAD:{Du(this,t);break}case c.IN_HEAD:{V(this,t);break}case c.IN_HEAD_NO_SCRIPT:{Pu(this,t);break}case c.AFTER_HEAD:{Bu(this,t);break}case c.IN_BODY:{M(this,t);break}case c.IN_TABLE:{ye(this,t);break}case c.IN_TABLE_TEXT:{Oe(this,t);break}case c.IN_CAPTION:{ko(this,t);break}case c.IN_COLUMN_GROUP:{Yt(this,t);break}case c.IN_TABLE_BODY:{dt(this,t);break}case c.IN_ROW:{ht(this,t);break}case c.IN_CELL:{Bo(this,t);break}case c.IN_SELECT:{Sa(this,t);break}case c.IN_SELECT_IN_TABLE:{Uo(this,t);break}case c.IN_TEMPLATE:{jo(this,t);break}case c.AFTER_BODY:{Wo(this,t);break}case c.IN_FRAMESET:{Go(this,t);break}case c.AFTER_FRAMESET:{qo(this,t);break}case c.AFTER_AFTER_BODY:{Vo(this,t);break}case c.AFTER_AFTER_FRAMESET:{Ko(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?Zo(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case c.INITIAL:{Re(this,t);break}case c.BEFORE_HTML:{Lu(this,t);break}case c.BEFORE_HEAD:{vu(this,t);break}case c.IN_HEAD:{ku(this,t);break}case c.IN_HEAD_NO_SCRIPT:{Mu(this,t);break}case c.AFTER_HEAD:{Hu(this,t);break}case c.IN_BODY:{lt(this,t);break}case c.TEXT:{Co(this,t);break}case c.IN_TABLE:{He(this,t);break}case c.IN_TABLE_TEXT:{Oe(this,t);break}case c.IN_CAPTION:{Po(this,t);break}case c.IN_COLUMN_GROUP:{Mo(this,t);break}case c.IN_TABLE_BODY:{Lt(this,t);break}case c.IN_ROW:{xa(this,t);break}case c.IN_CELL:{Ho(this,t);break}case c.IN_SELECT:{wa(this,t);break}case c.IN_SELECT_IN_TABLE:{Fo(this,t);break}case c.IN_TEMPLATE:{Yo(this,t);break}case c.AFTER_BODY:{Oa(this,t);break}case c.IN_FRAMESET:{zo(this,t);break}case c.AFTER_FRAMESET:{Qo(this,t);break}case c.AFTER_AFTER_BODY:{$e(this,t);break}}}onEof(t){switch(this.insertionMode){case c.INITIAL:{Re(this,t);break}case c.BEFORE_HTML:{ve(this,t);break}case c.BEFORE_HEAD:{ke(this,t);break}case c.IN_HEAD:{Pe(this,t);break}case c.IN_HEAD_NO_SCRIPT:{Me(this,t);break}case c.AFTER_HEAD:{Be(this,t);break}case c.IN_BODY:case c.IN_TABLE:case c.IN_CAPTION:case c.IN_COLUMN_GROUP:case c.IN_TABLE_BODY:case c.IN_ROW:case c.IN_CELL:case c.IN_SELECT:case c.IN_SELECT_IN_TABLE:{ya(this,t);break}case c.TEXT:{Io(this,t);break}case c.IN_TABLE_TEXT:{Oe(this,t);break}case c.IN_TEMPLATE:{Ra(this,t);break}case c.AFTER_BODY:case c.IN_FRAMESET:case c.AFTER_FRAMESET:case c.AFTER_AFTER_BODY:case c.AFTER_AFTER_FRAMESET:{jt(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===o.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case c.IN_HEAD:case c.IN_HEAD_NO_SCRIPT:case c.AFTER_HEAD:case c.TEXT:case c.IN_COLUMN_GROUP:case c.IN_SELECT:case c.IN_SELECT_IN_TABLE:case c.IN_FRAMESET:case c.AFTER_FRAMESET:{this._insertCharacters(t);break}case c.IN_BODY:case c.IN_CAPTION:case c.IN_CELL:case c.IN_TEMPLATE:case c.AFTER_BODY:case c.AFTER_AFTER_BODY:case c.AFTER_AFTER_FRAMESET:{ga(this,t);break}case c.IN_TABLE:case c.IN_TABLE_BODY:case c.IN_ROW:{Nt(this,t);break}case c.IN_TABLE_TEXT:{Na(this,t);break}}}}function Au(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):Aa(e,t),n}function yu(e,t){let n=null,s=e.openElements.stackTop;for(;s>=0;s--){const r=e.openElements.items[s];if(r===t.element)break;e._isSpecialElement(r,e.openElements.tagIDs[s])&&(n=r)}return n||(e.openElements.shortenToLength(Math.max(s,0)),e.activeFormattingElements.removeEntry(t)),n}function Nu(e,t,n){let s=t,r=e.openElements.getCommonAncestor(t);for(let u=0,d=r;d!==n;u++,d=r){r=e.openElements.getCommonAncestor(d);const f=e.activeFormattingElements.getElementEntry(d),m=f&&u>=Tu;!f||m?(m&&e.activeFormattingElements.removeEntry(f),e.openElements.remove(d)):(d=Cu(e,f),s===t&&(e.activeFormattingElements.bookmark=f),e.treeAdapter.detachNode(s),e.treeAdapter.appendChild(d,s),s=d)}return s}function Cu(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),s=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,s),t.element=s,s}function Iu(e,t,n){const s=e.treeAdapter.getTagName(t),r=Ce(s);if(e._isElementCausesFosterParenting(r))e._fosterParentElement(n);else{const u=e.treeAdapter.getNamespaceURI(t);r===a.TEMPLATE&&u===b.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function xu(e,t,n){const s=e.treeAdapter.getNamespaceURI(n.element),{token:r}=n,u=e.treeAdapter.createElement(r.tagName,s,r.attrs);e._adoptNodes(t,u),e.treeAdapter.appendChild(t,u),e.activeFormattingElements.insertElementAfterBookmark(u,r),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,u,r.tagID)}function Ft(e,t){for(let n=0;n<Eu;n++){const s=Au(e,t);if(!s)break;const r=yu(e,s);if(!r)break;e.activeFormattingElements.bookmark=s;const u=Nu(e,r,s.element),d=e.openElements.getCommonAncestor(s.element);e.treeAdapter.detachNode(u),d&&Iu(e,d,u),xu(e,r,s)}}function Ot(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function Su(e,t){e._appendCommentNode(t,e.openElements.items[0])}function wu(e,t){e._appendCommentNode(t,e.document)}function jt(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let s=e.openElements.stackTop;s>=n;s--)e._setEndLocation(e.openElements.items[s],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const s=e.openElements.items[0],r=e.treeAdapter.getNodeSourceCodeLocation(s);if(r&&!r.endTag&&(e._setEndLocation(s,t),e.openElements.stackTop>=1)){const u=e.openElements.items[1],d=e.treeAdapter.getNodeSourceCodeLocation(u);d&&!d.endTag&&e._setEndLocation(u,t)}}}}function Ru(e,t){e._setDocumentType(t);const n=t.forceQuirks?z.QUIRKS:ru(t);su(t)||e._err(t,p.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=c.BEFORE_HTML}function Re(e,t){e._err(t,p.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,z.QUIRKS),e.insertionMode=c.BEFORE_HTML,e._processToken(t)}function Ou(e,t){t.tagID===a.HTML?(e._insertElement(t,b.HTML),e.insertionMode=c.BEFORE_HEAD):ve(e,t)}function Lu(e,t){const n=t.tagID;(n===a.HTML||n===a.HEAD||n===a.BODY||n===a.BR)&&ve(e,t)}function ve(e,t){e._insertFakeRootElement(),e.insertionMode=c.BEFORE_HEAD,e._processToken(t)}function Du(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.HEAD:{e._insertElement(t,b.HTML),e.headElement=e.openElements.current,e.insertionMode=c.IN_HEAD;break}default:ke(e,t)}}function vu(e,t){const n=t.tagID;n===a.HEAD||n===a.BODY||n===a.HTML||n===a.BR?ke(e,t):e._err(t,p.endTagWithoutMatchingOpenElement)}function ke(e,t){e._insertFakeElement(h.HEAD,a.HEAD),e.headElement=e.openElements.current,e.insertionMode=c.IN_HEAD,e._processToken(t)}function V(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:{e._appendElement(t,b.HTML),t.ackSelfClosing=!0;break}case a.TITLE:{e._switchToTextParsing(t,O.RCDATA);break}case a.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,O.RAWTEXT):(e._insertElement(t,b.HTML),e.insertionMode=c.IN_HEAD_NO_SCRIPT);break}case a.NOFRAMES:case a.STYLE:{e._switchToTextParsing(t,O.RAWTEXT);break}case a.SCRIPT:{e._switchToTextParsing(t,O.SCRIPT_DATA);break}case a.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=c.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(c.IN_TEMPLATE);break}case a.HEAD:{e._err(t,p.misplacedStartTagForHeadElement);break}default:Pe(e,t)}}function ku(e,t){switch(t.tagID){case a.HEAD:{e.openElements.pop(),e.insertionMode=c.AFTER_HEAD;break}case a.BODY:case a.BR:case a.HTML:{Pe(e,t);break}case a.TEMPLATE:{be(e,t);break}default:e._err(t,p.endTagWithoutMatchingOpenElement)}}function be(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==a.TEMPLATE&&e._err(t,p.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,p.endTagWithoutMatchingOpenElement)}function Pe(e,t){e.openElements.pop(),e.insertionMode=c.AFTER_HEAD,e._processToken(t)}function Pu(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.BASEFONT:case a.BGSOUND:case a.HEAD:case a.LINK:case a.META:case a.NOFRAMES:case a.STYLE:{V(e,t);break}case a.NOSCRIPT:{e._err(t,p.nestedNoscriptInHead);break}default:Me(e,t)}}function Mu(e,t){switch(t.tagID){case a.NOSCRIPT:{e.openElements.pop(),e.insertionMode=c.IN_HEAD;break}case a.BR:{Me(e,t);break}default:e._err(t,p.endTagWithoutMatchingOpenElement)}}function Me(e,t){const n=t.type===I.EOF?p.openElementsLeftAfterEof:p.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=c.IN_HEAD,e._processToken(t)}function Bu(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.BODY:{e._insertElement(t,b.HTML),e.framesetOk=!1,e.insertionMode=c.IN_BODY;break}case a.FRAMESET:{e._insertElement(t,b.HTML),e.insertionMode=c.IN_FRAMESET;break}case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{e._err(t,p.abandonedHeadElementChild),e.openElements.push(e.headElement,a.HEAD),V(e,t),e.openElements.remove(e.headElement);break}case a.HEAD:{e._err(t,p.misplacedStartTagForHeadElement);break}default:Be(e,t)}}function Hu(e,t){switch(t.tagID){case a.BODY:case a.HTML:case a.BR:{Be(e,t);break}case a.TEMPLATE:{be(e,t);break}default:e._err(t,p.endTagWithoutMatchingOpenElement)}}function Be(e,t){e._insertFakeElement(h.BODY,a.BODY),e.insertionMode=c.IN_BODY,ct(e,t)}function ct(e,t){switch(t.type){case I.CHARACTER:{Ea(e,t);break}case I.WHITESPACE_CHARACTER:{ga(e,t);break}case I.COMMENT:{Ot(e,t);break}case I.START_TAG:{M(e,t);break}case I.END_TAG:{lt(e,t);break}case I.EOF:{ya(e,t);break}}}function ga(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function Ea(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function Uu(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function Fu(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function ju(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_FRAMESET)}function Yu(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML)}function Wu(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&Rt.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,b.HTML)}function Gu(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function zu(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML),n||(e.formElement=e.openElements.current))}function qu(e,t){e.framesetOk=!1;const n=t.tagID;for(let s=e.openElements.stackTop;s>=0;s--){const r=e.openElements.tagIDs[s];if(n===a.LI&&r===a.LI||(n===a.DD||n===a.DT)&&(r===a.DD||r===a.DT)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.popUntilTagNamePopped(r);break}if(r!==a.ADDRESS&&r!==a.DIV&&r!==a.P&&e._isSpecialElement(e.openElements.items[s],r))break}e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML)}function Qu(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML),e.tokenizer.state=O.PLAINTEXT}function Vu(e,t){e.openElements.hasInScope(a.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML),e.framesetOk=!1}function Ku(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(h.A);n&&(Ft(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function Xu(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function Ju(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(a.NOBR)&&(Ft(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,b.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function $u(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function Zu(e,t){e.treeAdapter.getDocumentMode(e.document)!==z.QUIRKS&&e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._insertElement(t,b.HTML),e.framesetOk=!1,e.insertionMode=c.IN_TABLE}function Ta(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,b.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function _a(e){const t=ia(e,me.TYPE);return t!=null&&t.toLowerCase()===gu}function eo(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,b.HTML),_a(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function to(e,t){e._appendElement(t,b.HTML),t.ackSelfClosing=!0}function no(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._appendElement(t,b.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function ao(e,t){t.tagName=h.IMG,t.tagID=a.IMG,Ta(e,t)}function so(e,t){e._insertElement(t,b.HTML),e.skipNextNewLine=!0,e.tokenizer.state=O.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=c.TEXT}function ro(e,t){e.openElements.hasInButtonScope(a.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,O.RAWTEXT)}function uo(e,t){e.framesetOk=!1,e._switchToTextParsing(t,O.RAWTEXT)}function Nn(e,t){e._switchToTextParsing(t,O.RAWTEXT)}function oo(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===c.IN_TABLE||e.insertionMode===c.IN_CAPTION||e.insertionMode===c.IN_TABLE_BODY||e.insertionMode===c.IN_ROW||e.insertionMode===c.IN_CELL?c.IN_SELECT_IN_TABLE:c.IN_SELECT}function io(e,t){e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML)}function co(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,b.HTML)}function lo(e,t){e.openElements.hasInScope(a.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(a.RTC),e._insertElement(t,b.HTML)}function ho(e,t){e._reconstructActiveFormattingElements(),fa(t),Ut(t),t.selfClosing?e._appendElement(t,b.MATHML):e._insertElement(t,b.MATHML),t.ackSelfClosing=!0}function mo(e,t){e._reconstructActiveFormattingElements(),pa(t),Ut(t),t.selfClosing?e._appendElement(t,b.SVG):e._insertElement(t,b.SVG),t.ackSelfClosing=!0}function Cn(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,b.HTML)}function M(e,t){switch(t.tagID){case a.I:case a.S:case a.B:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.SMALL:case a.STRIKE:case a.STRONG:{Xu(e,t);break}case a.A:{Ku(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{Wu(e,t);break}case a.P:case a.DL:case a.OL:case a.UL:case a.DIV:case a.DIR:case a.NAV:case a.MAIN:case a.MENU:case a.ASIDE:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.DETAILS:case a.ADDRESS:case a.ARTICLE:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{Yu(e,t);break}case a.LI:case a.DD:case a.DT:{qu(e,t);break}case a.BR:case a.IMG:case a.WBR:case a.AREA:case a.EMBED:case a.KEYGEN:{Ta(e,t);break}case a.HR:{no(e,t);break}case a.RB:case a.RTC:{co(e,t);break}case a.RT:case a.RP:{lo(e,t);break}case a.PRE:case a.LISTING:{Gu(e,t);break}case a.XMP:{ro(e,t);break}case a.SVG:{mo(e,t);break}case a.HTML:{Uu(e,t);break}case a.BASE:case a.LINK:case a.META:case a.STYLE:case a.TITLE:case a.SCRIPT:case a.BGSOUND:case a.BASEFONT:case a.TEMPLATE:{V(e,t);break}case a.BODY:{Fu(e,t);break}case a.FORM:{zu(e,t);break}case a.NOBR:{Ju(e,t);break}case a.MATH:{ho(e,t);break}case a.TABLE:{Zu(e,t);break}case a.INPUT:{eo(e,t);break}case a.PARAM:case a.TRACK:case a.SOURCE:{to(e,t);break}case a.IMAGE:{ao(e,t);break}case a.BUTTON:{Vu(e,t);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{$u(e,t);break}case a.IFRAME:{uo(e,t);break}case a.SELECT:{oo(e,t);break}case a.OPTION:case a.OPTGROUP:{io(e,t);break}case a.NOEMBED:case a.NOFRAMES:{Nn(e,t);break}case a.FRAMESET:{ju(e,t);break}case a.TEXTAREA:{so(e,t);break}case a.NOSCRIPT:{e.options.scriptingEnabled?Nn(e,t):Cn(e,t);break}case a.PLAINTEXT:{Qu(e,t);break}case a.COL:case a.TH:case a.TD:case a.TR:case a.HEAD:case a.FRAME:case a.TBODY:case a.TFOOT:case a.THEAD:case a.CAPTION:case a.COLGROUP:break;default:Cn(e,t)}}function fo(e,t){if(e.openElements.hasInScope(a.BODY)&&(e.insertionMode=c.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function po(e,t){e.openElements.hasInScope(a.BODY)&&(e.insertionMode=c.AFTER_BODY,Oa(e,t))}function bo(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function go(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(a.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(a.FORM):n&&e.openElements.remove(n))}function Eo(e){e.openElements.hasInButtonScope(a.P)||e._insertFakeElement(h.P,a.P),e._closePElement()}function To(e){e.openElements.hasInListItemScope(a.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(a.LI),e.openElements.popUntilTagNamePopped(a.LI))}function _o(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function Ao(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function yo(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function No(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(h.BR,a.BR),e.openElements.pop(),e.framesetOk=!1}function Aa(e,t){const n=t.tagName,s=t.tagID;for(let r=e.openElements.stackTop;r>0;r--){const u=e.openElements.items[r],d=e.openElements.tagIDs[r];if(s===d&&(s!==a.UNKNOWN||e.treeAdapter.getTagName(u)===n)){e.openElements.generateImpliedEndTagsWithExclusion(s),e.openElements.stackTop>=r&&e.openElements.shortenToLength(r);break}if(e._isSpecialElement(u,d))break}}function lt(e,t){switch(t.tagID){case a.A:case a.B:case a.I:case a.S:case a.U:case a.EM:case a.TT:case a.BIG:case a.CODE:case a.FONT:case a.NOBR:case a.SMALL:case a.STRIKE:case a.STRONG:{Ft(e,t);break}case a.P:{Eo(e);break}case a.DL:case a.UL:case a.OL:case a.DIR:case a.DIV:case a.NAV:case a.PRE:case a.MAIN:case a.MENU:case a.ASIDE:case a.BUTTON:case a.CENTER:case a.FIGURE:case a.FOOTER:case a.HEADER:case a.HGROUP:case a.DIALOG:case a.ADDRESS:case a.ARTICLE:case a.DETAILS:case a.SEARCH:case a.SECTION:case a.SUMMARY:case a.LISTING:case a.FIELDSET:case a.BLOCKQUOTE:case a.FIGCAPTION:{bo(e,t);break}case a.LI:{To(e);break}case a.DD:case a.DT:{_o(e,t);break}case a.H1:case a.H2:case a.H3:case a.H4:case a.H5:case a.H6:{Ao(e);break}case a.BR:{No(e);break}case a.BODY:{fo(e,t);break}case a.HTML:{po(e,t);break}case a.FORM:{go(e);break}case a.APPLET:case a.OBJECT:case a.MARQUEE:{yo(e,t);break}case a.TEMPLATE:{be(e,t);break}default:Aa(e,t)}}function ya(e,t){e.tmplInsertionModeStack.length>0?Ra(e,t):jt(e,t)}function Co(e,t){var n;t.tagID===a.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function Io(e,t){e._err(t,p.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function Nt(e,t){if(e.openElements.currentTagId!==void 0&&ba.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=c.IN_TABLE_TEXT,t.type){case I.CHARACTER:{Ca(e,t);break}case I.WHITESPACE_CHARACTER:{Na(e,t);break}}else Fe(e,t)}function xo(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_CAPTION}function So(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_COLUMN_GROUP}function wo(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(h.COLGROUP,a.COLGROUP),e.insertionMode=c.IN_COLUMN_GROUP,Yt(e,t)}function Ro(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_TABLE_BODY}function Oo(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(h.TBODY,a.TBODY),e.insertionMode=c.IN_TABLE_BODY,dt(e,t)}function Lo(e,t){e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function Do(e,t){_a(t)?e._appendElement(t,b.HTML):Fe(e,t),t.ackSelfClosing=!0}function vo(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,b.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function ye(e,t){switch(t.tagID){case a.TD:case a.TH:case a.TR:{Oo(e,t);break}case a.STYLE:case a.SCRIPT:case a.TEMPLATE:{V(e,t);break}case a.COL:{wo(e,t);break}case a.FORM:{vo(e,t);break}case a.TABLE:{Lo(e,t);break}case a.TBODY:case a.TFOOT:case a.THEAD:{Ro(e,t);break}case a.INPUT:{Do(e,t);break}case a.CAPTION:{xo(e,t);break}case a.COLGROUP:{So(e,t);break}default:Fe(e,t)}}function He(e,t){switch(t.tagID){case a.TABLE:{e.openElements.hasInTableScope(a.TABLE)&&(e.openElements.popUntilTagNamePopped(a.TABLE),e._resetInsertionMode());break}case a.TEMPLATE:{be(e,t);break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:Fe(e,t)}}function Fe(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,ct(e,t),e.fosterParentingEnabled=n}function Na(e,t){e.pendingCharacterTokens.push(t)}function Ca(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function Oe(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)Fe(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const Ia=new Set([a.CAPTION,a.COL,a.COLGROUP,a.TBODY,a.TD,a.TFOOT,a.TH,a.THEAD,a.TR]);function ko(e,t){const n=t.tagID;Ia.has(n)?e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=c.IN_TABLE,ye(e,t)):M(e,t)}function Po(e,t){const n=t.tagID;switch(n){case a.CAPTION:case a.TABLE:{e.openElements.hasInTableScope(a.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(a.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=c.IN_TABLE,n===a.TABLE&&He(e,t));break}case a.BODY:case a.COL:case a.COLGROUP:case a.HTML:case a.TBODY:case a.TD:case a.TFOOT:case a.TH:case a.THEAD:case a.TR:break;default:lt(e,t)}}function Yt(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.COL:{e._appendElement(t,b.HTML),t.ackSelfClosing=!0;break}case a.TEMPLATE:{V(e,t);break}default:tt(e,t)}}function Mo(e,t){switch(t.tagID){case a.COLGROUP:{e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=c.IN_TABLE);break}case a.TEMPLATE:{be(e,t);break}case a.COL:break;default:tt(e,t)}}function tt(e,t){e.openElements.currentTagId===a.COLGROUP&&(e.openElements.pop(),e.insertionMode=c.IN_TABLE,e._processToken(t))}function dt(e,t){switch(t.tagID){case a.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_ROW;break}case a.TH:case a.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(h.TR,a.TR),e.insertionMode=c.IN_ROW,ht(e,t);break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE,ye(e,t));break}default:ye(e,t)}}function Lt(e,t){const n=t.tagID;switch(t.tagID){case a.TBODY:case a.TFOOT:case a.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE);break}case a.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE,He(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:case a.TR:break;default:He(e,t)}}function ht(e,t){switch(t.tagID){case a.TH:case a.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,b.HTML),e.insertionMode=c.IN_CELL,e.activeFormattingElements.insertMarker();break}case a.CAPTION:case a.COL:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE_BODY,dt(e,t));break}default:ye(e,t)}}function xa(e,t){switch(t.tagID){case a.TR:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE_BODY);break}case a.TABLE:{e.openElements.hasInTableScope(a.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE_BODY,Lt(e,t));break}case a.TBODY:case a.TFOOT:case a.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(a.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=c.IN_TABLE_BODY,Lt(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:case a.TD:case a.TH:break;default:He(e,t)}}function Bo(e,t){const n=t.tagID;Ia.has(n)?(e.openElements.hasInTableScope(a.TD)||e.openElements.hasInTableScope(a.TH))&&(e._closeTableCell(),ht(e,t)):M(e,t)}function Ho(e,t){const n=t.tagID;switch(n){case a.TD:case a.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=c.IN_ROW);break}case a.TABLE:case a.TBODY:case a.TFOOT:case a.THEAD:case a.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),xa(e,t));break}case a.BODY:case a.CAPTION:case a.COL:case a.COLGROUP:case a.HTML:break;default:lt(e,t)}}function Sa(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e._insertElement(t,b.HTML);break}case a.OPTGROUP:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._insertElement(t,b.HTML);break}case a.HR:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop(),e._appendElement(t,b.HTML),t.ackSelfClosing=!0;break}case a.INPUT:case a.KEYGEN:case a.TEXTAREA:case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),t.tagID!==a.SELECT&&e._processStartTag(t));break}case a.SCRIPT:case a.TEMPLATE:{V(e,t);break}}}function wa(e,t){switch(t.tagID){case a.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===a.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===a.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===a.OPTGROUP&&e.openElements.pop();break}case a.OPTION:{e.openElements.currentTagId===a.OPTION&&e.openElements.pop();break}case a.SELECT:{e.openElements.hasInSelectScope(a.SELECT)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode());break}case a.TEMPLATE:{be(e,t);break}}}function Uo(e,t){const n=t.tagID;n===a.CAPTION||n===a.TABLE||n===a.TBODY||n===a.TFOOT||n===a.THEAD||n===a.TR||n===a.TD||n===a.TH?(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e._processStartTag(t)):Sa(e,t)}function Fo(e,t){const n=t.tagID;n===a.CAPTION||n===a.TABLE||n===a.TBODY||n===a.TFOOT||n===a.THEAD||n===a.TR||n===a.TD||n===a.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(a.SELECT),e._resetInsertionMode(),e.onEndTag(t)):wa(e,t)}function jo(e,t){switch(t.tagID){case a.BASE:case a.BASEFONT:case a.BGSOUND:case a.LINK:case a.META:case a.NOFRAMES:case a.SCRIPT:case a.STYLE:case a.TEMPLATE:case a.TITLE:{V(e,t);break}case a.CAPTION:case a.COLGROUP:case a.TBODY:case a.TFOOT:case a.THEAD:{e.tmplInsertionModeStack[0]=c.IN_TABLE,e.insertionMode=c.IN_TABLE,ye(e,t);break}case a.COL:{e.tmplInsertionModeStack[0]=c.IN_COLUMN_GROUP,e.insertionMode=c.IN_COLUMN_GROUP,Yt(e,t);break}case a.TR:{e.tmplInsertionModeStack[0]=c.IN_TABLE_BODY,e.insertionMode=c.IN_TABLE_BODY,dt(e,t);break}case a.TD:case a.TH:{e.tmplInsertionModeStack[0]=c.IN_ROW,e.insertionMode=c.IN_ROW,ht(e,t);break}default:e.tmplInsertionModeStack[0]=c.IN_BODY,e.insertionMode=c.IN_BODY,M(e,t)}}function Yo(e,t){t.tagID===a.TEMPLATE&&be(e,t)}function Ra(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(a.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):jt(e,t)}function Wo(e,t){t.tagID===a.HTML?M(e,t):nt(e,t)}function Oa(e,t){var n;if(t.tagID===a.HTML){if(e.fragmentContext||(e.insertionMode=c.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===a.HTML){e._setEndLocation(e.openElements.items[0],t);const s=e.openElements.items[1];s&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(s))===null||n===void 0)&&n.endTag)&&e._setEndLocation(s,t)}}else nt(e,t)}function nt(e,t){e.insertionMode=c.IN_BODY,ct(e,t)}function Go(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.FRAMESET:{e._insertElement(t,b.HTML);break}case a.FRAME:{e._appendElement(t,b.HTML),t.ackSelfClosing=!0;break}case a.NOFRAMES:{V(e,t);break}}}function zo(e,t){t.tagID===a.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==a.FRAMESET&&(e.insertionMode=c.AFTER_FRAMESET))}function qo(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.NOFRAMES:{V(e,t);break}}}function Qo(e,t){t.tagID===a.HTML&&(e.insertionMode=c.AFTER_AFTER_FRAMESET)}function Vo(e,t){t.tagID===a.HTML?M(e,t):$e(e,t)}function $e(e,t){e.insertionMode=c.IN_BODY,ct(e,t)}function Ko(e,t){switch(t.tagID){case a.HTML:{M(e,t);break}case a.NOFRAMES:{V(e,t);break}}}function Xo(e,t){t.chars=R,e._insertCharacters(t)}function Jo(e,t){e._insertCharacters(t),e.framesetOk=!1}function La(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==b.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function $o(e,t){if(hu(t))La(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),s=e.treeAdapter.getNamespaceURI(n);s===b.MATHML?fa(t):s===b.SVG&&(mu(t),pa(t)),Ut(t),t.selfClosing?e._appendElement(t,s):e._insertElement(t,s),t.ackSelfClosing=!0}}function Zo(e,t){if(t.tagID===a.P||t.tagID===a.BR){La(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const s=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(s)===b.HTML){e._endTagOutsideForeignContent(t);break}const r=e.treeAdapter.getTagName(s);if(r.toLowerCase()===t.tagName){t.tagName=r,e.openElements.shortenToLength(n);break}}}h.AREA,h.BASE,h.BASEFONT,h.BGSOUND,h.BR,h.COL,h.EMBED,h.FRAME,h.HR,h.IMG,h.INPUT,h.KEYGEN,h.LINK,h.META,h.PARAM,h.SOURCE,h.TRACK,h.WBR;const ei=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,ti=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),In={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function Da(e,t){const n=di(e),s=Bn("type",{handlers:{root:ni,element:ai,text:si,comment:ka,doctype:ri,raw:oi},unknown:ii}),r={parser:n?new yn(In):yn.getFragmentParser(void 0,In),handle(f){s(f,r)},stitches:!1,options:t||{}};s(e,r),Ie(r,fe());const u=n?r.parser.document:r.parser.getFragment(),d=dr(u,{file:r.options.file});return r.stitches&&Xa(d,"comment",function(f,m,E){const A=f;if(A.value.stitch&&E&&m!==void 0){const x=E.children;return x[m]=A.value.stitch,m}}),d.type==="root"&&d.children.length===1&&d.children[0].type===e.type?d.children[0]:d}function va(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function ni(e,t){va(e.children,t)}function ai(e,t){ci(e,t),va(e.children,t),li(e,t)}function si(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:I.CHARACTER,chars:e.value,location:je(e)};Ie(t,fe(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function ri(e,t){const n={type:I.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:je(e)};Ie(t,fe(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function ui(e,t){t.stitches=!0;const n=hi(e);if("children"in e&&"children"in n){const s=Da({type:"root",children:e.children},t.options);n.children=s.children}ka({type:"comment",value:{stitch:n}},t)}function ka(e,t){const n=e.value,s={type:I.COMMENT,data:n,location:je(e)};Ie(t,fe(e)),t.parser.currentToken=s,t.parser._processToken(t.parser.currentToken)}function oi(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,Pa(t,fe(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(ei,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function ii(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))ui(n,t);else{let s="";throw ti.has(n.type)&&(s=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+s)}}function Ie(e,t){Pa(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=O.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function Pa(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function ci(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===O.PLAINTEXT)return;Ie(t,fe(e));const s=t.parser.openElements.current;let r="namespaceURI"in s?s.namespaceURI:he.html;r===he.html&&n==="svg"&&(r=he.svg);const u=br({...e,children:[]},{space:r===he.svg?"svg":"html"}),d={type:I.START_TAG,tagName:n,tagID:Ce(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in u?u.attrs:[],location:je(e)};t.parser.currentToken=d,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function li(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&Cr.includes(n)||t.parser.tokenizer.state===O.PLAINTEXT)return;Ie(t,Hn(e));const s={type:I.END_TAG,tagName:n,tagID:Ce(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:je(e)};t.parser.currentToken=s,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===O.RCDATA||t.parser.tokenizer.state===O.RAWTEXT||t.parser.tokenizer.state===O.SCRIPT_DATA)&&(t.parser.tokenizer.state=O.DATA)}function di(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function je(e){const t=fe(e)||{line:void 0,column:void 0,offset:void 0},n=Hn(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function hi(e){return"children"in e?en({...e,children:[]}):en(e)}function mi(e){return function(t,n){return Da(t,{...e,file:n})}}const at=e=>e.trim().toLowerCase().replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/_/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),Dt=({children:e,isOpen:t,...n})=>l.jsxs("summary",{...n,className:"p-4 text-gray font-fira text-xl font-bold hover:bg-white/5 transition-colors list-none flex items-center gap-4",children:[l.jsx("span",{className:`transition-transform duration-200 inline-block ${t?"rotate-90":"rotate-0"}`,"aria-hidden":"true",children:"▶"}),e]});function st(e){return e==null?"":typeof e=="string"||typeof e=="number"||typeof e=="boolean"?String(e):Array.isArray(e)?e.map(t=>st(t)).join(""):w.isValidElement(e)?st(e.props.children??null):""}function fi(e){const t=e.split(`
`);let n=0;for(;n<t.length&&t[n].trim()==="";)n++;if(n<t.length&&/^#\s+/.test(t[n].trim())){for(n++;n<t.length&&t[n].trim()==="";)n++;return t.slice(n).join(`
`)}return e}const _e=(e,t)=>{const n=st(e),s=at(n);return s?`${t??""}${s}`:void 0};function xn({markdown:e,stripFirstH1:t,headingIdPrefix:n}){const s=w.useMemo(()=>t?fi(e):e,[e,t]);return l.jsx("div",{className:"markdown max-w-3xl",children:l.jsx(Ja,{remarkPlugins:[$a],rehypePlugins:[mi],components:{h1:({children:r,...u})=>l.jsx("h1",{id:_e(r,n),...u,className:"text-4xl font-libre font-extrabold text-white leading-tight mb-6 mt-8 first:mt-0",children:r}),h2:({children:r,...u})=>l.jsx("h2",{id:_e(r,n),...u,className:"text-3xl font-libre font-bold text-white leading-tight mb-4 mt-8",children:r}),h3:({children:r,...u})=>l.jsx("h3",{id:_e(r,n),...u,className:"text-2xl font-libre font-bold text-white leading-tight mb-3 mt-6",children:r}),h4:({children:r,...u})=>l.jsx("h4",{id:_e(r,n),...u,className:"text-xl font-libre font-semibold text-white leading-tight mb-3 mt-6",children:r}),h5:({children:r,...u})=>l.jsx("h5",{id:_e(r,n),...u,className:"text-lg font-libre font-semibold text-white mb-2 mt-4",children:r}),h6:({children:r,...u})=>l.jsx("h6",{id:_e(r,n),...u,className:"text-base font-libre font-semibold text-gray mb-2 mt-4",children:r}),p:({children:r,...u})=>l.jsx("p",{...u,className:"text-gray font-fira text-xl leading-relaxed mb-4",children:r}),pre:({children:r,...u})=>l.jsx("pre",{...u,className:"bg-black-900 border border-gray/20 rounded-xl p-4 mb-4 overflow-x-auto font-fira text-lg",children:r}),code:({children:r,...u})=>l.jsx("code",{...u,className:"bg-black-900 text-blue font-fira px-1.5 py-0.5 rounded text-lg",children:r}),a:({children:r,href:u,...d})=>l.jsx("a",{href:u,...d,className:"text-blue underline underline-offset-2 hover:opacity-80 transition-opacity",children:r}),blockquote:({children:r,...u})=>l.jsx("blockquote",{...u,className:"border-l-4 border-blue pl-4 my-4 text-gray font-fira text-xl italic",children:r}),details:({children:r})=>l.jsx(er,{children:r}),ul:({children:r,...u})=>l.jsx("ul",{...u,className:"list-disc list-inside text-gray font-fira text-xl mb-4 space-y-2",children:r}),ol:({children:r,...u})=>l.jsx("ol",{...u,className:"list-decimal list-inside text-gray font-fira text-xl mb-4 space-y-2",children:r}),li:({children:r,...u})=>l.jsx("li",{...u,className:"mb-1",children:r}),hr:({...r})=>l.jsx("hr",{...r,className:"border-gray/20 my-8"}),strong:({children:r,...u})=>l.jsx("strong",{...u,className:"font-semibold",children:r}),summary:Dt,em:({children:r,...u})=>l.jsx("em",{...u,className:"text-gray italic",children:r}),table:({children:r,...u})=>l.jsx("div",{className:"overflow-x-auto mb-4",children:l.jsx("table",{...u,className:"w-full font-fira text-xl border-collapse",children:r})}),th:({children:r,...u})=>l.jsx("th",{...u,className:"text-white font-semibold text-left px-4 py-2 border-b border-gray/30 bg-black-900",children:r}),td:({children:r,...u})=>l.jsx("td",{...u,className:"text-gray px-4 py-2 border-b border-gray/10",children:r})},children:s})})}const pi=`# Temperature Converter 

## Objective

Create a temperature converter that can convert between Celsius and Fahrenheit.

## Learning Goals

- Work with JavaScript functions and mathematical operations
- Learn to write clean, testable code

## Useful Formulas

- Celsius to Fahrenheit: \`(celsius * 9/5) + 32\`
- Fahrenheit to Celsius: \`(fahrenheit - 32) * 5/9\`

## Getting Started

### Option 1: Follow the Step-by-Step Instructions

1. Read \`instructions.md\` for detailed, beginner-friendly instructions
2. Build your solution step by step
3. Test with \`npm test\` when ready
4. As you progress, remove \`.skip\` from the \`describe\` blocks to add more tests.

### Option 2: Practice Test-Driven Development

1. Read the [Function Documentation](#function-documentation) 
2. Write the code to pass the tests
3. Remove \`.skip\` blocks from \`describe\` blocks.
4. Add functionality until all tests pass.

## Files in This Challenge

- \`instructions.md\` - Step-by-step tutorial approach
- \`temperature.js\` - Your solution file
- \`temperature.test.js\` - Test suite with incremental challenges

## Success Criteria

- All tests pass
- Functions handle positive and negative temperatures
- Round-trip conversions maintain precision
- Code is clean and readable

<br >
<br >
<br >
`,bi=`# Test-Driven Development (TDD) Guide

## What is TDD?

Test-Driven Development is a programming approach where you write tests **before** writing the actual code. It follows this cycle:

1. **🔴 Red**: Write a failing test
2. **🟢 Green**: Write the minimum code to make the test pass
3. **🔵 Refactor**: Improve your code while keeping tests green

## How to Use This Test Suite

### Step 1: Start with the First Test

1. Remove \`.skip\` from the first test:

   \`\`\`javascript
   test("converts 0°C to 32°F (freezing point)", () => {
   \`\`\`

2. Run the test: \`npm test\`

   - It should **FAIL** (Red phase)

3. Write the minimum code to make it pass:

   \`\`\`javascript
   function celsiusToFahrenheit(celsius) {
     return 32; // Just enough to pass the first test
   }
   \`\`\`

4. Run the test again - it should **PASS** (Green phase)

### Step 2: Add More Tests Gradually

1. Remove \`.skip\` from the next test
2. Run tests - the new test will fail
3. Update your function to handle the new case:
   \`\`\`javascript
   function celsiusToFahrenheit(celsius) {
     if (celsius === 0) return 32;
     if (celsius === 100) return 212;
     // Add more conditions as needed
   }
   \`\`\`

### Step 3: Refactor to the General Solution

Once you have several tests passing, refactor to use the actual formula:

\`\`\`javascript
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
\`\`\`

## TDD Benefits

- ✅ **Confidence**: You know your code works
- ✅ **Documentation**: Tests show how your code should behave
- ✅ **Design**: Writing tests first helps you think about the interface
- ✅ **Regression Prevention**: Changes won't break existing functionality

## Pro Tips

1. **Start Small**: Make the simplest test pass first
2. **One Test at a Time**: Don't remove multiple \`.skip\` at once
3. **Read Error Messages**: They tell you exactly what's wrong
4. **Refactor Often**: Once tests pass, clean up your code

## Challenge Yourself

Try implementing the functions using TDD:

1. Start with \`celsiusToFahrenheit\`
2. Then move to \`fahrenheitToCelsius\`
3. Finally, test the round-trip conversions

Happy coding! 🚀
`,gi=`# Function Documentation

## What's Included

1. [celsiusToFahrenheit](#celsiustofahrenheit)
2. [fahrenheitToCelsius](#fahrenheittocelsius)
3. [displayTemperature](#displaytemperature)

## celsiusToFahrenheit

The \`celsiusToFahrenheit\` method receives the temperature in celsius and converts it to fahrenheit, returning an exact number. 

### Syntax

\`\`\`javascript
celsiusToFahrenheit(celsius);
\`\`\`

#### Parameters

\`celsius\`

A number to convert to fahrenheit.

#### Return value
A decimal number representing the exact temperature in fahrenheit.

### Example Usage

\`\`\`javascript
celsiusToFahrenheit(0); // Returns 32
celsiusToFahrenheit(100); // Returns 212
\`\`\`

## fahrenheitToCelsius

The \`fahrenheitToCelsius\` method receives the temperature in fahrenheit and converts it to celsius, returning an exact number. 

### Syntax

\`\`\`javascript
fahrenheitToCelsius(fahrenheit);
\`\`\`

#### Parameters

\`fahrenheit\`

A number to convert to celsius.

#### Return value
A decimal number representing the exact temperature in celsius.

### Example Usage

\`\`\`javascript
fahrenheitToCelsius(32); // Returns 0
fahrenheitToCelsius(212); // Returns 100
\`\`\`

## displayTemperature

The \`displayTemperature\` method receives the temperature and an option describing the format of the temperature. It then returns a formatted string containing the temperature in celsius and fahrenheit.

### Syntax

\`\`\`javascript
displasyTemperature(temperature, option);
\`\`\`

#### Parameters

\`temperature\`

A number representing the exact temperature.

\`option\`

A string representing whether the temperature is in celsius or fahrenheit.

#### Return value
A string displaying the temperature (rounded down) in both celsius and fahrenheit.

### Example Usage

\`\`\`javascript
displayTemperature(40, 'celsius'); 
// Returns 'The temperature is 40 degrees celsius, 92 degrees fahrenheit.'
displayTemperature(212, 'fahrenheit'); 
// Returns 'The temperature is 212 degrees fahrenheit, 40 degrees celsius.'
\`\`\``,Ei=`# Step-by-Step Instructions

## Function 1: Convert to Fahrenheit

Use the formula to calculate Fahrenheit and store it in a variable named \`fahrenheit\`. You can do this in two steps:

\`\`\`javascript
let fahrenheit = celsius * (9 / 5);
fahrenheit = fahrenheit + 32;
\`\`\`

Or even better, in one step:

\`\`\`javascript
const fahrenheit = celsius * (9 / 5) + 32;
\`\`\`

Then return your value:

\`\`\`javascript
return fahrenheit;
\`\`\`

### Solution

\`\`\`javascript
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}
\`\`\`

## Function 2: Convert to Celsius

Use the formula to calculate Celsius and store it in a variable named \`celsius\`. Remember to subtract 32 from the temperature before it is multiplied:

\`\`\`javascript
const celsius = (fahrenheit - 32) * (5 / 9);
\`\`\`

Then return your value:

\`\`\`javascript
return celsius;
\`\`\`

### Solution

\`\`\`javascript
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}
\`\`\`

## Function 3: Display temperature

This function is an opportunity to reuse your previous functions you wrote to convert the numbers. However, you will need to decide which one to use depending on the option. 


Let's start by checking the received option:

\`\`\`javascript
if (option === 'celsius') {
    console.log('the option is celsius');
} else {
    console.log('the option is fahrenheit');
}
\`\`\`

We can make this more robust by checking for fahrenheit too:

\`\`\`javascript
if (option === 'celsius') {
    console.log('the option is celsius');
} else if (option === 'fahrenheit') {
    console.log('the option is fahrenheit');
} else {
    // Handle invalid options
}
\`\`\`

If the option is _celsius_, we want to calculate the temperature in fahrenheit. Remember to pass the temperature parameter that \`displayTemperature\` received:

\`\`\`javascript
const fahrenheit = celsiusToFahrenheit(temperature);
\`\`\`

If the option was _fahrenheit_, we want to convert to celsius:

\`\`\`javascript
const celsius = fahrenheitToCelsius(temperature);
\`\`\`

Now we need to return a string depending on the option. Let's start with celsius:

\`\`\`javascript
return 'The temperature is ' + temperature + ' degrees celsius, ' + fahrenheit + ' degrees fahrenheit.';
\`\`\`

Use \`Math.floor()\` to round down the temperatures to get a whole number.

\`\`\`javascript
return 'The temperature is ' + Math.floor(temperature) + ' degrees celsius, ' + Math.floor(fahrenheit) + ' degrees fahrenheit.';
\`\`\`

It's starting to get a bit messy. Try using string template literals - a way of formatting strings using backticks (\\\` \\\`) in JavaScript:

\`\`\`javascript
return \`The temperature is \${Math.floor(temperature)} degrees celsius, \${Math.floor(fahrenheit)} degrees fahrenheit.\`;
\`\`\`

And for receiving fahrenheit, we should return another string:
\`\`\`javascript
return \`The temperature is \${Math.floor(celsius)} degrees celsius, \${Math.floor(temperature)} degrees fahrenheit.\`;
\`\`\`

If we receive anything else as our option, we should return a string informing the user:

\`\`\`javascript
return 'Invalid temperature option provided.'
\`\`\`

### Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
function displayTemperature(temperature, option) {
    if (option === 'celsius') {
        const fahrenheit = celsiusToFahrenheit(temperature);
        return \`The temperature is \${Math.floor(temperature)} degrees celsius, \${Math.floor(fahrenheit)} degrees fahrenheit.\`;
    } else if (option === 'fahrenheit') {
        const celsius = fahrenheitToCelsius(temperature);
        return \`The temperature is \${Math.floor(celsius)} degrees celsius, \${Math.floor(temperature)} degrees fahrenheit.\`;
    } else {
        return 'Invalid temperature option provided.'
    }
}
\`\`\`

</details>
<br>

## Key Concepts to Remember

1. **Constants vs Variables**: Use \`const\` for values that don't change, \`let\` for values that do. You should be using constants 95% of the time.
2. **Mathematical Operations**: JavaScript follows standard order of operations (_BODMAS_).
3. **Math Object**: Use \`Math.floor()\` to round down numbers, \`Math.ceil()\` to round up.
4. **String Interpolation**: Use backticks and \`\${}\` for dynamic strings.
5. **Comments**: Use \`//\` for single-line comments if you need to explain your code. Try to write code that explains itself so that you don't need comments in the first place.
`,Ti="",_i=`# Dog Age Calculator

## Objective

Create a dog age calculator that converts human years to dog years.

## Learning Goals

- Work with JavaScript conditional statements
- Practice mathematical operations
- Implement multi-step calculations

## Getting Started

### Option 1: Follow the Step-by-Step Instructions

1. Read \`instructions.md\` for detailed, beginner-friendly instructions
2. Build your solution step by step
3. Test with \`npm test\` when ready
4. As you progress, remove \`.skip\` from the \`describe\` blocks to add more tests

### Option 2: Try on your own

1. Read the [Function Documentation](#function-documentation) 
2. Write the code to pass the tests
3. Remove \`.skip\` blocks from \`describe\` blocks. You should be passing the first \`describe\` block before moving to the next one.
4. Add functionality until all tests pass.

## Files in This Challenge

- \`instructions.md\` - Step-by-step tutorial approach
- \`dogAge.js\` - Your solution file
- \`dogAge.test.js\` - Test suite with incremental challenges

## Success Criteria

- All tests pass
- Function calculates for ages 0 and above
- Function gracefully handles invalid inputs
`,Ai=`# Function Documentation

## What's Included

1. [calculateDogAge](#calculatedogage)

## calculateDogAge

The \`calculateDogAge\` method receives a number of human years and converts them into the number of equivalent dog years. 

### Syntax

\`\`\`javascript
calculateDogAge(humanYears);
\`\`\`

#### Parameters

\`humanYears\`

A number to convert to dog years.

#### Return value
A number representing the number of dog years. When \`humanYears\` is not a valid input, it returns \`0\`.

### Example Usage

\`\`\`javascript
calculateDogAge(10); // Returns 53
calculateDogAge(2); // Returns 21
calculateDogAge('five'); // Returns 0
\`\`\``,yi="# Step-by-Step Instructions\n\nThis function is slightly more complex and we will need to consider some edge cases. We will start with basic functionality and gradually address the different scenarios. You will find it beneficial to run `jest` in `watch mode`, so run the watch script to see it run the tests everytime you save.\n\n## 1. Basic Functionality\n\nRemove the first `.skip` from the `describe` block. \n\nNow let's address the first two years of a dog’s life count:\n\n```javascript\nconst earlyYears = 2 * 10.5;\n```\n\nEach following year should represent 4 years. We need to account for the 2 years we already calculated:\n\n```javascript\nconst laterYears = (humanYears - 2) * 4;\n```\n\nFinally, we need to return the total value:\n\n```javascript\nreturn earlyYears + laterYears;\n```\n\n## 2. Advanced Cases\n\nRemove the second `.skip`. If you save, you'll notice that the tests start failing. Consider the first case:\n\n- `humanYears` is 1, so we expect the return to be `10.5`\n- The function calculates `2 * 10.5` for `earlyYears`\n- It then calculates `humanYears - 2` (-1) multiplied by 4\n- Finally, it returns `21 - 4` which is why the received value is `17`\n\nWe can easily address this with an `early return`. This is where we return from a function so that later functionality is not executed. Since every human year up until 2 is worth 10.5, we can ignore the later years when the human age does not exceed 2.\n\n```javascript\nif (humanYears <= 2) return humanYears * 10.5;\n```\n\n_**Note** I'm using a shorthand in the `if statement` to avoid opening curly braces and writing on a new line. There are many shorthands you can learn that are very useful._\n\n## 3. Edge Cases\n\nRemove the third `.skip`. At this point, the first two tests should in fact pass, however, we're not dealing with negative numbers. When the received parameter is less than zero, we should be returning 0.\n\n```javascript\nif (humanYears <= 0) return 0;\n```\n\n## 4. Input Validation\nRemove the final `.skip`. What we're trying to ensure is that this function always returns a number. If the user provides `undefined`, `null`, or in fact, anything that is not a number, we want to return 0:\n\n```javascript\nif (humanYears <= 0) return 0;\nif (typeof humanYears !== 'number') return 0;\n```\n\nWe still get one failing test! Let's try to debug what's happening.\n\n```javascript\nconsole.log(humanYears <= 0);\nconsole.log(typeof humanYears !== 'number');\n```\n\nNow we can't tell which test corresponds to our console log. The test that is failing is the very last one. Try adding `.only` to only run the last test.\n\n```javascript\ntest.only('returns 0 for an NaN input', () => {\n    expect(calculateDogAge(NaN)).toBe(0);\n});\n```\n\nNow our `console logs` should show:\n\n```bash\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:4:13)\n```\n\nThe input is `NaN`, which is not less than or equal to 0, but it _is a number._ It's just a number that doesn't exist. It's a `falsey` value in JavaScript, just like `null`, `undefined`, `0`, `''`, and a few others. So if you console log this:\n\n```javascript\nconsole.log(!humanYears);\n```\n\nYou should expect to see\n\n```bash\nconsole.log\n    true\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n```\n\nTherefore, we can check to see if the value is falsey, since all numbers are truthy value:\n\n```javascript\nif (!humanYears) return 0;\n```\n\nWe can actually combine these if statements into one single catchall:\n\n```javascript\nif (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n```\n\nRemeber to remove the `.only` to run the rest of the tests, and you should see them all pass!\n\n### Solution\n\n<details>\n  <summary>Reveal</summary>\n\n```javascript\nfunction calculateDogAge(humanYears) {\n    if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n\n    if (humanYears <= 2) return humanYears * 10.5;\n        \n    const earlyYears = 2 * 10.5;\n    const laterYears = (humanYears - 2) * 4;\n    return earlyYears + laterYears;\n}\n```\n</details>\n",Ni="",Ci=`# Magic 8 Ball

## Objective

Create a Magic 8 Ball in JavaScript that generates a random answer. If you wish to write your own responses, you will need to change the \`validResponses\` array in the test suite to reflect your responses.

## Learning Goals

- Work with JavaScript switch/case statements
- Practice functional programming
- Learn the ternary operator
`,Ii=`# Function Documentation

## What's Included

1. [magicEightBall](#magiceightball)
2. [logMagicEightBall](#logmagiceightball)

## magicEightBall

The \`magicEightBall\` method generates and returns a random string, mimicking the basic functionality of a Magic 8 Ball. 

### Syntax

\`\`\`javascript
magicEightBall();
\`\`\`

#### Return value
One of the following strings: 
    - It is certain
    - It is decidedly so
    - Reply hazy try again
    - Cannot predict now
    - Do not count on it
    - My sources say no
    - Outlook not so good
    - Signs point to yes

When the random number does not match one of the switch/case blocks, it should return \`Error: Invalid response\`.

### Example Usage

\`\`\`javascript
magicEightBall(); // Returns 'My sources say no'
magicEightBall(); // Returns 'Signs point to yes'
magicEightBall(); // Returns 'It is certain'
\`\`\`

## logMagicEightBall

The \`logMagicEightBall\` method receives a user's name and a question, responding to the user through the console and generating an answer using the \`magicEightBall\` method. 

### Syntax

\`\`\`javascript
logMagicEightBall(userQuestion, userName);
logMagicEightBall(userQuestion)
\`\`\`

#### Parameters

\`userQuestion\`

A string containing the user's question.

\`userName\`

An optional string representing the user's name.

#### Return value

Returns \`undefined\`.

### Example Usage

\`\`\`javascript
    logMagicEightBall('Will I succeed?'); 
    /* 
    console.log
        Hello!
        User's question: Will I succeed?
        Outlook not so good
    */
    logMagicEightBall('Is today the day?', 'Brian')
    /* 
    console.log
        Hello, Brian!
        User's question: Is today the day?
        It is decidedly so
    */
\`\`\``,xi=`# Step-by-Step Instructions

These functions are a demonstration of \`switch/case\` statements and the \`ternary\` operator in JavaScript. These are commonly used in frontend development, with switch cases being extremely useful for \`reducer functions\` in \`React\` and ternaries simplifying rendering logic. Ternaries can also be chained together, which can look messy but be helpful in certain scenarios.

## 1. Magic 8 Ball

We need a random number generator. You can use the \`random\` function from \`Math\` to do this.

\`\`\`javascript
const randomNumber = Math.random();
\`\`\`

This will generate a number between 0 (inclusive) and 1 (exclusive) such as \`0.8120078968245319\`. This means it can be 0, but it can never be 1. We can use this clever trick to round it to a whole number between \`0\` and \`n - 1\`, where \`n\` is the number of options we want:

\`\`\`javascript
const randomNumber = Math.round(Math.random() * 8);
// Generates any number from 0 to 7
\`\`\`

Now, the function will eventually return a string with one of our responses. We want to avoid an array here, because the purpose is to learn \`switch/case\` statements. We will create an empty string and reassign it based on our number:

\`\`\`javascript
let eightBall = '';
\`\`\`

Now have a go at creating a switch statement. If you want to create your own responses, you'll need to adjust the \`validResponses\` in the test suite. The basic format for switch case statements is:

\`\`\`javascript
switch(expression) {
    case <value>:
        // Your code here
        break;
    case <anotherValue>:
        // Your code here
        break;
    default:
        // Your code here
}
\`\`\`
Make sure you default to some error message, like \`Error: Invalid response\`, and don't forget to return your response.

### Solution

<details>
  <summary>Reveal</summary>

\`\`\`javascript
function magicEightBall() {
    const randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    switch (randomNumber) {
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break;
        default:
            eightBall = 'Error: Invalid response';
    }

    return eightBall;
}
\`\`\`
</details>

## 2. Logging the Magic 8 Ball

We're going to log the user's inputs and answer their question using the \`magicEightBall\`. The first thing we want to do is greet the user. If they provide a name, we will log to the console: 

\`\`\`
console
    Hello, Jane!
\`\`\`

If not, we will simply log:

\`\`\`
console
    Hello!
\`\`\`

You can use an if statement, or you can try a ternary:

\`\`\`javascript
expression ? /* Code when true */ : /* Code when false */;
\`\`\`

<details>
<summary>Hint</summary>

\`\`\`javascript
const greeting = userName ? \`Hello, \${userName}!\` : 'Hello!';
console.log(greeting);
\`\`\`
</details>
<br>

Now lets log the users question, like so:

\`\`\`
console
    User's question: Is today Tuesday?

\`\`\`

<details>
<summary>Hint</summary>

\`\`\`javascript
console.log(\`User's question: \${userQuestion}\`);
\`\`\`
</details>
<br>

Finally, let's call our magic ball function and log the output:

\`\`\`
console
    It is certain
\`\`\`

<details>
<summary>Hint</summary>

\`\`\`javascript
console.log(magicEightBall(userQuestion));
\`\`\`
</details>
<br>

This function doesn't return anything.

### Solution

<details>
  <summary>Reveal</summary>

\`\`\`javascript
function logMagicEightBall(userQuestion, userName) {
    const greeting = userName ? \`Hello, \${userName}!\` : 'Hello!';
    console.log(greeting);
    console.log(\`User's question: \${userQuestion}\`);
    console.log(magicEightBall(userQuestion));
}   
\`\`\`
</details>

`,Si=`# Race Day

## Objective

Create a race registration system that assigns race numbers and start times based on runner's age and registration time.

## Learning Goals

- Begin to use JavaScript objects
- Practice handling multiple conditions`,wi=`
# Function Documentation

## What's Included

1. [registerRunner](#registerrunner)

## registerRunner

The \`registerRunner\` method determines race number and start time based on runner's age and registration status.

### Syntax

\`\`\`javascript
registerRunner(age, registeredEarly);
\`\`\`

#### Parameters

\`age\`

A number representing the runner's age.

\`registeredEarly\`

A boolean indicating whether the runner registered early (true) or late (false).

#### Return value

Returns an object containing:

- \`raceNumber\`: Number between 0-1999
- \`startTime\`: String indicating race start time (or empty string for age 18)
- \`message\`: String with registration information

Race numbers and times are assigned as follows:

- Early adults (over 18): Number 1000-1999 and race at 9:30 am
- Late adults (over 18): Number 0-999 and race at 11:00 am
- Youth (under 18): Number 0-999 and race at 12:30 pm
- Age 18: Referred to registration desk

## Example Usage

\`\`\`javascript
registerRunner(25, true);
/* Returns:
{
    raceNumber: 1234,
    startTime: '9:30 am',
    message: 'Your race number is 1234. You will race at 9:30 am.'
}
*/

registerRunner(16, false);
/* Returns:
{
    raceNumber: 234,
    startTime: '12:30 pm',
    message: 'Your race number is 234. You will race at 12:30 pm.'
}
*/

registerRunner(18, true);
/* Returns:
{
    raceNumber: 345,
    startTime: '',
    message: 'Please see the registration desk.'
}
*/
\`\`\``,Ri=`# Step-by-Step Instructions

This challenge is a classic case of trying to wrap your head around the numerous requirements. The tests are written in a very specific order. Usually, we build up our tests to cover basic functional requirements one by one, writing just enough code for the tests to pass. We don't try to pass all the tests in one go - just one at a time. That's exactly what we will do here. 

This is called Test-Driven Development (TDD). In this case, the tests are written for you with the \`.skip\` to simulate tests 'not being written yet', you just have to make them pass one by one.

Instead of guided instructions, this will be more like guided test passing.

## Test 1: Basic Return

The function documentation requires an object return. Write the minimal code to pass the test.

<details>

<summary>Hint</summary>

\`\`\`javascript
return {};
\`\`\`

</details>

## Test 2: Object Properties

The returned object should have three properties on it. Remember that at this point, you shouldn't be generating any specific numbers or strings. This test is just expecting to see those properties and their types.

_You may directly assign these to the object, but it is probably better that you assign them as your variables and assign the variables to the object._

<details>
<summary>Hint</summary>

\`\`\`javascript
let raceNumber = 0;
let startTime = '';
let message = '';

return { raceNumber, startTime, message };
\`\`\`

</details>

## Test 3: First Functional Requirement

The raceNumber property should be a generated number between 0 and 2000. You may think that this test could pass for a constant variable number, but this test has been cleverly written to expect the use of the \`random\` function.

<details>
<summary>Hint</summary>

\`\`\`javascript
let raceNumber = Math.round(Math.random() * 2000);
\`\`\`

</details>

### Test 4: Generate base race number (0-1000)

Now we need to start addressing some of the conditional functionality. Although we're generating a number between 0 and 2000, we actually want to divide that between late and early runners. Since late runners are the lower numbers, it's better that we generate between 0 and 1000, and add 1000 for early runners so that their numbers are between 1000 and 1999. You shouldn't be adding yet. 

<details>
<summary>Hint</summary>

\`\`\`javascript
let raceNumber = Math.round(Math.random() * 1000);
\`\`\`

</details>

### Test 5: Adjust for early registration

Next we can check for early runners and adjust their number to be between 1000 and 1999. 

<details>
<summary>Hint</summary>

\`\`\`javascript
if (registeredEarly) {
    raceNumber += 1000;
}
\`\`\`

</details>

### Test 6: Only adults receive early numbers

Only those over 18 should be generating numbers between 1000 and 1999. 

<details>
<summary>Hint</summary>

\`\`\`javascript
if (age > 18 && registeredEarly) {
    raceNumber += 1000;
}
\`\`\`

</details>

### Test 7: Assign time and message to early adults

At this stage we need to start breaking down the \`raceTime\` and \`message\` for different runners. Following the docs: 
- Early adults (over 18): Number 1000-1999 and race at 9:30 am

<details>
<summary>Hint</summary>

\`\`\`javascript
if (age > 18 && registeredEarly) {
    raceNumber += 1000;
    startTime = '9:30 am'
    message = (\`Your race number is \${raceNumber}. You will race at 9:30 am.\`);
}
\`\`\`

</details>

### Test 8: Assign time and message to late adults

Following the docs again for the next category: 
- Late adults (over 18): Number 0-999 and race at 11:00 am

<details>
<summary>Hint</summary>

\`\`\`javascript
else if (age > 18 && !registeredEarly) {
    startTime = '11:00 am'
    message = (\`Your race number is \${raceNumber}. You will race at 11:00 am.\`);
}
\`\`\`
</details>

### Test 9: Assign time and message for under 18s

- Youth (under 18): Number 0-999 and race at 12:30 pm

<details>
<summary>Hint</summary>

\`\`\`javascript
else if (age < 18) {
    startTime = '12:30 pm'
    message = (\`Your race number is \${raceNumber}. You will race at 12:30 pm.\`);
}
\`\`\`
</details>

### Test 10: Assign message to age 18

- Age 18: Referred to registration desk

<details>
<summary>Hint</summary>

\`\`\`javascript
else {
    message = ('Please see the registration desk.');
}
\`\`\`
</details>

### Test 11: Checking your overall solution

The final test is checking all the different combinations. If you've passed all the tests so far, this one should pass too. This one is just a catchall.

### Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
function registerRunner(age, registeredEarly) {
    let raceNumber = Math.round(Math.random() * 1000);
    let startTime = '';
    let message = '';

    if (age > 18 && registeredEarly) {
        raceNumber += 1000;
        startTime = '9:30 am';
        message = (\`Your race number is \${raceNumber}. You will race at 9:30 am.\`);
    } else if (age > 18 && !registeredEarly) {
        message = (\`Your race number is \${raceNumber}. You will race at 11:00 am.\`);
        startTime = '11:00 am';
    } else if (age < 18) {
        startTime = '12:30 pm';
        message = (\`Your race number is \${raceNumber}. You will race at 12:30 pm.\`);
    } else {
        message = ('Please see the registration desk.');
    }

    return { raceNumber, startTime, message };
}
\`\`\`

</details>`,Oi=`# Rock Paper Scissors

## Objective

Create a console-based Rock Paper Scissors game that accepts user input, generates a computer choice, determines a winner, and logs the results. The implementation should be modular and testable.

## Learning Goals

- Write small, testable JavaScript functions
- Use control flow (if/else, switch) to implement game logic
- Practice input validation and edge-case handling (e.g., cheat codes)

## Notes

- The \`playGame\` function has already been written for you.
- When you have the tests passing, try running the command \`npm run play\`.
`,Li=`
# Function Documentation

## What's Included

1. [getUserChoice](#getuserchoice)  
2. [getComputerChoice](#getcomputerchoice)  
3. [determineWinner](#determinewinner)  
4. [playGame](#playgame)

## getUserChoice

Normalizes and validates a user's input.

### Syntax
\`\`\`javascript
getUserChoice(userInput)
\`\`\`

#### Parameters
\`userInput\`

A string representing the users input from the console interface.

#### Return value

A string from one of the following options:
- \`rock\`
- \`paper\`
- \`scissors\` 
- \`bomb\`

Returns \`undefined\` when invalid.

### Example Usage

\`\`\`javascript
getUserChoice('rock'); // Returns 'rock'
getUserChoice('ROCK'); // Returns 'rock'
getUserChoice('fork');
/*
console
    Error! Invalid choice.

Returns undefined
*/
getUserChoice(); 
/*
console
    Error! Invalid choice.

Returns undefined
*/
\`\`\`

## getComputerChoice

Generates a computer choice using randomness.

### Syntax
\`\`\`javascript
getComputerChoice()
\`\`\`

#### Return value
Returns a string from one of the following options:
- \`rock\`
- \`paper\`
- \`scissors\`

### Example Usage

\`\`\`javascript
getComputerChoice(); // Returns 'rock'
getComputerChoice(); // Returns 'paper'
getComputerChoice(); // Returns 'scissors'
\`\`\`

## determineWinner

Compares user and computer choices and returns the outcome of the game.

### Syntax
\`\`\`javascript
determineWinner(userChoice, computerChoice)
\`\`\`

#### Parameters
\`userChoice\`

A string representing the user's choice. It may only be \`rock\`, \`paper\` or \`scissors\`.

\`computerChoice\`

A string representing the computer's choice. It may only be \`rock\`, \`paper\` or \`scissors\`.

#### Return value

A string from one of the following options:
- \`You won!\`
- \`The computer won!\`
- \`The game is a tie!\` 

\`\`\`javascript
determineWinner('scissors', 'paper'); // Returns 'You won!'
determineWinner('rock', 'paper'); // Returns 'The computer won!'
determineWinner('paper', 'paper'); // Returns 'The game is a tie!'
\`\`\`

## playGame

Prompts the user to input their choice and attempts to run one round of the game. If user input is \`valid\`, it logs the exchange and result. If \`invalid\`, it prompts the user to try again.

### Syntax
\`\`\`javascript
playGame()
\`\`\`

Behavior:
- Prompts the user with readline when run directly
- Logs: user's choice, computer's choice, and the winner
- Does not auto-run during tests (file checks \`if (require.main === module)\`)

### Testing notes

- Tests mock \`readline.createInterface\`, \`Math.random\`, and \`console.log\`
- Tests validate input normalization, computer choice mapping, winner logic, and console output

### Example Usage

\`\`\`javascript
playGame();
/*
Enter your choice (rock/paper/scissors): Scissors
You threw: scissors
The computer threw: paper
You won!
*/

playGame();
/*
Enter your choice (rock/paper/scissors):
Error!
Enter your choice (rock/paper/scissors): rock
You threw: rock
The computer threw: rock
The game is a tie!
*/
\`\`\``,Di=`# Step-by-Step Instructions

This is more of a fun one - there won't be any TDD involved, but there are tests. You should be using skills you've already learned, so have a go at solving it based on the documentation, and if you get stuck, you can refer to this guide. It will comprise of key considerations and hints to get you there.

## 1. getUserChoice

### What if the input isn't a string?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (typeof userInput !== 'string') {
    console.log('Error! Must enter a string.')
    return;
}
\`\`\`

</details>

### Have you checked that the input is a valid option?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
}
\`\`\`

</details>

### How do you handle the user inputting capital letters?

<details>
<summary>Hint</summary>

\`\`\`javascript
userInput = userInput.toLowerCase();
\`\`\`

</details>

### What happens if the input doesn't match a valid option?

<details>
<summary>Hint</summary>

\`\`\`javascript
console.log('Error! Invalid choice.');
return;
\`\`\`

</details>

### Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
const getUserChoice = userInput => {
    if (typeof userInput !== 'string') {
        console.log('Error! Must enter a string.')
        return;
    }
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    console.log('Error! Invalid choice.');
};
\`\`\`

</details>

## 2. getComputerChoice

### How many options does your random number need to be?

<details>
<summary>Hint</summary>

\`\`\`javascript
const randomNumber = Math.floor(Math.random() * 3);
\`\`\`

</details>

### How can you return different options based on the number?

<details>
<summary>Hint</summary>

\`\`\`javascript
switch (randomNumber) {
    case 0:
        return 'rock';
    case 1:
        return 'paper';
    case 2:
        return 'scissors';
    default:
        return 'rock';
}
\`\`\`

</details>

### Solution


<details>
<summary>Reveal</summary>

\`\`\`javascript
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
};
\`\`\`

</details>

## 3. determineWinner

### What to do when userChoice matches computerChoice?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (userChoice === computerChoice) {
    return 'The game is a tie!';
}
\`\`\`
</details>

### What to do when user chooses rock?

They either lose or win. Do you remember the shortened, inline way of writing conditional statements?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
}
\`\`\`
</details>

### What to do when user chooses paper?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
}
\`\`\`
</details>

### What to do when user chooses scissors?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
}
\`\`\`
</details>

### What if someone tries to give invalid options?

<details>
<summary>Hint</summary>

\`\`\`javascript
return 'Error: invalid choices';
\`\`\`
</details>

### Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }

    return 'Error: invalid choices';
};
\`\`\`

</details>


## 4. Bonus

Have a go at adding your own little cheat code for the user. Add a secret \`bomb\` option that only the user can choose. You'll need to consider two things:
- What do you need to do to add \`bomb\` as a valid input?
- How do need to change the win determination? Is there a quick way?

### Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
const getUserChoice = userInput => {
    // code before...

    if (userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }

    // code after...
}
\`\`\`

\`\`\`javascript
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    // rest of your code...
}
\`\`\`

</details>

## 5. Run the game!

Don't forget to run your game in the console. There is a script written out for you already:

\`\`\`bash
npm run play
\`\`\`

Enjoy!`,vi=`# Sleep Calculator

## Before You Start

You may have noticed this new style of function - the arrow function. I have [written a guide](./arrowFunctions.md) on them if you want to read, or you can do your own research. 

## Objective

Write unit tests for prewritten code to validate its functionality, uncover hidden bugs, and strengthen understanding of test-driven development principles. It would be very beneficial for you to read the instructions for this challenge even if you feel confident testing on your own. 

## Learning Goals

- Demonstrate unit testing techniques
- Practice debugging
- Understand expected behaviours

## Note

You can use \`jest\` in coverage mode to check how robust your tests are! It's not an exact measure of whether you've tested properly, but it can be helpful in catching lines or branches you may have missed.

\`\`\`bash
npm run test:coverage
\`\`\`
`,ki=`# Arrow Functions

In 2015 there was a major revision to JavaScript called ECMAScript 2015 (more commonly known as ES6). As part of this revision, arrow functions were introduced, a concise syntax for writing functions in JavaScript. They are now widely used for short, functional-style code.

## Basic Walkthrough (quick read)

### Ordinary function

\`\`\`javascript
function add(a, b) {
    return a + b;
}
\`\`\`

### Arrow function 

\`\`\`javascript
const add = (a, b) => {
    return a + b;
}
\`\`\`

### Arrow function with single param

\`\`\`javascript
const square = x => {
    return x * x;
}
\`\`\`

### Arrow function with implicit return

\`\`\`javascript
const square = x => x * x;
\`\`\`

### Arrow function without name declaration

\`\`\`javascript
const arr = [1, 2, 3];
const squaredArr = arr.map(num => num * num);
console.log(squaredArr); 
/* 
console:
    [1, 4, 9]
*/
\`\`\`

## In Depth Walkthrough (long read)

### Implicit vs explicit return

- Implicit return (single expression, no braces):

\`\`\`javascript
const greet = name => \`Hello, \${name}!\`;
\`\`\`

- Explicit return (with braces):
\`\`\`javascript
const greet = name => {
    return \`Hello, \${name}!\`;
}
\`\`\`

To return an object literal with implicit return, wrap it in parentheses:
\`\`\`javascript
const obj = () => ({ value: 42 });
\`\`\`

### Lexical \`this\`

Arrow functions do not have their own \`this\`. They capture \`this\` from the surrounding (lexical) scope. This is useful in callbacks:
\`\`\`javascript
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds += 1 // \`this\` refers to Timer instance
    }, 1000);
}
\`\`\`

Contrast with regular function where \`this\` can change:

\`\`\`javascript
const that = {
    value: 1,
    incLater: function() {
        setTimeout(function() {
            // \`this\` refers to the current function, not \`that\` object
        }, 100);
    }
}
\`\`\`

Because arrow functions bind \`this\` lexically, they are handy inside callbacks where you want the outer \`this\`.

### No \`arguments\`, not constructible

- Arrow functions do not have their own \`arguments\` object. Use rest parameters instead:
\`\`\`javascript
const fn = (...args) => args
\`\`\`

- Arrow functions cannot be used as constructors (can't use \`new\`) and have no \`prototype\`.

### When not to use arrow functions

- Object methods that rely on dynamic \`this\` (use regular functions).
- Constructor functions (use \`function\`).
- When you need the \`arguments\` object (use rest params or normal functions).

### Common use cases

- Array helpers:
\`\`\`javascript
const doubled = [1,2,3].map(n => n * 2);
\`\`\`

- Short callbacks:
\`\`\`javascript
setTimeout(() => console.log('done'), 1000);
\`\`\`

- Inline event handlers (careful with \`this\`):
\`\`\`javascript
element.addEventListener('click', (e) => { 
    e.preventDefault();
    console.log(e.target.value); // Logs value of HTML Element    
});
\`\`\`

### Examples

- Map / filter:
\`\`\`javascript
const nums = [1,2,3,4];
const evens = nums.filter(n => n % 2 === 0); // [2, 4]
const squares = nums.map(n => n * n); // [1, 4, 9, 16]
\`\`\`

- Returning object:
\`\`\`javascript
const makeUser = (name) => ({ name, created: Date.now() });
const user = makeUser('Jane');
console.log(user); 
/*
console
    {
        name: 'Jane',
        created: 1762437983853
    }
*/
\`\`\`

- Rest parameters:
\`\`\`javascript
const join = (...parts) => parts.join('-')
const joinedLetters = join(['a', 'b', 'c']);
console.log(joinedLetters); // a-b-c
\`\`\`

### Best practices

- Prefer arrow functions for small, stateless functions and callbacks.
- Use regular functions for object methods that need \`this\` or when you need \`new\`.
- Keep arrow function bodies short; move complex logic into named functions for readability.
- Use parentheses around parameters when there are zero or multiple parameters, or for clarity.

### Further reading

- MDN: Arrow function expressions — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- ECMAScript 2015 (ES6) specification notes`,Pi=`
# Function Documentation

## What's Included

1. [getSleepHours](#getsleephours)  
1. [getActualSleepHours](#getactualsleephours)  
1. [getIdealSleepHours](#getidealsleephours)  
1. [calculateSleepDebt](#calculatesleepdebt)  

## getSleepHours

Takes a valid day of the week and returns the number of hours sleep that day.

### Syntax
\`\`\`javascript
getSleepHours(day)
\`\`\`

#### Parameters
\`day\`

A string representing the day of the week in long format e.g. \`Monday\` or \`tuesday\`.

#### Return value

A \`number\` representing the hours slept.

Returns an \`Error\` when given an invalid parameter.

### Example Usage

\`\`\`javascript
getSleepHours('monday'); // Returns 8
getSleepHours('TUESDAY'); // Returns 7
getSleepHours('sun'); // Returns Error: Invalid day
\`\`\`

## getActualSleepHours

Calculates the total actual hours of sleep accumulated throughout the week.

### Syntax
\`\`\`javascript
getActualSleepHours()
\`\`\`

#### Return value
Returns a number representing the number of hours slept.

### Behaviour

- Depends on \`getSleepHours\` to calculate weekly total.

### Example Usage

\`\`\`javascript
getActualSleepHours(); // Returns 50
\`\`\`

## getIdealSleepHours

Returns the number of ideal hours of sleep in a week.

### Syntax
\`\`\`javascript
getIdealSleepHours(idealHours)
\`\`\`

#### Parameters
\`idealHours\`

A number representing the ideal hours of sleep each night.

#### Return value

A number representing the ideal hours in a week. 

\`\`\`javascript
getIdealSleepHours(8); // Returns 56
\`\`\`

## calculateSleepDebt

Calculates the sleep debt accumulated in a given week and displays it in a pretty format.

### Syntax
\`\`\`javascript
calculateSleepDebt();
calculateSleepDebt(idealHours);
\`\`\`

#### Params
\`idealHours\`

A number representing the ideal hours of sleep. Has a \`default\` value of 8.

#### Return value

Returns a string in prety format describing whether the user had perfect, less than ideal or more than ideal hours of sleep. 

### Behaviour

- Depends on \`getActualSleepHours\` to calculate the actual hours of sleep.
- Depends on \`getIdealSleepHours\` to calculate ideal hours of sleep.

### Example Usage

\`\`\`javascript
calculateSleepDebt(); // Returns 'You got 6 hour(s) less sleep than needed. Get some rest.'

calculateSleepDebt(7); // Returns 'You got 1 hour(s) more sleep than needed.'

calculateSleepDebt(50/7); // Returns 'Perfect amount of sleep.'
\`\`\``,Mi=`# Step-by-Step Instructions

We've received this untested code - what are we going to do? Where do we even start? You may already have an idea of what to do from the previous tests, but we're going to walk through the syntax together anyway.

## Describe

The purpose of a \`describe\` block is to categorise your tests so that it is easier to identify passing/failing tests in the terminal. They also create a scope for tests so that you can assign \`variables\` and \`setup\` or \`teardown\` functions specifically for the tests in that describe block. 

### Syntax
\`\`\`javascript
describe(description, callback);
\`\`\`

#### Params

\`description\` 

A string that will be displayed in the terminal to describe the category.

\`callback\`

A callback function that will be executed by \`jest\` to run all tests within.

## Setting up our describe blocks

Start with an overarching describe:

\`\`\`javascript
describe('sleepCalculator', () => {
    // Tests here
});
\`\`\`

Within that describe, create one describe per function that you're testing:

\`\`\`javascript
describe('sleepCalculator', () => {
    describe('getSleepHours', () => {
        // Tests for getSleepHours
    });

    describe('getActualSleepHours', () => {
        // Tests for getActualSleepHours
    });

    describe('getIdealSleepHours', () => {
        // Tests for getIdealSleepHours
    });

    describe('calculateSleepDebt', () => {
        // Tests for calculateSleepDebt
    });
});
\`\`\`

## Writing tests for getIdealSleepHours

We're going to start with \`getIdealSleepHours\` because it is the simplest function of the four.

This function takes a number and multiplies it by 7. We should assume that the function will be used correctly, i.e. if we require a parameter, it's going to be called with a parameter.

### Step 1: Arrange

Tests are similar to describe blocks, except the description should be describing the behaviour. First up is arranging - set up all the variables needed for the function. 

\`\`\`javascript
test('returns correct weekly total for 8 hours/night', () => {
    // arrange
    const idealHours = 8;
});
\`\`\`

### Step 2: Act
During act, we call our function - we do the actual action. 

\`\`\`javascript
test('returns correct weekly total for 8 hours/night', () => {
    // arrange
    const idealHours = 8;
    // act
    const result = getIdealSleepHours(idealHours);
});
\`\`\`

### Step 3: Assert
Finally, we assert the expected outcome. What makes \`jest\` so popular is the library is made to be as similar to human language as possible. It's very readable!

\`\`\`javascript
test('returns correct weekly total for 8 hours/night', () => {
    // arrange
    const idealHours = 8;
    // act
    const result = getIdealSleepHours(idealHours);
    // assert
    expect(result).toBe(56);
});
\`\`\`

### Conclusion

You can refactor that code into a single line if you want:

\`\`\`javascript
test('returns correct weekly total for 8 hours/night', () => {
    expect(getIdealSleepHours(8)).toBe(56);
});
\`\`\`
That may be appropriate here because the function is so basic, but in many cases splitting up \`arrange/act/assert\` makes it much more readable. 

## Writing tests for getSleepHours

Have a go now at writing some tests for \`getSleepHours\`. You need to test that each day returns the right number. Here's the first one for you:

\`\`\`javascript
test('when given monday, returns 8', () => {
    expect(getSleepHours('monday')).toBe(8);
});
\`\`\`

You might think that you can stuff each assertion into the same test. But it is good to separate it out into several tests. That way, when something goes wrong (in future) it's easier to identify which bit of functionality is failing. You should end up with 7 tests for each day of the week. 

When you've done that, have a go at the error handling. \`Error\` is an class with many useful properties such as \`message\`. In one new test, you should should assert that, when given an invalid day:
- It returns something that is an \`instanceof\` the class \`Error\` (two ways of doing this!)
- The returned error has the expected message

<details>
<summary>Hint</summary>

\`\`\`javascript
test('returns an error when given invalid day', () => {
    const result = getSleepHours('invalid day');

    expect(result instanceof Error).toBe(true);
    // or
    expect(result).toBeInstanceOf(Error);

    expect(result.message).toBe('Invalid day');
});
\`\`\`

</details>

## Writing tests for getActualSleepHours

This function should also be fairly simple. It's just a sum total based on the previous function. Try writing your own test to assert that the result is \`50\`.

Did that work? Have you noticed the issue?

\`\`\`bash
expect(received).toBe(expected) // Object.is equality

Expected: 50
Received: "42Error: Invalid day"
\`\`\`

Line 21 is causing this issue:

\`\`\`javascript
21|    getSleepHours('Sunday');
\`\`\`

It's up to you how you handle this. You could update the \`getActualSleepHours\` function to use the correct lowercase day of the week. Alternatively, and the method I'd like you to try, you could write another test in \`getSleepHours\` to ensure it handles capital letters.

Write the test without updating the code. We want to see the test fail before we change the code.

<details>
<summary>Hint</summary>

\`\`\`javascript
test('should treat day of the week as case insensitive', () => {
    const result = getSleepHours('Monday');

    expect(result instanceof Error).toBe(true);
    // or
    expect(result).toBeInstanceOf(Error);

    expect(result.message).toBe(8);
});
\`\`\`

</details>

If you picked any day of the week with a capitalised letter, you should have failed the test with an \`Error\` being returned. You should have \`jest\` responding: 

\`\`\`bash
expect(received).toBe(expected) // Object.is equality

Expected: 8
Received: [Error: Invalid day]
\`\`\`

This is good. It shows we are asserting for something, in this case the outcome of the function, and the expected behaviour is not happening. Now we can update the code so that our test passes.

It's really important that once your test has been written and fails (for the right reason) that you do not rewrite your test. You should be very careful of rewriting your tests. 

Once you've fixed the error in the code, you should see your other tests passing too!

<details>
<summary>Solution</summary>

\`\`\`javascript
const getSleepHours = day => {
    switch (day.toLowerCase()) {
        case 'monday': return 8;
        case 'tuesday': return 7;
        case 'wednesday': return 6;
        case 'thursday': return 7;
        case 'friday': return 5;
        case 'saturday': return 9;
        case 'sunday': return 8;
        default: return new Error('Invalid day');
    }
};
\`\`\`

</details>

## Writing tests for calculateSleepDebt

The function \`calculateSleepDebt\` has 3 behaviours based on whether the actual number of sleep hours is greater than, less than or equal to the ideal number of sleep hours. This means we need a way of controlling the hours from test to test. Since we shouldn't be changing \`getActualSleepHours\` to suit our needs, we need another way. 

Thankfully, \`calculateSleepDebt\` and \`getIdealSleepHours\` are parametised functions which allow us to control the value of \`ideal\` by increasing or decreasing the value of the parameter. 

We need _at least_ four tests: 
- \`getIdealSleepHours\` returns a lower number than \`getActualSleepHours\`
- \`getIdealSleepHours\` returns a higher number than \`getActualSleepHours\`
- \`getIdealSleepHours\` returns the same number as \`getActualSleepHours\`
-  behaviour when \`ideal\` is not given to \`calculateSleepDebt\`

Have a go at writing these tests. Remember, what are you expecting to happen? Read the function carefully. It's up to you what test you start with first. You may want to change the order of the tests (but not the code!).

<details>
<summary>Solution</summary>

\`\`\`javascript
describe('calculateSleepDebt', () => {
    test('returns perfect sleep message when actual sleep equals ideal sleep', () => {
        const ideal = 50 / 7; // 50 hours per week
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('Perfect amount of sleep.');
    }); 
    
    test('returns less sleep message when actual sleep is less than ideal sleep', () => {
        const ideal = 100 / 7; // ideal sleep more than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) less sleep than needed. Get some rest.');
    });

    test('returns more sleep message when actual sleep is more than ideal sleep', () => {
        const ideal = 25 / 7; // ideal sleep less than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 25 hour(s) more sleep than needed.');
    });

    test('uses default ideal sleep hours when no argument is provided', () => {
        const result = calculateSleepDebt();
        expect(result).toBe('You got 6 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles non-integer ideal sleep hours', () => {
        const ideal = 7.5; // 7.5 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 2.5 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles zero ideal sleep hours', () => {
        const ideal = 0; // 0 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) more sleep than needed.');
    });

    test('handles negative ideal sleep hours', () => {
        const ideal = -5; // negative hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 85 hour(s) more sleep than needed.');
        // you may want to change this behaviour by adding tests to getIdealSleepHours - expect negative inputs to default to 0 perhaps?
    });
});
\`\`\`

</details>

## Complete Test Suite

<details>
<summary>Reveal</summary>

\`\`\`javascript
describe('getSleepHours', () => {
    test('returns correct sleep hours for each day', () => {
        expect(getSleepHours('monday')).toBe(8);
        expect(getSleepHours('tuesday')).toBe(7);
        expect(getSleepHours('wednesday')).toBe(6);
        expect(getSleepHours('thursday')).toBe(7);
        expect(getSleepHours('friday')).toBe(5);
        expect(getSleepHours('saturday')).toBe(9);
        expect(getSleepHours('sunday')).toBe(8);
    });

    test('is case insensitive', () => {
        expect(getSleepHours('MONDAY')).toBe(8);
        expect(getSleepHours('tUeSdAy')).toBe(7);
    });

    test('returns error for invalid day', () => {
        expect(getSleepHours('funday')).toBeInstanceOf(Error);
    });
});

describe('getActualSleepHours', () => {
    test('returns total sleep hours for the week', () => {
        expect(getActualSleepHours()).toBe(50);
    });
});

describe('getIdealSleepHours', () => {
    test('returns correct ideal sleep hours for given ideal hours per night', () => {
        expect(getIdealSleepHours(8)).toBe(56);
        expect(getIdealSleepHours(7)).toBe(49);
        expect(getIdealSleepHours(6)).toBe(42);
    });
});

describe('calculateSleepDebt', () => {
    test('returns perfect sleep message when actual sleep equals ideal sleep', () => {
        const ideal = 50 / 7; // 50 hours per week
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('Perfect amount of sleep.');
    }); 
    
    test('returns less sleep message when actual sleep is less than ideal sleep', () => {
        const ideal = 100 / 7; // ideal sleep more than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) less sleep than needed. Get some rest.');
    });

    test('returns more sleep message when actual sleep is more than ideal sleep', () => {
        const ideal = 25 / 7; // ideal sleep less than actual
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 25 hour(s) more sleep than needed.');
    });

    test('uses default ideal sleep hours when no argument is provided', () => {
        const result = calculateSleepDebt();
        expect(result).toBe('You got 6 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles non-integer ideal sleep hours', () => {
        const ideal = 7.5; // 7.5 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 2.5 hour(s) less sleep than needed. Get some rest.');
    });

    test('handles zero ideal sleep hours', () => {
        const ideal = 0; // 0 hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 50 hour(s) more sleep than needed.');
    });

    test('handles negative ideal sleep hours', () => {
        const ideal = -5; // negative hours per night
        const result = calculateSleepDebt(ideal);
        expect(result).toBe('You got 85 hour(s) more sleep than needed.');
    });
});
\`\`\`

</details>`,Bi="# Coded Message\n\n## Before You Start\n\nThis challenge introduces **Object-Oriented Programming (OOP)** in JavaScript. You'll learn about classes, methods, and the `this` keyword while working with array methods. If you're new to OOP, the instructions file provides detailed explanations of each concept.\n\n## Objective\n\nBuild a `MessageDecoder` class that transforms an encoded array of strings using various array methods to reveal a hidden message about programming. Master OOP principles while practicing array manipulation techniques.\n\n## Learning Goals\n\n- Understand JavaScript classes and constructors\n- Practice array methods (`.pop()`, `.push()`, `.shift()`, `.unshift()`, `.splice()`, `.join()`)\n- Learn method chaining with `this`\n- Work with instance methods and encapsulation\n- Understand the difference between mutating and non-mutating methods\n\n## Note\n\nThe `revealSecretMessage()` method has already been written for you. Your task is to implement the individual methods it depends on. Once all methods are correctly implemented, the secret message will be revealed!\n\nYou can check your progress at any time:\n```bash\nnpm test\n```",Hi=`
# Class Documentation

## What's Included

The \`MessageDecoder\` class with the following methods:

1. [constructor](#constructor)
2. [removeLastElement](#removellastelement)
3. [addToEnd](#addtoend)
4. [replaceByIndex](#replacebyindex)
5. [removeFirstElement](#removefirstelement)
6. [addToBeginning](#addtobeginning)
7. [replaceMultipleWithSingle](#replacemultiplewithsingle)
8. [joinArrayToString](#joinarraytostring)
9. [revealSecretMessage](#revealsecretmessage)
10. [getMessage](#getmessage)
11. [getLength](#getlength)

---

## constructor

Creates a new \`MessageDecoder\` instance with a copy of the provided message array.

### Syntax
\`\`\`javascript
new MessageDecoder(message)
\`\`\`

#### Parameters
\`message\`

An array of strings representing the encoded message.

#### Behaviour

- Creates a copy of the input array to prevent external mutations
- Stores the copy as an instance property \`this.message\`

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['Hello', 'World']);
// decoder.message is ['Hello', 'World'] (a copy)
\`\`\`

---

## removeLastElement

Removes the last element from the message array.

### Syntax
\`\`\`javascript
decoder.removeLastElement()
\`\`\`

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.pop()\` to remove the last element
- Modifies \`this.message\` in place

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.removeLastElement();
decoder.getMessage(); // Returns ['one', 'two']
\`\`\`

---

## addToEnd

Adds one or more elements to the end of the message array.

### Syntax
\`\`\`javascript
decoder.addToEnd(...elements)
\`\`\`

#### Parameters
\`...elements\`

One or more strings to add to the end of the array.

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.push()\` to add elements
- Accepts multiple arguments

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two']);
decoder.addToEnd('three');
decoder.getMessage(); // Returns ['one', 'two', 'three']

decoder.addToEnd('four', 'five');
decoder.getMessage(); // Returns ['one', 'two', 'three', 'four', 'five']
\`\`\`

---

## replaceByIndex

Finds and replaces an element in the message array.

### Syntax
\`\`\`javascript
decoder.replaceByIndex(oldElement, newElement)
\`\`\`

#### Parameters
\`oldElement\`

The string to find and replace.

\`newElement\`

The string to replace it with.

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.indexOf()\` to find the element
- Replaces the element at that index
- Does nothing if the element is not found

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.replaceByIndex('two', 'TWO');
decoder.getMessage(); // Returns ['one', 'TWO', 'three']

decoder.replaceByIndex('four', 'FOUR');
decoder.getMessage(); // Returns ['one', 'TWO', 'three'] (unchanged)
\`\`\`

---

## removeFirstElement

Removes the first element from the message array.

### Syntax
\`\`\`javascript
decoder.removeFirstElement()
\`\`\`

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.shift()\` to remove the first element
- Modifies \`this.message\` in place

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.removeFirstElement();
decoder.getMessage(); // Returns ['two', 'three']
\`\`\`

---

## addToBeginning

Adds one or more elements to the beginning of the message array.

### Syntax
\`\`\`javascript
decoder.addToBeginning(...elements)
\`\`\`

#### Parameters
\`...elements\`

One or more strings to add to the beginning of the array.

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.unshift()\` to add elements
- Accepts multiple arguments
- Elements are added in the order provided

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['three']);
decoder.addToBeginning('two');
decoder.getMessage(); // Returns ['two', 'three']

decoder.addToBeginning('zero', 'one');
decoder.getMessage(); // Returns ['zero', 'one', 'two', 'three']
\`\`\`

---

## replaceMultipleWithSingle

Removes multiple consecutive elements and replaces them with a single element.

### Syntax
\`\`\`javascript
decoder.replaceMultipleWithSingle(firstIndex, lastIndex, newElement)
\`\`\`

#### Parameters
\`firstIndex\`

The index of the first element to remove.

\`lastIndex\`

The index of the last element to remove (inclusive).

\`newElement\`

The string to insert in their place.

#### Return value

Returns \`this\` to enable method chaining.

#### Behaviour

- Uses \`.splice()\` to remove and replace elements
- Removes elements from \`firstIndex\` to \`lastIndex\` (inclusive)
- Inserts \`newElement\` at \`firstIndex\`

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['I', 'love', 'to', 'code', 'and', 'program']);
decoder.replaceMultipleWithSingle(3, 5, 'swim');
decoder.getMessage(); // Returns ['I', 'love', 'to', 'swim']
\`\`\`

---

## joinArrayToString

Combines the message array into a single string with spaces.

### Syntax
\`\`\`javascript
decoder.joinArrayToString()
\`\`\`

#### Return value

Returns a \`string\` with all array elements joined by spaces.

**Note:** This method does NOT return \`this\`, so it breaks method chaining.

#### Behaviour

- Uses \`.join(' ')\` to create a string
- Does not modify \`this.message\`

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['Hello', 'World']);
const result = decoder.joinArrayToString();
// result is 'Hello World'
// decoder.getMessage() still returns ['Hello', 'World']
\`\`\`

---

## revealSecretMessage

Applies all transformations to decode the message and returns the result.

### Syntax
\`\`\`javascript
decoder.revealSecretMessage()
\`\`\`

#### Return value

Returns a \`string\` containing the decoded message.

#### Behaviour

**This method is already implemented for you.** It calls the other methods in the correct sequence:
1. Removes the last element
2. Adds 'to' and 'Program' to the end
3. Replaces 'easily' with 'right'
4. Removes the first element
5. Adds 'Programming' to the beginning
6. Replaces 'get', 'right', 'the', 'first', 'time,' with 'know,'
7. Joins the array into a string

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(startingMessage);
const secret = decoder.revealSecretMessage();
// Returns: 'Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program'
\`\`\`

---

## getMessage

Returns a copy of the current message array.

### Syntax
\`\`\`javascript
decoder.getMessage()
\`\`\`

#### Return value

Returns a copy of \`this.message\` as an array.

#### Behaviour

- Returns a new array (not a reference)
- Useful for testing and debugging

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two']);
const message = decoder.getMessage();
// message is ['one', 'two']
message.push('three'); // Doesn't affect decoder.message
\`\`\`

---

## getLength

Returns the current length of the message array.

### Syntax
\`\`\`javascript
decoder.getLength()
\`\`\`

#### Return value

Returns a \`number\` representing the array length.

### Example Usage

\`\`\`javascript
const decoder = new MessageDecoder(['one', 'two', 'three']);
decoder.getLength(); // Returns 3
decoder.removeLastElement();
decoder.getLength(); // Returns 2
\`\`\`

---

## Method Chaining

Most methods return \`this\`, allowing you to chain multiple operations:

\`\`\`javascript
const result = new MessageDecoder(['one', 'two', 'three'])
    .removeFirstElement()
    .addToEnd('four')
    .replaceByIndex('two', 'TWO')
    .joinArrayToString();
// result is 'TWO three four'
\`\`\`

**Note:** \`.joinArrayToString()\` returns a string, so it must be the last method in a chain.

---

## Array Methods Reference

This challenge uses the following array methods:

- **\`.pop()\`** - Removes and returns the last element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))
- **\`.push()\`** - Adds elements to the end ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))
- **\`.shift()\`** - Removes and returns the first element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift))
- **\`.unshift()\`** - Adds elements to the beginning ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))
- **\`.splice()\`** - Removes/replaces/adds elements at any position ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice))
- **\`.join()\`** - Combines array elements into a string ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join))
- **\`.indexOf()\`** - Finds the index of an element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))`,Ui=`# Step-by-Step Instructions

This challenge introduces Object-Oriented Programming (OOP) while mastering JavaScript array methods. You'll build a \`MessageDecoder\` class that transforms an encoded message to reveal a secret about programming.

The good news: the \`revealSecretMessage()\` method is already written for you! Your job is to implement the individual methods it depends on. Once all methods work correctly, the secret message will be revealed.

## Introduction to Classes

Before we dive into coding, let's understand what makes classes special in JavaScript.

A **class** is a blueprint for creating objects. It bundles related data and behavior together. Think of it like a template - you can create many instances from the same class, each with their own data.

### Basic Class Syntax

\`\`\`javascript
class MessageDecoder {
    constructor(message) {
        this.message = message; // Instance property - unique to each decoder
    }
    
    someMethod() {
        // Access instance data with this.message
        return this.message;
    }
}

// Create an instance (a specific decoder with its own message)
const decoder = new MessageDecoder(['Hello', 'World']);
const anotherDecoder = new MessageDecoder(['Goodbye']); // Different message, same class
\`\`\`

### Key Concepts

- **\`constructor\`**: Special method called automatically when you use \`new\`
- **\`this\`**: Refers to the current instance (the specific decoder you're working with)
- **Instance methods**: Functions that belong to the class and work with \`this\`
- **Method chaining**: When methods return \`this\`, you can call multiple methods in a row

### Why Use Classes?

- **Organization**: Related functionality lives together
- **Reusability**: Create many decoders from one blueprint
- **Encapsulation**: Keep internal state (\`this.message\`) protected inside the class
- **Chaining**: Fluent APIs that read like sentences

**MDN Reference:** [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

## Step 1: Implementing \`removeLastElement()\`

This method should remove the last element and return \`this\` for chaining.

### Implementation

Start by accessing the \`message\` property on the object instance. It is an \`array\` which means it has its own methods you can use to achieve the desired result. The \`pop\` method is suitable for removing the last element of an array. 

Remember to return \`this\`.

<details>
<summary>Solution</summary>

\`\`\`javascript
removeLastElement() {
    this.message.pop();
    return this;
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

---

## Step 2: Implementing \`addToEnd()\`

This method should add elements to the end and support multiple arguments.

### Implementation

To handle multiple parameters in JavaScript, we can use \`rest parameters\`. These collect all the arguments passed to a function, which we can then use. 

Firstly, add \`...args\` as your function parameter. Then, \`console log\` it to see what's happening. 

<details>
<summary>Hint</summary>

\`\`\`javascript
addToEnd(...args) {
    console.log(args);
}
\`\`\`
</details>

The function is being called like so: 

\`\`\`javascript
addToEnd('four', 'five', 'six');
\`\`\`

The \`rest parameters\` collect them into an array with one reference (the name of the parameter, in this case \`args\`). Now we can call an array method on our message:
- use the \`push\` method on the message
- use the \`spread operator\` to pass all arguments to it 
- return this

<details>
<summary>Solution</summary>

\`\`\`javascript
addToEnd(...args) {
    this.message.push(...args);
    return this;
}
\`\`\`

</details>

**MDN References:** 
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

---

## Step 3: Implementing \`replaceByIndex()\`

This method finds an element and replaces it.

### Implementation

This method is slightly more complicated. This is the flow we need to follow:

1. Use \`.indexOf()\` to find the element's position
2. Check if the index is not -1 (element was found)
3. Replace the element at that index
4. Return \`this\`

Let's start by finding the index in our message using the \`indexOf\` method and assigning it to a well-named variable. Our function will need to take its first parameter, the old element to be replaced.

<details>
<summary>Hint</summary>

\`\`\`javascript
replaceByIndex(oldElement) {
    const index = this.message.indexOf(oldElement);
}
\`\`\`

</details>

Next, let's check if the element was found in the array. Check the \`MDN reference\` to see what indiciator the method gives when an element is not found. 

<details>
<summary>Hint</summary>

\`\`\`javascript
if (index !== -1) {
    // code here
}

\`\`\`
</details>

Thirdly we need to replace the old element with the new element. We'll need to take a second parameter (the new element) and use the index we stored to access the message property and reassign it.

<details>
<summary>Hint</summary>

\`\`\`javascript
replaceByIndex(oldElement, newElement) {
    // previous code...
    if (index !== -1) {
        this.message[index] = newElement;
    }
}
\`\`\`

</details>

Finally we want to return \`this\`, and that wraps up this method!

<details>
<summary>Solution</summary>

\`\`\`javascript
replaceByIndex(oldElement, newElement) {
    const index = this.message.indexOf(oldElement);
    if (index !== -1) {
        this.message[index] = newElement;
    }
    return this;
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

---

## Step 4: Implementing \`removeFirstElement()\`

This method removes the first element, similar to \`removeLastElement()\` but using \`.shift()\`.

### Implementation

You should be all set for this method! If you get stuck, refer to \`Step 1.\`

<details>
<summary>Solution</summary>

\`\`\`javascript
removeFirstElement() {
    this.message.shift();
    return this;
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

---

## Step 5: Implementing \`addToBeginning()\`

This method adds elements to the start, similar to \`addToEnd()\` but using \`.unshift()\`.

### Implementation

As before, refer to \`Step 2\` if you get stuck.

<details>
<summary>Solution</summary>

\`\`\`javascript
addToBeginning(...args) {
    this.message.unshift(...args);
    return this;
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

---

## Step 6: Implementing \`replaceMultipleWithSingle()\`

This is the most complex method - it removes multiple elements and replaces them with one.

### Understanding the Problem

Given: \`['I', 'love', 'to', 'code', 'and', 'program']\`  
We want to replace indices 3, 4, 5 (\`'code', 'and', 'program'\`) with \`'swim'\`  
Result: \`['I', 'love', 'to', 'swim']\`

### Understanding \`.splice()\`

The splice method takes a starting index, a number of elements to delete from that index, and an item to insert afterwards. I'd recommend exploring it in the \`console\` or on the \`MDN\` page.

\`\`\`javascript
array.splice(startIndex, deleteCount, itemToAdd);
\`\`\`

### Implementation

Our function will also take three parameters - the first index, the second index, and the new element.

Let's say we're deleting indices 3, 4 and 5. That's three elements to delete. Our first parameter will be \`3\` (starting index) and our second parameter will be \`5\` (finishing index). We can subtract the two indices and add \`1\` to get the number of elements to delete.  


<details>
<summary>Hint</summary>

\`\`\`javascript
replaceMultipleWithSingle(firstIndex, lastIndex) {
    const deleteCount = lastIndex - firstIndex + 1;
}
\`\`\`

</details>

Now we can call the \`splice\` method using our index, delete count and by taking the third parameter of our new element.

<details>
<summary>Hint</summary>

\`\`\`javascript
replaceMultipleWithSingle(firstIndex, lastIndex, newElement) {
    // previous code...
    this.message.splice(firstIndex, deleteCount, newElement);
}
\`\`\`

</details>

And to finish off the method, you know what to do!

<details>
<summary>Solution</summary>

\`\`\`javascript
replaceMultipleWithSingle(firstIndex, lastIndex, newElement) {
    const deleteCount = lastIndex - firstIndex + 1;
    this.message.splice(firstIndex, deleteCount, newElement);
    return this;
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

---

## Step 7: Implementing \`joinArrayToString()\`

This method combines the array into a single string. Unlike other methods, it returns a string, not \`this\`.

### Implementation

Each method until now has been directly mutating the array attached to the object instance. The \`join\` method creates a \`string\` by connecting every element of an array whatever \`string\` argument you give it. For example:

\`\`\`javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join('-')); // logs 1-2-3-4-5
\`\`\`

If we want to turn an array of strings into a sentence, we need to connect them with a \`whitespace\`. We want to return the output of the \`join\` array method.

<details>
<summary>Solution</summary>

\`\`\`javascript
joinArrayToString() {
    return this.message.join(' ');
}
\`\`\`

</details>

**MDN Reference:** [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

## Conclusion

You should see that the \`revealSecretMethod\` method is already implemented using your functions - and hopefully working! There are also a few other tests in there, for example the method chaining test:

\`\`\`javascript
describe('method chaining', () => {
    test('should allow chaining multiple methods', () => {
        const result = decoder
            .removeLastElement()
            .addToEnd('four')
            .removeFirstElement()
            .joinArrayToString();
        
        expect(result).toBe('two four');
    });
});
\`\`\`

This test verifies that:
1. Each method returns \`this\` (except \`joinArrayToString\`)
2. Methods can be called consecutively
3. The final result is correct

---

## Helper Methods

I've also written two \`getters\`, methods which return helpful properties.

### \`getMessage()\`

Returns a copy of the current message.

\`\`\`javascript
getMessage() {
    return [...this.message];
}
\`\`\`

### \`getLength()\`

Returns the current length of the message array.

\`\`\`javascript
getLength() {
    return this.message.length;
}
\`\`\`

These methods are crucial for testing since they provide safe access to the internal state.

---

## Further Practice

Try these extensions to deepen your understanding:

1. **Add error handling**: What should happen if someone tries to replace an element that doesn't exist?
2. **Create a reverse method**: Can you encode a message back into the original format?
3. **Add a \`reset()\` method**: Restore the message to its original state
4. **Implement \`toString()\`**: Automatically call \`joinArrayToString()\` when the decoder is converted to a string
5. **Create a static method**: \`MessageDecoder.decode(message)\` that creates an instance and reveals the message in one call

---

## Expected Output

When all methods are correctly implemented, try running the custom script:

\`\`\`bash
npm run secretMessage
\`\`\`

Should output:

\`\`\`
Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program
\`\`\`

Congratulations! You've mastered OOP principles and array manipulation in JavaScript!
`,Fi=`#  Whale Talk

## Objective

Create a program that translates human text into "whale talk" by extracting and transforming vowels according to whale language rules.

## Learning Goals

- Practice using loops to iterate through strings
- Work with string and array methods
- Develop problem solving skills

## Success Criteria

It doesn't matter how you solve this challenge. The tests only check the output, so the solution is up to you! Your solution should match this criteria:

- Function correctly identifies vowels (a, e, i, o, u)
- Consonants and 'y' are ignored
- Vowels 'e' and 'u' are doubled. Eg: 'e' -> 'ee' & 'u' -> 'uu'
- Output is in uppercase
- All test cases pass
`,ji=`# Function Documentation

## What's Included

1. [translateToWhaleTalk](#translatetowhaletalk)

## translateToWhaleTalk

The \`translateToWhaleTalk\` method receives a string of human text and converts it into whale language by extracting vowels and applying whale talk rules.

### Syntax

\`\`\`javascript
translateToWhaleTalk(text);
\`\`\`

#### Parameters

\`text\`

A string to convert to whale talk.

#### Return value
A string representing the whale talk translation in uppercase. Vowels (a, e, i, o, u) are extracted, 'e' and 'u' are doubled, and the result is capitalized. Returns an empty string if no vowels are found.

### Example Usage

\`\`\`javascript
translateToWhaleTalk('turpentine and turtles'); // Returns 'UUEEIEEAUUEE'
translateToWhaleTalk('Hi, Human'); // Returns 'IUUA'
translateToWhaleTalk('a whale of a deal!'); // Returns 'AAEEOAEEA'
\`\`\`
`,Yi=`# Step-by-Step Instructions

This challenge teaches string iteration, conditional logic, and array manipulation while building a fun text converter. You'll create a function that translates human text into "whale talk" by following specific vowel rules.

## Understanding the Problem

Whales only understand vowels, and they have special pronunciation rules:
- They only "hear" vowels: a, e, i, o, u
- They don't recognize 'y' as a vowel
- They emphasize 'e' and 'u' sounds by doubling them
- Everything is UPPERCASE because whales are loud!

**Example:**
\`\`\`
Input:  "turpentine and turtles"
Output: "UUEEIEEAUUUEE"
\`\`\`

Let's break down how this works:
- \`t\` → ignored (consonant)
- \`u\` → \`uu\` (vowel, doubled)
- \`r\` → ignored (consonant)
- \`p\` → ignored (consonant)
- \`e\` → \`ee\` (vowel, doubled)
- \`n\` → ignored (consonant)
- and so on...

---

## Step 1: Create the Function and Handle Invalid Input

First, let's set up our function to make sure it can handle unexpected inputs.

### Implementation

You already have a function called \`convertToWhaleTalk\` that takes one parameter: \`text\`.

Before we process the text, we need to check if it's actually a string. If someone passes in \`null\`, \`undefined\`, a number, or any other non-string value, we should return an empty string.

<details>
<summary>Hint</summary>

Use the \`typeof\` operator to check the data type:
\`\`\`javascript
if (typeof text !== 'string') {
    return '';
}
\`\`\`
</details>

**Concept Check:** Why do we need this validation?
- Prevents crashes when someone calls \`convertToWhaleTalk(null)\`
- Makes our function more robust and predictable
- This is called "defensive programming"

---

## Step 2: Set Up Your Data Structures

Now let's create the tools we'll need to process the text.

### Implementation

We need two things:
1. An array of vowels to check against
2. An empty array to store our results

Create a constant called \`vowels\` that contains all the vowels we care about: \`'a', 'e', 'i', 'o', 'u'\`.

Then create an empty array called \`result\` where we'll collect the whale talk characters.

<details>
<summary>Hint</summary>

\`\`\`javascript
const vowels = ['a', 'e', 'i', 'o', 'u'];
const result = [];
\`\`\`
</details>

**Why use an array for vowels?**
- Easy to check if a character is a vowel using \`.includes()\`
- More maintainable than multiple \`||\` conditions
- Clear and readable

**Why collect results in an array?**
- Arrays are mutable (we can keep adding to them)
- We can easily join them into a string at the end
- More efficient than string concatenation in a loop

---

## Step 3: Loop Through Each Character

We need to examine every character in the input text.

### Implementation

Use a \`for\` loop to iterate through each character in the text. The loop should:
- Start at index 0
- Continue while the index is less than the text length
- Increment by 1 each time

Inside the loop, store the current character in a variable called \`char\`.

<details>
<summary>Hint</summary>

\`\`\`javascript
for (let i = 0; i < text.length; i++) {
    const char = text[i];
}
\`\`\`
</details>

**Loop Breakdown:**
- \`let i = 0\` → Start at the first character
- \`i < text.length\` → Keep going until we've seen all characters
- \`i++\` → Move to the next character each time
- \`text[i]\` → Access the character at position \`i\`

---

## Step 4: Convert to Lowercase for Comparison

We need to handle both uppercase and lowercase letters consistently.

### Implementation

Right after storing the character, convert it to lowercase and store it in \`char\`. This way, 'A' and 'a' will both be treated as 'a'.

<details>
<summary>Hint</summary>

Use the \`.toLowerCase()\` method on the character:
\`\`\`javascript
const char = text[i].toLowerCase();
\`\`\`
</details>

**Why convert to lowercase?**
- Our vowels array only contains lowercase letters
- Makes comparison easier (we don't need to check for both 'A' and 'a')
- We'll convert everything to uppercase at the end anyway

_Note: You could do this to uppercase instead, but I prefer comparisons with lowercase letters._

---

## Step 5: Check if the Character is a Vowel

Now we need to determine if the current character is one of our vowels.

### Implementation

Use an \`if\` statement to check if the \`vowels\` array includes the current character. The \`.includes()\` method returns \`true\` if the item is in the array, \`false\` otherwise.

For now, just add a comment inside the if block saying \`// It's a vowel!\`

<details>
<summary>Hint</summary>

\`\`\`javascript
if (vowels.includes(char)) {
    // It's a vowel!
}
\`\`\`
</details>

**Understanding \`.includes()\`:**
\`\`\`javascript
['a', 'e', 'i'].includes('a')  // true
['a', 'e', 'i'].includes('b')  // false
['a', 'e', 'i'].includes('A')  // false (case-sensitive!)
\`\`\`

This is why we converted to lowercase first!

---

## Step 6: Add the Vowel to Results

When we find a vowel, we need to add it to our results array.

### Implementation

Inside the \`if\` block, use \`.push()\` to add the character to the \`result\` array.

<details>
<summary>Hint</summary>

\`\`\`javascript
if (vowels.includes(char)) {
    result.push(char);
}
\`\`\`
</details>

**What's happening:**
- When we find 'a' in "whale", we add 'a' to result → \`['a']\`
- When we find 'e' in "whale", we add 'e' to result → \`['a', 'e']\`
- Consonants are ignored (they never enter the if block)

---

## Step 7: Double the 'e' and 'u' Vowels

Whales emphasize 'e' and 'u' sounds, so we need to add them twice.

### Implementation

After adding the vowel to the result, check if the character is 'e' or 'u'. If it is, push it to the result array again.

You can do this with another \`if\` statement that checks: is \`char\` equal to 'e' OR is \`char\` equal to 'u'?

<details>
<summary>Hint</summary>

\`\`\`javascript
if (char === 'e' || char === 'u') {
    result.push(char);
}
\`\`\`
</details>

**Example Flow:**
\`\`\`
Input: "eu"
- Find 'e' → push 'e' → ['e']
- 'e' needs doubling → push 'e' again → ['e', 'e']
- Find 'u' → push 'u' → ['e', 'e', 'u']
- 'u' needs doubling → push 'u' again → ['e', 'e', 'u', 'u']
\`\`\`

**The \`||\` operator:**
- \`||\` means "OR"
- Returns \`true\` if either condition is \`true\`
- \`char === 'e' || char === 'u'\` is \`true\` when char is 'e' or 'u'

---

## Step 8: Convert to Uppercase and Return

Finally, we need to combine our array into a string and make it uppercase.

### Implementation

After the loop completes, we need to:
1. Join the result array into a single string (use \`.join('')\` with an empty string separator)
2. Convert it to uppercase (use \`.toUpperCase()\`)
3. Return the final string

<details>
<summary>Hint</summary>

\`\`\`javascript
return result.join('').toUpperCase();
\`\`\`
</details>

**Understanding \`.join()\` and \`.toUpperCase()\`:**

\`\`\`javascript
['a', 'e', 'i'].join('')        // "aei"
['a', 'e', 'i'].join('-')       // "a-e-i"
['a', 'e', 'i'].join(' ')       // "a e i"

"hello".toUpperCase()           // "HELLO"
"aEiOu".toUpperCase()           // "AEIOU"
\`\`\`

We chain them together: \`result.join('').toUpperCase()\`
1. First, join the array into a string: \`['e', 'e', 'u', 'u']\` → \`"eeuu"\`
2. Then convert to uppercase: \`"eeuu"\` → \`"EEUU"\`

---

## Complete Solution

<details>
<summary>Reveal</summary>

\`\`\`javascript
function convertToWhaleTalk(text) {
    if (typeof text !== 'string') {
        return '';
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (vowels.includes(char)) {
            result.push(char);
            // Check if we need to double it
            if (char === 'e' || char === 'u') {
                result.push(char);
            }
        }
    }

    return result.join('').toUpperCase();
}
\`\`\`
</details>

---

## Alternative Approaches

Want to take it further? Try these:

### Using For...Of Loop

Instead of assigning \`text[i]\`, try using a \`for..of\` loop to do this directly. 

- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

<details>
<summary>Hint</summary>

\`\`\`javascript
for (const character of text) {
    const char = character.toLowerCase();
    // rest of logic...
}
\`\`\`

</details>


### Using Array Methods

Try solving this using the \`.filter\` and \`.map\` methods. You can even chain the process from start to finish.

- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

<details>
<summary>Hint</summary>

\`\`\`javascript
return text
    .toLowerCase()
    .split('')
    .filter(char => vowels.includes(char))
    .map(char => (char === 'e' || char === 'u') ? char + char : char)
    .join('')
    .toUpperCase();
\`\`\`

</details>

**Discussion Question:** Which approach is more readable? Which is more efficient?

---

## Conclusion

You've successfully created a whale talk translator! You've practiced:
- Input validation
- String manipulation
- Array operations
- Conditional logic
- Loops

These are fundamental skills you'll use in every JavaScript project!

**MDN References:**
- [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
`;function Wi(e){const t=e.replace(/\\/g,"/");return t.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/)?.[1]??t.split("/").slice(-2,-1)[0]??"unknown"}function Gi(e){const t=e.match(/^(\d+)\b/);return t?Number(t[1]):Number.MAX_SAFE_INTEGER}function zi(e){return e.replace(/\\/g,"/").split("/").slice(-1)[0]??"unknown.md"}const Sn=e=>e.replace(/\.md$/i,"").replace(/\d+/g,"").replace(/[-_]+/g," ").trim(),wn={"instructions.md":0,"readme.md":1,"function_documentation.md":2,"function-documentation.md":2,"extra_guide.md":3,"extra-guide.md":3,"solution.md":4};function qi(e,t){const n=e.toLowerCase(),s=t.toLowerCase(),r=wn[n]??100,u=wn[s]??100;return r-u||n.localeCompare(s)}const Qi={glob(){return Object.assign({"../../../../../docs/1-temperature-converter/README.md":pi,"../../../../../docs/1-temperature-converter/TDD-guide.md":bi,"../../../../../docs/1-temperature-converter/function-documentation.md":gi,"../../../../../docs/1-temperature-converter/instructions.md":Ei,"../../../../../docs/1-temperature-converter/solution.md":Ti,"../../../../../docs/2-dog-age-calculator/README.md":_i,"../../../../../docs/2-dog-age-calculator/function-documentation.md":Ai,"../../../../../docs/2-dog-age-calculator/instructions.md":yi,"../../../../../docs/2-dog-age-calculator/solution.md":Ni,"../../../../../docs/3-magic-eight-ball/README.md":Ci,"../../../../../docs/3-magic-eight-ball/function-documentation.md":Ii,"../../../../../docs/3-magic-eight-ball/instructions.md":xi,"../../../../../docs/4-race-day/README.md":Si,"../../../../../docs/4-race-day/function-documentation.md":wi,"../../../../../docs/4-race-day/instructions.md":Ri,"../../../../../docs/5-rock-paper-scissors/README.md":Oi,"../../../../../docs/5-rock-paper-scissors/function-documentation.md":Li,"../../../../../docs/5-rock-paper-scissors/instructions.md":Di,"../../../../../docs/6-sleep-calculator/README.md":vi,"../../../../../docs/6-sleep-calculator/arrow-functions.md":ki,"../../../../../docs/6-sleep-calculator/function-documentation.md":Pi,"../../../../../docs/6-sleep-calculator/instructions.md":Mi,"../../../../../docs/7-coded-message/README.md":Bi,"../../../../../docs/7-coded-message/class-documentation.md":Hi,"../../../../../docs/7-coded-message/instructions.md":Ui,"../../../../../docs/8-whale-talk/README.md":Fi,"../../../../../docs/8-whale-talk/function-documentation.md":ji,"../../../../../docs/8-whale-talk/instructions.md":Yi})}};function Vi(e){const t=new Map;for(const[s,r]of Object.entries(e)){const u=Wi(s),d=zi(s),f={fileName:d,title:Sn(d),markdown:r},m=t.get(u);m?m.push(f):t.set(u,[f])}const n=Array.from(t.entries()).map(([s,r])=>{const u=[...r].sort((d,f)=>qi(d.fileName,f.fileName));return{slug:s,title:Sn(s),order:Gi(s),files:u.map(d=>({title:d.title,markdown:d.markdown}))}});return n.sort((s,r)=>s.order-r.order||s.title.localeCompare(r.title)),n}function Ma(){return w.useMemo(()=>{const e=Qi.glob();return Vi(e)},[])}const Ki=`<a id="top"></a>

# JavaScript Learning Challenges

A collection of JavaScript coding challenges designed to help you learn and practice JavaScript fundamentals.

<details>
<summary><strong>Table of Contents</strong></summary>

- [Getting Started](#getting-started)
- [Challenges](#challenges)
  - [Challenge List](#challenge-list)
- [How to Use](#how-to-use)
- [Testing](#testing)
  - [Run all tests](#run-all-tests)
  - [Run test by filename](#run-test-by-filename)
  - [Run tests by pattern](#run-tests-by-pattern)
  - [Run tests in watch mode](#run-tests-in-watch-mode)
- [Contributing to webpage (as a developer)](#contributing-to-webpage-as-a-developer)
  - [Debug webpage in VSCode](#debug-webpage-in-vscode)

</details>

## Getting Started

1. Fork this repository
2. Clone this repository

\`\`\`bash
git clone https://github.com/<your-username>/js-content.git
\`\`\`

3. Open in VSCode (or other editor)
4. Install dependencies:

\`\`\`bash
npm install
\`\`\`

5. Run tests:

\`\`\`bash
npm test
\`\`\`

[Back to top](#top)

## Challenges

Each challenge is in its own directory with:

- A \`README.md\` with instructions. Always start here!
- A starter \`.js\` file. This is where you write your code.
- Test files to verify your solution
- Other instructions and guided walkthroughs. Always refer to the README first.

### Challenge List

1. **[Temperature Converter](1.%20Temperature/)** - Convert between Celsius and Fahrenheit
2. **[Dog Age Calculator](2.%20Dog%20Age%20Calculator/)** - Calculate dog years from human years
3. **[Magic Eight Ball](3.%20Magic%20Eight%20Ball/)** - Create a fortune-telling game
4. **[Race Day](4.%20Race%20Day/)** - Assign race numbers and start times
5. **[Rock Paper Scissors](5.%20Rock%20Paper%20Scissors/)** - Classic game implementation
6. **[Sleep Calculator](6.%20Sleep%20Calculator/)** - Calculate sleep debt
7. **[Coded Message](7.%20Coded%20Message/)** - Decode secret messages
8. **[Whale Talk](8.%20Whale%20Talk/)** - Translate to whale language
9. **[Choose the Correct Iterator](9.%20Choose%20the%20Correct%20Iterator/)\\*** - Practice with array methods
10. **[Grammar Checker](10.%20Grammar%20Checker/)\\*\\*** - Check and fix grammar
11. **[Menu Maker](11.%20Menu%20Maker/)\\*\\*** - Create dynamic menus
12. **[Team Sports](12.%20Team%20Sports/)\\*\\*** - Manage team rosters

<br />

_\\*This challenge is still in the Proof of Concept stage. There may be problems or inconsistencies._

_\\*\\*These challenges have not been migrated to the new format yet. Please refer to the pdf_instructions._

[Back to top](#top)

## How to Use

1. Navigate to any challenge directory
2. Read the \`README.md\` for instructions
3. Implement your solution in the provided \`.js\` file
4. Run \`npm test\` to check your solution
5. All tests should pass when your solution is correct

[Back to top](#top)

## Testing

### Run all tests:

\`\`\`bash
npm test
\`\`\`

_The npm commands \`test\` and \`start\` are special - you can run them as shown without \`run\`._

_You can also shorten this command to \`npm t\`._

### Run test by filename

You can run the tests of a specific test by including the filename.

\`\`\`bash
npm test temperature.test.js
\`\`\`

### Run tests by pattern

Pass a pattern to run only matching tests. Examples:

- Match a short pattern (matches \`race.test.js\` and \`rockPaperScissors.test.js\`):

\`\`\`bash
npm test r
\`\`\`

- Run all tests in challenge 1 (Temperature):

\`\`\`bash
npm test 1
\`\`\`

### Run tests in watch mode:

\`\`\`bash
npm run test:watch
\`\`\`

_Other npm scripts (those with custom names) must be invoked with \`npm run <script>\`._

[Back to top](#top)

## Contributing to webpage (as a developer)

1. From repo root, change directory to \`webpage\` directory

\`\`\`bash
cd  webpage
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Start local development server

You have two options:

**Option A: Standard Development Server**

\`\`\`bash
npm run dev
\`\`\`

Starts a development server at \`http://localhost:5173/\`.

**Option B: Development Server with CLI Enabled**

\`\`\`bash
npm run dev:cli
\`\`\`

Starts a development server at \`http://localhost:5173/\` with the CLI tool enabled.

4. Run tests and see code coverage

\`\`\`bash
npm run coverage
\`\`\`

Code coverage will be outputted to \`webpage/coverage/\` directory.

[Back to top](#top)

### Debug webpage in VSCode

**For a more detailed guide, see [Microsoft’s official documentation on debugging React](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)**

_Note that, as a complement to debugging in VSCode, the [React Developer Tools browser extension](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) is recommended. The extension's component view, for example, allows you to interact with the component tree while viewing the React app as it is rendered to the browser._

1. On VSCode, open any TypeScript (.tsx) file in \`webpage/src\`.

2. On left-side panel click on ‘Run and Debug’ (shortcut: Ctrl + Shift + D).

3. On 'Run and Debug' view, click ‘create a launch.json file’. (If you do not see this file, the reason is a \`.vscode/launch.json\` file already exists). You should will be presented with a list of debuggers, among them various web browsers such as Edge and Chrome. Pick one of these web browsers as a debugger. (This example assumes you pick Edge since it, installed by default, will always be available). Once you select a debugger, a new JSON file will be created that will be ignored by \`.gitignore\`: \`.vscode/launch.json\`.

4. In this \`launch.json\` file you should see the \`webRoot\` property. By default, it will have the value \`\${workspaceFolder}\`. The problem with this value is that the debugger will look for the React app in the project root directory when, in actuality, the React app is located in the \`webpage\` directory. For this reason, update this value to \`\${workspaceFolder}/webpage\`.

5. By default, the value for the \`url\` property will be \`http://localhost:808,\` but the development server is configured to start on port 5173. Therefore, update the value of the \`url\` property to \`http://localhost:5173\`.

The final \`launch.json\` file should look as follows.

\`\`\`json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "msedge",
      "request": "launch",
      "name": "Launch Edge against localhost",
      "url": "http://localhost:5173",
      "webRoot": "\${workspaceFolder}/webpage"
    }
  ]
}
\`\`\`

6. Start the development server by following the [previous instructions](#contributing-to-webpage-as-a-developer). Once the local development server has started on \`http://localhost:5173/\`, press the green play button on the Run and Debug view (shortcut: F5) to start debugging. (Note that the development server must be running before you can start debugging).

[Back to top](#top)
`;var Ba={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rn=se.createContext&&se.createContext(Ba),Xi=["attr","size","title"];function Ji(e,t){if(e==null)return{};var n,s,r=$i(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $i(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function rt(){return rt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},rt.apply(null,arguments)}function On(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?On(Object(n),!0).forEach(function(s){Zi(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):On(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Zi(e,t,n){return(t=ec(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ec(e){var t=tc(e,"string");return typeof t=="symbol"?t:t+""}function tc(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ha(e){return e&&e.map((t,n)=>se.createElement(t.tag,ut({key:n},t.attr),Ha(t.child)))}function nc(e){return t=>se.createElement(ac,rt({attr:ut({},e.attr)},t),Ha(e.child))}function ac(e){var t=n=>{var{attr:s,size:r,title:u}=e,d=Ji(e,Xi),f=r||n.size||"1em",m;return n.className&&(m=n.className),e.className&&(m=(m?m+" ":"")+e.className),se.createElement("svg",rt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,d,{className:m,style:ut(ut({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&se.createElement("title",null,u),e.children)};return Rn!==void 0?se.createElement(Rn.Consumer,null,n=>t(n)):t(Ba)}function sc(e){return nc({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},child:[]}]})(e)}const rc=()=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"size-5 shrink-0 transition-colors text-[#78C4FF]",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"})}),uc=({title:e,slug:t,files:n})=>{const[s,r]=w.useState(!1),{slug:u}=Mn(),{hash:d}=ot(),f=u?.replace(/\d/g,"").split("-").join(" ").trim()===e?n.find(A=>`#${at(A.title)}`===d)?.title??e:null,m=f===e,E=A=>{A.preventDefault(),A.stopPropagation(),r(!s)};return l.jsxs("section",{className:"flex flex-col",children:[l.jsxs("div",{className:"group flex items-center justify-between py-2 px-4 hover:bg-white/5 rounded-md transition-all",children:[l.jsx("button",{onClick:E,className:"cursor-pointer mr-3 text-[#818181] hover:text-white transition-transform duration-200 flex items-center justify-center shrink-0",style:{transform:s?"rotate(0deg)":"rotate(-90deg)"},children:l.jsx(sc,{size:16,strokeWidth:100})}),l.jsx(Ct,{to:`/instructions/${t}`,onClick:()=>!s&&r(!0),className:`flex-1 font-fira text-xl truncate transition-colors ${m?"text-[#FF9C56]":"text-[#A9A9A9] group-hover:text-white"}`,style:{fontWeight:m?700:400},children:e})]}),s&&l.jsx("ul",{className:"list-none m-0 p-0 flex flex-col gap-1 mt-1 ml-4 border-l-[5px] border-white/10",children:n.map(A=>{if(A.title.toLowerCase()==="readme")return null;const x=A.title.toLowerCase()==="readme"?"":`#${at(A.title)}`,S=`/instructions/${t}${x}`,P=f===A.title;return l.jsx("li",{children:l.jsxs(Ct,{to:S,className:`
                    flex items-center gap-3 py-2 px-4 font-fira text-lg transition-all
                    ${P?"text-white bg-white/5":"text-[#A9A9A9] hover:text-white hover:bg-white/5"}
                  `,style:{fontWeight:P?700:400},children:[l.jsx(rc,{}),l.jsx("span",{className:"truncate",children:A.title})]})},`${t}-${A.title}`)})})]})},oc=()=>{const e=Ma();return l.jsxs("aside",{"aria-label":"Challenges",className:"h-full flex flex-col overflow-hidden bg-[#252526] border-r border-white/5",children:[l.jsx("div",{className:"p-6",children:l.jsx("h2",{className:"font-fira text-[#A9A9A9] text-2xl uppercase tracking-wider mb-8",children:"Challenges"})}),l.jsx("nav",{className:"overflow-y-auto overflow-x-hidden flex-1 px-4 pb-10 custom-scrollbar",children:l.jsxs("ul",{className:"flex flex-col gap-2 list-none p-0 m-0",children:[l.jsx("li",{className:"navlink",children:l.jsx(Ct,{to:G.SETUP.path,className:({isActive:t})=>`
                                block py-2 px-4 font-fira text-xl transition-colors
                                ${t?"text-white font-bold":"text-[#A9A9A9] hover:text-white"}
                            `,children:"Overview"})}),e.map(t=>l.jsx("li",{children:l.jsx(uc,{slug:t.slug,title:t.title,files:t.files})},t.slug))]})})]})};function ic(e,t){if(e)return t?.files.find(r=>`#${at(r.title)}`===e)?.markdown??"no markdown";const n=t?.files.find(r=>r.title.toLowerCase()==="readme")?.markdown;return n||(t?.files.find(r=>r.title.toLowerCase()==="instructions")?.markdown??"No instructions.md or README.md found for this challenge.")}const Ln=({color:e})=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:3,stroke:e,className:"size-10",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})}),Dn=({color:e})=>l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:3,stroke:e,className:"size-10",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})});function vn(){const e=Ma(),{slug:t}=Mn(),{hash:n}=ot(),s=Ya(),r=w.useMemo(()=>t?e.findIndex(E=>E.slug===t):-1,[e,t]),u=e.find(E=>E.slug===t),d=w.useMemo(()=>ic(n,u),[n,u]),f=r>0?e[r-1]:void 0,m=r>=0&&r<e.length-1?e[r+1]:void 0;return e.length===0?l.jsxs("div",{className:"page-container",children:[l.jsx("h1",{className:"text-4xl font-libre font-extrabold text-white",children:"Instructions"}),l.jsxs("p",{className:"text-gray font-fira text-2xl",children:["No docs found. Check the glob path in",l.jsx("code",{className:"text-blue bg-black-900 px-2 py-0.5 rounded",children:"useChallengeInstructions"}),"."]})]}):l.jsxs("div",{className:"grid h-screen overflow-hidden",style:{gridTemplateColumns:"280px 1fr"},children:[l.jsx(oc,{}),l.jsxs("section",{"aria-label":"Instructions",className:"overflow-y-auto h-full bg-black-800 px-10 py-8",children:[!t&&l.jsx(xn,{markdown:Ki}),t&&!u&&l.jsxs("div",{className:"page-container",children:[l.jsx("h1",{className:"text-4xl font-libre font-extrabold text-white",children:"Instructions"}),l.jsx("p",{className:"text-gray font-fira text-2xl",children:"Unknown challenge. Pick one from the list."})]}),u&&l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:"flex items-center justify-between gap-3 mb-8",children:[l.jsxs("button",{disabled:!f,onClick:()=>f&&s(`/instructions/${f.slug}`),className:`cursor-pointer flex items-center gap-2 shrink-0 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed`,style:{color:f?"#A9A9A9":"#474747"},children:[l.jsx(Ln,{color:f?"#A9A9A9":"#474747"}),"Previous"]}),l.jsx("h1",{className:"text-4xl font-libre font-extrabold text-white text-center flex-1 px-4",children:u.title}),l.jsxs("button",{disabled:!m,onClick:()=>m&&s(`/instructions/${m.slug}`),className:`cursor-pointer flex items-center gap-2 shrink-0 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed`,style:{color:"#A9A9A9"},children:["Next",l.jsx(Dn,{color:"#A9A9A9"})]})]}),l.jsx(xn,{markdown:d}),l.jsxs("footer",{className:"flex justify-between gap-3 mt-12 pt-6 border-t border-gray/20",children:[l.jsxs("button",{disabled:!f,onClick:()=>f&&s(`/instructions/${f.slug}`),className:`cursor-pointer flex items-center gap-2 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed`,style:{color:f?"#A9A9A9":"#474747"},children:[l.jsx(Ln,{color:f?"#A9A9A9":"#474747"}),"Previous"]}),l.jsxs("button",{disabled:!m,onClick:()=>m&&s(`/instructions/${m.slug}`),className:`cursor-pointer flex items-center gap-2 font-fira text-xl capitalize
                           disabled:opacity-30 disabled:cursor-not-allowed`,style:{color:"#A9A9A9"},children:["Next",l.jsx(Dn,{color:"#A9A9A9"})]})]})]})]})]})}function cc(){return l.jsx("footer",{id:"footer",className:"mt-auto px-4 py-4",children:l.jsx(W,{text:"Copyright © 2026"})})}const lc=()=>l.jsxs("div",{className:"w-full bg-black-700 flex justify-between items-center px-4 py-2",children:[l.jsx(Fn,{}),l.jsx(ne,{className:"font-mono font-semibold text-gray",text:`
        JavaScript Content
      `}),l.jsxs("div",{className:"flex gap-4 justify-between",children:[l.jsx("img",{src:re("sunshine.svg"),className:"h-6 aspect-square cursor-pointer",alt:"Theme"}),l.jsx("img",{src:re("help.svg"),className:"h-6 aspect-square cursor-pointer",alt:"Help"})]})]}),dc=()=>{const e=ot().pathname.split("/")[1]||"";return l.jsx("nav",{className:"w-full bg-black-800",children:l.jsx("ul",{className:"flex justify-evenly items-center flex-nowrap",children:[G.HOME,G.SETUP,G.INSTRUCTIONS,G.EXTRA_TASKS,G.HELP,G.CREDITS].map(({label:t,path:n})=>l.jsx("li",{className:"grow font-fira",children:l.jsx(vt,{to:n,className:`text-gray text-center text-md block py-2 px-4 hover:bg-black-900 cursor-pointer text-2xl ${e===n.split("/")[1]?"bg-black-900":""}`,children:l.jsx(W,{text:t})})},t))})})},hc=()=>{const e=ot().pathname.split("/")[1]||"home";return l.jsx("nav",{className:"bg-black-900 w-full text-white/20 px-4 py-2 text-2xl font-mono",children:`src > ${e.split(" ").join("-")}.html`})};function mc(){return l.jsxs("header",{id:"header",className:"flex flex-col",children:[l.jsx(lc,{}),l.jsx(dc,{}),l.jsx(hc,{})]})}function fc(){w.useEffect(()=>{document.body.classList.add("is-preload");const e=()=>{document.body.classList.remove("is-preload")};return document.readyState==="complete"?window.setTimeout(e,0):window.addEventListener("load",e,{once:!0}),()=>{window.removeEventListener("load",e),e()}},[])}const Ua=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();const pc=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const bc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());const kn=e=>{const t=bc(e);return t.charAt(0).toUpperCase()+t.slice(1)};var gc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ec=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const Tc=w.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:u,iconNode:d,...f},m)=>w.createElement("svg",{ref:m,...gc,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:Ua("lucide",r),...!u&&!Ec(f)&&{"aria-hidden":"true"},...f},[...d.map(([E,A])=>w.createElement(E,A)),...Array.isArray(u)?u:[u]]));const Fa=(e,t)=>{const n=w.forwardRef(({className:s,...r},u)=>w.createElement(Tc,{ref:u,iconNode:t,className:Ua(`lucide-${pc(kn(e))}`,`lucide-${e}`,s),...r}));return n.displayName=kn(e),n};const _c=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Ac=Fa("arrow-up",_c);const yc=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Nc=Fa("chevron-down",yc),Cc=300,Ic="opacity-100 cursor-pointer",xc="opacity-0 pointer-events-none",Sc=()=>{const[e,t]=w.useState(!1),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return w.useLayoutEffect(()=>{const s=()=>{t(window.scrollY>Cc)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),l.jsx("button",{onClick:n,className:`transition-all duration-500 fixed bottom-4 right-4 bg-blue text-black-700 font-bold rounded-full p-3 shadow-lg hover:bg-blue-hover ${e?Ic:xc}`,"aria-label":"Scroll to top",children:l.jsx(Ac,{})})},wc=()=>(fc(),l.jsxs("div",{className:"flex flex-col min-h-screen",children:[l.jsx(mc,{}),l.jsxs("main",{className:"bg-black-700 grow flex flex-col min-h-0",children:[l.jsx(Sc,{}),l.jsx(Wa,{})]}),l.jsx(cc,{})]})),Pn=({title:e,children:t,titleClass:n,contentClass:s})=>{const[r,u]=w.useState(!1);return l.jsxs("div",{className:"text-gray font-fira w-full flex flex-col grow",children:[l.jsxs("button",{onClick:()=>u(!r),className:`flex items-center gap-2 cursor-pointer hover:bg-black-900 px-4 py-2 text-center ${n}`,children:[e,l.jsx(Nc,{className:`inline-block transition-transform ${r?"rotate-180":""}`})]}),r&&l.jsx("div",{className:`mt-2 ${s}`,children:t})]})},Rc=[{title:"Software:",items:["Node.js (package manager)","Visual Studio Code (code editor)","Git (version control system)"]},{title:"Tools",items:["JavaScript (programming language)","GitHub (online code repository)","Terminal (command line interface)"]}],de={installation:{title:"Installation",id:"installation",content:[{title:"Installing NPM",info:"Install Node.js from the Company Portal. Node.js includes NPM (Node Package Manager), which we use to download and run everything this project needs.",moreInfo:"In Company Portal, install the approved Node.js package. After it installs, open a Command Terminal (NOT a Powershell) and run: node -v and npm -v to check that it has installed. If you get an error or it says the commands aren’t recognized, try restarting your terminal.",instructions:["- Go to the Company Portal app on your computer.","- Search for Node.js in the available software and click Install.","- After installation, open a Command Terminal and run node -v and npm -v to verify the installation."]},{title:"Installing VS Code",info:"Install Visual Studio Code from the Company Portal. VS Code is the editor you’ll use to open the project folder, follow instructions, and make changes.",moreInfo:"After installing, open VS Code and use File → Open Folder… to open the project. You won't have the project yet if you haven't completed the next step (cloning the repo).",instructions:["- Go to the Company Portal app on your computer.","- Search for Visual Studio Code in the available software and click Install.","- After installation, open VS Code and use File → Open Folder… to open the project folder (after you’ve cloned the repo in the next step)."]},{title:"Cloning the repository",info:"Download Git from the Company Portal if you don’t have it. Then clone the project repository from GitHub. This creates a local copy of the project on your machine that you can work with.",moreInfo:"In the GitHub repository, click the green Code button and copy the URL. In your Command Terminal, navigate to the folder where you want to put the project (e.g. Documents) and run: git clone [paste URL here]. This will create a new folder with the project files.",instructions:["- Go to the GitHub repository page.","- Click the green Code button and copy the URL.","- Open a Command Terminal and navigate to the folder where you want to put the project (e.g. Documents) using the cd command.","- Run git clone [paste URL here] to clone the repository to your local machine."]},{title:"Installing dependencies",info:"Install the project’s required packages (dependencies). This is a one-time setup step for each project copy.",moreInfo:"In your terminal, change into the project folder (the one that contains package.json) and run: npm install. The first install can take a few minutes. You can use the terminal in VS Code (Terminal → New Terminal) or your Command Terminal for this step. There are a few subdirectories in the project, but for now you only need to run npm install in the main project folder (not in any of the subdirectories).",instructions:["- Open a terminal (either Command Terminal or the terminal in VS Code).","- Change into the project folder using cd [project folder name]. This is the folder that contains package.json.","- Run npm install to install the required dependencies. This may take a few minutes."]}]},commonErrors:{title:"Common Errors",id:"common-errors",content:[{title:"Node/npm not recognized",info:"Consult Chester on the error",moreInfo:"Try restarting your terminal or computer first. If that doesn’t work, you may need to add Node.js to your system PATH manually. You can search online for instructions on how to do this for your operating system."},{title:"Jest not found",info:"Have you run npm install?",moreInfo:"Make sure you have changed directory into the same level that the package.json file is in before running npm install. If you have and it’s still not working, try deleting node_modules and package-lock.json and running npm install again."},{title:"Can't find script",info:"Make sure you are running the command in the correct directory",moreInfo:"Some commands need to be run in specific subdirectories. Check the instructions for the command you’re trying to run and make sure you’ve changed into the correct directory using cd [directory name]."}]},commands:{title:"Commands",id:"commands"}};function Oc(){return l.jsxs("div",{className:"page-container",children:[l.jsx(ne,{variant:"xl",text:"Getting Started",highlight:!0}),l.jsx(W,{text:"This is the guide to setting up your environment and getting started!"}),l.jsx(W,{text:"Below are buttons so you can skip to the necessary sections."}),l.jsx("ul",{className:"grid grid-flow-col auto-cols-fr gap-2 w-full max-md:grid-flow-row",children:Object.values(de).map(({title:e,id:t},n)=>{const s=n%2===0?"bg-blue":"bg-blue-accent",r=n%2===0?"hover:bg-blue-hover":"hover:bg-blue-accent-hover";return l.jsx("li",{className:`${s} ${r} px-8 py-2 rounded-full w-full`,children:l.jsx("a",{href:`#${t}`,children:l.jsx("button",{className:"cursor-pointer font-fira text-3xl w-full",children:l.jsx(W,{text:e,className:"text-black-800 font-bold"})})},t)})})}),l.jsx("div",{className:"grid max-md:grid-cols-1 grid-cols-2 rounded-4xl bg-black-800 w-full gap-4",children:Rc.map(({title:e,items:t})=>l.jsxs("div",{className:"p-6 space-y-2",children:[l.jsx(ne,{variant:"md",font:"fira",className:"font-medium",text:e,highlight:!0}),l.jsx("ul",{className:"space-y-2",children:t.map(n=>l.jsxs("li",{className:"flex items-center justify-start space-x-2",children:[l.jsx("img",{className:"h-8.5 block",src:re("bluetick.svg")}),l.jsx(W,{text:n,className:"text-left ml-2"})]},n))})]},e))}),l.jsxs("div",{id:de.installation.id,className:"mt-16 justify-items-center space-y-6 w-full",children:[l.jsx(ne,{variant:"xl",text:de.installation.title}),de.installation.content.map(({title:e,info:t,moreInfo:n,instructions:s},r)=>l.jsxs("section",{className:"bg-black-800 rounded-lg w-full text-white justify-center items-center flex flex-col py-4",children:[l.jsxs(ne,{as:"h2",noWrapper:!0,font:"fira",variant:"md",className:"flex relative items-center justify-center w-full font-fira mb-4",children:[l.jsxs("span",{className:"text-3xl text-orange absolute left-0 translate-x-1/2",children:[r+1,"."]})," ",l.jsx("span",{children:e})]}),l.jsx(W,{variant:"sm",text:t,className:"px-8"}),l.jsx("div",{className:"px-8 w-full",children:l.jsxs(Pn,{title:"More info",titleClass:"ml-auto",contentClass:" text-center",children:[l.jsx(W,{variant:"sm",text:n,className:"text-left mb-4"}),l.jsx("ul",{children:s?.map((u,d)=>l.jsx("li",{children:l.jsx(W,{variant:"sm",text:u,className:"text-left"})},d))})]})})]},e))]}),l.jsxs("div",{id:de.commonErrors.id,className:"mt-16 p-6 space-y-6 border-orange border-2 justify-items-center w-full bg-black-800 rounded-4xl",children:[l.jsxs(ne,{variant:"md",noWrapper:!0,font:"fira",className:"font-normal text-center relative w-full max-w-none",children:[l.jsx("img",{className:"max-h-8.5 text-orange absolute left-0 ",src:re("warning.svg"),alt:"!"})," ",l.jsx("span",{children:de.commonErrors.title})]}),l.jsx("ul",{className:"w-full space-y-6",children:de.commonErrors.content.map(({title:e,info:t,moreInfo:n})=>l.jsxs("li",{className:"border-l-3 px-4 border-orange flex flex-col",children:[l.jsx(ne,{as:"h3",className:"font-normal",variant:"md",font:"fira",text:e}),l.jsx(W,{variant:"sm",text:t,className:"ml-0 text-left"}),l.jsx(Pn,{title:"More info",titleClass:"ml-auto",contentClass:"",children:l.jsx(W,{variant:"sm",text:n,className:"text-left"})})]},e))})]})]})}function Lc(){return l.jsxs("div",{className:"flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-8 px-4",children:[l.jsxs("h1",{className:"text-7xl font-libre font-extrabold text-white",children:["404",l.jsx("span",{className:"block text-3xl text-blue mt-2",children:"Page Not Found"})]}),l.jsx("p",{className:"text-gray text-2xl font-fira max-w-md",children:"The page you are looking for does not exist."}),l.jsxs(vt,{to:G.HOME.path,className:"bg-blue px-10 py-3 rounded-4xl flex items-center justify-center",children:[l.jsx("span",{className:"text-black-700 font-bold font-fira text-2xl",children:"Back to Home"}),l.jsx("div",{className:"flex items-center pl-3 py-0 h-full",children:l.jsx("img",{src:re("arrow.svg"),className:"h-6 w-auto block text-black-700",alt:""})})]})]})}as(()=>ts(()=>import("./index-8nISElcg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),500);const Dc=Un.replace(/\/$/,""),vc=Ga([{path:"/",element:l.jsx(wc,{}),children:[{path:"/",element:l.jsx(Js,{})},{path:G.INSTRUCTIONS.path,element:l.jsx(vn,{})},{path:G.INSTRUCTION_DETAIL.path,element:l.jsx(vn,{})},{path:G.SETUP.path,element:l.jsx(Oc,{})},{path:"*",element:l.jsx(Lc,{})}]}],{basename:Dc}),ja=document.getElementById("root");if(!ja)throw new Error('Root element "#root" not found');za.createRoot(ja).render(l.jsx(qa,{router:vc}));export{Nc as C,Fa as c};

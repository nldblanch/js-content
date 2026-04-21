const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DjjwtZSp.js","assets/vendor-react-DM7UIT-J.js","assets/vendor-xterm-D5NOrwd8.js","assets/vendor-xterm-DDGTF8rc.css","assets/vendor-state-C5zgoKah.js","assets/vendor-git-DaC-y8e9.js","assets/vendor-prism-C33hAb-F.js","assets/vendor-markdown-CgETlZXk.js"])))=>i.map(i=>d[i]);
import{j as r,r as w,L as ke,R as Y,u as Ke,N as we,b as Se,d as wn,O as xn,e as jn,f as kn,h as Sn}from"./vendor-react-DM7UIT-J.js";import{P as Tn}from"./vendor-prism-C33hAb-F.js";import{M as Cn,r as Rn}from"./vendor-markdown-CgETlZXk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const In="modulepreload",En=function(e){return"/js-content/"+e},Oe={},An=function(n,t,s){let a=Promise.resolve();if(t&&t.length>0){let l=function(m){return Promise.all(m.map(f=>Promise.resolve(f).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),d=i?.nonce||i?.getAttribute("nonce");a=l(t.map(m=>{if(m=En(m),m in Oe)return;Oe[m]=!0;const f=m.endsWith(".css"),y=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const b=document.createElement("link");if(b.rel=f?"stylesheet":In,f||(b.as="script"),b.crossOrigin="",b.href=m,d&&b.setAttribute("nonce",d),document.head.appendChild(b),f)return new Promise((R,S)=>{b.addEventListener("load",R),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(i){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=i,window.dispatchEvent(d),!d.defaultPrevented)throw i}return a.then(i=>{for(const d of i||[])d.status==="rejected"&&o(d.reason);return n().catch(o)})},Qe="/js-content/",F=e=>`${Qe}${e}`,E={HOME:{label:"Home",path:"/"},INSTRUCTIONS:{label:"Guides",path:"/instructions"},INSTRUCTION_DETAIL:{path:"/instructions/:slug"},SETUP:{label:"Getting Started",path:"/setup"},EXTRA_TASKS:{label:"Extra Tasks",path:"/extra-tasks"},HELP:{label:"HELP!",path:"/help"},CREDITS:{label:"Credits",path:"/credits"}},Xe=()=>r.jsx("div",{className:"w-fit",children:r.jsx("div",{className:"flex justify-evenly gap-2",children:["bg-red-500","bg-yellow-500","bg-green-500"].map(e=>r.jsx("div",{className:`rounded-full aspect-square h-4 ${e}`},e))})}),Nn=({children:e,title:n,code:t})=>(w.useEffect(()=>{Tn.highlightAll()},[]),r.jsxs("div",{className:"rounded-3xl w-full",children:[r.jsxs("div",{className:"py-4 px-6 flex items-center gap-4 bg-black-800 rounded-t-3xl font-fira text-muted text-2xl",children:[r.jsx(Xe,{}),r.jsx("h2",{children:n})]}),r.jsxs("div",{className:"rounded-b-3xl py-4 px-6 bg-black-900 text-2xl!",children:[r.jsx("pre",{className:"prose prose-invert",children:r.jsx("code",{className:"language-js text-2xl!",children:t})}),e]})]})),_n=(e,n)=>{const t=new Array(e.length+n.length);for(let s=0;s<e.length;s++)t[s]=e[s];for(let s=0;s<n.length;s++)t[e.length+s]=n[s];return t},Mn=(e,n)=>({classGroupId:e,validator:n}),Ze=(e=new Map,n=null,t)=>({nextPart:e,validators:n,classGroupId:t}),ie="-",We=[],Dn="arbitrary..",On=e=>{const n=Hn(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return Wn(i);const d=i.split(ie),l=d[0]===""&&d.length>1?1:0;return en(d,l,n)},getConflictingClassGroupIds:(i,d)=>{if(d){const l=s[i],m=t[i];return l?m?_n(m,l):l:m||We}return t[i]||We}}},en=(e,n,t)=>{if(e.length-n===0)return t.classGroupId;const a=e[n],o=t.nextPart.get(a);if(o){const m=en(e,n+1,o);if(m)return m}const i=t.validators;if(i===null)return;const d=n===0?e.join(ie):e.slice(n).join(ie),l=i.length;for(let m=0;m<l;m++){const f=i[m];if(f.validator(d))return f.classGroupId}},Wn=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const n=e.slice(1,-1),t=n.indexOf(":"),s=n.slice(0,t);return s?Dn+s:void 0})(),Hn=e=>{const{theme:n,classGroups:t}=e;return Un(t,n)},Un=(e,n)=>{const t=Ze();for(const s in e){const a=e[s];Te(a,t,s,n)}return t},Te=(e,n,t,s)=>{const a=e.length;for(let o=0;o<a;o++){const i=e[o];Pn(i,n,t,s)}},Pn=(e,n,t,s)=>{if(typeof e=="string"){Bn(e,n,t);return}if(typeof e=="function"){Ln(e,n,t,s);return}Yn(e,n,t,s)},Bn=(e,n,t)=>{const s=e===""?n:nn(n,e);s.classGroupId=t},Ln=(e,n,t,s)=>{if(Fn(e)){Te(e(s),n,t,s);return}n.validators===null&&(n.validators=[]),n.validators.push(Mn(t,e))},Yn=(e,n,t,s)=>{const a=Object.entries(e),o=a.length;for(let i=0;i<o;i++){const[d,l]=a[i];Te(l,nn(n,d),t,s)}},nn=(e,n)=>{let t=e;const s=n.split(ie),a=s.length;for(let o=0;o<a;o++){const i=s[o];let d=t.nextPart.get(i);d||(d=Ze(),t.nextPart.set(i,d)),t=d}return t},Fn=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,zn=e=>{if(e<1)return{get:()=>{},set:()=>{}};let n=0,t=Object.create(null),s=Object.create(null);const a=(o,i)=>{t[o]=i,n++,n>e&&(n=0,s=t,t=Object.create(null))};return{get(o){let i=t[o];if(i!==void 0)return i;if((i=s[o])!==void 0)return a(o,i),i},set(o,i){o in t?t[o]=i:a(o,i)}}},xe="!",He=":",Gn=[],Ue=(e,n,t,s,a)=>({modifiers:e,hasImportantModifier:n,baseClassName:t,maybePostfixModifierPosition:s,isExternal:a}),$n=e=>{const{prefix:n,experimentalParseClassName:t}=e;let s=a=>{const o=[];let i=0,d=0,l=0,m;const f=a.length;for(let A=0;A<f;A++){const T=a[A];if(i===0&&d===0){if(T===He){o.push(a.slice(l,A)),l=A+1;continue}if(T==="/"){m=A;continue}}T==="["?i++:T==="]"?i--:T==="("?d++:T===")"&&d--}const y=o.length===0?a:a.slice(l);let b=y,R=!1;y.endsWith(xe)?(b=y.slice(0,-1),R=!0):y.startsWith(xe)&&(b=y.slice(1),R=!0);const S=m&&m>l?m-l:void 0;return Ue(o,R,b,S)};if(n){const a=n+He,o=s;s=i=>i.startsWith(a)?o(i.slice(a.length)):Ue(Gn,!1,i,void 0,!0)}if(t){const a=s;s=o=>t({className:o,parseClassName:a})}return s},Jn=e=>{const n=new Map;return e.orderSensitiveModifiers.forEach((t,s)=>{n.set(t,1e6+s)}),t=>{const s=[];let a=[];for(let o=0;o<t.length;o++){const i=t[o],d=i[0]==="[",l=n.has(i);d||l?(a.length>0&&(a.sort(),s.push(...a),a=[]),s.push(i)):a.push(i)}return a.length>0&&(a.sort(),s.push(...a)),s}},qn=e=>({cache:zn(e.cacheSize),parseClassName:$n(e),sortModifiers:Jn(e),...On(e)}),Vn=/\s+/,Kn=(e,n)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:a,sortModifiers:o}=n,i=[],d=e.trim().split(Vn);let l="";for(let m=d.length-1;m>=0;m-=1){const f=d[m],{isExternal:y,modifiers:b,hasImportantModifier:R,baseClassName:S,maybePostfixModifierPosition:A}=t(f);if(y){l=f+(l.length>0?" "+l:l);continue}let T=!!A,H=s(T?S.substring(0,A):S);if(!H){if(!T){l=f+(l.length>0?" "+l:l);continue}if(H=s(S),!H){l=f+(l.length>0?" "+l:l);continue}T=!1}const Z=b.length===0?"":b.length===1?b[0]:o(b).join(":"),V=R?Z+xe:Z,G=V+H;if(i.indexOf(G)>-1)continue;i.push(G);const $=a(H,T);for(let U=0;U<$.length;++U){const K=$[U];i.push(V+K)}l=f+(l.length>0?" "+l:l)}return l},Qn=(...e)=>{let n=0,t,s,a="";for(;n<e.length;)(t=e[n++])&&(s=tn(t))&&(a&&(a+=" "),a+=s);return a},tn=e=>{if(typeof e=="string")return e;let n,t="";for(let s=0;s<e.length;s++)e[s]&&(n=tn(e[s]))&&(t&&(t+=" "),t+=n);return t},Xn=(e,...n)=>{let t,s,a,o;const i=l=>{const m=n.reduce((f,y)=>y(f),e());return t=qn(m),s=t.cache.get,a=t.cache.set,o=d,d(l)},d=l=>{const m=s(l);if(m)return m;const f=Kn(l,t);return a(l,f),f};return o=i,(...l)=>o(Qn(...l))},Zn=[],v=e=>{const n=t=>t[e]||Zn;return n.isThemeGetter=!0,n},rn=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,sn=/^\((?:(\w[\w-]*):)?(.+)\)$/i,et=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,nt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,rt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,st=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,at=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>et.test(e),g=e=>!!e&&!Number.isNaN(Number(e)),D=e=>!!e&&Number.isInteger(Number(e)),fe=e=>e.endsWith("%")&&g(e.slice(0,-1)),_=e=>nt.test(e),an=()=>!0,ot=e=>tt.test(e)&&!rt.test(e),Ce=()=>!1,it=e=>st.test(e),lt=e=>at.test(e),ct=e=>!c(e)&&!u(e),ut=e=>W(e,cn,Ce),c=e=>rn.test(e),B=e=>W(e,un,ot),Pe=e=>W(e,yt,g),dt=e=>W(e,hn,an),ht=e=>W(e,dn,Ce),Be=e=>W(e,on,Ce),mt=e=>W(e,ln,lt),ae=e=>W(e,mn,it),u=e=>sn.test(e),Q=e=>z(e,un),pt=e=>z(e,dn),Le=e=>z(e,on),gt=e=>z(e,cn),ft=e=>z(e,ln),oe=e=>z(e,mn,!0),bt=e=>z(e,hn,!0),W=(e,n,t)=>{const s=rn.exec(e);return s?s[1]?n(s[1]):t(s[2]):!1},z=(e,n,t=!1)=>{const s=sn.exec(e);return s?s[1]?n(s[1]):t:!1},on=e=>e==="position"||e==="percentage",ln=e=>e==="image"||e==="url",cn=e=>e==="length"||e==="size"||e==="bg-size",un=e=>e==="length",yt=e=>e==="number",dn=e=>e==="family-name",hn=e=>e==="number"||e==="weight",mn=e=>e==="shadow",vt=()=>{const e=v("color"),n=v("font"),t=v("text"),s=v("font-weight"),a=v("tracking"),o=v("leading"),i=v("breakpoint"),d=v("container"),l=v("spacing"),m=v("radius"),f=v("shadow"),y=v("inset-shadow"),b=v("text-shadow"),R=v("drop-shadow"),S=v("blur"),A=v("perspective"),T=v("aspect"),H=v("ease"),Z=v("animate"),V=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...G(),u,c],U=()=>["auto","hidden","clip","visible","scroll"],K=()=>["auto","contain","none"],h=()=>[u,c,l],C=()=>[M,"full","auto",...h()],Re=()=>[D,"none","subgrid",u,c],Ie=()=>["auto",{span:["full",D,u,c]},D,u,c],ee=()=>[D,"auto",u,c],Ee=()=>["auto","min","max","fr",u,c],de=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],J=()=>["start","end","center","stretch","center-safe","end-safe"],N=()=>["auto",...h()],P=()=>[M,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...h()],he=()=>[M,"screen","full","dvw","lvw","svw","min","max","fit",...h()],me=()=>[M,"screen","full","lh","dvh","lvh","svh","min","max","fit",...h()],p=()=>[e,u,c],Ae=()=>[...G(),Le,Be,{position:[u,c]}],Ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],_e=()=>["auto","cover","contain",gt,ut,{size:[u,c]}],pe=()=>[fe,Q,B],j=()=>["","none","full",m,u,c],k=()=>["",g,Q,B],ne=()=>["solid","dashed","dotted","double"],Me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],x=()=>[g,fe,Le,Be],De=()=>["","none",S,u,c],te=()=>["none",g,u,c],re=()=>["none",g,u,c],ge=()=>[g,u,c],se=()=>[M,"full",...h()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[_],breakpoint:[_],color:[an],container:[_],"drop-shadow":[_],ease:["in","out","in-out"],font:[ct],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[_],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[_],shadow:[_],spacing:["px",g],text:[_],"text-shadow":[_],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",M,c,u,T]}],container:["container"],columns:[{columns:[g,c,u,d]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:K()}],"overscroll-x":[{"overscroll-x":K()}],"overscroll-y":[{"overscroll-y":K()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{"inset-s":C(),start:C()}],end:[{"inset-e":C(),end:C()}],"inset-bs":[{"inset-bs":C()}],"inset-be":[{"inset-be":C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[D,"auto",u,c]}],basis:[{basis:[M,"full","auto",d,...h()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[g,M,"auto","initial","none",c]}],grow:[{grow:["",g,u,c]}],shrink:[{shrink:["",g,u,c]}],order:[{order:[D,"first","last","none",u,c]}],"grid-cols":[{"grid-cols":Re()}],"col-start-end":[{col:Ie()}],"col-start":[{"col-start":ee()}],"col-end":[{"col-end":ee()}],"grid-rows":[{"grid-rows":Re()}],"row-start-end":[{row:Ie()}],"row-start":[{"row-start":ee()}],"row-end":[{"row-end":ee()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ee()}],"auto-rows":[{"auto-rows":Ee()}],gap:[{gap:h()}],"gap-x":[{"gap-x":h()}],"gap-y":[{"gap-y":h()}],"justify-content":[{justify:[...de(),"normal"]}],"justify-items":[{"justify-items":[...J(),"normal"]}],"justify-self":[{"justify-self":["auto",...J()]}],"align-content":[{content:["normal",...de()]}],"align-items":[{items:[...J(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...J(),{baseline:["","last"]}]}],"place-content":[{"place-content":de()}],"place-items":[{"place-items":[...J(),"baseline"]}],"place-self":[{"place-self":["auto",...J()]}],p:[{p:h()}],px:[{px:h()}],py:[{py:h()}],ps:[{ps:h()}],pe:[{pe:h()}],pbs:[{pbs:h()}],pbe:[{pbe:h()}],pt:[{pt:h()}],pr:[{pr:h()}],pb:[{pb:h()}],pl:[{pl:h()}],m:[{m:N()}],mx:[{mx:N()}],my:[{my:N()}],ms:[{ms:N()}],me:[{me:N()}],mbs:[{mbs:N()}],mbe:[{mbe:N()}],mt:[{mt:N()}],mr:[{mr:N()}],mb:[{mb:N()}],ml:[{ml:N()}],"space-x":[{"space-x":h()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":h()}],"space-y-reverse":["space-y-reverse"],size:[{size:P()}],"inline-size":[{inline:["auto",...he()]}],"min-inline-size":[{"min-inline":["auto",...he()]}],"max-inline-size":[{"max-inline":["none",...he()]}],"block-size":[{block:["auto",...me()]}],"min-block-size":[{"min-block":["auto",...me()]}],"max-block-size":[{"max-block":["none",...me()]}],w:[{w:[d,"screen",...P()]}],"min-w":[{"min-w":[d,"screen","none",...P()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[i]},...P()]}],h:[{h:["screen","lh",...P()]}],"min-h":[{"min-h":["screen","lh","none",...P()]}],"max-h":[{"max-h":["screen","lh",...P()]}],"font-size":[{text:["base",t,Q,B]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,bt,dt]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",fe,c]}],"font-family":[{font:[pt,ht,n]}],"font-features":[{"font-features":[c]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,u,c]}],"line-clamp":[{"line-clamp":[g,"none",u,Pe]}],leading:[{leading:[o,...h()]}],"list-image":[{"list-image":["none",u,c]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",u,c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:p()}],"text-color":[{text:p()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[g,"from-font","auto",u,B]}],"text-decoration-color":[{decoration:p()}],"underline-offset":[{"underline-offset":[g,"auto",u,c]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",u,c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",u,c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Ae()}],"bg-repeat":[{bg:Ne()}],"bg-size":[{bg:_e()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},D,u,c],radial:["",u,c],conic:[D,u,c]},ft,mt]}],"bg-color":[{bg:p()}],"gradient-from-pos":[{from:pe()}],"gradient-via-pos":[{via:pe()}],"gradient-to-pos":[{to:pe()}],"gradient-from":[{from:p()}],"gradient-via":[{via:p()}],"gradient-to":[{to:p()}],rounded:[{rounded:j()}],"rounded-s":[{"rounded-s":j()}],"rounded-e":[{"rounded-e":j()}],"rounded-t":[{"rounded-t":j()}],"rounded-r":[{"rounded-r":j()}],"rounded-b":[{"rounded-b":j()}],"rounded-l":[{"rounded-l":j()}],"rounded-ss":[{"rounded-ss":j()}],"rounded-se":[{"rounded-se":j()}],"rounded-ee":[{"rounded-ee":j()}],"rounded-es":[{"rounded-es":j()}],"rounded-tl":[{"rounded-tl":j()}],"rounded-tr":[{"rounded-tr":j()}],"rounded-br":[{"rounded-br":j()}],"rounded-bl":[{"rounded-bl":j()}],"border-w":[{border:k()}],"border-w-x":[{"border-x":k()}],"border-w-y":[{"border-y":k()}],"border-w-s":[{"border-s":k()}],"border-w-e":[{"border-e":k()}],"border-w-bs":[{"border-bs":k()}],"border-w-be":[{"border-be":k()}],"border-w-t":[{"border-t":k()}],"border-w-r":[{"border-r":k()}],"border-w-b":[{"border-b":k()}],"border-w-l":[{"border-l":k()}],"divide-x":[{"divide-x":k()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":k()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ne(),"hidden","none"]}],"divide-style":[{divide:[...ne(),"hidden","none"]}],"border-color":[{border:p()}],"border-color-x":[{"border-x":p()}],"border-color-y":[{"border-y":p()}],"border-color-s":[{"border-s":p()}],"border-color-e":[{"border-e":p()}],"border-color-bs":[{"border-bs":p()}],"border-color-be":[{"border-be":p()}],"border-color-t":[{"border-t":p()}],"border-color-r":[{"border-r":p()}],"border-color-b":[{"border-b":p()}],"border-color-l":[{"border-l":p()}],"divide-color":[{divide:p()}],"outline-style":[{outline:[...ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[g,u,c]}],"outline-w":[{outline:["",g,Q,B]}],"outline-color":[{outline:p()}],shadow:[{shadow:["","none",f,oe,ae]}],"shadow-color":[{shadow:p()}],"inset-shadow":[{"inset-shadow":["none",y,oe,ae]}],"inset-shadow-color":[{"inset-shadow":p()}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:p()}],"ring-offset-w":[{"ring-offset":[g,B]}],"ring-offset-color":[{"ring-offset":p()}],"inset-ring-w":[{"inset-ring":k()}],"inset-ring-color":[{"inset-ring":p()}],"text-shadow":[{"text-shadow":["none",b,oe,ae]}],"text-shadow-color":[{"text-shadow":p()}],opacity:[{opacity:[g,u,c]}],"mix-blend":[{"mix-blend":[...Me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[g]}],"mask-image-linear-from-pos":[{"mask-linear-from":x()}],"mask-image-linear-to-pos":[{"mask-linear-to":x()}],"mask-image-linear-from-color":[{"mask-linear-from":p()}],"mask-image-linear-to-color":[{"mask-linear-to":p()}],"mask-image-t-from-pos":[{"mask-t-from":x()}],"mask-image-t-to-pos":[{"mask-t-to":x()}],"mask-image-t-from-color":[{"mask-t-from":p()}],"mask-image-t-to-color":[{"mask-t-to":p()}],"mask-image-r-from-pos":[{"mask-r-from":x()}],"mask-image-r-to-pos":[{"mask-r-to":x()}],"mask-image-r-from-color":[{"mask-r-from":p()}],"mask-image-r-to-color":[{"mask-r-to":p()}],"mask-image-b-from-pos":[{"mask-b-from":x()}],"mask-image-b-to-pos":[{"mask-b-to":x()}],"mask-image-b-from-color":[{"mask-b-from":p()}],"mask-image-b-to-color":[{"mask-b-to":p()}],"mask-image-l-from-pos":[{"mask-l-from":x()}],"mask-image-l-to-pos":[{"mask-l-to":x()}],"mask-image-l-from-color":[{"mask-l-from":p()}],"mask-image-l-to-color":[{"mask-l-to":p()}],"mask-image-x-from-pos":[{"mask-x-from":x()}],"mask-image-x-to-pos":[{"mask-x-to":x()}],"mask-image-x-from-color":[{"mask-x-from":p()}],"mask-image-x-to-color":[{"mask-x-to":p()}],"mask-image-y-from-pos":[{"mask-y-from":x()}],"mask-image-y-to-pos":[{"mask-y-to":x()}],"mask-image-y-from-color":[{"mask-y-from":p()}],"mask-image-y-to-color":[{"mask-y-to":p()}],"mask-image-radial":[{"mask-radial":[u,c]}],"mask-image-radial-from-pos":[{"mask-radial-from":x()}],"mask-image-radial-to-pos":[{"mask-radial-to":x()}],"mask-image-radial-from-color":[{"mask-radial-from":p()}],"mask-image-radial-to-color":[{"mask-radial-to":p()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":G()}],"mask-image-conic-pos":[{"mask-conic":[g]}],"mask-image-conic-from-pos":[{"mask-conic-from":x()}],"mask-image-conic-to-pos":[{"mask-conic-to":x()}],"mask-image-conic-from-color":[{"mask-conic-from":p()}],"mask-image-conic-to-color":[{"mask-conic-to":p()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Ae()}],"mask-repeat":[{mask:Ne()}],"mask-size":[{mask:_e()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",u,c]}],filter:[{filter:["","none",u,c]}],blur:[{blur:De()}],brightness:[{brightness:[g,u,c]}],contrast:[{contrast:[g,u,c]}],"drop-shadow":[{"drop-shadow":["","none",R,oe,ae]}],"drop-shadow-color":[{"drop-shadow":p()}],grayscale:[{grayscale:["",g,u,c]}],"hue-rotate":[{"hue-rotate":[g,u,c]}],invert:[{invert:["",g,u,c]}],saturate:[{saturate:[g,u,c]}],sepia:[{sepia:["",g,u,c]}],"backdrop-filter":[{"backdrop-filter":["","none",u,c]}],"backdrop-blur":[{"backdrop-blur":De()}],"backdrop-brightness":[{"backdrop-brightness":[g,u,c]}],"backdrop-contrast":[{"backdrop-contrast":[g,u,c]}],"backdrop-grayscale":[{"backdrop-grayscale":["",g,u,c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[g,u,c]}],"backdrop-invert":[{"backdrop-invert":["",g,u,c]}],"backdrop-opacity":[{"backdrop-opacity":[g,u,c]}],"backdrop-saturate":[{"backdrop-saturate":[g,u,c]}],"backdrop-sepia":[{"backdrop-sepia":["",g,u,c]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":h()}],"border-spacing-x":[{"border-spacing-x":h()}],"border-spacing-y":[{"border-spacing-y":h()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",u,c]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[g,"initial",u,c]}],ease:[{ease:["linear","initial",H,u,c]}],delay:[{delay:[g,u,c]}],animate:[{animate:["none",Z,u,c]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,u,c]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:te()}],"rotate-x":[{"rotate-x":te()}],"rotate-y":[{"rotate-y":te()}],"rotate-z":[{"rotate-z":te()}],scale:[{scale:re()}],"scale-x":[{"scale-x":re()}],"scale-y":[{"scale-y":re()}],"scale-z":[{"scale-z":re()}],"scale-3d":["scale-3d"],skew:[{skew:ge()}],"skew-x":[{"skew-x":ge()}],"skew-y":[{"skew-y":ge()}],transform:[{transform:[u,c,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:se()}],"translate-x":[{"translate-x":se()}],"translate-y":[{"translate-y":se()}],"translate-z":[{"translate-z":se()}],"translate-none":["translate-none"],accent:[{accent:p()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:p()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",u,c]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mbs":[{"scroll-mbs":h()}],"scroll-mbe":[{"scroll-mbe":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pbs":[{"scroll-pbs":h()}],"scroll-pbe":[{"scroll-pbe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",u,c]}],fill:[{fill:["none",...p()]}],"stroke-w":[{stroke:[g,Q,B,Pe]}],stroke:[{stroke:["none",...p()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},X=Xn(vt),be="font-extrabold leading-tight text-white",ye={xxl:"text-[80px] leading-[80px]",xl:"text-[48px] leading-[50px]",lg:"text-[36px] leading-[40px]",md:"text-[24px] leading-[30px]",sm:"text-[19px] leading-[25px]"},ve={libre:"font-libre",fira:"font-fira"},wt=({word:e,underline:n})=>r.jsxs("span",{className:"relative inline-block text-blue",children:[e,n&&r.jsx(xt,{})]}),xt=()=>r.jsx("img",{src:F("underline.svg"),alt:"","aria-hidden":"true",className:"pointer-events-none absolute left-0 top-full block w-full select-none"}),O=({text:e,children:n,highlight:t,underline:s,variant:a="lg",as:o="h1",className:i,wrapperClassName:d,noWrapper:l,font:m="libre"})=>{const f=o,y=(()=>{if(n)return r.jsx(f,{className:X(be,ye[a],ve[m],i),children:n});const b=e??"",R=b.split(" "),S=R.pop();return S?r.jsxs(f,{className:X(be,ye[a],ve[m],i),children:[R.join(" ")," ",t?r.jsx(wt,{word:S,underline:s}):S]}):r.jsx(f,{className:X(be,ye[a],ve[m],i),children:b})})();return l?y:r.jsx("div",{className:X("flex flex-col grow-0 max-w-fit items-end justify-center",d),children:y})},jt="text-gray font-normal font-fira mx-auto text-center",kt={xl:"text-[27px] leading-[30px]",lg:"text-[24px] leading-[30px]",md:"text-[19px] leading-[25px]",sm:"text-[16px] leading-[20px]"},I=({text:e,variant:n="md",className:t})=>r.jsx("p",{className:X(jt,kt[n],t),children:e});function St(){const e="Your name here...",[n,t]=w.useState(e),[s,a]=w.useState(!1);return r.jsxs("div",{className:"page-container",children:[r.jsx(O,{variant:"xl",text:"Making JavaScript Easy",underline:!0,highlight:!0}),r.jsx(I,{text:"A comprehensive course designed for beginners to master JavaScript fundamentals through hands-on exercises."}),r.jsxs(ke,{to:E.SETUP.path,className:"bg-blue px-8 py-2 rounded-4xl max-h-68 flex items-center justify-center",children:[r.jsx("button",{className:"text-black-700 font-bold font-fira text-3xl",children:"Start Learning"}),r.jsx("div",{className:"p-4",children:r.jsx("img",{src:F("arrow.svg"),className:"inline-block h-8 text-black-700"})})]}),r.jsx("div",{className:"my-4 w-full",children:r.jsx(Nn,{title:"example.js",code:`function greetStudent(name) {
    const message = \`Welcome to the JavaScript course, \${name}!\`;
    console.log(message);
    return message;
  }
  
  // Try it yourself`,children:r.jsxs("div",{className:"space-y-2",children:[r.jsxs("form",{action:()=>{a(!0),console.log(`Welcome to the JavaScript course, ${n}!`)},className:"flex text-white font-fira items-center",children:[r.jsx("span",{className:"text-[#dcdcaa]",children:"greetStudent"}),r.jsx("span",{children:"("}),r.jsx("span",{className:"text-[#ce9178]",children:'"'}),r.jsx("input",{type:"text",placeholder:"",className:"text-[#ce9178] border-none outline-none",value:n,id:"auto",style:{width:`${Math.max(n.length,1)}ch`},onChange:o=>{t(o.currentTarget.value)},onBlur:o=>{o.currentTarget.value===""&&t(e)}}),r.jsx("span",{className:"text-[#ce9178]",children:'"'}),r.jsx("span",{children:");"})]}),s&&r.jsx("span",{className:"text-[#6a9955] font-fira",children:"// Check the console!"})]})})}),r.jsx("h2",{className:"text-white text-4xl font-libre",children:"Course Topics"}),r.jsx("p",{className:"text-gray text-2xl font-normal font-fira mx-auto",children:"The included exercises will teach you some of the following Skills."}),r.jsx("ul",{className:"text-gray w-full gap-x-10.5 gap-y-5.5 text-2xl font-normal font-fira mx-auto grid grid-cols-2",children:["Variables and Data Types","Functions","Problem Solving","Unit Testing","Modern JavaScript"].map(o=>r.jsxs("li",{className:"w-full bg-black-900 rounded-4xl px-6 py-8 space-x-6",children:[r.jsx("img",{src:F("tick.svg"),className:"inline-block h-12"}),r.jsx("span",{children:o})]},o))})]})}const le=e=>e.trim().toLowerCase().replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/_/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");function je(e){return e==null?"":typeof e=="string"||typeof e=="number"||typeof e=="boolean"?String(e):Array.isArray(e)?e.map(n=>je(n)).join(""):w.isValidElement(e)?je(e.props.children??null):""}function Tt(e){const n=e.split(`
`);let t=0;for(;t<n.length&&n[t].trim()==="";)t++;if(t<n.length&&/^#\s+/.test(n[t].trim())){for(t++;t<n.length&&n[t].trim()==="";)t++;return n.slice(t).join(`
`)}return e}const q=(e,n)=>{const t=je(e),s=le(t);return s?`${n??""}${s}`:void 0};function Ye({markdown:e,stripFirstH1:n,headingIdPrefix:t}){const s=w.useMemo(()=>n?Tt(e):e,[e,n]);return r.jsx("div",{className:"markdown",children:r.jsx(Cn,{remarkPlugins:[Rn],components:{h1:({children:a,...o})=>{const i=q(a,t);return r.jsx("h1",{id:i,...o,className:"text-4xl font-bold lineheight-1.25 mb-4",children:a})},h2:({children:a,...o})=>{const i=q(a,t);return r.jsx("h2",{id:i,...o,className:"text-3xl font-bold lineheight-1.25 mb-4",children:a})},h3:({children:a,...o})=>{const i=q(a,t);return r.jsx("h3",{id:i,...o,className:"text-2xl font-bold lineheight-1.25 mb-4",children:a})},h4:({children:a,...o})=>{const i=q(a,t);return r.jsx("h4",{id:i,...o,className:"text-xl font-semibold lineheight-1.25 mb-4",children:a})},h5:({children:a,...o})=>{const i=q(a,t);return r.jsx("h5",{id:i,...o,className:"text-lg font-semibold lineheight-1.25 mb-4",children:a})},h6:({children:a,...o})=>{const i=q(a,t);return r.jsx("h6",{id:i,...o,className:"text-base font-semibold lineheight-1.25 mb-4",children:a})},p:({children:a,...o})=>r.jsx("p",{...o,className:"mb-4 lineheight-1.5",children:a}),pre:({children:a,...o})=>r.jsx("pre",{...o,className:"bg-gray-100 p-4 rounded mb-4 overflow-x-auto",children:a}),code:({children:a,...o})=>r.jsx("code",{...o,className:"bg-gray-100 px-1 py-0.5 rounded",children:a}),ol:({children:a,...o})=>r.jsx("ol",{...o,className:"list-inside mb-4",children:a}),li:({children:a,...o})=>r.jsx("li",{...o,className:"mb-2",children:a})},children:s})})}const Ct=`# Temperature Converter 

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
`,Rt=`# Test-Driven Development (TDD) Guide

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
`,It=`# Function Documentation

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
\`\`\``,Et=`# Step-by-Step Instructions

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
`,At="",Nt=`# Dog Age Calculator

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
`,_t=`# Function Documentation

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
\`\`\``,Mt="# Step-by-Step Instructions\n\nThis function is slightly more complex and we will need to consider some edge cases. We will start with basic functionality and gradually address the different scenarios. You will find it beneficial to run `jest` in `watch mode`, so run the watch script to see it run the tests everytime you save.\n\n## 1. Basic Functionality\n\nRemove the first `.skip` from the `describe` block. \n\nNow let's address the first two years of a dog’s life count:\n\n```javascript\nconst earlyYears = 2 * 10.5;\n```\n\nEach following year should represent 4 years. We need to account for the 2 years we already calculated:\n\n```javascript\nconst laterYears = (humanYears - 2) * 4;\n```\n\nFinally, we need to return the total value:\n\n```javascript\nreturn earlyYears + laterYears;\n```\n\n## 2. Advanced Cases\n\nRemove the second `.skip`. If you save, you'll notice that the tests start failing. Consider the first case:\n\n- `humanYears` is 1, so we expect the return to be `10.5`\n- The function calculates `2 * 10.5` for `earlyYears`\n- It then calculates `humanYears - 2` (-1) multiplied by 4\n- Finally, it returns `21 - 4` which is why the received value is `17`\n\nWe can easily address this with an `early return`. This is where we return from a function so that later functionality is not executed. Since every human year up until 2 is worth 10.5, we can ignore the later years when the human age does not exceed 2.\n\n```javascript\nif (humanYears <= 2) return humanYears * 10.5;\n```\n\n_**Note** I'm using a shorthand in the `if statement` to avoid opening curly braces and writing on a new line. There are many shorthands you can learn that are very useful._\n\n## 3. Edge Cases\n\nRemove the third `.skip`. At this point, the first two tests should in fact pass, however, we're not dealing with negative numbers. When the received parameter is less than zero, we should be returning 0.\n\n```javascript\nif (humanYears <= 0) return 0;\n```\n\n## 4. Input Validation\nRemove the final `.skip`. What we're trying to ensure is that this function always returns a number. If the user provides `undefined`, `null`, or in fact, anything that is not a number, we want to return 0:\n\n```javascript\nif (humanYears <= 0) return 0;\nif (typeof humanYears !== 'number') return 0;\n```\n\nWe still get one failing test! Let's try to debug what's happening.\n\n```javascript\nconsole.log(humanYears <= 0);\nconsole.log(typeof humanYears !== 'number');\n```\n\nNow we can't tell which test corresponds to our console log. The test that is failing is the very last one. Try adding `.only` to only run the last test.\n\n```javascript\ntest.only('returns 0 for an NaN input', () => {\n    expect(calculateDogAge(NaN)).toBe(0);\n});\n```\n\nNow our `console logs` should show:\n\n```bash\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:4:13)\n```\n\nThe input is `NaN`, which is not less than or equal to 0, but it _is a number._ It's just a number that doesn't exist. It's a `falsey` value in JavaScript, just like `null`, `undefined`, `0`, `''`, and a few others. So if you console log this:\n\n```javascript\nconsole.log(!humanYears);\n```\n\nYou should expect to see\n\n```bash\nconsole.log\n    true\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n```\n\nTherefore, we can check to see if the value is falsey, since all numbers are truthy value:\n\n```javascript\nif (!humanYears) return 0;\n```\n\nWe can actually combine these if statements into one single catchall:\n\n```javascript\nif (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n```\n\nRemeber to remove the `.only` to run the rest of the tests, and you should see them all pass!\n\n### Solution\n\n<details>\n  <summary>Reveal</summary>\n\n```javascript\nfunction calculateDogAge(humanYears) {\n    if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n\n    if (humanYears <= 2) return humanYears * 10.5;\n        \n    const earlyYears = 2 * 10.5;\n    const laterYears = (humanYears - 2) * 4;\n    return earlyYears + laterYears;\n}\n```\n</details>\n",Dt="",Ot=`# Magic 8 Ball

## Objective

Create a Magic 8 Ball in JavaScript that generates a random answer. If you wish to write your own responses, you will need to change the \`validResponses\` array in the test suite to reflect your responses.

## Learning Goals

- Work with JavaScript switch/case statements
- Practice functional programming
- Learn the ternary operator
`,Wt=`# Function Documentation

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
\`\`\``,Ht=`# Step-by-Step Instructions

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

`,Ut=`# Race Day

## Objective

Create a race registration system that assigns race numbers and start times based on runner's age and registration time.

## Learning Goals

- Begin to use JavaScript objects
- Practice handling multiple conditions`,Pt=`
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
\`\`\``,Bt=`# Step-by-Step Instructions

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

</details>`,Lt=`# Rock Paper Scissors

## Objective

Create a console-based Rock Paper Scissors game that accepts user input, generates a computer choice, determines a winner, and logs the results. The implementation should be modular and testable.

## Learning Goals

- Write small, testable JavaScript functions
- Use control flow (if/else, switch) to implement game logic
- Practice input validation and edge-case handling (e.g., cheat codes)

## Notes

- The \`playGame\` function has already been written for you.
- When you have the tests passing, try running the command \`npm run play\`.
`,Yt=`
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
\`\`\``,Ft=`# Step-by-Step Instructions

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

Enjoy!`,zt=`# Sleep Calculator

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
`,Gt=`# Arrow Functions

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
- ECMAScript 2015 (ES6) specification notes`,$t=`
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
\`\`\``,Jt=`# Step-by-Step Instructions

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

</details>`,qt="# Coded Message\n\n## Before You Start\n\nThis challenge introduces **Object-Oriented Programming (OOP)** in JavaScript. You'll learn about classes, methods, and the `this` keyword while working with array methods. If you're new to OOP, the instructions file provides detailed explanations of each concept.\n\n## Objective\n\nBuild a `MessageDecoder` class that transforms an encoded array of strings using various array methods to reveal a hidden message about programming. Master OOP principles while practicing array manipulation techniques.\n\n## Learning Goals\n\n- Understand JavaScript classes and constructors\n- Practice array methods (`.pop()`, `.push()`, `.shift()`, `.unshift()`, `.splice()`, `.join()`)\n- Learn method chaining with `this`\n- Work with instance methods and encapsulation\n- Understand the difference between mutating and non-mutating methods\n\n## Note\n\nThe `revealSecretMessage()` method has already been written for you. Your task is to implement the individual methods it depends on. Once all methods are correctly implemented, the secret message will be revealed!\n\nYou can check your progress at any time:\n```bash\nnpm test\n```",Vt=`
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
- **\`.indexOf()\`** - Finds the index of an element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))`,Kt=`# Step-by-Step Instructions

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
`,Qt=`#  Whale Talk

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
`,Xt=`# Function Documentation

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
`,Zt=`# Step-by-Step Instructions

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
`;function er(e){const n=e.replace(/\\/g,"/");return n.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/)?.[1]??n.split("/").slice(-2,-1)[0]??"unknown"}function nr(e){const n=e.match(/^(\d+)\b/);return n?Number(n[1]):Number.MAX_SAFE_INTEGER}function tr(e){return e.replace(/\\/g,"/").split("/").slice(-1)[0]??"unknown.md"}const Fe=e=>e.replace(/\.md$/i,"").replace(/\d+/g,"").replace(/[-_]+/g," ").trim(),ze={"instructions.md":0,"readme.md":1,"function_documentation.md":2,"function-documentation.md":2,"extra_guide.md":3,"extra-guide.md":3,"solution.md":4};function rr(e,n){const t=e.toLowerCase(),s=n.toLowerCase(),a=ze[t]??100,o=ze[s]??100;return a-o||t.localeCompare(s)}const sr={glob(){return Object.assign({"../../../../../docs/1-temperature-converter/README.md":Ct,"../../../../../docs/1-temperature-converter/TDD-guide.md":Rt,"../../../../../docs/1-temperature-converter/function-documentation.md":It,"../../../../../docs/1-temperature-converter/instructions.md":Et,"../../../../../docs/1-temperature-converter/solution.md":At,"../../../../../docs/2-dog-age-calculator/README.md":Nt,"../../../../../docs/2-dog-age-calculator/function-documentation.md":_t,"../../../../../docs/2-dog-age-calculator/instructions.md":Mt,"../../../../../docs/2-dog-age-calculator/solution.md":Dt,"../../../../../docs/3-magic-eight-ball/README.md":Ot,"../../../../../docs/3-magic-eight-ball/function-documentation.md":Wt,"../../../../../docs/3-magic-eight-ball/instructions.md":Ht,"../../../../../docs/4-race-day/README.md":Ut,"../../../../../docs/4-race-day/function-documentation.md":Pt,"../../../../../docs/4-race-day/instructions.md":Bt,"../../../../../docs/5-rock-paper-scissors/README.md":Lt,"../../../../../docs/5-rock-paper-scissors/function-documentation.md":Yt,"../../../../../docs/5-rock-paper-scissors/instructions.md":Ft,"../../../../../docs/6-sleep-calculator/README.md":zt,"../../../../../docs/6-sleep-calculator/arrow-functions.md":Gt,"../../../../../docs/6-sleep-calculator/function-documentation.md":$t,"../../../../../docs/6-sleep-calculator/instructions.md":Jt,"../../../../../docs/7-coded-message/README.md":qt,"../../../../../docs/7-coded-message/class-documentation.md":Vt,"../../../../../docs/7-coded-message/instructions.md":Kt,"../../../../../docs/8-whale-talk/README.md":Qt,"../../../../../docs/8-whale-talk/function-documentation.md":Xt,"../../../../../docs/8-whale-talk/instructions.md":Zt})}};function ar(e){const n=new Map;for(const[s,a]of Object.entries(e)){const o=er(s),i=tr(s),d={fileName:i,title:Fe(i),markdown:a},l=n.get(o);l?l.push(d):n.set(o,[d])}const t=Array.from(n.entries()).map(([s,a])=>{const o=[...a].sort((i,d)=>rr(i.fileName,d.fileName));return{slug:s,title:Fe(s),order:nr(s),files:o.map(i=>({title:i.title,markdown:i.markdown}))}});return t.sort((s,a)=>s.order-a.order||s.title.localeCompare(a.title)),t}function pn(){return w.useMemo(()=>{const e=sr.glob();return ar(e)},[])}const or=`<a id="top"></a>
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
9. **[Choose the Correct Iterator](9.%20Choose%20the%20Correct%20Iterator/)*** - Practice with array methods
10. **[Grammar Checker](10.%20Grammar%20Checker/)**** - Check and fix grammar
11. **[Menu Maker](11.%20Menu%20Maker/)**** - Create dynamic menus
12. **[Team Sports](12.%20Team%20Sports/)**** - Manage team rosters

<br />

_*This challenge is still in the Proof of Concept stage. There may be problems or inconsistencies._

_**These challenges have not been migrated to the new format yet. Please refer to the pdf_instructions._

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
\`\`\`bash
npm run dev
\`\`\`
Local development server should start on \`http://localhost:5173/\`

4. Run tests and see code coverage
\`\`\`bash
npm run coverage
\`\`\`
Code coverage will be outputted to \`webpage/coverage/\` directory.

[Back to top](#top)

### Debug webpage in VSCode

**For a more detailed guide, see [Microsoft’s official documentation on debugging React]( https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)**

*Note that, as a complement to debugging in VSCode, the [React Developer Tools browser extension](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil) is recommended. The component view, for example, allows you to interact with the component tree while viewing the React app as it is rendered to the browser.*

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
            "webRoot": "\${workspaceFolder}/webpage",

        }
    ]
}
\`\`\`

6. Start the development server by following the [previous instructions](#contributing-to-webpage-as-a-developer). Once the local development server has started on \`http://localhost:5173/\`, press the green play button on the Run and Debug view (shortcut: F5) to start debugging. (Note that the development server must be running before you can start debugging).

[Back to top](#top)
`;var gn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ge=Y.createContext&&Y.createContext(gn),ir=["attr","size","title"];function lr(e,n){if(e==null)return{};var t,s,a=cr(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function cr(e,n){if(e==null)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.indexOf(s)!==-1)continue;t[s]=e[s]}return t}function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)({}).hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ce.apply(null,arguments)}function $e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?$e(Object(t),!0).forEach(function(s){ur(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$e(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}function ur(e,n,t){return(n=dr(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dr(e){var n=hr(e,"string");return typeof n=="symbol"?n:n+""}function hr(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var s=t.call(e,n);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function fn(e){return e&&e.map((n,t)=>Y.createElement(n.tag,ue({key:t},n.attr),fn(n.child)))}function mr(e){return n=>Y.createElement(pr,ce({attr:ue({},e.attr)},n),fn(e.child))}function pr(e){var n=t=>{var{attr:s,size:a,title:o}=e,i=lr(e,ir),d=a||t.size||"1em",l;return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),Y.createElement("svg",ce({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,i,{className:l,style:ue(ue({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&Y.createElement("title",null,o),e.children)};return Ge!==void 0?Y.createElement(Ge.Consumer,null,t=>n(t)):n(gn)}function gr(e){return mr({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},child:[]}]})(e)}const fr=({title:e,slug:n,files:t})=>{const[s,a]=w.useState(!1),{slug:o}=Ke(),i=o?.replace(/\d/g,"").split("-").join(" ").trim()===e?t.find(l=>`#${le(l.title)}`===window.location.hash)?.title??e:null,d=l=>{l.stopPropagation(),a(!s)};return r.jsxs("section",{children:[r.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"baseline"},className:"navlink",children:[r.jsx(we,{to:`/instructions/${n}`,onClick:()=>{s||a(!0)},style:{fontWeight:i===e?700:400,textDecoration:"none",flex:"1 1 auto",border:"none",paddingLeft:8},children:e}),r.jsx("button",{style:{border:"none",outline:"none",boxShadow:"none",background:"none",padding:0,margin:"0 8px 0 0",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1,height:"1em",width:"1em",verticalAlign:"baseline"},onClick:d,children:r.jsx("span",{style:{transform:s?"rotate(180deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s"},children:r.jsx(gr,{})})})]}),s&&r.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:12},children:t.map(l=>{if(l.title.toLowerCase()==="readme")return null;const m=l.title.toLowerCase()==="readme"?"":`#${le(l.title)}`,f=`/instructions/${n}${m}`;return r.jsx("li",{style:{padding:0},className:"navlink accordion-link",children:r.jsx(we,{to:f,style:{fontWeight:i===l.title?700:400,textDecoration:"none",opacity:.9,border:"none",paddingLeft:24},children:l.title})},`${n}-${l.title}`)})})]})},br=()=>{const e=pn();return r.jsx("aside",{"aria-label":"Challenges",style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:r.jsx("nav",{style:{overflowY:"auto",overflowX:"hidden",minHeight:0,flex:"1 1 auto",paddingRight:16},children:r.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,gap:12,display:"flex",flexDirection:"column",fontSize:18},children:[r.jsx("li",{className:"navlink",children:r.jsx(we,{to:E.SETUP.path,style:({isActive:n})=>({fontWeight:n?700:400,textDecoration:"none"}),children:"Overview"})}),e.map(n=>r.jsx("li",{style:{padding:0,margin:0},children:r.jsx(fr,{slug:n.slug,title:n.title,files:n.files})},n.slug))]})})})};function yr(e,n){if(e)return n?.files.find(a=>`#${le(a.title)}`===e)?.markdown??"no markdown";const t=n?.files.find(a=>a.title.toLowerCase()==="readme")?.markdown;return t||(n?.files.find(a=>a.title.toLowerCase()==="instructions")?.markdown??"No instructions.md or README.md found for this challenge.")}function Je(){const e=pn(),{slug:n}=Ke(),{hash:t}=Se(),s=wn(),a=w.useMemo(()=>n?e.findIndex(m=>m.slug===n):-1,[e,n]),o=e.find(m=>m.slug===n),i=w.useMemo(()=>yr(t,o),[t,o]),d=a>0?e[a-1]:void 0,l=a>=0&&a<e.length-1?e[a+1]:void 0;return e.length===0?r.jsxs("div",{className:"inner",children:[r.jsx("h1",{children:"Instructions"}),r.jsxs("p",{children:["No docs markdown found. Check the glob path in ",r.jsx("code",{children:"useChallengeInstructions"}),"."]})]}):r.jsxs("div",{id:"main",style:{display:"grid",height:"100vh",gridTemplateColumns:"280px 1fr",gap:24},children:[r.jsx(br,{}),r.jsxs("section",{"aria-label":"Instructions",style:{overflow:"auto",height:"100%"},children:[!n&&r.jsx(Ye,{markdown:or}),n&&!o&&r.jsxs(r.Fragment,{children:[r.jsx("h1",{style:{marginTop:0},children:"Instructions"}),r.jsx("p",{children:"Unknown challenge. Pick one from the list."})]}),o&&r.jsxs(r.Fragment,{children:[r.jsx("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:r.jsxs("div",{style:{display:"flex",gap:8},children:[r.jsx("button",{disabled:!d,onClick:()=>d&&s(`/instructions/${d.slug}`),children:"Prev"}),r.jsx("button",{disabled:!l,onClick:()=>l&&s(`/instructions/${l.slug}`),children:"Next"})]})}),r.jsx(Ye,{markdown:i})]})]})]})}function vr(){return r.jsx("footer",{id:"footer",className:"mt-auto px-4 py-4",children:r.jsx(I,{text:"Copyright © 2026"})})}const wr=()=>r.jsxs("div",{className:"w-full bg-black-700 flex justify-between items-center px-4 py-2",children:[r.jsx(Xe,{}),r.jsx(O,{className:"font-mono font-semibold text-gray",text:"JavaScript Content"}),r.jsxs("div",{className:"flex gap-4 justify-between",children:[r.jsx("img",{src:F("sunshine.svg"),className:"h-6 aspect-square",alt:"Theme"}),r.jsx("img",{src:F("help.svg"),className:"h-6 aspect-square",alt:"Help"})]})]}),xr=()=>{const e=Se().pathname.split("/")[1]||"";return r.jsx("nav",{className:"w-full bg-black-800",children:r.jsx("ul",{className:"flex justify-evenly items-center flex-nowrap",children:[E.HOME,E.SETUP,E.INSTRUCTIONS,E.EXTRA_TASKS,E.HELP,E.CREDITS].map(({label:n,path:t})=>r.jsx("li",{className:"grow font-fira",children:r.jsx(ke,{to:t,className:`text-gray text-center text-md block py-2 px-4 hover:bg-black-900 cursor-pointer text-2xl ${e===t.split("/")[1]?"bg-black-900":""}`,children:r.jsx(I,{text:n})})},n))})})},jr=()=>{const e=Se().pathname.split("/")[1]||"home";return r.jsx("nav",{className:"bg-black-900 w-full text-white/20 px-4 py-2 text-2xl font-mono",children:`src > ${e.split(" ").join("-")}.html`})};function kr(){return r.jsxs("header",{id:"header",className:"flex flex-col",children:[r.jsx(wr,{}),r.jsx(xr,{}),r.jsx(jr,{})]})}function Sr(){w.useEffect(()=>{document.body.classList.add("is-preload");const e=()=>{document.body.classList.remove("is-preload")};return document.readyState==="complete"?window.setTimeout(e,0):window.addEventListener("load",e,{once:!0}),()=>{window.removeEventListener("load",e),e()}},[])}const bn=(...e)=>e.filter((n,t,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===t).join(" ").trim();const Tr=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Cr=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,s)=>s?s.toUpperCase():t.toLowerCase());const qe=e=>{const n=Cr(e);return n.charAt(0).toUpperCase()+n.slice(1)};var Rr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ir=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Er=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:o,iconNode:i,...d},l)=>w.createElement("svg",{ref:l,...Rr,width:n,height:n,stroke:e,strokeWidth:s?Number(t)*24/Number(n):t,className:bn("lucide",a),...!o&&!Ir(d)&&{"aria-hidden":"true"},...d},[...i.map(([m,f])=>w.createElement(m,f)),...Array.isArray(o)?o:[o]]));const yn=(e,n)=>{const t=w.forwardRef(({className:s,...a},o)=>w.createElement(Er,{ref:o,iconNode:n,className:bn(`lucide-${Tr(qe(e))}`,`lucide-${e}`,s),...a}));return t.displayName=qe(e),t};const Ar=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Nr=yn("arrow-up",Ar);const _r=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mr=yn("chevron-down",_r),Dr=300,Or="opacity-100 cursor-pointer",Wr="opacity-0 pointer-events-none",Hr=()=>{const[e,n]=w.useState(!1),t=()=>{window.scrollTo({top:0,behavior:"smooth"})};return w.useLayoutEffect(()=>{const s=()=>{n(window.scrollY>Dr)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),r.jsx("button",{onClick:t,className:`transition-all duration-500 fixed bottom-4 right-4 bg-blue text-black-700 font-bold rounded-full p-3 shadow-lg hover:bg-blue-hover ${e?Or:Wr}`,"aria-label":"Scroll to top",children:r.jsx(Nr,{})})},Ur=()=>(Sr(),r.jsxs("div",{className:"flex flex-col min-h-screen",children:[r.jsx(kr,{}),r.jsxs("main",{className:"bg-black-700 grow flex flex-col min-h-0",children:[r.jsx(Hr,{}),r.jsx(xn,{})]}),r.jsx(vr,{})]})),Ve=({title:e,children:n,titleClass:t,contentClass:s})=>{const[a,o]=w.useState(!1);return r.jsxs("div",{className:"text-gray font-fira w-full flex flex-col grow",children:[r.jsxs("button",{onClick:()=>o(!a),className:`flex items-center gap-2 cursor-pointer hover:bg-black-900 px-4 py-2 text-center ${t}`,children:[e,r.jsx(Mr,{className:`inline-block transition-transform ${a?"rotate-180":""}`})]}),a&&r.jsx("div",{className:`mt-2 ${s}`,children:n})]})},Pr=[{title:"Software:",items:["Node.js (package manager)","Visual Studio Code (code editor)","Git (version control system)"]},{title:"Tools",items:["JavaScript (programming language)","GitHub (online code repository)","Terminal (command line interface)"]}],L={installation:{title:"Installation",id:"installation",content:[{title:"Installing NPM",info:"Install Node.js from the Company Portal. Node.js includes NPM (Node Package Manager), which we use to download and run everything this project needs.",moreInfo:"In Company Portal, install the approved Node.js package. After it installs, open a Command Terminal (NOT a Powershell) and run: node -v and npm -v to check that it has installed. If you get an error or it says the commands aren’t recognized, try restarting your terminal.",instructions:["- Go to the Company Portal app on your computer.","- Search for Node.js in the available software and click Install.","- After installation, open a Command Terminal and run node -v and npm -v to verify the installation."]},{title:"Installing VS Code",info:"Install Visual Studio Code from the Company Portal. VS Code is the editor you’ll use to open the project folder, follow instructions, and make changes.",moreInfo:"After installing, open VS Code and use File → Open Folder… to open the project. You won't have the project yet if you haven't completed the next step (cloning the repo).",instructions:["- Go to the Company Portal app on your computer.","- Search for Visual Studio Code in the available software and click Install.","- After installation, open VS Code and use File → Open Folder… to open the project folder (after you’ve cloned the repo in the next step)."]},{title:"Cloning the repository",info:"Download Git from the Company Portal if you don’t have it. Then clone the project repository from GitHub. This creates a local copy of the project on your machine that you can work with.",moreInfo:"In the GitHub repository, click the green Code button and copy the URL. In your Command Terminal, navigate to the folder where you want to put the project (e.g. Documents) and run: git clone [paste URL here]. This will create a new folder with the project files.",instructions:["- Go to the GitHub repository page.","- Click the green Code button and copy the URL.","- Open a Command Terminal and navigate to the folder where you want to put the project (e.g. Documents) using the cd command.","- Run git clone [paste URL here] to clone the repository to your local machine."]},{title:"Installing dependencies",info:"Install the project’s required packages (dependencies). This is a one-time setup step for each project copy.",moreInfo:"In your terminal, change into the project folder (the one that contains package.json) and run: npm install. The first install can take a few minutes. You can use the terminal in VS Code (Terminal → New Terminal) or your Command Terminal for this step. There are a few subdirectories in the project, but for now you only need to run npm install in the main project folder (not in any of the subdirectories).",instructions:["- Open a terminal (either Command Terminal or the terminal in VS Code).","- Change into the project folder using cd [project folder name]. This is the folder that contains package.json.","- Run npm install to install the required dependencies. This may take a few minutes."]}]},commonErrors:{title:"Common Errors",id:"common-errors",content:[{title:"Node/npm not recognized",info:"Consult Chester on the error",moreInfo:"Try restarting your terminal or computer first. If that doesn’t work, you may need to add Node.js to your system PATH manually. You can search online for instructions on how to do this for your operating system."},{title:"Jest not found",info:"Have you run npm install?",moreInfo:"Make sure you have changed directory into the same level that the package.json file is in before running npm install. If you have and it’s still not working, try deleting node_modules and package-lock.json and running npm install again."},{title:"Can't find script",info:"Make sure you are running the command in the correct directory",moreInfo:"Some commands need to be run in specific subdirectories. Check the instructions for the command you’re trying to run and make sure you’ve changed into the correct directory using cd [directory name]."}]},commands:{title:"Commands",id:"commands"}};function Br(){return r.jsxs("div",{className:"page-container",children:[r.jsx(O,{variant:"xl",text:"Getting Started",highlight:!0}),r.jsx(I,{text:"This is the guide to setting up your environment and getting started!"}),r.jsx(I,{text:"Below are buttons so you can skip to the necessary sections."}),r.jsx("ul",{className:"grid grid-flow-col auto-cols-fr gap-2 w-full max-md:grid-flow-row",children:Object.values(L).map(({title:e,id:n},t)=>{const s=t%2===0?"bg-blue":"bg-blue-accent",a=t%2===0?"hover:bg-blue-hover":"hover:bg-blue-accent-hover";return r.jsx("li",{className:`${s} ${a} px-8 py-2 rounded-full w-full`,children:r.jsx("a",{href:`#${n}`,children:r.jsx("button",{className:"cursor-pointer font-fira text-3xl w-full",children:r.jsx(I,{text:e,className:"text-black-800 font-bold"})})},n)})})}),r.jsx("div",{className:"grid max-md:grid-cols-1 grid-cols-2 rounded-4xl bg-black-800 w-full gap-4",children:Pr.map(({title:e,items:n})=>r.jsxs("div",{className:"p-6 space-y-2",children:[r.jsx(O,{variant:"md",font:"fira",className:"font-medium",text:e,highlight:!0}),r.jsx("ul",{className:"space-y-2",children:n.map(t=>r.jsxs("li",{className:"flex items-center justify-start space-x-2",children:[r.jsx("img",{className:"h-8.5 block",src:F("bluetick.svg")}),r.jsx(I,{text:t,className:"text-left ml-2"})]},t))})]},e))}),r.jsxs("div",{id:L.installation.id,className:"mt-16 justify-items-center space-y-6 w-full",children:[r.jsx(O,{variant:"xl",text:L.installation.title}),L.installation.content.map(({title:e,info:n,moreInfo:t,instructions:s},a)=>r.jsxs("section",{className:"bg-black-800 rounded-lg w-full text-white justify-center items-center flex flex-col py-4",children:[r.jsxs(O,{as:"h2",noWrapper:!0,font:"fira",variant:"md",className:"flex relative items-center justify-center w-full font-fira mb-4",children:[r.jsxs("span",{className:"text-3xl text-orange absolute left-0 translate-x-1/2",children:[a+1,"."]})," ",r.jsx("span",{children:e})]}),r.jsx(I,{variant:"sm",text:n,className:"px-8"}),r.jsx("div",{className:"px-8 w-full",children:r.jsxs(Ve,{title:"More info",titleClass:"ml-auto",contentClass:" text-center",children:[r.jsx(I,{variant:"sm",text:t,className:"text-left mb-4"}),r.jsx("ul",{children:s?.map((o,i)=>r.jsx("li",{children:r.jsx(I,{variant:"sm",text:o,className:"text-left"})},i))})]})})]},e))]}),r.jsxs("div",{id:L.commonErrors.id,className:"mt-16 p-6 space-y-6 border-orange border-2 justify-items-center w-full bg-black-800 rounded-4xl",children:[r.jsxs(O,{variant:"md",noWrapper:!0,font:"fira",className:"font-normal text-center relative w-full max-w-none",children:[r.jsx("img",{className:"max-h-8.5 text-orange absolute left-0 ",src:F("warning.svg"),alt:"!"})," ",r.jsx("span",{children:L.commonErrors.title})]}),r.jsx("ul",{className:"w-full space-y-6",children:L.commonErrors.content.map(({title:e,info:n,moreInfo:t})=>r.jsxs("li",{className:"border-l-3 px-4 border-orange flex flex-col",children:[r.jsx(O,{as:"h3",className:"font-normal",variant:"md",font:"fira",text:e}),r.jsx(I,{variant:"sm",text:n,className:"ml-0 text-left"}),r.jsx(Ve,{title:"More info",titleClass:"ml-auto",contentClass:"",children:r.jsx(I,{variant:"sm",text:t,className:"text-left"})})]},e))})]})]})}const Lr=e=>new Promise(n=>setTimeout(n,e));function Yr(e,n){return w.lazy(()=>Promise.all([e(),Lr(n)]).then(([t])=>t))}Yr(()=>An(()=>import("./index-DjjwtZSp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),500);const Fr=Qe.replace(/\/$/,""),zr=jn([{path:"/",element:r.jsx(Ur,{}),children:[{path:"/",element:r.jsx(St,{})},{path:E.INSTRUCTIONS.path,element:r.jsx(Je,{})},{path:E.INSTRUCTION_DETAIL.path,element:r.jsx(Je,{})},{path:E.SETUP.path,element:r.jsx(Br,{})},{path:"*",element:r.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-4",children:[r.jsx("h1",{children:"404 Not Found"}),r.jsx("p",{children:"The page you are looking for does not exist."}),r.jsx(ke,{to:E.HOME.path,children:"Go back to Home"})]})}]}],{basename:Fr}),vn=document.getElementById("root");if(!vn)throw new Error('Root element "#root" not found');kn.createRoot(vn).render(r.jsx(Sn,{router:zr}));export{Mr as C,yn as c};

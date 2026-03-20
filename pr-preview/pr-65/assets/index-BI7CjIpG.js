function k1(t,r){for(var l=0;l<r.length;l++){const u=r[l];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in t)){const s=Object.getOwnPropertyDescriptor(u,o);s&&Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();var $p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ro(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gc={exports:{}},yi={};var Kp;function A1(){if(Kp)return yi;Kp=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(u,o,s){var c=null;if(s!==void 0&&(c=""+s),o.key!==void 0&&(c=""+o.key),"key"in o){s={};for(var d in o)d!=="key"&&(s[d]=o[d])}else s=o;return o=s.ref,{$$typeof:t,type:u,key:c,ref:o!==void 0?o:null,props:s}}return yi.Fragment=r,yi.jsx=l,yi.jsxs=l,yi}var Wp;function C1(){return Wp||(Wp=1,Gc.exports=A1()),Gc.exports}var W=C1(),Vc={exports:{}},vi={},Xc={exports:{}},Qc={};var eg;function R1(){return eg||(eg=1,(function(t){function r(H,re){var le=H.length;H.push(re);e:for(;0<le;){var ye=le-1>>>1,A=H[ye];if(0<o(A,re))H[ye]=re,H[le]=A,le=ye;else break e}}function l(H){return H.length===0?null:H[0]}function u(H){if(H.length===0)return null;var re=H[0],le=H.pop();if(le!==re){H[0]=le;e:for(var ye=0,A=H.length,M=A>>>1;ye<M;){var X=2*(ye+1)-1,S=H[X],oe=X+1,ge=H[oe];if(0>o(S,le))oe<A&&0>o(ge,S)?(H[ye]=ge,H[oe]=le,ye=oe):(H[ye]=S,H[X]=le,ye=X);else if(oe<A&&0>o(ge,le))H[ye]=ge,H[oe]=le,ye=oe;else break e}}return re}function o(H,re){var le=H.sortIndex-re.sortIndex;return le!==0?le:H.id-re.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,g=null,x=3,b=!1,k=!1,O=!1,j=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function q(H){for(var re=l(m);re!==null;){if(re.callback===null)u(m);else if(re.startTime<=H)u(m),re.sortIndex=re.expirationTime,r(p,re);else break;re=l(m)}}function I(H){if(O=!1,q(H),!k)if(l(p)!==null)k=!0,z||(z=!0,ie());else{var re=l(m);re!==null&&ae(I,re.startTime-H)}}var z=!1,C=-1,$=5,Z=-1;function L(){return j?!0:!(t.unstable_now()-Z<$)}function ne(){if(j=!1,z){var H=t.unstable_now();Z=H;var re=!0;try{e:{k=!1,O&&(O=!1,E(C),C=-1),b=!0;var le=x;try{t:{for(q(H),g=l(p);g!==null&&!(g.expirationTime>H&&L());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,x=g.priorityLevel;var A=ye(g.expirationTime<=H);if(H=t.unstable_now(),typeof A=="function"){g.callback=A,q(H),re=!0;break t}g===l(p)&&u(p),q(H)}else u(p);g=l(p)}if(g!==null)re=!0;else{var M=l(m);M!==null&&ae(I,M.startTime-H),re=!1}}break e}finally{g=null,x=le,b=!1}re=void 0}}finally{re?ie():z=!1}}}var ie;if(typeof T=="function")ie=function(){T(ne)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,he=Ae.port2;Ae.port1.onmessage=ne,ie=function(){he.postMessage(null)}}else ie=function(){R(ne,0)};function ae(H,re){C=R(function(){H(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(H){switch(x){case 1:case 2:case 3:var re=3;break;default:re=x}var le=x;x=re;try{return H()}finally{x=le}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(H,re){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=x;x=H;try{return re()}finally{x=le}},t.unstable_scheduleCallback=function(H,re,le){var ye=t.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ye+le:ye):le=ye,H){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=le+A,H={id:y++,callback:re,priorityLevel:H,startTime:le,expirationTime:A,sortIndex:-1},le>ye?(H.sortIndex=le,r(m,H),l(p)===null&&H===l(m)&&(O?(E(C),C=-1):O=!0,ae(I,le-ye))):(H.sortIndex=A,r(p,H),k||b||(k=!0,z||(z=!0,ie()))),H},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(H){var re=x;return function(){var le=x;x=re;try{return H.apply(this,arguments)}finally{x=le}}}})(Qc)),Qc}var tg;function D1(){return tg||(tg=1,Xc.exports=R1()),Xc.exports}var Pc={exports:{}},Me={};var ng;function _1(){if(ng)return Me;ng=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,j={};function R(M,X,S){this.props=M,this.context=X,this.refs=j,this.updater=S||k}R.prototype.isReactComponent={},R.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},R.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function E(){}E.prototype=R.prototype;function T(M,X,S){this.props=M,this.context=X,this.refs=j,this.updater=S||k}var q=T.prototype=new E;q.constructor=T,O(q,R.prototype),q.isPureReactComponent=!0;var I=Array.isArray;function z(){}var C={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function Z(M,X,S){var oe=S.ref;return{$$typeof:t,type:M,key:X,ref:oe!==void 0?oe:null,props:S}}function L(M,X){return Z(M.type,X,M.props)}function ne(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function ie(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(S){return X[S]})}var Ae=/\/+/g;function he(M,X){return typeof M=="object"&&M!==null&&M.key!=null?ie(""+M.key):X.toString(36)}function ae(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(z,z):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function H(M,X,S,oe,ge){var ve=typeof M;(ve==="undefined"||ve==="boolean")&&(M=null);var ze=!1;if(M===null)ze=!0;else switch(ve){case"bigint":case"string":case"number":ze=!0;break;case"object":switch(M.$$typeof){case t:case r:ze=!0;break;case y:return ze=M._init,H(ze(M._payload),X,S,oe,ge)}}if(ze)return ge=ge(M),ze=oe===""?"."+he(M,0):oe,I(ge)?(S="",ze!=null&&(S=ze.replace(Ae,"$&/")+"/"),H(ge,X,S,"",function(Mt){return Mt})):ge!=null&&(ne(ge)&&(ge=L(ge,S+(ge.key==null||M&&M.key===ge.key?"":(""+ge.key).replace(Ae,"$&/")+"/")+ze)),X.push(ge)),1;ze=0;var Qe=oe===""?".":oe+":";if(I(M))for(var Je=0;Je<M.length;Je++)oe=M[Je],ve=Qe+he(oe,Je),ze+=H(oe,X,S,ve,ge);else if(Je=b(M),typeof Je=="function")for(M=Je.call(M),Je=0;!(oe=M.next()).done;)oe=oe.value,ve=Qe+he(oe,Je++),ze+=H(oe,X,S,ve,ge);else if(ve==="object"){if(typeof M.then=="function")return H(ae(M),X,S,oe,ge);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ze}function re(M,X,S){if(M==null)return M;var oe=[],ge=0;return H(M,oe,"","",function(ve){return X.call(S,ve,ge++)}),oe}function le(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(S){(M._status===0||M._status===-1)&&(M._status=1,M._result=S)},function(S){(M._status===0||M._status===-1)&&(M._status=2,M._result=S)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var ye=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},A={map:re,forEach:function(M,X,S){re(M,function(){X.apply(this,arguments)},S)},count:function(M){var X=0;return re(M,function(){X++}),X},toArray:function(M){return re(M,function(X){return X})||[]},only:function(M){if(!ne(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return Me.Activity=g,Me.Children=A,Me.Component=R,Me.Fragment=l,Me.Profiler=o,Me.PureComponent=T,Me.StrictMode=u,Me.Suspense=p,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,Me.__COMPILER_RUNTIME={__proto__:null,c:function(M){return C.H.useMemoCache(M)}},Me.cache=function(M){return function(){return M.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(M,X,S){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=O({},M.props),ge=M.key;if(X!=null)for(ve in X.key!==void 0&&(ge=""+X.key),X)!$.call(X,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&X.ref===void 0||(oe[ve]=X[ve]);var ve=arguments.length-2;if(ve===1)oe.children=S;else if(1<ve){for(var ze=Array(ve),Qe=0;Qe<ve;Qe++)ze[Qe]=arguments[Qe+2];oe.children=ze}return Z(M.type,ge,oe)},Me.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:s,_context:M},M},Me.createElement=function(M,X,S){var oe,ge={},ve=null;if(X!=null)for(oe in X.key!==void 0&&(ve=""+X.key),X)$.call(X,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ge[oe]=X[oe]);var ze=arguments.length-2;if(ze===1)ge.children=S;else if(1<ze){for(var Qe=Array(ze),Je=0;Je<ze;Je++)Qe[Je]=arguments[Je+2];ge.children=Qe}if(M&&M.defaultProps)for(oe in ze=M.defaultProps,ze)ge[oe]===void 0&&(ge[oe]=ze[oe]);return Z(M,ve,ge)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(M){return{$$typeof:d,render:M}},Me.isValidElement=ne,Me.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:le}},Me.memo=function(M,X){return{$$typeof:m,type:M,compare:X===void 0?null:X}},Me.startTransition=function(M){var X=C.T,S={};C.T=S;try{var oe=M(),ge=C.S;ge!==null&&ge(S,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(z,ye)}catch(ve){ye(ve)}finally{X!==null&&S.types!==null&&(X.types=S.types),C.T=X}},Me.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},Me.use=function(M){return C.H.use(M)},Me.useActionState=function(M,X,S){return C.H.useActionState(M,X,S)},Me.useCallback=function(M,X){return C.H.useCallback(M,X)},Me.useContext=function(M){return C.H.useContext(M)},Me.useDebugValue=function(){},Me.useDeferredValue=function(M,X){return C.H.useDeferredValue(M,X)},Me.useEffect=function(M,X){return C.H.useEffect(M,X)},Me.useEffectEvent=function(M){return C.H.useEffectEvent(M)},Me.useId=function(){return C.H.useId()},Me.useImperativeHandle=function(M,X,S){return C.H.useImperativeHandle(M,X,S)},Me.useInsertionEffect=function(M,X){return C.H.useInsertionEffect(M,X)},Me.useLayoutEffect=function(M,X){return C.H.useLayoutEffect(M,X)},Me.useMemo=function(M,X){return C.H.useMemo(M,X)},Me.useOptimistic=function(M,X){return C.H.useOptimistic(M,X)},Me.useReducer=function(M,X,S){return C.H.useReducer(M,X,S)},Me.useRef=function(M){return C.H.useRef(M)},Me.useState=function(M){return C.H.useState(M)},Me.useSyncExternalStore=function(M,X,S){return C.H.useSyncExternalStore(M,X,S)},Me.useTransition=function(){return C.H.useTransition()},Me.version="19.2.3",Me}var ag;function Uf(){return ag||(ag=1,Pc.exports=_1()),Pc.exports}var Zc={exports:{}},It={};var rg;function z1(){if(rg)return It;rg=1;var t=Uf();function r(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(p,m,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:y}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,It.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return s(p,m,null,y)},It.flushSync=function(p){var m=c.T,y=u.p;try{if(c.T=null,u.p=2,p)return p()}finally{c.T=m,u.p=y,u.d.f()}},It.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(p,m))},It.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},It.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,g=d(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?u.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:b}):y==="script"&&u.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},It.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);u.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(p)},It.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,g=d(y,m.crossOrigin);u.d.L(p,y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},It.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);u.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(p)},It.requestFormReset=function(p){u.d.r(p)},It.unstable_batchedUpdates=function(p,m){return p(m)},It.useFormState=function(p,m,y){return c.H.useFormState(p,m,y)},It.useFormStatus=function(){return c.H.useHostTransitionStatus()},It.version="19.2.3",It}var lg;function M1(){if(lg)return Zc.exports;lg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Zc.exports=z1(),Zc.exports}var ig;function O1(){if(ig)return vi;ig=1;var t=D1(),r=Uf(),l=M1();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(s(e)!==e)throw Error(u(188))}function m(e){var n=e.alternate;if(!n){if(n=s(e),n===null)throw Error(u(188));return n!==e?null:e}for(var a=e,i=n;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(i=f.return,i!==null){a=i;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return p(f),e;if(h===i)return p(f),n;h=h.sibling}throw Error(u(188))}if(a.return!==i.return)a=f,i=h;else{for(var v=!1,w=f.child;w;){if(w===a){v=!0,a=f,i=h;break}if(w===i){v=!0,i=f,a=h;break}w=w.sibling}if(!v){for(w=h.child;w;){if(w===a){v=!0,a=h,i=f;break}if(w===i){v=!0,i=h,a=f;break}w=w.sibling}if(!v)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),T=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case R:return"Profiler";case j:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case T:return e.displayName||"Context";case E:return(e._context.displayName||"Context")+".Consumer";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var ae=Array.isArray,H=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ye=[],A=-1;function M(e){return{current:e}}function X(e){0>A||(e.current=ye[A],ye[A]=null,A--)}function S(e,n){A++,ye[A]=e.current,e.current=n}var oe=M(null),ge=M(null),ve=M(null),ze=M(null);function Qe(e,n){switch(S(ve,n),S(ge,e),S(oe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?xp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=xp(n),e=wp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(oe),S(oe,e)}function Je(){X(oe),X(ge),X(ve)}function Mt(e){e.memoizedState!==null&&S(ze,e);var n=oe.current,a=wp(n,e.type);n!==a&&(S(ge,e),S(oe,a))}function qt(e){ge.current===e&&(X(oe),X(ge)),ze.current===e&&(X(ze),di._currentValue=le)}var dt,Qt;function wn(e){if(dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);dt=n&&n[1]||"",Qt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+e+Qt}var ka=!1;function $t(e,n){if(!e||ka)return"";ka=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(P){var G=P}Reflect.construct(e,[],te)}else{try{te.call()}catch(P){G=P}e.call(te.prototype)}}else{try{throw Error()}catch(P){G=P}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(P){if(P&&G&&typeof P.stack=="string")return[P.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),v=h[0],w=h[1];if(v&&w){var _=v.split(`
`),Y=w.split(`
`);for(f=i=0;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;for(;f<Y.length&&!Y[f].includes("DetermineComponentFrameRoot");)f++;if(i===_.length||f===Y.length)for(i=_.length-1,f=Y.length-1;1<=i&&0<=f&&_[i]!==Y[f];)f--;for(;1<=i&&0<=f;i--,f--)if(_[i]!==Y[f]){if(i!==1||f!==1)do if(i--,f--,0>f||_[i]!==Y[f]){var J=`
`+_[i].replace(" at new "," at ");return e.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",e.displayName)),J}while(1<=i&&0<=f);break}}}finally{ka=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wn(a):""}function Nr(e,n){switch(e.tag){case 26:case 27:case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return e.child!==n&&n!==null?wn("Suspense Fallback"):wn("Suspense");case 19:return wn("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return wn("Activity");default:return""}}function Lr(e){try{var n="",a=null;do n+=Nr(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ea=Object.prototype.hasOwnProperty,Aa=t.unstable_scheduleCallback,ir=t.unstable_cancelCallback,Cl=t.unstable_shouldYield,Rl=t.unstable_requestPaint,gt=t.unstable_now,ta=t.unstable_getCurrentPriorityLevel,K=t.unstable_ImmediatePriority,ce=t.unstable_UserBlockingPriority,Ee=t.unstable_NormalPriority,_e=t.unstable_LowPriority,$e=t.unstable_IdlePriority,Pt=t.log,on=t.unstable_setDisableYieldValue,Nt=null,nt=null;function Lt(e){if(typeof Pt=="function"&&on(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Nt,e)}catch{}}var tt=Math.clz32?Math.clz32:Qi,Ln=Math.log,sn=Math.LN2;function Qi(e){return e>>>=0,e===0?32:31-(Ln(e)/sn|0)|0}var na=256,ur=262144,Ca=4194304;function aa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function or(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var f=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=i&134217727;return w!==0?(i=w&~h,i!==0?f=aa(i):(v&=w,v!==0?f=aa(v):a||(a=w&~e,a!==0&&(f=aa(a))))):(w=i&~h,w!==0?f=aa(w):v!==0?f=aa(v):a||(a=i&~e,a!==0&&(f=aa(a)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:f}function sr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pi(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(){var e=Ca;return Ca<<=1,(Ca&62914560)===0&&(Ca=4194304),e}function Ra(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Da(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Uo(e,n,a,i,f,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,_=e.expirationTimes,Y=e.hiddenUpdates;for(a=v&~a;0<a;){var J=31-tt(a),te=1<<J;w[J]=0,_[J]=-1;var G=Y[J];if(G!==null)for(Y[J]=null,J=0;J<G.length;J++){var P=G[J];P!==null&&(P.lane&=-536870913)}a&=~te}i!==0&&Zi(e,i,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function Zi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-tt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function D(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-tt(a),f=1<<i;f&n|e[i]&n&&(e[i]|=n),a&=~f}}function B(e,n){var a=n&-n;return a=(a&42)!==0?1:Q(a),(a&(e.suspendedLanes|n))!==0?0:a}function Q(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ue(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fe(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Gp(e.type))}function Se(e,n){var a=re.p;try{return re.p=e,n()}finally{re.p=a}}var me=Math.random().toString(36).slice(2),de="__reactFiber$"+me,pe="__reactProps$"+me,we="__reactContainer$"+me,Ce="__reactEvents$"+me,Te="__reactListeners$"+me,Pe="__reactHandles$"+me,qe="__reactResources$"+me,yt="__reactMarker$"+me;function vt(e){delete e[de],delete e[pe],delete e[Ce],delete e[Te],delete e[Pe]}function bt(e){var n=e[de];if(n)return n;for(var a=e.parentNode;a;){if(n=a[we]||a[de]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Rp(e);e!==null;){if(a=e[de])return a;e=Rp(e)}return n}e=a,a=e.parentNode}return null}function Ie(e){if(e=e[de]||e[we]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Kt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mt(e){e[yt]=!0}var Un=new Set,cn={};function Hn(e,n){Sn(e,n),Sn(e+"Capture",n)}function Sn(e,n){for(cn[e]=n,e=0;e<n.length;e++)Un.add(n[e])}var ra=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},hr={};function Ge(e){return ea.call(hr,e)?!0:ea.call(fr,e)?!1:ra.test(e)?hr[e]=!0:(fr[e]=!0,!1)}function St(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bn(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ut(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ji(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var f=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dl(e){if(!e._valueTracker){var n=dr(e)?"checked":"value";e._valueTracker=Ji(e,n,""+e[n])}}function dh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=dr(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bb=/[\n"\\]/g;function En(e){return e.replace(bb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ho(e,n,a,i,f,h,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ve(n)):e.value!==""+Ve(n)&&(e.value=""+Ve(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Bo(e,v,Ve(n)):a!=null?Bo(e,v,Ve(a)):i!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Ve(w):e.removeAttribute("name")}function mh(e,n,a,i,f,h,v,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Dl(e);return}a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}i=i??f,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=w?e.checked:!!i,e.defaultChecked=!!i,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Dl(e)}function Bo(e,n,a){n==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ur(e,n,a,i){if(e=e.options,n){n={};for(var f=0;f<a.length;f++)n["$"+a[f]]=!0;for(a=0;a<e.length;a++)f=n.hasOwnProperty("$"+e[a].value),e[a].selected!==f&&(e[a].selected=f),f&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,f=0;f<e.length;f++){if(e[f].value===a){e[f].selected=!0,i&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function ph(e,n,a){if(n!=null&&(n=""+Ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ve(a):""}function gh(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(u(92));if(ae(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Ve(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Dl(e)}function Hr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var xb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yh(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||xb.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function vh(e,n,a){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var f in n)i=n[f],n.hasOwnProperty(f)&&a[f]!==i&&yh(e,f,i)}else for(var h in n)n.hasOwnProperty(h)&&yh(e,h,n[h])}function Fo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ki(e){return Sb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function la(){}var Yo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Fr=null;function bh(e){var n=Ie(e);if(n&&(e=n.stateNode)){var a=e[pe]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ho(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var f=i[pe]||null;if(!f)throw Error(u(90));Ho(i,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&dh(i)}break e;case"textarea":ph(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ur(e,!!a.multiple,n,!1)}}}var Io=!1;function xh(e,n,a){if(Io)return e(n,a);Io=!0;try{var i=e(n);return i}finally{if(Io=!1,(Br!==null||Fr!==null)&&(Bu(),Br&&(n=Br,e=Fr,Fr=Br=null,bh(n),e)))for(n=0;n<e.length;n++)bh(e[n])}}function _l(e,n){var a=e.stateNode;if(a===null)return null;var i=a[pe]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(ia)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){Go=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{Go=!1}var _a=null,Vo=null,Wi=null;function wh(){if(Wi)return Wi;var e,n=Vo,a=n.length,i,f="value"in _a?_a.value:_a.textContent,h=f.length;for(e=0;e<a&&n[e]===f[e];e++);var v=a-e;for(i=1;i<=v&&n[a-i]===f[h-i];i++);return Wi=f.slice(e,1<i?1-i:void 0)}function eu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function Sh(){return!1}function Wt(e){function n(a,i,f,h,v){this._reactName=a,this._targetInst=f,this.type=i,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?tu:Sh,this.isPropagationStopped=Sh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=Wt(mr),Ml=g({},mr,{view:0,detail:0}),Eb=Wt(Ml),Xo,Qo,Ol,au=g({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ol&&(Ol&&e.type==="mousemove"?(Xo=e.screenX-Ol.screenX,Qo=e.screenY-Ol.screenY):Qo=Xo=0,Ol=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),Eh=Wt(au),Tb=g({},au,{dataTransfer:0}),kb=Wt(Tb),Ab=g({},Ml,{relatedTarget:0}),Po=Wt(Ab),Cb=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=Wt(Cb),Db=g({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_b=Wt(Db),zb=g({},mr,{data:0}),Th=Wt(zb),Mb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jb[e])?!!n[e]:!1}function Zo(){return Nb}var Lb=g({},Ml,{key:function(e){if(e.key){var n=Mb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ob[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zo,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ub=Wt(Lb),Hb=g({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=Wt(Hb),Bb=g({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zo}),Fb=Wt(Bb),Yb=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qb=Wt(Yb),Ib=g({},au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gb=Wt(Ib),Vb=g({},mr,{newState:0,oldState:0}),Xb=Wt(Vb),Qb=[9,13,27,32],Jo=ia&&"CompositionEvent"in window,jl=null;ia&&"documentMode"in document&&(jl=document.documentMode);var Pb=ia&&"TextEvent"in window&&!jl,Ah=ia&&(!Jo||jl&&8<jl&&11>=jl),Ch=" ",Rh=!1;function Dh(e,n){switch(e){case"keyup":return Qb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function Zb(e,n){switch(e){case"compositionend":return _h(n);case"keypress":return n.which!==32?null:(Rh=!0,Ch);case"textInput":return e=n.data,e===Ch&&Rh?null:e;default:return null}}function Jb(e,n){if(Yr)return e==="compositionend"||!Jo&&Dh(e,n)?(e=wh(),Wi=Vo=_a=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ah&&n.locale!=="ko"?null:n.data;default:return null}}var $b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$b[e.type]:n==="textarea"}function Mh(e,n,a,i){Br?Fr?Fr.push(i):Fr=[i]:Br=i,n=Xu(n,"onChange"),0<n.length&&(a=new nu("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var Nl=null,Ll=null;function Kb(e){mp(e,0)}function ru(e){var n=Ot(e);if(dh(n))return e}function Oh(e,n){if(e==="change")return n}var jh=!1;if(ia){var $o;if(ia){var Ko="oninput"in document;if(!Ko){var Nh=document.createElement("div");Nh.setAttribute("oninput","return;"),Ko=typeof Nh.oninput=="function"}$o=Ko}else $o=!1;jh=$o&&(!document.documentMode||9<document.documentMode)}function Lh(){Nl&&(Nl.detachEvent("onpropertychange",Uh),Ll=Nl=null)}function Uh(e){if(e.propertyName==="value"&&ru(Ll)){var n=[];Mh(n,Ll,e,qo(e)),xh(Kb,n)}}function Wb(e,n,a){e==="focusin"?(Lh(),Nl=n,Ll=a,Nl.attachEvent("onpropertychange",Uh)):e==="focusout"&&Lh()}function e0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(Ll)}function t0(e,n){if(e==="click")return ru(n)}function n0(e,n){if(e==="input"||e==="change")return ru(n)}function a0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:a0;function Ul(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var f=a[i];if(!ea.call(n,f)||!fn(e[f],n[f]))return!1}return!0}function Hh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bh(e,n){var a=Hh(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Fh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$i(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$i(e.document)}return n}function Wo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var r0=ia&&"documentMode"in document&&11>=document.documentMode,qr=null,es=null,Hl=null,ts=!1;function qh(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ts||qr==null||qr!==$i(i)||(i=qr,"selectionStart"in i&&Wo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hl&&Ul(Hl,i)||(Hl=i,i=Xu(es,"onSelect"),0<i.length&&(n=new nu("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=qr)))}function pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},ns={},Ih={};ia&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function gr(e){if(ns[e])return ns[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ih)return ns[e]=n[a];return e}var Gh=gr("animationend"),Vh=gr("animationiteration"),Xh=gr("animationstart"),l0=gr("transitionrun"),i0=gr("transitionstart"),u0=gr("transitioncancel"),Qh=gr("transitionend"),Ph=new Map,as="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");as.push("scrollEnd");function Fn(e,n){Ph.set(e,n),Hn(n,[e])}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tn=[],Gr=0,rs=0;function iu(){for(var e=Gr,n=rs=Gr=0;n<e;){var a=Tn[n];Tn[n++]=null;var i=Tn[n];Tn[n++]=null;var f=Tn[n];Tn[n++]=null;var h=Tn[n];if(Tn[n++]=null,i!==null&&f!==null){var v=i.pending;v===null?f.next=f:(f.next=v.next,v.next=f),i.pending=f}h!==0&&Zh(a,f,h)}}function uu(e,n,a,i){Tn[Gr++]=e,Tn[Gr++]=n,Tn[Gr++]=a,Tn[Gr++]=i,rs|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ls(e,n,a,i){return uu(e,n,a,i),ou(e)}function yr(e,n){return uu(e,null,null,n),ou(e)}function Zh(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var f=!1,h=e.return;h!==null;)h.childLanes|=a,i=h.alternate,i!==null&&(i.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&n!==null&&(f=31-tt(a),e=h.hiddenUpdates,i=e[f],i===null?e[f]=[n]:i.push(n),n.lane=a|536870912),h):null}function ou(e){if(50<ii)throw ii=0,mc=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function o0(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,a,i){return new o0(e,n,a,i)}function is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,n){var a=e.alternate;return a===null?(a=hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function su(e,n,a,i,f,h){var v=0;if(i=e,typeof e=="function")is(e)&&(v=1);else if(typeof e=="string")v=d1(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=hn(31,a,n,f),e.elementType=Z,e.lanes=h,e;case O:return vr(a.children,f,h,n);case j:v=8,f|=24;break;case R:return e=hn(12,a,n,f|2),e.elementType=R,e.lanes=h,e;case I:return e=hn(13,a,n,f),e.elementType=I,e.lanes=h,e;case z:return e=hn(19,a,n,f),e.elementType=z,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:v=10;break e;case E:v=9;break e;case q:v=11;break e;case C:v=14;break e;case $:v=16,i=null;break e}v=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return n=hn(v,a,n,f),n.elementType=e,n.type=i,n.lanes=h,n}function vr(e,n,a,i){return e=hn(7,e,i,n),e.lanes=a,e}function us(e,n,a){return e=hn(6,e,null,n),e.lanes=a,e}function $h(e){var n=hn(18,null,null,0);return n.stateNode=e,n}function os(e,n,a){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Kh=new WeakMap;function kn(e,n){if(typeof e=="object"&&e!==null){var a=Kh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Lr(n)},Kh.set(e,n),n)}return{value:e,source:n,stack:Lr(n)}}var Xr=[],Qr=0,cu=null,Bl=0,An=[],Cn=0,za=null,Vn=1,Xn="";function oa(e,n){Xr[Qr++]=Bl,Xr[Qr++]=cu,cu=e,Bl=n}function Wh(e,n,a){An[Cn++]=Vn,An[Cn++]=Xn,An[Cn++]=za,za=e;var i=Vn;e=Xn;var f=32-tt(i)-1;i&=~(1<<f),a+=1;var h=32-tt(n)+f;if(30<h){var v=f-f%5;h=(i&(1<<v)-1).toString(32),i>>=v,f-=v,Vn=1<<32-tt(n)+f|a<<f|i,Xn=h+e}else Vn=1<<h|a<<f|i,Xn=e}function ss(e){e.return!==null&&(oa(e,1),Wh(e,1,0))}function cs(e){for(;e===cu;)cu=Xr[--Qr],Xr[Qr]=null,Bl=Xr[--Qr],Xr[Qr]=null;for(;e===za;)za=An[--Cn],An[Cn]=null,Xn=An[--Cn],An[Cn]=null,Vn=An[--Cn],An[Cn]=null}function ed(e,n){An[Cn++]=Vn,An[Cn++]=Xn,An[Cn++]=za,Vn=n.id,Xn=n.overflow,za=e}var Ht=null,ft=null,Xe=!1,Ma=null,Rn=!1,fs=Error(u(519));function Oa(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(kn(n,e)),fs}function td(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[de]=e,n[pe]=i,a){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<oi.length;a++)He(oi[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),mh(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),gh(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||vp(n.textContent,a)?(i.popover!=null&&(He("beforetoggle",n),He("toggle",n)),i.onScroll!=null&&He("scroll",n),i.onScrollEnd!=null&&He("scrollend",n),i.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||Oa(e,!0)}function nd(e){for(Ht=e.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:Rn=!1;return;case 27:case 3:Rn=!0;return;default:Ht=Ht.return}}function Pr(e){if(e!==Ht)return!1;if(!Xe)return nd(e),Xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Dc(e.type,e.memoizedProps)),a=!a),a&&ft&&Oa(e),nd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ft=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ft=Cp(e)}else n===27?(n=ft,Qa(e.type)?(e=jc,jc=null,ft=e):ft=n):ft=Ht?_n(e.stateNode.nextSibling):null;return!0}function br(){ft=Ht=null,Xe=!1}function hs(){var e=Ma;return e!==null&&(an===null?an=e:an.push.apply(an,e),Ma=null),e}function Fl(e){Ma===null?Ma=[e]:Ma.push(e)}var ds=M(null),xr=null,sa=null;function ja(e,n,a){S(ds,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=ds.current,X(ds)}function ms(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function ps(e,n,a,i){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var v=f.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=f;for(var _=0;_<n.length;_++)if(w.context===n[_]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),ms(h.return,a,e),i||(v=null);break e}h=w.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(u(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),ms(v,a,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Zr(e,n,a,i){e=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(u(387));if(v=v.memoizedProps,v!==null){var w=f.type;fn(f.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(f===ze.current){if(v=f.alternate,v===null)throw Error(u(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(di):e=[di])}f=f.return}e!==null&&ps(n,e,a,i),n.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){xr=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bt(e){return ad(xr,e)}function hu(e,n){return xr===null&&wr(e),ad(e,n)}function ad(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(u(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var s0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},c0=t.unstable_scheduleCallback,f0=t.unstable_NormalPriority,At={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gs(){return{controller:new s0,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&c0(f0,function(){e.controller.abort()})}var ql=null,ys=0,Jr=0,$r=null;function h0(e,n){if(ql===null){var a=ql=[];ys=0,Jr=xc(),$r={status:"pending",value:void 0,then:function(i){a.push(i)}}}return ys++,n.then(rd,rd),n}function rd(){if(--ys===0&&ql!==null){$r!==null&&($r.status="fulfilled");var e=ql;ql=null,Jr=0,$r=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function d0(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var f=0;f<a.length;f++)(0,a[f])(n)},function(f){for(i.status="rejected",i.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),i}var ld=H.S;H.S=function(e,n){qm=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&h0(e,n),ld!==null&&ld(e,n)};var Sr=M(null);function vs(){var e=Sr.current;return e!==null?e:ot.pooledCache}function du(e,n){n===null?S(Sr,Sr.current):S(Sr,n.pool)}function id(){var e=vs();return e===null?null:{parent:At._currentValue,pool:e}}var Kr=Error(u(460)),bs=Error(u(474)),mu=Error(u(542)),pu={then:function(){}};function ud(e){return e=e.status,e==="fulfilled"||e==="rejected"}function od(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cd(e),e;default:if(typeof n.status=="string")n.then(la,la);else{if(e=ot,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=i}},function(i){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cd(e),e}throw Tr=n,Kr}}function Er(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,Kr):a}}var Tr=null;function sd(){if(Tr===null)throw Error(u(459));var e=Tr;return Tr=null,e}function cd(e){if(e===Kr||e===mu)throw Error(u(483))}var Wr=null,Il=0;function gu(e){var n=Il;return Il+=1,Wr===null&&(Wr=[]),od(Wr,e,n)}function Gl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yu(e,n){throw n.$$typeof===x?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function fd(e){function n(U,N){if(e){var F=U.deletions;F===null?(U.deletions=[N],U.flags|=16):F.push(N)}}function a(U,N){if(!e)return null;for(;N!==null;)n(U,N),N=N.sibling;return null}function i(U){for(var N=new Map;U!==null;)U.key!==null?N.set(U.key,U):N.set(U.index,U),U=U.sibling;return N}function f(U,N){return U=ua(U,N),U.index=0,U.sibling=null,U}function h(U,N,F){return U.index=F,e?(F=U.alternate,F!==null?(F=F.index,F<N?(U.flags|=67108866,N):F):(U.flags|=67108866,N)):(U.flags|=1048576,N)}function v(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function w(U,N,F,ee){return N===null||N.tag!==6?(N=us(F,U.mode,ee),N.return=U,N):(N=f(N,F),N.return=U,N)}function _(U,N,F,ee){var ke=F.type;return ke===O?J(U,N,F.props.children,ee,F.key):N!==null&&(N.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===$&&Er(ke)===N.type)?(N=f(N,F.props),Gl(N,F),N.return=U,N):(N=su(F.type,F.key,F.props,null,U.mode,ee),Gl(N,F),N.return=U,N)}function Y(U,N,F,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=os(F,U.mode,ee),N.return=U,N):(N=f(N,F.children||[]),N.return=U,N)}function J(U,N,F,ee,ke){return N===null||N.tag!==7?(N=vr(F,U.mode,ee,ke),N.return=U,N):(N=f(N,F),N.return=U,N)}function te(U,N,F){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=us(""+N,U.mode,F),N.return=U,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case b:return F=su(N.type,N.key,N.props,null,U.mode,F),Gl(F,N),F.return=U,F;case k:return N=os(N,U.mode,F),N.return=U,N;case $:return N=Er(N),te(U,N,F)}if(ae(N)||ie(N))return N=vr(N,U.mode,F,null),N.return=U,N;if(typeof N.then=="function")return te(U,gu(N),F);if(N.$$typeof===T)return te(U,hu(U,N),F);yu(U,N)}return null}function G(U,N,F,ee){var ke=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return ke!==null?null:w(U,N,""+F,ee);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case b:return F.key===ke?_(U,N,F,ee):null;case k:return F.key===ke?Y(U,N,F,ee):null;case $:return F=Er(F),G(U,N,F,ee)}if(ae(F)||ie(F))return ke!==null?null:J(U,N,F,ee,null);if(typeof F.then=="function")return G(U,N,gu(F),ee);if(F.$$typeof===T)return G(U,N,hu(U,F),ee);yu(U,F)}return null}function P(U,N,F,ee,ke){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return U=U.get(F)||null,w(N,U,""+ee,ke);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case b:return U=U.get(ee.key===null?F:ee.key)||null,_(N,U,ee,ke);case k:return U=U.get(ee.key===null?F:ee.key)||null,Y(N,U,ee,ke);case $:return ee=Er(ee),P(U,N,F,ee,ke)}if(ae(ee)||ie(ee))return U=U.get(F)||null,J(N,U,ee,ke,null);if(typeof ee.then=="function")return P(U,N,F,gu(ee),ke);if(ee.$$typeof===T)return P(U,N,F,hu(N,ee),ke);yu(N,ee)}return null}function be(U,N,F,ee){for(var ke=null,Ke=null,xe=N,je=N=0,Ye=null;xe!==null&&je<F.length;je++){xe.index>je?(Ye=xe,xe=null):Ye=xe.sibling;var We=G(U,xe,F[je],ee);if(We===null){xe===null&&(xe=Ye);break}e&&xe&&We.alternate===null&&n(U,xe),N=h(We,N,je),Ke===null?ke=We:Ke.sibling=We,Ke=We,xe=Ye}if(je===F.length)return a(U,xe),Xe&&oa(U,je),ke;if(xe===null){for(;je<F.length;je++)xe=te(U,F[je],ee),xe!==null&&(N=h(xe,N,je),Ke===null?ke=xe:Ke.sibling=xe,Ke=xe);return Xe&&oa(U,je),ke}for(xe=i(xe);je<F.length;je++)Ye=P(xe,U,je,F[je],ee),Ye!==null&&(e&&Ye.alternate!==null&&xe.delete(Ye.key===null?je:Ye.key),N=h(Ye,N,je),Ke===null?ke=Ye:Ke.sibling=Ye,Ke=Ye);return e&&xe.forEach(function(Ka){return n(U,Ka)}),Xe&&oa(U,je),ke}function De(U,N,F,ee){if(F==null)throw Error(u(151));for(var ke=null,Ke=null,xe=N,je=N=0,Ye=null,We=F.next();xe!==null&&!We.done;je++,We=F.next()){xe.index>je?(Ye=xe,xe=null):Ye=xe.sibling;var Ka=G(U,xe,We.value,ee);if(Ka===null){xe===null&&(xe=Ye);break}e&&xe&&Ka.alternate===null&&n(U,xe),N=h(Ka,N,je),Ke===null?ke=Ka:Ke.sibling=Ka,Ke=Ka,xe=Ye}if(We.done)return a(U,xe),Xe&&oa(U,je),ke;if(xe===null){for(;!We.done;je++,We=F.next())We=te(U,We.value,ee),We!==null&&(N=h(We,N,je),Ke===null?ke=We:Ke.sibling=We,Ke=We);return Xe&&oa(U,je),ke}for(xe=i(xe);!We.done;je++,We=F.next())We=P(xe,U,je,We.value,ee),We!==null&&(e&&We.alternate!==null&&xe.delete(We.key===null?je:We.key),N=h(We,N,je),Ke===null?ke=We:Ke.sibling=We,Ke=We);return e&&xe.forEach(function(T1){return n(U,T1)}),Xe&&oa(U,je),ke}function ut(U,N,F,ee){if(typeof F=="object"&&F!==null&&F.type===O&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case b:e:{for(var ke=F.key;N!==null;){if(N.key===ke){if(ke=F.type,ke===O){if(N.tag===7){a(U,N.sibling),ee=f(N,F.props.children),ee.return=U,U=ee;break e}}else if(N.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===$&&Er(ke)===N.type){a(U,N.sibling),ee=f(N,F.props),Gl(ee,F),ee.return=U,U=ee;break e}a(U,N);break}else n(U,N);N=N.sibling}F.type===O?(ee=vr(F.props.children,U.mode,ee,F.key),ee.return=U,U=ee):(ee=su(F.type,F.key,F.props,null,U.mode,ee),Gl(ee,F),ee.return=U,U=ee)}return v(U);case k:e:{for(ke=F.key;N!==null;){if(N.key===ke)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(U,N.sibling),ee=f(N,F.children||[]),ee.return=U,U=ee;break e}else{a(U,N);break}else n(U,N);N=N.sibling}ee=os(F,U.mode,ee),ee.return=U,U=ee}return v(U);case $:return F=Er(F),ut(U,N,F,ee)}if(ae(F))return be(U,N,F,ee);if(ie(F)){if(ke=ie(F),typeof ke!="function")throw Error(u(150));return F=ke.call(F),De(U,N,F,ee)}if(typeof F.then=="function")return ut(U,N,gu(F),ee);if(F.$$typeof===T)return ut(U,N,hu(U,F),ee);yu(U,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,N!==null&&N.tag===6?(a(U,N.sibling),ee=f(N,F),ee.return=U,U=ee):(a(U,N),ee=us(F,U.mode,ee),ee.return=U,U=ee),v(U)):a(U,N)}return function(U,N,F,ee){try{Il=0;var ke=ut(U,N,F,ee);return Wr=null,ke}catch(xe){if(xe===Kr||xe===mu)throw xe;var Ke=hn(29,xe,null,U.mode);return Ke.lanes=ee,Ke.return=U,Ke}}}var kr=fd(!0),hd=fd(!1),Na=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ws(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(et&2)!==0){var f=i.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),i.pending=n,n=ou(e),Zh(e,null,a),n}return uu(e,i,n,a),ou(e)}function Vl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,D(e,a)}}function Ss(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?f=h=n:h=h.next=n}else f=h=n;a={baseState:i.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Es=!1;function Xl(){if(Es){var e=$r;if(e!==null)throw e}}function Ql(e,n,a,i){Es=!1;var f=e.updateQueue;Na=!1;var h=f.firstBaseUpdate,v=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var _=w,Y=_.next;_.next=null,v===null?h=Y:v.next=Y,v=_;var J=e.alternate;J!==null&&(J=J.updateQueue,w=J.lastBaseUpdate,w!==v&&(w===null?J.firstBaseUpdate=Y:w.next=Y,J.lastBaseUpdate=_))}if(h!==null){var te=f.baseState;v=0,J=Y=_=null,w=h;do{var G=w.lane&-536870913,P=G!==w.lane;if(P?(Fe&G)===G:(i&G)===G){G!==0&&G===Jr&&(Es=!0),J!==null&&(J=J.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var be=e,De=w;G=n;var ut=a;switch(De.tag){case 1:if(be=De.payload,typeof be=="function"){te=be.call(ut,te,G);break e}te=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=De.payload,G=typeof be=="function"?be.call(ut,te,G):be,G==null)break e;te=g({},te,G);break e;case 2:Na=!0}}G=w.callback,G!==null&&(e.flags|=64,P&&(e.flags|=8192),P=f.callbacks,P===null?f.callbacks=[G]:P.push(G))}else P={lane:G,tag:w.tag,payload:w.payload,callback:w.callback,next:null},J===null?(Y=J=P,_=te):J=J.next=P,v|=G;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;P=w,w=P.next,P.next=null,f.lastBaseUpdate=P,f.shared.pending=null}}while(!0);J===null&&(_=te),f.baseState=_,f.firstBaseUpdate=Y,f.lastBaseUpdate=J,h===null&&(f.shared.lanes=0),qa|=v,e.lanes=v,e.memoizedState=te}}function dd(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function md(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dd(a[e],n)}var el=M(null),vu=M(0);function pd(e,n){e=ba,S(vu,e),S(el,n),ba=e|n.baseLanes}function Ts(){S(vu,ba),S(el,el.current)}function ks(){ba=vu.current,X(el),X(vu)}var dn=M(null),Dn=null;function Ha(e){var n=e.alternate;S(Et,Et.current&1),S(dn,e),Dn===null&&(n===null||el.current!==null||n.memoizedState!==null)&&(Dn=e)}function As(e){S(Et,Et.current),S(dn,e),Dn===null&&(Dn=e)}function gd(e){e.tag===22?(S(Et,Et.current),S(dn,e),Dn===null&&(Dn=e)):Ba()}function Ba(){S(Et,Et.current),S(dn,dn.current)}function mn(e){X(dn),Dn===e&&(Dn=null),X(Et)}var Et=M(0);function bu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mc(a)||Oc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,Oe=null,lt=null,Ct=null,xu=!1,tl=!1,Ar=!1,wu=0,Pl=0,nl=null,m0=0;function xt(){throw Error(u(321))}function Cs(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fn(e[a],n[a]))return!1;return!0}function Rs(e,n,a,i,f,h){return fa=h,Oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?Wd:Is,Ar=!1,h=a(i,f),Ar=!1,tl&&(h=vd(n,a,i,f)),yd(e),h}function yd(e){H.H=$l;var n=lt!==null&&lt.next!==null;if(fa=0,Ct=lt=Oe=null,xu=!1,Pl=0,nl=null,n)throw Error(u(300));e===null||Rt||(e=e.dependencies,e!==null&&fu(e)&&(Rt=!0))}function vd(e,n,a,i){Oe=e;var f=0;do{if(tl&&(nl=null),Pl=0,tl=!1,25<=f)throw Error(u(301));if(f+=1,Ct=lt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}H.H=em,h=n(a,i)}while(tl);return h}function p0(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Zl(n):n,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(Oe.flags|=1024),n}function Ds(){var e=wu!==0;return wu=0,e}function _s(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zs(e){if(xu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xu=!1}fa=0,Ct=lt=Oe=null,tl=!1,Pl=wu=0,nl=null}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Oe.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function Tt(){if(lt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var n=Ct===null?Oe.memoizedState:Ct.next;if(n!==null)Ct=n,lt=e;else{if(e===null)throw Oe.alternate===null?Error(u(467)):Error(u(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},Ct===null?Oe.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zl(e){var n=Pl;return Pl+=1,nl===null&&(nl=[]),e=od(nl,e,n),n=Oe,(Ct===null?n.memoizedState:Ct.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Wd:Is),e}function Eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zl(e);if(e.$$typeof===T)return Bt(e)}throw Error(u(438,String(e)))}function Ms(e){var n=null,a=Oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=Oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),Oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=L;return n.index++,a}function ha(e,n){return typeof n=="function"?n(e):n}function Tu(e){var n=Tt();return Os(n,lt,e)}function Os(e,n,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var f=e.baseQueue,h=i.pending;if(h!==null){if(f!==null){var v=f.next;f.next=h.next,h.next=v}n.baseQueue=f=h,i.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{n=f.next;var w=v=null,_=null,Y=n,J=!1;do{var te=Y.lane&-536870913;if(te!==Y.lane?(Fe&te)===te:(fa&te)===te){var G=Y.revertLane;if(G===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),te===Jr&&(J=!0);else if((fa&G)===G){Y=Y.next,G===Jr&&(J=!0);continue}else te={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},_===null?(w=_=te,v=h):_=_.next=te,Oe.lanes|=G,qa|=G;te=Y.action,Ar&&a(h,te),h=Y.hasEagerState?Y.eagerState:a(h,te)}else G={lane:te,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},_===null?(w=_=G,v=h):_=_.next=G,Oe.lanes|=te,qa|=te;Y=Y.next}while(Y!==null&&Y!==n);if(_===null?v=h:_.next=w,!fn(h,e.memoizedState)&&(Rt=!0,J&&(a=$r,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=_,i.lastRenderedState=h}return f===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function js(e){var n=Tt(),a=n.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,f=a.pending,h=n.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do h=e(h,v.action),v=v.next;while(v!==f);fn(h,n.memoizedState)||(Rt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,i]}function bd(e,n,a){var i=Oe,f=Tt(),h=Xe;if(h){if(a===void 0)throw Error(u(407));a=a()}else a=n();var v=!fn((lt||f).memoizedState,a);if(v&&(f.memoizedState=a,Rt=!0),f=f.queue,Us(Sd.bind(null,i,f,e),[e]),f.getSnapshot!==n||v||Ct!==null&&Ct.memoizedState.tag&1){if(i.flags|=2048,al(9,{destroy:void 0},wd.bind(null,i,f,a,n),null),ot===null)throw Error(u(349));h||(fa&127)!==0||xd(i,n,a)}return a}function xd(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Oe.updateQueue,n===null?(n=Su(),Oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wd(e,n,a,i){n.value=a,n.getSnapshot=i,Ed(n)&&Td(e)}function Sd(e,n,a){return a(function(){Ed(n)&&Td(e)})}function Ed(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fn(e,a)}catch{return!0}}function Td(e){var n=yr(e,2);n!==null&&rn(n,e,2)}function Ns(e){var n=Zt();if(typeof e=="function"){var a=e;if(e=a(),Ar){Lt(!0);try{a()}finally{Lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function kd(e,n,a,i){return e.baseState=a,Os(e,lt,typeof i=="function"?i:ha)}function g0(e,n,a,i,f){if(Cu(e))throw Error(u(485));if(e=n.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};H.T!==null?a(!0):h.isTransition=!1,i(h),a=n.pending,a===null?(h.next=n.pending=h,Ad(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Ad(e,n){var a=n.action,i=n.payload,f=e.state;if(n.isTransition){var h=H.T,v={};H.T=v;try{var w=a(f,i),_=H.S;_!==null&&_(v,w),Cd(e,n,w)}catch(Y){Ls(e,n,Y)}finally{h!==null&&v.types!==null&&(h.types=v.types),H.T=h}}else try{h=a(f,i),Cd(e,n,h)}catch(Y){Ls(e,n,Y)}}function Cd(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Rd(e,n,i)},function(i){return Ls(e,n,i)}):Rd(e,n,a)}function Rd(e,n,a){n.status="fulfilled",n.value=a,Dd(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ad(e,a)))}function Ls(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,Dd(n),n=n.next;while(n!==i)}e.action=null}function Dd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _d(e,n){return n}function zd(e,n){if(Xe){var a=ot.formState;if(a!==null){e:{var i=Oe;if(Xe){if(ft){t:{for(var f=ft,h=Rn;f.nodeType!==8;){if(!h){f=null;break t}if(f=_n(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){ft=_n(f.nextSibling),i=f.data==="F!";break e}}Oa(i)}i=!1}i&&(n=a[0])}}return a=Zt(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_d,lastRenderedState:n},a.queue=i,a=Jd.bind(null,Oe,i),i.dispatch=a,i=Ns(!1),h=qs.bind(null,Oe,!1,i.queue),i=Zt(),f={state:n,dispatch:null,action:e,pending:null},i.queue=f,a=g0.bind(null,Oe,f,h,a),f.dispatch=a,i.memoizedState=e,[n,a,!1]}function Md(e){var n=Tt();return Od(n,lt,e)}function Od(e,n,a){if(n=Os(e,n,_d)[0],e=Tu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Zl(n)}catch(v){throw v===Kr?mu:v}else i=n;n=Tt();var f=n.queue,h=f.dispatch;return a!==n.memoizedState&&(Oe.flags|=2048,al(9,{destroy:void 0},y0.bind(null,f,a),null)),[i,h,e]}function y0(e,n){e.action=n}function jd(e){var n=Tt(),a=lt;if(a!==null)return Od(n,a,e);Tt(),n=n.memoizedState,a=Tt();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function al(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=Oe.updateQueue,n===null&&(n=Su(),Oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Nd(){return Tt().memoizedState}function ku(e,n,a,i){var f=Zt();Oe.flags|=e,f.memoizedState=al(1|n,{destroy:void 0},a,i===void 0?null:i)}function Au(e,n,a,i){var f=Tt();i=i===void 0?null:i;var h=f.memoizedState.inst;lt!==null&&i!==null&&Cs(i,lt.memoizedState.deps)?f.memoizedState=al(n,h,a,i):(Oe.flags|=e,f.memoizedState=al(1|n,h,a,i))}function Ld(e,n){ku(8390656,8,e,n)}function Us(e,n){Au(2048,8,e,n)}function v0(e){Oe.flags|=4;var n=Oe.updateQueue;if(n===null)n=Su(),Oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ud(e){var n=Tt().memoizedState;return v0({ref:n,nextImpl:e}),function(){if((et&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Hd(e,n){return Au(4,2,e,n)}function Bd(e,n){return Au(4,4,e,n)}function Fd(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yd(e,n,a){a=a!=null?a.concat([e]):null,Au(4,4,Fd.bind(null,n,e),a)}function Hs(){}function qd(e,n){var a=Tt();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Cs(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Id(e,n){var a=Tt();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Cs(n,i[1]))return i[0];if(i=e(),Ar){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[i,n],i}function Bs(e,n,a){return a===void 0||(fa&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Gm(),Oe.lanes|=e,qa|=e,a)}function Gd(e,n,a,i){return fn(a,n)?a:el.current!==null?(e=Bs(e,a,i),fn(e,n)||(Rt=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(Fe&261930)===0?(Rt=!0,e.memoizedState=a):(e=Gm(),Oe.lanes|=e,qa|=e,n)}function Vd(e,n,a,i,f){var h=re.p;re.p=h!==0&&8>h?h:8;var v=H.T,w={};H.T=w,qs(e,!1,n,a);try{var _=f(),Y=H.S;if(Y!==null&&Y(w,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var J=d0(_,i);Jl(e,n,J,yn(e))}else Jl(e,n,i,yn(e))}catch(te){Jl(e,n,{then:function(){},status:"rejected",reason:te},yn())}finally{re.p=h,v!==null&&w.types!==null&&(v.types=w.types),H.T=v}}function b0(){}function Fs(e,n,a,i){if(e.tag!==5)throw Error(u(476));var f=Xd(e).queue;Vd(e,f,n,le,a===null?b0:function(){return Qd(e),a(i)})}function Xd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qd(e){var n=Xd(e);n.next===null&&(n=e.alternate.memoizedState),Jl(e,n.next.queue,{},yn())}function Ys(){return Bt(di)}function Pd(){return Tt().memoizedState}function Zd(){return Tt().memoizedState}function x0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=yn();e=La(a);var i=Ua(n,e,a);i!==null&&(rn(i,n,a),Vl(i,n,a)),n={cache:gs()},e.payload=n;return}n=n.return}}function w0(e,n,a){var i=yn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?$d(n,a):(a=ls(e,n,a,i),a!==null&&(rn(a,e,i),Kd(a,n,i)))}function Jd(e,n,a){var i=yn();Jl(e,n,a,i)}function Jl(e,n,a,i){var f={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))$d(n,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,w=h(v,a);if(f.hasEagerState=!0,f.eagerState=w,fn(w,v))return uu(e,n,f,0),ot===null&&iu(),!1}catch{}if(a=ls(e,n,f,i),a!==null)return rn(a,e,i),Kd(a,n,i),!0}return!1}function qs(e,n,a,i){if(i={lane:2,revertLane:xc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(n)throw Error(u(479))}else n=ls(e,a,i,2),n!==null&&rn(n,e,2)}function Cu(e){var n=e.alternate;return e===Oe||n!==null&&n===Oe}function $d(e,n){tl=xu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kd(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,D(e,a)}}var $l={readContext:Bt,use:Eu,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};$l.useEffectEvent=xt;var Wd={readContext:Bt,use:Eu,useCallback:function(e,n){return Zt().memoizedState=[e,n===void 0?null:n],e},useContext:Bt,useEffect:Ld,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ku(4194308,4,Fd.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ku(4194308,4,e,n)},useInsertionEffect:function(e,n){ku(4,2,e,n)},useMemo:function(e,n){var a=Zt();n=n===void 0?null:n;var i=e();if(Ar){Lt(!0);try{e()}finally{Lt(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=Zt();if(a!==void 0){var f=a(n);if(Ar){Lt(!0);try{a(n)}finally{Lt(!1)}}}else f=n;return i.memoizedState=i.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},i.queue=e,e=e.dispatch=w0.bind(null,Oe,e),[i.memoizedState,e]},useRef:function(e){var n=Zt();return e={current:e},n.memoizedState=e},useState:function(e){e=Ns(e);var n=e.queue,a=Jd.bind(null,Oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Hs,useDeferredValue:function(e,n){var a=Zt();return Bs(a,e,n)},useTransition:function(){var e=Ns(!1);return e=Vd.bind(null,Oe,e.queue,!0,!1),Zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=Oe,f=Zt();if(Xe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=n(),ot===null)throw Error(u(349));(Fe&127)!==0||xd(i,n,a)}f.memoizedState=a;var h={value:a,getSnapshot:n};return f.queue=h,Ld(Sd.bind(null,i,h,e),[e]),i.flags|=2048,al(9,{destroy:void 0},wd.bind(null,i,h,a,n),null),a},useId:function(){var e=Zt(),n=ot.identifierPrefix;if(Xe){var a=Xn,i=Vn;a=(i&~(1<<32-tt(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=m0++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ys,useFormState:zd,useActionState:zd,useOptimistic:function(e){var n=Zt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qs.bind(null,Oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ms,useCacheRefresh:function(){return Zt().memoizedState=x0.bind(null,Oe)},useEffectEvent:function(e){var n=Zt(),a={impl:e};return n.memoizedState=a,function(){if((et&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Is={readContext:Bt,use:Eu,useCallback:qd,useContext:Bt,useEffect:Us,useImperativeHandle:Yd,useInsertionEffect:Hd,useLayoutEffect:Bd,useMemo:Id,useReducer:Tu,useRef:Nd,useState:function(){return Tu(ha)},useDebugValue:Hs,useDeferredValue:function(e,n){var a=Tt();return Gd(a,lt.memoizedState,e,n)},useTransition:function(){var e=Tu(ha)[0],n=Tt().memoizedState;return[typeof e=="boolean"?e:Zl(e),n]},useSyncExternalStore:bd,useId:Pd,useHostTransitionStatus:Ys,useFormState:Md,useActionState:Md,useOptimistic:function(e,n){var a=Tt();return kd(a,lt,e,n)},useMemoCache:Ms,useCacheRefresh:Zd};Is.useEffectEvent=Ud;var em={readContext:Bt,use:Eu,useCallback:qd,useContext:Bt,useEffect:Us,useImperativeHandle:Yd,useInsertionEffect:Hd,useLayoutEffect:Bd,useMemo:Id,useReducer:js,useRef:Nd,useState:function(){return js(ha)},useDebugValue:Hs,useDeferredValue:function(e,n){var a=Tt();return lt===null?Bs(a,e,n):Gd(a,lt.memoizedState,e,n)},useTransition:function(){var e=js(ha)[0],n=Tt().memoizedState;return[typeof e=="boolean"?e:Zl(e),n]},useSyncExternalStore:bd,useId:Pd,useHostTransitionStatus:Ys,useFormState:jd,useActionState:jd,useOptimistic:function(e,n){var a=Tt();return lt!==null?kd(a,lt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:Zd};em.useEffectEvent=Ud;function Gs(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vs={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=yn(),f=La(i);f.payload=n,a!=null&&(f.callback=a),n=Ua(e,f,i),n!==null&&(rn(n,e,i),Vl(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=yn(),f=La(i);f.tag=1,f.payload=n,a!=null&&(f.callback=a),n=Ua(e,f,i),n!==null&&(rn(n,e,i),Vl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=yn(),i=La(a);i.tag=2,n!=null&&(i.callback=n),n=Ua(e,i,a),n!==null&&(rn(n,e,a),Vl(n,e,a))}};function tm(e,n,a,i,f,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,v):n.prototype&&n.prototype.isPureReactComponent?!Ul(a,i)||!Ul(f,h):!0}function nm(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&Vs.enqueueReplaceState(n,n.state,null)}function Cr(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var f in e)a[f]===void 0&&(a[f]=e[f])}return a}function am(e){lu(e)}function rm(e){console.error(e)}function lm(e){lu(e)}function Ru(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function im(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xs(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Ru(e,n)},a}function um(e){return e=La(e),e.tag=3,e}function om(e,n,a,i){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=i.value;e.payload=function(){return f(h)},e.callback=function(){im(n,a,i)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){im(n,a,i),typeof f!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})})}function S0(e,n,a,i,f){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,f,!0),a=dn.current,a!==null){switch(a.tag){case 31:case 13:return Dn===null?Fu():a.alternate===null&&wt===0&&(wt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,i===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),yc(e,i,f)),!1;case 22:return a.flags|=65536,i===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),yc(e,i,f)),!1}throw Error(u(435,a.tag))}return yc(e,i,f),Fu(),!1}if(Xe)return n=dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,i!==fs&&(e=Error(u(422),{cause:i}),Fl(kn(e,a)))):(i!==fs&&(n=Error(u(423),{cause:i}),Fl(kn(n,a))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,i=kn(i,a),f=Xs(e.stateNode,i,f),Ss(e,f),wt!==4&&(wt=2)),!1;var h=Error(u(520),{cause:i});if(h=kn(h,a),li===null?li=[h]:li.push(h),wt!==4&&(wt=2),n===null)return!0;i=kn(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=f&-f,a.lanes|=e,e=Xs(a.stateNode,i,e),Ss(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ia===null||!Ia.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=um(f),om(f,e,a,i),Ss(a,f),!1}a=a.return}while(a!==null);return!1}var Qs=Error(u(461)),Rt=!1;function Ft(e,n,a,i){n.child=e===null?hd(n,null,a,i):kr(n,e.child,a,i)}function sm(e,n,a,i,f){a=a.render;var h=n.ref;if("ref"in i){var v={};for(var w in i)w!=="ref"&&(v[w]=i[w])}else v=i;return wr(n),i=Rs(e,n,a,v,h,f),w=Ds(),e!==null&&!Rt?(_s(e,n,f),da(e,n,f)):(Xe&&w&&ss(n),n.flags|=1,Ft(e,n,i,f),n.child)}function cm(e,n,a,i,f){if(e===null){var h=a.type;return typeof h=="function"&&!is(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,fm(e,n,h,i,f)):(e=su(a.type,null,i,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!tc(e,f)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ul,a(v,i)&&e.ref===n.ref)return da(e,n,f)}return n.flags|=1,e=ua(h,i),e.ref=n.ref,e.return=n,n.child=e}function fm(e,n,a,i,f){if(e!==null){var h=e.memoizedProps;if(Ul(h,i)&&e.ref===n.ref)if(Rt=!1,n.pendingProps=i=h,tc(e,f))(e.flags&131072)!==0&&(Rt=!0);else return n.lanes=e.lanes,da(e,n,f)}return Ps(e,n,a,i,f)}function hm(e,n,a,i){var f=i.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(i=n.child=e.child,f=0;i!==null;)f=f|i.lanes|i.childLanes,i=i.sibling;i=f&~h}else i=0,n.child=null;return dm(e,n,h,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&du(n,h!==null?h.cachePool:null),h!==null?pd(n,h):Ts(),gd(n);else return i=n.lanes=536870912,dm(e,n,h!==null?h.baseLanes|a:a,a,i)}else h!==null?(du(n,h.cachePool),pd(n,h),Ba(),n.memoizedState=null):(e!==null&&du(n,null),Ts(),Ba());return Ft(e,n,f,a),n.child}function Kl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dm(e,n,a,i,f){var h=vs();return h=h===null?null:{parent:At._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&du(n,null),Ts(),gd(n),e!==null&&Zr(e,n,i,!0),n.childLanes=f,null}function Du(e,n){return n=zu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function mm(e,n,a){return kr(n,e.child,null,a),e=Du(n,n.pendingProps),e.flags|=2,mn(n),n.memoizedState=null,e}function E0(e,n,a){var i=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Xe){if(i.mode==="hidden")return e=Du(n,i),n.lanes=536870912,Kl(null,e);if(As(n),(e=ft)?(e=Ap(e,Rn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:za!==null?{id:Vn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=$h(e),a.return=n,n.child=a,Ht=n,ft=null)):e=null,e===null)throw Oa(n);return n.lanes=536870912,null}return Du(n,i)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(As(n),f)if(n.flags&256)n.flags&=-257,n=mm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Rt||Zr(e,n,a,!1),f=(a&e.childLanes)!==0,Rt||f){if(i=ot,i!==null&&(v=B(i,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,yr(e,v),rn(i,e,v),Qs;Fu(),n=mm(e,n,a)}else e=h.treeContext,ft=_n(v.nextSibling),Ht=n,Xe=!0,Ma=null,Rn=!1,e!==null&&ed(n,e),n=Du(n,i),n.flags|=4096;return n}return e=ua(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _u(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ps(e,n,a,i,f){return wr(n),a=Rs(e,n,a,i,void 0,f),i=Ds(),e!==null&&!Rt?(_s(e,n,f),da(e,n,f)):(Xe&&i&&ss(n),n.flags|=1,Ft(e,n,a,f),n.child)}function pm(e,n,a,i,f,h){return wr(n),n.updateQueue=null,a=vd(n,i,a,f),yd(e),i=Ds(),e!==null&&!Rt?(_s(e,n,h),da(e,n,h)):(Xe&&i&&ss(n),n.flags|=1,Ft(e,n,a,h),n.child)}function gm(e,n,a,i,f){if(wr(n),n.stateNode===null){var h=Vr,v=a.contextType;typeof v=="object"&&v!==null&&(h=Bt(v)),h=new a(i,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Vs,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=i,h.state=n.memoizedState,h.refs={},xs(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Bt(v):Vr,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Gs(n,a,v,i),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Vs.enqueueReplaceState(h,h.state,null),Ql(n,i,h,f),Xl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,_=Cr(a,w);h.props=_;var Y=h.context,J=a.contextType;v=Vr,typeof J=="object"&&J!==null&&(v=Bt(J));var te=a.getDerivedStateFromProps;J=typeof te=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,J||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||Y!==v)&&nm(n,h,i,v),Na=!1;var G=n.memoizedState;h.state=G,Ql(n,i,h,f),Xl(),Y=n.memoizedState,w||G!==Y||Na?(typeof te=="function"&&(Gs(n,a,te,i),Y=n.memoizedState),(_=Na||tm(n,a,_,i,G,Y,v))?(J||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Y),h.props=i,h.state=Y,h.context=v,i=_):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{h=n.stateNode,ws(e,n),v=n.memoizedProps,J=Cr(a,v),h.props=J,te=n.pendingProps,G=h.context,Y=a.contextType,_=Vr,typeof Y=="object"&&Y!==null&&(_=Bt(Y)),w=a.getDerivedStateFromProps,(Y=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==te||G!==_)&&nm(n,h,i,_),Na=!1,G=n.memoizedState,h.state=G,Ql(n,i,h,f),Xl();var P=n.memoizedState;v!==te||G!==P||Na||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof w=="function"&&(Gs(n,a,w,i),P=n.memoizedState),(J=Na||tm(n,a,J,i,G,P,_)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,P,_),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,P,_)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=P),h.props=i,h.state=P,h.context=_,i=J):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(n.flags|=1024),i=!1)}return h=i,_u(e,n),i=(n.flags&128)!==0,h||i?(h=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&i?(n.child=kr(n,e.child,null,f),n.child=kr(n,null,a,f)):Ft(e,n,a,f),n.memoizedState=h.state,e=n.child):e=da(e,n,f),e}function ym(e,n,a,i){return br(),n.flags|=256,Ft(e,n,a,i),n.child}var Zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Js(e){return{baseLanes:e,cachePool:id()}}function $s(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gn),e}function vm(e,n,a){var i=n.pendingProps,f=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),v&&(f=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xe){if(f?Ha(n):Ba(),(e=ft)?(e=Ap(e,Rn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:za!==null?{id:Vn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=$h(e),a.return=n,n.child=a,Ht=n,ft=null)):e=null,e===null)throw Oa(n);return Oc(e)?n.lanes=32:n.lanes=536870912,null}var w=i.children;return i=i.fallback,f?(Ba(),f=n.mode,w=zu({mode:"hidden",children:w},f),i=vr(i,f,a,null),w.return=n,i.return=n,w.sibling=i,n.child=w,i=n.child,i.memoizedState=Js(a),i.childLanes=$s(e,v,a),n.memoizedState=Zs,Kl(null,i)):(Ha(n),Ks(n,w))}var _=e.memoizedState;if(_!==null&&(w=_.dehydrated,w!==null)){if(h)n.flags&256?(Ha(n),n.flags&=-257,n=Ws(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),w=i.fallback,f=n.mode,i=zu({mode:"visible",children:i.children},f),w=vr(w,f,a,null),w.flags|=2,i.return=n,w.return=n,i.sibling=w,n.child=i,kr(n,e.child,null,a),i=n.child,i.memoizedState=Js(a),i.childLanes=$s(e,v,a),n.memoizedState=Zs,n=Kl(null,i));else if(Ha(n),Oc(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var Y=v.dgst;v=Y,i=Error(u(419)),i.stack="",i.digest=v,Fl({value:i,source:null,stack:null}),n=Ws(e,n,a)}else if(Rt||Zr(e,n,a,!1),v=(a&e.childLanes)!==0,Rt||v){if(v=ot,v!==null&&(i=B(v,a),i!==0&&i!==_.retryLane))throw _.retryLane=i,yr(e,i),rn(v,e,i),Qs;Mc(w)||Fu(),n=Ws(e,n,a)}else Mc(w)?(n.flags|=192,n.child=e.child,n=null):(e=_.treeContext,ft=_n(w.nextSibling),Ht=n,Xe=!0,Ma=null,Rn=!1,e!==null&&ed(n,e),n=Ks(n,i.children),n.flags|=4096);return n}return f?(Ba(),w=i.fallback,f=n.mode,_=e.child,Y=_.sibling,i=ua(_,{mode:"hidden",children:i.children}),i.subtreeFlags=_.subtreeFlags&65011712,Y!==null?w=ua(Y,w):(w=vr(w,f,a,null),w.flags|=2),w.return=n,i.return=n,i.sibling=w,n.child=i,Kl(null,i),i=n.child,w=e.child.memoizedState,w===null?w=Js(a):(f=w.cachePool,f!==null?(_=At._currentValue,f=f.parent!==_?{parent:_,pool:_}:f):f=id(),w={baseLanes:w.baseLanes|a,cachePool:f}),i.memoizedState=w,i.childLanes=$s(e,v,a),n.memoizedState=Zs,Kl(e.child,i)):(Ha(n),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Ks(e,n){return n=zu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zu(e,n){return e=hn(22,e,null,n),e.lanes=0,e}function Ws(e,n,a){return kr(n,e.child,null,a),e=Ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),ms(e.return,n,a)}function ec(e,n,a,i,f,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:f,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=i,v.tail=a,v.tailMode=f,v.treeForkCount=h)}function xm(e,n,a){var i=n.pendingProps,f=i.revealOrder,h=i.tail;i=i.children;var v=Et.current,w=(v&2)!==0;if(w?(v=v&1|2,n.flags|=128):v&=1,S(Et,v),Ft(e,n,i,a),i=Xe?Bl:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(a=n.child,f=null;a!==null;)e=a.alternate,e!==null&&bu(e)===null&&(f=a),a=a.sibling;a=f,a===null?(f=n.child,n.child=null):(f=a.sibling,a.sibling=null),ec(n,!1,f,a,h,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&bu(e)===null){n.child=f;break}e=f.sibling,f.sibling=a,a=f,f=e}ec(n,!0,a,null,h,i);break;case"together":ec(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,a=ua(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function tc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function T0(e,n,a){switch(n.tag){case 3:Qe(n,n.stateNode.containerInfo),ja(n,At,e.memoizedState.cache),br();break;case 27:case 5:Mt(n);break;case 4:Qe(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,As(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(e,n,a):(Ha(n),e=da(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var f=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Zr(e,n,a,!1),i=(a&n.childLanes)!==0),f){if(i)return xm(e,n,a);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),S(Et,Et.current),i)break;return null;case 22:return n.lanes=0,hm(e,n,a,n.pendingProps);case 24:ja(n,At,e.memoizedState.cache)}return da(e,n,a)}function wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rt=!0;else{if(!tc(e,a)&&(n.flags&128)===0)return Rt=!1,T0(e,n,a);Rt=(e.flags&131072)!==0}else Rt=!1,Xe&&(n.flags&1048576)!==0&&Wh(n,Bl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Er(n.elementType),n.type=e,typeof e=="function")is(e)?(i=Cr(e,i),n.tag=1,n=gm(null,n,e,i,a)):(n.tag=0,n=Ps(null,n,e,i,a));else{if(e!=null){var f=e.$$typeof;if(f===q){n.tag=11,n=sm(null,n,e,i,a);break e}else if(f===C){n.tag=14,n=cm(null,n,e,i,a);break e}}throw n=he(e)||e,Error(u(306,n,""))}}return n;case 0:return Ps(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,f=Cr(i,n.pendingProps),gm(e,n,i,f,a);case 3:e:{if(Qe(n,n.stateNode.containerInfo),e===null)throw Error(u(387));i=n.pendingProps;var h=n.memoizedState;f=h.element,ws(e,n),Ql(n,i,null,a);var v=n.memoizedState;if(i=v.cache,ja(n,At,i),i!==h.cache&&ps(n,[At],a,!0),Xl(),i=v.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ym(e,n,i,a);break e}else if(i!==f){f=kn(Error(u(424)),n),Fl(f),n=ym(e,n,i,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ft=_n(e.firstChild),Ht=n,Xe=!0,Ma=null,Rn=!0,a=hd(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(br(),i===f){n=da(e,n,a);break e}Ft(e,n,i,a)}n=n.child}return n;case 26:return _u(e,n),e===null?(a=Mp(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xe||(a=n.type,e=n.pendingProps,i=Qu(ve.current).createElement(a),i[de]=n,i[pe]=e,Yt(i,a,e),mt(i),n.stateNode=i):n.memoizedState=Mp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Mt(n),e===null&&Xe&&(i=n.stateNode=Dp(n.type,n.pendingProps,ve.current),Ht=n,Rn=!0,f=ft,Qa(n.type)?(jc=f,ft=_n(i.firstChild)):ft=f),Ft(e,n,n.pendingProps.children,a),_u(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xe&&((f=i=ft)&&(i=e1(i,n.type,n.pendingProps,Rn),i!==null?(n.stateNode=i,Ht=n,ft=_n(i.firstChild),Rn=!1,f=!0):f=!1),f||Oa(n)),Mt(n),f=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,i=h.children,Dc(f,h)?i=null:v!==null&&Dc(f,v)&&(n.flags|=32),n.memoizedState!==null&&(f=Rs(e,n,p0,null,null,a),di._currentValue=f),_u(e,n),Ft(e,n,i,a),n.child;case 6:return e===null&&Xe&&((e=a=ft)&&(a=t1(a,n.pendingProps,Rn),a!==null?(n.stateNode=a,Ht=n,ft=null,e=!0):e=!1),e||Oa(n)),null;case 13:return vm(e,n,a);case 4:return Qe(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=kr(n,null,i,a):Ft(e,n,i,a),n.child;case 11:return sm(e,n,n.type,n.pendingProps,a);case 7:return Ft(e,n,n.pendingProps,a),n.child;case 8:return Ft(e,n,n.pendingProps.children,a),n.child;case 12:return Ft(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,ja(n,n.type,i.value),Ft(e,n,i.children,a),n.child;case 9:return f=n.type._context,i=n.pendingProps.children,wr(n),f=Bt(f),i=i(f),n.flags|=1,Ft(e,n,i,a),n.child;case 14:return cm(e,n,n.type,n.pendingProps,a);case 15:return fm(e,n,n.type,n.pendingProps,a);case 19:return xm(e,n,a);case 31:return E0(e,n,a);case 22:return hm(e,n,a,n.pendingProps);case 24:return wr(n),i=Bt(At),e===null?(f=vs(),f===null&&(f=ot,h=gs(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),n.memoizedState={parent:i,cache:f},xs(n),ja(n,At,f)):((e.lanes&a)!==0&&(ws(e,n),Ql(n,null,null,a),Xl()),f=e.memoizedState,h=n.memoizedState,f.parent!==i?(f={parent:i,cache:i},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ja(n,At,i)):(i=h.cache,ja(n,At,i),i!==f.cache&&ps(n,[At],a,!0))),Ft(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function ma(e){e.flags|=4}function nc(e,n,a,i,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Pm())e.flags|=8192;else throw Tr=pu,bs}else e.flags&=-16777217}function Sm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Up(n))if(Pm())e.flags|=8192;else throw Tr=pu,bs}function Mu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cr():536870912,e.lanes|=n,ul|=n)}function Wl(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var f=e.child;f!==null;)a|=f.lanes|f.childLanes,i|=f.subtreeFlags&65011712,i|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)a|=f.lanes|f.childLanes,i|=f.subtreeFlags,i|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function k0(e,n,a){var i=n.pendingProps;switch(cs(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return ht(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ca(At),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hs())),ht(n),null;case 26:var f=n.type,h=n.memoizedState;return e===null?(ma(n),h!==null?(ht(n),Sm(n,h)):(ht(n),nc(n,f,null,i,a))):h?h!==e.memoizedState?(ma(n),ht(n),Sm(n,h)):(ht(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ma(n),ht(n),nc(n,f,e,i,a)),null;case 27:if(qt(n),a=ve.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return ht(n),null}e=oe.current,Pr(n)?td(n):(e=Dp(f,i,a),n.stateNode=e,ma(n))}return ht(n),null;case 5:if(qt(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return ht(n),null}if(h=oe.current,Pr(n))td(n);else{var v=Qu(ve.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof i.is=="string"?v.createElement("select",{is:i.is}):v.createElement("select"),i.multiple?h.multiple=!0:i.size&&(h.size=i.size);break;default:h=typeof i.is=="string"?v.createElement(f,{is:i.is}):v.createElement(f)}}h[de]=n,h[pe]=i;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;e:switch(Yt(h,f,i),f){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ma(n)}}return ht(n),nc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ma(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(u(166));if(e=ve.current,Pr(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,f=Ht,f!==null)switch(f.tag){case 27:case 5:i=f.memoizedProps}e[de]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||vp(e.nodeValue,a)),e||Oa(n,!0)}else e=Qu(e).createTextNode(i),e[de]=n,n.stateNode=e}return ht(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Pr(n),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[de]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),e=!1}else a=hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(mn(n),n):(mn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return ht(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Pr(n),i!==null&&i.dehydrated!==null){if(e===null){if(!f)throw Error(u(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(u(317));f[de]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),f=!1}else f=hs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(mn(n),n):(mn(n),null)}return mn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,f=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(f=i.alternate.memoizedState.cachePool.pool),h=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==f&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Mu(n,n.updateQueue),ht(n),null);case 4:return Je(),e===null&&Tc(n.stateNode.containerInfo),ht(n),null;case 10:return ca(n.type),ht(n),null;case 19:if(X(Et),i=n.memoizedState,i===null)return ht(n),null;if(f=(n.flags&128)!==0,h=i.rendering,h===null)if(f)Wl(i,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=bu(e),h!==null){for(n.flags|=128,Wl(i,!1),e=h.updateQueue,n.updateQueue=e,Mu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jh(a,e),a=a.sibling;return S(Et,Et.current&1|2),Xe&&oa(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&gt()>Uu&&(n.flags|=128,f=!0,Wl(i,!1),n.lanes=4194304)}else{if(!f)if(e=bu(h),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,Mu(n,e),Wl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!h.alternate&&!Xe)return ht(n),null}else 2*gt()-i.renderingStartTime>Uu&&a!==536870912&&(n.flags|=128,f=!0,Wl(i,!1),n.lanes=4194304);i.isBackwards?(h.sibling=n.child,n.child=h):(e=i.last,e!==null?e.sibling=h:n.child=h,i.last=h)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=gt(),e.sibling=null,a=Et.current,S(Et,f?a&1|2:a&1),Xe&&oa(n,i.treeForkCount),e):(ht(n),null);case 22:case 23:return mn(n),ks(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),a=n.updateQueue,a!==null&&Mu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&X(Sr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(At),ht(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function A0(e,n){switch(cs(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(At),Je(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 31:if(n.memoizedState!==null){if(mn(n),n.alternate===null)throw Error(u(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Et),null;case 4:return Je(),null;case 10:return ca(n.type),null;case 22:case 23:return mn(n),ks(),e!==null&&X(Sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(At),null;case 25:return null;default:return null}}function Em(e,n){switch(cs(n),n.tag){case 3:ca(At),Je();break;case 26:case 27:case 5:qt(n);break;case 4:Je();break;case 31:n.memoizedState!==null&&mn(n);break;case 13:mn(n);break;case 19:X(Et);break;case 10:ca(n.type);break;case 22:case 23:mn(n),ks(),e!==null&&X(Sr);break;case 24:ca(At)}}function ei(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var f=i.next;a=f;do{if((a.tag&e)===e){i=void 0;var h=a.create,v=a.inst;i=h(),v.destroy=i}a=a.next}while(a!==f)}}catch(w){rt(n,n.return,w)}}function Fa(e,n,a){try{var i=n.updateQueue,f=i!==null?i.lastEffect:null;if(f!==null){var h=f.next;i=h;do{if((i.tag&e)===e){var v=i.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,f=n;var _=a,Y=w;try{Y()}catch(J){rt(f,_,J)}}}i=i.next}while(i!==h)}}catch(J){rt(n,n.return,J)}}function Tm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{md(n,a)}catch(i){rt(e,e.return,i)}}}function km(e,n,a){a.props=Cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){rt(e,n,i)}}function ti(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(f){rt(e,n,f)}}function Qn(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(f){rt(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){rt(e,n,f)}else a.current=null}function Am(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(f){rt(e,e.return,f)}}function ac(e,n,a){try{var i=e.stateNode;P0(i,e.type,a,n),i[pe]=n}catch(f){rt(e,e.return,f)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(i!==4&&(i===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(lc(e,n,a),e=e.sibling;e!==null;)lc(e,n,a),e=e.sibling}function Ou(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ou(e,n,a),e=e.sibling;e!==null;)Ou(e,n,a),e=e.sibling}function Rm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Yt(n,i,a),n[de]=e,n[pe]=a}catch(h){rt(e,e.return,h)}}var pa=!1,Dt=!1,ic=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,jt=null;function C0(e,n){if(e=e.containerInfo,Cc=eo,e=Yh(e),Wo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var f=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,w=-1,_=-1,Y=0,J=0,te=e,G=null;t:for(;;){for(var P;te!==a||f!==0&&te.nodeType!==3||(w=v+f),te!==h||i!==0&&te.nodeType!==3||(_=v+i),te.nodeType===3&&(v+=te.nodeValue.length),(P=te.firstChild)!==null;)G=te,te=P;for(;;){if(te===e)break t;if(G===a&&++Y===f&&(w=v),G===h&&++J===i&&(_=v),(P=te.nextSibling)!==null)break;te=G,G=te.parentNode}te=P}a=w===-1||_===-1?null:{start:w,end:_}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:e,selectionRange:a},eo=!1,jt=n;jt!==null;)if(n=jt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,jt=e;else for(;jt!==null;){switch(n=jt,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)f=e[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,f=h.memoizedProps,h=h.memoizedState,i=a.stateNode;try{var be=Cr(a.type,f);e=i.getSnapshotBeforeUpdate(be,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(De){rt(a,a.return,De)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)zc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,jt=e;break}jt=n.return}}function _m(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ya(e,a),i&4&&ei(5,a);break;case 1:if(ya(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){rt(a,a.return,v)}else{var f=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){rt(a,a.return,v)}}i&64&&Tm(a),i&512&&ti(a,a.return);break;case 3:if(ya(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{md(e,n)}catch(v){rt(a,a.return,v)}}break;case 27:n===null&&i&4&&Rm(a);case 26:case 5:ya(e,a),n===null&&i&4&&Am(a),i&512&&ti(a,a.return);break;case 12:ya(e,a);break;case 31:ya(e,a),i&4&&Om(e,a);break;case 13:ya(e,a),i&4&&jm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=L0.bind(null,a),n1(e,a))));break;case 22:if(i=a.memoizedState!==null||pa,!i){n=n!==null&&n.memoizedState!==null||Dt,f=pa;var h=Dt;pa=i,(Dt=n)&&!h?va(e,a,(a.subtreeFlags&8772)!==0):ya(e,a),pa=f,Dt=h}break;case 30:break;default:ya(e,a)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pt=null,en=!1;function ga(e,n,a){for(a=a.child;a!==null;)Mm(e,n,a),a=a.sibling}function Mm(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:Dt||Qn(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Qn(a,n);var i=pt,f=en;Qa(a.type)&&(pt=a.stateNode,en=!1),ga(e,n,a),ci(a.stateNode),pt=i,en=f;break;case 5:Dt||Qn(a,n);case 6:if(i=pt,f=en,pt=null,ga(e,n,a),pt=i,en=f,pt!==null)if(en)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(a.stateNode)}catch(h){rt(a,n,h)}else try{pt.removeChild(a.stateNode)}catch(h){rt(a,n,h)}break;case 18:pt!==null&&(en?(e=pt,Tp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):Tp(pt,a.stateNode));break;case 4:i=pt,f=en,pt=a.stateNode.containerInfo,en=!0,ga(e,n,a),pt=i,en=f;break;case 0:case 11:case 14:case 15:Fa(2,a,n),Dt||Fa(4,a,n),ga(e,n,a);break;case 1:Dt||(Qn(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&km(a,n,i)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:Dt=(i=Dt)||a.memoizedState!==null,ga(e,n,a),Dt=i;break;default:ga(e,n,a)}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(a){rt(n,n.return,a)}}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){rt(n,n.return,a)}}function R0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dm),n;default:throw Error(u(435,e.tag))}}function ju(e,n){var a=R0(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var f=U0.bind(null,e,i);i.then(f,f)}})}function tn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var f=a[i],h=e,v=n,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(Qa(w.type)){pt=w.stateNode,en=!1;break e}break;case 5:pt=w.stateNode,en=!1;break e;case 3:case 4:pt=w.stateNode.containerInfo,en=!0;break e}w=w.return}if(pt===null)throw Error(u(160));Mm(h,v,f),pt=null,en=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nm(n,e),n=n.sibling}var Yn=null;function Nm(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tn(n,e),nn(e),i&4&&(Fa(3,e,e.return),ei(3,e),Fa(5,e,e.return));break;case 1:tn(n,e),nn(e),i&512&&(Dt||a===null||Qn(a,a.return)),i&64&&pa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var f=Yn;if(tn(n,e),nn(e),i&512&&(Dt||a===null||Qn(a,a.return)),i&4){var h=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,f=f.ownerDocument||f;t:switch(i){case"title":h=f.getElementsByTagName("title")[0],(!h||h[yt]||h[de]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(i),f.head.insertBefore(h,f.querySelector("head > title"))),Yt(h,i,a),h[de]=e,mt(h),i=h;break e;case"link":var v=Np("link","href",f).get(i+(a.href||""));if(v){for(var w=0;w<v.length;w++)if(h=v[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(w,1);break t}}h=f.createElement(i),Yt(h,i,a),f.head.appendChild(h);break;case"meta":if(v=Np("meta","content",f).get(i+(a.content||""))){for(w=0;w<v.length;w++)if(h=v[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(w,1);break t}}h=f.createElement(i),Yt(h,i,a),f.head.appendChild(h);break;default:throw Error(u(468,i))}h[de]=e,mt(h),i=h}e.stateNode=i}else Lp(f,e.type,e.stateNode);else e.stateNode=jp(f,i,e.memoizedProps);else h!==i?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,i===null?Lp(f,e.type,e.stateNode):jp(f,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ac(e,e.memoizedProps,a.memoizedProps)}break;case 27:tn(n,e),nn(e),i&512&&(Dt||a===null||Qn(a,a.return)),a!==null&&i&4&&ac(e,e.memoizedProps,a.memoizedProps);break;case 5:if(tn(n,e),nn(e),i&512&&(Dt||a===null||Qn(a,a.return)),e.flags&32){f=e.stateNode;try{Hr(f,"")}catch(be){rt(e,e.return,be)}}i&4&&e.stateNode!=null&&(f=e.memoizedProps,ac(e,f,a!==null?a.memoizedProps:f)),i&1024&&(ic=!0);break;case 6:if(tn(n,e),nn(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(be){rt(e,e.return,be)}}break;case 3:if(Ju=null,f=Yn,Yn=Pu(n.containerInfo),tn(n,e),Yn=f,nn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(n.containerInfo)}catch(be){rt(e,e.return,be)}ic&&(ic=!1,Lm(e));break;case 4:i=Yn,Yn=Pu(e.stateNode.containerInfo),tn(n,e),nn(e),Yn=i;break;case 12:tn(n,e),nn(e);break;case 31:tn(n,e),nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ju(e,i)));break;case 13:tn(n,e),nn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lu=gt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ju(e,i)));break;case 22:f=e.memoizedState!==null;var _=a!==null&&a.memoizedState!==null,Y=pa,J=Dt;if(pa=Y||f,Dt=J||_,tn(n,e),Dt=J,pa=Y,nn(e),i&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(a===null||_||pa||Dt||Rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){_=a=n;try{if(h=_.stateNode,f)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=_.stateNode;var te=_.memoizedProps.style,G=te!=null&&te.hasOwnProperty("display")?te.display:null;w.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(be){rt(_,_.return,be)}}}else if(n.tag===6){if(a===null){_=n;try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(be){rt(_,_.return,be)}}}else if(n.tag===18){if(a===null){_=n;try{var P=_.stateNode;f?kp(P,!0):kp(_.stateNode,!1)}catch(be){rt(_,_.return,be)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,ju(e,a))));break;case 19:tn(n,e),nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ju(e,i)));break;case 30:break;case 21:break;default:tn(n,e),nn(e)}}function nn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(Cm(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var f=a.stateNode,h=rc(e);Ou(e,h,f);break;case 5:var v=a.stateNode;a.flags&32&&(Hr(v,""),a.flags&=-33);var w=rc(e);Ou(e,w,v);break;case 3:case 4:var _=a.stateNode.containerInfo,Y=rc(e);lc(e,Y,_);break;default:throw Error(u(161))}}catch(J){rt(e,e.return,J)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ya(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_m(e,n.alternate,n),n=n.sibling}function Rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Rr(n);break;case 1:Qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&km(n,n.return,a),Rr(n);break;case 27:ci(n.stateNode);case 26:case 5:Qn(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,f=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:va(f,h,a),ei(4,h);break;case 1:if(va(f,h,a),i=h,f=i.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Y){rt(i,i.return,Y)}if(i=h,f=i.updateQueue,f!==null){var w=i.stateNode;try{var _=f.shared.hiddenCallbacks;if(_!==null)for(f.shared.hiddenCallbacks=null,f=0;f<_.length;f++)dd(_[f],w)}catch(Y){rt(i,i.return,Y)}}a&&v&64&&Tm(h),ti(h,h.return);break;case 27:Rm(h);case 26:case 5:va(f,h,a),a&&i===null&&v&4&&Am(h),ti(h,h.return);break;case 12:va(f,h,a);break;case 31:va(f,h,a),a&&v&4&&Om(f,h);break;case 13:va(f,h,a),a&&v&4&&jm(f,h);break;case 22:h.memoizedState===null&&va(f,h,a),ti(h,h.return);break;case 30:break;default:va(f,h,a)}n=n.sibling}}function uc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yl(a))}function oc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e))}function qn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(e,n,a,i),n=n.sibling}function Um(e,n,a,i){var f=n.flags;switch(n.tag){case 0:case 11:case 15:qn(e,n,a,i),f&2048&&ei(9,n);break;case 1:qn(e,n,a,i);break;case 3:qn(e,n,a,i),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yl(e)));break;case 12:if(f&2048){qn(e,n,a,i),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,w=h.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){rt(n,n.return,_)}}else qn(e,n,a,i);break;case 31:qn(e,n,a,i);break;case 13:qn(e,n,a,i);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?qn(e,n,a,i):ni(e,n):h._visibility&2?qn(e,n,a,i):(h._visibility|=2,rl(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),f&2048&&uc(v,n);break;case 24:qn(e,n,a,i),f&2048&&oc(n.alternate,n);break;default:qn(e,n,a,i)}}function rl(e,n,a,i,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,w=a,_=i,Y=v.flags;switch(v.tag){case 0:case 11:case 15:rl(h,v,w,_,f),ei(8,v);break;case 23:break;case 22:var J=v.stateNode;v.memoizedState!==null?J._visibility&2?rl(h,v,w,_,f):ni(h,v):(J._visibility|=2,rl(h,v,w,_,f)),f&&Y&2048&&uc(v.alternate,v);break;case 24:rl(h,v,w,_,f),f&&Y&2048&&oc(v.alternate,v);break;default:rl(h,v,w,_,f)}n=n.sibling}}function ni(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,f=i.flags;switch(i.tag){case 22:ni(a,i),f&2048&&uc(i.alternate,i);break;case 24:ni(a,i),f&2048&&oc(i.alternate,i);break;default:ni(a,i)}n=n.sibling}}var ai=8192;function ll(e,n,a){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Hm(e,n,a),e=e.sibling}function Hm(e,n,a){switch(e.tag){case 26:ll(e,n,a),e.flags&ai&&e.memoizedState!==null&&m1(a,Yn,e.memoizedState,e.memoizedProps);break;case 5:ll(e,n,a);break;case 3:case 4:var i=Yn;Yn=Pu(e.stateNode.containerInfo),ll(e,n,a),Yn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ai,ai=16777216,ll(e,n,a),ai=i):ll(e,n,a));break;default:ll(e,n,a)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ri(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];jt=i,Ym(i,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nu(e)):ri(e);break;default:ri(e)}}function Nu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];jt=i,Ym(i,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Nu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nu(n));break;default:Nu(n)}e=e.sibling}}function Ym(e,n){for(;jt!==null;){var a=jt;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,jt=i;else e:for(a=e;jt!==null;){i=jt;var f=i.sibling,h=i.return;if(zm(i),i===a){jt=null;break e}if(f!==null){f.return=h,jt=f;break e}jt=h}}}var D0={getCacheForType:function(e){var n=Bt(At),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Bt(At).controller.signal}},_0=typeof WeakMap=="function"?WeakMap:Map,et=0,ot=null,Ue=null,Fe=0,at=0,pn=null,Ya=!1,il=!1,sc=!1,ba=0,wt=0,qa=0,Dr=0,cc=0,gn=0,ul=0,li=null,an=null,fc=!1,Lu=0,qm=0,Uu=1/0,Hu=null,Ia=null,zt=0,Ga=null,ol=null,xa=0,hc=0,dc=null,Im=null,ii=0,mc=null;function yn(){return(et&2)!==0&&Fe!==0?Fe&-Fe:H.T!==null?xc():fe()}function Gm(){if(gn===0)if((Fe&536870912)===0||Xe){var e=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),gn=e}else gn=536870912;return e=dn.current,e!==null&&(e.flags|=32),gn}function rn(e,n,a){(e===ot&&(at===2||at===9)||e.cancelPendingCommit!==null)&&(sl(e,0),Va(e,Fe,gn,!1)),Da(e,a),((et&2)===0||e!==ot)&&(e===ot&&((et&2)===0&&(Dr|=a),wt===4&&Va(e,Fe,gn,!1)),Pn(e))}function Vm(e,n,a){if((et&6)!==0)throw Error(u(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||sr(e,n),f=i?O0(e,n):gc(e,n,!0),h=i;do{if(f===0){il&&!i&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!z0(a)){f=gc(e,n,!1),h=!1;continue}if(f===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var w=e;f=li;var _=w.current.memoizedState.isDehydrated;if(_&&(sl(w,v).flags|=256),v=gc(w,v,!1),v!==2){if(sc&&!_){w.errorRecoveryDisabledLanes|=h,Dr|=h,f=4;break e}h=an,an=f,h!==null&&(an===null?an=h:an.push.apply(an,h))}f=v}if(h=!1,f!==2)continue}}if(f===1){sl(e,0),Va(e,n,0,!0);break}e:{switch(i=e,h=f,h){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Va(i,n,gn,!Ya);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(f=Lu+300-gt(),10<f)){if(Va(i,n,gn,!Ya),or(i,0,!0)!==0)break e;xa=n,i.timeoutHandle=Sp(Xm.bind(null,i,a,an,Hu,fc,n,gn,Dr,ul,Ya,h,"Throttled",-0,0),f);break e}Xm(i,a,an,Hu,fc,n,gn,Dr,ul,Ya,h,null,-0,0)}}break}while(!0);Pn(e)}function Xm(e,n,a,i,f,h,v,w,_,Y,J,te,G,P){if(e.timeoutHandle=-1,te=n.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},Hm(n,h,te);var be=(h&62914560)===h?Lu-gt():(h&4194048)===h?qm-gt():0;if(be=p1(te,be),be!==null){xa=h,e.cancelPendingCommit=be(ep.bind(null,e,n,h,a,i,f,v,w,_,J,te,null,G,P)),Va(e,h,v,!Y);return}}ep(e,n,h,a,i,f,v,w,_)}function z0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var f=a[i],h=f.getSnapshot;f=f.value;try{if(!fn(h(),f))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,i){n&=~cc,n&=~Dr,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var f=n;0<f;){var h=31-tt(f),v=1<<h;i[h]=-1,f&=~v}a!==0&&Zi(e,a,n)}function Bu(){return(et&6)===0?(ui(0),!1):!0}function pc(){if(Ue!==null){if(at===0)var e=Ue.return;else e=Ue,sa=xr=null,zs(e),Wr=null,Il=0,e=Ue;for(;e!==null;)Em(e.alternate,e),e=e.return;Ue=null}}function sl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,pc(),ot=e,Ue=a=ua(e.current,null),Fe=n,at=0,pn=null,Ya=!1,il=sr(e,n),sc=!1,ul=gn=cc=Dr=qa=wt=0,an=li=null,fc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var f=31-tt(i),h=1<<f;n|=e[f],i&=~h}return ba=n,iu(),a}function Qm(e,n){Oe=null,H.H=$l,n===Kr||n===mu?(n=sd(),at=3):n===bs?(n=sd(),at=4):at=n===Qs?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pn=n,Ue===null&&(wt=1,Ru(e,kn(n,e.current)))}function Pm(){var e=dn.current;return e===null?!0:(Fe&4194048)===Fe?Dn===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Dn:!1}function Zm(){var e=H.H;return H.H=$l,e===null?$l:e}function Jm(){var e=H.A;return H.A=D0,e}function Fu(){wt=4,Ya||(Fe&4194048)!==Fe&&dn.current!==null||(il=!0),(qa&134217727)===0&&(Dr&134217727)===0||ot===null||Va(ot,Fe,gn,!1)}function gc(e,n,a){var i=et;et|=2;var f=Zm(),h=Jm();(ot!==e||Fe!==n)&&(Hu=null,sl(e,n)),n=!1;var v=wt;e:do try{if(at!==0&&Ue!==null){var w=Ue,_=pn;switch(at){case 8:pc(),v=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(n=!0);var Y=at;if(at=0,pn=null,cl(e,w,_,Y),a&&il){v=0;break e}break;default:Y=at,at=0,pn=null,cl(e,w,_,Y)}}M0(),v=wt;break}catch(J){Qm(e,J)}while(!0);return n&&e.shellSuspendCounter++,sa=xr=null,et=i,H.H=f,H.A=h,Ue===null&&(ot=null,Fe=0,iu()),v}function M0(){for(;Ue!==null;)$m(Ue)}function O0(e,n){var a=et;et|=2;var i=Zm(),f=Jm();ot!==e||Fe!==n?(Hu=null,Uu=gt()+500,sl(e,n)):il=sr(e,n);e:do try{if(at!==0&&Ue!==null){n=Ue;var h=pn;t:switch(at){case 1:at=0,pn=null,cl(e,n,h,1);break;case 2:case 9:if(ud(h)){at=0,pn=null,Km(n);break}n=function(){at!==2&&at!==9||ot!==e||(at=7),Pn(e)},h.then(n,n);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:ud(h)?(at=0,pn=null,Km(n)):(at=0,pn=null,cl(e,n,h,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var w=Ue;if(v?Up(v):w.stateNode.complete){at=0,pn=null;var _=w.sibling;if(_!==null)Ue=_;else{var Y=w.return;Y!==null?(Ue=Y,Yu(Y)):Ue=null}break t}}at=0,pn=null,cl(e,n,h,5);break;case 6:at=0,pn=null,cl(e,n,h,6);break;case 8:pc(),wt=6;break e;default:throw Error(u(462))}}j0();break}catch(J){Qm(e,J)}while(!0);return sa=xr=null,H.H=i,H.A=f,et=a,Ue!==null?0:(ot=null,Fe=0,iu(),wt)}function j0(){for(;Ue!==null&&!Cl();)$m(Ue)}function $m(e){var n=wm(e.alternate,e,ba);e.memoizedProps=e.pendingProps,n===null?Yu(e):Ue=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=pm(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=pm(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:zs(n);default:Em(a,n),n=Ue=Jh(n,ba),n=wm(a,n,ba)}e.memoizedProps=e.pendingProps,n===null?Yu(e):Ue=n}function cl(e,n,a,i){sa=xr=null,zs(n),Wr=null,Il=0;var f=n.return;try{if(S0(e,f,n,a,Fe)){wt=1,Ru(e,kn(a,e.current)),Ue=null;return}}catch(h){if(f!==null)throw Ue=f,h;wt=1,Ru(e,kn(a,e.current)),Ue=null;return}n.flags&32768?(Xe||i===1?e=!0:il||(Fe&536870912)!==0?e=!1:(Ya=e=!0,(i===2||i===9||i===3||i===6)&&(i=dn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Wm(n,e)):Yu(n)}function Yu(e){var n=e;do{if((n.flags&32768)!==0){Wm(n,Ya);return}e=n.return;var a=k0(n.alternate,n,ba);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);wt===0&&(wt=5)}function Wm(e,n){do{var a=A0(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);wt=6,Ue=null}function ep(e,n,a,i,f,h,v,w,_){e.cancelPendingCommit=null;do qu();while(zt!==0);if((et&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(h=n.lanes|n.childLanes,h|=rs,Uo(e,a,h,v,w,_),e===ot&&(Ue=ot=null,Fe=0),ol=n,Ga=e,xa=a,hc=h,dc=f,Im=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,H0(Ee,function(){return lp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=H.T,H.T=null,f=re.p,re.p=2,v=et,et|=4;try{C0(e,n,a)}finally{et=v,re.p=f,H.T=i}}zt=1,tp(),np(),ap()}}function tp(){if(zt===1){zt=0;var e=Ga,n=ol,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var i=re.p;re.p=2;var f=et;et|=4;try{Nm(n,e);var h=Rc,v=Yh(e.containerInfo),w=h.focusedElem,_=h.selectionRange;if(v!==w&&w&&w.ownerDocument&&Fh(w.ownerDocument.documentElement,w)){if(_!==null&&Wo(w)){var Y=_.start,J=_.end;if(J===void 0&&(J=Y),"selectionStart"in w)w.selectionStart=Y,w.selectionEnd=Math.min(J,w.value.length);else{var te=w.ownerDocument||document,G=te&&te.defaultView||window;if(G.getSelection){var P=G.getSelection(),be=w.textContent.length,De=Math.min(_.start,be),ut=_.end===void 0?De:Math.min(_.end,be);!P.extend&&De>ut&&(v=ut,ut=De,De=v);var U=Bh(w,De),N=Bh(w,ut);if(U&&N&&(P.rangeCount!==1||P.anchorNode!==U.node||P.anchorOffset!==U.offset||P.focusNode!==N.node||P.focusOffset!==N.offset)){var F=te.createRange();F.setStart(U.node,U.offset),P.removeAllRanges(),De>ut?(P.addRange(F),P.extend(N.node,N.offset)):(F.setEnd(N.node,N.offset),P.addRange(F))}}}}for(te=[],P=w;P=P.parentNode;)P.nodeType===1&&te.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<te.length;w++){var ee=te[w];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}eo=!!Cc,Rc=Cc=null}finally{et=f,re.p=i,H.T=a}}e.current=n,zt=2}}function np(){if(zt===2){zt=0;var e=Ga,n=ol,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var i=re.p;re.p=2;var f=et;et|=4;try{_m(e,n.alternate,n)}finally{et=f,re.p=i,H.T=a}}zt=3}}function ap(){if(zt===4||zt===3){zt=0,Rl();var e=Ga,n=ol,a=xa,i=Im;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?zt=5:(zt=0,ol=Ga=null,rp(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ia=null),ue(a),n=n.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=H.T,f=re.p,re.p=2,H.T=null;try{for(var h=e.onRecoverableError,v=0;v<i.length;v++){var w=i[v];h(w.value,{componentStack:w.stack})}}finally{H.T=n,re.p=f}}(xa&3)!==0&&qu(),Pn(e),f=e.pendingLanes,(a&261930)!==0&&(f&42)!==0?e===mc?ii++:(ii=0,mc=e):ii=0,ui(0)}}function rp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yl(n)))}function qu(){return tp(),np(),ap(),lp()}function lp(){if(zt!==5)return!1;var e=Ga,n=hc;hc=0;var a=ue(xa),i=H.T,f=re.p;try{re.p=32>a?32:a,H.T=null,a=dc,dc=null;var h=Ga,v=xa;if(zt=0,ol=Ga=null,xa=0,(et&6)!==0)throw Error(u(331));var w=et;if(et|=4,Fm(h.current),Um(h,h.current,v,a),et=w,ui(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Nt,h)}catch{}return!0}finally{re.p=f,H.T=i,rp(e,n)}}function ip(e,n,a){n=kn(a,n),n=Xs(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Da(e,2),Pn(e))}function rt(e,n,a){if(e.tag===3)ip(e,e,a);else for(;n!==null;){if(n.tag===3){ip(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=kn(a,e),a=um(2),i=Ua(n,a,2),i!==null&&(om(a,i,n,e),Da(i,2),Pn(i));break}}n=n.return}}function yc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new _0;var f=new Set;i.set(n,f)}else f=i.get(n),f===void 0&&(f=new Set,i.set(n,f));f.has(a)||(sc=!0,f.add(a),e=N0.bind(null,e,n,a),n.then(e,e))}function N0(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ot===e&&(Fe&a)===a&&(wt===4||wt===3&&(Fe&62914560)===Fe&&300>gt()-Lu?(et&2)===0&&sl(e,0):cc|=a,ul===Fe&&(ul=0)),Pn(e)}function up(e,n){n===0&&(n=cr()),e=yr(e,n),e!==null&&(Da(e,n),Pn(e))}function L0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),up(e,a)}function U0(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,f=e.memoizedState;f!==null&&(a=f.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(n),up(e,a)}function H0(e,n){return Aa(e,n)}var Iu=null,fl=null,vc=!1,Gu=!1,bc=!1,Xa=0;function Pn(e){e!==fl&&e.next===null&&(fl===null?Iu=fl=e:fl=fl.next=e),Gu=!0,vc||(vc=!0,F0())}function ui(e,n){if(!bc&&Gu){bc=!0;do for(var a=!1,i=Iu;i!==null;){if(e!==0){var f=i.pendingLanes;if(f===0)var h=0;else{var v=i.suspendedLanes,w=i.pingedLanes;h=(1<<31-tt(42|e)+1)-1,h&=f&~(v&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,fp(i,h))}else h=Fe,h=or(i,i===ot?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||sr(i,h)||(a=!0,fp(i,h));i=i.next}while(a);bc=!1}}function B0(){op()}function op(){Gu=vc=!1;var e=0;Xa!==0&&J0()&&(e=Xa);for(var n=gt(),a=null,i=Iu;i!==null;){var f=i.next,h=sp(i,n);h===0?(i.next=null,a===null?Iu=f:a.next=f,f===null&&(fl=a)):(a=i,(e!==0||(h&3)!==0)&&(Gu=!0)),i=f}zt!==0&&zt!==5||ui(e),Xa!==0&&(Xa=0)}function sp(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-tt(h),w=1<<v,_=f[v];_===-1?((w&a)===0||(w&i)!==0)&&(f[v]=Pi(w,n)):_<=n&&(e.expiredLanes|=w),h&=~w}if(n=ot,a=Fe,a=or(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(at===2||at===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||sr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&ir(i),ue(a)){case 2:case 8:a=ce;break;case 32:a=Ee;break;case 268435456:a=$e;break;default:a=Ee}return i=cp.bind(null,e),a=Aa(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&ir(i),e.callbackPriority=2,e.callbackNode=null,2}function cp(e,n){if(zt!==0&&zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(qu()&&e.callbackNode!==a)return null;var i=Fe;return i=or(e,e===ot?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Vm(e,i,n),sp(e,gt()),e.callbackNode!=null&&e.callbackNode===a?cp.bind(null,e):null)}function fp(e,n){if(qu())return null;Vm(e,n,!0)}function F0(){K0(function(){(et&6)!==0?Aa(K,B0):op()})}function xc(){if(Xa===0){var e=Jr;e===0&&(e=na,na<<=1,(na&261888)===0&&(na=256)),Xa=e}return Xa}function hp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(""+e)}function dp(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Y0(e,n,a,i,f){if(n==="submit"&&a&&a.stateNode===f){var h=hp((f[pe]||null).action),v=i.submitter;v&&(n=(n=v[pe]||null)?hp(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var w=new nu("action","action",null,i,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xa!==0){var _=v?dp(f,v):new FormData(f);Fs(a,{pending:!0,data:_,method:f.method,action:h},null,_)}}else typeof h=="function"&&(w.preventDefault(),_=v?dp(f,v):new FormData(f),Fs(a,{pending:!0,data:_,method:f.method,action:h},h,_))},currentTarget:f}]})}}for(var wc=0;wc<as.length;wc++){var Sc=as[wc],q0=Sc.toLowerCase(),I0=Sc[0].toUpperCase()+Sc.slice(1);Fn(q0,"on"+I0)}Fn(Gh,"onAnimationEnd"),Fn(Vh,"onAnimationIteration"),Fn(Xh,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(l0,"onTransitionRun"),Fn(i0,"onTransitionStart"),Fn(u0,"onTransitionCancel"),Fn(Qh,"onTransitionEnd"),Sn("onMouseEnter",["mouseout","mouseover"]),Sn("onMouseLeave",["mouseout","mouseover"]),Sn("onPointerEnter",["pointerout","pointerover"]),Sn("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function mp(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],f=i.event;i=i.listeners;e:{var h=void 0;if(n)for(var v=i.length-1;0<=v;v--){var w=i[v],_=w.instance,Y=w.currentTarget;if(w=w.listener,_!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=Y;try{h(f)}catch(J){lu(J)}f.currentTarget=null,h=_}else for(v=0;v<i.length;v++){if(w=i[v],_=w.instance,Y=w.currentTarget,w=w.listener,_!==h&&f.isPropagationStopped())break e;h=w,f.currentTarget=Y;try{h(f)}catch(J){lu(J)}f.currentTarget=null,h=_}}}}function He(e,n){var a=n[Ce];a===void 0&&(a=n[Ce]=new Set);var i=e+"__bubble";a.has(i)||(pp(n,e,2,!1),a.add(i))}function Ec(e,n,a){var i=0;n&&(i|=4),pp(a,e,i,n)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function Tc(e){if(!e[Vu]){e[Vu]=!0,Un.forEach(function(a){a!=="selectionchange"&&(G0.has(a)||Ec(a,!1,e),Ec(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vu]||(n[Vu]=!0,Ec("selectionchange",!1,n))}}function pp(e,n,a,i){switch(Gp(n)){case 2:var f=v1;break;case 8:f=b1;break;default:f=Bc}a=f.bind(null,n,a,e),f=void 0,!Go||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),i?f!==void 0?e.addEventListener(n,a,{capture:!0,passive:f}):e.addEventListener(n,a,!0):f!==void 0?e.addEventListener(n,a,{passive:f}):e.addEventListener(n,a,!1)}function kc(e,n,a,i,f){var h=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var v=i.tag;if(v===3||v===4){var w=i.stateNode.containerInfo;if(w===f)break;if(v===4)for(v=i.return;v!==null;){var _=v.tag;if((_===3||_===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;w!==null;){if(v=bt(w),v===null)return;if(_=v.tag,_===5||_===6||_===26||_===27){i=h=v;continue e}w=w.parentNode}}i=i.return}xh(function(){var Y=h,J=qo(a),te=[];e:{var G=Ph.get(e);if(G!==void 0){var P=nu,be=e;switch(e){case"keypress":if(eu(a)===0)break e;case"keydown":case"keyup":P=Ub;break;case"focusin":be="focus",P=Po;break;case"focusout":be="blur",P=Po;break;case"beforeblur":case"afterblur":P=Po;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=kb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Fb;break;case Gh:case Vh:case Xh:P=Rb;break;case Qh:P=qb;break;case"scroll":case"scrollend":P=Eb;break;case"wheel":P=Gb;break;case"copy":case"cut":case"paste":P=_b;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=kh;break;case"toggle":case"beforetoggle":P=Xb}var De=(n&4)!==0,ut=!De&&(e==="scroll"||e==="scrollend"),U=De?G!==null?G+"Capture":null:G;De=[];for(var N=Y,F;N!==null;){var ee=N;if(F=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||F===null||U===null||(ee=_l(N,U),ee!=null&&De.push(si(N,ee,F))),ut)break;N=N.return}0<De.length&&(G=new P(G,be,null,a,J),te.push({event:G,listeners:De}))}}if((n&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",G&&a!==Yo&&(be=a.relatedTarget||a.fromElement)&&(bt(be)||be[we]))break e;if((P||G)&&(G=J.window===J?J:(G=J.ownerDocument)?G.defaultView||G.parentWindow:window,P?(be=a.relatedTarget||a.toElement,P=Y,be=be?bt(be):null,be!==null&&(ut=s(be),De=be.tag,be!==ut||De!==5&&De!==27&&De!==6)&&(be=null)):(P=null,be=Y),P!==be)){if(De=Eh,ee="onMouseLeave",U="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(De=kh,ee="onPointerLeave",U="onPointerEnter",N="pointer"),ut=P==null?G:Ot(P),F=be==null?G:Ot(be),G=new De(ee,N+"leave",P,a,J),G.target=ut,G.relatedTarget=F,ee=null,bt(J)===Y&&(De=new De(U,N+"enter",be,a,J),De.target=F,De.relatedTarget=ut,ee=De),ut=ee,P&&be)t:{for(De=V0,U=P,N=be,F=0,ee=U;ee;ee=De(ee))F++;ee=0;for(var ke=N;ke;ke=De(ke))ee++;for(;0<F-ee;)U=De(U),F--;for(;0<ee-F;)N=De(N),ee--;for(;F--;){if(U===N||N!==null&&U===N.alternate){De=U;break t}U=De(U),N=De(N)}De=null}else De=null;P!==null&&gp(te,G,P,De,!1),be!==null&&ut!==null&&gp(te,ut,be,De,!0)}}e:{if(G=Y?Ot(Y):window,P=G.nodeName&&G.nodeName.toLowerCase(),P==="select"||P==="input"&&G.type==="file")var Ke=Oh;else if(zh(G))if(jh)Ke=n0;else{Ke=e0;var xe=Wb}else P=G.nodeName,!P||P.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?Y&&Fo(Y.elementType)&&(Ke=Oh):Ke=t0;if(Ke&&(Ke=Ke(e,Y))){Mh(te,Ke,a,J);break e}xe&&xe(e,G,Y),e==="focusout"&&Y&&G.type==="number"&&Y.memoizedProps.value!=null&&Bo(G,"number",G.value)}switch(xe=Y?Ot(Y):window,e){case"focusin":(zh(xe)||xe.contentEditable==="true")&&(qr=xe,es=Y,Hl=null);break;case"focusout":Hl=es=qr=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,qh(te,a,J);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":qh(te,a,J)}var je;if(Jo)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Yr?Dh(e,a)&&(Ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ye="onCompositionStart");Ye&&(Ah&&a.locale!=="ko"&&(Yr||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Yr&&(je=wh()):(_a=J,Vo="value"in _a?_a.value:_a.textContent,Yr=!0)),xe=Xu(Y,Ye),0<xe.length&&(Ye=new Th(Ye,e,null,a,J),te.push({event:Ye,listeners:xe}),je?Ye.data=je:(je=_h(a),je!==null&&(Ye.data=je)))),(je=Pb?Zb(e,a):Jb(e,a))&&(Ye=Xu(Y,"onBeforeInput"),0<Ye.length&&(xe=new Th("onBeforeInput","beforeinput",null,a,J),te.push({event:xe,listeners:Ye}),xe.data=je)),Y0(te,e,Y,a,J)}mp(te,n)})}function si(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xu(e,n){for(var a=n+"Capture",i=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=_l(e,a),f!=null&&i.unshift(si(e,f,h)),f=_l(e,n),f!=null&&i.push(si(e,f,h))),e.tag===3)return i;e=e.return}return[]}function V0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gp(e,n,a,i,f){for(var h=n._reactName,v=[];a!==null&&a!==i;){var w=a,_=w.alternate,Y=w.stateNode;if(w=w.tag,_!==null&&_===i)break;w!==5&&w!==26&&w!==27||Y===null||(_=Y,f?(Y=_l(a,h),Y!=null&&v.unshift(si(a,Y,_))):f||(Y=_l(a,h),Y!=null&&v.push(si(a,Y,_)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var X0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function yp(e){return(typeof e=="string"?e:""+e).replace(X0,`
`).replace(Q0,"")}function vp(e,n){return n=yp(n),yp(e)===n}function it(e,n,a,i,f,h){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Hr(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Hr(e,""+i);break;case"className":Bn(e,"class",i);break;case"tabIndex":Bn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(e,a,i);break;case"style":vh(e,i,h);break;case"data":if(n!=="object"){Bn(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ki(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&it(e,n,"name",f.name,f,null),it(e,n,"formEncType",f.formEncType,f,null),it(e,n,"formMethod",f.formMethod,f,null),it(e,n,"formTarget",f.formTarget,f,null)):(it(e,n,"encType",f.encType,f,null),it(e,n,"method",f.method,f,null),it(e,n,"target",f.target,f,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ki(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=la);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(f.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Ki(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":He("beforetoggle",e),He("toggle",e),St(e,"popover",i);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":St(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wb.get(a)||a,St(e,a,i))}}function Ac(e,n,a,i,f,h){switch(a){case"style":vh(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(f.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Hr(e,i):(typeof i=="number"||typeof i=="bigint")&&Hr(e,""+i);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"onClick":i!=null&&(e.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),n=a.slice(2,f?a.length-7:void 0),h=e[pe]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,f),typeof i=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,f);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):St(e,a,i)}}}function Yt(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var i=!1,f=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":i=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:it(e,n,h,v,a,null)}}f&&it(e,n,"srcSet",a.srcSet,a,null),i&&it(e,n,"src",a.src,a,null);return;case"input":He("invalid",e);var w=h=v=f=null,_=null,Y=null;for(i in a)if(a.hasOwnProperty(i)){var J=a[i];if(J!=null)switch(i){case"name":f=J;break;case"type":v=J;break;case"checked":_=J;break;case"defaultChecked":Y=J;break;case"value":h=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(u(137,n));break;default:it(e,n,i,J,a,null)}}mh(e,h,w,_,Y,v,f,!1);return;case"select":He("invalid",e),i=v=h=null;for(f in a)if(a.hasOwnProperty(f)&&(w=a[f],w!=null))switch(f){case"value":h=w;break;case"defaultValue":v=w;break;case"multiple":i=w;default:it(e,n,f,w,a,null)}n=h,a=v,e.multiple=!!i,n!=null?Ur(e,!!i,n,!1):a!=null&&Ur(e,!!i,a,!0);return;case"textarea":He("invalid",e),h=f=i=null;for(v in a)if(a.hasOwnProperty(v)&&(w=a[v],w!=null))switch(v){case"value":i=w;break;case"defaultValue":f=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(91));break;default:it(e,n,v,w,a,null)}gh(e,i,f,h);return;case"option":for(_ in a)a.hasOwnProperty(_)&&(i=a[_],i!=null)&&(_==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":it(e,n,_,i,a,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(i=0;i<oi.length;i++)He(oi[i],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(i=a[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:it(e,n,Y,i,a,null)}return;default:if(Fo(n)){for(J in a)a.hasOwnProperty(J)&&(i=a[J],i!==void 0&&Ac(e,n,J,i,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(i=a[w],i!=null&&it(e,n,w,i,a,null))}function P0(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,v=null,w=null,_=null,Y=null,J=null;for(P in a){var te=a[P];if(a.hasOwnProperty(P)&&te!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":_=te;default:i.hasOwnProperty(P)||it(e,n,P,null,i,te)}}for(var G in i){var P=i[G];if(te=a[G],i.hasOwnProperty(G)&&(P!=null||te!=null))switch(G){case"type":h=P;break;case"name":f=P;break;case"checked":Y=P;break;case"defaultChecked":J=P;break;case"value":v=P;break;case"defaultValue":w=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(u(137,n));break;default:P!==te&&it(e,n,G,P,i,te)}}Ho(e,v,w,_,Y,J,h,f);return;case"select":P=v=w=G=null;for(h in a)if(_=a[h],a.hasOwnProperty(h)&&_!=null)switch(h){case"value":break;case"multiple":P=_;default:i.hasOwnProperty(h)||it(e,n,h,null,i,_)}for(f in i)if(h=i[f],_=a[f],i.hasOwnProperty(f)&&(h!=null||_!=null))switch(f){case"value":G=h;break;case"defaultValue":w=h;break;case"multiple":v=h;default:h!==_&&it(e,n,f,h,i,_)}n=w,a=v,i=P,G!=null?Ur(e,!!a,G,!1):!!i!=!!a&&(n!=null?Ur(e,!!a,n,!0):Ur(e,!!a,a?[]:"",!1));return;case"textarea":P=G=null;for(w in a)if(f=a[w],a.hasOwnProperty(w)&&f!=null&&!i.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:it(e,n,w,null,i,f)}for(v in i)if(f=i[v],h=a[v],i.hasOwnProperty(v)&&(f!=null||h!=null))switch(v){case"value":G=f;break;case"defaultValue":P=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:f!==h&&it(e,n,v,f,i,h)}ph(e,G,P);return;case"option":for(var be in a)G=a[be],a.hasOwnProperty(be)&&G!=null&&!i.hasOwnProperty(be)&&(be==="selected"?e.selected=!1:it(e,n,be,null,i,G));for(_ in i)G=i[_],P=a[_],i.hasOwnProperty(_)&&G!==P&&(G!=null||P!=null)&&(_==="selected"?e.selected=G&&typeof G!="function"&&typeof G!="symbol":it(e,n,_,G,i,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in a)G=a[De],a.hasOwnProperty(De)&&G!=null&&!i.hasOwnProperty(De)&&it(e,n,De,null,i,G);for(Y in i)if(G=i[Y],P=a[Y],i.hasOwnProperty(Y)&&G!==P&&(G!=null||P!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(u(137,n));break;default:it(e,n,Y,G,i,P)}return;default:if(Fo(n)){for(var ut in a)G=a[ut],a.hasOwnProperty(ut)&&G!==void 0&&!i.hasOwnProperty(ut)&&Ac(e,n,ut,void 0,i,G);for(J in i)G=i[J],P=a[J],!i.hasOwnProperty(J)||G===P||G===void 0&&P===void 0||Ac(e,n,J,G,i,P);return}}for(var U in a)G=a[U],a.hasOwnProperty(U)&&G!=null&&!i.hasOwnProperty(U)&&it(e,n,U,null,i,G);for(te in i)G=i[te],P=a[te],!i.hasOwnProperty(te)||G===P||G==null&&P==null||it(e,n,te,G,i,P)}function bp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var f=a[i],h=f.transferSize,v=f.initiatorType,w=f.duration;if(h&&w&&bp(v)){for(v=0,w=f.responseEnd,i+=1;i<a.length;i++){var _=a[i],Y=_.startTime;if(Y>w)break;var J=_.transferSize,te=_.initiatorType;J&&bp(te)&&(_=_.responseEnd,v+=J*(_<w?1:(w-Y)/(_-Y)))}if(--i,n+=8*(h+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cc=null,Rc=null;function Qu(e){return e.nodeType===9?e:e.ownerDocument}function xp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Dc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var _c=null;function J0(){var e=window.event;return e&&e.type==="popstate"?e===_c?!1:(_c=e,!0):(_c=null,!1)}var Sp=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(e){return Ep.resolve(null).then(e).catch(W0)}:Sp;function W0(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function Tp(e,n){var a=n,i=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(f),pl(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ci(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ci(a);for(var h=a.firstChild;h;){var v=h.nextSibling,w=h.nodeName;h[yt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&ci(e.ownerDocument.body);a=f}while(a);pl(n)}function kp(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function zc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":zc(a),vt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function e1(e,n,a,i){for(;e.nodeType===1;){var f=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=_n(e.nextSibling),e===null)break}return null}function t1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_n(e.nextSibling),e===null))return null;return e}function Ap(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_n(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function n1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function _n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jc=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _n(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Rp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Dp(e,n,a){switch(n=Qu(a),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ci(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vt(e)}var zn=new Map,_p=new Set;function Pu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=re.d;re.d={f:a1,r:r1,D:l1,C:i1,L:u1,m:o1,X:c1,S:s1,M:f1};function a1(){var e=wa.f(),n=Bu();return e||n}function r1(e){var n=Ie(e);n!==null&&n.tag===5&&n.type==="form"?Qd(n):wa.r(e)}var hl=typeof document>"u"?null:document;function zp(e,n,a){var i=hl;if(i&&typeof n=="string"&&n){var f=En(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),_p.has(f)||(_p.add(f),e={rel:e,crossOrigin:a,href:n},i.querySelector(f)===null&&(n=i.createElement("link"),Yt(n,"link",e),mt(n),i.head.appendChild(n)))}}function l1(e){wa.D(e),zp("dns-prefetch",e,null)}function i1(e,n){wa.C(e,n),zp("preconnect",e,n)}function u1(e,n,a){wa.L(e,n,a);var i=hl;if(i&&e&&n){var f='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+En(a.imageSizes)+'"]')):f+='[href="'+En(e)+'"]';var h=f;switch(n){case"style":h=dl(e);break;case"script":h=ml(e)}zn.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),zn.set(h,e),i.querySelector(f)!==null||n==="style"&&i.querySelector(fi(h))||n==="script"&&i.querySelector(hi(h))||(n=i.createElement("link"),Yt(n,"link",e),mt(n),i.head.appendChild(n)))}}function o1(e,n){wa.m(e,n);var a=hl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+En(i)+'"][href="'+En(e)+'"]',h=f;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ml(e)}if(!zn.has(h)&&(e=g({rel:"modulepreload",href:e},n),zn.set(h,e),a.querySelector(f)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(h)))return}i=a.createElement("link"),Yt(i,"link",e),mt(i),a.head.appendChild(i)}}}function s1(e,n,a){wa.S(e,n,a);var i=hl;if(i&&e){var f=Kt(i).hoistableStyles,h=dl(e);n=n||"default";var v=f.get(h);if(!v){var w={loading:0,preload:null};if(v=i.querySelector(fi(h)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=zn.get(h))&&Nc(e,a);var _=v=i.createElement("link");mt(_),Yt(_,"link",e),_._p=new Promise(function(Y,J){_.onload=Y,_.onerror=J}),_.addEventListener("load",function(){w.loading|=1}),_.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Zu(v,n,i)}v={type:"stylesheet",instance:v,count:1,state:w},f.set(h,v)}}}function c1(e,n){wa.X(e,n);var a=hl;if(a&&e){var i=Kt(a).hoistableScripts,f=ml(e),h=i.get(f);h||(h=a.querySelector(hi(f)),h||(e=g({src:e,async:!0},n),(n=zn.get(f))&&Lc(e,n),h=a.createElement("script"),mt(h),Yt(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(f,h))}}function f1(e,n){wa.M(e,n);var a=hl;if(a&&e){var i=Kt(a).hoistableScripts,f=ml(e),h=i.get(f);h||(h=a.querySelector(hi(f)),h||(e=g({src:e,async:!0,type:"module"},n),(n=zn.get(f))&&Lc(e,n),h=a.createElement("script"),mt(h),Yt(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(f,h))}}function Mp(e,n,a,i){var f=(f=ve.current)?Pu(f):null;if(!f)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dl(a.href),a=Kt(f).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var h=Kt(f).hoistableStyles,v=h.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=f.querySelector(fi(e)))&&!h._p&&(v.instance=h,v.state.loading=5),zn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zn.set(e,a),h||h1(f,e,a,v.state))),n&&i===null)throw Error(u(528,""));return v}if(n&&i!==null)throw Error(u(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ml(a),a=Kt(f).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+En(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function Op(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function h1(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),Yt(n,"link",a),mt(n),e.head.appendChild(n))}function ml(e){return'[src="'+En(e)+'"]'}function hi(e){return"script[async]"+e}function jp(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+En(a.href)+'"]');if(i)return n.instance=i,mt(i),i;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),mt(i),Yt(i,"style",f),Zu(i,a.precedence,e),n.instance=i;case"stylesheet":f=dl(a.href);var h=e.querySelector(fi(f));if(h)return n.state.loading|=4,n.instance=h,mt(h),h;i=Op(a),(f=zn.get(f))&&Nc(i,f),h=(e.ownerDocument||e).createElement("link"),mt(h);var v=h;return v._p=new Promise(function(w,_){v.onload=w,v.onerror=_}),Yt(h,"link",i),n.state.loading|=4,Zu(h,a.precedence,e),n.instance=h;case"script":return h=ml(a.src),(f=e.querySelector(hi(h)))?(n.instance=f,mt(f),f):(i=a,(f=zn.get(h))&&(i=g({},a),Lc(i,f)),e=e.ownerDocument||e,f=e.createElement("script"),mt(f),Yt(f,"link",i),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,Zu(i,a.precedence,e));return n.instance}function Zu(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=i.length?i[i.length-1]:null,h=f,v=0;v<i.length;v++){var w=i[v];if(w.dataset.precedence===n)h=w;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ju=null;function Np(e,n,a){if(Ju===null){var i=new Map,f=Ju=new Map;f.set(a,i)}else f=Ju,i=f.get(a),i||(i=new Map,f.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),f=0;f<a.length;f++){var h=a[f];if(!(h[yt]||h[de]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var w=i.get(v);w?w.push(h):i.set(v,[h])}}return i}function Lp(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function d1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Up(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function m1(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=dl(i.href),h=n.querySelector(fi(f));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$u.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,mt(h);return}h=n.ownerDocument||n,i=Op(i),(f=zn.get(f))&&Nc(i,f),h=h.createElement("link"),mt(h);var v=h;v._p=new Promise(function(w,_){v.onload=w,v.onerror=_}),Yt(h,"link",i),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$u.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uc=0;function p1(e,n){return e.stylesheets&&e.count===0&&Wu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Uc===0&&(Uc=62500*Z0());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Uc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(f)}}:null}function $u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ku=null;function Wu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,n.forEach(g1,e),Ku=null,$u.call(e))}function g1(e,n){if(!(n.state.loading&4)){var a=Ku.get(e);if(a)var i=a.get(null);else{a=new Map,Ku.set(e,a);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var v=f[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),i=v)}i&&a.set(null,i)}f=n.instance,v=f.getAttribute("data-precedence"),h=a.get(v)||i,h===i&&a.set(null,f),a.set(v,f),this.count++,i=$u.bind(this),f.addEventListener("load",i),f.addEventListener("error",i),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var di={$$typeof:T,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function y1(e,n,a,i,f,h,v,w,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ra(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.hiddenUpdates=Ra(null),this.identifierPrefix=i,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Hp(e,n,a,i,f,h,v,w,_,Y,J,te){return e=new y1(e,n,a,v,_,Y,J,te,w),n=1,h===!0&&(n|=24),h=hn(3,null,null,n),e.current=h,h.stateNode=e,n=gs(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:i,isDehydrated:a,cache:n},xs(h),e}function Bp(e){return e?(e=Vr,e):Vr}function Fp(e,n,a,i,f,h){f=Bp(f),i.context===null?i.context=f:i.pendingContext=f,i=La(n),i.payload={element:a},h=h===void 0?null:h,h!==null&&(i.callback=h),a=Ua(e,i,n),a!==null&&(rn(a,e,n),Vl(a,e,n))}function Yp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hc(e,n){Yp(e,n),(e=e.alternate)&&Yp(e,n)}function qp(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&rn(n,e,67108864),Hc(e,67108864)}}function Ip(e){if(e.tag===13||e.tag===31){var n=yn();n=Q(n);var a=yr(e,n);a!==null&&rn(a,e,n),Hc(e,n)}}var eo=!0;function v1(e,n,a,i){var f=H.T;H.T=null;var h=re.p;try{re.p=2,Bc(e,n,a,i)}finally{re.p=h,H.T=f}}function b1(e,n,a,i){var f=H.T;H.T=null;var h=re.p;try{re.p=8,Bc(e,n,a,i)}finally{re.p=h,H.T=f}}function Bc(e,n,a,i){if(eo){var f=Fc(i);if(f===null)kc(e,n,i,to,a),Vp(e,i);else if(w1(f,e,n,a,i))i.stopPropagation();else if(Vp(e,i),n&4&&-1<x1.indexOf(e)){for(;f!==null;){var h=Ie(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=aa(h.pendingLanes);if(v!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var _=1<<31-tt(v);w.entanglements[1]|=_,v&=~_}Pn(h),(et&6)===0&&(Uu=gt()+500,ui(0))}}break;case 31:case 13:w=yr(h,2),w!==null&&rn(w,h,2),Bu(),Hc(h,2)}if(h=Fc(i),h===null&&kc(e,n,i,to,a),h===f)break;f=h}f!==null&&i.stopPropagation()}else kc(e,n,i,null,a)}}function Fc(e){return e=qo(e),Yc(e)}var to=null;function Yc(e){if(to=null,e=bt(e),e!==null){var n=s(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=c(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return to=e,null}function Gp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ta()){case K:return 2;case ce:return 8;case Ee:case _e:return 32;case $e:return 268435456;default:return 32}default:return 32}}var qc=!1,Pa=null,Za=null,Ja=null,mi=new Map,pi=new Map,$a=[],x1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vp(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":mi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(n.pointerId)}}function gi(e,n,a,i,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Ie(n),n!==null&&qp(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function w1(e,n,a,i,f){switch(n){case"focusin":return Pa=gi(Pa,e,n,a,i,f),!0;case"dragenter":return Za=gi(Za,e,n,a,i,f),!0;case"mouseover":return Ja=gi(Ja,e,n,a,i,f),!0;case"pointerover":var h=f.pointerId;return mi.set(h,gi(mi.get(h)||null,e,n,a,i,f)),!0;case"gotpointercapture":return h=f.pointerId,pi.set(h,gi(pi.get(h)||null,e,n,a,i,f)),!0}return!1}function Xp(e){var n=bt(e.target);if(n!==null){var a=s(n);if(a!==null){if(n=a.tag,n===13){if(n=c(a),n!==null){e.blockedOn=n,Se(e.priority,function(){Ip(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Se(e.priority,function(){Ip(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Fc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Yo=i,a.target.dispatchEvent(i),Yo=null}else return n=Ie(a),n!==null&&qp(n),e.blockedOn=a,!1;n.shift()}return!0}function Qp(e,n,a){no(e)&&a.delete(n)}function S1(){qc=!1,Pa!==null&&no(Pa)&&(Pa=null),Za!==null&&no(Za)&&(Za=null),Ja!==null&&no(Ja)&&(Ja=null),mi.forEach(Qp),pi.forEach(Qp)}function ao(e,n){e.blockedOn===n&&(e.blockedOn=null,qc||(qc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,S1)))}var ro=null;function Pp(e){ro!==e&&(ro=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],f=e[n+2];if(typeof i!="function"){if(Yc(i||a)===null)continue;break}var h=Ie(a);h!==null&&(e.splice(n,3),n-=3,Fs(h,{pending:!0,data:f,method:a.method,action:i},i,f))}}))}function pl(e){function n(_){return ao(_,e)}Pa!==null&&ao(Pa,e),Za!==null&&ao(Za,e),Ja!==null&&ao(Ja,e),mi.forEach(n),pi.forEach(n);for(var a=0;a<$a.length;a++){var i=$a[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Xp(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var f=a[i],h=a[i+1],v=f[pe]||null;if(typeof h=="function")v||Pp(a);else if(v){var w=null;if(h&&h.hasAttribute("formAction")){if(f=h,v=h[pe]||null)w=v.formAction;else if(Yc(f)!==null)continue}else w=v.action;typeof w=="function"?a[i+1]=w:(a.splice(i,3),i-=3),Pp(a)}}}function Zp(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Ic(e){this._internalRoot=e}lo.prototype.render=Ic.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var a=n.current,i=yn();Fp(a,i,e,n,null,null)},lo.prototype.unmount=Ic.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fp(e.current,2,null,e,null,null),Bu(),n[we]=null}};function lo(e){this._internalRoot=e}lo.prototype.unstable_scheduleHydration=function(e){if(e){var n=fe();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&Xp(e)}};var Jp=r.version;if(Jp!=="19.2.3")throw Error(u(527,Jp,"19.2.3"));re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var E1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Nt=io.inject(E1),nt=io}catch{}}return vi.createRoot=function(e,n){if(!o(e))throw Error(u(299));var a=!1,i="",f=am,h=rm,v=lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Hp(e,1,!1,null,null,a,i,null,f,h,v,Zp),e[we]=n.current,Tc(e),new Ic(n)},vi.hydrateRoot=function(e,n,a){if(!o(e))throw Error(u(299));var i=!1,f="",h=am,v=rm,w=lm,_=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(_=a.formState)),n=Hp(e,1,!0,n,a??null,i,f,_,h,v,w,Zp),n.context=Bp(null),a=n.current,i=yn(),i=Q(i),f=La(i),f.callback=null,Ua(a,f,i),a=i,n.current.lanes=a,Da(n,a),Pn(n),e[we]=n.current,Tc(e),new lo(n)},vi.version="19.2.3",vi}var ug;function j1(){if(ug)return Vc.exports;ug=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Vc.exports=O1(),Vc.exports}var N1=j1(),V=Uf();const ar=Ro(V),L1=k1({__proto__:null,default:ar},[V]);var My=t=>{throw TypeError(t)},U1=(t,r,l)=>r.has(t)||My("Cannot "+l),Jc=(t,r,l)=>(U1(t,r,"read from private field"),l?l.call(t):r.get(t)),H1=(t,r,l)=>r.has(t)?My("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,l),og="popstate";function B1(t={}){function r(u,o){let{pathname:s,search:c,hash:d}=u.location;return Oi("",{pathname:s,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function l(u,o){return typeof o=="string"?o:$n(o)}return Y1(r,l,null,t)}function Le(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function kt(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function F1(){return Math.random().toString(36).substring(2,10)}function sg(t,r){return{usr:t.state,key:t.key,idx:r}}function Oi(t,r,l=null,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?rr(r):r,state:l,key:r&&r.key||u||F1()}}function $n({pathname:t="/",search:r="",hash:l=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function rr(t){let r={};if(t){let l=t.indexOf("#");l>=0&&(r.hash=t.substring(l),t=t.substring(0,l));let u=t.indexOf("?");u>=0&&(r.search=t.substring(u),t=t.substring(0,u)),t&&(r.pathname=t)}return r}function Y1(t,r,l,u={}){let{window:o=document.defaultView,v5Compat:s=!1}=u,c=o.history,d="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function g(){d="POP";let j=y(),R=j==null?null:j-m;m=j,p&&p({action:d,location:O.location,delta:R})}function x(j,R){d="PUSH";let E=Oi(O.location,j,R);m=y()+1;let T=sg(E,m),q=O.createHref(E);try{c.pushState(T,"",q)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(q)}s&&p&&p({action:d,location:O.location,delta:1})}function b(j,R){d="REPLACE";let E=Oi(O.location,j,R);m=y();let T=sg(E,m),q=O.createHref(E);c.replaceState(T,"",q),s&&p&&p({action:d,location:O.location,delta:0})}function k(j){return Oy(j)}let O={get action(){return d},get location(){return t(o,c)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(og,g),p=j,()=>{o.removeEventListener(og,g),p=null}},createHref(j){return r(o,j)},createURL:k,encodeLocation(j){let R=k(j);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:x,replace:b,go(j){return c.go(j)}};return O}function Oy(t,r=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Le(l,"No window.location.(origin|href) available to create URL");let u=typeof t=="string"?t:$n(t);return u=u.replace(/ $/,"%20"),!r&&u.startsWith("//")&&(u=l+u),new URL(u,l)}var Ai,cg=class{constructor(t){if(H1(this,Ai,new Map),t)for(let[r,l]of t)this.set(r,l)}get(t){if(Jc(this,Ai).has(t))return Jc(this,Ai).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,r){Jc(this,Ai).set(t,r)}};Ai=new WeakMap;var q1=new Set(["lazy","caseSensitive","path","id","index","children"]);function I1(t){return q1.has(t)}var G1=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function V1(t){return G1.has(t)}function X1(t){return t.index===!0}function ji(t,r,l=[],u={},o=!1){return t.map((s,c)=>{let d=[...l,String(c)],p=typeof s.id=="string"?s.id:d.join("-");if(Le(s.index!==!0||!s.children,"Cannot specify children on an index route"),Le(o||!u[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),X1(s)){let m={...s,id:p};return u[p]=fg(m,r(m)),m}else{let m={...s,id:p,children:void 0};return u[p]=fg(m,r(m)),s.children&&(m.children=ji(s.children,r,d,u,o)),m}})}function fg(t,r){return Object.assign(t,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...t.lazy,...r.lazy}}:{}})}function er(t,r,l="/"){return Ci(t,r,l,!1)}function Ci(t,r,l,u){let o=typeof r=="string"?rr(r):r,s=jn(o.pathname||"/",l);if(s==null)return null;let c=jy(t);P1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=lx(s);d=ax(c[p],m,u)}return d}function Q1(t,r){let{route:l,pathname:u,params:o}=t;return{id:l.id,pathname:u,params:o,data:r[l.id],loaderData:r[l.id],handle:l.handle}}function jy(t,r=[],l=[],u="",o=!1){let s=(c,d,p=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&p)return;Le(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let g=Jn([u,y.relativePath]),x=l.concat(y);c.children&&c.children.length>0&&(Le(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),jy(c.children,r,x,g,p)),!(c.path==null&&!c.index)&&r.push({path:g,score:tx(g,c.index),routesMeta:x})};return t.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))s(c,d);else for(let p of Ny(c.path))s(c,d,!0,p)}),r}function Ny(t){let r=t.split("/");if(r.length===0)return[];let[l,...u]=r,o=l.endsWith("?"),s=l.replace(/\?$/,"");if(u.length===0)return o?[s,""]:[s];let c=Ny(u.join("/")),d=[];return d.push(...c.map(p=>p===""?s:[s,p].join("/"))),o&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function P1(t){t.sort((r,l)=>r.score!==l.score?l.score-r.score:nx(r.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var Z1=/^:[\w-]+$/,J1=3,$1=2,K1=1,W1=10,ex=-2,hg=t=>t==="*";function tx(t,r){let l=t.split("/"),u=l.length;return l.some(hg)&&(u+=ex),r&&(u+=$1),l.filter(o=>!hg(o)).reduce((o,s)=>o+(Z1.test(s)?J1:s===""?K1:W1),u)}function nx(t,r){return t.length===r.length&&t.slice(0,-1).every((u,o)=>u===r[o])?t[t.length-1]-r[r.length-1]:0}function ax(t,r,l=!1){let{routesMeta:u}=t,o={},s="/",c=[];for(let d=0;d<u.length;++d){let p=u[d],m=d===u.length-1,y=s==="/"?r:r.slice(s.length)||"/",g=bo({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),x=p.route;if(!g&&m&&l&&!u[u.length-1].route.index&&(g=bo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Jn([s,g.pathname]),pathnameBase:ox(Jn([s,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(s=Jn([s,g.pathnameBase]))}return c}function bo(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,u]=rx(t.path,t.caseSensitive,t.end),o=r.match(l);if(!o)return null;let s=o[0],c=s.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:u.reduce((m,{paramName:y,isOptional:g},x)=>{if(y==="*"){let k=d[x]||"";c=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const b=d[x];return g&&!b?m[y]=void 0:m[y]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:s,pathnameBase:c,pattern:t}}function rx(t,r=!1,l=!0){kt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let u=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(u.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(u.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),u]}function lx(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return kt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function jn(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,u=t.charAt(l);return u&&u!=="/"?null:t.slice(l)||"/"}function ix({basename:t,pathname:r}){return r==="/"?t:Jn([t,r])}var Ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=t=>Ly.test(t);function ux(t,r="/"){let{pathname:l,search:u="",hash:o=""}=typeof t=="string"?rr(t):t,s;if(l)if(Do(l))s=l;else{if(l.includes("//")){let c=l;l=l.replace(/\/\/+/g,"/"),kt(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${l}`)}l.startsWith("/")?s=dg(l.substring(1),"/"):s=dg(l,r)}else s=r;return{pathname:s,search:sx(u),hash:cx(o)}}function dg(t,r){let l=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?l.length>1&&l.pop():o!=="."&&l.push(o)}),l.length>1?l.join("/"):"/"}function $c(t,r,l,u){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uy(t){return t.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function Hf(t){let r=Uy(t);return r.map((l,u)=>u===r.length-1?l.pathname:l.pathnameBase)}function Bf(t,r,l,u=!1){let o;typeof t=="string"?o=rr(t):(o={...t},Le(!o.pathname||!o.pathname.includes("?"),$c("?","pathname","search",o)),Le(!o.pathname||!o.pathname.includes("#"),$c("#","pathname","hash",o)),Le(!o.search||!o.search.includes("#"),$c("#","search","hash",o)));let s=t===""||o.pathname==="",c=s?"/":o.pathname,d;if(c==null)d=l;else{let g=r.length-1;if(!u&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),g-=1;o.pathname=x.join("/")}d=g>=0?r[g]:"/"}let p=ux(o,d),m=c&&c!=="/"&&c.endsWith("/"),y=(s||c===".")&&l.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Jn=t=>t.join("/").replace(/\/\/+/g,"/"),ox=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Hi=class{constructor(t,r,l,u=!1){this.status=t,this.statusText=r||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Ni(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Bi(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Hy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function By(t,r){let l=t;if(typeof l!="string"||!Ly.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let u=l,o=!1;if(Hy)try{let s=new URL(window.location.href),c=l.startsWith("//")?new URL(s.protocol+l):new URL(l),d=jn(c.pathname,r);c.origin===s.origin&&d!=null?l=d+c.search+c.hash:o=!0}catch{kt(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:o,to:l}}var nr=Symbol("Uninstrumented");function fx(t,r){let l={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(o=>o({id:r.id,index:r.index,path:r.path,instrument(s){let c=Object.keys(l);for(let d of c)s[d]&&l[d].push(s[d])}}));let u={};if(typeof r.lazy=="function"&&l.lazy.length>0){let o=wl(l.lazy,r.lazy,()=>{});o&&(u.lazy=o)}if(typeof r.lazy=="object"){let o=r.lazy;["middleware","loader","action"].forEach(s=>{let c=o[s],d=l[`lazy.${s}`];if(typeof c=="function"&&d.length>0){let p=wl(d,c,()=>{});p&&(u.lazy=Object.assign(u.lazy||{},{[s]:p}))}})}return["loader","action"].forEach(o=>{let s=r[o];if(typeof s=="function"&&l[o].length>0){let c=s[nr]??s,d=wl(l[o],c,(...p)=>mg(p[0]));d&&(o==="loader"&&c.hydrate===!0&&(d.hydrate=!0),d[nr]=c,u[o]=d)}}),r.middleware&&r.middleware.length>0&&l.middleware.length>0&&(u.middleware=r.middleware.map(o=>{let s=o[nr]??o,c=wl(l.middleware,s,(...d)=>mg(d[0]));return c?(c[nr]=s,c):o})),u}function hx(t,r){let l={navigate:[],fetch:[]};if(r.forEach(u=>u({instrument(o){let s=Object.keys(o);for(let c of s)o[c]&&l[c].push(o[c])}})),l.navigate.length>0){let u=t.navigate[nr]??t.navigate,o=wl(l.navigate,u,(...s)=>{let[c,d]=s;return{to:typeof c=="number"||typeof c=="string"?c:c?$n(c):".",...pg(t,d??{})}});o&&(o[nr]=u,t.navigate=o)}if(l.fetch.length>0){let u=t.fetch[nr]??t.fetch,o=wl(l.fetch,u,(...s)=>{let[c,,d,p]=s;return{href:d??".",fetcherKey:c,...pg(t,p??{})}});o&&(o[nr]=u,t.fetch=o)}return t}function wl(t,r,l){return t.length===0?null:async(...u)=>{let o=await Fy(t,l(...u),()=>r(...u),t.length-1);if(o.type==="error")throw o.value;return o.value}}async function Fy(t,r,l,u){let o=t[u],s;if(o){let c,d=async()=>(c?console.error("You cannot call instrumented handlers more than once"):c=Fy(t,r,l,u-1),s=await c,Le(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await o(d,r)}catch(p){console.error("An instrumentation function threw an error:",p)}c||await d(),await c}else try{s={type:"success",value:await l()}}catch(c){s={type:"error",value:c}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function mg(t){let{request:r,context:l,params:u,unstable_pattern:o}=t;return{request:dx(r),params:{...u},unstable_pattern:o,context:mx(l)}}function pg(t,r){return{currentUrl:$n(t.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function dx(t){return{method:t.method,url:t.url,headers:{get:(...r)=>t.headers.get(...r)}}}function mx(t){if(gx(t)){let r={...t};return Object.freeze(r),r}else return{get:r=>t.get(r)}}var px=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gx(t){if(t===null||typeof t!="object")return!1;const r=Object.getPrototypeOf(t);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===px}var Yy=["POST","PUT","PATCH","DELETE"],yx=new Set(Yy),vx=["GET",...Yy],bx=new Set(vx),qy=new Set([301,302,303,307,308]),xx=new Set([307,308]),Kc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Sx=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),Iy="remix-router-transitions",Gy=Symbol("ResetLoaderData");function Ex(t){const r=t.window?t.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";Le(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let u=t.hydrationRouteProperties||[],o=t.mapRouteProperties||Sx,s=o;if(t.unstable_instrumentations){let D=t.unstable_instrumentations;s=B=>({...o(B),...fx(D.map(Q=>Q.route).filter(Boolean),B)})}let c={},d=ji(t.routes,s,void 0,c),p,m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let y=t.dataStrategy||Rx,g={...t.future},x=null,b=new Set,k=null,O=null,j=null,R=t.hydrationData!=null,E=er(d,t.history.location,m),T=!1,q=null,I;if(E==null&&!t.patchRoutesOnNavigation){let D=Mn(404,{pathname:t.history.location.pathname}),{matches:B,route:Q}=uo(d);I=!0,E=B,q={[Q.id]:D}}else if(E&&!t.hydrationData&&cr(E,d,t.history.location.pathname).active&&(E=null),E)if(E.some(D=>D.route.lazy))I=!1;else if(!E.some(D=>Ff(D.route)))I=!0;else{let D=t.hydrationData?t.hydrationData.loaderData:null,B=t.hydrationData?t.hydrationData.errors:null;if(B){let Q=E.findIndex(ue=>B[ue.route.id]!==void 0);I=E.slice(0,Q+1).every(ue=>!Sf(ue.route,D,B))}else I=E.every(Q=>!Sf(Q.route,D,B))}else{I=!1,E=[];let D=cr(null,d,t.history.location.pathname);D.active&&D.matches&&(T=!0,E=D.matches)}let z,C={historyAction:t.history.action,location:t.history.location,matches:E,initialized:I,navigation:Kc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||q,fetchers:new Map,blockers:new Map},$="POP",Z=null,L=!1,ne,ie=!1,Ae=new Map,he=null,ae=!1,H=!1,re=new Set,le=new Map,ye=0,A=-1,M=new Map,X=new Set,S=new Map,oe=new Map,ge=new Set,ve=new Map,ze,Qe=null;function Je(){if(x=t.history.listen(({action:D,location:B,delta:Q})=>{if(ze){ze(),ze=void 0;return}kt(ve.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ue=ur({currentLocation:C.location,nextLocation:B,historyAction:D});if(ue&&Q!=null){let fe=new Promise(Se=>{ze=Se});t.history.go(Q*-1),na(ue,{state:"blocked",location:B,proceed(){na(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),fe.then(()=>t.history.go(Q))},reset(){let Se=new Map(C.blockers);Se.set(ue,bi),dt({blockers:Se})}}),Z?.resolve(),Z=null;return}return $t(D,B)}),l){Xx(r,Ae);let D=()=>Qx(r,Ae);r.addEventListener("pagehide",D),he=()=>r.removeEventListener("pagehide",D)}return C.initialized||$t("POP",C.location,{initialHydration:!0}),z}function Mt(){x&&x(),he&&he(),b.clear(),ne&&ne.abort(),C.fetchers.forEach((D,B)=>on(B)),C.blockers.forEach((D,B)=>Qi(B))}function qt(D){return b.add(D),()=>b.delete(D)}function dt(D,B={}){D.matches&&(D.matches=D.matches.map(fe=>{let Se=c[fe.route.id],me=fe.route;return me.element!==Se.element||me.errorElement!==Se.errorElement||me.hydrateFallbackElement!==Se.hydrateFallbackElement?{...fe,route:Se}:fe})),C={...C,...D};let Q=[],ue=[];C.fetchers.forEach((fe,Se)=>{fe.state==="idle"&&(ge.has(Se)?Q.push(Se):ue.push(Se))}),ge.forEach(fe=>{!C.fetchers.has(fe)&&!le.has(fe)&&Q.push(fe)}),[...b].forEach(fe=>fe(C,{deletedFetchers:Q,newErrors:D.errors??null,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),Q.forEach(fe=>on(fe)),ue.forEach(fe=>C.fetchers.delete(fe))}function Qt(D,B,{flushSync:Q}={}){let ue=C.actionData!=null&&C.navigation.formMethod!=null&&Gt(C.navigation.formMethod)&&C.navigation.state==="loading"&&D.state?._isRedirect!==!0,fe;B.actionData?Object.keys(B.actionData).length>0?fe=B.actionData:fe=null:ue?fe=C.actionData:fe=null;let Se=B.loaderData?kg(C.loaderData,B.loaderData,B.matches||[],B.errors):C.loaderData,me=C.blockers;me.size>0&&(me=new Map(me),me.forEach((Ce,Te)=>me.set(Te,bi)));let de=ae?!1:Pi(D,B.matches||C.matches),pe=L===!0||C.navigation.formMethod!=null&&Gt(C.navigation.formMethod)&&D.state?._isRedirect!==!0;p&&(d=p,p=void 0),ae||$==="POP"||($==="PUSH"?t.history.push(D,D.state):$==="REPLACE"&&t.history.replace(D,D.state));let we;if($==="POP"){let Ce=Ae.get(C.location.pathname);Ce&&Ce.has(D.pathname)?we={currentLocation:C.location,nextLocation:D}:Ae.has(D.pathname)&&(we={currentLocation:D,nextLocation:C.location})}else if(ie){let Ce=Ae.get(C.location.pathname);Ce?Ce.add(D.pathname):(Ce=new Set([D.pathname]),Ae.set(C.location.pathname,Ce)),we={currentLocation:C.location,nextLocation:D}}dt({...B,actionData:fe,loaderData:Se,historyAction:$,location:D,initialized:!0,navigation:Kc,revalidation:"idle",restoreScrollPosition:de,preventScrollReset:pe,blockers:me},{viewTransitionOpts:we,flushSync:Q===!0}),$="POP",L=!1,ie=!1,ae=!1,H=!1,Z?.resolve(),Z=null,Qe?.resolve(),Qe=null}async function wn(D,B){if(Z?.resolve(),Z=null,typeof D=="number"){Z||(Z=Dg());let qe=Z.promise;return t.history.go(D),qe}let Q=wf(C.location,C.matches,m,D,B?.fromRouteId,B?.relative),{path:ue,submission:fe,error:Se}=gg(!1,Q,B),me=C.location,de=Oi(C.location,ue,B&&B.state);de={...de,...t.history.encodeLocation(de)};let pe=B&&B.replace!=null?B.replace:void 0,we="PUSH";pe===!0?we="REPLACE":pe===!1||fe!=null&&Gt(fe.formMethod)&&fe.formAction===C.location.pathname+C.location.search&&(we="REPLACE");let Ce=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,Te=(B&&B.flushSync)===!0,Pe=ur({currentLocation:me,nextLocation:de,historyAction:we});if(Pe){na(Pe,{state:"blocked",location:de,proceed(){na(Pe,{state:"proceeding",proceed:void 0,reset:void 0,location:de}),wn(D,B)},reset(){let qe=new Map(C.blockers);qe.set(Pe,bi),dt({blockers:qe})}});return}await $t(we,de,{submission:fe,pendingError:Se,preventScrollReset:Ce,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:Te,callSiteDefaultShouldRevalidate:B&&B.unstable_defaultShouldRevalidate})}function ka(){Qe||(Qe=Dg()),ce(),dt({revalidation:"loading"});let D=Qe.promise;return C.navigation.state==="submitting"?D:C.navigation.state==="idle"?($t(C.historyAction,C.location,{startUninterruptedRevalidation:!0}),D):($t($||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:ie===!0}),D)}async function $t(D,B,Q){ne&&ne.abort(),ne=null,$=D,ae=(Q&&Q.startUninterruptedRevalidation)===!0,sr(C.location,C.matches),L=(Q&&Q.preventScrollReset)===!0,ie=(Q&&Q.enableViewTransition)===!0;let ue=p||d,fe=Q&&Q.overrideNavigation,Se=Q?.initialHydration&&C.matches&&C.matches.length>0&&!T?C.matches:er(ue,B,m),me=(Q&&Q.flushSync)===!0;if(Se&&C.initialized&&!H&&Lx(C.location,B)&&!(Q&&Q.submission&&Gt(Q.submission.formMethod))){Qt(B,{matches:Se},{flushSync:me});return}let de=cr(Se,ue,B.pathname);if(de.active&&de.matches&&(Se=de.matches),!Se){let{error:vt,notFoundMatches:bt,route:Ie}=Ca(B.pathname);Qt(B,{matches:bt,loaderData:{},errors:{[Ie.id]:vt}},{flushSync:me});return}ne=new AbortController;let pe=bl(t.history,B,ne.signal,Q&&Q.submission),we=t.getContext?await t.getContext():new cg,Ce;if(Q&&Q.pendingError)Ce=[tr(Se).route.id,{type:"error",error:Q.pendingError}];else if(Q&&Q.submission&&Gt(Q.submission.formMethod)){let vt=await Nr(pe,B,Q.submission,Se,we,de.active,Q&&Q.initialHydration===!0,{replace:Q.replace,flushSync:me});if(vt.shortCircuited)return;if(vt.pendingActionResult){let[bt,Ie]=vt.pendingActionResult;if(bn(Ie)&&Ni(Ie.error)&&Ie.error.status===404){ne=null,Qt(B,{matches:vt.matches,loaderData:{},errors:{[bt]:Ie.error}});return}}Se=vt.matches||Se,Ce=vt.pendingActionResult,fe=Wc(B,Q.submission),me=!1,de.active=!1,pe=bl(t.history,pe.url,pe.signal)}let{shortCircuited:Te,matches:Pe,loaderData:qe,errors:yt}=await Lr(pe,B,Se,we,de.active,fe,Q&&Q.submission,Q&&Q.fetcherSubmission,Q&&Q.replace,Q&&Q.initialHydration===!0,me,Ce,Q&&Q.callSiteDefaultShouldRevalidate);Te||(ne=null,Qt(B,{matches:Pe||Se,...Ag(Ce),loaderData:qe,errors:yt}))}async function Nr(D,B,Q,ue,fe,Se,me,de={}){ce();let pe=Gx(B,Q);if(dt({navigation:pe},{flushSync:de.flushSync===!0}),Se){let Te=await Ra(ue,B.pathname,D.signal);if(Te.type==="aborted")return{shortCircuited:!0};if(Te.type==="error"){if(Te.partialMatches.length===0){let{matches:qe,route:yt}=uo(d);return{matches:qe,pendingActionResult:[yt.id,{type:"error",error:Te.error}]}}let Pe=tr(Te.partialMatches).route.id;return{matches:Te.partialMatches,pendingActionResult:[Pe,{type:"error",error:Te.error}]}}else if(Te.matches)ue=Te.matches;else{let{notFoundMatches:Pe,error:qe,route:yt}=Ca(B.pathname);return{matches:Pe,pendingActionResult:[yt.id,{type:"error",error:qe}]}}}let we,Ce=po(ue,B);if(!Ce.route.action&&!Ce.route.lazy)we={type:"error",error:Mn(405,{method:D.method,pathname:B.pathname,routeId:Ce.route.id})};else{let Te=Sl(s,c,D,ue,Ce,me?[]:u,fe),Pe=await ta(D,Te,fe,null);if(we=Pe[Ce.route.id],!we){for(let qe of ue)if(Pe[qe.route.id]){we=Pe[qe.route.id];break}}if(D.signal.aborted)return{shortCircuited:!0}}if(zr(we)){let Te;return de&&de.replace!=null?Te=de.replace:Te=Sg(we.response.headers.get("Location"),new URL(D.url),m,t.history)===C.location.pathname+C.location.search,await gt(D,we,!0,{submission:Q,replace:Te}),{shortCircuited:!0}}if(bn(we)){let Te=tr(ue,Ce.route.id);return(de&&de.replace)!==!0&&($="PUSH"),{matches:ue,pendingActionResult:[Te.route.id,we,Ce.route.id]}}return{matches:ue,pendingActionResult:[Ce.route.id,we]}}async function Lr(D,B,Q,ue,fe,Se,me,de,pe,we,Ce,Te,Pe){let qe=Se||Wc(B,me),yt=me||de||Rg(qe),vt=!ae&&!we;if(fe){if(vt){let St=ea(Te);dt({navigation:qe,...St!==void 0?{actionData:St}:{}},{flushSync:Ce})}let Ge=await Ra(Q,B.pathname,D.signal);if(Ge.type==="aborted")return{shortCircuited:!0};if(Ge.type==="error"){if(Ge.partialMatches.length===0){let{matches:Bn,route:Ut}=uo(d);return{matches:Bn,loaderData:{},errors:{[Ut.id]:Ge.error}}}let St=tr(Ge.partialMatches).route.id;return{matches:Ge.partialMatches,loaderData:{},errors:{[St]:Ge.error}}}else if(Ge.matches)Q=Ge.matches;else{let{error:St,notFoundMatches:Bn,route:Ut}=Ca(B.pathname);return{matches:Bn,loaderData:{},errors:{[Ut.id]:St}}}}let bt=p||d,{dsMatches:Ie,revalidatingFetchers:Ot}=yg(D,ue,s,c,t.history,C,Q,yt,B,we?[]:u,we===!0,H,re,ge,S,X,bt,m,t.patchRoutesOnNavigation!=null,Te,Pe);if(A=++ye,!t.dataStrategy&&!Ie.some(Ge=>Ge.shouldLoad)&&!Ie.some(Ge=>Ge.route.middleware&&Ge.route.middleware.length>0)&&Ot.length===0){let Ge=tt();return Qt(B,{matches:Q,loaderData:{},errors:Te&&bn(Te[1])?{[Te[0]]:Te[1].error}:null,...Ag(Te),...Ge?{fetchers:new Map(C.fetchers)}:{}},{flushSync:Ce}),{shortCircuited:!0}}if(vt){let Ge={};if(!fe){Ge.navigation=qe;let St=ea(Te);St!==void 0&&(Ge.actionData=St)}Ot.length>0&&(Ge.fetchers=Aa(Ot)),dt(Ge,{flushSync:Ce})}Ot.forEach(Ge=>{nt(Ge.key),Ge.controller&&le.set(Ge.key,Ge.controller)});let Kt=()=>Ot.forEach(Ge=>nt(Ge.key));ne&&ne.signal.addEventListener("abort",Kt);let{loaderResults:mt,fetcherResults:Un}=await K(Ie,Ot,D,ue);if(D.signal.aborted)return{shortCircuited:!0};ne&&ne.signal.removeEventListener("abort",Kt),Ot.forEach(Ge=>le.delete(Ge.key));let cn=oo(mt);if(cn)return await gt(D,cn.result,!0,{replace:pe}),{shortCircuited:!0};if(cn=oo(Un),cn)return X.add(cn.key),await gt(D,cn.result,!0,{replace:pe}),{shortCircuited:!0};let{loaderData:Hn,errors:Sn}=Tg(C,Q,mt,Te,Ot,Un);we&&C.errors&&(Sn={...C.errors,...Sn});let ra=tt(),fr=Ln(A),hr=ra||fr||Ot.length>0;return{matches:Q,loaderData:Hn,errors:Sn,...hr?{fetchers:new Map(C.fetchers)}:{}}}function ea(D){if(D&&!bn(D[1]))return{[D[0]]:D[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function Aa(D){return D.forEach(B=>{let Q=C.fetchers.get(B.key),ue=xi(void 0,Q?Q.data:void 0);C.fetchers.set(B.key,ue)}),new Map(C.fetchers)}async function ir(D,B,Q,ue){nt(D);let fe=(ue&&ue.flushSync)===!0,Se=p||d,me=wf(C.location,C.matches,m,Q,B,ue?.relative),de=er(Se,me,m),pe=cr(de,Se,me);if(pe.active&&pe.matches&&(de=pe.matches),!de){_e(D,B,Mn(404,{pathname:me}),{flushSync:fe});return}let{path:we,submission:Ce,error:Te}=gg(!0,me,ue);if(Te){_e(D,B,Te,{flushSync:fe});return}let Pe=t.getContext?await t.getContext():new cg,qe=(ue&&ue.preventScrollReset)===!0;if(Ce&&Gt(Ce.formMethod)){await Cl(D,B,we,de,Pe,pe.active,fe,qe,Ce,ue&&ue.unstable_defaultShouldRevalidate);return}S.set(D,{routeId:B,path:we}),await Rl(D,B,we,de,Pe,pe.active,fe,qe,Ce)}async function Cl(D,B,Q,ue,fe,Se,me,de,pe,we){ce(),S.delete(D);let Ce=C.fetchers.get(D);Ee(D,Vx(pe,Ce),{flushSync:me});let Te=new AbortController,Pe=bl(t.history,Q,Te.signal,pe);if(Se){let Ve=await Ra(ue,new URL(Pe.url).pathname,Pe.signal,D);if(Ve.type==="aborted")return;if(Ve.type==="error"){_e(D,B,Ve.error,{flushSync:me});return}else if(Ve.matches)ue=Ve.matches;else{_e(D,B,Mn(404,{pathname:Q}),{flushSync:me});return}}let qe=po(ue,Q);if(!qe.route.action&&!qe.route.lazy){let Ve=Mn(405,{method:pe.formMethod,pathname:Q,routeId:B});_e(D,B,Ve,{flushSync:me});return}le.set(D,Te);let yt=ye,vt=Sl(s,c,Pe,ue,qe,u,fe),bt=await ta(Pe,vt,fe,D),Ie=bt[qe.route.id];if(!Ie){for(let Ve of vt)if(bt[Ve.route.id]){Ie=bt[Ve.route.id];break}}if(Pe.signal.aborted){le.get(D)===Te&&le.delete(D);return}if(ge.has(D)){if(zr(Ie)||bn(Ie)){Ee(D,Sa(void 0));return}}else{if(zr(Ie))if(le.delete(D),A>yt){Ee(D,Sa(void 0));return}else return X.add(D),Ee(D,xi(pe)),gt(Pe,Ie,!1,{fetcherSubmission:pe,preventScrollReset:de});if(bn(Ie)){_e(D,B,Ie.error);return}}let Ot=C.navigation.location||C.location,Kt=bl(t.history,Ot,Te.signal),mt=p||d,Un=C.navigation.state!=="idle"?er(mt,C.navigation.location,m):C.matches;Le(Un,"Didn't find any matches after fetcher action");let cn=++ye;M.set(D,cn);let Hn=xi(pe,Ie.data);C.fetchers.set(D,Hn);let{dsMatches:Sn,revalidatingFetchers:ra}=yg(Kt,fe,s,c,t.history,C,Un,pe,Ot,u,!1,H,re,ge,S,X,mt,m,t.patchRoutesOnNavigation!=null,[qe.route.id,Ie],we);ra.filter(Ve=>Ve.key!==D).forEach(Ve=>{let dr=Ve.key,Ji=C.fetchers.get(dr),Dl=xi(void 0,Ji?Ji.data:void 0);C.fetchers.set(dr,Dl),nt(dr),Ve.controller&&le.set(dr,Ve.controller)}),dt({fetchers:new Map(C.fetchers)});let fr=()=>ra.forEach(Ve=>nt(Ve.key));Te.signal.addEventListener("abort",fr);let{loaderResults:hr,fetcherResults:Ge}=await K(Sn,ra,Kt,fe);if(Te.signal.aborted)return;if(Te.signal.removeEventListener("abort",fr),M.delete(D),le.delete(D),ra.forEach(Ve=>le.delete(Ve.key)),C.fetchers.has(D)){let Ve=Sa(Ie.data);C.fetchers.set(D,Ve)}let St=oo(hr);if(St)return gt(Kt,St.result,!1,{preventScrollReset:de});if(St=oo(Ge),St)return X.add(St.key),gt(Kt,St.result,!1,{preventScrollReset:de});let{loaderData:Bn,errors:Ut}=Tg(C,Un,hr,void 0,ra,Ge);Ln(cn),C.navigation.state==="loading"&&cn>A?(Le($,"Expected pending action"),ne&&ne.abort(),Qt(C.navigation.location,{matches:Un,loaderData:Bn,errors:Ut,fetchers:new Map(C.fetchers)})):(dt({errors:Ut,loaderData:kg(C.loaderData,Bn,Un,Ut),fetchers:new Map(C.fetchers)}),H=!1)}async function Rl(D,B,Q,ue,fe,Se,me,de,pe){let we=C.fetchers.get(D);Ee(D,xi(pe,we?we.data:void 0),{flushSync:me});let Ce=new AbortController,Te=bl(t.history,Q,Ce.signal);if(Se){let Ie=await Ra(ue,new URL(Te.url).pathname,Te.signal,D);if(Ie.type==="aborted")return;if(Ie.type==="error"){_e(D,B,Ie.error,{flushSync:me});return}else if(Ie.matches)ue=Ie.matches;else{_e(D,B,Mn(404,{pathname:Q}),{flushSync:me});return}}let Pe=po(ue,Q);le.set(D,Ce);let qe=ye,yt=Sl(s,c,Te,ue,Pe,u,fe),bt=(await ta(Te,yt,fe,D))[Pe.route.id];if(le.get(D)===Ce&&le.delete(D),!Te.signal.aborted){if(ge.has(D)){Ee(D,Sa(void 0));return}if(zr(bt))if(A>qe){Ee(D,Sa(void 0));return}else{X.add(D),await gt(Te,bt,!1,{preventScrollReset:de});return}if(bn(bt)){_e(D,B,bt.error);return}Ee(D,Sa(bt.data))}}async function gt(D,B,Q,{submission:ue,fetcherSubmission:fe,preventScrollReset:Se,replace:me}={}){Q||(Z?.resolve(),Z=null),B.response.headers.has("X-Remix-Revalidate")&&(H=!0);let de=B.response.headers.get("Location");Le(de,"Expected a Location header on the redirect Response"),de=Sg(de,new URL(D.url),m,t.history);let pe=Oi(C.location,de,{_isRedirect:!0});if(l){let yt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(Do(de)){const vt=Oy(de,!0);yt=vt.origin!==r.location.origin||jn(vt.pathname,m)==null}if(yt){me?r.location.replace(de):r.location.assign(de);return}}ne=null;let we=me===!0||B.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ce,formAction:Te,formEncType:Pe}=C.navigation;!ue&&!fe&&Ce&&Te&&Pe&&(ue=Rg(C.navigation));let qe=ue||fe;if(xx.has(B.response.status)&&qe&&Gt(qe.formMethod))await $t(we,pe,{submission:{...qe,formAction:de},preventScrollReset:Se||L,enableViewTransition:Q?ie:void 0});else{let yt=Wc(pe,ue);await $t(we,pe,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:Se||L,enableViewTransition:Q?ie:void 0})}}async function ta(D,B,Q,ue){let fe,Se={};try{fe=await _x(y,D,B,ue,Q,!1)}catch(me){return B.filter(de=>de.shouldLoad).forEach(de=>{Se[de.route.id]={type:"error",error:me}}),Se}if(D.signal.aborted)return Se;if(!Gt(D.method))for(let me of B){if(fe[me.route.id]?.type==="error")break;!fe.hasOwnProperty(me.route.id)&&!C.loaderData.hasOwnProperty(me.route.id)&&(!C.errors||!C.errors.hasOwnProperty(me.route.id))&&me.shouldCallHandler()&&(fe[me.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${me.route.id}`)})}for(let[me,de]of Object.entries(fe))if(Fx(de)){let pe=de.result;Se[me]={type:"redirect",response:jx(pe,D,me,B,m)}}else Se[me]=await Ox(de);return Se}async function K(D,B,Q,ue){let fe=ta(Q,D,ue,null),Se=Promise.all(B.map(async pe=>{if(pe.matches&&pe.match&&pe.request&&pe.controller){let Ce=(await ta(pe.request,pe.matches,ue,pe.key))[pe.match.route.id];return{[pe.key]:Ce}}else return Promise.resolve({[pe.key]:{type:"error",error:Mn(404,{pathname:pe.path})}})})),me=await fe,de=(await Se).reduce((pe,we)=>Object.assign(pe,we),{});return{loaderResults:me,fetcherResults:de}}function ce(){H=!0,S.forEach((D,B)=>{le.has(B)&&re.add(B),nt(B)})}function Ee(D,B,Q={}){C.fetchers.set(D,B),dt({fetchers:new Map(C.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function _e(D,B,Q,ue={}){let fe=tr(C.matches,B);on(D),dt({errors:{[fe.route.id]:Q},fetchers:new Map(C.fetchers)},{flushSync:(ue&&ue.flushSync)===!0})}function $e(D){return oe.set(D,(oe.get(D)||0)+1),ge.has(D)&&ge.delete(D),C.fetchers.get(D)||wx}function Pt(D,B){nt(D,B?.reason),Ee(D,Sa(null))}function on(D){let B=C.fetchers.get(D);le.has(D)&&!(B&&B.state==="loading"&&M.has(D))&&nt(D),S.delete(D),M.delete(D),X.delete(D),ge.delete(D),re.delete(D),C.fetchers.delete(D)}function Nt(D){let B=(oe.get(D)||0)-1;B<=0?(oe.delete(D),ge.add(D)):oe.set(D,B),dt({fetchers:new Map(C.fetchers)})}function nt(D,B){let Q=le.get(D);Q&&(Q.abort(B),le.delete(D))}function Lt(D){for(let B of D){let Q=$e(B),ue=Sa(Q.data);C.fetchers.set(B,ue)}}function tt(){let D=[],B=!1;for(let Q of X){let ue=C.fetchers.get(Q);Le(ue,`Expected fetcher: ${Q}`),ue.state==="loading"&&(X.delete(Q),D.push(Q),B=!0)}return Lt(D),B}function Ln(D){let B=[];for(let[Q,ue]of M)if(ue<D){let fe=C.fetchers.get(Q);Le(fe,`Expected fetcher: ${Q}`),fe.state==="loading"&&(nt(Q),M.delete(Q),B.push(Q))}return Lt(B),B.length>0}function sn(D,B){let Q=C.blockers.get(D)||bi;return ve.get(D)!==B&&ve.set(D,B),Q}function Qi(D){C.blockers.delete(D),ve.delete(D)}function na(D,B){let Q=C.blockers.get(D)||bi;Le(Q.state==="unblocked"&&B.state==="blocked"||Q.state==="blocked"&&B.state==="blocked"||Q.state==="blocked"&&B.state==="proceeding"||Q.state==="blocked"&&B.state==="unblocked"||Q.state==="proceeding"&&B.state==="unblocked",`Invalid blocker state transition: ${Q.state} -> ${B.state}`);let ue=new Map(C.blockers);ue.set(D,B),dt({blockers:ue})}function ur({currentLocation:D,nextLocation:B,historyAction:Q}){if(ve.size===0)return;ve.size>1&&kt(!1,"A router only supports one blocker at a time");let ue=Array.from(ve.entries()),[fe,Se]=ue[ue.length-1],me=C.blockers.get(fe);if(!(me&&me.state==="proceeding")&&Se({currentLocation:D,nextLocation:B,historyAction:Q}))return fe}function Ca(D){let B=Mn(404,{pathname:D}),Q=p||d,{matches:ue,route:fe}=uo(Q);return{notFoundMatches:ue,route:fe,error:B}}function aa(D,B,Q){if(k=D,j=B,O=Q||null,!R&&C.navigation===Kc){R=!0;let ue=Pi(C.location,C.matches);ue!=null&&dt({restoreScrollPosition:ue})}return()=>{k=null,j=null,O=null}}function or(D,B){return O&&O(D,B.map(ue=>Q1(ue,C.loaderData)))||D.key}function sr(D,B){if(k&&j){let Q=or(D,B);k[Q]=j()}}function Pi(D,B){if(k){let Q=or(D,B),ue=k[Q];if(typeof ue=="number")return ue}return null}function cr(D,B,Q){if(t.patchRoutesOnNavigation)if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Ci(B,Q,m,!0)}}else return{active:!0,matches:Ci(B,Q,m,!0)||[]};return{active:!1,matches:null}}async function Ra(D,B,Q,ue){if(!t.patchRoutesOnNavigation)return{type:"success",matches:D};let fe=D;for(;;){let Se=p==null,me=p||d,de=c;try{await t.patchRoutesOnNavigation({signal:Q,path:B,matches:fe,fetcherKey:ue,patch:(Ce,Te)=>{Q.aborted||vg(Ce,Te,me,de,s,!1)}})}catch(Ce){return{type:"error",error:Ce,partialMatches:fe}}finally{Se&&!Q.aborted&&(d=[...d])}if(Q.aborted)return{type:"aborted"};let pe=er(me,B,m),we=null;if(pe){if(Object.keys(pe[0].params).length===0)return{type:"success",matches:pe};if(we=Ci(me,B,m,!0),!(we&&fe.length<we.length&&Da(fe,we.slice(0,fe.length))))return{type:"success",matches:pe}}if(we||(we=Ci(me,B,m,!0)),!we||Da(fe,we))return{type:"success",matches:null};fe=we}}function Da(D,B){return D.length===B.length&&D.every((Q,ue)=>Q.route.id===B[ue].route.id)}function Uo(D){c={},p=ji(D,s,void 0,c)}function Zi(D,B,Q=!1){let ue=p==null;vg(D,B,p||d,c,s,Q),ue&&(d=[...d],dt({}))}return z={get basename(){return m},get future(){return g},get state(){return C},get routes(){return d},get window(){return r},initialize:Je,subscribe:qt,enableScrollRestoration:aa,navigate:wn,fetch:ir,revalidate:ka,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:$e,resetFetcher:Pt,deleteFetcher:Nt,dispose:Mt,getBlocker:sn,deleteBlocker:Qi,patchRoutes:Zi,_internalFetchControllers:le,_internalSetRoutes:Uo,_internalSetStateDoNotUseOrYouWillBreakYourApp(D){dt(D)}},t.unstable_instrumentations&&(z=hx(z,t.unstable_instrumentations.map(D=>D.router).filter(Boolean))),z}function Tx(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function wf(t,r,l,u,o,s){let c,d;if(o){c=[];for(let m of r)if(c.push(m),m.route.id===o){d=m;break}}else c=r,d=r[r.length-1];let p=Bf(u||".",Hf(c),jn(t.pathname,l)||t.pathname,s==="path");if(u==null&&(p.search=t.search,p.hash=t.hash),(u==null||u===""||u===".")&&d){let m=qf(p.search);if(d.route.index&&!m)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&m){let y=new URLSearchParams(p.search),g=y.getAll("index");y.delete("index"),g.filter(b=>b).forEach(b=>y.append("index",b));let x=y.toString();p.search=x?`?${x}`:""}}return l!=="/"&&(p.pathname=ix({basename:l,pathname:p.pathname})),$n(p)}function gg(t,r,l){if(!l||!Tx(l))return{path:r};if(l.formMethod&&!Ix(l.formMethod))return{path:r,error:Mn(405,{method:l.formMethod})};let u=()=>({path:r,error:Mn(400,{type:"invalid-body"})}),s=(l.formMethod||"get").toUpperCase(),c=Jy(r);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!Gt(s))return u();let g=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((x,[b,k])=>`${x}${b}=${k}
`,""):String(l.body);return{path:r,submission:{formMethod:s,formAction:c,formEncType:l.formEncType,formData:void 0,json:void 0,text:g}}}else if(l.formEncType==="application/json"){if(!Gt(s))return u();try{let g=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:r,submission:{formMethod:s,formAction:c,formEncType:l.formEncType,formData:void 0,json:g,text:void 0}}}catch{return u()}}}Le(typeof FormData=="function","FormData is not available in this environment");let d,p;if(l.formData)d=Tf(l.formData),p=l.formData;else if(l.body instanceof FormData)d=Tf(l.body),p=l.body;else if(l.body instanceof URLSearchParams)d=l.body,p=Eg(d);else if(l.body==null)d=new URLSearchParams,p=new FormData;else try{d=new URLSearchParams(l.body),p=Eg(d)}catch{return u()}let m={formMethod:s,formAction:c,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(Gt(m.formMethod))return{path:r,submission:m};let y=rr(r);return t&&y.search&&qf(y.search)&&d.append("index",""),y.search=`?${d}`,{path:$n(y),submission:m}}function yg(t,r,l,u,o,s,c,d,p,m,y,g,x,b,k,O,j,R,E,T,q){let I=T?bn(T[1])?T[1].error:T[1].data:void 0,z=o.createURL(s.location),C=o.createURL(p),$;if(y&&s.errors){let ae=Object.keys(s.errors)[0];$=c.findIndex(H=>H.route.id===ae)}else if(T&&bn(T[1])){let ae=T[0];$=c.findIndex(H=>H.route.id===ae)-1}let Z=T?T[1].statusCode:void 0,L=Z&&Z>=400,ne={currentUrl:z,currentParams:s.matches[0]?.params||{},nextUrl:C,nextParams:c[0].params,...d,actionResult:I,actionStatus:Z},ie=Bi(c),Ae=c.map((ae,H)=>{let{route:re}=ae,le=null;if($!=null&&H>$?le=!1:re.lazy?le=!0:Ff(re)?y?le=Sf(re,s.loaderData,s.errors):kx(s.loaderData,s.matches[H],ae)&&(le=!0):le=!1,le!==null)return Ef(l,u,t,ie,ae,m,r,le);let ye=!1;typeof q=="boolean"?ye=q:L?ye=!1:(g||z.pathname+z.search===C.pathname+C.search||z.search!==C.search||Ax(s.matches[H],ae))&&(ye=!0);let A={...ne,defaultShouldRevalidate:ye},M=Ri(ae,A);return Ef(l,u,t,ie,ae,m,r,M,A,q)}),he=[];return k.forEach((ae,H)=>{if(y||!c.some(oe=>oe.route.id===ae.routeId)||b.has(H))return;let re=s.fetchers.get(H),le=re&&re.state!=="idle"&&re.data===void 0,ye=er(j,ae.path,R);if(!ye){if(E&&le)return;he.push({key:H,routeId:ae.routeId,path:ae.path,matches:null,match:null,request:null,controller:null});return}if(O.has(H))return;let A=po(ye,ae.path),M=new AbortController,X=bl(o,ae.path,M.signal),S=null;if(x.has(H))x.delete(H),S=Sl(l,u,X,ye,A,m,r);else if(le)g&&(S=Sl(l,u,X,ye,A,m,r));else{let oe;typeof q=="boolean"?oe=q:L?oe=!1:oe=g;let ge={...ne,defaultShouldRevalidate:oe};Ri(A,ge)&&(S=Sl(l,u,X,ye,A,m,r,ge))}S&&he.push({key:H,routeId:ae.routeId,path:ae.path,matches:S,match:A,request:X,controller:M})}),{dsMatches:Ae,revalidatingFetchers:he}}function Ff(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function Sf(t,r,l){if(t.lazy)return!0;if(!Ff(t))return!1;let u=r!=null&&t.id in r,o=l!=null&&l[t.id]!==void 0;return!u&&o?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!u&&!o}function kx(t,r,l){let u=!r||l.route.id!==r.route.id,o=!t.hasOwnProperty(l.route.id);return u||o}function Ax(t,r){let l=t.route.path;return t.pathname!==r.pathname||l!=null&&l.endsWith("*")&&t.params["*"]!==r.params["*"]}function Ri(t,r){if(t.route.shouldRevalidate){let l=t.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}function vg(t,r,l,u,o,s){let c;if(t){let m=u[t];Le(m,`No route found to patch children into: routeId = ${t}`),m.children||(m.children=[]),c=m.children}else c=l;let d=[],p=[];if(r.forEach(m=>{let y=c.find(g=>Vy(m,g));y?p.push({existingRoute:y,newRoute:m}):d.push(m)}),d.length>0){let m=ji(d,o,[t||"_","patch",String(c?.length||"0")],u);c.push(...m)}if(s&&p.length>0)for(let m=0;m<p.length;m++){let{existingRoute:y,newRoute:g}=p[m],x=y,[b]=ji([g],o,[],{},!0);Object.assign(x,{element:b.element?b.element:x.element,errorElement:b.errorElement?b.errorElement:x.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:x.hydrateFallbackElement})}}function Vy(t,r){return"id"in t&&"id"in r&&t.id===r.id?!0:t.index===r.index&&t.path===r.path&&t.caseSensitive===r.caseSensitive?(!t.children||t.children.length===0)&&(!r.children||r.children.length===0)?!0:t.children.every((l,u)=>r.children?.some(o=>Vy(l,o))):!1}var bg=new WeakMap,Xy=({key:t,route:r,manifest:l,mapRouteProperties:u})=>{let o=l[r.id];if(Le(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let s=o.lazy[t];if(!s)return;let c=bg.get(o);c||(c={},bg.set(o,c));let d=c[t];if(d)return d;let p=(async()=>{let m=I1(t),g=o[t]!==void 0&&t!=="hasErrorBoundary";if(m)kt(!m,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),c[t]=Promise.resolve();else if(g)kt(!1,`Route "${o.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let x=await s();x!=null&&(Object.assign(o,{[t]:x}),Object.assign(o,u(o)))}typeof o.lazy=="object"&&(o.lazy[t]=void 0,Object.values(o.lazy).every(x=>x===void 0)&&(o.lazy=void 0))})();return c[t]=p,p},xg=new WeakMap;function Cx(t,r,l,u,o){let s=l[t.id];if(Le(s,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let y=xg.get(s);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let g=(async()=>{Le(typeof t.lazy=="function","No lazy route function found");let x=await t.lazy(),b={};for(let k in x){let O=x[k];if(O===void 0)continue;let j=V1(k),E=s[k]!==void 0&&k!=="hasErrorBoundary";j?kt(!j,"Route property "+k+" is not a supported property to be returned from a lazy route function. This property will be ignored."):E?kt(!E,`Route "${s.id}" has a static property "${k}" defined but its lazy function is also returning a value for this property. The lazy route property "${k}" will be ignored.`):b[k]=O}Object.assign(s,b),Object.assign(s,{...u(s),lazy:void 0})})();return xg.set(s,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let c=Object.keys(t.lazy),d=[],p;for(let y of c){if(o&&o.includes(y))continue;let g=Xy({key:y,route:t,manifest:l,mapRouteProperties:u});g&&(d.push(g),y===r&&(p=g))}let m=d.length>0?Promise.all(d).then(()=>{}):void 0;return m?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:m,lazyHandlerPromise:p}}async function wg(t){let r=t.matches.filter(o=>o.shouldLoad),l={};return(await Promise.all(r.map(o=>o.resolve()))).forEach((o,s)=>{l[r[s].route.id]=o}),l}async function Rx(t){return t.matches.some(r=>r.route.middleware)?Qy(t,()=>wg(t)):wg(t)}function Qy(t,r){return Dx(t,r,u=>{if(qx(u))throw u;return u},Hx,l);function l(u,o,s){if(s)return Promise.resolve(Object.assign(s.value,{[o]:{type:"error",result:u}}));{let{matches:c}=t,d=Math.min(Math.max(c.findIndex(m=>m.route.id===o),0),Math.max(c.findIndex(m=>m.shouldCallHandler()),0)),p=tr(c,c[d].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:u}})}}}async function Dx(t,r,l,u,o){let{matches:s,request:c,params:d,context:p,unstable_pattern:m}=t,y=s.flatMap(x=>x.route.middleware?x.route.middleware.map(b=>[x.route.id,b]):[]);return await Py({request:c,params:d,context:p,unstable_pattern:m},y,r,l,u,o)}async function Py(t,r,l,u,o,s,c=0){let{request:d}=t;if(d.signal.aborted)throw d.signal.reason??new Error(`Request aborted: ${d.method} ${d.url}`);let p=r[c];if(!p)return await l();let[m,y]=p,g,x=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");try{return g={value:await Py(t,r,l,u,o,s,c+1)},g.value}catch(b){return g={value:await s(b,m,g)},g.value}};try{let b=await y(t,x),k=b!=null?u(b):void 0;return o(k)?k:g?k??g.value:(g={value:await x()},g.value)}catch(b){return await s(b,m,g)}}function Zy(t,r,l,u,o){let s=Xy({key:"middleware",route:u.route,manifest:r,mapRouteProperties:t}),c=Cx(u.route,Gt(l.method)?"action":"loader",r,t,o);return{middleware:s,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function Ef(t,r,l,u,o,s,c,d,p=null,m){let y=!1,g=Zy(t,r,l,o,s);return{...o,_lazyPromises:g,shouldLoad:d,shouldRevalidateArgs:p,shouldCallHandler(x){return y=!0,p?typeof m=="boolean"?Ri(o,{...p,defaultShouldRevalidate:m}):typeof x=="boolean"?Ri(o,{...p,defaultShouldRevalidate:x}):Ri(o,p):d},resolve(x){let{lazy:b,loader:k,middleware:O}=o.route,j=y||d||x&&!Gt(l.method)&&(b||k),R=O&&O.length>0&&!k&&!b;return j&&(Gt(l.method)||!R)?zx({request:l,unstable_pattern:u,match:o,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:x,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function Sl(t,r,l,u,o,s,c,d=null){return u.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,shouldRevalidateArgs:d,shouldCallHandler:()=>!1,_lazyPromises:Zy(t,r,l,p,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ef(t,r,l,Bi(u),p,s,c,!0,d))}async function _x(t,r,l,u,o,s){l.some(m=>m._lazyPromises?.middleware)&&await Promise.all(l.map(m=>m._lazyPromises?.middleware));let c={request:r,unstable_pattern:Bi(l),params:l[0].params,context:o,matches:l},p=await t({...c,fetcherKey:u,runClientMiddleware:m=>{let y=c;return Qy(y,()=>m({...y,fetcherKey:u,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(l.flatMap(m=>[m._lazyPromises?.handler,m._lazyPromises?.route]))}catch{}return p}async function zx({request:t,unstable_pattern:r,match:l,lazyHandlerPromise:u,lazyRoutePromise:o,handlerOverride:s,scopedContext:c}){let d,p,m=Gt(t.method),y=m?"action":"loader",g=x=>{let b,k=new Promise((R,E)=>b=E);p=()=>b(),t.signal.addEventListener("abort",p);let O=R=>typeof x!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${l.route.id}]`)):x({request:t,unstable_pattern:r,params:l.params,context:c},...R!==void 0?[R]:[]),j=(async()=>{try{return{type:"data",result:await(s?s(E=>O(E)):O())}}catch(R){return{type:"error",result:R}}})();return Promise.race([j,k])};try{let x=m?l.route.action:l.route.loader;if(u||o)if(x){let b,[k]=await Promise.all([g(x).catch(O=>{b=O}),u,o]);if(b!==void 0)throw b;d=k}else{await u;let b=m?l.route.action:l.route.loader;if(b)[d]=await Promise.all([g(b),o]);else if(y==="action"){let k=new URL(t.url),O=k.pathname+k.search;throw Mn(405,{method:t.method,pathname:O,routeId:l.route.id})}else return{type:"data",result:void 0}}else if(x)d=await g(x);else{let b=new URL(t.url),k=b.pathname+b.search;throw Mn(404,{pathname:k})}}catch(x){return{type:"error",result:x}}finally{p&&t.signal.removeEventListener("abort",p)}return d}async function Mx(t){let r=t.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?t.body==null?null:t.json():t.text()}async function Ox(t){let{result:r,type:l}=t;if(Yf(r)){let u;try{u=await Mx(r)}catch(o){return{type:"error",error:o}}return l==="error"?{type:"error",error:new Hi(r.status,r.statusText,u),statusCode:r.status,headers:r.headers}:{type:"data",data:u,statusCode:r.status,headers:r.headers}}return l==="error"?Cg(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:Ux(r),statusCode:Ni(r)?r.status:void 0,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:Ni(r)?r.status:void 0}:Cg(r)?{type:"data",data:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function jx(t,r,l,u,o){let s=t.headers.get("Location");if(Le(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!Do(s)){let c=u.slice(0,u.findIndex(d=>d.route.id===l)+1);s=wf(new URL(r.url),c,o,s),t.headers.set("Location",s)}return t}function Sg(t,r,l,u){let o=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Do(t)){let s=t,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s);if(o.includes(c.protocol))throw new Error("Invalid redirect location");let d=jn(c.pathname,l)!=null;if(c.origin===r.origin&&d)return c.pathname+c.search+c.hash}try{let s=u.createURL(t);if(o.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return t}function bl(t,r,l,u){let o=t.createURL(Jy(r)).toString(),s={signal:l};if(u&&Gt(u.formMethod)){let{formMethod:c,formEncType:d}=u;s.method=c.toUpperCase(),d==="application/json"?(s.headers=new Headers({"Content-Type":d}),s.body=JSON.stringify(u.json)):d==="text/plain"?s.body=u.text:d==="application/x-www-form-urlencoded"&&u.formData?s.body=Tf(u.formData):s.body=u.formData}return new Request(o,s)}function Tf(t){let r=new URLSearchParams;for(let[l,u]of t.entries())r.append(l,typeof u=="string"?u:u.name);return r}function Eg(t){let r=new FormData;for(let[l,u]of t.entries())r.append(l,u);return r}function Nx(t,r,l,u=!1,o=!1){let s={},c=null,d,p=!1,m={},y=l&&bn(l[1])?l[1].error:void 0;return t.forEach(g=>{if(!(g.route.id in r))return;let x=g.route.id,b=r[x];if(Le(!zr(b),"Cannot handle redirect results in processLoaderData"),bn(b)){let k=b.error;if(y!==void 0&&(k=y,y=void 0),c=c||{},o)c[x]=k;else{let O=tr(t,x);c[O.route.id]==null&&(c[O.route.id]=k)}u||(s[x]=Gy),p||(p=!0,d=Ni(b.error)?b.error.status:500),b.headers&&(m[x]=b.headers)}else s[x]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(d=b.statusCode),b.headers&&(m[x]=b.headers)}),y!==void 0&&l&&(c={[l[0]]:y},l[2]&&(s[l[2]]=void 0)),{loaderData:s,errors:c,statusCode:d||200,loaderHeaders:m}}function Tg(t,r,l,u,o,s){let{loaderData:c,errors:d}=Nx(r,l,u);return o.filter(p=>!p.matches||p.matches.some(m=>m.shouldLoad)).forEach(p=>{let{key:m,match:y,controller:g}=p;if(g&&g.signal.aborted)return;let x=s[m];if(Le(x,"Did not find corresponding fetcher result"),bn(x)){let b=tr(t.matches,y?.route.id);d&&d[b.route.id]||(d={...d,[b.route.id]:x.error}),t.fetchers.delete(m)}else if(zr(x))Le(!1,"Unhandled fetcher revalidation redirect");else{let b=Sa(x.data);t.fetchers.set(m,b)}}),{loaderData:c,errors:d}}function kg(t,r,l,u){let o=Object.entries(r).filter(([,s])=>s!==Gy).reduce((s,[c,d])=>(s[c]=d,s),{});for(let s of l){let c=s.route.id;if(!r.hasOwnProperty(c)&&t.hasOwnProperty(c)&&s.route.loader&&(o[c]=t[c]),u&&u.hasOwnProperty(c))break}return o}function Ag(t){return t?bn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function tr(t,r){return(r?t.slice(0,t.findIndex(u=>u.route.id===r)+1):[...t]).reverse().find(u=>u.route.hasErrorBoundary===!0)||t[0]}function uo(t){let r=t.length===1?t[0]:t.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Mn(t,{pathname:r,routeId:l,method:u,type:o,message:s}={}){let c="Unknown Server Error",d="Unknown @remix-run/router error";return t===400?(c="Bad Request",u&&r&&l?d=`You made a ${u} request to "${r}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.`:o==="invalid-body"&&(d="Unable to encode submission body")):t===403?(c="Forbidden",d=`Route "${l}" does not match URL "${r}"`):t===404?(c="Not Found",d=`No route matches URL "${r}"`):t===405&&(c="Method Not Allowed",u&&r&&l?d=`You made a ${u.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.`:u&&(d=`Invalid request method "${u.toUpperCase()}"`)),new Hi(t||500,c,new Error(d),!0)}function oo(t){let r=Object.entries(t);for(let l=r.length-1;l>=0;l--){let[u,o]=r[l];if(zr(o))return{key:u,result:o}}}function Jy(t){let r=typeof t=="string"?rr(t):t;return $n({...r,hash:""})}function Lx(t,r){return t.pathname!==r.pathname||t.search!==r.search?!1:t.hash===""?r.hash!=="":t.hash===r.hash?!0:r.hash!==""}function Ux(t){return new Hi(t.init?.status??500,t.init?.statusText??"Internal Server Error",t.data)}function Hx(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([r,l])=>typeof r=="string"&&Bx(l))}function Bx(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Fx(t){return Yf(t.result)&&qy.has(t.result.status)}function bn(t){return t.type==="error"}function zr(t){return(t&&t.type)==="redirect"}function Cg(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Yf(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Yx(t){return qy.has(t)}function qx(t){return Yf(t)&&Yx(t.status)&&t.headers.has("Location")}function Ix(t){return bx.has(t.toUpperCase())}function Gt(t){return yx.has(t.toUpperCase())}function qf(t){return new URLSearchParams(t).getAll("index").some(r=>r==="")}function po(t,r){let l=typeof r=="string"?rr(r).search:r.search;if(t[t.length-1].route.index&&qf(l||""))return t[t.length-1];let u=Uy(t);return u[u.length-1]}function Rg(t){let{formMethod:r,formAction:l,formEncType:u,text:o,formData:s,json:c}=t;if(!(!r||!l||!u)){if(o!=null)return{formMethod:r,formAction:l,formEncType:u,formData:void 0,json:void 0,text:o};if(s!=null)return{formMethod:r,formAction:l,formEncType:u,formData:s,json:void 0,text:void 0};if(c!==void 0)return{formMethod:r,formAction:l,formEncType:u,formData:void 0,json:c,text:void 0}}}function Wc(t,r){return r?{state:"loading",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Gx(t,r){return{state:"submitting",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function xi(t,r){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function Vx(t,r){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r?r.data:void 0}}function Sa(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Xx(t,r){try{let l=t.sessionStorage.getItem(Iy);if(l){let u=JSON.parse(l);for(let[o,s]of Object.entries(u||{}))s&&Array.isArray(s)&&r.set(o,new Set(s||[]))}}catch{}}function Qx(t,r){if(r.size>0){let l={};for(let[u,o]of r)l[u]=[...o];try{t.sessionStorage.setItem(Iy,JSON.stringify(l))}catch(u){kt(!1,`Failed to save applied view transitions in sessionStorage (${u}).`)}}}function Dg(){let t,r,l=new Promise((u,o)=>{t=async s=>{u(s);try{await l}catch{}},r=async s=>{o(s);try{await l}catch{}}});return{promise:l,resolve:t,reject:r}}var Or=V.createContext(null);Or.displayName="DataRouter";var Fi=V.createContext(null);Fi.displayName="DataRouterState";var $y=V.createContext(!1);function Px(){return V.useContext($y)}var If=V.createContext({isTransitioning:!1});If.displayName="ViewTransition";var Ky=V.createContext(new Map);Ky.displayName="Fetchers";var Zx=V.createContext(null);Zx.displayName="Await";var Nn=V.createContext(null);Nn.displayName="Navigation";var _o=V.createContext(null);_o.displayName="Location";var Gn=V.createContext({outlet:null,matches:[],isDataRoute:!1});Gn.displayName="Route";var Gf=V.createContext(null);Gf.displayName="RouteError";var Wy="REACT_ROUTER_ERROR",Jx="REDIRECT",$x="ROUTE_ERROR_RESPONSE";function Kx(t){if(t.startsWith(`${Wy}:${Jx}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Wx(t){if(t.startsWith(`${Wy}:${$x}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Hi(r.status,r.statusText,r.data)}catch{}}function ew(t,{relative:r}={}){Le(Yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=V.useContext(Nn),{hash:o,pathname:s,search:c}=qi(t,{relative:r}),d=s;return l!=="/"&&(d=s==="/"?l:Jn([l,s])),u.createHref({pathname:d,search:c,hash:o})}function Yi(){return V.useContext(_o)!=null}function Kn(){return Le(Yi(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(_o).location}var ev="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tv(t){V.useContext(Nn).static||V.useLayoutEffect(t)}function nv(){let{isDataRoute:t}=V.useContext(Gn);return t?pw():tw()}function tw(){Le(Yi(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(Or),{basename:r,navigator:l}=V.useContext(Nn),{matches:u}=V.useContext(Gn),{pathname:o}=Kn(),s=JSON.stringify(Hf(u)),c=V.useRef(!1);return tv(()=>{c.current=!0}),V.useCallback((p,m={})=>{if(kt(c.current,ev),!c.current)return;if(typeof p=="number"){l.go(p);return}let y=Bf(p,JSON.parse(s),o,m.relative==="path");t==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Jn([r,y.pathname])),(m.replace?l.replace:l.push)(y,m.state,m)},[r,l,s,o,t])}var nw=V.createContext(null);function aw(t){let r=V.useContext(Gn).outlet;return V.useMemo(()=>r&&V.createElement(nw.Provider,{value:t},r),[r,t])}function av(){let{matches:t}=V.useContext(Gn),r=t[t.length-1];return r?r.params:{}}function qi(t,{relative:r}={}){let{matches:l}=V.useContext(Gn),{pathname:u}=Kn(),o=JSON.stringify(Hf(l));return V.useMemo(()=>Bf(t,JSON.parse(o),u,r==="path"),[t,o,u,r])}function rw(t,r,l,u,o){Le(Yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=V.useContext(Nn),{matches:c}=V.useContext(Gn),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",g=d&&d.route;{let E=g&&g.path||"";lv(m,!g||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let x=Kn(),b;b=x;let k=b.pathname||"/",O=k;if(y!=="/"){let E=y.replace(/^\//,"").split("/");O="/"+k.replace(/^\//,"").split("/").slice(E.length).join("/")}let j=er(t,{pathname:O});return kt(g||j!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),kt(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),sw(j&&j.map(E=>Object.assign({},E,{params:Object.assign({},p,E.params),pathname:Jn([y,s.encodeLocation?s.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?y:Jn([y,s.encodeLocation?s.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),c,l,u,o)}function lw(){let t=mw(),r=Ni(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,u="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:u},s={padding:"2px 4px",backgroundColor:u},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:s},"ErrorBoundary")," or"," ",V.createElement("code",{style:s},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},r),l?V.createElement("pre",{style:o},l):null,c)}var iw=V.createElement(lw,null),rv=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const l=Wx(t.digest);l&&(t=l)}let r=t!==void 0?V.createElement(Gn.Provider,{value:this.props.routeContext},V.createElement(Gf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?V.createElement(uw,{error:t},r):r}};rv.contextType=$y;var ef=new WeakMap;function uw({children:t,error:r}){let{basename:l}=V.useContext(Nn);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=Kx(r.digest);if(u){let o=ef.get(r);if(o)throw o;let s=By(u.location,l);if(Hy&&!ef.get(r))if(s.isExternal||u.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:u.replace}));throw ef.set(r,c),c}return V.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function ow({routeContext:t,match:r,children:l}){let u=V.useContext(Or);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),V.createElement(Gn.Provider,{value:t},l)}function sw(t,r=[],l=null,u=null,o=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let s=t,c=l?.errors;if(c!=null){let y=s.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Le(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let d=!1,p=-1;if(l)for(let y=0;y<s.length;y++){let g=s[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=y),g.route.id){let{loaderData:x,errors:b}=l,k=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||k){d=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}let m=l&&u?(y,g)=>{u(y,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Bi(l.matches),errorInfo:g})}:void 0;return s.reduceRight((y,g,x)=>{let b,k=!1,O=null,j=null;l&&(b=c&&g.route.id?c[g.route.id]:void 0,O=g.route.errorElement||iw,d&&(p<0&&x===0?(lv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,j=null):p===x&&(k=!0,j=g.route.hydrateFallbackElement||null)));let R=r.concat(s.slice(0,x+1)),E=()=>{let T;return b?T=O:k?T=j:g.route.Component?T=V.createElement(g.route.Component,null):g.route.element?T=g.route.element:T=y,V.createElement(ow,{match:g,routeContext:{outlet:y,matches:R,isDataRoute:l!=null},children:T})};return l&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?V.createElement(rv,{location:l.location,revalidation:l.revalidation,component:O,error:b,children:E(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:m}):E()},null)}function Vf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cw(t){let r=V.useContext(Or);return Le(r,Vf(t)),r}function fw(t){let r=V.useContext(Fi);return Le(r,Vf(t)),r}function hw(t){let r=V.useContext(Gn);return Le(r,Vf(t)),r}function Xf(t){let r=hw(t),l=r.matches[r.matches.length-1];return Le(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function dw(){return Xf("useRouteId")}function mw(){let t=V.useContext(Gf),r=fw("useRouteError"),l=Xf("useRouteError");return t!==void 0?t:r.errors?.[l]}function pw(){let{router:t}=cw("useNavigate"),r=Xf("useNavigate"),l=V.useRef(!1);return tv(()=>{l.current=!0}),V.useCallback(async(o,s={})=>{kt(l.current,ev),l.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:r,...s}))},[t,r])}var _g={};function lv(t,r,l){!r&&!_g[t]&&(_g[t]=!0,kt(!1,l))}var zg={};function Mg(t,r){!t&&!zg[r]&&(zg[r]=!0,console.warn(r))}var gw="useOptimistic",Og=L1[gw],yw=()=>{};function vw(t){return Og?Og(t):[t,yw]}function bw(t){let r={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&kt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:V.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&kt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:V.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&kt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:V.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),r}var xw=["HydrateFallback","hydrateFallbackElement"],ww=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",t(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",r(l))}})}};function Sw({router:t,flushSync:r,onError:l,unstable_useTransitions:u}){u=Px()||u;let[s,c]=V.useState(t.state),[d,p]=vw(s),[m,y]=V.useState(),[g,x]=V.useState({isTransitioning:!1}),[b,k]=V.useState(),[O,j]=V.useState(),[R,E]=V.useState(),T=V.useRef(new Map),q=V.useCallback(($,{deletedFetchers:Z,newErrors:L,flushSync:ne,viewTransitionOpts:ie})=>{L&&l&&Object.values(L).forEach(he=>l(he,{location:$.location,params:$.matches[0]?.params??{},unstable_pattern:Bi($.matches)})),$.fetchers.forEach((he,ae)=>{he.data!==void 0&&T.current.set(ae,he.data)}),Z.forEach(he=>T.current.delete(he)),Mg(ne===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ae=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(Mg(ie==null||Ae,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ie||!Ae){r&&ne?r(()=>c($)):u===!1?c($):V.startTransition(()=>{u===!0&&p(he=>jg(he,$)),c($)});return}if(r&&ne){r(()=>{O&&(b?.resolve(),O.skipTransition()),x({isTransitioning:!0,flushSync:!0,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})});let he=t.window.document.startViewTransition(()=>{r(()=>c($))});he.finished.finally(()=>{r(()=>{k(void 0),j(void 0),y(void 0),x({isTransitioning:!1})})}),r(()=>j(he));return}O?(b?.resolve(),O.skipTransition(),E({state:$,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})):(y($),x({isTransitioning:!0,flushSync:!1,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation}))},[t.window,r,O,b,u,p,l]);V.useLayoutEffect(()=>t.subscribe(q),[t,q]),V.useEffect(()=>{g.isTransitioning&&!g.flushSync&&k(new ww)},[g]),V.useEffect(()=>{if(b&&m&&t.window){let $=m,Z=b.promise,L=t.window.document.startViewTransition(async()=>{u===!1?c($):V.startTransition(()=>{u===!0&&p(ne=>jg(ne,$)),c($)}),await Z});L.finished.finally(()=>{k(void 0),j(void 0),y(void 0),x({isTransitioning:!1})}),j(L)}},[m,b,t.window,u,p]),V.useEffect(()=>{b&&m&&d.location.key===m.location.key&&b.resolve()},[b,O,d.location,m]),V.useEffect(()=>{!g.isTransitioning&&R&&(y(R.state),x({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}),E(void 0))},[g.isTransitioning,R]);let I=V.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:$=>t.navigate($),push:($,Z,L)=>t.navigate($,{state:Z,preventScrollReset:L?.preventScrollReset}),replace:($,Z,L)=>t.navigate($,{replace:!0,state:Z,preventScrollReset:L?.preventScrollReset})}),[t]),z=t.basename||"/",C=V.useMemo(()=>({router:t,navigator:I,static:!1,basename:z,onError:l}),[t,I,z,l]);return V.createElement(V.Fragment,null,V.createElement(Or.Provider,{value:C},V.createElement(Fi.Provider,{value:d},V.createElement(Ky.Provider,{value:T.current},V.createElement(If.Provider,{value:g},V.createElement(Aw,{basename:z,location:d.location,navigationType:d.historyAction,navigator:I,unstable_useTransitions:u},V.createElement(Ew,{routes:t.routes,future:t.future,state:d,onError:l})))))),null)}function jg(t,r){return{...t,navigation:r.navigation.state!=="idle"?r.navigation:t.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:t.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:t.actionData,fetchers:r.fetchers}}var Ew=V.memo(Tw);function Tw({routes:t,future:r,state:l,onError:u}){return rw(t,void 0,l,u,r)}function kw(t){return aw(t.context)}function Aw({basename:t="/",children:r=null,location:l,navigationType:u="POP",navigator:o,static:s=!1,unstable_useTransitions:c}){Le(!Yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=V.useMemo(()=>({basename:d,navigator:o,static:s,unstable_useTransitions:c,future:{}}),[d,o,s,c]);typeof l=="string"&&(l=rr(l));let{pathname:m="/",search:y="",hash:g="",state:x=null,key:b="default"}=l,k=V.useMemo(()=>{let O=jn(m,d);return O==null?null:{location:{pathname:O,search:y,hash:g,state:x,key:b},navigationType:u}},[d,m,y,g,x,b,u]);return kt(k!=null,`<Router basename="${d}"> is not able to match the URL "${m}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:V.createElement(Nn.Provider,{value:p},V.createElement(_o.Provider,{children:r,value:k}))}var go="get",yo="application/x-www-form-urlencoded";function zo(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Cw(t){return zo(t)&&t.tagName.toLowerCase()==="button"}function Rw(t){return zo(t)&&t.tagName.toLowerCase()==="form"}function Dw(t){return zo(t)&&t.tagName.toLowerCase()==="input"}function _w(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zw(t,r){return t.button===0&&(!r||r==="_self")&&!_w(t)}var so=null;function Mw(){if(so===null)try{new FormData(document.createElement("form"),0),so=!1}catch{so=!0}return so}var Ow=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tf(t){return t!=null&&!Ow.has(t)?(kt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yo}"`),null):t}function jw(t,r){let l,u,o,s,c;if(Rw(t)){let d=t.getAttribute("action");u=d?jn(d,r):null,l=t.getAttribute("method")||go,o=tf(t.getAttribute("enctype"))||yo,s=new FormData(t)}else if(Cw(t)||Dw(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(u=p?jn(p,r):null,l=t.getAttribute("formmethod")||d.getAttribute("method")||go,o=tf(t.getAttribute("formenctype"))||tf(d.getAttribute("enctype"))||yo,s=new FormData(d,t),!Mw()){let{name:m,type:y,value:g}=t;if(y==="image"){let x=m?`${m}.`:"";s.append(`${x}x`,"0"),s.append(`${x}y`,"0")}else m&&s.append(m,g)}}else{if(zo(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=go,u=null,o=yo,c=t}return s&&o==="text/plain"&&(c=s,s=void 0),{action:u,method:l.toLowerCase(),encType:o,formData:s,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qf(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Nw(t,r,l,u){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${u}`:o.pathname=`${o.pathname}.${u}`:o.pathname==="/"?o.pathname=`_root.${u}`:r&&jn(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Lw(t,r){if(t.id in r)return r[t.id];try{let l=await import(t.module);return r[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Uw(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Hw(t,r,l){let u=await Promise.all(t.map(async o=>{let s=r.routes[o.route.id];if(s){let c=await Lw(s,l);return c.links?c.links():[]}return[]}));return qw(u.flat(1).filter(Uw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ng(t,r,l,u,o,s){let c=(p,m)=>l[m]?p.route.id!==l[m].route.id:!0,d=(p,m)=>l[m].pathname!==p.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==p.params["*"];return s==="assets"?r.filter((p,m)=>c(p,m)||d(p,m)):s==="data"?r.filter((p,m)=>{let y=u.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Bw(t,r,{includeHydrateFallback:l}={}){return Fw(t.map(u=>{let o=r.routes[u.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),l&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function Fw(t){return[...new Set(t)]}function Yw(t){let r={},l=Object.keys(t).sort();for(let u of l)r[u]=t[u];return r}function qw(t,r){let l=new Set;return new Set(r),t.reduce((u,o)=>{let s=JSON.stringify(Yw(o));return l.has(s)||(l.add(s),u.push({key:s,link:o})),u},[])}function iv(){let t=V.useContext(Or);return Qf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Iw(){let t=V.useContext(Fi);return Qf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Pf=V.createContext(void 0);Pf.displayName="FrameworkContext";function uv(){let t=V.useContext(Pf);return Qf(t,"You must render this element inside a <HydratedRouter> element"),t}function Gw(t,r){let l=V.useContext(Pf),[u,o]=V.useState(!1),[s,c]=V.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:g}=r,x=V.useRef(null);V.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let O=R=>{R.forEach(E=>{c(E.isIntersecting)})},j=new IntersectionObserver(O,{threshold:.5});return x.current&&j.observe(x.current),()=>{j.disconnect()}}},[t]),V.useEffect(()=>{if(u){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[u]);let b=()=>{o(!0)},k=()=>{o(!1),c(!1)};return l?t!=="intent"?[s,x,{}]:[s,x,{onFocus:wi(d,b),onBlur:wi(p,k),onMouseEnter:wi(m,b),onMouseLeave:wi(y,k),onTouchStart:wi(g,b)}]:[!1,x,{}]}function wi(t,r){return l=>{t&&t(l),l.defaultPrevented||r(l)}}function Vw({page:t,...r}){let{router:l}=iv(),u=V.useMemo(()=>er(l.routes,t,l.basename),[l.routes,t,l.basename]);return u?V.createElement(Qw,{page:t,matches:u,...r}):null}function Xw(t){let{manifest:r,routeModules:l}=uv(),[u,o]=V.useState([]);return V.useEffect(()=>{let s=!1;return Hw(t,r,l).then(c=>{s||o(c)}),()=>{s=!0}},[t,r,l]),u}function Qw({page:t,matches:r,...l}){let u=Kn(),{future:o,manifest:s,routeModules:c}=uv(),{basename:d}=iv(),{loaderData:p,matches:m}=Iw(),y=V.useMemo(()=>Ng(t,r,m,s,u,"data"),[t,r,m,s,u]),g=V.useMemo(()=>Ng(t,r,m,s,u,"assets"),[t,r,m,s,u]),x=V.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let O=new Set,j=!1;if(r.forEach(E=>{let T=s.routes[E.route.id];!T||!T.hasLoader||(!y.some(q=>q.route.id===E.route.id)&&E.route.id in p&&c[E.route.id]?.shouldRevalidate||T.hasClientLoader?j=!0:O.add(E.route.id))}),O.size===0)return[];let R=Nw(t,d,o.unstable_trailingSlashAwareDataRequests,"data");return j&&O.size>0&&R.searchParams.set("_routes",r.filter(E=>O.has(E.route.id)).map(E=>E.route.id).join(",")),[R.pathname+R.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,u,s,y,r,t,c]),b=V.useMemo(()=>Bw(g,s),[g,s]),k=Xw(g);return V.createElement(V.Fragment,null,x.map(O=>V.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...l})),b.map(O=>V.createElement("link",{key:O,rel:"modulepreload",href:O,...l})),k.map(({key:O,link:j})=>V.createElement("link",{key:O,nonce:l.nonce,...j})))}function Pw(...t){return r=>{t.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var Zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zw&&(window.__reactRouterVersion="7.12.0")}catch{}function Jw(t,r){return Ex({basename:r?.basename,getContext:r?.getContext,future:r?.future,history:B1({window:r?.window}),hydrationData:r?.hydrationData||$w(),routes:t,mapRouteProperties:bw,hydrationRouteProperties:xw,dataStrategy:r?.dataStrategy,patchRoutesOnNavigation:r?.patchRoutesOnNavigation,window:r?.window,unstable_instrumentations:r?.unstable_instrumentations}).initialize()}function $w(){let t=window?.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Kw(t.errors)}),t}function Kw(t){if(!t)return null;let r=Object.entries(t),l={};for(let[u,o]of r)if(o&&o.__type==="RouteErrorResponse")l[u]=new Hi(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let s=window[o.__subType];if(typeof s=="function")try{let c=new s(o.message);c.stack="",l[u]=c}catch{}}if(l[u]==null){let s=new Error(o.message);s.stack="",l[u]=s}}else l[u]=o;return l}var ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ii=V.forwardRef(function({onClick:r,discover:l="render",prefetch:u="none",relative:o,reloadDocument:s,replace:c,state:d,target:p,to:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:x,...b},k){let{basename:O,unstable_useTransitions:j}=V.useContext(Nn),R=typeof m=="string"&&ov.test(m),E=By(m,O);m=E.to;let T=ew(m,{relative:o}),[q,I,z]=Gw(u,b),C=tS(m,{replace:c,state:d,target:p,preventScrollReset:y,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:j});function $(L){r&&r(L),L.defaultPrevented||C(L)}let Z=V.createElement("a",{...b,...z,href:E.absoluteURL||T,onClick:E.isExternal||s?r:$,ref:Pw(k,I),target:p,"data-discover":!R&&l==="render"?"true":void 0});return q&&!R?V.createElement(V.Fragment,null,Z,V.createElement(Vw,{page:T})):Z});Ii.displayName="Link";var xo=V.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:u="",end:o=!1,style:s,to:c,viewTransition:d,children:p,...m},y){let g=qi(c,{relative:m.relative}),x=Kn(),b=V.useContext(Fi),{navigator:k,basename:O}=V.useContext(Nn),j=b!=null&&iS(g)&&d===!0,R=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,E=x.pathname,T=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(E=E.toLowerCase(),T=T?T.toLowerCase():null,R=R.toLowerCase()),T&&O&&(T=jn(T,O)||T);const q=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let I=E===R||!o&&E.startsWith(R)&&E.charAt(q)==="/",z=T!=null&&(T===R||!o&&T.startsWith(R)&&T.charAt(R.length)==="/"),C={isActive:I,isPending:z,isTransitioning:j},$=I?r:void 0,Z;typeof u=="function"?Z=u(C):Z=[u,I?"active":null,z?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let L=typeof s=="function"?s(C):s;return V.createElement(Ii,{...m,"aria-current":$,className:Z,ref:y,style:L,to:c,viewTransition:d},typeof p=="function"?p(C):p)});xo.displayName="NavLink";var Ww=V.forwardRef(({discover:t="render",fetcherKey:r,navigate:l,reloadDocument:u,replace:o,state:s,method:c=go,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:x,...b},k)=>{let{unstable_useTransitions:O}=V.useContext(Nn),j=rS(),R=lS(d,{relative:m}),E=c.toLowerCase()==="get"?"get":"post",T=typeof d=="string"&&ov.test(d),q=I=>{if(p&&p(I),I.defaultPrevented)return;I.preventDefault();let z=I.nativeEvent.submitter,C=z?.getAttribute("formmethod")||c,$=()=>j(z||I.currentTarget,{fetcherKey:r,method:C,navigate:l,replace:o,state:s,relative:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:x});O&&l!==!1?V.startTransition(()=>$()):$()};return V.createElement("form",{ref:k,method:E,action:R,onSubmit:u?p:q,...b,"data-discover":!T&&t==="render"?"true":void 0})});Ww.displayName="Form";function eS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sv(t){let r=V.useContext(Or);return Le(r,eS(t)),r}function tS(t,{target:r,replace:l,state:u,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let m=nv(),y=Kn(),g=qi(t,{relative:s});return V.useCallback(x=>{if(zw(x,r)){x.preventDefault();let b=l!==void 0?l:$n(y)===$n(g),k=()=>m(t,{replace:b,state:u,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:d});p?V.startTransition(()=>k()):k()}},[y,m,g,l,u,r,t,o,s,c,d,p])}var nS=0,aS=()=>`__${String(++nS)}__`;function rS(){let{router:t}=sv("useSubmit"),{basename:r}=V.useContext(Nn),l=dw(),u=t.fetch,o=t.navigate;return V.useCallback(async(s,c={})=>{let{action:d,method:p,encType:m,formData:y,body:g}=jw(s,r);if(c.navigate===!1){let x=c.fetcherKey||aS();await u(x,l,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:l,flushSync:c.flushSync,viewTransition:c.viewTransition})},[u,o,r,l])}function lS(t,{relative:r}={}){let{basename:l}=V.useContext(Nn),u=V.useContext(Gn);Le(u,"useFormAction must be used inside a RouteContext");let[o]=u.matches.slice(-1),s={...qi(t||".",{relative:r})},c=Kn();if(t==null){s.search=c.search;let d=new URLSearchParams(s.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(g=>g).forEach(g=>d.append("index",g));let y=d.toString();s.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(s.pathname=s.pathname==="/"?l:Jn([l,s.pathname])),$n(s)}function iS(t,{relative:r}={}){let l=V.useContext(If);Le(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=sv("useViewTransitionState"),o=qi(t,{relative:r});if(!l.isTransitioning)return!1;let s=jn(l.currentLocation.pathname,u)||l.currentLocation.pathname,c=jn(l.nextLocation.pathname,u)||l.nextLocation.pathname;return bo(o.pathname,c)!=null||bo(o.pathname,s)!=null}function uS(){return W.jsx("footer",{id:"footer",className:"mt-auto px-4 py-2 bg-gray-200 text-center",children:W.jsx("p",{children:"Copyright © 2026"})})}const Ea={HOME:{label:"Home",path:"/"},INSTRUCTIONS:{label:"Guides",path:"/instructions"},SETUP:{label:"Getting Started",path:"/setup"},EXTRA_TASKS:{label:"Extra Tasks",path:"/extra-tasks"},HELP:{label:"HELP!",path:"/help"},CREDITS:{label:"Credits",path:"/credits"}},Di=t=>`/js-content/pr-preview/pr-65/${t}`,cv=()=>W.jsx("div",{className:"w-fit",children:W.jsx("div",{className:"flex justify-evenly gap-2",children:["bg-red-500","bg-yellow-500","bg-green-500"].map(t=>W.jsx("div",{className:`rounded-full aspect-square h-4 ${t}`},t))})}),oS=()=>W.jsxs("div",{className:"w-full bg-black-700 flex justify-between items-center px-4 py-2",children:[W.jsx(cv,{}),W.jsx("h1",{className:"text-5xl font-mono font-semibold text-gray",children:"JavaScript Content"}),W.jsxs("div",{className:"flex gap-4 justify-between",children:[W.jsx("img",{src:Di("sunshine.svg"),className:"h-8 aspect-square",alt:"Theme"}),W.jsx("img",{src:Di("help.svg"),className:"h-8 aspect-square",alt:"Help"})]})]}),sS=()=>{const t=Kn().pathname.split("/")[1]||"";return W.jsx("nav",{className:"w-full bg-black-800",children:W.jsx("ul",{className:"flex justify-evenly items-center flex-nowrap",children:[Ea.HOME,Ea.SETUP,Ea.INSTRUCTIONS,Ea.EXTRA_TASKS,Ea.HELP,Ea.CREDITS].map(({label:r,path:l})=>W.jsx("li",{className:"grow font-fira",children:W.jsx(Ii,{to:l,className:`text-gray text-center text-md block py-2 px-4 hover:bg-black-900 cursor-pointer text-2xl ${t===l.split("/")[1]?"bg-black-900":""}`,children:r})},r))})})},cS=()=>{const t=Kn().pathname.split("/")[1]||"home";return W.jsx("nav",{className:"bg-black-900 w-full text-white/20 px-4 py-2 text-2xl font-mono",children:`src > ${t.split(" ").join("-")}.html`})};function fS(){return W.jsxs("header",{id:"header",className:"flex flex-col",children:[W.jsx(oS,{}),W.jsx(sS,{}),W.jsx(cS,{})]})}function hS(){V.useEffect(()=>{document.body.classList.add("is-preload");const t=()=>{document.body.classList.remove("is-preload")};return document.readyState==="complete"?window.setTimeout(t,0):window.addEventListener("load",t,{once:!0}),()=>{window.removeEventListener("load",t),t()}},[])}const dS=()=>(hS(),W.jsxs("div",{className:"flex flex-col min-h-screen",children:[W.jsx(fS,{}),W.jsx("main",{className:"bg-black-700 grow",children:W.jsx(kw,{})}),W.jsx(uS,{})]}));function mS(t,r){const l={};return(t[t.length-1]===""?[...t,""]:t).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const pS=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gS=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yS={};function Lg(t,r){return(yS.jsx?gS:pS).test(t)}const vS=/[ \t\n\f\r]/g;function bS(t){return typeof t=="object"?t.type==="text"?Ug(t.value):!1:Ug(t)}function Ug(t){return t.replace(vS,"")===""}class Gi{constructor(r,l,u){this.normal=l,this.property=r,u&&(this.space=u)}}Gi.prototype.normal={};Gi.prototype.property={};Gi.prototype.space=void 0;function fv(t,r){const l={},u={};for(const o of t)Object.assign(l,o.property),Object.assign(u,o.normal);return new Gi(l,u,r)}function kf(t){return t.toLowerCase()}class un{constructor(r,l){this.attribute=l,this.property=r}}un.prototype.attribute="";un.prototype.booleanish=!1;un.prototype.boolean=!1;un.prototype.commaOrSpaceSeparated=!1;un.prototype.commaSeparated=!1;un.prototype.defined=!1;un.prototype.mustUseProperty=!1;un.prototype.number=!1;un.prototype.overloadedBoolean=!1;un.prototype.property="";un.prototype.spaceSeparated=!1;un.prototype.space=void 0;let xS=0;const Ne=jr(),_t=jr(),Af=jr(),se=jr(),ct=jr(),El=jr(),vn=jr();function jr(){return 2**++xS}const Cf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ne,booleanish:_t,commaOrSpaceSeparated:vn,commaSeparated:El,number:se,overloadedBoolean:Af,spaceSeparated:ct},Symbol.toStringTag,{value:"Module"})),nf=Object.keys(Cf);class Zf extends un{constructor(r,l,u,o){let s=-1;if(super(r,l),Hg(this,"space",o),typeof u=="number")for(;++s<nf.length;){const c=nf[s];Hg(this,nf[s],(u&Cf[c])===Cf[c])}}}Zf.prototype.defined=!0;function Hg(t,r,l){l&&(t[r]=l)}function kl(t){const r={},l={};for(const[u,o]of Object.entries(t.properties)){const s=new Zf(u,t.transform(t.attributes||{},u),o,t.space);t.mustUseProperty&&t.mustUseProperty.includes(u)&&(s.mustUseProperty=!0),r[u]=s,l[kf(u)]=u,l[kf(s.attribute)]=u}return new Gi(r,l,t.space)}const hv=kl({properties:{ariaActiveDescendant:null,ariaAtomic:_t,ariaAutoComplete:null,ariaBusy:_t,ariaChecked:_t,ariaColCount:se,ariaColIndex:se,ariaColSpan:se,ariaControls:ct,ariaCurrent:null,ariaDescribedBy:ct,ariaDetails:null,ariaDisabled:_t,ariaDropEffect:ct,ariaErrorMessage:null,ariaExpanded:_t,ariaFlowTo:ct,ariaGrabbed:_t,ariaHasPopup:null,ariaHidden:_t,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ct,ariaLevel:se,ariaLive:null,ariaModal:_t,ariaMultiLine:_t,ariaMultiSelectable:_t,ariaOrientation:null,ariaOwns:ct,ariaPlaceholder:null,ariaPosInSet:se,ariaPressed:_t,ariaReadOnly:_t,ariaRelevant:null,ariaRequired:_t,ariaRoleDescription:ct,ariaRowCount:se,ariaRowIndex:se,ariaRowSpan:se,ariaSelected:_t,ariaSetSize:se,ariaSort:null,ariaValueMax:se,ariaValueMin:se,ariaValueNow:se,ariaValueText:null,role:null},transform(t,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function dv(t,r){return r in t?t[r]:r}function mv(t,r){return dv(t,r.toLowerCase())}const wS=kl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:El,acceptCharset:ct,accessKey:ct,action:null,allow:null,allowFullScreen:Ne,allowPaymentRequest:Ne,allowUserMedia:Ne,alt:null,as:null,async:Ne,autoCapitalize:null,autoComplete:ct,autoFocus:Ne,autoPlay:Ne,blocking:ct,capture:null,charSet:null,checked:Ne,cite:null,className:ct,cols:se,colSpan:null,content:null,contentEditable:_t,controls:Ne,controlsList:ct,coords:se|El,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ne,defer:Ne,dir:null,dirName:null,disabled:Ne,download:Af,draggable:_t,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ne,formTarget:null,headers:ct,height:se,hidden:Af,high:se,href:null,hrefLang:null,htmlFor:ct,httpEquiv:ct,id:null,imageSizes:null,imageSrcSet:null,inert:Ne,inputMode:null,integrity:null,is:null,isMap:Ne,itemId:null,itemProp:ct,itemRef:ct,itemScope:Ne,itemType:ct,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ne,low:se,manifest:null,max:null,maxLength:se,media:null,method:null,min:null,minLength:se,multiple:Ne,muted:Ne,name:null,nonce:null,noModule:Ne,noValidate:Ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ne,optimum:se,pattern:null,ping:ct,placeholder:null,playsInline:Ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ne,referrerPolicy:null,rel:ct,required:Ne,reversed:Ne,rows:se,rowSpan:se,sandbox:ct,scope:null,scoped:Ne,seamless:Ne,selected:Ne,shadowRootClonable:Ne,shadowRootDelegatesFocus:Ne,shadowRootMode:null,shape:null,size:se,sizes:null,slot:null,span:se,spellCheck:_t,src:null,srcDoc:null,srcLang:null,srcSet:null,start:se,step:null,style:null,tabIndex:se,target:null,title:null,translate:null,type:null,typeMustMatch:Ne,useMap:null,value:_t,width:se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ct,axis:null,background:null,bgColor:null,border:se,borderColor:null,bottomMargin:se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ne,declare:Ne,event:null,face:null,frame:null,frameBorder:null,hSpace:se,leftMargin:se,link:null,longDesc:null,lowSrc:null,marginHeight:se,marginWidth:se,noResize:Ne,noHref:Ne,noShade:Ne,noWrap:Ne,object:null,profile:null,prompt:null,rev:null,rightMargin:se,rules:null,scheme:null,scrolling:_t,standby:null,summary:null,text:null,topMargin:se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ne,disableRemotePlayback:Ne,prefix:null,property:null,results:se,security:null,unselectable:null},space:"html",transform:mv}),SS=kl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:vn,accentHeight:se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:se,amplitude:se,arabicForm:null,ascent:se,attributeName:null,attributeType:null,azimuth:se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:se,by:null,calcMode:null,capHeight:se,className:ct,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:se,diffuseConstant:se,direction:null,display:null,dur:null,divisor:se,dominantBaseline:null,download:Ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:se,enableBackground:null,end:null,event:null,exponent:se,externalResourcesRequired:null,fill:null,fillOpacity:se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:El,g2:El,glyphName:El,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:se,horizOriginX:se,horizOriginY:se,id:null,ideographic:se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:se,k:se,k1:se,k2:se,k3:se,k4:se,kernelMatrix:vn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:se,overlineThickness:se,paintOrder:null,panose1:null,path:null,pathLength:se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ct,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:se,pointsAtY:se,pointsAtZ:se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:vn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:vn,rev:vn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:vn,requiredFeatures:vn,requiredFonts:vn,requiredFormats:vn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:se,specularExponent:se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:se,strikethroughThickness:se,string:null,stroke:null,strokeDashArray:vn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:se,strokeOpacity:se,strokeWidth:null,style:null,surfaceScale:se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:vn,tabIndex:se,tableValues:null,target:null,targetX:se,targetY:se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:vn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:se,underlineThickness:se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:se,values:null,vAlphabetic:se,vMathematical:se,vectorEffect:null,vHanging:se,vIdeographic:se,version:null,vertAdvY:se,vertOriginX:se,vertOriginY:se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:dv}),pv=kl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,r){return"xlink:"+r.slice(5).toLowerCase()}}),gv=kl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:mv}),yv=kl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,r){return"xml:"+r.slice(3).toLowerCase()}}),ES={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},TS=/[A-Z]/g,Bg=/-[a-z]/g,kS=/^data[-\w.:]+$/i;function AS(t,r){const l=kf(r);let u=r,o=un;if(l in t.normal)return t.property[t.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&kS.test(r)){if(r.charAt(4)==="-"){const s=r.slice(5).replace(Bg,RS);u="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=r.slice(4);if(!Bg.test(s)){let c=s.replace(TS,CS);c.charAt(0)!=="-"&&(c="-"+c),r="data"+c}}o=Zf}return new o(u,r)}function CS(t){return"-"+t.toLowerCase()}function RS(t){return t.charAt(1).toUpperCase()}const DS=fv([hv,wS,pv,gv,yv],"html"),Jf=fv([hv,SS,pv,gv,yv],"svg");function _S(t){return t.join(" ").trim()}var gl={},af,Fg;function zS(){if(Fg)return af;Fg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,d=/^\s+|\s+$/g,p=`
`,m="/",y="*",g="",x="comment",b="declaration";function k(j,R){if(typeof j!="string")throw new TypeError("First argument must be a string");if(!j)return[];R=R||{};var E=1,T=1;function q(he){var ae=he.match(r);ae&&(E+=ae.length);var H=he.lastIndexOf(p);T=~H?he.length-H:T+he.length}function I(){var he={line:E,column:T};return function(ae){return ae.position=new z(he),Z(),ae}}function z(he){this.start=he,this.end={line:E,column:T},this.source=R.source}z.prototype.content=j;function C(he){var ae=new Error(R.source+":"+E+":"+T+": "+he);if(ae.reason=he,ae.filename=R.source,ae.line=E,ae.column=T,ae.source=j,!R.silent)throw ae}function $(he){var ae=he.exec(j);if(ae){var H=ae[0];return q(H),j=j.slice(H.length),ae}}function Z(){$(l)}function L(he){var ae;for(he=he||[];ae=ne();)ae!==!1&&he.push(ae);return he}function ne(){var he=I();if(!(m!=j.charAt(0)||y!=j.charAt(1))){for(var ae=2;g!=j.charAt(ae)&&(y!=j.charAt(ae)||m!=j.charAt(ae+1));)++ae;if(ae+=2,g===j.charAt(ae-1))return C("End of comment missing");var H=j.slice(2,ae-2);return T+=2,q(H),j=j.slice(ae),T+=2,he({type:x,comment:H})}}function ie(){var he=I(),ae=$(u);if(ae){if(ne(),!$(o))return C("property missing ':'");var H=$(s),re=he({type:b,property:O(ae[0].replace(t,g)),value:H?O(H[0].replace(t,g)):g});return $(c),re}}function Ae(){var he=[];L(he);for(var ae;ae=ie();)ae!==!1&&(he.push(ae),L(he));return he}return Z(),Ae()}function O(j){return j?j.replace(d,g):g}return af=k,af}var Yg;function MS(){if(Yg)return gl;Yg=1;var t=gl&&gl.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(gl,"__esModule",{value:!0}),gl.default=l;const r=t(zS());function l(u,o){let s=null;if(!u||typeof u!="string")return s;const c=(0,r.default)(u),d=typeof o=="function";return c.forEach(p=>{if(p.type!=="declaration")return;const{property:m,value:y}=p;d?o(m,y,p):y&&(s=s||{},s[m]=y)}),s}return gl}var Si={},qg;function OS(){if(qg)return Si;qg=1,Object.defineProperty(Si,"__esModule",{value:!0}),Si.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(m){return!m||l.test(m)||t.test(m)},c=function(m,y){return y.toUpperCase()},d=function(m,y){return"".concat(y,"-")},p=function(m,y){return y===void 0&&(y={}),s(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(o,d):m=m.replace(u,d),m.replace(r,c))};return Si.camelCase=p,Si}var Ei,Ig;function jS(){if(Ig)return Ei;Ig=1;var t=Ei&&Ei.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},r=t(MS()),l=OS();function u(o,s){var c={};return!o||typeof o!="string"||(0,r.default)(o,function(d,p){d&&p&&(c[(0,l.camelCase)(d,s)]=p)}),c}return u.default=u,Ei=u,Ei}var NS=jS();const LS=Ro(NS),vv=bv("end"),$f=bv("start");function bv(t){return r;function r(l){const u=l&&l.position&&l.position[t]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function US(t){const r=$f(t),l=vv(t);if(r&&l)return{start:r,end:l}}function _i(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Gg(t.position):"start"in t||"end"in t?Gg(t):"line"in t||"column"in t?Rf(t):""}function Rf(t){return Vg(t&&t.line)+":"+Vg(t&&t.column)}function Gg(t){return Rf(t&&t.start)+"-"+Rf(t&&t.end)}function Vg(t){return t&&typeof t=="number"?t:1}class Xt extends Error{constructor(r,l,u){super(),typeof l=="string"&&(u=l,l=void 0);let o="",s={},c=!1;if(l&&("line"in l&&"column"in l?s={place:l}:"start"in l&&"end"in l?s={place:l}:"type"in l?s={ancestors:[l],place:l.position}:s={...l}),typeof r=="string"?o=r:!s.cause&&r&&(c=!0,o=r.message,s.cause=r),!s.ruleId&&!s.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?s.ruleId=u:(s.source=u.slice(0,p),s.ruleId=u.slice(p+1))}if(!s.place&&s.ancestors&&s.ancestors){const p=s.ancestors[s.ancestors.length-1];p&&(s.place=p.position)}const d=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=d?d.line:void 0,this.name=_i(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=c&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Xt.prototype.file="";Xt.prototype.name="";Xt.prototype.reason="";Xt.prototype.message="";Xt.prototype.stack="";Xt.prototype.column=void 0;Xt.prototype.line=void 0;Xt.prototype.ancestors=void 0;Xt.prototype.cause=void 0;Xt.prototype.fatal=void 0;Xt.prototype.place=void 0;Xt.prototype.ruleId=void 0;Xt.prototype.source=void 0;const Kf={}.hasOwnProperty,HS=new Map,BS=/[A-Z]/g,FS=new Set(["table","tbody","thead","tfoot","tr"]),YS=new Set(["td","th"]),xv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function qS(t,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=JS(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=ZS(l,r.jsx,r.jsxs)}const o={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?Jf:DS,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},s=wv(o,t,void 0);return s&&typeof s!="string"?s:o.create(t,o.Fragment,{children:s||void 0},void 0)}function wv(t,r,l){if(r.type==="element")return IS(t,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return GS(t,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return XS(t,r,l);if(r.type==="mdxjsEsm")return VS(t,r);if(r.type==="root")return QS(t,r,l);if(r.type==="text")return PS(t,r)}function IS(t,r,l){const u=t.schema;let o=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(o=Jf,t.schema=o),t.ancestors.push(r);const s=Ev(t,r.tagName,!1),c=$S(t,r);let d=eh(t,r);return FS.has(r.tagName)&&(d=d.filter(function(p){return typeof p=="string"?!bS(p):!0})),Sv(t,c,s,r),Wf(c,d),t.ancestors.pop(),t.schema=u,t.create(r,s,c,l)}function GS(t,r){if(r.data&&r.data.estree&&t.evaluater){const u=r.data.estree.body[0];return u.type,t.evaluater.evaluateExpression(u.expression)}Li(t,r.position)}function VS(t,r){if(r.data&&r.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(r.data.estree);Li(t,r.position)}function XS(t,r,l){const u=t.schema;let o=u;r.name==="svg"&&u.space==="html"&&(o=Jf,t.schema=o),t.ancestors.push(r);const s=r.name===null?t.Fragment:Ev(t,r.name,!0),c=KS(t,r),d=eh(t,r);return Sv(t,c,s,r),Wf(c,d),t.ancestors.pop(),t.schema=u,t.create(r,s,c,l)}function QS(t,r,l){const u={};return Wf(u,eh(t,r)),t.create(r,t.Fragment,u,l)}function PS(t,r){return r.value}function Sv(t,r,l,u){typeof l!="string"&&l!==t.Fragment&&t.passNode&&(r.node=u)}function Wf(t,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(t.children=l)}}function ZS(t,r,l){return u;function u(o,s,c,d){const m=Array.isArray(c.children)?l:r;return d?m(s,c,d):m(s,c)}}function JS(t,r){return l;function l(u,o,s,c){const d=Array.isArray(s.children),p=$f(u);return r(o,s,c,d,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function $S(t,r){const l={};let u,o;for(o in r.properties)if(o!=="children"&&Kf.call(r.properties,o)){const s=WS(t,o,r.properties[o]);if(s){const[c,d]=s;t.tableCellAlignToStyle&&c==="align"&&typeof d=="string"&&YS.has(r.tagName)?u=d:l[c]=d}}if(u){const s=l.style||(l.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return l}function KS(t,r){const l={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&t.evaluater){const s=u.data.estree.body[0];s.type;const c=s.expression;c.type;const d=c.properties[0];d.type,Object.assign(l,t.evaluater.evaluateExpression(d.argument))}else Li(t,r.position);else{const o=u.name;let s;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&t.evaluater){const d=u.value.data.estree.body[0];d.type,s=t.evaluater.evaluateExpression(d.expression)}else Li(t,r.position);else s=u.value===null?!0:u.value;l[o]=s}return l}function eh(t,r){const l=[];let u=-1;const o=t.passKeys?new Map:HS;for(;++u<r.children.length;){const s=r.children[u];let c;if(t.passKeys){const p=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(p){const m=o.get(p)||0;c=p+"-"+m,o.set(p,m+1)}}const d=wv(t,s,c);d!==void 0&&l.push(d)}return l}function WS(t,r,l){const u=AS(t.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=u.commaSeparated?mS(l):_S(l)),u.property==="style"){let o=typeof l=="object"?l:eE(t,String(l));return t.stylePropertyNameCase==="css"&&(o=tE(o)),["style",o]}return[t.elementAttributeNameCase==="react"&&u.space?ES[u.property]||u.property:u.attribute,l]}}function eE(t,r){try{return LS(r,{reactCompat:!0})}catch(l){if(t.ignoreInvalidStyle)return{};const u=l,o=new Xt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=t.filePath||void 0,o.url=xv+"#cannot-parse-style-attribute",o}}function Ev(t,r,l){let u;if(!l)u={type:"Literal",value:r};else if(r.includes(".")){const o=r.split(".");let s=-1,c;for(;++s<o.length;){const d=Lg(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};c=c?{type:"MemberExpression",object:c,property:d,computed:!!(s&&d.type==="Literal"),optional:!1}:d}u=c}else u=Lg(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const o=u.value;return Kf.call(t.components,o)?t.components[o]:o}if(t.evaluater)return t.evaluater.evaluateExpression(u);Li(t)}function Li(t,r){const l=new Xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=xv+"#cannot-handle-mdx-estrees-without-createevaluater",l}function tE(t){const r={};let l;for(l in t)Kf.call(t,l)&&(r[nE(l)]=t[l]);return r}function nE(t){let r=t.replace(BS,aE);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function aE(t){return"-"+t.toLowerCase()}const rf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},rE={};function th(t,r){const l=rE,u=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,o=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return Tv(t,u,o)}function Tv(t,r,l){if(lE(t)){if("value"in t)return t.type==="html"&&!l?"":t.value;if(r&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Xg(t.children,r,l)}return Array.isArray(t)?Xg(t,r,l):""}function Xg(t,r,l){const u=[];let o=-1;for(;++o<t.length;)u[o]=Tv(t[o],r,l);return u.join("")}function lE(t){return!!(t&&typeof t=="object")}const Qg=document.createElement("i");function nh(t){const r="&"+t+";";Qg.innerHTML=r;const l=Qg.textContent;return l.charCodeAt(l.length-1)===59&&t!=="semi"||l===r?!1:l}function xn(t,r,l,u){const o=t.length;let s=0,c;if(r<0?r=-r>o?0:o+r:r=r>o?o:r,l=l>0?l:0,u.length<1e4)c=Array.from(u),c.unshift(r,l),t.splice(...c);else for(l&&t.splice(r,l);s<u.length;)c=u.slice(s,s+1e4),c.unshift(r,0),t.splice(...c),s+=1e4,r+=1e4}function On(t,r){return t.length>0?(xn(t,t.length,0,r),t):r}const Pg={}.hasOwnProperty;function kv(t){const r={};let l=-1;for(;++l<t.length;)iE(r,t[l]);return r}function iE(t,r){let l;for(l in r){const o=(Pg.call(t,l)?t[l]:void 0)||(t[l]={}),s=r[l];let c;if(s)for(c in s){Pg.call(o,c)||(o[c]=[]);const d=s[c];uE(o[c],Array.isArray(d)?d:d?[d]:[])}}}function uE(t,r){let l=-1;const u=[];for(;++l<r.length;)(r[l].add==="after"?t:u).push(r[l]);xn(t,0,0,u)}function Av(t,r){const l=Number.parseInt(t,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function In(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Jt=lr(/[A-Za-z]/),Vt=lr(/[\dA-Za-z]/),oE=lr(/[#-'*+\--9=?A-Z^-~]/);function wo(t){return t!==null&&(t<32||t===127)}const Df=lr(/\d/),sE=lr(/[\dA-Fa-f]/),cE=lr(/[!-/:-@[-`{-~]/);function Re(t){return t!==null&&t<-2}function st(t){return t!==null&&(t<0||t===32)}function Be(t){return t===-2||t===-1||t===32}const Mo=lr(new RegExp("\\p{P}|\\p{S}","u")),Mr=lr(/\s/);function lr(t){return r;function r(l){return l!==null&&l>-1&&t.test(String.fromCharCode(l))}}function Al(t){const r=[];let l=-1,u=0,o=0;for(;++l<t.length;){const s=t.charCodeAt(l);let c="";if(s===37&&Vt(t.charCodeAt(l+1))&&Vt(t.charCodeAt(l+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(c=String.fromCharCode(s));else if(s>55295&&s<57344){const d=t.charCodeAt(l+1);s<56320&&d>56319&&d<57344?(c=String.fromCharCode(s,d),o=1):c="�"}else c=String.fromCharCode(s);c&&(r.push(t.slice(u,l),encodeURIComponent(c)),u=l+o+1,c=""),o&&(l+=o,o=0)}return r.join("")+t.slice(u)}function Ze(t,r,l,u){const o=u?u-1:Number.POSITIVE_INFINITY;let s=0;return c;function c(p){return Be(p)?(t.enter(l),d(p)):r(p)}function d(p){return Be(p)&&s++<o?(t.consume(p),d):(t.exit(l),r(p))}}const fE={tokenize:hE};function hE(t){const r=t.attempt(this.parser.constructs.contentInitial,u,o);let l;return r;function u(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Ze(t,r,"linePrefix")}function o(d){return t.enter("paragraph"),s(d)}function s(d){const p=t.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=p),l=p,c(d)}function c(d){if(d===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(d);return}return Re(d)?(t.consume(d),t.exit("chunkText"),s):(t.consume(d),c)}}const dE={tokenize:mE},Zg={tokenize:pE};function mE(t){const r=this,l=[];let u=0,o,s,c;return d;function d(T){if(u<l.length){const q=l[u];return r.containerState=q[1],t.attempt(q[0].continuation,p,m)(T)}return m(T)}function p(T){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,o&&E();const q=r.events.length;let I=q,z;for(;I--;)if(r.events[I][0]==="exit"&&r.events[I][1].type==="chunkFlow"){z=r.events[I][1].end;break}R(u);let C=q;for(;C<r.events.length;)r.events[C][1].end={...z},C++;return xn(r.events,I+1,0,r.events.slice(q)),r.events.length=C,m(T)}return d(T)}function m(T){if(u===l.length){if(!o)return x(T);if(o.currentConstruct&&o.currentConstruct.concrete)return k(T);r.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return r.containerState={},t.check(Zg,y,g)(T)}function y(T){return o&&E(),R(u),x(T)}function g(T){return r.parser.lazy[r.now().line]=u!==l.length,c=r.now().offset,k(T)}function x(T){return r.containerState={},t.attempt(Zg,b,k)(T)}function b(T){return u++,l.push([r.currentConstruct,r.containerState]),x(T)}function k(T){if(T===null){o&&E(),R(0),t.consume(T);return}return o=o||r.parser.flow(r.now()),t.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),O(T)}function O(T){if(T===null){j(t.exit("chunkFlow"),!0),R(0),t.consume(T);return}return Re(T)?(t.consume(T),j(t.exit("chunkFlow")),u=0,r.interrupt=void 0,d):(t.consume(T),O)}function j(T,q){const I=r.sliceStream(T);if(q&&I.push(null),T.previous=s,s&&(s.next=T),s=T,o.defineSkip(T.start),o.write(I),r.parser.lazy[T.start.line]){let z=o.events.length;for(;z--;)if(o.events[z][1].start.offset<c&&(!o.events[z][1].end||o.events[z][1].end.offset>c))return;const C=r.events.length;let $=C,Z,L;for(;$--;)if(r.events[$][0]==="exit"&&r.events[$][1].type==="chunkFlow"){if(Z){L=r.events[$][1].end;break}Z=!0}for(R(u),z=C;z<r.events.length;)r.events[z][1].end={...L},z++;xn(r.events,$+1,0,r.events.slice(C)),r.events.length=z}}function R(T){let q=l.length;for(;q-- >T;){const I=l[q];r.containerState=I[1],I[0].exit.call(r,t)}l.length=T}function E(){o.write([null]),s=void 0,o=void 0,r.containerState._closeFlow=void 0}}function pE(t,r,l){return Ze(t,t.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Tl(t){if(t===null||st(t)||Mr(t))return 1;if(Mo(t))return 2}function Oo(t,r,l){const u=[];let o=-1;for(;++o<t.length;){const s=t[o].resolveAll;s&&!u.includes(s)&&(r=s(r,l),u.push(s))}return r}const _f={name:"attention",resolveAll:gE,tokenize:yE};function gE(t,r){let l=-1,u,o,s,c,d,p,m,y;for(;++l<t.length;)if(t[l][0]==="enter"&&t[l][1].type==="attentionSequence"&&t[l][1]._close){for(u=l;u--;)if(t[u][0]==="exit"&&t[u][1].type==="attentionSequence"&&t[u][1]._open&&r.sliceSerialize(t[u][1]).charCodeAt(0)===r.sliceSerialize(t[l][1]).charCodeAt(0)){if((t[u][1]._close||t[l][1]._open)&&(t[l][1].end.offset-t[l][1].start.offset)%3&&!((t[u][1].end.offset-t[u][1].start.offset+t[l][1].end.offset-t[l][1].start.offset)%3))continue;p=t[u][1].end.offset-t[u][1].start.offset>1&&t[l][1].end.offset-t[l][1].start.offset>1?2:1;const g={...t[u][1].end},x={...t[l][1].start};Jg(g,-p),Jg(x,p),c={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...t[u][1].end}},d={type:p>1?"strongSequence":"emphasisSequence",start:{...t[l][1].start},end:x},s={type:p>1?"strongText":"emphasisText",start:{...t[u][1].end},end:{...t[l][1].start}},o={type:p>1?"strong":"emphasis",start:{...c.start},end:{...d.end}},t[u][1].end={...c.start},t[l][1].start={...d.end},m=[],t[u][1].end.offset-t[u][1].start.offset&&(m=On(m,[["enter",t[u][1],r],["exit",t[u][1],r]])),m=On(m,[["enter",o,r],["enter",c,r],["exit",c,r],["enter",s,r]]),m=On(m,Oo(r.parser.constructs.insideSpan.null,t.slice(u+1,l),r)),m=On(m,[["exit",s,r],["enter",d,r],["exit",d,r],["exit",o,r]]),t[l][1].end.offset-t[l][1].start.offset?(y=2,m=On(m,[["enter",t[l][1],r],["exit",t[l][1],r]])):y=0,xn(t,u-1,l-u+3,m),l=u+m.length-y-2;break}}for(l=-1;++l<t.length;)t[l][1].type==="attentionSequence"&&(t[l][1].type="data");return t}function yE(t,r){const l=this.parser.constructs.attentionMarkers.null,u=this.previous,o=Tl(u);let s;return c;function c(p){return s=p,t.enter("attentionSequence"),d(p)}function d(p){if(p===s)return t.consume(p),d;const m=t.exit("attentionSequence"),y=Tl(p),g=!y||y===2&&o||l.includes(p),x=!o||o===2&&y||l.includes(u);return m._open=!!(s===42?g:g&&(o||!x)),m._close=!!(s===42?x:x&&(y||!g)),r(p)}}function Jg(t,r){t.column+=r,t.offset+=r,t._bufferIndex+=r}const vE={name:"autolink",tokenize:bE};function bE(t,r,l){let u=0;return o;function o(b){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(b){return Jt(b)?(t.consume(b),c):b===64?l(b):m(b)}function c(b){return b===43||b===45||b===46||Vt(b)?(u=1,d(b)):m(b)}function d(b){return b===58?(t.consume(b),u=0,p):(b===43||b===45||b===46||Vt(b))&&u++<32?(t.consume(b),d):(u=0,m(b))}function p(b){return b===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):b===null||b===32||b===60||wo(b)?l(b):(t.consume(b),p)}function m(b){return b===64?(t.consume(b),y):oE(b)?(t.consume(b),m):l(b)}function y(b){return Vt(b)?g(b):l(b)}function g(b){return b===46?(t.consume(b),u=0,y):b===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):x(b)}function x(b){if((b===45||Vt(b))&&u++<63){const k=b===45?x:g;return t.consume(b),k}return l(b)}}const Vi={partial:!0,tokenize:xE};function xE(t,r,l){return u;function u(s){return Be(s)?Ze(t,o,"linePrefix")(s):o(s)}function o(s){return s===null||Re(s)?r(s):l(s)}}const Cv={continuation:{tokenize:SE},exit:EE,name:"blockQuote",tokenize:wE};function wE(t,r,l){const u=this;return o;function o(c){if(c===62){const d=u.containerState;return d.open||(t.enter("blockQuote",{_container:!0}),d.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(c),t.exit("blockQuoteMarker"),s}return l(c)}function s(c){return Be(c)?(t.enter("blockQuotePrefixWhitespace"),t.consume(c),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),r):(t.exit("blockQuotePrefix"),r(c))}}function SE(t,r,l){const u=this;return o;function o(c){return Be(c)?Ze(t,s,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):s(c)}function s(c){return t.attempt(Cv,r,l)(c)}}function EE(t){t.exit("blockQuote")}const Rv={name:"characterEscape",tokenize:TE};function TE(t,r,l){return u;function u(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),o}function o(s){return cE(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),r):l(s)}}const Dv={name:"characterReference",tokenize:kE};function kE(t,r,l){const u=this;let o=0,s,c;return d;function d(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),p}function p(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),s=31,c=Vt,y(g))}function m(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,c=sE,y):(t.enter("characterReferenceValue"),s=7,c=Df,y(g))}function y(g){if(g===59&&o){const x=t.exit("characterReferenceValue");return c===Vt&&!nh(u.sliceSerialize(x))?l(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),r)}return c(g)&&o++<s?(t.consume(g),y):l(g)}}const $g={partial:!0,tokenize:CE},Kg={concrete:!0,name:"codeFenced",tokenize:AE};function AE(t,r,l){const u=this,o={partial:!0,tokenize:I};let s=0,c=0,d;return p;function p(z){return m(z)}function m(z){const C=u.events[u.events.length-1];return s=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,d=z,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(z)}function y(z){return z===d?(c++,t.consume(z),y):c<3?l(z):(t.exit("codeFencedFenceSequence"),Be(z)?Ze(t,g,"whitespace")(z):g(z))}function g(z){return z===null||Re(z)?(t.exit("codeFencedFence"),u.interrupt?r(z):t.check($g,O,q)(z)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),x(z))}function x(z){return z===null||Re(z)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(z)):Be(z)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ze(t,b,"whitespace")(z)):z===96&&z===d?l(z):(t.consume(z),x)}function b(z){return z===null||Re(z)?g(z):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),k(z))}function k(z){return z===null||Re(z)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(z)):z===96&&z===d?l(z):(t.consume(z),k)}function O(z){return t.attempt(o,q,j)(z)}function j(z){return t.enter("lineEnding"),t.consume(z),t.exit("lineEnding"),R}function R(z){return s>0&&Be(z)?Ze(t,E,"linePrefix",s+1)(z):E(z)}function E(z){return z===null||Re(z)?t.check($g,O,q)(z):(t.enter("codeFlowValue"),T(z))}function T(z){return z===null||Re(z)?(t.exit("codeFlowValue"),E(z)):(t.consume(z),T)}function q(z){return t.exit("codeFenced"),r(z)}function I(z,C,$){let Z=0;return L;function L(ae){return z.enter("lineEnding"),z.consume(ae),z.exit("lineEnding"),ne}function ne(ae){return z.enter("codeFencedFence"),Be(ae)?Ze(z,ie,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ae):ie(ae)}function ie(ae){return ae===d?(z.enter("codeFencedFenceSequence"),Ae(ae)):$(ae)}function Ae(ae){return ae===d?(Z++,z.consume(ae),Ae):Z>=c?(z.exit("codeFencedFenceSequence"),Be(ae)?Ze(z,he,"whitespace")(ae):he(ae)):$(ae)}function he(ae){return ae===null||Re(ae)?(z.exit("codeFencedFence"),C(ae)):$(ae)}}}function CE(t,r,l){const u=this;return o;function o(c){return c===null?l(c):(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s)}function s(c){return u.parser.lazy[u.now().line]?l(c):r(c)}}const lf={name:"codeIndented",tokenize:DE},RE={partial:!0,tokenize:_E};function DE(t,r,l){const u=this;return o;function o(m){return t.enter("codeIndented"),Ze(t,s,"linePrefix",5)(m)}function s(m){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(m):l(m)}function c(m){return m===null?p(m):Re(m)?t.attempt(RE,c,p)(m):(t.enter("codeFlowValue"),d(m))}function d(m){return m===null||Re(m)?(t.exit("codeFlowValue"),c(m)):(t.consume(m),d)}function p(m){return t.exit("codeIndented"),r(m)}}function _E(t,r,l){const u=this;return o;function o(c){return u.parser.lazy[u.now().line]?l(c):Re(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),o):Ze(t,s,"linePrefix",5)(c)}function s(c){const d=u.events[u.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(c):Re(c)?o(c):l(c)}}const zE={name:"codeText",previous:OE,resolve:ME,tokenize:jE};function ME(t){let r=t.length-4,l=3,u,o;if((t[l][1].type==="lineEnding"||t[l][1].type==="space")&&(t[r][1].type==="lineEnding"||t[r][1].type==="space")){for(u=l;++u<r;)if(t[u][1].type==="codeTextData"){t[l][1].type="codeTextPadding",t[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(u=l-1,r++;++u<=r;)o===void 0?u!==r&&t[u][1].type!=="lineEnding"&&(o=u):(u===r||t[u][1].type==="lineEnding")&&(t[o][1].type="codeTextData",u!==o+2&&(t[o][1].end=t[u-1][1].end,t.splice(o+2,u-o-2),r-=u-o-2,u=o+2),o=void 0);return t}function OE(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function jE(t,r,l){let u=0,o,s;return c;function c(g){return t.enter("codeText"),t.enter("codeTextSequence"),d(g)}function d(g){return g===96?(t.consume(g),u++,d):(t.exit("codeTextSequence"),p(g))}function p(g){return g===null?l(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),p):g===96?(s=t.enter("codeTextSequence"),o=0,y(g)):Re(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),p):(t.enter("codeTextData"),m(g))}function m(g){return g===null||g===32||g===96||Re(g)?(t.exit("codeTextData"),p(g)):(t.consume(g),m)}function y(g){return g===96?(t.consume(g),o++,y):o===u?(t.exit("codeTextSequence"),t.exit("codeText"),r(g)):(s.type="codeTextData",m(g))}}class NE{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const u=l??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,l,u){const o=l||0;this.setCursor(Math.trunc(r));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return u&&Ti(this.left,u),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),Ti(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),Ti(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);Ti(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);Ti(this.left,l.reverse())}}}function Ti(t,r){let l=0;if(r.length<1e4)t.push(...r);else for(;l<r.length;)t.push(...r.slice(l,l+1e4)),l+=1e4}function _v(t){const r={};let l=-1,u,o,s,c,d,p,m;const y=new NE(t);for(;++l<y.length;){for(;l in r;)l=r[l];if(u=y.get(l),l&&u[1].type==="chunkFlow"&&y.get(l-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,s=0,s<p.length&&p[s][1].type==="lineEndingBlank"&&(s+=2),s<p.length&&p[s][1].type==="content"))for(;++s<p.length&&p[s][1].type!=="content";)p[s][1].type==="chunkText"&&(p[s][1]._isInFirstContentOfListItem=!0,s++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,LE(y,l)),l=r[l],m=!0);else if(u[1]._container){for(s=l,o=void 0;s--;)if(c=y.get(s),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(o&&(y.get(o)[1].type="lineEndingBlank"),c[1].type="lineEnding",o=s);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;o&&(u[1].end={...y.get(o)[1].start},d=y.slice(o,l),d.unshift(u),y.splice(o,l-o+1,d))}}return xn(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function LE(t,r){const l=t.get(r)[1],u=t.get(r)[2];let o=r-1;const s=[];let c=l._tokenizer;c||(c=u.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const d=c.events,p=[],m={};let y,g,x=-1,b=l,k=0,O=0;const j=[O];for(;b;){for(;t.get(++o)[1]!==b;);s.push(o),b._tokenizer||(y=u.sliceStream(b),b.next||y.push(null),g&&c.defineSkip(b.start),b._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),b._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),g=b,b=b.next}for(b=l;++x<d.length;)d[x][0]==="exit"&&d[x-1][0]==="enter"&&d[x][1].type===d[x-1][1].type&&d[x][1].start.line!==d[x][1].end.line&&(O=x+1,j.push(O),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(c.events=[],b?(b._tokenizer=void 0,b.previous=void 0):j.pop(),x=j.length;x--;){const R=d.slice(j[x],j[x+1]),E=s.pop();p.push([E,E+R.length-1]),t.splice(E,2,R)}for(p.reverse(),x=-1;++x<p.length;)m[k+p[x][0]]=k+p[x][1],k+=p[x][1]-p[x][0]-1;return m}const UE={resolve:BE,tokenize:FE},HE={partial:!0,tokenize:YE};function BE(t){return _v(t),t}function FE(t,r){let l;return u;function u(d){return t.enter("content"),l=t.enter("chunkContent",{contentType:"content"}),o(d)}function o(d){return d===null?s(d):Re(d)?t.check(HE,c,s)(d):(t.consume(d),o)}function s(d){return t.exit("chunkContent"),t.exit("content"),r(d)}function c(d){return t.consume(d),t.exit("chunkContent"),l.next=t.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,o}}function YE(t,r,l){const u=this;return o;function o(c){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),Ze(t,s,"linePrefix")}function s(c){if(c===null||Re(c))return l(c);const d=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(c):t.interrupt(u.parser.constructs.flow,l,r)(c)}}function zv(t,r,l,u,o,s,c,d,p){const m=p||Number.POSITIVE_INFINITY;let y=0;return g;function g(R){return R===60?(t.enter(u),t.enter(o),t.enter(s),t.consume(R),t.exit(s),x):R===null||R===32||R===41||wo(R)?l(R):(t.enter(u),t.enter(c),t.enter(d),t.enter("chunkString",{contentType:"string"}),O(R))}function x(R){return R===62?(t.enter(s),t.consume(R),t.exit(s),t.exit(o),t.exit(u),r):(t.enter(d),t.enter("chunkString",{contentType:"string"}),b(R))}function b(R){return R===62?(t.exit("chunkString"),t.exit(d),x(R)):R===null||R===60||Re(R)?l(R):(t.consume(R),R===92?k:b)}function k(R){return R===60||R===62||R===92?(t.consume(R),b):b(R)}function O(R){return!y&&(R===null||R===41||st(R))?(t.exit("chunkString"),t.exit(d),t.exit(c),t.exit(u),r(R)):y<m&&R===40?(t.consume(R),y++,O):R===41?(t.consume(R),y--,O):R===null||R===32||R===40||wo(R)?l(R):(t.consume(R),R===92?j:O)}function j(R){return R===40||R===41||R===92?(t.consume(R),O):O(R)}}function Mv(t,r,l,u,o,s){const c=this;let d=0,p;return m;function m(b){return t.enter(u),t.enter(o),t.consume(b),t.exit(o),t.enter(s),y}function y(b){return d>999||b===null||b===91||b===93&&!p||b===94&&!d&&"_hiddenFootnoteSupport"in c.parser.constructs?l(b):b===93?(t.exit(s),t.enter(o),t.consume(b),t.exit(o),t.exit(u),r):Re(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||b===91||b===93||Re(b)||d++>999?(t.exit("chunkString"),y(b)):(t.consume(b),p||(p=!Be(b)),b===92?x:g)}function x(b){return b===91||b===92||b===93?(t.consume(b),d++,g):g(b)}}function Ov(t,r,l,u,o,s){let c;return d;function d(x){return x===34||x===39||x===40?(t.enter(u),t.enter(o),t.consume(x),t.exit(o),c=x===40?41:x,p):l(x)}function p(x){return x===c?(t.enter(o),t.consume(x),t.exit(o),t.exit(u),r):(t.enter(s),m(x))}function m(x){return x===c?(t.exit(s),p(c)):x===null?l(x):Re(x)?(t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),Ze(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(x))}function y(x){return x===c||x===null||Re(x)?(t.exit("chunkString"),m(x)):(t.consume(x),x===92?g:y)}function g(x){return x===c||x===92?(t.consume(x),y):y(x)}}function zi(t,r){let l;return u;function u(o){return Re(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),l=!0,u):Be(o)?Ze(t,u,l?"linePrefix":"lineSuffix")(o):r(o)}}const qE={name:"definition",tokenize:GE},IE={partial:!0,tokenize:VE};function GE(t,r,l){const u=this;let o;return s;function s(b){return t.enter("definition"),c(b)}function c(b){return Mv.call(u,t,d,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function d(b){return o=In(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),b===58?(t.enter("definitionMarker"),t.consume(b),t.exit("definitionMarker"),p):l(b)}function p(b){return st(b)?zi(t,m)(b):m(b)}function m(b){return zv(t,y,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function y(b){return t.attempt(IE,g,g)(b)}function g(b){return Be(b)?Ze(t,x,"whitespace")(b):x(b)}function x(b){return b===null||Re(b)?(t.exit("definition"),u.parser.defined.push(o),r(b)):l(b)}}function VE(t,r,l){return u;function u(d){return st(d)?zi(t,o)(d):l(d)}function o(d){return Ov(t,s,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function s(d){return Be(d)?Ze(t,c,"whitespace")(d):c(d)}function c(d){return d===null||Re(d)?r(d):l(d)}}const XE={name:"hardBreakEscape",tokenize:QE};function QE(t,r,l){return u;function u(s){return t.enter("hardBreakEscape"),t.consume(s),o}function o(s){return Re(s)?(t.exit("hardBreakEscape"),r(s)):l(s)}}const PE={name:"headingAtx",resolve:ZE,tokenize:JE};function ZE(t,r){let l=t.length-2,u=3,o,s;return t[u][1].type==="whitespace"&&(u+=2),l-2>u&&t[l][1].type==="whitespace"&&(l-=2),t[l][1].type==="atxHeadingSequence"&&(u===l-1||l-4>u&&t[l-2][1].type==="whitespace")&&(l-=u+1===l?2:4),l>u&&(o={type:"atxHeadingText",start:t[u][1].start,end:t[l][1].end},s={type:"chunkText",start:t[u][1].start,end:t[l][1].end,contentType:"text"},xn(t,u,l-u+1,[["enter",o,r],["enter",s,r],["exit",s,r],["exit",o,r]])),t}function JE(t,r,l){let u=0;return o;function o(y){return t.enter("atxHeading"),s(y)}function s(y){return t.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&u++<6?(t.consume(y),c):y===null||st(y)?(t.exit("atxHeadingSequence"),d(y)):l(y)}function d(y){return y===35?(t.enter("atxHeadingSequence"),p(y)):y===null||Re(y)?(t.exit("atxHeading"),r(y)):Be(y)?Ze(t,d,"whitespace")(y):(t.enter("atxHeadingText"),m(y))}function p(y){return y===35?(t.consume(y),p):(t.exit("atxHeadingSequence"),d(y))}function m(y){return y===null||y===35||st(y)?(t.exit("atxHeadingText"),d(y)):(t.consume(y),m)}}const $E=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wg=["pre","script","style","textarea"],KE={concrete:!0,name:"htmlFlow",resolveTo:tT,tokenize:nT},WE={partial:!0,tokenize:rT},eT={partial:!0,tokenize:aT};function tT(t){let r=t.length;for(;r--&&!(t[r][0]==="enter"&&t[r][1].type==="htmlFlow"););return r>1&&t[r-2][1].type==="linePrefix"&&(t[r][1].start=t[r-2][1].start,t[r+1][1].start=t[r-2][1].start,t.splice(r-2,2)),t}function nT(t,r,l){const u=this;let o,s,c,d,p;return m;function m(S){return y(S)}function y(S){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(S),g}function g(S){return S===33?(t.consume(S),x):S===47?(t.consume(S),s=!0,O):S===63?(t.consume(S),o=3,u.interrupt?r:A):Jt(S)?(t.consume(S),c=String.fromCharCode(S),j):l(S)}function x(S){return S===45?(t.consume(S),o=2,b):S===91?(t.consume(S),o=5,d=0,k):Jt(S)?(t.consume(S),o=4,u.interrupt?r:A):l(S)}function b(S){return S===45?(t.consume(S),u.interrupt?r:A):l(S)}function k(S){const oe="CDATA[";return S===oe.charCodeAt(d++)?(t.consume(S),d===oe.length?u.interrupt?r:ie:k):l(S)}function O(S){return Jt(S)?(t.consume(S),c=String.fromCharCode(S),j):l(S)}function j(S){if(S===null||S===47||S===62||st(S)){const oe=S===47,ge=c.toLowerCase();return!oe&&!s&&Wg.includes(ge)?(o=1,u.interrupt?r(S):ie(S)):$E.includes(c.toLowerCase())?(o=6,oe?(t.consume(S),R):u.interrupt?r(S):ie(S)):(o=7,u.interrupt&&!u.parser.lazy[u.now().line]?l(S):s?E(S):T(S))}return S===45||Vt(S)?(t.consume(S),c+=String.fromCharCode(S),j):l(S)}function R(S){return S===62?(t.consume(S),u.interrupt?r:ie):l(S)}function E(S){return Be(S)?(t.consume(S),E):L(S)}function T(S){return S===47?(t.consume(S),L):S===58||S===95||Jt(S)?(t.consume(S),q):Be(S)?(t.consume(S),T):L(S)}function q(S){return S===45||S===46||S===58||S===95||Vt(S)?(t.consume(S),q):I(S)}function I(S){return S===61?(t.consume(S),z):Be(S)?(t.consume(S),I):T(S)}function z(S){return S===null||S===60||S===61||S===62||S===96?l(S):S===34||S===39?(t.consume(S),p=S,C):Be(S)?(t.consume(S),z):$(S)}function C(S){return S===p?(t.consume(S),p=null,Z):S===null||Re(S)?l(S):(t.consume(S),C)}function $(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||st(S)?I(S):(t.consume(S),$)}function Z(S){return S===47||S===62||Be(S)?T(S):l(S)}function L(S){return S===62?(t.consume(S),ne):l(S)}function ne(S){return S===null||Re(S)?ie(S):Be(S)?(t.consume(S),ne):l(S)}function ie(S){return S===45&&o===2?(t.consume(S),H):S===60&&o===1?(t.consume(S),re):S===62&&o===4?(t.consume(S),M):S===63&&o===3?(t.consume(S),A):S===93&&o===5?(t.consume(S),ye):Re(S)&&(o===6||o===7)?(t.exit("htmlFlowData"),t.check(WE,X,Ae)(S)):S===null||Re(S)?(t.exit("htmlFlowData"),Ae(S)):(t.consume(S),ie)}function Ae(S){return t.check(eT,he,X)(S)}function he(S){return t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),ae}function ae(S){return S===null||Re(S)?Ae(S):(t.enter("htmlFlowData"),ie(S))}function H(S){return S===45?(t.consume(S),A):ie(S)}function re(S){return S===47?(t.consume(S),c="",le):ie(S)}function le(S){if(S===62){const oe=c.toLowerCase();return Wg.includes(oe)?(t.consume(S),M):ie(S)}return Jt(S)&&c.length<8?(t.consume(S),c+=String.fromCharCode(S),le):ie(S)}function ye(S){return S===93?(t.consume(S),A):ie(S)}function A(S){return S===62?(t.consume(S),M):S===45&&o===2?(t.consume(S),A):ie(S)}function M(S){return S===null||Re(S)?(t.exit("htmlFlowData"),X(S)):(t.consume(S),M)}function X(S){return t.exit("htmlFlow"),r(S)}}function aT(t,r,l){const u=this;return o;function o(c){return Re(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s):l(c)}function s(c){return u.parser.lazy[u.now().line]?l(c):r(c)}}function rT(t,r,l){return u;function u(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),t.attempt(Vi,r,l)}}const lT={name:"htmlText",tokenize:iT};function iT(t,r,l){const u=this;let o,s,c;return d;function d(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),p}function p(A){return A===33?(t.consume(A),m):A===47?(t.consume(A),I):A===63?(t.consume(A),T):Jt(A)?(t.consume(A),$):l(A)}function m(A){return A===45?(t.consume(A),y):A===91?(t.consume(A),s=0,k):Jt(A)?(t.consume(A),E):l(A)}function y(A){return A===45?(t.consume(A),b):l(A)}function g(A){return A===null?l(A):A===45?(t.consume(A),x):Re(A)?(c=g,re(A)):(t.consume(A),g)}function x(A){return A===45?(t.consume(A),b):g(A)}function b(A){return A===62?H(A):A===45?x(A):g(A)}function k(A){const M="CDATA[";return A===M.charCodeAt(s++)?(t.consume(A),s===M.length?O:k):l(A)}function O(A){return A===null?l(A):A===93?(t.consume(A),j):Re(A)?(c=O,re(A)):(t.consume(A),O)}function j(A){return A===93?(t.consume(A),R):O(A)}function R(A){return A===62?H(A):A===93?(t.consume(A),R):O(A)}function E(A){return A===null||A===62?H(A):Re(A)?(c=E,re(A)):(t.consume(A),E)}function T(A){return A===null?l(A):A===63?(t.consume(A),q):Re(A)?(c=T,re(A)):(t.consume(A),T)}function q(A){return A===62?H(A):T(A)}function I(A){return Jt(A)?(t.consume(A),z):l(A)}function z(A){return A===45||Vt(A)?(t.consume(A),z):C(A)}function C(A){return Re(A)?(c=C,re(A)):Be(A)?(t.consume(A),C):H(A)}function $(A){return A===45||Vt(A)?(t.consume(A),$):A===47||A===62||st(A)?Z(A):l(A)}function Z(A){return A===47?(t.consume(A),H):A===58||A===95||Jt(A)?(t.consume(A),L):Re(A)?(c=Z,re(A)):Be(A)?(t.consume(A),Z):H(A)}function L(A){return A===45||A===46||A===58||A===95||Vt(A)?(t.consume(A),L):ne(A)}function ne(A){return A===61?(t.consume(A),ie):Re(A)?(c=ne,re(A)):Be(A)?(t.consume(A),ne):Z(A)}function ie(A){return A===null||A===60||A===61||A===62||A===96?l(A):A===34||A===39?(t.consume(A),o=A,Ae):Re(A)?(c=ie,re(A)):Be(A)?(t.consume(A),ie):(t.consume(A),he)}function Ae(A){return A===o?(t.consume(A),o=void 0,ae):A===null?l(A):Re(A)?(c=Ae,re(A)):(t.consume(A),Ae)}function he(A){return A===null||A===34||A===39||A===60||A===61||A===96?l(A):A===47||A===62||st(A)?Z(A):(t.consume(A),he)}function ae(A){return A===47||A===62||st(A)?Z(A):l(A)}function H(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),r):l(A)}function re(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),le}function le(A){return Be(A)?Ze(t,ye,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):ye(A)}function ye(A){return t.enter("htmlTextData"),c(A)}}const ah={name:"labelEnd",resolveAll:cT,resolveTo:fT,tokenize:hT},uT={tokenize:dT},oT={tokenize:mT},sT={tokenize:pT};function cT(t){let r=-1;const l=[];for(;++r<t.length;){const u=t[r][1];if(l.push(t[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const o=u.type==="labelImage"?4:2;u.type="data",r+=o}}return t.length!==l.length&&xn(t,0,t.length,l),t}function fT(t,r){let l=t.length,u=0,o,s,c,d;for(;l--;)if(o=t[l][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;t[l][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(c){if(t[l][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=l,o.type!=="labelLink")){u=2;break}}else o.type==="labelEnd"&&(c=l);const p={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},m={type:"label",start:{...t[s][1].start},end:{...t[c][1].end}},y={type:"labelText",start:{...t[s+u+2][1].end},end:{...t[c-2][1].start}};return d=[["enter",p,r],["enter",m,r]],d=On(d,t.slice(s+1,s+u+3)),d=On(d,[["enter",y,r]]),d=On(d,Oo(r.parser.constructs.insideSpan.null,t.slice(s+u+4,c-3),r)),d=On(d,[["exit",y,r],t[c-2],t[c-1],["exit",m,r]]),d=On(d,t.slice(c+1)),d=On(d,[["exit",p,r]]),xn(t,s,t.length,d),t}function hT(t,r,l){const u=this;let o=u.events.length,s,c;for(;o--;)if((u.events[o][1].type==="labelImage"||u.events[o][1].type==="labelLink")&&!u.events[o][1]._balanced){s=u.events[o][1];break}return d;function d(x){return s?s._inactive?g(x):(c=u.parser.defined.includes(In(u.sliceSerialize({start:s.end,end:u.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(x),t.exit("labelMarker"),t.exit("labelEnd"),p):l(x)}function p(x){return x===40?t.attempt(uT,y,c?y:g)(x):x===91?t.attempt(oT,y,c?m:g)(x):c?y(x):g(x)}function m(x){return t.attempt(sT,y,g)(x)}function y(x){return r(x)}function g(x){return s._balanced=!0,l(x)}}function dT(t,r,l){return u;function u(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),o}function o(g){return st(g)?zi(t,s)(g):s(g)}function s(g){return g===41?y(g):zv(t,c,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function c(g){return st(g)?zi(t,p)(g):y(g)}function d(g){return l(g)}function p(g){return g===34||g===39||g===40?Ov(t,m,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function m(g){return st(g)?zi(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),r):l(g)}}function mT(t,r,l){const u=this;return o;function o(d){return Mv.call(u,t,s,c,"reference","referenceMarker","referenceString")(d)}function s(d){return u.parser.defined.includes(In(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(d):l(d)}function c(d){return l(d)}}function pT(t,r,l){return u;function u(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),o}function o(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),r):l(s)}}const gT={name:"labelStartImage",resolveAll:ah.resolveAll,tokenize:yT};function yT(t,r,l){const u=this;return o;function o(d){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(d),t.exit("labelImageMarker"),s}function s(d){return d===91?(t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelImage"),c):l(d)}function c(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(d):r(d)}}const vT={name:"labelStartLink",resolveAll:ah.resolveAll,tokenize:bT};function bT(t,r,l){const u=this;return o;function o(c){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelLink"),s}function s(c){return c===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(c):r(c)}}const uf={name:"lineEnding",tokenize:xT};function xT(t,r){return l;function l(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Ze(t,r,"linePrefix")}}const vo={name:"thematicBreak",tokenize:wT};function wT(t,r,l){let u=0,o;return s;function s(m){return t.enter("thematicBreak"),c(m)}function c(m){return o=m,d(m)}function d(m){return m===o?(t.enter("thematicBreakSequence"),p(m)):u>=3&&(m===null||Re(m))?(t.exit("thematicBreak"),r(m)):l(m)}function p(m){return m===o?(t.consume(m),u++,p):(t.exit("thematicBreakSequence"),Be(m)?Ze(t,d,"whitespace")(m):d(m))}}const ln={continuation:{tokenize:kT},exit:CT,name:"list",tokenize:TT},ST={partial:!0,tokenize:RT},ET={partial:!0,tokenize:AT};function TT(t,r,l){const u=this,o=u.events[u.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,c=0;return d;function d(b){const k=u.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(k==="listUnordered"?!u.containerState.marker||b===u.containerState.marker:Df(b)){if(u.containerState.type||(u.containerState.type=k,t.enter(k,{_container:!0})),k==="listUnordered")return t.enter("listItemPrefix"),b===42||b===45?t.check(vo,l,m)(b):m(b);if(!u.interrupt||b===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(b)}return l(b)}function p(b){return Df(b)&&++c<10?(t.consume(b),p):(!u.interrupt||c<2)&&(u.containerState.marker?b===u.containerState.marker:b===41||b===46)?(t.exit("listItemValue"),m(b)):l(b)}function m(b){return t.enter("listItemMarker"),t.consume(b),t.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||b,t.check(Vi,u.interrupt?l:y,t.attempt(ST,x,g))}function y(b){return u.containerState.initialBlankLine=!0,s++,x(b)}function g(b){return Be(b)?(t.enter("listItemPrefixWhitespace"),t.consume(b),t.exit("listItemPrefixWhitespace"),x):l(b)}function x(b){return u.containerState.size=s+u.sliceSerialize(t.exit("listItemPrefix"),!0).length,r(b)}}function kT(t,r,l){const u=this;return u.containerState._closeFlow=void 0,t.check(Vi,o,s);function o(d){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ze(t,r,"listItemIndent",u.containerState.size+1)(d)}function s(d){return u.containerState.furtherBlankLines||!Be(d)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,c(d)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,t.attempt(ET,r,c)(d))}function c(d){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ze(t,t.attempt(ln,r,l),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function AT(t,r,l){const u=this;return Ze(t,o,"listItemIndent",u.containerState.size+1);function o(s){const c=u.events[u.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===u.containerState.size?r(s):l(s)}}function CT(t){t.exit(this.containerState.type)}function RT(t,r,l){const u=this;return Ze(t,o,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const c=u.events[u.events.length-1];return!Be(s)&&c&&c[1].type==="listItemPrefixWhitespace"?r(s):l(s)}}const ey={name:"setextUnderline",resolveTo:DT,tokenize:_T};function DT(t,r){let l=t.length,u,o,s;for(;l--;)if(t[l][0]==="enter"){if(t[l][1].type==="content"){u=l;break}t[l][1].type==="paragraph"&&(o=l)}else t[l][1].type==="content"&&t.splice(l,1),!s&&t[l][1].type==="definition"&&(s=l);const c={type:"setextHeading",start:{...t[u][1].start},end:{...t[t.length-1][1].end}};return t[o][1].type="setextHeadingText",s?(t.splice(o,0,["enter",c,r]),t.splice(s+1,0,["exit",t[u][1],r]),t[u][1].end={...t[s][1].end}):t[u][1]=c,t.push(["exit",c,r]),t}function _T(t,r,l){const u=this;let o;return s;function s(m){let y=u.events.length,g;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){g=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||g)?(t.enter("setextHeadingLine"),o=m,c(m)):l(m)}function c(m){return t.enter("setextHeadingLineSequence"),d(m)}function d(m){return m===o?(t.consume(m),d):(t.exit("setextHeadingLineSequence"),Be(m)?Ze(t,p,"lineSuffix")(m):p(m))}function p(m){return m===null||Re(m)?(t.exit("setextHeadingLine"),r(m)):l(m)}}const zT={tokenize:MT};function MT(t){const r=this,l=t.attempt(Vi,u,t.attempt(this.parser.constructs.flowInitial,o,Ze(t,t.attempt(this.parser.constructs.flow,o,t.attempt(UE,o)),"linePrefix")));return l;function u(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function o(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r.currentConstruct=void 0,l}}const OT={resolveAll:Nv()},jT=jv("string"),NT=jv("text");function jv(t){return{resolveAll:Nv(t==="text"?LT:void 0),tokenize:r};function r(l){const u=this,o=this.parser.constructs[t],s=l.attempt(o,c,d);return c;function c(y){return m(y)?s(y):d(y)}function d(y){if(y===null){l.consume(y);return}return l.enter("data"),l.consume(y),p}function p(y){return m(y)?(l.exit("data"),s(y)):(l.consume(y),p)}function m(y){if(y===null)return!0;const g=o[y];let x=-1;if(g)for(;++x<g.length;){const b=g[x];if(!b.previous||b.previous.call(u,u.previous))return!0}return!1}}}function Nv(t){return r;function r(l,u){let o=-1,s;for(;++o<=l.length;)s===void 0?l[o]&&l[o][1].type==="data"&&(s=o,o++):(!l[o]||l[o][1].type!=="data")&&(o!==s+2&&(l[s][1].end=l[o-1][1].end,l.splice(s+2,o-s-2),o=s+2),s=void 0);return t?t(l,u):l}}function LT(t,r){let l=0;for(;++l<=t.length;)if((l===t.length||t[l][1].type==="lineEnding")&&t[l-1][1].type==="data"){const u=t[l-1][1],o=r.sliceStream(u);let s=o.length,c=-1,d=0,p;for(;s--;){const m=o[s];if(typeof m=="string"){for(c=m.length;m.charCodeAt(c-1)===32;)d++,c--;if(c)break;c=-1}else if(m===-2)p=!0,d++;else if(m!==-1){s++;break}}if(r._contentTypeTextTrailing&&l===t.length&&(d=0),d){const m={type:l===t.length||p||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?c:u.start._bufferIndex+c,_index:u.start._index+s,line:u.end.line,column:u.end.column-d,offset:u.end.offset-d},end:{...u.end}};u.end={...m.start},u.start.offset===u.end.offset?Object.assign(u,m):(t.splice(l,0,["enter",m,r],["exit",m,r]),l+=2)}l++}return t}const UT={42:ln,43:ln,45:ln,48:ln,49:ln,50:ln,51:ln,52:ln,53:ln,54:ln,55:ln,56:ln,57:ln,62:Cv},HT={91:qE},BT={[-2]:lf,[-1]:lf,32:lf},FT={35:PE,42:vo,45:[ey,vo],60:KE,61:ey,95:vo,96:Kg,126:Kg},YT={38:Dv,92:Rv},qT={[-5]:uf,[-4]:uf,[-3]:uf,33:gT,38:Dv,42:_f,60:[vE,lT],91:vT,92:[XE,Rv],93:ah,95:_f,96:zE},IT={null:[_f,OT]},GT={null:[42,95]},VT={null:[]},XT=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:GT,contentInitial:HT,disable:VT,document:UT,flow:FT,flowInitial:BT,insideSpan:IT,string:YT,text:qT},Symbol.toStringTag,{value:"Module"}));function QT(t,r,l){let u={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const o={},s=[];let c=[],d=[];const p={attempt:C(I),check:C(z),consume:E,enter:T,exit:q,interrupt:C(z,{interrupt:!0})},m={code:null,containerState:{},defineSkip:O,events:[],now:k,parser:t,previous:null,sliceSerialize:x,sliceStream:b,write:g};let y=r.tokenize.call(m,p);return r.resolveAll&&s.push(r),m;function g(ne){return c=On(c,ne),j(),c[c.length-1]!==null?[]:($(r,0),m.events=Oo(s,m.events,m),m.events)}function x(ne,ie){return ZT(b(ne),ie)}function b(ne){return PT(c,ne)}function k(){const{_bufferIndex:ne,_index:ie,line:Ae,column:he,offset:ae}=u;return{_bufferIndex:ne,_index:ie,line:Ae,column:he,offset:ae}}function O(ne){o[ne.line]=ne.column,L()}function j(){let ne;for(;u._index<c.length;){const ie=c[u._index];if(typeof ie=="string")for(ne=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ne&&u._bufferIndex<ie.length;)R(ie.charCodeAt(u._bufferIndex));else R(ie)}}function R(ne){y=y(ne)}function E(ne){Re(ne)?(u.line++,u.column=1,u.offset+=ne===-3?2:1,L()):ne!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===c[u._index].length&&(u._bufferIndex=-1,u._index++)),m.previous=ne}function T(ne,ie){const Ae=ie||{};return Ae.type=ne,Ae.start=k(),m.events.push(["enter",Ae,m]),d.push(Ae),Ae}function q(ne){const ie=d.pop();return ie.end=k(),m.events.push(["exit",ie,m]),ie}function I(ne,ie){$(ne,ie.from)}function z(ne,ie){ie.restore()}function C(ne,ie){return Ae;function Ae(he,ae,H){let re,le,ye,A;return Array.isArray(he)?X(he):"tokenize"in he?X([he]):M(he);function M(ve){return ze;function ze(Qe){const Je=Qe!==null&&ve[Qe],Mt=Qe!==null&&ve.null,qt=[...Array.isArray(Je)?Je:Je?[Je]:[],...Array.isArray(Mt)?Mt:Mt?[Mt]:[]];return X(qt)(Qe)}}function X(ve){return re=ve,le=0,ve.length===0?H:S(ve[le])}function S(ve){return ze;function ze(Qe){return A=Z(),ye=ve,ve.partial||(m.currentConstruct=ve),ve.name&&m.parser.constructs.disable.null.includes(ve.name)?ge():ve.tokenize.call(ie?Object.assign(Object.create(m),ie):m,p,oe,ge)(Qe)}}function oe(ve){return ne(ye,A),ae}function ge(ve){return A.restore(),++le<re.length?S(re[le]):H}}}function $(ne,ie){ne.resolveAll&&!s.includes(ne)&&s.push(ne),ne.resolve&&xn(m.events,ie,m.events.length-ie,ne.resolve(m.events.slice(ie),m)),ne.resolveTo&&(m.events=ne.resolveTo(m.events,m))}function Z(){const ne=k(),ie=m.previous,Ae=m.currentConstruct,he=m.events.length,ae=Array.from(d);return{from:he,restore:H};function H(){u=ne,m.previous=ie,m.currentConstruct=Ae,m.events.length=he,d=ae,L()}}function L(){u.line in o&&u.column<2&&(u.column=o[u.line],u.offset+=o[u.line]-1)}}function PT(t,r){const l=r.start._index,u=r.start._bufferIndex,o=r.end._index,s=r.end._bufferIndex;let c;if(l===o)c=[t[l].slice(u,s)];else{if(c=t.slice(l,o),u>-1){const d=c[0];typeof d=="string"?c[0]=d.slice(u):c.shift()}s>0&&c.push(t[o].slice(0,s))}return c}function ZT(t,r){let l=-1;const u=[];let o;for(;++l<t.length;){const s=t[l];let c;if(typeof s=="string")c=s;else switch(s){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=r?" ":"	";break}case-1:{if(!r&&o)continue;c=" ";break}default:c=String.fromCharCode(s)}o=s===-2,u.push(c)}return u.join("")}function JT(t){const u={constructs:kv([XT,...(t||{}).extensions||[]]),content:o(fE),defined:[],document:o(dE),flow:o(zT),lazy:{},string:o(jT),text:o(NT)};return u;function o(s){return c;function c(d){return QT(u,s,d)}}}function $T(t){for(;!_v(t););return t}const ty=/[\0\t\n\r]/g;function KT(){let t=1,r="",l=!0,u;return o;function o(s,c,d){const p=[];let m,y,g,x,b;for(s=r+(typeof s=="string"?s.toString():new TextDecoder(c||void 0).decode(s)),g=0,r="",l&&(s.charCodeAt(0)===65279&&g++,l=void 0);g<s.length;){if(ty.lastIndex=g,m=ty.exec(s),x=m&&m.index!==void 0?m.index:s.length,b=s.charCodeAt(x),!m){r=s.slice(g);break}if(b===10&&g===x&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),g<x&&(p.push(s.slice(g,x)),t+=x-g),b){case 0:{p.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,p.push(-2);t++<y;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:u=!0,t=1}g=x+1}return d&&(u&&p.push(-5),r&&p.push(r),p.push(null)),p}}const WT=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ek(t){return t.replace(WT,tk)}function tk(t,r,l){if(r)return r;if(l.charCodeAt(0)===35){const o=l.charCodeAt(1),s=o===120||o===88;return Av(l.slice(s?2:1),s?16:10)}return nh(l)||t}const Lv={}.hasOwnProperty;function nk(t,r,l){return typeof r!="string"&&(l=r,r=void 0),ak(l)($T(JT(l).document().write(KT()(t,r,!0))))}function ak(t){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(ea),autolinkProtocol:Z,autolinkEmail:Z,atxHeading:s(ka),blockQuote:s(Mt),characterEscape:Z,characterReference:Z,codeFenced:s(qt),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(qt,c),codeText:s(dt,c),codeTextData:Z,data:Z,codeFlowValue:Z,definition:s(Qt),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(wn),hardBreakEscape:s($t),hardBreakTrailing:s($t),htmlFlow:s(Nr,c),htmlFlowData:Z,htmlText:s(Nr,c),htmlTextData:Z,image:s(Lr),label:c,link:s(ea),listItem:s(ir),listItemValue:x,listOrdered:s(Aa,g),listUnordered:s(Aa),paragraph:s(Cl),reference:S,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(ka),strong:s(Rl),thematicBreak:s(ta)},exit:{atxHeading:p(),atxHeadingSequence:I,autolink:p(),autolinkEmail:Je,autolinkProtocol:Qe,blockQuote:p(),characterEscapeValue:L,characterReferenceMarkerHexadecimal:ge,characterReferenceMarkerNumeric:ge,characterReferenceValue:ve,characterReference:ze,codeFenced:p(j),codeFencedFence:O,codeFencedFenceInfo:b,codeFencedFenceMeta:k,codeFlowValue:L,codeIndented:p(R),codeText:p(ae),codeTextData:L,data:L,definition:p(),definitionDestinationString:q,definitionLabelString:E,definitionTitleString:T,emphasis:p(),hardBreakEscape:p(ie),hardBreakTrailing:p(ie),htmlFlow:p(Ae),htmlFlowData:L,htmlText:p(he),htmlTextData:L,image:p(re),label:ye,labelText:le,lineEnding:ne,link:p(H),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:oe,resourceDestinationString:A,resourceTitleString:M,resource:X,setextHeading:p($),setextHeadingLineSequence:C,setextHeadingText:z,strong:p(),thematicBreak:p()}};Uv(r,(t||{}).mdastExtensions||[]);const l={};return u;function u(K){let ce={type:"root",children:[]};const Ee={stack:[ce],tokenStack:[],config:r,enter:d,exit:m,buffer:c,resume:y,data:l},_e=[];let $e=-1;for(;++$e<K.length;)if(K[$e][1].type==="listOrdered"||K[$e][1].type==="listUnordered")if(K[$e][0]==="enter")_e.push($e);else{const Pt=_e.pop();$e=o(K,Pt,$e)}for($e=-1;++$e<K.length;){const Pt=r[K[$e][0]];Lv.call(Pt,K[$e][1].type)&&Pt[K[$e][1].type].call(Object.assign({sliceSerialize:K[$e][2].sliceSerialize},Ee),K[$e][1])}if(Ee.tokenStack.length>0){const Pt=Ee.tokenStack[Ee.tokenStack.length-1];(Pt[1]||ny).call(Ee,void 0,Pt[0])}for(ce.position={start:Wa(K.length>0?K[0][1].start:{line:1,column:1,offset:0}),end:Wa(K.length>0?K[K.length-2][1].end:{line:1,column:1,offset:0})},$e=-1;++$e<r.transforms.length;)ce=r.transforms[$e](ce)||ce;return ce}function o(K,ce,Ee){let _e=ce-1,$e=-1,Pt=!1,on,Nt,nt,Lt;for(;++_e<=Ee;){const tt=K[_e];switch(tt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{tt[0]==="enter"?$e++:$e--,Lt=void 0;break}case"lineEndingBlank":{tt[0]==="enter"&&(on&&!Lt&&!$e&&!nt&&(nt=_e),Lt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Lt=void 0}if(!$e&&tt[0]==="enter"&&tt[1].type==="listItemPrefix"||$e===-1&&tt[0]==="exit"&&(tt[1].type==="listUnordered"||tt[1].type==="listOrdered")){if(on){let Ln=_e;for(Nt=void 0;Ln--;){const sn=K[Ln];if(sn[1].type==="lineEnding"||sn[1].type==="lineEndingBlank"){if(sn[0]==="exit")continue;Nt&&(K[Nt][1].type="lineEndingBlank",Pt=!0),sn[1].type="lineEnding",Nt=Ln}else if(!(sn[1].type==="linePrefix"||sn[1].type==="blockQuotePrefix"||sn[1].type==="blockQuotePrefixWhitespace"||sn[1].type==="blockQuoteMarker"||sn[1].type==="listItemIndent"))break}nt&&(!Nt||nt<Nt)&&(on._spread=!0),on.end=Object.assign({},Nt?K[Nt][1].start:tt[1].end),K.splice(Nt||_e,0,["exit",on,tt[2]]),_e++,Ee++}if(tt[1].type==="listItemPrefix"){const Ln={type:"listItem",_spread:!1,start:Object.assign({},tt[1].start),end:void 0};on=Ln,K.splice(_e,0,["enter",Ln,tt[2]]),_e++,Ee++,nt=void 0,Lt=!0}}}return K[ce][1]._spread=Pt,Ee}function s(K,ce){return Ee;function Ee(_e){d.call(this,K(_e),_e),ce&&ce.call(this,_e)}}function c(){this.stack.push({type:"fragment",children:[]})}function d(K,ce,Ee){this.stack[this.stack.length-1].children.push(K),this.stack.push(K),this.tokenStack.push([ce,Ee||void 0]),K.position={start:Wa(ce.start),end:void 0}}function p(K){return ce;function ce(Ee){K&&K.call(this,Ee),m.call(this,Ee)}}function m(K,ce){const Ee=this.stack.pop(),_e=this.tokenStack.pop();if(_e)_e[0].type!==K.type&&(ce?ce.call(this,K,_e[0]):(_e[1]||ny).call(this,K,_e[0]));else throw new Error("Cannot close `"+K.type+"` ("+_i({start:K.start,end:K.end})+"): it’s not open");Ee.position.end=Wa(K.end)}function y(){return th(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function x(K){if(this.data.expectingFirstListItemValue){const ce=this.stack[this.stack.length-2];ce.start=Number.parseInt(this.sliceSerialize(K),10),this.data.expectingFirstListItemValue=void 0}}function b(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.lang=K}function k(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.meta=K}function O(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.value=K.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function R(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.value=K.replace(/(\r?\n|\r)$/g,"")}function E(K){const ce=this.resume(),Ee=this.stack[this.stack.length-1];Ee.label=ce,Ee.identifier=In(this.sliceSerialize(K)).toLowerCase()}function T(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.title=K}function q(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.url=K}function I(K){const ce=this.stack[this.stack.length-1];if(!ce.depth){const Ee=this.sliceSerialize(K).length;ce.depth=Ee}}function z(){this.data.setextHeadingSlurpLineEnding=!0}function C(K){const ce=this.stack[this.stack.length-1];ce.depth=this.sliceSerialize(K).codePointAt(0)===61?1:2}function $(){this.data.setextHeadingSlurpLineEnding=void 0}function Z(K){const Ee=this.stack[this.stack.length-1].children;let _e=Ee[Ee.length-1];(!_e||_e.type!=="text")&&(_e=gt(),_e.position={start:Wa(K.start),end:void 0},Ee.push(_e)),this.stack.push(_e)}function L(K){const ce=this.stack.pop();ce.value+=this.sliceSerialize(K),ce.position.end=Wa(K.end)}function ne(K){const ce=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Ee=ce.children[ce.children.length-1];Ee.position.end=Wa(K.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(ce.type)&&(Z.call(this,K),L.call(this,K))}function ie(){this.data.atHardBreak=!0}function Ae(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.value=K}function he(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.value=K}function ae(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.value=K}function H(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=ce,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function re(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const ce=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=ce,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function le(K){const ce=this.sliceSerialize(K),Ee=this.stack[this.stack.length-2];Ee.label=ek(ce),Ee.identifier=In(ce).toLowerCase()}function ye(){const K=this.stack[this.stack.length-1],ce=this.resume(),Ee=this.stack[this.stack.length-1];if(this.data.inReference=!0,Ee.type==="link"){const _e=K.children;Ee.children=_e}else Ee.alt=ce}function A(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.url=K}function M(){const K=this.resume(),ce=this.stack[this.stack.length-1];ce.title=K}function X(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function oe(K){const ce=this.resume(),Ee=this.stack[this.stack.length-1];Ee.label=ce,Ee.identifier=In(this.sliceSerialize(K)).toLowerCase(),this.data.referenceType="full"}function ge(K){this.data.characterReferenceType=K.type}function ve(K){const ce=this.sliceSerialize(K),Ee=this.data.characterReferenceType;let _e;Ee?(_e=Av(ce,Ee==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_e=nh(ce);const $e=this.stack[this.stack.length-1];$e.value+=_e}function ze(K){const ce=this.stack.pop();ce.position.end=Wa(K.end)}function Qe(K){L.call(this,K);const ce=this.stack[this.stack.length-1];ce.url=this.sliceSerialize(K)}function Je(K){L.call(this,K);const ce=this.stack[this.stack.length-1];ce.url="mailto:"+this.sliceSerialize(K)}function Mt(){return{type:"blockquote",children:[]}}function qt(){return{type:"code",lang:null,meta:null,value:""}}function dt(){return{type:"inlineCode",value:""}}function Qt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function wn(){return{type:"emphasis",children:[]}}function ka(){return{type:"heading",depth:0,children:[]}}function $t(){return{type:"break"}}function Nr(){return{type:"html",value:""}}function Lr(){return{type:"image",title:null,url:"",alt:null}}function ea(){return{type:"link",title:null,url:"",children:[]}}function Aa(K){return{type:"list",ordered:K.type==="listOrdered",start:null,spread:K._spread,children:[]}}function ir(K){return{type:"listItem",spread:K._spread,checked:null,children:[]}}function Cl(){return{type:"paragraph",children:[]}}function Rl(){return{type:"strong",children:[]}}function gt(){return{type:"text",value:""}}function ta(){return{type:"thematicBreak"}}}function Wa(t){return{line:t.line,column:t.column,offset:t.offset}}function Uv(t,r){let l=-1;for(;++l<r.length;){const u=r[l];Array.isArray(u)?Uv(t,u):rk(t,u)}}function rk(t,r){let l;for(l in r)if(Lv.call(r,l))switch(l){case"canContainEols":{const u=r[l];u&&t[l].push(...u);break}case"transforms":{const u=r[l];u&&t[l].push(...u);break}case"enter":case"exit":{const u=r[l];u&&Object.assign(t[l],u);break}}}function ny(t,r){throw t?new Error("Cannot close `"+t.type+"` ("+_i({start:t.start,end:t.end})+"): a different token (`"+r.type+"`, "+_i({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+_i({start:r.start,end:r.end})+") is still open")}function lk(t){const r=this;r.parser=l;function l(u){return nk(u,{...r.data("settings"),...t,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function ik(t,r){const l={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(r),!0)};return t.patch(r,l),t.applyData(r,l)}function uk(t,r){const l={type:"element",tagName:"br",properties:{},children:[]};return t.patch(r,l),[t.applyData(r,l),{type:"text",value:`
`}]}function ok(t,r){const l=r.value?r.value+`
`:"",u={},o=r.lang?r.lang.split(/\s+/):[];o.length>0&&(u.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:u,children:[{type:"text",value:l}]};return r.meta&&(s.data={meta:r.meta}),t.patch(r,s),s=t.applyData(r,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(r,s),s}function sk(t,r){const l={type:"element",tagName:"del",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function ck(t,r){const l={type:"element",tagName:"em",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function fk(t,r){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),o=Al(u.toLowerCase()),s=t.footnoteOrder.indexOf(u);let c,d=t.footnoteCounts.get(u);d===void 0?(d=0,t.footnoteOrder.push(u),c=t.footnoteOrder.length):c=s+1,d+=1,t.footnoteCounts.set(u,d);const p={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+o,id:l+"fnref-"+o+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};t.patch(r,p);const m={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(r,m),t.applyData(r,m)}function hk(t,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function dk(t,r){if(t.options.allowDangerousHtml){const l={type:"raw",value:r.value};return t.patch(r,l),t.applyData(r,l)}}function Hv(t,r){const l=r.referenceType;let u="]";if(l==="collapsed"?u+="[]":l==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const o=t.all(r),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const c=o[o.length-1];return c&&c.type==="text"?c.value+=u:o.push({type:"text",value:u}),o}function mk(t,r){const l=String(r.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return Hv(t,r);const o={src:Al(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"img",properties:o,children:[]};return t.patch(r,s),t.applyData(r,s)}function pk(t,r){const l={src:Al(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"img",properties:l,children:[]};return t.patch(r,u),t.applyData(r,u)}function gk(t,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};t.patch(r,l);const u={type:"element",tagName:"code",properties:{},children:[l]};return t.patch(r,u),t.applyData(r,u)}function yk(t,r){const l=String(r.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return Hv(t,r);const o={href:Al(u.url||"")};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"a",properties:o,children:t.all(r)};return t.patch(r,s),t.applyData(r,s)}function vk(t,r){const l={href:Al(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"a",properties:l,children:t.all(r)};return t.patch(r,u),t.applyData(r,u)}function bk(t,r,l){const u=t.all(r),o=l?xk(l):Bv(r),s={},c=[];if(typeof r.checked=="boolean"){const y=u[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},u.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let d=-1;for(;++d<u.length;){const y=u[d];(o||d!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!o?c.push(...y.children):c.push(y)}const p=u[u.length-1];p&&(o||p.type!=="element"||p.tagName!=="p")&&c.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:s,children:c};return t.patch(r,m),t.applyData(r,m)}function xk(t){let r=!1;if(t.type==="list"){r=t.spread||!1;const l=t.children;let u=-1;for(;!r&&++u<l.length;)r=Bv(l[u])}return r}function Bv(t){const r=t.spread;return r??t.children.length>1}function wk(t,r){const l={},u=t.all(r);let o=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++o<u.length;){const c=u[o];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const s={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:t.wrap(u,!0)};return t.patch(r,s),t.applyData(r,s)}function Sk(t,r){const l={type:"element",tagName:"p",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function Ek(t,r){const l={type:"root",children:t.wrap(t.all(r))};return t.patch(r,l),t.applyData(r,l)}function Tk(t,r){const l={type:"element",tagName:"strong",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function kk(t,r){const l=t.all(r),u=l.shift(),o=[];if(u){const c={type:"element",tagName:"thead",properties:{},children:t.wrap([u],!0)};t.patch(r.children[0],c),o.push(c)}if(l.length>0){const c={type:"element",tagName:"tbody",properties:{},children:t.wrap(l,!0)},d=$f(r.children[1]),p=vv(r.children[r.children.length-1]);d&&p&&(c.position={start:d,end:p}),o.push(c)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(o,!0)};return t.patch(r,s),t.applyData(r,s)}function Ak(t,r,l){const u=l?l.children:void 0,s=(u?u.indexOf(r):1)===0?"th":"td",c=l&&l.type==="table"?l.align:void 0,d=c?c.length:r.children.length;let p=-1;const m=[];for(;++p<d;){const g=r.children[p],x={},b=c?c[p]:void 0;b&&(x.align=b);let k={type:"element",tagName:s,properties:x,children:[]};g&&(k.children=t.all(g),t.patch(g,k),k=t.applyData(g,k)),m.push(k)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(m,!0)};return t.patch(r,y),t.applyData(r,y)}function Ck(t,r){const l={type:"element",tagName:"td",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}const ay=9,ry=32;function Rk(t){const r=String(t),l=/\r?\n|\r/g;let u=l.exec(r),o=0;const s=[];for(;u;)s.push(ly(r.slice(o,u.index),o>0,!0),u[0]),o=u.index+u[0].length,u=l.exec(r);return s.push(ly(r.slice(o),o>0,!1)),s.join("")}function ly(t,r,l){let u=0,o=t.length;if(r){let s=t.codePointAt(u);for(;s===ay||s===ry;)u++,s=t.codePointAt(u)}if(l){let s=t.codePointAt(o-1);for(;s===ay||s===ry;)o--,s=t.codePointAt(o-1)}return o>u?t.slice(u,o):""}function Dk(t,r){const l={type:"text",value:Rk(String(r.value))};return t.patch(r,l),t.applyData(r,l)}function _k(t,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(r,l),t.applyData(r,l)}const zk={blockquote:ik,break:uk,code:ok,delete:sk,emphasis:ck,footnoteReference:fk,heading:hk,html:dk,imageReference:mk,image:pk,inlineCode:gk,linkReference:yk,link:vk,listItem:bk,list:wk,paragraph:Sk,root:Ek,strong:Tk,table:kk,tableCell:Ck,tableRow:Ak,text:Dk,thematicBreak:_k,toml:co,yaml:co,definition:co,footnoteDefinition:co};function co(){}const Fv=-1,jo=0,Mi=1,So=2,rh=3,lh=4,ih=5,uh=6,Yv=7,qv=8,iy=typeof self=="object"?self:globalThis,Mk=(t,r)=>{const l=(o,s)=>(t.set(s,o),o),u=o=>{if(t.has(o))return t.get(o);const[s,c]=r[o];switch(s){case jo:case Fv:return l(c,o);case Mi:{const d=l([],o);for(const p of c)d.push(u(p));return d}case So:{const d=l({},o);for(const[p,m]of c)d[u(p)]=u(m);return d}case rh:return l(new Date(c),o);case lh:{const{source:d,flags:p}=c;return l(new RegExp(d,p),o)}case ih:{const d=l(new Map,o);for(const[p,m]of c)d.set(u(p),u(m));return d}case uh:{const d=l(new Set,o);for(const p of c)d.add(u(p));return d}case Yv:{const{name:d,message:p}=c;return l(new iy[d](p),o)}case qv:return l(BigInt(c),o);case"BigInt":return l(Object(BigInt(c)),o);case"ArrayBuffer":return l(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:d}=new Uint8Array(c);return l(new DataView(d),c)}}return l(new iy[s](c),o)};return u},uy=t=>Mk(new Map,t)(0),yl="",{toString:Ok}={},{keys:jk}=Object,ki=t=>{const r=typeof t;if(r!=="object"||!t)return[jo,r];const l=Ok.call(t).slice(8,-1);switch(l){case"Array":return[Mi,yl];case"Object":return[So,yl];case"Date":return[rh,yl];case"RegExp":return[lh,yl];case"Map":return[ih,yl];case"Set":return[uh,yl];case"DataView":return[Mi,l]}return l.includes("Array")?[Mi,l]:l.includes("Error")?[Yv,l]:[So,l]},fo=([t,r])=>t===jo&&(r==="function"||r==="symbol"),Nk=(t,r,l,u)=>{const o=(c,d)=>{const p=u.push(c)-1;return l.set(d,p),p},s=c=>{if(l.has(c))return l.get(c);let[d,p]=ki(c);switch(d){case jo:{let y=c;switch(p){case"bigint":d=qv,y=c.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return o([Fv],c)}return o([d,y],c)}case Mi:{if(p){let x=c;return p==="DataView"?x=new Uint8Array(c.buffer):p==="ArrayBuffer"&&(x=new Uint8Array(c)),o([p,[...x]],c)}const y=[],g=o([d,y],c);for(const x of c)y.push(s(x));return g}case So:{if(p)switch(p){case"BigInt":return o([p,c.toString()],c);case"Boolean":case"Number":case"String":return o([p,c.valueOf()],c)}if(r&&"toJSON"in c)return s(c.toJSON());const y=[],g=o([d,y],c);for(const x of jk(c))(t||!fo(ki(c[x])))&&y.push([s(x),s(c[x])]);return g}case rh:return o([d,c.toISOString()],c);case lh:{const{source:y,flags:g}=c;return o([d,{source:y,flags:g}],c)}case ih:{const y=[],g=o([d,y],c);for(const[x,b]of c)(t||!(fo(ki(x))||fo(ki(b))))&&y.push([s(x),s(b)]);return g}case uh:{const y=[],g=o([d,y],c);for(const x of c)(t||!fo(ki(x)))&&y.push(s(x));return g}}const{message:m}=c;return o([d,{name:p,message:m}],c)};return s},oy=(t,{json:r,lossy:l}={})=>{const u=[];return Nk(!(r||l),!!r,new Map,u)(t),u},Eo=typeof structuredClone=="function"?(t,r)=>r&&("json"in r||"lossy"in r)?uy(oy(t,r)):structuredClone(t):(t,r)=>uy(oy(t,r));function Lk(t,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function Uk(t,r){return"Back to reference "+(t+1)+(r>1?"-"+r:"")}function Hk(t){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=t.options.footnoteBackContent||Lk,u=t.options.footnoteBackLabel||Uk,o=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",c=t.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let p=-1;for(;++p<t.footnoteOrder.length;){const m=t.footnoteById.get(t.footnoteOrder[p]);if(!m)continue;const y=t.all(m),g=String(m.identifier).toUpperCase(),x=Al(g.toLowerCase());let b=0;const k=[],O=t.footnoteCounts.get(g);for(;O!==void 0&&++b<=O;){k.length>0&&k.push({type:"text",value:" "});let E=typeof l=="string"?l:l(p,b);typeof E=="string"&&(E={type:"text",value:E}),k.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+x+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,b),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const j=y[y.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const E=j.children[j.children.length-1];E&&E.type==="text"?E.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...k)}else y.push(...k);const R={type:"element",tagName:"li",properties:{id:r+"fn-"+x},children:t.wrap(y,!0)};t.patch(m,R),d.push(R)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Eo(c),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(d,!0)},{type:"text",value:`
`}]}}const No=(function(t){if(t==null)return qk;if(typeof t=="function")return Lo(t);if(typeof t=="object")return Array.isArray(t)?Bk(t):Fk(t);if(typeof t=="string")return Yk(t);throw new Error("Expected function, string, or object as test")});function Bk(t){const r=[];let l=-1;for(;++l<t.length;)r[l]=No(t[l]);return Lo(u);function u(...o){let s=-1;for(;++s<r.length;)if(r[s].apply(this,o))return!0;return!1}}function Fk(t){const r=t;return Lo(l);function l(u){const o=u;let s;for(s in t)if(o[s]!==r[s])return!1;return!0}}function Yk(t){return Lo(r);function r(l){return l&&l.type===t}}function Lo(t){return r;function r(l,u,o){return!!(Ik(l)&&t.call(this,l,typeof u=="number"?u:void 0,o||void 0))}}function qk(){return!0}function Ik(t){return t!==null&&typeof t=="object"&&"type"in t}const Iv=[],Gk=!0,zf=!1,Vk="skip";function Gv(t,r,l,u){let o;typeof r=="function"&&typeof l!="function"?(u=l,l=r):o=r;const s=No(o),c=u?-1:1;d(t,void 0,[])();function d(p,m,y){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const b=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(p.type+(b?"<"+b+">":""))+")"})}return x;function x(){let b=Iv,k,O,j;if((!r||s(p,m,y[y.length-1]||void 0))&&(b=Xk(l(p,y)),b[0]===zf))return b;if("children"in p&&p.children){const R=p;if(R.children&&b[0]!==Vk)for(O=(u?R.children.length:-1)+c,j=y.concat(R);O>-1&&O<R.children.length;){const E=R.children[O];if(k=d(E,O,j)(),k[0]===zf)return k;O=typeof k[1]=="number"?k[1]:O+c}}return b}}}function Xk(t){return Array.isArray(t)?t:typeof t=="number"?[Gk,t]:t==null?Iv:[t]}function oh(t,r,l,u){let o,s,c;typeof r=="function"&&typeof l!="function"?(s=void 0,c=r,o=l):(s=r,c=l,o=u),Gv(t,s,d,o);function d(p,m){const y=m[m.length-1],g=y?y.children.indexOf(p):void 0;return c(p,g,y)}}const Mf={}.hasOwnProperty,Qk={};function Pk(t,r){const l=r||Qk,u=new Map,o=new Map,s=new Map,c={...zk,...l.handlers},d={all:m,applyData:Jk,definitionById:u,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:c,one:p,options:l,patch:Zk,wrap:Kk};return oh(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?u:o,x=String(y.identifier).toUpperCase();g.has(x)||g.set(x,y)}}),d;function p(y,g){const x=y.type,b=d.handlers[x];if(Mf.call(d.handlers,x)&&b)return b(d,y,g);if(d.options.passThrough&&d.options.passThrough.includes(x)){if("children"in y){const{children:O,...j}=y,R=Eo(j);return R.children=d.all(y),R}return Eo(y)}return(d.options.unknownHandler||$k)(d,y,g)}function m(y){const g=[];if("children"in y){const x=y.children;let b=-1;for(;++b<x.length;){const k=d.one(x[b],y);if(k){if(b&&x[b-1].type==="break"&&(!Array.isArray(k)&&k.type==="text"&&(k.value=sy(k.value)),!Array.isArray(k)&&k.type==="element")){const O=k.children[0];O&&O.type==="text"&&(O.value=sy(O.value))}Array.isArray(k)?g.push(...k):g.push(k)}}}return g}}function Zk(t,r){t.position&&(r.position=US(t))}function Jk(t,r){let l=r;if(t&&t.data){const u=t.data.hName,o=t.data.hChildren,s=t.data.hProperties;if(typeof u=="string")if(l.type==="element")l.tagName=u;else{const c="children"in l?l.children:[l];l={type:"element",tagName:u,properties:{},children:c}}l.type==="element"&&s&&Object.assign(l.properties,Eo(s)),"children"in l&&l.children&&o!==null&&o!==void 0&&(l.children=o)}return l}function $k(t,r){const l=r.data||{},u="value"in r&&!(Mf.call(l,"hProperties")||Mf.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:t.all(r)};return t.patch(r,u),t.applyData(r,u)}function Kk(t,r){const l=[];let u=-1;for(r&&l.push({type:"text",value:`
`});++u<t.length;)u&&l.push({type:"text",value:`
`}),l.push(t[u]);return r&&t.length>0&&l.push({type:"text",value:`
`}),l}function sy(t){let r=0,l=t.charCodeAt(r);for(;l===9||l===32;)r++,l=t.charCodeAt(r);return t.slice(r)}function cy(t,r){const l=Pk(t,r),u=l.one(t,void 0),o=Hk(l),s=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function Wk(t,r){return t&&"run"in t?async function(l,u){const o=cy(l,{file:u,...r});await t.run(o,u)}:function(l,u){return cy(l,{file:u,...t||r})}}function fy(t){if(t)throw t}var of,hy;function eA(){if(hy)return of;hy=1;var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},s=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var y=t.call(m,"constructor"),g=m.constructor&&m.constructor.prototype&&t.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!g)return!1;var x;for(x in m);return typeof x>"u"||t.call(m,x)},c=function(m,y){l&&y.name==="__proto__"?l(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},d=function(m,y){if(y==="__proto__")if(t.call(m,y)){if(u)return u(m,y).value}else return;return m[y]};return of=function p(){var m,y,g,x,b,k,O=arguments[0],j=1,R=arguments.length,E=!1;for(typeof O=="boolean"&&(E=O,O=arguments[1]||{},j=2),(O==null||typeof O!="object"&&typeof O!="function")&&(O={});j<R;++j)if(m=arguments[j],m!=null)for(y in m)g=d(O,y),x=d(m,y),O!==x&&(E&&x&&(s(x)||(b=o(x)))?(b?(b=!1,k=g&&o(g)?g:[]):k=g&&s(g)?g:{},c(O,{name:y,newValue:p(E,k,x)})):typeof x<"u"&&c(O,{name:y,newValue:x}));return O},of}var tA=eA();const sf=Ro(tA);function Of(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function nA(){const t=[],r={run:l,use:u};return r;function l(...o){let s=-1;const c=o.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);d(null,...o);function d(p,...m){const y=t[++s];let g=-1;if(p){c(p);return}for(;++g<o.length;)(m[g]===null||m[g]===void 0)&&(m[g]=o[g]);o=m,y?aA(y,d)(...m):c(null,...m)}}function u(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return t.push(o),r}}function aA(t,r){let l;return u;function u(...c){const d=t.length>c.length;let p;d&&c.push(o);try{p=t.apply(this,c)}catch(m){const y=m;if(d&&l)throw y;return o(y)}d||(p&&p.then&&typeof p.then=="function"?p.then(s,o):p instanceof Error?o(p):s(p))}function o(c,...d){l||(l=!0,r(c,...d))}function s(c){o(null,c)}}const Zn={basename:rA,dirname:lA,extname:iA,join:uA,sep:"/"};function rA(t,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Xi(t);let l=0,u=-1,o=t.length,s;if(r===void 0||r.length===0||r.length>t.length){for(;o--;)if(t.codePointAt(o)===47){if(s){l=o+1;break}}else u<0&&(s=!0,u=o+1);return u<0?"":t.slice(l,u)}if(r===t)return"";let c=-1,d=r.length-1;for(;o--;)if(t.codePointAt(o)===47){if(s){l=o+1;break}}else c<0&&(s=!0,c=o+1),d>-1&&(t.codePointAt(o)===r.codePointAt(d--)?d<0&&(u=o):(d=-1,u=c));return l===u?u=c:u<0&&(u=t.length),t.slice(l,u)}function lA(t){if(Xi(t),t.length===0)return".";let r=-1,l=t.length,u;for(;--l;)if(t.codePointAt(l)===47){if(u){r=l;break}}else u||(u=!0);return r<0?t.codePointAt(0)===47?"/":".":r===1&&t.codePointAt(0)===47?"//":t.slice(0,r)}function iA(t){Xi(t);let r=t.length,l=-1,u=0,o=-1,s=0,c;for(;r--;){const d=t.codePointAt(r);if(d===47){if(c){u=r+1;break}continue}l<0&&(c=!0,l=r+1),d===46?o<0?o=r:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||l<0||s===0||s===1&&o===l-1&&o===u+1?"":t.slice(o,l)}function uA(...t){let r=-1,l;for(;++r<t.length;)Xi(t[r]),t[r]&&(l=l===void 0?t[r]:l+"/"+t[r]);return l===void 0?".":oA(l)}function oA(t){Xi(t);const r=t.codePointAt(0)===47;let l=sA(t,!r);return l.length===0&&!r&&(l="."),l.length>0&&t.codePointAt(t.length-1)===47&&(l+="/"),r?"/"+l:l}function sA(t,r){let l="",u=0,o=-1,s=0,c=-1,d,p;for(;++c<=t.length;){if(c<t.length)d=t.codePointAt(c);else{if(d===47)break;d=47}if(d===47){if(!(o===c-1||s===1))if(o!==c-1&&s===2){if(l.length<2||u!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(p=l.lastIndexOf("/"),p!==l.length-1){p<0?(l="",u=0):(l=l.slice(0,p),u=l.length-1-l.lastIndexOf("/")),o=c,s=0;continue}}else if(l.length>0){l="",u=0,o=c,s=0;continue}}r&&(l=l.length>0?l+"/..":"..",u=2)}else l.length>0?l+="/"+t.slice(o+1,c):l=t.slice(o+1,c),u=c-o-1;o=c,s=0}else d===46&&s>-1?s++:s=-1}return l}function Xi(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const cA={cwd:fA};function fA(){return"/"}function jf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function hA(t){if(typeof t=="string")t=new URL(t);else if(!jf(t)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(t.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return dA(t)}function dA(t){if(t.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=t.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const u=r.codePointAt(l+2);if(u===70||u===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(r)}const cf=["history","path","basename","stem","extname","dirname"];class Vv{constructor(r){let l;r?jf(r)?l={path:r}:typeof r=="string"||mA(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":cA.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<cf.length;){const s=cf[u];s in l&&l[s]!==void 0&&l[s]!==null&&(this[s]=s==="history"?[...l[s]]:l[s])}let o;for(o in l)cf.includes(o)||(this[o]=l[o])}get basename(){return typeof this.path=="string"?Zn.basename(this.path):void 0}set basename(r){hf(r,"basename"),ff(r,"basename"),this.path=Zn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?Zn.dirname(this.path):void 0}set dirname(r){dy(this.basename,"dirname"),this.path=Zn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?Zn.extname(this.path):void 0}set extname(r){if(ff(r,"extname"),dy(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Zn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){jf(r)&&(r=hA(r)),hf(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?Zn.basename(this.path,this.extname):void 0}set stem(r){hf(r,"stem"),ff(r,"stem"),this.path=Zn.join(this.dirname||"",r+(this.extname||""))}fail(r,l,u){const o=this.message(r,l,u);throw o.fatal=!0,o}info(r,l,u){const o=this.message(r,l,u);return o.fatal=void 0,o}message(r,l,u){const o=new Xt(r,l,u);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function ff(t,r){if(t&&t.includes(Zn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+Zn.sep+"`")}function hf(t,r){if(!t)throw new Error("`"+r+"` cannot be empty")}function dy(t,r){if(!t)throw new Error("Setting `"+r+"` requires `path` to be set too")}function mA(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const pA=(function(t){const u=this.constructor.prototype,o=u[t],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,u),s}),gA={}.hasOwnProperty;class sh extends pA{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nA()}copy(){const r=new sh;let l=-1;for(;++l<this.attachers.length;){const u=this.attachers[l];r.use(...u)}return r.data(sf(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(pf("data",this.frozen),this.namespace[r]=l,this):gA.call(this.namespace,r)&&this.namespace[r]||void 0:r?(pf("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const o=l.call(r,...u);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=ho(r),u=this.parser||this.Parser;return df("parse",u),u(String(l),l)}process(r,l){const u=this;return this.freeze(),df("process",this.parser||this.Parser),mf("process",this.compiler||this.Compiler),l?o(void 0,l):new Promise(o);function o(s,c){const d=ho(r),p=u.parse(d);u.run(p,d,function(y,g,x){if(y||!g||!x)return m(y);const b=g,k=u.stringify(b,x);bA(k)?x.value=k:x.result=k,m(y,x)});function m(y,g){y||!g?c(y):s?s(g):l(void 0,g)}}}processSync(r){let l=!1,u;return this.freeze(),df("processSync",this.parser||this.Parser),mf("processSync",this.compiler||this.Compiler),this.process(r,o),py("processSync","process",l),u;function o(s,c){l=!0,fy(s),u=c}}run(r,l,u){my(r),this.freeze();const o=this.transformers;return!u&&typeof l=="function"&&(u=l,l=void 0),u?s(void 0,u):new Promise(s);function s(c,d){const p=ho(l);o.run(r,p,m);function m(y,g,x){const b=g||r;y?d(y):c?c(b):u(void 0,b,x)}}}runSync(r,l){let u=!1,o;return this.run(r,l,s),py("runSync","run",u),o;function s(c,d){fy(c),o=d,u=!0}}stringify(r,l){this.freeze();const u=ho(l),o=this.compiler||this.Compiler;return mf("stringify",o),my(r),o(r,u)}use(r,...l){const u=this.attachers,o=this.namespace;if(pf("use",this.frozen),r!=null)if(typeof r=="function")p(r,l);else if(typeof r=="object")Array.isArray(r)?d(r):c(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function s(m){if(typeof m=="function")p(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...g]=m;p(y,g)}else c(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function c(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(m.plugins),m.settings&&(o.settings=sf(!0,o.settings,m.settings))}function d(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const g=m[y];s(g)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function p(m,y){let g=-1,x=-1;for(;++g<u.length;)if(u[g][0]===m){x=g;break}if(x===-1)u.push([m,...y]);else if(y.length>0){let[b,...k]=y;const O=u[x][1];Of(O)&&Of(b)&&(b=sf(!0,O,b)),u[x]=[m,b,...k]}}}}const yA=new sh().freeze();function df(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function mf(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function pf(t,r){if(r)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function my(t){if(!Of(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function py(t,r,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+r+"` instead")}function ho(t){return vA(t)?t:new Vv(t)}function vA(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function bA(t){return typeof t=="string"||xA(t)}function xA(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const wA="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",gy=[],yy={allowDangerousHtml:!0},SA=/^(https?|ircs?|mailto|xmpp)$/i,EA=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function TA(t){const r=kA(t),l=AA(t);return CA(r.runSync(r.parse(l),l),t)}function kA(t){const r=t.rehypePlugins||gy,l=t.remarkPlugins||gy,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...yy}:yy;return yA().use(lk).use(l).use(Wk,u).use(r)}function AA(t){const r=t.children||"",l=new Vv;return typeof r=="string"&&(l.value=r),l}function CA(t,r){const l=r.allowedElements,u=r.allowElement,o=r.components,s=r.disallowedElements,c=r.skipHtml,d=r.unwrapDisallowed,p=r.urlTransform||RA;for(const y of EA)Object.hasOwn(r,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+wA+y.id,void 0);return oh(t,m),qS(t,{Fragment:W.Fragment,components:o,ignoreInvalidStyle:!0,jsx:W.jsx,jsxs:W.jsxs,passKeys:!0,passNode:!0});function m(y,g,x){if(y.type==="raw"&&x&&typeof g=="number")return c?x.children.splice(g,1):x.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let b;for(b in rf)if(Object.hasOwn(rf,b)&&Object.hasOwn(y.properties,b)){const k=y.properties[b],O=rf[b];(O===null||O.includes(y.tagName))&&(y.properties[b]=p(String(k||""),b,y))}}if(y.type==="element"){let b=l?!l.includes(y.tagName):s?s.includes(y.tagName):!1;if(!b&&u&&typeof g=="number"&&(b=!u(y,g,x)),b&&x&&typeof g=="number")return d&&y.children?x.children.splice(g,1,...y.children):x.children.splice(g,1),g}}}function RA(t){const r=t.indexOf(":"),l=t.indexOf("?"),u=t.indexOf("#"),o=t.indexOf("/");return r===-1||o!==-1&&r>o||l!==-1&&r>l||u!==-1&&r>u||SA.test(t.slice(0,r))?t:""}function vy(t,r){const l=String(t);if(typeof r!="string")throw new TypeError("Expected character");let u=0,o=l.indexOf(r);for(;o!==-1;)u++,o=l.indexOf(r,o+r.length);return u}function DA(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function _A(t,r,l){const o=No((l||{}).ignore||[]),s=zA(r);let c=-1;for(;++c<s.length;)Gv(t,"text",d);function d(m,y){let g=-1,x;for(;++g<y.length;){const b=y[g],k=x?x.children:void 0;if(o(b,k?k.indexOf(b):void 0,x))return;x=b}if(x)return p(m,y)}function p(m,y){const g=y[y.length-1],x=s[c][0],b=s[c][1];let k=0;const j=g.children.indexOf(m);let R=!1,E=[];x.lastIndex=0;let T=x.exec(m.value);for(;T;){const q=T.index,I={index:T.index,input:T.input,stack:[...y,m]};let z=b(...T,I);if(typeof z=="string"&&(z=z.length>0?{type:"text",value:z}:void 0),z===!1?x.lastIndex=q+1:(k!==q&&E.push({type:"text",value:m.value.slice(k,q)}),Array.isArray(z)?E.push(...z):z&&E.push(z),k=q+T[0].length,R=!0),!x.global)break;T=x.exec(m.value)}return R?(k<m.value.length&&E.push({type:"text",value:m.value.slice(k)}),g.children.splice(j,1,...E)):E=[m],j+E.length}}function zA(t){const r=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!t[0]||Array.isArray(t[0])?t:[t];let u=-1;for(;++u<l.length;){const o=l[u];r.push([MA(o[0]),OA(o[1])])}return r}function MA(t){return typeof t=="string"?new RegExp(DA(t),"g"):t}function OA(t){return typeof t=="function"?t:function(){return t}}const gf="phrasing",yf=["autolink","link","image","label"];function jA(){return{transforms:[YA],enter:{literalAutolink:LA,literalAutolinkEmail:vf,literalAutolinkHttp:vf,literalAutolinkWww:vf},exit:{literalAutolink:FA,literalAutolinkEmail:BA,literalAutolinkHttp:UA,literalAutolinkWww:HA}}}function NA(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:gf,notInConstruct:yf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:gf,notInConstruct:yf},{character:":",before:"[ps]",after:"\\/",inConstruct:gf,notInConstruct:yf}]}}function LA(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function vf(t){this.config.enter.autolinkProtocol.call(this,t)}function UA(t){this.config.exit.autolinkProtocol.call(this,t)}function HA(t){this.config.exit.data.call(this,t);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(t)}function BA(t){this.config.exit.autolinkEmail.call(this,t)}function FA(t){this.exit(t)}function YA(t){_A(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,qA],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),IA]],{ignore:["link","linkReference"]})}function qA(t,r,l,u,o){let s="";if(!Xv(o)||(/^w/i.test(r)&&(l=r+l,r="",s="http://"),!GA(l)))return!1;const c=VA(l+u);if(!c[0])return!1;const d={type:"link",title:null,url:s+r+c[0],children:[{type:"text",value:r+c[0]}]};return c[1]?[d,{type:"text",value:c[1]}]:d}function IA(t,r,l,u){return!Xv(u,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+l,children:[{type:"text",value:r+"@"+l}]}}function GA(t){const r=t.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function VA(t){const r=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!r)return[t,void 0];t=t.slice(0,r.index);let l=r[0],u=l.indexOf(")");const o=vy(t,"(");let s=vy(t,")");for(;u!==-1&&o>s;)t+=l.slice(0,u+1),l=l.slice(u+1),u=l.indexOf(")"),s++;return[t,l]}function Xv(t,r){const l=t.input.charCodeAt(t.index-1);return(t.index===0||Mr(l)||Mo(l))&&(!r||l!==47)}Qv.peek=eC;function XA(){this.buffer()}function QA(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function PA(){this.buffer()}function ZA(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function JA(t){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=In(this.sliceSerialize(t)).toLowerCase(),l.label=r}function $A(t){this.exit(t)}function KA(t){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=In(this.sliceSerialize(t)).toLowerCase(),l.label=r}function WA(t){this.exit(t)}function eC(){return"["}function Qv(t,r,l,u){const o=l.createTracker(u);let s=o.move("[^");const c=l.enter("footnoteReference"),d=l.enter("reference");return s+=o.move(l.safe(l.associationId(t),{after:"]",before:s})),d(),c(),s+=o.move("]"),s}function tC(){return{enter:{gfmFootnoteCallString:XA,gfmFootnoteCall:QA,gfmFootnoteDefinitionLabelString:PA,gfmFootnoteDefinition:ZA},exit:{gfmFootnoteCallString:JA,gfmFootnoteCall:$A,gfmFootnoteDefinitionLabelString:KA,gfmFootnoteDefinition:WA}}}function nC(t){let r=!1;return t&&t.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:l,footnoteReference:Qv},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(u,o,s,c){const d=s.createTracker(c);let p=d.move("[^");const m=s.enter("footnoteDefinition"),y=s.enter("label");return p+=d.move(s.safe(s.associationId(u),{before:p,after:"]"})),y(),p+=d.move("]:"),u.children&&u.children.length>0&&(d.shift(4),p+=d.move((r?`
`:" ")+s.indentLines(s.containerFlow(u,d.current()),r?Pv:aC))),m(),p}}function aC(t,r,l){return r===0?t:Pv(t,r,l)}function Pv(t,r,l){return(l?"":"    ")+t}const rC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Zv.peek=sC;function lC(){return{canContainEols:["delete"],enter:{strikethrough:uC},exit:{strikethrough:oC}}}function iC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:rC}],handlers:{delete:Zv}}}function uC(t){this.enter({type:"delete",children:[]},t)}function oC(t){this.exit(t)}function Zv(t,r,l,u){const o=l.createTracker(u),s=l.enter("strikethrough");let c=o.move("~~");return c+=l.containerPhrasing(t,{...o.current(),before:c,after:"~"}),c+=o.move("~~"),s(),c}function sC(){return"~"}function cC(t){return t.length}function fC(t,r){const l=r||{},u=(l.align||[]).concat(),o=l.stringLength||cC,s=[],c=[],d=[],p=[];let m=0,y=-1;for(;++y<t.length;){const O=[],j=[];let R=-1;for(t[y].length>m&&(m=t[y].length);++R<t[y].length;){const E=hC(t[y][R]);if(l.alignDelimiters!==!1){const T=o(E);j[R]=T,(p[R]===void 0||T>p[R])&&(p[R]=T)}O.push(E)}c[y]=O,d[y]=j}let g=-1;if(typeof u=="object"&&"length"in u)for(;++g<m;)s[g]=by(u[g]);else{const O=by(u);for(;++g<m;)s[g]=O}g=-1;const x=[],b=[];for(;++g<m;){const O=s[g];let j="",R="";O===99?(j=":",R=":"):O===108?j=":":O===114&&(R=":");let E=l.alignDelimiters===!1?1:Math.max(1,p[g]-j.length-R.length);const T=j+"-".repeat(E)+R;l.alignDelimiters!==!1&&(E=j.length+E+R.length,E>p[g]&&(p[g]=E),b[g]=E),x[g]=T}c.splice(1,0,x),d.splice(1,0,b),y=-1;const k=[];for(;++y<c.length;){const O=c[y],j=d[y];g=-1;const R=[];for(;++g<m;){const E=O[g]||"";let T="",q="";if(l.alignDelimiters!==!1){const I=p[g]-(j[g]||0),z=s[g];z===114?T=" ".repeat(I):z===99?I%2?(T=" ".repeat(I/2+.5),q=" ".repeat(I/2-.5)):(T=" ".repeat(I/2),q=T):q=" ".repeat(I)}l.delimiterStart!==!1&&!g&&R.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&E==="")&&(l.delimiterStart!==!1||g)&&R.push(" "),l.alignDelimiters!==!1&&R.push(T),R.push(E),l.alignDelimiters!==!1&&R.push(q),l.padding!==!1&&R.push(" "),(l.delimiterEnd!==!1||g!==m-1)&&R.push("|")}k.push(l.delimiterEnd===!1?R.join("").replace(/ +$/,""):R.join(""))}return k.join(`
`)}function hC(t){return t==null?"":String(t)}function by(t){const r=typeof t=="string"?t.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function dC(t,r,l,u){const o=l.enter("blockquote"),s=l.createTracker(u);s.move("> "),s.shift(2);const c=l.indentLines(l.containerFlow(t,s.current()),mC);return o(),c}function mC(t,r,l){return">"+(l?"":" ")+t}function pC(t,r){return xy(t,r.inConstruct,!0)&&!xy(t,r.notInConstruct,!1)}function xy(t,r,l){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return l;let u=-1;for(;++u<r.length;)if(t.includes(r[u]))return!0;return!1}function wy(t,r,l,u){let o=-1;for(;++o<l.unsafe.length;)if(l.unsafe[o].character===`
`&&pC(l.stack,l.unsafe[o]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function gC(t,r){const l=String(t);let u=l.indexOf(r),o=u,s=0,c=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===o?++s>c&&(c=s):s=1,o=u+r.length,u=l.indexOf(r,o);return c}function yC(t,r){return!!(r.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function vC(t){const r=t.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function bC(t,r,l,u){const o=vC(l),s=t.value||"",c=o==="`"?"GraveAccent":"Tilde";if(yC(t,l)){const g=l.enter("codeIndented"),x=l.indentLines(s,xC);return g(),x}const d=l.createTracker(u),p=o.repeat(Math.max(gC(s,o)+1,3)),m=l.enter("codeFenced");let y=d.move(p);if(t.lang){const g=l.enter(`codeFencedLang${c}`);y+=d.move(l.safe(t.lang,{before:y,after:" ",encode:["`"],...d.current()})),g()}if(t.lang&&t.meta){const g=l.enter(`codeFencedMeta${c}`);y+=d.move(" "),y+=d.move(l.safe(t.meta,{before:y,after:`
`,encode:["`"],...d.current()})),g()}return y+=d.move(`
`),s&&(y+=d.move(s+`
`)),y+=d.move(p),m(),y}function xC(t,r,l){return(l?"":"    ")+t}function ch(t){const r=t.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function wC(t,r,l,u){const o=ch(l),s=o==='"'?"Quote":"Apostrophe",c=l.enter("definition");let d=l.enter("label");const p=l.createTracker(u);let m=p.move("[");return m+=p.move(l.safe(l.associationId(t),{before:m,after:"]",...p.current()})),m+=p.move("]: "),d(),!t.url||/[\0- \u007F]/.test(t.url)?(d=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(t.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(d=l.enter("destinationRaw"),m+=p.move(l.safe(t.url,{before:m,after:t.title?" ":`
`,...p.current()}))),d(),t.title&&(d=l.enter(`title${s}`),m+=p.move(" "+o),m+=p.move(l.safe(t.title,{before:m,after:o,...p.current()})),m+=p.move(o),d()),c(),m}function SC(t){const r=t.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Ui(t){return"&#x"+t.toString(16).toUpperCase()+";"}function To(t,r,l){const u=Tl(t),o=Tl(r);return u===void 0?o===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Jv.peek=EC;function Jv(t,r,l,u){const o=SC(l),s=l.enter("emphasis"),c=l.createTracker(u),d=c.move(o);let p=c.move(l.containerPhrasing(t,{after:o,before:d,...c.current()}));const m=p.charCodeAt(0),y=To(u.before.charCodeAt(u.before.length-1),m,o);y.inside&&(p=Ui(m)+p.slice(1));const g=p.charCodeAt(p.length-1),x=To(u.after.charCodeAt(0),g,o);x.inside&&(p=p.slice(0,-1)+Ui(g));const b=c.move(o);return s(),l.attentionEncodeSurroundingInfo={after:x.outside,before:y.outside},d+p+b}function EC(t,r,l){return l.options.emphasis||"*"}function TC(t,r){let l=!1;return oh(t,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return l=!0,zf}),!!((!t.depth||t.depth<3)&&th(t)&&(r.options.setext||l))}function kC(t,r,l,u){const o=Math.max(Math.min(6,t.depth||1),1),s=l.createTracker(u);if(TC(t,l)){const y=l.enter("headingSetext"),g=l.enter("phrasing"),x=l.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return g(),y(),x+`
`+(o===1?"=":"-").repeat(x.length-(Math.max(x.lastIndexOf("\r"),x.lastIndexOf(`
`))+1))}const c="#".repeat(o),d=l.enter("headingAtx"),p=l.enter("phrasing");s.move(c+" ");let m=l.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(m)&&(m=Ui(m.charCodeAt(0))+m.slice(1)),m=m?c+" "+m:c,l.options.closeAtx&&(m+=" "+c),p(),d(),m}$v.peek=AC;function $v(t){return t.value||""}function AC(){return"<"}Kv.peek=CC;function Kv(t,r,l,u){const o=ch(l),s=o==='"'?"Quote":"Apostrophe",c=l.enter("image");let d=l.enter("label");const p=l.createTracker(u);let m=p.move("![");return m+=p.move(l.safe(t.alt,{before:m,after:"]",...p.current()})),m+=p.move("]("),d(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(d=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(t.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(d=l.enter("destinationRaw"),m+=p.move(l.safe(t.url,{before:m,after:t.title?" ":")",...p.current()}))),d(),t.title&&(d=l.enter(`title${s}`),m+=p.move(" "+o),m+=p.move(l.safe(t.title,{before:m,after:o,...p.current()})),m+=p.move(o),d()),m+=p.move(")"),c(),m}function CC(){return"!"}Wv.peek=RC;function Wv(t,r,l,u){const o=t.referenceType,s=l.enter("imageReference");let c=l.enter("label");const d=l.createTracker(u);let p=d.move("![");const m=l.safe(t.alt,{before:p,after:"]",...d.current()});p+=d.move(m+"]["),c();const y=l.stack;l.stack=[],c=l.enter("reference");const g=l.safe(l.associationId(t),{before:p,after:"]",...d.current()});return c(),l.stack=y,s(),o==="full"||!m||m!==g?p+=d.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function RC(){return"!"}eb.peek=DC;function eb(t,r,l){let u=t.value||"",o="`",s=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(u);)o+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++s<l.unsafe.length;){const c=l.unsafe[s],d=l.compilePattern(c);let p;if(c.atBreak)for(;p=d.exec(u);){let m=p.index;u.charCodeAt(m)===10&&u.charCodeAt(m-1)===13&&m--,u=u.slice(0,m)+" "+u.slice(p.index+1)}}return o+u+o}function DC(){return"`"}function tb(t,r){const l=th(t);return!!(!r.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(l===t.url||"mailto:"+l===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}nb.peek=_C;function nb(t,r,l,u){const o=ch(l),s=o==='"'?"Quote":"Apostrophe",c=l.createTracker(u);let d,p;if(tb(t,l)){const y=l.stack;l.stack=[],d=l.enter("autolink");let g=c.move("<");return g+=c.move(l.containerPhrasing(t,{before:g,after:">",...c.current()})),g+=c.move(">"),d(),l.stack=y,g}d=l.enter("link"),p=l.enter("label");let m=c.move("[");return m+=c.move(l.containerPhrasing(t,{before:m,after:"](",...c.current()})),m+=c.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=l.enter("destinationLiteral"),m+=c.move("<"),m+=c.move(l.safe(t.url,{before:m,after:">",...c.current()})),m+=c.move(">")):(p=l.enter("destinationRaw"),m+=c.move(l.safe(t.url,{before:m,after:t.title?" ":")",...c.current()}))),p(),t.title&&(p=l.enter(`title${s}`),m+=c.move(" "+o),m+=c.move(l.safe(t.title,{before:m,after:o,...c.current()})),m+=c.move(o),p()),m+=c.move(")"),d(),m}function _C(t,r,l){return tb(t,l)?"<":"["}ab.peek=zC;function ab(t,r,l,u){const o=t.referenceType,s=l.enter("linkReference");let c=l.enter("label");const d=l.createTracker(u);let p=d.move("[");const m=l.containerPhrasing(t,{before:p,after:"]",...d.current()});p+=d.move(m+"]["),c();const y=l.stack;l.stack=[],c=l.enter("reference");const g=l.safe(l.associationId(t),{before:p,after:"]",...d.current()});return c(),l.stack=y,s(),o==="full"||!m||m!==g?p+=d.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function zC(){return"["}function fh(t){const r=t.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function MC(t){const r=fh(t),l=t.options.bulletOther;if(!l)return r==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+l+"`) to be different");return l}function OC(t){const r=t.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function rb(t){const r=t.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function jC(t,r,l,u){const o=l.enter("list"),s=l.bulletCurrent;let c=t.ordered?OC(l):fh(l);const d=t.ordered?c==="."?")":".":MC(l);let p=r&&l.bulletLastUsed?c===l.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(p=!0),rb(l)===c&&y){let g=-1;for(;++g<t.children.length;){const x=t.children[g];if(x&&x.type==="listItem"&&x.children&&x.children[0]&&x.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(c=d),l.bulletCurrent=c;const m=l.containerFlow(t,u);return l.bulletLastUsed=c,l.bulletCurrent=s,o(),m}function NC(t){const r=t.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function LC(t,r,l,u){const o=NC(l);let s=l.bulletCurrent||fh(l);r&&r.type==="list"&&r.ordered&&(s=(typeof r.start=="number"&&r.start>-1?r.start:1)+(l.options.incrementListMarker===!1?0:r.children.indexOf(t))+s);let c=s.length+1;(o==="tab"||o==="mixed"&&(r&&r.type==="list"&&r.spread||t.spread))&&(c=Math.ceil(c/4)*4);const d=l.createTracker(u);d.move(s+" ".repeat(c-s.length)),d.shift(c);const p=l.enter("listItem"),m=l.indentLines(l.containerFlow(t,d.current()),y);return p(),m;function y(g,x,b){return x?(b?"":" ".repeat(c))+g:(b?s:s+" ".repeat(c-s.length))+g}}function UC(t,r,l,u){const o=l.enter("paragraph"),s=l.enter("phrasing"),c=l.containerPhrasing(t,u);return s(),o(),c}const HC=No(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function BC(t,r,l,u){return(t.children.some(function(c){return HC(c)})?l.containerPhrasing:l.containerFlow).call(l,t,u)}function FC(t){const r=t.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}lb.peek=YC;function lb(t,r,l,u){const o=FC(l),s=l.enter("strong"),c=l.createTracker(u),d=c.move(o+o);let p=c.move(l.containerPhrasing(t,{after:o,before:d,...c.current()}));const m=p.charCodeAt(0),y=To(u.before.charCodeAt(u.before.length-1),m,o);y.inside&&(p=Ui(m)+p.slice(1));const g=p.charCodeAt(p.length-1),x=To(u.after.charCodeAt(0),g,o);x.inside&&(p=p.slice(0,-1)+Ui(g));const b=c.move(o+o);return s(),l.attentionEncodeSurroundingInfo={after:x.outside,before:y.outside},d+p+b}function YC(t,r,l){return l.options.strong||"*"}function qC(t,r,l,u){return l.safe(t.value,u)}function IC(t){const r=t.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function GC(t,r,l){const u=(rb(l)+(l.options.ruleSpaces?" ":"")).repeat(IC(l));return l.options.ruleSpaces?u.slice(0,-1):u}const ib={blockquote:dC,break:wy,code:bC,definition:wC,emphasis:Jv,hardBreak:wy,heading:kC,html:$v,image:Kv,imageReference:Wv,inlineCode:eb,link:nb,linkReference:ab,list:jC,listItem:LC,paragraph:UC,root:BC,strong:lb,text:qC,thematicBreak:GC};function VC(){return{enter:{table:XC,tableData:Sy,tableHeader:Sy,tableRow:PC},exit:{codeText:ZC,table:QC,tableData:bf,tableHeader:bf,tableRow:bf}}}function XC(t){const r=t._align;this.enter({type:"table",align:r.map(function(l){return l==="none"?null:l}),children:[]},t),this.data.inTable=!0}function QC(t){this.exit(t),this.data.inTable=void 0}function PC(t){this.enter({type:"tableRow",children:[]},t)}function bf(t){this.exit(t)}function Sy(t){this.enter({type:"tableCell",children:[]},t)}function ZC(t){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,JC));const l=this.stack[this.stack.length-1];l.type,l.value=r,this.exit(t)}function JC(t,r){return r==="|"?r:t}function $C(t){const r=t||{},l=r.tableCellPadding,u=r.tablePipeAlign,o=r.stringLength,s=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:x,table:c,tableCell:p,tableRow:d}};function c(b,k,O,j){return m(y(b,O,j),b.align)}function d(b,k,O,j){const R=g(b,O,j),E=m([R]);return E.slice(0,E.indexOf(`
`))}function p(b,k,O,j){const R=O.enter("tableCell"),E=O.enter("phrasing"),T=O.containerPhrasing(b,{...j,before:s,after:s});return E(),R(),T}function m(b,k){return fC(b,{align:k,alignDelimiters:u,padding:l,stringLength:o})}function y(b,k,O){const j=b.children;let R=-1;const E=[],T=k.enter("table");for(;++R<j.length;)E[R]=g(j[R],k,O);return T(),E}function g(b,k,O){const j=b.children;let R=-1;const E=[],T=k.enter("tableRow");for(;++R<j.length;)E[R]=p(j[R],b,k,O);return T(),E}function x(b,k,O){let j=ib.inlineCode(b,k,O);return O.stack.includes("tableCell")&&(j=j.replace(/\|/g,"\\$&")),j}}function KC(){return{exit:{taskListCheckValueChecked:Ey,taskListCheckValueUnchecked:Ey,paragraph:e2}}}function WC(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:t2}}}function Ey(t){const r=this.stack[this.stack.length-2];r.type,r.checked=t.type==="taskListCheckValueChecked"}function e2(t){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const u=l.children[0];if(u&&u.type==="text"){const o=r.children;let s=-1,c;for(;++s<o.length;){const d=o[s];if(d.type==="paragraph"){c=d;break}}c===l&&(u.value=u.value.slice(1),u.value.length===0?l.children.shift():l.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,l.position.start=Object.assign({},u.position.start)))}}this.exit(t)}function t2(t,r,l,u){const o=t.children[0],s=typeof t.checked=="boolean"&&o&&o.type==="paragraph",c="["+(t.checked?"x":" ")+"] ",d=l.createTracker(u);s&&d.move(c);let p=ib.listItem(t,r,l,{...u,...d.current()});return s&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),p;function m(y){return y+c}}function n2(){return[jA(),tC(),lC(),VC(),KC()]}function a2(t){return{extensions:[NA(),nC(t),iC(),$C(t),WC()]}}const r2={tokenize:c2,partial:!0},ub={tokenize:f2,partial:!0},ob={tokenize:h2,partial:!0},sb={tokenize:d2,partial:!0},l2={tokenize:m2,partial:!0},cb={name:"wwwAutolink",tokenize:o2,previous:hb},fb={name:"protocolAutolink",tokenize:s2,previous:db},Ta={name:"emailAutolink",tokenize:u2,previous:mb},Wn={};function i2(){return{text:Wn}}let _r=48;for(;_r<123;)Wn[_r]=Ta,_r++,_r===58?_r=65:_r===91&&(_r=97);Wn[43]=Ta;Wn[45]=Ta;Wn[46]=Ta;Wn[95]=Ta;Wn[72]=[Ta,fb];Wn[104]=[Ta,fb];Wn[87]=[Ta,cb];Wn[119]=[Ta,cb];function u2(t,r,l){const u=this;let o,s;return c;function c(g){return!Nf(g)||!mb.call(u,u.previous)||hh(u.events)?l(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),d(g))}function d(g){return Nf(g)?(t.consume(g),d):g===64?(t.consume(g),p):l(g)}function p(g){return g===46?t.check(l2,y,m)(g):g===45||g===95||Vt(g)?(s=!0,t.consume(g),p):y(g)}function m(g){return t.consume(g),o=!0,p}function y(g){return s&&o&&Jt(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),r(g)):l(g)}}function o2(t,r,l){const u=this;return o;function o(c){return c!==87&&c!==119||!hb.call(u,u.previous)||hh(u.events)?l(c):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(r2,t.attempt(ub,t.attempt(ob,s),l),l)(c))}function s(c){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),r(c)}}function s2(t,r,l){const u=this;let o="",s=!1;return c;function c(g){return(g===72||g===104)&&db.call(u,u.previous)&&!hh(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),o+=String.fromCodePoint(g),t.consume(g),d):l(g)}function d(g){if(Jt(g)&&o.length<5)return o+=String.fromCodePoint(g),t.consume(g),d;if(g===58){const x=o.toLowerCase();if(x==="http"||x==="https")return t.consume(g),p}return l(g)}function p(g){return g===47?(t.consume(g),s?m:(s=!0,p)):l(g)}function m(g){return g===null||wo(g)||st(g)||Mr(g)||Mo(g)?l(g):t.attempt(ub,t.attempt(ob,y),l)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),r(g)}}function c2(t,r,l){let u=0;return o;function o(c){return(c===87||c===119)&&u<3?(u++,t.consume(c),o):c===46&&u===3?(t.consume(c),s):l(c)}function s(c){return c===null?l(c):r(c)}}function f2(t,r,l){let u,o,s;return c;function c(m){return m===46||m===95?t.check(sb,p,d)(m):m===null||st(m)||Mr(m)||m!==45&&Mo(m)?p(m):(s=!0,t.consume(m),c)}function d(m){return m===95?u=!0:(o=u,u=void 0),t.consume(m),c}function p(m){return o||u||!s?l(m):r(m)}}function h2(t,r){let l=0,u=0;return o;function o(c){return c===40?(l++,t.consume(c),o):c===41&&u<l?s(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?t.check(sb,r,s)(c):c===null||st(c)||Mr(c)?r(c):(t.consume(c),o)}function s(c){return c===41&&u++,t.consume(c),o}}function d2(t,r,l){return u;function u(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(t.consume(d),u):d===38?(t.consume(d),s):d===93?(t.consume(d),o):d===60||d===null||st(d)||Mr(d)?r(d):l(d)}function o(d){return d===null||d===40||d===91||st(d)||Mr(d)?r(d):u(d)}function s(d){return Jt(d)?c(d):l(d)}function c(d){return d===59?(t.consume(d),u):Jt(d)?(t.consume(d),c):l(d)}}function m2(t,r,l){return u;function u(s){return t.consume(s),o}function o(s){return Vt(s)?l(s):r(s)}}function hb(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||st(t)}function db(t){return!Jt(t)}function mb(t){return!(t===47||Nf(t))}function Nf(t){return t===43||t===45||t===46||t===95||Vt(t)}function hh(t){let r=t.length,l=!1;for(;r--;){const u=t[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const p2={tokenize:E2,partial:!0};function g2(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:x2,continuation:{tokenize:w2},exit:S2}},text:{91:{name:"gfmFootnoteCall",tokenize:b2},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:y2,resolveTo:v2}}}}function y2(t,r,l){const u=this;let o=u.events.length;const s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c;for(;o--;){const p=u.events[o][1];if(p.type==="labelImage"){c=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return d;function d(p){if(!c||!c._balanced)return l(p);const m=In(u.sliceSerialize({start:c.end,end:u.now()}));return m.codePointAt(0)!==94||!s.includes(m.slice(1))?l(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),r(p))}}function v2(t,r){let l=t.length;for(;l--;)if(t[l][1].type==="labelImage"&&t[l][0]==="enter"){t[l][1];break}t[l+1][1].type="data",t[l+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},t[l+3][1].start),end:Object.assign({},t[t.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},t[l+3][1].end),end:Object.assign({},t[l+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},t[t.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},d=[t[l+1],t[l+2],["enter",u,r],t[l+3],t[l+4],["enter",o,r],["exit",o,r],["enter",s,r],["enter",c,r],["exit",c,r],["exit",s,r],t[t.length-2],t[t.length-1],["exit",u,r]];return t.splice(l,t.length-l+1,...d),t}function b2(t,r,l){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s=0,c;return d;function d(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?l(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(g){if(s>999||g===93&&!c||g===null||g===91||st(g))return l(g);if(g===93){t.exit("chunkString");const x=t.exit("gfmFootnoteCallString");return o.includes(In(u.sliceSerialize(x)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),r):l(g)}return st(g)||(c=!0),s++,t.consume(g),g===92?y:m}function y(g){return g===91||g===92||g===93?(t.consume(g),s++,m):m(g)}}function x2(t,r,l){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s,c=0,d;return p;function p(k){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(k),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(k){return k===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(k),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):l(k)}function y(k){if(c>999||k===93&&!d||k===null||k===91||st(k))return l(k);if(k===93){t.exit("chunkString");const O=t.exit("gfmFootnoteDefinitionLabelString");return s=In(u.sliceSerialize(O)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(k),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),x}return st(k)||(d=!0),c++,t.consume(k),k===92?g:y}function g(k){return k===91||k===92||k===93?(t.consume(k),c++,y):y(k)}function x(k){return k===58?(t.enter("definitionMarker"),t.consume(k),t.exit("definitionMarker"),o.includes(s)||o.push(s),Ze(t,b,"gfmFootnoteDefinitionWhitespace")):l(k)}function b(k){return r(k)}}function w2(t,r,l){return t.check(Vi,r,t.attempt(p2,r,l))}function S2(t){t.exit("gfmFootnoteDefinition")}function E2(t,r,l){const u=this;return Ze(t,o,"gfmFootnoteDefinitionIndent",5);function o(s){const c=u.events[u.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?r(s):l(s)}}function T2(t){let l=(t||{}).singleTilde;const u={name:"strikethrough",tokenize:s,resolveAll:o};return l==null&&(l=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function o(c,d){let p=-1;for(;++p<c.length;)if(c[p][0]==="enter"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._close){let m=p;for(;m--;)if(c[m][0]==="exit"&&c[m][1].type==="strikethroughSequenceTemporary"&&c[m][1]._open&&c[p][1].end.offset-c[p][1].start.offset===c[m][1].end.offset-c[m][1].start.offset){c[p][1].type="strikethroughSequence",c[m][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[m][1].start),end:Object.assign({},c[p][1].end)},g={type:"strikethroughText",start:Object.assign({},c[m][1].end),end:Object.assign({},c[p][1].start)},x=[["enter",y,d],["enter",c[m][1],d],["exit",c[m][1],d],["enter",g,d]],b=d.parser.constructs.insideSpan.null;b&&xn(x,x.length,0,Oo(b,c.slice(m+1,p),d)),xn(x,x.length,0,[["exit",g,d],["enter",c[p][1],d],["exit",c[p][1],d],["exit",y,d]]),xn(c,m-1,p-m+3,x),p=m+x.length-2;break}}for(p=-1;++p<c.length;)c[p][1].type==="strikethroughSequenceTemporary"&&(c[p][1].type="data");return c}function s(c,d,p){const m=this.previous,y=this.events;let g=0;return x;function x(k){return m===126&&y[y.length-1][1].type!=="characterEscape"?p(k):(c.enter("strikethroughSequenceTemporary"),b(k))}function b(k){const O=Tl(m);if(k===126)return g>1?p(k):(c.consume(k),g++,b);if(g<2&&!l)return p(k);const j=c.exit("strikethroughSequenceTemporary"),R=Tl(k);return j._open=!R||R===2&&!!O,j._close=!O||O===2&&!!R,d(k)}}}class k2{constructor(){this.map=[]}add(r,l,u){A2(this,r,l,u)}consume(r){if(this.map.sort(function(s,c){return s[0]-c[0]}),this.map.length===0)return;let l=this.map.length;const u=[];for(;l>0;)l-=1,u.push(r.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),r.length=this.map[l][0];u.push(r.slice()),r.length=0;let o=u.pop();for(;o;){for(const s of o)r.push(s);o=u.pop()}this.map.length=0}}function A2(t,r,l,u){let o=0;if(!(l===0&&u.length===0)){for(;o<t.map.length;){if(t.map[o][0]===r){t.map[o][1]+=l,t.map[o][2].push(...u);return}o+=1}t.map.push([r,l,u])}}function C2(t,r){let l=!1;const u=[];for(;r<t.length;){const o=t[r];if(l){if(o[0]==="enter")o[1].type==="tableContent"&&u.push(t[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(t[r-1][1].type==="tableDelimiterMarker"){const s=u.length-1;u[s]=u[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(l=!0);r+=1}return u}function R2(){return{flow:{null:{name:"table",tokenize:D2,resolveAll:_2}}}}function D2(t,r,l){const u=this;let o=0,s=0,c;return d;function d(L){let ne=u.events.length-1;for(;ne>-1;){const he=u.events[ne][1].type;if(he==="lineEnding"||he==="linePrefix")ne--;else break}const ie=ne>-1?u.events[ne][1].type:null,Ae=ie==="tableHead"||ie==="tableRow"?z:p;return Ae===z&&u.parser.lazy[u.now().line]?l(L):Ae(L)}function p(L){return t.enter("tableHead"),t.enter("tableRow"),m(L)}function m(L){return L===124||(c=!0,s+=1),y(L)}function y(L){return L===null?l(L):Re(L)?s>1?(s=0,u.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),b):l(L):Be(L)?Ze(t,y,"whitespace")(L):(s+=1,c&&(c=!1,o+=1),L===124?(t.enter("tableCellDivider"),t.consume(L),t.exit("tableCellDivider"),c=!0,y):(t.enter("data"),g(L)))}function g(L){return L===null||L===124||st(L)?(t.exit("data"),y(L)):(t.consume(L),L===92?x:g)}function x(L){return L===92||L===124?(t.consume(L),g):g(L)}function b(L){return u.interrupt=!1,u.parser.lazy[u.now().line]?l(L):(t.enter("tableDelimiterRow"),c=!1,Be(L)?Ze(t,k,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):k(L))}function k(L){return L===45||L===58?j(L):L===124?(c=!0,t.enter("tableCellDivider"),t.consume(L),t.exit("tableCellDivider"),O):I(L)}function O(L){return Be(L)?Ze(t,j,"whitespace")(L):j(L)}function j(L){return L===58?(s+=1,c=!0,t.enter("tableDelimiterMarker"),t.consume(L),t.exit("tableDelimiterMarker"),R):L===45?(s+=1,R(L)):L===null||Re(L)?q(L):I(L)}function R(L){return L===45?(t.enter("tableDelimiterFiller"),E(L)):I(L)}function E(L){return L===45?(t.consume(L),E):L===58?(c=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(L),t.exit("tableDelimiterMarker"),T):(t.exit("tableDelimiterFiller"),T(L))}function T(L){return Be(L)?Ze(t,q,"whitespace")(L):q(L)}function q(L){return L===124?k(L):L===null||Re(L)?!c||o!==s?I(L):(t.exit("tableDelimiterRow"),t.exit("tableHead"),r(L)):I(L)}function I(L){return l(L)}function z(L){return t.enter("tableRow"),C(L)}function C(L){return L===124?(t.enter("tableCellDivider"),t.consume(L),t.exit("tableCellDivider"),C):L===null||Re(L)?(t.exit("tableRow"),r(L)):Be(L)?Ze(t,C,"whitespace")(L):(t.enter("data"),$(L))}function $(L){return L===null||L===124||st(L)?(t.exit("data"),C(L)):(t.consume(L),L===92?Z:$)}function Z(L){return L===92||L===124?(t.consume(L),$):$(L)}}function _2(t,r){let l=-1,u=!0,o=0,s=[0,0,0,0],c=[0,0,0,0],d=!1,p=0,m,y,g;const x=new k2;for(;++l<t.length;){const b=t[l],k=b[1];b[0]==="enter"?k.type==="tableHead"?(d=!1,p!==0&&(Ty(x,r,p,m,y),y=void 0,p=0),m={type:"table",start:Object.assign({},k.start),end:Object.assign({},k.end)},x.add(l,0,[["enter",m,r]])):k.type==="tableRow"||k.type==="tableDelimiterRow"?(u=!0,g=void 0,s=[0,0,0,0],c=[0,l+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},k.start),end:Object.assign({},k.end)},x.add(l,0,[["enter",y,r]])),o=k.type==="tableDelimiterRow"?2:y?3:1):o&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")?(u=!1,c[2]===0&&(s[1]!==0&&(c[0]=c[1],g=mo(x,r,s,o,void 0,g),s=[0,0,0,0]),c[2]=l)):k.type==="tableCellDivider"&&(u?u=!1:(s[1]!==0&&(c[0]=c[1],g=mo(x,r,s,o,void 0,g)),s=c,c=[s[1],l,0,0])):k.type==="tableHead"?(d=!0,p=l):k.type==="tableRow"||k.type==="tableDelimiterRow"?(p=l,s[1]!==0?(c[0]=c[1],g=mo(x,r,s,o,l,g)):c[1]!==0&&(g=mo(x,r,c,o,l,g)),o=0):o&&(k.type==="data"||k.type==="tableDelimiterMarker"||k.type==="tableDelimiterFiller")&&(c[3]=l)}for(p!==0&&Ty(x,r,p,m,y),x.consume(r.events),l=-1;++l<r.events.length;){const b=r.events[l];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=C2(r.events,l))}return t}function mo(t,r,l,u,o,s){const c=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",d="tableContent";l[0]!==0&&(s.end=Object.assign({},xl(r.events,l[0])),t.add(l[0],0,[["exit",s,r]]));const p=xl(r.events,l[1]);if(s={type:c,start:Object.assign({},p),end:Object.assign({},p)},t.add(l[1],0,[["enter",s,r]]),l[2]!==0){const m=xl(r.events,l[2]),y=xl(r.events,l[3]),g={type:d,start:Object.assign({},m),end:Object.assign({},y)};if(t.add(l[2],0,[["enter",g,r]]),u!==2){const x=r.events[l[2]],b=r.events[l[3]];if(x[1].end=Object.assign({},b[1].end),x[1].type="chunkText",x[1].contentType="text",l[3]>l[2]+1){const k=l[2]+1,O=l[3]-l[2]-1;t.add(k,O,[])}}t.add(l[3]+1,0,[["exit",g,r]])}return o!==void 0&&(s.end=Object.assign({},xl(r.events,o)),t.add(o,0,[["exit",s,r]]),s=void 0),s}function Ty(t,r,l,u,o){const s=[],c=xl(r.events,l);o&&(o.end=Object.assign({},c),s.push(["exit",o,r])),u.end=Object.assign({},c),s.push(["exit",u,r]),t.add(l+1,0,s)}function xl(t,r){const l=t[r],u=l[0]==="enter"?"start":"end";return l[1][u]}const z2={name:"tasklistCheck",tokenize:O2};function M2(){return{text:{91:z2}}}function O2(t,r,l){const u=this;return o;function o(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?l(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),s)}function s(p){return st(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),c):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),c):l(p)}function c(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),d):l(p)}function d(p){return Re(p)?r(p):Be(p)?t.check({tokenize:j2},r,l)(p):l(p)}}function j2(t,r,l){return Ze(t,u,"whitespace");function u(o){return o===null?l(o):r(o)}}function N2(t){return kv([i2(),g2(),T2(t),R2(),M2()])}const L2={};function U2(t){const r=this,l=t||L2,u=r.data(),o=u.micromarkExtensions||(u.micromarkExtensions=[]),s=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),c=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);o.push(N2(l)),s.push(n2()),c.push(a2(l))}const ko=t=>t.trim().toLowerCase().replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/_/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");function Lf(t){return t==null?"":typeof t=="string"||typeof t=="number"||typeof t=="boolean"?String(t):Array.isArray(t)?t.map(r=>Lf(r)).join(""):V.isValidElement(t)?Lf(t.props.children??null):""}function H2(t){const r=t.split(`
`);let l=0;for(;l<r.length&&r[l].trim()==="";)l++;if(l<r.length&&/^#\s+/.test(r[l].trim())){for(l++;l<r.length&&r[l].trim()==="";)l++;return r.slice(l).join(`
`)}return t}const vl=(t,r)=>{const l=Lf(t),u=ko(l);return u?`${r??""}${u}`:void 0};function ky({markdown:t,stripFirstH1:r,headingIdPrefix:l}){const u=V.useMemo(()=>r?H2(t):t,[t,r]);return W.jsx("div",{className:"markdown",children:W.jsx(TA,{remarkPlugins:[U2],components:{h1:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h1",{id:c,...s,className:"text-4xl font-bold lineheight-1.25 mb-4",children:o})},h2:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h2",{id:c,...s,className:"text-3xl font-bold lineheight-1.25 mb-4",children:o})},h3:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h3",{id:c,...s,className:"text-2xl font-bold lineheight-1.25 mb-4",children:o})},h4:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h4",{id:c,...s,className:"text-xl font-semibold lineheight-1.25 mb-4",children:o})},h5:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h5",{id:c,...s,className:"text-lg font-semibold lineheight-1.25 mb-4",children:o})},h6:({children:o,...s})=>{const c=vl(o,l);return W.jsx("h6",{id:c,...s,className:"text-base font-semibold lineheight-1.25 mb-4",children:o})},p:({children:o,...s})=>W.jsx("p",{...s,className:"mb-4 lineheight-1.5",children:o}),pre:({children:o,...s})=>W.jsx("pre",{...s,className:"bg-gray-100 p-4 rounded mb-4 overflow-x-auto",children:o}),code:({children:o,...s})=>W.jsx("code",{...s,className:"bg-gray-100 px-1 py-0.5 rounded",children:o}),ol:({children:o,...s})=>W.jsx("ol",{...s,className:"list-inside mb-4",children:o}),li:({children:o,...s})=>W.jsx("li",{...s,className:"mb-2",children:o})},children:u})})}const B2=`# Temperature Converter 

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
`,F2=`# Test-Driven Development (TDD) Guide

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
`,Y2=`# Function Documentation

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
\`\`\``,q2=`# Step-by-Step Instructions

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
`,I2="",G2=`# Dog Age Calculator

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
`,V2=`# Function Documentation

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
\`\`\``,X2="# Step-by-Step Instructions\n\nThis function is slightly more complex and we will need to consider some edge cases. We will start with basic functionality and gradually address the different scenarios. You will find it beneficial to run `jest` in `watch mode`, so run the watch script to see it run the tests everytime you save.\n\n## 1. Basic Functionality\n\nRemove the first `.skip` from the `describe` block. \n\nNow let's address the first two years of a dog’s life count:\n\n```javascript\nconst earlyYears = 2 * 10.5;\n```\n\nEach following year should represent 4 years. We need to account for the 2 years we already calculated:\n\n```javascript\nconst laterYears = (humanYears - 2) * 4;\n```\n\nFinally, we need to return the total value:\n\n```javascript\nreturn earlyYears + laterYears;\n```\n\n## 2. Advanced Cases\n\nRemove the second `.skip`. If you save, you'll notice that the tests start failing. Consider the first case:\n\n- `humanYears` is 1, so we expect the return to be `10.5`\n- The function calculates `2 * 10.5` for `earlyYears`\n- It then calculates `humanYears - 2` (-1) multiplied by 4\n- Finally, it returns `21 - 4` which is why the received value is `17`\n\nWe can easily address this with an `early return`. This is where we return from a function so that later functionality is not executed. Since every human year up until 2 is worth 10.5, we can ignore the later years when the human age does not exceed 2.\n\n```javascript\nif (humanYears <= 2) return humanYears * 10.5;\n```\n\n_**Note** I'm using a shorthand in the `if statement` to avoid opening curly braces and writing on a new line. There are many shorthands you can learn that are very useful._\n\n## 3. Edge Cases\n\nRemove the third `.skip`. At this point, the first two tests should in fact pass, however, we're not dealing with negative numbers. When the received parameter is less than zero, we should be returning 0.\n\n```javascript\nif (humanYears <= 0) return 0;\n```\n\n## 4. Input Validation\nRemove the final `.skip`. What we're trying to ensure is that this function always returns a number. If the user provides `undefined`, `null`, or in fact, anything that is not a number, we want to return 0:\n\n```javascript\nif (humanYears <= 0) return 0;\nif (typeof humanYears !== 'number') return 0;\n```\n\nWe still get one failing test! Let's try to debug what's happening.\n\n```javascript\nconsole.log(humanYears <= 0);\nconsole.log(typeof humanYears !== 'number');\n```\n\nNow we can't tell which test corresponds to our console log. The test that is failing is the very last one. Try adding `.only` to only run the last test.\n\n```javascript\ntest.only('returns 0 for an NaN input', () => {\n    expect(calculateDogAge(NaN)).toBe(0);\n});\n```\n\nNow our `console logs` should show:\n\n```bash\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:4:13)\n```\n\nThe input is `NaN`, which is not less than or equal to 0, but it _is a number._ It's just a number that doesn't exist. It's a `falsey` value in JavaScript, just like `null`, `undefined`, `0`, `''`, and a few others. So if you console log this:\n\n```javascript\nconsole.log(!humanYears);\n```\n\nYou should expect to see\n\n```bash\nconsole.log\n    true\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n```\n\nTherefore, we can check to see if the value is falsey, since all numbers are truthy value:\n\n```javascript\nif (!humanYears) return 0;\n```\n\nWe can actually combine these if statements into one single catchall:\n\n```javascript\nif (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n```\n\nRemeber to remove the `.only` to run the rest of the tests, and you should see them all pass!\n\n### Solution\n\n<details>\n  <summary>Reveal</summary>\n\n```javascript\nfunction calculateDogAge(humanYears) {\n    if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n\n    if (humanYears <= 2) return humanYears * 10.5;\n        \n    const earlyYears = 2 * 10.5;\n    const laterYears = (humanYears - 2) * 4;\n    return earlyYears + laterYears;\n}\n```\n</details>\n",Q2="",P2=`# Magic 8 Ball

## Objective

Create a Magic 8 Ball in JavaScript that generates a random answer. If you wish to write your own responses, you will need to change the \`validResponses\` array in the test suite to reflect your responses.

## Learning Goals

- Work with JavaScript switch/case statements
- Practice functional programming
- Learn the ternary operator
`,Z2=`# Function Documentation

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
\`\`\``,J2=`# Step-by-Step Instructions

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

`,$2=`# Race Day

## Objective

Create a race registration system that assigns race numbers and start times based on runner's age and registration time.

## Learning Goals

- Begin to use JavaScript objects
- Practice handling multiple conditions`,K2=`
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
\`\`\``,W2=`# Step-by-Step Instructions

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

</details>`,eR=`# Rock Paper Scissors

## Objective

Create a console-based Rock Paper Scissors game that accepts user input, generates a computer choice, determines a winner, and logs the results. The implementation should be modular and testable.

## Learning Goals

- Write small, testable JavaScript functions
- Use control flow (if/else, switch) to implement game logic
- Practice input validation and edge-case handling (e.g., cheat codes)

## Notes

- The \`playGame\` function has already been written for you.
- When you have the tests passing, try running the command \`npm run play\`.
`,tR=`
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
\`\`\``,nR=`# Step-by-Step Instructions

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

Enjoy!`,aR=`# Sleep Calculator

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
`,rR=`# Arrow Functions

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
- ECMAScript 2015 (ES6) specification notes`,lR=`
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
\`\`\``,iR=`# Step-by-Step Instructions

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

</details>`,uR="# Coded Message\n\n## Before You Start\n\nThis challenge introduces **Object-Oriented Programming (OOP)** in JavaScript. You'll learn about classes, methods, and the `this` keyword while working with array methods. If you're new to OOP, the instructions file provides detailed explanations of each concept.\n\n## Objective\n\nBuild a `MessageDecoder` class that transforms an encoded array of strings using various array methods to reveal a hidden message about programming. Master OOP principles while practicing array manipulation techniques.\n\n## Learning Goals\n\n- Understand JavaScript classes and constructors\n- Practice array methods (`.pop()`, `.push()`, `.shift()`, `.unshift()`, `.splice()`, `.join()`)\n- Learn method chaining with `this`\n- Work with instance methods and encapsulation\n- Understand the difference between mutating and non-mutating methods\n\n## Note\n\nThe `revealSecretMessage()` method has already been written for you. Your task is to implement the individual methods it depends on. Once all methods are correctly implemented, the secret message will be revealed!\n\nYou can check your progress at any time:\n```bash\nnpm test\n```",oR=`
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
- **\`.indexOf()\`** - Finds the index of an element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))`,sR=`# Step-by-Step Instructions

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
`,cR=`#  Whale Talk

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
`,fR=`# Function Documentation

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
`,hR=`# Step-by-Step Instructions

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
`;function dR(t){const r=t.replace(/\\/g,"/");return r.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/)?.[1]??r.split("/").slice(-2,-1)[0]??"unknown"}function mR(t){const r=t.match(/^(\d+)\b/);return r?Number(r[1]):Number.MAX_SAFE_INTEGER}function pR(t){return t.replace(/\\/g,"/").split("/").slice(-1)[0]??"unknown.md"}const Ay=t=>t.replace(/\.md$/i,"").replace(/\d+/g,"").replace(/[-_]+/g," ").trim(),Cy={"instructions.md":0,"readme.md":1,"function_documentation.md":2,"function-documentation.md":2,"extra_guide.md":3,"extra-guide.md":3,"solution.md":4};function gR(t,r){const l=t.toLowerCase(),u=r.toLowerCase(),o=Cy[l]??100,s=Cy[u]??100;return o-s||l.localeCompare(u)}const yR={glob(){return Object.assign({"../../../../docs/1-temperature-converter/README.md":B2,"../../../../docs/1-temperature-converter/TDD-guide.md":F2,"../../../../docs/1-temperature-converter/function-documentation.md":Y2,"../../../../docs/1-temperature-converter/instructions.md":q2,"../../../../docs/1-temperature-converter/solution.md":I2,"../../../../docs/2-dog-age-calculator/README.md":G2,"../../../../docs/2-dog-age-calculator/function-documentation.md":V2,"../../../../docs/2-dog-age-calculator/instructions.md":X2,"../../../../docs/2-dog-age-calculator/solution.md":Q2,"../../../../docs/3-magic-eight-ball/README.md":P2,"../../../../docs/3-magic-eight-ball/function-documentation.md":Z2,"../../../../docs/3-magic-eight-ball/instructions.md":J2,"../../../../docs/4-race-day/README.md":$2,"../../../../docs/4-race-day/function-documentation.md":K2,"../../../../docs/4-race-day/instructions.md":W2,"../../../../docs/5-rock-paper-scissors/README.md":eR,"../../../../docs/5-rock-paper-scissors/function-documentation.md":tR,"../../../../docs/5-rock-paper-scissors/instructions.md":nR,"../../../../docs/6-sleep-calculator/README.md":aR,"../../../../docs/6-sleep-calculator/arrow-functions.md":rR,"../../../../docs/6-sleep-calculator/function-documentation.md":lR,"../../../../docs/6-sleep-calculator/instructions.md":iR,"../../../../docs/7-coded-message/README.md":uR,"../../../../docs/7-coded-message/class-documentation.md":oR,"../../../../docs/7-coded-message/instructions.md":sR,"../../../../docs/8-whale-talk/README.md":cR,"../../../../docs/8-whale-talk/function-documentation.md":fR,"../../../../docs/8-whale-talk/instructions.md":hR})}};function vR(t){const r=new Map;for(const[u,o]of Object.entries(t)){const s=dR(u),c=pR(u),d={fileName:c,title:Ay(c),markdown:o},p=r.get(s);p?p.push(d):r.set(s,[d])}const l=Array.from(r.entries()).map(([u,o])=>{const s=[...o].sort((c,d)=>gR(c.fileName,d.fileName));return{slug:u,title:Ay(u),order:mR(u),files:s.map(c=>({title:c.title,markdown:c.markdown}))}});return l.sort((u,o)=>u.order-o.order||u.title.localeCompare(o.title)),l}function pb(){return V.useMemo(()=>{const t=yR.glob();return vR(t)},[])}const bR=`# JavaScript Learning Challenges

A collection of JavaScript coding challenges designed to help you learn and practice JavaScript fundamentals.

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

## How to Use

1. Navigate to any challenge directory
2. Read the \`README.md\` for instructions
3. Implement your solution in the provided \`.js\` file
4. Run \`npm test\` to check your solution
5. All tests should pass when your solution is correct

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
`;var gb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ry=ar.createContext&&ar.createContext(gb),xR=["attr","size","title"];function wR(t,r){if(t==null)return{};var l=SR(t,r),u,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)u=s[o],!(r.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(t,u)&&(l[u]=t[u])}return l}function SR(t,r){if(t==null)return{};var l={};for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){if(r.indexOf(u)>=0)continue;l[u]=t[u]}return l}function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(t[u]=l[u])}return t},Ao.apply(this,arguments)}function Dy(t,r){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);r&&(u=u.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),l.push.apply(l,u)}return l}function Co(t){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?Dy(Object(l),!0).forEach(function(u){ER(t,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):Dy(Object(l)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(l,u))})}return t}function ER(t,r,l){return r=TR(r),r in t?Object.defineProperty(t,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[r]=l,t}function TR(t){var r=kR(t,"string");return typeof r=="symbol"?r:r+""}function kR(t,r){if(typeof t!="object"||!t)return t;var l=t[Symbol.toPrimitive];if(l!==void 0){var u=l.call(t,r);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function yb(t){return t&&t.map((r,l)=>ar.createElement(r.tag,Co({key:l},r.attr),yb(r.child)))}function AR(t){return r=>ar.createElement(CR,Ao({attr:Co({},t.attr)},r),yb(t.child))}function CR(t){var r=l=>{var{attr:u,size:o,title:s}=t,c=wR(t,xR),d=o||l.size||"1em",p;return l.className&&(p=l.className),t.className&&(p=(p?p+" ":"")+t.className),ar.createElement("svg",Ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,c,{className:p,style:Co(Co({color:t.color||l.color},l.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&ar.createElement("title",null,s),t.children)};return Ry!==void 0?ar.createElement(Ry.Consumer,null,l=>r(l)):r(gb)}function RR(t){return AR({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},child:[]}]})(t)}const DR=({title:t,slug:r,files:l})=>{const[u,o]=V.useState(!1),{slug:s}=av(),c=s?.replace(/\d/g,"").split("-").join(" ").trim()===t?l.find(p=>`#${ko(p.title)}`===window.location.hash)?.title??t:null,d=p=>{p.stopPropagation(),o(!u)};return W.jsxs("section",{children:[W.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"baseline"},className:"navlink",children:[W.jsx(xo,{to:`/instructions/${r}`,onClick:()=>{u||o(!0)},style:{fontWeight:c===t?700:400,textDecoration:"none",flex:"1 1 auto",border:"none",paddingLeft:8},children:t}),W.jsx("button",{style:{border:"none",outline:"none",boxShadow:"none",background:"none",padding:0,margin:"0 8px 0 0",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1,height:"1em",width:"1em",verticalAlign:"baseline"},onClick:d,children:W.jsx("span",{style:{transform:u?"rotate(180deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s"},children:W.jsx(RR,{})})})]}),u&&W.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:12},children:l.map(p=>{if(p.title.toLowerCase()==="readme")return null;const m=p.title.toLowerCase()==="readme"?"":`#${ko(p.title)}`,y=`/instructions/${r}${m}`;return W.jsx("li",{style:{padding:0},className:"navlink accordion-link",children:W.jsx(xo,{to:y,style:{fontWeight:c===p.title?700:400,textDecoration:"none",opacity:.9,border:"none",paddingLeft:24},children:p.title})},`${r}-${p.title}`)})})]})},_R=()=>{const t=pb();return W.jsx("aside",{"aria-label":"Challenges",style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:W.jsx("nav",{style:{overflowY:"auto",overflowX:"hidden",minHeight:0,flex:"1 1 auto",paddingRight:16},children:W.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,gap:12,display:"flex",flexDirection:"column",fontSize:18},children:[W.jsx("li",{className:"navlink",children:W.jsx(xo,{to:Ea.SETUP.path,style:({isActive:r})=>({fontWeight:r?700:400,textDecoration:"none"}),children:"Overview"})}),t.map(r=>W.jsx("li",{style:{padding:0,margin:0},children:W.jsx(DR,{slug:r.slug,title:r.title,files:r.files})},r.slug))]})})})};function zR(t,r){if(t)return r?.files.find(o=>`#${ko(o.title)}`===t)?.markdown??"no markdown";const l=r?.files.find(o=>o.title.toLowerCase()==="readme")?.markdown;return l||(r?.files.find(o=>o.title.toLowerCase()==="instructions")?.markdown??"No instructions.md or README.md found for this challenge.")}function _y(){const t=pb(),{slug:r}=av(),{hash:l}=Kn(),u=nv(),o=V.useMemo(()=>r?t.findIndex(m=>m.slug===r):-1,[t,r]),s=t.find(m=>m.slug===r),c=V.useMemo(()=>zR(l,s),[l,s]),d=o>0?t[o-1]:void 0,p=o>=0&&o<t.length-1?t[o+1]:void 0;return t.length===0?W.jsxs("div",{className:"inner",children:[W.jsx("h1",{children:"Instructions"}),W.jsxs("p",{children:["No docs markdown found. Check the glob path in ",W.jsx("code",{children:"useChallengeInstructions"}),"."]})]}):W.jsxs("div",{id:"main",style:{display:"grid",height:"100vh",gridTemplateColumns:"280px 1fr",gap:24},children:[W.jsx(_R,{}),W.jsxs("section",{"aria-label":"Instructions",style:{overflow:"auto",height:"100%"},children:[!r&&W.jsx(ky,{markdown:bR}),r&&!s&&W.jsxs(W.Fragment,{children:[W.jsx("h1",{style:{marginTop:0},children:"Instructions"}),W.jsx("p",{children:"Unknown challenge. Pick one from the list."})]}),s&&W.jsxs(W.Fragment,{children:[W.jsx("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:W.jsxs("div",{style:{display:"flex",gap:8},children:[W.jsx("button",{disabled:!d,onClick:()=>d&&u(`/instructions/${d.slug}`),children:"Prev"}),W.jsx("button",{disabled:!p,onClick:()=>p&&u(`/instructions/${p.slug}`),children:"Next"})]})}),W.jsx(ky,{markdown:c})]})]})]})}var xf={exports:{}},zy;function MR(){return zy||(zy=1,(function(t){var r=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var l=(function(u){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,c={},d={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function E(T){return T instanceof p?new p(T.type,E(T.content),T.alias):Array.isArray(T)?T.map(E):T.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(E){return Object.prototype.toString.call(E).slice(8,-1)},objId:function(E){return E.__id||Object.defineProperty(E,"__id",{value:++s}),E.__id},clone:function E(T,q){q=q||{};var I,z;switch(d.util.type(T)){case"Object":if(z=d.util.objId(T),q[z])return q[z];I={},q[z]=I;for(var C in T)T.hasOwnProperty(C)&&(I[C]=E(T[C],q));return I;case"Array":return z=d.util.objId(T),q[z]?q[z]:(I=[],q[z]=I,T.forEach(function($,Z){I[Z]=E($,q)}),I);default:return T}},getLanguage:function(E){for(;E;){var T=o.exec(E.className);if(T)return T[1].toLowerCase();E=E.parentElement}return"none"},setLanguage:function(E,T){E.className=E.className.replace(RegExp(o,"gi"),""),E.classList.add("language-"+T)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(I){var E=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(I.stack)||[])[1];if(E){var T=document.getElementsByTagName("script");for(var q in T)if(T[q].src==E)return T[q]}return null}},isActive:function(E,T,q){for(var I="no-"+T;E;){var z=E.classList;if(z.contains(T))return!0;if(z.contains(I))return!1;E=E.parentElement}return!!q}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(E,T){var q=d.util.clone(d.languages[E]);for(var I in T)q[I]=T[I];return q},insertBefore:function(E,T,q,I){I=I||d.languages;var z=I[E],C={};for(var $ in z)if(z.hasOwnProperty($)){if($==T)for(var Z in q)q.hasOwnProperty(Z)&&(C[Z]=q[Z]);q.hasOwnProperty($)||(C[$]=z[$])}var L=I[E];return I[E]=C,d.languages.DFS(d.languages,function(ne,ie){ie===L&&ne!=E&&(this[ne]=C)}),C},DFS:function E(T,q,I,z){z=z||{};var C=d.util.objId;for(var $ in T)if(T.hasOwnProperty($)){q.call(T,$,T[$],I||$);var Z=T[$],L=d.util.type(Z);L==="Object"&&!z[C(Z)]?(z[C(Z)]=!0,E(Z,q,null,z)):L==="Array"&&!z[C(Z)]&&(z[C(Z)]=!0,E(Z,q,$,z))}}},plugins:{},highlightAll:function(E,T){d.highlightAllUnder(document,E,T)},highlightAllUnder:function(E,T,q){var I={callback:q,container:E,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};d.hooks.run("before-highlightall",I),I.elements=Array.prototype.slice.apply(I.container.querySelectorAll(I.selector)),d.hooks.run("before-all-elements-highlight",I);for(var z=0,C;C=I.elements[z++];)d.highlightElement(C,T===!0,I.callback)},highlightElement:function(E,T,q){var I=d.util.getLanguage(E),z=d.languages[I];d.util.setLanguage(E,I);var C=E.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&d.util.setLanguage(C,I);var $=E.textContent,Z={element:E,language:I,grammar:z,code:$};function L(ie){Z.highlightedCode=ie,d.hooks.run("before-insert",Z),Z.element.innerHTML=Z.highlightedCode,d.hooks.run("after-highlight",Z),d.hooks.run("complete",Z),q&&q.call(Z.element)}if(d.hooks.run("before-sanity-check",Z),C=Z.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!Z.code){d.hooks.run("complete",Z),q&&q.call(Z.element);return}if(d.hooks.run("before-highlight",Z),!Z.grammar){L(d.util.encode(Z.code));return}if(T&&u.Worker){var ne=new Worker(d.filename);ne.onmessage=function(ie){L(ie.data)},ne.postMessage(JSON.stringify({language:Z.language,code:Z.code,immediateClose:!0}))}else L(d.highlight(Z.code,Z.grammar,Z.language))},highlight:function(E,T,q){var I={code:E,grammar:T,language:q};if(d.hooks.run("before-tokenize",I),!I.grammar)throw new Error('The language "'+I.language+'" has no grammar.');return I.tokens=d.tokenize(I.code,I.grammar),d.hooks.run("after-tokenize",I),p.stringify(d.util.encode(I.tokens),I.language)},tokenize:function(E,T){var q=T.rest;if(q){for(var I in q)T[I]=q[I];delete T.rest}var z=new g;return x(z,z.head,E),y(E,z,T,z.head,0),k(z)},hooks:{all:{},add:function(E,T){var q=d.hooks.all;q[E]=q[E]||[],q[E].push(T)},run:function(E,T){var q=d.hooks.all[E];if(!(!q||!q.length))for(var I=0,z;z=q[I++];)z(T)}},Token:p};u.Prism=d;function p(E,T,q,I){this.type=E,this.content=T,this.alias=q,this.length=(I||"").length|0}p.stringify=function E(T,q){if(typeof T=="string")return T;if(Array.isArray(T)){var I="";return T.forEach(function(L){I+=E(L,q)}),I}var z={type:T.type,content:E(T.content,q),tag:"span",classes:["token",T.type],attributes:{},language:q},C=T.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(z.classes,C):z.classes.push(C)),d.hooks.run("wrap",z);var $="";for(var Z in z.attributes)$+=" "+Z+'="'+(z.attributes[Z]||"").replace(/"/g,"&quot;")+'"';return"<"+z.tag+' class="'+z.classes.join(" ")+'"'+$+">"+z.content+"</"+z.tag+">"};function m(E,T,q,I){E.lastIndex=T;var z=E.exec(q);if(z&&I&&z[1]){var C=z[1].length;z.index+=C,z[0]=z[0].slice(C)}return z}function y(E,T,q,I,z,C){for(var $ in q)if(!(!q.hasOwnProperty($)||!q[$])){var Z=q[$];Z=Array.isArray(Z)?Z:[Z];for(var L=0;L<Z.length;++L){if(C&&C.cause==$+","+L)return;var ne=Z[L],ie=ne.inside,Ae=!!ne.lookbehind,he=!!ne.greedy,ae=ne.alias;if(he&&!ne.pattern.global){var H=ne.pattern.toString().match(/[imsuy]*$/)[0];ne.pattern=RegExp(ne.pattern.source,H+"g")}for(var re=ne.pattern||ne,le=I.next,ye=z;le!==T.tail&&!(C&&ye>=C.reach);ye+=le.value.length,le=le.next){var A=le.value;if(T.length>E.length)return;if(!(A instanceof p)){var M=1,X;if(he){if(X=m(re,ye,E,Ae),!X||X.index>=E.length)break;var ve=X.index,S=X.index+X[0].length,oe=ye;for(oe+=le.value.length;ve>=oe;)le=le.next,oe+=le.value.length;if(oe-=le.value.length,ye=oe,le.value instanceof p)continue;for(var ge=le;ge!==T.tail&&(oe<S||typeof ge.value=="string");ge=ge.next)M++,oe+=ge.value.length;M--,A=E.slice(ye,oe),X.index-=ye}else if(X=m(re,0,A,Ae),!X)continue;var ve=X.index,ze=X[0],Qe=A.slice(0,ve),Je=A.slice(ve+ze.length),Mt=ye+A.length;C&&Mt>C.reach&&(C.reach=Mt);var qt=le.prev;Qe&&(qt=x(T,qt,Qe),ye+=Qe.length),b(T,qt,M);var dt=new p($,ie?d.tokenize(ze,ie):ze,ae,ze);if(le=x(T,qt,dt),Je&&x(T,le,Je),M>1){var Qt={cause:$+","+L,reach:Mt};y(E,T,q,le.prev,ye,Qt),C&&Qt.reach>C.reach&&(C.reach=Qt.reach)}}}}}}function g(){var E={value:null,prev:null,next:null},T={value:null,prev:E,next:null};E.next=T,this.head=E,this.tail=T,this.length=0}function x(E,T,q){var I=T.next,z={value:q,prev:T,next:I};return T.next=z,I.prev=z,E.length++,z}function b(E,T,q){for(var I=T.next,z=0;z<q&&I!==E.tail;z++)I=I.next;T.next=I,I.prev=T,E.length-=z}function k(E){for(var T=[],q=E.head.next;q!==E.tail;)T.push(q.value),q=q.next;return T}if(!u.document)return u.addEventListener&&(d.disableWorkerMessageHandler||u.addEventListener("message",function(E){var T=JSON.parse(E.data),q=T.language,I=T.code,z=T.immediateClose;u.postMessage(d.highlight(I,d.languages[q],q)),z&&u.close()},!1)),d;var O=d.util.currentScript();O&&(d.filename=O.src,O.hasAttribute("data-manual")&&(d.manual=!0));function j(){d.manual||d.highlightAll()}if(!d.manual){var R=document.readyState;R==="loading"||R==="interactive"&&O&&O.defer?document.addEventListener("DOMContentLoaded",j):window.requestAnimationFrame?window.requestAnimationFrame(j):window.setTimeout(j,16)}return d})(r);t.exports&&(t.exports=l),typeof $p<"u"&&($p.Prism=l),l.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.languages.markup.doctype.inside["internal-subset"].inside=l.languages.markup,l.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(l.languages.markup.tag,"addInlined",{value:function(o,s){var c={};c["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:l.languages[s]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};d["language-"+s]={pattern:/[\s\S]+/,inside:l.languages[s]};var p={};p[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:d},l.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(l.languages.markup.tag,"addAttribute",{value:function(u,o){l.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:l.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.xml=l.languages.extend("markup",{}),l.languages.ssml=l.languages.xml,l.languages.atom=l.languages.xml,l.languages.rss=l.languages.xml,(function(u){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var s=u.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(l),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{"class-name":[l.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),l.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,l.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:l.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:l.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:l.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:l.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:l.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),l.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),l.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),l.languages.markup&&(l.languages.markup.tag.addInlined("script","javascript"),l.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),l.languages.js=l.languages.javascript,(function(){if(typeof l>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",o=function(O,j){return"✖ Error "+O+" while fetching file: "+j},s="✖ Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},d="data-src-status",p="loading",m="loaded",y="failed",g="pre[data-src]:not(["+d+'="'+m+'"]):not(['+d+'="'+p+'"])';function x(O,j,R){var E=new XMLHttpRequest;E.open("GET",O,!0),E.onreadystatechange=function(){E.readyState==4&&(E.status<400&&E.responseText?j(E.responseText):E.status>=400?R(o(E.status,E.statusText)):R(s))},E.send(null)}function b(O){var j=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(O||"");if(j){var R=Number(j[1]),E=j[2],T=j[3];return E?T?[R,Number(T)]:[R,void 0]:[R,R]}}l.hooks.add("before-highlightall",function(O){O.selector+=", "+g}),l.hooks.add("before-sanity-check",function(O){var j=O.element;if(j.matches(g)){O.code="",j.setAttribute(d,p);var R=j.appendChild(document.createElement("CODE"));R.textContent=u;var E=j.getAttribute("data-src"),T=O.language;if(T==="none"){var q=(/\.(\w+)$/.exec(E)||[,"none"])[1];T=c[q]||q}l.util.setLanguage(R,T),l.util.setLanguage(j,T);var I=l.plugins.autoloader;I&&I.loadLanguages(T),x(E,function(z){j.setAttribute(d,m);var C=b(j.getAttribute("data-range"));if(C){var $=z.split(/\r\n?|\n/g),Z=C[0],L=C[1]==null?$.length:C[1];Z<0&&(Z+=$.length),Z=Math.max(0,Math.min(Z-1,$.length)),L<0&&(L+=$.length),L=Math.max(0,Math.min(L,$.length)),z=$.slice(Z,L).join(`
`),j.hasAttribute("data-start")||j.setAttribute("data-start",String(Z+1))}R.textContent=z,l.highlightElement(R)},function(z){j.setAttribute(d,y),R.textContent=z})}}),l.plugins.fileHighlight={highlight:function(j){for(var R=(j||document).querySelectorAll(g),E=0,T;T=R[E++];)l.highlightElement(T)}};var k=!1;l.fileHighlight=function(){k||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),k=!0),l.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(xf)),xf.exports}var OR=MR();const jR=Ro(OR);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;const NR=({children:t,title:r,code:l})=>(V.useEffect(()=>{jR.highlightAll()},[]),W.jsxs("div",{className:"rounded-3xl w-full",children:[W.jsxs("div",{className:"py-4 px-6 flex items-center gap-4 bg-black-800 rounded-t-3xl font-fira text-muted text-2xl",children:[W.jsx(cv,{}),W.jsx("h2",{children:r})]}),W.jsxs("div",{className:"rounded-b-3xl py-4 px-6 bg-black-900 text-2xl!",children:[W.jsx("pre",{className:"prose prose-invert",children:W.jsx("code",{className:"language-js text-2xl!",children:l})}),t]})]}));function LR(){const t="Your name here...",[r,l]=V.useState(t),[u,o]=V.useState(!1);return W.jsxs("div",{className:"page-container",children:[W.jsx("div",{className:"flex flex-col grow-0 max-w-fit items-end justify-center",children:W.jsxs("h1",{className:"text-6xl font-libre font-extrabold leading-tight text-white",children:["Making JavaScript"," ",W.jsxs("span",{className:"relative inline-block text-blue",children:["Easy",W.jsx("img",{src:Di("underline.svg"),alt:"","aria-hidden":"true",className:"pointer-events-none absolute left-0 top-full block w-full select-none"})]})]})}),W.jsx("div",{className:"w-full",children:W.jsx("p",{className:"text-gray text-3xl font-normal px-8 font-fira mx-auto text-center",children:"A comprehensive course designed for beginners to master JavaScript fundamentals through hands-on exercises."})}),W.jsxs(Ii,{to:Ea.SETUP.path,className:"bg-blue px-8 py-2 rounded-4xl max-h-68 flex items-center justify-center",children:[W.jsx("button",{className:"text-black-700 font-bold font-fira text-3xl",children:"Start Learning"}),W.jsx("div",{className:"p-4",children:W.jsx("img",{src:Di("arrow.svg"),className:"inline-block h-8 text-black-700"})})]}),W.jsx("div",{className:"my-4 w-full",children:W.jsx(NR,{title:"example.js",code:`function greetStudent(name) {
    const message = \`Welcome to the JavaScript course, \${name}!\`;
    console.log(message);
    return message;
  }
  
  // Try it yourself`,children:W.jsxs("div",{className:"space-y-2",children:[W.jsxs("form",{action:()=>{o(!0),console.log(`Welcome to the JavaScript course, ${r}!`)},className:"flex text-white font-fira items-center",children:[W.jsx("span",{className:"text-[#dcdcaa]",children:"greetStudent"}),W.jsx("span",{children:"("}),W.jsx("span",{className:"text-[#ce9178]",children:'"'}),W.jsx("input",{type:"text",placeholder:"",className:"text-[#ce9178] border-none outline-none",value:r,id:"auto",style:{width:`${Math.max(r.length,1)}ch`},onChange:s=>{l(s.currentTarget.value)},onBlur:s=>{s.currentTarget.value===""&&l(t)}}),W.jsx("span",{className:"text-[#ce9178]",children:'"'}),W.jsx("span",{children:");"})]}),u&&W.jsx("span",{className:"text-[#6a9955] font-fira",children:"// Check the console!"})]})})}),W.jsx("h2",{className:"text-white text-4xl font-libre",children:"Course Topics"}),W.jsx("p",{className:"text-gray text-2xl font-normal font-fira mx-auto",children:"The included exercises will teach you some of the following Skills."}),W.jsx("ul",{className:"text-gray w-full gap-x-10.5 gap-y-5.5 text-2xl font-normal font-fira mx-auto grid grid-cols-2",children:["Variables and Data Types","Functions","Problem Solving","Unit Testing","Modern JavaScript"].map(s=>W.jsxs("li",{className:"w-full bg-black-900 rounded-4xl px-6 py-8 space-x-6",children:[W.jsx("img",{src:Di("tick.svg"),className:"inline-block h-12"}),W.jsx("span",{children:s})]},s))})]})}const UR="/js-content/pr-preview/pr-65/",HR=UR.replace(/\/$/,""),BR=Jw([{path:"/",element:W.jsx(dS,{}),children:[{path:"/",element:W.jsx(LR,{})},{path:"/instructions",element:W.jsx(_y,{})},{path:"/instructions/:slug",element:W.jsx(_y,{})},{path:"*",element:W.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-4",children:[W.jsx("h1",{children:"404 Not Found"}),W.jsx("p",{children:"The page you are looking for does not exist."}),W.jsx(Ii,{to:Ea.HOME.path,children:"Go back to Home"})]})}]}],{basename:HR}),vb=document.getElementById("root");if(!vb)throw new Error('Root element "#root" not found');N1.createRoot(vb).render(W.jsx(Sw,{router:BR}));

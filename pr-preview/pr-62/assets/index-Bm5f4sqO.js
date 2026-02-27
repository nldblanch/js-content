function S1(t,r){for(var l=0;l<r.length;l++){const u=r[l];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in t)){const s=Object.getOwnPropertyDescriptor(u,o);s&&Object.defineProperty(t,o,s.get?s:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=l(o);fetch(o.href,s)}})();function jf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ic={exports:{}},yi={};var Jp;function x1(){if(Jp)return yi;Jp=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(u,o,s){var c=null;if(s!==void 0&&(c=""+s),o.key!==void 0&&(c=""+o.key),"key"in o){s={};for(var d in o)d!=="key"&&(s[d]=o[d])}else s=o;return o=s.ref,{$$typeof:t,type:u,key:c,ref:o!==void 0?o:null,props:s}}return yi.Fragment=r,yi.jsx=l,yi.jsxs=l,yi}var Pp;function E1(){return Pp||(Pp=1,Ic.exports=x1()),Ic.exports}var se=E1(),Fc={exports:{}},vi={},Gc={exports:{}},Vc={};var Kp;function T1(){return Kp||(Kp=1,(function(t){function r(N,W){var re=N.length;N.push(W);e:for(;0<re;){var Ee=re-1>>>1,T=N[Ee];if(0<o(T,W))N[Ee]=W,N[re]=T,re=Ee;else break e}}function l(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var W=N[0],re=N.pop();if(re!==W){N[0]=re;e:for(var Ee=0,T=N.length,R=T>>>1;Ee<R;){var X=2*(Ee+1)-1,x=N[X],le=X+1,ye=N[le];if(0>o(x,re))le<T&&0>o(ye,x)?(N[Ee]=ye,N[le]=re,Ee=le):(N[Ee]=x,N[X]=re,Ee=X);else if(le<T&&0>o(ye,re))N[Ee]=ye,N[le]=re,Ee=le;else break e}}return W}function o(N,W){var re=N.sortIndex-W.sortIndex;return re!==0?re:N.id-W.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var c=Date,d=c.now();t.unstable_now=function(){return c.now()-d}}var p=[],m=[],y=1,g=null,w=3,b=!1,E=!1,z=!1,j=!1,A=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function fe(N){for(var W=l(m);W!==null;){if(W.callback===null)u(m);else if(W.startTime<=N)u(m),W.sortIndex=W.expirationTime,r(p,W);else break;W=l(m)}}function oe(N){if(z=!1,fe(N),!E)if(l(p)!==null)E=!0,q||(q=!0,ae());else{var W=l(m);W!==null&&K(oe,W.startTime-N)}}var q=!1,M=-1,te=5,de=-1;function U(){return j?!0:!(t.unstable_now()-de<te)}function ee(){if(j=!1,q){var N=t.unstable_now();de=N;var W=!0;try{e:{E=!1,z&&(z=!1,L(M),M=-1),b=!0;var re=w;try{t:{for(fe(N),g=l(p);g!==null&&!(g.expirationTime>N&&U());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,w=g.priorityLevel;var T=Ee(g.expirationTime<=N);if(N=t.unstable_now(),typeof T=="function"){g.callback=T,fe(N),W=!0;break t}g===l(p)&&u(p),fe(N)}else u(p);g=l(p)}if(g!==null)W=!0;else{var R=l(m);R!==null&&K(oe,R.startTime-N),W=!1}}break e}finally{g=null,w=re,b=!1}W=void 0}}finally{W?ae():q=!1}}}var ae;if(typeof H=="function")ae=function(){H(ee)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,ce=De.port2;De.port1.onmessage=ee,ae=function(){ce.postMessage(null)}}else ae=function(){A(ee,0)};function K(N,W){M=A(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_next=function(N){switch(w){case 1:case 2:case 3:var W=3;break;default:W=w}var re=w;w=W;try{return N()}finally{w=re}},t.unstable_requestPaint=function(){j=!0},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var re=w;w=N;try{return W()}finally{w=re}},t.unstable_scheduleCallback=function(N,W,re){var Ee=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Ee+re:Ee):re=Ee,N){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=re+T,N={id:y++,callback:W,priorityLevel:N,startTime:re,expirationTime:T,sortIndex:-1},re>Ee?(N.sortIndex=re,r(m,N),l(p)===null&&N===l(m)&&(z?(L(M),M=-1):z=!0,K(oe,re-Ee))):(N.sortIndex=T,r(p,N),E||b||(E=!0,q||(q=!0,ae()))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var W=w;return function(){var re=w;w=W;try{return N.apply(this,arguments)}finally{w=re}}}})(Vc)),Vc}var Wp;function C1(){return Wp||(Wp=1,Gc.exports=T1()),Gc.exports}var Xc={exports:{}},ze={};var $p;function k1(){if($p)return ze;$p=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),w=Symbol.iterator;function b(R){return R===null||typeof R!="object"?null:(R=w&&R[w]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,j={};function A(R,X,x){this.props=R,this.context=X,this.refs=j,this.updater=x||E}A.prototype.isReactComponent={},A.prototype.setState=function(R,X){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,X,"setState")},A.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function L(){}L.prototype=A.prototype;function H(R,X,x){this.props=R,this.context=X,this.refs=j,this.updater=x||E}var fe=H.prototype=new L;fe.constructor=H,z(fe,A.prototype),fe.isPureReactComponent=!0;var oe=Array.isArray;function q(){}var M={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function de(R,X,x){var le=x.ref;return{$$typeof:t,type:R,key:X,ref:le!==void 0?le:null,props:x}}function U(R,X){return de(R.type,X,R.props)}function ee(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function ae(R){var X={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(x){return X[x]})}var De=/\/+/g;function ce(R,X){return typeof R=="object"&&R!==null&&R.key!=null?ae(""+R.key):X.toString(36)}function K(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(q,q):(R.status="pending",R.then(function(X){R.status==="pending"&&(R.status="fulfilled",R.value=X)},function(X){R.status==="pending"&&(R.status="rejected",R.reason=X)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function N(R,X,x,le,ye){var ve=typeof R;(ve==="undefined"||ve==="boolean")&&(R=null);var Oe=!1;if(R===null)Oe=!0;else switch(ve){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(R.$$typeof){case t:case r:Oe=!0;break;case y:return Oe=R._init,N(Oe(R._payload),X,x,le,ye)}}if(Oe)return ye=ye(R),Oe=le===""?"."+ce(R,0):le,oe(ye)?(x="",Oe!=null&&(x=Oe.replace(De,"$&/")+"/"),N(ye,X,x,"",function(Zt){return Zt})):ye!=null&&(ee(ye)&&(ye=U(ye,x+(ye.key==null||R&&R.key===ye.key?"":(""+ye.key).replace(De,"$&/")+"/")+Oe)),X.push(ye)),1;Oe=0;var $e=le===""?".":le+":";if(oe(R))for(var et=0;et<R.length;et++)le=R[et],ve=$e+ce(le,et),Oe+=N(le,X,x,ve,ye);else if(et=b(R),typeof et=="function")for(R=et.call(R),et=0;!(le=R.next()).done;)le=le.value,ve=$e+ce(le,et++),Oe+=N(le,X,x,ve,ye);else if(ve==="object"){if(typeof R.then=="function")return N(K(R),X,x,le,ye);throw X=String(R),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function W(R,X,x){if(R==null)return R;var le=[],ye=0;return N(R,le,"","",function(ve){return X.call(x,ve,ye++)}),le}function re(R){if(R._status===-1){var X=R._result;X=X(),X.then(function(x){(R._status===0||R._status===-1)&&(R._status=1,R._result=x)},function(x){(R._status===0||R._status===-1)&&(R._status=2,R._result=x)}),R._status===-1&&(R._status=0,R._result=X)}if(R._status===1)return R._result.default;throw R._result}var Ee=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},T={map:W,forEach:function(R,X,x){W(R,function(){X.apply(this,arguments)},x)},count:function(R){var X=0;return W(R,function(){X++}),X},toArray:function(R){return W(R,function(X){return X})||[]},only:function(R){if(!ee(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ze.Activity=g,ze.Children=T,ze.Component=A,ze.Fragment=l,ze.Profiler=o,ze.PureComponent=H,ze.StrictMode=u,ze.Suspense=p,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,ze.__COMPILER_RUNTIME={__proto__:null,c:function(R){return M.H.useMemoCache(R)}},ze.cache=function(R){return function(){return R.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(R,X,x){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var le=z({},R.props),ye=R.key;if(X!=null)for(ve in X.key!==void 0&&(ye=""+X.key),X)!te.call(X,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&X.ref===void 0||(le[ve]=X[ve]);var ve=arguments.length-2;if(ve===1)le.children=x;else if(1<ve){for(var Oe=Array(ve),$e=0;$e<ve;$e++)Oe[$e]=arguments[$e+2];le.children=Oe}return de(R.type,ye,le)},ze.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:s,_context:R},R},ze.createElement=function(R,X,x){var le,ye={},ve=null;if(X!=null)for(le in X.key!==void 0&&(ve=""+X.key),X)te.call(X,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ye[le]=X[le]);var Oe=arguments.length-2;if(Oe===1)ye.children=x;else if(1<Oe){for(var $e=Array(Oe),et=0;et<Oe;et++)$e[et]=arguments[et+2];ye.children=$e}if(R&&R.defaultProps)for(le in Oe=R.defaultProps,Oe)ye[le]===void 0&&(ye[le]=Oe[le]);return de(R,ve,ye)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(R){return{$$typeof:d,render:R}},ze.isValidElement=ee,ze.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:re}},ze.memo=function(R,X){return{$$typeof:m,type:R,compare:X===void 0?null:X}},ze.startTransition=function(R){var X=M.T,x={};M.T=x;try{var le=R(),ye=M.S;ye!==null&&ye(x,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(q,Ee)}catch(ve){Ee(ve)}finally{X!==null&&x.types!==null&&(X.types=x.types),M.T=X}},ze.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},ze.use=function(R){return M.H.use(R)},ze.useActionState=function(R,X,x){return M.H.useActionState(R,X,x)},ze.useCallback=function(R,X){return M.H.useCallback(R,X)},ze.useContext=function(R){return M.H.useContext(R)},ze.useDebugValue=function(){},ze.useDeferredValue=function(R,X){return M.H.useDeferredValue(R,X)},ze.useEffect=function(R,X){return M.H.useEffect(R,X)},ze.useEffectEvent=function(R){return M.H.useEffectEvent(R)},ze.useId=function(){return M.H.useId()},ze.useImperativeHandle=function(R,X,x){return M.H.useImperativeHandle(R,X,x)},ze.useInsertionEffect=function(R,X){return M.H.useInsertionEffect(R,X)},ze.useLayoutEffect=function(R,X){return M.H.useLayoutEffect(R,X)},ze.useMemo=function(R,X){return M.H.useMemo(R,X)},ze.useOptimistic=function(R,X){return M.H.useOptimistic(R,X)},ze.useReducer=function(R,X,x){return M.H.useReducer(R,X,x)},ze.useRef=function(R){return M.H.useRef(R)},ze.useState=function(R){return M.H.useState(R)},ze.useSyncExternalStore=function(R,X,x){return M.H.useSyncExternalStore(R,X,x)},ze.useTransition=function(){return M.H.useTransition()},ze.version="19.2.3",ze}var eg;function Nf(){return eg||(eg=1,Xc.exports=k1()),Xc.exports}var Qc={exports:{}},qt={};var tg;function R1(){if(tg)return qt;tg=1;var t=Nf();function r(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(p,m,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:y}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,qt.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return s(p,m,null,y)},qt.flushSync=function(p){var m=c.T,y=u.p;try{if(c.T=null,u.p=2,p)return p()}finally{c.T=m,u.p=y,u.d.f()}},qt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(p,m))},qt.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},qt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,g=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?u.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:w,fetchPriority:b}):y==="script"&&u.d.X(p,{crossOrigin:g,integrity:w,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},qt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);u.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(p)},qt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,g=d(y,m.crossOrigin);u.d.L(p,y,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},qt.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);u.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(p)},qt.requestFormReset=function(p){u.d.r(p)},qt.unstable_batchedUpdates=function(p,m){return p(m)},qt.useFormState=function(p,m,y){return c.H.useFormState(p,m,y)},qt.useFormStatus=function(){return c.H.useHostTransitionStatus()},qt.version="19.2.3",qt}var ng;function A1(){if(ng)return Qc.exports;ng=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Qc.exports=R1(),Qc.exports}var ag;function D1(){if(ag)return vi;ag=1;var t=C1(),r=Nf(),l=A1();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(s(e)!==e)throw Error(u(188))}function m(e){var n=e.alternate;if(!n){if(n=s(e),n===null)throw Error(u(188));return n!==e?null:e}for(var a=e,i=n;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(i=f.return,i!==null){a=i;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return p(f),e;if(h===i)return p(f),n;h=h.sibling}throw Error(u(188))}if(a.return!==i.return)a=f,i=h;else{for(var v=!1,S=f.child;S;){if(S===a){v=!0,a=f,i=h;break}if(S===i){v=!0,i=f,a=h;break}S=S.sibling}if(!v){for(S=h.child;S;){if(S===a){v=!0,a=h,i=f;break}if(S===i){v=!0,i=h,a=f;break}S=S.sibling}if(!v)throw Error(u(189))}}if(a.alternate!==i)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,w=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),H=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var De=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===De?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case A:return"Profiler";case j:return"StrictMode";case oe:return"Suspense";case q:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case H:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case fe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case te:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var K=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Ee=[],T=-1;function R(e){return{current:e}}function X(e){0>T||(e.current=Ee[T],Ee[T]=null,T--)}function x(e,n){T++,Ee[T]=e.current,e.current=n}var le=R(null),ye=R(null),ve=R(null),Oe=R(null);function $e(e,n){switch(x(ve,n),x(ye,e),x(le,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vp(n),e=bp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(le),x(le,e)}function et(){X(le),X(ye),X(ve)}function Zt(e){e.memoizedState!==null&&x(Oe,e);var n=le.current,a=bp(n,e.type);n!==a&&(x(ye,e),x(le,a))}function jn(e){ye.current===e&&(X(le),X(ye)),Oe.current===e&&(X(Oe),di._currentValue=re)}var yt,Nn;function bn(e){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",Nn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Nn}var Ta=!1;function Jt(e,n){if(!e||Ta)return"";Ta=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(V){var I=V}Reflect.construct(e,[],P)}else{try{P.call()}catch(V){I=V}e.call(P.prototype)}}else{try{throw Error()}catch(V){I=V}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(V){if(V&&I&&typeof V.stack=="string")return[V.stack,I.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),v=h[0],S=h[1];if(v&&S){var k=v.split(`
`),Y=S.split(`
`);for(f=i=0;i<k.length&&!k[i].includes("DetermineComponentFrameRoot");)i++;for(;f<Y.length&&!Y[f].includes("DetermineComponentFrameRoot");)f++;if(i===k.length||f===Y.length)for(i=k.length-1,f=Y.length-1;1<=i&&0<=f&&k[i]!==Y[f];)f--;for(;1<=i&&0<=f;i--,f--)if(k[i]!==Y[f]){if(i!==1||f!==1)do if(i--,f--,0>f||k[i]!==Y[f]){var Q=`
`+k[i].replace(" at new "," at ");return e.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",e.displayName)),Q}while(1<=i&&0<=f);break}}}finally{Ta=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?bn(a):""}function Nr(e,n){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return e.child!==n&&n!==null?bn("Suspense Fallback"):bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return bn("Activity");default:return""}}function Lr(e){try{var n="",a=null;do n+=Nr(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var $n=Object.prototype.hasOwnProperty,Ca=t.unstable_scheduleCallback,ir=t.unstable_cancelCallback,Rl=t.unstable_shouldYield,Al=t.unstable_requestPaint,pt=t.unstable_now,ea=t.unstable_getCurrentPriorityLevel,Z=t.unstable_ImmediatePriority,ie=t.unstable_UserBlockingPriority,xe=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Je=t.unstable_IdlePriority,Vt=t.log,ln=t.unstable_setDisableYieldValue,jt=null,nt=null;function Nt(e){if(typeof Vt=="function"&&ln(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(jt,e)}catch{}}var tt=Math.clz32?Math.clz32:Vi,Ln=Math.log,un=Math.LN2;function Vi(e){return e>>>=0,e===0?32:31-(Ln(e)/un|0)|0}var ta=256,ur=262144,ka=4194304;function na(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function or(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var f=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var S=i&134217727;return S!==0?(i=S&~h,i!==0?f=na(i):(v&=S,v!==0?f=na(v):a||(a=S&~e,a!==0&&(f=na(a))))):(S=i&~h,S!==0?f=na(S):v!==0?f=na(v):a||(a=i&~e,a!==0&&(f=na(a)))),f===0?0:n!==0&&n!==f&&(n&h)===0&&(h=f&-f,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:f}function sr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xi(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(){var e=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),e}function Ra(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Aa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function No(e,n,a,i,f,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,k=e.expirationTimes,Y=e.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-tt(a),P=1<<Q;S[Q]=0,k[Q]=-1;var I=Y[Q];if(I!==null)for(Y[Q]=null,Q=0;Q<I.length;Q++){var V=I[Q];V!==null&&(V.lane&=-536870913)}a&=~P}i!==0&&Qi(e,i,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function Qi(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-tt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function C(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-tt(a),f=1<<i;f&n|e[i]&n&&(e[i]|=n),a&=~f}}function O(e,n){var a=n&-n;return a=(a&42)!==0?1:F(a),(a&(e.suspendedLanes|n))!==0?0:a}function F(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ue(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Ip(e.type))}function Se(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var me=Math.random().toString(36).slice(2),he="__reactFiber$"+me,pe="__reactProps$"+me,we="__reactContainer$"+me,ke="__reactEvents$"+me,Te="__reactListeners$"+me,Qe="__reactHandles$"+me,Ie="__reactResources$"+me,gt="__reactMarker$"+me;function vt(e){delete e[he],delete e[pe],delete e[ke],delete e[Te],delete e[Qe]}function bt(e){var n=e[he];if(n)return n;for(var a=e.parentNode;a;){if(n=a[we]||a[he]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=kp(e);e!==null;){if(a=e[he])return a;e=kp(e)}return n}e=a,a=e.parentNode}return null}function Fe(e){if(e=e[he]||e[we]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function _t(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function Pt(e){var n=e[Ie];return n||(n=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dt(e){e[gt]=!0}var Un=new Set,on={};function Hn(e,n){wn(e,n),wn(e+"Capture",n)}function wn(e,n){for(on[e]=n,e=0;e<n.length;e++)Un.add(n[e])}var aa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},hr={};function Ge(e){return $n.call(hr,e)?!0:$n.call(fr,e)?!1:aa.test(e)?hr[e]=!0:(fr[e]=!0,!1)}function xt(e,n,a){if(Ge(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Bn(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dr(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zi(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var f=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dl(e){if(!e._valueTracker){var n=dr(e)?"checked":"value";e._valueTracker=Zi(e,n,""+e[n])}}function fh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=dr(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pb=/[\n"\\]/g;function Sn(e){return e.replace(pb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Lo(e,n,a,i,f,h,v,S){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ve(n)):e.value!==""+Ve(n)&&(e.value=""+Ve(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Uo(e,v,Ve(n)):a!=null?Uo(e,v,Ve(a)):i!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Ve(S):e.removeAttribute("name")}function hh(e,n,a,i,f,h,v,S){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Dl(e);return}a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,S||n===e.value||(e.value=n),e.defaultValue=n}i=i??f,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=S?e.checked:!!i,e.defaultChecked=!!i,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Dl(e)}function Uo(e,n,a){n==="number"&&Ji(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ur(e,n,a,i){if(e=e.options,n){n={};for(var f=0;f<a.length;f++)n["$"+a[f]]=!0;for(a=0;a<e.length;a++)f=n.hasOwnProperty("$"+e[a].value),e[a].selected!==f&&(e[a].selected=f),f&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,f=0;f<e.length;f++){if(e[f].value===a){e[f].selected=!0,i&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function dh(e,n,a){if(n!=null&&(n=""+Ve(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ve(a):""}function mh(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(u(92));if(K(i)){if(1<i.length)throw Error(u(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Ve(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Dl(e)}function Hr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var gb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ph(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||gb.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function gh(e,n,a){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var f in n)i=n[f],n.hasOwnProperty(f)&&a[f]!==i&&ph(e,f,i)}else for(var h in n)n.hasOwnProperty(h)&&ph(e,h,n[h])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pi(e){return vb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ra(){}var Bo=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Yr=null;function yh(e){var n=Fe(e);if(n&&(e=n.stateNode)){var a=e[pe]||null;e:switch(e=n.stateNode,n.type){case"input":if(Lo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var f=i[pe]||null;if(!f)throw Error(u(90));Lo(i,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&fh(i)}break e;case"textarea":dh(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ur(e,!!a.multiple,n,!1)}}}var qo=!1;function vh(e,n,a){if(qo)return e(n,a);qo=!0;try{var i=e(n);return i}finally{if(qo=!1,(Br!==null||Yr!==null)&&(Uu(),Br&&(n=Br,e=Yr,Yr=Br=null,yh(n),e)))for(n=0;n<e.length;n++)yh(e[n])}}function Ml(e,n){var a=e.stateNode;if(a===null)return null;var i=a[pe]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=!1;if(la)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){Io=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{Io=!1}var Da=null,Fo=null,Ki=null;function bh(){if(Ki)return Ki;var e,n=Fo,a=n.length,i,f="value"in Da?Da.value:Da.textContent,h=f.length;for(e=0;e<a&&n[e]===f[e];e++);var v=a-e;for(i=1;i<=v&&n[a-i]===f[h-i];i++);return Ki=f.slice(e,1<i?1-i:void 0)}function Wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function wh(){return!1}function Kt(e){function n(a,i,f,h,v){this._reactName=a,this._targetInst=f,this.type=i,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(h):h[S]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$i:wh,this.isPropagationStopped=wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Kt(mr),_l=g({},mr,{view:0,detail:0}),bb=Kt(_l),Go,Vo,Ol,tu=g({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ol&&(Ol&&e.type==="mousemove"?(Go=e.screenX-Ol.screenX,Vo=e.screenY-Ol.screenY):Vo=Go=0,Ol=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),Sh=Kt(tu),wb=g({},tu,{dataTransfer:0}),Sb=Kt(wb),xb=g({},_l,{relatedTarget:0}),Xo=Kt(xb),Eb=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tb=Kt(Eb),Cb=g({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kb=Kt(Cb),Rb=g({},mr,{data:0}),xh=Kt(Rb),Ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mb[e])?!!n[e]:!1}function Qo(){return zb}var _b=g({},_l,{key:function(e){if(e.key){var n=Ab[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Db[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ob=Kt(_b),jb=g({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Kt(jb),Nb=g({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),Lb=Kt(Nb),Ub=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hb=Kt(Ub),Bb=g({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yb=Kt(Bb),qb=g({},mr,{newState:0,oldState:0}),Ib=Kt(qb),Fb=[9,13,27,32],Zo=la&&"CompositionEvent"in window,jl=null;la&&"documentMode"in document&&(jl=document.documentMode);var Gb=la&&"TextEvent"in window&&!jl,Th=la&&(!Zo||jl&&8<jl&&11>=jl),Ch=" ",kh=!1;function Rh(e,n){switch(e){case"keyup":return Fb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function Vb(e,n){switch(e){case"compositionend":return Ah(n);case"keypress":return n.which!==32?null:(kh=!0,Ch);case"textInput":return e=n.data,e===Ch&&kh?null:e;default:return null}}function Xb(e,n){if(qr)return e==="compositionend"||!Zo&&Rh(e,n)?(e=bh(),Ki=Fo=Da=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Th&&n.locale!=="ko"?null:n.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Qb[e.type]:n==="textarea"}function Mh(e,n,a,i){Br?Yr?Yr.push(i):Yr=[i]:Br=i,n=Gu(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var Nl=null,Ll=null;function Zb(e){hp(e,0)}function nu(e){var n=_t(e);if(fh(n))return e}function zh(e,n){if(e==="change")return n}var _h=!1;if(la){var Jo;if(la){var Po="oninput"in document;if(!Po){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),Po=typeof Oh.oninput=="function"}Jo=Po}else Jo=!1;_h=Jo&&(!document.documentMode||9<document.documentMode)}function jh(){Nl&&(Nl.detachEvent("onpropertychange",Nh),Ll=Nl=null)}function Nh(e){if(e.propertyName==="value"&&nu(Ll)){var n=[];Mh(n,Ll,e,Yo(e)),vh(Zb,n)}}function Jb(e,n,a){e==="focusin"?(jh(),Nl=n,Ll=a,Nl.attachEvent("onpropertychange",Nh)):e==="focusout"&&jh()}function Pb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(Ll)}function Kb(e,n){if(e==="click")return nu(n)}function Wb(e,n){if(e==="input"||e==="change")return nu(n)}function $b(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:$b;function Ul(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var f=a[i];if(!$n.call(n,f)||!sn(e[f],n[f]))return!1}return!0}function Lh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uh(e,n){var a=Lh(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lh(a)}}function Hh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Hh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ji(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ji(e.document)}return n}function Ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var e0=la&&"documentMode"in document&&11>=document.documentMode,Ir=null,Wo=null,Hl=null,$o=!1;function Yh(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$o||Ir==null||Ir!==Ji(i)||(i=Ir,"selectionStart"in i&&Ko(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hl&&Ul(Hl,i)||(Hl=i,i=Gu(Wo,"onSelect"),0<i.length&&(n=new eu("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=Ir)))}function pr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},es={},qh={};la&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function gr(e){if(es[e])return es[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qh)return es[e]=n[a];return e}var Ih=gr("animationend"),Fh=gr("animationiteration"),Gh=gr("animationstart"),t0=gr("transitionrun"),n0=gr("transitionstart"),a0=gr("transitioncancel"),Vh=gr("transitionend"),Xh=new Map,ts="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ts.push("scrollEnd");function Yn(e,n){Xh.set(e,n),Hn(n,[e])}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xn=[],Gr=0,ns=0;function ru(){for(var e=Gr,n=ns=Gr=0;n<e;){var a=xn[n];xn[n++]=null;var i=xn[n];xn[n++]=null;var f=xn[n];xn[n++]=null;var h=xn[n];if(xn[n++]=null,i!==null&&f!==null){var v=i.pending;v===null?f.next=f:(f.next=v.next,v.next=f),i.pending=f}h!==0&&Qh(a,f,h)}}function lu(e,n,a,i){xn[Gr++]=e,xn[Gr++]=n,xn[Gr++]=a,xn[Gr++]=i,ns|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function as(e,n,a,i){return lu(e,n,a,i),iu(e)}function yr(e,n){return lu(e,null,null,n),iu(e)}function Qh(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var f=!1,h=e.return;h!==null;)h.childLanes|=a,i=h.alternate,i!==null&&(i.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&n!==null&&(f=31-tt(a),e=h.hiddenUpdates,i=e[f],i===null?e[f]=[n]:i.push(n),n.lane=a|536870912),h):null}function iu(e){if(50<ii)throw ii=0,hc=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function r0(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,a,i){return new r0(e,n,a,i)}function rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=cn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Zh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function uu(e,n,a,i,f,h){var v=0;if(i=e,typeof e=="function")rs(e)&&(v=1);else if(typeof e=="string")v=s1(e,a,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=cn(31,a,n,f),e.elementType=de,e.lanes=h,e;case z:return vr(a.children,f,h,n);case j:v=8,f|=24;break;case A:return e=cn(12,a,n,f|2),e.elementType=A,e.lanes=h,e;case oe:return e=cn(13,a,n,f),e.elementType=oe,e.lanes=h,e;case q:return e=cn(19,a,n,f),e.elementType=q,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:v=10;break e;case L:v=9;break e;case fe:v=11;break e;case M:v=14;break e;case te:v=16,i=null;break e}v=29,a=Error(u(130,e===null?"null":typeof e,"")),i=null}return n=cn(v,a,n,f),n.elementType=e,n.type=i,n.lanes=h,n}function vr(e,n,a,i){return e=cn(7,e,i,n),e.lanes=a,e}function ls(e,n,a){return e=cn(6,e,null,n),e.lanes=a,e}function Jh(e){var n=cn(18,null,null,0);return n.stateNode=e,n}function is(e,n,a){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ph=new WeakMap;function En(e,n){if(typeof e=="object"&&e!==null){var a=Ph.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Lr(n)},Ph.set(e,n),n)}return{value:e,source:n,stack:Lr(n)}}var Xr=[],Qr=0,ou=null,Bl=0,Tn=[],Cn=0,Ma=null,Vn=1,Xn="";function ua(e,n){Xr[Qr++]=Bl,Xr[Qr++]=ou,ou=e,Bl=n}function Kh(e,n,a){Tn[Cn++]=Vn,Tn[Cn++]=Xn,Tn[Cn++]=Ma,Ma=e;var i=Vn;e=Xn;var f=32-tt(i)-1;i&=~(1<<f),a+=1;var h=32-tt(n)+f;if(30<h){var v=f-f%5;h=(i&(1<<v)-1).toString(32),i>>=v,f-=v,Vn=1<<32-tt(n)+f|a<<f|i,Xn=h+e}else Vn=1<<h|a<<f|i,Xn=e}function us(e){e.return!==null&&(ua(e,1),Kh(e,1,0))}function os(e){for(;e===ou;)ou=Xr[--Qr],Xr[Qr]=null,Bl=Xr[--Qr],Xr[Qr]=null;for(;e===Ma;)Ma=Tn[--Cn],Tn[Cn]=null,Xn=Tn[--Cn],Tn[Cn]=null,Vn=Tn[--Cn],Tn[Cn]=null}function Wh(e,n){Tn[Cn++]=Vn,Tn[Cn++]=Xn,Tn[Cn++]=Ma,Vn=n.id,Xn=n.overflow,Ma=e}var Ut=null,ft=null,Xe=!1,za=null,kn=!1,ss=Error(u(519));function _a(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(En(n,e)),ss}function $h(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[he]=e,n[pe]=i,a){case"dialog":He("cancel",n),He("close",n);break;case"iframe":case"object":case"embed":He("load",n);break;case"video":case"audio":for(a=0;a<oi.length;a++)He(oi[a],n);break;case"source":He("error",n);break;case"img":case"image":case"link":He("error",n),He("load",n);break;case"details":He("toggle",n);break;case"input":He("invalid",n),hh(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":He("invalid",n);break;case"textarea":He("invalid",n),mh(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||gp(n.textContent,a)?(i.popover!=null&&(He("beforetoggle",n),He("toggle",n)),i.onScroll!=null&&He("scroll",n),i.onScrollEnd!=null&&He("scrollend",n),i.onClick!=null&&(n.onclick=ra),n=!0):n=!1,n||_a(e,!0)}function ed(e){for(Ut=e.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:kn=!1;return;case 27:case 3:kn=!0;return;default:Ut=Ut.return}}function Zr(e){if(e!==Ut)return!1;if(!Xe)return ed(e),Xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rc(e.type,e.memoizedProps)),a=!a),a&&ft&&_a(e),ed(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ft=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ft=Cp(e)}else n===27?(n=ft,Xa(e.type)?(e=_c,_c=null,ft=e):ft=n):ft=Ut?An(e.stateNode.nextSibling):null;return!0}function br(){ft=Ut=null,Xe=!1}function cs(){var e=za;return e!==null&&(tn===null?tn=e:tn.push.apply(tn,e),za=null),e}function Yl(e){za===null?za=[e]:za.push(e)}var fs=R(null),wr=null,oa=null;function Oa(e,n,a){x(fs,n._currentValue),n._currentValue=a}function sa(e){e._currentValue=fs.current,X(fs)}function hs(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function ds(e,n,a,i){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var v=f.child;h=h.firstContext;e:for(;h!==null;){var S=h;h=f;for(var k=0;k<n.length;k++)if(S.context===n[k]){h.lanes|=a,S=h.alternate,S!==null&&(S.lanes|=a),hs(h.return,a,e),i||(v=null);break e}h=S.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(u(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),hs(v,a,e),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===e){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Jr(e,n,a,i){e=null;for(var f=n,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(u(387));if(v=v.memoizedProps,v!==null){var S=f.type;sn(f.pendingProps.value,v.value)||(e!==null?e.push(S):e=[S])}}else if(f===Oe.current){if(v=f.alternate,v===null)throw Error(u(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(di):e=[di])}f=f.return}e!==null&&ds(n,e,a,i),n.flags|=262144}function su(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Sr(e){wr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ht(e){return td(wr,e)}function cu(e,n){return wr===null&&Sr(e),td(e,n)}function td(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(u(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var l0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},i0=t.unstable_scheduleCallback,u0=t.unstable_NormalPriority,kt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ms(){return{controller:new l0,data:new Map,refCount:0}}function ql(e){e.refCount--,e.refCount===0&&i0(u0,function(){e.controller.abort()})}var Il=null,ps=0,Pr=0,Kr=null;function o0(e,n){if(Il===null){var a=Il=[];ps=0,Pr=vc(),Kr={status:"pending",value:void 0,then:function(i){a.push(i)}}}return ps++,n.then(nd,nd),n}function nd(){if(--ps===0&&Il!==null){Kr!==null&&(Kr.status="fulfilled");var e=Il;Il=null,Pr=0,Kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function s0(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var f=0;f<a.length;f++)(0,a[f])(n)},function(f){for(i.status="rejected",i.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),i}var ad=N.S;N.S=function(e,n){Ym=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&o0(e,n),ad!==null&&ad(e,n)};var xr=R(null);function gs(){var e=xr.current;return e!==null?e:ot.pooledCache}function fu(e,n){n===null?x(xr,xr.current):x(xr,n.pool)}function rd(){var e=gs();return e===null?null:{parent:kt._currentValue,pool:e}}var Wr=Error(u(460)),ys=Error(u(474)),hu=Error(u(542)),du={then:function(){}};function ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function id(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ra,ra),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e;default:if(typeof n.status=="string")n.then(ra,ra);else{if(e=ot,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=i}},function(i){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e}throw Tr=n,Wr}}function Er(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Tr=a,Wr):a}}var Tr=null;function ud(){if(Tr===null)throw Error(u(459));var e=Tr;return Tr=null,e}function od(e){if(e===Wr||e===hu)throw Error(u(483))}var $r=null,Fl=0;function mu(e){var n=Fl;return Fl+=1,$r===null&&($r=[]),id($r,e,n)}function Gl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pu(e,n){throw n.$$typeof===w?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sd(e){function n(_,D){if(e){var B=_.deletions;B===null?(_.deletions=[D],_.flags|=16):B.push(D)}}function a(_,D){if(!e)return null;for(;D!==null;)n(_,D),D=D.sibling;return null}function i(_){for(var D=new Map;_!==null;)_.key!==null?D.set(_.key,_):D.set(_.index,_),_=_.sibling;return D}function f(_,D){return _=ia(_,D),_.index=0,_.sibling=null,_}function h(_,D,B){return _.index=B,e?(B=_.alternate,B!==null?(B=B.index,B<D?(_.flags|=67108866,D):B):(_.flags|=67108866,D)):(_.flags|=1048576,D)}function v(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function S(_,D,B,J){return D===null||D.tag!==6?(D=ls(B,_.mode,J),D.return=_,D):(D=f(D,B),D.return=_,D)}function k(_,D,B,J){var Ce=B.type;return Ce===z?Q(_,D,B.props.children,J,B.key):D!==null&&(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===te&&Er(Ce)===D.type)?(D=f(D,B.props),Gl(D,B),D.return=_,D):(D=uu(B.type,B.key,B.props,null,_.mode,J),Gl(D,B),D.return=_,D)}function Y(_,D,B,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=is(B,_.mode,J),D.return=_,D):(D=f(D,B.children||[]),D.return=_,D)}function Q(_,D,B,J,Ce){return D===null||D.tag!==7?(D=vr(B,_.mode,J,Ce),D.return=_,D):(D=f(D,B),D.return=_,D)}function P(_,D,B){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=ls(""+D,_.mode,B),D.return=_,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return B=uu(D.type,D.key,D.props,null,_.mode,B),Gl(B,D),B.return=_,B;case E:return D=is(D,_.mode,B),D.return=_,D;case te:return D=Er(D),P(_,D,B)}if(K(D)||ae(D))return D=vr(D,_.mode,B,null),D.return=_,D;if(typeof D.then=="function")return P(_,mu(D),B);if(D.$$typeof===H)return P(_,cu(_,D),B);pu(_,D)}return null}function I(_,D,B,J){var Ce=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return Ce!==null?null:S(_,D,""+B,J);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case b:return B.key===Ce?k(_,D,B,J):null;case E:return B.key===Ce?Y(_,D,B,J):null;case te:return B=Er(B),I(_,D,B,J)}if(K(B)||ae(B))return Ce!==null?null:Q(_,D,B,J,null);if(typeof B.then=="function")return I(_,D,mu(B),J);if(B.$$typeof===H)return I(_,D,cu(_,B),J);pu(_,B)}return null}function V(_,D,B,J,Ce){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return _=_.get(B)||null,S(D,_,""+J,Ce);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return _=_.get(J.key===null?B:J.key)||null,k(D,_,J,Ce);case E:return _=_.get(J.key===null?B:J.key)||null,Y(D,_,J,Ce);case te:return J=Er(J),V(_,D,B,J,Ce)}if(K(J)||ae(J))return _=_.get(B)||null,Q(D,_,J,Ce,null);if(typeof J.then=="function")return V(_,D,B,mu(J),Ce);if(J.$$typeof===H)return V(_,D,B,cu(D,J),Ce);pu(D,J)}return null}function ge(_,D,B,J){for(var Ce=null,Pe=null,be=D,je=D=0,qe=null;be!==null&&je<B.length;je++){be.index>je?(qe=be,be=null):qe=be.sibling;var Ke=I(_,be,B[je],J);if(Ke===null){be===null&&(be=qe);break}e&&be&&Ke.alternate===null&&n(_,be),D=h(Ke,D,je),Pe===null?Ce=Ke:Pe.sibling=Ke,Pe=Ke,be=qe}if(je===B.length)return a(_,be),Xe&&ua(_,je),Ce;if(be===null){for(;je<B.length;je++)be=P(_,B[je],J),be!==null&&(D=h(be,D,je),Pe===null?Ce=be:Pe.sibling=be,Pe=be);return Xe&&ua(_,je),Ce}for(be=i(be);je<B.length;je++)qe=V(be,_,je,B[je],J),qe!==null&&(e&&qe.alternate!==null&&be.delete(qe.key===null?je:qe.key),D=h(qe,D,je),Pe===null?Ce=qe:Pe.sibling=qe,Pe=qe);return e&&be.forEach(function(Ka){return n(_,Ka)}),Xe&&ua(_,je),Ce}function Ae(_,D,B,J){if(B==null)throw Error(u(151));for(var Ce=null,Pe=null,be=D,je=D=0,qe=null,Ke=B.next();be!==null&&!Ke.done;je++,Ke=B.next()){be.index>je?(qe=be,be=null):qe=be.sibling;var Ka=I(_,be,Ke.value,J);if(Ka===null){be===null&&(be=qe);break}e&&be&&Ka.alternate===null&&n(_,be),D=h(Ka,D,je),Pe===null?Ce=Ka:Pe.sibling=Ka,Pe=Ka,be=qe}if(Ke.done)return a(_,be),Xe&&ua(_,je),Ce;if(be===null){for(;!Ke.done;je++,Ke=B.next())Ke=P(_,Ke.value,J),Ke!==null&&(D=h(Ke,D,je),Pe===null?Ce=Ke:Pe.sibling=Ke,Pe=Ke);return Xe&&ua(_,je),Ce}for(be=i(be);!Ke.done;je++,Ke=B.next())Ke=V(be,_,je,Ke.value,J),Ke!==null&&(e&&Ke.alternate!==null&&be.delete(Ke.key===null?je:Ke.key),D=h(Ke,D,je),Pe===null?Ce=Ke:Pe.sibling=Ke,Pe=Ke);return e&&be.forEach(function(w1){return n(_,w1)}),Xe&&ua(_,je),Ce}function ut(_,D,B,J){if(typeof B=="object"&&B!==null&&B.type===z&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case b:e:{for(var Ce=B.key;D!==null;){if(D.key===Ce){if(Ce=B.type,Ce===z){if(D.tag===7){a(_,D.sibling),J=f(D,B.props.children),J.return=_,_=J;break e}}else if(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===te&&Er(Ce)===D.type){a(_,D.sibling),J=f(D,B.props),Gl(J,B),J.return=_,_=J;break e}a(_,D);break}else n(_,D);D=D.sibling}B.type===z?(J=vr(B.props.children,_.mode,J,B.key),J.return=_,_=J):(J=uu(B.type,B.key,B.props,null,_.mode,J),Gl(J,B),J.return=_,_=J)}return v(_);case E:e:{for(Ce=B.key;D!==null;){if(D.key===Ce)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(_,D.sibling),J=f(D,B.children||[]),J.return=_,_=J;break e}else{a(_,D);break}else n(_,D);D=D.sibling}J=is(B,_.mode,J),J.return=_,_=J}return v(_);case te:return B=Er(B),ut(_,D,B,J)}if(K(B))return ge(_,D,B,J);if(ae(B)){if(Ce=ae(B),typeof Ce!="function")throw Error(u(150));return B=Ce.call(B),Ae(_,D,B,J)}if(typeof B.then=="function")return ut(_,D,mu(B),J);if(B.$$typeof===H)return ut(_,D,cu(_,B),J);pu(_,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,D!==null&&D.tag===6?(a(_,D.sibling),J=f(D,B),J.return=_,_=J):(a(_,D),J=ls(B,_.mode,J),J.return=_,_=J),v(_)):a(_,D)}return function(_,D,B,J){try{Fl=0;var Ce=ut(_,D,B,J);return $r=null,Ce}catch(be){if(be===Wr||be===hu)throw be;var Pe=cn(29,be,null,_.mode);return Pe.lanes=J,Pe.return=_,Pe}}}var Cr=sd(!0),cd=sd(!1),ja=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(We&2)!==0){var f=i.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),i.pending=n,n=iu(e),Qh(e,null,a),n}return lu(e,i,n,a),iu(e)}function Vl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,C(e,a)}}function ws(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?f=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?f=h=n:h=h.next=n}else f=h=n;a={baseState:i.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ss=!1;function Xl(){if(Ss){var e=Kr;if(e!==null)throw e}}function Ql(e,n,a,i){Ss=!1;var f=e.updateQueue;ja=!1;var h=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var k=S,Y=k.next;k.next=null,v===null?h=Y:v.next=Y,v=k;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=Y:S.next=Y,Q.lastBaseUpdate=k))}if(h!==null){var P=f.baseState;v=0,Q=Y=k=null,S=h;do{var I=S.lane&-536870913,V=I!==S.lane;if(V?(Ye&I)===I:(i&I)===I){I!==0&&I===Pr&&(Ss=!0),Q!==null&&(Q=Q.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ge=e,Ae=S;I=n;var ut=a;switch(Ae.tag){case 1:if(ge=Ae.payload,typeof ge=="function"){P=ge.call(ut,P,I);break e}P=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Ae.payload,I=typeof ge=="function"?ge.call(ut,P,I):ge,I==null)break e;P=g({},P,I);break e;case 2:ja=!0}}I=S.callback,I!==null&&(e.flags|=64,V&&(e.flags|=8192),V=f.callbacks,V===null?f.callbacks=[I]:V.push(I))}else V={lane:I,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(Y=Q=V,k=P):Q=Q.next=V,v|=I;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;V=S,S=V.next,V.next=null,f.lastBaseUpdate=V,f.shared.pending=null}}while(!0);Q===null&&(k=P),f.baseState=k,f.firstBaseUpdate=Y,f.lastBaseUpdate=Q,h===null&&(f.shared.lanes=0),qa|=v,e.lanes=v,e.memoizedState=P}}function fd(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function hd(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fd(a[e],n)}var el=R(null),gu=R(0);function dd(e,n){e=va,x(gu,e),x(el,n),va=e|n.baseLanes}function xs(){x(gu,va),x(el,el.current)}function Es(){va=gu.current,X(el),X(gu)}var fn=R(null),Rn=null;function Ua(e){var n=e.alternate;x(Et,Et.current&1),x(fn,e),Rn===null&&(n===null||el.current!==null||n.memoizedState!==null)&&(Rn=e)}function Ts(e){x(Et,Et.current),x(fn,e),Rn===null&&(Rn=e)}function md(e){e.tag===22?(x(Et,Et.current),x(fn,e),Rn===null&&(Rn=e)):Ha()}function Ha(){x(Et,Et.current),x(fn,fn.current)}function hn(e){X(fn),Rn===e&&(Rn=null),X(Et)}var Et=R(0);function yu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mc(a)||zc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,_e=null,lt=null,Rt=null,vu=!1,tl=!1,kr=!1,bu=0,Zl=0,nl=null,c0=0;function wt(){throw Error(u(321))}function Cs(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!sn(e[a],n[a]))return!1;return!0}function ks(e,n,a,i,f,h){return ca=h,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Kd:qs,kr=!1,h=a(i,f),kr=!1,tl&&(h=gd(n,a,i,f)),pd(e),h}function pd(e){N.H=Kl;var n=lt!==null&&lt.next!==null;if(ca=0,Rt=lt=_e=null,vu=!1,Zl=0,nl=null,n)throw Error(u(300));e===null||At||(e=e.dependencies,e!==null&&su(e)&&(At=!0))}function gd(e,n,a,i){_e=e;var f=0;do{if(tl&&(nl=null),Zl=0,tl=!1,25<=f)throw Error(u(301));if(f+=1,Rt=lt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=Wd,h=n(a,i)}while(tl);return h}function f0(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Jl(n):n,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(_e.flags|=1024),n}function Rs(){var e=bu!==0;return bu=0,e}function As(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ds(e){if(vu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vu=!1}ca=0,Rt=lt=_e=null,tl=!1,Zl=bu=0,nl=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?_e.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Tt(){if(lt===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var n=Rt===null?_e.memoizedState:Rt.next;if(n!==null)Rt=n,lt=e;else{if(e===null)throw _e.alternate===null?Error(u(467)):Error(u(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},Rt===null?_e.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(e){var n=Zl;return Zl+=1,nl===null&&(nl=[]),e=id(nl,e,n),n=_e,(Rt===null?n.memoizedState:Rt.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Kd:qs),e}function Su(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jl(e);if(e.$$typeof===H)return Ht(e)}throw Error(u(438,String(e)))}function Ms(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=_e.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=U;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function xu(e){var n=Tt();return zs(n,lt,e)}function zs(e,n,a){var i=e.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=a;var f=e.baseQueue,h=i.pending;if(h!==null){if(f!==null){var v=f.next;f.next=h.next,h.next=v}n.baseQueue=f=h,i.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{n=f.next;var S=v=null,k=null,Y=n,Q=!1;do{var P=Y.lane&-536870913;if(P!==Y.lane?(Ye&P)===P:(ca&P)===P){var I=Y.revertLane;if(I===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),P===Pr&&(Q=!0);else if((ca&I)===I){Y=Y.next,I===Pr&&(Q=!0);continue}else P={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},k===null?(S=k=P,v=h):k=k.next=P,_e.lanes|=I,qa|=I;P=Y.action,kr&&a(h,P),h=Y.hasEagerState?Y.eagerState:a(h,P)}else I={lane:P,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},k===null?(S=k=I,v=h):k=k.next=I,_e.lanes|=P,qa|=P;Y=Y.next}while(Y!==null&&Y!==n);if(k===null?v=h:k.next=S,!sn(h,e.memoizedState)&&(At=!0,Q&&(a=Kr,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=k,i.lastRenderedState=h}return f===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _s(e){var n=Tt(),a=n.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var i=a.dispatch,f=a.pending,h=n.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do h=e(h,v.action),v=v.next;while(v!==f);sn(h,n.memoizedState)||(At=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,i]}function yd(e,n,a){var i=_e,f=Tt(),h=Xe;if(h){if(a===void 0)throw Error(u(407));a=a()}else a=n();var v=!sn((lt||f).memoizedState,a);if(v&&(f.memoizedState=a,At=!0),f=f.queue,Ns(wd.bind(null,i,f,e),[e]),f.getSnapshot!==n||v||Rt!==null&&Rt.memoizedState.tag&1){if(i.flags|=2048,al(9,{destroy:void 0},bd.bind(null,i,f,a,n),null),ot===null)throw Error(u(349));h||(ca&127)!==0||vd(i,n,a)}return a}function vd(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=wu(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bd(e,n,a,i){n.value=a,n.getSnapshot=i,Sd(n)&&xd(e)}function wd(e,n,a){return a(function(){Sd(n)&&xd(e)})}function Sd(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!sn(e,a)}catch{return!0}}function xd(e){var n=yr(e,2);n!==null&&nn(n,e,2)}function Os(e){var n=Xt();if(typeof e=="function"){var a=e;if(e=a(),kr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function Ed(e,n,a,i){return e.baseState=a,zs(e,lt,typeof i=="function"?i:fa)}function h0(e,n,a,i,f){if(Cu(e))throw Error(u(485));if(e=n.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};N.T!==null?a(!0):h.isTransition=!1,i(h),a=n.pending,a===null?(h.next=n.pending=h,Td(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Td(e,n){var a=n.action,i=n.payload,f=e.state;if(n.isTransition){var h=N.T,v={};N.T=v;try{var S=a(f,i),k=N.S;k!==null&&k(v,S),Cd(e,n,S)}catch(Y){js(e,n,Y)}finally{h!==null&&v.types!==null&&(h.types=v.types),N.T=h}}else try{h=a(f,i),Cd(e,n,h)}catch(Y){js(e,n,Y)}}function Cd(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){kd(e,n,i)},function(i){return js(e,n,i)}):kd(e,n,a)}function kd(e,n,a){n.status="fulfilled",n.value=a,Rd(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Td(e,a)))}function js(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,Rd(n),n=n.next;while(n!==i)}e.action=null}function Rd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ad(e,n){return n}function Dd(e,n){if(Xe){var a=ot.formState;if(a!==null){e:{var i=_e;if(Xe){if(ft){t:{for(var f=ft,h=kn;f.nodeType!==8;){if(!h){f=null;break t}if(f=An(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){ft=An(f.nextSibling),i=f.data==="F!";break e}}_a(i)}i=!1}i&&(n=a[0])}}return a=Xt(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ad,lastRenderedState:n},a.queue=i,a=Zd.bind(null,_e,i),i.dispatch=a,i=Os(!1),h=Ys.bind(null,_e,!1,i.queue),i=Xt(),f={state:n,dispatch:null,action:e,pending:null},i.queue=f,a=h0.bind(null,_e,f,h,a),f.dispatch=a,i.memoizedState=e,[n,a,!1]}function Md(e){var n=Tt();return zd(n,lt,e)}function zd(e,n,a){if(n=zs(e,n,Ad)[0],e=xu(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Jl(n)}catch(v){throw v===Wr?hu:v}else i=n;n=Tt();var f=n.queue,h=f.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,al(9,{destroy:void 0},d0.bind(null,f,a),null)),[i,h,e]}function d0(e,n){e.action=n}function _d(e){var n=Tt(),a=lt;if(a!==null)return zd(n,a,e);Tt(),n=n.memoizedState,a=Tt();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function al(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=_e.updateQueue,n===null&&(n=wu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Od(){return Tt().memoizedState}function Eu(e,n,a,i){var f=Xt();_e.flags|=e,f.memoizedState=al(1|n,{destroy:void 0},a,i===void 0?null:i)}function Tu(e,n,a,i){var f=Tt();i=i===void 0?null:i;var h=f.memoizedState.inst;lt!==null&&i!==null&&Cs(i,lt.memoizedState.deps)?f.memoizedState=al(n,h,a,i):(_e.flags|=e,f.memoizedState=al(1|n,h,a,i))}function jd(e,n){Eu(8390656,8,e,n)}function Ns(e,n){Tu(2048,8,e,n)}function m0(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=wu(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Nd(e){var n=Tt().memoizedState;return m0({ref:n,nextImpl:e}),function(){if((We&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Ld(e,n){return Tu(4,2,e,n)}function Ud(e,n){return Tu(4,4,e,n)}function Hd(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bd(e,n,a){a=a!=null?a.concat([e]):null,Tu(4,4,Hd.bind(null,n,e),a)}function Ls(){}function Yd(e,n){var a=Tt();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Cs(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function qd(e,n){var a=Tt();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Cs(n,i[1]))return i[0];if(i=e(),kr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[i,n],i}function Us(e,n,a){return a===void 0||(ca&1073741824)!==0&&(Ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Im(),_e.lanes|=e,qa|=e,a)}function Id(e,n,a,i){return sn(a,n)?a:el.current!==null?(e=Us(e,a,i),sn(e,n)||(At=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(Ye&261930)===0?(At=!0,e.memoizedState=a):(e=Im(),_e.lanes|=e,qa|=e,n)}function Fd(e,n,a,i,f){var h=W.p;W.p=h!==0&&8>h?h:8;var v=N.T,S={};N.T=S,Ys(e,!1,n,a);try{var k=f(),Y=N.S;if(Y!==null&&Y(S,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Q=s0(k,i);Pl(e,n,Q,pn(e))}else Pl(e,n,i,pn(e))}catch(P){Pl(e,n,{then:function(){},status:"rejected",reason:P},pn())}finally{W.p=h,v!==null&&S.types!==null&&(v.types=S.types),N.T=v}}function p0(){}function Hs(e,n,a,i){if(e.tag!==5)throw Error(u(476));var f=Gd(e).queue;Fd(e,f,n,re,a===null?p0:function(){return Vd(e),a(i)})}function Gd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Vd(e){var n=Gd(e);n.next===null&&(n=e.alternate.memoizedState),Pl(e,n.next.queue,{},pn())}function Bs(){return Ht(di)}function Xd(){return Tt().memoizedState}function Qd(){return Tt().memoizedState}function g0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pn();e=Na(a);var i=La(n,e,a);i!==null&&(nn(i,n,a),Vl(i,n,a)),n={cache:ms()},e.payload=n;return}n=n.return}}function y0(e,n,a){var i=pn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?Jd(n,a):(a=as(e,n,a,i),a!==null&&(nn(a,e,i),Pd(a,n,i)))}function Zd(e,n,a){var i=pn();Pl(e,n,a,i)}function Pl(e,n,a,i){var f={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Jd(n,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,S=h(v,a);if(f.hasEagerState=!0,f.eagerState=S,sn(S,v))return lu(e,n,f,0),ot===null&&ru(),!1}catch{}if(a=as(e,n,f,i),a!==null)return nn(a,e,i),Pd(a,n,i),!0}return!1}function Ys(e,n,a,i){if(i={lane:2,revertLane:vc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(n)throw Error(u(479))}else n=as(e,a,i,2),n!==null&&nn(n,e,2)}function Cu(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Jd(e,n){tl=vu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Pd(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,C(e,a)}}var Kl={readContext:Ht,use:Su,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt};Kl.useEffectEvent=wt;var Kd={readContext:Ht,use:Su,useCallback:function(e,n){return Xt().memoizedState=[e,n===void 0?null:n],e},useContext:Ht,useEffect:jd,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Eu(4194308,4,Hd.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Eu(4194308,4,e,n)},useInsertionEffect:function(e,n){Eu(4,2,e,n)},useMemo:function(e,n){var a=Xt();n=n===void 0?null:n;var i=e();if(kr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=Xt();if(a!==void 0){var f=a(n);if(kr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else f=n;return i.memoizedState=i.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},i.queue=e,e=e.dispatch=y0.bind(null,_e,e),[i.memoizedState,e]},useRef:function(e){var n=Xt();return e={current:e},n.memoizedState=e},useState:function(e){e=Os(e);var n=e.queue,a=Zd.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ls,useDeferredValue:function(e,n){var a=Xt();return Us(a,e,n)},useTransition:function(){var e=Os(!1);return e=Fd.bind(null,_e,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=_e,f=Xt();if(Xe){if(a===void 0)throw Error(u(407));a=a()}else{if(a=n(),ot===null)throw Error(u(349));(Ye&127)!==0||vd(i,n,a)}f.memoizedState=a;var h={value:a,getSnapshot:n};return f.queue=h,jd(wd.bind(null,i,h,e),[e]),i.flags|=2048,al(9,{destroy:void 0},bd.bind(null,i,h,a,n),null),a},useId:function(){var e=Xt(),n=ot.identifierPrefix;if(Xe){var a=Xn,i=Vn;a=(i&~(1<<32-tt(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=c0++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bs,useFormState:Dd,useActionState:Dd,useOptimistic:function(e){var n=Xt();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ys.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ms,useCacheRefresh:function(){return Xt().memoizedState=g0.bind(null,_e)},useEffectEvent:function(e){var n=Xt(),a={impl:e};return n.memoizedState=a,function(){if((We&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},qs={readContext:Ht,use:Su,useCallback:Yd,useContext:Ht,useEffect:Ns,useImperativeHandle:Bd,useInsertionEffect:Ld,useLayoutEffect:Ud,useMemo:qd,useReducer:xu,useRef:Od,useState:function(){return xu(fa)},useDebugValue:Ls,useDeferredValue:function(e,n){var a=Tt();return Id(a,lt.memoizedState,e,n)},useTransition:function(){var e=xu(fa)[0],n=Tt().memoizedState;return[typeof e=="boolean"?e:Jl(e),n]},useSyncExternalStore:yd,useId:Xd,useHostTransitionStatus:Bs,useFormState:Md,useActionState:Md,useOptimistic:function(e,n){var a=Tt();return Ed(a,lt,e,n)},useMemoCache:Ms,useCacheRefresh:Qd};qs.useEffectEvent=Nd;var Wd={readContext:Ht,use:Su,useCallback:Yd,useContext:Ht,useEffect:Ns,useImperativeHandle:Bd,useInsertionEffect:Ld,useLayoutEffect:Ud,useMemo:qd,useReducer:_s,useRef:Od,useState:function(){return _s(fa)},useDebugValue:Ls,useDeferredValue:function(e,n){var a=Tt();return lt===null?Us(a,e,n):Id(a,lt.memoizedState,e,n)},useTransition:function(){var e=_s(fa)[0],n=Tt().memoizedState;return[typeof e=="boolean"?e:Jl(e),n]},useSyncExternalStore:yd,useId:Xd,useHostTransitionStatus:Bs,useFormState:_d,useActionState:_d,useOptimistic:function(e,n){var a=Tt();return lt!==null?Ed(a,lt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:Qd};Wd.useEffectEvent=Nd;function Is(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fs={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=pn(),f=Na(i);f.payload=n,a!=null&&(f.callback=a),n=La(e,f,i),n!==null&&(nn(n,e,i),Vl(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=pn(),f=Na(i);f.tag=1,f.payload=n,a!=null&&(f.callback=a),n=La(e,f,i),n!==null&&(nn(n,e,i),Vl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pn(),i=Na(a);i.tag=2,n!=null&&(i.callback=n),n=La(e,i,a),n!==null&&(nn(n,e,a),Vl(n,e,a))}};function $d(e,n,a,i,f,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,v):n.prototype&&n.prototype.isPureReactComponent?!Ul(a,i)||!Ul(f,h):!0}function em(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&Fs.enqueueReplaceState(n,n.state,null)}function Rr(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var f in e)a[f]===void 0&&(a[f]=e[f])}return a}function tm(e){au(e)}function nm(e){console.error(e)}function am(e){au(e)}function ku(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function rm(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gs(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){ku(e,n)},a}function lm(e){return e=Na(e),e.tag=3,e}function im(e,n,a,i){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var h=i.value;e.payload=function(){return f(h)},e.callback=function(){rm(n,a,i)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){rm(n,a,i),typeof f!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})})}function v0(e,n,a,i,f){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,f,!0),a=fn.current,a!==null){switch(a.tag){case 31:case 13:return Rn===null?Hu():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=f,i===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),pc(e,i,f)),!1;case 22:return a.flags|=65536,i===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),pc(e,i,f)),!1}throw Error(u(435,a.tag))}return pc(e,i,f),Hu(),!1}if(Xe)return n=fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,i!==ss&&(e=Error(u(422),{cause:i}),Yl(En(e,a)))):(i!==ss&&(n=Error(u(423),{cause:i}),Yl(En(n,a))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,i=En(i,a),f=Gs(e.stateNode,i,f),ws(e,f),St!==4&&(St=2)),!1;var h=Error(u(520),{cause:i});if(h=En(h,a),li===null?li=[h]:li.push(h),St!==4&&(St=2),n===null)return!0;i=En(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=f&-f,a.lanes|=e,e=Gs(a.stateNode,i,e),ws(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ia===null||!Ia.has(h))))return a.flags|=65536,f&=-f,a.lanes|=f,f=lm(f),im(f,e,a,i),ws(a,f),!1}a=a.return}while(a!==null);return!1}var Vs=Error(u(461)),At=!1;function Bt(e,n,a,i){n.child=e===null?cd(n,null,a,i):Cr(n,e.child,a,i)}function um(e,n,a,i,f){a=a.render;var h=n.ref;if("ref"in i){var v={};for(var S in i)S!=="ref"&&(v[S]=i[S])}else v=i;return Sr(n),i=ks(e,n,a,v,h,f),S=Rs(),e!==null&&!At?(As(e,n,f),ha(e,n,f)):(Xe&&S&&us(n),n.flags|=1,Bt(e,n,i,f),n.child)}function om(e,n,a,i,f){if(e===null){var h=a.type;return typeof h=="function"&&!rs(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,sm(e,n,h,i,f)):(e=uu(a.type,null,i,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!$s(e,f)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ul,a(v,i)&&e.ref===n.ref)return ha(e,n,f)}return n.flags|=1,e=ia(h,i),e.ref=n.ref,e.return=n,n.child=e}function sm(e,n,a,i,f){if(e!==null){var h=e.memoizedProps;if(Ul(h,i)&&e.ref===n.ref)if(At=!1,n.pendingProps=i=h,$s(e,f))(e.flags&131072)!==0&&(At=!0);else return n.lanes=e.lanes,ha(e,n,f)}return Xs(e,n,a,i,f)}function cm(e,n,a,i){var f=i.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(i=n.child=e.child,f=0;i!==null;)f=f|i.lanes|i.childLanes,i=i.sibling;i=f&~h}else i=0,n.child=null;return fm(e,n,h,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fu(n,h!==null?h.cachePool:null),h!==null?dd(n,h):xs(),md(n);else return i=n.lanes=536870912,fm(e,n,h!==null?h.baseLanes|a:a,a,i)}else h!==null?(fu(n,h.cachePool),dd(n,h),Ha(),n.memoizedState=null):(e!==null&&fu(n,null),xs(),Ha());return Bt(e,n,f,a),n.child}function Wl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fm(e,n,a,i,f){var h=gs();return h=h===null?null:{parent:kt._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&fu(n,null),xs(),md(n),e!==null&&Jr(e,n,i,!0),n.childLanes=f,null}function Ru(e,n){return n=Du({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function hm(e,n,a){return Cr(n,e.child,null,a),e=Ru(n,n.pendingProps),e.flags|=2,hn(n),n.memoizedState=null,e}function b0(e,n,a){var i=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Xe){if(i.mode==="hidden")return e=Ru(n,i),n.lanes=536870912,Wl(null,e);if(Ts(n),(e=ft)?(e=Tp(e,kn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Vn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=Jh(e),a.return=n,n.child=a,Ut=n,ft=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Ru(n,i)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(Ts(n),f)if(n.flags&256)n.flags&=-257,n=hm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(At||Jr(e,n,a,!1),f=(a&e.childLanes)!==0,At||f){if(i=ot,i!==null&&(v=O(i,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,yr(e,v),nn(i,e,v),Vs;Hu(),n=hm(e,n,a)}else e=h.treeContext,ft=An(v.nextSibling),Ut=n,Xe=!0,za=null,kn=!1,e!==null&&Wh(n,e),n=Ru(n,i),n.flags|=4096;return n}return e=ia(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Au(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xs(e,n,a,i,f){return Sr(n),a=ks(e,n,a,i,void 0,f),i=Rs(),e!==null&&!At?(As(e,n,f),ha(e,n,f)):(Xe&&i&&us(n),n.flags|=1,Bt(e,n,a,f),n.child)}function dm(e,n,a,i,f,h){return Sr(n),n.updateQueue=null,a=gd(n,i,a,f),pd(e),i=Rs(),e!==null&&!At?(As(e,n,h),ha(e,n,h)):(Xe&&i&&us(n),n.flags|=1,Bt(e,n,a,h),n.child)}function mm(e,n,a,i,f){if(Sr(n),n.stateNode===null){var h=Vr,v=a.contextType;typeof v=="object"&&v!==null&&(h=Ht(v)),h=new a(i,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Fs,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=i,h.state=n.memoizedState,h.refs={},vs(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Ht(v):Vr,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Is(n,a,v,i),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Fs.enqueueReplaceState(h,h.state,null),Ql(n,i,h,f),Xl(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){h=n.stateNode;var S=n.memoizedProps,k=Rr(a,S);h.props=k;var Y=h.context,Q=a.contextType;v=Vr,typeof Q=="object"&&Q!==null&&(v=Ht(Q));var P=a.getDerivedStateFromProps;Q=typeof P=="function"||typeof h.getSnapshotBeforeUpdate=="function",S=n.pendingProps!==S,Q||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S||Y!==v)&&em(n,h,i,v),ja=!1;var I=n.memoizedState;h.state=I,Ql(n,i,h,f),Xl(),Y=n.memoizedState,S||I!==Y||ja?(typeof P=="function"&&(Is(n,a,P,i),Y=n.memoizedState),(k=ja||$d(n,a,k,i,I,Y,v))?(Q||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Y),h.props=i,h.state=Y,h.context=v,i=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{h=n.stateNode,bs(e,n),v=n.memoizedProps,Q=Rr(a,v),h.props=Q,P=n.pendingProps,I=h.context,Y=a.contextType,k=Vr,typeof Y=="object"&&Y!==null&&(k=Ht(Y)),S=a.getDerivedStateFromProps,(Y=typeof S=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==P||I!==k)&&em(n,h,i,k),ja=!1,I=n.memoizedState,h.state=I,Ql(n,i,h,f),Xl();var V=n.memoizedState;v!==P||I!==V||ja||e!==null&&e.dependencies!==null&&su(e.dependencies)?(typeof S=="function"&&(Is(n,a,S,i),V=n.memoizedState),(Q=ja||$d(n,a,Q,i,I,V,k)||e!==null&&e.dependencies!==null&&su(e.dependencies))?(Y||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,V,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,V,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=V),h.props=i,h.state=V,h.context=k,i=Q):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),i=!1)}return h=i,Au(e,n),i=(n.flags&128)!==0,h||i?(h=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&i?(n.child=Cr(n,e.child,null,f),n.child=Cr(n,null,a,f)):Bt(e,n,a,f),n.memoizedState=h.state,e=n.child):e=ha(e,n,f),e}function pm(e,n,a,i){return br(),n.flags|=256,Bt(e,n,a,i),n.child}var Qs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zs(e){return{baseLanes:e,cachePool:rd()}}function Js(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=mn),e}function gm(e,n,a){var i=n.pendingProps,f=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),v&&(f=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Xe){if(f?Ua(n):Ha(),(e=ft)?(e=Tp(e,kn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Vn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=Jh(e),a.return=n,n.child=a,Ut=n,ft=null)):e=null,e===null)throw _a(n);return zc(e)?n.lanes=32:n.lanes=536870912,null}var S=i.children;return i=i.fallback,f?(Ha(),f=n.mode,S=Du({mode:"hidden",children:S},f),i=vr(i,f,a,null),S.return=n,i.return=n,S.sibling=i,n.child=S,i=n.child,i.memoizedState=Zs(a),i.childLanes=Js(e,v,a),n.memoizedState=Qs,Wl(null,i)):(Ua(n),Ps(n,S))}var k=e.memoizedState;if(k!==null&&(S=k.dehydrated,S!==null)){if(h)n.flags&256?(Ua(n),n.flags&=-257,n=Ks(e,n,a)):n.memoizedState!==null?(Ha(),n.child=e.child,n.flags|=128,n=null):(Ha(),S=i.fallback,f=n.mode,i=Du({mode:"visible",children:i.children},f),S=vr(S,f,a,null),S.flags|=2,i.return=n,S.return=n,i.sibling=S,n.child=i,Cr(n,e.child,null,a),i=n.child,i.memoizedState=Zs(a),i.childLanes=Js(e,v,a),n.memoizedState=Qs,n=Wl(null,i));else if(Ua(n),zc(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var Y=v.dgst;v=Y,i=Error(u(419)),i.stack="",i.digest=v,Yl({value:i,source:null,stack:null}),n=Ks(e,n,a)}else if(At||Jr(e,n,a,!1),v=(a&e.childLanes)!==0,At||v){if(v=ot,v!==null&&(i=O(v,a),i!==0&&i!==k.retryLane))throw k.retryLane=i,yr(e,i),nn(v,e,i),Vs;Mc(S)||Hu(),n=Ks(e,n,a)}else Mc(S)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,ft=An(S.nextSibling),Ut=n,Xe=!0,za=null,kn=!1,e!==null&&Wh(n,e),n=Ps(n,i.children),n.flags|=4096);return n}return f?(Ha(),S=i.fallback,f=n.mode,k=e.child,Y=k.sibling,i=ia(k,{mode:"hidden",children:i.children}),i.subtreeFlags=k.subtreeFlags&65011712,Y!==null?S=ia(Y,S):(S=vr(S,f,a,null),S.flags|=2),S.return=n,i.return=n,i.sibling=S,n.child=i,Wl(null,i),i=n.child,S=e.child.memoizedState,S===null?S=Zs(a):(f=S.cachePool,f!==null?(k=kt._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=rd(),S={baseLanes:S.baseLanes|a,cachePool:f}),i.memoizedState=S,i.childLanes=Js(e,v,a),n.memoizedState=Qs,Wl(e.child,i)):(Ua(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Ps(e,n){return n=Du({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Du(e,n){return e=cn(22,e,null,n),e.lanes=0,e}function Ks(e,n,a){return Cr(n,e.child,null,a),e=Ps(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ym(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),hs(e.return,n,a)}function Ws(e,n,a,i,f,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:f,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=i,v.tail=a,v.tailMode=f,v.treeForkCount=h)}function vm(e,n,a){var i=n.pendingProps,f=i.revealOrder,h=i.tail;i=i.children;var v=Et.current,S=(v&2)!==0;if(S?(v=v&1|2,n.flags|=128):v&=1,x(Et,v),Bt(e,n,i,a),i=Xe?Bl:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,a,n);else if(e.tag===19)ym(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(a=n.child,f=null;a!==null;)e=a.alternate,e!==null&&yu(e)===null&&(f=a),a=a.sibling;a=f,a===null?(f=n.child,n.child=null):(f=a.sibling,a.sibling=null),Ws(n,!1,f,a,h,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&yu(e)===null){n.child=f;break}e=f.sibling,f.sibling=a,a=f,f=e}Ws(n,!0,a,null,h,i);break;case"together":Ws(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $s(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&su(e)))}function w0(e,n,a){switch(n.tag){case 3:$e(n,n.stateNode.containerInfo),Oa(n,kt,e.memoizedState.cache),br();break;case 27:case 5:Zt(n);break;case 4:$e(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ts(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gm(e,n,a):(Ua(n),e=ha(e,n,a),e!==null?e.sibling:null);Ua(n);break;case 19:var f=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Jr(e,n,a,!1),i=(a&n.childLanes)!==0),f){if(i)return vm(e,n,a);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),x(Et,Et.current),i)break;return null;case 22:return n.lanes=0,cm(e,n,a,n.pendingProps);case 24:Oa(n,kt,e.memoizedState.cache)}return ha(e,n,a)}function bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)At=!0;else{if(!$s(e,a)&&(n.flags&128)===0)return At=!1,w0(e,n,a);At=(e.flags&131072)!==0}else At=!1,Xe&&(n.flags&1048576)!==0&&Kh(n,Bl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Er(n.elementType),n.type=e,typeof e=="function")rs(e)?(i=Rr(e,i),n.tag=1,n=mm(null,n,e,i,a)):(n.tag=0,n=Xs(null,n,e,i,a));else{if(e!=null){var f=e.$$typeof;if(f===fe){n.tag=11,n=um(null,n,e,i,a);break e}else if(f===M){n.tag=14,n=om(null,n,e,i,a);break e}}throw n=ce(e)||e,Error(u(306,n,""))}}return n;case 0:return Xs(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,f=Rr(i,n.pendingProps),mm(e,n,i,f,a);case 3:e:{if($e(n,n.stateNode.containerInfo),e===null)throw Error(u(387));i=n.pendingProps;var h=n.memoizedState;f=h.element,bs(e,n),Ql(n,i,null,a);var v=n.memoizedState;if(i=v.cache,Oa(n,kt,i),i!==h.cache&&ds(n,[kt],a,!0),Xl(),i=v.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=pm(e,n,i,a);break e}else if(i!==f){f=En(Error(u(424)),n),Yl(f),n=pm(e,n,i,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ft=An(e.firstChild),Ut=n,Xe=!0,za=null,kn=!0,a=cd(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(br(),i===f){n=ha(e,n,a);break e}Bt(e,n,i,a)}n=n.child}return n;case 26:return Au(e,n),e===null?(a=Mp(n.type,null,n.pendingProps,null))?n.memoizedState=a:Xe||(a=n.type,e=n.pendingProps,i=Vu(ve.current).createElement(a),i[he]=n,i[pe]=e,Yt(i,a,e),dt(i),n.stateNode=i):n.memoizedState=Mp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&Xe&&(i=n.stateNode=Rp(n.type,n.pendingProps,ve.current),Ut=n,kn=!0,f=ft,Xa(n.type)?(_c=f,ft=An(i.firstChild)):ft=f),Bt(e,n,n.pendingProps.children,a),Au(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Xe&&((f=i=ft)&&(i=P0(i,n.type,n.pendingProps,kn),i!==null?(n.stateNode=i,Ut=n,ft=An(i.firstChild),kn=!1,f=!0):f=!1),f||_a(n)),Zt(n),f=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,i=h.children,Rc(f,h)?i=null:v!==null&&Rc(f,v)&&(n.flags|=32),n.memoizedState!==null&&(f=ks(e,n,f0,null,null,a),di._currentValue=f),Au(e,n),Bt(e,n,i,a),n.child;case 6:return e===null&&Xe&&((e=a=ft)&&(a=K0(a,n.pendingProps,kn),a!==null?(n.stateNode=a,Ut=n,ft=null,e=!0):e=!1),e||_a(n)),null;case 13:return gm(e,n,a);case 4:return $e(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=Cr(n,null,i,a):Bt(e,n,i,a),n.child;case 11:return um(e,n,n.type,n.pendingProps,a);case 7:return Bt(e,n,n.pendingProps,a),n.child;case 8:return Bt(e,n,n.pendingProps.children,a),n.child;case 12:return Bt(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,Oa(n,n.type,i.value),Bt(e,n,i.children,a),n.child;case 9:return f=n.type._context,i=n.pendingProps.children,Sr(n),f=Ht(f),i=i(f),n.flags|=1,Bt(e,n,i,a),n.child;case 14:return om(e,n,n.type,n.pendingProps,a);case 15:return sm(e,n,n.type,n.pendingProps,a);case 19:return vm(e,n,a);case 31:return b0(e,n,a);case 22:return cm(e,n,a,n.pendingProps);case 24:return Sr(n),i=Ht(kt),e===null?(f=gs(),f===null&&(f=ot,h=ms(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=a),f=h),n.memoizedState={parent:i,cache:f},vs(n),Oa(n,kt,f)):((e.lanes&a)!==0&&(bs(e,n),Ql(n,null,null,a),Xl()),f=e.memoizedState,h=n.memoizedState,f.parent!==i?(f={parent:i,cache:i},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Oa(n,kt,i)):(i=h.cache,Oa(n,kt,i),i!==f.cache&&ds(n,[kt],a,!0))),Bt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function da(e){e.flags|=4}function ec(e,n,a,i,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Xm())e.flags|=8192;else throw Tr=du,ys}else e.flags&=-16777217}function wm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Np(n))if(Xm())e.flags|=8192;else throw Tr=du,ys}function Mu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cr():536870912,e.lanes|=n,ul|=n)}function $l(e,n){if(!Xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var f=e.child;f!==null;)a|=f.lanes|f.childLanes,i|=f.subtreeFlags&65011712,i|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)a|=f.lanes|f.childLanes,i|=f.subtreeFlags,i|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function S0(e,n,a){var i=n.pendingProps;switch(os(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return ht(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),sa(kt),et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cs())),ht(n),null;case 26:var f=n.type,h=n.memoizedState;return e===null?(da(n),h!==null?(ht(n),wm(n,h)):(ht(n),ec(n,f,null,i,a))):h?h!==e.memoizedState?(da(n),ht(n),wm(n,h)):(ht(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&da(n),ht(n),ec(n,f,e,i,a)),null;case 27:if(jn(n),a=ve.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&da(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return ht(n),null}e=le.current,Zr(n)?$h(n):(e=Rp(f,i,a),n.stateNode=e,da(n))}return ht(n),null;case 5:if(jn(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&da(n);else{if(!i){if(n.stateNode===null)throw Error(u(166));return ht(n),null}if(h=le.current,Zr(n))$h(n);else{var v=Vu(ve.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof i.is=="string"?v.createElement("select",{is:i.is}):v.createElement("select"),i.multiple?h.multiple=!0:i.size&&(h.size=i.size);break;default:h=typeof i.is=="string"?v.createElement(f,{is:i.is}):v.createElement(f)}}h[he]=n,h[pe]=i;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;e:switch(Yt(h,f,i),f){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&da(n)}}return ht(n),ec(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&da(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(u(166));if(e=ve.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,f=Ut,f!==null)switch(f.tag){case 27:case 5:i=f.memoizedProps}e[he]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||gp(e.nodeValue,a)),e||_a(n,!0)}else e=Vu(e).createTextNode(i),e[he]=n,n.stateNode=e}return ht(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Zr(n),a!==null){if(e===null){if(!i)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[he]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),e=!1}else a=cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(hn(n),n):(hn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return ht(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Zr(n),i!==null&&i.dehydrated!==null){if(e===null){if(!f)throw Error(u(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(u(317));f[he]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),f=!1}else f=cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(hn(n),n):(hn(n),null)}return hn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,f=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(f=i.alternate.memoizedState.cachePool.pool),h=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==f&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Mu(n,n.updateQueue),ht(n),null);case 4:return et(),e===null&&xc(n.stateNode.containerInfo),ht(n),null;case 10:return sa(n.type),ht(n),null;case 19:if(X(Et),i=n.memoizedState,i===null)return ht(n),null;if(f=(n.flags&128)!==0,h=i.rendering,h===null)if(f)$l(i,!1);else{if(St!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=yu(e),h!==null){for(n.flags|=128,$l(i,!1),e=h.updateQueue,n.updateQueue=e,Mu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Zh(a,e),a=a.sibling;return x(Et,Et.current&1|2),Xe&&ua(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&pt()>Nu&&(n.flags|=128,f=!0,$l(i,!1),n.lanes=4194304)}else{if(!f)if(e=yu(h),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,Mu(n,e),$l(i,!0),i.tail===null&&i.tailMode==="hidden"&&!h.alternate&&!Xe)return ht(n),null}else 2*pt()-i.renderingStartTime>Nu&&a!==536870912&&(n.flags|=128,f=!0,$l(i,!1),n.lanes=4194304);i.isBackwards?(h.sibling=n.child,n.child=h):(e=i.last,e!==null?e.sibling=h:n.child=h,i.last=h)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=pt(),e.sibling=null,a=Et.current,x(Et,f?a&1|2:a&1),Xe&&ua(n,i.treeForkCount),e):(ht(n),null);case 22:case 23:return hn(n),Es(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),a=n.updateQueue,a!==null&&Mu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&X(xr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(kt),ht(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function x0(e,n){switch(os(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(kt),et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return jn(n),null;case 31:if(n.memoizedState!==null){if(hn(n),n.alternate===null)throw Error(u(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(hn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));br()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Et),null;case 4:return et(),null;case 10:return sa(n.type),null;case 22:case 23:return hn(n),Es(),e!==null&&X(xr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(kt),null;case 25:return null;default:return null}}function Sm(e,n){switch(os(n),n.tag){case 3:sa(kt),et();break;case 26:case 27:case 5:jn(n);break;case 4:et();break;case 31:n.memoizedState!==null&&hn(n);break;case 13:hn(n);break;case 19:X(Et);break;case 10:sa(n.type);break;case 22:case 23:hn(n),Es(),e!==null&&X(xr);break;case 24:sa(kt)}}function ei(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var f=i.next;a=f;do{if((a.tag&e)===e){i=void 0;var h=a.create,v=a.inst;i=h(),v.destroy=i}a=a.next}while(a!==f)}}catch(S){rt(n,n.return,S)}}function Ba(e,n,a){try{var i=n.updateQueue,f=i!==null?i.lastEffect:null;if(f!==null){var h=f.next;i=h;do{if((i.tag&e)===e){var v=i.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,f=n;var k=a,Y=S;try{Y()}catch(Q){rt(f,k,Q)}}}i=i.next}while(i!==h)}}catch(Q){rt(n,n.return,Q)}}function xm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hd(n,a)}catch(i){rt(e,e.return,i)}}}function Em(e,n,a){a.props=Rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){rt(e,n,i)}}function ti(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(f){rt(e,n,f)}}function Qn(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(f){rt(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){rt(e,n,f)}else a.current=null}function Tm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(f){rt(e,e.return,f)}}function tc(e,n,a){try{var i=e.stateNode;G0(i,e.type,a,n),i[pe]=n}catch(f){rt(e,e.return,f)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ra));else if(i!==4&&(i===27&&Xa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ac(e,n,a),e=e.sibling;e!==null;)ac(e,n,a),e=e.sibling}function zu(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zu(e,n,a),e=e.sibling;e!==null;)zu(e,n,a),e=e.sibling}function km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Yt(n,i,a),n[he]=e,n[pe]=a}catch(h){rt(e,e.return,h)}}var ma=!1,Dt=!1,rc=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function E0(e,n){if(e=e.containerInfo,Cc=Wu,e=Bh(e),Ko(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var f=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var v=0,S=-1,k=-1,Y=0,Q=0,P=e,I=null;t:for(;;){for(var V;P!==a||f!==0&&P.nodeType!==3||(S=v+f),P!==h||i!==0&&P.nodeType!==3||(k=v+i),P.nodeType===3&&(v+=P.nodeValue.length),(V=P.firstChild)!==null;)I=P,P=V;for(;;){if(P===e)break t;if(I===a&&++Y===f&&(S=v),I===h&&++Q===i&&(k=v),(V=P.nextSibling)!==null)break;P=I,I=P.parentNode}P=V}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:e,selectionRange:a},Wu=!1,Ot=n;Ot!==null;)if(n=Ot,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ot=e;else for(;Ot!==null;){switch(n=Ot,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)f=e[a],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,f=h.memoizedProps,h=h.memoizedState,i=a.stateNode;try{var ge=Rr(a.type,f);e=i.getSnapshotBeforeUpdate(ge,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ae){rt(a,a.return,Ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Dc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Ot=e;break}Ot=n.return}}function Am(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),i&4&&ei(5,a);break;case 1:if(ga(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){rt(a,a.return,v)}else{var f=Rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){rt(a,a.return,v)}}i&64&&xm(a),i&512&&ti(a,a.return);break;case 3:if(ga(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hd(e,n)}catch(v){rt(a,a.return,v)}}break;case 27:n===null&&i&4&&km(a);case 26:case 5:ga(e,a),n===null&&i&4&&Tm(a),i&512&&ti(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),i&4&&zm(e,a);break;case 13:ga(e,a),i&4&&_m(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_0.bind(null,a),W0(e,a))));break;case 22:if(i=a.memoizedState!==null||ma,!i){n=n!==null&&n.memoizedState!==null||Dt,f=ma;var h=Dt;ma=i,(Dt=n)&&!h?ya(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),ma=f,Dt=h}break;case 30:break;default:ga(e,a)}}function Dm(e){var n=e.alternate;n!==null&&(e.alternate=null,Dm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mt=null,Wt=!1;function pa(e,n,a){for(a=a.child;a!==null;)Mm(e,n,a),a=a.sibling}function Mm(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:Dt||Qn(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Qn(a,n);var i=mt,f=Wt;Xa(a.type)&&(mt=a.stateNode,Wt=!1),pa(e,n,a),ci(a.stateNode),mt=i,Wt=f;break;case 5:Dt||Qn(a,n);case 6:if(i=mt,f=Wt,mt=null,pa(e,n,a),mt=i,Wt=f,mt!==null)if(Wt)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(a.stateNode)}catch(h){rt(a,n,h)}else try{mt.removeChild(a.stateNode)}catch(h){rt(a,n,h)}break;case 18:mt!==null&&(Wt?(e=mt,xp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pl(e)):xp(mt,a.stateNode));break;case 4:i=mt,f=Wt,mt=a.stateNode.containerInfo,Wt=!0,pa(e,n,a),mt=i,Wt=f;break;case 0:case 11:case 14:case 15:Ba(2,a,n),Dt||Ba(4,a,n),pa(e,n,a);break;case 1:Dt||(Qn(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Em(a,n,i)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:Dt=(i=Dt)||a.memoizedState!==null,pa(e,n,a),Dt=i;break;default:pa(e,n,a)}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(a){rt(n,n.return,a)}}}function _m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(a){rt(n,n.return,a)}}function T0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rm),n;default:throw Error(u(435,e.tag))}}function _u(e,n){var a=T0(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var f=O0.bind(null,e,i);i.then(f,f)}})}function $t(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var f=a[i],h=e,v=n,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(Xa(S.type)){mt=S.stateNode,Wt=!1;break e}break;case 5:mt=S.stateNode,Wt=!1;break e;case 3:case 4:mt=S.stateNode.containerInfo,Wt=!0;break e}S=S.return}if(mt===null)throw Error(u(160));Mm(h,v,f),mt=null,Wt=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Om(n,e),n=n.sibling}var qn=null;function Om(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$t(n,e),en(e),i&4&&(Ba(3,e,e.return),ei(3,e),Ba(5,e,e.return));break;case 1:$t(n,e),en(e),i&512&&(Dt||a===null||Qn(a,a.return)),i&64&&ma&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var f=qn;if($t(n,e),en(e),i&512&&(Dt||a===null||Qn(a,a.return)),i&4){var h=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,f=f.ownerDocument||f;t:switch(i){case"title":h=f.getElementsByTagName("title")[0],(!h||h[gt]||h[he]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(i),f.head.insertBefore(h,f.querySelector("head > title"))),Yt(h,i,a),h[he]=e,dt(h),i=h;break e;case"link":var v=Op("link","href",f).get(i+(a.href||""));if(v){for(var S=0;S<v.length;S++)if(h=v[S],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(S,1);break t}}h=f.createElement(i),Yt(h,i,a),f.head.appendChild(h);break;case"meta":if(v=Op("meta","content",f).get(i+(a.content||""))){for(S=0;S<v.length;S++)if(h=v[S],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(S,1);break t}}h=f.createElement(i),Yt(h,i,a),f.head.appendChild(h);break;default:throw Error(u(468,i))}h[he]=e,dt(h),i=h}e.stateNode=i}else jp(f,e.type,e.stateNode);else e.stateNode=_p(f,i,e.memoizedProps);else h!==i?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,i===null?jp(f,e.type,e.stateNode):_p(f,i,e.memoizedProps)):i===null&&e.stateNode!==null&&tc(e,e.memoizedProps,a.memoizedProps)}break;case 27:$t(n,e),en(e),i&512&&(Dt||a===null||Qn(a,a.return)),a!==null&&i&4&&tc(e,e.memoizedProps,a.memoizedProps);break;case 5:if($t(n,e),en(e),i&512&&(Dt||a===null||Qn(a,a.return)),e.flags&32){f=e.stateNode;try{Hr(f,"")}catch(ge){rt(e,e.return,ge)}}i&4&&e.stateNode!=null&&(f=e.memoizedProps,tc(e,f,a!==null?a.memoizedProps:f)),i&1024&&(rc=!0);break;case 6:if($t(n,e),en(e),i&4){if(e.stateNode===null)throw Error(u(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ge){rt(e,e.return,ge)}}break;case 3:if(Zu=null,f=qn,qn=Xu(n.containerInfo),$t(n,e),qn=f,en(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{pl(n.containerInfo)}catch(ge){rt(e,e.return,ge)}rc&&(rc=!1,jm(e));break;case 4:i=qn,qn=Xu(e.stateNode.containerInfo),$t(n,e),en(e),qn=i;break;case 12:$t(n,e),en(e);break;case 31:$t(n,e),en(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_u(e,i)));break;case 13:$t(n,e),en(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ju=pt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_u(e,i)));break;case 22:f=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,Y=ma,Q=Dt;if(ma=Y||f,Dt=Q||k,$t(n,e),Dt=Q,ma=Y,en(e),i&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(a===null||k||ma||Dt||Ar(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(h=k.stateNode,f)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=k.stateNode;var P=k.memoizedProps.style,I=P!=null&&P.hasOwnProperty("display")?P.display:null;S.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(ge){rt(k,k.return,ge)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(ge){rt(k,k.return,ge)}}}else if(n.tag===18){if(a===null){k=n;try{var V=k.stateNode;f?Ep(V,!0):Ep(k.stateNode,!1)}catch(ge){rt(k,k.return,ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,_u(e,a))));break;case 19:$t(n,e),en(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_u(e,i)));break;case 30:break;case 21:break;default:$t(n,e),en(e)}}function en(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(Cm(i)){a=i;break}i=i.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var f=a.stateNode,h=nc(e);zu(e,h,f);break;case 5:var v=a.stateNode;a.flags&32&&(Hr(v,""),a.flags&=-33);var S=nc(e);zu(e,S,v);break;case 3:case 4:var k=a.stateNode.containerInfo,Y=nc(e);ac(e,Y,k);break;default:throw Error(u(161))}}catch(Q){rt(e,e.return,Q)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Am(e,n.alternate,n),n=n.sibling}function Ar(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ar(n);break;case 1:Qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Em(n,n.return,a),Ar(n);break;case 27:ci(n.stateNode);case 26:case 5:Qn(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}e=e.sibling}}function ya(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,f=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:ya(f,h,a),ei(4,h);break;case 1:if(ya(f,h,a),i=h,f=i.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Y){rt(i,i.return,Y)}if(i=h,f=i.updateQueue,f!==null){var S=i.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)fd(k[f],S)}catch(Y){rt(i,i.return,Y)}}a&&v&64&&xm(h),ti(h,h.return);break;case 27:km(h);case 26:case 5:ya(f,h,a),a&&i===null&&v&4&&Tm(h),ti(h,h.return);break;case 12:ya(f,h,a);break;case 31:ya(f,h,a),a&&v&4&&zm(f,h);break;case 13:ya(f,h,a),a&&v&4&&_m(f,h);break;case 22:h.memoizedState===null&&ya(f,h,a),ti(h,h.return);break;case 30:break;default:ya(f,h,a)}n=n.sibling}}function lc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ql(a))}function ic(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ql(e))}function In(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Nm(e,n,a,i),n=n.sibling}function Nm(e,n,a,i){var f=n.flags;switch(n.tag){case 0:case 11:case 15:In(e,n,a,i),f&2048&&ei(9,n);break;case 1:In(e,n,a,i);break;case 3:In(e,n,a,i),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ql(e)));break;case 12:if(f&2048){In(e,n,a,i),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,S=h.onPostCommit;typeof S=="function"&&S(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){rt(n,n.return,k)}}else In(e,n,a,i);break;case 31:In(e,n,a,i);break;case 13:In(e,n,a,i);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?In(e,n,a,i):ni(e,n):h._visibility&2?In(e,n,a,i):(h._visibility|=2,rl(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),f&2048&&lc(v,n);break;case 24:In(e,n,a,i),f&2048&&ic(n.alternate,n);break;default:In(e,n,a,i)}}function rl(e,n,a,i,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,S=a,k=i,Y=v.flags;switch(v.tag){case 0:case 11:case 15:rl(h,v,S,k,f),ei(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?rl(h,v,S,k,f):ni(h,v):(Q._visibility|=2,rl(h,v,S,k,f)),f&&Y&2048&&lc(v.alternate,v);break;case 24:rl(h,v,S,k,f),f&&Y&2048&&ic(v.alternate,v);break;default:rl(h,v,S,k,f)}n=n.sibling}}function ni(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,f=i.flags;switch(i.tag){case 22:ni(a,i),f&2048&&lc(i.alternate,i);break;case 24:ni(a,i),f&2048&&ic(i.alternate,i);break;default:ni(a,i)}n=n.sibling}}var ai=8192;function ll(e,n,a){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Lm(e,n,a),e=e.sibling}function Lm(e,n,a){switch(e.tag){case 26:ll(e,n,a),e.flags&ai&&e.memoizedState!==null&&c1(a,qn,e.memoizedState,e.memoizedProps);break;case 5:ll(e,n,a);break;case 3:case 4:var i=qn;qn=Xu(e.stateNode.containerInfo),ll(e,n,a),qn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ai,ai=16777216,ll(e,n,a),ai=i):ll(e,n,a));break;default:ll(e,n,a)}}function Um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ri(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Ot=i,Bm(i,e)}Um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ou(e)):ri(e);break;default:ri(e)}}function Ou(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Ot=i,Bm(i,e)}Um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ou(n));break;default:Ou(n)}e=e.sibling}}function Bm(e,n){for(;Ot!==null;){var a=Ot;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ql(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ot=i;else e:for(a=e;Ot!==null;){i=Ot;var f=i.sibling,h=i.return;if(Dm(i),i===a){Ot=null;break e}if(f!==null){f.return=h,Ot=f;break e}Ot=h}}}var C0={getCacheForType:function(e){var n=Ht(kt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ht(kt).controller.signal}},k0=typeof WeakMap=="function"?WeakMap:Map,We=0,ot=null,Ue=null,Ye=0,at=0,dn=null,Ya=!1,il=!1,uc=!1,va=0,St=0,qa=0,Dr=0,oc=0,mn=0,ul=0,li=null,tn=null,sc=!1,ju=0,Ym=0,Nu=1/0,Lu=null,Ia=null,zt=0,Fa=null,ol=null,ba=0,cc=0,fc=null,qm=null,ii=0,hc=null;function pn(){return(We&2)!==0&&Ye!==0?Ye&-Ye:N.T!==null?vc():ue()}function Im(){if(mn===0)if((Ye&536870912)===0||Xe){var e=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),mn=e}else mn=536870912;return e=fn.current,e!==null&&(e.flags|=32),mn}function nn(e,n,a){(e===ot&&(at===2||at===9)||e.cancelPendingCommit!==null)&&(sl(e,0),Ga(e,Ye,mn,!1)),Aa(e,a),((We&2)===0||e!==ot)&&(e===ot&&((We&2)===0&&(Dr|=a),St===4&&Ga(e,Ye,mn,!1)),Zn(e))}function Fm(e,n,a){if((We&6)!==0)throw Error(u(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||sr(e,n),f=i?D0(e,n):mc(e,n,!0),h=i;do{if(f===0){il&&!i&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!R0(a)){f=mc(e,n,!1),h=!1;continue}if(f===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var S=e;f=li;var k=S.current.memoizedState.isDehydrated;if(k&&(sl(S,v).flags|=256),v=mc(S,v,!1),v!==2){if(uc&&!k){S.errorRecoveryDisabledLanes|=h,Dr|=h,f=4;break e}h=tn,tn=f,h!==null&&(tn===null?tn=h:tn.push.apply(tn,h))}f=v}if(h=!1,f!==2)continue}}if(f===1){sl(e,0),Ga(e,n,0,!0);break}e:{switch(i=e,h=f,h){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Ga(i,n,mn,!Ya);break e;case 2:tn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(f=ju+300-pt(),10<f)){if(Ga(i,n,mn,!Ya),or(i,0,!0)!==0)break e;ba=n,i.timeoutHandle=wp(Gm.bind(null,i,a,tn,Lu,sc,n,mn,Dr,ul,Ya,h,"Throttled",-0,0),f);break e}Gm(i,a,tn,Lu,sc,n,mn,Dr,ul,Ya,h,null,-0,0)}}break}while(!0);Zn(e)}function Gm(e,n,a,i,f,h,v,S,k,Y,Q,P,I,V){if(e.timeoutHandle=-1,P=n.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ra},Lm(n,h,P);var ge=(h&62914560)===h?ju-pt():(h&4194048)===h?Ym-pt():0;if(ge=f1(P,ge),ge!==null){ba=h,e.cancelPendingCommit=ge(Wm.bind(null,e,n,h,a,i,f,v,S,k,Q,P,null,I,V)),Ga(e,h,v,!Y);return}}Wm(e,n,h,a,i,f,v,S,k)}function R0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var f=a[i],h=f.getSnapshot;f=f.value;try{if(!sn(h(),f))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,i){n&=~oc,n&=~Dr,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var f=n;0<f;){var h=31-tt(f),v=1<<h;i[h]=-1,f&=~v}a!==0&&Qi(e,a,n)}function Uu(){return(We&6)===0?(ui(0),!1):!0}function dc(){if(Ue!==null){if(at===0)var e=Ue.return;else e=Ue,oa=wr=null,Ds(e),$r=null,Fl=0,e=Ue;for(;e!==null;)Sm(e.alternate,e),e=e.return;Ue=null}}function sl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Q0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ba=0,dc(),ot=e,Ue=a=ia(e.current,null),Ye=n,at=0,dn=null,Ya=!1,il=sr(e,n),uc=!1,ul=mn=oc=Dr=qa=St=0,tn=li=null,sc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var f=31-tt(i),h=1<<f;n|=e[f],i&=~h}return va=n,ru(),a}function Vm(e,n){_e=null,N.H=Kl,n===Wr||n===hu?(n=ud(),at=3):n===ys?(n=ud(),at=4):at=n===Vs?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,dn=n,Ue===null&&(St=1,ku(e,En(n,e.current)))}function Xm(){var e=fn.current;return e===null?!0:(Ye&4194048)===Ye?Rn===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?e===Rn:!1}function Qm(){var e=N.H;return N.H=Kl,e===null?Kl:e}function Zm(){var e=N.A;return N.A=C0,e}function Hu(){St=4,Ya||(Ye&4194048)!==Ye&&fn.current!==null||(il=!0),(qa&134217727)===0&&(Dr&134217727)===0||ot===null||Ga(ot,Ye,mn,!1)}function mc(e,n,a){var i=We;We|=2;var f=Qm(),h=Zm();(ot!==e||Ye!==n)&&(Lu=null,sl(e,n)),n=!1;var v=St;e:do try{if(at!==0&&Ue!==null){var S=Ue,k=dn;switch(at){case 8:dc(),v=6;break e;case 3:case 2:case 9:case 6:fn.current===null&&(n=!0);var Y=at;if(at=0,dn=null,cl(e,S,k,Y),a&&il){v=0;break e}break;default:Y=at,at=0,dn=null,cl(e,S,k,Y)}}A0(),v=St;break}catch(Q){Vm(e,Q)}while(!0);return n&&e.shellSuspendCounter++,oa=wr=null,We=i,N.H=f,N.A=h,Ue===null&&(ot=null,Ye=0,ru()),v}function A0(){for(;Ue!==null;)Jm(Ue)}function D0(e,n){var a=We;We|=2;var i=Qm(),f=Zm();ot!==e||Ye!==n?(Lu=null,Nu=pt()+500,sl(e,n)):il=sr(e,n);e:do try{if(at!==0&&Ue!==null){n=Ue;var h=dn;t:switch(at){case 1:at=0,dn=null,cl(e,n,h,1);break;case 2:case 9:if(ld(h)){at=0,dn=null,Pm(n);break}n=function(){at!==2&&at!==9||ot!==e||(at=7),Zn(e)},h.then(n,n);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:ld(h)?(at=0,dn=null,Pm(n)):(at=0,dn=null,cl(e,n,h,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var S=Ue;if(v?Np(v):S.stateNode.complete){at=0,dn=null;var k=S.sibling;if(k!==null)Ue=k;else{var Y=S.return;Y!==null?(Ue=Y,Bu(Y)):Ue=null}break t}}at=0,dn=null,cl(e,n,h,5);break;case 6:at=0,dn=null,cl(e,n,h,6);break;case 8:dc(),St=6;break e;default:throw Error(u(462))}}M0();break}catch(Q){Vm(e,Q)}while(!0);return oa=wr=null,N.H=i,N.A=f,We=a,Ue!==null?0:(ot=null,Ye=0,ru(),St)}function M0(){for(;Ue!==null&&!Rl();)Jm(Ue)}function Jm(e){var n=bm(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?Bu(e):Ue=n}function Pm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=dm(a,n,n.pendingProps,n.type,void 0,Ye);break;case 11:n=dm(a,n,n.pendingProps,n.type.render,n.ref,Ye);break;case 5:Ds(n);default:Sm(a,n),n=Ue=Zh(n,va),n=bm(a,n,va)}e.memoizedProps=e.pendingProps,n===null?Bu(e):Ue=n}function cl(e,n,a,i){oa=wr=null,Ds(n),$r=null,Fl=0;var f=n.return;try{if(v0(e,f,n,a,Ye)){St=1,ku(e,En(a,e.current)),Ue=null;return}}catch(h){if(f!==null)throw Ue=f,h;St=1,ku(e,En(a,e.current)),Ue=null;return}n.flags&32768?(Xe||i===1?e=!0:il||(Ye&536870912)!==0?e=!1:(Ya=e=!0,(i===2||i===9||i===3||i===6)&&(i=fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Km(n,e)):Bu(n)}function Bu(e){var n=e;do{if((n.flags&32768)!==0){Km(n,Ya);return}e=n.return;var a=S0(n.alternate,n,va);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);St===0&&(St=5)}function Km(e,n){do{var a=x0(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);St=6,Ue=null}function Wm(e,n,a,i,f,h,v,S,k){e.cancelPendingCommit=null;do Yu();while(zt!==0);if((We&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(h=n.lanes|n.childLanes,h|=ns,No(e,a,h,v,S,k),e===ot&&(Ue=ot=null,Ye=0),ol=n,Fa=e,ba=a,cc=h,fc=f,qm=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,j0(xe,function(){return ap(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=N.T,N.T=null,f=W.p,W.p=2,v=We,We|=4;try{E0(e,n,a)}finally{We=v,W.p=f,N.T=i}}zt=1,$m(),ep(),tp()}}function $m(){if(zt===1){zt=0;var e=Fa,n=ol,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var i=W.p;W.p=2;var f=We;We|=4;try{Om(n,e);var h=kc,v=Bh(e.containerInfo),S=h.focusedElem,k=h.selectionRange;if(v!==S&&S&&S.ownerDocument&&Hh(S.ownerDocument.documentElement,S)){if(k!==null&&Ko(S)){var Y=k.start,Q=k.end;if(Q===void 0&&(Q=Y),"selectionStart"in S)S.selectionStart=Y,S.selectionEnd=Math.min(Q,S.value.length);else{var P=S.ownerDocument||document,I=P&&P.defaultView||window;if(I.getSelection){var V=I.getSelection(),ge=S.textContent.length,Ae=Math.min(k.start,ge),ut=k.end===void 0?Ae:Math.min(k.end,ge);!V.extend&&Ae>ut&&(v=ut,ut=Ae,Ae=v);var _=Uh(S,Ae),D=Uh(S,ut);if(_&&D&&(V.rangeCount!==1||V.anchorNode!==_.node||V.anchorOffset!==_.offset||V.focusNode!==D.node||V.focusOffset!==D.offset)){var B=P.createRange();B.setStart(_.node,_.offset),V.removeAllRanges(),Ae>ut?(V.addRange(B),V.extend(D.node,D.offset)):(B.setEnd(D.node,D.offset),V.addRange(B))}}}}for(P=[],V=S;V=V.parentNode;)V.nodeType===1&&P.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<P.length;S++){var J=P[S];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Wu=!!Cc,kc=Cc=null}finally{We=f,W.p=i,N.T=a}}e.current=n,zt=2}}function ep(){if(zt===2){zt=0;var e=Fa,n=ol,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var i=W.p;W.p=2;var f=We;We|=4;try{Am(e,n.alternate,n)}finally{We=f,W.p=i,N.T=a}}zt=3}}function tp(){if(zt===4||zt===3){zt=0,Al();var e=Fa,n=ol,a=ba,i=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?zt=5:(zt=0,ol=Fa=null,np(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ia=null),$(a),n=n.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=N.T,f=W.p,W.p=2,N.T=null;try{for(var h=e.onRecoverableError,v=0;v<i.length;v++){var S=i[v];h(S.value,{componentStack:S.stack})}}finally{N.T=n,W.p=f}}(ba&3)!==0&&Yu(),Zn(e),f=e.pendingLanes,(a&261930)!==0&&(f&42)!==0?e===hc?ii++:(ii=0,hc=e):ii=0,ui(0)}}function np(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ql(n)))}function Yu(){return $m(),ep(),tp(),ap()}function ap(){if(zt!==5)return!1;var e=Fa,n=cc;cc=0;var a=$(ba),i=N.T,f=W.p;try{W.p=32>a?32:a,N.T=null,a=fc,fc=null;var h=Fa,v=ba;if(zt=0,ol=Fa=null,ba=0,(We&6)!==0)throw Error(u(331));var S=We;if(We|=4,Hm(h.current),Nm(h,h.current,v,a),We=S,ui(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(jt,h)}catch{}return!0}finally{W.p=f,N.T=i,np(e,n)}}function rp(e,n,a){n=En(a,n),n=Gs(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Aa(e,2),Zn(e))}function rt(e,n,a){if(e.tag===3)rp(e,e,a);else for(;n!==null;){if(n.tag===3){rp(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ia===null||!Ia.has(i))){e=En(a,e),a=lm(2),i=La(n,a,2),i!==null&&(im(a,i,n,e),Aa(i,2),Zn(i));break}}n=n.return}}function pc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new k0;var f=new Set;i.set(n,f)}else f=i.get(n),f===void 0&&(f=new Set,i.set(n,f));f.has(a)||(uc=!0,f.add(a),e=z0.bind(null,e,n,a),n.then(e,e))}function z0(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ot===e&&(Ye&a)===a&&(St===4||St===3&&(Ye&62914560)===Ye&&300>pt()-ju?(We&2)===0&&sl(e,0):oc|=a,ul===Ye&&(ul=0)),Zn(e)}function lp(e,n){n===0&&(n=cr()),e=yr(e,n),e!==null&&(Aa(e,n),Zn(e))}function _0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),lp(e,a)}function O0(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,f=e.memoizedState;f!==null&&(a=f.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(u(314))}i!==null&&i.delete(n),lp(e,a)}function j0(e,n){return Ca(e,n)}var qu=null,fl=null,gc=!1,Iu=!1,yc=!1,Va=0;function Zn(e){e!==fl&&e.next===null&&(fl===null?qu=fl=e:fl=fl.next=e),Iu=!0,gc||(gc=!0,L0())}function ui(e,n){if(!yc&&Iu){yc=!0;do for(var a=!1,i=qu;i!==null;){if(e!==0){var f=i.pendingLanes;if(f===0)var h=0;else{var v=i.suspendedLanes,S=i.pingedLanes;h=(1<<31-tt(42|e)+1)-1,h&=f&~(v&~S),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,sp(i,h))}else h=Ye,h=or(i,i===ot?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||sr(i,h)||(a=!0,sp(i,h));i=i.next}while(a);yc=!1}}function N0(){ip()}function ip(){Iu=gc=!1;var e=0;Va!==0&&X0()&&(e=Va);for(var n=pt(),a=null,i=qu;i!==null;){var f=i.next,h=up(i,n);h===0?(i.next=null,a===null?qu=f:a.next=f,f===null&&(fl=a)):(a=i,(e!==0||(h&3)!==0)&&(Iu=!0)),i=f}zt!==0&&zt!==5||ui(e),Va!==0&&(Va=0)}function up(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-tt(h),S=1<<v,k=f[v];k===-1?((S&a)===0||(S&i)!==0)&&(f[v]=Xi(S,n)):k<=n&&(e.expiredLanes|=S),h&=~S}if(n=ot,a=Ye,a=or(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(at===2||at===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ir(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||sr(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&ir(i),$(a)){case 2:case 8:a=ie;break;case 32:a=xe;break;case 268435456:a=Je;break;default:a=xe}return i=op.bind(null,e),a=Ca(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&ir(i),e.callbackPriority=2,e.callbackNode=null,2}function op(e,n){if(zt!==0&&zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yu()&&e.callbackNode!==a)return null;var i=Ye;return i=or(e,e===ot?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Fm(e,i,n),up(e,pt()),e.callbackNode!=null&&e.callbackNode===a?op.bind(null,e):null)}function sp(e,n){if(Yu())return null;Fm(e,n,!0)}function L0(){Z0(function(){(We&6)!==0?Ca(Z,N0):ip()})}function vc(){if(Va===0){var e=Pr;e===0&&(e=ta,ta<<=1,(ta&261888)===0&&(ta=256)),Va=e}return Va}function cp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pi(""+e)}function fp(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function U0(e,n,a,i,f){if(n==="submit"&&a&&a.stateNode===f){var h=cp((f[pe]||null).action),v=i.submitter;v&&(n=(n=v[pe]||null)?cp(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var S=new eu("action","action",null,i,f);e.push({event:S,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Va!==0){var k=v?fp(f,v):new FormData(f);Hs(a,{pending:!0,data:k,method:f.method,action:h},null,k)}}else typeof h=="function"&&(S.preventDefault(),k=v?fp(f,v):new FormData(f),Hs(a,{pending:!0,data:k,method:f.method,action:h},h,k))},currentTarget:f}]})}}for(var bc=0;bc<ts.length;bc++){var wc=ts[bc],H0=wc.toLowerCase(),B0=wc[0].toUpperCase()+wc.slice(1);Yn(H0,"on"+B0)}Yn(Ih,"onAnimationEnd"),Yn(Fh,"onAnimationIteration"),Yn(Gh,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(t0,"onTransitionRun"),Yn(n0,"onTransitionStart"),Yn(a0,"onTransitionCancel"),Yn(Vh,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function hp(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],f=i.event;i=i.listeners;e:{var h=void 0;if(n)for(var v=i.length-1;0<=v;v--){var S=i[v],k=S.instance,Y=S.currentTarget;if(S=S.listener,k!==h&&f.isPropagationStopped())break e;h=S,f.currentTarget=Y;try{h(f)}catch(Q){au(Q)}f.currentTarget=null,h=k}else for(v=0;v<i.length;v++){if(S=i[v],k=S.instance,Y=S.currentTarget,S=S.listener,k!==h&&f.isPropagationStopped())break e;h=S,f.currentTarget=Y;try{h(f)}catch(Q){au(Q)}f.currentTarget=null,h=k}}}}function He(e,n){var a=n[ke];a===void 0&&(a=n[ke]=new Set);var i=e+"__bubble";a.has(i)||(dp(n,e,2,!1),a.add(i))}function Sc(e,n,a){var i=0;n&&(i|=4),dp(a,e,i,n)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function xc(e){if(!e[Fu]){e[Fu]=!0,Un.forEach(function(a){a!=="selectionchange"&&(Y0.has(a)||Sc(a,!1,e),Sc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fu]||(n[Fu]=!0,Sc("selectionchange",!1,n))}}function dp(e,n,a,i){switch(Ip(n)){case 2:var f=m1;break;case 8:f=p1;break;default:f=Uc}a=f.bind(null,n,a,e),f=void 0,!Io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),i?f!==void 0?e.addEventListener(n,a,{capture:!0,passive:f}):e.addEventListener(n,a,!0):f!==void 0?e.addEventListener(n,a,{passive:f}):e.addEventListener(n,a,!1)}function Ec(e,n,a,i,f){var h=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var v=i.tag;if(v===3||v===4){var S=i.stateNode.containerInfo;if(S===f)break;if(v===4)for(v=i.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;S!==null;){if(v=bt(S),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){i=h=v;continue e}S=S.parentNode}}i=i.return}vh(function(){var Y=h,Q=Yo(a),P=[];e:{var I=Xh.get(e);if(I!==void 0){var V=eu,ge=e;switch(e){case"keypress":if(Wi(a)===0)break e;case"keydown":case"keyup":V=Ob;break;case"focusin":ge="focus",V=Xo;break;case"focusout":ge="blur",V=Xo;break;case"beforeblur":case"afterblur":V=Xo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Sb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Lb;break;case Ih:case Fh:case Gh:V=Tb;break;case Vh:V=Hb;break;case"scroll":case"scrollend":V=bb;break;case"wheel":V=Yb;break;case"copy":case"cut":case"paste":V=kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Eh;break;case"toggle":case"beforetoggle":V=Ib}var Ae=(n&4)!==0,ut=!Ae&&(e==="scroll"||e==="scrollend"),_=Ae?I!==null?I+"Capture":null:I;Ae=[];for(var D=Y,B;D!==null;){var J=D;if(B=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||B===null||_===null||(J=Ml(D,_),J!=null&&Ae.push(si(D,J,B))),ut)break;D=D.return}0<Ae.length&&(I=new V(I,ge,null,a,Q),P.push({event:I,listeners:Ae}))}}if((n&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",I&&a!==Bo&&(ge=a.relatedTarget||a.fromElement)&&(bt(ge)||ge[we]))break e;if((V||I)&&(I=Q.window===Q?Q:(I=Q.ownerDocument)?I.defaultView||I.parentWindow:window,V?(ge=a.relatedTarget||a.toElement,V=Y,ge=ge?bt(ge):null,ge!==null&&(ut=s(ge),Ae=ge.tag,ge!==ut||Ae!==5&&Ae!==27&&Ae!==6)&&(ge=null)):(V=null,ge=Y),V!==ge)){if(Ae=Sh,J="onMouseLeave",_="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Ae=Eh,J="onPointerLeave",_="onPointerEnter",D="pointer"),ut=V==null?I:_t(V),B=ge==null?I:_t(ge),I=new Ae(J,D+"leave",V,a,Q),I.target=ut,I.relatedTarget=B,J=null,bt(Q)===Y&&(Ae=new Ae(_,D+"enter",ge,a,Q),Ae.target=B,Ae.relatedTarget=ut,J=Ae),ut=J,V&&ge)t:{for(Ae=q0,_=V,D=ge,B=0,J=_;J;J=Ae(J))B++;J=0;for(var Ce=D;Ce;Ce=Ae(Ce))J++;for(;0<B-J;)_=Ae(_),B--;for(;0<J-B;)D=Ae(D),J--;for(;B--;){if(_===D||D!==null&&_===D.alternate){Ae=_;break t}_=Ae(_),D=Ae(D)}Ae=null}else Ae=null;V!==null&&mp(P,I,V,Ae,!1),ge!==null&&ut!==null&&mp(P,ut,ge,Ae,!0)}}e:{if(I=Y?_t(Y):window,V=I.nodeName&&I.nodeName.toLowerCase(),V==="select"||V==="input"&&I.type==="file")var Pe=zh;else if(Dh(I))if(_h)Pe=Wb;else{Pe=Pb;var be=Jb}else V=I.nodeName,!V||V.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?Y&&Ho(Y.elementType)&&(Pe=zh):Pe=Kb;if(Pe&&(Pe=Pe(e,Y))){Mh(P,Pe,a,Q);break e}be&&be(e,I,Y),e==="focusout"&&Y&&I.type==="number"&&Y.memoizedProps.value!=null&&Uo(I,"number",I.value)}switch(be=Y?_t(Y):window,e){case"focusin":(Dh(be)||be.contentEditable==="true")&&(Ir=be,Wo=Y,Hl=null);break;case"focusout":Hl=Wo=Ir=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,Yh(P,a,Q);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":Yh(P,a,Q)}var je;if(Zo)e:{switch(e){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else qr?Rh(e,a)&&(qe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(qe="onCompositionStart");qe&&(Th&&a.locale!=="ko"&&(qr||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&qr&&(je=bh()):(Da=Q,Fo="value"in Da?Da.value:Da.textContent,qr=!0)),be=Gu(Y,qe),0<be.length&&(qe=new xh(qe,e,null,a,Q),P.push({event:qe,listeners:be}),je?qe.data=je:(je=Ah(a),je!==null&&(qe.data=je)))),(je=Gb?Vb(e,a):Xb(e,a))&&(qe=Gu(Y,"onBeforeInput"),0<qe.length&&(be=new xh("onBeforeInput","beforeinput",null,a,Q),P.push({event:be,listeners:qe}),be.data=je)),U0(P,e,Y,a,Q)}hp(P,n)})}function si(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gu(e,n){for(var a=n+"Capture",i=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Ml(e,a),f!=null&&i.unshift(si(e,f,h)),f=Ml(e,n),f!=null&&i.push(si(e,f,h))),e.tag===3)return i;e=e.return}return[]}function q0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mp(e,n,a,i,f){for(var h=n._reactName,v=[];a!==null&&a!==i;){var S=a,k=S.alternate,Y=S.stateNode;if(S=S.tag,k!==null&&k===i)break;S!==5&&S!==26&&S!==27||Y===null||(k=Y,f?(Y=Ml(a,h),Y!=null&&v.unshift(si(a,Y,k))):f||(Y=Ml(a,h),Y!=null&&v.push(si(a,Y,k)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var I0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function pp(e){return(typeof e=="string"?e:""+e).replace(I0,`
`).replace(F0,"")}function gp(e,n){return n=pp(n),pp(e)===n}function it(e,n,a,i,f,h){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Hr(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Hr(e,""+i);break;case"className":Bn(e,"class",i);break;case"tabIndex":Bn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(e,a,i);break;case"style":gh(e,i,h);break;case"data":if(n!=="object"){Bn(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Pi(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&it(e,n,"name",f.name,f,null),it(e,n,"formEncType",f.formEncType,f,null),it(e,n,"formMethod",f.formMethod,f,null),it(e,n,"formTarget",f.formTarget,f,null)):(it(e,n,"encType",f.encType,f,null),it(e,n,"method",f.method,f,null),it(e,n,"target",f.target,f,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Pi(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=ra);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(f.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Pi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":He("beforetoggle",e),He("toggle",e),xt(e,"popover",i);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":xt(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yb.get(a)||a,xt(e,a,i))}}function Tc(e,n,a,i,f,h){switch(a){case"style":gh(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(u(61));if(a=i.__html,a!=null){if(f.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Hr(e,i):(typeof i=="number"||typeof i=="bigint")&&Hr(e,""+i);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ra);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!on.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),n=a.slice(2,f?a.length-7:void 0),h=e[pe]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,f),typeof i=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,f);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):xt(e,a,i)}}}function Yt(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var i=!1,f=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":i=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:it(e,n,h,v,a,null)}}f&&it(e,n,"srcSet",a.srcSet,a,null),i&&it(e,n,"src",a.src,a,null);return;case"input":He("invalid",e);var S=h=v=f=null,k=null,Y=null;for(i in a)if(a.hasOwnProperty(i)){var Q=a[i];if(Q!=null)switch(i){case"name":f=Q;break;case"type":v=Q;break;case"checked":k=Q;break;case"defaultChecked":Y=Q;break;case"value":h=Q;break;case"defaultValue":S=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(u(137,n));break;default:it(e,n,i,Q,a,null)}}hh(e,h,S,k,Y,v,f,!1);return;case"select":He("invalid",e),i=v=h=null;for(f in a)if(a.hasOwnProperty(f)&&(S=a[f],S!=null))switch(f){case"value":h=S;break;case"defaultValue":v=S;break;case"multiple":i=S;default:it(e,n,f,S,a,null)}n=h,a=v,e.multiple=!!i,n!=null?Ur(e,!!i,n,!1):a!=null&&Ur(e,!!i,a,!0);return;case"textarea":He("invalid",e),h=f=i=null;for(v in a)if(a.hasOwnProperty(v)&&(S=a[v],S!=null))switch(v){case"value":i=S;break;case"defaultValue":f=S;break;case"children":h=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(91));break;default:it(e,n,v,S,a,null)}mh(e,i,f,h);return;case"option":for(k in a)a.hasOwnProperty(k)&&(i=a[k],i!=null)&&(k==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":it(e,n,k,i,a,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(i=0;i<oi.length;i++)He(oi[i],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in a)if(a.hasOwnProperty(Y)&&(i=a[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:it(e,n,Y,i,a,null)}return;default:if(Ho(n)){for(Q in a)a.hasOwnProperty(Q)&&(i=a[Q],i!==void 0&&Tc(e,n,Q,i,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!=null&&it(e,n,S,i,a,null))}function G0(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,v=null,S=null,k=null,Y=null,Q=null;for(V in a){var P=a[V];if(a.hasOwnProperty(V)&&P!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":k=P;default:i.hasOwnProperty(V)||it(e,n,V,null,i,P)}}for(var I in i){var V=i[I];if(P=a[I],i.hasOwnProperty(I)&&(V!=null||P!=null))switch(I){case"type":h=V;break;case"name":f=V;break;case"checked":Y=V;break;case"defaultChecked":Q=V;break;case"value":v=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(u(137,n));break;default:V!==P&&it(e,n,I,V,i,P)}}Lo(e,v,S,k,Y,Q,h,f);return;case"select":V=v=S=I=null;for(h in a)if(k=a[h],a.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":V=k;default:i.hasOwnProperty(h)||it(e,n,h,null,i,k)}for(f in i)if(h=i[f],k=a[f],i.hasOwnProperty(f)&&(h!=null||k!=null))switch(f){case"value":I=h;break;case"defaultValue":S=h;break;case"multiple":v=h;default:h!==k&&it(e,n,f,h,i,k)}n=S,a=v,i=V,I!=null?Ur(e,!!a,I,!1):!!i!=!!a&&(n!=null?Ur(e,!!a,n,!0):Ur(e,!!a,a?[]:"",!1));return;case"textarea":V=I=null;for(S in a)if(f=a[S],a.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:it(e,n,S,null,i,f)}for(v in i)if(f=i[v],h=a[v],i.hasOwnProperty(v)&&(f!=null||h!=null))switch(v){case"value":I=f;break;case"defaultValue":V=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:f!==h&&it(e,n,v,f,i,h)}dh(e,I,V);return;case"option":for(var ge in a)I=a[ge],a.hasOwnProperty(ge)&&I!=null&&!i.hasOwnProperty(ge)&&(ge==="selected"?e.selected=!1:it(e,n,ge,null,i,I));for(k in i)I=i[k],V=a[k],i.hasOwnProperty(k)&&I!==V&&(I!=null||V!=null)&&(k==="selected"?e.selected=I&&typeof I!="function"&&typeof I!="symbol":it(e,n,k,I,i,V));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)I=a[Ae],a.hasOwnProperty(Ae)&&I!=null&&!i.hasOwnProperty(Ae)&&it(e,n,Ae,null,i,I);for(Y in i)if(I=i[Y],V=a[Y],i.hasOwnProperty(Y)&&I!==V&&(I!=null||V!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(u(137,n));break;default:it(e,n,Y,I,i,V)}return;default:if(Ho(n)){for(var ut in a)I=a[ut],a.hasOwnProperty(ut)&&I!==void 0&&!i.hasOwnProperty(ut)&&Tc(e,n,ut,void 0,i,I);for(Q in i)I=i[Q],V=a[Q],!i.hasOwnProperty(Q)||I===V||I===void 0&&V===void 0||Tc(e,n,Q,I,i,V);return}}for(var _ in a)I=a[_],a.hasOwnProperty(_)&&I!=null&&!i.hasOwnProperty(_)&&it(e,n,_,null,i,I);for(P in i)I=i[P],V=a[P],!i.hasOwnProperty(P)||I===V||I==null&&V==null||it(e,n,P,I,i,V)}function yp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var f=a[i],h=f.transferSize,v=f.initiatorType,S=f.duration;if(h&&S&&yp(v)){for(v=0,S=f.responseEnd,i+=1;i<a.length;i++){var k=a[i],Y=k.startTime;if(Y>S)break;var Q=k.transferSize,P=k.initiatorType;Q&&yp(P)&&(k=k.responseEnd,v+=Q*(k<S?1:(S-Y)/(k-Y)))}if(--i,n+=8*(h+v)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cc=null,kc=null;function Vu(e){return e.nodeType===9?e:e.ownerDocument}function vp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ac=null;function X0(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var wp=typeof setTimeout=="function"?setTimeout:void 0,Q0=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,Z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(e){return Sp.resolve(null).then(e).catch(J0)}:wp;function J0(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function xp(e,n){var a=n,i=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(f),pl(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ci(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ci(a);for(var h=a.firstChild;h;){var v=h.nextSibling,S=h.nodeName;h[gt]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&ci(e.ownerDocument.body);a=f}while(a);pl(n)}function Ep(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Dc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Dc(a),vt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function P0(e,n,a,i){for(;e.nodeType===1;){var f=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[gt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=An(e.nextSibling),e===null)break}return null}function K0(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=An(e.nextSibling),e===null))return null;return e}function Tp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=An(e.nextSibling),e===null))return null;return e}function Mc(e){return e.data==="$?"||e.data==="$~"}function zc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function W0(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function An(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _c=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return An(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function kp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Rp(e,n,a){switch(n=Vu(a),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ci(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vt(e)}var Dn=new Map,Ap=new Set;function Xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=W.d;W.d={f:$0,r:e1,D:t1,C:n1,L:a1,m:r1,X:i1,S:l1,M:u1};function $0(){var e=wa.f(),n=Uu();return e||n}function e1(e){var n=Fe(e);n!==null&&n.tag===5&&n.type==="form"?Vd(n):wa.r(e)}var hl=typeof document>"u"?null:document;function Dp(e,n,a){var i=hl;if(i&&typeof n=="string"&&n){var f=Sn(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),Ap.has(f)||(Ap.add(f),e={rel:e,crossOrigin:a,href:n},i.querySelector(f)===null&&(n=i.createElement("link"),Yt(n,"link",e),dt(n),i.head.appendChild(n)))}}function t1(e){wa.D(e),Dp("dns-prefetch",e,null)}function n1(e,n){wa.C(e,n),Dp("preconnect",e,n)}function a1(e,n,a){wa.L(e,n,a);var i=hl;if(i&&e&&n){var f='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+Sn(a.imageSizes)+'"]')):f+='[href="'+Sn(e)+'"]';var h=f;switch(n){case"style":h=dl(e);break;case"script":h=ml(e)}Dn.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Dn.set(h,e),i.querySelector(f)!==null||n==="style"&&i.querySelector(fi(h))||n==="script"&&i.querySelector(hi(h))||(n=i.createElement("link"),Yt(n,"link",e),dt(n),i.head.appendChild(n)))}}function r1(e,n){wa.m(e,n);var a=hl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Sn(i)+'"][href="'+Sn(e)+'"]',h=f;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ml(e)}if(!Dn.has(h)&&(e=g({rel:"modulepreload",href:e},n),Dn.set(h,e),a.querySelector(f)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(h)))return}i=a.createElement("link"),Yt(i,"link",e),dt(i),a.head.appendChild(i)}}}function l1(e,n,a){wa.S(e,n,a);var i=hl;if(i&&e){var f=Pt(i).hoistableStyles,h=dl(e);n=n||"default";var v=f.get(h);if(!v){var S={loading:0,preload:null};if(v=i.querySelector(fi(h)))S.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Dn.get(h))&&Oc(e,a);var k=v=i.createElement("link");dt(k),Yt(k,"link",e),k._p=new Promise(function(Y,Q){k.onload=Y,k.onerror=Q}),k.addEventListener("load",function(){S.loading|=1}),k.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Qu(v,n,i)}v={type:"stylesheet",instance:v,count:1,state:S},f.set(h,v)}}}function i1(e,n){wa.X(e,n);var a=hl;if(a&&e){var i=Pt(a).hoistableScripts,f=ml(e),h=i.get(f);h||(h=a.querySelector(hi(f)),h||(e=g({src:e,async:!0},n),(n=Dn.get(f))&&jc(e,n),h=a.createElement("script"),dt(h),Yt(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(f,h))}}function u1(e,n){wa.M(e,n);var a=hl;if(a&&e){var i=Pt(a).hoistableScripts,f=ml(e),h=i.get(f);h||(h=a.querySelector(hi(f)),h||(e=g({src:e,async:!0,type:"module"},n),(n=Dn.get(f))&&jc(e,n),h=a.createElement("script"),dt(h),Yt(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(f,h))}}function Mp(e,n,a,i){var f=(f=ve.current)?Xu(f):null;if(!f)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dl(a.href),a=Pt(f).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dl(a.href);var h=Pt(f).hoistableStyles,v=h.get(e);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=f.querySelector(fi(e)))&&!h._p&&(v.instance=h,v.state.loading=5),Dn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dn.set(e,a),h||o1(f,e,a,v.state))),n&&i===null)throw Error(u(528,""));return v}if(n&&i!==null)throw Error(u(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ml(a),a=Pt(f).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function dl(e){return'href="'+Sn(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function zp(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function o1(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),Yt(n,"link",a),dt(n),e.head.appendChild(n))}function ml(e){return'[src="'+Sn(e)+'"]'}function hi(e){return"script[async]"+e}function _p(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(i)return n.instance=i,dt(i),i;var f=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),dt(i),Yt(i,"style",f),Qu(i,a.precedence,e),n.instance=i;case"stylesheet":f=dl(a.href);var h=e.querySelector(fi(f));if(h)return n.state.loading|=4,n.instance=h,dt(h),h;i=zp(a),(f=Dn.get(f))&&Oc(i,f),h=(e.ownerDocument||e).createElement("link"),dt(h);var v=h;return v._p=new Promise(function(S,k){v.onload=S,v.onerror=k}),Yt(h,"link",i),n.state.loading|=4,Qu(h,a.precedence,e),n.instance=h;case"script":return h=ml(a.src),(f=e.querySelector(hi(h)))?(n.instance=f,dt(f),f):(i=a,(f=Dn.get(h))&&(i=g({},a),jc(i,f)),e=e.ownerDocument||e,f=e.createElement("script"),dt(f),Yt(f,"link",i),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,Qu(i,a.precedence,e));return n.instance}function Qu(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=i.length?i[i.length-1]:null,h=f,v=0;v<i.length;v++){var S=i[v];if(S.dataset.precedence===n)h=S;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Oc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zu=null;function Op(e,n,a){if(Zu===null){var i=new Map,f=Zu=new Map;f.set(a,i)}else f=Zu,i=f.get(a),i||(i=new Map,f.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),f=0;f<a.length;f++){var h=a[f];if(!(h[gt]||h[he]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var S=i.get(v);S?S.push(h):i.set(v,[h])}}return i}function jp(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function s1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function c1(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=dl(i.href),h=n.querySelector(fi(f));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ju.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,dt(h);return}h=n.ownerDocument||n,i=zp(i),(f=Dn.get(f))&&Oc(i,f),h=h.createElement("link"),dt(h);var v=h;v._p=new Promise(function(S,k){v.onload=S,v.onerror=k}),Yt(h,"link",i),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ju.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nc=0;function f1(e,n){return e.stylesheets&&e.count===0&&Ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Ku(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Nc===0&&(Nc=62500*V0());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ku(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Nc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(f)}}:null}function Ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pu=null;function Ku(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pu=new Map,n.forEach(h1,e),Pu=null,Ju.call(e))}function h1(e,n){if(!(n.state.loading&4)){var a=Pu.get(e);if(a)var i=a.get(null);else{a=new Map,Pu.set(e,a);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var v=f[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),i=v)}i&&a.set(null,i)}f=n.instance,v=f.getAttribute("data-precedence"),h=a.get(v)||i,h===i&&a.set(null,f),a.set(v,f),this.count++,i=Ju.bind(this),f.addEventListener("load",i),f.addEventListener("error",i),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var di={$$typeof:H,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function d1(e,n,a,i,f,h,v,S,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ra(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.hiddenUpdates=Ra(null),this.identifierPrefix=i,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Lp(e,n,a,i,f,h,v,S,k,Y,Q,P){return e=new d1(e,n,a,v,k,Y,Q,P,S),n=1,h===!0&&(n|=24),h=cn(3,null,null,n),e.current=h,h.stateNode=e,n=ms(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:i,isDehydrated:a,cache:n},vs(h),e}function Up(e){return e?(e=Vr,e):Vr}function Hp(e,n,a,i,f,h){f=Up(f),i.context===null?i.context=f:i.pendingContext=f,i=Na(n),i.payload={element:a},h=h===void 0?null:h,h!==null&&(i.callback=h),a=La(e,i,n),a!==null&&(nn(a,e,n),Vl(a,e,n))}function Bp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lc(e,n){Bp(e,n),(e=e.alternate)&&Bp(e,n)}function Yp(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&nn(n,e,67108864),Lc(e,67108864)}}function qp(e){if(e.tag===13||e.tag===31){var n=pn();n=F(n);var a=yr(e,n);a!==null&&nn(a,e,n),Lc(e,n)}}var Wu=!0;function m1(e,n,a,i){var f=N.T;N.T=null;var h=W.p;try{W.p=2,Uc(e,n,a,i)}finally{W.p=h,N.T=f}}function p1(e,n,a,i){var f=N.T;N.T=null;var h=W.p;try{W.p=8,Uc(e,n,a,i)}finally{W.p=h,N.T=f}}function Uc(e,n,a,i){if(Wu){var f=Hc(i);if(f===null)Ec(e,n,i,$u,a),Fp(e,i);else if(y1(f,e,n,a,i))i.stopPropagation();else if(Fp(e,i),n&4&&-1<g1.indexOf(e)){for(;f!==null;){var h=Fe(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=na(h.pendingLanes);if(v!==0){var S=h;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var k=1<<31-tt(v);S.entanglements[1]|=k,v&=~k}Zn(h),(We&6)===0&&(Nu=pt()+500,ui(0))}}break;case 31:case 13:S=yr(h,2),S!==null&&nn(S,h,2),Uu(),Lc(h,2)}if(h=Hc(i),h===null&&Ec(e,n,i,$u,a),h===f)break;f=h}f!==null&&i.stopPropagation()}else Ec(e,n,i,null,a)}}function Hc(e){return e=Yo(e),Bc(e)}var $u=null;function Bc(e){if($u=null,e=bt(e),e!==null){var n=s(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=c(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $u=e,null}function Ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ea()){case Z:return 2;case ie:return 8;case xe:case Me:return 32;case Je:return 268435456;default:return 32}default:return 32}}var Yc=!1,Qa=null,Za=null,Ja=null,mi=new Map,pi=new Map,Pa=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fp(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":mi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(n.pointerId)}}function gi(e,n,a,i,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:h,targetContainers:[f]},n!==null&&(n=Fe(n),n!==null&&Yp(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function y1(e,n,a,i,f){switch(n){case"focusin":return Qa=gi(Qa,e,n,a,i,f),!0;case"dragenter":return Za=gi(Za,e,n,a,i,f),!0;case"mouseover":return Ja=gi(Ja,e,n,a,i,f),!0;case"pointerover":var h=f.pointerId;return mi.set(h,gi(mi.get(h)||null,e,n,a,i,f)),!0;case"gotpointercapture":return h=f.pointerId,pi.set(h,gi(pi.get(h)||null,e,n,a,i,f)),!0}return!1}function Gp(e){var n=bt(e.target);if(n!==null){var a=s(n);if(a!==null){if(n=a.tag,n===13){if(n=c(a),n!==null){e.blockedOn=n,Se(e.priority,function(){qp(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Se(e.priority,function(){qp(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Hc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Bo=i,a.target.dispatchEvent(i),Bo=null}else return n=Fe(a),n!==null&&Yp(n),e.blockedOn=a,!1;n.shift()}return!0}function Vp(e,n,a){eo(e)&&a.delete(n)}function v1(){Yc=!1,Qa!==null&&eo(Qa)&&(Qa=null),Za!==null&&eo(Za)&&(Za=null),Ja!==null&&eo(Ja)&&(Ja=null),mi.forEach(Vp),pi.forEach(Vp)}function to(e,n){e.blockedOn===n&&(e.blockedOn=null,Yc||(Yc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,v1)))}var no=null;function Xp(e){no!==e&&(no=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){no===e&&(no=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],f=e[n+2];if(typeof i!="function"){if(Bc(i||a)===null)continue;break}var h=Fe(a);h!==null&&(e.splice(n,3),n-=3,Hs(h,{pending:!0,data:f,method:a.method,action:i},i,f))}}))}function pl(e){function n(k){return to(k,e)}Qa!==null&&to(Qa,e),Za!==null&&to(Za,e),Ja!==null&&to(Ja,e),mi.forEach(n),pi.forEach(n);for(var a=0;a<Pa.length;a++){var i=Pa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Gp(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var f=a[i],h=a[i+1],v=f[pe]||null;if(typeof h=="function")v||Xp(a);else if(v){var S=null;if(h&&h.hasAttribute("formAction")){if(f=h,v=h[pe]||null)S=v.formAction;else if(Bc(f)!==null)continue}else S=v.action;typeof S=="function"?a[i+1]=S:(a.splice(i,3),i-=3),Xp(a)}}}function Qp(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function qc(e){this._internalRoot=e}ao.prototype.render=qc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var a=n.current,i=pn();Hp(a,i,e,n,null,null)},ao.prototype.unmount=qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hp(e.current,2,null,e,null,null),Uu(),n[we]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var n=ue();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&Gp(e)}};var Zp=r.version;if(Zp!=="19.2.3")throw Error(u(527,Zp,"19.2.3"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=m(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var b1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{jt=ro.inject(b1),nt=ro}catch{}}return vi.createRoot=function(e,n){if(!o(e))throw Error(u(299));var a=!1,i="",f=tm,h=nm,v=am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Lp(e,1,!1,null,null,a,i,null,f,h,v,Qp),e[we]=n.current,xc(e),new qc(n)},vi.hydrateRoot=function(e,n,a){if(!o(e))throw Error(u(299));var i=!1,f="",h=tm,v=nm,S=am,k=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Lp(e,1,!0,n,a??null,i,f,k,h,v,S,Qp),n.context=Up(null),a=n.current,i=pn(),i=F(i),f=Na(i),f.callback=null,La(a,f,i),a=i,n.current.lanes=a,Aa(n,a),Zn(n),e[we]=n.current,xc(e),new ao(n)},vi.version="19.2.3",vi}var rg;function M1(){if(rg)return Fc.exports;rg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Fc.exports=D1(),Fc.exports}var z1=M1(),G=Nf();const ar=jf(G),_1=S1({__proto__:null,default:ar},[G]);var Dy=t=>{throw TypeError(t)},O1=(t,r,l)=>r.has(t)||Dy("Cannot "+l),Zc=(t,r,l)=>(O1(t,r,"read from private field"),l?l.call(t):r.get(t)),j1=(t,r,l)=>r.has(t)?Dy("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,l),lg="popstate";function N1(t={}){function r(u,o){let{pathname:s,search:c,hash:d}=u.location;return _i("",{pathname:s,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function l(u,o){return typeof o=="string"?o:Kn(o)}return U1(r,l,null,t)}function Le(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Ct(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function L1(){return Math.random().toString(36).substring(2,10)}function ig(t,r){return{usr:t.state,key:t.key,idx:r}}function _i(t,r,l=null,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?rr(r):r,state:l,key:r&&r.key||u||L1()}}function Kn({pathname:t="/",search:r="",hash:l=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function rr(t){let r={};if(t){let l=t.indexOf("#");l>=0&&(r.hash=t.substring(l),t=t.substring(0,l));let u=t.indexOf("?");u>=0&&(r.search=t.substring(u),t=t.substring(0,u)),t&&(r.pathname=t)}return r}function U1(t,r,l,u={}){let{window:o=document.defaultView,v5Compat:s=!1}=u,c=o.history,d="POP",p=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function g(){d="POP";let j=y(),A=j==null?null:j-m;m=j,p&&p({action:d,location:z.location,delta:A})}function w(j,A){d="PUSH";let L=_i(z.location,j,A);m=y()+1;let H=ig(L,m),fe=z.createHref(L);try{c.pushState(H,"",fe)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(fe)}s&&p&&p({action:d,location:z.location,delta:1})}function b(j,A){d="REPLACE";let L=_i(z.location,j,A);m=y();let H=ig(L,m),fe=z.createHref(L);c.replaceState(H,"",fe),s&&p&&p({action:d,location:z.location,delta:0})}function E(j){return My(j)}let z={get action(){return d},get location(){return t(o,c)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(lg,g),p=j,()=>{o.removeEventListener(lg,g),p=null}},createHref(j){return r(o,j)},createURL:E,encodeLocation(j){let A=E(j);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:w,replace:b,go(j){return c.go(j)}};return z}function My(t,r=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Le(l,"No window.location.(origin|href) available to create URL");let u=typeof t=="string"?t:Kn(t);return u=u.replace(/ $/,"%20"),!r&&u.startsWith("//")&&(u=l+u),new URL(u,l)}var ki,ug=class{constructor(t){if(j1(this,ki,new Map),t)for(let[r,l]of t)this.set(r,l)}get(t){if(Zc(this,ki).has(t))return Zc(this,ki).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,r){Zc(this,ki).set(t,r)}};ki=new WeakMap;var H1=new Set(["lazy","caseSensitive","path","id","index","children"]);function B1(t){return H1.has(t)}var Y1=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function q1(t){return Y1.has(t)}function I1(t){return t.index===!0}function Oi(t,r,l=[],u={},o=!1){return t.map((s,c)=>{let d=[...l,String(c)],p=typeof s.id=="string"?s.id:d.join("-");if(Le(s.index!==!0||!s.children,"Cannot specify children on an index route"),Le(o||!u[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),I1(s)){let m={...s,id:p};return u[p]=og(m,r(m)),m}else{let m={...s,id:p,children:void 0};return u[p]=og(m,r(m)),s.children&&(m.children=Oi(s.children,r,d,u,o)),m}})}function og(t,r){return Object.assign(t,{...r,...typeof r.lazy=="object"&&r.lazy!=null?{lazy:{...t.lazy,...r.lazy}}:{}})}function er(t,r,l="/"){return Ri(t,r,l,!1)}function Ri(t,r,l,u){let o=typeof r=="string"?rr(r):r,s=_n(o.pathname||"/",l);if(s==null)return null;let c=zy(t);G1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=tw(s);d=$1(c[p],m,u)}return d}function F1(t,r){let{route:l,pathname:u,params:o}=t;return{id:l.id,pathname:u,params:o,data:r[l.id],loaderData:r[l.id],handle:l.handle}}function zy(t,r=[],l=[],u="",o=!1){let s=(c,d,p=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(u)&&p)return;Le(y.relativePath.startsWith(u),`Absolute route path "${y.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(u.length)}let g=Pn([u,y.relativePath]),w=l.concat(y);c.children&&c.children.length>0&&(Le(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),zy(c.children,r,w,g,p)),!(c.path==null&&!c.index)&&r.push({path:g,score:K1(g,c.index),routesMeta:w})};return t.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))s(c,d);else for(let p of _y(c.path))s(c,d,!0,p)}),r}function _y(t){let r=t.split("/");if(r.length===0)return[];let[l,...u]=r,o=l.endsWith("?"),s=l.replace(/\?$/,"");if(u.length===0)return o?[s,""]:[s];let c=_y(u.join("/")),d=[];return d.push(...c.map(p=>p===""?s:[s,p].join("/"))),o&&d.push(...c),d.map(p=>t.startsWith("/")&&p===""?"/":p)}function G1(t){t.sort((r,l)=>r.score!==l.score?l.score-r.score:W1(r.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var V1=/^:[\w-]+$/,X1=3,Q1=2,Z1=1,J1=10,P1=-2,sg=t=>t==="*";function K1(t,r){let l=t.split("/"),u=l.length;return l.some(sg)&&(u+=P1),r&&(u+=Q1),l.filter(o=>!sg(o)).reduce((o,s)=>o+(V1.test(s)?X1:s===""?Z1:J1),u)}function W1(t,r){return t.length===r.length&&t.slice(0,-1).every((u,o)=>u===r[o])?t[t.length-1]-r[r.length-1]:0}function $1(t,r,l=!1){let{routesMeta:u}=t,o={},s="/",c=[];for(let d=0;d<u.length;++d){let p=u[d],m=d===u.length-1,y=s==="/"?r:r.slice(s.length)||"/",g=yo({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!g&&m&&l&&!u[u.length-1].route.index&&(g=yo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:Pn([s,g.pathname]),pathnameBase:rw(Pn([s,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(s=Pn([s,g.pathnameBase]))}return c}function yo(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[l,u]=ew(t.path,t.caseSensitive,t.end),o=r.match(l);if(!o)return null;let s=o[0],c=s.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:u.reduce((m,{paramName:y,isOptional:g},w)=>{if(y==="*"){let E=d[w]||"";c=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const b=d[w];return g&&!b?m[y]=void 0:m[y]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:s,pathnameBase:c,pattern:t}}function ew(t,r=!1,l=!0){Ct(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let u=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(u.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(u.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),u]}function tw(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ct(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function _n(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,u=t.charAt(l);return u&&u!=="/"?null:t.slice(l)||"/"}function nw({basename:t,pathname:r}){return r==="/"?t:Pn([t,r])}var Oy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ko=t=>Oy.test(t);function aw(t,r="/"){let{pathname:l,search:u="",hash:o=""}=typeof t=="string"?rr(t):t,s;if(l)if(ko(l))s=l;else{if(l.includes("//")){let c=l;l=l.replace(/\/\/+/g,"/"),Ct(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${l}`)}l.startsWith("/")?s=cg(l.substring(1),"/"):s=cg(l,r)}else s=r;return{pathname:s,search:lw(u),hash:iw(o)}}function cg(t,r){let l=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?l.length>1&&l.pop():o!=="."&&l.push(o)}),l.length>1?l.join("/"):"/"}function Jc(t,r,l,u){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jy(t){return t.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function Lf(t){let r=jy(t);return r.map((l,u)=>u===r.length-1?l.pathname:l.pathnameBase)}function Uf(t,r,l,u=!1){let o;typeof t=="string"?o=rr(t):(o={...t},Le(!o.pathname||!o.pathname.includes("?"),Jc("?","pathname","search",o)),Le(!o.pathname||!o.pathname.includes("#"),Jc("#","pathname","hash",o)),Le(!o.search||!o.search.includes("#"),Jc("#","search","hash",o)));let s=t===""||o.pathname==="",c=s?"/":o.pathname,d;if(c==null)d=l;else{let g=r.length-1;if(!u&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),g-=1;o.pathname=w.join("/")}d=g>=0?r[g]:"/"}let p=aw(o,d),m=c&&c!=="/"&&c.endsWith("/"),y=(s||c===".")&&l.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var Pn=t=>t.join("/").replace(/\/\/+/g,"/"),rw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Ui=class{constructor(t,r,l,u=!1){this.status=t,this.statusText=r||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function ji(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Hi(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ny=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ly(t,r){let l=t;if(typeof l!="string"||!Oy.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let u=l,o=!1;if(Ny)try{let s=new URL(window.location.href),c=l.startsWith("//")?new URL(s.protocol+l):new URL(l),d=_n(c.pathname,r);c.origin===s.origin&&d!=null?l=d+c.search+c.hash:o=!0}catch{Ct(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:o,to:l}}var nr=Symbol("Uninstrumented");function uw(t,r){let l={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(o=>o({id:r.id,index:r.index,path:r.path,instrument(s){let c=Object.keys(l);for(let d of c)s[d]&&l[d].push(s[d])}}));let u={};if(typeof r.lazy=="function"&&l.lazy.length>0){let o=Sl(l.lazy,r.lazy,()=>{});o&&(u.lazy=o)}if(typeof r.lazy=="object"){let o=r.lazy;["middleware","loader","action"].forEach(s=>{let c=o[s],d=l[`lazy.${s}`];if(typeof c=="function"&&d.length>0){let p=Sl(d,c,()=>{});p&&(u.lazy=Object.assign(u.lazy||{},{[s]:p}))}})}return["loader","action"].forEach(o=>{let s=r[o];if(typeof s=="function"&&l[o].length>0){let c=s[nr]??s,d=Sl(l[o],c,(...p)=>fg(p[0]));d&&(o==="loader"&&c.hydrate===!0&&(d.hydrate=!0),d[nr]=c,u[o]=d)}}),r.middleware&&r.middleware.length>0&&l.middleware.length>0&&(u.middleware=r.middleware.map(o=>{let s=o[nr]??o,c=Sl(l.middleware,s,(...d)=>fg(d[0]));return c?(c[nr]=s,c):o})),u}function ow(t,r){let l={navigate:[],fetch:[]};if(r.forEach(u=>u({instrument(o){let s=Object.keys(o);for(let c of s)o[c]&&l[c].push(o[c])}})),l.navigate.length>0){let u=t.navigate[nr]??t.navigate,o=Sl(l.navigate,u,(...s)=>{let[c,d]=s;return{to:typeof c=="number"||typeof c=="string"?c:c?Kn(c):".",...hg(t,d??{})}});o&&(o[nr]=u,t.navigate=o)}if(l.fetch.length>0){let u=t.fetch[nr]??t.fetch,o=Sl(l.fetch,u,(...s)=>{let[c,,d,p]=s;return{href:d??".",fetcherKey:c,...hg(t,p??{})}});o&&(o[nr]=u,t.fetch=o)}return t}function Sl(t,r,l){return t.length===0?null:async(...u)=>{let o=await Uy(t,l(...u),()=>r(...u),t.length-1);if(o.type==="error")throw o.value;return o.value}}async function Uy(t,r,l,u){let o=t[u],s;if(o){let c,d=async()=>(c?console.error("You cannot call instrumented handlers more than once"):c=Uy(t,r,l,u-1),s=await c,Le(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0});try{await o(d,r)}catch(p){console.error("An instrumentation function threw an error:",p)}c||await d(),await c}else try{s={type:"success",value:await l()}}catch(c){s={type:"error",value:c}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function fg(t){let{request:r,context:l,params:u,unstable_pattern:o}=t;return{request:sw(r),params:{...u},unstable_pattern:o,context:cw(l)}}function hg(t,r){return{currentUrl:Kn(t.state.location),..."formMethod"in r?{formMethod:r.formMethod}:{},..."formEncType"in r?{formEncType:r.formEncType}:{},..."formData"in r?{formData:r.formData}:{},..."body"in r?{body:r.body}:{}}}function sw(t){return{method:t.method,url:t.url,headers:{get:(...r)=>t.headers.get(...r)}}}function cw(t){if(hw(t)){let r={...t};return Object.freeze(r),r}else return{get:r=>t.get(r)}}var fw=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hw(t){if(t===null||typeof t!="object")return!1;const r=Object.getPrototypeOf(t);return r===Object.prototype||r===null||Object.getOwnPropertyNames(r).sort().join("\0")===fw}var Hy=["POST","PUT","PATCH","DELETE"],dw=new Set(Hy),mw=["GET",...Hy],pw=new Set(mw),By=new Set([301,302,303,307,308]),gw=new Set([307,308]),Pc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},bi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},vw=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),Yy="remix-router-transitions",qy=Symbol("ResetLoaderData");function bw(t){const r=t.window?t.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";Le(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let u=t.hydrationRouteProperties||[],o=t.mapRouteProperties||vw,s=o;if(t.unstable_instrumentations){let C=t.unstable_instrumentations;s=O=>({...o(O),...uw(C.map(F=>F.route).filter(Boolean),O)})}let c={},d=Oi(t.routes,s,void 0,c),p,m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let y=t.dataStrategy||Tw,g={...t.future},w=null,b=new Set,E=null,z=null,j=null,A=t.hydrationData!=null,L=er(d,t.history.location,m),H=!1,fe=null,oe;if(L==null&&!t.patchRoutesOnNavigation){let C=Mn(404,{pathname:t.history.location.pathname}),{matches:O,route:F}=lo(d);oe=!0,L=O,fe={[F.id]:C}}else if(L&&!t.hydrationData&&cr(L,d,t.history.location.pathname).active&&(L=null),L)if(L.some(C=>C.route.lazy))oe=!1;else if(!L.some(C=>Hf(C.route)))oe=!0;else{let C=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null;if(O){let F=L.findIndex($=>O[$.route.id]!==void 0);oe=L.slice(0,F+1).every($=>!bf($.route,C,O))}else oe=L.every(F=>!bf(F.route,C,O))}else{oe=!1,L=[];let C=cr(null,d,t.history.location.pathname);C.active&&C.matches&&(H=!0,L=C.matches)}let q,M={historyAction:t.history.action,location:t.history.location,matches:L,initialized:oe,navigation:Pc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||fe,fetchers:new Map,blockers:new Map},te="POP",de=null,U=!1,ee,ae=!1,De=new Map,ce=null,K=!1,N=!1,W=new Set,re=new Map,Ee=0,T=-1,R=new Map,X=new Set,x=new Map,le=new Map,ye=new Set,ve=new Map,Oe,$e=null;function et(){if(w=t.history.listen(({action:C,location:O,delta:F})=>{if(Oe){Oe(),Oe=void 0;return}Ct(ve.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let $=ur({currentLocation:M.location,nextLocation:O,historyAction:C});if($&&F!=null){let ue=new Promise(Se=>{Oe=Se});t.history.go(F*-1),ta($,{state:"blocked",location:O,proceed(){ta($,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),ue.then(()=>t.history.go(F))},reset(){let Se=new Map(M.blockers);Se.set($,bi),yt({blockers:Se})}}),de?.resolve(),de=null;return}return Jt(C,O)}),l){Iw(r,De);let C=()=>Fw(r,De);r.addEventListener("pagehide",C),ce=()=>r.removeEventListener("pagehide",C)}return M.initialized||Jt("POP",M.location,{initialHydration:!0}),q}function Zt(){w&&w(),ce&&ce(),b.clear(),ee&&ee.abort(),M.fetchers.forEach((C,O)=>ln(O)),M.blockers.forEach((C,O)=>Vi(O))}function jn(C){return b.add(C),()=>b.delete(C)}function yt(C,O={}){C.matches&&(C.matches=C.matches.map(ue=>{let Se=c[ue.route.id],me=ue.route;return me.element!==Se.element||me.errorElement!==Se.errorElement||me.hydrateFallbackElement!==Se.hydrateFallbackElement?{...ue,route:Se}:ue})),M={...M,...C};let F=[],$=[];M.fetchers.forEach((ue,Se)=>{ue.state==="idle"&&(ye.has(Se)?F.push(Se):$.push(Se))}),ye.forEach(ue=>{!M.fetchers.has(ue)&&!re.has(ue)&&F.push(ue)}),[...b].forEach(ue=>ue(M,{deletedFetchers:F,newErrors:C.errors??null,viewTransitionOpts:O.viewTransitionOpts,flushSync:O.flushSync===!0})),F.forEach(ue=>ln(ue)),$.forEach(ue=>M.fetchers.delete(ue))}function Nn(C,O,{flushSync:F}={}){let $=M.actionData!=null&&M.navigation.formMethod!=null&&It(M.navigation.formMethod)&&M.navigation.state==="loading"&&C.state?._isRedirect!==!0,ue;O.actionData?Object.keys(O.actionData).length>0?ue=O.actionData:ue=null:$?ue=M.actionData:ue=null;let Se=O.loaderData?xg(M.loaderData,O.loaderData,O.matches||[],O.errors):M.loaderData,me=M.blockers;me.size>0&&(me=new Map(me),me.forEach((ke,Te)=>me.set(Te,bi)));let he=K?!1:Xi(C,O.matches||M.matches),pe=U===!0||M.navigation.formMethod!=null&&It(M.navigation.formMethod)&&C.state?._isRedirect!==!0;p&&(d=p,p=void 0),K||te==="POP"||(te==="PUSH"?t.history.push(C,C.state):te==="REPLACE"&&t.history.replace(C,C.state));let we;if(te==="POP"){let ke=De.get(M.location.pathname);ke&&ke.has(C.pathname)?we={currentLocation:M.location,nextLocation:C}:De.has(C.pathname)&&(we={currentLocation:C,nextLocation:M.location})}else if(ae){let ke=De.get(M.location.pathname);ke?ke.add(C.pathname):(ke=new Set([C.pathname]),De.set(M.location.pathname,ke)),we={currentLocation:M.location,nextLocation:C}}yt({...O,actionData:ue,loaderData:Se,historyAction:te,location:C,initialized:!0,navigation:Pc,revalidation:"idle",restoreScrollPosition:he,preventScrollReset:pe,blockers:me},{viewTransitionOpts:we,flushSync:F===!0}),te="POP",U=!1,ae=!1,K=!1,N=!1,de?.resolve(),de=null,$e?.resolve(),$e=null}async function bn(C,O){if(de?.resolve(),de=null,typeof C=="number"){de||(de=kg());let Ie=de.promise;return t.history.go(C),Ie}let F=vf(M.location,M.matches,m,C,O?.fromRouteId,O?.relative),{path:$,submission:ue,error:Se}=dg(!1,F,O),me=M.location,he=_i(M.location,$,O&&O.state);he={...he,...t.history.encodeLocation(he)};let pe=O&&O.replace!=null?O.replace:void 0,we="PUSH";pe===!0?we="REPLACE":pe===!1||ue!=null&&It(ue.formMethod)&&ue.formAction===M.location.pathname+M.location.search&&(we="REPLACE");let ke=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,Te=(O&&O.flushSync)===!0,Qe=ur({currentLocation:me,nextLocation:he,historyAction:we});if(Qe){ta(Qe,{state:"blocked",location:he,proceed(){ta(Qe,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),bn(C,O)},reset(){let Ie=new Map(M.blockers);Ie.set(Qe,bi),yt({blockers:Ie})}});return}await Jt(we,he,{submission:ue,pendingError:Se,preventScrollReset:ke,replace:O&&O.replace,enableViewTransition:O&&O.viewTransition,flushSync:Te,callSiteDefaultShouldRevalidate:O&&O.unstable_defaultShouldRevalidate})}function Ta(){$e||($e=kg()),ie(),yt({revalidation:"loading"});let C=$e.promise;return M.navigation.state==="submitting"?C:M.navigation.state==="idle"?(Jt(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),C):(Jt(te||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:ae===!0}),C)}async function Jt(C,O,F){ee&&ee.abort(),ee=null,te=C,K=(F&&F.startUninterruptedRevalidation)===!0,sr(M.location,M.matches),U=(F&&F.preventScrollReset)===!0,ae=(F&&F.enableViewTransition)===!0;let $=p||d,ue=F&&F.overrideNavigation,Se=F?.initialHydration&&M.matches&&M.matches.length>0&&!H?M.matches:er($,O,m),me=(F&&F.flushSync)===!0;if(Se&&M.initialized&&!N&&_w(M.location,O)&&!(F&&F.submission&&It(F.submission.formMethod))){Nn(O,{matches:Se},{flushSync:me});return}let he=cr(Se,$,O.pathname);if(he.active&&he.matches&&(Se=he.matches),!Se){let{error:vt,notFoundMatches:bt,route:Fe}=ka(O.pathname);Nn(O,{matches:bt,loaderData:{},errors:{[Fe.id]:vt}},{flushSync:me});return}ee=new AbortController;let pe=bl(t.history,O,ee.signal,F&&F.submission),we=t.getContext?await t.getContext():new ug,ke;if(F&&F.pendingError)ke=[tr(Se).route.id,{type:"error",error:F.pendingError}];else if(F&&F.submission&&It(F.submission.formMethod)){let vt=await Nr(pe,O,F.submission,Se,we,he.active,F&&F.initialHydration===!0,{replace:F.replace,flushSync:me});if(vt.shortCircuited)return;if(vt.pendingActionResult){let[bt,Fe]=vt.pendingActionResult;if(yn(Fe)&&ji(Fe.error)&&Fe.error.status===404){ee=null,Nn(O,{matches:vt.matches,loaderData:{},errors:{[bt]:Fe.error}});return}}Se=vt.matches||Se,ke=vt.pendingActionResult,ue=Kc(O,F.submission),me=!1,he.active=!1,pe=bl(t.history,pe.url,pe.signal)}let{shortCircuited:Te,matches:Qe,loaderData:Ie,errors:gt}=await Lr(pe,O,Se,we,he.active,ue,F&&F.submission,F&&F.fetcherSubmission,F&&F.replace,F&&F.initialHydration===!0,me,ke,F&&F.callSiteDefaultShouldRevalidate);Te||(ee=null,Nn(O,{matches:Qe||Se,...Eg(ke),loaderData:Ie,errors:gt}))}async function Nr(C,O,F,$,ue,Se,me,he={}){ie();let pe=Yw(O,F);if(yt({navigation:pe},{flushSync:he.flushSync===!0}),Se){let Te=await Ra($,O.pathname,C.signal);if(Te.type==="aborted")return{shortCircuited:!0};if(Te.type==="error"){if(Te.partialMatches.length===0){let{matches:Ie,route:gt}=lo(d);return{matches:Ie,pendingActionResult:[gt.id,{type:"error",error:Te.error}]}}let Qe=tr(Te.partialMatches).route.id;return{matches:Te.partialMatches,pendingActionResult:[Qe,{type:"error",error:Te.error}]}}else if(Te.matches)$=Te.matches;else{let{notFoundMatches:Qe,error:Ie,route:gt}=ka(O.pathname);return{matches:Qe,pendingActionResult:[gt.id,{type:"error",error:Ie}]}}}let we,ke=ho($,O);if(!ke.route.action&&!ke.route.lazy)we={type:"error",error:Mn(405,{method:C.method,pathname:O.pathname,routeId:ke.route.id})};else{let Te=xl(s,c,C,$,ke,me?[]:u,ue),Qe=await ea(C,Te,ue,null);if(we=Qe[ke.route.id],!we){for(let Ie of $)if(Qe[Ie.route.id]){we=Qe[Ie.route.id];break}}if(C.signal.aborted)return{shortCircuited:!0}}if(zr(we)){let Te;return he&&he.replace!=null?Te=he.replace:Te=bg(we.response.headers.get("Location"),new URL(C.url),m,t.history)===M.location.pathname+M.location.search,await pt(C,we,!0,{submission:F,replace:Te}),{shortCircuited:!0}}if(yn(we)){let Te=tr($,ke.route.id);return(he&&he.replace)!==!0&&(te="PUSH"),{matches:$,pendingActionResult:[Te.route.id,we,ke.route.id]}}return{matches:$,pendingActionResult:[ke.route.id,we]}}async function Lr(C,O,F,$,ue,Se,me,he,pe,we,ke,Te,Qe){let Ie=Se||Kc(O,me),gt=me||he||Cg(Ie),vt=!K&&!we;if(ue){if(vt){let xt=$n(Te);yt({navigation:Ie,...xt!==void 0?{actionData:xt}:{}},{flushSync:ke})}let Ge=await Ra(F,O.pathname,C.signal);if(Ge.type==="aborted")return{shortCircuited:!0};if(Ge.type==="error"){if(Ge.partialMatches.length===0){let{matches:Bn,route:Lt}=lo(d);return{matches:Bn,loaderData:{},errors:{[Lt.id]:Ge.error}}}let xt=tr(Ge.partialMatches).route.id;return{matches:Ge.partialMatches,loaderData:{},errors:{[xt]:Ge.error}}}else if(Ge.matches)F=Ge.matches;else{let{error:xt,notFoundMatches:Bn,route:Lt}=ka(O.pathname);return{matches:Bn,loaderData:{},errors:{[Lt.id]:xt}}}}let bt=p||d,{dsMatches:Fe,revalidatingFetchers:_t}=mg(C,$,s,c,t.history,M,F,gt,O,we?[]:u,we===!0,N,W,ye,x,X,bt,m,t.patchRoutesOnNavigation!=null,Te,Qe);if(T=++Ee,!t.dataStrategy&&!Fe.some(Ge=>Ge.shouldLoad)&&!Fe.some(Ge=>Ge.route.middleware&&Ge.route.middleware.length>0)&&_t.length===0){let Ge=tt();return Nn(O,{matches:F,loaderData:{},errors:Te&&yn(Te[1])?{[Te[0]]:Te[1].error}:null,...Eg(Te),...Ge?{fetchers:new Map(M.fetchers)}:{}},{flushSync:ke}),{shortCircuited:!0}}if(vt){let Ge={};if(!ue){Ge.navigation=Ie;let xt=$n(Te);xt!==void 0&&(Ge.actionData=xt)}_t.length>0&&(Ge.fetchers=Ca(_t)),yt(Ge,{flushSync:ke})}_t.forEach(Ge=>{nt(Ge.key),Ge.controller&&re.set(Ge.key,Ge.controller)});let Pt=()=>_t.forEach(Ge=>nt(Ge.key));ee&&ee.signal.addEventListener("abort",Pt);let{loaderResults:dt,fetcherResults:Un}=await Z(Fe,_t,C,$);if(C.signal.aborted)return{shortCircuited:!0};ee&&ee.signal.removeEventListener("abort",Pt),_t.forEach(Ge=>re.delete(Ge.key));let on=io(dt);if(on)return await pt(C,on.result,!0,{replace:pe}),{shortCircuited:!0};if(on=io(Un),on)return X.add(on.key),await pt(C,on.result,!0,{replace:pe}),{shortCircuited:!0};let{loaderData:Hn,errors:wn}=Sg(M,F,dt,Te,_t,Un);we&&M.errors&&(wn={...M.errors,...wn});let aa=tt(),fr=Ln(T),hr=aa||fr||_t.length>0;return{matches:F,loaderData:Hn,errors:wn,...hr?{fetchers:new Map(M.fetchers)}:{}}}function $n(C){if(C&&!yn(C[1]))return{[C[0]]:C[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function Ca(C){return C.forEach(O=>{let F=M.fetchers.get(O.key),$=wi(void 0,F?F.data:void 0);M.fetchers.set(O.key,$)}),new Map(M.fetchers)}async function ir(C,O,F,$){nt(C);let ue=($&&$.flushSync)===!0,Se=p||d,me=vf(M.location,M.matches,m,F,O,$?.relative),he=er(Se,me,m),pe=cr(he,Se,me);if(pe.active&&pe.matches&&(he=pe.matches),!he){Me(C,O,Mn(404,{pathname:me}),{flushSync:ue});return}let{path:we,submission:ke,error:Te}=dg(!0,me,$);if(Te){Me(C,O,Te,{flushSync:ue});return}let Qe=t.getContext?await t.getContext():new ug,Ie=($&&$.preventScrollReset)===!0;if(ke&&It(ke.formMethod)){await Rl(C,O,we,he,Qe,pe.active,ue,Ie,ke,$&&$.unstable_defaultShouldRevalidate);return}x.set(C,{routeId:O,path:we}),await Al(C,O,we,he,Qe,pe.active,ue,Ie,ke)}async function Rl(C,O,F,$,ue,Se,me,he,pe,we){ie(),x.delete(C);let ke=M.fetchers.get(C);xe(C,qw(pe,ke),{flushSync:me});let Te=new AbortController,Qe=bl(t.history,F,Te.signal,pe);if(Se){let Ve=await Ra($,new URL(Qe.url).pathname,Qe.signal,C);if(Ve.type==="aborted")return;if(Ve.type==="error"){Me(C,O,Ve.error,{flushSync:me});return}else if(Ve.matches)$=Ve.matches;else{Me(C,O,Mn(404,{pathname:F}),{flushSync:me});return}}let Ie=ho($,F);if(!Ie.route.action&&!Ie.route.lazy){let Ve=Mn(405,{method:pe.formMethod,pathname:F,routeId:O});Me(C,O,Ve,{flushSync:me});return}re.set(C,Te);let gt=Ee,vt=xl(s,c,Qe,$,Ie,u,ue),bt=await ea(Qe,vt,ue,C),Fe=bt[Ie.route.id];if(!Fe){for(let Ve of vt)if(bt[Ve.route.id]){Fe=bt[Ve.route.id];break}}if(Qe.signal.aborted){re.get(C)===Te&&re.delete(C);return}if(ye.has(C)){if(zr(Fe)||yn(Fe)){xe(C,Sa(void 0));return}}else{if(zr(Fe))if(re.delete(C),T>gt){xe(C,Sa(void 0));return}else return X.add(C),xe(C,wi(pe)),pt(Qe,Fe,!1,{fetcherSubmission:pe,preventScrollReset:he});if(yn(Fe)){Me(C,O,Fe.error);return}}let _t=M.navigation.location||M.location,Pt=bl(t.history,_t,Te.signal),dt=p||d,Un=M.navigation.state!=="idle"?er(dt,M.navigation.location,m):M.matches;Le(Un,"Didn't find any matches after fetcher action");let on=++Ee;R.set(C,on);let Hn=wi(pe,Fe.data);M.fetchers.set(C,Hn);let{dsMatches:wn,revalidatingFetchers:aa}=mg(Pt,ue,s,c,t.history,M,Un,pe,_t,u,!1,N,W,ye,x,X,dt,m,t.patchRoutesOnNavigation!=null,[Ie.route.id,Fe],we);aa.filter(Ve=>Ve.key!==C).forEach(Ve=>{let dr=Ve.key,Zi=M.fetchers.get(dr),Dl=wi(void 0,Zi?Zi.data:void 0);M.fetchers.set(dr,Dl),nt(dr),Ve.controller&&re.set(dr,Ve.controller)}),yt({fetchers:new Map(M.fetchers)});let fr=()=>aa.forEach(Ve=>nt(Ve.key));Te.signal.addEventListener("abort",fr);let{loaderResults:hr,fetcherResults:Ge}=await Z(wn,aa,Pt,ue);if(Te.signal.aborted)return;if(Te.signal.removeEventListener("abort",fr),R.delete(C),re.delete(C),aa.forEach(Ve=>re.delete(Ve.key)),M.fetchers.has(C)){let Ve=Sa(Fe.data);M.fetchers.set(C,Ve)}let xt=io(hr);if(xt)return pt(Pt,xt.result,!1,{preventScrollReset:he});if(xt=io(Ge),xt)return X.add(xt.key),pt(Pt,xt.result,!1,{preventScrollReset:he});let{loaderData:Bn,errors:Lt}=Sg(M,Un,hr,void 0,aa,Ge);Ln(on),M.navigation.state==="loading"&&on>T?(Le(te,"Expected pending action"),ee&&ee.abort(),Nn(M.navigation.location,{matches:Un,loaderData:Bn,errors:Lt,fetchers:new Map(M.fetchers)})):(yt({errors:Lt,loaderData:xg(M.loaderData,Bn,Un,Lt),fetchers:new Map(M.fetchers)}),N=!1)}async function Al(C,O,F,$,ue,Se,me,he,pe){let we=M.fetchers.get(C);xe(C,wi(pe,we?we.data:void 0),{flushSync:me});let ke=new AbortController,Te=bl(t.history,F,ke.signal);if(Se){let Fe=await Ra($,new URL(Te.url).pathname,Te.signal,C);if(Fe.type==="aborted")return;if(Fe.type==="error"){Me(C,O,Fe.error,{flushSync:me});return}else if(Fe.matches)$=Fe.matches;else{Me(C,O,Mn(404,{pathname:F}),{flushSync:me});return}}let Qe=ho($,F);re.set(C,ke);let Ie=Ee,gt=xl(s,c,Te,$,Qe,u,ue),bt=(await ea(Te,gt,ue,C))[Qe.route.id];if(re.get(C)===ke&&re.delete(C),!Te.signal.aborted){if(ye.has(C)){xe(C,Sa(void 0));return}if(zr(bt))if(T>Ie){xe(C,Sa(void 0));return}else{X.add(C),await pt(Te,bt,!1,{preventScrollReset:he});return}if(yn(bt)){Me(C,O,bt.error);return}xe(C,Sa(bt.data))}}async function pt(C,O,F,{submission:$,fetcherSubmission:ue,preventScrollReset:Se,replace:me}={}){F||(de?.resolve(),de=null),O.response.headers.has("X-Remix-Revalidate")&&(N=!0);let he=O.response.headers.get("Location");Le(he,"Expected a Location header on the redirect Response"),he=bg(he,new URL(C.url),m,t.history);let pe=_i(M.location,he,{_isRedirect:!0});if(l){let gt=!1;if(O.response.headers.has("X-Remix-Reload-Document"))gt=!0;else if(ko(he)){const vt=My(he,!0);gt=vt.origin!==r.location.origin||_n(vt.pathname,m)==null}if(gt){me?r.location.replace(he):r.location.assign(he);return}}ee=null;let we=me===!0||O.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ke,formAction:Te,formEncType:Qe}=M.navigation;!$&&!ue&&ke&&Te&&Qe&&($=Cg(M.navigation));let Ie=$||ue;if(gw.has(O.response.status)&&Ie&&It(Ie.formMethod))await Jt(we,pe,{submission:{...Ie,formAction:he},preventScrollReset:Se||U,enableViewTransition:F?ae:void 0});else{let gt=Kc(pe,$);await Jt(we,pe,{overrideNavigation:gt,fetcherSubmission:ue,preventScrollReset:Se||U,enableViewTransition:F?ae:void 0})}}async function ea(C,O,F,$){let ue,Se={};try{ue=await kw(y,C,O,$,F,!1)}catch(me){return O.filter(he=>he.shouldLoad).forEach(he=>{Se[he.route.id]={type:"error",error:me}}),Se}if(C.signal.aborted)return Se;if(!It(C.method))for(let me of O){if(ue[me.route.id]?.type==="error")break;!ue.hasOwnProperty(me.route.id)&&!M.loaderData.hasOwnProperty(me.route.id)&&(!M.errors||!M.errors.hasOwnProperty(me.route.id))&&me.shouldCallHandler()&&(ue[me.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${me.route.id}`)})}for(let[me,he]of Object.entries(ue))if(Lw(he)){let pe=he.result;Se[me]={type:"redirect",response:Mw(pe,C,me,O,m)}}else Se[me]=await Dw(he);return Se}async function Z(C,O,F,$){let ue=ea(F,C,$,null),Se=Promise.all(O.map(async pe=>{if(pe.matches&&pe.match&&pe.request&&pe.controller){let ke=(await ea(pe.request,pe.matches,$,pe.key))[pe.match.route.id];return{[pe.key]:ke}}else return Promise.resolve({[pe.key]:{type:"error",error:Mn(404,{pathname:pe.path})}})})),me=await ue,he=(await Se).reduce((pe,we)=>Object.assign(pe,we),{});return{loaderResults:me,fetcherResults:he}}function ie(){N=!0,x.forEach((C,O)=>{re.has(O)&&W.add(O),nt(O)})}function xe(C,O,F={}){M.fetchers.set(C,O),yt({fetchers:new Map(M.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function Me(C,O,F,$={}){let ue=tr(M.matches,O);ln(C),yt({errors:{[ue.route.id]:F},fetchers:new Map(M.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Je(C){return le.set(C,(le.get(C)||0)+1),ye.has(C)&&ye.delete(C),M.fetchers.get(C)||yw}function Vt(C,O){nt(C,O?.reason),xe(C,Sa(null))}function ln(C){let O=M.fetchers.get(C);re.has(C)&&!(O&&O.state==="loading"&&R.has(C))&&nt(C),x.delete(C),R.delete(C),X.delete(C),ye.delete(C),W.delete(C),M.fetchers.delete(C)}function jt(C){let O=(le.get(C)||0)-1;O<=0?(le.delete(C),ye.add(C)):le.set(C,O),yt({fetchers:new Map(M.fetchers)})}function nt(C,O){let F=re.get(C);F&&(F.abort(O),re.delete(C))}function Nt(C){for(let O of C){let F=Je(O),$=Sa(F.data);M.fetchers.set(O,$)}}function tt(){let C=[],O=!1;for(let F of X){let $=M.fetchers.get(F);Le($,`Expected fetcher: ${F}`),$.state==="loading"&&(X.delete(F),C.push(F),O=!0)}return Nt(C),O}function Ln(C){let O=[];for(let[F,$]of R)if($<C){let ue=M.fetchers.get(F);Le(ue,`Expected fetcher: ${F}`),ue.state==="loading"&&(nt(F),R.delete(F),O.push(F))}return Nt(O),O.length>0}function un(C,O){let F=M.blockers.get(C)||bi;return ve.get(C)!==O&&ve.set(C,O),F}function Vi(C){M.blockers.delete(C),ve.delete(C)}function ta(C,O){let F=M.blockers.get(C)||bi;Le(F.state==="unblocked"&&O.state==="blocked"||F.state==="blocked"&&O.state==="blocked"||F.state==="blocked"&&O.state==="proceeding"||F.state==="blocked"&&O.state==="unblocked"||F.state==="proceeding"&&O.state==="unblocked",`Invalid blocker state transition: ${F.state} -> ${O.state}`);let $=new Map(M.blockers);$.set(C,O),yt({blockers:$})}function ur({currentLocation:C,nextLocation:O,historyAction:F}){if(ve.size===0)return;ve.size>1&&Ct(!1,"A router only supports one blocker at a time");let $=Array.from(ve.entries()),[ue,Se]=$[$.length-1],me=M.blockers.get(ue);if(!(me&&me.state==="proceeding")&&Se({currentLocation:C,nextLocation:O,historyAction:F}))return ue}function ka(C){let O=Mn(404,{pathname:C}),F=p||d,{matches:$,route:ue}=lo(F);return{notFoundMatches:$,route:ue,error:O}}function na(C,O,F){if(E=C,j=O,z=F||null,!A&&M.navigation===Pc){A=!0;let $=Xi(M.location,M.matches);$!=null&&yt({restoreScrollPosition:$})}return()=>{E=null,j=null,z=null}}function or(C,O){return z&&z(C,O.map($=>F1($,M.loaderData)))||C.key}function sr(C,O){if(E&&j){let F=or(C,O);E[F]=j()}}function Xi(C,O){if(E){let F=or(C,O),$=E[F];if(typeof $=="number")return $}return null}function cr(C,O,F){if(t.patchRoutesOnNavigation)if(C){if(Object.keys(C[0].params).length>0)return{active:!0,matches:Ri(O,F,m,!0)}}else return{active:!0,matches:Ri(O,F,m,!0)||[]};return{active:!1,matches:null}}async function Ra(C,O,F,$){if(!t.patchRoutesOnNavigation)return{type:"success",matches:C};let ue=C;for(;;){let Se=p==null,me=p||d,he=c;try{await t.patchRoutesOnNavigation({signal:F,path:O,matches:ue,fetcherKey:$,patch:(ke,Te)=>{F.aborted||pg(ke,Te,me,he,s,!1)}})}catch(ke){return{type:"error",error:ke,partialMatches:ue}}finally{Se&&!F.aborted&&(d=[...d])}if(F.aborted)return{type:"aborted"};let pe=er(me,O,m),we=null;if(pe){if(Object.keys(pe[0].params).length===0)return{type:"success",matches:pe};if(we=Ri(me,O,m,!0),!(we&&ue.length<we.length&&Aa(ue,we.slice(0,ue.length))))return{type:"success",matches:pe}}if(we||(we=Ri(me,O,m,!0)),!we||Aa(ue,we))return{type:"success",matches:null};ue=we}}function Aa(C,O){return C.length===O.length&&C.every((F,$)=>F.route.id===O[$].route.id)}function No(C){c={},p=Oi(C,s,void 0,c)}function Qi(C,O,F=!1){let $=p==null;pg(C,O,p||d,c,s,F),$&&(d=[...d],yt({}))}return q={get basename(){return m},get future(){return g},get state(){return M},get routes(){return d},get window(){return r},initialize:et,subscribe:jn,enableScrollRestoration:na,navigate:bn,fetch:ir,revalidate:Ta,createHref:C=>t.history.createHref(C),encodeLocation:C=>t.history.encodeLocation(C),getFetcher:Je,resetFetcher:Vt,deleteFetcher:jt,dispose:Zt,getBlocker:un,deleteBlocker:Vi,patchRoutes:Qi,_internalFetchControllers:re,_internalSetRoutes:No,_internalSetStateDoNotUseOrYouWillBreakYourApp(C){yt(C)}},t.unstable_instrumentations&&(q=ow(q,t.unstable_instrumentations.map(C=>C.router).filter(Boolean))),q}function ww(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function vf(t,r,l,u,o,s){let c,d;if(o){c=[];for(let m of r)if(c.push(m),m.route.id===o){d=m;break}}else c=r,d=r[r.length-1];let p=Uf(u||".",Lf(c),_n(t.pathname,l)||t.pathname,s==="path");if(u==null&&(p.search=t.search,p.hash=t.hash),(u==null||u===""||u===".")&&d){let m=Yf(p.search);if(d.route.index&&!m)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!d.route.index&&m){let y=new URLSearchParams(p.search),g=y.getAll("index");y.delete("index"),g.filter(b=>b).forEach(b=>y.append("index",b));let w=y.toString();p.search=w?`?${w}`:""}}return l!=="/"&&(p.pathname=nw({basename:l,pathname:p.pathname})),Kn(p)}function dg(t,r,l){if(!l||!ww(l))return{path:r};if(l.formMethod&&!Bw(l.formMethod))return{path:r,error:Mn(405,{method:l.formMethod})};let u=()=>({path:r,error:Mn(400,{type:"invalid-body"})}),s=(l.formMethod||"get").toUpperCase(),c=Qy(r);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!It(s))return u();let g=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((w,[b,E])=>`${w}${b}=${E}
`,""):String(l.body);return{path:r,submission:{formMethod:s,formAction:c,formEncType:l.formEncType,formData:void 0,json:void 0,text:g}}}else if(l.formEncType==="application/json"){if(!It(s))return u();try{let g=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:r,submission:{formMethod:s,formAction:c,formEncType:l.formEncType,formData:void 0,json:g,text:void 0}}}catch{return u()}}}Le(typeof FormData=="function","FormData is not available in this environment");let d,p;if(l.formData)d=Sf(l.formData),p=l.formData;else if(l.body instanceof FormData)d=Sf(l.body),p=l.body;else if(l.body instanceof URLSearchParams)d=l.body,p=wg(d);else if(l.body==null)d=new URLSearchParams,p=new FormData;else try{d=new URLSearchParams(l.body),p=wg(d)}catch{return u()}let m={formMethod:s,formAction:c,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(It(m.formMethod))return{path:r,submission:m};let y=rr(r);return t&&y.search&&Yf(y.search)&&d.append("index",""),y.search=`?${d}`,{path:Kn(y),submission:m}}function mg(t,r,l,u,o,s,c,d,p,m,y,g,w,b,E,z,j,A,L,H,fe){let oe=H?yn(H[1])?H[1].error:H[1].data:void 0,q=o.createURL(s.location),M=o.createURL(p),te;if(y&&s.errors){let K=Object.keys(s.errors)[0];te=c.findIndex(N=>N.route.id===K)}else if(H&&yn(H[1])){let K=H[0];te=c.findIndex(N=>N.route.id===K)-1}let de=H?H[1].statusCode:void 0,U=de&&de>=400,ee={currentUrl:q,currentParams:s.matches[0]?.params||{},nextUrl:M,nextParams:c[0].params,...d,actionResult:oe,actionStatus:de},ae=Hi(c),De=c.map((K,N)=>{let{route:W}=K,re=null;if(te!=null&&N>te?re=!1:W.lazy?re=!0:Hf(W)?y?re=bf(W,s.loaderData,s.errors):Sw(s.loaderData,s.matches[N],K)&&(re=!0):re=!1,re!==null)return wf(l,u,t,ae,K,m,r,re);let Ee=!1;typeof fe=="boolean"?Ee=fe:U?Ee=!1:(g||q.pathname+q.search===M.pathname+M.search||q.search!==M.search||xw(s.matches[N],K))&&(Ee=!0);let T={...ee,defaultShouldRevalidate:Ee},R=Ai(K,T);return wf(l,u,t,ae,K,m,r,R,T,fe)}),ce=[];return E.forEach((K,N)=>{if(y||!c.some(le=>le.route.id===K.routeId)||b.has(N))return;let W=s.fetchers.get(N),re=W&&W.state!=="idle"&&W.data===void 0,Ee=er(j,K.path,A);if(!Ee){if(L&&re)return;ce.push({key:N,routeId:K.routeId,path:K.path,matches:null,match:null,request:null,controller:null});return}if(z.has(N))return;let T=ho(Ee,K.path),R=new AbortController,X=bl(o,K.path,R.signal),x=null;if(w.has(N))w.delete(N),x=xl(l,u,X,Ee,T,m,r);else if(re)g&&(x=xl(l,u,X,Ee,T,m,r));else{let le;typeof fe=="boolean"?le=fe:U?le=!1:le=g;let ye={...ee,defaultShouldRevalidate:le};Ai(T,ye)&&(x=xl(l,u,X,Ee,T,m,r,ye))}x&&ce.push({key:N,routeId:K.routeId,path:K.path,matches:x,match:T,request:X,controller:R})}),{dsMatches:De,revalidatingFetchers:ce}}function Hf(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function bf(t,r,l){if(t.lazy)return!0;if(!Hf(t))return!1;let u=r!=null&&t.id in r,o=l!=null&&l[t.id]!==void 0;return!u&&o?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!u&&!o}function Sw(t,r,l){let u=!r||l.route.id!==r.route.id,o=!t.hasOwnProperty(l.route.id);return u||o}function xw(t,r){let l=t.route.path;return t.pathname!==r.pathname||l!=null&&l.endsWith("*")&&t.params["*"]!==r.params["*"]}function Ai(t,r){if(t.route.shouldRevalidate){let l=t.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}function pg(t,r,l,u,o,s){let c;if(t){let m=u[t];Le(m,`No route found to patch children into: routeId = ${t}`),m.children||(m.children=[]),c=m.children}else c=l;let d=[],p=[];if(r.forEach(m=>{let y=c.find(g=>Iy(m,g));y?p.push({existingRoute:y,newRoute:m}):d.push(m)}),d.length>0){let m=Oi(d,o,[t||"_","patch",String(c?.length||"0")],u);c.push(...m)}if(s&&p.length>0)for(let m=0;m<p.length;m++){let{existingRoute:y,newRoute:g}=p[m],w=y,[b]=Oi([g],o,[],{},!0);Object.assign(w,{element:b.element?b.element:w.element,errorElement:b.errorElement?b.errorElement:w.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:w.hydrateFallbackElement})}}function Iy(t,r){return"id"in t&&"id"in r&&t.id===r.id?!0:t.index===r.index&&t.path===r.path&&t.caseSensitive===r.caseSensitive?(!t.children||t.children.length===0)&&(!r.children||r.children.length===0)?!0:t.children.every((l,u)=>r.children?.some(o=>Iy(l,o))):!1}var gg=new WeakMap,Fy=({key:t,route:r,manifest:l,mapRouteProperties:u})=>{let o=l[r.id];if(Le(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let s=o.lazy[t];if(!s)return;let c=gg.get(o);c||(c={},gg.set(o,c));let d=c[t];if(d)return d;let p=(async()=>{let m=B1(t),g=o[t]!==void 0&&t!=="hasErrorBoundary";if(m)Ct(!m,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),c[t]=Promise.resolve();else if(g)Ct(!1,`Route "${o.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let w=await s();w!=null&&(Object.assign(o,{[t]:w}),Object.assign(o,u(o)))}typeof o.lazy=="object"&&(o.lazy[t]=void 0,Object.values(o.lazy).every(w=>w===void 0)&&(o.lazy=void 0))})();return c[t]=p,p},yg=new WeakMap;function Ew(t,r,l,u,o){let s=l[t.id];if(Le(s,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let y=yg.get(s);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let g=(async()=>{Le(typeof t.lazy=="function","No lazy route function found");let w=await t.lazy(),b={};for(let E in w){let z=w[E];if(z===void 0)continue;let j=q1(E),L=s[E]!==void 0&&E!=="hasErrorBoundary";j?Ct(!j,"Route property "+E+" is not a supported property to be returned from a lazy route function. This property will be ignored."):L?Ct(!L,`Route "${s.id}" has a static property "${E}" defined but its lazy function is also returning a value for this property. The lazy route property "${E}" will be ignored.`):b[E]=z}Object.assign(s,b),Object.assign(s,{...u(s),lazy:void 0})})();return yg.set(s,g),g.catch(()=>{}),{lazyRoutePromise:g,lazyHandlerPromise:g}}let c=Object.keys(t.lazy),d=[],p;for(let y of c){if(o&&o.includes(y))continue;let g=Fy({key:y,route:t,manifest:l,mapRouteProperties:u});g&&(d.push(g),y===r&&(p=g))}let m=d.length>0?Promise.all(d).then(()=>{}):void 0;return m?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:m,lazyHandlerPromise:p}}async function vg(t){let r=t.matches.filter(o=>o.shouldLoad),l={};return(await Promise.all(r.map(o=>o.resolve()))).forEach((o,s)=>{l[r[s].route.id]=o}),l}async function Tw(t){return t.matches.some(r=>r.route.middleware)?Gy(t,()=>vg(t)):vg(t)}function Gy(t,r){return Cw(t,r,u=>{if(Hw(u))throw u;return u},jw,l);function l(u,o,s){if(s)return Promise.resolve(Object.assign(s.value,{[o]:{type:"error",result:u}}));{let{matches:c}=t,d=Math.min(Math.max(c.findIndex(m=>m.route.id===o),0),Math.max(c.findIndex(m=>m.shouldCallHandler()),0)),p=tr(c,c[d].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:u}})}}}async function Cw(t,r,l,u,o){let{matches:s,request:c,params:d,context:p,unstable_pattern:m}=t,y=s.flatMap(w=>w.route.middleware?w.route.middleware.map(b=>[w.route.id,b]):[]);return await Vy({request:c,params:d,context:p,unstable_pattern:m},y,r,l,u,o)}async function Vy(t,r,l,u,o,s,c=0){let{request:d}=t;if(d.signal.aborted)throw d.signal.reason??new Error(`Request aborted: ${d.method} ${d.url}`);let p=r[c];if(!p)return await l();let[m,y]=p,g,w=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");try{return g={value:await Vy(t,r,l,u,o,s,c+1)},g.value}catch(b){return g={value:await s(b,m,g)},g.value}};try{let b=await y(t,w),E=b!=null?u(b):void 0;return o(E)?E:g?E??g.value:(g={value:await w()},g.value)}catch(b){return await s(b,m,g)}}function Xy(t,r,l,u,o){let s=Fy({key:"middleware",route:u.route,manifest:r,mapRouteProperties:t}),c=Ew(u.route,It(l.method)?"action":"loader",r,t,o);return{middleware:s,route:c.lazyRoutePromise,handler:c.lazyHandlerPromise}}function wf(t,r,l,u,o,s,c,d,p=null,m){let y=!1,g=Xy(t,r,l,o,s);return{...o,_lazyPromises:g,shouldLoad:d,shouldRevalidateArgs:p,shouldCallHandler(w){return y=!0,p?typeof m=="boolean"?Ai(o,{...p,defaultShouldRevalidate:m}):typeof w=="boolean"?Ai(o,{...p,defaultShouldRevalidate:w}):Ai(o,p):d},resolve(w){let{lazy:b,loader:E,middleware:z}=o.route,j=y||d||w&&!It(l.method)&&(b||E),A=z&&z.length>0&&!E&&!b;return j&&(It(l.method)||!A)?Rw({request:l,unstable_pattern:u,match:o,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:w,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function xl(t,r,l,u,o,s,c,d=null){return u.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,shouldRevalidateArgs:d,shouldCallHandler:()=>!1,_lazyPromises:Xy(t,r,l,p,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:wf(t,r,l,Hi(u),p,s,c,!0,d))}async function kw(t,r,l,u,o,s){l.some(m=>m._lazyPromises?.middleware)&&await Promise.all(l.map(m=>m._lazyPromises?.middleware));let c={request:r,unstable_pattern:Hi(l),params:l[0].params,context:o,matches:l},p=await t({...c,fetcherKey:u,runClientMiddleware:m=>{let y=c;return Gy(y,()=>m({...y,fetcherKey:u,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(l.flatMap(m=>[m._lazyPromises?.handler,m._lazyPromises?.route]))}catch{}return p}async function Rw({request:t,unstable_pattern:r,match:l,lazyHandlerPromise:u,lazyRoutePromise:o,handlerOverride:s,scopedContext:c}){let d,p,m=It(t.method),y=m?"action":"loader",g=w=>{let b,E=new Promise((A,L)=>b=L);p=()=>b(),t.signal.addEventListener("abort",p);let z=A=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${y}" [routeId: ${l.route.id}]`)):w({request:t,unstable_pattern:r,params:l.params,context:c},...A!==void 0?[A]:[]),j=(async()=>{try{return{type:"data",result:await(s?s(L=>z(L)):z())}}catch(A){return{type:"error",result:A}}})();return Promise.race([j,E])};try{let w=m?l.route.action:l.route.loader;if(u||o)if(w){let b,[E]=await Promise.all([g(w).catch(z=>{b=z}),u,o]);if(b!==void 0)throw b;d=E}else{await u;let b=m?l.route.action:l.route.loader;if(b)[d]=await Promise.all([g(b),o]);else if(y==="action"){let E=new URL(t.url),z=E.pathname+E.search;throw Mn(405,{method:t.method,pathname:z,routeId:l.route.id})}else return{type:"data",result:void 0}}else if(w)d=await g(w);else{let b=new URL(t.url),E=b.pathname+b.search;throw Mn(404,{pathname:E})}}catch(w){return{type:"error",result:w}}finally{p&&t.signal.removeEventListener("abort",p)}return d}async function Aw(t){let r=t.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?t.body==null?null:t.json():t.text()}async function Dw(t){let{result:r,type:l}=t;if(Bf(r)){let u;try{u=await Aw(r)}catch(o){return{type:"error",error:o}}return l==="error"?{type:"error",error:new Ui(r.status,r.statusText,u),statusCode:r.status,headers:r.headers}:{type:"data",data:u,statusCode:r.status,headers:r.headers}}return l==="error"?Tg(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:Ow(r),statusCode:ji(r)?r.status:void 0,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:ji(r)?r.status:void 0}:Tg(r)?{type:"data",data:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function Mw(t,r,l,u,o){let s=t.headers.get("Location");if(Le(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!ko(s)){let c=u.slice(0,u.findIndex(d=>d.route.id===l)+1);s=vf(new URL(r.url),c,o,s),t.headers.set("Location",s)}return t}function bg(t,r,l,u){let o=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(ko(t)){let s=t,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s);if(o.includes(c.protocol))throw new Error("Invalid redirect location");let d=_n(c.pathname,l)!=null;if(c.origin===r.origin&&d)return c.pathname+c.search+c.hash}try{let s=u.createURL(t);if(o.includes(s.protocol))throw new Error("Invalid redirect location")}catch{}return t}function bl(t,r,l,u){let o=t.createURL(Qy(r)).toString(),s={signal:l};if(u&&It(u.formMethod)){let{formMethod:c,formEncType:d}=u;s.method=c.toUpperCase(),d==="application/json"?(s.headers=new Headers({"Content-Type":d}),s.body=JSON.stringify(u.json)):d==="text/plain"?s.body=u.text:d==="application/x-www-form-urlencoded"&&u.formData?s.body=Sf(u.formData):s.body=u.formData}return new Request(o,s)}function Sf(t){let r=new URLSearchParams;for(let[l,u]of t.entries())r.append(l,typeof u=="string"?u:u.name);return r}function wg(t){let r=new FormData;for(let[l,u]of t.entries())r.append(l,u);return r}function zw(t,r,l,u=!1,o=!1){let s={},c=null,d,p=!1,m={},y=l&&yn(l[1])?l[1].error:void 0;return t.forEach(g=>{if(!(g.route.id in r))return;let w=g.route.id,b=r[w];if(Le(!zr(b),"Cannot handle redirect results in processLoaderData"),yn(b)){let E=b.error;if(y!==void 0&&(E=y,y=void 0),c=c||{},o)c[w]=E;else{let z=tr(t,w);c[z.route.id]==null&&(c[z.route.id]=E)}u||(s[w]=qy),p||(p=!0,d=ji(b.error)?b.error.status:500),b.headers&&(m[w]=b.headers)}else s[w]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(d=b.statusCode),b.headers&&(m[w]=b.headers)}),y!==void 0&&l&&(c={[l[0]]:y},l[2]&&(s[l[2]]=void 0)),{loaderData:s,errors:c,statusCode:d||200,loaderHeaders:m}}function Sg(t,r,l,u,o,s){let{loaderData:c,errors:d}=zw(r,l,u);return o.filter(p=>!p.matches||p.matches.some(m=>m.shouldLoad)).forEach(p=>{let{key:m,match:y,controller:g}=p;if(g&&g.signal.aborted)return;let w=s[m];if(Le(w,"Did not find corresponding fetcher result"),yn(w)){let b=tr(t.matches,y?.route.id);d&&d[b.route.id]||(d={...d,[b.route.id]:w.error}),t.fetchers.delete(m)}else if(zr(w))Le(!1,"Unhandled fetcher revalidation redirect");else{let b=Sa(w.data);t.fetchers.set(m,b)}}),{loaderData:c,errors:d}}function xg(t,r,l,u){let o=Object.entries(r).filter(([,s])=>s!==qy).reduce((s,[c,d])=>(s[c]=d,s),{});for(let s of l){let c=s.route.id;if(!r.hasOwnProperty(c)&&t.hasOwnProperty(c)&&s.route.loader&&(o[c]=t[c]),u&&u.hasOwnProperty(c))break}return o}function Eg(t){return t?yn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function tr(t,r){return(r?t.slice(0,t.findIndex(u=>u.route.id===r)+1):[...t]).reverse().find(u=>u.route.hasErrorBoundary===!0)||t[0]}function lo(t){let r=t.length===1?t[0]:t.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Mn(t,{pathname:r,routeId:l,method:u,type:o,message:s}={}){let c="Unknown Server Error",d="Unknown @remix-run/router error";return t===400?(c="Bad Request",u&&r&&l?d=`You made a ${u} request to "${r}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.`:o==="invalid-body"&&(d="Unable to encode submission body")):t===403?(c="Forbidden",d=`Route "${l}" does not match URL "${r}"`):t===404?(c="Not Found",d=`No route matches URL "${r}"`):t===405&&(c="Method Not Allowed",u&&r&&l?d=`You made a ${u.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.`:u&&(d=`Invalid request method "${u.toUpperCase()}"`)),new Ui(t||500,c,new Error(d),!0)}function io(t){let r=Object.entries(t);for(let l=r.length-1;l>=0;l--){let[u,o]=r[l];if(zr(o))return{key:u,result:o}}}function Qy(t){let r=typeof t=="string"?rr(t):t;return Kn({...r,hash:""})}function _w(t,r){return t.pathname!==r.pathname||t.search!==r.search?!1:t.hash===""?r.hash!=="":t.hash===r.hash?!0:r.hash!==""}function Ow(t){return new Ui(t.init?.status??500,t.init?.statusText??"Internal Server Error",t.data)}function jw(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([r,l])=>typeof r=="string"&&Nw(l))}function Nw(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Lw(t){return Bf(t.result)&&By.has(t.result.status)}function yn(t){return t.type==="error"}function zr(t){return(t&&t.type)==="redirect"}function Tg(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Bf(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Uw(t){return By.has(t)}function Hw(t){return Bf(t)&&Uw(t.status)&&t.headers.has("Location")}function Bw(t){return pw.has(t.toUpperCase())}function It(t){return dw.has(t.toUpperCase())}function Yf(t){return new URLSearchParams(t).getAll("index").some(r=>r==="")}function ho(t,r){let l=typeof r=="string"?rr(r).search:r.search;if(t[t.length-1].route.index&&Yf(l||""))return t[t.length-1];let u=jy(t);return u[u.length-1]}function Cg(t){let{formMethod:r,formAction:l,formEncType:u,text:o,formData:s,json:c}=t;if(!(!r||!l||!u)){if(o!=null)return{formMethod:r,formAction:l,formEncType:u,formData:void 0,json:void 0,text:o};if(s!=null)return{formMethod:r,formAction:l,formEncType:u,formData:s,json:void 0,text:void 0};if(c!==void 0)return{formMethod:r,formAction:l,formEncType:u,formData:void 0,json:c,text:void 0}}}function Kc(t,r){return r?{state:"loading",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Yw(t,r){return{state:"submitting",location:t,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function wi(t,r){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function qw(t,r){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:r?r.data:void 0}}function Sa(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Iw(t,r){try{let l=t.sessionStorage.getItem(Yy);if(l){let u=JSON.parse(l);for(let[o,s]of Object.entries(u||{}))s&&Array.isArray(s)&&r.set(o,new Set(s||[]))}}catch{}}function Fw(t,r){if(r.size>0){let l={};for(let[u,o]of r)l[u]=[...o];try{t.sessionStorage.setItem(Yy,JSON.stringify(l))}catch(u){Ct(!1,`Failed to save applied view transitions in sessionStorage (${u}).`)}}}function kg(){let t,r,l=new Promise((u,o)=>{t=async s=>{u(s);try{await l}catch{}},r=async s=>{o(s);try{await l}catch{}}});return{promise:l,resolve:t,reject:r}}var Or=G.createContext(null);Or.displayName="DataRouter";var Bi=G.createContext(null);Bi.displayName="DataRouterState";var Zy=G.createContext(!1);function Gw(){return G.useContext(Zy)}var qf=G.createContext({isTransitioning:!1});qf.displayName="ViewTransition";var Jy=G.createContext(new Map);Jy.displayName="Fetchers";var Vw=G.createContext(null);Vw.displayName="Await";var On=G.createContext(null);On.displayName="Navigation";var Ro=G.createContext(null);Ro.displayName="Location";var Gn=G.createContext({outlet:null,matches:[],isDataRoute:!1});Gn.displayName="Route";var If=G.createContext(null);If.displayName="RouteError";var Py="REACT_ROUTER_ERROR",Xw="REDIRECT",Qw="ROUTE_ERROR_RESPONSE";function Zw(t){if(t.startsWith(`${Py}:${Xw}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Jw(t){if(t.startsWith(`${Py}:${Qw}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Ui(r.status,r.statusText,r.data)}catch{}}function Pw(t,{relative:r}={}){Le(Yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=G.useContext(On),{hash:o,pathname:s,search:c}=qi(t,{relative:r}),d=s;return l!=="/"&&(d=s==="/"?l:Pn([l,s])),u.createHref({pathname:d,search:c,hash:o})}function Yi(){return G.useContext(Ro)!=null}function xa(){return Le(Yi(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Ro).location}var Ky="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wy(t){G.useContext(On).static||G.useLayoutEffect(t)}function $y(){let{isDataRoute:t}=G.useContext(Gn);return t?fS():Kw()}function Kw(){Le(Yi(),"useNavigate() may be used only in the context of a <Router> component.");let t=G.useContext(Or),{basename:r,navigator:l}=G.useContext(On),{matches:u}=G.useContext(Gn),{pathname:o}=xa(),s=JSON.stringify(Lf(u)),c=G.useRef(!1);return Wy(()=>{c.current=!0}),G.useCallback((p,m={})=>{if(Ct(c.current,Ky),!c.current)return;if(typeof p=="number"){l.go(p);return}let y=Uf(p,JSON.parse(s),o,m.relative==="path");t==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Pn([r,y.pathname])),(m.replace?l.replace:l.push)(y,m.state,m)},[r,l,s,o,t])}var Ww=G.createContext(null);function $w(t){let r=G.useContext(Gn).outlet;return G.useMemo(()=>r&&G.createElement(Ww.Provider,{value:t},r),[r,t])}function ev(){let{matches:t}=G.useContext(Gn),r=t[t.length-1];return r?r.params:{}}function qi(t,{relative:r}={}){let{matches:l}=G.useContext(Gn),{pathname:u}=xa(),o=JSON.stringify(Lf(l));return G.useMemo(()=>Uf(t,JSON.parse(o),u,r==="path"),[t,o,u,r])}function eS(t,r,l,u,o){Le(Yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=G.useContext(On),{matches:c}=G.useContext(Gn),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",y=d?d.pathnameBase:"/",g=d&&d.route;{let L=g&&g.path||"";nv(m,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let w=xa(),b;b=w;let E=b.pathname||"/",z=E;if(y!=="/"){let L=y.replace(/^\//,"").split("/");z="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let j=er(t,{pathname:z});return Ct(g||j!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Ct(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),lS(j&&j.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:Pn([y,s.encodeLocation?s.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?y:Pn([y,s.encodeLocation?s.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),c,l,u,o)}function tS(){let t=cS(),r=ji(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),l=t instanceof Error?t.stack:null,u="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:u},s={padding:"2px 4px",backgroundColor:u},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:s},"ErrorBoundary")," or"," ",G.createElement("code",{style:s},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},r),l?G.createElement("pre",{style:o},l):null,c)}var nS=G.createElement(tS,null),tv=class extends G.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const l=Jw(t.digest);l&&(t=l)}let r=t!==void 0?G.createElement(Gn.Provider,{value:this.props.routeContext},G.createElement(If.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?G.createElement(aS,{error:t},r):r}};tv.contextType=Zy;var Wc=new WeakMap;function aS({children:t,error:r}){let{basename:l}=G.useContext(On);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=Zw(r.digest);if(u){let o=Wc.get(r);if(o)throw o;let s=Ly(u.location,l);if(Ny&&!Wc.get(r))if(s.isExternal||u.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:u.replace}));throw Wc.set(r,c),c}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function rS({routeContext:t,match:r,children:l}){let u=G.useContext(Or);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),G.createElement(Gn.Provider,{value:t},l)}function lS(t,r=[],l=null,u=null,o=null){if(t==null){if(!l)return null;if(l.errors)t=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)t=l.matches;else return null}let s=t,c=l?.errors;if(c!=null){let y=s.findIndex(g=>g.route.id&&c?.[g.route.id]!==void 0);Le(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,y+1))}let d=!1,p=-1;if(l)for(let y=0;y<s.length;y++){let g=s[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=y),g.route.id){let{loaderData:w,errors:b}=l,E=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){d=!0,p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}let m=l&&u?(y,g)=>{u(y,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Hi(l.matches),errorInfo:g})}:void 0;return s.reduceRight((y,g,w)=>{let b,E=!1,z=null,j=null;l&&(b=c&&g.route.id?c[g.route.id]:void 0,z=g.route.errorElement||nS,d&&(p<0&&w===0?(nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,j=null):p===w&&(E=!0,j=g.route.hydrateFallbackElement||null)));let A=r.concat(s.slice(0,w+1)),L=()=>{let H;return b?H=z:E?H=j:g.route.Component?H=G.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=y,G.createElement(rS,{match:g,routeContext:{outlet:y,matches:A,isDataRoute:l!=null},children:H})};return l&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?G.createElement(tv,{location:l.location,revalidation:l.revalidation,component:z,error:b,children:L(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:m}):L()},null)}function Ff(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iS(t){let r=G.useContext(Or);return Le(r,Ff(t)),r}function uS(t){let r=G.useContext(Bi);return Le(r,Ff(t)),r}function oS(t){let r=G.useContext(Gn);return Le(r,Ff(t)),r}function Gf(t){let r=oS(t),l=r.matches[r.matches.length-1];return Le(l.route.id,`${t} can only be used on routes that contain a unique "id"`),l.route.id}function sS(){return Gf("useRouteId")}function cS(){let t=G.useContext(If),r=uS("useRouteError"),l=Gf("useRouteError");return t!==void 0?t:r.errors?.[l]}function fS(){let{router:t}=iS("useNavigate"),r=Gf("useNavigate"),l=G.useRef(!1);return Wy(()=>{l.current=!0}),G.useCallback(async(o,s={})=>{Ct(l.current,Ky),l.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:r,...s}))},[t,r])}var Rg={};function nv(t,r,l){!r&&!Rg[t]&&(Rg[t]=!0,Ct(!1,l))}var Ag={};function Dg(t,r){!t&&!Ag[r]&&(Ag[r]=!0,console.warn(r))}var hS="useOptimistic",Mg=_1[hS],dS=()=>{};function mS(t){return Mg?Mg(t):[t,dS]}function pS(t){let r={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&Ct(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:G.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&Ct(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:G.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&Ct(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:G.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),r}var gS=["HydrateFallback","hydrateFallbackElement"],yS=class{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",t(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",r(l))}})}};function vS({router:t,flushSync:r,onError:l,unstable_useTransitions:u}){u=Gw()||u;let[s,c]=G.useState(t.state),[d,p]=mS(s),[m,y]=G.useState(),[g,w]=G.useState({isTransitioning:!1}),[b,E]=G.useState(),[z,j]=G.useState(),[A,L]=G.useState(),H=G.useRef(new Map),fe=G.useCallback((te,{deletedFetchers:de,newErrors:U,flushSync:ee,viewTransitionOpts:ae})=>{U&&l&&Object.values(U).forEach(ce=>l(ce,{location:te.location,params:te.matches[0]?.params??{},unstable_pattern:Hi(te.matches)})),te.fetchers.forEach((ce,K)=>{ce.data!==void 0&&H.current.set(K,ce.data)}),de.forEach(ce=>H.current.delete(ce)),Dg(ee===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let De=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(Dg(ae==null||De,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ae||!De){r&&ee?r(()=>c(te)):u===!1?c(te):G.startTransition(()=>{u===!0&&p(ce=>zg(ce,te)),c(te)});return}if(r&&ee){r(()=>{z&&(b?.resolve(),z.skipTransition()),w({isTransitioning:!0,flushSync:!0,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})});let ce=t.window.document.startViewTransition(()=>{r(()=>c(te))});ce.finished.finally(()=>{r(()=>{E(void 0),j(void 0),y(void 0),w({isTransitioning:!1})})}),r(()=>j(ce));return}z?(b?.resolve(),z.skipTransition(),L({state:te,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation})):(y(te),w({isTransitioning:!0,flushSync:!1,currentLocation:ae.currentLocation,nextLocation:ae.nextLocation}))},[t.window,r,z,b,u,p,l]);G.useLayoutEffect(()=>t.subscribe(fe),[t,fe]),G.useEffect(()=>{g.isTransitioning&&!g.flushSync&&E(new yS)},[g]),G.useEffect(()=>{if(b&&m&&t.window){let te=m,de=b.promise,U=t.window.document.startViewTransition(async()=>{u===!1?c(te):G.startTransition(()=>{u===!0&&p(ee=>zg(ee,te)),c(te)}),await de});U.finished.finally(()=>{E(void 0),j(void 0),y(void 0),w({isTransitioning:!1})}),j(U)}},[m,b,t.window,u,p]),G.useEffect(()=>{b&&m&&d.location.key===m.location.key&&b.resolve()},[b,z,d.location,m]),G.useEffect(()=>{!g.isTransitioning&&A&&(y(A.state),w({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),L(void 0))},[g.isTransitioning,A]);let oe=G.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:te=>t.navigate(te),push:(te,de,U)=>t.navigate(te,{state:de,preventScrollReset:U?.preventScrollReset}),replace:(te,de,U)=>t.navigate(te,{replace:!0,state:de,preventScrollReset:U?.preventScrollReset})}),[t]),q=t.basename||"/",M=G.useMemo(()=>({router:t,navigator:oe,static:!1,basename:q,onError:l}),[t,oe,q,l]);return G.createElement(G.Fragment,null,G.createElement(Or.Provider,{value:M},G.createElement(Bi.Provider,{value:d},G.createElement(Jy.Provider,{value:H.current},G.createElement(qf.Provider,{value:g},G.createElement(xS,{basename:q,location:d.location,navigationType:d.historyAction,navigator:oe,unstable_useTransitions:u},G.createElement(bS,{routes:t.routes,future:t.future,state:d,onError:l})))))),null)}function zg(t,r){return{...t,navigation:r.navigation.state!=="idle"?r.navigation:t.navigation,revalidation:r.revalidation!=="idle"?r.revalidation:t.revalidation,actionData:r.navigation.state!=="submitting"?r.actionData:t.actionData,fetchers:r.fetchers}}var bS=G.memo(wS);function wS({routes:t,future:r,state:l,onError:u}){return eS(t,void 0,l,u,r)}function SS(t){return $w(t.context)}function xS({basename:t="/",children:r=null,location:l,navigationType:u="POP",navigator:o,static:s=!1,unstable_useTransitions:c}){Le(!Yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=t.replace(/^\/*/,"/"),p=G.useMemo(()=>({basename:d,navigator:o,static:s,unstable_useTransitions:c,future:{}}),[d,o,s,c]);typeof l=="string"&&(l=rr(l));let{pathname:m="/",search:y="",hash:g="",state:w=null,key:b="default"}=l,E=G.useMemo(()=>{let z=_n(m,d);return z==null?null:{location:{pathname:z,search:y,hash:g,state:w,key:b},navigationType:u}},[d,m,y,g,w,b,u]);return Ct(E!=null,`<Router basename="${d}"> is not able to match the URL "${m}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:G.createElement(On.Provider,{value:p},G.createElement(Ro.Provider,{children:r,value:E}))}var mo="get",po="application/x-www-form-urlencoded";function Ao(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function ES(t){return Ao(t)&&t.tagName.toLowerCase()==="button"}function TS(t){return Ao(t)&&t.tagName.toLowerCase()==="form"}function CS(t){return Ao(t)&&t.tagName.toLowerCase()==="input"}function kS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RS(t,r){return t.button===0&&(!r||r==="_self")&&!kS(t)}var uo=null;function AS(){if(uo===null)try{new FormData(document.createElement("form"),0),uo=!1}catch{uo=!0}return uo}var DS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $c(t){return t!=null&&!DS.has(t)?(Ct(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${po}"`),null):t}function MS(t,r){let l,u,o,s,c;if(TS(t)){let d=t.getAttribute("action");u=d?_n(d,r):null,l=t.getAttribute("method")||mo,o=$c(t.getAttribute("enctype"))||po,s=new FormData(t)}else if(ES(t)||CS(t)&&(t.type==="submit"||t.type==="image")){let d=t.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||d.getAttribute("action");if(u=p?_n(p,r):null,l=t.getAttribute("formmethod")||d.getAttribute("method")||mo,o=$c(t.getAttribute("formenctype"))||$c(d.getAttribute("enctype"))||po,s=new FormData(d,t),!AS()){let{name:m,type:y,value:g}=t;if(y==="image"){let w=m?`${m}.`:"";s.append(`${w}x`,"0"),s.append(`${w}y`,"0")}else m&&s.append(m,g)}}else{if(Ao(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=mo,u=null,o=po,c=t}return s&&o==="text/plain"&&(c=s,s=void 0),{action:u,method:l.toLowerCase(),encType:o,formData:s,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vf(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function zS(t,r,l,u){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return l?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${u}`:o.pathname=`${o.pathname}.${u}`:o.pathname==="/"?o.pathname=`_root.${u}`:r&&_n(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function _S(t,r){if(t.id in r)return r[t.id];try{let l=await import(t.module);return r[t.id]=l,l}catch(l){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function jS(t,r,l){let u=await Promise.all(t.map(async o=>{let s=r.routes[o.route.id];if(s){let c=await _S(s,l);return c.links?c.links():[]}return[]}));return HS(u.flat(1).filter(OS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _g(t,r,l,u,o,s){let c=(p,m)=>l[m]?p.route.id!==l[m].route.id:!0,d=(p,m)=>l[m].pathname!==p.pathname||l[m].route.path?.endsWith("*")&&l[m].params["*"]!==p.params["*"];return s==="assets"?r.filter((p,m)=>c(p,m)||d(p,m)):s==="data"?r.filter((p,m)=>{let y=u.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function NS(t,r,{includeHydrateFallback:l}={}){return LS(t.map(u=>{let o=r.routes[u.route.id];if(!o)return[];let s=[o.module];return o.clientActionModule&&(s=s.concat(o.clientActionModule)),o.clientLoaderModule&&(s=s.concat(o.clientLoaderModule)),l&&o.hydrateFallbackModule&&(s=s.concat(o.hydrateFallbackModule)),o.imports&&(s=s.concat(o.imports)),s}).flat(1))}function LS(t){return[...new Set(t)]}function US(t){let r={},l=Object.keys(t).sort();for(let u of l)r[u]=t[u];return r}function HS(t,r){let l=new Set;return new Set(r),t.reduce((u,o)=>{let s=JSON.stringify(US(o));return l.has(s)||(l.add(s),u.push({key:s,link:o})),u},[])}function av(){let t=G.useContext(Or);return Vf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function BS(){let t=G.useContext(Bi);return Vf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Xf=G.createContext(void 0);Xf.displayName="FrameworkContext";function rv(){let t=G.useContext(Xf);return Vf(t,"You must render this element inside a <HydratedRouter> element"),t}function YS(t,r){let l=G.useContext(Xf),[u,o]=G.useState(!1),[s,c]=G.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:g}=r,w=G.useRef(null);G.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let z=A=>{A.forEach(L=>{c(L.isIntersecting)})},j=new IntersectionObserver(z,{threshold:.5});return w.current&&j.observe(w.current),()=>{j.disconnect()}}},[t]),G.useEffect(()=>{if(u){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[u]);let b=()=>{o(!0)},E=()=>{o(!1),c(!1)};return l?t!=="intent"?[s,w,{}]:[s,w,{onFocus:Si(d,b),onBlur:Si(p,E),onMouseEnter:Si(m,b),onMouseLeave:Si(y,E),onTouchStart:Si(g,b)}]:[!1,w,{}]}function Si(t,r){return l=>{t&&t(l),l.defaultPrevented||r(l)}}function qS({page:t,...r}){let{router:l}=av(),u=G.useMemo(()=>er(l.routes,t,l.basename),[l.routes,t,l.basename]);return u?G.createElement(FS,{page:t,matches:u,...r}):null}function IS(t){let{manifest:r,routeModules:l}=rv(),[u,o]=G.useState([]);return G.useEffect(()=>{let s=!1;return jS(t,r,l).then(c=>{s||o(c)}),()=>{s=!0}},[t,r,l]),u}function FS({page:t,matches:r,...l}){let u=xa(),{future:o,manifest:s,routeModules:c}=rv(),{basename:d}=av(),{loaderData:p,matches:m}=BS(),y=G.useMemo(()=>_g(t,r,m,s,u,"data"),[t,r,m,s,u]),g=G.useMemo(()=>_g(t,r,m,s,u,"assets"),[t,r,m,s,u]),w=G.useMemo(()=>{if(t===u.pathname+u.search+u.hash)return[];let z=new Set,j=!1;if(r.forEach(L=>{let H=s.routes[L.route.id];!H||!H.hasLoader||(!y.some(fe=>fe.route.id===L.route.id)&&L.route.id in p&&c[L.route.id]?.shouldRevalidate||H.hasClientLoader?j=!0:z.add(L.route.id))}),z.size===0)return[];let A=zS(t,d,o.unstable_trailingSlashAwareDataRequests,"data");return j&&z.size>0&&A.searchParams.set("_routes",r.filter(L=>z.has(L.route.id)).map(L=>L.route.id).join(",")),[A.pathname+A.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,u,s,y,r,t,c]),b=G.useMemo(()=>NS(g,s),[g,s]),E=IS(g);return G.createElement(G.Fragment,null,w.map(z=>G.createElement("link",{key:z,rel:"prefetch",as:"fetch",href:z,...l})),b.map(z=>G.createElement("link",{key:z,rel:"modulepreload",href:z,...l})),E.map(({key:z,link:j})=>G.createElement("link",{key:z,nonce:l.nonce,...j})))}function GS(...t){return r=>{t.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var VS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{VS&&(window.__reactRouterVersion="7.12.0")}catch{}function XS(t,r){return bw({basename:r?.basename,getContext:r?.getContext,future:r?.future,history:N1({window:r?.window}),hydrationData:r?.hydrationData||QS(),routes:t,mapRouteProperties:pS,hydrationRouteProperties:gS,dataStrategy:r?.dataStrategy,patchRoutesOnNavigation:r?.patchRoutesOnNavigation,window:r?.window,unstable_instrumentations:r?.unstable_instrumentations}).initialize()}function QS(){let t=window?.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:ZS(t.errors)}),t}function ZS(t){if(!t)return null;let r=Object.entries(t),l={};for(let[u,o]of r)if(o&&o.__type==="RouteErrorResponse")l[u]=new Ui(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let s=window[o.__subType];if(typeof s=="function")try{let c=new s(o.message);c.stack="",l[u]=c}catch{}}if(l[u]==null){let s=new Error(o.message);s.stack="",l[u]=s}}else l[u]=o;return l}var lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Do=G.forwardRef(function({onClick:r,discover:l="render",prefetch:u="none",relative:o,reloadDocument:s,replace:c,state:d,target:p,to:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:w,...b},E){let{basename:z,unstable_useTransitions:j}=G.useContext(On),A=typeof m=="string"&&lv.test(m),L=Ly(m,z);m=L.to;let H=Pw(m,{relative:o}),[fe,oe,q]=YS(u,b),M=KS(m,{replace:c,state:d,target:p,preventScrollReset:y,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:w,unstable_useTransitions:j});function te(U){r&&r(U),U.defaultPrevented||M(U)}let de=G.createElement("a",{...b,...q,href:L.absoluteURL||H,onClick:L.isExternal||s?r:te,ref:GS(E,oe),target:p,"data-discover":!A&&l==="render"?"true":void 0});return fe&&!A?G.createElement(G.Fragment,null,de,G.createElement(qS,{page:H})):de});Do.displayName="Link";var vo=G.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:u="",end:o=!1,style:s,to:c,viewTransition:d,children:p,...m},y){let g=qi(c,{relative:m.relative}),w=xa(),b=G.useContext(Bi),{navigator:E,basename:z}=G.useContext(On),j=b!=null&&nx(g)&&d===!0,A=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=w.pathname,H=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(L=L.toLowerCase(),H=H?H.toLowerCase():null,A=A.toLowerCase()),H&&z&&(H=_n(H,z)||H);const fe=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let oe=L===A||!o&&L.startsWith(A)&&L.charAt(fe)==="/",q=H!=null&&(H===A||!o&&H.startsWith(A)&&H.charAt(A.length)==="/"),M={isActive:oe,isPending:q,isTransitioning:j},te=oe?r:void 0,de;typeof u=="function"?de=u(M):de=[u,oe?"active":null,q?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let U=typeof s=="function"?s(M):s;return G.createElement(Do,{...m,"aria-current":te,className:de,ref:y,style:U,to:c,viewTransition:d},typeof p=="function"?p(M):p)});vo.displayName="NavLink";var JS=G.forwardRef(({discover:t="render",fetcherKey:r,navigate:l,reloadDocument:u,replace:o,state:s,method:c=mo,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:w,...b},E)=>{let{unstable_useTransitions:z}=G.useContext(On),j=ex(),A=tx(d,{relative:m}),L=c.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&lv.test(d),fe=oe=>{if(p&&p(oe),oe.defaultPrevented)return;oe.preventDefault();let q=oe.nativeEvent.submitter,M=q?.getAttribute("formmethod")||c,te=()=>j(q||oe.currentTarget,{fetcherKey:r,method:M,navigate:l,replace:o,state:s,relative:m,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:w});z&&l!==!1?G.startTransition(()=>te()):te()};return G.createElement("form",{ref:E,method:L,action:A,onSubmit:u?p:fe,...b,"data-discover":!H&&t==="render"?"true":void 0})});JS.displayName="Form";function PS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iv(t){let r=G.useContext(Or);return Le(r,PS(t)),r}function KS(t,{target:r,replace:l,state:u,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let m=$y(),y=xa(),g=qi(t,{relative:s});return G.useCallback(w=>{if(RS(w,r)){w.preventDefault();let b=l!==void 0?l:Kn(y)===Kn(g),E=()=>m(t,{replace:b,state:u,preventScrollReset:o,relative:s,viewTransition:c,unstable_defaultShouldRevalidate:d});p?G.startTransition(()=>E()):E()}},[y,m,g,l,u,r,t,o,s,c,d,p])}var WS=0,$S=()=>`__${String(++WS)}__`;function ex(){let{router:t}=iv("useSubmit"),{basename:r}=G.useContext(On),l=sS(),u=t.fetch,o=t.navigate;return G.useCallback(async(s,c={})=>{let{action:d,method:p,encType:m,formData:y,body:g}=MS(s,r);if(c.navigate===!1){let w=c.fetcherKey||$S();await u(w,l,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:l,flushSync:c.flushSync,viewTransition:c.viewTransition})},[u,o,r,l])}function tx(t,{relative:r}={}){let{basename:l}=G.useContext(On),u=G.useContext(Gn);Le(u,"useFormAction must be used inside a RouteContext");let[o]=u.matches.slice(-1),s={...qi(t||".",{relative:r})},c=xa();if(t==null){s.search=c.search;let d=new URLSearchParams(s.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(g=>g).forEach(g=>d.append("index",g));let y=d.toString();s.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(s.pathname=s.pathname==="/"?l:Pn([l,s.pathname])),Kn(s)}function nx(t,{relative:r}={}){let l=G.useContext(qf);Le(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=iv("useViewTransitionState"),o=qi(t,{relative:r});if(!l.isTransitioning)return!1;let s=_n(l.currentLocation.pathname,u)||l.currentLocation.pathname,c=_n(l.nextLocation.pathname,u)||l.nextLocation.pathname;return yo(o.pathname,c)!=null||yo(o.pathname,s)!=null}function ax(){return se.jsx("footer",{id:"footer",className:"mt-auto px-4 py-2 bg-gray-200 text-center",children:se.jsx("p",{children:"Copyright © 2026"})})}const $a={HOME:{label:"Home",path:"/"},INSTRUCTIONS:{label:"Guides",path:"/instructions"},SETUP:{label:"Getting Started",path:"/setup"},EXTRA_TASKS:{label:"Extra Tasks",path:"/extra-tasks"},HELP:{label:"HELP!",path:"/help"},CREDITS:{label:"Credits",path:"/credits"}},Og=t=>`/js-content/pr-preview/pr-62/${t}`,rx=()=>se.jsxs("div",{className:"w-full bg-[#3C3C3C] flex justify-between items-center px-4 py-2",children:[se.jsx("div",{className:"flex justify-evenly gap-2",children:["bg-red-500","bg-yellow-500","bg-green-500"].map(t=>se.jsx("div",{className:`rounded-full aspect-square h-3 ${t}`},t))}),se.jsx("h1",{className:"text-4xl font-semibold text-[#A9A9A9]",children:"JavaScript Content"}),se.jsxs("div",{className:"flex gap-4 justify-between",children:[se.jsx("img",{src:Og("sunshine.svg"),className:"h-8 aspect-square",alt:"Theme"}),se.jsx("img",{src:Og("help.svg"),className:"h-8 aspect-square",alt:"Help"})]})]}),lx=()=>se.jsx("nav",{className:"w-full bg-[#252526]",children:se.jsx("ul",{className:"flex justify-evenly items-center flex-nowrap",children:[$a.HOME,$a.SETUP,$a.INSTRUCTIONS,$a.EXTRA_TASKS,$a.HELP,$a.CREDITS].map(({label:t,path:r})=>se.jsx("li",{className:"grow",children:se.jsx(Do,{to:r,className:"text-[#A9A9A9] text-center text-md block py-2 px-4 hover:bg-[#1F1F1F] cursor-pointer",children:t})},t))})}),ix=()=>{const t=xa().pathname.split("/")[1]||"home";return se.jsx("nav",{className:"bg-[#1E1E1E] w-full text-[#FFFFFF21] px-4 py-2 text-sm",children:`src > ${t.split(" ").join("-")}.html`})};function ux(){return se.jsxs("header",{id:"header",className:"flex flex-col",children:[se.jsx(rx,{}),se.jsx(lx,{}),se.jsx(ix,{})]})}function ox(){G.useEffect(()=>{document.body.classList.add("is-preload");const t=()=>{document.body.classList.remove("is-preload")};return document.readyState==="complete"?window.setTimeout(t,0):window.addEventListener("load",t,{once:!0}),()=>{window.removeEventListener("load",t),t()}},[])}const sx=()=>(ox(),se.jsxs("div",{className:"flex flex-col min-h-screen",children:[se.jsx(ux,{}),se.jsx("main",{children:se.jsx(SS,{})}),se.jsx(ax,{})]}));function cx(t,r){const l={};return(t[t.length-1]===""?[...t,""]:t).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const fx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,dx={};function jg(t,r){return(dx.jsx?hx:fx).test(t)}const mx=/[ \t\n\f\r]/g;function px(t){return typeof t=="object"?t.type==="text"?Ng(t.value):!1:Ng(t)}function Ng(t){return t.replace(mx,"")===""}class Ii{constructor(r,l,u){this.normal=l,this.property=r,u&&(this.space=u)}}Ii.prototype.normal={};Ii.prototype.property={};Ii.prototype.space=void 0;function uv(t,r){const l={},u={};for(const o of t)Object.assign(l,o.property),Object.assign(u,o.normal);return new Ii(l,u,r)}function xf(t){return t.toLowerCase()}class rn{constructor(r,l){this.attribute=l,this.property=r}}rn.prototype.attribute="";rn.prototype.booleanish=!1;rn.prototype.boolean=!1;rn.prototype.commaOrSpaceSeparated=!1;rn.prototype.commaSeparated=!1;rn.prototype.defined=!1;rn.prototype.mustUseProperty=!1;rn.prototype.number=!1;rn.prototype.overloadedBoolean=!1;rn.prototype.property="";rn.prototype.spaceSeparated=!1;rn.prototype.space=void 0;let gx=0;const Ne=jr(),Mt=jr(),Ef=jr(),ne=jr(),ct=jr(),El=jr(),gn=jr();function jr(){return 2**++gx}const Tf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ne,booleanish:Mt,commaOrSpaceSeparated:gn,commaSeparated:El,number:ne,overloadedBoolean:Ef,spaceSeparated:ct},Symbol.toStringTag,{value:"Module"})),ef=Object.keys(Tf);class Qf extends rn{constructor(r,l,u,o){let s=-1;if(super(r,l),Lg(this,"space",o),typeof u=="number")for(;++s<ef.length;){const c=ef[s];Lg(this,ef[s],(u&Tf[c])===Tf[c])}}}Qf.prototype.defined=!0;function Lg(t,r,l){l&&(t[r]=l)}function Cl(t){const r={},l={};for(const[u,o]of Object.entries(t.properties)){const s=new Qf(u,t.transform(t.attributes||{},u),o,t.space);t.mustUseProperty&&t.mustUseProperty.includes(u)&&(s.mustUseProperty=!0),r[u]=s,l[xf(u)]=u,l[xf(s.attribute)]=u}return new Ii(r,l,t.space)}const ov=Cl({properties:{ariaActiveDescendant:null,ariaAtomic:Mt,ariaAutoComplete:null,ariaBusy:Mt,ariaChecked:Mt,ariaColCount:ne,ariaColIndex:ne,ariaColSpan:ne,ariaControls:ct,ariaCurrent:null,ariaDescribedBy:ct,ariaDetails:null,ariaDisabled:Mt,ariaDropEffect:ct,ariaErrorMessage:null,ariaExpanded:Mt,ariaFlowTo:ct,ariaGrabbed:Mt,ariaHasPopup:null,ariaHidden:Mt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ct,ariaLevel:ne,ariaLive:null,ariaModal:Mt,ariaMultiLine:Mt,ariaMultiSelectable:Mt,ariaOrientation:null,ariaOwns:ct,ariaPlaceholder:null,ariaPosInSet:ne,ariaPressed:Mt,ariaReadOnly:Mt,ariaRelevant:null,ariaRequired:Mt,ariaRoleDescription:ct,ariaRowCount:ne,ariaRowIndex:ne,ariaRowSpan:ne,ariaSelected:Mt,ariaSetSize:ne,ariaSort:null,ariaValueMax:ne,ariaValueMin:ne,ariaValueNow:ne,ariaValueText:null,role:null},transform(t,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function sv(t,r){return r in t?t[r]:r}function cv(t,r){return sv(t,r.toLowerCase())}const yx=Cl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:El,acceptCharset:ct,accessKey:ct,action:null,allow:null,allowFullScreen:Ne,allowPaymentRequest:Ne,allowUserMedia:Ne,alt:null,as:null,async:Ne,autoCapitalize:null,autoComplete:ct,autoFocus:Ne,autoPlay:Ne,blocking:ct,capture:null,charSet:null,checked:Ne,cite:null,className:ct,cols:ne,colSpan:null,content:null,contentEditable:Mt,controls:Ne,controlsList:ct,coords:ne|El,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ne,defer:Ne,dir:null,dirName:null,disabled:Ne,download:Ef,draggable:Mt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ne,formTarget:null,headers:ct,height:ne,hidden:Ef,high:ne,href:null,hrefLang:null,htmlFor:ct,httpEquiv:ct,id:null,imageSizes:null,imageSrcSet:null,inert:Ne,inputMode:null,integrity:null,is:null,isMap:Ne,itemId:null,itemProp:ct,itemRef:ct,itemScope:Ne,itemType:ct,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ne,low:ne,manifest:null,max:null,maxLength:ne,media:null,method:null,min:null,minLength:ne,multiple:Ne,muted:Ne,name:null,nonce:null,noModule:Ne,noValidate:Ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ne,optimum:ne,pattern:null,ping:ct,placeholder:null,playsInline:Ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ne,referrerPolicy:null,rel:ct,required:Ne,reversed:Ne,rows:ne,rowSpan:ne,sandbox:ct,scope:null,scoped:Ne,seamless:Ne,selected:Ne,shadowRootClonable:Ne,shadowRootDelegatesFocus:Ne,shadowRootMode:null,shape:null,size:ne,sizes:null,slot:null,span:ne,spellCheck:Mt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ne,step:null,style:null,tabIndex:ne,target:null,title:null,translate:null,type:null,typeMustMatch:Ne,useMap:null,value:Mt,width:ne,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ct,axis:null,background:null,bgColor:null,border:ne,borderColor:null,bottomMargin:ne,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ne,declare:Ne,event:null,face:null,frame:null,frameBorder:null,hSpace:ne,leftMargin:ne,link:null,longDesc:null,lowSrc:null,marginHeight:ne,marginWidth:ne,noResize:Ne,noHref:Ne,noShade:Ne,noWrap:Ne,object:null,profile:null,prompt:null,rev:null,rightMargin:ne,rules:null,scheme:null,scrolling:Mt,standby:null,summary:null,text:null,topMargin:ne,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ne,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ne,disableRemotePlayback:Ne,prefix:null,property:null,results:ne,security:null,unselectable:null},space:"html",transform:cv}),vx=Cl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gn,accentHeight:ne,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ne,amplitude:ne,arabicForm:null,ascent:ne,attributeName:null,attributeType:null,azimuth:ne,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ne,by:null,calcMode:null,capHeight:ne,className:ct,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ne,diffuseConstant:ne,direction:null,display:null,dur:null,divisor:ne,dominantBaseline:null,download:Ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:ne,enableBackground:null,end:null,event:null,exponent:ne,externalResourcesRequired:null,fill:null,fillOpacity:ne,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:El,g2:El,glyphName:El,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ne,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ne,horizOriginX:ne,horizOriginY:ne,id:null,ideographic:ne,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ne,k:ne,k1:ne,k2:ne,k3:ne,k4:ne,kernelMatrix:gn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ne,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ne,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ne,overlineThickness:ne,paintOrder:null,panose1:null,path:null,pathLength:ne,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ct,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ne,pointsAtY:ne,pointsAtZ:ne,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gn,rev:gn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gn,requiredFeatures:gn,requiredFonts:gn,requiredFormats:gn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ne,specularExponent:ne,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ne,strikethroughThickness:ne,string:null,stroke:null,strokeDashArray:gn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ne,strokeOpacity:ne,strokeWidth:null,style:null,surfaceScale:ne,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gn,tabIndex:ne,tableValues:null,target:null,targetX:ne,targetY:ne,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ne,underlineThickness:ne,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ne,values:null,vAlphabetic:ne,vMathematical:ne,vectorEffect:null,vHanging:ne,vIdeographic:ne,version:null,vertAdvY:ne,vertOriginX:ne,vertOriginY:ne,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ne,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:sv}),fv=Cl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,r){return"xlink:"+r.slice(5).toLowerCase()}}),hv=Cl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:cv}),dv=Cl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,r){return"xml:"+r.slice(3).toLowerCase()}}),bx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},wx=/[A-Z]/g,Ug=/-[a-z]/g,Sx=/^data[-\w.:]+$/i;function xx(t,r){const l=xf(r);let u=r,o=rn;if(l in t.normal)return t.property[t.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Sx.test(r)){if(r.charAt(4)==="-"){const s=r.slice(5).replace(Ug,Tx);u="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=r.slice(4);if(!Ug.test(s)){let c=s.replace(wx,Ex);c.charAt(0)!=="-"&&(c="-"+c),r="data"+c}}o=Qf}return new o(u,r)}function Ex(t){return"-"+t.toLowerCase()}function Tx(t){return t.charAt(1).toUpperCase()}const Cx=uv([ov,yx,fv,hv,dv],"html"),Zf=uv([ov,vx,fv,hv,dv],"svg");function kx(t){return t.join(" ").trim()}var gl={},tf,Hg;function Rx(){if(Hg)return tf;Hg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,d=/^\s+|\s+$/g,p=`
`,m="/",y="*",g="",w="comment",b="declaration";function E(j,A){if(typeof j!="string")throw new TypeError("First argument must be a string");if(!j)return[];A=A||{};var L=1,H=1;function fe(ce){var K=ce.match(r);K&&(L+=K.length);var N=ce.lastIndexOf(p);H=~N?ce.length-N:H+ce.length}function oe(){var ce={line:L,column:H};return function(K){return K.position=new q(ce),de(),K}}function q(ce){this.start=ce,this.end={line:L,column:H},this.source=A.source}q.prototype.content=j;function M(ce){var K=new Error(A.source+":"+L+":"+H+": "+ce);if(K.reason=ce,K.filename=A.source,K.line=L,K.column=H,K.source=j,!A.silent)throw K}function te(ce){var K=ce.exec(j);if(K){var N=K[0];return fe(N),j=j.slice(N.length),K}}function de(){te(l)}function U(ce){var K;for(ce=ce||[];K=ee();)K!==!1&&ce.push(K);return ce}function ee(){var ce=oe();if(!(m!=j.charAt(0)||y!=j.charAt(1))){for(var K=2;g!=j.charAt(K)&&(y!=j.charAt(K)||m!=j.charAt(K+1));)++K;if(K+=2,g===j.charAt(K-1))return M("End of comment missing");var N=j.slice(2,K-2);return H+=2,fe(N),j=j.slice(K),H+=2,ce({type:w,comment:N})}}function ae(){var ce=oe(),K=te(u);if(K){if(ee(),!te(o))return M("property missing ':'");var N=te(s),W=ce({type:b,property:z(K[0].replace(t,g)),value:N?z(N[0].replace(t,g)):g});return te(c),W}}function De(){var ce=[];U(ce);for(var K;K=ae();)K!==!1&&(ce.push(K),U(ce));return ce}return de(),De()}function z(j){return j?j.replace(d,g):g}return tf=E,tf}var Bg;function Ax(){if(Bg)return gl;Bg=1;var t=gl&&gl.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(gl,"__esModule",{value:!0}),gl.default=l;const r=t(Rx());function l(u,o){let s=null;if(!u||typeof u!="string")return s;const c=(0,r.default)(u),d=typeof o=="function";return c.forEach(p=>{if(p.type!=="declaration")return;const{property:m,value:y}=p;d?o(m,y,p):y&&(s=s||{},s[m]=y)}),s}return gl}var xi={},Yg;function Dx(){if(Yg)return xi;Yg=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,s=function(m){return!m||l.test(m)||t.test(m)},c=function(m,y){return y.toUpperCase()},d=function(m,y){return"".concat(y,"-")},p=function(m,y){return y===void 0&&(y={}),s(m)?m:(m=m.toLowerCase(),y.reactCompat?m=m.replace(o,d):m=m.replace(u,d),m.replace(r,c))};return xi.camelCase=p,xi}var Ei,qg;function Mx(){if(qg)return Ei;qg=1;var t=Ei&&Ei.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},r=t(Ax()),l=Dx();function u(o,s){var c={};return!o||typeof o!="string"||(0,r.default)(o,function(d,p){d&&p&&(c[(0,l.camelCase)(d,s)]=p)}),c}return u.default=u,Ei=u,Ei}var zx=Mx();const _x=jf(zx),mv=pv("end"),Jf=pv("start");function pv(t){return r;function r(l){const u=l&&l.position&&l.position[t]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function Ox(t){const r=Jf(t),l=mv(t);if(r&&l)return{start:r,end:l}}function Di(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ig(t.position):"start"in t||"end"in t?Ig(t):"line"in t||"column"in t?Cf(t):""}function Cf(t){return Fg(t&&t.line)+":"+Fg(t&&t.column)}function Ig(t){return Cf(t&&t.start)+"-"+Cf(t&&t.end)}function Fg(t){return t&&typeof t=="number"?t:1}class Gt extends Error{constructor(r,l,u){super(),typeof l=="string"&&(u=l,l=void 0);let o="",s={},c=!1;if(l&&("line"in l&&"column"in l?s={place:l}:"start"in l&&"end"in l?s={place:l}:"type"in l?s={ancestors:[l],place:l.position}:s={...l}),typeof r=="string"?o=r:!s.cause&&r&&(c=!0,o=r.message,s.cause=r),!s.ruleId&&!s.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?s.ruleId=u:(s.source=u.slice(0,p),s.ruleId=u.slice(p+1))}if(!s.place&&s.ancestors&&s.ancestors){const p=s.ancestors[s.ancestors.length-1];p&&(s.place=p.position)}const d=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=d?d.column:void 0,this.fatal=void 0,this.file="",this.message=o,this.line=d?d.line:void 0,this.name=Di(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=c&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Gt.prototype.file="";Gt.prototype.name="";Gt.prototype.reason="";Gt.prototype.message="";Gt.prototype.stack="";Gt.prototype.column=void 0;Gt.prototype.line=void 0;Gt.prototype.ancestors=void 0;Gt.prototype.cause=void 0;Gt.prototype.fatal=void 0;Gt.prototype.place=void 0;Gt.prototype.ruleId=void 0;Gt.prototype.source=void 0;const Pf={}.hasOwnProperty,jx=new Map,Nx=/[A-Z]/g,Lx=new Set(["table","tbody","thead","tfoot","tr"]),Ux=new Set(["td","th"]),gv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Hx(t,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=Xx(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=Vx(l,r.jsx,r.jsxs)}const o={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?Zf:Cx,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},s=yv(o,t,void 0);return s&&typeof s!="string"?s:o.create(t,o.Fragment,{children:s||void 0},void 0)}function yv(t,r,l){if(r.type==="element")return Bx(t,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return Yx(t,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Ix(t,r,l);if(r.type==="mdxjsEsm")return qx(t,r);if(r.type==="root")return Fx(t,r,l);if(r.type==="text")return Gx(t,r)}function Bx(t,r,l){const u=t.schema;let o=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(o=Zf,t.schema=o),t.ancestors.push(r);const s=bv(t,r.tagName,!1),c=Qx(t,r);let d=Wf(t,r);return Lx.has(r.tagName)&&(d=d.filter(function(p){return typeof p=="string"?!px(p):!0})),vv(t,c,s,r),Kf(c,d),t.ancestors.pop(),t.schema=u,t.create(r,s,c,l)}function Yx(t,r){if(r.data&&r.data.estree&&t.evaluater){const u=r.data.estree.body[0];return u.type,t.evaluater.evaluateExpression(u.expression)}Ni(t,r.position)}function qx(t,r){if(r.data&&r.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(r.data.estree);Ni(t,r.position)}function Ix(t,r,l){const u=t.schema;let o=u;r.name==="svg"&&u.space==="html"&&(o=Zf,t.schema=o),t.ancestors.push(r);const s=r.name===null?t.Fragment:bv(t,r.name,!0),c=Zx(t,r),d=Wf(t,r);return vv(t,c,s,r),Kf(c,d),t.ancestors.pop(),t.schema=u,t.create(r,s,c,l)}function Fx(t,r,l){const u={};return Kf(u,Wf(t,r)),t.create(r,t.Fragment,u,l)}function Gx(t,r){return r.value}function vv(t,r,l,u){typeof l!="string"&&l!==t.Fragment&&t.passNode&&(r.node=u)}function Kf(t,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(t.children=l)}}function Vx(t,r,l){return u;function u(o,s,c,d){const m=Array.isArray(c.children)?l:r;return d?m(s,c,d):m(s,c)}}function Xx(t,r){return l;function l(u,o,s,c){const d=Array.isArray(s.children),p=Jf(u);return r(o,s,c,d,{columnNumber:p?p.column-1:void 0,fileName:t,lineNumber:p?p.line:void 0},void 0)}}function Qx(t,r){const l={};let u,o;for(o in r.properties)if(o!=="children"&&Pf.call(r.properties,o)){const s=Jx(t,o,r.properties[o]);if(s){const[c,d]=s;t.tableCellAlignToStyle&&c==="align"&&typeof d=="string"&&Ux.has(r.tagName)?u=d:l[c]=d}}if(u){const s=l.style||(l.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return l}function Zx(t,r){const l={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&t.evaluater){const s=u.data.estree.body[0];s.type;const c=s.expression;c.type;const d=c.properties[0];d.type,Object.assign(l,t.evaluater.evaluateExpression(d.argument))}else Ni(t,r.position);else{const o=u.name;let s;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&t.evaluater){const d=u.value.data.estree.body[0];d.type,s=t.evaluater.evaluateExpression(d.expression)}else Ni(t,r.position);else s=u.value===null?!0:u.value;l[o]=s}return l}function Wf(t,r){const l=[];let u=-1;const o=t.passKeys?new Map:jx;for(;++u<r.children.length;){const s=r.children[u];let c;if(t.passKeys){const p=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(p){const m=o.get(p)||0;c=p+"-"+m,o.set(p,m+1)}}const d=yv(t,s,c);d!==void 0&&l.push(d)}return l}function Jx(t,r,l){const u=xx(t.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=u.commaSeparated?cx(l):kx(l)),u.property==="style"){let o=typeof l=="object"?l:Px(t,String(l));return t.stylePropertyNameCase==="css"&&(o=Kx(o)),["style",o]}return[t.elementAttributeNameCase==="react"&&u.space?bx[u.property]||u.property:u.attribute,l]}}function Px(t,r){try{return _x(r,{reactCompat:!0})}catch(l){if(t.ignoreInvalidStyle)return{};const u=l,o=new Gt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw o.file=t.filePath||void 0,o.url=gv+"#cannot-parse-style-attribute",o}}function bv(t,r,l){let u;if(!l)u={type:"Literal",value:r};else if(r.includes(".")){const o=r.split(".");let s=-1,c;for(;++s<o.length;){const d=jg(o[s])?{type:"Identifier",name:o[s]}:{type:"Literal",value:o[s]};c=c?{type:"MemberExpression",object:c,property:d,computed:!!(s&&d.type==="Literal"),optional:!1}:d}u=c}else u=jg(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const o=u.value;return Pf.call(t.components,o)?t.components[o]:o}if(t.evaluater)return t.evaluater.evaluateExpression(u);Ni(t)}function Ni(t,r){const l=new Gt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=t.filePath||void 0,l.url=gv+"#cannot-handle-mdx-estrees-without-createevaluater",l}function Kx(t){const r={};let l;for(l in t)Pf.call(t,l)&&(r[Wx(l)]=t[l]);return r}function Wx(t){let r=t.replace(Nx,$x);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function $x(t){return"-"+t.toLowerCase()}const nf={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},eE={};function $f(t,r){const l=eE,u=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,o=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return wv(t,u,o)}function wv(t,r,l){if(tE(t)){if("value"in t)return t.type==="html"&&!l?"":t.value;if(r&&"alt"in t&&t.alt)return t.alt;if("children"in t)return Gg(t.children,r,l)}return Array.isArray(t)?Gg(t,r,l):""}function Gg(t,r,l){const u=[];let o=-1;for(;++o<t.length;)u[o]=wv(t[o],r,l);return u.join("")}function tE(t){return!!(t&&typeof t=="object")}const Vg=document.createElement("i");function eh(t){const r="&"+t+";";Vg.innerHTML=r;const l=Vg.textContent;return l.charCodeAt(l.length-1)===59&&t!=="semi"||l===r?!1:l}function vn(t,r,l,u){const o=t.length;let s=0,c;if(r<0?r=-r>o?0:o+r:r=r>o?o:r,l=l>0?l:0,u.length<1e4)c=Array.from(u),c.unshift(r,l),t.splice(...c);else for(l&&t.splice(r,l);s<u.length;)c=u.slice(s,s+1e4),c.unshift(r,0),t.splice(...c),s+=1e4,r+=1e4}function zn(t,r){return t.length>0?(vn(t,t.length,0,r),t):r}const Xg={}.hasOwnProperty;function Sv(t){const r={};let l=-1;for(;++l<t.length;)nE(r,t[l]);return r}function nE(t,r){let l;for(l in r){const o=(Xg.call(t,l)?t[l]:void 0)||(t[l]={}),s=r[l];let c;if(s)for(c in s){Xg.call(o,c)||(o[c]=[]);const d=s[c];aE(o[c],Array.isArray(d)?d:d?[d]:[])}}}function aE(t,r){let l=-1;const u=[];for(;++l<r.length;)(r[l].add==="after"?t:u).push(r[l]);vn(t,0,0,u)}function xv(t,r){const l=Number.parseInt(t,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function Fn(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Qt=lr(/[A-Za-z]/),Ft=lr(/[\dA-Za-z]/),rE=lr(/[#-'*+\--9=?A-Z^-~]/);function bo(t){return t!==null&&(t<32||t===127)}const kf=lr(/\d/),lE=lr(/[\dA-Fa-f]/),iE=lr(/[!-/:-@[-`{-~]/);function Re(t){return t!==null&&t<-2}function st(t){return t!==null&&(t<0||t===32)}function Be(t){return t===-2||t===-1||t===32}const Mo=lr(new RegExp("\\p{P}|\\p{S}","u")),_r=lr(/\s/);function lr(t){return r;function r(l){return l!==null&&l>-1&&t.test(String.fromCharCode(l))}}function kl(t){const r=[];let l=-1,u=0,o=0;for(;++l<t.length;){const s=t.charCodeAt(l);let c="";if(s===37&&Ft(t.charCodeAt(l+1))&&Ft(t.charCodeAt(l+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(c=String.fromCharCode(s));else if(s>55295&&s<57344){const d=t.charCodeAt(l+1);s<56320&&d>56319&&d<57344?(c=String.fromCharCode(s,d),o=1):c="�"}else c=String.fromCharCode(s);c&&(r.push(t.slice(u,l),encodeURIComponent(c)),u=l+o+1,c=""),o&&(l+=o,o=0)}return r.join("")+t.slice(u)}function Ze(t,r,l,u){const o=u?u-1:Number.POSITIVE_INFINITY;let s=0;return c;function c(p){return Be(p)?(t.enter(l),d(p)):r(p)}function d(p){return Be(p)&&s++<o?(t.consume(p),d):(t.exit(l),r(p))}}const uE={tokenize:oE};function oE(t){const r=t.attempt(this.parser.constructs.contentInitial,u,o);let l;return r;function u(d){if(d===null){t.consume(d);return}return t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),Ze(t,r,"linePrefix")}function o(d){return t.enter("paragraph"),s(d)}function s(d){const p=t.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=p),l=p,c(d)}function c(d){if(d===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(d);return}return Re(d)?(t.consume(d),t.exit("chunkText"),s):(t.consume(d),c)}}const sE={tokenize:cE},Qg={tokenize:fE};function cE(t){const r=this,l=[];let u=0,o,s,c;return d;function d(H){if(u<l.length){const fe=l[u];return r.containerState=fe[1],t.attempt(fe[0].continuation,p,m)(H)}return m(H)}function p(H){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,o&&L();const fe=r.events.length;let oe=fe,q;for(;oe--;)if(r.events[oe][0]==="exit"&&r.events[oe][1].type==="chunkFlow"){q=r.events[oe][1].end;break}A(u);let M=fe;for(;M<r.events.length;)r.events[M][1].end={...q},M++;return vn(r.events,oe+1,0,r.events.slice(fe)),r.events.length=M,m(H)}return d(H)}function m(H){if(u===l.length){if(!o)return w(H);if(o.currentConstruct&&o.currentConstruct.concrete)return E(H);r.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return r.containerState={},t.check(Qg,y,g)(H)}function y(H){return o&&L(),A(u),w(H)}function g(H){return r.parser.lazy[r.now().line]=u!==l.length,c=r.now().offset,E(H)}function w(H){return r.containerState={},t.attempt(Qg,b,E)(H)}function b(H){return u++,l.push([r.currentConstruct,r.containerState]),w(H)}function E(H){if(H===null){o&&L(),A(0),t.consume(H);return}return o=o||r.parser.flow(r.now()),t.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),z(H)}function z(H){if(H===null){j(t.exit("chunkFlow"),!0),A(0),t.consume(H);return}return Re(H)?(t.consume(H),j(t.exit("chunkFlow")),u=0,r.interrupt=void 0,d):(t.consume(H),z)}function j(H,fe){const oe=r.sliceStream(H);if(fe&&oe.push(null),H.previous=s,s&&(s.next=H),s=H,o.defineSkip(H.start),o.write(oe),r.parser.lazy[H.start.line]){let q=o.events.length;for(;q--;)if(o.events[q][1].start.offset<c&&(!o.events[q][1].end||o.events[q][1].end.offset>c))return;const M=r.events.length;let te=M,de,U;for(;te--;)if(r.events[te][0]==="exit"&&r.events[te][1].type==="chunkFlow"){if(de){U=r.events[te][1].end;break}de=!0}for(A(u),q=M;q<r.events.length;)r.events[q][1].end={...U},q++;vn(r.events,te+1,0,r.events.slice(M)),r.events.length=q}}function A(H){let fe=l.length;for(;fe-- >H;){const oe=l[fe];r.containerState=oe[1],oe[0].exit.call(r,t)}l.length=H}function L(){o.write([null]),s=void 0,o=void 0,r.containerState._closeFlow=void 0}}function fE(t,r,l){return Ze(t,t.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Tl(t){if(t===null||st(t)||_r(t))return 1;if(Mo(t))return 2}function zo(t,r,l){const u=[];let o=-1;for(;++o<t.length;){const s=t[o].resolveAll;s&&!u.includes(s)&&(r=s(r,l),u.push(s))}return r}const Rf={name:"attention",resolveAll:hE,tokenize:dE};function hE(t,r){let l=-1,u,o,s,c,d,p,m,y;for(;++l<t.length;)if(t[l][0]==="enter"&&t[l][1].type==="attentionSequence"&&t[l][1]._close){for(u=l;u--;)if(t[u][0]==="exit"&&t[u][1].type==="attentionSequence"&&t[u][1]._open&&r.sliceSerialize(t[u][1]).charCodeAt(0)===r.sliceSerialize(t[l][1]).charCodeAt(0)){if((t[u][1]._close||t[l][1]._open)&&(t[l][1].end.offset-t[l][1].start.offset)%3&&!((t[u][1].end.offset-t[u][1].start.offset+t[l][1].end.offset-t[l][1].start.offset)%3))continue;p=t[u][1].end.offset-t[u][1].start.offset>1&&t[l][1].end.offset-t[l][1].start.offset>1?2:1;const g={...t[u][1].end},w={...t[l][1].start};Zg(g,-p),Zg(w,p),c={type:p>1?"strongSequence":"emphasisSequence",start:g,end:{...t[u][1].end}},d={type:p>1?"strongSequence":"emphasisSequence",start:{...t[l][1].start},end:w},s={type:p>1?"strongText":"emphasisText",start:{...t[u][1].end},end:{...t[l][1].start}},o={type:p>1?"strong":"emphasis",start:{...c.start},end:{...d.end}},t[u][1].end={...c.start},t[l][1].start={...d.end},m=[],t[u][1].end.offset-t[u][1].start.offset&&(m=zn(m,[["enter",t[u][1],r],["exit",t[u][1],r]])),m=zn(m,[["enter",o,r],["enter",c,r],["exit",c,r],["enter",s,r]]),m=zn(m,zo(r.parser.constructs.insideSpan.null,t.slice(u+1,l),r)),m=zn(m,[["exit",s,r],["enter",d,r],["exit",d,r],["exit",o,r]]),t[l][1].end.offset-t[l][1].start.offset?(y=2,m=zn(m,[["enter",t[l][1],r],["exit",t[l][1],r]])):y=0,vn(t,u-1,l-u+3,m),l=u+m.length-y-2;break}}for(l=-1;++l<t.length;)t[l][1].type==="attentionSequence"&&(t[l][1].type="data");return t}function dE(t,r){const l=this.parser.constructs.attentionMarkers.null,u=this.previous,o=Tl(u);let s;return c;function c(p){return s=p,t.enter("attentionSequence"),d(p)}function d(p){if(p===s)return t.consume(p),d;const m=t.exit("attentionSequence"),y=Tl(p),g=!y||y===2&&o||l.includes(p),w=!o||o===2&&y||l.includes(u);return m._open=!!(s===42?g:g&&(o||!w)),m._close=!!(s===42?w:w&&(y||!g)),r(p)}}function Zg(t,r){t.column+=r,t.offset+=r,t._bufferIndex+=r}const mE={name:"autolink",tokenize:pE};function pE(t,r,l){let u=0;return o;function o(b){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(b){return Qt(b)?(t.consume(b),c):b===64?l(b):m(b)}function c(b){return b===43||b===45||b===46||Ft(b)?(u=1,d(b)):m(b)}function d(b){return b===58?(t.consume(b),u=0,p):(b===43||b===45||b===46||Ft(b))&&u++<32?(t.consume(b),d):(u=0,m(b))}function p(b){return b===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):b===null||b===32||b===60||bo(b)?l(b):(t.consume(b),p)}function m(b){return b===64?(t.consume(b),y):rE(b)?(t.consume(b),m):l(b)}function y(b){return Ft(b)?g(b):l(b)}function g(b){return b===46?(t.consume(b),u=0,y):b===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(b),t.exit("autolinkMarker"),t.exit("autolink"),r):w(b)}function w(b){if((b===45||Ft(b))&&u++<63){const E=b===45?w:g;return t.consume(b),E}return l(b)}}const Fi={partial:!0,tokenize:gE};function gE(t,r,l){return u;function u(s){return Be(s)?Ze(t,o,"linePrefix")(s):o(s)}function o(s){return s===null||Re(s)?r(s):l(s)}}const Ev={continuation:{tokenize:vE},exit:bE,name:"blockQuote",tokenize:yE};function yE(t,r,l){const u=this;return o;function o(c){if(c===62){const d=u.containerState;return d.open||(t.enter("blockQuote",{_container:!0}),d.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(c),t.exit("blockQuoteMarker"),s}return l(c)}function s(c){return Be(c)?(t.enter("blockQuotePrefixWhitespace"),t.consume(c),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),r):(t.exit("blockQuotePrefix"),r(c))}}function vE(t,r,l){const u=this;return o;function o(c){return Be(c)?Ze(t,s,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):s(c)}function s(c){return t.attempt(Ev,r,l)(c)}}function bE(t){t.exit("blockQuote")}const Tv={name:"characterEscape",tokenize:wE};function wE(t,r,l){return u;function u(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),o}function o(s){return iE(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),r):l(s)}}const Cv={name:"characterReference",tokenize:SE};function SE(t,r,l){const u=this;let o=0,s,c;return d;function d(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),p}function p(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),m):(t.enter("characterReferenceValue"),s=31,c=Ft,y(g))}function m(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,c=lE,y):(t.enter("characterReferenceValue"),s=7,c=kf,y(g))}function y(g){if(g===59&&o){const w=t.exit("characterReferenceValue");return c===Ft&&!eh(u.sliceSerialize(w))?l(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),r)}return c(g)&&o++<s?(t.consume(g),y):l(g)}}const Jg={partial:!0,tokenize:EE},Pg={concrete:!0,name:"codeFenced",tokenize:xE};function xE(t,r,l){const u=this,o={partial:!0,tokenize:oe};let s=0,c=0,d;return p;function p(q){return m(q)}function m(q){const M=u.events[u.events.length-1];return s=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,d=q,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(q)}function y(q){return q===d?(c++,t.consume(q),y):c<3?l(q):(t.exit("codeFencedFenceSequence"),Be(q)?Ze(t,g,"whitespace")(q):g(q))}function g(q){return q===null||Re(q)?(t.exit("codeFencedFence"),u.interrupt?r(q):t.check(Jg,z,fe)(q)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),w(q))}function w(q){return q===null||Re(q)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(q)):Be(q)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Ze(t,b,"whitespace")(q)):q===96&&q===d?l(q):(t.consume(q),w)}function b(q){return q===null||Re(q)?g(q):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(q))}function E(q){return q===null||Re(q)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(q)):q===96&&q===d?l(q):(t.consume(q),E)}function z(q){return t.attempt(o,fe,j)(q)}function j(q){return t.enter("lineEnding"),t.consume(q),t.exit("lineEnding"),A}function A(q){return s>0&&Be(q)?Ze(t,L,"linePrefix",s+1)(q):L(q)}function L(q){return q===null||Re(q)?t.check(Jg,z,fe)(q):(t.enter("codeFlowValue"),H(q))}function H(q){return q===null||Re(q)?(t.exit("codeFlowValue"),L(q)):(t.consume(q),H)}function fe(q){return t.exit("codeFenced"),r(q)}function oe(q,M,te){let de=0;return U;function U(K){return q.enter("lineEnding"),q.consume(K),q.exit("lineEnding"),ee}function ee(K){return q.enter("codeFencedFence"),Be(K)?Ze(q,ae,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(K):ae(K)}function ae(K){return K===d?(q.enter("codeFencedFenceSequence"),De(K)):te(K)}function De(K){return K===d?(de++,q.consume(K),De):de>=c?(q.exit("codeFencedFenceSequence"),Be(K)?Ze(q,ce,"whitespace")(K):ce(K)):te(K)}function ce(K){return K===null||Re(K)?(q.exit("codeFencedFence"),M(K)):te(K)}}}function EE(t,r,l){const u=this;return o;function o(c){return c===null?l(c):(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s)}function s(c){return u.parser.lazy[u.now().line]?l(c):r(c)}}const af={name:"codeIndented",tokenize:CE},TE={partial:!0,tokenize:kE};function CE(t,r,l){const u=this;return o;function o(m){return t.enter("codeIndented"),Ze(t,s,"linePrefix",5)(m)}function s(m){const y=u.events[u.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(m):l(m)}function c(m){return m===null?p(m):Re(m)?t.attempt(TE,c,p)(m):(t.enter("codeFlowValue"),d(m))}function d(m){return m===null||Re(m)?(t.exit("codeFlowValue"),c(m)):(t.consume(m),d)}function p(m){return t.exit("codeIndented"),r(m)}}function kE(t,r,l){const u=this;return o;function o(c){return u.parser.lazy[u.now().line]?l(c):Re(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),o):Ze(t,s,"linePrefix",5)(c)}function s(c){const d=u.events[u.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(c):Re(c)?o(c):l(c)}}const RE={name:"codeText",previous:DE,resolve:AE,tokenize:ME};function AE(t){let r=t.length-4,l=3,u,o;if((t[l][1].type==="lineEnding"||t[l][1].type==="space")&&(t[r][1].type==="lineEnding"||t[r][1].type==="space")){for(u=l;++u<r;)if(t[u][1].type==="codeTextData"){t[l][1].type="codeTextPadding",t[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(u=l-1,r++;++u<=r;)o===void 0?u!==r&&t[u][1].type!=="lineEnding"&&(o=u):(u===r||t[u][1].type==="lineEnding")&&(t[o][1].type="codeTextData",u!==o+2&&(t[o][1].end=t[u-1][1].end,t.splice(o+2,u-o-2),r-=u-o-2,u=o+2),o=void 0);return t}function DE(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ME(t,r,l){let u=0,o,s;return c;function c(g){return t.enter("codeText"),t.enter("codeTextSequence"),d(g)}function d(g){return g===96?(t.consume(g),u++,d):(t.exit("codeTextSequence"),p(g))}function p(g){return g===null?l(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),p):g===96?(s=t.enter("codeTextSequence"),o=0,y(g)):Re(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),p):(t.enter("codeTextData"),m(g))}function m(g){return g===null||g===32||g===96||Re(g)?(t.exit("codeTextData"),p(g)):(t.consume(g),m)}function y(g){return g===96?(t.consume(g),o++,y):o===u?(t.exit("codeTextSequence"),t.exit("codeText"),r(g)):(s.type="codeTextData",m(g))}}class zE{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const u=l??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,l,u){const o=l||0;this.setCursor(Math.trunc(r));const s=this.right.splice(this.right.length-o,Number.POSITIVE_INFINITY);return u&&Ti(this.left,u),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),Ti(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),Ti(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);Ti(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);Ti(this.left,l.reverse())}}}function Ti(t,r){let l=0;if(r.length<1e4)t.push(...r);else for(;l<r.length;)t.push(...r.slice(l,l+1e4)),l+=1e4}function kv(t){const r={};let l=-1,u,o,s,c,d,p,m;const y=new zE(t);for(;++l<y.length;){for(;l in r;)l=r[l];if(u=y.get(l),l&&u[1].type==="chunkFlow"&&y.get(l-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,s=0,s<p.length&&p[s][1].type==="lineEndingBlank"&&(s+=2),s<p.length&&p[s][1].type==="content"))for(;++s<p.length&&p[s][1].type!=="content";)p[s][1].type==="chunkText"&&(p[s][1]._isInFirstContentOfListItem=!0,s++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,_E(y,l)),l=r[l],m=!0);else if(u[1]._container){for(s=l,o=void 0;s--;)if(c=y.get(s),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(o&&(y.get(o)[1].type="lineEndingBlank"),c[1].type="lineEnding",o=s);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;o&&(u[1].end={...y.get(o)[1].start},d=y.slice(o,l),d.unshift(u),y.splice(o,l-o+1,d))}}return vn(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!m}function _E(t,r){const l=t.get(r)[1],u=t.get(r)[2];let o=r-1;const s=[];let c=l._tokenizer;c||(c=u.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const d=c.events,p=[],m={};let y,g,w=-1,b=l,E=0,z=0;const j=[z];for(;b;){for(;t.get(++o)[1]!==b;);s.push(o),b._tokenizer||(y=u.sliceStream(b),b.next||y.push(null),g&&c.defineSkip(b.start),b._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),b._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),g=b,b=b.next}for(b=l;++w<d.length;)d[w][0]==="exit"&&d[w-1][0]==="enter"&&d[w][1].type===d[w-1][1].type&&d[w][1].start.line!==d[w][1].end.line&&(z=w+1,j.push(z),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(c.events=[],b?(b._tokenizer=void 0,b.previous=void 0):j.pop(),w=j.length;w--;){const A=d.slice(j[w],j[w+1]),L=s.pop();p.push([L,L+A.length-1]),t.splice(L,2,A)}for(p.reverse(),w=-1;++w<p.length;)m[E+p[w][0]]=E+p[w][1],E+=p[w][1]-p[w][0]-1;return m}const OE={resolve:NE,tokenize:LE},jE={partial:!0,tokenize:UE};function NE(t){return kv(t),t}function LE(t,r){let l;return u;function u(d){return t.enter("content"),l=t.enter("chunkContent",{contentType:"content"}),o(d)}function o(d){return d===null?s(d):Re(d)?t.check(jE,c,s)(d):(t.consume(d),o)}function s(d){return t.exit("chunkContent"),t.exit("content"),r(d)}function c(d){return t.consume(d),t.exit("chunkContent"),l.next=t.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,o}}function UE(t,r,l){const u=this;return o;function o(c){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),Ze(t,s,"linePrefix")}function s(c){if(c===null||Re(c))return l(c);const d=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?r(c):t.interrupt(u.parser.constructs.flow,l,r)(c)}}function Rv(t,r,l,u,o,s,c,d,p){const m=p||Number.POSITIVE_INFINITY;let y=0;return g;function g(A){return A===60?(t.enter(u),t.enter(o),t.enter(s),t.consume(A),t.exit(s),w):A===null||A===32||A===41||bo(A)?l(A):(t.enter(u),t.enter(c),t.enter(d),t.enter("chunkString",{contentType:"string"}),z(A))}function w(A){return A===62?(t.enter(s),t.consume(A),t.exit(s),t.exit(o),t.exit(u),r):(t.enter(d),t.enter("chunkString",{contentType:"string"}),b(A))}function b(A){return A===62?(t.exit("chunkString"),t.exit(d),w(A)):A===null||A===60||Re(A)?l(A):(t.consume(A),A===92?E:b)}function E(A){return A===60||A===62||A===92?(t.consume(A),b):b(A)}function z(A){return!y&&(A===null||A===41||st(A))?(t.exit("chunkString"),t.exit(d),t.exit(c),t.exit(u),r(A)):y<m&&A===40?(t.consume(A),y++,z):A===41?(t.consume(A),y--,z):A===null||A===32||A===40||bo(A)?l(A):(t.consume(A),A===92?j:z)}function j(A){return A===40||A===41||A===92?(t.consume(A),z):z(A)}}function Av(t,r,l,u,o,s){const c=this;let d=0,p;return m;function m(b){return t.enter(u),t.enter(o),t.consume(b),t.exit(o),t.enter(s),y}function y(b){return d>999||b===null||b===91||b===93&&!p||b===94&&!d&&"_hiddenFootnoteSupport"in c.parser.constructs?l(b):b===93?(t.exit(s),t.enter(o),t.consume(b),t.exit(o),t.exit(u),r):Re(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||b===91||b===93||Re(b)||d++>999?(t.exit("chunkString"),y(b)):(t.consume(b),p||(p=!Be(b)),b===92?w:g)}function w(b){return b===91||b===92||b===93?(t.consume(b),d++,g):g(b)}}function Dv(t,r,l,u,o,s){let c;return d;function d(w){return w===34||w===39||w===40?(t.enter(u),t.enter(o),t.consume(w),t.exit(o),c=w===40?41:w,p):l(w)}function p(w){return w===c?(t.enter(o),t.consume(w),t.exit(o),t.exit(u),r):(t.enter(s),m(w))}function m(w){return w===c?(t.exit(s),p(c)):w===null?l(w):Re(w)?(t.enter("lineEnding"),t.consume(w),t.exit("lineEnding"),Ze(t,m,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===c||w===null||Re(w)?(t.exit("chunkString"),m(w)):(t.consume(w),w===92?g:y)}function g(w){return w===c||w===92?(t.consume(w),y):y(w)}}function Mi(t,r){let l;return u;function u(o){return Re(o)?(t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),l=!0,u):Be(o)?Ze(t,u,l?"linePrefix":"lineSuffix")(o):r(o)}}const HE={name:"definition",tokenize:YE},BE={partial:!0,tokenize:qE};function YE(t,r,l){const u=this;let o;return s;function s(b){return t.enter("definition"),c(b)}function c(b){return Av.call(u,t,d,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function d(b){return o=Fn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),b===58?(t.enter("definitionMarker"),t.consume(b),t.exit("definitionMarker"),p):l(b)}function p(b){return st(b)?Mi(t,m)(b):m(b)}function m(b){return Rv(t,y,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function y(b){return t.attempt(BE,g,g)(b)}function g(b){return Be(b)?Ze(t,w,"whitespace")(b):w(b)}function w(b){return b===null||Re(b)?(t.exit("definition"),u.parser.defined.push(o),r(b)):l(b)}}function qE(t,r,l){return u;function u(d){return st(d)?Mi(t,o)(d):l(d)}function o(d){return Dv(t,s,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(d)}function s(d){return Be(d)?Ze(t,c,"whitespace")(d):c(d)}function c(d){return d===null||Re(d)?r(d):l(d)}}const IE={name:"hardBreakEscape",tokenize:FE};function FE(t,r,l){return u;function u(s){return t.enter("hardBreakEscape"),t.consume(s),o}function o(s){return Re(s)?(t.exit("hardBreakEscape"),r(s)):l(s)}}const GE={name:"headingAtx",resolve:VE,tokenize:XE};function VE(t,r){let l=t.length-2,u=3,o,s;return t[u][1].type==="whitespace"&&(u+=2),l-2>u&&t[l][1].type==="whitespace"&&(l-=2),t[l][1].type==="atxHeadingSequence"&&(u===l-1||l-4>u&&t[l-2][1].type==="whitespace")&&(l-=u+1===l?2:4),l>u&&(o={type:"atxHeadingText",start:t[u][1].start,end:t[l][1].end},s={type:"chunkText",start:t[u][1].start,end:t[l][1].end,contentType:"text"},vn(t,u,l-u+1,[["enter",o,r],["enter",s,r],["exit",s,r],["exit",o,r]])),t}function XE(t,r,l){let u=0;return o;function o(y){return t.enter("atxHeading"),s(y)}function s(y){return t.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&u++<6?(t.consume(y),c):y===null||st(y)?(t.exit("atxHeadingSequence"),d(y)):l(y)}function d(y){return y===35?(t.enter("atxHeadingSequence"),p(y)):y===null||Re(y)?(t.exit("atxHeading"),r(y)):Be(y)?Ze(t,d,"whitespace")(y):(t.enter("atxHeadingText"),m(y))}function p(y){return y===35?(t.consume(y),p):(t.exit("atxHeadingSequence"),d(y))}function m(y){return y===null||y===35||st(y)?(t.exit("atxHeadingText"),d(y)):(t.consume(y),m)}}const QE=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kg=["pre","script","style","textarea"],ZE={concrete:!0,name:"htmlFlow",resolveTo:KE,tokenize:WE},JE={partial:!0,tokenize:eT},PE={partial:!0,tokenize:$E};function KE(t){let r=t.length;for(;r--&&!(t[r][0]==="enter"&&t[r][1].type==="htmlFlow"););return r>1&&t[r-2][1].type==="linePrefix"&&(t[r][1].start=t[r-2][1].start,t[r+1][1].start=t[r-2][1].start,t.splice(r-2,2)),t}function WE(t,r,l){const u=this;let o,s,c,d,p;return m;function m(x){return y(x)}function y(x){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(x),g}function g(x){return x===33?(t.consume(x),w):x===47?(t.consume(x),s=!0,z):x===63?(t.consume(x),o=3,u.interrupt?r:T):Qt(x)?(t.consume(x),c=String.fromCharCode(x),j):l(x)}function w(x){return x===45?(t.consume(x),o=2,b):x===91?(t.consume(x),o=5,d=0,E):Qt(x)?(t.consume(x),o=4,u.interrupt?r:T):l(x)}function b(x){return x===45?(t.consume(x),u.interrupt?r:T):l(x)}function E(x){const le="CDATA[";return x===le.charCodeAt(d++)?(t.consume(x),d===le.length?u.interrupt?r:ae:E):l(x)}function z(x){return Qt(x)?(t.consume(x),c=String.fromCharCode(x),j):l(x)}function j(x){if(x===null||x===47||x===62||st(x)){const le=x===47,ye=c.toLowerCase();return!le&&!s&&Kg.includes(ye)?(o=1,u.interrupt?r(x):ae(x)):QE.includes(c.toLowerCase())?(o=6,le?(t.consume(x),A):u.interrupt?r(x):ae(x)):(o=7,u.interrupt&&!u.parser.lazy[u.now().line]?l(x):s?L(x):H(x))}return x===45||Ft(x)?(t.consume(x),c+=String.fromCharCode(x),j):l(x)}function A(x){return x===62?(t.consume(x),u.interrupt?r:ae):l(x)}function L(x){return Be(x)?(t.consume(x),L):U(x)}function H(x){return x===47?(t.consume(x),U):x===58||x===95||Qt(x)?(t.consume(x),fe):Be(x)?(t.consume(x),H):U(x)}function fe(x){return x===45||x===46||x===58||x===95||Ft(x)?(t.consume(x),fe):oe(x)}function oe(x){return x===61?(t.consume(x),q):Be(x)?(t.consume(x),oe):H(x)}function q(x){return x===null||x===60||x===61||x===62||x===96?l(x):x===34||x===39?(t.consume(x),p=x,M):Be(x)?(t.consume(x),q):te(x)}function M(x){return x===p?(t.consume(x),p=null,de):x===null||Re(x)?l(x):(t.consume(x),M)}function te(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||st(x)?oe(x):(t.consume(x),te)}function de(x){return x===47||x===62||Be(x)?H(x):l(x)}function U(x){return x===62?(t.consume(x),ee):l(x)}function ee(x){return x===null||Re(x)?ae(x):Be(x)?(t.consume(x),ee):l(x)}function ae(x){return x===45&&o===2?(t.consume(x),N):x===60&&o===1?(t.consume(x),W):x===62&&o===4?(t.consume(x),R):x===63&&o===3?(t.consume(x),T):x===93&&o===5?(t.consume(x),Ee):Re(x)&&(o===6||o===7)?(t.exit("htmlFlowData"),t.check(JE,X,De)(x)):x===null||Re(x)?(t.exit("htmlFlowData"),De(x)):(t.consume(x),ae)}function De(x){return t.check(PE,ce,X)(x)}function ce(x){return t.enter("lineEnding"),t.consume(x),t.exit("lineEnding"),K}function K(x){return x===null||Re(x)?De(x):(t.enter("htmlFlowData"),ae(x))}function N(x){return x===45?(t.consume(x),T):ae(x)}function W(x){return x===47?(t.consume(x),c="",re):ae(x)}function re(x){if(x===62){const le=c.toLowerCase();return Kg.includes(le)?(t.consume(x),R):ae(x)}return Qt(x)&&c.length<8?(t.consume(x),c+=String.fromCharCode(x),re):ae(x)}function Ee(x){return x===93?(t.consume(x),T):ae(x)}function T(x){return x===62?(t.consume(x),R):x===45&&o===2?(t.consume(x),T):ae(x)}function R(x){return x===null||Re(x)?(t.exit("htmlFlowData"),X(x)):(t.consume(x),R)}function X(x){return t.exit("htmlFlow"),r(x)}}function $E(t,r,l){const u=this;return o;function o(c){return Re(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s):l(c)}function s(c){return u.parser.lazy[u.now().line]?l(c):r(c)}}function eT(t,r,l){return u;function u(o){return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),t.attempt(Fi,r,l)}}const tT={name:"htmlText",tokenize:nT};function nT(t,r,l){const u=this;let o,s,c;return d;function d(T){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(T),p}function p(T){return T===33?(t.consume(T),m):T===47?(t.consume(T),oe):T===63?(t.consume(T),H):Qt(T)?(t.consume(T),te):l(T)}function m(T){return T===45?(t.consume(T),y):T===91?(t.consume(T),s=0,E):Qt(T)?(t.consume(T),L):l(T)}function y(T){return T===45?(t.consume(T),b):l(T)}function g(T){return T===null?l(T):T===45?(t.consume(T),w):Re(T)?(c=g,W(T)):(t.consume(T),g)}function w(T){return T===45?(t.consume(T),b):g(T)}function b(T){return T===62?N(T):T===45?w(T):g(T)}function E(T){const R="CDATA[";return T===R.charCodeAt(s++)?(t.consume(T),s===R.length?z:E):l(T)}function z(T){return T===null?l(T):T===93?(t.consume(T),j):Re(T)?(c=z,W(T)):(t.consume(T),z)}function j(T){return T===93?(t.consume(T),A):z(T)}function A(T){return T===62?N(T):T===93?(t.consume(T),A):z(T)}function L(T){return T===null||T===62?N(T):Re(T)?(c=L,W(T)):(t.consume(T),L)}function H(T){return T===null?l(T):T===63?(t.consume(T),fe):Re(T)?(c=H,W(T)):(t.consume(T),H)}function fe(T){return T===62?N(T):H(T)}function oe(T){return Qt(T)?(t.consume(T),q):l(T)}function q(T){return T===45||Ft(T)?(t.consume(T),q):M(T)}function M(T){return Re(T)?(c=M,W(T)):Be(T)?(t.consume(T),M):N(T)}function te(T){return T===45||Ft(T)?(t.consume(T),te):T===47||T===62||st(T)?de(T):l(T)}function de(T){return T===47?(t.consume(T),N):T===58||T===95||Qt(T)?(t.consume(T),U):Re(T)?(c=de,W(T)):Be(T)?(t.consume(T),de):N(T)}function U(T){return T===45||T===46||T===58||T===95||Ft(T)?(t.consume(T),U):ee(T)}function ee(T){return T===61?(t.consume(T),ae):Re(T)?(c=ee,W(T)):Be(T)?(t.consume(T),ee):de(T)}function ae(T){return T===null||T===60||T===61||T===62||T===96?l(T):T===34||T===39?(t.consume(T),o=T,De):Re(T)?(c=ae,W(T)):Be(T)?(t.consume(T),ae):(t.consume(T),ce)}function De(T){return T===o?(t.consume(T),o=void 0,K):T===null?l(T):Re(T)?(c=De,W(T)):(t.consume(T),De)}function ce(T){return T===null||T===34||T===39||T===60||T===61||T===96?l(T):T===47||T===62||st(T)?de(T):(t.consume(T),ce)}function K(T){return T===47||T===62||st(T)?de(T):l(T)}function N(T){return T===62?(t.consume(T),t.exit("htmlTextData"),t.exit("htmlText"),r):l(T)}function W(T){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(T),t.exit("lineEnding"),re}function re(T){return Be(T)?Ze(t,Ee,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(T):Ee(T)}function Ee(T){return t.enter("htmlTextData"),c(T)}}const th={name:"labelEnd",resolveAll:iT,resolveTo:uT,tokenize:oT},aT={tokenize:sT},rT={tokenize:cT},lT={tokenize:fT};function iT(t){let r=-1;const l=[];for(;++r<t.length;){const u=t[r][1];if(l.push(t[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const o=u.type==="labelImage"?4:2;u.type="data",r+=o}}return t.length!==l.length&&vn(t,0,t.length,l),t}function uT(t,r){let l=t.length,u=0,o,s,c,d;for(;l--;)if(o=t[l][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;t[l][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(c){if(t[l][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=l,o.type!=="labelLink")){u=2;break}}else o.type==="labelEnd"&&(c=l);const p={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},m={type:"label",start:{...t[s][1].start},end:{...t[c][1].end}},y={type:"labelText",start:{...t[s+u+2][1].end},end:{...t[c-2][1].start}};return d=[["enter",p,r],["enter",m,r]],d=zn(d,t.slice(s+1,s+u+3)),d=zn(d,[["enter",y,r]]),d=zn(d,zo(r.parser.constructs.insideSpan.null,t.slice(s+u+4,c-3),r)),d=zn(d,[["exit",y,r],t[c-2],t[c-1],["exit",m,r]]),d=zn(d,t.slice(c+1)),d=zn(d,[["exit",p,r]]),vn(t,s,t.length,d),t}function oT(t,r,l){const u=this;let o=u.events.length,s,c;for(;o--;)if((u.events[o][1].type==="labelImage"||u.events[o][1].type==="labelLink")&&!u.events[o][1]._balanced){s=u.events[o][1];break}return d;function d(w){return s?s._inactive?g(w):(c=u.parser.defined.includes(Fn(u.sliceSerialize({start:s.end,end:u.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(w),t.exit("labelMarker"),t.exit("labelEnd"),p):l(w)}function p(w){return w===40?t.attempt(aT,y,c?y:g)(w):w===91?t.attempt(rT,y,c?m:g)(w):c?y(w):g(w)}function m(w){return t.attempt(lT,y,g)(w)}function y(w){return r(w)}function g(w){return s._balanced=!0,l(w)}}function sT(t,r,l){return u;function u(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),o}function o(g){return st(g)?Mi(t,s)(g):s(g)}function s(g){return g===41?y(g):Rv(t,c,d,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function c(g){return st(g)?Mi(t,p)(g):y(g)}function d(g){return l(g)}function p(g){return g===34||g===39||g===40?Dv(t,m,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function m(g){return st(g)?Mi(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),r):l(g)}}function cT(t,r,l){const u=this;return o;function o(d){return Av.call(u,t,s,c,"reference","referenceMarker","referenceString")(d)}function s(d){return u.parser.defined.includes(Fn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(d):l(d)}function c(d){return l(d)}}function fT(t,r,l){return u;function u(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),o}function o(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),r):l(s)}}const hT={name:"labelStartImage",resolveAll:th.resolveAll,tokenize:dT};function dT(t,r,l){const u=this;return o;function o(d){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(d),t.exit("labelImageMarker"),s}function s(d){return d===91?(t.enter("labelMarker"),t.consume(d),t.exit("labelMarker"),t.exit("labelImage"),c):l(d)}function c(d){return d===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(d):r(d)}}const mT={name:"labelStartLink",resolveAll:th.resolveAll,tokenize:pT};function pT(t,r,l){const u=this;return o;function o(c){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelLink"),s}function s(c){return c===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(c):r(c)}}const rf={name:"lineEnding",tokenize:gT};function gT(t,r){return l;function l(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),Ze(t,r,"linePrefix")}}const go={name:"thematicBreak",tokenize:yT};function yT(t,r,l){let u=0,o;return s;function s(m){return t.enter("thematicBreak"),c(m)}function c(m){return o=m,d(m)}function d(m){return m===o?(t.enter("thematicBreakSequence"),p(m)):u>=3&&(m===null||Re(m))?(t.exit("thematicBreak"),r(m)):l(m)}function p(m){return m===o?(t.consume(m),u++,p):(t.exit("thematicBreakSequence"),Be(m)?Ze(t,d,"whitespace")(m):d(m))}}const an={continuation:{tokenize:ST},exit:ET,name:"list",tokenize:wT},vT={partial:!0,tokenize:TT},bT={partial:!0,tokenize:xT};function wT(t,r,l){const u=this,o=u.events[u.events.length-1];let s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,c=0;return d;function d(b){const E=u.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!u.containerState.marker||b===u.containerState.marker:kf(b)){if(u.containerState.type||(u.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),b===42||b===45?t.check(go,l,m)(b):m(b);if(!u.interrupt||b===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),p(b)}return l(b)}function p(b){return kf(b)&&++c<10?(t.consume(b),p):(!u.interrupt||c<2)&&(u.containerState.marker?b===u.containerState.marker:b===41||b===46)?(t.exit("listItemValue"),m(b)):l(b)}function m(b){return t.enter("listItemMarker"),t.consume(b),t.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||b,t.check(Fi,u.interrupt?l:y,t.attempt(vT,w,g))}function y(b){return u.containerState.initialBlankLine=!0,s++,w(b)}function g(b){return Be(b)?(t.enter("listItemPrefixWhitespace"),t.consume(b),t.exit("listItemPrefixWhitespace"),w):l(b)}function w(b){return u.containerState.size=s+u.sliceSerialize(t.exit("listItemPrefix"),!0).length,r(b)}}function ST(t,r,l){const u=this;return u.containerState._closeFlow=void 0,t.check(Fi,o,s);function o(d){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Ze(t,r,"listItemIndent",u.containerState.size+1)(d)}function s(d){return u.containerState.furtherBlankLines||!Be(d)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,c(d)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,t.attempt(bT,r,c)(d))}function c(d){return u.containerState._closeFlow=!0,u.interrupt=void 0,Ze(t,t.attempt(an,r,l),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(d)}}function xT(t,r,l){const u=this;return Ze(t,o,"listItemIndent",u.containerState.size+1);function o(s){const c=u.events[u.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===u.containerState.size?r(s):l(s)}}function ET(t){t.exit(this.containerState.type)}function TT(t,r,l){const u=this;return Ze(t,o,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){const c=u.events[u.events.length-1];return!Be(s)&&c&&c[1].type==="listItemPrefixWhitespace"?r(s):l(s)}}const Wg={name:"setextUnderline",resolveTo:CT,tokenize:kT};function CT(t,r){let l=t.length,u,o,s;for(;l--;)if(t[l][0]==="enter"){if(t[l][1].type==="content"){u=l;break}t[l][1].type==="paragraph"&&(o=l)}else t[l][1].type==="content"&&t.splice(l,1),!s&&t[l][1].type==="definition"&&(s=l);const c={type:"setextHeading",start:{...t[u][1].start},end:{...t[t.length-1][1].end}};return t[o][1].type="setextHeadingText",s?(t.splice(o,0,["enter",c,r]),t.splice(s+1,0,["exit",t[u][1],r]),t[u][1].end={...t[s][1].end}):t[u][1]=c,t.push(["exit",c,r]),t}function kT(t,r,l){const u=this;let o;return s;function s(m){let y=u.events.length,g;for(;y--;)if(u.events[y][1].type!=="lineEnding"&&u.events[y][1].type!=="linePrefix"&&u.events[y][1].type!=="content"){g=u.events[y][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||g)?(t.enter("setextHeadingLine"),o=m,c(m)):l(m)}function c(m){return t.enter("setextHeadingLineSequence"),d(m)}function d(m){return m===o?(t.consume(m),d):(t.exit("setextHeadingLineSequence"),Be(m)?Ze(t,p,"lineSuffix")(m):p(m))}function p(m){return m===null||Re(m)?(t.exit("setextHeadingLine"),r(m)):l(m)}}const RT={tokenize:AT};function AT(t){const r=this,l=t.attempt(Fi,u,t.attempt(this.parser.constructs.flowInitial,o,Ze(t,t.attempt(this.parser.constructs.flow,o,t.attempt(OE,o)),"linePrefix")));return l;function u(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function o(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r.currentConstruct=void 0,l}}const DT={resolveAll:zv()},MT=Mv("string"),zT=Mv("text");function Mv(t){return{resolveAll:zv(t==="text"?_T:void 0),tokenize:r};function r(l){const u=this,o=this.parser.constructs[t],s=l.attempt(o,c,d);return c;function c(y){return m(y)?s(y):d(y)}function d(y){if(y===null){l.consume(y);return}return l.enter("data"),l.consume(y),p}function p(y){return m(y)?(l.exit("data"),s(y)):(l.consume(y),p)}function m(y){if(y===null)return!0;const g=o[y];let w=-1;if(g)for(;++w<g.length;){const b=g[w];if(!b.previous||b.previous.call(u,u.previous))return!0}return!1}}}function zv(t){return r;function r(l,u){let o=-1,s;for(;++o<=l.length;)s===void 0?l[o]&&l[o][1].type==="data"&&(s=o,o++):(!l[o]||l[o][1].type!=="data")&&(o!==s+2&&(l[s][1].end=l[o-1][1].end,l.splice(s+2,o-s-2),o=s+2),s=void 0);return t?t(l,u):l}}function _T(t,r){let l=0;for(;++l<=t.length;)if((l===t.length||t[l][1].type==="lineEnding")&&t[l-1][1].type==="data"){const u=t[l-1][1],o=r.sliceStream(u);let s=o.length,c=-1,d=0,p;for(;s--;){const m=o[s];if(typeof m=="string"){for(c=m.length;m.charCodeAt(c-1)===32;)d++,c--;if(c)break;c=-1}else if(m===-2)p=!0,d++;else if(m!==-1){s++;break}}if(r._contentTypeTextTrailing&&l===t.length&&(d=0),d){const m={type:l===t.length||p||d<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?c:u.start._bufferIndex+c,_index:u.start._index+s,line:u.end.line,column:u.end.column-d,offset:u.end.offset-d},end:{...u.end}};u.end={...m.start},u.start.offset===u.end.offset?Object.assign(u,m):(t.splice(l,0,["enter",m,r],["exit",m,r]),l+=2)}l++}return t}const OT={42:an,43:an,45:an,48:an,49:an,50:an,51:an,52:an,53:an,54:an,55:an,56:an,57:an,62:Ev},jT={91:HE},NT={[-2]:af,[-1]:af,32:af},LT={35:GE,42:go,45:[Wg,go],60:ZE,61:Wg,95:go,96:Pg,126:Pg},UT={38:Cv,92:Tv},HT={[-5]:rf,[-4]:rf,[-3]:rf,33:hT,38:Cv,42:Rf,60:[mE,tT],91:mT,92:[IE,Tv],93:th,95:Rf,96:RE},BT={null:[Rf,DT]},YT={null:[42,95]},qT={null:[]},IT=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:YT,contentInitial:jT,disable:qT,document:OT,flow:LT,flowInitial:NT,insideSpan:BT,string:UT,text:HT},Symbol.toStringTag,{value:"Module"}));function FT(t,r,l){let u={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const o={},s=[];let c=[],d=[];const p={attempt:M(oe),check:M(q),consume:L,enter:H,exit:fe,interrupt:M(q,{interrupt:!0})},m={code:null,containerState:{},defineSkip:z,events:[],now:E,parser:t,previous:null,sliceSerialize:w,sliceStream:b,write:g};let y=r.tokenize.call(m,p);return r.resolveAll&&s.push(r),m;function g(ee){return c=zn(c,ee),j(),c[c.length-1]!==null?[]:(te(r,0),m.events=zo(s,m.events,m),m.events)}function w(ee,ae){return VT(b(ee),ae)}function b(ee){return GT(c,ee)}function E(){const{_bufferIndex:ee,_index:ae,line:De,column:ce,offset:K}=u;return{_bufferIndex:ee,_index:ae,line:De,column:ce,offset:K}}function z(ee){o[ee.line]=ee.column,U()}function j(){let ee;for(;u._index<c.length;){const ae=c[u._index];if(typeof ae=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<ae.length;)A(ae.charCodeAt(u._bufferIndex));else A(ae)}}function A(ee){y=y(ee)}function L(ee){Re(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,U()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===c[u._index].length&&(u._bufferIndex=-1,u._index++)),m.previous=ee}function H(ee,ae){const De=ae||{};return De.type=ee,De.start=E(),m.events.push(["enter",De,m]),d.push(De),De}function fe(ee){const ae=d.pop();return ae.end=E(),m.events.push(["exit",ae,m]),ae}function oe(ee,ae){te(ee,ae.from)}function q(ee,ae){ae.restore()}function M(ee,ae){return De;function De(ce,K,N){let W,re,Ee,T;return Array.isArray(ce)?X(ce):"tokenize"in ce?X([ce]):R(ce);function R(ve){return Oe;function Oe($e){const et=$e!==null&&ve[$e],Zt=$e!==null&&ve.null,jn=[...Array.isArray(et)?et:et?[et]:[],...Array.isArray(Zt)?Zt:Zt?[Zt]:[]];return X(jn)($e)}}function X(ve){return W=ve,re=0,ve.length===0?N:x(ve[re])}function x(ve){return Oe;function Oe($e){return T=de(),Ee=ve,ve.partial||(m.currentConstruct=ve),ve.name&&m.parser.constructs.disable.null.includes(ve.name)?ye():ve.tokenize.call(ae?Object.assign(Object.create(m),ae):m,p,le,ye)($e)}}function le(ve){return ee(Ee,T),K}function ye(ve){return T.restore(),++re<W.length?x(W[re]):N}}}function te(ee,ae){ee.resolveAll&&!s.includes(ee)&&s.push(ee),ee.resolve&&vn(m.events,ae,m.events.length-ae,ee.resolve(m.events.slice(ae),m)),ee.resolveTo&&(m.events=ee.resolveTo(m.events,m))}function de(){const ee=E(),ae=m.previous,De=m.currentConstruct,ce=m.events.length,K=Array.from(d);return{from:ce,restore:N};function N(){u=ee,m.previous=ae,m.currentConstruct=De,m.events.length=ce,d=K,U()}}function U(){u.line in o&&u.column<2&&(u.column=o[u.line],u.offset+=o[u.line]-1)}}function GT(t,r){const l=r.start._index,u=r.start._bufferIndex,o=r.end._index,s=r.end._bufferIndex;let c;if(l===o)c=[t[l].slice(u,s)];else{if(c=t.slice(l,o),u>-1){const d=c[0];typeof d=="string"?c[0]=d.slice(u):c.shift()}s>0&&c.push(t[o].slice(0,s))}return c}function VT(t,r){let l=-1;const u=[];let o;for(;++l<t.length;){const s=t[l];let c;if(typeof s=="string")c=s;else switch(s){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=r?" ":"	";break}case-1:{if(!r&&o)continue;c=" ";break}default:c=String.fromCharCode(s)}o=s===-2,u.push(c)}return u.join("")}function XT(t){const u={constructs:Sv([IT,...(t||{}).extensions||[]]),content:o(uE),defined:[],document:o(sE),flow:o(RT),lazy:{},string:o(MT),text:o(zT)};return u;function o(s){return c;function c(d){return FT(u,s,d)}}}function QT(t){for(;!kv(t););return t}const $g=/[\0\t\n\r]/g;function ZT(){let t=1,r="",l=!0,u;return o;function o(s,c,d){const p=[];let m,y,g,w,b;for(s=r+(typeof s=="string"?s.toString():new TextDecoder(c||void 0).decode(s)),g=0,r="",l&&(s.charCodeAt(0)===65279&&g++,l=void 0);g<s.length;){if($g.lastIndex=g,m=$g.exec(s),w=m&&m.index!==void 0?m.index:s.length,b=s.charCodeAt(w),!m){r=s.slice(g);break}if(b===10&&g===w&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),g<w&&(p.push(s.slice(g,w)),t+=w-g),b){case 0:{p.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,p.push(-2);t++<y;)p.push(-1);break}case 10:{p.push(-4),t=1;break}default:u=!0,t=1}g=w+1}return d&&(u&&p.push(-5),r&&p.push(r),p.push(null)),p}}const JT=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function PT(t){return t.replace(JT,KT)}function KT(t,r,l){if(r)return r;if(l.charCodeAt(0)===35){const o=l.charCodeAt(1),s=o===120||o===88;return xv(l.slice(s?2:1),s?16:10)}return eh(l)||t}const _v={}.hasOwnProperty;function WT(t,r,l){return typeof r!="string"&&(l=r,r=void 0),$T(l)(QT(XT(l).document().write(ZT()(t,r,!0))))}function $T(t){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s($n),autolinkProtocol:de,autolinkEmail:de,atxHeading:s(Ta),blockQuote:s(Zt),characterEscape:de,characterReference:de,codeFenced:s(jn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(jn,c),codeText:s(yt,c),codeTextData:de,data:de,codeFlowValue:de,definition:s(Nn),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(bn),hardBreakEscape:s(Jt),hardBreakTrailing:s(Jt),htmlFlow:s(Nr,c),htmlFlowData:de,htmlText:s(Nr,c),htmlTextData:de,image:s(Lr),label:c,link:s($n),listItem:s(ir),listItemValue:w,listOrdered:s(Ca,g),listUnordered:s(Ca),paragraph:s(Rl),reference:x,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(Ta),strong:s(Al),thematicBreak:s(ea)},exit:{atxHeading:p(),atxHeadingSequence:oe,autolink:p(),autolinkEmail:et,autolinkProtocol:$e,blockQuote:p(),characterEscapeValue:U,characterReferenceMarkerHexadecimal:ye,characterReferenceMarkerNumeric:ye,characterReferenceValue:ve,characterReference:Oe,codeFenced:p(j),codeFencedFence:z,codeFencedFenceInfo:b,codeFencedFenceMeta:E,codeFlowValue:U,codeIndented:p(A),codeText:p(K),codeTextData:U,data:U,definition:p(),definitionDestinationString:fe,definitionLabelString:L,definitionTitleString:H,emphasis:p(),hardBreakEscape:p(ae),hardBreakTrailing:p(ae),htmlFlow:p(De),htmlFlowData:U,htmlText:p(ce),htmlTextData:U,image:p(W),label:Ee,labelText:re,lineEnding:ee,link:p(N),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:le,resourceDestinationString:T,resourceTitleString:R,resource:X,setextHeading:p(te),setextHeadingLineSequence:M,setextHeadingText:q,strong:p(),thematicBreak:p()}};Ov(r,(t||{}).mdastExtensions||[]);const l={};return u;function u(Z){let ie={type:"root",children:[]};const xe={stack:[ie],tokenStack:[],config:r,enter:d,exit:m,buffer:c,resume:y,data:l},Me=[];let Je=-1;for(;++Je<Z.length;)if(Z[Je][1].type==="listOrdered"||Z[Je][1].type==="listUnordered")if(Z[Je][0]==="enter")Me.push(Je);else{const Vt=Me.pop();Je=o(Z,Vt,Je)}for(Je=-1;++Je<Z.length;){const Vt=r[Z[Je][0]];_v.call(Vt,Z[Je][1].type)&&Vt[Z[Je][1].type].call(Object.assign({sliceSerialize:Z[Je][2].sliceSerialize},xe),Z[Je][1])}if(xe.tokenStack.length>0){const Vt=xe.tokenStack[xe.tokenStack.length-1];(Vt[1]||ey).call(xe,void 0,Vt[0])}for(ie.position={start:Wa(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Wa(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},Je=-1;++Je<r.transforms.length;)ie=r.transforms[Je](ie)||ie;return ie}function o(Z,ie,xe){let Me=ie-1,Je=-1,Vt=!1,ln,jt,nt,Nt;for(;++Me<=xe;){const tt=Z[Me];switch(tt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{tt[0]==="enter"?Je++:Je--,Nt=void 0;break}case"lineEndingBlank":{tt[0]==="enter"&&(ln&&!Nt&&!Je&&!nt&&(nt=Me),Nt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Nt=void 0}if(!Je&&tt[0]==="enter"&&tt[1].type==="listItemPrefix"||Je===-1&&tt[0]==="exit"&&(tt[1].type==="listUnordered"||tt[1].type==="listOrdered")){if(ln){let Ln=Me;for(jt=void 0;Ln--;){const un=Z[Ln];if(un[1].type==="lineEnding"||un[1].type==="lineEndingBlank"){if(un[0]==="exit")continue;jt&&(Z[jt][1].type="lineEndingBlank",Vt=!0),un[1].type="lineEnding",jt=Ln}else if(!(un[1].type==="linePrefix"||un[1].type==="blockQuotePrefix"||un[1].type==="blockQuotePrefixWhitespace"||un[1].type==="blockQuoteMarker"||un[1].type==="listItemIndent"))break}nt&&(!jt||nt<jt)&&(ln._spread=!0),ln.end=Object.assign({},jt?Z[jt][1].start:tt[1].end),Z.splice(jt||Me,0,["exit",ln,tt[2]]),Me++,xe++}if(tt[1].type==="listItemPrefix"){const Ln={type:"listItem",_spread:!1,start:Object.assign({},tt[1].start),end:void 0};ln=Ln,Z.splice(Me,0,["enter",Ln,tt[2]]),Me++,xe++,nt=void 0,Nt=!0}}}return Z[ie][1]._spread=Vt,xe}function s(Z,ie){return xe;function xe(Me){d.call(this,Z(Me),Me),ie&&ie.call(this,Me)}}function c(){this.stack.push({type:"fragment",children:[]})}function d(Z,ie,xe){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([ie,xe||void 0]),Z.position={start:Wa(ie.start),end:void 0}}function p(Z){return ie;function ie(xe){Z&&Z.call(this,xe),m.call(this,xe)}}function m(Z,ie){const xe=this.stack.pop(),Me=this.tokenStack.pop();if(Me)Me[0].type!==Z.type&&(ie?ie.call(this,Z,Me[0]):(Me[1]||ey).call(this,Z,Me[0]));else throw new Error("Cannot close `"+Z.type+"` ("+Di({start:Z.start,end:Z.end})+"): it’s not open");xe.position.end=Wa(Z.end)}function y(){return $f(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function w(Z){if(this.data.expectingFirstListItemValue){const ie=this.stack[this.stack.length-2];ie.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function b(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.lang=Z}function E(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.meta=Z}function z(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function A(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.value=Z.replace(/(\r?\n|\r)$/g,"")}function L(Z){const ie=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ie,xe.identifier=Fn(this.sliceSerialize(Z)).toLowerCase()}function H(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.title=Z}function fe(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.url=Z}function oe(Z){const ie=this.stack[this.stack.length-1];if(!ie.depth){const xe=this.sliceSerialize(Z).length;ie.depth=xe}}function q(){this.data.setextHeadingSlurpLineEnding=!0}function M(Z){const ie=this.stack[this.stack.length-1];ie.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function te(){this.data.setextHeadingSlurpLineEnding=void 0}function de(Z){const xe=this.stack[this.stack.length-1].children;let Me=xe[xe.length-1];(!Me||Me.type!=="text")&&(Me=pt(),Me.position={start:Wa(Z.start),end:void 0},xe.push(Me)),this.stack.push(Me)}function U(Z){const ie=this.stack.pop();ie.value+=this.sliceSerialize(Z),ie.position.end=Wa(Z.end)}function ee(Z){const ie=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=ie.children[ie.children.length-1];xe.position.end=Wa(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(ie.type)&&(de.call(this,Z),U.call(this,Z))}function ae(){this.data.atHardBreak=!0}function De(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.value=Z}function ce(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.value=Z}function K(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.value=Z}function N(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ie,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function W(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ie=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ie,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function re(Z){const ie=this.sliceSerialize(Z),xe=this.stack[this.stack.length-2];xe.label=PT(ie),xe.identifier=Fn(ie).toLowerCase()}function Ee(){const Z=this.stack[this.stack.length-1],ie=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const Me=Z.children;xe.children=Me}else xe.alt=ie}function T(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.url=Z}function R(){const Z=this.resume(),ie=this.stack[this.stack.length-1];ie.title=Z}function X(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function le(Z){const ie=this.resume(),xe=this.stack[this.stack.length-1];xe.label=ie,xe.identifier=Fn(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function ye(Z){this.data.characterReferenceType=Z.type}function ve(Z){const ie=this.sliceSerialize(Z),xe=this.data.characterReferenceType;let Me;xe?(Me=xv(ie,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Me=eh(ie);const Je=this.stack[this.stack.length-1];Je.value+=Me}function Oe(Z){const ie=this.stack.pop();ie.position.end=Wa(Z.end)}function $e(Z){U.call(this,Z);const ie=this.stack[this.stack.length-1];ie.url=this.sliceSerialize(Z)}function et(Z){U.call(this,Z);const ie=this.stack[this.stack.length-1];ie.url="mailto:"+this.sliceSerialize(Z)}function Zt(){return{type:"blockquote",children:[]}}function jn(){return{type:"code",lang:null,meta:null,value:""}}function yt(){return{type:"inlineCode",value:""}}function Nn(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function bn(){return{type:"emphasis",children:[]}}function Ta(){return{type:"heading",depth:0,children:[]}}function Jt(){return{type:"break"}}function Nr(){return{type:"html",value:""}}function Lr(){return{type:"image",title:null,url:"",alt:null}}function $n(){return{type:"link",title:null,url:"",children:[]}}function Ca(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function ir(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function Rl(){return{type:"paragraph",children:[]}}function Al(){return{type:"strong",children:[]}}function pt(){return{type:"text",value:""}}function ea(){return{type:"thematicBreak"}}}function Wa(t){return{line:t.line,column:t.column,offset:t.offset}}function Ov(t,r){let l=-1;for(;++l<r.length;){const u=r[l];Array.isArray(u)?Ov(t,u):e2(t,u)}}function e2(t,r){let l;for(l in r)if(_v.call(r,l))switch(l){case"canContainEols":{const u=r[l];u&&t[l].push(...u);break}case"transforms":{const u=r[l];u&&t[l].push(...u);break}case"enter":case"exit":{const u=r[l];u&&Object.assign(t[l],u);break}}}function ey(t,r){throw t?new Error("Cannot close `"+t.type+"` ("+Di({start:t.start,end:t.end})+"): a different token (`"+r.type+"`, "+Di({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+Di({start:r.start,end:r.end})+") is still open")}function t2(t){const r=this;r.parser=l;function l(u){return WT(u,{...r.data("settings"),...t,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function n2(t,r){const l={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(r),!0)};return t.patch(r,l),t.applyData(r,l)}function a2(t,r){const l={type:"element",tagName:"br",properties:{},children:[]};return t.patch(r,l),[t.applyData(r,l),{type:"text",value:`
`}]}function r2(t,r){const l=r.value?r.value+`
`:"",u={},o=r.lang?r.lang.split(/\s+/):[];o.length>0&&(u.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:u,children:[{type:"text",value:l}]};return r.meta&&(s.data={meta:r.meta}),t.patch(r,s),s=t.applyData(r,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(r,s),s}function l2(t,r){const l={type:"element",tagName:"del",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function i2(t,r){const l={type:"element",tagName:"em",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function u2(t,r){const l=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),o=kl(u.toLowerCase()),s=t.footnoteOrder.indexOf(u);let c,d=t.footnoteCounts.get(u);d===void 0?(d=0,t.footnoteOrder.push(u),c=t.footnoteOrder.length):c=s+1,d+=1,t.footnoteCounts.set(u,d);const p={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+o,id:l+"fnref-"+o+(d>1?"-"+d:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};t.patch(r,p);const m={type:"element",tagName:"sup",properties:{},children:[p]};return t.patch(r,m),t.applyData(r,m)}function o2(t,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function s2(t,r){if(t.options.allowDangerousHtml){const l={type:"raw",value:r.value};return t.patch(r,l),t.applyData(r,l)}}function jv(t,r){const l=r.referenceType;let u="]";if(l==="collapsed"?u+="[]":l==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const o=t.all(r),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});const c=o[o.length-1];return c&&c.type==="text"?c.value+=u:o.push({type:"text",value:u}),o}function c2(t,r){const l=String(r.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return jv(t,r);const o={src:kl(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"img",properties:o,children:[]};return t.patch(r,s),t.applyData(r,s)}function f2(t,r){const l={src:kl(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"img",properties:l,children:[]};return t.patch(r,u),t.applyData(r,u)}function h2(t,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};t.patch(r,l);const u={type:"element",tagName:"code",properties:{},children:[l]};return t.patch(r,u),t.applyData(r,u)}function d2(t,r){const l=String(r.identifier).toUpperCase(),u=t.definitionById.get(l);if(!u)return jv(t,r);const o={href:kl(u.url||"")};u.title!==null&&u.title!==void 0&&(o.title=u.title);const s={type:"element",tagName:"a",properties:o,children:t.all(r)};return t.patch(r,s),t.applyData(r,s)}function m2(t,r){const l={href:kl(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"a",properties:l,children:t.all(r)};return t.patch(r,u),t.applyData(r,u)}function p2(t,r,l){const u=t.all(r),o=l?g2(l):Nv(r),s={},c=[];if(typeof r.checked=="boolean"){const y=u[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},u.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let d=-1;for(;++d<u.length;){const y=u[d];(o||d!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!o?c.push(...y.children):c.push(y)}const p=u[u.length-1];p&&(o||p.type!=="element"||p.tagName!=="p")&&c.push({type:"text",value:`
`});const m={type:"element",tagName:"li",properties:s,children:c};return t.patch(r,m),t.applyData(r,m)}function g2(t){let r=!1;if(t.type==="list"){r=t.spread||!1;const l=t.children;let u=-1;for(;!r&&++u<l.length;)r=Nv(l[u])}return r}function Nv(t){const r=t.spread;return r??t.children.length>1}function y2(t,r){const l={},u=t.all(r);let o=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++o<u.length;){const c=u[o];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const s={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:t.wrap(u,!0)};return t.patch(r,s),t.applyData(r,s)}function v2(t,r){const l={type:"element",tagName:"p",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function b2(t,r){const l={type:"root",children:t.wrap(t.all(r))};return t.patch(r,l),t.applyData(r,l)}function w2(t,r){const l={type:"element",tagName:"strong",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}function S2(t,r){const l=t.all(r),u=l.shift(),o=[];if(u){const c={type:"element",tagName:"thead",properties:{},children:t.wrap([u],!0)};t.patch(r.children[0],c),o.push(c)}if(l.length>0){const c={type:"element",tagName:"tbody",properties:{},children:t.wrap(l,!0)},d=Jf(r.children[1]),p=mv(r.children[r.children.length-1]);d&&p&&(c.position={start:d,end:p}),o.push(c)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(o,!0)};return t.patch(r,s),t.applyData(r,s)}function x2(t,r,l){const u=l?l.children:void 0,s=(u?u.indexOf(r):1)===0?"th":"td",c=l&&l.type==="table"?l.align:void 0,d=c?c.length:r.children.length;let p=-1;const m=[];for(;++p<d;){const g=r.children[p],w={},b=c?c[p]:void 0;b&&(w.align=b);let E={type:"element",tagName:s,properties:w,children:[]};g&&(E.children=t.all(g),t.patch(g,E),E=t.applyData(g,E)),m.push(E)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(m,!0)};return t.patch(r,y),t.applyData(r,y)}function E2(t,r){const l={type:"element",tagName:"td",properties:{},children:t.all(r)};return t.patch(r,l),t.applyData(r,l)}const ty=9,ny=32;function T2(t){const r=String(t),l=/\r?\n|\r/g;let u=l.exec(r),o=0;const s=[];for(;u;)s.push(ay(r.slice(o,u.index),o>0,!0),u[0]),o=u.index+u[0].length,u=l.exec(r);return s.push(ay(r.slice(o),o>0,!1)),s.join("")}function ay(t,r,l){let u=0,o=t.length;if(r){let s=t.codePointAt(u);for(;s===ty||s===ny;)u++,s=t.codePointAt(u)}if(l){let s=t.codePointAt(o-1);for(;s===ty||s===ny;)o--,s=t.codePointAt(o-1)}return o>u?t.slice(u,o):""}function C2(t,r){const l={type:"text",value:T2(String(r.value))};return t.patch(r,l),t.applyData(r,l)}function k2(t,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(r,l),t.applyData(r,l)}const R2={blockquote:n2,break:a2,code:r2,delete:l2,emphasis:i2,footnoteReference:u2,heading:o2,html:s2,imageReference:c2,image:f2,inlineCode:h2,linkReference:d2,link:m2,listItem:p2,list:y2,paragraph:v2,root:b2,strong:w2,table:S2,tableCell:E2,tableRow:x2,text:C2,thematicBreak:k2,toml:oo,yaml:oo,definition:oo,footnoteDefinition:oo};function oo(){}const Lv=-1,_o=0,zi=1,wo=2,nh=3,ah=4,rh=5,lh=6,Uv=7,Hv=8,ry=typeof self=="object"?self:globalThis,A2=(t,r)=>{const l=(o,s)=>(t.set(s,o),o),u=o=>{if(t.has(o))return t.get(o);const[s,c]=r[o];switch(s){case _o:case Lv:return l(c,o);case zi:{const d=l([],o);for(const p of c)d.push(u(p));return d}case wo:{const d=l({},o);for(const[p,m]of c)d[u(p)]=u(m);return d}case nh:return l(new Date(c),o);case ah:{const{source:d,flags:p}=c;return l(new RegExp(d,p),o)}case rh:{const d=l(new Map,o);for(const[p,m]of c)d.set(u(p),u(m));return d}case lh:{const d=l(new Set,o);for(const p of c)d.add(u(p));return d}case Uv:{const{name:d,message:p}=c;return l(new ry[d](p),o)}case Hv:return l(BigInt(c),o);case"BigInt":return l(Object(BigInt(c)),o);case"ArrayBuffer":return l(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:d}=new Uint8Array(c);return l(new DataView(d),c)}}return l(new ry[s](c),o)};return u},ly=t=>A2(new Map,t)(0),yl="",{toString:D2}={},{keys:M2}=Object,Ci=t=>{const r=typeof t;if(r!=="object"||!t)return[_o,r];const l=D2.call(t).slice(8,-1);switch(l){case"Array":return[zi,yl];case"Object":return[wo,yl];case"Date":return[nh,yl];case"RegExp":return[ah,yl];case"Map":return[rh,yl];case"Set":return[lh,yl];case"DataView":return[zi,l]}return l.includes("Array")?[zi,l]:l.includes("Error")?[Uv,l]:[wo,l]},so=([t,r])=>t===_o&&(r==="function"||r==="symbol"),z2=(t,r,l,u)=>{const o=(c,d)=>{const p=u.push(c)-1;return l.set(d,p),p},s=c=>{if(l.has(c))return l.get(c);let[d,p]=Ci(c);switch(d){case _o:{let y=c;switch(p){case"bigint":d=Hv,y=c.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+p);y=null;break;case"undefined":return o([Lv],c)}return o([d,y],c)}case zi:{if(p){let w=c;return p==="DataView"?w=new Uint8Array(c.buffer):p==="ArrayBuffer"&&(w=new Uint8Array(c)),o([p,[...w]],c)}const y=[],g=o([d,y],c);for(const w of c)y.push(s(w));return g}case wo:{if(p)switch(p){case"BigInt":return o([p,c.toString()],c);case"Boolean":case"Number":case"String":return o([p,c.valueOf()],c)}if(r&&"toJSON"in c)return s(c.toJSON());const y=[],g=o([d,y],c);for(const w of M2(c))(t||!so(Ci(c[w])))&&y.push([s(w),s(c[w])]);return g}case nh:return o([d,c.toISOString()],c);case ah:{const{source:y,flags:g}=c;return o([d,{source:y,flags:g}],c)}case rh:{const y=[],g=o([d,y],c);for(const[w,b]of c)(t||!(so(Ci(w))||so(Ci(b))))&&y.push([s(w),s(b)]);return g}case lh:{const y=[],g=o([d,y],c);for(const w of c)(t||!so(Ci(w)))&&y.push(s(w));return g}}const{message:m}=c;return o([d,{name:p,message:m}],c)};return s},iy=(t,{json:r,lossy:l}={})=>{const u=[];return z2(!(r||l),!!r,new Map,u)(t),u},So=typeof structuredClone=="function"?(t,r)=>r&&("json"in r||"lossy"in r)?ly(iy(t,r)):structuredClone(t):(t,r)=>ly(iy(t,r));function _2(t,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function O2(t,r){return"Back to reference "+(t+1)+(r>1?"-"+r:"")}function j2(t){const r=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",l=t.options.footnoteBackContent||_2,u=t.options.footnoteBackLabel||O2,o=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",c=t.options.footnoteLabelProperties||{className:["sr-only"]},d=[];let p=-1;for(;++p<t.footnoteOrder.length;){const m=t.footnoteById.get(t.footnoteOrder[p]);if(!m)continue;const y=t.all(m),g=String(m.identifier).toUpperCase(),w=kl(g.toLowerCase());let b=0;const E=[],z=t.footnoteCounts.get(g);for(;z!==void 0&&++b<=z;){E.length>0&&E.push({type:"text",value:" "});let L=typeof l=="string"?l:l(p,b);typeof L=="string"&&(L={type:"text",value:L}),E.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+w+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,b),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const j=y[y.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const L=j.children[j.children.length-1];L&&L.type==="text"?L.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...E)}else y.push(...E);const A={type:"element",tagName:"li",properties:{id:r+"fn-"+w},children:t.wrap(y,!0)};t.patch(m,A),d.push(A)}if(d.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...So(c),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(d,!0)},{type:"text",value:`
`}]}}const Oo=(function(t){if(t==null)return H2;if(typeof t=="function")return jo(t);if(typeof t=="object")return Array.isArray(t)?N2(t):L2(t);if(typeof t=="string")return U2(t);throw new Error("Expected function, string, or object as test")});function N2(t){const r=[];let l=-1;for(;++l<t.length;)r[l]=Oo(t[l]);return jo(u);function u(...o){let s=-1;for(;++s<r.length;)if(r[s].apply(this,o))return!0;return!1}}function L2(t){const r=t;return jo(l);function l(u){const o=u;let s;for(s in t)if(o[s]!==r[s])return!1;return!0}}function U2(t){return jo(r);function r(l){return l&&l.type===t}}function jo(t){return r;function r(l,u,o){return!!(B2(l)&&t.call(this,l,typeof u=="number"?u:void 0,o||void 0))}}function H2(){return!0}function B2(t){return t!==null&&typeof t=="object"&&"type"in t}const Bv=[],Y2=!0,Af=!1,q2="skip";function Yv(t,r,l,u){let o;typeof r=="function"&&typeof l!="function"?(u=l,l=r):o=r;const s=Oo(o),c=u?-1:1;d(t,void 0,[])();function d(p,m,y){const g=p&&typeof p=="object"?p:{};if(typeof g.type=="string"){const b=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(p.type+(b?"<"+b+">":""))+")"})}return w;function w(){let b=Bv,E,z,j;if((!r||s(p,m,y[y.length-1]||void 0))&&(b=I2(l(p,y)),b[0]===Af))return b;if("children"in p&&p.children){const A=p;if(A.children&&b[0]!==q2)for(z=(u?A.children.length:-1)+c,j=y.concat(A);z>-1&&z<A.children.length;){const L=A.children[z];if(E=d(L,z,j)(),E[0]===Af)return E;z=typeof E[1]=="number"?E[1]:z+c}}return b}}}function I2(t){return Array.isArray(t)?t:typeof t=="number"?[Y2,t]:t==null?Bv:[t]}function ih(t,r,l,u){let o,s,c;typeof r=="function"&&typeof l!="function"?(s=void 0,c=r,o=l):(s=r,c=l,o=u),Yv(t,s,d,o);function d(p,m){const y=m[m.length-1],g=y?y.children.indexOf(p):void 0;return c(p,g,y)}}const Df={}.hasOwnProperty,F2={};function G2(t,r){const l=r||F2,u=new Map,o=new Map,s=new Map,c={...R2,...l.handlers},d={all:m,applyData:X2,definitionById:u,footnoteById:o,footnoteCounts:s,footnoteOrder:[],handlers:c,one:p,options:l,patch:V2,wrap:Z2};return ih(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?u:o,w=String(y.identifier).toUpperCase();g.has(w)||g.set(w,y)}}),d;function p(y,g){const w=y.type,b=d.handlers[w];if(Df.call(d.handlers,w)&&b)return b(d,y,g);if(d.options.passThrough&&d.options.passThrough.includes(w)){if("children"in y){const{children:z,...j}=y,A=So(j);return A.children=d.all(y),A}return So(y)}return(d.options.unknownHandler||Q2)(d,y,g)}function m(y){const g=[];if("children"in y){const w=y.children;let b=-1;for(;++b<w.length;){const E=d.one(w[b],y);if(E){if(b&&w[b-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=uy(E.value)),!Array.isArray(E)&&E.type==="element")){const z=E.children[0];z&&z.type==="text"&&(z.value=uy(z.value))}Array.isArray(E)?g.push(...E):g.push(E)}}}return g}}function V2(t,r){t.position&&(r.position=Ox(t))}function X2(t,r){let l=r;if(t&&t.data){const u=t.data.hName,o=t.data.hChildren,s=t.data.hProperties;if(typeof u=="string")if(l.type==="element")l.tagName=u;else{const c="children"in l?l.children:[l];l={type:"element",tagName:u,properties:{},children:c}}l.type==="element"&&s&&Object.assign(l.properties,So(s)),"children"in l&&l.children&&o!==null&&o!==void 0&&(l.children=o)}return l}function Q2(t,r){const l=r.data||{},u="value"in r&&!(Df.call(l,"hProperties")||Df.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:t.all(r)};return t.patch(r,u),t.applyData(r,u)}function Z2(t,r){const l=[];let u=-1;for(r&&l.push({type:"text",value:`
`});++u<t.length;)u&&l.push({type:"text",value:`
`}),l.push(t[u]);return r&&t.length>0&&l.push({type:"text",value:`
`}),l}function uy(t){let r=0,l=t.charCodeAt(r);for(;l===9||l===32;)r++,l=t.charCodeAt(r);return t.slice(r)}function oy(t,r){const l=G2(t,r),u=l.one(t,void 0),o=j2(l),s=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function J2(t,r){return t&&"run"in t?async function(l,u){const o=oy(l,{file:u,...r});await t.run(o,u)}:function(l,u){return oy(l,{file:u,...t||r})}}function sy(t){if(t)throw t}var lf,cy;function P2(){if(cy)return lf;cy=1;var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},s=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var y=t.call(m,"constructor"),g=m.constructor&&m.constructor.prototype&&t.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!y&&!g)return!1;var w;for(w in m);return typeof w>"u"||t.call(m,w)},c=function(m,y){l&&y.name==="__proto__"?l(m,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):m[y.name]=y.newValue},d=function(m,y){if(y==="__proto__")if(t.call(m,y)){if(u)return u(m,y).value}else return;return m[y]};return lf=function p(){var m,y,g,w,b,E,z=arguments[0],j=1,A=arguments.length,L=!1;for(typeof z=="boolean"&&(L=z,z=arguments[1]||{},j=2),(z==null||typeof z!="object"&&typeof z!="function")&&(z={});j<A;++j)if(m=arguments[j],m!=null)for(y in m)g=d(z,y),w=d(m,y),z!==w&&(L&&w&&(s(w)||(b=o(w)))?(b?(b=!1,E=g&&o(g)?g:[]):E=g&&s(g)?g:{},c(z,{name:y,newValue:p(L,E,w)})):typeof w<"u"&&c(z,{name:y,newValue:w}));return z},lf}var K2=P2();const uf=jf(K2);function Mf(t){if(typeof t!="object"||t===null)return!1;const r=Object.getPrototypeOf(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function W2(){const t=[],r={run:l,use:u};return r;function l(...o){let s=-1;const c=o.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);d(null,...o);function d(p,...m){const y=t[++s];let g=-1;if(p){c(p);return}for(;++g<o.length;)(m[g]===null||m[g]===void 0)&&(m[g]=o[g]);o=m,y?$2(y,d)(...m):c(null,...m)}}function u(o){if(typeof o!="function")throw new TypeError("Expected `middelware` to be a function, not "+o);return t.push(o),r}}function $2(t,r){let l;return u;function u(...c){const d=t.length>c.length;let p;d&&c.push(o);try{p=t.apply(this,c)}catch(m){const y=m;if(d&&l)throw y;return o(y)}d||(p&&p.then&&typeof p.then=="function"?p.then(s,o):p instanceof Error?o(p):s(p))}function o(c,...d){l||(l=!0,r(c,...d))}function s(c){o(null,c)}}const Jn={basename:eC,dirname:tC,extname:nC,join:aC,sep:"/"};function eC(t,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');Gi(t);let l=0,u=-1,o=t.length,s;if(r===void 0||r.length===0||r.length>t.length){for(;o--;)if(t.codePointAt(o)===47){if(s){l=o+1;break}}else u<0&&(s=!0,u=o+1);return u<0?"":t.slice(l,u)}if(r===t)return"";let c=-1,d=r.length-1;for(;o--;)if(t.codePointAt(o)===47){if(s){l=o+1;break}}else c<0&&(s=!0,c=o+1),d>-1&&(t.codePointAt(o)===r.codePointAt(d--)?d<0&&(u=o):(d=-1,u=c));return l===u?u=c:u<0&&(u=t.length),t.slice(l,u)}function tC(t){if(Gi(t),t.length===0)return".";let r=-1,l=t.length,u;for(;--l;)if(t.codePointAt(l)===47){if(u){r=l;break}}else u||(u=!0);return r<0?t.codePointAt(0)===47?"/":".":r===1&&t.codePointAt(0)===47?"//":t.slice(0,r)}function nC(t){Gi(t);let r=t.length,l=-1,u=0,o=-1,s=0,c;for(;r--;){const d=t.codePointAt(r);if(d===47){if(c){u=r+1;break}continue}l<0&&(c=!0,l=r+1),d===46?o<0?o=r:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||l<0||s===0||s===1&&o===l-1&&o===u+1?"":t.slice(o,l)}function aC(...t){let r=-1,l;for(;++r<t.length;)Gi(t[r]),t[r]&&(l=l===void 0?t[r]:l+"/"+t[r]);return l===void 0?".":rC(l)}function rC(t){Gi(t);const r=t.codePointAt(0)===47;let l=lC(t,!r);return l.length===0&&!r&&(l="."),l.length>0&&t.codePointAt(t.length-1)===47&&(l+="/"),r?"/"+l:l}function lC(t,r){let l="",u=0,o=-1,s=0,c=-1,d,p;for(;++c<=t.length;){if(c<t.length)d=t.codePointAt(c);else{if(d===47)break;d=47}if(d===47){if(!(o===c-1||s===1))if(o!==c-1&&s===2){if(l.length<2||u!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(p=l.lastIndexOf("/"),p!==l.length-1){p<0?(l="",u=0):(l=l.slice(0,p),u=l.length-1-l.lastIndexOf("/")),o=c,s=0;continue}}else if(l.length>0){l="",u=0,o=c,s=0;continue}}r&&(l=l.length>0?l+"/..":"..",u=2)}else l.length>0?l+="/"+t.slice(o+1,c):l=t.slice(o+1,c),u=c-o-1;o=c,s=0}else d===46&&s>-1?s++:s=-1}return l}function Gi(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const iC={cwd:uC};function uC(){return"/"}function zf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function oC(t){if(typeof t=="string")t=new URL(t);else if(!zf(t)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(t.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return sC(t)}function sC(t){if(t.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=t.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const u=r.codePointAt(l+2);if(u===70||u===102){const o=new TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(r)}const of=["history","path","basename","stem","extname","dirname"];class qv{constructor(r){let l;r?zf(r)?l={path:r}:typeof r=="string"||cC(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":iC.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<of.length;){const s=of[u];s in l&&l[s]!==void 0&&l[s]!==null&&(this[s]=s==="history"?[...l[s]]:l[s])}let o;for(o in l)of.includes(o)||(this[o]=l[o])}get basename(){return typeof this.path=="string"?Jn.basename(this.path):void 0}set basename(r){cf(r,"basename"),sf(r,"basename"),this.path=Jn.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?Jn.dirname(this.path):void 0}set dirname(r){fy(this.basename,"dirname"),this.path=Jn.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?Jn.extname(this.path):void 0}set extname(r){if(sf(r,"extname"),fy(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Jn.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){zf(r)&&(r=oC(r)),cf(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?Jn.basename(this.path,this.extname):void 0}set stem(r){cf(r,"stem"),sf(r,"stem"),this.path=Jn.join(this.dirname||"",r+(this.extname||""))}fail(r,l,u){const o=this.message(r,l,u);throw o.fatal=!0,o}info(r,l,u){const o=this.message(r,l,u);return o.fatal=void 0,o}message(r,l,u){const o=new Gt(r,l,u);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function sf(t,r){if(t&&t.includes(Jn.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+Jn.sep+"`")}function cf(t,r){if(!t)throw new Error("`"+r+"` cannot be empty")}function fy(t,r){if(!t)throw new Error("Setting `"+r+"` requires `path` to be set too")}function cC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const fC=(function(t){const u=this.constructor.prototype,o=u[t],s=function(){return o.apply(s,arguments)};return Object.setPrototypeOf(s,u),s}),hC={}.hasOwnProperty;class uh extends fC{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=W2()}copy(){const r=new uh;let l=-1;for(;++l<this.attachers.length;){const u=this.attachers[l];r.use(...u)}return r.data(uf(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(df("data",this.frozen),this.namespace[r]=l,this):hC.call(this.namespace,r)&&this.namespace[r]||void 0:r?(df("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const o=l.call(r,...u);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=co(r),u=this.parser||this.Parser;return ff("parse",u),u(String(l),l)}process(r,l){const u=this;return this.freeze(),ff("process",this.parser||this.Parser),hf("process",this.compiler||this.Compiler),l?o(void 0,l):new Promise(o);function o(s,c){const d=co(r),p=u.parse(d);u.run(p,d,function(y,g,w){if(y||!g||!w)return m(y);const b=g,E=u.stringify(b,w);pC(E)?w.value=E:w.result=E,m(y,w)});function m(y,g){y||!g?c(y):s?s(g):l(void 0,g)}}}processSync(r){let l=!1,u;return this.freeze(),ff("processSync",this.parser||this.Parser),hf("processSync",this.compiler||this.Compiler),this.process(r,o),dy("processSync","process",l),u;function o(s,c){l=!0,sy(s),u=c}}run(r,l,u){hy(r),this.freeze();const o=this.transformers;return!u&&typeof l=="function"&&(u=l,l=void 0),u?s(void 0,u):new Promise(s);function s(c,d){const p=co(l);o.run(r,p,m);function m(y,g,w){const b=g||r;y?d(y):c?c(b):u(void 0,b,w)}}}runSync(r,l){let u=!1,o;return this.run(r,l,s),dy("runSync","run",u),o;function s(c,d){sy(c),o=d,u=!0}}stringify(r,l){this.freeze();const u=co(l),o=this.compiler||this.Compiler;return hf("stringify",o),hy(r),o(r,u)}use(r,...l){const u=this.attachers,o=this.namespace;if(df("use",this.frozen),r!=null)if(typeof r=="function")p(r,l);else if(typeof r=="object")Array.isArray(r)?d(r):c(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function s(m){if(typeof m=="function")p(m,[]);else if(typeof m=="object")if(Array.isArray(m)){const[y,...g]=m;p(y,g)}else c(m);else throw new TypeError("Expected usable value, not `"+m+"`")}function c(m){if(!("plugins"in m)&&!("settings"in m))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");d(m.plugins),m.settings&&(o.settings=uf(!0,o.settings,m.settings))}function d(m){let y=-1;if(m!=null)if(Array.isArray(m))for(;++y<m.length;){const g=m[y];s(g)}else throw new TypeError("Expected a list of plugins, not `"+m+"`")}function p(m,y){let g=-1,w=-1;for(;++g<u.length;)if(u[g][0]===m){w=g;break}if(w===-1)u.push([m,...y]);else if(y.length>0){let[b,...E]=y;const z=u[w][1];Mf(z)&&Mf(b)&&(b=uf(!0,z,b)),u[w]=[m,b,...E]}}}}const dC=new uh().freeze();function ff(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function hf(t,r){if(typeof r!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function df(t,r){if(r)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hy(t){if(!Mf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function dy(t,r,l){if(!l)throw new Error("`"+t+"` finished async. Use `"+r+"` instead")}function co(t){return mC(t)?t:new qv(t)}function mC(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function pC(t){return typeof t=="string"||gC(t)}function gC(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const yC="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",my=[],py={allowDangerousHtml:!0},vC=/^(https?|ircs?|mailto|xmpp)$/i,bC=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function wC(t){const r=SC(t),l=xC(t);return EC(r.runSync(r.parse(l),l),t)}function SC(t){const r=t.rehypePlugins||my,l=t.remarkPlugins||my,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...py}:py;return dC().use(t2).use(l).use(J2,u).use(r)}function xC(t){const r=t.children||"",l=new qv;return typeof r=="string"&&(l.value=r),l}function EC(t,r){const l=r.allowedElements,u=r.allowElement,o=r.components,s=r.disallowedElements,c=r.skipHtml,d=r.unwrapDisallowed,p=r.urlTransform||TC;for(const y of bC)Object.hasOwn(r,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+yC+y.id,void 0);return ih(t,m),Hx(t,{Fragment:se.Fragment,components:o,ignoreInvalidStyle:!0,jsx:se.jsx,jsxs:se.jsxs,passKeys:!0,passNode:!0});function m(y,g,w){if(y.type==="raw"&&w&&typeof g=="number")return c?w.children.splice(g,1):w.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let b;for(b in nf)if(Object.hasOwn(nf,b)&&Object.hasOwn(y.properties,b)){const E=y.properties[b],z=nf[b];(z===null||z.includes(y.tagName))&&(y.properties[b]=p(String(E||""),b,y))}}if(y.type==="element"){let b=l?!l.includes(y.tagName):s?s.includes(y.tagName):!1;if(!b&&u&&typeof g=="number"&&(b=!u(y,g,w)),b&&w&&typeof g=="number")return d&&y.children?w.children.splice(g,1,...y.children):w.children.splice(g,1),g}}}function TC(t){const r=t.indexOf(":"),l=t.indexOf("?"),u=t.indexOf("#"),o=t.indexOf("/");return r===-1||o!==-1&&r>o||l!==-1&&r>l||u!==-1&&r>u||vC.test(t.slice(0,r))?t:""}function gy(t,r){const l=String(t);if(typeof r!="string")throw new TypeError("Expected character");let u=0,o=l.indexOf(r);for(;o!==-1;)u++,o=l.indexOf(r,o+r.length);return u}function CC(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function kC(t,r,l){const o=Oo((l||{}).ignore||[]),s=RC(r);let c=-1;for(;++c<s.length;)Yv(t,"text",d);function d(m,y){let g=-1,w;for(;++g<y.length;){const b=y[g],E=w?w.children:void 0;if(o(b,E?E.indexOf(b):void 0,w))return;w=b}if(w)return p(m,y)}function p(m,y){const g=y[y.length-1],w=s[c][0],b=s[c][1];let E=0;const j=g.children.indexOf(m);let A=!1,L=[];w.lastIndex=0;let H=w.exec(m.value);for(;H;){const fe=H.index,oe={index:H.index,input:H.input,stack:[...y,m]};let q=b(...H,oe);if(typeof q=="string"&&(q=q.length>0?{type:"text",value:q}:void 0),q===!1?w.lastIndex=fe+1:(E!==fe&&L.push({type:"text",value:m.value.slice(E,fe)}),Array.isArray(q)?L.push(...q):q&&L.push(q),E=fe+H[0].length,A=!0),!w.global)break;H=w.exec(m.value)}return A?(E<m.value.length&&L.push({type:"text",value:m.value.slice(E)}),g.children.splice(j,1,...L)):L=[m],j+L.length}}function RC(t){const r=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!t[0]||Array.isArray(t[0])?t:[t];let u=-1;for(;++u<l.length;){const o=l[u];r.push([AC(o[0]),DC(o[1])])}return r}function AC(t){return typeof t=="string"?new RegExp(CC(t),"g"):t}function DC(t){return typeof t=="function"?t:function(){return t}}const mf="phrasing",pf=["autolink","link","image","label"];function MC(){return{transforms:[UC],enter:{literalAutolink:_C,literalAutolinkEmail:gf,literalAutolinkHttp:gf,literalAutolinkWww:gf},exit:{literalAutolink:LC,literalAutolinkEmail:NC,literalAutolinkHttp:OC,literalAutolinkWww:jC}}}function zC(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:mf,notInConstruct:pf},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:mf,notInConstruct:pf},{character:":",before:"[ps]",after:"\\/",inConstruct:mf,notInConstruct:pf}]}}function _C(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function gf(t){this.config.enter.autolinkProtocol.call(this,t)}function OC(t){this.config.exit.autolinkProtocol.call(this,t)}function jC(t){this.config.exit.data.call(this,t);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(t)}function NC(t){this.config.exit.autolinkEmail.call(this,t)}function LC(t){this.exit(t)}function UC(t){kC(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,HC],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),BC]],{ignore:["link","linkReference"]})}function HC(t,r,l,u,o){let s="";if(!Iv(o)||(/^w/i.test(r)&&(l=r+l,r="",s="http://"),!YC(l)))return!1;const c=qC(l+u);if(!c[0])return!1;const d={type:"link",title:null,url:s+r+c[0],children:[{type:"text",value:r+c[0]}]};return c[1]?[d,{type:"text",value:c[1]}]:d}function BC(t,r,l,u){return!Iv(u,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+l,children:[{type:"text",value:r+"@"+l}]}}function YC(t){const r=t.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function qC(t){const r=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!r)return[t,void 0];t=t.slice(0,r.index);let l=r[0],u=l.indexOf(")");const o=gy(t,"(");let s=gy(t,")");for(;u!==-1&&o>s;)t+=l.slice(0,u+1),l=l.slice(u+1),u=l.indexOf(")"),s++;return[t,l]}function Iv(t,r){const l=t.input.charCodeAt(t.index-1);return(t.index===0||_r(l)||Mo(l))&&(!r||l!==47)}Fv.peek=PC;function IC(){this.buffer()}function FC(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function GC(){this.buffer()}function VC(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function XC(t){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=Fn(this.sliceSerialize(t)).toLowerCase(),l.label=r}function QC(t){this.exit(t)}function ZC(t){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=Fn(this.sliceSerialize(t)).toLowerCase(),l.label=r}function JC(t){this.exit(t)}function PC(){return"["}function Fv(t,r,l,u){const o=l.createTracker(u);let s=o.move("[^");const c=l.enter("footnoteReference"),d=l.enter("reference");return s+=o.move(l.safe(l.associationId(t),{after:"]",before:s})),d(),c(),s+=o.move("]"),s}function KC(){return{enter:{gfmFootnoteCallString:IC,gfmFootnoteCall:FC,gfmFootnoteDefinitionLabelString:GC,gfmFootnoteDefinition:VC},exit:{gfmFootnoteCallString:XC,gfmFootnoteCall:QC,gfmFootnoteDefinitionLabelString:ZC,gfmFootnoteDefinition:JC}}}function WC(t){let r=!1;return t&&t.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:l,footnoteReference:Fv},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(u,o,s,c){const d=s.createTracker(c);let p=d.move("[^");const m=s.enter("footnoteDefinition"),y=s.enter("label");return p+=d.move(s.safe(s.associationId(u),{before:p,after:"]"})),y(),p+=d.move("]:"),u.children&&u.children.length>0&&(d.shift(4),p+=d.move((r?`
`:" ")+s.indentLines(s.containerFlow(u,d.current()),r?Gv:$C))),m(),p}}function $C(t,r,l){return r===0?t:Gv(t,r,l)}function Gv(t,r,l){return(l?"":"    ")+t}const ek=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Vv.peek=lk;function tk(){return{canContainEols:["delete"],enter:{strikethrough:ak},exit:{strikethrough:rk}}}function nk(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:ek}],handlers:{delete:Vv}}}function ak(t){this.enter({type:"delete",children:[]},t)}function rk(t){this.exit(t)}function Vv(t,r,l,u){const o=l.createTracker(u),s=l.enter("strikethrough");let c=o.move("~~");return c+=l.containerPhrasing(t,{...o.current(),before:c,after:"~"}),c+=o.move("~~"),s(),c}function lk(){return"~"}function ik(t){return t.length}function uk(t,r){const l=r||{},u=(l.align||[]).concat(),o=l.stringLength||ik,s=[],c=[],d=[],p=[];let m=0,y=-1;for(;++y<t.length;){const z=[],j=[];let A=-1;for(t[y].length>m&&(m=t[y].length);++A<t[y].length;){const L=ok(t[y][A]);if(l.alignDelimiters!==!1){const H=o(L);j[A]=H,(p[A]===void 0||H>p[A])&&(p[A]=H)}z.push(L)}c[y]=z,d[y]=j}let g=-1;if(typeof u=="object"&&"length"in u)for(;++g<m;)s[g]=yy(u[g]);else{const z=yy(u);for(;++g<m;)s[g]=z}g=-1;const w=[],b=[];for(;++g<m;){const z=s[g];let j="",A="";z===99?(j=":",A=":"):z===108?j=":":z===114&&(A=":");let L=l.alignDelimiters===!1?1:Math.max(1,p[g]-j.length-A.length);const H=j+"-".repeat(L)+A;l.alignDelimiters!==!1&&(L=j.length+L+A.length,L>p[g]&&(p[g]=L),b[g]=L),w[g]=H}c.splice(1,0,w),d.splice(1,0,b),y=-1;const E=[];for(;++y<c.length;){const z=c[y],j=d[y];g=-1;const A=[];for(;++g<m;){const L=z[g]||"";let H="",fe="";if(l.alignDelimiters!==!1){const oe=p[g]-(j[g]||0),q=s[g];q===114?H=" ".repeat(oe):q===99?oe%2?(H=" ".repeat(oe/2+.5),fe=" ".repeat(oe/2-.5)):(H=" ".repeat(oe/2),fe=H):fe=" ".repeat(oe)}l.delimiterStart!==!1&&!g&&A.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&L==="")&&(l.delimiterStart!==!1||g)&&A.push(" "),l.alignDelimiters!==!1&&A.push(H),A.push(L),l.alignDelimiters!==!1&&A.push(fe),l.padding!==!1&&A.push(" "),(l.delimiterEnd!==!1||g!==m-1)&&A.push("|")}E.push(l.delimiterEnd===!1?A.join("").replace(/ +$/,""):A.join(""))}return E.join(`
`)}function ok(t){return t==null?"":String(t)}function yy(t){const r=typeof t=="string"?t.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function sk(t,r,l,u){const o=l.enter("blockquote"),s=l.createTracker(u);s.move("> "),s.shift(2);const c=l.indentLines(l.containerFlow(t,s.current()),ck);return o(),c}function ck(t,r,l){return">"+(l?"":" ")+t}function fk(t,r){return vy(t,r.inConstruct,!0)&&!vy(t,r.notInConstruct,!1)}function vy(t,r,l){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return l;let u=-1;for(;++u<r.length;)if(t.includes(r[u]))return!0;return!1}function by(t,r,l,u){let o=-1;for(;++o<l.unsafe.length;)if(l.unsafe[o].character===`
`&&fk(l.stack,l.unsafe[o]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function hk(t,r){const l=String(t);let u=l.indexOf(r),o=u,s=0,c=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===o?++s>c&&(c=s):s=1,o=u+r.length,u=l.indexOf(r,o);return c}function dk(t,r){return!!(r.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function mk(t){const r=t.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function pk(t,r,l,u){const o=mk(l),s=t.value||"",c=o==="`"?"GraveAccent":"Tilde";if(dk(t,l)){const g=l.enter("codeIndented"),w=l.indentLines(s,gk);return g(),w}const d=l.createTracker(u),p=o.repeat(Math.max(hk(s,o)+1,3)),m=l.enter("codeFenced");let y=d.move(p);if(t.lang){const g=l.enter(`codeFencedLang${c}`);y+=d.move(l.safe(t.lang,{before:y,after:" ",encode:["`"],...d.current()})),g()}if(t.lang&&t.meta){const g=l.enter(`codeFencedMeta${c}`);y+=d.move(" "),y+=d.move(l.safe(t.meta,{before:y,after:`
`,encode:["`"],...d.current()})),g()}return y+=d.move(`
`),s&&(y+=d.move(s+`
`)),y+=d.move(p),m(),y}function gk(t,r,l){return(l?"":"    ")+t}function oh(t){const r=t.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function yk(t,r,l,u){const o=oh(l),s=o==='"'?"Quote":"Apostrophe",c=l.enter("definition");let d=l.enter("label");const p=l.createTracker(u);let m=p.move("[");return m+=p.move(l.safe(l.associationId(t),{before:m,after:"]",...p.current()})),m+=p.move("]: "),d(),!t.url||/[\0- \u007F]/.test(t.url)?(d=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(t.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(d=l.enter("destinationRaw"),m+=p.move(l.safe(t.url,{before:m,after:t.title?" ":`
`,...p.current()}))),d(),t.title&&(d=l.enter(`title${s}`),m+=p.move(" "+o),m+=p.move(l.safe(t.title,{before:m,after:o,...p.current()})),m+=p.move(o),d()),c(),m}function vk(t){const r=t.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Li(t){return"&#x"+t.toString(16).toUpperCase()+";"}function xo(t,r,l){const u=Tl(t),o=Tl(r);return u===void 0?o===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Xv.peek=bk;function Xv(t,r,l,u){const o=vk(l),s=l.enter("emphasis"),c=l.createTracker(u),d=c.move(o);let p=c.move(l.containerPhrasing(t,{after:o,before:d,...c.current()}));const m=p.charCodeAt(0),y=xo(u.before.charCodeAt(u.before.length-1),m,o);y.inside&&(p=Li(m)+p.slice(1));const g=p.charCodeAt(p.length-1),w=xo(u.after.charCodeAt(0),g,o);w.inside&&(p=p.slice(0,-1)+Li(g));const b=c.move(o);return s(),l.attentionEncodeSurroundingInfo={after:w.outside,before:y.outside},d+p+b}function bk(t,r,l){return l.options.emphasis||"*"}function wk(t,r){let l=!1;return ih(t,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return l=!0,Af}),!!((!t.depth||t.depth<3)&&$f(t)&&(r.options.setext||l))}function Sk(t,r,l,u){const o=Math.max(Math.min(6,t.depth||1),1),s=l.createTracker(u);if(wk(t,l)){const y=l.enter("headingSetext"),g=l.enter("phrasing"),w=l.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return g(),y(),w+`
`+(o===1?"=":"-").repeat(w.length-(Math.max(w.lastIndexOf("\r"),w.lastIndexOf(`
`))+1))}const c="#".repeat(o),d=l.enter("headingAtx"),p=l.enter("phrasing");s.move(c+" ");let m=l.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(m)&&(m=Li(m.charCodeAt(0))+m.slice(1)),m=m?c+" "+m:c,l.options.closeAtx&&(m+=" "+c),p(),d(),m}Qv.peek=xk;function Qv(t){return t.value||""}function xk(){return"<"}Zv.peek=Ek;function Zv(t,r,l,u){const o=oh(l),s=o==='"'?"Quote":"Apostrophe",c=l.enter("image");let d=l.enter("label");const p=l.createTracker(u);let m=p.move("![");return m+=p.move(l.safe(t.alt,{before:m,after:"]",...p.current()})),m+=p.move("]("),d(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(d=l.enter("destinationLiteral"),m+=p.move("<"),m+=p.move(l.safe(t.url,{before:m,after:">",...p.current()})),m+=p.move(">")):(d=l.enter("destinationRaw"),m+=p.move(l.safe(t.url,{before:m,after:t.title?" ":")",...p.current()}))),d(),t.title&&(d=l.enter(`title${s}`),m+=p.move(" "+o),m+=p.move(l.safe(t.title,{before:m,after:o,...p.current()})),m+=p.move(o),d()),m+=p.move(")"),c(),m}function Ek(){return"!"}Jv.peek=Tk;function Jv(t,r,l,u){const o=t.referenceType,s=l.enter("imageReference");let c=l.enter("label");const d=l.createTracker(u);let p=d.move("![");const m=l.safe(t.alt,{before:p,after:"]",...d.current()});p+=d.move(m+"]["),c();const y=l.stack;l.stack=[],c=l.enter("reference");const g=l.safe(l.associationId(t),{before:p,after:"]",...d.current()});return c(),l.stack=y,s(),o==="full"||!m||m!==g?p+=d.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function Tk(){return"!"}Pv.peek=Ck;function Pv(t,r,l){let u=t.value||"",o="`",s=-1;for(;new RegExp("(^|[^`])"+o+"([^`]|$)").test(u);)o+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++s<l.unsafe.length;){const c=l.unsafe[s],d=l.compilePattern(c);let p;if(c.atBreak)for(;p=d.exec(u);){let m=p.index;u.charCodeAt(m)===10&&u.charCodeAt(m-1)===13&&m--,u=u.slice(0,m)+" "+u.slice(p.index+1)}}return o+u+o}function Ck(){return"`"}function Kv(t,r){const l=$f(t);return!!(!r.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(l===t.url||"mailto:"+l===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}Wv.peek=kk;function Wv(t,r,l,u){const o=oh(l),s=o==='"'?"Quote":"Apostrophe",c=l.createTracker(u);let d,p;if(Kv(t,l)){const y=l.stack;l.stack=[],d=l.enter("autolink");let g=c.move("<");return g+=c.move(l.containerPhrasing(t,{before:g,after:">",...c.current()})),g+=c.move(">"),d(),l.stack=y,g}d=l.enter("link"),p=l.enter("label");let m=c.move("[");return m+=c.move(l.containerPhrasing(t,{before:m,after:"](",...c.current()})),m+=c.move("]("),p(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(p=l.enter("destinationLiteral"),m+=c.move("<"),m+=c.move(l.safe(t.url,{before:m,after:">",...c.current()})),m+=c.move(">")):(p=l.enter("destinationRaw"),m+=c.move(l.safe(t.url,{before:m,after:t.title?" ":")",...c.current()}))),p(),t.title&&(p=l.enter(`title${s}`),m+=c.move(" "+o),m+=c.move(l.safe(t.title,{before:m,after:o,...c.current()})),m+=c.move(o),p()),m+=c.move(")"),d(),m}function kk(t,r,l){return Kv(t,l)?"<":"["}$v.peek=Rk;function $v(t,r,l,u){const o=t.referenceType,s=l.enter("linkReference");let c=l.enter("label");const d=l.createTracker(u);let p=d.move("[");const m=l.containerPhrasing(t,{before:p,after:"]",...d.current()});p+=d.move(m+"]["),c();const y=l.stack;l.stack=[],c=l.enter("reference");const g=l.safe(l.associationId(t),{before:p,after:"]",...d.current()});return c(),l.stack=y,s(),o==="full"||!m||m!==g?p+=d.move(g+"]"):o==="shortcut"?p=p.slice(0,-1):p+=d.move("]"),p}function Rk(){return"["}function sh(t){const r=t.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function Ak(t){const r=sh(t),l=t.options.bulletOther;if(!l)return r==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+l+"`) to be different");return l}function Dk(t){const r=t.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function eb(t){const r=t.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function Mk(t,r,l,u){const o=l.enter("list"),s=l.bulletCurrent;let c=t.ordered?Dk(l):sh(l);const d=t.ordered?c==="."?")":".":Ak(l);let p=r&&l.bulletLastUsed?c===l.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(p=!0),eb(l)===c&&y){let g=-1;for(;++g<t.children.length;){const w=t.children[g];if(w&&w.type==="listItem"&&w.children&&w.children[0]&&w.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(c=d),l.bulletCurrent=c;const m=l.containerFlow(t,u);return l.bulletLastUsed=c,l.bulletCurrent=s,o(),m}function zk(t){const r=t.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function _k(t,r,l,u){const o=zk(l);let s=l.bulletCurrent||sh(l);r&&r.type==="list"&&r.ordered&&(s=(typeof r.start=="number"&&r.start>-1?r.start:1)+(l.options.incrementListMarker===!1?0:r.children.indexOf(t))+s);let c=s.length+1;(o==="tab"||o==="mixed"&&(r&&r.type==="list"&&r.spread||t.spread))&&(c=Math.ceil(c/4)*4);const d=l.createTracker(u);d.move(s+" ".repeat(c-s.length)),d.shift(c);const p=l.enter("listItem"),m=l.indentLines(l.containerFlow(t,d.current()),y);return p(),m;function y(g,w,b){return w?(b?"":" ".repeat(c))+g:(b?s:s+" ".repeat(c-s.length))+g}}function Ok(t,r,l,u){const o=l.enter("paragraph"),s=l.enter("phrasing"),c=l.containerPhrasing(t,u);return s(),o(),c}const jk=Oo(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Nk(t,r,l,u){return(t.children.some(function(c){return jk(c)})?l.containerPhrasing:l.containerFlow).call(l,t,u)}function Lk(t){const r=t.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}tb.peek=Uk;function tb(t,r,l,u){const o=Lk(l),s=l.enter("strong"),c=l.createTracker(u),d=c.move(o+o);let p=c.move(l.containerPhrasing(t,{after:o,before:d,...c.current()}));const m=p.charCodeAt(0),y=xo(u.before.charCodeAt(u.before.length-1),m,o);y.inside&&(p=Li(m)+p.slice(1));const g=p.charCodeAt(p.length-1),w=xo(u.after.charCodeAt(0),g,o);w.inside&&(p=p.slice(0,-1)+Li(g));const b=c.move(o+o);return s(),l.attentionEncodeSurroundingInfo={after:w.outside,before:y.outside},d+p+b}function Uk(t,r,l){return l.options.strong||"*"}function Hk(t,r,l,u){return l.safe(t.value,u)}function Bk(t){const r=t.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function Yk(t,r,l){const u=(eb(l)+(l.options.ruleSpaces?" ":"")).repeat(Bk(l));return l.options.ruleSpaces?u.slice(0,-1):u}const nb={blockquote:sk,break:by,code:pk,definition:yk,emphasis:Xv,hardBreak:by,heading:Sk,html:Qv,image:Zv,imageReference:Jv,inlineCode:Pv,link:Wv,linkReference:$v,list:Mk,listItem:_k,paragraph:Ok,root:Nk,strong:tb,text:Hk,thematicBreak:Yk};function qk(){return{enter:{table:Ik,tableData:wy,tableHeader:wy,tableRow:Gk},exit:{codeText:Vk,table:Fk,tableData:yf,tableHeader:yf,tableRow:yf}}}function Ik(t){const r=t._align;this.enter({type:"table",align:r.map(function(l){return l==="none"?null:l}),children:[]},t),this.data.inTable=!0}function Fk(t){this.exit(t),this.data.inTable=void 0}function Gk(t){this.enter({type:"tableRow",children:[]},t)}function yf(t){this.exit(t)}function wy(t){this.enter({type:"tableCell",children:[]},t)}function Vk(t){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,Xk));const l=this.stack[this.stack.length-1];l.type,l.value=r,this.exit(t)}function Xk(t,r){return r==="|"?r:t}function Qk(t){const r=t||{},l=r.tableCellPadding,u=r.tablePipeAlign,o=r.stringLength,s=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:w,table:c,tableCell:p,tableRow:d}};function c(b,E,z,j){return m(y(b,z,j),b.align)}function d(b,E,z,j){const A=g(b,z,j),L=m([A]);return L.slice(0,L.indexOf(`
`))}function p(b,E,z,j){const A=z.enter("tableCell"),L=z.enter("phrasing"),H=z.containerPhrasing(b,{...j,before:s,after:s});return L(),A(),H}function m(b,E){return uk(b,{align:E,alignDelimiters:u,padding:l,stringLength:o})}function y(b,E,z){const j=b.children;let A=-1;const L=[],H=E.enter("table");for(;++A<j.length;)L[A]=g(j[A],E,z);return H(),L}function g(b,E,z){const j=b.children;let A=-1;const L=[],H=E.enter("tableRow");for(;++A<j.length;)L[A]=p(j[A],b,E,z);return H(),L}function w(b,E,z){let j=nb.inlineCode(b,E,z);return z.stack.includes("tableCell")&&(j=j.replace(/\|/g,"\\$&")),j}}function Zk(){return{exit:{taskListCheckValueChecked:Sy,taskListCheckValueUnchecked:Sy,paragraph:Pk}}}function Jk(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Kk}}}function Sy(t){const r=this.stack[this.stack.length-2];r.type,r.checked=t.type==="taskListCheckValueChecked"}function Pk(t){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const u=l.children[0];if(u&&u.type==="text"){const o=r.children;let s=-1,c;for(;++s<o.length;){const d=o[s];if(d.type==="paragraph"){c=d;break}}c===l&&(u.value=u.value.slice(1),u.value.length===0?l.children.shift():l.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,l.position.start=Object.assign({},u.position.start)))}}this.exit(t)}function Kk(t,r,l,u){const o=t.children[0],s=typeof t.checked=="boolean"&&o&&o.type==="paragraph",c="["+(t.checked?"x":" ")+"] ",d=l.createTracker(u);s&&d.move(c);let p=nb.listItem(t,r,l,{...u,...d.current()});return s&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,m)),p;function m(y){return y+c}}function Wk(){return[MC(),KC(),tk(),qk(),Zk()]}function $k(t){return{extensions:[zC(),WC(t),nk(),Qk(t),Jk()]}}const eR={tokenize:iR,partial:!0},ab={tokenize:uR,partial:!0},rb={tokenize:oR,partial:!0},lb={tokenize:sR,partial:!0},tR={tokenize:cR,partial:!0},ib={name:"wwwAutolink",tokenize:rR,previous:ob},ub={name:"protocolAutolink",tokenize:lR,previous:sb},Ea={name:"emailAutolink",tokenize:aR,previous:cb},Wn={};function nR(){return{text:Wn}}let Mr=48;for(;Mr<123;)Wn[Mr]=Ea,Mr++,Mr===58?Mr=65:Mr===91&&(Mr=97);Wn[43]=Ea;Wn[45]=Ea;Wn[46]=Ea;Wn[95]=Ea;Wn[72]=[Ea,ub];Wn[104]=[Ea,ub];Wn[87]=[Ea,ib];Wn[119]=[Ea,ib];function aR(t,r,l){const u=this;let o,s;return c;function c(g){return!_f(g)||!cb.call(u,u.previous)||ch(u.events)?l(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),d(g))}function d(g){return _f(g)?(t.consume(g),d):g===64?(t.consume(g),p):l(g)}function p(g){return g===46?t.check(tR,y,m)(g):g===45||g===95||Ft(g)?(s=!0,t.consume(g),p):y(g)}function m(g){return t.consume(g),o=!0,p}function y(g){return s&&o&&Qt(u.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),r(g)):l(g)}}function rR(t,r,l){const u=this;return o;function o(c){return c!==87&&c!==119||!ob.call(u,u.previous)||ch(u.events)?l(c):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(eR,t.attempt(ab,t.attempt(rb,s),l),l)(c))}function s(c){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),r(c)}}function lR(t,r,l){const u=this;let o="",s=!1;return c;function c(g){return(g===72||g===104)&&sb.call(u,u.previous)&&!ch(u.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),o+=String.fromCodePoint(g),t.consume(g),d):l(g)}function d(g){if(Qt(g)&&o.length<5)return o+=String.fromCodePoint(g),t.consume(g),d;if(g===58){const w=o.toLowerCase();if(w==="http"||w==="https")return t.consume(g),p}return l(g)}function p(g){return g===47?(t.consume(g),s?m:(s=!0,p)):l(g)}function m(g){return g===null||bo(g)||st(g)||_r(g)||Mo(g)?l(g):t.attempt(ab,t.attempt(rb,y),l)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),r(g)}}function iR(t,r,l){let u=0;return o;function o(c){return(c===87||c===119)&&u<3?(u++,t.consume(c),o):c===46&&u===3?(t.consume(c),s):l(c)}function s(c){return c===null?l(c):r(c)}}function uR(t,r,l){let u,o,s;return c;function c(m){return m===46||m===95?t.check(lb,p,d)(m):m===null||st(m)||_r(m)||m!==45&&Mo(m)?p(m):(s=!0,t.consume(m),c)}function d(m){return m===95?u=!0:(o=u,u=void 0),t.consume(m),c}function p(m){return o||u||!s?l(m):r(m)}}function oR(t,r){let l=0,u=0;return o;function o(c){return c===40?(l++,t.consume(c),o):c===41&&u<l?s(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?t.check(lb,r,s)(c):c===null||st(c)||_r(c)?r(c):(t.consume(c),o)}function s(c){return c===41&&u++,t.consume(c),o}}function sR(t,r,l){return u;function u(d){return d===33||d===34||d===39||d===41||d===42||d===44||d===46||d===58||d===59||d===63||d===95||d===126?(t.consume(d),u):d===38?(t.consume(d),s):d===93?(t.consume(d),o):d===60||d===null||st(d)||_r(d)?r(d):l(d)}function o(d){return d===null||d===40||d===91||st(d)||_r(d)?r(d):u(d)}function s(d){return Qt(d)?c(d):l(d)}function c(d){return d===59?(t.consume(d),u):Qt(d)?(t.consume(d),c):l(d)}}function cR(t,r,l){return u;function u(s){return t.consume(s),o}function o(s){return Ft(s)?l(s):r(s)}}function ob(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||st(t)}function sb(t){return!Qt(t)}function cb(t){return!(t===47||_f(t))}function _f(t){return t===43||t===45||t===46||t===95||Ft(t)}function ch(t){let r=t.length,l=!1;for(;r--;){const u=t[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return t.length>0&&!l&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const fR={tokenize:bR,partial:!0};function hR(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:gR,continuation:{tokenize:yR},exit:vR}},text:{91:{name:"gfmFootnoteCall",tokenize:pR},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:dR,resolveTo:mR}}}}function dR(t,r,l){const u=this;let o=u.events.length;const s=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let c;for(;o--;){const p=u.events[o][1];if(p.type==="labelImage"){c=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return d;function d(p){if(!c||!c._balanced)return l(p);const m=Fn(u.sliceSerialize({start:c.end,end:u.now()}));return m.codePointAt(0)!==94||!s.includes(m.slice(1))?l(p):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(p),t.exit("gfmFootnoteCallLabelMarker"),r(p))}}function mR(t,r){let l=t.length;for(;l--;)if(t[l][1].type==="labelImage"&&t[l][0]==="enter"){t[l][1];break}t[l+1][1].type="data",t[l+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},t[l+3][1].start),end:Object.assign({},t[t.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},t[l+3][1].end),end:Object.assign({},t[l+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},t[t.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},d=[t[l+1],t[l+2],["enter",u,r],t[l+3],t[l+4],["enter",o,r],["exit",o,r],["enter",s,r],["enter",c,r],["exit",c,r],["exit",s,r],t[t.length-2],t[t.length-1],["exit",u,r]];return t.splice(l,t.length-l+1,...d),t}function pR(t,r,l){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s=0,c;return d;function d(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),p}function p(g){return g!==94?l(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",m)}function m(g){if(s>999||g===93&&!c||g===null||g===91||st(g))return l(g);if(g===93){t.exit("chunkString");const w=t.exit("gfmFootnoteCallString");return o.includes(Fn(u.sliceSerialize(w)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),r):l(g)}return st(g)||(c=!0),s++,t.consume(g),g===92?y:m}function y(g){return g===91||g===92||g===93?(t.consume(g),s++,m):m(g)}}function gR(t,r,l){const u=this,o=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let s,c=0,d;return p;function p(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),m}function m(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):l(E)}function y(E){if(c>999||E===93&&!d||E===null||E===91||st(E))return l(E);if(E===93){t.exit("chunkString");const z=t.exit("gfmFootnoteDefinitionLabelString");return s=Fn(u.sliceSerialize(z)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),w}return st(E)||(d=!0),c++,t.consume(E),E===92?g:y}function g(E){return E===91||E===92||E===93?(t.consume(E),c++,y):y(E)}function w(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),o.includes(s)||o.push(s),Ze(t,b,"gfmFootnoteDefinitionWhitespace")):l(E)}function b(E){return r(E)}}function yR(t,r,l){return t.check(Fi,r,t.attempt(fR,r,l))}function vR(t){t.exit("gfmFootnoteDefinition")}function bR(t,r,l){const u=this;return Ze(t,o,"gfmFootnoteDefinitionIndent",5);function o(s){const c=u.events[u.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?r(s):l(s)}}function wR(t){let l=(t||{}).singleTilde;const u={name:"strikethrough",tokenize:s,resolveAll:o};return l==null&&(l=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function o(c,d){let p=-1;for(;++p<c.length;)if(c[p][0]==="enter"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._close){let m=p;for(;m--;)if(c[m][0]==="exit"&&c[m][1].type==="strikethroughSequenceTemporary"&&c[m][1]._open&&c[p][1].end.offset-c[p][1].start.offset===c[m][1].end.offset-c[m][1].start.offset){c[p][1].type="strikethroughSequence",c[m][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[m][1].start),end:Object.assign({},c[p][1].end)},g={type:"strikethroughText",start:Object.assign({},c[m][1].end),end:Object.assign({},c[p][1].start)},w=[["enter",y,d],["enter",c[m][1],d],["exit",c[m][1],d],["enter",g,d]],b=d.parser.constructs.insideSpan.null;b&&vn(w,w.length,0,zo(b,c.slice(m+1,p),d)),vn(w,w.length,0,[["exit",g,d],["enter",c[p][1],d],["exit",c[p][1],d],["exit",y,d]]),vn(c,m-1,p-m+3,w),p=m+w.length-2;break}}for(p=-1;++p<c.length;)c[p][1].type==="strikethroughSequenceTemporary"&&(c[p][1].type="data");return c}function s(c,d,p){const m=this.previous,y=this.events;let g=0;return w;function w(E){return m===126&&y[y.length-1][1].type!=="characterEscape"?p(E):(c.enter("strikethroughSequenceTemporary"),b(E))}function b(E){const z=Tl(m);if(E===126)return g>1?p(E):(c.consume(E),g++,b);if(g<2&&!l)return p(E);const j=c.exit("strikethroughSequenceTemporary"),A=Tl(E);return j._open=!A||A===2&&!!z,j._close=!z||z===2&&!!A,d(E)}}}class SR{constructor(){this.map=[]}add(r,l,u){xR(this,r,l,u)}consume(r){if(this.map.sort(function(s,c){return s[0]-c[0]}),this.map.length===0)return;let l=this.map.length;const u=[];for(;l>0;)l-=1,u.push(r.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),r.length=this.map[l][0];u.push(r.slice()),r.length=0;let o=u.pop();for(;o;){for(const s of o)r.push(s);o=u.pop()}this.map.length=0}}function xR(t,r,l,u){let o=0;if(!(l===0&&u.length===0)){for(;o<t.map.length;){if(t.map[o][0]===r){t.map[o][1]+=l,t.map[o][2].push(...u);return}o+=1}t.map.push([r,l,u])}}function ER(t,r){let l=!1;const u=[];for(;r<t.length;){const o=t[r];if(l){if(o[0]==="enter")o[1].type==="tableContent"&&u.push(t[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(t[r-1][1].type==="tableDelimiterMarker"){const s=u.length-1;u[s]=u[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(l=!0);r+=1}return u}function TR(){return{flow:{null:{name:"table",tokenize:CR,resolveAll:kR}}}}function CR(t,r,l){const u=this;let o=0,s=0,c;return d;function d(U){let ee=u.events.length-1;for(;ee>-1;){const ce=u.events[ee][1].type;if(ce==="lineEnding"||ce==="linePrefix")ee--;else break}const ae=ee>-1?u.events[ee][1].type:null,De=ae==="tableHead"||ae==="tableRow"?q:p;return De===q&&u.parser.lazy[u.now().line]?l(U):De(U)}function p(U){return t.enter("tableHead"),t.enter("tableRow"),m(U)}function m(U){return U===124||(c=!0,s+=1),y(U)}function y(U){return U===null?l(U):Re(U)?s>1?(s=0,u.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(U),t.exit("lineEnding"),b):l(U):Be(U)?Ze(t,y,"whitespace")(U):(s+=1,c&&(c=!1,o+=1),U===124?(t.enter("tableCellDivider"),t.consume(U),t.exit("tableCellDivider"),c=!0,y):(t.enter("data"),g(U)))}function g(U){return U===null||U===124||st(U)?(t.exit("data"),y(U)):(t.consume(U),U===92?w:g)}function w(U){return U===92||U===124?(t.consume(U),g):g(U)}function b(U){return u.interrupt=!1,u.parser.lazy[u.now().line]?l(U):(t.enter("tableDelimiterRow"),c=!1,Be(U)?Ze(t,E,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):E(U))}function E(U){return U===45||U===58?j(U):U===124?(c=!0,t.enter("tableCellDivider"),t.consume(U),t.exit("tableCellDivider"),z):oe(U)}function z(U){return Be(U)?Ze(t,j,"whitespace")(U):j(U)}function j(U){return U===58?(s+=1,c=!0,t.enter("tableDelimiterMarker"),t.consume(U),t.exit("tableDelimiterMarker"),A):U===45?(s+=1,A(U)):U===null||Re(U)?fe(U):oe(U)}function A(U){return U===45?(t.enter("tableDelimiterFiller"),L(U)):oe(U)}function L(U){return U===45?(t.consume(U),L):U===58?(c=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(U),t.exit("tableDelimiterMarker"),H):(t.exit("tableDelimiterFiller"),H(U))}function H(U){return Be(U)?Ze(t,fe,"whitespace")(U):fe(U)}function fe(U){return U===124?E(U):U===null||Re(U)?!c||o!==s?oe(U):(t.exit("tableDelimiterRow"),t.exit("tableHead"),r(U)):oe(U)}function oe(U){return l(U)}function q(U){return t.enter("tableRow"),M(U)}function M(U){return U===124?(t.enter("tableCellDivider"),t.consume(U),t.exit("tableCellDivider"),M):U===null||Re(U)?(t.exit("tableRow"),r(U)):Be(U)?Ze(t,M,"whitespace")(U):(t.enter("data"),te(U))}function te(U){return U===null||U===124||st(U)?(t.exit("data"),M(U)):(t.consume(U),U===92?de:te)}function de(U){return U===92||U===124?(t.consume(U),te):te(U)}}function kR(t,r){let l=-1,u=!0,o=0,s=[0,0,0,0],c=[0,0,0,0],d=!1,p=0,m,y,g;const w=new SR;for(;++l<t.length;){const b=t[l],E=b[1];b[0]==="enter"?E.type==="tableHead"?(d=!1,p!==0&&(xy(w,r,p,m,y),y=void 0,p=0),m={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},w.add(l,0,[["enter",m,r]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(u=!0,g=void 0,s=[0,0,0,0],c=[0,l+1,0,0],d&&(d=!1,y={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},w.add(l,0,[["enter",y,r]])),o=E.type==="tableDelimiterRow"?2:y?3:1):o&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(u=!1,c[2]===0&&(s[1]!==0&&(c[0]=c[1],g=fo(w,r,s,o,void 0,g),s=[0,0,0,0]),c[2]=l)):E.type==="tableCellDivider"&&(u?u=!1:(s[1]!==0&&(c[0]=c[1],g=fo(w,r,s,o,void 0,g)),s=c,c=[s[1],l,0,0])):E.type==="tableHead"?(d=!0,p=l):E.type==="tableRow"||E.type==="tableDelimiterRow"?(p=l,s[1]!==0?(c[0]=c[1],g=fo(w,r,s,o,l,g)):c[1]!==0&&(g=fo(w,r,c,o,l,g)),o=0):o&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(c[3]=l)}for(p!==0&&xy(w,r,p,m,y),w.consume(r.events),l=-1;++l<r.events.length;){const b=r.events[l];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=ER(r.events,l))}return t}function fo(t,r,l,u,o,s){const c=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",d="tableContent";l[0]!==0&&(s.end=Object.assign({},wl(r.events,l[0])),t.add(l[0],0,[["exit",s,r]]));const p=wl(r.events,l[1]);if(s={type:c,start:Object.assign({},p),end:Object.assign({},p)},t.add(l[1],0,[["enter",s,r]]),l[2]!==0){const m=wl(r.events,l[2]),y=wl(r.events,l[3]),g={type:d,start:Object.assign({},m),end:Object.assign({},y)};if(t.add(l[2],0,[["enter",g,r]]),u!==2){const w=r.events[l[2]],b=r.events[l[3]];if(w[1].end=Object.assign({},b[1].end),w[1].type="chunkText",w[1].contentType="text",l[3]>l[2]+1){const E=l[2]+1,z=l[3]-l[2]-1;t.add(E,z,[])}}t.add(l[3]+1,0,[["exit",g,r]])}return o!==void 0&&(s.end=Object.assign({},wl(r.events,o)),t.add(o,0,[["exit",s,r]]),s=void 0),s}function xy(t,r,l,u,o){const s=[],c=wl(r.events,l);o&&(o.end=Object.assign({},c),s.push(["exit",o,r])),u.end=Object.assign({},c),s.push(["exit",u,r]),t.add(l+1,0,s)}function wl(t,r){const l=t[r],u=l[0]==="enter"?"start":"end";return l[1][u]}const RR={name:"tasklistCheck",tokenize:DR};function AR(){return{text:{91:RR}}}function DR(t,r,l){const u=this;return o;function o(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?l(p):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),s)}function s(p){return st(p)?(t.enter("taskListCheckValueUnchecked"),t.consume(p),t.exit("taskListCheckValueUnchecked"),c):p===88||p===120?(t.enter("taskListCheckValueChecked"),t.consume(p),t.exit("taskListCheckValueChecked"),c):l(p)}function c(p){return p===93?(t.enter("taskListCheckMarker"),t.consume(p),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),d):l(p)}function d(p){return Re(p)?r(p):Be(p)?t.check({tokenize:MR},r,l)(p):l(p)}}function MR(t,r,l){return Ze(t,u,"whitespace");function u(o){return o===null?l(o):r(o)}}function zR(t){return Sv([nR(),hR(),wR(t),TR(),AR()])}const _R={};function OR(t){const r=this,l=t||_R,u=r.data(),o=u.micromarkExtensions||(u.micromarkExtensions=[]),s=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),c=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);o.push(zR(l)),s.push(Wk()),c.push($k(l))}const Eo=t=>t.trim().toLowerCase().replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/_/g,"").replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"");function Of(t){return t==null?"":typeof t=="string"||typeof t=="number"||typeof t=="boolean"?String(t):Array.isArray(t)?t.map(r=>Of(r)).join(""):G.isValidElement(t)?Of(t.props.children??null):""}function jR(t){const r=t.split(`
`);let l=0;for(;l<r.length&&r[l].trim()==="";)l++;if(l<r.length&&/^#\s+/.test(r[l].trim())){for(l++;l<r.length&&r[l].trim()==="";)l++;return r.slice(l).join(`
`)}return t}const vl=(t,r)=>{const l=Of(t),u=Eo(l);return u?`${r??""}${u}`:void 0};function Ey({markdown:t,stripFirstH1:r,headingIdPrefix:l}){const u=G.useMemo(()=>r?jR(t):t,[t,r]);return se.jsx("div",{className:"markdown",children:se.jsx(wC,{remarkPlugins:[OR],components:{h1:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h1",{id:c,...s,className:"text-4xl font-bold lineheight-1.25 mb-4",children:o})},h2:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h2",{id:c,...s,className:"text-3xl font-bold lineheight-1.25 mb-4",children:o})},h3:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h3",{id:c,...s,className:"text-2xl font-bold lineheight-1.25 mb-4",children:o})},h4:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h4",{id:c,...s,className:"text-xl font-semibold lineheight-1.25 mb-4",children:o})},h5:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h5",{id:c,...s,className:"text-lg font-semibold lineheight-1.25 mb-4",children:o})},h6:({children:o,...s})=>{const c=vl(o,l);return se.jsx("h6",{id:c,...s,className:"text-base font-semibold lineheight-1.25 mb-4",children:o})},p:({children:o,...s})=>se.jsx("p",{...s,className:"mb-4 lineheight-1.5",children:o}),pre:({children:o,...s})=>se.jsx("pre",{...s,className:"bg-gray-100 p-4 rounded mb-4 overflow-x-auto",children:o}),code:({children:o,...s})=>se.jsx("code",{...s,className:"bg-gray-100 px-1 py-0.5 rounded",children:o}),ol:({children:o,...s})=>se.jsx("ol",{...s,className:"list-inside mb-4",children:o}),li:({children:o,...s})=>se.jsx("li",{...s,className:"mb-2",children:o})},children:u})})}const NR=`# Temperature Converter 

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
`,LR=`# Test-Driven Development (TDD) Guide

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
`,UR=`# Function Documentation

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
\`\`\``,HR=`# Step-by-Step Instructions

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
`,BR="",YR=`# Dog Age Calculator

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
`,qR=`# Function Documentation

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
\`\`\``,IR="# Step-by-Step Instructions\n\nThis function is slightly more complex and we will need to consider some edge cases. We will start with basic functionality and gradually address the different scenarios. You will find it beneficial to run `jest` in `watch mode`, so run the watch script to see it run the tests everytime you save.\n\n## 1. Basic Functionality\n\nRemove the first `.skip` from the `describe` block. \n\nNow let's address the first two years of a dog’s life count:\n\n```javascript\nconst earlyYears = 2 * 10.5;\n```\n\nEach following year should represent 4 years. We need to account for the 2 years we already calculated:\n\n```javascript\nconst laterYears = (humanYears - 2) * 4;\n```\n\nFinally, we need to return the total value:\n\n```javascript\nreturn earlyYears + laterYears;\n```\n\n## 2. Advanced Cases\n\nRemove the second `.skip`. If you save, you'll notice that the tests start failing. Consider the first case:\n\n- `humanYears` is 1, so we expect the return to be `10.5`\n- The function calculates `2 * 10.5` for `earlyYears`\n- It then calculates `humanYears - 2` (-1) multiplied by 4\n- Finally, it returns `21 - 4` which is why the received value is `17`\n\nWe can easily address this with an `early return`. This is where we return from a function so that later functionality is not executed. Since every human year up until 2 is worth 10.5, we can ignore the later years when the human age does not exceed 2.\n\n```javascript\nif (humanYears <= 2) return humanYears * 10.5;\n```\n\n_**Note** I'm using a shorthand in the `if statement` to avoid opening curly braces and writing on a new line. There are many shorthands you can learn that are very useful._\n\n## 3. Edge Cases\n\nRemove the third `.skip`. At this point, the first two tests should in fact pass, however, we're not dealing with negative numbers. When the received parameter is less than zero, we should be returning 0.\n\n```javascript\nif (humanYears <= 0) return 0;\n```\n\n## 4. Input Validation\nRemove the final `.skip`. What we're trying to ensure is that this function always returns a number. If the user provides `undefined`, `null`, or in fact, anything that is not a number, we want to return 0:\n\n```javascript\nif (humanYears <= 0) return 0;\nif (typeof humanYears !== 'number') return 0;\n```\n\nWe still get one failing test! Let's try to debug what's happening.\n\n```javascript\nconsole.log(humanYears <= 0);\nconsole.log(typeof humanYears !== 'number');\n```\n\nNow we can't tell which test corresponds to our console log. The test that is failing is the very last one. Try adding `.only` to only run the last test.\n\n```javascript\ntest.only('returns 0 for an NaN input', () => {\n    expect(calculateDogAge(NaN)).toBe(0);\n});\n```\n\nNow our `console logs` should show:\n\n```bash\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n\nconsole.log\n    false\n\n    at log (2. Dog Age Calculator/dogAge.js:4:13)\n```\n\nThe input is `NaN`, which is not less than or equal to 0, but it _is a number._ It's just a number that doesn't exist. It's a `falsey` value in JavaScript, just like `null`, `undefined`, `0`, `''`, and a few others. So if you console log this:\n\n```javascript\nconsole.log(!humanYears);\n```\n\nYou should expect to see\n\n```bash\nconsole.log\n    true\n\n    at log (2. Dog Age Calculator/dogAge.js:3:13)\n```\n\nTherefore, we can check to see if the value is falsey, since all numbers are truthy value:\n\n```javascript\nif (!humanYears) return 0;\n```\n\nWe can actually combine these if statements into one single catchall:\n\n```javascript\nif (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n```\n\nRemeber to remove the `.only` to run the rest of the tests, and you should see them all pass!\n\n### Solution\n\n<details>\n  <summary>Reveal</summary>\n\n```javascript\nfunction calculateDogAge(humanYears) {\n    if (!humanYears || humanYears <= 0 || typeof humanYears !== 'number') return 0;\n\n    if (humanYears <= 2) return humanYears * 10.5;\n        \n    const earlyYears = 2 * 10.5;\n    const laterYears = (humanYears - 2) * 4;\n    return earlyYears + laterYears;\n}\n```\n</details>\n",FR="",GR=`# Magic 8 Ball

## Objective

Create a Magic 8 Ball in JavaScript that generates a random answer. If you wish to write your own responses, you will need to change the \`validResponses\` array in the test suite to reflect your responses.

## Learning Goals

- Work with JavaScript switch/case statements
- Practice functional programming
- Learn the ternary operator
`,VR=`# Function Documentation

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
\`\`\``,XR=`# Step-by-Step Instructions

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

`,QR=`# Race Day

## Objective

Create a race registration system that assigns race numbers and start times based on runner's age and registration time.

## Learning Goals

- Begin to use JavaScript objects
- Practice handling multiple conditions`,ZR=`
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
\`\`\``,JR=`# Step-by-Step Instructions

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

</details>`,PR=`# Rock Paper Scissors

## Objective

Create a console-based Rock Paper Scissors game that accepts user input, generates a computer choice, determines a winner, and logs the results. The implementation should be modular and testable.

## Learning Goals

- Write small, testable JavaScript functions
- Use control flow (if/else, switch) to implement game logic
- Practice input validation and edge-case handling (e.g., cheat codes)

## Notes

- The \`playGame\` function has already been written for you.
- When you have the tests passing, try running the command \`npm run play\`.
`,KR=`
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
\`\`\``,WR=`# Step-by-Step Instructions

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

Enjoy!`,$R=`# Sleep Calculator

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
`,eA=`# Arrow Functions

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
- ECMAScript 2015 (ES6) specification notes`,tA=`
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
\`\`\``,nA=`# Step-by-Step Instructions

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

</details>`,aA="# Coded Message\n\n## Before You Start\n\nThis challenge introduces **Object-Oriented Programming (OOP)** in JavaScript. You'll learn about classes, methods, and the `this` keyword while working with array methods. If you're new to OOP, the instructions file provides detailed explanations of each concept.\n\n## Objective\n\nBuild a `MessageDecoder` class that transforms an encoded array of strings using various array methods to reveal a hidden message about programming. Master OOP principles while practicing array manipulation techniques.\n\n## Learning Goals\n\n- Understand JavaScript classes and constructors\n- Practice array methods (`.pop()`, `.push()`, `.shift()`, `.unshift()`, `.splice()`, `.join()`)\n- Learn method chaining with `this`\n- Work with instance methods and encapsulation\n- Understand the difference between mutating and non-mutating methods\n\n## Note\n\nThe `revealSecretMessage()` method has already been written for you. Your task is to implement the individual methods it depends on. Once all methods are correctly implemented, the secret message will be revealed!\n\nYou can check your progress at any time:\n```bash\nnpm test\n```",rA=`
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
- **\`.indexOf()\`** - Finds the index of an element ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf))`,lA=`# Step-by-Step Instructions

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
`,iA=`#  Whale Talk

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
`,uA=`# Function Documentation

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
`,oA=`# Step-by-Step Instructions

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
`;function sA(t){const r=t.replace(/\\/g,"/");return r.match(/(?:^|\/)(?:docs)(?:\/)([^/]+)(?:\/)/)?.[1]??r.split("/").slice(-2,-1)[0]??"unknown"}function cA(t){const r=t.match(/^(\d+)\b/);return r?Number(r[1]):Number.MAX_SAFE_INTEGER}function fA(t){return t.replace(/\\/g,"/").split("/").slice(-1)[0]??"unknown.md"}const Ty=t=>t.replace(/\.md$/i,"").replace(/\d+/g,"").replace(/[-_]+/g," ").trim(),Cy={"instructions.md":0,"readme.md":1,"function_documentation.md":2,"function-documentation.md":2,"extra_guide.md":3,"extra-guide.md":3,"solution.md":4};function hA(t,r){const l=t.toLowerCase(),u=r.toLowerCase(),o=Cy[l]??100,s=Cy[u]??100;return o-s||l.localeCompare(u)}const dA={glob(){return Object.assign({"../../../../docs/1-temperature-converter/README.md":NR,"../../../../docs/1-temperature-converter/TDD-guide.md":LR,"../../../../docs/1-temperature-converter/function-documentation.md":UR,"../../../../docs/1-temperature-converter/instructions.md":HR,"../../../../docs/1-temperature-converter/solution.md":BR,"../../../../docs/2-dog-age-calculator/README.md":YR,"../../../../docs/2-dog-age-calculator/function-documentation.md":qR,"../../../../docs/2-dog-age-calculator/instructions.md":IR,"../../../../docs/2-dog-age-calculator/solution.md":FR,"../../../../docs/3-magic-eight-ball/README.md":GR,"../../../../docs/3-magic-eight-ball/function-documentation.md":VR,"../../../../docs/3-magic-eight-ball/instructions.md":XR,"../../../../docs/4-race-day/README.md":QR,"../../../../docs/4-race-day/function-documentation.md":ZR,"../../../../docs/4-race-day/instructions.md":JR,"../../../../docs/5-rock-paper-scissors/README.md":PR,"../../../../docs/5-rock-paper-scissors/function-documentation.md":KR,"../../../../docs/5-rock-paper-scissors/instructions.md":WR,"../../../../docs/6-sleep-calculator/README.md":$R,"../../../../docs/6-sleep-calculator/arrow-functions.md":eA,"../../../../docs/6-sleep-calculator/function-documentation.md":tA,"../../../../docs/6-sleep-calculator/instructions.md":nA,"../../../../docs/7-coded-message/README.md":aA,"../../../../docs/7-coded-message/class-documentation.md":rA,"../../../../docs/7-coded-message/instructions.md":lA,"../../../../docs/8-whale-talk/README.md":iA,"../../../../docs/8-whale-talk/function-documentation.md":uA,"../../../../docs/8-whale-talk/instructions.md":oA})}};function mA(t){const r=new Map;for(const[u,o]of Object.entries(t)){const s=sA(u),c=fA(u),d={fileName:c,title:Ty(c),markdown:o},p=r.get(s);p?p.push(d):r.set(s,[d])}const l=Array.from(r.entries()).map(([u,o])=>{const s=[...o].sort((c,d)=>hA(c.fileName,d.fileName));return{slug:u,title:Ty(u),order:cA(u),files:s.map(c=>({title:c.title,markdown:c.markdown}))}});return l.sort((u,o)=>u.order-o.order||u.title.localeCompare(o.title)),l}function fb(){return G.useMemo(()=>{const t=dA.glob();return mA(t)},[])}const pA=`# JavaScript Learning Challenges

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
`;var hb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ky=ar.createContext&&ar.createContext(hb),gA=["attr","size","title"];function yA(t,r){if(t==null)return{};var l=vA(t,r),u,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)u=s[o],!(r.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(t,u)&&(l[u]=t[u])}return l}function vA(t,r){if(t==null)return{};var l={};for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){if(r.indexOf(u)>=0)continue;l[u]=t[u]}return l}function To(){return To=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(t[u]=l[u])}return t},To.apply(this,arguments)}function Ry(t,r){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);r&&(u=u.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),l.push.apply(l,u)}return l}function Co(t){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?Ry(Object(l),!0).forEach(function(u){bA(t,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):Ry(Object(l)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(l,u))})}return t}function bA(t,r,l){return r=wA(r),r in t?Object.defineProperty(t,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[r]=l,t}function wA(t){var r=SA(t,"string");return typeof r=="symbol"?r:r+""}function SA(t,r){if(typeof t!="object"||!t)return t;var l=t[Symbol.toPrimitive];if(l!==void 0){var u=l.call(t,r);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function db(t){return t&&t.map((r,l)=>ar.createElement(r.tag,Co({key:l},r.attr),db(r.child)))}function xA(t){return r=>ar.createElement(EA,To({attr:Co({},t.attr)},r),db(t.child))}function EA(t){var r=l=>{var{attr:u,size:o,title:s}=t,c=yA(t,gA),d=o||l.size||"1em",p;return l.className&&(p=l.className),t.className&&(p=(p?p+" ":"")+t.className),ar.createElement("svg",To({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,c,{className:p,style:Co(Co({color:t.color||l.color},l.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&ar.createElement("title",null,s),t.children)};return ky!==void 0?ar.createElement(ky.Consumer,null,l=>r(l)):r(hb)}function TA(t){return xA({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M8.2 275.4c0-8.6 3.4-17.401 10-24.001 13.2-13.2 34.8-13.2 48 0l451.8 451.8 445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199z"},child:[]}]})(t)}const CA=({title:t,slug:r,files:l})=>{const[u,o]=G.useState(!1),{slug:s}=ev(),c=s?.replace(/\d/g,"").split("-").join(" ").trim()===t?l.find(p=>`#${Eo(p.title)}`===window.location.hash)?.title??t:null,d=p=>{p.stopPropagation(),o(!u)};return se.jsxs("section",{children:[se.jsxs("div",{style:{cursor:"pointer",display:"flex",alignItems:"baseline"},className:"navlink",children:[se.jsx(vo,{to:`/instructions/${r}`,onClick:()=>{u||o(!0)},style:{fontWeight:c===t?700:400,textDecoration:"none",flex:"1 1 auto",border:"none",paddingLeft:8},children:t}),se.jsx("button",{style:{border:"none",outline:"none",boxShadow:"none",background:"none",padding:0,margin:"0 8px 0 0",display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1,height:"1em",width:"1em",verticalAlign:"baseline"},onClick:d,children:se.jsx("span",{style:{transform:u?"rotate(180deg)":"rotate(0deg)",display:"inline-block",transition:"transform 0.2s"},children:se.jsx(TA,{})})})]}),u&&se.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:12},children:l.map(p=>{if(p.title.toLowerCase()==="readme")return null;const m=p.title.toLowerCase()==="readme"?"":`#${Eo(p.title)}`,y=`/instructions/${r}${m}`;return se.jsx("li",{style:{padding:0},className:"navlink accordion-link",children:se.jsx(vo,{to:y,style:{fontWeight:c===p.title?700:400,textDecoration:"none",opacity:.9,border:"none",paddingLeft:24},children:p.title})},`${r}-${p.title}`)})})]})},kA=()=>{const t=fb();return se.jsx("aside",{"aria-label":"Challenges",style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:se.jsx("nav",{style:{overflowY:"auto",overflowX:"hidden",minHeight:0,flex:"1 1 auto",paddingRight:16},children:se.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,gap:12,display:"flex",flexDirection:"column",fontSize:18},children:[se.jsx("li",{className:"navlink",children:se.jsx(vo,{to:$a.SETUP.path,style:({isActive:r})=>({fontWeight:r?700:400,textDecoration:"none"}),children:"Overview"})}),t.map(r=>se.jsx("li",{style:{padding:0,margin:0},children:se.jsx(CA,{slug:r.slug,title:r.title,files:r.files})},r.slug))]})})})};function RA(t,r){if(t)return r?.files.find(o=>`#${Eo(o.title)}`===t)?.markdown??"no markdown";const l=r?.files.find(o=>o.title.toLowerCase()==="readme")?.markdown;return l||(r?.files.find(o=>o.title.toLowerCase()==="instructions")?.markdown??"No instructions.md or README.md found for this challenge.")}function Ay(){const t=fb(),{slug:r}=ev(),{hash:l}=xa(),u=$y(),o=G.useMemo(()=>r?t.findIndex(m=>m.slug===r):-1,[t,r]),s=t.find(m=>m.slug===r),c=G.useMemo(()=>RA(l,s),[l,s]),d=o>0?t[o-1]:void 0,p=o>=0&&o<t.length-1?t[o+1]:void 0;return t.length===0?se.jsxs("div",{className:"inner",children:[se.jsx("h1",{children:"Instructions"}),se.jsxs("p",{children:["No docs markdown found. Check the glob path in ",se.jsx("code",{children:"useChallengeInstructions"}),"."]})]}):se.jsxs("div",{id:"main",style:{display:"grid",height:"100vh",gridTemplateColumns:"280px 1fr",gap:24},children:[se.jsx(kA,{}),se.jsxs("section",{"aria-label":"Instructions",style:{overflow:"auto",height:"100%"},children:[!r&&se.jsx(Ey,{markdown:pA}),r&&!s&&se.jsxs(se.Fragment,{children:[se.jsx("h1",{style:{marginTop:0},children:"Instructions"}),se.jsx("p",{children:"Unknown challenge. Pick one from the list."})]}),s&&se.jsxs(se.Fragment,{children:[se.jsx("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12},children:se.jsxs("div",{style:{display:"flex",gap:8},children:[se.jsx("button",{disabled:!d,onClick:()=>d&&u(`/instructions/${d.slug}`),children:"Prev"}),se.jsx("button",{disabled:!p,onClick:()=>p&&u(`/instructions/${p.slug}`),children:"Next"})]})}),se.jsx(Ey,{markdown:c})]})]})]})}const AA="/js-content/pr-preview/pr-62/",DA=AA.replace(/\/$/,""),MA=XS([{path:"/",element:se.jsx(sx,{}),children:[{path:"/instructions",element:se.jsx(Ay,{})},{path:"/instructions/:slug",element:se.jsx(Ay,{})},{path:"*",element:se.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center gap-4",children:[se.jsx("h1",{children:"404 Not Found"}),se.jsx("p",{children:"The page you are looking for does not exist."}),se.jsx(Do,{to:$a.HOME.path,children:"Go back to Home"})]})}]}],{basename:DA}),mb=document.getElementById("root");if(!mb)throw new Error('Root element "#root" not found');z1.createRoot(mb).render(se.jsx(vS,{router:MA}));

(()=>{var Xb=Object.create;var A0=Object.defineProperty;var Wb=Object.getOwnPropertyDescriptor;var qb=Object.getOwnPropertyNames;var Yb=Object.getPrototypeOf,Zb=Object.prototype.hasOwnProperty;var As=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var Jb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of qb(t))!Zb.call(e,s)&&s!==n&&A0(e,s,{get:()=>t[s],enumerable:!(i=Wb(t,s))||i.enumerable});return e};var w0=(e,t,n)=>(n=e!=null?Xb(Yb(e)):{},Jb(t||!e||!e.__esModule?A0(n,"default",{value:e,enumerable:!0}):n,e));var H0=As(Lt=>{"use strict";var rd=Symbol.for("react.transitional.element"),Kb=Symbol.for("react.portal"),Qb=Symbol.for("react.fragment"),jb=Symbol.for("react.strict_mode"),$b=Symbol.for("react.profiler"),t1=Symbol.for("react.consumer"),e1=Symbol.for("react.context"),n1=Symbol.for("react.forward_ref"),i1=Symbol.for("react.suspense"),s1=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),a1=Symbol.for("react.activity"),r1=Symbol.for("react.view_transition"),C0=Symbol.iterator;function o1(e){return e===null||typeof e!="object"?null:(e=C0&&e[C0]||e["@@iterator"],typeof e=="function"?e:null)}var L0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O0=Object.assign,I0={};function fr(e,t,n){this.props=e,this.context=t,this.refs=I0,this.updater=n||L0}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P0(){}P0.prototype=fr.prototype;function od(e,t,n){this.props=e,this.context=t,this.refs=I0,this.updater=n||L0}var ld=od.prototype=new P0;ld.constructor=od;O0(ld,fr.prototype);ld.isPureReactComponent=!0;var R0=Array.isArray;function ad(){}var ge={H:null,A:null,T:null,S:null},B0=Object.prototype.hasOwnProperty;function cd(e,t,n){var i=n.ref;return{$$typeof:rd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function l1(e,t){return cd(e.type,t,e.props)}function ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===rd}function c1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var D0=/\/+/g;function sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?c1(""+e.key):t.toString(36)}function u1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ad,ad):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function hr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case rd:case Kb:r=!0;break;case U0:return r=e._init,hr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+sd(e,0):i,R0(s)?(n="",r!=null&&(n=r.replace(D0,"$&/")+"/"),hr(s,t,n,"",function(c){return c})):s!=null&&(ud(s)&&(s=l1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(D0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(R0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+sd(i,l),r+=hr(i,t,n,a,s);else if(l=o1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+sd(i,l++),r+=hr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return hr(u1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function bc(e,t,n){if(e==null)return e;var i=[],s=0;return hr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function h1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var N0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function z0(e){var t=ge.T,n={};n.types=t!==null?t.types:null,ge.T=n;try{var i=e(),s=ge.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ad,N0)}catch(a){N0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ge.T=t}}function F0(e){var t=ge.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else z0(F0.bind(null,e))}var f1={map:bc,forEach:function(e,t,n){bc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bc(e,function(){t++}),t},toArray:function(e){return bc(e,function(t){return t})||[]},only:function(e){if(!ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Lt.Activity=a1;Lt.Children=f1;Lt.Component=fr;Lt.Fragment=Qb;Lt.Profiler=$b;Lt.PureComponent=od;Lt.StrictMode=jb;Lt.Suspense=i1;Lt.ViewTransition=r1;Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ge;Lt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ge.H.useMemoCache(e)}};Lt.addTransitionType=F0;Lt.cache=function(e){return function(){return e.apply(null,arguments)}};Lt.cacheSignal=function(){return null};Lt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=O0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!B0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return cd(e.type,s,i)};Lt.createContext=function(e){return e={$$typeof:e1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:t1,_context:e},e};Lt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)B0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return cd(e,a,s)};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(e){return{$$typeof:n1,render:e}};Lt.isValidElement=ud;Lt.lazy=function(e){return{$$typeof:U0,_payload:{_status:-1,_result:e},_init:h1}};Lt.memo=function(e,t){return{$$typeof:s1,type:e,compare:t===void 0?null:t}};Lt.startTransition=z0;Lt.unstable_useCacheRefresh=function(){return ge.H.useCacheRefresh()};Lt.use=function(e){return ge.H.use(e)};Lt.useActionState=function(e,t,n){return ge.H.useActionState(e,t,n)};Lt.useCallback=function(e,t){return ge.H.useCallback(e,t)};Lt.useContext=function(e){return ge.H.useContext(e)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(e,t){return ge.H.useDeferredValue(e,t)};Lt.useEffect=function(e,t){return ge.H.useEffect(e,t)};Lt.useEffectEvent=function(e){return ge.H.useEffectEvent(e)};Lt.useId=function(){return ge.H.useId()};Lt.useImperativeHandle=function(e,t,n){return ge.H.useImperativeHandle(e,t,n)};Lt.useInsertionEffect=function(e,t){return ge.H.useInsertionEffect(e,t)};Lt.useLayoutEffect=function(e,t){return ge.H.useLayoutEffect(e,t)};Lt.useMemo=function(e,t){return ge.H.useMemo(e,t)};Lt.useOptimistic=function(e,t){return ge.H.useOptimistic(e,t)};Lt.useReducer=function(e,t,n){return ge.H.useReducer(e,t,n)};Lt.useRef=function(e){return ge.H.useRef(e)};Lt.useState=function(e){return ge.H.useState(e)};Lt.useSyncExternalStore=function(e,t,n){return ge.H.useSyncExternalStore(e,t,n)};Lt.useTransition=function(){return ge.H.useTransition()};Lt.version="19.3.1"});var Tc=As((O3,V0)=>{"use strict";V0.exports=H0()});var Q0=As(Ee=>{"use strict";function pd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Ec(s,t))e[i]=t,e[n]=s,n=i;else break t}}function wi(e){return e.length===0?null:e[0]}function wc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Ec(o,n))l<s&&0>Ec(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Ec(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Ec(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(G0=performance,Ee.unstable_now=function(){return G0.now()}):(hd=Date,k0=hd.now(),Ee.unstable_now=function(){return hd.now()-k0});var G0,hd,k0,Qi=[],ws=[],d1=1,jn=null,on=3,md=!1,Fo=!1,Ho=!1,gd=!1,q0=typeof setTimeout=="function"?setTimeout:null,Y0=typeof clearTimeout=="function"?clearTimeout:null,X0=typeof setImmediate<"u"?setImmediate:null;function Ac(e){for(var t=wi(ws);t!==null;){if(t.callback===null)wc(ws);else if(t.startTime<=e)wc(ws),t.sortIndex=t.expirationTime,pd(Qi,t);else break;t=wi(ws)}}function _d(e){if(Ho=!1,Ac(e),!Fo)if(wi(Qi)!==null)Fo=!0,pr||(pr=!0,dr());else{var t=wi(ws);t!==null&&vd(_d,t.startTime-e)}}var pr=!1,Vo=-1,Z0=5,J0=-1;function K0(){return gd?!0:!(Ee.unstable_now()-J0<Z0)}function fd(){if(gd=!1,pr){var e=Ee.unstable_now();J0=e;var t=!0;try{t:{Fo=!1,Ho&&(Ho=!1,Y0(Vo),Vo=-1),md=!0;var n=on;try{e:{for(Ac(e),jn=wi(Qi);jn!==null&&!(jn.expirationTime>e&&K0());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,on=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){jn.callback=s,Ac(e),t=!0;break e}jn===wi(Qi)&&wc(Qi),Ac(e)}else wc(Qi);jn=wi(Qi)}if(jn!==null)t=!0;else{var a=wi(ws);a!==null&&vd(_d,a.startTime-e),t=!1}}break t}finally{jn=null,on=n,md=!1}t=void 0}}finally{t?dr():pr=!1}}}var dr;typeof X0=="function"?dr=function(){X0(fd)}:typeof MessageChannel<"u"?(dd=new MessageChannel,W0=dd.port2,dd.port1.onmessage=fd,dr=function(){W0.postMessage(null)}):dr=function(){q0(fd,0)};var dd,W0;function vd(e,t){Vo=q0(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z0=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return on};Ee.unstable_next=function(e){switch(on){case 1:case 2:case 3:var t=3;break;default:t=on}var n=on;on=t;try{return e()}finally{on=n}};Ee.unstable_requestPaint=function(){gd=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=on;on=e;try{return t()}finally{on=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:d1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,pd(ws,e),wi(Qi)===null&&e===wi(ws)&&(Ho?(Y0(Vo),Vo=-1):Ho=!0,vd(_d,n-i))):(e.sortIndex=s,pd(Qi,e),Fo||md||(Fo=!0,pr||(pr=!0,dr()))),e};Ee.unstable_shouldYield=K0;Ee.unstable_wrapCallback=function(e){var t=on;return function(){var n=on;on=t;try{return e.apply(this,arguments)}finally{on=n}}}});var $0=As((P3,j0)=>{"use strict";j0.exports=Q0()});var n_=As(ln=>{"use strict";var p1=Tc();function e_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cs(){}var mn={d:{f:Cs,r:function(){throw Error(e_(522))},D:Cs,C:Cs,L:Cs,m:Cs,X:Cs,S:Cs,M:Cs},p:0,findDOMNode:null},m1=Symbol.for("react.portal"),g1=Symbol.for("react.recoverable"),t_=Symbol.for("react.optimistic_key");function _1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m1,key:i==null?null:i===t_?t_:""+i,children:e,containerInfo:t,implementation:n}}var Go=p1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;ln.browser=function(e){return{$$typeof:g1,_reason:e}};ln.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(e_(299));return _1(e,t,null,n)};ln.flushSync=function(e){var t=Go.T,n=mn.p;try{if(Go.T=null,mn.p=2,e)return e()}finally{Go.T=t,mn.p=n,mn.d.f()}};ln.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};ln.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};ln.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Cc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};ln.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Cc(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&mn.d.M(e)};ln.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Cc(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};ln.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Cc(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else mn.d.m(e)};ln.requestFormReset=function(e){mn.d.r(e)};ln.unstable_batchedUpdates=function(e,t){return e(t)};ln.useFormState=function(e,t,n){return Go.H.useFormState(e,t,n)};ln.useFormStatus=function(){return Go.H.useHostTransitionStatus()};ln.version="19.3.1"});var a_=As((z3,s_)=>{"use strict";function i_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i_)}catch(e){console.error(e)}}i_(),s_.exports=n_()});var WS=As(ch=>{"use strict";var ke=$0(),Xv=Tc(),v1=a_();function X(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function qv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function r_(e){if(Rl(e)!==e)throw Error(X(188))}function y1(e){var t=e.alternate;if(!t){if(t=Rl(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return r_(s),e;if(a===i)return r_(s),t;a=a.sibling}throw Error(X(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(X(189))}}if(n.alternate!==i)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function Zv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Zv(e),t!==null)return t;e=e.sibling}return null}function wn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&wn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Va(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function o_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Jv(e){var t=[null,null],n=Va(e);return n===null||Kv(t,e,n.child,{foundSelf:!1}),t}function Kv(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Kv(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ge(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(X(559))}}var Sr=null,Kd=null;function x1(e,t,n){return e===n?!0:e===t?(Sr=e,!0):!1}function S1(e,t,n){return e===n?(Kd=e,!1):e===t?(Kd!==null&&(Sr=e),!0):!1}function l_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Qd(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var de=Object.assign,M1=Symbol.for("react.element"),Rc=Symbol.for("react.transitional.element"),Jo=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),Qv=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),jv=Symbol.for("react.consumer"),Li=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),tp=Symbol.for("react.suspense_list"),lm=Symbol.for("react.memo"),Us=Symbol.for("react.lazy"),ep=Symbol.for("react.activity"),b1=Symbol.for("react.legacy_hidden"),T1=Symbol.for("react.memo_cache_sentinel"),np=Symbol.for("react.view_transition"),E1=Symbol.for("react.recoverable"),c_=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=c_&&e[c_]||e["@@iterator"],typeof e=="function"?e:null)}var A1=Symbol.for("react.client.reference");function ip(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===A1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case jd:return"Profiler";case Qv:return"StrictMode";case $d:return"Suspense";case tp:return"SuspenseList";case ep:return"Activity";case np:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Jo:return"Portal";case Li:return e.displayName||"Context";case jv:return(e._context.displayName||"Context")+".Consumer";case om:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lm:return t=e.displayName||null,t!==null?t:ip(e.type)||"Memo";case Us:t=e._payload,e=e._init;try{return ip(e(t))}catch{}}return null}var Ko=Array.isArray,Rt=Xv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=v1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ca={pending:!1,data:null,method:null,action:null},sp=[],br=-1;function Hi(e){return{current:e}}function en(e){0>br||(e.current=sp[br],sp[br]=null,br--)}function ye(e,t){br++,sp[br]=e.current,e.current=t}var Bi=Hi(null),dl=Hi(null),Vs=Hi(null),mu=Hi(null);function gu(e,t){switch(ye(Vs,t),ye(dl,e),ye(Bi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bv(t),e=xS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(Bi),ye(Bi,e)}function kr(){en(Bi),en(dl),en(Vs)}function ap(e){var t=e.memoizedState;t!==null&&($r._currentValue=t.memoizedState,ye(mu,e)),t=Bi.current;var n=xS(t,e.type);t!==n&&(ye(dl,e),ye(Bi,n))}function _u(e){dl.current===e&&(en(Bi),en(dl)),mu.current===e&&(en(mu),$r._currentValue=Ca)}var yd,u_;function Ds(e){if(yd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yd=t&&t[1]||"",u_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yd+e+u_}var xd=!1;function Sd(e,t){if(!e||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var h=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){h=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){h=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&h&&typeof g.stack=="string")return[g.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ds(n):""}function w1(e,t){switch(e.tag){case 26:case 27:case 5:return Ds(e.type);case 16:return Ds("Lazy");case 13:return e.child!==t&&t!==null?Ds("Suspense Fallback"):Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 15:return Sd(e.type,!1);case 11:return Sd(e.type.render,!1);case 1:return Sd(e.type,!0);case 31:return Ds("Activity");case 30:return Ds("ViewTransition");default:return""}}function h_(e){try{var t="",n=null;do t+=w1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var rp=Object.prototype.hasOwnProperty,cm=ke.unstable_scheduleCallback,Md=ke.unstable_cancelCallback,C1=ke.unstable_shouldYield,R1=ke.unstable_requestPaint,Bn=ke.unstable_now,D1=ke.unstable_getCurrentPriorityLevel,$v=ke.unstable_ImmediatePriority,ty=ke.unstable_UserBlockingPriority,vu=ke.unstable_NormalPriority,N1=ke.unstable_LowPriority,ey=ke.unstable_IdlePriority,U1=ke.log,L1=ke.unstable_setDisableYieldValue,Dl=null,zn=null;function Is(e){if(typeof U1=="function"&&L1(e),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(Dl,e)}catch{}}var Fn=Math.clz32?Math.clz32:P1,O1=Math.log,I1=Math.LN2;function P1(e){return e>>>=0,e===0?32:31-(O1(e)/I1|0)|0}var Dc=256,Nc=262144,Uc=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=ba(i):(r&=o,r!==0?s=ba(r):n||(n=o&~e,n!==0&&(s=ba(n))))):(o=i&~a,o!==0?s=ba(o):r!==0?s=ba(r):n||(n=i&~e,n!==0&&(s=ba(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Nl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ny(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Fn(n),s=1<<i;t|=e[i],n&=~s}return t}function B1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iy(){var e=Uc;return Uc<<=1,(Uc&62914560)===0&&(Uc=4194304),e}function bd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Fn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&sy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function sy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function ay(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function ry(e,t){var n=t&-t;return n=(n&42)!==0?1:um(n),(n&(e.suspendedLanes|t))!==0?0:n}function um(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oy(){var e=te.p;return e!==0?e:(e=window.event,e===void 0?32:GS(e.type))}function f_(e,t){var n=te.p;try{return te.p=e,t()}finally{te.p=n}}var us=Math.random().toString(36).slice(2),$e="__reactFiber$"+us,Cn="__reactProps$"+us,no="__reactContainer$"+us,d_="__reactEvents$"+us,F1="__reactListeners$"+us,H1="__reactHandles$"+us,p_="__reactResources$"+us,Ll="__reactMarker$"+us,yu="__reactLoad$"+us;function Wu(e){delete e[$e],delete e[Cn],delete e[F1],delete e[H1]}function Aa(e){var t;if(t=e[$e])return t;for(var n=e.parentNode;n;){if(t=n[no]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nv(e);e!==null;){if(n=e[$e])return n;e=Nv(e)}return t}e=n,n=e.parentNode}return null}function io(e){if(e=e[$e]||e[no]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(X(33))}function Lr(e){var t=e[p_];return t||(t=e[p_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Ll]=!0}function ly(e){e[yu]=void 0}var cy=new Set,uy={};function Ga(e,t){Xr(e,t),Xr(e+"Capture",t)}function Xr(e,t){for(uy[e]=t,e=0;e<t.length;e++)cy.add(t[e])}var V1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),m_={},g_={};function G1(e){return rp.call(g_,e)?!0:rp.call(m_,e)?!1:V1.test(e)?g_[e]=!0:(m_[e]=!0,!1)}var Qt=!1;function __(){var e=Qt;return Qt=!1,e}function Kc(e,t,n){if(G1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Lc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ji(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function k1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function op(e){if(!e._valueTracker){var t=hy(e)?"checked":"value";e._valueTracker=k1(e,t,""+e[t])}}function fy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=hy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var X1=/[\n"\\]/g;function ii(e){return e.replace(X1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ln(t)):e.value!==""+Ln(t)&&(e.value=""+Ln(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?Td(e,Ln(e.value)):Td(e,Ln(t)):n!=null?Td(e,Ln(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Ln(o):e.removeAttribute("name")}function dy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){op(e);return}n=n!=null?""+Ln(n):"",t=t!=null?""+Ln(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),op(e)}function Td(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Or(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ln(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function py(e,t,n){if(t!=null&&(t=""+Ln(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ln(n):""}function my(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(X(92));if(Ko(i)){if(1<i.length)throw Error(X(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ln(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),op(e)}function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var W1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function v_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||W1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function gy(e,t,n){if(t!=null&&typeof t!="object")throw Error(X(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Qt=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(v_(e,s,i),Qt=!0)}else for(var a in t)t.hasOwnProperty(a)&&v_(e,a,t[a])}function fm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qc(e){return Y1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Oi(){}var cp=null;function dm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,Ir=null;function y_(e){var t=io(e);if(t&&(e=t.stateNode)){var n=e[Cn]||null;t:switch(e=t.stateNode,t.type){case"input":if(lp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Cn]||null;if(!s)throw Error(X(90));lp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&fy(i)}break t;case"textarea":py(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}}}var Ed=!1;function _y(e,t,n){if(Ed)return e(t,n);Ed=!0;try{var i=e(t);return i}finally{if(Ed=!1,(Tr!==null||Ir!==null)&&(ah(),Tr&&(t=Tr,e=Ir,Ir=Tr=null,y_(t),e)))for(t=0;t<e.length;t++)y_(e[t])}}function pl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Cn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),up=!1;if(ss)try{mr={},Object.defineProperty(mr,"passive",{get:function(){up=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{up=!1}var mr,Ps=null,pm=null,jc=null;function vy(){if(jc)return jc;var e,t=pm,n=t.length,i,s="value"in Ps?Ps.value:Ps.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return jc=s.slice(e,1<i?1-i:void 0)}function $c(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oc(){return!0}function x_(){return!1}function yn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Oc:x_,this.isPropagationStopped=x_,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),t}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=yn(na),Ol=de({},na,{view:0,detail:0}),Z1=yn(Ol),Ad,wd,Xo,Yu=de({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xo&&(Xo&&e.type==="mousemove"?(Ad=e.screenX-Xo.screenX,wd=e.screenY-Xo.screenY):wd=Ad=0,Xo=e),Ad)},movementY:function(e){return"movementY"in e?e.movementY:wd}}),S_=yn(Yu),J1=de({},Yu,{dataTransfer:0}),K1=yn(J1),Q1=de({},Ol,{relatedTarget:0}),Cd=yn(Q1),j1=de({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=yn(j1),tT=de({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eT=yn(tT),nT=de({},na,{data:0}),M_=yn(nT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aT[e])?!!t[e]:!1}function mm(){return rT}var oT=de({},Ol,{key:function(e){if(e.key){var t=iT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$c(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mm,charCode:function(e){return e.type==="keypress"?$c(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$c(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lT=yn(oT),cT=de({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b_=yn(cT),uT=de({},na,{submitter:0}),hT=yn(uT),fT=de({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mm}),dT=yn(fT),pT=de({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),mT=yn(pT),gT=de({},Yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=yn(gT),vT=de({},na,{newState:0,oldState:0,source:0}),yT=yn(vT),xT=[9,13,27,32],gm=ss&&"CompositionEvent"in window,tl=null;ss&&"documentMode"in document&&(tl=document.documentMode);var ST=ss&&"TextEvent"in window&&!tl,yy=ss&&(!gm||tl&&8<tl&&11>=tl),T_=" ",E_=!1;function xy(e,t){switch(e){case"keyup":return xT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function MT(e,t){switch(e){case"compositionend":return Sy(t);case"keypress":return t.which!==32?null:(E_=!0,T_);case"textInput":return e=t.data,e===T_&&E_?null:e;default:return null}}function bT(e,t){if(Er)return e==="compositionend"||!gm&&xy(e,t)?(e=vy(),jc=pm=Ps=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yy&&t.locale!=="ko"?null:t.data;default:return null}}var TT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!TT[e.type]:t==="textarea"}function My(e,t,n,i){Tr?Ir?Ir.push(i):Ir=[i]:Tr=i,t=Vu(t,"onChange"),0<t.length&&(n=new qu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var el=null,ml=null;function ET(e){_S(e,0)}function Zu(e){var t=Qo(e);if(fy(t))return e}function w_(e,t){if(e==="change")return t}var by=!1;ss&&(ss?(Pc="oninput"in document,Pc||(Rd=document.createElement("div"),Rd.setAttribute("oninput","return;"),Pc=typeof Rd.oninput=="function"),Ic=Pc):Ic=!1,by=Ic&&(!document.documentMode||9<document.documentMode));var Ic,Pc,Rd;function C_(){el&&(el.detachEvent("onpropertychange",Ty),ml=el=null)}function Ty(e){if(e.propertyName==="value"&&Zu(ml)){var t=[];My(t,ml,e,dm(e)),_y(ET,t)}}function AT(e,t,n){e==="focusin"?(C_(),el=t,ml=n,el.attachEvent("onpropertychange",Ty)):e==="focusout"&&C_()}function wT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zu(ml)}function CT(e,t){if(e==="click")return Zu(t)}function RT(e,t){if(e==="input"||e==="change")return Zu(t)}function DT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vn=typeof Object.is=="function"?Object.is:DT;function gl(e,t){if(Vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!rp.call(t,s)||!Vn(e[s],t[s]))return!1}return!0}function hp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function R_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function D_(e,t){var n=R_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=R_(n)}}function Ey(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ey(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ay(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=hp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hp(e.document)}return t}function _m(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var NT=ss&&"documentMode"in document&&11>=document.documentMode,Ar=null,fp=null,nl=null,dp=!1;function N_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dp||Ar==null||Ar!==hp(i)||(i=Ar,"selectionStart"in i&&_m(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nl&&gl(nl,i)||(nl=i,i=Vu(fp,"onSelect"),0<i.length&&(t=new qu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ar)))}function Sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},Dd={},wy={};ss&&(wy=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function ka(e){if(Dd[e])return Dd[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wy)return Dd[e]=t[n];return e}var Cy=ka("animationend"),Ry=ka("animationiteration"),Dy=ka("animationstart"),UT=ka("transitionrun"),LT=ka("transitionstart"),OT=ka("transitioncancel"),Ny=ka("transitionend"),Uy=new Map,pp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pp.push("scrollEnd");function _i(e,t){Uy.set(e,t),Ga(t,[e])}var IT=0;function as(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=gi.identifierPrefix;var n=IT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function U_(e){if(e==null||typeof e=="string")return e;var t=null,n=Gr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function hs(e,t){return e=U_(e),t=U_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Cr=0,vm=0;function Ju(){for(var e=Cr,t=vm=Cr=0;t<e;){var n=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var s=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Ly(n,s,a)}}function Ku(e,t,n,i){ti[Cr++]=e,ti[Cr++]=t,ti[Cr++]=n,ti[Cr++]=i,vm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ym(e,t,n,i){return Ku(e,t,n,i),Su(e)}function Xa(e,t){return Ku(e,null,null,t),Su(e)}function Ly(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Fn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Su(e){if(50<fl)throw fl=0,cu=null,Error(X(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rr={};function PT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(e,t,n,i){return new PT(e,t,n,i)}function xm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ns(e,t){var n=e.alternate;return n===null?(n=En(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oy(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function tu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")xm(i)&&(r=1);else if(typeof i=="string")r=lA(e,n,Bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case ep:return e=En(31,n,t,s),e.elementType=ep,e.lanes=a,e;case Mr:return Ra(n.children,s,a,t);case Qv:r=8,s|=24;break;case jd:return e=En(12,n,t,s|2),e.elementType=jd,e.lanes=a,e;case $d:return e=En(13,n,t,s),e.elementType=$d,e.lanes=a,e;case tp:return e=En(19,n,t,s),e.elementType=tp,e.lanes=a,e;case b1:case np:return e=s|32,e=En(30,n,t,e),e.elementType=np,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Li:r=10;break t;case jv:r=9;break t;case om:r=11;break t;case lm:r=14;break t;case Us:r=16,i=null;break t}r=29,n=Error(X(130,e===null?"null":typeof e,"")),i=null}return t=En(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ra(e,t,n,i){return e=En(7,e,i,t),e.lanes=n,e}function Nd(e,t,n){return e=En(6,e,null,t),e.lanes=n,e}function Iy(e){var t=En(18,null,null,0);return t.stateNode=e,t}function Ud(e,t,n){return t=En(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var L_=new WeakMap;function si(e,t){if(typeof e=="object"&&e!==null){var n=L_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:h_(t)},L_.set(e,t),t)}return{value:e,source:t,stack:h_(t)}}var Dr=[],Nr=0,Mu=null,_l=0,ei=[],ni=0,Qs=null,Ii=1,Pi="";function ts(e,t){Dr[Nr++]=_l,Dr[Nr++]=Mu,Mu=e,_l=t}function Py(e,t,n){ei[ni++]=Ii,ei[ni++]=Pi,ei[ni++]=Qs,Qs=e;var i=Ii;e=Pi;var s=32-Fn(i)-1;i&=~(1<<s),n+=1;var a=32-Fn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ii=1<<32-Fn(t)+s|n<<s|i,Pi=a+e}else Ii=1<<a|n<<s|i,Pi=e}function Qu(e){e.return!==null&&(ts(e,1),Py(e,1,0))}function Sm(e){for(;e===Mu;)Mu=Dr[--Nr],Dr[Nr]=null,_l=Dr[--Nr],Dr[Nr]=null;for(;e===Qs;)Qs=ei[--ni],ei[ni]=null,Pi=ei[--ni],ei[ni]=null,Ii=ei[--ni],ei[ni]=null}function By(e,t){ei[ni++]=Ii,ei[ni++]=Pi,ei[ni++]=Qs,Ii=t.id,Pi=t.overflow,Qs=e}var Ke=null,ve=null,Vt=!1,Gs=null,ai=!1,mp=Error(X(519));function js(e){var t=Error(X(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vl(si(t,e)),mp}function O_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[Cn]=i,n){case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":case"embed":kt("load",t);break;case"video":case"audio":for(n=0;n<Ml.length;n++)kt(Ml[n],t);break;case"source":kt("error",t);break;case"img":case"image":case"link":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"input":kt("invalid",t),dy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":kt("invalid",t);break;case"textarea":kt("invalid",t),my(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||yS(t.textContent,n)?(i.popover!=null&&(kt("beforetoggle",t),kt("toggle",t)),i.onScroll!=null&&kt("scroll",t),i.onScrollEnd!=null&&kt("scrollend",t),i.onClick!=null&&(t.onclick=Oi),t=!0):t=!1,t||js(e,!0)}function bu(e){for(Ke=e.return;Ke;)switch(Ke.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Ke=Ke.return}}function gr(e){if(e!==Ke)return!1;if(!Vt)return bu(e),Vt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$p(e.type,e.memoizedProps)),n=!n),n&&ve&&js(e),bu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=Dv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=Dv(e)}else t===27?(t=ve,ia(e.type)?(e=im,im=null,ve=e):ve=t):ve=Ke?ri(e.stateNode.nextSibling):null;return!0}function La(){ve=Ke=null,Vt=!1}function Ld(){var e=Gs;return e!==null&&(bn===null?bn=e:bn.push.apply(bn,e),Gs=null),e}function vl(e){Gs===null?Gs=[e]:Gs.push(e)}var gp=Hi(null),Wa=null,es=null;function Bs(e,t,n){ye(gp,t._currentValue),t._currentValue=n}function is(e){e._currentValue=gp.current,en(gp)}function eu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function _p(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),eu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(X(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),eu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),eu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Oa(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(X(387));if(r=r.memoizedProps,r!==null){var o=s.type;Vn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===mu.current){if(r=s.alternate,r===null)throw Error(X(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push($r):e=[$r])}s=s.return}return e!==null&&_p(t,e,n,i),t.flags|=262144,e!==null}function Tu(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Wa=e,es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return zy(Wa,e)}function Bc(e,t){return Wa===null&&Ia(e),zy(e,t)}function zy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},es===null){if(e===null)throw Error(X(308));es=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else es=es.next=t;return n}var BT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},zT=ke.unstable_scheduleCallback,FT=ke.unstable_NormalPriority,ze={$$typeof:Li,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mm(){return{controller:new BT,data:new Map,refCount:0}}function Il(e){e.refCount--,e.refCount===0&&zT(FT,function(){e.controller.abort()})}function I_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var jo=null;function HT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var il=null,vp=0,Pa=0,Pr=null;function VT(e,t){if(il===null){var n=il=[];vp=0,Pa=Km(),Pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return vp++,t.then(P_,P_),t}function P_(){if(--vp===0&&(jo=null,il!==null)){Pr!==null&&(Pr.status="fulfilled");var e=il;il=null,Pa=0,Pr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function GT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var B_=Rt.S;Rt.S=function(e,t){if(nS=Bn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&VT(e,t),jo!==null)for(var n=Kr;n!==null;)I_(n,jo),n=n.next;if(n=e.types,n!==null){for(var i=Kr;i!==null;)I_(i,n),i=i.next;if(Pa!==0){i=jo,i===null&&(i=jo=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}B_!==null&&B_(e,t)};var Da=Hi(null);function bm(){var e=Da.current;return e!==null?e:fe.pooledCache}function nu(e,t){t===null?ye(Da,Da.current):ye(Da,t.pool)}function Fy(){var e=bm();return e===null?null:{parent:ze._currentValue,pool:e}}var so=Error(X(460)),Tm=Error(X(474)),ju=Error(X(542)),Eu={then:function(){}};function z_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Oi,Oi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,H_(e),e===void 0&&!("reason"in t)?Error(X(600)):e;default:if(typeof t.status=="string")t.then(Oi,Oi);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(X(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,H_(e),e}throw Na=t,so}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Na=n,so):n}}var Na=null;function F_(){if(Na===null)throw Error(X(459));var e=Na;return Na=null,e}function H_(e){if(e===so||e===ju)throw Error(X(483))}var Br=null,yl=0;function zc(e){var t=yl;return yl+=1,Br===null&&(Br=[]),Hy(Br,e,t)}function Rs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fc(e,t){throw t.$$typeof===M1?Error(X(525)):(e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vy(e){function t(u,_){if(e){var v=u.deletions;v===null?(u.deletions=[_],u.flags|=16):v.push(_)}}function n(u,_){if(!e)return null;for(;_!==null;)t(u,_),_=_.sibling;return null}function i(u){for(var _=new Map;u!==null;)u.key===null?_.set(u.index,u):_.set(u.key,u),u=u.sibling;return _}function s(u,_){return u=ns(u,_),u.index=0,u.sibling=null,u}function a(u,_,v){return u.index=v,e?(v=u.alternate,v!==null?(v=v.index,v<_?(u.flags|=2,_):v):(u.flags|=134217730,_)):(u.flags|=1048576,_)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,_,v,y){return _===null||_.tag!==6?(_=Nd(v,u.mode,y),_.return=u,_):(_=s(_,v),_.return=u,_)}function l(u,_,v,y){var A=v.type;return A===Mr?(u=f(u,_,v.props.children,y,v.key),Rs(u,v),u):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Us&&Ta(A)===_.type)?(_=s(_,v.props),Rs(_,v),_.return=u,_):(_=tu(v.type,v.key,v.props,null,u.mode,y),Rs(_,v),_.return=u,_)}function c(u,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Ud(v,u.mode,y),_.return=u,_):(_=s(_,v.children||[]),_.return=u,_)}function f(u,_,v,y,A){return _===null||_.tag!==7?(_=Ra(v,u.mode,y,A),_.return=u,_):(_=s(_,v),_.return=u,_)}function d(u,_,v){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Nd(""+_,u.mode,v),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Rc:return v=tu(_.type,_.key,_.props,null,u.mode,v),Rs(v,_),v.return=u,v;case Jo:return _=Ud(_,u.mode,v),_.return=u,_;case Us:return _=Ta(_),d(u,_,v)}if(Ko(_)||ko(_))return _=Ra(_,u.mode,v,null),_.return=u,_;if(typeof _.then=="function")return d(u,zc(_),v);if(_.$$typeof===Li)return d(u,Bc(u,_),v);Fc(u,_)}return null}function h(u,_,v,y){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return A!==null?null:o(u,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rc:return v.key===A?l(u,_,v,y):null;case Jo:return v.key===A?c(u,_,v,y):null;case Us:return v=Ta(v),h(u,_,v,y)}if(Ko(v)||ko(v))return A!==null?null:f(u,_,v,y,null);if(typeof v.then=="function")return h(u,_,zc(v),y);if(v.$$typeof===Li)return h(u,_,Bc(u,v),y);Fc(u,v)}return null}function p(u,_,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(v)||null,o(_,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Rc:return u=u.get(y.key===null?v:y.key)||null,l(_,u,y,A);case Jo:return u=u.get(y.key===null?v:y.key)||null,c(_,u,y,A);case Us:return y=Ta(y),p(u,_,v,y,A)}if(Ko(y)||ko(y))return u=u.get(v)||null,f(_,u,y,A,null);if(typeof y.then=="function")return p(u,_,v,zc(y),A);if(y.$$typeof===Li)return p(u,_,v,Bc(_,y),A);Fc(_,y)}return null}function g(u,_,v,y){for(var A=null,C=null,w=_,D=_=0,T=null;w!==null&&D<v.length;D++){w.index>D?(T=w,w=null):T=w.sibling;var b=h(u,w,v[D],y);if(b===null){w===null&&(w=T);break}e&&w&&b.alternate===null&&t(u,w),_=a(b,_,D),C===null?A=b:C.sibling=b,C=b,w=T}if(D===v.length)return n(u,w),Vt&&ts(u,D),A;if(w===null){for(;D<v.length;D++)w=d(u,v[D],y),w!==null&&(_=a(w,_,D),C===null?A=w:C.sibling=w,C=w);return Vt&&ts(u,D),A}for(w=i(w);D<v.length;D++)T=p(w,u,D,v[D],y),T!==null&&(e&&(b=T.alternate,b!==null&&w.delete(b.key===null?D:b.key)),_=a(T,_,D),C===null?A=T:C.sibling=T,C=T);return e&&w.forEach(function(U){return t(u,U)}),Vt&&ts(u,D),A}function x(u,_,v,y){if(v==null)throw Error(X(151));for(var A=null,C=null,w=_,D=_=0,T=null,b=v.next();w!==null&&!b.done;D++,b=v.next()){w.index>D?(T=w,w=null):T=w.sibling;var U=h(u,w,b.value,y);if(U===null){w===null&&(w=T);break}e&&w&&U.alternate===null&&t(u,w),_=a(U,_,D),C===null?A=U:C.sibling=U,C=U,w=T}if(b.done)return n(u,w),Vt&&ts(u,D),A;if(w===null){for(;!b.done;D++,b=v.next())b=d(u,b.value,y),b!==null&&(_=a(b,_,D),C===null?A=b:C.sibling=b,C=b);return Vt&&ts(u,D),A}for(w=i(w);!b.done;D++,b=v.next())b=p(w,u,D,b.value,y),b!==null&&(e&&(T=b.alternate,T!==null&&w.delete(T.key===null?D:T.key)),_=a(b,_,D),C===null?A=b:C.sibling=b,C=b);return e&&w.forEach(function(H){return t(u,H)}),Vt&&ts(u,D),A}function m(u,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Mr&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Rc:t:{for(var A=v.key;_!==null;){if(_.key===A){if(A=v.type,A===Mr){if(_.tag===7){n(u,_.sibling),y=s(_,v.props.children),Rs(y,v),y.return=u,u=y;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Us&&Ta(A)===_.type){n(u,_.sibling),y=s(_,v.props),Rs(y,v),y.return=u,u=y;break t}n(u,_);break}else t(u,_);_=_.sibling}v.type===Mr?(y=Ra(v.props.children,u.mode,y,v.key),Rs(y,v),y.return=u,u=y):(y=tu(v.type,v.key,v.props,null,u.mode,y),Rs(y,v),y.return=u,u=y)}return r(u);case Jo:t:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(u,_.sibling),y=s(_,v.children||[]),y.return=u,u=y;break t}else{n(u,_);break}else t(u,_);_=_.sibling}y=Ud(v,u.mode,y),y.return=u,u=y}return r(u);case Us:return v=Ta(v),m(u,_,v,y)}if(Ko(v))return g(u,_,v,y);if(ko(v)){if(A=ko(v),typeof A!="function")throw Error(X(150));return v=A.call(v),x(u,_,v,y)}if(typeof v.then=="function")return m(u,_,zc(v),y);if(v.$$typeof===Li)return m(u,_,Bc(u,v),y);Fc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,_!==null&&_.tag===6?(n(u,_.sibling),y=s(_,v),y.return=u,u=y):(n(u,_),y=Nd(v,u.mode,y),y.return=u,u=y),r(u)):n(u,_)}return function(u,_,v,y){try{yl=0;var A=m(u,_,v,y);return Br=null,A}catch(w){if(w===so||w===ju)throw w;var C=En(29,w,null,u.mode);return C.lanes=y,C.return=u,C}}}var Ba=Vy(!0),Gy=Vy(!1),Ls=!1;function Em(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ks(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,($t&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Su(e),Ly(e,null,n),t}return Ku(e,i,t,n),Su(e)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ay(e,n)}}function Od(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xp=!1;function al(){if(xp){var e=Pr;if(e!==null)throw e}}function rl(e,t,n,i){xp=!1;var s=e.updateQueue;Ls=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Yt&h)===h:(i&h)===h){h!==0&&h===Pa&&(xp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;h=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,h);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(m,d,h):g,h==null)break t;d=de({},d,h);break t;case 2:Ls=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ea|=r,e.lanes=r,e.memoizedState=d}}function ky(e,t){if(typeof e!="function")throw Error(X(191,e));e.call(t)}function Xy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ky(n[e],t)}var $s=Hi(null),Au=Hi(0);function V_(e,t){e=cs,ye(Au,e),ye($s,t),cs=e|t.baseLanes}function Sp(){ye(Au,cs),ye($s,$s.current)}function Am(){cs=Au.current,en($s),en(Au)}var an=Hi(null),cn=null;function Ws(e){var t=e.alternate;ye(nn,nn.current&1),ye(an,e),cn===null&&(t===null||$s.current!==null||t.memoizedState!==null)&&(cn=e)}function Mp(e){ye(nn,nn.current),ye(an,e),cn===null&&(cn=e)}function Wy(e){e.tag===22?(ye(nn,nn.current),ye(an,e),cn===null&&(cn=e)):qs()}function qs(){ye(nn,nn.current),ye(an,an.current)}function On(e){en(an),cn===e&&(cn=null),en(nn)}var nn=Hi(0);function xl(e,t){ye(an,an.current),ye(nn,t)}function wm(e){en(nn),en(an),cn===e&&(cn=null)}function wu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nm(n)||tg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=0,Pt=null,ue=null,Be=null,Cu=!1,zr=!1,za=!1,Ru=0,Sl=0,Fr=null,kT=0;function Ne(){throw Error(X(321))}function Cm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vn(e[n],t[n]))return!1;return!0}function Rm(e,t,n,i,s,a){return rs=a,Pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?Mx:bx,za=!1,a=n(i,s),za=!1,zr&&(a=Yy(t,n,i,s)),qy(e),a}function qy(e){Rt.H=Du;var t=ue!==null&&ue.next!==null;if(rs=0,Be=ue=Pt=null,Cu=!1,Sl=0,Fr=null,t)throw Error(X(300));e===null||Fe||(e=e.dependencies,e!==null&&Tu(e)&&(Fe=!0))}function Yy(e,t,n,i){Pt=e;var s=0;do{if(zr&&(Fr=null),Sl=0,zr=!1,25<=s)throw Error(X(301));if(s+=1,Be=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Rt.H=QT,a=t(n,i)}while(zr);return a}function XT(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Pt.flags|=1024),t}function Dm(){var e=Ru!==0;return Ru=0,e}function Nm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Um(e){if(Cu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cu=!1}rs=0,Be=ue=Pt=null,zr=!1,Sl=Ru=0,Fr=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Pt.memoizedState=Be=e:Be=Be.next=e,Be}function Ie(){if(ue===null){var e=Pt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Be===null?Pt.memoizedState:Be.next;if(t!==null)Be=t,ue=e;else{if(e===null)throw Pt.alternate===null?Error(X(467)):Error(X(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Be===null?Pt.memoizedState=Be=e:Be=Be.next=e}return Be}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=Sl;return Sl+=1,Fr===null&&(Fr=[]),e=Hy(Fr,e,t),t=Pt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?Mx:bx),e}function th(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===E1)return;if(e.$$typeof===Li)return tn(e)}throw Error(X(438,String(e)))}function Lm(e){var t=null,n=Pt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Pt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=$u(),Pt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=T1;return t.index++,n}function os(e,t){return typeof t=="function"?t(e):t}function iu(e){var t=Ie();return Om(t,ue,e)}function Om(e,t,n){var i=e.queue;if(i===null)throw Error(X(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Yt&d)===d:(rs&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Pa&&(f=!0);else if((rs&h)===h){c=c.next,h===Pa&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Pt.lanes|=h,ea|=h;d=c.action,za&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Pt.lanes|=d,ea|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Vn(a,e.memoizedState)&&(Fe=!0,f&&(n=Pr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Id(e){var t=Ie(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Vn(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Zy(e,t,n){var i=Pt,s=Ie(),a=Vt;if(a){if(n===void 0)throw Error(X(407));n=n()}else n=t();var r=!Vn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,Fe=!0),s=s.queue,Im(Qy.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Be!==null&&(Be.memoizedState.tag&1)!==0,qr(e?9:8,{destroy:void 0},Ky.bind(null,i,s,n,t),null),e){if(i.flags|=2048,fe===null)throw Error(X(349));a||(rs&127)!==0||Jy(i,t,n)}return n}function Jy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pt.updateQueue,t===null?(t=$u(),Pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ky(e,t,n,i){t.value=n,t.getSnapshot=i,jy(t)&&$y(e)}function Qy(e,t,n){return n(function(){jy(t)&&$y(e)})}function jy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vn(e,n)}catch{return!0}}function $y(e){var t=Xa(e,2);t!==null&&An(t,e,2)}function bp(e){var t=vn();if(typeof e=="function"){var n=e;if(e=n(),za){Is(!0);try{n()}finally{Is(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function tx(e,t,n,i){return e.baseState=n,Om(e,ue,typeof i=="function"?i:os)}function WT(e,t,n,i,s){if(nh(e))throw Error(X(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Rt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,ex(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ex(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Rt.T,r={};r.types=a!==null?a.types:null,Rt.T=r;try{var o=n(s,i),l=Rt.S;l!==null&&l(r,o),G_(e,t,o)}catch(c){Tp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Rt.T=a}}else try{a=n(s,i),G_(e,t,a)}catch(c){Tp(e,t,c)}}function G_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){k_(e,t,i)},function(i){return Tp(e,t,i)}):k_(e,t,n)}function k_(e,t,n){t.status="fulfilled",t.value=n,nx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ex(e,n)))}function Tp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,nx(t),t=t.next;while(t!==i)}e.action=null}function nx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ix(e,t){return t}function X_(e,t){if(Vt){var n=fe.formState;if(n!==null){t:{var i=Pt;if(Vt){if(ve){e:{for(var s=ve,a=ai;s.nodeType!==8;){if(!a){s=null;break e}if(s=ri(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ve=ri(s.nextSibling),i=s.data==="F!";break t}}js(i)}i=!1}i&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ix,lastRenderedState:t},n.queue=i,n=yx.bind(null,Pt,i),i.dispatch=n,i=bp(!1),a=Fm.bind(null,Pt,!1,i.queue),i=vn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=WT.bind(null,Pt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function W_(e){var t=Ie();return sx(t,ue,e)}function sx(e,t,n){if(t=Om(e,t,ix)[0],e=iu(os)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Pl(t)}catch(r){throw r===so?ju:r}else i=t;t=Ie();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Pt.flags|=2048,qr(9,{destroy:void 0},qT.bind(null,s,n),null)),[i,a,e]}function qT(e,t){e.action=t}function q_(e){var t=Ie(),n=ue;if(n!==null)return sx(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function qr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Pt.updateQueue,t===null&&(t=$u(),Pt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function ax(){return Ie().memoizedState}function su(e,t,n,i){var s=vn();Pt.flags|=e,s.memoizedState=qr(1|t,{destroy:void 0},n,i===void 0?null:i)}function eh(e,t,n,i){var s=Ie();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&Cm(i,ue.memoizedState.deps)?s.memoizedState=qr(t,a,n,i):(Pt.flags|=e,s.memoizedState=qr(1|t,a,n,i))}function Y_(e,t){su(8390656,8,e,t)}function Im(e,t){eh(2048,8,e,t)}function YT(e){Pt.flags|=4;var t=Pt.updateQueue;if(t===null)t=$u(),Pt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rx(e){var t=Ie().memoizedState;return YT({ref:t,nextImpl:e}),function(){if(($t&2)!==0)throw Error(X(440));return t.impl.apply(void 0,arguments)}}function ox(e,t){return eh(4,2,e,t)}function lx(e,t){return eh(4,4,e,t)}function cx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ux(e,t,n){n=n!=null?n.concat([e]):null,eh(4,4,cx.bind(null,t,e),n)}function Pm(){}function hx(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Cm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function fx(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Cm(t,i[1]))return i[0];if(i=e(),za){Is(!0);try{e()}finally{Is(!1)}}return n.memoizedState=[i,t],i}function Bm(e,t,n){return n===void 0||(rs&1073741824)!==0&&(Yt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sS(),Pt.lanes|=e,ea|=e,n)}function dx(e,t,n,i){return Vn(n,t)?n:$s.current!==null?(e=Bm(e,n,i),Vn(e,t)||(Fe=!0),e):(rs&106)===0||(rs&1073741824)!==0&&(Yt&261930)===0?(Fe=!0,e.memoizedState=n):(e=sS(),Pt.lanes|=e,ea|=e,t)}function px(e,t,n,i,s){var a=te.p;te.p=a!==0&&8>a?a:8;var r=Rt.T,o={};o.types=r!==null?r.types:null,Rt.T=o,Fm(e,!1,t,n);try{var l=s(),c=Rt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=GT(l,i);ol(e,t,f,Hn(e))}else ol(e,t,i,Hn(e))}catch(d){ol(e,t,{then:function(){},status:"rejected",reason:d},Hn())}finally{te.p=a,r!==null&&o.types!==null&&(r.types=o.types),Rt.T=r}}function ZT(){}function Ep(e,t,n,i){if(e.tag!==5)throw Error(X(476));var s=mx(e).queue;px(e,s,t,Ca,n===null?ZT:function(){return gx(e),n(i)})}function mx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ca,baseState:Ca,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:Ca},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gx(e){var t=mx(e);t.next===null&&(t=e.alternate.memoizedState),ol(e,t.next.queue,{},Hn())}function zm(){return tn($r)}function _x(){return Ie().memoizedState}function vx(){return Ie().memoizedState}function JT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=ks(n);var i=Xs(t,e,n);i!==null&&(An(i,t,n),sl(i,t,n)),t={cache:Mm()},e.payload=t;return}t=t.return}}function KT(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},nh(e)?xx(t,n):(n=ym(e,t,n,i),n!==null&&(An(n,e,i),Sx(n,t,i)))}function yx(e,t,n){var i=Hn();ol(e,t,n,i)}function ol(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(nh(e))xx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Vn(o,r))return Ku(e,t,s,0),fe===null&&Ju(),!1}catch{}if(n=ym(e,t,s,i),n!==null)return An(n,e,i),Sx(n,t,i),!0}return!1}function Fm(e,t,n,i){if(i={lane:2,revertLane:Km(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},nh(e)){if(t)throw Error(X(479))}else t=ym(e,n,i,2),t!==null&&An(t,e,2)}function nh(e){var t=e.alternate;return e===Pt||t!==null&&t===Pt}function xx(e,t){zr=Cu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ay(e,n)}}var Du={readContext:tn,use:th,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne,useEffectEvent:Ne},Mx={readContext:tn,use:th,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:Y_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,su(4194308,4,cx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return su(4194308,4,e,t)},useInsertionEffect:function(e,t){su(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var i=e();if(za){Is(!0);try{e()}finally{Is(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vn();if(n!==void 0){var s=n(t);if(za){Is(!0);try{n(t)}finally{Is(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=KT.bind(null,Pt,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=bp(e);var t=e.queue,n=yx.bind(null,Pt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Pm,useDeferredValue:function(e,t){var n=vn();return Bm(n,e,t)},useTransition:function(){var e=bp(!1);return e=px.bind(null,Pt,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Pt,s=vn();if(Vt){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),fe===null)throw Error(X(349));(Yt&127)!==0||Jy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Y_(Qy.bind(null,i,a,e),[e]),i.flags|=2048,qr(9,{destroy:void 0},Ky.bind(null,i,a,n,t),null),n},useId:function(){var e=vn(),t=fe.identifierPrefix;if(Vt){var n=Pi,i=Ii;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ru++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=kT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zm,useFormState:X_,useActionState:X_,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fm.bind(null,Pt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lm,useCacheRefresh:function(){return vn().memoizedState=JT.bind(null,Pt)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if(($t&2)!==0)throw Error(X(440));return n.impl.apply(void 0,arguments)}}},bx={readContext:tn,use:th,useCallback:hx,useContext:tn,useEffect:Im,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:fx,useReducer:iu,useRef:ax,useState:function(){return iu(os)},useDebugValue:Pm,useDeferredValue:function(e,t){var n=Ie();return dx(n,ue.memoizedState,e,t)},useTransition:function(){var e=iu(os)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Zy,useId:_x,useHostTransitionStatus:zm,useFormState:W_,useActionState:W_,useOptimistic:function(e,t){var n=Ie();return tx(n,ue,e,t)},useMemoCache:Lm,useCacheRefresh:vx,useEffectEvent:rx},QT={readContext:tn,use:th,useCallback:hx,useContext:tn,useEffect:Im,useImperativeHandle:ux,useInsertionEffect:ox,useLayoutEffect:lx,useMemo:fx,useReducer:Id,useRef:ax,useState:function(){return Id(os)},useDebugValue:Pm,useDeferredValue:function(e,t){var n=Ie();return ue===null?Bm(n,e,t):dx(n,ue.memoizedState,e,t)},useTransition:function(){var e=Id(os)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Zy,useId:_x,useHostTransitionStatus:zm,useFormState:q_,useActionState:q_,useOptimistic:function(e,t){var n=Ie();return ue!==null?tx(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Lm,useCacheRefresh:vx,useEffectEvent:rx};function Pd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ap={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=ks(i);s.payload=t,n!=null&&(s.callback=n),t=Xs(e,s,i),t!==null&&(An(t,e,i),sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=ks(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Xs(e,s,i),t!==null&&(An(t,e,i),sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=ks(n);i.tag=2,t!=null&&(i.callback=t),t=Xs(e,i,n),t!==null&&(An(t,e,n),sl(t,e,n))}};function Z_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!gl(n,i)||!gl(s,a):!0}function J_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ap.enqueueReplaceState(t,t.state,null)}function Fa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=de({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Tx(e){xu(e)}function Ex(e){console.error(e)}function Ax(e){xu(e)}function Nu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function K_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function wp(e,t,n){return n=ks(n),n.tag=3,n.payload={element:null},n.callback=function(){Nu(e,t)},n}function wx(e){return e=ks(e),e.tag=3,e}function Cx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){K_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){K_(t,n,i),typeof s!="function"&&(Ys===null?Ys=new Set([this]):Ys.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function jT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Oa(t,n,s,!0),n=an.current,n!==null){switch(n.tag){case 31:case 13:case 19:return cn===null?Fu():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Eu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),kd(e,i,s)),!1;case 22:return n.flags|=65536,i===Eu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),kd(e,i,s)),!1}throw Error(X(435,n.tag))}return kd(e,i,s),Fu(),!1}if(Vt)return t=an.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==mp&&(e=Error(X(422),{cause:i}),vl(si(e,n)))):(i!==mp&&(t=Error(X(423),{cause:i}),vl(si(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=si(i,n),s=wp(e.stateNode,i,s),Od(e,s),Ue!==4&&(Ue=2)),!1;var a=Error(X(520),{cause:i});if(a=si(a,n),hl===null?hl=[a]:hl.push(a),Ue!==4&&(Ue=2),t===null)return!0;i=si(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=wp(n.stateNode,i,e),Od(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ys===null||!Ys.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=wx(s),Cx(s,e,n,i),Od(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Hm=Error(X(461)),Fe=!1;function Ve(e,t,n,i){t.child=e===null?Gy(t,null,n,i):Ba(t,e.child,n,i)}function Q_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ia(t),i=Rm(e,t,n,r,a,s),o=Dm(),e!==null&&!Fe?(Nm(e,t,s),ls(e,t,s)):(Vt&&o&&Qu(t),t.flags|=1,Ve(e,t,i,s),t.child)}function j_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!xm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rx(e,t,a,i,s)):(e=tu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Gm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:gl,n(r,i)&&e.ref===t.ref)return ls(e,t,s)}return t.flags|=1,e=ns(a,i),e.ref=t.ref,e.return=t,t.child=e}function Rx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(gl(a,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=a,Gm(e,s))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,ls(e,t,s)}return Cp(e,t,n,i,s)}function Dx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return $_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&nu(t,a!==null?a.cachePool:null),a!==null?V_(t,a):Sp(),Wy(t);else return i=t.lanes=536870912,$_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(nu(t,a.cachePool),V_(t,a),qs(),t.memoizedState=null):(e!==null&&nu(t,null),Sp(),qs());return Ve(e,t,s,n),t.child}function ll(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $_(e,t,n,i,s){var a=bm();return a=a===null?null:{parent:ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&nu(t,null),Sp(),Wy(t),e!==null&&Oa(e,t,i,!0),t.childLanes=s,null}function au(e,t){return t=ih({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tv(e,t,n){return Ba(t,e.child,null,n),e=au(t,t.pendingProps),e.flags|=2,On(t),t.memoizedState=null,e}function $T(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Vt){if(i.mode==="hidden")return e=au(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},ll(null,e);if(Mp(t),(e=ve)?(e=DS(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qs!==null?{id:Ii,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},n=Iy(e),n.return=t,t.child=n,Ke=t,ve=null)):e=null,e===null)throw js(t);return t.lanes=536870912,null}return au(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Mp(t),s)if(t.flags&256)t.flags&=-257,t=tv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(X(558));else if(Fe||Oa(e,t,n,!1),s=(n&e.childLanes)!==0,Fe||s){if($s.current===null){if(i=fe,i!==null&&(r=ry(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Xa(e,r),An(i,e,r),Hm;Fu()}t=tv(e,t,n)}else e=a.treeContext,ve=ri(r.nextSibling),Ke=t,Vt=!0,Gs=null,ai=!1,e!==null&&By(t,e),t=au(t,i),t.flags|=134221824;return t}return e=ns(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(X(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cp(e,t,n,i,s){return Ia(t),n=Rm(e,t,n,i,void 0,s),i=Dm(),e!==null&&!Fe?(Nm(e,t,s),ls(e,t,s)):(Vt&&i&&Qu(t),t.flags|=1,Ve(e,t,n,s),t.child)}function ev(e,t,n,i,s,a){return Ia(t),t.updateQueue=null,n=Yy(t,i,n,s),qy(e),i=Dm(),e!==null&&!Fe?(Nm(e,t,a),ls(e,t,a)):(Vt&&i&&Qu(t),t.flags|=1,Ve(e,t,n,a),t.child)}function nv(e,t,n,i,s){if(Ia(t),t.stateNode===null){var a=Rr,r=n.contextType;typeof r=="object"&&r!==null&&(a=tn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ap,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Em(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?tn(r):Rr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Pd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Ap.enqueueReplaceState(a,a.state,null),rl(t,i,a,s),al(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Fa(n,o);a.props=l;var c=a.context,f=n.contextType;r=Rr,typeof f=="object"&&f!==null&&(r=tn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&J_(t,a,i,r),Ls=!1;var h=t.memoizedState;a.state=h,rl(t,i,a,s),al(),c=t.memoizedState,o||h!==c||Ls?(typeof d=="function"&&(Pd(t,n,d,i),c=t.memoizedState),(l=Ls||Z_(t,n,l,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,yp(e,t),r=t.memoizedProps,f=Fa(n,r),a.props=f,d=t.pendingProps,h=a.context,c=n.contextType,l=Rr,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&J_(t,a,i,l),Ls=!1,h=t.memoizedState,a.state=h,rl(t,i,a,s),al();var p=t.memoizedState;r!==d||h!==p||Ls||e!==null&&e.dependencies!==null&&Tu(e.dependencies)?(typeof o=="function"&&(Pd(t,n,o,i),p=t.memoizedState),(f=Ls||Z_(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&Tu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,vr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ba(t,e.child,null,s),t.child=Ba(t,null,n,s)):Ve(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ls(e,t,s),e}function iv(e,t,n,i){return La(),t.flags|=256,Ve(e,t,n,i),t.child}var Rp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dp(e){return{baseLanes:e,cachePool:Fy()}}function Np(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function Nx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Vt){if(s?Ws(t):qs(),(e=ve)?(e=DS(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qs!==null?{id:Ii,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},n=Iy(e),n.return=t,t.child=n,Ke=t,ve=null)):e=null,e===null)throw js(t);return tg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(qs(),s=t.mode,a=ih({mode:"hidden",children:a},s),i=Ra(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Dp(n),i.childLanes=Np(e,r,n),t.memoizedState=Rp,ll(null,i)):(Ws(t),Vm(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return tE(e,t,a,r,i,l,o,n)}return s?(qs(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ns(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ns(l,s):(s=Ra(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,ll(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Dp(n):(a=s.cachePool,a!==null?(o=ze._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Fy(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Np(e,r,n),t.memoizedState=Rp,ll(e.child,i)):(Ws(t),n=e.child,e=n.sibling,n=ns(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Vm(e,t){return t=ih({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ih(e,t){return e=En(22,e,null,t),e.lanes=0,e}function Hc(e,t,n){return Ba(t,e.child,null,n),e=Vm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ws(t),t.flags&=-257,Hc(e,t,o)):t.memoizedState!==null?(qs(),t.child=e.child,t.flags|=128,null):(qs(),a=s.fallback,r=t.mode,s=ih({mode:"visible",children:s.children},r),a=Ra(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Ba(t,e.child,null,o),s=t.child,s.memoizedState=Dp(o),s.childLanes=Np(e,i,o),t.memoizedState=Rp,ll(null,s));if(Ws(t),tg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(X(419)),s.stack="",s.digest=i,vl({value:s,source:null,stack:null})),Hc(e,t,o)}if(Fe||Oa(e,t,o,!1),i=(o&e.childLanes)!==0,Fe||i){if($s.current!==null)return Hc(e,t,o);if(i=fe,i!==null&&(s=ry(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Xa(e,s),An(i,e,s),Hm;return nm(a)||Fu(),Hc(e,t,o)}return nm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ve=ri(a.nextSibling),Ke=t,Vt=!0,Gs=null,ai=!1,e!==null&&By(t,e),t=Vm(t,s.children),t.flags|=134221824,t)}function sv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),eu(e.return,t,n)}function av(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&wu(n)===null&&(t=e),e=e.sibling}return t}function Vc(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Bd(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Up(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=nn.current;if(t.flags&128)return xl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,xl(t,r),s==="backwards"&&e!==null?(Bd(e),Ve(e,t,i,n),Bd(e)):Ve(e,t,i,n),i=Vt?_l:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sv(e,n,t);else if(e.tag===19)sv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=av(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Bd(t)),Vc(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&wu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Vc(t,!0,n,null,a,i);break;case"together":Vc(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=av(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Vc(t,!1,s,n,a,i)}return t.child}function rv(e,t,n){var i=t.pendingProps;return Bs(t,t.type,i.value),Ve(e,t,i.children,n),t.child}function ls(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=ns(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ns(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tu(e)))}function eE(e,t,n){switch(t.tag){case 3:gu(t,t.stateNode.containerInfo),Bs(t,ze,e.memoizedState.cache),La();break;case 27:case 5:ap(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:Bs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ws(t),t.flags|=128,null;i=Oa(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Nx(e,t,n):(Ws(t),e=ls(e,t,n),e!==null?e.sibling:null)}Ws(t);break;case 19:if(t.flags&128)return Up(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Oa(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Up(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xl(t,nn.current),i)break;return null;case 22:return t.lanes=0,Dx(e,t,n,t.pendingProps);case 24:Bs(t,ze,e.memoizedState.cache)}return ls(e,t,n)}function Ux(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Gm(e,n)&&(t.flags&128)===0)return Fe=!1,eE(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Vt&&(t.flags&1048576)!==0&&Py(t,_l,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")xm(e)?(i=Fa(e,i),t.tag=1,t=nv(null,t,e,i,n)):(t.tag=0,t=Cp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===om){t.tag=11,t=Q_(null,t,e,i,n);break t}else if(s===lm){t.tag=14,t=j_(null,t,e,i,n);break t}else if(s===Li){t.tag=10,t.type=e,t=rv(null,t,n);break t}}throw t=ip(e)||e,Error(X(306,t,""))}}return t;case 0:return Cp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Fa(i,t.pendingProps),nv(e,t,i,s,n);case 3:t:{if(gu(t,t.stateNode.containerInfo),e===null)throw Error(X(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,yp(e,t),rl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Bs(t,ze,i),i!==a.cache&&_p(t,[ze],n,!0),al(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=iv(e,t,i,n);break t}else if(i!==s){s=si(Error(X(424)),t),vl(s),t=iv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=ri(e.firstChild),Ke=t,Vt=!0,Gs=null,ai=!0,n=Gy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(La(),i===s){t=ls(e,t,n);break t}Ve(e,t,i,n)}t=t.child}return t;case 26:return vr(e,t),e===null?(n=Lv(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vt||(t.stateNode=SS(t.type,t.pendingProps,Vs.current,t)):t.memoizedState=Lv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ap(t),e===null&&Vt&&(i=t.stateNode=NS(t.type,t.pendingProps,Vs.current),Ke=t,ai=!0,s=ve,ia(t.type)?(im=s,ve=ri(i.firstChild)):ve=s),Ve(e,t,t.pendingProps.children,n),vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vt&&((s=i=ve)&&(i=YE(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,Ke=t,ve=ri(i.firstChild),ai=!1,s=!0):s=!1),s||js(t)),ap(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,$p(s,a)?i=null:r!==null&&$p(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Rm(e,t,XT,null,null,n),$r._currentValue=s),vr(e,t),Ve(e,t,i,n),t.child;case 6:return e===null&&Vt&&((e=n=ve)&&(n=ZE(n,t.pendingProps,ai),n!==null?(t.stateNode=n,Ke=t,ve=null,e=!0):e=!1),e||js(t)),null;case 13:return Nx(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ba(t,null,i,n):Ve(e,t,i,n),t.child;case 11:return Q_(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,vr(e,t),Ve(e,t,i,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return rv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Ia(t),s=tn(s),i=i(s),t.flags|=1,Ve(e,t,i,n),t.child;case 14:return j_(e,t,t.type,t.pendingProps,n);case 15:return Rx(e,t,t.type,t.pendingProps,n);case 19:return Up(e,t,n);case 31:return $T(e,t,n);case 22:return Dx(e,t,n,t.pendingProps);case 24:return Ia(t),i=tn(ze),e===null?(s=bm(),s===null&&(s=fe,a=Mm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Em(t),Bs(t,ze,s)):((e.lanes&n)!==0&&(yp(e,t),rl(t,null,null,n),al()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Bs(t,ze,i)):(i=a.cache,Bs(t,ze,i),i!==s.cache&&_p(t,[ze],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Vt&&Qu(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:vr(e,t),Ve(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(X(156,t.tag))}function $i(e){e.flags|=4}function zd(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Pv(t,i):Pv(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(oS())e.flags|=8192;else throw Na=Eu,Tm}else e.flags&=-16777217}function ov(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!IS(t))if(oS())e.flags|=8192;else throw Na=Eu,Tm}function Gc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?iy():536870912,e.lanes|=t,Yr|=t)}function Wo(e,t){if(!Vt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function nE(e,t,n){var i=t.pendingProps;switch(Sm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),is(ze),kr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gr(t)?$i(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ld())),_e(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?($i(t),a!==null?(_e(t),ov(t,a)):(_e(t),zd(t,s,null,i,n))):a?a!==e.memoizedState?($i(t),_e(t),ov(t,a)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&$i(t),_e(t),zd(t,s,e,i,n)),null;case 27:if(_u(t),n=Vs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(X(166));return _e(t),t.subtreeFlags&=-33554433,null}e=Bi.current,gr(t)?O_(t,e):(e=NS(s,i,n),t.stateNode=e,$i(t))}return _e(t),t.subtreeFlags&=-33554433,null;case 5:if(_u(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(X(166));return _e(t),t.subtreeFlags&=-33554433,null}if(a=Bi.current,gr(t))O_(t,a);else{var r=Tl(Vs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[$e]=t,a[Cn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&$i(t)}}return _e(t),t.subtreeFlags&=-33554433,zd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(X(166));if(e=Vs.current,gr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Ke,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||yS(e.nodeValue,n)),e||js(t,!0)}else e=Tl(e).createTextNode(i),e[$e]=t,t.stateNode=e}return _e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=gr(t),n!==null){if(e===null){if(!i)throw Error(X(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(557));e[$e]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else n=Ld(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(On(t),t):(On(t),null);if((t.flags&128)!==0)throw Error(X(558))}return _e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=gr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(X(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(X(317));s[$e]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),s=!1}else s=Ld(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(On(t),t):(On(t),null)}return On(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Gc(t,t.updateQueue),_e(t),null);case 4:return kr(),e===null&&Qm(t.stateNode.containerInfo),t.flags|=67108864,_e(t),null;case 10:return is(t.type),_e(t),null;case 19:if(wm(t),i=t.memoizedState,i===null)return _e(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Wo(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=wu(e),a!==null){for(t.flags|=128,Wo(i,!1),e=a.updateQueue,t.updateQueue=e,Gc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oy(n,e),n=n.sibling;return xl(t,nn.current&1|2),Vt&&ts(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bn()>Bu&&(t.flags|=128,s=!0,Wo(i,!1),t.lanes=4194304)}else{if(!s)if(e=wu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Gc(t,e),Wo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Vt)return _e(t),null}else 2*Bn()-i.renderingStartTime>Bu&&n!==536870912&&(t.flags|=128,s=!0,Wo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bn(),e.sibling=null,a=nn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Vt?xl(t,a):(n=a,ye(an,t),ye(nn,n),cn===null&&(cn=t)),Vt&&ts(t,i.treeForkCount),e}return _e(t),null;case 22:case 23:return On(t),Am(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),n=t.updateQueue,n!==null&&Gc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(Da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),is(ze),_e(t),null;case 25:return null;case 30:return t.flags|=33554432,_e(t),null}throw Error(X(156,t.tag))}function iE(e,t){switch(Sm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(ze),kr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _u(t),null;case 31:if(t.memoizedState!==null){if(On(t),t.alternate===null)throw Error(X(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(On(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return wm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return kr(),null;case 10:return is(t.type),null;case 22:case 23:return On(t),Am(),e!==null&&en(Da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return is(ze),null;case 25:return null;default:return null}}function Lx(e,t){switch(Sm(t),t.tag){case 3:is(ze),kr();break;case 26:case 27:case 5:_u(t);break;case 4:kr();break;case 31:t.memoizedState!==null&&On(t);break;case 13:On(t);break;case 19:wm(t);break;case 10:is(t.type);break;case 22:case 23:On(t),Am(),e!==null&&en(Da);break;case 24:is(ze)}}function Bl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function ta(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){oe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){oe(t,t.return,f)}}function Ox(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xy(t,n)}catch(i){oe(e,e.return,i)}}}function Ix(e,t,n){n.props=Fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function Ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=as(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=ES(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Gn(e);wn(e.child,!1,WE,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){oe(e,t,o)}}function je(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function Uu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)RS(e.stateNode,t[n])}function lv(e){for(var t=e.return;t!==null&&(Xm(t)&&RS(e.stateNode,t.stateNode),!km(t));)t=t.return}function cl(e){for(var t=e.return;t!==null&&(Xm(t)&&qE(e.stateNode,t.stateNode),!km(t));)t=t.return}function km(e){return e.tag===5||e.tag===3||e.tag===27}function Xm(e){return e&&e.tag===7&&e.stateNode!==null}function Lp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function Fd(e,t,n){try{var i=e.stateNode;wE(i,e.type,n,t),i[Cn]=t}catch(s){oe(e,e.return,s)}}function Px(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Hd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Op(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi)),Uu(e,i),Qt=!0;else if(s!==4&&(s===27&&(Uu(e,i),i=null,ia(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Op(e,t,n,i),e=e.sibling;e!==null;)Op(e,t,n,i),e=e.sibling}function Lu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Uu(e,i),Qt=!0;else if(s!==4&&(s===27&&(Uu(e,i),i=null,ia(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Lu(e,t,n,i),e=e.sibling;e!==null;)Lu(e,t,n,i),e=e.sibling}function Bx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);sn(t,i,n),t[$e]=e,t[Cn]=n}catch(a){oe(e,e.return,a)}}var Ou=!1,In=null;function cv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ou=!0)}var Ui=null;function uv(){var e=Ui;return Ui=null,e}var Tn=0;function ao(e,t,n,i,s){return Tn=0,zx(e.child,t,n,i,s)}function zx(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=tm(r);i.push(o),o.view&&(a=!0)}else a||tm(r).view&&(a=!0);Ou=!0,MS(r,Tn===0?t:t+"_"+Tn,n),Tn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||zx(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Fi(e,t){for(;e!==null;)e.tag===5?bS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Fi(e.child,t)),e=e.sibling}function ru(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ru(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(X(544));var n=t.name;t=hs(t.default,t.share),t!=="none"&&(ao(e,n,t,null,!1)||Fi(e.child,!1))}e=e.sibling}}function Ip(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=as(i,n),a=hs(i.default,n.paired?i.share:i.enter);a!=="none"?ao(e,s,a,null,!1)?(ru(e),n.paired||t||Zr(e,i.onEnter)):Fi(e.child,!1):ru(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ip(e,t),e=e.sibling;else ru(e)}function Pp(e){if(In!==null&&In.size!==0){var t=In;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=hs(n.default,n.share);if(a!=="none"&&(ao(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Zr(e,n.onShare)):Fi(e.child,!1)),t.delete(i),t.size===0)break}}}Pp(e)}e=e.sibling}}}function Bp(e){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode),i=In!==null?In.get(n):void 0,s=hs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(ao(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,In.delete(n),Zr(e,t.onShare)):Zr(e,t.onExit):Fi(e.child,!1)),In!==null&&Pp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bp(e),e=e.sibling;else In!==null&&Pp(e)}function Fx(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode);t=hs(t.default,t.update),e.flags&=-5,t!=="none"&&ao(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Fx(e);e=e.sibling}}function zp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Fi(e.child,!1))}zp(e)}e=e.sibling}}function ou(e){if(e.tag===30)e.stateNode.paired=null,Fi(e.child,!1),zp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ou(e),e=e.sibling;else zp(e)}function Hx(e){for(e=e.child;e!==null;)e.tag===30?Fi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Hx(e),e=e.sibling}function Wm(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Tn<a.length){var c=a[Tn],f=tm(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&MS(l,Tn===0?n:n+"_"+Tn,s),o&&(e.flags&4)!==0||(Ui===null&&(Ui=[]),Ui.push(l,Tn===0?i:i+"_"+Tn,t.memoizedProps)),Tn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Wm(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Vx(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=as(n,i),a=hs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(LE)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Tn=0,s=Wm(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Zr(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Vx(e,t);e=e.sibling}}var Ye=!1,se=!1,Ci=!1,Vd=!1,hv=typeof WeakSet=="function"?WeakSet:Set,Ze=null,Ri=!1,$o=!1,Iu=!1,Fp=!1;function sE(e,t,n){if(e=e.containerInfo,Qp=to,e=Ay(e),_m(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var g;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(jp={focusedElem:e,selectionRange:i},to=!1,n=(n&335544064)===n,Ze=t,t=n?9270:1024;Ze!==null;){if(e=Ze,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Bp(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&cv(e),kc(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Bp(i),kc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&cv(e),kc(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Ze=i):(n&&Fx(e),kc(n))}}In=null}function kc(e){for(;Ze!==null;){var t=Ze,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=Fa(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){oe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)em(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":em(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=as(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=hs(s.default,s.update),s!=="none"&&ao(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(X(163))}if(i=t.sibling,i!==null){i.return=t.return,Ze=i;break}Ze=t.return}}function Gx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n),i&4&&Bl(5,n);break;case 1:if(Di(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var s=Fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}i&64&&Ox(n),i&512&&Ni(n,n.return);break;case 3:if(Di(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xy(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&i&4&&Bx(n);case 26:case 5:Di(e,n),t===null&&i&4&&Lp(n),i&512&&Ni(n,n.return);break;case 12:Di(e,n);break;case 31:Di(e,n),i&4&&qx(e,n);break;case 13:Di(e,n),i&4&&Yx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gE.bind(null,n),JE(e,n))));break;case 22:if(i=n.memoizedState!==null||Ye,!i){var a=t!==null&&t.memoizedState!==null||se;t=Ye,s=se,Ye=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),di(e,n,i)):Di(e,n),Ye=t,se=s}break;case 30:Di(e,n),i&512&&Ni(n,n.return);break;case 7:i&512&&Ni(n,n.return);default:Di(e,n)}}function Hp(e,t){for(e=e.child;e!==null;)kx(e,t),e=e.sibling}function kx(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){oe(e,e.return,l)}Vp(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Qt=!0}catch(l){oe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?wv(o,!0):wv(e.stateNode,!1)}catch(l){oe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Hp(e,t);break;default:Hp(e,t)}}function Vp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:kx(n,i);break t;case 22:n.memoizedState===null&&Vp(n,i);break t;default:Vp(n,i)}}e=e.sibling}}function Xx(e){var t=e.alternate;t!==null&&(e.alternate=null,Xx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Mn=!1;function fi(e,t,n){for(n=n.child;n!==null;)Wx(e,t,n),n=n.sibling}function Wx(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 26:se||je(n,t),fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||je(n,t),cl(n);var i=Ae,s=Mn;ia(n.type)&&(Ae=n.stateNode,Mn=!1),fi(e,t,n),US(n.stateNode,n.type,n.memoizedProps),Ae=i,Mn=s;break;case 5:se||je(n,t),cl(n);case 6:if(n.tag===6&&cl(n),i=Ae,s=Mn,Ae=null,fi(e,t,n),Ae=i,Mn=s,Ae!==null)if(Mn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),Qt=!0}catch(a){oe(n,t,a)}else try{Ae.removeChild(n.stateNode),Qt=!0}catch(a){oe(n,t,a)}break;case 18:Ae!==null&&(Mn?(e=Ae,Av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),eo(e)):Av(Ae,n.stateNode));break;case 4:i=Ae,s=Mn,Ae=n.stateNode.containerInfo,Mn=!0,fi(e,t,n),Ae=i,Mn=s;break;case 0:case 11:case 14:case 15:ta(2,n,t),se||ta(4,n,t),fi(e,t,n);break;case 1:se||(je(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ix(n,t,i)),fi(e,t,n);break;case 21:fi(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,fi(e,t,n),se=i;break;case 30:je(n,t),fi(e,t,n);break;case 7:se||je(n,t),fi(e,t,n);break;default:fi(e,t,n)}}function qx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(n){oe(t,t.return,n)}}}function Yx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(n){oe(t,t.return,n)}}function aE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new hv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new hv),t;default:throw Error(X(435,e.tag))}}function Xc(e,t){var n=aE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=_E.bind(null,e,i);i.then(s,s)}})}function gn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(ia(l.type)){Ae=l.stateNode,Mn=!1;break t}break;case 5:Ae=l.stateNode,Mn=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,Mn=!0;break t}l=l.return}if(Ae===null)throw Error(X(160));Wx(r,o,a),Ae=null,Mn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Zx(t,e,n),t=t.sibling}var pi=null;function Zx(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}gn(t,e,n),_n(e),s&4&&(ta(3,e,e.return),Bl(3,e),ta(5,e,e.return));break;case 1:gn(t,e,n),_n(e),s&512&&(se||i===null||je(i,i.return)),s&64&&Ye&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=pi,gn(t,e,n),_n(e),s&512&&(se||i===null||je(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Ye)e.stateNode=SS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Ll]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),sn(i,t,n),i[$e]=e,Je(i),t=i;break t;case"link":if(a=Iv("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),sn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Iv("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),sn(i,t,n),s.head.appendChild(i);break;default:throw Error(X(468,t))}i[$e]=e,Je(i),t=i}e.stateNode=t}else Ye||sm(a,e.type,e.stateNode);else e.stateNode=Ov(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?Ye||sm(a,e.type,e.stateNode):Ov(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Fd(e,e.memoizedProps,i.memoizedProps);break;case 27:gn(t,e,n),_n(e),s&512&&(se||i===null||je(i,i.return)),i!==null&&s&4&&Fd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Ci,Ci=!1,gn(t,e,n),Ci=a,_n(e),s&512&&(se||i===null||je(i,i.return)),e.flags&32){t=e.stateNode;try{Wr(t,""),Qt=!0}catch(f){oe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Fd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Vd=!0);break;case 6:if(gn(t,e,n),_n(e),s&4){if(e.stateNode===null)throw Error(X(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Qt=!0}catch(f){oe(e,e.return,f)}}break;case 3:if(Qt=!1,hu=null,a=pi,pi=El(t.containerInfo),gn(t,e,n),pi=a,_n(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(f){oe(e,e.return,f)}Vd&&(Vd=!1,Jx(e)),Qt=!1;break;case 4:s=Ci,Ci=Ye,i=__(),a=pi,pi=El(e.stateNode.containerInfo),gn(t,e,n),_n(e),pi=a,Qt&&$o&&(Iu=!0),Qt=i,Ci=s;break;case 12:gn(t,e,n),_n(e);break;case 31:gn(t,e,n),_n(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xc(e,t)));break;case 13:gn(t,e,n),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(sh=Bn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xc(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Ye,l=se,c=Ci;Ye=o||a,Ci=c||a,se=l||r,gn(t,e,n),se=l,Ci=c,Ye=o,_n(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Ye||se||(t=r||se,n=Ye,i=se,Ye=a||Ye,se=t,Ns(e,2),Ye=n,se=i),!a&&Ci||Hp(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Xc(e,n))));break;case 19:gn(t,e,n),_n(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Xc(e,t)));break;case 30:s&512&&(se||i===null||je(i,i.return)),s=__(),a=$o,r=(n&335544064)===n,o=e.memoizedProps,$o=r&&hs(o.default,o.update)!=="none",gn(t,e,n),_n(e),r&&i!==null&&Qt&&(e.flags|=4),$o=a,Qt=s;break;case 21:break;case 7:s&512&&(se||i===null||je(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:gn(t,e,n),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Px(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Xm(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(km(s))break;s=s.return}var r=i;if(n==null)throw Error(X(160));switch(n.tag){case 27:var o=n.stateNode,l=Hd(e);Lu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Wr(c,""),n.flags&=-33);var f=Hd(e);Lu(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=Hd(e);Op(e,h,d,r);break;default:throw Error(X(161))}}catch(p){oe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Jx(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,to=!0,t.reset(),to=!1),e=e.sibling}}function _r(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Kx(t,e),t=t.sibling;else Vx(t,!1)}function Kx(e,t){var n=e.alternate;if(n===null)Ip(e,!1);else switch(e.tag){case 3:if(Fp=Ri=!1,uv(),_r(t,e),!Ri&&!Iu){if(e=Ui,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];bS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Fp=!0}Ui=null;break;case 5:_r(t,e);break;case 4:i=Ri,Ri=!1,_r(t,e),Ri&&(Iu=!0),Ri=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Ip(e,!1):_r(t,e));break;case 30:i=Ri,s=uv(),Ri=!1,_r(t,e),Ri&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=as(a,r),r=as(n.memoizedProps,r);var o=hs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Tn=0,t=Wm(e,n,t,r,o,a,!0),Tn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Zr(e,e.memoizedProps.onUpdate),Ui=s):s!==null&&(s.push.apply(s,Ui),Ui=s),Ri=(e.flags&32)!==0?!0:i;break;default:_r(t,e)}}function Di(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gx(e,t.alternate,t),t=t.sibling}function Ns(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ta(4,n,n.return),Ns(n,i);break;case 1:je(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Ix(n,n.return,s),Ns(n,i);break;case 27:(i&2)!==0&&US(n.stateNode,n.type,n.memoizedProps);case 5:je(n,n.return),n.tag!==5&&n.tag!==27||cl(n),Ns(n,i);break;case 6:cl(n);break;case 26:je(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Ns(n,i);break;case 22:n.memoizedState===null&&Ns(n,i);break;case 30:je(n,n.return),Ns(n,i);break;case 7:je(n,n.return);default:Ns(n,i)}e=e.sibling}}function di(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:di(s,a,n),Bl(4,a);break;case 1:if(di(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){oe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)ky(c[s],l)}catch(f){oe(i,i.return,f)}}o&&r&64&&Ox(a),Ni(a,a.return);break;case 27:(n&2)!==0&&Bx(a);case 5:a.tag!==5&&a.tag!==27||lv(a),di(s,a,n),o&&i===null&&r&4&&Lp(a),Ni(a,a.return);break;case 6:lv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Ye||sm(El(l.ownerDocument),a.type,l),di(s,a,n),o&&i===null&&r&4&&Lp(a),Ni(a,a.return);break;case 12:di(s,a,n);break;case 31:di(s,a,n),o&&r&4&&qx(s,a);break;case 13:di(s,a,n),o&&r&4&&Yx(s,a);break;case 22:a.memoizedState===null&&di(s,a,n),Ni(a,a.return);break;case 30:di(s,a,n),Ni(a,a.return);break;case 7:Ni(a,a.return);default:di(s,a,n)}t=t.sibling}}function qm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Il(n))}function Ym(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Il(e))}function $n(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)Qx(e,t,n,i),t=t.sibling;else s&&Hx(t)}function Qx(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ou(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:$n(e,t,n,i),a&2048&&Bl(9,t);break;case 1:$n(e,t,n,i);break;case 3:$n(e,t,n,i),s&&Fp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Il(a)));break;case 12:if(a&2048){$n(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){oe(t,t.return,c)}}else $n(e,t,n,i);break;case 31:$n(e,t,n,i);break;case 13:$n(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&ou(o),r._visibility&2?$n(e,t,n,i):ul(e,t)):(s&&o!==null&&o.memoizedState!==null&&ou(t),r._visibility&2?$n(e,t,n,i):(r._visibility|=2,yr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&qm(o,t);break;case 24:$n(e,t,n,i),a&2048&&Ym(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Fi(a.child,!0),Fi(t.child,!0))),$n(e,t,n,i);break;default:$n(e,t,n,i)}}function yr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:yr(a,r,o,l,s),Bl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?yr(a,r,o,l,s):ul(a,r):(f._visibility|=2,yr(a,r,o,l,s)),s&&c&2048&&qm(r.alternate,r);break;case 24:yr(a,r,o,l,s),s&&c&2048&&Ym(r.alternate,r);break;default:yr(a,r,o,l,s)}t=t.sibling}}function ul(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:ul(n,i),s&2048&&qm(i.alternate,i);break;case 24:ul(n,i),s&2048&&Ym(i.alternate,i);break;default:ul(n,i)}t=t.sibling}}var Ea=8192;function Ma(e,t,n){if(e.subtreeFlags&Ea)for(e=e.child;e!==null;)jx(e,t,n),e=e.sibling}function jx(e,t,n){switch(e.tag){case 26:Ma(e,t,n),e.flags&Ea&&(e.memoizedState!==null?cA(n,pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Bv(n,e)));break;case 5:Ma(e,t,n),e.flags&Ea&&(e=e.stateNode,(t&335544128)===t&&Bv(n,e));break;case 3:case 4:var i=pi;pi=El(e.stateNode.containerInfo),Ma(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ea,Ea=16777216,Ma(e,t,n),Ea=i):Ma(e,t,n));break;case 30:if((e.flags&Ea)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,In===null&&(In=new Map),In.set(i,s)}Ma(e,t,n);break;default:Ma(e,t,n)}}function $x(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,eS(i,e)}$x(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tS(e),e=e.sibling}function tS(e){switch(e.tag){case 0:case 11:case 15:qo(e),e.flags&2048&&ta(9,e,e.return);break;case 3:qo(e);break;case 12:qo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,lu(e)):qo(e);break;default:qo(e)}}function lu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,eS(i,e)}$x(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ta(8,t,t.return),lu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,lu(t));break;default:lu(t)}e=e.sibling}}function eS(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Il(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else t:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,a=i.return;if(Xx(i),i===n){Ze=null;break t}if(s!==null){s.return=a,Ze=s;break t}Ze=a}}}var rE={getCacheForType:function(e){var t=tn(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tn(ze).controller.signal}},oE=typeof WeakMap=="function"?WeakMap:Map,$t=0,fe=null,Xt=null,Yt=0,ae=0,Un=null,zs=!1,ro=!1,Zm=!1,cs=0,Ue=0,ea=0,Ua=0,Pu=0,Pn=0,Yr=0,hl=null,bn=null,Gp=!1,sh=0,nS=0,Bu=1/0,zu=null,Ys=null,Re=0,gi=null,Ha=null,zi=0,kp=0,Xp=null,iS=null,Hr=null,Vr=null,Gr=null,fl=0,cu=null;function Hn(){return($t&2)!==0&&Yt!==0?Yt&-Yt:Rt.T!==null?Km():oy()}function sS(){if(Pn===0)if((Yt&536870912)===0||Vt){var e=Nc;Nc<<=1,(Nc&3932160)===0&&(Nc=262144),Pn=e}else Pn=536870912;return e=an.current,e!==null&&(e.flags|=32),Pn}function Zr(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=ES(as(e.memoizedProps,n))),Vr===null&&(Vr=[]),Vr.push(t.bind(null,i))}}function An(e,t,n){(e===fe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Fs(e,Yt,Pn,!1)),Ul(e,n),(($t&2)===0||e!==fe)&&(e===fe&&(($t&2)===0&&(Ua|=n),Ue===4&&Fs(e,Yt,Pn,!1)),Vi(e))}function aS(e,t,n){if(($t&6)!==0)throw Error(X(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Nl(e,t),s=i?uE(e,t):Gd(e,t,!0),a=i;do{if(s===0){ro&&!i&&Fs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!lE(n)){s=Gd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=hl;var l=o.current.memoizedState.isDehydrated;if(l&&(Jr(o,r).flags|=256),r=Gd(o,r,!1),r!==2&&r!==6){if(Zm&&!l){o.errorRecoveryDisabledLanes|=a,Ua|=a,s=4;break t}a=bn,bn=s,a!==null&&(bn===null?bn=a:bn.push.apply(bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Jr(e,0),Fs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(X(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Fs(i,t,Pn,!zs);break t;case 2:bn=null;break;case 3:case 5:break;default:throw Error(X(329))}if((t&62914560)===t&&(s=sh+300-Bn(),10<s)){if(Fs(i,t,Pn,!zs),Xu(i,0,!0)!==0)break t;zi=t,i.timeoutHandle=jm(fv.bind(null,i,n,bn,zu,Gp,t,Pn,Ua,Yr,zs,a,"Throttled",-0,0),s);break t}fv(i,n,bn,zu,Gp,t,Pn,Ua,Yr,zs,a,null,-0,0)}}break}while(!0);Vi(e)}function fv(e,t,n,i,s,a,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},In=null,jx(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=Al.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?sh-Bn():(a&4194048)===a?nS-Bn():0,g=uA(d,g),g!==null)){zi=a,e.cancelPendingCommit=g(pv.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,h,p)),Fs(e,a,r,!c);return}pv(e,t,a,n,i,s,r,o,l,c,f,d)}function lE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Vn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fs(e,t,n,i){t=ny(e,t),t&=~Pu,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Fn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&sy(e,n,t)}function ah(){return($t&6)===0?(zl(0,!1),!1):!0}function Jm(){if(Xt!==null){if(ae===0)var e=Xt.return;else e=Xt,es=Wa=null,Um(e),Br=null,yl=0,e=Xt;for(;e!==null;)Lx(e.alternate,e),e=e.return;Xt=null}}function Jr(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,DE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),zi=0,Jm(),fe=e,Xt=n=ns(e.current,null),Yt=t,ae=0,Un=null,zs=!1,ro=Nl(e,t),Zm=!1,Yr=Pn=Pu=Ua=ea=Ue=0,bn=hl=null,Gp=!1,cs=ny(e,t),Ju(),n}function rS(e,t){Pt=null,Rt.H=Du,t===so||t===ju?(t=F_(),ae=3):t===Tm?(t=F_(),ae=4):ae=t===Hm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,Xt===null&&(Ue=1,Nu(e,si(t,e.current)))}function oS(){var e=an.current;return e===null?!0:(Yt&4194048)===Yt?cn===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?e===cn:!1}function lS(){var e=Rt.H;return Rt.H=Du,e===null?Du:e}function cS(){var e=Rt.A;return Rt.A=rE,e}function Fu(){Ue=4,zs||(Yt&4194048)!==Yt&&an.current!==null||(ro=!0),(ea&134217727)===0&&(Ua&134217727)===0||fe===null||Fs(fe,Yt,Pn,!1)}function Gd(e,t,n){var i=$t;$t|=2;var s=lS(),a=cS();(fe!==e||Yt!==t)&&(zu=null,Jr(e,t)),t=!1;var r=Ue;t:do try{if(ae!==0&&Xt!==null){var o=Xt,l=Un;switch(ae){case 8:Jm(),r=6;break t;case 3:case 2:case 9:case 6:an.current===null&&(t=!0);var c=ae;if(ae=0,Un=null,Ur(e,o,l,c),n&&ro){r=0;break t}break;default:c=ae,ae=0,Un=null,Ur(e,o,l,c)}}cE(),r=Ue;break}catch(f){rS(e,f)}while(!0);return t&&e.shellSuspendCounter++,es=Wa=null,$t=i,Rt.H=s,Rt.A=a,Xt===null&&(fe=null,Yt=0,Ju()),r}function cE(){for(;Xt!==null;)uS(Xt)}function uE(e,t){var n=$t;$t|=2;var i=lS(),s=cS();fe!==e||Yt!==t?(zu=null,Bu=Bn()+500,Jr(e,t)):ro=Nl(e,t);t:do try{if(ae!==0&&Xt!==null){t=Xt;var a=Un;e:switch(ae){case 1:ae=0,Un=null,Ur(e,t,a,1);break;case 2:case 9:if(z_(a)){ae=0,Un=null,dv(t);break}t=function(){ae!==2&&ae!==9||fe!==e||(ae=7),Vi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:z_(a)?(ae=0,Un=null,dv(t)):(ae=0,Un=null,Ur(e,t,a,7));break;case 5:var r=null;switch(Xt.tag){case 26:r=Xt.memoizedState;case 5:case 27:var o=Xt;if(r?IS(r):o.stateNode.complete){ae=0,Un=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,rh(c)):Xt=null}break e}}ae=0,Un=null,Ur(e,t,a,5);break;case 6:ae=0,Un=null,Ur(e,t,a,6);break;case 8:Jm(),Ue=6;break t;default:throw Error(X(462))}}hE();break}catch(f){rS(e,f)}while(!0);return es=Wa=null,Rt.H=i,Rt.A=s,$t=n,Xt!==null?0:(fe=null,Yt=0,Ju(),Ue)}function hE(){for(;Xt!==null&&!C1();)uS(Xt)}function uS(e){var t=Ux(e.alternate,e,cs);e.memoizedProps=e.pendingProps,t===null?rh(e):Xt=t}function dv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ev(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=ev(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:Um(t);var i=t;i===Ke&&(Vt?(bu(i),i.tag===5&&i.stateNode!=null&&(ve=i.stateNode)):(bu(i),Vt=!0));default:Lx(n,t),t=Xt=Oy(t,cs),t=Ux(n,t,cs)}e.memoizedProps=e.pendingProps,t===null?rh(e):Xt=t}function Ur(e,t,n,i){es=Wa=null,Um(t),Br=null,yl=0;var s=t.return;try{if(jT(e,s,t,n,Yt)){Ue=1,Nu(e,si(n,e.current)),Xt=null;return}}catch(a){if(s!==null)throw Xt=s,a;Ue=1,Nu(e,si(n,e.current)),Xt=null;return}t.flags&32768?(Vt||i===1?e=!0:ro||(Yt&536870912)!==0?e=!1:(zs=e=!0,(i===2||i===9||i===3||i===6)&&(i=an.current,i!==null&&i.tag===13&&(i.flags|=16384))),hS(t,e)):rh(t)}function rh(e){var t=e;do{if((t.flags&32768)!==0){hS(t,zs);return}e=t.return;var n=nE(t.alternate,t,cs);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Ue===0&&(Ue=5)}function hS(e,t){do{var n=iE(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Ue=6,Xt=null}function pv(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do oh();while(Re!==0);if(($t&6)!==0)throw Error(X(327));if(t!==null){if(t===e.current)throw Error(X(177));e===fe&&(Xt=fe=null,Yt=0),Ha=t,gi=e,zi=n,Xp=s,iS=i,fE(e,t,n,r,o,l,d)}}function fE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(kp=o,o|=vm,z1(e,n,o,i,s,a),Vr=null,(n&335544064)===n?(Gr=HT(e),i=10262):(Gr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,vE(vu,function(){return Zp(),null})):(e.callbackNode=null,e.callbackPriority=0),Ou=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null,s=te.p,te.p=2,a=$t,$t|=4;try{sE(e,t,n)}finally{$t=a,te.p=s,Rt.T=i}}Re=1,Ou?Hr=PE(r,e.containerInfo,Gr,Wp,qp,pE,Yp,Zp,dE,null,null):(Wp(),qp(),Yp())}function dE(e){if(Re!==0){var t=gi.onRecoverableError;t(e,{componentStack:null})}}function pE(){Re===3&&(Re=0,Kx(Ha,gi),Re=4)}function Wp(){if(Re===1){Re=0;var e=gi,t=Ha,n=zi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null;var s=te.p;te.p=2;var a=$t;$t|=4;try{$o=Iu=!1,Zx(t,e,n),n=jp;var r=Ay(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ey(o.ownerDocument.documentElement,o)){if(l!==null&&_m(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var u=D_(o,x),_=D_(o,m);if(u&&_&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var v=d.createRange();v.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(v),p.extend(_.node,_.offset)):(v.setEnd(_.node,_.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}to=!!Qp,jp=Qp=null}finally{$t=a,te.p=s,Rt.T=i}}e.current=t,Re=2}}function qp(){if(Re===2){Re=0;var e=gi,t=Ha,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Rt.T,Rt.T=null;var i=te.p;te.p=2;var s=$t;$t|=4;try{Gx(e,t.alternate,t)}finally{$t=s,te.p=i,Rt.T=n}}Re=3}}function Yp(){if(Re===4||Re===3){Re=0;var e=Hr;Hr=null,R1();var t=gi,n=Ha,i=zi,s=iS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Re=5:(Re=0,Ha=gi=null,fS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ys=null),hm(i),n=n.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Dl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Rt.T,a=te.p,te.p=2,Rt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Rt.T=n,te.p=a}}if(s=Vr,r=Gr,Gr=null,s!==null&&(Vr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(zi&3)!==0&&oh(),Vi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===cu?fl++:(fl=0,cu=t):(fl=0,cu=null),zl(0,!1)}}function fS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Il(t)))}function oh(){return Hr!==null&&(Hr.skipTransition(),Hr=null),Wp(),qp(),Yp(),Zp()}function Zp(){if(Re!==5)return!1;var e=gi,t=kp;kp=0;var n=hm(zi),i=Rt.T,s=te.p;try{te.p=32>n?32:n,Rt.T=null,n=Xp,Xp=null;var a=gi,r=zi;if(Re=0,Ha=gi=null,zi=0,($t&6)!==0)throw Error(X(331));var o=$t;if($t|=4,tS(a.current),Qx(a,a.current,r,n),$t=o,zl(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Dl,a)}catch{}return!0}finally{te.p=s,Rt.T=i,fS(e,t)}}function mv(e,t,n){t=si(n,t),t=wp(e.stateNode,t,2),e=Xs(e,t,2),e!==null&&(Ul(e,2),Vi(e))}function oe(e,t,n){if(e.tag===3)mv(e,e,n);else for(;t!==null;){if(t.tag===3){mv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ys===null||!Ys.has(i))){e=si(n,e),n=wx(2),i=Xs(t,n,2),i!==null&&(Cx(n,i,t,e),Ul(i,2),Vi(i));break}}t=t.return}}function kd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new oE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Zm=!0,s.add(n),e=mE.bind(null,e,t,n),t.then(e,e))}function mE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(Yt&n)===n&&((Ue===4||Ue===3&&(Yt&62914560)===Yt&&300>Bn()-sh)&&($t&2)===0?Jr(e,0):Pu|=n,Yr===Yt&&(Yr=0)),Vi(e)}function dS(e,t){t===0&&(t=iy()),e=Xa(e,t),e!==null&&(Ul(e,t),Vi(e))}function gE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dS(e,n)}function _E(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(X(314))}i!==null&&i.delete(t),dS(e,n)}function vE(e,t){return cm(e,t)}var Kr=null,xr=null,Jp=!1,Hu=!1,Xd=!1,Hs=0;function Vi(e){e!==xr&&e.next===null&&(xr===null?Kr=xr=e:xr=xr.next=e),Hu=!0,Jp||(Jp=!0,xE())}function zl(e,t){if(!Xd&&Hu){Xd=!0;do for(var n=!1,i=Kr;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Fn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,gv(i,a))}else a=Yt,a=Xu(i,i===fe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Nl(i,a)||(n=!0,gv(i,a));i=i.next}while(n);Xd=!1}}function yE(){pS()}function pS(){Hu=Jp=!1;var e=0;Hs!==0&&RE()&&(e=Hs);for(var t=Bn(),n=null,i=Kr;i!==null;){var s=i.next,a=mS(i,t);a===0?(i.next=null,n===null?Kr=s:n.next=s,s===null&&(xr=n)):(n=i,(e!==0||(a&3)!==0)&&(Hu=!0)),i=s}Re!==0&&Re!==5||zl(e,!1),Hs!==0&&(Hs=0)}function mS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Fn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=B1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=fe,n=Yt,n=Xu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Md(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Nl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Md(i),hm(n)){case 2:case 8:n=ty;break;case 32:n=vu;break;case 268435456:n=ey;break;default:n=vu}return i=gS.bind(null,e),n=cm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Md(i),e.callbackPriority=2,e.callbackNode=null,2}function gS(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(oh()&&e.callbackNode!==n)return null;var i=Yt;return i=Xu(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(aS(e,i,t),mS(e,Bn()),e.callbackNode!=null&&e.callbackNode===n?gS.bind(null,e):null)}function gv(e,t){if(oh())return null;aS(e,t,!0)}function xE(){NE(function(){($t&6)!==0?cm($v,yE):pS()})}function Km(){if(Hs===0){var e=Pa;e===0&&(e=Dc,Dc<<=1,(Dc&261888)===0&&(Dc=256)),Hs=e}return Hs}function _v(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qc(e)}function SE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=_v((s[Cn]||null).action),r=i.submitter;r&&(t=(t=r[Cn]||null)?_v(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new qu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Hs!==0){var l=new FormData(s,r);Ep(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Ep(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Wc=0;Wc<pp.length;Wc++)qc=pp[Wc],vv=qc.toLowerCase(),yv=qc[0].toUpperCase()+qc.slice(1),_i(vv,"on"+yv);var qc,vv,yv,Wc;_i(Cy,"onAnimationEnd");_i(Ry,"onAnimationIteration");_i(Dy,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(UT,"onTransitionRun");_i(LT,"onTransitionStart");_i(OT,"onTransitionCancel");_i(Ny,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ml));function _S(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){xu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){xu(f)}s.currentTarget=null,a=l}}}}function kt(e,t){var n=t[d_];n===void 0&&(n=t[d_]=new Set);var i=e+"__bubble";n.has(i)||(vS(t,e,2,!1),n.add(i))}function Wd(e,t,n){var i=0;t&&(i|=4),vS(n,e,i,t)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function Qm(e){if(!e[Yc]){e[Yc]=!0,cy.forEach(function(n){n!=="selectionchange"&&(ME.has(n)||Wd(n,!1,e),Wd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yc]||(t[Yc]=!0,Wd("selectionchange",!1,t))}}function vS(e,t,n,i){switch(GS(t)){case 2:var s=pA;break;case 8:s=mA;break;default:s=sg}n=s.bind(null,t,n,e),s=void 0,!up||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function qd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Aa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}_y(function(){var c=a,f=dm(n),d=[];t:{var h=Uy.get(e);if(h!==void 0){var p=qu,g=e;switch(e){case"keypress":if($c(n)===0)break t;case"keydown":case"keyup":p=lT;break;case"focusin":g="focus",p=Cd;break;case"focusout":g="blur",p=Cd;break;case"beforeblur":case"afterblur":p=Cd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=S_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dT;break;case Cy:case Ry:case Dy:p=$1;break;case Ny:p=mT;break;case"scroll":case"scrollend":p=Z1;break;case"wheel":p=_T;break;case"copy":case"cut":case"paste":p=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=b_;break;case"submit":p=hT;break;case"toggle":case"beforetoggle":p=yT}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){var y=_;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||u===null||(y=pl(_,u),y!=null&&x.push(bl(_,y,v))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==cp&&(g=n.relatedTarget||n.fromElement)&&(Aa(g)||g[no]))break t;(h||p)&&(g=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Aa(p):null,p!==null&&(m=Rl(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(h=null,p=c),h!==p&&(x=S_,y="onMouseLeave",u="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=b_,y="onPointerLeave",u="onPointerEnter",_="pointer"),m=h==null?g:Qo(h),v=p==null?g:Qo(p),g=new x(y,_+"leave",h,n,f),g.target=m,g.relatedTarget=v,y=null,Aa(f)===c&&(x=new x(u,_+"enter",p,n,f),x.target=v,x.relatedTarget=m,y=x),m=y,x=h&&p?Qd(h,p,bE):null,h!==null&&xv(d,g,h,x,!1),p!==null&&m!==null&&xv(d,m,p,x,!0)))}t:{if(h=c?Qo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=w_;else if(A_(h))if(by)A=RT;else{A=wT;var C=AT}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&fm(c.elementType)&&(A=w_):A=CT;if(A&&(A=A(e,c))){My(d,A,n,f);break t}C&&C(e,h,c)}switch(C=c?Qo(c):window,e){case"focusin":(A_(C)||C.contentEditable==="true")&&(Ar=C,fp=c,nl=null);break;case"focusout":nl=fp=Ar=null;break;case"mousedown":dp=!0;break;case"contextmenu":case"mouseup":case"dragend":dp=!1,N_(d,n,f);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":N_(d,n,f)}var w;if(gm)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Er?xy(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(yy&&n.locale!=="ko"&&(Er||D!=="onCompositionStart"?D==="onCompositionEnd"&&Er&&(w=vy()):(Ps=f,pm="value"in Ps?Ps.value:Ps.textContent,Er=!0)),C=Vu(c,D),0<C.length&&(D=new M_(D,e,null,n,f),d.push({event:D,listeners:C}),w?D.data=w:(w=Sy(n),w!==null&&(D.data=w)))),(w=ST?MT(e,n):bT(e,n))&&(D=Vu(c,"onBeforeInput"),0<D.length&&(C=new M_("onBeforeInput","beforeinput",null,n,f),d.push({event:C,listeners:D}),C.data=w)),SE(d,e,c,n,f)}_S(d,t)})}function bl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=pl(e,n),s!=null&&i.unshift(bl(e,s,a)),s=pl(e,t),s!=null&&i.push(bl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function bE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=pl(n,a),c!=null&&r.unshift(bl(n,c,l))):s||(c=pl(n,a),c!=null&&r.push(bl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var TE=/\r\n?/g,EE=/\u0000|\uFFFD/g;function Sv(e){return(typeof e=="string"?e:""+e).replace(TE,`
`).replace(EE,"")}function yS(e,t){return t=Sv(t),Sv(e)===t}function re(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Wr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Wr(e,""+i);else return;break;case"className":Lc(e,"class",i);break;case"tabIndex":Lc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Lc(e,n,i);break;case"style":gy(e,i,a);return;case"data":if(t!=="object"){Lc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qc(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&re(e,t,"name",s.name,s,null),re(e,t,"formEncType",s.formEncType,s,null),re(e,t,"formMethod",s.formMethod,s,null),re(e,t,"formTarget",s.formTarget,s,null)):(re(e,t,"encType",s.encType,s,null),re(e,t,"method",s.method,s,null),re(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Qc(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Oi);return;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(X(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(X(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Qc(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":kt("beforetoggle",e),kt("toggle",e),Kc(e,"popover",i);break;case"xlinkActuate":ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ji(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ji(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ji(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ji(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Kc(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=q1.get(n)||n,Kc(e,n,i);else return}Qt=!0}function Kp(e,t,n,i,s,a){switch(n){case"style":gy(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(X(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(X(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Wr(e,i);else if(typeof i=="number"||typeof i=="bigint")Wr(e,""+i);else return;break;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!uy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Cn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}Qt=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Kc(e,n,i)}return}Qt=!0}function sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:re(e,t,a,r,n,null)}}s&&re(e,t,"srcSet",n.srcSet,n,null),i&&re(e,t,"src",n.src,n,null);return;case"input":kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(X(137,t));break;default:re(e,t,i,f,n,null)}}dy(e,a,o,l,c,r,s,!1);return;case"select":kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:re(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Or(e,!!i,t,!1):n!=null&&Or(e,!!i,n,!0);return;case"textarea":kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(X(91));break;default:re(e,t,r,o,n,null)}my(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":re(e,t,l,i,n,null));return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(i=0;i<Ml.length;i++)kt(Ml[i],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:re(e,t,c,i,n,null)}return;default:if(fm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Kp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&re(e,t,o,i,n,null))}var AE={};function wE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||re(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&(Qt=!0),a=p;break;case"name":p!==d&&(Qt=!0),s=p;break;case"checked":p!==d&&(Qt=!0),c=p;break;case"defaultChecked":p!==d&&(Qt=!0),f=p;break;case"value":p!==d&&(Qt=!0),r=p;break;case"defaultValue":p!==d&&(Qt=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(X(137,t));break;default:p!==d&&re(e,t,h,p,i,d)}}lp(e,r,o,l,c,f,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||re(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(Qt=!0),h=a;break;case"defaultValue":a!==l&&(Qt=!0),o=a;break;case"multiple":a!==l&&(Qt=!0),r=a;default:a!==l&&re(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?Or(e,!!n,h,!1):!!i!=!!n&&(t!=null?Or(e,!!n,t,!0):Or(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:re(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(Qt=!0),h=s;break;case"defaultValue":s!==a&&(Qt=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(X(91));break;default:s!==a&&re(e,t,r,s,i,a)}py(e,h,p);return;case"option":for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:re(e,t,g,null,i,h));for(l in i)h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null)&&(l==="selected"?(h!==p&&(Qt=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol"):re(e,t,l,h,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x)&&re(e,t,x,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(X(137,t));break;default:re(e,t,c,h,i,p)}return;default:if(fm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Kp(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||Kp(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&re(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||re(e,t,d,h,i,p)}function Mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Mv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Mv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Qp=null,jp=null;function Tl(e){return e.nodeType===9?e:e.ownerDocument}function bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function SS(e,t,n,i){return n=Tl(n).createElement(e),n[$e]=i,n[Cn]=t,sn(n,e,t),Je(n),n}function $p(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yd=null;function RE(){var e=window.event;return e&&e.type==="popstate"?e===Yd?!1:(Yd=e,!0):(Yd=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,DE=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,Ev=typeof requestAnimationFrame=="function"?requestAnimationFrame:jm,NE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(e){return Tv.resolve(null).then(e).catch(UE)}:jm;function UE(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function Av(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),eo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Jd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Jd(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ll]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Jd(e.ownerDocument.body);n=s}while(n);eo(t)}function wv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function MS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function bS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function TS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function tm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return TS(t,n,e)}function LE(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return TS(t,n,e)}function OE(e){return e.documentElement.clientHeight}function IE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function PE(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(OE(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,u=0,_=0;_<m.length;_++){var v=m[_];if(!v.complete){var y=v.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(u+=PS(v),u>fu){x.length=g;break}v=new Promise(IE.bind(v)),x.push(v)}}}if(0<x.length)return h=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var g=h[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var u=m=void 0,_=!0,v=0;v<g.length;v++){var y=g[v],A=y.width;if(m===void 0)m=A;else if(m!==A){_=!1;break}if(A=y.height,u===void 0)u=A;else if(u!==A){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&m!==void 0&&u!==void 0&&(x.setKeyframes(g),_=getComputedStyle(x.target,x.pseudoElement),_.width!==m||_.height!==u)&&(_=g[0],_.width=m,_.height=u,_=g[g.length-1],_.width=m,_.height=u,x.setKeyframes(g))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof h=="object"&&h!==null&&h.name==="InvalidStateError"&&(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null),h!==null&&l(h)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function wa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}wa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:de({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};wa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};wa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ES(e){return{name:e,group:new wa("group",e),imagePair:new wa("image-pair",e),old:new wa("old",e),new:new wa("new",e)}}function Gn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Gn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(AS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Qr(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),wn(this._fragmentFiber.child,!1,BE,e,o,i)}this._eventListeners=a}};function BE(e,t,n,i){return Ge(e).addEventListener(t,n,i),!1}Gn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=AS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Qr(s.optionsOrUseCapture),wn(this._fragmentFiber.child,!1,zE,e,n,s),i.splice(t,1),a!==null&&a()}};function zE(e,t,n,i){return Ge(e).removeEventListener(t,n,i),!1}function Qr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Cv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function AS(e,t,n,i){if(e.length===0)return-1;i=Cv(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Cv(a.optionsOrUseCapture)===i)return s}return-1}Gn.prototype.dispatchEvent=function(e){var t=Va(this._fragmentFiber);if(t===null)return!0;t=Ge(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Qr(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Qr(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Gn.prototype.focus=function(e){wn(this._fragmentFiber.child,!0,wS,e,void 0,void 0)};function wS(e,t){return e.tag===6?!1:(e=Ge(e),KE(e,t))}Gn.prototype.focusLast=function(e){var t=[];wn(this._fragmentFiber.child,!0,$m,t,void 0,void 0);for(var n=t.length-1;0<=n&&!wS(t[n],e);n--);};function $m(e,t){return t.push(e),!1}Gn.prototype.blur=function(){var e=Va(this._fragmentFiber);e!==null&&(e=Ge(e),e=Tl(e).activeElement,e!==null&&wn(this._fragmentFiber.child,!1,FE,e,void 0,void 0))};function FE(e,t){return e.tag===6?!1:(e=Ge(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Gn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),wn(this._fragmentFiber.child,!1,HE,e,void 0,void 0)};function HE(e,t){return e.tag===6||(e=Ge(e),t.observe(e)),!1}Gn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),wn(this._fragmentFiber.child,!1,VE,e,void 0,void 0);for(var n=t=0;n<mi.length;n++){var i=mi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):mi[t++]=i}mi.length=t}};function VE(e,t){return e.tag===6||(e=Ge(e),t.unobserve(e)),!1}var mi=[],Zd=!1;function GE(e,t,n){mi.push({fragmentInstance:e,observer:t,instance:n}),Zd||(Zd=!0,QE(function(){Zd=!1;var i=mi;mi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Gn.prototype.getClientRects=function(){var e=[];return wn(this._fragmentFiber.child,!1,kE,e,void 0,void 0),e};function kE(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ge(e),t.push.apply(t,e.getClientRects());return!1}Gn.prototype.getRootNode=function(e){var t=Va(this._fragmentFiber);return t===null?this:Ge(t).getRootNode(e)};Gn.prototype.compareDocumentPosition=function(e){var t=Va(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];wn(this._fragmentFiber.child,!1,$m,n,void 0,void 0);var i=Ge(t);if(n.length===0){if(n=i,o_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Jv(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ge(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ge(n[0]),s=Ge(n[n.length-1]);var a=o_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||XE(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function XE(e,t,n,i,s){var a=Aa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Va(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Qd(n,a,l_),t===null?t=!1:(wn(t,!0,x1,a,n),a=Sr,Sr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Qd(i,a,l_),t===null?t=!1:(wn(t,!0,S1,a,i),a=Sr,Kd=Sr=null,t=a!==null)),t):!1}function Rv(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Gn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(X(566));var t=[];wn(this._fragmentFiber.child,!1,$m,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Jv(this._fragmentFiber);if(i=n?i[1]||i[0]||Va(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ge(i),Rv(e,n);return}if(i=Ge(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ge(s),Rv(s,n)):Ge(s).scrollIntoView(e),i+=n?-1:1}};function WE(e,t){return e=Ge(e),CS(e,t),!1}function CS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function RS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Qr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<mi.length;o++){var l=mi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(mi[r++]=l)}mi.length=r,a.observe(e)}),CS(e,t))}function qE(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Qr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?GE(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function em(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":em(n),Wu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function YE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ll])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function ZE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function DS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function nm(e){return e.data==="$?"||e.data==="$~"}function tg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function JE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var im=null;function Dv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Nv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function KE(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function QE(e){Ev(function(){Ev(function(t){return e(t)})})}function NS(e,t,n){switch(t=Tl(n),e){case"html":if(e=t.documentElement,!e)throw Error(X(452));return e;case"head":if(e=t.head,!e)throw Error(X(453));return e;case"body":if(e=t.body,!e)throw Error(X(454));return e;default:throw Error(X(451))}}function US(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&re(e,t,i,null,AE,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Oi&&(e.onclick=null),Wu(e)}function Jd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wu(e)}var oi=new Map,Uv=new Set;function El(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var fs=te.d;te.d={f:jE,r:$E,D:tA,C:eA,L:nA,m:iA,X:aA,S:sA,M:rA};function jE(){var e=fs.f(),t=ah();return e||t}function $E(e){var t=io(e);t!==null&&t.tag===5&&t.type==="form"?gx(t):fs.r(e)}var oo=typeof document>"u"?null:document;function LS(e,t,n){var i=oo;if(i&&typeof t=="string"&&t){var s=ii(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Uv.has(s)||(Uv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),sn(t,"link",e),Je(t),i.head.appendChild(t)))}}function tA(e){fs.D(e),LS("dns-prefetch",e,null)}function eA(e,t){fs.C(e,t),LS("preconnect",e,t)}function nA(e,t,n){fs.L(e,t,n);var i=oo;if(i&&e&&t){var s='link[rel="preload"][as="'+ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ii(n.imageSizes)+'"]')):s+='[href="'+ii(e)+'"]';var a=s;switch(t){case"style":a=jr(e);break;case"script":a=lo(e)}if(!(oi.has(a)||(e=de({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Fl(a))||t==="script"&&i.querySelector(Hl(a))))){var r=i.createElement("link");sn(r,"link",e),t==="style"&&(r[yu]=!0,r.onload=r.onerror=function(){ly(r)}),Je(r),i.head.appendChild(r)}}}function iA(e,t){fs.m(e,t);var n=oo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ii(i)+'"][href="'+ii(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=lo(e)}if(!oi.has(a)&&(e=de({rel:"modulepreload",href:e},t),oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hl(a)))return}i=n.createElement("link"),sn(i,"link",e),Je(i),n.head.appendChild(i)}}}function sA(e,t,n){fs.S(e,t,n);var i=oo;if(i&&e){var s=Lr(i).hoistableStyles,a=jr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Fl(a)))o.loading=5;else{e=de({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(a))&&eg(e,n);var l=r=i.createElement("link");Je(l),sn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,uu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function aA(e,t){fs.X(e,t);var n=oo;if(n&&e){var i=Lr(n).hoistableScripts,s=lo(e),a=i.get(s);a||(a=n.querySelector(Hl(s)),a||(e=de({src:e,async:!0},t),(t=oi.get(s))&&ng(e,t),a=n.createElement("script"),Je(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function rA(e,t){fs.M(e,t);var n=oo;if(n&&e){var i=Lr(n).hoistableScripts,s=lo(e),a=i.get(s);a||(a=n.querySelector(Hl(s)),a||(e=de({src:e,async:!0,type:"module"},t),(t=oi.get(s))&&ng(e,t),a=n.createElement("script"),Je(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Lv(e,t,n,i){var s=(s=Vs.current)?El(s):null;if(!s)throw Error(X(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=jr(n.href),t=Lr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jr(n.href);var a=Lr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Fl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=oi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,a)),oA(s,e,a,r.state))),t&&i===null)throw Error(X(528,""));return r}if(t&&i!==null)throw Error(X(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=lo(n),t=Lr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(X(444,e))}}function jr(e){return'href="'+ii(e)+'"'}function Fl(e){return'link[rel="stylesheet"]['+e+"]"}function OS(e){return de({},e,{"data-precedence":e.precedence,precedence:null})}function oA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[yu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[yu]=!0,t.onload=t.onerror=ly.bind(null,t),sn(t,"link",n),Je(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function lo(e){return'[src="'+ii(e)+'"]'}function Hl(e){return"script[async]"+e}function Ov(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ii(n.href)+'"]');if(i)return t.instance=i,Je(i),i;var s=de({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),sn(i,"style",s),uu(i,n.precedence,e),t.instance=i;case"stylesheet":s=jr(n.href);var a=e.querySelector(Fl(s));if(a)return t.state.loading|=4,t.instance=a,Je(a),a;i=OS(n),(s=oi.get(s))&&eg(i,s),a=(e.ownerDocument||e).createElement("link"),Je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),t.state.loading|=4,uu(a,n.precedence,e),t.instance=a;case"script":return a=lo(n.src),(s=e.querySelector(Hl(a)))?(t.instance=s,Je(s),s):(i=n,(s=oi.get(a))&&(i=de({},n),ng(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Je(s),sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(X(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,uu(i,n.precedence,e));return t.instance}function uu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function eg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ng(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hu=null;function Iv(e,t,n){if(hu===null){var i=new Map,s=hu=new Map;s.set(n,i)}else s=hu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ll]||a[$e]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function sm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function lA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function IS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Bv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=PS(t),e.suspenseyImages.push(t)),e=hA.bind(e),t.decode().then(e,e))}function cA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=jr(i.href),a=t.querySelector(Fl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Al.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Je(a);return}a=t.ownerDocument||t,i=OS(i),(s=oi.get(s))&&eg(i,s),a=a.createElement("link"),Je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Al.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var fu=0;function uA(e,t){return e.stylesheets&&e.count===0&&du(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&du(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&fu===0&&(fu=62500*CE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&du(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>fu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function BS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)du(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Al(){this.count--,BS(this)}function hA(){this.imgCount--,BS(this)}var Gu=null;function du(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gu=new Map,t.forEach(fA,e),Gu=null,Al.call(e))}function fA(e,t){if(!(t.state.loading&4)){var n=Gu.get(e);if(n)var i=n.get(null);else{n=new Map,Gu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Al.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var $r={$$typeof:Li,Provider:null,Consumer:null,_currentValue:Ca,_currentValue2:Ca,_threadCount:0};function dA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.hiddenUpdates=bd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function zS(e,t,n,i,s,a,r,o,l,c,f,d){return e=new dA(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=En(3,null,null,t),e.current=a,a.stateNode=e,t=Mm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Em(a),e}function FS(e){return e?(e=Rr,e):Rr}function HS(e,t,n,i,s,a){s=FS(s),i.context===null?i.context=s:i.pendingContext=s,i=ks(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Xs(e,i,t),n!==null&&(An(n,e,t),sl(n,e,t))}function zv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ig(e,t){zv(e,t),(e=e.alternate)&&zv(e,t)}function VS(e){if(e.tag===13||e.tag===31){var t=Xa(e,67108864);t!==null&&An(t,e,67108864),ig(e,67108864)}}function Fv(e){if(e.tag===13||e.tag===31){var t=Hn();t=um(t);var n=Xa(e,t);n!==null&&An(n,e,t),ig(e,t)}}var to=!0;function pA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=te.p;try{te.p=2,sg(e,t,n,i)}finally{te.p=a,Rt.T=s}}function mA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=te.p;try{te.p=8,sg(e,t,n,i)}finally{te.p=a,Rt.T=s}}function sg(e,t,n,i){if(to){var s=am(i);if(s===null)qd(e,t,i,ku,n),Hv(e,i);else if(_A(s,e,t,n,i))i.stopPropagation();else if(Hv(e,i),t&4&&-1<gA.indexOf(e)){for(;s!==null;){var a=io(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=ba(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Vi(a),($t&6)===0&&(Bu=Bn()+500,zl(0,!1))}}break;case 31:case 13:o=Xa(a,2),o!==null&&An(o,a,2),ah(),ig(a,2)}if(a=am(i),a===null&&qd(e,t,i,ku,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else qd(e,t,i,null,n)}}function am(e){return e=dm(e),ag(e)}var ku=null;function ag(e){if(ku=null,e=Aa(e),e!==null){var t=Rl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=qv(t),e!==null)return e;e=null}else if(n===31){if(e=Yv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ku=e,null}function GS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(D1()){case $v:return 2;case ty:return 8;case vu:case N1:return 32;case ey:return 268435456;default:return 32}default:return 32}}var rm=!1,Zs=null,Js=null,Ks=null,wl=new Map,Cl=new Map,Os=[],gA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hv(e,t){switch(e){case"focusin":case"focusout":Zs=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":Ks=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(t.pointerId)}}function Yo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=io(t),t!==null&&VS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function _A(e,t,n,i,s){switch(t){case"focusin":return Zs=Yo(Zs,e,t,n,i,s),!0;case"dragenter":return Js=Yo(Js,e,t,n,i,s),!0;case"mouseover":return Ks=Yo(Ks,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return wl.set(a,Yo(wl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Cl.set(a,Yo(Cl.get(a)||null,e,t,n,i,s)),!0}return!1}function kS(e){var t=Aa(e.target);if(t!==null){var n=Rl(t);if(n!==null){if(t=n.tag,t===13){if(t=qv(n),t!==null){e.blockedOn=t,f_(e.priority,function(){Fv(n)});return}}else if(t===31){if(t=Yv(n),t!==null){e.blockedOn=t,f_(e.priority,function(){Fv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=am(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);cp=i,n.target.dispatchEvent(i),cp=null}else return t=io(n),t!==null&&VS(t),e.blockedOn=n,!1;t.shift()}return!0}function Vv(e,t,n){pu(e)&&n.delete(t)}function vA(){rm=!1,Zs!==null&&pu(Zs)&&(Zs=null),Js!==null&&pu(Js)&&(Js=null),Ks!==null&&pu(Ks)&&(Ks=null),wl.forEach(Vv),Cl.forEach(Vv)}function Zc(e,t){e.blockedOn===t&&(e.blockedOn=null,rm||(rm=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,vA)))}var Jc=null;function Gv(e){Jc!==e&&(Jc=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){Jc===e&&(Jc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ag(i||n)===null)continue;break}var a=io(n);a!==null&&(e.splice(t,3),t-=3,Ep(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function eo(e){function t(l){return Zc(l,e)}Zs!==null&&Zc(Zs,e),Js!==null&&Zc(Js,e),Ks!==null&&Zc(Ks,e),wl.forEach(t),Cl.forEach(t);for(var n=0;n<Os.length;n++){var i=Os[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Os.length&&(n=Os[0],n.blockedOn===null);)kS(n),n.blockedOn===null&&Os.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Cn]||null;if(typeof a=="function")r||Gv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Cn]||null)o=r.formAction;else if(ag(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Gv(n)}}}function XS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function rg(e){this._internalRoot=e}lh.prototype.render=rg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));var n=t.current,i=Hn();HS(n,i,e,t,null,null)};lh.prototype.unmount=rg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;HS(e.current,2,null,e,null,null),ah(),t[no]=null}};function lh(e){this._internalRoot=e}lh.prototype.unstable_scheduleHydration=function(e){if(e){var t=oy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Os.length&&t!==0&&t<Os[n].priority;n++);Os.splice(n,0,e),n===0&&kS(e)}};var kv=Xv.version;if(kv!=="19.3.1")throw Error(X(527,kv,"19.3.1"));te.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=y1(t),e=e!==null?Zv(e):null,e=e===null?null:e.stateNode,e};var yA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zo.isDisabled&&Zo.supportsFiber))try{Dl=Zo.inject(yA),zn=Zo}catch{}var Zo;ch.createRoot=function(e,t){if(!Wv(e))throw Error(X(299));var n=!1,i="",s=Tx,a=Ex,r=Ax;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=zS(e,1,!1,null,null,n,i,null,s,a,r,XS),e[no]=t.current,Qm(e),new rg(t)};ch.hydrateRoot=function(e,t,n){if(!Wv(e))throw Error(X(299));var i=!1,s="",a=Tx,r=Ex,o=Ax,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=zS(e,1,!0,t,n??null,i,s,l,a,r,o,XS),t.context=FS(null),n=t.current,i=Hn(),i=um(i),s=ks(i),s.callback=null,Xs(n,s,i),n=i,t.current.lanes=n,Ul(t,n),Vi(t),e[no]=t.current,Qm(e),new lh(t)};ch.version="19.3.1"});var ZS=As((H3,YS)=>{"use strict";function qS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qS)}catch(e){console.error(e)}}qS(),YS.exports=WS()});var P=w0(Tc(),1),Bb=w0(ZS(),1);var pM=0,Bg=1,mM=2;var zg=1,gM=2,Wi=3,xs=0,xn=1,qi=2,bs=0,Qa=1,Fg=2,Hg=3,Vg=4,_M=5,fa=100,vM=101,yM=102,xM=103,SM=104,MM=200,bM=201,TM=202,EM=203,Nh=204,Uh=205,AM=206,wM=207,CM=208,RM=209,DM=210,NM=211,UM=212,LM=213,OM=214,rf=0,of=1,lf=2,ja=3,cf=4,uf=5,hf=6,ff=7,Gg=0,IM=1,PM=2,Ts=0,BM=1,zM=2,FM=3,HM=4,VM=5,GM=6,kM=7;var kg=300,nr=301,ir=302,df=303,pf=304,dc=306,Lh=1e3,ha=1001,Oh=1002,ci=1003,XM=1004;var pc=1005;var bi=1006,mf=1007;var _a=1008;var Yi=1009,Xg=1010,Wg=1011,Ro=1012,gf=1013,va=1014,Zi=1015,Do=1016,_f=1017,vf=1018,No=1020,qg=35902,Yg=35899,Zg=1021,Jg=1022,hi=1023,bo=1026,Uo=1027,Kg=1028,yf=1029,Qg=1030,xf=1031;var Sf=1033,mc=33776,gc=33777,_c=33778,vc=33779,Mf=35840,bf=35841,Tf=35842,Ef=35843,Af=36196,wf=37492,Cf=37496,Rf=37808,Df=37809,Nf=37810,Uf=37811,Lf=37812,Of=37813,If=37814,Pf=37815,Bf=37816,zf=37817,Ff=37818,Hf=37819,Vf=37820,Gf=37821,kf=36492,Xf=36494,Wf=36495,qf=36283,Yf=36284,Zf=36285,Jf=36286;var Yl=2300,Ih=2301,Dh=2302,Ng=2400,Ug=2401,Lg=2402;var WM=3200,qM=3201;var YM=0,ZM=1,Es="",Wn="srgb",$a="srgb-linear",Zl="linear",le="srgb";var Ka=7680;var Og=519,JM=512,KM=513,QM=514,jg=515,jM=516,$M=517,tb=518,eb=519,Ig=35044;var $g="300 es",Si=2e3,Jl=2001;var Ss=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var og=Math.PI/180,Ph=180/Math.PI;function yc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[e&255]+un[e>>8&255]+un[e>>16&255]+un[e>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Wt(e,t,n){return Math.max(t,Math.min(n,e))}function xA(e,t){return(e%t+t)%t}function lg(e,t,n){return(1-n)*e+n*t}function Vl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Rn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ee=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ms=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==g){let m=1-o,u=l*h+c*p+f*g+d*x,_=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let A=Math.sqrt(v),C=Math.atan2(A,u*_);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let y=o*_;if(l=l*m+h*y,c=c*m+p*y,f=f*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],h=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+f*d+l*p-c*h,t[n+1]=l*g+f*h+c*d-o*p,t[n+2]=c*g+f*p+o*h-l*d,t[n+3]=f*g-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(JS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(JS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cg.copy(this).projectOnVector(t),this.sub(cg)}reflect(t){return this.sub(cg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cg=new B,JS=new Ms,Bt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],_=s[1],v=s[4],y=s[7],A=s[2],C=s[5],w=s[8];return a[0]=r*x+o*_+l*A,a[3]=r*m+o*v+l*C,a[6]=r*u+o*y+l*w,a[1]=c*x+f*_+d*A,a[4]=c*m+f*v+d*C,a[7]=c*u+f*y+d*w,a[2]=h*x+p*_+g*A,a[5]=h*m+p*v+g*C,a[8]=h*u+p*y+g*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,p=c*a-r*l,g=n*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-f*i)*x,t[2]=(o*i-s*r)*x,t[3]=h*x,t[4]=(f*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(ug.makeScale(t,n)),this}rotate(t){return this.premultiply(ug.makeRotation(-t)),this}translate(t,n){return this.premultiply(ug.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ug=new Bt;function t0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Kl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nb(){let e=Kl("canvas");return e.style.display="block",e}var KS={};function To(e){e in KS||(KS[e]=!0,console.warn(e))}function ib(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var QS=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jS=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SA(){let e={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===le&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?Zl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return To("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return To("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[$a]:{primaries:t,whitePoint:i,transfer:Zl,toXYZ:QS,fromXYZ:jS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:QS,fromXYZ:jS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),e}var Jt=SA();function ys(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Mo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var co,Bh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{co===void 0&&(co=Kl("canvas")),co.width=t.width,co.height=t.height;let s=co.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=co}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Kl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ys(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},MA=0,Eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=yc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(hg(s[r].image)):a.push(hg(s[r]))}else a=hg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function hg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Bh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bA=0,fg=new B,Yn=class e extends Ss{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ha,s=ha,a=bi,r=_a,o=hi,l=Yi,c=e.DEFAULT_ANISOTROPY,f=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=yc(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fg).x}get height(){return this.source.getSize(fg).y}get depth(){return this.source.getSize(fg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case ha:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case ha:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=kg;Yn.DEFAULT_ANISOTROPY=1;var Le=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,A=(u+1)/2,C=(f+h)/4,w=(d+x)/4,D=(g+m)/4;return v>y&&v>A?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=C/i,a=w/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=C/s,a=D/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=w/a,s=D/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this.w=Wt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this.w=Wt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zh=class extends Ss{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Yn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Eo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class extends zh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ql=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fh=class extends Yn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var da=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(a,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uh.copy(i.boundingBox)),uh.applyMatrix4(t.matrixWorld),this.union(uh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gl),hh.subVectors(this.max,Gl),uo.subVectors(t.a,Gl),ho.subVectors(t.b,Gl),fo.subVectors(t.c,Gl),sa.subVectors(ho,uo),aa.subVectors(fo,ho),qa.subVectors(uo,fo);let n=[0,-sa.z,sa.y,0,-aa.z,aa.y,0,-qa.z,qa.y,sa.z,0,-sa.x,aa.z,0,-aa.x,qa.z,0,-qa.x,-sa.y,sa.x,0,-aa.y,aa.x,0,-qa.y,qa.x,0];return!dg(n,uo,ho,fo,hh)||(n=[1,0,0,0,1,0,0,0,1],!dg(n,uo,ho,fo,hh))?!1:(fh.crossVectors(sa,aa),n=[fh.x,fh.y,fh.z],dg(n,uo,ho,fo,hh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,uh=new da,uo=new B,ho=new B,fo=new B,sa=new B,aa=new B,qa=new B,Gl=new B,hh=new B,fh=new B,Ya=new B;function dg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ya.fromArray(e,a);let o=s.x*Math.abs(Ya.x)+s.y*Math.abs(Ya.y)+s.z*Math.abs(Ya.z),l=t.dot(Ya),c=n.dot(Ya),f=i.dot(Ya);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var TA=new da,kl=new B,pg=new B,tr=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):TA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kl.subVectors(t,this.center);let n=kl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kl.copy(t.center).add(pg)),this.expandByPoint(kl.copy(t.center).sub(pg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ps=new B,mg=new B,dh=new B,ra=new B,gg=new B,ph=new B,_g=new B,jl=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ps.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,n),ps.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){mg.copy(t).add(n).multiplyScalar(.5),dh.copy(n).sub(t).normalize(),ra.copy(this.origin).sub(mg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(dh),o=ra.dot(this.direction),l=-ra.dot(dh),c=ra.lengthSq(),f=Math.abs(1-r*r),d,h,p,g;if(f>0)if(d=r*l-o,h=r*o-l,g=a*f,d>=0)if(h>=-g)if(h<=g){let x=1/f;d*=x,h*=x,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mg).addScaledVector(dh,h),p}intersectSphere(t,n){ps.subVectors(t.center,this.origin);let i=ps.dot(this.direction),s=ps.dot(ps)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,n,i,s,a){gg.subVectors(n,t),ph.subVectors(i,t),_g.crossVectors(gg,ph);let r=this.direction.dot(_g),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ra.subVectors(this.origin,t);let l=o*this.direction.dot(ph.crossVectors(ra,ph));if(l<0)return null;let c=o*this.direction.dot(gg.cross(ra));if(c<0||l+c>r)return null;let f=-o*ra.dot(_g);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,f,d,h,p,g,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/po.setFromMatrixColumn(t,0).length(),a=1/po.setFromMatrixColumn(t,1).length(),r=1/po.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,g=c*f,x=c*d;n[0]=h+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-g,n[6]=x+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,g=c*f,x=c*d;n[0]=h-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*f,n[9]=x-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+g,n[10]=h-x*d}else if(t.order==="XZY"){let h=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=r*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EA,t,AA)}lookAt(t,n,i){let s=this.elements;return kn.subVectors(t,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),oa.crossVectors(i,kn),oa.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),oa.crossVectors(i,kn)),oa.normalize(),mh.crossVectors(kn,oa),s[0]=oa.x,s[4]=mh.x,s[8]=kn.x,s[1]=oa.y,s[5]=mh.y,s[9]=kn.y,s[2]=oa.z,s[6]=mh.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],_=i[3],v=i[7],y=i[11],A=i[15],C=s[0],w=s[4],D=s[8],T=s[12],b=s[1],U=s[5],H=s[9],k=s[13],Y=s[2],K=s[6],q=s[10],it=s[14],V=s[3],ot=s[7],ht=s[11],Tt=s[15];return a[0]=r*C+o*b+l*Y+c*V,a[4]=r*w+o*U+l*K+c*ot,a[8]=r*D+o*H+l*q+c*ht,a[12]=r*T+o*k+l*it+c*Tt,a[1]=f*C+d*b+h*Y+p*V,a[5]=f*w+d*U+h*K+p*ot,a[9]=f*D+d*H+h*q+p*ht,a[13]=f*T+d*k+h*it+p*Tt,a[2]=g*C+x*b+m*Y+u*V,a[6]=g*w+x*U+m*K+u*ot,a[10]=g*D+x*H+m*q+u*ht,a[14]=g*T+x*k+m*it+u*Tt,a[3]=_*C+v*b+y*Y+A*V,a[7]=_*w+v*U+y*K+A*ot,a[11]=_*D+v*H+y*q+A*ht,a[15]=_*T+v*k+y*it+A*Tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],g=t[3],x=t[7],m=t[11],u=t[15];return g*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+x*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],g=t[12],x=t[13],m=t[14],u=t[15],_=d*m*c-x*h*c+x*l*p-o*m*p-d*l*u+o*h*u,v=g*h*c-f*m*c-g*l*p+r*m*p+f*l*u-r*h*u,y=f*x*c-g*d*c+g*o*p-r*x*p-f*o*u+r*d*u,A=g*d*l-f*x*l-g*o*h+r*x*h+f*o*m-r*d*m,C=n*_+i*v+s*y+a*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=_*w,t[1]=(x*h*a-d*m*a-x*s*p+i*m*p+d*s*u-i*h*u)*w,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=v*w,t[5]=(f*m*a-g*h*a+g*s*p-n*m*p-f*s*u+n*h*u)*w,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*h*a-f*l*a+f*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(g*d*a-f*x*a-g*i*p+n*x*p+f*i*u-n*d*u)*w,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*u+n*o*u)*w,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=A*w,t[13]=(f*x*s-g*d*s+g*i*h-n*x*h-f*i*m+n*d*m)*w,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,h=a*c,p=a*f,g=a*d,x=r*f,m=r*d,u=o*d,_=l*c,v=l*f,y=l*d,A=i.x,C=i.y,w=i.z;return s[0]=(1-(x+u))*A,s[1]=(p+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(h+u))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+v)*w,s[9]=(m-_)*w,s[10]=(1-(h+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=po.set(s[0],s[1],s[2]).length(),r=po.set(s[4],s[5],s[6]).length(),o=po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],yi.copy(this);let c=1/a,f=1/r,d=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=f,yi.elements[5]*=f,yi.elements[6]*=f,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,n.setFromRotationMatrix(yi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Si)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Jl)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Si)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Jl)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},po=new B,yi=new Pe,EA=new B(0,0,0),AA=new B(1,1,1),oa=new B,mh=new B,kn=new B,$S=new Pe,tM=new Ms,Xi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return $S.makeRotationFromQuaternion(t),this.setFromRotationMatrix($S,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return tM.setFromEuler(this),this.setFromQuaternion(tM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var $l=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wA=0,eM=new B,mo=new Ms,ms=new Pe,gh=new B,Xl=new B,CA=new B,RA=new Ms,nM=new B(1,0,0),iM=new B(0,1,0),sM=new B(0,0,1),aM={type:"added"},DA={type:"removed"},go={type:"childadded",child:null},vg={type:"childremoved",child:null},Zn=class e extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Xi,i=new Ms,s=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Bt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mo.setFromAxisAngle(t,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(t,n){return mo.setFromAxisAngle(t,n),this.quaternion.premultiply(mo),this}rotateX(t){return this.rotateOnAxis(nM,t)}rotateY(t){return this.rotateOnAxis(iM,t)}rotateZ(t){return this.rotateOnAxis(sM,t)}translateOnAxis(t,n){return eM.copy(t).applyQuaternion(this.quaternion),this.position.add(eM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(nM,t)}translateY(t){return this.translateOnAxis(iM,t)}translateZ(t){return this.translateOnAxis(sM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gh.copy(t):gh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Xl,gh,this.up):ms.lookAt(gh,Xl,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),mo.setFromRotationMatrix(ms),this.quaternion.premultiply(mo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(aM),go.child=t,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(DA),vg.child=t,this.dispatchEvent(vg),vg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(aM),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,t,CA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,RA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Zn.DEFAULT_UP=new B(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new B,gs=new B,yg=new B,_s=new B,_o=new B,vo=new B,rM=new B,xg=new B,Sg=new B,Mg=new B,bg=new Le,Tg=new Le,Eg=new Le,ua=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),xi.subVectors(t,n),s.cross(xi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){xi.subVectors(s,n),gs.subVectors(i,n),yg.subVectors(t,n);let r=xi.dot(xi),o=xi.dot(gs),l=xi.dot(yg),c=gs.dot(gs),f=gs.dot(yg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,g=(r*f-o*l)*h;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_s.x),l.addScaledVector(r,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return bg.setScalar(0),Tg.setScalar(0),Eg.setScalar(0),bg.fromBufferAttribute(t,n),Tg.fromBufferAttribute(t,i),Eg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bg,a.x),r.addScaledVector(Tg,a.y),r.addScaledVector(Eg,a.z),r}static isFrontFacing(t,n,i,s){return xi.subVectors(i,n),gs.subVectors(t,n),xi.cross(gs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),xi.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;_o.subVectors(s,i),vo.subVectors(a,i),xg.subVectors(t,i);let l=_o.dot(xg),c=vo.dot(xg);if(l<=0&&c<=0)return n.copy(i);Sg.subVectors(t,s);let f=_o.dot(Sg),d=vo.dot(Sg);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(_o,r);Mg.subVectors(t,a);let p=_o.dot(Mg),g=vo.dot(Mg);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(vo,o);let m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return rM.subVectors(a,s),o=(d-f)/(d-f+(p-g)),n.copy(s).addScaledVector(rM,o);let u=1/(m+x+h);return r=x*u,o=h*u,n.copy(i).addScaledVector(_o,r).addScaledVector(vo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},la={h:0,s:0,l:0},_h={h:0,s:0,l:0};function Ag(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=xA(t,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Ag(r,a,t+1/3),this.g=Ag(r,a,t),this.b=Ag(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Wn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Wn){let i=sb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Jt.workingToColorSpace(hn.copy(this),t),Math.round(Wt(hn.r*255,0,255))*65536+Math.round(Wt(hn.g*255,0,255))*256+Math.round(Wt(hn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(hn.copy(this),n);let i=hn.r,s=hn.g,a=hn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(hn.copy(this),n),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Wn){Jt.workingToColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,s=hn.b;return t!==Wn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(la),this.setHSL(la.h+t,la.s+n,la.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(la),t.getHSL(_h);let i=lg(la.h,_h.h,n),s=lg(la.s,_h.s,n),a=lg(la.l,_h.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new jt;jt.NAMES=sb;var NA=0,pa=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=yc(),this.name="",this.type="Material",this.blending=Qa,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qa&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nh&&(i.blendSrc=this.blendSrc),this.blendDst!==Uh&&(i.blendDst=this.blendDst),this.blendEquation!==fa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ka&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ka&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ka&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tc=class extends pa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new B,vh=new ee,UA=0,qn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Ig,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vh.fromBufferAttribute(this,n),vh.applyMatrix3(t),this.setXY(n,vh.x,vh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Vl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Rn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Rn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ig&&(t.usage=this.usage),t}};var ec=class extends qn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var nc=class extends qn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Mi=class extends qn{constructor(t,n,i){super(new Float32Array(t),n,i)}},LA=0,li=new Pe,wg=new Zn,yo=new B,Xn=new da,Wl=new da,Qe=new B,Ti=class e extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t0(t)?nc:ec)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return wg.lookAt(t),wg.updateMatrix(),this.applyMatrix4(wg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Mi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Wl.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Xn.min,Wl.min),Xn.expandByPoint(Qe),Qe.addVectors(Xn.max,Wl.max),Xn.expandByPoint(Qe)):(Xn.expandByPoint(Wl.min),Xn.expandByPoint(Wl.max))}Xn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Qe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Qe));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Qe.fromBufferAttribute(o,c),l&&(yo.fromBufferAttribute(t,c),Qe.add(yo)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;let c=new B,f=new B,d=new B,h=new ee,p=new ee,g=new ee,x=new B,m=new B;function u(D,T,b){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),h.fromBufferAttribute(a,D),p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,b),f.sub(c),d.sub(c),p.sub(h),g.sub(h);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(U),o[D].add(x),o[T].add(x),o[b].add(x),l[D].add(m),l[T].add(m),l[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,T=_.length;D<T;++D){let b=_[D],U=b.start,H=b.count;for(let k=U,Y=U+H;k<Y;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new B,y=new B,A=new B,C=new B;function w(D){A.fromBufferAttribute(s,D),C.copy(A);let T=o[D];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(C,T);let U=y.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,U)}for(let D=0,T=_.length;D<T;++D){let b=_[D],U=b.start,H=b.count;for(let k=U,Y=U+H;k<Y;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new B,a=new B,r=new B,o=new B,l=new B,c=new B,f=new B,d=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new qn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oM=new Pe,Za=new jl,yh=new tr,lM=new B,xh=new B,Sh=new B,Mh=new B,Cg=new B,bh=new B,cM=new B,Th=new B,ui=class extends Zn{constructor(t=new Ti,n=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){bh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(Cg.fromBufferAttribute(d,t),r?bh.addScaledVector(Cg,f):bh.addScaledVector(Cg.sub(n),f))}n.add(bh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yh.copy(i.boundingSphere),yh.applyMatrix4(a),Za.copy(t.ray).recast(t.near),!(yh.containsPoint(Za.origin)===!1&&(Za.intersectSphere(yh,lM)===null||Za.origin.distanceToSquared(lM)>(t.far-t.near)**2))&&(oM.copy(a).invert(),Za.copy(t.ray).applyMatrix4(oM),!(i.boundingBox!==null&&Za.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Za)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],u=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let C=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);s=Eh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Eh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],u=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let C=y,w=y+1,D=y+2;s=Eh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){let _=m,v=m+1,y=m+2;s=Eh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function OA(e,t,n,i,s,a,r,o){let l;if(t.side===xn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===xs,o),l===null)return null;Th.copy(o),Th.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Th);return c<n.near||c>n.far?null:{distance:c,point:Th.clone(),object:e}}function Eh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,xh),e.getVertexPosition(l,Sh),e.getVertexPosition(c,Mh);let f=OA(e,t,n,i,xh,Sh,Mh,cM);if(f){let d=new B;ua.getBarycoord(cM,xh,Sh,Mh,d),s&&(f.uv=ua.getInterpolatedAttribute(s,o,l,c,d,new ee)),a&&(f.uv1=ua.getInterpolatedAttribute(a,o,l,c,d,new ee)),r&&(f.normal=ua.getInterpolatedAttribute(r,o,l,c,d,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new B,materialIndex:0};ua.getNormal(xh,Sh,Mh,h.normal),f.face=h,f.barycoord=d}return f}var Ao=class e extends Ti{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(f,3)),this.setAttribute("uv",new Mi(d,2));function g(x,m,u,_,v,y,A,C,w,D,T){let b=y/w,U=A/D,H=y/2,k=A/2,Y=C/2,K=w+1,q=D+1,it=0,V=0,ot=new B;for(let ht=0;ht<q;ht++){let Tt=ht*U-k;for(let Gt=0;Gt<K;Gt++){let pe=Gt*b-H;ot[x]=pe*_,ot[m]=Tt*v,ot[u]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[u]=C>0?1:-1,f.push(ot.x,ot.y,ot.z),d.push(Gt/w),d.push(1-ht/D),it+=1}}for(let ht=0;ht<D;ht++)for(let Tt=0;Tt<w;Tt++){let Gt=h+Tt+K*ht,pe=h+Tt+K*(ht+1),Me=h+(Tt+1)+K*(ht+1),ne=h+(Tt+1)+K*ht;l.push(Gt,pe,ne),l.push(pe,Me,ne),V+=6}o.addGroup(p,V,T),p+=V,h+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function sr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function dn(e){let t={};for(let n=0;n<e.length;n++){let i=sr(e[n]);for(let s in i)t[s]=i[s]}return t}function IA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function e0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var ab={clone:sr,merge:dn},PA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends pa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=IA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ic=class extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ca=new B,uM=new ee,hM=new ee,fn=class extends ic{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(og*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(og*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ca.x,ca.y).multiplyScalar(-t/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ca.x,ca.y).multiplyScalar(-t/ca.z)}getViewSize(t,n){return this.getViewBounds(t,uM,hM),n.subVectors(hM,uM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(og*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},xo=-90,So=1,Hh=class extends Zn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(xo,So,t,n);s.layers=this.layers,this.add(s);let a=new fn(xo,So,t,n);a.layers=this.layers,this.add(a);let r=new fn(xo,So,t,n);r.layers=this.layers,this.add(r);let o=new fn(xo,So,t,n);o.layers=this.layers,this.add(o);let l=new fn(xo,So,t,n);l.layers=this.layers,this.add(l);let c=new fn(xo,So,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},sc=class extends Yn{constructor(t=[],n=nr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vh=class extends ki{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ao(5,5,5),a=new Ei({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:bs});a.uniforms.tEquirect.value=n;let r=new ui(s,a),o=n.minFilter;return n.minFilter===_a&&(n.minFilter=bi),new Hh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},vs=class extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},zA={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var ac=class extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Rg=new B,FA=new B,HA=new Bt,Gi=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Rg.subVectors(i,n).cross(FA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Rg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||HA.getNormalMatrix(t),s=this.coplanarPoint(Rg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ja=new tr,VA=new ee(.5,.5),Ah=new B,rc=class{constructor(t=new Gi,n=new Gi,i=new Gi,s=new Gi,a=new Gi,r=new Gi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Si,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],h=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],_=a[12],v=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-f,u-g,A-_).normalize(),s[1].setComponents(c+r,p+f,u+g,A+_).normalize(),s[2].setComponents(c+o,p+d,u+x,A+v).normalize(),s[3].setComponents(c-o,p-d,u-x,A-v).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,u-m,A-y).normalize();else if(s[4].setComponents(c-l,p-h,u-m,A-y).normalize(),n===Si)s[5].setComponents(c+l,p+h,u+m,A+y).normalize();else if(n===Jl)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(t){Ja.center.set(0,0,0);let n=VA.distanceTo(t.center);return Ja.radius=.7071067811865476+n,Ja.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ah.x=s.normal.x>0?t.max.x:t.min.x,Ah.y=s.normal.y>0?t.max.y:t.min.y,Ah.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ah)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Co=class extends pa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Gh=new B,kh=new B,fM=new Pe,ql=new jl,wh=new tr,Dg=new B,dM=new B,Xh=class extends Zn{constructor(t=new Ti,n=new Co){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)Gh.fromBufferAttribute(n,s-1),kh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Gh.distanceTo(kh);t.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wh.copy(i.boundingSphere),wh.applyMatrix4(s),wh.radius+=a,t.ray.intersectsSphere(wh)===!1)return;fM.copy(s).invert(),ql.copy(t.ray).applyMatrix4(fM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){let u=f.getX(x),_=f.getX(x+1),v=Ch(this,t,ql,l,u,_,x);v&&n.push(v)}if(this.isLineLoop){let x=f.getX(g-1),m=f.getX(p),u=Ch(this,t,ql,l,x,m,g-1);u&&n.push(u)}}else{let p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){let u=Ch(this,t,ql,l,x,x+1,x);u&&n.push(u)}if(this.isLineLoop){let x=Ch(this,t,ql,l,g-1,p,g-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Ch(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(Gh.fromBufferAttribute(o,s),kh.fromBufferAttribute(o,a),n.distanceSqToSegment(Gh,kh,Dg,dM)>i)return;Dg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Dg);if(!(c<t.near||c>t.far))return{distance:c,point:dM.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var oc=class extends Xh{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}};var lc=class extends Yn{constructor(t,n,i=va,s,a,r,o=ci,l=ci,c,f=bo,d=1){if(f!==bo&&f!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},cc=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Wh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let f=i[s],h=i[s+1]-f,p=(r-f)/h;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new ee:new B);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new B,s=[],a=[],r=[],o=new B,l=new Pe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new B)}a[0]=new B,r[0]=new B;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(Wt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},uc=class extends Wh{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new ee){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*d+this.aX,c=h*d+p*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}};var hc=class e extends Ti{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=n/l,p=[],g=[],x=[],m=[];for(let u=0;u<f;u++){let _=u*h-r;for(let v=0;v<c;v++){let y=v*d-a;g.push(y,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){let v=_+c*u,y=_+c*(u+1),A=_+1+c*(u+1),C=_+1+c*u;p.push(v,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new Mi(g,3)),this.setAttribute("normal",new Mi(x,3)),this.setAttribute("uv",new Mi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var qh=class extends pa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yh=class extends pa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function GA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var er=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zh=class extends er{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ng,endingEnd:Ng}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ug:a=t,o=2*n-i;break;case Lg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ug:r=t,l=2*i-n;break;case Lg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,u=-h*m+2*h*x-h*g,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=u*r[f+A]+_*r[c+A]+v*r[l+A]+y*r[d+A];return a}},Jh=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*f;return a}},Kh=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rh(n,this.TimeBufferType),this.values=Rh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Rh(t.times,Array),values:Rh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Kh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Yl:n=this.InterpolantFactoryMethodDiscrete;break;case Ih:n=this.InterpolantFactoryMethodLinear;break;case Dh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yl;case this.InterpolantFactoryMethodLinear:return Ih;case this.InterpolantFactoryMethodSmooth:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&GA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[h+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Ih;var ma=class extends Jn{constructor(t,n,i){super(t,n,i)}};ma.prototype.ValueTypeName="bool";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Yl;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Qh=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};Qh.prototype.ValueTypeName="color";var jh=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};jh.prototype.ValueTypeName="number";var $h=class extends er{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ms.slerpFlat(a,0,r,c-o,r,c,l);return a}},fc=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new $h(this.times,this.values,this.getValueSize(),t)}};fc.prototype.ValueTypeName="quaternion";fc.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Jn{constructor(t,n,i){super(t,n,i)}};ga.prototype.ValueTypeName="string";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=Yl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var tf=class extends Jn{constructor(t,n,i,s){super(t,n,i,s)}};tf.prototype.ValueTypeName="vector";var ef=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rb=new ef,nf=class{constructor(t){this.manager=t!==void 0?t:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};nf.DEFAULT_MATERIAL_NAME="__DEFAULT";var sf=class extends ic{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var af=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var n0="\\[\\]\\.:\\/",kA=new RegExp("["+n0+"]","g"),i0="[^"+n0+"]",XA="[^"+n0.replace("\\.","")+"]",WA=/((?:WC+[\/:])*)/.source.replace("WC",i0),qA=/(WCOD+)?/.source.replace("WCOD",XA),YA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",i0),ZA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",i0),JA=new RegExp("^"+WA+qA+YA+ZA+"$"),KA=["material","materials","bones","map"],Pg=class{constructor(t,n,i){let s=i||Se.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Se=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kA,"")}static parseTrackName(t){let n=JA.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);KA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Pg;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V3=new Float32Array(1);function s0(e,t,n,i){let s=QA(i);switch(n){case Zg:return e*t;case Kg:return e*t/s.components*s.byteLength;case yf:return e*t/s.components*s.byteLength;case Qg:return e*t*2/s.components*s.byteLength;case xf:return e*t*2/s.components*s.byteLength;case Jg:return e*t*3/s.components*s.byteLength;case hi:return e*t*4/s.components*s.byteLength;case Sf:return e*t*4/s.components*s.byteLength;case mc:case gc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _c:case vc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bf:case Ef:return Math.max(e,16)*Math.max(t,8)/4;case Mf:case Tf:return Math.max(e,8)*Math.max(t,8)/2;case Af:case wf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Cf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Df:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Nf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Uf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Lf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Of:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case If:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ff:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Hf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Vf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Gf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case kf:case Xf:case Wf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qf:case Yf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Zf:case Jf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QA(e){switch(e){case Yi:case Xg:return{byteLength:1,components:1};case Ro:case Wg:case Do:return{byteLength:2,components:1};case _f:case vf:return{byteLength:2,components:4};case va:case gf:case Zi:return{byteLength:4,components:1};case qg:case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Db(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function $A(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){let g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ew=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ow=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ww=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$w=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_C=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$C=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:tw,alphahash_pars_fragment:ew,alphamap_fragment:nw,alphamap_pars_fragment:iw,alphatest_fragment:sw,alphatest_pars_fragment:aw,aomap_fragment:rw,aomap_pars_fragment:ow,batching_pars_vertex:lw,batching_vertex:cw,begin_vertex:uw,beginnormal_vertex:hw,bsdfs:fw,iridescence_fragment:dw,bumpmap_pars_fragment:pw,clipping_planes_fragment:mw,clipping_planes_pars_fragment:gw,clipping_planes_pars_vertex:_w,clipping_planes_vertex:vw,color_fragment:yw,color_pars_fragment:xw,color_pars_vertex:Sw,color_vertex:Mw,common:bw,cube_uv_reflection_fragment:Tw,defaultnormal_vertex:Ew,displacementmap_pars_vertex:Aw,displacementmap_vertex:ww,emissivemap_fragment:Cw,emissivemap_pars_fragment:Rw,colorspace_fragment:Dw,colorspace_pars_fragment:Nw,envmap_fragment:Uw,envmap_common_pars_fragment:Lw,envmap_pars_fragment:Ow,envmap_pars_vertex:Iw,envmap_physical_pars_fragment:qw,envmap_vertex:Pw,fog_vertex:Bw,fog_pars_vertex:zw,fog_fragment:Fw,fog_pars_fragment:Hw,gradientmap_pars_fragment:Vw,lightmap_pars_fragment:Gw,lights_lambert_fragment:kw,lights_lambert_pars_fragment:Xw,lights_pars_begin:Ww,lights_toon_fragment:Yw,lights_toon_pars_fragment:Zw,lights_phong_fragment:Jw,lights_phong_pars_fragment:Kw,lights_physical_fragment:Qw,lights_physical_pars_fragment:jw,lights_fragment_begin:$w,lights_fragment_maps:tC,lights_fragment_end:eC,logdepthbuf_fragment:nC,logdepthbuf_pars_fragment:iC,logdepthbuf_pars_vertex:sC,logdepthbuf_vertex:aC,map_fragment:rC,map_pars_fragment:oC,map_particle_fragment:lC,map_particle_pars_fragment:cC,metalnessmap_fragment:uC,metalnessmap_pars_fragment:hC,morphinstance_vertex:fC,morphcolor_vertex:dC,morphnormal_vertex:pC,morphtarget_pars_vertex:mC,morphtarget_vertex:gC,normal_fragment_begin:_C,normal_fragment_maps:vC,normal_pars_fragment:yC,normal_pars_vertex:xC,normal_vertex:SC,normalmap_pars_fragment:MC,clearcoat_normal_fragment_begin:bC,clearcoat_normal_fragment_maps:TC,clearcoat_pars_fragment:EC,iridescence_pars_fragment:AC,opaque_fragment:wC,packing:CC,premultiplied_alpha_fragment:RC,project_vertex:DC,dithering_fragment:NC,dithering_pars_fragment:UC,roughnessmap_fragment:LC,roughnessmap_pars_fragment:OC,shadowmap_pars_fragment:IC,shadowmap_pars_vertex:PC,shadowmap_vertex:BC,shadowmask_pars_fragment:zC,skinbase_vertex:FC,skinning_pars_vertex:HC,skinning_vertex:VC,skinnormal_vertex:GC,specularmap_fragment:kC,specularmap_pars_fragment:XC,tonemapping_fragment:WC,tonemapping_pars_fragment:qC,transmission_fragment:YC,transmission_pars_fragment:ZC,uv_pars_fragment:JC,uv_pars_vertex:KC,uv_vertex:QC,worldpos_vertex:jC,background_vert:$C,background_frag:tR,backgroundCube_vert:eR,backgroundCube_frag:nR,cube_vert:iR,cube_frag:sR,depth_vert:aR,depth_frag:rR,distanceRGBA_vert:oR,distanceRGBA_frag:lR,equirect_vert:cR,equirect_frag:uR,linedashed_vert:hR,linedashed_frag:fR,meshbasic_vert:dR,meshbasic_frag:pR,meshlambert_vert:mR,meshlambert_frag:gR,meshmatcap_vert:_R,meshmatcap_frag:vR,meshnormal_vert:yR,meshnormal_frag:xR,meshphong_vert:SR,meshphong_frag:MR,meshphysical_vert:bR,meshphysical_frag:TR,meshtoon_vert:ER,meshtoon_frag:AR,points_vert:wR,points_frag:CR,shadow_vert:RR,shadow_frag:DR,sprite_vert:NR,sprite_frag:UR},rt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ji={basic:{uniforms:dn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:dn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:dn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:dn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:dn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:dn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:dn([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:dn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:dn([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:dn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:dn([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:dn([rt.common,rt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:dn([rt.lights,rt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ji.physical={uniforms:dn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Kf={r:0,b:0,g:0},ar=new Xi,LR=new Pe;function OR(e,t,n,i,s,a,r){let o=new jt(0),l=a===!0?0:1,c,f,d=null,h=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function x(v){let y=!1,A=g(v);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);let C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===dc)?(f===void 0&&(f=new ui(new Ao(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:sr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ar.copy(y.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(LR.makeRotationFromEuler(ar)),f.material.toneMapped=Jt.getTransfer(A.colorSpace)!==le,(d!==A||h!==A.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ui(new hc(2,2),new Ei({name:"BackgroundMaterial",uniforms:sr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,h=A.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Kf,e0(e)),i.buffers.color.setClear(Kf.r,Kf.g,Kf.b,y,r)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:x,addToRenderList:m,dispose:_}}function IR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(b,U,H,k,Y){let K=!1,q=d(k,H,U);a!==q&&(a=q,c(a.object)),K=p(b,k,H,Y),K&&g(b,k,H,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(b,U,H,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function f(b){return e.deleteVertexArray(b)}function d(b,U,H){let k=H.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let K=Y[U.id];K===void 0&&(K={},Y[U.id]=K);let q=K[k];return q===void 0&&(q=h(l()),K[k]=q),q}function h(b){let U=[],H=[],k=[];for(let Y=0;Y<n;Y++)U[Y]=0,H[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,U,H,k){let Y=a.attributes,K=U.attributes,q=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let ht=Y[V],Tt=K[V];if(Tt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Tt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Tt=b.instanceColor)),ht===void 0||ht.attribute!==Tt||Tt&&ht.data!==Tt.data)return!0;q++}return a.attributesNum!==q||a.index!==k}function g(b,U,H,k){let Y={},K=U.attributes,q=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let ht=K[V];ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let Tt={};Tt.attribute=ht,ht&&ht.data&&(Tt.data=ht.data),Y[V]=Tt,q++}a.attributes=Y,a.attributesNum=q,a.index=k}function x(){let b=a.newAttributes;for(let U=0,H=b.length;U<H;U++)b[U]=0}function m(b){u(b,0)}function u(b,U){let H=a.newAttributes,k=a.enabledAttributes,Y=a.attributeDivisors;H[b]=1,k[b]===0&&(e.enableVertexAttribArray(b),k[b]=1),Y[b]!==U&&(e.vertexAttribDivisor(b,U),Y[b]=U)}function _(){let b=a.newAttributes,U=a.enabledAttributes;for(let H=0,k=U.length;H<k;H++)U[H]!==b[H]&&(e.disableVertexAttribArray(H),U[H]=0)}function v(b,U,H,k,Y,K,q){q===!0?e.vertexAttribIPointer(b,U,H,Y,K):e.vertexAttribPointer(b,U,H,k,Y,K)}function y(b,U,H,k){x();let Y=k.attributes,K=H.getAttributes(),q=U.defaultAttributeValues;for(let it in K){let V=K[it];if(V.location>=0){let ot=Y[it];if(ot===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),ot!==void 0){let ht=ot.normalized,Tt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;let pe=Gt.buffer,Me=Gt.type,ne=Gt.bytesPerElement,Z=Me===e.INT||Me===e.UNSIGNED_INT||ot.gpuType===gf;if(ot.isInterleavedBufferAttribute){let j=ot.data,pt=j.stride,Ut=ot.offset;if(j.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)u(V.location+bt,j.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let bt=0;bt<V.locationSize;bt++)v(V.location+bt,Tt/V.locationSize,Me,ht,pt*ne,(Ut+Tt/V.locationSize*bt)*ne,Z)}else{if(ot.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)u(V.location+j,ot.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let j=0;j<V.locationSize;j++)v(V.location+j,Tt/V.locationSize,Me,ht,Tt*ne,Tt/V.locationSize*j*ne,Z)}}else if(q!==void 0){let ht=q[it];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(V.location,ht);break;case 3:e.vertexAttrib3fv(V.location,ht);break;case 4:e.vertexAttrib4fv(V.location,ht);break;default:e.vertexAttrib1fv(V.location,ht)}}}}_()}function A(){D();for(let b in i){let U=i[b];for(let H in U){let k=U[H];for(let Y in k)f(k[Y].object),delete k[Y];delete U[H]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let H in U){let k=U[H];for(let Y in k)f(k[Y].object),delete k[Y];delete U[H]}delete i[b.id]}function w(b){for(let U in i){let H=i[U];if(H[b.id]===void 0)continue;let k=H[b.id];for(let Y in k)f(k[Y].object),delete k[Y];delete H[b.id]}}function D(){T(),r=!0,a!==s&&(a=s,c(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function PR(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x]*h[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function BR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==hi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let D=w===Do&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Yi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Zi&&!D)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:C}}function zR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Gi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?f(null):c();else{let _=a?0:i,v=_*4,y=u.clippingState||null;l.value=y,y=f(g,h,v,p);for(let A=0;A!==v;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let u=p+x*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==x;++v,y+=4)r.copy(d[v]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function FR(e){let t=new WeakMap;function n(r,o){return o===df?r.mapping=nr:o===pf&&(r.mapping=ir),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===df||o===pf)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Vh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Oo=4,ob=[.125,.215,.35,.446,.526,.582],lr=20,a0=new sf,lb=new jt,r0=null,o0=0,l0=0,c0=!1,or=(1+Math.sqrt(5))/2,Lo=1/or,cb=[new B(-or,Lo,0),new B(or,Lo,0),new B(-Lo,0,or),new B(Lo,0,or),new B(0,or,-Lo),new B(0,or,Lo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],HR=new B,$f=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=HR}=a;r0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(r0,o0,l0),this._renderer.xr.enabled=c0,t.scissorTest=!1,Qf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),r0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Do,format:hi,colorSpace:$a,depthBuffer:!1},s=ub(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ub(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VR(a)),this._blurMaterial=GR(a,t,n)}return s}_compileMaterial(t){let n=new ui(this._lodPlanes[0],t);this._renderer.compile(n,a0)}_sceneToCubeUV(t,n,i,s,a){let l=new fn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(lb),d.toneMapping=Ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new tc({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),m=new ui(new Ao,x),u=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,u=!0):(x.color.copy(lb),u=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[v]));let A=this._cubeSize;Qf(s,y*A,v>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new ui(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Qf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,a0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=cb[(s-a-1)%cb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new ui(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*lr-1),x=a/g,m=isFinite(a)?1+Math.floor(f*x):lr;m>lr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);let u=[],_=0;for(let w=0;w<lr;++w){let D=w/x,T=Math.exp(-D*D/2);u.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;let y=this._sizeLods[s],A=3*y*(s>v-Oo?s-v+Oo:0),C=4*(this._cubeSize-y);Qf(n,A,C,3*y,2*y),l.setRenderTarget(n),l.render(d,a0)}};function VR(e){let t=[],n=[],i=[],s=e,a=e-Oo+1+ob.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Oo?l=ob[r-e+Oo-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,x=3,m=2,u=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,D=C>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set(T,x*g*C),v.set(h,m*g*C);let b=[C,C,C,C,C,C];y.set(b,u*g*C)}let A=new Ti;A.setAttribute("position",new qn(_,x)),A.setAttribute("uv",new qn(v,m)),A.setAttribute("faceIndex",new qn(y,u)),t.push(A),s>Oo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function ub(e,t,n){let i=new ki(e,t,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function GR(e,t,n){let i=new Float32Array(lr),s=new B(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function hb(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function fb(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function y0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===df||l===pf,f=l===nr||l===ir;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new $f(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new $f(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function XR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function WR(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){let A=_[v+0],C=_[v+1],w=_[v+2];h.push(A,C,C,w,w,A)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let A=v+0,C=v+1,w=v+2;h.push(A,C,C,w,w,A)}}else return;let m=new(t0(h)?nc:ec)(h,1);m.version=x;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function f(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function qR(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,h*r,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,x,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*x[_];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function YR(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ZR(e,t,n){let i=new WeakMap,s=new Le;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let T=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*A*4*d),w=new Ql(C,y,A,d);w.type=Zi,w.needsUpdate=!0;let D=v*4;for(let b=0;b<d;b++){let U=m[b],H=u[b],k=_[b],Y=y*A*4*b;for(let K=0;K<U.count;K++){let q=K*D;p===!0&&(s.fromBufferAttribute(U,K),C[Y+q+0]=s.x,C[Y+q+1]=s.y,C[Y+q+2]=s.z,C[Y+q+3]=0),g===!0&&(s.fromBufferAttribute(H,K),C[Y+q+4]=s.x,C[Y+q+5]=s.y,C[Y+q+6]=s.z,C[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(k,K),C[Y+q+8]=s.x,C[Y+q+9]=s.y,C[Y+q+10]=s.z,C[Y+q+11]=k.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new ee(y,A)},i.set(o,h),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function JR(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Nb=new Yn,db=new lc(1,1),Ub=new Ql,Lb=new Fh,Ob=new sc,pb=[],mb=[],gb=new Float32Array(16),_b=new Float32Array(9),vb=new Float32Array(4);function Po(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=pb[s];if(a===void 0&&(a=new Float32Array(s),pb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function We(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function ed(e,t){let n=mb[t];n===void 0&&(n=new Int32Array(t),mb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function KR(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function QR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),We(n,t)}}function jR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),We(n,t)}}function $R(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),We(n,t)}}function t2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;vb.set(i),e.uniformMatrix2fv(this.addr,!1,vb),We(n,i)}}function e2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;_b.set(i),e.uniformMatrix3fv(this.addr,!1,_b),We(n,i)}}function n2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;gb.set(i),e.uniformMatrix4fv(this.addr,!1,gb),We(n,i)}}function i2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function s2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),We(n,t)}}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),We(n,t)}}function r2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),We(n,t)}}function o2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function l2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),We(n,t)}}function c2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),We(n,t)}}function u2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),We(n,t)}}function h2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(db.compareFunction=jg,a=db):a=Nb,n.setTexture2D(t||a,s)}function f2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Lb,s)}function d2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Ob,s)}function p2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Ub,s)}function m2(e){switch(e){case 5126:return KR;case 35664:return QR;case 35665:return jR;case 35666:return $R;case 35674:return t2;case 35675:return e2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return s2;case 35668:case 35672:return a2;case 35669:case 35673:return r2;case 5125:return o2;case 36294:return l2;case 36295:return c2;case 36296:return u2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(e,t){e.uniform1fv(this.addr,t)}function _2(e,t){let n=Po(t,this.size,2);e.uniform2fv(this.addr,n)}function v2(e,t){let n=Po(t,this.size,3);e.uniform3fv(this.addr,n)}function y2(e,t){let n=Po(t,this.size,4);e.uniform4fv(this.addr,n)}function x2(e,t){let n=Po(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function S2(e,t){let n=Po(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function M2(e,t){let n=Po(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function b2(e,t){e.uniform1iv(this.addr,t)}function T2(e,t){e.uniform2iv(this.addr,t)}function E2(e,t){e.uniform3iv(this.addr,t)}function A2(e,t){e.uniform4iv(this.addr,t)}function w2(e,t){e.uniform1uiv(this.addr,t)}function C2(e,t){e.uniform2uiv(this.addr,t)}function R2(e,t){e.uniform3uiv(this.addr,t)}function D2(e,t){e.uniform4uiv(this.addr,t)}function N2(e,t,n){let i=this.cache,s=t.length,a=ed(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Nb,a[r])}function U2(e,t,n){let i=this.cache,s=t.length,a=ed(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Lb,a[r])}function L2(e,t,n){let i=this.cache,s=t.length,a=ed(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Ob,a[r])}function O2(e,t,n){let i=this.cache,s=t.length,a=ed(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Ub,a[r])}function I2(e){switch(e){case 5126:return g2;case 35664:return _2;case 35665:return v2;case 35666:return y2;case 35674:return x2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return b2;case 35667:case 35671:return T2;case 35668:case 35672:return E2;case 35669:case 35673:return A2;case 5125:return w2;case 36294:return C2;case 36295:return R2;case 36296:return D2;case 35678:case 36198:case 36298:case 36306:case 35682:return N2;case 35679:case 36299:case 36307:return U2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return O2}}var h0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=m2(n.type)}},f0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=I2(n.type)}},d0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},u0=/(\w+)(\])?(\[|\.)?/g;function yb(e,t){e.seq.push(t),e.map[t.id]=t}function P2(e,t,n){let i=e.name,s=i.length;for(u0.lastIndex=0;;){let a=u0.exec(i),r=u0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){yb(n,c===void 0?new h0(o,e,t):new f0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new d0(o),yb(n,d)),n=d}}}var Io=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);P2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function xb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var B2=37297,z2=0;function F2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Sb=new Bt;function H2(e){Jt._getMatrix(Sb,Jt.workingColorSpace,e);let t=`mat3( ${Sb.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Zl:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Mb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+F2(e.getShaderSource(t),o)}else return a}function V2(e,t){let n=H2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function G2(e,t){let n;switch(t){case BM:n="Linear";break;case zM:n="Reinhard";break;case FM:n="Cineon";break;case HM:n="ACESFilmic";break;case GM:n="AgX";break;case kM:n="Neutral";break;case VM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var jf=new B;function k2(){Jt.getLuminanceCoefficients(jf);let e=jf.x.toFixed(4),t=jf.y.toFixed(4),n=jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xc).join(`
`)}function W2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function q2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function xc(e){return e!==""}function bb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y2=/^[ \t]*#include +<([\w\d./]+)>/gm;function p0(e){return e.replace(Y2,J2)}var Z2=new Map;function J2(e,t){let n=Ht[t];if(n===void 0){let i=Z2.get(t);if(i!==void 0)n=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return p0(n)}var K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eb(e){return e.replace(K2,Q2)}function Q2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ab(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===zg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===gM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function $2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t3(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===ir&&(t="ENVMAP_MODE_REFRACTION"),t}function e3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Gg:t="ENVMAP_BLENDING_MULTIPLY";break;case IM:t="ENVMAP_BLENDING_MIX";break;case PM:t="ENVMAP_BLENDING_ADD";break}return t}function n3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function i3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=j2(n),c=$2(n),f=t3(n),d=e3(n),h=n3(n),p=X2(n),g=W2(a),x=s.createProgram(),m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(xc).join(`
`),u.length>0&&(u+=`
`)):(m=[Ab(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xc).join(`
`),u=[Ab(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Ts?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,V2("linearToOutputTexel",n.outputColorSpace),k2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xc).join(`
`)),r=p0(r),r=bb(r,n),r=Tb(r,n),o=p0(o),o=bb(o,n),o=Tb(o,n),r=Eb(r),o=Eb(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=_+m+r,y=_+u+o,A=xb(s,s.VERTEX_SHADER,v),C=xb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,C),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(U){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(C)||"",K=H.trim(),q=k.trim(),it=Y.trim(),V=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,C);else{let ht=Mb(s,A,"vertex"),Tt=Mb(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ht+`
`+Tt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||it==="")&&(ot=!1);ot&&(U.diagnostics={runnable:V,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:u}})}s.deleteShader(A),s.deleteShader(C),D=new Io(s,x),T=q2(s,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,B2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=C,this}var s3=0,m0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new g0(t),n.set(t,i)),i}},g0=class{constructor(t){this.id=s3++,this.code=t,this.usedTimes=0}};function a3(e,t,n,i,s,a,r){let o=new $l,l=new m0,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,H,k){let Y=H.fog,K=k.geometry,q=T.isMeshStandardMaterial?H.environment:null,it=(T.isMeshStandardMaterial?n:t).get(T.envMap||q),V=it&&it.mapping===dc?it.image.height:null,ot=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=ht!==void 0?ht.length:0,Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let pe,Me,ne,Z;if(ot){let ie=Ji[ot];pe=ie.vertexShader,Me=ie.fragmentShader}else pe=T.vertexShader,Me=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);let j=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Zt=!!T.map,rn=!!T.matcap,R=!!it,be=!!T.aoMap,It=!!T.lightMap,Dt=!!T.bumpMap,_t=!!T.normalMap,Te=!!T.displacementMap,vt=!!T.emissiveMap,Ft=!!T.metalnessMap,qe=!!T.roughnessMap,Oe=T.anisotropy>0,E=T.clearcoat>0,S=T.dispersion>0,I=T.iridescence>0,W=T.sheen>0,Q=T.transmission>0,G=Oe&&!!T.anisotropyMap,Mt=E&&!!T.clearcoatMap,st=E&&!!T.clearcoatNormalMap,yt=E&&!!T.clearcoatRoughnessMap,xt=I&&!!T.iridescenceMap,et=I&&!!T.iridescenceThicknessMap,ut=W&&!!T.sheenColorMap,Ct=W&&!!T.sheenRoughnessMap,St=!!T.specularMap,lt=!!T.specularColorMap,zt=!!T.specularIntensityMap,N=Q&&!!T.transmissionMap,nt=Q&&!!T.thicknessMap,at=!!T.gradientMap,dt=!!T.alphaMap,$=T.alphaTest>0,J=!!T.alphaHash,gt=!!T.extensions,Ot=Ts;T.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=e.toneMapping);let me={shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:Me,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$a,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:rn,envMap:R,envMapMode:R&&it.mapping,envMapCubeUVHeight:V,aoMap:be,lightMap:It,bumpMap:Dt,normalMap:_t,displacementMap:h&&Te,emissiveMap:vt,normalMapObjectSpace:_t&&T.normalMapType===ZM,normalMapTangentSpace:_t&&T.normalMapType===YM,metalnessMap:Ft,roughnessMap:qe,anisotropy:Oe,anisotropyMap:G,clearcoat:E,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:S,iridescence:I,iridescenceMap:xt,iridescenceThicknessMap:et,sheen:W,sheenColorMap:ut,sheenRoughnessMap:Ct,specularMap:St,specularColorMap:lt,specularIntensityMap:zt,transmission:Q,transmissionMap:N,thicknessMap:nt,gradientMap:at,opaque:T.transparent===!1&&T.blending===Qa&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:J,combine:T.combine,mapUv:Zt&&x(T.map.channel),aoMapUv:be&&x(T.aoMap.channel),lightMapUv:It&&x(T.lightMap.channel),bumpMapUv:Dt&&x(T.bumpMap.channel),normalMapUv:_t&&x(T.normalMap.channel),displacementMapUv:Te&&x(T.displacementMap.channel),emissiveMapUv:vt&&x(T.emissiveMap.channel),metalnessMapUv:Ft&&x(T.metalnessMap.channel),roughnessMapUv:qe&&x(T.roughnessMap.channel),anisotropyMapUv:G&&x(T.anisotropyMap.channel),clearcoatMapUv:Mt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(T.sheenRoughnessMap.channel),specularMapUv:St&&x(T.specularMap.channel),specularColorMapUv:lt&&x(T.specularColorMap.channel),specularIntensityMapUv:zt&&x(T.specularIntensityMap.channel),transmissionMapUv:N&&x(T.transmissionMap.channel),thicknessMapUv:nt&&x(T.thicknessMap.channel),alphaMapUv:dt&&x(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||Oe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(Zt||dt),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===le,decodeVideoTextureEmissive:vt&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function u(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(_(b,T),v(b,T),b.push(e.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function _(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function v(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){let b=g[T.type],U;if(b){let H=Ji[b];U=ab.clone(H.uniforms)}else U=T.uniforms;return U}function A(T,b){let U;for(let H=0,k=f.length;H<k;H++){let Y=f[H];if(Y.cacheKey===b){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new i3(e,b,T,a),f.push(U)),U}function C(T){if(--T.usedTimes===0){let b=f.indexOf(T);f[b]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:D}}function r3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function o3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function wb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Cb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,g,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,h,p,g,x,m){let u=r(d,h,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,g,x,m){let u=r(d,h,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||o3),i.length>1&&i.sort(h||wb),s.length>1&&s.sort(h||wb)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function l3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Cb,e.set(i,[r])):s>=a.length?(r=new Cb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function c3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new jt};break;case"SpotLight":n={position:new B,direction:new B,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":n={color:new jt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function u3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var h3=0;function f3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function d3(e){let t=new c3,n=u3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,a=new Pe,r=new Pe;function o(c){let f=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,_=0,v=0,y=0,A=0,C=0,w=0;c.sort(f3);for(let T=0,b=c.length;T<b;T++){let U=c[T],H=U.color,k=U.intensity,Y=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=H.r*k,d+=H.g*k,h+=H.b*k;else if(U.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],k);w++}else if(U.isDirectionalLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let it=U.shadow,V=n.get(U);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,_++}i.directional[p]=q,p++}else if(U.isSpotLight){let q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(H).multiplyScalar(k),q.distance=Y,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[x]=q;let it=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,it.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[x]=it.matrix,U.castShadow){let V=n.get(U);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,y++}x++}else if(U.isRectAreaLight){let q=t.get(U);q.color.copy(H).multiplyScalar(k),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=q,m++}else if(U.isPointLight){let q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){let it=U.shadow,V=n.get(U);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,V.shadowCameraNear=it.camera.near,V.shadowCameraFar=it.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=U.shadow.matrix,v++}i.point[g]=q,g++}else if(U.isHemisphereLight){let q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(k),q.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[u]=q,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==_||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=_,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=w,i.version=h3++)}function l(c,f){let d=0,h=0,p=0,g=0,x=0,m=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){let v=c[u];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Rb(e){let t=new d3(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function p3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Rb(e),t.set(s,[o])):a>=r.length?(o=new Rb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var m3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _3(e,t,n){let i=new rc,s=new ee,a=new ee,r=new Le,o=new qh({depthPacking:qM}),l=new Yh,c={},f=n.maxTextureSize,d={[xs]:xn,[xn]:xs,[qi]:qi},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:m3,fragmentShader:g3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ti;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ui(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let u=this.type;this.render=function(C,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let T=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),H=e.state;H.setBlending(bs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=u!==Wi&&this.type===Wi,Y=u===Wi&&this.type!==Wi;for(let K=0,q=C.length;K<q;K++){let it=C[K],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ot=V.getFrameExtents();if(s.multiply(ot),a.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/ot.x),s.x=a.x*ot.x,V.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/ot.y),s.y=a.y*ot.y,V.mapSize.y=a.y)),V.map===null||k===!0||Y===!0){let Tt=this.type!==Wi?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new ki(s.x,s.y,Tt),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let ht=V.getViewportCount();for(let Tt=0;Tt<ht;Tt++){let Gt=V.getViewport(Tt);r.set(a.x*Gt.x,a.y*Gt.y,a.x*Gt.z,a.y*Gt.w),H.viewport(r),V.updateMatrices(it,Tt),i=V.getFrustum(),y(w,D,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===Wi&&_(V,D),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,b,U)};function _(C,w){let D=t.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(w,null,D,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(w,null,D,p,x,null)}function v(C,w,D,T){let b=null,U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let H=b.uuid,k=w.uuid,Y=c[H];Y===void 0&&(Y={},c[H]=Y);let K=Y[k];K===void 0&&(K=b.clone(),Y[k]=K,w.addEventListener("dispose",A)),b=K}if(b.visible=w.visible,b.wireframe=w.wireframe,T===Wi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=e.properties.get(b);H.light=D}return b}function y(C,w,D,T,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Wi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let k=t.update(C),Y=C.material;if(Array.isArray(Y)){let K=k.groups;for(let q=0,it=K.length;q<it;q++){let V=K[q],ot=Y[V.materialIndex];if(ot&&ot.visible){let ht=v(C,ot,T,b);C.onBeforeShadow(e,C,w,D,k,ht,V),e.renderBufferDirect(D,null,k,ht,C,V),C.onAfterShadow(e,C,w,D,k,ht,V)}}}else if(Y.visible){let K=v(C,Y,T,b);C.onBeforeShadow(e,C,w,D,k,K,null),e.renderBufferDirect(D,null,k,K,C,null),C.onAfterShadow(e,C,w,D,k,K,null)}}let H=C.children;for(let k=0,Y=H.length;k<Y;k++)y(H[k],w,D,T,b)}function A(C){C.target.removeEventListener("dispose",A);for(let D in c){let T=c[D],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var v3={[rf]:of,[lf]:hf,[cf]:ff,[ja]:uf,[of]:rf,[hf]:lf,[ff]:cf,[uf]:ja};function y3(e,t){function n(){let N=!1,nt=new Le,at=null,dt=new Le(0,0,0,0);return{setMask:function($){at!==$&&!N&&(e.colorMask($,$,$,$),at=$)},setLocked:function($){N=$},setClear:function($,J,gt,Ot,me){me===!0&&($*=Ot,J*=Ot,gt*=Ot),nt.set($,J,gt,Ot),dt.equals(nt)===!1&&(e.clearColor($,J,gt,Ot),dt.copy(nt))},reset:function(){N=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let N=!1,nt=!1,at=null,dt=null,$=null;return{setReversed:function(J){if(nt!==J){let gt=t.get("EXT_clip_control");J?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=J;let Ot=$;$=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(J){J?j(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(J){at!==J&&!N&&(e.depthMask(J),at=J)},setFunc:function(J){if(nt&&(J=v3[J]),dt!==J){switch(J){case rf:e.depthFunc(e.NEVER);break;case of:e.depthFunc(e.ALWAYS);break;case lf:e.depthFunc(e.LESS);break;case ja:e.depthFunc(e.LEQUAL);break;case cf:e.depthFunc(e.EQUAL);break;case uf:e.depthFunc(e.GEQUAL);break;case hf:e.depthFunc(e.GREATER);break;case ff:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=J}},setLocked:function(J){N=J},setClear:function(J){$!==J&&(nt&&(J=1-J),e.clearDepth(J),$=J)},reset:function(){N=!1,at=null,dt=null,$=null,nt=!1}}}function s(){let N=!1,nt=null,at=null,dt=null,$=null,J=null,gt=null,Ot=null,me=null;return{setTest:function(ie){N||(ie?j(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ie){nt!==ie&&!N&&(e.stencilMask(ie),nt=ie)},setFunc:function(ie,Ki,Ai){(at!==ie||dt!==Ki||$!==Ai)&&(e.stencilFunc(ie,Ki,Ai),at=ie,dt=Ki,$=Ai)},setOp:function(ie,Ki,Ai){(J!==ie||gt!==Ki||Ot!==Ai)&&(e.stencilOp(ie,Ki,Ai),J=ie,gt=Ki,Ot=Ai)},setLocked:function(ie){N=ie},setClear:function(ie){me!==ie&&(e.clearStencil(ie),me=ie)},reset:function(){N=!1,nt=null,at=null,dt=null,$=null,J=null,gt=null,Ot=null,me=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,A=null,C=null,w=new jt(0,0,0),D=0,T=!1,b=null,U=null,H=null,k=null,Y=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=it>=2);let ot=null,ht={},Tt=e.getParameter(e.SCISSOR_BOX),Gt=e.getParameter(e.VIEWPORT),pe=new Le().fromArray(Tt),Me=new Le().fromArray(Gt);function ne(N,nt,at,dt){let $=new Uint8Array(4),J=e.createTexture();e.bindTexture(N,J),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<at;gt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(nt+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return J}let Z={};Z[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(e.DEPTH_TEST),r.setFunc(ja),Dt(!1),_t(Bg),j(e.CULL_FACE),be(bs);function j(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function pt(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Ut(N,nt){return d[N]!==nt?(e.bindFramebuffer(N,nt),d[N]=nt,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=nt),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function bt(N,nt){let at=p,dt=!1;if(N){at=h.get(nt),at===void 0&&(at=[],h.set(nt,at));let $=N.textures;if(at.length!==$.length||at[0]!==e.COLOR_ATTACHMENT0){for(let J=0,gt=$.length;J<gt;J++)at[J]=e.COLOR_ATTACHMENT0+J;at.length=$.length,dt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,dt=!0);dt&&e.drawBuffers(at)}function Zt(N){return g!==N?(e.useProgram(N),g=N,!0):!1}let rn={[fa]:e.FUNC_ADD,[vM]:e.FUNC_SUBTRACT,[yM]:e.FUNC_REVERSE_SUBTRACT};rn[xM]=e.MIN,rn[SM]=e.MAX;let R={[MM]:e.ZERO,[bM]:e.ONE,[TM]:e.SRC_COLOR,[Nh]:e.SRC_ALPHA,[DM]:e.SRC_ALPHA_SATURATE,[CM]:e.DST_COLOR,[AM]:e.DST_ALPHA,[EM]:e.ONE_MINUS_SRC_COLOR,[Uh]:e.ONE_MINUS_SRC_ALPHA,[RM]:e.ONE_MINUS_DST_COLOR,[wM]:e.ONE_MINUS_DST_ALPHA,[NM]:e.CONSTANT_COLOR,[UM]:e.ONE_MINUS_CONSTANT_COLOR,[LM]:e.CONSTANT_ALPHA,[OM]:e.ONE_MINUS_CONSTANT_ALPHA};function be(N,nt,at,dt,$,J,gt,Ot,me,ie){if(N===bs){x===!0&&(pt(e.BLEND),x=!1);return}if(x===!1&&(j(e.BLEND),x=!0),N!==_M){if(N!==m||ie!==T){if((u!==fa||y!==fa)&&(e.blendEquation(e.FUNC_ADD),u=fa,y=fa),ie)switch(N){case Qa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fg:e.blendFunc(e.ONE,e.ONE);break;case Hg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Vg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Qa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Fg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Hg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,v=null,A=null,C=null,w.set(0,0,0),D=0,m=N,T=ie}return}$=$||nt,J=J||at,gt=gt||dt,(nt!==u||$!==y)&&(e.blendEquationSeparate(rn[nt],rn[$]),u=nt,y=$),(at!==_||dt!==v||J!==A||gt!==C)&&(e.blendFuncSeparate(R[at],R[dt],R[J],R[gt]),_=at,v=dt,A=J,C=gt),(Ot.equals(w)===!1||me!==D)&&(e.blendColor(Ot.r,Ot.g,Ot.b,me),w.copy(Ot),D=me),m=N,T=!1}function It(N,nt){N.side===qi?pt(e.CULL_FACE):j(e.CULL_FACE);let at=N.side===xn;nt&&(at=!at),Dt(at),N.blending===Qa&&N.transparent===!1?be(bs):be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){b!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),b=N)}function _t(N){N!==pM?(j(e.CULL_FACE),N!==U&&(N===Bg?e.cullFace(e.BACK):N===mM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),U=N}function Te(N){N!==H&&(q&&e.lineWidth(N),H=N)}function vt(N,nt,at){N?(j(e.POLYGON_OFFSET_FILL),(k!==nt||Y!==at)&&(e.polygonOffset(nt,at),k=nt,Y=at)):pt(e.POLYGON_OFFSET_FILL)}function Ft(N){N?j(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function qe(N){N===void 0&&(N=e.TEXTURE0+K-1),ot!==N&&(e.activeTexture(N),ot=N)}function Oe(N,nt,at){at===void 0&&(ot===null?at=e.TEXTURE0+K-1:at=ot);let dt=ht[at];dt===void 0&&(dt={type:void 0,texture:void 0},ht[at]=dt),(dt.type!==N||dt.texture!==nt)&&(ot!==at&&(e.activeTexture(at),ot=at),e.bindTexture(N,nt||Z[N]),dt.type=N,dt.texture=nt)}function E(){let N=ht[ot];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(N){pe.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function Ct(N){Me.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function St(N,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let dt=at.get(N);dt===void 0&&(dt=e.getUniformBlockIndex(nt,N.name),at.set(N,dt))}function lt(N,nt){let dt=c.get(nt).get(N);l.get(nt)!==dt&&(e.uniformBlockBinding(nt,dt,N.__bindingPointIndex),l.set(nt,dt))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ot=null,ht={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,u=null,_=null,v=null,y=null,A=null,C=null,w=new jt(0,0,0),D=0,T=!1,b=null,U=null,H=null,k=null,Y=null,pe.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:j,disable:pt,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Zt,setBlending:be,setMaterial:It,setFlipSided:Dt,setCullFace:_t,setLineWidth:Te,setPolygonOffset:vt,setScissorTest:Ft,activeTexture:qe,bindTexture:Oe,unbindTexture:E,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:xt,texImage3D:et,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:yt,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:Mt,scissor:ut,viewport:Ct,reset:zt}}function x3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return p?new OffscreenCanvas(E,S):Kl("canvas")}function x(E,S,I){let W=1,Q=Oe(E);if((Q.width>I||Q.height>I)&&(W=I/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let G=Math.floor(W*Q.width),Mt=Math.floor(W*Q.height);d===void 0&&(d=g(G,Mt));let st=S?g(G,Mt):d;return st.width=G,st.height=Mt,st.getContext("2d").drawImage(E,0,0,G,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+Mt+")."),st}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){e.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(E,S,I,W,Q=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=S;if(S===e.RED&&(I===e.FLOAT&&(G=e.R32F),I===e.HALF_FLOAT&&(G=e.R16F),I===e.UNSIGNED_BYTE&&(G=e.R8)),S===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.R8UI),I===e.UNSIGNED_SHORT&&(G=e.R16UI),I===e.UNSIGNED_INT&&(G=e.R32UI),I===e.BYTE&&(G=e.R8I),I===e.SHORT&&(G=e.R16I),I===e.INT&&(G=e.R32I)),S===e.RG&&(I===e.FLOAT&&(G=e.RG32F),I===e.HALF_FLOAT&&(G=e.RG16F),I===e.UNSIGNED_BYTE&&(G=e.RG8)),S===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RG8UI),I===e.UNSIGNED_SHORT&&(G=e.RG16UI),I===e.UNSIGNED_INT&&(G=e.RG32UI),I===e.BYTE&&(G=e.RG8I),I===e.SHORT&&(G=e.RG16I),I===e.INT&&(G=e.RG32I)),S===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGB8UI),I===e.UNSIGNED_SHORT&&(G=e.RGB16UI),I===e.UNSIGNED_INT&&(G=e.RGB32UI),I===e.BYTE&&(G=e.RGB8I),I===e.SHORT&&(G=e.RGB16I),I===e.INT&&(G=e.RGB32I)),S===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),I===e.UNSIGNED_INT&&(G=e.RGBA32UI),I===e.BYTE&&(G=e.RGBA8I),I===e.SHORT&&(G=e.RGBA16I),I===e.INT&&(G=e.RGBA32I)),S===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),S===e.RGBA){let Mt=Q?Zl:Jt.getTransfer(W);I===e.FLOAT&&(G=e.RGBA32F),I===e.HALF_FLOAT&&(G=e.RGBA16F),I===e.UNSIGNED_BYTE&&(G=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(E,S){let I;return E?S===null||S===va||S===No?I=e.DEPTH24_STENCIL8:S===Zi?I=e.DEPTH32F_STENCIL8:S===Ro&&(I=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===va||S===No?I=e.DEPTH_COMPONENT24:S===Zi?I=e.DEPTH_COMPONENT32F:S===Ro&&(I=e.DEPTH_COMPONENT16),I}function A(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ci&&E.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function C(E){let S=E.target;S.removeEventListener("dispose",C),D(S),S.isVideoTexture&&f.delete(S)}function w(E){let S=E.target;S.removeEventListener("dispose",w),b(S)}function D(E){let S=i.get(E);if(S.__webglInit===void 0)return;let I=E.source,W=h.get(I);if(W){let Q=W[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(W).length===0&&h.delete(I)}i.remove(E)}function T(E){let S=i.get(E);e.deleteTexture(S.__webglTexture);let I=E.source,W=h.get(I);delete W[S.__cacheKey],r.memory.textures--}function b(E){let S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Q=0;Q<S.__webglFramebuffer[W].length;Q++)e.deleteFramebuffer(S.__webglFramebuffer[W][Q]);else e.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)e.deleteFramebuffer(S.__webglFramebuffer[W]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let I=E.textures;for(let W=0,Q=I.length;W<Q;W++){let G=i.get(I[W]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(I[W])}i.remove(E)}let U=0;function H(){U=0}function k(){let E=U;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function Y(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function K(E,S){let I=i.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){let W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(I,E,S);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+S)}function q(E,S){let I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Z(I,E,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+S)}function it(E,S){let I=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Z(I,E,S);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+S)}function V(E,S){let I=i.get(E);if(E.version>0&&I.__version!==E.version){j(I,E,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+S)}let ot={[Lh]:e.REPEAT,[ha]:e.CLAMP_TO_EDGE,[Oh]:e.MIRRORED_REPEAT},ht={[ci]:e.NEAREST,[XM]:e.NEAREST_MIPMAP_NEAREST,[pc]:e.NEAREST_MIPMAP_LINEAR,[bi]:e.LINEAR,[mf]:e.LINEAR_MIPMAP_NEAREST,[_a]:e.LINEAR_MIPMAP_LINEAR},Tt={[JM]:e.NEVER,[eb]:e.ALWAYS,[KM]:e.LESS,[jg]:e.LEQUAL,[QM]:e.EQUAL,[tb]:e.GEQUAL,[jM]:e.GREATER,[$M]:e.NOTEQUAL};function Gt(E,S){if(S.type===Zi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===mf||S.magFilter===pc||S.magFilter===_a||S.minFilter===bi||S.minFilter===mf||S.minFilter===pc||S.minFilter===_a)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,ot[S.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,ot[S.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,ot[S.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ht[S.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ci||S.minFilter!==pc&&S.minFilter!==_a||S.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(E,S){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",C));let W=S.source,Q=h.get(W);Q===void 0&&(Q={},h.set(W,Q));let G=Y(S);if(G!==E.__cacheKey){Q[G]===void 0&&(Q[G]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),Q[G].usedTimes++;let Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(S)),E.__cacheKey=G,E.__webglTexture=Q[G].texture}return I}function Me(E,S,I){return Math.floor(Math.floor(E/I)/S)}function ne(E,S,I,W){let G=E.updateRanges;if(G.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,I,W,S.data);else{G.sort((et,ut)=>et.start-ut.start);let Mt=0;for(let et=1;et<G.length;et++){let ut=G[Mt],Ct=G[et],St=ut.start+ut.count,lt=Me(Ct.start,S.width,4),zt=Me(ut.start,S.width,4);Ct.start<=St+1&&lt===zt&&Me(Ct.start+Ct.count-1,S.width,4)===lt?ut.count=Math.max(ut.count,Ct.start+Ct.count-ut.start):(++Mt,G[Mt]=Ct)}G.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),yt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let et=0,ut=G.length;et<ut;et++){let Ct=G[et],St=Math.floor(Ct.start/4),lt=Math.ceil(Ct.count/4),zt=St%S.width,N=Math.floor(St/S.width),nt=lt,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,zt,N,nt,at,I,W,S.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Z(E,S,I){let W=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=e.TEXTURE_3D);let Q=pe(E,S),G=S.source;n.bindTexture(W,E.__webglTexture,e.TEXTURE0+I);let Mt=i.get(G);if(G.version!==Mt.__version||Q===!0){n.activeTexture(e.TEXTURE0+I);let st=Jt.getPrimaries(Jt.workingColorSpace),yt=S.colorSpace===Es?null:Jt.getPrimaries(S.colorSpace),xt=S.colorSpace===Es||st===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let et=x(S.image,!1,s.maxTextureSize);et=qe(S,et);let ut=a.convert(S.format,S.colorSpace),Ct=a.convert(S.type),St=v(S.internalFormat,ut,Ct,S.colorSpace,S.isVideoTexture);Gt(W,S);let lt,zt=S.mipmaps,N=S.isVideoTexture!==!0,nt=Mt.__version===void 0||Q===!0,at=G.dataReady,dt=A(S,et);if(S.isDepthTexture)St=y(S.format===Uo,S.type),nt&&(N?n.texStorage2D(e.TEXTURE_2D,1,St,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,St,et.width,et.height,0,ut,Ct,null));else if(S.isDataTexture)if(zt.length>0){N&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let $=0,J=zt.length;$<J;$++)lt=zt[$],N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Ct,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Ct,lt.data);S.generateMipmaps=!1}else N?(nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,et.width,et.height),at&&ne(S,et,ut,Ct)):n.texImage2D(e.TEXTURE_2D,0,St,et.width,et.height,0,ut,Ct,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,zt[0].width,zt[0].height,et.depth);for(let $=0,J=zt.length;$<J;$++)if(lt=zt[$],S.format!==hi)if(ut!==null)if(N){if(at)if(S.layerUpdates.size>0){let gt=s0(lt.width,lt.height,S.format,S.type);for(let Ot of S.layerUpdates){let me=lt.data.subarray(Ot*gt/lt.data.BYTES_PER_ELEMENT,(Ot+1)*gt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ot,lt.width,lt.height,1,ut,me)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,et.depth,ut,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,et.depth,ut,Ct,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,et.depth,0,ut,Ct,lt.data)}else{N&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let $=0,J=zt.length;$<J;$++)lt=zt[$],S.format!==hi?ut!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Ct,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Ct,lt.data)}else if(S.isDataArrayTexture)if(N){if(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,et.width,et.height,et.depth),at)if(S.layerUpdates.size>0){let $=s0(et.width,et.height,S.format,S.type);for(let J of S.layerUpdates){let gt=et.data.subarray(J*$/et.data.BYTES_PER_ELEMENT,(J+1)*$/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,ut,Ct,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isData3DTexture)N?(nt&&n.texStorage3D(e.TEXTURE_3D,dt,St,et.width,et.height,et.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)):n.texImage3D(e.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isFramebufferTexture){if(nt)if(N)n.texStorage2D(e.TEXTURE_2D,dt,St,et.width,et.height);else{let $=et.width,J=et.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,St,$,J,0,ut,Ct,null),$>>=1,J>>=1}}else if(zt.length>0){if(N&&nt){let $=Oe(zt[0]);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}for(let $=0,J=zt.length;$<J;$++)lt=zt[$],N?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut,Ct,lt):n.texImage2D(e.TEXTURE_2D,$,St,ut,Ct,lt);S.generateMipmaps=!1}else if(N){if(nt){let $=Oe(et);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Ct,et)}else n.texImage2D(e.TEXTURE_2D,0,St,ut,Ct,et);m(S)&&u(W),Mt.__version=G.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function j(E,S,I){if(S.image.length!==6)return;let W=pe(E,S),Q=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+I);let G=i.get(Q);if(Q.version!==G.__version||W===!0){n.activeTexture(e.TEXTURE0+I);let Mt=Jt.getPrimaries(Jt.workingColorSpace),st=S.colorSpace===Es?null:Jt.getPrimaries(S.colorSpace),yt=S.colorSpace===Es||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let xt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let J=0;J<6;J++)!xt&&!et?ut[J]=x(S.image[J],!0,s.maxCubemapSize):ut[J]=et?S.image[J].image:S.image[J],ut[J]=qe(S,ut[J]);let Ct=ut[0],St=a.convert(S.format,S.colorSpace),lt=a.convert(S.type),zt=v(S.internalFormat,St,lt,S.colorSpace),N=S.isVideoTexture!==!0,nt=G.__version===void 0||W===!0,at=Q.dataReady,dt=A(S,Ct);Gt(e.TEXTURE_CUBE_MAP,S);let $;if(xt){N&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,Ct.width,Ct.height);for(let J=0;J<6;J++){$=ut[J].mipmaps;for(let gt=0;gt<$.length;gt++){let Ot=$[gt];S.format!==hi?St!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,Ot.width,Ot.height,St,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,Ot.width,Ot.height,St,lt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,zt,Ot.width,Ot.height,0,St,lt,Ot.data)}}}else{if($=S.mipmaps,N&&nt){$.length>0&&dt++;let J=Oe(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,J.width,J.height)}for(let J=0;J<6;J++)if(et){N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ut[J].width,ut[J].height,St,lt,ut[J].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,ut[J].width,ut[J].height,0,St,lt,ut[J].data);for(let gt=0;gt<$.length;gt++){let me=$[gt].image[J].image;N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,me.width,me.height,St,lt,me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,zt,me.width,me.height,0,St,lt,me.data)}}else{N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St,lt,ut[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,zt,St,lt,ut[J]);for(let gt=0;gt<$.length;gt++){let Ot=$[gt];N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,St,lt,Ot.image[J]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,zt,St,lt,Ot.image[J])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),G.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function pt(E,S,I,W,Q,G){let Mt=a.convert(I.format,I.colorSpace),st=a.convert(I.type),yt=v(I.internalFormat,Mt,st,I.colorSpace),xt=i.get(S),et=i.get(I);if(et.__renderTarget=S,!xt.__hasExternalTextures){let ut=Math.max(1,S.width>>G),Ct=Math.max(1,S.height>>G);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,G,yt,ut,Ct,S.depth,0,Mt,st,null):n.texImage2D(Q,G,yt,ut,Ct,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,Q,et.__webglTexture,0,Te(S)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,Q,et.__webglTexture,G),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(E,S,I){if(e.bindRenderbuffer(e.RENDERBUFFER,E),S.depthBuffer){let W=S.depthTexture,Q=W&&W.isDepthTexture?W.type:null,G=y(S.stencilBuffer,Q),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=Te(S);vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,G,S.width,S.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,G,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,G,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,E)}else{let W=S.textures;for(let Q=0;Q<W.length;Q++){let G=W[Q],Mt=a.convert(G.format,G.colorSpace),st=a.convert(G.type),yt=v(G.internalFormat,Mt,st,G.colorSpace),xt=Te(S);I&&vt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,yt,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,yt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,yt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let Q=W.__webglTexture,G=Te(S);if(S.depthTexture.format===bo)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Uo)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Zt(E){let S=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=W}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");let W=E.texture.mipmaps;W&&W.length>0?bt(S.__webglFramebuffer[0],E):bt(S.__webglFramebuffer,E)}else if(I){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=e.createRenderbuffer(),Ut(S.__webglDepthbuffer[W],E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ut(S.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function rn(E,S,I){let W=i.get(E);S!==void 0&&pt(W.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Zt(E)}function R(E){let S=E.texture,I=i.get(E),W=i.get(S);E.addEventListener("dispose",w);let Q=E.textures,G=E.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=S.version,r.memory.textures++),G){I.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[st]=[];for(let yt=0;yt<S.mipmaps.length;yt++)I.__webglFramebuffer[st][yt]=e.createFramebuffer()}else I.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)I.__webglFramebuffer[st]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,yt=Q.length;st<yt;st++){let xt=i.get(Q[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(E.samples>0&&vt(E)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){let yt=Q[st];I.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[st]);let xt=a.convert(yt.format,yt.colorSpace),et=a.convert(yt.type),ut=v(yt.internalFormat,xt,et,yt.colorSpace,E.isXRRenderTarget===!0),Ct=Te(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ut,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,I.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(I.__webglFramebuffer[st][yt],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else pt(I.__webglFramebuffer[st],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,yt=Q.length;st<yt;st++){let xt=Q[st],et=i.get(xt),ut=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,et.__webglTexture),Gt(ut,xt),pt(I.__webglFramebuffer,E,xt,e.COLOR_ATTACHMENT0+st,ut,0),m(xt)&&u(ut)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,W.__webglTexture),Gt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(I.__webglFramebuffer[yt],E,S,e.COLOR_ATTACHMENT0,st,yt);else pt(I.__webglFramebuffer,E,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&u(st),n.unbindTexture()}E.depthBuffer&&Zt(E)}function be(E){let S=E.textures;for(let I=0,W=S.length;I<W;I++){let Q=S[I];if(m(Q)){let G=_(E),Mt=i.get(Q).__webglTexture;n.bindTexture(G,Mt),u(G),n.unbindTexture()}}}let It=[],Dt=[];function _t(E){if(E.samples>0){if(vt(E)===!1){let S=E.textures,I=E.width,W=E.height,Q=e.COLOR_BUFFER_BIT,G=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(E),st=S.length>1;if(st)for(let xt=0;xt<S.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let yt=E.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let et=i.get(S[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,et,0)}e.blitFramebuffer(0,0,I,W,0,0,I,W,Q,e.NEAREST),l===!0&&(It.length=0,Dt.length=0,It.push(e.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(It.push(G),Dt.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<S.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let et=i.get(S[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let S=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(E){return Math.min(s.maxSamples,E.samples)}function vt(E){let S=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(E){let S=r.render.frame;f.get(E)!==S&&(f.set(E,S),E.update())}function qe(E,S){let I=E.colorSpace,W=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==$a&&I!==Es&&(Jt.getTransfer(I)===le?(W!==hi||Q!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),S}function Oe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=rn,this.setupRenderTarget=R,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function S3(e,t){function n(i,s=Es){let a,r=Jt.getTransfer(s);if(i===Yi)return e.UNSIGNED_BYTE;if(i===_f)return e.UNSIGNED_SHORT_4_4_4_4;if(i===vf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===qg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Yg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xg)return e.BYTE;if(i===Wg)return e.SHORT;if(i===Ro)return e.UNSIGNED_SHORT;if(i===gf)return e.INT;if(i===va)return e.UNSIGNED_INT;if(i===Zi)return e.FLOAT;if(i===Do)return e.HALF_FLOAT;if(i===Zg)return e.ALPHA;if(i===Jg)return e.RGB;if(i===hi)return e.RGBA;if(i===bo)return e.DEPTH_COMPONENT;if(i===Uo)return e.DEPTH_STENCIL;if(i===Kg)return e.RED;if(i===yf)return e.RED_INTEGER;if(i===Qg)return e.RG;if(i===xf)return e.RG_INTEGER;if(i===Sf)return e.RGBA_INTEGER;if(i===mc||i===gc||i===_c||i===vc)if(r===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===bf||i===Tf||i===Ef)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Mf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===wf||i===Cf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Af||i===wf)return r===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Cf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rf||i===Df||i===Nf||i===Uf||i===Lf||i===Of||i===If||i===Pf||i===Bf||i===zf||i===Ff||i===Hf||i===Vf||i===Gf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Rf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Df)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Of)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kf||i===Xf||i===Wf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===kf)return r===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===Yf||i===Zf||i===Jf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===qf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Yf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===No?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var M3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new cc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ei({vertexShader:M3,fragmentShader:b3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},v0=class extends Ss{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new _0,u={},_=n.getContextAttributes(),v=null,y=null,A=[],C=[],w=new ee,D=null,T=new fn;T.viewport=new Le;let b=new fn;b.viewport=new Le;let U=[T,b],H=new af,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getHandSpace()};function K(Z){let j=C.indexOf(Z.inputSource);if(j===-1)return;let pt=A[j];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||r),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<A.length;Z++){let j=C[Z];j!==null&&(C[Z]=null,A[Z].disconnect(j))}k=null,Y=null,m.reset();for(let Z in u)delete u[Z];t.setRenderTarget(v),p=null,h=null,d=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",q),s.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,bt=null;_.depth&&(bt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=_.stencil?Uo:bo,Ut=_.stencil?No:va);let Zt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Zt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new ki(h.textureWidth,h.textureHeight,{format:hi,type:Yi,depthTexture:new lc(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ki(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let j=0;j<Z.removed.length;j++){let pt=Z.removed[j],Ut=C.indexOf(pt);Ut>=0&&(C[Ut]=null,A[Ut].disconnect(pt))}for(let j=0;j<Z.added.length;j++){let pt=Z.added[j],Ut=C.indexOf(pt);if(Ut===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=C.length){C.push(pt),Ut=Zt;break}else if(C[Zt]===null){C[Zt]=pt,Ut=Zt;break}if(Ut===-1)break}let bt=A[Ut];bt&&bt.connect(pt)}}let V=new B,ot=new B;function ht(Z,j,pt){V.setFromMatrixPosition(j.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);let Ut=V.distanceTo(ot),bt=j.projectionMatrix.elements,Zt=pt.projectionMatrix.elements,rn=bt[14]/(bt[10]-1),R=bt[14]/(bt[10]+1),be=(bt[9]+1)/bt[5],It=(bt[9]-1)/bt[5],Dt=(bt[8]-1)/bt[0],_t=(Zt[8]+1)/Zt[0],Te=rn*Dt,vt=rn*_t,Ft=Ut/(-Dt+_t),qe=Ft*-Dt;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Oe=rn+Ft,E=R+Ft,S=Te-qe,I=vt+(Ut-qe),W=be*R/E*Oe,Q=It*R/E*Oe;Z.projectionMatrix.makePerspective(S,I,W,Q,Oe,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Tt(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),H.near=b.near=T.near=j,H.far=b.far=T.far=pt,(k!==H.near||Y!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,Y=H.far),H.layers.mask=Z.layers.mask|6,T.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;let Ut=Z.parent,bt=H.cameras;Tt(H,Ut);for(let Zt=0;Zt<bt.length;Zt++)Tt(bt[Zt],Ut);bt.length===2?ht(H,T,b):H.projectionMatrix.copy(T.projectionMatrix),Gt(Z,H,Ut)};function Gt(Z,j,pt){pt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ph*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return u[Z]};let pe=null;function Me(Z,j){if(f=j.getViewerPose(c||r),g=j,f!==null){let pt=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let R=0;R<pt.length;R++){let be=pt[R],It=null;if(p!==null)It=p.getViewport(be);else{let _t=d.getViewSubImage(h,be);It=_t.viewport,R===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let Dt=U[R];Dt===void 0&&(Dt=new fn,Dt.layers.enable(R),Dt.viewport=new Le,U[R]=Dt),Dt.matrix.fromArray(be.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(be.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(It.x,It.y,It.width,It.height),R===0&&(H.matrix.copy(Dt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(Dt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let R=d.getDepthInformation(pt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<pt.length;R++){let be=pt[R].camera;if(be){let It=u[be];It||(It=new cc,u[be]=It);let Dt=d.getCameraImage(be);It.sourceTexture=Dt}}}}for(let pt=0;pt<A.length;pt++){let Ut=C[pt],bt=A[pt];Ut!==null&&bt!==void 0&&bt.update(Ut,j,c||r)}pe&&pe(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ne=new Db;ne.setAnimationLoop(Me),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}},rr=new Xi,T3=new Pe;function E3(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,e0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,_,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===xn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===xn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let _=t.get(u),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,rr.copy(y),rr.x*=-1,rr.y*=-1,rr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),m.envMapRotation.value.setFromMatrix4(T3.makeRotationFromEuler(rr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function A3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=f(_),s[_.id]=y,_.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(_,A);let C=t.render.frame;a[_.id]!==C&&(h(_),a[_.id]=C)}function f(_){let v=d();_.__bindingPointIndex=v;let y=e.createBuffer(),A=_.__size,C=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let v=s[_.id],y=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){let D=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,b=D.length;T<b;T++){let U=D[T];if(p(U,C,T,A)===!0){let H=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],Y=0;for(let K=0;K<k.length;K++){let q=k[K],it=x(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,H+Y,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,Y),Y+=it.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,v,y,A){let C=_.value,w=v+"_"+y;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{let D=A[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(_){let v=_.uniforms,y=0,A=16;for(let w=0,D=v.length;w<D;w++){let T=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,U=T.length;b<U;b++){let H=T[b],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,K=k.length;Y<K;Y++){let q=k[Y],it=x(q),V=y%A,ot=V%it.boundary,ht=V+ot;y+=ot,ht!==0&&A-ht<it.storage&&(y+=A-ht),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=it.storage}}}let C=y%A;return C>0&&(y+=A-C),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function u(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var td=class{constructor(t={}){let{canvas:n=nb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,_=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=Wn;let C=0,w=0,D=null,T=-1,b=null,U=new Le,H=new Le,k=null,Y=new jt(0),K=0,q=n.width,it=n.height,V=1,ot=null,ht=null,Tt=new Le(0,0,q,it),Gt=new Le(0,0,q,it),pe=!1,Me=new rc,ne=!1,Z=!1,j=new Pe,pt=new B,Ut=new Le,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function rn(){return D===null?V:1}let R=i;function be(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",$,!1),R===null){let L="webgl2";if(R=be(L,M),R===null)throw be(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let It,Dt,_t,Te,vt,Ft,qe,Oe,E,S,I,W,Q,G,Mt,st,yt,xt,et,ut,Ct,St,lt,zt;function N(){It=new XR(R),It.init(),St=new S3(R,It),Dt=new BR(R,It,t,St),_t=new y3(R,It),Dt.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),Te=new YR(R),vt=new r3,Ft=new x3(R,It,_t,vt,Dt,St,Te),qe=new FR(y),Oe=new kR(y),E=new $A(R),lt=new IR(R,E),S=new WR(R,E,Te,lt),I=new JR(R,S,E,Te),et=new ZR(R,Dt,Ft),st=new zR(vt),W=new a3(y,qe,Oe,It,Dt,lt,st),Q=new E3(y,vt),G=new l3,Mt=new p3(It),xt=new OR(y,qe,Oe,_t,I,p,l),yt=new _3(y,I,Dt),zt=new A3(R,Te,Dt,_t),ut=new PR(R,It,Te),Ct=new qR(R,It,Te),Te.programs=W.programs,y.capabilities=Dt,y.extensions=It,y.properties=vt,y.renderLists=G,y.shadowMap=yt,y.state=_t,y.info=Te}N();let nt=new v0(y,R);this.xr=nt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=It.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=It.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(q,it,!1))},this.getSize=function(M){return M.set(q,it)},this.setSize=function(M,L,z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,it=L,n.width=Math.floor(M*V),n.height=Math.floor(L*V),z===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(q*V,it*V).floor()},this.setDrawingBufferSize=function(M,L,z){q=M,it=L,V=z,n.width=Math.floor(M*z),n.height=Math.floor(L*z),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,L,z,F){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,L,z,F),_t.viewport(U.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,L,z,F){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,L,z,F),_t.scissor(H.copy(Gt).multiplyScalar(V).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){_t.setScissorTest(pe=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,z=!0){let F=0;if(M){let O=!1;if(D!==null){let tt=D.texture.format;O=tt===Sf||tt===xf||tt===yf}if(O){let tt=D.texture.type,ct=tt===Yi||tt===va||tt===Ro||tt===No||tt===_f||tt===vf,mt=xt.getClearColor(),ft=xt.getClearAlpha(),wt=mt.r,Nt=mt.g,Et=mt.b;ct?(g[0]=wt,g[1]=Nt,g[2]=Et,g[3]=ft,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=wt,x[1]=Nt,x[2]=Et,x[3]=ft,R.clearBufferiv(R.COLOR,0,x))}else F|=R.COLOR_BUFFER_BIT}L&&(F|=R.DEPTH_BUFFER_BIT),z&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),G.dispose(),Mt.dispose(),vt.dispose(),qe.dispose(),Oe.dispose(),I.dispose(),lt.dispose(),zt.dispose(),W.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Ai),nt.removeEventListener("sessionend",x0),ya.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=Te.autoReset,L=yt.enabled,z=yt.autoUpdate,F=yt.needsUpdate,O=yt.type;N(),Te.autoReset=M,yt.enabled=L,yt.autoUpdate=z,yt.needsUpdate=F,yt.type=O}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){let L=M.target;L.removeEventListener("dispose",J),gt(L)}function gt(M){Ot(M),vt.remove(M)}function Ot(M){let L=vt.get(M).programs;L!==void 0&&(L.forEach(function(z){W.releaseProgram(z)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,z,F,O,tt){L===null&&(L=bt);let ct=O.isMesh&&O.matrixWorld.determinant()<0,mt=zb(M,L,z,F,O);_t.setMaterial(F,ct);let ft=z.index,wt=1;if(F.wireframe===!0){if(ft=S.getWireframeAttribute(z),ft===void 0)return;wt=2}let Nt=z.drawRange,Et=z.attributes.position,qt=Nt.start*wt,ce=(Nt.start+Nt.count)*wt;tt!==null&&(qt=Math.max(qt,tt.start*wt),ce=Math.min(ce,(tt.start+tt.count)*wt)),ft!==null?(qt=Math.max(qt,0),ce=Math.min(ce,ft.count)):Et!=null&&(qt=Math.max(qt,0),ce=Math.min(ce,Et.count));let De=ce-qt;if(De<0||De===1/0)return;lt.setup(O,F,mt,z,ft);let xe,he=ut;if(ft!==null&&(xe=E.get(ft),he=Ct,he.setIndex(xe)),O.isMesh)F.wireframe===!0?(_t.setLineWidth(F.wireframeLinewidth*rn()),he.setMode(R.LINES)):he.setMode(R.TRIANGLES);else if(O.isLine){let At=F.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*rn()),O.isLineSegments?he.setMode(R.LINES):O.isLineLoop?he.setMode(R.LINE_LOOP):he.setMode(R.LINE_STRIP)}else O.isPoints?he.setMode(R.POINTS):O.isSprite&&he.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let At=O._multiDrawStarts,we=O._multiDrawCounts,Kt=O._multiDrawCount,Dn=ft?E.get(ft).bytesPerElement:1,ur=vt.get(F).currentProgram.getUniforms();for(let Nn=0;Nn<Kt;Nn++)ur.setValue(R,"_gl_DrawID",Nn),he.render(At[Nn]/Dn,we[Nn])}else if(O.isInstancedMesh)he.renderInstances(qt,De,O.count);else if(z.isInstancedBufferGeometry){let At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,At);he.renderInstances(qt,De,we)}else he.render(qt,De)};function me(M,L,z){M.transparent===!0&&M.side===qi&&M.forceSinglePass===!1?(M.side=xn,M.needsUpdate=!0,Mc(M,L,z),M.side=xs,M.needsUpdate=!0,Mc(M,L,z),M.side=qi):Mc(M,L,z)}this.compile=function(M,L,z=null){z===null&&(z=M),u=Mt.get(z),u.init(L),v.push(u),z.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();let F=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let tt=O.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let mt=tt[ct];me(mt,z,O),F.add(mt)}else me(tt,z,O),F.add(tt)}),u=v.pop(),F},this.compileAsync=function(M,L,z=null){let F=this.compile(M,L,z);return new Promise(O=>{function tt(){if(F.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){O(M);return}setTimeout(tt,10)}It.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ie=null;function Ki(M){ie&&ie(M)}function Ai(){ya.stop()}function x0(){ya.start()}let ya=new Db;ya.setAnimationLoop(Ki),typeof self<"u"&&ya.setContext(self),this.setAnimationLoop=function(M){ie=M,nt.setAnimationLoop(M),M===null?ya.stop():ya.start()},nt.addEventListener("sessionstart",Ai),nt.addEventListener("sessionend",x0),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(L),L=nt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,D),u=Mt.get(M,v.length),u.init(L),v.push(u),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Me.setFromProjectionMatrix(j,Si,L.reversedDepth),Z=this.localClippingEnabled,ne=st.init(this.clippingPlanes,Z),m=G.get(M,_.length),m.init(),_.push(m),nt.enabled===!0&&nt.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&nd(tt,L,-1/0,y.sortObjects)}nd(M,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ht),Zt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Zt&&xt.addToRenderList(m,M),this.info.render.frame++,ne===!0&&st.beginShadows();let z=u.state.shadowsArray;yt.render(z,M,L),ne===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,O=m.transmissive;if(u.setupLights(),L.isArrayCamera){let tt=L.cameras;if(O.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){let ft=tt[ct];M0(F,O,M,ft)}Zt&&xt.render(M);for(let ct=0,mt=tt.length;ct<mt;ct++){let ft=tt[ct];S0(m,M,ft,ft.viewport)}}else O.length>0&&M0(F,O,M,L),Zt&&xt.render(M),S0(m,M,L);D!==null&&w===0&&(Ft.updateMultisampleRenderTarget(D),Ft.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,L),lt.resetDefaultState(),T=-1,b=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&st.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function nd(M,L,z,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Me.intersectsSprite(M)){F&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);let ct=I.update(M),mt=M.material;mt.visible&&m.push(M,ct,mt,z,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Me.intersectsObject(M))){let ct=I.update(M),mt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ut.copy(ct.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(mt)){let ft=ct.groups;for(let wt=0,Nt=ft.length;wt<Nt;wt++){let Et=ft[wt],qt=mt[Et.materialIndex];qt&&qt.visible&&m.push(M,ct,qt,z,Ut.z,Et)}}else mt.visible&&m.push(M,ct,mt,z,Ut.z,null)}}let tt=M.children;for(let ct=0,mt=tt.length;ct<mt;ct++)nd(tt[ct],L,z,F)}function S0(M,L,z,F){let O=M.opaque,tt=M.transmissive,ct=M.transparent;u.setupLightsView(z),ne===!0&&st.setGlobalState(y.clippingPlanes,z),F&&_t.viewport(U.copy(F)),O.length>0&&Sc(O,L,z),tt.length>0&&Sc(tt,L,z),ct.length>0&&Sc(ct,L,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function M0(M,L,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[F.id]===void 0&&(u.state.transmissionRenderTarget[F.id]=new ki(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Do:Yi,minFilter:_a,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let tt=u.state.transmissionRenderTarget[F.id],ct=F.viewport||U;tt.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);let mt=y.getRenderTarget(),ft=y.getActiveCubeFace(),wt=y.getActiveMipmapLevel();y.setRenderTarget(tt),y.getClearColor(Y),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&xt.render(z);let Nt=y.toneMapping;y.toneMapping=Ts;let Et=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),u.setupLightsView(F),ne===!0&&st.setGlobalState(y.clippingPlanes,F),Sc(M,z,F),Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt),It.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ce=0,De=L.length;ce<De;ce++){let xe=L[ce],he=xe.object,At=xe.geometry,we=xe.material,Kt=xe.group;if(we.side===qi&&he.layers.test(F.layers)){let Dn=we.side;we.side=xn,we.needsUpdate=!0,b0(he,z,F,At,we,Kt),we.side=Dn,we.needsUpdate=!0,qt=!0}}qt===!0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt))}y.setRenderTarget(mt,ft,wt),y.setClearColor(Y,K),Et!==void 0&&(F.viewport=Et),y.toneMapping=Nt}function Sc(M,L,z){let F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,tt=M.length;O<tt;O++){let ct=M[O],mt=ct.object,ft=ct.geometry,wt=ct.group,Nt=ct.material;Nt.allowOverride===!0&&F!==null&&(Nt=F),mt.layers.test(z.layers)&&b0(mt,L,z,ft,Nt,wt)}}function b0(M,L,z,F,O,tt){M.onBeforeRender(y,L,z,F,O,tt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,L,z,F,M,tt),O.transparent===!0&&O.side===qi&&O.forceSinglePass===!1?(O.side=xn,O.needsUpdate=!0,y.renderBufferDirect(z,L,F,O,M,tt),O.side=xs,O.needsUpdate=!0,y.renderBufferDirect(z,L,F,O,M,tt),O.side=qi):y.renderBufferDirect(z,L,F,O,M,tt),M.onAfterRender(y,L,z,F,O,tt)}function Mc(M,L,z){L.isScene!==!0&&(L=bt);let F=vt.get(M),O=u.state.lights,tt=u.state.shadowsArray,ct=O.state.version,mt=W.getParameters(M,O.state,tt,L,z),ft=W.getProgramCacheKey(mt),wt=F.programs;F.environment=M.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(M.isMeshStandardMaterial?Oe:qe).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",J),wt=new Map,F.programs=wt);let Nt=wt.get(ft);if(Nt!==void 0){if(F.currentProgram===Nt&&F.lightsStateVersion===ct)return E0(M,mt),Nt}else mt.uniforms=W.getUniforms(M),M.onBeforeCompile(mt,y),Nt=W.acquireProgram(mt,ft),wt.set(ft,Nt),F.uniforms=mt.uniforms;let Et=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=st.uniform),E0(M,mt),F.needsLights=Hb(M),F.lightsStateVersion=ct,F.needsLights&&(Et.ambientLightColor.value=O.state.ambient,Et.lightProbe.value=O.state.probe,Et.directionalLights.value=O.state.directional,Et.directionalLightShadows.value=O.state.directionalShadow,Et.spotLights.value=O.state.spot,Et.spotLightShadows.value=O.state.spotShadow,Et.rectAreaLights.value=O.state.rectArea,Et.ltc_1.value=O.state.rectAreaLTC1,Et.ltc_2.value=O.state.rectAreaLTC2,Et.pointLights.value=O.state.point,Et.pointLightShadows.value=O.state.pointShadow,Et.hemisphereLights.value=O.state.hemi,Et.directionalShadowMap.value=O.state.directionalShadowMap,Et.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Et.spotShadowMap.value=O.state.spotShadowMap,Et.spotLightMatrix.value=O.state.spotLightMatrix,Et.spotLightMap.value=O.state.spotLightMap,Et.pointShadowMap.value=O.state.pointShadowMap,Et.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Nt,F.uniformsList=null,Nt}function T0(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Io.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function E0(M,L){let z=vt.get(M);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function zb(M,L,z,F,O){L.isScene!==!0&&(L=bt),Ft.resetTextureUnits();let tt=L.fog,ct=F.isMeshStandardMaterial?L.environment:null,mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:$a,ft=(F.isMeshStandardMaterial?Oe:qe).get(F.envMap||ct),wt=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Et=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color,De=Ts;F.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(De=y.toneMapping);let xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=xe!==void 0?xe.length:0,At=vt.get(F),we=u.state.lights;if(ne===!0&&(Z===!0||M!==b)){let pn=M===b&&F.id===T;st.setState(F,M,pn)}let Kt=!1;F.version===At.__version?(At.needsLights&&At.lightsStateVersion!==we.state.version||At.outputColorSpace!==mt||O.isBatchedMesh&&At.batching===!1||!O.isBatchedMesh&&At.batching===!0||O.isBatchedMesh&&At.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&At.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&At.instancing===!1||!O.isInstancedMesh&&At.instancing===!0||O.isSkinnedMesh&&At.skinning===!1||!O.isSkinnedMesh&&At.skinning===!0||O.isInstancedMesh&&At.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&At.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&At.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&At.instancingMorph===!1&&O.morphTexture!==null||At.envMap!==ft||F.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Nt||At.morphTargets!==Et||At.morphNormals!==qt||At.morphColors!==ce||At.toneMapping!==De||At.morphTargetsCount!==he)&&(Kt=!0):(Kt=!0,At.__version=F.version);let Dn=At.currentProgram;Kt===!0&&(Dn=Mc(F,L,O));let ur=!1,Nn=!1,zo=!1,Ce=Dn.getUniforms(),Kn=At.uniforms;if(_t.useProgram(Dn.program)&&(ur=!0,Nn=!0,zo=!0),F.id!==T&&(T=F.id,Nn=!0),ur||b!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ce.setValue(R,"projectionMatrix",M.projectionMatrix),Ce.setValue(R,"viewMatrix",M.matrixWorldInverse);let Sn=Ce.map.cameraPosition;Sn!==void 0&&Sn.setValue(R,pt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Nn=!0,zo=!0)}if(O.isSkinnedMesh){Ce.setOptional(R,O,"bindMatrix"),Ce.setOptional(R,O,"bindMatrixInverse");let pn=O.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ce.setValue(R,"boneTexture",pn.boneTexture,Ft))}O.isBatchedMesh&&(Ce.setOptional(R,O,"batchingTexture"),Ce.setValue(R,"batchingTexture",O._matricesTexture,Ft),Ce.setOptional(R,O,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",O._indirectTexture,Ft),Ce.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",O._colorsTexture,Ft));let Qn=z.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&et.update(O,z,Dn),(Nn||At.receiveShadow!==O.receiveShadow)&&(At.receiveShadow=O.receiveShadow,Ce.setValue(R,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Kn.envMap.value=ft,Kn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(Kn.envMapIntensity.value=L.environmentIntensity),Nn&&(Ce.setValue(R,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&Fb(Kn,zo),tt&&F.fog===!0&&Q.refreshFogUniforms(Kn,tt),Q.refreshMaterialUniforms(Kn,F,V,it,u.state.transmissionRenderTarget[M.id]),Io.upload(R,T0(At),Kn,Ft)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Io.upload(R,T0(At),Kn,Ft),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ce.setValue(R,"center",O.center),Ce.setValue(R,"modelViewMatrix",O.modelViewMatrix),Ce.setValue(R,"normalMatrix",O.normalMatrix),Ce.setValue(R,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let pn=F.uniformsGroups;for(let Sn=0,id=pn.length;Sn<id;Sn++){let xa=pn[Sn];zt.update(xa,Dn),zt.bind(xa,Dn)}}return Dn}function Fb(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Hb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,L,z){let F=vt.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),vt.get(M.texture).__webglTexture=L,vt.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let z=vt.get(M);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0};let Vb=R.createFramebuffer();this.setRenderTarget=function(M,L=0,z=0){D=M,C=L,w=z;let F=!0,O=null,tt=!1,ct=!1;if(M){let ft=vt.get(M);if(ft.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(ft.__webglFramebuffer===void 0)Ft.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ft.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Et=M.depthTexture;if(ft.__boundDepthTexture!==Et){if(Et!==null&&vt.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(M)}}let wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);let Nt=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?O=Nt[L][z]:O=Nt[L],tt=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?O=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?O=Nt[z]:O=Nt,U.copy(M.viewport),H.copy(M.scissor),k=M.scissorTest}else U.copy(Tt).multiplyScalar(V).floor(),H.copy(Gt).multiplyScalar(V).floor(),k=pe;if(z!==0&&(O=Vb),_t.bindFramebuffer(R.FRAMEBUFFER,O)&&F&&_t.drawBuffers(M,O),_t.viewport(U),_t.scissor(H),_t.setScissorTest(k),tt){let ft=vt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,z)}else if(ct){let ft=L;for(let wt=0;wt<M.textures.length;wt++){let Nt=vt.get(M.textures[wt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,z,ft)}}else if(M!==null&&z!==0){let ft=vt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ft.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(M,L,z,F,O,tt,ct,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){_t.bindFramebuffer(R.FRAMEBUFFER,ft);try{let wt=M.textures[mt],Nt=wt.format,Et=wt.type;if(!Dt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&z>=0&&z<=M.height-O&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(L,z,F,O,St.convert(Nt),St.convert(Et),tt))}finally{let wt=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,L,z,F,O,tt,ct,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(L>=0&&L<=M.width-F&&z>=0&&z<=M.height-O){_t.bindFramebuffer(R.FRAMEBUFFER,ft);let wt=M.textures[mt],Nt=wt.format,Et=wt.type;if(!Dt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,qt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(L,z,F,O,St.convert(Nt),St.convert(Et),0);let ce=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,ce);let De=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ib(R,De,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,qt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(qt),R.deleteSync(De),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,z=0){let F=Math.pow(2,-z),O=Math.floor(M.image.width*F),tt=Math.floor(M.image.height*F),ct=L!==null?L.x:0,mt=L!==null?L.y:0;Ft.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ct,mt,O,tt),_t.unbindTexture()};let Gb=R.createFramebuffer(),kb=R.createFramebuffer();this.copyTextureToTexture=function(M,L,z=null,F=null,O=0,tt=null){tt===null&&(O!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=O,O=0):tt=0);let ct,mt,ft,wt,Nt,Et,qt,ce,De,xe=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(z!==null)ct=z.max.x-z.min.x,mt=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,wt=z.min.x,Nt=z.min.y,Et=z.isBox3?z.min.z:0;else{let Qn=Math.pow(2,-O);ct=Math.floor(xe.width*Qn),mt=Math.floor(xe.height*Qn),M.isDataArrayTexture?ft=xe.depth:M.isData3DTexture?ft=Math.floor(xe.depth*Qn):ft=1,wt=0,Nt=0,Et=0}F!==null?(qt=F.x,ce=F.y,De=F.z):(qt=0,ce=0,De=0);let he=St.convert(L.format),At=St.convert(L.type),we;L.isData3DTexture?(Ft.setTexture3D(L,0),we=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),we=R.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),we=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let Kt=R.getParameter(R.UNPACK_ROW_LENGTH),Dn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ur=R.getParameter(R.UNPACK_SKIP_PIXELS),Nn=R.getParameter(R.UNPACK_SKIP_ROWS),zo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Et);let Ce=M.isDataArrayTexture||M.isData3DTexture,Kn=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Qn=vt.get(M),pn=vt.get(L),Sn=vt.get(Qn.__renderTarget),id=vt.get(pn.__renderTarget);_t.bindFramebuffer(R.READ_FRAMEBUFFER,Sn.__webglFramebuffer),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,id.__webglFramebuffer);for(let xa=0;xa<ft;xa++)Ce&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,O,Et+xa),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,tt,De+xa)),R.blitFramebuffer(wt,Nt,ct,mt,qt,ce,ct,mt,R.DEPTH_BUFFER_BIT,R.NEAREST);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||vt.has(M)){let Qn=vt.get(M),pn=vt.get(L);_t.bindFramebuffer(R.READ_FRAMEBUFFER,Gb),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,kb);for(let Sn=0;Sn<ft;Sn++)Ce?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Qn.__webglTexture,O,Et+Sn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Qn.__webglTexture,O),Kn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pn.__webglTexture,tt,De+Sn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pn.__webglTexture,tt),O!==0?R.blitFramebuffer(wt,Nt,ct,mt,qt,ce,ct,mt,R.COLOR_BUFFER_BIT,R.NEAREST):Kn?R.copyTexSubImage3D(we,tt,qt,ce,De+Sn,wt,Nt,ct,mt):R.copyTexSubImage2D(we,tt,qt,ce,wt,Nt,ct,mt);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Kn?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(we,tt,qt,ce,De,ct,mt,ft,he,At,xe.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(we,tt,qt,ce,De,ct,mt,ft,he,xe.data):R.texSubImage3D(we,tt,qt,ce,De,ct,mt,ft,he,At,xe):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,tt,qt,ce,ct,mt,he,At,xe.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,tt,qt,ce,xe.width,xe.height,he,xe.data):R.texSubImage2D(R.TEXTURE_2D,tt,qt,ce,ct,mt,he,At,xe);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Dn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ur),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zo),tt===0&&L.generateMipmaps&&R.generateMipmap(we),_t.unbindTexture()},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){C=0,w=0,D=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var cr=e=>`/assets/${e}.jpg`,C3=["All work","Paintings","Botanical studies","Drawings","Handcrafted"],R3=[54,32,30,55,41,27,35,36,37,39,42,45,47,50,51,52,28,29,31,33,34,38,18,43,48,17,19,20,21,22,23,25,26,44,46,53,24,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1],Ib=[18,28,29,30,31,32,33,34,38,41,42,43,48,51,55],Pb=[17,19,20,21,22,23,25,37,39,44,46,47,49,53],Bo=R3.map(e=>({id:e,category:e<=15?"Handcrafted":Ib.includes(e)?"Botanical studies":Pb.includes(e)?"Drawings":"Paintings",title:e===54?"A quiet kind of light":e===55?"The architecture of a leaf":e===32?"Veins of autumn":e===30?"Between green and gold":e===41?"An unfolding world":e===27?"On the surface":e===51?"A spectrum of leaves":e<=15?"Made by hand":Ib.includes(e)?"Botanical study":Pb.includes(e)?"Studies in line":"From the studio"}));function D3(){let e=(0,P.useRef)();return(0,P.useEffect)(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t,n;try{t=new td({alpha:!0,antialias:!1}),t.setPixelRatio(Math.min(devicePixelRatio,1.5)),e.current.appendChild(t.domElement);let i=new ac,s=new fn(45,1,.1,100);s.position.z=6;let a=new vs;i.add(a);let r=new uc(0,0,1,1.8,0,Math.PI*2);for(let d=0;d<7;d++){let h=r.getPoints(70).map(x=>new B(x.x,x.y,0)),p=new Ti().setFromPoints(h),g=new oc(p,new Co({color:8094813,transparent:!0,opacity:.12}));g.position.set((d%3-1)*3,(d%2-.5)*3,-d*.4),g.rotation.z=d*.7,g.scale.setScalar(.6+d*.12),a.add(g)}let o=()=>{let d=innerWidth,h=innerHeight;t.setSize(d,h),s.aspect=d/h,s.updateProjectionMatrix()};o(),addEventListener("resize",o);let l=!0,c=()=>{l=!document.hidden};document.addEventListener("visibilitychange",c);let f=d=>{n=requestAnimationFrame(f),l&&(a.rotation.z=Math.sin(d*6e-5)*.1,a.position.y=Math.sin(d*15e-5)*.12,t.render(i,s))};return n=requestAnimationFrame(f),()=>{cancelAnimationFrame(n),removeEventListener("resize",o),document.removeEventListener("visibilitychange",c),i.traverse(d=>{d.geometry?.dispose(),d.material?.dispose()}),t.dispose(),t.domElement.remove()}}catch{}},[]),P.default.createElement("div",{className:"atmosphere",ref:e,"aria-hidden":"true"})}function N3(){let[e,t]=(0,P.useState)("All work"),[n,i]=(0,P.useState)(12),[s,a]=(0,P.useState)(null),[r,o]=(0,P.useState)(!1),l=Bo.filter(d=>e==="All work"||d.category===e),c=l.slice(0,n);(0,P.useEffect)(()=>{let d=new IntersectionObserver(h=>h.forEach(p=>{p.isIntersecting&&(p.target.classList.add("seen"),d.unobserve(p.target))}),{threshold:.08});return document.querySelectorAll(".reveal").forEach(h=>d.observe(h)),()=>d.disconnect()},[e,n]),(0,P.useEffect)(()=>{if(s===null)return;let d=document.body.style.overflow;document.body.style.overflow="hidden";let h=p=>{if(p.key==="Escape"&&a(null),p.key==="ArrowRight"&&a(g=>(g+1)%l.length),p.key==="ArrowLeft"&&a(g=>(g-1+l.length)%l.length),p.key==="Tab"){let g=document.querySelectorAll(".lightbox button"),x=g[0],m=g[g.length-1];p.shiftKey&&document.activeElement===x?(p.preventDefault(),m.focus()):!p.shiftKey&&document.activeElement===m&&(p.preventDefault(),x.focus())}};return addEventListener("keydown",h),document.querySelector(".close")?.focus(),()=>{document.body.style.overflow=d,removeEventListener("keydown",h),document.querySelector(`[data-work="${l[s]?.id}"]`)?.focus()}},[s,e]);let f=()=>o(!1);return P.default.createElement(P.default.Fragment,null,P.default.createElement(D3,null),P.default.createElement("header",null,P.default.createElement("a",{className:"brand",href:"#home","aria-label":"Artist Studio home"},P.default.createElement("span",{className:"brand-mark"},"a",P.default.createElement("span",null,"\u2733")),P.default.createElement("span",null,"ARTIST",P.default.createElement("br",null),"STUDIO")),P.default.createElement("nav",{className:r?"open":"","aria-label":"Main navigation"},P.default.createElement("a",{onClick:f,href:"#works"},"Selected work"),P.default.createElement("a",{onClick:f,href:"#practice"},"The practice"),P.default.createElement("a",{onClick:f,href:"#collection"},"Collection")),P.default.createElement("a",{className:"header-link",href:"#collection"},"Enter the gallery ",P.default.createElement("span",null,"\u2197")),P.default.createElement("button",{className:"menu",onClick:()=>o(!r),"aria-expanded":r,"aria-label":"Toggle navigation"},r?"Close \u2212":"Menu +")),P.default.createElement("main",{id:"home"},P.default.createElement("section",{className:"hero"},P.default.createElement("div",{className:"hero-copy"},P.default.createElement("p",{className:"eyebrow"},P.default.createElement("span",{className:"dot"})," PAINTING \xB7 DRAWING \xB7 HANDCRAFT"),P.default.createElement("h1",null,"A study",P.default.createElement("br",null),"in ",P.default.createElement("em",null,"seeing."),P.default.createElement("span",{className:"star"},"\u2733")),P.default.createElement("p",{className:"intro"},"Finding the extraordinary in the everyday.",P.default.createElement("br",null),"An exploration of nature, texture, and the",P.default.createElement("br",{className:"desktop"})," quiet poetry of things."),P.default.createElement("a",{className:"pill",href:"#works"},"Discover the work ",P.default.createElement("span",null,"\u2197")),P.default.createElement("div",{className:"hero-note"},P.default.createElement("span",{className:"tiny-line"})," ORIGINAL WORKS / AN INDEPENDENT PRACTICE")),P.default.createElement("div",{className:"hero-art"},P.default.createElement("span",{className:"art-top"},"THE ARTIST BEHIND THE WORK"),P.default.createElement("div",{className:"art-orbit"}),P.default.createElement("div",{className:"portrait-frame"},P.default.createElement("img",{src:cr(16),alt:"Portrait of the artist wearing glasses and a purple botanical patterned scarf",fetchPriority:"high"}),P.default.createElement("span",{className:"portrait-caption"},"THE ARTIST / A LIFE IN COLOUR")),P.default.createElement("div",{className:"portrait-art"},P.default.createElement("img",{src:cr(32),alt:"Red and gold botanical painting"})),P.default.createElement("div",{className:"art-small"},P.default.createElement("img",{src:cr(30),alt:"Green and gold textured botanical painting",fetchPriority:"high"})),P.default.createElement("span",{className:"round-stamp"},"LOOK A LITTLE CLOSER",P.default.createElement("br",null),"\u2199"),P.default.createElement("span",{className:"vertical-note"},"OBSERVE. FEEL. CREATE.")),P.default.createElement("div",{className:"hero-bottom"},P.default.createElement("span",null,"ART IS A WAY OF PAYING ATTENTION."),P.default.createElement("a",{href:"#works"},"SCROLL TO EXPLORE \u2193"))),P.default.createElement("div",{className:"ticker","aria-hidden":"true"},P.default.createElement("div",null,"ROOTED IN NATURE ",P.default.createElement("i",null,"\u2733")," SHAPED BY HAND ",P.default.createElement("i",null,"\u2733")," SEEN WITH FEELING ",P.default.createElement("i",null,"\u2733")," ROOTED IN NATURE ",P.default.createElement("i",null,"\u2733")," SHAPED BY HAND ",P.default.createElement("i",null,"\u2733")," SEEN WITH FEELING ",P.default.createElement("i",null,"\u2733"))),P.default.createElement("section",{id:"works",className:"section selected"},P.default.createElement("div",{className:"section-head reveal"},P.default.createElement("div",null,P.default.createElement("p",{className:"eyebrow"},"01 / SELECTED WORK"),P.default.createElement("h2",null,"Small details.",P.default.createElement("br",null),P.default.createElement("em",null,"Entire worlds."))),P.default.createElement("p",null,"A closer look at the colours, forms and",P.default.createElement("br",null),"textures that often go unnoticed.")),P.default.createElement("div",{className:"featured-grid"},[54,55,41].map((d,h)=>P.default.createElement("button",{className:`feature feature-${h} reveal`,key:d,"data-work":d,onClick:()=>{t("All work"),a(Bo.findIndex(p=>p.id===d))}},P.default.createElement("div",{className:"image-wrap"},P.default.createElement("img",{src:cr(d),alt:Bo.find(p=>p.id===d).title,loading:"lazy"}),P.default.createElement("span",{className:"view-circle"},"\u2197")),P.default.createElement("div",{className:"caption"},P.default.createElement("div",null,P.default.createElement("h3",null,Bo.find(p=>p.id===d).title),P.default.createElement("span",null,h===0?"LANDSCAPE":"BOTANICAL STUDY")),P.default.createElement("span",null,"0",h+1)))))),P.default.createElement("section",{className:"leaf-story",id:"practice"},P.default.createElement("div",{className:"leaf-photo reveal"},P.default.createElement("img",{src:cr(31),loading:"lazy",alt:"Close study of a leaf's intricate natural structure"}),P.default.createElement("span",null,"A CLOSER LOOK / BOTANICAL STUDIES")),P.default.createElement("div",{className:"leaf-copy reveal"},P.default.createElement("p",{className:"eyebrow"},"02 / THE PRACTICE"),P.default.createElement("span",{className:"outline-star"},"\u2733"),P.default.createElement("h2",null,"There is a whole",P.default.createElement("br",null),"world in",P.default.createElement("br",null),P.default.createElement("em",null,"a single leaf.")),P.default.createElement("p",null,"A vein becomes a path. A surface becomes a landscape. Across paintings, drawings and handmade objects, this practice returns to the beauty of looking closely."),P.default.createElement("p",null,"From expressive colour to careful lines, each piece offers a different way of seeing the familiar."),P.default.createElement("a",{className:"text-link",href:"#collection",onClick:()=>{t("Botanical studies"),i(12)}},"Explore the botanical studies ",P.default.createElement("span",null,"\u2197")))),P.default.createElement("section",{className:"section gallery",id:"collection"},P.default.createElement("div",{className:"section-head reveal"},P.default.createElement("div",null,P.default.createElement("p",{className:"eyebrow"},"03 / THE COLLECTION"),P.default.createElement("h2",null,"A world of",P.default.createElement("br",null),P.default.createElement("em",null,"many expressions."))),P.default.createElement("p",null,"Paint, pencil, thread.",P.default.createElement("br",null),"Different materials. One curious eye.")),P.default.createElement("div",{className:"filters",role:"group","aria-label":"Filter artwork"},C3.map(d=>P.default.createElement("button",{key:d,"aria-pressed":d===e,className:d===e?"active":"",onClick:()=>{t(d),i(12)}},d,P.default.createElement("span",null,d==="All work"?Bo.length:Bo.filter(h=>h.category===d).length)))),P.default.createElement("div",{className:"art-grid"},c.map((d,h)=>P.default.createElement("button",{className:"work reveal",key:d.id,"data-work":d.id,onClick:()=>a(h)},P.default.createElement("div",{className:"work-image"},P.default.createElement("img",{src:cr(d.id),loading:"lazy",alt:`${d.category}: ${d.title}`}),P.default.createElement("span",{className:"view-circle"},"\u2197")),P.default.createElement("div",{className:"caption"},P.default.createElement("div",null,P.default.createElement("h3",null,d.title),P.default.createElement("span",null,d.category)),P.default.createElement("span",null,"\u2197"))))),l.length>n?P.default.createElement("button",{className:"load pill",onClick:()=>i(d=>d+12)},"More from the studio ",P.default.createElement("span",null,"+")):P.default.createElement("p",{className:"end-note"},"You\u2019ve explored this collection. Thank you for looking closely.")),P.default.createElement("section",{className:"closing"},P.default.createElement("p",{className:"eyebrow"},"AN ONGOING EXPLORATION"),P.default.createElement("h2",null,"Stay curious.",P.default.createElement("br",null),P.default.createElement("em",null,"Look closer.")),P.default.createElement("a",{className:"pill",href:"#collection"},"Revisit the collection ",P.default.createElement("span",null,"\u2197")),P.default.createElement("span",{className:"closing-flower","aria-hidden":"true"},"\u2733"))),P.default.createElement("footer",null,P.default.createElement("a",{className:"brand",href:"#home"},P.default.createElement("span",{className:"brand-mark"},"a",P.default.createElement("span",null,"\u2733")),P.default.createElement("span",null,"ARTIST",P.default.createElement("br",null),"STUDIO")),P.default.createElement("p",null,"Nature observed. Stories made by hand."),P.default.createElement("a",{href:"#home"},"BACK TO TOP \u2191")),s!==null&&l[s]&&P.default.createElement("div",{className:"lightbox",role:"dialog","aria-modal":"true","aria-label":"Artwork viewer",onClick:d=>{d.target===d.currentTarget&&a(null)}},P.default.createElement("button",{className:"close",onClick:()=>a(null),"aria-label":"Close artwork viewer"},"Close \xD7"),P.default.createElement("div",{className:"lightbox-image"},P.default.createElement("img",{src:cr(l[s].id),alt:l[s].title})),P.default.createElement("div",{className:"lightbox-bottom"},P.default.createElement("button",{onClick:()=>a((s-1+l.length)%l.length),"aria-label":"Previous artwork"},"\u2190"),P.default.createElement("div",null,P.default.createElement("h3",null,l[s].title),P.default.createElement("p",null,l[s].category," \xB7 ",s+1," / ",l.length)),P.default.createElement("button",{onClick:()=>a((s+1)%l.length),"aria-label":"Next artwork"},"\u2192"))))}(0,Bb.createRoot)(document.getElementById("root")).render(P.default.createElement(N3,null));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

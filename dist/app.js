(()=>{var jb=Object.create;var U0=Object.defineProperty;var $b=Object.getOwnPropertyDescriptor;var t1=Object.getOwnPropertyNames;var e1=Object.getPrototypeOf,n1=Object.prototype.hasOwnProperty;var ws=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var i1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of t1(t))!n1.call(e,s)&&s!==n&&U0(e,s,{get:()=>t[s],enumerable:!(i=$b(t,s))||i.enumerable});return e};var L0=(e,t,n)=>(n=e!=null?jb(e1(e)):{},i1(t||!e||!e.__esModule?U0(n,"default",{value:e,enumerable:!0}):n,e));var q0=ws(Lt=>{"use strict";var cd=Symbol.for("react.transitional.element"),s1=Symbol.for("react.portal"),a1=Symbol.for("react.fragment"),r1=Symbol.for("react.strict_mode"),o1=Symbol.for("react.profiler"),l1=Symbol.for("react.consumer"),c1=Symbol.for("react.context"),u1=Symbol.for("react.forward_ref"),h1=Symbol.for("react.suspense"),f1=Symbol.for("react.memo"),z0=Symbol.for("react.lazy"),d1=Symbol.for("react.activity"),p1=Symbol.for("react.view_transition"),O0=Symbol.iterator;function m1(e){return e===null||typeof e!="object"?null:(e=O0&&e[O0]||e["@@iterator"],typeof e=="function"?e:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,V0={};function fr(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||F0}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function G0(){}G0.prototype=fr.prototype;function ud(e,t,n){this.props=e,this.context=t,this.refs=V0,this.updater=n||F0}var hd=ud.prototype=new G0;hd.constructor=ud;H0(hd,fr.prototype);hd.isPureReactComponent=!0;var I0=Array.isArray;function ld(){}var ge={H:null,A:null,T:null,S:null},k0=Object.prototype.hasOwnProperty;function fd(e,t,n){var i=n.ref;return{$$typeof:cd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function g1(e,t){return fd(e.type,t,e.props)}function dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===cd}function _1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var P0=/\/+/g;function od(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_1(""+e.key):t.toString(36)}function v1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ld,ld):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function hr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case cd:case s1:r=!0;break;case z0:return r=e._init,hr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+od(e,0):i,I0(s)?(n="",r!=null&&(n=r.replace(P0,"$&/")+"/"),hr(s,t,n,"",function(c){return c})):s!=null&&(dd(s)&&(s=g1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(P0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(I0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+od(i,l),r+=hr(i,t,n,a,s);else if(l=m1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+od(i,l++),r+=hr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return hr(v1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function wc(e,t,n){if(e==null)return e;var i=[],s=0;return hr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function y1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var B0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function X0(e){var t=ge.T,n={};n.types=t!==null?t.types:null,ge.T=n;try{var i=e(),s=ge.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ld,B0)}catch(a){B0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ge.T=t}}function W0(e){var t=ge.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else X0(W0.bind(null,e))}var x1={map:wc,forEach:function(e,t,n){wc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wc(e,function(){t++}),t},toArray:function(e){return wc(e,function(t){return t})||[]},only:function(e){if(!dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Lt.Activity=d1;Lt.Children=x1;Lt.Component=fr;Lt.Fragment=a1;Lt.Profiler=o1;Lt.PureComponent=ud;Lt.StrictMode=r1;Lt.Suspense=h1;Lt.ViewTransition=p1;Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ge;Lt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ge.H.useMemoCache(e)}};Lt.addTransitionType=W0;Lt.cache=function(e){return function(){return e.apply(null,arguments)}};Lt.cacheSignal=function(){return null};Lt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=H0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!k0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return fd(e.type,s,i)};Lt.createContext=function(e){return e={$$typeof:c1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:l1,_context:e},e};Lt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)k0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return fd(e,a,s)};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(e){return{$$typeof:u1,render:e}};Lt.isValidElement=dd;Lt.lazy=function(e){return{$$typeof:z0,_payload:{_status:-1,_result:e},_init:y1}};Lt.memo=function(e,t){return{$$typeof:f1,type:e,compare:t===void 0?null:t}};Lt.startTransition=X0;Lt.unstable_useCacheRefresh=function(){return ge.H.useCacheRefresh()};Lt.use=function(e){return ge.H.use(e)};Lt.useActionState=function(e,t,n){return ge.H.useActionState(e,t,n)};Lt.useCallback=function(e,t){return ge.H.useCallback(e,t)};Lt.useContext=function(e){return ge.H.useContext(e)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(e,t){return ge.H.useDeferredValue(e,t)};Lt.useEffect=function(e,t){return ge.H.useEffect(e,t)};Lt.useEffectEvent=function(e){return ge.H.useEffectEvent(e)};Lt.useId=function(){return ge.H.useId()};Lt.useImperativeHandle=function(e,t,n){return ge.H.useImperativeHandle(e,t,n)};Lt.useInsertionEffect=function(e,t){return ge.H.useInsertionEffect(e,t)};Lt.useLayoutEffect=function(e,t){return ge.H.useLayoutEffect(e,t)};Lt.useMemo=function(e,t){return ge.H.useMemo(e,t)};Lt.useOptimistic=function(e,t){return ge.H.useOptimistic(e,t)};Lt.useReducer=function(e,t,n){return ge.H.useReducer(e,t,n)};Lt.useRef=function(e){return ge.H.useRef(e)};Lt.useState=function(e){return ge.H.useState(e)};Lt.useSyncExternalStore=function(e,t,n){return ge.H.useSyncExternalStore(e,t,n)};Lt.useTransition=function(){return ge.H.useTransition()};Lt.version="19.3.1"});var Cc=ws((W3,Y0)=>{"use strict";Y0.exports=q0()});var i_=ws(Ee=>{"use strict";function _d(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Rc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ci(e){return e.length===0?null:e[0]}function Dc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Rc(o,n))l<s&&0>Rc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Rc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Rc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Z0=performance,Ee.unstable_now=function(){return Z0.now()}):(pd=Date,K0=pd.now(),Ee.unstable_now=function(){return pd.now()-K0});var Z0,pd,K0,Qi=[],Cs=[],S1=1,jn=null,ln=3,vd=!1,Ho=!1,Vo=!1,yd=!1,j0=typeof setTimeout=="function"?setTimeout:null,$0=typeof clearTimeout=="function"?clearTimeout:null,J0=typeof setImmediate<"u"?setImmediate:null;function Nc(e){for(var t=Ci(Cs);t!==null;){if(t.callback===null)Dc(Cs);else if(t.startTime<=e)Dc(Cs),t.sortIndex=t.expirationTime,_d(Qi,t);else break;t=Ci(Cs)}}function xd(e){if(Vo=!1,Nc(e),!Ho)if(Ci(Qi)!==null)Ho=!0,pr||(pr=!0,dr());else{var t=Ci(Cs);t!==null&&Sd(xd,t.startTime-e)}}var pr=!1,Go=-1,t_=5,e_=-1;function n_(){return yd?!0:!(Ee.unstable_now()-e_<t_)}function md(){if(yd=!1,pr){var e=Ee.unstable_now();e_=e;var t=!0;try{t:{Ho=!1,Vo&&(Vo=!1,$0(Go),Go=-1),vd=!0;var n=ln;try{e:{for(Nc(e),jn=Ci(Qi);jn!==null&&!(jn.expirationTime>e&&n_());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,ln=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){jn.callback=s,Nc(e),t=!0;break e}jn===Ci(Qi)&&Dc(Qi),Nc(e)}else Dc(Qi);jn=Ci(Qi)}if(jn!==null)t=!0;else{var a=Ci(Cs);a!==null&&Sd(xd,a.startTime-e),t=!1}}break t}finally{jn=null,ln=n,vd=!1}t=void 0}}finally{t?dr():pr=!1}}}var dr;typeof J0=="function"?dr=function(){J0(md)}:typeof MessageChannel<"u"?(gd=new MessageChannel,Q0=gd.port2,gd.port1.onmessage=md,dr=function(){Q0.postMessage(null)}):dr=function(){j0(md,0)};var gd,Q0;function Sd(e,t){Go=j0(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):t_=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return ln};Ee.unstable_next=function(e){switch(ln){case 1:case 2:case 3:var t=3;break;default:t=ln}var n=ln;ln=t;try{return e()}finally{ln=n}};Ee.unstable_requestPaint=function(){yd=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ln;ln=e;try{return t()}finally{ln=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:S1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,_d(Cs,e),Ci(Qi)===null&&e===Ci(Cs)&&(Vo?($0(Go),Go=-1):Vo=!0,Sd(xd,n-i))):(e.sortIndex=s,_d(Qi,e),Ho||vd||(Ho=!0,pr||(pr=!0,dr()))),e};Ee.unstable_shouldYield=n_;Ee.unstable_wrapCallback=function(e){var t=ln;return function(){var n=ln;ln=t;try{return e.apply(this,arguments)}finally{ln=n}}}});var a_=ws((Y3,s_)=>{"use strict";s_.exports=i_()});var l_=ws(cn=>{"use strict";var M1=Cc();function o_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rs(){}var gn={d:{f:Rs,r:function(){throw Error(o_(522))},D:Rs,C:Rs,L:Rs,m:Rs,X:Rs,S:Rs,M:Rs},p:0,findDOMNode:null},b1=Symbol.for("react.portal"),T1=Symbol.for("react.recoverable"),r_=Symbol.for("react.optimistic_key");function E1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b1,key:i==null?null:i===r_?r_:""+i,children:e,containerInfo:t,implementation:n}}var ko=M1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Uc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gn;cn.browser=function(e){return{$$typeof:T1,_reason:e}};cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(o_(299));return E1(e,t,null,n)};cn.flushSync=function(e){var t=ko.T,n=gn.p;try{if(ko.T=null,gn.p=2,e)return e()}finally{ko.T=t,gn.p=n,gn.d.f()}};cn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,gn.d.C(e,t))};cn.prefetchDNS=function(e){typeof e=="string"&&gn.d.D(e)};cn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Uc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?gn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&gn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};cn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Uc(t.as,t.crossOrigin);gn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&gn.d.M(e)};cn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Uc(n,t.crossOrigin);gn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};cn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Uc(t.as,t.crossOrigin);gn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else gn.d.m(e)};cn.requestFormReset=function(e){gn.d.r(e)};cn.unstable_batchedUpdates=function(e,t){return e(t)};cn.useFormState=function(e,t,n){return ko.H.useFormState(e,t,n)};cn.useFormStatus=function(){return ko.H.useHostTransitionStatus()};cn.version="19.3.1"});var h_=ws((K3,u_)=>{"use strict";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(e){console.error(e)}}c_(),u_.exports=l_()});var QS=ws(dh=>{"use strict";var ke=a_(),Jv=Cc(),A1=h_();function X(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Nl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function jv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f_(e){if(Nl(e)!==e)throw Error(X(188))}function w1(e){var t=e.alternate;if(!t){if(t=Nl(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return f_(s),e;if(a===i)return f_(s),t;a=a.sibling}throw Error(X(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(X(189))}}if(n.alternate!==i)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function ty(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ty(e),t!==null)return t;e=e.sibling}return null}function Cn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Cn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Ga(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function d_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function ey(e){var t=[null,null],n=Ga(e);return n===null||ny(t,e,n.child,{foundSelf:!1}),t}function ny(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ny(e,t,n.child,i))return!0;n=n.sibling}return!1}function Ge(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(X(559))}}var Sr=null,$d=null;function C1(e,t,n){return e===n?!0:e===t?(Sr=e,!0):!1}function R1(e,t,n){return e===n?($d=e,!1):e===t?($d!==null&&(Sr=e),!0):!1}function p_(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var de=Object.assign,N1=Symbol.for("react.element"),Lc=Symbol.for("react.transitional.element"),Jo=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),iy=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),sy=Symbol.for("react.consumer"),Oi=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),ip=Symbol.for("react.suspense_list"),hm=Symbol.for("react.memo"),Ls=Symbol.for("react.lazy"),sp=Symbol.for("react.activity"),D1=Symbol.for("react.legacy_hidden"),U1=Symbol.for("react.memo_cache_sentinel"),ap=Symbol.for("react.view_transition"),L1=Symbol.for("react.recoverable"),m_=Symbol.iterator;function Xo(e){return e===null||typeof e!="object"?null:(e=m_&&e[m_]||e["@@iterator"],typeof e=="function"?e:null)}var O1=Symbol.for("react.client.reference");function rp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===O1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mr:return"Fragment";case ep:return"Profiler";case iy:return"StrictMode";case np:return"Suspense";case ip:return"SuspenseList";case sp:return"Activity";case ap:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Jo:return"Portal";case Oi:return e.displayName||"Context";case sy:return(e._context.displayName||"Context")+".Consumer";case um:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hm:return t=e.displayName||null,t!==null?t:rp(e.type)||"Memo";case Ls:t=e._payload,e=e._init;try{return rp(e(t))}catch{}}return null}var Qo=Array.isArray,Rt=Jv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=A1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ra={pending:!1,data:null,method:null,action:null},op=[],br=-1;function Vi(e){return{current:e}}function en(e){0>br||(e.current=op[br],op[br]=null,br--)}function ye(e,t){br++,op[br]=e.current,e.current=t}var zi=Vi(null),pl=Vi(null),Gs=Vi(null),yu=Vi(null);function xu(e,t){switch(ye(Gs,t),ye(pl,e),ye(zi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rv(t),e=AS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(zi),ye(zi,e)}function kr(){en(zi),en(pl),en(Gs)}function lp(e){var t=e.memoizedState;t!==null&&($r._currentValue=t.memoizedState,ye(yu,e)),t=zi.current;var n=AS(t,e.type);t!==n&&(ye(pl,e),ye(zi,n))}function Su(e){pl.current===e&&(en(zi),en(pl)),yu.current===e&&(en(yu),$r._currentValue=Ra)}var Md,g_;function Ds(e){if(Md===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Md=t&&t[1]||"",g_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Md+e+g_}var bd=!1;function Td(e,t){if(!e||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(g){var u=g}Reflect.construct(e,[],d)}else{try{d.call()}catch(g){u=g}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(g){u=g}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(g){if(g&&u&&typeof g.stack=="string")return[g.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ds(n):""}function I1(e,t){switch(e.tag){case 26:case 27:case 5:return Ds(e.type);case 16:return Ds("Lazy");case 13:return e.child!==t&&t!==null?Ds("Suspense Fallback"):Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 15:return Td(e.type,!1);case 11:return Td(e.type.render,!1);case 1:return Td(e.type,!0);case 31:return Ds("Activity");case 30:return Ds("ViewTransition");default:return""}}function __(e){try{var t="",n=null;do t+=I1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cp=Object.prototype.hasOwnProperty,fm=ke.unstable_scheduleCallback,Ed=ke.unstable_cancelCallback,P1=ke.unstable_shouldYield,B1=ke.unstable_requestPaint,zn=ke.unstable_now,z1=ke.unstable_getCurrentPriorityLevel,ay=ke.unstable_ImmediatePriority,ry=ke.unstable_UserBlockingPriority,Mu=ke.unstable_NormalPriority,F1=ke.unstable_LowPriority,oy=ke.unstable_IdlePriority,H1=ke.log,V1=ke.unstable_setDisableYieldValue,Dl=null,Fn=null;function Ps(e){if(typeof H1=="function"&&V1(e),Fn&&typeof Fn.setStrictMode=="function")try{Fn.setStrictMode(Dl,e)}catch{}}var Hn=Math.clz32?Math.clz32:X1,G1=Math.log,k1=Math.LN2;function X1(e){return e>>>=0,e===0?32:31-(G1(e)/k1|0)|0}var Oc=256,Ic=262144,Pc=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ta(i):(r&=o,r!==0?s=Ta(r):n||(n=o&~e,n!==0&&(s=Ta(n))))):(o=i&~a,o!==0?s=Ta(o):r!==0?s=Ta(r):n||(n=i&~e,n!==0&&(s=Ta(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ly(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Hn(n),s=1<<i;t|=e[i],n&=~s}return t}function W1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cy(){var e=Pc;return Pc<<=1,(Pc&62914560)===0&&(Pc=4194304),e}function Ad(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ll(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Hn(n),d=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var p=u[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&uy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function uy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Hn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function hy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Hn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function fy(e,t){var n=t&-t;return n=(n&42)!==0?1:dm(n),(n&(e.suspendedLanes|t))!==0?0:n}function dm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dy(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:ZS(e.type))}function v_(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var us=Math.random().toString(36).slice(2),$e="__reactFiber$"+us,Rn="__reactProps$"+us,no="__reactContainer$"+us,y_="__reactEvents$"+us,Y1="__reactListeners$"+us,Z1="__reactHandles$"+us,x_="__reactResources$"+us,Ol="__reactMarker$"+us,bu="__reactLoad$"+us;function Ku(e){delete e[$e],delete e[Rn],delete e[Y1],delete e[Z1]}function wa(e){var t;if(t=e[$e])return t;for(var n=e.parentNode;n;){if(t=n[no]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bv(e);e!==null;){if(n=e[$e])return n;e=Bv(e)}return t}e=n,n=e.parentNode}return null}function io(e){if(e=e[$e]||e[no]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function jo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(X(33))}function Lr(e){var t=e[x_];return t||(t=e[x_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ke(e){e[Ol]=!0}function py(e){e[bu]=void 0}var my=new Set,gy={};function ka(e,t){Xr(e,t),Xr(e+"Capture",t)}function Xr(e,t){for(gy[e]=t,e=0;e<t.length;e++)my.add(t[e])}var K1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),S_={},M_={};function J1(e){return cp.call(M_,e)?!0:cp.call(S_,e)?!1:K1.test(e)?M_[e]=!0:(S_[e]=!0,!1)}var $t=!1;function b_(){var e=$t;return $t=!1,e}function tu(e,t,n){if(J1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Bc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function ji(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function On(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _y(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function up(e){if(!e._valueTracker){var t=_y(e)?"checked":"value";e._valueTracker=Q1(e,t,""+e[t])}}function vy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=_y(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var j1=/[\n"\\]/g;function ii(e){return e.replace(j1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+On(t)):e.value!==""+On(t)&&(e.value=""+On(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?wd(e,On(e.value)):wd(e,On(t)):n!=null?wd(e,On(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+On(o):e.removeAttribute("name")}function yy(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){up(e);return}n=n!=null?""+On(n):"",t=t!=null?""+On(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),up(e)}function wd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Or(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function xy(e,t,n){if(t!=null&&(t=""+On(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+On(n):""}function Sy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(X(92));if(Qo(i)){if(1<i.length)throw Error(X(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=On(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),up(e)}function Wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function T_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||$1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function My(e,t,n){if(t!=null&&typeof t!="object")throw Error(X(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",$t=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(T_(e,s,i),$t=!0)}else for(var a in t)t.hasOwnProperty(a)&&T_(e,a,t[a])}function mm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eu(e){return eT.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var fp=null;function gm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tr=null,Ir=null;function E_(e){var t=io(e);if(t&&(e=t.stateNode)){var n=e[Rn]||null;t:switch(e=t.stateNode,t.type){case"input":if(hp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Rn]||null;if(!s)throw Error(X(90));hp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&vy(i)}break t;case"textarea":xy(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}}}var Cd=!1;function by(e,t,n){if(Cd)return e(t,n);Cd=!0;try{var i=e(t);return i}finally{if(Cd=!1,(Tr!==null||Ir!==null)&&(ch(),Tr&&(t=Tr,e=Ir,Ir=Tr=null,E_(t),e)))for(t=0;t<e.length;t++)E_(e[t])}}function ml(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dp=!1;if(ss)try{mr={},Object.defineProperty(mr,"passive",{get:function(){dp=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{dp=!1}var mr,Bs=null,_m=null,nu=null;function Ty(){if(nu)return nu;var e,t=_m,n=t.length,i,s="value"in Bs?Bs.value:Bs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return nu=s.slice(e,1<i?1-i:void 0)}function iu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zc(){return!0}function A_(){return!1}function xn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zc:A_,this.isPropagationStopped=A_,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zc)},persist:function(){},isPersistent:zc}),t}var ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=xn(ia),Il=de({},ia,{view:0,detail:0}),nT=xn(Il),Rd,Nd,Wo,Qu=de({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wo&&(Wo&&e.type==="mousemove"?(Rd=e.screenX-Wo.screenX,Nd=e.screenY-Wo.screenY):Nd=Rd=0,Wo=e),Rd)},movementY:function(e){return"movementY"in e?e.movementY:Nd}}),w_=xn(Qu),iT=de({},Qu,{dataTransfer:0}),sT=xn(iT),aT=de({},Il,{relatedTarget:0}),Dd=xn(aT),rT=de({},ia,{animationName:0,elapsedTime:0,pseudoElement:0}),oT=xn(rT),lT=de({},ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cT=xn(lT),uT=de({},ia,{data:0}),C_=xn(uT),hT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dT[e])?!!t[e]:!1}function vm(){return pT}var mT=de({},Il,{key:function(e){if(e.key){var t=hT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=iu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vm,charCode:function(e){return e.type==="keypress"?iu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?iu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gT=xn(mT),_T=de({},Qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),R_=xn(_T),vT=de({},ia,{submitter:0}),yT=xn(vT),xT=de({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vm}),ST=xn(xT),MT=de({},ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),bT=xn(MT),TT=de({},Qu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=xn(TT),AT=de({},ia,{newState:0,oldState:0,source:0}),wT=xn(AT),CT=[9,13,27,32],ym=ss&&"CompositionEvent"in window,el=null;ss&&"documentMode"in document&&(el=document.documentMode);var RT=ss&&"TextEvent"in window&&!el,Ey=ss&&(!ym||el&&8<el&&11>=el),N_=" ",D_=!1;function Ay(e,t){switch(e){case"keyup":return CT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function NT(e,t){switch(e){case"compositionend":return wy(t);case"keypress":return t.which!==32?null:(D_=!0,N_);case"textInput":return e=t.data,e===N_&&D_?null:e;default:return null}}function DT(e,t){if(Er)return e==="compositionend"||!ym&&Ay(e,t)?(e=Ty(),nu=_m=Bs=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ey&&t.locale!=="ko"?null:t.data;default:return null}}var UT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!UT[e.type]:t==="textarea"}function Cy(e,t,n,i){Tr?Ir?Ir.push(i):Ir=[i]:Tr=i,t=Wu(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var nl=null,gl=null;function LT(e){bS(e,0)}function ju(e){var t=jo(e);if(vy(t))return e}function L_(e,t){if(e==="change")return t}var Ry=!1;ss&&(ss?(Hc="oninput"in document,Hc||(Ud=document.createElement("div"),Ud.setAttribute("oninput","return;"),Hc=typeof Ud.oninput=="function"),Fc=Hc):Fc=!1,Ry=Fc&&(!document.documentMode||9<document.documentMode));var Fc,Hc,Ud;function O_(){nl&&(nl.detachEvent("onpropertychange",Ny),gl=nl=null)}function Ny(e){if(e.propertyName==="value"&&ju(gl)){var t=[];Cy(t,gl,e,gm(e)),by(LT,t)}}function OT(e,t,n){e==="focusin"?(O_(),nl=t,gl=n,nl.attachEvent("onpropertychange",Ny)):e==="focusout"&&O_()}function IT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ju(gl)}function PT(e,t){if(e==="click")return ju(t)}function BT(e,t){if(e==="input"||e==="change")return ju(t)}function zT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:zT;function _l(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!cp.call(t,s)||!Gn(e[s],t[s]))return!1}return!0}function pp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function I_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function P_(e,t){var n=I_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=I_(n)}}function Dy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pp(e.document)}return t}function xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var FT=ss&&"documentMode"in document&&11>=document.documentMode,Ar=null,mp=null,il=null,gp=!1;function B_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gp||Ar==null||Ar!==pp(i)||(i=Ar,"selectionStart"in i&&xm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),il&&_l(il,i)||(il=i,i=Wu(mp,"onSelect"),0<i.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ar)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Ld={},Ly={};ss&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Xa(e){if(Ld[e])return Ld[e];if(!wr[e])return e;var t=wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ly)return Ld[e]=t[n];return e}var Oy=Xa("animationend"),Iy=Xa("animationiteration"),Py=Xa("animationstart"),HT=Xa("transitionrun"),VT=Xa("transitionstart"),GT=Xa("transitioncancel"),By=Xa("transitionend"),zy=new Map,_p="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_p.push("scrollEnd");function _i(e,t){zy.set(e,t),ka(t,[e])}var kT=0;function as(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=gi.identifierPrefix;var n=kT++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function z_(e){if(e==null||typeof e=="string")return e;var t=null,n=Gr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function hs(e,t){return e=z_(e),t=z_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ti=[],Cr=0,Sm=0;function $u(){for(var e=Cr,t=Sm=Cr=0;t<e;){var n=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var s=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Fy(n,s,a)}}function th(e,t,n,i){ti[Cr++]=e,ti[Cr++]=t,ti[Cr++]=n,ti[Cr++]=i,Sm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mm(e,t,n,i){return th(e,t,n,i),Eu(e)}function Wa(e,t){return th(e,null,null,t),Eu(e)}function Fy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Hn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Eu(e){if(50<dl)throw dl=0,du=null,Error(X(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Rr={};function XT(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,t,n,i){return new XT(e,t,n,i)}function bm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ns(e,t){var n=e.alternate;return n===null?(n=An(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hy(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function su(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")bm(i)&&(r=1);else if(typeof i=="string")r=gA(e,n,zi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case sp:return e=An(31,n,t,s),e.elementType=sp,e.lanes=a,e;case Mr:return Na(n.children,s,a,t);case iy:r=8,s|=24;break;case ep:return e=An(12,n,t,s|2),e.elementType=ep,e.lanes=a,e;case np:return e=An(13,n,t,s),e.elementType=np,e.lanes=a,e;case ip:return e=An(19,n,t,s),e.elementType=ip,e.lanes=a,e;case D1:case ap:return e=s|32,e=An(30,n,t,e),e.elementType=ap,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Oi:r=10;break t;case sy:r=9;break t;case um:r=11;break t;case hm:r=14;break t;case Ls:r=16,i=null;break t}r=29,n=Error(X(130,e===null?"null":typeof e,"")),i=null}return t=An(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Na(e,t,n,i){return e=An(7,e,i,t),e.lanes=n,e}function Od(e,t,n){return e=An(6,e,null,t),e.lanes=n,e}function Vy(e){var t=An(18,null,null,0);return t.stateNode=e,t}function Id(e,t,n){return t=An(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var F_=new WeakMap;function si(e,t){if(typeof e=="object"&&e!==null){var n=F_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:__(t)},F_.set(e,t),t)}return{value:e,source:t,stack:__(t)}}var Nr=[],Dr=0,Au=null,vl=0,ei=[],ni=0,js=null,Pi=1,Bi="";function ts(e,t){Nr[Dr++]=vl,Nr[Dr++]=Au,Au=e,vl=t}function Gy(e,t,n){ei[ni++]=Pi,ei[ni++]=Bi,ei[ni++]=js,js=e;var i=Pi;e=Bi;var s=32-Hn(i)-1;i&=~(1<<s),n+=1;var a=32-Hn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Pi=1<<32-Hn(t)+s|n<<s|i,Bi=a+e}else Pi=1<<a|n<<s|i,Bi=e}function eh(e){e.return!==null&&(ts(e,1),Gy(e,1,0))}function Tm(e){for(;e===Au;)Au=Nr[--Dr],Nr[Dr]=null,vl=Nr[--Dr],Nr[Dr]=null;for(;e===js;)js=ei[--ni],ei[ni]=null,Bi=ei[--ni],ei[ni]=null,Pi=ei[--ni],ei[ni]=null}function ky(e,t){ei[ni++]=Pi,ei[ni++]=Bi,ei[ni++]=js,Pi=t.id,Bi=t.overflow,js=e}var Je=null,ve=null,Vt=!1,ks=null,ai=!1,vp=Error(X(519));function $s(e){var t=Error(X(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yl(si(t,e)),vp}function H_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[Rn]=i,n){case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":case"embed":kt("load",t);break;case"video":case"audio":for(n=0;n<bl.length;n++)kt(bl[n],t);break;case"source":kt("error",t);break;case"img":case"image":case"link":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"input":kt("invalid",t),yy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":kt("invalid",t);break;case"textarea":kt("invalid",t),Sy(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ES(t.textContent,n)?(i.popover!=null&&(kt("beforetoggle",t),kt("toggle",t)),i.onScroll!=null&&kt("scroll",t),i.onScrollEnd!=null&&kt("scrollend",t),i.onClick!=null&&(t.onclick=Ii),t=!0):t=!1,t||$s(e,!0)}function wu(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Je=Je.return}}function gr(e){if(e!==Je)return!1;if(!Vt)return wu(e),Vt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||nm(e.type,e.memoizedProps)),n=!n),n&&ve&&$s(e),wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=Pv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=Pv(e)}else t===27?(t=ve,sa(e.type)?(e=rm,rm=null,ve=e):ve=t):ve=Je?ri(e.stateNode.nextSibling):null;return!0}function Oa(){ve=Je=null,Vt=!1}function Pd(){var e=ks;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),ks=null),e}function yl(e){ks===null?ks=[e]:ks.push(e)}var yp=Vi(null),qa=null,es=null;function zs(e,t,n){ye(yp,t._currentValue),t._currentValue=n}function is(e){e._currentValue=yp.current,en(yp)}function au(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),au(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(X(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),au(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),au(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ia(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(X(387));if(r=r.memoizedProps,r!==null){var o=s.type;Gn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===yu.current){if(r=s.alternate,r===null)throw Error(X(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push($r):e=[$r])}s=s.return}return e!==null&&xp(t,e,n,i),t.flags|=262144,e!==null}function Cu(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){qa=e,es=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return Xy(qa,e)}function Vc(e,t){return qa===null&&Pa(e),Xy(e,t)}function Xy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},es===null){if(e===null)throw Error(X(308));es=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else es=es.next=t;return n}var WT=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qT=ke.unstable_scheduleCallback,YT=ke.unstable_NormalPriority,ze={$$typeof:Oi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Em(){return{controller:new WT,data:new Map,refCount:0}}function Pl(e){e.refCount--,e.refCount===0&&qT(YT,function(){e.controller.abort()})}function V_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var $o=null;function ZT(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var sl=null,Sp=0,Ba=0,Pr=null;function KT(e,t){if(sl===null){var n=sl=[];Sp=0,Ba=$m(),Pr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sp++,t.then(G_,G_),t}function G_(){if(--Sp===0&&($o=null,sl!==null)){Pr!==null&&(Pr.status="fulfilled");var e=sl;sl=null,Ba=0,Pr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function JT(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var k_=Rt.S;Rt.S=function(e,t){if(lS=zn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&KT(e,t),$o!==null)for(var n=Jr;n!==null;)V_(n,$o),n=n.next;if(n=e.types,n!==null){for(var i=Jr;i!==null;)V_(i,n),i=i.next;if(Ba!==0){i=$o,i===null&&(i=$o=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}k_!==null&&k_(e,t)};var Da=Vi(null);function Am(){var e=Da.current;return e!==null?e:fe.pooledCache}function ru(e,t){t===null?ye(Da,Da.current):ye(Da,t.pool)}function Wy(){var e=Am();return e===null?null:{parent:ze._currentValue,pool:e}}var so=Error(X(460)),wm=Error(X(474)),nh=Error(X(542)),Ru={then:function(){}};function X_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function qy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,q_(e),e===void 0&&!("reason"in t)?Error(X(600)):e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=fe,e!==null&&100<e.shellSuspendCounter)throw Error(X(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,q_(e),e}throw Ua=t,so}}function Ea(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ua=n,so):n}}var Ua=null;function W_(){if(Ua===null)throw Error(X(459));var e=Ua;return Ua=null,e}function q_(e){if(e===so||e===nh)throw Error(X(483))}var Br=null,xl=0;function Gc(e){var t=xl;return xl+=1,Br===null&&(Br=[]),qy(Br,e,t)}function Ns(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function kc(e,t){throw t.$$typeof===N1?Error(X(525)):(e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yy(e){function t(h,_){if(e){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!e)return null;for(;_!==null;)t(h,_),_=_.sibling;return null}function i(h){for(var _=new Map;h!==null;)h.key===null?_.set(h.index,h):_.set(h.key,h),h=h.sibling;return _}function s(h,_){return h=ns(h,_),h.index=0,h.sibling=null,h}function a(h,_,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=134217730,_)):(h.flags|=1048576,_)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,_,v,y){return _===null||_.tag!==6?(_=Od(v,h.mode,y),_.return=h,_):(_=s(_,v),_.return=h,_)}function l(h,_,v,y){var A=v.type;return A===Mr?(h=f(h,_,v.props.children,y,v.key),Ns(h,v),h):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ls&&Ea(A)===_.type)?(_=s(_,v.props),Ns(_,v),_.return=h,_):(_=su(v.type,v.key,v.props,null,h.mode,y),Ns(_,v),_.return=h,_)}function c(h,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Id(v,h.mode,y),_.return=h,_):(_=s(_,v.children||[]),_.return=h,_)}function f(h,_,v,y,A){return _===null||_.tag!==7?(_=Na(v,h.mode,y,A),_.return=h,_):(_=s(_,v),_.return=h,_)}function d(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=Od(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Lc:return v=su(_.type,_.key,_.props,null,h.mode,v),Ns(v,_),v.return=h,v;case Jo:return _=Id(_,h.mode,v),_.return=h,_;case Ls:return _=Ea(_),d(h,_,v)}if(Qo(_)||Xo(_))return _=Na(_,h.mode,v,null),_.return=h,_;if(typeof _.then=="function")return d(h,Gc(_),v);if(_.$$typeof===Oi)return d(h,Vc(h,_),v);kc(h,_)}return null}function u(h,_,v,y){var A=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return A!==null?null:o(h,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lc:return v.key===A?l(h,_,v,y):null;case Jo:return v.key===A?c(h,_,v,y):null;case Ls:return v=Ea(v),u(h,_,v,y)}if(Qo(v)||Xo(v))return A!==null?null:f(h,_,v,y,null);if(typeof v.then=="function")return u(h,_,Gc(v),y);if(v.$$typeof===Oi)return u(h,_,Vc(h,v),y);kc(h,v)}return null}function p(h,_,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(v)||null,o(_,h,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lc:return h=h.get(y.key===null?v:y.key)||null,l(_,h,y,A);case Jo:return h=h.get(y.key===null?v:y.key)||null,c(_,h,y,A);case Ls:return y=Ea(y),p(h,_,v,y,A)}if(Qo(y)||Xo(y))return h=h.get(v)||null,f(_,h,y,A,null);if(typeof y.then=="function")return p(h,_,v,Gc(y),A);if(y.$$typeof===Oi)return p(h,_,v,Vc(_,y),A);kc(_,y)}return null}function g(h,_,v,y){for(var A=null,R=null,C=_,D=_=0,T=null;C!==null&&D<v.length;D++){C.index>D?(T=C,C=null):T=C.sibling;var b=u(h,C,v[D],y);if(b===null){C===null&&(C=T);break}e&&C&&b.alternate===null&&t(h,C),_=a(b,_,D),R===null?A=b:R.sibling=b,R=b,C=T}if(D===v.length)return n(h,C),Vt&&ts(h,D),A;if(C===null){for(;D<v.length;D++)C=d(h,v[D],y),C!==null&&(_=a(C,_,D),R===null?A=C:R.sibling=C,R=C);return Vt&&ts(h,D),A}for(C=i(C);D<v.length;D++)T=p(C,h,D,v[D],y),T!==null&&(e&&(b=T.alternate,b!==null&&C.delete(b.key===null?D:b.key)),_=a(T,_,D),R===null?A=T:R.sibling=T,R=T);return e&&C.forEach(function(L){return t(h,L)}),Vt&&ts(h,D),A}function x(h,_,v,y){if(v==null)throw Error(X(151));for(var A=null,R=null,C=_,D=_=0,T=null,b=v.next();C!==null&&!b.done;D++,b=v.next()){C.index>D?(T=C,C=null):T=C.sibling;var L=u(h,C,b.value,y);if(L===null){C===null&&(C=T);break}e&&C&&L.alternate===null&&t(h,C),_=a(L,_,D),R===null?A=L:R.sibling=L,R=L,C=T}if(b.done)return n(h,C),Vt&&ts(h,D),A;if(C===null){for(;!b.done;D++,b=v.next())b=d(h,b.value,y),b!==null&&(_=a(b,_,D),R===null?A=b:R.sibling=b,R=b);return Vt&&ts(h,D),A}for(C=i(C);!b.done;D++,b=v.next())b=p(C,h,D,b.value,y),b!==null&&(e&&(T=b.alternate,T!==null&&C.delete(T.key===null?D:T.key)),_=a(b,_,D),R===null?A=b:R.sibling=b,R=b);return e&&C.forEach(function(H){return t(h,H)}),Vt&&ts(h,D),A}function m(h,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Mr&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Lc:t:{for(var A=v.key;_!==null;){if(_.key===A){if(A=v.type,A===Mr){if(_.tag===7){n(h,_.sibling),y=s(_,v.props.children),Ns(y,v),y.return=h,h=y;break t}}else if(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ls&&Ea(A)===_.type){n(h,_.sibling),y=s(_,v.props),Ns(y,v),y.return=h,h=y;break t}n(h,_);break}else t(h,_);_=_.sibling}v.type===Mr?(y=Na(v.props.children,h.mode,y,v.key),Ns(y,v),y.return=h,h=y):(y=su(v.type,v.key,v.props,null,h.mode,y),Ns(y,v),y.return=h,h=y)}return r(h);case Jo:t:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),y=s(_,v.children||[]),y.return=h,h=y;break t}else{n(h,_);break}else t(h,_);_=_.sibling}y=Id(v,h.mode,y),y.return=h,h=y}return r(h);case Ls:return v=Ea(v),m(h,_,v,y)}if(Qo(v))return g(h,_,v,y);if(Xo(v)){if(A=Xo(v),typeof A!="function")throw Error(X(150));return v=A.call(v),x(h,_,v,y)}if(typeof v.then=="function")return m(h,_,Gc(v),y);if(v.$$typeof===Oi)return m(h,_,Vc(h,v),y);kc(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),y=s(_,v),y.return=h,h=y):(n(h,_),y=Od(v,h.mode,y),y.return=h,h=y),r(h)):n(h,_)}return function(h,_,v,y){try{xl=0;var A=m(h,_,v,y);return Br=null,A}catch(C){if(C===so||C===nh)throw C;var R=An(29,C,null,h.mode);return R.lanes=y,R.return=h,R}}}var za=Yy(!0),Zy=Yy(!1),Os=!1;function Cm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ws(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(te&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Eu(e),Fy(e,null,n),t}return th(e,i,t,n),Eu(e)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hy(e,n)}}function Bd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bp=!1;function rl(){if(bp){var e=Pr;if(e!==null)throw e}}function ol(e,t,n,i){bp=!1;var s=e.updateQueue;Os=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Yt&u)===u:(i&u)===u){u!==0&&u===Ba&&(bp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,x=o;u=t;var m=n;switch(x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(m,d,u);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,u=typeof g=="function"?g.call(m,d,u):g,u==null)break t;d=de({},d,u);break t;case 2:Os=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),na|=r,e.lanes=r,e.memoizedState=d}}function Ky(e,t){if(typeof e!="function")throw Error(X(191,e));e.call(t)}function Jy(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ky(n[e],t)}var ta=Vi(null),Nu=Vi(0);function Y_(e,t){e=cs,ye(Nu,e),ye(ta,t),cs=e|t.baseLanes}function Tp(){ye(Nu,cs),ye(ta,ta.current)}function Rm(){cs=Nu.current,en(ta),en(Nu)}var an=Vi(null),un=null;function qs(e){var t=e.alternate;ye(nn,nn.current&1),ye(an,e),un===null&&(t===null||ta.current!==null||t.memoizedState!==null)&&(un=e)}function Ep(e){ye(nn,nn.current),ye(an,e),un===null&&(un=e)}function Qy(e){e.tag===22?(ye(nn,nn.current),ye(an,e),un===null&&(un=e)):Ys()}function Ys(){ye(nn,nn.current),ye(an,an.current)}function In(e){en(an),un===e&&(un=null),en(nn)}var nn=Vi(0);function Sl(e,t){ye(an,an.current),ye(nn,t)}function Nm(e){en(nn),en(an),un===e&&(un=null)}function Du(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||am(n)||ig(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=0,Pt=null,ue=null,Be=null,Uu=!1,zr=!1,Fa=!1,Lu=0,Ml=0,Fr=null,QT=0;function Le(){throw Error(X(321))}function Dm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Um(e,t,n,i,s,a){return rs=a,Pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?Cx:Rx,Fa=!1,a=n(i,s),Fa=!1,zr&&(a=$y(t,n,i,s)),jy(e),a}function jy(e){Rt.H=Ou;var t=ue!==null&&ue.next!==null;if(rs=0,Be=ue=Pt=null,Uu=!1,Ml=0,Fr=null,t)throw Error(X(300));e===null||Fe||(e=e.dependencies,e!==null&&Cu(e)&&(Fe=!0))}function $y(e,t,n,i){Pt=e;var s=0;do{if(zr&&(Fr=null),Ml=0,zr=!1,25<=s)throw Error(X(301));if(s+=1,Be=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Rt.H=aE,a=t(n,i)}while(zr);return a}function jT(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?Bl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(Pt.flags|=1024),t}function Lm(){var e=Lu!==0;return Lu=0,e}function Om(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Im(e){if(Uu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uu=!1}rs=0,Be=ue=Pt=null,zr=!1,Ml=Lu=0,Fr=null}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Pt.memoizedState=Be=e:Be=Be.next=e,Be}function Pe(){if(ue===null){var e=Pt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Be===null?Pt.memoizedState:Be.next;if(t!==null)Be=t,ue=e;else{if(e===null)throw Pt.alternate===null?Error(X(467)):Error(X(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Be===null?Pt.memoizedState=Be=e:Be=Be.next=e}return Be}function ih(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var t=Ml;return Ml+=1,Fr===null&&(Fr=[]),e=qy(Fr,e,t),t=Pt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?Cx:Rx),e}function sh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===L1)return;if(e.$$typeof===Oi)return tn(e)}throw Error(X(438,String(e)))}function Pm(e){var t=null,n=Pt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Pt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ih(),Pt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=U1;return t.index++,n}function os(e,t){return typeof t=="function"?t(e):t}function ou(e){var t=Pe();return Bm(t,ue,e)}function Bm(e,t,n){var i=e.queue;if(i===null)throw Error(X(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Yt&d)===d:(rs&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ba&&(f=!0);else if((rs&u)===u){c=c.next,u===Ba&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Pt.lanes|=u,na|=u;d=c.action,Fa&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Pt.lanes|=d,na|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Gn(a,e.memoizedState)&&(Fe=!0,f&&(n=Pr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function zd(e){var t=Pe(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Gn(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function tx(e,t,n){var i=Pt,s=Pe(),a=Vt;if(a){if(n===void 0)throw Error(X(407));n=n()}else n=t();var r=!Gn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,Fe=!0),s=s.queue,zm(ix.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Be!==null&&(Be.memoizedState.tag&1)!==0,qr(e?9:8,{destroy:void 0},nx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,fe===null)throw Error(X(349));a||(rs&127)!==0||ex(i,t,n)}return n}function ex(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pt.updateQueue,t===null?(t=ih(),Pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nx(e,t,n,i){t.value=n,t.getSnapshot=i,sx(t)&&ax(e)}function ix(e,t,n){return n(function(){sx(t)&&ax(e)})}function sx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function ax(e){var t=Wa(e,2);t!==null&&wn(t,e,2)}function Ap(e){var t=yn();if(typeof e=="function"){var n=e;if(e=n(),Fa){Ps(!0);try{n()}finally{Ps(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function rx(e,t,n,i){return e.baseState=n,Bm(e,ue,typeof i=="function"?i:os)}function $T(e,t,n,i,s){if(rh(e))throw Error(X(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Rt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,ox(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ox(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Rt.T,r={};r.types=a!==null?a.types:null,Rt.T=r;try{var o=n(s,i),l=Rt.S;l!==null&&l(r,o),Z_(e,t,o)}catch(c){wp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Rt.T=a}}else try{a=n(s,i),Z_(e,t,a)}catch(c){wp(e,t,c)}}function Z_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){K_(e,t,i)},function(i){return wp(e,t,i)}):K_(e,t,n)}function K_(e,t,n){t.status="fulfilled",t.value=n,lx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ox(e,n)))}function wp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,lx(t),t=t.next;while(t!==i)}e.action=null}function lx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function cx(e,t){return t}function J_(e,t){if(Vt){var n=fe.formState;if(n!==null){t:{var i=Pt;if(Vt){if(ve){e:{for(var s=ve,a=ai;s.nodeType!==8;){if(!a){s=null;break e}if(s=ri(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ve=ri(s.nextSibling),i=s.data==="F!";break t}}$s(i)}i=!1}i&&(t=n[0])}}return n=yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cx,lastRenderedState:t},n.queue=i,n=Ex.bind(null,Pt,i),i.dispatch=n,i=Ap(!1),a=Gm.bind(null,Pt,!1,i.queue),i=yn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=$T.bind(null,Pt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Q_(e){var t=Pe();return ux(t,ue,e)}function ux(e,t,n){if(t=Bm(e,t,cx)[0],e=ou(os)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Bl(t)}catch(r){throw r===so?nh:r}else i=t;t=Pe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Pt.flags|=2048,qr(9,{destroy:void 0},tE.bind(null,s,n),null)),[i,a,e]}function tE(e,t){e.action=t}function j_(e){var t=Pe(),n=ue;if(n!==null)return ux(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function qr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Pt.updateQueue,t===null&&(t=ih(),Pt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function hx(){return Pe().memoizedState}function lu(e,t,n,i){var s=yn();Pt.flags|=e,s.memoizedState=qr(1|t,{destroy:void 0},n,i===void 0?null:i)}function ah(e,t,n,i){var s=Pe();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&Dm(i,ue.memoizedState.deps)?s.memoizedState=qr(t,a,n,i):(Pt.flags|=e,s.memoizedState=qr(1|t,a,n,i))}function $_(e,t){lu(8390656,8,e,t)}function zm(e,t){ah(2048,8,e,t)}function eE(e){Pt.flags|=4;var t=Pt.updateQueue;if(t===null)t=ih(),Pt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function fx(e){var t=Pe().memoizedState;return eE({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(X(440));return t.impl.apply(void 0,arguments)}}function dx(e,t){return ah(4,2,e,t)}function px(e,t){return ah(4,4,e,t)}function mx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gx(e,t,n){n=n!=null?n.concat([e]):null,ah(4,4,mx.bind(null,t,e),n)}function Fm(){}function _x(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Dm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function vx(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Dm(t,i[1]))return i[0];if(i=e(),Fa){Ps(!0);try{e()}finally{Ps(!1)}}return n.memoizedState=[i,t],i}function Hm(e,t,n){return n===void 0||(rs&1073741824)!==0&&(Yt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=uS(),Pt.lanes|=e,na|=e,n)}function yx(e,t,n,i){return Gn(n,t)?n:ta.current!==null?(e=Hm(e,n,i),Gn(e,t)||(Fe=!0),e):(rs&106)===0||(rs&1073741824)!==0&&(Yt&261930)===0?(Fe=!0,e.memoizedState=n):(e=uS(),Pt.lanes|=e,na|=e,t)}function xx(e,t,n,i,s){var a=ee.p;ee.p=a!==0&&8>a?a:8;var r=Rt.T,o={};o.types=r!==null?r.types:null,Rt.T=o,Gm(e,!1,t,n);try{var l=s(),c=Rt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=JT(l,i);ll(e,t,f,Vn(e))}else ll(e,t,i,Vn(e))}catch(d){ll(e,t,{then:function(){},status:"rejected",reason:d},Vn())}finally{ee.p=a,r!==null&&o.types!==null&&(r.types=o.types),Rt.T=r}}function nE(){}function Cp(e,t,n,i){if(e.tag!==5)throw Error(X(476));var s=Sx(e).queue;xx(e,s,t,Ra,n===null?nE:function(){return Mx(e),n(i)})}function Sx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ra,baseState:Ra,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:Ra},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Mx(e){var t=Sx(e);t.next===null&&(t=e.alternate.memoizedState),ll(e,t.next.queue,{},Vn())}function Vm(){return tn($r)}function bx(){return Pe().memoizedState}function Tx(){return Pe().memoizedState}function iE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=Xs(n);var i=Ws(t,e,n);i!==null&&(wn(i,t,n),al(i,t,n)),t={cache:Em()},e.payload=t;return}t=t.return}}function sE(e,t,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rh(e)?Ax(t,n):(n=Mm(e,t,n,i),n!==null&&(wn(n,e,i),wx(n,t,i)))}function Ex(e,t,n){var i=Vn();ll(e,t,n,i)}function ll(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rh(e))Ax(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Gn(o,r))return th(e,t,s,0),fe===null&&$u(),!1}catch{}if(n=Mm(e,t,s,i),n!==null)return wn(n,e,i),wx(n,t,i),!0}return!1}function Gm(e,t,n,i){if(i={lane:2,revertLane:$m(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},rh(e)){if(t)throw Error(X(479))}else t=Mm(e,n,i,2),t!==null&&wn(t,e,2)}function rh(e){var t=e.alternate;return e===Pt||t!==null&&t===Pt}function Ax(e,t){zr=Uu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hy(e,n)}}var Ou={readContext:tn,use:sh,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le,useEffectEvent:Le},Cx={readContext:tn,use:sh,useCallback:function(e,t){return yn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:$_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,lu(4194308,4,mx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lu(4194308,4,e,t)},useInsertionEffect:function(e,t){lu(4,2,e,t)},useMemo:function(e,t){var n=yn();t=t===void 0?null:t;var i=e();if(Fa){Ps(!0);try{e()}finally{Ps(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yn();if(n!==void 0){var s=n(t);if(Fa){Ps(!0);try{n(t)}finally{Ps(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=sE.bind(null,Pt,e),[i.memoizedState,e]},useRef:function(e){var t=yn();return e={current:e},t.memoizedState=e},useState:function(e){e=Ap(e);var t=e.queue,n=Ex.bind(null,Pt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fm,useDeferredValue:function(e,t){var n=yn();return Hm(n,e,t)},useTransition:function(){var e=Ap(!1);return e=xx.bind(null,Pt,e.queue,!0,!1),yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Pt,s=yn();if(Vt){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),fe===null)throw Error(X(349));(Yt&127)!==0||ex(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,$_(ix.bind(null,i,a,e),[e]),i.flags|=2048,qr(9,{destroy:void 0},nx.bind(null,i,a,n,t),null),n},useId:function(){var e=yn(),t=fe.identifierPrefix;if(Vt){var n=Bi,i=Pi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Lu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=QT++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vm,useFormState:J_,useActionState:J_,useOptimistic:function(e){var t=yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gm.bind(null,Pt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Pm,useCacheRefresh:function(){return yn().memoizedState=iE.bind(null,Pt)},useEffectEvent:function(e){var t=yn(),n={impl:e};return t.memoizedState=n,function(){if((te&2)!==0)throw Error(X(440));return n.impl.apply(void 0,arguments)}}},Rx={readContext:tn,use:sh,useCallback:_x,useContext:tn,useEffect:zm,useImperativeHandle:gx,useInsertionEffect:dx,useLayoutEffect:px,useMemo:vx,useReducer:ou,useRef:hx,useState:function(){return ou(os)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Pe();return yx(n,ue.memoizedState,e,t)},useTransition:function(){var e=ou(os)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:tx,useId:bx,useHostTransitionStatus:Vm,useFormState:Q_,useActionState:Q_,useOptimistic:function(e,t){var n=Pe();return rx(n,ue,e,t)},useMemoCache:Pm,useCacheRefresh:Tx,useEffectEvent:fx},aE={readContext:tn,use:sh,useCallback:_x,useContext:tn,useEffect:zm,useImperativeHandle:gx,useInsertionEffect:dx,useLayoutEffect:px,useMemo:vx,useReducer:zd,useRef:hx,useState:function(){return zd(os)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Pe();return ue===null?Hm(n,e,t):yx(n,ue.memoizedState,e,t)},useTransition:function(){var e=zd(os)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:tx,useId:bx,useHostTransitionStatus:Vm,useFormState:j_,useActionState:j_,useOptimistic:function(e,t){var n=Pe();return ue!==null?rx(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Pm,useCacheRefresh:Tx,useEffectEvent:fx};function Fd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Xs(i);s.payload=t,n!=null&&(s.callback=n),t=Ws(e,s,i),t!==null&&(wn(t,e,i),al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Xs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ws(e,s,i),t!==null&&(wn(t,e,i),al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),i=Xs(n);i.tag=2,t!=null&&(i.callback=t),t=Ws(e,i,n),t!==null&&(wn(t,e,n),al(t,e,n))}};function tv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!_l(n,i)||!_l(s,a):!0}function ev(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Rp.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=de({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Nx(e){Tu(e)}function Dx(e){console.error(e)}function Ux(e){Tu(e)}function Iu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function nv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Np(e,t,n){return n=Xs(n),n.tag=3,n.payload={element:null},n.callback=function(){Iu(e,t)},n}function Lx(e){return e=Xs(e),e.tag=3,e}function Ox(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){nv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){nv(t,n,i),typeof s!="function"&&(Zs===null?Zs=new Set([this]):Zs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function rE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ia(t,n,s,!0),n=an.current,n!==null){switch(n.tag){case 31:case 13:case 19:return un===null?ku():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Ru?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qd(e,i,s)),!1;case 22:return n.flags|=65536,i===Ru?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qd(e,i,s)),!1}throw Error(X(435,n.tag))}return qd(e,i,s),ku(),!1}if(Vt)return t=an.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==vp&&(e=Error(X(422),{cause:i}),yl(si(e,n)))):(i!==vp&&(t=Error(X(423),{cause:i}),yl(si(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=si(i,n),s=Np(e.stateNode,i,s),Bd(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(X(520),{cause:i});if(a=si(a,n),fl===null?fl=[a]:fl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=si(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Np(n.stateNode,i,e),Bd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Zs===null||!Zs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Lx(s),Ox(s,e,n,i),Bd(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var km=Error(X(461)),Fe=!1;function Ve(e,t,n,i){t.child=e===null?Zy(t,null,n,i):za(t,e.child,n,i)}function iv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Pa(t),i=Um(e,t,n,r,a,s),o=Lm(),e!==null&&!Fe?(Om(e,t,s),ls(e,t,s)):(Vt&&o&&eh(t),t.flags|=1,Ve(e,t,i,s),t.child)}function sv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!bm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ix(e,t,a,i,s)):(e=su(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Wm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(r,i)&&e.ref===t.ref)return ls(e,t,s)}return t.flags|=1,e=ns(a,i),e.ref=t.ref,e.return=t,t.child=e}function Ix(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(_l(a,i)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=i=a,Wm(e,s))(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,ls(e,t,s)}return Dp(e,t,n,i,s)}function Px(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return av(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ru(t,a!==null?a.cachePool:null),a!==null?Y_(t,a):Tp(),Qy(t);else return i=t.lanes=536870912,av(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ru(t,a.cachePool),Y_(t,a),Ys(),t.memoizedState=null):(e!==null&&ru(t,null),Tp(),Ys());return Ve(e,t,s,n),t.child}function cl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function av(e,t,n,i,s){var a=Am();return a=a===null?null:{parent:ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ru(t,null),Tp(),Qy(t),e!==null&&Ia(e,t,i,!0),t.childLanes=s,null}function cu(e,t){return t=oh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rv(e,t,n){return za(t,e.child,null,n),e=cu(t,t.pendingProps),e.flags|=2,In(t),t.memoizedState=null,e}function oE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Vt){if(i.mode==="hidden")return e=cu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},cl(null,e);if(Ep(t),(e=ve)?(e=PS(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:js!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=Vy(e),n.return=t,t.child=n,Je=t,ve=null)):e=null,e===null)throw $s(t);return t.lanes=536870912,null}return cu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Ep(t),s)if(t.flags&256)t.flags&=-257,t=rv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(X(558));else if(Fe||Ia(e,t,n,!1),s=(n&e.childLanes)!==0,Fe||s){if(ta.current===null){if(i=fe,i!==null&&(r=fy(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Wa(e,r),wn(i,e,r),km;ku()}t=rv(e,t,n)}else e=a.treeContext,ve=ri(r.nextSibling),Je=t,Vt=!0,ks=null,ai=!1,e!==null&&ky(t,e),t=cu(t,i),t.flags|=134221824;return t}return e=ns(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(X(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dp(e,t,n,i,s){return Pa(t),n=Um(e,t,n,i,void 0,s),i=Lm(),e!==null&&!Fe?(Om(e,t,s),ls(e,t,s)):(Vt&&i&&eh(t),t.flags|=1,Ve(e,t,n,s),t.child)}function ov(e,t,n,i,s,a){return Pa(t),t.updateQueue=null,n=$y(t,i,n,s),jy(e),i=Lm(),e!==null&&!Fe?(Om(e,t,a),ls(e,t,a)):(Vt&&i&&eh(t),t.flags|=1,Ve(e,t,n,a),t.child)}function lv(e,t,n,i,s){if(Pa(t),t.stateNode===null){var a=Rr,r=n.contextType;typeof r=="object"&&r!==null&&(a=tn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Cm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?tn(r):Rr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Fd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Rp.enqueueReplaceState(a,a.state,null),ol(t,i,a,s),rl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ha(n,o);a.props=l;var c=a.context,f=n.contextType;r=Rr,typeof f=="object"&&f!==null&&(r=tn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ev(t,a,i,r),Os=!1;var u=t.memoizedState;a.state=u,ol(t,i,a,s),rl(),c=t.memoizedState,o||u!==c||Os?(typeof d=="function"&&(Fd(t,n,d,i),c=t.memoizedState),(l=Os||tv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Mp(e,t),r=t.memoizedProps,f=Ha(n,r),a.props=f,d=t.pendingProps,u=a.context,c=n.contextType,l=Rr,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||u!==l)&&ev(t,a,i,l),Os=!1,u=t.memoizedState,a.state=u,ol(t,i,a,s),rl();var p=t.memoizedState;r!==d||u!==p||Os||e!==null&&e.dependencies!==null&&Cu(e.dependencies)?(typeof o=="function"&&(Fd(t,n,o,i),p=t.memoizedState),(f=Os||tv(t,n,f,i,u,p,l)||e!==null&&e.dependencies!==null&&Cu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,vr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=za(t,e.child,null,s),t.child=za(t,null,n,s)):Ve(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ls(e,t,s),e}function cv(e,t,n,i){return Oa(),t.flags|=256,Ve(e,t,n,i),t.child}var Up={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lp(e){return{baseLanes:e,cachePool:Wy()}}function Op(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function Bx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Vt){if(s?qs(t):Ys(),(e=ve)?(e=PS(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:js!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=Vy(e),n.return=t,t.child=n,Je=t,ve=null)):e=null,e===null)throw $s(t);return ig(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Ys(),s=t.mode,a=oh({mode:"hidden",children:a},s),i=Na(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Lp(n),i.childLanes=Op(e,r,n),t.memoizedState=Up,cl(null,i)):(qs(t),Xm(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return lE(e,t,a,r,i,l,o,n)}return s?(Ys(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=ns(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=ns(l,s):(s=Na(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,cl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Lp(n):(a=s.cachePool,a!==null?(o=ze._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Wy(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Op(e,r,n),t.memoizedState=Up,cl(e.child,i)):(qs(t),n=e.child,e=n.sibling,n=ns(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xm(e,t){return t=oh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function oh(e,t){return e=An(22,e,null,t),e.lanes=0,e}function Xc(e,t,n){return za(t,e.child,null,n),e=Xm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lE(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(qs(t),t.flags&=-257,Xc(e,t,o)):t.memoizedState!==null?(Ys(),t.child=e.child,t.flags|=128,null):(Ys(),a=s.fallback,r=t.mode,s=oh({mode:"visible",children:s.children},r),a=Na(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,za(t,e.child,null,o),s=t.child,s.memoizedState=Lp(o),s.childLanes=Op(e,i,o),t.memoizedState=Up,cl(null,s));if(qs(t),ig(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(X(419)),s.stack="",s.digest=i,yl({value:s,source:null,stack:null})),Xc(e,t,o)}if(Fe||Ia(e,t,o,!1),i=(o&e.childLanes)!==0,Fe||i){if(ta.current!==null)return Xc(e,t,o);if(i=fe,i!==null&&(s=fy(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Wa(e,s),wn(i,e,s),km;return am(a)||ku(),Xc(e,t,o)}return am(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ve=ri(a.nextSibling),Je=t,Vt=!0,ks=null,ai=!1,e!==null&&ky(t,e),t=Xm(t,s.children),t.flags|=134221824,t)}function uv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),au(e.return,t,n)}function hv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Du(n)===null&&(t=e),e=e.sibling}return t}function Wc(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Hd(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ip(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=nn.current;if(t.flags&128)return Sl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Sl(t,r),s==="backwards"&&e!==null?(Hd(e),Ve(e,t,i,n),Hd(e)):Ve(e,t,i,n),i=Vt?vl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uv(e,n,t);else if(e.tag===19)uv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=hv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Hd(t)),Wc(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Du(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Wc(t,!0,n,null,a,i);break;case"together":Wc(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=hv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Wc(t,!1,s,n,a,i)}return t.child}function fv(e,t,n){var i=t.pendingProps;return zs(t,t.type,i.value),Ve(e,t,i.children,n),t.child}function ls(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),na|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=ns(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ns(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cu(e)))}function cE(e,t,n){switch(t.tag){case 3:xu(t,t.stateNode.containerInfo),zs(t,ze,e.memoizedState.cache),Oa();break;case 27:case 5:lp(t);break;case 4:xu(t,t.stateNode.containerInfo);break;case 10:zs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ep(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return qs(t),t.flags|=128,null;i=Ia(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Bx(e,t,n):(qs(t),e=ls(e,t,n),e!==null?e.sibling:null)}qs(t);break;case 19:if(t.flags&128)return Ip(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ia(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Ip(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Sl(t,nn.current),i)break;return null;case 22:return t.lanes=0,Px(e,t,n,t.pendingProps);case 24:zs(t,ze,e.memoizedState.cache)}return ls(e,t,n)}function zx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Fe=!0;else{if(!Wm(e,n)&&(t.flags&128)===0)return Fe=!1,cE(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,Vt&&(t.flags&1048576)!==0&&Gy(t,vl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ea(t.elementType),t.type=e,typeof e=="function")bm(e)?(i=Ha(e,i),t.tag=1,t=lv(null,t,e,i,n)):(t.tag=0,t=Dp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===um){t.tag=11,t=iv(null,t,e,i,n);break t}else if(s===hm){t.tag=14,t=sv(null,t,e,i,n);break t}else if(s===Oi){t.tag=10,t.type=e,t=fv(null,t,n);break t}}throw t=rp(e)||e,Error(X(306,t,""))}}return t;case 0:return Dp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ha(i,t.pendingProps),lv(e,t,i,s,n);case 3:t:{if(xu(t,t.stateNode.containerInfo),e===null)throw Error(X(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Mp(e,t),ol(t,i,null,n);var r=t.memoizedState;if(i=r.cache,zs(t,ze,i),i!==a.cache&&xp(t,[ze],n,!0),rl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=cv(e,t,i,n);break t}else if(i!==s){s=si(Error(X(424)),t),yl(s),t=cv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ve=ri(e.firstChild),Je=t,Vt=!0,ks=null,ai=!0,n=Zy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(Oa(),i===s){t=ls(e,t,n);break t}Ve(e,t,i,n)}t=t.child}return t;case 26:return vr(e,t),e===null?(n=Fv(t.type,null,t.pendingProps,null))?t.memoizedState=n:Vt||(t.stateNode=wS(t.type,t.pendingProps,Gs.current,t)):t.memoizedState=Fv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lp(t),e===null&&Vt&&(i=t.stateNode=BS(t.type,t.pendingProps,Gs.current),Je=t,ai=!0,s=ve,sa(t.type)?(rm=s,ve=ri(i.firstChild)):ve=s),Ve(e,t,t.pendingProps.children,n),vr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Vt&&((s=i=ve)&&(i=eA(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,Je=t,ve=ri(i.firstChild),ai=!1,s=!0):s=!1),s||$s(t)),lp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,nm(s,a)?i=null:r!==null&&nm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Um(e,t,jT,null,null,n),$r._currentValue=s),vr(e,t),Ve(e,t,i,n),t.child;case 6:return e===null&&Vt&&((e=n=ve)&&(n=nA(n,t.pendingProps,ai),n!==null?(t.stateNode=n,Je=t,ve=null,e=!0):e=!1),e||$s(t)),null;case 13:return Bx(e,t,n);case 4:return xu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=za(t,null,i,n):Ve(e,t,i,n),t.child;case 11:return iv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,vr(e,t),Ve(e,t,i,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return fv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Pa(t),s=tn(s),i=i(s),t.flags|=1,Ve(e,t,i,n),t.child;case 14:return sv(e,t,t.type,t.pendingProps,n);case 15:return Ix(e,t,t.type,t.pendingProps,n);case 19:return Ip(e,t,n);case 31:return oE(e,t,n);case 22:return Px(e,t,n,t.pendingProps);case 24:return Pa(t),i=tn(ze),e===null?(s=Am(),s===null&&(s=fe,a=Em(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Cm(t),zs(t,ze,s)):((e.lanes&n)!==0&&(Mp(e,t),ol(t,null,null,n),rl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),zs(t,ze,i)):(i=a.cache,zs(t,ze,i),i!==s.cache&&xp(t,[ze],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Vt&&eh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:vr(e,t),Ve(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(X(156,t.tag))}function $i(e){e.flags|=4}function Vd(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Gv(t,i):Gv(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(dS())e.flags|=8192;else throw Ua=Ru,wm}else e.flags&=-16777217}function dv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!VS(t))if(dS())e.flags|=8192;else throw Ua=Ru,wm}function qc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cy():536870912,e.lanes|=t,Yr|=t)}function qo(e,t){if(!Vt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function uE(e,t,n){var i=t.pendingProps;switch(Tm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),is(ze),kr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gr(t)?$i(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pd())),_e(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?($i(t),a!==null?(_e(t),dv(t,a)):(_e(t),Vd(t,s,null,i,n))):a?a!==e.memoizedState?($i(t),_e(t),dv(t,a)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&$i(t),_e(t),Vd(t,s,e,i,n)),null;case 27:if(Su(t),n=Gs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(X(166));return _e(t),t.subtreeFlags&=-33554433,null}e=zi.current,gr(t)?H_(t,e):(e=BS(s,i,n),t.stateNode=e,$i(t))}return _e(t),t.subtreeFlags&=-33554433,null;case 5:if(Su(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error(X(166));return _e(t),t.subtreeFlags&=-33554433,null}if(a=zi.current,gr(t))H_(t,a);else{var r=El(Gs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[$e]=t,a[Rn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(sn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&$i(t)}}return _e(t),t.subtreeFlags&=-33554433,Vd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(X(166));if(e=Gs.current,gr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Je,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ES(e.nodeValue,n)),e||$s(t,!0)}else e=El(e).createTextNode(i),e[$e]=t,t.stateNode=e}return _e(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=gr(t),n!==null){if(e===null){if(!i)throw Error(X(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(557));e[$e]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else n=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(In(t),t):(In(t),null);if((t.flags&128)!==0)throw Error(X(558))}return _e(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=gr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(X(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(X(317));s[$e]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),s=!1}else s=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(In(t),t):(In(t),null)}return In(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),qc(t,t.updateQueue),_e(t),null);case 4:return kr(),e===null&&tg(t.stateNode.containerInfo),t.flags|=67108864,_e(t),null;case 10:return is(t.type),_e(t),null;case 19:if(Nm(t),i=t.memoizedState,i===null)return _e(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)qo(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Du(e),a!==null){for(t.flags|=128,qo(i,!1),e=a.updateQueue,t.updateQueue=e,qc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hy(n,e),n=n.sibling;return Sl(t,nn.current&1|2),Vt&&ts(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&zn()>Vu&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304)}else{if(!s)if(e=Du(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,qc(t,e),qo(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Vt)return _e(t),null}else 2*zn()-i.renderingStartTime>Vu&&n!==536870912&&(t.flags|=128,s=!0,qo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=zn(),e.sibling=null,a=nn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Vt?Sl(t,a):(n=a,ye(an,t),ye(nn,n),un===null&&(un=t)),Vt&&ts(t,i.treeForkCount),e}return _e(t),null;case 22:case 23:return In(t),Rm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),n=t.updateQueue,n!==null&&qc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(Da),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),is(ze),_e(t),null;case 25:return null;case 30:return t.flags|=33554432,_e(t),null}throw Error(X(156,t.tag))}function hE(e,t){switch(Tm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return is(ze),kr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Su(t),null;case 31:if(t.memoizedState!==null){if(In(t),t.alternate===null)throw Error(X(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(In(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Nm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return kr(),null;case 10:return is(t.type),null;case 22:case 23:return In(t),Rm(),e!==null&&en(Da),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return is(ze),null;case 25:return null;default:return null}}function Fx(e,t){switch(Tm(t),t.tag){case 3:is(ze),kr();break;case 26:case 27:case 5:Su(t);break;case 4:kr();break;case 31:t.memoizedState!==null&&In(t);break;case 13:In(t);break;case 19:Nm(t);break;case 10:is(t.type);break;case 22:case 23:In(t),Rm(),e!==null&&en(Da);break;case 24:is(ze)}}function zl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function ea(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){oe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){oe(t,t.return,f)}}function Hx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Jy(t,n)}catch(i){oe(e,e.return,i)}}}function Vx(e,t,n){n.props=Ha(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function Ui(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=as(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=DS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new kn(e);Cn(e.child,!1,$E,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){oe(e,t,o)}}function je(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function Pu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)IS(e.stateNode,t[n])}function pv(e){for(var t=e.return;t!==null&&(Ym(t)&&IS(e.stateNode,t.stateNode),!qm(t));)t=t.return}function ul(e){for(var t=e.return;t!==null&&(Ym(t)&&tA(e.stateNode,t.stateNode),!qm(t));)t=t.return}function qm(e){return e.tag===5||e.tag===3||e.tag===27}function Ym(e){return e&&e.tag===7&&e.stateNode!==null}function Pp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function Gd(e,t,n){try{var i=e.stateNode;IE(i,e.type,n,t),i[Rn]=t}catch(s){oe(e,e.return,s)}}function Gx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function kd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Gx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii)),Pu(e,i),$t=!0;else if(s!==4&&(s===27&&(Pu(e,i),i=null,sa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Bp(e,t,n,i),e=e.sibling;e!==null;)Bp(e,t,n,i),e=e.sibling}function Bu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Pu(e,i),$t=!0;else if(s!==4&&(s===27&&(Pu(e,i),i=null,sa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Bu(e,t,n,i),e=e.sibling;e!==null;)Bu(e,t,n,i),e=e.sibling}function kx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);sn(t,i,n),t[$e]=e,t[Rn]=n}catch(a){oe(e,e.return,a)}}var zu=!1,Pn=null;function mv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zu=!0)}var Li=null;function gv(){var e=Li;return Li=null,e}var En=0;function ao(e,t,n,i,s){return En=0,Xx(e.child,t,n,i,s)}function Xx(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=im(r);i.push(o),o.view&&(a=!0)}else a||im(r).view&&(a=!0);zu=!0,CS(r,En===0?t:t+"_"+En,n),En++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||Xx(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function Hi(e,t){for(;e!==null;)e.tag===5?RS(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Hi(e.child,t)),e=e.sibling}function uu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(uu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(X(544));var n=t.name;t=hs(t.default,t.share),t!=="none"&&(ao(e,n,t,null,!1)||Hi(e.child,!1))}e=e.sibling}}function zp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=as(i,n),a=hs(i.default,n.paired?i.share:i.enter);a!=="none"?ao(e,s,a,null,!1)?(uu(e),n.paired||t||Zr(e,i.onEnter)):Hi(e.child,!1):uu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zp(e,t),e=e.sibling;else uu(e)}function Fp(e){if(Pn!==null&&Pn.size!==0){var t=Pn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=hs(n.default,n.share);if(a!=="none"&&(ao(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Zr(e,n.onShare)):Hi(e.child,!1)),t.delete(i),t.size===0)break}}}Fp(e)}e=e.sibling}}}function Hp(e){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode),i=Pn!==null?Pn.get(n):void 0,s=hs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(ao(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Pn.delete(n),Zr(e,t.onShare)):Zr(e,t.onExit):Hi(e.child,!1)),Pn!==null&&Fp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hp(e),e=e.sibling;else Pn!==null&&Fp(e)}function Wx(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=as(t,e.stateNode);t=hs(t.default,t.update),e.flags&=-5,t!=="none"&&ao(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Wx(e);e=e.sibling}}function Vp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Hi(e.child,!1))}Vp(e)}e=e.sibling}}function hu(e){if(e.tag===30)e.stateNode.paired=null,Hi(e.child,!1),Vp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)hu(e),e=e.sibling;else Vp(e)}function qx(e){for(e=e.child;e!==null;)e.tag===30?Hi(e.child,!1):(e.subtreeFlags&33554432)!==0&&qx(e),e=e.sibling}function Zm(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&En<a.length){var c=a[En],f=im(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var u=f.rect;d=d.y!==u.y||d.x!==u.x||d.height!==u.height||d.width!==u.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&CS(l,En===0?n:n+"_"+En,s),o&&(e.flags&4)!==0||(Li===null&&(Li=[]),Li.push(l,En===0?i:i+"_"+En,t.memoizedProps)),En++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Zm(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Yx(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=as(n,i),a=hs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(VE)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;En=0,s=Zm(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Zr(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Yx(e,t);e=e.sibling}}var Ye=!1,se=!1,Ri=!1,Xd=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Ze=null,Ni=!1,tl=!1,Fu=!1,Gp=!1;function fE(e,t,n){if(e=e.containerInfo,tm=to,e=Uy(e),xm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,u=e,p=null;e:for(;;){for(var g;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(g=u.firstChild)!==null;)p=u,u=g;for(;;){if(u===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(g=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(em={focusedElem:e,selectionRange:i},to=!1,n=(n&335544064)===n,Ze=t,t=n?9270:1024;Ze!==null;){if(e=Ze,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Hp(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&mv(e),Yc(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Hp(i),Yc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&mv(e),Yc(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Ze=i):(n&&Wx(e),Yc(n))}}Pn=null}function Yc(e){for(;Ze!==null;){var t=Ze,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=Ha(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){oe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)sm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":sm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=as(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=hs(s.default,s.update),s!=="none"&&ao(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(X(163))}if(i=t.sibling,i!==null){i.return=t.return,Ze=i;break}Ze=t.return}}function Zx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n),i&4&&zl(5,n);break;case 1:if(Di(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var s=Ha(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}i&64&&Hx(n),i&512&&Ui(n,n.return);break;case 3:if(Di(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Jy(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&i&4&&kx(n);case 26:case 5:Di(e,n),t===null&&i&4&&Pp(n),i&512&&Ui(n,n.return);break;case 12:Di(e,n);break;case 31:Di(e,n),i&4&&jx(e,n);break;case 13:Di(e,n),i&4&&$x(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=TE.bind(null,n),iA(e,n))));break;case 22:if(i=n.memoizedState!==null||Ye,!i){var a=t!==null&&t.memoizedState!==null||se;t=Ye,s=se,Ye=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),di(e,n,i)):Di(e,n),Ye=t,se=s}break;case 30:Di(e,n),i&512&&Ui(n,n.return);break;case 7:i&512&&Ui(n,n.return);default:Di(e,n)}}function kp(e,t){for(e=e.child;e!==null;)Kx(e,t),e=e.sibling}function Kx(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){oe(e,e.return,l)}Xp(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,$t=!0}catch(l){oe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Lv(o,!0):Lv(e.stateNode,!1)}catch(l){oe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&kp(e,t);break;default:kp(e,t)}}function Xp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:Kx(n,i);break t;case 22:n.memoizedState===null&&Xp(n,i);break t;default:Xp(n,i)}}e=e.sibling}}function Jx(e){var t=e.alternate;t!==null&&(e.alternate=null,Jx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ku(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,bn=!1;function fi(e,t,n){for(n=n.child;n!==null;)Qx(e,t,n),n=n.sibling}function Qx(e,t,n){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 26:se||je(n,t),fi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||je(n,t),ul(n);var i=Ae,s=bn;sa(n.type)&&(Ae=n.stateNode,bn=!1),fi(e,t,n),zS(n.stateNode,n.type,n.memoizedProps),Ae=i,bn=s;break;case 5:se||je(n,t),ul(n);case 6:if(n.tag===6&&ul(n),i=Ae,s=bn,Ae=null,fi(e,t,n),Ae=i,bn=s,Ae!==null)if(bn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode),$t=!0}catch(a){oe(n,t,a)}else try{Ae.removeChild(n.stateNode),$t=!0}catch(a){oe(n,t,a)}break;case 18:Ae!==null&&(bn?(e=Ae,Uv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),eo(e)):Uv(Ae,n.stateNode));break;case 4:i=Ae,s=bn,Ae=n.stateNode.containerInfo,bn=!0,fi(e,t,n),Ae=i,bn=s;break;case 0:case 11:case 14:case 15:ea(2,n,t),se||ea(4,n,t),fi(e,t,n);break;case 1:se||(je(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Vx(n,t,i)),fi(e,t,n);break;case 21:fi(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,fi(e,t,n),se=i;break;case 30:je(n,t),fi(e,t,n);break;case 7:se||je(n,t),fi(e,t,n);break;default:fi(e,t,n)}}function jx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(n){oe(t,t.return,n)}}}function $x(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(n){oe(t,t.return,n)}}function dE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _v),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _v),t;default:throw Error(X(435,e.tag))}}function Zc(e,t){var n=dE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=EE.bind(null,e,i);i.then(s,s)}})}function _n(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(sa(l.type)){Ae=l.stateNode,bn=!1;break t}break;case 5:Ae=l.stateNode,bn=!1;break t;case 3:case 4:Ae=l.stateNode.containerInfo,bn=!0;break t}l=l.return}if(Ae===null)throw Error(X(160));Qx(r,o,a),Ae=null,bn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tS(t,e,n),t=t.sibling}var pi=null;function tS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}_n(t,e,n),vn(e),s&4&&(ea(3,e,e.return),zl(3,e),ea(5,e,e.return));break;case 1:_n(t,e,n),vn(e),s&512&&(se||i===null||je(i,i.return)),s&64&&Ye&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=pi,_n(t,e,n),vn(e),s&512&&(se||i===null||je(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Ye)e.stateNode=wS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Ol]||i[$e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),sn(i,t,n),i[$e]=e,Ke(i),t=i;break t;case"link":if(a=Vv("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),sn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Vv("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),sn(i,t,n),s.head.appendChild(i);break;default:throw Error(X(468,t))}i[$e]=e,Ke(i),t=i}e.stateNode=t}else Ye||om(a,e.type,e.stateNode);else e.stateNode=Hv(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?Ye||om(a,e.type,e.stateNode):Hv(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gd(e,e.memoizedProps,i.memoizedProps);break;case 27:_n(t,e,n),vn(e),s&512&&(se||i===null||je(i,i.return)),i!==null&&s&4&&Gd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Ri,Ri=!1,_n(t,e,n),Ri=a,vn(e),s&512&&(se||i===null||je(i,i.return)),e.flags&32){t=e.stateNode;try{Wr(t,""),$t=!0}catch(f){oe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Gd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Xd=!0);break;case 6:if(_n(t,e,n),vn(e),s&4){if(e.stateNode===null)throw Error(X(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,$t=!0}catch(f){oe(e,e.return,f)}}break;case 3:if($t=!1,mu=null,a=pi,pi=Al(t.containerInfo),_n(t,e,n),pi=a,vn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(f){oe(e,e.return,f)}Xd&&(Xd=!1,eS(e)),$t=!1;break;case 4:s=Ri,Ri=Ye,i=b_(),a=pi,pi=Al(e.stateNode.containerInfo),_n(t,e,n),vn(e),pi=a,$t&&tl&&(Fu=!0),$t=i,Ri=s;break;case 12:_n(t,e,n),vn(e);break;case 31:_n(t,e,n),vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Zc(e,t)));break;case 13:_n(t,e,n),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(lh=zn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Zc(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Ye,l=se,c=Ri;Ye=o||a,Ri=c||a,se=l||r,_n(t,e,n),se=l,Ri=c,Ye=o,vn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Ye||se||(t=r||se,n=Ye,i=se,Ye=a||Ye,se=t,Us(e,2),Ye=n,se=i),!a&&Ri||kp(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Zc(e,n))));break;case 19:_n(t,e,n),vn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Zc(e,t)));break;case 30:s&512&&(se||i===null||je(i,i.return)),s=b_(),a=tl,r=(n&335544064)===n,o=e.memoizedProps,tl=r&&hs(o.default,o.update)!=="none",_n(t,e,n),vn(e),r&&i!==null&&$t&&(e.flags|=4),tl=a,$t=s;break;case 21:break;case 7:s&512&&(se||i===null||je(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:_n(t,e,n),vn(e)}}function vn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Gx(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Ym(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(qm(s))break;s=s.return}var r=i;if(n==null)throw Error(X(160));switch(n.tag){case 27:var o=n.stateNode,l=kd(e);Bu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Wr(c,""),n.flags&=-33);var f=kd(e);Bu(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,u=kd(e);Bp(e,u,d,r);break;default:throw Error(X(161))}}catch(p){oe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;eS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,to=!0,t.reset(),to=!1),e=e.sibling}}function _r(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)nS(t,e),t=t.sibling;else Yx(t,!1)}function nS(e,t){var n=e.alternate;if(n===null)zp(e,!1);else switch(e.tag){case 3:if(Gp=Ni=!1,gv(),_r(t,e),!Ni&&!Fu){if(e=Li,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];RS(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gp=!0}Li=null;break;case 5:_r(t,e);break;case 4:i=Ni,Ni=!1,_r(t,e),Ni&&(Fu=!0),Ni=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?zp(e,!1):_r(t,e));break;case 30:i=Ni,s=gv(),Ni=!1,_r(t,e),Ni&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=as(a,r),r=as(n.memoizedProps,r);var o=hs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,En=0,t=Zm(e,n,t,r,o,a,!0),En!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Zr(e,e.memoizedProps.onUpdate),Li=s):s!==null&&(s.push.apply(s,Li),Li=s),Ni=(e.flags&32)!==0?!0:i;break;default:_r(t,e)}}function Di(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zx(e,t.alternate,t),t=t.sibling}function Us(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ea(4,n,n.return),Us(n,i);break;case 1:je(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Vx(n,n.return,s),Us(n,i);break;case 27:(i&2)!==0&&zS(n.stateNode,n.type,n.memoizedProps);case 5:je(n,n.return),n.tag!==5&&n.tag!==27||ul(n),Us(n,i);break;case 6:ul(n);break;case 26:je(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Us(n,i);break;case 22:n.memoizedState===null&&Us(n,i);break;case 30:je(n,n.return),Us(n,i);break;case 7:je(n,n.return);default:Us(n,i)}e=e.sibling}}function di(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:di(s,a,n),zl(4,a);break;case 1:if(di(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){oe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Ky(c[s],l)}catch(f){oe(i,i.return,f)}}o&&r&64&&Hx(a),Ui(a,a.return);break;case 27:(n&2)!==0&&kx(a);case 5:a.tag!==5&&a.tag!==27||pv(a),di(s,a,n),o&&i===null&&r&4&&Pp(a),Ui(a,a.return);break;case 6:pv(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Ye||om(Al(l.ownerDocument),a.type,l),di(s,a,n),o&&i===null&&r&4&&Pp(a),Ui(a,a.return);break;case 12:di(s,a,n);break;case 31:di(s,a,n),o&&r&4&&jx(s,a);break;case 13:di(s,a,n),o&&r&4&&$x(s,a);break;case 22:a.memoizedState===null&&di(s,a,n),Ui(a,a.return);break;case 30:di(s,a,n),Ui(a,a.return);break;case 7:Ui(a,a.return);default:di(s,a,n)}t=t.sibling}}function Km(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Pl(n))}function Jm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pl(e))}function $n(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)iS(e,t,n,i),t=t.sibling;else s&&qx(t)}function iS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&hu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:$n(e,t,n,i),a&2048&&zl(9,t);break;case 1:$n(e,t,n,i);break;case 3:$n(e,t,n,i),s&&Gp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Pl(a)));break;case 12:if(a&2048){$n(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){oe(t,t.return,c)}}else $n(e,t,n,i);break;case 31:$n(e,t,n,i);break;case 13:$n(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&hu(o),r._visibility&2?$n(e,t,n,i):hl(e,t)):(s&&o!==null&&o.memoizedState!==null&&hu(t),r._visibility&2?$n(e,t,n,i):(r._visibility|=2,yr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Km(o,t);break;case 24:$n(e,t,n,i),a&2048&&Jm(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(Hi(a.child,!0),Hi(t.child,!0))),$n(e,t,n,i);break;default:$n(e,t,n,i)}}function yr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:yr(a,r,o,l,s),zl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?yr(a,r,o,l,s):hl(a,r):(f._visibility|=2,yr(a,r,o,l,s)),s&&c&2048&&Km(r.alternate,r);break;case 24:yr(a,r,o,l,s),s&&c&2048&&Jm(r.alternate,r);break;default:yr(a,r,o,l,s)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:hl(n,i),s&2048&&Km(i.alternate,i);break;case 24:hl(n,i),s&2048&&Jm(i.alternate,i);break;default:hl(n,i)}t=t.sibling}}var Aa=8192;function ba(e,t,n){if(e.subtreeFlags&Aa)for(e=e.child;e!==null;)sS(e,t,n),e=e.sibling}function sS(e,t,n){switch(e.tag){case 26:ba(e,t,n),e.flags&Aa&&(e.memoizedState!==null?_A(n,pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&kv(n,e)));break;case 5:ba(e,t,n),e.flags&Aa&&(e=e.stateNode,(t&335544128)===t&&kv(n,e));break;case 3:case 4:var i=pi;pi=Al(e.stateNode.containerInfo),ba(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Aa,Aa=16777216,ba(e,t,n),Aa=i):ba(e,t,n));break;case 30:if((e.flags&Aa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Pn===null&&(Pn=new Map),Pn.set(i,s)}ba(e,t,n);break;default:ba(e,t,n)}}function aS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,oS(i,e)}aS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rS(e),e=e.sibling}function rS(e){switch(e.tag){case 0:case 11:case 15:Yo(e),e.flags&2048&&ea(9,e,e.return);break;case 3:Yo(e);break;case 12:Yo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fu(e)):Yo(e);break;default:Yo(e)}}function fu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,oS(i,e)}aS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ea(8,t,t.return),fu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,fu(t));break;default:fu(t)}e=e.sibling}}function oS(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:ea(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else t:for(n=e;Ze!==null;){i=Ze;var s=i.sibling,a=i.return;if(Jx(i),i===n){Ze=null;break t}if(s!==null){s.return=a,Ze=s;break t}Ze=a}}}var pE={getCacheForType:function(e){var t=tn(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tn(ze).controller.signal}},mE=typeof WeakMap=="function"?WeakMap:Map,te=0,fe=null,Xt=null,Yt=0,ae=0,Ln=null,Fs=!1,ro=!1,Qm=!1,cs=0,Oe=0,na=0,La=0,Hu=0,Bn=0,Yr=0,fl=null,Tn=null,Wp=!1,lh=0,lS=0,Vu=1/0,Gu=null,Zs=null,Re=0,gi=null,Va=null,Fi=0,qp=0,Yp=null,cS=null,Hr=null,Vr=null,Gr=null,dl=0,du=null;function Vn(){return(te&2)!==0&&Yt!==0?Yt&-Yt:Rt.T!==null?$m():dy()}function uS(){if(Bn===0)if((Yt&536870912)===0||Vt){var e=Ic;Ic<<=1,(Ic&3932160)===0&&(Ic=262144),Bn=e}else Bn=536870912;return e=an.current,e!==null&&(e.flags|=32),Bn}function Zr(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=DS(as(e.memoizedProps,n))),Vr===null&&(Vr=[]),Vr.push(t.bind(null,i))}}function wn(e,t,n){(e===fe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Kr(e,0),Hs(e,Yt,Bn,!1)),Ll(e,n),((te&2)===0||e!==fe)&&(e===fe&&((te&2)===0&&(La|=n),Oe===4&&Hs(e,Yt,Bn,!1)),Gi(e))}function hS(e,t,n){if((te&6)!==0)throw Error(X(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ul(e,t),s=i?vE(e,t):Wd(e,t,!0),a=i;do{if(s===0){ro&&!i&&Hs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!gE(n)){s=Wd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=fl;var l=o.current.memoizedState.isDehydrated;if(l&&(Kr(o,r).flags|=256),r=Wd(o,r,!1),r!==2&&r!==6){if(Qm&&!l){o.errorRecoveryDisabledLanes|=a,La|=a,s=4;break t}a=Tn,Tn=s,a!==null&&(Tn===null?Tn=a:Tn.push.apply(Tn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Kr(e,0),Hs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(X(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Hs(i,t,Bn,!Fs);break t;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(X(329))}if((t&62914560)===t&&(s=lh+300-zn(),10<s)){if(Hs(i,t,Bn,!Fs),Zu(i,0,!0)!==0)break t;Fi=t,i.timeoutHandle=eg(vv.bind(null,i,n,Tn,Gu,Wp,t,Bn,La,Yr,Fs,a,"Throttled",-0,0),s);break t}vv(i,n,Tn,Gu,Wp,t,Bn,La,Yr,Fs,a,null,-0,0)}}break}while(!0);Gi(e)}function vv(e,t,n,i,s,a,r,o,l,c,f,d,u,p){e.timeoutHandle=-1;var g=t.subtreeFlags,x=(a&335544064)===a;if(d=null,(x||g&8192||(g&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Pn=null,sS(t,a,d),x&&(g=d,x=e.containerInfo,x=(x.nodeType===9?x:x.ownerDocument).__reactViewTransition,x!=null&&(g.count++,g.waitingForViewTransition=!0,g=wl.bind(g),x.finished.then(g,g))),g=(a&62914560)===a?lh-zn():(a&4194048)===a?lS-zn():0,g=vA(d,g),g!==null)){Fi=a,e.cancelPendingCommit=g(xv.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,u,p)),Hs(e,a,r,!c);return}xv(e,t,a,n,i,s,r,o,l,c,f,d)}function gE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Gn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hs(e,t,n,i){t=ly(e,t),t&=~Hu,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Hn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&uy(e,n,t)}function ch(){return(te&6)===0?(Fl(0,!1),!1):!0}function jm(){if(Xt!==null){if(ae===0)var e=Xt.return;else e=Xt,es=qa=null,Im(e),Br=null,xl=0,e=Xt;for(;e!==null;)Fx(e.alternate,e),e=e.return;Xt=null}}function Kr(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,zE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fi=0,jm(),fe=e,Xt=n=ns(e.current,null),Yt=t,ae=0,Ln=null,Fs=!1,ro=Ul(e,t),Qm=!1,Yr=Bn=Hu=La=na=Oe=0,Tn=fl=null,Wp=!1,cs=ly(e,t),$u(),n}function fS(e,t){Pt=null,Rt.H=Ou,t===so||t===nh?(t=W_(),ae=3):t===wm?(t=W_(),ae=4):ae=t===km?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ln=t,Xt===null&&(Oe=1,Iu(e,si(t,e.current)))}function dS(){var e=an.current;return e===null?!0:(Yt&4194048)===Yt?un===null:(Yt&62914560)===Yt||(Yt&536870912)!==0?e===un:!1}function pS(){var e=Rt.H;return Rt.H=Ou,e===null?Ou:e}function mS(){var e=Rt.A;return Rt.A=pE,e}function ku(){Oe=4,Fs||(Yt&4194048)!==Yt&&an.current!==null||(ro=!0),(na&134217727)===0&&(La&134217727)===0||fe===null||Hs(fe,Yt,Bn,!1)}function Wd(e,t,n){var i=te;te|=2;var s=pS(),a=mS();(fe!==e||Yt!==t)&&(Gu=null,Kr(e,t)),t=!1;var r=Oe;t:do try{if(ae!==0&&Xt!==null){var o=Xt,l=Ln;switch(ae){case 8:jm(),r=6;break t;case 3:case 2:case 9:case 6:an.current===null&&(t=!0);var c=ae;if(ae=0,Ln=null,Ur(e,o,l,c),n&&ro){r=0;break t}break;default:c=ae,ae=0,Ln=null,Ur(e,o,l,c)}}_E(),r=Oe;break}catch(f){fS(e,f)}while(!0);return t&&e.shellSuspendCounter++,es=qa=null,te=i,Rt.H=s,Rt.A=a,Xt===null&&(fe=null,Yt=0,$u()),r}function _E(){for(;Xt!==null;)gS(Xt)}function vE(e,t){var n=te;te|=2;var i=pS(),s=mS();fe!==e||Yt!==t?(Gu=null,Vu=zn()+500,Kr(e,t)):ro=Ul(e,t);t:do try{if(ae!==0&&Xt!==null){t=Xt;var a=Ln;e:switch(ae){case 1:ae=0,Ln=null,Ur(e,t,a,1);break;case 2:case 9:if(X_(a)){ae=0,Ln=null,yv(t);break}t=function(){ae!==2&&ae!==9||fe!==e||(ae=7),Gi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:X_(a)?(ae=0,Ln=null,yv(t)):(ae=0,Ln=null,Ur(e,t,a,7));break;case 5:var r=null;switch(Xt.tag){case 26:r=Xt.memoizedState;case 5:case 27:var o=Xt;if(r?VS(r):o.stateNode.complete){ae=0,Ln=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,uh(c)):Xt=null}break e}}ae=0,Ln=null,Ur(e,t,a,5);break;case 6:ae=0,Ln=null,Ur(e,t,a,6);break;case 8:jm(),Oe=6;break t;default:throw Error(X(462))}}yE();break}catch(f){fS(e,f)}while(!0);return es=qa=null,Rt.H=i,Rt.A=s,te=n,Xt!==null?0:(fe=null,Yt=0,$u(),Oe)}function yE(){for(;Xt!==null&&!P1();)gS(Xt)}function gS(e){var t=zx(e.alternate,e,cs);e.memoizedProps=e.pendingProps,t===null?uh(e):Xt=t}function yv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ov(n,t,t.pendingProps,t.type,void 0,Yt);break;case 11:t=ov(n,t,t.pendingProps,t.type.render,t.ref,Yt);break;case 5:Im(t);var i=t;i===Je&&(Vt?(wu(i),i.tag===5&&i.stateNode!=null&&(ve=i.stateNode)):(wu(i),Vt=!0));default:Fx(n,t),t=Xt=Hy(t,cs),t=zx(n,t,cs)}e.memoizedProps=e.pendingProps,t===null?uh(e):Xt=t}function Ur(e,t,n,i){es=qa=null,Im(t),Br=null,xl=0;var s=t.return;try{if(rE(e,s,t,n,Yt)){Oe=1,Iu(e,si(n,e.current)),Xt=null;return}}catch(a){if(s!==null)throw Xt=s,a;Oe=1,Iu(e,si(n,e.current)),Xt=null;return}t.flags&32768?(Vt||i===1?e=!0:ro||(Yt&536870912)!==0?e=!1:(Fs=e=!0,(i===2||i===9||i===3||i===6)&&(i=an.current,i!==null&&i.tag===13&&(i.flags|=16384))),_S(t,e)):uh(t)}function uh(e){var t=e;do{if((t.flags&32768)!==0){_S(t,Fs);return}e=t.return;var n=uE(t.alternate,t,cs);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Oe===0&&(Oe=5)}function _S(e,t){do{var n=hE(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Oe=6,Xt=null}function xv(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do hh();while(Re!==0);if((te&6)!==0)throw Error(X(327));if(t!==null){if(t===e.current)throw Error(X(177));e===fe&&(Xt=fe=null,Yt=0),Va=t,gi=e,Fi=n,Yp=s,cS=i,xE(e,t,n,r,o,l,d)}}function xE(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(qp=o,o|=Sm,q1(e,n,o,i,s,a),Vr=null,(n&335544064)===n?(Gr=ZT(e),i=10262):(Gr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,AE(Mu,function(){return Qp(),null})):(e.callbackNode=null,e.callbackPriority=0),zu=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null,s=ee.p,ee.p=2,a=te,te|=4;try{fE(e,t,n)}finally{te=a,ee.p=s,Rt.T=i}}Re=1,zu?Hr=XE(r,e.containerInfo,Gr,Zp,Kp,ME,Jp,Qp,SE,null,null):(Zp(),Kp(),Jp())}function SE(e){if(Re!==0){var t=gi.onRecoverableError;t(e,{componentStack:null})}}function ME(){Re===3&&(Re=0,nS(Va,gi),Re=4)}function Zp(){if(Re===1){Re=0;var e=gi,t=Va,n=Fi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null;var s=ee.p;ee.p=2;var a=te;te|=4;try{tl=Fu=!1,tS(t,e,n),n=em;var r=Uy(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Dy(o.ownerDocument.documentElement,o)){if(l!==null&&xm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),g=o.textContent.length,x=Math.min(l.start,g),m=l.end===void 0?x:Math.min(l.end,g);!p.extend&&x>m&&(r=m,m=x,x=r);var h=P_(o,x),_=P_(o,m);if(h&&_&&(p.rangeCount!==1||p.anchorNode!==h.node||p.anchorOffset!==h.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var v=d.createRange();v.setStart(h.node,h.offset),p.removeAllRanges(),x>m?(p.addRange(v),p.extend(_.node,_.offset)):(v.setEnd(_.node,_.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}to=!!tm,em=tm=null}finally{te=a,ee.p=s,Rt.T=i}}e.current=t,Re=2}}function Kp(){if(Re===2){Re=0;var e=gi,t=Va,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Rt.T,Rt.T=null;var i=ee.p;ee.p=2;var s=te;te|=4;try{Zx(e,t.alternate,t)}finally{te=s,ee.p=i,Rt.T=n}}Re=3}}function Jp(){if(Re===4||Re===3){Re=0;var e=Hr;Hr=null,B1();var t=gi,n=Va,i=Fi,s=cS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Re=5:(Re=0,Va=gi=null,vS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Zs=null),pm(i),n=n.stateNode,Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Dl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Rt.T,a=ee.p,ee.p=2,Rt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Rt.T=n,ee.p=a}}if(s=Vr,r=Gr,Gr=null,s!==null&&(Vr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Fi&3)!==0&&hh(),Gi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===du?dl++:(dl=0,du=t):(dl=0,du=null),Fl(0,!1)}}function vS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pl(t)))}function hh(){return Hr!==null&&(Hr.skipTransition(),Hr=null),Zp(),Kp(),Jp(),Qp()}function Qp(){if(Re!==5)return!1;var e=gi,t=qp;qp=0;var n=pm(Fi),i=Rt.T,s=ee.p;try{ee.p=32>n?32:n,Rt.T=null,n=Yp,Yp=null;var a=gi,r=Fi;if(Re=0,Va=gi=null,Fi=0,(te&6)!==0)throw Error(X(331));var o=te;if(te|=4,rS(a.current),iS(a,a.current,r,n),te=o,Fl(0,!1),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Dl,a)}catch{}return!0}finally{ee.p=s,Rt.T=i,vS(e,t)}}function Sv(e,t,n){t=si(n,t),t=Np(e.stateNode,t,2),e=Ws(e,t,2),e!==null&&(Ll(e,2),Gi(e))}function oe(e,t,n){if(e.tag===3)Sv(e,e,n);else for(;t!==null;){if(t.tag===3){Sv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zs===null||!Zs.has(i))){e=si(n,e),n=Lx(2),i=Ws(t,n,2),i!==null&&(Ox(n,i,t,e),Ll(i,2),Gi(i));break}}t=t.return}}function qd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new mE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Qm=!0,s.add(n),e=bE.bind(null,e,t,n),t.then(e,e))}function bE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,fe===e&&(Yt&n)===n&&((Oe===4||Oe===3&&(Yt&62914560)===Yt&&300>zn()-lh)&&(te&2)===0?Kr(e,0):Hu|=n,Yr===Yt&&(Yr=0)),Gi(e)}function yS(e,t){t===0&&(t=cy()),e=Wa(e,t),e!==null&&(Ll(e,t),Gi(e))}function TE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yS(e,n)}function EE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(X(314))}i!==null&&i.delete(t),yS(e,n)}function AE(e,t){return fm(e,t)}var Jr=null,xr=null,jp=!1,Xu=!1,Yd=!1,Vs=0;function Gi(e){e!==xr&&e.next===null&&(xr===null?Jr=xr=e:xr=xr.next=e),Xu=!0,jp||(jp=!0,CE())}function Fl(e,t){if(!Yd&&Xu){Yd=!0;do for(var n=!1,i=Jr;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Hn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mv(i,a))}else a=Yt,a=Zu(i,i===fe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Ul(i,a)||(n=!0,Mv(i,a));i=i.next}while(n);Yd=!1}}function wE(){xS()}function xS(){Xu=jp=!1;var e=0;Vs!==0&&BE()&&(e=Vs);for(var t=zn(),n=null,i=Jr;i!==null;){var s=i.next,a=SS(i,t);a===0?(i.next=null,n===null?Jr=s:n.next=s,s===null&&(xr=n)):(n=i,(e!==0||(a&3)!==0)&&(Xu=!0)),i=s}Re!==0&&Re!==5||Fl(e,!1),Vs!==0&&(Vs=0)}function SS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Hn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=W1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=fe,n=Yt,n=Zu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ed(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ed(i),pm(n)){case 2:case 8:n=ry;break;case 32:n=Mu;break;case 268435456:n=oy;break;default:n=Mu}return i=MS.bind(null,e),n=fm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ed(i),e.callbackPriority=2,e.callbackNode=null,2}function MS(e,t){if(Re!==0&&Re!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hh()&&e.callbackNode!==n)return null;var i=Yt;return i=Zu(e,e===fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hS(e,i,t),SS(e,zn()),e.callbackNode!=null&&e.callbackNode===n?MS.bind(null,e):null)}function Mv(e,t){if(hh())return null;hS(e,t,!0)}function CE(){FE(function(){(te&6)!==0?fm(ay,wE):xS()})}function $m(){if(Vs===0){var e=Ba;e===0&&(e=Oc,Oc<<=1,(Oc&261888)===0&&(Oc=256)),Vs=e}return Vs}function bv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:eu(e)}function RE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=bv((s[Rn]||null).action),r=i.submitter;r&&(t=(t=r[Rn]||null)?bv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Ju("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Vs!==0){var l=new FormData(s,r);Cp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Cp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Kc=0;Kc<_p.length;Kc++)Jc=_p[Kc],Tv=Jc.toLowerCase(),Ev=Jc[0].toUpperCase()+Jc.slice(1),_i(Tv,"on"+Ev);var Jc,Tv,Ev,Kc;_i(Oy,"onAnimationEnd");_i(Iy,"onAnimationIteration");_i(Py,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(HT,"onTransitionRun");_i(VT,"onTransitionStart");_i(GT,"onTransitionCancel");_i(By,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ka("onBeforeInput",["compositionend","keypress","textInput","paste"]);ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function bS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Tu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Tu(f)}s.currentTarget=null,a=l}}}}function kt(e,t){var n=t[y_];n===void 0&&(n=t[y_]=new Set);var i=e+"__bubble";n.has(i)||(TS(t,e,2,!1),n.add(i))}function Zd(e,t,n){var i=0;t&&(i|=4),TS(n,e,i,t)}var Qc="_reactListening"+Math.random().toString(36).slice(2);function tg(e){if(!e[Qc]){e[Qc]=!0,my.forEach(function(n){n!=="selectionchange"&&(NE.has(n)||Zd(n,!1,e),Zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qc]||(t[Qc]=!0,Zd("selectionchange",!1,t))}}function TS(e,t,n,i){switch(ZS(t)){case 2:var s=MA;break;case 8:s=bA;break;default:s=og}n=s.bind(null,t,n,e),s=void 0,!dp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Kd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=wa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}by(function(){var c=a,f=gm(n),d=[];t:{var u=zy.get(e);if(u!==void 0){var p=Ju,g=e;switch(e){case"keypress":if(iu(n)===0)break t;case"keydown":case"keyup":p=gT;break;case"focusin":g="focus",p=Dd;break;case"focusout":g="blur",p=Dd;break;case"beforeblur":case"afterblur":p=Dd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=w_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ST;break;case Oy:case Iy:case Py:p=oT;break;case By:p=bT;break;case"scroll":case"scrollend":p=nT;break;case"wheel":p=ET;break;case"copy":case"cut":case"paste":p=cT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=R_;break;case"submit":p=yT;break;case"toggle":case"beforetoggle":p=wT}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),h=x?u!==null?u+"Capture":null:u;x=[];for(var _=c,v;_!==null;){var y=_;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||h===null||(y=ml(_,h),y!=null&&x.push(Tl(_,y,v))),m)break;_=_.return}0<x.length&&(u=new p(u,g,null,n,f),d.push({event:u,listeners:x}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",p&&n!==fp&&(g=n.relatedTarget||n.fromElement)&&(wa(g)||g[no]))break t;(u||p)&&(g=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,u?(p=n.relatedTarget||n.toElement,u=c,p=p?wa(p):null,p!==null&&(m=Nl(p),x=p.tag,p!==m||x!==5&&x!==27&&x!==6)&&(p=null)):(u=null,p=c),u!==p&&(x=w_,y="onMouseLeave",h="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(x=R_,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=u==null?g:jo(u),v=p==null?g:jo(p),g=new x(y,_+"leave",u,n,f),g.target=m,g.relatedTarget=v,y=null,wa(f)===c&&(x=new x(h,_+"enter",p,n,f),x.target=v,x.relatedTarget=m,y=x),m=y,x=u&&p?tp(u,p,DE):null,u!==null&&Av(d,g,u,x,!1),p!==null&&m!==null&&Av(d,m,p,x,!0)))}t:{if(u=c?jo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var A=L_;else if(U_(u))if(Ry)A=BT;else{A=IT;var R=OT}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&mm(c.elementType)&&(A=L_):A=PT;if(A&&(A=A(e,c))){Cy(d,A,n,f);break t}R&&R(e,u,c)}switch(R=c?jo(c):window,e){case"focusin":(U_(R)||R.contentEditable==="true")&&(Ar=R,mp=c,il=null);break;case"focusout":il=mp=Ar=null;break;case"mousedown":gp=!0;break;case"contextmenu":case"mouseup":case"dragend":gp=!1,B_(d,n,f);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":B_(d,n,f)}var C;if(ym)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Er?Ay(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Ey&&n.locale!=="ko"&&(Er||D!=="onCompositionStart"?D==="onCompositionEnd"&&Er&&(C=Ty()):(Bs=f,_m="value"in Bs?Bs.value:Bs.textContent,Er=!0)),R=Wu(c,D),0<R.length&&(D=new C_(D,e,null,n,f),d.push({event:D,listeners:R}),C?D.data=C:(C=wy(n),C!==null&&(D.data=C)))),(C=RT?NT(e,n):DT(e,n))&&(D=Wu(c,"onBeforeInput"),0<D.length&&(R=new C_("onBeforeInput","beforeinput",null,n,f),d.push({event:R,listeners:D}),R.data=C)),RE(d,e,c,n,f)}bS(d,t)})}function Tl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ml(e,n),s!=null&&i.unshift(Tl(e,s,a)),s=ml(e,t),s!=null&&i.push(Tl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function DE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Av(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ml(n,a),c!=null&&r.unshift(Tl(n,c,l))):s||(c=ml(n,a),c!=null&&r.push(Tl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var UE=/\r\n?/g,LE=/\u0000|\uFFFD/g;function wv(e){return(typeof e=="string"?e:""+e).replace(UE,`
`).replace(LE,"")}function ES(e,t){return t=wv(t),wv(e)===t}function re(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Wr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Wr(e,""+i);else return;break;case"className":Bc(e,"class",i);break;case"tabIndex":Bc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Bc(e,n,i);break;case"style":My(e,i,a);return;case"data":if(t!=="object"){Bc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=eu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&re(e,t,"name",s.name,s,null),re(e,t,"formEncType",s.formEncType,s,null),re(e,t,"formMethod",s.formMethod,s,null),re(e,t,"formTarget",s.formTarget,s,null)):(re(e,t,"encType",s.encType,s,null),re(e,t,"method",s.method,s,null),re(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=eu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ii);return;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(X(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(X(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=eu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":kt("beforetoggle",e),kt("toggle",e),tu(e,"popover",i);break;case"xlinkActuate":ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ji(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ji(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ji(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ji(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":tu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=tT.get(n)||n,tu(e,n,i);else return}$t=!0}function $p(e,t,n,i,s,a){switch(n){case"style":My(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(X(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(X(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Wr(e,i);else if(typeof i=="number"||typeof i=="bigint")Wr(e,""+i);else return;break;case"onScroll":i!=null&&kt("scroll",e);return;case"onScrollEnd":i!=null&&kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!gy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Rn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}$t=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):tu(e,n,i)}return}$t=!0}function sn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",e),kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:re(e,t,a,r,n,null)}}s&&re(e,t,"srcSet",n.srcSet,n,null),i&&re(e,t,"src",n.src,n,null);return;case"input":kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(X(137,t));break;default:re(e,t,i,f,n,null)}}yy(e,a,o,l,c,r,s,!1);return;case"select":kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:re(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Or(e,!!i,t,!1):n!=null&&Or(e,!!i,n,!0);return;case"textarea":kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(X(91));break;default:re(e,t,r,o,n,null)}Sy(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":re(e,t,l,i,n,null));return;case"dialog":kt("beforetoggle",e),kt("toggle",e),kt("cancel",e),kt("close",e);break;case"iframe":case"object":kt("load",e);break;case"video":case"audio":for(i=0;i<bl.length;i++)kt(bl[i],e);break;case"image":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"embed":case"source":case"link":kt("error",e),kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:re(e,t,c,i,n,null)}return;default:if(mm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&$p(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&re(e,t,o,i,n,null))}var OE={};function IE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||re(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":p!==d&&($t=!0),a=p;break;case"name":p!==d&&($t=!0),s=p;break;case"checked":p!==d&&($t=!0),c=p;break;case"defaultChecked":p!==d&&($t=!0),f=p;break;case"value":p!==d&&($t=!0),r=p;break;case"defaultValue":p!==d&&($t=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(X(137,t));break;default:p!==d&&re(e,t,u,p,i,d)}}hp(e,r,o,l,c,f,a,s);return;case"select":p=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||re(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&($t=!0),u=a;break;case"defaultValue":a!==l&&($t=!0),o=a;break;case"multiple":a!==l&&($t=!0),r=a;default:a!==l&&re(e,t,s,a,i,l)}t=o,n=r,i=p,u!=null?Or(e,!!n,u,!1):!!i!=!!n&&(t!=null?Or(e,!!n,t,!0):Or(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:re(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&($t=!0),u=s;break;case"defaultValue":s!==a&&($t=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(X(91));break;default:s!==a&&re(e,t,r,s,i,a)}xy(e,u,p);return;case"option":for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!=null&&!i.hasOwnProperty(g)&&(g==="selected"?e.selected=!1:re(e,t,g,null,i,u));for(l in i)u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null)&&(l==="selected"?(u!==p&&($t=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):re(e,t,l,u,i,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)u=n[x],n.hasOwnProperty(x)&&u!=null&&!i.hasOwnProperty(x)&&re(e,t,x,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(X(137,t));break;default:re(e,t,c,u,i,p)}return;default:if(mm(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&$p(e,t,m,void 0,i,u);for(f in i)u=i[f],p=n[f],!i.hasOwnProperty(f)||u===p||u===void 0&&p===void 0||$p(e,t,f,u,i,p);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&re(e,t,h,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||re(e,t,d,u,i,p)}function Cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function PE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Cv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Cv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tm=null,em=null;function El(e){return e.nodeType===9?e:e.ownerDocument}function Rv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function AS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wS(e,t,n,i){return n=El(n).createElement(e),n[$e]=i,n[Rn]=t,sn(n,e,t),Ke(n),n}function nm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=null;function BE(){var e=window.event;return e&&e.type==="popstate"?e===Jd?!1:(Jd=e,!0):(Jd=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,zE=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,Dv=typeof requestAnimationFrame=="function"?requestAnimationFrame:eg,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(e){return Nv.resolve(null).then(e).catch(HE)}:eg;function HE(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function Uv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),eo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")jd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,jd(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Ol]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&jd(e.ownerDocument.body);n=s}while(n);eo(t)}function Lv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function CS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function RS(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function NS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function im(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return NS(t,n,e)}function VE(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return NS(t,n,e)}function GE(e){return e.documentElement.clientHeight}function kE(e){this.addEventListener("load",e),this.addEventListener("error",e)}function XE(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,p=u.navigation&&u.navigation.transition,g=c.fonts.status;i();var x=[];if(g==="loaded"&&(GE(c),c.fonts.status==="loading"&&x.push(c.fonts.ready)),g=x.length,e!==null)for(var m=e.suspenseyImages,h=0,_=0;_<m.length;_++){var v=m[_];if(!v.complete){var y=v.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=GS(v),h>gu){x.length=g;break}v=new Promise(kE.bind(v)),x.push(v)}}}if(0<x.length)return u=Promise.race([Promise.all(x),new Promise(function(A){return setTimeout(A,500)})]).then(s,s),(p?Promise.allSettled([p.finished,u]):u).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),p=0;p<u.length;p++){var g=u[p],x=g.effect,m=x.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(g),g=x.getKeyframes();for(var h=m=void 0,_=!0,v=0;v<g.length;v++){var y=g[v],A=y.width;if(m===void 0)m=A;else if(m!==A){_=!1;break}if(A=y.height,h===void 0)h=A;else if(h!==A){_=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}_&&m!==void 0&&h!==void 0&&(x.setKeyframes(g),_=getComputedStyle(x.target,x.pseudoElement),_.width!==m||_.height!==h)&&(_=g[0],_.width=m,_.height=h,_=g[g.length-1],_.width=m,_.height=h,x.setKeyframes(g))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<d.length;u++)d[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Ca(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Ca.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:de({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Ca.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Ca.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function DS(e){return{name:e,group:new Ca("group",e),imagePair:new Ca("image-pair",e),old:new Ca("old",e),new:new Ca("new",e)}}function kn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}kn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(US(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Qr(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Cn(this._fragmentFiber.child,!1,WE,e,o,i)}this._eventListeners=a}};function WE(e,t,n,i){return Ge(e).addEventListener(t,n,i),!1}kn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=US(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=Qr(s.optionsOrUseCapture),Cn(this._fragmentFiber.child,!1,qE,e,n,s),i.splice(t,1),a!==null&&a()}};function qE(e,t,n,i){return Ge(e).removeEventListener(t,n,i),!1}function Qr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ov(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function US(e,t,n,i){if(e.length===0)return-1;i=Ov(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ov(a.optionsOrUseCapture)===i)return s}return-1}kn.prototype.dispatchEvent=function(e){var t=Ga(this._fragmentFiber);if(t===null)return!0;t=Ge(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,Qr(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,Qr(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};kn.prototype.focus=function(e){Cn(this._fragmentFiber.child,!0,LS,e,void 0,void 0)};function LS(e,t){return e.tag===6?!1:(e=Ge(e),sA(e,t))}kn.prototype.focusLast=function(e){var t=[];Cn(this._fragmentFiber.child,!0,ng,t,void 0,void 0);for(var n=t.length-1;0<=n&&!LS(t[n],e);n--);};function ng(e,t){return t.push(e),!1}kn.prototype.blur=function(){var e=Ga(this._fragmentFiber);e!==null&&(e=Ge(e),e=El(e).activeElement,e!==null&&Cn(this._fragmentFiber.child,!1,YE,e,void 0,void 0))};function YE(e,t){return e.tag===6?!1:(e=Ge(e),e===t||e.contains(t)?(t.blur(),!0):!1)}kn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Cn(this._fragmentFiber.child,!1,ZE,e,void 0,void 0)};function ZE(e,t){return e.tag===6||(e=Ge(e),t.observe(e)),!1}kn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Cn(this._fragmentFiber.child,!1,KE,e,void 0,void 0);for(var n=t=0;n<mi.length;n++){var i=mi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):mi[t++]=i}mi.length=t}};function KE(e,t){return e.tag===6||(e=Ge(e),t.unobserve(e)),!1}var mi=[],Qd=!1;function JE(e,t,n){mi.push({fragmentInstance:e,observer:t,instance:n}),Qd||(Qd=!0,aA(function(){Qd=!1;var i=mi;mi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}kn.prototype.getClientRects=function(){var e=[];return Cn(this._fragmentFiber.child,!1,QE,e,void 0,void 0),e};function QE(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Ge(e),t.push.apply(t,e.getClientRects());return!1}kn.prototype.getRootNode=function(e){var t=Ga(this._fragmentFiber);return t===null?this:Ge(t).getRootNode(e)};kn.prototype.compareDocumentPosition=function(e){var t=Ga(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Cn(this._fragmentFiber.child,!1,ng,n,void 0,void 0);var i=Ge(t);if(n.length===0){if(n=i,d_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ey(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=Ge(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Ge(n[0]),s=Ge(n[n.length-1]);var a=d_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||jE(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function jE(e,t,n,i,s){var a=wa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Ga(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=tp(n,a,p_),t===null?t=!1:(Cn(t,!0,C1,a,n),a=Sr,Sr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=tp(i,a,p_),t===null?t=!1:(Cn(t,!0,R1,a,i),a=Sr,$d=Sr=null,t=a!==null)),t):!1}function Iv(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}kn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(X(566));var t=[];Cn(this._fragmentFiber.child,!1,ng,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=ey(this._fragmentFiber);if(i=n?i[1]||i[0]||Ga(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=Ge(i),Iv(e,n);return}if(i=Ge(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=Ge(s),Iv(s,n)):Ge(s).scrollIntoView(e),i+=n?-1:1}};function $E(e,t){return e=Ge(e),OS(e,t),!1}function OS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function IS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Qr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<mi.length;o++){var l=mi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(mi[r++]=l)}mi.length=r,a.observe(e)}),OS(e,t))}function tA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Qr(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?JE(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function sm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sm(n),Ku(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function eA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function nA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function PS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function am(e){return e.data==="$?"||e.data==="$~"}function ig(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rm=null;function Pv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function sA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function aA(e){Dv(function(){Dv(function(t){return e(t)})})}function BS(e,t,n){switch(t=El(n),e){case"html":if(e=t.documentElement,!e)throw Error(X(452));return e;case"head":if(e=t.head,!e)throw Error(X(453));return e;case"body":if(e=t.body,!e)throw Error(X(454));return e;default:throw Error(X(451))}}function zS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&re(e,t,i,null,OE,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ii&&(e.onclick=null),Ku(e)}function jd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ku(e)}var oi=new Map,zv=new Set;function Al(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var fs=ee.d;ee.d={f:rA,r:oA,D:lA,C:cA,L:uA,m:hA,X:dA,S:fA,M:pA};function rA(){var e=fs.f(),t=ch();return e||t}function oA(e){var t=io(e);t!==null&&t.tag===5&&t.type==="form"?Mx(t):fs.r(e)}var oo=typeof document>"u"?null:document;function FS(e,t,n){var i=oo;if(i&&typeof t=="string"&&t){var s=ii(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),zv.has(s)||(zv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),sn(t,"link",e),Ke(t),i.head.appendChild(t)))}}function lA(e){fs.D(e),FS("dns-prefetch",e,null)}function cA(e,t){fs.C(e,t),FS("preconnect",e,t)}function uA(e,t,n){fs.L(e,t,n);var i=oo;if(i&&e&&t){var s='link[rel="preload"][as="'+ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ii(n.imageSizes)+'"]')):s+='[href="'+ii(e)+'"]';var a=s;switch(t){case"style":a=jr(e);break;case"script":a=lo(e)}if(!(oi.has(a)||(e=de({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Hl(a))||t==="script"&&i.querySelector(Vl(a))))){var r=i.createElement("link");sn(r,"link",e),t==="style"&&(r[bu]=!0,r.onload=r.onerror=function(){py(r)}),Ke(r),i.head.appendChild(r)}}}function hA(e,t){fs.m(e,t);var n=oo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ii(i)+'"][href="'+ii(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=lo(e)}if(!oi.has(a)&&(e=de({rel:"modulepreload",href:e},t),oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vl(a)))return}i=n.createElement("link"),sn(i,"link",e),Ke(i),n.head.appendChild(i)}}}function fA(e,t,n){fs.S(e,t,n);var i=oo;if(i&&e){var s=Lr(i).hoistableStyles,a=jr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Hl(a)))o.loading=5;else{e=de({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(a))&&sg(e,n);var l=r=i.createElement("link");Ke(l),sn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,pu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function dA(e,t){fs.X(e,t);var n=oo;if(n&&e){var i=Lr(n).hoistableScripts,s=lo(e),a=i.get(s);a||(a=n.querySelector(Vl(s)),a||(e=de({src:e,async:!0},t),(t=oi.get(s))&&ag(e,t),a=n.createElement("script"),Ke(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function pA(e,t){fs.M(e,t);var n=oo;if(n&&e){var i=Lr(n).hoistableScripts,s=lo(e),a=i.get(s);a||(a=n.querySelector(Vl(s)),a||(e=de({src:e,async:!0,type:"module"},t),(t=oi.get(s))&&ag(e,t),a=n.createElement("script"),Ke(a),sn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Fv(e,t,n,i){var s=(s=Gs.current)?Al(s):null;if(!s)throw Error(X(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=jr(n.href),t=Lr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=jr(n.href);var a=Lr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Hl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=oi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,a)),mA(s,e,a,r.state))),t&&i===null)throw Error(X(528,""));return r}if(t&&i!==null)throw Error(X(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=lo(n),t=Lr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(X(444,e))}}function jr(e){return'href="'+ii(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function HS(e){return de({},e,{"data-precedence":e.precedence,precedence:null})}function mA(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[bu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[bu]=!0,t.onload=t.onerror=py.bind(null,t),sn(t,"link",n),Ke(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function lo(e){return'[src="'+ii(e)+'"]'}function Vl(e){return"script[async]"+e}function Hv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ii(n.href)+'"]');if(i)return t.instance=i,Ke(i),i;var s=de({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ke(i),sn(i,"style",s),pu(i,n.precedence,e),t.instance=i;case"stylesheet":s=jr(n.href);var a=e.querySelector(Hl(s));if(a)return t.state.loading|=4,t.instance=a,Ke(a),a;i=HS(n),(s=oi.get(s))&&sg(i,s),a=(e.ownerDocument||e).createElement("link"),Ke(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),t.state.loading|=4,pu(a,n.precedence,e),t.instance=a;case"script":return a=lo(n.src),(s=e.querySelector(Vl(a)))?(t.instance=s,Ke(s),s):(i=n,(s=oi.get(a))&&(i=de({},n),ag(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ke(s),sn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(X(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,pu(i,n.precedence,e));return t.instance}function pu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function sg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ag(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var mu=null;function Vv(e,t,n){if(mu===null){var i=new Map,s=mu=new Map;s.set(n,i)}else s=mu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Ol]||a[$e]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function gA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function VS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function GS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function kv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=GS(t),e.suspenseyImages.push(t)),e=yA.bind(e),t.decode().then(e,e))}function _A(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=jr(i.href),a=t.querySelector(Hl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=wl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ke(a);return}a=t.ownerDocument||t,i=HS(i),(s=oi.get(s))&&sg(i,s),a=a.createElement("link"),Ke(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),sn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=wl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var gu=0;function vA(e,t){return e.stylesheets&&e.count===0&&_u(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&gu===0&&(gu=62500*PE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_u(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>gu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function kS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)_u(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function wl(){this.count--,kS(this)}function yA(){this.imgCount--,kS(this)}var qu=null;function _u(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qu=new Map,t.forEach(xA,e),qu=null,wl.call(e))}function xA(e,t){if(!(t.state.loading&4)){var n=qu.get(e);if(n)var i=n.get(null);else{n=new Map,qu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=wl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var $r={$$typeof:Oi,Provider:null,Consumer:null,_currentValue:Ra,_currentValue2:Ra,_threadCount:0};function SA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ad(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.hiddenUpdates=Ad(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function XS(e,t,n,i,s,a,r,o,l,c,f,d){return e=new SA(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=An(3,null,null,t),e.current=a,a.stateNode=e,t=Em(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Cm(a),e}function WS(e){return e?(e=Rr,e):Rr}function qS(e,t,n,i,s,a){s=WS(s),i.context===null?i.context=s:i.pendingContext=s,i=Xs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Ws(e,i,t),n!==null&&(wn(n,e,t),al(n,e,t))}function Xv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rg(e,t){Xv(e,t),(e=e.alternate)&&Xv(e,t)}function YS(e){if(e.tag===13||e.tag===31){var t=Wa(e,67108864);t!==null&&wn(t,e,67108864),rg(e,67108864)}}function Wv(e){if(e.tag===13||e.tag===31){var t=Vn();t=dm(t);var n=Wa(e,t);n!==null&&wn(n,e,t),rg(e,t)}}var to=!0;function MA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=ee.p;try{ee.p=2,og(e,t,n,i)}finally{ee.p=a,Rt.T=s}}function bA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=ee.p;try{ee.p=8,og(e,t,n,i)}finally{ee.p=a,Rt.T=s}}function og(e,t,n,i){if(to){var s=lm(i);if(s===null)Kd(e,t,i,Yu,n),qv(e,i);else if(EA(s,e,t,n,i))i.stopPropagation();else if(qv(e,i),t&4&&-1<TA.indexOf(e)){for(;s!==null;){var a=io(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ta(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Hn(r);o.entanglements[1]|=l,r&=~l}Gi(a),(te&6)===0&&(Vu=zn()+500,Fl(0,!1))}}break;case 31:case 13:o=Wa(a,2),o!==null&&wn(o,a,2),ch(),rg(a,2)}if(a=lm(i),a===null&&Kd(e,t,i,Yu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Kd(e,t,i,null,n)}}function lm(e){return e=gm(e),lg(e)}var Yu=null;function lg(e){if(Yu=null,e=wa(e),e!==null){var t=Nl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=jv(t),e!==null)return e;e=null}else if(n===31){if(e=$v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yu=e,null}function ZS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z1()){case ay:return 2;case ry:return 8;case Mu:case F1:return 32;case oy:return 268435456;default:return 32}default:return 32}}var cm=!1,Ks=null,Js=null,Qs=null,Cl=new Map,Rl=new Map,Is=[],TA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(e,t){switch(e){case"focusin":case"focusout":Ks=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":Qs=null;break;case"pointerover":case"pointerout":Cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(t.pointerId)}}function Zo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=io(t),t!==null&&YS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function EA(e,t,n,i,s){switch(t){case"focusin":return Ks=Zo(Ks,e,t,n,i,s),!0;case"dragenter":return Js=Zo(Js,e,t,n,i,s),!0;case"mouseover":return Qs=Zo(Qs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Cl.set(a,Zo(Cl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Rl.set(a,Zo(Rl.get(a)||null,e,t,n,i,s)),!0}return!1}function KS(e){var t=wa(e.target);if(t!==null){var n=Nl(t);if(n!==null){if(t=n.tag,t===13){if(t=jv(n),t!==null){e.blockedOn=t,v_(e.priority,function(){Wv(n)});return}}else if(t===31){if(t=$v(n),t!==null){e.blockedOn=t,v_(e.priority,function(){Wv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fp=i,n.target.dispatchEvent(i),fp=null}else return t=io(n),t!==null&&YS(t),e.blockedOn=n,!1;t.shift()}return!0}function Yv(e,t,n){vu(e)&&n.delete(t)}function AA(){cm=!1,Ks!==null&&vu(Ks)&&(Ks=null),Js!==null&&vu(Js)&&(Js=null),Qs!==null&&vu(Qs)&&(Qs=null),Cl.forEach(Yv),Rl.forEach(Yv)}function jc(e,t){e.blockedOn===t&&(e.blockedOn=null,cm||(cm=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,AA)))}var $c=null;function Zv(e){$c!==e&&($c=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){$c===e&&($c=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(lg(i||n)===null)continue;break}var a=io(n);a!==null&&(e.splice(t,3),t-=3,Cp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function eo(e){function t(l){return jc(l,e)}Ks!==null&&jc(Ks,e),Js!==null&&jc(Js,e),Qs!==null&&jc(Qs,e),Cl.forEach(t),Rl.forEach(t);for(var n=0;n<Is.length;n++){var i=Is[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Is.length&&(n=Is[0],n.blockedOn===null);)KS(n),n.blockedOn===null&&Is.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Rn]||null;if(typeof a=="function")r||Zv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Rn]||null)o=r.formAction;else if(lg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Zv(n)}}}function JS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function cg(e){this._internalRoot=e}fh.prototype.render=cg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));var n=t.current,i=Vn();qS(n,i,e,t,null,null)};fh.prototype.unmount=cg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qS(e.current,2,null,e,null,null),ch(),t[no]=null}};function fh(e){this._internalRoot=e}fh.prototype.unstable_scheduleHydration=function(e){if(e){var t=dy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Is.length&&t!==0&&t<Is[n].priority;n++);Is.splice(n,0,e),n===0&&KS(e)}};var Kv=Jv.version;if(Kv!=="19.3.1")throw Error(X(527,Kv,"19.3.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=w1(t),e=e!==null?ty(e):null,e=e===null?null:e.stateNode,e};var wA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ko.isDisabled&&Ko.supportsFiber))try{Dl=Ko.inject(wA),Fn=Ko}catch{}var Ko;dh.createRoot=function(e,t){if(!Qv(e))throw Error(X(299));var n=!1,i="",s=Nx,a=Dx,r=Ux;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=XS(e,1,!1,null,null,n,i,null,s,a,r,JS),e[no]=t.current,tg(e),new cg(t)};dh.hydrateRoot=function(e,t,n){if(!Qv(e))throw Error(X(299));var i=!1,s="",a=Nx,r=Dx,o=Ux,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=XS(e,1,!0,t,n??null,i,s,l,a,r,o,JS),t.context=WS(null),n=t.current,i=Vn(),i=dm(i),s=Xs(i),s.callback=null,Ws(n,s,i),n=i,t.current.lanes=n,Ll(t,n),Gi(t),e[no]=t.current,tg(e),new fh(t)};dh.version="19.3.1"});var tM=ws((Q3,$S)=>{"use strict";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(e){console.error(e)}}jS(),$S.exports=QS()});var w=L0(Cc(),1),Wb=L0(tM(),1);var MM=0,kg=1,bM=2;var Xg=1,TM=2,qi=3,xs=0,Sn=1,Yi=2,bs=0,ja=1,Wg=2,qg=3,Yg=4,EM=5,da=100,AM=101,wM=102,CM=103,RM=104,NM=200,DM=201,UM=202,LM=203,Ih=204,Ph=205,OM=206,IM=207,PM=208,BM=209,zM=210,FM=211,HM=212,VM=213,GM=214,cf=0,uf=1,hf=2,$a=3,ff=4,df=5,pf=6,mf=7,Zg=0,kM=1,XM=2,Ts=0,WM=1,qM=2,YM=3,ZM=4,KM=5,JM=6,QM=7;var Kg=300,ir=301,sr=302,gf=303,_f=304,_c=306,Bh=1e3,fa=1001,zh=1002,ci=1003,jM=1004;var vc=1005;var bi=1006,vf=1007;var va=1008;var Ai=1009,Jg=1010,Qg=1011,No=1012,yf=1013,ya=1014,Zi=1015,Do=1016,xf=1017,Sf=1018,Uo=1020,jg=35902,$g=35899,t0=1021,e0=1022,hi=1023,bo=1026,Lo=1027,n0=1028,Mf=1029,i0=1030,bf=1031;var Tf=1033,yc=33776,xc=33777,Sc=33778,Mc=33779,Ef=35840,Af=35841,wf=35842,Cf=35843,Rf=36196,Nf=37492,Df=37496,Uf=37808,Lf=37809,Of=37810,If=37811,Pf=37812,Bf=37813,zf=37814,Ff=37815,Hf=37816,Vf=37817,Gf=37818,kf=37819,Xf=37820,Wf=37821,qf=36492,Yf=36494,Zf=36495,Kf=36283,Jf=36284,Qf=36285,jf=36286;var Zl=2300,Fh=2301,Oh=2302,Ig=2400,Pg=2401,Bg=2402;var $M=3200,tb=3201;var eb=0,nb=1,Es="",qn="srgb",tr="srgb-linear",Kl="linear",le="srgb";var Qa=7680;var zg=519,ib=512,sb=513,ab=514,s0=515,rb=516,ob=517,lb=518,cb=519,Fg=35044;var a0="300 es",Si=2e3,Jl=2001;var Ss=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ug=Math.PI/180,Hh=180/Math.PI;function bc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[e&255]+hn[e>>8&255]+hn[e>>16&255]+hn[e>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Wt(e,t,n){return Math.max(t,Math.min(n,e))}function CA(e,t){return(e%t+t)%t}function hg(e,t,n){return(1-n)*e+n*t}function Gl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Nn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Qt=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ms=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],u=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=u,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(d!==x||l!==u||c!==p||f!==g){let m=1-o,h=l*u+c*p+f*g+d*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){let A=Math.sqrt(v),R=Math.atan2(A,h*_);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}let y=o*_;if(l=l*m+u*y,c=c*m+p*y,f=f*m+g*y,d=d*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=A,c*=A,f*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],u=a[r+1],p=a[r+2],g=a[r+3];return t[n]=o*g+f*d+l*p-c*u,t[n+1]=l*g+f*u+c*d-o*p,t[n+2]=c*g+f*p+o*u-l*d,t[n+3]=f*g-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),u=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"YXZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"ZXY":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"ZYX":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"YZX":this._x=u*f*d+c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d-u*p*g;break;case"XZY":this._x=u*f*d-c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,u=Math.sin(n*f)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(eM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(eM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fg.copy(this).projectOnVector(t),this.sub(fg)}reflect(t){return this.sub(fg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fg=new B,eM=new Ms,Bt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],p=i[5],g=i[8],x=s[0],m=s[3],h=s[6],_=s[1],v=s[4],y=s[7],A=s[2],R=s[5],C=s[8];return a[0]=r*x+o*_+l*A,a[3]=r*m+o*v+l*R,a[6]=r*h+o*y+l*C,a[1]=c*x+f*_+d*A,a[4]=c*m+f*v+d*R,a[7]=c*h+f*y+d*C,a[2]=u*x+p*_+g*A,a[5]=u*m+p*v+g*R,a[8]=u*h+p*y+g*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,u=o*l-f*a,p=c*a-r*l,g=n*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-f*i)*x,t[2]=(o*i-s*r)*x,t[3]=u*x,t[4]=(f*n-s*l)*x,t[5]=(s*a-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(r*n-i*a)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(dg.makeScale(t,n)),this}rotate(t){return this.premultiply(dg.makeRotation(-t)),this}translate(t,n){return this.premultiply(dg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dg=new Bt;function r0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ql(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ub(){let e=Ql("canvas");return e.style.display="block",e}var nM={};function To(e){e in nM||(nM[e]=!0,console.warn(e))}function hb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var iM=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sM=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RA(){let e={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===le&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Es?Kl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return To("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return To("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[tr]:{primaries:t,whitePoint:i,transfer:Kl,toXYZ:iM,fromXYZ:sM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:iM,fromXYZ:sM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),e}var Jt=RA();function ys(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Mo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var co,Vh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{co===void 0&&(co=Ql("canvas")),co.width=t.width,co.height=t.height;let s=co.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=co}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ql("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ys(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ys(n[i]/255)*255):n[i]=ys(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},NA=0,Eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=bc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(pg(s[r].image)):a.push(pg(s[r]))}else a=pg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function pg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Vh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var DA=0,mg=new B,Zn=class e extends Ss{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=fa,s=fa,a=bi,r=va,o=hi,l=Ai,c=e.DEFAULT_ANISOTROPY,f=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=bc(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mg).x}get height(){return this.source.getSize(mg).y}get depth(){return this.source.getSize(mg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Kg;Zn.DEFAULT_ANISOTROPY=1;var De=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,A=(h+1)/2,R=(f+u)/4,C=(d+x)/4,D=(g+m)/4;return v>y&&v>A?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=R/i,a=C/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=R/s,a=D/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=C/a,s=D/a),this.set(i,s,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-f)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Wt(this.x,t.x,n.x),this.y=Wt(this.y,t.y,n.y),this.z=Wt(this.z,t.z,n.z),this.w=Wt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Wt(this.x,t,n),this.y=Wt(this.y,t,n),this.z=Wt(this.z,t,n),this.w=Wt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gh=class extends Ss{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new De(0,0,t,n),this.scissorTest=!1,this.viewport=new De(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new Zn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Eo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends Gh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},jl=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kh=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(a,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ph.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ph.copy(i.boundingBox)),ph.applyMatrix4(t.matrixWorld),this.union(ph)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kl),mh.subVectors(this.max,kl),uo.subVectors(t.a,kl),ho.subVectors(t.b,kl),fo.subVectors(t.c,kl),aa.subVectors(ho,uo),ra.subVectors(fo,ho),Ya.subVectors(uo,fo);let n=[0,-aa.z,aa.y,0,-ra.z,ra.y,0,-Ya.z,Ya.y,aa.z,0,-aa.x,ra.z,0,-ra.x,Ya.z,0,-Ya.x,-aa.y,aa.x,0,-ra.y,ra.x,0,-Ya.y,Ya.x,0];return!gg(n,uo,ho,fo,mh)||(n=[1,0,0,0,1,0,0,0,1],!gg(n,uo,ho,fo,mh))?!1:(gh.crossVectors(aa,ra),n=[gh.x,gh.y,gh.z],gg(n,uo,ho,fo,mh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,ph=new pa,uo=new B,ho=new B,fo=new B,aa=new B,ra=new B,Ya=new B,kl=new B,mh=new B,gh=new B,Za=new B;function gg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Za.fromArray(e,a);let o=s.x*Math.abs(Za.x)+s.y*Math.abs(Za.y)+s.z*Math.abs(Za.z),l=t.dot(Za),c=n.dot(Za),f=i.dot(Za);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var UA=new pa,Xl=new B,_g=new B,er=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):UA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xl.subVectors(t,this.center);let n=Xl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Xl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_g.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xl.copy(t.center).add(_g)),this.expandByPoint(Xl.copy(t.center).sub(_g))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ps=new B,vg=new B,_h=new B,oa=new B,yg=new B,vh=new B,xg=new B,$l=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ps.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,n),ps.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){vg.copy(t).add(n).multiplyScalar(.5),_h.copy(n).sub(t).normalize(),oa.copy(this.origin).sub(vg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(_h),o=oa.dot(this.direction),l=-oa.dot(_h),c=oa.lengthSq(),f=Math.abs(1-r*r),d,u,p,g;if(f>0)if(d=r*l-o,u=r*o-l,g=a*f,d>=0)if(u>=-g)if(u<=g){let x=1/f;d*=x,u*=x,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vg).addScaledVector(_h,u),p}intersectSphere(t,n){ps.subVectors(t.center,this.origin);let i=ps.dot(this.direction),s=ps.dot(ps)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,n,i,s,a){yg.subVectors(n,t),vh.subVectors(i,t),xg.crossVectors(yg,vh);let r=this.direction.dot(xg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;oa.subVectors(this.origin,t);let l=o*this.direction.dot(vh.crossVectors(oa,vh));if(l<0)return null;let c=o*this.direction.dot(yg.cross(oa));if(c<0||l+c>r)return null;let f=-o*oa.dot(xg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,u,p,g,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,u,p,g,x,m)}set(t,n,i,s,a,r,o,l,c,f,d,u,p,g,x,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/po.setFromMatrixColumn(t,0).length(),a=1/po.setFromMatrixColumn(t,1).length(),r=1/po.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let u=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=u-x*c,n[9]=-o*l,n[2]=x-u*c,n[6]=g+p*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,p=l*d,g=c*f,x=c*d;n[0]=u+x*o,n[4]=g*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-g,n[6]=x+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,p=l*d,g=c*f,x=c*d;n[0]=u-x*o,n[4]=-r*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=r*f,n[9]=x-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,p=r*d,g=o*f,x=o*d;n[0]=l*f,n[4]=g*c-p,n[8]=u*c+x,n[1]=l*d,n[5]=x*c+u,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=x-u*d,n[8]=g*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+g,n[10]=u-x*d}else if(t.order==="XZY"){let u=r*l,p=r*c,g=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+x,n[5]=r*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*f,n[10]=x*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LA,t,OA)}lookAt(t,n,i){let s=this.elements;return Xn.subVectors(t,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),la.crossVectors(i,Xn),la.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),la.crossVectors(i,Xn)),la.normalize(),yh.crossVectors(Xn,la),s[0]=la.x,s[4]=yh.x,s[8]=Xn.x,s[1]=la.y,s[5]=yh.y,s[9]=Xn.y,s[2]=la.z,s[6]=yh.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],_=i[3],v=i[7],y=i[11],A=i[15],R=s[0],C=s[4],D=s[8],T=s[12],b=s[1],L=s[5],H=s[9],k=s[13],Y=s[2],J=s[6],q=s[10],it=s[14],V=s[3],ot=s[7],ht=s[11],Tt=s[15];return a[0]=r*R+o*b+l*Y+c*V,a[4]=r*C+o*L+l*J+c*ot,a[8]=r*D+o*H+l*q+c*ht,a[12]=r*T+o*k+l*it+c*Tt,a[1]=f*R+d*b+u*Y+p*V,a[5]=f*C+d*L+u*J+p*ot,a[9]=f*D+d*H+u*q+p*ht,a[13]=f*T+d*k+u*it+p*Tt,a[2]=g*R+x*b+m*Y+h*V,a[6]=g*C+x*L+m*J+h*ot,a[10]=g*D+x*H+m*q+h*ht,a[14]=g*T+x*k+m*it+h*Tt,a[3]=_*R+v*b+y*Y+A*V,a[7]=_*C+v*L+y*J+A*ot,a[11]=_*D+v*H+y*q+A*ht,a[15]=_*T+v*k+y*it+A*Tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],h=t[15];return g*(+a*l*d-s*c*d-a*o*u+i*c*u+s*o*p-i*l*p)+x*(+n*l*p-n*c*u+a*r*u-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+h*(-s*o*f-n*l*d+n*o*u+s*r*d-i*r*u+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],h=t[15],_=d*m*c-x*u*c+x*l*p-o*m*p-d*l*h+o*u*h,v=g*u*c-f*m*c-g*l*p+r*m*p+f*l*h-r*u*h,y=f*x*c-g*d*c+g*o*p-r*x*p-f*o*h+r*d*h,A=g*d*l-f*x*l-g*o*u+r*x*u+f*o*m-r*d*m,R=n*_+i*v+s*y+a*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=_*C,t[1]=(x*u*a-d*m*a-x*s*p+i*m*p+d*s*h-i*u*h)*C,t[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*h+i*l*h)*C,t[3]=(d*l*a-o*u*a-d*s*c+i*u*c+o*s*p-i*l*p)*C,t[4]=v*C,t[5]=(f*m*a-g*u*a+g*s*p-n*m*p-f*s*h+n*u*h)*C,t[6]=(g*l*a-r*m*a-g*s*c+n*m*c+r*s*h-n*l*h)*C,t[7]=(r*u*a-f*l*a+f*s*c-n*u*c-r*s*p+n*l*p)*C,t[8]=y*C,t[9]=(g*d*a-f*x*a-g*i*p+n*x*p+f*i*h-n*d*h)*C,t[10]=(r*x*a-g*o*a+g*i*c-n*x*c-r*i*h+n*o*h)*C,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*C,t[12]=A*C,t[13]=(f*x*s-g*d*s+g*i*u-n*x*u-f*i*m+n*d*m)*C,t[14]=(g*o*s-r*x*s-g*i*l+n*x*l+r*i*m-n*o*m)*C,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*u+n*o*u)*C,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,u=a*c,p=a*f,g=a*d,x=r*f,m=r*d,h=o*d,_=l*c,v=l*f,y=l*d,A=i.x,R=i.y,C=i.z;return s[0]=(1-(x+h))*A,s[1]=(p+y)*A,s[2]=(g-v)*A,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(u+h))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(g+v)*C,s[9]=(m-_)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=po.set(s[0],s[1],s[2]).length(),r=po.set(s[4],s[5],s[6]).length(),o=po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],yi.copy(this);let c=1/a,f=1/r,d=1/o;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=f,yi.elements[5]*=f,yi.elements[6]*=f,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,n.setFromRotationMatrix(yi),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),u=(n+t)/(n-t),p=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Si)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Jl)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Si,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),p=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Si)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Jl)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},po=new B,yi=new Ne,LA=new B(0,0,0),OA=new B(1,1,1),la=new B,yh=new B,Xn=new B,aM=new Ne,rM=new Ms,Wi=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],u=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return aM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return rM.setFromEuler(this),this.setFromQuaternion(rM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var tc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},IA=0,oM=new B,mo=new Ms,ms=new Ne,xh=new B,Wl=new B,PA=new B,BA=new Ms,lM=new B(1,0,0),cM=new B(0,1,0),uM=new B(0,0,1),hM={type:"added"},zA={type:"removed"},go={type:"childadded",child:null},Sg={type:"childremoved",child:null},rn=class e extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IA++}),this.uuid=bc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Wi,i=new Ms,s=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Bt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mo.setFromAxisAngle(t,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(t,n){return mo.setFromAxisAngle(t,n),this.quaternion.premultiply(mo),this}rotateX(t){return this.rotateOnAxis(lM,t)}rotateY(t){return this.rotateOnAxis(cM,t)}rotateZ(t){return this.rotateOnAxis(uM,t)}translateOnAxis(t,n){return oM.copy(t).applyQuaternion(this.quaternion),this.position.add(oM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lM,t)}translateY(t){return this.translateOnAxis(cM,t)}translateZ(t){return this.translateOnAxis(uM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?xh.copy(t):xh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Wl,xh,this.up):ms.lookAt(xh,Wl,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),mo.setFromRotationMatrix(ms),this.quaternion.premultiply(mo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hM),go.child=t,this.dispatchEvent(go),go.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(zA),Sg.child=t,this.dispatchEvent(Sg),Sg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hM),go.child=t,this.dispatchEvent(go),go.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,t,PA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wl,BA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};rn.DEFAULT_UP=new B(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new B,gs=new B,Mg=new B,_s=new B,_o=new B,vo=new B,fM=new B,bg=new B,Tg=new B,Eg=new B,Ag=new De,wg=new De,Cg=new De,ha=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),xi.subVectors(t,n),s.cross(xi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){xi.subVectors(s,n),gs.subVectors(i,n),Mg.subVectors(t,n);let r=xi.dot(xi),o=xi.dot(gs),l=xi.dot(Mg),c=gs.dot(gs),f=gs.dot(Mg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(c*l-o*f)*u,g=(r*f-o*l)*u;return a.set(1-p-g,g,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,_s)===null?!1:_s.x>=0&&_s.y>=0&&_s.x+_s.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,_s)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,_s.x),l.addScaledVector(r,_s.y),l.addScaledVector(o,_s.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Ag.setScalar(0),wg.setScalar(0),Cg.setScalar(0),Ag.fromBufferAttribute(t,n),wg.fromBufferAttribute(t,i),Cg.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ag,a.x),r.addScaledVector(wg,a.y),r.addScaledVector(Cg,a.z),r}static isFrontFacing(t,n,i,s){return xi.subVectors(i,n),gs.subVectors(t,n),xi.cross(gs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),xi.cross(gs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;_o.subVectors(s,i),vo.subVectors(a,i),bg.subVectors(t,i);let l=_o.dot(bg),c=vo.dot(bg);if(l<=0&&c<=0)return n.copy(i);Tg.subVectors(t,s);let f=_o.dot(Tg),d=vo.dot(Tg);if(f>=0&&d<=f)return n.copy(s);let u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(_o,r);Eg.subVectors(t,a);let p=_o.dot(Eg),g=vo.dot(Eg);if(g>=0&&p<=g)return n.copy(a);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(vo,o);let m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return fM.subVectors(a,s),o=(d-f)/(d-f+(p-g)),n.copy(s).addScaledVector(fM,o);let h=1/(m+x+u);return r=x*h,o=u*h,n.copy(i).addScaledVector(_o,r).addScaledVector(vo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ca={h:0,s:0,l:0},Sh={h:0,s:0,l:0};function Rg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=CA(t,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Rg(r,a,t+1/3),this.g=Rg(r,a,t),this.b=Rg(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=qn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){let i=fb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Jt.workingToColorSpace(fn.copy(this),t),Math.round(Wt(fn.r*255,0,255))*65536+Math.round(Wt(fn.g*255,0,255))*256+Math.round(Wt(fn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(fn.copy(this),n);let i=fn.r,s=fn.g,a=fn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(fn.copy(this),n),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=qn){Jt.workingToColorSpace(fn.copy(this),t);let n=fn.r,i=fn.g,s=fn.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ca),this.setHSL(ca.h+t,ca.s+n,ca.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ca),t.getHSL(Sh);let i=hg(ca.h,Sh.h,n),s=hg(ca.s,Sh.s,n),a=hg(ca.l,Sh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Kt;Kt.NAMES=fb;var FA=0,ma=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=bc(),this.name="",this.type="Material",this.blending=ja,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Ph,this.blendEquation=da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ih&&(i.blendSrc=this.blendSrc),this.blendDst!==Ph&&(i.blendDst=this.blendDst),this.blendEquation!==da&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ec=class extends ma{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new B,Mh=new Qt,HA=0,Yn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HA++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Fg,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mh.fromBufferAttribute(this,n),Mh.applyMatrix3(t),this.setXY(n,Mh.x,Mh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix3(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyMatrix4(t),this.setXYZ(n,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.applyNormalMatrix(t),this.setXYZ(n,He.x,He.y,He.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)He.fromBufferAttribute(this,n),He.transformDirection(t),this.setXYZ(n,He.x,He.y,He.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Gl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Nn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Gl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Gl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Gl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Gl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array),a=Nn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fg&&(t.usage=this.usage),t}};var nc=class extends Yn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ic=class extends Yn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Mi=class extends Yn{constructor(t,n,i){super(new Float32Array(t),n,i)}},VA=0,li=new Ne,Ng=new rn,yo=new B,Wn=new pa,ql=new pa,Qe=new B,Ti=class e extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=bc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?ic:nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return Ng.lookAt(t),Ng.updateMatrix(),this.applyMatrix4(Ng.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Mi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];ql.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Wn.min,ql.min),Wn.expandByPoint(Qe),Qe.addVectors(Wn.max,ql.max),Wn.expandByPoint(Qe)):(Wn.expandByPoint(ql.min),Wn.expandByPoint(ql.max))}Wn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)Qe.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Qe));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Qe.fromBufferAttribute(o,c),l&&(yo.fromBufferAttribute(t,c),Qe.add(yo)),s=Math.max(s,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;let c=new B,f=new B,d=new B,u=new Qt,p=new Qt,g=new Qt,x=new B,m=new B;function h(D,T,b){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),u.fromBufferAttribute(a,D),p.fromBufferAttribute(a,T),g.fromBufferAttribute(a,b),f.sub(c),d.sub(c),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(L),o[D].add(x),o[T].add(x),o[b].add(x),l[D].add(m),l[T].add(m),l[b].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,T=_.length;D<T;++D){let b=_[D],L=b.start,H=b.count;for(let k=L,Y=L+H;k<Y;k+=3)h(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new B,y=new B,A=new B,R=new B;function C(D){A.fromBufferAttribute(s,D),R.copy(A);let T=o[D];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(R,T);let L=y.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,L)}for(let D=0,T=_.length;D<T;++D){let b=_[D],L=b.start,H=b.count;for(let k=L,Y=L+H;k<Y;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new B,a=new B,r=new B,o=new B,l=new B,c=new B,f=new B,d=new B;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Qe.fromBufferAttribute(t,n),Qe.normalize(),t.setXYZ(n,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let h=0;h<f;h++)u[g++]=c[p++]}return new Yn(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let u=c[f],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dM=new Ne,Ka=new $l,bh=new er,pM=new B,Th=new B,Eh=new B,Ah=new B,Dg=new B,wh=new B,mM=new B,Ch=new B,ui=class extends rn{constructor(t=new Ti,n=new ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){wh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(Dg.fromBufferAttribute(d,t),r?wh.addScaledVector(Dg,f):wh.addScaledVector(Dg.sub(n),f))}n.add(wh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bh.copy(i.boundingSphere),bh.applyMatrix4(a),Ka.copy(t.ray).recast(t.near),!(bh.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(bh,pM)===null||Ka.origin.distanceToSquared(pM)>(t.far-t.near)**2))&&(dM.copy(a).invert(),Ka.copy(t.ray).applyMatrix4(dM),!(i.boundingBox!==null&&Ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ka)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let m=u[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let R=o.getX(y),C=o.getX(y+1),D=o.getX(y+2);s=Rh(this,h,t,i,c,f,d,R,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){let _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Rh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){let m=u[g],h=r[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,A=v;y<A;y+=3){let R=y,C=y+1,D=y+2;s=Rh(this,h,t,i,c,f,d,R,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){let _=m,v=m+1,y=m+2;s=Rh(this,r,t,i,c,f,d,_,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function GA(e,t,n,i,s,a,r,o){let l;if(t.side===Sn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===xs,o),l===null)return null;Ch.copy(o),Ch.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Ch);return c<n.near||c>n.far?null:{distance:c,point:Ch.clone(),object:e}}function Rh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Th),e.getVertexPosition(l,Eh),e.getVertexPosition(c,Ah);let f=GA(e,t,n,i,Th,Eh,Ah,mM);if(f){let d=new B;ha.getBarycoord(mM,Th,Eh,Ah,d),s&&(f.uv=ha.getInterpolatedAttribute(s,o,l,c,d,new Qt)),a&&(f.uv1=ha.getInterpolatedAttribute(a,o,l,c,d,new Qt)),r&&(f.normal=ha.getInterpolatedAttribute(r,o,l,c,d,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};ha.getNormal(Th,Eh,Ah,u.normal),f.face=u,f.barycoord=d}return f}var Ao=class e extends Ti{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],u=0,p=0;g("z","y","x",-1,-1,i,n,t,r,a,0),g("z","y","x",1,-1,i,n,-t,r,a,1),g("x","z","y",1,1,t,i,n,s,r,2),g("x","z","y",1,-1,t,i,-n,s,r,3),g("x","y","z",1,-1,t,n,i,s,a,4),g("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(f,3)),this.setAttribute("uv",new Mi(d,2));function g(x,m,h,_,v,y,A,R,C,D,T){let b=y/C,L=A/D,H=y/2,k=A/2,Y=R/2,J=C+1,q=D+1,it=0,V=0,ot=new B;for(let ht=0;ht<q;ht++){let Tt=ht*L-k;for(let Gt=0;Gt<J;Gt++){let pe=Gt*b-H;ot[x]=pe*_,ot[m]=Tt*v,ot[h]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[h]=R>0?1:-1,f.push(ot.x,ot.y,ot.z),d.push(Gt/C),d.push(1-ht/D),it+=1}}for(let ht=0;ht<D;ht++)for(let Tt=0;Tt<C;Tt++){let Gt=u+Tt+J*ht,pe=u+Tt+J*(ht+1),Me=u+(Tt+1)+J*(ht+1),ne=u+(Tt+1)+J*ht;l.push(Gt,pe,ne),l.push(pe,Me,ne),V+=6}o.addGroup(p,V,T),p+=V,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ar(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function pn(e){let t={};for(let n=0;n<e.length;n++){let i=ar(e[n]);for(let s in i)t[s]=i[s]}return t}function kA(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function o0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var db={clone:ar,merge:pn},XA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends ma{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XA,this.fragmentShader=WA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=kA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},sc=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ua=new B,gM=new Qt,_M=new Qt,dn=class extends sc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Hh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ug*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(ug*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ua.x,ua.y).multiplyScalar(-t/ua.z),ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ua.x,ua.y).multiplyScalar(-t/ua.z)}getViewSize(t,n){return this.getViewBounds(t,gM,_M),n.subVectors(_M,gM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(ug*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},xo=-90,So=1,Xh=class extends rn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(xo,So,t,n);s.layers=this.layers,this.add(s);let a=new dn(xo,So,t,n);a.layers=this.layers,this.add(a);let r=new dn(xo,So,t,n);r.layers=this.layers,this.add(r);let o=new dn(xo,So,t,n);o.layers=this.layers,this.add(o);let l=new dn(xo,So,t,n);l.layers=this.layers,this.add(l);let c=new dn(xo,So,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,u,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends Zn{constructor(t=[],n=ir,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wh=class extends Xi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ac(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ao(5,5,5),a=new Ei({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:bs});a.uniforms.tEquirect.value=n;let r=new ui(s,a),o=n.minFilter;return n.minFilter===va&&(n.minFilter=bi),new Xh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},vs=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qA={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var rc=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Ug=new B,YA=new B,ZA=new Bt,ki=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Ug.subVectors(i,n).cross(YA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Ug),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ZA.getNormalMatrix(t),s=this.coplanarPoint(Ug).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ja=new er,KA=new Qt(.5,.5),Nh=new B,Co=class{constructor(t=new ki,n=new ki,i=new ki,s=new ki,a=new ki,r=new ki){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Si,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],u=a[6],p=a[7],g=a[8],x=a[9],m=a[10],h=a[11],_=a[12],v=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-f,h-g,A-_).normalize(),s[1].setComponents(c+r,p+f,h+g,A+_).normalize(),s[2].setComponents(c+o,p+d,h+x,A+v).normalize(),s[3].setComponents(c-o,p-d,h-x,A-v).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,p-u,h-m,A-y).normalize();else if(s[4].setComponents(c-l,p-u,h-m,A-y).normalize(),n===Si)s[5].setComponents(c+l,p+u,h+m,A+y).normalize();else if(n===Jl)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ja.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(t){Ja.center.set(0,0,0);let n=KA.distanceTo(t.center);return Ja.radius=.7071067811865476+n,Ja.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Nh.x=s.normal.x>0?t.max.x:t.min.x,Nh.y=s.normal.y>0?t.max.y:t.min.y,Nh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ro=class extends ma{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qh=new B,Yh=new B,vM=new Ne,Yl=new $l,Dh=new er,Lg=new B,yM=new B,Zh=class extends rn{constructor(t=new Ti,n=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,a=n.count;s<a;s++)qh.fromBufferAttribute(n,s-1),Yh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=qh.distanceTo(Yh);t.setAttribute("lineDistance",new Mi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dh.copy(i.boundingSphere),Dh.applyMatrix4(s),Dh.radius+=a,t.ray.intersectsSphere(Dh)===!1)return;vM.copy(s).invert(),Yl.copy(t.ray).applyMatrix4(vM);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){let h=f.getX(x),_=f.getX(x+1),v=Uh(this,t,Yl,l,h,_,x);v&&n.push(v)}if(this.isLineLoop){let x=f.getX(g-1),m=f.getX(p),h=Uh(this,t,Yl,l,x,m,g-1);h&&n.push(h)}}else{let p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){let h=Uh(this,t,Yl,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){let x=Uh(this,t,Yl,l,g-1,p,g-1);x&&n.push(x)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Uh(e,t,n,i,s,a,r){let o=e.geometry.attributes.position;if(qh.fromBufferAttribute(o,s),Yh.fromBufferAttribute(o,a),n.distanceSqToSegment(qh,Yh,Lg,yM)>i)return;Lg.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Lg);if(!(c<t.near||c>t.far))return{distance:c,point:yM.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}var oc=class extends Zh{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}};var lc=class extends Zn{constructor(t,n,i=ya,s,a,r,o=ci,l=ci,c,f=bo,d=1){if(f!==bo&&f!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},cc=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Kh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){let i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){let n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),a=0;n.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),a+=i.distanceTo(s),n.push(a),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){let i=this.getLengths(),s=0,a=i.length,r;n?r=n:r=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let f=i[s],u=i[s+1]-f,p=(r-f)/u;return(s+p)/(a-1)}getTangent(t,n){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=n||(r.isVector2?new Qt:new B);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,n){let i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n=!1){let i=new B,s=[],a=[],r=[],o=new B,l=new Ne;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new B)}a[0]=new B,r[0]=new B;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Wt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(n===!0){let p=Math.acos(Wt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},uc=class extends Kh{constructor(t=0,n=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,n=new Qt){let i=n,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+t*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*f-p*d+this.aX,c=u*d+p*f+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}};var hc=class e extends Ti{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,u=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<f;h++){let _=h*u-r;for(let v=0;v<c;v++){let y=v*d-a;g.push(y,-_,0),x.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){let v=_+c*h,y=_+c*(h+1),A=_+1+c*(h+1),R=_+1+c*h;p.push(v,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new Mi(g,3)),this.setAttribute("normal",new Mi(x,3)),this.setAttribute("uv",new Mi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jh=class extends ma{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qh=class extends ma{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Lh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function JA(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var nr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jh=class extends nr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ig,endingEnd:Ig}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Pg:a=t,o=2*n-i;break;case Bg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pg:r=t,l=2*i-n;break;case Bg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-n)/(s-n),x=g*g,m=x*g,h=-u*m+2*u*x-u*g,_=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let A=0;A!==o;++A)a[A]=h*r[f+A]+_*r[c+A]+v*r[l+A]+y*r[d+A];return a}},$h=class extends nr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*d+r[l+u]*f;return a}},tf=class extends nr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Lh(n,this.TimeBufferType),this.values=Lh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Lh(t.times,Array),values:Lh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new tf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Zl:n=this.InterpolantFactoryMethodDiscrete;break;case Fh:n=this.InterpolantFactoryMethodLinear;break;case Oh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zl;case this.InterpolantFactoryMethodLinear:return Fh;case this.InterpolantFactoryMethodSmooth:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&JA(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){let x=n[d+g];if(x!==n[u+g]||x!==n[p+g]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,u=r*i;for(let p=0;p!==i;++p)n[u+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Fh;var ga=class extends Kn{constructor(t,n,i){super(t,n,i)}};ga.prototype.ValueTypeName="bool";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=Zl;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;var ef=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};ef.prototype.ValueTypeName="color";var nf=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};nf.prototype.ValueTypeName="number";var sf=class extends nr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Ms.slerpFlat(a,0,r,c-o,r,c,l);return a}},fc=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new sf(this.times,this.values,this.getValueSize(),t)}};fc.prototype.ValueTypeName="quaternion";fc.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Kn{constructor(t,n,i){super(t,n,i)}};_a.prototype.ValueTypeName="string";_a.prototype.ValueBufferType=Array;_a.prototype.DefaultInterpolation=Zl;_a.prototype.InterpolantFactoryMethodLinear=void 0;_a.prototype.InterpolantFactoryMethodSmooth=void 0;var af=class extends Kn{constructor(t,n,i,s){super(t,n,i,s)}};af.prototype.ValueTypeName="vector";var rf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},pb=new rf,of=class{constructor(t){this.manager=t!==void 0?t:pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};of.DEFAULT_MATERIAL_NAME="__DEFAULT";var dc=class extends rn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},pc=class extends dc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Og=new Ne,xM=new B,SM=new B,Hg=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;xM.setFromMatrixPosition(t.matrixWorld),n.position.copy(xM),SM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(SM),n.updateMatrixWorld(),Og.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Og,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Og)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mc=class extends sc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Vg=class extends Hg{constructor(){super(new mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gc=class extends dc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var lf=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var l0="\\[\\]\\.:\\/",QA=new RegExp("["+l0+"]","g"),c0="[^"+l0+"]",jA="[^"+l0.replace("\\.","")+"]",$A=/((?:WC+[\/:])*)/.source.replace("WC",c0),tw=/(WCOD+)?/.source.replace("WCOD",jA),ew=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",c0),nw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",c0),iw=new RegExp("^"+$A+tw+ew+nw+"$"),sw=["material","materials","bones","map"],Gg=class{constructor(t,n,i){let s=i||Se.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Se=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(QA,"")}static parseTrackName(t){let n=iw.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);sw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Gg;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j3=new Float32Array(1);function u0(e,t,n,i){let s=aw(i);switch(n){case t0:return e*t;case n0:return e*t/s.components*s.byteLength;case Mf:return e*t/s.components*s.byteLength;case i0:return e*t*2/s.components*s.byteLength;case bf:return e*t*2/s.components*s.byteLength;case e0:return e*t*3/s.components*s.byteLength;case hi:return e*t*4/s.components*s.byteLength;case Tf:return e*t*4/s.components*s.byteLength;case yc:case xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sc:case Mc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Af:case Cf:return Math.max(e,16)*Math.max(t,8)/4;case Ef:case wf:return Math.max(e,8)*Math.max(t,8)/2;case Rf:case Nf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Uf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Lf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Of:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case If:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Bf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case zf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ff:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Hf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Vf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Gf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case kf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Wf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case qf:case Yf:case Zf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Kf:case Jf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Qf:case jf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aw(e){switch(e){case Ai:case Jg:return{byteLength:1,components:1};case No:case Qg:case Do:return{byteLength:2,components:1};case xf:case Sf:return{byteLength:2,components:4};case ya:case yf:case Zi:return{byteLength:4,components:1};case jg:case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function ow(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var lw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cw=`#ifdef USE_ALPHAHASH
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
#endif`,uw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pw=`#ifdef USE_AOMAP
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
#endif`,mw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gw=`#ifdef USE_BATCHING
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
#endif`,_w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sw=`#ifdef USE_IRIDESCENCE
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
#endif`,Mw=`#ifdef USE_BUMPMAP
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
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ww=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dw=`#define PI 3.141592653589793
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
} // validated`,Uw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lw=`vec3 transformedNormal = objectNormal;
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
#endif`,Ow=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,kw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kw=`#ifdef USE_GRADIENTMAP
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
}`,Jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$w=`uniform bool receiveShadow;
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
#endif`,tC=`#ifdef USE_ENVMAP
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
#endif`,eC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aC=`PhysicalMaterial material;
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
#endif`,rC=`struct PhysicalMaterial {
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
}`,oC=`
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
#endif`,lC=`#if defined( RE_IndirectDiffuse )
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
#endif`,cC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_C=`#if defined( USE_POINTS_UV )
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
#endif`,vC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bC=`#ifdef USE_MORPHTARGETS
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
#endif`,TC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NC=`#ifdef USE_NORMALMAP
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
#endif`,DC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qC=`float getShadowMask() {
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
}`,YC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZC=`#ifdef USE_SKINNING
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
#endif`,KC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JC=`#ifdef USE_SKINNING
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
#endif`,QC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$C=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eR=`#ifdef USE_TRANSMISSION
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
#endif`,nR=`#ifdef USE_TRANSMISSION
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
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lR=`uniform sampler2D t2D;
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
}`,cR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`#include <common>
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
}`,pR=`#if DEPTH_PACKING == 3200
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
}`,mR=`#define DISTANCE
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
}`,gR=`#define DISTANCE
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
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`uniform float scale;
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
}`,xR=`uniform vec3 diffuse;
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
}`,SR=`#include <common>
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
}`,MR=`uniform vec3 diffuse;
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
}`,bR=`#define LAMBERT
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
}`,TR=`#define LAMBERT
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
}`,ER=`#define MATCAP
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
}`,AR=`#define MATCAP
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
}`,wR=`#define NORMAL
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
}`,CR=`#define NORMAL
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
}`,RR=`#define PHONG
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
}`,NR=`#define PHONG
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
}`,DR=`#define STANDARD
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
}`,UR=`#define STANDARD
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
}`,LR=`#define TOON
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
}`,OR=`#define TOON
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
}`,IR=`uniform float size;
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
}`,PR=`uniform vec3 diffuse;
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
}`,BR=`#include <common>
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
}`,zR=`uniform vec3 color;
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
}`,FR=`uniform float rotation;
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
}`,HR=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:lw,alphahash_pars_fragment:cw,alphamap_fragment:uw,alphamap_pars_fragment:hw,alphatest_fragment:fw,alphatest_pars_fragment:dw,aomap_fragment:pw,aomap_pars_fragment:mw,batching_pars_vertex:gw,batching_vertex:_w,begin_vertex:vw,beginnormal_vertex:yw,bsdfs:xw,iridescence_fragment:Sw,bumpmap_pars_fragment:Mw,clipping_planes_fragment:bw,clipping_planes_pars_fragment:Tw,clipping_planes_pars_vertex:Ew,clipping_planes_vertex:Aw,color_fragment:ww,color_pars_fragment:Cw,color_pars_vertex:Rw,color_vertex:Nw,common:Dw,cube_uv_reflection_fragment:Uw,defaultnormal_vertex:Lw,displacementmap_pars_vertex:Ow,displacementmap_vertex:Iw,emissivemap_fragment:Pw,emissivemap_pars_fragment:Bw,colorspace_fragment:zw,colorspace_pars_fragment:Fw,envmap_fragment:Hw,envmap_common_pars_fragment:Vw,envmap_pars_fragment:Gw,envmap_pars_vertex:kw,envmap_physical_pars_fragment:tC,envmap_vertex:Xw,fog_vertex:Ww,fog_pars_vertex:qw,fog_fragment:Yw,fog_pars_fragment:Zw,gradientmap_pars_fragment:Kw,lightmap_pars_fragment:Jw,lights_lambert_fragment:Qw,lights_lambert_pars_fragment:jw,lights_pars_begin:$w,lights_toon_fragment:eC,lights_toon_pars_fragment:nC,lights_phong_fragment:iC,lights_phong_pars_fragment:sC,lights_physical_fragment:aC,lights_physical_pars_fragment:rC,lights_fragment_begin:oC,lights_fragment_maps:lC,lights_fragment_end:cC,logdepthbuf_fragment:uC,logdepthbuf_pars_fragment:hC,logdepthbuf_pars_vertex:fC,logdepthbuf_vertex:dC,map_fragment:pC,map_pars_fragment:mC,map_particle_fragment:gC,map_particle_pars_fragment:_C,metalnessmap_fragment:vC,metalnessmap_pars_fragment:yC,morphinstance_vertex:xC,morphcolor_vertex:SC,morphnormal_vertex:MC,morphtarget_pars_vertex:bC,morphtarget_vertex:TC,normal_fragment_begin:EC,normal_fragment_maps:AC,normal_pars_fragment:wC,normal_pars_vertex:CC,normal_vertex:RC,normalmap_pars_fragment:NC,clearcoat_normal_fragment_begin:DC,clearcoat_normal_fragment_maps:UC,clearcoat_pars_fragment:LC,iridescence_pars_fragment:OC,opaque_fragment:IC,packing:PC,premultiplied_alpha_fragment:BC,project_vertex:zC,dithering_fragment:FC,dithering_pars_fragment:HC,roughnessmap_fragment:VC,roughnessmap_pars_fragment:GC,shadowmap_pars_fragment:kC,shadowmap_pars_vertex:XC,shadowmap_vertex:WC,shadowmask_pars_fragment:qC,skinbase_vertex:YC,skinning_pars_vertex:ZC,skinning_vertex:KC,skinnormal_vertex:JC,specularmap_fragment:QC,specularmap_pars_fragment:jC,tonemapping_fragment:$C,tonemapping_pars_fragment:tR,transmission_fragment:eR,transmission_pars_fragment:nR,uv_pars_fragment:iR,uv_pars_vertex:sR,uv_vertex:aR,worldpos_vertex:rR,background_vert:oR,background_frag:lR,backgroundCube_vert:cR,backgroundCube_frag:uR,cube_vert:hR,cube_frag:fR,depth_vert:dR,depth_frag:pR,distanceRGBA_vert:mR,distanceRGBA_frag:gR,equirect_vert:_R,equirect_frag:vR,linedashed_vert:yR,linedashed_frag:xR,meshbasic_vert:SR,meshbasic_frag:MR,meshlambert_vert:bR,meshlambert_frag:TR,meshmatcap_vert:ER,meshmatcap_frag:AR,meshnormal_vert:wR,meshnormal_frag:CR,meshphong_vert:RR,meshphong_frag:NR,meshphysical_vert:DR,meshphysical_frag:UR,meshtoon_vert:LR,meshtoon_frag:OR,points_vert:IR,points_frag:PR,shadow_vert:BR,shadow_frag:zR,sprite_vert:FR,sprite_frag:HR},rt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ki={basic:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:pn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:pn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:pn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:pn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:pn([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:pn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:pn([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:pn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:pn([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:pn([rt.common,rt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:pn([rt.lights,rt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ki.physical={uniforms:pn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var $f={r:0,b:0,g:0},rr=new Wi,VR=new Ne;function GR(e,t,n,i,s,a,r){let o=new Kt(0),l=a===!0?0:1,c,f,d=null,u=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function x(v){let y=!1,A=g(v);A===null?h(o,l):A&&A.isColor&&(h(A,1),y=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===_c)?(f===void 0&&(f=new ui(new Ao(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:ar(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),rr.copy(y.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),f.material.uniforms.envMap.value=A,f.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(VR.makeRotationFromEuler(rr)),f.material.toneMapped=Jt.getTransfer(A.colorSpace)!==le,(d!==A||u!==A.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=A,u=A.version,p=e.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ui(new hc(2,2),new Ei({name:"BackgroundMaterial",uniforms:ar(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==le,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB($f,o0(e)),i.buffers.color.setClear($f.r,$f.g,$f.b,y,r)}function _(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(o,l)},render:x,addToRenderList:m,dispose:_}}function kR(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(b,L,H,k,Y){let J=!1,q=d(k,H,L);a!==q&&(a=q,c(a.object)),J=p(b,k,H,Y),J&&g(b,k,H,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,y(b,L,H,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function f(b){return e.deleteVertexArray(b)}function d(b,L,H){let k=H.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let J=Y[L.id];J===void 0&&(J={},Y[L.id]=J);let q=J[k];return q===void 0&&(q=u(l()),J[k]=q),q}function u(b){let L=[],H=[],k=[];for(let Y=0;Y<n;Y++)L[Y]=0,H[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:k,object:b,attributes:{},index:null}}function p(b,L,H,k){let Y=a.attributes,J=L.attributes,q=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let ht=Y[V],Tt=J[V];if(Tt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(Tt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(Tt=b.instanceColor)),ht===void 0||ht.attribute!==Tt||Tt&&ht.data!==Tt.data)return!0;q++}return a.attributesNum!==q||a.index!==k}function g(b,L,H,k){let Y={},J=L.attributes,q=0,it=H.getAttributes();for(let V in it)if(it[V].location>=0){let ht=J[V];ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let Tt={};Tt.attribute=ht,ht&&ht.data&&(Tt.data=ht.data),Y[V]=Tt,q++}a.attributes=Y,a.attributesNum=q,a.index=k}function x(){let b=a.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function m(b){h(b,0)}function h(b,L){let H=a.newAttributes,k=a.enabledAttributes,Y=a.attributeDivisors;H[b]=1,k[b]===0&&(e.enableVertexAttribArray(b),k[b]=1),Y[b]!==L&&(e.vertexAttribDivisor(b,L),Y[b]=L)}function _(){let b=a.newAttributes,L=a.enabledAttributes;for(let H=0,k=L.length;H<k;H++)L[H]!==b[H]&&(e.disableVertexAttribArray(H),L[H]=0)}function v(b,L,H,k,Y,J,q){q===!0?e.vertexAttribIPointer(b,L,H,Y,J):e.vertexAttribPointer(b,L,H,k,Y,J)}function y(b,L,H,k){x();let Y=k.attributes,J=H.getAttributes(),q=L.defaultAttributeValues;for(let it in J){let V=J[it];if(V.location>=0){let ot=Y[it];if(ot===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),ot!==void 0){let ht=ot.normalized,Tt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;let pe=Gt.buffer,Me=Gt.type,ne=Gt.bytesPerElement,Z=Me===e.INT||Me===e.UNSIGNED_INT||ot.gpuType===yf;if(ot.isInterleavedBufferAttribute){let j=ot.data,pt=j.stride,Ut=ot.offset;if(j.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)h(V.location+bt,j.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let bt=0;bt<V.locationSize;bt++)v(V.location+bt,Tt/V.locationSize,Me,ht,pt*ne,(Ut+Tt/V.locationSize*bt)*ne,Z)}else{if(ot.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)h(V.location+j,ot.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let j=0;j<V.locationSize;j++)v(V.location+j,Tt/V.locationSize,Me,ht,Tt*ne,Tt/V.locationSize*j*ne,Z)}}else if(q!==void 0){let ht=q[it];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(V.location,ht);break;case 3:e.vertexAttrib3fv(V.location,ht);break;case 4:e.vertexAttrib4fv(V.location,ht);break;default:e.vertexAttrib1fv(V.location,ht)}}}}_()}function A(){D();for(let b in i){let L=i[b];for(let H in L){let k=L[H];for(let Y in k)f(k[Y].object),delete k[Y];delete L[H]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let H in L){let k=L[H];for(let Y in k)f(k[Y].object),delete k[Y];delete L[H]}delete i[b.id]}function C(b){for(let L in i){let H=i[L];if(H[b.id]===void 0)continue;let k=H[b.id];for(let Y in k)f(k[Y].object),delete k[Y];delete H[b.id]}}function D(){T(),r=!0,a!==s&&(a=s,c(a.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function XR(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],f[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x]*u[x];n.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function WR(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==hi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let D=C===Do&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ai&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Zi&&!D)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function qR(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ki,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=e.get(d);if(!s||g===null||g.length===0||a&&!m)a?f(null):c();else{let _=a?0:i,v=_*4,y=h.clippingState||null;l.value=y,y=f(g,u,v,p);for(let A=0;A!==v;++A)y[A]=n[A];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let h=p+x*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==x;++v,y+=4)r.copy(d[v]).applyMatrix4(_,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function YR(e){let t=new WeakMap;function n(r,o){return o===gf?r.mapping=ir:o===_f&&(r.mapping=sr),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===gf||o===_f)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Wh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var Io=4,mb=[.125,.215,.35,.446,.526,.582],cr=20,h0=new mc,gb=new Kt,f0=null,d0=0,p0=0,m0=!1,lr=(1+Math.sqrt(5))/2,Oo=1/lr,_b=[new B(-lr,Oo,0),new B(lr,Oo,0),new B(-Oo,0,lr),new B(Oo,0,lr),new B(0,lr,-Oo),new B(0,lr,Oo),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ZR=new B,nd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=ZR}=a;f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(f0,d0,p0),this._renderer.xr.enabled=m0,t.scissorTest=!1,td(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Do,format:hi,colorSpace:tr,depthBuffer:!1},s=vb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KR(a)),this._blurMaterial=JR(a,t,n)}return s}_compileMaterial(t){let n=new ui(this._lodPlanes[0],t);this._renderer.compile(n,h0)}_sceneToCubeUV(t,n,i,s,a){let l=new dn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(gb),d.toneMapping=Ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new ec({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),m=new ui(new Ao,x),h=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,h=!0):(x.color.copy(gb),h=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[v]));let A=this._cubeSize;td(s,y*A,v>2?A:0,A,A),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=_}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new ui(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;td(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,h0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=_b[(s-a-1)%_b.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new ui(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*cr-1),x=a/g,m=isFinite(a)?1+Math.floor(f*x):cr;m>cr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cr}`);let h=[],_=0;for(let C=0;C<cr;++C){let D=C/x,T=Math.exp(-D*D/2);h.push(T),C===0?_+=T:C<m&&(_+=2*T)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let y=this._sizeLods[s],A=3*y*(s>v-Io?s-v+Io:0),R=4*(this._cubeSize-y);td(n,A,R,3*y,2*y),l.setRenderTarget(n),l.render(d,h0)}};function KR(e){let t=[],n=[],i=[],s=e,a=e-Io+1+mb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-Io?l=mb[r-e+Io-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,x=3,m=2,h=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,D=R>2?0:-1,T=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(T,x*g*R),v.set(u,m*g*R);let b=[R,R,R,R,R,R];y.set(b,h*g*R)}let A=new Ti;A.setAttribute("position",new Yn(_,x)),A.setAttribute("uv",new Yn(v,m)),A.setAttribute("faceIndex",new Yn(y,h)),t.push(A),s>Io&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function vb(e,t,n){let i=new Xi(e,t,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function td(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function JR(e,t,n){let i=new Float32Array(cr),s=new B(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:E0(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function yb(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:E0(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function xb(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:E0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function E0(){return`

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
	`}function QR(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===gf||l===_f,f=l===ir||l===sr;if(c||f){let d=t.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return n===null&&(n=new nd(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new nd(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function jR(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $R(e,t,n,i){let s={},a=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];let p=a.get(u);p&&(t.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){let A=_[v+0],R=_[v+1],C=_[v+2];u.push(A,R,R,C,C,A)}}else if(g!==void 0){let _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let A=v+0,R=v+1,C=v+2;u.push(A,R,R,C,C,A)}}else return;let m=new(r0(u)?ic:nc)(u,1);m.version=x;let h=a.get(d);h&&t.remove(h),a.set(d,m)}function f(d){let u=a.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function t2(e,t,n){let i;function s(u){i=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function l(u,p){e.drawElements(i,p,a,u*r),n.update(p,i,1)}function c(u,p,g){g!==0&&(e.drawElementsInstanced(i,p,a,u*r,g),n.update(p,i,g))}function f(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,u,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(u,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<u.length;h++)c(u[h]/r,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,u,0,x,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*x[_];n.update(h,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function e2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function n2(e,t,n){let i=new WeakMap,s=new De;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*A*4*d),C=new jl(R,y,A,d);C.type=Zi,C.needsUpdate=!0;let D=v*4;for(let b=0;b<d;b++){let L=m[b],H=h[b],k=_[b],Y=y*A*4*b;for(let J=0;J<L.count;J++){let q=J*D;p===!0&&(s.fromBufferAttribute(L,J),R[Y+q+0]=s.x,R[Y+q+1]=s.y,R[Y+q+2]=s.z,R[Y+q+3]=0),g===!0&&(s.fromBufferAttribute(H,J),R[Y+q+4]=s.x,R[Y+q+5]=s.y,R[Y+q+6]=s.z,R[Y+q+7]=0),x===!0&&(s.fromBufferAttribute(k,J),R[Y+q+8]=s.x,R[Y+q+9]=s.y,R[Y+q+10]=s.z,R[Y+q+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Qt(y,A)},i.set(o,u),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function i2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Fb=new Zn,Sb=new lc(1,1),Hb=new jl,Vb=new kh,Gb=new ac,Mb=[],bb=[],Tb=new Float32Array(16),Eb=new Float32Array(9),Ab=new Float32Array(4);function Bo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=Mb[s];if(a===void 0&&(a=new Float32Array(s),Mb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Xe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function We(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function sd(e,t){let n=bb[t];n===void 0&&(n=new Int32Array(t),bb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function s2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function a2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2fv(this.addr,t),We(n,t)}}function r2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xe(n,t))return;e.uniform3fv(this.addr,t),We(n,t)}}function o2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4fv(this.addr,t),We(n,t)}}function l2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;Ab.set(i),e.uniformMatrix2fv(this.addr,!1,Ab),We(n,i)}}function c2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;Eb.set(i),e.uniformMatrix3fv(this.addr,!1,Eb),We(n,i)}}function u2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Xe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),We(n,t)}else{if(Xe(n,i))return;Tb.set(i),e.uniformMatrix4fv(this.addr,!1,Tb),We(n,i)}}function h2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function f2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2iv(this.addr,t),We(n,t)}}function d2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3iv(this.addr,t),We(n,t)}}function p2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4iv(this.addr,t),We(n,t)}}function m2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function g2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xe(n,t))return;e.uniform2uiv(this.addr,t),We(n,t)}}function _2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xe(n,t))return;e.uniform3uiv(this.addr,t),We(n,t)}}function v2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xe(n,t))return;e.uniform4uiv(this.addr,t),We(n,t)}}function y2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Sb.compareFunction=s0,a=Sb):a=Fb,n.setTexture2D(t||a,s)}function x2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Vb,s)}function S2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Gb,s)}function M2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Hb,s)}function b2(e){switch(e){case 5126:return s2;case 35664:return a2;case 35665:return r2;case 35666:return o2;case 35674:return l2;case 35675:return c2;case 35676:return u2;case 5124:case 35670:return h2;case 35667:case 35671:return f2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return M2}}function T2(e,t){e.uniform1fv(this.addr,t)}function E2(e,t){let n=Bo(t,this.size,2);e.uniform2fv(this.addr,n)}function A2(e,t){let n=Bo(t,this.size,3);e.uniform3fv(this.addr,n)}function w2(e,t){let n=Bo(t,this.size,4);e.uniform4fv(this.addr,n)}function C2(e,t){let n=Bo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function R2(e,t){let n=Bo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function N2(e,t){let n=Bo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function D2(e,t){e.uniform1iv(this.addr,t)}function U2(e,t){e.uniform2iv(this.addr,t)}function L2(e,t){e.uniform3iv(this.addr,t)}function O2(e,t){e.uniform4iv(this.addr,t)}function I2(e,t){e.uniform1uiv(this.addr,t)}function P2(e,t){e.uniform2uiv(this.addr,t)}function B2(e,t){e.uniform3uiv(this.addr,t)}function z2(e,t){e.uniform4uiv(this.addr,t)}function F2(e,t,n){let i=this.cache,s=t.length,a=sd(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Fb,a[r])}function H2(e,t,n){let i=this.cache,s=t.length,a=sd(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Vb,a[r])}function V2(e,t,n){let i=this.cache,s=t.length,a=sd(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Gb,a[r])}function G2(e,t,n){let i=this.cache,s=t.length,a=sd(n,s);Xe(i,a)||(e.uniform1iv(this.addr,a),We(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Hb,a[r])}function k2(e){switch(e){case 5126:return T2;case 35664:return E2;case 35665:return A2;case 35666:return w2;case 35674:return C2;case 35675:return R2;case 35676:return N2;case 5124:case 35670:return D2;case 35667:case 35671:return U2;case 35668:case 35672:return L2;case 35669:case 35673:return O2;case 5125:return I2;case 36294:return P2;case 36295:return B2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return G2}}var _0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=b2(n.type)}},v0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}},y0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},g0=/(\w+)(\])?(\[|\.)?/g;function wb(e,t){e.seq.push(t),e.map[t.id]=t}function X2(e,t,n){let i=e.name,s=i.length;for(g0.lastIndex=0;;){let a=g0.exec(i),r=g0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){wb(n,c===void 0?new _0(o,e,t):new v0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new y0(o),wb(n,d)),n=d}}}var Po=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);X2(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Cb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var W2=37297,q2=0;function Y2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Rb=new Bt;function Z2(e){Jt._getMatrix(Rb,Jt.workingColorSpace,e);let t=`mat3( ${Rb.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Kl:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Nb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+Y2(e.getShaderSource(t),o)}else return a}function K2(e,t){let n=Z2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function J2(e,t){let n;switch(t){case WM:n="Linear";break;case qM:n="Reinhard";break;case YM:n="Cineon";break;case ZM:n="ACESFilmic";break;case JM:n="AgX";break;case QM:n="Neutral";break;case KM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ed=new B;function Q2(){Jt.getLuminanceCoefficients(ed);let e=ed.x.toFixed(4),t=ed.y.toFixed(4),n=ed.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tc).join(`
`)}function $2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function t3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Tc(e){return e!==""}function Db(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ub(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var e3=/^[ \t]*#include +<([\w\d./]+)>/gm;function x0(e){return e.replace(e3,i3)}var n3=new Map;function i3(e,t){let n=Ht[t];if(n===void 0){let i=n3.get(t);if(i!==void 0)n=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return x0(n)}var s3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lb(e){return e.replace(s3,a3)}function a3(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ob(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function r3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Xg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===TM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function o3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case _c:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l3(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===sr&&(t="ENVMAP_MODE_REFRACTION"),t}function c3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Zg:t="ENVMAP_BLENDING_MULTIPLY";break;case kM:t="ENVMAP_BLENDING_MIX";break;case XM:t="ENVMAP_BLENDING_ADD";break}return t}function u3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function h3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=r3(n),c=o3(n),f=l3(n),d=c3(n),u=u3(n),p=j2(n),g=$2(a),x=s.createProgram(),m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Tc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Tc).join(`
`),h.length>0&&(h+=`
`)):(m=[Ob(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tc).join(`
`),h=[Ob(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Ts?J2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,K2("linearToOutputTexel",n.outputColorSpace),Q2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Tc).join(`
`)),r=x0(r),r=Db(r,n),r=Ub(r,n),o=x0(o),o=Db(o,n),o=Ub(o,n),r=Lb(r),o=Lb(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===a0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let v=_+m+r,y=_+h+o,A=Cb(s,s.VERTEX_SHADER,v),R=Cb(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(e.debug.checkShaderErrors){let H=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(R)||"",J=H.trim(),q=k.trim(),it=Y.trim(),V=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,R);else{let ht=Nb(s,A,"vertex"),Tt=Nb(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+ht+`
`+Tt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||it==="")&&(ot=!1);ot&&(L.diagnostics={runnable:V,programLog:J,vertexShader:{log:q,prefix:m},fragmentShader:{log:it,prefix:h}})}s.deleteShader(A),s.deleteShader(R),D=new Po(s,x),T=t3(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,W2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=q2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=R,this}var f3=0,S0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new M0(t),n.set(t,i)),i}},M0=class{constructor(t){this.id=f3++,this.code=t,this.usedTimes=0}};function d3(e,t,n,i,s,a,r){let o=new tc,l=new S0,c=new Set,f=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,L,H,k){let Y=H.fog,J=k.geometry,q=T.isMeshStandardMaterial?H.environment:null,it=(T.isMeshStandardMaterial?n:t).get(T.envMap||q),V=it&&it.mapping===_c?it.image.height:null,ot=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tt=ht!==void 0?ht.length:0,Gt=0;J.morphAttributes.position!==void 0&&(Gt=1),J.morphAttributes.normal!==void 0&&(Gt=2),J.morphAttributes.color!==void 0&&(Gt=3);let pe,Me,ne,Z;if(ot){let ie=Ki[ot];pe=ie.vertexShader,Me=ie.fragmentShader}else pe=T.vertexShader,Me=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);let j=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Zt=!!T.map,on=!!T.matcap,N=!!it,be=!!T.aoMap,It=!!T.lightMap,Nt=!!T.bumpMap,_t=!!T.normalMap,Te=!!T.displacementMap,vt=!!T.emissiveMap,Ft=!!T.metalnessMap,qe=!!T.roughnessMap,Ie=T.anisotropy>0,E=T.clearcoat>0,S=T.dispersion>0,P=T.iridescence>0,W=T.sheen>0,Q=T.transmission>0,G=Ie&&!!T.anisotropyMap,Mt=E&&!!T.clearcoatMap,st=E&&!!T.clearcoatNormalMap,yt=E&&!!T.clearcoatRoughnessMap,xt=P&&!!T.iridescenceMap,et=P&&!!T.iridescenceThicknessMap,ut=W&&!!T.sheenColorMap,Ct=W&&!!T.sheenRoughnessMap,St=!!T.specularMap,lt=!!T.specularColorMap,zt=!!T.specularIntensityMap,U=Q&&!!T.transmissionMap,nt=Q&&!!T.thicknessMap,at=!!T.gradientMap,dt=!!T.alphaMap,$=T.alphaTest>0,K=!!T.alphaHash,gt=!!T.extensions,Ot=Ts;T.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=e.toneMapping);let me={shaderID:ot,shaderType:T.type,shaderName:T.name,vertexShader:pe,fragmentShader:Me,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:on,envMap:N,envMapMode:N&&it.mapping,envMapCubeUVHeight:V,aoMap:be,lightMap:It,bumpMap:Nt,normalMap:_t,displacementMap:u&&Te,emissiveMap:vt,normalMapObjectSpace:_t&&T.normalMapType===nb,normalMapTangentSpace:_t&&T.normalMapType===eb,metalnessMap:Ft,roughnessMap:qe,anisotropy:Ie,anisotropyMap:G,clearcoat:E,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:S,iridescence:P,iridescenceMap:xt,iridescenceThicknessMap:et,sheen:W,sheenColorMap:ut,sheenRoughnessMap:Ct,specularMap:St,specularColorMap:lt,specularIntensityMap:zt,transmission:Q,transmissionMap:U,thicknessMap:nt,gradientMap:at,opaque:T.transparent===!1&&T.blending===ja&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:$,alphaHash:K,combine:T.combine,mapUv:Zt&&x(T.map.channel),aoMapUv:be&&x(T.aoMap.channel),lightMapUv:It&&x(T.lightMap.channel),bumpMapUv:Nt&&x(T.bumpMap.channel),normalMapUv:_t&&x(T.normalMap.channel),displacementMapUv:Te&&x(T.displacementMap.channel),emissiveMapUv:vt&&x(T.emissiveMap.channel),metalnessMapUv:Ft&&x(T.metalnessMap.channel),roughnessMapUv:qe&&x(T.roughnessMap.channel),anisotropyMapUv:G&&x(T.anisotropyMap.channel),clearcoatMapUv:Mt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(T.sheenRoughnessMap.channel),specularMapUv:St&&x(T.specularMap.channel),specularColorMapUv:lt&&x(T.specularColorMap.channel),specularIntensityMapUv:zt&&x(T.specularIntensityMap.channel),transmissionMapUv:U&&x(T.transmissionMap.channel),thicknessMapUv:nt&&x(T.thicknessMap.channel),alphaMapUv:dt&&x(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_t||Ie),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(Zt||dt),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Gt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===le,decodeVideoTextureEmissive:vt&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===le,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Yi,flipSided:T.side===Sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function h(T){let b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(let L in T.defines)b.push(L),b.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(b,T),v(b,T),b.push(e.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function _(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function v(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function y(T){let b=g[T.type],L;if(b){let H=Ki[b];L=db.clone(H.uniforms)}else L=T.uniforms;return L}function A(T,b){let L;for(let H=0,k=f.length;H<k;H++){let Y=f[H];if(Y.cacheKey===b){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new h3(e,b,T,a),f.push(L)),L}function R(T){if(--T.usedTimes===0){let b=f.indexOf(T);f[b]=f[f.length-1],f.pop(),T.destroy()}}function C(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:f,dispose:D}}function p3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function m3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Ib(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Pb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,u,p,g,x,m){let h=e[t];return h===void 0?(h={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},e[t]=h):(h.id=d.id,h.object=d,h.geometry=u,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),t++,h}function o(d,u,p,g,x,m){let h=r(d,u,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(d,u,p,g,x,m){let h=r(d,u,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(d,u){n.length>1&&n.sort(d||m3),i.length>1&&i.sort(u||Ib),s.length>1&&s.sort(u||Ib)}function f(){for(let d=t,u=e.length;d<u;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function g3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Pb,e.set(i,[r])):s>=a.length?(r=new Pb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function _3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Kt};break;case"SpotLight":n={position:new B,direction:new B,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":n={color:new Kt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function v3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var y3=0;function x3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function S3(e){let t=new _3,n=v3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,a=new Ne,r=new Ne;function o(c){let f=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,_=0,v=0,y=0,A=0,R=0,C=0;c.sort(x3);for(let T=0,b=c.length;T<b;T++){let L=c[T],H=L.color,k=L.intensity,Y=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=H.r*k,d+=H.g*k,u+=H.b*k;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],k);C++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,V=n.get(L);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(k),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[x]=q;let it=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,it.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[x]=it.matrix,L.castShadow){let V=n.get(L);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=J,y++}x++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(H).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=q,m++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let it=L.shadow,V=n.get(L);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,V.shadowCameraNear=it.camera.near,V.shadowCameraFar=it.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=q,g++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(k),q.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[h]=q,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==_||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=_,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=C,i.version=y3++)}function l(c,f){let d=0,u=0,p=0,g=0,x=0,m=f.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){let v=c[h];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Bb(e){let t=new S3(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function M3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Bb(e),t.set(s,[o])):a>=r.length?(o=new Bb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var b3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T3=`uniform sampler2D shadow_pass;
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
}`;function E3(e,t,n){let i=new Co,s=new Qt,a=new Qt,r=new De,o=new Jh({depthPacking:tb}),l=new Qh,c={},f=n.maxTextureSize,d={[xs]:Sn,[Sn]:xs,[Yi]:Yi},u=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:b3,fragmentShader:T3}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ti;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ui(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let h=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let T=e.getRenderTarget(),b=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),H=e.state;H.setBlending(bs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=h!==qi&&this.type===qi,Y=h===qi&&this.type!==qi;for(let J=0,q=R.length;J<q;J++){let it=R[J],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ot=V.getFrameExtents();if(s.multiply(ot),a.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/ot.x),s.x=a.x*ot.x,V.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/ot.y),s.y=a.y*ot.y,V.mapSize.y=a.y)),V.map===null||k===!0||Y===!0){let Tt=this.type!==qi?{minFilter:ci,magFilter:ci}:{};V.map!==null&&V.map.dispose(),V.map=new Xi(s.x,s.y,Tt),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let ht=V.getViewportCount();for(let Tt=0;Tt<ht;Tt++){let Gt=V.getViewport(Tt);r.set(a.x*Gt.x,a.y*Gt.y,a.x*Gt.z,a.y*Gt.w),H.viewport(r),V.updateMatrices(it,Tt),i=V.getFrustum(),y(C,D,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===qi&&_(V,D),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(T,b,L)};function _(R,C){let D=t.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(C,null,D,u,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(C,null,D,p,x,null)}function v(R,C,D,T){let b=null,L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)b=L;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=b.uuid,k=C.uuid,Y=c[H];Y===void 0&&(Y={},c[H]=Y);let J=Y[k];J===void 0&&(J=b.clone(),Y[k]=J,C.addEventListener("dispose",A)),b=J}if(b.visible=C.visible,b.wireframe=C.wireframe,T===qi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=e.properties.get(b);H.light=D}return b}function y(R,C,D,T,b){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===qi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let k=t.update(R),Y=R.material;if(Array.isArray(Y)){let J=k.groups;for(let q=0,it=J.length;q<it;q++){let V=J[q],ot=Y[V.materialIndex];if(ot&&ot.visible){let ht=v(R,ot,T,b);R.onBeforeShadow(e,R,C,D,k,ht,V),e.renderBufferDirect(D,null,k,ht,R,V),R.onAfterShadow(e,R,C,D,k,ht,V)}}}else if(Y.visible){let J=v(R,Y,T,b);R.onBeforeShadow(e,R,C,D,k,J,null),e.renderBufferDirect(D,null,k,J,R,null),R.onAfterShadow(e,R,C,D,k,J,null)}}let H=R.children;for(let k=0,Y=H.length;k<Y;k++)y(H[k],C,D,T,b)}function A(R){R.target.removeEventListener("dispose",A);for(let D in c){let T=c[D],b=R.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}var A3={[cf]:uf,[hf]:pf,[ff]:mf,[$a]:df,[uf]:cf,[pf]:hf,[mf]:ff,[df]:$a};function w3(e,t){function n(){let U=!1,nt=new De,at=null,dt=new De(0,0,0,0);return{setMask:function($){at!==$&&!U&&(e.colorMask($,$,$,$),at=$)},setLocked:function($){U=$},setClear:function($,K,gt,Ot,me){me===!0&&($*=Ot,K*=Ot,gt*=Ot),nt.set($,K,gt,Ot),dt.equals(nt)===!1&&(e.clearColor($,K,gt,Ot),dt.copy(nt))},reset:function(){U=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let U=!1,nt=!1,at=null,dt=null,$=null;return{setReversed:function(K){if(nt!==K){let gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=K;let Ot=$;$=null,this.setClear(Ot)}},getReversed:function(){return nt},setTest:function(K){K?j(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(K){at!==K&&!U&&(e.depthMask(K),at=K)},setFunc:function(K){if(nt&&(K=A3[K]),dt!==K){switch(K){case cf:e.depthFunc(e.NEVER);break;case uf:e.depthFunc(e.ALWAYS);break;case hf:e.depthFunc(e.LESS);break;case $a:e.depthFunc(e.LEQUAL);break;case ff:e.depthFunc(e.EQUAL);break;case df:e.depthFunc(e.GEQUAL);break;case pf:e.depthFunc(e.GREATER);break;case mf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=K}},setLocked:function(K){U=K},setClear:function(K){$!==K&&(nt&&(K=1-K),e.clearDepth(K),$=K)},reset:function(){U=!1,at=null,dt=null,$=null,nt=!1}}}function s(){let U=!1,nt=null,at=null,dt=null,$=null,K=null,gt=null,Ot=null,me=null;return{setTest:function(ie){U||(ie?j(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ie){nt!==ie&&!U&&(e.stencilMask(ie),nt=ie)},setFunc:function(ie,Ji,wi){(at!==ie||dt!==Ji||$!==wi)&&(e.stencilFunc(ie,Ji,wi),at=ie,dt=Ji,$=wi)},setOp:function(ie,Ji,wi){(K!==ie||gt!==Ji||Ot!==wi)&&(e.stencilOp(ie,Ji,wi),K=ie,gt=Ji,Ot=wi)},setLocked:function(ie){U=ie},setClear:function(ie){me!==ie&&(e.clearStencil(ie),me=ie)},reset:function(){U=!1,nt=null,at=null,dt=null,$=null,K=null,gt=null,Ot=null,me=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,h=null,_=null,v=null,y=null,A=null,R=null,C=new Kt(0,0,0),D=0,T=!1,b=null,L=null,H=null,k=null,Y=null,J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=it>=2);let ot=null,ht={},Tt=e.getParameter(e.SCISSOR_BOX),Gt=e.getParameter(e.VIEWPORT),pe=new De().fromArray(Tt),Me=new De().fromArray(Gt);function ne(U,nt,at,dt){let $=new Uint8Array(4),K=e.createTexture();e.bindTexture(U,K),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<at;gt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(nt+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return K}let Z={};Z[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),j(e.DEPTH_TEST),r.setFunc($a),Nt(!1),_t(kg),j(e.CULL_FACE),be(bs);function j(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function pt(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function Ut(U,nt){return d[U]!==nt?(e.bindFramebuffer(U,nt),d[U]=nt,U===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=nt),U===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function bt(U,nt){let at=p,dt=!1;if(U){at=u.get(nt),at===void 0&&(at=[],u.set(nt,at));let $=U.textures;if(at.length!==$.length||at[0]!==e.COLOR_ATTACHMENT0){for(let K=0,gt=$.length;K<gt;K++)at[K]=e.COLOR_ATTACHMENT0+K;at.length=$.length,dt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,dt=!0);dt&&e.drawBuffers(at)}function Zt(U){return g!==U?(e.useProgram(U),g=U,!0):!1}let on={[da]:e.FUNC_ADD,[AM]:e.FUNC_SUBTRACT,[wM]:e.FUNC_REVERSE_SUBTRACT};on[CM]=e.MIN,on[RM]=e.MAX;let N={[NM]:e.ZERO,[DM]:e.ONE,[UM]:e.SRC_COLOR,[Ih]:e.SRC_ALPHA,[zM]:e.SRC_ALPHA_SATURATE,[PM]:e.DST_COLOR,[OM]:e.DST_ALPHA,[LM]:e.ONE_MINUS_SRC_COLOR,[Ph]:e.ONE_MINUS_SRC_ALPHA,[BM]:e.ONE_MINUS_DST_COLOR,[IM]:e.ONE_MINUS_DST_ALPHA,[FM]:e.CONSTANT_COLOR,[HM]:e.ONE_MINUS_CONSTANT_COLOR,[VM]:e.CONSTANT_ALPHA,[GM]:e.ONE_MINUS_CONSTANT_ALPHA};function be(U,nt,at,dt,$,K,gt,Ot,me,ie){if(U===bs){x===!0&&(pt(e.BLEND),x=!1);return}if(x===!1&&(j(e.BLEND),x=!0),U!==EM){if(U!==m||ie!==T){if((h!==da||y!==da)&&(e.blendEquation(e.FUNC_ADD),h=da,y=da),ie)switch(U){case ja:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wg:e.blendFunc(e.ONE,e.ONE);break;case qg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Yg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ja:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Wg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case qg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,v=null,A=null,R=null,C.set(0,0,0),D=0,m=U,T=ie}return}$=$||nt,K=K||at,gt=gt||dt,(nt!==h||$!==y)&&(e.blendEquationSeparate(on[nt],on[$]),h=nt,y=$),(at!==_||dt!==v||K!==A||gt!==R)&&(e.blendFuncSeparate(N[at],N[dt],N[K],N[gt]),_=at,v=dt,A=K,R=gt),(Ot.equals(C)===!1||me!==D)&&(e.blendColor(Ot.r,Ot.g,Ot.b,me),C.copy(Ot),D=me),m=U,T=!1}function It(U,nt){U.side===Yi?pt(e.CULL_FACE):j(e.CULL_FACE);let at=U.side===Sn;nt&&(at=!at),Nt(at),U.blending===ja&&U.transparent===!1?be(bs):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let dt=U.stencilWrite;o.setTest(dt),dt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),vt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(U){b!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),b=U)}function _t(U){U!==MM?(j(e.CULL_FACE),U!==L&&(U===kg?e.cullFace(e.BACK):U===bM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),L=U}function Te(U){U!==H&&(q&&e.lineWidth(U),H=U)}function vt(U,nt,at){U?(j(e.POLYGON_OFFSET_FILL),(k!==nt||Y!==at)&&(e.polygonOffset(nt,at),k=nt,Y=at)):pt(e.POLYGON_OFFSET_FILL)}function Ft(U){U?j(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function qe(U){U===void 0&&(U=e.TEXTURE0+J-1),ot!==U&&(e.activeTexture(U),ot=U)}function Ie(U,nt,at){at===void 0&&(ot===null?at=e.TEXTURE0+J-1:at=ot);let dt=ht[at];dt===void 0&&(dt={type:void 0,texture:void 0},ht[at]=dt),(dt.type!==U||dt.texture!==nt)&&(ot!==at&&(e.activeTexture(at),ot=at),e.bindTexture(U,nt||Z[U]),dt.type=U,dt.texture=nt)}function E(){let U=ht[ot];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{e.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{e.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{e.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{e.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{e.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{e.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(U){pe.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Ct(U){Me.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Me.copy(U))}function St(U,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let dt=at.get(U);dt===void 0&&(dt=e.getUniformBlockIndex(nt,U.name),at.set(U,dt))}function lt(U,nt){let dt=c.get(nt).get(U);l.get(nt)!==dt&&(e.uniformBlockBinding(nt,dt,U.__bindingPointIndex),l.set(nt,dt))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},ot=null,ht={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,h=null,_=null,v=null,y=null,A=null,R=null,C=new Kt(0,0,0),D=0,T=!1,b=null,L=null,H=null,k=null,Y=null,pe.set(0,0,e.canvas.width,e.canvas.height),Me.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:j,disable:pt,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Zt,setBlending:be,setMaterial:It,setFlipSided:Nt,setCullFace:_t,setLineWidth:Te,setPolygonOffset:vt,setScissorTest:Ft,activeTexture:qe,bindTexture:Ie,unbindTexture:E,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:xt,texImage3D:et,updateUBOMapping:St,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:yt,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:G,compressedTexSubImage3D:Mt,scissor:ut,viewport:Ct,reset:zt}}function C3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qt,f=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return p?new OffscreenCanvas(E,S):Ql("canvas")}function x(E,S,P){let W=1,Q=Ie(E);if((Q.width>P||Q.height>P)&&(W=P/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let G=Math.floor(W*Q.width),Mt=Math.floor(W*Q.height);d===void 0&&(d=g(G,Mt));let st=S?g(G,Mt):d;return st.width=G,st.height=Mt,st.getContext("2d").drawImage(E,0,0,G,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+Mt+")."),st}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){e.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(E,S,P,W,Q=!1){if(E!==null){if(e[E]!==void 0)return e[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=S;if(S===e.RED&&(P===e.FLOAT&&(G=e.R32F),P===e.HALF_FLOAT&&(G=e.R16F),P===e.UNSIGNED_BYTE&&(G=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.R8UI),P===e.UNSIGNED_SHORT&&(G=e.R16UI),P===e.UNSIGNED_INT&&(G=e.R32UI),P===e.BYTE&&(G=e.R8I),P===e.SHORT&&(G=e.R16I),P===e.INT&&(G=e.R32I)),S===e.RG&&(P===e.FLOAT&&(G=e.RG32F),P===e.HALF_FLOAT&&(G=e.RG16F),P===e.UNSIGNED_BYTE&&(G=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RG8UI),P===e.UNSIGNED_SHORT&&(G=e.RG16UI),P===e.UNSIGNED_INT&&(G=e.RG32UI),P===e.BYTE&&(G=e.RG8I),P===e.SHORT&&(G=e.RG16I),P===e.INT&&(G=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RGB8UI),P===e.UNSIGNED_SHORT&&(G=e.RGB16UI),P===e.UNSIGNED_INT&&(G=e.RGB32UI),P===e.BYTE&&(G=e.RGB8I),P===e.SHORT&&(G=e.RGB16I),P===e.INT&&(G=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(G=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(G=e.RGBA16UI),P===e.UNSIGNED_INT&&(G=e.RGBA32UI),P===e.BYTE&&(G=e.RGBA8I),P===e.SHORT&&(G=e.RGBA16I),P===e.INT&&(G=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(G=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(G=e.R11F_G11F_B10F)),S===e.RGBA){let Mt=Q?Kl:Jt.getTransfer(W);P===e.FLOAT&&(G=e.RGBA32F),P===e.HALF_FLOAT&&(G=e.RGBA16F),P===e.UNSIGNED_BYTE&&(G=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(G=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(G=e.RGB5_A1)}return(G===e.R16F||G===e.R32F||G===e.RG16F||G===e.RG32F||G===e.RGBA16F||G===e.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function y(E,S){let P;return E?S===null||S===ya||S===Uo?P=e.DEPTH24_STENCIL8:S===Zi?P=e.DEPTH32F_STENCIL8:S===No&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ya||S===Uo?P=e.DEPTH_COMPONENT24:S===Zi?P=e.DEPTH_COMPONENT32F:S===No&&(P=e.DEPTH_COMPONENT16),P}function A(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ci&&E.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){let S=E.target;S.removeEventListener("dispose",R),D(S),S.isVideoTexture&&f.delete(S)}function C(E){let S=E.target;S.removeEventListener("dispose",C),b(S)}function D(E){let S=i.get(E);if(S.__webglInit===void 0)return;let P=E.source,W=u.get(P);if(W){let Q=W[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(W).length===0&&u.delete(P)}i.remove(E)}function T(E){let S=i.get(E);e.deleteTexture(S.__webglTexture);let P=E.source,W=u.get(P);delete W[S.__cacheKey],r.memory.textures--}function b(E){let S=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let Q=0;Q<S.__webglFramebuffer[W].length;Q++)e.deleteFramebuffer(S.__webglFramebuffer[W][Q]);else e.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)e.deleteFramebuffer(S.__webglFramebuffer[W]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=E.textures;for(let W=0,Q=P.length;W<Q;W++){let G=i.get(P[W]);G.__webglTexture&&(e.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(P[W])}i.remove(E)}let L=0;function H(){L=0}function k(){let E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function Y(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function J(E,S){let P=i.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&P.__version!==E.version){let W=E.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(P,E,S);return}}else E.isExternalTexture&&(P.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function q(E,S){let P=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){Z(P,E,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function it(E,S){let P=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&P.__version!==E.version){Z(P,E,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function V(E,S){let P=i.get(E);if(E.version>0&&P.__version!==E.version){j(P,E,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let ot={[Bh]:e.REPEAT,[fa]:e.CLAMP_TO_EDGE,[zh]:e.MIRRORED_REPEAT},ht={[ci]:e.NEAREST,[jM]:e.NEAREST_MIPMAP_NEAREST,[vc]:e.NEAREST_MIPMAP_LINEAR,[bi]:e.LINEAR,[vf]:e.LINEAR_MIPMAP_NEAREST,[va]:e.LINEAR_MIPMAP_LINEAR},Tt={[ib]:e.NEVER,[cb]:e.ALWAYS,[sb]:e.LESS,[s0]:e.LEQUAL,[ab]:e.EQUAL,[lb]:e.GEQUAL,[rb]:e.GREATER,[ob]:e.NOTEQUAL};function Gt(E,S){if(S.type===Zi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===vf||S.magFilter===vc||S.magFilter===va||S.minFilter===bi||S.minFilter===vf||S.minFilter===vc||S.minFilter===va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,ot[S.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,ot[S.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,ot[S.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ht[S.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Tt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ci||S.minFilter!==vc&&S.minFilter!==va||S.type===Zi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(E,S){let P=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",R));let W=S.source,Q=u.get(W);Q===void 0&&(Q={},u.set(W,Q));let G=Y(S);if(G!==E.__cacheKey){Q[G]===void 0&&(Q[G]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),Q[G].usedTimes++;let Mt=Q[E.__cacheKey];Mt!==void 0&&(Q[E.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(S)),E.__cacheKey=G,E.__webglTexture=Q[G].texture}return P}function Me(E,S,P){return Math.floor(Math.floor(E/P)/S)}function ne(E,S,P,W){let G=E.updateRanges;if(G.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,W,S.data);else{G.sort((et,ut)=>et.start-ut.start);let Mt=0;for(let et=1;et<G.length;et++){let ut=G[Mt],Ct=G[et],St=ut.start+ut.count,lt=Me(Ct.start,S.width,4),zt=Me(ut.start,S.width,4);Ct.start<=St+1&&lt===zt&&Me(Ct.start+Ct.count-1,S.width,4)===lt?ut.count=Math.max(ut.count,Ct.start+Ct.count-ut.start):(++Mt,G[Mt]=Ct)}G.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),yt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let et=0,ut=G.length;et<ut;et++){let Ct=G[et],St=Math.floor(Ct.start/4),lt=Math.ceil(Ct.count/4),zt=St%S.width,U=Math.floor(St/S.width),nt=lt,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,zt,U,nt,at,P,W,S.data)}E.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Z(E,S,P){let W=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=e.TEXTURE_3D);let Q=pe(E,S),G=S.source;n.bindTexture(W,E.__webglTexture,e.TEXTURE0+P);let Mt=i.get(G);if(G.version!==Mt.__version||Q===!0){n.activeTexture(e.TEXTURE0+P);let st=Jt.getPrimaries(Jt.workingColorSpace),yt=S.colorSpace===Es?null:Jt.getPrimaries(S.colorSpace),xt=S.colorSpace===Es||st===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let et=x(S.image,!1,s.maxTextureSize);et=qe(S,et);let ut=a.convert(S.format,S.colorSpace),Ct=a.convert(S.type),St=v(S.internalFormat,ut,Ct,S.colorSpace,S.isVideoTexture);Gt(W,S);let lt,zt=S.mipmaps,U=S.isVideoTexture!==!0,nt=Mt.__version===void 0||Q===!0,at=G.dataReady,dt=A(S,et);if(S.isDepthTexture)St=y(S.format===Lo,S.type),nt&&(U?n.texStorage2D(e.TEXTURE_2D,1,St,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,St,et.width,et.height,0,ut,Ct,null));else if(S.isDataTexture)if(zt.length>0){U&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let $=0,K=zt.length;$<K;$++)lt=zt[$],U?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Ct,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Ct,lt.data);S.generateMipmaps=!1}else U?(nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,et.width,et.height),at&&ne(S,et,ut,Ct)):n.texImage2D(e.TEXTURE_2D,0,St,et.width,et.height,0,ut,Ct,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,zt[0].width,zt[0].height,et.depth);for(let $=0,K=zt.length;$<K;$++)if(lt=zt[$],S.format!==hi)if(ut!==null)if(U){if(at)if(S.layerUpdates.size>0){let gt=u0(lt.width,lt.height,S.format,S.type);for(let Ot of S.layerUpdates){let me=lt.data.subarray(Ot*gt/lt.data.BYTES_PER_ELEMENT,(Ot+1)*gt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,Ot,lt.width,lt.height,1,ut,me)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,et.depth,ut,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,lt.width,lt.height,et.depth,ut,Ct,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,$,St,lt.width,lt.height,et.depth,0,ut,Ct,lt.data)}else{U&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,St,zt[0].width,zt[0].height);for(let $=0,K=zt.length;$<K;$++)lt=zt[$],S.format!==hi?ut!==null?U?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,lt.width,lt.height,ut,Ct,lt.data):n.texImage2D(e.TEXTURE_2D,$,St,lt.width,lt.height,0,ut,Ct,lt.data)}else if(S.isDataArrayTexture)if(U){if(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,et.width,et.height,et.depth),at)if(S.layerUpdates.size>0){let $=u0(et.width,et.height,S.format,S.type);for(let K of S.layerUpdates){let gt=et.data.subarray(K*$/et.data.BYTES_PER_ELEMENT,(K+1)*$/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ut,Ct,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isData3DTexture)U?(nt&&n.texStorage3D(e.TEXTURE_3D,dt,St,et.width,et.height,et.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)):n.texImage3D(e.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isFramebufferTexture){if(nt)if(U)n.texStorage2D(e.TEXTURE_2D,dt,St,et.width,et.height);else{let $=et.width,K=et.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,St,$,K,0,ut,Ct,null),$>>=1,K>>=1}}else if(zt.length>0){if(U&&nt){let $=Ie(zt[0]);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}for(let $=0,K=zt.length;$<K;$++)lt=zt[$],U?at&&n.texSubImage2D(e.TEXTURE_2D,$,0,0,ut,Ct,lt):n.texImage2D(e.TEXTURE_2D,$,St,ut,Ct,lt);S.generateMipmaps=!1}else if(U){if(nt){let $=Ie(et);n.texStorage2D(e.TEXTURE_2D,dt,St,$.width,$.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Ct,et)}else n.texImage2D(e.TEXTURE_2D,0,St,ut,Ct,et);m(S)&&h(W),Mt.__version=G.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function j(E,S,P){if(S.image.length!==6)return;let W=pe(E,S),Q=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+P);let G=i.get(Q);if(Q.version!==G.__version||W===!0){n.activeTexture(e.TEXTURE0+P);let Mt=Jt.getPrimaries(Jt.workingColorSpace),st=S.colorSpace===Es?null:Jt.getPrimaries(S.colorSpace),yt=S.colorSpace===Es||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let xt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!xt&&!et?ut[K]=x(S.image[K],!0,s.maxCubemapSize):ut[K]=et?S.image[K].image:S.image[K],ut[K]=qe(S,ut[K]);let Ct=ut[0],St=a.convert(S.format,S.colorSpace),lt=a.convert(S.type),zt=v(S.internalFormat,St,lt,S.colorSpace),U=S.isVideoTexture!==!0,nt=G.__version===void 0||W===!0,at=Q.dataReady,dt=A(S,Ct);Gt(e.TEXTURE_CUBE_MAP,S);let $;if(xt){U&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,Ct.width,Ct.height);for(let K=0;K<6;K++){$=ut[K].mipmaps;for(let gt=0;gt<$.length;gt++){let Ot=$[gt];S.format!==hi?St!==null?U?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ot.width,Ot.height,St,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ot.width,Ot.height,St,lt,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,zt,Ot.width,Ot.height,0,St,lt,Ot.data)}}}else{if($=S.mipmaps,U&&nt){$.length>0&&dt++;let K=Ie(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,K.width,K.height)}for(let K=0;K<6;K++)if(et){U?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,St,lt,ut[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,ut[K].width,ut[K].height,0,St,lt,ut[K].data);for(let gt=0;gt<$.length;gt++){let me=$[gt].image[K].image;U?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,me.width,me.height,St,lt,me.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,zt,me.width,me.height,0,St,lt,me.data)}}else{U?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,lt,ut[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,St,lt,ut[K]);for(let gt=0;gt<$.length;gt++){let Ot=$[gt];U?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,St,lt,Ot.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,zt,St,lt,Ot.image[K])}}}m(S)&&h(e.TEXTURE_CUBE_MAP),G.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function pt(E,S,P,W,Q,G){let Mt=a.convert(P.format,P.colorSpace),st=a.convert(P.type),yt=v(P.internalFormat,Mt,st,P.colorSpace),xt=i.get(S),et=i.get(P);if(et.__renderTarget=S,!xt.__hasExternalTextures){let ut=Math.max(1,S.width>>G),Ct=Math.max(1,S.height>>G);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,G,yt,ut,Ct,S.depth,0,Mt,st,null):n.texImage2D(Q,G,yt,ut,Ct,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,Q,et.__webglTexture,0,Te(S)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,Q,et.__webglTexture,G),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(E,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,E),S.depthBuffer){let W=S.depthTexture,Q=W&&W.isDepthTexture?W.type:null,G=y(S.stencilBuffer,Q),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=Te(S);vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,G,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,G,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,G,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,E)}else{let W=S.textures;for(let Q=0;Q<W.length;Q++){let G=W[Q],Mt=a.convert(G.format,G.colorSpace),st=a.convert(G.type),yt=v(G.internalFormat,Mt,st,G.colorSpace),xt=Te(S);P&&vt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,yt,S.width,S.height):vt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,yt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,yt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(S.depthTexture);W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let Q=W.__webglTexture,G=Te(S);if(S.depthTexture.format===bo)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Lo)vt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,G):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Zt(E){let S=i.get(E),P=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=W}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let W=E.texture.mipmaps;W&&W.length>0?bt(S.__webglFramebuffer[0],E):bt(S.__webglFramebuffer,E)}else if(P){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=e.createRenderbuffer(),Ut(S.__webglDepthbuffer[W],E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ut(S.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,G=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,G),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,G)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function on(E,S,P){let W=i.get(E);S!==void 0&&pt(W.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Zt(E)}function N(E){let S=E.texture,P=i.get(E),W=i.get(S);E.addEventListener("dispose",C);let Q=E.textures,G=E.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=S.version,r.memory.textures++),G){P.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[st]=[];for(let yt=0;yt<S.mipmaps.length;yt++)P.__webglFramebuffer[st][yt]=e.createFramebuffer()}else P.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)P.__webglFramebuffer[st]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,yt=Q.length;st<yt;st++){let xt=i.get(Q[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(E.samples>0&&vt(E)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){let yt=Q[st];P.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[st]);let xt=a.convert(yt.format,yt.colorSpace),et=a.convert(yt.type),ut=v(yt.internalFormat,xt,et,yt.colorSpace,E.isXRRenderTarget===!0),Ct=Te(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ut,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,P.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(P.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(G){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(P.__webglFramebuffer[st][yt],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else pt(P.__webglFramebuffer[st],E,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&h(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,yt=Q.length;st<yt;st++){let xt=Q[st],et=i.get(xt),ut=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,et.__webglTexture),Gt(ut,xt),pt(P.__webglFramebuffer,E,xt,e.COLOR_ATTACHMENT0+st,ut,0),m(xt)&&h(ut)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,W.__webglTexture),Gt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(P.__webglFramebuffer[yt],E,S,e.COLOR_ATTACHMENT0,st,yt);else pt(P.__webglFramebuffer,E,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&h(st),n.unbindTexture()}E.depthBuffer&&Zt(E)}function be(E){let S=E.textures;for(let P=0,W=S.length;P<W;P++){let Q=S[P];if(m(Q)){let G=_(E),Mt=i.get(Q).__webglTexture;n.bindTexture(G,Mt),h(G),n.unbindTexture()}}}let It=[],Nt=[];function _t(E){if(E.samples>0){if(vt(E)===!1){let S=E.textures,P=E.width,W=E.height,Q=e.COLOR_BUFFER_BIT,G=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(E),st=S.length>1;if(st)for(let xt=0;xt<S.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let yt=E.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let et=i.get(S[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,et,0)}e.blitFramebuffer(0,0,P,W,0,0,P,W,Q,e.NEAREST),l===!0&&(It.length=0,Nt.length=0,It.push(e.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(It.push(G),Nt.push(G),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Nt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<S.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let et=i.get(S[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let S=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Te(E){return Math.min(s.maxSamples,E.samples)}function vt(E){let S=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(E){let S=r.render.frame;f.get(E)!==S&&(f.set(E,S),E.update())}function qe(E,S){let P=E.colorSpace,W=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||P!==tr&&P!==Es&&(Jt.getTransfer(P)===le?(W!==hi||Q!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),S}function Ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=on,this.setupRenderTarget=N,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function R3(e,t){function n(i,s=Es){let a,r=Jt.getTransfer(s);if(i===Ai)return e.UNSIGNED_BYTE;if(i===xf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Sf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===jg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$g)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jg)return e.BYTE;if(i===Qg)return e.SHORT;if(i===No)return e.UNSIGNED_SHORT;if(i===yf)return e.INT;if(i===ya)return e.UNSIGNED_INT;if(i===Zi)return e.FLOAT;if(i===Do)return e.HALF_FLOAT;if(i===t0)return e.ALPHA;if(i===e0)return e.RGB;if(i===hi)return e.RGBA;if(i===bo)return e.DEPTH_COMPONENT;if(i===Lo)return e.DEPTH_STENCIL;if(i===n0)return e.RED;if(i===Mf)return e.RED_INTEGER;if(i===i0)return e.RG;if(i===bf)return e.RG_INTEGER;if(i===Tf)return e.RGBA_INTEGER;if(i===yc||i===xc||i===Sc||i===Mc)if(r===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===yc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===yc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ef||i===Af||i===wf||i===Cf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Nf||i===Df)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Rf||i===Nf)return r===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Df)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uf||i===Lf||i===Of||i===If||i===Pf||i===Bf||i===zf||i===Ff||i===Hf||i===Vf||i===Gf||i===kf||i===Xf||i===Wf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Uf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Of)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ff)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qf||i===Yf||i===Zf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===qf)return r===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kf||i===Jf||i===Qf||i===jf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Kf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var N3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D3=`
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

}`,b0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new cc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ei({vertexShader:N3,fragmentShader:D3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},T0=class extends Ss{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new b0,h={},_=n.getContextAttributes(),v=null,y=null,A=[],R=[],C=new Qt,D=null,T=new dn;T.viewport=new De;let b=new dn;b.viewport=new De;let L=[T,b],H=new lf,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=A[Z];return j===void 0&&(j=new wo,A[Z]=j),j.getHandSpace()};function J(Z){let j=R.indexOf(Z.inputSource);if(j===-1)return;let pt=A[j];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||r),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<A.length;Z++){let j=R[Z];j!==null&&(R[Z]=null,A[Z].disconnect(j))}k=null,Y=null,m.reset();for(let Z in h)delete h[Z];t.setRenderTarget(v),p=null,u=null,d=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",it),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,bt=null;_.depth&&(bt=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=_.stencil?Lo:bo,Ut=_.stencil?Uo:ya);let Zt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(Zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Xi(u.textureWidth,u.textureHeight,{format:hi,type:Ai,depthTexture:new lc(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Xi(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let j=0;j<Z.removed.length;j++){let pt=Z.removed[j],Ut=R.indexOf(pt);Ut>=0&&(R[Ut]=null,A[Ut].disconnect(pt))}for(let j=0;j<Z.added.length;j++){let pt=Z.added[j],Ut=R.indexOf(pt);if(Ut===-1){for(let Zt=0;Zt<A.length;Zt++)if(Zt>=R.length){R.push(pt),Ut=Zt;break}else if(R[Zt]===null){R[Zt]=pt,Ut=Zt;break}if(Ut===-1)break}let bt=A[Ut];bt&&bt.connect(pt)}}let V=new B,ot=new B;function ht(Z,j,pt){V.setFromMatrixPosition(j.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);let Ut=V.distanceTo(ot),bt=j.projectionMatrix.elements,Zt=pt.projectionMatrix.elements,on=bt[14]/(bt[10]-1),N=bt[14]/(bt[10]+1),be=(bt[9]+1)/bt[5],It=(bt[9]-1)/bt[5],Nt=(bt[8]-1)/bt[0],_t=(Zt[8]+1)/Zt[0],Te=on*Nt,vt=on*_t,Ft=Ut/(-Nt+_t),qe=Ft*-Nt;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(Ft),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Ie=on+Ft,E=N+Ft,S=Te-qe,P=vt+(Ut-qe),W=be*N/E*Ie,Q=It*N/E*Ie;Z.projectionMatrix.makePerspective(S,P,W,Q,Ie,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Tt(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),H.near=b.near=T.near=j,H.far=b.far=T.far=pt,(k!==H.near||Y!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),k=H.near,Y=H.far),H.layers.mask=Z.layers.mask|6,T.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;let Ut=Z.parent,bt=H.cameras;Tt(H,Ut);for(let Zt=0;Zt<bt.length;Zt++)Tt(bt[Zt],Ut);bt.length===2?ht(H,T,b):H.projectionMatrix.copy(T.projectionMatrix),Gt(Z,H,Ut)};function Gt(Z,j,pt){pt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Hh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Z){return h[Z]};let pe=null;function Me(Z,j){if(f=j.getViewerPose(c||r),g=j,f!==null){let pt=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,Ut=!0);for(let N=0;N<pt.length;N++){let be=pt[N],It=null;if(p!==null)It=p.getViewport(be);else{let _t=d.getViewSubImage(u,be);It=_t.viewport,N===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let Nt=L[N];Nt===void 0&&(Nt=new dn,Nt.layers.enable(N),Nt.viewport=new De,L[N]=Nt),Nt.matrix.fromArray(be.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(be.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(It.x,It.y,It.width,It.height),N===0&&(H.matrix.copy(Nt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ut===!0&&H.cameras.push(Nt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let N=d.getDepthInformation(pt[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let N=0;N<pt.length;N++){let be=pt[N].camera;if(be){let It=h[be];It||(It=new cc,h[be]=It);let Nt=d.getCameraImage(be);It.sourceTexture=Nt}}}}for(let pt=0;pt<A.length;pt++){let Ut=R[pt],bt=A[pt];Ut!==null&&bt!==void 0&&bt.update(Ut,j,c||r)}pe&&pe(Z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ne=new zb;ne.setAnimationLoop(Me),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}},or=new Wi,U3=new Ne;function L3(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,o0(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,_,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),d(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(a(m,h),g(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),x(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let _=t.get(h),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,or.copy(y),or.x*=-1,or.y*=-1,or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(U3.makeRotationFromEuler(or)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){let _=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=s[_.id];y===void 0&&(g(_),y=f(_),s[_.id]=y,_.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(_,A);let R=t.render.frame;a[_.id]!==R&&(u(_),a[_.id]=R)}function f(_){let v=d();_.__bindingPointIndex=v;let y=e.createBuffer(),A=_.__size,R=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,A,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let v=s[_.id],y=_.uniforms,A=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let R=0,C=y.length;R<C;R++){let D=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,b=D.length;T<b;T++){let L=D[T];if(p(L,R,T,A)===!0){let H=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let J=0;J<k.length;J++){let q=k[J],it=x(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,H+Y,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,Y),Y+=it.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(_,v,y,A){let R=_.value,C=v+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{let D=A[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(_){let v=_.uniforms,y=0,A=16;for(let C=0,D=v.length;C<D;C++){let T=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,L=T.length;b<L;b++){let H=T[b],k=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,J=k.length;Y<J;Y++){let q=k[Y],it=x(q),V=y%A,ot=V%it.boundary,ht=V+ot;y+=ot,ht!==0&&A-ht<it.storage&&(y+=A-ht),H.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=it.storage}}}let R=y%A;return R>0&&(y+=A-R),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function h(){for(let _ in s)e.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:l,update:c,dispose:h}}var id=class{constructor(t={}){let{canvas:n=ub(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let g=new Uint32Array(4),x=new Int32Array(4),m=null,h=null,_=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=qn;let R=0,C=0,D=null,T=-1,b=null,L=new De,H=new De,k=null,Y=new Kt(0),J=0,q=n.width,it=n.height,V=1,ot=null,ht=null,Tt=new De(0,0,q,it),Gt=new De(0,0,q,it),pe=!1,Me=new Co,ne=!1,Z=!1,j=new Ne,pt=new B,Ut=new De,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function on(){return D===null?V:1}let N=i;function be(M,O){return n.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",$,!1),N===null){let O="webgl2";if(N=be(O,M),N===null)throw be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let It,Nt,_t,Te,vt,Ft,qe,Ie,E,S,P,W,Q,G,Mt,st,yt,xt,et,ut,Ct,St,lt,zt;function U(){It=new jR(N),It.init(),St=new R3(N,It),Nt=new WR(N,It,t,St),_t=new w3(N,It),Nt.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),Te=new e2(N),vt=new p3,Ft=new C3(N,It,_t,vt,Nt,St,Te),qe=new YR(y),Ie=new QR(y),E=new ow(N),lt=new kR(N,E),S=new $R(N,E,Te,lt),P=new i2(N,S,E,Te),et=new n2(N,Nt,Ft),st=new qR(vt),W=new d3(y,qe,Ie,It,Nt,lt,st),Q=new L3(y,vt),G=new g3,Mt=new M3(It),xt=new GR(y,qe,Ie,_t,P,p,l),yt=new E3(y,P,Nt),zt=new O3(N,Te,Nt,_t),ut=new XR(N,It,Te),Ct=new t2(N,It,Te),Te.programs=W.programs,y.capabilities=Nt,y.extensions=It,y.properties=vt,y.renderLists=G,y.shadowMap=yt,y.state=_t,y.info=Te}U();let nt=new T0(y,N);this.xr=nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=It.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=It.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(q,it,!1))},this.getSize=function(M){return M.set(q,it)},this.setSize=function(M,O,z=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,it=O,n.width=Math.floor(M*V),n.height=Math.floor(O*V),z===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(q*V,it*V).floor()},this.setDrawingBufferSize=function(M,O,z){q=M,it=O,V=z,n.width=Math.floor(M*z),n.height=Math.floor(O*z),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,O,z,F){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,O,z,F),_t.viewport(L.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,O,z,F){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,O,z,F),_t.scissor(H.copy(Gt).multiplyScalar(V).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){_t.setScissorTest(pe=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,z=!0){let F=0;if(M){let I=!1;if(D!==null){let tt=D.texture.format;I=tt===Tf||tt===bf||tt===Mf}if(I){let tt=D.texture.type,ct=tt===Ai||tt===ya||tt===No||tt===Uo||tt===xf||tt===Sf,mt=xt.getClearColor(),ft=xt.getClearAlpha(),wt=mt.r,Dt=mt.g,Et=mt.b;ct?(g[0]=wt,g[1]=Dt,g[2]=Et,g[3]=ft,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=wt,x[1]=Dt,x[2]=Et,x[3]=ft,N.clearBufferiv(N.COLOR,0,x))}else F|=N.COLOR_BUFFER_BIT}O&&(F|=N.DEPTH_BUFFER_BIT),z&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",$,!1),xt.dispose(),G.dispose(),Mt.dispose(),vt.dispose(),qe.dispose(),Ie.dispose(),P.dispose(),lt.dispose(),zt.dispose(),W.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",wi),nt.removeEventListener("sessionend",A0),xa.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let M=Te.autoReset,O=yt.enabled,z=yt.autoUpdate,F=yt.needsUpdate,I=yt.type;U(),Te.autoReset=M,yt.enabled=O,yt.autoUpdate=z,yt.needsUpdate=F,yt.type=I}function $(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){let O=M.target;O.removeEventListener("dispose",K),gt(O)}function gt(M){Ot(M),vt.remove(M)}function Ot(M){let O=vt.get(M).programs;O!==void 0&&(O.forEach(function(z){W.releaseProgram(z)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,z,F,I,tt){O===null&&(O=bt);let ct=I.isMesh&&I.matrixWorld.determinant()<0,mt=qb(M,O,z,F,I);_t.setMaterial(F,ct);let ft=z.index,wt=1;if(F.wireframe===!0){if(ft=S.getWireframeAttribute(z),ft===void 0)return;wt=2}let Dt=z.drawRange,Et=z.attributes.position,qt=Dt.start*wt,ce=(Dt.start+Dt.count)*wt;tt!==null&&(qt=Math.max(qt,tt.start*wt),ce=Math.min(ce,(tt.start+tt.count)*wt)),ft!==null?(qt=Math.max(qt,0),ce=Math.min(ce,ft.count)):Et!=null&&(qt=Math.max(qt,0),ce=Math.min(ce,Et.count));let Ue=ce-qt;if(Ue<0||Ue===1/0)return;lt.setup(I,F,mt,z,ft);let xe,he=ut;if(ft!==null&&(xe=E.get(ft),he=Ct,he.setIndex(xe)),I.isMesh)F.wireframe===!0?(_t.setLineWidth(F.wireframeLinewidth*on()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(I.isLine){let At=F.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*on()),I.isLineSegments?he.setMode(N.LINES):I.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else I.isPoints?he.setMode(N.POINTS):I.isSprite&&he.setMode(N.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))he.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let At=I._multiDrawStarts,we=I._multiDrawCounts,jt=I._multiDrawCount,Dn=ft?E.get(ft).bytesPerElement:1,ur=vt.get(F).currentProgram.getUniforms();for(let Un=0;Un<jt;Un++)ur.setValue(N,"_gl_DrawID",Un),he.render(At[Un]/Dn,we[Un])}else if(I.isInstancedMesh)he.renderInstances(qt,Ue,I.count);else if(z.isInstancedBufferGeometry){let At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,At);he.renderInstances(qt,Ue,we)}else he.render(qt,Ue)};function me(M,O,z){M.transparent===!0&&M.side===Yi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,Ac(M,O,z),M.side=xs,M.needsUpdate=!0,Ac(M,O,z),M.side=Yi):Ac(M,O,z)}this.compile=function(M,O,z=null){z===null&&(z=M),h=Mt.get(z),h.init(O),v.push(h),z.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),M!==z&&M.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();let F=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let tt=I.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){let mt=tt[ct];me(mt,z,I),F.add(mt)}else me(tt,z,I),F.add(tt)}),h=v.pop(),F},this.compileAsync=function(M,O,z=null){let F=this.compile(M,O,z);return new Promise(I=>{function tt(){if(F.forEach(function(ct){vt.get(ct).currentProgram.isReady()&&F.delete(ct)}),F.size===0){I(M);return}setTimeout(tt,10)}It.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ie=null;function Ji(M){ie&&ie(M)}function wi(){xa.stop()}function A0(){xa.start()}let xa=new zb;xa.setAnimationLoop(Ji),typeof self<"u"&&xa.setContext(self),this.setAnimationLoop=function(M){ie=M,nt.setAnimationLoop(M),M===null?xa.stop():xa.start()},nt.addEventListener("sessionstart",wi),nt.addEventListener("sessionend",A0),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,D),h=Mt.get(M,v.length),h.init(O),v.push(h),j.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Me.setFromProjectionMatrix(j,Si,O.reversedDepth),Z=this.localClippingEnabled,ne=st.init(this.clippingPlanes,Z),m=G.get(M,_.length),m.init(),_.push(m),nt.enabled===!0&&nt.isPresenting===!0){let tt=y.xr.getDepthSensingMesh();tt!==null&&ad(tt,O,-1/0,y.sortObjects)}ad(M,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ht),Zt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Zt&&xt.addToRenderList(m,M),this.info.render.frame++,ne===!0&&st.beginShadows();let z=h.state.shadowsArray;yt.render(z,M,O),ne===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,I=m.transmissive;if(h.setupLights(),O.isArrayCamera){let tt=O.cameras;if(I.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){let ft=tt[ct];C0(F,I,M,ft)}Zt&&xt.render(M);for(let ct=0,mt=tt.length;ct<mt;ct++){let ft=tt[ct];w0(m,M,ft,ft.viewport)}}else I.length>0&&C0(F,I,M,O),Zt&&xt.render(M),w0(m,M,O);D!==null&&C===0&&(Ft.updateMultisampleRenderTarget(D),Ft.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,O),lt.resetDefaultState(),T=-1,b=null,v.pop(),v.length>0?(h=v[v.length-1],ne===!0&&st.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ad(M,O,z,F){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Me.intersectsSprite(M)){F&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);let ct=P.update(M),mt=M.material;mt.visible&&m.push(M,ct,mt,z,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Me.intersectsObject(M))){let ct=P.update(M),mt=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Ut.copy(ct.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(mt)){let ft=ct.groups;for(let wt=0,Dt=ft.length;wt<Dt;wt++){let Et=ft[wt],qt=mt[Et.materialIndex];qt&&qt.visible&&m.push(M,ct,qt,z,Ut.z,Et)}}else mt.visible&&m.push(M,ct,mt,z,Ut.z,null)}}let tt=M.children;for(let ct=0,mt=tt.length;ct<mt;ct++)ad(tt[ct],O,z,F)}function w0(M,O,z,F){let I=M.opaque,tt=M.transmissive,ct=M.transparent;h.setupLightsView(z),ne===!0&&st.setGlobalState(y.clippingPlanes,z),F&&_t.viewport(L.copy(F)),I.length>0&&Ec(I,O,z),tt.length>0&&Ec(tt,O,z),ct.length>0&&Ec(ct,O,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function C0(M,O,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[F.id]===void 0&&(h.state.transmissionRenderTarget[F.id]=new Xi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Do:Ai,minFilter:va,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let tt=h.state.transmissionRenderTarget[F.id],ct=F.viewport||L;tt.setSize(ct.z*y.transmissionResolutionScale,ct.w*y.transmissionResolutionScale);let mt=y.getRenderTarget(),ft=y.getActiveCubeFace(),wt=y.getActiveMipmapLevel();y.setRenderTarget(tt),y.getClearColor(Y),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Zt&&xt.render(z);let Dt=y.toneMapping;y.toneMapping=Ts;let Et=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),h.setupLightsView(F),ne===!0&&st.setGlobalState(y.clippingPlanes,F),Ec(M,z,F),Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt),It.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ce=0,Ue=O.length;ce<Ue;ce++){let xe=O[ce],he=xe.object,At=xe.geometry,we=xe.material,jt=xe.group;if(we.side===Yi&&he.layers.test(F.layers)){let Dn=we.side;we.side=Sn,we.needsUpdate=!0,R0(he,z,F,At,we,jt),we.side=Dn,we.needsUpdate=!0,qt=!0}}qt===!0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt))}y.setRenderTarget(mt,ft,wt),y.setClearColor(Y,J),Et!==void 0&&(F.viewport=Et),y.toneMapping=Dt}function Ec(M,O,z){let F=O.isScene===!0?O.overrideMaterial:null;for(let I=0,tt=M.length;I<tt;I++){let ct=M[I],mt=ct.object,ft=ct.geometry,wt=ct.group,Dt=ct.material;Dt.allowOverride===!0&&F!==null&&(Dt=F),mt.layers.test(z.layers)&&R0(mt,O,z,ft,Dt,wt)}}function R0(M,O,z,F,I,tt){M.onBeforeRender(y,O,z,F,I,tt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(y,O,z,F,M,tt),I.transparent===!0&&I.side===Yi&&I.forceSinglePass===!1?(I.side=Sn,I.needsUpdate=!0,y.renderBufferDirect(z,O,F,I,M,tt),I.side=xs,I.needsUpdate=!0,y.renderBufferDirect(z,O,F,I,M,tt),I.side=Yi):y.renderBufferDirect(z,O,F,I,M,tt),M.onAfterRender(y,O,z,F,I,tt)}function Ac(M,O,z){O.isScene!==!0&&(O=bt);let F=vt.get(M),I=h.state.lights,tt=h.state.shadowsArray,ct=I.state.version,mt=W.getParameters(M,I.state,tt,O,z),ft=W.getProgramCacheKey(mt),wt=F.programs;F.environment=M.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(M.isMeshStandardMaterial?Ie:qe).get(M.envMap||F.environment),F.envMapRotation=F.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",K),wt=new Map,F.programs=wt);let Dt=wt.get(ft);if(Dt!==void 0){if(F.currentProgram===Dt&&F.lightsStateVersion===ct)return D0(M,mt),Dt}else mt.uniforms=W.getUniforms(M),M.onBeforeCompile(mt,y),Dt=W.acquireProgram(mt,ft),wt.set(ft,Dt),F.uniforms=mt.uniforms;let Et=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=st.uniform),D0(M,mt),F.needsLights=Zb(M),F.lightsStateVersion=ct,F.needsLights&&(Et.ambientLightColor.value=I.state.ambient,Et.lightProbe.value=I.state.probe,Et.directionalLights.value=I.state.directional,Et.directionalLightShadows.value=I.state.directionalShadow,Et.spotLights.value=I.state.spot,Et.spotLightShadows.value=I.state.spotShadow,Et.rectAreaLights.value=I.state.rectArea,Et.ltc_1.value=I.state.rectAreaLTC1,Et.ltc_2.value=I.state.rectAreaLTC2,Et.pointLights.value=I.state.point,Et.pointLightShadows.value=I.state.pointShadow,Et.hemisphereLights.value=I.state.hemi,Et.directionalShadowMap.value=I.state.directionalShadowMap,Et.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Et.spotShadowMap.value=I.state.spotShadowMap,Et.spotLightMatrix.value=I.state.spotLightMatrix,Et.spotLightMap.value=I.state.spotLightMap,Et.pointShadowMap.value=I.state.pointShadowMap,Et.pointShadowMatrix.value=I.state.pointShadowMatrix),F.currentProgram=Dt,F.uniformsList=null,Dt}function N0(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Po.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function D0(M,O){let z=vt.get(M);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function qb(M,O,z,F,I){O.isScene!==!0&&(O=bt),Ft.resetTextureUnits();let tt=O.fog,ct=F.isMeshStandardMaterial?O.environment:null,mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:tr,ft=(F.isMeshStandardMaterial?Ie:qe).get(F.envMap||ct),wt=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Et=!!z.morphAttributes.position,qt=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color,Ue=Ts;F.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=y.toneMapping);let xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,he=xe!==void 0?xe.length:0,At=vt.get(F),we=h.state.lights;if(ne===!0&&(Z===!0||M!==b)){let mn=M===b&&F.id===T;st.setState(F,M,mn)}let jt=!1;F.version===At.__version?(At.needsLights&&At.lightsStateVersion!==we.state.version||At.outputColorSpace!==mt||I.isBatchedMesh&&At.batching===!1||!I.isBatchedMesh&&At.batching===!0||I.isBatchedMesh&&At.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&At.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&At.instancing===!1||!I.isInstancedMesh&&At.instancing===!0||I.isSkinnedMesh&&At.skinning===!1||!I.isSkinnedMesh&&At.skinning===!0||I.isInstancedMesh&&At.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&At.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&At.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&At.instancingMorph===!1&&I.morphTexture!==null||At.envMap!==ft||F.fog===!0&&At.fog!==tt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Dt||At.morphTargets!==Et||At.morphNormals!==qt||At.morphColors!==ce||At.toneMapping!==Ue||At.morphTargetsCount!==he)&&(jt=!0):(jt=!0,At.__version=F.version);let Dn=At.currentProgram;jt===!0&&(Dn=Ac(F,O,I));let ur=!1,Un=!1,Fo=!1,Ce=Dn.getUniforms(),Jn=At.uniforms;if(_t.useProgram(Dn.program)&&(ur=!0,Un=!0,Fo=!0),F.id!==T&&(T=F.id,Un=!0),ur||b!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ce.setValue(N,"projectionMatrix",M.projectionMatrix),Ce.setValue(N,"viewMatrix",M.matrixWorldInverse);let Mn=Ce.map.cameraPosition;Mn!==void 0&&Mn.setValue(N,pt.setFromMatrixPosition(M.matrixWorld)),Nt.logarithmicDepthBuffer&&Ce.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ce.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Un=!0,Fo=!0)}if(I.isSkinnedMesh){Ce.setOptional(N,I,"bindMatrix"),Ce.setOptional(N,I,"bindMatrixInverse");let mn=I.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ce.setValue(N,"boneTexture",mn.boneTexture,Ft))}I.isBatchedMesh&&(Ce.setOptional(N,I,"batchingTexture"),Ce.setValue(N,"batchingTexture",I._matricesTexture,Ft),Ce.setOptional(N,I,"batchingIdTexture"),Ce.setValue(N,"batchingIdTexture",I._indirectTexture,Ft),Ce.setOptional(N,I,"batchingColorTexture"),I._colorsTexture!==null&&Ce.setValue(N,"batchingColorTexture",I._colorsTexture,Ft));let Qn=z.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&et.update(I,z,Dn),(Un||At.receiveShadow!==I.receiveShadow)&&(At.receiveShadow=I.receiveShadow,Ce.setValue(N,"receiveShadow",I.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Jn.envMap.value=ft,Jn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&O.environment!==null&&(Jn.envMapIntensity.value=O.environmentIntensity),Un&&(Ce.setValue(N,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&Yb(Jn,Fo),tt&&F.fog===!0&&Q.refreshFogUniforms(Jn,tt),Q.refreshMaterialUniforms(Jn,F,V,it,h.state.transmissionRenderTarget[M.id]),Po.upload(N,N0(At),Jn,Ft)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Po.upload(N,N0(At),Jn,Ft),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ce.setValue(N,"center",I.center),Ce.setValue(N,"modelViewMatrix",I.modelViewMatrix),Ce.setValue(N,"normalMatrix",I.normalMatrix),Ce.setValue(N,"modelMatrix",I.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let mn=F.uniformsGroups;for(let Mn=0,rd=mn.length;Mn<rd;Mn++){let Sa=mn[Mn];zt.update(Sa,Dn),zt.bind(Sa,Dn)}}return Dn}function Yb(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Zb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,O,z){let F=vt.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),vt.get(M.texture).__webglTexture=O,vt.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let z=vt.get(M);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0};let Kb=N.createFramebuffer();this.setRenderTarget=function(M,O=0,z=0){D=M,R=O,C=z;let F=!0,I=null,tt=!1,ct=!1;if(M){let ft=vt.get(M);if(ft.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(N.FRAMEBUFFER,null),F=!1;else if(ft.__webglFramebuffer===void 0)Ft.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ft.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Et=M.depthTexture;if(ft.__boundDepthTexture!==Et){if(Et!==null&&vt.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(M)}}let wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(ct=!0);let Dt=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?I=Dt[O][z]:I=Dt[O],tt=!0):M.samples>0&&Ft.useMultisampledRTT(M)===!1?I=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?I=Dt[z]:I=Dt,L.copy(M.viewport),H.copy(M.scissor),k=M.scissorTest}else L.copy(Tt).multiplyScalar(V).floor(),H.copy(Gt).multiplyScalar(V).floor(),k=pe;if(z!==0&&(I=Kb),_t.bindFramebuffer(N.FRAMEBUFFER,I)&&F&&_t.drawBuffers(M,I),_t.viewport(L),_t.scissor(H),_t.setScissorTest(k),tt){let ft=vt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,z)}else if(ct){let ft=O;for(let wt=0;wt<M.textures.length;wt++){let Dt=vt.get(M.textures[wt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+wt,Dt.__webglTexture,z,ft)}}else if(M!==null&&z!==0){let ft=vt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(M,O,z,F,I,tt,ct,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft){_t.bindFramebuffer(N.FRAMEBUFFER,ft);try{let wt=M.textures[mt],Dt=wt.format,Et=wt.type;if(!Nt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-F&&z>=0&&z<=M.height-I&&(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(O,z,F,I,St.convert(Dt),St.convert(Et),tt))}finally{let wt=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,O,z,F,I,tt,ct,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(ft=ft[ct]),ft)if(O>=0&&O<=M.width-F&&z>=0&&z<=M.height-I){_t.bindFramebuffer(N.FRAMEBUFFER,ft);let wt=M.textures[mt],Dt=wt.format,Et=wt.type;if(!Nt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt),N.readPixels(O,z,F,I,St.convert(Dt),St.convert(Et),0);let ce=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,ce);let Ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hb(N,Ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(qt),N.deleteSync(Ue),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,z=0){let F=Math.pow(2,-z),I=Math.floor(M.image.width*F),tt=Math.floor(M.image.height*F),ct=O!==null?O.x:0,mt=O!==null?O.y:0;Ft.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ct,mt,I,tt),_t.unbindTexture()};let Jb=N.createFramebuffer(),Qb=N.createFramebuffer();this.copyTextureToTexture=function(M,O,z=null,F=null,I=0,tt=null){tt===null&&(I!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=I,I=0):tt=0);let ct,mt,ft,wt,Dt,Et,qt,ce,Ue,xe=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(z!==null)ct=z.max.x-z.min.x,mt=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,wt=z.min.x,Dt=z.min.y,Et=z.isBox3?z.min.z:0;else{let Qn=Math.pow(2,-I);ct=Math.floor(xe.width*Qn),mt=Math.floor(xe.height*Qn),M.isDataArrayTexture?ft=xe.depth:M.isData3DTexture?ft=Math.floor(xe.depth*Qn):ft=1,wt=0,Dt=0,Et=0}F!==null?(qt=F.x,ce=F.y,Ue=F.z):(qt=0,ce=0,Ue=0);let he=St.convert(O.format),At=St.convert(O.type),we;O.isData3DTexture?(Ft.setTexture3D(O,0),we=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ft.setTexture2DArray(O,0),we=N.TEXTURE_2D_ARRAY):(Ft.setTexture2D(O,0),we=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);let jt=N.getParameter(N.UNPACK_ROW_LENGTH),Dn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ur=N.getParameter(N.UNPACK_SKIP_PIXELS),Un=N.getParameter(N.UNPACK_SKIP_ROWS),Fo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Et);let Ce=M.isDataArrayTexture||M.isData3DTexture,Jn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let Qn=vt.get(M),mn=vt.get(O),Mn=vt.get(Qn.__renderTarget),rd=vt.get(mn.__renderTarget);_t.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,rd.__webglFramebuffer);for(let Sa=0;Sa<ft;Sa++)Ce&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,I,Et+Sa),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.get(O).__webglTexture,tt,Ue+Sa)),N.blitFramebuffer(wt,Dt,ct,mt,qt,ce,ct,mt,N.DEPTH_BUFFER_BIT,N.NEAREST);_t.bindFramebuffer(N.READ_FRAMEBUFFER,null),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(I!==0||M.isRenderTargetTexture||vt.has(M)){let Qn=vt.get(M),mn=vt.get(O);_t.bindFramebuffer(N.READ_FRAMEBUFFER,Jb),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,Qb);for(let Mn=0;Mn<ft;Mn++)Ce?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Qn.__webglTexture,I,Et+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Qn.__webglTexture,I),Jn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,tt,Ue+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,tt),I!==0?N.blitFramebuffer(wt,Dt,ct,mt,qt,ce,ct,mt,N.COLOR_BUFFER_BIT,N.NEAREST):Jn?N.copyTexSubImage3D(we,tt,qt,ce,Ue+Mn,wt,Dt,ct,mt):N.copyTexSubImage2D(we,tt,qt,ce,wt,Dt,ct,mt);_t.bindFramebuffer(N.READ_FRAMEBUFFER,null),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Jn?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(we,tt,qt,ce,Ue,ct,mt,ft,he,At,xe.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(we,tt,qt,ce,Ue,ct,mt,ft,he,xe.data):N.texSubImage3D(we,tt,qt,ce,Ue,ct,mt,ft,he,At,xe):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,tt,qt,ce,ct,mt,he,At,xe.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,tt,qt,ce,xe.width,xe.height,he,xe.data):N.texSubImage2D(N.TEXTURE_2D,tt,qt,ce,ct,mt,he,At,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,jt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ur),N.pixelStorei(N.UNPACK_SKIP_ROWS,Un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fo),tt===0&&O.generateMipmaps&&N.generateMipmap(we),_t.unbindTexture()},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&Ft.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ft.setTextureCube(M,0):M.isData3DTexture?Ft.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ft.setTexture2DArray(M,0):Ft.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){R=0,C=0,D=null,_t.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var As=e=>`/assets/${e}.jpg`,P3=["All work","Paintings","Botanical studies","Drawings","Handcrafted"],B3=[54,32,30,55,41,27,35,36,37,39,42,45,47,50,51,52,28,29,31,33,34,38,18,43,48,17,19,20,21,22,23,25,26,44,46,53,24,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1],kb=[18,28,29,30,31,32,33,34,38,41,42,43,48,51,55],Xb=[17,19,20,21,22,23,25,37,39,44,46,47,49,53],zo=B3.map(e=>({id:e,category:e<=15?"Handcrafted":kb.includes(e)?"Botanical studies":Xb.includes(e)?"Drawings":"Paintings",title:e===54?"A quiet kind of light":e===55?"The architecture of a leaf":e===32?"Veins of autumn":e===30?"Between green and gold":e===41?"An unfolding world":e===27?"On the surface":e===51?"A spectrum of leaves":e<=15?"Made by hand":kb.includes(e)?"Botanical study":Xb.includes(e)?"Studies in line":"From the studio"}));function z3(){let e=(0,w.useRef)();return(0,w.useEffect)(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t,n;try{t=new id({alpha:!0,antialias:!1}),t.setPixelRatio(Math.min(devicePixelRatio,1.5)),e.current.appendChild(t.domElement);let i=new rc,s=new dn(45,1,.1,100);s.position.z=6;let a=new vs;i.add(a),i.add(new pc(16774367,3226667,2));let r=new gc(16777215,3);r.position.set(3,4,5),i.add(r);let o=new uc(0,0,1,1.8,0,Math.PI*2);for(let u=0;u<7;u++){let p=o.getPoints(70).map(m=>new B(m.x,m.y,0)),g=new Ti().setFromPoints(p),x=new oc(g,new Ro({color:8094813,transparent:!0,opacity:.12}));x.position.set((u%3-1)*3,(u%2-.5)*3,-u*.4),x.rotation.z=u*.7,x.scale.setScalar(.6+u*.12),a.add(x)}let l=()=>{let u=innerWidth,p=innerHeight;t.setSize(u,p),s.aspect=u/p,s.updateProjectionMatrix()};l(),addEventListener("resize",l);let c=!0,f=()=>{c=!document.hidden};document.addEventListener("visibilitychange",f);let d=u=>{n=requestAnimationFrame(d),c&&(a.rotation.z=Math.sin(u*6e-5)*.1,a.position.y=Math.sin(u*15e-5)*.12,t.render(i,s))};return n=requestAnimationFrame(d),()=>{cancelAnimationFrame(n),removeEventListener("resize",l),document.removeEventListener("visibilitychange",f),i.traverse(u=>{u.geometry?.dispose(),u.material?.dispose()}),t.dispose(),t.domElement.remove()}}catch{}},[]),w.default.createElement("div",{className:"atmosphere",ref:e,"aria-hidden":"true"})}function F3(){return w.default.createElement("section",{id:"about",className:"section about"},w.default.createElement("div",{className:"about-heading"},w.default.createElement("p",{className:"eyebrow"},"THE PERSON BEHIND THE PAINTINGS"),w.default.createElement("h2",null,"Observing deeply.",w.default.createElement("br",null),w.default.createElement("em",null,"Creating thoughtfully."))),w.default.createElement("div",{className:"about-portrait"},w.default.createElement("div",{className:"about-photo"},w.default.createElement("img",{src:As(16),loading:"lazy",alt:"Malaika Muhammad Asghar, fine artist"})),w.default.createElement("span",{className:"about-signature"},"Malaika Asghar"),w.default.createElement("span",{className:"about-photo-note"},"THE ARTIST / DASKA, PAKISTAN")),w.default.createElement("div",{className:"about-body"},w.default.createElement("p",{className:"lead"},"I\u2019m Malaika Muhammad Asghar \u2014 a Fine Arts graduate from the University of Gujrat, based in Daska, Pakistan."),w.default.createElement("p",null,"My practice brings together painting, drawing, sculpture and printmaking. I am drawn to the hidden beauty of the natural world: the delicate structure of a leaf, the passage of time across a surface, and the stories held in ordinary things."),w.default.createElement("p",null,"My final-year thesis, \u201CNature\u2019s Hidden Beauty\u201D, explores enlarged leaf forms in oil on canvas, revealing intricate textures and patterns through close observation and realism."),w.default.createElement("div",{className:"skill-tags"},w.default.createElement("span",null,"Oil painting"),w.default.createElement("span",null,"Drawing"),w.default.createElement("span",null,"Sculpture"),w.default.createElement("span",null,"Printmaking"),w.default.createElement("span",null,"Photography"))),w.default.createElement("div",{id:"journey",className:"journey"},w.default.createElement("p",{className:"eyebrow"},"EDUCATION / THE CREATIVE JOURNEY"),[["2026","BS Fine Arts","University of Gujrat","CGPA 3.44"],["2022","FSc \xB7 Pre-Medical","BISE Gujranwala","Grade A"],["","Matric \xB7 Science","BISE Gujranwala","Grade A+"]].map(([e,t,n,i])=>w.default.createElement("div",{className:"timeline-row reveal",key:t},w.default.createElement("span",null,e||"FOUNDATION"),w.default.createElement("h3",null,t),w.default.createElement("p",null,n,w.default.createElement("small",null,i))))),w.default.createElement("div",{className:"exhibition"},w.default.createElement("p",{className:"eyebrow"},"ART SELECTIONS & EXHIBITIONS"),w.default.createElement("div",{className:"selection-cities"},w.default.createElement("span",null,"LAHORE \xB7 ART SELECTION"),w.default.createElement("span",null,"ISLAMABAD \xB7 PNCA")),w.default.createElement("p",null,"Artwork selected in Lahore and Islamabad, including the thesis presentation at PNCA Islamabad."),w.default.createElement("h3",null,"4th Young Graduates Exhibition"),w.default.createElement("p",null,"Selected to exhibit final-year thesis artwork at the Pakistan National Art Council, Islamabad, in a group exhibition."),w.default.createElement("div",{className:"workshops"},w.default.createElement("p",null,w.default.createElement("strong",null,"Advanced painting"),w.default.createElement("br",null),"Workshop with Miss Kiran Saleem."),w.default.createElement("p",null,w.default.createElement("strong",null,"Art & contemporary practice"),w.default.createElement("br",null),"Seminar with Dr. Arjumand Faisal."),w.default.createElement("p",null,w.default.createElement("strong",null,"Printmaking"),w.default.createElement("br",null),"Seminar with Atif Khan Print Maker."))))}function H3(){return w.default.createElement("section",{className:"teaching section",id:"teaching"},w.default.createElement("p",{className:"eyebrow"},"SHARING THE PRACTICE / ART EDUCATION"),w.default.createElement("h2",null,"Make room",w.default.createElement("br",null),"for ",w.default.createElement("em",null,"creative discovery.")),w.default.createElement("p",{className:"teaching-intro"},"A thoughtful approach to art learning: encouraging curiosity, patient observation and the confidence to develop an individual visual voice."),w.default.createElement("div",{className:"teaching-grid"},[["01","Learning to see","Explore line, shape, proportion and shading through still-life studies and drawing from observation."],["02","Understanding colour","Build an understanding of colour mixing, tonal values and composition through practical painting exercises."],["03","Finding a voice","Experiment with materials and nature-inspired ideas, using constructive feedback to develop each piece further."]].map(([e,t,n])=>w.default.createElement("article",{key:e},w.default.createElement("span",null,e),w.default.createElement("h3",null,t),w.default.createElement("p",null,n)))),w.default.createElement("figure",{className:"studio-mood"},w.default.createElement("img",{src:"/assets/studio-mood.png",loading:"lazy",alt:"Decorative botanical and floral painting studies"}),w.default.createElement("figcaption",null,"Studio mood \xB7 AI-generated decorative studies. Original artist works are in the collection above.")),w.default.createElement("a",{className:"text-link",href:"mailto:malaikaasghar820@gmail.com?subject=Art%20learning%20enquiry"},"Discuss art learning & collaboration \u2197"))}function V3(){let[e,t]=(0,w.useState)(!0);return(0,w.useEffect)(()=>{let n=setTimeout(()=>t(!1),matchMedia("(prefers-reduced-motion: reduce)").matches?400:1900);return()=>clearTimeout(n)},[]),e?w.default.createElement("div",{className:"intro-loader",role:"status","aria-label":"Opening Malaika\u2019s portfolio"},w.default.createElement("div",{className:"intro-portrait"},w.default.createElement("img",{src:As(16),alt:"Malaika Asghar"})),w.default.createElement("p",{className:"eyebrow"},"WELCOME TO MY CREATIVE WORLD"),w.default.createElement("h2",null,"Malaika ",w.default.createElement("em",null,"Asghar.")),w.default.createElement("span",{className:"intro-progress"}),w.default.createElement("p",{className:"intro-caption"},"Nature observed. Stories made by hand."),w.default.createElement("button",{onClick:()=>t(!1)},"Enter portfolio \u2197")):null}function G3(){let[e,t]=(0,w.useState)("All work"),[n,i]=(0,w.useState)(12),[s,a]=(0,w.useState)(null),[r,o]=(0,w.useState)(!1),l=zo.filter(d=>e==="All work"||d.category===e),c=l.slice(0,n);(0,w.useEffect)(()=>{let d=new IntersectionObserver(u=>u.forEach(p=>{p.isIntersecting&&(p.target.classList.add("seen"),d.unobserve(p.target))}),{threshold:.08});return document.querySelectorAll(".reveal").forEach(u=>d.observe(u)),()=>d.disconnect()},[e,n]),(0,w.useEffect)(()=>{if(s===null)return;let d=document.body.style.overflow;document.body.style.overflow="hidden";let u=p=>{if(p.key==="Escape"&&a(null),p.key==="ArrowRight"&&a(g=>(g+1)%l.length),p.key==="ArrowLeft"&&a(g=>(g-1+l.length)%l.length),p.key==="Tab"){let g=document.querySelectorAll(".lightbox button"),x=g[0],m=g[g.length-1];p.shiftKey&&document.activeElement===x?(p.preventDefault(),m.focus()):!p.shiftKey&&document.activeElement===m&&(p.preventDefault(),x.focus())}};return addEventListener("keydown",u),document.querySelector(".close")?.focus(),()=>{document.body.style.overflow=d,removeEventListener("keydown",u),document.querySelector(`[data-work="${l[s]?.id}"]`)?.focus()}},[s,e]);let f=()=>o(!1);return w.default.createElement(w.default.Fragment,null,w.default.createElement(V3,null),w.default.createElement(z3,null),w.default.createElement("header",null,w.default.createElement("a",{className:"brand",href:"#home","aria-label":"Malaika Asghar home"},w.default.createElement("span",{className:"brand-mark"},"a",w.default.createElement("span",null,"\u2733")),w.default.createElement("span",null,"MALAIKA",w.default.createElement("br",null),"ASGHAR")),w.default.createElement("nav",{className:r?"open":"","aria-label":"Main navigation"},w.default.createElement("a",{onClick:f,href:"#works"},"Selected work"),w.default.createElement("a",{onClick:f,href:"#about"},"About"),w.default.createElement("a",{onClick:f,href:"#journey"},"Education"),w.default.createElement("a",{onClick:f,href:"#collection"},"Collection")),w.default.createElement("a",{className:"header-link",href:"/assets/Malaika-Asghar-CV.jpeg",download:!0},"Download CV ",w.default.createElement("span",null,"\u2193")),w.default.createElement("button",{className:"menu",onClick:()=>o(!r),"aria-expanded":r,"aria-label":"Toggle navigation"},r?"Close \u2212":"Menu +")),w.default.createElement("main",{id:"home"},w.default.createElement("section",{className:"hero"},w.default.createElement("div",{className:"hero-copy"},w.default.createElement("p",{className:"eyebrow"},w.default.createElement("span",{className:"dot"})," MALAIKA MUHAMMAD ASGHAR \xB7 VISUAL ARTIST"),w.default.createElement("h1",null,"Nature\u2019s",w.default.createElement("br",null),w.default.createElement("em",null,"hidden beauty."),w.default.createElement("span",{className:"star"},"\u2733")),w.default.createElement("p",{className:"intro"},"I\u2019m Malaika Muhammad Asghar, a Fine Arts graduate exploring nature through painting, drawing and the quiet beauty of everyday details."),w.default.createElement("a",{className:"pill",href:"#works"},"Discover the work ",w.default.createElement("span",null,"\u2197")),w.default.createElement("a",{className:"cv-link",href:"/assets/Malaika-Asghar-CV.jpeg",download:!0},"Download my CV \u2193"),w.default.createElement("div",{className:"hero-note"},w.default.createElement("span",{className:"tiny-line"})," ORIGINAL WORKS / AN INDEPENDENT PRACTICE")),w.default.createElement("div",{className:"hero-art"},w.default.createElement("span",{className:"art-top"},"THE ARTIST BEHIND THE WORK"),w.default.createElement("div",{className:"art-orbit"}),w.default.createElement("div",{className:"portrait-frame"},w.default.createElement("img",{src:As(16),alt:"Portrait of the artist wearing glasses and a purple botanical patterned scarf",fetchPriority:"high"}),w.default.createElement("span",{className:"portrait-caption"},"THE ARTIST / A LIFE IN COLOUR")),w.default.createElement("div",{className:"portrait-art"},w.default.createElement("img",{src:As(32),alt:"Red and gold botanical painting"})),w.default.createElement("div",{className:"art-small"},w.default.createElement("img",{src:As(30),alt:"Green and gold textured botanical painting",fetchPriority:"high"})),w.default.createElement("span",{className:"round-stamp"},"LOOK A LITTLE CLOSER",w.default.createElement("br",null),"\u2199"),w.default.createElement("span",{className:"vertical-note"},"OBSERVE. FEEL. CREATE.")),w.default.createElement("div",{className:"hero-bottom"},w.default.createElement("span",null,"ART IS A WAY OF PAYING ATTENTION."),w.default.createElement("a",{href:"#works"},"SCROLL TO EXPLORE \u2193"))),w.default.createElement("div",{className:"ticker",role:"img","aria-label":"Artistic skills: oil painting, drawing and sketching, botanical studies, sculpture, printmaking, photography, crochet and handcraft."},w.default.createElement("div",null,"OIL PAINTING ",w.default.createElement("i",null,"\u2733")," DRAWING & SKETCHING ",w.default.createElement("i",null,"\u2733")," BOTANICAL STUDIES ",w.default.createElement("i",null,"\u2733")," SCULPTURE ",w.default.createElement("i",null,"\u2733")," PRINTMAKING ",w.default.createElement("i",null,"\u2733")," PHOTOGRAPHY ",w.default.createElement("i",null,"\u2733")," CROCHET & HANDCRAFT ",w.default.createElement("i",null,"\u2733")," OIL PAINTING ",w.default.createElement("i",null,"\u2733")," DRAWING & SKETCHING ",w.default.createElement("i",null,"\u2733")," BOTANICAL STUDIES ",w.default.createElement("i",null,"\u2733")," SCULPTURE ",w.default.createElement("i",null,"\u2733")," PRINTMAKING ",w.default.createElement("i",null,"\u2733")," PHOTOGRAPHY ",w.default.createElement("i",null,"\u2733")," CROCHET & HANDCRAFT ",w.default.createElement("i",null,"\u2733")," ")),w.default.createElement("section",{id:"works",className:"section selected"},w.default.createElement("div",{className:"section-head reveal"},w.default.createElement("div",null,w.default.createElement("p",{className:"eyebrow"},"01 / SELECTED WORK"),w.default.createElement("h2",null,"Small details.",w.default.createElement("br",null),w.default.createElement("em",null,"Entire worlds."))),w.default.createElement("p",null,"A closer look at the colours, forms and",w.default.createElement("br",null),"textures that often go unnoticed.")),w.default.createElement("div",{className:"featured-grid"},[54,55,41].map((d,u)=>w.default.createElement("button",{className:`feature feature-${u} reveal`,key:d,"data-work":d,onClick:()=>{t("All work"),a(zo.findIndex(p=>p.id===d))}},w.default.createElement("div",{className:"image-wrap"},w.default.createElement("img",{src:As(d),alt:zo.find(p=>p.id===d).title,loading:"lazy"}),w.default.createElement("span",{className:"view-circle"},"\u2197")),w.default.createElement("div",{className:"caption"},w.default.createElement("div",null,w.default.createElement("h3",null,zo.find(p=>p.id===d).title),w.default.createElement("span",null,u===0?"LANDSCAPE":"BOTANICAL STUDY")),w.default.createElement("span",null,"0",u+1)))))),w.default.createElement(F3,null),w.default.createElement("section",{className:"leaf-story",id:"practice"},w.default.createElement("div",{className:"leaf-photo reveal"},w.default.createElement("img",{src:As(31),loading:"lazy",alt:"Close study of a leaf's intricate natural structure"}),w.default.createElement("span",null,"A CLOSER LOOK / BOTANICAL STUDIES")),w.default.createElement("div",{className:"leaf-copy reveal"},w.default.createElement("p",{className:"eyebrow"},"FINAL YEAR THESIS \xB7 OIL ON CANVAS"),w.default.createElement("span",{className:"outline-star"},"\u2733"),w.default.createElement("h2",null,"Nature\u2019s",w.default.createElement("br",null),w.default.createElement("em",null,"Hidden Beauty.")),w.default.createElement("p",null,"A vein becomes a path. A surface becomes a landscape. Across paintings, drawings and handmade objects, this practice returns to the beauty of looking closely."),w.default.createElement("p",null,"From expressive colour to careful lines, each piece offers a different way of seeing the familiar."),w.default.createElement("a",{className:"text-link",href:"#collection",onClick:()=>{t("Botanical studies"),i(12)}},"Explore the botanical studies ",w.default.createElement("span",null,"\u2197")))),w.default.createElement("section",{className:"section gallery",id:"collection"},w.default.createElement("div",{className:"section-head reveal"},w.default.createElement("div",null,w.default.createElement("p",{className:"eyebrow"},"03 / THE COLLECTION"),w.default.createElement("h2",null,"A world of",w.default.createElement("br",null),w.default.createElement("em",null,"many expressions."))),w.default.createElement("p",null,"Paint, pencil, thread.",w.default.createElement("br",null),"Different materials. One curious eye.")),w.default.createElement("div",{className:"filters",role:"group","aria-label":"Filter artwork"},P3.map(d=>w.default.createElement("button",{key:d,"aria-pressed":d===e,className:d===e?"active":"",onClick:()=>{t(d),i(12)}},d,w.default.createElement("span",null,d==="All work"?zo.length:zo.filter(u=>u.category===d).length)))),w.default.createElement("div",{className:"art-grid"},c.map((d,u)=>w.default.createElement("button",{className:"work reveal",key:d.id,"data-work":d.id,onClick:()=>a(u)},w.default.createElement("div",{className:"work-image"},w.default.createElement("img",{src:As(d.id),loading:"lazy",alt:`${d.category}: ${d.title}`}),w.default.createElement("span",{className:"view-circle"},"\u2197")),w.default.createElement("div",{className:"caption"},w.default.createElement("div",null,w.default.createElement("h3",null,d.title),w.default.createElement("span",null,d.category)),w.default.createElement("span",null,"\u2197"))))),l.length>n?w.default.createElement("button",{className:"load pill",onClick:()=>i(d=>d+12)},"More from the studio ",w.default.createElement("span",null,"+")):w.default.createElement("p",{className:"end-note"},"You\u2019ve explored this collection. Thank you for looking closely.")),w.default.createElement(H3,null),w.default.createElement("section",{className:"closing"},w.default.createElement("p",{className:"eyebrow"},"CONTACT US \xB7 MALAIKA ASGHAR"),w.default.createElement("h2",null,"Let\u2019s bring your",w.default.createElement("br",null),w.default.createElement("em",null,"ideas to life.")),w.default.createElement("p",{className:"contact-intro"},"For artwork enquiries, creative collaborations or art learning,",w.default.createElement("br",null),"get in touch. I\u2019d love to hear what you have in mind."),w.default.createElement("div",{className:"contact-actions"},w.default.createElement("a",{className:"pill whatsapp",href:"https://wa.me/923245111521",target:"_blank",rel:"noopener noreferrer"},"Chat on WhatsApp ",w.default.createElement("span",null,"\u2197")),w.default.createElement("a",{className:"contact-email",href:"mailto:malaikaasghar820@gmail.com"},"Send an email \u2197")),w.default.createElement("div",{className:"contact-details"},w.default.createElement("a",{href:"tel:+923245111521"},w.default.createElement("small",null,"CALL / WHATSAPP"),"+92 324 5111521"),w.default.createElement("a",{href:"mailto:malaikaasghar820@gmail.com"},w.default.createElement("small",null,"EMAIL"),"malaikaasghar820@gmail.com"),w.default.createElement("span",null,w.default.createElement("small",null,"BASED IN"),"Daska, Punjab, Pakistan")),w.default.createElement("span",{className:"closing-flower","aria-hidden":"true"},"\u2733"))),w.default.createElement("footer",null,w.default.createElement("a",{className:"brand",href:"#home"},w.default.createElement("span",{className:"brand-mark"},"a",w.default.createElement("span",null,"\u2733")),w.default.createElement("span",null,"MALAIKA",w.default.createElement("br",null),"ASGHAR")),w.default.createElement("p",null,"Nature observed. Stories made by hand."),w.default.createElement("a",{href:"#home"},"BACK TO TOP \u2191")),s!==null&&l[s]&&w.default.createElement("div",{className:"lightbox",role:"dialog","aria-modal":"true","aria-label":"Artwork viewer",onClick:d=>{d.target===d.currentTarget&&a(null)}},w.default.createElement("button",{className:"close",onClick:()=>a(null),"aria-label":"Close artwork viewer"},"Close \xD7"),w.default.createElement("div",{className:"lightbox-image"},w.default.createElement("img",{src:As(l[s].id),alt:l[s].title})),w.default.createElement("div",{className:"lightbox-bottom"},w.default.createElement("button",{onClick:()=>a((s-1+l.length)%l.length),"aria-label":"Previous artwork"},"\u2190"),w.default.createElement("div",null,w.default.createElement("h3",null,l[s].title),w.default.createElement("p",null,l[s].category," \xB7 ",s+1," / ",l.length)),w.default.createElement("button",{onClick:()=>a((s+1)%l.length),"aria-label":"Next artwork"},"\u2192"))))}(0,Wb.createRoot)(document.getElementById("root")).render(w.default.createElement(G3,null));})();
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
